import { Component } from 'react';
import Counter from '../class/counter';
import { SecondaryHeading } from '../headings/First';
import CustomList from '../list/list';
import axios from 'axios';



class Axios extends Component {
  state = {
    recipes: [],
    loading: true,
    error: false,  
  };

  componentDidMount() {
    console.log("i am praveen");
    this.fetchdata();
  }

  fetchdata = async () => {
   
      const{status,data}= await axios.get("https://dummyjson.com/recipes");

      if(status===200){
        this.setState({
            recipes:data.recipes,
            loading:false

        })
      }
   };


  render() {
    return (
      <>
        <h3>Recipe Listing</h3>
        {this.state.loading ? (
        <Counter></Counter>
        ) : this.state.error ? (
          <h2>Error loading recipes</h2>
        ) : (
          <>
            <h2>Recipes:</h2>
            {this.state.recipes.map((eachRecipe) => {
              return (
                <div key={eachRecipe.id}> 
                  <h3>{eachRecipe.name}</h3>
                  <img src={eachRecipe.image} alt={eachRecipe.name} height={100} width={100} />
                  <SecondaryHeading heading={`ingredients for ${eachRecipe.name}`}></SecondaryHeading>
                  <CustomList list={eachRecipe.ingredients}/>
                  <SecondaryHeading heading={`instructions for ${eachRecipe.name}`}></SecondaryHeading>
                  <CustomList list={eachRecipe.instructions}/>
                </div>
              );
            })}
          </>
        )}
      </>
    );
  }
}


export default Axios
