// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB_zfAySvUJ6lm5asIT2Bb1EAVy-6Xbn84",
    authDomain: "upload-project-firebase.firebaseapp.com",
    projectId: "upload-project-firebase",
    storageBucket: "upload-project-firebase.appspot.com",
    messagingSenderId: "716326382998",
    appId: "1:716326382998:web:ba232a607469eda48801b7"
  },
  firebaseFromEnv:{
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
