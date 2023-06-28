import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../services/auth.service';
import { RouteService } from '../services/route.service';
// @ts-ignore
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private routeService: RouteService, private header: HeaderComponent) { }
  ngOnInit(): void {
   const target = document.getElementById('type-1');
   const writer = new Typewriter(target, {
    loop: true,
    typeColor: 'black',
    typeSpeed: 20,
  })
  
  writer
    .type('Your job is to take notes.... <br><br> My Job is to make that possible....')
    .rest(4000)
    .start()
  }

  code: string = '';

  validateCode() {
    if (this.authService.login(this.code)) {
      this.routeService.toHome();
      this.header.status = true;
    }
    else {
      alert('Wrong code.. Try Again !');
      this.code = ''
    }
  }
}
