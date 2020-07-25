import React, { Component } from "react";

import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";

import * as actionTypes from "../store/actions";

import { connect } from "react-redux";

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
/* Redux -- state + dispatch WILL be functions */

// returns a JS object
const mapStateToProps = (state) => {
	return {
		persons: state.persons,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddPerson: (name, age, event) =>
			dispatch({
				type: actionTypes.ADD,
				payload: { name: name, age: age, event: event },
			}),
		onDeletePerson: (id) =>
			dispatch({ type: actionTypes.DELETE, personElementId: id }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);
