//console.log("shanu")
var readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');
console.log("How well do you know me? check it")
console.log("*******************")
console.log("INSTRUCTION")
console.log("All answers in small letter")
console.log("for every right answer you get +1 and else you get -1")
console.log("*******************")
var count = 0;
function play(question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer == answer){
    console.log('Right one!')
    count = count+1;
    console.log("your score " +count)
    
    //console.log("***********")
  }else{
    console.log('Wrong dear, Keep going')
     count = count-1;
      console.log("your score " +count)
      console.log("correct answer-> " +answer)
    //console.log("***********")
  }
  //console.log(count)
  console.log("***********")
  }
  //console.log("s")
  
play("MY Home town name? ", "guna");
play("I am working at which company? " ,"infosys")
play("My college Name?  " , "mits")
play("From which Branch i graduated? ", "civil")
play("what is my age?", 23)
console.log("YAH!!! YOU SCORED -> " + count)
console.log("HIGH SCORE")
console.log("Ambika : 5 " )
console.log("Aman : 4")


  

 