# Complex Reaction Time
Scores a user's reaction time with randomized threshold markings; uses Javascript and p5.

## Concept
It has been statistically shown that complex reaction time (inspection time) has a moderate correlation with IQ (.5) where simple reaction time has a smaller correlation with IQ (.3)  This small applet is designed to randomly draw circles on the screen with random sizes and colors.  This could in theory emulate the inspection time metric mentioned above.  It comes with many easy-to-access variables to adjust the scoring mechanisms, and milestone thresholds.
#### Note: Resolving this 'score' to an IQ (with a certain degree of inaccuracy) would require a unbiased sample size of individuals to obtain relative percentile scores.  

## Dependencies / Installation
Requires p5 and p5.dom to run.  Can be run using a localhost server, or placed on a webpage with the necessary `<script>` tags included.

## Branches
### Main Branch
This branch contains the original random-dot reaction-time score project.
![](Master-CRT.jpg?raw=true)

### Four-Options Branch
This branch contains a different kind of complex reaction time.  This project involves displaying four fixed randomized-color circles, whose goal is to click the circle with the correct color corresponding to the color spelled-out in the text.  There are often multiple correct choices, and the text-color of the text (which indicates which color to choose) is also randomized and often does not correspond to the correct choice.  
![](Four-Choice-CRT.jpg?raw=true)

## Configuration Variables
Variable | Description
-------- | ------------
progressiveWeights | Point multiplier at each milestone index
milestones | The count at which the game transitions milestone indecies
colorPool | How the various colors are added to the color pool
numColors | The number of different colors the circles could be
maxSizes | The maximum width the circles can have at any milestone index
minSizes | The minimum width the circles can have at any milestone index
singularityDistance | The threshold that maps directly to maxDistScore
minDistScore | The smallest distance score value
maxDistScore | The largest distance score value
minSpeedScore | The max time bonus
maxSpeedScore | The max time penalty
factorWeights | The score multiplier; the weights by which the score is calculated
bg | Background color, can take a one number between 0 and 255, or three
fastRT | Really fast reaction time for normalizing time-score-decay (milliseconds)
slowRT | Really slow reaction time for normalizing time-score-decay (milliseconds)
globalWidth | The width of the canvas
globalHeight | The height of the canvas
