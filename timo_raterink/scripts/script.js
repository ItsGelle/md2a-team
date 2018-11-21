var footer__header = document.getElementsByClassName('footer__header');
var footer_array = ["Like what you're seeing?", "Want to work together?", "Got some questions for me?", "Interested in my work?"]

footer__header[0].innerHTML = footer_array[Math.floor(Math.random()*footer_array.length)];