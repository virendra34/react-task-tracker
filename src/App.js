import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  const name = 'trimmlet';
  const flag = !true;
  const [showAddTask, setShowAddtask] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    }
    getTasks();
  }, []);
  const editTask = (id) => {
    console.log('edit');
  }

  const fetchTasks = async (id = null) => {
    let res = null;
    if (id !== null) {
      res = await fetch(`http://localhost:5000/tasks/${id}`);
    } else {
      res = await fetch('http://localhost:5000/tasks');
    }
    const data = res.json();
    return data;
  }

  const deleteTask = async (id) => {
    // const task = tasks.filter((task) => {
    //   return task.id !== id ? task : false;
    // });
    // setTasks(task);
    setTasks(tasks.filter((task) => task.id !== id));
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    });
  }

  const addTask = async (task) => {
    // const id = tasks.length + 1;
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);
  }

  const toggleReminder = async (id) => {
    // setTasks(
    //   tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task)
    // );
    const taskToToggle = await fetchTasks(id);
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
    console.log(updateTask);
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask),
    });
    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !taskToToggle.reminder } : task));
  }

  const onAdd = () => {
    setShowAddtask(!showAddTask);
  }
  return (
    <Router>
      <div className="container">
        {/* <Header onAdd={onAdd} /> */}
        <Header onAdd={() => { setShowAddtask(!showAddTask) }} showAdd={showAddTask} />
        {showAddTask && <AddTask onAdd={addTask} />}
        <Route path="/" exact render={(props) => (
          <>
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          </>
        )} />
        <Route path="/about" exact component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
