const signInBtn = document.querySelector('.signin-btn');
const signUnBtn = document.querySelector('.signun-btn');
const formBox = document.querySelector('.form-box');
const body = document.body;

signUnBtn.addEventListener('click', function() {
    formBox.classList.add('active');
    body.classList.add('active');
})

signInBtn.addEventListener('click', function() {
    formBox.classList.remove('active');
    body.classList.remove('active');
})