import { Routes, RouterModule, CanActivate } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
/*{ path:'', redirectTo: 'login', pathMatch: 'full'},
{ path:'login', component: LoginComponent},*/
   { path: '', redirectTo: 'home', pathMatch: 'full'},
   { path: 'home', component: HomeComponent},
   { path: 'news', component: NewsComponent}

];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
