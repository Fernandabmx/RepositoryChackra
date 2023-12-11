import React, { useState, useEffect } from 'react';

const MyReactTaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', completed: false });
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    // Cargar tareas desde localStorage al iniciar la aplicación
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Guardar tareas en localStorage cada vez que se actualizan
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    // Agregar una nueva tarea al listado
    setTasks([...tasks, { ...newTask }]);
    setNewTask({ title: '', description: '', completed: false });
  };

  const deleteTask = (index) => {
    // Eliminar una tarea del listado
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    // Habilitar la edición de una tarea
    setEditingTask(index);
  };

  const saveEditedTask = (index) => {
    // Guardar los cambios realizados en la tarea editada
    setEditingTask(null);
  };

  const toggleTaskCompleted = (index) => {
    // Cambiar el estado de completado de una tarea
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Lista de tareas Maria Fernanda</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {editingTask === index ? (
              <div>
                <input
                  type="text"
                  value={task.title}
                  onChange={(e) => {
                    const updatedTasks = [...tasks];
                    updatedTasks[index].title = e.target.value;
                    setTasks(updatedTasks);
                  }}
                />
                <input
                  type="text"
                  value={task.description}
                  onChange={(e) => {
                    const updatedTasks = [...tasks];
                    updatedTasks[index].description = e.target.value;
                    setTasks(updatedTasks);
                  }}
                />
                <button onClick={() => saveEditedTask(index)}>Save</button>
              </div>
            ) : (
              <div>
                <strong>{task.title}</strong>
                <p>{task.description}</p>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompleted(index)}
                />
                <button onClick={() => editTask(index)}>Edit</button>
                <button onClick={() => deleteTask(index)}>Delete</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Ingrese un titulo para su tarea"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Ingrese una descripción para su tarea"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
        />
        <button onClick={addTask}>Agregar Tarea</button>
      </div>
    </div>
  );
};

export default MyReactTaskList;
