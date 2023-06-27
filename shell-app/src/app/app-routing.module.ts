import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {
    path: "flights", loadChildren: () => loadRemoteModule({
      type: "module",
      remoteEntry: 'http://localhost:4206/remoteEntry.js',
      exposedModule: './FlightsSearcher'
    }).then(m => m.FlightsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
