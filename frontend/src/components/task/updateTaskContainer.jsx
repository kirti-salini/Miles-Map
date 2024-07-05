import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { updateTask } from "../../actions/taskActions";
import { closeModal } from "../../actions/modalActions";

const UpdateTaskForm = (props) => {
  const { task, updateTask, closeModal } = props;

  const [state, setState] = useState({
    _id: task._id,
    description: task.description,
    status: task.status,
    projectId: task.projectId,
    assignedUser: task.assignedUser,
  });

  useEffect(() => {
    if (task) {
      setState({
        _id: task._id,
        description: task.description,
        status: task.status,
        projectId: task.projectId,
        assignedUser: task.assignedUser,
      });
    }
  }, []);

  const handleUpdate = (field) => {
    return (e) => setState({ ...state, [field]: e.currentTarget.value });
  };

  const [error, setError] = useState({
    empty: false,
    length: false
  });

  const handleError = () => {
    if (state.description.length === 0) {
      setError({empty: true});
      return true;
    } 
    else if (state.description.length > 120) {
      setError({length: true});
      return true;
    }
    else {
      setError(false);
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const taskError = handleError();

    if (!taskError) {
      updateTask(state);
      setState({ description: state.description });
      closeModal();
    }
  };

  return (
    <div className="task-form-container">
      <h1>Update Task</h1>
      <form className="form-content" onSubmit={handleSubmit}>
        <label className="form-label">
          Task:
          <input
            type="text"
            placeholder="Describe your task"
            value={state.description}
            onChange={handleUpdate("description")}
          />
          {error.empty ? (
            <p className="task-error">Task description cannot be empty!</p>
          ) : null}
          {error.length ? (
            <p className="task-error">Task description cannot be longer than 120 characters!</p>
          ) : null}
        </label>

        <div className="button-container">
          <button type="submit">Submit</button>
          <button onClick={props.closeModal}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateTask: (task) => dispatch(updateTask(task)),
  closeModal: () => dispatch(closeModal()),
});

export default connect(null, mapDispatchToProps)(UpdateTaskForm);
