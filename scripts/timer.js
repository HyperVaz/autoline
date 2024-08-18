
$(document).ready(function () {
    // Установите дату, до которой будет обратный отсчет (например, 31 декабря 2023)
    var countdownDate = new Date("Dec 20, 2024 23:59:59").getTime();

    // Обновляем таймер каждую секунду
    var x = setInterval(function () {

        // Получаем текущее время
        var now = new Date().getTime();

        // Находим разницу между датами
        var distance = countdownDate - now;

        // Вычисляем дни, часы, минуты и секунды
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Отображаем результат в элементе с id="countdown"
        $("#countdown-days").html(days)
        $("#countdown-hours").html(hours)
        $("#countdown-minutes").html(minutes)
        $("#countdown-seconds").html(seconds)
        $("#countdown").html(days + ":" + hours + ":" + minutes + ":" + seconds);

        // Если обратный отсчет завершен, выводим сообщение
        if (distance < 0) {
            clearInterval(x);
            $("#countdown").html("Время вышло!");
        }
    }, 1000);
});