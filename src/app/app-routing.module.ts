import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'
import { ShopComponent } from './shop/shop.component'
import { HeaderComponent } from './header/header.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },



  {
    path: "footer",
    component: FooterComponent
  },
  {
    path: "shop",
    component: ShopComponent
  },
  {
    path: "header",
    component: HeaderComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
