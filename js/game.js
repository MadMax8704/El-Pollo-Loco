let canvas;
let world;
let keyboard = new Keyboard();


function init() {
   levelInit();
   document.getElementById('gameover').classList.add('d-none');
   document.getElementById('menubar').style = "display: none";
   canvas = document.getElementById('canvas');
   world = new World(canvas, keyboard);
   document.getElementById('header').classList.add('d-none');
   document.getElementById('canvas').classList.remove('background');
   StopMenuMusic();
   StartGameMusic();
   console.log('My character is', world.character);

   if (fullscreen) {
      fullScreen();
   }
}



function StopMenuMusic() {

   menu_guitar.pause();
   menu_ambient.pause();
       
 };

 function StartGameMusic() {

   game_ambient.play();
   game_music.play();

 };



window.addEventListener("keydown", (e) => {
   if (e.keyCode == '39') {
      keyboard.RIGHT = true;
   }

   if (e.keyCode == '37') {
      keyboard.LEFT = true;
   }

   if (e.keyCode == '38') {
      keyboard.UP = true;
   }

   if (e.keyCode == '40') {
      keyboard.DOWN = true;
   }

   if (e.keyCode == '32') {
      keyboard.SPACE = true;
   }

   if (e.keyCode == '27') {
      keyboard.ESC = window.location.reload();
   } 
   
   if (e.keyCode == '82') {
      keyboard.S =  init();
   }

});

window.addEventListener("keyup", (e) => {
   if (e.keyCode == '39') {
      keyboard.RIGHT = false;
   }

   if (e.keyCode == '37') {
      keyboard.LEFT = false;
   }

   if (e.keyCode == '38') {
      keyboard.UP = false;
   }

   if (e.keyCode == '40') {
      keyboard.DOWN = false;
   }

   if (e.keyCode == '32') {
      keyboard.SPACE = false;
   }

   console.log(e.keyCode);
});