





const Unorderedlist=()=>{
    return(
        <div>
            <ul>
                <Listitems></Listitems>
            </ul>
        </div>
    )
}
export default Unorderedlist

export const Orderedlist=()=>{
    return(
        <div>
            <ol>
            <Listitems></Listitems>
                
            </ol>
        </div>
    )
}
  export const Listitems=()=>{
    const Fruits=["Aplle","Banana","Kiwi","oranage","Boppaya"]
    return(
        <>
        {
            Fruits.map((eachfruit)=>{
return <li>{eachfruit}</li>
            })
        }
            {/* <li>{Listitems[0]}</li>
            <li>{Listitems[1]}</li>
            <li>{Listitems[2]}</li> */}
        </>
    )
}















// const CustomList=(prop)=>{
//     const{list}=prop
//     return(
//         <ol>
//         <>
//         {
//         list.map((eachFruit,index)=>{
//             return <li key={index} >{eachFruit}</li>
//         })
//         }
//             </>
//         </ol>
//     )
// }

// export default CustomList


// export const CustomOrderedList=()=>{
//     return(
//         <ol>
//             <ListItems/>
//         </ol>
//     )
// }


// // const ListItems=()=>{

// //     const Fruits=["Apple","Banana","Kiwi","Mango","Orange"]
// //     return(
// //         <>
// //         {
// //         Fruits.map((eachFruit)=>{
// //             return <li>{eachFruit}</li>
// //         })
// //         }
// //             </>




// //     )
// // }


