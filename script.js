const container = document.getElementById('grid-container');
const clear = document.getElementById('clear');
const build = document.getElementById('')


clear.addEventListener('click', () => {
    const allBoxes = container.querySelectorAll('div')
    allBoxes.forEach((box) => { 
        box.style.backgroundColor = 'white';
    });
})

function buildGrid(size){
    const container = document.getElementById('grid-container');
    const elem = container.querySelectorAll('div');
    elem.forEach((el) => {
        container.removeChild(el);
    })

    // let rows = buildRows(size);
    // console.log(rows);
    // let cols = buildCols(size);
    // console.log(cols);

    const total = size * size;
    
    for (num = 1; num <= total; num++){
        addDiv(num);
    }

    container.style.gridTemplateColumns = 'repeat(' + (size) + ', ' + (100/size) + '%';
    container.style.gridTemplateRows = 'repeat(' + (size) + ', ' + (100/size) + '%';
    
    const boxes = container.querySelectorAll('div');
    boxes.forEach((box) => { 
        box.addEventListener('mouseenter', () => {  
            box.style.backgroundColor = 'red';
        });
    });
}




function addDiv(boxNum){

    const container = document.getElementById('grid-container');
    const div = document.createElement('div');

    div.setAttribute('class', 'box');
    div.setAttribute('id', 'box' + boxNum);
    container.appendChild(div);
}

function buildRows(a){
    let rows = a;
    let rowArray = [];
    for (i = 1; i <= rows; i++){
        rowArray.push('row' + i);
    }
    return rowArray;
}

function buildCols(a){
    let cols = a;
    let colArray = [];
    for (i = 1; i <= cols; i++){
        colArray.push('col' + i);
    }
    return colArray;
}

