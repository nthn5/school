const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
        prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}

const nodes = (value) => {
    return{value: value, left: null, right: null}
}

const tree = () => {
    let root = null;

    const build = (array) => {
        array = array.filter((item, index) => array.indexOf(item) === index);
        root = nodes(array[0]);
        for (value of array){
            if (value !== root.value){
                insert(value)
            }
        }
    }

    const insert = (value) => {
        let current = root;
        if (!root){
            root = nodes(value);
            return;
        }
        while (true){
            if (value < current.value){
                if (!current.left){
                    current.left = nodes(value);
                    break;
                }
                current = current.left;
            }
            else if (value > current.value){
                if (!current.right){
                    current.right = nodes(value);
                    break;
                } 
                current = current.right;
            }
        }
    }

    const remove = (value) => {
        let current = root;
        let parent = null;
        while (current){
            if (value < current.value){
                parent = current;
                current = current.left;
            }
            else if (value > current.value){
                parent = current;
                current = current.right;
            }
            else if (value == current.value){
                if (current.right == null){
                    if (parent == null){
                        root = current.left;
                    }
                    else {
                        if (current.value < parent.value){
                            parent.left = current.left;
                        }
                        else if (current.value > parent.value){
                            parent.right = current.left;
                        }
                    }
                }
                else if (current.right.left == null){
                    current.right.left = current.left;
                    if (parent == null){
                        root = current.right;
                    }
                    else {
                        if (current.value < parent.value){
                            parent.left = current.right;
                        }
                        else if (current.value > parent.value){
                            parent.right = current.right;
                        }
                    }
                }
                else {
                    let lm = current.right.left;
                    let lmparent = current.right;
                    while (lm.left !== null){
                        lmparent = lm;
                        lm = lm.left;
                    } 
                    lmparent.left = lm.right;
                    lm.left = current.left;
                    lm.right = current.right;
                    if (parent == null){
                        root = lm;
                    }
                    else {
                        if (current.value < parent.value){
                            parent.left = lm;
                        }
                        else if (current.value > parent.value){
                            parent.right = lm;
                        }
                    }
                }
                return true;
            }
        }
    }

    const find = (value) => {
        let current = root;
        if (value == root.value){
            console.log(root);
            return root;
        }
        while (true){
            if (value < current.value){
                if (current.left){
                    if (value == current.left.value){
                        console.log(current.left);
                        return current.left;
                    }
                    current = current.left;
                }
            }
            else if (value > current.value){
                if (current.right){
                    if (value == current.right.value){
                        console.log(current.right);
                        return current.right;
                    }
                    current = current.right;
                }
            }
            if (current.left == null && current.right == null && value !== current.value){
                console.log(`${value} not found`);
                return false;
            }
        }
    }

    const breadth = () => {
        let array = [];
        let queue = [root];
        while (queue[0]){
            let current = queue[0];
            if (current.left){
                queue.push(current.left);
            }
            if (current.right){
                queue.push(current.right);
            }
            array.push(current);
            queue.shift();
        }
        console.log(array);
    }

    return {build, insert, remove, find, breadth, get root(){return root}}
}


let array = [41, 79, 18, 95, 28, 77, 63, 36, 6, 75, 84, 21, 98, 54, 25, 9, 40, 29, 44, 85, 1, 88, 52, 83, 43, 100, 97, 76];
let t = tree();
t.build(array);
t.insert(10);
prettyPrint(t.root);
t.remove(63);
prettyPrint(t.root);
t.find(100);
t.breadth();
