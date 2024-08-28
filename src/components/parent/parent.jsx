import  { Component } from 'react'
import Child from './Child'

 class Parent extends Component {
    constructor(){
        super()
        this.state={
            isIndian:false
            
            

            }
 }
 changeCountryship=()=>{
    this.setState(
        {
isIndian:!this.state.isIndian
        }
    )
 }
    
  render(){
    console.log("parent rendering");
    
    // const {isIndian}=this.state
    return (
      <div>
        <h3>hello world..!</h3>
        <h4>{this.state.isIndian?"Happy republic day":"Go back in india"}</h4>
        <button onClick={()=>this.changeCountryship()}>change countryship</button>
        <Child></Child>
      </div>
    )
}
 }

export default  Parent
