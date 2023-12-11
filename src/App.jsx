
  import Header from './Header';
  import TaskList from './TaskList';
  import Task from './Task';
  
  function App  (){
    const task = [
      { name: 'Hacer la compra', completed: false },
      { name: 'Hacer ejercicio', completed: true },
      // Agrega más tareas según sea necesario
    ];
  
    return (
      <div>
        <Header />
              <TaskList task={task} />
              <task/>
               </div>
    );
  }
  
export default App;
