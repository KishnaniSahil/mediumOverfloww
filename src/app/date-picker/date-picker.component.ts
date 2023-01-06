import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  constructor() { }
  minDate="2022-8-01";
  maxDate="2022-10-25";

  TodayDate:any;
   date1=new Date();
   currentYear=this.date1.getUTCFullYear();
   currentMonth=this.date1.getUTCMonth()+1;
   currentDay=this.date1.getUTCDate();

   FinalMonth:any;
   FinalDay:any;

  ngOnInit(): void {
    if(this.currentMonth<10){
      this.FinalMonth="0"+this.currentMonth;
    }else{
      this.FinalMonth=this.currentMonth;
    }
    if(this.currentDay<10){
      this.FinalDay="0"+this.currentDay;
    }else{
      this.FinalDay=this.currentDay;
    }
    this.TodayDate=this.currentYear+"-"+this.FinalMonth+"-"+this.FinalDay;
    console.log(this.TodayDate);
    this.maxDate=this.TodayDate;
  }

}
