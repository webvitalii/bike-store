// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appVersion: require('../../package.json').version + '--dev',
  firebaseConfig: {
    apiKey: "AIzaSyBRvmqcjCpSvkVae97AfGNKQFxtNd9p428",
    authDomain: "app-bike-store.firebaseapp.com",
    databaseURL: "https://app-bike-store-default-rtdb.firebaseio.com",
    projectId: "app-bike-store",
    storageBucket: "app-bike-store.appspot.com",
    //messagingSenderId: "222481546663",
    //appId: "1:222481546663:web:3e855c3da4952743d40a82",
    //measurementId: "G-5CQBZ7RSL2"
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
