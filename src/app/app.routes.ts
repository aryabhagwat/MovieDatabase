import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { loginComponent } from "./login/login.component";
import { signupComponent } from "./signup/signup.component";

const routes: Routes = [
    {path: 'login', component: loginComponent},
    {path: 'signup', component: signupComponent}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes{

}