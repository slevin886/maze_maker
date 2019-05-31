// Maze Board, thank you https://github.com/danielborowski/jsboard for the useful board creation package
var b = jsboard.board({ attach: "game", size: "10x10"});

// Style all cells initially
//b.cell("each").style({
//  width: "40px",
//  height: "40px",
//  background: "white",
//  borderRadius: "25px"
//});

// Maze Symbols
var wall = jsboard.piece({ text: "X", fontSize: "30px", textAlign: "center", width:"40px", height:"40px", background: "red", borderRadius: "5px"});
var path = jsboard.piece({ text: "*", fontsize: "15px", textAlign: "center", width:"40px", height:"40px", background: "blue",borderRadius: "5px"});
var start = jsboard.piece({ text: "start", fontsize: "5px", textAlign: "center", width:"40px", height:"40px", background: "green", borderRadius: "5px"});
var finish = jsboard.piece({ text: "finish", fontsize: "15px", textAlign: "center", width:"40px", height:"40px", background: "gold", borderRadius: "5px"});
var empty = jsboard.piece({ text: " ", fontsize: "0px", textAlign: "center", width:"40px", height:"40px", background: "blue", borderRadius: "5px"});


maze_map.forEach(function(row, xaxis){
    row.forEach(function(value, yaxis){
        console.log(value);
        switch(value){
            case " ":
                b.cell([xaxis, yaxis]).place(empty.clone());
                break;
            case "X":
                b.cell([xaxis, yaxis]).place(wall.clone());
                break;
            case "S":
                b.cell([xaxis, yaxis]).place(start.clone());
                break;
            case "F":
                b.cell([xaxis, yaxis]).place(finish.clone());
                break;
            case "*":
                b.cell([xaxis, yaxis]).place(path.clone());
                break;
        };
    });
});

b.cell("each").on("click", function() {
  if (b.cell(this).get()===" ") {
    b.cell(this).place(wall.clone());
  } else if (b.cell(this).get()==="X") {
    b.cell(this).place(empty.clone());
  }
});
