export class Search {
    static searchFoods(query, allFoods) {
        const results = [];
        const searchTerm = query.toLowerCase();

        for (const [categoryName, category] of Object.entries(allFoods)) {
            for (const [foodKey, food] of Object.entries(category)) {
                if (food.name.toLowerCase().includes(searchTerm)) {
                    results.push({
                        foodKey,
                        food,
                        category: categoryName
                    });
                }
            }
        }

        return results;
    }

    static getFoodsByCategory(categoryName, allFoods) {
        const category = allFoods[categoryName];
        if (!category) return [];

        return Object.entries(category).map(([foodKey, food]) => ({
            foodKey,
            food,
            category: categoryName
        }));
    }

    static getAllCategories(allFoods) {
        return Object.keys(allFoods);
    }
}