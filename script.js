function Carousel() {
    let colours = [
        'linear-gradient(45deg, #0066ff, #39ff14)',
        'linear-gradient(45deg, #003366, #4b0082)',
        'linear-gradient(45deg, #800099, #ff11ff)'
    ];
    let element = document.getElementById("carouselExample");
    let playButton = document.getElementById('rpsbutton');
    playButton.addEventListener('click', function () {
        const nextSlideIndex = element.querySelector('.carousel-inner .active').index;
         if (nextSlideIndex === 1) {
            window.location.href = 'Memory.html';
        } else if (nextSlideIndex === 2) {
            window.location.href = 'TicTacToe.html';
        }
        else{
            window.location.href = 'RockPaperScissor.html';
        } 
    });
    element.addEventListener('slide.bs.carousel', function (event) {
        const nextSlideIndex = event.to;
        playButton.style.background = colours[nextSlideIndex];
    });
}
Carousel();
