$('#pleins').click(function () {
 $('p').addClass("plein")
})
$('#vides').click(function () {
    $('p').removeClass("plein")
})

$('.rond').click(function () {
    $(this).toggleClass("plein")
})

$('.carré').click(function () {
    $(this).toggleClass("plein")
})
