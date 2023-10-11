import React, { useState } from 'react';
import '../styles/TodoItem.css';

function TodoItem(props) {
    const [completed, setCompleted] = useState(false);
  
    
    return (
        <li className='task-item'>
        <label className='custom-checkbox'>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => setCompleted(!completed)}
          />
          {completed ? <span id='completedd'>{props.text}</span> : <span>{props.text}</span>}
          <span className="checkmark"></span>
        </label>
        <div className='task-text-add'> 
        <button onClick={props.onDelete}className='button-delete'>Excluir</button></div>
      </li>
    );
  }


export default TodoItem;