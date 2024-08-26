

// //  const First=()=>{
// //     return(
// //         <h1>swathi</h1>
// //     )
// //  }
// //  export default First
// //  export const Second=()=>{
// //     return(
// //         <h2>vassu</h2>
// //     )
// //  }








//  const MainHeading=(prop)=>{
//     const{heading}=prop
//     return(
  

   
//         <h1>{heading}</h1>


//     )
// }
// export default MainHeading

//  export const SecondaryHeading=(prop)=>{
//     const{heading}=prop
//     return(


 
//         <h2>{heading}</h2>

//     )
// }



//  const First=()=>{
//     return(
//         <h1>swathi</h1>
//     )
//  }
//  export default First
//  export const Second=()=>{
//     return(
//         <h2>vassu</h2>
//     )
//  }








const MainHeading=(prop)=>{
    const{heading,children}=prop
    return(
  
<>
   
        <h1>{heading}</h1>
{children}
</>
    )
}
export default MainHeading

 export const SecondaryHeading=(prop)=>{
    const{heading,children}=prop
    return(


 <>
        <h2>{heading}</h2>
        <h3>{children}</h3>
        </>
    )
}