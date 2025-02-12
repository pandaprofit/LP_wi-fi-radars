const TELEGRAM_BOT_TOKEN = '7170520598:AAFa0QFBwij-utYadvj7M5mG9nIWqlt3KA8';
const TELEGRAM_CHAT_ID = '-1002416019847';

document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.contact-form');

    forms.forEach(form => {
        // Добавляем валидацию при вводе
        const inputs = form.querySelectorAll('input');
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                input.addEventListener('change', () => validateCheckbox(input));
            } else {
                input.addEventListener('input', () => validateInput(input));
            }
        });

        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Проверяем валидность всех полей перед отправкой
            const isValid = validateForm(form);
            if (!isValid) return;

            const formData = new FormData(form);
            const submitButton = form.querySelector('button[type="submit"]');
            const successOverlay = form.querySelector('.form-success-overlay');

            // Добавляем класс загрузки
            form.classList.add('form-loading');
            submitButton.disabled = true;

            try {
                const response = await fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: `🎯 Новая заявка с сайта!\n\n👤 Имя: ${formData.get('username')}\n📱 Телефон: ${formData.get('phone')}\n\n📅 Дата: ${new Date().toLocaleString('ru-RU')}`
                    })
                });

                if (!response.ok) {
                    throw new Error('Ошибка отправки сообщения');
                }

                // Показываем сообщение об успехе
                if (successOverlay) {
                    successOverlay.style.display = 'flex';
                    successOverlay.classList.add('active');
                }
                form.reset();

            } catch (error) {
                console.error('Ошибка:', error);
                showError(form, 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');
            } finally {
                form.classList.remove('form-loading');
                submitButton.disabled = false;
            }
        });
    });
});

function validateInput(input) {
    const errorDiv = input.nextElementSibling?.classList.contains('form-error')
        ? input.nextElementSibling
        : createErrorDiv(input);

    // Очищаем предыдущую ошибку
    errorDiv.textContent = '';
    errorDiv.classList.remove('active');
    input.classList.remove('invalid');

    if (input.type === 'text' && input.name === 'username') {
        if (!input.value.trim()) {
            showInputError(input, errorDiv, 'Пожалуйста, введите ваше имя');
            return false;
        }
    }

    if (input.type === 'tel') {
        const phoneValue = input.value.replace(/\D/g, '');
        if (!phoneValue) {
            showInputError(input, errorDiv, 'Пожалуйста, введите номер телефона');
            return false;
        }
        if (phoneValue.length !== 10) {
            showInputError(input, errorDiv, 'Номер телефона должен содержать 10 цифр');
            return false;
        }
    }

    return true;
}

function validateCheckbox(checkbox) {
    const checkboxWrapper = checkbox.closest('.input-checkbox');
    const errorDiv = checkboxWrapper.querySelector('.form-error') || createErrorDiv(checkboxWrapper);

    errorDiv.textContent = '';
    errorDiv.classList.remove('active');
    checkboxWrapper.classList.remove('invalid');

    if (checkbox.required && !checkbox.checked) {
        checkboxWrapper.classList.add('invalid');
        errorDiv.textContent = 'Необходимо согласие на обработку персональных данных';
        errorDiv.classList.add('active');
        return false;
    }

    return true;
}

function validateForm(form) {
    let isValid = true;

    // Валидация текстовых полей и телефона
    const textInputs = form.querySelectorAll('input[type="text"], input[type="tel"]');
    textInputs.forEach(input => {
        if (!validateInput(input)) {
            isValid = false;
        }
    });

    // Валидация чекбокса
    const checkbox = form.querySelector('input[type="checkbox"]');
    if (checkbox && !validateCheckbox(checkbox)) {
        isValid = false;
    }

    return isValid;
}

function createErrorDiv(container) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error';
    container.appendChild(errorDiv);
    return errorDiv;
}

function showInputError(input, errorDiv, message) {
    input.classList.add('invalid');
    errorDiv.textContent = message;
    errorDiv.classList.add('active');
}

function showError(form, message) {
    const errorDiv = form.querySelector('.form-error') || createErrorDiv(form);
    errorDiv.textContent = message;
    errorDiv.classList.add('active');

    setTimeout(() => {
        errorDiv.classList.remove('active');
    }, 5000);
}

// Функция закрытия сообщения об успехе
function closeSuccessMessage(button) {
    const overlay = button.closest('.form-success-overlay');
    if (overlay) {
        overlay.classList.remove('active');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 300);
    }
}

// Валидация телефона
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        // Удаляем все нецифровые символы
        let value = e.target.value.replace(/\D/g, '');

        // Ограничиваем длину до 10 цифр
        if (value.length > 10) {
            value = value.slice(0, 10);
        }

        // Добавляем подсказку о формате
        const errorDiv = input.nextElementSibling?.classList.contains('form-error')
            ? input.nextElementSibling
            : createErrorDiv(input);

        if (value.length > 0 && value.length < 10) {
            errorDiv.textContent = `Введите еще ${10 - value.length} цифр`;
            errorDiv.classList.add('active');
        } else {
            errorDiv.classList.remove('active');
        }

        // Обновляем значение поля
        e.target.value = value;
    });
});
