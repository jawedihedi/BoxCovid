import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/chart';
import { AuthService } from 'src/app/Modules/auth/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private authService : AuthService) {}
  public searchText;
  ngOnInit() {
  }
  logout(){
    this.authService.logout();
  }


}

