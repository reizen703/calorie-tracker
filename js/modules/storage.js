export class Storage {
    static saveMeal(mealData, name) {
        const savedMeals = this.getSavedMeals();
        const meal = {
            ...mealData,
            name,
            id: Date.now().toString()
        };
        
        savedMeals.push(meal);
        localStorage.setItem('savedMeals', JSON.stringify(savedMeals));
        return meal;
    }

    static getSavedMeals() {
        const saved = localStorage.getItem('savedMeals');
        return saved ? JSON.parse(saved) : [];
    }

    static deleteMeal(id) {
        const savedMeals = this.getSavedMeals();
        const filtered = savedMeals.filter(meal => meal.id !== id);
        localStorage.setItem('savedMeals', JSON.stringify(filtered));
    }

    static loadMeal(id) {
        const savedMeals = this.getSavedMeals();
        return savedMeals.find(meal => meal.id === id);
    }
}