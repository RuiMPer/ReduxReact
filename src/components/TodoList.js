import React, { Component } from "react";
import { connect } from "react-redux";

class TodoList extends Component {
	render() {
		return (
			<ul>
				{this.props.todos.map((todo) => {
					return (
						<li key={todo.id}>
							<span>{todo.name}</span>
							<button onClick={() => this.props.onRemoveTodo(todo.id)}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		);
	}
}

//Maps the state that lives in the reducer to the this.props of this component
const mapStateToProps = (state) => {
	return {
		todos: state.todos,
	};
};

export default connect(mapStateToProps)(TodoList);
