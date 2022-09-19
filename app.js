const addTodoForm = document.querySelector('.addTodoForm');
const todosList = document.querySelector('.todosList');
const search = document.querySelector('.search input');

//Generating a todo item in dom
const generateNewTodo = todo => {

    const todoHtmlTag = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    todosList.innerHTML += todoHtmlTag;

}

addTodoForm.addEventListener('submit', e => {
    e.preventDefault()
    //Getting new todo formated
    const todo = addTodoForm.addTodo.value.trim();

    if(todo.length > 2) {

        generateNewTodo(todo);
        addTodoForm.reset();
    }
})

todosList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove()
    }
})


// To filter todos 
const filterTodos = (keyword) => {
    //Convert this html collection of todos to an array
    const todosListAray = Array.from(todosList.children)
    todosListAray.filter(item => !item.textContent.toLowerCase().includes(keyword))
                .forEach(item => item.classList.add('filtered'))

    todosListAray.filter(item => item.textContent.toLowerCase().includes(keyword))
    .forEach(item => item.classList.remove('filtered'))
}
//Listen to input search

search.addEventListener('keyup', () => {
    const keyword = search.value.trim().toLowerCase();

    filterTodos(keyword)
})