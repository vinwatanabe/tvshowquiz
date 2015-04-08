// Defining questions
var question1 = new question({
	charName: "1. Dr. James Wilson",
	answerOptions: ["Friends", "House M.D.", "Doctor Who", "The Big Bang Theory"],
	answer: 1,
	pageNumber: "page-1"
});

var question2 = new question({
	charName: "2. Patrick Jane",
	answerOptions: ["American Horror Story", "Marco Polo", "Intruders", "The Mentalist"],
	answer: 3,
	pageNumber: "page-2"
});

var question3 = new question({
	charName: "3. Harold Finch",
	answerOptions: ["Homeland", "Stalker", "Person of Interest", "House M.D."],
	answer: 2,
	pageNumber: "page-3"
});

var question4 = new question({
	charName: "4. Frank Underwood",
	answerOptions: ["Helix", "Game of Thrones", "House of Cards", "Mad Man"],
	answer: 2,
	pageNumber: "page-4"
});

var question5 = new question({
	charName: "5. Dr. John Watson",
	answerOptions: ["Sherlock", "House M.D.", "The Mentalist", "Doctor Who"],
	answer: 0,
	pageNumber: "page-5"
});

//Defining prototype
function question(option){
	this.charName = option.charName;
	this.answerOptions = option.answerOptions;
	this.answer = option.answer;
	this.pageNumber = option.pageNumber;
}

//Questions html template
var genQuestion = function(x){
	var stage = $('#questions');
	stage.append('<div id="' + x.pageNumber + '" class="page"></div>');

	var questionsPage = $('#' + x.pageNumber);
	questionsPage.append('<h1>TV Character Quiz</h1><hr/>');
	questionsPage.append('<p class="charName">' + x.charName + '</p>')
	questionsPage.append('<form>');
	questionsPage.append('<input type="radio" name="tv1" value="0" checked>' + x.answerOptions[0] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="1">' + x.answerOptions[1] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="2">' + x.answerOptions[2] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="3">' + x.answerOptions[3] + '<br/>');
	questionsPage.append('</form>');
	questionsPage.append('<button>next</button>');
}

//variables
var count = 0;
var nextPage = 1;

// calculate score
function showScore(){
	$('.score').append(count + " out of 5");
}

//checking answer
function checkAnswer(x){
	var finalAnswer = $('input:checked').val();
	if(nextPage == 5 && finalAnswer == x.answer){
		count++;
		$('#questions').hide();
		$('#finish').show();
		showScore();
	} else if(nextPage == 5){
		$('#questions').hide();
		$('#finish').show();
		showScore();
	} else if(finalAnswer == x.answer){
		count++;
		nextPage++;
		$('.page').hide();
		$('#finish').hide();
		$('#page-' + nextPage).show();
	} else {
		nextPage++;
		$('.page').hide();
		$('#finish').hide();
		$('#page-' + nextPage).show();
	}
}

//create a new game and questions
function newGame(){
	var create1 = new genQuestion(question1);
	var create2 = new genQuestion(question2);
	var create3 = new genQuestion(question3);
	var create4 = new genQuestion(question4);
	var create5 = new genQuestion(question5);
}

//restart game
function restart(){
	count = 0;
	nextPage = 1;
	$('#start-page').show();
	$('#page-1').hide();
	$('#page-2').hide();
	$('#page-3').hide();
	$('#page-4').hide();
	$('#page-5').hide();
	$('#finish').hide();
	$('#questions').show();
	$('.score').empty();
	$('#finish').hide();
}

$(document).ready(function(){
	// when the start button is clicked
	$('#start-page button').click(function(){
		$('#start-page').hide();
		$('#page-1').show();
		$('#page-2').hide();
		$('#page-3').hide();
		$('#page-4').hide();
		$('#page-5').hide();
		$('#finish').hide();
	});

	//generating the questions
	newGame();

	//events when next button is clicked
	$('#page-1 button').click(function(){
		checkAnswer(question1);
	});

	$('#page-2 button').click(function(){
		checkAnswer(question2);
	});

	$('#page-3 button').click(function(){
		checkAnswer(question3);
	});

	$('#page-4 button').click(function(){
		checkAnswer(question4);
	});

	$('#page-5 button').click(function(){
		checkAnswer(question5);
	});

	// event when try again is clicked
	$('#finish button').click(function(){
		restart();
	});
});