import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'movies',component:MoviesComponent},
    {path:'recipes',component:RecipesComponent},
    // wiledcard
    {path:'**',component:PageNotFoundComponent},
];
