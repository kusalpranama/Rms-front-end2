import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CartComponent } from './pages/cart/cart.component';
import { SignInComponent } from './signIn/sign-in/sign-in.component';
import { LogInComponent } from './signIn/log-in/log-in.component';
import { AdminLoginComponent } from './signIn/admin-login/admin-login.component';
import { CustomerManagementComponent } from './admin/customer-management/customer-management.component';
import { ItemManagementmentComponent } from './admin/item-managementment/item-managementment.component';

export const routes: Routes = [
    {
        path:"",
        component:AppComponent
    },
    {
        path:"Home",
        component:HomeComponent
    },
    {
        path:"Item",
        component:ItemComponent
    },
    {
        path:"Contact",
        component:ContactComponent
    },
    {
        path:"Cart",
        component:CartComponent
    },
    {
        path:"Signup",
        component:SignInComponent
    },
    {
        path:"Login",
        component:LogInComponent
    },{
        path:"Admin-login",
        component:AdminLoginComponent
    },
    {
        path:"AdminCustomerManage",
        component:CustomerManagementComponent
    },
    {
        path:"AdminItemManage",
        component:ItemManagementmentComponent
    }

];
