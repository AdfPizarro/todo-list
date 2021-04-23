let projectList = [];

if (localStorage.getItem('projectList') === null) {
  projectList = [];
} else {
  projectList = JSON.parse(localStorage.getItem('projectList'));
}

const Project = (name) => ({ name });

const projectHTML = (project) => {
  const projectItem = document.createElement('div');
  projectItem.setAttribute('class', 'd-flex flex-column');

  const projectName = document.createElement('a');
  projectName.setAttribute('class', 'projectButton text-decoration-none');
  projectName.setAttribute('href', '#');
  projectName.textContent = project.name;
  projectItem.appendChild(projectName);

  return projectItem;
};

function drawProjects() {
  const projectsView = document.createElement('div');
  const projectDefault = document.createElement('a');
  projectDefault.setAttribute('class', 'projectButton text-decoration-none');
  projectDefault.setAttribute('href', '#');
  projectDefault.textContent = 'Default';
  projectsView.appendChild(projectDefault);

  for (let i = 0; i < projectList.length; i += 1) {
    const project = projectHTML(projectList[i].name);
    projectsView.appendChild(project);
  }
  return projectsView;
}

function addProject(name) {
  const project = { name: Project(name) };
  projectList.push(project);
  localStorage.setItem('projectList', JSON.stringify(projectList));
  return drawProjects();
}

function getProjects() {
  const taskProject = document.querySelector('#taskProject');
  taskProject.innerHTML = '';
  const projectOption = document.createElement('Option');
  projectOption.textContent = 'Default';
  taskProject.appendChild(projectOption);
  for (let i = 0; i < projectList.length; i += 1) {
    const projectOption = document.createElement('Option');
    projectOption.textContent = projectList[i].name.name;
    taskProject.appendChild(projectOption);
  }
}

export { addProject, getProjects, drawProjects };
