import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { CitiesComponent } from './cities/cities.component';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  
  {

    
      // When the user goes to http://localhost:4200/cities display the cities component
      path: 'cities/:id',
      component: CitiesComponent
    
  },
   
  {

    
    // When the user goes to http://localhost:4200/cities display the cities component
    path: 'post',
    component: PostComponent
  
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

