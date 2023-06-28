import { Component } from '@angular/core';
import { RouteService } from '../services/route.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private route:RouteService) { }

  status?:boolean = false;

  logout(){
    if(confirm('Are you sure you want to log out ?')){
      this.status =  false;
      this.route.toLogin();
    }
    // console.log(this.status)
    // return this.status;
  }
  
}
