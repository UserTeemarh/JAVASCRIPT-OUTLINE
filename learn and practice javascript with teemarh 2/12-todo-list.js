'use strict';


const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: 'wash dishes',
    dueDate: '2023-01-12'
}, {
    name: 'make dinner',
    dueDate: '2023-01-12'
}]
    ;
renderTodoList();

function renderTodoList() {

            let todoListHTML = '';

            todoList.forEach((todoObject,index) => { 
                  

            // todoObject = {name, dueDate}
            const {name, dueDate} = todoObject;console.log(index)
            // console.log (todo);
            const html = `
                <div>${name} </div>
                <div>${dueDate}</div>
                <button class="delete-todo-button">delete</button>
            `;
            // console.log(html);

            todoListHTML += html;
        
        // console.log(todoListHTML);

        document.querySelector('.js-todo-list').innerHTML = todoListHTML; 

            });


            document.querySelectorAll('.delete-todo-button').forEach((deleteButton, index) => {
                deleteButton.addEventListener('click', () =>{
                    todoList.splice(index, 1);
                    renderTodoList();
                    updateTodo();
                })
            });
        }



document.querySelector('.js-add-todo-button').addEventListener('click', () => {
    addTodo();
})

function addTodo() {
   const inputElement = document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
   const dueDate = dateInputElement.value;


   todoList.push({
    name: name,
    dueDate: dueDate
   });

   
   console.log(todoList);
   inputElement.value = '';
   renderTodoList();
   updateTodo();

}

function updateTodo() {
    localStorage.setItem('todoList', JSON.stringify(todoList))
}










