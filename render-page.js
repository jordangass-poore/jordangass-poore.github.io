(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/@reach/router/index.js"), require("fs"), require("/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/@reach/router/index.js", "fs", "/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/lodash/lodash.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/@reach/router/index.js"), require("fs"), require("/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/@reach/router/index.js"], root["fs"], root["/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/lodash/lodash.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/_this_is_virtual_fs_path_/$virtual/sync-requires.js":
/*!********************************************************************!*\
  !*** ./.cache/_this_is_virtual_fs_path_/$virtual/sync-requires.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const{hot}=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js");// prefer default export if available
const preferDefault=m=>m&&m.default||m;exports.components={"component---src-pages-contact-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/contact.js */ "./src/pages/contact.js"))),"component---src-pages-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),"component---src-pages-map-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/map.js */ "./src/pages/map.js"))),"component---src-pages-my-files-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/my-files.js */ "./src/pages/my-files.js"))),"component---src-pages-resume-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/resume.js */ "./src/pages/resume.js"))),"component---src-templates-achievement-page-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/achievement-page.js */ "./src/templates/achievement-page.js"))),"component---src-templates-all-achievement-page-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/allAchievement-page.js */ "./src/templates/allAchievement-page.js"))),"component---src-templates-all-clip-page-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/allClip-page.js */ "./src/templates/allClip-page.js"))),"component---src-templates-base-pages-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/base-pages.js */ "./src/templates/base-pages.js"))),"component---src-templates-clip-page-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/clip-page.js */ "./src/templates/clip-page.js"))),"component---src-templates-static-page-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/static-page.js */ "./src/templates/static-page.js"))),"component---src-templates-topics-in-focus-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/topicsInFocus.js */ "./src/templates/topicsInFocus.js")))};

/***/ }),

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-leaflet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-leaflet/gatsby-ssr.js"),options:{"plugins":[],"linkStyles":true}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-google-fonts/gatsby-ssr */ "./node_modules/gatsby-plugin-google-fonts/gatsby-ssr.js"),options:{"plugins":[],"fonts":["Asap:400,400i,500,700","Dosis:500,800","Work+Sans:500,700","Bebas+Neue:400,400i,500,700","Rubik:400,400i,500,600"],"display":"swap"}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
const apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=(api,args,defaultReturn,argTransform)=>{if(!apis[api]){console.log(`This API doesn't exist`,api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
let results=plugins.map(plugin=>{if(!plugin.plugin[api]){return undefined;}const result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args,result});}return result;});// Filter out undefined results.
results=results.filter(result=>typeof result!==`undefined`);if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {ReactNode} $0.bodyComponent The React element to be rendered as the page body
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // Import React so that you can use JSX in HeadComponents
 * const React = require("react")
 *
 * const HtmlAttributes = {
 *   lang: "en"
 * }
 *
 * const HeadComponents = [
 *   <script key="my-script" src="https://gatsby.dev/my-script" />
 * ]
 *
 * const BodyAttributes = {
 *   "data-theme": "dark"
 * }
 *
 * exports.onRenderBody = ({
 *   setHeadComponents,
 *   setHtmlAttributes,
 *   setBodyAttributes
 * }, pluginOptions) => {
 *   setHtmlAttributes(HtmlAttributes)
 *   setHeadComponents(HeadComponents)
 *   setBodyAttributes(BodyAttributes)
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function HTML(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:`body`,id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}HTML.propTypes={htmlAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,headComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,bodyAttributes:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,preBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,body:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,postBodyComponents:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array};

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
const emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, grabMatchParams, findPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grabMatchParams", function() { return grabMatchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
const pathCache=new Map();let matchPaths=[];const trimPathname=rawPathname=>{const pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
const trimmedPathname=Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname,"")// Remove any hashfragment
.split(`#`)[0]// Remove search query
.split(`?`)[0];return trimmedPathname;};function absolutify(path){// If it's already absolute, return as-is
if(path.startsWith(`/`)||path.startsWith(`https://`)||path.startsWith(`http://`)){return path;}// Calculate path relative to current location, adding a trailing slash to
// match behavior of @reach/router
return new URL(path,window.location.href+(window.location.href.endsWith(`/`)?``:`/`)).pathname;}/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */const setMatchPaths=value=>{matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */const findMatchPath=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(({path,matchPath})=>{return{path:matchPath,originalPath:path};});const path=Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(pickPaths,trimmedPathname);if(path){return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);}return null;};/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */const grabMatchParams=rawPathname=>{const trimmedPathname=cleanPath(rawPathname);const pickPaths=matchPaths.map(({path,matchPath})=>{return{path:matchPath,originalPath:path};});const path=Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(pickPaths,trimmedPathname);if(path){return path.params;}return{};};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}let foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */const cleanPath=rawPathname=>{const trimmedPathname=trimPathname(absolutify(rawPathname));let foundPath=trimmedPathname;if(foundPath===`/index.html`){foundPath=`/`;}foundPath=Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);return foundPath;};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, useScrollRestoration, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_2__["navigateTo"]; });

/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollRestoration", function() { return gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_3__["useScrollRestoration"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
const prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_5__["default"].enqueue;const StaticQueryContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer({staticQueryData,data,query,render}){const finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}const StaticQuery=props=>{const{data,query,render,children}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,staticQueryData=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData}));};const useStaticQuery=query=>{var _context$query;if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!==`function`&&"production"===`development`){throw new Error(`You're likely using a version of React that doesn't support Hooks\n`+`Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);}const context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);}if((_context$query=context[query])!==null&&_context$query!==void 0&&_context$query.data){return context[query].data;}else{throw new Error(`The result of this StaticQuery could not be fetched.\n\n`+`This is likely a bug in Gatsby and if refreshing the page does not fix it, `+`please open an issue in https://github.com/gatsbyjs/gatsby/issues`);}};StaticQuery.propTypes={data:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,query:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,render:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,children:prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func};function graphql(){throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls `+`are supposed to only be evaluated at compile time, and then compiled away. `+`Unfortunately, something went wrong and the query was left in the compiled code.\n\n`+`Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);}

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: PageResourceStatus, BaseLoader, ProdLoader, setLoader, publicLoader, default, getStaticQueryResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResourceStatus", function() { return PageResourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticQueryResults", function() { return getStaticQueryResults; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
/**
 * Available resource loading statuses
 */const PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:`error`,/**
   * Resources loaded successfully
   */Success:`success`};const preferDefault=m=>m&&m.default||m;const stripSurroundingSlashes=s=>{s=s[0]===`/`?s.slice(1):s;s=s.endsWith(`/`)?s.slice(0,-1):s;return s;};const createPageDataUrl=path=>{const fixedPath=path===`/`?`index`:stripSurroundingSlashes(path);return`${""}/page-data/${fixedPath}/page-data.json`;};function doFetch(url,method=`GET`){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=()=>{if(req.readyState==4){resolve(req);}};req.send(null);});}const doesConnectionSupportPrefetch=()=>{if(`connection`in navigator&&typeof navigator.connection!==`undefined`){if((navigator.connection.effectiveType||``).includes(`2g`)){return false;}if(navigator.connection.saveData){return false;}}return true;};const toPageResources=(pageData,component=null)=>{const page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath,staticQueryHashes:pageData.staticQueryHashes};return{component,json:pageData.result,page};};class BaseLoader{constructor(loadComponent,matchPaths){this.inFlightNetworkRequests=new Map();// Map of pagePath -> Page. Where Page is an object with: {
//   status: PageResourceStatus.Success || PageResourceStatus.Error,
//   payload: PageResources, // undefined if PageResourceStatus.Error
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//     staticQueryHashes
//   },
//   staticQueryResults
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.staticQueryDb={};this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["setMatchPaths"])(matchPaths);}memoizedGet(url){let inFlightPromise=this.inFlightNetworkRequests.get(url);if(!inFlightPromise){inFlightPromise=doFetch(url,`GET`);this.inFlightNetworkRequests.set(url,inFlightPromise);}// Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
return inFlightPromise.then(response=>{this.inFlightNetworkRequests.delete(url);return response;}).catch(err=>{this.inFlightNetworkRequests.delete(url);throw err;});}setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner(`disableCorePrefetching`).some(a=>a);}fetchPageDataJson(loadObj){const{pagePath,retries=0}=loadObj;const url=createPageDataUrl(pagePath);return this.memoizedGet(url).then(req=>{const{status,responseText}=req;// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error(`not a valid pageData response`);}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath===`/404.html`){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return this.fetchPageDataJson(Object.assign(loadObj,{pagePath:`/404.html`,notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return this.fetchPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});}loadPageDataJson(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDataDb.has(pagePath)){const pageData=this.pageDataDb.get(pagePath);if(true){return Promise.resolve(pageData);}}return this.fetchPageDataJson({pagePath}).then(pageData=>{this.pageDataDb.set(pagePath,pageData);return pageData;});}findMatchPath(rawPath){return Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findMatchPath"])(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
loadPage(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){const page=this.pageDb.get(pagePath);if(true){return Promise.resolve(page.payload);}}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}const inFlightPromise=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(allData=>{const result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}let pageData=result.payload;const{componentChunkName,staticQueryHashes=[]}=pageData;const finalResult={};const componentChunkPromise=this.loadComponent(componentChunkName).then(component=>{finalResult.createdAt=new Date();let pageResources;if(!component){finalResult.status=PageResourceStatus.Error;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:``});pageResources=toPageResources(pageData,component);}// undefined if final result is an error
return pageResources;});const staticQueryBatchPromise=Promise.all(staticQueryHashes.map(staticQueryHash=>{// Check for cache in case this static query result has already been loaded
if(this.staticQueryDb[staticQueryHash]){const jsonPayload=this.staticQueryDb[staticQueryHash];return{staticQueryHash,jsonPayload};}return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req=>{const jsonPayload=JSON.parse(req.responseText);return{staticQueryHash,jsonPayload};});})).then(staticQueryResults=>{const staticQueryResultsMap={};staticQueryResults.forEach(({staticQueryHash,jsonPayload})=>{staticQueryResultsMap[staticQueryHash]=jsonPayload;this.staticQueryDb[staticQueryHash]=jsonPayload;});return staticQueryResultsMap;});return Promise.all([componentChunkPromise,staticQueryBatchPromise]).then(([pageResources,staticQueryResults])=>{let payload;if(pageResources){payload={...pageResources,staticQueryResults};finalResult.payload=payload;_emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`,{page:payload,pageResources:payload});}this.pageDb.set(pagePath,finalResult);return payload;});});inFlightPromise.then(response=>{this.inFlightDb.delete(pagePath);}).catch(error=>{this.inFlightDb.delete(pagePath);throw error;});this.inFlightDb.set(pagePath,inFlightPromise);return inFlightPromise;}// returns undefined if loading page ran into errors
loadPageSync(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){const pageData=this.pageDb.get(pagePath).payload;return pageData;}return undefined;}shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;}prefetch(pagePath){if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner(`onPrefetchPathname`,{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}const realPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(()=>{if(!this.prefetchCompleted.has(pagePath)){this.apiRunner(`onPostPrefetchPathname`,{pathname:pagePath});this.prefetchCompleted.add(pagePath);}});return true;}doPrefetch(pagePath){const pageDataUrl=createPageDataUrl(pagePath);return Object(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl,{crossOrigin:`anonymous`,as:`fetch`}).then(()=>// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
this.loadPageDataJson(pagePath));}hovering(rawPath){this.loadPage(rawPath);}getResourceURLsForPathname(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDataDb.get(pagePath);if(page){const pageResources=toPageResources(page.payload);return[].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}}isPageNotFound(rawPath){const pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_3__["findPath"])(rawPath);const page=this.pageDb.get(pagePath);return!page||page.notFound;}loadAppData(retries=0){return this.memoizedGet(`${""}/page-data/app-data.json`).then(req=>{const{status,responseText}=req;let appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return this.loadAppData(retries+1);}// Handle 200
if(status===200){try{const jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error(`not a valid app-data response`);}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});}}const createComponentUrls=componentChunkName=>(window.___chunkMapping[componentChunkName]||[]).map(chunk=>""+chunk);class ProdLoader extends BaseLoader{constructor(asyncRequires,matchPaths){const loadComponent=chunkName=>asyncRequires.components[chunkName]?asyncRequires.components[chunkName]().then(preferDefault)// loader will handle the case when component is null
.catch(()=>null):Promise.resolve();super(loadComponent,matchPaths);}doPrefetch(pagePath){return super.doPrefetch(pagePath).then(result=>{if(result.status!==PageResourceStatus.Success){return Promise.resolve();}const pageData=result.payload;const chunkName=pageData.componentChunkName;const componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(()=>pageData);});}loadPageDataJson(rawPath){return super.loadPageDataJson(rawPath).then(data=>{if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,`HEAD`).then(req=>{if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});}}let instance;const setLoader=_loader=>{instance=_loader;};const publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:rawPath=>{console.warn(`Warning: getResourcesForPathname is deprecated. Use loadPage instead`);return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:rawPath=>{console.warn(`Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead`);return instance.i.loadPageSync(rawPath);},enqueue:rawPath=>instance.prefetch(rawPath),// Real methods
getResourceURLsForPathname:rawPath=>instance.getResourceURLsForPathname(rawPath),loadPage:rawPath=>instance.loadPage(rawPath),loadPageSync:rawPath=>instance.loadPageSync(rawPath),prefetch:rawPath=>instance.prefetch(rawPath),isPageNotFound:rawPath=>instance.isPageNotFound(rawPath),hovering:rawPath=>instance.hovering(rawPath),loadAppData:()=>instance.loadAppData()};/* harmony default export */ __webpack_exports__["default"] = (publicLoader);function getStaticQueryResults(){if(instance){return instance.staticQueryDb;}else{return{};}}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (path=>{if(path===undefined){return path;}if(path===`/`){return`/`;}if(path.charAt(path.length-1)===`/`){return path.slice(0,-1);}return path;});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const support=function(feature){if(typeof document===`undefined`){return false;}const fakeLink=document.createElement(`link`);try{if(fakeLink.relList&&typeof fakeLink.relList.supports===`function`){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};const linkPrefetchStrategy=function(url,options){return new Promise((resolve,reject)=>{if(typeof document===`undefined`){reject();return;}const link=document.createElement(`link`);link.setAttribute(`rel`,`prefetch`);link.setAttribute(`href`,url);Object.keys(options).forEach(key=>{link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;const parentElement=document.getElementsByTagName(`head`)[0]||document.getElementsByName(`script`)[0].parentNode;parentElement.appendChild(link);});};const xhrPrefetchStrategy=function(url){return new Promise((resolve,reject)=>{const req=new XMLHttpRequest();req.open(`GET`,url,true);req.onload=()=>{if(req.status===200){resolve();}else{reject();}};req.send(null);});};const supportedPrefetchStrategy=support(`prefetch`)?linkPrefetchStrategy:xhrPrefetchStrategy;const preFetched={};const prefetch=function(url,options){return new Promise(resolve=>{if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(()=>{resolve();preFetched[url]=true;}).catch(()=>{});// 404s are logged to the console anyway
});};/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const preferDefault=m=>m&&m.default||m;if(false){}else if(false){}else{module.exports=()=>null;}

/***/ }),

/***/ "./.cache/route-announcer-props.js":
/*!*****************************************!*\
  !*** ./.cache/route-announcer-props.js ***!
  \*****************************************/
/*! exports provided: RouteAnnouncerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAnnouncerProps", function() { return RouteAnnouncerProps; });
// This is extracted to separate module because it's shared
// between browser and SSR code
const RouteAnnouncerProps={id:`gatsby-announcer`,style:{position:`absolute`,top:0,width:1,height:1,padding:0,overflow:`hidden`,clip:`rect(0, 0, 0, 0)`,whiteSpace:`nowrap`,border:0},"aria-live":`assertive`,"aria-atomic":`true`};

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: sanitizeComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponents", function() { return sanitizeComponents; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
const React=__webpack_require__(/*! react */ "react");const fs=__webpack_require__(/*! fs */ "fs");const{join}=__webpack_require__(/*! path */ "path");const{renderToString,renderToStaticMarkup}=__webpack_require__(/*! react-dom/server */ "react-dom/server");const{ServerLocation,Router,isRedirect}=__webpack_require__(/*! @reach/router */ "@reach/router");const{get,merge,isObject,flatten,uniqBy,flattenDeep,replace,concat,memoize}=__webpack_require__(/*! lodash */ "lodash");const{RouteAnnouncerProps}=__webpack_require__(/*! ./route-announcer-props */ "./.cache/route-announcer-props.js");const apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");const syncRequires=__webpack_require__(/*! $virtual/sync-requires */ "./.cache/_this_is_virtual_fs_path_/$virtual/sync-requires.js");const{version:gatsbyVersion}=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json");const{grabMatchParams}=__webpack_require__(/*! ./find-path */ "./.cache/find-path.js");const stats=JSON.parse(fs.readFileSync(`${process.cwd()}/public/webpack.stats.json`,`utf-8`));const chunkMapping=JSON.parse(fs.readFileSync(`${process.cwd()}/public/chunk-map.json`,`utf-8`));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
const testRequireError=(moduleName,err)=>{const regex=new RegExp(`Error: Cannot find module\\s.${moduleName}`);const firstLine=err.toString().split(`\n`)[0];return regex.test(firstLine);};let Html;try{Html=__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../src/html'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));}catch(err){if(testRequireError(`../src/html`,err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;const getPageDataPath=path=>{const fixedPagePath=path===`/`?`index`:path;return join(`page-data`,fixedPagePath,`page-data.json`);};const getPageDataUrl=pagePath=>{const pageDataPath=getPageDataPath(pagePath);return`${""}/${pageDataPath}`;};const getStaticQueryUrl=hash=>`${""}/page-data/sq/d/${hash}.json`;const getPageData=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const absolutePageDataPath=join(process.cwd(),`public`,pageDataPath);const pageDataRaw=fs.readFileSync(absolutePageDataPath);try{return JSON.parse(pageDataRaw.toString());}catch(err){return null;}};const appDataPath=join(`page-data`,`app-data.json`);const getAppDataUrl=memoize(()=>{let appData;try{const absoluteAppDataPath=join(process.cwd(),`public`,appDataPath);const appDataRaw=fs.readFileSync(absoluteAppDataPath);appData=JSON.parse(appDataRaw.toString());if(!appData){return null;}}catch(err){return null;}return`${""}/${appDataPath}`;});const loadPageDataSync=pagePath=>{const pageDataPath=getPageDataPath(pagePath);const pageDataFile=join(process.cwd(),`public`,pageDataPath);try{const pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};const createElement=React.createElement;const sanitizeComponents=components=>{const componentsArray=ensureArray(components);return componentsArray.map(component=>{// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(false){}return component;});};const ensureArray=components=>{if(Array.isArray(components)){// remove falsy items and flatten
return flattenDeep(components.filter(val=>Array.isArray(val)?val.length>0:val));}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = ((pagePath,callback)=>{var _postBodyComponents;let bodyHtml=``;let headComponents=[/*#__PURE__*/React.createElement("meta",{name:"generator",content:`Gatsby ${gatsbyVersion}`,key:`generator-${gatsbyVersion}`})];let htmlAttributes={};let bodyAttributes={};let preBodyComponents=[];let postBodyComponents=[];let bodyProps={};const replaceBodyHTMLString=body=>{bodyHtml=body;};const setHeadComponents=components=>{headComponents=headComponents.concat(sanitizeComponents(components));};const setHtmlAttributes=attributes=>{htmlAttributes=merge(htmlAttributes,attributes);};const setBodyAttributes=attributes=>{bodyAttributes=merge(bodyAttributes,attributes);};const setPreBodyComponents=components=>{preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};const setPostBodyComponents=components=>{postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};const setBodyProps=props=>{bodyProps=merge({},bodyProps,props);};const getHeadComponents=()=>headComponents;const replaceHeadComponents=components=>{headComponents=sanitizeComponents(components);};const getPreBodyComponents=()=>preBodyComponents;const replacePreBodyComponents=components=>{preBodyComponents=sanitizeComponents(components);};const getPostBodyComponents=()=>postBodyComponents;const replacePostBodyComponents=components=>{postBodyComponents=sanitizeComponents(components);};const pageData=getPageData(pagePath);const pageDataUrl=getPageDataUrl(pagePath);const appDataUrl=getAppDataUrl();const{componentChunkName,staticQueryHashes=[]}=pageData;const staticQueryUrls=staticQueryHashes.map(getStaticQueryUrl);class RouteHandler extends React.Component{render(){var _pageData$result,_pageData$result$page;const props={...this.props,...pageData.result,params:{...grabMatchParams(this.props.location.pathname),...(((_pageData$result=pageData.result)===null||_pageData$result===void 0?void 0:(_pageData$result$page=_pageData$result.pageContext)===null||_pageData$result$page===void 0?void 0:_pageData$result$page.__params)||{})},// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined};const pageElement=createElement(syncRequires.components[componentChunkName],props);const wrappedPage=apiRunner(`wrapPageElement`,{element:pageElement,props},pageElement,({result})=>{return{element:result,props};}).pop();return wrappedPage;}}const routerElement=/*#__PURE__*/React.createElement(ServerLocation,{url:`${""}${pagePath}`},/*#__PURE__*/React.createElement(Router,{id:"gatsby-focus-wrapper",baseuri:""},/*#__PURE__*/React.createElement(RouteHandler,{path:"/*"})),/*#__PURE__*/React.createElement("div",RouteAnnouncerProps));const bodyComponent=apiRunner(`wrapRootElement`,{element:routerElement,pathname:pagePath},routerElement,({result})=>{return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner(`replaceRenderer`,{bodyComponent,replaceBodyHTMLString,setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
let scriptsAndStyles=flatten([`app`,componentChunkName].map(s=>{const fetchKey=`assetsByChunkName[${s}]`;let chunks=get(stats,fetchKey);const namedChunkGroups=get(stats,`namedChunkGroups`);if(!chunks){return null;}chunks=chunks.map(chunk=>{if(chunk===`/`){return null;}return{rel:`preload`,name:chunk};});namedChunkGroups[s].assets.forEach(asset=>chunks.push({rel:`preload`,name:asset}));const childAssets=namedChunkGroups[s].childAssets;for(const rel in childAssets){chunks=concat(chunks,childAssets[rel].map(chunk=>{return{rel,name:chunk};}));}return chunks;})).filter(s=>isObject(s)).sort((s1,s2)=>s1.rel==`preload`?-1:1);// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,item=>item.name);const scripts=scriptsAndStyles.filter(script=>script.name&&script.name.endsWith(`.js`));const styles=scriptsAndStyles.filter(style=>style.name&&style.name.endsWith(`.css`));apiRunner(`onRenderBody`,{setHeadComponents,setHtmlAttributes,setBodyAttributes,setPreBodyComponents,setPostBodyComponents,setBodyProps,pathname:pagePath,loadPageDataSync,bodyHtml,scripts,styles,pathPrefix:""});scripts.slice(0).reverse().forEach(script=>{// Add preload/prefetch <link>s for scripts.
headComponents.push(/*#__PURE__*/React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:`${""}/${script.name}`}));});if(pageData){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}staticQueryUrls.forEach(staticQueryUrl=>headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:staticQueryUrl,href:staticQueryUrl,crossOrigin:"anonymous"})));if(appDataUrl){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:appDataUrl,href:appDataUrl,crossOrigin:"anonymous"}));}styles.slice(0).reverse().forEach(style=>{// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel===`prefetch`){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:`${""}/${style.name}`}));}else{headComponents.unshift(/*#__PURE__*/React.createElement("style",{"data-href":`${""}/${style.name}`,id:`gatsby-global-css`,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),`public`,style.name),`utf-8`)}}));}});// Add page metadata for the current page
const windowPageData=`/*<![CDATA[*/window.pagePath="${pagePath}";/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`script-loader`,id:`gatsby-script-loader`,dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
const scriptChunkMapping=`/*<![CDATA[*/window.___chunkMapping=${JSON.stringify(chunkMapping)};/*]]>*/`;postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:`chunk-mapping`,id:`gatsby-chunk-mapping`,dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));let bodyScripts=[];if(chunkMapping[`polyfill`]){chunkMapping[`polyfill`].forEach(script=>{const scriptPath=`${""}${script}`;bodyScripts.push(/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,noModule:true}));});}// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
bodyScripts=bodyScripts.concat(scripts.filter(s=>s.rel!==`prefetch`).map(s=>{const scriptPath=`${""}/${JSON.stringify(s.name).slice(1,-1)}`;return/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,async:true});}));(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bodyScripts));apiRunner(`onPreRenderHTML`,{getHeadComponents,replaceHeadComponents,getPreBodyComponents,replacePreBodyComponents,getPostBodyComponents,replacePostBodyComponents,pathname:pagePath,pathPrefix:""});const html=`<!DOCTYPE html>${renderToStaticMarkup(/*#__PURE__*/React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})))}`;callback(null,html);});

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stripPrefix; });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */function stripPrefix(str,prefix=``){if(!prefix){return str;}if(str===prefix){return`/`;}if(str.startsWith(`${prefix}/`)){return str.slice(prefix.length);}return str;}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@emotion/cache/dist/cache.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@emotion/cache/dist/cache.esm.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.esm.js");
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var _emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/weak-memoize */ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js");




// https://github.com/thysultan/stylis.js/tree/master/plugins/rule-sheet
// inlined to avoid umd wrapper and peerDep warnings/installing stylis
// since we use stylis after closure compiler
var delimiter = '/*|*/';
var needle = delimiter + '}';

function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}

var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    // property
    case 1:
      {
        switch (content.charCodeAt(0)) {
          case 64:
            {
              // @import
              Sheet.current.insert(content + ';');
              return '';
            }
          // charcode for l

          case 108:
            {
              // charcode for b
              // this ignores label
              if (content.charCodeAt(2) === 98) {
                return '';
              }
            }
        }

        break;
      }
    // selector

    case 2:
      {
        if (ns === 0) return content + delimiter;
        break;
      }
    // at-rule

    case 3:
      {
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            {
              Sheet.current.insert(selectors[0] + content);
              return '';
            }

          default:
            {
              return content + (at === 0 ? delimiter : '');
            }
        }
      }

    case -2:
      {
        content.split(needle).forEach(toSheet);
      }
  }
};
var removeLabel = function removeLabel(context, content) {
  if (context === 1 && // charcode for l
  content.charCodeAt(0) === 108 && // charcode for b
  content.charCodeAt(2) === 98 // this ignores label
  ) {
      return '';
    }
};

var isBrowser = typeof document !== 'undefined';
var rootServerStylisCache = {};
var getServerStylisCache = isBrowser ? undefined : Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
  var getCache = Object(_emotion_weak_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return {};
  });
  var prefixTrueCache = {};
  var prefixFalseCache = {};
  return function (prefix) {
    if (prefix === undefined || prefix === true) {
      return prefixTrueCache;
    }

    if (prefix === false) {
      return prefixFalseCache;
    }

    return getCache(prefix);
  };
});

var createCache = function createCache(options) {
  if (options === undefined) options = {};
  var key = options.key || 'css';
  var stylisOptions;

  if (options.prefix !== undefined) {
    stylisOptions = {
      prefix: options.prefix
    };
  }

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_1__["default"](stylisOptions);

  if (false) {}

  var inserted = {}; // $FlowFixMe

  var container;

  if (isBrowser) {
    container = options.container || document.head;
    var nodes = document.querySelectorAll("style[data-emotion-" + key + "]");
    Array.prototype.forEach.call(nodes, function (node) {
      var attrib = node.getAttribute("data-emotion-" + key); // $FlowFixMe

      attrib.split(' ').forEach(function (id) {
        inserted[id] = true;
      });

      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }

  var _insert;

  if (isBrowser) {
    stylis.use(options.stylisPlugins)(ruleSheet);

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;

      if (false) { var map; }

      stylis(selector, serialized.styles);

      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  } else {
    stylis.use(removeLabel);
    var serverStylisCache = rootServerStylisCache;

    if (options.stylisPlugins || options.prefix !== undefined) {
      stylis.use(options.stylisPlugins); // $FlowFixMe

      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
    }

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = stylis(selector, serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        false) {}

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  if (false) { var commentEnd, commentStart; }

  var cache = {
    key: key,
    sheet: new _emotion_sheet__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"]({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};

/* harmony default export */ __webpack_exports__["default"] = (createCache);


/***/ }),

/***/ "./node_modules/@emotion/core/dist/core.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/core/dist/core.esm.js ***!
  \*****************************************************/
/*! exports provided: CacheProvider, ThemeContext, withEmotionCache, css, ClassNames, Global, createElement, jsx, keyframes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassNames", function() { return ClassNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Global", function() { return Global; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.esm.js");
/* harmony import */ var _emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emotion-element-cfcfecf4.esm.js */ "./node_modules/@emotion/core/dist/emotion-element-cfcfecf4.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CacheProvider", function() { return _emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["C"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return _emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withEmotionCache", function() { return _emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"]; });

/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.esm.js");
/* harmony import */ var _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/sheet */ "./node_modules/@emotion/sheet/dist/sheet.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "css", function() { return _emotion_css__WEBPACK_IMPORTED_MODULE_7__["default"]; });












var jsx = function jsx(type, props) {
  var args = arguments;

  if (props == null || !_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["h"].call(props, 'css')) {
    // $FlowFixMe
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(undefined, args);
  }

  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = _emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["E"];
  createElementArgArray[1] = Object(_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["c"])(type, props);

  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"].apply(null, createElementArgArray);
};

var warnedAboutCssPropForGlobal = false;
var Global = /* #__PURE__ */Object(_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"])(function (props, cache) {
  if (false) {}

  var styles = props.styles;

  if (typeof styles === 'function') {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"].Consumer, null, function (theme) {
      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])([styles(theme)]);
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
        serialized: serialized,
        cache: cache
      });
    });
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])([styles]);
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InnerGlobal, {
    serialized: serialized,
    cache: cache
  });
});

// maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag
var InnerGlobal = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(InnerGlobal, _React$Component);

  function InnerGlobal(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }

  var _proto = InnerGlobal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new _emotion_sheet__WEBPACK_IMPORTED_MODULE_6__["StyleSheet"]({
      key: this.props.cache.key + "-global",
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    }); // $FlowFixMe

    var node = document.querySelector("style[data-emotion-" + this.props.cache.key + "=\"" + this.props.serialized.name + "\"]");

    if (node !== null) {
      this.sheet.tags.push(node);
    }

    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }

    this.insertStyles();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };

  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== undefined) {
      // insert keyframes
      Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(this.props.cache, this.props.serialized.next, true);
    }

    if (this.sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }

    this.props.cache.insert("", this.props.serialized, this.sheet, false);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };

  _proto.render = function render() {
    if (!_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["i"]) {
      var serialized = this.props.serialized;
      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;

      while (next !== undefined) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }

      var shouldCache = this.props.cache.compat === true;
      var rules = this.props.cache.insert("", {
        name: serializedNames,
        styles: serializedStyles
      }, this.sheet, shouldCache);

      if (!shouldCache) {
        var _ref;

        return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + this.props.cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
          __html: rules
        }, _ref.nonce = this.props.cache.sheet.nonce, _ref));
      }
    }

    return null;
  };

  return InnerGlobal;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var keyframes = function keyframes() {
  var insertable = _emotion_css__WEBPACK_IMPORTED_MODULE_7__["default"].apply(void 0, arguments);
  var name = "animation-" + insertable.name; // $FlowFixMe

  return {
    name: name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};

var classnames = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["getRegisteredStyles"])(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var ClassNames = Object(_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["w"])(function (props, context) {
  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["T"].Consumer, null, function (theme) {
    var rules = '';
    var serializedHashes = '';
    var hasRendered = false;

    var css = function css() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('css can only be used during render');
      }

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_5__["serializeStyles"])(args, context.registered);

      if (_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["i"]) {
        Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, false);
      } else {
        var res = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_4__["insertStyles"])(context, serialized, false);

        if (res !== undefined) {
          rules += res;
        }
      }

      if (!_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["i"]) {
        serializedHashes += " " + serialized.name;
      }

      return context.key + "-" + serialized.name;
    };

    var cx = function cx() {
      if (hasRendered && "production" !== 'production') {
        throw new Error('cx can only be used during render');
      }

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return merge(context.registered, css, classnames(args));
    };

    var content = {
      css: css,
      cx: cx,
      theme: theme
    };
    var ele = props.children(content);
    hasRendered = true;

    if (!_emotion_element_cfcfecf4_esm_js__WEBPACK_IMPORTED_MODULE_3__["i"] && rules.length !== 0) {
      var _ref;

      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + context.key] = serializedHashes.substring(1), _ref.dangerouslySetInnerHTML = {
        __html: rules
      }, _ref.nonce = context.sheet.nonce, _ref)), ele);
    }

    return ele;
  });
});




/***/ }),

/***/ "./node_modules/@emotion/core/dist/emotion-element-cfcfecf4.esm.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@emotion/core/dist/emotion-element-cfcfecf4.esm.js ***!
  \*************************************************************************/
/*! exports provided: C, E, T, c, h, i, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CacheProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return Emotion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEmotionProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hasOwnProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return withEmotionCache; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.esm.js");
/* harmony import */ var _emotion_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/utils */ "./node_modules/@emotion/utils/dist/utils.esm.js");
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.esm.js");






var isBrowser = typeof document !== 'undefined';
var hasOwnProperty = Object.prototype.hasOwnProperty;

var EmotionCacheContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])() : null);
var ThemeContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])({});
var CacheProvider = EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  var render = function render(props, ref) {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (cache) {
      return func(props, cache, ref);
    });
  }; // $FlowFixMe


  return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(render);
};

if (!isBrowser) {
  var BasicProvider = /*#__PURE__*/function (_React$Component) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BasicProvider, _React$Component);

    function BasicProvider(props, context, updater) {
      var _this;

      _this = _React$Component.call(this, props, context, updater) || this;
      _this.state = {
        value: Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_2__["default"])()
      };
      return _this;
    }

    var _proto = BasicProvider.prototype;

    _proto.render = function render() {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Provider, this.state, this.props.children(this.state.value));
    };

    return BasicProvider;
  }(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(EmotionCacheContext.Consumer, null, function (context) {
        if (context === null) {
          return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BasicProvider, null, function (newContext) {
            return func(props, newContext);
          });
        } else {
          return func(props, context);
        }
      });
    };
  };
}

// thus we only need to replace what is a valid character for JS, but not for CSS

var sanitizeIdentifier = function sanitizeIdentifier(identifier) {
  return identifier.replace(/\$/g, '-');
};

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps(type, props) {
  if (false) {}

  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }

  newProps[typePropName] = type; // TODO: check if this still works with all of those different JSX functions

  if (false) { var match, error; }

  return newProps;
};

var render = function render(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme); // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["getRegisteredStyles"])(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_4__["serializeStyles"])(registeredStyles);

  if (false) { var labelFromStack; }

  var rules = Object(_emotion_utils__WEBPACK_IMPORTED_MODULE_3__["insertStyles"])(cache, serialized, typeof type === 'string');
  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && ( true || false)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  var ele = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(type, newProps);

  if (!isBrowser && rules !== undefined) {
    var _ref;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])("style", (_ref = {}, _ref["data-emotion-" + cache.key] = serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref)), ele);
  }

  return ele;
}; // eslint-disable-next-line no-undef


var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  if (typeof props.css === 'function') {
    return /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ThemeContext.Consumer, null, function (theme) {
      return render(cache, props, theme, ref);
    });
  }

  return render(cache, props, null, ref);
});

if (false) {}




/***/ }),

/***/ "./node_modules/@emotion/css/dist/css.esm.js":
/*!***************************************************!*\
  !*** ./node_modules/@emotion/css/dist/css.esm.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_serialize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/serialize */ "./node_modules/@emotion/serialize/dist/serialize.esm.js");


function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Object(_emotion_serialize__WEBPACK_IMPORTED_MODULE_0__["serializeStyles"])(args);
}

/* harmony default export */ __webpack_exports__["default"] = (css);


/***/ }),

/***/ "./node_modules/@emotion/hash/dist/hash.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/@emotion/hash/dist/hash.esm.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

/* harmony default export */ __webpack_exports__["default"] = (murmur2);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/serialize/dist/serialize.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@emotion/serialize/dist/serialize.esm.js ***!
  \***************************************************************/
/*! exports provided: serializeStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializeStyles", function() { return serializeStyles; });
/* harmony import */ var _emotion_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/hash */ "./node_modules/@emotion/hash/dist/hash.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");




var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_2__["default"])(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (_emotion_unitless__WEBPACK_IMPORTED_MODULE_1__["default"][key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (false) { var hyphenatedCache, hyphenPattern, msPattern, oldProcessStyleValue, contentValues, contentValuePattern; }

var shouldWarnAboutInterpolatingClassNameFromCss = true;

function handleInterpolation(mergedProps, registered, interpolation, couldBeSelectorInterpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (false) {}

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (false) {}

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result, couldBeSelectorInterpolation);
        } else if (false) {}

        break;
      }

    case 'string':
      if (false) { var replaced, matched; }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];

  if (false) {}

  return cached !== undefined && !couldBeSelectorInterpolation ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i], false);
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && "production" !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with babel-plugin-emotion.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value, false);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (false) {}

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*;/g;
var sourceMapPattern;

if (false) {} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;
var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings, false);
  } else {
    if (false) {}

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i], styles.charCodeAt(styles.length - 1) === 46);

    if (stringMode) {
      if (false) {}

      styles += strings[i];
    }
  }

  var sourceMap;

  if (false) {} // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = Object(_emotion_hash__WEBPACK_IMPORTED_MODULE_0__["default"])(styles) + identifierName;

  if (false) {}

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};




/***/ }),

/***/ "./node_modules/@emotion/sheet/dist/sheet.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@emotion/sheet/dist/sheet.esm.js ***!
  \*******************************************************/
/*! exports provided: StyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheet", function() { return StyleSheet; });
/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  return tag;
}

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(options) {
    this.isSpeedy = options.speedy === undefined ? "production" === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      var _tag = createStyleElement(this);

      var before;

      if (this.tags.length === 0) {
        before = this.before;
      } else {
        before = this.tags[this.tags.length - 1].nextSibling;
      }

      this.container.insertBefore(_tag, before);
      this.tags.push(_tag);
    }

    var tag = this.tags[this.tags.length - 1];

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is a really hot path
        // we check the second character first because having "i"
        // as the second character will happen less often than
        // having "@" as the first character
        var isImportRule = rule.charCodeAt(1) === 105 && rule.charCodeAt(0) === 64; // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools

        sheet.insertRule(rule, // we need to insert @import rules before anything else
        // otherwise there will be an error
        // technically this means that the @import rules will
        // _usually_(not always since there could be multiple style tags)
        // be the first ones in prod and generally later in dev
        // this shouldn't really matter in the real world though
        // @import is generally only used for font faces from google fonts and etc.
        // so while this could be technically correct then it would be slower and larger
        // for a tiny bit of correctness that won't matter in the real world
        isImportRule ? 0 : sheet.cssRules.length);
      } catch (e) {
        if (false) {}
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };

  return StyleSheet;
}();




/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@emotion/utils/dist/utils.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@emotion/utils/dist/utils.esm.js ***!
  \*******************************************************/
/*! exports provided: getRegisteredStyles, insertStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisteredStyles", function() { return getRegisteredStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStyles", function() { return insertStyles; });
var isBrowser = typeof document !== 'undefined';
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className]);
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert("." + className, current, cache.sheet, true);

      if (!isBrowser && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};




/***/ }),

/***/ "./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

/* harmony default export */ __webpack_exports__["default"] = (weakMemoize);


/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.default=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2.default)({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;logDeprecationNotice("resolutions","the gatsby-image v2 prop \"fixed\"");delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;logDeprecationNotice("sizes","the gatsby-image v2 prop \"fluid\"");delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */var hasArtDirectionSupport=function hasArtDirectionSupport(currentData){return!!currentData&&Array.isArray(currentData)&&currentData.some(function(image){return typeof image.media!=="undefined";});};/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */var matchesMedia=function matchesMedia(_ref){var media=_ref.media;return media?isBrowser&&!!window.matchMedia(media).matches:false;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string?} Returns image src or undefined it not given.
 */var getImageCacheKey=function getImageCacheKey(_ref2){var fluid=_ref2.fluid,fixed=_ref2.fixed;var srcData=getCurrentSrcData(fluid||fixed||[]);return srcData&&srcData.src;};/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */var getCurrentSrcData=function getCurrentSrcData(currentData){if(isBrowser&&hasArtDirectionSupport(currentData)){// Do we have an image for the current Viewport?
var foundMedia=currentData.findIndex(matchesMedia);if(foundMedia!==-1){return currentData[foundMedia];}// No media matches, select first element without a media condition
var noMedia=currentData.findIndex(function(image){return typeof image.media==="undefined";});if(noMedia!==-1){return currentData[noMedia];}}// Else return the first image.
return currentData[0];};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);return imageCache[cacheKey]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);if(cacheKey){imageCache[cacheKey]=true;}};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners.delete(entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,srcSet=_ref3.srcSet,srcSetWebp=_ref3.srcSetWebp,media=_ref3.media,sizes=_ref3.sizes;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:src},srcSetWebp&&/*#__PURE__*/_react.default.createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),srcSet&&/*#__PURE__*/_react.default.createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){console.warn("We've found "+without.length+" sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,tracedSVG=_ref4.tracedSVG;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref5){var src=_ref5.src,media=_ref5.media,base64=_ref5.base64;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref6,isWebp){var srcSet=_ref6.srcSet,srcSetWebp=_ref6.srcSetWebp,media=_ref6.media,sizes=_ref6.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners.delete(el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var src=props.src,imageVariants=props.imageVariants,generateSources=props.generateSources,spreadProps=props.spreadProps,ariaHidden=props.ariaHidden;var baseImage=/*#__PURE__*/_react.default.createElement(Img,(0,_extends2.default)({ref:ref,src:src},spreadProps,{ariaHidden:ariaHidden}));return imageVariants.length>1?/*#__PURE__*/_react.default.createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;});var Img=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,ariaHidden=props.ariaHidden,otherProps=(0,_objectWithoutPropertiesLoose2.default)(props,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return/*#__PURE__*/_react.default.createElement("img",(0,_extends2.default)({"aria-hidden":ariaHidden,sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes.default.object,onError:_propTypes.default.func,onLoad:_propTypes.default.func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn,isHydrated:false};_this.imageRef=/*#__PURE__*/_react.default.createRef();_this.placeholderRef=props.placeholderRef||/*#__PURE__*/_react.default.createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2.default)(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){this.setState({isHydrated:isBrowser});if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){_this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
// for lazyloaded components this might be null
// TODO fix imgCached behaviour as it's now false when it's lazyloaded
imgCached:!!(_this2.imageRef.current&&_this2.imageRef.current.currentSrc)});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var imageVariants=fluid||fixed;// Abort early if missing image data (#25371)
if(!imageVariants){return null;}var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2.default)({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2.default)({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,imgStyle,placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};// Initial client render state needs to match SSR until hydration finishes.
// Once hydration completes, render again to update to the correct image.
// `imageVariants` is always an Array type at this point due to `convertProps()`
var image=!this.state.isHydrated?imageVariants[0]:getCurrentSrcData(imageVariants);if(fluid){return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2.default)({position:"relative",overflow:"hidden",maxWidth:image.maxWidth?image.maxWidth+"px":null,maxHeight:image.maxHeight?image.maxHeight+"px":null},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var divStyle=(0,_extends2.default)({position:"relative",overflow:"hidden",display:"inline-block",width:image.width,height:image.height},style);if(style.display==="inherit"){delete divStyle.display;}return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(image.srcSet)},bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,width:image.width,opacity:!this.state.imgLoaded?1:0,height:image.height},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,width:image.width,height:image.height,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}return null;};return Image;}(_react.default.Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes.default.shape({width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});var fluidObject=_propTypes.default.shape({aspectRatio:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,sizes:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string,maxWidth:_propTypes.default.number,maxHeight:_propTypes.default.number});function requireFixedOrFluid(originalPropTypes){return function(props,propName,componentName){var _PropTypes$checkPropT;if(!props.fixed&&!props.fluid){throw new Error("The prop `fluid` or `fixed` is marked as required in `"+componentName+"`, but their values are both `undefined`.");}_propTypes.default.checkPropTypes((_PropTypes$checkPropT={},_PropTypes$checkPropT[propName]=originalPropTypes,_PropTypes$checkPropT),props,"prop",componentName);};}// If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props
Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:requireFixedOrFluid(_propTypes.default.oneOfType([fixedObject,_propTypes.default.arrayOf(fixedObject)])),fluid:requireFixedOrFluid(_propTypes.default.oneOfType([fluidObject,_propTypes.default.arrayOf(fluidObject)])),fadeIn:_propTypes.default.bool,durationFadeIn:_propTypes.default.number,title:_propTypes.default.string,alt:_propTypes.default.string,className:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),// Support Glamor's css prop.
critical:_propTypes.default.bool,crossOrigin:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),style:_propTypes.default.object,imgStyle:_propTypes.default.object,placeholderStyle:_propTypes.default.object,placeholderClassName:_propTypes.default.string,backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),onLoad:_propTypes.default.func,onError:_propTypes.default.func,onStartLoad:_propTypes.default.func,Tag:_propTypes.default.string,itemProp:_propTypes.default.string,loading:_propTypes.default.oneOf(["auto","lazy","eager"]),draggable:_propTypes.default.bool};var _default=Image;exports.default=_default;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.withPrefix=withPrefix;exports.withAssetPrefix=withAssetPrefix;exports.navigateTo=exports.replace=exports.push=exports.navigate=exports.default=void 0;var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _router=__webpack_require__(/*! @reach/router */ "@reach/router");var _utils=__webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");var _parsePath=__webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");exports.parsePath=_parsePath.parsePath;var isAbsolutePath=function isAbsolutePath(path){return path===null||path===void 0?void 0:path.startsWith("/");};function withPrefix(path,prefix){var _ref,_prefix;if(prefix===void 0){prefix=getGlobalBasePrefix();}if(!isLocalLink(path)){return path;}if(path.startsWith("./")||path.startsWith("../")){return path;}var base=(_ref=(_prefix=prefix)!==null&&_prefix!==void 0?_prefix:getGlobalPathPrefix())!==null&&_ref!==void 0?_ref:"/";return""+((base===null||base===void 0?void 0:base.endsWith("/"))?base.slice(0,-1):base)+(path.startsWith("/")?path:"/"+path);}// These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.
var getGlobalPathPrefix=function getGlobalPathPrefix(){return  false?undefined:"";};var getGlobalBasePrefix=function getGlobalBasePrefix(){return  false?undefined:"";};var isLocalLink=function isLocalLink(path){return path&&!path.startsWith("http://")&&!path.startsWith("https://")&&!path.startsWith("//");};function withAssetPrefix(path){return withPrefix(path,getGlobalPathPrefix());}function absolutify(path,current){// If it's already absolute, return as-is
if(isAbsolutePath(path)){return path;}return(0,_utils.resolve)(path,current);}var rewriteLinkPath=function rewriteLinkPath(path,relativeTo){if(typeof path==="number"){return path;}if(!isLocalLink(path)){return path;}return isAbsolutePath(path)?withPrefix(path):absolutify(path,relativeTo);};var NavLinkPropTypes={activeClassName:_propTypes.default.string,activeStyle:_propTypes.default.object,partiallyActive:_propTypes.default.bool};// Set up IntersectionObserver
var createIntersectionObserver=function createIntersectionObserver(el,cb){var io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){// Check if element is within viewport, remove listener, destroy observer, and run link callback.
// MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(el);io.disconnect();cb();}}});});// Add element to the observer
io.observe(el);return{instance:io,el:el};};function GatsbyLinkLocationWrapper(props){return/*#__PURE__*/_react.default.createElement(_router.Location,null,function(_ref2){var location=_ref2.location;return/*#__PURE__*/_react.default.createElement(GatsbyLink,(0,_extends2.default)({},props,{_location:location}));});}var GatsbyLink=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(GatsbyLink,_React$Component);function GatsbyLink(props){var _this;_this=_React$Component.call(this,props)||this;// Default to no support for IntersectionObserver
_this.defaultGetProps=function(_ref3){var isPartiallyCurrent=_ref3.isPartiallyCurrent,isCurrent=_ref3.isCurrent;if(_this.props.partiallyActive?isPartiallyCurrent:isCurrent){return{className:[_this.props.className,_this.props.activeClassName].filter(Boolean).join(" "),style:(0,_extends2.default)({},_this.props.style,_this.props.activeStyle)};}return null;};var IOSupported=false;if(typeof window!=="undefined"&&window.IntersectionObserver){IOSupported=true;}_this.state={IOSupported:IOSupported};_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=GatsbyLink.prototype;_proto._prefetch=function _prefetch(){var currentPath=window.location.pathname;// reach router should have the correct state
if(this.props._location&&this.props._location.pathname){currentPath=this.props._location.pathname;}var rewrittenPath=rewriteLinkPath(this.props.to,currentPath);var newPathName=(0,_parsePath.parsePath)(rewrittenPath).pathname;// Prefech is used to speed up next navigations. When you use it on the current navigation,
// there could be a race-condition where Chrome uses the stale data instead of waiting for the network to complete
if(currentPath!==newPathName){___loader.enqueue(newPathName);}};_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState){// Preserve non IO functionality if no support
if(this.props.to!==prevProps.to&&!this.state.IOSupported){this._prefetch();}};_proto.componentDidMount=function componentDidMount(){// Preserve non IO functionality if no support
if(!this.state.IOSupported){this._prefetch();}};_proto.componentWillUnmount=function componentWillUnmount(){if(!this.io){return;}var _this$io=this.io,instance=_this$io.instance,el=_this$io.el;instance.unobserve(el);instance.disconnect();};_proto.handleRef=function handleRef(ref){var _this2=this;if(this.props.innerRef&&this.props.innerRef.hasOwnProperty("current")){this.props.innerRef.current=ref;}else if(this.props.innerRef){this.props.innerRef(ref);}if(this.state.IOSupported&&ref){// If IO supported and element reference found, setup Observer functionality
this.io=createIntersectionObserver(ref,function(){_this2._prefetch();});}};_proto.render=function render(){var _this3=this;var _this$props=this.props,to=_this$props.to,_this$props$getProps=_this$props.getProps,getProps=_this$props$getProps===void 0?this.defaultGetProps:_this$props$getProps,_onClick=_this$props.onClick,_onMouseEnter=_this$props.onMouseEnter,$activeClassName=_this$props.activeClassName,$activeStyle=_this$props.activeStyle,$innerRef=_this$props.innerRef,partiallyActive=_this$props.partiallyActive,state=_this$props.state,replace=_this$props.replace,_location=_this$props._location,rest=(0,_objectWithoutPropertiesLoose2.default)(_this$props,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"]);if(false){}var prefixedTo=rewriteLinkPath(to,_location.pathname);if(!isLocalLink(prefixedTo)){return/*#__PURE__*/_react.default.createElement("a",(0,_extends2.default)({href:prefixedTo},rest));}return/*#__PURE__*/_react.default.createElement(_router.Link,(0,_extends2.default)({to:prefixedTo,state:state,getProps:getProps,innerRef:this.handleRef,onMouseEnter:function onMouseEnter(e){if(_onMouseEnter){_onMouseEnter(e);}___loader.hovering((0,_parsePath.parsePath)(prefixedTo).pathname);},onClick:function onClick(e){if(_onClick){_onClick(e);}if(e.button===0&&// ignore right clicks
!_this3.props.target&&// let browser handle "target=_blank"
!e.defaultPrevented&&// onClick prevented default
!e.metaKey&&// ignore clicks with modifier keys...
!e.altKey&&!e.ctrlKey&&!e.shiftKey){e.preventDefault();var shouldReplace=replace;var isCurrent=encodeURI(prefixedTo)===_location.pathname;if(typeof replace!=="boolean"&&isCurrent){shouldReplace=true;}// Make sure the necessary scripts and data are
// loaded before continuing.
window.___navigate(prefixedTo,{state:state,replace:shouldReplace});}return true;}},rest));};return GatsbyLink;}(_react.default.Component);GatsbyLink.propTypes=(0,_extends2.default)({},NavLinkPropTypes,{onClick:_propTypes.default.func,to:_propTypes.default.string.isRequired,replace:_propTypes.default.bool,state:_propTypes.default.object});var showDeprecationWarning=function showDeprecationWarning(functionName,altFunctionName,version){return console.warn("The \""+functionName+"\" method is now deprecated and will be removed in Gatsby v"+version+". Please use \""+altFunctionName+"\" instead.");};var _default=/*#__PURE__*/_react.default.forwardRef(function(props,ref){return/*#__PURE__*/_react.default.createElement(GatsbyLinkLocationWrapper,(0,_extends2.default)({innerRef:ref},props));});exports.default=_default;var navigate=function navigate(to,options){window.___navigate(rewriteLinkPath(to,window.location.pathname),options);};exports.navigate=navigate;var push=function push(to){showDeprecationWarning("push","navigate",3);window.___push(rewriteLinkPath(to,window.location.pathname));};exports.push=push;var replace=function replace(to){showDeprecationWarning("replace","navigate",3);window.___replace(rewriteLinkPath(to,window.location.pathname));};// TODO: Remove navigateTo for Gatsby v3
exports.replace=replace;var navigateTo=function navigateTo(to){showDeprecationWarning("navigateTo","navigate",3);return push(to);};exports.navigateTo=navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.parsePath=parsePath;function parsePath(path){var pathname=path||"/";var search="";var hash="";var hashIndex=pathname.indexOf("#");if(hashIndex!==-1){hash=pathname.substr(hashIndex);pathname=pathname.substr(0,hashIndex);}var searchIndex=pathname.indexOf("?");if(searchIndex!==-1){search=pathname.substr(searchIndex);pathname=pathname.substr(0,searchIndex);}return{pathname:pathname,search:search==="?"?"":search,hash:hash==="#"?"":hash};}

/***/ }),

/***/ "./node_modules/gatsby-plugin-google-fonts/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-fonts/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _react=__webpack_require__(/*! react */ "react");var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var format=function format(string){return string.split(' ').map(function(s){return s.replace(/^\w/,function(s){return s.toUpperCase();});}).join(' ');};var getFonts=function getFonts(options){return options.fonts.map(format).join('|').replace(/ /g,'+');};function getDisplay(options){return options.display?'&display='+options.display:'';}exports.onRenderBody=function(_ref,options){var setHeadComponents=_ref.setHeadComponents;var link='https://fonts.googleapis.com/css?family='+getFonts(options)+getDisplay(options);setHeadComponents([_react2.default.createElement('link',{key:'fonts',href:link,rel:'stylesheet'})]);};

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onRenderBody=void 0;var _reactHelmet=__webpack_require__(/*! react-helmet */ "react-helmet");var onRenderBody=function onRenderBody(_ref){var setHeadComponents=_ref.setHeadComponents,setHtmlAttributes=_ref.setHtmlAttributes,setBodyAttributes=_ref.setBodyAttributes;var helmet=_reactHelmet.Helmet.renderStatic();// These action functions were added partway through the Gatsby 1.x cycle.
if(setHtmlAttributes){setHtmlAttributes(helmet.htmlAttributes.toComponent());}if(setBodyAttributes){setBodyAttributes(helmet.bodyAttributes.toComponent());}setHeadComponents([helmet.title.toComponent(),helmet.link.toComponent(),helmet.meta.toComponent(),helmet.noscript.toComponent(),helmet.script.toComponent(),helmet.style.toComponent(),helmet.base.toComponent()]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-leaflet/gatsby-ssr.js":
/*!****************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-leaflet/gatsby-ssr.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var React=__webpack_require__(/*! react */ "react");exports.onRenderBody=function(_ref,options){var setHeadComponents=_ref.setHeadComponents;if(options.linkStyles===false)return false;var link=React.createElement('link',{key:'leaflet',rel:'stylesheet',href:'https://unpkg.com/leaflet@1.5.1/dist/leaflet.css',integrity:'sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==',crossOrigin:''});setHeadComponents([link]);};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContainer = exports.ScrollContext = void 0;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

exports.ScrollContext = _scrollHandler.ScrollHandler;

var _scrollContainer = __webpack_require__(/*! ./scroll-container */ "./node_modules/gatsby-react-router-scroll/scroll-container.js");

exports.ScrollContainer = _scrollContainer.ScrollContainer;

var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");

exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-container.js":
/*!*********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-container.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollContainer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

// TODO: In Gatsby v3, this file should be removed.
// We are deprecating this in V2 in favor of useScrollRestoration
var propTypes = {
  scrollKey: _propTypes.default.string.isRequired,
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired
};
var hasNotWarnedDeprecation = true;

var ScrollContainerImplementation = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollContainerImplementation, _React$Component);

  function ScrollContainerImplementation(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    if (false) {}

    return _this;
  }

  var _proto = ScrollContainerImplementation.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // eslint-disable-next-line react/no-find-dom-node
    var node = _reactDom.default.findDOMNode(this);

    var _this$props = this.props,
        location = _this$props.location,
        scrollKey = _this$props.scrollKey;
    if (!node) return;
    node.addEventListener("scroll", function () {
      _this2.props.context.save(location, scrollKey, node.scrollTop);
    });
    var position = this.props.context.read(location, scrollKey);
    node.scrollTo(0, position || 0);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ScrollContainerImplementation;
}(React.Component);

var ScrollContainer = function ScrollContainer(props) {
  return /*#__PURE__*/React.createElement(_router.Location, null, function (_ref) {
    var location = _ref.location;
    return /*#__PURE__*/React.createElement(_scrollHandler.ScrollContext.Consumer, null, function (context) {
      return /*#__PURE__*/React.createElement(ScrollContainerImplementation, (0, _extends2.default)({}, props, {
        context: context,
        location: location
      }));
    });
  });
};

exports.ScrollContainer = ScrollContainer;
ScrollContainer.propTypes = propTypes;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();

    _this.scrollListener = function () {
      var key = _this.props.location.key;

      if (key) {
        _this._stateStorage.save(_this.props.location, key, window.scrollY);
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }
    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */


    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (false) {}

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (false) {}
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _react = __webpack_require__(/*! react */ "react");

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

function useScrollRestoration(identifier) {
  var location = (0, _router.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, []);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: name, description, version, author, bin, bugs, dependencies, devDependencies, engines, files, homepage, keywords, license, main, module, peerDependencies, repository, resolutions, scripts, types, yargs, gitHead, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"gatsby\",\"description\":\"Blazing fast modern site generator for React\",\"version\":\"2.30.1\",\"author\":\"Kyle Mathews <mathews.kyle@gmail.com>\",\"bin\":{\"gatsby\":\"./cli.js\"},\"bugs\":{\"url\":\"https://github.com/gatsbyjs/gatsby/issues\"},\"dependencies\":{\"@babel/code-frame\":\"^7.10.4\",\"@babel/core\":\"^7.12.3\",\"@babel/parser\":\"^7.12.5\",\"@babel/runtime\":\"^7.12.5\",\"@babel/traverse\":\"^7.12.5\",\"@babel/types\":\"^7.12.6\",\"@hapi/joi\":\"^15.1.1\",\"@mikaelkristiansson/domready\":\"^1.0.10\",\"@nodelib/fs.walk\":\"^1.2.4\",\"@pieh/friendly-errors-webpack-plugin\":\"1.7.0-chalk-2\",\"@pmmmwh/react-refresh-webpack-plugin\":\"^0.4.1\",\"@reach/router\":\"^1.3.4\",\"@types/http-proxy\":\"^1.17.4\",\"@typescript-eslint/eslint-plugin\":\"^2.24.0\",\"@typescript-eslint/parser\":\"^2.24.0\",\"address\":\"1.1.2\",\"anser\":\"^2.0.1\",\"ansi-html\":\"^0.0.7\",\"autoprefixer\":\"^9.8.4\",\"axios\":\"^0.20.0\",\"babel-core\":\"7.0.0-bridge.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.1.0\",\"babel-plugin-add-module-exports\":\"^0.3.3\",\"babel-plugin-dynamic-import-node\":\"^2.3.3\",\"babel-plugin-lodash\":\"3.3.4\",\"babel-plugin-remove-graphql-queries\":\"^2.14.0\",\"babel-preset-gatsby\":\"^0.10.0\",\"better-opn\":\"^2.0.0\",\"better-queue\":\"^3.8.10\",\"bluebird\":\"^3.7.2\",\"body-parser\":\"^1.19.0\",\"browserslist\":\"^4.12.2\",\"cache-manager\":\"^2.11.1\",\"chalk\":\"^4.1.0\",\"chokidar\":\"^3.4.2\",\"common-tags\":\"^1.8.0\",\"compression\":\"^1.7.4\",\"convert-hrtime\":\"^3.0.0\",\"copyfiles\":\"^2.3.0\",\"core-js\":\"^3.6.5\",\"cors\":\"^2.8.5\",\"css-loader\":\"^1.0.1\",\"date-fns\":\"^2.14.0\",\"debug\":\"^3.2.6\",\"del\":\"^5.1.0\",\"detect-port\":\"^1.3.0\",\"devcert\":\"^1.1.3\",\"dotenv\":\"^8.2.0\",\"eslint\":\"^6.8.0\",\"eslint-config-react-app\":\"^5.2.1\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"^3.13.0\",\"eslint-plugin-graphql\":\"^4.0.0\",\"eslint-plugin-import\":\"^2.22.0\",\"eslint-plugin-jsx-a11y\":\"^6.3.1\",\"eslint-plugin-react\":\"^7.20.6\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"event-source-polyfill\":\"^1.0.15\",\"execa\":\"^4.0.3\",\"express\":\"^4.17.1\",\"express-graphql\":\"^0.9.0\",\"fastest-levenshtein\":\"^1.0.12\",\"file-loader\":\"^1.1.11\",\"find-cache-dir\":\"^3.3.1\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"^8.1.0\",\"gatsby-cli\":\"^2.17.0\",\"gatsby-core-utils\":\"^1.8.0\",\"gatsby-graphiql-explorer\":\"^0.9.0\",\"gatsby-legacy-polyfills\":\"^0.5.0\",\"gatsby-link\":\"^2.9.0\",\"gatsby-plugin-page-creator\":\"^2.8.0\",\"gatsby-plugin-typescript\":\"^2.10.0\",\"gatsby-plugin-utils\":\"^0.7.0\",\"gatsby-react-router-scroll\":\"^3.5.0\",\"gatsby-telemetry\":\"^1.8.0\",\"glob\":\"^7.1.6\",\"got\":\"8.3.2\",\"graphql\":\"^14.6.0\",\"graphql-compose\":\"^6.3.8\",\"graphql-playground-middleware-express\":\"^1.7.18\",\"hasha\":\"^5.2.0\",\"http-proxy\":\"^1.18.1\",\"invariant\":\"^2.2.4\",\"is-relative\":\"^1.0.0\",\"is-relative-url\":\"^3.0.0\",\"jest-worker\":\"^24.9.0\",\"joi\":\"^17.2.1\",\"json-loader\":\"^0.5.7\",\"json-stringify-safe\":\"^5.0.1\",\"latest-version\":\"5.1.0\",\"lodash\":\"^4.17.20\",\"md5-file\":\"^5.0.0\",\"meant\":\"^1.0.1\",\"micromatch\":\"^4.0.2\",\"mime\":\"^2.4.6\",\"mini-css-extract-plugin\":\"^0.11.2\",\"mitt\":\"^1.2.0\",\"mkdirp\":\"^0.5.1\",\"moment\":\"^2.27.0\",\"name-all-modules-plugin\":\"^1.0.1\",\"normalize-path\":\"^3.0.0\",\"null-loader\":\"^3.0.0\",\"opentracing\":\"^0.14.4\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"p-defer\":\"^3.0.0\",\"parseurl\":\"^1.3.3\",\"physical-cpu-count\":\"^2.0.0\",\"pnp-webpack-plugin\":\"^1.6.4\",\"postcss-flexbugs-fixes\":\"^4.2.1\",\"postcss-loader\":\"^3.0.0\",\"prompts\":\"^2.3.2\",\"prop-types\":\"^15.7.2\",\"query-string\":\"^6.13.1\",\"raw-loader\":\"^0.5.1\",\"react-dev-utils\":\"^4.2.3\",\"react-error-overlay\":\"^3.0.0\",\"react-hot-loader\":\"^4.12.21\",\"react-refresh\":\"^0.8.3\",\"redux\":\"^4.0.5\",\"redux-thunk\":\"^2.3.0\",\"semver\":\"^7.3.2\",\"shallow-compare\":\"^1.2.2\",\"signal-exit\":\"^3.0.3\",\"slugify\":\"^1.4.4\",\"socket.io\":\"2.3.0\",\"socket.io-client\":\"2.3.0\",\"source-map\":\"^0.7.3\",\"source-map-support\":\"^0.5.19\",\"st\":\"^2.0.0\",\"stack-trace\":\"^0.0.10\",\"string-similarity\":\"^1.2.2\",\"strip-ansi\":\"^5.2.0\",\"style-loader\":\"^0.23.1\",\"terminal-link\":\"^2.1.1\",\"terser-webpack-plugin\":\"^2.3.8\",\"tmp\":\"^0.2.1\",\"true-case-path\":\"^2.2.1\",\"type-of\":\"^2.0.1\",\"url-loader\":\"^1.1.2\",\"util.promisify\":\"^1.0.1\",\"uuid\":\"3.4.0\",\"v8-compile-cache\":\"^1.1.2\",\"webpack\":\"^4.44.1\",\"webpack-dev-middleware\":\"^3.7.2\",\"webpack-dev-server\":\"^3.11.0\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.2\",\"webpack-stats-plugin\":\"^0.3.2\",\"webpack-virtual-modules\":\"^0.2.2\",\"xstate\":\"^4.11.0\",\"yaml-loader\":\"^0.6.0\"},\"devDependencies\":{\"@babel/cli\":\"^7.12.1\",\"@babel/runtime\":\"^7.12.5\",\"@types/hapi__joi\":\"^16.0.12\",\"@types/micromatch\":\"^4.0.1\",\"@types/normalize-path\":\"^3.0.0\",\"@types/reach__router\":\"^1.3.5\",\"@types/semver\":\"^7.1.0\",\"@types/signal-exit\":\"^3.0.0\",\"@types/socket.io\":\"^2.1.4\",\"@types/string-similarity\":\"^3.0.0\",\"@types/tmp\":\"^0.2.0\",\"@types/webpack-dev-middleware\":\"^3.7.1\",\"@types/webpack-virtual-modules\":\"^0.1.0\",\"babel-preset-gatsby-package\":\"^0.10.0\",\"cross-env\":\"^7.0.3\",\"documentation\":\"^12.3.0\",\"enhanced-resolve\":\"^4.2.0\",\"eslint-plugin-jsx-a11y\":\"^6.3.1\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"rimraf\":\"^3.0.2\",\"typescript\":\"^3.9.5\",\"xhr-mock\":\"^2.5.1\",\"zipkin\":\"^0.22.0\",\"zipkin-javascript-opentracing\":\"^3.0.0\",\"zipkin-transport-http\":\"^0.22.0\"},\"engines\":{\"node\":\">=10.13.0\"},\"files\":[\"apis.json\",\"ipc.json\",\"cache-dir/\",\"cli.js\",\"dist/\",\"gatsby-admin-public/\",\"graphql.js\",\"graphql.d.ts\",\"index.d.ts\",\"scripts/postinstall.js\",\"utils.js\",\"internal.js\",\"internal.d.ts\",\"!**/__tests__/\"],\"homepage\":\"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme\",\"keywords\":[\"blog\",\"generator\",\"jekyll\",\"markdown\",\"react\",\"ssg\",\"website\"],\"license\":\"MIT\",\"main\":\"cache-dir/commonjs/gatsby-browser-entry.js\",\"module\":\"cache-dir/gatsby-browser-entry.js\",\"peerDependencies\":{\"react\":\"^16.4.2\",\"react-dom\":\"^16.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/gatsbyjs/gatsby.git\"},\"resolutions\":{\"graphql\":\"^14.6.0\",\"@mdx-js/mdx\":\"^2.0.0-next.3\",\"@mdx-js/react\":\"^2.0.0-next.3\",\"@mdx-js/runtime\":\"^2.0.0-next.3\",\"remark-mdx\":\"^2.0.0-next.3\",\"remark-mdxjs\":\"^2.0.0-next.3\"},\"scripts\":{\"build\":\"npm run build:types && npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs\",\"postbuild\":\"node scripts/output-api-file.js && yarn workspace gatsby-admin build\",\"build:internal-plugins\":\"copyfiles -u 1 src/internal-plugins/**/package.json dist\",\"build:rawfiles\":\"copyfiles -u 1 src/internal-plugins/**/raw_* dist\",\"build:cjs\":\"babel cache-dir --out-dir cache-dir/commonjs --ignore \\\"**/__tests__\\\" --ignore \\\"**/__mocks__\\\"\",\"build:src\":\"babel src --out-dir dist --source-maps --verbose --ignore \\\"**/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__,**/__mocks__\\\" --extensions \\\".ts,.js\\\"\",\"build:types\":\"tsc --emitDeclarationOnly --declaration --declarationDir dist\",\"clean-test-bundles\":\"find test/ -type f -name bundle.js* -exec rm -rf {} +\",\"prebuild\":\"rimraf dist && rimraf cache-dir/commonjs\",\"postinstall\":\"node scripts/postinstall.js\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch\"},\"types\":\"index.d.ts\",\"yargs\":{\"boolean-negation\":false},\"gitHead\":\"4aeccafd7d2b0a06a711dafcdebf2ef3400e9cea\"}");

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-icon-2x.png":
/*!*************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-icon-2x.png ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,"

/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-icon.png":
/*!**********************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-icon.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,"

/***/ }),

/***/ "./node_modules/leaflet/dist/images/marker-shadow.png":
/*!************************************************************!*\
  !*** ./node_modules/leaflet/dist/images/marker-shadow.png ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,"

/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet-src.js":
/*!**************************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet-src.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/leaflet/dist/leaflet.css":
/*!***********************************************!*\
  !*** ./node_modules/leaflet/dist/leaflet.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(/*! react */ "react"),n=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),r=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.14.0",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.14.0";


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */ "./node_modules/react-dom/cjs/react-dom.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  fallbackHot();
}

function fallbackHot() {
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.production.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.production.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-is.production.min.js */ "./node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-leaflet/es/AttributionControl.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-leaflet/es/AttributionControl.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");







var AttributionControl = /*#__PURE__*/function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AttributionControl, _MapControl);

  function AttributionControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = AttributionControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"].Attribution(props);
  };

  return AttributionControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(AttributionControl));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Circle.js":
/*!*************************************************!*\
  !*** ./node_modules/react-leaflet/es/Circle.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");








var Circle = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Circle, _Path);

  function Circle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Circle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var center = props.center,
        radius = props.radius,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["center", "radius"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_2__["Circle"](center, radius, this.getOptions(options));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return Circle;
}(_Path__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(Circle));

/***/ }),

/***/ "./node_modules/react-leaflet/es/CircleMarker.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/CircleMarker.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");








var CircleMarker = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(CircleMarker, _Path);

  function CircleMarker() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = CircleMarker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["CircleMarker"](props.center, this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.center !== fromProps.center) {
      this.leafletElement.setLatLng(toProps.center);
    }

    if (toProps.radius !== fromProps.radius) {
      this.leafletElement.setRadius(toProps.radius);
    }
  };

  return CircleMarker;
}(_Path__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(CircleMarker));

/***/ }),

/***/ "./node_modules/react-leaflet/es/DivOverlay.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/DivOverlay.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DivOverlay; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapComponent */ "./node_modules/react-leaflet/es/MapComponent.js");
/* harmony import */ var _utils_updateClassName__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/updateClassName */ "./node_modules/react-leaflet/es/utils/updateClassName.js");









var DivOverlay = /*#__PURE__*/function (_MapComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DivOverlay, _MapComponent);

  function DivOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onClose", function () {
      if (_this.props.onClose) {
        _this.props.onClose();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onOpen", function () {
      _this.forceUpdate(); // Re-render now that leafletElement is created


      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    });

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = DivOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(_prevProps, _props) {};

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_5__["default"])(this.leafletElement._container, prevProps.className, this.props.className);
    this.updateLeafletElement(prevProps, this.props);

    if (this.leafletElement.isOpen()) {
      this.leafletElement.update();
      this.onRender();
    }
  };

  _proto.onRender = function onRender() {};

  _proto.render = function render() {
    if (this.leafletElement._contentNode) {
      return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["createPortal"])(this.props.children, this.leafletElement._contentNode);
    }

    return null;
  };

  return DivOverlay;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_4__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/FeatureGroup.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/FeatureGroup.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");








var FeatureGroup = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(FeatureGroup, _Path);

  function FeatureGroup() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = FeatureGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["FeatureGroup"](this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      layerContainer: el,
      popupContainer: el
    });
    return el;
  };

  _proto.componentDidMount = function componentDidMount() {
    _Path.prototype.componentDidMount.call(this);

    this.setStyle(this.props);
  };

  return FeatureGroup;
}(_Path__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(FeatureGroup));

/***/ }),

/***/ "./node_modules/react-leaflet/es/GeoJSON.js":
/*!**************************************************!*\
  !*** ./node_modules/react-leaflet/es/GeoJSON.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");







var GeoJSON = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GeoJSON, _Path);

  function GeoJSON() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = GeoJSON.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["GeoJSON"](props.data, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (typeof toProps.style === 'function') {
      this.leafletElement.setStyle(toProps.style);
    } else {
      this.setStyleIfChanged(fromProps, toProps);
    }
  };

  return GeoJSON;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(GeoJSON));

/***/ }),

/***/ "./node_modules/react-leaflet/es/GridLayer.js":
/*!****************************************************!*\
  !*** ./node_modules/react-leaflet/es/GridLayer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GridLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");







var GridLayer = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GridLayer, _MapLayer);

  function GridLayer() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = GridLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_2__["GridLayer"](this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    var opacity = toProps.opacity,
        zIndex = toProps.zIndex;

    if (opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(opacity);
    }

    if (zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(zIndex);
    }
  };

  _proto.getOptions = function getOptions(props) {
    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _MapLayer.prototype.getOptions.call(this, props));

    var map = props.leaflet.map;

    if (map != null) {
      // $FlowFixMe: Object spread
      if (options.maxZoom == null && map.options.maxZoom != null) {
        // $FlowFixMe: Object spread
        options.maxZoom = map.options.maxZoom;
      } // $FlowFixMe: Object spread


      if (options.minZoom == null && map.options.minZoom != null) {
        // $FlowFixMe: Object spread
        options.minZoom = map.options.minZoom;
      }
    }

    return options;
  };

  _proto.render = function render() {
    return null;
  };

  return GridLayer;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/ImageOverlay.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/ImageOverlay.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");








var ImageOverlay = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageOverlay, _MapLayer);

  function ImageOverlay() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = ImageOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["ImageOverlay"](props.url, props.bounds, this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }

    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(Object(leaflet__WEBPACK_IMPORTED_MODULE_2__["latLngBounds"])(toProps.bounds));
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  return ImageOverlay;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(ImageOverlay));

/***/ }),

/***/ "./node_modules/react-leaflet/es/LayerGroup.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/LayerGroup.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");








var LayerGroup = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(LayerGroup, _MapLayer);

  function LayerGroup() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = LayerGroup.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["LayerGroup"]([], this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      layerContainer: el
    });
    return el;
  };

  return LayerGroup;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_3__["withLeaflet"])(LayerGroup));

/***/ }),

/***/ "./node_modules/react-leaflet/es/LayersControl.js":
/*!********************************************************!*\
  !*** ./node_modules/react-leaflet/es/LayersControl.js ***!
  \********************************************************/
/*! exports provided: ControlledLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlledLayer", function() { return ControlledLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");











// Abtract class for layer container, extended by BaseLayer and Overlay
var ControlledLayer = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlledLayer, _Component);

  function ControlledLayer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "contextValue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "layer", void 0);

    return _this;
  }

  var _proto = ControlledLayer.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(_ref) {
    var checked = _ref.checked;

    if (this.props.leaflet.map == null) {
      return;
    } // Handle dynamically (un)checking the layer => adding/removing from the map


    if (this.props.checked === true && (checked == null || checked === false)) {
      this.props.leaflet.map.addLayer(this.layer);
    } else if (checked === true && (this.props.checked == null || this.props.checked === false)) {
      this.props.leaflet.map.removeLayer(this.layer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.removeLayerControl(this.layer);
  };

  _proto.addLayer = function addLayer() {
    throw new Error('Must be implemented in extending class');
  };

  _proto.removeLayer = function removeLayer(layer) {
    this.props.removeLayer(layer);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["LeafletProvider"], {
      value: this.contextValue
    }, children) : null;
  };

  return ControlledLayer;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var BaseLayer = /*#__PURE__*/function (_ControlledLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(BaseLayer, _ControlledLayer);

  function BaseLayer(props) {
    var _this2;

    _this2 = _ControlledLayer.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2), "addLayer", function (layer) {
      _this2.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this2$props = _this2.props,
          addBaseLayer = _this2$props.addBaseLayer,
          checked = _this2$props.checked,
          name = _this2$props.name;
      addBaseLayer(layer, name, checked);
    });

    _this2.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.leaflet, {
      layerContainer: {
        addLayer: _this2.addLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2)),
        removeLayer: _this2.removeLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2))
      }
    });
    return _this2;
  }

  return BaseLayer;
}(ControlledLayer);

var Overlay = /*#__PURE__*/function (_ControlledLayer2) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Overlay, _ControlledLayer2);

  function Overlay(props) {
    var _this3;

    _this3 = _ControlledLayer2.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3), "addLayer", function (layer) {
      _this3.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this3$props = _this3.props,
          addOverlay = _this3$props.addOverlay,
          checked = _this3$props.checked,
          name = _this3$props.name;
      addOverlay(layer, name, checked);
    });

    _this3.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props.leaflet, {
      layerContainer: {
        addLayer: _this3.addLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3)),
        removeLayer: _this3.removeLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this3))
      }
    });
    return _this3;
  }

  return Overlay;
}(ControlledLayer);

var LayersControl = /*#__PURE__*/function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(LayersControl, _MapControl);

  function LayersControl(props) {
    var _this4;

    _this4 = _MapControl.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4), "controlProps", void 0);

    _this4.controlProps = {
      addBaseLayer: _this4.addBaseLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      addOverlay: _this4.addOverlay.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      leaflet: props.leaflet,
      removeLayer: _this4.removeLayer.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4)),
      removeLayerControl: _this4.removeLayerControl.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this4))
    };
    return _this4;
  }

  var _proto2 = LayersControl.prototype;

  _proto2.createLeafletElement = function createLeafletElement(props) {
    var _children = props.children,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_5__["Control"].Layers(undefined, undefined, options);
  };

  _proto2.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _MapControl.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.collapsed !== fromProps.collapsed) {
      if (toProps.collapsed === true) {
        this.leafletElement.collapse();
      } else {
        this.leafletElement.expand();
      }
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    var _this5 = this;

    setTimeout(function () {
      _MapControl.prototype.componentWillUnmount.call(_this5);
    }, 0);
  };

  _proto2.addBaseLayer = function addBaseLayer(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addBaseLayer(layer, name);
  };

  _proto2.addOverlay = function addOverlay(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addOverlay(layer, name);
  };

  _proto2.removeLayer = function removeLayer(layer) {
    if (this.props.leaflet.map != null) {
      this.props.leaflet.map.removeLayer(layer);
    }
  };

  _proto2.removeLayerControl = function removeLayerControl(layer) {
    this.leafletElement.removeLayer(layer);
  };

  _proto2.render = function render() {
    var _this6 = this;

    var children = react__WEBPACK_IMPORTED_MODULE_6__["Children"].map(this.props.children, function (child) {
      return child ? /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_6__["cloneElement"])(child, _this6.controlProps) : null;
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], null, children);
  };

  return LayersControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_8__["default"]);

var LayersControlExport = Object(_context__WEBPACK_IMPORTED_MODULE_7__["withLeaflet"])(LayersControl);
LayersControlExport.BaseLayer = BaseLayer;
LayersControlExport.Overlay = Overlay;
/* harmony default export */ __webpack_exports__["default"] = (LayersControlExport);

/***/ }),

/***/ "./node_modules/react-leaflet/es/Map.js":
/*!**********************************************!*\
  !*** ./node_modules/react-leaflet/es/Map.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Map; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./MapEvented */ "./node_modules/react-leaflet/es/MapEvented.js");
/* harmony import */ var _utils_updateClassName__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/updateClassName */ "./node_modules/react-leaflet/es/utils/updateClassName.js");
/* harmony import */ var _utils_omit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/omit */ "./node_modules/react-leaflet/es/utils/omit.js");













var OTHER_PROPS = ['children', 'className', 'id', 'style', 'useFlyTo', 'whenReady'];

var normalizeCenter = function normalizeCenter(pos) {
  return Array.isArray(pos) ? [pos[0], pos[1]] : [pos.lat, pos.lon ? pos.lon : pos.lng];
};

var Map = /*#__PURE__*/function (_MapEvented) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(Map, _MapEvented);

  function Map(props) {
    var _this;

    _this = _MapEvented.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "className", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "contextValue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "container", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "viewport", {
      center: undefined,
      zoom: undefined
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_ready", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_updating", false);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onViewportChange", function () {
      var center = _this.leafletElement.getCenter();

      _this.viewport = {
        center: center ? [center.lat, center.lng] : undefined,
        zoom: _this.leafletElement.getZoom()
      };

      if (_this.props.onViewportChange && !_this._updating) {
        _this.props.onViewportChange(_this.viewport);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onViewportChanged", function () {
      if (_this.props.onViewportChanged && !_this._updating) {
        _this.props.onViewportChanged(_this.viewport);
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "bindContainer", function (container) {
      _this.container = container;
    });

    _this.className = props.className;
    return _this;
  }

  var _proto = Map.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var viewport = props.viewport,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["viewport"]);

    if (viewport) {
      if (viewport.center) {
        options.center = viewport.center;
      }

      if (typeof viewport.zoom === 'number') {
        options.zoom = viewport.zoom;
      }
    }

    return new leaflet__WEBPACK_IMPORTED_MODULE_5__["Map"](this.container, options);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    this._updating = true;
    var bounds = toProps.bounds,
        boundsOptions = toProps.boundsOptions,
        boxZoom = toProps.boxZoom,
        center = toProps.center,
        className = toProps.className,
        doubleClickZoom = toProps.doubleClickZoom,
        dragging = toProps.dragging,
        keyboard = toProps.keyboard,
        maxBounds = toProps.maxBounds,
        scrollWheelZoom = toProps.scrollWheelZoom,
        tap = toProps.tap,
        touchZoom = toProps.touchZoom,
        useFlyTo = toProps.useFlyTo,
        viewport = toProps.viewport,
        zoom = toProps.zoom;
    Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_9__["default"])(this.container, fromProps.className, className);

    if (viewport && viewport !== fromProps.viewport) {
      var c = viewport.center ? viewport.center : center;
      var z = viewport.zoom == null ? zoom : viewport.zoom;

      if (useFlyTo === true) {
        this.leafletElement.flyTo(c, z, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setView(c, z, this.getZoomPanOptions(toProps));
      }
    } else if (center && this.shouldUpdateCenter(center, fromProps.center)) {
      if (useFlyTo === true) {
        this.leafletElement.flyTo(center, zoom, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
      }
    } else if (typeof zoom === 'number' && zoom !== fromProps.zoom) {
      if (fromProps.zoom == null) {
        this.leafletElement.setView(center, zoom, this.getZoomPanOptions(toProps));
      } else {
        this.leafletElement.setZoom(zoom, this.getZoomPanOptions(toProps));
      }
    }

    if (maxBounds && this.shouldUpdateBounds(maxBounds, fromProps.maxBounds)) {
      this.leafletElement.setMaxBounds(maxBounds);
    }

    if (bounds && (this.shouldUpdateBounds(bounds, fromProps.bounds) || boundsOptions !== fromProps.boundsOptions)) {
      if (useFlyTo === true) {
        this.leafletElement.flyToBounds(bounds, this.getFitBoundsOptions(toProps));
      } else {
        this.leafletElement.fitBounds(bounds, this.getFitBoundsOptions(toProps));
      }
    }

    if (boxZoom !== fromProps.boxZoom) {
      if (boxZoom === true) {
        this.leafletElement.boxZoom.enable();
      } else {
        this.leafletElement.boxZoom.disable();
      }
    }

    if (doubleClickZoom !== fromProps.doubleClickZoom) {
      if (doubleClickZoom === true || typeof doubleClickZoom === 'string') {
        this.leafletElement.options.doubleClickZoom = doubleClickZoom;
        this.leafletElement.doubleClickZoom.enable();
      } else {
        this.leafletElement.doubleClickZoom.disable();
      }
    }

    if (dragging !== fromProps.dragging) {
      if (dragging === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }

    if (keyboard !== fromProps.keyboard) {
      if (keyboard === true) {
        this.leafletElement.keyboard.enable();
      } else {
        this.leafletElement.keyboard.disable();
      }
    }

    if (scrollWheelZoom !== fromProps.scrollWheelZoom) {
      if (scrollWheelZoom === true || typeof scrollWheelZoom === 'string') {
        this.leafletElement.options.scrollWheelZoom = scrollWheelZoom;
        this.leafletElement.scrollWheelZoom.enable();
      } else {
        this.leafletElement.scrollWheelZoom.disable();
      }
    }

    if (tap !== fromProps.tap) {
      if (tap === true) {
        this.leafletElement.tap.enable();
      } else {
        this.leafletElement.tap.disable();
      }
    }

    if (touchZoom !== fromProps.touchZoom) {
      if (touchZoom === true || typeof touchZoom === 'string') {
        this.leafletElement.options.touchZoom = touchZoom;
        this.leafletElement.touchZoom.enable();
      } else {
        this.leafletElement.touchZoom.disable();
      }
    }

    this._updating = false;
  };

  _proto.getZoomPanOptions = function getZoomPanOptions(props) {
    var animate = props.animate,
        duration = props.duration,
        easeLinearity = props.easeLinearity,
        noMoveStart = props.noMoveStart;
    return {
      animate: animate,
      duration: duration,
      easeLinearity: easeLinearity,
      noMoveStart: noMoveStart
    };
  };

  _proto.getFitBoundsOptions = function getFitBoundsOptions(props) {
    var zoomPanOptions = this.getZoomPanOptions(props);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, zoomPanOptions, props.boundsOptions);
  };

  _proto.componentDidMount = function componentDidMount() {
    var props = _utils_omit__WEBPACK_IMPORTED_MODULE_10__["default"].apply(void 0, [this.props].concat(OTHER_PROPS));
    this.leafletElement = this.createLeafletElement(props);
    this.leafletElement.on('move', this.onViewportChange);
    this.leafletElement.on('moveend', this.onViewportChanged);

    if (props.bounds != null) {
      this.leafletElement.fitBounds(props.bounds, this.getFitBoundsOptions(props));
    }

    this.contextValue = {
      layerContainer: this.leafletElement,
      map: this.leafletElement
    };

    _MapEvented.prototype.componentDidMount.call(this);

    this.forceUpdate(); // Re-render now that leafletElement is created
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this._ready === false) {
      this._ready = true;

      if (this.props.whenReady) {
        this.leafletElement.whenReady(this.props.whenReady);
      }
    }

    _MapEvented.prototype.componentDidUpdate.call(this, prevProps);

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapEvented.prototype.componentWillUnmount.call(this);

    this.leafletElement.off('move', this.onViewportChange);
    this.leafletElement.off('moveend', this.onViewportChanged); // The canvas renderer uses requestAnimationFrame, making a deferred call to a deleted object
    // When preferCanvas is set, use simpler teardown logic

    if (this.props.preferCanvas === true) {
      this.leafletElement._initEvents(true);

      this.leafletElement._stop();
    } else {
      this.leafletElement.remove();
    }
  };

  _proto.shouldUpdateCenter = function shouldUpdateCenter(next, prev) {
    if (!prev) return true;
    next = normalizeCenter(next);
    prev = normalizeCenter(prev);
    return next[0] !== prev[0] || next[1] !== prev[1];
  };

  _proto.shouldUpdateBounds = function shouldUpdateBounds(next, prev) {
    return prev ? !Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLngBounds"])(next).equals(Object(leaflet__WEBPACK_IMPORTED_MODULE_5__["latLngBounds"])(prev)) : true;
  };

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
      className: this.className,
      id: this.props.id,
      ref: this.bindContainer,
      style: this.props.style
    }, this.contextValue ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["LeafletProvider"], {
      value: this.contextValue
    }, this.props.children) : null);
  };

  return Map;
}(_MapEvented__WEBPACK_IMPORTED_MODULE_8__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapComponent.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapComponent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapComponent; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapEvented */ "./node_modules/react-leaflet/es/MapEvented.js");






var MapComponent = /*#__PURE__*/function (_MapEvented) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(MapComponent, _MapEvented);

  function MapComponent() {
    return _MapEvented.apply(this, arguments) || this;
  }

  var _proto = MapComponent.prototype;

  _proto.getOptions = function getOptions(props) {
    if (props.pane != null) {
      return props;
    }

    if (props.leaflet != null && props.leaflet.pane != null) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        pane: props.leaflet.pane
      });
    }

    return props;
  };

  return MapComponent;
}(_MapEvented__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapControl.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapControl.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapControl; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);








var MapControl = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(MapControl, _Component);

  function MapControl(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "leafletElement", void 0);

    _this.leafletElement = _this.createLeafletElement(_this.props);
    return _this;
  }

  var _proto = MapControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setPosition(toProps.position);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    this.leafletElement.addTo(this.props.leaflet.map);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.leafletElement.remove();
  };

  _proto.render = function render() {
    return null;
  };

  return MapControl;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapEvented.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapEvented.js ***!
  \*****************************************************/
/*! exports provided: EVENTS_RE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENTS_RE", function() { return EVENTS_RE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapEvented; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);







var EVENTS_RE = /^on(.+)$/i;

var MapEvented = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MapEvented, _Component);

  function MapEvented(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "_leafletEvents", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    _this._leafletEvents = _this.extractLeafletEvents(props);
    return _this;
  }

  var _proto = MapEvented.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.bindLeafletEvents(this._leafletEvents);
  };

  _proto.componentDidUpdate = function componentDidUpdate(_prevProps) {
    this._leafletEvents = this.bindLeafletEvents(this.extractLeafletEvents(this.props), this._leafletEvents);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this2 = this;

    var el = this.leafletElement;
    if (!el) return;
    Object.keys(this._leafletEvents).forEach(function (ev) {
      el.off(ev, _this2._leafletEvents[ev]);
    });
  };

  _proto.extractLeafletEvents = function extractLeafletEvents(props) {
    return Object.keys(props).reduce(function (res, prop) {
      if (EVENTS_RE.test(prop)) {
        if (props[prop] != null) {
          var _key = prop.replace(EVENTS_RE, function (match, p) {
            return p.toLowerCase();
          });

          res[_key] = props[prop];
        }
      }

      return res;
    }, {});
  };

  _proto.bindLeafletEvents = function bindLeafletEvents(next, prev) {
    if (next === void 0) {
      next = {};
    }

    if (prev === void 0) {
      prev = {};
    }

    var el = this.leafletElement;
    if (el == null || el.on == null) return {};

    var diff = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev);

    Object.keys(prev).forEach(function (ev) {
      if (next[ev] == null || prev[ev] !== next[ev]) {
        delete diff[ev];
        el.off(ev, prev[ev]);
      }
    });
    Object.keys(next).forEach(function (ev) {
      if (prev[ev] == null || next[ev] !== prev[ev]) {
        diff[ev] = next[ev];
        el.on(ev, next[ev]);
      }
    });
    return diff;
  };

  _proto.fireLeafletEvent = function fireLeafletEvent(type, data) {
    var el = this.leafletElement;
    if (el) el.fire(type, data);
  };

  return MapEvented;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/MapLayer.js":
/*!***************************************************!*\
  !*** ./node_modules/react-leaflet/es/MapLayer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapLayer; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapComponent */ "./node_modules/react-leaflet/es/MapComponent.js");










var MapLayer = /*#__PURE__*/function (_MapComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(MapLayer, _MapComponent);

  function MapLayer(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "contextValue", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = MapLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(_props) {
    throw new Error('createLeafletElement() must be implemented');
  };

  _proto.updateLeafletElement = function updateLeafletElement(_fromProps, _toProps) {};

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null) {
      return null;
    }

    return this.contextValue == null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], null, children) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_5__["LeafletProvider"], {
      value: this.contextValue
    }, children);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(MapLayer, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);

  return MapLayer;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_6__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/Marker.js":
/*!*************************************************!*\
  !*** ./node_modules/react-leaflet/es/Marker.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");









var Marker = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Marker, _MapLayer);

  function Marker() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = Marker.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var el = new leaflet__WEBPACK_IMPORTED_MODULE_2__["Marker"](props.position, this.getOptions(props));
    this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
      popupContainer: el
    });
    return el;
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }

    if (toProps.icon !== fromProps.icon) {
      this.leafletElement.setIcon(toProps.icon);
    }

    if (toProps.zIndexOffset !== fromProps.zIndexOffset) {
      this.leafletElement.setZIndexOffset(toProps.zIndexOffset);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.draggable !== fromProps.draggable) {
      if (toProps.draggable === true) {
        this.leafletElement.dragging.enable();
      } else {
        this.leafletElement.dragging.disable();
      }
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children == null || this.contextValue == null ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["LeafletProvider"], {
      value: this.contextValue
    }, children);
  };

  return Marker;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_4__["withLeaflet"])(Marker));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Pane.js":
/*!***********************************************!*\
  !*** ./node_modules/react-leaflet/es/Pane.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _utils_updateClassName__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/updateClassName */ "./node_modules/react-leaflet/es/utils/updateClassName.js");
/* harmony import */ var _utils_omit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/omit */ "./node_modules/react-leaflet/es/utils/omit.js");






// flowlint sketchy-null-string:off





var idCounter = 0;

var uniqueId = function uniqueId() {
  return ++idCounter;
};

var LEAFLET_PANES = ['tile', 'shadow', 'overlay', 'map', 'marker', 'tooltip', 'popup'];
var PANE_RE = /-*pane/gi;

var isLeafletPane = function isLeafletPane(name) {
  return LEAFLET_PANES.indexOf(name.replace(PANE_RE, '')) !== -1;
};

var paneStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
};

var Pane = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Pane, _Component);

  function Pane() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "state", {
      name: undefined,
      context: undefined
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "setStyle", function (_temp) {
      var _ref = _temp === void 0 ? _this.props : _temp,
          style = _ref.style,
          className = _ref.className;

      var pane = _this.getPane(_this.state.name);

      if (pane) {
        if (className) {
          Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_7__["addClassName"])(pane, className);
        }

        if (style) {
          // Without the cast, Flow throws this error:
          //   Cannot assign style[key] to pane.style[key] because string
          //   is incompatible with number.
          Object.keys(style).forEach(function (key) {
            pane.style[key] = style[key];
          });
        }
      }
    });

    return _this;
  }

  var _proto = Pane.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.createPane(this.props);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!this.state.name) {
      // Do nothing if this.state.name is undefined due to errors or
      // an invalid props.name value
      return;
    } // If the 'name' prop has changed the current pane is unmounted and a new
    // pane is created.


    if (this.props.name !== prevProps.name) {
      this.removePane();
      this.createPane(this.props);
    } else {
      // Remove the previous css class name from the pane if it has changed.
      // setStyle() will take care of adding in the updated className
      if (prevProps.className && this.props.className !== prevProps.className) {
        var pane = this.getPane(this.state.name);

        if (pane != null && prevProps.className != null) {
          Object(_utils_updateClassName__WEBPACK_IMPORTED_MODULE_7__["removeClassName"])(pane, prevProps.className);
        }
      } // Update the pane's DOM node style and class


      this.setStyle(this.props);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removePane();
  };

  _proto.createPane = function createPane(props) {
    var map = props.leaflet.map;
    var name = props.name || "pane-" + uniqueId();

    if (map != null && map.createPane != null) {
      var isDefault = isLeafletPane(name);
      var existing = isDefault || this.getPane(name);

      if (existing == null) {
        map.createPane(name, this.getParentPane());
      } else {
        var message = isDefault ? "You must use a unique name for a pane that is not a default leaflet pane (" + name + ")" : "A pane with this name already exists. (" + name + ")";
         false ? undefined : void 0;
      }

      this.setState({
        name: name,
        context: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
          pane: name
        })
      }, this.setStyle);
    }
  };

  _proto.removePane = function removePane() {
    // Remove the created pane
    var name = this.state.name;

    if (name != null) {
      var pane = this.getPane(name);
      if (pane != null && pane.remove) pane.remove();
      var map = this.props.leaflet.map;

      if (map != null && map._panes != null) {
        map._panes = Object(_utils_omit__WEBPACK_IMPORTED_MODULE_8__["default"])(map._panes, name);
        map._paneRenderers = Object(_utils_omit__WEBPACK_IMPORTED_MODULE_8__["default"])(map._paneRenderers, name);
      }
    }
  };

  _proto.getParentPane = function getParentPane() {
    return this.getPane(this.props.pane || this.props.leaflet.pane);
  };

  _proto.getPane = function getPane(name) {
    if (name != null && this.props.leaflet.map != null) {
      return this.props.leaflet.map.getPane(name);
    }
  };

  _proto.render = function render() {
    var context = this.state.context;
    return context ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_6__["LeafletProvider"], {
      value: context
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: paneStyles
    }, this.props.children)) : null;
  };

  return Pane;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_6__["withLeaflet"])(Pane));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Path.js":
/*!***********************************************!*\
  !*** ./node_modules/react-leaflet/es/Path.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");
/* harmony import */ var _utils_pick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/pick */ "./node_modules/react-leaflet/es/utils/pick.js");







var OPTIONS = ['stroke', 'color', 'weight', 'opacity', 'lineCap', 'lineJoin', 'dashArray', 'dashOffset', 'fill', 'fillColor', 'fillOpacity', 'fillRule', 'bubblingMouseEvents', 'renderer', 'className', // Interactive Layer
'interactive', // Layer
'pane', 'attribution'];

var Path = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Path, _MapLayer);

  function Path(props) {
    var _this;

    _this = _MapLayer.call(this, props) || this;

    if (_this.contextValue == null) {
      _this.contextValue = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props.leaflet, {
        popupContainer: _this.leafletElement
      });
    }

    return _this;
  }

  var _proto = Path.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapLayer.prototype.componentDidUpdate.call(this, prevProps);

    this.setStyleIfChanged(prevProps, this.props);
  };

  _proto.getPathOptions = function getPathOptions(props) {
    return Object(_utils_pick__WEBPACK_IMPORTED_MODULE_4__["default"])(props, OPTIONS);
  };

  _proto.setStyle = function setStyle(options) {
    if (options === void 0) {
      options = {};
    }

    this.leafletElement.setStyle(options);
  };

  _proto.setStyleIfChanged = function setStyleIfChanged(fromProps, toProps) {
    var nextStyle = this.getPathOptions(toProps);

    if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_2___default()(nextStyle, this.getPathOptions(fromProps))) {
      this.setStyle(nextStyle);
    }
  };

  return Path;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);



/***/ }),

/***/ "./node_modules/react-leaflet/es/Polygon.js":
/*!**************************************************!*\
  !*** ./node_modules/react-leaflet/es/Polygon.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");







var Polygon = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Polygon, _Path);

  function Polygon() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polygon.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Polygon"](props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polygon;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(Polygon));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Polyline.js":
/*!***************************************************!*\
  !*** ./node_modules/react-leaflet/es/Polyline.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");







var Polyline = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Polyline, _Path);

  function Polyline() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Polyline.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Polyline"](props.positions, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.positions !== fromProps.positions) {
      this.leafletElement.setLatLngs(toProps.positions);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Polyline;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(Polyline));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Popup.js":
/*!************************************************!*\
  !*** ./node_modules/react-leaflet/es/Popup.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _DivOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DivOverlay */ "./node_modules/react-leaflet/es/DivOverlay.js");










var Popup = /*#__PURE__*/function (_DivOverlay) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(Popup, _DivOverlay);

  function Popup() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onPopupOpen", function (_ref) {
      var popup = _ref.popup;

      if (popup === _this.leafletElement) {
        _this.onOpen();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onPopupClose", function (_ref2) {
      var popup = _ref2.popup;

      if (popup === _this.leafletElement) {
        _this.onClose();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "onRender", function () {
      if (_this.props.autoPan !== false && _this.leafletElement.isOpen()) {
        if (_this.leafletElement._map && _this.leafletElement._map._panAnim) {
          _this.leafletElement._map._panAnim = undefined;
        }

        _this.leafletElement._adjustPan();
      }
    });

    return _this;
  }

  var _proto = Popup.prototype;

  _proto.getOptions = function getOptions(props) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _DivOverlay.prototype.getOptions.call(this, props), {
      autoPan: false
    });
  };

  _proto.createLeafletElement = function createLeafletElement(props) {
    var options = this.getOptions(props);
    options.autoPan = props.autoPan !== false;
    return new leaflet__WEBPACK_IMPORTED_MODULE_4__["Popup"](options, props.leaflet.popupContainer);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.position !== fromProps.position) {
      this.leafletElement.setLatLng(toProps.position);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    var position = this.props.position;
    var _this$props$leaflet = this.props.leaflet,
        map = _this$props$leaflet.map,
        popupContainer = _this$props$leaflet.popupContainer;
    var el = this.leafletElement;

    if (map != null) {
      map.on({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose
      });
    }

    if (popupContainer) {
      // Attach to container component
      popupContainer.bindPopup(el);
    } else {
      // Attach to a Map
      if (position) {
        el.setLatLng(position);
      }

      el.openOn(map);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var map = this.props.leaflet.map;

    if (map != null) {
      map.off({
        popupopen: this.onPopupOpen,
        popupclose: this.onPopupClose
      });
      map.removeLayer(this.leafletElement);
    }

    _DivOverlay.prototype.componentWillUnmount.call(this);
  };

  return Popup;
}(_DivOverlay__WEBPACK_IMPORTED_MODULE_6__["default"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Popup, "defaultProps", {
  pane: 'popupPane'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_5__["withLeaflet"])(Popup));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Rectangle.js":
/*!****************************************************!*\
  !*** ./node_modules/react-leaflet/es/Rectangle.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");







var Rectangle = /*#__PURE__*/function (_Path) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Rectangle, _Path);

  function Rectangle() {
    return _Path.apply(this, arguments) || this;
  }

  var _proto = Rectangle.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Rectangle"](props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    this.setStyleIfChanged(fromProps, toProps);
  };

  return Rectangle;
}(_Path__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(Rectangle));

/***/ }),

/***/ "./node_modules/react-leaflet/es/SVGOverlay.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/SVGOverlay.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MapComponent */ "./node_modules/react-leaflet/es/MapComponent.js");











function setAttribute(el, name, value) {
  if (value != null) {
    el.setAttribute(name, value);
  } else {
    el.removeAttribute(name);
  }
}

var SVGOverlay = /*#__PURE__*/function (_MapComponent) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(SVGOverlay, _MapComponent);

  function SVGOverlay(props) {
    var _this;

    _this = _MapComponent.call(this, props) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "leafletElement", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "container", void 0);

    _this.leafletElement = _this.createLeafletElement(props);
    return _this;
  }

  var _proto = SVGOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var container = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    setAttribute(container, 'xmlns', 'http://www.w3.org/2000/svg');
    setAttribute(container, 'preserveAspectRatio', props.preserveAspectRatio);
    setAttribute(container, 'viewBox', props.viewBox);
    this.container = container;
    return new leaflet__WEBPACK_IMPORTED_MODULE_4__["SVGOverlay"](container, props.bounds, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(toProps.bounds);
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (this.container && toProps.preserveAspectRatio !== fromProps.preserveAspectRatio) {
      setAttribute(this.container, 'preserveAspectRatio', toProps.preserveAspectRatio);
    }

    if (this.container && toProps.viewBox !== fromProps.viewBox) {
      setAttribute(this.container, 'viewBox', toProps.viewBox);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapComponent.prototype.componentDidMount.call(this);

    this.layerContainer.addLayer(this.leafletElement);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    _MapComponent.prototype.componentDidUpdate.call(this, prevProps);

    if (this.props.attribution !== prevProps.attribution) {
      var map = this.props.leaflet.map;

      if (map != null && map.attributionControl != null) {
        map.attributionControl.removeAttribution(prevProps.attribution);
        map.attributionControl.addAttribution(this.props.attribution);
      }
    }

    this.updateLeafletElement(prevProps, this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    _MapComponent.prototype.componentWillUnmount.call(this);

    this.layerContainer.removeLayer(this.leafletElement);
    this.container = null;
  };

  _proto.render = function render() {
    var children = this.props.children;

    if (children == null || this.container == null) {
      return null;
    }

    return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_5__["createPortal"])(children, this.container);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(SVGOverlay, [{
    key: "layerContainer",
    get: function get() {
      return this.props.leaflet.layerContainer || this.props.leaflet.map;
    }
  }]);

  return SVGOverlay;
}(_MapComponent__WEBPACK_IMPORTED_MODULE_7__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_6__["withLeaflet"])(SVGOverlay));

/***/ }),

/***/ "./node_modules/react-leaflet/es/ScaleControl.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/ScaleControl.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");







var ScaleControl = /*#__PURE__*/function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ScaleControl, _MapControl);

  function ScaleControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ScaleControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"].Scale(props);
  };

  return ScaleControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(ScaleControl));

/***/ }),

/***/ "./node_modules/react-leaflet/es/TileLayer.js":
/*!****************************************************!*\
  !*** ./node_modules/react-leaflet/es/TileLayer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GridLayer */ "./node_modules/react-leaflet/es/GridLayer.js");







var TileLayer = /*#__PURE__*/function (_GridLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TileLayer, _GridLayer);

  function TileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = TileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["TileLayer"](props.url, this.getOptions(props));
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }
  };

  return TileLayer;
}(_GridLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(TileLayer));

/***/ }),

/***/ "./node_modules/react-leaflet/es/Tooltip.js":
/*!**************************************************!*\
  !*** ./node_modules/react-leaflet/es/Tooltip.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _DivOverlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DivOverlay */ "./node_modules/react-leaflet/es/DivOverlay.js");









var Tooltip = /*#__PURE__*/function (_DivOverlay) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Tooltip, _DivOverlay);

  function Tooltip() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onTooltipOpen", function (_ref) {
      var tooltip = _ref.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onOpen();
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "onTooltipClose", function (_ref2) {
      var tooltip = _ref2.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onClose();
      }
    });

    return _this;
  }

  var _proto = Tooltip.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_3__["Tooltip"](this.getOptions(props), props.leaflet.popupContainer);
  };

  _proto.componentDidMount = function componentDidMount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.on({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });
    popupContainer.bindTooltip(this.leafletElement);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.off({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });

    if (popupContainer._map != null) {
      popupContainer.unbindTooltip(this.leafletElement);
    }
  };

  return Tooltip;
}(_DivOverlay__WEBPACK_IMPORTED_MODULE_5__["default"]);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Tooltip, "defaultProps", {
  pane: 'tooltipPane'
});

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_4__["withLeaflet"])(Tooltip));

/***/ }),

/***/ "./node_modules/react-leaflet/es/VideoOverlay.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/VideoOverlay.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");







var VideoOverlay = /*#__PURE__*/function (_MapLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(VideoOverlay, _MapLayer);

  function VideoOverlay() {
    return _MapLayer.apply(this, arguments) || this;
  }

  var _proto = VideoOverlay.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["VideoOverlay"](props.url, props.bounds, this.getOptions(props));
  };

  _proto.componentDidMount = function componentDidMount() {
    _MapLayer.prototype.componentDidMount.call(this);

    if (this.props.play === true) {
      this.leafletElement.getElement().play();
    }
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    if (toProps.url !== fromProps.url) {
      this.leafletElement.setUrl(toProps.url);
    }

    if (toProps.bounds !== fromProps.bounds) {
      this.leafletElement.setBounds(Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLngBounds"])(toProps.bounds));
    }

    if (toProps.opacity !== fromProps.opacity) {
      this.leafletElement.setOpacity(toProps.opacity);
    }

    if (toProps.zIndex !== fromProps.zIndex) {
      this.leafletElement.setZIndex(toProps.zIndex);
    } // flowlint-next-line sketchy-null-bool:off


    if (toProps.play === true && !fromProps.play) {
      this.leafletElement.getElement().play(); // flowlint-next-line sketchy-null-bool:off
    } else if (!toProps.play && fromProps.play === true) {
      this.leafletElement.getElement().pause();
    }
  };

  return VideoOverlay;
}(_MapLayer__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(VideoOverlay));

/***/ }),

/***/ "./node_modules/react-leaflet/es/WMSTileLayer.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-leaflet/es/WMSTileLayer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GridLayer */ "./node_modules/react-leaflet/es/GridLayer.js");
/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapEvented */ "./node_modules/react-leaflet/es/MapEvented.js");










var WMSTileLayer = /*#__PURE__*/function (_GridLayer) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(WMSTileLayer, _GridLayer);

  function WMSTileLayer() {
    return _GridLayer.apply(this, arguments) || this;
  }

  var _proto = WMSTileLayer.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    var url = props.url,
        params = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["url"]);

    var _this$getOptions = this.getOptions(params),
        _l = _this$getOptions.leaflet,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getOptions, ["leaflet"]);

    return new leaflet__WEBPACK_IMPORTED_MODULE_2__["TileLayer"].WMS(url, options);
  };

  _proto.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _GridLayer.prototype.updateLeafletElement.call(this, fromProps, toProps);

    var prevUrl = fromProps.url,
        _po = fromProps.opacity,
        _pz = fromProps.zIndex,
        prevProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(fromProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions2 = this.getOptions(prevProps),
        _pl = _this$getOptions2.leaflet,
        prevParams = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getOptions2, ["leaflet"]);

    var url = toProps.url,
        _o = toProps.opacity,
        _z = toProps.zIndex,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(toProps, ["url", "opacity", "zIndex"]);

    var _this$getOptions3 = this.getOptions(props),
        _l = _this$getOptions3.leaflet,
        params = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$getOptions3, ["leaflet"]);

    if (url !== prevUrl) {
      this.leafletElement.setUrl(url);
    }

    if (!fast_deep_equal__WEBPACK_IMPORTED_MODULE_3___default()(params, prevParams)) {
      this.leafletElement.setParams(params);
    }
  };

  _proto.getOptions = function getOptions(params) {
    var superOptions = _GridLayer.prototype.getOptions.call(this, params);

    return Object.keys(superOptions).reduce(function (options, key) {
      if (!_MapEvented__WEBPACK_IMPORTED_MODULE_6__["EVENTS_RE"].test(key)) {
        options[key] = superOptions[key];
      }

      return options;
    }, {});
  };

  return WMSTileLayer;
}(_GridLayer__WEBPACK_IMPORTED_MODULE_5__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_4__["withLeaflet"])(WMSTileLayer));

/***/ }),

/***/ "./node_modules/react-leaflet/es/ZoomControl.js":
/*!******************************************************!*\
  !*** ./node_modules/react-leaflet/es/ZoomControl.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");







var ZoomControl = /*#__PURE__*/function (_MapControl) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ZoomControl, _MapControl);

  function ZoomControl() {
    return _MapControl.apply(this, arguments) || this;
  }

  var _proto = ZoomControl.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new leaflet__WEBPACK_IMPORTED_MODULE_1__["Control"].Zoom(props);
  };

  return ZoomControl;
}(_MapControl__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_context__WEBPACK_IMPORTED_MODULE_2__["withLeaflet"])(ZoomControl));

/***/ }),

/***/ "./node_modules/react-leaflet/es/context.js":
/*!**************************************************!*\
  !*** ./node_modules/react-leaflet/es/context.js ***!
  \**************************************************/
/*! exports provided: useLeaflet, LeafletConsumer, LeafletProvider, withLeaflet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLeaflet", function() { return useLeaflet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletConsumer", function() { return LeafletConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletProvider", function() { return LeafletProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withLeaflet", function() { return withLeaflet; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





var leafletContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["createContext"])({});
var useLeaflet = function useLeaflet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(leafletContext);
};
var LeafletConsumer = leafletContext.Consumer;
var LeafletProvider = leafletContext.Provider;
var withLeaflet = function withLeaflet(WrappedComponent) {
  var WithLeafletComponent = function WithLeafletComponent(props, ref) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LeafletConsumer, null, function (leaflet) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(WrappedComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        leaflet: leaflet,
        ref: ref
      }));
    });
  };

  var name = // flowlint-next-line sketchy-null-string:off
  WrappedComponent.displayName || WrappedComponent.name || 'Component';
  WithLeafletComponent.displayName = "Leaflet(" + name + ")";
  var LeafletComponent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(WithLeafletComponent);
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(LeafletComponent, WrappedComponent);
  return LeafletComponent;
};

/***/ }),

/***/ "./node_modules/react-leaflet/es/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-leaflet/es/index.js ***!
  \************************************************/
/*! exports provided: LeafletConsumer, LeafletProvider, withLeaflet, useLeaflet, AttributionControl, Circle, CircleMarker, DivOverlay, FeatureGroup, GeoJSON, GridLayer, ImageOverlay, LayerGroup, LayersControl, ControlledLayer, Map, MapComponent, MapControl, MapEvented, MapLayer, Marker, Pane, Path, Polygon, Polyline, Popup, Rectangle, ScaleControl, SVGOverlay, TileLayer, Tooltip, VideoOverlay, WMSTileLayer, ZoomControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "./node_modules/react-leaflet/es/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletConsumer", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["LeafletConsumer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeafletProvider", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["LeafletProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withLeaflet", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["withLeaflet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useLeaflet", function() { return _context__WEBPACK_IMPORTED_MODULE_0__["useLeaflet"]; });

/* harmony import */ var _AttributionControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AttributionControl */ "./node_modules/react-leaflet/es/AttributionControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributionControl", function() { return _AttributionControl__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "./node_modules/react-leaflet/es/Circle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return _Circle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _CircleMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CircleMarker */ "./node_modules/react-leaflet/es/CircleMarker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleMarker", function() { return _CircleMarker__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _DivOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DivOverlay */ "./node_modules/react-leaflet/es/DivOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DivOverlay", function() { return _DivOverlay__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _FeatureGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FeatureGroup */ "./node_modules/react-leaflet/es/FeatureGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FeatureGroup", function() { return _FeatureGroup__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _GeoJSON__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GeoJSON */ "./node_modules/react-leaflet/es/GeoJSON.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeoJSON", function() { return _GeoJSON__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _GridLayer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./GridLayer */ "./node_modules/react-leaflet/es/GridLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridLayer", function() { return _GridLayer__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ImageOverlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ImageOverlay */ "./node_modules/react-leaflet/es/ImageOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageOverlay", function() { return _ImageOverlay__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _LayerGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./LayerGroup */ "./node_modules/react-leaflet/es/LayerGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayerGroup", function() { return _LayerGroup__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _LayersControl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./LayersControl */ "./node_modules/react-leaflet/es/LayersControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayersControl", function() { return _LayersControl__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlledLayer", function() { return _LayersControl__WEBPACK_IMPORTED_MODULE_10__["ControlledLayer"]; });

/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Map */ "./node_modules/react-leaflet/es/Map.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Map", function() { return _Map__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _MapComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./MapComponent */ "./node_modules/react-leaflet/es/MapComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return _MapComponent__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _MapControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MapControl */ "./node_modules/react-leaflet/es/MapControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapControl", function() { return _MapControl__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _MapEvented__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MapEvented */ "./node_modules/react-leaflet/es/MapEvented.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapEvented", function() { return _MapEvented__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _MapLayer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./MapLayer */ "./node_modules/react-leaflet/es/MapLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapLayer", function() { return _MapLayer__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _Marker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Marker */ "./node_modules/react-leaflet/es/Marker.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return _Marker__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _Pane__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Pane */ "./node_modules/react-leaflet/es/Pane.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pane", function() { return _Pane__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _Path__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Path */ "./node_modules/react-leaflet/es/Path.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _Path__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Polygon */ "./node_modules/react-leaflet/es/Polygon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return _Polygon__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _Polyline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Polyline */ "./node_modules/react-leaflet/es/Polyline.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return _Polyline__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Popup */ "./node_modules/react-leaflet/es/Popup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return _Popup__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Rectangle */ "./node_modules/react-leaflet/es/Rectangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return _Rectangle__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _ScaleControl__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./ScaleControl */ "./node_modules/react-leaflet/es/ScaleControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScaleControl", function() { return _ScaleControl__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _SVGOverlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./SVGOverlay */ "./node_modules/react-leaflet/es/SVGOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGOverlay", function() { return _SVGOverlay__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _TileLayer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./TileLayer */ "./node_modules/react-leaflet/es/TileLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TileLayer", function() { return _TileLayer__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/react-leaflet/es/Tooltip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _VideoOverlay__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./VideoOverlay */ "./node_modules/react-leaflet/es/VideoOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VideoOverlay", function() { return _VideoOverlay__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _WMSTileLayer__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./WMSTileLayer */ "./node_modules/react-leaflet/es/WMSTileLayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WMSTileLayer", function() { return _WMSTileLayer__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _ZoomControl__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./ZoomControl */ "./node_modules/react-leaflet/es/ZoomControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZoomControl", function() { return _ZoomControl__WEBPACK_IMPORTED_MODULE_29__["default"]; });


































/***/ }),

/***/ "./node_modules/react-leaflet/es/utils/omit.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/utils/omit.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return omit; });


function omit(obj) {
  for (var _len = arguments.length, keysToOmit = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keysToOmit[_key - 1] = arguments[_key];
  }

  return Object.keys(obj).reduce(function (acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/react-leaflet/es/utils/pick.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-leaflet/es/utils/pick.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pick; });


function pick(object, keys) {
  return keys.reduce(function (obj, key) {
    if (typeof object[key] !== 'undefined') {
      obj[key] = object[key];
    }

    return obj;
  }, {});
}

/***/ }),

/***/ "./node_modules/react-leaflet/es/utils/updateClassName.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-leaflet/es/utils/updateClassName.js ***!
  \****************************************************************/
/*! exports provided: addClassName, removeClassName, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClassName", function() { return addClassName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClassName", function() { return removeClassName; });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);




var splitClassName = function splitClassName(className) {
  if (className === void 0) {
    className = '';
  }

  return className.split(' ').filter(Boolean);
};

var addClassName = function addClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].addClass(container, cls);
  });
};
var removeClassName = function removeClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    leaflet__WEBPACK_IMPORTED_MODULE_0__["DomUtil"].removeClass(container, cls);
  });
};
/* harmony default export */ __webpack_exports__["default"] = (function (container, prevClassName, nextClassName) {
  if (container != null && nextClassName !== prevClassName) {
    if (prevClassName != null && prevClassName.length > 0) {
      removeClassName(container, prevClassName);
    }

    if (nextClassName != null && nextClassName.length > 0) {
      addClassName(container, nextClassName);
    }
  }
});

/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ "./node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/slugify/slugify.js":
/*!*****************************************!*\
  !*** ./node_modules/slugify/slugify.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


;(function (name, root, factory) {
  if (true) {
    module.exports = factory()
    module.exports['default'] = factory()
  }
  /* istanbul ignore next */
  else {}
}('slugify', this, function () {
  var charMap = JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\\"","”":"\\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}')
  var locales = JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue"},"vi":{"Đ":"D","đ":"d"}}')

  function replace (string, options) {
    if (typeof string !== 'string') {
      throw new Error('slugify: string argument expected')
    }

    options = (typeof options === 'string')
      ? {replacement: options}
      : options || {}

    var locale = locales[options.locale] || {}

    var replacement = options.replacement === undefined ? '-' : options.replacement

    var slug = string.split('')
      // replace characters based on charMap
      .reduce(function (result, ch) {
        return result + (locale[ch] || charMap[ch] || ch)
          // remove not allowed characters
          .replace(options.remove || /[^\w\s$*_+~.()'"!\-:@]+/g, '')
      }, '')
      // trim leading/trailing spaces
      .trim()
      // convert spaces to replacement character
      // also remove duplicates of the replacement character
      .replace(new RegExp('[\\s' + replacement + ']+', 'g'), replacement)

    if (options.lower) {
      slug = slug.toLowerCase()
    }

    if (options.strict) {
      // remove anything besides letters, numbers, and the replacement char
      slug = slug
        .replace(new RegExp('[^a-zA-Z0-9' + replacement + ']', 'g'), '')
        // remove duplicates of the replacement character
        .replace(new RegExp('[\\s' + replacement + ']+', 'g'), replacement)
    }

    return slug
  }

  replace.extend = function (customMap) {
    for (var key in customMap) {
      charMap[key] = customMap[key]
    }
  }

  return replace
}))


/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./public/page-data/sq/d/173006830.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/173006830.json ***!
  \**********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"site\":{\"siteMetadata\":{\"title\":\"Jordan Gass-Poore' Portfolio Site\",\"description\":\"A journalist's portfolio site\",\"url\":\"http://localhost:8000\",\"name\":\"Jordan Gass-Poore'\",\"twitter\":\"@jgasspoore\",\"image\":\"static/defaultOfJordan.jpg\",\"htmlDescription\":\"An HTML description\",\"givenName\":\"Jordan\",\"fbAppID\":\"\",\"familyName\":\"Gass-Poore'\",\"alternateName\":\"JGP\",\"dateModified\":\"2022-11-28T03:29:00.283Z\"}}}}");

/***/ }),

/***/ "./src/assets/stylesheets/components/_LocationClipSet.scss":
/*!*****************************************************************!*\
  !*** ./src/assets/stylesheets/components/_LocationClipSet.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/assets/stylesheets/pages/_map.scss":
/*!************************************************!*\
  !*** ./src/assets/stylesheets/pages/_map.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/BreadCrumb.js":
/*!**************************************!*\
  !*** ./src/components/BreadCrumb.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./src/hooks/use-site-metadata.js");
/* harmony default export */ __webpack_exports__["default"] = (({style,precursors=[],children})=>{const{title}=Object(_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_3__["useSiteMetadata"])();const precursorLinks=[];precursors.forEach(step=>{const{link,text}=step;precursorLinks.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:link,key:`breadcrumb-${link}`,className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.minimalLink},text));});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.siteBreadCrumb,style:style},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:"/",key:"homepage",className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.minimalLink},title),precursorLinks,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.breadCrumbEnd},children)));});

/***/ }),

/***/ "./src/components/ContainerCard.js":
/*!*****************************************!*\
  !*** ./src/components/ContainerCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/topicsInFocus.module.css */ "./src/styles/topicsInFocus.module.css");
/* harmony import */ var _styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony default export */ __webpack_exports__["default"] = (({boxTitle,boxSubTitle,children,className})=>{const cardStyleSet=[_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tifCard];cardStyleSet.push(className);const cardStyle=cardStyleSet.join(" ");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:cardStyle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,boxTitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.tifCardInner},children));});

/***/ }),

/***/ "./src/components/Factbox.js":
/*!***********************************!*\
  !*** ./src/components/Factbox.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1__);
// import styles from "../styles/glitchFrenchWave.module.css"
/* harmony default export */ __webpack_exports__["default"] = (({boxTitle,children})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.factBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,boxTitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.factBoxInner},children)));

/***/ }),

/***/ "./src/components/HumanReadableDate.js":
/*!*********************************************!*\
  !*** ./src/components/HumanReadableDate.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
Date.prototype.addHours=function(h){this.setTime(this.getTime()+h*60*60*1000);return this;};/* harmony default export */ __webpack_exports__["default"] = (({date})=>{var dateObj=new Date(date);console.log(date,dateObj);// Adjust pure date input for GMT offset of Texas
dateObj.addHours(5);var dateOptions={weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"America/New_York"};var humanReadableDate=dateObj.toLocaleDateString("en-US",dateOptions);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("time",{dateTime:date},humanReadableDate);});

/***/ }),

/***/ "./src/components/Leaflet/MapFrame.js":
/*!********************************************!*\
  !*** ./src/components/Leaflet/MapFrame.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
/* harmony import */ var _utils_domHandlers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/domHandlers */ "./src/utils/domHandlers.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_7__);
const{Map:LeafletMap,TileLayer,ZoomControl}=react_leaflet__WEBPACK_IMPORTED_MODULE_3__;/**
 * https://github.com/colbyfayock/gatsby-starter-leaflet/blob/master/src/components/Map.js
 * https://www.freecodecamp.org/news/how-to-create-a-summer-road-trip-mapping-app-with-gatsby-and-leaflet/#id="step-1-cleaning-up-some-unneeded-code"
 *
 */const MapFrame=props=>{const{children,className="",defaultBaseMap=DEFAULT_MAP_SERVICE,position,zoom,center,handlePopupOpen,handlePopupClose,...rest}=props;const DEFAULT_MAP_SERVICE="OpenStreetMap";leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon=leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon?leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon:{};leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default=leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default?leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default:leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default={};leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default.imagePath="../node_modules/leaflet";if(leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default.prototype){delete leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default.prototype._getIconUrl;}leaflet__WEBPACK_IMPORTED_MODULE_6___default.a.Icon.Default.mergeOptions({iconRetinaUrl:__webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),iconUrl:__webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),shadowUrl:__webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")});const services=Object(_hooks__WEBPACK_IMPORTED_MODULE_4__["useMapServices"])({names:Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new Set([defaultBaseMap,DEFAULT_MAP_SERVICE]))});const basemap=services.find(service=>service.name===defaultBaseMap);console.log("basemap config",basemap);let mapClassName=`map mapframe`;if(className){mapClassName=`${mapClassName} ${className}`;}if(!Object(_utils_domHandlers__WEBPACK_IMPORTED_MODULE_5__["isDomAvailable"])()){console.log("Window not ready");return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:mapClassName},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",{className:"map-loading"},"Loading map..."));}const mapSettings={className:"map-base",zoomControl:false,...rest};console.log("map settings",mapSettings);console.log("map children",children);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:mapClassName},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeafletMap,{position:position,center:center,zoom:zoom,id:"mapframe-leaflet-map-component",style:{height:"400px"},onPopupClose:handlePopupClose,onPopupOpen:handlePopupOpen},children,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TileLayer,{attribution:"\xA9 <a href=\"http://osm.org/copyright\">OpenStreetMap</a> contributors",url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"})));};MapFrame.propTypes={children:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,className:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,defaultBaseMap:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,mapEffect:prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func};/* harmony default export */ __webpack_exports__["default"] = (MapFrame);

/***/ }),

/***/ "./src/components/Leaflet/Marker.js":
/*!******************************************!*\
  !*** ./src/components/Leaflet/Marker.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/es/index.js");
const{Map:LeafletMap,Marker,Popup}=react_leaflet__WEBPACK_IMPORTED_MODULE_2__;/* harmony default export */ __webpack_exports__["default"] = (({position,targetSlug,locationName,style,children})=>{const clickFunction=e=>{console.log(undefined,arguments,e);};// onOpen={clickFunction.bind({ id: "test" })}
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Marker,{position:position,alt:locationName},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Popup,{alt:targetSlug,"data-target":targetSlug},children));});

/***/ }),

/***/ "./src/components/LocationClipSet.js":
/*!*******************************************!*\
  !*** ./src/components/LocationClipSet.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_stylesheets_components_LocationClipSet_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/stylesheets/components/_LocationClipSet.scss */ "./src/assets/stylesheets/components/_LocationClipSet.scss");
/* harmony import */ var _assets_stylesheets_components_LocationClipSet_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_components_LocationClipSet_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony default export */ __webpack_exports__["default"] = (({id,className,locationName,clips,title,activeState,children})=>{const defaultClassName="location-clip-set";let setClassName=`${defaultClassName}`;if(className){setClassName+=` ${className}`;}let clipList=[];let boxTitle=`Clips from ${locationName}`;if(title){boxTitle=title;}if(clips&&clips.length>0){clipList=clips.map(clip=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:clip.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:"/"+"clip/"+clip.slug,key:clip.id},clip.title));});}if(activeState===id){setClassName+=" shown";}else{setClassName+=" hidden";}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:id,className:setClassName,"data-is-active":activeState},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3",null,boxTitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"location-clip-set-comments"},children),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"location-clip-set-inner"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,clipList)));});

/***/ }),

/***/ "./src/components/Meta/OpenGraph.js":
/*!******************************************!*\
  !*** ./src/components/Meta/OpenGraph.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
const OpenGraph=props=>{const{url,title,description,image,fbAppId,isType,siteName,typeMeta,keywords}=props;let typeContent="";let typeTags=null;switch(isType){case"website":typeContent="website";break;case"article":case"blog":case"NewsArticle":typeContent="article";typeTags=Object.keys(typeMeta).map(key=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"article:"+key,key:key,content:typeMeta[key]}));keywords.forEach(tag=>{typeTags.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"article:tag",key:"article-tag-"+tag,content:tag}));});break;case"profile":typeContent="profile";typeTags=Object.keys(typeMeta).map(key=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"profile:"+key,key:key,content:typeMeta[key]}));break;case"place":typeContent="place";break;case"book":typeContent="book";typeTags=Object.keys(typeMeta).map(key=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"book:"+key,key:key,content:typeMeta[key]}));keywords.forEach(tag=>{typeTags.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"book:tag",key:"book-tag-"+tag,content:tag}));});break;case"books.author":typeContent="books.author";break;case"books.quotes":typeContent="books.quotes";break;case"song":typeContent="music.song";typeTags=Object.keys(typeMeta).map(key=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"music.song:"+key,key:key,content:typeMeta[key]}));break;case"album":typeContent="music.album";typeTags=Object.keys(typeMeta).map(key=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"music.album:"+key,key:key,content:typeMeta[key]}));break;case"playlist":typeContent="music.playlist";break;case"radio_station":typeContent="music.radio_station";break;case"movie":typeContent="video.movie";typeTags=Object.keys(typeMeta).map(key=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"video.movie:"+key,key:key,content:typeMeta[key]}));break;default:typeContent="website";break;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{defer:false},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:url",content:url}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:type",content:typeContent}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:description",content:description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:image",content:image}),fbAppId?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"fb:app_id",content:fbAppId}):null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:locale",content:"en_US"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"og:site_name",content:siteName}),typeTags));};/* harmony default export */ __webpack_exports__["default"] = (OpenGraph);

/***/ }),

/***/ "./src/components/Meta/SchemaOrg.js":
/*!******************************************!*\
  !*** ./src/components/Meta/SchemaOrg.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
const SchemaOrg=({isType,url,title,author,image,siteImage,description,datePublished,siteUrl,siteDescription,typeMeta,alternateName,givenName,familyName,keywords})=>{const defaultJSONLD={"@context":"http://schema.org","@type":"WebSite",url:siteUrl,name:title,alternateName:alternateName};let typeContent={};typeContent.url=url;typeContent["author"]={"@type":"Person",name:author,description:siteDescription,sameAs:siteUrl,image:{"@type":"ImageObject",url:siteImage},givenName:givenName,familyName:familyName,alternateName:alternateName,publishingPrinciples:siteUrl+"/about/"};typeContent["publisher"]=typeContent["author"];typeContent["mainEntityOfPage"]={"@type":"WebPage","@id":url};if(typeMeta.isBasedOn){typeContent.isBasedOn=typeMeta.isBasedOn;}typeContent["@context"]="http://schema.org";if(image){typeContent["image"]=[image];}let typeTags=null;switch(isType){case"website":typeContent=defaultJSONLD;break;case"blog":typeContent["@type"]="BlogPosting";typeContent.articleSection=typeMeta.section;typeContent.headline=title;typeContent["publisher"]={"@type":"Organization",name:typeMeta.publisher_name,description:"A news site.",sameAs:typeMeta.publisher,logo:""};typeContent.keywords=keywords.join(",");break;// eslint-disable-next-line no-fallthrough
case"article":typeContent["@type"]="Article";typeContent.articleSection=typeMeta.section;typeContent.headline=title;typeContent["publisher"]={"@type":"Organization",name:typeMeta.publisher_name,description:"A news site.",sameAs:typeMeta.publisher};typeContent.keywords=keywords.join(",");break;// eslint-disable-next-line no-fallthrough
case"NewsArticle":typeContent["@type"]="NewsArticle";typeContent.articleSection=typeMeta.section;typeContent.headline=title;typeContent["publisher"]={"@type":"Organization",name:typeMeta.publisher_name,description:"A news site.",sameAs:typeMeta.publisher};typeContent.keywords=keywords.join(",");break;case"profile":// typeContent = "profile"
typeContent["@type"]="Profile";break;case"place":// typeContent = "place"
break;case"book":// typeContent = "book"
typeTags=typeMeta.map(meta=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"book:"+meta.key,key:meta.key,content:meta.value}));keywords.forEach(tag=>{typeTags.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"book:tag",key:"book-tag-"+tag,content:tag}));});break;case"books.author":// typeContent = "books.author"
break;case"books.quotes":// typeContent = "books.quotes"
break;case"song":// typeContent = "music.song"
typeTags=typeMeta.map(meta=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"music.song:"+meta.key,key:meta.key,content:meta.value}));break;case"album":// typeContent = "music.album"
typeTags=typeMeta.map(meta=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"music.album:"+meta.key,key:meta.key,content:meta.value}));break;case"playlist":// typeContent = "music.playlist"
break;case"radio_station":// typeContent = "music.radio_station"
break;case"movie":// typeContent = "video.movie"
typeTags=typeMeta.map(meta=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{property:"video.movie:"+meta.key,key:meta.key,content:meta.value}));break;default:typeContent=defaultJSONLD;break;}typeContent.dateModified=new Date().toISOString();typeContent.datePublished=new Date().toISOString();typeContent.isAccessibleForFree="True";typeContent["isPartOf"]={"@type":["CreativeWork","Product","Blog"],name:title,productID:siteUrl};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{defer:false},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script",{type:"application/ld+json"},JSON.stringify(typeContent))));};/* harmony default export */ __webpack_exports__["default"] = (SchemaOrg);

/***/ }),

/***/ "./src/components/Meta/Twitter.js":
/*!****************************************!*\
  !*** ./src/components/Meta/Twitter.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
const Twitter=props=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{defer:false},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:creator",content:props.twitter}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:title",content:props.title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:description",content:props.description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"twitter:image",content:props.image})));};/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ }),

/***/ "./src/components/NodesList.js":
/*!*************************************!*\
  !*** ./src/components/NodesList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/strongSlantAllNodes.module.css */ "./src/styles/strongSlantAllNodes.module.css");
/* harmony import */ var _styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PreviewImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PreviewImage */ "./src/components/PreviewImage.js");
/* harmony import */ var _components_SortDown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/SortDown */ "./src/components/SortDown.js");
/* harmony import */ var _components_HumanReadableDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HumanReadableDate */ "./src/components/HumanReadableDate.js");
const NodesList=props=>{const emptyQuery="";const emptyTopicQuery="";const emptyFormatQuery="";const{0:state,1:setState}=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({filteredData:[],query:emptyQuery,topicQuery:emptyTopicQuery,formatQuery:emptyFormatQuery});let{edgeList,style,className,baseOfLink,baseOfObject}=props;// TODO: Add sort by publication
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:style,className:className},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nodeSortContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input",{type:"text","aria-label":"Search",placeholder:"Type to filter posts...",onChange:e=>props.handleInputChange(e),className:_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formInput}),props.sorters),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nodeSetContainer},edgeList.map(node=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:node.node.id,className:_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.nodeSingle},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a,{to:"/"+baseOfLink+node.node[baseOfObject].slug,key:node.node.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PreviewImage__WEBPACK_IMPORTED_MODULE_4__["default"],{aNode:node.node,className:_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.listImage}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"underline"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,node.node[baseOfObject].title),props.extraFields.map(({key,pretext})=>{if(node.node[baseOfObject][key]){let content=node.node[baseOfObject][key];if(key==="date"){content=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HumanReadableDate__WEBPACK_IMPORTED_MODULE_6__["default"],{date:content});}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6",{key:key+"_"+node.node.id},pretext,content);}})))))));};/* harmony default export */ __webpack_exports__["default"] = (NodesList);

/***/ }),

/***/ "./src/components/PreviewImage.js":
/*!****************************************!*\
  !*** ./src/components/PreviewImage.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_fwAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/fwAllNodes.module.css */ "./src/styles/fwAllNodes.module.css");
/* harmony import */ var _styles_fwAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_fwAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_5__);
const PreviewImage=props=>{var imageObject=props.aNode.fields.imgObj;var previewImage,isFluid,origImage;if(imageObject){if(imageObject.childImageSharp&&imageObject.childImageSharp.fluid){previewImage=imageObject.childImageSharp.fluid;isFluid=true;}else if(imageObject.publicURL){previewImage=imageObject.publicURL;}}if(imageObject&&imageObject.publicURL){origImage=imageObject.publicURL;}var previewEl=null;if(previewImage&&isFluid){const previewImageObj=Object.assign({media:`(max-width: 300px)`},imageObject.childImageSharp.fluid);const sources=[previewImageObj];previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_4___default.a,{fluid:sources,alt:"",className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bbImageWrapper});}else if(previewImage){previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:previewImage,alt:"",className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.bbImageWrapper});}else{previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.noImg});}if(!origImage||typeof origImage!=="string"||path__WEBPACK_IMPORTED_MODULE_5___default.a.basename(origImage)=="Transparent-l.png"){previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.noImg});}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-orig-image":origImage,className:props.className,id:props.id,style:props.style},previewEl);};/* harmony default export */ __webpack_exports__["default"] = (PreviewImage);

/***/ }),

/***/ "./src/components/SEO.js":
/*!*******************************!*\
  !*** ./src/components/SEO.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Meta_SchemaOrg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Meta/SchemaOrg */ "./src/components/Meta/SchemaOrg.js");
/* harmony import */ var _Meta_Twitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Meta/Twitter */ "./src/components/Meta/Twitter.js");
/* harmony import */ var _Meta_OpenGraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Meta/OpenGraph */ "./src/components/Meta/OpenGraph.js");
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./src/hooks/use-site-metadata.js");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_8__);
const SEO=({postMeta,isType,typeMeta,postPath,postDefaults})=>{const{title,description,image,name,givenName,familyName,alternateName,url,twitter,fbAppID,keywords,dateModified}=Object(_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_7__["useSiteMetadata"])();let defaultDescription=false;if(postDefaults.description){defaultDescription=`${postDefaults.description} ${name}`;}const pageTitle=postMeta.title||title;const pageDescription=postMeta.description||postMeta.excerpt||postMeta.content||defaultDescription||description;const postImage=postMeta.image||image;const pageUrl=postPath?`${url}${path__WEBPACK_IMPORTED_MODULE_0___default.a.sep}${postPath}`:url;const datePublished=isType==="article"?postMeta.datePublished:false;typeMeta.published_time=datePublished;typeMeta.section=postMeta.section||postMeta.topic||postMeta.type;typeMeta.author=name;let completeKeywords=[];if(postMeta.keywords&&Array.isArray(postMeta.keywords)){completeKeywords=postMeta.keywords;}else if(postMeta.keywords){completeKeywords.push(postMeta.keywords);}if(typeMeta.section&&!completeKeywords.includes(typeMeta.section)){completeKeywords.push(typeMeta.section);}const keywordsString=completeKeywords.join(",");const siteImage=image;// https://css-tricks.com/its-all-in-the-head-managing-the-document-head-of-a-react-powered-site-with-react-helmet/
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a,{defer:false},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.fnw}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title",null,pageTitle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"title",content:pageTitle}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"description",content:pageDescription}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"image",content:postImage}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"author",content:name}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"keywords",content:keywordsString}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.fnw})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Meta_Twitter__WEBPACK_IMPORTED_MODULE_5__["default"],{twitter:twitter,title:pageTitle,description:pageDescription,image:postImage}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Meta_OpenGraph__WEBPACK_IMPORTED_MODULE_6__["default"],{url:pageUrl,title:pageTitle,description:pageDescription,image:postImage,fbAppId:fbAppID,isType:isType,siteName:title,typeMeta:typeMeta,author:name,keywords:completeKeywords}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Meta_SchemaOrg__WEBPACK_IMPORTED_MODULE_4__["default"],{url:pageUrl,siteUrl:url,siteDescription:description,siteImage:siteImage,title:pageTitle,description:pageDescription,image:postImage,fbAppId:fbAppID,isType:isType,siteName:title,typeMeta:typeMeta,author:name,dateModified:dateModified,datePublished:postMeta.date,keywords:completeKeywords,givenName:givenName,familyName:familyName,alternateName:alternateName}));};SEO.propTypes={postMeta:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,typeMeta:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,isType:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,postPath:prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string};SEO.defaultProps={isType:"article",postImage:null};/* harmony default export */ __webpack_exports__["default"] = (SEO);

/***/ }),

/***/ "./src/components/SiteContainer.js":
/*!*****************************************!*\
  !*** ./src/components/SiteContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony default export */ __webpack_exports__["default"] = (({id,children})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:id?"main-site-container site-container__"+id:"main-site-container",style:{height:"100%",width:"100%",display:"block"// maxWidth: "80vw",
// padding: `0 1rem`,
}},children));

/***/ }),

/***/ "./src/components/SortDown.js":
/*!************************************!*\
  !*** ./src/components/SortDown.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_fwAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/fwAllNodes.module.css */ "./src/styles/fwAllNodes.module.css");
/* harmony import */ var _styles_fwAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_fwAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1__);
const SortDown=props=>{let pdStart=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:""},"All");let baseOfObject=props.baseOfObject;let edgeParam=props.edgeParamter;// TODO: Alphabatize this
let topicPullDownLimited=props.edgeList.reduce((accumulator,currentValue)=>{if(!accumulator.includes(currentValue.node[baseOfObject][edgeParam])){accumulator.push(currentValue.node[baseOfObject][edgeParam]);}return accumulator;},[]);topicPullDownLimited.sort();let pullDownList=topicPullDownLimited.map(currentValue=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option",{value:currentValue.toLowerCase(),key:currentValue.toLowerCase()},currentValue);});const nameOfSort=edgeParam;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_fwAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.formDropdown},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label",{className:_styles_fwAllNodes_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.capitalize,htmlFor:`${edgeParam}s`},nameOfSort,": "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select",{id:`${edgeParam}s`,onChange:e=>props.handleChange(e)},pdStart,pullDownList));};/* harmony default export */ __webpack_exports__["default"] = (SortDown);

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SiteContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteContainer */ "./src/components/SiteContainer.js");
/* harmony default export */ __webpack_exports__["default"] = (({children})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteContainer__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"inner-container",style:{// margin: `3rem auto`,
// width: "100%",
// maxWidth: "80vw",
// padding: `0 1rem`,
}},children)));

/***/ }),

/***/ "./src/data/map-services.js":
/*!**********************************!*\
  !*** ./src/data/map-services.js ***!
  \**********************************/
/*! exports provided: mapServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapServices", function() { return mapServices; });
const mapServices=[{name:"OpenStreetMap",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.osm.org/{z}/{x}/{y}.png"}];

/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/*! exports provided: useMapServices, useRefEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useMapServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMapServices */ "./src/hooks/useMapServices.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMapServices", function() { return _useMapServices__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useRefEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useRefEffect */ "./src/hooks/useRefEffect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useRefEffect", function() { return _useRefEffect__WEBPACK_IMPORTED_MODULE_1__["default"]; });



/***/ }),

/***/ "./src/hooks/use-site-metadata.js":
/*!****************************************!*\
  !*** ./src/hooks/use-site-metadata.js ***!
  \****************************************/
/*! exports provided: useSiteMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSiteMetadata", function() { return useSiteMetadata; });
/* harmony import */ var _public_page_data_sq_d_173006830_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/173006830.json */ "./public/page-data/sq/d/173006830.json");
var _public_page_data_sq_d_173006830_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/page-data/sq/d/173006830.json */ "./public/page-data/sq/d/173006830.json", 1);
const useSiteMetadata=()=>{const{site}=_public_page_data_sq_d_173006830_json__WEBPACK_IMPORTED_MODULE_0__.data;return site.siteMetadata;};

/***/ }),

/***/ "./src/hooks/useMapServices.js":
/*!*************************************!*\
  !*** ./src/hooks/useMapServices.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _models_map_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/map-service */ "./src/models/map-service.js");
/* harmony import */ var _data_map_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/map-services */ "./src/data/map-services.js");
const useMapServices=({names=[],userServices=[]}={})=>{const services=names.map(name=>{const setMapServices=_data_map_services__WEBPACK_IMPORTED_MODULE_2__["mapServices"]||[];let services=[];if(userServices.length){services=[].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(setMapServices),Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(userServices));}else{services=setMapServices;}return services.find(service=>service.name===name);});console.log("services",services);return services.map(service=>new _models_map_service__WEBPACK_IMPORTED_MODULE_1__["default"](service));};/* harmony default export */ __webpack_exports__["default"] = (useMapServices);

/***/ }),

/***/ "./src/hooks/useRefEffect.js":
/*!***********************************!*\
  !*** ./src/hooks/useRefEffect.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const useRefEffect=({effect,ref={}})=>{Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(()=>{effect(ref.current);},[effect,ref]);};/* harmony default export */ __webpack_exports__["default"] = (useRefEffect);

/***/ }),

/***/ "./src/models/map-service.js":
/*!***********************************!*\
  !*** ./src/models/map-service.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class MapService{constructor(service={}){this._service={...service};this.name=this._service.name;this.attribution=this._service.attribution;this.url=this._service.url;}}/* harmony default export */ __webpack_exports__["default"] = (MapService);

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BreadCrumb */ "./src/components/BreadCrumb.js");
/* harmony default export */ __webpack_exports__["default"] = (data=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_5__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fnw})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.basicContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__["default"],{style:{display:"block",float:"left",position:"absolute",top:"calc(3rem - 34px)",paddingLeft:"20px"}},"Contact Me"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Contact Me"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Email me at ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"jordan"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null," (at) "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"j"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"gasspoore"),".com")));});

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_queryParsing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/queryParsing */ "./src/utils/queryParsing.js");
/* harmony import */ var _components_Factbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Factbox */ "./src/components/Factbox.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var _components_SiteContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/SiteContainer */ "./src/components/SiteContainer.js");
// import styles from "../styles/glitchFrenchWave.module.css"
/* harmony default export */ __webpack_exports__["default"] = (data=>{// console.log("Data: ", data.data)
console.log("FNW",_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a);console.log("hpachiev",data.data.allAchievement.edges);var styleSet=[_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.fullBox].join(" ");// {data.data.allFile.totalCount}
var breakName={__html:_utils_queryParsing__WEBPACK_IMPORTED_MODULE_2__["default"].resolveSiteMetadataEdge("bigName",data.data)};var informerText={__html:_utils_queryParsing__WEBPACK_IMPORTED_MODULE_2__["default"].resolveSiteMetadataEdge("intro",data.data)};var lastBuildTime=new Date(_utils_queryParsing__WEBPACK_IMPORTED_MODULE_2__["default"].resolveSiteMetadataEdge("dateModified",data.data)).toDateString();var title=_utils_queryParsing__WEBPACK_IMPORTED_MODULE_2__["default"].resolveSiteMetadataEdge("title",data.data);var styleBlockOne={//marginTop: "-6vw",
zIndex:"50",position:"relative",margin:"-62px 0 0 15px",width:"calc(100% - 5% - 15px)"};var styleBlockTwo={color:"black",// fontSize: "140px",
fontWeight:"500",fontSize:"24px",zIndex:"55",fontVariant:"all-small-caps",backgroundColor:"var(--f-overlay)",width:"fit-content",padding:"3px",marginBottom:"0"};styleBlockOne={};styleBlockTwo={};var highlightStyle=`.highlight {
		background-color: var(--light-yellow);
		padding: 0.25em;
	}`;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SiteContainer__WEBPACK_IMPORTED_MODULE_8__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style",null,highlightStyle),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homepage},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_7__["default"],{postMeta:{title,slug:"/"},postDefaults:{description:"Jordan Gass-Pooré is a New York City-based podcast producer and investigative journalist with more than a decade of journalism experience."},postPath:"topics-in-focus/",isType:"website",typeMeta:{publisher_name:"Jordan Gass-Poore'"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:styleSet},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.siteBreadCrumb},_utils_queryParsing__WEBPACK_IMPORTED_MODULE_2__["default"].resolveSiteMetadataEdge("title",data.data),":"," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.highlight},"Home Page")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.homepageTitle,dangerouslySetInnerHTML:breakName})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{style:styleBlockOne},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{style:styleBlockTwo},"Pages:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.fnwMenuBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,data.data.allFile.nodes.map(node=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a,{to:node.fields.slug,style:{textDecoration:"none"},key:node.childMarkdownRemark.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:node.childMarkdownRemark.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"none"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,node.childMarkdownRemark.frontmatter.title))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a,{to:"resume",style:{textDecoration:"none"},key:"resume"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:"resume-li"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"none"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,"Resume")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a,{to:"map",style:{textDecoration:"none"},key:"map"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:"map-li"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"none"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,"Locations Covered")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a,{to:"contact",style:{textDecoration:"none"},key:"contact"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:"contact-li"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"none"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,"Contact Me"))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.informer,dangerouslySetInnerHTML:informerText}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.meta},"Last Updated: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.buildtime},lastBuildTime)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.lowerFwBoxContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.lowerFwBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.factBoxContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Factbox__WEBPACK_IMPORTED_MODULE_3__["default"],{boxTitle:"Location"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6",null,"I'm working in:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.highlight},"New York City"),", New Jersey, Washington, DC")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Factbox__WEBPACK_IMPORTED_MODULE_3__["default"],{boxTitle:"Other Sites"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://www.localswitchboard.nyc/",target:"_blank",rel:"noreferrer",className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.highlight},"Local Switchboard")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,"Book Club Girls"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://www.motherjones.com/author/jordan-gass-poore/",target:"_blank",rel:"noreferrer"},"Mother Jones")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://www.cnn.com/profiles/jordan-gass-poore",target:"_blank",rel:"noreferrer",className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.highlight},"CNN")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://www.npr.org/sections/npr-extra/2016/05/06/476881707/npr-interns-present-off-mic-a-behind-the-scenes-report-about-how-radio-gets-done",target:"_blank",rel:"noreferrer"},"NPR: Off Mic")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Factbox__WEBPACK_IMPORTED_MODULE_3__["default"],{boxTitle:"Clips"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6",null,"Current Number:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.highlight},data.data.allClip.totalCount)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Factbox__WEBPACK_IMPORTED_MODULE_3__["default"],{boxTitle:"Social"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.highlight},"Follow Me:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://twitter.com/jgasspoore",target:"_blank"},"Twitter")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://www.instagram.com/jgasspoore/",target:"_blank"},"Instagram")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://www.facebook.com/jordanpodcasts/",target:"_blank"},"Facebook")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Factbox__WEBPACK_IMPORTED_MODULE_3__["default"],{boxTitle:"Education"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",null,data.data.allAchievement.edges.map(({node},index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:node.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a,{to:"/achievement/"+node.achievement.slug,style:{textDecoration:"none"},key:node.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"underline"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:index>1&&index<3?_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.highlight:""},node.achievement.title))))))))))));});const query="3969855644";

/***/ }),

/***/ "./src/pages/map.js":
/*!**************************!*\
  !*** ./src/pages/map.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyMap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Leaflet_MapFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Leaflet/MapFrame */ "./src/components/Leaflet/MapFrame.js");
/* harmony import */ var _components_Leaflet_Marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Leaflet/Marker */ "./src/components/Leaflet/Marker.js");
/* harmony import */ var _components_LocationClipSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LocationClipSet */ "./src/components/LocationClipSet.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_cleanSlugs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/cleanSlugs */ "./src/utils/cleanSlugs.js");
/* harmony import */ var _utils_cleanSlugs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_cleanSlugs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_SiteContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SiteContainer */ "./src/components/SiteContainer.js");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/BreadCrumb */ "./src/components/BreadCrumb.js");
/* harmony import */ var _assets_stylesheets_pages_map_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/stylesheets/pages/_map.scss */ "./src/assets/stylesheets/pages/_map.scss");
/* harmony import */ var _assets_stylesheets_pages_map_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_pages_map_scss__WEBPACK_IMPORTED_MODULE_9__);
// import * as ReactLeaflet from "react-leaflet"
// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet
const clipsByLocation=function(gatsby){const clipNodes=gatsby.data.allClip.nodes;const locations={};let locationCount=0;clipNodes.forEach(node=>{if(node.clip.locationData&&node.clip.locationData.placename){node.clip.id=node.id;if(locations[node.clip.locationData.placename]){locations[node.clip.locationData.placename].clips.push(node.clip);}else{locations[node.clip.locationData.placename]={geoData:node.clip.locationData,clips:[node.clip],idSlug:Object(_utils_cleanSlugs__WEBPACK_IMPORTED_MODULE_5__["createCleanSlug"])(node.clip.locationData.placename)};locationCount+=1;}}});// console.log(locations)
return locations;};class MyMap extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component{constructor(gatsby){super();this.state={lat:51.505,lng:-0.09,zoom:3,activeClips:"default"};this.gatsby=gatsby;this.handleClick.bind(this);}handleClick(activeClipsId){this.setState(prevState=>({...prevState,activeClips:activeClipsId}));}render(){// const position = [this.state.lat, this.state.lng]
const position=[41.4533,-55.84];const locationClipSet=clipsByLocation(this.gatsby);const locationMarkers=[];const locationBasedClips=[];locationBasedClips.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LocationClipSet__WEBPACK_IMPORTED_MODULE_3__["default"],{id:"default",locationName:"default",key:"default",clips:[],title:"Select a marker on the map",activeState:this.state.activeClips},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"By clicking a location on the map you can see a list of clips reported about that area.")));for(var aLocation in locationClipSet){if(Object.prototype.hasOwnProperty.call(locationClipSet,aLocation)){// do stuff
var markerPositions=[locationClipSet[aLocation].geoData.location.lat,locationClipSet[aLocation].geoData.location.lng];locationMarkers.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Leaflet_Marker__WEBPACK_IMPORTED_MODULE_2__["default"],{position:markerPositions,key:locationClipSet[aLocation].geoData.placename,targetSlug:locationClipSet[aLocation].idSlug,locationName:locationClipSet[aLocation].geoData.placename},"Work in ",locationClipSet[aLocation].geoData.placename));locationBasedClips.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_LocationClipSet__WEBPACK_IMPORTED_MODULE_3__["default"],{id:locationClipSet[aLocation].idSlug,key:locationClipSet[aLocation].idSlug,locationName:locationClipSet[aLocation].geoData.placename,clips:locationClipSet[aLocation].clips,activeState:this.state.activeClips},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"This is work done at or about"," ",locationClipSet[aLocation].geoData.placename)));}}const handlePopupOpen=e=>{console.log(e.popup.options["data-target"]);this.handleClick(e.popup.options["data-target"]);};const handlePopupClose=e=>{console.log("Popup close");this.handleClick("default");};/**
		if (typeof window !== "undefined") {
			return (
				<LeafletMap center={position} zoom={this.state.zoom}>
					<Helmet
						style={[
							{
								cssText: `
										.leaflet-container {
											height: 400px;
											width: 100%;
										}
								`,
							},
						]}
					></Helmet>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</LeafletMap>
			)
		}
		return null
		 */console.log("State ",this.state);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SiteContainer__WEBPACK_IMPORTED_MODULE_6__["default"],{id:"map"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_4___default.a,{style:[{cssText:`
										.leaflet-container,  #mapframe-leaflet-map-component {
											height: 400px;
											width: 100%;
											display: block;
										}
								`}]}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_8__["default"],{style:{display:"block",float:"left",position:"absolute",top:"calc(3rem - 34px)",paddingLeft:"20px"}},"Clips by Location"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"map-page-grid-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"map-page-grid"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"map-page-grid__map"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Leaflet_MapFrame__WEBPACK_IMPORTED_MODULE_1__["default"],{center:position,position:position,className:"map-page-container",id:"leaf-map",zoom:3,handlePopupClose:handlePopupClose,handlePopupOpen:handlePopupOpen},locationMarkers)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"map-page-grid__info"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"map-page-grid__info-inner"},locationBasedClips)))));}}const query="3760124452";

/***/ }),

/***/ "./src/pages/my-files.js":
/*!*******************************!*\
  !*** ./src/pages/my-files.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony default export */ __webpack_exports__["default"] = (({data})=>{console.log(data);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"My Site's Files"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,"relativePath"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,"prettySize"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,"extension"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th",null,"birthTime"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody",null,data.allFile.edges.map(({node},index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr",{key:index},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,node.relativePath),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,node.prettySize),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,node.extension),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td",null,node.birthTime)))))));});const query="2117150364";

/***/ }),

/***/ "./src/pages/resume.js":
/*!*****************************!*\
  !*** ./src/pages/resume.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _utils_queryParsing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/queryParsing */ "./src/utils/queryParsing.js");
/* harmony import */ var _components_Factbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Factbox */ "./src/components/Factbox.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.esm.js");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BreadCrumb */ "./src/components/BreadCrumb.js");
// import styles from "../styles/glitchFrenchWave.module.css"
/* harmony default export */ __webpack_exports__["default"] = (data=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_8__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_7___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.fnw})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.basicContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_9__["default"],{style:{display:"block",float:"left",position:"absolute",top:"calc(3rem - 34px)",paddingLeft:"20px"}},"Resume"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,"Resume"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://docs.google.com/document/d/1EQ4seKMht4-k3up_WeWqB8JYeP8Nc_0vIkHE8kM5T_w/edit?usp=sharing",target:"_blank"},"View my resume as a podcast producer"),"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://docs.google.com/document/d/17ynCAOE6Za8UO_JCrVwZAV4eQGOobY6CTQySZlRbkX8/edit?usp=sharing",target:"_blank"},"View my resume as a journalist"),".")));});

/***/ }),

/***/ "./src/styles/fwAllNodes.module.css":
/*!******************************************!*\
  !*** ./src/styles/fwAllNodes.module.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"allNodesContainer": "fwAllNodes-module--all-nodes-container--1y7CY",
	"allNodesHeader": "fwAllNodes-module--all-nodes-header--mmN2q",
	"nodeSortContainer": "fwAllNodes-module--node-sort-container--1nqk1",
	"nodeSetContainer": "fwAllNodes-module--node-set-container--1w3V6",
	"nodeSingle": "fwAllNodes-module--node-single--qRjYM",
	"listImage": "fwAllNodes-module--list-image--2BmxY",
	"nodeSingleInnerLayer": "fwAllNodes-module--node-single-inner-layer--1vTXZ",
	"formInput": "fwAllNodes-module--form-input--3c7_z",
	"formDropdown": "fwAllNodes-module--form-dropdown--10A5f",
	"capitalize": "fwAllNodes-module--capitalize--2STMX"
};

/***/ }),

/***/ "./src/styles/strongSlant.module.css":
/*!*******************************************!*\
  !*** ./src/styles/strongSlant.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"fnw": "strongSlant-module--fnw--13i9S",
	"bold": "strongSlant-module--bold--2kR8e",
	"mainSiteContainer": "strongSlant-module--main-site-container--3-mwc",
	"homepage": "strongSlant-module--homepage--3-MU_",
	"basicContainer": "strongSlant-module--basic-container--2Em2L",
	"highlight": "strongSlant-module--highlight--2bOna",
	"noImage": "strongSlant-module--no-image--7U-bB",
	"spacer": "strongSlant-module--spacer--3UeO4",
	"minimalLink": "strongSlant-module--minimal-link--2EmC1",
	"fnwMenuBox": "strongSlant-module--fnw-menu-box--1GFkm",
	"informer": "strongSlant-module--informer--1YuvB",
	"meta": "strongSlant-module--meta--3VUyZ",
	"fnwCard": "strongSlant-module--fnw-card--1G26i",
	"fullBox": "strongSlant-module--full-box--1LFiU",
	"homepageTitle": "strongSlant-module--homepage-title--2cQt6",
	"blackOutBox": "strongSlant-module--black-out-box--3yTt9",
	"cardContainer": "strongSlant-module--card-container--17yYe",
	"siteBreadCrumb": "strongSlant-module--site-bread-crumb--j-yqB",
	"breadCrumbEnd": "strongSlant-module--bread-crumb-end--351k_",
	"middleFwBoxContainer": "strongSlant-module--middle-fw-box-container--3852Y",
	"outerCardContainer": "strongSlant-module--outer-card-container--1YRm6",
	"lowerFwBoxContainer": "strongSlant-module--lower-fw-box-container--3iswN",
	"lowerFwBox": "strongSlant-module--lower-fw-box--1DgnY",
	"factBoxContainer": "strongSlant-module--fact-box-container--4kgPc",
	"buildtime": "strongSlant-module--buildtime--3dIVW",
	"factBox": "strongSlant-module--fact-box--3fH0m",
	"sideHBox": "strongSlant-module--side-h-box--AT9eG",
	"factBoxInner": "strongSlant-module--fact-box-inner--3hair",
	"rotated": "strongSlant-module--rotated--3sjHx",
	"listOfLinks": "strongSlant-module--list-of-links--26oWZ",
	"flexRow": "strongSlant-module--flex-row--2wISb",
	"flexCol": "strongSlant-module--flex-col--3p51b",
	"bbImageWrapper": "strongSlant-module--bb-image-wrapper--vkE8k",
	"bbDataHolder": "strongSlant-module--bb-data-holder--28Utt",
	"clipInner": "strongSlant-module--clip-inner--LFaJb",
	"clipTitle": "strongSlant-module--clip-title--1d9G2",
	"clipLink": "strongSlant-module--clip-link--R_GSW",
	"clipInfoBlock": "strongSlant-module--clip-info-block--2TMin",
	"staticPage": "strongSlant-module--static-page--3d6T8",
	"gatsbyImageWrapper": "strongSlant-module--gatsby-image-wrapper--1GW91",
	"rotate": "strongSlant-module--rotate--3mMux",
	"rotate1": "strongSlant-module--rotate-1--222Ij",
	"rotate2": "strongSlant-module--rotate-2--1XUMZ",
	"rotate3": "strongSlant-module--rotate-3--1Xz4d"
};

/***/ }),

/***/ "./src/styles/strongSlantAllNodes.module.css":
/*!***************************************************!*\
  !*** ./src/styles/strongSlantAllNodes.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"allNodesContainer": "strongSlantAllNodes-module--all-nodes-container--3AcTC",
	"allNodesHeader": "strongSlantAllNodes-module--all-nodes-header--16-IR",
	"nodeSortContainer": "strongSlantAllNodes-module--node-sort-container--2aK4r",
	"nodeSetContainer": "strongSlantAllNodes-module--node-set-container--1V0MG",
	"nodeSingle": "strongSlantAllNodes-module--node-single--28IFJ",
	"listImage": "strongSlantAllNodes-module--list-image--ByO2H",
	"nodeSingleInnerLayer": "strongSlantAllNodes-module--node-single-inner-layer--ZJXkw",
	"formInput": "strongSlantAllNodes-module--form-input--1rBEz",
	"formDropdown": "strongSlantAllNodes-module--form-dropdown--2fBbI",
	"capitalize": "strongSlantAllNodes-module--capitalize--3AWne"
};

/***/ }),

/***/ "./src/styles/topicsInFocus.module.css":
/*!*********************************************!*\
  !*** ./src/styles/topicsInFocus.module.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"outerCardContainer": "topicsInFocus-module--outer-card-container--3VBFH",
	"title": "topicsInFocus-module--title--3TGsR",
	"cardContainer": "topicsInFocus-module--card-container--Gx1qn",
	"tifCard": "topicsInFocus-module--tif-card--2BikZ",
	"rotated": "topicsInFocus-module--rotated--1Txbn",
	"tifCardInner": "topicsInFocus-module--tif-card-inner--UXPyD",
	"rotate1": "topicsInFocus-module--rotate-1--1YEzx",
	"rotate2": "topicsInFocus-module--rotate-2--19mHN",
	"rotate3": "topicsInFocus-module--rotate-3--2dOqH",
	"rotate4": "topicsInFocus-module--rotate-4--2f8kA",
	"rotate": "topicsInFocus-module--rotate--1WRAR",
	"tifMenuBox": "topicsInFocus-module--tif-menu-box--3wyDi",
	"informer": "topicsInFocus-module--informer--2MwaQ",
	"lowerFwBox": "topicsInFocus-module--lower-fw-box--1Os5V"
};

/***/ }),

/***/ "./src/templates/achievement-page.js":
/*!*******************************************!*\
  !*** ./src/templates/achievement-page.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BreadCrumb */ "./src/components/BreadCrumb.js");
/* harmony import */ var _components_HumanReadableDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HumanReadableDate */ "./src/components/HumanReadableDate.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./src/hooks/use-site-metadata.js");
/* harmony default export */ __webpack_exports__["default"] = (({data,pageContext})=>{console.log("Data: ",data,pageContext);const{url}=Object(_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_9__["useSiteMetadata"])();var previewImage=false;var isFluid=false;var achievementObj=data.achievement.achievement;var queryResult=data.achievement;var origImage="";if(queryResult.fields.imgObj){if(queryResult.fields.imgObj.childImageSharp&&queryResult.fields.imgObj.childImageSharp.fluid){previewImage=queryResult.fields.imgObj.childImageSharp.fluid;isFluid=true;}else if(queryResult.fields.imgObj.publicURL){previewImage=queryResult.fields.imgObj.publicURL;}}if(queryResult.fields.imgObj&&queryResult.fields.imgObj.publicURL){origImage=queryResult.fields.imgObj.publicURL;}var previewEl=null;if(previewImage&&isFluid){previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a,{fluid:queryResult.fields.imgObj.childImageSharp.fluid,alt:"",className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bbImageWrapper});}else if(previewImage){previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:previewImage,alt:"",className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bbImageWrapper});}else{previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.noImg});}var publisherUrl="";var originalContent,archivedContent,awardedBy;try{if(achievementObj.affiliation){awardedBy=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{className:"source-with-origin-url"},"From: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," ",achievementObj.affiliation);if(achievementObj.isBasedOn){originalContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipLink},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:achievementObj.isBasedOn},"View achievement"));}else{originalContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipLink});}}else{publisherUrl="";awardedBy=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{className:"source-without-origin-url"},"From: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," ",achievementObj.affiliation);originalContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipLink},"Original Achievement No Longer Available");}}catch(e){console.log("Achievement build error occured ",e);originalContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null);}var archiveFile="";if(queryResult.mediaFile&&queryResult.mediaFile.publicURL){archiveFile=queryResult.mediaFile;}if(achievementObj.media&&archiveFile.publicURL){archivedContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipLink},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spacer},"|"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:archiveFile.publicURL,target:"_blank",rel:"noopener noreferrer"},"Archived Achievement"));}else{archivedContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipLink});}var awardDate;if(achievementObj.date){var humanReadableDate=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HumanReadableDate__WEBPACK_IMPORTED_MODULE_6__["default"],{date:achievementObj.date});awardDate=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"Occurred on"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,":")," ",humanReadableDate);}else{awardDate=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null);}var homeLink=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:"/"+achievementObj.type,key:"clipsHomepage"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"underline"}},"All ",achievementObj.type));var previousLink,nextLink;if(pageContext.previous){previousLink=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:"/achievement/"+pageContext.previous.slug,key:pageContext.previous.id,title:pageContext.previous.title},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"underline"}},"Previous Achievement"));}else{previousLink=homeLink;}if(pageContext.next){nextLink=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:"/achievement/"+pageContext.next.slug,key:pageContext.next.id,title:pageContext.next.title},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"underline"}},"Next Achievement"));}else{nextLink=homeLink;}const imgBlock=/Transparent-l/.test(origImage)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-img":origImage,className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.flexCol},previewEl);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_7__["default"],{postMeta:achievementObj,postDefaults:{description:"Achievement by Jordan Gass-Poore'"},postPath:"achievement/"+achievementObj.slug,isType:`website`,typeMeta:{isBasedOn:achievementObj.isBasedOn,publisher:publisherUrl,publisher_name:achievementObj.publishedBy}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:queryResult.achievement.id,className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.basicContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_5__["default"],{style:{display:"block",float:"left",position:"absolute",top:"calc(3rem - 34px)",paddingLeft:"20px"},precursors:[{link:`${url}${path__WEBPACK_IMPORTED_MODULE_8___default.a.sep}${achievementObj.type.toLowerCase()}`,text:"Achievements List"}]},"Achievement"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipTitle},achievementObj.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.flexRow},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.flexCol},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bbDataHolder},originalContent," ",archivedContent,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"About this achievement: "),awardedBy,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,awardDate,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"About"),": ",achievementObj.description,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:achievementObj.content}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)))),imgBlock,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_5__["default"],{style:{display:"block",float:"left",position:"relative",marginTop:"3rem",paddingLeft:"20px",lineHeight:"4px",paddingBottom:"12px"}},previousLink," | ",nextLink))));});const query="4083842792";

/***/ }),

/***/ "./src/templates/allAchievement-page.js":
/*!**********************************************!*\
  !*** ./src/templates/allAchievement-page.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NodesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NodesList */ "./src/components/NodesList.js");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/strongSlantAllNodes.module.css */ "./src/styles/strongSlantAllNodes.module.css");
/* harmony import */ var _styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BreadCrumb */ "./src/components/BreadCrumb.js");
/* harmony import */ var _components_SortDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SortDown */ "./src/components/SortDown.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/**
 *
				<NodesList
					edgeList={data.data.allAchievement.edges}
					baseOfLink="achievement/"
					baseOfObject="achievement"
					extraFields={["affiliation"]}
				/>
 *//* harmony default export */ __webpack_exports__["default"] = (data=>{const post=data.data.file.childMarkdownRemark;const baseOfObject="clip";const emptyQuery="";const emptyTopicQuery="";const emptyFormatQuery="";const{0:state,1:setState}=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({filteredData:[],query:emptyQuery});const edgeList=data.data.allAchievement.edges;// From: https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial
const handleInputChange=event=>{const query=event.target.value;// this is how we get all of our posts
const edges=edgeList||[];// return all filtered posts
const filteredData=edges.filter(node=>{// destructure data from post frontmatter
const{description,title,content}=node.node[baseOfObject];let validity=description.toLowerCase().includes(query.toLowerCase())||title.toLowerCase().includes(query.toLowerCase())||content.toLowerCase().includes(query.toLowerCase());// ||
// topic.toLowerCase().includes(state.topicQuery.toLowerCase())
return validity;});// update state according to the latest query and results
setState({query,// with current query string from the `Input` event
filteredData// with filtered data from posts.filter(post => (//filteredData)) above
});};const{filteredData,query}=state;const hasSearchResults=filteredData&&query!==emptyQuery;const edges=hasSearchResults?filteredData:edgeList;// console.log("Data: ", data.data)
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fnw})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.allNodesHeader,className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.basicContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__["default"],{style:{display:"block",float:"left",position:"absolute",top:"calc(3rem - 34px)",paddingLeft:"20px"}},"Achievements: ",post.frontmatter.subType),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,post.frontmatter.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:post.html}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NodesList__WEBPACK_IMPORTED_MODULE_3__["default"],{edgeList:edges,baseOfLink:"achievement/",baseOfObject:"achievement",extraFields:[{key:"date",pretext:"Achieved on "},{key:"affiliation",pretext:"Granted by "}],handleInputChange:handleInputChange,sorters:[]})));});const query="1140952628";

/***/ }),

/***/ "./src/templates/allClip-page.js":
/*!***************************************!*\
  !*** ./src/templates/allClip-page.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NodesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NodesList */ "./src/components/NodesList.js");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/strongSlantAllNodes.module.css */ "./src/styles/strongSlantAllNodes.module.css");
/* harmony import */ var _styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BreadCrumb */ "./src/components/BreadCrumb.js");
/* harmony import */ var _components_SortDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SortDown */ "./src/components/SortDown.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
// Cards are topic=Features, format=text, format=audio
/* harmony default export */ __webpack_exports__["default"] = (data=>{const post=data.data.file.childMarkdownRemark;const baseOfObject="clip";const emptyQuery="";const emptyTopicQuery="";const emptyFormatQuery="";const{0:state,1:setState}=Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({filteredData:[],query:emptyQuery,topicQuery:emptyTopicQuery,formatQuery:emptyFormatQuery});const edgeList=data.data.allClip.edges;// From: https://www.aboutmonica.com/blog/create-gatsby-blog-search-tutorial
const handleInputChange=event=>{const query=event.target.value;// this is how we get all of our posts
const edges=edgeList||[];const{topicQuery,formatQuery}=state;// return all filtered posts
const filteredData=edges.filter(node=>{// destructure data from post frontmatter
const{description,title,topic,format}=node.node[baseOfObject];let validity=description.toLowerCase().includes(query.toLowerCase())||title.toLowerCase().includes(query.toLowerCase())||topic.toLowerCase().includes(query.toLowerCase());// ||
// topic.toLowerCase().includes(state.topicQuery.toLowerCase())
var topicValid=true;if(topicQuery){topicValid=topic.toLowerCase().includes(topicQuery.toLowerCase());console.log("Topic check addl ",topicValid);}var formatValid=true;if(formatQuery){formatValid=format.toLowerCase().includes(formatQuery.toLowerCase());}return validity&&topicValid&&formatValid;});// update state according to the latest query and results
setState({query,// with current query string from the `Input` event
topicQuery,formatQuery,filteredData// with filtered data from posts.filter(post => (//filteredData)) above
});};const handleTopicChange=event=>{const topicQuery=event.target.value;console.log("Topic change: ",event);// this is how we get all of our posts
const edges=edgeList||[];const{query,formatQuery}=state;// return all filtered posts
const filteredData=edges.filter(node=>{// destructure data from post frontmatter
const{description,title,topic,format}=node.node[baseOfObject];var validity=// standardize data with .toLowerCase()
// return true if the description, title or tags
// contains the query string
// description.toLowerCase().includes(state.query.toLowerCase()) ||
// title.toLowerCase().includes(state.query.toLowerCase()) ||
// topic.toLowerCase().includes(state.query.toLowerCase()) ||
topic.toLowerCase().includes(topicQuery.toLowerCase());var queryValid=true;if(queryValid){queryValid=description.toLowerCase().includes(query.toLowerCase())||title.toLowerCase().includes(query.toLowerCase())||topic.toLowerCase().includes(query.toLowerCase());}var formatValid=true;if(formatQuery){formatValid=format.toLowerCase().includes(formatQuery.toLowerCase());}return validity&&queryValid&&formatValid;});// update state according to the latest query and results
setState({query,topicQuery,// with current query string from the `Input` event
formatQuery,filteredData// with filtered data from posts.filter(post => (//filteredData)) above
});};const handleFormatChange=event=>{const formatQuery=event.target.value;// this is how we get all of our posts
const edges=edgeList||[];const{topicQuery,query}=state;// return all filtered posts
const filteredData=edges.filter(node=>{// destructure data from post frontmatter
const{description,title,topic,format}=node.node[baseOfObject];let validity=format.toLowerCase().trim().includes(formatQuery.toLowerCase().trim());// ||
// topic.toLowerCase().includes(state.topicQuery.toLowerCase())
var topicValid=true;if(topicQuery){topicValid=topic.toLowerCase().includes(topicQuery.toLowerCase());}var queryValid=true;if(queryValid){queryValid=description.toLowerCase().includes(query.toLowerCase())||title.toLowerCase().includes(query.toLowerCase())||topic.toLowerCase().includes(query.toLowerCase());}return validity&&topicValid&&queryValid;});// update state according to the latest query and results
setState({query,// with current query string from the `Input` event
topicQuery,formatQuery,filteredData// with filtered data from posts.filter(post => (//filteredData)) above
});};const{filteredData,topicQuery,formatQuery,query}=state;const hasSearchResults=filteredData&&(query!==emptyQuery||topicQuery!==emptyTopicQuery||formatQuery!==emptyFormatQuery);const edges=hasSearchResults?filteredData:edgeList;const topicSelect=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SortDown__WEBPACK_IMPORTED_MODULE_7__["default"],{key:"sortdown-topic",edgeParamter:"topic",baseOfObject:baseOfObject,handleChange:handleTopicChange,edgeList:edgeList});const formatSelect=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SortDown__WEBPACK_IMPORTED_MODULE_7__["default"],{key:"sortdown-format",edgeParamter:"format",baseOfObject:baseOfObject,handleChange:handleFormatChange,edgeList:edgeList});// console.log("Data: ", data.data)
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_8___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.fnw})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:_styles_strongSlantAllNodes_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.allNodesHeader,className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.basicContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__["default"],{style:{display:"block",float:"left",position:"absolute",top:"calc(3rem - 34px)",paddingLeft:"20px"}},"Clips"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,post.frontmatter.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:post.html}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NodesList__WEBPACK_IMPORTED_MODULE_3__["default"],{edgeList:edges,baseOfLink:"clip/",baseOfObject:"clip",extraFields:[{key:"publishedBy",pretext:"Published by "}],handleInputChange:handleInputChange,sorters:[topicSelect,formatSelect]})));});const query="390648942";

/***/ }),

/***/ "./src/templates/base-pages.js":
/*!*************************************!*\
  !*** ./src/templates/base-pages.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BreadCrumb */ "./src/components/BreadCrumb.js");
// import styles from "../styles/glitchFrenchWave.module.css"
/* harmony default export */ __webpack_exports__["default"] = (data=>{const post=data.data.file.childMarkdownRemark;console.log("Data: ",data.data);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.fnw})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.basicContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_4__["default"],{style:{display:"block",float:"left",position:"absolute",top:"calc(3rem - 34px)",paddingLeft:"20px"}},post.frontmatter.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",null,post.frontmatter.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:post.html}})));});const query="3768261242";

/***/ }),

/***/ "./src/templates/clip-page.js":
/*!************************************!*\
  !*** ./src/templates/clip-page.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/BreadCrumb */ "./src/components/BreadCrumb.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony import */ var _components_HumanReadableDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HumanReadableDate */ "./src/components/HumanReadableDate.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/use-site-metadata */ "./src/hooks/use-site-metadata.js");
/* harmony default export */ __webpack_exports__["default"] = (({data,pageContext})=>{console.log("Data: ",data,pageContext);const{url}=Object(_hooks_use_site_metadata__WEBPACK_IMPORTED_MODULE_9__["useSiteMetadata"])();var previewImage=false;var isFluid=false;var clipObj=data.clip.clip;var queryResult=data;var origImage="";if(queryResult.previewImage){if(queryResult.previewImage.childImageSharp&&queryResult.previewImage.childImageSharp.fluid){previewImage=queryResult.previewImage.childImageSharp.fluid;isFluid=true;}else if(queryResult.previewImage.publicURL){previewImage=queryResult.previewImage.publicURL;}}if(queryResult.previewImage&&queryResult.previewImage.publicURL){origImage=queryResult.previewImage.publicURL;}var previewEl=null;try{if(previewImage&&isFluid){const previewImageObj=Object.assign({media:`(max-width: 400px)`,key:queryResult.previewImage.childImageSharp.id},queryResult.previewImage.childImageSharp.fluid);const sources=[previewImageObj];previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a,{key:queryResult.previewImage.childImageSharp.id,fluid:sources,alt:"",className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bbImageWrapper});}else if(previewImage){previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:previewImage,alt:"",className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bbImageWrapper});}else{previewEl=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.noImg});}}catch(e){console.log("Error occurred when setting up previewImage",e);}var publisherUrl="";var originalContent,archivedContent,publishedBy;try{if(clipObj.isBasedOn){const theSourceUrl=new URL(clipObj.isBasedOn);publisherUrl=theSourceUrl.origin;publishedBy=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{className:"source-with-origin-url"},"Published by: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:publisherUrl,target:"_blank",rel:"noopener noreferrer"},clipObj.publishedBy));originalContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipLink},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:clipObj.isBasedOn,target:"_blank",rel:"noopener noreferrer"},"View clip"));}else{publisherUrl="";publishedBy=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4",{className:"source-without-origin-url"},"Published by: ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)," ",clipObj.publishedBy);originalContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipLink},"Original Clip No Longer Available");}}catch(e){console.log("Clip build error occured ",e);publishedBy=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null);originalContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null);}var archiveFile="";if(queryResult.mediaFile&&queryResult.mediaFile.publicURL){archiveFile=queryResult.mediaFile;}if(clipObj.media&&archiveFile.publicURL){archivedContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipLink},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.spacer},"|"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:archiveFile.publicURL,target:"_blank",rel:"noopener noreferrer"},"Archived Clip"));}else{archivedContent=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipLink});}var humanReadableDate=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HumanReadableDate__WEBPACK_IMPORTED_MODULE_7__["default"],{date:clipObj.date});var homeLink=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:"/clips",key:"clipsHomepage"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"underline"}},"All Clips"));var previousLink,nextLink;if(pageContext.previous){previousLink=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:"/clip/"+pageContext.previous.slug,key:pageContext.previous.id,title:pageContext.previous.title},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"underline"}},"Previous Clip"));}else{previousLink=homeLink;}if(pageContext.next){nextLink=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_2___default.a,{to:"/clip/"+pageContext.next.slug,key:pageContext.next.id,title:pageContext.next.title},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{style:{textDecoration:"underline"}},"Next Clip"));}else{nextLink=homeLink;}let defaultDescription=false;if(!clipObj.description&&!clipObj.content&&!clipObj.description){defaultDescription="Work by";}var isType="website";switch(clipObj.format){case"text":isType="NewsArticle";if(clipObj.topic==="Opinion"||clipObj.topic==="PR"){isType="article";}break;default:isType="website";break;}let contentBlock=clipObj.content?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:clipObj.content}})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null);let summaryBlock=clipObj.description?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"Summary"),": ",clipObj.description):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_6__["default"],{postMeta:clipObj,postDefaults:{description:defaultDescription},postPath:"clip/"+clipObj.slug,isType:isType,typeMeta:{isBasedOn:clipObj.isBasedOn,publisher:publisherUrl,publisher_name:clipObj.publishedBy}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:queryResult.clip.id,className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.basicContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_5__["default"],{style:{display:"block",float:"left",position:"absolute",top:"calc(3rem - 34px)",paddingLeft:"20px"},precursors:[{link:`${url}${path__WEBPACK_IMPORTED_MODULE_8___default.a.sep}${`clips`}`,text:"Clips List"}]},"Clip"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipInner},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipTitle},clipObj.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.flexRow},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.flexCol},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.bbDataHolder},originalContent," ",archivedContent,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.clipInfoBlock},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2",null,"About this clip: "),publishedBy,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"Location Published"),": ",clipObj.location,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"Published on"),": ",humanReadableDate,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"Topic"),": ",clipObj.topic,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,summaryBlock,contentBlock,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{"data-img":origImage,className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.flexCol},previewEl)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_5__["default"],{style:{display:"block",position:"relative",marginTop:"3rem",marginBottom:"3rem",paddingLeft:"20px",lineHeight:"4px",paddingBottom:"12px"}},previousLink," | ",nextLink))));});const query="1741203167";

/***/ }),

/***/ "./src/templates/static-page.js":
/*!**************************************!*\
  !*** ./src/templates/static-page.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SiteContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SiteContainer */ "./src/components/SiteContainer.js");
/* harmony default export */ __webpack_exports__["default"] = (data=>{console.log("Data: ",data.data);var srcDocContent=JSON.parse(data.data.file.fields.raw);// var file = fs.readFileSync('_projects/' + data.data.file.base);
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SiteContainer__WEBPACK_IMPORTED_MODULE_3__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{id:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.staticPage},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.fnw})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe",{srcDoc:srcDocContent})));});const query="458399162";

/***/ }),

/***/ "./src/templates/topicsInFocus.js":
/*!****************************************!*\
  !*** ./src/templates/topicsInFocus.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.js");
/* harmony import */ var _components_ContainerCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ContainerCard */ "./src/components/ContainerCard.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/strongSlant.module.css */ "./src/styles/strongSlant.module.css");
/* harmony import */ var _styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/topicsInFocus.module.css */ "./src/styles/topicsInFocus.module.css");
/* harmony import */ var _styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/BreadCrumb */ "./src/components/BreadCrumb.js");
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/SEO */ "./src/components/SEO.js");
/* harmony default export */ __webpack_exports__["default"] = (({data,pageContext})=>{console.log("Data: ",data,pageContext);const cardStyle1=[_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.rotated,_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.rotate1].join(" ");const cardStyle2=[_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.rotated,_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.rotate2].join(" ");const cardStyle3=[_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.rotated,_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.rotate3].join(" ");const cardStyle4=[_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.rotated,_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.rotate4].join(" ");const highlightSet={};pageContext.highlight.forEach(highlight=>{highlightSet[highlight]=[];});const cardListClipMaker=node=>{// Transforms
return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li",{key:node.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a,{to:"/"+"clip/"+node["clip"].slug,key:node.id},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5",null,node.clip.title)));};data.allClip.edges.forEach(({node})=>{// console.log(node.clip)
highlightSet[node.clip.topic].push(cardListClipMaker(node));});console.log("Highlights",highlightSet);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_7__["default"],{postMeta:{title:"Topics in focus",slug:pageContext.slug},postDefaults:{description:"Topics focused on by Jordan Gass-Poore'"},postPath:"topics-in-focus/",isType:"article",typeMeta:{publisher_name:"Jordan Gass-Poore'"}}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.outerCardContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreadCrumb__WEBPACK_IMPORTED_MODULE_6__["default"],{style:{display:"block",float:"left",position:"absolute",top:"calc(3rem - 34px)",paddingLeft:"20px"}},"Topics in Focus"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.title},"Topics in Focus"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:_styles_topicsInFocus_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.cardContainer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContainerCard__WEBPACK_IMPORTED_MODULE_2__["default"],{className:cardStyle1,boxTitle:"The Death Beat",boxSubTitle:"Topic in Focus"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listOfLinks},highlightSet[pageContext.highlight[0]])),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContainerCard__WEBPACK_IMPORTED_MODULE_2__["default"],{className:cardStyle2,boxTitle:"Environment",boxSubTitle:"Topic in Focus"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listOfLinks},highlightSet[pageContext.highlight[1]])),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContainerCard__WEBPACK_IMPORTED_MODULE_2__["default"],{className:cardStyle3,boxTitle:"Travel",boxSubTitle:"Topic in Focus"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listOfLinks},highlightSet[pageContext.highlight[2]])),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ContainerCard__WEBPACK_IMPORTED_MODULE_2__["default"],{className:cardStyle4,boxTitle:"Health",boxSubTitle:"Topic in Focus"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul",{className:_styles_strongSlant_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.listOfLinks},highlightSet[pageContext.highlight[3]])))));});const query="2930913452";

/***/ }),

/***/ "./src/utils/cleanSlugs.js":
/*!*********************************!*\
  !*** ./src/utils/cleanSlugs.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const slugify=__webpack_require__(/*! slugify */ "./node_modules/slugify/slugify.js");const createCleanSlug=function(aString){slugify.extend({"'":""});var newString=slugify(aString).replace(/\'/gi,"").replace(/\:/gi,"");newString=newString.toLowerCase().replace(/\"/gi,"").replace(/\`/gi,"");newString=newString.replace(/\./g,"").replace(/\(/gi,"").replace(/\)/gi,"");var finalString=newString;if(newString.length>70){finalString=newString.substr(0,68);}else{finalString=newString;}if(finalString.charAt(finalString.length-1)=="-"){return finalString.substring(0,finalString.length-2);}else{return finalString;}// return finalString;
};module.exports={createCleanSlug:createCleanSlug};

/***/ }),

/***/ "./src/utils/domHandlers.js":
/*!**********************************!*\
  !*** ./src/utils/domHandlers.js ***!
  \**********************************/
/*! exports provided: isDomAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDomAvailable", function() { return isDomAvailable; });
/**
 * isDomAvailable
 * @description Checks to see if the DOM is available by checking the existence of the window and document
 * @see https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js#L12
 */function isDomAvailable(){return typeof window!=="undefined"&&!!window.document&&!!window.document.createElement;}

/***/ }),

/***/ "./src/utils/queryParsing.js":
/*!***********************************!*\
  !*** ./src/utils/queryParsing.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const queryTools={resolveSiteMetadataEdge:function(field,data){if(field=="title"){console.log(data.allSite.edges[0].node.siteMetadata);}return data.allSite.edges[0].node.siteMetadata[field];}};/* harmony default export */ __webpack_exports__["default"] = (queryTools);

/***/ }),

/***/ "@reach/router":
/*!**********************************************************************************************!*\
  !*** external "/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/@reach/router/index.js" ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!****************************************************************************************!*\
  !*** external "/Users/zuckerscharffa/Dev/JGPGatsbySite/node_modules/lodash/lodash.js" ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map