

/*---------------------------- Variables (state) ----------------------------*/

let currentPlayerLocation, treasure, board, gameActive
const lose = new Audio("../sounds/lose.mp3")
const win = new Audio("../sounds/win.mp3")
const moveAndSearch = new Audio("../sounds/move:search - credit zapsplat.mp3")

/*------------------------ Cached Element References ------------------------*/

const title = document.querySelector('h1')
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
  gameActive = true
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
  if (gameActive === false)return
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
    if (currentPlayerLocation + 4 === dest || currentPlayerLocation - 4 === dest || currentPlayerLocation + 1 === dest || currentPlayerLocation - 1 === dest){
      return true
    }
  }

function search(){
  if (currentPlayerLocation === treasure){
    win.volume = .1
    win.play()
    btnSearch.disabled = true
    tiles[treasure].textContent = "🍄"
    message.textContent = `You found the treasure!`
    gameActive = false
    const newHeadline = document.createElement("h1");
    newHeadline.innerHTML = `You Win with a Score of +${badgeString.textContent - 1} points!`
    newHeadline.style.textAlign = "center"
    newHeadline.style.fontSize = "10px"
    newHeadline.style.color = "yellow"
    newHeadline.style.margin = "5px";
    message.appendChild(newHeadline);
    if (badgeString.innerHTML === '1'){
      const zeroPoints = document.createElement("h1");
      zeroPoints.innerHTML = `Try finding the Treasure with less Searches next time to get more points.`
      zeroPoints.style.textAlign = "center"
      zeroPoints.style.fontSize = "8px"
      zeroPoints.style.color = "grey"
      zeroPoints.style.margin = "5px";
      message.appendChild(zeroPoints);
      message.setAttribute("align", "center")
    }
    confetti.start(2000)
  } 
  if (currentPlayerLocation !== treasure){
    message.textContent = checkProx()
  }
  if (currentPlayerLocation !== treasure && badgeString.innerHTML === '1'){ 
    lose.volume = .10
    lose.play()
    title.classList.add('animate__animated', 'animate__bounce');
    message.textContent = "You ran out of Searches. You lose."
    btnSearch.disabled = true
    gameActive = false
  }
  removeSearch()
}


function checkProx(){
  if (currentPlayerLocation +1  === treasure || currentPlayerLocation -1 === treasure || currentPlayerLocation + 4 === treasure || currentPlayerLocation - 4 === treasure){
    return "You're really close!"
  }
  return "Keep looking!"
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
  badgeString.innerHTML = '5'
  btnSearch.disabled = false
  init()
}