import React, { Component } from "react";

import "./App.css";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { connect } from "react-redux";

class App extends Component {
	// state = {
	// 	todos: [],
	// };

	// addNewTodo = (newTodo) => {
	// 	const todos = this.state.todos.concat(newTodo);
	// 	this.setState({ todos: todos });
	// };

	// removeTodo = (todoID) => {
	// 	const todos = this.state.todos.filter((todo) => todo.id !== todoID);
	// 	this.setState({ todos: todos });
	// };

	render() {
		console.log("this", this.props);
		return (
			<div className="App">
				<div> Welcome {this.props.loggedUser.username}</div>
				{/* <AddTodo onAddNewTodo={this.addNewTodo} /> */}
				{/* <TodoList onRemoveTodo={this.removeTodo} todos={this.state.todos} /> */}
				<AddTodo />
				<TodoList />
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		loggedUser: state.loggedUser,
	};
};

export default connect(mapStateToProps)(App);
