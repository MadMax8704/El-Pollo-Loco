
let fullscreen = false;

function PlayMenuMusic(){
  menu_guitar.play();
  menu_ambient.play();
  
}

function hideWelcomeWindow() {
  document.getElementById('welcome').classList.add("d-none");

}




function onStart() {

window.addEventListener("keydown", (e) => {
  if (e.keyCode == '83') {
     keyboard.S =  init();
  }
});


}

function openSettings() {
    document.getElementById('settings').classList.remove("d-none");
    document.getElementById('settings').classList.add("settings_menu");
    menu_click.play();

}
function closeSettings() {
    document.getElementById('settings').classList.add("d-none");
    document.getElementById('settings').classList.remove("settings_menu");
    menu_click.play();
}

function openHowTo() {
  document.getElementById('howto').classList.remove("d-none");
  document.getElementById('howto').classList.add("how_to");
  menu_click.play();
}

function closeHowTo() {
  document.getElementById('howto').classList.add("d-none");
  document.getElementById('howto').classList.remove("how_to");
  menu_click.play();
}

function allowFullscreen() {
  if (!fullscreen) {
    document.getElementById('screen').innerHTML = 'Screen : Fullscreen';
    fullscreen = true;
  }
  else {
    document.getElementById('screen').innerHTML = 'Screen : Window';
    fullscreen = false;
  }
}

function fullScreen(){
  var full = document.getElementById('canvas');

  if(full.webkitRequestFullScreen) {
      full.webkitRequestFullScreen();
  }
 else {
    full.mozRequestFullScreen();
 }            
}