import { Component, isDevMode } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  APP_NAME = environment.APP_NAME;
  APP_DESC = environment.APP_DESC;
  showSelectFilesError:boolean = false;

  constructor(private spinner: NgxSpinnerService){}

  ngOnInit()
  {
    if(isDevMode())
    {
      console.log("Development Mode");
    }
    else
    {
      console.log("Production Mode");
    }
  }
  
  files: File[] = [];

  onSelect(event:any) {
    this.showSelectFilesError=false;
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log("files..");
    console.log(this.files);
  }

  onRemove(event:any) {
    this.showSelectFilesError=false;
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  handleClick()
  {
    if(this.files.length>0)
    {
      console.log("handle click event");
      this.showSelectFilesError=false;
      this.spinner.show();

      //add some logic to send the data to google drive api and generate the link

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);  
    }
    else
    {
      this.showSelectFilesError = true;
    }
  }

}
