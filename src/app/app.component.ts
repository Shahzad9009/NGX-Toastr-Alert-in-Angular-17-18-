import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-registration-app';
  constructor(private _toastr: ToastrService) { }


  showSuccess() {
    this._toastr.success('User Added successfully', 'Success');
  }
  showError() {
    this._toastr.error('User not Added successfully', 'Error');
  }
  showInfo() {
    this._toastr.info('User not Added successfully', 'Info');
  }
  showWarning() {
    this._toastr.warning('User not Added successfully', 'Warning');
  }
}
