$(document).ready(function(){
	// defining the questions
	var questions = [
	{
		question: "1. Dr. James Wilson",
		answerOptions: ["Friends", "House M.D.", "Doctor Who", "The Big Bang Theory"],
		correct: 1
	},
	{
		question: "2. Patrick Jane",
		answerOptions: ["American Horror Story", "Marco Polo", "Intruders", "The Mentalist"],
		correct: 3
	},
	{
		question: "3. Harold Finch",
		answerOptions: ["Homeland", "Stalker", "Person of Interest", "House M.D."],
		correct: 2
	},
	{
		question: "4. Frank Underwood",
		answerOptions: ["Helix", "Game of Thrones", "House of Cards", "Mad Man"],
		correct: 2
	},
	{
		question: "5. Dr. John Watson",
		answerOptions: ["Sherlock", "House M.D.", "The Mentalist", "Doctor Who"],
		correct: 0
	}
	];

	function page(pageNum, question, answer1, answer2, answer3, answer4, correctAnswer){
		$(document).append('<section id="' + pageNum + '" class="page">
				<h1>TV Character Quiz</h1>
				<hr/>
		
				<p class="charName">' + question + '</p>
				<form>
					<input type="radio" name="tv1" value="1" checked>' + answer1 + '
					<br/>
					<input type="radio" name="tv1" value="2">' + answer2 + '
					<br/>
					<input type="radio" name="tv1" value="3">' + answer3 + '
					<br/>
					<input type="radio" name="tv1" value="4">' + answer4 + '
				</form>
		
				<button>next</button>
			</section>');
	}

	//when press start
	$('#start-page button').click(function(){
		$('#start-page').hide();

		var newPage = new page("page-1", questions[0].question, questions[0].answerOptions[0], questions[0].answerOptions[1], questions[0].answerOptions[2], questions[0].answerOptions[3], questions.correct);
		
	});

	//when next is clicked
	var count = 0;
	var answer;
	var btnNext = $('.page button');

	function checkAnswer(x){
		if (x == 2){
			alert("Ok");
		} else {
			alert("No");
		}
	}

	btnNext.click(function(){
		answer = $('input[type="radio"]:checked').val();
		checkAnswer(answer);
	});
});