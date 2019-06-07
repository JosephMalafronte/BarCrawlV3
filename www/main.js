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

module.exports = ".barPageLike {\n    position: absolute;\n    top:9px;\n    right:20px;\n    z-index:5;\n    width:33px;\n}\n\n.barPageLike img {\n    width: 100%;\n}\n\n/* Add a black background color to the top navigation */\n\n.topnav {\n    position: absolute;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.adjust {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n/* Style the links inside the navigation bar */\n\n.holder  {\n    float: left;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 12px 0px;\n    width: 25%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n/* Add a color to the active/current link */\n\n.active {\n    background-color: #F2C843;\n    color: black;\n}\n\n.collapse {\n    display: none;\n  }\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    padding: 0 0 0 0;\n    transition-property: height, visibility;\n    transition-duration: 0.35s;\n    transition-timing-function: ease;\n  }\n\n.show {\n    display: block !important;\n  }\n\n.barDealsSectionBelow {\n    margin-top: -20px;\n    padding: 0 0 0 0;\n    border-bottom:1px black solid;\n  }\n\n.upcomingTitle {\n    margin-top: 10px;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.upcomingTitleAst  {\n    float: left;\n    color: #f2f2f2;\n    text-align: left;\n    padding: 12px 0px;\n    width: 100%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n.right-pointing-triangle::after {\n  content: \"\\25B6 \\FE0E\";\n}\n\n.currentBarCover {\n    text-align: center; \n    margin-top: 12px;\n    padding: 0 0 3px 0;\n    line-height:80%;\n    font-size:28px;\n}\n\n.currentBarCover span{\n    font-size: 16px;\n}\n\n.reportCoverButton {\n    margin: 10px 0px 10px 0; width:300px; font-size:14px;\n}\n\n.modal-window {\n    position: fixed;\n    background-color: rgba(200, 200, 200, 0.75);\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 999;\n    opacity: 1;\n    pointer-events: auto;\n    transition: all 0.3s;\n  }\n\n.modal-window:target {\n    opacity: 1;\n    pointer-events: auto;\n  }\n\n.modal-window>div {\n    width: 70%;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    margin: 50% 0 0 7%;\n    padding: 2rem;\n    background: #fff;\n    color: #444;\n  }\n\n.modal-window header {\n    font-weight: bold;\n  }\n\n.modal-close {\n    color: #aaa;\n    line-height: 50px;\n    font-size: 30px;\n    margin-left: 10px;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    top: 0;\n    width: 70px;\n    text-decoration: none;\n  }\n\n.modal-close:hover {\n    color: #000;\n  }\n\n.modal-window h2 {\n    font-size: 150%;\n    margin: 0 0 15px;\n    padding: 0 0 0 0;\n  }\n\n.modal-window h1 {\n    font-size: 40px;\n    font-weight: bold;\n    margin: 0 0 15px;\n    padding: 0 0 0 0;\n  }\n\n.minus{\n      position: absolute;\n      left: 26%;\n      top: 38%;\n      width: 10%;\n  }\n\n.plus{\n    position: absolute;\n    right: 26%;\n    top: 38%;\n    width: 10%;\n  }\n\n.checkmark {\n    width: 100px;\n    margin: 0 auto;\n    padding-top: 0px;\n  }\n\n.path {\n    stroke-dasharray: 300;\n    stroke-dashoffset: 0;\n    -webkit-animation-name: load, spin;\n    -webkit-animation-duration: 3s, 3s;\n    -webkit-animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-name: load, spin;\n    animation-duration: 3s, 3s;\n    animation-timing-function: linear;  \n    animation-iteration-count: infinite;\n    -webkit-transform-origin: 50% 50%;\n    -moz-transform-origin: 50px 50px;\n  }\n\n.path-complete {\n      -webkit-animation-play-state: paused;\n      animation-play-state: paused;\n  }\n\n.check \n  {\n      stroke-dasharray: 110;\n      stroke-dashoffset: -110;\n      stroke-width: 0;\n  }\n\n.check-complete \n  {   \n      -webkit-animation: check 1s ease-in forwards;\n      animation: check 1s ease-in forwards;\n      stroke-width: 8;\n      stroke-dashoffset: 0;\n  }\n\n.fill \n  {\n      stroke-dasharray: 285;\n      stroke-dashoffset: -257;\n      -webkit-animation: spin-fill 3s cubic-bezier(0.700, 0.435, 0.120, 0.600) infinite forwards;\n      animation: spin-fill 3s cubic-bezier(0.700, 0.465, 0.120, 0.600) infinite forwards;\n      -webkit-transform-origin: 50% 50%;\n    -moz-transform-origin: 50px 50px;\n  }\n\n.fill-complete \n  {\n      -webkit-animation: fill 1s ease-out forwards;\n      animation: fill 1s ease-out forwards;\n  }\n\n@-webkit-keyframes load {\n   0% {\n     stroke-dashoffset: 300;\n     -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n   }\n   50% {\n       stroke-dashoffset: 0;\n       -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n   }\n   100% {\n     stroke-dashoffset: -300;\n   }\n  }\n\n@keyframes load {\n   0% {\n     stroke-dashoffset: 285;\n     -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n             animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n   }\n   50% {\n       stroke-dashoffset: 0;\n       -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n               animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n   }\n   100% {\n     stroke-dashoffset: -285;\n   }\n  }\n\n@-webkit-keyframes check {\n   0% {\n     stroke-dashoffset: -110;\n  }\n   100% {\n     stroke-dashoffset: 0;\n   }\n  }\n\n@keyframes check {\n   0% {\n     stroke-dashoffset: -110;\n  }\n   100% {\n     stroke-dashoffset: 0;\n   }\n  }\n\n@-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n@keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n\n@-webkit-keyframes spin-fill {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(720deg);\n    }\n  }\n\n@keyframes spin-fill {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(720deg);\n              transform: rotate(720deg);\n    }\n  }\n\n@-webkit-keyframes fill {\n    0% {\n      stroke-dashoffset: 285;\n    }\n    100% {\n      stroke-dashoffset: 0;\n    }\n  }\n\n@keyframes fill {\n    0% {\n      stroke-dashoffset: 285;\n    }\n    100% {\n      stroke-dashoffset: 0;\n    }\n  }\n\n.success \n  {\n      stroke: #009900;\n      transition: stroke .6s;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL2Jhci1wYWdlL2Jhci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLHVEQUF1RDs7QUFDdkQ7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQSw4Q0FBOEM7O0FBQzlDO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFHQSwyQ0FBMkM7O0FBQzNDO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0VBQ2Y7O0FBR0E7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFHaEIsdUNBQXVDO0lBR3ZDLDBCQUEwQjtJQUcxQixnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtFQUMvQjs7QUFHQTtJQUNFLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBSUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsY0FBYztBQUN4RDs7QUFFQTtJQUNJLGVBQWU7SUFDZiwyQ0FBMkM7SUFDM0MsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0JBQW9CO0lBR3BCLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7QUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7QUFFQTtNQUNJLGtCQUFrQjtNQUNsQixTQUFTO01BQ1QsUUFBUTtNQUNSLFVBQVU7RUFDZDs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtJQUNSLFVBQVU7RUFDWjs7QUFFQTtJQUNFLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtJQUNwQixrQ0FBa0M7SUFDbEMsa0NBQWtDO0lBQ2xDLHlDQUF5QztJQUN6QywyQ0FBMkM7SUFDM0MsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUMxQixpQ0FBaUM7SUFDakMsbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7TUFDSSxvQ0FBb0M7TUFDcEMsNEJBQTRCO0VBQ2hDOztBQUVBOztNQUVJLHFCQUFxQjtNQUNyQix1QkFBdUI7TUFDdkIsZUFBZTtFQUNuQjs7QUFFQTs7TUFFSSw0Q0FBNEM7TUFDNUMsb0NBQW9DO01BQ3BDLGVBQWU7TUFDZixvQkFBb0I7RUFDeEI7O0FBRUE7O01BRUkscUJBQXFCO01BQ3JCLHVCQUF1QjtNQUN2QiwwRkFBMEY7TUFDMUYsa0ZBQWtGO01BQ2xGLGlDQUFpQztJQUNuQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7O01BRUksNENBQTRDO01BQzVDLG9DQUFvQztFQUN4Qzs7QUFFQTtHQUNDO0tBQ0Usc0JBQXNCO0tBQ3RCLDJFQUEyRTtHQUM3RTtHQUNBO09BQ0ksb0JBQW9CO09BQ3BCLDJFQUEyRTtHQUMvRTtHQUNBO0tBQ0UsdUJBQXVCO0dBQ3pCO0VBQ0Q7O0FBQ0E7R0FDQztLQUNFLHNCQUFzQjtLQUN0QiwyRUFBbUU7YUFBbkUsbUVBQW1FO0dBQ3JFO0dBQ0E7T0FDSSxvQkFBb0I7T0FDcEIsMkVBQW1FO2VBQW5FLG1FQUFtRTtHQUN2RTtHQUNBO0tBQ0UsdUJBQXVCO0dBQ3pCO0VBQ0Q7O0FBRUE7R0FDQztLQUNFLHVCQUF1QjtFQUMxQjtHQUNDO0tBQ0Usb0JBQW9CO0dBQ3RCO0VBQ0Q7O0FBQ0E7R0FDQztLQUNFLHVCQUF1QjtFQUMxQjtHQUNDO0tBQ0Usb0JBQW9CO0dBQ3RCO0VBQ0Q7O0FBRUE7SUFDRTtNQUNFLCtCQUErQjtJQUNqQztJQUNBO01BQ0UsaUNBQWlDO0lBQ25DO0VBQ0Y7O0FBQ0E7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRjs7QUFFQTtJQUNFO01BQ0UsK0JBQStCO0lBQ2pDO0lBQ0E7TUFDRSxpQ0FBaUM7SUFDbkM7RUFDRjs7QUFDQTtJQUNFO01BQ0UsK0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQXlCO2NBQXpCLHlCQUF5QjtJQUMzQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLG9CQUFvQjtJQUN0QjtFQUNGOztBQUNBO0lBQ0U7TUFDRSxzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLG9CQUFvQjtJQUN0QjtFQUNGOztBQUVBOztNQUVJLGVBQWU7TUFDZixzQkFBc0I7RUFDMUIiLCJmaWxlIjoiX2NvbXBvbmVudHMvYmFyLXBhZ2UvYmFyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJQYWdlTGlrZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo5cHg7XG4gICAgcmlnaHQ6MjBweDtcbiAgICB6LWluZGV4OjU7XG4gICAgd2lkdGg6MzNweDtcbn1cblxuLmJhclBhZ2VMaWtlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXG4udG9wbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4uYWRqdXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4gIFxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cbi5ob2xkZXIgIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDODQzO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICAuY29sbGFwc2luZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIH1cblxuICAuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5iYXJEZWFsc1NlY3Rpb25CZWxvdyB7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICBib3JkZXItYm90dG9tOjFweCBibGFjayBzb2xpZDtcbiAgfVxuXG5cbiAgLnVwY29taW5nVGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC51cGNvbWluZ1RpdGxlQXN0ICB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cblxuLnJpZ2h0LXBvaW50aW5nLXRyaWFuZ2xlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFwyNUI2IFxcRkUwRVwiO1xufVxuXG4uY3VycmVudEJhckNvdmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZzogMCAwIDNweCAwO1xuICAgIGxpbmUtaGVpZ2h0OjgwJTtcbiAgICBmb250LXNpemU6MjhweDtcbn1cblxuLmN1cnJlbnRCYXJDb3ZlciBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnJlcG9ydENvdmVyQnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMDsgd2lkdGg6MzAwcHg7IGZvbnQtc2l6ZToxNHB4O1xufVxuXG4ubW9kYWwtd2luZG93IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjc1KTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gIFxuICAubW9kYWwtd2luZG93OnRhcmdldCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICBcbiAgLm1vZGFsLXdpbmRvdz5kaXYge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA1MCUgMCAwIDclO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuICBcbiAgLm1vZGFsLXdpbmRvdyBoZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAubW9kYWwtY2xvc2Uge1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5tb2RhbC1jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5tb2RhbC13aW5kb3cgaDIge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gIH1cbiAgLm1vZGFsLXdpbmRvdyBoMSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgfVxuXG4gIC5taW51c3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDI2JTtcbiAgICAgIHRvcDogMzglO1xuICAgICAgd2lkdGg6IDEwJTtcbiAgfVxuXG4gIC5wbHVze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjYlO1xuICAgIHRvcDogMzglO1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cblxuICAuY2hlY2ttYXJrIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuICBcbiAgLnBhdGgge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsb2FkLCBzcGluO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzcywgM3M7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogbG9hZCwgc3BpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzLCAzcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7ICBcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MHB4IDUwcHg7XG4gIH1cbiAgXG4gIC5wYXRoLWNvbXBsZXRlIHtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIH1cbiAgXG4gIC5jaGVjayBcbiAge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTEwO1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMTA7XG4gICAgICBzdHJva2Utd2lkdGg6IDA7XG4gIH1cbiAgXG4gIC5jaGVjay1jb21wbGV0ZSBcbiAgeyAgIFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrIDFzIGVhc2UtaW4gZm9yd2FyZHM7XG4gICAgICBhbmltYXRpb246IGNoZWNrIDFzIGVhc2UtaW4gZm9yd2FyZHM7XG4gICAgICBzdHJva2Utd2lkdGg6IDg7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICBcbiAgLmZpbGwgXG4gIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI4NTtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjU3O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4tZmlsbCAzcyBjdWJpYy1iZXppZXIoMC43MDAsIDAuNDM1LCAwLjEyMCwgMC42MDApIGluZmluaXRlIGZvcndhcmRzO1xuICAgICAgYW5pbWF0aW9uOiBzcGluLWZpbGwgM3MgY3ViaWMtYmV6aWVyKDAuNzAwLCAwLjQ2NSwgMC4xMjAsIDAuNjAwKSBpbmZpbml0ZSBmb3J3YXJkcztcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwcHggNTBweDtcbiAgfVxuICBcbiAgLmZpbGwtY29tcGxldGUgXG4gIHtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmaWxsIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICAgICAgYW5pbWF0aW9uOiBmaWxsIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZCB7XG4gICAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMDA7XG4gICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcbiAgIH1cbiAgIDUwJSB7XG4gICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xuICAgfVxuICAgMTAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzAwO1xuICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbG9hZCB7XG4gICAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODU7XG4gICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XG4gICB9XG4gICA1MCUge1xuICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XG4gICB9XG4gICAxMDAlIHtcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0yODU7XG4gICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjaGVjayB7XG4gICAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTEwO1xuICB9XG4gICAxMDAlIHtcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICB9XG4gIH1cbiAgQGtleWZyYW1lcyBjaGVjayB7XG4gICAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTEwO1xuICB9XG4gICAxMDAlIHtcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4tZmlsbCB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc3Bpbi1maWxsIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZpbGwge1xuICAgIDAlIHtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmlsbCB7XG4gICAgMCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI4NTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5zdWNjZXNzIFxuICB7XG4gICAgICBzdHJva2U6ICMwMDk5MDA7XG4gICAgICB0cmFuc2l0aW9uOiBzdHJva2UgLjZzO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/_components/bar-page/bar-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/bar-page/bar-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slideInPage\" [@slideInBarTrigger]=\"slideInBar\">\n  <app-full-loading *ngIf=\"isLoading\"></app-full-loading>\n\n  <div id=\"slider_maincontent\">\n\n    <h2 class=\"page_title_slide\">{{barName}}</h2>\n    <span class=\"barPageLike\" (click)=\"likeBar()\">\n      <img id=\"like\" [src]=\"checkLikedStatus()? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\n        alt=\"\" title=\"\" />\n    </span>\n\n    <ul id=\"imageGallery\" style=\"margin-bottom: -12px;\">\n      <li data-thumb=\"img/thumb/cS-1.jpg\" data-src=\"img/largeImage.jpg\">\n        <img [src]=\"barPictureUrl\" (load)=\"imageLoaded()\" width=\"100%\" id=\"barPageImage1\" />\n      </li>\n    </ul>\n\n    <div class=\"page_single layout_fullwidth_padding\" style=\"margin-bottom: 40px;\">\n\n\n      <div class=\"topnav\">\n        <div class=\"adjust\">\n          <div (click)=\"setActiveInfoPage(0)\" [className]=\"activeNavIcon(0)? 'holder active'  : 'holder'\">\n            <span>Deals</span>\n          </div>\n          <div (click)=\"setActiveInfoPage(1)\" [className]=\"activeNavIcon(1)? 'holder active'  : 'holder'\">\n            <span>Cover</span>\n          </div>\n          <div (click)=\"setActiveInfoPage(2)\" [className]=\"activeNavIcon(2)? 'holder active'  : 'holder'\">\n            <span>Friends</span>\n          </div>\n          <div (click)=\"setActiveInfoPage(3)\" [className]=\"activeNavIcon(3)? 'holder active'  : 'holder'\">\n            <span>Map</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- <blockquote style=\"display:none\">\n        This mobile template that can be used to create a mobile website, a mobile web app, or even a native mobile app. The design\n        is using a full width layout that works perfectly on tablets and desktop also.\n        <span>SINDEVO.COM</span>\n      </blockquote> -->\n\n      <router-outlet></router-outlet>\n\n\n\n      <!-- BAR DEALS -->\n      <!-- <app-barpage-deals></app-barpage-deals> -->\n\n\n      <!-- BAR COVER -->\n      <!-- <app-barpage-cover></app-barpage-cover> -->\n\n\n\n      <!-- BAR FRIENDS -->\n      <div *ngIf=\"activeInfoPage==2\" style=\"padding-top:50px;\">\n        <div class=\"barDealsSection\">\n          <h3 style=\"padding: 0 0 0 0;\">\n            <span>Friends Going Here Tonight</span>\n          </h3>\n        </div>\n\n        <div>\n          <ul class=\"features_list\" *ngFor=\"let dailyDeal of headDailyDeals\" style=\"padding: 0px 0 0 0; position:relative\">\n            <li>\n              <div style=\"padding-bottom: 10px;\">\n                <span class=\"features_list_span\">\n                  <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                  <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n                </span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      \n\n\n\n\n\n    </div>\n\n  </div>\n</div>"

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

module.exports = ".barPageLike {\n    position: absolute;\n    top:9px;\n    right:20px;\n    z-index:5;\n    width:33px;\n}\n\n.barPageLike img {\n    width: 100%;\n}\n\n/* Add a black background color to the top navigation */\n\n.topnav {\n    position: absolute;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.adjust {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n/* Style the links inside the navigation bar */\n\n.holder  {\n    float: left;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 12px 0px;\n    width: 25%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n/* Add a color to the active/current link */\n\n.active {\n    background-color: #F2C843;\n    color: black;\n}\n\n.collapse {\n    display: none;\n  }\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    padding: 0 0 0 0;\n    transition-property: height, visibility;\n    transition-duration: 0.35s;\n    transition-timing-function: ease;\n  }\n\n.show {\n    display: block !important;\n  }\n\n.barDealsSectionBelow {\n    margin-top: -20px;\n    padding: 0 0 0 0;\n    border-bottom:1px black solid;\n  }\n\n.upcomingTitle {\n    margin-top: 10px;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.upcomingTitleAst  {\n    float: left;\n    color: #f2f2f2;\n    text-align: left;\n    padding: 12px 0px;\n    width: 100%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n.right-pointing-triangle::after {\n  content: \"\\25B6 \\FE0E\";\n}\n\n.currentBarCover {\n    text-align: center; \n    margin-top: 12px;\n    padding: 0 0 3px 0;\n    line-height:80%;\n    font-size:28px;\n}\n\n.currentBarCover span{\n    font-size: 16px;\n}\n\n.reportCoverButton {\n    margin: 10px 0px 10px 0; width:300px; font-size:14px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL2JhcnBhZ2UtY292ZXIvYmFycGFnZS1jb3Zlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSx1REFBdUQ7O0FBQ3ZEO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsOENBQThDOztBQUM5QztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBR0EsMkNBQTJDOztBQUMzQztJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBR2hCLHVDQUF1QztJQUd2QywwQkFBMEI7SUFHMUIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2QkFBNkI7RUFDL0I7O0FBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUlBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCLEVBQUUsV0FBVyxFQUFFLGNBQWM7QUFDeEQiLCJmaWxlIjoiX2NvbXBvbmVudHMvYmFycGFnZS1jb3Zlci9iYXJwYWdlLWNvdmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyUGFnZUxpa2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6OXB4O1xuICAgIHJpZ2h0OjIwcHg7XG4gICAgei1pbmRleDo1O1xuICAgIHdpZHRoOjMzcHg7XG59XG5cbi5iYXJQYWdlTGlrZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xuLnRvcG5hdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLmFkanVzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuICBcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXG4uaG9sZGVyICB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyQzg0MztcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb2xsYXBzZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG5cbiAgLmNvbGxhcHNpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICB9XG5cbiAgLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYmFyRGVhbHNTZWN0aW9uQmVsb3cge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggYmxhY2sgc29saWQ7XG4gIH1cblxuXG4gIC51cGNvbWluZ1RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudXBjb21pbmdUaXRsZUFzdCAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuXG5cbi5yaWdodC1wb2ludGluZy10cmlhbmdsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcMjVCNiBcXEZFMEVcIjtcbn1cblxuLmN1cnJlbnRCYXJDb3ZlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIHBhZGRpbmc6IDAgMCAzcHggMDtcbiAgICBsaW5lLWhlaWdodDo4MCU7XG4gICAgZm9udC1zaXplOjI4cHg7XG59XG5cbi5jdXJyZW50QmFyQ292ZXIgc3BhbntcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5yZXBvcnRDb3ZlckJ1dHRvbiB7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDA7IHdpZHRoOjMwMHB4OyBmb250LXNpemU6MTRweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/_components/barpage-cover/barpage-cover.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/barpage-cover/barpage-cover.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!hidePage\" class=\"loadingHolder\">\n    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n</div>\n\n\n<div [hidden]=\"hidePage\" style=\"padding-top:50px;\">\n    <h3 class=\"currentBarCover\">${{currentEstCover}}\n      <br />\n      <span>Current Reported Cover</span>\n    </h3>\n\n    <div (click)=\"toggleCoverPopUp()\" style=\"text-align: center\">\n      <span style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\" class=\"btn btn--full\">Report Cover</span>\n    </div>\n\n\n\n\n    <h5 style=\"padding: 0 0 0px 0; border-bottom: 1px black solid;\">Projected Cover by Hour</h5>\n    <div style=\"margin: 7px 10px 0 10px;\">\n      <ul class=\"responsive_table\" style=\"width:100%; text-align: center; padding-bottom: 30px;\">\n        <li class=\"table_row\" style=\"background-color: #636158;  color: white;\">\n          <div class=\"table_section_small\">Hour</div>\n          <div class=\"table_section\">Price</div>\n          <div class=\"table_section\">How Packed?</div>\n        </li>\n        <div *ngIf=\"showHourlyEstimates\">\n          <li class=\"table_row\" *ngFor=\"let est of hourlyEstimates\" style=\"background-color:#f5f5f4;\">\n            <div class=\"table_section_small\">{{est.hourString}}</div>\n            <div class=\"table_section\">${{est.cover}}</div>\n            <div class=\"table_section\">{{est.waitString}}</div>\n          </li>\n        </div>\n\n\n      </ul>\n    </div>\n\n\n\n\n  </div>"

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
        console.log('Cover Reported');
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

module.exports = ".barPageLike {\n    position: absolute;\n    top:9px;\n    right:20px;\n    z-index:5;\n    width:33px;\n}\n\n.barPageLike img {\n    width: 100%;\n}\n\n/* Add a black background color to the top navigation */\n\n.topnav {\n    position: absolute;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.adjust {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n/* Style the links inside the navigation bar */\n\n.holder  {\n    float: left;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 12px 0px;\n    width: 25%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n/* Add a color to the active/current link */\n\n.active {\n    background-color: #F2C843;\n    color: black;\n}\n\n.collapse {\n    display: none;\n  }\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    padding: 0 0 0 0;\n    transition-property: height, visibility;\n    transition-duration: 0.35s;\n    transition-timing-function: ease;\n  }\n\n.show {\n    display: block !important;\n  }\n\n.barDealsSectionBelow {\n    margin-top: -20px;\n    padding: 40px 0 0 0;\n    border-bottom:1px black solid;\n  }\n\n.upcomingTitle {\n    margin-top: 10px;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.upcomingTitleAst  {\n    float: left;\n    color: #f2f2f2;\n    text-align: left;\n    padding: 12px 0px;\n    width: 100%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n.right-pointing-triangle::after {\n  content: \"\\25B6 \\FE0E\";\n}\n\n.expandButton{\n  margin: 10px 0 0 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL2JhcnBhZ2UtZGVhbHMvYmFycGFnZS1kZWFscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSx1REFBdUQ7O0FBQ3ZEO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsOENBQThDOztBQUM5QztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBR0EsMkNBQTJDOztBQUMzQztJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBR2hCLHVDQUF1QztJQUd2QywwQkFBMEI7SUFHMUIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7O0FBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUlBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Il9jb21wb25lbnRzL2JhcnBhZ2UtZGVhbHMvYmFycGFnZS1kZWFscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhclBhZ2VMaWtlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjlweDtcbiAgICByaWdodDoyMHB4O1xuICAgIHotaW5kZXg6NTtcbiAgICB3aWR0aDozM3B4O1xufVxuXG4uYmFyUGFnZUxpa2UgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLyogQWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgdG9wIG5hdmlnYXRpb24gKi9cbi50b3BuYXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICByaWdodDogMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbi5hZGp1c3Qge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cbiAgXG4vKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xuLmhvbGRlciAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgICB3aWR0aDogMjUlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cblxuLyogQWRkIGEgY29sb3IgdG8gdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cbi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkM4NDM7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4uY29sbGFwc2Uge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuXG4gIC5jb2xsYXBzaW5nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgfVxuXG4gIC5zaG93IHtcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmJhckRlYWxzU2VjdGlvbkJlbG93IHtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgICBwYWRkaW5nOiA0MHB4IDAgMCAwO1xuICAgIGJvcmRlci1ib3R0b206MXB4IGJsYWNrIHNvbGlkO1xuICB9XG5cblxuICAudXBjb21pbmdUaXRsZSB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMTBweCAxMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICByaWdodDogMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG5cbiAgLnVwY29taW5nVGl0bGVBc3QgIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cblxuXG4ucmlnaHQtcG9pbnRpbmctdHJpYW5nbGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcXDI1QjYgXFxGRTBFXCI7XG59XG5cblxuLmV4cGFuZEJ1dHRvbntcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/_components/barpage-deals/barpage-deals.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/barpage-deals/barpage-deals.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div [hidden]=\"!hidePage\" class=\"loadingHolder\">\n    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n</div>\n\n<div [hidden]=\"hidePage\" style=\"padding-top: 50px;\">\n    <div class=\"barDealsSection\">\n      <h3 style=\"padding: 0 0 0 0;\">\n        <span>Deals & Events - {{dayOfTheWeek}}</span>\n      </h3>\n    </div>\n\n\n\n    <div *ngIf=\"!noDailyDeals\">\n\n\n\n      <!-- Head Daily Deals -->\n      <div id=\"headDeals\" style=\"\">\n        <ul class=\"features_list\" *ngFor=\"let dailyDeal of headDailyDeals\" style=\"padding: 0px 0 0 0; position:relative\">\n          <li>\n            <div style=\"padding-bottom: 10px;\">\n              <span class=\"features_list_span\">\n                <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n              </span>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n\n      <!-- Tail Daily Deals -->\n      <div id=\"demo\" class=\"collapse\">\n        <ul class=\"features_list\" *ngFor=\"let dailyDeal of tailDailyDeals\" style=\"padding: 0 0 0px 0; position: relative;\">\n          <li>\n            <div style=\"padding-bottom: 10px;\">\n              <span class=\"features_list_span\">\n                <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n              </span>\n            </div>\n          </li>\n        </ul>\n      </div>\n\n\n\n\n    </div>\n\n\n    <span  data-toggle=\"collapse\" data-target=\"#demo\" *ngIf=\"!noDailyDeals && tailDailyDeals.length!=0\"\n      (click)=\"handleExpandButtonClick()\" class=\"btn btn--full expandButton\">{{expandDealsButtonText}}</span>\n\n    <h5 *ngIf=\"noDailyDeals\">There are no deals or events for today.</h5>\n\n\n    <div class=\"barDealsSectionBelow\">\n      <h3 style=\"padding: 0 0 0 0;\">\n        <span>Upcoming Deals & Events</span>\n      </h3>\n    </div>\n\n\n\n\n\n    <div *ngFor=\"let upcomingDeal of upcomingDealsHead\">\n      <div class=\"upcomingTitle\" (click)=\"upcomingDeal.expand()\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + upcomingDeal.dayOfTheWeek\">\n        <div class=\"upcomingTitleAst\">\n          <span>\n            <span [innerHtml]=\"upcomingDeal.arrowText\" style=\"padding: 0 8px 0 13px;\"> </span> {{upcomingDeal.dayOfTheWeek}} </span>\n        </div>\n      </div>\n\n      <div [attr.id]=\"upcomingDeal.dayOfTheWeek\" class=\"collapse\">\n        <div id=\"upcomingDeals\" style=\"margin: 0 20px 0 20px;\">\n          <ul class=\"features_list\" *ngFor=\"let dailyDeal of upcomingDeal.deals\" style=\"padding: 0px 0 0 0; position:relative\">\n            <li>\n              <div style=\"padding-bottom: 10px;\">\n                <span class=\"features_list_span\">\n                  <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                  <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n                </span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"upcomingCollapse\" class=\"collapse\">\n      <div *ngFor=\"let upcomingDeal of upcomingDealsTail\">\n        <div class=\"upcomingTitle\" (click)=\"upcomingDeal.expand()\" data-toggle=\"collapse\" [attr.data-target]=\"'#' + upcomingDeal.dayOfTheWeek\">\n          <div class=\"upcomingTitleAst\">\n            <span>\n              <span [innerHtml]=\"upcomingDeal.arrowText\" style=\"padding: 0 8px 0 13px;\"> </span>\n              {{upcomingDeal.dayOfTheWeek}} </span>\n          </div>\n        </div>\n\n        <div [attr.id]=\"upcomingDeal.dayOfTheWeek\" class=\"collapse\">\n          <div id=\"upcomingDeals\" style=\"margin: 0 20px 0 20px;\">\n            <ul class=\"features_list\" *ngFor=\"let dailyDeal of upcomingDeal.deals\" style=\"padding: 0px 0 0 0; position:relative\">\n              <li>\n                <div style=\"padding-bottom: 10px;\">\n                  <span class=\"features_list_span\">\n                    <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                    <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n                  </span>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <span data-toggle=\"collapse\" data-target=\"#upcomingCollapse\" *ngIf=\"upcomingDealsTail.length!=0\"\n      (click)=\"handleUpcomingExpandButtonClick()\" class=\"btn btn--full expandButton\">{{expandUpcomingText}}</span>\n\n\n\n\n  </div>"

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

module.exports = ".fullLoadingPage{\n    position:fixed;\n    padding:0;\n    margin:0;\n    z-index: 150;\n\n    width: 100%;\n    height: 100%;\n    background:white;\n  \n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL2Z1bGwtbG9hZGluZy9mdWxsLWxvYWRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7O0lBRVosV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7O0VBRWxCIiwiZmlsZSI6Il9jb21wb25lbnRzL2Z1bGwtbG9hZGluZy9mdWxsLWxvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsTG9hZGluZ1BhZ2V7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xuICAgIHotaW5kZXg6IDE1MDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xuICBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/_components/full-loading/full-loading.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_components/full-loading/full-loading.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullLoadingPage\">\n    <!-- Page Loader -->\n    <div class=\"centered\" id=\"pageLoader\">\n        <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n    </div>\n</div>\n"

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

module.exports = "<div class=\"navbar navbar--fixed navbar--fixed-top navbar--bg\" style=\"background-color:black;\">\n  <div class=\"navbar__col navbar__col--icon navbar__col--icon-right\" (click)=\"refresh()\">\n    <a  data-panel=\"left\" class=\"open-panel\">\n      <img src=\"./assets/images/icons/white/menu.png\" alt=\"\" title=\"\" />\n    </a>\n  </div>\n  <div class=\"navbar__col navbar__col--title\">\n    <a>\n      <img src=\"./assets/images/TextLogo.png\" width=\"150px\" style=\"padding-top:16px;\">\n    </a>\n  </div>\n  <div class=\"navbar__col navbar__col--icon navbar__col--icon-right\" (click)=\"userClick()\" style=\"padding-right:7px;\">\n    <a data-panel=\"right\" class=\"open-panel\">\n      <img src=\"./assets/images/icons/white/user.png\" alt=\"\" title=\"\" />\n    </a>\n  </div>\n\n</div>"

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

module.exports = "<!-- Main Content of Page       -->\n<div id=\"pages_maincontent\" *ngIf=\"displayPage\">\n  <h2 class=\"page_title\" style=\"text-align: center;\"></h2>\n\n  <div class=\"page_single layout_fullwidth_padding\">\n\n    <!-- For each here -->\n    <ul class=\"shop_items\">\n\n      <!-- BAR CARD -->\n      <li id=\"barCard\" *ngFor=\"let barCard of barCards\" (click)=\"onBarCardClick($event,barCard.barId)\">\n        <div class=\"shop_thumb\">\n          <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\n        </div>\n        <div class=\"shop_item_details\">\n          <h4>{{barCard.barName}}</h4>\n          <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\n              </span>\n            </li>\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\n              </span>\n            </li>\n          </ul>\n          <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\n              <!-- <app-like></app-like> -->\n              <img  id=\"like\"  [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\" alt=\"\" title=\"\" />            \n          </span>\n        </div>\n      </li>\n\n\n    </ul>\n\n    <div class=\"shop_pagination\">\n      <a href=\"\" class=\"prev_shop\">PREV PAGE</a>\n      <span class=\"shop_pagenr\">1/37</span>\n      <a href=\"\" class=\"next_shop\">NEXT PAGE</a>\n      <br />\n      <br />\n      <br />\n      <br />\n    </div>\n\n\n\n  </div>\n\n</div>"

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

module.exports = "<!--       NAVBAR       -->\n<div class=\"swiper-container-toolbar swiper-toolbar\" style=\"background-color:black;\">\n  <div class=\"swiper-pagination-toolbar\"></div>\n  <div class=\"swiper-wrapper\">\n    <div class=\"swiper-slide toolbar-icon\">\n      <span class=\"toolbar-icon-span\" id=\"toolbarHome\"  (click)=\"icon0Click()\">\n        <img src=\"./assets/images/icons/white/categories.png\"alt=\"\" title=\"\" />\n      </span>\n      <span class=\"toolbar-icon-span\" id=\"toolbarSearch\" (click)=\"icon1Click()\">\n        <img src=\"./assets/images/icons/white/search.png\"  alt=\"\" title=\"\" />\n      </span>\n      <span class=\"toolbar-icon-span\">\n        <img src=\"./assets/images/icons/white/love.png\" alt=\"\" title=\"\" />\n      </span>\n      <span class=\"toolbar-icon-span\">\n        <img src=\"./assets/images/icons/white/photos.png\" alt=\"\" title=\"\" />\n      </span>\n      <span class=\"toolbar-icon-span\">\n        <img src=\"./assets/images/icons/white/contact.png\" alt=\"\" title=\"\" />\n      </span>\n    </div>\n  </div>\n</div>"

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

module.exports = "\n.modal-window {\n    position: absolute;\n    background-color: rgba(200, 200, 200, 0.75);\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 999;\n    opacity: 1;\n    pointer-events: auto;\n    transition: all 0.3s;\n  }\n  \n  .modal-window:target {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  \n  .modal-window>div {\n    width: 70%;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    margin: 60% 0 0 7%;\n    padding: 2rem;\n    background: #fff;\n    color: #444;\n  }\n  \n  .modal-window header {\n    font-weight: bold;\n  }\n  \n  .modal-close {\n    color: #aaa;\n    line-height: 50px;\n    font-size: 30px;\n    margin-left: 10px;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    top: 0;\n    width: 70px;\n    text-decoration: none;\n  }\n  \n  .modal-close:hover {\n    color: #000;\n  }\n  \n  .modal-window h2 {\n    font-size: 150%;\n    margin: 0 0 15px;\n    padding: 0 0 0 0;\n  }\n  \n  .coverHeading {\n    font-size: 40px;\n    font-weight: bold;\n    margin: 0 0 15px;\n    padding: 0 15px 0 15px;\n  }\n  \n  .minus{\n    position: relative;\n    width: 10%;\n  }\n  \n  .plus{\n  position: relative;\n  width: 10%;\n  }\n  \n  .checkmarkHolder {\n  width: 100px;\n  margin: 0 auto;\n  padding-top: 0px;\n  }\n  \n  .circle-loader {\n    margin-bottom: 0;\n    border: 3px solid rgba(0, 0, 0, 0.2);\n    border-left-color: #F2C843;\n    -webkit-animation: loader-spin 1.2s infinite linear;\n            animation: loader-spin 1.2s infinite linear;\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 50%;\n    width: 7em;\n    height: 7em;\n  }\n  \n  .load-complete {\n    -webkit-animation: none;\n    animation: none;\n    border-color: #F2C843;\n    transition: border 500ms ease-out;\n  }\n  \n  .checkmarkHidden {\n    display: none;\n  }\n  \n  .checkmark{\n    display:auto;\n  }\n  \n  .checkmark.draw:after {\n    -webkit-animation-duration: 800ms;\n            animation-duration: 800ms;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-name: checkmark;\n            animation-name: checkmark;\n    -webkit-transform: scaleX(-1) rotate(135deg);\n            transform: scaleX(-1) rotate(135deg);\n  }\n  \n  .checkmark:after {\n    opacity: 1;\n    height: 3.5em;\n    width: 1.75em;\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    border-right: 4px solid #F2C843;\n    border-top: 4px solid #F2C843;\n    content: '';\n    left: 1.75em;\n    top: 3.5em;\n    position: absolute;\n  }\n  \n  @-webkit-keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n  \n  @keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n  \n  @-webkit-keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n  \n  @keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1AsWUFBWTtJQUNaLFVBQVU7SUFDVixvQkFBb0I7SUFHcEIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsVUFBVTtJQUNWLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0VBQ2xCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtFQUNBLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Y7O0VBRUE7RUFDQSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQjs7RUFHQTtJQUNFLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLG1EQUEyQztZQUEzQywyQ0FBMkM7SUFDM0Msa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0VBQ2I7O0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQ0FBaUM7RUFDbkM7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7O0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0VBQ3RDOztFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7RUFJQTtJQUNFO1FBQ0ksK0JBQXVCO2dCQUF2Qix1QkFBdUI7R0FDNUI7SUFDQztRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO0dBQzlCO0VBQ0Q7O0VBUEE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOztFQUNBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7R0FDZjtJQUNDO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtFQUNEOztFQXJCQTtJQUNFO1FBQ0ksU0FBUztRQUNULFFBQVE7UUFDUixVQUFVO0dBQ2Y7SUFDQztRQUNJLFNBQVM7UUFDVCxhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7RUFDRCIsImZpbGUiOiJfY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubW9kYWwtd2luZG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjc1KTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gIFxuICAubW9kYWwtd2luZG93OnRhcmdldCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICBcbiAgLm1vZGFsLXdpbmRvdz5kaXYge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA2MCUgMCAwIDclO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuICBcbiAgLm1vZGFsLXdpbmRvdyBoZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAubW9kYWwtY2xvc2Uge1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5tb2RhbC1jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5tb2RhbC13aW5kb3cgaDIge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gIH1cbiAgLmNvdmVySGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcbiAgfVxuICBcbiAgLm1pbnVze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAlO1xuICB9XG4gIFxuICAucGx1c3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAlO1xuICB9XG4gIFxuICAuY2hlY2ttYXJrSG9sZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuICBcbiAgXG4gIC5jaXJjbGUtbG9hZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI0YyQzg0MztcbiAgICBhbmltYXRpb246IGxvYWRlci1zcGluIDEuMnMgaW5maW5pdGUgbGluZWFyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDdlbTtcbiAgICBoZWlnaHQ6IDdlbTtcbiAgfVxuICAubG9hZC1jb21wbGV0ZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogI0YyQzg0MztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgNTAwbXMgZWFzZS1vdXQ7XG4gIH1cbiAgLmNoZWNrbWFya0hpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2hlY2ttYXJre1xuICAgIGRpc3BsYXk6YXV0bztcbiAgfVxuICAuY2hlY2ttYXJrLmRyYXc6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICBhbmltYXRpb24tbmFtZTogY2hlY2ttYXJrO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTM1ZGVnKTtcbiAgfVxuICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgd2lkdGg6IDEuNzVlbTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjRjJDODQzO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjRjJDODQzO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDEuNzVlbTtcbiAgICB0b3A6IDMuNWVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICBcbiAgXG4gIFxuICBAa2V5ZnJhbWVzIGxvYWRlci1zcGluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcbiAgICAwJSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gICAgMjAlIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMS43NWVtO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgfVxuICAgIDQwJSB7XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/_components/popup/popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/popup/popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCoverPopUp\" style=\"text-align: center;\">\n    <div id=\"open-modal\" class=\"modal-window\">\n      <div *ngIf=\"!coverSubmissionLoader\">\n        <a (click)=\"showCoverPopUp = false\" title=\"Close\" class=\"modal-close\">&times;</a>\n        <h2>Report Cover</h2>\n        <div style=\"margin: 0 7px 0 0px;\">\n          <img (click)=\"decrementReportCover()\" class=\"minus\" src=\"./assets/images/minus.png\">\n          <span class=\"coverHeading\">${{reportCoverValue}}</span>\n          <img (click)=\"incrementReportCover()\" class=\"plus\" src=\"./assets/images/plus.png\">\n        </div>\n\n        <div (click)=\"reportCover()\" style=\"text-align: center\">\n          <span style=\"margin: 7px 0px 0px 0; width:200px; font-size:14px;\" class=\"btn btn--full\">Submit</span>\n        </div>\n\n      </div>\n      <div *ngIf=\"coverSubmissionLoader\">\n        <div style=\"width:100%;\">\n          <div class=\"checkmarkHolder\">\n            <!-- <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" x=\"0px\"\n                      y=\"0px\" viewBox=\"0, 0, 100, 100\" id=\"checkmark\">\n                      <g transform=\"\">\n                        <circle id=\"path\" class=\"path\" fill=\"none\" stroke=\"#F2C843\" stroke-width=\"4\" stroke-miterlimit=\"10\" cx=\"50\" cy=\"50\" r=\"44\" />\n                        <circle id=\"fill\" class=\"fill\" fill=\"none\" stroke=\"#F2C843\" stroke-width=\"4\" stroke-miterlimit=\"10\" cx=\"50\" cy=\"50\" r=\"44\" />\n                        <polyline id=\"check\" class=\"check\" fill=\"none\" stroke=\"#F2C843\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" points=\"70,35 45,65 30,52  \"\n                        />\n                      </g>\n                    </svg> -->\n\n            <div id=\"circleLoader\" class=\"circle-loader\">\n              <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

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

module.exports = ".out{\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n    transition: -webkit-transform 150ms linear;\n    transition: transform 150ms linear;\n    transition: transform 150ms linear, -webkit-transform 150ms linear;\n    will-change: transform;\n}\n.in{\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    transition: -webkit-transform 150ms linear;\n    transition: transform 150ms linear;\n    transition: transform 150ms linear, -webkit-transform 150ms linear;\n}\n.hidden{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb21wb25lbnRzL3VzZXItc2xpZGUvdXNlci1zbGlkZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0lBQ2pDLHlCQUF5QjtJQUN6QiwwQ0FBa0M7SUFBbEMsa0NBQWtDO0lBQWxDLGtFQUFrQztJQUNsQyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsMENBQWtDO0lBQWxDLGtDQUFrQztJQUFsQyxrRUFBa0M7QUFDdEM7QUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoiX2NvbXBvbmVudHMvdXNlci1zbGlkZS91c2VyLXNsaWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0e1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBsaW5lYXI7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cbi5pbntcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgbGluZWFyO1xufVxuXG4uaGlkZGVue1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/_components/user-slide/user-slide.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/user-slide/user-slide.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"userSlide\" class=\"panel panel-right panel-reveal out\" >\n  <div class=\"user_login_info\">\n\n    <div class=\"user_thumb\">\n\n      <div class=\"user_details\">\n        <p>Welcome, <span>{{authService.currentUser.firstName}}</span></p>\n      </div>\n      <div class=\"user_avatar\"><img src=\"./assets/images/avatar3.jpg\" alt=\"\" title=\"\" /></div>\n    </div>\n\n    <nav class=\"user-nav\">\n      <ul>\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/settings.png\" alt=\"\" title=\"\" /><span>Account\n              Settings</span></a></li>\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/briefcase.png\" alt=\"\" title=\"\" /><span>My\n              Account</span></a></li>\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/message.png\" alt=\"\"\n              title=\"\" /><span>Messages</span><strong>12</strong></a></li>\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/love.png\" alt=\"\"\n              title=\"\" /><span>Favorites</span><strong>5</strong></a></li>\n        <li><a (click)=\"logout()\"><img src=\"./assets/images/icons/gray/lock.png\" alt=\"\" title=\"\" /><span>Logout</span></a></li>\n      </ul>\n    </nav>\n  </div>\n</div>\n"

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
        // this.mainService.changeUserSlide();
        // this.router.navigateByUrl('/login');
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

module.exports = "<!-- SlideInPage -->\n<app-bar-page *ngIf=\"showBarPage\" [barPageIdChange]=\"barPageId\" [slideInBar]=\"barSlide\">\n</app-bar-page>\n\n\n\n<app-main-scroll *ngIf=\"true\" (barCardClick)=\"activateBarSlide($event)\"></app-main-scroll>"

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

/***/ "./src/app/_pages/friend-page/friend-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/_pages/friend-page/friend-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJfcGFnZXMvZnJpZW5kLXBhZ2UvZnJpZW5kLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_pages/friend-page/friend-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/_pages/friend-page/friend-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_pages/friend-page/friend-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/_pages/friend-page/friend-page.component.ts ***!
  \*************************************************************/
/*! exports provided: FriendPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendPageComponent", function() { return FriendPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FriendPageComponent = /** @class */ (function () {
    function FriendPageComponent() {
    }
    FriendPageComponent.prototype.ngOnInit = function () {
    };
    FriendPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-friend-page',
            template: __webpack_require__(/*! ./friend-page.component.html */ "./src/app/_pages/friend-page/friend-page.component.html"),
            styles: [__webpack_require__(/*! ./friend-page.component.css */ "./src/app/_pages/friend-page/friend-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FriendPageComponent);
    return FriendPageComponent;
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
            if (result == null) {
                console.log("INIT RUNNING");
                _this.router.navigate(['/login']);
            }
            else {
                _this.authService.setUser(new _models_User_Model__WEBPACK_IMPORTED_MODULE_4__["User"](result));
                //When user is set run this
                _this.authService.authStateSet.subscribe(function (value) {
                    if (value == true && _this.authService.subUser == false) {
                        console.log("INIT RUNNING");
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

module.exports = "\n.center-screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-height: 100vh;\n  }\n\n\n\n.circle-loader {\n    margin-bottom: 0;\n    border: 3px solid rgba(0, 0, 0, 0.2);\n    border-left-color: #F2C843;\n    -webkit-animation: loader-spin 1.2s infinite linear;\n            animation: loader-spin 1.2s infinite linear;\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 50%;\n    width: 7em;\n    height: 7em;\n  }\n\n\n\n.load-complete {\n    -webkit-animation: none;\n    animation: none;\n    border-color: #F2C843;\n    transition: border 500ms ease-out;\n  }\n\n\n\n.checkmarkHidden {\n    display: none;\n  }\n\n\n\n.checkmark{\n    display:auto;\n  }\n\n\n\n.checkmark.draw:after {\n    -webkit-animation-duration: 800ms;\n            animation-duration: 800ms;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-name: checkmark;\n            animation-name: checkmark;\n    -webkit-transform: scaleX(-1) rotate(135deg);\n            transform: scaleX(-1) rotate(135deg);\n  }\n\n\n\n.checkmark:after {\n    opacity: 1;\n    height: 3.5em;\n    width: 1.75em;\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    border-right: 4px solid #F2C843;\n    border-top: 4px solid #F2C843;\n    content: '';\n    left: 1.75em;\n    top: 3.5em;\n    position: absolute;\n  }\n\n\n\n@-webkit-keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n\n\n\n@keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n\n\n\n@-webkit-keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n\n\n\n@keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n\n\n\n.collapse {\n    display: none;\n  }\n\n\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    padding: 0 0 0 0;\n    transition-property: height, visibility;\n    transition-duration: 0.35s;\n    transition-timing-function: ease;\n  }\n\n\n\n.show {\n    display: block !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COzs7O0FBSUY7SUFDSSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiOzs7O0FBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixpQ0FBaUM7RUFDbkM7Ozs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7OztBQUNBO0lBQ0UsWUFBWTtFQUNkOzs7O0FBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0IsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qiw0Q0FBb0M7WUFBcEMsb0NBQW9DO0VBQ3RDOzs7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOzs7O0FBSUE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOzs7O0FBUEE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOzs7O0FBQ0E7SUFDRTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0VBQ0Q7Ozs7QUFyQkE7SUFDRTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0VBQ0Q7Ozs7QUFHQTtJQUNFLGFBQWE7RUFDZjs7OztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBR2hCLHVDQUF1QztJQUd2QywwQkFBMEI7SUFHMUIsZ0NBQWdDO0VBQ2xDOzs7O0FBRUE7SUFDRSx5QkFBeUI7RUFDM0IiLCJmaWxlIjoiX3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jZW50ZXItc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuXG5cbi5jaXJjbGUtbG9hZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI0YyQzg0MztcbiAgICBhbmltYXRpb246IGxvYWRlci1zcGluIDEuMnMgaW5maW5pdGUgbGluZWFyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDdlbTtcbiAgICBoZWlnaHQ6IDdlbTtcbiAgfVxuICAubG9hZC1jb21wbGV0ZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogI0YyQzg0MztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgNTAwbXMgZWFzZS1vdXQ7XG4gIH1cbiAgLmNoZWNrbWFya0hpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2hlY2ttYXJre1xuICAgIGRpc3BsYXk6YXV0bztcbiAgfVxuICAuY2hlY2ttYXJrLmRyYXc6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICBhbmltYXRpb24tbmFtZTogY2hlY2ttYXJrO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTM1ZGVnKTtcbiAgfVxuICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgd2lkdGg6IDEuNzVlbTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjRjJDODQzO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjRjJDODQzO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDEuNzVlbTtcbiAgICB0b3A6IDMuNWVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICBcbiAgXG4gIFxuICBAa2V5ZnJhbWVzIGxvYWRlci1zcGluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcbiAgICAwJSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gICAgMjAlIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMS43NWVtO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgfVxuICAgIDQwJSB7XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gIH1cblxuXG4gIC5jb2xsYXBzZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG5cbiAgLmNvbGxhcHNpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICB9XG5cbiAgLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/_pages/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/_pages/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"mobile_wrap\">\n\n  <div class=\"navbar navbar--fixed navbar--fixed-top navbar--bg\" style=\"background-color:black; z-index: 1001;\">\n    <div class=\"navbar__col navbar__col--title\">\n      <a href=\"index.html\">\n        <img src=\"./assets/images/TextLogo.png\" width=\"150px\" style=\"padding-top:16px; padding-left: 35px;\">\n      </a>\n    </div>\n\n  </div>\n\n  <div [hidden]=\"isLoading\">\n    <!-- Login Popup -->\n    <div class=\"popup popup-login\" style=\"z-index: 1000;\">\n      <div class=\"content-block\">\n        <div class=\"close_popup_button\">\n          <!-- <a href=\"#\" class=\"close-popup\" data-popup=\".popup-login\">\n          <img src=\"./assets/images/icons/black/menu_close.png\" alt=\"\" title=\"\" />\n        </a> -->\n        </div>\n        <div class=\"loginblock\" style=\"top: 23%;\">\n\n          <div class=\"collapse show\" id=\"login\">\n            <h4 style=\"font-weight: bold; font-size: 30px;\">LOGIN</h4>\n            <div class=\"loginform\">\n              <input type=\"text\" [(ngModel)]=\"logInUsername\" name=\"Username\" class=\"form_input required\"\n                placeholder=\"Email\" />\n              <input type=\"password\" [(ngModel)]=\"logInPassword\" name=\"Password\" class=\"form_input required\"\n                placeholder=\"Password\" />\n              <div class=\"forgot_pass\">\n                <a href=\"#\" data-popup=\".popup-forgot\" class=\"open-popup\" style=\"color: #012e77;\">Forgot Password?</a>\n              </div>\n              <input (click)=\"logIn()\" readonly=\"readonly\" class=\"form_submit\"  value=\"SIGN IN\" />\n\n              <div class=\"signup_bottom\">\n                <p>Don't have an account?</p>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"collapse\" id=\"signup\">\n            <h4 style=\"font-weight: bold; font-size: 30px;\">SIGN UP</h4>\n            <div class=\"loginform\">\n              <input type=\"text\" [(ngModel)]=\"createFirstName\" class=\"form_input required\"\n                placeholder=\"First Name\" />\n              <input type=\"text\" [(ngModel)]=\"createLastName\" class=\"form_input required\"\n              placeholder=\"Last Name (Optional)\" />\n              <input type=\"text\" [(ngModel)]=\"createUsername\"  class=\"form_input required\"\n                placeholder=\"Username\" />\n              <input type=\"text\" [(ngModel)]=\"createEmail\" name=\"Username\" class=\"form_input required\"\n                placeholder=\"Email\" />\n              <input type=\"password\" [(ngModel)]=\"createPassword\"  class=\"form_input required\"\n                placeholder=\"Password\" />\n              <input type=\"password\" [(ngModel)]=\"createPassword2\"  class=\"form_input required\"\n              placeholder=\"Repeat Password\" (focusout)=\"comparePasswords()\"/>\n\n              <p style=\"text-align: left; color:red;\" *ngIf=\"passwordsDoNotMatch\">Passwords do not match.</p>\n              \n              <input (click)=\"register()\" readonly=\"readonly\" class=\"form_submit\"  value=\"REGISTER\" />\n              <div class=\"signup_bottom\">\n                  <p>Have an account?</p>\n                </div>\n\n            </div>\n          </div>\n\n\n\n          <div class=\"signup_bottom\" style=\"padding:0px; margin-top: -15px;\">\n            <a data-popup=\".popup-signup\" class=\"open-popup\"\n              (click)=\"goToSignUp()\" style=\"background-color: transparent; color:black; border: 1px black solid;\">{{switchPageText}}</a>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n\n\n\n  <!--Loading-->\n  <div [hidden]=\"!isLoading\" class=\"center-screen\">\n    <div id=\"circleLoader\" class=\"circle-loader\">\n      <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\n    </div>\n  </div>\n\n\n\n</body>"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.logInUsername = 'test@test.com';
        this.logInPassword = '124577';
        this.createFirstName = "";
        this.createLastName = "";
        this.createUsername = "";
        this.takenUsername = false;
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
        if (this.createUsername == "")
            return;
        if (this.createEmail == "")
            return;
        if (this.createPassword == "")
            return;
        if (this.comparePasswords() == true)
            return;
        this.authService.subUser = true;
        console.log('Register');
        this.isLoading = true;
        //Check unique username
        if (this.createUsername.charAt(0) != '@')
            this.createUsername = '@' + this.createUsername;
        this.authService.checkUniqueUser(this.createUsername).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (result) {
            if (result.length > 0) {
                _this.takenUsername = true;
                _this.isLoading = false;
                return;
            }
            else {
                _this.createUser();
            }
        });
    };
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        this.authService.createUser(this.createEmail, this.createPassword).then(function (success) {
            //Need to upload user info
            var user = new _models_User_Model__WEBPACK_IMPORTED_MODULE_2__["User"](_this.authService.af.auth.currentUser);
            var firstName = _this.createFirstName;
            firstName = firstName.toLowerCase();
            firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
            var lastName = _this.createLastName;
            lastName = lastName.toLowerCase();
            lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
            user.firstName = firstName;
            user.lastName = lastName;
            user.userName = _this.createUsername;
            _this.authService.createUserInfo(user).then(function (_) {
                _this.authService.setUser(user);
                //Once User Is Set
                _this.authService.authStateSet.subscribe(function (value) {
                    if (value == true) {
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

module.exports = ".barSlideIn{\n  background: white;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n\n.block_clicks{\n  pointer-events: none;\n  touch-action: none;\n}\n\n.out{\n  -webkit-transform: translateX(0%);\n  transform: translateX(0%);\n  transition: -webkit-transform 150ms linear;\n  transition: transform 150ms linear;\n  transition: transform 150ms linear, -webkit-transform 150ms linear;\n  will-change: transform;\n}\n\n.in{\n  -webkit-transform: translateX(-80%);\n  transform: translateX(-80%);\n  transition: -webkit-transform 150ms linear;\n  transition: transform 150ms linear;\n  transition: transform 150ms linear, -webkit-transform 150ms linear;\n}\n\n.pageClick{\n  position:absolute;\n  top:0;\n  left:0;\n  width: 15%;\n  height:100%;\n  z-index:15000;\n}\n\n.user_slide_hidden{\n  display: none;\n}\n\n.centered {\n    position: fixed;\n    top: 40%;\n    left: 50%;\n    /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n.slideCentered {\n    position: fixed;\n    top: 50%;\n    left: 150%;\n    /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n.slideCentered-hidden {\n    display:none;\n    position: fixed;\n    top: 50%;\n    left: 150%;\n    /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n.centered-hidden {\n    display:none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n.lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n  }\n\n.lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 51px;\n    height: 51px;\n    margin: 6px;\n    border: 6px solid #eec536;\n    border-radius: 50%;\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #eec536 transparent transparent transparent;\n  }\n\n.lds-ring div:nth-child(1) {\n    -webkit-animation-delay: -0.45s;\n            animation-delay: -0.45s;\n  }\n\n.lds-ring div:nth-child(2) {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s;\n  }\n\n.lds-ring div:nth-child(3) {\n    -webkit-animation-delay: -0.15s;\n            animation-delay: -0.15s;\n  }\n\n@-webkit-keyframes lds-ring {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n\n@keyframes lds-ring {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n\n.slideInPage{\n    position:fixed;\n    padding:0;\n    margin:0;\n    z-index: 100;\n    top:50px;\n\n    -webkit-transform: translateX(100%);\n\n            transform: translateX(100%);\n\n  \n    width: 100%;\n    height: 100%;\n    background:white;\n  \n  }\n\n.picture-swipe-container {\n    width: 100%;\n    height: 100%;\n  }\n\n.picture-swipe-slide {\n    text-align: center;\n    font-size: 18px;\n    background: #fff;\n    /* Center slide text vertically */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n.barDealsSection {\n    padding: 10px 0 0 0;\n    border-bottom:1px black solid;\n  }\n\n.preventScroll{\n  overflow: auto;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wYWdlcy9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixrQ0FBMEI7VUFBMUIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyx5QkFBeUI7RUFDekIsMENBQWtDO0VBQWxDLGtDQUFrQztFQUFsQyxrRUFBa0M7RUFDbEMsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsbUNBQW1DO0VBQ25DLDJCQUEyQjtFQUMzQiwwQ0FBa0M7RUFBbEMsa0NBQWtDO0VBQWxDLGtFQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixLQUFLO0VBQ0wsTUFBTTtFQUNOLFVBQVU7RUFDVixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUdFO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsd0NBQWdDO1lBQWhDLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFVBQVU7SUFDViw0QkFBNEI7SUFDNUIsd0NBQWdDO1lBQWhDLGdDQUFnQztFQUNsQzs7QUFHQTtJQUNFLFlBQVk7SUFDWixlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsd0NBQWdDO1lBQWhDLGdDQUFnQztFQUNsQzs7QUFHQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFDQTtJQUNFLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsc0VBQThEO1lBQTlELDhEQUE4RDtJQUM5RCx5REFBeUQ7RUFDM0Q7O0FBQ0E7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztBQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4Qjs7QUFDQTtJQUNFLCtCQUF1QjtZQUF2Qix1QkFBdUI7RUFDekI7O0FBQ0E7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRjs7QUFQQTtJQUNFO01BQ0UsK0JBQXVCO2NBQXZCLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQXlCO2NBQXpCLHlCQUF5QjtJQUMzQjtFQUNGOztBQUVBO0lBQ0UsY0FBYztJQUNkLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLFFBQVE7O0lBRVIsbUNBQTJCOztZQUEzQiwyQkFBMkI7OztJQUczQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjs7RUFFbEI7O0FBR0E7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkOztBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBSWpDLGFBQWE7SUFJYix1QkFBdUI7SUFJdkIsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDZCQUE2QjtFQUMvQjs7QUFHRjtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoiX3BhZ2VzL21haW4vbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhclNsaWRlSW57XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbn1cblxuLmJsb2NrX2NsaWNrc3tcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbn1cblxuLm91dHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgbGluZWFyO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuLmlue1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAlKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MCUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTUwbXMgbGluZWFyO1xufVxuXG4ucGFnZUNsaWNre1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcbiAgd2lkdGg6IDE1JTtcbiAgaGVpZ2h0OjEwMCU7XG4gIHotaW5kZXg6MTUwMDA7XG59XG5cbi51c2VyX3NsaWRlX2hpZGRlbntcbiAgZGlzcGxheTogbm9uZTtcbn1cbiAgXG4gIFxuICAuY2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLnNsaWRlQ2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAxNTAlO1xuICAgIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIC5zbGlkZUNlbnRlcmVkLWhpZGRlbiB7XG4gICAgZGlzcGxheTpub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAxNTAlO1xuICAgIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIFxuICAuY2VudGVyZWQtaGlkZGVuIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIFxuICBcbiAgLmxkcy1yaW5nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgfVxuICAubGRzLXJpbmcgZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTFweDtcbiAgICBoZWlnaHQ6IDUxcHg7XG4gICAgbWFyZ2luOiA2cHg7XG4gICAgYm9yZGVyOiA2cHggc29saWQgI2VlYzUzNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBsZHMtcmluZyAxLjJzIGN1YmljLWJlemllcigwLjUsIDAsIDAuNSwgMSkgaW5maW5pdGU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZWVjNTM2IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICB9XG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDEpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjQ1cztcbiAgfVxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcbiAgfVxuICAubGRzLXJpbmcgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xNXM7XG4gIH1cbiAgQGtleWZyYW1lcyBsZHMtcmluZyB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zbGlkZUluUGFnZXtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICBwYWRkaW5nOjA7XG4gICAgbWFyZ2luOjA7XG4gICAgei1pbmRleDogMTAwO1xuICAgIHRvcDo1MHB4O1xuXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuXG4gIFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xuICBcbiAgfVxuICBcbiAgXG4gIC5waWN0dXJlLXN3aXBlLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIC5waWN0dXJlLXN3aXBlLXNsaWRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLyogQ2VudGVyIHNsaWRlIHRleHQgdmVydGljYWxseSAqL1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5iYXJEZWFsc1NlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggYmxhY2sgc29saWQ7XG4gIH1cblxuXG4ucHJldmVudFNjcm9sbHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/_pages/main/main.component.html":
/*!*************************************************!*\
  !*** ./src/app/_pages/main/main.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"views\">\n\n  <div class=\"view view-main\">\n    <div class=\"pages\">\n      <div data-page=\"shop\" class=\"page\">\n        <div class=\"page-content\" id=\"mainPage\">\n\n\n          <div style=\"-webkit-overflow-scrolling:touch;\">\n              <app-popup></app-popup>\n          </div>\n\n\n          <div class=\"user_slide\" style=\"-webkit-overflow-scrolling:touch;\">\n            <app-user-slide></app-user-slide>\n          </div>\n\n\n          <div class=\"main_content\">\n            <div *ngIf=\"userSlide\" class=\"pageClick\" (click)=\"pageClick()\"></div>\n            <div id=\"headerAndRouter\">\n              <app-header></app-header>\n              <div id=\"routerHolder\">\n                <router-outlet></router-outlet>\n              </div>\n            </div>\n            <app-navbar></app-navbar>\n          </div>\n\n\n\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
                console.log(_this.mainService.barlistUrl);
                _this.router.navigate([_this.mainService.barlistUrl]);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.component */ "./src/app/_pages/main/main.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_components/navbar/navbar.component */ "./src/app/_components/navbar/navbar.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_components/header/header.component */ "./src/app/_components/header/header.component.ts");
/* harmony import */ var _components_main_scroll_main_scroll_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_components/main-scroll/main-scroll.component */ "./src/app/_components/main-scroll/main-scroll.component.ts");
/* harmony import */ var _components_bar_page_bar_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_components/bar-page/bar-page.component */ "./src/app/_components/bar-page/bar-page.component.ts");
/* harmony import */ var _components_full_loading_full_loading_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_components/full-loading/full-loading.component */ "./src/app/_components/full-loading/full-loading.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_pages/barlist/barlist.component */ "./src/app/_pages/barlist/barlist.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_pages/search/search.component */ "./src/app/_pages/search/search.component.ts");
/* harmony import */ var _components_user_slide_user_slide_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_components/user-slide/user-slide.component */ "./src/app/_components/user-slide/user-slide.component.ts");
/* harmony import */ var _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../_components/barpage-deals/barpage-deals.component */ "./src/app/_components/barpage-deals/barpage-deals.component.ts");
/* harmony import */ var _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../_components/barpage-cover/barpage-cover.component */ "./src/app/_components/barpage-cover/barpage-cover.component.ts");
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../_components/popup/popup.component */ "./src/app/_components/popup/popup.component.ts");




//Import Components













var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_main_scroll_main_scroll_component__WEBPACK_IMPORTED_MODULE_7__["MainScrollComponent"],
                _components_bar_page_bar_page_component__WEBPACK_IMPORTED_MODULE_8__["BarPageComponent"],
                _components_full_loading_full_loading_component__WEBPACK_IMPORTED_MODULE_9__["FullLoadingComponent"],
                _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_11__["BarlistComponent"],
                _pages_search_search_component__WEBPACK_IMPORTED_MODULE_12__["SearchComponent"],
                _components_user_slide_user_slide_component__WEBPACK_IMPORTED_MODULE_13__["UserSlideComponent"],
                _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_14__["BarpageDealsComponent"],
                _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_15__["BarpageCoverComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_16__["PopupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"]
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

module.exports = "input[type=text].instaSearch {\n    font-family: proxima-nove, 'Helvetica Neue', Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    font-weight: 300;\n    letter-spacing: .5px;\n    height: 30px;\n    border-radius: 15px;\n    text-align: left;\n    padding-left: 40%;\n    border: 1px solid #edeeee;\n    background: #fafafa;\n    background-image: url('glass.png');\n    background-repeat: no-repeat;\n    background-size: 13px 13px;\n    background-position: 38% 47%;\n    outline: none;\n    width: 55%;\n    margin-top: 10px;\n    margin-bottom: 15px;\n    color: #c9cbcc;\n}\ninput[type=text]:focus.instaSearch {\n    text-align: left;\n    padding-left: 30px;\n    width:88%;\n    background: #ffffff;\n    background-image: url('glass.png');\n    background-repeat: no-repeat;\n    background-size: 13px 13px;\n    background-position: 15px 7px;\n    color: #000;\n}\ninput:focus::-webkit-input-placeholder {\n     color: #c9cbcc;\n}\ninput:focus::-moz-placeholder {\n     color: #c9cbcc;\n}\ninput:focus::-moz-placeholder {   /* Older versions of Firefox */\n     color: #c9cbcc;\n}\ninput:focus::-ms-input-placeholder { \n     color: #c9cbcc;\n}\n.searchWrap{\n    padding-top: 20%;\n    padding-left: 4%;\n}\n/* Add a black background color to the top navigation */\n.topnav {\n    margin-top: 50px;\n    position: absolute;\n    width: 100%;\n    right: 0%;\n    background-color: transparent;\n    overflow: hidden;\n  }\n.adjust {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n/* Style the links inside the navigation bar */\n.holder  {\n    float: left;\n    color: black;\n    text-align: center;\n    padding: 3px 0px;\n    width: 50%;\n    text-decoration: none;\n    font-size: 17px;\n}\n/* Add a color to the active/current link */\n.active {\n    background-color: transparent;\n    color: black;\n    border-bottom: 2px black solid;\n}\n.barHolder{\n    position: absolute;\n    width:100%;\n    -webkit-transform: translateX(0%);\n\t\t\ttransform: translateX(0%);\n\ttransition: -webkit-transform 300ms linear;\n\ttransition: transform 300ms linear;\n\ttransition: transform 300ms linear, -webkit-transform 300ms linear;\n\twill-change: transform;\n\n}\n.bHHidden{\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    transition: -webkit-transform 300ms linear;\n    transition: transform 300ms linear;\n    transition: transform 300ms linear, -webkit-transform 300ms linear;\n    will-change: transform;\n}\n.userHolder{\n    position: absolute;\n    width:100%;\n    -webkit-transform: translateX(100%);\n\t\t\ttransform: translateX(100%);\n\ttransition: -webkit-transform 300ms linear;\n\ttransition: transform 300ms linear;\n\ttransition: transform 300ms linear, -webkit-transform 300ms linear;\n\twill-change: transform;\n}\n.uHOpen{\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n    transition: -webkit-transform 300ms linear;\n    transition: transform 300ms linear;\n    transition: transform 300ms linear, -webkit-transform 300ms linear;\n    will-change: transform;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5RUFBeUU7SUFDekUsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsa0NBQXlEO0lBQ3pELDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsa0NBQXlEO0lBQ3pELDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjtBQUVBO0tBQ0ssY0FBYztBQUNuQjtBQUNBO0tBQ0ssY0FBYztBQUNuQjtBQUNBLGtDQUFrQyw4QkFBOEI7S0FDM0QsY0FBYztBQUNuQjtBQUNBO0tBQ0ssY0FBYztBQUNuQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUVBLHVEQUF1RDtBQUN2RDtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCw2QkFBNkI7SUFDN0IsZ0JBQWdCO0VBQ2xCO0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjtBQUdBLDJDQUEyQztBQUMzQztJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osOEJBQThCO0FBQ2xDO0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGlDQUFpQztHQUNsQyx5QkFBeUI7Q0FDM0IsMENBQWtDO0NBQWxDLGtDQUFrQztDQUFsQyxrRUFBa0M7Q0FDbEMsc0JBQXNCOztBQUV2QjtBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDRCQUE0QjtJQUM1QiwwQ0FBa0M7SUFBbEMsa0NBQWtDO0lBQWxDLGtFQUFrQztJQUNsQyxzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUNBQW1DO0dBQ3BDLDJCQUEyQjtDQUM3QiwwQ0FBa0M7Q0FBbEMsa0NBQWtDO0NBQWxDLGtFQUFrQztDQUNsQyxzQkFBc0I7QUFDdkI7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsMENBQWtDO0lBQWxDLGtDQUFrQztJQUFsQyxrRUFBa0M7SUFDbEMsc0JBQXNCO0FBQzFCIiwiZmlsZSI6Il9wYWdlcy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPXRleHRdLmluc3RhU2VhcmNoIHtcbiAgICBmb250LWZhbWlseTogcHJveGltYS1ub3ZlLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGxldHRlci1zcGFjaW5nOiAuNXB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkZWVlZTtcbiAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nbGFzcy5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTNweCAxM3B4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDM4JSA0NyU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aWR0aDogNTUlO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBjb2xvcjogI2M5Y2JjYztcbn1cbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMuaW5zdGFTZWFyY2gge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIHdpZHRoOjg4JTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2xhc3MucG5nXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxM3B4IDEzcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCA3cHg7XG4gICAgY29sb3I6ICMwMDA7XG59XG4gXG5pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgIGNvbG9yOiAjYzljYmNjO1xufVxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICBjb2xvcjogI2M5Y2JjYztcbn1cbmlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHsgICAvKiBPbGRlciB2ZXJzaW9ucyBvZiBGaXJlZm94ICovXG4gICAgIGNvbG9yOiAjYzljYmNjO1xufVxuaW5wdXQ6Zm9jdXM6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IFxuICAgICBjb2xvcjogI2M5Y2JjYztcbn1cblxuLnNlYXJjaFdyYXB7XG4gICAgcGFkZGluZy10b3A6IDIwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQlO1xufVxuXG4vKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xuLnRvcG5hdiB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLmFkanVzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuICBcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXG4uaG9sZGVyICB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBibGFjayBzb2xpZDtcbn1cblxuXG4uYmFySG9sZGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBsaW5lYXI7XG5cdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cbn1cblxuLmJISGlkZGVue1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBsaW5lYXI7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cblxuLnVzZXJIb2xkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBsaW5lYXI7XG5cdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG5cbi51SE9wZW57XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/_pages/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/_pages/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\n  <div class=\"adjust\">\n    <div (click)=\"setActiveSearchPage(0)\" [className]=\"activeNavIcon(0)? 'holder active'  : 'holder'\">\n      <span>Bars</span>\n    </div>\n    <div (click)=\"setActiveSearchPage(1)\" [className]=\"activeNavIcon(1)? 'holder active'  : 'holder'\">\n      <span>Users</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"searchWrap\">\n\n  <input (click)=\"focus()\" (focusout)=\"search()\" [(ngModel)]=\"searchString\" type=\"text\" id=\"subject\" class=\"instaSearch\"\n    value=\"\" placeholder=\"Search\">\n\n</div>\n\n\n\n<div class=\"barHolder\" id=\"barHolder\">\n  <!-- For each here -->\n  <div style=\"width:92%; margin: 0 4%;\">\n    <ul class=\"shop_items\">\n\n      <!-- BAR CARD -->\n      <li id=\"barCard\" *ngFor=\"let barCard of barResults\" (click)=\"onBarCardClick($event,barCard.barId)\">\n        <div class=\"shop_thumb\">\n          <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\n        </div>\n        <div class=\"shop_item_details\">\n          <h4>{{barCard.barName}}</h4>\n          <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\n              </span>\n            </li>\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\n              </span>\n            </li>\n          </ul>\n          <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\n            <!-- <app-like></app-like> -->\n            <img id=\"like\"\n              [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\n              alt=\"\" title=\"\" />\n          </span>\n        </div>\n      </li>\n\n\n    </ul>\n  </div>\n</div>\n\n\n\n<div class=\"userHolder\" id=\"userHolder\">\n  <div id=\"headDeals\">\n    <ul class=\"features_list\" *ngFor=\"let userRes of userResults\" style=\"padding: 0px 0 0 0; position:relative\">\n      <li>\n        <div style=\"padding-bottom: 10px;\">\n          <span class=\"features_list_span\">\n            <!-- <img src={{userRes.barPicture1Url}} alt=\"\" title=\"\" /> -->\n            <span class=\"features_list_span_text\">{{userRes.about.firstName}}</span>\n          </span>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"

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
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(db, auth) {
        this.db = db;
        this.auth = auth;
        this.searchString = "";
        this.activeSearchPage = 0;
        this.lastSearchedBars = "";
        this.lastSearchedUsers = "";
        this.barResults = [];
        this.userResults = [];
        this.dayOfTheWeek = "Wednesday"; //Needs to be calculated
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.activeNavIcon = function (index) {
        if (this.activeSearchPage == index)
            return true;
        return false;
    };
    SearchComponent.prototype.setActiveSearchPage = function (index) {
        if (index == this.activeSearchPage)
            return;
        if (index == 0) {
            document.getElementById('barHolder').classList.remove('bHHidden');
            document.getElementById('userHolder').classList.remove('uHOpen');
        }
        if (index == 1) {
            document.getElementById('barHolder').classList.add('bHHidden');
            document.getElementById('userHolder').classList.add('uHOpen');
        }
        this.activeSearchPage = index;
        this.search();
    };
    SearchComponent.prototype.focus = function () {
        document.getElementById('subject').focus();
        document.getElementById('subject').addEventListener('keyup', function (e) {
            if (e.which == 13)
                this.blur();
        });
    };
    SearchComponent.prototype.search = function () {
        var _this = this;
        var term = this.searchString;
        if (term == "")
            return;
        //Convert string
        term = term.toLowerCase();
        term = term.charAt(0).toUpperCase() + term.slice(1);
        if (this.activeSearchPage == 0) {
            if (this.lastSearchedBars == term)
                return;
            //https://angularfirebase.com/lessons/autocomplete-search-with-angular4-and-firebase/
            //https://stackoverflow.com/questions/40471284/firebase-search-by-child-value
            this.db.list('barCards/' + this.dayOfTheWeek, function (ref) { return ref.orderByChild('barName').limitToFirst(10).startAt(term).endAt(term + "\uf8ff"); }).valueChanges().subscribe(function (result) {
                console.log(result);
                _this.barResults = result;
                _this.lastSearchedBars = term;
            });
        }
        else if (this.activeSearchPage == 1) {
            if (this.lastSearchedUsers == term)
                return;
            this.db.list('userInfo', function (ref) { return ref.orderByChild('about/firstName').limitToFirst(10).startAt(term).endAt(term + "\uf8ff"); }).valueChanges().subscribe(function (result) {
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    if (result[i].about.userName == _this.auth.currentUser.userName) {
                        result.splice(i, 1);
                        break;
                    }
                }
                _this.userResults = result;
                _this.lastSearchedUsers = term;
            });
        }
    };
    SearchComponent.prototype.onBarCardClick = function (event, barId) {
        console.log(barId);
    };
    SearchComponent.prototype.likeBar = function (barCard) {
    };
    SearchComponent.prototype.checkLikedStatus = function (barCard) {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/_pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/_pages/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
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
        this.subUser = false;
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
            _this.currentUser.userName = userInfo.about.userName;
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
                userName: user.userName,
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
        console.log(this.afAuth.auth);
        // Refresh page to wipe all info, might need to rework later
        var pathArray = window.location.pathname.split('/');
        window.location.href = pathArray[0];
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
    AuthService.prototype.checkUniqueUser = function (username) {
        return this.db.list('userInfo', function (ref) { return ref.orderByChild('about/userName').limitToFirst(10).equalTo(username); }).valueChanges();
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
        this.barlistUrl = "main/barlist/deals";
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
        console.log(this.router.url);
        if (this.router.url == "/main/barlist/cover")
            this.barlistUrl = this.router.url;
        if (this.router.url == "/main/barlist/deals")
            this.barlistUrl = this.router.url;
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
/* harmony import */ var _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_pages/friend-page/friend-page.component */ "./src/app/_pages/friend-page/friend-page.component.ts");












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
                path: 'friend-page',
                component: _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_11__["FriendPageComponent"]
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

module.exports = "\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_pages/friend-page/friend-page.component */ "./src/app/_pages/friend-page/friend-page.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_18__["RefreshComponent"],
                _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_19__["FriendPageComponent"],
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

module.exports = __webpack_require__(/*! C:\Users\Joseph\Documents\Repos\BarCrawlV3Repoo\BarCrawlV3\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map