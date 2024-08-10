





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
 const Listitems=()=>{
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