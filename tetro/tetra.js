var obj1 = $('#obj1');
var startGame = $('#start');
var newGame = $('#new');
var quitGame= $("#quit");

$(function() {
  StartGame();
  NewGame();
});

function NewGame() {
  newGame.on('click', function() {
    window.location.reload();
  });

}

function GetPos() {
  var posObj1 = obj1.position();
  var posQuit = quitGame.position();
  var posGame = newGame.position();
  console.log(posObj1);
}

function StartGame() {
  startGame.on('click', function() {
    translate()
    console.log("Starting Game")
    $(this).css("opacity", ".01");
  });
}

function translate()  {
  document.addEventListener('keydown', function() {
    if (event.code == 'KeyS')
    {
      console.log("Works")
      var posObj1 = obj1.position();
      if (posObj1)
      {
          console.log("yes");

      }

    }
  })


  setTimeout(function() {
    obj1.css('transform', 'translatey(30px)');
    }, 1000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(60px)');
    }, 2000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(90px)');
    }, 3000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(120px)');
    }, 4000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(150px)');
    }, 5000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(180px)');
    }, 6000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(210px)');
    }, 7000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(240px)');
    }, 8000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(270px)');
    }, 9000);
   setTimeout(function() {
    obj1.css('transform', 'translatey(300px)');
    }, 10000);
   setTimeout(function() {
    obj1.css('transform', 'translatey(330px)');
    }, 11000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(360px)');
    }, 12000);
   setTimeout(function() {
    obj1.css('transform', 'translatey(390px)');
    }, 13000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(420px)');
    }, 14000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(450px)');
    }, 15000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(480px)');
    }, 16000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(510px)');
    }, 17000);
  setTimeout(function() {
    obj1.css('transform', 'translatey(540px)');
    }, 18000);
  }







/* obj1.css('transform' = 'translatey(30px)');

obj1.css('transform' = 'translatey(60px)');

obj1.css('transform' - 'translatey(90px)');


obj1.css('transform', 'translatey(120px)');

obj1.css('transform', 'translatey(150px)');

obj1.css('transform', 'translatey(180px)');


obj1.css('transform', 'translatey(210px)');

obj1.css('transform', 'translatey(240px)');

obj1.css('transform', 'translatey(270px)');


obj1.css('transform', 'translatey(300px)');


obj1.css('transform', 'translatey(330px)');

obj1.css('transform', 'translatey(360px)');

obj1.css('transform', 'translatey(390px)');

obj1.css('transform', 'translatey(420px)');

obj1.css('transform', 'translatey(450px)');

obj1.css('transform', 'translatey(480px)');

obj1.css('transform', 'translatey(510px)');

obj1.css('transform', 'translatey(540px)'); */
