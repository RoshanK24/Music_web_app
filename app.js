const music = new Audio('song/1.mp3');

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
        element.classList.add('bi-play-circle-fill');
        element.classList.remove('bi-pause-circle-fill');
    })
};

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName("songItem")).forEach((element)=>{
        element.style.background = "rgb(105, 105, 170, 0)";
    })
};

Array.from(document.getElementsByClassName('songItem'))[`${0}`].style.background="rgb(105, 105, 170, .1)";

const songs = [
    {
        id:'1',
        songName:`295
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"song/1.jpg",
        Song:1
    },
    {
        id:'2',
        songName:`Ban ja Tu raan
        <div class="subtitle">Guru Randhawa</div>`,
        poster:"song/2.jpg",
        Song:2
    },
    {
        id:'3',
        songName:`Beautifull
        <div class="subtitle">Akhil</div>`,
        poster:"song/3.jpg",
        Song:3
    },
    {
        id:'4',
        songName:`Besabriyaan
        <div class="subtitle">asdfgh</div>`,
        poster:"song/4.jpg",
        Song:4
    },
    {
        id:'5',
        songName:`lovely
        <div class="subtitle">Ariana</div>`,
        poster:"song/5.jpg",
        Song:5
    },
    {
        id:'6',
        songName:`Brown Rang
        <div class="subtitle">Honey Singh</div>`,
        poster:"song/6.jpg",
        Song:6
    },
    {
        id:'7',
        songName:`295
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"song/1.jpg",
        Song:1
    },
    {
        id:'8',
        songName:`Ban ja Tu raan
        <div class="subtitle">Guru Randhawa</div>`,
        poster:"song/2.jpg",
        Song:2
    },
    {
        id:'9',
        songName:`Beautifull
        <div class="subtitle">Akhil</div>`,
        poster:"song/3.jpg",
        Song:3
    },
    {
        id:'10',
        songName:`Besabriyaan
        <div class="subtitle">armaan</div>`,
        poster:"song/4.jpg",
        Song:4
    },
    {
        id:'11',
        songName:`Boyfriend
        <div class="subtitle">Ariana</div>`,
        poster:"song/5.jpg",
        Song:5
    },
    {
        id:'12',
        songName:`Brown Rang
        <div class="subtitle">Honey Singh</div>`,
        poster:"song/6.jpg",
        Song:6
    },
    {
        id:'13',
        songName:`On My Way
        <div class="subtitle">Alan Walker</div>`,
        poster:"song/7.jpg",
        Song:7
    },
    {
        id:'14',
        songName:`Kesariyaan
        <div class="subtitle">Arjit Singh</div>`,
        poster:"song/8.jpg",
        Song:8
    },
    {
        id:'15',
        songName:`Shopping
        <div class="subtitle">Jass Manak</div>`,
        poster:"song/9.jpg",
        Song:9
    },
    {
        id:'16',
        songName:`Lovely
        <div class="subtitle">Billie Eilish</div>`,
        poster:"song/10.jpg",
        Song:10
    },
    {
        id:'17',
        songName:`Najar Lag Jayegi
        <div class="subtitle">Millind Gaba</div>`,
        poster:"song/11.jpg",
        Song:11
    },
    {
        id:'18',
        songName:`Shopping
        <div class="subtitle">Mahinder Butter</div>`,
        poster:"song/12.jpg",
        Song:12
    },
    {
        id:'19',
        songName:`Shopping
        <div class="subtitle">Hardy Sandhu</div>`,
        poster:"song/13.jpg",
        Song:13
    }

]


Array.from(document.getElementsByClassName('songItem')).forEach((element, i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', ()=>{
    if (music.paused || music.currentTime<=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
});

let index=1;
let sindex=0;
let posterMasterplay = document.getElementById('posterMasterPlay');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('songItem'))[`${0}`].style.background="rgb(105, 105, 170, .1)";
title.innerHTML=`295
<div class="subtitle">Sidhu Moose Wala</div>`;

Array.from(document.getElementsByClassName('playListPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        index = e.target.id;
        makeAllplays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        let song_title = songs.filter((element)=>{
            if(index==element.id){
                sindex=element.Song;
                title.innerHTML=element.songName;
                return element;
            }
        });
        music.src = `song/${sindex}.mp3`;
        posterMasterplay.src = `song/${sindex}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener("ended", ()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105, 105, 170, .1)";
    })
})


let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor((music_dur)%60);
    if(sec<10){
        sec=`0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;
     
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor((music_curr)%60);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*1000);
    seek.value=progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar*.1}%`;
    dot.style.left = `${seekbar*.1}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value*music.duration/1000;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value>0 && vol.value<=50){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if(vol.value>50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})


let play = document.getElementById('play');

play.addEventListener('click', ()=>{
    index=0;
    makeAllBackground();
    makeAllplays();

    title.innerHTML=`Faded
    <div class="subtitle">Alen walker</div>`;
    posterMasterplay.src = 'song/faded.jpg';
    music.src = 'song/faded.mp3'
    music.play();

    wave.classList.add('active2');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
})


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if(index<1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    let song_title = songs.filter((element)=>{
        if(index==element.id){
            sindex=element.Song;
            title.innerHTML=element.songName;
            return element;
        }
    });
    music.src = `song/${sindex}.mp3`;
    posterMasterplay.src = `song/${sindex}.jpg`;
    music.play();

    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105, 105, 170, .1)";
});

next.addEventListener('click', ()=>{
    index =index -(-1);
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    };
    let song_titles = songs.filter((element)=>{
        if(index==element.id){
            sindex=element.Song;
            title.innerHTML=element.songName;
            return element;
        }
    });
    music.src = `song/${sindex}.mp3`;
    posterMasterplay.src = `song/${sindex}.jpg`;
    music.play();

    makeAllplays();
    document.getElementById(`${index}`).classList.remove('bi-play-circle-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-circle-fill');

    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105, 105, 170, .1)";
});


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 500;
});
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft += 500;
});


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let populer_artist = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    populer_artist.scrollLeft -= 500;
});
right_scrolls.addEventListener('click', ()=>{
    populer_artist.scrollLeft += 500;
});
