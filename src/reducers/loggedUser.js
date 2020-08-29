//This will come from an API
const initialState = {
	username: "miguel",
	type: "admin",
};
export default function loggedUser(state = initialState, action) {
	switch (action.type) {
		default:
			// console.log("this", state);
			return state;
	}
}
