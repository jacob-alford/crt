// --- Symbol Difficulty Storage ---
const diff1_1 = [ // Shapes 1
  "&#9728;","&#9729;","&#9730;", // sun, cloud, umbrella
  "&#9820;","&#9821;","&#9822;", // rook, bishop, knight
  "&clubs;","&hearts;","&diams;" // clubs, hearts, diamonds
];
const diff1_2 = [ // Shapes 2
  "&#9744;","&#9745;","&#9746;", // Empty box, check box, x box
  "&starf;","&#9752;","&#9753;", // Star, Shamrock, Flower Bullet
  "&#9992;","&#9993;","&#9996;" // Airplane, Mail, Peace Sign
];
const diff2_1 = [ // Symbols
  "&#9760;","&#9762;","&#9763;", // Skull xBones, Radioactive, Biohazard
  "&#9767;","&#9765;","&#9768;", // Chi Rho, Ankh, Cross of Lorraine
  "&#9770;","&#9774;","&#9775;" // Star and Crescent, Peace Symbol, Yin Yang
];
const diff2_2 = [ // Digrams/Trigrams
  "&#9868;","&#9869;","&#9870;", // Digram 0, 1, 2
  "&#9777;","&#9778;","&#9780;", // Trigram 1, 2, 3
  "&#9779;","&#9781;","&#9782;" // Trigram 4, 5, 6
];
const diff3_1 = [ // Homogeneous stars
  "&#10026;","&#10027;","&#10025;", // w/in circle, circle in, outline (5-sided)
  "&#10033;","&#10035;","&#10034;", // Heavy, light, hollow (6-sided)
  "&#10039;","&#10041;","&#10042;" // Eight pt, 12 pt, 16pt
];
const diff3_2 = [ // Glyphs
  "&Rscr;","&bernou;","&Mscr;", // R script, B script, M script
  "&alefsym;","&beth;","&gimel;", // Aleph, Bet, gimel
  "&#8522;","&#8468;","&#8452;" // Property Line, LB Bar, Center Line
];
const diffArr = [diff1_1,diff1_2,diff2_1,diff2_2,diff3_1,diff3_2];
// --- Classes ---
let plays = [];
class game{
  constructor(acc,time,diff){
    this.accuracy = acc;
    this.time = time;
    this.difficulty = diff;
  }
}
// --- Globals ---
const totalRounds = 50;
const difficultyResolve = [null,"Easy","Medium","Hard"];
let currentDifficulty = 1;
let currentSymbols = shuffle(diff1_1);
let currentlyPlaying = false;
let respCounter = 1;
let timeStart;
let timeEnd;
let correctAnswer = 1;
let responses = [];
// --- Support ---
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
// --- Game State Displays ---
const displaySymbols = () => {
  let string = "";
    let rCheck = Math.random();
    let wrkArr;
    if(rCheck<.5){
      if(currentDifficulty == 1) wrkArr = shuffle(diffArr[0]);
      else if(currentDifficulty == 2) wrkArr = shuffle(diffArr[2]);
      else if(currentDifficulty == 3) wrkArr = shuffle(diffArr[4]);
    }else{
      if(currentDifficulty == 1) wrkArr = shuffle(diffArr[1]);
      else if(currentDifficulty == 2) wrkArr = shuffle(diffArr[3]);
      else if(currentDifficulty == 3) wrkArr = shuffle(diffArr[5]);
    }
    for(let i=0;i<9;i++){
      let num = 100/9;
      string += `<td style="width:${num}%;">${wrkArr[i]}</td>`;
    }
    currentSymbols = wrkArr;
    $("#symDisplay").html(string);
}
const setDifficulty = diff => {
  reset();
  currentDifficulty = diff;
  if(diff == 1) $("#difficultyDisplay").html(`<strong>Current Difficulty:</strong> <span class="badge badge-success">Easy</span>`);
  else if(diff == 2) $("#difficultyDisplay").html(`<strong>Current Difficulty:</strong> <span class="badge badge-warning">Medium</span>`);
  else if(diff == 3) $("#difficultyDisplay").html(`<strong>Current Difficulty:</strong> <span class="badge badge-danger">Hard</span>`);
  displaySymbols();
}
const displaySymbol = () => {
  let randIndex = Math.floor(Math.random()*9);
  correctAnswer = randIndex%3+1;
  let diff = "";
  if(currentDifficulty == 1) diff = "success";
  else if(currentDifficulty == 2) diff = "warning";
  else if(currentDifficulty == 3) diff = "danger";
  $("#gameDisplay").html(`<div class="card border border-${diff} mx-auto" style="width: 18rem;">
    <div class="card-header">
      Current Symbol:
    </div>
    <div class="card-body">
      <h1 class="card-title display-1">${currentSymbols[randIndex]}</h1>
    </div>
    <div class="card-footer text-muted">
      Response: ${respCounter}
    </div>
  </div>`);
  respCounter++;
}
const reset = () => {
  currentlyPlaying = false;
  respCounter = 1;
  correctAnswer = 1;
  responses = [];
  $("#gameDisplay").html(`<div class="card border border-primary mx-auto" style="width: 18rem;">
    <div class="card-header">
      Symbols will be displayed here:
    </div>
    <div class="card-body">
    </div>
    <div class="card-footer text-muted">
      Not Currently Playing
    </div>
  </div>`);
}
const submit = guess => {
  if(respCounter == totalRounds){
    if(guess == correctAnswer) responses.push(1);
    else responses.push(0);
    timeEnd = new Date();
    displayScore();
  }else{
    if(guess == correctAnswer) responses.push(1);
    else responses.push(0);
    displaySymbol();
  }
}
const play = () => {
  timeStart = new Date();
  currentlyPlaying = true;
  reset();
  $("#gameDisplay").html("");
  displaySymbol();
}
const displayScore = () => {
 let scoreVec = new Vector(responses);
 let time = (timeEnd.getTime() - timeStart.getTime())/1000;
 let accuracy = scoreVec.mean();
 let thisGame = new game(accuracy,time,currentDifficulty);
 plays.push(thisGame);
 $("#scoreDisplay").html("");
 plays.forEach((c,i) => {
   $("#scoreDisplay").prepend(`<div class="border-bottom p-3"><h1>Game ${i+1}:</h3>
   <h2><strong>Difficulty:</strong> ${difficultyResolve[c.difficulty]}</h2>
   <h2><strong>Accuracy:</strong> ${c.accuracy*100}%</h2>
   <h2><strong>Duration:</strong> ${c.time} seconds.</h2></div>`);
 });
 reset();
}
// --- Do ---
$(document).ready(function(){
  setDifficulty(1);
  $("#easyButton").click(function(){setDifficulty(1)});
  $("#medButton").click(function(){setDifficulty(2)});
  $("#hardButton").click(function(){setDifficulty(3)});
  $("button.gameStart").click(function(){play()});
  $("#resetButton").click(function(){reset()});
  $("#click1").click(function(){submit(1)});
  $("#click2").click(function(){submit(2)});
  $("#click3").click(function(){submit(3)});
  $(document).keypress(function(e){
    e.preventDefault();
    switch(e.originalEvent.key){
      case "1":
        submit(1);
        break;
      case "2":
        submit(2);
        break;
      case '3':
        submit(3);
        break;
    }
});
});
