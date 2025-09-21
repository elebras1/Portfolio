var btnCv = document.querySelector('.btn_cv');

btnCv.addEventListener('mouseover', function () {
    this.classList.add('black');
    this.classList.remove('white');
});

btnCv.addEventListener('mouseout', function () {
    this.classList.remove('black');
    this.classList.add('white');
});