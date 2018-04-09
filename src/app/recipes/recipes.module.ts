import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RecipesComponent } from "./recipes.component";
import { ChooseRecipeComponent } from "./choose-recipe/choose-recipe.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item/recipe-item.component";
import { DropdownDirective } from "../shared/dropdown.directive";
import { RecipesRoutingModule } from "./recipes-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        RecipesComponent,
        ChooseRecipeComponent,
        RecipeDetailComponent,
        RecipeListComponent,
        EditRecipeComponent,
        RecipeItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RecipesRoutingModule,
        SharedModule,
    ],
})
export class RecipesModule {

}