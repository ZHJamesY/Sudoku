// Board size variable
const SIZE = 9;

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

        if(i % 3 == 0 && i > 0)
        {
            // for every third row add thick top border
            g_row.classList.add("rowBorder");
        }

        for(let j = 0; j < SIZE; j++)
        {
            let g_cell = g_row.insertCell(j);
            if(board[i][j] != 0)
            {
                g_cell.innerHTML = Sol[i][j];
            }
            else g_cell.innerHTML = "";
        }
    }
    let p_cell = p_row.insertCell(-1);
    p_cell.innerHTML = "undo icon";
});

// Assign palette selected value to selectedVal when clicked, for user to place number on game board
let selectedVal = "";
let selectedID = "";
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
        
    })
});

$(function(){
    $("#Game_Board td").on("click", function(){

        if(this.innerHTML == "")
        {
            this.innerHTML = selectedVal;
        }
    });
});








// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://sudoku-service.p.rapidapi.com/v1/sudoku?withSolution=true",
// 	"method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "3b818ee0femshb5f7bd380463df6p118badjsn5bc70857df15",
// 		"X-RapidAPI-Host": "sudoku-service.p.rapidapi.com"
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

  




