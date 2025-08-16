import { allFoods } from './data/allFoods.js';
import { MealBuilder } from './modules/mealBuilder.js';
import { UI } from './modules/ui.js';
import { Storage } from './modules/storage.js';
import { Search } from './modules/search.js';

class CalorieTrackerApp {
    constructor() {
        this.mealBuilder = new MealBuilder(allFoods);
        this.initialize();
    }

    initialize() {
        this.bindEvents();
        this.updateDisplay();
        console.log('Calorie Tracker App initialized');
    }

    bindEvents() {
        // TODO: Copy your existing event listeners here
        // Make them call the appropriate module methods
    }

    addIngredient(foodKey, quantity) {
        try {
            this.mealBuilder.addIngredient(foodKey, quantity);
            this.updateDisplay();
        } catch (error) {
            UI.showError(error.message);
        }
    }

    removeIngredient(index) {
        this.mealBuilder.removeIngredient(index);
        this.updateDisplay();
    }

    updateDisplay() {
        const calories = this.mealBuilder.getTotalCalories();
        const ingredients = this.mealBuilder.getIngredients();
        
        UI.updateCalorieDisplay(calories);
        UI.updateIngredientsList(ingredients, allFoods);
    }

    // Essential functions for the app to work
function updateItemDropdown() {
    const categorySelect = document.getElementById('category');
    const itemSelect = document.getElementById('item');
    const selectedCategory = categorySelect.value;
    
    // Clear current options
    itemSelect.innerHTML = '<option value="">Select an item</option>';
    
    // Add items from selected category
    if (allFoods[selectedCategory]) {
        for (const [key, food] of Object.entries(allFoods[selectedCategory])) {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = food.name;
            itemSelect.appendChild(option);
        }
    }
}

// Make function globally available
window.updateItemDropdown = updateItemDropdown;
}

// Make functions globally available if needed for HTML onclick handlers
window.removeIngredient = (index) => app.removeIngredient(index);

// Initialize app
const app = new CalorieTrackerApp();
window.app = app; // Make app globally available for debugging
