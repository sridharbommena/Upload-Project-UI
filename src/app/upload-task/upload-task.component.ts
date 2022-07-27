import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.css']
})
export class UploadTaskComponent implements OnInit {

  @Input() file!: File;

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;
  isCopyDone:boolean = false;
  uploadComplete:boolean = false;
  validDate:string="";
  VALIDITY_TIME:number=24*1000*60*60;
  
  constructor(private storage: AngularFireStorage, private clipboard:Clipboard, private fireDb:AngularFirestore) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {

    // The storage path
    const path = `upload-project/${Date.now()}_${this.file.name}`;

    // Reference to storage bucket
    const ref = this.storage.ref(path);

    // The main task
    this.task = this.storage.upload(path, this.file);

    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize( async() =>  {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        this.validDate = new Date(parseInt(Date.now().toString())+this.VALIDITY_TIME).toLocaleString();
        this.fireDb.collection('upload-project').add( { downloadURL: this.downloadURL, path, createdAt: Date.now() }).then(()=>console.log("added to firestore"));
        this.uploadComplete = true;
      }),
      );
      
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  copyToClipBoard(url)
  {
    console.log("copied to clipboard");
    this.clipboard.copy(url);
    this.isCopyDone=true;
  }


}
