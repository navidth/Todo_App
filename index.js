//................dark mode....................

const html = document.getElementById("html");
const mode = document.getElementById("mode");
const changer = document.querySelectorAll('a.changer');
const body = document.getElementById('body');
function changeMode(){
    mode.classList.toggle("bi-moon-fill");
    mode.classList.toggle("bi-sun");
    body.classList.toggle('bg-desktop-dark');
    body.classList.toggle('bg-desktop-light');
    const currentTheme = html.getAttribute('data-bs-theme');
    if(currentTheme ==='dark'){
        html.setAttribute('data-bs-theme','light')
    }else{
        html.setAttribute('data-bs-theme','dark')
    }
    changer.forEach(link=>{
        link.classList.toggle('fs-mini-light');
    })
  };

    //...............................counter elemnt...................
    function countItems() {
        var itemElements = document.querySelectorAll('#save-todo li:not(.d-none)');
        var countElement = document.getElementById('counter');
        countElement.textContent = itemElements.length-1 + ' items';
    }
      window.addEventListener('DOMContentLoaded', countItems);

  //....................click on circle or LI .........................


const listitem = document.querySelectorAll('.todo-writed')
const circleitem =document.querySelectorAll(".bi-circle");
const div1 =document.querySelectorAll('.div1');
div1.forEach(function(method){
    method.addEventListener('click',Commpeletee)
})
function Commpeletee(event) {
    const clickedItem = event.currentTarget;
    const circleitem = clickedItem.querySelectorAll(".bi-circle");
    const listitem = clickedItem.querySelectorAll('.todo-writed');

    circleitem.forEach(function (itemm) {
        if (itemm.classList.contains('bi-circle-bg')) {
            itemm.classList.remove('bi-circle-bg');
        } else {
            itemm.classList.add('bi-circle-bg');
        }
    });

    listitem.forEach(function (item) {
        if (item.classList.contains('opacity-50', 'text-decoration-line-through')) {
            item.classList.remove('opacity-50', 'text-decoration-line-through');
        } else {
            item.classList.add('opacity-50', 'text-decoration-line-through');
        }
    });
}

  //................................add Todo.............................


  const adtodo = document.getElementById("add-todo");
  const savetodo =document.getElementById("save-todo");
  const enter = document.getElementById("text");
  const footerlsit = document.getElementById("footer-todo");
function addTodo(){
    let text = enter.value;
    if (text.trim() === '') {
        return; // اگر متن خالی باشد، عملیات اضافه کردن انجام نشود
      }
    let todoItem = document.createElement('li');
    todoItem.classList.add('list-group-item','py-3','border-start-0', 'border-end-0','d-flex','justify-content-between');

    let diva = document.createElement('div');
    diva.classList.add('div1');
    
    let circleIcon = document.createElement('i');
    circleIcon.classList.add('bi', 'bi-circle', 'corsure-pointed', 'me-3');
    
    let todoText = document.createElement('span');
    todoText.classList.add('corsure-pointed', 'todo-writed','ms-2');
    todoText.textContent = text;
    
    let closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('id', 'delete-btn');
    closeButton.classList.add('btn-close', 'float-end');

    todoItem.appendChild(diva);
    diva.appendChild(circleIcon);
    circleIcon.appendChild(todoText);
    todoItem.appendChild(closeButton);
    savetodo.appendChild(todoItem);
    
    enter.value = '';
    
    savetodo.insertBefore(todoItem,footerlsit);
      // فراخوانی تابع Commpeletee بر روی آیتم جدید
    diva.addEventListener('click', Commpeletee);
    closeButton.addEventListener('click',close);
    todoItem.addEventListener('close',closeAll);
    countItems();
}

//..............................button close......................... 

let deleteButtons = document.querySelectorAll("#delete-btn");
deleteButtons.forEach(function(button) {
  button.addEventListener("click",close)
  });
  function close(){
    this.parentNode.remove(); //delete elemnt parent button
    countItems();
  }


//........................button close all............................

let deleteall = document.getElementById('delete-all');
deleteall.addEventListener('click',closeAll);
function closeAll(){
 const listtodo= document.querySelectorAll('.list-group-item')
 listtodo.forEach(function(li){
    li.classList.add('d-none')
})
countItems();
}

//.....................button select all..............................
const selectAllButton = document.getElementById('select-all');
selectAllButton.addEventListener('click', selectAll)
function selectAll(){
    const circleitem = document.querySelectorAll(".bi-circle");
    const listitem = document.querySelectorAll('.todo-writed');
    circleitem.forEach(function(item) {
    item.classList.add('bi-circle-bg');
  });

  listitem.forEach(function(item) {
    item.classList.add('opacity-50', 'text-decoration-line-through');
  });}