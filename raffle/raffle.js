let raf = []
const raffle = (name, email) => {
    const info = {
        name,
        email,
    }
    raf.push(info);
}
const click = (() => {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        raffle(name.value, email.value);
        name.value = '';
        email.value = '';
    });
})();

const randomDraw = (() => {
    const random = document.querySelector('#random');
    random.addEventListener('click', () => {
        const number = Math.floor(Math.random() * raf.length);
        console.log(number);
        console.log(raf[number]);
        const winnerNumber = document.querySelector('#winner-number');
        winnerNumber.textContent = number
        const winnerName = document.querySelector('#winner-name');
        winnerName.textContent = raf[number].name;
        const winnerEmail = document.querySelector('#winner-email');
        winnerEmail.textContent = raf[number].email;
    });
})();
