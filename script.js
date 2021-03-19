"use strict"

const piano = document.querySelector('.piano');

const pianoКeys = document.querySelectorAll('.piano-key');

const buttonNote = document.querySelector('.btn-notes');

const buttonLetter = document.querySelector(".btn-letters");

const fullscreen = document.querySelector('.fullscreen')

function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

const startSound = (event) => {
    event.target.classList.add("piano-key-active");
    if (event.target.classList.contains('piano-key')) {
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }
}

const stopSound = (event) => {
    event.target.classList.remove("piano-key-active");
    if (!(event.relatedTarget.classList.contains("piano-key"))) {
        pianoКeys.forEach((elem) => {
            elem.classList.remove("piano-key-active");
        });
    }
}

const startCorrespondOver = (event) => {
    if (event.target.classList.contains("piano-key")) {
        event.target.classList.add("piano-key-active");
        const note = event.target.dataset.note;
        const src = `assets/audio/${note}.mp3`;
        playAudio(src);
    }

    pianoКeys.forEach((elem) => {
        elem.addEventListener("mouseover", startSound)
        elem.addEventListener("mouseout", stopSound)
    });
}

const stopCorrespondOver = () => {
    pianoКeys.forEach((elem) => {
        elem.classList.remove("piano-key-active");
        elem.removeEventListener("mouseover", startSound)
        elem.removeEventListener("mouseout", stopSound)
    });

}

piano.addEventListener("mousedown", startCorrespondOver, false);
window.addEventListener("mouseup", stopCorrespondOver)

const startKeboardEvent = (event) => {
    if (event.repeat) return false;
    const letter = event.code[event.code.length - 1];
    pianoКeys.forEach((elem) => {
        if (elem.dataset.letter == letter) {
            elem.classList.add("piano-key-active");
            const note = elem.dataset.note;
            const src = `assets/audio/${note}.mp3`;
            playAudio(src);
        }
    })
}

const stopKeyboardEvent = () => {
    pianoКeys.forEach((elem) => {
        elem.classList.remove("piano-key-active");
    });
}

window.addEventListener('keydown', startKeboardEvent);
window.addEventListener("keyup", stopCorrespondOver);


buttonNote.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn-active')) {
        buttonLetter.classList.remove("btn-active");
        event.target.classList.add("btn-active");
        pianoКeys.forEach((elem) => {
            elem.classList.remove('piano-key-letter')
        })
    }
});

buttonLetter.addEventListener('click', (event) => {
    if (!event.target.classList.contains('btn-active')) {
        buttonNote.classList.remove("btn-active");
        event.target.classList.add("btn-active");
        pianoКeys.forEach((elem) => {
            elem.classList.add('piano-key-letter')
        })
    }
});

fullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}, false);