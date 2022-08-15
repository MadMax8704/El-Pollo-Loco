



function menuInit(){
  menuambient.play;
  menumusic.play;    
}


function openSettings() {
    document.getElementById('settings').classList.remove("d-none");
    document.getElementById('settings').classList.add("settings_menu");

}
function closeSettings() {
    document.getElementById('settings').classList.add("d-none");
    document.getElementById('settings').classList.remove("settings_menu");
}

