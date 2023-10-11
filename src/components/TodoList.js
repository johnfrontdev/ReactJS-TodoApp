import React from 'react';
import '../styles/TodoList.css';

function TodoList(props) {
  return (
    <div className='container'>
      <ul>
        {props.children}
      </ul>
    </div>
  );
}

export default TodoList;
