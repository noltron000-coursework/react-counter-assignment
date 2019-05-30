import React, { Component } from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'

class CounterList extends Component {

	renderCounters() {
		return this.props.counters.map((count, index) => <Counter key={index} index={index} />)
	}

	render() {
		return (
			<div>
				{this.renderCounters()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		counters: state.counters
	}
}

export default connect(mapStateToProps)(CounterList)
