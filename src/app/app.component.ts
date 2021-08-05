import { Component } from '@angular/core';
import { SpinnerService } from './loader/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TestApp';

  constructor(public spinn: SpinnerService){

  }
  
}
