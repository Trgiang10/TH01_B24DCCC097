import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h2>Bài 1: To-do List</h2>
      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc"
      />
      <button onClick={addTask}>Thêm</button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t} <button onClick={() => removeTask(i)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
