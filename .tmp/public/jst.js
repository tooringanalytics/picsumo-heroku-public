this["JST"] = this["JST"] || {};

this["JST"]["assets/templates/after.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header>\n\t<h1>Step 2</h1>\n\t<h2>Let\'s add your "after" photo</h2>\n</header>\n<main>\n\n<!-- When you arrive on page, your before photo should appear -->\n\n<div class="frame" id="framed">\n\t<div class="before-photo" id="framed" ng-cloak>\n\t\t<div class="dashed-container" id="framed">The Stored Before Image</div>\n\t</div>\n\t<div class="after-photo" id="framed" ng-cloak>\n\t\t<div class="dashed-container" id="framed">The Hidden Stored Image</div>\n\t\t<div class="button-container" id="framed">\n\t\t\t<button class="retry" ng-click="retry()">Retry</button>\n\t\t\t<button class="accept" ng-click="accept()" ui-sref="after">Accept</button>\n\t\t</div>\n\t</div>\n\n<!-- When you click Take Photo, Camera should appear with option to Snap Photo-->\n\t<div class="before-picture" ng-if="showAfterPhotoOptions">\n\t\t<div class="button-area">\n\t\t\t<button class="takePic" ng-click="takeAfterPhoto()">Take a photo</button>\n\t\t\t<p class="option">Or, if you prefer...</p>\n\t\t\t<label class="uploadPic">\n\t    \t\t<input type="file" ng-file-select ng-model="files">\n\t    \t\tChoose a photo to upload\n\t\t\t</label>\n\t\t</div>\n\t</div>\n\n<!-- When you click Snap Photo button the webcam view and Snap Photo button should disappear--> \n\n\t<div class="camera" ng-if="showAfterWebcam" ng-cloak>\n\t\t<div class="dashed-container">Webcam</div>\n\t\t<button class="snap" ng-click="snapAfterShutter()">Snap photo</button>\n\t</div>\n</div>\n<!-- Then the image should appear with options to accept or retry--> \n\n\t\n\t';

}
return __p
};

this["JST"]["assets/templates/before.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<header>\n\t<h1>Step 1</h1>\n\t<h2>Let\'s add your "before" photo</h2>\n</header>\n<main>\n\n<!-- When you click Take Photo, Camera should appear with option to Snap Photo-->\n\t<div class="before-picture" ng-if="showPhotoOptions">\n\t\t<div class="button-area">\n\t\t\t<button class="takePic" ng-click="takePhoto()">Take a photo</button>\n\t\t\t<p class="option">Or, if you prefer...</p>\n\t\t\t<label class="uploadPic">\n\t    \t\t<input type="file" ng-file-select ng-model="files">\n\t    \t\tChoose a photo to upload\n\t\t\t</label>\n\t\t</div>\n\t</div>\n\n<!-- When you click Snap Photo button the webcam view and Snap Photo button should disappear--> \n\n\t<div class="camera" ng-if="showWebcam" ng-cloak>\n\t\t<div class="dashed-container">Webcam</div>\n\t\t<button class="snap" ng-click="snapShutter()">Snap photo</button>\n\t</div>\n\n<!-- Then the image should appear with options to accept or retry--> \n\n\t<div class="before-photo" ng-if="showAcceptOptions" ng-cloak>\n\t\t<div class="dashed-container">The Stored Image</div>\n\t\t<div class="button-container">\n\t\t\t<button class="retry" ng-click="retry()">Retry</button>\n\t\t\t<button class="accept" ng-click="accept()" ui-sref="after">Accept</button>\n\t\t</div>\n\t</div>\n\t\n</main>';

}
return __p
};

this["JST"]["assets/templates/home.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<main>\n\t<nav>\n        <a ui-sref="home">Home</a>\n        <a ui-sref="login" ng-click="logout()">Log in</a>\n    </nav>\n    <header>\n        <h1>picSumo<h1>\n        <h2>The easiest way to take "before" and "after" pics </h2>\n    </header>\n    <section class="user-form">\n        <form class="signup" ng-submit="register(credentials)" novalidate>\n            <p ng-repeat="errorMessage in error.generic" ng-bind="errorMessage"></p>\n            <label ng-class="error.identifier ? \'error\' : \'\'">\n                <input type="text" placeholder="Enter your email" ng-model="credentials.identifier">\n                <p class="error" ng-bind="error.identifier"></p>\n            </label>\n            <label ng-class="error.password ? \'error\' : \'\'">\n                <input type="password" placeholder="Create a password" ng-model="credentials.password">\n                <p class="error" ng-bind="error.password"><p>\n            </label>\n            <button type="submit">Sign Up</button>\n        </form>\n    </section>\n</main>';

}
return __p
};

this["JST"]["assets/templates/login.html"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<main>\n\t<nav>\n\t    <a ui-sref="home">Home</a>\n\t    <a ui-sref="login">Log in</a>\n\t </nav>\n\t<h1>Please login</h1>\n<section class="user-form">\n\t<form class="signup" ng-submit="login(credentials)">\n\t\t<label ng-class="error.identifier ? \'error\' : \'\'">\n\t\t\t<input type="text" placeholder="Email" ng-model="credentials.identifier">\n\t\t\t<p class="error" ng-bind="error.identifier"></p>\n\t\t</label>\n\t\t<label ng-class="error.password ? \'error\' : \'\'">\n\t\t\t<input type="password" placeholder="Password" ng-model="credentials.password">\n\t\t\t<p class="error" ng-bind="error.password"></p>\n\t\t</label>\n\t\t<button type="submit">Log in</button>\n\t</form>\n</section>\n</main>\n';

}
return __p
};