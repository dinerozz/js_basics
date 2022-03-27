//  ==============TODO LIST====================
const todoList = document.querySelector('#todo-list')
const todoForm = document.querySelector('#todo-form')
const todoInput = document.querySelector('#todo-input')


const formHandler = (e) => {
    e.preventDefault()
    const taskText = todoInput.value  // записываем в переменную текст из инпута
    const createTask = document.createElement('li')
    const deleteBtn = document.createElement('button')

    deleteBtn.setAttribute('role', 'button')
    deleteBtn.addEventListener('click', function () {
        this.closest('li')
    })

    deleteBtn.innerText = 'Удалить'
    deleteBtn.style.marginLeft = '15px'
    createTask.textContent = taskText
    todoList.append(createTask)
    createTask.append(deleteBtn)
    todoInput.value = ''
    todoInput.focus() // делаем фокус на инпуте
}

todoForm.addEventListener('submit', formHandler)

