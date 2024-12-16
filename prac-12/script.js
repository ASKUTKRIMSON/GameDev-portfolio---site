//Практика 13

document.addEventListener('DOMContentLoaded', function () {
    // Создаём кнопку "Наверх"
    let backToTopBtn = document.createElement('button');
    backToTopBtn.innerText = '↑';
    backToTopBtn.style.position = 'fixed';
    backToTopBtn.style.bottom = '20px';
    backToTopBtn.style.right = '20px';
    backToTopBtn.style.display = 'none'; // Скрываем кнопку по умолчанию
    document.body.appendChild(backToTopBtn);

    // Добавляем обработчик для кнопки
    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Создаём уведомление
    let notification = document.createElement('div');
    notification.innerHTML = 'Вот эта кнопка чтобы <a href="#">промотать наверх</a>';
    notification.style.position = 'fixed';
    notification.style.bottom = '60px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#333';
    notification.style.color = '#fff';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = '5px';
    notification.style.display = 'none'; // Скрываем уведомление по умолчанию
    notification.style.zIndex = '1000';
    document.body.appendChild(notification);

    // Обработчик для ссылки в уведомлении
    notification.querySelector('a').addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Логика показа кнопки и уведомления
    const techStackSection = document.getElementById('tech-stack');

    window.addEventListener('scroll', function () {
        const rect = techStackSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
            // Показываем уведомление и кнопку
            notification.style.display = 'block';
            backToTopBtn.style.display = 'block';
        } else {
            // Скрываем уведомление и кнопку
            notification.style.display = 'none';
            backToTopBtn.style.display = 'none';
        }
    });
});

//Практика 14

document.addEventListener('DOMContentLoaded', function () {
    // Анимация заголовка
    const heroTitle = document.getElementById('hero-title');
    const titleText = "ASKUT KRIMSON";
    let index = 0;

    function typeEffect() {
        if (index < titleText.length) {
            heroTitle.textContent += titleText[index];
            index++;
            setTimeout(typeEffect, 150); // Задержка между символами
        }
    }
    typeEffect();
});

document.addEventListener('DOMContentLoaded', function () {
    // Выбираем элемент с id="contents"
    const contents = document.getElementById('contents');

    // Устанавливаем делегирование события "click"
    contents.addEventListener('click', function (event) {
        // Проверяем, произошёл ли клик по ссылке или внутри ссылки
        let target = event.target;

        // Поднимаемся по DOM, пока не найдём элемент <a>, если он есть
        while (target && target.tagName !== 'A') {
            target = target.parentElement;
        }

        // Если клик был внутри ссылки
        if (target && target.tagName === 'A') {
            // Спрашиваем подтверждение у пользователя
            const confirmLeave = confirm('Вы действительно хотите покинуть эту страницу?');

            // Если пользователь нажал "Отмена", отменяем переход
            if (!confirmLeave) {
                event.preventDefault();
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const notification = document.getElementById('notification');
    const pauseButton = document.getElementById('pause-notifications');

    let notificationCount = 0;
    let isPaused = false;

    // Функция для обновления уведомлений
    function addNotification() {
        if (!isPaused) {
            notificationCount++;
            notification.textContent = `У вас ${notificationCount} новых уведомлений`;
        }
    }

    // Интервал для добавления новых уведомлений
    const notificationInterval = setInterval(addNotification, 3000);

    // Декоратор для задержки выполнения
    function debounce(func, delay) {
        let timer;
        return function (...args) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Функция паузы
    const pauseNotifications = debounce(() => {
        isPaused = false; // Снимаем паузу через 10 секунд
    }, 10000);

    // Обработчик нажатия на кнопку паузы
    pauseButton.addEventListener('click', function () {
        isPaused = true; // Ставим на паузу
        pauseNotifications(); // Устанавливаем таймер для снятия паузы
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const notification = document.getElementById('notification');
    const pauseButton = document.getElementById('pause-notifications');

    let notificationCount = 0;
    let isPaused = false;

    // Функция для обновления уведомлений
    function addNotification() {
        if (!isPaused) {
            notificationCount++;
            notification.textContent = `У вас ${notificationCount} новых уведомлений`;
        }
    }

    // Интервал для добавления новых уведомлений
    const notificationInterval = setInterval(addNotification, 3000);

    // Декоратор для задержки выполнения
    function debounce(func, delay) {
        let timer;
        return function (...args) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Функция паузы
    const pauseNotifications = debounce(() => {
        isPaused = false; // Снимаем паузу через 10 секунд
    }, 10000);

    // Обработчик нажатия на кнопку паузы
    pauseButton.addEventListener('click', function () {
        isPaused = true; // Ставим на паузу
        pauseNotifications(); // Устанавливаем таймер для снятия паузы
    });
});
 
