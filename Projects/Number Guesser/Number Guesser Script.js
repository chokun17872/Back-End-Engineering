let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random()*10);

function compareGuesses(humanGuess,computerGuess,target){
  const humanDiff = getAbsoluteDistance(humanGuess,target);
  const computerDiff = getAbsoluteDistance(computerGuess,target);
  if(humanDiff <= computerDiff) return true;
  else return false;
}

function updateScore(winner){
  if(winner === 'human') humanScore++;
  else computerScore++;
};

function advanceRound(){
  currentRoundNumber++;
};

const getAbsoluteDistance = (guess,target) => Math.abs(target-guess);

