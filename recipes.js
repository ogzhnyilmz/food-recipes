function foodRecipes(){
    let recipe = prompt("Yemek tarifini giriniz.");

    if(recipe){
        let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push({recipe});
        localStorage.setItem("recipes", JSON.stringify(recipes));
    }
    
}

foodRecipes();