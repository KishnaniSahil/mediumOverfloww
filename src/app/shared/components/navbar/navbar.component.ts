import { Component, OnInit } from '@angular/core';
import { faDashboard ,faUserGraduate,faChalkboardTeacher,faRulerVertical,faBookReader,faSearch,faBell,faComment} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  Icon={
    dashBoard: faDashboard,
    draw:faUserGraduate,
    Teacher:faChalkboardTeacher,
    Standards:faRulerVertical,
    Books:faBookReader,
    searchIcon:faSearch,
    Bell:faBell,
    Comment:faComment
  }
  // to maintain track of whether sidenav is open or close
  sidenavCollapse = true;
  navCollapse = false;
 

}
