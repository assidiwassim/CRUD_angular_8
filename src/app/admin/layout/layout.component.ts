import { Component, OnInit } from '@angular/core';
import {  AuthenticationService } from '../../services/authentication.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
) {}

  ngOnInit() {
  }
  
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
  
}
