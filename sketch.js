//-----------Configurables------------
const progressiveWeights = [1,1.5,2]; //Point multiplier at each milestone index
const milestones = [50,100,150]; //The count at which the game transitions milestone indecies
const colorPool = [[135,216,246],[255,0,255]]; //How the various colors are added to the color pool
const numColors = 100; //The number of different colors the circles *could* be
const maxSizes = [75,60,45]; //The maximum width the circles can have at any milestone index
const minSizes = [15,10,5]; //The minimum width the circles can have at any milestone index.
const singularityDistance = .3; //The threshold that maps directly to maxDistScore
const minDistScore = -30; //The smallest distance score value
const maxDistScore = 30; //The largest distance score value
const minSpeedScore = -5; //The smallest distance score value - also determines max time bonus (/2)
const maxSpeedScore = 15; //The largest distance score value - also determines max time penalty (/2)
const factorWeights = [1,1]; //The score multiplier; the weights by which the score is calculated: [distance,time];
const bg = 231; //Background color, can take a single number between 0 and 255, or three.
const fastRT = 100; //Really fast reaction time for means of normalizing time-score-decay in milliseconds
const slowRT = 1500; //Really slow reaction time ...
const globalWidth = 800; //The width of the canvas
const globalHeight = 450; //The height of the canvas
//------------------------------------
//---------Randomize Colors----------
for(let c = 0;c<=numColors;c++){
  colorPool.push([rnd(0,255),rnd(0,255),rnd(0,255)]);
}
//------------------------------------
let currentPoint;
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
      let col = random(colorPool);
      fill(col[0],col[1],col[2]);
      ellipse(x,y,w,h);
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
  let x = random(size/2,globalWidth-size/2);
  let y = random(size/2,globalHeight-size/2);
  currentPoint = new Point(x,y,size,size,true);
}
function mousePressed() {
  if(!finished && mouseY<globalHeight){
    const currentTime = new Date();
    const scoreDecay = map(currentTime.getTime() - frameCountInst.getTime(),fastRT,slowRT,minSpeedScore,maxSpeedScore);
    let click = new Point(mouseX,mouseY);
    //console.log(`Distance: ${(Point.distance(click,currentPoint) <= currentPoint.width/2) ? 1:(((Point.distance(click,currentPoint)-currentPoint.width/2)<1) ? 1:(Point.distance(click,currentPoint)-currentPoint.width/2))}`);
    //console.log(`Score Decay: ${scoreDecay}`);
    let score = (map((1/Math.pow((Point.distance(click,currentPoint) <= currentPoint.width/2) ? 1:(((Point.distance(click,currentPoint)-currentPoint.width/2)<1) ? 1:(Point.distance(click,currentPoint)-currentPoint.width/2)),1)),0,1,minDistScore,maxDistScore)) * factorWeights[0] - scoreDecay * factorWeights[1];
    //console.log(`Relevant Score: ${score}`);
    scores[currentMilestoneIndex].push((score * currentWeight));
    currentPoint = null;
    clear();
    background(bg);
    let size = random(minSizes[currentMilestoneIndex],maxSizes[currentMilestoneIndex]);
    let x = random(size/2,width-size/2);
    let y = random(size/2,height-size/2);
    currentPoint = new Point(x,y,size,size,true);
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
    let x = random(size/2,globalWidth-size/2);
    let y = random(size/2,globalHeight-size/2);
    currentPoint = new Point(x,y,size,size,true);
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
    text(`Phase ${currentMilestoneIndex + 1}, ${count + 1}`,50,50);
  }else{
    for(let c=0;c<progressiveWeights.length;c++){
      total.push(average(scores[c]));
    }
    clear();
    background(bg);
    textSize(64);
    fill(0);
    text(`Final Score: ${average(total)}`,width/8,height/4,width,height);
  }
}
