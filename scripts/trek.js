console.log("STAR TREK!");

var player = '';
var captains = '';
var villains = '';

var gameInProgress = false;

var foes = {
  'kirk' : 'khan',
  'picard' : 'locutusOfBorg',
  'sisko' : 'gulDukat',
  'janeway' : 'queenOfBorg',
  'archer' : 'silik'
}

$(".captains").on('click', function(event){

  if (player !== '') {
    return;
  }

  player = event.target.id;
  captains = event.target.id;
  villains = foes[captains];

  $('.captains img').css('opacity', '.2');
});


$(".grid").on('click', function(event){

  if ($(event.target).attr('src') !== 'images/ussEnterpriseLogo.jpg') {
   return;
  }

  $(event.target).attr('src', 'images/' + player + '.jpg');

  if (player === captains) {
    player = villains;
  } else {
    player = captains;
  }
});

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
      console.log($("#winner").text("FEDERATION WINS!"))
   $("#winner").text("FEDERATION WINS!");

  } else {
    return false;
  }
  checkWin('');
}

