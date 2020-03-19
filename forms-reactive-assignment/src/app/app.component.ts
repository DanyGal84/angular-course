import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'forms-reactive-assignment';
  projectForm: FormGroup;
  statuses = ['Stable', 'Critical', 'Finished'];
  forbiddenProjectNames = ['Test'];

  ngOnInit () {
    this.projectForm = new FormGroup({
      'userData': new FormGroup({
        'projectName': new FormControl(null, Validators.required, this.forbiddenNamesAsync),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'status': new FormControl('Stable')
    });
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if(this.forbiddenProjectNames.indexOf(control.value) !== -1) {
      return {'projectIsForbidden': true};
    }
    return null;
  }

  forbiddenNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({'projectIsForbidden': true});
        } else {
          resolve(null);
        }
      },1500)
    });
    return promise;
  }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
