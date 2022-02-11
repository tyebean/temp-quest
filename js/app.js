// todo add variables
//------------

// //add board array
// //add player
// //treasure
// //add win
// //add lose
// // add board

//todo add cached elements
//--------------
//tiles
//snake emoji 
//apple emoji
//instruction message (click to enter forest. nothing found. you're warm. you're warmer. you're hot.)
//search button
//reset button

//todo add event listeners
//--------------
//movement click evt listner (calling a movement function)
//button evt lisners

//todo add functions
//--------------
//init()
//set board array to 16 nulls
//set plr to hidden = true
//win = null
//lose = null
//hide reset button
//render()

// todo render()
// ???

//todo handleMovementCLick()
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



/*---------------------------- Variables (state) ----------------------------*/

let board, player, treasure, win, lose


/*------------------------ Cached Element References ------------------------*/

// // tiles
// // snake emoji 
// // apple emoji
//todo: instruction message (click to enter forest. nothing found. you're warm. you're warmer. you're hot.)
//search button
//reset button

const tiles = document.querySelectorAll('.tile')
const snakeMoji = document.querySelector('#snake-emoji')
const appleMoji = document.querySelector('#apple-emoji')
const instructionMsg = document.querySelector('.instruction-message')
const searchBtn = document.querySelector('.btn-primary')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

