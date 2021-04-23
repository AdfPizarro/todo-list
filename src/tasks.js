let taskList = [];

if(localStorage.getItem("taskList")=== null){
    taskList=[];
}else{
    taskList=JSON.parse(localStorage.getItem("taskList"));
}

const Task = (name, description, priority, project, dueDate, completed) => {
  return {name, description, priority, project, dueDate, completed};
};

const TaskHTML = (task, i) => {
  const taskItem=document.createElement('tr');

  const tdName=document.createElement('td');
  const tdDescription=document.createElement('td');
  const tdPriority=document.createElement('td');
  const tdDueDate=document.createElement('td');
  const tdCompleted=document.createElement('td');
  const chkCompleted=document.createElement('button');
  const dltButton=document.createElement('button');
  const priorityDropdown=document.createElement('select');
  const pLow=document.createElement('option');
  const pNormal=document.createElement('option');
  const pUrgent=document.createElement('option');

  pLow.textContent="Low";
  pNormal.textContent="Normal";
  pUrgent.textContent="Urgent";

  pLow.setAttribute('value', `Low`);
  pNormal.setAttribute('value', `Normal`);
  pUrgent.setAttribute('value', `Urgent`);

  priorityDropdown.appendChild(pLow);
  priorityDropdown.appendChild(pNormal);
  priorityDropdown.appendChild(pUrgent);
  priorityDropdown.value=task.priority;

  priorityDropdown.setAttribute('class', `form-select changePriority`);
  priorityDropdown.setAttribute('id', `changePriority${i}`);

  tdName.textContent=task.name
  tdDescription.textContent=task.description
  tdPriority.appendChild(priorityDropdown);
  tdDueDate.textContent=task.dueDate


  dltButton.setAttribute('id', `dlt${i}`);
  dltButton.setAttribute('class', `mx-2 btn btn-danger deleteTask`);
  dltButton.textContent="Delete"

  const btnColor = (task.completed) ? 'btn-success':'btn-danger';
  const btnText = (task.completed) ? 'Completed':'Pending';

  chkCompleted.setAttribute('class', `completTask btn ${btnColor}`);
  chkCompleted.setAttribute('id', `btnCompleted${i}`);
  chkCompleted.textContent = btnText;



  tdCompleted.appendChild(chkCompleted);
  taskItem.appendChild(tdName);
  taskItem.appendChild(tdDescription);
  taskItem.appendChild(tdPriority);
  taskItem.appendChild(tdDueDate);

  taskItem.appendChild(tdCompleted);
  tdCompleted.appendChild(dltButton);


  return taskItem;
};

function addTask(name, description, priority, project, dueDate) {
  const task =  Task(name, description, priority, project, dueDate, false);
  taskList.push(task);
  localStorage.setItem('taskList', JSON.stringify(taskList));

  return drawTasksByProject("all");
};

function drawTasksByProject(projectName){


  const taskView=document.createElement('table');
  const thead=document.createElement('thead');
  const th_row=document.createElement('tr');
  const head_name=document.createElement('th');
  const head_description=document.createElement('th');
  const head_priority=document.createElement('th');
  const head_dueDate=document.createElement('th');
  const head_completed=document.createElement('th');

  const tbody=document.createElement('tbody');

  taskView.setAttribute('class', 'table');
  thead.setAttribute('class', 'thead-dark');
  head_name.textContent = "Name";
  head_description.textContent = "Description";
  head_priority.textContent = "Priority";
  head_dueDate.textContent = "Due date";
  head_completed.textContent = "Options";



  th_row.appendChild(head_name);
  th_row.appendChild(head_description);
  th_row.appendChild(head_priority);
  th_row.appendChild(head_dueDate);
  th_row.appendChild(head_completed);

  thead.appendChild(th_row);
  taskView.appendChild(thead);


  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].project == projectName || projectName==="all"){
      const task = TaskHTML(taskList[i], i)
      tbody.appendChild(task);
    }
  }

  taskView.appendChild(tbody)
  return taskView;
}

function changeTask(index){
  if (taskList[index].completed){
    taskList[index].completed = false;
    const chkCompleted = document.getElementById(`btnCompleted${index}`)
    chkCompleted.setAttribute('class', `completTask btn btn-danger`);
    chkCompleted.textContent = "Pending";
  } else {
    taskList[index].completed = true;
    const chkCompleted = document.getElementById(`btnCompleted${index}`)
    chkCompleted.setAttribute('class', `completTask btn btn-success`);
    chkCompleted.textContent = "Completed";
  };
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function changePriority(index, priority){
  taskList[index].priority = priority;
  localStorage.setItem('taskList', JSON.stringify(taskList));
}


function dltTask(index){
  const task=taskList.splice(index, 1);

  localStorage.setItem('taskList', JSON.stringify(taskList));
  return drawTasksByProject(task[0].project)


}

export  {addTask, drawTasksByProject, changeTask, dltTask, changePriority};
