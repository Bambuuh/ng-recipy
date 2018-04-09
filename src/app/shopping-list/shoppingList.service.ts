import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>()
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('tomatoes', 10),
        new Ingredient('cucumber', 3),
    ]

    getIngredients() {
        return this.ingredients.slice()
    }

    getIngredient(index: number) {
        return this.ingredients.slice()[index];
    }

    triggerUpdate() {
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.triggerUpdate()
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.triggerUpdate()
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        console.log(ingredient)
        this.ingredients[index] = ingredient;
        this.triggerUpdate()
    }

    removeIngredient(index: number) {
        this.ingredients.splice(index, 1);
        this.triggerUpdate()
    }

}