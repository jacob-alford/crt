//-----------Configurables------------
const progressiveWeights = [1,1.5,2]; //Point multiplier at each milestone index
const milestones = [25,50,75]; //The count at which the game transitions milestone indecies
const colorPool = [[255,0,0],[0,255,0],[0,0,255],[255,255,0],[255,0,255],[0,255,255]]; //How the various colors are added to the color pool
const colorPoolNames = {
  "255,0,0":"red",
  "0,255,0":"green",
  "0,0,255":"blue",
  "255,255,0":"yellow",
  "255,0,255":"magenta",
  "0,255,255":"cyan"
}
const maxSizes = [75,75,75]; //The maximum width the circles can have at any milestone index
const minSizes = [75,75,75]; //The minimum width the circles can have at any milestone index.
const minScore = -30; //The smallest score one can get (slow + inaccurate)
const maxScore = 30; //The largest score one can get (fast + accurate)
const minSpeedScore = -5; //Max time bonus
const maxSpeedScore = 15; //Max time penalty
const factorWeights = [100,2]; //The score multiplier; the weights by which the score is calculated: [distance,time];
const bg = 0; //Background color, can take a single number between 0 and 255, or three.
const fastRT = 200; //Really fast reaction time for means of normalizing time-score-decay in milliseconds
const slowRT = 2000; //Really slow reaction time ...
const globalWidth = 800; //The width of the canvas
const globalHeight = 450; //The height of the canvas
//------------------------------------
let currentPoint;
let correctChoice = {};
let totalPoints = 0;
let frameCountInst;
let scores = [];
let currentWeight = progressiveWeights[0];
let currentMilestoneIndex = 0;
let count = 0;
let finished = false;
let resetButton;
let hasReset = false;
for(let c=0;c<milestones.length;c++){
  scores.push([]);
}
function average(array){
  if(!isNaN(array[0])){
      return sum(array)/(array.length);
  }else{
    return 0;
  }
}
function sum(array){
  let total = 0;
  for(let i=0;i<array.length;i++){
    total += array[i];
  }
  return total;
}
function percError(a,b){
  return (Math.abs(a-b)/b) * 100;
}
function redo(){
  currentWeight = progressiveWeights[0];
  currentMilestoneIndex = 0;
  count = 0;
  finished = false;
  hasReset = true;
}
function rnd(min,max){
	return Math.floor(Math.random()*(max-min+1))+min;
}
class Point{
  constructor(x,y,w=55,h=55,gen=false){
    totalPoints++;
    if(gen){
      frameCountInst = new Date();
      let col = [];
      let matMul = [[0,1,0,1],[0,0,1,1]];
      let choosenCirc = rnd(0,3);
      correctChoice.points = [];
      for(let c=0;c<4;c++){
        let color = random(colorPool);
        let choosenColor;
        if(c == choosenCirc){
          correctChoice.color = color;
          fill(random(colorPool));
          textSize(45);
          text(colorPoolNames[color.toString()],50,50);
          choosenColor = color;
        }
        let xPos = x*matMul[0][c]*(5) + (globalWidth/2.3);
        let yPos = y*matMul[1][c]*(5) + (globalHeight/3);
        col.push(color);
        fill(col[c][0],col[c][1],col[c][2]);
        ellipse(xPos,yPos,w,h);
        correctChoice.points.push({x:xPos,y:yPos,thisColor:color});
      }
      this.width = w;
      this.height = h;
    }
    this.x = x;
    this.y = y;
  }
  static distance(a,b){
    const delta_x = a.x-b.x;
    const delta_y = a.y-b.y;
    return Math.hypot(delta_x, delta_y);
  }
}
function setup() {
  frameRate(30);
  resetButton = createButton("Reset");
  resetButton.position(windowWidth - 100,windowHeight - 100);
  resetButton.mousePressed(redo);
	createCanvas(globalWidth, globalHeight);
  background(bg);
  textSize(16);
  let size = random(minSizes[0],maxSizes[0]);
  currentPoint = new Point(25,25,size,size,true);
}
function mousePressed() {
  if(!finished && mouseY<globalHeight){
    const currentTime = new Date();
    const scoreDecay = map(currentTime.getTime() - frameCountInst.getTime(),fastRT,slowRT,minSpeedScore,maxSpeedScore);
    let click = new Point(mouseX,mouseY);
    let possibilities = [];
    let score = 0;
    for(let c=0;c<4;c++){
      if(correctChoice.points[c].thisColor == correctChoice.color){
        possibilities[c] = new Point(correctChoice.points[c].x,correctChoice.points[c].y);
        if(Point.distance(possibilities[c],click)<=(currentPoint.width/2)){
          score++;
        }
      }
    }
    let currentScore = score * factorWeights[0] - scoreDecay * factorWeights[1];
    //console.log(currentScore);
    //let score = (map((1/Math.pow((Point.distance(click,currentPoint) <= currentPoint.width/2) ? 1:(((Point.distance(click,currentPoint)-currentPoint.width/2)<1) ? 1:(Point.distance(click,currentPoint)-currentPoint.width/2)),1)),0,1,minDistScore,maxDistScore)) * factorWeights[0] - scoreDecay * factorWeights[1];
    scores[currentMilestoneIndex].push((map(currentScore,-15,105,minScore,maxScore) * currentWeight));
    currentPoint = null;
    clear();
    background(bg);
    let size = random(minSizes[currentMilestoneIndex],maxSizes[currentMilestoneIndex]);
    currentPoint = new Point(25,25,size,size,true);
    count++;
  }
  return false;
}
function draw(){
  let total = [];
  currentFrameCount = frameCount;
  if(count == 0 && hasReset){
    clear();
    background(bg);
    textSize(16);
    scores = [];
    for(let c=0;c<milestones.length;c++){
      scores.push([]);
    }
    let size = random(minSizes[0],maxSizes[0]);
    currentPoint = new Point(25,25,size,size,true);
    hasReset = false;
  }
  if(currentMilestoneIndex>=milestones.length){
    finished = true;
  }
  if(!finished){
    if(count == milestones[currentMilestoneIndex]){
      currentMilestoneIndex++;
    }
    fill(0);
    //text(`Phase ${currentMilestoneIndex + 1}, ${count + 1}`,50,50);
  }else{
    for(let c=0;c<progressiveWeights.length;c++){
      total.push(average(scores[c]));
    }
    clear();
    background(bg);
    textSize(64);
    fill(255);
    text(`Final Score: ${average(total)}`,width/8,height/4,width,height);
  }
}
