$('.question__block-answer').hide();

$('.question__block-cross').click(function () {
    const questionBlock = $(this).closest('.question__block');
    questionBlock.find('.question__block-answer').toggle(1000);
    questionBlock.find('.question__block-cross').toggleClass('rotate-310');
});
