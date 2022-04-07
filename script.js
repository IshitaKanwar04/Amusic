console.log("start")
// variables

let songIndex=0;
let audioElement = new Audio('music/Golden.mp3')
let masterPlay = document.getElementById('Play')
let myProgressBar = document.getElementById('myProgressBar')
let gif = document.getElementById('gif')
let songItems = Array.from(document.getElementsByClassName('song')) 
let songDisplayBottom = document.getElementById('songDisplayBottom')

let songs=[

    {songName:"Golden",filePath:"music/Golden.mp3",coverPath:"images/cover1.jpg"},
    {songName:"Peaches",filePath:"music/Peaches.mp3",coverPath:"images/cover2.jpg"},
    {songName:"Golden",filePath:"music/Golden.mp3",coverPath:"images/cover3.jpg"},
    {songName:"Peaches",filePath:"music/Peaches.mp3",coverPath:"images/cover1.jpg"},
    {songName:"Golden",filePath:"music/Golden.mp3",coverPath:"images/cover2.jpg"},
    {songName:"Peaches",filePath:"music/Peaches.mp3",coverPath:"images/cover3.jpg"}
]

songItems.forEach((element,i) => {
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath
    element.getElementsByClassName("songName")[0].src=songs[i].filePath
});

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
   // console.log("time update")
    //update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)//in percent

    //console.log(progress)
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100;
})

Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        //console.log(e.target)//target is the element which has been clicked
        songIndex = parseInt(e.target.id)
        let song = 'music/'+ songs[songIndex].songName + '.mp3'
        makeAllPlays();
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        console.log(song)
        audioElement.src = song
        audioElement.currentTime = 0;
        audioElement.play()
        songDisplayBottom.innerText = songs[songIndex].songName 
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1
    })
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play')
    })
}

document.getElementById('next').addEventListener('click',()=> {
    if(songIndex>5){
        songIndex=0
    }
    else{
        songIndex += 1;
    }
    console.log(songIndex)
    let song = 'music/'+ songs[songIndex].songName + '.mp3'
    audioElement.src = song
        audioElement.currentTime = 0;
        audioElement.play()
        songDisplayBottom.innerText = songs[songIndex].songName 
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
})

document.getElementById('previous').addEventListener('click',()=> {
    if(songIndex<=0){
        songIndex=5
    }
    else{
        songIndex -= 1;
    }
    console.log(songIndex)
    let song = 'music/'+ songs[songIndex].songName + '.mp3'
    audioElement.src = song
        audioElement.currentTime = 0;
        audioElement.play()
        songDisplayBottom.innerText = songs[songIndex].songName 
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
})