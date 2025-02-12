// Получаем все слайды
const slides = document.querySelectorAll('.quiz-slide');
const nextButtons = document.querySelectorAll('.next');
const backButtons = document.querySelectorAll('.back');
const progressBars = document.querySelectorAll('.progress-bar');

// Показываем первый слайд
slides[0].style.display = 'block';

// Текущий индекс слайда
let currentSlide = 0;

// Функция для проверки выбора радио-кнопки
function checkRadioSelection(slide) {
    const radioButtons = slide.querySelectorAll('input[type="radio"]');
    const nextButton = slide.querySelector('.next');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            nextButton.disabled = false;
            console.log('Radio selected, next button enabled');
        });
    });
}

// Функция для валидации формы на последнем слайде
function validateLastSlideForm(slide) {
    const form = slide.querySelector('.quiz-form');
    const inputs = form.querySelectorAll('input[required]');
    const submitButton = form.querySelector('button[type="submit"]');

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            const allValid = Array.from(inputs).every(input => input.value.trim() !== '');
            submitButton.disabled = !allValid;
        });
    });
}

// Инициализация обработчиков для всех слайдов
slides.forEach((slide, index) => {
    // Для всех слайдов кроме последнего проверяем радио кнопки
    if (index < slides.length - 1) {
        checkRadioSelection(slide);
    } else {
        // Для последнего слайда валидируем форму
        validateLastSlideForm(slide);
    }
});

// Обработчики для кнопок навигации
nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            slides[currentSlide].style.display = 'none';
            currentSlide++;
            slides[currentSlide].style.display = 'block';
            updateProgress();
            console.log('Moving to next slide:', currentSlide);
        }
    });
});

backButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentSlide > 0) {
            slides[currentSlide].style.display = 'none';
            currentSlide--;
            slides[currentSlide].style.display = 'block';
            updateProgress();
            console.log('Moving to previous slide:', currentSlide);
        }
    });
});

// Обработчик отправки формы
const form = document.querySelector('.quiz-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        console.log('Form submitted with data:', data);
        // Здесь можно добавить логику отправки данных на сервер

        // Сброс квиза
        currentSlide = 0;
        slides.forEach(slide => slide.style.display = 'none');
        slides[0].style.display = 'block';
        updateProgress();
        form.reset();
    });
}

// Функция обновления прогресс-бара
function updateProgress() {
    const progress = ((currentSlide + 1) / slides.length) * 100;
    progressBars.forEach(bar => {
        bar.style.width = `${progress}%`;
    });
    console.log('Progress updated:', progress);
}
