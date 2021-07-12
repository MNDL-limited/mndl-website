var element = document.getElementsByTagName('main')[0];

window.addEventListener('scroll', () => {
    console.log('Heyo');
});

window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 2) {
        alert("you're at the bottom of the page");
    }
};