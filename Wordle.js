let url='https://random-word-api.vercel.app/api?words=1&length=5';
let word="",row=1,answer;
let collection=document.getElementsByClassName("box");
let arrayCollection=Array.from(collection);

async function WordGenerator(){
    try{
        let response=await fetch(url);
        if(!response.ok){
            console.log("There was an error with the response!");
            return;
        }
        const data=await response.json();
        word=data[0];
        console.log("Word generated:",word);
    }
    catch(error){
        console.log("There was an error processing the request");
    }
}

function Checker(){
    let count=0;
    let usedLetters={};
    for(let i=0;i<word.length;i++){
        usedLetters[word[i]]=0;
    }
    for(let i=(row-1)*5;i<(row-1)*5+answer.length;i++){
        if(answer.charAt(count)===word.charAt(count)){
            arrayCollection[i].style.backgroundColor="green";
            usedLetters[answer.charAt(count)]++;
        }
        count++;
    }
    count=0;
    for(let i=(row-1)*5;i<(row-1)*5+answer.length;i++){
        if(arrayCollection[i].style.backgroundColor!=="green"){
            if(word.includes(answer.charAt(count))&&usedLetters[answer.charAt(count)]<word.split(answer.charAt(count)).length-1){
                arrayCollection[i].style.backgroundColor="yellow";usedLetters[answer.charAt(count)]++;
            }
            else{
                arrayCollection[i].style.backgroundColor="rgb(75,75,75)";
            }
        }
        count++;
    }
}

async function InsertCharacter(answer,row){
    let count=0;
    for(let i=(row-1)*5;i<(row-1)*5+answer.length;i++){
        await new Promise(resolve=>setTimeout(resolve,300*count));
        arrayCollection[i].classList.add("flip");
        setTimeout(((i,count)=>{
            arrayCollection[i].textContent=answer.charAt(count);
            arrayCollection[i].classList.remove("flip");
        }).bind(null,i,count),150);
        count++;
    }
}

function updateTriesText(){
    document.querySelector('.tries').textContent=`${row}/5`;
}

function resetGame(){
    arrayCollection.forEach(box=>{box.textContent="";
    box.style.backgroundColor="rgb(0, 0, 0)";});
    word="";
    row=1;
    answer="";
    updateTriesText();
}

async function Game(){
    await WordGenerator();
    while(row<=5){
        answer=prompt("Enter the word:");
        if(answer.length!==5){
            alert("Please enter exactly 5 letters!");
            continue;
        }
        await InsertCharacter(answer,row);
        Checker();
        updateTriesText();
        if(word===answer){
            setTimeout(()=>{alert("Congratulations, you win!");
        },500);
        break;
    }
    row++;
    await new Promise(resolve=>setTimeout(resolve,1000));
}
if(row>5){
    alert("Game over! The word was: "+word);resetGame();
    }
}

async function main(){
    let startButton=document.getElementById("startButton");
    let resetButton=document.getElementById("resetButton");
    startButton.addEventListener('click',async()=>{
        await Game();
    });
    resetButton.addEventListener('click',()=>{resetGame();
    });
}

main();
