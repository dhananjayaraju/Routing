import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

const routes: Routes = [
	{path :'first', component:FirstComponent},
	{path :'second', component:SecondComponent},
	{path :'third', component:ThirdComponent}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class RoutingModule {}
//we need to add routing.module.ts file manually, also need to add import files manually.
//const routes: Routes = [ --> creating an array called const and routes is an aray name and 'Routes' is imported from the above import{RouterModule, Routes}
//{path :'first', component:FirstComponent}, is used to check the location from the path wehave given
//@NgModule imports: [RouterModule.forRoot(routes)] used to import from the root file.
//always routing.module.ts file will work second this will go to app.module.ts then first or second or third component page