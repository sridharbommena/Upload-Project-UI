import { Component } from '@angular/core';
import { process } from 'src/env.d';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload-project-firebase';
  constructor()
  {
    console.log("App started!");
    console.log(environment.firebaseFromEnv);
  }
}
