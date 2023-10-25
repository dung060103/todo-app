import React, { Component } from 'react';

import PageHeader from '../template/pageheader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
	render() {
		return (
			<div>
				<PageHeader name="Dashboard" small="Register" />
				<TodoForm />
				<TodoList />
			</div>
		);
	}
}