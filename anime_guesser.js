const characters = [
  { name: "Naruto Uzumaki", anime: "Naruto", gender: "Male", hair: "Blonde" },
  { name: "Sasuke Uchiha", anime: "Naruto", gender: "Male", hair: "Black" },
  { name: "Monkey D. Luffy", anime: "One Piece", gender: "Male", hair: "Black" },
  { name: "Levi Ackerman", anime: "Attack on Titan", gender: "Male", hair: "Black" },
  { name: "Gojo Satoru", anime: "Jujutsu Kaisen", gender: "Male", hair: "White" },
  { name: "Rem", anime: "Re:Zero", gender: "Female", hair: "Blue" },
  { name: "Lain Iwakura", anime: "Serial Experiments Lain", gender: "Female", hair: "Brown" },
  { name: "Yang Wen-li", anime: "Legend of the Galactic Heroes", gender: "Male", hair: "Black" },
  { name: "Kino", anime: "Kino's Journey", gender: "Female", hair: "Black" },
  { name: "Balsa Yonsa", anime: "Moribito", gender: "Female", hair: "Brown" },
  { name: "Rakka", anime: "Haibane Renmei", gender: "Female", hair: "Brown" },
  { name: "Shiki Ryougi", anime: "Kara no Kyoukai", gender: "Female", hair: "Black" },
  { name: "Phosphophyllite", anime: "Land of the Lustrous", gender: "Other", hair: "Green" },
  { name: "Nozomu Itoshiki", anime: "Sayonara Zetsubou Sensei", gender: "Male", hair: "Black" },
  { name: "Erin", anime: "Kemono no Souja Erin", gender: "Female", hair: "Brown" },
  { name: "Akashi", anime: "Tatami Galaxy", gender: "Male", hair: "Black" },
  { name: "Watashi", anime: "Jinrui wa Suitai Shimashita", gender: "Female", hair: "Pink" },
  { name: "Itachi Uchiha", anime: "Naruto", gender: "Male", hair: "Black" },
  { name: "Madara Uchiha", anime: "Naruto", gender: "Male", hair: "Black" },
  { name: "Minato Namikaze", anime: "Naruto", gender: "Male", hair: "Blonde" },
  { name: "Shikamaru Nara", anime: "Naruto", gender: "Male", hair: "Black" },
  { name: "Sanji", anime: "One Piece", gender: "Male", hair: "Blonde" },
  { name: "Usopp", anime: "One Piece", gender: "Male", hair: "Black" },
  { name: "Trafalgar Law", anime: "One Piece", gender: "Male", hair: "Black" },
  { name: "Portgas D. Ace", anime: "One Piece", gender: "Male", hair: "Black" },
  { name: "Ken Kaneki", anime: "Tokyo Ghoul", gender: "Male", hair: "White" },
  { name: "Touka Kirishima", anime: "Tokyo Ghoul", gender: "Female", hair: "Purple" },
  { name: "Shoto Todoroki", anime: "My Hero Academia", gender: "Male", hair: "Red/White" },
  { name: "Izuku Midoriya", anime: "My Hero Academia", gender: "Male", hair: "Green" },
  { name: "Katsuki Bakugo", anime: "My Hero Academia", gender: "Male", hair: "Blonde" },
  { name: "Asta", anime: "Black Clover", gender: "Male", hair: "White" },
  { name: "Yuno", anime: "Black Clover", gender: "Male", hair: "Black" },
  { name: "Noelle Silva", anime: "Black Clover", gender: "Female", hair: "Silver" },
  { name: "Senku Ishigami", anime: "Dr. Stone", gender: "Male", hair: "Green" },
  { name: "Chrome", anime: "Dr. Stone", gender: "Male", hair: "Brown" },
  { name: "Saitama", anime: "One Punch Man", gender: "Male", hair: "Bald" },
  { name: "Genos", anime: "One Punch Man", gender: "Male", hair: "Blonde" },
  { name: "Mob", anime: "Mob Psycho 100", gender: "Male", hair: "Black" },
  { name: "Reigen Arataka", anime: "Mob Psycho 100", gender: "Male", hair: "Blonde" },
  { name: "Shinra Kusakabe", anime: "Fire Force", gender: "Male", hair: "Black" },
  { name: "Arthur Boyle", anime: "Fire Force", gender: "Male", hair: "Blonde" },
  { name: "Kaguya Shinomiya", anime: "Kaguya-sama: Love is War", gender: "Female", hair: "Black" },
  { name: "Miyuki Shirogane", anime: "Kaguya-sama: Love is War", gender: "Male", hair: "Blonde" },
  { name: "Hachiman Hikigaya", anime: "Oregairu", gender: "Male", hair: "Black" },
  { name: "Yukino Yukinoshita", anime: "Oregairu", gender: "Female", hair: "Black" },
  { name: "Okabe Rintaro", anime: "Steins;Gate", gender: "Male", hair: "Black" },
  { name: "Kurisu Makise", anime: "Steins;Gate", gender: "Female", hair: "Red" },
  { name: "Shigeo Kageyama", anime: "Mob Psycho 100", gender: "Male", hair: "Black" },
  { name: "Rimuru Tempest", anime: "That Time I Got Reincarnated as a Slime", gender: "Other", hair: "Blue" },
  { name: "Subaru Natsuki", anime: "Re:Zero", gender: "Male", hair: "Black" },
  { name: "Beatrice", anime: "Re:Zero", gender: "Female", hair: "Blonde" },
  { name: "Violet Evergarden", anime: "Violet Evergarden", gender: "Female", hair: "Blonde" },
  { name: "Gilgamesh", anime: "Fate Series", gender: "Male", hair: "Blonde" },
  { name: "Saber", anime: "Fate Series", gender: "Female", hair: "Blonde" },
  { name: "Shinpei Ajiro", anime: "Summer Time Rendering", gender: "Male", hair: "Black" },
  { name: "Ushio Kofune", anime: "Summer Time Rendering", gender: "Female", hair: "Blonde" },
  { name: "Natsume Takashi", anime: "Natsume's Book of Friends", gender: "Male", hair: "Brown" },
  { name: "Holo", anime: "Spice and Wolf", gender: "Female", hair: "Brown" },
  { name: "Kraft Lawrence", anime: "Spice and Wolf", gender: "Male", hair: "Brown" },
  { name: "Ginko", anime: "Mushishi", gender: "Male", hair: "White" },
  { name: "Hei", anime: "Darker than Black", gender: "Male", hair: "Black" },
  { name: "Casshern", anime: "Casshern Sins", gender: "Male", hair: "White" },
  { name: "Kumiko Oumae", anime: "Sound! Euphonium", gender: "Female", hair: "Brown" },
  { name: "Tokaku Azuma", anime: "Akuma no Riddle", gender: "Female", hair: "Black" },
  { name: "Nabeshin", anime: "Excel Saga", gender: "Male", hair: "Red" },
  { name: "Kaiba", anime: "Kaiba", gender: "Male", hair: "Blue" },
  { name: "Chihiro Kosaka", anime: "The World God Only Knows", gender: "Female", hair: "Brown" }
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
