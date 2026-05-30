const characters = [
    {name:"Naruto Uzumaki",anime:"Naruto",gender:"Male",hair:"Blonde"},
    {name:"Sasuke Uchiha",anime:"Naruto",gender:"Male",hair:"Black"},
    {name:"Monkey D. Luffy",anime:"One Piece",gender:"Male",hair:"Black"},

    // ...continue pasting ALL remaining characters here...

    {name:"Chihiro Kosaka",anime:"The World God Only Knows",gender:"Female",hair:"Brown"}
];

const dl = document.getElementById("chars");

characters.forEach(c=>{
    let o=document.createElement("option");
    o.value=c.name;
    dl.appendChild(o);
});

let score=Number(localStorage.getItem("score"))||0;
let highScore=Number(localStorage.getItem("highScore"))||0;

document.getElementById("score").textContent=score;
document.getElementById("highscore").textContent=highScore;

let currentIndex=Math.floor(Math.random()*characters.length);
let answer=characters[currentIndex];

function loadCharacter(){
    answer=characters[currentIndex];

    document.getElementById("clues").innerHTML=`
    <p><b>Anime:</b> ${answer.anime}</p>
    <p><b>Gender:</b> ${answer.gender}</p>
    <p><b>Hair:</b> ${answer.hair}</p>`;
    
    document.getElementById("guessInput").value="";
    document.getElementById("result").innerHTML="";
    document.getElementById("nextBtn").style.display="none";
}

function submitGuess(){
    const guess=document.getElementById("guessInput").value.trim().toLowerCase();

    if(guess===answer.name.toLowerCase()){
        score++;

        if(score>highScore){
            highScore=score;
            localStorage.setItem("highScore",highScore);
        }

        document.getElementById("result").innerHTML=
        `GOOD BOY! The answer was <b>${answer.name}</b>. +1 Score`;
    }else{
        score=0;

        document.getElementById("result").innerHTML=
        `BAD BOY! The correct character was <b>${answer.name}</b> from <b>${answer.anime}</b>. Score reset to 0.`;
    }

    localStorage.setItem("score",score);

    document.getElementById("score").textContent=score;
    document.getElementById("highscore").textContent=highScore;

    document.getElementById("nextBtn").style.display="inline-block";
}

function nextCharacter(){
    let newIndex;

    do{
        newIndex=Math.floor(Math.random()*characters.length);
    }while(newIndex===currentIndex);

    currentIndex=newIndex;
    loadCharacter();
}

function showHint(){
    document.getElementById("result").innerHTML=
    `stupid niha: First letter is "${answer.name.charAt(0)}"`;
}

loadCharacter();