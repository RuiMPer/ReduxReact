const initialState = [
	{ id: "zejldcs6zpkebjjvjr", name: "Walk the dog" },
	{ id: "ums8j0t5559kebjkoho", name: "Buy groceries" },
];

export default function todos(state = [], action) {
	switch (action.type) {
		default:
			return initialState;
	}
}
