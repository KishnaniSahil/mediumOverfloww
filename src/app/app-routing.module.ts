import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediumComponent } from './medium/medium.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './medium/header/header.component';
import { ContentComponent } from './medium/content/content.component';
import { ViewBlogComponent } from './medium/view-blog/view-blog.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { BlogFormComponent } from './medium/blog-form/blog-form.component';


const routes: Routes = [
  //{path:'students',component:StudentListComponent},
  {path:'medium',component:MediumComponent},
  {path:'content',component:ContentComponent},
  {path:'viewblog',component:ViewBlogComponent},
  {path:'profilepage',component:ProfileComponent},
  {path:'blogform',component:BlogFormComponent}

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
   
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
