// Maze Board, thank you https://github.com/danielborowski/jsboard for the useful board creation package
var b = jsboard.board({ attach: "game", size: "10x10"});

// Maze Symbols
var wall = jsboard.piece({ text: "X", fontSize: "30px", textAlign: "center", width:"40px", height:"40px", background: "red", borderRadius: "5px"});
var path = jsboard.piece({ text: "*", fontsize: "15px", textAlign: "center", width:"40px", height:"40px", background: "green",borderRadius: "5px"});
var start = jsboard.piece({ text: "start", fontsize: "5px", textAlign: "center", width:"40px", height:"40px", background: "green", borderRadius: "5px"});
var finish = jsboard.piece({ text: "finish", fontsize: "15px", textAlign: "center", width:"40px", height:"40px", background: "gold", borderRadius: "5px"});
var empty = jsboard.piece({ text: " ", fontsize: "0px", textAlign: "center", width:"40px", height:"40px", background: "blue", borderRadius: "5px"});


function drawMaze(){
    maze_map.forEach(function(row, xaxis){
        row.forEach(function(value, yaxis){
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
};

drawMaze();

function drawPathDepth(){
    dfs_path.forEach(function(coord, index){
        setTimeout(function(){
        b.cell([coord[0], coord[1]]).place(path.clone());
        }, 150 * (index + 1));
    });
};

function drawPathBreadth(){
    bfs_path.forEach(function(coord, index){
        setTimeout(function(){
        b.cell([coord[0], coord[1]]).place(path.clone());
        }, 150 * (index + 1));
    });
};

function drawPathAstar(){
    astar_path.forEach(function(coord, index){
        setTimeout(function(){
        b.cell([coord[0], coord[1]]).place(path.clone());
        }, 150 * (index + 1));
    });
};


function drawPathFinalBreadth(){
    final_bfs.forEach(function(coord, index){
        setTimeout(function(){
        b.cell([coord[0], coord[1]]).place(path.clone());
        }, 150 * (index + 1));
    });
};

function drawPathFinalDepth(){
    final_dfs.forEach(function(coord, index){
        setTimeout(function(){
        b.cell([coord[0], coord[1]]).place(path.clone());
        }, 150 * (index + 1));
    });
};

function drawPathFinalAstar(){
    final_astar.forEach(function(coord, index){
        setTimeout(function(){
        b.cell([coord[0], coord[1]]).place(path.clone());
        }, 150 * (index + 1));
    });
};

// Draw Search Paths
document.getElementById("drawPathDFS").addEventListener("click", drawPathDepth);
document.getElementById("drawPathDFS").addEventListener("click", drawMaze);

document.getElementById("drawPathBFS").addEventListener("click", drawPathBreadth);
document.getElementById("drawPathBFS").addEventListener("click", drawMaze);

document.getElementById("drawPathAstar").addEventListener("click", drawPathAstar);
document.getElementById("drawPathAstar").addEventListener("click", drawMaze);

// Draw Final Paths
document.getElementById("finalBFS").addEventListener("click", drawPathFinalBreadth);
document.getElementById("finalBFS").addEventListener("click", drawMaze);

document.getElementById("finalDFS").addEventListener("click", drawPathFinalDepth);
document.getElementById("finalDFS").addEventListener("click", drawMaze);

document.getElementById("finalAstar").addEventListener("click", drawPathFinalAstar);
document.getElementById("finalAstar").addEventListener("click", drawMaze);