import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './guards/auth.guard';

import { BlogComponent } from './blog/blog.component';
import { DevelopersComponent } from './developers/developers.component';
import { NewsComponent } from './news/news.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'blog', component: BlogComponent, canActivate: [AuthGuard]},
  { path: 'developers', component: DevelopersComponent },
  { path: '', component: NewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// canActivate: [AuthGuard] 