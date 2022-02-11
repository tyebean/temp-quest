// // todo add variables
//------------
// //add board array
// //add player
// //treasure
// //add win
// //add lose
// // add board
// // todo add cached elements
//-------------- 
// // tiles
// // snake emoji 
// // apple emoji
// todo  note: instruction message (click to enter forest. nothing found. you're warm. you're warmer. you're hot.)

// // search button
// // reset button
// // todo add event listeners
//--------------
// // movement click evt listner (calling a movement function)
// // button evt lisners
//todo add functions
//--------------

// // init()
// // set board array to 16 nulls
// // win = null
//// lose = null
////render()

// render()
// ??? figure out what goes in here
// basically everything that is rendered to the board upon init and upon movement
//we call functions in here
//change instruction messages in here too

// handleMovementCLick()
// logic time
// if the player does not share an index with the movement board array -> let the player move anywhere
//else 
//if the player shares an index with the board, allow the player to move the indexs associated with the player's current position and disable the other options. 
//searchSpells()
//render()

//todo searchSpells()
//if there is a movement click, reduce the amount of searches left 

//todo hideTreasure
//math.random the apple emoji

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

//todo add functions to these
tiles.forEach(tile => tile.addEventListener('click', handleMovement)) 
//btnSearch.addEventListener('click', functionName)
// btnReset.addEventListener('click', functionName)

/*-------------------------------- Functions --------------------------------*/

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
}
init()

function render(){
  // todo  note: instruction message. IF STATEMENT: if amount of clicks is greater than 1, change this msg. (click to enter forest. nothing found. you're warm. you're warmer. you're hot.)
  console.log('render runs')
}

// handleMovementCLick()
// logic time
// if the player does not share an index with the movement board array -> let the player move anywhere
//else 
//if the player shares an index with the board, allow the player to move only to the indexs associated with the player's current position.
//searchSpells()
//render()


//handleclick
//if there's a click, place a snake there
//validMove
//if there is no snake
//move anywhere
//if the snake is at [index]
//can only move certain spaces

function handleMovement(evt){
  console.log("handle click/movement runs", evt.target

  }





//todo searchSpells()
//if there is a movement click, reduce the amount of searches left 

//todo hideTreasure
//math.random the apple emoji




