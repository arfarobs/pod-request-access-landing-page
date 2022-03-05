const form = document.getElementById('form');
const text = document.getElementById('text');
const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const handleSubmit = (e) => {
    const email = document.getElementById('email').value;
    if (email.match(pattern)) {
        return;
    } else {
        e.preventDefault();
        document.form.email.focus();
    }

    if (email === '') {
        text.innerHTML = 'Oops! Please add your email';
    } else {
        text.innerHTML = 'Oops! Please check your email';
    }
    form.addEventListener('input', () => {
        text.innerHTML = '';
    });
}


form.addEventListener('submit', handleSubmit);