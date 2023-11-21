const todolist = {
    data: [],
    state: 'all',
    addTodo(content) {
        this.data.push({
            index: this.data.length,
            content,
            done: false
        });
    },
    removeTodo(index) {
        const i = this.data.findIndex((item) => {
            return item.index == index;
        });
        this.data.splice(i, 1);
    },
    done(index) {
        const i = this.data.findIndex((item) => {
            return item.index == index;
        });
        this.data[i].done = !this.data[i].done;
    },
    render(elm) {
        let str = '';

        this.data.filter((item, index) => {
            if ((this.state == 'done' && item.done) ||
                (this.state == 'todo' && !item.done) ||
                (this.state == 'all'))
                return item;
        }).forEach((item) => {
            str += `<li>
                        <label class="checkbox" for="">
                            <input class="chk" type="checkbox" 
                                data-index="${item.index}" ${item.done ? "checked" : ""} />
                            <span>${item.content}</span>
                        </label>
                        <a href="#" class="delete" data-index="${item.index}"></a>
                    </li>`;
        });

        if (this.data.length == 0) {
            str = `<li><label class="empty" for="">
                                <span>快去做點事吧！</span>
                                </label></li>`;
        }
        elm.innerHTML = str;

        document.querySelector('.todoCount').innerHTML = `${this.todoCount()} 個項目`;
    },
    todoCount() {
        switch (this.state) {
            case 'todo':
                return this.data.filter((obj) => !obj.done).length;
            case 'done':
                return this.data.filter((obj) => obj.done).length;
            default:
                return this.data.length;
        }
    },
};

const btn_add = document.querySelector('.btn_add');
const txtAddTodo = document.querySelector('.txtAddTodo');
const ulList = document.querySelector('.list');
const ulTab = document.querySelector('.tab');
const btnClear = document.querySelector('.btnClear');

function addTodoAndRender(e) {
    e.preventDefault();
    const txt = txtAddTodo.value;

    if (!txt) { return; }
    todolist.addTodo(txt);
    todolist.render(ulList);
    txtAddTodo.value = '';
}
btn_add.addEventListener('click', (e) => {
    addTodoAndRender(e);
});
txtAddTodo.addEventListener('keydown', (e) => {
    //console.log(e.keyCode);

    if (e.keyCode == 13) {
        addTodoAndRender(e);
    } else if (e.keyCode == 27) {
        txtAddTodo.value = '';
    }
})

ulList.addEventListener('click', (e) => {
    const elm = e.target;
    let index = '';

    if (elm.getAttribute('class') == 'delete') {
        e.preventDefault();
        index = elm.getAttribute('data-index');
        todolist.removeTodo(index);
    } else if (elm.getAttribute('class') == 'chk') {
        index = elm.getAttribute('data-index');
        todolist.done(index);
    }
    todolist.render(ulList);
});

ulTab.addEventListener('click', (e) => {
    const elm = e.target;

    if (elm.getAttribute('class') == 'tabState') {
        document.querySelectorAll('.tabState').forEach((item) => {
            item.removeAttribute('class');
            item.setAttribute('class', 'tabState');
        });
        elm.setAttribute('class', 'tabState active');

        const state = elm.getAttribute('data-state');
        todolist.state = state;
        todolist.render(ulList);
    }
});

btnClear.addEventListener('click', (e) => {
    todolist.data = todolist.data.filter(item => {
      return !item.done;
    });
    todolist.render(ulList);
})

todolist.data.push({
    index: 0,
    content: '把冰箱發霉的檸檬拿去丟',
    done: false
});
todolist.data.push({
    index: 1,
    content: '整理電腦資料夾',
    done: true
});
todolist.render(ulList);