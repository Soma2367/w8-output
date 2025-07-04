const $form = document.querySelector('.form');
const $sign = document.getElementById('sign');
const $emailInput = document.getElementById('email');
const $passwordInput = document.getElementById('password');

if(('localStorage' in window) && (window.localStorage !== null)) {
    $form.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = $emailInput.value;
        const password = $passwordInput.value;

        if(email !== null && password !== null) {
            localStorage.setItem('savedEmail', email);
            localStorage.setItem('savedPassword', password);
        } else {
            console.log('error');
        }

        alert('ログイン情報を保存しました');
    });

    window.addEventListener('DOMContentLoaded', function () {
        const savedEmail = localStorage.getItem('savedEmail');
        const savedPassword = localStorage.getItem('savedPassword');

        if (savedEmail !== null && savedPassword !== null) {
            $emailInput.value = savedEmail;
            $passwordInput.value = savedPassword;
        } else {
            console.log('error');
        }
    });
} else {
    console.log("You can't use LocalStorage");
}