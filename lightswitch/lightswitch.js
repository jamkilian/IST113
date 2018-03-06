
function start() {
   let t = document.getElementsById("toggle");
   t.addEventListener('onclick', toggle);
}

function toggle() {
  var color = document.getElementsById("position");
  color.style.background = blue;
}

start();
toggle();
