const obj = {
    0: 'https://t3.ftcdn.net/jpg/00/55/21/18/360_F_55211893_pMzGwbg4p7yElUGfc868m9dUXaknoWkU.jpg',
    1: 'https://t4.ftcdn.net/jpg/03/03/60/99/360_F_303609961_q026RoeUYia0Ufp6nrKjrqdGcgRyjaxQ.jpg',
    2: 'https://media.istockphoto.com/id/1043551106/vector/scissors-vector-cartoon.jpg?s=612x612&w=0&k=20&c=iu7Ca7ucLnq0HyalszRYYjO29XFnbWlnP2MpoMop0iU='
};
const winningConditions = [[0, 2], [1, 0], [2, 1]];
const drawConditions = [[0, 0], [1, 1], [2, 2]];
let index1;
let index2;
let count1 = 0;
let count2 = 0;

function ImageGenerator() {
    let key = Math.floor(Math.random() * 3);
    let element = document.getElementById("img");
    element.src = obj[key];
    index2 = parseInt(key);
}
function Reset(){
    let element=document.getElementById("score");
    element.innerHTML = `<h1 style="font-size: 40px; margin: 0; background: orange;">0 - 0</h1>`;
    let img=document.getElementById("img");
    img.src=" ";
    count1=0;
    count2=0;
}
function ScoreKeeper(win, draw) {
    if (count1 === 3 || count2 === 3) {
        if (count1 > count2) {
            alert("Congratulations you win!");
        } else {
            alert("Better luck next time!");
        }
        Reset();
    } else {
        if (win) {
            count1++;
        } else if (draw) {
        } else {
            count2++;
        }
        let element = document.getElementById("score");
        element.innerHTML = `<h1 style="font-size: 40px; margin: 0; background: orange;">${count1} - ${count2}</h1>`;
    }
}
function Game() {
    let elem = document.querySelectorAll("button");
    let buttonsTwo = Array.from(elem);

    buttonsTwo.forEach((button, index) => {
        button.addEventListener('click', () => {
            index1 = index;
            ImageGenerator();
            let arr = [index1, index2];
            let win = winningConditions.some(
                array => array.length === arr.length && array.every((value, idx) => value === arr[idx])
            );
            let draw = drawConditions.some(
                array => array.length === arr.length && array.every((value, idx) => value === arr[idx])
            );
            ScoreKeeper(win, draw);
        });
    });
}
Game();
