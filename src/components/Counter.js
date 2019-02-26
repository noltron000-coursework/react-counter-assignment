import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, reset } from '../actions/'

class Counter extends Component {
	render() {
		const { index, increment, decrement, counters, reset } = this.props
		return (
			<div>
				<h1>{counters[index]}</h1>
				<p>
					<button onClick={() => increment(index)}> + </button>
					<button onClick={() => decrement(index)}> - </button>
					<button onClick={() => reset(index)}> Reset </button>
				</p>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		counters: state.counters
	}
}

const mapDispatchToProps = () => {
	return {
		increment,
		decrement,
		reset
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(Counter)
