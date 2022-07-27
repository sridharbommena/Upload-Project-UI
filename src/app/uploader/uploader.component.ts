import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {

  files: File[] = [];
  rejectedFiles: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    if(event.rejectedFiles!=null && event.rejectedFiles.length>0)
    {
      this.rejectedFiles = [];
       this.rejectedFiles.push(...event.rejectedFiles);
       console.log(this.rejectedFiles);
    }
  }
  
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  

}
