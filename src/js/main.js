import '../scss/styles.scss'


let main = document.querySelector('#main');
let header = document.querySelector('#header-overlay');

main.addEventListener('scroll', function(event){
    let scroll = this.scrollTop;
    if (scroll < 50){
        header.style.opacity = '.' +scroll;
    } else {
        header.style.opacity = 0.9;
    }
});