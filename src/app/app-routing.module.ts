import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';


const routes: Routes = [
  
{

  
    // When the user goes to http://localhost:4200/cities display the cities component
    path: 'cities/:id',
    component: CitiesComponent
  
},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}