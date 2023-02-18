// Board size variable
const SIZE = 9;

// 0's represent empty cell
let board = [
    "010000010",
    "001000100",
    "001001000",
    "000000010",
    "100010100",
    "000000000",
    "001100100",
    "010000010",
    "001000000",
];

// solution
let Sol = [
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

// Initialize Sudoku page; game board and palette
$(function(){
    let g_board = document.getElementById("Game_Board");
    let p_board = document.getElementById("Palette_Board");
    let p_row = p_board.insertRow(0);

    // Generate col thick borders
    for(let t = 0; t < 3; t++)
    {
        let colGroup = document.createElement("colgroup");
        let col = document.createElement("col");
        col.span = 3;
        g_board.append(colGroup);
        colGroup.append(col);
    }

    // Generate a 9X9 game board and a 1X10 palette board
    for(let i = 0; i < SIZE; i++)
    {
        let p_cell = p_row.insertCell(i);
        p_cell.innerHTML = i + 1;
        p_cell.id = "p" + (i + 1).toString();
        let g_row = g_board.insertRow(i);

        // for every third row add thick top border
        if(i % 3 == 0 && i > 0)
        {
            g_row.classList.add("rowBorder");
        }

        for(let j = 0; j < SIZE; j++)
        {
            let g_cell = g_row.insertCell(j);
            g_cell.id = i.toString() + j.toString();
            if(board[i][j] != 0)
            {
                g_cell.innerHTML = Sol[i][j];
            }
            else g_cell.innerHTML = "";
        }
    }
    let p_cell = p_row.insertCell(-1);
    p_cell.innerHTML = "undo icon";
    p_cell.id = "undo";
});

// Assign palette selected value to selectedVal when clicked; for user to place number on game board
let selectedVal = "";
let selectedID = "";
let stack = [];
$(function(){
    $("#Palette_Board td").on("click", function(){
        if(this.id[0] == "p")
        {
            if(selectedID == "")
            {
                this.classList.add("selected");
                selectedVal = this.innerHTML;
                selectedID = this.id;
            }
            else if(selectedID != "" && this.id != selectedID)
            {
                this.classList.add("selected");
                document.getElementById(selectedID).classList.remove("selected");
                selectedVal = this.innerHTML;
                selectedID = this.id;
            }
            else
            {
                document.getElementById(selectedID).classList.remove("selected");
                selectedVal = "";
                selectedID = "";
            }
        }
        else if(this.id == "undo")
        {
            if(stack.length > 0)
            {
                // assign popped element to undoVal
                let undoVal = stack.pop();
                // assign undoVal value[0] to the cell by ID
                let undoCell = document.getElementById(undoVal[1])
                undoCell.innerHTML = undoVal[0];
                undoCell.classList.remove(document.getElementById(undoVal[1]).className);
            }
        }
        
    })
});

// place value to empty cell and push previous value to stack
$(function(){
    $("#Game_Board td").on("click", function(){

        if(this.innerHTML == "" && selectedVal != "")
        {
            stack.push([this.innerHTML,this.id]);
            this.innerHTML = selectedVal;
            checkInput(this);
        }
    });
});

// apply different background color to the correct/incorrect input
function checkInput(item)
{
    if(item.innerHTML == Sol[item.id[0]][item.id[1]])
    {
        item.classList.add("correct");
        stack.pop();
    }
    else item.classList.add("error");
}




