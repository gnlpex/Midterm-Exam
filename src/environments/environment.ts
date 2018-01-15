// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
  	 apiKey: "AIzaSyA0vNKKN0rSEqS-yddAfM_MTvoA5HSiKr8",
    authDomain: "firestore-crudd.firebaseapp.com",
    databaseURL: "https://firestore-crudd.firebaseio.com",
    projectId: "firestore-crudd",
    storageBucket: "firestore-crudd.appspot.com",
    messagingSenderId: "47613384541"
  }
};
