let projectList=[];

if(localStorage.getItem("projectList")=== null){
    projectList=[]
}else{
    projectList=JSON.parse(localStorage.getItem("projectList"));


}



const Project = (name) => {
  return {name};
};

const projectHTML = (project) => {
  const projectItem = document.createElement('div');
  projectItem.setAttribute('class', 'd-flex flex-column');

  const projectName = document.createElement('h4');
  projectName.textContent = project.name;
  projectItem.appendChild(projectName);

  return projectItem;
};

function addProject(name) {
  const project = {name: Project(name)};
  projectList.push(project);
  localStorage.setItem('projectList', JSON.stringify(projectList));
  return drawProjects();
};

function drawProjects(){
  let projectsView = document.createElement('div');
  for (let i = 0; i < projectList.length; i += 1) {
    const project = projectHTML(projectList[i].name)
    projectsView.appendChild(project);
  }
  return projectsView;

};

function getProjects() {
  const taskProject = document.querySelector("#taskProject");
  taskProject.innerHTML = '';
  const projectOption = document.createElement("Option");
  projectOption.textContent = "Default";
  taskProject.appendChild(projectOption);
  for (let i = 0; i < projectList.length; i += 1) {
    const projectOption = document.createElement("Option");
    projectOption.textContent = projectList[i].name;
    taskProject.appendChild(projectOption);
  }
};

export {addProject, getProjects, drawProjects};
