import  { Component } from 'react'

 class Counter extends Component {
    state={
        count:0
      }
      incrementHandler = () => {
        this.setState({
          count: this.state.count + 1,
        });
      };
      decrementHandler = () => {
        this.setState({
          count: this.state.count - 1,
        });
      };
    
      resetHandler = () => {
        this.setState({
          count: 0,
        });
      };
    
      
  render() {
    return (
      <div>
        <h4>counter{this.state.count}</h4>
        <button onClick={this.incrementHandler}>increment</button>
        <button onClick={this.decrementHandler}>decrement</button>
        <button onClick={this.resetHandler}>reset</button>
      </div>
    )
  }
}
export default Counter
