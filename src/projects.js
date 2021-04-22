const projectList = [];

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
  const project = Project(name);
  projectList.push(project);
  let projectsView = document.createElement('div');
  for (let i = 0; i < projectList.length; i += 1) {
    const project = projectHTML(projectList[i])
    projectsView.appendChild(project);
  }
  return projectsView;

};

export default addProject;
