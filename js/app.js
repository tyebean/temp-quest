

//(Must have 
//scoring 
//art, 
//sound 
//animation

// todo functionality
//should only be able to move in plus direction. then search.
//should change color to demonstrate the above.

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
  message.textContent = "Click an Area to Enter the Forest" 
  render()
  hideTreasure()
}

function render(){
  board.forEach((tile, idx) => {
    if (tile === 1) {
      tiles[idx].textContent = "🐌"
      tiles[idx].style.textAlign = "center"
      tiles[idx].style.padding = "5px";
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
    message.textContent = "Click around and Search for Treasure"
    tiles[0].style.backgroundColor = "rgba(255, 255, 255, .2)"
  }
  render()
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
  console.log(badgeString.innerHTML)
  if (currentPlayerLocation === treasure){
    tiles[treasure].textContent = "🍄"
    message.textContent = "You found the treasure!"
    confetti.start(2000)
  } else if (currentPlayerLocation !== treasure){
    message.textContent = "Keep looking!"
  } else if (player !== treasure || badgeString.innerHTML === '0') { // ! doesn't work
    message.textContent = "You ran out of Searches."
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
  tiles[random].textContent.hidden = "🍄"
  tiles[random].style.textAlign = "center"
  tiles[random].style.padding = "5px";
  board[random] = -1 
  treasure = random
  console.log(`treasure is located at ${treasure}`)
}

function reset(){
  init()
}