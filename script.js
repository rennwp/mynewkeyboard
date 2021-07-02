// Intro Awal
alert('r u ready for my new keyboard?');

// Memanggil
var display = document.getElementById('display');
var text = document.getElementById('text');
var video = document.getElementById('video');
var button = document.getElementById('button');

// Event
display.addEventListener('click', function () {
    text.classList.add('textmuncul')
    video.play();
})

