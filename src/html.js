const htmlBody = `
<div class="content container d-flex">

  <div class="w-25 mx-2">
    <div class="d-flex">
      <h1>Projects</h2>
        <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#projectFormModal">
          Add New Project
        </button>
    </div>
    <div id="projectContainer">

    </div>
  </div>

  <div class="w-75 mx-2">
    <div class="d-flex">
      <h1>Tasks</h2>
      <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#taskFormModal">
        Add New Task
      </button>
    </div>
    <div id="taskContainer">

    </div>
  </div>

  <div class="modal fade" id="taskFormModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="card d-flex">
          <div class="card-body">
            <form>
              <label for="taskName" class="form-label">Task</label>
              <input type="text" class="form-control" id="taskName">

              <label for="taskDescription" class="form-label">Description</label>
              <input type="text" class="form-control" id="taskDescription">

              <label for="taskPriority" class="form-label">Priority</label>
              <select class="form-select" aria-label="Default select example" id="taskPriority">
                <option value="Low">Low</option>
                <option value="Normal" selected>Normal</option>
                <option value="Urgent">Urgent</option>
              </select>

              <label for="taskProject" class="form-label">Project</label>
              <select class="form-select" aria-label="Default select example" id="taskProject">
                <option selected>Default</option>
              </select>

              <label for="taskDueDate" class="form-label">Due date</label>
              <input type="date" class="form-control" id="taskDueDate">

              <br>
              <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal" id="taskSubmit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="projectFormModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="card d-flex">
          <div class="card-body">
            <form>
              <label for="projectName" class="form-label">Project</label>
              <input type="text" class="form-control" id="projectName">
              <br>
              <button type="button" class="btn btn-outline-success" data-bs-dismiss="modal" id="projectSubmit">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

export {htmlBody};
