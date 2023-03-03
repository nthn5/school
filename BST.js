const nodes = (value) => {
    return{value: value, left: null, right: null}
}

const tree = () => {
    let root;
    const buildTree = (array) => {
        array = array.filter((item, index) => array.indexOf(item) === index);
        for (let i in array){
            array[i] = nodes(array[i]);
        }
        root = array[0];
        let lPointer = root;
        let rPointer = root;
        for (let current of array){
            if (current.value < root.value && current.value < lPointer.value){
                lPointer.left = current;
                lPointer = current;
            }
            else if (current.value < root.value && current.value > lPointer.value){
                lPointer.right = current;
                lPointer = current;
            }

            else if (current.value > root.value && current.value > rPointer.value){
                rPointer.right = current;
                rPointer = current;
            }
            else if (current.value > root.value && current.value < rPointer.value){
                rPointer.left = current;
                rPointer = current;
            }
        }
    }
    return{buildTree, get root(){return root}}
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}


let array = [7, 9, 4, 6, 2, 3, 1, 10, 5, 8];
let t = tree();
t.buildTree(array);
console.log(t.root);
prettyPrint(t.root);
