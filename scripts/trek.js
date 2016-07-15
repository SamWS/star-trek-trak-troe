console.log("STAR TREK!");

var player = '';
var captains = '';
var villains = '';
var count = 0;

var won = false;

var foes = {
  'kirk' : 'khan',
  'picard' : 'locutusOfBorg',
  'sisko' : 'gulDukat',
  'janeway' : 'queenOfBorg',
  'archer' : 'silik'
}

////////////////////////////////////

$(".captains").on('click', function(event){

  if (player !== '') {
    return;
  }

  player = event.target.id;
  captains = event.target.id;
  villains = foes[captains];

  $('.captains img').css('opacity', '.3');
  $(event.target).css('opacity', '1');
});

//////////////////////////////////

$(".grid").on('click', function(event){

  if (player === '') {
    return;
  }

  if (won) {
   return;
  }

  if ($(event.target).text()) {
    return;
  }

  $(event.target).text('x');

  $(event.target).attr('src', 'images/' + player + '.jpg');
  // $(event.target).removeClass('empty');

  if (checkWin('images/' + player + '.jpg')) { 
    $("#winner").text(player + ' WINS!');
    won = true;
    return;
  } 

  // $(event.target.class(".grid")).click(function() {
    count++;
    if (count === 9) {
      $("#winner").text("You've Entered the Neutral Zone")
    } else 
  // });


  if (player === captains) {
    player = villains;
  } else {
    player = captains;
  }

});

//////////////////////////////////

function checkWin(token) {
  if ($('#1 img').attr('src') === token && 
      $('#2 img').attr('src') === token && 
      $('#3 img').attr('src') === token ||
      $('#4 img').attr('src') === token &&
      $('#5 img').attr('src') === token &&
      $('#6 img').attr('src') === token ||
      $('#7 img').attr('src') === token &&
      $('#8 img').attr('src') === token &&
      $('#9 img').attr('src') === token ||
      $('#1 img').attr('src') === token &&
      $('#4 img').attr('src') === token &&
      $('#7 img').attr('src') === token ||
      $('#2 img').attr('src') === token &&
      $('#5 img').attr('src') === token &&
      $('#8 img').attr('src') === token ||
      $('#3 img').attr('src') === token &&
      $('#6 img').attr('src') === token &&
      $('#9 img').attr('src') === token ||
      $('#1 img').attr('src') === token &&
      $('#5 img').attr('src') === token &&
      $('#9 img').attr('src') === token ||
      $('#3 img').attr('src') === token &&
      $('#5 img').attr('src') === token &&
      $('#7 img').attr('src') === token) {

    return true

  } else {
    return false;
  }
}


// var endGame = function(ending) {
//     var endMessage;

//     if ($.checkWin(token)) {
//       $(#winner).text('Game Over.  Player ' + player + ' Wins');
//     } else {
//       endMessage = 'Game Over.  Draw Game';
//     }
// }
