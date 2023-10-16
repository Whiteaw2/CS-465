import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }
  isLoggedIn(): boolean {
    const loggedIn = this.authService.isLoggedIn();
    console.log('User logged in:', loggedIn);
    return loggedIn;
  }
}
