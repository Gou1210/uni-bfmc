(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _tt$getSystemInfoSync =




  tt.getSystemInfoSync(),platform = _tt$getSystemInfoSync.platform,pixelRatio = _tt$getSystemInfoSync.pixelRatio,windowWidth = _tt$getSystemInfoSync.windowWidth; // uni=>tt runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


// 不支持的 API 列表
var todos = [
'preloadPage',
'unPreloadPage',
'loadSubPackage'
// 'createCameraContext',
// 'createLivePlayerContext',
// 'getSavedFileInfo',
// 'createMapContext',
// 'onMemoryWarning',
// 'onGyroscopeChange',
// 'startGyroscope',
// 'stopGyroscope',
// 'setScreenBrightness',
// 'getScreenBrightness',
// 'addPhoneContact',
// 'openBluetoothAdapter',
// 'startBluetoothDevicesDiscovery',
// 'onBluetoothDeviceFound',
// 'stopBluetoothDevicesDiscovery',
// 'onBluetoothAdapterStateChange',
// 'getConnectedBluetoothDevices',
// 'getBluetoothDevices',
// 'getBluetoothAdapterState',
// 'closeBluetoothAdapter',
// 'writeBLECharacteristicValue',
// 'readBLECharacteristicValue',
// 'onBLEConnectionStateChange',
// 'onBLECharacteristicValueChange',
// 'notifyBLECharacteristicValueChange',
// 'getBLEDeviceServices',
// 'getBLEDeviceCharacteristics',
// 'createBLEConnection',
// 'closeBLEConnection',
// 'onBeaconServiceChange',
// 'onBeaconUpdate',
// 'getBeacons',
// 'startBeaconDiscovery',
// 'stopBeaconDiscovery',
// 'showNavigationBarLoading',
// 'hideNavigationBarLoading',
// 'setTabBarItem',
// 'setTabBarStyle',
// 'hideTabBar',
// 'showTabBar',
// 'setTabBarBadge',
// 'removeTabBarBadge',
// 'showTabBarRedDot',
// 'hideTabBarRedDot',
// 'setBackgroundColor',
// 'setBackgroundTextStyle',
// 'chooseInvoiceTitle',
// 'addTemplate',
// 'deleteTemplate',
// 'getTemplateLibraryById',
// 'getTemplateLibraryList',
// 'getTemplateList',
// 'sendTemplateMessage',
// 'setEnableDebug',
// 'onWindowResize',
// 'offWindowResize',
// 'createOffscreenCanvas',
// 'vibrate'
];

// 存在兼容性的 API 列表
// 头条小程序自1.35.0+支持canIUses
var canIUses = [
  // 'createIntersectionObserver',
  // 'getSavedFileList',
  // 'removeSavedFile',
  // 'hideKeyboard',
  // 'getImageInfo',
  // 'createVideoContext',
  // 'onSocketOpen',
  // 'onSocketError',
  // 'sendSocketMessage',
  // 'onSocketMessage',
  // 'closeSocket',
  // 'onSocketClose',
  // 'getExtConfig',
  // 'getExtConfigSync',
  // 'navigateToMiniProgram',
  // 'navigateBackMiniProgram',
  // 'compressImage',
  // 'chooseLocation',
  // 'openDocument',
  // 'onUserCaptureScreen',
  // 'getBackgroundAudioManager',
  // 'setNavigationBarColor',
];

// 需要做转换的 API 列表
var protocols = {
  chooseImage: {
    args: {
      sizeType: false } },


  navigateTo: navigateTo,
  redirectTo: redirectTo,
  previewImage: previewImage,
  connectSocket: {
    args: {
      method: false } },


  chooseVideo: {
    args: {
      camera: false } },


  scanCode: {
    args: {
      onlyFromCamera: false,
      scanType: false } },


  startAccelerometer: {
    args: {
      interval: false } },


  showToast: {
    args: {
      image: false,
      mask: false } },


  showLoading: {
    args: {
      mask: false } },


  showModal: {
    args: {
      cancelColor: false,
      confirmColor: false } },


  showActionSheet: {
    args: {
      itemColor: false } },


  login: {
    args: {
      scopes: false,
      timeout: false } },


  getUserInfo: {
    args: {
      lang: false,
      timeout: false } },


  requestPayment: {
    name: tt.pay ? 'pay' : 'requestPayment',
    args: {
      orderInfo: tt.pay ? 'orderInfo' : 'data' } },


  getFileInfo: {
    args: {
      digestAlgorithm: false } } };




var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5934\u6761\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5934\u6761\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = tt[methodName].apply(tt, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['toutiao'],
  share: ['toutiao'],
  payment: ['toutiao'],
  push: ['toutiao'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "tt".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-toutiao";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

var mocks = ['__route__', '__webviewId__', '__nodeid__', '__nodeId__'];

function isPage() {
  return this.__nodeid__ === 0 || this.__nodeId__ === 0;
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  /* eslint-disable no-undef */
  var minorVersion = parseInt(tt.getSystemInfoSync().SDKVersion.split('.')[1]);
  if (minorVersion > 16) {
    Object.defineProperty(vm, '$refs', {
      get: function get() {
        var $refs = {};
        var components = mpInstance.selectAllComponents('.vue-ref');
        components.forEach(function (component) {
          var ref = component.dataset.ref;
          $refs[ref] = component.$vm || component;
        });
        var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
        forComponents.forEach(function (component) {
          var ref = component.dataset.ref;
          if (!$refs[ref]) {
            $refs[ref] = [];
          }
          $refs[ref].push(component.$vm || component);
        });
        return $refs;
      } });

  } else {
    mpInstance.selectAllComponents('.vue-ref', function (components) {
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        vm.$refs[ref] = component.$vm || component;
      });
    });
    mpInstance.selectAllComponents('.vue-ref-in-for', function (forComponents) {
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!vm.$refs[ref]) {
          vm.$refs[ref] = [];
        }
        vm.$refs[ref].push(component.$vm || component);
      });
    });
  }
}

var instances = Object.create(null);

function initRelation(_ref5)


{var vuePid = _ref5.vuePid,mpInstance = _ref5.mpInstance;
  // 头条 triggerEvent 后，接收事件时机特别晚，已经到了 ready 之后
  var nodeId = (mpInstance.__nodeId__ || mpInstance.__nodeid__) + '';
  var webviewId = mpInstance.__webviewId__ + '';

  instances[webviewId + '_' + nodeId] = mpInstance.$vm;

  this.triggerEvent('__l', {
    vuePid: vuePid,
    nodeId: nodeId,
    webviewId: webviewId });

}

function handleLink$1(_ref6)





{var _ref6$detail = _ref6.detail,vuePid = _ref6$detail.vuePid,nodeId = _ref6$detail.nodeId,webviewId = _ref6$detail.webviewId;
  var vm = instances[webviewId + '_' + nodeId];
  if (!vm) {
    return;
  }

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vm.$parent = parentVm;
  vm.$root = parentVm.$root;
  parentVm.$children.push(vm);

  vm.__call_hook('created');
  vm.__call_hook('beforeMount');
  vm._isMounted = true;
  vm.__call_hook('mounted');
  vm.__call_hook('onReady');
}

function parseApp(vm) {
  _vue.default.prototype._$fallback = true; // 降级（调整原 vue 的部分生命周期，如 created，beforeMount,inject,provide）

  _vue.default.mixin({
    created: function created() {// 处理 injections,头条 triggerEvent 是异步，且触发时机很慢，故延迟 relation 设置
      if (this.mpType !== 'app') {
        if (
        this.mpType === 'page' &&
        !this.$scope.route &&
        this.$scope.__route__)
        {
          this.$scope.route = this.$scope.__route__;
        }

        initRefs(this);

        this.__init_injections(this);
        this.__init_provide(this);
      }
    } });


  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: function initRefs() {} // attached 时，可能查询不到
  });
}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref7.isPage,initRelation = _ref7.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueOptions) {var _parseBaseComponent =
  parseBaseComponent(vueOptions),_parseBaseComponent2 = _slicedToArray(_parseBaseComponent, 2),componentOptions = _parseBaseComponent2[0],VueComponent = _parseBaseComponent2[1];

  componentOptions.lifetimes.attached = function attached() {
    var properties = this.properties;

    var options = {
      mpType: isPage.call(this) ? 'page' : 'component',
      mpInstance: this,
      propsData: properties };


    initVueIds(properties.vueId, this);

    // 初始化 vue 实例
    this.$vm = new VueComponent(options);

    // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
    initSlots(this.$vm, properties.vueSlots);

    // 处理父子关系
    initRelation.call(this, {
      vuePid: this._$vuePid,
      mpInstance: this });


    // 触发首次 setData
    this.$vm.$mount();
  };

  // ready 比 handleLink 还早，初始化逻辑放到 handleLink 中
  delete componentOptions.lifetimes.ready;

  componentOptions.methods.__l = handleLink$1;

  return componentOptions;
}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref8)


{var isPage = _ref8.isPage,initRelation = _ref8.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  var pageOptions = parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

  // 页面需要在 ready 中触发，其他组件是在 handleLink 中触发
  pageOptions.lifetimes.ready = function ready() {
    if (this.$vm && this.$vm.mpType === 'page') {
      this.$vm.__call_hook('created');
      this.$vm.__call_hook('beforeMount');
      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted');
      this.$vm.__call_hook('onReady');
    } else {
      this.is && console.warn(this.is + ' is not ready');
    }
  };

  pageOptions.lifetimes.detached = function detached() {
    this.$vm && this.$vm.$destroy();
    // 清理
    var webviewId = this.__webviewId__;
    webviewId && Object.keys(instances).forEach(function (key) {
      if (key.indexOf(webviewId + '_') === 0) {
        delete instances[key];
      }
    });
  };

  return pageOptions;
}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!tt.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-toutiao" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(tt, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, tt[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(tt).forEach(function (name) {
    if (hasOwn(tt, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, tt[name]));
    }
  });
}

tt.createApp = createApp;
tt.createPage = createPage;
tt.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),
/* 2 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var rawBindings = vm.__secret_vfa_state__ && vm.__secret_vfa_state__.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }
  
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-toutiao","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),
/* 3 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/*!*********************************************************!*\
  !*** D:/Documents/HBuilderProjects/uni-bfmc/pages.json ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })
]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQzovUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLW1wLXRvdXRpYW8vZGlzdC9pbmRleC5qcyIsInVuaS1hcHA6Ly8vQzovUHJvZ3JhbSBGaWxlcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL21wLXZ1ZS9kaXN0L21wLnJ1bnRpbWUuZXNtLmpzIiwidW5pLWFwcDovLy9DOi9Qcm9ncmFtIEZpbGVzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3dlYnBhY2svYnVpbGRpbi9nbG9iYWwuanMiLCJ1bmktYXBwOi8vL0M6L1Byb2dyYW0gRmlsZXMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiXSwibmFtZXMiOlsiX3RvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJoYXNPd25Qcm9wZXJ0eSIsImlzRm4iLCJmbiIsImlzU3RyIiwic3RyIiwiaXNQbGFpbk9iamVjdCIsIm9iaiIsImNhbGwiLCJoYXNPd24iLCJrZXkiLCJub29wIiwiY2FjaGVkIiwiY2FjaGUiLCJjcmVhdGUiLCJjYWNoZWRGbiIsImhpdCIsImNhbWVsaXplUkUiLCJjYW1lbGl6ZSIsInJlcGxhY2UiLCJfIiwiYyIsInRvVXBwZXJDYXNlIiwiSE9PS1MiLCJnbG9iYWxJbnRlcmNlcHRvcnMiLCJzY29wZWRJbnRlcmNlcHRvcnMiLCJtZXJnZUhvb2siLCJwYXJlbnRWYWwiLCJjaGlsZFZhbCIsInJlcyIsImNvbmNhdCIsIkFycmF5IiwiaXNBcnJheSIsImRlZHVwZUhvb2tzIiwiaG9va3MiLCJpIiwibGVuZ3RoIiwiaW5kZXhPZiIsInB1c2giLCJyZW1vdmVIb29rIiwiaG9vayIsImluZGV4Iiwic3BsaWNlIiwibWVyZ2VJbnRlcmNlcHRvckhvb2siLCJpbnRlcmNlcHRvciIsIm9wdGlvbiIsImtleXMiLCJmb3JFYWNoIiwicmVtb3ZlSW50ZXJjZXB0b3JIb29rIiwiYWRkSW50ZXJjZXB0b3IiLCJtZXRob2QiLCJyZW1vdmVJbnRlcmNlcHRvciIsIndyYXBwZXJIb29rIiwiZGF0YSIsImlzUHJvbWlzZSIsInRoZW4iLCJxdWV1ZSIsInByb21pc2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhbGxiYWNrIiwid3JhcHBlck9wdGlvbnMiLCJvcHRpb25zIiwibmFtZSIsIm9sZENhbGxiYWNrIiwiY2FsbGJhY2tJbnRlcmNlcHRvciIsIndyYXBwZXJSZXR1cm5WYWx1ZSIsInJldHVyblZhbHVlIiwicmV0dXJuVmFsdWVIb29rcyIsImdldEFwaUludGVyY2VwdG9ySG9va3MiLCJzbGljZSIsInNjb3BlZEludGVyY2VwdG9yIiwiaW52b2tlQXBpIiwiYXBpIiwicGFyYW1zIiwiaW52b2tlIiwicHJvbWlzZUludGVyY2VwdG9yIiwiY2F0Y2giLCJTWU5DX0FQSV9SRSIsIkNPTlRFWFRfQVBJX1JFIiwiQ09OVEVYVF9BUElfUkVfRVhDIiwiQVNZTkNfQVBJIiwiQ0FMTEJBQ0tfQVBJX1JFIiwiaXNDb250ZXh0QXBpIiwidGVzdCIsImlzU3luY0FwaSIsImlzQ2FsbGJhY2tBcGkiLCJoYW5kbGVQcm9taXNlIiwiZXJyIiwic2hvdWxkUHJvbWlzZSIsImZpbmFsbHkiLCJjb25zdHJ1Y3RvciIsInZhbHVlIiwicmVhc29uIiwicHJvbWlzaWZ5IiwicHJvbWlzZUFwaSIsInN1Y2Nlc3MiLCJmYWlsIiwiY29tcGxldGUiLCJyZWplY3QiLCJhc3NpZ24iLCJFUFMiLCJCQVNFX0RFVklDRV9XSURUSCIsImlzSU9TIiwiZGV2aWNlV2lkdGgiLCJkZXZpY2VEUFIiLCJjaGVja0RldmljZVdpZHRoIiwidHQiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwicGl4ZWxSYXRpbyIsIndpbmRvd1dpZHRoIiwidXB4MnB4IiwibnVtYmVyIiwibmV3RGV2aWNlV2lkdGgiLCJOdW1iZXIiLCJyZXN1bHQiLCJNYXRoIiwiZmxvb3IiLCJpbnRlcmNlcHRvcnMiLCJiYXNlQXBpIiwiZnJlZXplIiwiX19wcm90b19fIiwiRXZlbnRDaGFubmVsIiwiaWQiLCJldmVudHMiLCJsaXN0ZW5lciIsImVtaXRDYWNoZSIsIm9uIiwiZXZlbnROYW1lIiwiYXJncyIsImZucyIsIm9wdCIsImFwcGx5IiwiZmlsdGVyIiwidHlwZSIsIl9hZGRMaXN0ZW5lciIsIl9jbGVhckNhY2hlIiwiY2FjaGVBcmdzIiwiZW1pdCIsInNoaWZ0IiwiZXZlbnRDaGFubmVscyIsImV2ZW50Q2hhbm5lbFN0YWNrIiwiaW5pdEV2ZW50Q2hhbm5lbCIsImV2ZW50Q2hhbm5lbCIsImdldEV2ZW50Q2hhbm5lbCIsIm5hdmlnYXRlVG8iLCJmcm9tQXJncyIsInRvQXJncyIsInVybCIsImZyb21SZXMiLCJ0b1JlcyIsImZpbmRFeGlzdHNQYWdlSW5kZXgiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImxlbiIsInBhZ2UiLCIkcGFnZSIsImZ1bGxQYXRoIiwicmVkaXJlY3RUbyIsImV4aXN0cyIsImRlbHRhIiwiZXhpc3RzUGFnZUluZGV4IiwicHJldmlld0ltYWdlIiwiY3VycmVudEluZGV4IiwicGFyc2VJbnQiLCJjdXJyZW50IiwiaXNOYU4iLCJ1cmxzIiwiaXRlbSIsImluZGljYXRvciIsImxvb3AiLCJ0b2RvcyIsImNhbklVc2VzIiwicHJvdG9jb2xzIiwiY2hvb3NlSW1hZ2UiLCJzaXplVHlwZSIsImNvbm5lY3RTb2NrZXQiLCJjaG9vc2VWaWRlbyIsImNhbWVyYSIsInNjYW5Db2RlIiwib25seUZyb21DYW1lcmEiLCJzY2FuVHlwZSIsInN0YXJ0QWNjZWxlcm9tZXRlciIsImludGVydmFsIiwic2hvd1RvYXN0IiwiaW1hZ2UiLCJtYXNrIiwic2hvd0xvYWRpbmciLCJzaG93TW9kYWwiLCJjYW5jZWxDb2xvciIsImNvbmZpcm1Db2xvciIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1Db2xvciIsImxvZ2luIiwic2NvcGVzIiwidGltZW91dCIsImdldFVzZXJJbmZvIiwibGFuZyIsInJlcXVlc3RQYXltZW50IiwicGF5Iiwib3JkZXJJbmZvIiwiZ2V0RmlsZUluZm8iLCJkaWdlc3RBbGdvcml0aG0iLCJDQUxMQkFDS1MiLCJwcm9jZXNzQ2FsbGJhY2siLCJtZXRob2ROYW1lIiwicHJvY2Vzc1JldHVyblZhbHVlIiwicHJvY2Vzc0FyZ3MiLCJhcmdzT3B0aW9uIiwia2VlcEZyb21BcmdzIiwia2V5T3B0aW9uIiwiY29uc29sZSIsIndhcm4iLCJrZWVwUmV0dXJuVmFsdWUiLCJ3cmFwcGVyIiwicHJvdG9jb2wiLCJlcnJvciIsImFyZzEiLCJhcmcyIiwidG9kb0FwaXMiLCJUT0RPUyIsImNyZWF0ZVRvZG9BcGkiLCJ0b2RvQXBpIiwiZXJyTXNnIiwicHJvdmlkZXJzIiwib2F1dGgiLCJzaGFyZSIsInBheW1lbnQiLCJnZXRQcm92aWRlciIsInNlcnZpY2UiLCJwcm92aWRlciIsImV4dHJhQXBpIiwiZ2V0RW1pdHRlciIsIkVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiVnVlIiwiY3R4IiwiJG9uIiwiYXJndW1lbnRzIiwiJG9mZiIsIiRvbmNlIiwiJGVtaXQiLCJldmVudEFwaSIsIk1QUGFnZSIsIlBhZ2UiLCJNUENvbXBvbmVudCIsIkNvbXBvbmVudCIsImN1c3RvbWl6ZVJFIiwiY3VzdG9taXplIiwiaW5pdFRyaWdnZXJFdmVudCIsIm1wSW5zdGFuY2UiLCJvbGRUcmlnZ2VyRXZlbnQiLCJ0cmlnZ2VyRXZlbnQiLCJldmVudCIsImluaXRIb29rIiwib2xkSG9vayIsIlBBR0VfRVZFTlRfSE9PS1MiLCJpbml0TW9ja3MiLCJ2bSIsIm1vY2tzIiwiJG1wIiwibXBUeXBlIiwibW9jayIsImhhc0hvb2siLCJ2dWVPcHRpb25zIiwiZGVmYXVsdCIsImV4dGVuZE9wdGlvbnMiLCJzdXBlciIsIm1peGlucyIsImZpbmQiLCJtaXhpbiIsImluaXRIb29rcyIsIm1wT3B0aW9ucyIsIiR2bSIsIl9fY2FsbF9ob29rIiwiaW5pdFZ1ZUNvbXBvbmVudCIsIlZ1ZUNvbXBvbmVudCIsImV4dGVuZCIsImluaXRTbG90cyIsInZ1ZVNsb3RzIiwiJHNsb3RzIiwic2xvdE5hbWUiLCIkc2NvcGVkU2xvdHMiLCJpbml0VnVlSWRzIiwidnVlSWRzIiwic3BsaXQiLCJfJHZ1ZUlkIiwiXyR2dWVQaWQiLCJpbml0RGF0YSIsImNvbnRleHQiLCJtZXRob2RzIiwiZSIsInByb2Nlc3MiLCJWVUVfQVBQX0RFQlVHIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiX19saWZlY3ljbGVfaG9va3NfXyIsIlBST1BfVFlQRVMiLCJTdHJpbmciLCJCb29sZWFuIiwiY3JlYXRlT2JzZXJ2ZXIiLCJvYnNlcnZlciIsIm5ld1ZhbCIsIm9sZFZhbCIsImluaXRCZWhhdmlvcnMiLCJpbml0QmVoYXZpb3IiLCJ2dWVCZWhhdmlvcnMiLCJiZWhhdmlvcnMiLCJ2dWVFeHRlbmRzIiwiZXh0ZW5kcyIsInZ1ZU1peGlucyIsInZ1ZVByb3BzIiwicHJvcHMiLCJiZWhhdmlvciIsIkRhdGUiLCJwcm9wZXJ0aWVzIiwiaW5pdFByb3BlcnRpZXMiLCJ2dWVNaXhpbiIsInBhcnNlUHJvcFR5cGUiLCJkZWZhdWx0VmFsdWUiLCJmaWxlIiwiaXNCZWhhdmlvciIsInZ1ZUlkIiwiZ2VuZXJpYyIsInNldERhdGEiLCJvcHRzIiwid3JhcHBlciQxIiwibXAiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImRldGFpbCIsIm1hcmtlcklkIiwiZ2V0RXh0cmFWYWx1ZSIsImRhdGFQYXRoc0FycmF5IiwiZGF0YVBhdGhBcnJheSIsImRhdGFQYXRoIiwicHJvcFBhdGgiLCJ2YWx1ZVBhdGgiLCJ2Rm9yIiwiaXNJbnRlZ2VyIiwic3Vic3RyIiwiX19nZXRfdmFsdWUiLCJ2Rm9ySXRlbSIsInZGb3JLZXkiLCJwcm9jZXNzRXZlbnRFeHRyYSIsImV4dHJhIiwiZXh0cmFPYmoiLCJfX2FyZ3NfXyIsImdldE9iakJ5QXJyYXkiLCJhcnIiLCJlbGVtZW50IiwicHJvY2Vzc0V2ZW50QXJncyIsImlzQ3VzdG9tIiwiaXNDdXN0b21NUEV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJjb21UeXBlIiwicmV0IiwiYXJnIiwiT05DRSIsIkNVU1RPTSIsImlzTWF0Y2hFdmVudFR5cGUiLCJldmVudFR5cGUiLCJvcHRUeXBlIiwiZ2V0Q29udGV4dFZtIiwiJHBhcmVudCIsIiRvcHRpb25zIiwiJHNjb3BlIiwiaGFuZGxlRXZlbnQiLCJldmVudE9wdHMiLCJldmVudE9wdCIsImV2ZW50c0FycmF5IiwiY2hhckF0IiwiaXNPbmNlIiwiZXZlbnRBcnJheSIsImhhbmRsZXJDdHgiLCJoYW5kbGVyIiwiRXJyb3IiLCJvbmNlIiwicGFyc2VCYXNlQXBwIiwiaW5pdFJlZnMiLCJzdG9yZSIsIiRzdG9yZSIsIm1wSG9zdCIsImJlZm9yZUNyZWF0ZSIsImFwcE9wdGlvbnMiLCJvbkxhdW5jaCIsImFwcCIsImdsb2JhbERhdGEiLCJfaXNNb3VudGVkIiwiZmluZFZtQnlWdWVJZCIsInZ1ZVBpZCIsIiRjaGlsZHJlbiIsImNoaWxkVm0iLCJwYXJlbnRWbSIsIkJlaGF2aW9yIiwiaGFuZGxlTGluayIsInBhcmVudCIsImlzUGFnZSIsIl9fbm9kZWlkX18iLCJfX25vZGVJZF9fIiwibWlub3JWZXJzaW9uIiwiU0RLVmVyc2lvbiIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwiJHJlZnMiLCJjb21wb25lbnRzIiwic2VsZWN0QWxsQ29tcG9uZW50cyIsImNvbXBvbmVudCIsInJlZiIsImZvckNvbXBvbmVudHMiLCJpbnN0YW5jZXMiLCJpbml0UmVsYXRpb24iLCJub2RlSWQiLCJ3ZWJ2aWV3SWQiLCJfX3dlYnZpZXdJZF9fIiwiaGFuZGxlTGluayQxIiwiJHJvb3QiLCJwYXJzZUFwcCIsIl8kZmFsbGJhY2siLCJjcmVhdGVkIiwicm91dGUiLCJfX3JvdXRlX18iLCJfX2luaXRfaW5qZWN0aW9ucyIsIl9faW5pdF9wcm92aWRlIiwiY3JlYXRlQXBwIiwiZ2V0T3BlbmVyRXZlbnRDaGFubmVsIiwiX19ldmVudENoYW5uZWxfXyIsImNhbGxIb29rIiwiX19pZF9fIiwiQXBwIiwiZW5jb2RlUmVzZXJ2ZVJFIiwiZW5jb2RlUmVzZXJ2ZVJlcGxhY2VyIiwiY2hhckNvZGVBdCIsImNvbW1hUkUiLCJlbmNvZGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzdHJpbmdpZnlRdWVyeSIsImVuY29kZVN0ciIsIm1hcCIsInZhbCIsInVuZGVmaW5lZCIsInZhbDIiLCJqb2luIiwieCIsInBhcnNlQmFzZUNvbXBvbmVudCIsInZ1ZUNvbXBvbmVudE9wdGlvbnMiLCJtdWx0aXBsZVNsb3RzIiwiYWRkR2xvYmFsQ2xhc3MiLCJjb21wb25lbnRPcHRpb25zIiwiX19maWxlIiwibGlmZXRpbWVzIiwiYXR0YWNoZWQiLCJwcm9wc0RhdGEiLCIkbW91bnQiLCJyZWFkeSIsImRldGFjaGVkIiwiJGRlc3Ryb3kiLCJwYWdlTGlmZXRpbWVzIiwic2hvdyIsImhpZGUiLCJyZXNpemUiLCJzaXplIiwiX19sIiwiX19lIiwiZXh0ZXJuYWxDbGFzc2VzIiwid3hzQ2FsbE1ldGhvZHMiLCJjYWxsTWV0aG9kIiwicGFyc2VDb21wb25lbnQiLCJob29rcyQxIiwicGFyc2VCYXNlUGFnZSIsInZ1ZVBhZ2VPcHRpb25zIiwicGFnZU9wdGlvbnMiLCJvbkxvYWQiLCJxdWVyeSIsImNvcHlRdWVyeSIsImlzIiwicGFyc2VQYWdlIiwiY3JlYXRlUGFnZSIsImNyZWF0ZUNvbXBvbmVudCIsImNhbklVc2VBcGkiLCJhcGlOYW1lIiwiY2FuSVVzZSIsInVuaSIsIlByb3h5Iiwic2V0IiwidW5pJDEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7K0xBQUEscUU7O0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJD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QUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLG9CQUFvQixFQUFFO0FBQ3JEO0FBQ0Esa0NBQWtDLE9BQU87QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFNBQVMscUJBQXFCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QztBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLE9BQU87QUFDckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLG9DQUFvQztBQUNwQztBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBRVE7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNMLEdBQUcsTUFBTSxFQUdOO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLEtBQXFDO0FBQy9DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLLDJDQUEyQyw4QkFBOEIsRUFBRTs7QUFFaEY7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFxQztBQUNyRDtBQUNBLG9CQUFvQixTQUFJO0FBQ3hCO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxTQUFTO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLE9BQU87QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7O0FBRTFCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSxJQUFxQztBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix5QkFBeUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsT0FBTztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQixFQUFFOztBQUVwRDtBQUNBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxLQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVSxLQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsS0FBcUM7QUFDekQ7QUFDQSxNQUFNLFNBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsTUFBTSxLQUFxQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUMscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0EsR0FBRztBQUNILHlCQUF5QjtBQUN6QjtBQUNBLHNCQUFzQixpQ0FBaUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSyxNQUFNLEVBRU47QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLEtBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssVUFBVSxJQUFxQztBQUNwRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9CQUFvQjtBQUN6QztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsOEJBQThCO0FBQzlCLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLEtBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQSxLQUFLLE1BQU0sRUFFTjtBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBLHNDQUFzQztBQUN0Qyw4Qzs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sS0FBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsS0FBcUM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFlBQVksS0FBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQywyQkFBMkIsRUFBRTtBQUN2RSxLQUFLO0FBQ0w7QUFDQSwwQ0FBMEMsNEJBQTRCLEVBQUU7QUFDeEUsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixlQUFlO0FBQzlDLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tb24vdmVuZG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xyXG5cclxuY29uc3QgX3RvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcclxuY29uc3QgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xyXG5cclxuZnVuY3Rpb24gaXNGbiAoZm4pIHtcclxuICByZXR1cm4gdHlwZW9mIGZuID09PSAnZnVuY3Rpb24nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyIChzdHIpIHtcclxuICByZXR1cm4gdHlwZW9mIHN0ciA9PT0gJ3N0cmluZydcclxufVxyXG5cclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XHJcbiAgcmV0dXJuIF90b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IE9iamVjdF0nXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc093biAob2JqLCBrZXkpIHtcclxuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcclxufVxyXG5cclxuZnVuY3Rpb24gbm9vcCAoKSB7fVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZSBhIGNhY2hlZCB2ZXJzaW9uIG9mIGEgcHVyZSBmdW5jdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcclxuICBjb25zdCBjYWNoZSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhY2hlZEZuIChzdHIpIHtcclxuICAgIGNvbnN0IGhpdCA9IGNhY2hlW3N0cl07XHJcbiAgICByZXR1cm4gaGl0IHx8IChjYWNoZVtzdHJdID0gZm4oc3RyKSlcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYW1lbGl6ZSBhIGh5cGhlbi1kZWxpbWl0ZWQgc3RyaW5nLlxyXG4gKi9cclxuY29uc3QgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcclxuY29uc3QgY2FtZWxpemUgPSBjYWNoZWQoKHN0cikgPT4ge1xyXG4gIHJldHVybiBzdHIucmVwbGFjZShjYW1lbGl6ZVJFLCAoXywgYykgPT4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnKVxyXG59KTtcclxuXHJcbmNvbnN0IEhPT0tTID0gW1xyXG4gICdpbnZva2UnLFxyXG4gICdzdWNjZXNzJyxcclxuICAnZmFpbCcsXHJcbiAgJ2NvbXBsZXRlJyxcclxuICAncmV0dXJuVmFsdWUnXHJcbl07XHJcblxyXG5jb25zdCBnbG9iYWxJbnRlcmNlcHRvcnMgPSB7fTtcclxuY29uc3Qgc2NvcGVkSW50ZXJjZXB0b3JzID0ge307XHJcblxyXG5mdW5jdGlvbiBtZXJnZUhvb2sgKHBhcmVudFZhbCwgY2hpbGRWYWwpIHtcclxuICBjb25zdCByZXMgPSBjaGlsZFZhbFxyXG4gICAgPyBwYXJlbnRWYWxcclxuICAgICAgPyBwYXJlbnRWYWwuY29uY2F0KGNoaWxkVmFsKVxyXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGRWYWwpXHJcbiAgICAgICAgPyBjaGlsZFZhbCA6IFtjaGlsZFZhbF1cclxuICAgIDogcGFyZW50VmFsO1xyXG4gIHJldHVybiByZXNcclxuICAgID8gZGVkdXBlSG9va3MocmVzKVxyXG4gICAgOiByZXNcclxufVxyXG5cclxuZnVuY3Rpb24gZGVkdXBlSG9va3MgKGhvb2tzKSB7XHJcbiAgY29uc3QgcmVzID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKHJlcy5pbmRleE9mKGhvb2tzW2ldKSA9PT0gLTEpIHtcclxuICAgICAgcmVzLnB1c2goaG9va3NbaV0pO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gcmVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUhvb2sgKGhvb2tzLCBob29rKSB7XHJcbiAgY29uc3QgaW5kZXggPSBob29rcy5pbmRleE9mKGhvb2spO1xyXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgIGhvb2tzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZUludGVyY2VwdG9ySG9vayAoaW50ZXJjZXB0b3IsIG9wdGlvbikge1xyXG4gIE9iamVjdC5rZXlzKG9wdGlvbikuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChIT09LUy5pbmRleE9mKGhvb2spICE9PSAtMSAmJiBpc0ZuKG9wdGlvbltob29rXSkpIHtcclxuICAgICAgaW50ZXJjZXB0b3JbaG9va10gPSBtZXJnZUhvb2soaW50ZXJjZXB0b3JbaG9va10sIG9wdGlvbltob29rXSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUludGVyY2VwdG9ySG9vayAoaW50ZXJjZXB0b3IsIG9wdGlvbikge1xyXG4gIGlmICghaW50ZXJjZXB0b3IgfHwgIW9wdGlvbikge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIE9iamVjdC5rZXlzKG9wdGlvbikuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChIT09LUy5pbmRleE9mKGhvb2spICE9PSAtMSAmJiBpc0ZuKG9wdGlvbltob29rXSkpIHtcclxuICAgICAgcmVtb3ZlSG9vayhpbnRlcmNlcHRvcltob29rXSwgb3B0aW9uW2hvb2tdKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSW50ZXJjZXB0b3IgKG1ldGhvZCwgb3B0aW9uKSB7XHJcbiAgaWYgKHR5cGVvZiBtZXRob2QgPT09ICdzdHJpbmcnICYmIGlzUGxhaW5PYmplY3Qob3B0aW9uKSkge1xyXG4gICAgbWVyZ2VJbnRlcmNlcHRvckhvb2soc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF0gfHwgKHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdID0ge30pLCBvcHRpb24pO1xyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XHJcbiAgICBtZXJnZUludGVyY2VwdG9ySG9vayhnbG9iYWxJbnRlcmNlcHRvcnMsIG1ldGhvZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVJbnRlcmNlcHRvciAobWV0aG9kLCBvcHRpb24pIHtcclxuICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gJ3N0cmluZycpIHtcclxuICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdGlvbikpIHtcclxuICAgICAgcmVtb3ZlSW50ZXJjZXB0b3JIb29rKHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdLCBvcHRpb24pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHNjb3BlZEludGVyY2VwdG9yc1ttZXRob2RdO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChtZXRob2QpKSB7XHJcbiAgICByZW1vdmVJbnRlcmNlcHRvckhvb2soZ2xvYmFsSW50ZXJjZXB0b3JzLCBtZXRob2QpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlckhvb2sgKGhvb2spIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIHJldHVybiBob29rKGRhdGEpIHx8IGRhdGFcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUHJvbWlzZSAob2JqKSB7XHJcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbidcclxufVxyXG5cclxuZnVuY3Rpb24gcXVldWUgKGhvb2tzLCBkYXRhKSB7XHJcbiAgbGV0IHByb21pc2UgPSBmYWxzZTtcclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGhvb2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBob29rID0gaG9va3NbaV07XHJcbiAgICBpZiAocHJvbWlzZSkge1xyXG4gICAgICBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKHdyYXBwZXJIb29rKGhvb2spKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGhvb2soZGF0YSk7XHJcbiAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xyXG4gICAgICAgIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUocmVzKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVzID09PSBmYWxzZSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICB0aGVuICgpIHt9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwcm9taXNlIHx8IHtcclxuICAgIHRoZW4gKGNhbGxiYWNrKSB7XHJcbiAgICAgIHJldHVybiBjYWxsYmFjayhkYXRhKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlck9wdGlvbnMgKGludGVyY2VwdG9yLCBvcHRpb25zID0ge30pIHtcclxuICBbJ3N1Y2Nlc3MnLCAnZmFpbCcsICdjb21wbGV0ZSddLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvcltuYW1lXSkpIHtcclxuICAgICAgY29uc3Qgb2xkQ2FsbGJhY2sgPSBvcHRpb25zW25hbWVdO1xyXG4gICAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gY2FsbGJhY2tJbnRlcmNlcHRvciAocmVzKSB7XHJcbiAgICAgICAgcXVldWUoaW50ZXJjZXB0b3JbbmFtZV0sIHJlcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1taXhlZC1vcGVyYXRvcnMgKi9cclxuICAgICAgICAgIHJldHVybiBpc0ZuKG9sZENhbGxiYWNrKSAmJiBvbGRDYWxsYmFjayhyZXMpIHx8IHJlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBvcHRpb25zXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHdyYXBwZXJSZXR1cm5WYWx1ZSAobWV0aG9kLCByZXR1cm5WYWx1ZSkge1xyXG4gIGNvbnN0IHJldHVyblZhbHVlSG9va3MgPSBbXTtcclxuICBpZiAoQXJyYXkuaXNBcnJheShnbG9iYWxJbnRlcmNlcHRvcnMucmV0dXJuVmFsdWUpKSB7XHJcbiAgICByZXR1cm5WYWx1ZUhvb2tzLnB1c2goLi4uZ2xvYmFsSW50ZXJjZXB0b3JzLnJldHVyblZhbHVlKTtcclxuICB9XHJcbiAgY29uc3QgaW50ZXJjZXB0b3IgPSBzY29wZWRJbnRlcmNlcHRvcnNbbWV0aG9kXTtcclxuICBpZiAoaW50ZXJjZXB0b3IgJiYgQXJyYXkuaXNBcnJheShpbnRlcmNlcHRvci5yZXR1cm5WYWx1ZSkpIHtcclxuICAgIHJldHVyblZhbHVlSG9va3MucHVzaCguLi5pbnRlcmNlcHRvci5yZXR1cm5WYWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVyblZhbHVlSG9va3MuZm9yRWFjaChob29rID0+IHtcclxuICAgIHJldHVyblZhbHVlID0gaG9vayhyZXR1cm5WYWx1ZSkgfHwgcmV0dXJuVmFsdWU7XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHJldHVyblZhbHVlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEFwaUludGVyY2VwdG9ySG9va3MgKG1ldGhvZCkge1xyXG4gIGNvbnN0IGludGVyY2VwdG9yID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICBPYmplY3Qua2V5cyhnbG9iYWxJbnRlcmNlcHRvcnMpLmZvckVhY2goaG9vayA9PiB7XHJcbiAgICBpZiAoaG9vayAhPT0gJ3JldHVyblZhbHVlJykge1xyXG4gICAgICBpbnRlcmNlcHRvcltob29rXSA9IGdsb2JhbEludGVyY2VwdG9yc1tob29rXS5zbGljZSgpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IHNjb3BlZEludGVyY2VwdG9yID0gc2NvcGVkSW50ZXJjZXB0b3JzW21ldGhvZF07XHJcbiAgaWYgKHNjb3BlZEludGVyY2VwdG9yKSB7XHJcbiAgICBPYmplY3Qua2V5cyhzY29wZWRJbnRlcmNlcHRvcikuZm9yRWFjaChob29rID0+IHtcclxuICAgICAgaWYgKGhvb2sgIT09ICdyZXR1cm5WYWx1ZScpIHtcclxuICAgICAgICBpbnRlcmNlcHRvcltob29rXSA9IChpbnRlcmNlcHRvcltob29rXSB8fCBbXSkuY29uY2F0KHNjb3BlZEludGVyY2VwdG9yW2hvb2tdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBpbnRlcmNlcHRvclxyXG59XHJcblxyXG5mdW5jdGlvbiBpbnZva2VBcGkgKG1ldGhvZCwgYXBpLCBvcHRpb25zLCAuLi5wYXJhbXMpIHtcclxuICBjb25zdCBpbnRlcmNlcHRvciA9IGdldEFwaUludGVyY2VwdG9ySG9va3MobWV0aG9kKTtcclxuICBpZiAoaW50ZXJjZXB0b3IgJiYgT2JqZWN0LmtleXMoaW50ZXJjZXB0b3IpLmxlbmd0aCkge1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoaW50ZXJjZXB0b3IuaW52b2tlKSkge1xyXG4gICAgICBjb25zdCByZXMgPSBxdWV1ZShpbnRlcmNlcHRvci5pbnZva2UsIG9wdGlvbnMpO1xyXG4gICAgICByZXR1cm4gcmVzLnRoZW4oKG9wdGlvbnMpID0+IHtcclxuICAgICAgICByZXR1cm4gYXBpKHdyYXBwZXJPcHRpb25zKGludGVyY2VwdG9yLCBvcHRpb25zKSwgLi4ucGFyYW1zKVxyXG4gICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGFwaSh3cmFwcGVyT3B0aW9ucyhpbnRlcmNlcHRvciwgb3B0aW9ucyksIC4uLnBhcmFtcylcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIGFwaShvcHRpb25zLCAuLi5wYXJhbXMpXHJcbn1cclxuXHJcbmNvbnN0IHByb21pc2VJbnRlcmNlcHRvciA9IHtcclxuICByZXR1cm5WYWx1ZSAocmVzKSB7XHJcbiAgICBpZiAoIWlzUHJvbWlzZShyZXMpKSB7XHJcbiAgICAgIHJldHVybiByZXNcclxuICAgIH1cclxuICAgIHJldHVybiByZXMudGhlbihyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzWzFdXHJcbiAgICB9KS5jYXRjaChyZXMgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzWzBdXHJcbiAgICB9KVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFNZTkNfQVBJX1JFID1cclxuICAvXlxcJHxzZW5kTmF0aXZlRXZlbnR8cmVzdG9yZUdsb2JhbHxnZXRDdXJyZW50U3ViTlZ1ZXxnZXRNZW51QnV0dG9uQm91bmRpbmdDbGllbnRSZWN0fF5yZXBvcnR8aW50ZXJjZXB0b3JzfEludGVyY2VwdG9yJHxnZXRTdWJOVnVlQnlJZHxyZXF1aXJlTmF0aXZlUGx1Z2lufHVweDJweHxoaWRlS2V5Ym9hcmR8Y2FuSVVzZXxeY3JlYXRlfFN5bmMkfE1hbmFnZXIkfGJhc2U2NFRvQXJyYXlCdWZmZXJ8YXJyYXlCdWZmZXJUb0Jhc2U2NC87XHJcblxyXG5jb25zdCBDT05URVhUX0FQSV9SRSA9IC9eY3JlYXRlfE1hbmFnZXIkLztcclxuXHJcbi8vIENvbnRleHTkvovlpJbmg4XlhrVcclxuY29uc3QgQ09OVEVYVF9BUElfUkVfRVhDID0gWydjcmVhdGVCTEVDb25uZWN0aW9uJ107XHJcblxyXG4vLyDlkIzmraXkvovlpJbmg4XlhrVcclxuY29uc3QgQVNZTkNfQVBJID0gWydjcmVhdGVCTEVDb25uZWN0aW9uJ107XHJcblxyXG5jb25zdCBDQUxMQkFDS19BUElfUkUgPSAvXm9ufF5vZmYvO1xyXG5cclxuZnVuY3Rpb24gaXNDb250ZXh0QXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIENPTlRFWFRfQVBJX1JFLnRlc3QobmFtZSkgJiYgQ09OVEVYVF9BUElfUkVfRVhDLmluZGV4T2YobmFtZSkgPT09IC0xXHJcbn1cclxuZnVuY3Rpb24gaXNTeW5jQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIFNZTkNfQVBJX1JFLnRlc3QobmFtZSkgJiYgQVNZTkNfQVBJLmluZGV4T2YobmFtZSkgPT09IC0xXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ2FsbGJhY2tBcGkgKG5hbWUpIHtcclxuICByZXR1cm4gQ0FMTEJBQ0tfQVBJX1JFLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ29uUHVzaCdcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlUHJvbWlzZSAocHJvbWlzZSkge1xyXG4gIHJldHVybiBwcm9taXNlLnRoZW4oZGF0YSA9PiB7XHJcbiAgICByZXR1cm4gW251bGwsIGRhdGFdXHJcbiAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gW2Vycl0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3VsZFByb21pc2UgKG5hbWUpIHtcclxuICBpZiAoXHJcbiAgICBpc0NvbnRleHRBcGkobmFtZSkgfHxcclxuICAgIGlzU3luY0FwaShuYW1lKSB8fFxyXG4gICAgaXNDYWxsYmFja0FwaShuYW1lKVxyXG4gICkge1xyXG4gICAgcmV0dXJuIGZhbHNlXHJcbiAgfVxyXG4gIHJldHVybiB0cnVlXHJcbn1cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuaWYgKCFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XHJcbiAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xyXG4gICAgY29uc3QgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3I7XHJcbiAgICByZXR1cm4gdGhpcy50aGVuKFxyXG4gICAgICB2YWx1ZSA9PiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB2YWx1ZSksXHJcbiAgICAgIHJlYXNvbiA9PiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgdGhyb3cgcmVhc29uXHJcbiAgICAgIH0pXHJcbiAgICApXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvbWlzaWZ5IChuYW1lLCBhcGkpIHtcclxuICBpZiAoIXNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgIHJldHVybiBhcGlcclxuICB9XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHByb21pc2VBcGkgKG9wdGlvbnMgPSB7fSwgLi4ucGFyYW1zKSB7XHJcbiAgICBpZiAoaXNGbihvcHRpb25zLnN1Y2Nlc3MpIHx8IGlzRm4ob3B0aW9ucy5mYWlsKSB8fCBpc0ZuKG9wdGlvbnMuY29tcGxldGUpKSB7XHJcbiAgICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaW52b2tlQXBpKG5hbWUsIGFwaSwgb3B0aW9ucywgLi4ucGFyYW1zKSlcclxuICAgIH1cclxuICAgIHJldHVybiB3cmFwcGVyUmV0dXJuVmFsdWUobmFtZSwgaGFuZGxlUHJvbWlzZShuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGludm9rZUFwaShuYW1lLCBhcGksIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICB9KSwgLi4ucGFyYW1zKTtcclxuICAgIH0pKSlcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IEVQUyA9IDFlLTQ7XHJcbmNvbnN0IEJBU0VfREVWSUNFX1dJRFRIID0gNzUwO1xyXG5sZXQgaXNJT1MgPSBmYWxzZTtcclxubGV0IGRldmljZVdpZHRoID0gMDtcclxubGV0IGRldmljZURQUiA9IDA7XHJcblxyXG5mdW5jdGlvbiBjaGVja0RldmljZVdpZHRoICgpIHtcclxuICBjb25zdCB7XHJcbiAgICBwbGF0Zm9ybSxcclxuICAgIHBpeGVsUmF0aW8sXHJcbiAgICB3aW5kb3dXaWR0aFxyXG4gIH0gPSB0dC5nZXRTeXN0ZW1JbmZvU3luYygpOyAvLyB1bmk9PnR0IHJ1bnRpbWUg57yW6K+R55uu5qCH5pivIHVuaSDlr7nosaHvvIzlhoXpg6jkuI3lhYHorrjnm7TmjqXkvb/nlKggdW5pXHJcblxyXG4gIGRldmljZVdpZHRoID0gd2luZG93V2lkdGg7XHJcbiAgZGV2aWNlRFBSID0gcGl4ZWxSYXRpbztcclxuICBpc0lPUyA9IHBsYXRmb3JtID09PSAnaW9zJztcclxufVxyXG5cclxuZnVuY3Rpb24gdXB4MnB4IChudW1iZXIsIG5ld0RldmljZVdpZHRoKSB7XHJcbiAgaWYgKGRldmljZVdpZHRoID09PSAwKSB7XHJcbiAgICBjaGVja0RldmljZVdpZHRoKCk7XHJcbiAgfVxyXG5cclxuICBudW1iZXIgPSBOdW1iZXIobnVtYmVyKTtcclxuICBpZiAobnVtYmVyID09PSAwKSB7XHJcbiAgICByZXR1cm4gMFxyXG4gIH1cclxuICBsZXQgcmVzdWx0ID0gKG51bWJlciAvIEJBU0VfREVWSUNFX1dJRFRIKSAqIChuZXdEZXZpY2VXaWR0aCB8fCBkZXZpY2VXaWR0aCk7XHJcbiAgaWYgKHJlc3VsdCA8IDApIHtcclxuICAgIHJlc3VsdCA9IC1yZXN1bHQ7XHJcbiAgfVxyXG4gIHJlc3VsdCA9IE1hdGguZmxvb3IocmVzdWx0ICsgRVBTKTtcclxuICBpZiAocmVzdWx0ID09PSAwKSB7XHJcbiAgICBpZiAoZGV2aWNlRFBSID09PSAxIHx8ICFpc0lPUykge1xyXG4gICAgICByZXN1bHQgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gMC41O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVtYmVyIDwgMCA/IC1yZXN1bHQgOiByZXN1bHRcclxufVxyXG5cclxuY29uc3QgaW50ZXJjZXB0b3JzID0ge1xyXG4gIHByb21pc2VJbnRlcmNlcHRvclxyXG59O1xyXG5cclxudmFyIGJhc2VBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gIHVweDJweDogdXB4MnB4LFxyXG4gIGFkZEludGVyY2VwdG9yOiBhZGRJbnRlcmNlcHRvcixcclxuICByZW1vdmVJbnRlcmNlcHRvcjogcmVtb3ZlSW50ZXJjZXB0b3IsXHJcbiAgaW50ZXJjZXB0b3JzOiBpbnRlcmNlcHRvcnNcclxufSk7XHJcblxyXG5jbGFzcyBFdmVudENoYW5uZWwge1xyXG4gIGNvbnN0cnVjdG9yIChpZCwgZXZlbnRzKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLmxpc3RlbmVyID0ge307XHJcbiAgICB0aGlzLmVtaXRDYWNoZSA9IHt9O1xyXG4gICAgaWYgKGV2ZW50cykge1xyXG4gICAgICBPYmplY3Qua2V5cyhldmVudHMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgICAgdGhpcy5vbihuYW1lLCBldmVudHNbbmFtZV0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGVtaXQgKGV2ZW50TmFtZSwgLi4uYXJncykge1xyXG4gICAgY29uc3QgZm5zID0gdGhpcy5saXN0ZW5lcltldmVudE5hbWVdO1xyXG4gICAgaWYgKCFmbnMpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLmVtaXRDYWNoZVtldmVudE5hbWVdIHx8ICh0aGlzLmVtaXRDYWNoZVtldmVudE5hbWVdID0gW10pKS5wdXNoKGFyZ3MpXHJcbiAgICB9XHJcbiAgICBmbnMuZm9yRWFjaChvcHQgPT4ge1xyXG4gICAgICBvcHQuZm4uYXBwbHkob3B0LmZuLCBhcmdzKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5saXN0ZW5lcltldmVudE5hbWVdID0gZm5zLmZpbHRlcihvcHQgPT4gb3B0LnR5cGUgIT09ICdvbmNlJyk7XHJcbiAgfVxyXG5cclxuICBvbiAoZXZlbnROYW1lLCBmbikge1xyXG4gICAgdGhpcy5fYWRkTGlzdGVuZXIoZXZlbnROYW1lLCAnb24nLCBmbik7XHJcbiAgICB0aGlzLl9jbGVhckNhY2hlKGV2ZW50TmFtZSk7XHJcbiAgfVxyXG5cclxuICBvbmNlIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICB0aGlzLl9hZGRMaXN0ZW5lcihldmVudE5hbWUsICdvbmNlJywgZm4pO1xyXG4gICAgdGhpcy5fY2xlYXJDYWNoZShldmVudE5hbWUpO1xyXG4gIH1cclxuXHJcbiAgb2ZmIChldmVudE5hbWUsIGZuKSB7XHJcbiAgICBjb25zdCBmbnMgPSB0aGlzLmxpc3RlbmVyW2V2ZW50TmFtZV07XHJcbiAgICBpZiAoIWZucykge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChmbikge1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZucy5sZW5ndGg7KSB7XHJcbiAgICAgICAgaWYgKGZuc1tpXS5mbiA9PT0gZm4pIHtcclxuICAgICAgICAgIGZucy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICBpLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGkrKztcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZGVsZXRlIHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9jbGVhckNhY2hlIChldmVudE5hbWUpIHtcclxuICAgIGNvbnN0IGNhY2hlQXJncyA9IHRoaXMuZW1pdENhY2hlW2V2ZW50TmFtZV07XHJcbiAgICBpZiAoY2FjaGVBcmdzKSB7XHJcbiAgICAgIGZvciAoOyBjYWNoZUFyZ3MubGVuZ3RoID4gMDspIHtcclxuICAgICAgICB0aGlzLmVtaXQuYXBwbHkodGhpcywgW2V2ZW50TmFtZV0uY29uY2F0KGNhY2hlQXJncy5zaGlmdCgpKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hZGRMaXN0ZW5lciAoZXZlbnROYW1lLCB0eXBlLCBmbikge1xyXG4gICAgKHRoaXMubGlzdGVuZXJbZXZlbnROYW1lXSB8fCAodGhpcy5saXN0ZW5lcltldmVudE5hbWVdID0gW10pKS5wdXNoKHtcclxuICAgICAgZm4sXHJcbiAgICAgIHR5cGVcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZXZlbnRDaGFubmVscyA9IHt9O1xyXG5cclxuY29uc3QgZXZlbnRDaGFubmVsU3RhY2sgPSBbXTtcclxuXHJcbmxldCBpZCA9IDA7XHJcblxyXG5mdW5jdGlvbiBpbml0RXZlbnRDaGFubmVsIChldmVudHMsIGNhY2hlID0gdHJ1ZSkge1xyXG4gIGlkKys7XHJcbiAgY29uc3QgZXZlbnRDaGFubmVsID0gbmV3IEV2ZW50Q2hhbm5lbChpZCwgZXZlbnRzKTtcclxuICBpZiAoY2FjaGUpIHtcclxuICAgIGV2ZW50Q2hhbm5lbHNbaWRdID0gZXZlbnRDaGFubmVsO1xyXG4gICAgZXZlbnRDaGFubmVsU3RhY2sucHVzaChldmVudENoYW5uZWwpO1xyXG4gIH1cclxuICByZXR1cm4gZXZlbnRDaGFubmVsXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEV2ZW50Q2hhbm5lbCAoaWQpIHtcclxuICBpZiAoaWQpIHtcclxuICAgIGNvbnN0IGV2ZW50Q2hhbm5lbCA9IGV2ZW50Q2hhbm5lbHNbaWRdO1xyXG4gICAgZGVsZXRlIGV2ZW50Q2hhbm5lbHNbaWRdO1xyXG4gICAgcmV0dXJuIGV2ZW50Q2hhbm5lbFxyXG4gIH1cclxuICByZXR1cm4gZXZlbnRDaGFubmVsU3RhY2suc2hpZnQoKVxyXG59XHJcblxyXG52YXIgbmF2aWdhdGVUbyA9IHtcclxuICBhcmdzIChmcm9tQXJncywgdG9BcmdzKSB7XHJcbiAgICBjb25zdCBpZCA9IGluaXRFdmVudENoYW5uZWwoZnJvbUFyZ3MuZXZlbnRzKS5pZDtcclxuICAgIGlmIChmcm9tQXJncy51cmwpIHtcclxuICAgICAgZnJvbUFyZ3MudXJsID0gZnJvbUFyZ3MudXJsICsgKGZyb21BcmdzLnVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdfX2lkX189JyArIGlkO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmV0dXJuVmFsdWUgKGZyb21SZXMsIHRvUmVzKSB7XHJcbiAgICBmcm9tUmVzLmV2ZW50Q2hhbm5lbCA9IGdldEV2ZW50Q2hhbm5lbCgpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIGZpbmRFeGlzdHNQYWdlSW5kZXggKHVybCkge1xyXG4gIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgbGV0IGxlbiA9IHBhZ2VzLmxlbmd0aDtcclxuICB3aGlsZSAobGVuLS0pIHtcclxuICAgIGNvbnN0IHBhZ2UgPSBwYWdlc1tsZW5dO1xyXG4gICAgaWYgKHBhZ2UuJHBhZ2UgJiYgcGFnZS4kcGFnZS5mdWxsUGF0aCA9PT0gdXJsKSB7XHJcbiAgICAgIHJldHVybiBsZW5cclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIC0xXHJcbn1cclxuXHJcbnZhciByZWRpcmVjdFRvID0ge1xyXG4gIG5hbWUgKGZyb21BcmdzKSB7XHJcbiAgICBpZiAoZnJvbUFyZ3MuZXhpc3RzID09PSAnYmFjaycgJiYgZnJvbUFyZ3MuZGVsdGEpIHtcclxuICAgICAgcmV0dXJuICduYXZpZ2F0ZUJhY2snXHJcbiAgICB9XHJcbiAgICByZXR1cm4gJ3JlZGlyZWN0VG8nXHJcbiAgfSxcclxuICBhcmdzIChmcm9tQXJncykge1xyXG4gICAgaWYgKGZyb21BcmdzLmV4aXN0cyA9PT0gJ2JhY2snICYmIGZyb21BcmdzLnVybCkge1xyXG4gICAgICBjb25zdCBleGlzdHNQYWdlSW5kZXggPSBmaW5kRXhpc3RzUGFnZUluZGV4KGZyb21BcmdzLnVybCk7XHJcbiAgICAgIGlmIChleGlzdHNQYWdlSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY29uc3QgZGVsdGEgPSBnZXRDdXJyZW50UGFnZXMoKS5sZW5ndGggLSAxIC0gZXhpc3RzUGFnZUluZGV4O1xyXG4gICAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgIGZyb21BcmdzLmRlbHRhID0gZGVsdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxudmFyIHByZXZpZXdJbWFnZSA9IHtcclxuICBhcmdzIChmcm9tQXJncykge1xyXG4gICAgbGV0IGN1cnJlbnRJbmRleCA9IHBhcnNlSW50KGZyb21BcmdzLmN1cnJlbnQpO1xyXG4gICAgaWYgKGlzTmFOKGN1cnJlbnRJbmRleCkpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBjb25zdCB1cmxzID0gZnJvbUFyZ3MudXJscztcclxuICAgIGlmICghQXJyYXkuaXNBcnJheSh1cmxzKSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGNvbnN0IGxlbiA9IHVybHMubGVuZ3RoO1xyXG4gICAgaWYgKCFsZW4pIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEluZGV4IDwgMCkge1xyXG4gICAgICBjdXJyZW50SW5kZXggPSAwO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50SW5kZXggPj0gbGVuKSB7XHJcbiAgICAgIGN1cnJlbnRJbmRleCA9IGxlbiAtIDE7XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudEluZGV4ID4gMCkge1xyXG4gICAgICBmcm9tQXJncy5jdXJyZW50ID0gdXJsc1tjdXJyZW50SW5kZXhdO1xyXG4gICAgICBmcm9tQXJncy51cmxzID0gdXJscy5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0sIGluZGV4KSA9PiBpbmRleCA8IGN1cnJlbnRJbmRleCA/IGl0ZW0gIT09IHVybHNbY3VycmVudEluZGV4XSA6IHRydWVcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGZyb21BcmdzLmN1cnJlbnQgPSB1cmxzWzBdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaW5kaWNhdG9yOiBmYWxzZSxcclxuICAgICAgbG9vcDogZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyDkuI3mlK/mjIHnmoQgQVBJIOWIl+ihqFxyXG5jb25zdCB0b2RvcyA9IFtcclxuICAncHJlbG9hZFBhZ2UnLFxyXG4gICd1blByZWxvYWRQYWdlJyxcclxuICAnbG9hZFN1YlBhY2thZ2UnXHJcbiAgLy8gJ2NyZWF0ZUNhbWVyYUNvbnRleHQnLFxyXG4gIC8vICdjcmVhdGVMaXZlUGxheWVyQ29udGV4dCcsXHJcbiAgLy8gJ2dldFNhdmVkRmlsZUluZm8nLFxyXG4gIC8vICdjcmVhdGVNYXBDb250ZXh0JyxcclxuICAvLyAnb25NZW1vcnlXYXJuaW5nJyxcclxuICAvLyAnb25HeXJvc2NvcGVDaGFuZ2UnLFxyXG4gIC8vICdzdGFydEd5cm9zY29wZScsXHJcbiAgLy8gJ3N0b3BHeXJvc2NvcGUnLFxyXG4gIC8vICdzZXRTY3JlZW5CcmlnaHRuZXNzJyxcclxuICAvLyAnZ2V0U2NyZWVuQnJpZ2h0bmVzcycsXHJcbiAgLy8gJ2FkZFBob25lQ29udGFjdCcsXHJcbiAgLy8gJ29wZW5CbHVldG9vdGhBZGFwdGVyJyxcclxuICAvLyAnc3RhcnRCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5JyxcclxuICAvLyAnb25CbHVldG9vdGhEZXZpY2VGb3VuZCcsXHJcbiAgLy8gJ3N0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5JyxcclxuICAvLyAnb25CbHVldG9vdGhBZGFwdGVyU3RhdGVDaGFuZ2UnLFxyXG4gIC8vICdnZXRDb25uZWN0ZWRCbHVldG9vdGhEZXZpY2VzJyxcclxuICAvLyAnZ2V0Qmx1ZXRvb3RoRGV2aWNlcycsXHJcbiAgLy8gJ2dldEJsdWV0b290aEFkYXB0ZXJTdGF0ZScsXHJcbiAgLy8gJ2Nsb3NlQmx1ZXRvb3RoQWRhcHRlcicsXHJcbiAgLy8gJ3dyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZScsXHJcbiAgLy8gJ3JlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlJyxcclxuICAvLyAnb25CTEVDb25uZWN0aW9uU3RhdGVDaGFuZ2UnLFxyXG4gIC8vICdvbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UnLFxyXG4gIC8vICdub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlJyxcclxuICAvLyAnZ2V0QkxFRGV2aWNlU2VydmljZXMnLFxyXG4gIC8vICdnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3MnLFxyXG4gIC8vICdjcmVhdGVCTEVDb25uZWN0aW9uJyxcclxuICAvLyAnY2xvc2VCTEVDb25uZWN0aW9uJyxcclxuICAvLyAnb25CZWFjb25TZXJ2aWNlQ2hhbmdlJyxcclxuICAvLyAnb25CZWFjb25VcGRhdGUnLFxyXG4gIC8vICdnZXRCZWFjb25zJyxcclxuICAvLyAnc3RhcnRCZWFjb25EaXNjb3ZlcnknLFxyXG4gIC8vICdzdG9wQmVhY29uRGlzY292ZXJ5JyxcclxuICAvLyAnc2hvd05hdmlnYXRpb25CYXJMb2FkaW5nJyxcclxuICAvLyAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJyxcclxuICAvLyAnc2V0VGFiQmFySXRlbScsXHJcbiAgLy8gJ3NldFRhYkJhclN0eWxlJyxcclxuICAvLyAnaGlkZVRhYkJhcicsXHJcbiAgLy8gJ3Nob3dUYWJCYXInLFxyXG4gIC8vICdzZXRUYWJCYXJCYWRnZScsXHJcbiAgLy8gJ3JlbW92ZVRhYkJhckJhZGdlJyxcclxuICAvLyAnc2hvd1RhYkJhclJlZERvdCcsXHJcbiAgLy8gJ2hpZGVUYWJCYXJSZWREb3QnLFxyXG4gIC8vICdzZXRCYWNrZ3JvdW5kQ29sb3InLFxyXG4gIC8vICdzZXRCYWNrZ3JvdW5kVGV4dFN0eWxlJyxcclxuICAvLyAnY2hvb3NlSW52b2ljZVRpdGxlJyxcclxuICAvLyAnYWRkVGVtcGxhdGUnLFxyXG4gIC8vICdkZWxldGVUZW1wbGF0ZScsXHJcbiAgLy8gJ2dldFRlbXBsYXRlTGlicmFyeUJ5SWQnLFxyXG4gIC8vICdnZXRUZW1wbGF0ZUxpYnJhcnlMaXN0JyxcclxuICAvLyAnZ2V0VGVtcGxhdGVMaXN0JyxcclxuICAvLyAnc2VuZFRlbXBsYXRlTWVzc2FnZScsXHJcbiAgLy8gJ3NldEVuYWJsZURlYnVnJyxcclxuICAvLyAnb25XaW5kb3dSZXNpemUnLFxyXG4gIC8vICdvZmZXaW5kb3dSZXNpemUnLFxyXG4gIC8vICdjcmVhdGVPZmZzY3JlZW5DYW52YXMnLFxyXG4gIC8vICd2aWJyYXRlJ1xyXG5dO1xyXG5cclxuLy8g5a2Y5Zyo5YW85a655oCn55qEIEFQSSDliJfooahcclxuLy8g5aS05p2h5bCP56iL5bqP6IeqMS4zNS4wK+aUr+aMgWNhbklVc2VzXHJcbmNvbnN0IGNhbklVc2VzID0gW1xyXG4gIC8vICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsXHJcbiAgLy8gJ2dldFNhdmVkRmlsZUxpc3QnLFxyXG4gIC8vICdyZW1vdmVTYXZlZEZpbGUnLFxyXG4gIC8vICdoaWRlS2V5Ym9hcmQnLFxyXG4gIC8vICdnZXRJbWFnZUluZm8nLFxyXG4gIC8vICdjcmVhdGVWaWRlb0NvbnRleHQnLFxyXG4gIC8vICdvblNvY2tldE9wZW4nLFxyXG4gIC8vICdvblNvY2tldEVycm9yJyxcclxuICAvLyAnc2VuZFNvY2tldE1lc3NhZ2UnLFxyXG4gIC8vICdvblNvY2tldE1lc3NhZ2UnLFxyXG4gIC8vICdjbG9zZVNvY2tldCcsXHJcbiAgLy8gJ29uU29ja2V0Q2xvc2UnLFxyXG4gIC8vICdnZXRFeHRDb25maWcnLFxyXG4gIC8vICdnZXRFeHRDb25maWdTeW5jJyxcclxuICAvLyAnbmF2aWdhdGVUb01pbmlQcm9ncmFtJyxcclxuICAvLyAnbmF2aWdhdGVCYWNrTWluaVByb2dyYW0nLFxyXG4gIC8vICdjb21wcmVzc0ltYWdlJyxcclxuICAvLyAnY2hvb3NlTG9jYXRpb24nLFxyXG4gIC8vICdvcGVuRG9jdW1lbnQnLFxyXG4gIC8vICdvblVzZXJDYXB0dXJlU2NyZWVuJyxcclxuICAvLyAnZ2V0QmFja2dyb3VuZEF1ZGlvTWFuYWdlcicsXHJcbiAgLy8gJ3NldE5hdmlnYXRpb25CYXJDb2xvcicsXHJcbl07XHJcblxyXG4vLyDpnIDopoHlgZrovazmjaLnmoQgQVBJIOWIl+ihqFxyXG5jb25zdCBwcm90b2NvbHMgPSB7XHJcbiAgY2hvb3NlSW1hZ2U6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgc2l6ZVR5cGU6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBuYXZpZ2F0ZVRvLFxyXG4gIHJlZGlyZWN0VG8sXHJcbiAgcHJldmlld0ltYWdlLFxyXG4gIGNvbm5lY3RTb2NrZXQ6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgbWV0aG9kOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2hvb3NlVmlkZW86IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgY2FtZXJhOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2NhbkNvZGU6IHtcclxuICAgIGFyZ3M6IHtcclxuICAgICAgb25seUZyb21DYW1lcmE6IGZhbHNlLFxyXG4gICAgICBzY2FuVHlwZTogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHN0YXJ0QWNjZWxlcm9tZXRlcjoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBpbnRlcnZhbDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHNob3dUb2FzdDoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBpbWFnZTogZmFsc2UsXHJcbiAgICAgIG1hc2s6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBzaG93TG9hZGluZzoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBtYXNrOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2hvd01vZGFsOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGNhbmNlbENvbG9yOiBmYWxzZSxcclxuICAgICAgY29uZmlybUNvbG9yOiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2hvd0FjdGlvblNoZWV0OiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGl0ZW1Db2xvcjogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGxvZ2luOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIHNjb3BlczogZmFsc2UsXHJcbiAgICAgIHRpbWVvdXQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBnZXRVc2VySW5mbzoge1xyXG4gICAgYXJnczoge1xyXG4gICAgICBsYW5nOiBmYWxzZSxcclxuICAgICAgdGltZW91dDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHJlcXVlc3RQYXltZW50OiB7XHJcbiAgICBuYW1lOiB0dC5wYXkgPyAncGF5JyA6ICdyZXF1ZXN0UGF5bWVudCcsXHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIG9yZGVySW5mbzogdHQucGF5ID8gJ29yZGVySW5mbycgOiAnZGF0YSdcclxuICAgIH1cclxuICB9LFxyXG4gIGdldEZpbGVJbmZvOiB7XHJcbiAgICBhcmdzOiB7XHJcbiAgICAgIGRpZ2VzdEFsZ29yaXRobTogZmFsc2VcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDQUxMQkFDS1MgPSBbJ3N1Y2Nlc3MnLCAnZmFpbCcsICdjYW5jZWwnLCAnY29tcGxldGUnXTtcclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NDYWxsYmFjayAobWV0aG9kTmFtZSwgbWV0aG9kLCByZXR1cm5WYWx1ZSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiAocmVzKSB7XHJcbiAgICByZXR1cm4gbWV0aG9kKHByb2Nlc3NSZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXMsIHJldHVyblZhbHVlKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2Nlc3NBcmdzIChtZXRob2ROYW1lLCBmcm9tQXJncywgYXJnc09wdGlvbiA9IHt9LCByZXR1cm5WYWx1ZSA9IHt9LCBrZWVwRnJvbUFyZ3MgPSBmYWxzZSkge1xyXG4gIGlmIChpc1BsYWluT2JqZWN0KGZyb21BcmdzKSkgeyAvLyDkuIDoiKwgYXBpIOeahOWPguaVsOino+aekFxyXG4gICAgY29uc3QgdG9BcmdzID0ga2VlcEZyb21BcmdzID09PSB0cnVlID8gZnJvbUFyZ3MgOiB7fTsgLy8gcmV0dXJuVmFsdWUg5Li6IGZhbHNlIOaXtu+8jOivtOaYjuaYr+agvOW8j+WMlui/lOWbnuWAvO+8jOebtOaOpeWcqOi/lOWbnuWAvOWvueixoeS4iuS/ruaUuei1i+WAvFxyXG4gICAgaWYgKGlzRm4oYXJnc09wdGlvbikpIHtcclxuICAgICAgYXJnc09wdGlvbiA9IGFyZ3NPcHRpb24oZnJvbUFyZ3MsIHRvQXJncykgfHwge307XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBmcm9tQXJncykge1xyXG4gICAgICBpZiAoaGFzT3duKGFyZ3NPcHRpb24sIGtleSkpIHtcclxuICAgICAgICBsZXQga2V5T3B0aW9uID0gYXJnc09wdGlvbltrZXldO1xyXG4gICAgICAgIGlmIChpc0ZuKGtleU9wdGlvbikpIHtcclxuICAgICAgICAgIGtleU9wdGlvbiA9IGtleU9wdGlvbihmcm9tQXJnc1trZXldLCBmcm9tQXJncywgdG9BcmdzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFrZXlPcHRpb24pIHsgLy8g5LiN5pSv5oyB55qE5Y+C5pWwXHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYOWktOadoeWwj+eoi+W6jyAke21ldGhvZE5hbWV95pqC5LiN5pSv5oyBJHtrZXl9YCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1N0cihrZXlPcHRpb24pKSB7IC8vIOmHjeWGmeWPguaVsCBrZXlcclxuICAgICAgICAgIHRvQXJnc1trZXlPcHRpb25dID0gZnJvbUFyZ3Nba2V5XTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3Qoa2V5T3B0aW9uKSkgeyAvLyB7bmFtZTpuZXdOYW1lLHZhbHVlOnZhbHVlfeWPr+mHjeaWsOaMh+WumuWPguaVsCBrZXk6dmFsdWVcclxuICAgICAgICAgIHRvQXJnc1trZXlPcHRpb24ubmFtZSA/IGtleU9wdGlvbi5uYW1lIDoga2V5XSA9IGtleU9wdGlvbi52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoQ0FMTEJBQ0tTLmluZGV4T2Yoa2V5KSAhPT0gLTEpIHtcclxuICAgICAgICBpZiAoaXNGbihmcm9tQXJnc1trZXldKSkge1xyXG4gICAgICAgICAgdG9BcmdzW2tleV0gPSBwcm9jZXNzQ2FsbGJhY2sobWV0aG9kTmFtZSwgZnJvbUFyZ3Nba2V5XSwgcmV0dXJuVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWtlZXBGcm9tQXJncykge1xyXG4gICAgICAgICAgdG9BcmdzW2tleV0gPSBmcm9tQXJnc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvQXJnc1xyXG4gIH0gZWxzZSBpZiAoaXNGbihmcm9tQXJncykpIHtcclxuICAgIGZyb21BcmdzID0gcHJvY2Vzc0NhbGxiYWNrKG1ldGhvZE5hbWUsIGZyb21BcmdzLCByZXR1cm5WYWx1ZSk7XHJcbiAgfVxyXG4gIHJldHVybiBmcm9tQXJnc1xyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzUmV0dXJuVmFsdWUgKG1ldGhvZE5hbWUsIHJlcywgcmV0dXJuVmFsdWUsIGtlZXBSZXR1cm5WYWx1ZSA9IGZhbHNlKSB7XHJcbiAgaWYgKGlzRm4ocHJvdG9jb2xzLnJldHVyblZhbHVlKSkgeyAvLyDlpITnkIbpgJrnlKggcmV0dXJuVmFsdWVcclxuICAgIHJlcyA9IHByb3RvY29scy5yZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXMpO1xyXG4gIH1cclxuICByZXR1cm4gcHJvY2Vzc0FyZ3MobWV0aG9kTmFtZSwgcmVzLCByZXR1cm5WYWx1ZSwge30sIGtlZXBSZXR1cm5WYWx1ZSlcclxufVxyXG5cclxuZnVuY3Rpb24gd3JhcHBlciAobWV0aG9kTmFtZSwgbWV0aG9kKSB7XHJcbiAgaWYgKGhhc093bihwcm90b2NvbHMsIG1ldGhvZE5hbWUpKSB7XHJcbiAgICBjb25zdCBwcm90b2NvbCA9IHByb3RvY29sc1ttZXRob2ROYW1lXTtcclxuICAgIGlmICghcHJvdG9jb2wpIHsgLy8g5pqC5LiN5pSv5oyB55qEIGFwaVxyXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYOWktOadoeWwj+eoi+W6jyDmmoLkuI3mlK/mjIEke21ldGhvZE5hbWV9YCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmdW5jdGlvbiAoYXJnMSwgYXJnMikgeyAvLyDnm67liY0gYXBpIOacgOWkmuS4pOS4quWPguaVsFxyXG4gICAgICBsZXQgb3B0aW9ucyA9IHByb3RvY29sO1xyXG4gICAgICBpZiAoaXNGbihwcm90b2NvbCkpIHtcclxuICAgICAgICBvcHRpb25zID0gcHJvdG9jb2woYXJnMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFyZzEgPSBwcm9jZXNzQXJncyhtZXRob2ROYW1lLCBhcmcxLCBvcHRpb25zLmFyZ3MsIG9wdGlvbnMucmV0dXJuVmFsdWUpO1xyXG5cclxuICAgICAgY29uc3QgYXJncyA9IFthcmcxXTtcclxuICAgICAgaWYgKHR5cGVvZiBhcmcyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGFyZ3MucHVzaChhcmcyKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoaXNGbihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZShhcmcxKTtcclxuICAgICAgfSBlbHNlIGlmIChpc1N0cihvcHRpb25zLm5hbWUpKSB7XHJcbiAgICAgICAgbWV0aG9kTmFtZSA9IG9wdGlvbnMubmFtZTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHR0W21ldGhvZE5hbWVdLmFwcGx5KHR0LCBhcmdzKTtcclxuICAgICAgaWYgKGlzU3luY0FwaShtZXRob2ROYW1lKSkgeyAvLyDlkIzmraUgYXBpXHJcbiAgICAgICAgcmV0dXJuIHByb2Nlc3NSZXR1cm5WYWx1ZShtZXRob2ROYW1lLCByZXR1cm5WYWx1ZSwgb3B0aW9ucy5yZXR1cm5WYWx1ZSwgaXNDb250ZXh0QXBpKG1ldGhvZE5hbWUpKVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXR1cm5WYWx1ZVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbWV0aG9kXHJcbn1cclxuXHJcbmNvbnN0IHRvZG9BcGlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbmNvbnN0IFRPRE9TID0gW1xyXG4gICdvblRhYkJhck1pZEJ1dHRvblRhcCcsXHJcbiAgJ3N1YnNjcmliZVB1c2gnLFxyXG4gICd1bnN1YnNjcmliZVB1c2gnLFxyXG4gICdvblB1c2gnLFxyXG4gICdvZmZQdXNoJyxcclxuICAnc2hhcmUnXHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvQXBpIChuYW1lKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvZG9BcGkgKHtcclxuICAgIGZhaWwsXHJcbiAgICBjb21wbGV0ZVxyXG4gIH0pIHtcclxuICAgIGNvbnN0IHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiBgJHtuYW1lfTpmYWlsOuaaguS4jeaUr+aMgSAke25hbWV9IOaWueazlWBcclxuICAgIH07XHJcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgfVxyXG59XHJcblxyXG5UT0RPUy5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgdG9kb0FwaXNbbmFtZV0gPSBjcmVhdGVUb2RvQXBpKG5hbWUpO1xyXG59KTtcclxuXHJcbnZhciBwcm92aWRlcnMgPSB7XHJcbiAgb2F1dGg6IFsndG91dGlhbyddLFxyXG4gIHNoYXJlOiBbJ3RvdXRpYW8nXSxcclxuICBwYXltZW50OiBbJ3RvdXRpYW8nXSxcclxuICBwdXNoOiBbJ3RvdXRpYW8nXVxyXG59O1xyXG5cclxuZnVuY3Rpb24gZ2V0UHJvdmlkZXIgKHtcclxuICBzZXJ2aWNlLFxyXG4gIHN1Y2Nlc3MsXHJcbiAgZmFpbCxcclxuICBjb21wbGV0ZVxyXG59KSB7XHJcbiAgbGV0IHJlcyA9IGZhbHNlO1xyXG4gIGlmIChwcm92aWRlcnNbc2VydmljZV0pIHtcclxuICAgIHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6b2snLFxyXG4gICAgICBzZXJ2aWNlLFxyXG4gICAgICBwcm92aWRlcjogcHJvdmlkZXJzW3NlcnZpY2VdXHJcbiAgICB9O1xyXG4gICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcyA9IHtcclxuICAgICAgZXJyTXNnOiAnZ2V0UHJvdmlkZXI6ZmFpbDrmnI3liqFbJyArIHNlcnZpY2UgKyAnXeS4jeWtmOWcqCdcclxuICAgIH07XHJcbiAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICB9XHJcbiAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxufVxyXG5cclxudmFyIGV4dHJhQXBpID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbCxcclxuICBnZXRQcm92aWRlcjogZ2V0UHJvdmlkZXJcclxufSk7XHJcblxyXG5jb25zdCBnZXRFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICBsZXQgRW1pdHRlcjtcclxuICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlciAoKSB7XHJcbiAgICBpZiAoIUVtaXR0ZXIpIHtcclxuICAgICAgRW1pdHRlciA9IG5ldyBWdWUoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBFbWl0dGVyXHJcbiAgfVxyXG59KSgpO1xyXG5cclxuZnVuY3Rpb24gYXBwbHkgKGN0eCwgbWV0aG9kLCBhcmdzKSB7XHJcbiAgcmV0dXJuIGN0eFttZXRob2RdLmFwcGx5KGN0eCwgYXJncylcclxufVxyXG5cclxuZnVuY3Rpb24gJG9uICgpIHtcclxuICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJG9mZiAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvZmYnLCBbLi4uYXJndW1lbnRzXSlcclxufVxyXG5mdW5jdGlvbiAkb25jZSAoKSB7XHJcbiAgcmV0dXJuIGFwcGx5KGdldEVtaXR0ZXIoKSwgJyRvbmNlJywgWy4uLmFyZ3VtZW50c10pXHJcbn1cclxuZnVuY3Rpb24gJGVtaXQgKCkge1xyXG4gIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFsuLi5hcmd1bWVudHNdKVxyXG59XHJcblxyXG52YXIgZXZlbnRBcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gICRvbjogJG9uLFxyXG4gICRvZmY6ICRvZmYsXHJcbiAgJG9uY2U6ICRvbmNlLFxyXG4gICRlbWl0OiAkZW1pdFxyXG59KTtcclxuXHJcbnZhciBhcGkgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsXHJcbn0pO1xyXG5cclxuY29uc3QgTVBQYWdlID0gUGFnZTtcclxuY29uc3QgTVBDb21wb25lbnQgPSBDb21wb25lbnQ7XHJcblxyXG5jb25zdCBjdXN0b21pemVSRSA9IC86L2c7XHJcblxyXG5jb25zdCBjdXN0b21pemUgPSBjYWNoZWQoKHN0cikgPT4ge1xyXG4gIHJldHVybiBjYW1lbGl6ZShzdHIucmVwbGFjZShjdXN0b21pemVSRSwgJy0nKSlcclxufSk7XHJcblxyXG5mdW5jdGlvbiBpbml0VHJpZ2dlckV2ZW50IChtcEluc3RhbmNlKSB7XHJcbiAgY29uc3Qgb2xkVHJpZ2dlckV2ZW50ID0gbXBJbnN0YW5jZS50cmlnZ2VyRXZlbnQ7XHJcbiAgbXBJbnN0YW5jZS50cmlnZ2VyRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIC4uLmFyZ3MpIHtcclxuICAgIHJldHVybiBvbGRUcmlnZ2VyRXZlbnQuYXBwbHkobXBJbnN0YW5jZSwgW2N1c3RvbWl6ZShldmVudCksIC4uLmFyZ3NdKVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRIb29rIChuYW1lLCBvcHRpb25zKSB7XHJcbiAgY29uc3Qgb2xkSG9vayA9IG9wdGlvbnNbbmFtZV07XHJcbiAgaWYgKCFvbGRIb29rKSB7XHJcbiAgICBvcHRpb25zW25hbWVdID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpbml0VHJpZ2dlckV2ZW50KHRoaXMpO1xyXG4gICAgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgb3B0aW9uc1tuYW1lXSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgIGluaXRUcmlnZ2VyRXZlbnQodGhpcyk7XHJcbiAgICAgIHJldHVybiBvbGRIb29rLmFwcGx5KHRoaXMsIGFyZ3MpXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuUGFnZSA9IGZ1bmN0aW9uIChvcHRpb25zID0ge30pIHtcclxuICBpbml0SG9vaygnb25Mb2FkJywgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIE1QUGFnZShvcHRpb25zKVxyXG59O1xyXG5cclxuQ29tcG9uZW50ID0gZnVuY3Rpb24gKG9wdGlvbnMgPSB7fSkge1xyXG4gIGluaXRIb29rKCdjcmVhdGVkJywgb3B0aW9ucyk7XHJcbiAgcmV0dXJuIE1QQ29tcG9uZW50KG9wdGlvbnMpXHJcbn07XHJcblxyXG5jb25zdCBQQUdFX0VWRU5UX0hPT0tTID0gW1xyXG4gICdvblB1bGxEb3duUmVmcmVzaCcsXHJcbiAgJ29uUmVhY2hCb3R0b20nLFxyXG4gICdvbkFkZFRvRmF2b3JpdGVzJyxcclxuICAnb25TaGFyZVRpbWVsaW5lJyxcclxuICAnb25TaGFyZUFwcE1lc3NhZ2UnLFxyXG4gICdvblBhZ2VTY3JvbGwnLFxyXG4gICdvblJlc2l6ZScsXHJcbiAgJ29uVGFiSXRlbVRhcCdcclxuXTtcclxuXHJcbmZ1bmN0aW9uIGluaXRNb2NrcyAodm0sIG1vY2tzKSB7XHJcbiAgY29uc3QgbXBJbnN0YW5jZSA9IHZtLiRtcFt2bS5tcFR5cGVdO1xyXG4gIG1vY2tzLmZvckVhY2gobW9jayA9PiB7XHJcbiAgICBpZiAoaGFzT3duKG1wSW5zdGFuY2UsIG1vY2spKSB7XHJcbiAgICAgIHZtW21vY2tdID0gbXBJbnN0YW5jZVttb2NrXTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzSG9vayAoaG9vaywgdnVlT3B0aW9ucykge1xyXG4gIGlmICghdnVlT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmIChWdWUub3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KFZ1ZS5vcHRpb25zW2hvb2tdKSkge1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcclxuXHJcbiAgaWYgKGlzRm4odnVlT3B0aW9ucykpIHtcclxuICAgIGlmIChpc0ZuKHZ1ZU9wdGlvbnMuZXh0ZW5kT3B0aW9uc1tob29rXSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIGlmICh2dWVPcHRpb25zLnN1cGVyICYmXHJcbiAgICAgIHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9ucyAmJlxyXG4gICAgICBBcnJheS5pc0FycmF5KHZ1ZU9wdGlvbnMuc3VwZXIub3B0aW9uc1tob29rXSkpIHtcclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgaWYgKGlzRm4odnVlT3B0aW9uc1tob29rXSkpIHtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGNvbnN0IG1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KG1peGlucykpIHtcclxuICAgIHJldHVybiAhIW1peGlucy5maW5kKG1peGluID0+IGhhc0hvb2soaG9vaywgbWl4aW4pKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdEhvb2tzIChtcE9wdGlvbnMsIGhvb2tzLCB2dWVPcHRpb25zKSB7XHJcbiAgaG9va3MuZm9yRWFjaChob29rID0+IHtcclxuICAgIGlmIChoYXNIb29rKGhvb2ssIHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICAgIG1wT3B0aW9uc1tob29rXSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZtICYmIHRoaXMuJHZtLl9fY2FsbF9ob29rKGhvb2ssIGFyZ3MpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRWdWVDb21wb25lbnQgKFZ1ZSwgdnVlT3B0aW9ucykge1xyXG4gIHZ1ZU9wdGlvbnMgPSB2dWVPcHRpb25zLmRlZmF1bHQgfHwgdnVlT3B0aW9ucztcclxuICBsZXQgVnVlQ29tcG9uZW50O1xyXG4gIGlmIChpc0ZuKHZ1ZU9wdGlvbnMpKSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSB2dWVPcHRpb25zO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBWdWVDb21wb25lbnQgPSBWdWUuZXh0ZW5kKHZ1ZU9wdGlvbnMpO1xyXG4gIH1cclxuICB2dWVPcHRpb25zID0gVnVlQ29tcG9uZW50Lm9wdGlvbnM7XHJcbiAgcmV0dXJuIFtWdWVDb21wb25lbnQsIHZ1ZU9wdGlvbnNdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRTbG90cyAodm0sIHZ1ZVNsb3RzKSB7XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodnVlU2xvdHMpICYmIHZ1ZVNsb3RzLmxlbmd0aCkge1xyXG4gICAgY29uc3QgJHNsb3RzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICAgIHZ1ZVNsb3RzLmZvckVhY2goc2xvdE5hbWUgPT4ge1xyXG4gICAgICAkc2xvdHNbc2xvdE5hbWVdID0gdHJ1ZTtcclxuICAgIH0pO1xyXG4gICAgdm0uJHNjb3BlZFNsb3RzID0gdm0uJHNsb3RzID0gJHNsb3RzO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdFZ1ZUlkcyAodnVlSWRzLCBtcEluc3RhbmNlKSB7XHJcbiAgdnVlSWRzID0gKHZ1ZUlkcyB8fCAnJykuc3BsaXQoJywnKTtcclxuICBjb25zdCBsZW4gPSB2dWVJZHMubGVuZ3RoO1xyXG5cclxuICBpZiAobGVuID09PSAxKSB7XHJcbiAgICBtcEluc3RhbmNlLl8kdnVlSWQgPSB2dWVJZHNbMF07XHJcbiAgfSBlbHNlIGlmIChsZW4gPT09IDIpIHtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVJZCA9IHZ1ZUlkc1swXTtcclxuICAgIG1wSW5zdGFuY2UuXyR2dWVQaWQgPSB2dWVJZHNbMV07XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0RGF0YSAodnVlT3B0aW9ucywgY29udGV4dCkge1xyXG4gIGxldCBkYXRhID0gdnVlT3B0aW9ucy5kYXRhIHx8IHt9O1xyXG4gIGNvbnN0IG1ldGhvZHMgPSB2dWVPcHRpb25zLm1ldGhvZHMgfHwge307XHJcblxyXG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZGF0YSA9IGRhdGEuY2FsbChjb250ZXh0KTsgLy8g5pSv5oyBIFZ1ZS5wcm90b3R5cGUg5LiK5oyC55qE5pWw5o2uXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5WVUVfQVBQX0RFQlVHKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCfmoLnmja4gVnVlIOeahCBkYXRhIOWHveaVsOWIneWni+WMluWwj+eoi+W6jyBkYXRhIOWksei0pe+8jOivt+WwvemHj+ehruS/nSBkYXRhIOWHveaVsOS4reS4jeiuv+mXriB2bSDlr7nosaHvvIzlkKbliJnlj6/og73lvbHlk43pppbmrKHmlbDmja7muLLmn5PpgJ/luqbjgIInLCBkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyDlr7kgZGF0YSDmoLzlvI/ljJZcclxuICAgICAgZGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcblxyXG4gIGlmICghaXNQbGFpbk9iamVjdChkYXRhKSkge1xyXG4gICAgZGF0YSA9IHt9O1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChtZXRob2ROYW1lID0+IHtcclxuICAgIGlmIChjb250ZXh0Ll9fbGlmZWN5Y2xlX2hvb2tzX18uaW5kZXhPZihtZXRob2ROYW1lKSA9PT0gLTEgJiYgIWhhc093bihkYXRhLCBtZXRob2ROYW1lKSkge1xyXG4gICAgICBkYXRhW21ldGhvZE5hbWVdID0gbWV0aG9kc1ttZXRob2ROYW1lXTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuY29uc3QgUFJPUF9UWVBFUyA9IFtTdHJpbmcsIE51bWJlciwgQm9vbGVhbiwgT2JqZWN0LCBBcnJheSwgbnVsbF07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlciAobmFtZSkge1xyXG4gIHJldHVybiBmdW5jdGlvbiBvYnNlcnZlciAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgIGlmICh0aGlzLiR2bSkge1xyXG4gICAgICB0aGlzLiR2bVtuYW1lXSA9IG5ld1ZhbDsgLy8g5Li65LqG6Kem5Y+R5YW25LuW6Z2eIHJlbmRlciB3YXRjaGVyXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QmVoYXZpb3JzICh2dWVPcHRpb25zLCBpbml0QmVoYXZpb3IpIHtcclxuICBjb25zdCB2dWVCZWhhdmlvcnMgPSB2dWVPcHRpb25zLmJlaGF2aW9ycztcclxuICBjb25zdCB2dWVFeHRlbmRzID0gdnVlT3B0aW9ucy5leHRlbmRzO1xyXG4gIGNvbnN0IHZ1ZU1peGlucyA9IHZ1ZU9wdGlvbnMubWl4aW5zO1xyXG5cclxuICBsZXQgdnVlUHJvcHMgPSB2dWVPcHRpb25zLnByb3BzO1xyXG5cclxuICBpZiAoIXZ1ZVByb3BzKSB7XHJcbiAgICB2dWVPcHRpb25zLnByb3BzID0gdnVlUHJvcHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGJlaGF2aW9ycyA9IFtdO1xyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZUJlaGF2aW9ycykpIHtcclxuICAgIHZ1ZUJlaGF2aW9ycy5mb3JFYWNoKGJlaGF2aW9yID0+IHtcclxuICAgICAgYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IucmVwbGFjZSgndW5pOi8vJywgYCR7XCJ0dFwifTovL2ApKTtcclxuICAgICAgaWYgKGJlaGF2aW9yID09PSAndW5pOi8vZm9ybS1maWVsZCcpIHtcclxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2dWVQcm9wcykpIHtcclxuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ25hbWUnKTtcclxuICAgICAgICAgIHZ1ZVByb3BzLnB1c2goJ3ZhbHVlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZ1ZVByb3BzLm5hbWUgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICB2dWVQcm9wcy52YWx1ZSA9IHtcclxuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyLCBCb29sZWFuLCBBcnJheSwgT2JqZWN0LCBEYXRlXSxcclxuICAgICAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgaWYgKGlzUGxhaW5PYmplY3QodnVlRXh0ZW5kcykgJiYgdnVlRXh0ZW5kcy5wcm9wcykge1xyXG4gICAgYmVoYXZpb3JzLnB1c2goXHJcbiAgICAgIGluaXRCZWhhdmlvcih7XHJcbiAgICAgICAgcHJvcGVydGllczogaW5pdFByb3BlcnRpZXModnVlRXh0ZW5kcy5wcm9wcywgdHJ1ZSlcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU1peGlucykpIHtcclxuICAgIHZ1ZU1peGlucy5mb3JFYWNoKHZ1ZU1peGluID0+IHtcclxuICAgICAgaWYgKGlzUGxhaW5PYmplY3QodnVlTWl4aW4pICYmIHZ1ZU1peGluLnByb3BzKSB7XHJcbiAgICAgICAgYmVoYXZpb3JzLnB1c2goXHJcbiAgICAgICAgICBpbml0QmVoYXZpb3Ioe1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBpbml0UHJvcGVydGllcyh2dWVNaXhpbi5wcm9wcywgdHJ1ZSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBiZWhhdmlvcnNcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VQcm9wVHlwZSAoa2V5LCB0eXBlLCBkZWZhdWx0VmFsdWUsIGZpbGUpIHtcclxuICAvLyBbU3RyaW5nXT0+U3RyaW5nXHJcbiAgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkgJiYgdHlwZS5sZW5ndGggPT09IDEpIHtcclxuICAgIHJldHVybiB0eXBlWzBdXHJcbiAgfVxyXG4gIHJldHVybiB0eXBlXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRQcm9wZXJ0aWVzIChwcm9wcywgaXNCZWhhdmlvciA9IGZhbHNlLCBmaWxlID0gJycpIHtcclxuICBjb25zdCBwcm9wZXJ0aWVzID0ge307XHJcbiAgaWYgKCFpc0JlaGF2aW9yKSB7XHJcbiAgICBwcm9wZXJ0aWVzLnZ1ZUlkID0ge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfTtcclxuICAgIC8vIOeUqOS6juWtl+iKgui3s+WKqOWwj+eoi+W6j+aooeaLn+aKveixoeiKgueCuVxyXG4gICAgcHJvcGVydGllcy5nZW5lcmljID0ge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIHZhbHVlOiBudWxsXHJcbiAgICB9O1xyXG4gICAgcHJvcGVydGllcy52dWVTbG90cyA9IHsgLy8g5bCP56iL5bqP5LiN6IO955u05o6l5a6a5LmJICRzbG90cyDnmoQgcHJvcHPvvIzmiYDku6XpgJrov4cgdnVlU2xvdHMg6L2s5o2i5YiwICRzbG90c1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogW10sXHJcbiAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobmV3VmFsLCBvbGRWYWwpIHtcclxuICAgICAgICBjb25zdCAkc2xvdHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xyXG4gICAgICAgIG5ld1ZhbC5mb3JFYWNoKHNsb3ROYW1lID0+IHtcclxuICAgICAgICAgICRzbG90c1tzbG90TmFtZV0gPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAkc2xvdHNcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcHMpKSB7IC8vIFsndGl0bGUnXVxyXG4gICAgcHJvcHMuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIGlmIChpc1BsYWluT2JqZWN0KHByb3BzKSkgeyAvLyB7dGl0bGU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6Jyd9LGNvbnRlbnQ6U3RyaW5nfVxyXG4gICAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgY29uc3Qgb3B0cyA9IHByb3BzW2tleV07XHJcbiAgICAgIGlmIChpc1BsYWluT2JqZWN0KG9wdHMpKSB7IC8vIHRpdGxlOnt0eXBlOlN0cmluZyxkZWZhdWx0OicnfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdHMuZGVmYXVsdDtcclxuICAgICAgICBpZiAoaXNGbih2YWx1ZSkpIHtcclxuICAgICAgICAgIHZhbHVlID0gdmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9wdHMudHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzLnR5cGUpO1xyXG5cclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2Yob3B0cy50eXBlKSAhPT0gLTEgPyBvcHRzLnR5cGUgOiBudWxsLFxyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7IC8vIGNvbnRlbnQ6U3RyaW5nXHJcbiAgICAgICAgY29uc3QgdHlwZSA9IHBhcnNlUHJvcFR5cGUoa2V5LCBvcHRzKTtcclxuICAgICAgICBwcm9wZXJ0aWVzW2tleV0gPSB7XHJcbiAgICAgICAgICB0eXBlOiBQUk9QX1RZUEVTLmluZGV4T2YodHlwZSkgIT09IC0xID8gdHlwZSA6IG51bGwsXHJcbiAgICAgICAgICBvYnNlcnZlcjogY3JlYXRlT2JzZXJ2ZXIoa2V5KVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICByZXR1cm4gcHJvcGVydGllc1xyXG59XHJcblxyXG5mdW5jdGlvbiB3cmFwcGVyJDEgKGV2ZW50KSB7XHJcbiAgLy8gVE9ETyDlj4jlvpflhbzlrrkgbXB2dWUg55qEIG1wIOWvueixoVxyXG4gIHRyeSB7XHJcbiAgICBldmVudC5tcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZlbnQpKTtcclxuICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICBldmVudC5zdG9wUHJvcGFnYXRpb24gPSBub29wO1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0ID0gbm9vcDtcclxuXHJcbiAgZXZlbnQudGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IHt9O1xyXG5cclxuICBpZiAoIWhhc093bihldmVudCwgJ2RldGFpbCcpKSB7XHJcbiAgICBldmVudC5kZXRhaWwgPSB7fTtcclxuICB9XHJcblxyXG4gIGlmIChoYXNPd24oZXZlbnQsICdtYXJrZXJJZCcpKSB7XHJcbiAgICBldmVudC5kZXRhaWwgPSB0eXBlb2YgZXZlbnQuZGV0YWlsID09PSAnb2JqZWN0JyA/IGV2ZW50LmRldGFpbCA6IHt9O1xyXG4gICAgZXZlbnQuZGV0YWlsLm1hcmtlcklkID0gZXZlbnQubWFya2VySWQ7XHJcbiAgfVxyXG5cclxuICBpZiAoaXNQbGFpbk9iamVjdChldmVudC5kZXRhaWwpKSB7XHJcbiAgICBldmVudC50YXJnZXQgPSBPYmplY3QuYXNzaWduKHt9LCBldmVudC50YXJnZXQsIGV2ZW50LmRldGFpbCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZXZlbnRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXh0cmFWYWx1ZSAodm0sIGRhdGFQYXRoc0FycmF5KSB7XHJcbiAgbGV0IGNvbnRleHQgPSB2bTtcclxuICBkYXRhUGF0aHNBcnJheS5mb3JFYWNoKGRhdGFQYXRoQXJyYXkgPT4ge1xyXG4gICAgY29uc3QgZGF0YVBhdGggPSBkYXRhUGF0aEFycmF5WzBdO1xyXG4gICAgY29uc3QgdmFsdWUgPSBkYXRhUGF0aEFycmF5WzJdO1xyXG4gICAgaWYgKGRhdGFQYXRoIHx8IHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHsgLy8gWycnLCcnLGluZGV4LCdkaXNhYmxlJ11cclxuICAgICAgY29uc3QgcHJvcFBhdGggPSBkYXRhUGF0aEFycmF5WzFdO1xyXG4gICAgICBjb25zdCB2YWx1ZVBhdGggPSBkYXRhUGF0aEFycmF5WzNdO1xyXG5cclxuICAgICAgbGV0IHZGb3I7XHJcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGRhdGFQYXRoKSkge1xyXG4gICAgICAgIHZGb3IgPSBkYXRhUGF0aDtcclxuICAgICAgfSBlbHNlIGlmICghZGF0YVBhdGgpIHtcclxuICAgICAgICB2Rm9yID0gY29udGV4dDtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnICYmIGRhdGFQYXRoKSB7XHJcbiAgICAgICAgaWYgKGRhdGFQYXRoLmluZGV4T2YoJyNzIycpID09PSAwKSB7XHJcbiAgICAgICAgICB2Rm9yID0gZGF0YVBhdGguc3Vic3RyKDMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2Rm9yID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgsIGNvbnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKE51bWJlci5pc0ludGVnZXIodkZvcikpIHtcclxuICAgICAgICBjb250ZXh0ID0gdmFsdWU7XHJcbiAgICAgIH0gZWxzZSBpZiAoIXByb3BQYXRoKSB7XHJcbiAgICAgICAgY29udGV4dCA9IHZGb3JbdmFsdWVdO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZGb3IpKSB7XHJcbiAgICAgICAgICBjb250ZXh0ID0gdkZvci5maW5kKHZGb3JJdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLl9fZ2V0X3ZhbHVlKHByb3BQYXRoLCB2Rm9ySXRlbSkgPT09IHZhbHVlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QodkZvcikpIHtcclxuICAgICAgICAgIGNvbnRleHQgPSBPYmplY3Qua2V5cyh2Rm9yKS5maW5kKHZGb3JLZXkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uX19nZXRfdmFsdWUocHJvcFBhdGgsIHZGb3JbdkZvcktleV0pID09PSB2YWx1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3YtZm9yIOaaguS4jeaUr+aMgeW+queOr+aVsOaNru+8micsIHZGb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZhbHVlUGF0aCkge1xyXG4gICAgICAgIGNvbnRleHQgPSB2bS5fX2dldF92YWx1ZSh2YWx1ZVBhdGgsIGNvbnRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNvbnRleHRcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvY2Vzc0V2ZW50RXh0cmEgKHZtLCBleHRyYSwgZXZlbnQpIHtcclxuICBjb25zdCBleHRyYU9iaiA9IHt9O1xyXG5cclxuICBpZiAoQXJyYXkuaXNBcnJheShleHRyYSkgJiYgZXh0cmEubGVuZ3RoKSB7XHJcbiAgICAvKipcclxuICAgICAqW1xyXG4gICAgICogICAgWydkYXRhLml0ZW1zJywgJ2RhdGEuaWQnLCBpdGVtLmRhdGEuaWRdLFxyXG4gICAgICogICAgWydtZXRhcycsICdpZCcsIG1ldGEuaWRdXHJcbiAgICAgKl0sXHJcbiAgICAgKltcclxuICAgICAqICAgIFsnZGF0YS5pdGVtcycsICdkYXRhLmlkJywgaXRlbS5kYXRhLmlkXSxcclxuICAgICAqICAgIFsnbWV0YXMnLCAnaWQnLCBtZXRhLmlkXVxyXG4gICAgICpdLFxyXG4gICAgICondGVzdCdcclxuICAgICAqL1xyXG4gICAgZXh0cmEuZm9yRWFjaCgoZGF0YVBhdGgsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgZGF0YVBhdGggPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhUGF0aCkgeyAvLyBtb2RlbCxwcm9wLnN5bmNcclxuICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IHZtO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZGF0YVBhdGggPT09ICckZXZlbnQnKSB7IC8vICRldmVudFxyXG4gICAgICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBldmVudDtcclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVBhdGggPT09ICdhcmd1bWVudHMnKSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwgJiYgZXZlbnQuZGV0YWlsLl9fYXJnc19fKSB7XHJcbiAgICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gZXZlbnQuZGV0YWlsLl9fYXJnc19fO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGV4dHJhT2JqWyckJyArIGluZGV4XSA9IFtldmVudF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YVBhdGguaW5kZXhPZignJGV2ZW50LicpID09PSAwKSB7IC8vICRldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgucmVwbGFjZSgnJGV2ZW50LicsICcnKSwgZXZlbnQpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXh0cmFPYmpbJyQnICsgaW5kZXhdID0gdm0uX19nZXRfdmFsdWUoZGF0YVBhdGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBleHRyYU9ialsnJCcgKyBpbmRleF0gPSBnZXRFeHRyYVZhbHVlKHZtLCBkYXRhUGF0aCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGV4dHJhT2JqXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE9iakJ5QXJyYXkgKGFycikge1xyXG4gIGNvbnN0IG9iaiA9IHt9O1xyXG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjb25zdCBlbGVtZW50ID0gYXJyW2ldO1xyXG4gICAgb2JqW2VsZW1lbnRbMF1dID0gZWxlbWVudFsxXTtcclxuICB9XHJcbiAgcmV0dXJuIG9ialxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9jZXNzRXZlbnRBcmdzICh2bSwgZXZlbnQsIGFyZ3MgPSBbXSwgZXh0cmEgPSBbXSwgaXNDdXN0b20sIG1ldGhvZE5hbWUpIHtcclxuICBsZXQgaXNDdXN0b21NUEV2ZW50ID0gZmFsc2U7IC8vIHd4Y29tcG9uZW50IOe7hOS7tu+8jOS8oOmAkuWOn+WniyBldmVudCDlr7nosaFcclxuICBpZiAoaXNDdXN0b20pIHsgLy8g6Ieq5a6a5LmJ5LqL5Lu2XHJcbiAgICBpc0N1c3RvbU1QRXZlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0ICYmXHJcbiAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldCAmJlxyXG4gICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuY29tVHlwZSA9PT0gJ3d4JztcclxuICAgIGlmICghYXJncy5sZW5ndGgpIHsgLy8g5peg5Y+C5pWw77yM55u05o6l5Lyg5YWlIGV2ZW50IOaIliBkZXRhaWwg5pWw57uEXHJcbiAgICAgIGlmIChpc0N1c3RvbU1QRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gW2V2ZW50XVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBldmVudC5kZXRhaWwuX19hcmdzX18gfHwgZXZlbnQuZGV0YWlsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBleHRyYU9iaiA9IHByb2Nlc3NFdmVudEV4dHJhKHZtLCBleHRyYSwgZXZlbnQpO1xyXG5cclxuICBjb25zdCByZXQgPSBbXTtcclxuICBhcmdzLmZvckVhY2goYXJnID0+IHtcclxuICAgIGlmIChhcmcgPT09ICckZXZlbnQnKSB7XHJcbiAgICAgIGlmIChtZXRob2ROYW1lID09PSAnX19zZXRfbW9kZWwnICYmICFpc0N1c3RvbSkgeyAvLyBpbnB1dCB2LW1vZGVsIHZhbHVlXHJcbiAgICAgICAgcmV0LnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoaXNDdXN0b20gJiYgIWlzQ3VzdG9tTVBFdmVudCkge1xyXG4gICAgICAgICAgcmV0LnB1c2goZXZlbnQuZGV0YWlsLl9fYXJnc19fWzBdKTtcclxuICAgICAgICB9IGVsc2UgeyAvLyB3eGNvbXBvbmVudCDnu4Tku7bmiJblhoXnva7nu4Tku7ZcclxuICAgICAgICAgIHJldC5wdXNoKGV2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnWzBdID09PSAnbycpIHtcclxuICAgICAgICByZXQucHVzaChnZXRPYmpCeUFycmF5KGFyZykpO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnICYmIGhhc093bihleHRyYU9iaiwgYXJnKSkge1xyXG4gICAgICAgIHJldC5wdXNoKGV4dHJhT2JqW2FyZ10pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldC5wdXNoKGFyZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHJldFxyXG59XHJcblxyXG5jb25zdCBPTkNFID0gJ34nO1xyXG5jb25zdCBDVVNUT00gPSAnXic7XHJcblxyXG5mdW5jdGlvbiBpc01hdGNoRXZlbnRUeXBlIChldmVudFR5cGUsIG9wdFR5cGUpIHtcclxuICByZXR1cm4gKGV2ZW50VHlwZSA9PT0gb3B0VHlwZSkgfHxcclxuICAgIChcclxuICAgICAgb3B0VHlwZSA9PT0gJ3JlZ2lvbmNoYW5nZScgJiZcclxuICAgICAgKFxyXG4gICAgICAgIGV2ZW50VHlwZSA9PT0gJ2JlZ2luJyB8fFxyXG4gICAgICAgIGV2ZW50VHlwZSA9PT0gJ2VuZCdcclxuICAgICAgKVxyXG4gICAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb250ZXh0Vm0gKHZtKSB7XHJcbiAgbGV0ICRwYXJlbnQgPSB2bS4kcGFyZW50O1xyXG4gIC8vIOeItue7hOS7tuaYryBzY29wZWQgc2xvdHMg5oiW6ICF5YW25LuW6Ieq5a6a5LmJ57uE5Lu25pe257un57ut5p+l5om+XHJcbiAgd2hpbGUgKCRwYXJlbnQgJiYgJHBhcmVudC4kcGFyZW50ICYmICgkcGFyZW50LiRvcHRpb25zLmdlbmVyaWMgfHwgJHBhcmVudC4kcGFyZW50LiRvcHRpb25zLmdlbmVyaWMgfHwgJHBhcmVudC4kc2NvcGUuXyR2dWVQaWQpKSB7XHJcbiAgICAkcGFyZW50ID0gJHBhcmVudC4kcGFyZW50O1xyXG4gIH1cclxuICByZXR1cm4gJHBhcmVudCAmJiAkcGFyZW50LiRwYXJlbnRcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXZlbnQgKGV2ZW50KSB7XHJcbiAgZXZlbnQgPSB3cmFwcGVyJDEoZXZlbnQpO1xyXG5cclxuICAvLyBbWyd0YXAnLFtbJ2hhbmRsZScsWzEsMixhXV0sWydoYW5kbGUxJyxbMSwyLGFdXV1dXVxyXG4gIGNvbnN0IGRhdGFzZXQgPSAoZXZlbnQuY3VycmVudFRhcmdldCB8fCBldmVudC50YXJnZXQpLmRhdGFzZXQ7XHJcbiAgaWYgKCFkYXRhc2V0KSB7XHJcbiAgICByZXR1cm4gY29uc29sZS53YXJuKCfkuovku7bkv6Hmga/kuI3lrZjlnKgnKVxyXG4gIH1cclxuICBjb25zdCBldmVudE9wdHMgPSBkYXRhc2V0LmV2ZW50T3B0cyB8fCBkYXRhc2V0WydldmVudC1vcHRzJ107IC8vIOaUr+S7mOWunSB3ZWItdmlldyDnu4Tku7YgZGF0YXNldCDpnZ7pqbzls7BcclxuICBpZiAoIWV2ZW50T3B0cykge1xyXG4gICAgcmV0dXJuIGNvbnNvbGUud2Fybign5LqL5Lu25L+h5oGv5LiN5a2Y5ZyoJylcclxuICB9XHJcblxyXG4gIC8vIFtbJ2hhbmRsZScsWzEsMixhXV0sWydoYW5kbGUxJyxbMSwyLGFdXV1cclxuICBjb25zdCBldmVudFR5cGUgPSBldmVudC50eXBlO1xyXG5cclxuICBjb25zdCByZXQgPSBbXTtcclxuXHJcbiAgZXZlbnRPcHRzLmZvckVhY2goZXZlbnRPcHQgPT4ge1xyXG4gICAgbGV0IHR5cGUgPSBldmVudE9wdFswXTtcclxuICAgIGNvbnN0IGV2ZW50c0FycmF5ID0gZXZlbnRPcHRbMV07XHJcblxyXG4gICAgY29uc3QgaXNDdXN0b20gPSB0eXBlLmNoYXJBdCgwKSA9PT0gQ1VTVE9NO1xyXG4gICAgdHlwZSA9IGlzQ3VzdG9tID8gdHlwZS5zbGljZSgxKSA6IHR5cGU7XHJcbiAgICBjb25zdCBpc09uY2UgPSB0eXBlLmNoYXJBdCgwKSA9PT0gT05DRTtcclxuICAgIHR5cGUgPSBpc09uY2UgPyB0eXBlLnNsaWNlKDEpIDogdHlwZTtcclxuXHJcbiAgICBpZiAoZXZlbnRzQXJyYXkgJiYgaXNNYXRjaEV2ZW50VHlwZShldmVudFR5cGUsIHR5cGUpKSB7XHJcbiAgICAgIGV2ZW50c0FycmF5LmZvckVhY2goZXZlbnRBcnJheSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IGV2ZW50QXJyYXlbMF07XHJcbiAgICAgICAgaWYgKG1ldGhvZE5hbWUpIHtcclxuICAgICAgICAgIGxldCBoYW5kbGVyQ3R4ID0gdGhpcy4kdm07XHJcbiAgICAgICAgICBpZiAoaGFuZGxlckN0eC4kb3B0aW9ucy5nZW5lcmljKSB7IC8vIG1wLXdlaXhpbixtcC10b3V0aWFvIOaKveixoeiKgueCueaooeaLnyBzY29wZWQgc2xvdHNcclxuICAgICAgICAgICAgaGFuZGxlckN0eCA9IGdldENvbnRleHRWbShoYW5kbGVyQ3R4KSB8fCBoYW5kbGVyQ3R4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT09ICckZW1pdCcpIHtcclxuICAgICAgICAgICAgaGFuZGxlckN0eC4kZW1pdC5hcHBseShoYW5kbGVyQ3R4LFxyXG4gICAgICAgICAgICAgIHByb2Nlc3NFdmVudEFyZ3MoXHJcbiAgICAgICAgICAgICAgICB0aGlzLiR2bSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRBcnJheVsxXSxcclxuICAgICAgICAgICAgICAgIGV2ZW50QXJyYXlbMl0sXHJcbiAgICAgICAgICAgICAgICBpc0N1c3RvbSxcclxuICAgICAgICAgICAgICAgIG1ldGhvZE5hbWVcclxuICAgICAgICAgICAgICApKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBoYW5kbGVyID0gaGFuZGxlckN0eFttZXRob2ROYW1lXTtcclxuICAgICAgICAgIGlmICghaXNGbihoYW5kbGVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCBfdm0uJHttZXRob2ROYW1lfSBpcyBub3QgYSBmdW5jdGlvbmApXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoaXNPbmNlKSB7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyLm9uY2UpIHtcclxuICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoYW5kbGVyLm9uY2UgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY29uc3QgcGFyYW1zID0gcHJvY2Vzc0V2ZW50QXJncyhcclxuICAgICAgICAgICAgdGhpcy4kdm0sXHJcbiAgICAgICAgICAgIGV2ZW50LFxyXG4gICAgICAgICAgICBldmVudEFycmF5WzFdLFxyXG4gICAgICAgICAgICBldmVudEFycmF5WzJdLFxyXG4gICAgICAgICAgICBpc0N1c3RvbSxcclxuICAgICAgICAgICAgbWV0aG9kTmFtZVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIC8vIOWPguaVsOWwvumDqOWinuWKoOWOn+Wni+S6i+S7tuWvueixoeeUqOS6juWkjeadguihqOi+vuW8j+WGheiOt+WPlumineWkluaVsOaNrlxyXG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNwYXJzZS1hcnJheXNcclxuICAgICAgICAgIHJldC5wdXNoKGhhbmRsZXIuYXBwbHkoaGFuZGxlckN0eCwgKEFycmF5LmlzQXJyYXkocGFyYW1zKSA/IHBhcmFtcyA6IFtdKS5jb25jYXQoWywgLCAsICwgLCAsICwgLCAsICwgZXZlbnRdKSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChcclxuICAgIGV2ZW50VHlwZSA9PT0gJ2lucHV0JyAmJlxyXG4gICAgcmV0Lmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgdHlwZW9mIHJldFswXSAhPT0gJ3VuZGVmaW5lZCdcclxuICApIHtcclxuICAgIHJldHVybiByZXRbMF1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhvb2tzID0gW1xyXG4gICdvblNob3cnLFxyXG4gICdvbkhpZGUnLFxyXG4gICdvbkVycm9yJyxcclxuICAnb25QYWdlTm90Rm91bmQnLFxyXG4gICdvblRoZW1lQ2hhbmdlJyxcclxuICAnb25VbmhhbmRsZWRSZWplY3Rpb24nXHJcbl07XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2VBcHAgKHZtLCB7XHJcbiAgbW9ja3MsXHJcbiAgaW5pdFJlZnNcclxufSkge1xyXG4gIGlmICh2bS4kb3B0aW9ucy5zdG9yZSkge1xyXG4gICAgVnVlLnByb3RvdHlwZS4kc3RvcmUgPSB2bS4kb3B0aW9ucy5zdG9yZTtcclxuICB9XHJcblxyXG4gIFZ1ZS5wcm90b3R5cGUubXBIb3N0ID0gXCJtcC10b3V0aWFvXCI7XHJcblxyXG4gIFZ1ZS5taXhpbih7XHJcbiAgICBiZWZvcmVDcmVhdGUgKCkge1xyXG4gICAgICBpZiAoIXRoaXMuJG9wdGlvbnMubXBUeXBlKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMubXBUeXBlID0gdGhpcy4kb3B0aW9ucy5tcFR5cGU7XHJcblxyXG4gICAgICB0aGlzLiRtcCA9IHtcclxuICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICBbdGhpcy5tcFR5cGVdOiB0aGlzLiRvcHRpb25zLm1wSW5zdGFuY2VcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuJHNjb3BlID0gdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlO1xyXG5cclxuICAgICAgZGVsZXRlIHRoaXMuJG9wdGlvbnMubXBUeXBlO1xyXG4gICAgICBkZWxldGUgdGhpcy4kb3B0aW9ucy5tcEluc3RhbmNlO1xyXG5cclxuICAgICAgaWYgKHRoaXMubXBUeXBlICE9PSAnYXBwJykge1xyXG4gICAgICAgIGluaXRSZWZzKHRoaXMpO1xyXG4gICAgICAgIGluaXRNb2Nrcyh0aGlzLCBtb2Nrcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgYXBwT3B0aW9ucyA9IHtcclxuICAgIG9uTGF1bmNoIChhcmdzKSB7XHJcbiAgICAgIGlmICh0aGlzLiR2bSkgeyAvLyDlt7Lnu4/liJ3lp4vljJbov4fkuobvvIzkuLvopoHmmK/kuLrkuobnmb7luqbvvIznmb7luqYgb25TaG93IOWcqCBvbkxhdW5jaCDkuYvliY1cclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kdm0gPSB2bTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLiRtcCA9IHtcclxuICAgICAgICBhcHA6IHRoaXNcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLiRzY29wZSA9IHRoaXM7XHJcbiAgICAgIC8vIHZtIOS4iuS5n+aMgui9vSBnbG9iYWxEYXRhXHJcbiAgICAgIHRoaXMuJHZtLmdsb2JhbERhdGEgPSB0aGlzLmdsb2JhbERhdGE7XHJcblxyXG4gICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnLCBhcmdzKTtcclxuXHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdvbkxhdW5jaCcsIGFyZ3MpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIOWFvOWuueaXp+eJiOacrCBnbG9iYWxEYXRhXHJcbiAgYXBwT3B0aW9ucy5nbG9iYWxEYXRhID0gdm0uJG9wdGlvbnMuZ2xvYmFsRGF0YSB8fCB7fTtcclxuICAvLyDlsIYgbWV0aG9kcyDkuK3nmoTmlrnms5XmjILlnKggZ2V0QXBwKCkg5LitXHJcbiAgY29uc3QgbWV0aG9kcyA9IHZtLiRvcHRpb25zLm1ldGhvZHM7XHJcbiAgaWYgKG1ldGhvZHMpIHtcclxuICAgIE9iamVjdC5rZXlzKG1ldGhvZHMpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIGFwcE9wdGlvbnNbbmFtZV0gPSBtZXRob2RzW25hbWVdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbml0SG9va3MoYXBwT3B0aW9ucywgaG9va3MpO1xyXG5cclxuICByZXR1cm4gYXBwT3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kVm1CeVZ1ZUlkICh2bSwgdnVlUGlkKSB7XHJcbiAgY29uc3QgJGNoaWxkcmVuID0gdm0uJGNoaWxkcmVuO1xyXG4gIC8vIOS8mOWFiOafpeaJvuebtOWxnijlj43lkJHmn6Xmib46aHR0cHM6Ly9naXRodWIuY29tL2RjbG91ZGlvL3VuaS1hcHAvaXNzdWVzLzEyMDApXHJcbiAgZm9yIChsZXQgaSA9ICRjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgY29uc3QgY2hpbGRWbSA9ICRjaGlsZHJlbltpXTtcclxuICAgIGlmIChjaGlsZFZtLiRzY29wZS5fJHZ1ZUlkID09PSB2dWVQaWQpIHtcclxuICAgICAgcmV0dXJuIGNoaWxkVm1cclxuICAgIH1cclxuICB9XHJcbiAgLy8g5Y+N5ZCR6YCS5b2S5p+l5om+XHJcbiAgbGV0IHBhcmVudFZtO1xyXG4gIGZvciAobGV0IGkgPSAkY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCgkY2hpbGRyZW5baV0sIHZ1ZVBpZCk7XHJcbiAgICBpZiAocGFyZW50Vm0pIHtcclxuICAgICAgcmV0dXJuIHBhcmVudFZtXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0QmVoYXZpb3IgKG9wdGlvbnMpIHtcclxuICByZXR1cm4gQmVoYXZpb3Iob3B0aW9ucylcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTGluayAoZXZlbnQpIHtcclxuICBjb25zdCB7XHJcbiAgICB2dWVQaWQsXHJcbiAgICB2dWVPcHRpb25zXHJcbiAgfSA9IGV2ZW50LmRldGFpbCB8fCBldmVudC52YWx1ZTsgLy8gZGV0YWlsIOaYr+W+ruS/oSx2YWx1ZSDmmK/nmb7luqYoZGlwYXRjaClcclxuXHJcbiAgbGV0IHBhcmVudFZtO1xyXG5cclxuICBpZiAodnVlUGlkKSB7XHJcbiAgICBwYXJlbnRWbSA9IGZpbmRWbUJ5VnVlSWQodGhpcy4kdm0sIHZ1ZVBpZCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIXBhcmVudFZtKSB7XHJcbiAgICBwYXJlbnRWbSA9IHRoaXMuJHZtO1xyXG4gIH1cclxuXHJcbiAgdnVlT3B0aW9ucy5wYXJlbnQgPSBwYXJlbnRWbTtcclxufVxyXG5cclxuY29uc3QgbW9ja3MgPSBbJ19fcm91dGVfXycsICdfX3dlYnZpZXdJZF9fJywgJ19fbm9kZWlkX18nLCAnX19ub2RlSWRfXyddO1xyXG5cclxuZnVuY3Rpb24gaXNQYWdlICgpIHtcclxuICByZXR1cm4gdGhpcy5fX25vZGVpZF9fID09PSAwIHx8IHRoaXMuX19ub2RlSWRfXyA9PT0gMFxyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0UmVmcyAodm0pIHtcclxuICBjb25zdCBtcEluc3RhbmNlID0gdm0uJHNjb3BlO1xyXG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXHJcbiAgY29uc3QgbWlub3JWZXJzaW9uID0gcGFyc2VJbnQodHQuZ2V0U3lzdGVtSW5mb1N5bmMoKS5TREtWZXJzaW9uLnNwbGl0KCcuJylbMV0pO1xyXG4gIGlmIChtaW5vclZlcnNpb24gPiAxNikge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZtLCAnJHJlZnMnLCB7XHJcbiAgICAgIGdldCAoKSB7XHJcbiAgICAgICAgY29uc3QgJHJlZnMgPSB7fTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gbXBJbnN0YW5jZS5zZWxlY3RBbGxDb21wb25lbnRzKCcudnVlLXJlZicpO1xyXG4gICAgICAgIGNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgICAgJHJlZnNbcmVmXSA9IGNvbXBvbmVudC4kdm0gfHwgY29tcG9uZW50O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IGZvckNvbXBvbmVudHMgPSBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmLWluLWZvcicpO1xyXG4gICAgICAgIGZvckNvbXBvbmVudHMuZm9yRWFjaChjb21wb25lbnQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgICAgaWYgKCEkcmVmc1tyZWZdKSB7XHJcbiAgICAgICAgICAgICRyZWZzW3JlZl0gPSBbXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICRyZWZzW3JlZl0ucHVzaChjb21wb25lbnQuJHZtIHx8IGNvbXBvbmVudCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuICRyZWZzXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtcEluc3RhbmNlLnNlbGVjdEFsbENvbXBvbmVudHMoJy52dWUtcmVmJywgKGNvbXBvbmVudHMpID0+IHtcclxuICAgICAgY29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgIHZtLiRyZWZzW3JlZl0gPSBjb21wb25lbnQuJHZtIHx8IGNvbXBvbmVudDtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIG1wSW5zdGFuY2Uuc2VsZWN0QWxsQ29tcG9uZW50cygnLnZ1ZS1yZWYtaW4tZm9yJywgKGZvckNvbXBvbmVudHMpID0+IHtcclxuICAgICAgZm9yQ29tcG9uZW50cy5mb3JFYWNoKGNvbXBvbmVudCA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVmID0gY29tcG9uZW50LmRhdGFzZXQucmVmO1xyXG4gICAgICAgIGlmICghdm0uJHJlZnNbcmVmXSkge1xyXG4gICAgICAgICAgdm0uJHJlZnNbcmVmXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2bS4kcmVmc1tyZWZdLnB1c2goY29tcG9uZW50LiR2bSB8fCBjb21wb25lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaW5zdGFuY2VzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuXHJcbmZ1bmN0aW9uIGluaXRSZWxhdGlvbiAoe1xyXG4gIHZ1ZVBpZCxcclxuICBtcEluc3RhbmNlXHJcbn0pIHtcclxuICAvLyDlpLTmnaEgdHJpZ2dlckV2ZW50IOWQju+8jOaOpeaUtuS6i+S7tuaXtuacuueJueWIq+aZmu+8jOW3sue7j+WIsOS6hiByZWFkeSDkuYvlkI5cclxuICBjb25zdCBub2RlSWQgPSAobXBJbnN0YW5jZS5fX25vZGVJZF9fIHx8IG1wSW5zdGFuY2UuX19ub2RlaWRfXykgKyAnJztcclxuICBjb25zdCB3ZWJ2aWV3SWQgPSBtcEluc3RhbmNlLl9fd2Vidmlld0lkX18gKyAnJztcclxuXHJcbiAgaW5zdGFuY2VzW3dlYnZpZXdJZCArICdfJyArIG5vZGVJZF0gPSBtcEluc3RhbmNlLiR2bTtcclxuXHJcbiAgdGhpcy50cmlnZ2VyRXZlbnQoJ19fbCcsIHtcclxuICAgIHZ1ZVBpZCxcclxuICAgIG5vZGVJZCxcclxuICAgIHdlYnZpZXdJZFxyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVMaW5rJDEgKHtcclxuICBkZXRhaWw6IHtcclxuICAgIHZ1ZVBpZCxcclxuICAgIG5vZGVJZCxcclxuICAgIHdlYnZpZXdJZFxyXG4gIH1cclxufSkge1xyXG4gIGNvbnN0IHZtID0gaW5zdGFuY2VzW3dlYnZpZXdJZCArICdfJyArIG5vZGVJZF07XHJcbiAgaWYgKCF2bSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBsZXQgcGFyZW50Vm07XHJcblxyXG4gIGlmICh2dWVQaWQpIHtcclxuICAgIHBhcmVudFZtID0gZmluZFZtQnlWdWVJZCh0aGlzLiR2bSwgdnVlUGlkKTtcclxuICB9XHJcblxyXG4gIGlmICghcGFyZW50Vm0pIHtcclxuICAgIHBhcmVudFZtID0gdGhpcy4kdm07XHJcbiAgfVxyXG5cclxuICB2bS4kcGFyZW50ID0gcGFyZW50Vm07XHJcbiAgdm0uJHJvb3QgPSBwYXJlbnRWbS4kcm9vdDtcclxuICBwYXJlbnRWbS4kY2hpbGRyZW4ucHVzaCh2bSk7XHJcblxyXG4gIHZtLl9fY2FsbF9ob29rKCdjcmVhdGVkJyk7XHJcbiAgdm0uX19jYWxsX2hvb2soJ2JlZm9yZU1vdW50Jyk7XHJcbiAgdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcclxuICB2bS5fX2NhbGxfaG9vaygnb25SZWFkeScpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUFwcCAodm0pIHtcclxuICBWdWUucHJvdG90eXBlLl8kZmFsbGJhY2sgPSB0cnVlOyAvLyDpmY3nuqfvvIjosIPmlbTljp8gdnVlIOeahOmDqOWIhueUn+WRveWRqOacn++8jOWmgiBjcmVhdGVk77yMYmVmb3JlTW91bnQsaW5qZWN0LHByb3ZpZGXvvIlcclxuXHJcbiAgVnVlLm1peGluKHtcclxuICAgIGNyZWF0ZWQgKCkgeyAvLyDlpITnkIYgaW5qZWN0aW9ucyzlpLTmnaEgdHJpZ2dlckV2ZW50IOaYr+W8guatpe+8jOS4lOinpuWPkeaXtuacuuW+iOaFou+8jOaVheW7tui/nyByZWxhdGlvbiDorr7nva5cclxuICAgICAgaWYgKHRoaXMubXBUeXBlICE9PSAnYXBwJykge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMubXBUeXBlID09PSAncGFnZScgJiZcclxuICAgICAgICAgICAgICAgICAgICAhdGhpcy4kc2NvcGUucm91dGUgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5fX3JvdXRlX19cclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoaXMuJHNjb3BlLnJvdXRlID0gdGhpcy4kc2NvcGUuX19yb3V0ZV9fO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdFJlZnModGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX19pbml0X2luamVjdGlvbnModGhpcyk7XHJcbiAgICAgICAgdGhpcy5fX2luaXRfcHJvdmlkZSh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gcGFyc2VCYXNlQXBwKHZtLCB7XHJcbiAgICBtb2NrcyxcclxuICAgIGluaXRSZWZzOiBmdW5jdGlvbiAoKSB7fSAvLyBhdHRhY2hlZCDml7bvvIzlj6/og73mn6Xor6LkuI3liLBcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcHAgKHZtKSB7XHJcbiAgVnVlLnByb3RvdHlwZS5nZXRPcGVuZXJFdmVudENoYW5uZWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAoIXRoaXMuX19ldmVudENoYW5uZWxfXykge1xyXG4gICAgICB0aGlzLl9fZXZlbnRDaGFubmVsX18gPSBuZXcgRXZlbnRDaGFubmVsKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fX2V2ZW50Q2hhbm5lbF9fXHJcbiAgfTtcclxuICBjb25zdCBjYWxsSG9vayA9IFZ1ZS5wcm90b3R5cGUuX19jYWxsX2hvb2s7XHJcbiAgVnVlLnByb3RvdHlwZS5fX2NhbGxfaG9vayA9IGZ1bmN0aW9uIChob29rLCBhcmdzKSB7XHJcbiAgICBpZiAoaG9vayA9PT0gJ29uTG9hZCcgJiYgYXJncyAmJiBhcmdzLl9faWRfXykge1xyXG4gICAgICB0aGlzLl9fZXZlbnRDaGFubmVsX18gPSBnZXRFdmVudENoYW5uZWwoYXJncy5fX2lkX18pO1xyXG4gICAgICBkZWxldGUgYXJncy5fX2lkX187XHJcbiAgICB9XHJcbiAgICByZXR1cm4gY2FsbEhvb2suY2FsbCh0aGlzLCBob29rLCBhcmdzKVxyXG4gIH07XHJcbiAgQXBwKHBhcnNlQXBwKHZtKSk7XHJcbiAgcmV0dXJuIHZtXHJcbn1cclxuXHJcbmNvbnN0IGVuY29kZVJlc2VydmVSRSA9IC9bIScoKSpdL2c7XHJcbmNvbnN0IGVuY29kZVJlc2VydmVSZXBsYWNlciA9IGMgPT4gJyUnICsgYy5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KTtcclxuY29uc3QgY29tbWFSRSA9IC8lMkMvZztcclxuXHJcbi8vIGZpeGVkIGVuY29kZVVSSUNvbXBvbmVudCB3aGljaCBpcyBtb3JlIGNvbmZvcm1hbnQgdG8gUkZDMzk4NjpcclxuLy8gLSBlc2NhcGVzIFshJygpKl1cclxuLy8gLSBwcmVzZXJ2ZSBjb21tYXNcclxuY29uc3QgZW5jb2RlID0gc3RyID0+IGVuY29kZVVSSUNvbXBvbmVudChzdHIpXHJcbiAgLnJlcGxhY2UoZW5jb2RlUmVzZXJ2ZVJFLCBlbmNvZGVSZXNlcnZlUmVwbGFjZXIpXHJcbiAgLnJlcGxhY2UoY29tbWFSRSwgJywnKTtcclxuXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeVF1ZXJ5IChvYmosIGVuY29kZVN0ciA9IGVuY29kZSkge1xyXG4gIGNvbnN0IHJlcyA9IG9iaiA/IE9iamVjdC5rZXlzKG9iaikubWFwKGtleSA9PiB7XHJcbiAgICBjb25zdCB2YWwgPSBvYmpba2V5XTtcclxuXHJcbiAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuICcnXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZhbCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gZW5jb2RlU3RyKGtleSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICB2YWwuZm9yRWFjaCh2YWwyID0+IHtcclxuICAgICAgICBpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZhbDIgPT09IG51bGwpIHtcclxuICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVN0cihrZXkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzdWx0LnB1c2goZW5jb2RlU3RyKGtleSkgKyAnPScgKyBlbmNvZGVTdHIodmFsMikpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXN1bHQuam9pbignJicpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVuY29kZVN0cihrZXkpICsgJz0nICsgZW5jb2RlU3RyKHZhbClcclxuICB9KS5maWx0ZXIoeCA9PiB4Lmxlbmd0aCA+IDApLmpvaW4oJyYnKSA6IG51bGw7XHJcbiAgcmV0dXJuIHJlcyA/IGA/JHtyZXN9YCA6ICcnXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlQmFzZUNvbXBvbmVudCAodnVlQ29tcG9uZW50T3B0aW9ucywge1xyXG4gIGlzUGFnZSxcclxuICBpbml0UmVsYXRpb25cclxufSA9IHt9KSB7XHJcbiAgY29uc3QgW1Z1ZUNvbXBvbmVudCwgdnVlT3B0aW9uc10gPSBpbml0VnVlQ29tcG9uZW50KFZ1ZSwgdnVlQ29tcG9uZW50T3B0aW9ucyk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxyXG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWUsXHJcbiAgICAuLi4odnVlT3B0aW9ucy5vcHRpb25zIHx8IHt9KVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbXBvbmVudE9wdGlvbnMgPSB7XHJcbiAgICBvcHRpb25zLFxyXG4gICAgZGF0YTogaW5pdERhdGEodnVlT3B0aW9ucywgVnVlLnByb3RvdHlwZSksXHJcbiAgICBiZWhhdmlvcnM6IGluaXRCZWhhdmlvcnModnVlT3B0aW9ucywgaW5pdEJlaGF2aW9yKSxcclxuICAgIHByb3BlcnRpZXM6IGluaXRQcm9wZXJ0aWVzKHZ1ZU9wdGlvbnMucHJvcHMsIGZhbHNlLCB2dWVPcHRpb25zLl9fZmlsZSksXHJcbiAgICBsaWZldGltZXM6IHtcclxuICAgICAgYXR0YWNoZWQgKCkge1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBtcFR5cGU6IGlzUGFnZS5jYWxsKHRoaXMpID8gJ3BhZ2UnIDogJ2NvbXBvbmVudCcsXHJcbiAgICAgICAgICBtcEluc3RhbmNlOiB0aGlzLFxyXG4gICAgICAgICAgcHJvcHNEYXRhOiBwcm9wZXJ0aWVzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaW5pdFZ1ZUlkcyhwcm9wZXJ0aWVzLnZ1ZUlkLCB0aGlzKTtcclxuXHJcbiAgICAgICAgLy8g5aSE55CG54i25a2Q5YWz57O7XHJcbiAgICAgICAgaW5pdFJlbGF0aW9uLmNhbGwodGhpcywge1xyXG4gICAgICAgICAgdnVlUGlkOiB0aGlzLl8kdnVlUGlkLFxyXG4gICAgICAgICAgdnVlT3B0aW9uczogb3B0aW9uc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDliJ3lp4vljJYgdnVlIOWunuS+i1xyXG4gICAgICAgIHRoaXMuJHZtID0gbmV3IFZ1ZUNvbXBvbmVudChvcHRpb25zKTtcclxuXHJcbiAgICAgICAgLy8g5aSE55CGJHNsb3RzLCRzY29wZWRTbG90c++8iOaaguS4jeaUr+aMgeWKqOaAgeWPmOWMliRzbG90c++8iVxyXG4gICAgICAgIGluaXRTbG90cyh0aGlzLiR2bSwgcHJvcGVydGllcy52dWVTbG90cyk7XHJcblxyXG4gICAgICAgIC8vIOinpuWPkemmluasoSBzZXREYXRhXHJcbiAgICAgICAgdGhpcy4kdm0uJG1vdW50KCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlYWR5ICgpIHtcclxuICAgICAgICAvLyDlvZPnu4Tku7YgcHJvcHMg6buY6K6k5YC85Li6IHRydWXvvIzliJ3lp4vljJbml7bkvKDlhaUgZmFsc2Ug5Lya5a+86Ie0IGNyZWF0ZWQscmVhZHkg6Kem5Y+RLCDkvYYgYXR0YWNoZWQg5LiN6Kem5Y+RXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXJzLndlaXhpbi5xcS5jb20vY29tbXVuaXR5L2RldmVsb3AvZG9jLzAwMDY2YWUyODQ0Y2MwZjhlYjg4M2UyYTU1NzgwMFxyXG4gICAgICAgIGlmICh0aGlzLiR2bSkge1xyXG4gICAgICAgICAgdGhpcy4kdm0uX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnbW91bnRlZCcpO1xyXG4gICAgICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUmVhZHknKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRldGFjaGVkICgpIHtcclxuICAgICAgICB0aGlzLiR2bSAmJiB0aGlzLiR2bS4kZGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGFnZUxpZmV0aW1lczoge1xyXG4gICAgICBzaG93IChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZVNob3cnLCBhcmdzKTtcclxuICAgICAgfSxcclxuICAgICAgaGlkZSAoKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZUhpZGUnKTtcclxuICAgICAgfSxcclxuICAgICAgcmVzaXplIChzaXplKSB7XHJcbiAgICAgICAgdGhpcy4kdm0gJiYgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUGFnZVJlc2l6ZScsIHNpemUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBfX2w6IGhhbmRsZUxpbmssXHJcbiAgICAgIF9fZTogaGFuZGxlRXZlbnRcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIGV4dGVybmFsQ2xhc3Nlc1xyXG4gIGlmICh2dWVPcHRpb25zLmV4dGVybmFsQ2xhc3Nlcykge1xyXG4gICAgY29tcG9uZW50T3B0aW9ucy5leHRlcm5hbENsYXNzZXMgPSB2dWVPcHRpb25zLmV4dGVybmFsQ2xhc3NlcztcclxuICB9XHJcblxyXG4gIGlmIChBcnJheS5pc0FycmF5KHZ1ZU9wdGlvbnMud3hzQ2FsbE1ldGhvZHMpKSB7XHJcbiAgICB2dWVPcHRpb25zLnd4c0NhbGxNZXRob2RzLmZvckVhY2goY2FsbE1ldGhvZCA9PiB7XHJcbiAgICAgIGNvbXBvbmVudE9wdGlvbnMubWV0aG9kc1tjYWxsTWV0aG9kXSA9IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJHZtW2NhbGxNZXRob2RdKGFyZ3MpXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGlmIChpc1BhZ2UpIHtcclxuICAgIHJldHVybiBjb21wb25lbnRPcHRpb25zXHJcbiAgfVxyXG4gIHJldHVybiBbY29tcG9uZW50T3B0aW9ucywgVnVlQ29tcG9uZW50XVxyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUNvbXBvbmVudCAodnVlT3B0aW9ucykge1xyXG4gIGNvbnN0IFtjb21wb25lbnRPcHRpb25zLCBWdWVDb21wb25lbnRdID0gcGFyc2VCYXNlQ29tcG9uZW50KHZ1ZU9wdGlvbnMpO1xyXG5cclxuICBjb21wb25lbnRPcHRpb25zLmxpZmV0aW1lcy5hdHRhY2hlZCA9IGZ1bmN0aW9uIGF0dGFjaGVkICgpIHtcclxuICAgIGNvbnN0IHByb3BlcnRpZXMgPSB0aGlzLnByb3BlcnRpZXM7XHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgbXBUeXBlOiBpc1BhZ2UuY2FsbCh0aGlzKSA/ICdwYWdlJyA6ICdjb21wb25lbnQnLFxyXG4gICAgICBtcEluc3RhbmNlOiB0aGlzLFxyXG4gICAgICBwcm9wc0RhdGE6IHByb3BlcnRpZXNcclxuICAgIH07XHJcblxyXG4gICAgaW5pdFZ1ZUlkcyhwcm9wZXJ0aWVzLnZ1ZUlkLCB0aGlzKTtcclxuXHJcbiAgICAvLyDliJ3lp4vljJYgdnVlIOWunuS+i1xyXG4gICAgdGhpcy4kdm0gPSBuZXcgVnVlQ29tcG9uZW50KG9wdGlvbnMpO1xyXG5cclxuICAgIC8vIOWkhOeQhiRzbG90cywkc2NvcGVkU2xvdHPvvIjmmoLkuI3mlK/mjIHliqjmgIHlj5jljJYkc2xvdHPvvIlcclxuICAgIGluaXRTbG90cyh0aGlzLiR2bSwgcHJvcGVydGllcy52dWVTbG90cyk7XHJcblxyXG4gICAgLy8g5aSE55CG54i25a2Q5YWz57O7XHJcbiAgICBpbml0UmVsYXRpb24uY2FsbCh0aGlzLCB7XHJcbiAgICAgIHZ1ZVBpZDogdGhpcy5fJHZ1ZVBpZCxcclxuICAgICAgbXBJbnN0YW5jZTogdGhpc1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8g6Kem5Y+R6aaW5qyhIHNldERhdGFcclxuICAgIHRoaXMuJHZtLiRtb3VudCgpO1xyXG4gIH07XHJcblxyXG4gIC8vIHJlYWR5IOavlCBoYW5kbGVMaW5rIOi/mOaXqe+8jOWIneWni+WMlumAu+i+keaUvuWIsCBoYW5kbGVMaW5rIOS4rVxyXG4gIGRlbGV0ZSBjb21wb25lbnRPcHRpb25zLmxpZmV0aW1lcy5yZWFkeTtcclxuXHJcbiAgY29tcG9uZW50T3B0aW9ucy5tZXRob2RzLl9fbCA9IGhhbmRsZUxpbmskMTtcclxuXHJcbiAgcmV0dXJuIGNvbXBvbmVudE9wdGlvbnNcclxufVxyXG5cclxuY29uc3QgaG9va3MkMSA9IFtcclxuICAnb25TaG93JyxcclxuICAnb25IaWRlJyxcclxuICAnb25VbmxvYWQnXHJcbl07XHJcblxyXG5ob29rcyQxLnB1c2goLi4uUEFHRV9FVkVOVF9IT09LUyk7XHJcblxyXG5mdW5jdGlvbiBwYXJzZUJhc2VQYWdlICh2dWVQYWdlT3B0aW9ucywge1xyXG4gIGlzUGFnZSxcclxuICBpbml0UmVsYXRpb25cclxufSkge1xyXG4gIGNvbnN0IHBhZ2VPcHRpb25zID0gcGFyc2VDb21wb25lbnQodnVlUGFnZU9wdGlvbnMpO1xyXG5cclxuICBpbml0SG9va3MocGFnZU9wdGlvbnMubWV0aG9kcywgaG9va3MkMSwgdnVlUGFnZU9wdGlvbnMpO1xyXG5cclxuICBwYWdlT3B0aW9ucy5tZXRob2RzLm9uTG9hZCA9IGZ1bmN0aW9uIChxdWVyeSkge1xyXG4gICAgdGhpcy5vcHRpb25zID0gcXVlcnk7XHJcbiAgICBjb25zdCBjb3B5UXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSk7XHJcbiAgICBkZWxldGUgY29weVF1ZXJ5Ll9faWRfXztcclxuICAgIHRoaXMuJHBhZ2UgPSB7XHJcbiAgICAgIGZ1bGxQYXRoOiAnLycgKyAodGhpcy5yb3V0ZSB8fCB0aGlzLmlzKSArIHN0cmluZ2lmeVF1ZXJ5KGNvcHlRdWVyeSlcclxuICAgIH07XHJcbiAgICB0aGlzLiR2bS4kbXAucXVlcnkgPSBxdWVyeTsgLy8g5YW85a65IG1wdnVlXHJcbiAgICB0aGlzLiR2bS5fX2NhbGxfaG9vaygnb25Mb2FkJywgcXVlcnkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBwYWdlT3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVBhZ2UgKHZ1ZVBhZ2VPcHRpb25zKSB7XHJcbiAgY29uc3QgcGFnZU9wdGlvbnMgPSBwYXJzZUJhc2VQYWdlKHZ1ZVBhZ2VPcHRpb25zLCB7XHJcbiAgICBpc1BhZ2UsXHJcbiAgICBpbml0UmVsYXRpb25cclxuICB9KTtcclxuICAvLyDpobXpnaLpnIDopoHlnKggcmVhZHkg5Lit6Kem5Y+R77yM5YW25LuW57uE5Lu25piv5ZyoIGhhbmRsZUxpbmsg5Lit6Kem5Y+RXHJcbiAgcGFnZU9wdGlvbnMubGlmZXRpbWVzLnJlYWR5ID0gZnVuY3Rpb24gcmVhZHkgKCkge1xyXG4gICAgaWYgKHRoaXMuJHZtICYmIHRoaXMuJHZtLm1wVHlwZSA9PT0gJ3BhZ2UnKSB7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdjcmVhdGVkJyk7XHJcbiAgICAgIHRoaXMuJHZtLl9fY2FsbF9ob29rKCdiZWZvcmVNb3VudCcpO1xyXG4gICAgICB0aGlzLiR2bS5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ21vdW50ZWQnKTtcclxuICAgICAgdGhpcy4kdm0uX19jYWxsX2hvb2soJ29uUmVhZHknKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXMgJiYgY29uc29sZS53YXJuKHRoaXMuaXMgKyAnIGlzIG5vdCByZWFkeScpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHBhZ2VPcHRpb25zLmxpZmV0aW1lcy5kZXRhY2hlZCA9IGZ1bmN0aW9uIGRldGFjaGVkICgpIHtcclxuICAgIHRoaXMuJHZtICYmIHRoaXMuJHZtLiRkZXN0cm95KCk7XHJcbiAgICAvLyDmuIXnkIZcclxuICAgIGNvbnN0IHdlYnZpZXdJZCA9IHRoaXMuX193ZWJ2aWV3SWRfXztcclxuICAgIHdlYnZpZXdJZCAmJiBPYmplY3Qua2V5cyhpbnN0YW5jZXMpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgaWYgKGtleS5pbmRleE9mKHdlYnZpZXdJZCArICdfJykgPT09IDApIHtcclxuICAgICAgICBkZWxldGUgaW5zdGFuY2VzW2tleV07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBwYWdlT3B0aW9uc1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYWdlICh2dWVQYWdlT3B0aW9ucykge1xyXG4gIHtcclxuICAgIHJldHVybiBDb21wb25lbnQocGFyc2VQYWdlKHZ1ZVBhZ2VPcHRpb25zKSlcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudCAodnVlT3B0aW9ucykge1xyXG4gIHtcclxuICAgIHJldHVybiBDb21wb25lbnQocGFyc2VDb21wb25lbnQodnVlT3B0aW9ucykpXHJcbiAgfVxyXG59XHJcblxyXG50b2Rvcy5mb3JFYWNoKHRvZG9BcGkgPT4ge1xyXG4gIHByb3RvY29sc1t0b2RvQXBpXSA9IGZhbHNlO1xyXG59KTtcclxuXHJcbmNhbklVc2VzLmZvckVhY2goY2FuSVVzZUFwaSA9PiB7XHJcbiAgY29uc3QgYXBpTmFtZSA9IHByb3RvY29sc1tjYW5JVXNlQXBpXSAmJiBwcm90b2NvbHNbY2FuSVVzZUFwaV0ubmFtZSA/IHByb3RvY29sc1tjYW5JVXNlQXBpXS5uYW1lXHJcbiAgICA6IGNhbklVc2VBcGk7XHJcbiAgaWYgKCF0dC5jYW5JVXNlKGFwaU5hbWUpKSB7XHJcbiAgICBwcm90b2NvbHNbY2FuSVVzZUFwaV0gPSBmYWxzZTtcclxuICB9XHJcbn0pO1xyXG5cclxubGV0IHVuaSA9IHt9O1xyXG5cclxuaWYgKHR5cGVvZiBQcm94eSAhPT0gJ3VuZGVmaW5lZCcgJiYgXCJtcC10b3V0aWFvXCIgIT09ICdhcHAtcGx1cycpIHtcclxuICB1bmkgPSBuZXcgUHJveHkoe30sIHtcclxuICAgIGdldCAodGFyZ2V0LCBuYW1lKSB7XHJcbiAgICAgIGlmIChoYXNPd24odGFyZ2V0LCBuYW1lKSkge1xyXG4gICAgICAgIHJldHVybiB0YXJnZXRbbmFtZV1cclxuICAgICAgfVxyXG4gICAgICBpZiAoYmFzZUFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBiYXNlQXBpW25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFwaVtuYW1lXSkge1xyXG4gICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgYXBpW25hbWVdKVxyXG4gICAgICB9XHJcbiAgICAgIHtcclxuICAgICAgICBpZiAoZXh0cmFBcGlbbmFtZV0pIHtcclxuICAgICAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgZXh0cmFBcGlbbmFtZV0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b2RvQXBpc1tuYW1lXSkge1xyXG4gICAgICAgICAgcmV0dXJuIHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGV2ZW50QXBpW25hbWVdKSB7XHJcbiAgICAgICAgcmV0dXJuIGV2ZW50QXBpW25hbWVdXHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFoYXNPd24odHQsIG5hbWUpICYmICFoYXNPd24ocHJvdG9jb2xzLCBuYW1lKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcm9taXNpZnkobmFtZSwgd3JhcHBlcihuYW1lLCB0dFtuYW1lXSkpXHJcbiAgICB9LFxyXG4gICAgc2V0ICh0YXJnZXQsIG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgIHRhcmdldFtuYW1lXSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgfVxyXG4gIH0pO1xyXG59IGVsc2Uge1xyXG4gIE9iamVjdC5rZXlzKGJhc2VBcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICB1bmlbbmFtZV0gPSBiYXNlQXBpW25hbWVdO1xyXG4gIH0pO1xyXG5cclxuICB7XHJcbiAgICBPYmplY3Qua2V5cyh0b2RvQXBpcykuZm9yRWFjaChuYW1lID0+IHtcclxuICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG5hbWUsIHRvZG9BcGlzW25hbWVdKTtcclxuICAgIH0pO1xyXG4gICAgT2JqZWN0LmtleXMoZXh0cmFBcGkpLmZvckVhY2gobmFtZSA9PiB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB0b2RvQXBpc1tuYW1lXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIE9iamVjdC5rZXlzKGV2ZW50QXBpKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgdW5pW25hbWVdID0gZXZlbnRBcGlbbmFtZV07XHJcbiAgfSk7XHJcblxyXG4gIE9iamVjdC5rZXlzKGFwaSkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCBhcGlbbmFtZV0pO1xyXG4gIH0pO1xyXG5cclxuICBPYmplY3Qua2V5cyh0dCkuZm9yRWFjaChuYW1lID0+IHtcclxuICAgIGlmIChoYXNPd24odHQsIG5hbWUpIHx8IGhhc093bihwcm90b2NvbHMsIG5hbWUpKSB7XHJcbiAgICAgIHVuaVtuYW1lXSA9IHByb21pc2lmeShuYW1lLCB3cmFwcGVyKG5hbWUsIHR0W25hbWVdKSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbnR0LmNyZWF0ZUFwcCA9IGNyZWF0ZUFwcDtcclxudHQuY3JlYXRlUGFnZSA9IGNyZWF0ZVBhZ2U7XHJcbnR0LmNyZWF0ZUNvbXBvbmVudCA9IGNyZWF0ZUNvbXBvbmVudDtcclxuXHJcbnZhciB1bmkkMSA9IHVuaTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVuaSQxO1xyXG5leHBvcnQgeyBjcmVhdGVBcHAsIGNyZWF0ZUNvbXBvbmVudCwgY3JlYXRlUGFnZSB9O1xyXG4iLCIvKiFcbiAqIFZ1ZS5qcyB2Mi42LjExXG4gKiAoYykgMjAxNC0yMDIwIEV2YW4gWW91XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cbi8qICAqL1xuXG52YXIgZW1wdHlPYmplY3QgPSBPYmplY3QuZnJlZXplKHt9KTtcblxuLy8gVGhlc2UgaGVscGVycyBwcm9kdWNlIGJldHRlciBWTSBjb2RlIGluIEpTIGVuZ2luZXMgZHVlIHRvIHRoZWlyXG4vLyBleHBsaWNpdG5lc3MgYW5kIGZ1bmN0aW9uIGlubGluaW5nLlxuZnVuY3Rpb24gaXNVbmRlZiAodikge1xuICByZXR1cm4gdiA9PT0gdW5kZWZpbmVkIHx8IHYgPT09IG51bGxcbn1cblxuZnVuY3Rpb24gaXNEZWYgKHYpIHtcbiAgcmV0dXJuIHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsXG59XG5cbmZ1bmN0aW9uIGlzVHJ1ZSAodikge1xuICByZXR1cm4gdiA9PT0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc0ZhbHNlICh2KSB7XG4gIHJldHVybiB2ID09PSBmYWxzZVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHZhbHVlIGlzIHByaW1pdGl2ZS5cbiAqL1xuZnVuY3Rpb24gaXNQcmltaXRpdmUgKHZhbHVlKSB7XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHxcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICB0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnIHx8XG4gICAgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbidcbiAgKVxufVxuXG4vKipcbiAqIFF1aWNrIG9iamVjdCBjaGVjayAtIHRoaXMgaXMgcHJpbWFyaWx5IHVzZWQgdG8gdGVsbFxuICogT2JqZWN0cyBmcm9tIHByaW1pdGl2ZSB2YWx1ZXMgd2hlbiB3ZSBrbm93IHRoZSB2YWx1ZVxuICogaXMgYSBKU09OLWNvbXBsaWFudCB0eXBlLlxuICovXG5mdW5jdGlvbiBpc09iamVjdCAob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCdcbn1cblxuLyoqXG4gKiBHZXQgdGhlIHJhdyB0eXBlIHN0cmluZyBvZiBhIHZhbHVlLCBlLmcuLCBbb2JqZWN0IE9iamVjdF0uXG4gKi9cbnZhciBfdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG5mdW5jdGlvbiB0b1Jhd1R5cGUgKHZhbHVlKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbCh2YWx1ZSkuc2xpY2UoOCwgLTEpXG59XG5cbi8qKlxuICogU3RyaWN0IG9iamVjdCB0eXBlIGNoZWNrLiBPbmx5IHJldHVybnMgdHJ1ZVxuICogZm9yIHBsYWluIEphdmFTY3JpcHQgb2JqZWN0cy5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCAob2JqKSB7XG4gIHJldHVybiBfdG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBPYmplY3RdJ1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCAodikge1xuICByZXR1cm4gX3RvU3RyaW5nLmNhbGwodikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdmFsIGlzIGEgdmFsaWQgYXJyYXkgaW5kZXguXG4gKi9cbmZ1bmN0aW9uIGlzVmFsaWRBcnJheUluZGV4ICh2YWwpIHtcbiAgdmFyIG4gPSBwYXJzZUZsb2F0KFN0cmluZyh2YWwpKTtcbiAgcmV0dXJuIG4gPj0gMCAmJiBNYXRoLmZsb29yKG4pID09PSBuICYmIGlzRmluaXRlKHZhbClcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlICh2YWwpIHtcbiAgcmV0dXJuIChcbiAgICBpc0RlZih2YWwpICYmXG4gICAgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nICYmXG4gICAgdHlwZW9mIHZhbC5jYXRjaCA9PT0gJ2Z1bmN0aW9uJ1xuICApXG59XG5cbi8qKlxuICogQ29udmVydCBhIHZhbHVlIHRvIGEgc3RyaW5nIHRoYXQgaXMgYWN0dWFsbHkgcmVuZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nICh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PSBudWxsXG4gICAgPyAnJ1xuICAgIDogQXJyYXkuaXNBcnJheSh2YWwpIHx8IChpc1BsYWluT2JqZWN0KHZhbCkgJiYgdmFsLnRvU3RyaW5nID09PSBfdG9TdHJpbmcpXG4gICAgICA/IEpTT04uc3RyaW5naWZ5KHZhbCwgbnVsbCwgMilcbiAgICAgIDogU3RyaW5nKHZhbClcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGFuIGlucHV0IHZhbHVlIHRvIGEgbnVtYmVyIGZvciBwZXJzaXN0ZW5jZS5cbiAqIElmIHRoZSBjb252ZXJzaW9uIGZhaWxzLCByZXR1cm4gb3JpZ2luYWwgc3RyaW5nLlxuICovXG5mdW5jdGlvbiB0b051bWJlciAodmFsKSB7XG4gIHZhciBuID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obikgPyB2YWwgOiBuXG59XG5cbi8qKlxuICogTWFrZSBhIG1hcCBhbmQgcmV0dXJuIGEgZnVuY3Rpb24gZm9yIGNoZWNraW5nIGlmIGEga2V5XG4gKiBpcyBpbiB0aGF0IG1hcC5cbiAqL1xuZnVuY3Rpb24gbWFrZU1hcCAoXG4gIHN0cixcbiAgZXhwZWN0c0xvd2VyQ2FzZVxuKSB7XG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICB2YXIgbGlzdCA9IHN0ci5zcGxpdCgnLCcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBtYXBbbGlzdFtpXV0gPSB0cnVlO1xuICB9XG4gIHJldHVybiBleHBlY3RzTG93ZXJDYXNlXG4gICAgPyBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsLnRvTG93ZXJDYXNlKCldOyB9XG4gICAgOiBmdW5jdGlvbiAodmFsKSB7IHJldHVybiBtYXBbdmFsXTsgfVxufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgdGFnIGlzIGEgYnVpbHQtaW4gdGFnLlxuICovXG52YXIgaXNCdWlsdEluVGFnID0gbWFrZU1hcCgnc2xvdCxjb21wb25lbnQnLCB0cnVlKTtcblxuLyoqXG4gKiBDaGVjayBpZiBhbiBhdHRyaWJ1dGUgaXMgYSByZXNlcnZlZCBhdHRyaWJ1dGUuXG4gKi9cbnZhciBpc1Jlc2VydmVkQXR0cmlidXRlID0gbWFrZU1hcCgna2V5LHJlZixzbG90LHNsb3Qtc2NvcGUsaXMnKTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaXRlbSBmcm9tIGFuIGFycmF5LlxuICovXG5mdW5jdGlvbiByZW1vdmUgKGFyciwgaXRlbSkge1xuICBpZiAoYXJyLmxlbmd0aCkge1xuICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSlcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGFuIG9iamVjdCBoYXMgdGhlIHByb3BlcnR5LlxuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuZnVuY3Rpb24gaGFzT3duIChvYmosIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSlcbn1cblxuLyoqXG4gKiBDcmVhdGUgYSBjYWNoZWQgdmVyc2lvbiBvZiBhIHB1cmUgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNhY2hlZCAoZm4pIHtcbiAgdmFyIGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChmdW5jdGlvbiBjYWNoZWRGbiAoc3RyKSB7XG4gICAgdmFyIGhpdCA9IGNhY2hlW3N0cl07XG4gICAgcmV0dXJuIGhpdCB8fCAoY2FjaGVbc3RyXSA9IGZuKHN0cikpXG4gIH0pXG59XG5cbi8qKlxuICogQ2FtZWxpemUgYSBoeXBoZW4tZGVsaW1pdGVkIHN0cmluZy5cbiAqL1xudmFyIGNhbWVsaXplUkUgPSAvLShcXHcpL2c7XG52YXIgY2FtZWxpemUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgZnVuY3Rpb24gKF8sIGMpIHsgcmV0dXJuIGMgPyBjLnRvVXBwZXJDYXNlKCkgOiAnJzsgfSlcbn0pO1xuXG4vKipcbiAqIENhcGl0YWxpemUgYSBzdHJpbmcuXG4gKi9cbnZhciBjYXBpdGFsaXplID0gY2FjaGVkKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKVxufSk7XG5cbi8qKlxuICogSHlwaGVuYXRlIGEgY2FtZWxDYXNlIHN0cmluZy5cbiAqL1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZWQoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoaHlwaGVuYXRlUkUsICctJDEnKS50b0xvd2VyQ2FzZSgpXG59KTtcblxuLyoqXG4gKiBTaW1wbGUgYmluZCBwb2x5ZmlsbCBmb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IHN1cHBvcnQgaXQsXG4gKiBlLmcuLCBQaGFudG9tSlMgMS54LiBUZWNobmljYWxseSwgd2UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmVcbiAqIHNpbmNlIG5hdGl2ZSBiaW5kIGlzIG5vdyBwZXJmb3JtYW50IGVub3VnaCBpbiBtb3N0IGJyb3dzZXJzLlxuICogQnV0IHJlbW92aW5nIGl0IHdvdWxkIG1lYW4gYnJlYWtpbmcgY29kZSB0aGF0IHdhcyBhYmxlIHRvIHJ1biBpblxuICogUGhhbnRvbUpTIDEueCwgc28gdGhpcyBtdXN0IGJlIGtlcHQgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIHBvbHlmaWxsQmluZCAoZm4sIGN0eCkge1xuICBmdW5jdGlvbiBib3VuZEZuIChhKSB7XG4gICAgdmFyIGwgPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHJldHVybiBsXG4gICAgICA/IGwgPiAxXG4gICAgICAgID8gZm4uYXBwbHkoY3R4LCBhcmd1bWVudHMpXG4gICAgICAgIDogZm4uY2FsbChjdHgsIGEpXG4gICAgICA6IGZuLmNhbGwoY3R4KVxuICB9XG5cbiAgYm91bmRGbi5fbGVuZ3RoID0gZm4ubGVuZ3RoO1xuICByZXR1cm4gYm91bmRGblxufVxuXG5mdW5jdGlvbiBuYXRpdmVCaW5kIChmbiwgY3R4KSB7XG4gIHJldHVybiBmbi5iaW5kKGN0eClcbn1cblxudmFyIGJpbmQgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZFxuICA/IG5hdGl2ZUJpbmRcbiAgOiBwb2x5ZmlsbEJpbmQ7XG5cbi8qKlxuICogQ29udmVydCBhbiBBcnJheS1saWtlIG9iamVjdCB0byBhIHJlYWwgQXJyYXkuXG4gKi9cbmZ1bmN0aW9uIHRvQXJyYXkgKGxpc3QsIHN0YXJ0KSB7XG4gIHN0YXJ0ID0gc3RhcnQgfHwgMDtcbiAgdmFyIGkgPSBsaXN0Lmxlbmd0aCAtIHN0YXJ0O1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGkpO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgcmV0W2ldID0gbGlzdFtpICsgc3RhcnRdO1xuICB9XG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBNaXggcHJvcGVydGllcyBpbnRvIHRhcmdldCBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZCAodG8sIF9mcm9tKSB7XG4gIGZvciAodmFyIGtleSBpbiBfZnJvbSkge1xuICAgIHRvW2tleV0gPSBfZnJvbVtrZXldO1xuICB9XG4gIHJldHVybiB0b1xufVxuXG4vKipcbiAqIE1lcmdlIGFuIEFycmF5IG9mIE9iamVjdHMgaW50byBhIHNpbmdsZSBPYmplY3QuXG4gKi9cbmZ1bmN0aW9uIHRvT2JqZWN0IChhcnIpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcnJbaV0pIHtcbiAgICAgIGV4dGVuZChyZXMsIGFycltpXSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuLyoqXG4gKiBQZXJmb3JtIG5vIG9wZXJhdGlvbi5cbiAqIFN0dWJiaW5nIGFyZ3MgdG8gbWFrZSBGbG93IGhhcHB5IHdpdGhvdXQgbGVhdmluZyB1c2VsZXNzIHRyYW5zcGlsZWQgY29kZVxuICogd2l0aCAuLi5yZXN0IChodHRwczovL2Zsb3cub3JnL2Jsb2cvMjAxNy8wNS8wNy9TdHJpY3QtRnVuY3Rpb24tQ2FsbC1Bcml0eS8pLlxuICovXG5mdW5jdGlvbiBub29wIChhLCBiLCBjKSB7fVxuXG4vKipcbiAqIEFsd2F5cyByZXR1cm4gZmFsc2UuXG4gKi9cbnZhciBubyA9IGZ1bmN0aW9uIChhLCBiLCBjKSB7IHJldHVybiBmYWxzZTsgfTtcblxuLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG4vKipcbiAqIFJldHVybiB0aGUgc2FtZSB2YWx1ZS5cbiAqL1xudmFyIGlkZW50aXR5ID0gZnVuY3Rpb24gKF8pIHsgcmV0dXJuIF87IH07XG5cbi8qKlxuICogQ2hlY2sgaWYgdHdvIHZhbHVlcyBhcmUgbG9vc2VseSBlcXVhbCAtIHRoYXQgaXMsXG4gKiBpZiB0aGV5IGFyZSBwbGFpbiBvYmplY3RzLCBkbyB0aGV5IGhhdmUgdGhlIHNhbWUgc2hhcGU/XG4gKi9cbmZ1bmN0aW9uIGxvb3NlRXF1YWwgKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHsgcmV0dXJuIHRydWUgfVxuICB2YXIgaXNPYmplY3RBID0gaXNPYmplY3QoYSk7XG4gIHZhciBpc09iamVjdEIgPSBpc09iamVjdChiKTtcbiAgaWYgKGlzT2JqZWN0QSAmJiBpc09iamVjdEIpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIGlzQXJyYXlBID0gQXJyYXkuaXNBcnJheShhKTtcbiAgICAgIHZhciBpc0FycmF5QiA9IEFycmF5LmlzQXJyYXkoYik7XG4gICAgICBpZiAoaXNBcnJheUEgJiYgaXNBcnJheUIpIHtcbiAgICAgICAgcmV0dXJuIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChlLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGxvb3NlRXF1YWwoZSwgYltpXSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSBpZiAoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGEuZ2V0VGltZSgpID09PSBiLmdldFRpbWUoKVxuICAgICAgfSBlbHNlIGlmICghaXNBcnJheUEgJiYgIWlzQXJyYXlCKSB7XG4gICAgICAgIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKGEpO1xuICAgICAgICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhiKTtcbiAgICAgICAgcmV0dXJuIGtleXNBLmxlbmd0aCA9PT0ga2V5c0IubGVuZ3RoICYmIGtleXNBLmV2ZXJ5KGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gbG9vc2VFcXVhbChhW2tleV0sIGJba2V5XSlcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWlzT2JqZWN0QSAmJiAhaXNPYmplY3RCKSB7XG4gICAgcmV0dXJuIFN0cmluZyhhKSA9PT0gU3RyaW5nKGIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgbG9vc2VseSBlcXVhbCB2YWx1ZSBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBhcnJheSAoaWYgdmFsdWUgaXMgYSBwbGFpbiBvYmplY3QsIHRoZSBhcnJheSBtdXN0XG4gKiBjb250YWluIGFuIG9iamVjdCBvZiB0aGUgc2FtZSBzaGFwZSksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICovXG5mdW5jdGlvbiBsb29zZUluZGV4T2YgKGFyciwgdmFsKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGxvb3NlRXF1YWwoYXJyW2ldLCB2YWwpKSB7IHJldHVybiBpIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuLyoqXG4gKiBFbnN1cmUgYSBmdW5jdGlvbiBpcyBjYWxsZWQgb25seSBvbmNlLlxuICovXG5mdW5jdGlvbiBvbmNlIChmbikge1xuICB2YXIgY2FsbGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgQVNTRVRfVFlQRVMgPSBbXG4gICdjb21wb25lbnQnLFxuICAnZGlyZWN0aXZlJyxcbiAgJ2ZpbHRlcidcbl07XG5cbnZhciBMSUZFQ1lDTEVfSE9PS1MgPSBbXG4gICdiZWZvcmVDcmVhdGUnLFxuICAnY3JlYXRlZCcsXG4gICdiZWZvcmVNb3VudCcsXG4gICdtb3VudGVkJyxcbiAgJ2JlZm9yZVVwZGF0ZScsXG4gICd1cGRhdGVkJyxcbiAgJ2JlZm9yZURlc3Ryb3knLFxuICAnZGVzdHJveWVkJyxcbiAgJ2FjdGl2YXRlZCcsXG4gICdkZWFjdGl2YXRlZCcsXG4gICdlcnJvckNhcHR1cmVkJyxcbiAgJ3NlcnZlclByZWZldGNoJ1xuXTtcblxuLyogICovXG5cblxuXG52YXIgY29uZmlnID0gKHtcbiAgLyoqXG4gICAqIE9wdGlvbiBtZXJnZSBzdHJhdGVnaWVzICh1c2VkIGluIGNvcmUvdXRpbC9vcHRpb25zKVxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIG9wdGlvbk1lcmdlU3RyYXRlZ2llczogT2JqZWN0LmNyZWF0ZShudWxsKSxcblxuICAvKipcbiAgICogV2hldGhlciB0byBzdXBwcmVzcyB3YXJuaW5ncy5cbiAgICovXG4gIHNpbGVudDogZmFsc2UsXG5cbiAgLyoqXG4gICAqIFNob3cgcHJvZHVjdGlvbiBtb2RlIHRpcCBtZXNzYWdlIG9uIGJvb3Q/XG4gICAqL1xuICBwcm9kdWN0aW9uVGlwOiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIGVuYWJsZSBkZXZ0b29sc1xuICAgKi9cbiAgZGV2dG9vbHM6IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdG8gcmVjb3JkIHBlcmZcbiAgICovXG4gIHBlcmZvcm1hbmNlOiBmYWxzZSxcblxuICAvKipcbiAgICogRXJyb3IgaGFuZGxlciBmb3Igd2F0Y2hlciBlcnJvcnNcbiAgICovXG4gIGVycm9ySGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogV2FybiBoYW5kbGVyIGZvciB3YXRjaGVyIHdhcm5zXG4gICAqL1xuICB3YXJuSGFuZGxlcjogbnVsbCxcblxuICAvKipcbiAgICogSWdub3JlIGNlcnRhaW4gY3VzdG9tIGVsZW1lbnRzXG4gICAqL1xuICBpZ25vcmVkRWxlbWVudHM6IFtdLFxuXG4gIC8qKlxuICAgKiBDdXN0b20gdXNlciBrZXkgYWxpYXNlcyBmb3Igdi1vblxuICAgKi9cbiAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gIGtleUNvZGVzOiBPYmplY3QuY3JlYXRlKG51bGwpLFxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIHRhZyBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSByZWdpc3RlcmVkIGFzIGFcbiAgICogY29tcG9uZW50LiBUaGlzIGlzIHBsYXRmb3JtLWRlcGVuZGVudCBhbmQgbWF5IGJlIG92ZXJ3cml0dGVuLlxuICAgKi9cbiAgaXNSZXNlcnZlZFRhZzogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGFuIGF0dHJpYnV0ZSBpcyByZXNlcnZlZCBzbyB0aGF0IGl0IGNhbm5vdCBiZSB1c2VkIGFzIGEgY29tcG9uZW50XG4gICAqIHByb3AuIFRoaXMgaXMgcGxhdGZvcm0tZGVwZW5kZW50IGFuZCBtYXkgYmUgb3ZlcndyaXR0ZW4uXG4gICAqL1xuICBpc1Jlc2VydmVkQXR0cjogbm8sXG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgdGFnIGlzIGFuIHVua25vd24gZWxlbWVudC5cbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgaXNVbmtub3duRWxlbWVudDogbm8sXG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmFtZXNwYWNlIG9mIGFuIGVsZW1lbnRcbiAgICovXG4gIGdldFRhZ05hbWVzcGFjZTogbm9vcCxcblxuICAvKipcbiAgICogUGFyc2UgdGhlIHJlYWwgdGFnIG5hbWUgZm9yIHRoZSBzcGVjaWZpYyBwbGF0Zm9ybS5cbiAgICovXG4gIHBhcnNlUGxhdGZvcm1UYWdOYW1lOiBpZGVudGl0eSxcblxuICAvKipcbiAgICogQ2hlY2sgaWYgYW4gYXR0cmlidXRlIG11c3QgYmUgYm91bmQgdXNpbmcgcHJvcGVydHksIGUuZy4gdmFsdWVcbiAgICogUGxhdGZvcm0tZGVwZW5kZW50LlxuICAgKi9cbiAgbXVzdFVzZVByb3A6IG5vLFxuXG4gIC8qKlxuICAgKiBQZXJmb3JtIHVwZGF0ZXMgYXN5bmNocm9ub3VzbHkuIEludGVuZGVkIHRvIGJlIHVzZWQgYnkgVnVlIFRlc3QgVXRpbHNcbiAgICogVGhpcyB3aWxsIHNpZ25pZmljYW50bHkgcmVkdWNlIHBlcmZvcm1hbmNlIGlmIHNldCB0byBmYWxzZS5cbiAgICovXG4gIGFzeW5jOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBFeHBvc2VkIGZvciBsZWdhY3kgcmVhc29uc1xuICAgKi9cbiAgX2xpZmVjeWNsZUhvb2tzOiBMSUZFQ1lDTEVfSE9PS1Ncbn0pO1xuXG4vKiAgKi9cblxuLyoqXG4gKiB1bmljb2RlIGxldHRlcnMgdXNlZCBmb3IgcGFyc2luZyBodG1sIHRhZ3MsIGNvbXBvbmVudCBuYW1lcyBhbmQgcHJvcGVydHkgcGF0aHMuXG4gKiB1c2luZyBodHRwczovL3d3dy53My5vcmcvVFIvaHRtbDUzL3NlbWFudGljcy1zY3JpcHRpbmcuaHRtbCNwb3RlbnRpYWxjdXN0b21lbGVtZW50bmFtZVxuICogc2tpcHBpbmcgXFx1MTAwMDAtXFx1RUZGRkYgZHVlIHRvIGl0IGZyZWV6aW5nIHVwIFBoYW50b21KU1xuICovXG52YXIgdW5pY29kZVJlZ0V4cCA9IC9hLXpBLVpcXHUwMEI3XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjAzRi1cXHUyMDQwXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZELztcblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBzdGFydHMgd2l0aCAkIG9yIF9cbiAqL1xuZnVuY3Rpb24gaXNSZXNlcnZlZCAoc3RyKSB7XG4gIHZhciBjID0gKHN0ciArICcnKS5jaGFyQ29kZUF0KDApO1xuICByZXR1cm4gYyA9PT0gMHgyNCB8fCBjID09PSAweDVGXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcHJvcGVydHkuXG4gKi9cbmZ1bmN0aW9uIGRlZiAob2JqLCBrZXksIHZhbCwgZW51bWVyYWJsZSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICB2YWx1ZTogdmFsLFxuICAgIGVudW1lcmFibGU6ICEhZW51bWVyYWJsZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbi8qKlxuICogUGFyc2Ugc2ltcGxlIHBhdGguXG4gKi9cbnZhciBiYWlsUkUgPSBuZXcgUmVnRXhwKChcIlteXCIgKyAodW5pY29kZVJlZ0V4cC5zb3VyY2UpICsgXCIuJF9cXFxcZF1cIikpO1xuZnVuY3Rpb24gcGFyc2VQYXRoIChwYXRoKSB7XG4gIGlmIChiYWlsUkUudGVzdChwYXRoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBzZWdtZW50cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIW9iaikgeyByZXR1cm4gfVxuICAgICAgb2JqID0gb2JqW3NlZ21lbnRzW2ldXTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialxuICB9XG59XG5cbi8qICAqL1xuXG4vLyBjYW4gd2UgdXNlIF9fcHJvdG9fXz9cbnZhciBoYXNQcm90byA9ICdfX3Byb3RvX18nIGluIHt9O1xuXG4vLyBCcm93c2VyIGVudmlyb25tZW50IHNuaWZmaW5nXG52YXIgaW5Ccm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG52YXIgaW5XZWV4ID0gdHlwZW9mIFdYRW52aXJvbm1lbnQgIT09ICd1bmRlZmluZWQnICYmICEhV1hFbnZpcm9ubWVudC5wbGF0Zm9ybTtcbnZhciB3ZWV4UGxhdGZvcm0gPSBpbldlZXggJiYgV1hFbnZpcm9ubWVudC5wbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xudmFyIFVBID0gaW5Ccm93c2VyICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG52YXIgaXNJRSA9IFVBICYmIC9tc2llfHRyaWRlbnQvLnRlc3QoVUEpO1xudmFyIGlzSUU5ID0gVUEgJiYgVUEuaW5kZXhPZignbXNpZSA5LjAnKSA+IDA7XG52YXIgaXNFZGdlID0gVUEgJiYgVUEuaW5kZXhPZignZWRnZS8nKSA+IDA7XG52YXIgaXNBbmRyb2lkID0gKFVBICYmIFVBLmluZGV4T2YoJ2FuZHJvaWQnKSA+IDApIHx8ICh3ZWV4UGxhdGZvcm0gPT09ICdhbmRyb2lkJyk7XG52YXIgaXNJT1MgPSAoVUEgJiYgL2lwaG9uZXxpcGFkfGlwb2R8aW9zLy50ZXN0KFVBKSkgfHwgKHdlZXhQbGF0Zm9ybSA9PT0gJ2lvcycpO1xudmFyIGlzQ2hyb21lID0gVUEgJiYgL2Nocm9tZVxcL1xcZCsvLnRlc3QoVUEpICYmICFpc0VkZ2U7XG52YXIgaXNQaGFudG9tSlMgPSBVQSAmJiAvcGhhbnRvbWpzLy50ZXN0KFVBKTtcbnZhciBpc0ZGID0gVUEgJiYgVUEubWF0Y2goL2ZpcmVmb3hcXC8oXFxkKykvKTtcblxuLy8gRmlyZWZveCBoYXMgYSBcIndhdGNoXCIgZnVuY3Rpb24gb24gT2JqZWN0LnByb3RvdHlwZS4uLlxudmFyIG5hdGl2ZVdhdGNoID0gKHt9KS53YXRjaDtcbmlmIChpbkJyb3dzZXIpIHtcbiAgdHJ5IHtcbiAgICB2YXIgb3B0cyA9IHt9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvcHRzLCAncGFzc2l2ZScsICh7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICB9XG4gICAgfSkpOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjg1XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QtcGFzc2l2ZScsIG51bGwsIG9wdHMpO1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG4vLyB0aGlzIG5lZWRzIHRvIGJlIGxhenktZXZhbGVkIGJlY2F1c2UgdnVlIG1heSBiZSByZXF1aXJlZCBiZWZvcmVcbi8vIHZ1ZS1zZXJ2ZXItcmVuZGVyZXIgY2FuIHNldCBWVUVfRU5WXG52YXIgX2lzU2VydmVyO1xudmFyIGlzU2VydmVyUmVuZGVyaW5nID0gZnVuY3Rpb24gKCkge1xuICBpZiAoX2lzU2VydmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWluQnJvd3NlciAmJiAhaW5XZWV4ICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBkZXRlY3QgcHJlc2VuY2Ugb2YgdnVlLXNlcnZlci1yZW5kZXJlciBhbmQgYXZvaWRcbiAgICAgIC8vIFdlYnBhY2sgc2hpbW1pbmcgdGhlIHByb2Nlc3NcbiAgICAgIF9pc1NlcnZlciA9IGdsb2JhbFsncHJvY2VzcyddICYmIGdsb2JhbFsncHJvY2VzcyddLmVudi5WVUVfRU5WID09PSAnc2VydmVyJztcbiAgICB9IGVsc2Uge1xuICAgICAgX2lzU2VydmVyID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiBfaXNTZXJ2ZXJcbn07XG5cbi8vIGRldGVjdCBkZXZ0b29sc1xudmFyIGRldnRvb2xzID0gaW5Ccm93c2VyICYmIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuZnVuY3Rpb24gaXNOYXRpdmUgKEN0b3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChDdG9yLnRvU3RyaW5nKCkpXG59XG5cbnZhciBoYXNTeW1ib2wgPVxuICB0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTeW1ib2wpICYmXG4gIHR5cGVvZiBSZWZsZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShSZWZsZWN0Lm93bktleXMpO1xuXG52YXIgX1NldDtcbi8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqLyAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbmlmICh0eXBlb2YgU2V0ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShTZXQpKSB7XG4gIC8vIHVzZSBuYXRpdmUgU2V0IHdoZW4gYXZhaWxhYmxlLlxuICBfU2V0ID0gU2V0O1xufSBlbHNlIHtcbiAgLy8gYSBub24tc3RhbmRhcmQgU2V0IHBvbHlmaWxsIHRoYXQgb25seSB3b3JrcyB3aXRoIHByaW1pdGl2ZSBrZXlzLlxuICBfU2V0ID0gLypAX19QVVJFX18qLyhmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2V0ICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9XG4gICAgU2V0LnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbiBoYXMgKGtleSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0W2tleV0gPT09IHRydWVcbiAgICB9O1xuICAgIFNldC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gYWRkIChrZXkpIHtcbiAgICAgIHRoaXMuc2V0W2tleV0gPSB0cnVlO1xuICAgIH07XG4gICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uIGNsZWFyICgpIHtcbiAgICAgIHRoaXMuc2V0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFNldDtcbiAgfSgpKTtcbn1cblxuLyogICovXG5cbnZhciB3YXJuID0gbm9vcDtcbnZhciB0aXAgPSBub29wO1xudmFyIGdlbmVyYXRlQ29tcG9uZW50VHJhY2UgPSAobm9vcCk7IC8vIHdvcmsgYXJvdW5kIGZsb3cgY2hlY2tcbnZhciBmb3JtYXRDb21wb25lbnROYW1lID0gKG5vb3ApO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgaGFzQ29uc29sZSA9IHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJztcbiAgdmFyIGNsYXNzaWZ5UkUgPSAvKD86XnxbLV9dKShcXHcpL2c7XG4gIHZhciBjbGFzc2lmeSA9IGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKGNsYXNzaWZ5UkUsIGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLnRvVXBwZXJDYXNlKCk7IH0pXG4gICAgLnJlcGxhY2UoL1stX10vZywgJycpOyB9O1xuXG4gIHdhcm4gPSBmdW5jdGlvbiAobXNnLCB2bSkge1xuICAgIHZhciB0cmFjZSA9IHZtID8gZ2VuZXJhdGVDb21wb25lbnRUcmFjZSh2bSkgOiAnJztcblxuICAgIGlmIChjb25maWcud2FybkhhbmRsZXIpIHtcbiAgICAgIGNvbmZpZy53YXJuSGFuZGxlci5jYWxsKG51bGwsIG1zZywgdm0sIHRyYWNlKTtcbiAgICB9IGVsc2UgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbVnVlIHdhcm5dOiBcIiArIG1zZyArIHRyYWNlKSk7XG4gICAgfVxuICB9O1xuXG4gIHRpcCA9IGZ1bmN0aW9uIChtc2csIHZtKSB7XG4gICAgaWYgKGhhc0NvbnNvbGUgJiYgKCFjb25maWcuc2lsZW50KSkge1xuICAgICAgY29uc29sZS53YXJuKFwiW1Z1ZSB0aXBdOiBcIiArIG1zZyArIChcbiAgICAgICAgdm0gPyBnZW5lcmF0ZUNvbXBvbmVudFRyYWNlKHZtKSA6ICcnXG4gICAgICApKTtcbiAgICB9XG4gIH07XG5cbiAgZm9ybWF0Q29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uICh2bSwgaW5jbHVkZUZpbGUpIHtcbiAgICBpZiAodm0uJHJvb3QgPT09IHZtKSB7XG4gICAgICBpZiAodm0uJG9wdGlvbnMgJiYgdm0uJG9wdGlvbnMuX19maWxlKSB7IC8vIGZpeGVkIGJ5IHh4eHh4eFxuICAgICAgICByZXR1cm4gKCcnKSArIHZtLiRvcHRpb25zLl9fZmlsZVxuICAgICAgfVxuICAgICAgcmV0dXJuICc8Um9vdD4nXG4gICAgfVxuICAgIHZhciBvcHRpb25zID0gdHlwZW9mIHZtID09PSAnZnVuY3Rpb24nICYmIHZtLmNpZCAhPSBudWxsXG4gICAgICA/IHZtLm9wdGlvbnNcbiAgICAgIDogdm0uX2lzVnVlXG4gICAgICAgID8gdm0uJG9wdGlvbnMgfHwgdm0uY29uc3RydWN0b3Iub3B0aW9uc1xuICAgICAgICA6IHZtO1xuICAgIHZhciBuYW1lID0gb3B0aW9ucy5uYW1lIHx8IG9wdGlvbnMuX2NvbXBvbmVudFRhZztcbiAgICB2YXIgZmlsZSA9IG9wdGlvbnMuX19maWxlO1xuICAgIGlmICghbmFtZSAmJiBmaWxlKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBmaWxlLm1hdGNoKC8oW14vXFxcXF0rKVxcLnZ1ZSQvKTtcbiAgICAgIG5hbWUgPSBtYXRjaCAmJiBtYXRjaFsxXTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgKG5hbWUgPyAoXCI8XCIgKyAoY2xhc3NpZnkobmFtZSkpICsgXCI+XCIpIDogXCI8QW5vbnltb3VzPlwiKSArXG4gICAgICAoZmlsZSAmJiBpbmNsdWRlRmlsZSAhPT0gZmFsc2UgPyAoXCIgYXQgXCIgKyBmaWxlKSA6ICcnKVxuICAgIClcbiAgfTtcblxuICB2YXIgcmVwZWF0ID0gZnVuY3Rpb24gKHN0ciwgbikge1xuICAgIHZhciByZXMgPSAnJztcbiAgICB3aGlsZSAobikge1xuICAgICAgaWYgKG4gJSAyID09PSAxKSB7IHJlcyArPSBzdHI7IH1cbiAgICAgIGlmIChuID4gMSkgeyBzdHIgKz0gc3RyOyB9XG4gICAgICBuID4+PSAxO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH07XG5cbiAgZ2VuZXJhdGVDb21wb25lbnRUcmFjZSA9IGZ1bmN0aW9uICh2bSkge1xuICAgIGlmICh2bS5faXNWdWUgJiYgdm0uJHBhcmVudCkge1xuICAgICAgdmFyIHRyZWUgPSBbXTtcbiAgICAgIHZhciBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgd2hpbGUgKHZtICYmIHZtLiRvcHRpb25zLm5hbWUgIT09ICdQYWdlQm9keScpIHtcbiAgICAgICAgaWYgKHRyZWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHZhciBsYXN0ID0gdHJlZVt0cmVlLmxlbmd0aCAtIDFdO1xuICAgICAgICAgIGlmIChsYXN0LmNvbnN0cnVjdG9yID09PSB2bS5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlKys7XG4gICAgICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFJlY3Vyc2l2ZVNlcXVlbmNlID4gMCkge1xuICAgICAgICAgICAgdHJlZVt0cmVlLmxlbmd0aCAtIDFdID0gW2xhc3QsIGN1cnJlbnRSZWN1cnNpdmVTZXF1ZW5jZV07XG4gICAgICAgICAgICBjdXJyZW50UmVjdXJzaXZlU2VxdWVuY2UgPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAhdm0uJG9wdGlvbnMuaXNSZXNlcnZlZCAmJiB0cmVlLnB1c2godm0pO1xuICAgICAgICB2bSA9IHZtLiRwYXJlbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gJ1xcblxcbmZvdW5kIGluXFxuXFxuJyArIHRyZWVcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodm0sIGkpIHsgcmV0dXJuIChcIlwiICsgKGkgPT09IDAgPyAnLS0tPiAnIDogcmVwZWF0KCcgJywgNSArIGkgKiAyKSkgKyAoQXJyYXkuaXNBcnJheSh2bSlcbiAgICAgICAgICAgID8gKChmb3JtYXRDb21wb25lbnROYW1lKHZtWzBdKSkgKyBcIi4uLiAoXCIgKyAodm1bMV0pICsgXCIgcmVjdXJzaXZlIGNhbGxzKVwiKVxuICAgICAgICAgICAgOiBmb3JtYXRDb21wb25lbnROYW1lKHZtKSkpOyB9KVxuICAgICAgICAuam9pbignXFxuJylcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcIlxcblxcbihmb3VuZCBpbiBcIiArIChmb3JtYXRDb21wb25lbnROYW1lKHZtKSkgKyBcIilcIilcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkID0gMDtcblxuLyoqXG4gKiBBIGRlcCBpcyBhbiBvYnNlcnZhYmxlIHRoYXQgY2FuIGhhdmUgbXVsdGlwbGVcbiAqIGRpcmVjdGl2ZXMgc3Vic2NyaWJpbmcgdG8gaXQuXG4gKi9cbnZhciBEZXAgPSBmdW5jdGlvbiBEZXAgKCkge1xuICB0aGlzLmlkID0gdWlkKys7XG4gIHRoaXMuc3VicyA9IFtdO1xufTtcblxuRGVwLnByb3RvdHlwZS5hZGRTdWIgPSBmdW5jdGlvbiBhZGRTdWIgKHN1Yikge1xuICB0aGlzLnN1YnMucHVzaChzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5yZW1vdmVTdWIgPSBmdW5jdGlvbiByZW1vdmVTdWIgKHN1Yikge1xuICByZW1vdmUodGhpcy5zdWJzLCBzdWIpO1xufTtcblxuRGVwLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHtcbiAgICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldC5hZGREZXAodGhpcyk7XG4gIH1cbn07XG5cbkRlcC5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5ICgpIHtcbiAgLy8gc3RhYmlsaXplIHRoZSBzdWJzY3JpYmVyIGxpc3QgZmlyc3RcbiAgdmFyIHN1YnMgPSB0aGlzLnN1YnMuc2xpY2UoKTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgIC8vIHN1YnMgYXJlbid0IHNvcnRlZCBpbiBzY2hlZHVsZXIgaWYgbm90IHJ1bm5pbmcgYXN5bmNcbiAgICAvLyB3ZSBuZWVkIHRvIHNvcnQgdGhlbSBub3cgdG8gbWFrZSBzdXJlIHRoZXkgZmlyZSBpbiBjb3JyZWN0XG4gICAgLy8gb3JkZXJcbiAgICBzdWJzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuaWQgLSBiLmlkOyB9KTtcbiAgfVxuICBmb3IgKHZhciBpID0gMCwgbCA9IHN1YnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgc3Vic1tpXS51cGRhdGUoKTtcbiAgfVxufTtcblxuLy8gVGhlIGN1cnJlbnQgdGFyZ2V0IHdhdGNoZXIgYmVpbmcgZXZhbHVhdGVkLlxuLy8gVGhpcyBpcyBnbG9iYWxseSB1bmlxdWUgYmVjYXVzZSBvbmx5IG9uZSB3YXRjaGVyXG4vLyBjYW4gYmUgZXZhbHVhdGVkIGF0IGEgdGltZS5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobnZ1ZSBzaGFyZWQgdnVleClcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5EZXAuU2hhcmVkT2JqZWN0ID0ge307XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldCA9IG51bGw7XG5EZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrID0gW107XG5cbmZ1bmN0aW9uIHB1c2hUYXJnZXQgKHRhcmdldCkge1xuICBEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLnB1c2godGFyZ2V0KTtcbiAgRGVwLlNoYXJlZE9iamVjdC50YXJnZXQgPSB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBvcFRhcmdldCAoKSB7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0U3RhY2sucG9wKCk7XG4gIERlcC5TaGFyZWRPYmplY3QudGFyZ2V0ID0gRGVwLlNoYXJlZE9iamVjdC50YXJnZXRTdGFja1tEZXAuU2hhcmVkT2JqZWN0LnRhcmdldFN0YWNrLmxlbmd0aCAtIDFdO1xufVxuXG4vKiAgKi9cblxudmFyIFZOb2RlID0gZnVuY3Rpb24gVk5vZGUgKFxuICB0YWcsXG4gIGRhdGEsXG4gIGNoaWxkcmVuLFxuICB0ZXh0LFxuICBlbG0sXG4gIGNvbnRleHQsXG4gIGNvbXBvbmVudE9wdGlvbnMsXG4gIGFzeW5jRmFjdG9yeVxuKSB7XG4gIHRoaXMudGFnID0gdGFnO1xuICB0aGlzLmRhdGEgPSBkYXRhO1xuICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIHRoaXMudGV4dCA9IHRleHQ7XG4gIHRoaXMuZWxtID0gZWxtO1xuICB0aGlzLm5zID0gdW5kZWZpbmVkO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICB0aGlzLmZuQ29udGV4dCA9IHVuZGVmaW5lZDtcbiAgdGhpcy5mbk9wdGlvbnMgPSB1bmRlZmluZWQ7XG4gIHRoaXMuZm5TY29wZUlkID0gdW5kZWZpbmVkO1xuICB0aGlzLmtleSA9IGRhdGEgJiYgZGF0YS5rZXk7XG4gIHRoaXMuY29tcG9uZW50T3B0aW9ucyA9IGNvbXBvbmVudE9wdGlvbnM7XG4gIHRoaXMuY29tcG9uZW50SW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gIHRoaXMucGFyZW50ID0gdW5kZWZpbmVkO1xuICB0aGlzLnJhdyA9IGZhbHNlO1xuICB0aGlzLmlzU3RhdGljID0gZmFsc2U7XG4gIHRoaXMuaXNSb290SW5zZXJ0ID0gdHJ1ZTtcbiAgdGhpcy5pc0NvbW1lbnQgPSBmYWxzZTtcbiAgdGhpcy5pc0Nsb25lZCA9IGZhbHNlO1xuICB0aGlzLmlzT25jZSA9IGZhbHNlO1xuICB0aGlzLmFzeW5jRmFjdG9yeSA9IGFzeW5jRmFjdG9yeTtcbiAgdGhpcy5hc3luY01ldGEgPSB1bmRlZmluZWQ7XG4gIHRoaXMuaXNBc3luY1BsYWNlaG9sZGVyID0gZmFsc2U7XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBjaGlsZDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xuXG4vLyBERVBSRUNBVEVEOiBhbGlhcyBmb3IgY29tcG9uZW50SW5zdGFuY2UgZm9yIGJhY2t3YXJkcyBjb21wYXQuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xucHJvdG90eXBlQWNjZXNzb3JzLmNoaWxkLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuY29tcG9uZW50SW5zdGFuY2Vcbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBWTm9kZS5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xuXG52YXIgY3JlYXRlRW1wdHlWTm9kZSA9IGZ1bmN0aW9uICh0ZXh0KSB7XG4gIGlmICggdGV4dCA9PT0gdm9pZCAwICkgdGV4dCA9ICcnO1xuXG4gIHZhciBub2RlID0gbmV3IFZOb2RlKCk7XG4gIG5vZGUudGV4dCA9IHRleHQ7XG4gIG5vZGUuaXNDb21tZW50ID0gdHJ1ZTtcbiAgcmV0dXJuIG5vZGVcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZVRleHRWTm9kZSAodmFsKSB7XG4gIHJldHVybiBuZXcgVk5vZGUodW5kZWZpbmVkLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgU3RyaW5nKHZhbCkpXG59XG5cbi8vIG9wdGltaXplZCBzaGFsbG93IGNsb25lXG4vLyB1c2VkIGZvciBzdGF0aWMgbm9kZXMgYW5kIHNsb3Qgbm9kZXMgYmVjYXVzZSB0aGV5IG1heSBiZSByZXVzZWQgYWNyb3NzXG4vLyBtdWx0aXBsZSByZW5kZXJzLCBjbG9uaW5nIHRoZW0gYXZvaWRzIGVycm9ycyB3aGVuIERPTSBtYW5pcHVsYXRpb25zIHJlbHlcbi8vIG9uIHRoZWlyIGVsbSByZWZlcmVuY2UuXG5mdW5jdGlvbiBjbG9uZVZOb2RlICh2bm9kZSkge1xuICB2YXIgY2xvbmVkID0gbmV3IFZOb2RlKFxuICAgIHZub2RlLnRhZyxcbiAgICB2bm9kZS5kYXRhLFxuICAgIC8vICM3OTc1XG4gICAgLy8gY2xvbmUgY2hpbGRyZW4gYXJyYXkgdG8gYXZvaWQgbXV0YXRpbmcgb3JpZ2luYWwgaW4gY2FzZSBvZiBjbG9uaW5nXG4gICAgLy8gYSBjaGlsZC5cbiAgICB2bm9kZS5jaGlsZHJlbiAmJiB2bm9kZS5jaGlsZHJlbi5zbGljZSgpLFxuICAgIHZub2RlLnRleHQsXG4gICAgdm5vZGUuZWxtLFxuICAgIHZub2RlLmNvbnRleHQsXG4gICAgdm5vZGUuY29tcG9uZW50T3B0aW9ucyxcbiAgICB2bm9kZS5hc3luY0ZhY3RvcnlcbiAgKTtcbiAgY2xvbmVkLm5zID0gdm5vZGUubnM7XG4gIGNsb25lZC5pc1N0YXRpYyA9IHZub2RlLmlzU3RhdGljO1xuICBjbG9uZWQua2V5ID0gdm5vZGUua2V5O1xuICBjbG9uZWQuaXNDb21tZW50ID0gdm5vZGUuaXNDb21tZW50O1xuICBjbG9uZWQuZm5Db250ZXh0ID0gdm5vZGUuZm5Db250ZXh0O1xuICBjbG9uZWQuZm5PcHRpb25zID0gdm5vZGUuZm5PcHRpb25zO1xuICBjbG9uZWQuZm5TY29wZUlkID0gdm5vZGUuZm5TY29wZUlkO1xuICBjbG9uZWQuYXN5bmNNZXRhID0gdm5vZGUuYXN5bmNNZXRhO1xuICBjbG9uZWQuaXNDbG9uZWQgPSB0cnVlO1xuICByZXR1cm4gY2xvbmVkXG59XG5cbi8qXG4gKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGhcbiAqIGR5bmFtaWNhbGx5IGFjY2Vzc2luZyBtZXRob2RzIG9uIEFycmF5IHByb3RvdHlwZVxuICovXG5cbnZhciBhcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xudmFyIGFycmF5TWV0aG9kcyA9IE9iamVjdC5jcmVhdGUoYXJyYXlQcm90byk7XG5cbnZhciBtZXRob2RzVG9QYXRjaCA9IFtcbiAgJ3B1c2gnLFxuICAncG9wJyxcbiAgJ3NoaWZ0JyxcbiAgJ3Vuc2hpZnQnLFxuICAnc3BsaWNlJyxcbiAgJ3NvcnQnLFxuICAncmV2ZXJzZSdcbl07XG5cbi8qKlxuICogSW50ZXJjZXB0IG11dGF0aW5nIG1ldGhvZHMgYW5kIGVtaXQgZXZlbnRzXG4gKi9cbm1ldGhvZHNUb1BhdGNoLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICAvLyBjYWNoZSBvcmlnaW5hbCBtZXRob2RcbiAgdmFyIG9yaWdpbmFsID0gYXJyYXlQcm90b1ttZXRob2RdO1xuICBkZWYoYXJyYXlNZXRob2RzLCBtZXRob2QsIGZ1bmN0aW9uIG11dGF0b3IgKCkge1xuICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIHZhciByZXN1bHQgPSBvcmlnaW5hbC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB2YXIgb2IgPSB0aGlzLl9fb2JfXztcbiAgICB2YXIgaW5zZXJ0ZWQ7XG4gICAgc3dpdGNoIChtZXRob2QpIHtcbiAgICAgIGNhc2UgJ3B1c2gnOlxuICAgICAgY2FzZSAndW5zaGlmdCc6XG4gICAgICAgIGluc2VydGVkID0gYXJncztcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3NwbGljZSc6XG4gICAgICAgIGluc2VydGVkID0gYXJncy5zbGljZSgyKTtcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gICAgaWYgKGluc2VydGVkKSB7IG9iLm9ic2VydmVBcnJheShpbnNlcnRlZCk7IH1cbiAgICAvLyBub3RpZnkgY2hhbmdlXG4gICAgb2IuZGVwLm5vdGlmeSgpO1xuICAgIHJldHVybiByZXN1bHRcbiAgfSk7XG59KTtcblxuLyogICovXG5cbnZhciBhcnJheUtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhhcnJheU1ldGhvZHMpO1xuXG4vKipcbiAqIEluIHNvbWUgY2FzZXMgd2UgbWF5IHdhbnQgdG8gZGlzYWJsZSBvYnNlcnZhdGlvbiBpbnNpZGUgYSBjb21wb25lbnQnc1xuICogdXBkYXRlIGNvbXB1dGF0aW9uLlxuICovXG52YXIgc2hvdWxkT2JzZXJ2ZSA9IHRydWU7XG5cbmZ1bmN0aW9uIHRvZ2dsZU9ic2VydmluZyAodmFsdWUpIHtcbiAgc2hvdWxkT2JzZXJ2ZSA9IHZhbHVlO1xufVxuXG4vKipcbiAqIE9ic2VydmVyIGNsYXNzIHRoYXQgaXMgYXR0YWNoZWQgdG8gZWFjaCBvYnNlcnZlZFxuICogb2JqZWN0LiBPbmNlIGF0dGFjaGVkLCB0aGUgb2JzZXJ2ZXIgY29udmVydHMgdGhlIHRhcmdldFxuICogb2JqZWN0J3MgcHJvcGVydHkga2V5cyBpbnRvIGdldHRlci9zZXR0ZXJzIHRoYXRcbiAqIGNvbGxlY3QgZGVwZW5kZW5jaWVzIGFuZCBkaXNwYXRjaCB1cGRhdGVzLlxuICovXG52YXIgT2JzZXJ2ZXIgPSBmdW5jdGlvbiBPYnNlcnZlciAodmFsdWUpIHtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB0aGlzLmRlcCA9IG5ldyBEZXAoKTtcbiAgdGhpcy52bUNvdW50ID0gMDtcbiAgZGVmKHZhbHVlLCAnX19vYl9fJywgdGhpcyk7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGlmIChoYXNQcm90bykge1xuICAgICAgey8vIGZpeGVkIGJ5IHh4eHh4eCDlvq7kv6HlsI/nqIvluo/kvb/nlKggcGx1Z2lucyDkuYvlkI7vvIzmlbDnu4Tmlrnms5Xooqvnm7TmjqXmjILovb3liLDkuobmlbDnu4Tlr7nosaHkuIrvvIzpnIDopoHmiafooYwgY29weUF1Z21lbnQg6YC76L6RXG4gICAgICAgIGlmKHZhbHVlLnB1c2ggIT09IHZhbHVlLl9fcHJvdG9fXy5wdXNoKXtcbiAgICAgICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3RvQXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3B5QXVnbWVudCh2YWx1ZSwgYXJyYXlNZXRob2RzLCBhcnJheUtleXMpO1xuICAgIH1cbiAgICB0aGlzLm9ic2VydmVBcnJheSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy53YWxrKHZhbHVlKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXYWxrIHRocm91Z2ggYWxsIHByb3BlcnRpZXMgYW5kIGNvbnZlcnQgdGhlbSBpbnRvXG4gKiBnZXR0ZXIvc2V0dGVycy4gVGhpcyBtZXRob2Qgc2hvdWxkIG9ubHkgYmUgY2FsbGVkIHdoZW5cbiAqIHZhbHVlIHR5cGUgaXMgT2JqZWN0LlxuICovXG5PYnNlcnZlci5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIHdhbGsgKG9iaikge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKG9iaiwga2V5c1tpXSk7XG4gIH1cbn07XG5cbi8qKlxuICogT2JzZXJ2ZSBhIGxpc3Qgb2YgQXJyYXkgaXRlbXMuXG4gKi9cbk9ic2VydmVyLnByb3RvdHlwZS5vYnNlcnZlQXJyYXkgPSBmdW5jdGlvbiBvYnNlcnZlQXJyYXkgKGl0ZW1zKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsID0gaXRlbXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgb2JzZXJ2ZShpdGVtc1tpXSk7XG4gIH1cbn07XG5cbi8vIGhlbHBlcnNcblxuLyoqXG4gKiBBdWdtZW50IGEgdGFyZ2V0IE9iamVjdCBvciBBcnJheSBieSBpbnRlcmNlcHRpbmdcbiAqIHRoZSBwcm90b3R5cGUgY2hhaW4gdXNpbmcgX19wcm90b19fXG4gKi9cbmZ1bmN0aW9uIHByb3RvQXVnbWVudCAodGFyZ2V0LCBzcmMpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbiAgdGFyZ2V0Ll9fcHJvdG9fXyA9IHNyYztcbiAgLyogZXNsaW50LWVuYWJsZSBuby1wcm90byAqL1xufVxuXG4vKipcbiAqIEF1Z21lbnQgYSB0YXJnZXQgT2JqZWN0IG9yIEFycmF5IGJ5IGRlZmluaW5nXG4gKiBoaWRkZW4gcHJvcGVydGllcy5cbiAqL1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmZ1bmN0aW9uIGNvcHlBdWdtZW50ICh0YXJnZXQsIHNyYywga2V5cykge1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGtleXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgZGVmKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBdHRlbXB0IHRvIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZSBmb3IgYSB2YWx1ZSxcbiAqIHJldHVybnMgdGhlIG5ldyBvYnNlcnZlciBpZiBzdWNjZXNzZnVsbHkgb2JzZXJ2ZWQsXG4gKiBvciB0aGUgZXhpc3Rpbmcgb2JzZXJ2ZXIgaWYgdGhlIHZhbHVlIGFscmVhZHkgaGFzIG9uZS5cbiAqL1xuZnVuY3Rpb24gb2JzZXJ2ZSAodmFsdWUsIGFzUm9vdERhdGEpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgdmFsdWUgaW5zdGFuY2VvZiBWTm9kZSkge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBvYjtcbiAgaWYgKGhhc093bih2YWx1ZSwgJ19fb2JfXycpICYmIHZhbHVlLl9fb2JfXyBpbnN0YW5jZW9mIE9ic2VydmVyKSB7XG4gICAgb2IgPSB2YWx1ZS5fX29iX187XG4gIH0gZWxzZSBpZiAoXG4gICAgc2hvdWxkT2JzZXJ2ZSAmJlxuICAgICFpc1NlcnZlclJlbmRlcmluZygpICYmXG4gICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IGlzUGxhaW5PYmplY3QodmFsdWUpKSAmJlxuICAgIE9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpICYmXG4gICAgIXZhbHVlLl9pc1Z1ZVxuICApIHtcbiAgICBvYiA9IG5ldyBPYnNlcnZlcih2YWx1ZSk7XG4gIH1cbiAgaWYgKGFzUm9vdERhdGEgJiYgb2IpIHtcbiAgICBvYi52bUNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIG9iXG59XG5cbi8qKlxuICogRGVmaW5lIGEgcmVhY3RpdmUgcHJvcGVydHkgb24gYW4gT2JqZWN0LlxuICovXG5mdW5jdGlvbiBkZWZpbmVSZWFjdGl2ZSQkMSAoXG4gIG9iaixcbiAga2V5LFxuICB2YWwsXG4gIGN1c3RvbVNldHRlcixcbiAgc2hhbGxvd1xuKSB7XG4gIHZhciBkZXAgPSBuZXcgRGVwKCk7XG5cbiAgdmFyIHByb3BlcnR5ID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSk7XG4gIGlmIChwcm9wZXJ0eSAmJiBwcm9wZXJ0eS5jb25maWd1cmFibGUgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBjYXRlciBmb3IgcHJlLWRlZmluZWQgZ2V0dGVyL3NldHRlcnNcbiAgdmFyIGdldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LmdldDtcbiAgdmFyIHNldHRlciA9IHByb3BlcnR5ICYmIHByb3BlcnR5LnNldDtcbiAgaWYgKCghZ2V0dGVyIHx8IHNldHRlcikgJiYgYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhbCA9IG9ialtrZXldO1xuICB9XG5cbiAgdmFyIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKHZhbCk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gcmVhY3RpdmVHZXR0ZXIgKCkge1xuICAgICAgdmFyIHZhbHVlID0gZ2V0dGVyID8gZ2V0dGVyLmNhbGwob2JqKSA6IHZhbDtcbiAgICAgIGlmIChEZXAuU2hhcmVkT2JqZWN0LnRhcmdldCkgeyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgZGVwLmRlcGVuZCgpO1xuICAgICAgICBpZiAoY2hpbGRPYikge1xuICAgICAgICAgIGNoaWxkT2IuZGVwLmRlcGVuZCgpO1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZGVwZW5kQXJyYXkodmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHJlYWN0aXZlU2V0dGVyIChuZXdWYWwpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGdldHRlciA/IGdldHRlci5jYWxsKG9iaikgOiB2YWw7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChuZXdWYWwgPT09IHZhbHVlIHx8IChuZXdWYWwgIT09IG5ld1ZhbCAmJiB2YWx1ZSAhPT0gdmFsdWUpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGN1c3RvbVNldHRlcikge1xuICAgICAgICBjdXN0b21TZXR0ZXIoKTtcbiAgICAgIH1cbiAgICAgIC8vICM3OTgxOiBmb3IgYWNjZXNzb3IgcHJvcGVydGllcyB3aXRob3V0IHNldHRlclxuICAgICAgaWYgKGdldHRlciAmJiAhc2V0dGVyKSB7IHJldHVybiB9XG4gICAgICBpZiAoc2V0dGVyKSB7XG4gICAgICAgIHNldHRlci5jYWxsKG9iaiwgbmV3VmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IG5ld1ZhbDtcbiAgICAgIH1cbiAgICAgIGNoaWxkT2IgPSAhc2hhbGxvdyAmJiBvYnNlcnZlKG5ld1ZhbCk7XG4gICAgICBkZXAubm90aWZ5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBTZXQgYSBwcm9wZXJ0eSBvbiBhbiBvYmplY3QuIEFkZHMgdGhlIG5ldyBwcm9wZXJ0eSBhbmRcbiAqIHRyaWdnZXJzIGNoYW5nZSBub3RpZmljYXRpb24gaWYgdGhlIHByb3BlcnR5IGRvZXNuJ3RcbiAqIGFscmVhZHkgZXhpc3QuXG4gKi9cbmZ1bmN0aW9uIHNldCAodGFyZ2V0LCBrZXksIHZhbCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3Qgc2V0IHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQubGVuZ3RoID0gTWF0aC5tYXgodGFyZ2V0Lmxlbmd0aCwga2V5KTtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSwgdmFsKTtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgaWYgKGtleSBpbiB0YXJnZXQgJiYgIShrZXkgaW4gT2JqZWN0LnByb3RvdHlwZSkpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgYWRkaW5nIHJlYWN0aXZlIHByb3BlcnRpZXMgdG8gYSBWdWUgaW5zdGFuY2Ugb3IgaXRzIHJvb3QgJGRhdGEgJyArXG4gICAgICAnYXQgcnVudGltZSAtIGRlY2xhcmUgaXQgdXBmcm9udCBpbiB0aGUgZGF0YSBvcHRpb24uJ1xuICAgICk7XG4gICAgcmV0dXJuIHZhbFxuICB9XG4gIGlmICghb2IpIHtcbiAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICByZXR1cm4gdmFsXG4gIH1cbiAgZGVmaW5lUmVhY3RpdmUkJDEob2IudmFsdWUsIGtleSwgdmFsKTtcbiAgb2IuZGVwLm5vdGlmeSgpO1xuICByZXR1cm4gdmFsXG59XG5cbi8qKlxuICogRGVsZXRlIGEgcHJvcGVydHkgYW5kIHRyaWdnZXIgY2hhbmdlIGlmIG5lY2Vzc2FyeS5cbiAqL1xuZnVuY3Rpb24gZGVsICh0YXJnZXQsIGtleSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIChpc1VuZGVmKHRhcmdldCkgfHwgaXNQcmltaXRpdmUodGFyZ2V0KSlcbiAgKSB7XG4gICAgd2FybigoXCJDYW5ub3QgZGVsZXRlIHJlYWN0aXZlIHByb3BlcnR5IG9uIHVuZGVmaW5lZCwgbnVsbCwgb3IgcHJpbWl0aXZlIHZhbHVlOiBcIiArICgodGFyZ2V0KSkpKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmIGlzVmFsaWRBcnJheUluZGV4KGtleSkpIHtcbiAgICB0YXJnZXQuc3BsaWNlKGtleSwgMSk7XG4gICAgcmV0dXJuXG4gIH1cbiAgdmFyIG9iID0gKHRhcmdldCkuX19vYl9fO1xuICBpZiAodGFyZ2V0Ll9pc1Z1ZSB8fCAob2IgJiYgb2Iudm1Db3VudCkpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAnQXZvaWQgZGVsZXRpbmcgcHJvcGVydGllcyBvbiBhIFZ1ZSBpbnN0YW5jZSBvciBpdHMgcm9vdCAkZGF0YSAnICtcbiAgICAgICctIGp1c3Qgc2V0IGl0IHRvIG51bGwuJ1xuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKCFoYXNPd24odGFyZ2V0LCBrZXkpKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgZGVsZXRlIHRhcmdldFtrZXldO1xuICBpZiAoIW9iKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgb2IuZGVwLm5vdGlmeSgpO1xufVxuXG4vKipcbiAqIENvbGxlY3QgZGVwZW5kZW5jaWVzIG9uIGFycmF5IGVsZW1lbnRzIHdoZW4gdGhlIGFycmF5IGlzIHRvdWNoZWQsIHNpbmNlXG4gKiB3ZSBjYW5ub3QgaW50ZXJjZXB0IGFycmF5IGVsZW1lbnQgYWNjZXNzIGxpa2UgcHJvcGVydHkgZ2V0dGVycy5cbiAqL1xuZnVuY3Rpb24gZGVwZW5kQXJyYXkgKHZhbHVlKSB7XG4gIGZvciAodmFyIGUgPSAodm9pZCAwKSwgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBlID0gdmFsdWVbaV07XG4gICAgZSAmJiBlLl9fb2JfXyAmJiBlLl9fb2JfXy5kZXAuZGVwZW5kKCk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZSkpIHtcbiAgICAgIGRlcGVuZEFycmF5KGUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBPcHRpb24gb3ZlcndyaXRpbmcgc3RyYXRlZ2llcyBhcmUgZnVuY3Rpb25zIHRoYXQgaGFuZGxlXG4gKiBob3cgdG8gbWVyZ2UgYSBwYXJlbnQgb3B0aW9uIHZhbHVlIGFuZCBhIGNoaWxkIG9wdGlvblxuICogdmFsdWUgaW50byB0aGUgZmluYWwgdmFsdWUuXG4gKi9cbnZhciBzdHJhdHMgPSBjb25maWcub3B0aW9uTWVyZ2VTdHJhdGVnaWVzO1xuXG4vKipcbiAqIE9wdGlvbnMgd2l0aCByZXN0cmljdGlvbnNcbiAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgc3RyYXRzLmVsID0gc3RyYXRzLnByb3BzRGF0YSA9IGZ1bmN0aW9uIChwYXJlbnQsIGNoaWxkLCB2bSwga2V5KSB7XG4gICAgaWYgKCF2bSkge1xuICAgICAgd2FybihcbiAgICAgICAgXCJvcHRpb24gXFxcIlwiICsga2V5ICsgXCJcXFwiIGNhbiBvbmx5IGJlIHVzZWQgZHVyaW5nIGluc3RhbmNlIFwiICtcbiAgICAgICAgJ2NyZWF0aW9uIHdpdGggdGhlIGBuZXdgIGtleXdvcmQuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRTdHJhdChwYXJlbnQsIGNoaWxkKVxuICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciB0aGF0IHJlY3Vyc2l2ZWx5IG1lcmdlcyB0d28gZGF0YSBvYmplY3RzIHRvZ2V0aGVyLlxuICovXG5mdW5jdGlvbiBtZXJnZURhdGEgKHRvLCBmcm9tKSB7XG4gIGlmICghZnJvbSkgeyByZXR1cm4gdG8gfVxuICB2YXIga2V5LCB0b1ZhbCwgZnJvbVZhbDtcblxuICB2YXIga2V5cyA9IGhhc1N5bWJvbFxuICAgID8gUmVmbGVjdC5vd25LZXlzKGZyb20pXG4gICAgOiBPYmplY3Qua2V5cyhmcm9tKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBrZXlzW2ldO1xuICAgIC8vIGluIGNhc2UgdGhlIG9iamVjdCBpcyBhbHJlYWR5IG9ic2VydmVkLi4uXG4gICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgIHRvVmFsID0gdG9ba2V5XTtcbiAgICBmcm9tVmFsID0gZnJvbVtrZXldO1xuICAgIGlmICghaGFzT3duKHRvLCBrZXkpKSB7XG4gICAgICBzZXQodG8sIGtleSwgZnJvbVZhbCk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHRvVmFsICE9PSBmcm9tVmFsICYmXG4gICAgICBpc1BsYWluT2JqZWN0KHRvVmFsKSAmJlxuICAgICAgaXNQbGFpbk9iamVjdChmcm9tVmFsKVxuICAgICkge1xuICAgICAgbWVyZ2VEYXRhKHRvVmFsLCBmcm9tVmFsKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRvXG59XG5cbi8qKlxuICogRGF0YVxuICovXG5mdW5jdGlvbiBtZXJnZURhdGFPckZuIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm1cbikge1xuICBpZiAoIXZtKSB7XG4gICAgLy8gaW4gYSBWdWUuZXh0ZW5kIG1lcmdlLCBib3RoIHNob3VsZCBiZSBmdW5jdGlvbnNcbiAgICBpZiAoIWNoaWxkVmFsKSB7XG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIGlmICghcGFyZW50VmFsKSB7XG4gICAgICByZXR1cm4gY2hpbGRWYWxcbiAgICB9XG4gICAgLy8gd2hlbiBwYXJlbnRWYWwgJiBjaGlsZFZhbCBhcmUgYm90aCBwcmVzZW50LFxuICAgIC8vIHdlIG5lZWQgdG8gcmV0dXJuIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZVxuICAgIC8vIG1lcmdlZCByZXN1bHQgb2YgYm90aCBmdW5jdGlvbnMuLi4gbm8gbmVlZCB0b1xuICAgIC8vIGNoZWNrIGlmIHBhcmVudFZhbCBpcyBhIGZ1bmN0aW9uIGhlcmUgYmVjYXVzZVxuICAgIC8vIGl0IGhhcyB0byBiZSBhIGZ1bmN0aW9uIHRvIHBhc3MgcHJldmlvdXMgbWVyZ2VzLlxuICAgIHJldHVybiBmdW5jdGlvbiBtZXJnZWREYXRhRm4gKCkge1xuICAgICAgcmV0dXJuIG1lcmdlRGF0YShcbiAgICAgICAgdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nID8gY2hpbGRWYWwuY2FsbCh0aGlzLCB0aGlzKSA6IGNoaWxkVmFsLFxuICAgICAgICB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nID8gcGFyZW50VmFsLmNhbGwodGhpcywgdGhpcykgOiBwYXJlbnRWYWxcbiAgICAgIClcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIG1lcmdlZEluc3RhbmNlRGF0YUZuICgpIHtcbiAgICAgIC8vIGluc3RhbmNlIG1lcmdlXG4gICAgICB2YXIgaW5zdGFuY2VEYXRhID0gdHlwZW9mIGNoaWxkVmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gY2hpbGRWYWwuY2FsbCh2bSwgdm0pXG4gICAgICAgIDogY2hpbGRWYWw7XG4gICAgICB2YXIgZGVmYXVsdERhdGEgPSB0eXBlb2YgcGFyZW50VmFsID09PSAnZnVuY3Rpb24nXG4gICAgICAgID8gcGFyZW50VmFsLmNhbGwodm0sIHZtKVxuICAgICAgICA6IHBhcmVudFZhbDtcbiAgICAgIGlmIChpbnN0YW5jZURhdGEpIHtcbiAgICAgICAgcmV0dXJuIG1lcmdlRGF0YShpbnN0YW5jZURhdGEsIGRlZmF1bHREYXRhKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHREYXRhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnN0cmF0cy5kYXRhID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bVxuKSB7XG4gIGlmICghdm0pIHtcbiAgICBpZiAoY2hpbGRWYWwgJiYgdHlwZW9mIGNoaWxkVmFsICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICdUaGUgXCJkYXRhXCIgb3B0aW9uIHNob3VsZCBiZSBhIGZ1bmN0aW9uICcgK1xuICAgICAgICAndGhhdCByZXR1cm5zIGEgcGVyLWluc3RhbmNlIHZhbHVlIGluIGNvbXBvbmVudCAnICtcbiAgICAgICAgJ2RlZmluaXRpb25zLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcGFyZW50VmFsXG4gICAgfVxuICAgIHJldHVybiBtZXJnZURhdGFPckZuKHBhcmVudFZhbCwgY2hpbGRWYWwpXG4gIH1cblxuICByZXR1cm4gbWVyZ2VEYXRhT3JGbihwYXJlbnRWYWwsIGNoaWxkVmFsLCB2bSlcbn07XG5cbi8qKlxuICogSG9va3MgYW5kIHByb3BzIGFyZSBtZXJnZWQgYXMgYXJyYXlzLlxuICovXG5mdW5jdGlvbiBtZXJnZUhvb2sgKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsXG4pIHtcbiAgdmFyIHJlcyA9IGNoaWxkVmFsXG4gICAgPyBwYXJlbnRWYWxcbiAgICAgID8gcGFyZW50VmFsLmNvbmNhdChjaGlsZFZhbClcbiAgICAgIDogQXJyYXkuaXNBcnJheShjaGlsZFZhbClcbiAgICAgICAgPyBjaGlsZFZhbFxuICAgICAgICA6IFtjaGlsZFZhbF1cbiAgICA6IHBhcmVudFZhbDtcbiAgcmV0dXJuIHJlc1xuICAgID8gZGVkdXBlSG9va3MocmVzKVxuICAgIDogcmVzXG59XG5cbmZ1bmN0aW9uIGRlZHVwZUhvb2tzIChob29rcykge1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaG9va3MubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzLmluZGV4T2YoaG9va3NbaV0pID09PSAtMSkge1xuICAgICAgcmVzLnB1c2goaG9va3NbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbkxJRkVDWUNMRV9IT09LUy5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gIHN0cmF0c1tob29rXSA9IG1lcmdlSG9vaztcbn0pO1xuXG4vKipcbiAqIEFzc2V0c1xuICpcbiAqIFdoZW4gYSB2bSBpcyBwcmVzZW50IChpbnN0YW5jZSBjcmVhdGlvbiksIHdlIG5lZWQgdG8gZG9cbiAqIGEgdGhyZWUtd2F5IG1lcmdlIGJldHdlZW4gY29uc3RydWN0b3Igb3B0aW9ucywgaW5zdGFuY2VcbiAqIG9wdGlvbnMgYW5kIHBhcmVudCBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBtZXJnZUFzc2V0cyAoXG4gIHBhcmVudFZhbCxcbiAgY2hpbGRWYWwsXG4gIHZtLFxuICBrZXlcbikge1xuICB2YXIgcmVzID0gT2JqZWN0LmNyZWF0ZShwYXJlbnRWYWwgfHwgbnVsbCk7XG4gIGlmIChjaGlsZFZhbCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gICAgcmV0dXJuIGV4dGVuZChyZXMsIGNoaWxkVmFsKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXNcbiAgfVxufVxuXG5BU1NFVF9UWVBFUy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gIHN0cmF0c1t0eXBlICsgJ3MnXSA9IG1lcmdlQXNzZXRzO1xufSk7XG5cbi8qKlxuICogV2F0Y2hlcnMuXG4gKlxuICogV2F0Y2hlcnMgaGFzaGVzIHNob3VsZCBub3Qgb3ZlcndyaXRlIG9uZVxuICogYW5vdGhlciwgc28gd2UgbWVyZ2UgdGhlbSBhcyBhcnJheXMuXG4gKi9cbnN0cmF0cy53YXRjaCA9IGZ1bmN0aW9uIChcbiAgcGFyZW50VmFsLFxuICBjaGlsZFZhbCxcbiAgdm0sXG4gIGtleVxuKSB7XG4gIC8vIHdvcmsgYXJvdW5kIEZpcmVmb3gncyBPYmplY3QucHJvdG90eXBlLndhdGNoLi4uXG4gIGlmIChwYXJlbnRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IHBhcmVudFZhbCA9IHVuZGVmaW5lZDsgfVxuICBpZiAoY2hpbGRWYWwgPT09IG5hdGl2ZVdhdGNoKSB7IGNoaWxkVmFsID0gdW5kZWZpbmVkOyB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoIWNoaWxkVmFsKSB7IHJldHVybiBPYmplY3QuY3JlYXRlKHBhcmVudFZhbCB8fCBudWxsKSB9XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0T2JqZWN0VHlwZShrZXksIGNoaWxkVmFsLCB2bSk7XG4gIH1cbiAgaWYgKCFwYXJlbnRWYWwpIHsgcmV0dXJuIGNoaWxkVmFsIH1cbiAgdmFyIHJldCA9IHt9O1xuICBleHRlbmQocmV0LCBwYXJlbnRWYWwpO1xuICBmb3IgKHZhciBrZXkkMSBpbiBjaGlsZFZhbCkge1xuICAgIHZhciBwYXJlbnQgPSByZXRba2V5JDFdO1xuICAgIHZhciBjaGlsZCA9IGNoaWxkVmFsW2tleSQxXTtcbiAgICBpZiAocGFyZW50ICYmICFBcnJheS5pc0FycmF5KHBhcmVudCkpIHtcbiAgICAgIHBhcmVudCA9IFtwYXJlbnRdO1xuICAgIH1cbiAgICByZXRba2V5JDFdID0gcGFyZW50XG4gICAgICA/IHBhcmVudC5jb25jYXQoY2hpbGQpXG4gICAgICA6IEFycmF5LmlzQXJyYXkoY2hpbGQpID8gY2hpbGQgOiBbY2hpbGRdO1xuICB9XG4gIHJldHVybiByZXRcbn07XG5cbi8qKlxuICogT3RoZXIgb2JqZWN0IGhhc2hlcy5cbiAqL1xuc3RyYXRzLnByb3BzID1cbnN0cmF0cy5tZXRob2RzID1cbnN0cmF0cy5pbmplY3QgPVxuc3RyYXRzLmNvbXB1dGVkID0gZnVuY3Rpb24gKFxuICBwYXJlbnRWYWwsXG4gIGNoaWxkVmFsLFxuICB2bSxcbiAga2V5XG4pIHtcbiAgaWYgKGNoaWxkVmFsICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnRPYmplY3RUeXBlKGtleSwgY2hpbGRWYWwsIHZtKTtcbiAgfVxuICBpZiAoIXBhcmVudFZhbCkgeyByZXR1cm4gY2hpbGRWYWwgfVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgZXh0ZW5kKHJldCwgcGFyZW50VmFsKTtcbiAgaWYgKGNoaWxkVmFsKSB7IGV4dGVuZChyZXQsIGNoaWxkVmFsKTsgfVxuICByZXR1cm4gcmV0XG59O1xuc3RyYXRzLnByb3ZpZGUgPSBtZXJnZURhdGFPckZuO1xuXG4vKipcbiAqIERlZmF1bHQgc3RyYXRlZ3kuXG4gKi9cbnZhciBkZWZhdWx0U3RyYXQgPSBmdW5jdGlvbiAocGFyZW50VmFsLCBjaGlsZFZhbCkge1xuICByZXR1cm4gY2hpbGRWYWwgPT09IHVuZGVmaW5lZFxuICAgID8gcGFyZW50VmFsXG4gICAgOiBjaGlsZFZhbFxufTtcblxuLyoqXG4gKiBWYWxpZGF0ZSBjb21wb25lbnQgbmFtZXNcbiAqL1xuZnVuY3Rpb24gY2hlY2tDb21wb25lbnRzIChvcHRpb25zKSB7XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoa2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbXBvbmVudE5hbWUgKG5hbWUpIHtcbiAgaWYgKCFuZXcgUmVnRXhwKChcIl5bYS16QS1aXVtcXFxcLVxcXFwuMC05X1wiICsgKHVuaWNvZGVSZWdFeHAuc291cmNlKSArIFwiXSokXCIpKS50ZXN0KG5hbWUpKSB7XG4gICAgd2FybihcbiAgICAgICdJbnZhbGlkIGNvbXBvbmVudCBuYW1lOiBcIicgKyBuYW1lICsgJ1wiLiBDb21wb25lbnQgbmFtZXMgJyArXG4gICAgICAnc2hvdWxkIGNvbmZvcm0gdG8gdmFsaWQgY3VzdG9tIGVsZW1lbnQgbmFtZSBpbiBodG1sNSBzcGVjaWZpY2F0aW9uLidcbiAgICApO1xuICB9XG4gIGlmIChpc0J1aWx0SW5UYWcobmFtZSkgfHwgY29uZmlnLmlzUmVzZXJ2ZWRUYWcobmFtZSkpIHtcbiAgICB3YXJuKFxuICAgICAgJ0RvIG5vdCB1c2UgYnVpbHQtaW4gb3IgcmVzZXJ2ZWQgSFRNTCBlbGVtZW50cyBhcyBjb21wb25lbnQgJyArXG4gICAgICAnaWQ6ICcgKyBuYW1lXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIEVuc3VyZSBhbGwgcHJvcHMgb3B0aW9uIHN5bnRheCBhcmUgbm9ybWFsaXplZCBpbnRvIHRoZVxuICogT2JqZWN0LWJhc2VkIGZvcm1hdC5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplUHJvcHMgKG9wdGlvbnMsIHZtKSB7XG4gIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcHM7XG4gIGlmICghcHJvcHMpIHsgcmV0dXJuIH1cbiAgdmFyIHJlcyA9IHt9O1xuICB2YXIgaSwgdmFsLCBuYW1lO1xuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wcykpIHtcbiAgICBpID0gcHJvcHMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHtcbiAgICAgIHZhbCA9IHByb3BzW2ldO1xuICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5hbWUgPSBjYW1lbGl6ZSh2YWwpO1xuICAgICAgICByZXNbbmFtZV0gPSB7IHR5cGU6IG51bGwgfTtcbiAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuKCdwcm9wcyBtdXN0IGJlIHN0cmluZ3Mgd2hlbiB1c2luZyBhcnJheSBzeW50YXguJyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzUGxhaW5PYmplY3QocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICB2YWwgPSBwcm9wc1trZXldO1xuICAgICAgbmFtZSA9IGNhbWVsaXplKGtleSk7XG4gICAgICByZXNbbmFtZV0gPSBpc1BsYWluT2JqZWN0KHZhbClcbiAgICAgICAgPyB2YWxcbiAgICAgICAgOiB7IHR5cGU6IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJwcm9wc1xcXCI6IGV4cGVjdGVkIGFuIEFycmF5IG9yIGFuIE9iamVjdCwgXCIgK1xuICAgICAgXCJidXQgZ290IFwiICsgKHRvUmF3VHlwZShwcm9wcykpICsgXCIuXCIsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgb3B0aW9ucy5wcm9wcyA9IHJlcztcbn1cblxuLyoqXG4gKiBOb3JtYWxpemUgYWxsIGluamVjdGlvbnMgaW50byBPYmplY3QtYmFzZWQgZm9ybWF0XG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZUluamVjdCAob3B0aW9ucywgdm0pIHtcbiAgdmFyIGluamVjdCA9IG9wdGlvbnMuaW5qZWN0O1xuICBpZiAoIWluamVjdCkgeyByZXR1cm4gfVxuICB2YXIgbm9ybWFsaXplZCA9IG9wdGlvbnMuaW5qZWN0ID0ge307XG4gIGlmIChBcnJheS5pc0FycmF5KGluamVjdCkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGluamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgbm9ybWFsaXplZFtpbmplY3RbaV1dID0geyBmcm9tOiBpbmplY3RbaV0gfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdChpbmplY3QpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGluamVjdCkge1xuICAgICAgdmFyIHZhbCA9IGluamVjdFtrZXldO1xuICAgICAgbm9ybWFsaXplZFtrZXldID0gaXNQbGFpbk9iamVjdCh2YWwpXG4gICAgICAgID8gZXh0ZW5kKHsgZnJvbToga2V5IH0sIHZhbClcbiAgICAgICAgOiB7IGZyb206IHZhbCB9O1xuICAgIH1cbiAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgd2FybihcbiAgICAgIFwiSW52YWxpZCB2YWx1ZSBmb3Igb3B0aW9uIFxcXCJpbmplY3RcXFwiOiBleHBlY3RlZCBhbiBBcnJheSBvciBhbiBPYmplY3QsIFwiICtcbiAgICAgIFwiYnV0IGdvdCBcIiArICh0b1Jhd1R5cGUoaW5qZWN0KSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZSByYXcgZnVuY3Rpb24gZGlyZWN0aXZlcyBpbnRvIG9iamVjdCBmb3JtYXQuXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZURpcmVjdGl2ZXMgKG9wdGlvbnMpIHtcbiAgdmFyIGRpcnMgPSBvcHRpb25zLmRpcmVjdGl2ZXM7XG4gIGlmIChkaXJzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIGRpcnMpIHtcbiAgICAgIHZhciBkZWYkJDEgPSBkaXJzW2tleV07XG4gICAgICBpZiAodHlwZW9mIGRlZiQkMSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBkaXJzW2tleV0gPSB7IGJpbmQ6IGRlZiQkMSwgdXBkYXRlOiBkZWYkJDEgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0T2JqZWN0VHlwZSAobmFtZSwgdmFsdWUsIHZtKSB7XG4gIGlmICghaXNQbGFpbk9iamVjdCh2YWx1ZSkpIHtcbiAgICB3YXJuKFxuICAgICAgXCJJbnZhbGlkIHZhbHVlIGZvciBvcHRpb24gXFxcIlwiICsgbmFtZSArIFwiXFxcIjogZXhwZWN0ZWQgYW4gT2JqZWN0LCBcIiArXG4gICAgICBcImJ1dCBnb3QgXCIgKyAodG9SYXdUeXBlKHZhbHVlKSkgKyBcIi5cIixcbiAgICAgIHZtXG4gICAgKTtcbiAgfVxufVxuXG4vKipcbiAqIE1lcmdlIHR3byBvcHRpb24gb2JqZWN0cyBpbnRvIGEgbmV3IG9uZS5cbiAqIENvcmUgdXRpbGl0eSB1c2VkIGluIGJvdGggaW5zdGFudGlhdGlvbiBhbmQgaW5oZXJpdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlT3B0aW9ucyAoXG4gIHBhcmVudCxcbiAgY2hpbGQsXG4gIHZtXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjaGVja0NvbXBvbmVudHMoY2hpbGQpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNoaWxkID0gY2hpbGQub3B0aW9ucztcbiAgfVxuXG4gIG5vcm1hbGl6ZVByb3BzKGNoaWxkLCB2bSk7XG4gIG5vcm1hbGl6ZUluamVjdChjaGlsZCwgdm0pO1xuICBub3JtYWxpemVEaXJlY3RpdmVzKGNoaWxkKTtcblxuICAvLyBBcHBseSBleHRlbmRzIGFuZCBtaXhpbnMgb24gdGhlIGNoaWxkIG9wdGlvbnMsXG4gIC8vIGJ1dCBvbmx5IGlmIGl0IGlzIGEgcmF3IG9wdGlvbnMgb2JqZWN0IHRoYXQgaXNuJ3RcbiAgLy8gdGhlIHJlc3VsdCBvZiBhbm90aGVyIG1lcmdlT3B0aW9ucyBjYWxsLlxuICAvLyBPbmx5IG1lcmdlZCBvcHRpb25zIGhhcyB0aGUgX2Jhc2UgcHJvcGVydHkuXG4gIGlmICghY2hpbGQuX2Jhc2UpIHtcbiAgICBpZiAoY2hpbGQuZXh0ZW5kcykge1xuICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQuZXh0ZW5kcywgdm0pO1xuICAgIH1cbiAgICBpZiAoY2hpbGQubWl4aW5zKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkLm1peGlucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgcGFyZW50ID0gbWVyZ2VPcHRpb25zKHBhcmVudCwgY2hpbGQubWl4aW5zW2ldLCB2bSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9wdGlvbnMgPSB7fTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gcGFyZW50KSB7XG4gICAgbWVyZ2VGaWVsZChrZXkpO1xuICB9XG4gIGZvciAoa2V5IGluIGNoaWxkKSB7XG4gICAgaWYgKCFoYXNPd24ocGFyZW50LCBrZXkpKSB7XG4gICAgICBtZXJnZUZpZWxkKGtleSk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIG1lcmdlRmllbGQgKGtleSkge1xuICAgIHZhciBzdHJhdCA9IHN0cmF0c1trZXldIHx8IGRlZmF1bHRTdHJhdDtcbiAgICBvcHRpb25zW2tleV0gPSBzdHJhdChwYXJlbnRba2V5XSwgY2hpbGRba2V5XSwgdm0sIGtleSk7XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGFuIGFzc2V0LlxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIGJlY2F1c2UgY2hpbGQgaW5zdGFuY2VzIG5lZWQgYWNjZXNzXG4gKiB0byBhc3NldHMgZGVmaW5lZCBpbiBpdHMgYW5jZXN0b3IgY2hhaW4uXG4gKi9cbmZ1bmN0aW9uIHJlc29sdmVBc3NldCAoXG4gIG9wdGlvbnMsXG4gIHR5cGUsXG4gIGlkLFxuICB3YXJuTWlzc2luZ1xuKSB7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAodHlwZW9mIGlkICE9PSAnc3RyaW5nJykge1xuICAgIHJldHVyblxuICB9XG4gIHZhciBhc3NldHMgPSBvcHRpb25zW3R5cGVdO1xuICAvLyBjaGVjayBsb2NhbCByZWdpc3RyYXRpb24gdmFyaWF0aW9ucyBmaXJzdFxuICBpZiAoaGFzT3duKGFzc2V0cywgaWQpKSB7IHJldHVybiBhc3NldHNbaWRdIH1cbiAgdmFyIGNhbWVsaXplZElkID0gY2FtZWxpemUoaWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgY2FtZWxpemVkSWQpKSB7IHJldHVybiBhc3NldHNbY2FtZWxpemVkSWRdIH1cbiAgdmFyIFBhc2NhbENhc2VJZCA9IGNhcGl0YWxpemUoY2FtZWxpemVkSWQpO1xuICBpZiAoaGFzT3duKGFzc2V0cywgUGFzY2FsQ2FzZUlkKSkgeyByZXR1cm4gYXNzZXRzW1Bhc2NhbENhc2VJZF0gfVxuICAvLyBmYWxsYmFjayB0byBwcm90b3R5cGUgY2hhaW5cbiAgdmFyIHJlcyA9IGFzc2V0c1tpZF0gfHwgYXNzZXRzW2NhbWVsaXplZElkXSB8fCBhc3NldHNbUGFzY2FsQ2FzZUlkXTtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2Fybk1pc3NpbmcgJiYgIXJlcykge1xuICAgIHdhcm4oXG4gICAgICAnRmFpbGVkIHRvIHJlc29sdmUgJyArIHR5cGUuc2xpY2UoMCwgLTEpICsgJzogJyArIGlkLFxuICAgICAgb3B0aW9uc1xuICAgICk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcCAoXG4gIGtleSxcbiAgcHJvcE9wdGlvbnMsXG4gIHByb3BzRGF0YSxcbiAgdm1cbikge1xuICB2YXIgcHJvcCA9IHByb3BPcHRpb25zW2tleV07XG4gIHZhciBhYnNlbnQgPSAhaGFzT3duKHByb3BzRGF0YSwga2V5KTtcbiAgdmFyIHZhbHVlID0gcHJvcHNEYXRhW2tleV07XG4gIC8vIGJvb2xlYW4gY2FzdGluZ1xuICB2YXIgYm9vbGVhbkluZGV4ID0gZ2V0VHlwZUluZGV4KEJvb2xlYW4sIHByb3AudHlwZSk7XG4gIGlmIChib29sZWFuSW5kZXggPiAtMSkge1xuICAgIGlmIChhYnNlbnQgJiYgIWhhc093bihwcm9wLCAnZGVmYXVsdCcpKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPT09ICcnIHx8IHZhbHVlID09PSBoeXBoZW5hdGUoa2V5KSkge1xuICAgICAgLy8gb25seSBjYXN0IGVtcHR5IHN0cmluZyAvIHNhbWUgbmFtZSB0byBib29sZWFuIGlmXG4gICAgICAvLyBib29sZWFuIGhhcyBoaWdoZXIgcHJpb3JpdHlcbiAgICAgIHZhciBzdHJpbmdJbmRleCA9IGdldFR5cGVJbmRleChTdHJpbmcsIHByb3AudHlwZSk7XG4gICAgICBpZiAoc3RyaW5nSW5kZXggPCAwIHx8IGJvb2xlYW5JbmRleCA8IHN0cmluZ0luZGV4KSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gY2hlY2sgZGVmYXVsdCB2YWx1ZVxuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHZhbHVlID0gZ2V0UHJvcERlZmF1bHRWYWx1ZSh2bSwgcHJvcCwga2V5KTtcbiAgICAvLyBzaW5jZSB0aGUgZGVmYXVsdCB2YWx1ZSBpcyBhIGZyZXNoIGNvcHksXG4gICAgLy8gbWFrZSBzdXJlIHRvIG9ic2VydmUgaXQuXG4gICAgdmFyIHByZXZTaG91bGRPYnNlcnZlID0gc2hvdWxkT2JzZXJ2ZTtcbiAgICB0b2dnbGVPYnNlcnZpbmcodHJ1ZSk7XG4gICAgb2JzZXJ2ZSh2YWx1ZSk7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKHByZXZTaG91bGRPYnNlcnZlKTtcbiAgfVxuICBpZiAoXG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIC8vIHNraXAgdmFsaWRhdGlvbiBmb3Igd2VleCByZWN5Y2xlLWxpc3QgY2hpbGQgY29tcG9uZW50IHByb3BzXG4gICAgIShmYWxzZSlcbiAgKSB7XG4gICAgYXNzZXJ0UHJvcChwcm9wLCBrZXksIHZhbHVlLCB2bSwgYWJzZW50KTtcbiAgfVxuICByZXR1cm4gdmFsdWVcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGRlZmF1bHQgdmFsdWUgb2YgYSBwcm9wLlxuICovXG5mdW5jdGlvbiBnZXRQcm9wRGVmYXVsdFZhbHVlICh2bSwgcHJvcCwga2V5KSB7XG4gIC8vIG5vIGRlZmF1bHQsIHJldHVybiB1bmRlZmluZWRcbiAgaWYgKCFoYXNPd24ocHJvcCwgJ2RlZmF1bHQnKSkge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuICB2YXIgZGVmID0gcHJvcC5kZWZhdWx0O1xuICAvLyB3YXJuIGFnYWluc3Qgbm9uLWZhY3RvcnkgZGVmYXVsdHMgZm9yIE9iamVjdCAmIEFycmF5XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGlzT2JqZWN0KGRlZikpIHtcbiAgICB3YXJuKFxuICAgICAgJ0ludmFsaWQgZGVmYXVsdCB2YWx1ZSBmb3IgcHJvcCBcIicgKyBrZXkgKyAnXCI6ICcgK1xuICAgICAgJ1Byb3BzIHdpdGggdHlwZSBPYmplY3QvQXJyYXkgbXVzdCB1c2UgYSBmYWN0b3J5IGZ1bmN0aW9uICcgK1xuICAgICAgJ3RvIHJldHVybiB0aGUgZGVmYXVsdCB2YWx1ZS4nLFxuICAgICAgdm1cbiAgICApO1xuICB9XG4gIC8vIHRoZSByYXcgcHJvcCB2YWx1ZSB3YXMgYWxzbyB1bmRlZmluZWQgZnJvbSBwcmV2aW91cyByZW5kZXIsXG4gIC8vIHJldHVybiBwcmV2aW91cyBkZWZhdWx0IHZhbHVlIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdhdGNoZXIgdHJpZ2dlclxuICBpZiAodm0gJiYgdm0uJG9wdGlvbnMucHJvcHNEYXRhICYmXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhW2tleV0gPT09IHVuZGVmaW5lZCAmJlxuICAgIHZtLl9wcm9wc1trZXldICE9PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgcmV0dXJuIHZtLl9wcm9wc1trZXldXG4gIH1cbiAgLy8gY2FsbCBmYWN0b3J5IGZ1bmN0aW9uIGZvciBub24tRnVuY3Rpb24gdHlwZXNcbiAgLy8gYSB2YWx1ZSBpcyBGdW5jdGlvbiBpZiBpdHMgcHJvdG90eXBlIGlzIGZ1bmN0aW9uIGV2ZW4gYWNyb3NzIGRpZmZlcmVudCBleGVjdXRpb24gY29udGV4dFxuICByZXR1cm4gdHlwZW9mIGRlZiA9PT0gJ2Z1bmN0aW9uJyAmJiBnZXRUeXBlKHByb3AudHlwZSkgIT09ICdGdW5jdGlvbidcbiAgICA/IGRlZi5jYWxsKHZtKVxuICAgIDogZGVmXG59XG5cbi8qKlxuICogQXNzZXJ0IHdoZXRoZXIgYSBwcm9wIGlzIHZhbGlkLlxuICovXG5mdW5jdGlvbiBhc3NlcnRQcm9wIChcbiAgcHJvcCxcbiAgbmFtZSxcbiAgdmFsdWUsXG4gIHZtLFxuICBhYnNlbnRcbikge1xuICBpZiAocHJvcC5yZXF1aXJlZCAmJiBhYnNlbnQpIHtcbiAgICB3YXJuKFxuICAgICAgJ01pc3NpbmcgcmVxdWlyZWQgcHJvcDogXCInICsgbmFtZSArICdcIicsXG4gICAgICB2bVxuICAgICk7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgJiYgIXByb3AucmVxdWlyZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdHlwZSA9IHByb3AudHlwZTtcbiAgdmFyIHZhbGlkID0gIXR5cGUgfHwgdHlwZSA9PT0gdHJ1ZTtcbiAgdmFyIGV4cGVjdGVkVHlwZXMgPSBbXTtcbiAgaWYgKHR5cGUpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgIHR5cGUgPSBbdHlwZV07XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZS5sZW5ndGggJiYgIXZhbGlkOyBpKyspIHtcbiAgICAgIHZhciBhc3NlcnRlZFR5cGUgPSBhc3NlcnRUeXBlKHZhbHVlLCB0eXBlW2ldKTtcbiAgICAgIGV4cGVjdGVkVHlwZXMucHVzaChhc3NlcnRlZFR5cGUuZXhwZWN0ZWRUeXBlIHx8ICcnKTtcbiAgICAgIHZhbGlkID0gYXNzZXJ0ZWRUeXBlLnZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICB3YXJuKFxuICAgICAgZ2V0SW52YWxpZFR5cGVNZXNzYWdlKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSxcbiAgICAgIHZtXG4gICAgKTtcbiAgICByZXR1cm5cbiAgfVxuICB2YXIgdmFsaWRhdG9yID0gcHJvcC52YWxpZGF0b3I7XG4gIGlmICh2YWxpZGF0b3IpIHtcbiAgICBpZiAoIXZhbGlkYXRvcih2YWx1ZSkpIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdJbnZhbGlkIHByb3A6IGN1c3RvbSB2YWxpZGF0b3IgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFwiJyArIG5hbWUgKyAnXCIuJyxcbiAgICAgICAgdm1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbnZhciBzaW1wbGVDaGVja1JFID0gL14oU3RyaW5nfE51bWJlcnxCb29sZWFufEZ1bmN0aW9ufFN5bWJvbCkkLztcblxuZnVuY3Rpb24gYXNzZXJ0VHlwZSAodmFsdWUsIHR5cGUpIHtcbiAgdmFyIHZhbGlkO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZ2V0VHlwZSh0eXBlKTtcbiAgaWYgKHNpbXBsZUNoZWNrUkUudGVzdChleHBlY3RlZFR5cGUpKSB7XG4gICAgdmFyIHQgPSB0eXBlb2YgdmFsdWU7XG4gICAgdmFsaWQgPSB0ID09PSBleHBlY3RlZFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBmb3IgcHJpbWl0aXZlIHdyYXBwZXIgb2JqZWN0c1xuICAgIGlmICghdmFsaWQgJiYgdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdPYmplY3QnKSB7XG4gICAgdmFsaWQgPSBpc1BsYWluT2JqZWN0KHZhbHVlKTtcbiAgfSBlbHNlIGlmIChleHBlY3RlZFR5cGUgPT09ICdBcnJheScpIHtcbiAgICB2YWxpZCA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkID0gdmFsdWUgaW5zdGFuY2VvZiB0eXBlO1xuICB9XG4gIHJldHVybiB7XG4gICAgdmFsaWQ6IHZhbGlkLFxuICAgIGV4cGVjdGVkVHlwZTogZXhwZWN0ZWRUeXBlXG4gIH1cbn1cblxuLyoqXG4gKiBVc2UgZnVuY3Rpb24gc3RyaW5nIG5hbWUgdG8gY2hlY2sgYnVpbHQtaW4gdHlwZXMsXG4gKiBiZWNhdXNlIGEgc2ltcGxlIGVxdWFsaXR5IGNoZWNrIHdpbGwgZmFpbCB3aGVuIHJ1bm5pbmdcbiAqIGFjcm9zcyBkaWZmZXJlbnQgdm1zIC8gaWZyYW1lcy5cbiAqL1xuZnVuY3Rpb24gZ2V0VHlwZSAoZm4pIHtcbiAgdmFyIG1hdGNoID0gZm4gJiYgZm4udG9TdHJpbmcoKS5tYXRjaCgvXlxccypmdW5jdGlvbiAoXFx3KykvKTtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiAnJ1xufVxuXG5mdW5jdGlvbiBpc1NhbWVUeXBlIChhLCBiKSB7XG4gIHJldHVybiBnZXRUeXBlKGEpID09PSBnZXRUeXBlKGIpXG59XG5cbmZ1bmN0aW9uIGdldFR5cGVJbmRleCAodHlwZSwgZXhwZWN0ZWRUeXBlcykge1xuICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRUeXBlcykpIHtcbiAgICByZXR1cm4gaXNTYW1lVHlwZShleHBlY3RlZFR5cGVzLCB0eXBlKSA/IDAgOiAtMVxuICB9XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBleHBlY3RlZFR5cGVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGlzU2FtZVR5cGUoZXhwZWN0ZWRUeXBlc1tpXSwgdHlwZSkpIHtcbiAgICAgIHJldHVybiBpXG4gICAgfVxuICB9XG4gIHJldHVybiAtMVxufVxuXG5mdW5jdGlvbiBnZXRJbnZhbGlkVHlwZU1lc3NhZ2UgKG5hbWUsIHZhbHVlLCBleHBlY3RlZFR5cGVzKSB7XG4gIHZhciBtZXNzYWdlID0gXCJJbnZhbGlkIHByb3A6IHR5cGUgY2hlY2sgZmFpbGVkIGZvciBwcm9wIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIuXCIgK1xuICAgIFwiIEV4cGVjdGVkIFwiICsgKGV4cGVjdGVkVHlwZXMubWFwKGNhcGl0YWxpemUpLmpvaW4oJywgJykpO1xuICB2YXIgZXhwZWN0ZWRUeXBlID0gZXhwZWN0ZWRUeXBlc1swXTtcbiAgdmFyIHJlY2VpdmVkVHlwZSA9IHRvUmF3VHlwZSh2YWx1ZSk7XG4gIHZhciBleHBlY3RlZFZhbHVlID0gc3R5bGVWYWx1ZSh2YWx1ZSwgZXhwZWN0ZWRUeXBlKTtcbiAgdmFyIHJlY2VpdmVkVmFsdWUgPSBzdHlsZVZhbHVlKHZhbHVlLCByZWNlaXZlZFR5cGUpO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgZXhwZWN0ZWQgdmFsdWVcbiAgaWYgKGV4cGVjdGVkVHlwZXMubGVuZ3RoID09PSAxICYmXG4gICAgICBpc0V4cGxpY2FibGUoZXhwZWN0ZWRUeXBlKSAmJlxuICAgICAgIWlzQm9vbGVhbihleHBlY3RlZFR5cGUsIHJlY2VpdmVkVHlwZSkpIHtcbiAgICBtZXNzYWdlICs9IFwiIHdpdGggdmFsdWUgXCIgKyBleHBlY3RlZFZhbHVlO1xuICB9XG4gIG1lc3NhZ2UgKz0gXCIsIGdvdCBcIiArIHJlY2VpdmVkVHlwZSArIFwiIFwiO1xuICAvLyBjaGVjayBpZiB3ZSBuZWVkIHRvIHNwZWNpZnkgcmVjZWl2ZWQgdmFsdWVcbiAgaWYgKGlzRXhwbGljYWJsZShyZWNlaXZlZFR5cGUpKSB7XG4gICAgbWVzc2FnZSArPSBcIndpdGggdmFsdWUgXCIgKyByZWNlaXZlZFZhbHVlICsgXCIuXCI7XG4gIH1cbiAgcmV0dXJuIG1lc3NhZ2Vcbn1cblxuZnVuY3Rpb24gc3R5bGVWYWx1ZSAodmFsdWUsIHR5cGUpIHtcbiAgaWYgKHR5cGUgPT09ICdTdHJpbmcnKSB7XG4gICAgcmV0dXJuIChcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCIpXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gJ051bWJlcicpIHtcbiAgICByZXR1cm4gKFwiXCIgKyAoTnVtYmVyKHZhbHVlKSkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcIlwiICsgdmFsdWUpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFeHBsaWNhYmxlICh2YWx1ZSkge1xuICB2YXIgZXhwbGljaXRUeXBlcyA9IFsnc3RyaW5nJywgJ251bWJlcicsICdib29sZWFuJ107XG4gIHJldHVybiBleHBsaWNpdFR5cGVzLnNvbWUoZnVuY3Rpb24gKGVsZW0pIHsgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09IGVsZW07IH0pXG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbiAoKSB7XG4gIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgcmV0dXJuIGFyZ3Muc29tZShmdW5jdGlvbiAoZWxlbSkgeyByZXR1cm4gZWxlbS50b0xvd2VyQ2FzZSgpID09PSAnYm9vbGVhbic7IH0pXG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBoYW5kbGVFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICAvLyBEZWFjdGl2YXRlIGRlcHMgdHJhY2tpbmcgd2hpbGUgcHJvY2Vzc2luZyBlcnJvciBoYW5kbGVyIHRvIGF2b2lkIHBvc3NpYmxlIGluZmluaXRlIHJlbmRlcmluZy5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVleC9pc3N1ZXMvMTUwNVxuICBwdXNoVGFyZ2V0KCk7XG4gIHRyeSB7XG4gICAgaWYgKHZtKSB7XG4gICAgICB2YXIgY3VyID0gdm07XG4gICAgICB3aGlsZSAoKGN1ciA9IGN1ci4kcGFyZW50KSkge1xuICAgICAgICB2YXIgaG9va3MgPSBjdXIuJG9wdGlvbnMuZXJyb3JDYXB0dXJlZDtcbiAgICAgICAgaWYgKGhvb2tzKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBob29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgdmFyIGNhcHR1cmUgPSBob29rc1tpXS5jYWxsKGN1ciwgZXJyLCB2bSwgaW5mbykgPT09IGZhbHNlO1xuICAgICAgICAgICAgICBpZiAoY2FwdHVyZSkgeyByZXR1cm4gfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICBnbG9iYWxIYW5kbGVFcnJvcihlLCBjdXIsICdlcnJvckNhcHR1cmVkIGhvb2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZ2xvYmFsSGFuZGxlRXJyb3IoZXJyLCB2bSwgaW5mbyk7XG4gIH0gZmluYWxseSB7XG4gICAgcG9wVGFyZ2V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52b2tlV2l0aEVycm9ySGFuZGxpbmcgKFxuICBoYW5kbGVyLFxuICBjb250ZXh0LFxuICBhcmdzLFxuICB2bSxcbiAgaW5mb1xuKSB7XG4gIHZhciByZXM7XG4gIHRyeSB7XG4gICAgcmVzID0gYXJncyA/IGhhbmRsZXIuYXBwbHkoY29udGV4dCwgYXJncykgOiBoYW5kbGVyLmNhbGwoY29udGV4dCk7XG4gICAgaWYgKHJlcyAmJiAhcmVzLl9pc1Z1ZSAmJiBpc1Byb21pc2UocmVzKSAmJiAhcmVzLl9oYW5kbGVkKSB7XG4gICAgICByZXMuY2F0Y2goZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvICsgXCIgKFByb21pc2UvYXN5bmMpXCIpOyB9KTtcbiAgICAgIC8vIGlzc3VlICM5NTExXG4gICAgICAvLyBhdm9pZCBjYXRjaCB0cmlnZ2VyaW5nIG11bHRpcGxlIHRpbWVzIHdoZW4gbmVzdGVkIGNhbGxzXG4gICAgICByZXMuX2hhbmRsZWQgPSB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGhhbmRsZUVycm9yKGUsIHZtLCBpbmZvKTtcbiAgfVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIGdsb2JhbEhhbmRsZUVycm9yIChlcnIsIHZtLCBpbmZvKSB7XG4gIGlmIChjb25maWcuZXJyb3JIYW5kbGVyKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBjb25maWcuZXJyb3JIYW5kbGVyLmNhbGwobnVsbCwgZXJyLCB2bSwgaW5mbylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBpZiB0aGUgdXNlciBpbnRlbnRpb25hbGx5IHRocm93cyB0aGUgb3JpZ2luYWwgZXJyb3IgaW4gdGhlIGhhbmRsZXIsXG4gICAgICAvLyBkbyBub3QgbG9nIGl0IHR3aWNlXG4gICAgICBpZiAoZSAhPT0gZXJyKSB7XG4gICAgICAgIGxvZ0Vycm9yKGUsIG51bGwsICdjb25maWcuZXJyb3JIYW5kbGVyJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxvZ0Vycm9yKGVyciwgdm0sIGluZm8pO1xufVxuXG5mdW5jdGlvbiBsb2dFcnJvciAoZXJyLCB2bSwgaW5mbykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHdhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgfVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoKGluQnJvd3NlciB8fCBpbldlZXgpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBlcnJcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIGNhbGxiYWNrcyA9IFtdO1xudmFyIHBlbmRpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MgKCkge1xuICBwZW5kaW5nID0gZmFsc2U7XG4gIHZhciBjb3BpZXMgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gIGNhbGxiYWNrcy5sZW5ndGggPSAwO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNvcGllcy5sZW5ndGg7IGkrKykge1xuICAgIGNvcGllc1tpXSgpO1xuICB9XG59XG5cbi8vIEhlcmUgd2UgaGF2ZSBhc3luYyBkZWZlcnJpbmcgd3JhcHBlcnMgdXNpbmcgbWljcm90YXNrcy5cbi8vIEluIDIuNSB3ZSB1c2VkIChtYWNybykgdGFza3MgKGluIGNvbWJpbmF0aW9uIHdpdGggbWljcm90YXNrcykuXG4vLyBIb3dldmVyLCBpdCBoYXMgc3VidGxlIHByb2JsZW1zIHdoZW4gc3RhdGUgaXMgY2hhbmdlZCByaWdodCBiZWZvcmUgcmVwYWludFxuLy8gKGUuZy4gIzY4MTMsIG91dC1pbiB0cmFuc2l0aW9ucykuXG4vLyBBbHNvLCB1c2luZyAobWFjcm8pIHRhc2tzIGluIGV2ZW50IGhhbmRsZXIgd291bGQgY2F1c2Ugc29tZSB3ZWlyZCBiZWhhdmlvcnNcbi8vIHRoYXQgY2Fubm90IGJlIGNpcmN1bXZlbnRlZCAoZS5nLiAjNzEwOSwgIzcxNTMsICM3NTQ2LCAjNzgzNCwgIzgxMDkpLlxuLy8gU28gd2Ugbm93IHVzZSBtaWNyb3Rhc2tzIGV2ZXJ5d2hlcmUsIGFnYWluLlxuLy8gQSBtYWpvciBkcmF3YmFjayBvZiB0aGlzIHRyYWRlb2ZmIGlzIHRoYXQgdGhlcmUgYXJlIHNvbWUgc2NlbmFyaW9zXG4vLyB3aGVyZSBtaWNyb3Rhc2tzIGhhdmUgdG9vIGhpZ2ggYSBwcmlvcml0eSBhbmQgZmlyZSBpbiBiZXR3ZWVuIHN1cHBvc2VkbHlcbi8vIHNlcXVlbnRpYWwgZXZlbnRzIChlLmcuICM0NTIxLCAjNjY5MCwgd2hpY2ggaGF2ZSB3b3JrYXJvdW5kcylcbi8vIG9yIGV2ZW4gYmV0d2VlbiBidWJibGluZyBvZiB0aGUgc2FtZSBldmVudCAoIzY1NjYpLlxudmFyIHRpbWVyRnVuYztcblxuLy8gVGhlIG5leHRUaWNrIGJlaGF2aW9yIGxldmVyYWdlcyB0aGUgbWljcm90YXNrIHF1ZXVlLCB3aGljaCBjYW4gYmUgYWNjZXNzZWRcbi8vIHZpYSBlaXRoZXIgbmF0aXZlIFByb21pc2UudGhlbiBvciBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXV0YXRpb25PYnNlcnZlciBoYXMgd2lkZXIgc3VwcG9ydCwgaG93ZXZlciBpdCBpcyBzZXJpb3VzbHkgYnVnZ2VkIGluXG4vLyBVSVdlYlZpZXcgaW4gaU9TID49IDkuMy4zIHdoZW4gdHJpZ2dlcmVkIGluIHRvdWNoIGV2ZW50IGhhbmRsZXJzLiBJdFxuLy8gY29tcGxldGVseSBzdG9wcyB3b3JraW5nIGFmdGVyIHRyaWdnZXJpbmcgYSBmZXcgdGltZXMuLi4gc28sIGlmIG5hdGl2ZVxuLy8gUHJvbWlzZSBpcyBhdmFpbGFibGUsIHdlIHdpbGwgdXNlIGl0OlxuLyogaXN0YW5idWwgaWdub3JlIG5leHQsICRmbG93LWRpc2FibGUtbGluZSAqL1xuaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShQcm9taXNlKSkge1xuICB2YXIgcCA9IFByb21pc2UucmVzb2x2ZSgpO1xuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcC50aGVuKGZsdXNoQ2FsbGJhY2tzKTtcbiAgICAvLyBJbiBwcm9ibGVtYXRpYyBVSVdlYlZpZXdzLCBQcm9taXNlLnRoZW4gZG9lc24ndCBjb21wbGV0ZWx5IGJyZWFrLCBidXRcbiAgICAvLyBpdCBjYW4gZ2V0IHN0dWNrIGluIGEgd2VpcmQgc3RhdGUgd2hlcmUgY2FsbGJhY2tzIGFyZSBwdXNoZWQgaW50byB0aGVcbiAgICAvLyBtaWNyb3Rhc2sgcXVldWUgYnV0IHRoZSBxdWV1ZSBpc24ndCBiZWluZyBmbHVzaGVkLCB1bnRpbCB0aGUgYnJvd3NlclxuICAgIC8vIG5lZWRzIHRvIGRvIHNvbWUgb3RoZXIgd29yaywgZS5nLiBoYW5kbGUgYSB0aW1lci4gVGhlcmVmb3JlIHdlIGNhblxuICAgIC8vIFwiZm9yY2VcIiB0aGUgbWljcm90YXNrIHF1ZXVlIHRvIGJlIGZsdXNoZWQgYnkgYWRkaW5nIGFuIGVtcHR5IHRpbWVyLlxuICAgIGlmIChpc0lPUykgeyBzZXRUaW1lb3V0KG5vb3ApOyB9XG4gIH07XG59IGVsc2UgaWYgKCFpc0lFICYmIHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJyAmJiAoXG4gIGlzTmF0aXZlKE11dGF0aW9uT2JzZXJ2ZXIpIHx8XG4gIC8vIFBoYW50b21KUyBhbmQgaU9TIDcueFxuICBNdXRhdGlvbk9ic2VydmVyLnRvU3RyaW5nKCkgPT09ICdbb2JqZWN0IE11dGF0aW9uT2JzZXJ2ZXJDb25zdHJ1Y3Rvcl0nXG4pKSB7XG4gIC8vIFVzZSBNdXRhdGlvbk9ic2VydmVyIHdoZXJlIG5hdGl2ZSBQcm9taXNlIGlzIG5vdCBhdmFpbGFibGUsXG4gIC8vIGUuZy4gUGhhbnRvbUpTLCBpT1M3LCBBbmRyb2lkIDQuNFxuICAvLyAoIzY0NjYgTXV0YXRpb25PYnNlcnZlciBpcyB1bnJlbGlhYmxlIGluIElFMTEpXG4gIHZhciBjb3VudGVyID0gMTtcbiAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZmx1c2hDYWxsYmFja3MpO1xuICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoY291bnRlcikpO1xuICBvYnNlcnZlci5vYnNlcnZlKHRleHROb2RlLCB7XG4gICAgY2hhcmFjdGVyRGF0YTogdHJ1ZVxuICB9KTtcbiAgdGltZXJGdW5jID0gZnVuY3Rpb24gKCkge1xuICAgIGNvdW50ZXIgPSAoY291bnRlciArIDEpICUgMjtcbiAgICB0ZXh0Tm9kZS5kYXRhID0gU3RyaW5nKGNvdW50ZXIpO1xuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSAndW5kZWZpbmVkJyAmJiBpc05hdGl2ZShzZXRJbW1lZGlhdGUpKSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldEltbWVkaWF0ZS5cbiAgLy8gVGVjaG5pY2FsbHkgaXQgbGV2ZXJhZ2VzIHRoZSAobWFjcm8pIHRhc2sgcXVldWUsXG4gIC8vIGJ1dCBpdCBpcyBzdGlsbCBhIGJldHRlciBjaG9pY2UgdGhhbiBzZXRUaW1lb3V0LlxuICB0aW1lckZ1bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgc2V0SW1tZWRpYXRlKGZsdXNoQ2FsbGJhY2tzKTtcbiAgfTtcbn0gZWxzZSB7XG4gIC8vIEZhbGxiYWNrIHRvIHNldFRpbWVvdXQuXG4gIHRpbWVyRnVuYyA9IGZ1bmN0aW9uICgpIHtcbiAgICBzZXRUaW1lb3V0KGZsdXNoQ2FsbGJhY2tzLCAwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2sgKGNiLCBjdHgpIHtcbiAgdmFyIF9yZXNvbHZlO1xuICBjYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjYi5jYWxsKGN0eCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGhhbmRsZUVycm9yKGUsIGN0eCwgJ25leHRUaWNrJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChfcmVzb2x2ZSkge1xuICAgICAgX3Jlc29sdmUoY3R4KTtcbiAgICB9XG4gIH0pO1xuICBpZiAoIXBlbmRpbmcpIHtcbiAgICBwZW5kaW5nID0gdHJ1ZTtcbiAgICB0aW1lckZ1bmMoKTtcbiAgfVxuICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgaWYgKCFjYiAmJiB0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIF9yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICB9KVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiBub3QgdHlwZSBjaGVja2luZyB0aGlzIGZpbGUgYmVjYXVzZSBmbG93IGRvZXNuJ3QgcGxheSB3ZWxsIHdpdGggUHJveHkgKi9cblxudmFyIGluaXRQcm94eTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIGFsbG93ZWRHbG9iYWxzID0gbWFrZU1hcChcbiAgICAnSW5maW5pdHksdW5kZWZpbmVkLE5hTixpc0Zpbml0ZSxpc05hTiwnICtcbiAgICAncGFyc2VGbG9hdCxwYXJzZUludCxkZWNvZGVVUkksZGVjb2RlVVJJQ29tcG9uZW50LGVuY29kZVVSSSxlbmNvZGVVUklDb21wb25lbnQsJyArXG4gICAgJ01hdGgsTnVtYmVyLERhdGUsQXJyYXksT2JqZWN0LEJvb2xlYW4sU3RyaW5nLFJlZ0V4cCxNYXAsU2V0LEpTT04sSW50bCwnICtcbiAgICAncmVxdWlyZScgLy8gZm9yIFdlYnBhY2svQnJvd3NlcmlmeVxuICApO1xuXG4gIHZhciB3YXJuTm9uUHJlc2VudCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IG9yIG1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaXMgbm90IGRlZmluZWQgb24gdGhlIGluc3RhbmNlIGJ1dCBcIiArXG4gICAgICAncmVmZXJlbmNlZCBkdXJpbmcgcmVuZGVyLiBNYWtlIHN1cmUgdGhhdCB0aGlzIHByb3BlcnR5IGlzIHJlYWN0aXZlLCAnICtcbiAgICAgICdlaXRoZXIgaW4gdGhlIGRhdGEgb3B0aW9uLCBvciBmb3IgY2xhc3MtYmFzZWQgY29tcG9uZW50cywgYnkgJyArXG4gICAgICAnaW5pdGlhbGl6aW5nIHRoZSBwcm9wZXJ0eS4gJyArXG4gICAgICAnU2VlOiBodHRwczovL3Z1ZWpzLm9yZy92Mi9ndWlkZS9yZWFjdGl2aXR5Lmh0bWwjRGVjbGFyaW5nLVJlYWN0aXZlLVByb3BlcnRpZXMuJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIHdhcm5SZXNlcnZlZFByZWZpeCA9IGZ1bmN0aW9uICh0YXJnZXQsIGtleSkge1xuICAgIHdhcm4oXG4gICAgICBcIlByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBtdXN0IGJlIGFjY2Vzc2VkIHdpdGggXFxcIiRkYXRhLlwiICsga2V5ICsgXCJcXFwiIGJlY2F1c2UgXCIgK1xuICAgICAgJ3Byb3BlcnRpZXMgc3RhcnRpbmcgd2l0aCBcIiRcIiBvciBcIl9cIiBhcmUgbm90IHByb3hpZWQgaW4gdGhlIFZ1ZSBpbnN0YW5jZSB0byAnICtcbiAgICAgICdwcmV2ZW50IGNvbmZsaWN0cyB3aXRoIFZ1ZSBpbnRlcm5hbHMuICcgK1xuICAgICAgJ1NlZTogaHR0cHM6Ly92dWVqcy5vcmcvdjIvYXBpLyNkYXRhJyxcbiAgICAgIHRhcmdldFxuICAgICk7XG4gIH07XG5cbiAgdmFyIGhhc1Byb3h5ID1cbiAgICB0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnICYmIGlzTmF0aXZlKFByb3h5KTtcblxuICBpZiAoaGFzUHJveHkpIHtcbiAgICB2YXIgaXNCdWlsdEluTW9kaWZpZXIgPSBtYWtlTWFwKCdzdG9wLHByZXZlbnQsc2VsZixjdHJsLHNoaWZ0LGFsdCxtZXRhLGV4YWN0Jyk7XG4gICAgY29uZmlnLmtleUNvZGVzID0gbmV3IFByb3h5KGNvbmZpZy5rZXlDb2Rlcywge1xuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQgKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICBpZiAoaXNCdWlsdEluTW9kaWZpZXIoa2V5KSkge1xuICAgICAgICAgIHdhcm4oKFwiQXZvaWQgb3ZlcndyaXRpbmcgYnVpbHQtaW4gbW9kaWZpZXIgaW4gY29uZmlnLmtleUNvZGVzOiAuXCIgKyBrZXkpKTtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHZhciBoYXNIYW5kbGVyID0ge1xuICAgIGhhczogZnVuY3Rpb24gaGFzICh0YXJnZXQsIGtleSkge1xuICAgICAgdmFyIGhhcyA9IGtleSBpbiB0YXJnZXQ7XG4gICAgICB2YXIgaXNBbGxvd2VkID0gYWxsb3dlZEdsb2JhbHMoa2V5KSB8fFxuICAgICAgICAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycgJiYga2V5LmNoYXJBdCgwKSA9PT0gJ18nICYmICEoa2V5IGluIHRhcmdldC4kZGF0YSkpO1xuICAgICAgaWYgKCFoYXMgJiYgIWlzQWxsb3dlZCkge1xuICAgICAgICBpZiAoa2V5IGluIHRhcmdldC4kZGF0YSkgeyB3YXJuUmVzZXJ2ZWRQcmVmaXgodGFyZ2V0LCBrZXkpOyB9XG4gICAgICAgIGVsc2UgeyB3YXJuTm9uUHJlc2VudCh0YXJnZXQsIGtleSk7IH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBoYXMgfHwgIWlzQWxsb3dlZFxuICAgIH1cbiAgfTtcblxuICB2YXIgZ2V0SGFuZGxlciA9IHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAodGFyZ2V0LCBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiAhKGtleSBpbiB0YXJnZXQpKSB7XG4gICAgICAgIGlmIChrZXkgaW4gdGFyZ2V0LiRkYXRhKSB7IHdhcm5SZXNlcnZlZFByZWZpeCh0YXJnZXQsIGtleSk7IH1cbiAgICAgICAgZWxzZSB7IHdhcm5Ob25QcmVzZW50KHRhcmdldCwga2V5KTsgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRhcmdldFtrZXldXG4gICAgfVxuICB9O1xuXG4gIGluaXRQcm94eSA9IGZ1bmN0aW9uIGluaXRQcm94eSAodm0pIHtcbiAgICBpZiAoaGFzUHJveHkpIHtcbiAgICAgIC8vIGRldGVybWluZSB3aGljaCBwcm94eSBoYW5kbGVyIHRvIHVzZVxuICAgICAgdmFyIG9wdGlvbnMgPSB2bS4kb3B0aW9ucztcbiAgICAgIHZhciBoYW5kbGVycyA9IG9wdGlvbnMucmVuZGVyICYmIG9wdGlvbnMucmVuZGVyLl93aXRoU3RyaXBwZWRcbiAgICAgICAgPyBnZXRIYW5kbGVyXG4gICAgICAgIDogaGFzSGFuZGxlcjtcbiAgICAgIHZtLl9yZW5kZXJQcm94eSA9IG5ldyBQcm94eSh2bSwgaGFuZGxlcnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgc2Vlbk9iamVjdHMgPSBuZXcgX1NldCgpO1xuXG4vKipcbiAqIFJlY3Vyc2l2ZWx5IHRyYXZlcnNlIGFuIG9iamVjdCB0byBldm9rZSBhbGwgY29udmVydGVkXG4gKiBnZXR0ZXJzLCBzbyB0aGF0IGV2ZXJ5IG5lc3RlZCBwcm9wZXJ0eSBpbnNpZGUgdGhlIG9iamVjdFxuICogaXMgY29sbGVjdGVkIGFzIGEgXCJkZWVwXCIgZGVwZW5kZW5jeS5cbiAqL1xuZnVuY3Rpb24gdHJhdmVyc2UgKHZhbCkge1xuICBfdHJhdmVyc2UodmFsLCBzZWVuT2JqZWN0cyk7XG4gIHNlZW5PYmplY3RzLmNsZWFyKCk7XG59XG5cbmZ1bmN0aW9uIF90cmF2ZXJzZSAodmFsLCBzZWVuKSB7XG4gIHZhciBpLCBrZXlzO1xuICB2YXIgaXNBID0gQXJyYXkuaXNBcnJheSh2YWwpO1xuICBpZiAoKCFpc0EgJiYgIWlzT2JqZWN0KHZhbCkpIHx8IE9iamVjdC5pc0Zyb3plbih2YWwpIHx8IHZhbCBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHZhbC5fX29iX18pIHtcbiAgICB2YXIgZGVwSWQgPSB2YWwuX19vYl9fLmRlcC5pZDtcbiAgICBpZiAoc2Vlbi5oYXMoZGVwSWQpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgc2Vlbi5hZGQoZGVwSWQpO1xuICB9XG4gIGlmIChpc0EpIHtcbiAgICBpID0gdmFsLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7IF90cmF2ZXJzZSh2YWxbaV0sIHNlZW4pOyB9XG4gIH0gZWxzZSB7XG4gICAga2V5cyA9IE9iamVjdC5rZXlzKHZhbCk7XG4gICAgaSA9IGtleXMubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pIHsgX3RyYXZlcnNlKHZhbFtrZXlzW2ldXSwgc2Vlbik7IH1cbiAgfVxufVxuXG52YXIgbWFyaztcbnZhciBtZWFzdXJlO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgcGVyZiA9IGluQnJvd3NlciAmJiB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICBpZiAoXG4gICAgcGVyZiAmJlxuICAgIHBlcmYubWFyayAmJlxuICAgIHBlcmYubWVhc3VyZSAmJlxuICAgIHBlcmYuY2xlYXJNYXJrcyAmJlxuICAgIHBlcmYuY2xlYXJNZWFzdXJlc1xuICApIHtcbiAgICBtYXJrID0gZnVuY3Rpb24gKHRhZykgeyByZXR1cm4gcGVyZi5tYXJrKHRhZyk7IH07XG4gICAgbWVhc3VyZSA9IGZ1bmN0aW9uIChuYW1lLCBzdGFydFRhZywgZW5kVGFnKSB7XG4gICAgICBwZXJmLm1lYXN1cmUobmFtZSwgc3RhcnRUYWcsIGVuZFRhZyk7XG4gICAgICBwZXJmLmNsZWFyTWFya3Moc3RhcnRUYWcpO1xuICAgICAgcGVyZi5jbGVhck1hcmtzKGVuZFRhZyk7XG4gICAgICAvLyBwZXJmLmNsZWFyTWVhc3VyZXMobmFtZSlcbiAgICB9O1xuICB9XG59XG5cbi8qICAqL1xuXG52YXIgbm9ybWFsaXplRXZlbnQgPSBjYWNoZWQoZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyIHBhc3NpdmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyYnO1xuICBuYW1lID0gcGFzc2l2ZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICB2YXIgb25jZSQkMSA9IG5hbWUuY2hhckF0KDApID09PSAnfic7IC8vIFByZWZpeGVkIGxhc3QsIGNoZWNrZWQgZmlyc3RcbiAgbmFtZSA9IG9uY2UkJDEgPyBuYW1lLnNsaWNlKDEpIDogbmFtZTtcbiAgdmFyIGNhcHR1cmUgPSBuYW1lLmNoYXJBdCgwKSA9PT0gJyEnO1xuICBuYW1lID0gY2FwdHVyZSA/IG5hbWUuc2xpY2UoMSkgOiBuYW1lO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgb25jZTogb25jZSQkMSxcbiAgICBjYXB0dXJlOiBjYXB0dXJlLFxuICAgIHBhc3NpdmU6IHBhc3NpdmVcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZuSW52b2tlciAoZm5zLCB2bSkge1xuICBmdW5jdGlvbiBpbnZva2VyICgpIHtcbiAgICB2YXIgYXJndW1lbnRzJDEgPSBhcmd1bWVudHM7XG5cbiAgICB2YXIgZm5zID0gaW52b2tlci5mbnM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm5zKSkge1xuICAgICAgdmFyIGNsb25lZCA9IGZucy5zbGljZSgpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbG9uZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2xvbmVkW2ldLCBudWxsLCBhcmd1bWVudHMkMSwgdm0sIFwidi1vbiBoYW5kbGVyXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm4gaGFuZGxlciByZXR1cm4gdmFsdWUgZm9yIHNpbmdsZSBoYW5kbGVyc1xuICAgICAgcmV0dXJuIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGZucywgbnVsbCwgYXJndW1lbnRzLCB2bSwgXCJ2LW9uIGhhbmRsZXJcIilcbiAgICB9XG4gIH1cbiAgaW52b2tlci5mbnMgPSBmbnM7XG4gIHJldHVybiBpbnZva2VyXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpc3RlbmVycyAoXG4gIG9uLFxuICBvbGRPbixcbiAgYWRkLFxuICByZW1vdmUkJDEsXG4gIGNyZWF0ZU9uY2VIYW5kbGVyLFxuICB2bVxuKSB7XG4gIHZhciBuYW1lLCBkZWYkJDEsIGN1ciwgb2xkLCBldmVudDtcbiAgZm9yIChuYW1lIGluIG9uKSB7XG4gICAgZGVmJCQxID0gY3VyID0gb25bbmFtZV07XG4gICAgb2xkID0gb2xkT25bbmFtZV07XG4gICAgZXZlbnQgPSBub3JtYWxpemVFdmVudChuYW1lKTtcbiAgICBpZiAoaXNVbmRlZihjdXIpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiSW52YWxpZCBoYW5kbGVyIGZvciBldmVudCBcXFwiXCIgKyAoZXZlbnQubmFtZSkgKyBcIlxcXCI6IGdvdCBcIiArIFN0cmluZyhjdXIpLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGlzVW5kZWYob2xkKSkge1xuICAgICAgaWYgKGlzVW5kZWYoY3VyLmZucykpIHtcbiAgICAgICAgY3VyID0gb25bbmFtZV0gPSBjcmVhdGVGbkludm9rZXIoY3VyLCB2bSk7XG4gICAgICB9XG4gICAgICBpZiAoaXNUcnVlKGV2ZW50Lm9uY2UpKSB7XG4gICAgICAgIGN1ciA9IG9uW25hbWVdID0gY3JlYXRlT25jZUhhbmRsZXIoZXZlbnQubmFtZSwgY3VyLCBldmVudC5jYXB0dXJlKTtcbiAgICAgIH1cbiAgICAgIGFkZChldmVudC5uYW1lLCBjdXIsIGV2ZW50LmNhcHR1cmUsIGV2ZW50LnBhc3NpdmUsIGV2ZW50LnBhcmFtcyk7XG4gICAgfSBlbHNlIGlmIChjdXIgIT09IG9sZCkge1xuICAgICAgb2xkLmZucyA9IGN1cjtcbiAgICAgIG9uW25hbWVdID0gb2xkO1xuICAgIH1cbiAgfVxuICBmb3IgKG5hbWUgaW4gb2xkT24pIHtcbiAgICBpZiAoaXNVbmRlZihvbltuYW1lXSkpIHtcbiAgICAgIGV2ZW50ID0gbm9ybWFsaXplRXZlbnQobmFtZSk7XG4gICAgICByZW1vdmUkJDEoZXZlbnQubmFtZSwgb2xkT25bbmFtZV0sIGV2ZW50LmNhcHR1cmUpO1xuICAgIH1cbiAgfVxufVxuXG4vKiAgKi9cblxuLyogICovXG5cbi8vIGZpeGVkIGJ5IHh4eHh4eCAobXAgcHJvcGVydGllcylcbmZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCByZXMsIGNvbnRleHQpIHtcbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLm1wT3B0aW9ucyAmJiBDdG9yLm9wdGlvbnMubXBPcHRpb25zLnByb3BlcnRpZXM7XG4gIGlmIChpc1VuZGVmKHByb3BPcHRpb25zKSkge1xuICAgIHJldHVybiByZXNcbiAgfVxuICB2YXIgZXh0ZXJuYWxDbGFzc2VzID0gQ3Rvci5vcHRpb25zLm1wT3B0aW9ucy5leHRlcm5hbENsYXNzZXMgfHwgW107XG4gIHZhciBhdHRycyA9IGRhdGEuYXR0cnM7XG4gIHZhciBwcm9wcyA9IGRhdGEucHJvcHM7XG4gIGlmIChpc0RlZihhdHRycykgfHwgaXNEZWYocHJvcHMpKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BPcHRpb25zKSB7XG4gICAgICB2YXIgYWx0S2V5ID0gaHlwaGVuYXRlKGtleSk7XG4gICAgICB2YXIgcmVzdWx0ID0gY2hlY2tQcm9wKHJlcywgcHJvcHMsIGtleSwgYWx0S2V5LCB0cnVlKSB8fFxuICAgICAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSwgZmFsc2UpO1xuICAgICAgLy8gZXh0ZXJuYWxDbGFzc1xuICAgICAgaWYgKFxuICAgICAgICByZXN1bHQgJiZcbiAgICAgICAgcmVzW2tleV0gJiZcbiAgICAgICAgZXh0ZXJuYWxDbGFzc2VzLmluZGV4T2YoYWx0S2V5KSAhPT0gLTEgJiZcbiAgICAgICAgY29udGV4dFtjYW1lbGl6ZShyZXNba2V5XSldXG4gICAgICApIHtcbiAgICAgICAgLy8g6LWL5YC8IGV4dGVybmFsQ2xhc3Mg55yf5q2j55qE5YC8KOaooeadv+mHjCBleHRlcm5hbENsYXNzIOeahOWAvOWPr+iDveaYr+Wtl+espuS4silcbiAgICAgICAgcmVzW2tleV0gPSBjb250ZXh0W2NhbWVsaXplKHJlc1trZXldKV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YSAoXG4gIGRhdGEsXG4gIEN0b3IsXG4gIHRhZyxcbiAgY29udGV4dC8vIGZpeGVkIGJ5IHh4eHh4eFxuKSB7XG4gIC8vIHdlIGFyZSBvbmx5IGV4dHJhY3RpbmcgcmF3IHZhbHVlcyBoZXJlLlxuICAvLyB2YWxpZGF0aW9uIGFuZCBkZWZhdWx0IHZhbHVlcyBhcmUgaGFuZGxlZCBpbiB0aGUgY2hpbGRcbiAgLy8gY29tcG9uZW50IGl0c2VsZi5cbiAgdmFyIHByb3BPcHRpb25zID0gQ3Rvci5vcHRpb25zLnByb3BzO1xuICBpZiAoaXNVbmRlZihwcm9wT3B0aW9ucykpIHtcbiAgICAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICByZXR1cm4gZXh0cmFjdFByb3BlcnRpZXNGcm9tVk5vZGVEYXRhKGRhdGEsIEN0b3IsIHt9LCBjb250ZXh0KVxuICB9XG4gIHZhciByZXMgPSB7fTtcbiAgdmFyIGF0dHJzID0gZGF0YS5hdHRycztcbiAgdmFyIHByb3BzID0gZGF0YS5wcm9wcztcbiAgaWYgKGlzRGVmKGF0dHJzKSB8fCBpc0RlZihwcm9wcykpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcE9wdGlvbnMpIHtcbiAgICAgIHZhciBhbHRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHZhciBrZXlJbkxvd2VyQ2FzZSA9IGtleS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoXG4gICAgICAgICAga2V5ICE9PSBrZXlJbkxvd2VyQ2FzZSAmJlxuICAgICAgICAgIGF0dHJzICYmIGhhc093bihhdHRycywga2V5SW5Mb3dlckNhc2UpXG4gICAgICAgICkge1xuICAgICAgICAgIHRpcChcbiAgICAgICAgICAgIFwiUHJvcCBcXFwiXCIgKyBrZXlJbkxvd2VyQ2FzZSArIFwiXFxcIiBpcyBwYXNzZWQgdG8gY29tcG9uZW50IFwiICtcbiAgICAgICAgICAgIChmb3JtYXRDb21wb25lbnROYW1lKHRhZyB8fCBDdG9yKSkgKyBcIiwgYnV0IHRoZSBkZWNsYXJlZCBwcm9wIG5hbWUgaXNcIiArXG4gICAgICAgICAgICBcIiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIuIFwiICtcbiAgICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgY2FtZWxDYXNlZCBcIiArXG4gICAgICAgICAgICBcInByb3BzIG5lZWQgdG8gdXNlIHRoZWlyIGtlYmFiLWNhc2UgZXF1aXZhbGVudHMgd2hlbiB1c2luZyBpbi1ET00gXCIgK1xuICAgICAgICAgICAgXCJ0ZW1wbGF0ZXMuIFlvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIGFsdEtleSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGtleSArIFwiXFxcIi5cIlxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoZWNrUHJvcChyZXMsIHByb3BzLCBrZXksIGFsdEtleSwgdHJ1ZSkgfHxcbiAgICAgIGNoZWNrUHJvcChyZXMsIGF0dHJzLCBrZXksIGFsdEtleSwgZmFsc2UpO1xuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHhcbiAgcmV0dXJuIGV4dHJhY3RQcm9wZXJ0aWVzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCByZXMsIGNvbnRleHQpXG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcCAoXG4gIHJlcyxcbiAgaGFzaCxcbiAga2V5LFxuICBhbHRLZXksXG4gIHByZXNlcnZlXG4pIHtcbiAgaWYgKGlzRGVmKGhhc2gpKSB7XG4gICAgaWYgKGhhc093bihoYXNoLCBrZXkpKSB7XG4gICAgICByZXNba2V5XSA9IGhhc2hba2V5XTtcbiAgICAgIGlmICghcHJlc2VydmUpIHtcbiAgICAgICAgZGVsZXRlIGhhc2hba2V5XTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBlbHNlIGlmIChoYXNPd24oaGFzaCwgYWx0S2V5KSkge1xuICAgICAgcmVzW2tleV0gPSBoYXNoW2FsdEtleV07XG4gICAgICBpZiAoIXByZXNlcnZlKSB7XG4gICAgICAgIGRlbGV0ZSBoYXNoW2FsdEtleV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyogICovXG5cbi8vIFRoZSB0ZW1wbGF0ZSBjb21waWxlciBhdHRlbXB0cyB0byBtaW5pbWl6ZSB0aGUgbmVlZCBmb3Igbm9ybWFsaXphdGlvbiBieVxuLy8gc3RhdGljYWxseSBhbmFseXppbmcgdGhlIHRlbXBsYXRlIGF0IGNvbXBpbGUgdGltZS5cbi8vXG4vLyBGb3IgcGxhaW4gSFRNTCBtYXJrdXAsIG5vcm1hbGl6YXRpb24gY2FuIGJlIGNvbXBsZXRlbHkgc2tpcHBlZCBiZWNhdXNlIHRoZVxuLy8gZ2VuZXJhdGVkIHJlbmRlciBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIHJldHVybiBBcnJheTxWTm9kZT4uIFRoZXJlIGFyZVxuLy8gdHdvIGNhc2VzIHdoZXJlIGV4dHJhIG5vcm1hbGl6YXRpb24gaXMgbmVlZGVkOlxuXG4vLyAxLiBXaGVuIHRoZSBjaGlsZHJlbiBjb250YWlucyBjb21wb25lbnRzIC0gYmVjYXVzZSBhIGZ1bmN0aW9uYWwgY29tcG9uZW50XG4vLyBtYXkgcmV0dXJuIGFuIEFycmF5IGluc3RlYWQgb2YgYSBzaW5nbGUgcm9vdC4gSW4gdGhpcyBjYXNlLCBqdXN0IGEgc2ltcGxlXG4vLyBub3JtYWxpemF0aW9uIGlzIG5lZWRlZCAtIGlmIGFueSBjaGlsZCBpcyBhbiBBcnJheSwgd2UgZmxhdHRlbiB0aGUgd2hvbGVcbi8vIHRoaW5nIHdpdGggQXJyYXkucHJvdG90eXBlLmNvbmNhdC4gSXQgaXMgZ3VhcmFudGVlZCB0byBiZSBvbmx5IDEtbGV2ZWwgZGVlcFxuLy8gYmVjYXVzZSBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYWxyZWFkeSBub3JtYWxpemUgdGhlaXIgb3duIGNoaWxkcmVuLlxuZnVuY3Rpb24gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbltpXSkpIHtcbiAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBjaGlsZHJlbilcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuXG59XG5cbi8vIDIuIFdoZW4gdGhlIGNoaWxkcmVuIGNvbnRhaW5zIGNvbnN0cnVjdHMgdGhhdCBhbHdheXMgZ2VuZXJhdGVkIG5lc3RlZCBBcnJheXMsXG4vLyBlLmcuIDx0ZW1wbGF0ZT4sIDxzbG90Piwgdi1mb3IsIG9yIHdoZW4gdGhlIGNoaWxkcmVuIGlzIHByb3ZpZGVkIGJ5IHVzZXJcbi8vIHdpdGggaGFuZC13cml0dGVuIHJlbmRlciBmdW5jdGlvbnMgLyBKU1guIEluIHN1Y2ggY2FzZXMgYSBmdWxsIG5vcm1hbGl6YXRpb25cbi8vIGlzIG5lZWRlZCB0byBjYXRlciB0byBhbGwgcG9zc2libGUgdHlwZXMgb2YgY2hpbGRyZW4gdmFsdWVzLlxuZnVuY3Rpb24gbm9ybWFsaXplQ2hpbGRyZW4gKGNoaWxkcmVuKSB7XG4gIHJldHVybiBpc1ByaW1pdGl2ZShjaGlsZHJlbilcbiAgICA/IFtjcmVhdGVUZXh0Vk5vZGUoY2hpbGRyZW4pXVxuICAgIDogQXJyYXkuaXNBcnJheShjaGlsZHJlbilcbiAgICAgID8gbm9ybWFsaXplQXJyYXlDaGlsZHJlbihjaGlsZHJlbilcbiAgICAgIDogdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGlzVGV4dE5vZGUgKG5vZGUpIHtcbiAgcmV0dXJuIGlzRGVmKG5vZGUpICYmIGlzRGVmKG5vZGUudGV4dCkgJiYgaXNGYWxzZShub2RlLmlzQ29tbWVudClcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplQXJyYXlDaGlsZHJlbiAoY2hpbGRyZW4sIG5lc3RlZEluZGV4KSB7XG4gIHZhciByZXMgPSBbXTtcbiAgdmFyIGksIGMsIGxhc3RJbmRleCwgbGFzdDtcbiAgZm9yIChpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgYyA9IGNoaWxkcmVuW2ldO1xuICAgIGlmIChpc1VuZGVmKGMpIHx8IHR5cGVvZiBjID09PSAnYm9vbGVhbicpIHsgY29udGludWUgfVxuICAgIGxhc3RJbmRleCA9IHJlcy5sZW5ndGggLSAxO1xuICAgIGxhc3QgPSByZXNbbGFzdEluZGV4XTtcbiAgICAvLyAgbmVzdGVkXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYykpIHtcbiAgICAgIGlmIChjLmxlbmd0aCA+IDApIHtcbiAgICAgICAgYyA9IG5vcm1hbGl6ZUFycmF5Q2hpbGRyZW4oYywgKChuZXN0ZWRJbmRleCB8fCAnJykgKyBcIl9cIiArIGkpKTtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICBpZiAoaXNUZXh0Tm9kZShjWzBdKSAmJiBpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgKGNbMF0pLnRleHQpO1xuICAgICAgICAgIGMuc2hpZnQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaC5hcHBseShyZXMsIGMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNQcmltaXRpdmUoYykpIHtcbiAgICAgIGlmIChpc1RleHROb2RlKGxhc3QpKSB7XG4gICAgICAgIC8vIG1lcmdlIGFkamFjZW50IHRleHQgbm9kZXNcbiAgICAgICAgLy8gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIFNTUiBoeWRyYXRpb24gYmVjYXVzZSB0ZXh0IG5vZGVzIGFyZVxuICAgICAgICAvLyBlc3NlbnRpYWxseSBtZXJnZWQgd2hlbiByZW5kZXJlZCB0byBIVE1MIHN0cmluZ3NcbiAgICAgICAgcmVzW2xhc3RJbmRleF0gPSBjcmVhdGVUZXh0Vk5vZGUobGFzdC50ZXh0ICsgYyk7XG4gICAgICB9IGVsc2UgaWYgKGMgIT09ICcnKSB7XG4gICAgICAgIC8vIGNvbnZlcnQgcHJpbWl0aXZlIHRvIHZub2RlXG4gICAgICAgIHJlcy5wdXNoKGNyZWF0ZVRleHRWTm9kZShjKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1RleHROb2RlKGMpICYmIGlzVGV4dE5vZGUobGFzdCkpIHtcbiAgICAgICAgLy8gbWVyZ2UgYWRqYWNlbnQgdGV4dCBub2Rlc1xuICAgICAgICByZXNbbGFzdEluZGV4XSA9IGNyZWF0ZVRleHRWTm9kZShsYXN0LnRleHQgKyBjLnRleHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gZGVmYXVsdCBrZXkgZm9yIG5lc3RlZCBhcnJheSBjaGlsZHJlbiAobGlrZWx5IGdlbmVyYXRlZCBieSB2LWZvcilcbiAgICAgICAgaWYgKGlzVHJ1ZShjaGlsZHJlbi5faXNWTGlzdCkgJiZcbiAgICAgICAgICBpc0RlZihjLnRhZykgJiZcbiAgICAgICAgICBpc1VuZGVmKGMua2V5KSAmJlxuICAgICAgICAgIGlzRGVmKG5lc3RlZEluZGV4KSkge1xuICAgICAgICAgIGMua2V5ID0gXCJfX3ZsaXN0XCIgKyBuZXN0ZWRJbmRleCArIFwiX1wiICsgaSArIFwiX19cIjtcbiAgICAgICAgfVxuICAgICAgICByZXMucHVzaChjKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFByb3ZpZGUgKHZtKSB7XG4gIHZhciBwcm92aWRlID0gdm0uJG9wdGlvbnMucHJvdmlkZTtcbiAgaWYgKHByb3ZpZGUpIHtcbiAgICB2bS5fcHJvdmlkZWQgPSB0eXBlb2YgcHJvdmlkZSA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgPyBwcm92aWRlLmNhbGwodm0pXG4gICAgICA6IHByb3ZpZGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdEluamVjdGlvbnMgKHZtKSB7XG4gIHZhciByZXN1bHQgPSByZXNvbHZlSW5qZWN0KHZtLiRvcHRpb25zLmluamVjdCwgdm0pO1xuICBpZiAocmVzdWx0KSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCBrZXksIHJlc3VsdFtrZXldLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIFwiQXZvaWQgbXV0YXRpbmcgYW4gaW5qZWN0ZWQgdmFsdWUgZGlyZWN0bHkgc2luY2UgdGhlIGNoYW5nZXMgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwcm92aWRlZCBjb21wb25lbnQgcmUtcmVuZGVycy4gXCIgK1xuICAgICAgICAgICAgXCJpbmplY3Rpb24gYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sIGtleSwgcmVzdWx0W2tleV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlSW5qZWN0IChpbmplY3QsIHZtKSB7XG4gIGlmIChpbmplY3QpIHtcbiAgICAvLyBpbmplY3QgaXMgOmFueSBiZWNhdXNlIGZsb3cgaXMgbm90IHNtYXJ0IGVub3VnaCB0byBmaWd1cmUgb3V0IGNhY2hlZFxuICAgIHZhciByZXN1bHQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHZhciBrZXlzID0gaGFzU3ltYm9sXG4gICAgICA/IFJlZmxlY3Qub3duS2V5cyhpbmplY3QpXG4gICAgICA6IE9iamVjdC5rZXlzKGluamVjdCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgLy8gIzY1NzQgaW4gY2FzZSB0aGUgaW5qZWN0IG9iamVjdCBpcyBvYnNlcnZlZC4uLlxuICAgICAgaWYgKGtleSA9PT0gJ19fb2JfXycpIHsgY29udGludWUgfVxuICAgICAgdmFyIHByb3ZpZGVLZXkgPSBpbmplY3Rba2V5XS5mcm9tO1xuICAgICAgdmFyIHNvdXJjZSA9IHZtO1xuICAgICAgd2hpbGUgKHNvdXJjZSkge1xuICAgICAgICBpZiAoc291cmNlLl9wcm92aWRlZCAmJiBoYXNPd24oc291cmNlLl9wcm92aWRlZCwgcHJvdmlkZUtleSkpIHtcbiAgICAgICAgICByZXN1bHRba2V5XSA9IHNvdXJjZS5fcHJvdmlkZWRbcHJvdmlkZUtleV07XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBzb3VyY2UgPSBzb3VyY2UuJHBhcmVudDtcbiAgICAgIH1cbiAgICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIGlmICgnZGVmYXVsdCcgaW4gaW5qZWN0W2tleV0pIHtcbiAgICAgICAgICB2YXIgcHJvdmlkZURlZmF1bHQgPSBpbmplY3Rba2V5XS5kZWZhdWx0O1xuICAgICAgICAgIHJlc3VsdFtrZXldID0gdHlwZW9mIHByb3ZpZGVEZWZhdWx0ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHByb3ZpZGVEZWZhdWx0LmNhbGwodm0pXG4gICAgICAgICAgICA6IHByb3ZpZGVEZWZhdWx0O1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB3YXJuKChcIkluamVjdGlvbiBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgbm90IGZvdW5kXCIpLCB2bSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbi8qICAqL1xuXG5cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIHJhdyBjaGlsZHJlbiBWTm9kZXMgaW50byBhIHNsb3Qgb2JqZWN0LlxuICovXG5mdW5jdGlvbiByZXNvbHZlU2xvdHMgKFxuICBjaGlsZHJlbixcbiAgY29udGV4dFxuKSB7XG4gIGlmICghY2hpbGRyZW4gfHwgIWNoaWxkcmVuLmxlbmd0aCkge1xuICAgIHJldHVybiB7fVxuICB9XG4gIHZhciBzbG90cyA9IHt9O1xuICBmb3IgKHZhciBpID0gMCwgbCA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIHZhciBkYXRhID0gY2hpbGQuZGF0YTtcbiAgICAvLyByZW1vdmUgc2xvdCBhdHRyaWJ1dGUgaWYgdGhlIG5vZGUgaXMgcmVzb2x2ZWQgYXMgYSBWdWUgc2xvdCBub2RlXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5hdHRycyAmJiBkYXRhLmF0dHJzLnNsb3QpIHtcbiAgICAgIGRlbGV0ZSBkYXRhLmF0dHJzLnNsb3Q7XG4gICAgfVxuICAgIC8vIG5hbWVkIHNsb3RzIHNob3VsZCBvbmx5IGJlIHJlc3BlY3RlZCBpZiB0aGUgdm5vZGUgd2FzIHJlbmRlcmVkIGluIHRoZVxuICAgIC8vIHNhbWUgY29udGV4dC5cbiAgICBpZiAoKGNoaWxkLmNvbnRleHQgPT09IGNvbnRleHQgfHwgY2hpbGQuZm5Db250ZXh0ID09PSBjb250ZXh0KSAmJlxuICAgICAgZGF0YSAmJiBkYXRhLnNsb3QgIT0gbnVsbFxuICAgICkge1xuICAgICAgdmFyIG5hbWUgPSBkYXRhLnNsb3Q7XG4gICAgICB2YXIgc2xvdCA9IChzbG90c1tuYW1lXSB8fCAoc2xvdHNbbmFtZV0gPSBbXSkpO1xuICAgICAgaWYgKGNoaWxkLnRhZyA9PT0gJ3RlbXBsYXRlJykge1xuICAgICAgICBzbG90LnB1c2guYXBwbHkoc2xvdCwgY2hpbGQuY2hpbGRyZW4gfHwgW10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2xvdC5wdXNoKGNoaWxkKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZml4ZWQgYnkgeHh4eHh4IOS4tOaXtiBoYWNrIOaOiSB1bmktYXBwIOS4reeahOW8guatpSBuYW1lIHNsb3QgcGFnZVxuICAgICAgaWYoY2hpbGQuYXN5bmNNZXRhICYmIGNoaWxkLmFzeW5jTWV0YS5kYXRhICYmIGNoaWxkLmFzeW5jTWV0YS5kYXRhLnNsb3QgPT09ICdwYWdlJyl7XG4gICAgICAgIChzbG90c1sncGFnZSddIHx8IChzbG90c1sncGFnZSddID0gW10pKS5wdXNoKGNoaWxkKTtcbiAgICAgIH1lbHNle1xuICAgICAgICAoc2xvdHMuZGVmYXVsdCB8fCAoc2xvdHMuZGVmYXVsdCA9IFtdKSkucHVzaChjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGlnbm9yZSBzbG90cyB0aGF0IGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZVxuICBmb3IgKHZhciBuYW1lJDEgaW4gc2xvdHMpIHtcbiAgICBpZiAoc2xvdHNbbmFtZSQxXS5ldmVyeShpc1doaXRlc3BhY2UpKSB7XG4gICAgICBkZWxldGUgc2xvdHNbbmFtZSQxXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNsb3RzXG59XG5cbmZ1bmN0aW9uIGlzV2hpdGVzcGFjZSAobm9kZSkge1xuICByZXR1cm4gKG5vZGUuaXNDb21tZW50ICYmICFub2RlLmFzeW5jRmFjdG9yeSkgfHwgbm9kZS50ZXh0ID09PSAnICdcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNjb3BlZFNsb3RzIChcbiAgc2xvdHMsXG4gIG5vcm1hbFNsb3RzLFxuICBwcmV2U2xvdHNcbikge1xuICB2YXIgcmVzO1xuICB2YXIgaGFzTm9ybWFsU2xvdHMgPSBPYmplY3Qua2V5cyhub3JtYWxTbG90cykubGVuZ3RoID4gMDtcbiAgdmFyIGlzU3RhYmxlID0gc2xvdHMgPyAhIXNsb3RzLiRzdGFibGUgOiAhaGFzTm9ybWFsU2xvdHM7XG4gIHZhciBrZXkgPSBzbG90cyAmJiBzbG90cy4ka2V5O1xuICBpZiAoIXNsb3RzKSB7XG4gICAgcmVzID0ge307XG4gIH0gZWxzZSBpZiAoc2xvdHMuX25vcm1hbGl6ZWQpIHtcbiAgICAvLyBmYXN0IHBhdGggMTogY2hpbGQgY29tcG9uZW50IHJlLXJlbmRlciBvbmx5LCBwYXJlbnQgZGlkIG5vdCBjaGFuZ2VcbiAgICByZXR1cm4gc2xvdHMuX25vcm1hbGl6ZWRcbiAgfSBlbHNlIGlmIChcbiAgICBpc1N0YWJsZSAmJlxuICAgIHByZXZTbG90cyAmJlxuICAgIHByZXZTbG90cyAhPT0gZW1wdHlPYmplY3QgJiZcbiAgICBrZXkgPT09IHByZXZTbG90cy4ka2V5ICYmXG4gICAgIWhhc05vcm1hbFNsb3RzICYmXG4gICAgIXByZXZTbG90cy4kaGFzTm9ybWFsXG4gICkge1xuICAgIC8vIGZhc3QgcGF0aCAyOiBzdGFibGUgc2NvcGVkIHNsb3RzIHcvIG5vIG5vcm1hbCBzbG90cyB0byBwcm94eSxcbiAgICAvLyBvbmx5IG5lZWQgdG8gbm9ybWFsaXplIG9uY2VcbiAgICByZXR1cm4gcHJldlNsb3RzXG4gIH0gZWxzZSB7XG4gICAgcmVzID0ge307XG4gICAgZm9yICh2YXIga2V5JDEgaW4gc2xvdHMpIHtcbiAgICAgIGlmIChzbG90c1trZXkkMV0gJiYga2V5JDFbMF0gIT09ICckJykge1xuICAgICAgICByZXNba2V5JDFdID0gbm9ybWFsaXplU2NvcGVkU2xvdChub3JtYWxTbG90cywga2V5JDEsIHNsb3RzW2tleSQxXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGV4cG9zZSBub3JtYWwgc2xvdHMgb24gc2NvcGVkU2xvdHNcbiAgZm9yICh2YXIga2V5JDIgaW4gbm9ybWFsU2xvdHMpIHtcbiAgICBpZiAoIShrZXkkMiBpbiByZXMpKSB7XG4gICAgICByZXNba2V5JDJdID0gcHJveHlOb3JtYWxTbG90KG5vcm1hbFNsb3RzLCBrZXkkMik7XG4gICAgfVxuICB9XG4gIC8vIGF2b3JpYXogc2VlbXMgdG8gbW9jayBhIG5vbi1leHRlbnNpYmxlICRzY29wZWRTbG90cyBvYmplY3RcbiAgLy8gYW5kIHdoZW4gdGhhdCBpcyBwYXNzZWQgZG93biB0aGlzIHdvdWxkIGNhdXNlIGFuIGVycm9yXG4gIGlmIChzbG90cyAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHNsb3RzKSkge1xuICAgIChzbG90cykuX25vcm1hbGl6ZWQgPSByZXM7XG4gIH1cbiAgZGVmKHJlcywgJyRzdGFibGUnLCBpc1N0YWJsZSk7XG4gIGRlZihyZXMsICcka2V5Jywga2V5KTtcbiAgZGVmKHJlcywgJyRoYXNOb3JtYWwnLCBoYXNOb3JtYWxTbG90cyk7XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplU2NvcGVkU2xvdChub3JtYWxTbG90cywga2V5LCBmbikge1xuICB2YXIgbm9ybWFsaXplZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcmVzID0gYXJndW1lbnRzLmxlbmd0aCA/IGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cykgOiBmbih7fSk7XG4gICAgcmVzID0gcmVzICYmIHR5cGVvZiByZXMgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHJlcylcbiAgICAgID8gW3Jlc10gLy8gc2luZ2xlIHZub2RlXG4gICAgICA6IG5vcm1hbGl6ZUNoaWxkcmVuKHJlcyk7XG4gICAgcmV0dXJuIHJlcyAmJiAoXG4gICAgICByZXMubGVuZ3RoID09PSAwIHx8XG4gICAgICAocmVzLmxlbmd0aCA9PT0gMSAmJiByZXNbMF0uaXNDb21tZW50KSAvLyAjOTY1OFxuICAgICkgPyB1bmRlZmluZWRcbiAgICAgIDogcmVzXG4gIH07XG4gIC8vIHRoaXMgaXMgYSBzbG90IHVzaW5nIHRoZSBuZXcgdi1zbG90IHN5bnRheCB3aXRob3V0IHNjb3BlLiBhbHRob3VnaCBpdCBpc1xuICAvLyBjb21waWxlZCBhcyBhIHNjb3BlZCBzbG90LCByZW5kZXIgZm4gdXNlcnMgd291bGQgZXhwZWN0IGl0IHRvIGJlIHByZXNlbnRcbiAgLy8gb24gdGhpcy4kc2xvdHMgYmVjYXVzZSB0aGUgdXNhZ2UgaXMgc2VtYW50aWNhbGx5IGEgbm9ybWFsIHNsb3QuXG4gIGlmIChmbi5wcm94eSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShub3JtYWxTbG90cywga2V5LCB7XG4gICAgICBnZXQ6IG5vcm1hbGl6ZWQsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG5vcm1hbGl6ZWRcbn1cblxuZnVuY3Rpb24gcHJveHlOb3JtYWxTbG90KHNsb3RzLCBrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNsb3RzW2tleV07IH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIHJlbmRlcmluZyB2LWZvciBsaXN0cy5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyTGlzdCAoXG4gIHZhbCxcbiAgcmVuZGVyXG4pIHtcbiAgdmFyIHJldCwgaSwgbCwga2V5cywga2V5O1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0ID0gbmV3IEFycmF5KHZhbC5sZW5ndGgpO1xuICAgIGZvciAoaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICByZXRbaV0gPSByZW5kZXIodmFsW2ldLCBpLCBpLCBpKTsgLy8gZml4ZWQgYnkgeHh4eHh4XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgcmV0ID0gbmV3IEFycmF5KHZhbCk7XG4gICAgZm9yIChpID0gMDsgaSA8IHZhbDsgaSsrKSB7XG4gICAgICByZXRbaV0gPSByZW5kZXIoaSArIDEsIGksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICB9XG4gIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSkge1xuICAgIGlmIChoYXNTeW1ib2wgJiYgdmFsW1N5bWJvbC5pdGVyYXRvcl0pIHtcbiAgICAgIHJldCA9IFtdO1xuICAgICAgdmFyIGl0ZXJhdG9yID0gdmFsW1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgIHZhciByZXN1bHQgPSBpdGVyYXRvci5uZXh0KCk7XG4gICAgICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgICAgIHJldC5wdXNoKHJlbmRlcihyZXN1bHQudmFsdWUsIHJldC5sZW5ndGgsIGkrKywgaSkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIHJldCA9IG5ldyBBcnJheShrZXlzLmxlbmd0aCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgcmV0W2ldID0gcmVuZGVyKHZhbFtrZXldLCBrZXksIGksIGkpOyAvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKCFpc0RlZihyZXQpKSB7XG4gICAgcmV0ID0gW107XG4gIH1cbiAgKHJldCkuX2lzVkxpc3QgPSB0cnVlO1xuICByZXR1cm4gcmV0XG59XG5cbi8qICAqL1xuXG4vKipcbiAqIFJ1bnRpbWUgaGVscGVyIGZvciByZW5kZXJpbmcgPHNsb3Q+XG4gKi9cbmZ1bmN0aW9uIHJlbmRlclNsb3QgKFxuICBuYW1lLFxuICBmYWxsYmFjayxcbiAgcHJvcHMsXG4gIGJpbmRPYmplY3Rcbikge1xuICB2YXIgc2NvcGVkU2xvdEZuID0gdGhpcy4kc2NvcGVkU2xvdHNbbmFtZV07XG4gIHZhciBub2RlcztcbiAgaWYgKHNjb3BlZFNsb3RGbikgeyAvLyBzY29wZWQgc2xvdFxuICAgIHByb3BzID0gcHJvcHMgfHwge307XG4gICAgaWYgKGJpbmRPYmplY3QpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFpc09iamVjdChiaW5kT2JqZWN0KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdzbG90IHYtYmluZCB3aXRob3V0IGFyZ3VtZW50IGV4cGVjdHMgYW4gT2JqZWN0JyxcbiAgICAgICAgICB0aGlzXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBwcm9wcyA9IGV4dGVuZChleHRlbmQoe30sIGJpbmRPYmplY3QpLCBwcm9wcyk7XG4gICAgfVxuICAgIC8vIGZpeGVkIGJ5IHh4eHh4eCBhcHAtcGx1cyBzY29wZWRTbG90XG4gICAgbm9kZXMgPSBzY29wZWRTbG90Rm4ocHJvcHMsIHRoaXMsIHByb3BzLl9pKSB8fCBmYWxsYmFjaztcbiAgfSBlbHNlIHtcbiAgICBub2RlcyA9IHRoaXMuJHNsb3RzW25hbWVdIHx8IGZhbGxiYWNrO1xuICB9XG5cbiAgdmFyIHRhcmdldCA9IHByb3BzICYmIHByb3BzLnNsb3Q7XG4gIGlmICh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy4kY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnLCB7IHNsb3Q6IHRhcmdldCB9LCBub2RlcylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbm9kZXNcbiAgfVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVzb2x2aW5nIGZpbHRlcnNcbiAqL1xuZnVuY3Rpb24gcmVzb2x2ZUZpbHRlciAoaWQpIHtcbiAgcmV0dXJuIHJlc29sdmVBc3NldCh0aGlzLiRvcHRpb25zLCAnZmlsdGVycycsIGlkLCB0cnVlKSB8fCBpZGVudGl0eVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaXNLZXlOb3RNYXRjaCAoZXhwZWN0LCBhY3R1YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZXhwZWN0KSkge1xuICAgIHJldHVybiBleHBlY3QuaW5kZXhPZihhY3R1YWwpID09PSAtMVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBleHBlY3QgIT09IGFjdHVhbFxuICB9XG59XG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIGNoZWNraW5nIGtleUNvZGVzIGZyb20gY29uZmlnLlxuICogZXhwb3NlZCBhcyBWdWUucHJvdG90eXBlLl9rXG4gKiBwYXNzaW5nIGluIGV2ZW50S2V5TmFtZSBhcyBsYXN0IGFyZ3VtZW50IHNlcGFyYXRlbHkgZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAqL1xuZnVuY3Rpb24gY2hlY2tLZXlDb2RlcyAoXG4gIGV2ZW50S2V5Q29kZSxcbiAga2V5LFxuICBidWlsdEluS2V5Q29kZSxcbiAgZXZlbnRLZXlOYW1lLFxuICBidWlsdEluS2V5TmFtZVxuKSB7XG4gIHZhciBtYXBwZWRLZXlDb2RlID0gY29uZmlnLmtleUNvZGVzW2tleV0gfHwgYnVpbHRJbktleUNvZGU7XG4gIGlmIChidWlsdEluS2V5TmFtZSAmJiBldmVudEtleU5hbWUgJiYgIWNvbmZpZy5rZXlDb2Rlc1trZXldKSB7XG4gICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2goYnVpbHRJbktleU5hbWUsIGV2ZW50S2V5TmFtZSlcbiAgfSBlbHNlIGlmIChtYXBwZWRLZXlDb2RlKSB7XG4gICAgcmV0dXJuIGlzS2V5Tm90TWF0Y2gobWFwcGVkS2V5Q29kZSwgZXZlbnRLZXlDb2RlKVxuICB9IGVsc2UgaWYgKGV2ZW50S2V5TmFtZSkge1xuICAgIHJldHVybiBoeXBoZW5hdGUoZXZlbnRLZXlOYW1lKSAhPT0ga2V5XG4gIH1cbn1cblxuLyogICovXG5cbi8qKlxuICogUnVudGltZSBoZWxwZXIgZm9yIG1lcmdpbmcgdi1iaW5kPVwib2JqZWN0XCIgaW50byBhIFZOb2RlJ3MgZGF0YS5cbiAqL1xuZnVuY3Rpb24gYmluZE9iamVjdFByb3BzIChcbiAgZGF0YSxcbiAgdGFnLFxuICB2YWx1ZSxcbiAgYXNQcm9wLFxuICBpc1N5bmNcbikge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgICAndi1iaW5kIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3Qgb3IgQXJyYXkgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdmFsdWUgPSB0b09iamVjdCh2YWx1ZSk7XG4gICAgICB9XG4gICAgICB2YXIgaGFzaDtcbiAgICAgIHZhciBsb29wID0gZnVuY3Rpb24gKCBrZXkgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBrZXkgPT09ICdjbGFzcycgfHxcbiAgICAgICAgICBrZXkgPT09ICdzdHlsZScgfHxcbiAgICAgICAgICBpc1Jlc2VydmVkQXR0cmlidXRlKGtleSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaGFzaCA9IGRhdGE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIHR5cGUgPSBkYXRhLmF0dHJzICYmIGRhdGEuYXR0cnMudHlwZTtcbiAgICAgICAgICBoYXNoID0gYXNQcm9wIHx8IGNvbmZpZy5tdXN0VXNlUHJvcCh0YWcsIHR5cGUsIGtleSlcbiAgICAgICAgICAgID8gZGF0YS5kb21Qcm9wcyB8fCAoZGF0YS5kb21Qcm9wcyA9IHt9KVxuICAgICAgICAgICAgOiBkYXRhLmF0dHJzIHx8IChkYXRhLmF0dHJzID0ge30pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjYW1lbGl6ZWRLZXkgPSBjYW1lbGl6ZShrZXkpO1xuICAgICAgICB2YXIgaHlwaGVuYXRlZEtleSA9IGh5cGhlbmF0ZShrZXkpO1xuICAgICAgICBpZiAoIShjYW1lbGl6ZWRLZXkgaW4gaGFzaCkgJiYgIShoeXBoZW5hdGVkS2V5IGluIGhhc2gpKSB7XG4gICAgICAgICAgaGFzaFtrZXldID0gdmFsdWVba2V5XTtcblxuICAgICAgICAgIGlmIChpc1N5bmMpIHtcbiAgICAgICAgICAgIHZhciBvbiA9IGRhdGEub24gfHwgKGRhdGEub24gPSB7fSk7XG4gICAgICAgICAgICBvblsoXCJ1cGRhdGU6XCIgKyBrZXkpXSA9IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFsdWVba2V5XSA9ICRldmVudDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIGxvb3AoIGtleSApO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG4vKiAgKi9cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3IgcmVuZGVyaW5nIHN0YXRpYyB0cmVlcy5cbiAqL1xuZnVuY3Rpb24gcmVuZGVyU3RhdGljIChcbiAgaW5kZXgsXG4gIGlzSW5Gb3Jcbikge1xuICB2YXIgY2FjaGVkID0gdGhpcy5fc3RhdGljVHJlZXMgfHwgKHRoaXMuX3N0YXRpY1RyZWVzID0gW10pO1xuICB2YXIgdHJlZSA9IGNhY2hlZFtpbmRleF07XG4gIC8vIGlmIGhhcyBhbHJlYWR5LXJlbmRlcmVkIHN0YXRpYyB0cmVlIGFuZCBub3QgaW5zaWRlIHYtZm9yLFxuICAvLyB3ZSBjYW4gcmV1c2UgdGhlIHNhbWUgdHJlZS5cbiAgaWYgKHRyZWUgJiYgIWlzSW5Gb3IpIHtcbiAgICByZXR1cm4gdHJlZVxuICB9XG4gIC8vIG90aGVyd2lzZSwgcmVuZGVyIGEgZnJlc2ggdHJlZS5cbiAgdHJlZSA9IGNhY2hlZFtpbmRleF0gPSB0aGlzLiRvcHRpb25zLnN0YXRpY1JlbmRlckZuc1tpbmRleF0uY2FsbChcbiAgICB0aGlzLl9yZW5kZXJQcm94eSxcbiAgICBudWxsLFxuICAgIHRoaXMgLy8gZm9yIHJlbmRlciBmbnMgZ2VuZXJhdGVkIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCB0ZW1wbGF0ZXNcbiAgKTtcbiAgbWFya1N0YXRpYyh0cmVlLCAoXCJfX3N0YXRpY19fXCIgKyBpbmRleCksIGZhbHNlKTtcbiAgcmV0dXJuIHRyZWVcbn1cblxuLyoqXG4gKiBSdW50aW1lIGhlbHBlciBmb3Igdi1vbmNlLlxuICogRWZmZWN0aXZlbHkgaXQgbWVhbnMgbWFya2luZyB0aGUgbm9kZSBhcyBzdGF0aWMgd2l0aCBhIHVuaXF1ZSBrZXkuXG4gKi9cbmZ1bmN0aW9uIG1hcmtPbmNlIChcbiAgdHJlZSxcbiAgaW5kZXgsXG4gIGtleVxuKSB7XG4gIG1hcmtTdGF0aWModHJlZSwgKFwiX19vbmNlX19cIiArIGluZGV4ICsgKGtleSA/IChcIl9cIiArIGtleSkgOiBcIlwiKSksIHRydWUpO1xuICByZXR1cm4gdHJlZVxufVxuXG5mdW5jdGlvbiBtYXJrU3RhdGljIChcbiAgdHJlZSxcbiAga2V5LFxuICBpc09uY2Vcbikge1xuICBpZiAoQXJyYXkuaXNBcnJheSh0cmVlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHJlZS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRyZWVbaV0gJiYgdHlwZW9mIHRyZWVbaV0gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG1hcmtTdGF0aWNOb2RlKHRyZWVbaV0sIChrZXkgKyBcIl9cIiArIGkpLCBpc09uY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtYXJrU3RhdGljTm9kZSh0cmVlLCBrZXksIGlzT25jZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFya1N0YXRpY05vZGUgKG5vZGUsIGtleSwgaXNPbmNlKSB7XG4gIG5vZGUuaXNTdGF0aWMgPSB0cnVlO1xuICBub2RlLmtleSA9IGtleTtcbiAgbm9kZS5pc09uY2UgPSBpc09uY2U7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBiaW5kT2JqZWN0TGlzdGVuZXJzIChkYXRhLCB2YWx1ZSkge1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgICd2LW9uIHdpdGhvdXQgYXJndW1lbnQgZXhwZWN0cyBhbiBPYmplY3QgdmFsdWUnLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb24gPSBkYXRhLm9uID0gZGF0YS5vbiA/IGV4dGVuZCh7fSwgZGF0YS5vbikgOiB7fTtcbiAgICAgIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgICAgICB2YXIgZXhpc3RpbmcgPSBvbltrZXldO1xuICAgICAgICB2YXIgb3VycyA9IHZhbHVlW2tleV07XG4gICAgICAgIG9uW2tleV0gPSBleGlzdGluZyA/IFtdLmNvbmNhdChleGlzdGluZywgb3VycykgOiBvdXJzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0YVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gcmVzb2x2ZVNjb3BlZFNsb3RzIChcbiAgZm5zLCAvLyBzZWUgZmxvdy92bm9kZVxuICByZXMsXG4gIC8vIHRoZSBmb2xsb3dpbmcgYXJlIGFkZGVkIGluIDIuNlxuICBoYXNEeW5hbWljS2V5cyxcbiAgY29udGVudEhhc2hLZXlcbikge1xuICByZXMgPSByZXMgfHwgeyAkc3RhYmxlOiAhaGFzRHluYW1pY0tleXMgfTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2xvdCA9IGZuc1tpXTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzbG90KSkge1xuICAgICAgcmVzb2x2ZVNjb3BlZFNsb3RzKHNsb3QsIHJlcywgaGFzRHluYW1pY0tleXMpO1xuICAgIH0gZWxzZSBpZiAoc2xvdCkge1xuICAgICAgLy8gbWFya2VyIGZvciByZXZlcnNlIHByb3h5aW5nIHYtc2xvdCB3aXRob3V0IHNjb3BlIG9uIHRoaXMuJHNsb3RzXG4gICAgICBpZiAoc2xvdC5wcm94eSkge1xuICAgICAgICBzbG90LmZuLnByb3h5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJlc1tzbG90LmtleV0gPSBzbG90LmZuO1xuICAgIH1cbiAgfVxuICBpZiAoY29udGVudEhhc2hLZXkpIHtcbiAgICAocmVzKS4ka2V5ID0gY29udGVudEhhc2hLZXk7XG4gIH1cbiAgcmV0dXJuIHJlc1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gYmluZER5bmFtaWNLZXlzIChiYXNlT2JqLCB2YWx1ZXMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICB2YXIga2V5ID0gdmFsdWVzW2ldO1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJyAmJiBrZXkpIHtcbiAgICAgIGJhc2VPYmpbdmFsdWVzW2ldXSA9IHZhbHVlc1tpICsgMV07XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIGtleSAhPT0gJycgJiYga2V5ICE9PSBudWxsKSB7XG4gICAgICAvLyBudWxsIGlzIGEgc3BlY2lhbCB2YWx1ZSBmb3IgZXhwbGljaXRseSByZW1vdmluZyBhIGJpbmRpbmdcbiAgICAgIHdhcm4oXG4gICAgICAgIChcIkludmFsaWQgdmFsdWUgZm9yIGR5bmFtaWMgZGlyZWN0aXZlIGFyZ3VtZW50IChleHBlY3RlZCBzdHJpbmcgb3IgbnVsbCk6IFwiICsga2V5KSxcbiAgICAgICAgdGhpc1xuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJhc2VPYmpcbn1cblxuLy8gaGVscGVyIHRvIGR5bmFtaWNhbGx5IGFwcGVuZCBtb2RpZmllciBydW50aW1lIG1hcmtlcnMgdG8gZXZlbnQgbmFtZXMuXG4vLyBlbnN1cmUgb25seSBhcHBlbmQgd2hlbiB2YWx1ZSBpcyBhbHJlYWR5IHN0cmluZywgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgY2FzdFxuLy8gdG8gc3RyaW5nIGFuZCBjYXVzZSB0aGUgdHlwZSBjaGVjayB0byBtaXNzLlxuZnVuY3Rpb24gcHJlcGVuZE1vZGlmaWVyICh2YWx1ZSwgc3ltYm9sKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gc3ltYm9sICsgdmFsdWUgOiB2YWx1ZVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5zdGFsbFJlbmRlckhlbHBlcnMgKHRhcmdldCkge1xuICB0YXJnZXQuX28gPSBtYXJrT25jZTtcbiAgdGFyZ2V0Ll9uID0gdG9OdW1iZXI7XG4gIHRhcmdldC5fcyA9IHRvU3RyaW5nO1xuICB0YXJnZXQuX2wgPSByZW5kZXJMaXN0O1xuICB0YXJnZXQuX3QgPSByZW5kZXJTbG90O1xuICB0YXJnZXQuX3EgPSBsb29zZUVxdWFsO1xuICB0YXJnZXQuX2kgPSBsb29zZUluZGV4T2Y7XG4gIHRhcmdldC5fbSA9IHJlbmRlclN0YXRpYztcbiAgdGFyZ2V0Ll9mID0gcmVzb2x2ZUZpbHRlcjtcbiAgdGFyZ2V0Ll9rID0gY2hlY2tLZXlDb2RlcztcbiAgdGFyZ2V0Ll9iID0gYmluZE9iamVjdFByb3BzO1xuICB0YXJnZXQuX3YgPSBjcmVhdGVUZXh0Vk5vZGU7XG4gIHRhcmdldC5fZSA9IGNyZWF0ZUVtcHR5Vk5vZGU7XG4gIHRhcmdldC5fdSA9IHJlc29sdmVTY29wZWRTbG90cztcbiAgdGFyZ2V0Ll9nID0gYmluZE9iamVjdExpc3RlbmVycztcbiAgdGFyZ2V0Ll9kID0gYmluZER5bmFtaWNLZXlzO1xuICB0YXJnZXQuX3AgPSBwcmVwZW5kTW9kaWZpZXI7XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dCAoXG4gIGRhdGEsXG4gIHByb3BzLFxuICBjaGlsZHJlbixcbiAgcGFyZW50LFxuICBDdG9yXG4pIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdmFyIG9wdGlvbnMgPSBDdG9yLm9wdGlvbnM7XG4gIC8vIGVuc3VyZSB0aGUgY3JlYXRlRWxlbWVudCBmdW5jdGlvbiBpbiBmdW5jdGlvbmFsIGNvbXBvbmVudHNcbiAgLy8gZ2V0cyBhIHVuaXF1ZSBjb250ZXh0IC0gdGhpcyBpcyBuZWNlc3NhcnkgZm9yIGNvcnJlY3QgbmFtZWQgc2xvdCBjaGVja1xuICB2YXIgY29udGV4dFZtO1xuICBpZiAoaGFzT3duKHBhcmVudCwgJ191aWQnKSkge1xuICAgIGNvbnRleHRWbSA9IE9iamVjdC5jcmVhdGUocGFyZW50KTtcbiAgICAvLyAkZmxvdy1kaXNhYmxlLWxpbmVcbiAgICBjb250ZXh0Vm0uX29yaWdpbmFsID0gcGFyZW50O1xuICB9IGVsc2Uge1xuICAgIC8vIHRoZSBjb250ZXh0IHZtIHBhc3NlZCBpbiBpcyBhIGZ1bmN0aW9uYWwgY29udGV4dCBhcyB3ZWxsLlxuICAgIC8vIGluIHRoaXMgY2FzZSB3ZSB3YW50IHRvIG1ha2Ugc3VyZSB3ZSBhcmUgYWJsZSB0byBnZXQgYSBob2xkIHRvIHRoZVxuICAgIC8vIHJlYWwgY29udGV4dCBpbnN0YW5jZS5cbiAgICBjb250ZXh0Vm0gPSBwYXJlbnQ7XG4gICAgLy8gJGZsb3ctZGlzYWJsZS1saW5lXG4gICAgcGFyZW50ID0gcGFyZW50Ll9vcmlnaW5hbDtcbiAgfVxuICB2YXIgaXNDb21waWxlZCA9IGlzVHJ1ZShvcHRpb25zLl9jb21waWxlZCk7XG4gIHZhciBuZWVkTm9ybWFsaXphdGlvbiA9ICFpc0NvbXBpbGVkO1xuXG4gIHRoaXMuZGF0YSA9IGRhdGE7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jaGlsZHJlbiA9IGNoaWxkcmVuO1xuICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgdGhpcy5saXN0ZW5lcnMgPSBkYXRhLm9uIHx8IGVtcHR5T2JqZWN0O1xuICB0aGlzLmluamVjdGlvbnMgPSByZXNvbHZlSW5qZWN0KG9wdGlvbnMuaW5qZWN0LCBwYXJlbnQpO1xuICB0aGlzLnNsb3RzID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcyQxLiRzbG90cykge1xuICAgICAgbm9ybWFsaXplU2NvcGVkU2xvdHMoXG4gICAgICAgIGRhdGEuc2NvcGVkU2xvdHMsXG4gICAgICAgIHRoaXMkMS4kc2xvdHMgPSByZXNvbHZlU2xvdHMoY2hpbGRyZW4sIHBhcmVudClcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzJDEuJHNsb3RzXG4gIH07XG5cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMsICdzY29wZWRTbG90cycsICh7XG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgICByZXR1cm4gbm9ybWFsaXplU2NvcGVkU2xvdHMoZGF0YS5zY29wZWRTbG90cywgdGhpcy5zbG90cygpKVxuICAgIH1cbiAgfSkpO1xuXG4gIC8vIHN1cHBvcnQgZm9yIGNvbXBpbGVkIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGlzQ29tcGlsZWQpIHtcbiAgICAvLyBleHBvc2luZyAkb3B0aW9ucyBmb3IgcmVuZGVyU3RhdGljKClcbiAgICB0aGlzLiRvcHRpb25zID0gb3B0aW9ucztcbiAgICAvLyBwcmUtcmVzb2x2ZSBzbG90cyBmb3IgcmVuZGVyU2xvdCgpXG4gICAgdGhpcy4kc2xvdHMgPSB0aGlzLnNsb3RzKCk7XG4gICAgdGhpcy4kc2NvcGVkU2xvdHMgPSBub3JtYWxpemVTY29wZWRTbG90cyhkYXRhLnNjb3BlZFNsb3RzLCB0aGlzLiRzbG90cyk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5fc2NvcGVJZCkge1xuICAgIHRoaXMuX2MgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkge1xuICAgICAgdmFyIHZub2RlID0gY3JlYXRlRWxlbWVudChjb250ZXh0Vm0sIGEsIGIsIGMsIGQsIG5lZWROb3JtYWxpemF0aW9uKTtcbiAgICAgIGlmICh2bm9kZSAmJiAhQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgdm5vZGUuZm5TY29wZUlkID0gb3B0aW9ucy5fc2NvcGVJZDtcbiAgICAgICAgdm5vZGUuZm5Db250ZXh0ID0gcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZub2RlXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLl9jID0gZnVuY3Rpb24gKGEsIGIsIGMsIGQpIHsgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoY29udGV4dFZtLCBhLCBiLCBjLCBkLCBuZWVkTm9ybWFsaXphdGlvbik7IH07XG4gIH1cbn1cblxuaW5zdGFsbFJlbmRlckhlbHBlcnMoRnVuY3Rpb25hbFJlbmRlckNvbnRleHQucHJvdG90eXBlKTtcblxuZnVuY3Rpb24gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudCAoXG4gIEN0b3IsXG4gIHByb3BzRGF0YSxcbiAgZGF0YSxcbiAgY29udGV4dFZtLFxuICBjaGlsZHJlblxuKSB7XG4gIHZhciBvcHRpb25zID0gQ3Rvci5vcHRpb25zO1xuICB2YXIgcHJvcHMgPSB7fTtcbiAgdmFyIHByb3BPcHRpb25zID0gb3B0aW9ucy5wcm9wcztcbiAgaWYgKGlzRGVmKHByb3BPcHRpb25zKSkge1xuICAgIGZvciAodmFyIGtleSBpbiBwcm9wT3B0aW9ucykge1xuICAgICAgcHJvcHNba2V5XSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BPcHRpb25zLCBwcm9wc0RhdGEgfHwgZW1wdHlPYmplY3QpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNEZWYoZGF0YS5hdHRycykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5hdHRycyk7IH1cbiAgICBpZiAoaXNEZWYoZGF0YS5wcm9wcykpIHsgbWVyZ2VQcm9wcyhwcm9wcywgZGF0YS5wcm9wcyk7IH1cbiAgfVxuXG4gIHZhciByZW5kZXJDb250ZXh0ID0gbmV3IEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0KFxuICAgIGRhdGEsXG4gICAgcHJvcHMsXG4gICAgY2hpbGRyZW4sXG4gICAgY29udGV4dFZtLFxuICAgIEN0b3JcbiAgKTtcblxuICB2YXIgdm5vZGUgPSBvcHRpb25zLnJlbmRlci5jYWxsKG51bGwsIHJlbmRlckNvbnRleHQuX2MsIHJlbmRlckNvbnRleHQpO1xuXG4gIGlmICh2bm9kZSBpbnN0YW5jZW9mIFZOb2RlKSB7XG4gICAgcmV0dXJuIGNsb25lQW5kTWFya0Z1bmN0aW9uYWxSZXN1bHQodm5vZGUsIGRhdGEsIHJlbmRlckNvbnRleHQucGFyZW50LCBvcHRpb25zLCByZW5kZXJDb250ZXh0KVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodm5vZGUpKSB7XG4gICAgdmFyIHZub2RlcyA9IG5vcm1hbGl6ZUNoaWxkcmVuKHZub2RlKSB8fCBbXTtcbiAgICB2YXIgcmVzID0gbmV3IEFycmF5KHZub2Rlcy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXNbaV0gPSBjbG9uZUFuZE1hcmtGdW5jdGlvbmFsUmVzdWx0KHZub2Rlc1tpXSwgZGF0YSwgcmVuZGVyQ29udGV4dC5wYXJlbnQsIG9wdGlvbnMsIHJlbmRlckNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xvbmVBbmRNYXJrRnVuY3Rpb25hbFJlc3VsdCAodm5vZGUsIGRhdGEsIGNvbnRleHRWbSwgb3B0aW9ucywgcmVuZGVyQ29udGV4dCkge1xuICAvLyAjNzgxNyBjbG9uZSBub2RlIGJlZm9yZSBzZXR0aW5nIGZuQ29udGV4dCwgb3RoZXJ3aXNlIGlmIHRoZSBub2RlIGlzIHJldXNlZFxuICAvLyAoZS5nLiBpdCB3YXMgZnJvbSBhIGNhY2hlZCBub3JtYWwgc2xvdCkgdGhlIGZuQ29udGV4dCBjYXVzZXMgbmFtZWQgc2xvdHNcbiAgLy8gdGhhdCBzaG91bGQgbm90IGJlIG1hdGNoZWQgdG8gbWF0Y2guXG4gIHZhciBjbG9uZSA9IGNsb25lVk5vZGUodm5vZGUpO1xuICBjbG9uZS5mbkNvbnRleHQgPSBjb250ZXh0Vm07XG4gIGNsb25lLmZuT3B0aW9ucyA9IG9wdGlvbnM7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgKGNsb25lLmRldnRvb2xzTWV0YSA9IGNsb25lLmRldnRvb2xzTWV0YSB8fCB7fSkucmVuZGVyQ29udGV4dCA9IHJlbmRlckNvbnRleHQ7XG4gIH1cbiAgaWYgKGRhdGEuc2xvdCkge1xuICAgIChjbG9uZS5kYXRhIHx8IChjbG9uZS5kYXRhID0ge30pKS5zbG90ID0gZGF0YS5zbG90O1xuICB9XG4gIHJldHVybiBjbG9uZVxufVxuXG5mdW5jdGlvbiBtZXJnZVByb3BzICh0bywgZnJvbSkge1xuICBmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuICAgIHRvW2NhbWVsaXplKGtleSldID0gZnJvbVtrZXldO1xuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuLyogICovXG5cbi8qICAqL1xuXG4vLyBpbmxpbmUgaG9va3MgdG8gYmUgaW52b2tlZCBvbiBjb21wb25lbnQgVk5vZGVzIGR1cmluZyBwYXRjaFxudmFyIGNvbXBvbmVudFZOb2RlSG9va3MgPSB7XG4gIGluaXQ6IGZ1bmN0aW9uIGluaXQgKHZub2RlLCBoeWRyYXRpbmcpIHtcbiAgICBpZiAoXG4gICAgICB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSAmJlxuICAgICAgIXZub2RlLmNvbXBvbmVudEluc3RhbmNlLl9pc0Rlc3Ryb3llZCAmJlxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmVcbiAgICApIHtcbiAgICAgIC8vIGtlcHQtYWxpdmUgY29tcG9uZW50cywgdHJlYXQgYXMgYSBwYXRjaFxuICAgICAgdmFyIG1vdW50ZWROb2RlID0gdm5vZGU7IC8vIHdvcmsgYXJvdW5kIGZsb3dcbiAgICAgIGNvbXBvbmVudFZOb2RlSG9va3MucHJlcGF0Y2gobW91bnRlZE5vZGUsIG1vdW50ZWROb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGNoaWxkID0gdm5vZGUuY29tcG9uZW50SW5zdGFuY2UgPSBjcmVhdGVDb21wb25lbnRJbnN0YW5jZUZvclZub2RlKFxuICAgICAgICB2bm9kZSxcbiAgICAgICAgYWN0aXZlSW5zdGFuY2VcbiAgICAgICk7XG4gICAgICBjaGlsZC4kbW91bnQoaHlkcmF0aW5nID8gdm5vZGUuZWxtIDogdW5kZWZpbmVkLCBoeWRyYXRpbmcpO1xuICAgIH1cbiAgfSxcblxuICBwcmVwYXRjaDogZnVuY3Rpb24gcHJlcGF0Y2ggKG9sZFZub2RlLCB2bm9kZSkge1xuICAgIHZhciBvcHRpb25zID0gdm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgICB2YXIgY2hpbGQgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZSA9IG9sZFZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHVwZGF0ZUNoaWxkQ29tcG9uZW50KFxuICAgICAgY2hpbGQsXG4gICAgICBvcHRpb25zLnByb3BzRGF0YSwgLy8gdXBkYXRlZCBwcm9wc1xuICAgICAgb3B0aW9ucy5saXN0ZW5lcnMsIC8vIHVwZGF0ZWQgbGlzdGVuZXJzXG4gICAgICB2bm9kZSwgLy8gbmV3IHBhcmVudCB2bm9kZVxuICAgICAgb3B0aW9ucy5jaGlsZHJlbiAvLyBuZXcgY2hpbGRyZW5cbiAgICApO1xuICB9LFxuXG4gIGluc2VydDogZnVuY3Rpb24gaW5zZXJ0ICh2bm9kZSkge1xuICAgIHZhciBjb250ZXh0ID0gdm5vZGUuY29udGV4dDtcbiAgICB2YXIgY29tcG9uZW50SW5zdGFuY2UgPSB2bm9kZS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICBpZiAoIWNvbXBvbmVudEluc3RhbmNlLl9pc01vdW50ZWQpIHtcbiAgICAgIGNhbGxIb29rKGNvbXBvbmVudEluc3RhbmNlLCAnb25TZXJ2aWNlQ3JlYXRlZCcpO1xuICAgICAgY2FsbEhvb2soY29tcG9uZW50SW5zdGFuY2UsICdvblNlcnZpY2VBdHRhY2hlZCcpO1xuICAgICAgY29tcG9uZW50SW5zdGFuY2UuX2lzTW91bnRlZCA9IHRydWU7XG4gICAgICBjYWxsSG9vayhjb21wb25lbnRJbnN0YW5jZSwgJ21vdW50ZWQnKTtcbiAgICB9XG4gICAgaWYgKHZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICBpZiAoY29udGV4dC5faXNNb3VudGVkKSB7XG4gICAgICAgIC8vIHZ1ZS1yb3V0ZXIjMTIxMlxuICAgICAgICAvLyBEdXJpbmcgdXBkYXRlcywgYSBrZXB0LWFsaXZlIGNvbXBvbmVudCdzIGNoaWxkIGNvbXBvbmVudHMgbWF5XG4gICAgICAgIC8vIGNoYW5nZSwgc28gZGlyZWN0bHkgd2Fsa2luZyB0aGUgdHJlZSBoZXJlIG1heSBjYWxsIGFjdGl2YXRlZCBob29rc1xuICAgICAgICAvLyBvbiBpbmNvcnJlY3QgY2hpbGRyZW4uIEluc3RlYWQgd2UgcHVzaCB0aGVtIGludG8gYSBxdWV1ZSB3aGljaCB3aWxsXG4gICAgICAgIC8vIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgd2hvbGUgcGF0Y2ggcHJvY2VzcyBlbmRlZC5cbiAgICAgICAgcXVldWVBY3RpdmF0ZWRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWN0aXZhdGVDaGlsZENvbXBvbmVudChjb21wb25lbnRJbnN0YW5jZSwgdHJ1ZSAvKiBkaXJlY3QgKi8pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95ICh2bm9kZSkge1xuICAgIHZhciBjb21wb25lbnRJbnN0YW5jZSA9IHZub2RlLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIGlmICghY29tcG9uZW50SW5zdGFuY2UuX2lzRGVzdHJveWVkKSB7XG4gICAgICBpZiAoIXZub2RlLmRhdGEua2VlcEFsaXZlKSB7XG4gICAgICAgIGNvbXBvbmVudEluc3RhbmNlLiRkZXN0cm95KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQoY29tcG9uZW50SW5zdGFuY2UsIHRydWUgLyogZGlyZWN0ICovKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBob29rc1RvTWVyZ2UgPSBPYmplY3Qua2V5cyhjb21wb25lbnRWTm9kZUhvb2tzKTtcblxuZnVuY3Rpb24gY3JlYXRlQ29tcG9uZW50IChcbiAgQ3RvcixcbiAgZGF0YSxcbiAgY29udGV4dCxcbiAgY2hpbGRyZW4sXG4gIHRhZ1xuKSB7XG4gIGlmIChpc1VuZGVmKEN0b3IpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgYmFzZUN0b3IgPSBjb250ZXh0LiRvcHRpb25zLl9iYXNlO1xuXG4gIC8vIHBsYWluIG9wdGlvbnMgb2JqZWN0OiB0dXJuIGl0IGludG8gYSBjb25zdHJ1Y3RvclxuICBpZiAoaXNPYmplY3QoQ3RvcikpIHtcbiAgICBDdG9yID0gYmFzZUN0b3IuZXh0ZW5kKEN0b3IpO1xuICB9XG5cbiAgLy8gaWYgYXQgdGhpcyBzdGFnZSBpdCdzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIGFuIGFzeW5jIGNvbXBvbmVudCBmYWN0b3J5LFxuICAvLyByZWplY3QuXG4gIGlmICh0eXBlb2YgQ3RvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB3YXJuKChcIkludmFsaWQgQ29tcG9uZW50IGRlZmluaXRpb246IFwiICsgKFN0cmluZyhDdG9yKSkpLCBjb250ZXh0KTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICAvLyBhc3luYyBjb21wb25lbnRcbiAgdmFyIGFzeW5jRmFjdG9yeTtcbiAgaWYgKGlzVW5kZWYoQ3Rvci5jaWQpKSB7XG4gICAgYXN5bmNGYWN0b3J5ID0gQ3RvcjtcbiAgICBDdG9yID0gcmVzb2x2ZUFzeW5jQ29tcG9uZW50KGFzeW5jRmFjdG9yeSwgYmFzZUN0b3IpO1xuICAgIGlmIChDdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIG5vZGUgZm9yIGFzeW5jIGNvbXBvbmVudCwgd2hpY2ggaXMgcmVuZGVyZWRcbiAgICAgIC8vIGFzIGEgY29tbWVudCBub2RlIGJ1dCBwcmVzZXJ2ZXMgYWxsIHRoZSByYXcgaW5mb3JtYXRpb24gZm9yIHRoZSBub2RlLlxuICAgICAgLy8gdGhlIGluZm9ybWF0aW9uIHdpbGwgYmUgdXNlZCBmb3IgYXN5bmMgc2VydmVyLXJlbmRlcmluZyBhbmQgaHlkcmF0aW9uLlxuICAgICAgcmV0dXJuIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIoXG4gICAgICAgIGFzeW5jRmFjdG9yeSxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICAgIHRhZ1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGRhdGEgPSBkYXRhIHx8IHt9O1xuXG4gIC8vIHJlc29sdmUgY29uc3RydWN0b3Igb3B0aW9ucyBpbiBjYXNlIGdsb2JhbCBtaXhpbnMgYXJlIGFwcGxpZWQgYWZ0ZXJcbiAgLy8gY29tcG9uZW50IGNvbnN0cnVjdG9yIGNyZWF0aW9uXG4gIHJlc29sdmVDb25zdHJ1Y3Rvck9wdGlvbnMoQ3Rvcik7XG5cbiAgLy8gdHJhbnNmb3JtIGNvbXBvbmVudCB2LW1vZGVsIGRhdGEgaW50byBwcm9wcyAmIGV2ZW50c1xuICBpZiAoaXNEZWYoZGF0YS5tb2RlbCkpIHtcbiAgICB0cmFuc2Zvcm1Nb2RlbChDdG9yLm9wdGlvbnMsIGRhdGEpO1xuICB9XG5cbiAgLy8gZXh0cmFjdCBwcm9wc1xuICB2YXIgcHJvcHNEYXRhID0gZXh0cmFjdFByb3BzRnJvbVZOb2RlRGF0YShkYXRhLCBDdG9yLCB0YWcsIGNvbnRleHQpOyAvLyBmaXhlZCBieSB4eHh4eHhcblxuICAvLyBmdW5jdGlvbmFsIGNvbXBvbmVudFxuICBpZiAoaXNUcnVlKEN0b3Iub3B0aW9ucy5mdW5jdGlvbmFsKSkge1xuICAgIHJldHVybiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50KEN0b3IsIHByb3BzRGF0YSwgZGF0YSwgY29udGV4dCwgY2hpbGRyZW4pXG4gIH1cblxuICAvLyBleHRyYWN0IGxpc3RlbmVycywgc2luY2UgdGhlc2UgbmVlZHMgdG8gYmUgdHJlYXRlZCBhc1xuICAvLyBjaGlsZCBjb21wb25lbnQgbGlzdGVuZXJzIGluc3RlYWQgb2YgRE9NIGxpc3RlbmVyc1xuICB2YXIgbGlzdGVuZXJzID0gZGF0YS5vbjtcbiAgLy8gcmVwbGFjZSB3aXRoIGxpc3RlbmVycyB3aXRoIC5uYXRpdmUgbW9kaWZpZXJcbiAgLy8gc28gaXQgZ2V0cyBwcm9jZXNzZWQgZHVyaW5nIHBhcmVudCBjb21wb25lbnQgcGF0Y2guXG4gIGRhdGEub24gPSBkYXRhLm5hdGl2ZU9uO1xuXG4gIGlmIChpc1RydWUoQ3Rvci5vcHRpb25zLmFic3RyYWN0KSkge1xuICAgIC8vIGFic3RyYWN0IGNvbXBvbmVudHMgZG8gbm90IGtlZXAgYW55dGhpbmdcbiAgICAvLyBvdGhlciB0aGFuIHByb3BzICYgbGlzdGVuZXJzICYgc2xvdFxuXG4gICAgLy8gd29yayBhcm91bmQgZmxvd1xuICAgIHZhciBzbG90ID0gZGF0YS5zbG90O1xuICAgIGRhdGEgPSB7fTtcbiAgICBpZiAoc2xvdCkge1xuICAgICAgZGF0YS5zbG90ID0gc2xvdDtcbiAgICB9XG4gIH1cblxuICAvLyBpbnN0YWxsIGNvbXBvbmVudCBtYW5hZ2VtZW50IGhvb2tzIG9udG8gdGhlIHBsYWNlaG9sZGVyIG5vZGVcbiAgaW5zdGFsbENvbXBvbmVudEhvb2tzKGRhdGEpO1xuXG4gIC8vIHJldHVybiBhIHBsYWNlaG9sZGVyIHZub2RlXG4gIHZhciBuYW1lID0gQ3Rvci5vcHRpb25zLm5hbWUgfHwgdGFnO1xuICB2YXIgdm5vZGUgPSBuZXcgVk5vZGUoXG4gICAgKFwidnVlLWNvbXBvbmVudC1cIiArIChDdG9yLmNpZCkgKyAobmFtZSA/IChcIi1cIiArIG5hbWUpIDogJycpKSxcbiAgICBkYXRhLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBjb250ZXh0LFxuICAgIHsgQ3RvcjogQ3RvciwgcHJvcHNEYXRhOiBwcm9wc0RhdGEsIGxpc3RlbmVyczogbGlzdGVuZXJzLCB0YWc6IHRhZywgY2hpbGRyZW46IGNoaWxkcmVuIH0sXG4gICAgYXN5bmNGYWN0b3J5XG4gICk7XG5cbiAgcmV0dXJuIHZub2RlXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudEluc3RhbmNlRm9yVm5vZGUgKFxuICB2bm9kZSwgLy8gd2Uga25vdyBpdCdzIE1vdW50ZWRDb21wb25lbnRWTm9kZSBidXQgZmxvdyBkb2Vzbid0XG4gIHBhcmVudCAvLyBhY3RpdmVJbnN0YW5jZSBpbiBsaWZlY3ljbGUgc3RhdGVcbikge1xuICB2YXIgb3B0aW9ucyA9IHtcbiAgICBfaXNDb21wb25lbnQ6IHRydWUsXG4gICAgX3BhcmVudFZub2RlOiB2bm9kZSxcbiAgICBwYXJlbnQ6IHBhcmVudFxuICB9O1xuICAvLyBjaGVjayBpbmxpbmUtdGVtcGxhdGUgcmVuZGVyIGZ1bmN0aW9uc1xuICB2YXIgaW5saW5lVGVtcGxhdGUgPSB2bm9kZS5kYXRhLmlubGluZVRlbXBsYXRlO1xuICBpZiAoaXNEZWYoaW5saW5lVGVtcGxhdGUpKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSBpbmxpbmVUZW1wbGF0ZS5yZW5kZXI7XG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBpbmxpbmVUZW1wbGF0ZS5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbiAgcmV0dXJuIG5ldyB2bm9kZS5jb21wb25lbnRPcHRpb25zLkN0b3Iob3B0aW9ucylcbn1cblxuZnVuY3Rpb24gaW5zdGFsbENvbXBvbmVudEhvb2tzIChkYXRhKSB7XG4gIHZhciBob29rcyA9IGRhdGEuaG9vayB8fCAoZGF0YS5ob29rID0ge30pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGhvb2tzVG9NZXJnZS5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBob29rc1RvTWVyZ2VbaV07XG4gICAgdmFyIGV4aXN0aW5nID0gaG9va3Nba2V5XTtcbiAgICB2YXIgdG9NZXJnZSA9IGNvbXBvbmVudFZOb2RlSG9va3Nba2V5XTtcbiAgICBpZiAoZXhpc3RpbmcgIT09IHRvTWVyZ2UgJiYgIShleGlzdGluZyAmJiBleGlzdGluZy5fbWVyZ2VkKSkge1xuICAgICAgaG9va3Nba2V5XSA9IGV4aXN0aW5nID8gbWVyZ2VIb29rJDEodG9NZXJnZSwgZXhpc3RpbmcpIDogdG9NZXJnZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VIb29rJDEgKGYxLCBmMikge1xuICB2YXIgbWVyZ2VkID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAvLyBmbG93IGNvbXBsYWlucyBhYm91dCBleHRyYSBhcmdzIHdoaWNoIGlzIHdoeSB3ZSB1c2UgYW55XG4gICAgZjEoYSwgYik7XG4gICAgZjIoYSwgYik7XG4gIH07XG4gIG1lcmdlZC5fbWVyZ2VkID0gdHJ1ZTtcbiAgcmV0dXJuIG1lcmdlZFxufVxuXG4vLyB0cmFuc2Zvcm0gY29tcG9uZW50IHYtbW9kZWwgaW5mbyAodmFsdWUgYW5kIGNhbGxiYWNrKSBpbnRvXG4vLyBwcm9wIGFuZCBldmVudCBoYW5kbGVyIHJlc3BlY3RpdmVseS5cbmZ1bmN0aW9uIHRyYW5zZm9ybU1vZGVsIChvcHRpb25zLCBkYXRhKSB7XG4gIHZhciBwcm9wID0gKG9wdGlvbnMubW9kZWwgJiYgb3B0aW9ucy5tb2RlbC5wcm9wKSB8fCAndmFsdWUnO1xuICB2YXIgZXZlbnQgPSAob3B0aW9ucy5tb2RlbCAmJiBvcHRpb25zLm1vZGVsLmV2ZW50KSB8fCAnaW5wdXQnXG4gIDsoZGF0YS5hdHRycyB8fCAoZGF0YS5hdHRycyA9IHt9KSlbcHJvcF0gPSBkYXRhLm1vZGVsLnZhbHVlO1xuICB2YXIgb24gPSBkYXRhLm9uIHx8IChkYXRhLm9uID0ge30pO1xuICB2YXIgZXhpc3RpbmcgPSBvbltldmVudF07XG4gIHZhciBjYWxsYmFjayA9IGRhdGEubW9kZWwuY2FsbGJhY2s7XG4gIGlmIChpc0RlZihleGlzdGluZykpIHtcbiAgICBpZiAoXG4gICAgICBBcnJheS5pc0FycmF5KGV4aXN0aW5nKVxuICAgICAgICA/IGV4aXN0aW5nLmluZGV4T2YoY2FsbGJhY2spID09PSAtMVxuICAgICAgICA6IGV4aXN0aW5nICE9PSBjYWxsYmFja1xuICAgICkge1xuICAgICAgb25bZXZlbnRdID0gW2NhbGxiYWNrXS5jb25jYXQoZXhpc3RpbmcpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvbltldmVudF0gPSBjYWxsYmFjaztcbiAgfVxufVxuXG4vKiAgKi9cblxudmFyIFNJTVBMRV9OT1JNQUxJWkUgPSAxO1xudmFyIEFMV0FZU19OT1JNQUxJWkUgPSAyO1xuXG4vLyB3cmFwcGVyIGZ1bmN0aW9uIGZvciBwcm92aWRpbmcgYSBtb3JlIGZsZXhpYmxlIGludGVyZmFjZVxuLy8gd2l0aG91dCBnZXR0aW5nIHllbGxlZCBhdCBieSBmbG93XG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50IChcbiAgY29udGV4dCxcbiAgdGFnLFxuICBkYXRhLFxuICBjaGlsZHJlbixcbiAgbm9ybWFsaXphdGlvblR5cGUsXG4gIGFsd2F5c05vcm1hbGl6ZVxuKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGRhdGEpIHx8IGlzUHJpbWl0aXZlKGRhdGEpKSB7XG4gICAgbm9ybWFsaXphdGlvblR5cGUgPSBjaGlsZHJlbjtcbiAgICBjaGlsZHJlbiA9IGRhdGE7XG4gICAgZGF0YSA9IHVuZGVmaW5lZDtcbiAgfVxuICBpZiAoaXNUcnVlKGFsd2F5c05vcm1hbGl6ZSkpIHtcbiAgICBub3JtYWxpemF0aW9uVHlwZSA9IEFMV0FZU19OT1JNQUxJWkU7XG4gIH1cbiAgcmV0dXJuIF9jcmVhdGVFbGVtZW50KGNvbnRleHQsIHRhZywgZGF0YSwgY2hpbGRyZW4sIG5vcm1hbGl6YXRpb25UeXBlKVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlRWxlbWVudCAoXG4gIGNvbnRleHQsXG4gIHRhZyxcbiAgZGF0YSxcbiAgY2hpbGRyZW4sXG4gIG5vcm1hbGl6YXRpb25UeXBlXG4pIHtcbiAgaWYgKGlzRGVmKGRhdGEpICYmIGlzRGVmKChkYXRhKS5fX29iX18pKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgXCJBdm9pZCB1c2luZyBvYnNlcnZlZCBkYXRhIG9iamVjdCBhcyB2bm9kZSBkYXRhOiBcIiArIChKU09OLnN0cmluZ2lmeShkYXRhKSkgKyBcIlxcblwiICtcbiAgICAgICdBbHdheXMgY3JlYXRlIGZyZXNoIHZub2RlIGRhdGEgb2JqZWN0cyBpbiBlYWNoIHJlbmRlciEnLFxuICAgICAgY29udGV4dFxuICAgICk7XG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIG9iamVjdCBzeW50YXggaW4gdi1iaW5kXG4gIGlmIChpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLmlzKSkge1xuICAgIHRhZyA9IGRhdGEuaXM7XG4gIH1cbiAgaWYgKCF0YWcpIHtcbiAgICAvLyBpbiBjYXNlIG9mIGNvbXBvbmVudCA6aXMgc2V0IHRvIGZhbHN5IHZhbHVlXG4gICAgcmV0dXJuIGNyZWF0ZUVtcHR5Vk5vZGUoKVxuICB9XG4gIC8vIHdhcm4gYWdhaW5zdCBub24tcHJpbWl0aXZlIGtleVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgIGlzRGVmKGRhdGEpICYmIGlzRGVmKGRhdGEua2V5KSAmJiAhaXNQcmltaXRpdmUoZGF0YS5rZXkpXG4gICkge1xuICAgIHtcbiAgICAgIHdhcm4oXG4gICAgICAgICdBdm9pZCB1c2luZyBub24tcHJpbWl0aXZlIHZhbHVlIGFzIGtleSwgJyArXG4gICAgICAgICd1c2Ugc3RyaW5nL251bWJlciB2YWx1ZSBpbnN0ZWFkLicsXG4gICAgICAgIGNvbnRleHRcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIC8vIHN1cHBvcnQgc2luZ2xlIGZ1bmN0aW9uIGNoaWxkcmVuIGFzIGRlZmF1bHQgc2NvcGVkIHNsb3RcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pICYmXG4gICAgdHlwZW9mIGNoaWxkcmVuWzBdID09PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIGRhdGEgPSBkYXRhIHx8IHt9O1xuICAgIGRhdGEuc2NvcGVkU2xvdHMgPSB7IGRlZmF1bHQ6IGNoaWxkcmVuWzBdIH07XG4gICAgY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgfVxuICBpZiAobm9ybWFsaXphdGlvblR5cGUgPT09IEFMV0FZU19OT1JNQUxJWkUpIHtcbiAgICBjaGlsZHJlbiA9IG5vcm1hbGl6ZUNoaWxkcmVuKGNoaWxkcmVuKTtcbiAgfSBlbHNlIGlmIChub3JtYWxpemF0aW9uVHlwZSA9PT0gU0lNUExFX05PUk1BTElaRSkge1xuICAgIGNoaWxkcmVuID0gc2ltcGxlTm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICB9XG4gIHZhciB2bm9kZSwgbnM7XG4gIGlmICh0eXBlb2YgdGFnID09PSAnc3RyaW5nJykge1xuICAgIHZhciBDdG9yO1xuICAgIG5zID0gKGNvbnRleHQuJHZub2RlICYmIGNvbnRleHQuJHZub2RlLm5zKSB8fCBjb25maWcuZ2V0VGFnTmFtZXNwYWNlKHRhZyk7XG4gICAgaWYgKGNvbmZpZy5pc1Jlc2VydmVkVGFnKHRhZykpIHtcbiAgICAgIC8vIHBsYXRmb3JtIGJ1aWx0LWluIGVsZW1lbnRzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBpc0RlZihkYXRhKSAmJiBpc0RlZihkYXRhLm5hdGl2ZU9uKSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIlRoZSAubmF0aXZlIG1vZGlmaWVyIGZvciB2LW9uIGlzIG9ubHkgdmFsaWQgb24gY29tcG9uZW50cyBidXQgaXQgd2FzIHVzZWQgb24gPFwiICsgdGFnICsgXCI+LlwiKSxcbiAgICAgICAgICBjb250ZXh0XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2bm9kZSA9IG5ldyBWTm9kZShcbiAgICAgICAgY29uZmlnLnBhcnNlUGxhdGZvcm1UYWdOYW1lKHRhZyksIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCghZGF0YSB8fCAhZGF0YS5wcmUpICYmIGlzRGVmKEN0b3IgPSByZXNvbHZlQXNzZXQoY29udGV4dC4kb3B0aW9ucywgJ2NvbXBvbmVudHMnLCB0YWcpKSkge1xuICAgICAgLy8gY29tcG9uZW50XG4gICAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudChDdG9yLCBkYXRhLCBjb250ZXh0LCBjaGlsZHJlbiwgdGFnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gdW5rbm93biBvciB1bmxpc3RlZCBuYW1lc3BhY2VkIGVsZW1lbnRzXG4gICAgICAvLyBjaGVjayBhdCBydW50aW1lIGJlY2F1c2UgaXQgbWF5IGdldCBhc3NpZ25lZCBhIG5hbWVzcGFjZSB3aGVuIGl0c1xuICAgICAgLy8gcGFyZW50IG5vcm1hbGl6ZXMgY2hpbGRyZW5cbiAgICAgIHZub2RlID0gbmV3IFZOb2RlKFxuICAgICAgICB0YWcsIGRhdGEsIGNoaWxkcmVuLFxuICAgICAgICB1bmRlZmluZWQsIHVuZGVmaW5lZCwgY29udGV4dFxuICAgICAgKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gZGlyZWN0IGNvbXBvbmVudCBvcHRpb25zIC8gY29uc3RydWN0b3JcbiAgICB2bm9kZSA9IGNyZWF0ZUNvbXBvbmVudCh0YWcsIGRhdGEsIGNvbnRleHQsIGNoaWxkcmVuKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICByZXR1cm4gdm5vZGVcbiAgfSBlbHNlIGlmIChpc0RlZih2bm9kZSkpIHtcbiAgICBpZiAoaXNEZWYobnMpKSB7IGFwcGx5TlModm5vZGUsIG5zKTsgfVxuICAgIGlmIChpc0RlZihkYXRhKSkgeyByZWdpc3RlckRlZXBCaW5kaW5ncyhkYXRhKTsgfVxuICAgIHJldHVybiB2bm9kZVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGVFbXB0eVZOb2RlKClcbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseU5TICh2bm9kZSwgbnMsIGZvcmNlKSB7XG4gIHZub2RlLm5zID0gbnM7XG4gIGlmICh2bm9kZS50YWcgPT09ICdmb3JlaWduT2JqZWN0Jykge1xuICAgIC8vIHVzZSBkZWZhdWx0IG5hbWVzcGFjZSBpbnNpZGUgZm9yZWlnbk9iamVjdFxuICAgIG5zID0gdW5kZWZpbmVkO1xuICAgIGZvcmNlID0gdHJ1ZTtcbiAgfVxuICBpZiAoaXNEZWYodm5vZGUuY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSB2bm9kZS5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IHZub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgaWYgKGlzRGVmKGNoaWxkLnRhZykgJiYgKFxuICAgICAgICBpc1VuZGVmKGNoaWxkLm5zKSB8fCAoaXNUcnVlKGZvcmNlKSAmJiBjaGlsZC50YWcgIT09ICdzdmcnKSkpIHtcbiAgICAgICAgYXBwbHlOUyhjaGlsZCwgbnMsIGZvcmNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gcmVmICM1MzE4XG4vLyBuZWNlc3NhcnkgdG8gZW5zdXJlIHBhcmVudCByZS1yZW5kZXIgd2hlbiBkZWVwIGJpbmRpbmdzIGxpa2UgOnN0eWxlIGFuZFxuLy8gOmNsYXNzIGFyZSB1c2VkIG9uIHNsb3Qgbm9kZXNcbmZ1bmN0aW9uIHJlZ2lzdGVyRGVlcEJpbmRpbmdzIChkYXRhKSB7XG4gIGlmIChpc09iamVjdChkYXRhLnN0eWxlKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuc3R5bGUpO1xuICB9XG4gIGlmIChpc09iamVjdChkYXRhLmNsYXNzKSkge1xuICAgIHRyYXZlcnNlKGRhdGEuY2xhc3MpO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0UmVuZGVyICh2bSkge1xuICB2bS5fdm5vZGUgPSBudWxsOyAvLyB0aGUgcm9vdCBvZiB0aGUgY2hpbGQgdHJlZVxuICB2bS5fc3RhdGljVHJlZXMgPSBudWxsOyAvLyB2LW9uY2UgY2FjaGVkIHRyZWVzXG4gIHZhciBvcHRpb25zID0gdm0uJG9wdGlvbnM7XG4gIHZhciBwYXJlbnRWbm9kZSA9IHZtLiR2bm9kZSA9IG9wdGlvbnMuX3BhcmVudFZub2RlOyAvLyB0aGUgcGxhY2Vob2xkZXIgbm9kZSBpbiBwYXJlbnQgdHJlZVxuICB2YXIgcmVuZGVyQ29udGV4dCA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmNvbnRleHQ7XG4gIHZtLiRzbG90cyA9IHJlc29sdmVTbG90cyhvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiwgcmVuZGVyQ29udGV4dCk7XG4gIHZtLiRzY29wZWRTbG90cyA9IGVtcHR5T2JqZWN0O1xuICAvLyBiaW5kIHRoZSBjcmVhdGVFbGVtZW50IGZuIHRvIHRoaXMgaW5zdGFuY2VcbiAgLy8gc28gdGhhdCB3ZSBnZXQgcHJvcGVyIHJlbmRlciBjb250ZXh0IGluc2lkZSBpdC5cbiAgLy8gYXJncyBvcmRlcjogdGFnLCBkYXRhLCBjaGlsZHJlbiwgbm9ybWFsaXphdGlvblR5cGUsIGFsd2F5c05vcm1hbGl6ZVxuICAvLyBpbnRlcm5hbCB2ZXJzaW9uIGlzIHVzZWQgYnkgcmVuZGVyIGZ1bmN0aW9ucyBjb21waWxlZCBmcm9tIHRlbXBsYXRlc1xuICB2bS5fYyA9IGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7IHJldHVybiBjcmVhdGVFbGVtZW50KHZtLCBhLCBiLCBjLCBkLCBmYWxzZSk7IH07XG4gIC8vIG5vcm1hbGl6YXRpb24gaXMgYWx3YXlzIGFwcGxpZWQgZm9yIHRoZSBwdWJsaWMgdmVyc2lvbiwgdXNlZCBpblxuICAvLyB1c2VyLXdyaXR0ZW4gcmVuZGVyIGZ1bmN0aW9ucy5cbiAgdm0uJGNyZWF0ZUVsZW1lbnQgPSBmdW5jdGlvbiAoYSwgYiwgYywgZCkgeyByZXR1cm4gY3JlYXRlRWxlbWVudCh2bSwgYSwgYiwgYywgZCwgdHJ1ZSk7IH07XG5cbiAgLy8gJGF0dHJzICYgJGxpc3RlbmVycyBhcmUgZXhwb3NlZCBmb3IgZWFzaWVyIEhPQyBjcmVhdGlvbi5cbiAgLy8gdGhleSBuZWVkIHRvIGJlIHJlYWN0aXZlIHNvIHRoYXQgSE9DcyB1c2luZyB0aGVtIGFyZSBhbHdheXMgdXBkYXRlZFxuICB2YXIgcGFyZW50RGF0YSA9IHBhcmVudFZub2RlICYmIHBhcmVudFZub2RlLmRhdGE7XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBkZWZpbmVSZWFjdGl2ZSQkMSh2bSwgJyRhdHRycycsIHBhcmVudERhdGEgJiYgcGFyZW50RGF0YS5hdHRycyB8fCBlbXB0eU9iamVjdCwgZnVuY3Rpb24gKCkge1xuICAgICAgIWlzVXBkYXRpbmdDaGlsZENvbXBvbmVudCAmJiB3YXJuKFwiJGF0dHJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckbGlzdGVuZXJzJywgb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0LCBmdW5jdGlvbiAoKSB7XG4gICAgICAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ICYmIHdhcm4oXCIkbGlzdGVuZXJzIGlzIHJlYWRvbmx5LlwiLCB2bSk7XG4gICAgfSwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGVmaW5lUmVhY3RpdmUkJDEodm0sICckYXR0cnMnLCBwYXJlbnREYXRhICYmIHBhcmVudERhdGEuYXR0cnMgfHwgZW1wdHlPYmplY3QsIG51bGwsIHRydWUpO1xuICAgIGRlZmluZVJlYWN0aXZlJCQxKHZtLCAnJGxpc3RlbmVycycsIG9wdGlvbnMuX3BhcmVudExpc3RlbmVycyB8fCBlbXB0eU9iamVjdCwgbnVsbCwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZSA9IG51bGw7XG5cbmZ1bmN0aW9uIHJlbmRlck1peGluIChWdWUpIHtcbiAgLy8gaW5zdGFsbCBydW50aW1lIGNvbnZlbmllbmNlIGhlbHBlcnNcbiAgaW5zdGFsbFJlbmRlckhlbHBlcnMoVnVlLnByb3RvdHlwZSk7XG5cbiAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gbmV4dFRpY2soZm4sIHRoaXMpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS5fcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdmFyIHJlZiA9IHZtLiRvcHRpb25zO1xuICAgIHZhciByZW5kZXIgPSByZWYucmVuZGVyO1xuICAgIHZhciBfcGFyZW50Vm5vZGUgPSByZWYuX3BhcmVudFZub2RlO1xuXG4gICAgaWYgKF9wYXJlbnRWbm9kZSkge1xuICAgICAgdm0uJHNjb3BlZFNsb3RzID0gbm9ybWFsaXplU2NvcGVkU2xvdHMoXG4gICAgICAgIF9wYXJlbnRWbm9kZS5kYXRhLnNjb3BlZFNsb3RzLFxuICAgICAgICB2bS4kc2xvdHMsXG4gICAgICAgIHZtLiRzY29wZWRTbG90c1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgcGFyZW50IHZub2RlLiB0aGlzIGFsbG93cyByZW5kZXIgZnVuY3Rpb25zIHRvIGhhdmUgYWNjZXNzXG4gICAgLy8gdG8gdGhlIGRhdGEgb24gdGhlIHBsYWNlaG9sZGVyIG5vZGUuXG4gICAgdm0uJHZub2RlID0gX3BhcmVudFZub2RlO1xuICAgIC8vIHJlbmRlciBzZWxmXG4gICAgdmFyIHZub2RlO1xuICAgIHRyeSB7XG4gICAgICAvLyBUaGVyZSdzIG5vIG5lZWQgdG8gbWFpbnRhaW4gYSBzdGFjayBiZWNhdXNlIGFsbCByZW5kZXIgZm5zIGFyZSBjYWxsZWRcbiAgICAgIC8vIHNlcGFyYXRlbHkgZnJvbSBvbmUgYW5vdGhlci4gTmVzdGVkIGNvbXBvbmVudCdzIHJlbmRlciBmbnMgYXJlIGNhbGxlZFxuICAgICAgLy8gd2hlbiBwYXJlbnQgY29tcG9uZW50IGlzIHBhdGNoZWQuXG4gICAgICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSB2bTtcbiAgICAgIHZub2RlID0gcmVuZGVyLmNhbGwodm0uX3JlbmRlclByb3h5LCB2bS4kY3JlYXRlRWxlbWVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyXCIpO1xuICAgICAgLy8gcmV0dXJuIGVycm9yIHJlbmRlciByZXN1bHQsXG4gICAgICAvLyBvciBwcmV2aW91cyB2bm9kZSB0byBwcmV2ZW50IHJlbmRlciBlcnJvciBjYXVzaW5nIGJsYW5rIGNvbXBvbmVudFxuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHZtLiRvcHRpb25zLnJlbmRlckVycm9yKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdm5vZGUgPSB2bS4kb3B0aW9ucy5yZW5kZXJFcnJvci5jYWxsKHZtLl9yZW5kZXJQcm94eSwgdm0uJGNyZWF0ZUVsZW1lbnQsIGUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwicmVuZGVyRXJyb3JcIik7XG4gICAgICAgICAgdm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZub2RlID0gdm0uX3Zub2RlO1xuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICBjdXJyZW50UmVuZGVyaW5nSW5zdGFuY2UgPSBudWxsO1xuICAgIH1cbiAgICAvLyBpZiB0aGUgcmV0dXJuZWQgYXJyYXkgY29udGFpbnMgb25seSBhIHNpbmdsZSBub2RlLCBhbGxvdyBpdFxuICAgIGlmIChBcnJheS5pc0FycmF5KHZub2RlKSAmJiB2bm9kZS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHZub2RlID0gdm5vZGVbMF07XG4gICAgfVxuICAgIC8vIHJldHVybiBlbXB0eSB2bm9kZSBpbiBjYXNlIHRoZSByZW5kZXIgZnVuY3Rpb24gZXJyb3JlZCBvdXRcbiAgICBpZiAoISh2bm9kZSBpbnN0YW5jZW9mIFZOb2RlKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgQXJyYXkuaXNBcnJheSh2bm9kZSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnTXVsdGlwbGUgcm9vdCBub2RlcyByZXR1cm5lZCBmcm9tIHJlbmRlciBmdW5jdGlvbi4gUmVuZGVyIGZ1bmN0aW9uICcgK1xuICAgICAgICAgICdzaG91bGQgcmV0dXJuIGEgc2luZ2xlIHJvb3Qgbm9kZS4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICB2bm9kZSA9IGNyZWF0ZUVtcHR5Vk5vZGUoKTtcbiAgICB9XG4gICAgLy8gc2V0IHBhcmVudFxuICAgIHZub2RlLnBhcmVudCA9IF9wYXJlbnRWbm9kZTtcbiAgICByZXR1cm4gdm5vZGVcbiAgfTtcbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGVuc3VyZUN0b3IgKGNvbXAsIGJhc2UpIHtcbiAgaWYgKFxuICAgIGNvbXAuX19lc01vZHVsZSB8fFxuICAgIChoYXNTeW1ib2wgJiYgY29tcFtTeW1ib2wudG9TdHJpbmdUYWddID09PSAnTW9kdWxlJylcbiAgKSB7XG4gICAgY29tcCA9IGNvbXAuZGVmYXVsdDtcbiAgfVxuICByZXR1cm4gaXNPYmplY3QoY29tcClcbiAgICA/IGJhc2UuZXh0ZW5kKGNvbXApXG4gICAgOiBjb21wXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFzeW5jUGxhY2Vob2xkZXIgKFxuICBmYWN0b3J5LFxuICBkYXRhLFxuICBjb250ZXh0LFxuICBjaGlsZHJlbixcbiAgdGFnXG4pIHtcbiAgdmFyIG5vZGUgPSBjcmVhdGVFbXB0eVZOb2RlKCk7XG4gIG5vZGUuYXN5bmNGYWN0b3J5ID0gZmFjdG9yeTtcbiAgbm9kZS5hc3luY01ldGEgPSB7IGRhdGE6IGRhdGEsIGNvbnRleHQ6IGNvbnRleHQsIGNoaWxkcmVuOiBjaGlsZHJlbiwgdGFnOiB0YWcgfTtcbiAgcmV0dXJuIG5vZGVcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUFzeW5jQ29tcG9uZW50IChcbiAgZmFjdG9yeSxcbiAgYmFzZUN0b3Jcbikge1xuICBpZiAoaXNUcnVlKGZhY3RvcnkuZXJyb3IpICYmIGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xuICAgIHJldHVybiBmYWN0b3J5LmVycm9yQ29tcFxuICB9XG5cbiAgaWYgKGlzRGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgcmV0dXJuIGZhY3RvcnkucmVzb2x2ZWRcbiAgfVxuXG4gIHZhciBvd25lciA9IGN1cnJlbnRSZW5kZXJpbmdJbnN0YW5jZTtcbiAgaWYgKG93bmVyICYmIGlzRGVmKGZhY3Rvcnkub3duZXJzKSAmJiBmYWN0b3J5Lm93bmVycy5pbmRleE9mKG93bmVyKSA9PT0gLTEpIHtcbiAgICAvLyBhbHJlYWR5IHBlbmRpbmdcbiAgICBmYWN0b3J5Lm93bmVycy5wdXNoKG93bmVyKTtcbiAgfVxuXG4gIGlmIChpc1RydWUoZmFjdG9yeS5sb2FkaW5nKSAmJiBpc0RlZihmYWN0b3J5LmxvYWRpbmdDb21wKSkge1xuICAgIHJldHVybiBmYWN0b3J5LmxvYWRpbmdDb21wXG4gIH1cblxuICBpZiAob3duZXIgJiYgIWlzRGVmKGZhY3Rvcnkub3duZXJzKSkge1xuICAgIHZhciBvd25lcnMgPSBmYWN0b3J5Lm93bmVycyA9IFtvd25lcl07XG4gICAgdmFyIHN5bmMgPSB0cnVlO1xuICAgIHZhciB0aW1lckxvYWRpbmcgPSBudWxsO1xuICAgIHZhciB0aW1lclRpbWVvdXQgPSBudWxsXG5cbiAgICA7KG93bmVyKS4kb24oJ2hvb2s6ZGVzdHJveWVkJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVtb3ZlKG93bmVycywgb3duZXIpOyB9KTtcblxuICAgIHZhciBmb3JjZVJlbmRlciA9IGZ1bmN0aW9uIChyZW5kZXJDb21wbGV0ZWQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gb3duZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAob3duZXJzW2ldKS4kZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlbmRlckNvbXBsZXRlZCkge1xuICAgICAgICBvd25lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgaWYgKHRpbWVyTG9hZGluZyAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lckxvYWRpbmcpO1xuICAgICAgICAgIHRpbWVyTG9hZGluZyA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVyVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lclRpbWVvdXQpO1xuICAgICAgICAgIHRpbWVyVGltZW91dCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmUgPSBvbmNlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgIC8vIGNhY2hlIHJlc29sdmVkXG4gICAgICBmYWN0b3J5LnJlc29sdmVkID0gZW5zdXJlQ3RvcihyZXMsIGJhc2VDdG9yKTtcbiAgICAgIC8vIGludm9rZSBjYWxsYmFja3Mgb25seSBpZiB0aGlzIGlzIG5vdCBhIHN5bmNocm9ub3VzIHJlc29sdmVcbiAgICAgIC8vIChhc3luYyByZXNvbHZlcyBhcmUgc2hpbW1lZCBhcyBzeW5jaHJvbm91cyBkdXJpbmcgU1NSKVxuICAgICAgaWYgKCFzeW5jKSB7XG4gICAgICAgIGZvcmNlUmVuZGVyKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3duZXJzLmxlbmd0aCA9IDA7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcmVqZWN0ID0gb25jZShmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiRmFpbGVkIHRvIHJlc29sdmUgYXN5bmMgY29tcG9uZW50OiBcIiArIChTdHJpbmcoZmFjdG9yeSkpICtcbiAgICAgICAgKHJlYXNvbiA/IChcIlxcblJlYXNvbjogXCIgKyByZWFzb24pIDogJycpXG4gICAgICApO1xuICAgICAgaWYgKGlzRGVmKGZhY3RvcnkuZXJyb3JDb21wKSkge1xuICAgICAgICBmYWN0b3J5LmVycm9yID0gdHJ1ZTtcbiAgICAgICAgZm9yY2VSZW5kZXIodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgcmVzID0gZmFjdG9yeShyZXNvbHZlLCByZWplY3QpO1xuXG4gICAgaWYgKGlzT2JqZWN0KHJlcykpIHtcbiAgICAgIGlmIChpc1Byb21pc2UocmVzKSkge1xuICAgICAgICAvLyAoKSA9PiBQcm9taXNlXG4gICAgICAgIGlmIChpc1VuZGVmKGZhY3RvcnkucmVzb2x2ZWQpKSB7XG4gICAgICAgICAgcmVzLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1Byb21pc2UocmVzLmNvbXBvbmVudCkpIHtcbiAgICAgICAgcmVzLmNvbXBvbmVudC50aGVuKHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgaWYgKGlzRGVmKHJlcy5lcnJvcikpIHtcbiAgICAgICAgICBmYWN0b3J5LmVycm9yQ29tcCA9IGVuc3VyZUN0b3IocmVzLmVycm9yLCBiYXNlQ3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYocmVzLmxvYWRpbmcpKSB7XG4gICAgICAgICAgZmFjdG9yeS5sb2FkaW5nQ29tcCA9IGVuc3VyZUN0b3IocmVzLmxvYWRpbmcsIGJhc2VDdG9yKTtcbiAgICAgICAgICBpZiAocmVzLmRlbGF5ID09PSAwKSB7XG4gICAgICAgICAgICBmYWN0b3J5LmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lckxvYWRpbmcgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdGltZXJMb2FkaW5nID0gbnVsbDtcbiAgICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkgJiYgaXNVbmRlZihmYWN0b3J5LmVycm9yKSkge1xuICAgICAgICAgICAgICAgIGZhY3RvcnkubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXIoZmFsc2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCByZXMuZGVsYXkgfHwgMjAwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNEZWYocmVzLnRpbWVvdXQpKSB7XG4gICAgICAgICAgdGltZXJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aW1lclRpbWVvdXQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGlzVW5kZWYoZmFjdG9yeS5yZXNvbHZlZCkpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KFxuICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbidcbiAgICAgICAgICAgICAgICAgID8gKFwidGltZW91dCAoXCIgKyAocmVzLnRpbWVvdXQpICsgXCJtcylcIilcbiAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHJlcy50aW1lb3V0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHN5bmMgPSBmYWxzZTtcbiAgICAvLyByZXR1cm4gaW4gY2FzZSByZXNvbHZlZCBzeW5jaHJvbm91c2x5XG4gICAgcmV0dXJuIGZhY3RvcnkubG9hZGluZ1xuICAgICAgPyBmYWN0b3J5LmxvYWRpbmdDb21wXG4gICAgICA6IGZhY3RvcnkucmVzb2x2ZWRcbiAgfVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaXNBc3luY1BsYWNlaG9sZGVyIChub2RlKSB7XG4gIHJldHVybiBub2RlLmlzQ29tbWVudCAmJiBub2RlLmFzeW5jRmFjdG9yeVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZCAoY2hpbGRyZW4pIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGMgPSBjaGlsZHJlbltpXTtcbiAgICAgIGlmIChpc0RlZihjKSAmJiAoaXNEZWYoYy5jb21wb25lbnRPcHRpb25zKSB8fCBpc0FzeW5jUGxhY2Vob2xkZXIoYykpKSB7XG4gICAgICAgIHJldHVybiBjXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV2ZW50cyAodm0pIHtcbiAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZtLl9oYXNIb29rRXZlbnQgPSBmYWxzZTtcbiAgLy8gaW5pdCBwYXJlbnQgYXR0YWNoZWQgZXZlbnRzXG4gIHZhciBsaXN0ZW5lcnMgPSB2bS4kb3B0aW9ucy5fcGFyZW50TGlzdGVuZXJzO1xuICBpZiAobGlzdGVuZXJzKSB7XG4gICAgdXBkYXRlQ29tcG9uZW50TGlzdGVuZXJzKHZtLCBsaXN0ZW5lcnMpO1xuICB9XG59XG5cbnZhciB0YXJnZXQ7XG5cbmZ1bmN0aW9uIGFkZCAoZXZlbnQsIGZuKSB7XG4gIHRhcmdldC4kb24oZXZlbnQsIGZuKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlJDEgKGV2ZW50LCBmbikge1xuICB0YXJnZXQuJG9mZihldmVudCwgZm4pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVPbmNlSGFuZGxlciAoZXZlbnQsIGZuKSB7XG4gIHZhciBfdGFyZ2V0ID0gdGFyZ2V0O1xuICByZXR1cm4gZnVuY3Rpb24gb25jZUhhbmRsZXIgKCkge1xuICAgIHZhciByZXMgPSBmbi5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgIGlmIChyZXMgIT09IG51bGwpIHtcbiAgICAgIF90YXJnZXQuJG9mZihldmVudCwgb25jZUhhbmRsZXIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVDb21wb25lbnRMaXN0ZW5lcnMgKFxuICB2bSxcbiAgbGlzdGVuZXJzLFxuICBvbGRMaXN0ZW5lcnNcbikge1xuICB0YXJnZXQgPSB2bTtcbiAgdXBkYXRlTGlzdGVuZXJzKGxpc3RlbmVycywgb2xkTGlzdGVuZXJzIHx8IHt9LCBhZGQsIHJlbW92ZSQxLCBjcmVhdGVPbmNlSGFuZGxlciwgdm0pO1xuICB0YXJnZXQgPSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGV2ZW50c01peGluIChWdWUpIHtcbiAgdmFyIGhvb2tSRSA9IC9eaG9vazovO1xuICBWdWUucHJvdG90eXBlLiRvbiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGV2ZW50KSkge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBldmVudC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdm0uJG9uKGV2ZW50W2ldLCBmbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICh2bS5fZXZlbnRzW2V2ZW50XSB8fCAodm0uX2V2ZW50c1tldmVudF0gPSBbXSkpLnB1c2goZm4pO1xuICAgICAgLy8gb3B0aW1pemUgaG9vazpldmVudCBjb3N0IGJ5IHVzaW5nIGEgYm9vbGVhbiBmbGFnIG1hcmtlZCBhdCByZWdpc3RyYXRpb25cbiAgICAgIC8vIGluc3RlYWQgb2YgYSBoYXNoIGxvb2t1cFxuICAgICAgaWYgKGhvb2tSRS50ZXN0KGV2ZW50KSkge1xuICAgICAgICB2bS5faGFzSG9va0V2ZW50ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZtXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kb25jZSA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGZ1bmN0aW9uIG9uICgpIHtcbiAgICAgIHZtLiRvZmYoZXZlbnQsIG9uKTtcbiAgICAgIGZuLmFwcGx5KHZtLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBvbi5mbiA9IGZuO1xuICAgIHZtLiRvbihldmVudCwgb24pO1xuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJG9mZiA9IGZ1bmN0aW9uIChldmVudCwgZm4pIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGFsbFxuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgdm0uX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICByZXR1cm4gdm1cbiAgICB9XG4gICAgLy8gYXJyYXkgb2YgZXZlbnRzXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnQpKSB7XG4gICAgICBmb3IgKHZhciBpJDEgPSAwLCBsID0gZXZlbnQubGVuZ3RoOyBpJDEgPCBsOyBpJDErKykge1xuICAgICAgICB2bS4kb2ZmKGV2ZW50W2kkMV0sIGZuKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBldmVudFxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoIWNicykge1xuICAgICAgcmV0dXJuIHZtXG4gICAgfVxuICAgIGlmICghZm4pIHtcbiAgICAgIHZtLl9ldmVudHNbZXZlbnRdID0gbnVsbDtcbiAgICAgIHJldHVybiB2bVxuICAgIH1cbiAgICAvLyBzcGVjaWZpYyBoYW5kbGVyXG4gICAgdmFyIGNiO1xuICAgIHZhciBpID0gY2JzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICBjYiA9IGNic1tpXTtcbiAgICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICAgIGNicy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2bVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbG93ZXJDYXNlRXZlbnQgPSBldmVudC50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGxvd2VyQ2FzZUV2ZW50ICE9PSBldmVudCAmJiB2bS5fZXZlbnRzW2xvd2VyQ2FzZUV2ZW50XSkge1xuICAgICAgICB0aXAoXG4gICAgICAgICAgXCJFdmVudCBcXFwiXCIgKyBsb3dlckNhc2VFdmVudCArIFwiXFxcIiBpcyBlbWl0dGVkIGluIGNvbXBvbmVudCBcIiArXG4gICAgICAgICAgKGZvcm1hdENvbXBvbmVudE5hbWUodm0pKSArIFwiIGJ1dCB0aGUgaGFuZGxlciBpcyByZWdpc3RlcmVkIGZvciBcXFwiXCIgKyBldmVudCArIFwiXFxcIi4gXCIgK1xuICAgICAgICAgIFwiTm90ZSB0aGF0IEhUTUwgYXR0cmlidXRlcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZSBhbmQgeW91IGNhbm5vdCB1c2UgXCIgK1xuICAgICAgICAgIFwidi1vbiB0byBsaXN0ZW4gdG8gY2FtZWxDYXNlIGV2ZW50cyB3aGVuIHVzaW5nIGluLURPTSB0ZW1wbGF0ZXMuIFwiICtcbiAgICAgICAgICBcIllvdSBzaG91bGQgcHJvYmFibHkgdXNlIFxcXCJcIiArIChoeXBoZW5hdGUoZXZlbnQpKSArIFwiXFxcIiBpbnN0ZWFkIG9mIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHZhciBjYnMgPSB2bS5fZXZlbnRzW2V2ZW50XTtcbiAgICBpZiAoY2JzKSB7XG4gICAgICBjYnMgPSBjYnMubGVuZ3RoID4gMSA/IHRvQXJyYXkoY2JzKSA6IGNicztcbiAgICAgIHZhciBhcmdzID0gdG9BcnJheShhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGluZm8gPSBcImV2ZW50IGhhbmRsZXIgZm9yIFxcXCJcIiArIGV2ZW50ICsgXCJcXFwiXCI7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGNicy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgaW52b2tlV2l0aEVycm9ySGFuZGxpbmcoY2JzW2ldLCB2bSwgYXJncywgdm0sIGluZm8pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdm1cbiAgfTtcbn1cblxuLyogICovXG5cbnZhciBhY3RpdmVJbnN0YW5jZSA9IG51bGw7XG52YXIgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUluc3RhbmNlKHZtKSB7XG4gIHZhciBwcmV2QWN0aXZlSW5zdGFuY2UgPSBhY3RpdmVJbnN0YW5jZTtcbiAgYWN0aXZlSW5zdGFuY2UgPSB2bTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBhY3RpdmVJbnN0YW5jZSA9IHByZXZBY3RpdmVJbnN0YW5jZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0TGlmZWN5Y2xlICh2bSkge1xuICB2YXIgb3B0aW9ucyA9IHZtLiRvcHRpb25zO1xuXG4gIC8vIGxvY2F0ZSBmaXJzdCBub24tYWJzdHJhY3QgcGFyZW50XG4gIHZhciBwYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgaWYgKHBhcmVudCAmJiAhb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgIHdoaWxlIChwYXJlbnQuJG9wdGlvbnMuYWJzdHJhY3QgJiYgcGFyZW50LiRwYXJlbnQpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgIH1cbiAgICBwYXJlbnQuJGNoaWxkcmVuLnB1c2godm0pO1xuICB9XG5cbiAgdm0uJHBhcmVudCA9IHBhcmVudDtcbiAgdm0uJHJvb3QgPSBwYXJlbnQgPyBwYXJlbnQuJHJvb3QgOiB2bTtcblxuICB2bS4kY2hpbGRyZW4gPSBbXTtcbiAgdm0uJHJlZnMgPSB7fTtcblxuICB2bS5fd2F0Y2hlciA9IG51bGw7XG4gIHZtLl9pbmFjdGl2ZSA9IG51bGw7XG4gIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICB2bS5faXNNb3VudGVkID0gZmFsc2U7XG4gIHZtLl9pc0Rlc3Ryb3llZCA9IGZhbHNlO1xuICB2bS5faXNCZWluZ0Rlc3Ryb3llZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBsaWZlY3ljbGVNaXhpbiAoVnVlKSB7XG4gIFZ1ZS5wcm90b3R5cGUuX3VwZGF0ZSA9IGZ1bmN0aW9uICh2bm9kZSwgaHlkcmF0aW5nKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2YXIgcHJldkVsID0gdm0uJGVsO1xuICAgIHZhciBwcmV2Vm5vZGUgPSB2bS5fdm5vZGU7XG4gICAgdmFyIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSA9IHNldEFjdGl2ZUluc3RhbmNlKHZtKTtcbiAgICB2bS5fdm5vZGUgPSB2bm9kZTtcbiAgICAvLyBWdWUucHJvdG90eXBlLl9fcGF0Y2hfXyBpcyBpbmplY3RlZCBpbiBlbnRyeSBwb2ludHNcbiAgICAvLyBiYXNlZCBvbiB0aGUgcmVuZGVyaW5nIGJhY2tlbmQgdXNlZC5cbiAgICBpZiAoIXByZXZWbm9kZSkge1xuICAgICAgLy8gaW5pdGlhbCByZW5kZXJcbiAgICAgIHZtLiRlbCA9IHZtLl9fcGF0Y2hfXyh2bS4kZWwsIHZub2RlLCBoeWRyYXRpbmcsIGZhbHNlIC8qIHJlbW92ZU9ubHkgKi8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyB1cGRhdGVzXG4gICAgICB2bS4kZWwgPSB2bS5fX3BhdGNoX18ocHJldlZub2RlLCB2bm9kZSk7XG4gICAgfVxuICAgIHJlc3RvcmVBY3RpdmVJbnN0YW5jZSgpO1xuICAgIC8vIHVwZGF0ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgIGlmIChwcmV2RWwpIHtcbiAgICAgIHByZXZFbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKHZtLiRlbCkge1xuICAgICAgdm0uJGVsLl9fdnVlX18gPSB2bTtcbiAgICB9XG4gICAgLy8gaWYgcGFyZW50IGlzIGFuIEhPQywgdXBkYXRlIGl0cyAkZWwgYXMgd2VsbFxuICAgIGlmICh2bS4kdm5vZGUgJiYgdm0uJHBhcmVudCAmJiB2bS4kdm5vZGUgPT09IHZtLiRwYXJlbnQuX3Zub2RlKSB7XG4gICAgICB2bS4kcGFyZW50LiRlbCA9IHZtLiRlbDtcbiAgICB9XG4gICAgLy8gdXBkYXRlZCBob29rIGlzIGNhbGxlZCBieSB0aGUgc2NoZWR1bGVyIHRvIGVuc3VyZSB0aGF0IGNoaWxkcmVuIGFyZVxuICAgIC8vIHVwZGF0ZWQgaW4gYSBwYXJlbnQncyB1cGRhdGVkIGhvb2suXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kZm9yY2VVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcbiAgICAgIHZtLl93YXRjaGVyLnVwZGF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBWdWUucHJvdG90eXBlLiRkZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgaWYgKHZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVEZXN0cm95Jyk7XG4gICAgdm0uX2lzQmVpbmdEZXN0cm95ZWQgPSB0cnVlO1xuICAgIC8vIHJlbW92ZSBzZWxmIGZyb20gcGFyZW50XG4gICAgdmFyIHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gICAgaWYgKHBhcmVudCAmJiAhcGFyZW50Ll9pc0JlaW5nRGVzdHJveWVkICYmICF2bS4kb3B0aW9ucy5hYnN0cmFjdCkge1xuICAgICAgcmVtb3ZlKHBhcmVudC4kY2hpbGRyZW4sIHZtKTtcbiAgICB9XG4gICAgLy8gdGVhcmRvd24gd2F0Y2hlcnNcbiAgICBpZiAodm0uX3dhdGNoZXIpIHtcbiAgICAgIHZtLl93YXRjaGVyLnRlYXJkb3duKCk7XG4gICAgfVxuICAgIHZhciBpID0gdm0uX3dhdGNoZXJzLmxlbmd0aDtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICB2bS5fd2F0Y2hlcnNbaV0udGVhcmRvd24oKTtcbiAgICB9XG4gICAgLy8gcmVtb3ZlIHJlZmVyZW5jZSBmcm9tIGRhdGEgb2JcbiAgICAvLyBmcm96ZW4gb2JqZWN0IG1heSBub3QgaGF2ZSBvYnNlcnZlci5cbiAgICBpZiAodm0uX2RhdGEuX19vYl9fKSB7XG4gICAgICB2bS5fZGF0YS5fX29iX18udm1Db3VudC0tO1xuICAgIH1cbiAgICAvLyBjYWxsIHRoZSBsYXN0IGhvb2suLi5cbiAgICB2bS5faXNEZXN0cm95ZWQgPSB0cnVlO1xuICAgIC8vIGludm9rZSBkZXN0cm95IGhvb2tzIG9uIGN1cnJlbnQgcmVuZGVyZWQgdHJlZVxuICAgIHZtLl9fcGF0Y2hfXyh2bS5fdm5vZGUsIG51bGwpO1xuICAgIC8vIGZpcmUgZGVzdHJveWVkIGhvb2tcbiAgICBjYWxsSG9vayh2bSwgJ2Rlc3Ryb3llZCcpO1xuICAgIC8vIHR1cm4gb2ZmIGFsbCBpbnN0YW5jZSBsaXN0ZW5lcnMuXG4gICAgdm0uJG9mZigpO1xuICAgIC8vIHJlbW92ZSBfX3Z1ZV9fIHJlZmVyZW5jZVxuICAgIGlmICh2bS4kZWwpIHtcbiAgICAgIHZtLiRlbC5fX3Z1ZV9fID0gbnVsbDtcbiAgICB9XG4gICAgLy8gcmVsZWFzZSBjaXJjdWxhciByZWZlcmVuY2UgKCM2NzU5KVxuICAgIGlmICh2bS4kdm5vZGUpIHtcbiAgICAgIHZtLiR2bm9kZS5wYXJlbnQgPSBudWxsO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2hpbGRDb21wb25lbnQgKFxuICB2bSxcbiAgcHJvcHNEYXRhLFxuICBsaXN0ZW5lcnMsXG4gIHBhcmVudFZub2RlLFxuICByZW5kZXJDaGlsZHJlblxuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gdHJ1ZTtcbiAgfVxuXG4gIC8vIGRldGVybWluZSB3aGV0aGVyIGNvbXBvbmVudCBoYXMgc2xvdCBjaGlsZHJlblxuICAvLyB3ZSBuZWVkIHRvIGRvIHRoaXMgYmVmb3JlIG92ZXJ3cml0aW5nICRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbi5cblxuICAvLyBjaGVjayBpZiB0aGVyZSBhcmUgZHluYW1pYyBzY29wZWRTbG90cyAoaGFuZC13cml0dGVuIG9yIGNvbXBpbGVkIGJ1dCB3aXRoXG4gIC8vIGR5bmFtaWMgc2xvdCBuYW1lcykuIFN0YXRpYyBzY29wZWQgc2xvdHMgY29tcGlsZWQgZnJvbSB0ZW1wbGF0ZSBoYXMgdGhlXG4gIC8vIFwiJHN0YWJsZVwiIG1hcmtlci5cbiAgdmFyIG5ld1Njb3BlZFNsb3RzID0gcGFyZW50Vm5vZGUuZGF0YS5zY29wZWRTbG90cztcbiAgdmFyIG9sZFNjb3BlZFNsb3RzID0gdm0uJHNjb3BlZFNsb3RzO1xuICB2YXIgaGFzRHluYW1pY1Njb3BlZFNsb3QgPSAhIShcbiAgICAobmV3U2NvcGVkU2xvdHMgJiYgIW5ld1Njb3BlZFNsb3RzLiRzdGFibGUpIHx8XG4gICAgKG9sZFNjb3BlZFNsb3RzICE9PSBlbXB0eU9iamVjdCAmJiAhb2xkU2NvcGVkU2xvdHMuJHN0YWJsZSkgfHxcbiAgICAobmV3U2NvcGVkU2xvdHMgJiYgdm0uJHNjb3BlZFNsb3RzLiRrZXkgIT09IG5ld1Njb3BlZFNsb3RzLiRrZXkpXG4gICk7XG5cbiAgLy8gQW55IHN0YXRpYyBzbG90IGNoaWxkcmVuIGZyb20gdGhlIHBhcmVudCBtYXkgaGF2ZSBjaGFuZ2VkIGR1cmluZyBwYXJlbnQnc1xuICAvLyB1cGRhdGUuIER5bmFtaWMgc2NvcGVkIHNsb3RzIG1heSBhbHNvIGhhdmUgY2hhbmdlZC4gSW4gc3VjaCBjYXNlcywgYSBmb3JjZWRcbiAgLy8gdXBkYXRlIGlzIG5lY2Vzc2FyeSB0byBlbnN1cmUgY29ycmVjdG5lc3MuXG4gIHZhciBuZWVkc0ZvcmNlVXBkYXRlID0gISEoXG4gICAgcmVuZGVyQ2hpbGRyZW4gfHwgICAgICAgICAgICAgICAvLyBoYXMgbmV3IHN0YXRpYyBzbG90c1xuICAgIHZtLiRvcHRpb25zLl9yZW5kZXJDaGlsZHJlbiB8fCAgLy8gaGFzIG9sZCBzdGF0aWMgc2xvdHNcbiAgICBoYXNEeW5hbWljU2NvcGVkU2xvdFxuICApO1xuXG4gIHZtLiRvcHRpb25zLl9wYXJlbnRWbm9kZSA9IHBhcmVudFZub2RlO1xuICB2bS4kdm5vZGUgPSBwYXJlbnRWbm9kZTsgLy8gdXBkYXRlIHZtJ3MgcGxhY2Vob2xkZXIgbm9kZSB3aXRob3V0IHJlLXJlbmRlclxuXG4gIGlmICh2bS5fdm5vZGUpIHsgLy8gdXBkYXRlIGNoaWxkIHRyZWUncyBwYXJlbnRcbiAgICB2bS5fdm5vZGUucGFyZW50ID0gcGFyZW50Vm5vZGU7XG4gIH1cbiAgdm0uJG9wdGlvbnMuX3JlbmRlckNoaWxkcmVuID0gcmVuZGVyQ2hpbGRyZW47XG5cbiAgLy8gdXBkYXRlICRhdHRycyBhbmQgJGxpc3RlbmVycyBoYXNoXG4gIC8vIHRoZXNlIGFyZSBhbHNvIHJlYWN0aXZlIHNvIHRoZXkgbWF5IHRyaWdnZXIgY2hpbGQgdXBkYXRlIGlmIHRoZSBjaGlsZFxuICAvLyB1c2VkIHRoZW0gZHVyaW5nIHJlbmRlclxuICB2bS4kYXR0cnMgPSBwYXJlbnRWbm9kZS5kYXRhLmF0dHJzIHx8IGVtcHR5T2JqZWN0O1xuICB2bS4kbGlzdGVuZXJzID0gbGlzdGVuZXJzIHx8IGVtcHR5T2JqZWN0O1xuXG4gIC8vIHVwZGF0ZSBwcm9wc1xuICBpZiAocHJvcHNEYXRhICYmIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgICB2YXIgcHJvcHMgPSB2bS5fcHJvcHM7XG4gICAgdmFyIHByb3BLZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzIHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgIHZhciBwcm9wT3B0aW9ucyA9IHZtLiRvcHRpb25zLnByb3BzOyAvLyB3dGYgZmxvdz9cbiAgICAgIHByb3BzW2tleV0gPSB2YWxpZGF0ZVByb3Aoa2V5LCBwcm9wT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgfVxuICAgIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbiAgICAvLyBrZWVwIGEgY29weSBvZiByYXcgcHJvcHNEYXRhXG4gICAgdm0uJG9wdGlvbnMucHJvcHNEYXRhID0gcHJvcHNEYXRhO1xuICB9XG4gIFxuICAvLyBmaXhlZCBieSB4eHh4eHggdXBkYXRlIHByb3BlcnRpZXMobXAgcnVudGltZSlcbiAgdm0uXyR1cGRhdGVQcm9wZXJ0aWVzICYmIHZtLl8kdXBkYXRlUHJvcGVydGllcyh2bSk7XG4gIFxuICAvLyB1cGRhdGUgbGlzdGVuZXJzXG4gIGxpc3RlbmVycyA9IGxpc3RlbmVycyB8fCBlbXB0eU9iamVjdDtcbiAgdmFyIG9sZExpc3RlbmVycyA9IHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnM7XG4gIHZtLiRvcHRpb25zLl9wYXJlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gIHVwZGF0ZUNvbXBvbmVudExpc3RlbmVycyh2bSwgbGlzdGVuZXJzLCBvbGRMaXN0ZW5lcnMpO1xuXG4gIC8vIHJlc29sdmUgc2xvdHMgKyBmb3JjZSB1cGRhdGUgaWYgaGFzIGNoaWxkcmVuXG4gIGlmIChuZWVkc0ZvcmNlVXBkYXRlKSB7XG4gICAgdm0uJHNsb3RzID0gcmVzb2x2ZVNsb3RzKHJlbmRlckNoaWxkcmVuLCBwYXJlbnRWbm9kZS5jb250ZXh0KTtcbiAgICB2bS4kZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50ID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNJbkluYWN0aXZlVHJlZSAodm0pIHtcbiAgd2hpbGUgKHZtICYmICh2bSA9IHZtLiRwYXJlbnQpKSB7XG4gICAgaWYgKHZtLl9pbmFjdGl2ZSkgeyByZXR1cm4gdHJ1ZSB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcbiAgaWYgKGRpcmVjdCkge1xuICAgIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IGZhbHNlO1xuICAgIGlmIChpc0luSW5hY3RpdmVUcmVlKHZtKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICB9IGVsc2UgaWYgKHZtLl9kaXJlY3RJbmFjdGl2ZSkge1xuICAgIHJldHVyblxuICB9XG4gIGlmICh2bS5faW5hY3RpdmUgfHwgdm0uX2luYWN0aXZlID09PSBudWxsKSB7XG4gICAgdm0uX2luYWN0aXZlID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2bS4kY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdhY3RpdmF0ZWQnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQgKHZtLCBkaXJlY3QpIHtcbiAgaWYgKGRpcmVjdCkge1xuICAgIHZtLl9kaXJlY3RJbmFjdGl2ZSA9IHRydWU7XG4gICAgaWYgKGlzSW5JbmFjdGl2ZVRyZWUodm0pKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH1cbiAgaWYgKCF2bS5faW5hY3RpdmUpIHtcbiAgICB2bS5faW5hY3RpdmUgPSB0cnVlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdm0uJGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBkZWFjdGl2YXRlQ2hpbGRDb21wb25lbnQodm0uJGNoaWxkcmVuW2ldKTtcbiAgICB9XG4gICAgY2FsbEhvb2sodm0sICdkZWFjdGl2YXRlZCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxIb29rICh2bSwgaG9vaykge1xuICAvLyAjNzU3MyBkaXNhYmxlIGRlcCBjb2xsZWN0aW9uIHdoZW4gaW52b2tpbmcgbGlmZWN5Y2xlIGhvb2tzXG4gIHB1c2hUYXJnZXQoKTtcbiAgdmFyIGhhbmRsZXJzID0gdm0uJG9wdGlvbnNbaG9va107XG4gIHZhciBpbmZvID0gaG9vayArIFwiIGhvb2tcIjtcbiAgaWYgKGhhbmRsZXJzKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGhhbmRsZXJzW2ldLCB2bSwgbnVsbCwgdm0sIGluZm8pO1xuICAgIH1cbiAgfVxuICBpZiAodm0uX2hhc0hvb2tFdmVudCkge1xuICAgIHZtLiRlbWl0KCdob29rOicgKyBob29rKTtcbiAgfVxuICBwb3BUYXJnZXQoKTtcbn1cblxuLyogICovXG5cbnZhciBNQVhfVVBEQVRFX0NPVU5UID0gMTAwO1xuXG52YXIgcXVldWUgPSBbXTtcbnZhciBhY3RpdmF0ZWRDaGlsZHJlbiA9IFtdO1xudmFyIGhhcyA9IHt9O1xudmFyIGNpcmN1bGFyID0ge307XG52YXIgd2FpdGluZyA9IGZhbHNlO1xudmFyIGZsdXNoaW5nID0gZmFsc2U7XG52YXIgaW5kZXggPSAwO1xuXG4vKipcbiAqIFJlc2V0IHRoZSBzY2hlZHVsZXIncyBzdGF0ZS5cbiAqL1xuZnVuY3Rpb24gcmVzZXRTY2hlZHVsZXJTdGF0ZSAoKSB7XG4gIGluZGV4ID0gcXVldWUubGVuZ3RoID0gYWN0aXZhdGVkQ2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgaGFzID0ge307XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY2lyY3VsYXIgPSB7fTtcbiAgfVxuICB3YWl0aW5nID0gZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gQXN5bmMgZWRnZSBjYXNlICM2NTY2IHJlcXVpcmVzIHNhdmluZyB0aGUgdGltZXN0YW1wIHdoZW4gZXZlbnQgbGlzdGVuZXJzIGFyZVxuLy8gYXR0YWNoZWQuIEhvd2V2ZXIsIGNhbGxpbmcgcGVyZm9ybWFuY2Uubm93KCkgaGFzIGEgcGVyZiBvdmVyaGVhZCBlc3BlY2lhbGx5XG4vLyBpZiB0aGUgcGFnZSBoYXMgdGhvdXNhbmRzIG9mIGV2ZW50IGxpc3RlbmVycy4gSW5zdGVhZCwgd2UgdGFrZSBhIHRpbWVzdGFtcFxuLy8gZXZlcnkgdGltZSB0aGUgc2NoZWR1bGVyIGZsdXNoZXMgYW5kIHVzZSB0aGF0IGZvciBhbGwgZXZlbnQgbGlzdGVuZXJzXG4vLyBhdHRhY2hlZCBkdXJpbmcgdGhhdCBmbHVzaC5cbnZhciBjdXJyZW50Rmx1c2hUaW1lc3RhbXAgPSAwO1xuXG4vLyBBc3luYyBlZGdlIGNhc2UgZml4IHJlcXVpcmVzIHN0b3JpbmcgYW4gZXZlbnQgbGlzdGVuZXIncyBhdHRhY2ggdGltZXN0YW1wLlxudmFyIGdldE5vdyA9IERhdGUubm93O1xuXG4vLyBEZXRlcm1pbmUgd2hhdCBldmVudCB0aW1lc3RhbXAgdGhlIGJyb3dzZXIgaXMgdXNpbmcuIEFubm95aW5nbHksIHRoZVxuLy8gdGltZXN0YW1wIGNhbiBlaXRoZXIgYmUgaGktcmVzIChyZWxhdGl2ZSB0byBwYWdlIGxvYWQpIG9yIGxvdy1yZXNcbi8vIChyZWxhdGl2ZSB0byBVTklYIGVwb2NoKSwgc28gaW4gb3JkZXIgdG8gY29tcGFyZSB0aW1lIHdlIGhhdmUgdG8gdXNlIHRoZVxuLy8gc2FtZSB0aW1lc3RhbXAgdHlwZSB3aGVuIHNhdmluZyB0aGUgZmx1c2ggdGltZXN0YW1wLlxuLy8gQWxsIElFIHZlcnNpb25zIHVzZSBsb3ctcmVzIGV2ZW50IHRpbWVzdGFtcHMsIGFuZCBoYXZlIHByb2JsZW1hdGljIGNsb2NrXG4vLyBpbXBsZW1lbnRhdGlvbnMgKCM5NjMyKVxuaWYgKGluQnJvd3NlciAmJiAhaXNJRSkge1xuICB2YXIgcGVyZm9ybWFuY2UgPSB3aW5kb3cucGVyZm9ybWFuY2U7XG4gIGlmIChcbiAgICBwZXJmb3JtYW5jZSAmJlxuICAgIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbicgJiZcbiAgICBnZXROb3coKSA+IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpLnRpbWVTdGFtcFxuICApIHtcbiAgICAvLyBpZiB0aGUgZXZlbnQgdGltZXN0YW1wLCBhbHRob3VnaCBldmFsdWF0ZWQgQUZURVIgdGhlIERhdGUubm93KCksIGlzXG4gICAgLy8gc21hbGxlciB0aGFuIGl0LCBpdCBtZWFucyB0aGUgZXZlbnQgaXMgdXNpbmcgYSBoaS1yZXMgdGltZXN0YW1wLFxuICAgIC8vIGFuZCB3ZSBuZWVkIHRvIHVzZSB0aGUgaGktcmVzIHZlcnNpb24gZm9yIGV2ZW50IGxpc3RlbmVyIHRpbWVzdGFtcHMgYXNcbiAgICAvLyB3ZWxsLlxuICAgIGdldE5vdyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpOyB9O1xuICB9XG59XG5cbi8qKlxuICogRmx1c2ggYm90aCBxdWV1ZXMgYW5kIHJ1biB0aGUgd2F0Y2hlcnMuXG4gKi9cbmZ1bmN0aW9uIGZsdXNoU2NoZWR1bGVyUXVldWUgKCkge1xuICBjdXJyZW50Rmx1c2hUaW1lc3RhbXAgPSBnZXROb3coKTtcbiAgZmx1c2hpbmcgPSB0cnVlO1xuICB2YXIgd2F0Y2hlciwgaWQ7XG5cbiAgLy8gU29ydCBxdWV1ZSBiZWZvcmUgZmx1c2guXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0OlxuICAvLyAxLiBDb21wb25lbnRzIGFyZSB1cGRhdGVkIGZyb20gcGFyZW50IHRvIGNoaWxkLiAoYmVjYXVzZSBwYXJlbnQgaXMgYWx3YXlzXG4gIC8vICAgIGNyZWF0ZWQgYmVmb3JlIHRoZSBjaGlsZClcbiAgLy8gMi4gQSBjb21wb25lbnQncyB1c2VyIHdhdGNoZXJzIGFyZSBydW4gYmVmb3JlIGl0cyByZW5kZXIgd2F0Y2hlciAoYmVjYXVzZVxuICAvLyAgICB1c2VyIHdhdGNoZXJzIGFyZSBjcmVhdGVkIGJlZm9yZSB0aGUgcmVuZGVyIHdhdGNoZXIpXG4gIC8vIDMuIElmIGEgY29tcG9uZW50IGlzIGRlc3Ryb3llZCBkdXJpbmcgYSBwYXJlbnQgY29tcG9uZW50J3Mgd2F0Y2hlciBydW4sXG4gIC8vICAgIGl0cyB3YXRjaGVycyBjYW4gYmUgc2tpcHBlZC5cbiAgcXVldWUuc29ydChmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gYS5pZCAtIGIuaWQ7IH0pO1xuXG4gIC8vIGRvIG5vdCBjYWNoZSBsZW5ndGggYmVjYXVzZSBtb3JlIHdhdGNoZXJzIG1pZ2h0IGJlIHB1c2hlZFxuICAvLyBhcyB3ZSBydW4gZXhpc3Rpbmcgd2F0Y2hlcnNcbiAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcXVldWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgd2F0Y2hlciA9IHF1ZXVlW2luZGV4XTtcbiAgICBpZiAod2F0Y2hlci5iZWZvcmUpIHtcbiAgICAgIHdhdGNoZXIuYmVmb3JlKCk7XG4gICAgfVxuICAgIGlkID0gd2F0Y2hlci5pZDtcbiAgICBoYXNbaWRdID0gbnVsbDtcbiAgICB3YXRjaGVyLnJ1bigpO1xuICAgIC8vIGluIGRldiBidWlsZCwgY2hlY2sgYW5kIHN0b3AgY2lyY3VsYXIgdXBkYXRlcy5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBoYXNbaWRdICE9IG51bGwpIHtcbiAgICAgIGNpcmN1bGFyW2lkXSA9IChjaXJjdWxhcltpZF0gfHwgMCkgKyAxO1xuICAgICAgaWYgKGNpcmN1bGFyW2lkXSA+IE1BWF9VUERBVEVfQ09VTlQpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICAnWW91IG1heSBoYXZlIGFuIGluZmluaXRlIHVwZGF0ZSBsb29wICcgKyAoXG4gICAgICAgICAgICB3YXRjaGVyLnVzZXJcbiAgICAgICAgICAgICAgPyAoXCJpbiB3YXRjaGVyIHdpdGggZXhwcmVzc2lvbiBcXFwiXCIgKyAod2F0Y2hlci5leHByZXNzaW9uKSArIFwiXFxcIlwiKVxuICAgICAgICAgICAgICA6IFwiaW4gYSBjb21wb25lbnQgcmVuZGVyIGZ1bmN0aW9uLlwiXG4gICAgICAgICAgKSxcbiAgICAgICAgICB3YXRjaGVyLnZtXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8ga2VlcCBjb3BpZXMgb2YgcG9zdCBxdWV1ZXMgYmVmb3JlIHJlc2V0dGluZyBzdGF0ZVxuICB2YXIgYWN0aXZhdGVkUXVldWUgPSBhY3RpdmF0ZWRDaGlsZHJlbi5zbGljZSgpO1xuICB2YXIgdXBkYXRlZFF1ZXVlID0gcXVldWUuc2xpY2UoKTtcblxuICByZXNldFNjaGVkdWxlclN0YXRlKCk7XG5cbiAgLy8gY2FsbCBjb21wb25lbnQgdXBkYXRlZCBhbmQgYWN0aXZhdGVkIGhvb2tzXG4gIGNhbGxBY3RpdmF0ZWRIb29rcyhhY3RpdmF0ZWRRdWV1ZSk7XG4gIGNhbGxVcGRhdGVkSG9va3ModXBkYXRlZFF1ZXVlKTtcblxuICAvLyBkZXZ0b29sIGhvb2tcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChkZXZ0b29scyAmJiBjb25maWcuZGV2dG9vbHMpIHtcbiAgICBkZXZ0b29scy5lbWl0KCdmbHVzaCcpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGxVcGRhdGVkSG9va3MgKHF1ZXVlKSB7XG4gIHZhciBpID0gcXVldWUubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIHdhdGNoZXIgPSBxdWV1ZVtpXTtcbiAgICB2YXIgdm0gPSB3YXRjaGVyLnZtO1xuICAgIGlmICh2bS5fd2F0Y2hlciA9PT0gd2F0Y2hlciAmJiB2bS5faXNNb3VudGVkICYmICF2bS5faXNEZXN0cm95ZWQpIHtcbiAgICAgIGNhbGxIb29rKHZtLCAndXBkYXRlZCcpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFF1ZXVlIGEga2VwdC1hbGl2ZSBjb21wb25lbnQgdGhhdCB3YXMgYWN0aXZhdGVkIGR1cmluZyBwYXRjaC5cbiAqIFRoZSBxdWV1ZSB3aWxsIGJlIHByb2Nlc3NlZCBhZnRlciB0aGUgZW50aXJlIHRyZWUgaGFzIGJlZW4gcGF0Y2hlZC5cbiAqL1xuZnVuY3Rpb24gcXVldWVBY3RpdmF0ZWRDb21wb25lbnQgKHZtKSB7XG4gIC8vIHNldHRpbmcgX2luYWN0aXZlIHRvIGZhbHNlIGhlcmUgc28gdGhhdCBhIHJlbmRlciBmdW5jdGlvbiBjYW5cbiAgLy8gcmVseSBvbiBjaGVja2luZyB3aGV0aGVyIGl0J3MgaW4gYW4gaW5hY3RpdmUgdHJlZSAoZS5nLiByb3V0ZXItdmlldylcbiAgdm0uX2luYWN0aXZlID0gZmFsc2U7XG4gIGFjdGl2YXRlZENoaWxkcmVuLnB1c2godm0pO1xufVxuXG5mdW5jdGlvbiBjYWxsQWN0aXZhdGVkSG9va3MgKHF1ZXVlKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBxdWV1ZVtpXS5faW5hY3RpdmUgPSB0cnVlO1xuICAgIGFjdGl2YXRlQ2hpbGRDb21wb25lbnQocXVldWVbaV0sIHRydWUgLyogdHJ1ZSAqLyk7XG4gIH1cbn1cblxuLyoqXG4gKiBQdXNoIGEgd2F0Y2hlciBpbnRvIHRoZSB3YXRjaGVyIHF1ZXVlLlxuICogSm9icyB3aXRoIGR1cGxpY2F0ZSBJRHMgd2lsbCBiZSBza2lwcGVkIHVubGVzcyBpdCdzXG4gKiBwdXNoZWQgd2hlbiB0aGUgcXVldWUgaXMgYmVpbmcgZmx1c2hlZC5cbiAqL1xuZnVuY3Rpb24gcXVldWVXYXRjaGVyICh3YXRjaGVyKSB7XG4gIHZhciBpZCA9IHdhdGNoZXIuaWQ7XG4gIGlmIChoYXNbaWRdID09IG51bGwpIHtcbiAgICBoYXNbaWRdID0gdHJ1ZTtcbiAgICBpZiAoIWZsdXNoaW5nKSB7XG4gICAgICBxdWV1ZS5wdXNoKHdhdGNoZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBhbHJlYWR5IGZsdXNoaW5nLCBzcGxpY2UgdGhlIHdhdGNoZXIgYmFzZWQgb24gaXRzIGlkXG4gICAgICAvLyBpZiBhbHJlYWR5IHBhc3QgaXRzIGlkLCBpdCB3aWxsIGJlIHJ1biBuZXh0IGltbWVkaWF0ZWx5LlxuICAgICAgdmFyIGkgPSBxdWV1ZS5sZW5ndGggLSAxO1xuICAgICAgd2hpbGUgKGkgPiBpbmRleCAmJiBxdWV1ZVtpXS5pZCA+IHdhdGNoZXIuaWQpIHtcbiAgICAgICAgaS0tO1xuICAgICAgfVxuICAgICAgcXVldWUuc3BsaWNlKGkgKyAxLCAwLCB3YXRjaGVyKTtcbiAgICB9XG4gICAgLy8gcXVldWUgdGhlIGZsdXNoXG4gICAgaWYgKCF3YWl0aW5nKSB7XG4gICAgICB3YWl0aW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgIWNvbmZpZy5hc3luYykge1xuICAgICAgICBmbHVzaFNjaGVkdWxlclF1ZXVlKCk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbmV4dFRpY2soZmx1c2hTY2hlZHVsZXJRdWV1ZSk7XG4gICAgfVxuICB9XG59XG5cbi8qICAqL1xuXG5cblxudmFyIHVpZCQyID0gMDtcblxuLyoqXG4gKiBBIHdhdGNoZXIgcGFyc2VzIGFuIGV4cHJlc3Npb24sIGNvbGxlY3RzIGRlcGVuZGVuY2llcyxcbiAqIGFuZCBmaXJlcyBjYWxsYmFjayB3aGVuIHRoZSBleHByZXNzaW9uIHZhbHVlIGNoYW5nZXMuXG4gKiBUaGlzIGlzIHVzZWQgZm9yIGJvdGggdGhlICR3YXRjaCgpIGFwaSBhbmQgZGlyZWN0aXZlcy5cbiAqL1xudmFyIFdhdGNoZXIgPSBmdW5jdGlvbiBXYXRjaGVyIChcbiAgdm0sXG4gIGV4cE9yRm4sXG4gIGNiLFxuICBvcHRpb25zLFxuICBpc1JlbmRlcldhdGNoZXJcbikge1xuICB0aGlzLnZtID0gdm07XG4gIGlmIChpc1JlbmRlcldhdGNoZXIpIHtcbiAgICB2bS5fd2F0Y2hlciA9IHRoaXM7XG4gIH1cbiAgdm0uX3dhdGNoZXJzLnB1c2godGhpcyk7XG4gIC8vIG9wdGlvbnNcbiAgaWYgKG9wdGlvbnMpIHtcbiAgICB0aGlzLmRlZXAgPSAhIW9wdGlvbnMuZGVlcDtcbiAgICB0aGlzLnVzZXIgPSAhIW9wdGlvbnMudXNlcjtcbiAgICB0aGlzLmxhenkgPSAhIW9wdGlvbnMubGF6eTtcbiAgICB0aGlzLnN5bmMgPSAhIW9wdGlvbnMuc3luYztcbiAgICB0aGlzLmJlZm9yZSA9IG9wdGlvbnMuYmVmb3JlO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZGVlcCA9IHRoaXMudXNlciA9IHRoaXMubGF6eSA9IHRoaXMuc3luYyA9IGZhbHNlO1xuICB9XG4gIHRoaXMuY2IgPSBjYjtcbiAgdGhpcy5pZCA9ICsrdWlkJDI7IC8vIHVpZCBmb3IgYmF0Y2hpbmdcbiAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB0aGlzLmRpcnR5ID0gdGhpcy5sYXp5OyAvLyBmb3IgbGF6eSB3YXRjaGVyc1xuICB0aGlzLmRlcHMgPSBbXTtcbiAgdGhpcy5uZXdEZXBzID0gW107XG4gIHRoaXMuZGVwSWRzID0gbmV3IF9TZXQoKTtcbiAgdGhpcy5uZXdEZXBJZHMgPSBuZXcgX1NldCgpO1xuICB0aGlzLmV4cHJlc3Npb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgPyBleHBPckZuLnRvU3RyaW5nKClcbiAgICA6ICcnO1xuICAvLyBwYXJzZSBleHByZXNzaW9uIGZvciBnZXR0ZXJcbiAgaWYgKHR5cGVvZiBleHBPckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhpcy5nZXR0ZXIgPSBleHBPckZuO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuZ2V0dGVyID0gcGFyc2VQYXRoKGV4cE9yRm4pO1xuICAgIGlmICghdGhpcy5nZXR0ZXIpIHtcbiAgICAgIHRoaXMuZ2V0dGVyID0gbm9vcDtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgd2FybihcbiAgICAgICAgXCJGYWlsZWQgd2F0Y2hpbmcgcGF0aDogXFxcIlwiICsgZXhwT3JGbiArIFwiXFxcIiBcIiArXG4gICAgICAgICdXYXRjaGVyIG9ubHkgYWNjZXB0cyBzaW1wbGUgZG90LWRlbGltaXRlZCBwYXRocy4gJyArXG4gICAgICAgICdGb3IgZnVsbCBjb250cm9sLCB1c2UgYSBmdW5jdGlvbiBpbnN0ZWFkLicsXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgfVxuICB0aGlzLnZhbHVlID0gdGhpcy5sYXp5XG4gICAgPyB1bmRlZmluZWRcbiAgICA6IHRoaXMuZ2V0KCk7XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSBnZXR0ZXIsIGFuZCByZS1jb2xsZWN0IGRlcGVuZGVuY2llcy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0ICgpIHtcbiAgcHVzaFRhcmdldCh0aGlzKTtcbiAgdmFyIHZhbHVlO1xuICB2YXIgdm0gPSB0aGlzLnZtO1xuICB0cnkge1xuICAgIHZhbHVlID0gdGhpcy5nZXR0ZXIuY2FsbCh2bSwgdm0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgaWYgKHRoaXMudXNlcikge1xuICAgICAgaGFuZGxlRXJyb3IoZSwgdm0sIChcImdldHRlciBmb3Igd2F0Y2hlciBcXFwiXCIgKyAodGhpcy5leHByZXNzaW9uKSArIFwiXFxcIlwiKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IGVcbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgLy8gXCJ0b3VjaFwiIGV2ZXJ5IHByb3BlcnR5IHNvIHRoZXkgYXJlIGFsbCB0cmFja2VkIGFzXG4gICAgLy8gZGVwZW5kZW5jaWVzIGZvciBkZWVwIHdhdGNoaW5nXG4gICAgaWYgKHRoaXMuZGVlcCkge1xuICAgICAgdHJhdmVyc2UodmFsdWUpO1xuICAgIH1cbiAgICBwb3BUYXJnZXQoKTtcbiAgICB0aGlzLmNsZWFudXBEZXBzKCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlXG59O1xuXG4vKipcbiAqIEFkZCBhIGRlcGVuZGVuY3kgdG8gdGhpcyBkaXJlY3RpdmUuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLmFkZERlcCA9IGZ1bmN0aW9uIGFkZERlcCAoZGVwKSB7XG4gIHZhciBpZCA9IGRlcC5pZDtcbiAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoaWQpKSB7XG4gICAgdGhpcy5uZXdEZXBJZHMuYWRkKGlkKTtcbiAgICB0aGlzLm5ld0RlcHMucHVzaChkZXApO1xuICAgIGlmICghdGhpcy5kZXBJZHMuaGFzKGlkKSkge1xuICAgICAgZGVwLmFkZFN1Yih0aGlzKTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogQ2xlYW4gdXAgZm9yIGRlcGVuZGVuY3kgY29sbGVjdGlvbi5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuY2xlYW51cERlcHMgPSBmdW5jdGlvbiBjbGVhbnVwRGVwcyAoKSB7XG4gIHZhciBpID0gdGhpcy5kZXBzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBkZXAgPSB0aGlzLmRlcHNbaV07XG4gICAgaWYgKCF0aGlzLm5ld0RlcElkcy5oYXMoZGVwLmlkKSkge1xuICAgICAgZGVwLnJlbW92ZVN1Yih0aGlzKTtcbiAgICB9XG4gIH1cbiAgdmFyIHRtcCA9IHRoaXMuZGVwSWRzO1xuICB0aGlzLmRlcElkcyA9IHRoaXMubmV3RGVwSWRzO1xuICB0aGlzLm5ld0RlcElkcyA9IHRtcDtcbiAgdGhpcy5uZXdEZXBJZHMuY2xlYXIoKTtcbiAgdG1wID0gdGhpcy5kZXBzO1xuICB0aGlzLmRlcHMgPSB0aGlzLm5ld0RlcHM7XG4gIHRoaXMubmV3RGVwcyA9IHRtcDtcbiAgdGhpcy5uZXdEZXBzLmxlbmd0aCA9IDA7XG59O1xuXG4vKipcbiAqIFN1YnNjcmliZXIgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgd2hlbiBhIGRlcGVuZGVuY3kgY2hhbmdlcy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlICgpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgaWYgKHRoaXMubGF6eSkge1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICB9IGVsc2UgaWYgKHRoaXMuc3luYykge1xuICAgIHRoaXMucnVuKCk7XG4gIH0gZWxzZSB7XG4gICAgcXVldWVXYXRjaGVyKHRoaXMpO1xuICB9XG59O1xuXG4vKipcbiAqIFNjaGVkdWxlciBqb2IgaW50ZXJmYWNlLlxuICogV2lsbCBiZSBjYWxsZWQgYnkgdGhlIHNjaGVkdWxlci5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gcnVuICgpIHtcbiAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgdmFyIHZhbHVlID0gdGhpcy5nZXQoKTtcbiAgICBpZiAoXG4gICAgICB2YWx1ZSAhPT0gdGhpcy52YWx1ZSB8fFxuICAgICAgLy8gRGVlcCB3YXRjaGVycyBhbmQgd2F0Y2hlcnMgb24gT2JqZWN0L0FycmF5cyBzaG91bGQgZmlyZSBldmVuXG4gICAgICAvLyB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSwgYmVjYXVzZSB0aGUgdmFsdWUgbWF5XG4gICAgICAvLyBoYXZlIG11dGF0ZWQuXG4gICAgICBpc09iamVjdCh2YWx1ZSkgfHxcbiAgICAgIHRoaXMuZGVlcFxuICAgICkge1xuICAgICAgLy8gc2V0IG5ldyB2YWx1ZVxuICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLnVzZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmNiLmNhbGwodGhpcy52bSwgdmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGhhbmRsZUVycm9yKGUsIHRoaXMudm0sIChcImNhbGxiYWNrIGZvciB3YXRjaGVyIFxcXCJcIiArICh0aGlzLmV4cHJlc3Npb24pICsgXCJcXFwiXCIpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYi5jYWxsKHRoaXMudm0sIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIEV2YWx1YXRlIHRoZSB2YWx1ZSBvZiB0aGUgd2F0Y2hlci5cbiAqIFRoaXMgb25seSBnZXRzIGNhbGxlZCBmb3IgbGF6eSB3YXRjaGVycy5cbiAqL1xuV2F0Y2hlci5wcm90b3R5cGUuZXZhbHVhdGUgPSBmdW5jdGlvbiBldmFsdWF0ZSAoKSB7XG4gIHRoaXMudmFsdWUgPSB0aGlzLmdldCgpO1xuICB0aGlzLmRpcnR5ID0gZmFsc2U7XG59O1xuXG4vKipcbiAqIERlcGVuZCBvbiBhbGwgZGVwcyBjb2xsZWN0ZWQgYnkgdGhpcyB3YXRjaGVyLlxuICovXG5XYXRjaGVyLnByb3RvdHlwZS5kZXBlbmQgPSBmdW5jdGlvbiBkZXBlbmQgKCkge1xuICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gIHdoaWxlIChpLS0pIHtcbiAgICB0aGlzLmRlcHNbaV0uZGVwZW5kKCk7XG4gIH1cbn07XG5cbi8qKlxuICogUmVtb3ZlIHNlbGYgZnJvbSBhbGwgZGVwZW5kZW5jaWVzJyBzdWJzY3JpYmVyIGxpc3QuXG4gKi9cbldhdGNoZXIucHJvdG90eXBlLnRlYXJkb3duID0gZnVuY3Rpb24gdGVhcmRvd24gKCkge1xuICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAvLyByZW1vdmUgc2VsZiBmcm9tIHZtJ3Mgd2F0Y2hlciBsaXN0XG4gICAgLy8gdGhpcyBpcyBhIHNvbWV3aGF0IGV4cGVuc2l2ZSBvcGVyYXRpb24gc28gd2Ugc2tpcCBpdFxuICAgIC8vIGlmIHRoZSB2bSBpcyBiZWluZyBkZXN0cm95ZWQuXG4gICAgaWYgKCF0aGlzLnZtLl9pc0JlaW5nRGVzdHJveWVkKSB7XG4gICAgICByZW1vdmUodGhpcy52bS5fd2F0Y2hlcnMsIHRoaXMpO1xuICAgIH1cbiAgICB2YXIgaSA9IHRoaXMuZGVwcy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgdGhpcy5kZXBzW2ldLnJlbW92ZVN1Yih0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufTtcblxuLyogICovXG5cbnZhciBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24gPSB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBub29wLFxuICBzZXQ6IG5vb3Bcbn07XG5cbmZ1bmN0aW9uIHByb3h5ICh0YXJnZXQsIHNvdXJjZUtleSwga2V5KSB7XG4gIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBmdW5jdGlvbiBwcm94eUdldHRlciAoKSB7XG4gICAgcmV0dXJuIHRoaXNbc291cmNlS2V5XVtrZXldXG4gIH07XG4gIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPSBmdW5jdGlvbiBwcm94eVNldHRlciAodmFsKSB7XG4gICAgdGhpc1tzb3VyY2VLZXldW2tleV0gPSB2YWw7XG4gIH07XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uKTtcbn1cblxuZnVuY3Rpb24gaW5pdFN0YXRlICh2bSkge1xuICB2bS5fd2F0Y2hlcnMgPSBbXTtcbiAgdmFyIG9wdHMgPSB2bS4kb3B0aW9ucztcbiAgaWYgKG9wdHMucHJvcHMpIHsgaW5pdFByb3BzKHZtLCBvcHRzLnByb3BzKTsgfVxuICBpZiAob3B0cy5tZXRob2RzKSB7IGluaXRNZXRob2RzKHZtLCBvcHRzLm1ldGhvZHMpOyB9XG4gIGlmIChvcHRzLmRhdGEpIHtcbiAgICBpbml0RGF0YSh2bSk7XG4gIH0gZWxzZSB7XG4gICAgb2JzZXJ2ZSh2bS5fZGF0YSA9IHt9LCB0cnVlIC8qIGFzUm9vdERhdGEgKi8pO1xuICB9XG4gIGlmIChvcHRzLmNvbXB1dGVkKSB7IGluaXRDb21wdXRlZCh2bSwgb3B0cy5jb21wdXRlZCk7IH1cbiAgaWYgKG9wdHMud2F0Y2ggJiYgb3B0cy53YXRjaCAhPT0gbmF0aXZlV2F0Y2gpIHtcbiAgICBpbml0V2F0Y2godm0sIG9wdHMud2F0Y2gpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRQcm9wcyAodm0sIHByb3BzT3B0aW9ucykge1xuICB2YXIgcHJvcHNEYXRhID0gdm0uJG9wdGlvbnMucHJvcHNEYXRhIHx8IHt9O1xuICB2YXIgcHJvcHMgPSB2bS5fcHJvcHMgPSB7fTtcbiAgLy8gY2FjaGUgcHJvcCBrZXlzIHNvIHRoYXQgZnV0dXJlIHByb3BzIHVwZGF0ZXMgY2FuIGl0ZXJhdGUgdXNpbmcgQXJyYXlcbiAgLy8gaW5zdGVhZCBvZiBkeW5hbWljIG9iamVjdCBrZXkgZW51bWVyYXRpb24uXG4gIHZhciBrZXlzID0gdm0uJG9wdGlvbnMuX3Byb3BLZXlzID0gW107XG4gIHZhciBpc1Jvb3QgPSAhdm0uJHBhcmVudDtcbiAgLy8gcm9vdCBpbnN0YW5jZSBwcm9wcyBzaG91bGQgYmUgY29udmVydGVkXG4gIGlmICghaXNSb290KSB7XG4gICAgdG9nZ2xlT2JzZXJ2aW5nKGZhbHNlKTtcbiAgfVxuICB2YXIgbG9vcCA9IGZ1bmN0aW9uICgga2V5ICkge1xuICAgIGtleXMucHVzaChrZXkpO1xuICAgIHZhciB2YWx1ZSA9IHZhbGlkYXRlUHJvcChrZXksIHByb3BzT3B0aW9ucywgcHJvcHNEYXRhLCB2bSk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIGh5cGhlbmF0ZWRLZXkgPSBoeXBoZW5hdGUoa2V5KTtcbiAgICAgIGlmIChpc1Jlc2VydmVkQXR0cmlidXRlKGh5cGhlbmF0ZWRLZXkpIHx8XG4gICAgICAgICAgY29uZmlnLmlzUmVzZXJ2ZWRBdHRyKGh5cGhlbmF0ZWRLZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiXFxcIlwiICsgaHlwaGVuYXRlZEtleSArIFwiXFxcIiBpcyBhIHJlc2VydmVkIGF0dHJpYnV0ZSBhbmQgY2Fubm90IGJlIHVzZWQgYXMgY29tcG9uZW50IHByb3AuXCIpLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzUm9vdCAmJiAhaXNVcGRhdGluZ0NoaWxkQ29tcG9uZW50KSB7XG4gICAgICAgICAge1xuICAgICAgICAgICAgaWYodm0ubXBIb3N0ID09PSAnbXAtYmFpZHUnKXsvL+eZvuW6piBvYnNlcnZlciDlnKggc2V0RGF0YSBjYWxsYmFjayDkuYvlkI7op6blj5HvvIznm7TmjqXlv73nlaXor6Ugd2FyblxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9maXhlZCBieSB4eHh4eHggX19uZXh0X3RpY2tfcGVuZGluZyx1bmk6Ly9mb3JtLWZpZWxkIOaXtuS4jeWRiuitplxuICAgICAgICAgICAgaWYoXG4gICAgICAgICAgICAgICAga2V5ID09PSAndmFsdWUnICYmIFxuICAgICAgICAgICAgICAgIEFycmF5LmlzQXJyYXkodm0uJG9wdGlvbnMuYmVoYXZpb3JzKSAmJlxuICAgICAgICAgICAgICAgIHZtLiRvcHRpb25zLmJlaGF2aW9ycy5pbmRleE9mKCd1bmk6Ly9mb3JtLWZpZWxkJykgIT09IC0xXG4gICAgICAgICAgICAgICl7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodm0uX2dldEZvcm1EYXRhKXtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgJHBhcmVudCA9IHZtLiRwYXJlbnQ7XG4gICAgICAgICAgICB3aGlsZSgkcGFyZW50KXtcbiAgICAgICAgICAgICAgaWYoJHBhcmVudC5fX25leHRfdGlja19wZW5kaW5nKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICRwYXJlbnQgPSAkcGFyZW50LiRwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHdhcm4oXG4gICAgICAgICAgICBcIkF2b2lkIG11dGF0aW5nIGEgcHJvcCBkaXJlY3RseSBzaW5jZSB0aGUgdmFsdWUgd2lsbCBiZSBcIiArXG4gICAgICAgICAgICBcIm92ZXJ3cml0dGVuIHdoZW5ldmVyIHRoZSBwYXJlbnQgY29tcG9uZW50IHJlLXJlbmRlcnMuIFwiICtcbiAgICAgICAgICAgIFwiSW5zdGVhZCwgdXNlIGEgZGF0YSBvciBjb21wdXRlZCBwcm9wZXJ0eSBiYXNlZCBvbiB0aGUgcHJvcCdzIFwiICtcbiAgICAgICAgICAgIFwidmFsdWUuIFByb3AgYmVpbmcgbXV0YXRlZDogXFxcIlwiICsga2V5ICsgXCJcXFwiXCIsXG4gICAgICAgICAgICB2bVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZpbmVSZWFjdGl2ZSQkMShwcm9wcywga2V5LCB2YWx1ZSk7XG4gICAgfVxuICAgIC8vIHN0YXRpYyBwcm9wcyBhcmUgYWxyZWFkeSBwcm94aWVkIG9uIHRoZSBjb21wb25lbnQncyBwcm90b3R5cGVcbiAgICAvLyBkdXJpbmcgVnVlLmV4dGVuZCgpLiBXZSBvbmx5IG5lZWQgdG8gcHJveHkgcHJvcHMgZGVmaW5lZCBhdFxuICAgIC8vIGluc3RhbnRpYXRpb24gaGVyZS5cbiAgICBpZiAoIShrZXkgaW4gdm0pKSB7XG4gICAgICBwcm94eSh2bSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgICB9XG4gIH07XG5cbiAgZm9yICh2YXIga2V5IGluIHByb3BzT3B0aW9ucykgbG9vcCgga2V5ICk7XG4gIHRvZ2dsZU9ic2VydmluZyh0cnVlKTtcbn1cblxuZnVuY3Rpb24gaW5pdERhdGEgKHZtKSB7XG4gIHZhciBkYXRhID0gdm0uJG9wdGlvbnMuZGF0YTtcbiAgZGF0YSA9IHZtLl9kYXRhID0gdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbidcbiAgICA/IGdldERhdGEoZGF0YSwgdm0pXG4gICAgOiBkYXRhIHx8IHt9O1xuICBpZiAoIWlzUGxhaW5PYmplY3QoZGF0YSkpIHtcbiAgICBkYXRhID0ge307XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB3YXJuKFxuICAgICAgJ2RhdGEgZnVuY3Rpb25zIHNob3VsZCByZXR1cm4gYW4gb2JqZWN0OlxcbicgK1xuICAgICAgJ2h0dHBzOi8vdnVlanMub3JnL3YyL2d1aWRlL2NvbXBvbmVudHMuaHRtbCNkYXRhLU11c3QtQmUtYS1GdW5jdGlvbicsXG4gICAgICB2bVxuICAgICk7XG4gIH1cbiAgLy8gcHJveHkgZGF0YSBvbiBpbnN0YW5jZVxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRhdGEpO1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgdmFyIG1ldGhvZHMgPSB2bS4kb3B0aW9ucy5tZXRob2RzO1xuICB2YXIgaSA9IGtleXMubGVuZ3RoO1xuICB3aGlsZSAoaS0tKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChtZXRob2RzICYmIGhhc093bihtZXRob2RzLCBrZXkpKSB7XG4gICAgICAgIHdhcm4oXG4gICAgICAgICAgKFwiTWV0aG9kIFxcXCJcIiArIGtleSArIFwiXFxcIiBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQgYXMgYSBkYXRhIHByb3BlcnR5LlwiKSxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJvcHMgJiYgaGFzT3duKHByb3BzLCBrZXkpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHdhcm4oXG4gICAgICAgIFwiVGhlIGRhdGEgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIGlzIGFscmVhZHkgZGVjbGFyZWQgYXMgYSBwcm9wLiBcIiArXG4gICAgICAgIFwiVXNlIHByb3AgZGVmYXVsdCB2YWx1ZSBpbnN0ZWFkLlwiLFxuICAgICAgICB2bVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKCFpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgIHByb3h5KHZtLCBcIl9kYXRhXCIsIGtleSk7XG4gICAgfVxuICB9XG4gIC8vIG9ic2VydmUgZGF0YVxuICBvYnNlcnZlKGRhdGEsIHRydWUgLyogYXNSb290RGF0YSAqLyk7XG59XG5cbmZ1bmN0aW9uIGdldERhdGEgKGRhdGEsIHZtKSB7XG4gIC8vICM3NTczIGRpc2FibGUgZGVwIGNvbGxlY3Rpb24gd2hlbiBpbnZva2luZyBkYXRhIGdldHRlcnNcbiAgcHVzaFRhcmdldCgpO1xuICB0cnkge1xuICAgIHJldHVybiBkYXRhLmNhbGwodm0sIHZtKVxuICB9IGNhdGNoIChlKSB7XG4gICAgaGFuZGxlRXJyb3IoZSwgdm0sIFwiZGF0YSgpXCIpO1xuICAgIHJldHVybiB7fVxuICB9IGZpbmFsbHkge1xuICAgIHBvcFRhcmdldCgpO1xuICB9XG59XG5cbnZhciBjb21wdXRlZFdhdGNoZXJPcHRpb25zID0geyBsYXp5OiB0cnVlIH07XG5cbmZ1bmN0aW9uIGluaXRDb21wdXRlZCAodm0sIGNvbXB1dGVkKSB7XG4gIC8vICRmbG93LWRpc2FibGUtbGluZVxuICB2YXIgd2F0Y2hlcnMgPSB2bS5fY29tcHV0ZWRXYXRjaGVycyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIC8vIGNvbXB1dGVkIHByb3BlcnRpZXMgYXJlIGp1c3QgZ2V0dGVycyBkdXJpbmcgU1NSXG4gIHZhciBpc1NTUiA9IGlzU2VydmVyUmVuZGVyaW5nKCk7XG5cbiAgZm9yICh2YXIga2V5IGluIGNvbXB1dGVkKSB7XG4gICAgdmFyIHVzZXJEZWYgPSBjb21wdXRlZFtrZXldO1xuICAgIHZhciBnZXR0ZXIgPSB0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJyA/IHVzZXJEZWYgOiB1c2VyRGVmLmdldDtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiR2V0dGVyIGlzIG1pc3NpbmcgZm9yIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIi5cIiksXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghaXNTU1IpIHtcbiAgICAgIC8vIGNyZWF0ZSBpbnRlcm5hbCB3YXRjaGVyIGZvciB0aGUgY29tcHV0ZWQgcHJvcGVydHkuXG4gICAgICB3YXRjaGVyc1trZXldID0gbmV3IFdhdGNoZXIoXG4gICAgICAgIHZtLFxuICAgICAgICBnZXR0ZXIgfHwgbm9vcCxcbiAgICAgICAgbm9vcCxcbiAgICAgICAgY29tcHV0ZWRXYXRjaGVyT3B0aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjb21wb25lbnQtZGVmaW5lZCBjb21wdXRlZCBwcm9wZXJ0aWVzIGFyZSBhbHJlYWR5IGRlZmluZWQgb24gdGhlXG4gICAgLy8gY29tcG9uZW50IHByb3RvdHlwZS4gV2Ugb25seSBuZWVkIHRvIGRlZmluZSBjb21wdXRlZCBwcm9wZXJ0aWVzIGRlZmluZWRcbiAgICAvLyBhdCBpbnN0YW50aWF0aW9uIGhlcmUuXG4gICAgaWYgKCEoa2V5IGluIHZtKSkge1xuICAgICAgZGVmaW5lQ29tcHV0ZWQodm0sIGtleSwgdXNlckRlZik7XG4gICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoa2V5IGluIHZtLiRkYXRhKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgaW4gZGF0YS5cIiksIHZtKTtcbiAgICAgIH0gZWxzZSBpZiAodm0uJG9wdGlvbnMucHJvcHMgJiYga2V5IGluIHZtLiRvcHRpb25zLnByb3BzKSB7XG4gICAgICAgIHdhcm4oKFwiVGhlIGNvbXB1dGVkIHByb3BlcnR5IFxcXCJcIiArIGtleSArIFwiXFxcIiBpcyBhbHJlYWR5IGRlZmluZWQgYXMgYSBwcm9wLlwiKSwgdm0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVDb21wdXRlZCAoXG4gIHRhcmdldCxcbiAga2V5LFxuICB1c2VyRGVmXG4pIHtcbiAgdmFyIHNob3VsZENhY2hlID0gIWlzU2VydmVyUmVuZGVyaW5nKCk7XG4gIGlmICh0eXBlb2YgdXNlckRlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5nZXQgPSBzaG91bGRDYWNoZVxuICAgICAgPyBjcmVhdGVDb21wdXRlZEdldHRlcihrZXkpXG4gICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZik7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IG5vb3A7XG4gIH0gZWxzZSB7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLmdldCA9IHVzZXJEZWYuZ2V0XG4gICAgICA/IHNob3VsZENhY2hlICYmIHVzZXJEZWYuY2FjaGUgIT09IGZhbHNlXG4gICAgICAgID8gY3JlYXRlQ29tcHV0ZWRHZXR0ZXIoa2V5KVxuICAgICAgICA6IGNyZWF0ZUdldHRlckludm9rZXIodXNlckRlZi5nZXQpXG4gICAgICA6IG5vb3A7XG4gICAgc2hhcmVkUHJvcGVydHlEZWZpbml0aW9uLnNldCA9IHVzZXJEZWYuc2V0IHx8IG5vb3A7XG4gIH1cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICAgIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbi5zZXQgPT09IG5vb3ApIHtcbiAgICBzaGFyZWRQcm9wZXJ0eURlZmluaXRpb24uc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcbiAgICAgICAgKFwiQ29tcHV0ZWQgcHJvcGVydHkgXFxcIlwiICsga2V5ICsgXCJcXFwiIHdhcyBhc3NpZ25lZCB0byBidXQgaXQgaGFzIG5vIHNldHRlci5cIiksXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNoYXJlZFByb3BlcnR5RGVmaW5pdGlvbik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVkR2V0dGVyIChrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICB2YXIgd2F0Y2hlciA9IHRoaXMuX2NvbXB1dGVkV2F0Y2hlcnMgJiYgdGhpcy5fY29tcHV0ZWRXYXRjaGVyc1trZXldO1xuICAgIGlmICh3YXRjaGVyKSB7XG4gICAgICBpZiAod2F0Y2hlci5kaXJ0eSkge1xuICAgICAgICB3YXRjaGVyLmV2YWx1YXRlKCk7XG4gICAgICB9XG4gICAgICBpZiAoRGVwLlNoYXJlZE9iamVjdC50YXJnZXQpIHsvLyBmaXhlZCBieSB4eHh4eHhcbiAgICAgICAgd2F0Y2hlci5kZXBlbmQoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3YXRjaGVyLnZhbHVlXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdldHRlckludm9rZXIoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNvbXB1dGVkR2V0dGVyICgpIHtcbiAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCB0aGlzKVxuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRNZXRob2RzICh2bSwgbWV0aG9kcykge1xuICB2YXIgcHJvcHMgPSB2bS4kb3B0aW9ucy5wcm9wcztcbiAgZm9yICh2YXIga2V5IGluIG1ldGhvZHMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBtZXRob2RzW2tleV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIHR5cGUgXFxcIlwiICsgKHR5cGVvZiBtZXRob2RzW2tleV0pICsgXCJcXFwiIGluIHRoZSBjb21wb25lbnQgZGVmaW5pdGlvbi4gXCIgK1xuICAgICAgICAgIFwiRGlkIHlvdSByZWZlcmVuY2UgdGhlIGZ1bmN0aW9uIGNvcnJlY3RseT9cIixcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKHByb3BzICYmIGhhc093bihwcm9wcywga2V5KSkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgIChcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkIGFzIGEgcHJvcC5cIiksXG4gICAgICAgICAgdm1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmICgoa2V5IGluIHZtKSAmJiBpc1Jlc2VydmVkKGtleSkpIHtcbiAgICAgICAgd2FybihcbiAgICAgICAgICBcIk1ldGhvZCBcXFwiXCIgKyBrZXkgKyBcIlxcXCIgY29uZmxpY3RzIHdpdGggYW4gZXhpc3RpbmcgVnVlIGluc3RhbmNlIG1ldGhvZC4gXCIgK1xuICAgICAgICAgIFwiQXZvaWQgZGVmaW5pbmcgY29tcG9uZW50IG1ldGhvZHMgdGhhdCBzdGFydCB3aXRoIF8gb3IgJC5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICB2bVtrZXldID0gdHlwZW9mIG1ldGhvZHNba2V5XSAhPT0gJ2Z1bmN0aW9uJyA/IG5vb3AgOiBiaW5kKG1ldGhvZHNba2V5XSwgdm0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGluaXRXYXRjaCAodm0sIHdhdGNoKSB7XG4gIGZvciAodmFyIGtleSBpbiB3YXRjaCkge1xuICAgIHZhciBoYW5kbGVyID0gd2F0Y2hba2V5XTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShoYW5kbGVyKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBoYW5kbGVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcltpXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNyZWF0ZVdhdGNoZXIodm0sIGtleSwgaGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdhdGNoZXIgKFxuICB2bSxcbiAgZXhwT3JGbixcbiAgaGFuZGxlcixcbiAgb3B0aW9uc1xuKSB7XG4gIGlmIChpc1BsYWluT2JqZWN0KGhhbmRsZXIpKSB7XG4gICAgb3B0aW9ucyA9IGhhbmRsZXI7XG4gICAgaGFuZGxlciA9IGhhbmRsZXIuaGFuZGxlcjtcbiAgfVxuICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICdzdHJpbmcnKSB7XG4gICAgaGFuZGxlciA9IHZtW2hhbmRsZXJdO1xuICB9XG4gIHJldHVybiB2bS4kd2F0Y2goZXhwT3JGbiwgaGFuZGxlciwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gc3RhdGVNaXhpbiAoVnVlKSB7XG4gIC8vIGZsb3cgc29tZWhvdyBoYXMgcHJvYmxlbXMgd2l0aCBkaXJlY3RseSBkZWNsYXJlZCBkZWZpbml0aW9uIG9iamVjdFxuICAvLyB3aGVuIHVzaW5nIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSwgc28gd2UgaGF2ZSB0byBwcm9jZWR1cmFsbHkgYnVpbGQgdXBcbiAgLy8gdGhlIG9iamVjdCBoZXJlLlxuICB2YXIgZGF0YURlZiA9IHt9O1xuICBkYXRhRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEgfTtcbiAgdmFyIHByb3BzRGVmID0ge307XG4gIHByb3BzRGVmLmdldCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX3Byb3BzIH07XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZGF0YURlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnQXZvaWQgcmVwbGFjaW5nIGluc3RhbmNlIHJvb3QgJGRhdGEuICcgK1xuICAgICAgICAnVXNlIG5lc3RlZCBkYXRhIHByb3BlcnRpZXMgaW5zdGVhZC4nLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH07XG4gICAgcHJvcHNEZWYuc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgd2FybihcIiRwcm9wcyBpcyByZWFkb25seS5cIiwgdGhpcyk7XG4gICAgfTtcbiAgfVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRkYXRhJywgZGF0YURlZik7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShWdWUucHJvdG90eXBlLCAnJHByb3BzJywgcHJvcHNEZWYpO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHNldCA9IHNldDtcbiAgVnVlLnByb3RvdHlwZS4kZGVsZXRlID0gZGVsO1xuXG4gIFZ1ZS5wcm90b3R5cGUuJHdhdGNoID0gZnVuY3Rpb24gKFxuICAgIGV4cE9yRm4sXG4gICAgY2IsXG4gICAgb3B0aW9uc1xuICApIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIGlmIChpc1BsYWluT2JqZWN0KGNiKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZVdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKVxuICAgIH1cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBvcHRpb25zLnVzZXIgPSB0cnVlO1xuICAgIHZhciB3YXRjaGVyID0gbmV3IFdhdGNoZXIodm0sIGV4cE9yRm4sIGNiLCBvcHRpb25zKTtcbiAgICBpZiAob3B0aW9ucy5pbW1lZGlhdGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNiLmNhbGwodm0sIHdhdGNoZXIudmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaGFuZGxlRXJyb3IoZXJyb3IsIHZtLCAoXCJjYWxsYmFjayBmb3IgaW1tZWRpYXRlIHdhdGNoZXIgXFxcIlwiICsgKHdhdGNoZXIuZXhwcmVzc2lvbikgKyBcIlxcXCJcIikpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gdW53YXRjaEZuICgpIHtcbiAgICAgIHdhdGNoZXIudGVhcmRvd24oKTtcbiAgICB9XG4gIH07XG59XG5cbi8qICAqL1xuXG52YXIgdWlkJDMgPSAwO1xuXG5mdW5jdGlvbiBpbml0TWl4aW4gKFZ1ZSkge1xuICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIC8vIGEgdWlkXG4gICAgdm0uX3VpZCA9IHVpZCQzKys7XG5cbiAgICB2YXIgc3RhcnRUYWcsIGVuZFRhZztcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgc3RhcnRUYWcgPSBcInZ1ZS1wZXJmLXN0YXJ0OlwiICsgKHZtLl91aWQpO1xuICAgICAgZW5kVGFnID0gXCJ2dWUtcGVyZi1lbmQ6XCIgKyAodm0uX3VpZCk7XG4gICAgICBtYXJrKHN0YXJ0VGFnKTtcbiAgICB9XG5cbiAgICAvLyBhIGZsYWcgdG8gYXZvaWQgdGhpcyBiZWluZyBvYnNlcnZlZFxuICAgIHZtLl9pc1Z1ZSA9IHRydWU7XG4gICAgLy8gbWVyZ2Ugb3B0aW9uc1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuX2lzQ29tcG9uZW50KSB7XG4gICAgICAvLyBvcHRpbWl6ZSBpbnRlcm5hbCBjb21wb25lbnQgaW5zdGFudGlhdGlvblxuICAgICAgLy8gc2luY2UgZHluYW1pYyBvcHRpb25zIG1lcmdpbmcgaXMgcHJldHR5IHNsb3csIGFuZCBub25lIG9mIHRoZVxuICAgICAgLy8gaW50ZXJuYWwgY29tcG9uZW50IG9wdGlvbnMgbmVlZHMgc3BlY2lhbCB0cmVhdG1lbnQuXG4gICAgICBpbml0SW50ZXJuYWxDb21wb25lbnQodm0sIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS4kb3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhcbiAgICAgICAgcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyh2bS5jb25zdHJ1Y3RvciksXG4gICAgICAgIG9wdGlvbnMgfHwge30sXG4gICAgICAgIHZtXG4gICAgICApO1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpbml0UHJveHkodm0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2bS5fcmVuZGVyUHJveHkgPSB2bTtcbiAgICB9XG4gICAgLy8gZXhwb3NlIHJlYWwgc2VsZlxuICAgIHZtLl9zZWxmID0gdm07XG4gICAgaW5pdExpZmVjeWNsZSh2bSk7XG4gICAgaW5pdEV2ZW50cyh2bSk7XG4gICAgaW5pdFJlbmRlcih2bSk7XG4gICAgY2FsbEhvb2sodm0sICdiZWZvcmVDcmVhdGUnKTtcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBpbml0SW5qZWN0aW9ucyh2bSk7IC8vIHJlc29sdmUgaW5qZWN0aW9ucyBiZWZvcmUgZGF0YS9wcm9wcyAgXG4gICAgaW5pdFN0YXRlKHZtKTtcbiAgICAhdm0uXyRmYWxsYmFjayAmJiBpbml0UHJvdmlkZSh2bSk7IC8vIHJlc29sdmUgcHJvdmlkZSBhZnRlciBkYXRhL3Byb3BzXG4gICAgIXZtLl8kZmFsbGJhY2sgJiYgY2FsbEhvb2sodm0sICdjcmVhdGVkJyk7ICAgICAgXG5cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBjb25maWcucGVyZm9ybWFuY2UgJiYgbWFyaykge1xuICAgICAgdm0uX25hbWUgPSBmb3JtYXRDb21wb25lbnROYW1lKHZtLCBmYWxzZSk7XG4gICAgICBtYXJrKGVuZFRhZyk7XG4gICAgICBtZWFzdXJlKChcInZ1ZSBcIiArICh2bS5fbmFtZSkgKyBcIiBpbml0XCIpLCBzdGFydFRhZywgZW5kVGFnKTtcbiAgICB9XG5cbiAgICBpZiAodm0uJG9wdGlvbnMuZWwpIHtcbiAgICAgIHZtLiRtb3VudCh2bS4kb3B0aW9ucy5lbCk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0SW50ZXJuYWxDb21wb25lbnQgKHZtLCBvcHRpb25zKSB7XG4gIHZhciBvcHRzID0gdm0uJG9wdGlvbnMgPSBPYmplY3QuY3JlYXRlKHZtLmNvbnN0cnVjdG9yLm9wdGlvbnMpO1xuICAvLyBkb2luZyB0aGlzIGJlY2F1c2UgaXQncyBmYXN0ZXIgdGhhbiBkeW5hbWljIGVudW1lcmF0aW9uLlxuICB2YXIgcGFyZW50Vm5vZGUgPSBvcHRpb25zLl9wYXJlbnRWbm9kZTtcbiAgb3B0cy5wYXJlbnQgPSBvcHRpb25zLnBhcmVudDtcbiAgb3B0cy5fcGFyZW50Vm5vZGUgPSBwYXJlbnRWbm9kZTtcblxuICB2YXIgdm5vZGVDb21wb25lbnRPcHRpb25zID0gcGFyZW50Vm5vZGUuY29tcG9uZW50T3B0aW9ucztcbiAgb3B0cy5wcm9wc0RhdGEgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMucHJvcHNEYXRhO1xuICBvcHRzLl9wYXJlbnRMaXN0ZW5lcnMgPSB2bm9kZUNvbXBvbmVudE9wdGlvbnMubGlzdGVuZXJzO1xuICBvcHRzLl9yZW5kZXJDaGlsZHJlbiA9IHZub2RlQ29tcG9uZW50T3B0aW9ucy5jaGlsZHJlbjtcbiAgb3B0cy5fY29tcG9uZW50VGFnID0gdm5vZGVDb21wb25lbnRPcHRpb25zLnRhZztcblxuICBpZiAob3B0aW9ucy5yZW5kZXIpIHtcbiAgICBvcHRzLnJlbmRlciA9IG9wdGlvbnMucmVuZGVyO1xuICAgIG9wdHMuc3RhdGljUmVuZGVyRm5zID0gb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucztcbiAgaWYgKEN0b3Iuc3VwZXIpIHtcbiAgICB2YXIgc3VwZXJPcHRpb25zID0gcmVzb2x2ZUNvbnN0cnVjdG9yT3B0aW9ucyhDdG9yLnN1cGVyKTtcbiAgICB2YXIgY2FjaGVkU3VwZXJPcHRpb25zID0gQ3Rvci5zdXBlck9wdGlvbnM7XG4gICAgaWYgKHN1cGVyT3B0aW9ucyAhPT0gY2FjaGVkU3VwZXJPcHRpb25zKSB7XG4gICAgICAvLyBzdXBlciBvcHRpb24gY2hhbmdlZCxcbiAgICAgIC8vIG5lZWQgdG8gcmVzb2x2ZSBuZXcgb3B0aW9ucy5cbiAgICAgIEN0b3Iuc3VwZXJPcHRpb25zID0gc3VwZXJPcHRpb25zO1xuICAgICAgLy8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBsYXRlLW1vZGlmaWVkL2F0dGFjaGVkIG9wdGlvbnMgKCM0OTc2KVxuICAgICAgdmFyIG1vZGlmaWVkT3B0aW9ucyA9IHJlc29sdmVNb2RpZmllZE9wdGlvbnMoQ3Rvcik7XG4gICAgICAvLyB1cGRhdGUgYmFzZSBleHRlbmQgb3B0aW9uc1xuICAgICAgaWYgKG1vZGlmaWVkT3B0aW9ucykge1xuICAgICAgICBleHRlbmQoQ3Rvci5leHRlbmRPcHRpb25zLCBtb2RpZmllZE9wdGlvbnMpO1xuICAgICAgfVxuICAgICAgb3B0aW9ucyA9IEN0b3Iub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyhzdXBlck9wdGlvbnMsIEN0b3IuZXh0ZW5kT3B0aW9ucyk7XG4gICAgICBpZiAob3B0aW9ucy5uYW1lKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tvcHRpb25zLm5hbWVdID0gQ3RvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG9wdGlvbnNcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZU1vZGlmaWVkT3B0aW9ucyAoQ3Rvcikge1xuICB2YXIgbW9kaWZpZWQ7XG4gIHZhciBsYXRlc3QgPSBDdG9yLm9wdGlvbnM7XG4gIHZhciBzZWFsZWQgPSBDdG9yLnNlYWxlZE9wdGlvbnM7XG4gIGZvciAodmFyIGtleSBpbiBsYXRlc3QpIHtcbiAgICBpZiAobGF0ZXN0W2tleV0gIT09IHNlYWxlZFtrZXldKSB7XG4gICAgICBpZiAoIW1vZGlmaWVkKSB7IG1vZGlmaWVkID0ge307IH1cbiAgICAgIG1vZGlmaWVkW2tleV0gPSBsYXRlc3Rba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1vZGlmaWVkXG59XG5cbmZ1bmN0aW9uIFZ1ZSAob3B0aW9ucykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICEodGhpcyBpbnN0YW5jZW9mIFZ1ZSlcbiAgKSB7XG4gICAgd2FybignVnVlIGlzIGEgY29uc3RydWN0b3IgYW5kIHNob3VsZCBiZSBjYWxsZWQgd2l0aCB0aGUgYG5ld2Aga2V5d29yZCcpO1xuICB9XG4gIHRoaXMuX2luaXQob3B0aW9ucyk7XG59XG5cbmluaXRNaXhpbihWdWUpO1xuc3RhdGVNaXhpbihWdWUpO1xuZXZlbnRzTWl4aW4oVnVlKTtcbmxpZmVjeWNsZU1peGluKFZ1ZSk7XG5yZW5kZXJNaXhpbihWdWUpO1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdFVzZSAoVnVlKSB7XG4gIFZ1ZS51c2UgPSBmdW5jdGlvbiAocGx1Z2luKSB7XG4gICAgdmFyIGluc3RhbGxlZFBsdWdpbnMgPSAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyB8fCAodGhpcy5faW5zdGFsbGVkUGx1Z2lucyA9IFtdKSk7XG4gICAgaWYgKGluc3RhbGxlZFBsdWdpbnMuaW5kZXhPZihwbHVnaW4pID4gLTEpIHtcbiAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLy8gYWRkaXRpb25hbCBwYXJhbWV0ZXJzXG4gICAgdmFyIGFyZ3MgPSB0b0FycmF5KGFyZ3VtZW50cywgMSk7XG4gICAgYXJncy51bnNoaWZ0KHRoaXMpO1xuICAgIGlmICh0eXBlb2YgcGx1Z2luLmluc3RhbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHBsdWdpbi5pbnN0YWxsLmFwcGx5KHBsdWdpbiwgYXJncyk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgcGx1Z2luID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwbHVnaW4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGluc3RhbGxlZFBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgIHJldHVybiB0aGlzXG4gIH07XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0TWl4aW4kMSAoVnVlKSB7XG4gIFZ1ZS5taXhpbiA9IGZ1bmN0aW9uIChtaXhpbikge1xuICAgIHRoaXMub3B0aW9ucyA9IG1lcmdlT3B0aW9ucyh0aGlzLm9wdGlvbnMsIG1peGluKTtcbiAgICByZXR1cm4gdGhpc1xuICB9O1xufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gaW5pdEV4dGVuZCAoVnVlKSB7XG4gIC8qKlxuICAgKiBFYWNoIGluc3RhbmNlIGNvbnN0cnVjdG9yLCBpbmNsdWRpbmcgVnVlLCBoYXMgYSB1bmlxdWVcbiAgICogY2lkLiBUaGlzIGVuYWJsZXMgdXMgdG8gY3JlYXRlIHdyYXBwZWQgXCJjaGlsZFxuICAgKiBjb25zdHJ1Y3RvcnNcIiBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZSBhbmQgY2FjaGUgdGhlbS5cbiAgICovXG4gIFZ1ZS5jaWQgPSAwO1xuICB2YXIgY2lkID0gMTtcblxuICAvKipcbiAgICogQ2xhc3MgaW5oZXJpdGFuY2VcbiAgICovXG4gIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbiAoZXh0ZW5kT3B0aW9ucykge1xuICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuICAgIHZhciBTdXBlciA9IHRoaXM7XG4gICAgdmFyIFN1cGVySWQgPSBTdXBlci5jaWQ7XG4gICAgdmFyIGNhY2hlZEN0b3JzID0gZXh0ZW5kT3B0aW9ucy5fQ3RvciB8fCAoZXh0ZW5kT3B0aW9ucy5fQ3RvciA9IHt9KTtcbiAgICBpZiAoY2FjaGVkQ3RvcnNbU3VwZXJJZF0pIHtcbiAgICAgIHJldHVybiBjYWNoZWRDdG9yc1tTdXBlcklkXVxuICAgIH1cblxuICAgIHZhciBuYW1lID0gZXh0ZW5kT3B0aW9ucy5uYW1lIHx8IFN1cGVyLm9wdGlvbnMubmFtZTtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiBuYW1lKSB7XG4gICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUobmFtZSk7XG4gICAgfVxuXG4gICAgdmFyIFN1YiA9IGZ1bmN0aW9uIFZ1ZUNvbXBvbmVudCAob3B0aW9ucykge1xuICAgICAgdGhpcy5faW5pdChvcHRpb25zKTtcbiAgICB9O1xuICAgIFN1Yi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFN1cGVyLnByb3RvdHlwZSk7XG4gICAgU3ViLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN1YjtcbiAgICBTdWIuY2lkID0gY2lkKys7XG4gICAgU3ViLm9wdGlvbnMgPSBtZXJnZU9wdGlvbnMoXG4gICAgICBTdXBlci5vcHRpb25zLFxuICAgICAgZXh0ZW5kT3B0aW9uc1xuICAgICk7XG4gICAgU3ViWydzdXBlciddID0gU3VwZXI7XG5cbiAgICAvLyBGb3IgcHJvcHMgYW5kIGNvbXB1dGVkIHByb3BlcnRpZXMsIHdlIGRlZmluZSB0aGUgcHJveHkgZ2V0dGVycyBvblxuICAgIC8vIHRoZSBWdWUgaW5zdGFuY2VzIGF0IGV4dGVuc2lvbiB0aW1lLCBvbiB0aGUgZXh0ZW5kZWQgcHJvdG90eXBlLiBUaGlzXG4gICAgLy8gYXZvaWRzIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBjYWxscyBmb3IgZWFjaCBpbnN0YW5jZSBjcmVhdGVkLlxuICAgIGlmIChTdWIub3B0aW9ucy5wcm9wcykge1xuICAgICAgaW5pdFByb3BzJDEoU3ViKTtcbiAgICB9XG4gICAgaWYgKFN1Yi5vcHRpb25zLmNvbXB1dGVkKSB7XG4gICAgICBpbml0Q29tcHV0ZWQkMShTdWIpO1xuICAgIH1cblxuICAgIC8vIGFsbG93IGZ1cnRoZXIgZXh0ZW5zaW9uL21peGluL3BsdWdpbiB1c2FnZVxuICAgIFN1Yi5leHRlbmQgPSBTdXBlci5leHRlbmQ7XG4gICAgU3ViLm1peGluID0gU3VwZXIubWl4aW47XG4gICAgU3ViLnVzZSA9IFN1cGVyLnVzZTtcblxuICAgIC8vIGNyZWF0ZSBhc3NldCByZWdpc3RlcnMsIHNvIGV4dGVuZGVkIGNsYXNzZXNcbiAgICAvLyBjYW4gaGF2ZSB0aGVpciBwcml2YXRlIGFzc2V0cyB0b28uXG4gICAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgU3ViW3R5cGVdID0gU3VwZXJbdHlwZV07XG4gICAgfSk7XG4gICAgLy8gZW5hYmxlIHJlY3Vyc2l2ZSBzZWxmLWxvb2t1cFxuICAgIGlmIChuYW1lKSB7XG4gICAgICBTdWIub3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gU3ViO1xuICAgIH1cblxuICAgIC8vIGtlZXAgYSByZWZlcmVuY2UgdG8gdGhlIHN1cGVyIG9wdGlvbnMgYXQgZXh0ZW5zaW9uIHRpbWUuXG4gICAgLy8gbGF0ZXIgYXQgaW5zdGFudGlhdGlvbiB3ZSBjYW4gY2hlY2sgaWYgU3VwZXIncyBvcHRpb25zIGhhdmVcbiAgICAvLyBiZWVuIHVwZGF0ZWQuXG4gICAgU3ViLnN1cGVyT3B0aW9ucyA9IFN1cGVyLm9wdGlvbnM7XG4gICAgU3ViLmV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zO1xuICAgIFN1Yi5zZWFsZWRPcHRpb25zID0gZXh0ZW5kKHt9LCBTdWIub3B0aW9ucyk7XG5cbiAgICAvLyBjYWNoZSBjb25zdHJ1Y3RvclxuICAgIGNhY2hlZEN0b3JzW1N1cGVySWRdID0gU3ViO1xuICAgIHJldHVybiBTdWJcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdFByb3BzJDEgKENvbXApIHtcbiAgdmFyIHByb3BzID0gQ29tcC5vcHRpb25zLnByb3BzO1xuICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICBwcm94eShDb21wLnByb3RvdHlwZSwgXCJfcHJvcHNcIiwga2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0Q29tcHV0ZWQkMSAoQ29tcCkge1xuICB2YXIgY29tcHV0ZWQgPSBDb21wLm9wdGlvbnMuY29tcHV0ZWQ7XG4gIGZvciAodmFyIGtleSBpbiBjb21wdXRlZCkge1xuICAgIGRlZmluZUNvbXB1dGVkKENvbXAucHJvdG90eXBlLCBrZXksIGNvbXB1dGVkW2tleV0pO1xuICB9XG59XG5cbi8qICAqL1xuXG5mdW5jdGlvbiBpbml0QXNzZXRSZWdpc3RlcnMgKFZ1ZSkge1xuICAvKipcbiAgICogQ3JlYXRlIGFzc2V0IHJlZ2lzdHJhdGlvbiBtZXRob2RzLlxuICAgKi9cbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZVt0eXBlXSA9IGZ1bmN0aW9uIChcbiAgICAgIGlkLFxuICAgICAgZGVmaW5pdGlvblxuICAgICkge1xuICAgICAgaWYgKCFkZWZpbml0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnNbdHlwZSArICdzJ11baWRdXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZSA9PT0gJ2NvbXBvbmVudCcpIHtcbiAgICAgICAgICB2YWxpZGF0ZUNvbXBvbmVudE5hbWUoaWQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnY29tcG9uZW50JyAmJiBpc1BsYWluT2JqZWN0KGRlZmluaXRpb24pKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbi5uYW1lID0gZGVmaW5pdGlvbi5uYW1lIHx8IGlkO1xuICAgICAgICAgIGRlZmluaXRpb24gPSB0aGlzLm9wdGlvbnMuX2Jhc2UuZXh0ZW5kKGRlZmluaXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnZGlyZWN0aXZlJyAmJiB0eXBlb2YgZGVmaW5pdGlvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRlZmluaXRpb24gPSB7IGJpbmQ6IGRlZmluaXRpb24sIHVwZGF0ZTogZGVmaW5pdGlvbiB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3B0aW9uc1t0eXBlICsgJ3MnXVtpZF0gPSBkZWZpbml0aW9uO1xuICAgICAgICByZXR1cm4gZGVmaW5pdGlvblxuICAgICAgfVxuICAgIH07XG4gIH0pO1xufVxuXG4vKiAgKi9cblxuXG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUgKG9wdHMpIHtcbiAgcmV0dXJuIG9wdHMgJiYgKG9wdHMuQ3Rvci5vcHRpb25zLm5hbWUgfHwgb3B0cy50YWcpXG59XG5cbmZ1bmN0aW9uIG1hdGNoZXMgKHBhdHRlcm4sIG5hbWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocGF0dGVybikpIHtcbiAgICByZXR1cm4gcGF0dGVybi5pbmRleE9mKG5hbWUpID4gLTFcbiAgfSBlbHNlIGlmICh0eXBlb2YgcGF0dGVybiA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGF0dGVybi5zcGxpdCgnLCcpLmluZGV4T2YobmFtZSkgPiAtMVxuICB9IGVsc2UgaWYgKGlzUmVnRXhwKHBhdHRlcm4pKSB7XG4gICAgcmV0dXJuIHBhdHRlcm4udGVzdChuYW1lKVxuICB9XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHJldHVybiBmYWxzZVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlIChrZWVwQWxpdmVJbnN0YW5jZSwgZmlsdGVyKSB7XG4gIHZhciBjYWNoZSA9IGtlZXBBbGl2ZUluc3RhbmNlLmNhY2hlO1xuICB2YXIga2V5cyA9IGtlZXBBbGl2ZUluc3RhbmNlLmtleXM7XG4gIHZhciBfdm5vZGUgPSBrZWVwQWxpdmVJbnN0YW5jZS5fdm5vZGU7XG4gIGZvciAodmFyIGtleSBpbiBjYWNoZSkge1xuICAgIHZhciBjYWNoZWROb2RlID0gY2FjaGVba2V5XTtcbiAgICBpZiAoY2FjaGVkTm9kZSkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKGNhY2hlZE5vZGUuY29tcG9uZW50T3B0aW9ucyk7XG4gICAgICBpZiAobmFtZSAmJiAhZmlsdGVyKG5hbWUpKSB7XG4gICAgICAgIHBydW5lQ2FjaGVFbnRyeShjYWNoZSwga2V5LCBrZXlzLCBfdm5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcnVuZUNhY2hlRW50cnkgKFxuICBjYWNoZSxcbiAga2V5LFxuICBrZXlzLFxuICBjdXJyZW50XG4pIHtcbiAgdmFyIGNhY2hlZCQkMSA9IGNhY2hlW2tleV07XG4gIGlmIChjYWNoZWQkJDEgJiYgKCFjdXJyZW50IHx8IGNhY2hlZCQkMS50YWcgIT09IGN1cnJlbnQudGFnKSkge1xuICAgIGNhY2hlZCQkMS5jb21wb25lbnRJbnN0YW5jZS4kZGVzdHJveSgpO1xuICB9XG4gIGNhY2hlW2tleV0gPSBudWxsO1xuICByZW1vdmUoa2V5cywga2V5KTtcbn1cblxudmFyIHBhdHRlcm5UeXBlcyA9IFtTdHJpbmcsIFJlZ0V4cCwgQXJyYXldO1xuXG52YXIgS2VlcEFsaXZlID0ge1xuICBuYW1lOiAna2VlcC1hbGl2ZScsXG4gIGFic3RyYWN0OiB0cnVlLFxuXG4gIHByb3BzOiB7XG4gICAgaW5jbHVkZTogcGF0dGVyblR5cGVzLFxuICAgIGV4Y2x1ZGU6IHBhdHRlcm5UeXBlcyxcbiAgICBtYXg6IFtTdHJpbmcsIE51bWJlcl1cbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkICgpIHtcbiAgICB0aGlzLmNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLmtleXMgPSBbXTtcbiAgfSxcblxuICBkZXN0cm95ZWQ6IGZ1bmN0aW9uIGRlc3Ryb3llZCAoKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHRoaXMuY2FjaGUpIHtcbiAgICAgIHBydW5lQ2FjaGVFbnRyeSh0aGlzLmNhY2hlLCBrZXksIHRoaXMua2V5cyk7XG4gICAgfVxuICB9LFxuXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQgKCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gICAgdGhpcy4kd2F0Y2goJ2luY2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIG1hdGNoZXModmFsLCBuYW1lKTsgfSk7XG4gICAgfSk7XG4gICAgdGhpcy4kd2F0Y2goJ2V4Y2x1ZGUnLCBmdW5jdGlvbiAodmFsKSB7XG4gICAgICBwcnVuZUNhY2hlKHRoaXMkMSwgZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuICFtYXRjaGVzKHZhbCwgbmFtZSk7IH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyICgpIHtcbiAgICB2YXIgc2xvdCA9IHRoaXMuJHNsb3RzLmRlZmF1bHQ7XG4gICAgdmFyIHZub2RlID0gZ2V0Rmlyc3RDb21wb25lbnRDaGlsZChzbG90KTtcbiAgICB2YXIgY29tcG9uZW50T3B0aW9ucyA9IHZub2RlICYmIHZub2RlLmNvbXBvbmVudE9wdGlvbnM7XG4gICAgaWYgKGNvbXBvbmVudE9wdGlvbnMpIHtcbiAgICAgIC8vIGNoZWNrIHBhdHRlcm5cbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShjb21wb25lbnRPcHRpb25zKTtcbiAgICAgIHZhciByZWYgPSB0aGlzO1xuICAgICAgdmFyIGluY2x1ZGUgPSByZWYuaW5jbHVkZTtcbiAgICAgIHZhciBleGNsdWRlID0gcmVmLmV4Y2x1ZGU7XG4gICAgICBpZiAoXG4gICAgICAgIC8vIG5vdCBpbmNsdWRlZFxuICAgICAgICAoaW5jbHVkZSAmJiAoIW5hbWUgfHwgIW1hdGNoZXMoaW5jbHVkZSwgbmFtZSkpKSB8fFxuICAgICAgICAvLyBleGNsdWRlZFxuICAgICAgICAoZXhjbHVkZSAmJiBuYW1lICYmIG1hdGNoZXMoZXhjbHVkZSwgbmFtZSkpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHZub2RlXG4gICAgICB9XG5cbiAgICAgIHZhciByZWYkMSA9IHRoaXM7XG4gICAgICB2YXIgY2FjaGUgPSByZWYkMS5jYWNoZTtcbiAgICAgIHZhciBrZXlzID0gcmVmJDEua2V5cztcbiAgICAgIHZhciBrZXkgPSB2bm9kZS5rZXkgPT0gbnVsbFxuICAgICAgICAvLyBzYW1lIGNvbnN0cnVjdG9yIG1heSBnZXQgcmVnaXN0ZXJlZCBhcyBkaWZmZXJlbnQgbG9jYWwgY29tcG9uZW50c1xuICAgICAgICAvLyBzbyBjaWQgYWxvbmUgaXMgbm90IGVub3VnaCAoIzMyNjkpXG4gICAgICAgID8gY29tcG9uZW50T3B0aW9ucy5DdG9yLmNpZCArIChjb21wb25lbnRPcHRpb25zLnRhZyA/IChcIjo6XCIgKyAoY29tcG9uZW50T3B0aW9ucy50YWcpKSA6ICcnKVxuICAgICAgICA6IHZub2RlLmtleTtcbiAgICAgIGlmIChjYWNoZVtrZXldKSB7XG4gICAgICAgIHZub2RlLmNvbXBvbmVudEluc3RhbmNlID0gY2FjaGVba2V5XS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgLy8gbWFrZSBjdXJyZW50IGtleSBmcmVzaGVzdFxuICAgICAgICByZW1vdmUoa2V5cywga2V5KTtcbiAgICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWNoZVtrZXldID0gdm5vZGU7XG4gICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAvLyBwcnVuZSBvbGRlc3QgZW50cnlcbiAgICAgICAgaWYgKHRoaXMubWF4ICYmIGtleXMubGVuZ3RoID4gcGFyc2VJbnQodGhpcy5tYXgpKSB7XG4gICAgICAgICAgcHJ1bmVDYWNoZUVudHJ5KGNhY2hlLCBrZXlzWzBdLCBrZXlzLCB0aGlzLl92bm9kZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdm5vZGUuZGF0YS5rZWVwQWxpdmUgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdm5vZGUgfHwgKHNsb3QgJiYgc2xvdFswXSlcbiAgfVxufTtcblxudmFyIGJ1aWx0SW5Db21wb25lbnRzID0ge1xuICBLZWVwQWxpdmU6IEtlZXBBbGl2ZVxufTtcblxuLyogICovXG5cbmZ1bmN0aW9uIGluaXRHbG9iYWxBUEkgKFZ1ZSkge1xuICAvLyBjb25maWdcbiAgdmFyIGNvbmZpZ0RlZiA9IHt9O1xuICBjb25maWdEZWYuZ2V0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29uZmlnOyB9O1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbmZpZ0RlZi5zZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB3YXJuKFxuICAgICAgICAnRG8gbm90IHJlcGxhY2UgdGhlIFZ1ZS5jb25maWcgb2JqZWN0LCBzZXQgaW5kaXZpZHVhbCBmaWVsZHMgaW5zdGVhZC4nXG4gICAgICApO1xuICAgIH07XG4gIH1cbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZSwgJ2NvbmZpZycsIGNvbmZpZ0RlZik7XG5cbiAgLy8gZXhwb3NlZCB1dGlsIG1ldGhvZHMuXG4gIC8vIE5PVEU6IHRoZXNlIGFyZSBub3QgY29uc2lkZXJlZCBwYXJ0IG9mIHRoZSBwdWJsaWMgQVBJIC0gYXZvaWQgcmVseWluZyBvblxuICAvLyB0aGVtIHVubGVzcyB5b3UgYXJlIGF3YXJlIG9mIHRoZSByaXNrLlxuICBWdWUudXRpbCA9IHtcbiAgICB3YXJuOiB3YXJuLFxuICAgIGV4dGVuZDogZXh0ZW5kLFxuICAgIG1lcmdlT3B0aW9uczogbWVyZ2VPcHRpb25zLFxuICAgIGRlZmluZVJlYWN0aXZlOiBkZWZpbmVSZWFjdGl2ZSQkMVxuICB9O1xuXG4gIFZ1ZS5zZXQgPSBzZXQ7XG4gIFZ1ZS5kZWxldGUgPSBkZWw7XG4gIFZ1ZS5uZXh0VGljayA9IG5leHRUaWNrO1xuXG4gIC8vIDIuNiBleHBsaWNpdCBvYnNlcnZhYmxlIEFQSVxuICBWdWUub2JzZXJ2YWJsZSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICBvYnNlcnZlKG9iaik7XG4gICAgcmV0dXJuIG9ialxuICB9O1xuXG4gIFZ1ZS5vcHRpb25zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgQVNTRVRfVFlQRVMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgIFZ1ZS5vcHRpb25zW3R5cGUgKyAncyddID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgfSk7XG5cbiAgLy8gdGhpcyBpcyB1c2VkIHRvIGlkZW50aWZ5IHRoZSBcImJhc2VcIiBjb25zdHJ1Y3RvciB0byBleHRlbmQgYWxsIHBsYWluLW9iamVjdFxuICAvLyBjb21wb25lbnRzIHdpdGggaW4gV2VleCdzIG11bHRpLWluc3RhbmNlIHNjZW5hcmlvcy5cbiAgVnVlLm9wdGlvbnMuX2Jhc2UgPSBWdWU7XG5cbiAgZXh0ZW5kKFZ1ZS5vcHRpb25zLmNvbXBvbmVudHMsIGJ1aWx0SW5Db21wb25lbnRzKTtcblxuICBpbml0VXNlKFZ1ZSk7XG4gIGluaXRNaXhpbiQxKFZ1ZSk7XG4gIGluaXRFeHRlbmQoVnVlKTtcbiAgaW5pdEFzc2V0UmVnaXN0ZXJzKFZ1ZSk7XG59XG5cbmluaXRHbG9iYWxBUEkoVnVlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZ1ZS5wcm90b3R5cGUsICckaXNTZXJ2ZXInLCB7XG4gIGdldDogaXNTZXJ2ZXJSZW5kZXJpbmdcbn0pO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLnByb3RvdHlwZSwgJyRzc3JDb250ZXh0Jywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCAoKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICByZXR1cm4gdGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dFxuICB9XG59KTtcblxuLy8gZXhwb3NlIEZ1bmN0aW9uYWxSZW5kZXJDb250ZXh0IGZvciBzc3IgcnVudGltZSBoZWxwZXIgaW5zdGFsbGF0aW9uXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoVnVlLCAnRnVuY3Rpb25hbFJlbmRlckNvbnRleHQnLCB7XG4gIHZhbHVlOiBGdW5jdGlvbmFsUmVuZGVyQ29udGV4dFxufSk7XG5cblZ1ZS52ZXJzaW9uID0gJzIuNi4xMSc7XG5cbi8qKlxuICogaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1RlbmNlbnQvd2VzdG9yZS9tYXN0ZXIvcGFja2FnZXMvd2VzdG9yZS91dGlscy9kaWZmLmpzXG4gKi9cbnZhciBBUlJBWVRZUEUgPSAnW29iamVjdCBBcnJheV0nO1xudmFyIE9CSkVDVFRZUEUgPSAnW29iamVjdCBPYmplY3RdJztcbi8vIGNvbnN0IEZVTkNUSU9OVFlQRSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSdcblxuZnVuY3Rpb24gZGlmZihjdXJyZW50LCBwcmUpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgc3luY0tleXMoY3VycmVudCwgcHJlKTtcbiAgICBfZGlmZihjdXJyZW50LCBwcmUsICcnLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gc3luY0tleXMoY3VycmVudCwgcHJlKSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IHByZSkgeyByZXR1cm4gfVxuICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgIHZhciByb290UHJlVHlwZSA9IHR5cGUocHJlKTtcbiAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUgJiYgcm9vdFByZVR5cGUgPT0gT0JKRUNUVFlQRSkge1xuICAgICAgICBpZihPYmplY3Qua2V5cyhjdXJyZW50KS5sZW5ndGggPj0gT2JqZWN0LmtleXMocHJlKS5sZW5ndGgpe1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHByZSkge1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBjdXJyZW50W2tleV07XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRba2V5XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFZhbHVlLCBwcmVba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChyb290Q3VycmVudFR5cGUgPT0gQVJSQVlUWVBFICYmIHJvb3RQcmVUeXBlID09IEFSUkFZVFlQRSkge1xuICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPj0gcHJlLmxlbmd0aCkge1xuICAgICAgICAgICAgcHJlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgc3luY0tleXMoY3VycmVudFtpbmRleF0sIGl0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIF9kaWZmKGN1cnJlbnQsIHByZSwgcGF0aCwgcmVzdWx0KSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IHByZSkgeyByZXR1cm4gfVxuICAgIHZhciByb290Q3VycmVudFR5cGUgPSB0eXBlKGN1cnJlbnQpO1xuICAgIHZhciByb290UHJlVHlwZSA9IHR5cGUocHJlKTtcbiAgICBpZiAocm9vdEN1cnJlbnRUeXBlID09IE9CSkVDVFRZUEUpIHtcbiAgICAgICAgaWYgKHJvb3RQcmVUeXBlICE9IE9CSkVDVFRZUEUgfHwgT2JqZWN0LmtleXMoY3VycmVudCkubGVuZ3RoIDwgT2JqZWN0LmtleXMocHJlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIHBhdGgsIGN1cnJlbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGxvb3AgPSBmdW5jdGlvbiAoIGtleSApIHtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gY3VycmVudFtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBwcmVWYWx1ZSA9IHByZVtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50VHlwZSA9IHR5cGUoY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgcHJlVHlwZSA9IHR5cGUocHJlVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50VHlwZSAhPSBBUlJBWVRZUEUgJiYgY3VycmVudFR5cGUgIT0gT0JKRUNUVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlICE9IHByZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VycmVudFR5cGUgPT0gQVJSQVlUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVUeXBlICE9IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlLmxlbmd0aCA8IHByZVZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFJlc3VsdChyZXN1bHQsIChwYXRoID09ICcnID8gJycgOiBwYXRoICsgXCIuXCIpICsga2V5LCBjdXJyZW50VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2RpZmYoaXRlbSwgcHJlVmFsdWVbaW5kZXhdLCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSArICdbJyArIGluZGV4ICsgJ10nLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VHlwZSA9PSBPQkpFQ1RUWVBFKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVUeXBlICE9IE9CSkVDVFRZUEUgfHwgT2JqZWN0LmtleXMoY3VycmVudFZhbHVlKS5sZW5ndGggPCBPYmplY3Qua2V5cyhwcmVWYWx1ZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRSZXN1bHQocmVzdWx0LCAocGF0aCA9PSAnJyA/ICcnIDogcGF0aCArIFwiLlwiKSArIGtleSwgY3VycmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHN1YktleSBpbiBjdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfZGlmZihjdXJyZW50VmFsdWVbc3ViS2V5XSwgcHJlVmFsdWVbc3ViS2V5XSwgKHBhdGggPT0gJycgPyAnJyA6IHBhdGggKyBcIi5cIikgKyBrZXkgKyAnLicgKyBzdWJLZXksIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gY3VycmVudCkgbG9vcCgga2V5ICk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHJvb3RDdXJyZW50VHlwZSA9PSBBUlJBWVRZUEUpIHtcbiAgICAgICAgaWYgKHJvb3RQcmVUeXBlICE9IEFSUkFZVFlQRSkge1xuICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudC5sZW5ndGggPCBwcmUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1cnJlbnQuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgX2RpZmYoaXRlbSwgcHJlW2luZGV4XSwgcGF0aCArICdbJyArIGluZGV4ICsgJ10nLCByZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2V0UmVzdWx0KHJlc3VsdCwgcGF0aCwgY3VycmVudCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzZXRSZXN1bHQocmVzdWx0LCBrLCB2KSB7XG4gICAgLy8gaWYgKHR5cGUodikgIT0gRlVOQ1RJT05UWVBFKSB7XG4gICAgICAgIHJlc3VsdFtrXSA9IHY7XG4gICAgLy8gfVxufVxuXG5mdW5jdGlvbiB0eXBlKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKVxufVxuXG4vKiAgKi9cblxuZnVuY3Rpb24gZmx1c2hDYWxsYmFja3MkMSh2bSkge1xuICAgIGlmICh2bS5fX25leHRfdGlja19jYWxsYmFja3MgJiYgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuVlVFX0FQUF9ERUJVRykge1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpmbHVzaENhbGxiYWNrc1snICsgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCArICddJyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvcGllcyA9IHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcy5zbGljZSgwKTtcbiAgICAgICAgdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzLmxlbmd0aCA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29waWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb3BpZXNbaV0oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzUmVuZGVyV2F0Y2hlcih2bSkge1xuICAgIHJldHVybiBxdWV1ZS5maW5kKGZ1bmN0aW9uICh3YXRjaGVyKSB7IHJldHVybiB2bS5fd2F0Y2hlciA9PT0gd2F0Y2hlcjsgfSlcbn1cblxuZnVuY3Rpb24gbmV4dFRpY2skMSh2bSwgY2IpIHtcbiAgICAvLzEubmV4dFRpY2sg5LmL5YmNIOW3siBzZXREYXRhIOS4lCBzZXREYXRhIOi/mOacquWbnuiwg+WujOaIkFxuICAgIC8vMi5uZXh0VGljayDkuYvliY3lrZjlnKggcmVuZGVyIHdhdGNoZXJcbiAgICBpZiAoIXZtLl9fbmV4dF90aWNrX3BlbmRpbmcgJiYgIWhhc1JlbmRlcldhdGNoZXIodm0pKSB7XG4gICAgICAgIGlmKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpe1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UgPSB2bS4kc2NvcGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnWycgKyAoK25ldyBEYXRlKSArICddWycgKyAobXBJbnN0YW5jZS5pcyB8fCBtcEluc3RhbmNlLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpuZXh0VnVlVGljaycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXh0VGljayhjYiwgdm0pXG4gICAgfWVsc2V7XG4gICAgICAgIGlmKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpe1xuICAgICAgICAgICAgdmFyIG1wSW5zdGFuY2UkMSA9IHZtLiRzY29wZTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbJyArICgrbmV3IERhdGUpICsgJ11bJyArIChtcEluc3RhbmNlJDEuaXMgfHwgbXBJbnN0YW5jZSQxLnJvdXRlKSArICddWycgKyB2bS5fdWlkICtcbiAgICAgICAgICAgICAgICAnXTpuZXh0TVBUaWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIF9yZXNvbHZlO1xuICAgIGlmICghdm0uX19uZXh0X3RpY2tfY2FsbGJhY2tzKSB7XG4gICAgICAgIHZtLl9fbmV4dF90aWNrX2NhbGxiYWNrcyA9IFtdO1xuICAgIH1cbiAgICB2bS5fX25leHRfdGlja19jYWxsYmFja3MucHVzaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYi5jYWxsKHZtKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlLCB2bSwgJ25leHRUaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoX3Jlc29sdmUpIHtcbiAgICAgICAgICAgIF9yZXNvbHZlKHZtKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vICRmbG93LWRpc2FibGUtbGluZVxuICAgIGlmICghY2IgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIGNsb25lV2l0aERhdGEodm0pIHtcbiAgLy8g56Gu5L+d5b2T5YmNIHZtIOaJgOacieaVsOaNruiiq+WQjOatpVxuICB2YXIgcmV0ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdmFyIGRhdGFLZXlzID0gW10uY29uY2F0KFxuICAgIE9iamVjdC5rZXlzKHZtLl9kYXRhIHx8IHt9KSxcbiAgICBPYmplY3Qua2V5cyh2bS5fY29tcHV0ZWRXYXRjaGVycyB8fCB7fSkpO1xuXG4gIGRhdGFLZXlzLnJlZHVjZShmdW5jdGlvbihyZXQsIGtleSkge1xuICAgIHJldFtrZXldID0gdm1ba2V5XTtcbiAgICByZXR1cm4gcmV0XG4gIH0sIHJldCk7XG5cbiAgLy8gdnVlLWNvbXBvc2l0aW9uLWFwaVxuICB2YXIgcmF3QmluZGluZ3MgPSB2bS5fX3NlY3JldF92ZmFfc3RhdGVfXyAmJiB2bS5fX3NlY3JldF92ZmFfc3RhdGVfXy5yYXdCaW5kaW5ncztcbiAgaWYgKHJhd0JpbmRpbmdzKSB7XG4gICAgT2JqZWN0LmtleXMocmF3QmluZGluZ3MpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmV0W2tleV0gPSB2bVtrZXldO1xuICAgIH0pO1xuICB9XG4gIFxuICAvL1RPRE8g6ZyA6KaB5oqK5peg55So5pWw5o2u5aSE55CG5o6J77yM5q+U5aaCIGxpc3Q9PmwwIOWImSBsaXN0IOmcgOimgeenu+mZpO+8jOWQpuWImeWkmuS8oOi+k+S4gOS7veaVsOaNrlxuICBPYmplY3QuYXNzaWduKHJldCwgdm0uJG1wLmRhdGEgfHwge30pO1xuICBpZiAoXG4gICAgQXJyYXkuaXNBcnJheSh2bS4kb3B0aW9ucy5iZWhhdmlvcnMpICYmXG4gICAgdm0uJG9wdGlvbnMuYmVoYXZpb3JzLmluZGV4T2YoJ3VuaTovL2Zvcm0tZmllbGQnKSAhPT0gLTFcbiAgKSB7IC8vZm9ybS1maWVsZFxuICAgIHJldFsnbmFtZSddID0gdm0ubmFtZTtcbiAgICByZXRbJ3ZhbHVlJ10gPSB2bS52YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJldCkpXG59XG5cbnZhciBwYXRjaCA9IGZ1bmN0aW9uKG9sZFZub2RlLCB2bm9kZSkge1xuICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodm5vZGUgPT09IG51bGwpIHsgLy9kZXN0cm95XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKHRoaXMubXBUeXBlID09PSAncGFnZScgfHwgdGhpcy5tcFR5cGUgPT09ICdjb21wb25lbnQnKSB7XG4gICAgdmFyIG1wSW5zdGFuY2UgPSB0aGlzLiRzY29wZTtcbiAgICB2YXIgZGF0YSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdHJ5IHtcbiAgICAgIGRhdGEgPSBjbG9uZVdpdGhEYXRhKHRoaXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICBkYXRhLl9fd2Vidmlld0lkX18gPSBtcEluc3RhbmNlLmRhdGEuX193ZWJ2aWV3SWRfXztcbiAgICB2YXIgbXBEYXRhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgLy/ku4XlkIzmraUgZGF0YSDkuK3mnInnmoTmlbDmja5cbiAgICAgIG1wRGF0YVtrZXldID0gbXBJbnN0YW5jZS5kYXRhW2tleV07XG4gICAgfSk7XG4gICAgdmFyIGRpZmZEYXRhID0gdGhpcy4kc2hvdWxkRGlmZkRhdGEgPT09IGZhbHNlID8gZGF0YSA6IGRpZmYoZGF0YSwgbXBEYXRhKTtcbiAgICBpZiAoT2JqZWN0LmtleXMoZGlmZkRhdGEpLmxlbmd0aCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52LlZVRV9BUFBfREVCVUcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1snICsgKCtuZXcgRGF0ZSkgKyAnXVsnICsgKG1wSW5zdGFuY2UuaXMgfHwgbXBJbnN0YW5jZS5yb3V0ZSkgKyAnXVsnICsgdGhpcy5fdWlkICtcbiAgICAgICAgICAnXeW3rumHj+abtOaWsCcsXG4gICAgICAgICAgSlNPTi5zdHJpbmdpZnkoZGlmZkRhdGEpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19uZXh0X3RpY2tfcGVuZGluZyA9IHRydWU7XG4gICAgICBtcEluc3RhbmNlLnNldERhdGEoZGlmZkRhdGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcyQxLl9fbmV4dF90aWNrX3BlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgZmx1c2hDYWxsYmFja3MkMSh0aGlzJDEpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsdXNoQ2FsbGJhY2tzJDEodGhpcyk7XG4gICAgfVxuICB9XG59O1xuXG4vKiAgKi9cblxuZnVuY3Rpb24gY3JlYXRlRW1wdHlSZW5kZXIoKSB7XG5cbn1cblxuZnVuY3Rpb24gbW91bnRDb21wb25lbnQkMShcbiAgdm0sXG4gIGVsLFxuICBoeWRyYXRpbmdcbikge1xuICBpZiAoIXZtLm1wVHlwZSkgey8vbWFpbi5qcyDkuK3nmoQgbmV3IFZ1ZVxuICAgIHJldHVybiB2bVxuICB9XG4gIGlmICh2bS5tcFR5cGUgPT09ICdhcHAnKSB7XG4gICAgdm0uJG9wdGlvbnMucmVuZGVyID0gY3JlYXRlRW1wdHlSZW5kZXI7XG4gIH1cbiAgaWYgKCF2bS4kb3B0aW9ucy5yZW5kZXIpIHtcbiAgICB2bS4kb3B0aW9ucy5yZW5kZXIgPSBjcmVhdGVFbXB0eVJlbmRlcjtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgICBpZiAoKHZtLiRvcHRpb25zLnRlbXBsYXRlICYmIHZtLiRvcHRpb25zLnRlbXBsYXRlLmNoYXJBdCgwKSAhPT0gJyMnKSB8fFxuICAgICAgICB2bS4kb3B0aW9ucy5lbCB8fCBlbCkge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdZb3UgYXJlIHVzaW5nIHRoZSBydW50aW1lLW9ubHkgYnVpbGQgb2YgVnVlIHdoZXJlIHRoZSB0ZW1wbGF0ZSAnICtcbiAgICAgICAgICAnY29tcGlsZXIgaXMgbm90IGF2YWlsYWJsZS4gRWl0aGVyIHByZS1jb21waWxlIHRoZSB0ZW1wbGF0ZXMgaW50byAnICtcbiAgICAgICAgICAncmVuZGVyIGZ1bmN0aW9ucywgb3IgdXNlIHRoZSBjb21waWxlci1pbmNsdWRlZCBidWlsZC4nLFxuICAgICAgICAgIHZtXG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXJuKFxuICAgICAgICAgICdGYWlsZWQgdG8gbW91bnQgY29tcG9uZW50OiB0ZW1wbGF0ZSBvciByZW5kZXIgZnVuY3Rpb24gbm90IGRlZmluZWQuJyxcbiAgICAgICAgICB2bVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgIXZtLl8kZmFsbGJhY2sgJiYgY2FsbEhvb2sodm0sICdiZWZvcmVNb3VudCcpO1xuXG4gIHZhciB1cGRhdGVDb21wb25lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdm0uX3VwZGF0ZSh2bS5fcmVuZGVyKCksIGh5ZHJhdGluZyk7XG4gIH07XG5cbiAgLy8gd2Ugc2V0IHRoaXMgdG8gdm0uX3dhdGNoZXIgaW5zaWRlIHRoZSB3YXRjaGVyJ3MgY29uc3RydWN0b3JcbiAgLy8gc2luY2UgdGhlIHdhdGNoZXIncyBpbml0aWFsIHBhdGNoIG1heSBjYWxsICRmb3JjZVVwZGF0ZSAoZS5nLiBpbnNpZGUgY2hpbGRcbiAgLy8gY29tcG9uZW50J3MgbW91bnRlZCBob29rKSwgd2hpY2ggcmVsaWVzIG9uIHZtLl93YXRjaGVyIGJlaW5nIGFscmVhZHkgZGVmaW5lZFxuICBuZXcgV2F0Y2hlcih2bSwgdXBkYXRlQ29tcG9uZW50LCBub29wLCB7XG4gICAgYmVmb3JlOiBmdW5jdGlvbiBiZWZvcmUoKSB7XG4gICAgICBpZiAodm0uX2lzTW91bnRlZCAmJiAhdm0uX2lzRGVzdHJveWVkKSB7XG4gICAgICAgIGNhbGxIb29rKHZtLCAnYmVmb3JlVXBkYXRlJyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB0cnVlIC8qIGlzUmVuZGVyV2F0Y2hlciAqLyk7XG4gIGh5ZHJhdGluZyA9IGZhbHNlO1xuICByZXR1cm4gdm1cbn1cblxuLyogICovXG5cbmZ1bmN0aW9uIHJlbmRlckNsYXNzIChcbiAgc3RhdGljQ2xhc3MsXG4gIGR5bmFtaWNDbGFzc1xuKSB7XG4gIGlmIChpc0RlZihzdGF0aWNDbGFzcykgfHwgaXNEZWYoZHluYW1pY0NsYXNzKSkge1xuICAgIHJldHVybiBjb25jYXQoc3RhdGljQ2xhc3MsIHN0cmluZ2lmeUNsYXNzKGR5bmFtaWNDbGFzcykpXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIGNvbmNhdCAoYSwgYikge1xuICByZXR1cm4gYSA/IGIgPyAoYSArICcgJyArIGIpIDogYSA6IChiIHx8ICcnKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlDbGFzcyAodmFsdWUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeUFycmF5KHZhbHVlKVxuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gc3RyaW5naWZ5T2JqZWN0KHZhbHVlKVxuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgcmV0dXJuICcnXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeUFycmF5ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIHZhciBzdHJpbmdpZmllZDtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSB2YWx1ZS5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBpZiAoaXNEZWYoc3RyaW5naWZpZWQgPSBzdHJpbmdpZnlDbGFzcyh2YWx1ZVtpXSkpICYmIHN0cmluZ2lmaWVkICE9PSAnJykge1xuICAgICAgaWYgKHJlcykgeyByZXMgKz0gJyAnOyB9XG4gICAgICByZXMgKz0gc3RyaW5naWZpZWQ7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5T2JqZWN0ICh2YWx1ZSkge1xuICB2YXIgcmVzID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZVtrZXldKSB7XG4gICAgICBpZiAocmVzKSB7IHJlcyArPSAnICc7IH1cbiAgICAgIHJlcyArPSBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyogICovXG5cbnZhciBwYXJzZVN0eWxlVGV4dCA9IGNhY2hlZChmdW5jdGlvbiAoY3NzVGV4dCkge1xuICB2YXIgcmVzID0ge307XG4gIHZhciBsaXN0RGVsaW1pdGVyID0gLzsoPyFbXihdKlxcKSkvZztcbiAgdmFyIHByb3BlcnR5RGVsaW1pdGVyID0gLzooLispLztcbiAgY3NzVGV4dC5zcGxpdChsaXN0RGVsaW1pdGVyKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHZhciB0bXAgPSBpdGVtLnNwbGl0KHByb3BlcnR5RGVsaW1pdGVyKTtcbiAgICAgIHRtcC5sZW5ndGggPiAxICYmIChyZXNbdG1wWzBdLnRyaW0oKV0gPSB0bXBbMV0udHJpbSgpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxuLy8gbm9ybWFsaXplIHBvc3NpYmxlIGFycmF5IC8gc3RyaW5nIHZhbHVlcyBpbnRvIE9iamVjdFxuZnVuY3Rpb24gbm9ybWFsaXplU3R5bGVCaW5kaW5nIChiaW5kaW5nU3R5bGUpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYmluZGluZ1N0eWxlKSkge1xuICAgIHJldHVybiB0b09iamVjdChiaW5kaW5nU3R5bGUpXG4gIH1cbiAgaWYgKHR5cGVvZiBiaW5kaW5nU3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlU3R5bGVUZXh0KGJpbmRpbmdTdHlsZSlcbiAgfVxuICByZXR1cm4gYmluZGluZ1N0eWxlXG59XG5cbi8qICAqL1xuXG52YXIgTVBfTUVUSE9EUyA9IFsnY3JlYXRlU2VsZWN0b3JRdWVyeScsICdjcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcicsICdzZWxlY3RBbGxDb21wb25lbnRzJywgJ3NlbGVjdENvbXBvbmVudCddO1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQob2JqLCBwYXRoKSB7XG4gIHZhciBwYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcbiAgdmFyIGtleSA9IHBhcnRzWzBdO1xuICBpZiAoa2V5LmluZGV4T2YoJ19fJG4nKSA9PT0gMCkgeyAvL251bWJlciBpbmRleFxuICAgIGtleSA9IHBhcnNlSW50KGtleS5yZXBsYWNlKCdfXyRuJywgJycpKTtcbiAgfVxuICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG9ialtrZXldXG4gIH1cbiAgcmV0dXJuIGdldFRhcmdldChvYmpba2V5XSwgcGFydHMuc2xpY2UoMSkuam9pbignLicpKVxufVxuXG5mdW5jdGlvbiBpbnRlcm5hbE1peGluKFZ1ZSkge1xuXG4gIFZ1ZS5jb25maWcuZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24oZXJyLCB2bSwgaW5mbykge1xuICAgIFZ1ZS51dGlsLndhcm4oKFwiRXJyb3IgaW4gXCIgKyBpbmZvICsgXCI6IFxcXCJcIiArIChlcnIudG9TdHJpbmcoKSkgKyBcIlxcXCJcIiksIHZtKTtcbiAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICB2YXIgYXBwID0gZ2V0QXBwKCk7XG4gICAgaWYgKGFwcCAmJiBhcHAub25FcnJvcikge1xuICAgICAgYXBwLm9uRXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIG9sZEVtaXQgPSBWdWUucHJvdG90eXBlLiRlbWl0O1xuXG4gIFZ1ZS5wcm90b3R5cGUuJGVtaXQgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLiRzY29wZSAmJiBldmVudCkge1xuICAgICAgdGhpcy4kc2NvcGVbJ3RyaWdnZXJFdmVudCddKGV2ZW50LCB7XG4gICAgICAgIF9fYXJnc19fOiB0b0FycmF5KGFyZ3VtZW50cywgMSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb2xkRW1pdC5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gIH07XG5cbiAgVnVlLnByb3RvdHlwZS4kbmV4dFRpY2sgPSBmdW5jdGlvbihmbikge1xuICAgIHJldHVybiBuZXh0VGljayQxKHRoaXMsIGZuKVxuICB9O1xuXG4gIE1QX01FVEhPRFMuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgVnVlLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJncykge1xuICAgICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlW21ldGhvZF0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlW21ldGhvZF0oYXJncylcbiAgICAgIH1cbiAgICAgIC8vIG1wLWFsaXBheVxuICAgICAgaWYgKHR5cGVvZiBteSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAobWV0aG9kID09PSAnY3JlYXRlU2VsZWN0b3JRdWVyeScpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgICAgICAgcmV0dXJuIG15LmNyZWF0ZVNlbGVjdG9yUXVlcnkoYXJncylcbiAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSAnY3JlYXRlSW50ZXJzZWN0aW9uT2JzZXJ2ZXInKSB7XG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4gICAgICAgIHJldHVybiBteS5jcmVhdGVJbnRlcnNlY3Rpb25PYnNlcnZlcihhcmdzKVxuICAgICAgfVxuICAgICAgLy8gVE9ETyBtcC1hbGlwYXkg5pqC5LiN5pSv5oyBIHNlbGVjdEFsbENvbXBvbmVudHMsc2VsZWN0Q29tcG9uZW50XG4gICAgfTtcbiAgfSk7XG5cbiAgVnVlLnByb3RvdHlwZS5fX2luaXRfcHJvdmlkZSA9IGluaXRQcm92aWRlO1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19pbml0X2luamVjdGlvbnMgPSBpbml0SW5qZWN0aW9ucztcblxuICBWdWUucHJvdG90eXBlLl9fY2FsbF9ob29rID0gZnVuY3Rpb24oaG9vaywgYXJncykge1xuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgLy8gIzc1NzMgZGlzYWJsZSBkZXAgY29sbGVjdGlvbiB3aGVuIGludm9raW5nIGxpZmVjeWNsZSBob29rc1xuICAgIHB1c2hUYXJnZXQoKTtcbiAgICB2YXIgaGFuZGxlcnMgPSB2bS4kb3B0aW9uc1tob29rXTtcbiAgICB2YXIgaW5mbyA9IGhvb2sgKyBcIiBob29rXCI7XG4gICAgdmFyIHJldDtcbiAgICBpZiAoaGFuZGxlcnMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgIHJldCA9IGludm9rZVdpdGhFcnJvckhhbmRsaW5nKGhhbmRsZXJzW2ldLCB2bSwgYXJncyA/IFthcmdzXSA6IG51bGwsIHZtLCBpbmZvKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHZtLl9oYXNIb29rRXZlbnQpIHtcbiAgICAgIHZtLiRlbWl0KCdob29rOicgKyBob29rLCBhcmdzKTtcbiAgICB9XG4gICAgcG9wVGFyZ2V0KCk7XG4gICAgcmV0dXJuIHJldFxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19zZXRfbW9kZWwgPSBmdW5jdGlvbih0YXJnZXQsIGtleSwgdmFsdWUsIG1vZGlmaWVycykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG1vZGlmaWVycykpIHtcbiAgICAgIGlmIChtb2RpZmllcnMuaW5kZXhPZigndHJpbScpICE9PSAtMSkge1xuICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcbiAgICAgIH1cbiAgICAgIGlmIChtb2RpZmllcnMuaW5kZXhPZignbnVtYmVyJykgIT09IC0xKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5fbih2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0YXJnZXQgPSB0aGlzO1xuICAgIH1cbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19zZXRfc3luYyA9IGZ1bmN0aW9uKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0YXJnZXQgPSB0aGlzO1xuICAgIH1cbiAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfb3JpZyA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoaXNQbGFpbk9iamVjdChpdGVtKSkge1xuICAgICAgcmV0dXJuIGl0ZW1bJyRvcmlnJ10gfHwgaXRlbVxuICAgIH1cbiAgICByZXR1cm4gaXRlbVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfdmFsdWUgPSBmdW5jdGlvbihkYXRhUGF0aCwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIGdldFRhcmdldCh0YXJnZXQgfHwgdGhpcywgZGF0YVBhdGgpXG4gIH07XG5cblxuICBWdWUucHJvdG90eXBlLl9fZ2V0X2NsYXNzID0gZnVuY3Rpb24oZHluYW1pY0NsYXNzLCBzdGF0aWNDbGFzcykge1xuICAgIHJldHVybiByZW5kZXJDbGFzcyhzdGF0aWNDbGFzcywgZHluYW1pY0NsYXNzKVxuICB9O1xuXG4gIFZ1ZS5wcm90b3R5cGUuX19nZXRfc3R5bGUgPSBmdW5jdGlvbihkeW5hbWljU3R5bGUsIHN0YXRpY1N0eWxlKSB7XG4gICAgaWYgKCFkeW5hbWljU3R5bGUgJiYgIXN0YXRpY1N0eWxlKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgdmFyIGR5bmFtaWNTdHlsZU9iaiA9IG5vcm1hbGl6ZVN0eWxlQmluZGluZyhkeW5hbWljU3R5bGUpO1xuICAgIHZhciBzdHlsZU9iaiA9IHN0YXRpY1N0eWxlID8gZXh0ZW5kKHN0YXRpY1N0eWxlLCBkeW5hbWljU3R5bGVPYmopIDogZHluYW1pY1N0eWxlT2JqO1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzdHlsZU9iaikubWFwKGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiAoKGh5cGhlbmF0ZShuYW1lKSkgKyBcIjpcIiArIChzdHlsZU9ialtuYW1lXSkpOyB9KS5qb2luKCc7JylcbiAgfTtcblxuICBWdWUucHJvdG90eXBlLl9fbWFwID0gZnVuY3Rpb24odmFsLCBpdGVyYXRlZSkge1xuICAgIC8vVE9ETyDmmoLkuI3ogIPomZEgc3RyaW5nXG4gICAgdmFyIHJldCwgaSwgbCwga2V5cywga2V5O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgIHJldCA9IG5ldyBBcnJheSh2YWwubGVuZ3RoKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWwubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHJldFtpXSA9IGl0ZXJhdGVlKHZhbFtpXSwgaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0XG4gICAgfSBlbHNlIGlmIChpc09iamVjdCh2YWwpKSB7XG4gICAgICBrZXlzID0gT2JqZWN0LmtleXModmFsKTtcbiAgICAgIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBmb3IgKGkgPSAwLCBsID0ga2V5cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgcmV0W2tleV0gPSBpdGVyYXRlZSh2YWxba2V5XSwga2V5LCBpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXRcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdudW1iZXInKSB7XG4gICAgICByZXQgPSBuZXcgQXJyYXkodmFsKTtcbiAgICAgIGZvciAoaSA9IDAsIGwgPSB2YWw7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgLy8g56ys5LiA5Liq5Y+C5pWw5pqC5pe25LuN5ZKM5bCP56iL5bqP5LiA6Ie0XG4gICAgICAgIHJldFtpXSA9IGl0ZXJhdGVlKGksIGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldFxuICAgIH1cbiAgICByZXR1cm4gW11cbiAgfTtcblxufVxuXG4vKiAgKi9cblxudmFyIExJRkVDWUNMRV9IT09LUyQxID0gW1xuICAgIC8vQXBwXG4gICAgJ29uTGF1bmNoJyxcbiAgICAnb25TaG93JyxcbiAgICAnb25IaWRlJyxcbiAgICAnb25VbmlOVmlld01lc3NhZ2UnLFxuICAgICdvblBhZ2VOb3RGb3VuZCcsXG4gICAgJ29uVGhlbWVDaGFuZ2UnLFxuICAgICdvbkVycm9yJyxcbiAgICAnb25VbmhhbmRsZWRSZWplY3Rpb24nLFxuICAgIC8vUGFnZVxuICAgICdvbkxvYWQnLFxuICAgIC8vICdvblNob3cnLFxuICAgICdvblJlYWR5JyxcbiAgICAvLyAnb25IaWRlJyxcbiAgICAnb25VbmxvYWQnLFxuICAgICdvblB1bGxEb3duUmVmcmVzaCcsXG4gICAgJ29uUmVhY2hCb3R0b20nLFxuICAgICdvblRhYkl0ZW1UYXAnLFxuICAgICdvbkFkZFRvRmF2b3JpdGVzJyxcbiAgICAnb25TaGFyZVRpbWVsaW5lJyxcbiAgICAnb25TaGFyZUFwcE1lc3NhZ2UnLFxuICAgICdvblJlc2l6ZScsXG4gICAgJ29uUGFnZVNjcm9sbCcsXG4gICAgJ29uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCcsXG4gICAgJ29uQmFja1ByZXNzJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJyxcbiAgICAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnLFxuICAgICdvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQnLFxuICAgIC8vQ29tcG9uZW50XG4gICAgLy8gJ29uUmVhZHknLCAvLyDlhbzlrrnml6fniYjmnKzvvIzlupTor6Xnp7vpmaTor6Xkuovku7ZcbiAgICAnb25QYWdlU2hvdycsXG4gICAgJ29uUGFnZUhpZGUnLFxuICAgICdvblBhZ2VSZXNpemUnXG5dO1xuZnVuY3Rpb24gbGlmZWN5Y2xlTWl4aW4kMShWdWUpIHtcblxuICAgIC8vZml4ZWQgdnVlLWNsYXNzLWNvbXBvbmVudFxuICAgIHZhciBvbGRFeHRlbmQgPSBWdWUuZXh0ZW5kO1xuICAgIFZ1ZS5leHRlbmQgPSBmdW5jdGlvbihleHRlbmRPcHRpb25zKSB7XG4gICAgICAgIGV4dGVuZE9wdGlvbnMgPSBleHRlbmRPcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciBtZXRob2RzID0gZXh0ZW5kT3B0aW9ucy5tZXRob2RzO1xuICAgICAgICBpZiAobWV0aG9kcykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmIChMSUZFQ1lDTEVfSE9PS1MkMS5pbmRleE9mKG1ldGhvZE5hbWUpIT09LTEpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ZW5kT3B0aW9uc1ttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBtZXRob2RzW21ldGhvZE5hbWVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9sZEV4dGVuZC5jYWxsKHRoaXMsIGV4dGVuZE9wdGlvbnMpXG4gICAgfTtcblxuICAgIHZhciBzdHJhdGVnaWVzID0gVnVlLmNvbmZpZy5vcHRpb25NZXJnZVN0cmF0ZWdpZXM7XG4gICAgdmFyIG1lcmdlSG9vayA9IHN0cmF0ZWdpZXMuY3JlYXRlZDtcbiAgICBMSUZFQ1lDTEVfSE9PS1MkMS5mb3JFYWNoKGZ1bmN0aW9uIChob29rKSB7XG4gICAgICAgIHN0cmF0ZWdpZXNbaG9va10gPSBtZXJnZUhvb2s7XG4gICAgfSk7XG5cbiAgICBWdWUucHJvdG90eXBlLl9fbGlmZWN5Y2xlX2hvb2tzX18gPSBMSUZFQ1lDTEVfSE9PS1MkMTtcbn1cblxuLyogICovXG5cbi8vIGluc3RhbGwgcGxhdGZvcm0gcGF0Y2ggZnVuY3Rpb25cblZ1ZS5wcm90b3R5cGUuX19wYXRjaF9fID0gcGF0Y2g7XG5cbi8vIHB1YmxpYyBtb3VudCBtZXRob2RcblZ1ZS5wcm90b3R5cGUuJG1vdW50ID0gZnVuY3Rpb24oXG4gICAgZWwgLFxuICAgIGh5ZHJhdGluZyBcbikge1xuICAgIHJldHVybiBtb3VudENvbXBvbmVudCQxKHRoaXMsIGVsLCBoeWRyYXRpbmcpXG59O1xuXG5saWZlY3ljbGVNaXhpbiQxKFZ1ZSk7XG5pbnRlcm5hbE1peGluKFZ1ZSk7XG5cbi8qICAqL1xuXG5leHBvcnQgZGVmYXVsdCBWdWU7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSwgLyogdnVlLWNsaSBvbmx5ICovXG4gIGNvbXBvbmVudHMsIC8vIGZpeGVkIGJ5IHh4eHh4eCBhdXRvIGNvbXBvbmVudHNcbiAgcmVuZGVyanMgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgaWYgKCFvcHRpb25zLmNvbXBvbmVudHMpIHtcbiAgICAgIG9wdGlvbnMuY29tcG9uZW50cyA9IHt9XG4gICAgfVxuICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICAgZm9yICh2YXIgbmFtZSBpbiBjb21wb25lbnRzKSB7XG4gICAgICBpZiAoaGFzT3duLmNhbGwoY29tcG9uZW50cywgbmFtZSkgJiYgIWhhc093bi5jYWxsKG9wdGlvbnMuY29tcG9uZW50cywgbmFtZSkpIHtcbiAgICAgICAgb3B0aW9ucy5jb21wb25lbnRzW25hbWVdID0gY29tcG9uZW50c1tuYW1lXVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBmaXhlZCBieSB4eHh4eHggcmVuZGVyanNcbiAgaWYgKHJlbmRlcmpzKSB7XG4gICAgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSB8fCAocmVuZGVyanMuYmVmb3JlQ3JlYXRlID0gW10pKS51bnNoaWZ0KGZ1bmN0aW9uKCkge1xuICAgICAgdGhpc1tyZW5kZXJqcy5fX21vZHVsZV0gPSB0aGlzXG4gICAgfSk7XG4gICAgKG9wdGlvbnMubWl4aW5zIHx8IChvcHRpb25zLm1peGlucyA9IFtdKSkucHVzaChyZW5kZXJqcylcbiAgfVxuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==