const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const music = document.getElementsByTagName("audio")[0];
const img = document.getElementsByClassName("img")[0];
const artist = document.getElementsByClassName("artist")[0];
const title = document.getElementsByClassName("title")[0];
const songLogo = document.getElementById("songLogo");

var flag = true;
play.addEventListener("click", musicFun);


function musicFun() {

    if (flag) {
        musicPlay();
        flag = false;
    }
    else {
        musicPause();
        flag = true;
    }
}
function musicPlay() {

    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
}

function musicPause() {

    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");

}
// ======================= Music List==============
var songs = [
    {
        name: "san1",
        title: "Manika",
        artist: "Jubin nitiya",
        image: "san1"
    },
    {
        name: "san2",
        title: "Pal",
        artist: "Arjit Singh",
        image: "san2"
    },
    {
        name: "san3",
        title: "Kisi din Banogi",
        artist: "Aswin Youtube",
        image: "san3"
    },
    {
        name: "san4",
        title: "sanja hai ",
        artist: "Dj remix",
        image: "san4"
    },
    {
        name: "san5",
        title: "Saadgi",
        artist: "Unkown artist",
        image: "san5"
    }
]

// ========Changing the music Data=============

function loadSong(songs) {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    songLogo.src = "images/" + songs.image + ".jpg"

}

// =============Previous and Next Button=================

songIndex = 0;

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    musicPlay();
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    musicPlay();

}

