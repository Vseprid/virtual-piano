"use strict"

const piano = document.querySelector('.piano');

const pianoКeys = document.querySelectorAll('.piano-key');

piano.addEventListener('click', (event) => playAudio(event));