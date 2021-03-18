"use strict"

const piano = document.querySelector('.piano');

const pianoКeys = document.querySelectorAll('.piano-key');


piano.addEventListener('mousedown', (event) => {
    // if (event.target.classList.contains('piano-key')) {
    //     pianoКeys.forEach((el) => {
    //         if (el.classList.contains('active')) {
    //             el.classList.remove('active');
    //         }
    //     });
    if (event.target.classList.contains('piano-key')) {
        event.target.classList.add('active');
    }
});


piano.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
});

piano.addEventListener('mouseup', (event) => {
    event.target.classList.remove('active')
});
window.addEventListener('keydown', (event) => playAudio(event));

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}




// const startSound = (event) => {
//     event.target.classList.add("active");
// }

// const stopSound = (event) => {
//     event.target.classList.remove("active");
// }

// const startCorrespondOver = (event) => {
//     if (event.target.classList.contains("piano-button")) {
//         event.target.classList.add("active");
//     }

//     pianoКeys.forEach((elem) => {
//         elem.addEventListener("mouseover", startSound)
//         elem.addEventListener("mouseout", stopSound)
//     });
// }

// const stopCorrespondOver = () => {
//     pianoКeys.forEach((elem) => {
//         elem.classList.remove("active");
//         elem.removeEventListener("mouseover", startSound)
//         elem.removeEventListener("mouseout", stopSound)
//     });
// }

// piano.addEventListener("mousedown", startCorrespondOver, false);
// piano.addEventListener("mouseup", stopCorrespondOver)