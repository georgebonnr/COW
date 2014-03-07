document.addEventListener("DOMContentLoaded", function(event) {
  var cow = MakeCow();
  var cowView = document.getElementById('cow');
  var scoreView = document.getElementById('score');
  var addHat = document.getElementById('addHat');
  var addShoes = document.getElementById('addShoes');

  scoreView.innerText = cow.getScore();
  cowView.onclick = function(e){
    cow.increment();
    scoreView.innerText = cow.getScore();
    console.log(cow.getScore());
  };

  addHat.onclick = function(e){
    cow.addItem('hat');
    // append hat-shaped div
  };

  addShoes.onclick = function(e){
    cow.addItem('shoes');
    // append shoe-shaped divs
  };
});

