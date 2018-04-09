import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import 'rxjs/Rx';
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorage {

    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService,
    ) { }

    saveRecipes() {
        const token = this.authService.getToken()
        return this.http.put('https://ng-recipe-book-2a918.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes())
    }

    getRecipes() {
        const token = this.authService.getToken()
        return this.http.get('https://ng-recipe-book-2a918.firebaseio.com/recipes.json?auth=' + token)
            .map((response: Recipe[]) => {
                response.forEach(recipe => {
                    if (!recipe.ingredients) {
                        recipe.ingredients = []
                    }
                })

                return response
            })
            .subscribe((response: Recipe[]) => this.recipeService.setRecipes(response))
    }

}