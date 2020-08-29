import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/actionTypes";

//This will come from an API
const initialState = [
	{ id: "zejldcs6zpkebjjvjr", name: "Walk the dog", complete: false },
	{ id: "ums8j0t5559kebjkoho", name: "Buy groceries", complete: false },
];

export default function todos(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return state.concat(action.todo);
		case REMOVE_TODO:
			console.log(action);
			return state.filter((todo) => todo.id !== action.id);
		case TOGGLE_TODO:
			console.log(action);
			return state.map((todo) =>
				todo.id === action.todo.id
					? { ...todo, completed: !todo.completed }
					: todo
			);
		default:
			console.log("todos", state);
			return state;
	}
}
