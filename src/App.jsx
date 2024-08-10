
import Unorderedlist from "./components/list/list.jsx"
import { Orderedlist } from "./components/list/list.jsx"
import First from "./components/headings/First.jsx"
import { Second } from "./components/headings/First.jsx"
import Image from "./components/images/images.jsx"
import Button from "./components/button/button.jsx"

const Customlist=()=>{
  return(
    <div>
    <h1>praveen</h1>
    <Image></Image>
    <Button></Button>

    <First></First>
    <Image></Image>
    <Second></Second>
    <Unorderedlist/>
    <Orderedlist></Orderedlist>
    <Unorderedlist></Unorderedlist>
    <Orderedlist></Orderedlist>

    </div>
  )
}
export default Customlist