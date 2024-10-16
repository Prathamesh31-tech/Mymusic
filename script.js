let songIndex=0;
let audioElement=new Audio('9.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif =document.getElementById('gif');
let songItems= Array.from(document.getElementsByClassName('songItem'));
const xcontainer=document.getElementById("xcontainer");
const fakecontainer=document.getElementById("fakecontainer");
const photo=document.getElementById("photo");

let songs=[
    {songName:"Chal hini nagin" , fileFath:"0.mp3",coverPath:"0.jpeg"},
    {songName:"Kar man lagan" , fileFath:"1.mp3",coverPath:"1.jpeg"},
    {songName:"Mani Sasiba tu" , fileFath:"2.mp3",coverPath:"2.jpeg"},
    {songName:"Changali rangni ka.." , fileFath:"3.mp3",coverPath:"3.jpeg"},
    {songName:"Nshik le bhetni por" , fileFath:"4.mp3",coverPath:"4.jpeg"},
    {songName:"Raja tu mana raja r" , fileFath:"5.mp3",coverPath:"5.jpeg"},
    {songName:"Savan mahina ma 2" , fileFath:"6.mp3",coverPath:"6.jpeg"},
    {songName:"Chandan vadi" , fileFath:"7.mp3",coverPath:"7.jpeg"},
    {songName:"Zim Zim pani ma" , fileFath:"8.mp3",coverPath:"8.jpeg"},
    {songName:"Zumaka vali por" , fileFath:"9.mp3",coverPath:"9.jpeg"},
    {songName:"Ghadina Kata Gar Gar Fir" , fileFath:"10.mp3",coverPath:"10.jpeg"},
    {songName:"Yad Tula Karnaye" , fileFath:"11.mp3",coverPath:"11.jpeg"},
    {songName:"Raja Tu Mana Raja r 2" , fileFath:"12.mp3",coverPath:"12.jpeg"},
]

songItems.forEach((song)=>{
    song.addEventListener("click",(s)=>{


        if(audioElement.paused||audioElement.currentTime<=0){
            makeAllPlays();
            songIndex=parseInt(s.target.id);
            audioElement.src=`${ songIndex}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity= 1;
            xcontainer.style.display="none";
            fakecontainer.style.display="flex";
            photo.src=`${songIndex}.jpeg`
        }
        else{
    
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity= 0;
            xcontainer.style.display="flex";
            fakecontainer.style.display="none";
        }
        


    })
})



 songItems.forEach((element,i)=>{
        element.getElementsByTagName("img")[0].src=songs[i].coverPath;
        element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
 })



masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity= 1;
        xcontainer.style.display="none";
        fakecontainer.style.display="flex";
       
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
            xcontainer.style.display="flex";
            fakecontainer.style.display="none";
        })
    }
})

audioElement.addEventListener('timeupdate',()=>{
        progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
        myProgressBar.value=progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})


const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

        if(audioElement.paused||audioElement.currentTime<=0){
            makeAllPlays();
            songIndex=parseInt(e.target.id);
            e.target.classList.remove('fa-circle-play');
            e.target.classList.add('fa-circle-pause');
            audioElement.src=`${ songIndex}.mp3`;
            audioElement.currentTime=0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity= 1;
            xcontainer.style.display="none";
            fakecontainer.style.display="flex";
            photo.src=`${songIndex}.jpeg`
        }
        else{
            e.target.classList.remove('fa-circle-pause');
            e.target.classList.add('fa-circle-play');
            audioElement.pause();
            masterPlay.classList.remove('fa-circle-pause');
            masterPlay.classList.add('fa-circle-play');
            gif.style.opacity= 0;
            xcontainer.style.display="flex";
            fakecontainer.style.display="none";
        }
    
    })
})
 
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=12){
        songIndex=0;
           photo.src=`${songIndex}.jpeg`
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`${ songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity= 1;
     photo.src=`${songIndex}.jpeg`

})


 
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 12;
         photo.src=`${songIndex}.jpeg`
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`${ songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity= 1;
    photo.src=`${songIndex}.jpeg`

})


if(audioElement.paused){
   fakecontainer.style.dispaly="flex";
}
else{
    fakecontainer.style.dispaly="none"
}
