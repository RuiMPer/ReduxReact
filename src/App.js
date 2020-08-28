import React, { Component } from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

class App extends Component {
	// state = {
	// 	todos: [],
	// };

	addNewTodo = (newTodo) => {
		const todos = this.state.todos.concat(newTodo);
		this.setState({ todos: todos });
	};

	removeTodo = (todoID) => {
		const todos = this.state.todos.filter((todo) => todo.id !== todoID);
		this.setState({ todos: todos });
	};

	render() {
		return (
			<div className="App">
				<AddTodo onAddNewTodo={this.addNewTodo} />
				{/* <TodoList onRemoveTodo={this.removeTodo} todos={this.state.todos} /> */}
				<TodoList onRemoveTodo={this.removeTodo} />
			</div>
		);
	}
}

export default App;
