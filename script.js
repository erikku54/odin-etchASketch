
let adjuster = document.querySelector('.adjuster')
let lb = document.querySelector('.lb')
let playground = document.querySelector('.play-ground')

drawGrid(16);

adjuster.addEventListener('change', (e) => {

    let num = parseInt(e.target.value);
    lb.textContent = num + 'x' + num;

    clearGrid();
    drawGrid(num);

})

let btnClear = document.querySelector('.btn');

btnClear.addEventListener('click',(e)=>{

    clearGrid();
    drawGrid(parseInt(adjuster.value));
})


let blnInk=false;

function mouseDwn(){
    if (blnInk==false)
        blnInk=true;
}

function mouseRelease(){
    if (blnInk==true) 
        blnInk=false;
}


function clearGrid() {

    let divs = playground.querySelectorAll('div');
    divs.forEach(div => div.remove());
}

function drawGrid(num) {

    for (let i = 0; i < num; i++) {
        let divY = document.createElement('div');
        divY.classList.add('gridY');
        playground.appendChild(divY)

        for (let j = 0; j < num; j++) {
            let divX = document.createElement('div');
            divX.classList.add('gridX');
            divX.style.backgroundColor = '#FFFFFF';

            divX.addEventListener('mousedown', mouseDwn);
            divX.addEventListener('mouseover', paint);
            divX.addEventListener('mouseup',mouseRelease);

            divY.appendChild(divX);
        }
    }
}


function paint(e) {

    let mode=document.querySelector('.mode');
    let s=parseInt(mode.value)

    if (s==1){
        drawRGB(e);
    }else{
        drawGray(e);
    }


}


function drawRGB(e) {

    if (blnInk==false){
        return;
    }

    // let color=window.getComputedStyle(divX).background;   //如果backgroundColor不是在css中顯式定義的,而是預設/繼承而來的屬性,就要用getComputedStyle才能讀取
    let color = e.target.style.backgroundColor;

    // console.log(color);

    let r = color.split(/\(|, |\)/)[1];
    let g = color.split(/\(|, |\)/)[2];
    let b = color.split(/\(|, |\)/)[3];

    let dr = Math.floor(Math.random() * (256 < r ? 256 : r));
    let dg = Math.floor(Math.random() * ((256 - dr) < g ? (256 - dr) : g));
    let db = 255 - dr - dg;

    r = (r < dr) ? 0 : (r - dr);
    g = (g < dg) ? 0 : (g - dg);
    b = (b < db) ? 0 : (b - db);

    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // console.log([r,g,b]);
}


function drawGray(e) {

    if (blnInk==false){
        return;
    }

    // let color=window.getComputedStyle(divX).background;   //如果backgroundColor不是在css中顯式定義的,而是預設/繼承而來的屬性,就要用getComputedStyle才能讀取
    let color = e.target.style.backgroundColor;

    // console.log(color);

    let r = color.split(/\(|, |\)/)[1];
    let g = color.split(/\(|, |\)/)[2];
    let b = color.split(/\(|, |\)/)[3];

    let dr = 85, dg=85, db=85;

    r = (r < dr) ? 0 : (r - dr);
    g = (g < dg) ? 0 : (g - dg);
    b = (b < db) ? 0 : (b - db);

    e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    // console.log([r,g,b]);
}






// console.log(adjuster);
// console.log(lb);
// console.log(adjuster.value);
// console.log(adjuster.onchange);
