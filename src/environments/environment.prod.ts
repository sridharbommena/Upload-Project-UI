export const environment = {
  production: true,
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
