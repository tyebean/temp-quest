  //if there is a movement click, reduce the amount of searches left


/*---------------------------- Constants ------------------------------------*/
// const moveArray = [
//   [2, 5],
//   [3, 8],
//   [9, 14],
//   [15,12],
//   [8, 11, 16],
//   [3,10, 15],
//   [14, 11, 16],
//   [4, 7, 12],
//   [5, 10, 3],
//   [1, 6, 3],
//   [2, 7, 4],
//   [1, 6, 9],
//   [2, 5, 7, 10],
//   [3, 8, 11, 6],
//   [6, 9, 11, 14],
//   [7, 10, 12, 15]
// ] 

const moves = [
  [0, 0],
  [0, 1],
  [0, 2],
  [0, 3],
  [1, 0],
  [1, 1],
  [1, 2],
  [1, 3],
  [2, 0],
  [2, 1],
  [2, 2],
  [2, 3],
  [3, 0],
  [3, 1],
  [3, 2],
  [3, 3]
]

// for (let i = 0; i < moveArray.length; i++){
//   const a = moveArray[i][0]
//   const b = moveArray[i][1]
//   const c = moveArray[i][2]
//   const d = moveArray[i][3]
//   console.log(a, b, c, d)
//   console.log(moveArray[a])
// }

/*---------------------------- Variables (state) ----------------------------*/

let player, treasure, win, lose

/*------------------------ Cached Element References ------------------------*/

const tiles = document.querySelectorAll('.tile') 
// const snakeMoji = document.querySelector('#snake-emoji')
// const appleMoji = document.querySelector('#apple-emoji')
const message = document.querySelector('#instruction-message')
const btnSearch = document.querySelector('.btn-search')
const btnReset = document.querySelector('.btn-reset') 
let badgeNum = document.querySelector('.badge')  

/*----------------------------- Event Listeners -----------------------------*/

tiles.forEach(tile => tile.addEventListener('click', handleMovement)) 
btnSearch.addEventListener('click', search)
btnReset.addEventListener('click', reset)

/*-------------------------------- Functions --------------------------------*/

init()
function init(){
  console.log("init runs");
  player = 
  [null, null, null, null,
  null, null, null, null,
  null, null, null, null,
  null, null, null, null]
  win = null
  lose = null
  message.textContent = "Click an Area to Search the Forest" 
  render()
  hideTreasure()
}

function render(){
  // todo  note: instruction message. IF STATEMENT: if amount of clicks is greater than 1, change this msg. (click to enter forest. nothing found. you're warm. you're warmer. you're hot.)
  console.log('render runs')
}

// todo when a user has clicked, place the index of the position into the correct place in the player array. possibly using splice? 
// todo style it approprietly/centered in the div
function handleMovement(evt){
  const idx = evt.target.id.replace("tile-", "")
  console.log(idx)
  tiles[idx].innerHTML = "🐍" 
  
  console.log("clicking works")
  validateMove()
  removeSearch()
}

// todo validateMove()

// ? if first turn, move anywhere
// first: for loop - within loop: if badgeNum = 5 {
//   you can click anywhere
// } else if {
  // call a function() dealing with x and y's
//}
// ? find out where they can click 

// ! try think of moving in terms of X and Y. 
// ! the player can move either -x or x 
// ! or y or -y 

function validateMove() {
  console.log("validating moves runs")
  // const idx = evt.target.id.replace("tile-", "")
  for (let i = 0; i < moveArray.length; i++){
  if (player[i] !== null){
    console.log("don't move anymore")
    }
  }
}

// ? search
// probably to be broken down into even more functions
// if something got found, end game, display msg
// if nothing found, display msg 
function search(){
  if (player[idx] === apple[idx]){
    return
  } else if (player[idx] !== apple[idx]) {
    //nothing found msg
  }
  console.log("search btn works")
}

function removeSearch(){
  let badgeInt = parseInt(badgeNum.textContent) 
  if (handleMovement && badgeInt !== 0){  
  badgeInt = badgeInt - 1
  badgeNum.textContent = badgeInt
  }
}

function hideTreasure(){
  const random = Math.floor(Math.random() * 15 - 0) + 0;
  tiles[random].textContent = "🍎"
  console.log("hiding trasure", random)
}

function reset(){
  console.log("reset btn works")
}