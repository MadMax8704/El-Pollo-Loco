// Menu

let menu_guitar = new Audio('./audio/menu_guitar.mp3');
menu_guitar.loop = true;
menu_guitar.volume = 0.8;

let menu_ambient = new Audio ('./audio/menu_ambient.mp3');
menu_ambient.volume = 1;
menu_ambient.loop = true;

let menu_click = new Audio('./audio/menu_click.mp3');

// In Game

let game_ambient = new Audio('./audio/ambient_1.mp3');
game_ambient.loop = true;
game_ambient.volume = 0.4;

let game_music = new Audio('./audio/in_game-music.mp3');
game_music.loop = true;
game_music.volume = 0.2;

// Character Sounds

walking_sound = new Audio('./audio/walk.mp3');
walking_sound.volume = 1;
jump_sound = new Audio ('./audio/jump.mp3');
bottle_take_sound = new Audio ('./audio/bottle_take.mp3');
coin_sound = new Audio ('./audio/coin_take.mp3');

// Chicken Sounds

let chicken_beeps_sound = new Audio('./audio/chicken_beeps.mp3');
chicken_beeps_sound.volume = 0.2;

chicken_beeps_short_sound = new Audio('./audio/chicken_beep_short.mp3');

chicken_dead_sound = new Audio('./audio/chicken_dead.mp3');
chicken_dead_sound.volume = 0.2;