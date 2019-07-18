import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: true }) signupForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  user = {
    email: '',
    subscription: '',
    password: ''
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscriptions;
    this.user.password = this.signupForm.value.password;

    this.signupForm.reset();
  }
}
