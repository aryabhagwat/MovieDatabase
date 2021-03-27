import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { loginComponent } from "./login/login.component";
import { signupComponent } from "./signup/signup.component";
import { welcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
    {path: '', component: welcomeComponent},
    {path: 'login', component: loginComponent},
    {path: 'signup', component: signupComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{

}