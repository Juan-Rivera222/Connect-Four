//constant
const PLAYER_COLORS = {
    '-1': 'yellow',
    '1': 'white',
    'null': 'transparent'
};

const PLAYER_COLORS = {
    '-2': 'red',
    '2': 'white',
    'null': 'transparent'
};





/*----- app's state (variables) -----*/
let board;
let turn;
let winner;











// table
function init() {
    board = [
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null]
    ];
    turn = 1;
    winner = null;
    render();
}


//handleDropClick function 
// that updates that board where the person is dropping th circle.