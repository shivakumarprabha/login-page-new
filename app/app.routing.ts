import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

import {Routes,RouterModule} from '@angular/router';


const routes :Routes = [
    { path:'', component:LoginComponent},
    
    {path:'login', component:LoginComponent},
    {path:'welcome', component:WelcomeComponent},
    {path:'sign-up', component:SignupComponent},
    { path :'**', redirectTo:''},
];



export const routing = RouterModule.forRoot(routes);