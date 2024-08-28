import  { Component } from 'react'

 class Mounting extends Component {
    constructor(){
        console.log(" constructor executed");
 super()
 this.state={
 products:[],
 message:"hello",
 favoritecolor:"green",
    }
}

     componentDidMount(){
        console.log(" component executed");
     }
     static getDerivedStatefromProps(props,state){

        console.log("getDerivedStatefromProps executed");

    return{ favoritecolor:props.color}
     }
  render() {
    console.log(" render executed");
    
    return (
      <div>
        <h4>mounting phase{this.state.message}</h4>
        <h3>{this.setState.favoritecolor}</h3>
      </div>
    )
  }
} export default Mounting
