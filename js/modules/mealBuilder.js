import { Calculator } from './calculator.js';

export class MealBuilder {
    constructor(allFoods) {
        this.allFoods = allFoods;
        this.ingredients = [];
    }

    addIngredient(foodKey, quantity) {
        const food = this.findFood(foodKey);
        if (!food) {
            throw new Error(`Food not found: ${foodKey}`);
        }

        this.ingredients.push({
            foodKey,
            quantity,
            calories: Calculator.calculateIngredientCalories(foodKey, quantity, this.allFoods)
        });
    }

    removeIngredient(index) {
        if (index >= 0 && index < this.ingredients.length) {
            this.ingredients.splice(index, 1);
        }
    }

    getTotalCalories() {
        return Calculator.calculateTotalCalories(this.ingredients, this.allFoods);
    }

    getIngredients() {
        return [...this.ingredients];
    }

    clear() {
        this.ingredients = [];
    }

    findFood(foodKey) {
        for (const category of Object.values(this.allFoods)) {
            if (category[foodKey]) {
                return category[foodKey];
            }
        }
        return null;
    }

    getMealData() {
        return {
            ingredients: this.getIngredients(),
            totalCalories: this.getTotalCalories(),
            createdAt: new Date().toISOString()
        };
    }
}