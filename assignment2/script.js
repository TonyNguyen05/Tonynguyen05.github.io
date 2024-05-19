const container1 = document.querySelector("container1");
const prevButton = document.querySelector("#prev-button");
const playPauseButton = document.querySelector("#play-pause-button");
const nextButton = document.querySelector("#next-button");
const audio1 = document.getElementById("audio1");
const progress1 = document.querySelector("progress1");
const progressContainer1 = document.querySelector("progress-container1");
const cover1 = document.querySelector("#cover1");
// const progressBar = document.querySelector("progress-container1")
// const audioTime = document.querySelector("audio-time")

// song.addEventListener("timeupdate", updateProgressBar);

// function updateProgressBar() {
//     audioTime.textContent = song.currentIndex.toFixed(2);
//     const value = (song.currentTime / song.duration) * 100;
//     progressBar.style.width = value + "%";
//   }

let progress = document.getElementById("progress1");

audio1.onloadedmetadata = function(){
    progress.max = audio1.duration;
    progress.value = audio1.currentTime;
}

if (audio1.play()){
    setInterval(()=>{
        progress.value = audio1.currentTime;
    },500);
}

progress.onchange = function(){
    audio1.play();
    audio1.currentTime = progress.value;
}

const songs = ['Hes','Dry Down ft. Ben Snaath','Leapt','Water Feature']
currentIndex = 0;
document.getElementById("title1").innerHTML = songs[currentIndex];

console.log(songs[currentIndex])

function loadSong(song) {
    document.getElementById("title1").innerHTML = song;
    audio1.src = `music/${song}.mp3`;
    cover1.src = `cover/${song}.png`;
}



function nextSong(){
    if(currentIndex < 3){
        currentIndex += 1;
    }else{
        currentIndex = 0;
    }
    loadSong(songs[currentIndex]);
        audio1.play();
}

function prevSong(){
    if(currentIndex < 1){
        currentIndex = 3;
    }else{
        currentIndex -= 1;
    }
    loadSong(songs[currentIndex]);
        audio1.play();
}

document.addEventListener('DOMContentLoaded', function(){
    const disk = document.querySelector(".disk");
    const button = document.getElementById("actionbutton");
    const playPauseImg = document.getElementById("play-pause-button");
    

    const playBtnImg = "image/play-button-arrowhead.png";
    const pauseBtnImg = "image/pause (1).png";

    const playPauseAnimation = function (){
        if(disk.style.animationPlayState === "paused"){
            disk.style.animationPlayState = "running";
            playPauseImg.src = pauseBtnImg;
            audio1.play();
        }else{
            disk.style.animationPlayState = "paused";
            playPauseImg.src = playBtnImg;
            audio1.pause();
        }
    }

    button.addEventListener('click', playPauseAnimation);
    disk.style.animationPlayState = "paused";
    audio1.pause();
});