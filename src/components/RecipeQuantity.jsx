
 const RecipeQuantity = (props) => {
    console.log(props)
  return (
      props.recipeQuantities.map((row, index) =>
          <li key={index}>
              {row.rawMaterial.name} : {row.quantity} {row.unitMeasureLabel.label}</li>

      )


  );
};

export default RecipeQuantity;
