

//Use CSS Flexbox or Grid (or grid functionality as provided by a CSS Framework).
//No remaining dead or commented out code.
//(Must have scoring, art, sound, and animation)

/*---------------------------- Variables (state) ----------------------------*/

let currentPlayerLocation, treasure, board

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
  message.textContent = "Click an Area to Navigate the Forest" 
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
  const idxInt = parseInt(evt.target.id.replace("tile-", ""))
  if (board.includes(1)){
    if (!validateMove(idxInt))return
    let position = board.indexOf(1)
    board[position] = null
    board[idxInt] = 1
    currentPlayerLocation = idxInt
  } else {
    board[idxInt] = 1
    currentPlayerLocation = idxInt
  }
  render()
}

// * validateMoves
//else
// {can't move to other spaces}
// todo edge case example ?? unsure
// if currentplrlocation === 0 //top left corner
//dest === [0,1], [1,0]
//if location === [0,3] //top right corner
//destinatio === [0,2], [1,3]
//if location === [3,0] // bot left corner
//destination === [2,0], [3,1]
//if location === [3,3] // bot right
//destination === [2,3], [3,2]

// * if the board does not contain player, you can move anywhere
// * else, if the board contains player, start using validateMoves()
for (let i = 0; i < board.length; i++){
if (board.includes(1) === false) {
  tiles[i].style.backgroundColor = "rgba(255, 255, 255, .2)";
  // todo: do not restrict click
  }
}

function validateMove(dest) {
    if (currentPlayerLocation + 4 === dest){
      return true
    }
    if (currentPlayerLocation - 4 === dest){
      return true
    }
    if (currentPlayerLocation + 1 === dest){
      return true
    }
    if (currentPlayerLocation - 1 === dest){
      return true
    }
  }

function search(){
  if (currentPlayerLocation === treasure){
    message.textContent = "You found the treasure!"
  } else if (currentPlayerLocation !== treasure){
    message.textContent = "Keep searching!"
  // } else if (player !== treasure && badgeString.textContent === "0"){ // ! doesn't work
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
  console.log(`treasure is located at ${treasure}`)
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