/*
-------------------------------------
    INITIAL SETUP:  
-------------------------------------
1. visit: console.firebase.google.com 
2. create a new firebase project 
3. visit doc (go to docs): Build > Authentication > Web > Getting started 
4. Register web app > firebase project home > click web > give name and register
5. install firebase for your project: npm install firebase 
6. DANGEROUS: get firebase config and put it in firebase.init.js 
7. export app from firebase.init.js 
-------------------------------------
    SETUP PROVIDER: 
-------------------------------------
8. create auth using getAuth from firebase by using app from firebase.init.js 
9. create a google auth provider. do not forget to use new GoogleAuthProvider(); 
10. go to firebase > Build > Authentication > Get started > Sign in method 
11. Enable google sign in method 
12. create a button for a google sign in method with a click handler 
13. inside the even handler, call signInWithPopup with auth, provider 
14. after signInWithPopup .then result, error 
-------------------------------------
    DISPLAY DATA: 
-------------------------------------
-------------------------------------
    ADD A NEW SIGN IN METHOD
-------------------------------------
1. enable the sign in method 
2. create github, twitter, fb etc app create 
3. get client id and secret 
*/