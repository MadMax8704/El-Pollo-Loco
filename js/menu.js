
let fullscreen = false;

function PlayMenuMusic() {
  menu_guitar.play();
  menu_ambient.play();

}

function hideWelcomeWindow() {
  document.getElementById('welcome').classList.add("d-none");
  document.getElementById('menubar').classList.remove("d-none");
}


function onStart() {

  window.addEventListener("keydown", (e) => {
    if (e.keyCode == '83') {
      keyboard.S = init();
    }
  });
}

function openSettings() {
  document.getElementById('settings').classList.remove("d-none");
  document.getElementById('settings').classList.add("settings_menu");
  document.getElementById('menubar').classList.add("d-none");
  menu_click.play();

}
function closeSettings() {
  document.getElementById('settings').classList.add("d-none");
  document.getElementById('settings').classList.remove("settings_menu");
  document.getElementById('menubar').classList.remove("d-none");
  menu_click.play();
}

function openControls() {
  document.getElementById('controls').classList.remove("d-none");
  document.getElementById('controls').classList.add("how_to");
  document.getElementById('menubar').classList.add("d-none");
  menu_click.play();
}

function closeControls() {
  document.getElementById('controls').classList.add("d-none");
  document.getElementById('controls').classList.remove("how_to");
  document.getElementById('menubar').classList.remove("d-none");
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

function fullScreen() {
  var full = document.getElementById('canvas');

  if (full.requestFullscreen) {
    full.requestFullscreen();
  } else if (full.webkitRequestFullscreen) { /* Safari */
    full.webkitRequestFullscreen();
  } else if (full.msRequestFullscreen) { /* IE11 */
    full.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

function showControlsPhone() {
  document.getElementById('touch_img').classList.remove("d-none");
  document.getElementById('tohide').classList.add("d-none");
  document.getElementById('tohide_2').classList.add("d-none");
  document.getElementById('door').classList.add("d-none");
}

function hideControlsPhone() {
  document.getElementById('touch_img').classList.add("d-none");
  document.getElementById('tohide').classList.remove("d-none");
  document.getElementById('tohide_2').classList.remove("d-none");
  document.getElementById('door').classList.remove("d-none");
}