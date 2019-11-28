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

module.exports = ".barPageLike {\n    position: absolute;\n    top:9px;\n    right:20px;\n    z-index:5;\n    width:33px;\n}\n\n.barPageLike img {\n    width: 100%;\n}\n\n/* Add a black background color to the top navigation */\n\n.topnav {\n    position: absolute;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.adjust {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n/* Style the links inside the navigation bar */\n\n.holder  {\n    float: left;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 12px 0px;\n    width: 25%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n/* Add a color to the active/current link */\n\n.active {\n    background-color: #F2C843;\n    color: black;\n}\n\n.collapse {\n    display: none;\n  }\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    padding: 0 0 0 0;\n    transition-property: height, visibility;\n    transition-duration: 0.35s;\n    transition-timing-function: ease;\n  }\n\n.show {\n    display: block !important;\n  }\n\n.barDealsSectionBelow {\n    margin-top: -20px;\n    padding: 0 0 0 0;\n    border-bottom:1px black solid;\n  }\n\n.upcomingTitle {\n    margin-top: 10px;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.upcomingTitleAst  {\n    float: left;\n    color: #f2f2f2;\n    text-align: left;\n    padding: 12px 0px;\n    width: 100%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n.right-pointing-triangle::after {\n  content: \"\\25B6 \\FE0E\";\n}\n\n.currentBarCover {\n    text-align: center; \n    margin-top: 12px;\n    padding: 0 0 3px 0;\n    line-height:80%;\n    font-size:28px;\n}\n\n.currentBarCover span{\n    font-size: 16px;\n}\n\n.reportCoverButton {\n    margin: 10px 0px 10px 0; width:300px; font-size:14px;\n}\n\n.modal-window {\n    position: fixed;\n    background-color: rgba(200, 200, 200, 0.75);\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 999;\n    opacity: 1;\n    pointer-events: auto;\n    transition: all 0.3s;\n  }\n\n.modal-window:target {\n    opacity: 1;\n    pointer-events: auto;\n  }\n\n.modal-window>div {\n    width: 70%;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    margin: 50% 0 0 7%;\n    padding: 2rem;\n    background: #fff;\n    color: #444;\n  }\n\n.modal-window header {\n    font-weight: bold;\n  }\n\n.modal-close {\n    color: #aaa;\n    line-height: 50px;\n    font-size: 30px;\n    margin-left: 10px;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    top: 0;\n    width: 70px;\n    text-decoration: none;\n  }\n\n.modal-close:hover {\n    color: #000;\n  }\n\n.modal-window h2 {\n    font-size: 150%;\n    margin: 0 0 15px;\n    padding: 0 0 0 0;\n  }\n\n.modal-window h1 {\n    font-size: 40px;\n    font-weight: bold;\n    margin: 0 0 15px;\n    padding: 0 0 0 0;\n  }\n\n.minus{\n      position: absolute;\n      left: 26%;\n      top: 38%;\n      width: 10%;\n  }\n\n.plus{\n    position: absolute;\n    right: 26%;\n    top: 38%;\n    width: 10%;\n  }\n\n.checkmark {\n    width: 100px;\n    margin: 0 auto;\n    padding-top: 0px;\n  }\n\n.path {\n    stroke-dasharray: 300;\n    stroke-dashoffset: 0;\n    -webkit-animation-name: load, spin;\n    -webkit-animation-duration: 3s, 3s;\n    -webkit-animation-timing-function: linear;\n    -webkit-animation-iteration-count: infinite;\n    animation-name: load, spin;\n    animation-duration: 3s, 3s;\n    animation-timing-function: linear;  \n    animation-iteration-count: infinite;\n    -webkit-transform-origin: 50% 50%;\n    -moz-transform-origin: 50px 50px;\n  }\n\n.path-complete {\n      -webkit-animation-play-state: paused;\n      animation-play-state: paused;\n  }\n\n.check \n  {\n      stroke-dasharray: 110;\n      stroke-dashoffset: -110;\n      stroke-width: 0;\n  }\n\n.check-complete \n  {   \n      -webkit-animation: check 1s ease-in forwards;\n      animation: check 1s ease-in forwards;\n      stroke-width: 8;\n      stroke-dashoffset: 0;\n  }\n\n.fill \n  {\n      stroke-dasharray: 285;\n      stroke-dashoffset: -257;\n      -webkit-animation: spin-fill 3s cubic-bezier(0.700, 0.435, 0.120, 0.600) infinite forwards;\n      animation: spin-fill 3s cubic-bezier(0.700, 0.465, 0.120, 0.600) infinite forwards;\n      -webkit-transform-origin: 50% 50%;\n    -moz-transform-origin: 50px 50px;\n  }\n\n.fill-complete \n  {\n      -webkit-animation: fill 1s ease-out forwards;\n      animation: fill 1s ease-out forwards;\n  }\n\n@-webkit-keyframes load {\n   0% {\n     stroke-dashoffset: 300;\n     -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n   }\n   50% {\n       stroke-dashoffset: 0;\n       -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n   }\n   100% {\n     stroke-dashoffset: -300;\n   }\n  }\n\n@keyframes load {\n   0% {\n     stroke-dashoffset: 285;\n     -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n             animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n   }\n   50% {\n       stroke-dashoffset: 0;\n       -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n               animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n   }\n   100% {\n     stroke-dashoffset: -285;\n   }\n  }\n\n@-webkit-keyframes check {\n   0% {\n     stroke-dashoffset: -110;\n  }\n   100% {\n     stroke-dashoffset: 0;\n   }\n  }\n\n@keyframes check {\n   0% {\n     stroke-dashoffset: -110;\n  }\n   100% {\n     stroke-dashoffset: 0;\n   }\n  }\n\n@-webkit-keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n\n@keyframes spin {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n\n@-webkit-keyframes spin-fill {\n    0% {\n      -webkit-transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(720deg);\n    }\n  }\n\n@keyframes spin-fill {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(720deg);\n              transform: rotate(720deg);\n    }\n  }\n\n@-webkit-keyframes fill {\n    0% {\n      stroke-dashoffset: 285;\n    }\n    100% {\n      stroke-dashoffset: 0;\n    }\n  }\n\n@keyframes fill {\n    0% {\n      stroke-dashoffset: 285;\n    }\n    100% {\n      stroke-dashoffset: 0;\n    }\n  }\n\n.success \n  {\n      stroke: #009900;\n      transition: stroke .6s;\n  }\n\n.attendingButtonNotClicked {\n  position: absolute; \n  width:150px; \n  font-weight: 100;\n  height:8px; \n  top: 8px; \n  right: 70px; \n  font-size:14px;\n  border: 1px solid black;\n  border-color: black;\n  background: transparent;\n}\n\n.attendingButtonClicked {\n  position: absolute; \n  width:150px; \n  font-weight: 100;\n  height:8px; \n  top: 8px; \n  right: 70px; \n  font-size:14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9iYXItcGFnZS9iYXItcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxVQUFVO0lBQ1YsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQSx1REFBdUQ7O0FBQ3ZEO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7QUFFRjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUEsOENBQThDOztBQUM5QztJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBR0EsMkNBQTJDOztBQUMzQztJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtFQUNmOztBQUdBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBR2hCLHVDQUF1QztJQUd2QywwQkFBMEI7SUFHMUIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiw2QkFBNkI7RUFDL0I7O0FBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUlBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCLEVBQUUsV0FBVyxFQUFFLGNBQWM7QUFDeEQ7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkNBQTJDO0lBQzNDLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxZQUFZO0lBQ1osVUFBVTtJQUNWLG9CQUFvQjtJQUdwQixvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxVQUFVO0lBQ1Ysb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsVUFBVTtJQUNWLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztFQUNiOztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsV0FBVztFQUNiOztBQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0FBQ0E7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0FBRUE7TUFDSSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFFBQVE7TUFDUixVQUFVO0VBQ2Q7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixVQUFVO0VBQ1o7O0FBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsa0NBQWtDO0lBQ2xDLGtDQUFrQztJQUNsQyx5Q0FBeUM7SUFDekMsMkNBQTJDO0lBQzNDLDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLG1DQUFtQztJQUNuQyxpQ0FBaUM7SUFDakMsZ0NBQWdDO0VBQ2xDOztBQUVBO01BQ0ksb0NBQW9DO01BQ3BDLDRCQUE0QjtFQUNoQzs7QUFFQTs7TUFFSSxxQkFBcUI7TUFDckIsdUJBQXVCO01BQ3ZCLGVBQWU7RUFDbkI7O0FBRUE7O01BRUksNENBQTRDO01BQzVDLG9DQUFvQztNQUNwQyxlQUFlO01BQ2Ysb0JBQW9CO0VBQ3hCOztBQUVBOztNQUVJLHFCQUFxQjtNQUNyQix1QkFBdUI7TUFDdkIsMEZBQTBGO01BQzFGLGtGQUFrRjtNQUNsRixpQ0FBaUM7SUFDbkMsZ0NBQWdDO0VBQ2xDOztBQUVBOztNQUVJLDRDQUE0QztNQUM1QyxvQ0FBb0M7RUFDeEM7O0FBRUE7R0FDQztLQUNFLHNCQUFzQjtLQUN0QiwyRUFBMkU7R0FDN0U7R0FDQTtPQUNJLG9CQUFvQjtPQUNwQiwyRUFBMkU7R0FDL0U7R0FDQTtLQUNFLHVCQUF1QjtHQUN6QjtFQUNEOztBQUNBO0dBQ0M7S0FDRSxzQkFBc0I7S0FDdEIsMkVBQW1FO2FBQW5FLG1FQUFtRTtHQUNyRTtHQUNBO09BQ0ksb0JBQW9CO09BQ3BCLDJFQUFtRTtlQUFuRSxtRUFBbUU7R0FDdkU7R0FDQTtLQUNFLHVCQUF1QjtHQUN6QjtFQUNEOztBQUVBO0dBQ0M7S0FDRSx1QkFBdUI7RUFDMUI7R0FDQztLQUNFLG9CQUFvQjtHQUN0QjtFQUNEOztBQUNBO0dBQ0M7S0FDRSx1QkFBdUI7RUFDMUI7R0FDQztLQUNFLG9CQUFvQjtHQUN0QjtFQUNEOztBQUVBO0lBQ0U7TUFDRSwrQkFBK0I7SUFDakM7SUFDQTtNQUNFLGlDQUFpQztJQUNuQztFQUNGOztBQUNBO0lBQ0U7TUFDRSwrQkFBdUI7Y0FBdkIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBeUI7Y0FBekIseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBRUE7SUFDRTtNQUNFLCtCQUErQjtJQUNqQztJQUNBO01BQ0UsaUNBQWlDO0lBQ25DO0VBQ0Y7O0FBQ0E7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRjs7QUFFQTtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjs7QUFDQTtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSxvQkFBb0I7SUFDdEI7RUFDRjs7QUFFQTs7TUFFSSxlQUFlO01BQ2Ysc0JBQXNCO0VBQzFCOztBQUVGO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFFBQVE7RUFDUixXQUFXO0VBQ1gsY0FBYztBQUNoQiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvYmFyLXBhZ2UvYmFyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJQYWdlTGlrZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo5cHg7XG4gICAgcmlnaHQ6MjBweDtcbiAgICB6LWluZGV4OjU7XG4gICAgd2lkdGg6MzNweDtcbn1cblxuLmJhclBhZ2VMaWtlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXG4udG9wbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4uYWRqdXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4gIFxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cbi5ob2xkZXIgIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDODQzO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICAuY29sbGFwc2luZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIH1cblxuICAuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5iYXJEZWFsc1NlY3Rpb25CZWxvdyB7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICBib3JkZXItYm90dG9tOjFweCBibGFjayBzb2xpZDtcbiAgfVxuXG5cbiAgLnVwY29taW5nVGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC51cGNvbWluZ1RpdGxlQXN0ICB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cblxuLnJpZ2h0LXBvaW50aW5nLXRyaWFuZ2xlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFwyNUI2IFxcRkUwRVwiO1xufVxuXG4uY3VycmVudEJhckNvdmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZzogMCAwIDNweCAwO1xuICAgIGxpbmUtaGVpZ2h0OjgwJTtcbiAgICBmb250LXNpemU6MjhweDtcbn1cblxuLmN1cnJlbnRCYXJDb3ZlciBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnJlcG9ydENvdmVyQnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMDsgd2lkdGg6MzAwcHg7IGZvbnQtc2l6ZToxNHB4O1xufVxuXG4ubW9kYWwtd2luZG93IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjc1KTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gIFxuICAubW9kYWwtd2luZG93OnRhcmdldCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICBcbiAgLm1vZGFsLXdpbmRvdz5kaXYge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA1MCUgMCAwIDclO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuICBcbiAgLm1vZGFsLXdpbmRvdyBoZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAubW9kYWwtY2xvc2Uge1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5tb2RhbC1jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5tb2RhbC13aW5kb3cgaDIge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gIH1cbiAgLm1vZGFsLXdpbmRvdyBoMSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgfVxuXG4gIC5taW51c3tcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDI2JTtcbiAgICAgIHRvcDogMzglO1xuICAgICAgd2lkdGg6IDEwJTtcbiAgfVxuXG4gIC5wbHVze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjYlO1xuICAgIHRvcDogMzglO1xuICAgIHdpZHRoOiAxMCU7XG4gIH1cblxuICAuY2hlY2ttYXJrIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuICBcbiAgLnBhdGgge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDMwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBsb2FkLCBzcGluO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAzcywgM3M7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgLXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tbmFtZTogbG9hZCwgc3BpbjtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzLCAzcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7ICBcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MHB4IDUwcHg7XG4gIH1cbiAgXG4gIC5wYXRoLWNvbXBsZXRlIHtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXBsYXktc3RhdGU6IHBhdXNlZDtcbiAgICAgIGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XG4gIH1cbiAgXG4gIC5jaGVjayBcbiAge1xuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTEwO1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMTA7XG4gICAgICBzdHJva2Utd2lkdGg6IDA7XG4gIH1cbiAgXG4gIC5jaGVjay1jb21wbGV0ZSBcbiAgeyAgIFxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGNoZWNrIDFzIGVhc2UtaW4gZm9yd2FyZHM7XG4gICAgICBhbmltYXRpb246IGNoZWNrIDFzIGVhc2UtaW4gZm9yd2FyZHM7XG4gICAgICBzdHJva2Utd2lkdGg6IDg7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICBcbiAgLmZpbGwgXG4gIHtcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDI4NTtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjU3O1xuICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4tZmlsbCAzcyBjdWJpYy1iZXppZXIoMC43MDAsIDAuNDM1LCAwLjEyMCwgMC42MDApIGluZmluaXRlIGZvcndhcmRzO1xuICAgICAgYW5pbWF0aW9uOiBzcGluLWZpbGwgM3MgY3ViaWMtYmV6aWVyKDAuNzAwLCAwLjQ2NSwgMC4xMjAsIDAuNjAwKSBpbmZpbml0ZSBmb3J3YXJkcztcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwcHggNTBweDtcbiAgfVxuICBcbiAgLmZpbGwtY29tcGxldGUgXG4gIHtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmaWxsIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICAgICAgYW5pbWF0aW9uOiBmaWxsIDFzIGVhc2Utb3V0IGZvcndhcmRzO1xuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgbG9hZCB7XG4gICAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAzMDA7XG4gICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcbiAgIH1cbiAgIDUwJSB7XG4gICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xuICAgfVxuICAgMTAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzAwO1xuICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgbG9hZCB7XG4gICAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODU7XG4gICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XG4gICB9XG4gICA1MCUge1xuICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XG4gICB9XG4gICAxMDAlIHtcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0yODU7XG4gICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjaGVjayB7XG4gICAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTEwO1xuICB9XG4gICAxMDAlIHtcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICB9XG4gIH1cbiAgQGtleWZyYW1lcyBjaGVjayB7XG4gICAwJSB7XG4gICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTEwO1xuICB9XG4gICAxMDAlIHtcbiAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4tZmlsbCB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgc3Bpbi1maWxsIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGZpbGwge1xuICAgIDAlIHtcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAyODU7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmlsbCB7XG4gICAgMCUge1xuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDI4NTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5zdWNjZXNzIFxuICB7XG4gICAgICBzdHJva2U6ICMwMDk5MDA7XG4gICAgICB0cmFuc2l0aW9uOiBzdHJva2UgLjZzO1xuICB9XG5cbi5hdHRlbmRpbmdCdXR0b25Ob3RDbGlja2VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgd2lkdGg6MTUwcHg7IFxuICBmb250LXdlaWdodDogMTAwO1xuICBoZWlnaHQ6OHB4OyBcbiAgdG9wOiA4cHg7IFxuICByaWdodDogNzBweDsgXG4gIGZvbnQtc2l6ZToxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5hdHRlbmRpbmdCdXR0b25DbGlja2VkIHtcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgd2lkdGg6MTUwcHg7IFxuICBmb250LXdlaWdodDogMTAwO1xuICBoZWlnaHQ6OHB4OyBcbiAgdG9wOiA4cHg7IFxuICByaWdodDogNzBweDsgXG4gIGZvbnQtc2l6ZToxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/_components/bar-page/bar-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/_components/bar-page/bar-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slideInPage\" [@slideInBarTrigger]=\"slideInBar\">\n  <app-full-loading *ngIf=\"isLoading\" [loadingType]=\"0\"></app-full-loading>\n\n  <div id=\"slider_maincontent\">\n\n    <h2 class=\"page_title_slide\">{{barName}}</h2>\n    <div (click)=\"markAttending()\">\n        <div *ngIf=\"!checkAttendingStatus()\" class=\"btn btn--full attendingButtonNotClicked\">\n            <span style=\"vertical-align: top; line-height: 10px;\" >Attending Tonight?</span>\n        </div>\n        <div *ngIf=\"checkAttendingStatus()\" class=\"btn btn--full attendingButtonNotClicked\">\n            <span style=\"vertical-align: top; line-height: 10px;\" >Attending Tonight &#10004;</span>\n        </div>\n    </div>\n    \n    <span class=\"barPageLike\" (click)=\"likeBar()\">\n      <img id=\"like\" [src]=\"checkLikedStatus()? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\n        alt=\"\" title=\"\" />\n    </span>\n\n    <ul id=\"imageGallery\" style=\"margin-bottom: -12px;\">\n      <li data-thumb=\"img/thumb/cS-1.jpg\" data-src=\"img/largeImage.jpg\">\n        <img [src]=\"barPictureUrl\" (load)=\"imageLoaded()\" width=\"100%\" id=\"barPageImage1\" />\n      </li>\n    </ul>\n\n    <div class=\"page_single layout_fullwidth_padding\" style=\"margin-bottom: 40px;\">\n\n\n      <div class=\"topnav\">\n        <div class=\"adjust\">\n          <div (click)=\"setActiveInfoPage(0)\" [className]=\"activeNavIcon(0)? 'holder active'  : 'holder'\">\n            <span>Deals</span>\n          </div>\n          <div (click)=\"setActiveInfoPage(1)\" [className]=\"activeNavIcon(1)? 'holder active'  : 'holder'\">\n            <span>Cover</span>\n          </div>\n          <div (click)=\"setActiveInfoPage(2)\" [className]=\"activeNavIcon(2)? 'holder active'  : 'holder'\">\n            <span>Friends</span>\n          </div>\n          <div (click)=\"setActiveInfoPage(3)\" [className]=\"activeNavIcon(3)? 'holder active'  : 'holder'\">\n            <span>Map</span>\n          </div>\n        </div>\n      </div>\n\n      <!-- <blockquote style=\"display:none\">\n        This mobile template that can be used to create a mobile website, a mobile web app, or even a native mobile app. The design\n        is using a full width layout that works perfectly on tablets and desktop also.\n        <span>SINDEVO.COM</span>\n      </blockquote> -->\n\n      <router-outlet></router-outlet>\n\n\n\n      <!-- BAR DEALS -->\n      <!-- <app-barpage-deals></app-barpage-deals> -->\n\n\n      <!-- BAR COVER -->\n      <!-- <app-barpage-cover></app-barpage-cover> -->\n\n\n\n      <!-- BAR FRIENDS -->\n      <!-- <div *ngIf=\"activeInfoPage==2\" style=\"padding-top:50px;\">\n        <div class=\"barDealsSection\">\n          <h3 style=\"padding: 0 0 0 0;\">\n            <span>Friends Going Here Tonight</span>\n          </h3>\n        </div>\n\n        <div>\n          <ul class=\"features_list\" *ngFor=\"let dailyDeal of headDailyDeals\" style=\"padding: 0px 0 0 0; position:relative\">\n            <li>\n              <div style=\"padding-bottom: 10px;\">\n                <span class=\"features_list_span\">\n                  <img src={{dailyDeal.dealIcon}} alt=\"\" title=\"\" />\n                  <span class=\"features_list_span_text\">{{dailyDeal.dealDetail}}</span>\n                </span>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div> -->\n\n      \n\n\n\n\n\n    </div>\n\n  </div>\n</div>"

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
            _this.mainService.barPageLat = _this.barPage.lat;
            _this.mainService.barPageLong = _this.barPage.long;
            var tempUrl = _this.router.url;
            _this.router.navigateByUrl('/main/' + _this.location + '/deals');
            _this.activeInfoPage = 0;
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

module.exports = ".barPageLike {\n    position: absolute;\n    top:9px;\n    right:20px;\n    z-index:5;\n    width:33px;\n}\n\n.barPageLike img {\n    width: 100%;\n}\n\n/* Add a black background color to the top navigation */\n\n.topnav {\n    position: absolute;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.adjust {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n/* Style the links inside the navigation bar */\n\n.holder  {\n    float: left;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 12px 0px;\n    width: 25%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n/* Add a color to the active/current link */\n\n.active {\n    background-color: #F2C843;\n    color: black;\n}\n\n.collapse {\n    display: none;\n  }\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    padding: 0 0 0 0;\n    transition-property: height, visibility;\n    transition-duration: 0.35s;\n    transition-timing-function: ease;\n  }\n\n.show {\n    display: block !important;\n  }\n\n.barDealsSectionBelow {\n    margin-top: -20px;\n    padding: 0 0 0 0;\n    border-bottom:1px black solid;\n  }\n\n.upcomingTitle {\n    margin-top: 10px;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.upcomingTitleAst  {\n    float: left;\n    color: #f2f2f2;\n    text-align: left;\n    padding: 12px 0px;\n    width: 100%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n.right-pointing-triangle::after {\n  content: \"\\25B6 \\FE0E\";\n}\n\n.currentBarCover {\n    text-align: center; \n    margin-top: 12px;\n    padding: 0 0 3px 0;\n    line-height:80%;\n    font-size:28px;\n}\n\n.currentBarCover span{\n    font-size: 16px;\n}\n\n.reportCoverButton {\n    margin: 10px 0px 10px 0; width:300px; font-size:14px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9iYXJwYWdlLWNvdmVyL2JhcnBhZ2UtY292ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsdURBQXVEOztBQUN2RDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLDhDQUE4Qzs7QUFDOUM7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUdBLDJDQUEyQzs7QUFDM0M7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUdoQix1Q0FBdUM7SUFHdkMsMEJBQTBCO0lBRzFCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0VBQy9COztBQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFJQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxjQUFjO0FBQ3hEIiwiZmlsZSI6ImFwcC9fY29tcG9uZW50cy9iYXJwYWdlLWNvdmVyL2JhcnBhZ2UtY292ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYXJQYWdlTGlrZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo5cHg7XG4gICAgcmlnaHQ6MjBweDtcbiAgICB6LWluZGV4OjU7XG4gICAgd2lkdGg6MzNweDtcbn1cblxuLmJhclBhZ2VMaWtlIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXG4udG9wbmF2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4uYWRqdXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4gIFxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cbi5ob2xkZXIgIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogI2YyZjJmMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgd2lkdGg6IDI1JTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDODQzO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICAuY29sbGFwc2luZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIH1cblxuICAuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5iYXJEZWFsc1NlY3Rpb25CZWxvdyB7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gICAgcGFkZGluZzogMCAwIDAgMDtcbiAgICBib3JkZXItYm90dG9tOjFweCBibGFjayBzb2xpZDtcbiAgfVxuXG5cbiAgLnVwY29taW5nVGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmlnaHQ6IDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4gIC51cGNvbWluZ1RpdGxlQXN0ICB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cblxuLnJpZ2h0LXBvaW50aW5nLXRyaWFuZ2xlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXFwyNUI2IFxcRkUwRVwiO1xufVxuXG4uY3VycmVudEJhckNvdmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIG1hcmdpbi10b3A6IDEycHg7XG4gICAgcGFkZGluZzogMCAwIDNweCAwO1xuICAgIGxpbmUtaGVpZ2h0OjgwJTtcbiAgICBmb250LXNpemU6MjhweDtcbn1cblxuLmN1cnJlbnRCYXJDb3ZlciBzcGFue1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnJlcG9ydENvdmVyQnV0dG9uIHtcbiAgICBtYXJnaW46IDEwcHggMHB4IDEwcHggMDsgd2lkdGg6MzAwcHg7IGZvbnQtc2l6ZToxNHB4O1xufVxuXG4iXX0= */"

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

module.exports = ".barPageLike {\n    position: absolute;\n    top:9px;\n    right:20px;\n    z-index:5;\n    width:33px;\n}\n\n.barPageLike img {\n    width: 100%;\n}\n\n/* Add a black background color to the top navigation */\n\n.topnav {\n    position: absolute;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.adjust {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n/* Style the links inside the navigation bar */\n\n.holder  {\n    float: left;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 12px 0px;\n    width: 25%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n/* Add a color to the active/current link */\n\n.active {\n    background-color: #F2C843;\n    color: black;\n}\n\n.collapse {\n    display: none;\n  }\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    padding: 0 0 0 0;\n    transition-property: height, visibility;\n    transition-duration: 0.35s;\n    transition-timing-function: ease;\n  }\n\n.show {\n    display: block !important;\n  }\n\n.barDealsSectionBelow {\n    margin-top: -20px;\n    padding: 40px 0 0 0;\n    border-bottom:1px black solid;\n  }\n\n.upcomingTitle {\n    margin-top: 10px;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    width: 100%;\n    right: 0%;\n    background-color: #333;\n    overflow: hidden;\n  }\n\n.upcomingTitleAst  {\n    float: left;\n    color: #f2f2f2;\n    text-align: left;\n    padding: 12px 0px;\n    width: 100%;\n    text-decoration: none;\n    font-size: 17px;\n}\n\n.right-pointing-triangle::after {\n  content: \"\\25B6 \\FE0E\";\n}\n\n.expandButton{\n  margin: 10px 0 0 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9iYXJwYWdlLWRlYWxzL2JhcnBhZ2UtZGVhbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsdURBQXVEOztBQUN2RDtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBLDhDQUE4Qzs7QUFDOUM7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUdBLDJDQUEyQzs7QUFDM0M7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7RUFDZjs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUdoQix1Q0FBdUM7SUFHdkMsMEJBQTBCO0lBRzFCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsNkJBQTZCO0VBQy9COztBQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFJQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFHQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvYmFycGFnZS1kZWFscy9iYXJwYWdlLWRlYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyUGFnZUxpa2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6OXB4O1xuICAgIHJpZ2h0OjIwcHg7XG4gICAgei1pbmRleDo1O1xuICAgIHdpZHRoOjMzcHg7XG59XG5cbi5iYXJQYWdlTGlrZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4vKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xuLnRvcG5hdiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuLmFkanVzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuICBcbi8qIFN0eWxlIHRoZSBsaW5rcyBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXG4uaG9sZGVyICB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuXG4vKiBBZGQgYSBjb2xvciB0byB0aGUgYWN0aXZlL2N1cnJlbnQgbGluayAqL1xuLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YyQzg0MztcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5jb2xsYXBzZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG5cbiAgLmNvbGxhcHNpbmcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwIDAgMCAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xuICAgIC1vLXRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICAtby10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjM1cztcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIC1vLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICB9XG5cbiAgLnNob3cge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuYmFyRGVhbHNTZWN0aW9uQmVsb3cge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMCAwIDA7XG4gICAgYm9yZGVyLWJvdHRvbToxcHggYmxhY2sgc29saWQ7XG4gIH1cblxuXG4gIC51cGNvbWluZ1RpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHJpZ2h0OiAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAudXBjb21pbmdUaXRsZUFzdCAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiAjZjJmMmYyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuXG5cbi5yaWdodC1wb2ludGluZy10cmlhbmdsZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcMjVCNiBcXEZFMEVcIjtcbn1cblxuXG4uZXhwYW5kQnV0dG9ue1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG5cbiJdfQ== */"

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

module.exports = "<div *ngIf=\"!displayFriends\" class=\"loadingHolder\">\n    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n</div>\n\n\n<div style=\"padding-top:50px;\" *ngIf=\"displayFriends\">\n\n  <!-- HEADER -->\n  <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\n    <h3 style=\"padding: 0 0 0 0;\">\n      <span>Friends Going Tonight</span>\n    </h3>\n  </div>\n\n  <!-- FRIEND LIST -->\n  <div id=\"friendHolder\">\n    <ul class=\"features_list\" *ngFor=\"let friend of friends\" style=\"padding: 0px 0 0 0; position:relative\">\n      <li (click)=\"openFriendPopUp(friend)\">\n        <div style=\"padding-bottom: 10px;\">\n          <span class=\"features_list_span\">\n              <img src=\"{{friend.profilePicUrl == 'null'? './assets/images/users/blank_profile.png' : friend.profilePicUrl}}\">\n              <span class=\"features_list_span_text\" style=\"font-size: 110%;\">{{friend.firstName}} {{friend.lastName}} </span> \n          </span>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>\n\n"

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

module.exports = "agm-map {\n    height: 280px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9iYXJwYWdlLW1hcC9iYXJwYWdlLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmIiwiZmlsZSI6ImFwcC9fY29tcG9uZW50cy9iYXJwYWdlLW1hcC9iYXJwYWdlLW1hcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiAyODBweDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/_components/barpage-map/barpage-map.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/barpage-map/barpage-map.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top:55px; \">\n  <!-- this creates a google map on the page with the given lat/lng from -->\n  <!-- the component as the initial center of the map: -->\n  <div (click)=\"mapsSelector()\">\n    <agm-map [zoomControl]=\"false\" [streetViewControl]=\"false\" [zoom]=17 [latitude]=\"lat\" [longitude]=\"lng\">\n      <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n  </div>\n\n</div>"

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
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/main.service */ "./src/app/_services/main.service.ts");



var BarpageMapComponent = /** @class */ (function () {
    function BarpageMapComponent(mainService) {
        this.mainService = mainService;
        this.lat = 0;
        this.lng = 0;
    }
    BarpageMapComponent.prototype.ngOnInit = function () {
        this.lat = this.mainService.barPageLat;
        this.lng = this.mainService.barPageLong;
    };
    BarpageMapComponent.prototype.mapsSelector = function () {
        if /* if we're on iOS, open in Apple Maps */ ((navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPad") != -1) ||
            (navigator.platform.indexOf("iPod") != -1))
            window.open("maps://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
        else /* else use Google */
            window.open("https://maps.google.com/maps?daddr=<lat>,<long>&amp;ll=");
    };
    BarpageMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barpage-map',
            template: __webpack_require__(/*! ./barpage-map.component.html */ "./src/app/_components/barpage-map/barpage-map.component.html"),
            styles: [__webpack_require__(/*! ./barpage-map.component.css */ "./src/app/_components/barpage-map/barpage-map.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
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

module.exports = ".fullLoadingPage{\n    position:fixed;\n    padding:0;\n    margin:0;\n    z-index: 150;\n\n    width: 100%;\n    height: 100%;\n    background:white;\n  \n  }\n\n\n  .circle-loader {\n    margin-bottom: 0;\n    border: 3px solid rgba(0, 0, 0, 0.2);\n    border-left-color: #F2C843;\n    -webkit-animation: loader-spin 1.2s infinite linear;\n            animation: loader-spin 1.2s infinite linear;\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 50%;\n    width: 7em;\n    height: 7em;\n  }\n\n\n  .load-complete {\n    -webkit-animation: none;\n    animation: none;\n    border-color: #F2C843;\n    transition: border 500ms ease-out;\n  }\n\n\n  .checkmarkHidden {\n    display: none;\n  }\n\n\n  .checkmark{\n    display:auto;\n  }\n\n\n  .checkmark.draw:after {\n    -webkit-animation-duration: 800ms;\n            animation-duration: 800ms;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-name: checkmark;\n            animation-name: checkmark;\n    -webkit-transform: scaleX(-1) rotate(135deg);\n            transform: scaleX(-1) rotate(135deg);\n  }\n\n\n  .checkmark:after {\n    opacity: 1;\n    height: 3.5em;\n    width: 1.75em;\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    border-right: 4px solid #F2C843;\n    border-top: 4px solid #F2C843;\n    content: '';\n    left: 1.75em;\n    top: 3.5em;\n    position: absolute;\n  }\n\n\n  @-webkit-keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n\n\n  @keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n\n\n  @-webkit-keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n\n\n  @keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9mdWxsLWxvYWRpbmcvZnVsbC1sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsU0FBUztJQUNULFFBQVE7SUFDUixZQUFZOztJQUVaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCOztFQUVsQjs7O0VBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiOzs7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlDQUFpQztFQUNuQzs7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7OztFQUNBO0lBQ0UsWUFBWTtFQUNkOzs7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDRDQUFvQztZQUFwQyxvQ0FBb0M7RUFDdEM7OztFQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7O0VBSUE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOzs7RUFQQTtJQUNFO1FBQ0ksK0JBQXVCO2dCQUF2Qix1QkFBdUI7R0FDNUI7SUFDQztRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO0dBQzlCO0VBQ0Q7OztFQUNBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7R0FDZjtJQUNDO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtFQUNEOzs7RUFyQkE7SUFDRTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0VBQ0QiLCJmaWxlIjoiYXBwL19jb21wb25lbnRzL2Z1bGwtbG9hZGluZy9mdWxsLWxvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsTG9hZGluZ1BhZ2V7XG4gICAgcG9zaXRpb246Zml4ZWQ7XG4gICAgcGFkZGluZzowO1xuICAgIG1hcmdpbjowO1xuICAgIHotaW5kZXg6IDE1MDtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOndoaXRlO1xuICBcbiAgfVxuXG5cbiAgLmNpcmNsZS1sb2FkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjJDODQzO1xuICAgIGFuaW1hdGlvbjogbG9hZGVyLXNwaW4gMS4ycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogN2VtO1xuICAgIGhlaWdodDogN2VtO1xuICB9XG4gIC5sb2FkLWNvbXBsZXRlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjRjJDODQzO1xuICAgIHRyYW5zaXRpb246IGJvcmRlciA1MDBtcyBlYXNlLW91dDtcbiAgfVxuICAuY2hlY2ttYXJrSGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jaGVja21hcmt7XG4gICAgZGlzcGxheTphdXRvO1xuICB9XG4gIC5jaGVja21hcmsuZHJhdzphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGVja21hcms7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiAzLjVlbTtcbiAgICB3aWR0aDogMS43NWVtO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNGMkM4NDM7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNGMkM4NDM7XG4gICAgY29udGVudDogJyc7XG4gICAgbGVmdDogMS43NWVtO1xuICAgIHRvcDogMy41ZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICBcbiAgXG4gIEBrZXlmcmFtZXMgbG9hZGVyLXNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICB9XG4gIH1cbiAgQGtleWZyYW1lcyBjaGVja21hcmsge1xuICAgIDAlIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiAgICAyMCUge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gICAgNDAlIHtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiAgfVxuIl19 */"

/***/ }),

/***/ "./src/app/_components/full-loading/full-loading.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/_components/full-loading/full-loading.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullLoadingPage\">\n\n\n    <!-- Figure out why ngif is not working -->\n\n\n    <!-- Page Loader -->\n    <div class=\"centered\" id=\"pageLoader\">\n        <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n    </div>\n\n    <!--Loading-->\n    <!-- <div *ngIf=\"loadingType==1\" class=\"center-screen\">\n        <div id=\"circleLoader\" class=\"circle-loader\">\n            <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\n        </div>\n    </div> -->\n\n\n\n</div>\n"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvX2NvbXBvbmVudHMvbWFpbi1zY3JvbGwvbWFpbi1zY3JvbGwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/_components/main-scroll/main-scroll.component.html":
/*!********************************************************************!*\
  !*** ./src/app/_components/main-scroll/main-scroll.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content of Page       -->\n<div id=\"pages_maincontent\" *ngIf=\"displayPage\">\n  <h2 class=\"page_title\" style=\"text-align: center;\"></h2>\n\n  <div class=\"page_single layout_fullwidth_padding\">\n\n    <!-- For each here -->\n    <ul class=\"shop_items\">\n\n      <!-- BAR CARD -->\n      <li id=\"barCard\" *ngFor=\"let barCard of barCards\" (click)=\"onBarCardClick($event,barCard.barId)\">\n        <div class=\"shop_thumb\">\n          <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\n        </div>\n        <div class=\"shop_item_details\">\n          <h4>{{barCard.barName}}</h4>\n          <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\n              </span>\n            </li>\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\n              </span>\n            </li>\n          </ul>\n          <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\n              <!-- <app-like></app-like> -->\n              <img  id=\"like\"  [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\" alt=\"\" title=\"\" />            \n          </span>\n        </div>\n      </li>\n\n\n    </ul>\n\n    <!-- <div class=\"shop_pagination\">\n      <a href=\"\" class=\"prev_shop\">PREV PAGE</a>\n      <span class=\"shop_pagenr\">1/37</span>\n      <a href=\"\" class=\"next_shop\">NEXT PAGE</a>\n      <br />\n      <br />\n      <br />\n      <br />\n    </div> -->\n\n\n\n  </div>\n\n</div>"

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
        console.log(this.authService.currentUser);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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

module.exports = "<!--       NAVBAR       -->\n<div class=\"swiper-container-toolbar swiper-toolbar\" style=\"background-color:black;\">\n  <div class=\"swiper-pagination-toolbar\"></div>\n  <div class=\"swiper-wrapper\">\n    <div class=\"swiper-slide toolbar-icon\">\n      <span class=\"toolbar-icon-span\" id=\"toolbarHome\"  (click)=\"icon0Click()\">\n        <img src=\"./assets/images/icons/white/categories.png\"alt=\"\" title=\"\" />\n      </span>\n      <span class=\"toolbar-icon-span\" id=\"toolbarSearch\" (click)=\"icon1Click()\">\n        <img src=\"./assets/images/icons/white/search.png\"  alt=\"\" title=\"\" />\n      </span>\n      <span class=\"toolbar-icon-span\" id=\"friendsPage\" (click)=\"icon2Click()\">\n        <img style=\"width: 125%;\" src=\"./assets/images/icons/white/users.png\" alt=\"\" title=\"\" />\n      </span>\n      <span class=\"toolbar-icon-span\" (click)=\"icon3Click()\">\n        <img src=\"./assets/images/icons/white/love.png\" alt=\"\" title=\"\" />\n      </span>\n      <span class=\"toolbar-icon-span\" (click)=\"icon4Click()\">\n        <img src=\"./assets/images/icons/white/settings.png\" alt=\"\" title=\"\" />\n      </span>\n    </div>\n  </div>\n</div>"

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
        var _this = this;
        this.mainService.userSlideClick.subscribe(function (value) {
            if (value > -1) {
                switch (value) {
                    case 0:
                        _this.icon0Click();
                        break;
                    case 1:
                        _this.icon1Click();
                        break;
                    case 2:
                        _this.icon2Click();
                        break;
                    case 3:
                        _this.icon3Click();
                        break;
                    case 4:
                        _this.icon4Click();
                        break;
                }
            }
        });
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

module.exports = "\n.modal-window {\n    position: absolute;\n    background-color: rgba(200, 200, 200, 0.75);\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 999;\n    opacity: 1;\n    pointer-events: auto;\n    transition: all 0.3s;\n  }\n  \n  .modal-window:target {\n    opacity: 1;\n    pointer-events: auto;\n  }\n  \n  .modal-window>div {\n    width: 70%;\n    border-radius: 10px 10px 10px 10px;\n    position: relative;\n    margin: 60% 0 0 7%;\n    padding: 2rem;\n    background: #fff;\n    color: #444;\n  }\n  \n  .modal-window header {\n    font-weight: bold;\n  }\n  \n  .modal-close {\n    color: #aaa;\n    line-height: 50px;\n    font-size: 30px;\n    margin-left: 10px;\n    position: absolute;\n    right: 0;\n    text-align: center;\n    top: 0;\n    width: 70px;\n    text-decoration: none;\n  }\n  \n  .modal-close:hover {\n    color: #000;\n  }\n  \n  .modal-window h2 {\n    font-size: 150%;\n    margin: 0 0 15px;\n    padding: 0 0 0 0;\n  }\n  \n  .coverHeading {\n    font-size: 40px;\n    font-weight: bold;\n    margin: 0 0 15px;\n    padding: 0 15px 0 15px;\n  }\n  \n  .minus{\n    position: relative;\n    width: 10%;\n  }\n  \n  .plus{\n  position: relative;\n  width: 10%;\n  }\n  \n  .checkmarkHolder {\n  width: 100px;\n  margin: 0 auto;\n  padding-top: 0px;\n  }\n  \n  .circle-loader {\n    margin-bottom: 0;\n    border: 3px solid rgba(0, 0, 0, 0.2);\n    border-left-color: #F2C843;\n    -webkit-animation: loader-spin 1.2s infinite linear;\n            animation: loader-spin 1.2s infinite linear;\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 50%;\n    width: 7em;\n    height: 7em;\n  }\n  \n  .load-complete {\n    -webkit-animation: none;\n    animation: none;\n    border-color: #F2C843;\n    transition: border 500ms ease-out;\n  }\n  \n  .checkmarkHidden {\n    display: none;\n  }\n  \n  .checkmark{\n    display:auto;\n  }\n  \n  .checkmark.draw:after {\n    -webkit-animation-duration: 800ms;\n            animation-duration: 800ms;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-name: checkmark;\n            animation-name: checkmark;\n    -webkit-transform: scaleX(-1) rotate(135deg);\n            transform: scaleX(-1) rotate(135deg);\n  }\n  \n  .checkmark:after {\n    opacity: 1;\n    height: 3.5em;\n    width: 1.75em;\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    border-right: 4px solid #F2C843;\n    border-top: 4px solid #F2C843;\n    content: '';\n    left: 1.75em;\n    top: 3.5em;\n    position: absolute;\n  }\n  \n  @-webkit-keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n  \n  @keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n  \n  @-webkit-keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n  \n  @keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n  \n  label.myLabel input[type=\"file\"] {\n    position:absolute;\n    top: -1000px;\n}\n  \n  /***** Example custom styling *****/\n  \n  .myLabel {\n    border: 2px solid #AAA;\n    border-radius: 4px;\n    padding: 2px 5px;\n    margin: 2px;\n    background: #DDD;\n    display: inline-block;\n}\n  \n  .myLabel:hover {\n    background: #CCC;\n}\n  \n  .myLabel:active {\n    background: #CCF;\n}\n  \n  .myLabel :invalid + span {\n    color: #A44;\n}\n  \n  .myLabel :valid + span {\n    color: #4A4;\n}\n  \n  .upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n}\n  \n  .upload-btn-wrapper input[type=file] {\n  font-size: 100px;\n  position: absolute;\n  left: 0;\n  top: 0;\n  opacity: 0;\n}\n  \n  .profilePic {\n  max-width: 130px;\n  border-radius: 50%; \n}\n  \n  .unfriendButton {\n  margin: 20px 0px 0px 0;\n  width: 150px;\n  font-size: 16px;\n  line-height: 1.2px;\n  font-weight: 100;\n  height: 1px;\n  background-color: white;\n  color: black;\n  border: 1px solid black;\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLFlBQVk7SUFDWixVQUFVO0lBQ1Ysb0JBQW9CO0lBR3BCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLFVBQVU7SUFDVixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7RUFDQSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWOztFQUVBO0VBQ0EsWUFBWTtFQUNaLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEI7O0VBR0E7SUFDRSxnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLDBCQUEwQjtJQUMxQixtREFBMkM7WUFBM0MsMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztFQUNiOztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUNBQWlDO0VBQ25DOztFQUNBO0lBQ0UsYUFBYTtFQUNmOztFQUNBO0lBQ0UsWUFBWTtFQUNkOztFQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsNENBQW9DO1lBQXBDLG9DQUFvQztFQUN0Qzs7RUFDQTtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUEwQjtZQUExQiwwQkFBMEI7SUFDMUIsK0JBQStCO0lBQy9CLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7O0VBSUE7SUFDRTtRQUNJLCtCQUF1QjtnQkFBdkIsdUJBQXVCO0dBQzVCO0lBQ0M7UUFDSSxpQ0FBeUI7Z0JBQXpCLHlCQUF5QjtHQUM5QjtFQUNEOztFQVBBO0lBQ0U7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtHQUM1QjtJQUNDO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7R0FDOUI7RUFDRDs7RUFDQTtJQUNFO1FBQ0ksU0FBUztRQUNULFFBQVE7UUFDUixVQUFVO0dBQ2Y7SUFDQztRQUNJLFNBQVM7UUFDVCxhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7RUFDRDs7RUFyQkE7SUFDRTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0VBQ0Q7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7RUFFQSxtQ0FBbUM7O0VBQ25DO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0VBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0VBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0VBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0VBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0VBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07RUFDTixVQUFVO0FBQ1o7O0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImFwcC9fY29tcG9uZW50cy9wb3B1cC9wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubW9kYWwtd2luZG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMDAsIDIwMCwgMjAwLCAwLjc1KTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogOTk5O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gIFxuICAubW9kYWwtd2luZG93OnRhcmdldCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgfVxuICBcbiAgLm1vZGFsLXdpbmRvdz5kaXYge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiA2MCUgMCAwIDclO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBjb2xvcjogIzQ0NDtcbiAgfVxuICBcbiAgLm1vZGFsLXdpbmRvdyBoZWFkZXIge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG4gIFxuICAubW9kYWwtY2xvc2Uge1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogNzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5tb2RhbC1jbG9zZTpob3ZlciB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cbiAgXG4gIC5tb2RhbC13aW5kb3cgaDIge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbiAgICBtYXJnaW46IDAgMCAxNXB4O1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gIH1cbiAgLmNvdmVySGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG4gICAgcGFkZGluZzogMCAxNXB4IDAgMTVweDtcbiAgfVxuICBcbiAgLm1pbnVze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAlO1xuICB9XG4gIFxuICAucGx1c3tcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAlO1xuICB9XG4gIFxuICAuY2hlY2ttYXJrSG9sZGVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuICBcbiAgXG4gIC5jaXJjbGUtbG9hZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI0YyQzg0MztcbiAgICBhbmltYXRpb246IGxvYWRlci1zcGluIDEuMnMgaW5maW5pdGUgbGluZWFyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDdlbTtcbiAgICBoZWlnaHQ6IDdlbTtcbiAgfVxuICAubG9hZC1jb21wbGV0ZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XG4gICAgYW5pbWF0aW9uOiBub25lO1xuICAgIGJvcmRlci1jb2xvcjogI0YyQzg0MztcbiAgICB0cmFuc2l0aW9uOiBib3JkZXIgNTAwbXMgZWFzZS1vdXQ7XG4gIH1cbiAgLmNoZWNrbWFya0hpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2hlY2ttYXJre1xuICAgIGRpc3BsYXk6YXV0bztcbiAgfVxuICAuY2hlY2ttYXJrLmRyYXc6YWZ0ZXIge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogODAwbXM7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICBhbmltYXRpb24tbmFtZTogY2hlY2ttYXJrO1xuICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKSByb3RhdGUoMTM1ZGVnKTtcbiAgfVxuICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgd2lkdGg6IDEuNzVlbTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjRjJDODQzO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjRjJDODQzO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGxlZnQ6IDEuNzVlbTtcbiAgICB0b3A6IDMuNWVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgfVxuICBcbiAgXG4gIFxuICBAa2V5ZnJhbWVzIGxvYWRlci1zcGluIHtcbiAgICAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgfVxuICAgIDEwMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgY2hlY2ttYXJrIHtcbiAgICAwJSB7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gICAgMjAlIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMS43NWVtO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgfVxuICAgIDQwJSB7XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gICAgMTAwJSB7XG4gICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gIH1cblxuICBsYWJlbC5teUxhYmVsIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICB0b3A6IC0xMDAwcHg7XG59XG5cbi8qKioqKiBFeGFtcGxlIGN1c3RvbSBzdHlsaW5nICoqKioqL1xuLm15TGFiZWwge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNBQUE7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG4gICAgbWFyZ2luOiAycHg7XG4gICAgYmFja2dyb3VuZDogI0RERDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4ubXlMYWJlbDpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI0NDQztcbn1cbi5teUxhYmVsOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogI0NDRjtcbn1cbi5teUxhYmVsIDppbnZhbGlkICsgc3BhbiB7XG4gICAgY29sb3I6ICNBNDQ7XG59XG4ubXlMYWJlbCA6dmFsaWQgKyBzcGFuIHtcbiAgICBjb2xvcjogIzRBNDtcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udXBsb2FkLWJ0bi13cmFwcGVyIGlucHV0W3R5cGU9ZmlsZV0ge1xuICBmb250LXNpemU6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnByb2ZpbGVQaWMge1xuICBtYXgtd2lkdGg6IDEzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7IFxufVxuXG4udW5mcmllbmRCdXR0b24ge1xuICBtYXJnaW46IDIwcHggMHB4IDBweCAwO1xuICB3aWR0aDogMTUwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuMnB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiBibGFjaztcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/_components/popup/popup.component.html":
/*!********************************************************!*\
  !*** ./src/app/_components/popup/popup.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showCoverPopUp\" style=\"text-align: center;\">\n  <div id=\"open-modal\" class=\"modal-window\">\n    <div *ngIf=\"!coverSubmissionLoader\">\n      <a (click)=\"showCoverPopUp = false\" title=\"Close\" class=\"modal-close\">&times;</a>\n      <h2>Report Cover</h2>\n      <div style=\"margin: 0 7px 0 0px;\">\n        <img (click)=\"decrementReportCover()\" class=\"minus\" src=\"./assets/images/minus.png\">\n        <span class=\"coverHeading\">${{reportCoverValue}}</span>\n        <img (click)=\"incrementReportCover()\" class=\"plus\" src=\"./assets/images/plus.png\">\n      </div>\n\n      <div (click)=\"reportCover()\" style=\"text-align: center\">\n        <span style=\"margin: 7px 0px 0px 0; width:200px; font-size:14px;\" class=\"btn btn--full\">Submit</span>\n      </div>\n\n    </div>\n    <div *ngIf=\"coverSubmissionLoader\">\n      <div style=\"width:100%;\">\n        <div class=\"checkmarkHolder\">\n          <div id=\"circleLoader\" class=\"circle-loader\">\n            <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"showFriendPopUp\" style=\"text-align: center;\">\n  <div id=\"open-modal\" class=\"modal-window\">\n    <div style=\"margin: 45% 0 0 7%\">\n      <a *ngIf=\"!isLoading && (showBars || showFriends || showFriendOfFriend)\" style=\"left: 0px; top:3px;\" (click)=\"back()\" title=\"Close\"\n        class=\"modal-close\">&#8592;</a>\n      <a (click)=\"hideFriendPopUp()\" title=\"Close\" class=\"modal-close\">&times;</a>\n\n      <div *ngIf=\"!isLoading && !showFriends && !showBars && !showFriendOfFriend\">\n        <br />\n        <img src=\"{{friendUser.profilePicUrl == 'null'? './assets/images/users/blank_profile.png' : friendUser.profilePicUrl}}\" class=\"profilePic\">\n        <h2 style=\"margin: 0 0 0 0\">{{friendUser.firstName}} {{friendUser.lastName}}</h2>\n        <p>{{friendUser.userName}}</p>\n\n        <div *ngIf=\"!isFriend && showRequestButton\">\n          <span *ngIf=\"!isRequestOut && !isRequestIn\" (click)=\"sendFriendRequest()\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\"\n            class=\"btn btn--full\">Add Friend</span>\n          <span *ngIf=\"isRequestOut\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\" class=\"btn btn--full\">Friend Request Sent!</span>\n          <span *ngIf=\"isRequestIn\" (click)=\"acceptFriendRequest()\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\" class=\"btn btn--full\">Accept Friend Request\n          </span>\n        </div>\n        <div *ngIf=\"isFriend\">\n          <div style=\"width: 80%; text-align: center; padding-left: 12%;\" *ngIf=\"showUnfriend\">\n            <h5 style=\"padding:5px;\"> Are you sure you wish to remove this friend?</h5>\n            <span (click)=\"showUnfriend = false\" style=\"margin: 0px;\" class=\"btn btn--full unfriendButton\">Cancel</span>\n            <span (click)=\"unFriend()\" style=\"margin: 10px 0 0 0; border: 1px solid red; color: red;\" class=\"btn btn--full unfriendButton\">Remove Friend</span>\n          </div>\n          <div *ngIf=\"!showUnfriend\">\n            <span (click)=\"activateBars()\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:16px;\" class=\"btn btn--full\">View Bars Attending Tonight</span>\n            <span (click)=\"activateFriends()\" style=\"margin: 0px 0px 0px 0; width:300px; font-size:16px;\" class=\"btn btn--full\">View Friends List</span>\n            <span (click)=\"showUnfriend = true\" class=\"btn btn--full unfriendButton\">Remove Friend?</span>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"!isLoading && showBars\">\n        <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\n          <h3 style=\"padding: 0 0 0 0;\">\n            <span>Bars Attending Tonight</span>\n          </h3>\n        </div>\n        <div style=\"height: 200px; padding: 0 0 20px 0; margin-top: 30px;\" id=\"pages_maincontent\" [hidden]=\"isLoading\">\n          <div class=\"page_single layout_fullwidth_padding\">\n            <ul class=\"features_list\" style=\"padding: 0px 0 0 0; position:relative\">\n              <li *ngFor=\"let barPage of friendUserBars\">\n                <div style=\"padding-bottom: 10px;\">\n                  <span class=\"features_list_span\">\n                    <img style=\"width:20%;\" src=\"{{barPage.barPicture1Url}}\">\n                    <span class=\"features_list_span_text\" style=\"font-size: 110%;\">{{barPage.barName}}</span>\n                  </span>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div style=\"padding-bottom:200px;\"></div>\n      </div>\n\n      <div *ngIf=\"!isLoading && showFriends\">\n        <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\n          <h3 style=\"padding: 0 0 0 0;\">\n            <span>Friends List</span>\n          </h3>\n        </div>\n        <div style=\"height: 200px; padding: 0 0 20px 0; margin-top: 30px;\" id=\"pages_maincontent\" [hidden]=\"isLoading\">\n          <div class=\"page_single layout_fullwidth_padding\">\n            <ul class=\"features_list\" style=\"padding: 0px 0 0 0; position:relative\">\n              <li style=\"margin: 5px 0 5px 0; padding-bottom: 5px;\" *ngFor=\"let friend of friendUserFriends\">\n                <div (click)=\"activateFriendOfFriend(friend)\" style=\"padding-bottom: 10px;\">\n                  <span class=\"features_list_span\">\n                    <img src=\"{{friend.profilePicUrl}}\">\n                    <span class=\"features_list_span_text\" style=\"font-size: 110%;\">{{friend.firstName}} {{friend.lastName}}</span>\n                  </span>\n                </div>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div style=\"padding-bottom:200px;\"></div>\n      </div>\n\n      <div *ngIf=\"!isLoading && showFriendOfFriend\">\n        <br />\n        <img src=\"{{friendOfFriendUser.profilePicUrl == 'null'? './assets/images/users/blank_profile.png' : friendOfFriendUser.profilePicUrl}}\"\n          class=\"profilePic\">\n        <h2 style=\"margin: 0 0 0 0\">{{friendOfFriendUser.firstName}} {{friendOfFriendUser.lastName}}</h2>\n        <p>{{friendOfFriendUser.userName}}</p>\n\n        <div *ngIf=\"!friendOfFriendIsFriend && showFriendOfFriendRequestButton\">\n          <span *ngIf=\"!friendOfFriendIsRequestOut && !friendOfFriendIsRequestIn\" (click)=\"sendFriendOfFriendRequest()\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\"\n            class=\"btn btn--full\">Add Friend</span>\n          <span *ngIf=\"friendOfFriendIsRequestOut\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\" class=\"btn btn--full\">Friend Request Sent!</span>\n          <span *ngIf=\"friendOfFriendIsRequestIn\" (click)=\"acceptFriendOfFriendRequest()\" style=\"margin: 10px 0px 10px 0; width:300px; font-size:14px;\"\n            class=\"btn btn--full\">Accept Friend Request\n          </span>\n        </div>\n      </div>\n\n      <div *ngIf=\"isLoading\">\n        <div id=\"circleLoader\" class=\"circle-loader\">\n          <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\n        </div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n\n<!-- Profile Pic Editing -->\n<div *ngIf=\"showProfilePicEditing\" style=\"text-align: center;\">\n  <div id=\"open-modal\" class=\"modal-window\" style=\"z-index: 11000;\">\n    <div style=\"bottom: 100px; padding-bottom: 1rem;\">\n      <a (click)=\"hideProfilePicEditing()\" title=\"Close\" class=\"modal-close\">&times;</a>\n      <div *ngIf=\"!submittingProfilePic\">\n        <h2>Edit Profile Picture</h2>\n\n        <div *ngIf=\"showCurrentAvatar\" style=\"margin-top: 20px;\">\n          <div>\n            <img style=\"max-width: 100%\" src=\"{{currentAvatarUrl == 'null'? './assets/images/users/blank_profile.png' : currentAvatarUrl}}\">\n          </div>\n\n          <div class=\"upload-btn-wrapper\">\n            <span style=\"margin: 10px 0px 10px 0; width:150px; font-size:14px;\" class=\"btn btn--full\">Change Picture</span>\n            <input type=\"file\" name=\"myfile\" (change)=\"fileChangeEvent($event)\" accept=\"image/*\" />\n          </div>\n        </div>\n\n        <div *ngIf=\"!showCurrentAvatar\" style=\"margin-top: 20px;\">\n          <div>\n            <image-cropper style=\"max-height: 350px;\" [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"1 / 1\"\n              [resizeToWidth]=\"300\" format=\"jpeg\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n              (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\n          </div>\n          <span (click)=\"doneEditing()\" style=\"margin: 20px 0px 0px 0; width:150px; font-size:14px;\" class=\"btn btn--full\">Done</span>\n        </div>\n      </div>\n\n      <div *ngIf=\"submittingProfilePic\">\n        <div style=\"width:100%;\">\n          <div class=\"checkmarkHolder\">\n\n            <div id=\"circleLoader\" class=\"circle-loader\">\n              <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n\n    </div>\n\n\n  </div>\n</div>"

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
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







 // RxJS 6 syntax
var PopupComponent = /** @class */ (function () {
    function PopupComponent(mainService, authService, db, storage) {
        this.mainService = mainService;
        this.authService = authService;
        this.db = db;
        this.storage = storage;
        this.isLoading = false;
        //Cover Variables
        this.showCoverPopUp = false;
        this.reportCoverValue = 0;
        this.coverSubmissionLoader = false;
        //Friend Variables
        this.showFriendPopUp = false;
        this.showRequestButton = false;
        this.friendUser = null;
        this.friendUserBars = [];
        this.friendUserFriends = [];
        this.isFriend = false;
        this.isRequestOut = false;
        this.isRequestIn = false;
        this.showUnfriend = false;
        this.showBars = false;
        this.showFriends = false;
        this.showFriendOfFriend = false;
        this.friendOfFriendUser = null;
        this.friendOfFriendIsFriend = false;
        this.showFriendOfFriendRequestButton = false;
        this.friendOfFriendIsRequestIn = false;
        this.friendOfFriendIsRequestOut = false;
        //Profile Pic Editing Variables
        this.showProfilePicEditing = false;
        this.currentAvatarUrl = "";
        this.showCurrentAvatar = true;
        this.submittingProfilePic = false;
        /* Utility function to convert a canvas to a BLOB */
        this.dataURLToBlob = function (dataURL) {
            var raw;
            var BASE64_MARKER = ';base64,';
            if (dataURL.indexOf(BASE64_MARKER) == -1) {
                var parts = dataURL.split(',');
                var contentType = parts[0].split(':')[1];
                raw = parts[1];
                return new Blob([raw], { type: contentType });
            }
            var parts = dataURL.split(BASE64_MARKER);
            var contentType = parts[0].split(':')[1];
            raw = window.atob(parts[1]);
            var rawLength = raw.length;
            var uInt8Array = new Uint8Array(rawLength);
            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], { type: contentType });
        };
        /* End Utility function to convert a canvas to a BLOB      */
        //Try to compress before showing in image cropper
        this.imageBase64 = '';
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.blobToFile = function (theBlob, fileName) {
            var b = theBlob;
            //A Blob() is almost a File() - it's just missing the two properties below which we will add
            b.lastModifiedDate = new Date();
            b.name = fileName;
            //Cast to a File() type
            return theBlob;
        };
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
                _this.isLoading = true;
                _this.loadUserFriendStatus();
                _this.showBars = false;
                _this.showFriends = false;
                _this.showFriendOfFriend = false;
                _this.friendOfFriendIsFriend = false;
                _this.showFriendOfFriendRequestButton = false;
                _this.friendOfFriendIsRequestIn = false;
                _this.friendOfFriendIsRequestOut = false;
                _this.showUnfriend = false;
                _this.showFriendPopUp = true;
            }
        });
        this.mainService.showProfilePicEditing.subscribe(function (value) {
            if (value == true) {
                _this.showCurrentAvatar = true;
                _this.submittingProfilePic = false;
                _this.currentAvatarUrl = _this.authService.currentUser.profilePicUrl;
                _this.showProfilePicEditing = true;
            }
        });
        this.mainService.hideAllPopUps.subscribe(function (value) {
            if (value == true) {
                _this.hideAllPopups();
                _this.mainService.hideAllPopUps.next(false);
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
                _this.isFriend = true;
                _this.showRequestButton = false;
                _this.isLoading = false;
            }
            else {
                var requestOutTask = _this.db.object('/userInfo/' + _this.authService.currentUser.uid + '/friendRequestOut/' + _this.friendUser.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
                var requestInTask = _this.db.object('/userInfo/' + _this.authService.currentUser.uid + '/friendRequestIn/' + _this.friendUser.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
                var fork = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([requestOutTask, requestInTask]);
                fork.subscribe(function (result) {
                    if (result[0])
                        _this.isRequestOut = true;
                    if (result[1])
                        _this.isRequestIn = true;
                    _this.showRequestButton = true;
                    _this.isLoading = false;
                });
            }
        });
    };
    PopupComponent.prototype.unFriend = function () {
        this.isLoading = true;
        this.db.database.ref("userInfo/" + this.authService.currentUser.uid + "/friends/" + this.friendUser.uid).remove();
        this.db.database.ref("userInfo/" + this.friendUser.uid + "/friends/" + this.authService.currentUser.uid).remove();
        this.authService.currentUser.friendIds.splice(this.authService.currentUser.friendIds.indexOf(this.friendUser.uid), 1);
        this.loadUserFriendStatus();
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
    PopupComponent.prototype.activateBars = function () {
        var _this = this;
        this.isLoading = true;
        this.friendUserBars = [];
        this.showBars = true;
        this.db.list("barPages").valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (result) {
            result.forEach(function (barPage) {
                if (_this.friendUser.barsAttending.indexOf(barPage.barId) >= 0) {
                    _this.friendUserBars.push(barPage);
                }
            });
            _this.isLoading = false;
        });
    };
    PopupComponent.prototype.backFromBars = function () {
        this.showBars = false;
    };
    PopupComponent.prototype.activateFriends = function () {
        var _this = this;
        this.isLoading = true;
        this.friendUserFriends = [];
        this.showFriends = true;
        this.db.list("userInfo/" + this.friendUser.uid + "/friends").valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (result) {
            _this.friendUser.friendIds = result;
            var requestArray = [];
            for (var i = 0; i < result.length; i++) {
                var id = result[i];
                var request = _this.db.object('userInfo/' + id + '/about').valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
                requestArray.push(request);
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(requestArray).subscribe(function (responseList) {
                responseList.forEach(function (friend) {
                    if (friend.uid != _this.authService.currentUser.uid)
                        _this.friendUserFriends.push(friend);
                });
                console.log();
                _this.isLoading = false;
            });
        });
    };
    PopupComponent.prototype.activateFriendOfFriend = function (user) {
        this.isLoading = true;
        this.friendOfFriendUser = user;
        this.showFriends = false;
        this.loadFriendOfFriendStatus();
    };
    PopupComponent.prototype.loadFriendOfFriendStatus = function () {
        //Check all three sources
        var _this = this;
        this.showFriendOfFriendRequestButton = false;
        this.friendOfFriendIsFriend = false;
        this.friendOfFriendIsRequestIn = false;
        this.friendOfFriendIsRequestOut = false;
        this.db.object('/userInfo/' + this.authService.currentUser.uid + '/friends/' + this.friendOfFriendUser.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (object) {
            if (object) {
                _this.friendOfFriendIsFriend = true;
                _this.showFriendOfFriendRequestButton = false;
                _this.showFriendOfFriend = true;
                console.log(_this.friendOfFriendUser);
                _this.isLoading = false;
            }
            else {
                var requestOutTask = _this.db.object('/userInfo/' + _this.authService.currentUser.uid + '/friendRequestOut/' + _this.friendOfFriendUser.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
                var requestInTask = _this.db.object('/userInfo/' + _this.authService.currentUser.uid + '/friendRequestIn/' + _this.friendOfFriendUser.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1));
                var fork = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])([requestOutTask, requestInTask]);
                fork.subscribe(function (result) {
                    if (result[0])
                        _this.friendOfFriendIsRequestOut = true;
                    if (result[1])
                        _this.friendOfFriendIsRequestIn = true;
                    _this.showFriendOfFriendRequestButton = true;
                    _this.showFriendOfFriend = true;
                    _this.isLoading = false;
                });
            }
        });
    };
    PopupComponent.prototype.sendFriendOfFriendRequest = function () {
        this.authService.currentUser.friendRequestOut.push(this.friendOfFriendUser.uid);
        this.friendOfFriendIsRequestOut = true;
        this.authService.submitFriendRequest(this.friendOfFriendUser.uid);
    };
    PopupComponent.prototype.acceptFriendOfFriendRequest = function () {
        var arr = this.authService.currentUser.friendRequestIn;
        arr.splice(arr.indexOf(this.friendOfFriendUser.uid), 1);
        this.authService.currentUser.friendIds.push(this.friendOfFriendUser.uid);
        this.authService.addFriendData(this.friendOfFriendUser.uid);
        this.friendOfFriendIsRequestIn = false;
        this.friendOfFriendIsFriend = true;
        this.authService.acceptFriendRequest(this.friendOfFriendUser.uid);
    };
    PopupComponent.prototype.back = function () {
        if (this.showBars) {
            this.showBars = false;
        }
        else if (this.showFriends) {
            this.showFriends = false;
        }
        else if (this.showFriendOfFriend) {
            this.showFriendOfFriend = false;
            this.showFriends = true;
        }
    };
    // Profile Pic Editing
    PopupComponent.prototype.hideProfilePicEditing = function () {
        this.showProfilePicEditing = false;
        this.mainService.showProfilePicEditing.next(false);
    };
    PopupComponent.prototype.resizeAndUpload = function (file) {
        var self = this;
        // Ensure it's an image
        if (file.type.match(/image.*/)) {
            console.log('An image has been loaded');
            // Load the image
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                var image = new Image();
                image.onload = function (imageEvent) {
                    // Resize the image
                    var canvas = document.createElement('canvas'), max_size = 5000, // TODO : pull max size from a site config
                    width = image.width, height = image.height;
                    //DO NOT DELETE BELOW CODE!!
                    // if (width > height) {
                    //     if (width > max_size) {
                    //         height *= max_size / width;
                    //         width = max_size;
                    //     }
                    // } else {
                    //     if (height > max_size) {
                    //         width *= max_size / height;
                    //         height = max_size;
                    //     }
                    // }
                    // //Override 
                    // width = max_size;
                    // height = max_size;
                    //Because above code is commented no actual resizing occurs but
                    // we can still do a quality drop below
                    //Number between 0 to 1 for image quality. Higher is more quality
                    var imageQuality = .92;
                    canvas.width = width;
                    canvas.height = height;
                    canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                    var dataUrl = canvas.toDataURL('image/jpeg', imageQuality);
                    var resizedImage = self.dataURLToBlob(dataUrl);
                    //File upload to firebase
                    var uploadFile = resizedImage;
                    var filePath = 'profilePics/' + self.authService.currentUser.uid;
                    self.storage.upload(filePath, uploadFile).then(function (_) {
                        var fileRef = self.storage.ref(filePath);
                        fileRef.getDownloadURL().subscribe(function (url) {
                            console.log('File Uploaded!');
                            console.log(url);
                            self.authService.setProfilePicture(url);
                            //self.avatarImage = url;
                        });
                    });
                };
                image.src = readerEvent.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    PopupComponent.prototype.lowerFileQuality = function (file) {
        var self = this;
        // Ensure it's an image
        if (file.type.match(/image.*/)) {
            console.log('An image has been loaded');
            // Load the image
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                var image = new Image();
                image.onload = function (imageEvent) {
                    // Resize the image
                    var canvas = document.createElement('canvas'), width = image.width, height = image.height;
                    var imageQuality = .5;
                    canvas.width = width;
                    canvas.height = height;
                    canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                    var dataUrl = canvas.toDataURL('image/jpeg', imageQuality);
                    console.log(dataUrl);
                    self.imageBase64 = dataUrl;
                };
                image.src = readerEvent.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    PopupComponent.prototype.fileChangeEvent = function (event) {
        this.showCurrentAvatar = false;
        this.imageChangedEvent = event;
        // console.log(event.target.files[0]);
        // this.lowerFileQuality(event.target.files[0]);
    };
    PopupComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    PopupComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    PopupComponent.prototype.cropperReady = function () {
        // cropper ready
    };
    PopupComponent.prototype.loadImageFailed = function () {
        // show message
    };
    PopupComponent.prototype.doneEditing = function () {
        this.submittingProfilePic = true;
        var self = this;
        setTimeout(function () {
            // document.getElementById('check').classList.add('check-complete');
            // document.getElementById('fill').classList.add('fill-complete');
            document.getElementById('circleLoader').classList.add('load-complete');
            document.getElementById('checkLoader').classList.remove('checkmarkHidden');
            document.getElementById('checkLoader').classList.add('checkmark');
            setTimeout(function () {
                self.showProfilePicEditing = false;
                self.submittingProfilePic = false;
            }, 1000);
        }, 750);
        this.resizeAndUpload(this.dataURLToBlob(this.croppedImage));
    };
    PopupComponent.prototype.hideAllPopups = function () {
        this.showCoverPopUp = false;
        this.showFriendPopUp = false;
    };
    PopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/_components/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/_components/popup/popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
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

module.exports = ".out{\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n    transition: -webkit-transform 150ms linear;\n    transition: transform 150ms linear;\n    transition: transform 150ms linear, -webkit-transform 150ms linear;\n    will-change: transform;\n}\n.in{\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    transition: -webkit-transform 150ms linear;\n    transition: transform 150ms linear;\n    transition: transform 150ms linear, -webkit-transform 150ms linear;\n}\n.hidden{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fY29tcG9uZW50cy91c2VyLXNsaWRlL3VzZXItc2xpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlDQUFpQztJQUNqQyx5QkFBeUI7SUFDekIsMENBQWtDO0lBQWxDLGtDQUFrQztJQUFsQyxrRUFBa0M7SUFDbEMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsNEJBQTRCO0lBQzVCLDBDQUFrQztJQUFsQyxrQ0FBa0M7SUFBbEMsa0VBQWtDO0FBQ3RDO0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6ImFwcC9fY29tcG9uZW50cy91c2VyLXNsaWRlL3VzZXItc2xpZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXR7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuLmlue1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBsaW5lYXI7XG59XG5cbi5oaWRkZW57XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/_components/user-slide/user-slide.component.html":
/*!******************************************************************!*\
  !*** ./src/app/_components/user-slide/user-slide.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  id=\"userSlide\" class=\"panel panel-right panel-reveal out\" >\n  <div class=\"user_login_info\">\n\n    <div class=\"user_thumb\">\n\n      <div class=\"user_details\">\n        <p>Welcome, <span>{{authService.currentUser.firstName}}</span></p>\n      </div>\n      <div (click)=\"openPicEditing()\" class=\"user_avatar\"><img style=\"height: 100px;\" id=\"avatar\" src={{avatarImage}} alt=\"\" title=\"\" /></div>\n    </div>\n\n    <nav class=\"user-nav\">\n      <ul>\n        <li><a (click)=\"userSlideSelect(4)\"><img src=\"./assets/images/icons/gray/settings.png\" alt=\"\" title=\"\" /><span>Account\n              Settings</span></a></li>\n        <!-- <li><a href=\"features.html\"><img src=\"./assets/images/icons/gray/briefcase.png\" alt=\"\" title=\"\" /><span>My\n              Account</span></a></li> -->\n        <li><a (click)=\"userSlideSelect(2)\"><img src=\"./assets/images/icons/gray/users.png\" alt=\"\"\n              title=\"\" /><span>Friends</span><strong>12</strong></a></li>\n        <li><a (click)=\"userSlideSelect(3)\"><img src=\"./assets/images/icons/gray/love.png\" alt=\"\"\n              title=\"\" /><span>Liked Bars</span><strong>5</strong></a></li>\n        <li><a (click)=\"logout()\"><img src=\"./assets/images/icons/gray/lock.png\" alt=\"\" title=\"\" /><span>Logout</span></a></li>\n      </ul>\n    </nav>\n  </div>\n</div>\n\n\n\n"

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
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");






var UserSlideComponent = /** @class */ (function () {
    //AuthService used in html
    function UserSlideComponent(mainService, authService, router, storage) {
        this.mainService = mainService;
        this.authService = authService;
        this.router = router;
        this.storage = storage;
        this.slideInLogin = true;
        this.avatarImage = "./assets/images/users/blank_profile.png";
    }
    UserSlideComponent.prototype.ngOnInit = function () {
        //Set profile picture if not null
        console.log(this.authService.currentUser);
        if (!this.authService.currentUser.profilePicUrl.toLowerCase().includes("null")) {
            this.avatarImage = this.authService.currentUser.profilePicUrl;
        }
        this.profilePicChangeListerner();
    };
    UserSlideComponent.prototype.ngAfterViewInit = function () {
        document.getElementById("userSlide").classList.add("hidden");
        document.getElementById("userSlide").classList.add("out");
        this.userSlideInit();
    };
    UserSlideComponent.prototype.profilePicChangeListerner = function () {
        var _this = this;
        this.authService.profilePicUrlChange.subscribe(function (value) {
            if (value == "")
                return;
            console.log("Change");
            setTimeout(function (_) {
                _this.avatarImage = value;
            }, 2000);
            _this.avatarImage = "";
        });
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
    UserSlideComponent.prototype.openPicEditing = function () {
        this.mainService.showProfilePicEditing.next(true);
    };
    UserSlideComponent.prototype.userSlideSelect = function (num) {
        this.mainService.userSlideClick.next(num);
    };
    UserSlideComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-slide',
            template: __webpack_require__(/*! ./user-slide.component.html */ "./src/app/_components/user-slide/user-slide.component.html"),
            styles: [__webpack_require__(/*! ./user-slide.component.css */ "./src/app/_components/user-slide/user-slide.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
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

module.exports = "\n<div style=\"margin: 12% 5% 0% 5%;\" *ngIf=\"displayFriends\">\n\n  <!-- OPTIONAL Friend Request In -->\n  <div *ngIf=\"pendingFriends.length > 0\">\n    <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\n      <h3 style=\"padding: 0 0 0 0;\">\n        <span>Friend Request</span>\n      </h3>\n    </div>\n  \n    <div id=\"friendHolder\" *ngIf=\"displayFriends\">\n      <ul class=\"features_list\" *ngFor=\"let friend of pendingFriends\" style=\"padding: 0px 0 0 0; position:relative\">\n        <li (click)=\"openFriendPopUp(friend)\">\n          <div style=\"padding-bottom: 10px;\">\n            <span class=\"features_list_span\">\n              <img src=\"{{friend.profilePicUrl == 'null'? './assets/images/users/blank_profile.png' : friend.profilePicUrl}}\">\n              <span class=\"features_list_span_text\" style=\"font-size: 110%;\">{{friend.firstName}} {{friend.lastName}} </span>\n            </span>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <!-- HEADER -->\n  <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\n    <h3 style=\"padding: 0 0 0 0;\">\n      <span>Your Friends</span>\n    </h3>\n  </div>\n\n  <!-- FRIEND LIST -->\n  <div id=\"friendHolder\" >\n    <ul class=\"features_list\" *ngFor=\"let friend of friends\" style=\"padding: 0px 0 0 0; position:relative\">\n      <li (click)=\"openFriendPopUp(friend)\">\n        <div style=\"padding-bottom: 10px;\">\n          <span class=\"features_list_span\">\n              <img src=\"{{friend.profilePicUrl == 'null'? './assets/images/users/blank_profile.png' : friend.profilePicUrl}}\">\n              <span class=\"features_list_span_text\" style=\"font-size: 110%;\">{{friend.firstName}} {{friend.lastName}} </span> \n          </span>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n</div>\n\n<div *ngIf=\"!displayFriends\" class=\"loadingHolder\">\n    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n</div>\n"

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

module.exports = "<app-bar-page *ngIf=\"showBarPage\" [barPageIdChange]=\"barPageId\" [slideInBar]=\"barSlide\" [location]=\"'liked-bars'\">\n  </app-bar-page>\n  \n\n<div style=\"margin: 12% 5% 0% 5%;\" *ngIf=\"showInfo\">\n\n  <!-- HEADER -->\n  <div *ngIf=\"attendingBarCards.length>0\" style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\n    <h3 style=\"padding: 0 0 0 0;\">\n      <span>Bars You Are Attending Tonight</span>\n    </h3>\n  </div>\n\n  <!-- For each here -->\n  <ul class=\"shop_items\" style=\"padding-top: 13px;\">\n\n      <!-- BAR CARD -->\n      <li id=\"barCard\" *ngFor=\"let barCard of attendingBarCards\" (click)=\"onBarCardClick($event,barCard.barId)\">\n        <div class=\"shop_thumb\">\n          <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\n        </div>\n        <div class=\"shop_item_details\">\n          <h4>{{barCard.barName}}</h4>\n          <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\n              </span>\n            </li>\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\n              </span>\n            </li>\n          </ul>\n          <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\n            <!-- <app-like></app-like> -->\n            <img id=\"like\" [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\n              alt=\"\" title=\"\" />\n          </span>\n        </div>\n      </li>\n  \n    </ul>\n  \n\n  <!-- HEADER -->\n  <div style=\"padding: 10px 0 0 0; border-bottom:1px black solid;\">\n    <h3 style=\"padding: 0 0 0 0;\">\n      <span>Liked Bars</span>\n    </h3>\n  </div>\n\n  <!-- For each here -->\n  <ul class=\"shop_items\" style=\"padding-top: 13px;\">\n\n    <!-- BAR CARD -->\n    <li id=\"barCard\" *ngFor=\"let barCard of barCards\" (click)=\"onBarCardClick($event,barCard.barId)\">\n      <div class=\"shop_thumb\">\n        <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\n      </div>\n      <div class=\"shop_item_details\">\n        <h4>{{barCard.barName}}</h4>\n        <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\n          <li>\n            <span class=\"features_list_span\">\n              <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\n              <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\n            </span>\n          </li>\n          <li>\n            <span class=\"features_list_span\">\n              <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\n              <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\n            </span>\n          </li>\n        </ul>\n        <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\n          <!-- <app-like></app-like> -->\n          <img id=\"like\" [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\n            alt=\"\" title=\"\" />\n        </span>\n      </div>\n    </li>\n\n  </ul>\n\n</div>\n\n<div *ngIf=\"!showInfo\" class=\"loadingHolder\">\n    <div class=\"lds-ring\"><div></div><div></div><div></div><div></div></div>\n</div>"

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
        this.showInfo = false;
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
        //Start Loading
        this.showInfo = false;
        this.barCards = [];
        this.attendingBarCards = [];
        this.db.list('barCards/' + this.dayOfTheWeek).valueChanges().subscribe(function (result) {
            result.forEach(function (item) {
                if (_this.authService.currentUser.barsAttending.indexOf(item.barId) > -1)
                    _this.attendingBarCards.push(item);
                else if (_this.authService.currentUser.likedBars.indexOf(item.barId) > -1)
                    _this.barCards.push(item);
            });
            //Done Loading
            _this.showInfo = true;
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
            styles: [__webpack_require__(/*! ./liked-bars.component.css */ "./src/app/_pages/liked-bars/liked-bars.component.css"), __webpack_require__(/*! ../main/main.component.css */ "./src/app/_pages/main/main.component.css")]
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

module.exports = "\n.center-screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-height: 100vh;\n  }\n\n\n\n.circle-loader {\n    margin-bottom: 0;\n    border: 3px solid rgba(0, 0, 0, 0.2);\n    border-left-color: #F2C843;\n    -webkit-animation: loader-spin 1.2s infinite linear;\n            animation: loader-spin 1.2s infinite linear;\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 50%;\n    width: 7em;\n    height: 7em;\n  }\n\n\n\n.load-complete {\n    -webkit-animation: none;\n    animation: none;\n    border-color: #F2C843;\n    transition: border 500ms ease-out;\n  }\n\n\n\n.checkmarkHidden {\n    display: none;\n  }\n\n\n\n.checkmark{\n    display:auto;\n  }\n\n\n\n.checkmark.draw:after {\n    -webkit-animation-duration: 800ms;\n            animation-duration: 800ms;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-name: checkmark;\n            animation-name: checkmark;\n    -webkit-transform: scaleX(-1) rotate(135deg);\n            transform: scaleX(-1) rotate(135deg);\n  }\n\n\n\n.checkmark:after {\n    opacity: 1;\n    height: 3.5em;\n    width: 1.75em;\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    border-right: 4px solid #F2C843;\n    border-top: 4px solid #F2C843;\n    content: '';\n    left: 1.75em;\n    top: 3.5em;\n    position: absolute;\n  }\n\n\n\n@-webkit-keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n\n\n\n@keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n\n\n\n@-webkit-keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n\n\n\n@keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n\n\n\n.collapse {\n    display: none;\n  }\n\n\n\n.collapsing {\n    position: relative;\n    height: 0;\n    overflow: hidden;\n    padding: 0 0 0 0;\n    transition-property: height, visibility;\n    transition-duration: 0.35s;\n    transition-timing-function: ease;\n  }\n\n\n\n.show {\n    display: block !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjs7OztBQUlGO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsbURBQTJDO1lBQTNDLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7RUFDYjs7OztBQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUNBQWlDO0VBQ25DOzs7O0FBQ0E7SUFDRSxhQUFhO0VBQ2Y7Ozs7QUFDQTtJQUNFLFlBQVk7RUFDZDs7OztBQUNBO0lBQ0UsaUNBQXlCO1lBQXpCLHlCQUF5QjtJQUN6Qix1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsNENBQW9DO1lBQXBDLG9DQUFvQztFQUN0Qzs7OztBQUNBO0lBQ0UsVUFBVTtJQUNWLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjs7OztBQUlBO0lBQ0U7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtHQUM1QjtJQUNDO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7R0FDOUI7RUFDRDs7OztBQVBBO0lBQ0U7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtHQUM1QjtJQUNDO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7R0FDOUI7RUFDRDs7OztBQUNBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7R0FDZjtJQUNDO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtFQUNEOzs7O0FBckJBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7R0FDZjtJQUNDO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtFQUNEOzs7O0FBR0E7SUFDRSxhQUFhO0VBQ2Y7Ozs7QUFHQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUdoQix1Q0FBdUM7SUFHdkMsMEJBQTBCO0lBRzFCLGdDQUFnQztFQUNsQzs7OztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCIiwiZmlsZSI6ImFwcC9fcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNlbnRlci1zY3JlZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgfVxuXG5cblxuLmNpcmNsZS1sb2FkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjJDODQzO1xuICAgIGFuaW1hdGlvbjogbG9hZGVyLXNwaW4gMS4ycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogN2VtO1xuICAgIGhlaWdodDogN2VtO1xuICB9XG4gIC5sb2FkLWNvbXBsZXRlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjRjJDODQzO1xuICAgIHRyYW5zaXRpb246IGJvcmRlciA1MDBtcyBlYXNlLW91dDtcbiAgfVxuICAuY2hlY2ttYXJrSGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jaGVja21hcmt7XG4gICAgZGlzcGxheTphdXRvO1xuICB9XG4gIC5jaGVja21hcmsuZHJhdzphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGVja21hcms7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiAzLjVlbTtcbiAgICB3aWR0aDogMS43NWVtO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNGMkM4NDM7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNGMkM4NDM7XG4gICAgY29udGVudDogJyc7XG4gICAgbGVmdDogMS43NWVtO1xuICAgIHRvcDogMy41ZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICBcbiAgXG4gIEBrZXlmcmFtZXMgbG9hZGVyLXNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICB9XG4gIH1cbiAgQGtleWZyYW1lcyBjaGVja21hcmsge1xuICAgIDAlIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiAgICAyMCUge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gICAgNDAlIHtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiAgfVxuXG5cbiAgLmNvbGxhcHNlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuICAuY29sbGFwc2luZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDAgMCAwIDA7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiBoZWlnaHQsIHZpc2liaWxpdHk7XG4gICAgLW8tdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0LCB2aXNpYmlsaXR5O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGhlaWdodCwgdmlzaWJpbGl0eTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIC1vLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMzVzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XG4gIH1cblxuICAuc2hvdyB7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/_pages/login/login.component.html":
/*!***************************************************!*\
  !*** ./src/app/_pages/login/login.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body id=\"mobile_wrap\" class=\"accelerateMe\">\n\n  <div class=\"navbar navbar--fixed navbar--fixed-top navbar--bg\" style=\"background-color:black; z-index: 1001;\">\n    <div class=\"navbar__col navbar__col--title\">\n      <a href=\"index.html\">\n        <img src=\"./assets/images/TextLogo.png\" width=\"150px\" style=\"padding-top:16px; padding-left: 35px;\">\n      </a>\n    </div>\n\n  </div>\n\n  <div [hidden]=\"isLoading\">\n    <!-- Login Popup -->\n    <div class=\"popup popup-login\" style=\"z-index: 1000;\">\n      <div class=\"content-block\">\n        <div class=\"close_popup_button\">\n          <!-- <a href=\"#\" class=\"close-popup\" data-popup=\".popup-login\">\n          <img src=\"./assets/images/icons/black/menu_close.png\" alt=\"\" title=\"\" />\n        </a> -->\n        </div>\n        <div class=\"loginblock\" style=\"top: 23%;\">\n\n          <div class=\"collapse show\" id=\"login\">\n            <h4 style=\"font-weight: bold; font-size: 30px;\">LOGIN</h4>\n            <div class=\"loginform\">\n              <input id=\"logInEmail\" (click)=\"focus('logInEmail')\" type=\"text\" [(ngModel)]=\"logInUsername\" name=\"Username\" class=\"form_input required\"\n                placeholder=\"Email\" />\n              <input id=\"logInPassword\" (click)=\"focus('logInPassword')\" type=\"password\" [(ngModel)]=\"logInPassword\" name=\"Password\" class=\"form_input required\"\n                placeholder=\"Password\" />\n              <div class=\"forgot_pass\">\n                <a href=\"#\" data-popup=\".popup-forgot\" class=\"open-popup\" style=\"color: #012e77;\">Forgot Password?</a>\n              </div>\n              <input (click)=\"logIn()\" readonly=\"readonly\" class=\"form_submit\"  value=\"SIGN IN\" />\n\n              <div class=\"signup_bottom\">\n                <p>Don't have an account?</p>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"collapse\" id=\"signup\">\n            <h4 style=\"font-weight: bold; font-size: 30px;\">SIGN UP</h4>\n            <div class=\"loginform\">\n              <input id=\"signupFirstName\" (click)=\"focus('signupFirstName')\" type=\"text\" [(ngModel)]=\"createFirstName\" class=\"form_input required\"\n                placeholder=\"First Name\" />\n              <input id=\"signupLastName\" (click)=\"focus('signupLastName')\" type=\"text\" [(ngModel)]=\"createLastName\" class=\"form_input required\"\n              placeholder=\"Last Name (Optional)\" />\n              <input id=\"signupUsername\" (click)=\"focus('signupUsername')\" type=\"text\" [(ngModel)]=\"createUsername\"  class=\"form_input required\"\n                placeholder=\"Username\" />\n              <input id=\"signupEmail\" (click)=\"focus('signupEmail')\" type=\"text\" [(ngModel)]=\"createEmail\" name=\"Username\" class=\"form_input required\"\n                placeholder=\"Email\" />\n              <input id=\"signupPassword\" (click)=\"focus('signupPassword')\" type=\"password\" [(ngModel)]=\"createPassword\"  class=\"form_input required\"\n                placeholder=\"Password\" />\n              <input id=\"signupPasswordRepeat\" (click)=\"focus('signupPasswordRepeat')\" type=\"password\" [(ngModel)]=\"createPassword2\"  class=\"form_input required\"\n              placeholder=\"Repeat Password\" (focusout)=\"comparePasswords()\"/>\n\n              <p style=\"text-align: left; color:red;\" *ngIf=\"passwordsDoNotMatch\">Passwords do not match.</p>\n              \n              <input (click)=\"register()\" readonly=\"readonly\" class=\"form_submit\"  value=\"REGISTER\" />\n              <div class=\"signup_bottom\">\n                  <p>Have an account?</p>\n                </div>\n\n            </div>\n          </div>\n\n\n\n          <div class=\"signup_bottom\" style=\"padding:0px; margin-top: -15px;\">\n            <a data-popup=\".popup-signup\" class=\"open-popup\"\n              (click)=\"goToSignUp()\" style=\"background-color: transparent; color:black; border: 1px black solid;\">{{switchPageText}}</a>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n\n\n\n  <!--Loading-->\n  <div [hidden]=\"!isLoading\" class=\"center-screen\">\n    <div id=\"circleLoader\" class=\"circle-loader\">\n      <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\n    </div>\n  </div>\n\n\n\n</body>"

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

module.exports = ".barSlideIn{\n  background: white;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n}\n\n.block_clicks{\n  pointer-events: none;\n  touch-action: none;\n}\n\n.out{\n  -webkit-transform: translateX(0%);\n  transform: translateX(0%);\n  transition: -webkit-transform 150ms linear;\n  transition: transform 150ms linear;\n  transition: transform 150ms linear, -webkit-transform 150ms linear;\n  will-change: transform;\n}\n\n.in{\n  -webkit-transform: translateX(-80%);\n  transform: translateX(-80%);\n  transition: -webkit-transform 150ms linear;\n  transition: transform 150ms linear;\n  transition: transform 150ms linear, -webkit-transform 150ms linear;\n}\n\n.pageClick{\n  position:absolute;\n  top:0;\n  left:0;\n  width: 15%;\n  height:100%;\n  z-index:15000;\n}\n\n.user_slide_hidden{\n  display: none;\n}\n\n.centered {\n    position: fixed;\n    top: 40%;\n    left: 50%;\n    /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n.slideCentered {\n    position: fixed;\n    top: 50%;\n    left: 150%;\n    /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n.slideCentered-hidden {\n    display:none;\n    position: fixed;\n    top: 50%;\n    left: 150%;\n    /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n.centered-hidden {\n    display:none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    /* bring your own prefixes */\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n\n.lds-ring {\n    display: inline-block;\n    position: relative;\n    width: 64px;\n    height: 64px;\n  }\n\n.lds-ring div {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 51px;\n    height: 51px;\n    margin: 6px;\n    border: 6px solid #eec536;\n    border-radius: 50%;\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: #eec536 transparent transparent transparent;\n  }\n\n.lds-ring div:nth-child(1) {\n    -webkit-animation-delay: -0.45s;\n            animation-delay: -0.45s;\n  }\n\n.lds-ring div:nth-child(2) {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s;\n  }\n\n.lds-ring div:nth-child(3) {\n    -webkit-animation-delay: -0.15s;\n            animation-delay: -0.15s;\n  }\n\n@-webkit-keyframes lds-ring {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n\n@keyframes lds-ring {\n    0% {\n      -webkit-transform: rotate(0deg);\n              transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n              transform: rotate(360deg);\n    }\n  }\n\n.slideInPage{\n    position:fixed;\n    padding:0;\n    margin:0;\n    z-index: 100;\n    top:50px;\n\n    -webkit-transform: translateX(100%);\n\n            transform: translateX(100%);\n\n  \n    width: 100%;\n    height: 100%;\n    background:white;\n  \n  }\n\n.picture-swipe-container {\n    width: 100%;\n    height: 100%;\n  }\n\n.picture-swipe-slide {\n    text-align: center;\n    font-size: 18px;\n    background: #fff;\n    /* Center slide text vertically */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n.barDealsSection {\n    padding: 10px 0 0 0;\n    border-bottom:1px black solid;\n  }\n\n.preventScroll{\n  overflow: auto;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsa0NBQTBCO1VBQTFCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMseUJBQXlCO0VBQ3pCLDBDQUFrQztFQUFsQyxrQ0FBa0M7RUFBbEMsa0VBQWtDO0VBQ2xDLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLG1DQUFtQztFQUNuQywyQkFBMkI7RUFDM0IsMENBQWtDO0VBQWxDLGtDQUFrQztFQUFsQyxrRUFBa0M7QUFDcEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsS0FBSztFQUNMLE1BQU07RUFDTixVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFHRTtJQUNFLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULDRCQUE0QjtJQUM1Qix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0FBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7SUFDUixVQUFVO0lBQ1YsNEJBQTRCO0lBQzVCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0FBR0E7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsNEJBQTRCO0lBQzVCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7RUFDbEM7O0FBR0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNFQUE4RDtZQUE5RCw4REFBOEQ7SUFDOUQseURBQXlEO0VBQzNEOztBQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6Qjs7QUFDQTtJQUNFLDhCQUFzQjtZQUF0QixzQkFBc0I7RUFDeEI7O0FBQ0E7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztBQUNBO0lBQ0U7TUFDRSwrQkFBdUI7Y0FBdkIsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBeUI7Y0FBekIseUJBQXlCO0lBQzNCO0VBQ0Y7O0FBUEE7SUFDRTtNQUNFLCtCQUF1QjtjQUF2Qix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUF5QjtjQUF6Qix5QkFBeUI7SUFDM0I7RUFDRjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixRQUFROztJQUVSLG1DQUEyQjs7WUFBM0IsMkJBQTJCOzs7SUFHM0IsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7O0VBRWxCOztBQUdBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFDQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlDQUFpQztJQUlqQyxhQUFhO0lBSWIsdUJBQXVCO0lBSXZCLG1CQUFtQjtFQUNyQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7RUFDL0I7O0FBR0Y7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6ImFwcC9fcGFnZXMvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFyU2xpZGVJbntcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuXG4uYmxvY2tfY2xpY2tze1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xufVxuXG4ub3V0e1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBsaW5lYXI7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG4uaW57XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC04MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTgwJSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBsaW5lYXI7XG59XG5cbi5wYWdlQ2xpY2t7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICB3aWR0aDogMTUlO1xuICBoZWlnaHQ6MTAwJTtcbiAgei1pbmRleDoxNTAwMDtcbn1cblxuLnVzZXJfc2xpZGVfaGlkZGVue1xuICBkaXNwbGF5OiBub25lO1xufVxuICBcbiAgXG4gIC5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNDAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAvKiBicmluZyB5b3VyIG93biBwcmVmaXhlcyAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG4gIFxuICAuc2xpZGVDZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDE1MCU7XG4gICAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgLnNsaWRlQ2VudGVyZWQtaGlkZGVuIHtcbiAgICBkaXNwbGF5Om5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDE1MCU7XG4gICAgLyogYnJpbmcgeW91ciBvd24gcHJlZml4ZXMgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuICBcbiAgXG4gIC5jZW50ZXJlZC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIC8qIGJyaW5nIHlvdXIgb3duIHByZWZpeGVzICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cbiAgXG4gIFxuICAubGRzLXJpbmcge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA2NHB4O1xuICB9XG4gIC5sZHMtcmluZyBkaXYge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MXB4O1xuICAgIGhlaWdodDogNTFweDtcbiAgICBtYXJnaW46IDZweDtcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjZWVjNTM2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGxkcy1yaW5nIDEuMnMgY3ViaWMtYmV6aWVyKDAuNSwgMCwgMC41LCAxKSBpbmZpbml0ZTtcbiAgICBib3JkZXItY29sb3I6ICNlZWM1MzYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xuICB9XG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuICB9XG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1yaW5nIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlSW5QYWdle1xuICAgIHBvc2l0aW9uOmZpeGVkO1xuICAgIHBhZGRpbmc6MDtcbiAgICBtYXJnaW46MDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdG9wOjUwcHg7XG5cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XG5cbiAgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6d2hpdGU7XG4gIFxuICB9XG4gIFxuICBcbiAgLnBpY3R1cmUtc3dpcGUtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLnBpY3R1cmUtc3dpcGUtc2xpZGUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAvKiBDZW50ZXIgc2xpZGUgdGV4dCB2ZXJ0aWNhbGx5ICovXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmJhckRlYWxzU2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTBweCAwIDAgMDtcbiAgICBib3JkZXItYm90dG9tOjFweCBibGFjayBzb2xpZDtcbiAgfVxuXG5cbi5wcmV2ZW50U2Nyb2xse1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/_pages/main/main.component.html":
/*!*************************************************!*\
  !*** ./src/app/_pages/main/main.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"views\">\n\n  <div class=\"view view-main\">\n    <div class=\"pages\">\n      <div data-page=\"shop\" class=\"page\">\n        <div class=\"page-content\" id=\"mainPage\">\n\n\n          <div style=\"-webkit-overflow-scrolling:touch;\">\n              <app-popup></app-popup>\n          </div>\n\n\n          <div class=\"user_slide\" style=\"-webkit-overflow-scrolling:touch;\">\n            <app-user-slide></app-user-slide>\n          </div>\n\n\n          <div class=\"main_content\">\n            <div *ngIf=\"userSlide\" class=\"pageClick\" (click)=\"pageClick()\"></div>\n            <div id=\"headerAndRouter\">\n              <app-header></app-header>\n              <div id=\"routerHolder\">\n                <router-outlet></router-outlet>\n              </div>\n            </div>\n            <app-navbar style=\"position: absolute;\"></app-navbar>\n          </div>\n\n\n\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _components_full_loading_full_loading_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../_components/full-loading/full-loading.module */ "./src/app/_components/full-loading/full-loading.module.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");




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
                _components_full_loading_full_loading_module__WEBPACK_IMPORTED_MODULE_20__["FullLoadingModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_21__["ImageCropperModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_19__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDBhMcOMXGvKweHVyPpyKHC3bDnbBQwZYU'
                })
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

module.exports = "input[type=text].instaSearch {\n    font-family: proxima-nove, 'Helvetica Neue', Arial, Helvetica, sans-serif;\n    font-size: 15px;\n    font-weight: 300;\n    letter-spacing: .5px;\n    height: 30px;\n    border-radius: 15px;\n    text-align: left;\n    padding-left: 40%;\n    border: 1px solid #edeeee;\n    background: #fafafa;\n    background-image: url('glass.png');\n    background-repeat: no-repeat;\n    background-size: 13px 13px;\n    background-position: 38% 47%;\n    outline: none;\n    width: 55%;\n    margin-top: 10px;\n    margin-bottom: 15px;\n    color: #c9cbcc;\n}\ninput[type=text]:focus.instaSearch {\n    text-align: left;\n    padding-left: 30px;\n    width:88%;\n    background: #ffffff;\n    background-image: url('glass.png');\n    background-repeat: no-repeat;\n    background-size: 13px 13px;\n    background-position: 15px 7px;\n    color: #000;\n}\ninput:focus::-webkit-input-placeholder {\n     color: #c9cbcc;\n}\ninput:focus::-moz-placeholder {\n     color: #c9cbcc;\n}\ninput:focus::-moz-placeholder {   /* Older versions of Firefox */\n     color: #c9cbcc;\n}\ninput:focus::-ms-input-placeholder { \n     color: #c9cbcc;\n}\n.searchWrap{\n    padding-top: 20%;\n    padding-left: 4%;\n}\n/* Add a black background color to the top navigation */\n.topnav {\n    margin-top: 50px;\n    position: absolute;\n    width: 100%;\n    right: 0%;\n    background-color: transparent;\n    overflow: hidden;\n  }\n.adjust {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n/* Style the links inside the navigation bar */\n.holder  {\n    float: left;\n    color: black;\n    text-align: center;\n    padding: 3px 0px;\n    width: 50%;\n    text-decoration: none;\n    font-size: 17px;\n}\n/* Add a color to the active/current link */\n.active {\n    background-color: transparent;\n    color: black;\n    border-bottom: 2px black solid;\n}\n.barHolder{\n    position: absolute;\n    width:100%;\n    -webkit-transform: translateX(0%);\n\t\t\ttransform: translateX(0%);\n\ttransition: -webkit-transform 300ms linear;\n\ttransition: transform 300ms linear;\n\ttransition: transform 300ms linear, -webkit-transform 300ms linear;\n\twill-change: transform;\n\n}\n.bHHidden{\n    -webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n    transition: -webkit-transform 300ms linear;\n    transition: transform 300ms linear;\n    transition: transform 300ms linear, -webkit-transform 300ms linear;\n    will-change: transform;\n}\n.userHolder{\n    position: absolute;\n    width:100%;\n    -webkit-transform: translateX(100%);\n\t\t\ttransform: translateX(100%);\n\ttransition: -webkit-transform 300ms linear;\n\ttransition: transform 300ms linear;\n\ttransition: transform 300ms linear, -webkit-transform 300ms linear;\n    will-change: transform;\n}\n.uHOpen{\n    -webkit-transform: translateX(0%);\n    transform: translateX(0%);\n    transition: -webkit-transform 300ms linear;\n    transition: transform 300ms linear;\n    transition: transform 300ms linear, -webkit-transform 300ms linear;\n    will-change: transform;\n}\n.displayNone{\n    display: none;\n}\n.displayInherit{\n    display:inherit;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUVBQXlFO0lBQ3pFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtDQUF5RDtJQUN6RCw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLGtDQUF5RDtJQUN6RCw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7QUFFQTtLQUNLLGNBQWM7QUFDbkI7QUFDQTtLQUNLLGNBQWM7QUFDbkI7QUFDQSxrQ0FBa0MsOEJBQThCO0tBQzNELGNBQWM7QUFDbkI7QUFDQTtLQUNLLGNBQWM7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFFQSx1REFBdUQ7QUFDdkQ7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsNkJBQTZCO0lBQzdCLGdCQUFnQjtFQUNsQjtBQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBLDhDQUE4QztBQUM5QztJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7QUFHQSwyQ0FBMkM7QUFDM0M7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixpQ0FBaUM7R0FDbEMseUJBQXlCO0NBQzNCLDBDQUFrQztDQUFsQyxrQ0FBa0M7Q0FBbEMsa0VBQWtDO0NBQ2xDLHNCQUFzQjs7QUFFdkI7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw0QkFBNEI7SUFDNUIsMENBQWtDO0lBQWxDLGtDQUFrQztJQUFsQyxrRUFBa0M7SUFDbEMsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1DQUFtQztHQUNwQywyQkFBMkI7Q0FDN0IsMENBQWtDO0NBQWxDLGtDQUFrQztDQUFsQyxrRUFBa0M7SUFDL0Isc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMseUJBQXlCO0lBQ3pCLDBDQUFrQztJQUFsQyxrQ0FBa0M7SUFBbEMsa0VBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJhcHAvX3BhZ2VzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9dGV4dF0uaW5zdGFTZWFyY2gge1xuICAgIGZvbnQtZmFtaWx5OiBwcm94aW1hLW5vdmUsICdIZWx2ZXRpY2EgTmV1ZScsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC41cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDQwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZWVlO1xuICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dsYXNzLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxM3B4IDEzcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMzglIDQ3JTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdpZHRoOiA1NSU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGNvbG9yOiAjYzljYmNjO1xufVxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cy5pbnN0YVNlYXJjaCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgd2lkdGg6ODglO1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9nbGFzcy5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEzcHggMTNweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4IDdweDtcbiAgICBjb2xvcjogIzAwMDtcbn1cbiBcbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgY29sb3I6ICNjOWNiY2M7XG59XG5pbnB1dDpmb2N1czo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgIGNvbG9yOiAjYzljYmNjO1xufVxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIgeyAgIC8qIE9sZGVyIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgICAgY29sb3I6ICNjOWNiY2M7XG59XG5pbnB1dDpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgXG4gICAgIGNvbG9yOiAjYzljYmNjO1xufVxuXG4uc2VhcmNoV3JhcHtcbiAgICBwYWRkaW5nLXRvcDogMjAlO1xuICAgIHBhZGRpbmctbGVmdDogNCU7XG59XG5cbi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXG4udG9wbmF2IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICByaWdodDogMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuXG4uYWRqdXN0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG4gIFxuLyogU3R5bGUgdGhlIGxpbmtzIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cbi5ob2xkZXIgIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDNweCAwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAxN3B4O1xufVxuXG5cbi8qIEFkZCBhIGNvbG9yIHRvIHRoZSBhY3RpdmUvY3VycmVudCBsaW5rICovXG4uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xufVxuXG5cbi5iYXJIb2xkZXJ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcblx0d2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcblxufVxuXG4uYkhIaWRkZW57XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuXG4udXNlckhvbGRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcblx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xufVxuXG4udUhPcGVue1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBsaW5lYXI7XG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbn1cblxuLmRpc3BsYXlOb25le1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5kaXNwbGF5SW5oZXJpdHtcbiAgICBkaXNwbGF5OmluaGVyaXQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/_pages/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/_pages/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-bar-page *ngIf=\"showBarPage\" [barPageIdChange]=\"barPageId\" [slideInBar]=\"barSlide\" [location]=\"'search'\">\n</app-bar-page>\n\n\n\n<div class=\"topnav\">\n  <div class=\"adjust\">\n    <div (click)=\"setActiveSearchPage(0)\" [className]=\"activeNavIcon(0)? 'holder active'  : 'holder'\">\n      <span>Bars</span>\n    </div>\n    <div (click)=\"setActiveSearchPage(1)\" [className]=\"activeNavIcon(1)? 'holder active'  : 'holder'\">\n      <span>Users</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"searchWrap\">\n\n  <input (click)=\"focus()\" (focusout)=\"search()\" [(ngModel)]=\"searchString\" type=\"text\" id=\"subject\" class=\"instaSearch\"\n    value=\"\" placeholder=\"Search\">\n\n</div>\n\n\n\n<div class=\"barHolder\" id=\"barHolder\">\n  <!-- For each here -->\n  <div style=\"width:92%; margin: 0 4%;\">\n    <ul class=\"shop_items\">\n\n      <!-- BAR CARD -->\n      <li id=\"barCard\" *ngFor=\"let barCard of barResults\" (click)=\"onBarCardClick($event,barCard.barId)\">\n        <div class=\"shop_thumb\">\n          <img src={{barCard.barPictureUrl}} alt=\"\" title=\"\" class=\"barCardPic\" />\n        </div>\n        <div class=\"shop_item_details\">\n          <h4>{{barCard.barName}}</h4>\n          <ul class=\"features_list\" style=\"padding: 0% 0 0 0;\">\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight1Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight1}}</span>\n              </span>\n            </li>\n            <li>\n              <span class=\"features_list_span\">\n                <img src={{barCard.highlight2Icon}} alt=\"\" title=\"\" />\n                <span class=\"features_list_span_text\">{{barCard.highlight2}}</span>\n              </span>\n            </li>\n          </ul>\n          <span class=\"open-popup shopfav\" (click)=\"likeBar(barCard)\">\n            <!-- <app-like></app-like> -->\n            <img id=\"like\"\n              [src]=\"checkLikedStatus(barCard)? './assets/images/icons/black/lovefilledblack.png' : './assets/images/icons/black/love.png'\"\n              alt=\"\" title=\"\" />\n          </span>\n        </div>\n      </li>\n\n\n    </ul>\n  </div>\n</div>\n\n\n\n<div class=\"userHolder\" id=\"userHolder\">\n  <div id=\"headDeals\">\n    <ul class=\"features_list\" *ngFor=\"let userRes of userResults\" style=\"padding: 0px 0 0 0; position:relative\">\n      <li (click) = \"openFriendPopUp(userRes.about)\">\n        <div style=\"padding-bottom: 10px;\">\n          <span class=\"features_list_span\">\n            <img src=\"{{userRes.about.profilePicUrl == 'null'? './assets/images/users/blank_profile.png' : userRes.about.profilePicUrl}}\" alt=\"\" title=\"\" />\n            <span class=\"features_list_span_text\" style=\"font-size: 110%;\">{{userRes.about.firstName}} {{userRes.about.lastName}}</span>\n          </span>\n        </div>\n      </li>\n    </ul>\n  </div>\n</div>"

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







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
            var firstNames = [];
            var lastNames = [];
            var finishedLoadingNumber = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](0);
            finishedLoadingNumber.subscribe(function (value) {
                if (value == 2) {
                    //Remove duplicates from first names
                    firstNames = firstNames.filter(function (value) {
                        return lastNames.indexOf(value) == -1;
                    });
                    _this.userResults = firstNames.concat(lastNames);
                }
            });
            this.db.list('userInfo', function (ref) { return ref.orderByChild('about/firstName').limitToFirst(10).startAt(term).endAt(term + "\uf8ff"); }).valueChanges().subscribe(function (result) {
                //console.log(result);
                for (var i = 0; i < result.length; i++) {
                    if (result[i].about.userName == _this.auth.currentUser.userName) {
                        result.splice(i, 1);
                        break;
                    }
                }
                firstNames = result;
                finishedLoadingNumber.next(finishedLoadingNumber.getValue() + 1);
            });
            //Last name search as well may add more late
            this.db.list('userInfo', function (ref) { return ref.orderByChild('about/lastName').limitToFirst(10).startAt(term).endAt(term + "\uf8ff"); }).valueChanges().subscribe(function (result) {
                // console.log(result);
                for (var i = 0; i < result.length; i++) {
                    if (result[i].about.userName == _this.auth.currentUser.userName) {
                        result.splice(i, 1);
                        break;
                    }
                }
                lastNames = result;
                finishedLoadingNumber.next(finishedLoadingNumber.getValue() + 1);
            });
            this.lastSearchedUsers = term;
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

module.exports = ".center-screen {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-height: 100vh;\n  }\n\n.circle-loader {\n    margin-bottom: 0;\n    border: 3px solid rgba(0, 0, 0, 0.2);\n    border-left-color: #F2C843;\n    -webkit-animation: loader-spin 1.2s infinite linear;\n            animation: loader-spin 1.2s infinite linear;\n    position: relative;\n    display: inline-block;\n    vertical-align: top;\n    border-radius: 50%;\n    width: 7em;\n    height: 7em;\n  }\n\n.load-complete {\n    -webkit-animation: none;\n    animation: none;\n    border-color: #F2C843;\n    transition: border 500ms ease-out;\n  }\n\n.checkmarkHidden {\n    display: none;\n  }\n\n.checkmark{\n    display:auto;\n  }\n\n.checkmark.draw:after {\n    -webkit-animation-duration: 800ms;\n            animation-duration: 800ms;\n    -webkit-animation-timing-function: ease;\n            animation-timing-function: ease;\n    -webkit-animation-name: checkmark;\n            animation-name: checkmark;\n    -webkit-transform: scaleX(-1) rotate(135deg);\n            transform: scaleX(-1) rotate(135deg);\n  }\n\n.checkmark:after {\n    opacity: 1;\n    height: 3.5em;\n    width: 1.75em;\n    -webkit-transform-origin: left top;\n            transform-origin: left top;\n    border-right: 4px solid #F2C843;\n    border-top: 4px solid #F2C843;\n    content: '';\n    left: 1.75em;\n    top: 3.5em;\n    position: absolute;\n  }\n\n@-webkit-keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n\n@keyframes loader-spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n                transform: rotate(0deg);\n   }\n    100% {\n        -webkit-transform: rotate(360deg);\n                transform: rotate(360deg);\n   }\n  }\n\n@-webkit-keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n\n@keyframes checkmark {\n    0% {\n        height: 0;\n        width: 0;\n        opacity: 1;\n   }\n    20% {\n        height: 0;\n        width: 1.75em;\n        opacity: 1;\n   }\n    40% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n    100% {\n        height: 3.5em;\n        width: 1.75em;\n        opacity: 1;\n   }\n  }\n\n/* The switch - the box around the slider */\n\n.switch {\n    position: relative;\n    display: inline-block;\n    width: 60px;\n    height: 34px;\n  }\n\n/* Hide default HTML checkbox */\n\n.switch input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n  }\n\n/* The slider */\n\n.slider {\n    position: absolute;\n    cursor: pointer;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: #ccc;\n    transition: .4s;\n  }\n\n.slider:before {\n    position: absolute;\n    content: \"\";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    transition: .4s;\n  }\n\ninput:checked + .slider {\n    background-color: #F2C843;\n  }\n\ninput:focus + .slider {\n    box-shadow: 0 0 1px #F2C843;\n  }\n\ninput:checked + .slider:before {\n    -webkit-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n\n/* Rounded sliders */\n\n.slider.round {\n    border-radius: 34px;\n  }\n\n.slider.round:before {\n    border-radius: 50%;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9fcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztBQUVGO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQywwQkFBMEI7SUFDMUIsbURBQTJDO1lBQTNDLDJDQUEyQztJQUMzQyxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7RUFDYjs7QUFDQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlDQUFpQztFQUNuQzs7QUFDQTtJQUNFLGFBQWE7RUFDZjs7QUFDQTtJQUNFLFlBQVk7RUFDZDs7QUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsdUNBQStCO1lBQS9CLCtCQUErQjtJQUMvQixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLDRDQUFvQztZQUFwQyxvQ0FBb0M7RUFDdEM7O0FBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBMEI7WUFBMUIsMEJBQTBCO0lBQzFCLCtCQUErQjtJQUMvQiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCOztBQUlBO0lBQ0U7UUFDSSwrQkFBdUI7Z0JBQXZCLHVCQUF1QjtHQUM1QjtJQUNDO1FBQ0ksaUNBQXlCO2dCQUF6Qix5QkFBeUI7R0FDOUI7RUFDRDs7QUFQQTtJQUNFO1FBQ0ksK0JBQXVCO2dCQUF2Qix1QkFBdUI7R0FDNUI7SUFDQztRQUNJLGlDQUF5QjtnQkFBekIseUJBQXlCO0dBQzlCO0VBQ0Q7O0FBQ0E7SUFDRTtRQUNJLFNBQVM7UUFDVCxRQUFRO1FBQ1IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxTQUFTO1FBQ1QsYUFBYTtRQUNiLFVBQVU7R0FDZjtJQUNDO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0VBQ0Q7O0FBckJBO0lBQ0U7UUFDSSxTQUFTO1FBQ1QsUUFBUTtRQUNSLFVBQVU7R0FDZjtJQUNDO1FBQ0ksU0FBUztRQUNULGFBQWE7UUFDYixVQUFVO0dBQ2Y7SUFDQztRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsVUFBVTtHQUNmO0lBQ0M7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLFVBQVU7R0FDZjtFQUNEOztBQUVGLDJDQUEyQzs7QUFDM0M7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0FBRUEsK0JBQStCOztBQUMvQjtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztFQUNYOztBQUVBLGVBQWU7O0FBQ2Y7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxzQkFBc0I7SUFFdEIsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsV0FBVztJQUNYLHVCQUF1QjtJQUV2QixlQUFlO0VBQ2pCOztBQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztBQUVBO0lBQ0UsbUNBQW1DO0lBRW5DLDJCQUEyQjtFQUM3Qjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCIiwiZmlsZSI6ImFwcC9fcGFnZXMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXItc2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gIH1cblxuLmNpcmNsZS1sb2FkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjRjJDODQzO1xuICAgIGFuaW1hdGlvbjogbG9hZGVyLXNwaW4gMS4ycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogN2VtO1xuICAgIGhlaWdodDogN2VtO1xuICB9XG4gIC5sb2FkLWNvbXBsZXRlIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjRjJDODQzO1xuICAgIHRyYW5zaXRpb246IGJvcmRlciA1MDBtcyBlYXNlLW91dDtcbiAgfVxuICAuY2hlY2ttYXJrSGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jaGVja21hcmt7XG4gICAgZGlzcGxheTphdXRvO1xuICB9XG4gIC5jaGVja21hcmsuZHJhdzphZnRlciB7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA4MDBtcztcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjaGVja21hcms7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHJvdGF0ZSgxMzVkZWcpO1xuICB9XG4gIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgaGVpZ2h0OiAzLjVlbTtcbiAgICB3aWR0aDogMS43NWVtO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgdG9wO1xuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICNGMkM4NDM7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNGMkM4NDM7XG4gICAgY29udGVudDogJyc7XG4gICAgbGVmdDogMS43NWVtO1xuICAgIHRvcDogMy41ZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICBcbiAgXG4gIEBrZXlmcmFtZXMgbG9hZGVyLXNwaW4ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICB9XG4gIH1cbiAgQGtleWZyYW1lcyBjaGVja21hcmsge1xuICAgIDAlIHtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiAgICAyMCUge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxLjc1ZW07XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICB9XG4gICAgNDAlIHtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgaGVpZ2h0OiAzLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgIH1cbiAgfVxuXG4vKiBUaGUgc3dpdGNoIC0gdGhlIGJveCBhcm91bmQgdGhlIHNsaWRlciAqL1xuLnN3aXRjaCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDM0cHg7XG4gIH1cbiAgXG4gIC8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4gIC5zd2l0Y2ggaW5wdXQge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICB9XG4gIFxuICAvKiBUaGUgc2xpZGVyICovXG4gIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XG4gICAgdHJhbnNpdGlvbjogLjRzO1xuICB9XG4gIFxuICAuc2xpZGVyOmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgaGVpZ2h0OiAyNnB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGxlZnQ6IDRweDtcbiAgICBib3R0b206IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcbiAgICB0cmFuc2l0aW9uOiAuNHM7XG4gIH1cbiAgXG4gIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJDODQzO1xuICB9XG4gIFxuICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxcHggI0YyQzg0MztcbiAgfVxuICBcbiAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgfVxuICBcbiAgLyogUm91bmRlZCBzbGlkZXJzICovXG4gIC5zbGlkZXIucm91bmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XG4gIH1cbiAgXG4gIC5zbGlkZXIucm91bmQ6YmVmb3JlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/_pages/settings/settings.component.html":
/*!*********************************************************!*\
  !*** ./src/app/_pages/settings/settings.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pages_maincontent\" [hidden]=\"isLoading\">\n\n  <div class=\"page_single layout_fullwidth_padding\">\n    <div style=\"margin-top: 7%; text-align: center; padding-bottom: 7%;\">\n      <h4 style=\"font-weight: bold; font-size: 30px;\">SETTINGS</h4>\n      <div class=\"loginform\" style=\"display: inline-flex;\">\n        <label style=\"display: inline-block; width:150px; font-weight: bold; padding-top: 10px;\">First Name:</label>\n        <input style=\"display: inline-block; margin-right: 36px;\" id=\"changeFirstName\" (click)=\"focus('changeFirstName')\" type=\"text\"\n          [(ngModel)]=\"firstName\" class=\"form_input required\" placeholder=\"First Name\" />\n      </div>\n      <div class=\"loginform\" style=\"display: inline-flex;\">\n        <label style=\"display: inline-block; width:150px; font-weight: bold; padding-top: 10px;\">Last Name:</label>\n        <input style=\"display: inline-block; margin-right: 36px;\" id=\"changeLastName\" (click)=\"focus('changeLastName')\" type=\"text\"\n          [(ngModel)]=\"lastName\" class=\"form_input required\" placeholder=\"Last Name\" />\n      </div>\n\n      <div class=\"loginform\" style=\"display: inline-flex;\">\n        <label style=\"display: inline-block; width:150px; font-weight: bold; padding-top: 10px;\">Username:</label>\n        <input style=\"display: inline-block; margin-right: 36px;\" id=\"changeUsername\" (click)=\"focus('changeUsername')\" type=\"text\"\n          [(ngModel)]=\"userName\" class=\"form_input required\" placeholder=\"Username\" />\n      </div>\n\n      <div class=\"loginform\" style=\"display: inline-flex;\">\n        <label style=\"display: inline-block; width:200px; text-align: left; font-weight: bold; padding: 10px 0px 0px 10px;\">Enable Location Sharing for Bar Capacity Tracking:</label>\n        <!-- Rounded switch -->\n        <div style=\"padding: 3% 0 0 18%\" (click)=\"locationTrackingSwitch()\">\n          <label class=\"switch\">\n            <input id=\"trackLocationCheckbox\" type=\"checkbox\">\n            <span class=\"slider round\"></span>\n          </label>\n        </div>\n      </div>\n\n      <div class=\"loginform\" style=\"display: inline-flex;\">\n        <div style=\"width: 94%;\">\n          <input (click)=\"saveChanges()\" readonly=\"readonly\" class=\"form_submit\" value=\"SAVE CHANGES\" />\n        </div>\n      </div>\n\n      <h4 style=\"font-weight: bold; font-size: 30px; padding-top: 30px;\">TESTING FEEDBACK</h4>\n      <div class=\"loginform\" style=\"display: inline-flex;\">\n        <label style=\"display: inline-block; width:110px; font-weight: bold; padding-top: 10px; text-align: left;\">Report Issue:</label>\n        <textarea [(ngModel)]=\"bugReport\" style=\"border: solid 2px black; height: 110px;\" name=\"message\" rows=\"10\" cols=\"30\" placeholder=\"Enter information about the bug.\"></textarea>\n      </div>\n\n      <div class=\"loginform\" style=\"display: inline-flex;\">\n        <div style=\"width: 94%;\">\n          <input (click)=\"submitBug()\" readonly=\"readonly\" class=\"form_submit\" value=\"SUBMIT BUG\" />\n        </div>\n      </div>\n\n      <div class=\"loginform\" style=\"display: inline-flex;\">\n        <label style=\"display: inline-block; width:110px; font-weight: bold; padding-top: 10px; text-align: left;\">Recommend Feature:</label>\n        <textarea [(ngModel)]=\"featureRequest\" style=\"border: solid 2px black; height: 110px;\" name=\"message\" rows=\"10\" cols=\"30\"\n          placeholder=\"Enter information about your feature recommendation.\"></textarea>\n      </div>\n\n      <div class=\"loginform\" style=\"display: inline-flex;\">\n        <div style=\"width: 94%;\">\n          <input (click)=\"submitFeatureRequest()\" readonly=\"readonly\" class=\"form_submit\" value=\"SUBMIT FEATURE REQUEST\" />\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n<!--Loading-->\n<div *ngIf=\"isLoading\" class=\"center-screen\">\n  <div id=\"circleLoader\" class=\"circle-loader\">\n    <div id=\"checkLoader\" class=\"checkmarkHidden draw\"></div>\n  </div>\n</div>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(authService, db) {
        this.authService = authService;
        this.db = db;
        this.isLoading = false;
        //Switches
        this.trackLocation = false;
        this.duplicateStop = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.user = this.authService.currentUser;
        console.log(this.user);
        this.firstName = this.user.firstName;
        this.lastName = this.user.lastName;
        //Shave off the @ sign
        if (this.user.userName[0] == '@')
            this.userName = this.user.userName.substr(1);
        else
            this.userName = this.user.userName;
        //Set checkmarks (find better way to do this in future)
        if (this.authService.currentUser.locationTracking) {
            var ele = document.getElementById("trackLocationCheckbox");
            ele.checked = true;
            this.trackLocation = true;
        }
    };
    SettingsComponent.prototype.focus = function (id) {
        document.getElementById(id).focus();
        document.getElementById(id).addEventListener('keyup', function (e) {
            if (e.which == 13)
                this.blur();
        });
    };
    SettingsComponent.prototype.saveChanges = function () {
        var _this = this;
        this.isLoading = true;
        this.db.object('/userInfo/' + this.user.uid).valueChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(function (userObject) {
            userObject.about.firstName = _this.firstName;
            _this.authService.currentUser.firstName = _this.firstName;
            userObject.about.lastName = _this.lastName;
            _this.authService.currentUser.lastName = _this.lastName;
            if (_this.userName[0] != '@')
                _this.userName = "@" + _this.userName;
            userObject.about.userName = _this.userName;
            _this.authService.currentUser.userName = _this.userName;
            userObject.settings.locationTracking = _this.trackLocation;
            _this.authService.currentUser.locationTracking = _this.trackLocation;
            console.log(userObject);
            _this.db.object('/userInfo/' + _this.user.uid).set(userObject).then(function (_) {
                _this.stopLoadingAnimation();
            });
        });
    };
    SettingsComponent.prototype.submitBug = function () {
        var _this = this;
        this.isLoading = true;
        var test = this.db.database.ref('/testing/bugReports').push({
            userId: this.authService.currentUser.uid,
            fullName: this.authService.currentUser.firstName + ' ' + this.authService.currentUser.lastName,
            text: this.bugReport
        }).then(function (ref) {
            _this.stopLoadingAnimation();
        });
    };
    SettingsComponent.prototype.submitFeatureRequest = function () {
        var _this = this;
        this.isLoading = true;
        var test = this.db.database.ref('/testing/featureRequest').push({
            userId: this.authService.currentUser.uid,
            fullName: this.authService.currentUser.firstName + ' ' + this.authService.currentUser.lastName,
            text: this.featureRequest
        }).then(function (ref) {
            _this.stopLoadingAnimation();
        });
    };
    SettingsComponent.prototype.stopLoadingAnimation = function () {
        var _this = this;
        document.getElementById('circleLoader').classList.add('load-complete');
        document.getElementById('checkLoader').classList.remove('checkmarkHidden');
        document.getElementById('checkLoader').classList.add('checkmark');
        setTimeout(function (_) {
            _this.isLoading = false;
        }, 1000);
    };
    SettingsComponent.prototype.locationTrackingSwitch = function () {
        if (this.duplicateStop == true) {
            this.duplicateStop = false;
            return;
        }
        else
            this.duplicateStop = true;
        this.trackLocation = !this.trackLocation;
        console.log(this.trackLocation);
        document.getElementById("trackLocationCheckbox").click();
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/_pages/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/_pages/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_fire_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"]])
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
        //Profile Changes
        this.profilePicUrlChange = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]("");
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
            _this.currentUser.lastName = userInfo.about.lastName;
            _this.currentUser.profilePicUrl = userInfo.about.profilePicUrl;
            //Set settings
            if (userInfo.settings)
                _this.currentUser.locationTracking = userInfo.settings.locationTracking;
            else
                _this.currentUser.locationTracking = false;
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
            },
            settings: {
                locationTracking: false
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
    AuthService.prototype.setProfilePicture = function (url) {
        console.log('set');
        this.db.object('userInfo/' + this.currentUser.uid + '/about/profilePicUrl').set(url);
        this.currentUser.profilePicUrl = url;
        this.profilePicUrlChange.next(url);
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
        this.barPageLat = 0;
        this.barPageLong = 0;
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
        this.showProfilePicEditing = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.hideAllPopUps = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        //User slide pagechanges
        this.userSlideClick = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](-1);
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
        this.hideAllPopUps.next(true);
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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
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
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _pages_init_init_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_pages/init/init.module */ "./src/app/_pages/init/init.module.ts");
/* harmony import */ var _pages_main_main_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_pages/main/main.module */ "./src/app/_pages/main/main.module.ts");
/* harmony import */ var _pages_login_login_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_pages/login/login.module */ "./src/app/_pages/login/login.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./custom-reuse-strategy */ "./src/app/custom-reuse-strategy.ts");
/* harmony import */ var _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_components/refresh/refresh.component */ "./src/app/_components/refresh/refresh.component.ts");
/* harmony import */ var _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_pages/friend-page/friend-page.component */ "./src/app/_pages/friend-page/friend-page.component.ts");
/* harmony import */ var _pages_all_friends_all_friends_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_pages/all-friends/all-friends.component */ "./src/app/_pages/all-friends/all-friends.component.ts");
/* harmony import */ var _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_pages/settings/settings.component */ "./src/app/_pages/settings/settings.component.ts");























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"],
                _components_refresh_refresh_component__WEBPACK_IMPORTED_MODULE_19__["RefreshComponent"],
                _pages_friend_page_friend_page_component__WEBPACK_IMPORTED_MODULE_20__["FriendPageComponent"],
                _pages_all_friends_all_friends_component__WEBPACK_IMPORTED_MODULE_21__["AllFriendsComponent"],
                _pages_settings_settings_component__WEBPACK_IMPORTED_MODULE_22__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorageModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_7__["AngularFireDatabaseModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"],
                _pages_init_init_module__WEBPACK_IMPORTED_MODULE_12__["InitModule"],
                _pages_main_main_module__WEBPACK_IMPORTED_MODULE_13__["MainModule"],
                _pages_login_login_module__WEBPACK_IMPORTED_MODULE_14__["LoginModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__["ImageCropperModule"]
            ],
            providers: [
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouteReuseStrategy"], useClass: _custom_reuse_strategy__WEBPACK_IMPORTED_MODULE_18__["CustomReuseStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
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

module.exports = __webpack_require__(/*! /Users/josephmalafronte/Repos/BarCrawlV3/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map