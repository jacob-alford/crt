# Complex Reaction Time
Scores a user's reaction time with randomized threshold markings; uses Javascript and p5.

## Concept
It has been statistically shown that complex reaction time (inspection time) has a moderate correlation with IQ (.5) where simple reaction time has a smaller correlation with IQ (.3)  This small applet is designed to randomly draw circles on the screen with random sizes and colors.  This could in theory emulate the inspection time metric mentioned above.  It comes with many easy-to-access variables to adjust the scoring mechanisms, and milestone thresholds.
#### Note: Resolving this 'score' to an IQ (with a certain degree of inaccuracy) would require a unbiased sample size of individuals to obtain relative percentile scores.  

## Dependencies / Installation
1. Download required [p5 Libraries](https://p5js.org/download) in a folder titled 'libraries.'
1. Place in folder alongside files from this repository.
1. Run a localhost server that points to this folder.
   1. This could be atom with the 'atom-live-server' package installed.

## Configuration Variables
Variable | Description
-------- | ------------
progressiveWeights | Point multiplier at each milestone index
milestones | The count at which the game transitions milestone indecies
colorPool | How the various colors are added to the color pool
numColors | The number of different colors the circles could be
maxSizes | The maximum width the circles can have at any milestone index.
minSizes | The minimum width the circles can have at any milestone index.
singularityDistance | The threshold that maps directly to maxDistScore
minDistScore | The smallest distance score value
maxDistScore | The largest distance score value
minSpeedScore | The smallest distance score value - determines max time bonus
maxSpeedScore | The largest distance score value - determines max time penalty
factorWeights | The score multiplier; the weights by which the score is calculated
bg | Background color, can take a single number between 0 and 255, or three
fastRT | Really fast reaction time for means of normalizing time-score-decay (milliseconds)
slowRT | Really slow reaction time for means of normalizing time-score-decay (milliseconds)
globalWidth | The width of the canvas
globalHeight | The height of the canvas
