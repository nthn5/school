const nodes = (value) => {
    return {value: value, next: new Map()}
}

const vertices = (value, move) => {
    value.next.set(move, [])
}

const addVertex = (value, vertex) => {
    
}

const board = () => {
    let board = [];
    for (let i = 1; i <= 8; i++){
        for (let j = 1; j <= 8; j++){
            board.push([i, j]);
        }
    }
    
    const legalMoves = (start) => {
        let legal = board.filter(move => 
            (move[0] == start[0] + 1 && move[1] == start[1] + 2) ||
            (move[0] == start[0] + 1 && move[1] == start[1] - 2) ||
            (move[0] == start[0] - 1 && move[1] == start[1] + 2) ||
            (move[0] == start[0] - 1 && move[1] == start[1] - 2) ||
            (move[0] == start[0] + 2 && move[1] == start[1] + 1) ||
            (move[0] == start[0] + 2 && move[1] == start[1] - 1) ||
            (move[0] == start[0] - 2 && move[1] == start[1] + 1) ||
            (move[0] == start[0] - 2 && move[1] == start[1] - 1)
        );
        return legal;
    }
    return {legalMoves}
}
let b = board();

const knightMoves = (start, end) => {
    let count = 0;
    let legal = b.legalMoves(start);
    let root = nodes(start);
    let current = root;
    console.log(root)
    while (true){
        for (let move in legal){
            vertices(current, legal[move]);
            console.log(current.next[move])
            
            // legal = b.legalMoves(move);
            count++;
            if(count==5){return root;}
        }
        current = current.next[move];
    }
    return root;
}

console.log(knightMoves([1, 1], [2, 3]));
