import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "../auth/auth-guard.service";
import { RecipesComponent } from "./recipes.component";
import { ChooseRecipeComponent } from "./choose-recipe/choose-recipe.component";
import { EditRecipeComponent } from "./edit-recipe/edit-recipe.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipesRoutes: Routes = [
    {
        path: '',
        component: RecipesComponent,
        children: [
            { path: '', component: ChooseRecipeComponent, pathMatch: 'full' },
            { path: 'new', component: EditRecipeComponent, canActivate: [AuthGuard] },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: EditRecipeComponent, canActivate: [AuthGuard] },
        ]
    },
]

@NgModule({
    imports: [RouterModule.forChild(recipesRoutes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class RecipesRoutingModule { }