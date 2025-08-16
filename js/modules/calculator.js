export class Calculator {
    static calculateIngredientCalories(foodKey, quantity, allFoods) {
        // Find the food in any category
        for (const category of Object.values(allFoods)) {
            if (category[foodKey]) {
                return category[foodKey].calories * quantity;
            }
        }
        return 0;
    }

    static calculateTotalCalories(ingredients, allFoods) {
        return ingredients.reduce((total, ingredient) => {
            return total + this.calculateIngredientCalories(
                ingredient.foodKey, 
                ingredient.quantity, 
                allFoods
            );
        }, 0);
    }

    static formatCalories(calories) {
        return Math.round(calories);
    }
}