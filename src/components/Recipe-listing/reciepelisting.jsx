import { Component } from 'react';
import Praveen from '../praveen/praveen';
import Counter from '../class/counter';
import { SecondaryHeading } from '../headings/First';
import CustomList from '../list/list';



class Reciepelisting extends Component {
  state = {
    recipes: [],
    loading: true,
    error: false,  // Corrected typo from 'reeor' to 'error'
  };

  componentDidMount() {
    console.log("i am praveen");
    this.fetchdata();
  }

  fetchdata = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const { recipes } = await response.json();  // Corrected from 'reciepes' to 'recipes'
      this.setState({
        recipes: recipes,  // Corrected state property name
        loading: false,
      });
    } catch (error) {
      this.setState({
        loading: false,
        error: true,
      });
      console.error("Failed to fetch data:", error);
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
                <div key={eachRecipe.id}> {/* Assuming eachRecipe has a unique 'id' */}
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

export default Reciepelisting;
