import React from 'react';
import PropTypes from 'prop-types';
import './Task.css';

const Task = (props) => {

  const buttonClass = props.isComplete ? 'tasks__item__toggle--completed' : '';

  const flipWhenCompleted = () => {
    props.onClickCallback(props.id);
  };

  const deleteTask = () => {
    props.onDeleteCallback(props.id);
  };
  return (
    <li className='tasks__item'>
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        // onClick={() => setComplete(!complete)}
        // onClick={() => flipWhenCompleted(props.id)}
        onClick={flipWhenCompleted}
      >
        {props.title}
      </button>
      <button 
        className='tasks__item__remove button'
        data-testid={`delete button ${props.id}`}
        onClick={deleteTask}
      >
        x
      </button>

    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onClickCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default Task;
