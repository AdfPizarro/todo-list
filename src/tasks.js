let taskList = [];

if(localStorage.getItem("taskList")=== null){
    taskList=[];
}else{
    taskList=JSON.parse(localStorage.getItem("taskList"));

}

const Task = (name, description, priority, project, dueDate, completed) => {
  return {name, description, priority, project, dueDate, completed};
};

const TaskHTML = (task) => {
  const taskItem=document.createElement('tr');

  const tdName=document.createElement('td');
  const tdDescription=document.createElement('td');
  const tdPriority=document.createElement('td');
  const tdDueDate=document.createElement('td');
  const tdCompleted=document.createElement('td');
  const chkCompleted=document.createElement('input');

  tdName.textContent=task.name
  tdDescription.textContent=task.description
  tdPriority.textContent=task.priority
  tdDueDate.textContent=task.dueDate
  chkCompleted.setAttribute('type', 'checkbox');
  chkCompleted.setAttribute('value', task.completed);

  tdCompleted.appendChild(chkCompleted);
  taskItem.appendChild(tdName);
  taskItem.appendChild(tdDescription);
  taskItem.appendChild(tdPriority);
  taskItem.appendChild(tdDueDate);

  taskItem.appendChild(tdCompleted);


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
  head_completed.textContent = "Completed";



  th_row.appendChild(head_name);
  th_row.appendChild(head_description);
  th_row.appendChild(head_priority);
  th_row.appendChild(head_dueDate);
  th_row.appendChild(head_completed);

  thead.appendChild(th_row);
  taskView.appendChild(thead);


  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].project == projectName || projectName==="all"){
      const task = TaskHTML(taskList[i])
      tbody.appendChild(task);
    }
  }

  taskView.appendChild(tbody)
  return taskView;
}

export  {addTask, drawTasksByProject};
