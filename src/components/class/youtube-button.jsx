import  { Component } from 'react'
// import { Listitems } from '../list/list'


 class Youtubebutton extends Component {
    state={
        issubcribe:false,
        text1:"subcribe",
        text2:"subcribed",
      }
      clickHandler=()=>{
        // alert(" i am clicked")
        this.setState({
            // issubcribe:true
            issubcribe:!this.state.issubcribe


        })
      }
  render() {
    return (
      <>
         <button onClick={this.clickHandler}>{this.state.issubcribe?this.state.text2:this.state.text1}</button>
         
        {this.state.issubscribe ? 
          <div>
            <Counter/>
            <Listitems />
          </div>
         : 
          <div>
            <h2>Please subscribe to our channel</h2>
          </div>
        }
    
      </>
    )
  }
}
export default Youtubebutton
