/*
Cronómetro

Realizar una web con un cronómetro, que tenga las opciones de iniciar, reset (volver el cronómetro a 0) y pausar.
*/

let spanMiliSeconds = document.querySelector('#spanMiliSeconds');
let spanSeconds = document.querySelector('#spanSeconds');
let spanMinutes = document.querySelector('#spanMinutes');

let reset = document.querySelector('#reset_button');
let pause = document.querySelector('#pause_button');
let play = document.querySelector('#play_button');

let miliSeconds = 00;
let seconds = 00;
let minutes = 00;

let interval = null;

// ----------------------------------------------------------------------------------------------------------------

function startChronometer(e) {

    console.log(e);

    clearInterval(interval);

    interval = setInterval(function () {

        miliSeconds++


        if (miliSeconds < 10) {

            spanMiliSeconds.innerHTML = '0' + miliSeconds;

        } if (miliSeconds > 10) {

            spanMiliSeconds.innerHTML = miliSeconds;

        } if (miliSeconds > 99) {

            seconds++

            spanSeconds.innerHTML = '0' + seconds;

            miliSeconds = 00

            spanMiliSeconds.innerHTML = '0' + miliSeconds;

        };

        if (seconds > 9) {

            spanSeconds.innerHTML = seconds;

        };

        if (seconds > 59) {

            minutes++

            spanMinutes.innerHTML = '0' + minutes

            seconds = 00

            spanSeconds.innerHTML = '0' + seconds;

            if (minutes > 9) {

                spanMinutes.innerHTML = minutes

            };

        };

    }, 10);

};

// -----------------------------------------------------------------------------------------------------------------

function pauseChronometer(e) {

    console.log(e);

    clearInterval(interval);

};

// ----------------------------------------------------------------------------------------------------------------

function resetChronometer(e) {

    console.log(e);

    clearInterval(interval);

    miliSeconds = '00';
    seconds = '00';
    minutes = '00';

    spanMiliSeconds.innerHTML = miliSeconds;
    spanSeconds.innerHTML = seconds;
    spanMinutes.innerHTML = minutes;

};

// ---------------------------------------------------------------------------------------------------------------------

play.addEventListener('click', startChronometer);

pause.addEventListener('click', pauseChronometer);

reset.addEventListener('click', resetChronometer)


document.addEventListener('keypress', startKey);

function startKey(event) {

    console.log(event);

    if (event.charCode === 32) {

        startChronometer();

    };

};

// document.addEventListener('keypress', pauseKey);




