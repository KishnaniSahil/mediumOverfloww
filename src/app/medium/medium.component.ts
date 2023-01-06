import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { MediumServiceService } from '../medium-service.service';
import { medium } from '../shared/interface/interface';
import { MedServiceService } from './med-service.service';
import { blogData } from '../shared/interface/interface';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {
  // data!:blogData[];

  constructor(private mediumservice:MedServiceService,private httpclient:HttpClient) { }
  // mfromService !:medium[]

  ngOnInit(): void {
    // this.mediumservice.fetchBlogs().subscribe((value:blogData[])=>{
    //   // console.warn(value);
    //   this.data=value;
    // });
  }
   icons={
    likeIcon:faHeart,
    commentIcon: faComment
  }

}
