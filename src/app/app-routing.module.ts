import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {McservListComponent} from "./mcserv-list/mcserv-list.component";


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'list', component: McservListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
