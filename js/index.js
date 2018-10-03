const gridSize=3;
let j=1;

const score = document.getElementById('score');
const highScore = document.getElementById('high-score');
const timer = document.getElementById('timer');

for(var i = 0; i < gridSize; i++) {
  const elem = document.createElement('div');
  elem.className = 'row';

  for(k = 0; k < gridSize; k++) {
      const cell = document.createElement('div');
      cell.className = 'gridsquare';
      cell.id = j;
      cell.innerHTML = j++;
      cell.addEventListener('click', function(event) {
        // console.log(event.target.id);
        if(cell.classList.contains('green')){
          score.innerHTML = ++score.innerHTML
        } else {
          score.innerHTML = --score.innerHTML
        }
        // update high-score if score exceeds high-score
        if(score.innerText * 1 > highScore.innerText * 1){
          highScore.innerHTML = score.innerHTML;
        }
      })
      elem.appendChild(cell);
  }
  document.body.appendChild(elem);
}

(function highlightCells() {
  let tempNumber;
  setInterval(function() {
    tempNumber = Math.floor((Math.random(1,10) * 10) + 1) + '';
    tempNumber = tempNumber == 10 ? tempNumber - 1 : tempNumber;
    document.getElementById(tempNumber).classList += ' green'
    setTimeout(function() {
      document.getElementById(tempNumber).classList.remove('green');
    }, 900)
    timer.innerHTML = -- timer.innerHTML;
  }, 1000)

  setTimeout(function() {
    alert('Game Over!!!')
    window.location.reload()
  }, 120000)
})()