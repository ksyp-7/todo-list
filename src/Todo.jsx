import { List,ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react';
import Button from '@material-ui/core/Button';
import db from './firebase';

function Todo(props) {
	return (
	<List className="todo_list">
	<ListItem>
	<ListItemAvatar>
	</ListItemAvatar>
	<ListItemText primary={props.todo.todo} secondary="Dummy Dead-Line" />
	</ListItem>
	<Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>🇽 Delete</Button>
	</List>
	)

}

export default Todo
