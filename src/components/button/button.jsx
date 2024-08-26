// const Button=()=>{
//     return(
//         <button onClick={()=>{}}>click</button>
//     )
// }
// export default Button




const CustomButton =(prop)=>{
    const {text="praveen",onPress=()=>{},bgColor="green"}=prop
    const buttonText="Click me" 
    return(
        <button style={{backgroundColor:bgColor}}  onClick={onPress} >{text}</button>
    )
}

export default CustomButton





