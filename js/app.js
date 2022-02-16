
/*---------------------------- Constants ------------------------------------*/

const coords = [
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

/*---------------------------- Variables (state) ----------------------------*/

let player, treasure, board

/*------------------------ Cached Element References ------------------------*/

const tiles = document.querySelectorAll('.tile') 
const message = document.querySelector('#instruction-message')
const btnSearch = document.querySelector('.btn-search')
const btnReset = document.querySelector('.btn-reset') 
let badgeString = document.querySelector('.badge')  

/*----------------------------- Event Listeners -----------------------------*/

tiles.forEach(tile => tile.addEventListener('click', handleClick)) 
btnSearch.addEventListener('click', search)
btnReset.addEventListener('click', reset)

/*-------------------------------- Functions --------------------------------*/

init()
function init(){
  board = 
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
  board.forEach((tile, idx) => {
    if (tile === 1) {
      tiles[idx].textContent = "🐍"
    }
    if (tile === null) {
      tiles[idx].textContent = ""
    }
  })
}

function handleClick(evt){
  evt.preventDefault()
  const idx = evt.target.id.replace("tile-", "")
  const idxInt = parseInt(idx)
  if (board[idxInt] !== null && board[idxInt] !== -1){
    return
  }
  if (board.includes(1)){
    let num = board.indexOf(1)
    board.splice(num, 1, null)
  }
  board[idxInt] = 1
  player = idxInt
  givePlrCoords(player)
  giveTrsCoords(treasure)
  validateMove()
  render()
}

// * validateMove()
// location = player (a coordnate)
// destination = iteration of the coords  
  // todo if board does not include 1 {valid move, all tiles glow} 
  // if (location +4 === desintation || location -4 === destination)
    // {tile border glow} to indicate valid move
      //else
     // {can't move to other spaces}
  //if (location -1 === destination || location +1 === destination)
   //{tile border glow} to indicate valid move
     //{else}
     //{can't move to other spaces}

// todo edge case example
// if location === [0,0] //top left corner
//destination === [0,1], [1,0]
//if location === [0,3] //top right corner
//destinatio === [0,2], [1,3]
//if location === [3,0] // bot left corner
//destination === [2,0], [3,1]
//if location === [3,3] // bot right
//destination === [2,3], [3,2]

// displayValidMove()
// function displayValidMove() {
//   tiles.forEach((tile) => {
//     if (board.includes(1) === false){
//       tiles[0].style.backgroundColor = "grey";
//     }
//   })
// }


// console.log(board.includes(1));
// console.log(board);
// if (board.includes(1) === false) {
//   tiles[0].style.backgroundColor = "grey";
// } else if (board.includes(1) === true) {
//   tiles[1].style.backgroundColor = "red"
// }


// * if the board does not contain player, you can move anywhere
// * else, if the board contains player, start using validateMoves()
for (let i = 0; i < board.length; i++){
if (board.includes(1) === false) {
  tiles[i].style.backgroundColor = "grey";
  }
}

function validateMove() {
  for (let i = 0; i < board.length; i++){
    if (board.includes(1) === true) {
      tiles[i].style.backgroundColor = "rgba(255, 255, 255, 0)";
      console.log('valid move');
      }
    }
  const location = player
  console.log(`player is located at ${location}`)
  for (let i = 0; i < coords.length; i++){
    let destination = coords[i]
    console.log(destination) 
    if (location +4 === destination || location -4 === destination && location +1 === destination || location -1 === destination){
      console.log("valid move")
    } else {
      console.log("invalid/edge case moves")
    }
  }
}

function givePlrCoords (plr) { 
  player = coords[plr]
}

function giveTrsCoords(trs) {
  trs = coords[trs]
}

function search(){
  if (player === treasure){
    message.textContent = "You found the treasure!"
  } else if (player !== treasure){
    message.textContent = "Keep searching!"
  } else if (player !== treasure && badgeString.textContent === "0"){ // ! doesn't work
    message.textContent = "You lost."
  }
  removeSearch()
}

function removeSearch(){
  let badgeInt = parseInt(badgeString.textContent) 
  if (search && badgeInt !== 0){  
  badgeInt = badgeInt - 1
  badgeString.textContent = badgeInt
  }
}

function hideTreasure() {
  const random = Math.floor(Math.random() * 15 - 0) + 0;
  tiles[random].textContent.hidden = "🍎"
  board[random] = -1 
  treasure = random
  //console.log(`treasure is located at ${treasure}`)
}

//todo after validateMoves()
// function setColors(){
//   const red = tiles[0].style.backgroundColor = "#B97A95";
//   const yellow = tiles[1].style.backgroundColor = "#F5E8C7";
//   const green = tiles[2].style.backgroundColor = "#B5CDA3";
// }
// setColors()

//todo logic for setColors
//use coords
//set treasure to a coord (apple location) 
// green = + or - 4



function reset(){
  console.log("reset btn works")
}