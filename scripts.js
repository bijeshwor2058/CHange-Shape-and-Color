const round = document.getElementById('round')
const changeColorBtn = document.getElementById('change-color-btn')

changeColorBtn.addEventListener('click',function(){
  function ColorGenerator(){
    let letter = '0123456789ABCDEF'
    let color = '#'
    for(let i =0; i < 6; i++){
      color += letter[Math.floor(Math.random()*16)]
    }
    return color;
  }
  round.style.backgroundColor = ColorGenerator();
})

// Change Shape



let arr = ["square", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function getRandomShape(){
  return arr[Math.floor(Math.random()* arr.length)]
}
let changeShape = document.getElementById('change-shape-btn');
let shapeElement = document.getElementsByClassName('shape')[0]

changeShape.addEventListener('click', function(){
  shapeElement.setAttribute("id",getRandomShape())
});

console.log(getRandomShape());





