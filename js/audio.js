let vol;

// Menu sounds

let menu_guitar = new Audio('./audio/menu_guitar.mp3');
menu_guitar.loop = true;
let menu_ambient = new Audio('./audio/menu_ambient.mp3');
menu_ambient.volume = 1;
menu_ambient.loop = true;
let menu_click = new Audio('./audio/menu_click.mp3');

// In Game sounds

let game_ambient = new Audio('./audio/ambient_1.mp3');
game_ambient.loop = true;
game_ambient.volume = 0.4;
let game_music = new Audio('./audio/in_game-music.mp3');
game_music.loop = true;


// Character Sounds

walking_sound = new Audio('./audio/walk.mp3');
walking_sound.volume = 1;
hit_sound = new Audio('./audio/aua_1.mp3');
jump_sound = new Audio('./audio/jump.mp3');
bottle_take_sound = new Audio('./audio/bottle_take.mp3');
coin_sound = new Audio('./audio/coin_take.mp3');
game_over_loose_sound = new Audio('./audio/game_over_arcade_2.mp3');
game_over_loose_sound.loop = false;
game_over_win_sound = new Audio('./audio/hat_dance.mp3');

// Chicken Sounds

let chicken_beeps_sound = new Audio('./audio/chicken_beeps.mp3');
chicken_beeps_sound.volume = 0.2;
let chicken_beeps_short_sound = new Audio('./audio/chicken_beep_short.mp3');
let chicken_dead_sound = new Audio('./audio/chicken_dead.mp3');
chicken_dead_sound.volume = 0.2;
let chicken_dead_sound_2 = new Audio('./audio/chicken_dead_sound_2.mp3');
chicken_dead_sound_2.volume = 0.2;
let small_chicken_beeps_sound = new Audio('./audio/small_chicken-peeps.mp3');
small_chicken_beeps_sound.volume = 1;

// Bottle Sounds

let bottle_splash_sound = new Audio('./audio/bottle_crash.mp3');
bottle_splash_sound.volume = 0.5;

// Boss Sounds
let boss_beep_sound = new Audio('./audio/boss_beep.mp3');
boss_beep_sound.volume = 1;
let boss_hit_sound = new Audio('./audio/boss_hit.mp3');
boss_hit_sound.volume = 1;

// Music volume scrollbar setting

function changeVolume(vol) {
    game_music.volume = vol;
    menu_guitar.volume = vol;
    if (vol > 0) {
        document.getElementById('on_off').innerHTML = 'Music : ON';
    } else if (vol == 0) {
        document.getElementById('on_off').innerHTML = 'Music : OFF';
        vol = 1;
    }
};

function musicOff() {
    if (vol == 1) {
        document.getElementById('on_off').innerHTML = 'Music : OFF';
        changeVolume(0);
        document.getElementById('myRange').value = 0;
    } else {

        document.getElementById('on_off').innerHTML = 'Music : OFF';
        changeVolume(0);
        document.getElementById('myRange').value = 0;
        vol = 0;
    }
    if (vol == 0) {
        document.getElementById('on_off').innerHTML = 'Music : ON';
        changeVolume(0);
        document.getElementById('myRange').value = 0;
    }
};

// Start-Stop Music and Sounds in Game

function StopMenuMusic() {
    menu_guitar.pause();
    menu_guitar.currentTime = 0;
    menu_ambient.pause();
    game_over_win_sound.pause();
    game_over_win_sound.currentTime = 0;
    game_over_loose_sound.pause();
    game_over_loose_sound.currentTime = 0;
};

function StartGameMusic() {
    game_ambient.play();
    game_music.play();
};