import { useState } from 'react';
import Todo from './Todo';
import './App.css';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

function App() {
  const [todos, setTodas] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault()
    setTodas([...todos, input]);
    setInput('');
  };

 return (
    <div className="App">
      <h1>Let's get started</h1>
      <form>
        <FormControl>
          <InputLabel>Enter Todo</InputLabel>
          <Input
             value={input} 
             onChange={event => setInput(event.target.value)} 
             id="my-input" 
             aria-describedby="my-helper-text" />

        </FormControl>
        <Button
           variant="contained"
           color="primary"
           type="submit"
            onClick={addTodo}
            disabled={!input}>
              ADD Todo
              </Button>

      </form>

      <ul>
        {todos.map((todo,i) => (
         <Todo
          key={i} 
          text={todo}/>
        ))}

      </ul>
    </div>
  );
}

export default App;
