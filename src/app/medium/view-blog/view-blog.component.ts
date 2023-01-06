import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { MedServiceService } from '../med-service.service';

@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  constructor(private mediumservice:MedServiceService ) { }

  ngOnInit(): void {
    this.fetchBlog();
  }
  fetchBlog():void{
this.mediumservice.fetchBlog("dem000000000000000og").subscribe((data:any)=>{
  console.warn(data)
})
  }
  icons={
    heart:faHeart
  }

}
