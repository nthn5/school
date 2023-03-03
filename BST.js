const nodes = (value) => {
    return{value: value, left: null, right: null}
}

const tree = () => {
    const buildTree = (array) => {
        array.sort((a, b) => {return a - b});
        array = array.filter((item, index) => array.indexOf(item) === index);
        let root = array[parseInt(array.length / 2)];
        let node = nodes(root);
        
    }
    return{buildTree}
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let t = tree();
t.buildTree(array);
