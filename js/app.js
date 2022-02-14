
// ? place apple/player in the correct places in their arrays - update player position in array with each click 
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
  console.log("init runs");
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
    if(tile === 1){
    tiles[idx].textContent = "🐍"
    }
  })
}

function handleClick(evt){
  const idx = evt.target.id.replace("tile-", "")
  if (board[idx] !== null){
    return
  }
  board[idx] = 1
  validateMove()
  removeSearch()
  render()
} 

function validateMove(evt) {
  
}

function search(){
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
  tiles[random].textContent = "🍎"
}

function reset(){
  console.log("reset btn works")
}