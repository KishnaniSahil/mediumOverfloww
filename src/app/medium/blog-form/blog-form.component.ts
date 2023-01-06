import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct ,NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { JsonPipe } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
// import { MediumServiceService } from 'src/app/medium-service.service';
import { blogData, categories } from 'src/app/shared/interface/interface';
import { MedServiceService } from '../med-service.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  // model : NgbDateStruct;
  // date :{ year: number; month: number };

  blogForm!:FormGroup;
  data!:categories[];

  constructor(private medium:MedServiceService) { }

  ngOnInit(): void {
    this.createForm()
    this.fetchblog2()
  }

  createForm(){
    this.blogForm=new FormGroup({
      title:new FormControl,
      content:new FormControl,
      category:new FormControl,
      scheduledDate:new FormControl,
    })
  }

  // selectToday(){
  //   this.model = this.calendar.getToday();
  // }
    submitForm(){
      console.log("hii");
    }
    fetchblog2(){
      this.medium.fetchBlog2().subscribe((value:categories[])=>{
        // console.warn(value);
        this.data=value
        console.log(this.data)
      });
    }
    
}
