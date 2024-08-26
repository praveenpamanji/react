

import CustomList from "./components/list/list.jsx"
import { CustomOrderedList } from "./components/list/list.jsx"
import { SecondaryHeading } from "./components/headings/First.jsx"
import CustomImage from "./components/images/images"
import CustomButton from "./components/button/button"
import MainHeading from "./components/headings/First.jsx"
import { recipeData } from "./components/data/recipeData.js"
import button from "./components/button/button.jsx"


const App =()=>{

  
  return(
    < >
  {/* {
    recipeData.map(eachRecipe=>{
      return(
        <div key={eachRecipe.id} >
         
          <MainHeading heading={eachRecipe.name}   />
          <CustomImage source={eachRecipe.image} width={200}  height={200}/>
          <SecondaryHeading heading={"ingredients required"}  />
          <CustomList list={eachRecipe.ingredients}  />
          <SecondaryHeading heading={"instructions required"}  />
          <CustomList list={eachRecipe.instructions}  />
          <CustomButton  text={"Start preparation"}   />
        </div>
      )
    })

  } */}
  <CustomButton></CustomButton>
  <MainHeading heading="iam praveen">iam swathi</MainHeading>
  <SecondaryHeading heading=" iam naveen">iam geetha</SecondaryHeading>
  <CustomButton></CustomButton>
  <MainHeading heading="iam praveen">iam swathi</MainHeading>
  <SecondaryHeading heading=" iam naveen">iam geetha</SecondaryHeading>
  <CustomButton></CustomButton>
  <MainHeading heading="iam praveen">iam swathi</MainHeading>
  <SecondaryHeading heading=" iam naveen">iam geetha</SecondaryHeading>
  <CustomImage></CustomImage>
  <CustomOrderedList></CustomOrderedList>
  <
    </>
  )
}

export default App








