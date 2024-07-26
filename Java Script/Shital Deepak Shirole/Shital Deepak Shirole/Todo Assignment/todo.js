let todoList = [{
    item: 'buy milk',
    duedate: '4/10/2024',
},
{
    item: 'buy milk',
    duedate: '4/10/2024',
}];
showItems();

function addTodo() {
    let inputElement = document.getElementById('task').value;
    // console.log(inputElement);
    let dateelement = document.getElementById('tododate').value;
    todoList.push({ item: inputElement, duedate: dateelement });
    document.getElementById('task').value = '';
    document.getElementById('tododate').value='';
    // dateelement= '';
    showItems();

}
function showItems() {
    let containerelement = document.querySelector('.todo-container');
    let newHtml = '';
    for (let i = 0; i < todoList.length; i++) {

        newHtml += `<span>${todoList[i].item}</span>
                    <span>${todoList[i].duedate}</span>
                   <button onclick="todoList.splice(${i},1);showItems();">Delete</button>`;
    }
    containerelement.innerHTML = newHtml;
}