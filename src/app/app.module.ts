import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { environment } from 'src/environments/environment.prod';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { FormatFileSizePipe } from './Custom/Pipes/FormatFileSizePipe ';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    UploaderComponent,
    FormatFileSizePipe, 
    UploadTaskComponent // storage
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,
    NgxDropzoneModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
