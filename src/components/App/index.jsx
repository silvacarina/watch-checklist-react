import React from 'react';
import useLocalStorageState from 'use-local-storage-state';
import Logo from '../Logo';
import FormAddTask from '../FormAddTask';
import TaskList from '../TaskList';
import './style.css';

function App() {
  const [tasks, setTasks] = useLocalStorageState('tasks', {
    defaultValue: [],
  });

  const tasksMovie = tasks.filter((task) => task.checked === false && task.category === 'movie');
  const tasksMoviesWatched = tasks.filter((task) => task.checked === true && task.category === 'movie');
  const tasksSerie = tasks.filter((task) => task.checked === false && task.category === 'serie');
  const tasksSeriesWatched = tasks.filter((task) => task.checked === true && task.category === 'serie');

  const addTask = (task) => {
    const newTasks = [...tasks];
    newTasks.push(task);
    setTasks(newTasks);
  };

  const removeTask = (task) => {
    const newTasks = [...tasks];
    const taskToRemove = tasks.findIndex((item) => item.id === task.id);
    newTasks.splice(taskToRemove, 1);
    setTasks(newTasks);
  };

  const updateTaskChecked = (task) => {
    const newTasks = [...tasks];
    const taskToUpdate = newTasks.findIndex((item) => item.id === task.id);
    newTasks[taskToUpdate].checked = !newTasks[taskToUpdate].checked;
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <div className="app-form-container">
        <Logo />
        <FormAddTask addTask={addTask} />
      </div>
      <div className="app__tasks-container">
        <TaskList title="Filmes" tasks={tasksMovie} removeTask={removeTask} updateTaskChecked={updateTaskChecked} />
        <TaskList title="Filmes Assistidos" tasks={tasksMoviesWatched} removeTask={removeTask} updateTaskChecked={updateTaskChecked} />
      </div>
      <div className="app__tasks-container">
        <TaskList title="Séries" tasks={tasksSerie} removeTask={removeTask} updateTaskChecked={updateTaskChecked} />
        <TaskList title="Séries Assistidas" tasks={tasksSeriesWatched} removeTask={removeTask} updateTaskChecked={updateTaskChecked} />
      </div>
    </div>
  );
}

export default App;
