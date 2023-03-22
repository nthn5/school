//create nodes for linked list
const nodes = (value) => {
    return {value: value, prev: null}
}

//create board
const drawBoard = () => {
    let board = [];
    for (let i = 1; i <= 8; i++){
        for (let j = 1; j <= 8; j++){
            board.push([i, j]);
        }
    }
    return board;
}

//find legal moves
const legalMoves = (start, board = drawBoard()) => {
    for (let i = 0; i < board.length; i++){
        legal = board.filter(move => 
            (move[0] == start[0] + 1 && move[1] == start[1] + 2) ||
            (move[0] == start[0] + 1 && move[1] == start[1] - 2) ||
            (move[0] == start[0] - 1 && move[1] == start[1] + 2) ||
            (move[0] == start[0] - 1 && move[1] == start[1] - 2) ||
            (move[0] == start[0] + 2 && move[1] == start[1] + 1) ||
            (move[0] == start[0] + 2 && move[1] == start[1] - 1) ||
            (move[0] == start[0] - 2 && move[1] == start[1] + 1) ||
            (move[0] == start[0] - 2 && move[1] == start[1] - 1)
        );
    }
    return legal;
}

//finds the shortest path and amount of moves taken
const knightMoves = (start, end) => {
    //checks for valid inputs
    let inbounds = true;
    if (start[0] < 1 || start[0] > 8 || start[1] < 1 || start[1] > 8){
        console.log('start values must be between 1-8');
        inbounds = false;
    }
    if (end[0] < 1 || end[0] > 8 || end[1] < 1 || end[1] > 8){
        console.log('end values must be between 1-8');
        inbounds = false;
    }
    if (inbounds == false){return}
    //searches for shortest path
    let path =[];
    let queue = [nodes(start)];
    while (queue[0]){
        let current = queue[0];
        let legal = legalMoves(queue[0].value);
        for (let move of legal){
            move = nodes(move);
            move.prev = current;
            if (move.value[0] == end[0] && move.value[1] == end[1]){
                path.push(move.value);
                while (move.prev){
                    path.unshift(move.prev.value);
                    move = move.prev;
                }
                console.log('steps taken:', path.length - 1);
                console.log('path:', path);
                return;
            }
            queue.push(move);
        }
        queue.shift();
    }
}

//test cases
knightMoves([1, 1], [8, 8]); //valid input
knightMoves([-1, 11], ['11', -1]); //invalid input