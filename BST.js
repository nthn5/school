const nodes = (value) => {
    return{value: value, left: null, right: null}
}

const tree = () => {
    let root;
    const buildTree = (array) => {
        array = array.filter((item, index) => array.indexOf(item) === index);
        root = nodes(array[0]);
        console.log(array);
        for (let value of array){
            if (value < root.value){
                let current = root;
                while (current.left !== null){
                    current = current.left;
                    if (value > current.value){
                        while (current.right !== null){
                            current = current.right;
                        }
                        break;
                    }
                        
                }
                if (value < current.value){
                    value = nodes(value);
                    current.left = value;
                }
                else if (value > current.value){
                    value = nodes(value);
                    current.right = value;
                }
            }
            if (value > root.value){
                let current = root;
                while (current.right !== null){
                    current = current.right;
                    if (value < current.value){
                        while (current.left !== null){
                            current = current.left;
                        }
                        break;
                    }
                        
                }
                if (value > current.value){
                    value = nodes(value);
                    current.right = value;
                }
                else if (value < current.value){
                    value = nodes(value);
                    current.left = value;
                }
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

const insertAttempt = (value) => {
    if (value < t.root.value){
        let current = t.root;
        while (current.left !== null && value < current.left.value){
            current = current.left;
            while (current.right !== null && value > current.right.value){
                current = current.right;
            }
        }
        if (value < current.value){
            value = nodes(value);
            current.left = value;
        }
        else if (value > current.value){
            value = nodes(value);
            current.right = value;
        }
    }
}

const remove = () => {

}

let array = [7, 9, 14, 8, 5, 4, 6, 3, 1, 2, 12, 13, 11, 10];
let t = tree();
t.buildTree(array);
console.log(t.root);
prettyPrint(t.root);
// insertAttempt(5);
// prettyPrint(t.root);
