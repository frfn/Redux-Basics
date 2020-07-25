// actionTypes
import * as actionTypes from '../actions'

// 1. create state
const initialState = {
	persons: [],
};

// 2. create reducer fn -- will always have 2 args
const personReducer = (state = initialState, action) => {
	switch (action.type) {
        // "ADD"
		case actionTypes.ADD:
			const newPerson = {
				id: Math.random(), // not really unique but good enough here!
				name: "Flex",
				age: Math.floor(Math.random() * 40),
			};

			return {
                // will create a new array with the person object
				persons: state.persons.concat(newPerson),
            };
        // "DELETE"
		case actionTypes.DELETE:
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
