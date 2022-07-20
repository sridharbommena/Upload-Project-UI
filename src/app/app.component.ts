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
  showErrorMessageSelectFiles:boolean = false;
  showErrorMessageSizeExceed:boolean = false;
  errorMessageSelectFiles= environment.AT_LEAST_ONE_UPLOAD_ERROR;
  errorMessageSizeExceede= environment.SIZE_EXCEEDE;
  files: File[] = [];

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
  


  onSelect(event:any) {
    this.showErrorMessageSelectFiles=false;
    console.log(event);
    this.files.push(...event.addedFiles);
    console.log("files..");
    console.log(this.files);
  }

  onRemove(event:any) {
    this.showErrorMessageSelectFiles=false;
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  handleClick()
  {
    if(this.files.length>0)
    {
      console.log("handle click event");
      this.showErrorMessageSelectFiles=false;
      this.spinner.show();
      let fileSize = 0;
      //add some logic to send the data to google drive api and generate the link
      this.files.forEach( (file:File) =>{
        fileSize = fileSize + Math.round((file.size / 1024));;
      } )

      if(fileSize>1024*1024*1.5)
      {
        console.log("total size is greater than 1.5gb "+Math.round(fileSize/1024)+"mbs");
        this.showErrorMessageSizeExceed=true;
      }
      else
      {
        this.showErrorMessageSizeExceed=false;
        console.log("less than 1.5gb, proceeding...  : "+Math.round(fileSize/1024)+"mbs");
      }

      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 5000);  
    }
    else
    {
      this.showErrorMessageSelectFiles = true;
    }
  }

}
