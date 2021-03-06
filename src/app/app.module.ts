import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { OverviewComponent } from './overview/overview.component';
import { CitiesComponent } from './cities/cities.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PostComponent } from './post/post.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    OverviewComponent,
    CitiesComponent,
    PostComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule, 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
