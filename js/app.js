
// todo - discuss with IA
// ? place apple/player in the correct places in their arrays - update player position in array with each click 
// ? discuss X and Y logic 

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

const board = [
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

let player, treasure, win, lose 

/*------------------------ Cached Element References ------------------------*/

const tiles = document.querySelectorAll('.tile') 
const message = document.querySelector('#instruction-message')
const btnSearch = document.querySelector('.btn-search')
const btnReset = document.querySelector('.btn-reset') 
let badgeString = document.querySelector('.badge')  

/*----------------------------- Event Listeners -----------------------------*/

tiles.forEach(tile => tile.addEventListener('click', handleMovement)) 
btnSearch.addEventListener('click', search)
btnReset.addEventListener('click', reset)

/*-------------------------------- Functions --------------------------------*/

init()
function init(){
  console.log("init runs");
  player = []
  treasure = []
  win = null
  lose = null
  message.textContent = "Click an Area to Search the Forest" 
  render()
  hideTreasure()
}

function render(){
  console.log('render runs')
}

// todo when a user has clicked, place the index of the position into the correct place in the player array. possibly using splice? 
// todo style it approprietly/centered in the div
function handleMovement(evt){
  const idx = evt.target.id.replace("tile-", "")
  tiles[idx].innerHTML = "🐍" 
  player.push(idx)
  console.log(player)
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
  }


// ? search
// probably to be broken down into even more functions
// if something got found, end game, display msg
// if nothing found, display msg 
function search(){
  console.log("search btn works")
}

function removeSearch(){
  let badgeInt = parseInt(badgeString.textContent) 
  if (handleMovement && badgeInt !== 0){  
  badgeInt = badgeInt - 1
  badgeString.textContent = badgeInt
  }
  if (badgeInt !== 5){
    message.textContent = ""
  }
}

function hideTreasure(evt){
  const random = Math.floor(Math.random() * 15 - 0) + 0;
  tiles[random].textContent = "🍎"
  treasure.push(random)
}

function reset(){
  console.log("reset btn works")
}



