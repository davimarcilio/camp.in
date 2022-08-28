$('.inputTEXT').focus((e) => {
    $(e.target).prevAll('.inputicon').eq(0).hide();
    $(e.target).prevAll('.inputicon').eq(1).show();
});
$('.inputTEXT').focusout((e) => {
    $(e.target).prevAll('.inputicon').eq(0).show();
    $(e.target).prevAll('.inputicon').eq(1).hide();
});
$('.eyepassword').click((e) => {
    $(e.target).prevAll('.slash').show();
    $(e.target).hide();
    $(e.target).nextAll('.inputTEXT').attr('type', 'text');
})
$('.slash').click((e) => {
    $(e.target).nextAll('.eyepassword').show();
    $(e.target).hide();
    $(e.target).nextAll('.inputTEXT').attr('type', 'password');
})