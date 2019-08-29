import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { DonateComponent } from './donate/donate.component';

const routes: Routes = [
  {path:'news', component: NewsComponent},
  {path:'', component: HomeComponent},
  {path:'donate', component: DonateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
