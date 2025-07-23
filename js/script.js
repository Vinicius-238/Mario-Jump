const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
    mario.classList.add('jump');
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500); // 500ms é o tempo da animação de pulo
}

const loop = setInterval(() => {

    console.log('loop');
    
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none'; // Para a animação do cano
        pipe.style.left = `${pipePosition}px`; // Mantém o cano na posição atual

        pipe.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png'; // Muda a imagem do Mario para Game Over
        mario.style.width = '75px'; // Ajusta o tamanho do Mario
        mario.style.marginLeft = '50px'; // Ajusta a margem esquerda do Mario

        clearInterval(loop); // Para o loop de verificação

    }

}, 10);


document.addEventListener('keydown', jump);
