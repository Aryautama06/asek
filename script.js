document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const letter = document.querySelector('.letter');
    const giftLink = document.querySelector('.gift-link');
    let isOpen = false;

    envelope.addEventListener('click', (e) => {
        if (e.target === envelope || e.target.closest('.front') || e.target.closest('.back') || e.target.closest('.flap')) {
            if (!isOpen) {
                openEnvelope();
            } else {
                closeEnvelope();
            }
        }
    });

    function openEnvelope() {
        envelope.classList.add('open');
        setTimeout(() => {
            letter.style.zIndex = 4;
        }, 400);
        isOpen = true;
    }

    function closeEnvelope() {
        letter.style.zIndex = 2;
        setTimeout(() => {
            envelope.classList.remove('open');
        }, 100);
        isOpen = false;
    }

    letter.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Menghapus event listener pada giftLink
    // giftLink.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     alert('Selamat! Anda telah mengklaim hadiah Anda.');
    // });
});
