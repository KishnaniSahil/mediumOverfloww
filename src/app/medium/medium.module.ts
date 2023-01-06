import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumComponent } from './medium.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContentComponent } from './content/content.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewBlogComponent } from './view-blog/view-blog.component'
import { RouterModule } from '@angular/router';
import { BlogFormComponent } from './blog-form/blog-form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MediumComponent,
    HeaderComponent,
    ContentComponent,
    ViewBlogComponent,
    BlogFormComponent
   
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ]
})

export class MediumModule { }
