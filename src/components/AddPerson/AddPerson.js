import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {
	state = {
		name: "",
		age: "",
	};

	nameChangedHandler = (event) => {
		this.setState({ name: event.target.value }, () => {
			console.log(this.state);
		});
	};

	ageChangedHandler = (event) => {
		this.setState({ age: event.target.value });
	};

	render() {
		return (
			<div className='AddPerson'>
				Î
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
						type='text'
						placeholder='Name'
						onChange={this.nameChangedHandler}
						value={this.state.name} // two way binding
					/>
					<input
						type='number'
						placeholder='Age'
						onChange={this.ageChangedHandler}
						value={this.state.age} // two way binding
					/>
					<button>Add Person</button>
				</form>
			</div>
		);
	}
}

export default AddPerson;
