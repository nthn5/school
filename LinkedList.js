const linkedList = () => {
    let head = null;
    let length = 0;
    const append = (value) => {
        if (head == null){
            head = node(value);
        }
        else{
            let current = head;
            while (current.next !== null){
                current = current.next;
            }
            current.next = node();
        }
        length++;
        console.log(head.next)
    }
    return {append, head, length}
};

const node = (value, next = null) => {
    return {value: value || null, next: next}
}

list = linkedList();
list.append(5);
list.append(7);
console.log(list.length)
