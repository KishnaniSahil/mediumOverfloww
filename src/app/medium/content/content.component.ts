import { Component, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { blogData } from 'src/app/shared/interface/interface';
import { MedServiceService } from '../med-service.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  data!:blogData[];
  constructor(private mediumContent:MedServiceService) { }

  ngOnInit(): void {
    this.mediumContent.fetchBlogs().subscribe((value:blogData[])=>{
      // console.warn(value);
      this.data=value;
    });
  }
  
  icons={
    likeIcon:faHeart,
    commentIcon: faComment
  }

}
