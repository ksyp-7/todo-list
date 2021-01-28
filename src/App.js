import { useEffect, useState } from 'react';
import Todo from './Todo';
import './App.css';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import db from './firebase';
import firebase from 'firebase';


function App() {
  const [todos, setTodas] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    db.collection('todos').orderBy('timestap', 'desc').onSnapshot(snapshot => {
      setTodas(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todos })))
    })

  }, []);
  const addTodo = (event) => {
    event.preventDefault()
    db.collection('todos').add({
      todos: input,
      timestap: firebase.firestore.FieldValue.serverTimestamp()

    })
    setInput('');
  };

  return (
    <div className="App">
      <h1>Let's get started</h1>
      <form>
        <FormControl>
          <InputLabel>Enter Todo ✏</InputLabel>
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
        {todos.map((todo, i) => (
          <Todo
            key={i}
            todo={todo} />
        ))}

      </ul>
    </div>
  );
}

export default App;
