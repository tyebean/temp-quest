
//(Must have 
// // scoring 
// // art, 
// // sound 
//animation

/*---------------------------- Variables (state) ----------------------------*/

let currentPlayerLocation, treasure, board
const lose = new Audio("../sounds/lose.mp3")
const win = new Audio("../sounds/win.mp3")
const moveAndSearch = new Audio("../sounds/move:search - credit zapsplat.mp3")


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
    moveAndSearch.play()
    moveAndSearch.volume = .10
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

//`You Win with a Score of ${badgeString.textContent - 1}!`

function search(){
  if (currentPlayerLocation === treasure){
    win.volume = .1
    win.play()
    btnSearch.disabled = true
    tiles[treasure].textContent = "🍄"
    message.textContent = `You found the treasure!`
    const newHeadline = document.createElement("h1");
    newHeadline.innerHTML = `You Win with a Score of ${badgeString.textContent - 1}!`
    newHeadline.style.textAlign = "center"
    newHeadline.style.fontSize = "8px"
    newHeadline.style.color = "yellow"
    newHeadline.style.margin = "5px";
    message.appendChild(newHeadline);
    confetti.start(2000)
  } else if (currentPlayerLocation !== treasure){
    moveAndSearch.play()
    message.textContent = "Keep looking!"
  }
  if (currentPlayerLocation !== treasure && badgeString.innerHTML === '0'){ 
    lose.volume = .10
    lose.play()
    message.textContent = "You ran out of Searches. You lose."
    btnSearch.disabled = true
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
  btnSearch.disabled = false
  init()
}
