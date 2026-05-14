const songs = [
    {
        title: "Song 1",
        file: "songs/song1.mp3"
    },
    {
        title: "Song 2",
        file: "songs/song2.mp3"
    },
    {
        title: "Song 3",
        file: "songs/song3.mp3"
    }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("song-title");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const progress = document.getElementById("progress");
const favoriteBtn =
document.getElementById("favorite");
const currentTimeEl =
document.getElementById("current-time");

const durationEl =
document.getElementById("duration");

function loadSong(song){

    title.textContent = song.title;

    audio.src = song.file;
}

loadSong(songs[currentSong]);

playBtn.addEventListener("click", () => {

    if(audio.paused){

        audio.play();

        playBtn.textContent = "⏸";

    } else {

        audio.pause();

        playBtn.textContent = "▶";
    }

});

nextBtn.addEventListener("click", () => {

    currentSong++;

    if(currentSong >= songs.length){
        currentSong = 0;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playBtn.textContent = "⏸";
});

prevBtn.addEventListener("click", () => {

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(songs[currentSong]);

    audio.play();

    playBtn.textContent = "⏸";
});

audio.addEventListener("timeupdate", () => {

    progress.value =
    (audio.currentTime / audio.duration) * 100;

    let currentMinutes =
    Math.floor(audio.currentTime / 60);

    let currentSeconds =
    Math.floor(audio.currentTime % 60);

    if(currentSeconds < 10){
        currentSeconds = "0" + currentSeconds;
    }

    currentTimeEl.textContent =
    `${currentMinutes}:${currentSeconds}`;

    let durationMinutes =
    Math.floor(audio.duration / 60);

    let durationSeconds =
    Math.floor(audio.duration % 60);

    if(durationSeconds < 10){
        durationSeconds = "0" + durationSeconds;
    }

    if(audio.duration){
        durationEl.textContent =
        `${durationMinutes}:${durationSeconds}`;
    }

});

progress.addEventListener("input", () => {

    audio.currentTime =
    (progress.value / 100) * audio.duration;
});
favoriteBtn.addEventListener("click", () => {

    favoriteBtn.classList.toggle("active");

    if(favoriteBtn.classList.contains("active")){

        favoriteBtn.textContent = "❤️";

    } else {

        favoriteBtn.textContent = "♡";
    }

});