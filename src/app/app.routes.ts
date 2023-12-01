import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CallbackHellComponent } from './callback-hell/callback-hell.component';


export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'callback-hell',component:CallbackHellComponent}
];
