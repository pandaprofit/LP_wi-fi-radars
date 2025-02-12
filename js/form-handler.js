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
                const messageData = {
                    chat_id: TELEGRAM_CHAT_ID,
                    text: `🎯 Новая заявка с сайта!\n\n👤 Имя: ${formData.get('username')}\n📱 Телефон: ${formData.get('phone')}\n\n📅 Дата: ${new Date().toLocaleString('ru-RU')}`
                };

                const response = await fetch('https://api.telegram.org/bot' + TELEGRAM_BOT_TOKEN + '/sendMessage', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(messageData)
                });

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.description || 'Ошибка отправки сообщения');
                }

                // Показываем сообщение об успехе
                if (successOverlay) {
                    successOverlay.style.display = 'flex';
                    successOverlay.classList.add('active');
                } else {
                    const successMessage = document.createElement('div');
                    successMessage.className = 'form-success-message';
                    successMessage.innerHTML = `
                        <div class="success-message">
                            <h3>Спасибо за вашу заявку!</h3>
                            <p>Мы свяжемся с вами в ближайшее время.</p>
                        </div>
                    `;
                    form.appendChild(successMessage);
                }
                form.reset();

            } catch (error) {
                // Создаем контейнер для ошибки, если его нет
                let errorContainer = form.querySelector('.form-error-container');
                if (!errorContainer) {
                    errorContainer = document.createElement('div');
                    errorContainer.className = 'form-error-container';
                    form.insertBefore(errorContainer, submitButton);
                }

                // Показываем ошибку
                errorContainer.innerHTML = `
                    <div class="form-error active" style="display: block; margin: 10px 0; padding: 10px; background-color: #ffebee; color: #f44336; border-radius: 4px;">
                        ${error.message || 'Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.'}
                    </div>
                `;

                // Удаляем сообщение об ошибке через 5 секунд
                setTimeout(() => {
                    errorContainer.innerHTML = '';
                }, 5000);

            } finally {
                form.classList.remove('form-loading');
                submitButton.disabled = false;
            }
        });
    });

    // Обработчик для полей ввода телефона
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    phoneInputs.forEach(input => {
        input.addEventListener('focus', () => {
            if (!input.value) {
                input.value = '+7 (';
            }
        });

        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            if (value.startsWith('7')) {
                value = value.slice(1);
            }

            value = value.slice(0, 10);

            let result = '+7 (';

            if (value.length > 0) {
                result += value.slice(0, 3);
            }
            if (value.length > 3) {
                result += ') ' + value.slice(3, 6);
            }
            if (value.length > 6) {
                result += ' ' + value.slice(6, 8);
            }
            if (value.length > 8) {
                result += '-' + value.slice(8, 10);
            }

            e.target.value = result;

            // Показываем сколько цифр осталось ввести
            const errorDiv = input.nextElementSibling?.classList.contains('form-error')
                ? input.nextElementSibling
                : createErrorDiv(input);

            const digitsEntered = value.length;
            if (digitsEntered > 0 && digitsEntered < 10) {
                errorDiv.textContent = `Введите ещё ${10 - digitsEntered} цифр`;
                errorDiv.classList.add('active');
                input.classList.add('invalid');
            } else if (digitsEntered === 10) {
                errorDiv.classList.remove('active');
                input.classList.remove('invalid');
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value.length <= 4) {
                e.preventDefault();
            }
        });
    });
});

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
        if (phoneValue.length !== 11) {
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

// Функция форматирования телефонного номера (можно удалить, так как теперь форматирование происходит внутри обработчика input)
function formatPhoneNumber(value) {
    let digits = value.replace(/\D/g, '');
    if (digits.startsWith('7')) {
        digits = digits.substring(1);
    }

    digits = digits.substring(0, 10);

    let result = '+7 (';
    for (let i = 0; i < digits.length; i++) {
        if (i === 3) result += ') ';
        else if (i === 6) result += ' ';
        else if (i === 8) result += '-';
        result += digits[i];
    }

    return result;
}
