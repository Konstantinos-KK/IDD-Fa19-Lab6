/*
chatServer.js
Author: David Goedicke (da.goedicke@gmail.com)
Closley based on work from Nikolas Martelaro (nmartelaro@gmail.com) as well as Captain Anonymous (https://codepen.io/anon/pen/PEVYXz) who forked of an original work by Ian Tairea (https://codepen.io/mrtairea/pen/yJapwv)
*/

var express = require('express'); // web server application
var app = express(); // webapp
var http = require('http').Server(app); // connects http library to server
var io = require('socket.io')(http); // connect websocket library to server
var serverPort = 8000;


//---------------------- WEBAPP SERVER SETUP ---------------------------------//
// use express to create the simple webapp
app.use(express.static('public')); // find pages in public directory

// start the server and say what port it is on
http.listen(serverPort, function() {
  console.log('listening on *:%s', serverPort);
});
//----------------------------------------------------------------------------//


//---------------------- WEBSOCKET COMMUNICATION -----------------------------//
// this is the websocket event handler and say if someone connects
// as long as someone is connected, listen for messages
io.on('connect', function(socket) {
  console.log('a new user connected');
  var questionNum = 0; // keep count of question, used for IF condition.
  socket.on('loaded', function() { // we wait until the client has loaded and contacted us that it is ready to go.

    socket.emit('answer', "Hey, I am the super legendary amazing genius Mathbot. A simple chat bot."); //We start with the introduction;
    setTimeout(timedQuestion, 5000, socket, "What is your name?"); // Wait a moment and respond with a question.

  });
  socket.on('message', (data) => { // If we get a new message from the client we process it;
    console.log(data);
    questionNum = bot(data, socket, questionNum); // run the bot function with the new message
  });
  socket.on('disconnect', function() { // This function  gets called when the browser window gets closed
    console.log('user disconnected');
  });
});
//--------------------------CHAT BOT FUNCTION-------------------------------//
function bot(data, socket, questionNum) {
  var input = data; // This is generally really terrible from a security point of view ToDo avoid code injection
  var answer;
  var question;
  var waitTime;

  /// These are the main statments that make up the conversation.
  if (questionNum == 0) {
    answer = input + '? Your name is not important!'; // output response
    waitTime = 5000;
    question = 'Okay mortal, are you good at MATH?'; // load next question
    socket.emit('changeBG', 'red');
    socket.emit('changeFont','white');
  } else if (questionNum == 1) {
    if (input.toLowerCase() === 'yes' || input === 1){
    answer = 'You are mistaken! I will prove you wrong.';
    waitTime = 5000;
    question = 'What is 1+1?';
    } else if (input.toLowerCase() === 'no' || input === 0){
    answer = 'Good, self knowledge is important!';
    waitTime = 5000;
    question = 'What is 1+1?';
    }else{
    answer = 'Its a yes or no question!!';
    waitTime = 5000;
    question = 'What is 1+1?';
  }} else if (questionNum == 2) {
    if (input.toLowerCase() === '2' || input === 1){
      answer = 'Wow I did not think you would get it right!';
      waitTime = 5000;
      question = 'What is 3,456,780/3,389?';
    } else{
      answer = 'Ha wrong answer!!'
      waitTime = 5000;
      question = 'What is 3,456,780/3,389?';
  }} else if (questionNum == 3) {
    if (input.toLowerCase() === '1020' || input === 1){
      answer = 'Wow I am truly impressed!';
      waitTime = 5000;
      question = 'Final Test: Solve the generalized eigenvalue problem max a^T=Ba subject to a^T=Wa = 1';
    } else{
      answer = 'You are mistaken!'
      waitTime = 5000;
      question = 'Final Test: Solve the generalized eigenvalue problem max a^T=Ba subject to a^T=Wa = 1';
    }
     } else if (questionNum == 4) {
      answer = 'Hahah just kidding good job for finishing my exam!';
      question = '';
      waitTime = 0;
  } else {
    answer = 'You have completed my exam!'; // output response
    waitTime = 0;
    question = '';
  }


  /// We take the changed data and distribute it across the required objects.
  socket.emit('answer', answer);
  setTimeout(timedQuestion, waitTime, socket, question);
  return (questionNum + 1);
}

function timedQuestion(socket, question) {
  if (question != '') {
    socket.emit('question', question);
  } else {
    //console.log('No Question send!');
  }

}
//----------------------------------------------------------------------------//
