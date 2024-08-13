$('.question__block-answer').hide();

$('.question__block-cross').click(function () {
    const questionBlock = $(this).closest('.question__block');
    questionBlock.find('.question__block-answer').toggle(1000);
    questionBlock.find('.question__block-cross').toggleClass('rotate-310');
});

$(document).ready(function () {
    // Открытие модального окна при нажатии на кнопку
    $(".yellow__btn").on("click", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение кнопки
        $("#myModal").fadeIn(300); // Показываем модальное окно с эффектом появления
    });

    // Закрытие модального окна при нажатии на "x"
    $(".close").on("click", function () {
        $("#myModal").fadeOut(300); // Скрываем модальное окно с эффектом затухания
    });

    // Закрытие модального окна при клике вне его
    $(window).on("click", function (event) {
        if ($(event.target).is("#myModal")) {
            $("#myModal").fadeOut(300); // Скрываем модальное окно с эффектом затухания
        }
    });

    // Обработчик события отправки формы
    $("#registrationForm").on("submit", function (event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы
        alert("Спасибо за регистрацию!"); // Сообщение об успешной регистрации
        $("#myModal").fadeOut(300); // Закрываем модальное окно с эффектом затухания
    });
});