
let adjuster=document.querySelector('.adjuster')
let lb=document.querySelector('.lb')
let playground=document.querySelector('.play-ground')

drawGrid(16);

adjuster.addEventListener('change', (e)=>{

    let num=parseInt(e.target.value);
    lb.textContent=num+'x'+num;

    clearGrid();
    drawGrid(num);

})

function clearGrid(){

    let divs=playground.querySelectorAll('div');
    divs.forEach(div=>div.remove());
}

function drawGrid(num){

    for (let i=0;i<num;i++)
    {
        let divY=document.createElement('div');
        divY.classList.add('gridY');
        playground.appendChild(divY)

        for (let j=0;j<num;j++)
        {
            let divX=document.createElement('div');
            divX.classList.add('gridX');
            divY.appendChild(divX);
        }
    }
}



// console.log(adjuster);
// console.log(lb);
// console.log(adjuster.value);
// console.log(adjuster.onchange);
