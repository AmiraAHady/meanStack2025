import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { authGuard } from './Guard/auth.guard';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'movies',component:MoviesComponent},
    {path:'recipes',component:RecipesComponent,canActivate:[authGuard]},
    {path:'details/:id',component:MovieDetailsComponent},
    // wiledcard
    {path:'**',component:PageNotFoundComponent},
];
