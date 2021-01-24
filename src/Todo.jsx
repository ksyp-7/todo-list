import { List,ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'

function Todo(props) {
	return (
	<List>
	<ListItem>
	<ListItemAvatar>
	</ListItemAvatar>
	<ListItemText primary="Todo" secondary={props.text} />
	</ListItem>
	</List>
	)

}

export default Todo