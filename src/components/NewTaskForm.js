/* eslint-disable camelcase */
import './NewTaskForm.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

const defaultTask = { title: '', description: '', is_complete: false };

const NewTaskForm = (props) => {
  const [taskData, setTaskData] = useState(defaultTask);

  const handleFormInput = (event) => {
    const inputElement = event.target;
    const name = inputElement.name;
    const value = inputElement.value;

    const newTaskData = { ...taskData };
    newTaskData[name] = value;
    setTaskData(newTaskData);
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    props.handleSubmission(taskData);
  };

  return (
    <form onSubmit={handleFormSubmission} className="new-task__form">
      <section>
        <h2>Ad a New Task</h2>
        <div className="new-task__fields">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={taskData.name}
            onChange={handleFormInput}
          />
        </div>
        <div className="new-task__fields">
          <label htmlFor="description">Description</label>
          <input
            name="description"
            value={taskData.description}
            onChange={handleFormInput}
          />
        </div>
        <button className="button new-task__submit" type="submit">
          Submit
        </button>
      </section>
    </form>
  );
};

NewTaskForm.propTypes = {
  handleSubmission: PropTypes.func.isRequired,
};

export default NewTaskForm;
