
import { Component, PureComponent } from 'react'

//  class Child extends PureComponent {
   
    
//   render() {
//     console.log("child rendering");
//     return (
//       <div>
//         Child
//       </div>
//     )
//   }
// }
// export default Child
//

// class component
import React from 'react'

const Child = () => {
    console.log("child rendering");
  return (
    <div>
      <h4>praveen</h4>
    </div>
  )
}

export default React.memo(Child)
