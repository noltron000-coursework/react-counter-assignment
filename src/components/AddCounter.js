import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCounter } from '../actions/index.js';

class AddCounter extends Component {
	constructor(props) {
		super(props)
		this.state = { counterName: "" }
	}

	render() {
		const { addCounter } = this.props;
		return (
			<div>
				<div>
					<input
						type='text'
						onChange={(e) => {
							this.setState({ counterName: e.target.value })
						}}>
					</input>
				</div>

				<div>
					<button onClick={() => {
						addCounter(this.state.counterName)
						this.setState({ counterName: '' })
					}}>Add Counter</button>
				</div>
			</div >
		);
	}
}

const mapDispatchToProps = () => {
	return {
		addCounter
	}
}


export default connect(null, mapDispatchToProps())(AddCounter)
