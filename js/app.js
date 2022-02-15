
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

// ? search
// probably to be broken down into even more functions
// if something got found, end game, display msg
// if nothing found, display msg 

// ! use SOME or every array iterator to check if there is something in player/treasure array

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

let player, treasure, win, lose, board

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
  null, null, null, null] // try having only < two elements in board at any given time
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
    // if (tile === -1) {
    //   tiles[idx].textContent = "🍎"
    // }
  })
}

function handleClick(evt){
  // evt.preventDefault()
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
  // newSnake()
  validateMove()
  removeSearch()
  render()
  console.log(board)
} 

function validateMove(evt) {
  
}


// ? search
// probably to be broken down into even more functions
// if something got found, end game, display msg
// if nothing found, display msg 

function search(evt){
  if (player === treasure){
    console.log("you win :) ")
  } else if (player !== treasure){
    console.log("keep looking :( ")
  }
  console.log(player)
  console.log(treasure)
  console.log("search btn works")
}

function removeSearch(){
  let badgeInt = parseInt(badgeString.textContent) 
  if (handleClick && badgeInt !== 0){  
  badgeInt = badgeInt - 1
  badgeString.textContent = badgeInt
  }
}

function hideTreasure(evt){
  const random = Math.floor(Math.random() * 15 - 0) + 0;
  tiles[random].textContent = "🍎" // todo: hide with .hidden later
  board[random] = -1 
  treasure = random
}

function reset(){
  console.log("reset btn works")
}
