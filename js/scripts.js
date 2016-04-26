// Trivia game Psuedo Code

// Welcome Page with msg "Welcome to Disney Trivia"
// Directions?
// Three strikes and you lose.
// The user should type their name.
// When user clicks button to submit their name the first question appears

$(document).ready(function() {

  var playerName = '';
  var playerAnswer1 = '';
  var playerAnswer2 = '';
  var playerAnswer3 = '';
  var playerAnswer4 = '';
  var playerAnswer5 = '';
  var playerAnswer6 = '';
  var playerAnswer7 = '';
  var answer1 = 'number four, privet drive' || '4, privet drive' || 'number 4, privet drive';
  var answer2 = 'hagrid';
  var answer3 = 'full moon';
  var answer4 = 'hungarian horntail';
  var answer5 = 'twelve grimmauld place' || '12 grimmauld place';
  var answer6 = 'marvolo’s ring';
  var answer7 = 'the hufflepuff cup' || 'hufflepuff cup';
  var correctCounter = 0;
  var triesLeft = 3;

  // Hide Player Name
  $('#dashboard').hide();
  $('.question').hide();
  $('.correct-msg').hide();
  $('.incorrect-msg').hide();
  $('#lose-game-msg').hide();
  $('#win-game-msg').hide();



  /****************************************************************************
  Dashboard/ Welcome Screen
  ****************************************************************************/



  // Allow user to type name immediately on page load
  $('#player-name').focus();

    // When user submits name, welcome screen disappears
  function removeWelcomeScreen() {
    $('#welcome-screen').detach();
    $('#dashboard').show().addClass('animated zoomIn');
  };

  function removeWelcome() {
    $('#h1').show().addClass('animated zoomIn');
  }

  function removequestion() {
  	$('#question1').show().addClass('animated zoomInLeft').focus();
  };

  function triesLeftCountdown() {
    triesLeft--;
    $('#tries-left').text(triesLeft);
    if(triesLeft === 0) {
      $('.question').addClass('animated zoomOut');
      $('.question').detach();
      $('#lose-game-msg').show().addClass('animated wobble');
    };
  };

  function WinMsg() {
    score+7;
    if(score === 7) {
      $('.question').addClass('animated zoomOut');
      $('.question').detach();
      $('#win-game-msg').show().addClass('animated rubberBand');
    };
  };

  // Store player name
  $('#name-button').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerName = $('#player-name').val();
    console.log(playerName);
    $('#show-player-name').text(playerName);
    $('#welcome-screen').addClass('animated zoomOut');
    $('#tries-left').text(triesLeft);
    setTimeout(removeWelcomeScreen, 1000);
    setTimeout(removeWelcome, 2000);
    setTimeout(removequestion, 3000);
  });



  /****************************************************************************
  QUESTION 1
  ****************************************************************************/



  // Store answer 1
  $('#question1-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer1 = $('#input-question1').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer1
    console.log("The Player's answer for question 1 is " + playerAnswer1);
    // showPlayerAnswer1(); // This first showPlayerAnswer1 function
    answerCheck1();
  });

  // Show answers
  function showPlayerAnswer1() {
    $('#show-player-answer1').text(playerAnswer1);
    $('#correct-answer1').text(answer1);
  };

  // Fade out answer check message
  function fadeOutAnswerCheckMsg1() {
  	$('#incorrect-msg1').removeClass('lightSpeedIn').addClass('bounceOut');
  };

  function fadeOutQuestion1() {
  	$('#question1').addClass('animated bounceOut');
  	setTimeout($('#question1').detach(), 2500);
  	$('#question2').show().addClass('animated lightSpeedIn');
  };

  function answerCheck1() {
  	// If player gets question right...
    if(playerAnswer1 === answer1) {
      console.log("Player's answer is correct!");
      $('#correct-msg1').show().addClass('animated pulse');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion1, 2500);
    }
    else {
    	// If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg1').show().addClass('animated tada');
      triesLeftCountdown();
      setTimeout(fadeOutAnswerCheckMsg1, 2500);
    }
  };



  /****************************************************************************
  QUESTION 2
  ****************************************************************************/



  // Store answer 2
  $('#question2-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer2 = $('#input-question2').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer2
    console.log("The Player's answer for question 2 is " + playerAnswer2);
    // showPlayerAnswer2(); // This first showPlayerAnswer2 function
    answerCheck2();
  });

  // Show answers
  function showPlayerAnswer2() {
    $('#show-player-answer2').text(playerAnswer2);
    $('#correct-answer2').text(answer2);
  };

  // Fade out answer check message
  function fadeOutAnswerCheckMsg2() {
  	$('#incorrect-msg2').removeClass('lightSpeedIn').addClass('bounceOut');
  };

  function fadeOutQuestion2() {
  	$('#question2').addClass('animated bounceOut');
  	setTimeout($('#question2').detach(), 2500);
  	$('#question3').show().addClass('animated lightSpeedIn');
  };

  function answerCheck2() {
  	// If player gets question right...
    if(playerAnswer2 === answer2) {
      console.log("Player's answer is correct!");
      $('#correct-msg2').show().addClass('animated pulse');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion2, 2500);
    }
    else {
    	// If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg2').show().addClass('animated tada');
      setTimeout(fadeOutAnswerCheckMsg2, 2500);
    }
  };



  /****************************************************************************
  QUESTION 3
  ****************************************************************************/



  // Store answer 3
  $('#question3-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer3 = $('#input-question3').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer3
    console.log("The Player's answer for question 3 is " + playerAnswer3);
    // showPlayerAnswer3(); // This first showPlayerAnswer3 function
    answerCheck3();
  });

  // Show answers
  function showPlayerAnswer3() {
    $('#show-player-answer3').text(playerAnswer3);
    $('#correct-answer3').text(answer3);
  };

  // Fade out answer check message
  function fadeoutAnswerCheckMsg3() {
  	$('#incorrect-msg3').removeClass('lightSpeedIn').addClass('bounceOut');
  };

  function fadeOutQuestion3() {
  	$('#question3').addClass('animated bounceOut');
  	setTimeout($('#question3').detach(), 2500);
  	$('#question4').show().addClass('animated lightSpeedIn');
  };

  function answerCheck3() {
  	// If player gets question right...
    if(playerAnswer3 === answer3) {
      console.log("Player's answer is correct!");
      $('#correct-msg3').show().addClass('animated pulse');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion3, 2500);
    }
    else {
    	// If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg3').show().addClass('animated tada');
      triesLeftCountdown();
      setTimeout(fadeoutAnswerCheckMsg3, 2500);
    }
  };



  /****************************************************************************
  QUESTION 4
  ****************************************************************************/



  // Store answer 4
  $('#question4-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer4 = $('#input-question4').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer4
    console.log("The Player's answer for question 4 is " + playerAnswer4);
    // showPlayerAnswer4(); // This first showPlayerAnswer4 function
    answerCheck4();
  });

  // Show answers
  function showPlayerAnswer4() {
    $('#show-player-answer4').text(playerAnswer4);
    $('#correct-answer4').text(answer4);
  };

  // Fade out answer check message
  function fadeoutAnswerCheckMsg4() {
  	$('#incorrect-msg4').removeClass('lightSpeedIn').addClass('bounceOut');
  };

  function fadeOutQuestion4() {
  	$('#question4').addClass('animated bounceOut');
  	setTimeout($('#question4').detach(), 2500);
  	$('#question5').show().addClass('animated lightSpeedIn');
  };

  function answerCheck4() {
  	// If player gets question right...
    if(playerAnswer4 === answer4) {
      console.log("Player's answer is correct!");
      $('#correct-msg4').show().addClass('animated pulse');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion4, 2500);
    }
    else {
    	// If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg4').show().addClass('animated tada');
      triesLeftCountdown();
      setTimeout(fadeoutAnswerCheckMsg4, 2500);
    }
  };



  /****************************************************************************
  QUESTION 5
  ****************************************************************************/



  // Store answer 5
  $('#question5-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer5 = $('#input-question5').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer5
    console.log("The Player's answer for question 5 is " + playerAnswer5);
    // showPlayerAnswer5(); // This first showPlayerAnswer5 function
    answerCheck5();
  });

  // Show answers
  function showPlayerAnswer5() {
    $('#show-player-answer5').text(playerAnswer5);
    $('#correct-answer5').text(answer5);
  };

  // Fade out answer check message
  function fadeoutAnswerCheckMsg5() {
    $('#incorrect-msg5').removeClass('lightSpeedIn').addClass('bounceOut');
  };

  function fadeOutQuestion5() {
    $('#question5').addClass('animated bounceOut');
    setTimeout($('#question5').detach(), 2500);
    $('#question6').show().addClass('animated lightSpeedIn');
  };

  function answerCheck5() {
    // If player gets question right...
    if(playerAnswer5 === answer5) {
      console.log("Player's answer is correct!");
      $('#correct-msg5').show().addClass('animated pulse');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion5, 2500);
    }
    else {
      // If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg5').show().addClass('animated tada');
      triesLeftCountdown();
      setTimeout(fadeoutAnswerCheckMsg5, 2500);
    }
  };



  /****************************************************************************
  QUESTION 6
  ****************************************************************************/



  // Store answer 6
  $('#question6-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer6 = $('#input-question6').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer6
    console.log("The Player's answer for question 6 is " + playerAnswer6);
    // showPlayerAnswer6(); // This first showPlayerAnswer6 function
    answerCheck6();
  });

  // Show answers
  function showPlayerAnswer6() {
    $('#show-player-answer6').text(playerAnswer6);
    $('#correct-answer6').text(answer6);
  };

  // Fade out answer check message
  function fadeoutAnswerCheckMsg6() {
    $('#incorrect-msg6').removeClass('lightSpeedIn').addClass('bounceOut');
  };

  function fadeOutQuestion6() {
    $('#question6').addClass('animated bounceOut');
    setTimeout($('#question6').detach(), 2500);
    $('#question7').show().addClass('animated lightSpeedIn');
  };

  function answerCheck6() {
    // If player gets question right...
    if(playerAnswer6 === answer6) {
      console.log("Player's answer is correct!");
      $('#correct-msg6').show().addClass('animated pulse');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion6, 2500);
    }
    else {
      // If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg6').show().addClass('animated tada');
      triesLeftCountdown();
      setTimeout(fadeoutAnswerCheckMsg6, 2500);
    }
  };



  /****************************************************************************
  QUESTION 7
  ****************************************************************************/



  // Store answer 7
  $('#question7-btn').on('click', function(e) {
    e.preventDefault(); // prevents form from submitting to a database
    playerAnswer7 = $('#input-question7').val().trim().toLowerCase(); // This assigns the user's input to the variable playerAnswer7
    console.log("The Player's answer for question 7 is " + playerAnswer7);
    // showPlayerAnswer7(); // This first showPlayerAnswer7 function
    answerCheck7();
  });

  // Show answers
  function showPlayerAnswer7() {
    $('#show-player-answer7').text(playerAnswer7);
    $('#correct-answer7').text(answer7);
  };

  // Fade out answer check message
  function fadeoutAnswerCheckMsg7() {
    $('#incorrect-msg7').removeClass('lightSpeedIn').addClass('bounceOut');
  };

  function fadeOutQuestion7() {
    $('#question7').addClass('animated bounceOut');
    setTimeout($('#question7').detach(), 2500);
    $('#question8').show().addClass('animated lightSpeedIn');
  };

  function answerCheck7() {
    // If player gets question right...
    if(playerAnswer7 === answer7) {
      console.log("Player's answer is correct!");
      $('#correct-msg7').show().addClass('animated pulse');
      correctCounter++;
      $('#score').text(correctCounter);
      setTimeout(fadeOutQuestion7, 2500);
    }
    else {
      // If player gets question wrong...
      console.log("Player's answer is incorrect!");
      $('#incorrect-msg7').show().addClass('animated tada');
      triesLeftCountdown();
      setTimeout(fadeoutAnswerCheckMsg7, 2500);
    }
  };



}); // ready function ends