const click = (() => {
    let index = 0;
    const prev = document.querySelector('#prev');
    prev.addEventListener('click', () => {
        changeImage('prev');
    });

    const next = document.querySelector('#next');
    next.addEventListener('click', () => {
        changeImage('next');
    });

    const buttons = document.querySelector('#circles');
    buttons.addEventListener('click', (e) => {
        for (let i = 0; i < buttons.children.length; i++){
            if (e.target == buttons.children[i]){
                index = i;
                changeImage('circles', index);
            }
        }
    });
    return{index}
})();

const changeImage = (change, index) => {
    const images = document.querySelector('#images').children;
    if (change == 'next') {
            click.index++;
        if(click.index == images.length) {
            click.index = 0;
        }
    } 
    if (change == 'prev'){
        if(click.index == 0) {
            click.index = images.length - 1;
        } 
        else {
            click.index--;
        }
    }
    if (change == 'circles'){
        console.log('u')
        click.index = index;
    }

    for(let i = 0; i < images.length; i++) {
        images[i].classList.add('display');
    }
    images[click.index].classList.remove('display');
}
