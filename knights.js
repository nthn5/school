const nodes = (value) => {
    return {value: value}
}

const vertices = (vertices) => {
    let list = [];
    for (let i of vertices){
        let temp = nodes(i);
        list.push(temp);
    }

    return {list: list}
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
    root.next = nodes(legal);
    for (let move of legal){
        if (move[0] == end[0] && move[1] == end[1]){
            return move;
        }
    }
}

console.log(knightMoves([1, 1], [2, 3]));
console.log(nodes([1, 1]))
