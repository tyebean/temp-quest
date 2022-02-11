/*---------------------------- Constants ------------------------------------*/
const moveArray = [
  [2, 5],
  [3, 8],
  [9, 14],
  [15, 12],
  [8, 11, 16],
  [3, 10, 15],
  [14, 11, 16],
  [4, 7, 12],
  [5, 10, 3],
  [1, 6, 3],
  [2, 7, 4],
  [1, 6, 9],
  [2, 5, 7, 10],
  [3, 8, 11, 6],
  [6, 9, 11, 14],
  [7, 10, 12, 15]
]
/*---------------------------- Variables (state) ----------------------------*/

let boardArray, player, treasure, win, lose

/*------------------------ Cached Element References ------------------------*/

const tiles = document.querySelectorAll('.tile') 
const snakeMoji = document.querySelector('#snake-emoji')
const appleMoji = document.querySelector('#apple-emoji')
const message = document.querySelector('#instruction-message')
const btnSearch = document.querySelector('.btn-search')
const btnReset = document.querySelector('.btn-reset') 
const badgeNum = document.querySelector('.badge')

/*----------------------------- Event Listeners -----------------------------*/

tiles.forEach(tile => tile.addEventListener('click', handleMovement)) 
btnSearch.addEventListener('click', search)
btnReset.addEventListener('click', reset)

/*-------------------------------- Functions --------------------------------*/
init()
function init(){
  player = 
  [null, null, null, null,
  null, null, null, null,
  null, null, null, null,
  null, null, null, null]
  win = null 
  lose = null
  console.log("init runs");
  message.textContent = "Click an Area to Search the Forest" 
  render()
  hideTreasure()
}

function render(){
  // todo  note: instruction message. IF STATEMENT: if amount of clicks is greater than 1, change this msg. (click to enter forest. nothing found. you're warm. you're warmer. you're hot.)
  console.log('render runs')
}

//handleclick
//if there's a click, place a snake there
//style it approprietly

function handleMovement(evt){
  console.log("handle click/movement runs", evt.target)
  const tileIdx = evt.target.id
  // tiles[tileIdx].textContent = "🐍"
  validateMove()
  removeSearch()
  }

//validMove()
//if there is no snake
//move anywhere
//if the snake is at [index]
//can only move certain spaces

function validateMove() {
  console.log("validating moves runs")
}

// ? search
// probably to be broken down into even more functions UGH lol
// flip shit
// if something got found, end game, display msg
// if nothing found, display msg 
function search(){
  console.log("search btn works")
}




function removeSearch(){
  //if there is a movement click, reduce the amount of searches left 
  console.log("taking away your searches!!")
}


function hideTreasure(){
  //if there is a movement click, reduce the amount of searches left 
  console.log("hiding trasure")
}





function reset(){
  console.log("reset btn works")
}
