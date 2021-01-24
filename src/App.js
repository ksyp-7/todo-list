import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodas] = useState(['1', '2', '3', '4']);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault()
    setTodas([...todos, input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Let's get started</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)} />
        <button type="submit" onClick={addTodo}>Todo</button>

      </form>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}

      </ul>
    </div>
  );
}

export default App;
