import { Component } from '@angular/core';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';

@Component({
  selector: 'app-root',
    imports: [UserComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'AuthECClient';
}
