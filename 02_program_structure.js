function loopingTriangle(){
    for (let i = 1; i < 8; i++){
        console.log('#'.repeat(i))
    }
}

function fuzzBuzz(){
    for (let i = 1; i < 101; i++){
        let fb = "";
        if (!(i%3)) fb += "Fuzz";
        if (!(i%5)) fb += "Buzz";
        console.log(fb == "" ? i : fb);
    }
}

function chessBoard(){
    line = "# # # #"
    for (let i = 0; i < 4; i++){
        console.log(" " + line);
        console.log(line + " ");
    }
}

function chessBoard2(){
    let size = 9;
    board = "";
    for (let x = 0; x < size; x++){
        for (let y = 0; y < size; y++){
            board += ((x + y) % 2 ? " ": "#");
        }
        board += "\n";
    }
    console.log(board);
}

chessBoard2()