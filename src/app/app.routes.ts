import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { authGuard } from './Guard/auth.guard';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'movies',component:MoviesComponent},
    {path:'products',component:ProductListComponent},
    {path:'recipes',component:RecipesComponent,canActivate:[authGuard]},
    {path:'details/:id',component:MovieDetailsComponent},
    {path:'productdetails/:id',component:ProductDetailsComponent},
    // wiledcard
    {path:'**',component:PageNotFoundComponent},
];
