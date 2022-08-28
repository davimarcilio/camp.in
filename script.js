$('.inputTEXT').focus((e) => {
    $(e.target).prevAll('.inputicon').eq(0).hide();
    $(e.target).prevAll('.inputicon').eq(1).show();
});
$('.inputTEXT').focusout((e) => {
    $(e.target).prevAll('.inputicon').eq(0).show();
    $(e.target).prevAll('.inputicon').eq(1).hide();
});