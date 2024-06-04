let musics=[
    {
        name:"Set Fire To The Rain",
        cover:"img/set-fire-to-rain.jpg",
        audio:new Audio("./music/Set Fire To The Rain - Adele.mp3")
    },
    {
        name:"Ready for it",
        cover:"img/ready-for-it.jpg",
        audio:new Audio("./music/01.ready_for_it.mp3")
    },
    {
        name:"Lose yourself",
        cover:"img/lose-yourself.jpg",
        audio:new Audio("./music/lose_yourself_eminem_320.mp3")
    }
];

let musicName=document.querySelector("#music-name");
let musicCover=document.querySelector("#music-cover");
let range=document.querySelector("#music-time");
let preBtn=document.querySelector("#pre-btn");
let nextBtn=document.querySelector("#next-btn");
let playBtn=document.querySelector("#play-btn");

let currentMusic=0;
let audio=musics[currentMusic].audio
musicCover.src=musics[currentMusic].cover
musicName.innerText=musics[currentMusic].name

audio.addEventListener("canplay", ()=>{
    range.max=audio.duration
});

audio.addEventListener("timeupdate",()=>{
    range.value=audio.currentTime
})

range.addEventListener("input", ()=>{
    audio.currentTime=range.value
})

playBtn.addEventListener("click", ()=>{
    if(audio.paused){
        audio.play();
        musicCover.style.animationPlayState="running"
        playBtn.classList.replace("fa-play","fa-pause")
    }else{
        audio.pause();
        musicCover.style.animationPlayState="paused"
        playBtn.classList.replace("fa-pause", "fa-play")
    }
});

preBtn.addEventListener("click", ()=>{
    changeMusic("next")
});

nextBtn.addEventListener("click", ()=>{
    changeMusic("pre")
});

function changeMusic(state){
    audio.pause();
    playBtn.classList.replace("fa-pause", "fa-play")
    range.value=0
    musicCover.style.animationPlayState="paused"
    audio.currentMusic=0;
    if(state=="next"){
        if(currentMusic== musics.length -1)
            currentMusic=0
        else currentMusic+=1
    }else{
        if(currentMusic== 0)
            currentMusic=musics.length -1
        else currentMusic-=1
    }

    audio=musics[currentMusic].audio
    musicCover.src=musics[currentMusic].cover
    musicName.innerText=musics[currentMusic].name

    audio.addEventListener("timeupdate",()=>{
        range.value=audio.currentTime
    })
}