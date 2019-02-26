import React, { Component } from 'react'
import { connect } from 'react-redux'

class Total extends Component {
  render() {
    const { total } = this.props
    return (
      <div>
        <h1>{total}</h1>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    total: state.counters.reduce((acc, count) => acc + count)
  }
}

export default connect(mapStateToProps)(Total)
