const list = (() => {
    let TDlist = [];
    return{TDlist}
})();

const createNote = (text, priority) => {
    const note = {
        text,
        priority,
    }
    list.TDlist.push(note);
}

const drawTD = (() => {
    const taskArea = document.querySelector('#taskArea');
    for (let i of list.TDlist){
        const task = document.createElement('div');
        task.textContent = i.desc;
        taskArea.appendChild(task);
    }
})();

const createAdd = (() => {
    let count = 0;
    const taskArea = document.querySelector('#taskArea');
    const addButton = document.querySelector('#addButton')
    addButton.addEventListener('click', () => {
        creation.createTasks('');
        count++;
        if(count % 2 == 0){
            count++;
        }
    });
   
    taskArea.addEventListener('click', (e) => {
        if(count % 2 == 0 && e.target.tagName.toUpperCase() != 'INPUT' && e.target.tagName.toUpperCase() != 'BUTTON'){
            creation.createTasks('');
        }
        count++;
        checkboxFocus.boxCheck(e);
    });
    const all = document.querySelector('#all')
    all.addEventListener('click', () => {
        if(count % 2 != 0){
            count++;
        }
    });
})();

const creation = (() => {
    const createTasks = (text, priority) => {
        const taskArea = document.querySelector('#taskArea');
        const taskContainer = document.createElement('div');
        const deletion = document.createElement('button');
        const input = document.createElement('input');
        const star = document.createElement('input');
        star.type = 'checkbox';
        star.classList.add('star');
        taskContainer.classList.add('taskContainer');
        deletion.classList.add('deleteButton');
        input.classList.add('task');

        input.value = text;

        taskContainer.appendChild(deletion);
        taskContainer.appendChild(input);
        taskContainer.appendChild(star);
        taskArea.appendChild(taskContainer);

        input.focus();
    }
    return{createTasks}
})();

const checkFocus = (() => {
    const taskArea = document.querySelector('#taskArea');
    document.addEventListener('click', (e) => {
        for (let i of taskArea.children){
            if (document.activeElement !== i.children[1] && i.children[1].value == '' && e.target.tagName.toUpperCase() != 'INPUT'){
                taskArea.removeChild(i);
                TDtext();
            }
        }
    });
})();

const checkboxFocus = (() => {
    const boxCheck = (e) => {
        const taskArea = document.querySelector('#taskArea');
        let once = false;
        if(e.target.classList.contains('star')){
            for(let i of taskArea.children){
                const clonei = i.cloneNode();
                for (let j of i.children){
                    const clonej = j.cloneNode();
                    clonei.appendChild(clonej);
                    if(j == e.target){
                        taskArea.removeChild(i);
                        if(taskArea.hasChildNodes()){
                            for(x of taskArea.children){
                                for(y of x.children){
                                    if(!y.checked && y == x.lastChild){
                                        taskArea.insertBefore(clonei, x);
                                        once = true;
                                    }
                                    else{
                                        taskArea.appendChild(clonei);
                                    }
                                    if(once == true){break;}
                                }
                                if(once == true){break;}
                            }
                        }
                        else{
                            taskArea.appendChild(clonei);
                        }
                    }
                }
            }
        }
    
        if(e.target.tagName.toUpperCase() == 'BUTTON'){
            for(let i of taskArea.children){
                for (let j of i.children){
                    if(j == e.target){
                        taskArea.removeChild(i);
                    }
                }
            }
        }
        TDtext();
    }
    return{boxCheck}
})();

function TDtext() {
    list.TDlist = [];
    let text;
    let check;
    const taskArea = document.querySelector('#taskArea');
    for (let i of taskArea.children){
        for(let j of i.children){
            if(j.classList.contains('task')){
                text = j.value;
            }
            if(j.classList.contains('star')){
                if(j.checked){
                    check = true;
                }
                else{
                    check = false;
                }
            }
        }
        createNote(text, check);
    }
}

const clickTabs = (() => {
    const all = document.querySelector('#all');
    const priority = document.querySelector('#priority');
    const thisWeek = document.querySelector('#this-week');
    const done = document.querySelector('#done');

    all.addEventListener('click', () => {
        tabs.all();
    });
    priority.addEventListener('click', () => {
        tabs.priority();
    });
})();

const tabs = (() => {
    const taskArea = document.querySelector('#taskArea');
    const all = () =>{
        while(taskArea.firstChild){
            taskArea.removeChild(taskArea.firstChild);
        }
        for(let i of list.TDlist){
            creation.createTasks(i.text);
        }
        document.activeElement.blur();
    }

    return{all}
})();

const update = (() => {
    const taskArea = document.querySelector('#taskArea');
    taskArea.addEventListener('click', () => {
        const input = document.querySelectorAll('.task');
        input.forEach(input => input.addEventListener('input', () => {
            TDtext();
        }));
    })
})();
