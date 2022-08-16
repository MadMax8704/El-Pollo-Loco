
let menu_guitar = new Audio('./audio/menu_guitar.mp3');
menu_guitar.loop = true;
menu_guitar.volume = 0.8;

let menu_ambient = new Audio ('./audio/menu_ambient.mp3');
menu_ambient.volume = 1;
menu_ambient.loop = true;

let menu_click = new Audio('./audio/menu_click.mp3');

function PlayMusic(){
  menu_guitar.play();
  menu_ambient.play();
      
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

