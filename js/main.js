
// alert('ddd');

let hamNav = document.getElementById('hamNav');

hamNav.addEventListener('click',  hamNavF);

function hamNavF() {
    this.classList.toggle('active');
    console.log(hamNav);

}
