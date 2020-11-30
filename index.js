var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.bold.bgCyanBright.black(' Do You Know Shivam ? '))

var userName = readlineSync.question(chalk.greenBright("\nWhat's your name? \nPress Enter after writing your name: "));

console.log(chalk`\n{yellowBright Welcome {bold.bgWhiteBright.black  ${userName} } to {bold.bgCyanBright.black  Do You Know Shivam? }}`)
var score = 0;

function printScore(){
  console.log(chalk.hex('#f7a1c4')("\nCurrent score: " + score));
  console.log(chalk.blue("-----------------------------------------"))
}

function play(question, answer) {
  var userAnswer = readlineSync.keyIn(chalk.hex('#E4572E')(question));

  if(userAnswer === answer){
    console.log("\n Correct answer :)")
    score = score + 1;
    printScore();
  } else{
    console.log("\n Wrong :(");
    printScore();
  }
}

var highScore = [
  {
    name: "Shivam",
    score: 10
  },
  {
    name: "Sheetal",
    score: 9
  },
  {
    name: "YD",
    score: 8
  }
]

var questions = [
  {
    question : `
  Which combination best desribes the city I come from and my college?  
  (a) Tier 2, Tier 3
  (b) Tier 3, No Tier
  (c) Tier 3, Even Tier is a big word for it lol
  (d) Tier 1, Tier 1 (Only If) \n
  Your answer: `,
    answer: "c"
  },
  {
    question: `
  What is my spirit animal?
  (a) Hippopotamus
  (b) Panda
  (c) Lion
  (d) Dinosaur \n
  Your answer: `,
    answer: "b"
  },
  {
    question: `
  What kind of music do I like to listen?
  (a) Arijit Singh ke Gaane
  (b) Gharwalo ke taane
  (c) Rap music
  (d) Voices in my head \n
  Your answer: `,
    answer: "c"
  },
  {
    question: `
  Which programming language do I love the most? 
  (a) Java
  (b) Python
  (c) JavaScript
  (d) PHP (only here for sarcasm, don't select) \n
  Your answer: `,
    answer: "c"
  },
  {
    question: `
  What animal I would love to spend time with? 
  (a) Cats
  (b) Dogs
  (c) Snakes (or maybe Humans)
  (d) None \n
  Your answer: `,
    answer: "b"
  },
  {
    question: `
  I have a pet dog by which name?
  (a) Preeti
  (b) Gabbar
  (c) Simba
  (d) Kaalu \n
  Your answer: `,
    answer: "c"
  },
  {
    question: `
  My relationship status? 
  (a) You are a good question. But your question hurt me
  (b) IAS banne ke liye dhokha khaaye hue hai
  (c) Haq se Single ( lol Haq se )
  (d) Roz naya crush. \n
  Your answer: `,
    answer: "c"
  },
  {
    question: `
  My childhood ambition? 
  (a) Scientist
  (b) Astronaut
  (c) Mai to bas Pati banna chahta hu
  (d) Doctor \n
  Your answer: `,
    answer: "a"
  },
  {
    question: `
  Other than Coding, Family and My Imaginary GF what do I love most?
  (a) Reading
  (b) Adventure
  (c) Memes, Memes and More Memes
  (d) Myself (Narcissistic XD) \n
  Your answer: `,
    answer: "c"
  },
  {
    question: `
  If Money was not too important what would I be doing right now? 
  (a) Farming in a village
  (b) Teaching Kids
  (c) Sanyas leke sidha Himalaya
  (d) Bike Riding \n
  Your answer: `,
    answer: "b"
  },
]

for(var i = 0; i < questions.length; i++){
  if(i === 0){
    if(readlineSync.keyInYN(chalk.greenBright('\nStart the game? '))){
      play(questions[i].question, questions[i].answer);
    } else{
      console.log("\nQuitting without playing is not a good habit my friend.")
      break;
    }
  }
 if(i>0){
    if(readlineSync.keyInYN(chalk.greenBright('Next question? '))){
      play(questions[i].question, questions[i].answer);
    } else{
      break;
    }
 }
}

console.log("Your Final Score: "+ score);

if(score >=4){
  var f = 0;

  for(var i = 0 ; i < highScore.length;){
    if(score >= highScore[i].score){
      f = 1;
      break;
    }else{
      i++
    }
  }

  if(f === 1){
    console.log(chalk.redBright(`\n\n Hurray you have beaten or equaled a score on the "The Leaderboard" !!! \n Send me a screenshot of your score and your name shall be included in "The Wall of Fame" :) `))
  } else{
    console.log(chalk.redBright(`\n\nWell played. \nUnfortunately you did not make it to the Leaderboard, \nThis will not affect our friendship, \nInfact let's grab a cup of coffee sometime and start knowing each other better\n(Obviously after Covid) 😅 `))
  }
}

function showLeaderBoard(highScore){
  console.log(chalk.bgCyanBright.black.bold('\n  LEADERBOARD  '))
  for(var i = 0; i < highScore.length; i++){
    console.log(chalk`\n{bold.bgWhiteBright.black   ${highScore[i].name} : ${highScore[i].score}  }`)
  }
}

if(readlineSync.keyInYN(chalk.greenBright('\nView LeaderBoard? '))){
  showLeaderBoard(highScore)
} 