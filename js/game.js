let canvas;
let world;
let keyboard = new Keyboard();

//Initialize the game

function init() {
   levelInit();
   StopMenuMusic();
   StartGameMusic();
   bindButtons();
   hideElements();
   checkFullscreen();
   canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);
   document.getElementById('canvas').classList.remove('background');
   //Activate to show the Character Infos in Console
   //console.log('My character is', world.character);
}

function hideElements() {
   document.getElementById('control_lay').classList.remove("d-none");
   document.getElementById('touch_overlay').classList.remove("d-none");
   document.getElementById('coin_loose').innerHTML = ``;
   document.getElementById('menubar').classList.add("d-none");
   document.getElementById('coins_collected').classList.remove('d-none');
   document.getElementById('gameover_img').innerHTML = `<h1 class="game_over_messege">You Died!</h1>`;
   document.getElementById('gameover_buttons').classList.add('d-none');
   document.getElementById('gameover').classList.add('d-none');
}

function checkFullscreen() {
   if (fullscreen) {
      fullScreen();
   }
}


//Keyboard keydown settings

window.addEventListener("keydown", (e) => {
   if (e.keyCode == '39')
      keyboard.RIGHT = true;
   if (e.keyCode == '37')
      keyboard.LEFT = true;
   if (e.keyCode == '38')
      keyboard.UP = true;
   if (e.keyCode == '40')
      keyboard.DOWN = true;
   if (e.keyCode == '32')
      keyboard.SPACE = true;
   if (e.keyCode == '27')
      keyboard.ESC = window.location.reload();
   if (e.keyCode == '82')
      keyboard.S = init();
});

//Keyboard keydup settings

window.addEventListener("keyup", (e) => {
   if (e.keyCode == '39')
      keyboard.RIGHT = false;
   if (e.keyCode == '37')
      keyboard.LEFT = false;
   if (e.keyCode == '38')
      keyboard.UP = false;
   if (e.keyCode == '40')
      keyboard.DOWN = false;
   if (e.keyCode == '32')
      keyboard.SPACE = false;
   //Activate to show the pushed keys in Console
   //console.log(e.keyCode);
});

//Touch control binding

function bindButtons() {
   document.getElementById('right_down').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.RIGHT = true;
   });
   document.getElementById('right_down').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.RIGHT = false;
   });
   document.getElementById('right_up').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.SPACE = true;
   });
   document.getElementById('right_up').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.SPACE = false;
   });
   document.getElementById('left_down').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.LEFT = true;
   });
   document.getElementById('left_down').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.LEFT = false;
   });
   document.getElementById('left_up').addEventListener('touchstart', (e) => {
      e.preventDefault();
      keyboard.UP = true;
   });
   document.getElementById('left_up').addEventListener('touchend', (e) => {
      e.preventDefault();
      keyboard.UP = false;
   });
}