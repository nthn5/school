const nodes = (value) => {
    return {value: value, next: []}
}

const vertices = (value, vertices) => {
    for (let i of vertices){
        value.next.push(nodes(i));
    }
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
    let legal = b.legalMoves(start);
    let root = nodes(start);
    vertices(root, legal)
    // for (let move of legal){
    //     if (move[0] == end[0] && move[1] == end[1]){
    //         return move;
    //     }
    // }
    return root;
}

console.log(knightMoves([1, 1], [2, 3]));
