/** @class */ (function () {
    function class_1() {
    }
    return class_1;
}());
"container" >
    -tab - group;
authTabs;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    return default_1;
}());
"mt-2 mx-auto" >
    -tab;
label = "Sign Up" * ngIf;
"!isLoggedIn" >
    -signup(onSignupSuccess);
"onSignUpSuccessHandler($event)" > /app-signup>
    < /mat-tab>
    < mat - tab;
label = "Sign In" * ngIf;
"!isLoggedIn" >
    -signin(onLoginSuccess);
"onLoginSuccessHandler($event)" > /app-signin>
    < /mat-tab>
    < mat - tab;
label = "Profile" * ngIf;
"isLoggedIn" >
    -profile[user];
"user"(onSignoutClick) = "onSignoutClickHandler($event)" > /app-profile>
    < /mat-tab>
    < /mat-tab-group>
    < /div>;
