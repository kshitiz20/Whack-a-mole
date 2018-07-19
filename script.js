

var score=0;
var gameOver=false;
var lastHole=0;
$('document').ready(function(){
	$('#start').click(startGame);
	$('.game').on('click','.mole', hitMole)
});
function hitMole(){
	console.log($(this));
	$(this).hide();
	score++;
	$('.score').text(score);

}

function startGame(){
	makeGameBoard();
	score=0;
	$('.score').text(score);
	startMoles();
	gameOver=false;
	$('.message').html('');
	setTimeout(function(){
		return gameend();
	},15000);
}

function startMoles(){
	var jumpUp=$(".hole"+randomHole()+'>.mole');
	var timer=Math.round(Math.random()*1000)+400;
	jumpUp.show();
	jumpUp.animate({
		top:'50px'
	},500);
	setTimeout(function(){
		jumpUp.animate({
		top:'250px'
	},timer);
		if(!gameOver)startMoles();



	},500);

	console.log(jumpUp);
}

function randomHole(){
	var numberOfHoles=$('.hole').length;
	var hole=Math.floor(Math.random()*numberOfHoles);
	if(hole==lastHole){
		return randomHole();
	}
	lastHole=hole;
	return hole;
	console.log(hole);
}

function gameend(){
	gameOver=true;
	$('.message').html('Game Over!!!!');
}

function makeGameBoard(){
	
	var moles=8;
	var html=' ';
	for(var i=0;i<moles;i++){
		html+='<div class="hole hole'+i+'"><div class="mole"></div>';
		html+='<div class="dirt "></div></div>';

	}

	$('.game').html(html);

}
