
function start() {
  $("#slider").on("click", toggle);
};

function toggle() {
  console.log('whatup');
  if ($('#body').css('background-color') == 'rgb(255, 255, 255)')
  {
      $('#body').css('background-color', 'black');
  }
  else
  {
      $('#body').css('background-color', 'white');
  }
};

start();
