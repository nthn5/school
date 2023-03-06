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
    let root;

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
        while (true){
            if (value < current.value){
                if (!current.left){
                    current.left = nodes(value);
                    break;
                }
                current = current.left;
            }
            if (value > current.value){
                if (!current.right){
                    current.right = nodes(value);
                    break;
                } 
                current = current.right;
            }
        }
    }
    return {build, insert, get root(){return root}}
}

const remove = (value) => {

}

let array = [41, 79, 18, 95, 28, 77, 63, 36, 6, 75, 84, 21, 98, 54, 25, 9, 40, 29, 44, 85, 1, 88, 52, 83, 43, 100, 97, 76];
let t = tree();
t.build(array);
t.insert(10);
prettyPrint(t.root);
