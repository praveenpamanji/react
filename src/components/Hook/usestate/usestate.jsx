import React, { useState } from 'react'

const Count = () => {
    const[age,setAge]=useState(10)
    const incrementAgeHandler=()=>
 {
  setAge(age+1)
        }

          const decrementAgeHandler=()=>
            {
              setAge(age-1)
            }
            
    
        
          const resetAgeHandler=()=>
            {
              setAge(0)
            
            }
    
  return (
    <div>
      <h3>counter example</h3>
      <h3>current age:{age}</h3>
      <button onClick={incrementAgeHandler}>increment age</button>
      <button onClick={decrementAgeHandler}>decrement age</button>
      <button onClick={resetAgeHandler}>reset age</button>

    </div>
  )
}
        


export default Count
