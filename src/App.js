import { useState } from 'react';
import './App.css';

function App() {
  const [todos ,setTodas] = useState(['1','2','3','4']);
  return (
    <div className="App">
      <h1>Let's get started</h1>
      <input />
      <button>Todo</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
