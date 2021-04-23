import './RecipeContainer.css';
import RecipeQuantity from './RecipeQuantity';
const RecipeContainer = (props) => {
    console.log(props.recipeData)

  return (
    <div className="container">
      <h2>{props.recipeData.name}</h2>
        Ingrédients pour {props.recipeData.recipe.batchOfProduction} :
        <ul>
        <RecipeQuantity recipeQuantities = {props.recipeData.recipe.recipeQuantities} />
        </ul>
    </div>
  );
};


export default RecipeContainer;
