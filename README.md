## Firebase + React Native + Android Test

This test app asks one question: Does `firebase.auth().*` from the `3.2.0` version of the library work on React Native for Android?

### Findings

Thus far, I've tested on my Nexus 5 phone, Android Emulator, and Genymotion emulator. For iOS, I've used the Simulator.

The `firebase.auth().signInWithEmailAndPassword()` promise fails to resolve or reject on Android, but works properly on iOS.

## Installation

  1. Clone this repo
  2. `npm install`
  3. Edit the firebase config in `index.ios.js` and `index.android.js`
  4. `npm start`
  5. In a separate terminal window: `npm run android` or `npm run ios` for the respective platform.