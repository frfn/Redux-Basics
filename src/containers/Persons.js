import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import * as actionTypes from "../store/actions";

import { connect } from "react-redux";

/* Summary -- this is where Redux will be used. Uses the connect() to grab a slice of the state + dispatch calls */

class Persons extends Component {
	// state = {
	//     persons: []
	// }

	// personAddedHandler = () => {
	//     const newPerson = {
	//         id: Math.random(), // not really unique but good enough here!
	//         name: 'Max',
	//         age: Math.floor( Math.random() * 40 )
	//     }
	//     this.setState( ( prevState ) => {
	//         return { persons: prevState.persons.concat(newPerson)}
	//     } );
	// }

	// personDeletedHandler = (personId) => {
	//     this.setState( ( prevState ) => {
	//         return { persons: prevState.persons.filter(person => person.id !== personId)}
	//     } );
	// }

	render() {
		return (
			<div>
				{/* 
                AddPerson = <div> .. <button> .. </div> 
                personAdded = onClick FN
                */}
				<AddPerson personAdded={this.props.onAddPerson} />
				{this.props.persons.map((person) => (
					<Person
						key={person.id}
						name={person.name}
						age={person.age}
						clicked={() => this.props.onDeletePerson(person.id)}
					/>
				))}
			</div>
		);
	}
}

// OUTSIDE of fn creation
/* Redux -- state + dispatch WILL be arrow functions */

// to use persons property, this is gathered from central store by using connect()
const mapStateToProps = (state) => {
	return {
		persons: state.persons,
	};
};

// to use functions that will connect to the store
const mapDispatchToProps = (dispatch) => {
	return {
		/* args will be name, age, and event */
		onAddPerson: (name, age, event) =>

			/* dispatch returns an object, must always have 'type' property */
			dispatch({
				type: actionTypes.ADD,

				// I'm passing event in so I can stop the refresh of page, annoying lol
				payload: { name: name, age: age, event: event },
				
				// though it's another args passed, it will be under "action" in the reducer
				test: "String test"
			}),

		/* behind the scenes, uses the filter() to sort through elements and mark it 'true' or 'false' based on ID */
		onDeletePerson: (id) =>
			dispatch({ type: actionTypes.DELETE, personElementId: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
