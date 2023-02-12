// Board size
const SIZE = 9;

// Call function when page is loaded
window.onload = function()
{
    GamePage();
}

// Initialize Sudoku page; game board and palette
function GamePage()
{
    let g_board = document.getElementById("Game_Board");
    let p_board = document.getElementById("Palette_Board");
    let p_row = p_board.insertRow(0);

    // Generate a 9X9 game board and a 1X10 palette board
    for(let i = 0; i < SIZE; i++)
    {
        let p_cell = p_row.insertCell(i);
        p_cell.innerHTML = i + 1;
        let g_row = g_board.insertRow(i);
        for(let j = 0; j < SIZE; j++)
        {
            let g_cell = g_row.insertCell(j);
            g_cell.innerHTML = j;
        }
    }
    let p_cell = p_row.insertCell(-1);
    p_cell.innerHTML = "undo icon";
}

function Random_Game(level)
{
    // Solution cell probability: 0 < x < 0.4
    let probability = (Math.random() * 0.6).toFixed(1);
    let chances = 0.0;
    let blank = 1;
    let filled = 1;
    let row_num = "";

    for(let i = 1; i < SIZE; i++)
    {
        console.log("current chances = " + chances);
        console.log("current prob = " + probability);
        if((probability + chances * 0.5) <= (0.4 + chances))
        {
            // row_num += "0";
            // chances -= 0.05

        }
        else
        {
            // row_num += (Math.floor(Math.random() * 9) + 1);
            // chances += 0.05 

        }
        console.log("after chances = " + chances);
        console.log("after prob = " + probability);
        console.log("after limit = " + 0.4 + chances);
        console.log("row num = " + row_num + "\n");
    }

    console.log("row num = " + row_num);

}

Random_Game(1);



let Beginner = [];

let Beginner_Sol = [
    "687149253",
    "514362987",
    "329587146",
    "261473598",
    "758916324",
    "943258671",
    "196824735",
    "472635819",
    "835791462"
];