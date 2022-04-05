console.log("start")
// variables

let songIndex=0;
let audioElement = new Audio('music/Golden.mp3')
let masterPlay = document.getElementById('Play')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')

let songs=[

    {songName:"Golden",filePath:"music/Golden.mp3",coverPath:"images/cover1.jpg"},
    {songName:"Golden",filePath:"music/Golden.mp3",coverPath:"images/cover2.jpg"},
    {songName:"Golden",filePath:"music/Golden.mp3",coverPath:"images/cover3.jpg"},
    {songName:"Golden",filePath:"music/Golden.mp3",coverPath:"images/cover1.jpg"},
    {songName:"Golden",filePath:"music/Golden.mp3",coverPath:"images/cover2.jpg"},
    {songName:"Golden",filePath:"music/Golden.mp3",coverPath:"images/cover3.jpg"}
]

//handle play
masterPlay.addEventListener('click',()=>{
   
    if(audioElement.paused || audioElement.currentTime<=0){  
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0
    }
})

//Listen to event
audioElement.addEventListener('timeupdate',()=>{
    console.log("time update")
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)//in percent

    console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})