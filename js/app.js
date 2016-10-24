$('#entire-page').fadeIn(1000);

// reset page
$('#navigation-name').click(function() {
    $('.body-content').hide();
    $('#image-main').fadeIn(500);
    $('#image-about').hide();
});

// toggle contact
$('#nav-contact').click(function() {
    $('#contact-bar').slideToggle(150);
});

// about
$('#nav-about').click(function() {
    $('.body-content').hide();
    $('#about-me').fadeIn(500);
    $('#image-about').fadeIn(500);
});

// changing text

var array = ['espresso', 'motorcycles', 'blue suede shoes', 'skinny jeans', 'Los Angeles', 'Led Zeppelin II', 'HBO', 'tacos', 'Vail, CO', 'pressed juice'];
var counter = 0;
var elem = document.getElementById('rotate');

setInterval(change, 1000);
function change() {
    elem.innerHTML = array[counter];
    counter++;
    if (counter >= array.length) {
        counter = 0;
    }
}

// code
$('#nav-code').click(function() {
    $('.body-content').hide();
    $('.post-text').hide();
    $('.code').fadeIn(500);
});

$('.post-title').click(function() {
    $('.post-text').fadeOut(350);
    $(this).siblings().fadeIn(350);
});

$('.back-to-top').click(function() {
    $('.post-text').hide(350);
});

// education
$('#nav-education').click(function() {
    $('.body-content').hide();
    $('.education').fadeIn(350);
});