let taskList = [];

if(localStorage.getItem("taskList")=== null){
    taskList=[];
}else{
    taskList=JSON.parse(localStorage.getItem("taskList"));

}

const Task = (name, description, priority, project, dueDate) => {
  return {name, description, priority, project, dueDate};
};

const TaskHTML = (task) => {
  const taskItem = document.createElement('div');
  taskItem.setAttribute('class', 'd-flex flex-column');

  const itemName = document.createElement('h4');

  const itemBottom = document.createElement('div');
  itemBottom.setAttribute('class', 'd-flex justify-content-between');

  const itemDescription = document.createElement('p');
  const itemProject = document.createElement('p');
  const itemDueDate = document.createElement('p');

  itemName.textContent = task.name;
  itemDescription.textContent = task.description;
  itemProject.textContent = task.project;
  itemDueDate.textContent = task.dueDate;

  itemBottom.appendChild(itemDescription);
  itemBottom.appendChild(itemProject);
  itemBottom.appendChild(itemDueDate);

  taskItem.appendChild(itemName);
  taskItem.appendChild(itemBottom);

  return taskItem;
};

function addTask(name, description, priority, project, dueDate) {
  const task =  Task(name, description, priority, project, dueDate);
  taskList.push(task);
  localStorage.setItem('taskList', JSON.stringify(taskList));

  return drawTasks();
};

function drawTasks(){
  let taskView = document.createElement('div');
  for (let i = 0; i < taskList.length; i += 1) {
    const task = TaskHTML(taskList[i])
    taskView.appendChild(task);
  }
  return taskView;
}

function drawTasksByProject(projectName){
  let taskView = document.createElement('div');
  for (let i = 0; i < taskList.length; i += 1) {
    if (taskList[i].project == projectName){
      const task = TaskHTML(taskList[i])
      taskView.appendChild(task);
    }
  }
  return taskView;
}

export  {addTask, drawTasks, drawTasksByProject};
