function onReady() {
    let toDos = [];
    let id = 0;
    const addToDoForm = document.getElementById('addToDoForm');

 function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
    title: newToDoText.value,
    complete: false,
    id: id ++
  });

   newToDoText.value = '';

   renderTheUI();
  }

  function remove(id){
    return toDos.filter(toDo => toDo.id !==id);
  }

  addToDoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
   newToDoText.value ='';
 });

  function renderTheUI() {
     const toDoList = document.getElementById('toDoList');
     toDoList.textContent = '';
     toDos.forEach(function(toDo) {
       const newLi = document.createElement('li');
       const checkbox = document.createElement('input');
       checkbox.type = "checkbox";
       const deletBtn = document.createElement('button')
deletBtn.innerHTML = '<span>Delete</span>';

        newLi.textContent = toDo.title;
        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
        newLi.appendChild(deletbtn);

        deletBtn.addEventListener('click', () => {
          toDos =remove(toDo.id);
          renderTheUI();
        });
    });
  }

  renderTheUI();
}

window.onload = function() {
  onReady();
};
