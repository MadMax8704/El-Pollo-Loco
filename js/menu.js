
function PlayMenuMusic(){
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

