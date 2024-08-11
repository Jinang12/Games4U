let player = 0;
let count = 0;
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]             
];

function logElementId() {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', (event) => {
            let id = event.currentTarget.id;
            if (!box.hasChildNodes()) {
                let elem = document.getElementById(id);
                let img = document.createElement("img");
                img.src = player === 0 ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAyElEQVRIS+1U2w2DMAwMG3QTGKHdACaFDegI7SYdoT6JSIH4SRX1ByR/YMV3vrOTLjX+usb46SIwHf67RSO1+KT4CK3eKH+nWCQpmgKAzxQvigdDAvCVYqCYJBKNAADovmdISvD3poJVac2AI4EbuXMVHActApw5kiAHW0xwL8GRBP8u8ChBtgV10uCrZfJaVHoOEG7wFbhHAbctqJO2K6RAW0VthXcknosmDbQkOXXR0EnTp4IdWjTp2aIopnsGPwHn4kuBaeMXDAg0GT/3wNsAAAAASUVORK5CYII=" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABIklEQVRIS+2U/REBQQzFqYASqAAVoAM6oAJUgApQAR2gAnRABZRABbzfTM742L1dg/GPzLzJ3c1uXvKSXDbzZct+OX7mTxBUOEaivKJ0hIZQtohb+YUwEY5pLCGCli6PBEhcRvCeMPORpBEQfGoXl/JjYW3vNfmBULX3plX0xOMjIOO9Zd5OyRCSvslUNH9H4iNILpI52qcZVVHJ0KqKIqCJJaF+I4uPBLlWAncqj4d8FZztYGgIknje8z8jeEUiejQXdkKyJ1elQk1mmRjBjzeZMT0IOZsMJsRlA31kTE9CQXja6thFWxvRxlhqFhiPvbxoSbYtPbDBVOIyMucMUjotZgyRqyvQTHYDo6EEhfytn50vsejvMRVEB3Md/BME5bsA/2g2GcSF77sAAAAASUVORK5CYII=";
                elem.appendChild(img);
                count++;
                if (checkWinner()) {
                    let abc=document.querySelector("h2");
                    abc.textContent=`Player ${player === 0 ? 'X' : 'O'} is the winner`;
                    resetGame();
                } else if (count === 9) {
                    let abc=document.querySelector("h2");
                    abc.textContent="It's a draw!";
                    resetGame();
                } else {
                    player = player === 0 ? 1 : 0;
                }
            }
        });
    });
}

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        let cells = document.querySelectorAll('.box');
        if (cells[a].innerHTML !== '' && cells[a].innerHTML === cells[b].innerHTML && cells[a].innerHTML === cells[c].innerHTML) {
            return true;
        }
    }
    return false;
}

function resetGame() {
    let cells = document.querySelectorAll('.box');
    cells.forEach(cell => {
        cell.innerHTML = '';
    });
    count = 0;
    player = 0;
}

logElementId();
