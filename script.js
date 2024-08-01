const changeColor = document.getElementById("change-color");
const round = document.getElementById("round");
changeColor.addEventListener('click', function(){
  function getRandomColor(){
    let letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let color = '#';
      for(let i =0; i<6; i++){
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  };
  round.style.backgroundColor = getRandomColor();
});


// ---change Shape-----\\


let arr=["square", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function getRandomShape() {
  return arr[Math.floor(Math.random() * arr.length)];
}
let changeShape = document.getElementById("change-shape");

let shapeElement = document.getElementsByClassName("shape")[0];
changeShape.addEventListener('click', function(){
    shapeElement.setAttribute("id",getRandomShape());
});



