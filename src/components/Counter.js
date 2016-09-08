import React, {Component,PropTypes} from 'react';

class Counter extends Component {

  constructor(props) {
    super(props)
    this.incrementAsync = this.incrementAsync.bind(this)
    this.incrementIfOdd = this.incrementIfOdd.bind(this)
  }

  incrementIfOdd(){
    if(this.props.value % 2 !== 0 ){
      this.props.onIncrement()
    }
  }

  incrementAsync(){
    setTimeout(this.props.onIncrement,1000)
  }

  render(){
    const {value ,onIncrement,deIncrement} = this.props
    return(
      <p>
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement} > + </button>
        {' '}
        <button onClick={deIncrement}> - </button>
        {' '}
        <button onClick={this.incrementAsync}>incrementAsync</button>
        {' '}
        <button onClick={this.decrementIfOdd}>decrementIfOdd</button>
       </p>
    )
  }
}

Counter.PropTypes ={
  value:PropTypes.number.isRequired,
  onIncrement:PropTypes.func.isRequired,
  deIncrement:PropTypes.func.isRequired
}

export default Counter;
