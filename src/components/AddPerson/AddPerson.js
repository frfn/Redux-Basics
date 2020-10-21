import React, { Component } from "react";

import "./AddPerson.css";

/* Summary -- local state here, no need for Redux for input forms. Two binding etc, will get complicated. Make it EASIER for yourself */

/* Important Note: component takes in a property, personAdded which is a function */

class AddPerson extends Component {
	// State
	state = {
		name: "",
		age: "",
	};

	/* you can implement a method that takes care of each form... but, no need. */

	// Input name
	nameChangedHandler = (event) => {
		this.setState({ name: event.target.value }, () => {
			console.log(this.state);
		});
	};

	// Input age
	ageChangedHandler = (event) => {
		this.setState({ age: event.target.value });
	};

	inputChangedHandler = (e) => {
		this.setState({
			// ...this.state, // since setState merges AUTOMATICALLY
			[e.target.name]: e.target.value,
		}, () => {
			console.log(this.state)
		});
	};

	/* Summary -- A form, see onSubmit to see how properties are passed between each other with Redux */

	// since personAdded is a fn, it is used as: () => this.props.personAdded()

	render() {
		return (
			<div className='AddPerson'>
				<form
					onSubmit={(event) =>
						this.props.personAdded(
							this.state.name,
							this.state.age,
							event
						)
					}
				>
					<input
						id='name' // so you can use 'for=' attribute
						name='name' // this is NEEDED if using inputChangedHandler
						type='text'
						placeholder='Name'
						onChange={(e) => this.inputChangedHandler(e)}
						value={this.state.name} // two way binding, you MUST do this so that keystrokes are reflected IN the input (I think if you don't use inputHandler, you need this) -- use the value, this.state.name :)
					/>
					<input
						name='age'
						type='number'
						placeholder='Age'
						onChange={(e) => this.inputChangedHandler(e)}
						value={this.state.age} // two way binding
					/>
					<button>Add Person</button>
				</form>
			</div>
		);
	}
}

export default AddPerson;
