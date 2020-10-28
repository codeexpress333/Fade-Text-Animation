//Get Text 
var textWrapper = document.querySelector('.text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

//Now Text Animation 
anime.timeline({ loop: true })
    .add({
        targets: '.text .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
    }).add({
        targets: '.text',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
    });