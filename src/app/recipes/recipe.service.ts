import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppingList.service";
import { Subject } from "rxjs/Subject";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class RecipeService {

    recipesUpdated = new Subject<Recipe[]>();

    constructor(
        private shoppingListService: ShoppingListService,
        private http: HttpClient
    ) {}

    private recipes: Recipe[] = [
        new Recipe(
            'A test recipe',
            'This is simply a test',
            'https://images.theconversation.com/files/180401/original/file-20170731-22175-67v3q2.jpg?ixlib=rb-1.1.0&rect=0%2C589%2C5472%2C2654&q=45&auto=format&w=1356&h=668&fit=crop',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Veggies', 5)
            ]
        ),
        new Recipe(
            'Abother test recipe',
            'This is simply another test',
            'https://images.theconversation.com/files/180401/original/file-20170731-22175-67v3q2.jpg?ixlib=rb-1.1.0&rect=0%2C589%2C5472%2C2654&q=45&auto=format&w=1356&h=668&fit=crop',
            [
                new Ingredient('Banana', 1),
                new Ingredient('Plums', 5)
            ]
        )
    ];

    recipesChanged() {
        this.recipesUpdated.next(this.recipes.slice())
    }

    getRecipes() {
        return this.recipes.slice()
    }

    getRecipe(index: number) {
        return this.recipes.slice()[index];
    }

    addToShoppingList(recipe: Recipe) {
        this.shoppingListService.addIngredients(recipe.ingredients)
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged()
    }

    updateRecipe(index:number, recipe: Recipe) {
        this.recipes[index] = recipe
        this.recipesChanged()
    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged()
    }

    removeRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged()
    }
}