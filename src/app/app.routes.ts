import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { GirdComponent } from './gird/gird.component';
import { PopUpComponent } from './pop-up/pop-up.component';

export const routes: Routes = [
    {'path': '', redirectTo:'/home', pathMatch: "full"},
    {'path': 'home', component:HomeComponent},
    {'path': 'about', component: AboutComponent},
    {'path': 'contact', component: ContactComponent },
    {'path': 'products', component: ProductsComponent },
    {'path': 'products-detail/:id', component: ProductsDetailComponent },
    {'path': 'grid', component:GirdComponent},
    {'path': 'popup', component:PopUpComponent},
    {'path': "**", component:PageNotFoundComponent},
];
