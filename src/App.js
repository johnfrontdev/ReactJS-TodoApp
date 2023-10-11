import React, { useState, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import './styles/App.css';
import './styles/AddTask.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const taskInputRef = useRef();

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  function handleKeyDown(event) {
    if (event.key === 'Enter') { // Verifique se a tecla pressionada é 'Enter'
      addTask();
      taskInputRef.current.blur(); // Para remover o foco do campo de entrada
    }
  }

  return (
    <div>
      <Header /> {/* Renderize o componente Header aqui */}
      <div className='componente-adicionar-tarefa'>
        <input
          type="text"
          className='input-box'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          ref={taskInputRef}
          placeholder='O que gostaria de fazer hoje?'
        />
        <button onClick={addTask} className='button-add'>Adicionar Tarefa</button>
      </div>
      <TodoList>
          {tasks.map((task, index) => (
      <TodoItem key={index} text={task} onDelete={() => deleteTask(index)} />
    ))}

      </TodoList>
      <Footer /> {/* Renderize o componente Footer aqui */}
    </div>
  );
}

export default App;
