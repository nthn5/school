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
        }
        
    }
    return{buildTree, get root(){return root}}
}

let array = [10, 2, 9, 1, 4, 5, 6, 7, 8];
let t = tree();
t.buildTree(array);
console.log(t.root.left);
//left works just need to copy and make it right sided too.
