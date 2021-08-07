import { AfterContentChecked, ChangeDetectionStrategy, Component } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { SpinnerService } from './loader/spinner.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'TestApp';

  showVal:boolean;
  constructor(public spinn: SpinnerService, public authService: AuthService){
    this.spinn.isLoading.subscribe((x) =>{
      this.showVal = x;
    });
  }
  
}
