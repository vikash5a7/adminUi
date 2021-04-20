import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = {
    name: null,
    password: null,
    role: null
  };
  constructor(private router: Router) {}

  ngOnInit() {}
  onLogin() {
    localStorage.setItem('isLoggedin', 'true');
    localStorage.setItem('User', this.form.name);
    console.log(this.form);
    this.router.navigate(['/dashboard']);
  }
}
