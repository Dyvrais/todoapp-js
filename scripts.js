let table = document.getElementById("table");
let addBtn = document.querySelector(".add");
let doneBtn = document.querySelector(".done");
let removeBtn = document.querySelector(".remove");
let newTask = document.getElementById("entry");

//Add task to the table
 function addTask(){
    if(newTask.value === ""){
      alert('Please fill the text field');
    } else {
      const row = document.createElement('tr');
      let taskValue = newTask.value;
      row.innerHTML = `
      <td>${taskValue}</td>
      <td><input type="button" value="Done" class="done" onclick="checkTask(this)"></input></td>
      <td><input type="button" value="Remove" class="remove" onclick="removeTask(this)"></input></td>
      `;
  
      table.appendChild(row);
  
      newTask.value = "";
    }
    
  }


//Check task in table
  function checkTask(btn){
    var row = btn.parentNode.parentNode;
    row.classList.toggle("checked");
  }

//Remove task from table
  function removeTask(btn){
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }


addBtn.addEventListener("click", addTask);
newTask.addEventListener("keypress", function(e){
  if (e.key === "Enter"){
    e.preventDefault();
    addBtn.click();
  }
});
