import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
// import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MediumComponent } from './medium/medium.component';
import { MediumModule } from './medium/medium.module';
import { DatePickerComponent } from './date-picker/date-picker.component';
// import { BlogFormComponent } from './blog-form/blog-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    
  ],
  imports: [
    BrowserModule,
    NgbModule ,
    SharedModule,
    AppRoutingModule,
    MediumModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
