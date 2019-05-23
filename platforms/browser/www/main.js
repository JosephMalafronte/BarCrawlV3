(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_components/bar-page/bar-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/_components/bar-page/bar-page.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barPageLike {\r\n    position: absolute;\r\n    top:9px;\r\n    right:20px;\r\n    z-index:5;\r\n    width:33px;\r\n}\r\n\r\n.barPageLike img {\r\n    width: 100%;\r\n}\r\n\r\n/* Add a black background color to the top navigation */\r\n\r\n.topnav {\r\n    position: absolute;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.adjust {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.holder  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 12px 0px;\r\n    width: 25%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n\r\n.active {\r\n    background-color: #F2C843;\r\n    color: black;\r\n}\r\n\r\n.collapse {\r\n    display: none;\r\n  }\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 0 0 0;\r\n    transition-property: height, visibility;\r\n    transition-duration: 0.35s;\r\n    transition-timing-function: ease;\r\n  }\r\n\r\n.show {\r\n    display: block !important;\r\n  }\r\n\r\n.barDealsSectionBelow {\r\n    margin-top: -20px;\r\n    padding: 0 0 0 0;\r\n    border-bottom:1px black solid;\r\n  }\r\n\r\n.upcomingTitle {\r\n    margin-top: 10px;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.upcomingTitleAst  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: left;\r\n    padding: 12px 0px;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n.right-pointing-triangle::after {\r\n  content: \"\\25B6 \\FE0E\";\r\n}\r\n\r\n.currentBarCover {\r\n    text-align: center; \r\n    margin-top: 12px;\r\n    padding: 0 0 3px 0;\r\n    line-height:80%;\r\n    font-size:28px;\r\n}\r\n\r\n.currentBarCover span{\r\n    font-size: 16px;\r\n}\r\n\r\n.reportCoverButton {\r\n    margin: 10px 0px 10px 0; width:300px; font-size:14px;\r\n}\r\n\r\n.modal-window {\r\n    position: fixed;\r\n    background-color: rgba(200, 200, 200, 0.75);\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n.modal-window:target {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n  }\r\n\r\n.modal-window>div {\r\n    width: 70%;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    margin: 50% 0 0 7%;\r\n    padding: 2rem;\r\n    background: #fff;\r\n    color: #444;\r\n  }\r\n\r\n.modal-window header {\r\n    font-weight: bold;\r\n  }\r\n\r\n.modal-close {\r\n    color: #aaa;\r\n    line-height: 50px;\r\n    font-size: 30px;\r\n    margin-left: 10px;\r\n    position: absolute;\r\n    right: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    width: 70px;\r\n    text-decoration: none;\r\n  }\r\n\r\n.modal-close:hover {\r\n    color: #000;\r\n  }\r\n\r\n.modal-window h2 {\r\n    font-size: 150%;\r\n    margin: 0 0 15px;\r\n    padding: 0 0 0 0;\r\n  }\r\n\r\n.modal-window h1 {\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    margin: 0 0 15px;\r\n    padding: 0 0 0 0;\r\n  }\r\n\r\n.minus{\r\n      position: absolute;\r\n      left: 26%;\r\n      top: 38%;\r\n      width: 10%;\r\n  }\r\n\r\n.plus{\r\n    position: absolute;\r\n    right: 26%;\r\n    top: 38%;\r\n    width: 10%;\r\n  }\r\n\r\n.checkmark {\r\n    width: 100px;\r\n    margin: 0 auto;\r\n    padding-top: 0px;\r\n  }\r\n\r\n.path {\r\n    stroke-dasharray: 300;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation-name: load, spin;\r\n    -webkit-animation-duration: 3s, 3s;\r\n    -webkit-animation-timing-function: linear;\r\n    -webkit-animation-iteration-count: infinite;\r\n    animation-name: load, spin;\r\n    animation-duration: 3s, 3s;\r\n    animation-timing-function: linear;  \r\n    animation-iteration-count: infinite;\r\n    -webkit-transform-origin: 50% 50%;\r\n    -moz-transform-origin: 50px 50px;\r\n  }\r\n\r\n.path-complete {\r\n      -webkit-animation-play-state: paused;\r\n      animation-play-state: paused;\r\n  }\r\n\r\n.check \r\n  {\r\n      stroke-dasharray: 110;\r\n      stroke-dashoffset: -110;\r\n      stroke-width: 0;\r\n  }\r\n\r\n.check-complete \r\n  {   \r\n      -webkit-animation: check 1s ease-in forwards;\r\n      animation: check 1s ease-in forwards;\r\n      stroke-width: 8;\r\n      stroke-dashoffset: 0;\r\n  }\r\n\r\n.fill \r\n  {\r\n      stroke-dasharray: 285;\r\n      stroke-dashoffset: -257;\r\n      -webkit-animation: spin-fill 3s cubic-bezier(0.700, 0.435, 0.120, 0.600) infinite forwards;\r\n      animation: spin-fill 3s cubic-bezier(0.700, 0.465, 0.120, 0.600) infinite forwards;\r\n      -webkit-transform-origin: 50% 50%;\r\n    -moz-transform-origin: 50px 50px;\r\n  }\r\n\r\n.fill-complete \r\n  {\r\n      -webkit-animation: fill 1s ease-out forwards;\r\n      animation: fill 1s ease-out forwards;\r\n  }\r\n\r\n@-webkit-keyframes load {\r\n   0% {\r\n     stroke-dashoffset: 300;\r\n     -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n   }\r\n   50% {\r\n       stroke-dashoffset: 0;\r\n       -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n   }\r\n   100% {\r\n     stroke-dashoffset: -300;\r\n   }\r\n  }\r\n\r\n@keyframes load {\r\n   0% {\r\n     stroke-dashoffset: 285;\r\n     -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n             animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n   }\r\n   50% {\r\n       stroke-dashoffset: 0;\r\n       -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n               animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n   }\r\n   100% {\r\n     stroke-dashoffset: -285;\r\n   }\r\n  }\r\n\r\n@-webkit-keyframes check {\r\n   0% {\r\n     stroke-dashoffset: -110;\r\n  }\r\n   100% {\r\n     stroke-dashoffset: 0;\r\n   }\r\n  }\r\n\r\n@keyframes check {\r\n   0% {\r\n     stroke-dashoffset: -110;\r\n  }\r\n   100% {\r\n     stroke-dashoffset: 0;\r\n   }\r\n  }\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n@keyframes spin {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes spin-fill {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(720deg);\r\n    }\r\n  }\r\n\r\n@keyframes spin-fill {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(720deg);\r\n              transform: rotate(720deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes fill {\r\n    0% {\r\n      stroke-dashoffset: 285;\r\n    }\r\n    100% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  }\r\n\r\n@keyframes fill {\r\n    0% {\r\n      stroke-dashoffset: 285;\r\n    }\r\n    100% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  }\r\n\r\n.success \r\n  {\r\n      stroke: #009900;\r\n      transition: stroke .6s;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL2Jhci1wYWdlL2Jhci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLHVEQUF1RDs7QUFDdkQ7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQSw4Q0FBOEM7O0FBQzlDO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFHQSwyQ0FBMkM7O0FBQzNDO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBR0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFHaEIsdUNBQXVDO0lBR3ZDLDBCQUEwQjtJQUcxQixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtFQUMvQjs7QUFHQTtJQUNFLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBSUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsY0FBYztBQUN4RDs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQ0FBMkM7SUFDM0MsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0JBQW9CO0lBR3BCLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7QUFFQTtNQUNJLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLFVBQVU7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7RUFDWjs7QUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7TUFDSSxvQ0FBb0M7TUFDcEMsNEJBQTRCO0VBQ2hDOztBQUVBOztNQUVJLHFCQUFxQjtNQUNyQix1QkFBdUI7TUFDdkIsZUFBZTtFQUNuQjs7QUFFQTs7TUFFSSw0Q0FBNEM7TUFDNUMsb0NBQW9DO01BQ3BDLGVBQWU7TUFDZixvQkFBb0I7RUFDeEI7O0FBRUE7O01BRUkscUJBQXFCO01BQ3JCLHVCQUF1QjtNQUN2QiwwRkFBMEY7TUFDMUYsa0ZBQWtGO01BQ2xGLGlDQUFpQztJQUNuQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7O01BRUksNENBQTRDO01BQzVDLG9DQUFvQztFQUN4Qzs7QUFFQTtHQUNDO0tBQ0Usc0JBQXNCO0tBQ3RCLDJFQUEyRTtHQUM3RTtHQUNBO09BQ0ksb0JBQW9CO09BQ3BCLDJFQUEyRTtHQUMvRTtHQUNBO0tBQ0UsdUJBQXVCO0dBQ3pCO0VBQ0Q7O0FBQ0E7R0FDQztLQUNFLHNCQUFzQjtLQUN0QiwyRUFBbUU7YUFBbkUsbUVBQW1FO0dBQ3JFO0dBQ0E7T0FDSSxvQkFBb0I7T0FDcEIsMkVBQW1FO2VBQW5FLG1FQUFtRTtHQUN2RTtHQUNBO0tBQ0UsdUJBQXVCO0dBQ3pCO0VBQ0Q7O0FBRUE7R0FDQztLQUNFLHVCQUF1QjtFQUMxQjtHQUNDO0tBQ0Usb0JBQW9CO0dBQ3RCO0VBQ0Q7O0FBQ0E7R0FDQztLQUNFLHVCQUF1QjtFQUMxQjtHQUNDO0tBQ0Usb0JBQW9CO0dBQ3RCO0VBQ0Q7O0FBRUE7SUFDRTtNQUNFLCtCQUErQjtJQUNqQztJQUNBO01BQ0UsaUNBQWlDO0lBQ25DO0VBQ0Y7O0FBQ0E7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRjs7QUFFQTtJQUNFO01BQ0UsK0JBQStCO0lBQ2pDO0lBQ0E7TUFDRSxpQ0FBaUM7SUFDbkM7RUFDRjs7QUFDQTtJQUNFO01BQ0UsK0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQXlCO2NBQXpCLHlCQUF5QjtJQUMzQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLG9CQUFvQjtJQUN0QjtFQUNGOztBQUNBO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLG9CQUFvQjtJQUN0QjtFQUNGOztBQUVBOztNQUVJLGVBQWU7TUFDZixzQkFBc0I7RUFDMUIiLCJmaWxlIjoiX2NvbXBvbmVudHMvYmFyLXBhZ2UvYmFyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJQYWdlTGlrZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6OXB4O1xyXG4gICAgcmlnaHQ6MjBweDtcclxuICAgIHotaW5kZXg6NTtcclxuICAgIHdpZHRoOjMzcHg7XHJcbn1cclxuXHJcbi5iYXJQYWdlTGlrZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcbi50b3BuYXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4uYWRqdXN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbiAgXHJcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXHJcbi5ob2xkZXIgIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkM4NDM7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb2xsYXBzZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsYXBzaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5iYXJEZWFsc1NlY3Rpb25CZWxvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBibGFjayBzb2xpZDtcclxuICB9XHJcblxyXG5cclxuICAudXBjb21pbmdUaXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAudXBjb21pbmdUaXRsZUFzdCAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxuXHJcbi5yaWdodC1wb2ludGluZy10cmlhbmdsZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwyNUI2IFxcRkUwRVwiO1xyXG59XHJcblxyXG4uY3VycmVudEJhckNvdmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMCAwIDNweCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6ODAlO1xyXG4gICAgZm9udC1zaXplOjI4cHg7XHJcbn1cclxuXHJcbi5jdXJyZW50QmFyQ292ZXIgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnJlcG9ydENvdmVyQnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwOyB3aWR0aDozMDBweDsgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbi5tb2RhbC13aW5kb3cge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjc1KTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC13aW5kb3c6dGFyZ2V0IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXdpbmRvdz5kaXYge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDUwJSAwIDAgNyU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtd2luZG93IGhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jbG9zZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXdpbmRvdyBoMiB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICB9XHJcbiAgLm1vZGFsLXdpbmRvdyBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gIH1cclxuXHJcbiAgLm1pbnVze1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDI2JTtcclxuICAgICAgdG9wOiAzOCU7XHJcbiAgICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG5cclxuICAucGx1c3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNiU7XHJcbiAgICB0b3A6IDM4JTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG5cclxuICAuY2hlY2ttYXJrIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhdGgge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsb2FkLCBzcGluO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzLCAzcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsb2FkLCBzcGluO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcywgM3M7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7ICBcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MHB4IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXRoLWNvbXBsZXRlIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2sgXHJcbiAge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxMTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTEwO1xyXG4gICAgICBzdHJva2Utd2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVjay1jb21wbGV0ZSBcclxuICB7ICAgXHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVjayAxcyBlYXNlLWluIGZvcndhcmRzO1xyXG4gICAgICBhbmltYXRpb246IGNoZWNrIDFzIGVhc2UtaW4gZm9yd2FyZHM7XHJcbiAgICAgIHN0cm9rZS13aWR0aDogODtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxsIFxyXG4gIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMjg1O1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTI1NztcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4tZmlsbCAzcyBjdWJpYy1iZXppZXIoMC43MDAsIDAuNDM1LCAwLjEyMCwgMC42MDApIGluZmluaXRlIGZvcndhcmRzO1xyXG4gICAgICBhbmltYXRpb246IHNwaW4tZmlsbCAzcyBjdWJpYy1iZXppZXIoMC43MDAsIDAuNDY1LCAwLjEyMCwgMC42MDApIGluZmluaXRlIGZvcndhcmRzO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwcHggNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGwtY29tcGxldGUgXHJcbiAge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmlsbCAxcyBlYXNlLW91dCBmb3J3YXJkcztcclxuICAgICAgYW5pbWF0aW9uOiBmaWxsIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZCB7XHJcbiAgIDAlIHtcclxuICAgICBzdHJva2UtZGFzaG9mZnNldDogMzAwO1xyXG4gICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICAgfVxyXG4gICA1MCUge1xyXG4gICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgIH1cclxuICAgMTAwJSB7XHJcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zMDA7XHJcbiAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsb2FkIHtcclxuICAgMCUge1xyXG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODU7XHJcbiAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICAgfVxyXG4gICA1MCUge1xyXG4gICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gICB9XHJcbiAgIDEwMCUge1xyXG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjg1O1xyXG4gICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjaGVjayB7XHJcbiAgIDAlIHtcclxuICAgICBzdHJva2UtZGFzaG9mZnNldDogLTExMDtcclxuICB9XHJcbiAgIDEwMCUge1xyXG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgY2hlY2sge1xyXG4gICAwJSB7XHJcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMTA7XHJcbiAgfVxyXG4gICAxMDAlIHtcclxuICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbi1maWxsIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc3Bpbi1maWxsIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZpbGwge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMjg1O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGZpbGwge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMjg1O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc3VjY2VzcyBcclxuICB7XHJcbiAgICAgIHN0cm9rZTogIzAwOTkwMDtcclxuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlIC42cztcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/_components/bar-page/bar-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/bar-page/bar-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slideInPage\" [@slideInBarTrigger]=\"slideInBar\">\r\n  <app-full-loading *ngIf=\"isLoading\"></app-full-loading>\r\n\r\n  <div id=\"slider_maincontent\">\r\n\r\n    <h2 class=\"page_title_slide\">{{barName}}</h2>\r\n    <span class=\"barPageLike\" (click)=\"likeBar()\">\r\n      <img id=\"like\" [src]=\"checkLikedStatus()? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\r\n        alt=\"\" title=\"\" />\r\n    </span>\r\n\r\n    <ul id=\"imageGallery\" style=\"margin-bottom: -12px;\">\r\n      <li data-thumb=\"img/thumb/cS-1.jpg\" data-src=\"img/largeImage.jpg\">\r\n        <img [src]=\"barPictureUrl\" (load)=\"imageLoaded()\" width=\"100%\" id=\"barPageImage1\" />\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"page_single layout_fullwidth_padding\" style=\"margin-bottom: 40px;\">\r\n\r\n\r\n      <div class=\"topnav\">\r\n        <div class=\"adjust\">\r\n          <div (click)=\"setActiveInfoPage(0)\" [className]=\"activeNavIcon(0)? 'holder active'  : 'holder'\">\r\n            <span>Deals</span>\r\n          </div>\r\n          <div (click)=\"setActiveInfoPage(1)\" [className]=\"activeNavIcon(1)? 'holder active'  : 'holder'\">\r\n            <span>Cover</span>\r\n          </div>\r\n          <div (click)=\"setActiveInfoPage(2)\" [className]=\"activeNavIcon(2)? 'holder active'  : 'holder'\">\r\n            <span>Friends</span>\r\n          </div>\r\n          <div (click)=\"setActiveInfoPage(3)\" [className]=\"activeNavIcon(3)? 'holder active'  : 'holder'\">\r\n            <span>Map</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <blockquote style=\"display:none\">\r\n        This mobile template that can be used to create a mobile website, a mobile web app, or even a native mobile app. The design\r\n        is using a full width layout that works perfectly on tablets and desktop also.\r\n        <span>SINDEVO.COM</span>\r\n      </blockquote> -->\r\n\r\n      <router-outlet></router-outlet>\r\n\r\n\r\n\r\n      <!-- BAR DEALS -->\r\n      <!-- <app-barpage-deals></app-barpage-deals> -->\r\n\r\n\r\n      <!-- BAR COVER -->\r\n      <!-- <app-barpage-cover></app-barpage-cover> -->\r\n\r\n\r\n\r\n      <!-- BAR FRIENDS -->\r\n      <div *ngIf=\"activeInfoPage==2\" style=\"padding-top:50px;\">\r\n        <div class=\"barDealsSection\">\r\n          <h3 style=\"padding: 0 0 0 0;\">\r\n            <span>Friends Going Here Tonight</span>\r\n          </h3>\r\n        </div>\r\n\r\n        <div>\r\n          <ul class=\"features_list\" *ngFor=\"let dailyDeal of headDailyDeals\" style=\"padding: 0px 0 0 0; position:relative\">\r\n            <li>\r\n              <div style=\"padding-bottom: 10px;\">\r\n                <span class=\"features_list_span\">\r\n                  <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\r\n                  <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\r\n                </span>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      \r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_components/bar-page/bar-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/_components/bar-page/bar-page.component.ts ***!
  \************************************************************/
/*! exports provided: BarPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarPageComponent", function() { return BarPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _directives_date_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_directives/date.directive */ "./src/app/_directives/date.directive.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_barpage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/barpage.service */ "./src/app/_services/barpage.service.ts");








var BarPageComponent = /** @class */ (function () {
    function BarPageComponent(_dbA, _dateDirective, _authService, _barpageService, router) {
        this.router = router;
        this.slideInBar = false;
        this.isLoading = true;
        this.barName = "";
        this.barPictureUrl = "";
        this.likeImageStatus = "lovefilledblack";
        this.activeInfoPage = 0;
        this.db = _dbA;
        this.authService = _authService;
        this.dateDirective = _dateDirective;
        this.barpageService = _barpageService;
        //this.dayOfTheWeek = _dateDirective.getDayOfWeek();
        this.dayOfTheWeek = "Wednesday";
    }
    Object.defineProperty(BarPageComponent.prototype, "barPageIdChange", {
        set: function (barId) {
            if (this.barPageId != 0 && this.barPageId != barId) {
                this.barpageService.setBarPage(null);
                this.getBarPage(barId);
            }
        },
        enumerable: true,
        configurable: true
    });
    BarPageComponent.prototype.ngOnInit = function () {
    };
    //COVERS: Get Mode of day.values and mode of day.hourValues. If hourvalues mode> values mode display hourvalues
    //If current Hour > Last Hour wipe hour Values and update last hour
    BarPageComponent.prototype.clearBarPageData = function () {
        this.isLoading = true;
        this.barPictureUrl = "";
        this.barName = "";
        this.barPictureUrl = "";
    };
    BarPageComponent.prototype.getBarPage = function (barId) {
        var _this = this;
        this.barPageId = barId;
        this.clearBarPageData();
        this.db.object('barPages/' + this.barPageId.toString()).valueChanges().subscribe(function (result) {
            _this.barPage = result;
            _this.barpageService.setBarPage(_this.barPage);
            _this.barPictureUrl = _this.barPage.barPicture1Url;
            _this.barName = _this.barPage.barName;
        });
    };
    BarPageComponent.prototype.imageLoaded = function () {
        this.isLoading = false;
    };
    BarPageComponent.prototype.checkLikedStatus = function () {
        if (this.authService.currentUser.likedBars == undefined)
            return;
        if (this.authService.currentUser.likedBars.indexOf(this.barPageId) == -1) {
            return false;
        }
        else
            return true;
    };
    BarPageComponent.prototype.likeBar = function () {
        this.authService.likeBar(this.barPageId);
    };
    BarPageComponent.prototype.activeNavIcon = function (index) {
        if (this.activeInfoPage == index)
            return true;
        return false;
    };
    BarPageComponent.prototype.setActiveInfoPage = function (index) {
        if (index == this.activeInfoPage)
            return;
        document.body.scrollTop = 0;
        if (index == 0) {
            this.router.navigateByUrl('/main/barlist/deals');
        }
        if (index == 1) {
            this.router.navigateByUrl('/main/barlist/cover');
        }
        this.activeInfoPage = index;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], BarPageComponent.prototype, "barPageIdChange", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], BarPageComponent.prototype, "slideInBar", void 0);
    BarPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bar-page',
            template: __webpack_require__(/*! ./bar-page.component.html */ "./src/app/_components/bar-page/bar-page.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInBarTrigger', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(100%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0%)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])(200))
                ])
            ],
            styles: [__webpack_require__(/*! ./bar-page.component.css */ "./src/app/_components/bar-page/bar-page.component.css"), __webpack_require__(/*! ../../_pages/main/main.component.css */ "./src/app/_pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _directives_date_directive__WEBPACK_IMPORTED_MODULE_5__["DateDirective"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _services_barpage_service__WEBPACK_IMPORTED_MODULE_7__["BarPageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BarPageComponent);
    return BarPageComponent;
}());



/***/ }),

/***/ "./src/app/_components/barpage-cover/barpage-cover.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/_components/barpage-cover/barpage-cover.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barPageLike {\r\n    position: absolute;\r\n    top:9px;\r\n    right:20px;\r\n    z-index:5;\r\n    width:33px;\r\n}\r\n\r\n.barPageLike img {\r\n    width: 100%;\r\n}\r\n\r\n/* Add a black background color to the top navigation */\r\n\r\n.topnav {\r\n    position: absolute;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.adjust {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.holder  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 12px 0px;\r\n    width: 25%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n\r\n.active {\r\n    background-color: #F2C843;\r\n    color: black;\r\n}\r\n\r\n.collapse {\r\n    display: none;\r\n  }\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 0 0 0;\r\n    transition-property: height, visibility;\r\n    transition-duration: 0.35s;\r\n    transition-timing-function: ease;\r\n  }\r\n\r\n.show {\r\n    display: block !important;\r\n  }\r\n\r\n.barDealsSectionBelow {\r\n    margin-top: -20px;\r\n    padding: 0 0 0 0;\r\n    border-bottom:1px black solid;\r\n  }\r\n\r\n.upcomingTitle {\r\n    margin-top: 10px;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.upcomingTitleAst  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: left;\r\n    padding: 12px 0px;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n.right-pointing-triangle::after {\r\n  content: \"\\25B6 \\FE0E\";\r\n}\r\n\r\n.currentBarCover {\r\n    text-align: center; \r\n    margin-top: 12px;\r\n    padding: 0 0 3px 0;\r\n    line-height:80%;\r\n    font-size:28px;\r\n}\r\n\r\n.currentBarCover span{\r\n    font-size: 16px;\r\n}\r\n\r\n.reportCoverButton {\r\n    margin: 10px 0px 10px 0; width:300px; font-size:14px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL2JhcnBhZ2UtY292ZXIvYmFycGFnZS1jb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSx1REFBdUQ7O0FBQ3ZEO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsOENBQThDOztBQUM5QztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBR0EsMkNBQTJDOztBQUMzQztJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBR2hCLHVDQUF1QztJQUd2QywwQkFBMEI7SUFHMUIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2QkFBNkI7RUFDL0I7O0FBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUlBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCLEVBQUUsV0FBVyxFQUFFLGNBQWM7QUFDeEQiLCJmaWxlIjoiX2NvbXBvbmVudHMvYmFycGFnZS1jb3Zlci9iYXJwYWdlLWNvdmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyUGFnZUxpa2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjlweDtcclxuICAgIHJpZ2h0OjIwcHg7XHJcbiAgICB6LWluZGV4OjU7XHJcbiAgICB3aWR0aDozM3B4O1xyXG59XHJcblxyXG4uYmFyUGFnZUxpa2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xyXG4udG9wbmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLmFkanVzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4gIFxyXG4vKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xyXG4uaG9sZGVyICB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxuLyogQWRkIGEgY29sb3IgdG8gdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDODQzO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29sbGFwc2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG5cclxuICAuY29sbGFwc2luZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICB9XHJcblxyXG4gIC5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYmFyRGVhbHNTZWN0aW9uQmVsb3cge1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggYmxhY2sgc29saWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnVwY29taW5nVGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnVwY29taW5nVGl0bGVBc3QgIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuXHJcblxyXG4ucmlnaHQtcG9pbnRpbmctdHJpYW5nbGU6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcMjVCNiBcXEZFMEVcIjtcclxufVxyXG5cclxuLmN1cnJlbnRCYXJDb3ZlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIHBhZGRpbmc6IDAgMCAzcHggMDtcclxuICAgIGxpbmUtaGVpZ2h0OjgwJTtcclxuICAgIGZvbnQtc2l6ZToyOHB4O1xyXG59XHJcblxyXG4uY3VycmVudEJhckNvdmVyIHNwYW57XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5yZXBvcnRDb3ZlckJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMDsgd2lkdGg6MzAwcHg7IGZvbnQtc2l6ZToxNHB4O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_components/barpage-cover/barpage-cover.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/barpage-cover/barpage-cover.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"hidePage\" style=\"padding-top:50px;\">\r\n    <h3 class=\"currentBarCover\">${{currentEstCover}}\r\n      <br />\r\n      <span>Current Reported Cover</span>\r\n    </h3>\r\n\r\n    <div (click)=\"toggleCoverPopUp()\" style=\"text-align: center\">\r\n      <span style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\" class=\"btn btn--full\">Report Cover</span>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <h5 style=\"padding: 0 0 0px 0; border-bottom: 1px black solid;\">Projected Cover by Hour</h5>\r\n    <div style=\"margin: 7px 10px 0 10px;\">\r\n      <ul class=\"responsive_table\" style=\"width:100%; text-align: center; padding-bottom: 30px;\">\r\n        <li class=\"table_row\" style=\"background-color: #636158;  color: white;\">\r\n          <div class=\"table_section_small\">Hour</div>\r\n          <div class=\"table_section\">Price</div>\r\n          <div class=\"table_section\">How Packed?</div>\r\n        </li>\r\n        <div *ngIf=\"showHourlyEstimates\">\r\n          <li class=\"table_row\" *ngFor=\"let est of hourlyEstimates\" style=\"background-color:#f5f5f4;\">\r\n            <div class=\"table_section_small\">{{est.hourString}}</div>\r\n            <div class=\"table_section\">${{est.cover}}</div>\r\n            <div class=\"table_section\">{{est.waitString}}</div>\r\n          </li>\r\n        </div>\r\n\r\n\r\n      </ul>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/_components/barpage-cover/barpage-cover.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_components/barpage-cover/barpage-cover.component.ts ***!
  \**********************************************************************/
/*! exports provided: BarpageCoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarpageCoverComponent", function() { return BarpageCoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _directives_date_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_directives/date.directive */ "./src/app/_directives/date.directive.ts");
/* harmony import */ var _services_barpage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/barpage.service */ "./src/app/_services/barpage.service.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../models */ "./src/app/models.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var BarpageCoverComponent = /** @class */ (function () {
    function BarpageCoverComponent(_dbA, _dateDirective, _barpageService, mainService) {
        this.mainService = mainService;
        this.hidePage = true;
        this.currentEstCover = 0;
        this.hourlyEstimates = [];
        this.showHourlyEstimates = false;
        this.showCoverPopUp = false;
        this.reportCoverValue = 0;
        this.showPlus = true;
        this.showMinus = false;
        this.coverSubmissionLoader = false;
        //Cover Timing
        this.numberSinceRefresh = 0;
        this.db = _dbA;
        this.dateDirective = _dateDirective;
        this.barpageService = _barpageService;
        //this.dayOfTheWeek = _dateDirective.getDayOfWeek();
        this.dayOfTheWeek = "Wednesday";
        var self = this;
        setInterval(function () {
            self.numberSinceRefresh = 0;
        }, 30000);
    }
    BarpageCoverComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.barpageService.currentBarPage.subscribe(function (value) {
            if (value != null) {
                _this.barPage = value;
                _this.barPageId = _this.barPage.barId;
                _this.barName = _this.barPage.barName;
                _this.getCoverInfo();
            }
        });
        this.mainService.reportCoverSwitch.subscribe(function (result) {
            if (result == true) {
                _this.reportCoverValue = _this.mainService.reportCoverValue;
                console.log(_this.reportCoverValue);
                _this.reportCover();
                _this.mainService.reportCoverSwitch.next(false);
            }
        });
    };
    //Cover Functions
    BarpageCoverComponent.prototype.getCoverInfo = function () {
        var _this = this;
        this.coverDateSetup();
        this.db.object('/coverReports/' + this.barPageId.toString() + '/' + this.coverDayOfTheWeek).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
        //this.db.object('/coverReports/' + this.barPageId.toString() + '/' + 'Wednesday').valueChanges().pipe(take(1)).subscribe(
        function (result) {
            _this.coverResult = result;
            _this.cleanCoverDatabase();
            _this.estimateCurrentCover();
            _this.loadHourlyEstimates();
        });
    };
    BarpageCoverComponent.prototype.coverDateSetup = function () {
        this.currentDate = new Date;
        var date = this.currentDate;
        this.currentHour = date.getHours();
        this.currentHourString = this.currentHour.toString() + 'time';
        //USE THIS WHEN NOT TESTIng
        // if(this.currentHour < 5) {
        //   this.coverDayOfTheWeek = this.dateDirective.backOneDay(this.dayOfTheWeek);
        // }
        // else this.coverDayOfTheWeek = this.dayOfTheWeek;
        this.coverDayOfTheWeek = "Wednesday";
    };
    BarpageCoverComponent.prototype.cleanCoverDatabase = function () {
        var currentMonth = this.currentDate.getMonth() + 1;
        var currentDay = this.currentDate.getDate();
        var postedDateMonth = this.coverResult.lastMonth;
        var postedDateDay = this.coverResult.lastDay;
        var dayDif = currentDay - postedDateDay;
        var notValidDate = false;
        var needToUpdate = false;
        if (currentMonth != postedDateMonth)
            notValidDate = true;
        if (currentMonth == postedDateMonth && dayDif > 1 && dayDif < 0)
            notValidDate = true;
        var lastRecordedHour = +this.coverResult.lastHour;
        if (notValidDate == true) {
            needToUpdate = true;
            this.coverResult.lastDay = currentDay;
            this.coverResult.lastMonth = currentMonth;
            this.coverResult.hourValues = "[]";
            this.coverResult.values = "[]";
            this.coverResult.lastHour = "null";
            this.coverResult.hourValues = "[]";
        }
        else if (this.currentHour - lastRecordedHour > 1) {
            needToUpdate = true;
            this.coverResult.lastHour = "null";
            this.coverResult.hourValues = "[]";
        }
        if (needToUpdate == true)
            this.db.object('/coverReports/' + this.barPageId.toString() + '/' + this.coverDayOfTheWeek).set(this.coverResult);
    };
    BarpageCoverComponent.prototype.estimateCurrentCover = function () {
        //Get mode for the entire night
        var valuesNight = JSON.parse(this.coverResult.values);
        //if this is empty use historical values
        if (valuesNight.length == 0) {
            var historicalValues = JSON.parse(this.coverResult.hourlyEstimates[this.currentHourString].cover);
            this.currentEstCover = this.getMode(historicalValues);
            return;
        }
        var modeNight = this.getMode(valuesNight);
        //get mode for the past hour if its the past hour
        if (this.coverResult.lastHour == "null") {
            this.currentEstCover = modeNight;
            return;
        }
        var lastRecordedHour = +this.coverResult.lastHour;
        var modeHour = 0;
        if (this.currentHour - lastRecordedHour <= 1) {
            var valuesHour = JSON.parse(this.coverResult.hourValues);
            if (valuesHour.length > 1)
                modeHour = this.getMode(valuesHour);
        }
        this.currentEstCover = Math.max(modeHour, modeNight);
    };
    BarpageCoverComponent.prototype.loadHourlyEstimates = function () {
        // var hourPullArray = ["8","9","10","11","12","1","2","3"];
        // hourPullArray.forEach(item => {
        //   var insert =
        // });
        var _this = this;
        this.hourlyEstimates = [];
        var estimateArray = Object.keys(this.coverResult.hourlyEstimates).map(function (key) { return _this.coverResult.hourlyEstimates[key]; });
        estimateArray.forEach(function (result) {
            var insert = new _models__WEBPACK_IMPORTED_MODULE_6__["HourlyEstimate"]();
            var coverMode = _this.getMode(JSON.parse(result.cover));
            insert.cover = coverMode;
            var waitMode = _this.getMode(JSON.parse(result.waitTimes));
            insert.wait = waitMode;
            if (insert.wait == 0)
                insert.waitString = "No Line";
            else
                insert.waitString = insert.wait.toString() + ' Minutes';
            insert.hour = result.hour;
            if (insert.hour == 0)
                insert.hourString = "12am";
            else if (insert.hour < 5) {
                insert.hourString = insert.hour.toString() + 'am';
            }
            else if (insert.hour > 12) {
                var num = insert.hour - 12;
                insert.hourString = num.toString() + 'pm';
            }
            else
                insert.hourString = insert.hour.toString() + 'pm';
            if (insert.hour < 4 || insert.hour > 19) {
                _this.hourlyEstimates.push(insert);
            }
            _this.hourlyEstimates.sort(function (a, b) {
                if (a.hour < 5 && b.hour < 5)
                    return a.hour - b.hour;
                else if (a.hour < 5)
                    return 1;
                else if (b.hour < 5)
                    return -1;
                return a.hour - b.hour;
            });
        });
        this.showHourlyEstimates = true;
        this.hidePage = false;
    };
    BarpageCoverComponent.prototype.getMode = function (array) {
        var frequency = {}; // array of frequency.
        var maxFreq = 0; // holds the max frequency.
        var modes = [];
        for (var i in array) {
            frequency[array[i]] = (frequency[array[i]] || 0) + 1; // increment frequency.
            if (frequency[array[i]] > maxFreq) { // is this frequency > max so far ?
                maxFreq = frequency[array[i]]; // update max.
            }
        }
        for (var k in frequency) {
            if (frequency[k] == maxFreq) {
                modes.push(k);
            }
        }
        return Math.max.apply(Math, modes);
    };
    BarpageCoverComponent.prototype.toggleCoverPopUp = function () {
        this.mainService.activateCoverPopUp();
    };
    BarpageCoverComponent.prototype.reportCover = function () {
        console.log('Report Cover');
        var num = this.reportCoverValue;
        this.numberSinceRefresh++;
        if (this.numberSinceRefresh > 2) {
            return;
        }
        //TODO add logic to make sure dates arent messed up if user waits too long to report
        this.coverDateSetup();
        var estimateArray = JSON.parse(this.coverResult.hourlyEstimates[this.currentHourString].cover);
        //If length is greater than 30 wipe it and add 5 reps for weighting
        if (estimateArray.length > 30) {
            estimateArray = [];
            for (var i = 0; i < 5; i++) {
                estimateArray.push(num);
            }
        }
        else
            estimateArray.push(num);
        this.coverResult.hourlyEstimates[this.currentHourString].cover = this.convertArrayJson(estimateArray);
        var valuesArray = JSON.parse(this.coverResult.values);
        valuesArray.push(num);
        this.coverResult.values = this.convertArrayJson(valuesArray);
        this.coverResult.lastHour = this.currentHour.toString();
        var hoursArray = JSON.parse(this.coverResult.hourValues);
        hoursArray.push(num);
        this.coverResult.hourValues = this.convertArrayJson(hoursArray);
        this.db.object('/coverReports/' + this.barPageId.toString() + '/' + this.coverDayOfTheWeek).set(this.coverResult);
        this.coverSubmissionLoader = true;
        this.mainService.hideCoverPopUp();
        this.coverSubmissionLoader = false;
    };
    BarpageCoverComponent.prototype.convertArrayJson = function (array) {
        return '[' + array.toString() + ']';
    };
    BarpageCoverComponent.prototype.getLast30 = function (array) {
        var length = array.length;
        if (length <= 30)
            return array;
        var returnArray = [];
        var j = 0;
        for (var i = length; i >= length - 30; i--) {
            returnArray[j] = array[i];
        }
    };
    BarpageCoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barpage-cover',
            template: __webpack_require__(/*! ./barpage-cover.component.html */ "./src/app/_components/barpage-cover/barpage-cover.component.html"),
            styles: [__webpack_require__(/*! ./barpage-cover.component.css */ "./src/app/_components/barpage-cover/barpage-cover.component.css"), __webpack_require__(/*! ../../_pages/main/main.component.css */ "./src/app/_pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _directives_date_directive__WEBPACK_IMPORTED_MODULE_3__["DateDirective"],
            _services_barpage_service__WEBPACK_IMPORTED_MODULE_4__["BarPageService"],
            _services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]])
    ], BarpageCoverComponent);
    return BarpageCoverComponent;
}());



/***/ }),

/***/ "./src/app/_components/barpage-deals/barpage-deals.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/_components/barpage-deals/barpage-deals.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barPageLike {\r\n    position: absolute;\r\n    top:9px;\r\n    right:20px;\r\n    z-index:5;\r\n    width:33px;\r\n}\r\n\r\n.barPageLike img {\r\n    width: 100%;\r\n}\r\n\r\n/* Add a black background color to the top navigation */\r\n\r\n.topnav {\r\n    position: absolute;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.adjust {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.holder  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 12px 0px;\r\n    width: 25%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n\r\n.active {\r\n    background-color: #F2C843;\r\n    color: black;\r\n}\r\n\r\n.collapse {\r\n    display: none;\r\n  }\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 0 0 0;\r\n    transition-property: height, visibility;\r\n    transition-duration: 0.35s;\r\n    transition-timing-function: ease;\r\n  }\r\n\r\n.show {\r\n    display: block !important;\r\n  }\r\n\r\n.barDealsSectionBelow {\r\n    margin-top: -20px;\r\n    padding: 40px 0 0 0;\r\n    border-bottom:1px black solid;\r\n  }\r\n\r\n.upcomingTitle {\r\n    margin-top: 10px;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.upcomingTitleAst  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: left;\r\n    padding: 12px 0px;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n.right-pointing-triangle::after {\r\n  content: \"\\25B6 \\FE0E\";\r\n}\r\n\r\n.expandButton{\r\n  margin: 10px 0 0 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL2JhcnBhZ2UtZGVhbHMvYmFycGFnZS1kZWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSx1REFBdUQ7O0FBQ3ZEO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsOENBQThDOztBQUM5QztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBR0EsMkNBQTJDOztBQUMzQztJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBR2hCLHVDQUF1QztJQUd2QywwQkFBMEI7SUFHMUIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7O0FBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUlBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Il9jb21wb25lbnRzL2JhcnBhZ2UtZGVhbHMvYmFycGFnZS1kZWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhclBhZ2VMaWtlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDo5cHg7XHJcbiAgICByaWdodDoyMHB4O1xyXG4gICAgei1pbmRleDo1O1xyXG4gICAgd2lkdGg6MzNweDtcclxufVxyXG5cclxuLmJhclBhZ2VMaWtlIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogQWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgdG9wIG5hdmlnYXRpb24gKi9cclxuLnRvcG5hdiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbi5hZGp1c3Qge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuICBcclxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cclxuLmhvbGRlciAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuXHJcbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyQzg0MztcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNvbGxhcHNlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNvbGxhcHNpbmcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcclxuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XHJcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgfVxyXG5cclxuICAuc2hvdyB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJhckRlYWxzU2VjdGlvbkJlbG93IHtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgcGFkZGluZzogNDBweCAwIDAgMDtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IGJsYWNrIHNvbGlkO1xyXG4gIH1cclxuXHJcblxyXG4gIC51cGNvbWluZ1RpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4gIC51cGNvbWluZ1RpdGxlQXN0ICB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnJpZ2h0LXBvaW50aW5nLXRyaWFuZ2xlOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcXDI1QjYgXFxGRTBFXCI7XHJcbn1cclxuXHJcblxyXG4uZXhwYW5kQnV0dG9ue1xyXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/_components/barpage-deals/barpage-deals.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/barpage-deals/barpage-deals.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"hidePage\" style=\"padding-top: 50px;\">\n    <div class=\"barDealsSection\">\n      <h3 style=\"padding: 0 0 0 0;\">\n        <span>Deals & Events - {{dayOfTheWeek}}</span>\n      </h3>\n    </div>\n\n\n\n    <div *ngIf=\"!noDailyDeals\">\n\n\n\n      <!-- Head Daily Deals -->\n      <div id=\"headDeals\" style=\"\">\n        <ul class=\"features_list\" *ngFor=\"let dailyDeal of headDailyDeals\" style=\"padding: 0px 0 0 0; position:relative\">\n          <li>\n            <div style=\"padding-bottom: 10px;\">\n              <span class=\"features_list_span\">\n                <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n              </span>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n\n      <!-- Tail Daily Deals -->\n      <div id=\"demo\" class=\"collapse\">\n        <ul class=\"features_list\" *ngFor=\"let dailyDeal of tailDailyDeals\" style=\"padding: 0 0 0px 0; position: relative;\">\n          <li>\n            <div style=\"padding-bottom: 10px;\">\n              <span class=\"features_list_span\">\n                <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n              </span>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n\n\n\n    </div>\n\n\n    <span  data-toggle=\"collapse\" data-target=\"#demo\" *ngIf=\"!noDailyDeals && tailDailyDeals.length!=0\"\n      (click)=\"handleExpandButtonClick()\" class=\"btn btn--full expandButton\">{{expandDealsButtonText}}</span>\n\n    <h5 *ngIf=\"noDailyDeals\">There are no deals or events for today.</h5>\n\n\n    <div class=\"barDealsSectionBelow\">\n      <h3 style=\"padding: 0 0 0 0;\">\n        <span>Upcoming Deals & Events</span>\n      </h3>\n    </div>\n\n\n\n\n\n    <div *ngFor=\"let upcomingDeal of upcomingDealsHead\">\n      <div class=\"upcomingTitle\" (click)=\"upcomingDeal.expand()\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + upcomingDeal.dayOfTheWeek\">\n        <div class=\"upcomingTitleAst\">\n          <span>\n            <span [innerHtml]=\"upcomingDeal.arrowText\" style=\"padding: 0 8px 0 13px;\"> </span> {{upcomingDeal.dayOfTheWeek}} </span>\n        </div>\n      </div>\n\n      <div [attr.id]=\"upcomingDeal.dayOfTheWeek\" class=\"collapse\">\n        <div id=\"upcomingDeals\" style=\"margin: 0 20px 0 20px;\">\n          <ul class=\"features_list\" *ngFor=\"let dailyDeal of upcomingDeal.deals\" style=\"padding: 0px 0 0 0; position:relative\">\n            <li>\n              <div style=\"padding-bottom: 10px;\">\n                <span class=\"features_list_span\">\n                  <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                  <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n                </span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"upcomingCollapse\" class=\"collapse\">\n      <div *ngFor=\"let upcomingDeal of upcomingDealsTail\">\n        <div class=\"upcomingTitle\" (click)=\"upcomingDeal.expand()\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + upcomingDeal.dayOfTheWeek\">\n          <div class=\"upcomingTitleAst\">\n            <span>\n              <span [innerHtml]=\"upcomingDeal.arrowText\" style=\"padding: 0 8px 0 13px;\"> </span>\n              {{upcomingDeal.dayOfTheWeek}} </span>\n          </div>\n        </div>\n\n        <div [attr.id]=\"upcomingDeal.dayOfTheWeek\" class=\"collapse\">\n          <div id=\"upcomingDeals\" style=\"margin: 0 20px 0 20px;\">\n            <ul class=\"features_list\" *ngFor=\"let dailyDeal of upcomingDeal.deals\" style=\"padding: 0px 0 0 0; position:relative\">\n              <li>\n                <div style=\"padding-bottom: 10px;\">\n                  <span class=\"features_list_span\">\n                    <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                    <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n                  </span>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <span data-toggle=\"collapse\" data-target=\"#upcomingCollapse\" *ngIf=\"upcomingDealsTail.length!=0\"\n      (click)=\"handleUpcomingExpandButtonClick()\" class=\"btn btn--full expandButton\">{{expandUpcomingText}}</span>\n\n\n\n\n  </div>"

/***/ }),

/***/ "./src/app/_components/barpage-deals/barpage-deals.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/_components/barpage-deals/barpage-deals.component.ts ***!
  \**********************************************************************/
/*! exports provided: BarpageDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarpageDealsComponent", function() { return BarpageDealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models.ts");
/* harmony import */ var _directives_date_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_directives/date.directive */ "./src/app/_directives/date.directive.ts");
/* harmony import */ var _services_barpage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/barpage.service */ "./src/app/_services/barpage.service.ts");






var BarpageDealsComponent = /** @class */ (function () {
    function BarpageDealsComponent(_dbA, _dateDirective, _barpageService) {
        this.hidePage = true;
        //Deals Variables
        this.noDailyDeals = false;
        this.dailyDealsExpanded = false;
        this.expandDealsButtonText = "VIEW MORE";
        this.upcomingExpanded = false;
        this.expandUpcomingText = "VIEW MORE";
        this.headDailyDeals = [];
        this.tailDailyDeals = [];
        this.allDailyDeals = [];
        this.upcomingDeals = [];
        this.upcomingDealsHead = [];
        this.upcomingDealsTail = [];
        this.db = _dbA;
        this.dateDirective = _dateDirective;
        this.barpageService = _barpageService;
        //this.dayOfTheWeek = _dateDirective.getDayOfWeek();
        this.dayOfTheWeek = "Wednesday";
    }
    BarpageDealsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.barpageService.currentBarPage.subscribe(function (value) {
            if (value != null) {
                _this.barPage = value;
                _this.barName = _this.barPage.barName;
                _this.clearBarDeals();
                _this.getDailyDeals();
            }
        });
    };
    BarpageDealsComponent.prototype.clearBarDeals = function () {
        this.headDailyDeals = [];
        this.tailDailyDeals = [];
        this.allDailyDeals = [];
        this.upcomingDeals = [];
        this.upcomingDealsHead = [];
        this.upcomingDealsTail = [];
    };
    BarpageDealsComponent.prototype.getDailyDeals = function () {
        var _this = this;
        this.db.object('dailyDeals/' + this.barName).valueChanges().subscribe(function (result) {
            //Upcoming Deals
            var handleObject = new _models__WEBPACK_IMPORTED_MODULE_3__["UpcomingDeal"]();
            _this.upcomingDeals = handleObject.insertAll(result);
            var index = -1;
            for (var i = 0; i < _this.upcomingDeals.length; i++) {
                var deal = _this.upcomingDeals[i];
                if (deal.dayOfTheWeek == _this.dayOfTheWeek) {
                    index = i;
                }
            }
            if (i > -1) { //Set Daily Deal
                _this.allDailyDeals = _this.upcomingDeals[index].deals;
                _this.upcomingDeals.splice(index, 1);
            }
            //sort by weekday
            var order = _this.dateDirective.weekOrderSwitch(_this.dayOfTheWeek);
            _this.upcomingDeals.sort(function (a, b) {
                return order[a.dayOfTheWeek] - order[b.dayOfTheWeek];
            });
            //Split into head and tail
            _this.upcomingDealsHead = [];
            for (var i = 0; i < _this.upcomingDeals.length && i < 2; i++) {
                _this.upcomingDealsHead.push(_this.upcomingDeals[i]);
            }
            _this.upcomingDealsTail = [];
            for (var i = 2; i < _this.upcomingDeals.length; i++) {
                _this.upcomingDealsTail.push(_this.upcomingDeals[i]);
            }
            //Daily Deals
            if (_this.allDailyDeals.length == 0) {
                _this.noDailyDeals = true;
            }
            else
                _this.noDailyDeals = false;
            //Set display deals
            _this.headDailyDeals = [];
            for (var i = 0; i < _this.allDailyDeals.length && i < 2; i++) {
                _this.headDailyDeals.push(_this.allDailyDeals[i]);
            }
            _this.tailDailyDeals = [];
            for (var i = 2; i < _this.allDailyDeals.length; i++) {
                _this.tailDailyDeals.push(_this.allDailyDeals[i]);
            }
            _this.hidePage = false;
        });
    };
    BarpageDealsComponent.prototype.handleExpandButtonClick = function () {
        //$('.collapse').collapse();
        if (this.dailyDealsExpanded == false) {
            this.dailyDealsExpanded = true;
            this.expandDealsButtonText = "VIEW LESS";
        }
        else {
            this.dailyDealsExpanded = false;
            this.expandDealsButtonText = "VIEW MORE";
        }
    };
    BarpageDealsComponent.prototype.handleUpcomingExpandButtonClick = function () {
        if (this.upcomingExpanded == false) {
            this.upcomingExpanded = true;
            this.expandUpcomingText = "VIEW LESS";
        }
        else {
            this.upcomingExpanded = false;
            this.expandUpcomingText = "VIEW MORE";
        }
    };
    BarpageDealsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barpage-deals',
            template: __webpack_require__(/*! ./barpage-deals.component.html */ "./src/app/_components/barpage-deals/barpage-deals.component.html"),
            styles: [__webpack_require__(/*! ./barpage-deals.component.css */ "./src/app/_components/barpage-deals/barpage-deals.component.css"), __webpack_require__(/*! ../../_pages/main/main.component.css */ "./src/app/_pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _directives_date_directive__WEBPACK_IMPORTED_MODULE_4__["DateDirective"],
            _services_barpage_service__WEBPACK_IMPORTED_MODULE_5__["BarPageService"]])
    ], BarpageDealsComponent);
    return BarpageDealsComponent;
}());



/***/ }),

/***/ "./src/app/_components/full-loading/full-loading.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/_components/full-loading/full-loading.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullLoadingPage{\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n    z-index: 150;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    background:white;\r\n  \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL2Z1bGwtbG9hZGluZy9mdWxsLWxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7O0lBRVosV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7O0VBRWxCIiwiZmlsZSI6Il9jb21wb25lbnRzL2Z1bGwtbG9hZGluZy9mdWxsLWxvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsTG9hZGluZ1BhZ2V7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgei1pbmRleDogMTUwO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICBcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/_components/full-loading/full-loading.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_components/full-loading/full-loading.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullLoadingPage\">\r\n    <!-- Page Loader -->\r\n    <div class=\"centered\" id=\"pageLoader\">\r\n        <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_components/full-loading/full-loading.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/_components/full-loading/full-loading.component.ts ***!
  \********************************************************************/
/*! exports provided: FullLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLoadingComponent", function() { return FullLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FullLoadingComponent = /** @class */ (function () {
    function FullLoadingComponent() {
    }
    FullLoadingComponent.prototype.ngOnInit = function () {
    };
    FullLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-loading',
            template: __webpack_require__(/*! ./full-loading.component.html */ "./src/app/_components/full-loading/full-loading.component.html"),
            styles: [__webpack_require__(/*! ./full-loading.component.css */ "./src/app/_components/full-loading/full-loading.component.css"), __webpack_require__(/*! ../../_pages/main/main.component.css */ "./src/app/_pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FullLoadingComponent);
    return FullLoadingComponent;
}());



/***/ }),

/***/ "./src/app/_components/header/header.component.css":
/*!*********************************************************!*\
  !*** ./src/app/_components/header/header.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJfY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/header/header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/header/header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar--fixed navbar--fixed-top navbar--bg\" style=\"background-color:black;\">\r\n  <div class=\"navbar__col navbar__col--icon navbar__col--icon-right\" (click)=\"refresh()\">\r\n    <a  data-panel=\"left\" class=\"open-panel\">\r\n      <img src=\"./assets/images/icons/white/menu.png\" alt=\"\" title=\"\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"navbar__col navbar__col--title\">\r\n    <a href=\"index.html\">\r\n      <img src=\"./assets/images/TextLogo.png\" width=\"150px\" style=\"padding-top:16px;\">\r\n    </a>\r\n  </div>\r\n  <div class=\"navbar__col navbar__col--icon navbar__col--icon-right\" (click)=\"userClick()\" style=\"padding-right:7px;\">\r\n    <a data-panel=\"right\" class=\"open-panel\">\r\n      <img src=\"./assets/images/icons/white/user.png\" alt=\"\" title=\"\" />\r\n    </a>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/_components/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_components/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(mainService) {
        this.mainService = mainService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.userClick = function () {
        this.mainService.changeUserSlide();
    };
    HeaderComponent.prototype.refresh = function () {
        this.mainService.refresh();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/_components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/_components/header/header.component.css"), __webpack_require__(/*! ../../_pages/main/main.component.css */ "./src/app/_pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/_components/main-scroll/main-scroll.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/_components/main-scroll/main-scroll.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJfY29tcG9uZW50cy9tYWluLXNjcm9sbC9tYWluLXNjcm9sbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_components/main-scroll/main-scroll.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/main-scroll/main-scroll.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content of Page       -->\r\n<div id=\"pages_maincontent\" *ngIf=\"displayPage\">\r\n  <h2 class=\"page_title\" style=\"text-align: center;\"></h2>\r\n\r\n  <div class=\"page_single layout_fullwidth_padding\">\r\n\r\n    <!-- For each here -->\r\n    <ul class=\"shop_items\">\r\n\r\n      <!-- BAR CARD -->\r\n      <li id=\"barCard\" *ngFor=\"let barCard of barCards\" (click)=\"onBarCardClick($event,barCard.barId)\">\r\n        <div class=\"shop_thumb\">\r\n          <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\r\n        </div>\r\n        <div class=\"shop_item_details\">\r\n          <h4>{{barCard.barName}}</h4>\r\n          <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\r\n            <li>\r\n              <span class=\"features_list_span\">\r\n                <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\r\n                <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\r\n              </span>\r\n            </li>\r\n            <li>\r\n              <span class=\"features_list_span\">\r\n                <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\r\n                <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n          <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\r\n              <!-- <app-like></app-like> -->\r\n              <img  id=\"like\"  [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\" alt=\"\" title=\"\" />            \r\n          </span>\r\n        </div>\r\n      </li>\r\n\r\n\r\n    </ul>\r\n\r\n    <div class=\"shop_pagination\">\r\n      <a href=\"\" class=\"prev_shop\">PREV PAGE</a>\r\n      <span class=\"shop_pagenr\">1/37</span>\r\n      <a href=\"\" class=\"next_shop\">NEXT PAGE</a>\r\n      <br />\r\n      <br />\r\n      <br />\r\n      <br />\r\n    </div>\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/_components/main-scroll/main-scroll.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_components/main-scroll/main-scroll.component.ts ***!
  \******************************************************************/
/*! exports provided: MainScrollComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScrollComponent", function() { return MainScrollComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");




var MainScrollComponent = /** @class */ (function () {
    function MainScrollComponent(dbA, authService) {
        this.authService = authService;
        this.displayPage = true;
        this.barCardClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dayOfTheWeek = "Wednesday";
        //BarCards
        this.barCards = [];
        this.db = dbA;
    }
    MainScrollComponent.prototype.ngOnInit = function () {
        this.getBarCards();
    };
    MainScrollComponent.prototype.getBarCards = function () {
        var _this = this;
        this.db.list('barCards/' + this.dayOfTheWeek).valueChanges().subscribe(function (result) {
            _this.barCards = result;
        });
    };
    MainScrollComponent.prototype.checkLikedStatus = function (barCard) {
        if (this.authService.currentUser.likedBars == undefined)
            return;
        if (this.authService.currentUser.likedBars.indexOf(barCard.barId) == -1) {
            return false;
        }
        else
            return true;
    };
    MainScrollComponent.prototype.onBarCardClick = function (event, id) {
        if (event.target.id != undefined && event.target.id == "like")
            return;
        this.barCardClick.emit(id);
    };
    MainScrollComponent.prototype.likeBar = function (barCard) {
        this.authService.likeBar(barCard.barId);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MainScrollComponent.prototype, "barCardClick", void 0);
    MainScrollComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-scroll',
            template: __webpack_require__(/*! ./main-scroll.component.html */ "./src/app/_components/main-scroll/main-scroll.component.html"),
            styles: [__webpack_require__(/*! ./main-scroll.component.css */ "./src/app/_components/main-scroll/main-scroll.component.css"), __webpack_require__(/*! ../../_pages/main/main.component.css */ "./src/app/_pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MainScrollComponent);
    return MainScrollComponent;
}());



/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJfY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--       NAVBAR       -->\r\n<div class=\"swiper-container-toolbar swiper-toolbar\" style=\"background-color:black;\">\r\n  <div class=\"swiper-pagination-toolbar\"></div>\r\n  <div class=\"swiper-wrapper\">\r\n    <div class=\"swiper-slide toolbar-icon\">\r\n      <span class=\"toolbar-icon-span\" id=\"toolbarHome\"  (click)=\"icon0Click()\">\r\n        <img src=\"./assets/images/icons/white/categories.png\"alt=\"\" title=\"\" />\r\n      </span>\r\n      <span class=\"toolbar-icon-span\" id=\"toolbarSearch\" (click)=\"icon1Click()\">\r\n        <img src=\"./assets/images/icons/white/search.png\"  alt=\"\" title=\"\" />\r\n      </span>\r\n      <span class=\"toolbar-icon-span\">\r\n        <img src=\"./assets/images/icons/white/love.png\" alt=\"\" title=\"\" />\r\n      </span>\r\n      <span class=\"toolbar-icon-span\">\r\n        <img src=\"./assets/images/icons/white/photos.png\" alt=\"\" title=\"\" />\r\n      </span>\r\n      <span class=\"toolbar-icon-span\">\r\n        <img src=\"./assets/images/icons/white/contact.png\" alt=\"\" title=\"\" />\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.ts ***!
  \********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(mainService) {
        this.mainService = mainService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.icon0Click = function () {
        if (this.mainService.currentPageValue == 0) {
            this.mainService.reverseBarSlide();
        }
        this.mainService.changePage(0);
    };
    NavbarComponent.prototype.icon1Click = function () {
        this.mainService.changePage(1);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/_components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/_components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/_components/popup/popup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_components/popup/popup.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.modal-window {\r\n    position: absolute;\r\n    background-color: rgba(200, 200, 200, 0.75);\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n    transition: all 0.3s;\r\n  }\r\n  \r\n  .modal-window:target {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n  }\r\n  \r\n  .modal-window>div {\r\n    width: 70%;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    margin: 60% 0 0 7%;\r\n    padding: 2rem;\r\n    background: #fff;\r\n    color: #444;\r\n  }\r\n  \r\n  .modal-window header {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .modal-close {\r\n    color: #aaa;\r\n    line-height: 50px;\r\n    font-size: 30px;\r\n    margin-left: 10px;\r\n    position: absolute;\r\n    right: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    width: 70px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .modal-close:hover {\r\n    color: #000;\r\n  }\r\n  \r\n  .modal-window h2 {\r\n    font-size: 150%;\r\n    margin: 0 0 15px;\r\n    padding: 0 0 0 0;\r\n  }\r\n  \r\n  .coverHeading {\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    margin: 0 0 15px;\r\n    padding: 0 15px 0 15px;\r\n  }\r\n  \r\n  .minus{\r\n    position: relative;\r\n    width: 10%;\r\n  }\r\n  \r\n  .plus{\r\n  position: relative;\r\n  width: 10%;\r\n  }\r\n  \r\n  .checkmarkHolder {\r\n  width: 100px;\r\n  margin: 0 auto;\r\n  padding-top: 0px;\r\n  }\r\n  \r\n  .circle-loader {\r\n    margin-bottom: 0;\r\n    border: 3px solid rgba(0, 0, 0, 0.2);\r\n    border-left-color: #F2C843;\r\n    -webkit-animation: loader-spin 1.2s infinite linear;\r\n            animation: loader-spin 1.2s infinite linear;\r\n    position: relative;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    border-radius: 50%;\r\n    width: 7em;\r\n    height: 7em;\r\n  }\r\n  \r\n  .load-complete {\r\n    -webkit-animation: none;\r\n    animation: none;\r\n    border-color: #F2C843;\r\n    transition: border 500ms ease-out;\r\n  }\r\n  \r\n  .checkmarkHidden {\r\n    display: none;\r\n  }\r\n  \r\n  .checkmark{\r\n    display:auto;\r\n  }\r\n  \r\n  .checkmark.draw:after {\r\n    -webkit-animation-duration: 800ms;\r\n            animation-duration: 800ms;\r\n    -webkit-animation-timing-function: ease;\r\n            animation-timing-function: ease;\r\n    -webkit-animation-name: checkmark;\r\n            animation-name: checkmark;\r\n    -webkit-transform: scaleX(-1) rotate(135deg);\r\n            transform: scaleX(-1) rotate(135deg);\r\n  }\r\n  \r\n  .checkmark:after {\r\n    opacity: 1;\r\n    height: 3.5em;\r\n    width: 1.75em;\r\n    -webkit-transform-origin: left top;\r\n            transform-origin: left top;\r\n    border-right: 4px solid #F2C843;\r\n    border-top: 4px solid #F2C843;\r\n    content: '';\r\n    left: 1.75em;\r\n    top: 3.5em;\r\n    position: absolute;\r\n  }\r\n  \r\n  @-webkit-keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n  \r\n  @keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n  \r\n  @-webkit-keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n  \r\n  @keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBb0I7SUFHcEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtFQUNBLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Y7O0VBRUE7RUFDQSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQjs7RUFHQTtJQUNFLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLG1EQUEyQztZQUEzQywyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQ0FBaUM7RUFDbkM7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0VBQ3RDOztFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFJQTtJQUNFO1FBQ0ksK0JBQXVCO2dCQUF2Qix1QkFBdUI7R0FDNUI7SUFDQztRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO0dBQzlCO0VBQ0Q7O0VBUEE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOztFQUNBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7R0FDZjtJQUNDO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtFQUNEOztFQXJCQTtJQUNFO1FBQ0ksU0FBUztRQUNULFFBQVE7UUFDUixVQUFVO0dBQ2Y7SUFDQztRQUNJLFNBQVM7UUFDVCxhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7RUFDRCIsImZpbGUiOiJfY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tb2RhbC13aW5kb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjc1KTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC13aW5kb3c6dGFyZ2V0IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXdpbmRvdz5kaXYge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDYwJSAwIDAgNyU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtd2luZG93IGhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jbG9zZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXdpbmRvdyBoMiB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICB9XHJcbiAgLmNvdmVySGVhZGluZyB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMCAxNXB4O1xyXG4gIH1cclxuICBcclxuICAubWludXN7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gIH1cclxuICBcclxuICAucGx1c3tcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwJTtcclxuICB9XHJcbiAgXHJcbiAgLmNoZWNrbWFya0hvbGRlciB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jaXJjbGUtbG9hZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI0YyQzg0MztcclxuICAgIGFuaW1hdGlvbjogbG9hZGVyLXNwaW4gMS4ycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDdlbTtcclxuICAgIGhlaWdodDogN2VtO1xyXG4gIH1cclxuICAubG9hZC1jb21wbGV0ZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogI0YyQzg0MztcclxuICAgIHRyYW5zaXRpb246IGJvcmRlciA1MDBtcyBlYXNlLW91dDtcclxuICB9XHJcbiAgLmNoZWNrbWFya0hpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY2hlY2ttYXJre1xyXG4gICAgZGlzcGxheTphdXRvO1xyXG4gIH1cclxuICAuY2hlY2ttYXJrLmRyYXc6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICBhbmltYXRpb24tbmFtZTogY2hlY2ttYXJrO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO1xyXG4gIH1cclxuICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgd2lkdGg6IDEuNzVlbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI0YyQzg0MztcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjRjJDODQzO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBsZWZ0OiAxLjc1ZW07XHJcbiAgICB0b3A6IDMuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBAa2V5ZnJhbWVzIGxvYWRlci1zcGluIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGNoZWNrbWFyayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgICAgICB3aWR0aDogMS43NWVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/_components/popup/popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/popup/popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCoverPopUp\" style=\"text-align: center;\">\r\n    <div id=\"open-modal\" class=\"modal-window\">\r\n      <div *ngIf=\"!coverSubmissionLoader\">\r\n        <a (click)=\"showCoverPopUp = false\" title=\"Close\" class=\"modal-close\">&times;</a>\r\n        <h2>Report Cover</h2>\r\n        <div style=\"margin: 0 7px 0 0px;\">\r\n          <img (click)=\"decrementReportCover()\" class=\"minus\" src=\"./assets/images/minus.png\">\r\n          <span class=\"coverHeading\">${{reportCoverValue}}</span>\r\n          <img (click)=\"incrementReportCover()\" class=\"plus\" src=\"./assets/images/plus.png\">\r\n        </div>\r\n\r\n        <div (click)=\"reportCover()\" style=\"text-align: center\">\r\n          <span style=\"margin: 7px 0px 0px 0; width:200px; font-size:14px;\" class=\"btn btn--full\">Submit</span>\r\n        </div>\r\n\r\n      </div>\r\n      <div *ngIf=\"coverSubmissionLoader\">\r\n        <div style=\"width:100%;\">\r\n          <div class=\"checkmarkHolder\">\r\n            <!-- <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" x=\"0px\"\r\n                      y=\"0px\" viewBox=\"0, 0, 100, 100\" id=\"checkmark\">\r\n                      <g transform=\"\">\r\n                        <circle id=\"path\" class=\"path\" fill=\"none\" stroke=\"#F2C843\" stroke-width=\"4\" stroke-miterlimit=\"10\" cx=\"50\" cy=\"50\" r=\"44\" />\r\n                        <circle id=\"fill\" class=\"fill\" fill=\"none\" stroke=\"#F2C843\" stroke-width=\"4\" stroke-miterlimit=\"10\" cx=\"50\" cy=\"50\" r=\"44\" />\r\n                        <polyline id=\"check\" class=\"check\" fill=\"none\" stroke=\"#F2C843\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" points=\"70,35 45,65 30,52  \"\r\n                        />\r\n                      </g>\r\n                    </svg> -->\r\n\r\n            <div id=\"circleLoader\" class=\"circle-loader\">\r\n              <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/_components/popup/popup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_components/popup/popup.component.ts ***!
  \******************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");



var PopupComponent = /** @class */ (function () {
    function PopupComponent(mainService) {
        this.mainService = mainService;
        //Cover Variables
        this.showCoverPopUp = false;
        this.reportCoverValue = 0;
        this.coverSubmissionLoader = false;
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mainService.showCoverPopUp.subscribe(function (value) {
            if (value == true) {
                _this.showCoverPopUp = value;
            }
            else {
                if (_this.showCoverPopUp == true) {
                    _this.hideCoverPopUp();
                }
            }
        });
    };
    PopupComponent.prototype.reportCover = function () {
        this.mainService.reportCover(this.reportCoverValue);
    };
    PopupComponent.prototype.hideCoverPopUp = function () {
        this.coverSubmissionLoader = true;
        var self = this;
        setTimeout(function () {
            // document.getElementById('check').classList.add('check-complete');
            // document.getElementById('fill').classList.add('fill-complete');
            document.getElementById('circleLoader').classList.add('load-complete');
            document.getElementById('checkLoader').classList.remove('checkmarkHidden');
            document.getElementById('checkLoader').classList.add('checkmark');
            setTimeout(function () {
                self.showCoverPopUp = false;
                self.coverSubmissionLoader = false;
                self.reportCoverValue = 0;
            }, 1000);
        }, 750);
    };
    PopupComponent.prototype.decrementReportCover = function () {
        if (this.reportCoverValue == 0)
            return;
        this.reportCoverValue = this.reportCoverValue - 5;
    };
    PopupComponent.prototype.incrementReportCover = function () {
        if (this.reportCoverValue >= 100)
            return;
        this.reportCoverValue = this.reportCoverValue + 5;
    };
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/_components/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/_components/popup/popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/_components/refresh/refresh.component.css":
/*!***********************************************************!*\
  !*** ./src/app/_components/refresh/refresh.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJfY29tcG9uZW50cy9yZWZyZXNoL3JlZnJlc2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_components/refresh/refresh.component.html":
/*!************************************************************!*\
  !*** ./src/app/_components/refresh/refresh.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  refresh works!\n</p>\n"

/***/ }),

/***/ "./src/app/_components/refresh/refresh.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/_components/refresh/refresh.component.ts ***!
  \**********************************************************/
/*! exports provided: RefreshComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RefreshComponent", function() { return RefreshComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RefreshComponent = /** @class */ (function () {
    function RefreshComponent() {
    }
    RefreshComponent.prototype.ngOnInit = function () {
    };
    RefreshComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-refresh',
            template: __webpack_require__(/*! ./refresh.component.html */ "./src/app/_components/refresh/refresh.component.html"),
            styles: [__webpack_require__(/*! ./refresh.component.css */ "./src/app/_components/refresh/refresh.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RefreshComponent);
    return RefreshComponent;
}());



/***/ }),

/***/ "./src/app/_components/user-slide/user-slide.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/_components/user-slide/user-slide.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".out{\r\n    -webkit-transform: translateX(0%);\r\n    transform: translateX(0%);\r\n    transition: -webkit-transform 150ms linear;\r\n    transition: transform 150ms linear;\r\n    transition: transform 150ms linear, -webkit-transform 150ms linear;\r\n    will-change: transform;\r\n}\r\n.in{\r\n    -webkit-transform: translateX(-100%);\r\n    transform: translateX(-100%);\r\n    transition: -webkit-transform 150ms linear;\r\n    transition: transform 150ms linear;\r\n    transition: transform 150ms linear, -webkit-transform 150ms linear;\r\n}\r\n.hidden{\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL3VzZXItc2xpZGUvdXNlci1zbGlkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QiwwQ0FBa0M7SUFBbEMsa0NBQWtDO0lBQWxDLGtFQUFrQztJQUNsQyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsMENBQWtDO0lBQWxDLGtDQUFrQztJQUFsQyxrRUFBa0M7QUFDdEM7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiX2NvbXBvbmVudHMvdXNlci1zbGlkZS91c2VyLXNsaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0e1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBsaW5lYXI7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG59XHJcbi5pbntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgbGluZWFyO1xyXG59XHJcblxyXG4uaGlkZGVue1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/_components/user-slide/user-slide.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/user-slide/user-slide.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"userSlide\" class=\"panel panel-right panel-reveal out\" >\r\n  <div class=\"user_login_info\">\r\n\r\n    <div class=\"user_thumb\">\r\n\r\n      <div class=\"user_details\">\r\n        <p>Welcome, <span>{{authService.currentUser.firstName}}</span></p>\r\n      </div>\r\n      <div class=\"user_avatar\"><img src=\"./assets/images/avatar3.jpg\" alt=\"\" title=\"\" /></div>\r\n    </div>\r\n\r\n    <nav class=\"user-nav\">\r\n      <ul>\r\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/settings.png\" alt=\"\" title=\"\" /><span>Account\r\n              Settings</span></a></li>\r\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/briefcase.png\" alt=\"\" title=\"\" /><span>My\r\n              Account</span></a></li>\r\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/message.png\" alt=\"\"\r\n              title=\"\" /><span>Messages</span><strong>12</strong></a></li>\r\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/love.png\" alt=\"\"\r\n              title=\"\" /><span>Favorites</span><strong>5</strong></a></li>\r\n        <li><a (click)=\"logout()\"><img src=\"./assets/images/icons/gray/lock.png\" alt=\"\" title=\"\" /><span>Logout</span></a></li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_components/user-slide/user-slide.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/_components/user-slide/user-slide.component.ts ***!
  \****************************************************************/
/*! exports provided: UserSlideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSlideComponent", function() { return UserSlideComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserSlideComponent = /** @class */ (function () {
    //AuthService used in html
    function UserSlideComponent(mainService, authService, router) {
        this.mainService = mainService;
        this.authService = authService;
        this.router = router;
        this.slideInLogin = true;
    }
    UserSlideComponent.prototype.ngOnInit = function () {
        //this.userSlideInit();
    };
    UserSlideComponent.prototype.ngAfterViewInit = function () {
        document.getElementById("userSlide").classList.add("hidden");
        document.getElementById("userSlide").classList.add("out");
        this.userSlideInit();
    };
    UserSlideComponent.prototype.userSlideInit = function () {
        var _this = this;
        this.mainService.userSlide.subscribe(function (result) {
            var self = _this;
            _this.slideInLogin = result;
            if (result == true) {
                document.getElementById("userSlide").classList.remove("hidden");
                setTimeout(function () { document.getElementById("userSlide").classList.add("in"); }, 50);
            }
            else {
                var dom = document.getElementById("userSlide");
                dom.classList.remove("in");
                dom.addEventListener("transitionend", function () {
                    if (self.slideInLogin == false) {
                        dom.classList.add("hidden");
                    }
                });
            }
        });
    };
    UserSlideComponent.prototype.logout = function () {
        this.authService.logOut();
        this.mainService.changeUserSlide();
        this.router.navigateByUrl('/login');
    };
    UserSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-slide',
            template: __webpack_require__(/*! ./user-slide.component.html */ "./src/app/_components/user-slide/user-slide.component.html"),
            styles: [__webpack_require__(/*! ./user-slide.component.css */ "./src/app/_components/user-slide/user-slide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserSlideComponent);
    return UserSlideComponent;
}());



/***/ }),

/***/ "./src/app/_directives/date.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/_directives/date.directive.ts ***!
  \***********************************************/
/*! exports provided: DateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateDirective", function() { return DateDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DateDirective = /** @class */ (function () {
    function DateDirective() {
    }
    DateDirective.prototype.getDayOfWeek = function () {
        return new Date().toLocaleString('en-us', { weekday: 'long' });
    };
    DateDirective.prototype.weekOrderSwitch = function (dayIndex) {
        switch (dayIndex) {
            case "Sunday": {
                return { Sunday: 1, Monday: 2, Tuesday: 3, Wednesday: 4, Thursday: 5, Friday: 6, Saturday: 7 };
            }
            case "Monday": {
                return { Sunday: 7, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };
            }
            case "Tuesday": {
                return { Sunday: 6, Monday: 7, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5 };
            }
            case "Wednesday": {
                return { Sunday: 5, Monday: 6, Tuesday: 7, Wednesday: 1, Thursday: 2, Friday: 3, Saturday: 4 };
            }
            case "Thursday": {
                return { Sunday: 4, Monday: 5, Tuesday: 6, Wednesday: 7, Thursday: 1, Friday: 2, Saturday: 3 };
            }
            case "Friday": {
                return { Sunday: 3, Monday: 4, Tuesday: 5, Wednesday: 6, Thursday: 7, Friday: 1, Saturday: 2 };
            }
            case "Saturday": {
                return { Sunday: 2, Monday: 3, Tuesday: 4, Wednesday: 5, Thursday: 6, Friday: 7, Saturday: 1 };
            }
        }
    };
    DateDirective.prototype.backOneDay = function (day) {
        switch (day) {
            case "Sunday": return "Saturday";
            case "Saturday": return "Friday";
            case "Friday": return "Thursday";
            case "Thursday": return "Wednesday";
            case "Wednesday": return "Tuesday";
            case "Tuesday": return "Monday";
            case "Monday": return "Sunday";
        }
    };
    DateDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], DateDirective);
    return DateDirective;
}());



/***/ }),

/***/ "./src/app/_models/BarCard.Model.ts":
/*!******************************************!*\
  !*** ./src/app/_models/BarCard.Model.ts ***!
  \******************************************/
/*! exports provided: BarCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarCard", function() { return BarCard; });
var BarCard = /** @class */ (function () {
    function BarCard() {
    }
    return BarCard;
}());



/***/ }),

/***/ "./src/app/_models/HourlyEstimate.ts":
/*!*******************************************!*\
  !*** ./src/app/_models/HourlyEstimate.ts ***!
  \*******************************************/
/*! exports provided: HourlyEstimate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HourlyEstimate", function() { return HourlyEstimate; });
var HourlyEstimate = /** @class */ (function () {
    function HourlyEstimate() {
        this.cover = null;
        this.cover = null;
    }
    return HourlyEstimate;
}());



/***/ }),

/***/ "./src/app/_models/UpcomingDeal.Model.ts":
/*!***********************************************!*\
  !*** ./src/app/_models/UpcomingDeal.Model.ts ***!
  \***********************************************/
/*! exports provided: UpcomingDeal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingDeal", function() { return UpcomingDeal; });
var UpcomingDeal = /** @class */ (function () {
    function UpcomingDeal() {
        this.expanded = false;
        this.arrowText = "&#x25ba";
    }
    UpcomingDeal.prototype.insertAll = function (result) {
        var returnArray = [];
        //For each day of the week
        var Wednesday = new UpcomingDeal();
        Wednesday.dayOfTheWeek = "Wednesday";
        Wednesday.deals = Object.keys(result.Wednesday).map(function (key) { return result.Wednesday[key]; });
        returnArray.push(Wednesday);
        var Thursday = new UpcomingDeal();
        Thursday.dayOfTheWeek = "Thursday";
        Thursday.deals = Object.keys(result.Thursday).map(function (key) { return result.Thursday[key]; });
        returnArray.push(Thursday);
        var Friday = new UpcomingDeal();
        Friday.dayOfTheWeek = "Friday";
        Friday.deals = Object.keys(result.Friday).map(function (key) { return result.Friday[key]; });
        returnArray.push(Friday);
        var Saturday = new UpcomingDeal();
        Saturday.dayOfTheWeek = "Saturday";
        Saturday.deals = Object.keys(result.Saturday).map(function (key) { return result.Saturday[key]; });
        returnArray.push(Saturday);
        var Sunday = new UpcomingDeal();
        Sunday.dayOfTheWeek = "Sunday";
        Sunday.deals = Object.keys(result.Sunday).map(function (key) { return result.Sunday[key]; });
        returnArray.push(Sunday);
        var Monday = new UpcomingDeal();
        Monday.dayOfTheWeek = "Monday";
        Monday.deals = Object.keys(result.Monday).map(function (key) { return result.Monday[key]; });
        returnArray.push(Monday);
        var Tuesday = new UpcomingDeal();
        Tuesday.dayOfTheWeek = "Tuesday";
        Tuesday.deals = Object.keys(result.Tuesday).map(function (key) { return result.Tuesday[key]; });
        returnArray.push(Tuesday);
        return returnArray;
    };
    UpcomingDeal.prototype.expand = function () {
        this.expanded = !this.expanded;
        if (this.expanded == true)
            this.arrowText = "&#x25bc";
        else
            this.arrowText = "&#x25ba";
    };
    return UpcomingDeal;
}());



/***/ }),

/***/ "./src/app/_models/User.Model.ts":
/*!***************************************!*\
  !*** ./src/app/_models/User.Model.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(auth) {
        this.likedBars = [];
        this.uid = auth.uid;
        this.email = auth.email;
        this.displayName = auth.displayName;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_pages/barlist/barlist.component.css":
/*!******************************************************!*\
  !*** ./src/app/_pages/barlist/barlist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJfcGFnZXMvYmFybGlzdC9iYXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_pages/barlist/barlist.component.html":
/*!*******************************************************!*\
  !*** ./src/app/_pages/barlist/barlist.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SlideInPage -->\r\n<app-bar-page *ngIf=\"showBarPage\" [barPageIdChange]=\"barPageId\" [slideInBar]=\"barSlide\">\r\n</app-bar-page>\r\n\r\n\r\n\r\n<app-main-scroll *ngIf=\"true\" (barCardClick)=\"activateBarSlide($event)\"></app-main-scroll>"

/***/ }),

/***/ "./src/app/_pages/barlist/barlist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/_pages/barlist/barlist.component.ts ***!
  \*****************************************************/
/*! exports provided: BarlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarlistComponent", function() { return BarlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");



var BarlistComponent = /** @class */ (function () {
    function BarlistComponent(mainService) {
        this.mainService = mainService;
        this.barSlide = false;
        this.showBarPage = false;
        this.barPageId = 0;
    }
    BarlistComponent.prototype.ngOnInit = function () {
        this.reverseBarSlideInit();
    };
    BarlistComponent.prototype.activateBarSlide = function (barId) {
        this.barSlide = true;
        this.showBarPage = true; //move later
        this.barPageId = barId;
    };
    BarlistComponent.prototype.reverseBarSlideInit = function () {
        var _this = this;
        //Function calls on same page click
        this.mainService.barSlide.subscribe(function (_) {
            if (_this.barSlide)
                _this.barSlide = false;
        });
    };
    BarlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barlist',
            template: __webpack_require__(/*! ./barlist.component.html */ "./src/app/_pages/barlist/barlist.component.html"),
            styles: [__webpack_require__(/*! ./barlist.component.css */ "./src/app/_pages/barlist/barlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], BarlistComponent);
    return BarlistComponent;
}());



/***/ }),

/***/ "./src/app/_pages/init/init.component.css":
/*!************************************************!*\
  !*** ./src/app/_pages/init/init.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJfcGFnZXMvaW5pdC9pbml0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_pages/init/init.component.html":
/*!*************************************************!*\
  !*** ./src/app/_pages/init/init.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_pages/init/init.component.ts":
/*!***********************************************!*\
  !*** ./src/app/_pages/init/init.component.ts ***!
  \***********************************************/
/*! exports provided: InitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitComponent", function() { return InitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_User_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_models/User.Model */ "./src/app/_models/User.Model.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var InitComponent = /** @class */ (function () {
    function InitComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    InitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.af.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (result) {
            console.log(result);
            console.log('Init Running');
            if (result == null) {
                _this.router.navigate(['/login']);
            }
            else {
                _this.authService.setUser(new _models_User_Model__WEBPACK_IMPORTED_MODULE_4__["User"](result));
                //When user is set run this
                _this.authService.authStateSet.subscribe(function (value) {
                    if (value == true) {
                        console.log(result);
                        _this.router.navigate(['/main/barlist']);
                    }
                });
            }
        });
    };
    InitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-init',
            template: __webpack_require__(/*! ./init.component.html */ "./src/app/_pages/init/init.component.html"),
            styles: [__webpack_require__(/*! ./init.component.css */ "./src/app/_pages/init/init.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], InitComponent);
    return InitComponent;
}());



/***/ }),

/***/ "./src/app/_pages/init/init.module.ts":
/*!********************************************!*\
  !*** ./src/app/_pages/init/init.module.ts ***!
  \********************************************/
/*! exports provided: InitModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitModule", function() { return InitModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _init_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.component */ "./src/app/_pages/init/init.component.ts");



//Import Components
var InitModule = /** @class */ (function () {
    function InitModule() {
    }
    InitModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _init_component__WEBPACK_IMPORTED_MODULE_2__["InitComponent"],
            ],
            imports: [],
            exports: [
                _init_component__WEBPACK_IMPORTED_MODULE_2__["InitComponent"]
            ],
            providers: [],
            bootstrap: []
        })
    ], InitModule);
    return InitModule;
}());



/***/ }),

/***/ "./src/app/_pages/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/_pages/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.center-screen {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n  }\r\n\r\n\r\n\r\n.circle-loader {\r\n    margin-bottom: 0;\r\n    border: 3px solid rgba(0, 0, 0, 0.2);\r\n    border-left-color: #F2C843;\r\n    -webkit-animation: loader-spin 1.2s infinite linear;\r\n            animation: loader-spin 1.2s infinite linear;\r\n    position: relative;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    border-radius: 50%;\r\n    width: 7em;\r\n    height: 7em;\r\n  }\r\n\r\n\r\n\r\n.load-complete {\r\n    -webkit-animation: none;\r\n    animation: none;\r\n    border-color: #F2C843;\r\n    transition: border 500ms ease-out;\r\n  }\r\n\r\n\r\n\r\n.checkmarkHidden {\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n.checkmark{\r\n    display:auto;\r\n  }\r\n\r\n\r\n\r\n.checkmark.draw:after {\r\n    -webkit-animation-duration: 800ms;\r\n            animation-duration: 800ms;\r\n    -webkit-animation-timing-function: ease;\r\n            animation-timing-function: ease;\r\n    -webkit-animation-name: checkmark;\r\n            animation-name: checkmark;\r\n    -webkit-transform: scaleX(-1) rotate(135deg);\r\n            transform: scaleX(-1) rotate(135deg);\r\n  }\r\n\r\n\r\n\r\n.checkmark:after {\r\n    opacity: 1;\r\n    height: 3.5em;\r\n    width: 1.75em;\r\n    -webkit-transform-origin: left top;\r\n            transform-origin: left top;\r\n    border-right: 4px solid #F2C843;\r\n    border-top: 4px solid #F2C843;\r\n    content: '';\r\n    left: 1.75em;\r\n    top: 3.5em;\r\n    position: absolute;\r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n\r\n\r\n\r\n@keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n\r\n\r\n\r\n@keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n\r\n\r\n\r\n.collapse {\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 0 0 0;\r\n    transition-property: height, visibility;\r\n    transition-duration: 0.35s;\r\n    transition-timing-function: ease;\r\n  }\r\n\r\n\r\n\r\n.show {\r\n    display: block !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COzs7O0FBSUY7SUFDSSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiOzs7O0FBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQ0FBaUM7RUFDbkM7Ozs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7OztBQUNBO0lBQ0UsWUFBWTtFQUNkOzs7O0FBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0VBQ3RDOzs7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOzs7O0FBSUE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOzs7O0FBUEE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOzs7O0FBQ0E7SUFDRTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0VBQ0Q7Ozs7QUFyQkE7SUFDRTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0VBQ0Q7Ozs7QUFHQTtJQUNFLGFBQWE7RUFDZjs7OztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBR2hCLHVDQUF1QztJQUd2QywwQkFBMEI7SUFHMUIsZ0NBQWdDO0VBQ2xDOzs7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoiX3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNlbnRlci1zY3JlZW4ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICB9XHJcblxyXG5cclxuXHJcbi5jaXJjbGUtbG9hZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI0YyQzg0MztcclxuICAgIGFuaW1hdGlvbjogbG9hZGVyLXNwaW4gMS4ycyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDdlbTtcclxuICAgIGhlaWdodDogN2VtO1xyXG4gIH1cclxuICAubG9hZC1jb21wbGV0ZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcclxuICAgIGFuaW1hdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogI0YyQzg0MztcclxuICAgIHRyYW5zaXRpb246IGJvcmRlciA1MDBtcyBlYXNlLW91dDtcclxuICB9XHJcbiAgLmNoZWNrbWFya0hpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuY2hlY2ttYXJre1xyXG4gICAgZGlzcGxheTphdXRvO1xyXG4gIH1cclxuICAuY2hlY2ttYXJrLmRyYXc6YWZ0ZXIge1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcclxuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICBhbmltYXRpb24tbmFtZTogY2hlY2ttYXJrO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO1xyXG4gIH1cclxuICAuY2hlY2ttYXJrOmFmdGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgd2lkdGg6IDEuNzVlbTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgI0YyQzg0MztcclxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjRjJDODQzO1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBsZWZ0OiAxLjc1ZW07XHJcbiAgICB0b3A6IDMuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBAa2V5ZnJhbWVzIGxvYWRlci1zcGluIHtcclxuICAgIDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGNoZWNrbWFyayB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgIH1cclxuICAgIDIwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgfVxyXG4gICAgNDAlIHtcclxuICAgICAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgICAgICB3aWR0aDogMS43NWVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgIH1cclxuICB9XHJcblxyXG5cclxuICAuY29sbGFwc2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG5cclxuICAuY29sbGFwc2luZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICB9XHJcblxyXG4gIC5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/_pages/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/_pages/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"mobile_wrap\">\r\n\r\n  <div class=\"navbar navbar--fixed navbar--fixed-top navbar--bg\" style=\"background-color:black; z-index: 1001;\">\r\n    <div class=\"navbar__col navbar__col--title\">\r\n      <a href=\"index.html\">\r\n        <img src=\"./assets/images/TextLogo.png\" width=\"150px\" style=\"padding-top:16px; padding-left: 35px;\">\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"!isLoading\">\r\n    <!-- Login Popup -->\r\n    <div class=\"popup popup-login\" style=\"z-index: 1000;\">\r\n      <div class=\"content-block\">\r\n        <div class=\"close_popup_button\">\r\n          <!-- <a href=\"#\" class=\"close-popup\" data-popup=\".popup-login\">\r\n          <img src=\"./assets/images/icons/black/menu_close.png\" alt=\"\" title=\"\" />\r\n        </a> -->\r\n        </div>\r\n        <div class=\"loginblock\" style=\"top: 23%;\">\r\n\r\n          <div class=\"collapse show\" id=\"login\">\r\n            <h4 style=\"font-weight: bold; font-size: 30px;\">LOGIN</h4>\r\n            <div class=\"loginform\">\r\n              <input type=\"text\" [(ngModel)]=\"logInUsername\" name=\"Username\" class=\"form_input required\"\r\n                placeholder=\"Email\" />\r\n              <input type=\"password\" [(ngModel)]=\"logInPassword\" name=\"Password\" class=\"form_input required\"\r\n                placeholder=\"Password\" />\r\n              <div class=\"forgot_pass\">\r\n                <a href=\"#\" data-popup=\".popup-forgot\" class=\"open-popup\" style=\"color: #012e77;\">Forgot Password?</a>\r\n              </div>\r\n              <input (click)=\"logIn()\" readonly=\"readonly\" class=\"form_submit\"  value=\"SIGN IN\" />\r\n\r\n              <div class=\"signup_bottom\">\r\n                <p>Don't have an account?</p>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"collapse\" id=\"signup\">\r\n            <h4 style=\"font-weight: bold; font-size: 30px;\">SIGN UP</h4>\r\n            <div class=\"loginform\">\r\n              <input type=\"text\" [(ngModel)]=\"createFirstName\" class=\"form_input required\"\r\n                placeholder=\"First Name\" />\r\n              <input type=\"text\" [(ngModel)]=\"createLastName\" class=\"form_input required\"\r\n              placeholder=\"Last Name (Optional)\" />\r\n              <input type=\"text\" [(ngModel)]=\"createEmail\" name=\"Username\" class=\"form_input required\"\r\n                placeholder=\"Email\" />\r\n              <input type=\"password\" [(ngModel)]=\"createPassword\"  class=\"form_input required\"\r\n                placeholder=\"Password\" />\r\n              <input type=\"password\" [(ngModel)]=\"createPassword2\"  class=\"form_input required\"\r\n              placeholder=\"Repeat Password\" (focusout)=\"comparePasswords()\"/>\r\n\r\n              <p style=\"text-align: left; color:red;\" *ngIf=\"passwordsDoNotMatch\">Passwords do not match.</p>\r\n              \r\n              <input (click)=\"register()\" readonly=\"readonly\" class=\"form_submit\"  value=\"REGISTER\" />\r\n              <div class=\"signup_bottom\">\r\n                  <p>Have an account?</p>\r\n                </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"signup_bottom\" style=\"padding:0px; margin-top: -15px;\">\r\n            <a data-popup=\".popup-signup\" class=\"open-popup\"\r\n              (click)=\"goToSignUp()\" style=\"background-color: transparent; color:black; border: 1px black solid;\">{{switchPageText}}</a>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!--Loading-->\r\n  <div *ngIf=\"isLoading\" class=\"center-screen\">\r\n    <div id=\"circleLoader\" class=\"circle-loader\">\r\n      <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/_pages/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/_pages/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_User_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models/User.Model */ "./src/app/_models/User.Model.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.logInUsername = 'testmail@test.com';
        this.logInPassword = 'password';
        this.createFirstName = "";
        this.createLastName = "";
        this.createEmail = "";
        this.createPassword = "";
        this.createPassword2 = "";
        this.passwordsDoNotMatch = false;
        this.isLoading = false;
        this.currentPage = "login";
        this.switchPageText = "SIGN UP";
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.ngAfterInit = function () {
        // console.log('test');
        $("#login").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
            // code to execute after transition ends
            console.log('done');
        });
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.isLoading = true;
        this.authService.logIn(this.logInUsername, this.logInPassword).then(function (success) {
            var user = new _models_User_Model__WEBPACK_IMPORTED_MODULE_2__["User"](_this.authService.af.auth.currentUser);
            _this.authService.setUser(user);
            //Once User Is Set
            _this.authService.authStateSet.subscribe(function (value) {
                if (value == true) {
                    console.log(_this.authService.currentUser.uid);
                    var self = _this;
                    _this.stopLoadingAnimation();
                    setTimeout(function () {
                        self.router.navigate(['/main/barlist']);
                    }, 1000);
                }
            });
        }).catch(function (err) {
            console.log(err);
            //this.error = err;
        });
    };
    LoginComponent.prototype.stopLoadingAnimation = function () {
        document.getElementById('circleLoader').classList.add('load-complete');
        document.getElementById('checkLoader').classList.remove('checkmarkHidden');
        document.getElementById('checkLoader').classList.add('checkmark');
    };
    LoginComponent.prototype.afterLogIn = function () {
        //Redirect
        this.router.navigate(['/main']);
    };
    LoginComponent.prototype.comparePasswords = function () {
        if (this.createPassword != this.createPassword2) {
            this.passwordsDoNotMatch = true;
            return true;
        }
        else {
            this.passwordsDoNotMatch = false;
            return false;
        }
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        if (this.createFirstName == "")
            return;
        if (this.createEmail == "")
            return;
        if (this.createPassword == "")
            return;
        if (this.comparePasswords() == true)
            return;
        console.log('Register');
        this.isLoading = true;
        this.authService.createUser(this.createEmail, this.createPassword).then(function (success) {
            //Need to upload user info
            console.log(_this.authService.af.auth);
            var user = new _models_User_Model__WEBPACK_IMPORTED_MODULE_2__["User"](_this.authService.af.auth.currentUser);
            user.firstName = _this.createFirstName;
            user.lastName = _this.createLastName;
            _this.authService.createUserInfo(user).then(function (_) {
                _this.authService.setUser(user);
                //Once User Is Set
                _this.authService.authStateSet.subscribe(function (value) {
                    if (value == true) {
                        console.log(_this.authService.currentUser.uid);
                        var self = _this;
                        _this.stopLoadingAnimation();
                        setTimeout(function () {
                            self.router.navigate(['/main/barlist']);
                        }, 1000);
                    }
                });
            });
        });
    };
    LoginComponent.prototype.goToSignUp = function () {
        $("#login").off();
        $("#signup").off();
        if (this.currentPage == "login") {
            $("#login").collapse("hide");
            this.currentPage = "signup";
            var self = this;
            //Start listener for animation end
            $("#login").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
                $("#signup").collapse("show");
                self.switchPageText = "LOG IN";
            });
        }
        else if (this.currentPage == "signup") {
            $("#signup").collapse("hide");
            this.currentPage = "login";
            var self = this;
            //Start listener for animation end
            $("#signup").on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function (e) {
                $("#login").collapse("show");
                self.switchPageText = "SIGN UP";
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/_pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/_pages/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/_pages/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/_pages/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/_pages/login/login.component.ts");




//Import Components

var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
            ],
            providers: [],
            bootstrap: []
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/_pages/main/main.component.css":
/*!************************************************!*\
  !*** ./src/app/_pages/main/main.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".barSlideIn{\r\n  background: white;\r\n  -webkit-transform: translateX(50%);\r\n          transform: translateX(50%);\r\n}\r\n\r\n.block_clicks{\r\n  pointer-events: none;\r\n  touch-action: none;\r\n}\r\n\r\n.out{\r\n  -webkit-transform: translateX(0%);\r\n  transform: translateX(0%);\r\n  transition: -webkit-transform 150ms linear;\r\n  transition: transform 150ms linear;\r\n  transition: transform 150ms linear, -webkit-transform 150ms linear;\r\n  will-change: transform;\r\n}\r\n\r\n.in{\r\n  -webkit-transform: translateX(-80%);\r\n  transform: translateX(-80%);\r\n  transition: -webkit-transform 150ms linear;\r\n  transition: transform 150ms linear;\r\n  transition: transform 150ms linear, -webkit-transform 150ms linear;\r\n}\r\n\r\n.pageClick{\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 15%;\r\n  height:100%;\r\n  z-index:15000;\r\n}\r\n\r\n.user_slide_hidden{\r\n  display: none;\r\n}\r\n\r\n.centered {\r\n    position: fixed;\r\n    top: 40%;\r\n    left: 50%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.slideCentered {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 150%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.slideCentered-hidden {\r\n    display:none;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 150%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.centered-hidden {\r\n    display:none;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.lds-ring {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 64px;\r\n    height: 64px;\r\n  }\r\n\r\n.lds-ring div {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    width: 51px;\r\n    height: 51px;\r\n    margin: 6px;\r\n    border: 6px solid #eec536;\r\n    border-radius: 50%;\r\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: #eec536 transparent transparent transparent;\r\n  }\r\n\r\n.lds-ring div:nth-child(1) {\r\n    -webkit-animation-delay: -0.45s;\r\n            animation-delay: -0.45s;\r\n  }\r\n\r\n.lds-ring div:nth-child(2) {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s;\r\n  }\r\n\r\n.lds-ring div:nth-child(3) {\r\n    -webkit-animation-delay: -0.15s;\r\n            animation-delay: -0.15s;\r\n  }\r\n\r\n@-webkit-keyframes lds-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n@keyframes lds-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n.slideInPage{\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n    z-index: 100;\r\n    top:50px;\r\n\r\n    -webkit-transform: translateX(100%);\r\n\r\n            transform: translateX(100%);\r\n\r\n  \r\n    width: 100%;\r\n    height: 100%;\r\n    background:white;\r\n  \r\n  }\r\n\r\n.picture-swipe-container {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n.picture-swipe-slide {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    background: #fff;\r\n    /* Center slide text vertically */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n.barDealsSection {\r\n    padding: 10px 0 0 0;\r\n    border-bottom:1px black solid;\r\n  }\r\n\r\n.preventScroll{\r\n  overflow: auto;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsMENBQWtDO0VBQWxDLGtDQUFrQztFQUFsQyxrRUFBa0M7RUFDbEMsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQiwwQ0FBa0M7RUFBbEMsa0NBQWtDO0VBQWxDLGtFQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUdFO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsd0NBQWdDO1lBQWhDLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsd0NBQWdDO1lBQWhDLGdDQUFnQztFQUNsQzs7QUFHQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsd0NBQWdDO1lBQWhDLGdDQUFnQztFQUNsQzs7QUFHQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0VBQThEO1lBQTlELDhEQUE4RDtJQUM5RCx5REFBeUQ7RUFDM0Q7O0FBQ0E7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4Qjs7QUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0FBQ0E7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRjs7QUFQQTtJQUNFO01BQ0UsK0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQXlCO2NBQXpCLHlCQUF5QjtJQUMzQjtFQUNGOztBQUVBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFFBQVE7O0lBRVIsbUNBQTJCOztZQUEzQiwyQkFBMkI7OztJQUczQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjs7RUFFbEI7O0FBR0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBSWpDLGFBQWE7SUFJYix1QkFBdUI7SUFJdkIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtFQUMvQjs7QUFHRjtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiX3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhclNsaWRlSW57XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XHJcbn1cclxuXHJcbi5ibG9ja19jbGlja3N7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xyXG59XHJcblxyXG4ub3V0e1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBsaW5lYXI7XHJcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxufVxyXG4uaW57XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MCUpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5wYWdlQ2xpY2t7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjA7XHJcbiAgbGVmdDowO1xyXG4gIHdpZHRoOiAxNSU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgei1pbmRleDoxNTAwMDtcclxufVxyXG5cclxuLnVzZXJfc2xpZGVfaGlkZGVue1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuICBcclxuICBcclxuICAuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZUNlbnRlcmVkIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMTUwJTtcclxuICAgIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlQ2VudGVyZWQtaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogMTUwJTtcclxuICAgIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNlbnRlcmVkLWhpZGRlbiB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmxkcy1yaW5nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2IHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiA1MXB4O1xyXG4gICAgaGVpZ2h0OiA1MXB4O1xyXG4gICAgbWFyZ2luOiA2cHg7XHJcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjZWVjNTM2O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XHJcbiAgICBib3JkZXItY29sb3I6ICNlZWM1MzYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gIH1cclxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcclxuICB9XHJcbiAgQGtleWZyYW1lcyBsZHMtcmluZyB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zbGlkZUluUGFnZXtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICB0b3A6NTBweDtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcblxyXG4gIFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBcclxuICAucGljdHVyZS1zd2lwZS1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5waWN0dXJlLXN3aXBlLXNsaWRlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAvKiBDZW50ZXIgc2xpZGUgdGV4dCB2ZXJ0aWNhbGx5ICovXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmJhckRlYWxzU2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDAgMCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggYmxhY2sgc29saWQ7XHJcbiAgfVxyXG5cclxuXHJcbi5wcmV2ZW50U2Nyb2xse1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/_pages/main/main.component.html":
/*!*************************************************!*\
  !*** ./src/app/_pages/main/main.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"views\">\r\n\r\n  <div class=\"view view-main\">\r\n    <div class=\"pages\">\r\n      <div data-page=\"shop\" class=\"page\">\r\n        <div class=\"page-content\" id=\"mainPage\">\r\n\r\n\r\n          <div style=\"-webkit-overflow-scrolling:touch;\">\r\n              <app-popup></app-popup>\r\n          </div>\r\n\r\n\r\n          <div class=\"user_slide\" style=\"-webkit-overflow-scrolling:touch;\">\r\n            <app-user-slide></app-user-slide>\r\n          </div>\r\n\r\n\r\n          <div class=\"main_content\">\r\n            <div *ngIf=\"userSlide\" class=\"pageClick\" (click)=\"pageClick()\"></div>\r\n            <div id=\"headerAndRouter\">\r\n              <app-header></app-header>\r\n              <div id=\"routerHolder\">\r\n                <router-outlet></router-outlet>\r\n              </div>\r\n            </div>\r\n            <app-navbar></app-navbar>\r\n          </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_pages/main/main.component.ts":
/*!***********************************************!*\
  !*** ./src/app/_pages/main/main.component.ts ***!
  \***********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var MainComponent = /** @class */ (function () {
    function MainComponent(mainService, router, authService) {
        this.mainService = mainService;
        this.router = router;
        this.authService = authService;
        this.slideInLogin = false;
        this.userSlide = false;
        this.showCoverPopUp = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        if (this.authService.afAuth.auth == null)
            this.router.navigate(['/login']);
        this.pageChangeInit();
        this.noScrollInit();
        this.popUpInit();
    };
    MainComponent.prototype.pageChangeInit = function () {
        var _this = this;
        this.mainService.currentPage.subscribe(function (result) {
            if (_this.mainService.currentPageValue == -1)
                return;
            if (result == 0) {
                _this.router.navigate(['/main/barlist']);
            }
            else if (result == 1) {
                _this.router.navigate(['/main/search']);
            }
        });
    };
    MainComponent.prototype.noScrollInit = function () {
        var _this = this;
        var self = this;
        var fixed = document.getElementById('mainPage');
        function blockScrolling(e) {
            if (self.userSlide == false || self.showCoverPopUp == false)
                return;
            e.preventDefault();
        }
        fixed.addEventListener('touchmove', blockScrolling, false);
        var elm = document.getElementById("headerAndRouter");
        this.mainService.userSlide.subscribe(function (result) {
            _this.userSlide = result;
            if (result == true) {
                elm.classList.add("block_clicks");
            }
            else {
                elm.classList.remove("block_clicks");
            }
        });
    };
    MainComponent.prototype.popUpInit = function () {
        var _this = this;
        this.mainService.showCoverPopUp.subscribe(function (result) {
            _this.showCoverPopUp = result;
        });
    };
    MainComponent.prototype.pageClick = function () {
        if (this.mainService.userSlideValue == true) {
            this.mainService.changeUserSlide();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], MainComponent.prototype, "slideInLogin", void 0);
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/_pages/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/_pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/_pages/main/main.module.ts":
/*!********************************************!*\
  !*** ./src/app/_pages/main/main.module.ts ***!
  \********************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./src/app/_pages/main/main.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_components/navbar/navbar.component */ "./src/app/_components/navbar/navbar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_components/header/header.component */ "./src/app/_components/header/header.component.ts");
/* harmony import */ var _components_main_scroll_main_scroll_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_components/main-scroll/main-scroll.component */ "./src/app/_components/main-scroll/main-scroll.component.ts");
/* harmony import */ var _components_bar_page_bar_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_components/bar-page/bar-page.component */ "./src/app/_components/bar-page/bar-page.component.ts");
/* harmony import */ var _components_full_loading_full_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_components/full-loading/full-loading.component */ "./src/app/_components/full-loading/full-loading.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_pages/barlist/barlist.component */ "./src/app/_pages/barlist/barlist.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_pages/search/search.component */ "./src/app/_pages/search/search.component.ts");
/* harmony import */ var _components_user_slide_user_slide_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_components/user-slide/user-slide.component */ "./src/app/_components/user-slide/user-slide.component.ts");
/* harmony import */ var _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_components/barpage-deals/barpage-deals.component */ "./src/app/_components/barpage-deals/barpage-deals.component.ts");
/* harmony import */ var _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../_components/barpage-cover/barpage-cover.component */ "./src/app/_components/barpage-cover/barpage-cover.component.ts");
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../_components/popup/popup.component */ "./src/app/_components/popup/popup.component.ts");



//Import Components













var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _components_main_scroll_main_scroll_component__WEBPACK_IMPORTED_MODULE_6__["MainScrollComponent"],
                _components_bar_page_bar_page_component__WEBPACK_IMPORTED_MODULE_7__["BarPageComponent"],
                _components_full_loading_full_loading_component__WEBPACK_IMPORTED_MODULE_8__["FullLoadingComponent"],
                _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_10__["BarlistComponent"],
                _pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _components_user_slide_user_slide_component__WEBPACK_IMPORTED_MODULE_12__["UserSlideComponent"],
                _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_13__["BarpageDealsComponent"],
                _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_14__["BarpageCoverComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_15__["PopupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            exports: [
                _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"]
            ],
            providers: [],
            bootstrap: []
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/_pages/search/search.component.css":
/*!****************************************************!*\
  !*** ./src/app/_pages/search/search.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJfcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_pages/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/_pages/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br />\r\n<br />\r\n<br />\r\n<br />\r\n<br />\r\n<br />\r\n\r\n<button (click)=\"testBtn()\"></button>\r\n\r\n<p>\r\n  {{test}}\r\n</p>\r\n\r\n"

/***/ }),

/***/ "./src/app/_pages/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/_pages/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
        this.test = "Test";
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.testBtn = function () {
        this.test = "Taco";
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/_pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/_pages/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




 // RxJS 6 syntax

var AuthService = /** @class */ (function () {
    function AuthService(dbA, afAuth) {
        this.afAuth = afAuth;
        this.currentUser = null;
        this.authStateValue = false;
        this.af = afAuth;
        this.db = dbA;
        this.authStateSet = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
    }
    AuthService.prototype.setUser = function (user) {
        var _this = this;
        if (this.currentUser != null && user.uid == this.currentUser.uid)
            return;
        this.currentUser = user;
        this.getUserInfo().subscribe(function (responseList) {
            var barCardCount = responseList[0];
            var userInfo = responseList[1];
            if (userInfo == null)
                _this.afAuth.auth.signOut();
            //Set User Info
            //Set Bar Card Count
            _this.currentUser.barCardCount = +barCardCount;
            //Get Liked Cards
            if (userInfo.hasOwnProperty('likedBars')) {
                _this.getLikedCards(userInfo.likedBars);
            }
            //Get About Info
            _this.currentUser.firstName = userInfo.about.firstName;
            console.log(_this.currentUser);
            //Mark As Finished
            _this.authStateValue = true;
            _this.authStateSet.next(true);
        });
    };
    AuthService.prototype.getUserInfo = function () {
        var uid = this.currentUser.uid;
        var response0 = this.db.object('barCardCount').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
        var response1 = this.db.object('userInfo/' + uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])([response0, response1]);
    };
    AuthService.prototype.getLikedCards = function (result) {
        this.currentUser.likedBars = [];
        if (result != null) {
            for (var i = 1; i <= this.currentUser.barCardCount; i++) {
                if (result[i] != null) {
                    this.currentUser.likedBars.push(+result[i].id);
                }
            }
        }
    };
    AuthService.prototype.createUserInfo = function (user) {
        return this.db.object('userInfo/' + user.uid).set({
            about: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                profilePicUrl: "null"
            }
        });
    };
    AuthService.prototype.logIn = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logOut = function () {
        this.afAuth.auth.signOut();
    };
    AuthService.prototype.createUser = function (email, password) {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthService.prototype.likeBar = function (barId) {
        console.log("Like");
        var barIdString = barId.toString();
        var uid = this.currentUser.uid;
        var index = this.currentUser.likedBars.indexOf(barId);
        //If bar was not liked before
        if (index == -1) {
            this.currentUser.likedBars.push(barId);
            var itemRef = this.db.object('userInfo/' + uid + '/likedBars/' + barIdString);
            itemRef.set({ id: barIdString }).then(function (_) {
            });
        }
        //If bar was liked before
        else {
            this.currentUser.likedBars.splice(index, 1);
            var itemRef = this.db.object('userInfo/' + uid + '/likedBars/' + barIdString);
            itemRef.remove().then(function (_) {
            });
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/barpage.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/barpage.service.ts ***!
  \**********************************************/
/*! exports provided: BarPageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarPageService", function() { return BarPageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var BarPageService = /** @class */ (function () {
    function BarPageService() {
        this.currentBarPage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    BarPageService.prototype.setBarPage = function (BarPage) {
        this.currentBarPage.next(BarPage);
    };
    BarPageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BarPageService);
    return BarPageService;
}());



/***/ }),

/***/ "./src/app/_services/main.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/main.service.ts ***!
  \*******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainService = /** @class */ (function () {
    function MainService(router) {
        this.router = router;
        this.currentPageValue = 0;
        this.barSlideValue = false;
        this.userSlideValue = false;
        //Popups
        this.showCoverPopUpValue = false;
        this.reportCoverValue = 0;
        this.barSlide = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentPage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](-1);
        this.userSlide = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.showCoverPopUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.reportCoverSwitch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    MainService.prototype.reverseBarSlide = function () {
        this.barSlideValue = !this.barSlideValue;
        this.barSlide.next(this.barSlideValue);
    };
    MainService.prototype.changePage = function (num) {
        if (this.userSlideValue == true)
            this.changeUserSlide();
        if (this.currentPageValue == num)
            return;
        this.currentPageValue = num;
        this.currentPage.next(num);
    };
    MainService.prototype.changeUserSlide = function () {
        this.userSlideValue = !this.userSlideValue;
        this.userSlide.next(this.userSlideValue);
    };
    MainService.prototype.activateCoverPopUp = function () {
        this.showCoverPopUpValue = true;
        this.showCoverPopUp.next(true);
    };
    MainService.prototype.reportCover = function (num) {
        this.reportCoverValue = num;
        this.reportCoverSwitch.next(true);
    };
    MainService.prototype.hideCoverPopUp = function () {
        this.showCoverPopUpValue = false;
        this.showCoverPopUp.next(false);
    };
    MainService.prototype.refresh = function () {
    };
    MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_pages/main/main.component */ "./src/app/_pages/main/main.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_pages/login/login.component */ "./src/app/_pages/login/login.component.ts");
/* harmony import */ var _pages_init_init_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_pages/init/init.component */ "./src/app/_pages/init/init.component.ts");
/* harmony import */ var _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_pages/barlist/barlist.component */ "./src/app/_pages/barlist/barlist.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_pages/search/search.component */ "./src/app/_pages/search/search.component.ts");
/* harmony import */ var _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_components/barpage-deals/barpage-deals.component */ "./src/app/_components/barpage-deals/barpage-deals.component.ts");
/* harmony import */ var _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_components/barpage-cover/barpage-cover.component */ "./src/app/_components/barpage-cover/barpage-cover.component.ts");
/* harmony import */ var _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/refresh/refresh.component */ "./src/app/_components/refresh/refresh.component.ts");











var routes = [
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            {
                path: 'barlist',
                component: _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_6__["BarlistComponent"],
                children: [
                    { path: '', redirectTo: 'deals', pathMatch: 'full' },
                    { path: 'deals', component: _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_8__["BarpageDealsComponent"] },
                    { path: 'cover', component: _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_9__["BarpageCoverComponent"] }
                ]
            },
            {
                path: 'search',
                component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"]
            },
            {
                path: '404',
                component: _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_6__["BarlistComponent"]
            },
            {
                path: '**',
                component: _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_6__["BarlistComponent"]
            }
        ]
    },
    { path: 'refresh', component: _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_10__["RefreshComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: '**', component: _pages_init_init_component__WEBPACK_IMPORTED_MODULE_5__["InitComponent"] },
    { path: '404', component: _pages_init_init_component__WEBPACK_IMPORTED_MODULE_5__["InitComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BarCrawlV3';
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener('deviceready', function () {
            alert(device.platform);
        }, false);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_init_init_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_pages/init/init.module */ "./src/app/_pages/init/init.module.ts");
/* harmony import */ var _pages_main_main_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_pages/main/main.module */ "./src/app/_pages/main/main.module.ts");
/* harmony import */ var _pages_login_login_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_pages/login/login.module */ "./src/app/_pages/login/login.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./custom-reuse-strategy */ "./src/app/custom-reuse-strategy.ts");
/* harmony import */ var _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_components/refresh/refresh.component */ "./src/app/_components/refresh/refresh.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_18__["RefreshComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _pages_init_init_module__WEBPACK_IMPORTED_MODULE_11__["InitModule"],
                _pages_main_main_module__WEBPACK_IMPORTED_MODULE_12__["MainModule"],
                _pages_login_login_module__WEBPACK_IMPORTED_MODULE_13__["LoginModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"]
            ],
            providers: [
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouteReuseStrategy"], useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_17__["CustomReuseStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/custom-reuse-strategy.ts":
/*!******************************************!*\
  !*** ./src/app/custom-reuse-strategy.ts ***!
  \******************************************/
/*! exports provided: CustomReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function() { return CustomReuseStrategy; });
// This impl. bases upon one that can be found in the router's test cases.
var CustomReuseStrategy = /** @class */ (function () {
    function CustomReuseStrategy() {
        this.handlers = {};
        //List of routes to store and retrieve from
        this.saveRoutes = ['barlist', 'search'];
    }
    //If true then store
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        if (this.saveRoutes.indexOf(route.routeConfig.path) < 0)
            return false;
        return true;
    };
    CustomReuseStrategy.prototype.store = function (route, handle) {
        this.handlers[route.routeConfig.path] = handle;
    };
    //if true then retrieve
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        if (this.saveRoutes.indexOf(route.routeConfig.path) < 0)
            return false;
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.retrieve = function (route) {
        if (!route.routeConfig)
            return null;
        return this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    return CustomReuseStrategy;
}());



/***/ }),

/***/ "./src/app/models.ts":
/*!***************************!*\
  !*** ./src/app/models.ts ***!
  \***************************/
/*! exports provided: BarCard, UpcomingDeal, HourlyEstimate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_BarCard_Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_models/BarCard.Model */ "./src/app/_models/BarCard.Model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BarCard", function() { return _models_BarCard_Model__WEBPACK_IMPORTED_MODULE_0__["BarCard"]; });

/* harmony import */ var _models_UpcomingDeal_Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_models/UpcomingDeal.Model */ "./src/app/_models/UpcomingDeal.Model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpcomingDeal", function() { return _models_UpcomingDeal_Model__WEBPACK_IMPORTED_MODULE_1__["UpcomingDeal"]; });

/* harmony import */ var _models_HourlyEstimate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_models/HourlyEstimate */ "./src/app/_models/HourlyEstimate.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HourlyEstimate", function() { return _models_HourlyEstimate__WEBPACK_IMPORTED_MODULE_2__["HourlyEstimate"]; });






/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyB0p2lalH4H-gxCUY_hmJi4kh-01MwoLqs",
        authDomain: "barcrawlv01.firebaseapp.com",
        databaseURL: "https://barcrawlv01.firebaseio.com",
        projectId: "barcrawlv01",
        storageBucket: "barcrawlv01.appspot.com",
        messagingSenderId: "742879583749"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var fastclick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fastclick */ "./node_modules/fastclick/lib/fastclick.js");
/* harmony import */ var fastclick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fastclick__WEBPACK_IMPORTED_MODULE_4__);





fastclick__WEBPACK_IMPORTED_MODULE_4__["attach"](document.body);
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Jmalafronte\Documents\Personal\BarCrawlV3\BarCrawlV3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map