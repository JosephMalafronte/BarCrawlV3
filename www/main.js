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

module.exports = ".barPageLike {\r\n    position: absolute;\r\n    top:9px;\r\n    right:20px;\r\n    z-index:5;\r\n    width:33px;\r\n}\r\n\r\n.barPageLike img {\r\n    width: 100%;\r\n}\r\n\r\n/* Add a black background color to the top navigation */\r\n\r\n.topnav {\r\n    position: absolute;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.adjust {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.holder  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 12px 0px;\r\n    width: 25%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n\r\n.active {\r\n    background-color: #F2C843;\r\n    color: black;\r\n}\r\n\r\n.collapse {\r\n    display: none;\r\n  }\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 0 0 0;\r\n    transition-property: height, visibility;\r\n    transition-duration: 0.35s;\r\n    transition-timing-function: ease;\r\n  }\r\n\r\n.show {\r\n    display: block !important;\r\n  }\r\n\r\n.barDealsSectionBelow {\r\n    margin-top: -20px;\r\n    padding: 0 0 0 0;\r\n    border-bottom:1px black solid;\r\n  }\r\n\r\n.upcomingTitle {\r\n    margin-top: 10px;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.upcomingTitleAst  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: left;\r\n    padding: 12px 0px;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n.right-pointing-triangle::after {\r\n  content: \"\\25B6 \\FE0E\";\r\n}\r\n\r\n.currentBarCover {\r\n    text-align: center; \r\n    margin-top: 12px;\r\n    padding: 0 0 3px 0;\r\n    line-height:80%;\r\n    font-size:28px;\r\n}\r\n\r\n.currentBarCover span{\r\n    font-size: 16px;\r\n}\r\n\r\n.reportCoverButton {\r\n    margin: 10px 0px 10px 0; width:300px; font-size:14px;\r\n}\r\n\r\n.modal-window {\r\n    position: fixed;\r\n    background-color: rgba(200, 200, 200, 0.75);\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n.modal-window:target {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n  }\r\n\r\n.modal-window>div {\r\n    width: 70%;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    margin: 50% 0 0 7%;\r\n    padding: 2rem;\r\n    background: #fff;\r\n    color: #444;\r\n  }\r\n\r\n.modal-window header {\r\n    font-weight: bold;\r\n  }\r\n\r\n.modal-close {\r\n    color: #aaa;\r\n    line-height: 50px;\r\n    font-size: 30px;\r\n    margin-left: 10px;\r\n    position: absolute;\r\n    right: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    width: 70px;\r\n    text-decoration: none;\r\n  }\r\n\r\n.modal-close:hover {\r\n    color: #000;\r\n  }\r\n\r\n.modal-window h2 {\r\n    font-size: 150%;\r\n    margin: 0 0 15px;\r\n    padding: 0 0 0 0;\r\n  }\r\n\r\n.modal-window h1 {\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    margin: 0 0 15px;\r\n    padding: 0 0 0 0;\r\n  }\r\n\r\n.minus{\r\n      position: absolute;\r\n      left: 26%;\r\n      top: 38%;\r\n      width: 10%;\r\n  }\r\n\r\n.plus{\r\n    position: absolute;\r\n    right: 26%;\r\n    top: 38%;\r\n    width: 10%;\r\n  }\r\n\r\n.checkmark {\r\n    width: 100px;\r\n    margin: 0 auto;\r\n    padding-top: 0px;\r\n  }\r\n\r\n.path {\r\n    stroke-dasharray: 300;\r\n    stroke-dashoffset: 0;\r\n    -webkit-animation-name: load, spin;\r\n    -webkit-animation-duration: 3s, 3s;\r\n    -webkit-animation-timing-function: linear;\r\n    -webkit-animation-iteration-count: infinite;\r\n    animation-name: load, spin;\r\n    animation-duration: 3s, 3s;\r\n    animation-timing-function: linear;  \r\n    animation-iteration-count: infinite;\r\n    -webkit-transform-origin: 50% 50%;\r\n    -moz-transform-origin: 50px 50px;\r\n  }\r\n\r\n.path-complete {\r\n      -webkit-animation-play-state: paused;\r\n      animation-play-state: paused;\r\n  }\r\n\r\n.check \r\n  {\r\n      stroke-dasharray: 110;\r\n      stroke-dashoffset: -110;\r\n      stroke-width: 0;\r\n  }\r\n\r\n.check-complete \r\n  {   \r\n      -webkit-animation: check 1s ease-in forwards;\r\n      animation: check 1s ease-in forwards;\r\n      stroke-width: 8;\r\n      stroke-dashoffset: 0;\r\n  }\r\n\r\n.fill \r\n  {\r\n      stroke-dasharray: 285;\r\n      stroke-dashoffset: -257;\r\n      -webkit-animation: spin-fill 3s cubic-bezier(0.700, 0.435, 0.120, 0.600) infinite forwards;\r\n      animation: spin-fill 3s cubic-bezier(0.700, 0.465, 0.120, 0.600) infinite forwards;\r\n      -webkit-transform-origin: 50% 50%;\r\n    -moz-transform-origin: 50px 50px;\r\n  }\r\n\r\n.fill-complete \r\n  {\r\n      -webkit-animation: fill 1s ease-out forwards;\r\n      animation: fill 1s ease-out forwards;\r\n  }\r\n\r\n@-webkit-keyframes load {\r\n   0% {\r\n     stroke-dashoffset: 300;\r\n     -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n   }\r\n   50% {\r\n       stroke-dashoffset: 0;\r\n       -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n   }\r\n   100% {\r\n     stroke-dashoffset: -300;\r\n   }\r\n  }\r\n\r\n@keyframes load {\r\n   0% {\r\n     stroke-dashoffset: 285;\r\n     -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n             animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\r\n   }\r\n   50% {\r\n       stroke-dashoffset: 0;\r\n       -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n               animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\r\n   }\r\n   100% {\r\n     stroke-dashoffset: -285;\r\n   }\r\n  }\r\n\r\n@-webkit-keyframes check {\r\n   0% {\r\n     stroke-dashoffset: -110;\r\n  }\r\n   100% {\r\n     stroke-dashoffset: 0;\r\n   }\r\n  }\r\n\r\n@keyframes check {\r\n   0% {\r\n     stroke-dashoffset: -110;\r\n  }\r\n   100% {\r\n     stroke-dashoffset: 0;\r\n   }\r\n  }\r\n\r\n@-webkit-keyframes spin {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n@keyframes spin {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes spin-fill {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(720deg);\r\n    }\r\n  }\r\n\r\n@keyframes spin-fill {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(720deg);\r\n              transform: rotate(720deg);\r\n    }\r\n  }\r\n\r\n@-webkit-keyframes fill {\r\n    0% {\r\n      stroke-dashoffset: 285;\r\n    }\r\n    100% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  }\r\n\r\n@keyframes fill {\r\n    0% {\r\n      stroke-dashoffset: 285;\r\n    }\r\n    100% {\r\n      stroke-dashoffset: 0;\r\n    }\r\n  }\r\n\r\n.success \r\n  {\r\n      stroke: #009900;\r\n      transition: stroke .6s;\r\n  }\r\n\r\n.attendingButtonNotClicked {\r\n  position: absolute; \r\n  width:150px; \r\n  font-weight: 100;\r\n  height:8px; \r\n  top: 8px; \r\n  right: 70px; \r\n  font-size:14px;\r\n  border: 1px solid black;\r\n  border-color: black;\r\n  background: transparent;\r\n}\r\n\r\n.attendingButtonClicked {\r\n  position: absolute; \r\n  width:150px; \r\n  font-weight: 100;\r\n  height:8px; \r\n  top: 8px; \r\n  right: 70px; \r\n  font-size:14px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9iYXItcGFnZS9iYXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSx1REFBdUQ7O0FBQ3ZEO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsOENBQThDOztBQUM5QztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBR0EsMkNBQTJDOztBQUMzQztJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBR2hCLHVDQUF1QztJQUd2QywwQkFBMEI7SUFHMUIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2QkFBNkI7RUFDL0I7O0FBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUlBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCLEVBQUUsV0FBVyxFQUFFLGNBQWM7QUFDeEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osVUFBVTtJQUNWLG9CQUFvQjtJQUdwQixvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1Ysb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVE7TUFDUixVQUFVO0VBQ2Q7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyx5Q0FBeUM7SUFDekMsMkNBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsZ0NBQWdDO0VBQ2xDOztBQUVBO01BQ0ksb0NBQW9DO01BQ3BDLDRCQUE0QjtFQUNoQzs7QUFFQTs7TUFFSSxxQkFBcUI7TUFDckIsdUJBQXVCO01BQ3ZCLGVBQWU7RUFDbkI7O0FBRUE7O01BRUksNENBQTRDO01BQzVDLG9DQUFvQztNQUNwQyxlQUFlO01BQ2Ysb0JBQW9CO0VBQ3hCOztBQUVBOztNQUVJLHFCQUFxQjtNQUNyQix1QkFBdUI7TUFDdkIsMEZBQTBGO01BQzFGLGtGQUFrRjtNQUNsRixpQ0FBaUM7SUFDbkMsZ0NBQWdDO0VBQ2xDOztBQUVBOztNQUVJLDRDQUE0QztNQUM1QyxvQ0FBb0M7RUFDeEM7O0FBRUE7R0FDQztLQUNFLHNCQUFzQjtLQUN0QiwyRUFBMkU7R0FDN0U7R0FDQTtPQUNJLG9CQUFvQjtPQUNwQiwyRUFBMkU7R0FDL0U7R0FDQTtLQUNFLHVCQUF1QjtHQUN6QjtFQUNEOztBQUNBO0dBQ0M7S0FDRSxzQkFBc0I7S0FDdEIsMkVBQW1FO2FBQW5FLG1FQUFtRTtHQUNyRTtHQUNBO09BQ0ksb0JBQW9CO09BQ3BCLDJFQUFtRTtlQUFuRSxtRUFBbUU7R0FDdkU7R0FDQTtLQUNFLHVCQUF1QjtHQUN6QjtFQUNEOztBQUVBO0dBQ0M7S0FDRSx1QkFBdUI7RUFDMUI7R0FDQztLQUNFLG9CQUFvQjtHQUN0QjtFQUNEOztBQUNBO0dBQ0M7S0FDRSx1QkFBdUI7RUFDMUI7R0FDQztLQUNFLG9CQUFvQjtHQUN0QjtFQUNEOztBQUVBO0lBQ0U7TUFDRSwrQkFBK0I7SUFDakM7SUFDQTtNQUNFLGlDQUFpQztJQUNuQztFQUNGOztBQUNBO0lBQ0U7TUFDRSwrQkFBdUI7Y0FBdkIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBeUI7Y0FBekIseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLCtCQUErQjtJQUNqQztJQUNBO01BQ0UsaUNBQWlDO0lBQ25DO0VBQ0Y7O0FBQ0E7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRjs7QUFFQTtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjs7QUFDQTtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjs7QUFFQTs7TUFFSSxlQUFlO01BQ2Ysc0JBQXNCO0VBQzFCOztBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsY0FBYztBQUNoQiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvYmFyLXBhZ2UvYmFyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJQYWdlTGlrZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6OXB4O1xyXG4gICAgcmlnaHQ6MjBweDtcclxuICAgIHotaW5kZXg6NTtcclxuICAgIHdpZHRoOjMzcHg7XHJcbn1cclxuXHJcbi5iYXJQYWdlTGlrZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcbi50b3BuYXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4uYWRqdXN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbiAgXHJcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXHJcbi5ob2xkZXIgIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkM4NDM7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb2xsYXBzZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsYXBzaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5iYXJEZWFsc1NlY3Rpb25CZWxvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBibGFjayBzb2xpZDtcclxuICB9XHJcblxyXG5cclxuICAudXBjb21pbmdUaXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAudXBjb21pbmdUaXRsZUFzdCAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxuXHJcbi5yaWdodC1wb2ludGluZy10cmlhbmdsZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwyNUI2IFxcRkUwRVwiO1xyXG59XHJcblxyXG4uY3VycmVudEJhckNvdmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMCAwIDNweCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6ODAlO1xyXG4gICAgZm9udC1zaXplOjI4cHg7XHJcbn1cclxuXHJcbi5jdXJyZW50QmFyQ292ZXIgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnJlcG9ydENvdmVyQnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwOyB3aWR0aDozMDBweDsgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbi5tb2RhbC13aW5kb3cge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjc1KTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC13aW5kb3c6dGFyZ2V0IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXdpbmRvdz5kaXYge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46IDUwJSAwIDAgNyU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGNvbG9yOiAjNDQ0O1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtd2luZG93IGhlYWRlciB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNsb3NlIHtcclxuICAgIGNvbG9yOiAjYWFhO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC1jbG9zZTpob3ZlciB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXdpbmRvdyBoMiB7XHJcbiAgICBmb250LXNpemU6IDE1MCU7XHJcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICB9XHJcbiAgLm1vZGFsLXdpbmRvdyBoMSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gIH1cclxuXHJcbiAgLm1pbnVze1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDI2JTtcclxuICAgICAgdG9wOiAzOCU7XHJcbiAgICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG5cclxuICAucGx1c3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNiU7XHJcbiAgICB0b3A6IDM4JTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG5cclxuICAuY2hlY2ttYXJrIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLnBhdGgge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMzAwO1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsb2FkLCBzcGluO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDNzLCAzcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBsb2FkLCBzcGluO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzcywgM3M7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7ICBcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MHB4IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5wYXRoLWNvbXBsZXRlIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2sgXHJcbiAge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxMTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTEwO1xyXG4gICAgICBzdHJva2Utd2lkdGg6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGVjay1jb21wbGV0ZSBcclxuICB7ICAgXHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjaGVjayAxcyBlYXNlLWluIGZvcndhcmRzO1xyXG4gICAgICBhbmltYXRpb246IGNoZWNrIDFzIGVhc2UtaW4gZm9yd2FyZHM7XHJcbiAgICAgIHN0cm9rZS13aWR0aDogODtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWxsIFxyXG4gIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMjg1O1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTI1NztcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4tZmlsbCAzcyBjdWJpYy1iZXppZXIoMC43MDAsIDAuNDM1LCAwLjEyMCwgMC42MDApIGluZmluaXRlIGZvcndhcmRzO1xyXG4gICAgICBhbmltYXRpb246IHNwaW4tZmlsbCAzcyBjdWJpYy1iZXppZXIoMC43MDAsIDAuNDY1LCAwLjEyMCwgMC42MDApIGluZmluaXRlIGZvcndhcmRzO1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwcHggNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmZpbGwtY29tcGxldGUgXHJcbiAge1xyXG4gICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmlsbCAxcyBlYXNlLW91dCBmb3J3YXJkcztcclxuICAgICAgYW5pbWF0aW9uOiBmaWxsIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZCB7XHJcbiAgIDAlIHtcclxuICAgICBzdHJva2UtZGFzaG9mZnNldDogMzAwO1xyXG4gICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICAgfVxyXG4gICA1MCUge1xyXG4gICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XHJcbiAgIH1cclxuICAgMTAwJSB7XHJcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zMDA7XHJcbiAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBsb2FkIHtcclxuICAgMCUge1xyXG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODU7XHJcbiAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcclxuICAgfVxyXG4gICA1MCUge1xyXG4gICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xyXG4gICB9XHJcbiAgIDEwMCUge1xyXG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjg1O1xyXG4gICB9XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjaGVjayB7XHJcbiAgIDAlIHtcclxuICAgICBzdHJva2UtZGFzaG9mZnNldDogLTExMDtcclxuICB9XHJcbiAgIDEwMCUge1xyXG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgY2hlY2sge1xyXG4gICAwJSB7XHJcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMTA7XHJcbiAgfVxyXG4gICAxMDAlIHtcclxuICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbi1maWxsIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgc3Bpbi1maWxsIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNzIwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZpbGwge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMjg1O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGZpbGwge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMjg1O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc3VjY2VzcyBcclxuICB7XHJcbiAgICAgIHN0cm9rZTogIzAwOTkwMDtcclxuICAgICAgdHJhbnNpdGlvbjogc3Ryb2tlIC42cztcclxuICB9XHJcblxyXG4uYXR0ZW5kaW5nQnV0dG9uTm90Q2xpY2tlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlOyBcclxuICB3aWR0aDoxNTBweDsgXHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBoZWlnaHQ6OHB4OyBcclxuICB0b3A6IDhweDsgXHJcbiAgcmlnaHQ6IDcwcHg7IFxyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5hdHRlbmRpbmdCdXR0b25DbGlja2VkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gIHdpZHRoOjE1MHB4OyBcclxuICBmb250LXdlaWdodDogMTAwO1xyXG4gIGhlaWdodDo4cHg7IFxyXG4gIHRvcDogOHB4OyBcclxuICByaWdodDogNzBweDsgXHJcbiAgZm9udC1zaXplOjE0cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/_components/bar-page/bar-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/bar-page/bar-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slideInPage\" [@slideInBarTrigger]=\"slideInBar\">\r\n  <app-full-loading *ngIf=\"isLoading\" [loadingType]=\"0\"></app-full-loading>\r\n\r\n  <div id=\"slider_maincontent\">\r\n\r\n    <h2 class=\"page_title_slide\">{{barName}}</h2>\r\n    <div (click)=\"markAttending()\">\r\n        <div *ngIf=\"!checkAttendingStatus()\" class=\"btn btn--full attendingButtonNotClicked\">\r\n            <span style=\"vertical-align: top; line-height: 10px;\" >Attending Tonight?</span>\r\n        </div>\r\n        <div *ngIf=\"checkAttendingStatus()\" class=\"btn btn--full attendingButtonNotClicked\">\r\n            <span style=\"vertical-align: top; line-height: 10px;\" >Attending Tonight &#10004;</span>\r\n        </div>\r\n    </div>\r\n    \r\n    <span class=\"barPageLike\" (click)=\"likeBar()\">\r\n      <img id=\"like\" [src]=\"checkLikedStatus()? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\r\n        alt=\"\" title=\"\" />\r\n    </span>\r\n\r\n    <ul id=\"imageGallery\" style=\"margin-bottom: -12px;\">\r\n      <li data-thumb=\"img/thumb/cS-1.jpg\" data-src=\"img/largeImage.jpg\">\r\n        <img [src]=\"barPictureUrl\" (load)=\"imageLoaded()\" width=\"100%\" id=\"barPageImage1\" />\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"page_single layout_fullwidth_padding\" style=\"margin-bottom: 40px;\">\r\n\r\n\r\n      <div class=\"topnav\">\r\n        <div class=\"adjust\">\r\n          <div (click)=\"setActiveInfoPage(0)\" [className]=\"activeNavIcon(0)? 'holder active'  : 'holder'\">\r\n            <span>Deals</span>\r\n          </div>\r\n          <div (click)=\"setActiveInfoPage(1)\" [className]=\"activeNavIcon(1)? 'holder active'  : 'holder'\">\r\n            <span>Cover</span>\r\n          </div>\r\n          <div (click)=\"setActiveInfoPage(2)\" [className]=\"activeNavIcon(2)? 'holder active'  : 'holder'\">\r\n            <span>Friends</span>\r\n          </div>\r\n          <div (click)=\"setActiveInfoPage(3)\" [className]=\"activeNavIcon(3)? 'holder active'  : 'holder'\">\r\n            <span>Map</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- <blockquote style=\"display:none\">\r\n        This mobile template that can be used to create a mobile website, a mobile web app, or even a native mobile app. The design\r\n        is using a full width layout that works perfectly on tablets and desktop also.\r\n        <span>SINDEVO.COM</span>\r\n      </blockquote> -->\r\n\r\n      <router-outlet></router-outlet>\r\n\r\n\r\n\r\n      <!-- BAR DEALS -->\r\n      <!-- <app-barpage-deals></app-barpage-deals> -->\r\n\r\n\r\n      <!-- BAR COVER -->\r\n      <!-- <app-barpage-cover></app-barpage-cover> -->\r\n\r\n\r\n\r\n      <!-- BAR FRIENDS -->\r\n      <!-- <div *ngIf=\"activeInfoPage==2\" style=\"padding-top:50px;\">\r\n        <div class=\"barDealsSection\">\r\n          <h3 style=\"padding: 0 0 0 0;\">\r\n            <span>Friends Going Here Tonight</span>\r\n          </h3>\r\n        </div>\r\n\r\n        <div>\r\n          <ul class=\"features_list\" *ngFor=\"let dailyDeal of headDailyDeals\" style=\"padding: 0px 0 0 0; position:relative\">\r\n            <li>\r\n              <div style=\"padding-bottom: 10px;\">\r\n                <span class=\"features_list_span\">\r\n                  <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\r\n                  <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\r\n                </span>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </div> -->\r\n\r\n      \r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n</div>"

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
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _services_barpage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_services/barpage.service */ "./src/app/_services/barpage.service.ts");









var BarPageComponent = /** @class */ (function () {
    function BarPageComponent(_dbA, _dateDirective, _authService, _barpageService, router, mainService) {
        this.router = router;
        this.mainService = mainService;
        this.slideInBar = false; // maps to slideInBarTrigger
        this.location = "barlist";
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
        this.barPageHideInit();
    };
    //COVERS: Get Mode of day.values and mode of day.hourValues. If hourvalues mode> values mode display hourvalues
    //If current Hour > Last Hour wipe hour Values and update last hour
    BarPageComponent.prototype.barPageHideInit = function () {
        var _this = this;
        if (this.location === "search") {
            this.mainService.barSlideSearch.subscribe(function (value) {
                _this.slideInBar = value;
            });
        }
    };
    BarPageComponent.prototype.clearBarPageData = function () {
        this.isLoading = true;
        this.barPictureUrl = "";
        this.barName = "";
        this.barPictureUrl = "";
    };
    BarPageComponent.prototype.getBarPage = function (barId) {
        var _this = this;
        this.barPageId = barId;
        this.mainService.currentBarPageId = barId;
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
            this.router.navigateByUrl('/main/' + this.location + '/deals');
        }
        else if (index == 1) {
            this.router.navigateByUrl('/main/' + this.location + '/cover');
        }
        else if (index == 2) {
            this.router.navigateByUrl('/main/' + this.location + '/friends');
        }
        else if (index == 3) {
            this.router.navigateByUrl('/main/' + this.location + '/map');
        }
        this.activeInfoPage = index;
    };
    BarPageComponent.prototype.markAttending = function () {
        this.authService.markAttending(this.barPageId);
    };
    BarPageComponent.prototype.checkAttendingStatus = function () {
        if (this.authService.currentUser.barsAttending == undefined)
            return;
        if (this.authService.currentUser.barsAttending.indexOf(this.barPageId) == -1) {
            return false;
        }
        else
            return true;
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], BarPageComponent.prototype, "location", void 0);
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
            _services_barpage_service__WEBPACK_IMPORTED_MODULE_8__["BarPageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]])
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

module.exports = ".barPageLike {\r\n    position: absolute;\r\n    top:9px;\r\n    right:20px;\r\n    z-index:5;\r\n    width:33px;\r\n}\r\n\r\n.barPageLike img {\r\n    width: 100%;\r\n}\r\n\r\n/* Add a black background color to the top navigation */\r\n\r\n.topnav {\r\n    position: absolute;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.adjust {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.holder  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 12px 0px;\r\n    width: 25%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n\r\n.active {\r\n    background-color: #F2C843;\r\n    color: black;\r\n}\r\n\r\n.collapse {\r\n    display: none;\r\n  }\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 0 0 0;\r\n    transition-property: height, visibility;\r\n    transition-duration: 0.35s;\r\n    transition-timing-function: ease;\r\n  }\r\n\r\n.show {\r\n    display: block !important;\r\n  }\r\n\r\n.barDealsSectionBelow {\r\n    margin-top: -20px;\r\n    padding: 0 0 0 0;\r\n    border-bottom:1px black solid;\r\n  }\r\n\r\n.upcomingTitle {\r\n    margin-top: 10px;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.upcomingTitleAst  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: left;\r\n    padding: 12px 0px;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n.right-pointing-triangle::after {\r\n  content: \"\\25B6 \\FE0E\";\r\n}\r\n\r\n.currentBarCover {\r\n    text-align: center; \r\n    margin-top: 12px;\r\n    padding: 0 0 3px 0;\r\n    line-height:80%;\r\n    font-size:28px;\r\n}\r\n\r\n.currentBarCover span{\r\n    font-size: 16px;\r\n}\r\n\r\n.reportCoverButton {\r\n    margin: 10px 0px 10px 0; width:300px; font-size:14px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9iYXJwYWdlLWNvdmVyL2JhcnBhZ2UtY292ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsdURBQXVEOztBQUN2RDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLDhDQUE4Qzs7QUFDOUM7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUdBLDJDQUEyQzs7QUFDM0M7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUdoQix1Q0FBdUM7SUFHdkMsMEJBQTBCO0lBRzFCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0VBQy9COztBQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFJQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxjQUFjO0FBQ3hEIiwiZmlsZSI6ImFwcC9fY29tcG9uZW50cy9iYXJwYWdlLWNvdmVyL2JhcnBhZ2UtY292ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJQYWdlTGlrZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6OXB4O1xyXG4gICAgcmlnaHQ6MjBweDtcclxuICAgIHotaW5kZXg6NTtcclxuICAgIHdpZHRoOjMzcHg7XHJcbn1cclxuXHJcbi5iYXJQYWdlTGlrZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcbi50b3BuYXYge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICByaWdodDogMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcblxyXG4uYWRqdXN0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcbiAgXHJcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXHJcbi5ob2xkZXIgIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcblxyXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xyXG4uYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkM4NDM7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb2xsYXBzZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsYXBzaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5iYXJEZWFsc1NlY3Rpb25CZWxvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBibGFjayBzb2xpZDtcclxuICB9XHJcblxyXG5cclxuICAudXBjb21pbmdUaXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAudXBjb21pbmdUaXRsZUFzdCAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogI2YyZjJmMjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxuXHJcbi5yaWdodC1wb2ludGluZy10cmlhbmdsZTo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXFwyNUI2IFxcRkUwRVwiO1xyXG59XHJcblxyXG4uY3VycmVudEJhckNvdmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgcGFkZGluZzogMCAwIDNweCAwO1xyXG4gICAgbGluZS1oZWlnaHQ6ODAlO1xyXG4gICAgZm9udC1zaXplOjI4cHg7XHJcbn1cclxuXHJcbi5jdXJyZW50QmFyQ292ZXIgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuLnJlcG9ydENvdmVyQnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCAwOyB3aWR0aDozMDBweDsgZm9udC1zaXplOjE0cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/_components/barpage-cover/barpage-cover.component.html":
/*!************************************************************************!*\
  !*** ./src/app/_components/barpage-cover/barpage-cover.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!hidePage\" class=\"loadingHolder\">\r\n    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\r\n</div>\r\n\r\n\r\n<div [hidden]=\"hidePage\" style=\"padding-top:50px;\">\r\n    <h3 class=\"currentBarCover\">${{currentEstCover}}\r\n      <br />\r\n      <span>Current Reported Cover</span>\r\n    </h3>\r\n\r\n    <div (click)=\"toggleCoverPopUp()\" style=\"text-align: center\">\r\n      <span style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\" class=\"btn btn--full\">Report Cover</span>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <h5 style=\"padding: 0 0 0px 0; border-bottom: 1px black solid;\">Projected Cover by Hour</h5>\r\n    <div style=\"margin: 7px 10px 0 10px;\">\r\n      <ul class=\"responsive_table\" style=\"width:100%; text-align: center; padding-bottom: 30px;\">\r\n        <li class=\"table_row\" style=\"background-color: #636158;  color: white;\">\r\n          <div class=\"table_section_small\">Hour</div>\r\n          <div class=\"table_section\">Price</div>\r\n          <div class=\"table_section\">How Packed?</div>\r\n        </li>\r\n        <div *ngIf=\"showHourlyEstimates\">\r\n          <li class=\"table_row\" *ngFor=\"let est of hourlyEstimates\" style=\"background-color:#f5f5f4;\">\r\n            <div class=\"table_section_small\">{{est.hourString}}</div>\r\n            <div class=\"table_section\">${{est.cover}}</div>\r\n            <div class=\"table_section\">{{est.waitString}}</div>\r\n          </li>\r\n        </div>\r\n\r\n\r\n      </ul>\r\n    </div>\r\n\r\n\r\n\r\n\r\n  </div>"

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

module.exports = ".barPageLike {\r\n    position: absolute;\r\n    top:9px;\r\n    right:20px;\r\n    z-index:5;\r\n    width:33px;\r\n}\r\n\r\n.barPageLike img {\r\n    width: 100%;\r\n}\r\n\r\n/* Add a black background color to the top navigation */\r\n\r\n.topnav {\r\n    position: absolute;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.adjust {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n/* Style the links inside the navigation bar */\r\n\r\n.holder  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 12px 0px;\r\n    width: 25%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n/* Add a color to the active/current link */\r\n\r\n.active {\r\n    background-color: #F2C843;\r\n    color: black;\r\n}\r\n\r\n.collapse {\r\n    display: none;\r\n  }\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 0 0 0;\r\n    transition-property: height, visibility;\r\n    transition-duration: 0.35s;\r\n    transition-timing-function: ease;\r\n  }\r\n\r\n.show {\r\n    display: block !important;\r\n  }\r\n\r\n.barDealsSectionBelow {\r\n    margin-top: -20px;\r\n    padding: 40px 0 0 0;\r\n    border-bottom:1px black solid;\r\n  }\r\n\r\n.upcomingTitle {\r\n    margin-top: 10px;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: #333;\r\n    overflow: hidden;\r\n  }\r\n\r\n.upcomingTitleAst  {\r\n    float: left;\r\n    color: #f2f2f2;\r\n    text-align: left;\r\n    padding: 12px 0px;\r\n    width: 100%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n\r\n.right-pointing-triangle::after {\r\n  content: \"\\25B6 \\FE0E\";\r\n}\r\n\r\n.expandButton{\r\n  margin: 10px 0 0 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9iYXJwYWdlLWRlYWxzL2JhcnBhZ2UtZGVhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsdURBQXVEOztBQUN2RDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLDhDQUE4Qzs7QUFDOUM7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUdBLDJDQUEyQzs7QUFDM0M7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUdoQix1Q0FBdUM7SUFHdkMsMEJBQTBCO0lBRzFCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COztBQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFJQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvYmFycGFnZS1kZWFscy9iYXJwYWdlLWRlYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyUGFnZUxpa2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjlweDtcclxuICAgIHJpZ2h0OjIwcHg7XHJcbiAgICB6LWluZGV4OjU7XHJcbiAgICB3aWR0aDozM3B4O1xyXG59XHJcblxyXG4uYmFyUGFnZUxpa2UgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xyXG4udG9wbmF2IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuLmFkanVzdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4gIFxyXG4vKiBTdHlsZSB0aGUgbGlua3MgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xyXG4uaG9sZGVyICB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5cclxuLyogQWRkIGEgY29sb3IgdG8gdGhlIGFjdGl2ZS9jdXJyZW50IGxpbmsgKi9cclxuLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDODQzO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uY29sbGFwc2Uge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG5cclxuICAuY29sbGFwc2luZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMCAwIDAgMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcclxuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICB9XHJcblxyXG4gIC5zaG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYmFyRGVhbHNTZWN0aW9uQmVsb3cge1xyXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDAgMCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggYmxhY2sgc29saWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLnVwY29taW5nVGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbiAgLnVwY29taW5nVGl0bGVBc3QgIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6ICNmMmYyZjI7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuXHJcblxyXG4ucmlnaHQtcG9pbnRpbmctdHJpYW5nbGU6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlxcMjVCNiBcXEZFMEVcIjtcclxufVxyXG5cclxuXHJcbi5leHBhbmRCdXR0b257XHJcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG59XHJcblxyXG4iXX0= */"

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

/***/ "./src/app/_components/barpage-friends/barpage-friends.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/_components/barpage-friends/barpage-friends.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvYmFycGFnZS1mcmllbmRzL2JhcnBhZ2UtZnJpZW5kcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_components/barpage-friends/barpage-friends.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/_components/barpage-friends/barpage-friends.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!displayFriends\" class=\"loadingHolder\">\r\n    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\r\n</div>\r\n\r\n\r\n<div style=\"padding-top:50px;\" *ngIf=\"displayFriends\">\r\n\r\n  <!-- HEADER -->\r\n  <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\r\n    <h3 style=\"padding: 0 0 0 0;\">\r\n      <span>Friends Going Tonight</span>\r\n    </h3>\r\n  </div>\r\n\r\n  <!-- FRIEND LIST -->\r\n  <div id=\"friendHolder\">\r\n    <ul class=\"features_list\" *ngFor=\"let friend of friends\" style=\"padding: 0px 0 0 0; position:relative\">\r\n      <li (click)=\"openFriendPopUp(friend)\">\r\n        <div style=\"padding-bottom: 10px;\">\r\n          <span class=\"features_list_span\">\r\n              <img src=\"{{friend.profilePicUrl}}\">\r\n              <span class=\"features_list_span_text\" style=\"font-size: 110%;\">{{friend.firstName}} {{friend.lastName}} </span> \r\n          </span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/_components/barpage-friends/barpage-friends.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_components/barpage-friends/barpage-friends.component.ts ***!
  \**************************************************************************/
/*! exports provided: BarpageFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarpageFriendsComponent", function() { return BarpageFriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");




var BarpageFriendsComponent = /** @class */ (function () {
    function BarpageFriendsComponent(authService, mainService) {
        this.authService = authService;
        this.mainService = mainService;
        this.displayFriends = false;
        this.friends = [];
    }
    BarpageFriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.reloadFriendData();
        this.subscription = this.authService.loadingFriendData.subscribe(function (value) {
            // once done loading
            if (value == "Done") {
                var tempList = _this.authService.currentUser.friends;
                var barId = _this.mainService.currentBarPageId;
                for (var i = 0; i < tempList.length; i++) {
                    var item = tempList[i];
                    if (item.barsAttending.indexOf(barId) >= 0) {
                        _this.friends.push(item);
                    }
                }
                //Show info
                _this.displayFriends = true;
                _this.authService.loadingFriendData.next("None");
                _this.subscription.unsubscribe();
            }
        });
    };
    BarpageFriendsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    BarpageFriendsComponent.prototype.openFriendPopUp = function (user) {
        this.mainService.activateFriendPopUp(user);
    };
    BarpageFriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barpage-friends',
            template: __webpack_require__(/*! ./barpage-friends.component.html */ "./src/app/_components/barpage-friends/barpage-friends.component.html"),
            styles: [__webpack_require__(/*! ./barpage-friends.component.css */ "./src/app/_components/barpage-friends/barpage-friends.component.css"), __webpack_require__(/*! ../../_pages/main/main.component.css */ "./src/app/_pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], BarpageFriendsComponent);
    return BarpageFriendsComponent;
}());



/***/ }),

/***/ "./src/app/_components/barpage-map/barpage-map.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/_components/barpage-map/barpage-map.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvYmFycGFnZS1tYXAvYmFycGFnZS1tYXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_components/barpage-map/barpage-map.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/barpage-map/barpage-map.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top:50px;\">\n  <p>\n    barpage-map works!\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/barpage-map/barpage-map.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/_components/barpage-map/barpage-map.component.ts ***!
  \******************************************************************/
/*! exports provided: BarpageMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarpageMapComponent", function() { return BarpageMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BarpageMapComponent = /** @class */ (function () {
    function BarpageMapComponent() {
    }
    BarpageMapComponent.prototype.ngOnInit = function () {
    };
    BarpageMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barpage-map',
            template: __webpack_require__(/*! ./barpage-map.component.html */ "./src/app/_components/barpage-map/barpage-map.component.html"),
            styles: [__webpack_require__(/*! ./barpage-map.component.css */ "./src/app/_components/barpage-map/barpage-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BarpageMapComponent);
    return BarpageMapComponent;
}());



/***/ }),

/***/ "./src/app/_components/full-loading/full-loading.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/_components/full-loading/full-loading.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fullLoadingPage{\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n    z-index: 150;\r\n\r\n    width: 100%;\r\n    height: 100%;\r\n    background:white;\r\n  \r\n  }\r\n\r\n\r\n  .circle-loader {\r\n    margin-bottom: 0;\r\n    border: 3px solid rgba(0, 0, 0, 0.2);\r\n    border-left-color: #F2C843;\r\n    -webkit-animation: loader-spin 1.2s infinite linear;\r\n            animation: loader-spin 1.2s infinite linear;\r\n    position: relative;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    border-radius: 50%;\r\n    width: 7em;\r\n    height: 7em;\r\n  }\r\n\r\n\r\n  .load-complete {\r\n    -webkit-animation: none;\r\n    animation: none;\r\n    border-color: #F2C843;\r\n    transition: border 500ms ease-out;\r\n  }\r\n\r\n\r\n  .checkmarkHidden {\r\n    display: none;\r\n  }\r\n\r\n\r\n  .checkmark{\r\n    display:auto;\r\n  }\r\n\r\n\r\n  .checkmark.draw:after {\r\n    -webkit-animation-duration: 800ms;\r\n            animation-duration: 800ms;\r\n    -webkit-animation-timing-function: ease;\r\n            animation-timing-function: ease;\r\n    -webkit-animation-name: checkmark;\r\n            animation-name: checkmark;\r\n    -webkit-transform: scaleX(-1) rotate(135deg);\r\n            transform: scaleX(-1) rotate(135deg);\r\n  }\r\n\r\n\r\n  .checkmark:after {\r\n    opacity: 1;\r\n    height: 3.5em;\r\n    width: 1.75em;\r\n    -webkit-transform-origin: left top;\r\n            transform-origin: left top;\r\n    border-right: 4px solid #F2C843;\r\n    border-top: 4px solid #F2C843;\r\n    content: '';\r\n    left: 1.75em;\r\n    top: 3.5em;\r\n    position: absolute;\r\n  }\r\n\r\n\r\n  @-webkit-keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n\r\n\r\n  @keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n\r\n\r\n  @-webkit-keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n\r\n\r\n  @keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9mdWxsLWxvYWRpbmcvZnVsbC1sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZOztJQUVaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCOztFQUVsQjs7O0VBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiOzs7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlDQUFpQztFQUNuQzs7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7OztFQUNBO0lBQ0UsWUFBWTtFQUNkOzs7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDRDQUFvQztZQUFwQyxvQ0FBb0M7RUFDdEM7OztFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7O0VBSUE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOzs7RUFQQTtJQUNFO1FBQ0ksK0JBQXVCO2dCQUF2Qix1QkFBdUI7R0FDNUI7SUFDQztRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO0dBQzlCO0VBQ0Q7OztFQUNBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7R0FDZjtJQUNDO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtFQUNEOzs7RUFyQkE7SUFDRTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0VBQ0QiLCJmaWxlIjoiYXBwL19jb21wb25lbnRzL2Z1bGwtbG9hZGluZy9mdWxsLWxvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsTG9hZGluZ1BhZ2V7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIG1hcmdpbjowO1xyXG4gICAgei1pbmRleDogMTUwO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDp3aGl0ZTtcclxuICBcclxuICB9XHJcblxyXG5cclxuICAuY2lyY2xlLWxvYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICNGMkM4NDM7XHJcbiAgICBhbmltYXRpb246IGxvYWRlci1zcGluIDEuMnMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiA3ZW07XHJcbiAgICBoZWlnaHQ6IDdlbTtcclxuICB9XHJcbiAgLmxvYWQtY29tcGxldGUge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XHJcbiAgICBhbmltYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICNGMkM4NDM7XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgNTAwbXMgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gIC5jaGVja21hcmtIaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgLmNoZWNrbWFya3tcclxuICAgIGRpc3BsYXk6YXV0bztcclxuICB9XHJcbiAgLmNoZWNrbWFyay5kcmF3OmFmdGVyIHtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XHJcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGNoZWNrbWFyaztcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTM1ZGVnKTtcclxuICB9XHJcbiAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgIHdpZHRoOiAxLjc1ZW07XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcclxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNGMkM4NDM7XHJcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgI0YyQzg0MztcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgbGVmdDogMS43NWVtO1xyXG4gICAgdG9wOiAzLjVlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgQGtleWZyYW1lcyBsb2FkZXItc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBjaGVja21hcmsge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICB9XHJcbiAgICAyMCUge1xyXG4gICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICB3aWR0aDogMS43NWVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcclxuICAgICAgICB3aWR0aDogMS43NWVtO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIGhlaWdodDogMy41ZW07XHJcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICB9XHJcbiAgfVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_components/full-loading/full-loading.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_components/full-loading/full-loading.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullLoadingPage\">\r\n\r\n\r\n    <!-- Figure out why ngif is not working -->\r\n\r\n\r\n    <!-- Page Loader -->\r\n    <div class=\"centered\" id=\"pageLoader\">\r\n        <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\r\n    </div>\r\n\r\n    <!--Loading-->\r\n    <!-- <div *ngIf=\"loadingType==1\" class=\"center-screen\">\r\n        <div id=\"circleLoader\" class=\"circle-loader\">\r\n            <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n\r\n</div>\r\n"

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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], FullLoadingComponent.prototype, "loadingType", void 0);
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

/***/ "./src/app/_components/full-loading/full-loading.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/_components/full-loading/full-loading.module.ts ***!
  \*****************************************************************/
/*! exports provided: FullLoadingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLoadingModule", function() { return FullLoadingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _full_loading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-loading.component */ "./src/app/_components/full-loading/full-loading.component.ts");


//Import Components

var FullLoadingModule = /** @class */ (function () {
    function FullLoadingModule() {
    }
    FullLoadingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _full_loading_component__WEBPACK_IMPORTED_MODULE_2__["FullLoadingComponent"],
            ],
            imports: [],
            exports: [
                _full_loading_component__WEBPACK_IMPORTED_MODULE_2__["FullLoadingComponent"]
            ],
            providers: [],
            bootstrap: []
        })
    ], FullLoadingModule);
    return FullLoadingModule;
}());



/***/ }),

/***/ "./src/app/_components/header/header.component.css":
/*!*********************************************************!*\
  !*** ./src/app/_components/header/header.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_components/header/header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/header/header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar--fixed navbar--fixed-top navbar--bg\" style=\"background-color:black;\">\r\n  <div class=\"navbar__col navbar__col--icon navbar__col--icon-right\" (click)=\"refresh()\">\r\n    <a  data-panel=\"left\" class=\"open-panel\">\r\n      <img src=\"./assets/images/icons/white/menu.png\" alt=\"\" title=\"\" />\r\n    </a>\r\n  </div>\r\n  <div class=\"navbar__col navbar__col--title\">\r\n    <a>\r\n      <img src=\"./assets/images/TextLogo.png\" width=\"150px\" style=\"padding-top:16px;\">\r\n    </a>\r\n  </div>\r\n  <div class=\"navbar__col navbar__col--icon navbar__col--icon-right\" (click)=\"userClick()\" style=\"padding-right:7px;\">\r\n    <a data-panel=\"right\" class=\"open-panel\">\r\n      <img src=\"./assets/images/icons/white/user.png\" alt=\"\" title=\"\" />\r\n    </a>\r\n  </div>\r\n\r\n</div>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvbWFpbi1zY3JvbGwvbWFpbi1zY3JvbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_components/main-scroll/main-scroll.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/main-scroll/main-scroll.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content of Page       -->\r\n<div id=\"pages_maincontent\" *ngIf=\"displayPage\">\r\n  <h2 class=\"page_title\" style=\"text-align: center;\"></h2>\r\n\r\n  <div class=\"page_single layout_fullwidth_padding\">\r\n\r\n    <!-- For each here -->\r\n    <ul class=\"shop_items\">\r\n\r\n      <!-- BAR CARD -->\r\n      <li id=\"barCard\" *ngFor=\"let barCard of barCards\" (click)=\"onBarCardClick($event,barCard.barId)\">\r\n        <div class=\"shop_thumb\">\r\n          <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\r\n        </div>\r\n        <div class=\"shop_item_details\">\r\n          <h4>{{barCard.barName}}</h4>\r\n          <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\r\n            <li>\r\n              <span class=\"features_list_span\">\r\n                <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\r\n                <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\r\n              </span>\r\n            </li>\r\n            <li>\r\n              <span class=\"features_list_span\">\r\n                <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\r\n                <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n          <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\r\n              <!-- <app-like></app-like> -->\r\n              <img  id=\"like\"  [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\" alt=\"\" title=\"\" />            \r\n          </span>\r\n        </div>\r\n      </li>\r\n\r\n\r\n    </ul>\r\n\r\n    <!-- <div class=\"shop_pagination\">\r\n      <a href=\"\" class=\"prev_shop\">PREV PAGE</a>\r\n      <span class=\"shop_pagenr\">1/37</span>\r\n      <a href=\"\" class=\"next_shop\">NEXT PAGE</a>\r\n      <br />\r\n      <br />\r\n      <br />\r\n      <br />\r\n    </div> -->\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_components/navbar/navbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/_components/navbar/navbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--       NAVBAR       -->\r\n<div class=\"swiper-container-toolbar swiper-toolbar\" style=\"background-color:black;\">\r\n  <div class=\"swiper-pagination-toolbar\"></div>\r\n  <div class=\"swiper-wrapper\">\r\n    <div class=\"swiper-slide toolbar-icon\">\r\n      <span class=\"toolbar-icon-span\" id=\"toolbarHome\"  (click)=\"icon0Click()\">\r\n        <img src=\"./assets/images/icons/white/categories.png\"alt=\"\" title=\"\" />\r\n      </span>\r\n      <span class=\"toolbar-icon-span\" id=\"toolbarSearch\" (click)=\"icon1Click()\">\r\n        <img src=\"./assets/images/icons/white/search.png\"  alt=\"\" title=\"\" />\r\n      </span>\r\n      <span class=\"toolbar-icon-span\" (click)=\"icon2Click()\">\r\n        <img style=\"width: 125%;\" src=\"./assets/images/icons/white/users.png\" alt=\"\" title=\"\" />\r\n      </span>\r\n      <span class=\"toolbar-icon-span\" (click)=\"icon3Click()\">\r\n        <img src=\"./assets/images/icons/white/love.png\" alt=\"\" title=\"\" />\r\n      </span>\r\n      <span class=\"toolbar-icon-span\" (click)=\"icon4Click()\">\r\n        <img src=\"./assets/images/icons/white/settings.png\" alt=\"\" title=\"\" />\r\n      </span>\r\n    </div>\r\n  </div>\r\n</div>"

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
        if (this.mainService.currentPageValue == 1) {
            // If slide is closed dont do anything
            if (this.mainService.barSlideSearch.getValue() == false)
                return;
            //If slide is open close it
            this.mainService.toggleBarSlideSearch();
            return;
        }
        this.mainService.changePage(1);
    };
    NavbarComponent.prototype.icon2Click = function () {
        if (this.mainService.currentPageValue == 2) {
            //Same click functionality here
            return;
        }
        this.mainService.changePage(2);
    };
    NavbarComponent.prototype.icon3Click = function () {
        if (this.mainService.currentPageValue == 3) {
            // If slide is closed dont do anything
            console.log('test');
            if (this.mainService.barSlideLikedBars.getValue() == false)
                return;
            //If slide is open close it
            this.mainService.toggleBarSlideLikedBars();
            return;
        }
        this.mainService.changePage(3);
    };
    NavbarComponent.prototype.icon4Click = function () {
        console.log("click");
        if (this.mainService.currentPageValue == 4) {
            //Same click functionality here
            return;
        }
        this.mainService.changePage(4);
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

module.exports = "\r\n.modal-window {\r\n    position: absolute;\r\n    background-color: rgba(200, 200, 200, 0.75);\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 999;\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n    transition: all 0.3s;\r\n  }\r\n  \r\n  .modal-window:target {\r\n    opacity: 1;\r\n    pointer-events: auto;\r\n  }\r\n  \r\n  .modal-window>div {\r\n    width: 70%;\r\n    border-radius: 10px 10px 10px 10px;\r\n    position: relative;\r\n    margin: 60% 0 0 7%;\r\n    padding: 2rem;\r\n    background: #fff;\r\n    color: #444;\r\n  }\r\n  \r\n  .modal-window header {\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .modal-close {\r\n    color: #aaa;\r\n    line-height: 50px;\r\n    font-size: 30px;\r\n    margin-left: 10px;\r\n    position: absolute;\r\n    right: 0;\r\n    text-align: center;\r\n    top: 0;\r\n    width: 70px;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .modal-close:hover {\r\n    color: #000;\r\n  }\r\n  \r\n  .modal-window h2 {\r\n    font-size: 150%;\r\n    margin: 0 0 15px;\r\n    padding: 0 0 0 0;\r\n  }\r\n  \r\n  .coverHeading {\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    margin: 0 0 15px;\r\n    padding: 0 15px 0 15px;\r\n  }\r\n  \r\n  .minus{\r\n    position: relative;\r\n    width: 10%;\r\n  }\r\n  \r\n  .plus{\r\n  position: relative;\r\n  width: 10%;\r\n  }\r\n  \r\n  .checkmarkHolder {\r\n  width: 100px;\r\n  margin: 0 auto;\r\n  padding-top: 0px;\r\n  }\r\n  \r\n  .circle-loader {\r\n    margin-bottom: 0;\r\n    border: 3px solid rgba(0, 0, 0, 0.2);\r\n    border-left-color: #F2C843;\r\n    -webkit-animation: loader-spin 1.2s infinite linear;\r\n            animation: loader-spin 1.2s infinite linear;\r\n    position: relative;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    border-radius: 50%;\r\n    width: 7em;\r\n    height: 7em;\r\n  }\r\n  \r\n  .load-complete {\r\n    -webkit-animation: none;\r\n    animation: none;\r\n    border-color: #F2C843;\r\n    transition: border 500ms ease-out;\r\n  }\r\n  \r\n  .checkmarkHidden {\r\n    display: none;\r\n  }\r\n  \r\n  .checkmark{\r\n    display:auto;\r\n  }\r\n  \r\n  .checkmark.draw:after {\r\n    -webkit-animation-duration: 800ms;\r\n            animation-duration: 800ms;\r\n    -webkit-animation-timing-function: ease;\r\n            animation-timing-function: ease;\r\n    -webkit-animation-name: checkmark;\r\n            animation-name: checkmark;\r\n    -webkit-transform: scaleX(-1) rotate(135deg);\r\n            transform: scaleX(-1) rotate(135deg);\r\n  }\r\n  \r\n  .checkmark:after {\r\n    opacity: 1;\r\n    height: 3.5em;\r\n    width: 1.75em;\r\n    -webkit-transform-origin: left top;\r\n            transform-origin: left top;\r\n    border-right: 4px solid #F2C843;\r\n    border-top: 4px solid #F2C843;\r\n    content: '';\r\n    left: 1.75em;\r\n    top: 3.5em;\r\n    position: absolute;\r\n  }\r\n  \r\n  @-webkit-keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n  \r\n  @keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n  \r\n  @-webkit-keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n  \r\n  @keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0JBQW9CO0lBR3BCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7RUFDQSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWOztFQUVBO0VBQ0EsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEI7O0VBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUNBQWlDO0VBQ25DOztFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUNBO0lBQ0UsWUFBWTtFQUNkOztFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsNENBQW9DO1lBQXBDLG9DQUFvQztFQUN0Qzs7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0VBSUE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOztFQVBBO0lBQ0U7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtHQUM1QjtJQUNDO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7R0FDOUI7RUFDRDs7RUFDQTtJQUNFO1FBQ0ksU0FBUztRQUNULFFBQVE7UUFDUixVQUFVO0dBQ2Y7SUFDQztRQUNJLFNBQVM7UUFDVCxhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7RUFDRDs7RUFyQkE7SUFDRTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0VBQ0QiLCJmaWxlIjoiYXBwL19jb21wb25lbnRzL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1vZGFsLXdpbmRvdyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNzUpO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLXdpbmRvdzp0YXJnZXQge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtd2luZG93PmRpdiB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNjAlIDAgMCA3JTtcclxuICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICM0NDQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5tb2RhbC13aW5kb3cgaGVhZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtY2xvc2Uge1xyXG4gICAgY29sb3I6ICNhYWE7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLm1vZGFsLWNsb3NlOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAubW9kYWwtd2luZG93IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTUwJTtcclxuICAgIG1hcmdpbjogMCAwIDE1cHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gIH1cclxuICAuY292ZXJIZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweDtcclxuICAgIHBhZGRpbmc6IDAgMTVweCAwIDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5taW51c3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5wbHVze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAlO1xyXG4gIH1cclxuICBcclxuICAuY2hlY2ttYXJrSG9sZGVyIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmNpcmNsZS1sb2FkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjJDODQzO1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkZXItc3BpbiAxLjJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogN2VtO1xyXG4gICAgaGVpZ2h0OiA3ZW07XHJcbiAgfVxyXG4gIC5sb2FkLWNvbXBsZXRlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRjJDODQzO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDUwMG1zIGVhc2Utb3V0O1xyXG4gIH1cclxuICAuY2hlY2ttYXJrSGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5jaGVja21hcmt7XHJcbiAgICBkaXNwbGF5OmF1dG87XHJcbiAgfVxyXG4gIC5jaGVja21hcmsuZHJhdzphZnRlciB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGVja21hcms7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgcm90YXRlKDEzNWRlZyk7XHJcbiAgfVxyXG4gIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogMy41ZW07XHJcbiAgICB3aWR0aDogMS43NWVtO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjRjJDODQzO1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNGMkM4NDM7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGxlZnQ6IDEuNzVlbTtcclxuICAgIHRvcDogMy41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbG9hZGVyLXNwaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcclxuICAgIDAlIHtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgfVxyXG4gICAgMjAlIHtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIGhlaWdodDogMy41ZW07XHJcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/_components/popup/popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/popup/popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCoverPopUp\" style=\"text-align: center;\">\r\n  <div id=\"open-modal\" class=\"modal-window\">\r\n    <div *ngIf=\"!coverSubmissionLoader\">\r\n      <a (click)=\"showCoverPopUp = false\" title=\"Close\" class=\"modal-close\">&times;</a>\r\n      <h2>Report Cover</h2>\r\n      <div style=\"margin: 0 7px 0 0px;\">\r\n        <img (click)=\"decrementReportCover()\" class=\"minus\" src=\"./assets/images/minus.png\">\r\n        <span class=\"coverHeading\">${{reportCoverValue}}</span>\r\n        <img (click)=\"incrementReportCover()\" class=\"plus\" src=\"./assets/images/plus.png\">\r\n      </div>\r\n\r\n      <div (click)=\"reportCover()\" style=\"text-align: center\">\r\n        <span style=\"margin: 7px 0px 0px 0; width:200px; font-size:14px;\" class=\"btn btn--full\">Submit</span>\r\n      </div>\r\n\r\n    </div>\r\n    <div *ngIf=\"coverSubmissionLoader\">\r\n      <div style=\"width:100%;\">\r\n        <div class=\"checkmarkHolder\">\r\n          <!-- <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xml:space=\"preserve\" x=\"0px\"\r\n                      y=\"0px\" viewBox=\"0, 0, 100, 100\" id=\"checkmark\">\r\n                      <g transform=\"\">\r\n                        <circle id=\"path\" class=\"path\" fill=\"none\" stroke=\"#F2C843\" stroke-width=\"4\" stroke-miterlimit=\"10\" cx=\"50\" cy=\"50\" r=\"44\" />\r\n                        <circle id=\"fill\" class=\"fill\" fill=\"none\" stroke=\"#F2C843\" stroke-width=\"4\" stroke-miterlimit=\"10\" cx=\"50\" cy=\"50\" r=\"44\" />\r\n                        <polyline id=\"check\" class=\"check\" fill=\"none\" stroke=\"#F2C843\" stroke-width=\"8\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" points=\"70,35 45,65 30,52  \"\r\n                        />\r\n                      </g>\r\n                    </svg> -->\r\n\r\n          <div id=\"circleLoader\" class=\"circle-loader\">\r\n            <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"showFriendPopUp\" style=\"text-align: center;\">\r\n    <div id=\"open-modal\" class=\"modal-window\">\r\n      <div>\r\n        <a (click)=\"showFriendPopUp = false\" title=\"Close\" class=\"modal-close\">&times;</a>\r\n        <h2>{{friendUser.firstName}} {{friendUser.lastName}}</h2>\r\n        <div *ngIf=\"!isFriend && showRequestButton\">\r\n            <span *ngIf=\"!isRequestOut && !isRequestIn\" (click)=\"sendFriendRequest()\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\" class=\"btn btn--full\">Add Friend</span>  \r\n            <span *ngIf=\"isRequestOut\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\" class=\"btn btn--full\">Friend Request Sent!</span>  \r\n            <span *ngIf=\"isRequestIn\" (click)=\"acceptFriendRequest()\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\" class=\"btn btn--full\">Accept Friend Request</span>  \r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var PopupComponent = /** @class */ (function () {
    function PopupComponent(mainService, authService, db) {
        this.mainService = mainService;
        this.authService = authService;
        this.db = db;
        //Cover Variables
        this.showCoverPopUp = false;
        this.reportCoverValue = 0;
        this.coverSubmissionLoader = false;
        //Friend Variables
        this.showFriendPopUp = false;
        this.showRequestButton = false;
        this.friendUser = null;
        this.isFriend = false;
        this.isRequestOut = false;
        this.isRequestIn = false;
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
        this.mainService.showFriendPopUp.subscribe(function (value) {
            if (value == true) {
                _this.friendUser = _this.mainService.friendPopUpUser;
                //Load data 
                _this.loadUserFriendStatus();
                _this.showFriendPopUp = true;
                // //If user is friend activate friend mode
                // if(this.authService.currentUser.friendIds.indexOf(this.friendUser.uid) > -1){
                //   this.isFriend = true;
                // }
                // else {
                //   // if user is request activate request mode
                //   if(this.authService.currentUser.friendRequestOut.indexOf(this.friendUser.uid) > -1){
                //     this.isRequestOut = true;
                //   } else { // if user is request in activate
                //     if(this.authService.currentUser.friendRequestIn.indexOf(this.friendUser.uid) > -1) this.isRequestIn = true;
                //   }
                // } 
            }
        });
    };
    PopupComponent.prototype.loadUserFriendStatus = function () {
        //Check all three sources
        var _this = this;
        this.showRequestButton = false;
        this.isFriend = false;
        this.isRequestOut = false;
        this.isRequestIn = false;
        this.db.object('/userInfo/' + this.authService.currentUser.uid + '/friends/' + this.friendUser.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (object) {
            if (object) {
                _this.isFriend = _this.showRequestButton = false;
                return;
            }
            else {
                _this.showRequestButton = true;
                return;
            }
        });
        this.db.object('/userInfo/' + this.authService.currentUser.uid + '/friendRequestOut/' + this.friendUser.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (object) {
            if (object) {
                _this.isRequestOut = _this.showRequestButton = true;
                return;
            }
        });
        this.db.object('/userInfo/' + this.authService.currentUser.uid + '/friendRequestIn/' + this.friendUser.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (object) {
            if (object) {
                _this.isRequestIn = _this.showRequestButton = true;
                return;
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
    PopupComponent.prototype.hideFriendPopUp = function () {
        this.showFriendPopUp = false;
        this.mainService.showFriendPopUp.next(false);
    };
    PopupComponent.prototype.sendFriendRequest = function () {
        this.authService.currentUser.friendRequestOut.push(this.friendUser.uid);
        this.isRequestOut = true;
        this.authService.submitFriendRequest(this.friendUser.uid);
    };
    PopupComponent.prototype.acceptFriendRequest = function () {
        var arr = this.authService.currentUser.friendRequestIn;
        arr.splice(arr.indexOf(this.friendUser.uid), 1);
        this.authService.currentUser.friendIds.push(this.friendUser.uid);
        this.authService.addFriendData(this.friendUser.uid);
        this.isRequestIn = false;
        this.isFriend = true;
        this.authService.acceptFriendRequest(this.friendUser.uid);
    };
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/_components/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/_components/popup/popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvcmVmcmVzaC9yZWZyZXNoLmNvbXBvbmVudC5jc3MifQ== */"

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

module.exports = ".out{\r\n    -webkit-transform: translateX(0%);\r\n    transform: translateX(0%);\r\n    transition: -webkit-transform 150ms linear;\r\n    transition: transform 150ms linear;\r\n    transition: transform 150ms linear, -webkit-transform 150ms linear;\r\n    will-change: transform;\r\n}\r\n.in{\r\n    -webkit-transform: translateX(-100%);\r\n    transform: translateX(-100%);\r\n    transition: -webkit-transform 150ms linear;\r\n    transition: transform 150ms linear;\r\n    transition: transform 150ms linear, -webkit-transform 150ms linear;\r\n}\r\n.hidden{\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy91c2VyLXNsaWRlL3VzZXItc2xpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsMENBQWtDO0lBQWxDLGtDQUFrQztJQUFsQyxrRUFBa0M7SUFDbEMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLDBDQUFrQztJQUFsQyxrQ0FBa0M7SUFBbEMsa0VBQWtDO0FBQ3RDO0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImFwcC9fY29tcG9uZW50cy91c2VyLXNsaWRlL3VzZXItc2xpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXR7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGxpbmVhcjtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuLmlue1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi5oaWRkZW57XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/_components/user-slide/user-slide.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/user-slide/user-slide.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"userSlide\" class=\"panel panel-right panel-reveal out\" >\r\n  <div class=\"user_login_info\">\r\n\r\n    <div class=\"user_thumb\">\r\n\r\n      <div class=\"user_details\">\r\n        <p>Welcome, <span>{{authService.currentUser.firstName}}</span></p>\r\n      </div>\r\n      <div class=\"user_avatar\"><img src=\"./assets/images/avatar3.jpg\" alt=\"\" title=\"\" /></div>\r\n    </div>\r\n\r\n    <nav class=\"user-nav\">\r\n      <ul>\r\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/settings.png\" alt=\"\" title=\"\" /><span>Account\r\n              Settings</span></a></li>\r\n        <!-- <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/briefcase.png\" alt=\"\" title=\"\" /><span>My\r\n              Account</span></a></li> -->\r\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/users.png\" alt=\"\"\r\n              title=\"\" /><span>Friends</span><strong>12</strong></a></li>\r\n        <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/love.png\" alt=\"\"\r\n              title=\"\" /><span>Liked Bars</span><strong>5</strong></a></li>\r\n        <li><a (click)=\"logout()\"><img src=\"./assets/images/icons/gray/lock.png\" alt=\"\" title=\"\" /><span>Logout</span></a></li>\r\n      </ul>\r\n    </nav>\r\n  </div>\r\n</div>\r\n"

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
        //Friends
        this.friendIds = [];
        this.friends = [];
        this.friendRequestOut = [];
        this.friendRequestIn = [];
        //Attending
        this.barsAttending = [];
        // If constructing without auth just create blank user
        if (!auth) {
            return;
        }
        this.uid = auth.uid;
        this.email = auth.email;
        this.displayName = auth.displayName;
    }
    User.prototype.setFriendData = function (friendObject) {
        if (friendObject.uid)
            this.uid = friendObject.uid;
        if (friendObject.email)
            this.email = friendObject.email;
        if (friendObject.firstName)
            this.firstName = friendObject.firstName;
        if (friendObject.lastName)
            this.lastName = friendObject.lastName;
        if (friendObject.profilePicUrl)
            this.profilePicUrl = friendObject.profilePicUrl;
        if (friendObject.userName)
            this.userName = friendObject.userName;
        if (friendObject.barsAttending)
            this.barsAttending = Object.keys(friendObject.barsAttending).map(function (key) { return friendObject.barsAttending[key]; });
    };
    return User;
}());



/***/ }),

/***/ "./src/app/_pages/all-friends/all-friends.component.css":
/*!**************************************************************!*\
  !*** ./src/app/_pages/all-friends/all-friends.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX3BhZ2VzL2FsbC1mcmllbmRzL2FsbC1mcmllbmRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_pages/all-friends/all-friends.component.html":
/*!***************************************************************!*\
  !*** ./src/app/_pages/all-friends/all-friends.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"margin: 12% 5% 0% 5%;\" *ngIf=\"displayFriends\">\r\n\r\n  <!-- OPTIONAL Friend Request In -->\r\n  <div *ngIf=\"pendingFriends.length > 0\">\r\n    <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\r\n      <h3 style=\"padding: 0 0 0 0;\">\r\n        <span>Friend Request</span>\r\n      </h3>\r\n    </div>\r\n  \r\n    <div id=\"friendHolder\" *ngIf=\"displayFriends\">\r\n      <ul class=\"features_list\" *ngFor=\"let friend of pendingFriends\" style=\"padding: 0px 0 0 0; position:relative\">\r\n        <li (click)=\"openFriendPopUp(friend)\">\r\n          <div style=\"padding-bottom: 10px;\">\r\n            <span class=\"features_list_span\">\r\n              <img src=\"{{friend.profilePicUrl}}\">\r\n              <span class=\"features_list_span_text\" style=\"font-size: 110%;\">{{friend.firstName}} {{friend.lastName}} </span>\r\n            </span>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- HEADER -->\r\n  <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\r\n    <h3 style=\"padding: 0 0 0 0;\">\r\n      <span>Your Friends</span>\r\n    </h3>\r\n  </div>\r\n\r\n  <!-- FRIEND LIST -->\r\n  <div id=\"friendHolder\" >\r\n    <ul class=\"features_list\" *ngFor=\"let friend of friends\" style=\"padding: 0px 0 0 0; position:relative\">\r\n      <li (click)=\"openFriendPopUp(friend)\">\r\n        <div style=\"padding-bottom: 10px;\">\r\n          <span class=\"features_list_span\">\r\n              <img src=\"{{friend.profilePicUrl}}\">\r\n              <span class=\"features_list_span_text\" style=\"font-size: 110%;\">{{friend.firstName}} {{friend.lastName}} </span> \r\n          </span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"!displayFriends\" class=\"loadingHolder\">\r\n    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/_pages/all-friends/all-friends.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/_pages/all-friends/all-friends.component.ts ***!
  \*************************************************************/
/*! exports provided: AllFriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllFriendsComponent", function() { return AllFriendsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _models_User_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_models/User.Model */ "./src/app/_models/User.Model.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");





var AllFriendsComponent = /** @class */ (function () {
    function AllFriendsComponent(authService, mainService) {
        this.authService = authService;
        this.mainService = mainService;
        this.displayFriends = false;
        this.friends = [];
        this.pendingFriends = [];
        this.subscriptions = [];
    }
    AllFriendsComponent.prototype.ngOnInit = function () {
        this.loadFriendData();
        this.loadPendingFriendData();
        this.listenForAcceptFriendRequest();
    };
    AllFriendsComponent.prototype.loadFriendData = function () {
        var _this = this;
        this.authService.reloadFriendData();
        //Load Friend Data
        var subscription = this.authService.loadingFriendData.subscribe(function (value) {
            // once done loading
            if (value == "Done") {
                _this.friends = _this.authService.currentUser.friends;
                _this.displayFriends = true;
                _this.authService.loadingFriendData.next("None");
                subscription.unsubscribe();
            }
        });
        this.subscriptions.push(subscription);
    };
    AllFriendsComponent.prototype.loadPendingFriendData = function () {
        var _this = this;
        if (this.authService.currentUser.friendRequestIn.length > 0) {
            this.authService.loadGenericUserData(this.authService.currentUser.friendRequestIn).subscribe(function (responseList) {
                responseList.forEach(function (userObject) {
                    var user = new _models_User_Model__WEBPACK_IMPORTED_MODULE_3__["User"]();
                    user.setFriendData(userObject);
                    _this.pendingFriends.push(user);
                });
            });
        }
    };
    AllFriendsComponent.prototype.listenForAcceptFriendRequest = function () {
        var _this = this;
        var sub = this.mainService.acceptFriendRequestId.subscribe(function (value) {
            if (value != "") {
                for (var i = 0; i < _this.pendingFriends.length; i++) {
                    var user = _this.pendingFriends[i];
                    _this.pendingFriends.splice(i, 1);
                    break;
                }
            }
        });
        this.subscriptions.push(sub);
    };
    AllFriendsComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (sub) {
            sub.unsubscribe();
        });
    };
    AllFriendsComponent.prototype.openFriendPopUp = function (user) {
        this.mainService.activateFriendPopUp(user);
    };
    AllFriendsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-all-friends',
            template: __webpack_require__(/*! ./all-friends.component.html */ "./src/app/_pages/all-friends/all-friends.component.html"),
            styles: [__webpack_require__(/*! ./all-friends.component.css */ "./src/app/_pages/all-friends/all-friends.component.css"), __webpack_require__(/*! ../main/main.component.css */ "./src/app/_pages/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]])
    ], AllFriendsComponent);
    return AllFriendsComponent;
}());



/***/ }),

/***/ "./src/app/_pages/barlist/barlist.component.css":
/*!******************************************************!*\
  !*** ./src/app/_pages/barlist/barlist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX3BhZ2VzL2Jhcmxpc3QvYmFybGlzdC5jb21wb25lbnQuY3NzIn0= */"

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

/***/ "./src/app/_pages/friend-page/friend-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/_pages/friend-page/friend-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX3BhZ2VzL2ZyaWVuZC1wYWdlL2ZyaWVuZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX3BhZ2VzL2luaXQvaW5pdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_pages/init/init.component.html":
/*!*************************************************!*\
  !*** ./src/app/_pages/init/init.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-full-loading [loadingType]=\"1\"></app-full-loading>"

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
/* harmony import */ var _components_full_loading_full_loading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_components/full-loading/full-loading.module */ "./src/app/_components/full-loading/full-loading.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






//Import Components
var InitModule = /** @class */ (function () {
    function InitModule() {
    }
    InitModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _init_component__WEBPACK_IMPORTED_MODULE_2__["InitComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _components_full_loading_full_loading_module__WEBPACK_IMPORTED_MODULE_3__["FullLoadingModule"],
            ],
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

/***/ "./src/app/_pages/liked-bars/liked-bars.component.css":
/*!************************************************************!*\
  !*** ./src/app/_pages/liked-bars/liked-bars.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX3BhZ2VzL2xpa2VkLWJhcnMvbGlrZWQtYmFycy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_pages/liked-bars/liked-bars.component.html":
/*!*************************************************************!*\
  !*** ./src/app/_pages/liked-bars/liked-bars.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bar-page *ngIf=\"showBarPage\" [barPageIdChange]=\"barPageId\" [slideInBar]=\"barSlide\" [location]=\"'liked-bars'\">\r\n  </app-bar-page>\r\n  \r\n\r\n<div style=\"margin: 12% 5% 0% 5%;\">\r\n\r\n  <!-- HEADER -->\r\n  <div *ngIf=\"attendingBarCards.length>0\" style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\r\n    <h3 style=\"padding: 0 0 0 0;\">\r\n      <span>Bars You Are Attending Tonight</span>\r\n    </h3>\r\n  </div>\r\n\r\n  <!-- For each here -->\r\n  <ul class=\"shop_items\" style=\"padding-top: 13px;\">\r\n\r\n      <!-- BAR CARD -->\r\n      <li id=\"barCard\" *ngFor=\"let barCard of attendingBarCards\" (click)=\"onBarCardClick($event,barCard.barId)\">\r\n        <div class=\"shop_thumb\">\r\n          <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\r\n        </div>\r\n        <div class=\"shop_item_details\">\r\n          <h4>{{barCard.barName}}</h4>\r\n          <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\r\n            <li>\r\n              <span class=\"features_list_span\">\r\n                <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\r\n                <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\r\n              </span>\r\n            </li>\r\n            <li>\r\n              <span class=\"features_list_span\">\r\n                <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\r\n                <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n          <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\r\n            <!-- <app-like></app-like> -->\r\n            <img id=\"like\" [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\r\n              alt=\"\" title=\"\" />\r\n          </span>\r\n        </div>\r\n      </li>\r\n  \r\n    </ul>\r\n  \r\n\r\n  <!-- HEADER -->\r\n  <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\r\n    <h3 style=\"padding: 0 0 0 0;\">\r\n      <span>Liked Bars</span>\r\n    </h3>\r\n  </div>\r\n\r\n  <!-- For each here -->\r\n  <ul class=\"shop_items\" style=\"padding-top: 13px;\">\r\n\r\n    <!-- BAR CARD -->\r\n    <li id=\"barCard\" *ngFor=\"let barCard of barCards\" (click)=\"onBarCardClick($event,barCard.barId)\">\r\n      <div class=\"shop_thumb\">\r\n        <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\r\n      </div>\r\n      <div class=\"shop_item_details\">\r\n        <h4>{{barCard.barName}}</h4>\r\n        <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\r\n          <li>\r\n            <span class=\"features_list_span\">\r\n              <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\r\n              <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\r\n            </span>\r\n          </li>\r\n          <li>\r\n            <span class=\"features_list_span\">\r\n              <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\r\n              <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\r\n            </span>\r\n          </li>\r\n        </ul>\r\n        <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\r\n          <!-- <app-like></app-like> -->\r\n          <img id=\"like\" [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\r\n            alt=\"\" title=\"\" />\r\n        </span>\r\n      </div>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/_pages/liked-bars/liked-bars.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/_pages/liked-bars/liked-bars.component.ts ***!
  \***********************************************************/
/*! exports provided: LikedBarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedBarsComponent", function() { return LikedBarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");





var LikedBarsComponent = /** @class */ (function () {
    function LikedBarsComponent(db, authService, mainService) {
        this.db = db;
        this.authService = authService;
        this.mainService = mainService;
        this.barCards = [];
        this.attendingBarCards = [];
        //Bar Page Slide Variables
        this.barSlide = false;
        this.showBarPage = false;
        this.barPageId = 0;
        this.dayOfTheWeek = "Wednesday"; // Needs to be calculated
    }
    LikedBarsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.barSlideSub = this.mainService.barSlideLikedBars.subscribe(function (value) {
            _this.barSlide = value;
            if (value == false) {
                console.log("Run");
                _this.getBarCards();
            }
        });
    };
    LikedBarsComponent.prototype.ngOnDestroy = function () {
        this.barSlideSub.unsubscribe();
    };
    LikedBarsComponent.prototype.getBarCards = function () {
        var _this = this;
        this.barCards = [];
        this.attendingBarCards = [];
        this.db.list('barCards/' + this.dayOfTheWeek).valueChanges().subscribe(function (result) {
            result.forEach(function (item) {
                if (_this.authService.currentUser.barsAttending.indexOf(item.barId) > -1)
                    _this.attendingBarCards.push(item);
                else if (_this.authService.currentUser.likedBars.indexOf(item.barId) > -1)
                    _this.barCards.push(item);
            });
        });
    };
    LikedBarsComponent.prototype.onBarCardClick = function (event, barId) {
        if (event.target.id != undefined && event.target.id == "like")
            return;
        console.log(barId);
        this.barSlide = true;
        this.showBarPage = true;
        this.barPageId = barId;
        this.mainService.toggleBarSlideLikedBars();
    };
    LikedBarsComponent.prototype.likeBar = function (barCard) {
        this.authService.likeBar(barCard.barId);
        if (this.authService.currentUser.likedBars.indexOf(barCard.barId) < 0) {
            for (var i = 0; i < this.barCards.length; i++) {
                var car = this.barCards[i];
                if (car.barId == barCard.barId) {
                    this.barCards.splice(i, 1);
                    return;
                }
            }
        }
    };
    LikedBarsComponent.prototype.checkLikedStatus = function (barCard) {
        if (this.authService.currentUser.likedBars == undefined)
            return;
        if (this.authService.currentUser.likedBars.indexOf(barCard.barId) == -1) {
            return false;
        }
        else
            return true;
    };
    LikedBarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-liked-bars',
            template: __webpack_require__(/*! ./liked-bars.component.html */ "./src/app/_pages/liked-bars/liked-bars.component.html"),
            styles: [__webpack_require__(/*! ./liked-bars.component.css */ "./src/app/_pages/liked-bars/liked-bars.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]])
    ], LikedBarsComponent);
    return LikedBarsComponent;
}());



/***/ }),

/***/ "./src/app/_pages/login/login.component.css":
/*!**************************************************!*\
  !*** ./src/app/_pages/login/login.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.center-screen {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    text-align: center;\r\n    min-height: 100vh;\r\n  }\r\n\r\n\r\n\r\n.circle-loader {\r\n    margin-bottom: 0;\r\n    border: 3px solid rgba(0, 0, 0, 0.2);\r\n    border-left-color: #F2C843;\r\n    -webkit-animation: loader-spin 1.2s infinite linear;\r\n            animation: loader-spin 1.2s infinite linear;\r\n    position: relative;\r\n    display: inline-block;\r\n    vertical-align: top;\r\n    border-radius: 50%;\r\n    width: 7em;\r\n    height: 7em;\r\n  }\r\n\r\n\r\n\r\n.load-complete {\r\n    -webkit-animation: none;\r\n    animation: none;\r\n    border-color: #F2C843;\r\n    transition: border 500ms ease-out;\r\n  }\r\n\r\n\r\n\r\n.checkmarkHidden {\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n.checkmark{\r\n    display:auto;\r\n  }\r\n\r\n\r\n\r\n.checkmark.draw:after {\r\n    -webkit-animation-duration: 800ms;\r\n            animation-duration: 800ms;\r\n    -webkit-animation-timing-function: ease;\r\n            animation-timing-function: ease;\r\n    -webkit-animation-name: checkmark;\r\n            animation-name: checkmark;\r\n    -webkit-transform: scaleX(-1) rotate(135deg);\r\n            transform: scaleX(-1) rotate(135deg);\r\n  }\r\n\r\n\r\n\r\n.checkmark:after {\r\n    opacity: 1;\r\n    height: 3.5em;\r\n    width: 1.75em;\r\n    -webkit-transform-origin: left top;\r\n            transform-origin: left top;\r\n    border-right: 4px solid #F2C843;\r\n    border-top: 4px solid #F2C843;\r\n    content: '';\r\n    left: 1.75em;\r\n    top: 3.5em;\r\n    position: absolute;\r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n\r\n\r\n\r\n@keyframes loader-spin {\r\n    0% {\r\n        -webkit-transform: rotate(0deg);\r\n                transform: rotate(0deg);\r\n   }\r\n    100% {\r\n        -webkit-transform: rotate(360deg);\r\n                transform: rotate(360deg);\r\n   }\r\n  }\r\n\r\n\r\n\r\n@-webkit-keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n\r\n\r\n\r\n@keyframes checkmark {\r\n    0% {\r\n        height: 0;\r\n        width: 0;\r\n        opacity: 1;\r\n   }\r\n    20% {\r\n        height: 0;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    40% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n    100% {\r\n        height: 3.5em;\r\n        width: 1.75em;\r\n        opacity: 1;\r\n   }\r\n  }\r\n\r\n\r\n\r\n.collapse {\r\n    display: none;\r\n  }\r\n\r\n\r\n\r\n.collapsing {\r\n    position: relative;\r\n    height: 0;\r\n    overflow: hidden;\r\n    padding: 0 0 0 0;\r\n    transition-property: height, visibility;\r\n    transition-duration: 0.35s;\r\n    transition-timing-function: ease;\r\n  }\r\n\r\n\r\n\r\n.show {\r\n    display: block !important;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7OztBQUlGO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsbURBQTJDO1lBQTNDLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7RUFDYjs7OztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUNBQWlDO0VBQ25DOzs7O0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7Ozs7QUFDQTtJQUNFLFlBQVk7RUFDZDs7OztBQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsNENBQW9DO1lBQXBDLG9DQUFvQztFQUN0Qzs7OztBQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7OztBQUlBO0lBQ0U7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtHQUM1QjtJQUNDO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7R0FDOUI7RUFDRDs7OztBQVBBO0lBQ0U7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtHQUM1QjtJQUNDO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7R0FDOUI7RUFDRDs7OztBQUNBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7R0FDZjtJQUNDO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtFQUNEOzs7O0FBckJBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7R0FDZjtJQUNDO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtFQUNEOzs7O0FBR0E7SUFDRSxhQUFhO0VBQ2Y7Ozs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUdoQix1Q0FBdUM7SUFHdkMsMEJBQTBCO0lBRzFCLGdDQUFnQztFQUNsQzs7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6ImFwcC9fcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2VudGVyLXNjcmVlbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuXHJcblxyXG5cclxuLmNpcmNsZS1sb2FkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjJDODQzO1xyXG4gICAgYW5pbWF0aW9uOiBsb2FkZXItc3BpbiAxLjJzIGluZmluaXRlIGxpbmVhcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogN2VtO1xyXG4gICAgaGVpZ2h0OiA3ZW07XHJcbiAgfVxyXG4gIC5sb2FkLWNvbXBsZXRlIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xyXG4gICAgYW5pbWF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjRjJDODQzO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyIDUwMG1zIGVhc2Utb3V0O1xyXG4gIH1cclxuICAuY2hlY2ttYXJrSGlkZGVuIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5jaGVja21hcmt7XHJcbiAgICBkaXNwbGF5OmF1dG87XHJcbiAgfVxyXG4gIC5jaGVja21hcmsuZHJhdzphZnRlciB7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDgwMG1zO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGVja21hcms7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSkgcm90YXRlKDEzNWRlZyk7XHJcbiAgfVxyXG4gIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGhlaWdodDogMy41ZW07XHJcbiAgICB3aWR0aDogMS43NWVtO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7XHJcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjRjJDODQzO1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNGMkM4NDM7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGxlZnQ6IDEuNzVlbTtcclxuICAgIHRvcDogMy41ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgbG9hZGVyLXNwaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcclxuICAgIDAlIHtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgfVxyXG4gICAgMjAlIHtcclxuICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICB9XHJcbiAgICA0MCUge1xyXG4gICAgICAgIGhlaWdodDogMy41ZW07XHJcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICBoZWlnaHQ6IDMuNWVtO1xyXG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsYXBzZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcblxyXG4gIC5jb2xsYXBzaW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICAtby10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xyXG4gICAgLW8tdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zNXM7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gIH1cclxuXHJcbiAgLnNob3cge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/_pages/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/_pages/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"mobile_wrap\" class=\"accelerateMe\">\r\n\r\n  <div class=\"navbar navbar--fixed navbar--fixed-top navbar--bg\" style=\"background-color:black; z-index: 1001;\">\r\n    <div class=\"navbar__col navbar__col--title\">\r\n      <a href=\"index.html\">\r\n        <img src=\"./assets/images/TextLogo.png\" width=\"150px\" style=\"padding-top:16px; padding-left: 35px;\">\r\n      </a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div [hidden]=\"isLoading\">\r\n    <!-- Login Popup -->\r\n    <div class=\"popup popup-login\" style=\"z-index: 1000;\">\r\n      <div class=\"content-block\">\r\n        <div class=\"close_popup_button\">\r\n          <!-- <a href=\"#\" class=\"close-popup\" data-popup=\".popup-login\">\r\n          <img src=\"./assets/images/icons/black/menu_close.png\" alt=\"\" title=\"\" />\r\n        </a> -->\r\n        </div>\r\n        <div class=\"loginblock\" style=\"top: 23%;\">\r\n\r\n          <div class=\"collapse show\" id=\"login\">\r\n            <h4 style=\"font-weight: bold; font-size: 30px;\">LOGIN</h4>\r\n            <div class=\"loginform\">\r\n              <input id=\"logInEmail\" (click)=\"focus('logInEmail')\" type=\"text\" [(ngModel)]=\"logInUsername\" name=\"Username\" class=\"form_input required\"\r\n                placeholder=\"Email\" />\r\n              <input id=\"logInPassword\" (click)=\"focus('logInPassword')\" type=\"password\" [(ngModel)]=\"logInPassword\" name=\"Password\" class=\"form_input required\"\r\n                placeholder=\"Password\" />\r\n              <div class=\"forgot_pass\">\r\n                <a href=\"#\" data-popup=\".popup-forgot\" class=\"open-popup\" style=\"color: #012e77;\">Forgot Password?</a>\r\n              </div>\r\n              <input (click)=\"logIn()\" readonly=\"readonly\" class=\"form_submit\"  value=\"SIGN IN\" />\r\n\r\n              <div class=\"signup_bottom\">\r\n                <p>Don't have an account?</p>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"collapse\" id=\"signup\">\r\n            <h4 style=\"font-weight: bold; font-size: 30px;\">SIGN UP</h4>\r\n            <div class=\"loginform\">\r\n              <input id=\"signupFirstName\" (click)=\"focus('signupFirstName')\" type=\"text\" [(ngModel)]=\"createFirstName\" class=\"form_input required\"\r\n                placeholder=\"First Name\" />\r\n              <input id=\"signupLastName\" (click)=\"focus('signupLastName')\" type=\"text\" [(ngModel)]=\"createLastName\" class=\"form_input required\"\r\n              placeholder=\"Last Name (Optional)\" />\r\n              <input id=\"signupUsername\" (click)=\"focus('signupUsername')\" type=\"text\" [(ngModel)]=\"createUsername\"  class=\"form_input required\"\r\n                placeholder=\"Username\" />\r\n              <input id=\"signupEmail\" (click)=\"focus('signupEmail')\" type=\"text\" [(ngModel)]=\"createEmail\" name=\"Username\" class=\"form_input required\"\r\n                placeholder=\"Email\" />\r\n              <input id=\"signupPassword\" (click)=\"focus('signupPassword')\" type=\"password\" [(ngModel)]=\"createPassword\"  class=\"form_input required\"\r\n                placeholder=\"Password\" />\r\n              <input id=\"signupPasswordRepeat\" (click)=\"focus('signupPasswordRepeat')\" type=\"password\" [(ngModel)]=\"createPassword2\"  class=\"form_input required\"\r\n              placeholder=\"Repeat Password\" (focusout)=\"comparePasswords()\"/>\r\n\r\n              <p style=\"text-align: left; color:red;\" *ngIf=\"passwordsDoNotMatch\">Passwords do not match.</p>\r\n              \r\n              <input (click)=\"register()\" readonly=\"readonly\" class=\"form_submit\"  value=\"REGISTER\" />\r\n              <div class=\"signup_bottom\">\r\n                  <p>Have an account?</p>\r\n                </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"signup_bottom\" style=\"padding:0px; margin-top: -15px;\">\r\n            <a data-popup=\".popup-signup\" class=\"open-popup\"\r\n              (click)=\"goToSignUp()\" style=\"background-color: transparent; color:black; border: 1px black solid;\">{{switchPageText}}</a>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <!--Loading-->\r\n  <div [hidden]=\"!isLoading\" class=\"center-screen\">\r\n    <div id=\"circleLoader\" class=\"circle-loader\">\r\n      <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</body>"

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
    LoginComponent.prototype.focus = function (id) {
        console.log("focus");
        document.getElementById(id).focus();
        document.getElementById(id).addEventListener('keyup', function (e) {
            if (e.which == 13)
                this.blur();
        });
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

module.exports = ".barSlideIn{\r\n  background: white;\r\n  -webkit-transform: translateX(50%);\r\n          transform: translateX(50%);\r\n}\r\n\r\n.block_clicks{\r\n  pointer-events: none;\r\n  touch-action: none;\r\n}\r\n\r\n.out{\r\n  -webkit-transform: translateX(0%);\r\n  transform: translateX(0%);\r\n  transition: -webkit-transform 150ms linear;\r\n  transition: transform 150ms linear;\r\n  transition: transform 150ms linear, -webkit-transform 150ms linear;\r\n  will-change: transform;\r\n}\r\n\r\n.in{\r\n  -webkit-transform: translateX(-80%);\r\n  transform: translateX(-80%);\r\n  transition: -webkit-transform 150ms linear;\r\n  transition: transform 150ms linear;\r\n  transition: transform 150ms linear, -webkit-transform 150ms linear;\r\n}\r\n\r\n.pageClick{\r\n  position:absolute;\r\n  top:0;\r\n  left:0;\r\n  width: 15%;\r\n  height:100%;\r\n  z-index:15000;\r\n}\r\n\r\n.user_slide_hidden{\r\n  display: none;\r\n}\r\n\r\n.centered {\r\n    position: fixed;\r\n    top: 40%;\r\n    left: 50%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.slideCentered {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 150%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.slideCentered-hidden {\r\n    display:none;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 150%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.centered-hidden {\r\n    display:none;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    /* bring your own prefixes */\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n\r\n.lds-ring {\r\n    display: inline-block;\r\n    position: relative;\r\n    width: 64px;\r\n    height: 64px;\r\n  }\r\n\r\n.lds-ring div {\r\n    box-sizing: border-box;\r\n    display: block;\r\n    position: absolute;\r\n    width: 51px;\r\n    height: 51px;\r\n    margin: 6px;\r\n    border: 6px solid #eec536;\r\n    border-radius: 50%;\r\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\r\n    border-color: #eec536 transparent transparent transparent;\r\n  }\r\n\r\n.lds-ring div:nth-child(1) {\r\n    -webkit-animation-delay: -0.45s;\r\n            animation-delay: -0.45s;\r\n  }\r\n\r\n.lds-ring div:nth-child(2) {\r\n    -webkit-animation-delay: -0.3s;\r\n            animation-delay: -0.3s;\r\n  }\r\n\r\n.lds-ring div:nth-child(3) {\r\n    -webkit-animation-delay: -0.15s;\r\n            animation-delay: -0.15s;\r\n  }\r\n\r\n@-webkit-keyframes lds-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n@keyframes lds-ring {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n              transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n              transform: rotate(360deg);\r\n    }\r\n  }\r\n\r\n.slideInPage{\r\n    position:fixed;\r\n    padding:0;\r\n    margin:0;\r\n    z-index: 100;\r\n    top:50px;\r\n\r\n    -webkit-transform: translateX(100%);\r\n\r\n            transform: translateX(100%);\r\n\r\n  \r\n    width: 100%;\r\n    height: 100%;\r\n    background:white;\r\n  \r\n  }\r\n\r\n.picture-swipe-container {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n\r\n.picture-swipe-slide {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    background: #fff;\r\n    /* Center slide text vertically */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n.barDealsSection {\r\n    padding: 10px 0 0 0;\r\n    border-bottom:1px black solid;\r\n  }\r\n\r\n.preventScroll{\r\n  overflow: auto;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLDBDQUFrQztFQUFsQyxrQ0FBa0M7RUFBbEMsa0VBQWtDO0VBQ2xDLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsMENBQWtDO0VBQWxDLGtDQUFrQztFQUFsQyxrRUFBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsS0FBSztFQUNMLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFHRTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULDRCQUE0QjtJQUM1Qix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0FBR0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0FBR0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNFQUE4RDtZQUE5RCw4REFBOEQ7SUFDOUQseURBQXlEO0VBQzNEOztBQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7QUFDQTtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztBQUNBO0lBQ0U7TUFDRSwrQkFBdUI7Y0FBdkIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBeUI7Y0FBekIseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBUEE7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixRQUFROztJQUVSLG1DQUEyQjs7WUFBM0IsMkJBQTJCOzs7SUFHM0IsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7O0VBRWxCOztBQUdBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUlqQyxhQUFhO0lBSWIsdUJBQXVCO0lBSXZCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7O0FBR0Y7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImFwcC9fcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyU2xpZGVJbntcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcclxufVxyXG5cclxuLmJsb2NrX2NsaWNrc3tcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB0b3VjaC1hY3Rpb246IG5vbmU7XHJcbn1cclxuXHJcbi5vdXR7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGxpbmVhcjtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG59XHJcbi5pbntcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtODAlKTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwJSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGxpbmVhcjtcclxufVxyXG5cclxuLnBhZ2VDbGlja3tcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbiAgd2lkdGg6IDE1JTtcclxuICBoZWlnaHQ6MTAwJTtcclxuICB6LWluZGV4OjE1MDAwO1xyXG59XHJcblxyXG4udXNlcl9zbGlkZV9oaWRkZW57XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4gIFxyXG4gIFxyXG4gIC5jZW50ZXJlZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlQ2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAxNTAlO1xyXG4gICAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICAuc2xpZGVDZW50ZXJlZC1oaWRkZW4ge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAxNTAlO1xyXG4gICAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuY2VudGVyZWQtaGlkZGVuIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICBcclxuICBcclxuICAubGRzLXJpbmcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXYge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDUxcHg7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICNlZWM1MzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcclxuICAgIGJvcmRlci1jb2xvcjogI2VlYzUzNiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40NXM7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XHJcbiAgfVxyXG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGxkcy1yaW5nIHtcclxuICAgIDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnNsaWRlSW5QYWdle1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHRvcDo1MHB4O1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuXHJcbiAgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6d2hpdGU7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5waWN0dXJlLXN3aXBlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgLnBpY3R1cmUtc3dpcGUtc2xpZGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIC8qIENlbnRlciBzbGlkZSB0ZXh0IHZlcnRpY2FsbHkgKi9cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuYmFyRGVhbHNTZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBibGFjayBzb2xpZDtcclxuICB9XHJcblxyXG5cclxuLnByZXZlbnRTY3JvbGx7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcblxyXG4iXX0= */"

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
            console.log(_this.mainService.barlistUrl);
            if (result == 0) {
                _this.router.navigate([_this.mainService.barlistUrl]);
            }
            else if (result == 1) {
                _this.router.navigate([_this.mainService.searchUrl]);
            }
            else if (result == 2) {
                _this.router.navigate(["/main/all-friends"]);
            }
            else if (result == 3) {
                _this.router.navigate(["/main/liked-bars"]);
            }
            else if (result == 4) {
                _this.router.navigate(["/main/settings"]);
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../_pages/barlist/barlist.component */ "./src/app/_pages/barlist/barlist.component.ts");
/* harmony import */ var _pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../_pages/search/search.component */ "./src/app/_pages/search/search.component.ts");
/* harmony import */ var _components_user_slide_user_slide_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../_components/user-slide/user-slide.component */ "./src/app/_components/user-slide/user-slide.component.ts");
/* harmony import */ var _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../_components/barpage-deals/barpage-deals.component */ "./src/app/_components/barpage-deals/barpage-deals.component.ts");
/* harmony import */ var _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../_components/barpage-cover/barpage-cover.component */ "./src/app/_components/barpage-cover/barpage-cover.component.ts");
/* harmony import */ var _components_barpage_friends_barpage_friends_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../_components/barpage-friends/barpage-friends.component */ "./src/app/_components/barpage-friends/barpage-friends.component.ts");
/* harmony import */ var _components_barpage_map_barpage_map_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../_components/barpage-map/barpage-map.component */ "./src/app/_components/barpage-map/barpage-map.component.ts");
/* harmony import */ var _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../_components/popup/popup.component */ "./src/app/_components/popup/popup.component.ts");
/* harmony import */ var _pages_liked_bars_liked_bars_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../_pages/liked-bars/liked-bars.component */ "./src/app/_pages/liked-bars/liked-bars.component.ts");
/* harmony import */ var _components_full_loading_full_loading_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../_components/full-loading/full-loading.module */ "./src/app/_components/full-loading/full-loading.module.ts");




//Import Components















//Import Modules

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
                _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_10__["BarlistComponent"],
                _pages_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _pages_liked_bars_liked_bars_component__WEBPACK_IMPORTED_MODULE_18__["LikedBarsComponent"],
                _components_user_slide_user_slide_component__WEBPACK_IMPORTED_MODULE_12__["UserSlideComponent"],
                _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_13__["BarpageDealsComponent"],
                _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_14__["BarpageCoverComponent"],
                _components_barpage_friends_barpage_friends_component__WEBPACK_IMPORTED_MODULE_15__["BarpageFriendsComponent"],
                _components_barpage_map_barpage_map_component__WEBPACK_IMPORTED_MODULE_16__["BarpageMapComponent"],
                _components_popup_popup_component__WEBPACK_IMPORTED_MODULE_17__["PopupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _components_full_loading_full_loading_module__WEBPACK_IMPORTED_MODULE_19__["FullLoadingModule"]
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

module.exports = "input[type=text].instaSearch {\r\n    font-family: proxima-nove, 'Helvetica Neue', Arial, Helvetica, sans-serif;\r\n    font-size: 15px;\r\n    font-weight: 300;\r\n    letter-spacing: .5px;\r\n    height: 30px;\r\n    border-radius: 15px;\r\n    text-align: left;\r\n    padding-left: 40%;\r\n    border: 1px solid #edeeee;\r\n    background: #fafafa;\r\n    background-image: url('glass.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 13px 13px;\r\n    background-position: 38% 47%;\r\n    outline: none;\r\n    width: 55%;\r\n    margin-top: 10px;\r\n    margin-bottom: 15px;\r\n    color: #c9cbcc;\r\n}\r\ninput[type=text]:focus.instaSearch {\r\n    text-align: left;\r\n    padding-left: 30px;\r\n    width:88%;\r\n    background: #ffffff;\r\n    background-image: url('glass.png');\r\n    background-repeat: no-repeat;\r\n    background-size: 13px 13px;\r\n    background-position: 15px 7px;\r\n    color: #000;\r\n}\r\ninput:focus::-webkit-input-placeholder {\r\n     color: #c9cbcc;\r\n}\r\ninput:focus::-moz-placeholder {\r\n     color: #c9cbcc;\r\n}\r\ninput:focus::-moz-placeholder {   /* Older versions of Firefox */\r\n     color: #c9cbcc;\r\n}\r\ninput:focus::-ms-input-placeholder { \r\n     color: #c9cbcc;\r\n}\r\n.searchWrap{\r\n    padding-top: 20%;\r\n    padding-left: 4%;\r\n}\r\n/* Add a black background color to the top navigation */\r\n.topnav {\r\n    margin-top: 50px;\r\n    position: absolute;\r\n    width: 100%;\r\n    right: 0%;\r\n    background-color: transparent;\r\n    overflow: hidden;\r\n  }\r\n.adjust {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n/* Style the links inside the navigation bar */\r\n.holder  {\r\n    float: left;\r\n    color: black;\r\n    text-align: center;\r\n    padding: 3px 0px;\r\n    width: 50%;\r\n    text-decoration: none;\r\n    font-size: 17px;\r\n}\r\n/* Add a color to the active/current link */\r\n.active {\r\n    background-color: transparent;\r\n    color: black;\r\n    border-bottom: 2px black solid;\r\n}\r\n.barHolder{\r\n    position: absolute;\r\n    width:100%;\r\n    -webkit-transform: translateX(0%);\r\n\t\t\ttransform: translateX(0%);\r\n\ttransition: -webkit-transform 300ms linear;\r\n\ttransition: transform 300ms linear;\r\n\ttransition: transform 300ms linear, -webkit-transform 300ms linear;\r\n\twill-change: transform;\r\n\r\n}\r\n.bHHidden{\r\n    -webkit-transform: translateX(-100%);\r\n    transform: translateX(-100%);\r\n    transition: -webkit-transform 300ms linear;\r\n    transition: transform 300ms linear;\r\n    transition: transform 300ms linear, -webkit-transform 300ms linear;\r\n    will-change: transform;\r\n}\r\n.userHolder{\r\n    position: absolute;\r\n    width:100%;\r\n    -webkit-transform: translateX(100%);\r\n\t\t\ttransform: translateX(100%);\r\n\ttransition: -webkit-transform 300ms linear;\r\n\ttransition: transform 300ms linear;\r\n\ttransition: transform 300ms linear, -webkit-transform 300ms linear;\r\n    will-change: transform;\r\n}\r\n.uHOpen{\r\n    -webkit-transform: translateX(0%);\r\n    transform: translateX(0%);\r\n    transition: -webkit-transform 300ms linear;\r\n    transition: transform 300ms linear;\r\n    transition: transform 300ms linear, -webkit-transform 300ms linear;\r\n    will-change: transform;\r\n}\r\n.displayNone{\r\n    display: none;\r\n}\r\n.displayInherit{\r\n    display:inherit;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUVBQXlFO0lBQ3pFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtDQUF5RDtJQUN6RCw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtDQUF5RDtJQUN6RCw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7QUFFQTtLQUNLLGNBQWM7QUFDbkI7QUFDQTtLQUNLLGNBQWM7QUFDbkI7QUFDQSxrQ0FBa0MsOEJBQThCO0tBQzNELGNBQWM7QUFDbkI7QUFDQTtLQUNLLGNBQWM7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQSx1REFBdUQ7QUFDdkQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGdCQUFnQjtFQUNsQjtBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBLDhDQUE4QztBQUM5QztJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFHQSwyQ0FBMkM7QUFDM0M7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQ0FBaUM7R0FDbEMseUJBQXlCO0NBQzNCLDBDQUFrQztDQUFsQyxrQ0FBa0M7Q0FBbEMsa0VBQWtDO0NBQ2xDLHNCQUFzQjs7QUFFdkI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsMENBQWtDO0lBQWxDLGtDQUFrQztJQUFsQyxrRUFBa0M7SUFDbEMsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1DQUFtQztHQUNwQywyQkFBMkI7Q0FDN0IsMENBQWtDO0NBQWxDLGtDQUFrQztDQUFsQyxrRUFBa0M7SUFDL0Isc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLDBDQUFrQztJQUFsQyxrQ0FBa0M7SUFBbEMsa0VBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAvX3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0uaW5zdGFTZWFyY2gge1xyXG4gICAgZm9udC1mYW1pbHk6IHByb3hpbWEtbm92ZSwgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjVweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0MCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZWVlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nbGFzcy5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEzcHggMTNweDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDM4JSA0NyU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgd2lkdGg6IDU1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgY29sb3I6ICNjOWNiY2M7XHJcbn1cclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cy5pbnN0YVNlYXJjaCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgd2lkdGg6ODglO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZ2xhc3MucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTNweCAxM3B4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCA3cHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4gXHJcbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgICBjb2xvcjogI2M5Y2JjYztcclxufVxyXG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICAgY29sb3I6ICNjOWNiY2M7XHJcbn1cclxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIgeyAgIC8qIE9sZGVyIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cclxuICAgICBjb2xvcjogI2M5Y2JjYztcclxufVxyXG5pbnB1dDpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgXHJcbiAgICAgY29sb3I6ICNjOWNiY2M7XHJcbn1cclxuXHJcbi5zZWFyY2hXcmFwe1xyXG4gICAgcGFkZGluZy10b3A6IDIwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbn1cclxuXHJcbi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcbi50b3BuYXYge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcmlnaHQ6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuXHJcbi5hZGp1c3Qge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbn1cclxuICBcclxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cclxuLmhvbGRlciAge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzcHggMHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuXHJcbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXHJcbi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggYmxhY2sgc29saWQ7XHJcbn1cclxuXHJcblxyXG4uYmFySG9sZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgbGluZWFyO1xyXG5cdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblxyXG59XHJcblxyXG4uYkhIaWRkZW57XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi51c2VySG9sZGVye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi51SE9wZW57XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbn1cclxuXHJcbi5kaXNwbGF5Tm9uZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kaXNwbGF5SW5oZXJpdHtcclxuICAgIGRpc3BsYXk6aW5oZXJpdDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/_pages/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/_pages/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bar-page *ngIf=\"showBarPage\" [barPageIdChange]=\"barPageId\" [slideInBar]=\"barSlide\" [location]=\"'search'\">\r\n</app-bar-page>\r\n\r\n\r\n\r\n<div class=\"topnav\">\r\n  <div class=\"adjust\">\r\n    <div (click)=\"setActiveSearchPage(0)\" [className]=\"activeNavIcon(0)? 'holder active'  : 'holder'\">\r\n      <span>Bars</span>\r\n    </div>\r\n    <div (click)=\"setActiveSearchPage(1)\" [className]=\"activeNavIcon(1)? 'holder active'  : 'holder'\">\r\n      <span>Users</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"searchWrap\">\r\n\r\n  <input (click)=\"focus()\" (focusout)=\"search()\" [(ngModel)]=\"searchString\" type=\"text\" id=\"subject\" class=\"instaSearch\"\r\n    value=\"\" placeholder=\"Search\">\r\n\r\n</div>\r\n\r\n\r\n\r\n<div class=\"barHolder\" id=\"barHolder\">\r\n  <!-- For each here -->\r\n  <div style=\"width:92%; margin: 0 4%;\">\r\n    <ul class=\"shop_items\">\r\n\r\n      <!-- BAR CARD -->\r\n      <li id=\"barCard\" *ngFor=\"let barCard of barResults\" (click)=\"onBarCardClick($event,barCard.barId)\">\r\n        <div class=\"shop_thumb\">\r\n          <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\r\n        </div>\r\n        <div class=\"shop_item_details\">\r\n          <h4>{{barCard.barName}}</h4>\r\n          <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\r\n            <li>\r\n              <span class=\"features_list_span\">\r\n                <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\r\n                <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\r\n              </span>\r\n            </li>\r\n            <li>\r\n              <span class=\"features_list_span\">\r\n                <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\r\n                <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\r\n              </span>\r\n            </li>\r\n          </ul>\r\n          <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\r\n            <!-- <app-like></app-like> -->\r\n            <img id=\"like\"\r\n              [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\r\n              alt=\"\" title=\"\" />\r\n          </span>\r\n        </div>\r\n      </li>\r\n\r\n\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"userHolder\" id=\"userHolder\">\r\n  <div id=\"headDeals\">\r\n    <ul class=\"features_list\" *ngFor=\"let userRes of userResults\" style=\"padding: 0px 0 0 0; position:relative\">\r\n      <li (click) = \"openFriendPopUp(userRes.about)\">\r\n        <div style=\"padding-bottom: 10px;\">\r\n          <span class=\"features_list_span\">\r\n            <!-- <img src={{userRes.barPicture1Url}} alt=\"\" title=\"\" /> -->\r\n            <span class=\"features_list_span_text\">{{userRes.about.firstName}}</span>\r\n          </span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");
/* harmony import */ var _models_User_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_models/User.Model */ "./src/app/_models/User.Model.ts");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(db, auth, mainService) {
        this.db = db;
        this.auth = auth;
        this.mainService = mainService;
        //Bar Page Slide Variables
        this.barSlide = false;
        this.showBarPage = false;
        this.barPageId = 0;
        this.searchString = "";
        this.activeSearchPage = 0;
        this.lastSearchedBars = "";
        this.lastSearchedUsers = "";
        this.barResults = [];
        this.userResults = [];
        this.saveUserResults = []; //Idk why barResults dont need this but whatever
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
            //After animation clear array so no scrolling happens 
            var self = this;
            setTimeout(function () {
                self.saveUserResults = self.userResults;
                self.userResults = [];
            }, 400);
        }
        if (index == 1) {
            if (this.searchString != this.lastSearchedUsers)
                this.userResults = [];
            else
                this.userResults = this.saveUserResults;
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
        if (event.target.id != undefined && event.target.id == "like")
            return;
        console.log(barId);
        this.barSlide = true;
        this.showBarPage = true;
        this.barPageId = barId;
        this.mainService.toggleBarSlideSearch();
    };
    SearchComponent.prototype.likeBar = function (barCard) {
    };
    SearchComponent.prototype.checkLikedStatus = function (barCard) {
    };
    SearchComponent.prototype.openFriendPopUp = function (userRawData) {
        var newUser = new _models_User_Model__WEBPACK_IMPORTED_MODULE_5__["User"]();
        newUser.setFriendData(userRawData);
        this.mainService.activateFriendPopUp(newUser);
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/_pages/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/_pages/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/_pages/settings/settings.component.css":
/*!********************************************************!*\
  !*** ./src/app/_pages/settings/settings.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_pages/settings/settings.component.html":
/*!*********************************************************!*\
  !*** ./src/app/_pages/settings/settings.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"margin-top: 20%\">\n  settings works!\n</p>\n"

/***/ }),

/***/ "./src/app/_pages/settings/settings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/_pages/settings/settings.component.ts ***!
  \*******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingsComponent = /** @class */ (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/_pages/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/_pages/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
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
/* harmony import */ var _models_User_Model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_models/User.Model */ "./src/app/_models/User.Model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main.service */ "./src/app/_services/main.service.ts");





 // RxJS 6 syntax


var AuthService = /** @class */ (function () {
    function AuthService(mainService, dbA, afAuth) {
        this.mainService = mainService;
        this.afAuth = afAuth;
        this.currentUser = null;
        this.authStateValue = false;
        this.loadingFriendData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]("None");
        this.subUser = false;
        this.af = afAuth;
        this.db = dbA;
        this.authStateSet = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
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
            //Get Attending Bars
            if (userInfo.about.hasOwnProperty("barsAttending")) {
                _this.currentUser.barsAttending = Object.keys(userInfo.about.barsAttending).map(function (key) { return userInfo.about.barsAttending[key]; });
            }
            //Get Liked Cards
            if (userInfo.hasOwnProperty('likedBars')) {
                _this.getLikedCards(userInfo.likedBars);
            }
            //Get Friend Ids
            if (userInfo.friends) {
                _this.currentUser.friendIds = Object.keys(userInfo.friends).map(function (key) { return userInfo.friends[key]; });
                _this.loadAllUserFriendData();
            }
            // Listen for Friend Request
            _this.listenForFriendRequest();
            //Get About Info
            _this.currentUser.firstName = userInfo.about.firstName;
            //Mark As Finished
            _this.authStateValue = true;
            _this.authStateSet.next(true);
        });
    };
    AuthService.prototype.getUserInfo = function () {
        var uid = this.currentUser.uid;
        var response0 = this.db.object('barCardCount').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
        var response1 = this.db.object('userInfo/' + uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])([response0, response1]);
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
                profilePicUrl: "null",
                uid: user.uid
            }
        });
    };
    AuthService.prototype.logIn = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logOut = function () {
        this.afAuth.auth.signOut();
        // Refresh page to wipe all info, might need to rework later
        window.location.href = "index.html";
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
    AuthService.prototype.markAttending = function (barId) {
        var barIdString = barId.toString();
        var uid = this.currentUser.uid;
        var index = this.currentUser.barsAttending.indexOf(barId);
        //If bar was not attended before
        if (index == -1) {
            this.currentUser.barsAttending.push(barId);
            var itemRef = this.db.object('userInfo/' + uid + '/about/barsAttending');
            itemRef.set(this.currentUser.barsAttending).then(function (_) {
            });
        }
        //If bar was attended before
        else {
            this.currentUser.barsAttending.splice(index, 1);
            var itemRef = this.db.object('userInfo/' + uid + '/about/barsAttending');
            itemRef.set(this.currentUser.barsAttending).then(function (_) {
            });
        }
    };
    AuthService.prototype.checkUniqueUser = function (username) {
        return this.db.list('userInfo', function (ref) { return ref.orderByChild('about/userName').limitToFirst(10).equalTo(username); }).valueChanges();
    };
    // Should be called whenever loading a component that shows friend data
    AuthService.prototype.reloadFriendData = function () {
        var _this = this;
        this.db.list('userInfo/' + this.currentUser.uid + '/friends').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (data) {
            _this.currentUser.friendIds = data;
            if (_this.currentUser.friendIds.length == 0) {
                _this.loadingFriendData.next("Done");
                return;
            }
            _this.loadAllUserFriendData();
        });
    };
    // Loads all friend data from friend ids
    AuthService.prototype.loadAllUserFriendData = function () {
        var _this = this;
        this.loadingFriendData.next("Loading");
        var requestArray = [];
        for (var i = 0; i < this.currentUser.friendIds.length; i++) {
            var id = this.currentUser.friendIds[i];
            var request = this.db.object('userInfo/' + id + '/about').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
            requestArray.push(request);
        }
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(requestArray).subscribe(function (responseList) {
            _this.currentUser.friends = [];
            responseList.forEach(function (userObject) {
                var friendUser = new _models_User_Model__WEBPACK_IMPORTED_MODULE_4__["User"]();
                friendUser.setFriendData(userObject);
                _this.currentUser.friends.push(friendUser);
            });
            _this.loadingFriendData.next("Done");
            _this.loadingFriendData.next("None");
        });
    };
    //Function that takes array of uids and returns a fork join of user data
    AuthService.prototype.loadGenericUserData = function (uidArray) {
        var requestArray = [];
        console.log(uidArray);
        for (var i = 0; i < uidArray.length; i++) {
            var id = uidArray[i];
            var request = this.db.object('userInfo/' + id + '/about').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1));
            requestArray.push(request);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(requestArray);
    };
    //Load data for a new friend and append to the user array
    AuthService.prototype.addFriendData = function (id) {
        var _this = this;
        this.db.object('userInfo/' + id + '/about').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1)).subscribe(function (userObject) {
            var friendUser = new _models_User_Model__WEBPACK_IMPORTED_MODULE_4__["User"]();
            friendUser.setFriendData(userObject);
            _this.currentUser.friends.push(friendUser);
        });
    };
    AuthService.prototype.removeFriend = function (uid) {
        //Remove from id array
        for (var i = 0; i < this.currentUser.friendIds.length; i++) {
            var userName = this.currentUser.friendIds[i];
            if (uid === userName)
                this.currentUser.friendIds.splice(i, 1);
            break;
        }
        //Remove from data array
        for (var i = 0; i < this.currentUser.friends.length; i++) {
            var user = this.currentUser.friends[i];
            if (uid === user.uid)
                this.currentUser.friends.splice(i, 1);
            break;
        }
    };
    AuthService.prototype.listenForFriendRequest = function () {
        var _this = this;
        this.db.object('/userInfo/' + this.currentUser.uid + '/friendRequestIn').valueChanges().subscribe(function (object) {
            if (!object) {
                _this.currentUser.friendRequestIn = [];
                return;
            }
            _this.currentUser.friendRequestIn = Object.keys(object).map(function (key) { return object[key]; });
        });
    };
    AuthService.prototype.submitFriendRequest = function (uid) {
        this.db.object('/userInfo/' + this.currentUser.uid + '/friendRequestOut/' + uid).set(uid);
        this.db.object('/userInfo/' + uid + '/friendRequestIn/' + this.currentUser.uid).set(this.currentUser.uid);
    };
    AuthService.prototype.acceptFriendRequest = function (uid) {
        this.db.object('/userInfo/' + this.currentUser.uid + '/friendRequestIn/' + uid).remove();
        this.db.object('/userInfo/' + uid + '/friendRequestOut/' + this.currentUser.uid).remove();
        this.db.object('userInfo/' + this.currentUser.uid + '/friends/' + uid).set(uid);
        this.db.object('userInfo/' + uid + '/friends/' + this.currentUser.uid).set(this.currentUser.uid);
        //If we are on the all friends page reset page
        if (this.mainService.currentPageValue == 2) {
            this.mainService.acceptFriendRequestId.next(uid);
        }
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
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
        this.currentBarPageId = 0;
        this.barSlideValue = false;
        this.barSlideLikedBars = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.userSlideValue = false;
        this.acceptFriendRequestId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("");
        this.barlistUrl = "main/barlist/deals";
        this.searchUrl = "main/search/deals";
        this.likedBarsUrl = "main/liked-bars/deals";
        //Popups
        this.showCoverPopUpValue = false;
        this.reportCoverValue = 0;
        this.showFriendPopUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.friendPopUpUser = null;
        this.barSlide = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.barSlideSearch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.currentPage = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](-1);
        this.userSlide = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.showCoverPopUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.reportCoverSwitch = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    MainService.prototype.reverseBarSlide = function () {
        this.barSlideValue = !this.barSlideValue;
        this.barSlide.next(this.barSlideValue);
    };
    MainService.prototype.toggleBarSlideSearch = function () {
        console.log(!this.barSlideSearch.getValue());
        this.barSlideSearch.next(!this.barSlideSearch.getValue());
    };
    MainService.prototype.toggleBarSlideLikedBars = function () {
        console.log(!this.barSlideLikedBars.getValue());
        this.barSlideLikedBars.next(!this.barSlideLikedBars.getValue());
    };
    MainService.prototype.changePage = function (num) {
        if (this.userSlideValue == true)
            this.changeUserSlide();
        if (this.currentPageValue == num)
            return;
        //Saved state pages mneed to log their url
        if (this.router.url.includes("/main/barlist"))
            this.barlistUrl = this.router.url;
        else if (this.router.url.includes("/main/search"))
            this.searchUrl = this.router.url;
        else if (this.router.url.includes("/main/liked-bars"))
            this.likedBarsUrl = this.router.url;
        this.currentPageValue = num;
        this.currentPage.next(num);
        // Subscription in main.component.ts handles behaviour
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
    MainService.prototype.activateFriendPopUp = function (user) {
        this.friendPopUpUser = user;
        this.showFriendPopUp.next(true);
    };
    MainService.prototype.hideFriendPopUp = function () {
        this.friendPopUpUser = null;
        this.showFriendPopUp.next(false);
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
/* harmony import */ var _components_barpage_friends_barpage_friends_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_components/barpage-friends/barpage-friends.component */ "./src/app/_components/barpage-friends/barpage-friends.component.ts");
/* harmony import */ var _components_barpage_map_barpage_map_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_components/barpage-map/barpage-map.component */ "./src/app/_components/barpage-map/barpage-map.component.ts");
/* harmony import */ var _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_components/refresh/refresh.component */ "./src/app/_components/refresh/refresh.component.ts");
/* harmony import */ var _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_pages/friend-page/friend-page.component */ "./src/app/_pages/friend-page/friend-page.component.ts");
/* harmony import */ var _pages_all_friends_all_friends_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_pages/all-friends/all-friends.component */ "./src/app/_pages/all-friends/all-friends.component.ts");
/* harmony import */ var _pages_liked_bars_liked_bars_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_pages/liked-bars/liked-bars.component */ "./src/app/_pages/liked-bars/liked-bars.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_pages/settings/settings.component */ "./src/app/_pages/settings/settings.component.ts");

















var routes = [
    { path: 'main', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        children: [
            {
                path: 'barlist',
                component: _pages_barlist_barlist_component__WEBPACK_IMPORTED_MODULE_6__["BarlistComponent"],
                children: [
                    { path: '', redirectTo: 'deals', pathMatch: 'full' },
                    { path: 'deals', component: _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_8__["BarpageDealsComponent"] },
                    { path: 'cover', component: _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_9__["BarpageCoverComponent"] },
                    { path: 'friends', component: _components_barpage_friends_barpage_friends_component__WEBPACK_IMPORTED_MODULE_10__["BarpageFriendsComponent"] },
                    { path: 'map', component: _components_barpage_map_barpage_map_component__WEBPACK_IMPORTED_MODULE_11__["BarpageMapComponent"] }
                ]
            },
            {
                path: 'search',
                component: _pages_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                children: [
                    { path: '', redirectTo: 'deals', pathMatch: 'full' },
                    { path: 'deals', component: _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_8__["BarpageDealsComponent"] },
                    { path: 'cover', component: _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_9__["BarpageCoverComponent"] },
                    { path: 'friends', component: _components_barpage_friends_barpage_friends_component__WEBPACK_IMPORTED_MODULE_10__["BarpageFriendsComponent"] },
                    { path: 'map', component: _components_barpage_map_barpage_map_component__WEBPACK_IMPORTED_MODULE_11__["BarpageMapComponent"] }
                ]
            },
            {
                path: 'all-friends',
                component: _pages_all_friends_all_friends_component__WEBPACK_IMPORTED_MODULE_14__["AllFriendsComponent"]
            },
            {
                path: 'liked-bars',
                component: _pages_liked_bars_liked_bars_component__WEBPACK_IMPORTED_MODULE_15__["LikedBarsComponent"],
                children: [
                    { path: '', redirectTo: 'deals', pathMatch: 'full' },
                    { path: 'deals', component: _components_barpage_deals_barpage_deals_component__WEBPACK_IMPORTED_MODULE_8__["BarpageDealsComponent"] },
                    { path: 'cover', component: _components_barpage_cover_barpage_cover_component__WEBPACK_IMPORTED_MODULE_9__["BarpageCoverComponent"] },
                    { path: 'friends', component: _components_barpage_friends_barpage_friends_component__WEBPACK_IMPORTED_MODULE_10__["BarpageFriendsComponent"] },
                    { path: 'map', component: _components_barpage_map_barpage_map_component__WEBPACK_IMPORTED_MODULE_11__["BarpageMapComponent"] }
                ]
            },
            {
                path: 'settings',
                component: _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_16__["SettingsComponent"]
            },
            {
                path: 'friend-page',
                component: _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_13__["FriendPageComponent"]
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
    { path: 'refresh', component: _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_12__["RefreshComponent"] },
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

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
/* harmony import */ var _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_pages/friend-page/friend-page.component */ "./src/app/_pages/friend-page/friend-page.component.ts");
/* harmony import */ var _pages_all_friends_all_friends_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_pages/all-friends/all-friends.component */ "./src/app/_pages/all-friends/all-friends.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_pages/settings/settings.component */ "./src/app/_pages/settings/settings.component.ts");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_18__["RefreshComponent"],
                _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_19__["FriendPageComponent"],
                _pages_all_friends_all_friends_component__WEBPACK_IMPORTED_MODULE_20__["AllFriendsComponent"],
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_21__["SettingsComponent"]
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
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
        //List of routes to store and retrieve from (these will save state)
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