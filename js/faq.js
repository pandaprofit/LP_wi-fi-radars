class FAQ {
    constructor() {
        this.faqList = document.querySelector('.faq-list');
        this.questions = document.querySelectorAll('.faq-question');
        this.init();
        this.wrapAnswerContents();
    }

    wrapAnswerContents() {
        // Оборачиваем содержимое ответов в дополнительный div для правильной анимации
        this.questions.forEach(question => {
            const answer = question.nextElementSibling;
            if (!answer.querySelector('.faq-answer-content')) {
                const content = answer.innerHTML;
                answer.innerHTML = `<div class="faq-answer-content">${content}</div>`;
            }
        });
    }

    init() {
        this.questions.forEach(question => {
            question.addEventListener('click', (e) => this.toggleQuestion(e));
        });

        // Добавляем обработку клавиатуры для доступности
        this.questions.forEach(question => {
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.toggleQuestion(e);
                }
            });
        });
    }

    toggleQuestion(e) {
        const question = e.currentTarget;
        const answer = question.nextElementSibling;
        const isExpanded = question.getAttribute('aria-expanded') === 'true';

        // Закрываем все остальные ответы плавно
        this.questions.forEach(q => {
            if (q !== question) {
                const otherAnswer = q.nextElementSibling;
                q.setAttribute('aria-expanded', 'false');

                // Плавно скрываем контент
                otherAnswer.style.maxHeight = '0';
                otherAnswer.style.opacity = '0';

                setTimeout(() => {
                    if (otherAnswer.style.maxHeight === '0px') {
                        otherAnswer.hidden = true;
                    }
                }, 300);
            }
        });

        // Переключаем текущий ответ
        question.setAttribute('aria-expanded', !isExpanded);

        if (!isExpanded) {
            answer.hidden = false;

            // Важно: сначала получаем высоту, затем запускаем анимацию
            const height = answer.querySelector('.faq-answer-content').offsetHeight;
            requestAnimationFrame(() => {
                answer.style.maxHeight = `${height}px`;
                answer.style.opacity = '1';
            });
        } else {
            answer.style.maxHeight = '0';
            answer.style.opacity = '0';

            setTimeout(() => {
                if (answer.style.maxHeight === '0px') {
                    answer.hidden = true;
                }
            }, 300);
        }
    }
}

// Инициализация FAQ при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    new FAQ();
});
