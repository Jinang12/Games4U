function Carousel() {
    let colours=['linear-gradient(45deg, #0066ff, #39ff14)','linear-gradient(45deg, #adff2f, #39ff50)','linear-gradient(45deg, #FFDB1E, #FFFF10)','linear-gradient(45deg, lightgrey, lightgrey)'];
    let element=document.getElementById("carouselExample");
    let playButton=document.getElementById('rpsbutton');
    document.addEventListener('DOMContentLoaded',function(){
        playButton.addEventListener('click',function(){
            const activeIndex=Array.from(element.querySelectorAll('.carousel-item')).indexOf(element.querySelector('.carousel-item.active'));
            if(activeIndex===0){
                window.location.href='RockPaperScissor.html'; 
            }else if(activeIndex===1){
                window.location.href='Memory.html'; 
            }else if(activeIndex===2){
                window.location.href='TicTacToe.html';
            }else if(activeIndex===3){
                window.location.href='Wordle.html';
            }
        });
        element.addEventListener('slide.bs.carousel',function(event){
            const nextSlideIndex=event.to;
            playButton.style.background=colours[nextSlideIndex];
        });
    });
}
Carousel();
