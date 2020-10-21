// actionTypes
import * as actionTypes from "../actions";

// 1. create state
const initialState = {
	persons: [],
};

// 2. create reducer fn -- will always have 2 args
const personReducer = (state = initialState, action) => {
	switch (action.type) {
		// "ADD"
		case actionTypes.ADD:
			action.payload.event.preventDefault();

			console.log(action.test) // even if there are more args, arg would still be under "action"
			
			const newPerson = {
				id: Math.random(), // not really unique but good enough here!
				name: action.payload.name,
				age: action.payload.age,
			};

			// initial state = this new obj that is being returned
			return {
				// will create a new array with the person object
				persons: state.persons.concat(newPerson),
			};
		// "DELETE"
		case actionTypes.DELETE:
			// filter returns a new array, returns all elements back IF NOT the same as the index we're looking for
			const updatedArray = state.persons.filter((person) => {
				return person.id !== action.personElementId;
			});

			return {
				persons: updatedArray,
			};
		default:
			return state;
	}
};

export default personReducer;
