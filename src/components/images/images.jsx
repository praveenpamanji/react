
// const Image=()=>{
//     return(
//         <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"  height={100} width={100} alt="praveen" />
//     )
// }
// export default Image





// const CustomImage=(props)=>{
//     console.log(props)
  
//     const{source,width=100,alternateText="text",height=200}=props
//     return(
//         <img  src={source}  height={height} width={width} alt={alternateText}   />
//     )
// }
// export default CustomImage

import React from 'react'

const customImages = (props) => {
    const {source="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", height=100,width=200, alternateText="praveen"}=props
  return (
    
    <div>
      <img src="{source}" alt={alternateText} height={height} width={width}/>
    </div>
  )
}

export default customImages


