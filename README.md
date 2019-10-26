# ChatBot

*A lab report by Konstantinos Karras Kallidromitis*

## In this Report
You'll need to upload any code you change into your fork, as well as upload a video of a friend or classmate using your chatbot.

## Make the ChatBot your own

**Describe what changes you made to the baseline chatbot here. Don't forget to push your modified code to this repository.**
[Code](https://github.com/Konstantinos-KK/IDD-Fa19-Lab6/blob/master/chatServer.js) 

The Mathbot is a chatbot that is made to provoke the user and promote quantitative thinking. At first it asks the user name and if they consider themselves good at math. The colors of the backgorund and fonts is also changed to indicate a more aggressive behavior in the beginning. Then it proceeds to asks excessively hard questions. Each question can have multiple responses and yes or no questions have also a case to cover a weird input. At the end the chatbot terminated by congratulating the user and saying that the exam is completed. 

```js
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
```


## Record someone trying out your ChatBot

**Using a phone or other video device, record someone trying out your ChatBot. Upload that video to this repository and link to it here!**
[Video of]()
---
Starter code by [David Goedicke](mailto:da.goedicke@gmail.com), closely based on work by [Nikolas Martelaro](mailto:nmartelaro@gmail.com) and [Captain Anonymous](https://codepen.io/anon/pen/PEVYXz), who forked original work by [Ian Tairea](https://codepen.io/mrtairea/pen/yJapwv).
