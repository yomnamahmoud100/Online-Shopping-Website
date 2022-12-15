import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsModule} from "./modules/products/products.module";
import {ShoppingCartModule} from "./modules/shopping-cart/shopping-cart.module";
import {ProfileModule} from "./modules/profile/profile.module";
import {AuthGuard} from "./services/authguard/auth.guard";

const routes: Routes = [
  // pathes to the whole app
  {path:'home',loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)},
  {path :'login' ,loadChildren:()=>import('./modules/login/login.module').then(m=>m.LoginModule)},
  {path :'signup' ,loadChildren:()=>import('./modules/sign-up/sign-up.module').then(m=>m.SignUpModule)},
  {path:'products' , loadChildren:()=>import('./modules/products/products.module').then(m=>m.ProductsModule),
    canActivate:[AuthGuard]},
  {path:'profile' , loadChildren:()=>import('./modules/profile/profile.module').then(m=>m.ProfileModule),
    canActivate:[AuthGuard]},
  {path:'cart' , loadChildren:()=>import('./modules/shopping-cart/shopping-cart.module').then(m=>m.ShoppingCartModule),
    canActivate:[AuthGuard]},
  {path : '**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
