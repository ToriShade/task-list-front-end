import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = (props) => {
  const getTaskListJSX = (props) => {
    return props.tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          is_complete={task.is_complete}
          onClickCallback={props.onClickCallback}
          onDeleteCallback={props.onDeleteCallback}
        />
      );
    });
  };
  return <ul className="tasks__list no-bullet">{getTaskListJSX(props)}</ul>;
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      // eslint-disable-next-line camelcase
      is_complete: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onClickCallback: PropTypes.func,
  onDeleteCallback: PropTypes.func,
};

export default TaskList;
