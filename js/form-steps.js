import { config, validateConfig } from './config.js';

// Функция для отправки данных в Telegram
async function sendToTelegram(data) {
    try {
        validateConfig();
    } catch (error) {
        console.error('Ошибка конфигурации:', error);
        throw new Error('Ошибка конфигурации системы. Пожалуйста, обратитесь к администратору.');
    }

    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = config;
    console.log('Подготовка данных для отправки:', data);

    // Форматируем сообщение
    const message = `
🎯 Новая заявка с квиза!

🏢 Тип бизнеса: ${data.business_type || 'Не указано'}
🎯 Сфера: ${data.business_sphere || 'Не указано'}
📍 Локации: ${data.locations || 'Не указано'}
💰 Средний чек: ${data.average_check || 'Не указано'}

👤 Имя: ${data.name || 'Не указано'}
📱 Телефон: ${data.phone || 'Не указано'}

📅 Дата заявки: ${new Date().toLocaleString('ru-RU')}
    `.trim();

    console.log('Подготовленное сообщение:', message);

    const requestData = {
        chat_id: TELEGRAM_CHAT_ID,
        text: message
    };

    console.log('Отправляем запрос:', {
        url: `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        data: requestData
    });

    try {
        const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestData)
        });

        console.log('Получен ответ от сервера:', {
            status: response.status,
            statusText: response.statusText
        });

        const result = await response.json();
        console.log('Тело ответа:', result);

        if (!response.ok) {
            throw new Error(result.description || 'Ошибка отправки сообщения в Telegram');
        }

        return true;
    } catch (error) {
        console.error('Детали ошибки:', {
            name: error.name,
            message: error.message,
            stack: error.stack
        });
        throw new Error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
    }
}

class StepForm {
    constructor() {
        this.currentStep = 1;
        this.totalSteps = 5;
        this.formData = {};

        this.initStartButton();
    }

    initStartButton() {
        const startButton = document.querySelector('.start-quiz-button');
        const quizStart = document.querySelector('.quiz-start');
        const quizForm = document.querySelector('.quiz');

        if (startButton && quizStart && quizForm) {
            startButton.addEventListener('click', () => {
                quizStart.style.display = 'none';
                quizForm.style.display = 'block';
                this.init();

                // Плавное появление формы
                setTimeout(() => {
                    quizForm.style.opacity = '1';
                }, 50);
            });
        }
    }

    init() {
        this.slides = document.querySelectorAll('.quiz-slide');
        this.progressBar = document.querySelector('.progress-bar');
        this.currentStepElement = document.querySelector('.current-step');

        this.initStepIndicators();
        this.initOptionCards();
        this.initNavigationButtons();
        this.initFormInputs();

        // Показываем первый слайд
        this.showSlide(1);
        this.updateProgress();
    }

    initStepIndicators() {
        this.currentStepElement.textContent = this.currentStep;
        document.querySelector('.total-steps').textContent = this.totalSteps;
    }

    initOptionCards() {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                this.formData[radio.name] = radio.value;
                this.updateNextButton();
            });
        });
    }

    initNavigationButtons() {
        const nextButtons = document.querySelectorAll('.next');
        const backButtons = document.querySelectorAll('.back');

        nextButtons.forEach(button => {
            button.addEventListener('click', () => this.goToNextStep());
        });

        backButtons.forEach(button => {
            button.addEventListener('click', () => this.goToPreviousStep());
        });
    }

    initFormInputs() {
        const form = document.querySelector('.quiz-form');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                await this.submitForm(e);
            });

            const requiredInputs = form.querySelectorAll('input[required]');
            requiredInputs.forEach(input => {
                input.addEventListener('input', () => {
                    this.formData[input.name] = input.value;
                    this.updateSubmitButton();
                });
            });
        }
    }

    showSlide(step) {
        this.slides.forEach(slide => {
            slide.style.display = 'none';
            slide.classList.remove('active');
        });

        const currentSlide = document.querySelector(`[data-step="${step}"]`);
        if (currentSlide) {
            currentSlide.style.display = 'block';
            setTimeout(() => {
                currentSlide.classList.add('active');
            }, 50);
        }
    }

    updateProgress() {
        const progress = (this.currentStep / this.totalSteps) * 100;
        this.progressBar.style.width = `${progress}%`;
        this.currentStepElement.textContent = this.currentStep;
    }

    updateNextButton() {
        const currentSlide = document.querySelector(`[data-step="${this.currentStep}"]`);
        const nextButton = currentSlide.querySelector('.next');
        const radioButtons = currentSlide.querySelectorAll('input[type="radio"]');
        const isAnyChecked = Array.from(radioButtons).some(radio => radio.checked);

        if (nextButton) {
            nextButton.disabled = !isAnyChecked;
        }
    }

    updateSubmitButton() {
        const form = document.querySelector('.quiz-form');
        const submitButton = form.querySelector('button[type="submit"]');
        const requiredInputs = form.querySelectorAll('input[required]');
        const isAllFilled = Array.from(requiredInputs).every(input => input.value.trim() !== '');
        const agreement = form.querySelector('input[name="agreement"]');

        if (submitButton) {
            submitButton.disabled = !isAllFilled || !agreement.checked;
        }
    }

    goToNextStep() {
        if (this.currentStep < this.totalSteps) {
            this.currentStep++;
            this.showSlide(this.currentStep);
            this.updateProgress();
        }
    }

    goToPreviousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.showSlide(this.currentStep);
            this.updateProgress();
        }
    }

    async submitForm(e) {
        const form = e.target;
        const submitButton = form.querySelector('button[type="submit"]');
        const formWrapper = document.querySelector('.quiz');

        try {
            submitButton.disabled = true;
            submitButton.textContent = 'Отправка...';

            // Собираем все данные формы
            const formData = new FormData(form);
            console.log('Данные из FormData:', Object.fromEntries(formData));
            console.log('Сохраненные данные в this.formData:', this.formData);

            const finalData = {
                ...this.formData,
                name: formData.get('name'),
                phone: formData.get('phone')
            };

            console.log('Итоговые данные для отправки:', finalData);

            // Отправляем данные в Telegram
            await sendToTelegram(finalData);

            // Показываем сообщение об успехе
            formWrapper.innerHTML = `
                <div class="success-message" style="text-align: center; padding: 40px;">
                    <h3 style="color: #4CAF50; margin-bottom: 20px;">Спасибо за вашу заявку!</h3>
                    <p style="margin-bottom: 20px;">Мы свяжемся с вами в ближайшее время.</p>
                    <button onclick="location.reload()" class="blue-button" style="padding: 10px 20px;">Вернуться к началу</button>
                </div>
            `;

        } catch (error) {
            console.error('Ошибка при отправке формы:', error);

            // Показываем сообщение об ошибке
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.style.color = '#f44336';
            errorMessage.style.padding = '10px';
            errorMessage.style.marginTop = '10px';
            errorMessage.style.borderRadius = '4px';
            errorMessage.style.backgroundColor = '#ffebee';
            errorMessage.textContent = error.message;

            // Вставляем сообщение об ошибке после кнопки отправки
            submitButton.parentNode.insertBefore(errorMessage, submitButton.nextSibling);

            // Удаляем сообщение об ошибке через 5 секунд
            setTimeout(() => {
                errorMessage.remove();
            }, 5000);

        } finally {
            submitButton.disabled = false;
            submitButton.textContent = 'Отправить';
        }
    }

    resetForm() {
        // Сбрасываем данные
        this.formData = {};

        // Очищаем все radio buttons
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.checked = false;
        });

        // Сбрасываем форму
        const form = document.querySelector('.quiz-form');
        if (form) {
            form.reset();
        }

        // Возвращаемся к первому шагу
        this.currentStep = 1;
        this.showSlide(1);
        this.updateProgress();
    }
}

// Инициализация формы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new StepForm();
});
