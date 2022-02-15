//validateMove()
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
  validateMove()
  render()
} 

function validateMove(evt) {
  console.log("validating moves")
}

// ? search
// probably to be broken down into even more functions
// if something got found, end game, display msg
// if nothing found, display msg 
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

function hideTreasure(evt){
  const random = Math.floor(Math.random() * 15 - 0) + 0;
  tiles[random].textContent.hidden = "🍎"
  board[random] = -1 
  treasure = random
}
console.log(treasure)


function setColors(){
  const red = tiles[0].style.backgroundColor = "red";
  const yellow = tiles[1].style.backgroundColor = "yellow";
  const green = tiles[2].style.backgroundColor = "green";
}
setColors()

function reset(){
  console.log("reset btn works")
}