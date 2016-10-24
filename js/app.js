var $;

$('#entire-page').fadeIn(1000);

// reset page
$('#navigation-name').click(function () {
    'use strict';
    $('.body-content').hide();
    $('#image-main').fadeIn(500);
    $('#image-about').hide();
});

// toggle contact
$('#nav-contact').click(function () {
    'use strict';
    $('#contact-bar').slideToggle(150);
});

// about
$('#nav-about').click(function () {
    'use strict';
    $('.body-content').hide();
    $('#about-me').fadeIn(500);
    $('#image-about').fadeIn(500);
});

// changing text

var array = ['espresso', 'motorcycles', 'blue suede shoes', 'skinny jeans', 'Los Angeles', 'Led Zeppelin II', 'HBO', 'tacos', 'Vail, CO', 'pressed juice'];
var counter = 0;
var elem = document.getElementById('rotate');

function change() {
    'use strict';
    elem.innerHTML = array[counter];
    counter += 1;
    if (counter >= array.length) {
        counter = 0;
    }
}

setInterval(change, 1000);

// code
$('#nav-code').click(function () {
    'use strict';
    $('.body-content').hide();
    $('.code').fadeIn(500);
});

// education
$('#nav-education').click(function () {
    'use strict';
    $('.body-content').hide();
    $('.education').fadeIn(350);
});