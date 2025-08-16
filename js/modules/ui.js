export class UI {
    static updateCalorieDisplay(calories) {
        const display = document.getElementById('total-calories');
        if (display) {
            display.textContent = `Total Calories: ${calories}`;
        }
    }

    static updateIngredientsList(ingredients, allFoods) {
        const list = document.getElementById('ingredients-list');
        if (!list) return;

        list.innerHTML = '';
        ingredients.forEach((ingredient, index) => {
            const food = this.findFood(ingredient.foodKey, allFoods);
            if (food) {
                const item = this.createIngredientElement(food, ingredient, index);
                list.appendChild(item);
            }
        });
    }

    static createIngredientElement(food, ingredient, index) {
        const div = document.createElement('div');
        div.className = 'ingredient-item';
        div.innerHTML = `
            <span>${food.name} - ${ingredient.quantity} ${food.unit}</span>
            <span>${Math.round(food.calories * ingredient.quantity)} cal</span>
            <button onclick="window.removeIngredient(${index})">Remove</button>
        `;
        return div;
    }

    static findFood(foodKey, allFoods) {
        for (const category of Object.values(allFoods)) {
            if (category[foodKey]) {
                return category[foodKey];
            }
        }
        return null;
    }

    static showError(message) {
        console.error(message);
        // Add visual error display if you have error elements in HTML
    }

    static showSuccess(message) {
        console.log(message);
        // Add visual success display if you have success elements in HTML
    }
}