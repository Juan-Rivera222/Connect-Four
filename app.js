// Selectors

var tableRow = document.getElementsByTagName('tr');
var tabeCell = document.getElementsByTagName('td');
var tableSlot = document.querySelector('.slot');
const playerTurn = document.querySelector('.player-Turn');
const reset = document.querySelector('.reset');

for(let i = 0; i < tabeCell.lenght; i++){
    tabeCell[i].addEventListener('click', (e) =>{
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`);
    })
}

while(!player1){
    var player1 = prompt('Player One: Enter name. You will be Yellow');
}

player1Color = 'Yellow';

while(!player2){
    var player2 = prompt('Player Two: Enter name. You will be Red');
}

player2Color = 'Red';

var currentPlayer = 1;
playerTurn.textContent = `${player1}'s turn`;

Array.protptupe.forEach.call(tableCell, (cell) =>{
    cell.addEventListener('click', ChangeColor);
    cell.style.backgroundColor = 'white';
});

function ChangeColor(e){
    let column = e.target.cellIndex;
    let row = [];

    for (let i = 5; i > -1; i--){
        if(tableRow[i].children[column].style.backgroundColor == 'white'){
            row.push(tableRow[i].children[column]);
            if(currentPlayer === 1){
                row[0].style.backgroundColor = player1Color;
                if (horizontalCheck() || verticalCheck()){
                    return (alert('winner'));
                }
                playerTurn.textContent = `${player2}'s turn!`;
                return currentPlayer = 2;
            }else{
                row[0].style.backgroundColor = player2Color;
                playerTurn.textContent = `${player1}'s turn`
                return currentPlayer = 1;

            }
        }
    }
}


function colorMatchCheck(one, two, three, four){
    return(one == two && one === three && one === four && one !== 'white');
}

function horizontalCheck(){
    for(let row = 0; row < tableRow.lenght; i++){
        for (let col = 0; col < 4; col++){
            if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor,tableRow[row].children[col+1].style.backgroundColor,
                tableRow[row].children[col+2].style.backgroundColor,tableRow[row].children[col+3].style.backgroundColor)){
                    return true;
                }
        }
    }
};

function verticalCheck(){
    for ( let col = 0; col < 7; col++){
        for( let row =0; row < 3; row++){
           if(colorMatchCheck(tableRow[row].children[col].style.backgroundColor, tableRow[row+1].children[col].style.backgroundColor,
            tableRow[row+2].children[col].style.backgroundColor, tableRow[row+3].children[col].style.backgroundColor)){
              return true;
            }
        }
    }
}

function diagnalCheck1(){
    for( let col = 0; col < 4; col++){
        for ( row = 0; row <3; roww++){
            if
        }
    }
}