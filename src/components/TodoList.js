import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTodoAction, toggleTodoAction } from "../actions/todos";

class TodoList extends Component {
	render() {
		if (this.props.loggedUser.type === "admin") {
		return (
			<ul>
				{this.props.todos.map((todo) => {
					return (
						<li key={todo.id}>
							<span
								style={{
									textDecoration: todo.completed ? "line-through" : "none",
								}}
								onClick={() => this.props.handleToggleTodo(todo)}
							>
								{todo.name}
							</span>
							<button onClick={() => this.props.handleRemoveTodo(todo.id)}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		);
		} else {
			return <div>You don't have the right priveligies</div>
		}


	}
}

//Maps the state that lives in the reducer to the this.props of this component
const mapStateToProps = (state) => {
	return {
		todos: state.todos,
		loggedUser: state.loggedUser
	};
};

const mapDispacthToProps = (dispatch) => ({
	handleRemoveTodo: (id) => dispatch(removeTodoAction(id)),
	handleToggleTodo: (todo) => dispatch(toggleTodoAction(todo)),
});

export default connect(mapStateToProps, mapDispacthToProps)(TodoList);
