# Native iOS wrapper

The web app is already installable on iPhone as a PWA.

This folder also contains a Capacitor configuration so the same standalone project can be wrapped as a native iOS app without changing the product code.

On a Mac with Xcode:

1. `npm install`
2. `npx cap add ios`
3. `npx cap sync ios`
4. `npx cap open ios`
5. Set the Apple Team / bundle signing in Xcode and run on device or submit through TestFlight.

The generated `ios/` project should remain inside this standalone folder and does not depend on the Paris app.
