/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/config.js":
/*!**********************!*\
  !*** ./js/config.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   validateConfig: () => (/* binding */ validateConfig)\n/* harmony export */ });\n// Конфигурация для Telegram бота\nvar config = {\n  TELEGRAM_BOT_TOKEN: \"7170520598:AAFa0QFBwij-utYadvj7M5mG9nIWqlt3KA8\" || 0,\n  TELEGRAM_CHAT_ID: \"-1002416019847\" || 0\n};\n\n// Функция для проверки наличия всех необходимых параметров\nfunction validateConfig() {\n  var requiredParams = ['TELEGRAM_BOT_TOKEN', 'TELEGRAM_CHAT_ID'];\n  var missingParams = requiredParams.filter(function (param) {\n    return !config[param];\n  });\n  if (missingParams.length > 0) {\n    throw new Error(\"\\u041E\\u0442\\u0441\\u0443\\u0442\\u0441\\u0442\\u0432\\u0443\\u044E\\u0442 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u044B\\u0435 \\u043F\\u0430\\u0440\\u0430\\u043C\\u0435\\u0442\\u0440\\u044B: \".concat(missingParams.join(', ')));\n  }\n  return true;\n}\n\n//# sourceURL=webpack://wi-fi-radars/./js/config.js?");

/***/ }),

/***/ "./js/form-steps.js":
/*!**************************!*\
  !*** ./js/form-steps.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./js/config.js\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = \"function\" == typeof Symbol ? Symbol : {}, a = i.iterator || \"@@iterator\", c = i.asyncIterator || \"@@asyncIterator\", u = i.toStringTag || \"@@toStringTag\"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, \"\"); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, \"_invoke\", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: \"normal\", arg: t.call(e, r) }; } catch (t) { return { type: \"throw\", arg: t }; } } e.wrap = wrap; var h = \"suspendedStart\", l = \"suspendedYield\", f = \"executing\", s = \"completed\", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { [\"next\", \"throw\", \"return\"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if (\"throw\" !== c.type) { var u = c.arg, h = u.value; return h && \"object\" == _typeof(h) && n.call(h, \"__await\") ? e.resolve(h.__await).then(function (t) { invoke(\"next\", t, i, a); }, function (t) { invoke(\"throw\", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke(\"throw\", t, i, a); }); } a(c.arg); } var r; o(this, \"_invoke\", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error(\"Generator is already running\"); if (o === s) { if (\"throw\" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if (\"next\" === n.method) n.sent = n._sent = n.arg;else if (\"throw\" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else \"return\" === n.method && n.abrupt(\"return\", n.arg); o = f; var p = tryCatch(e, r, n); if (\"normal\" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } \"throw\" === p.type && (o = s, n.method = \"throw\", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, \"throw\" === n && e.iterator[\"return\"] && (r.method = \"return\", r.arg = t, maybeInvokeDelegate(e, r), \"throw\" === r.method) || \"return\" !== n && (r.method = \"throw\", r.arg = new TypeError(\"The iterator does not provide a '\" + n + \"' method\")), y; var i = tryCatch(o, e.iterator, r.arg); if (\"throw\" === i.type) return r.method = \"throw\", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, \"return\" !== r.method && (r.method = \"next\", r.arg = t), r.delegate = null, y) : a : (r.method = \"throw\", r.arg = new TypeError(\"iterator result is not an object\"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = \"normal\", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: \"root\" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || \"\" === e) { var r = e[a]; if (r) return r.call(e); if (\"function\" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, \"GeneratorFunction\"), e.isGeneratorFunction = function (t) { var e = \"function\" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || \"GeneratorFunction\" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, \"GeneratorFunction\")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, \"Generator\"), define(g, a, function () { return this; }), define(g, \"toString\", function () { return \"[object Generator]\"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) \"t\" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if (\"throw\" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = \"throw\", a.arg = e, r.next = n, o && (r.method = \"next\", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if (\"root\" === i.tryLoc) return handle(\"end\"); if (i.tryLoc <= this.prev) { var c = n.call(i, \"catchLoc\"), u = n.call(i, \"finallyLoc\"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error(\"try statement without catch or finally\"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, \"finallyLoc\") && this.prev < o.finallyLoc) { var i = o; break; } } i && (\"break\" === t || \"continue\" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = \"next\", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if (\"throw\" === t.type) throw t.arg; return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, \"catch\": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if (\"throw\" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, \"next\" === this.method && (this.arg = t), y; } }, e; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }\nfunction _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n); } _next(void 0); }); }; }\n\n\n// Функция для отправки данных в Telegram\nfunction sendToTelegram(_x) {\n  return _sendToTelegram.apply(this, arguments);\n}\nfunction _sendToTelegram() {\n  _sendToTelegram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(data) {\n    var TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, message, requestData, response, result;\n    return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          _context3.prev = 0;\n          (0,_config_js__WEBPACK_IMPORTED_MODULE_0__.validateConfig)();\n          _context3.next = 8;\n          break;\n        case 4:\n          _context3.prev = 4;\n          _context3.t0 = _context3[\"catch\"](0);\n          console.error('Ошибка конфигурации:', _context3.t0);\n          throw new Error('Ошибка конфигурации системы. Пожалуйста, обратитесь к администратору.');\n        case 8:\n          TELEGRAM_BOT_TOKEN = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID = _config_js__WEBPACK_IMPORTED_MODULE_0__.config.TELEGRAM_CHAT_ID;\n          console.log('Подготовка данных для отправки:', data);\n\n          // Форматируем сообщение\n          message = \"\\n\\uD83C\\uDFAF \\u041D\\u043E\\u0432\\u0430\\u044F \\u0437\\u0430\\u044F\\u0432\\u043A\\u0430 \\u0441 \\u043A\\u0432\\u0438\\u0437\\u0430!\\n\\n\\uD83C\\uDFE2 \\u0422\\u0438\\u043F \\u0431\\u0438\\u0437\\u043D\\u0435\\u0441\\u0430: \".concat(data.business_type || 'Не указано', \"\\n\\uD83C\\uDFAF \\u0421\\u0444\\u0435\\u0440\\u0430: \").concat(data.business_sphere || 'Не указано', \"\\n\\uD83D\\uDCCD \\u041B\\u043E\\u043A\\u0430\\u0446\\u0438\\u0438: \").concat(data.locations || 'Не указано', \"\\n\\uD83D\\uDCB0 \\u0421\\u0440\\u0435\\u0434\\u043D\\u0438\\u0439 \\u0447\\u0435\\u043A: \").concat(data.average_check || 'Не указано', \"\\n\\n\\uD83D\\uDC64 \\u0418\\u043C\\u044F: \").concat(data.name || 'Не указано', \"\\n\\uD83D\\uDCF1 \\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D: \").concat(data.phone || 'Не указано', \"\\n\\n\\uD83D\\uDCC5 \\u0414\\u0430\\u0442\\u0430 \\u0437\\u0430\\u044F\\u0432\\u043A\\u0438: \").concat(new Date().toLocaleString('ru-RU'), \"\\n    \").trim();\n          console.log('Подготовленное сообщение:', message);\n          requestData = {\n            chat_id: TELEGRAM_CHAT_ID,\n            text: message\n          };\n          console.log('Отправляем запрос:', {\n            url: \"https://api.telegram.org/bot\".concat(TELEGRAM_BOT_TOKEN, \"/sendMessage\"),\n            data: requestData\n          });\n          _context3.prev = 14;\n          _context3.next = 17;\n          return fetch(\"https://api.telegram.org/bot\".concat(TELEGRAM_BOT_TOKEN, \"/sendMessage\"), {\n            method: 'POST',\n            headers: {\n              'Content-Type': 'application/json'\n            },\n            body: JSON.stringify(requestData)\n          });\n        case 17:\n          response = _context3.sent;\n          console.log('Получен ответ от сервера:', {\n            status: response.status,\n            statusText: response.statusText\n          });\n          _context3.next = 21;\n          return response.json();\n        case 21:\n          result = _context3.sent;\n          console.log('Тело ответа:', result);\n          if (response.ok) {\n            _context3.next = 25;\n            break;\n          }\n          throw new Error(result.description || 'Ошибка отправки сообщения в Telegram');\n        case 25:\n          return _context3.abrupt(\"return\", true);\n        case 28:\n          _context3.prev = 28;\n          _context3.t1 = _context3[\"catch\"](14);\n          console.error('Детали ошибки:', {\n            name: _context3.t1.name,\n            message: _context3.t1.message,\n            stack: _context3.t1.stack\n          });\n          throw new Error('Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз.');\n        case 32:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3, null, [[0, 4], [14, 28]]);\n  }));\n  return _sendToTelegram.apply(this, arguments);\n}\nvar StepForm = /*#__PURE__*/function () {\n  function StepForm() {\n    _classCallCheck(this, StepForm);\n    this.currentStep = 1;\n    this.totalSteps = 5;\n    this.formData = {};\n    this.initStartButton();\n  }\n  return _createClass(StepForm, [{\n    key: \"initStartButton\",\n    value: function initStartButton() {\n      var _this = this;\n      var startButton = document.querySelector('.start-quiz-button');\n      var quizStart = document.querySelector('.quiz-start');\n      var quizForm = document.querySelector('.quiz');\n      if (startButton && quizStart && quizForm) {\n        startButton.addEventListener('click', function () {\n          quizStart.style.display = 'none';\n          quizForm.style.display = 'block';\n          _this.init();\n\n          // Плавное появление формы\n          setTimeout(function () {\n            quizForm.style.opacity = '1';\n          }, 50);\n        });\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      this.slides = document.querySelectorAll('.quiz-slide');\n      this.progressBar = document.querySelector('.progress-bar');\n      this.currentStepElement = document.querySelector('.current-step');\n      this.initStepIndicators();\n      this.initOptionCards();\n      this.initNavigationButtons();\n      this.initFormInputs();\n\n      // Показываем первый слайд\n      this.showSlide(1);\n      this.updateProgress();\n    }\n  }, {\n    key: \"initStepIndicators\",\n    value: function initStepIndicators() {\n      this.currentStepElement.textContent = this.currentStep;\n      document.querySelector('.total-steps').textContent = this.totalSteps;\n    }\n  }, {\n    key: \"initOptionCards\",\n    value: function initOptionCards() {\n      var _this2 = this;\n      var radioButtons = document.querySelectorAll('input[type=\"radio\"]');\n      radioButtons.forEach(function (radio) {\n        radio.addEventListener('change', function () {\n          _this2.formData[radio.name] = radio.value;\n          _this2.updateNextButton();\n        });\n      });\n    }\n  }, {\n    key: \"initNavigationButtons\",\n    value: function initNavigationButtons() {\n      var _this3 = this;\n      var nextButtons = document.querySelectorAll('.next');\n      var backButtons = document.querySelectorAll('.back');\n      nextButtons.forEach(function (button) {\n        button.addEventListener('click', function () {\n          return _this3.goToNextStep();\n        });\n      });\n      backButtons.forEach(function (button) {\n        button.addEventListener('click', function () {\n          return _this3.goToPreviousStep();\n        });\n      });\n    }\n  }, {\n    key: \"initFormInputs\",\n    value: function initFormInputs() {\n      var _this4 = this;\n      var form = document.querySelector('.quiz-form');\n      if (form) {\n        form.addEventListener('submit', /*#__PURE__*/function () {\n          var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {\n            return _regeneratorRuntime().wrap(function _callee$(_context) {\n              while (1) switch (_context.prev = _context.next) {\n                case 0:\n                  e.preventDefault();\n                  _context.next = 3;\n                  return _this4.submitForm(e);\n                case 3:\n                case \"end\":\n                  return _context.stop();\n              }\n            }, _callee);\n          }));\n          return function (_x2) {\n            return _ref.apply(this, arguments);\n          };\n        }());\n        var requiredInputs = form.querySelectorAll('input[required]');\n        requiredInputs.forEach(function (input) {\n          input.addEventListener('input', function () {\n            _this4.formData[input.name] = input.value;\n            _this4.updateSubmitButton();\n          });\n        });\n      }\n    }\n  }, {\n    key: \"showSlide\",\n    value: function showSlide(step) {\n      this.slides.forEach(function (slide) {\n        slide.style.display = 'none';\n        slide.classList.remove('active');\n      });\n      var currentSlide = document.querySelector(\"[data-step=\\\"\".concat(step, \"\\\"]\"));\n      if (currentSlide) {\n        currentSlide.style.display = 'block';\n        setTimeout(function () {\n          currentSlide.classList.add('active');\n        }, 50);\n      }\n    }\n  }, {\n    key: \"updateProgress\",\n    value: function updateProgress() {\n      var progress = this.currentStep / this.totalSteps * 100;\n      this.progressBar.style.width = \"\".concat(progress, \"%\");\n      this.currentStepElement.textContent = this.currentStep;\n    }\n  }, {\n    key: \"updateNextButton\",\n    value: function updateNextButton() {\n      var currentSlide = document.querySelector(\"[data-step=\\\"\".concat(this.currentStep, \"\\\"]\"));\n      var nextButton = currentSlide.querySelector('.next');\n      var radioButtons = currentSlide.querySelectorAll('input[type=\"radio\"]');\n      var isAnyChecked = Array.from(radioButtons).some(function (radio) {\n        return radio.checked;\n      });\n      if (nextButton) {\n        nextButton.disabled = !isAnyChecked;\n      }\n    }\n  }, {\n    key: \"updateSubmitButton\",\n    value: function updateSubmitButton() {\n      var form = document.querySelector('.quiz-form');\n      var submitButton = form.querySelector('button[type=\"submit\"]');\n      var requiredInputs = form.querySelectorAll('input[required]');\n      var isAllFilled = Array.from(requiredInputs).every(function (input) {\n        return input.value.trim() !== '';\n      });\n      var agreement = form.querySelector('input[name=\"agreement\"]');\n      if (submitButton) {\n        submitButton.disabled = !isAllFilled || !agreement.checked;\n      }\n    }\n  }, {\n    key: \"goToNextStep\",\n    value: function goToNextStep() {\n      if (this.currentStep < this.totalSteps) {\n        this.currentStep++;\n        this.showSlide(this.currentStep);\n        this.updateProgress();\n      }\n    }\n  }, {\n    key: \"goToPreviousStep\",\n    value: function goToPreviousStep() {\n      if (this.currentStep > 1) {\n        this.currentStep--;\n        this.showSlide(this.currentStep);\n        this.updateProgress();\n      }\n    }\n  }, {\n    key: \"submitForm\",\n    value: function () {\n      var _submitForm = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {\n        var form, submitButton, formWrapper, formData, finalData, errorMessage;\n        return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n          while (1) switch (_context2.prev = _context2.next) {\n            case 0:\n              form = e.target;\n              submitButton = form.querySelector('button[type=\"submit\"]');\n              formWrapper = document.querySelector('.quiz');\n              _context2.prev = 3;\n              submitButton.disabled = true;\n              submitButton.textContent = 'Отправка...';\n\n              // Собираем все данные формы\n              formData = new FormData(form);\n              console.log('Данные из FormData:', Object.fromEntries(formData));\n              console.log('Сохраненные данные в this.formData:', this.formData);\n              finalData = _objectSpread(_objectSpread({}, this.formData), {}, {\n                name: formData.get('name'),\n                phone: formData.get('phone')\n              });\n              console.log('Итоговые данные для отправки:', finalData);\n\n              // Отправляем данные в Telegram\n              _context2.next = 13;\n              return sendToTelegram(finalData);\n            case 13:\n              // Показываем сообщение об успехе\n              formWrapper.innerHTML = \"\\n                <div class=\\\"success-message\\\" style=\\\"text-align: center; padding: 40px;\\\">\\n                    <h3 style=\\\"color: #4CAF50; margin-bottom: 20px;\\\">\\u0421\\u043F\\u0430\\u0441\\u0438\\u0431\\u043E \\u0437\\u0430 \\u0432\\u0430\\u0448\\u0443 \\u0437\\u0430\\u044F\\u0432\\u043A\\u0443!</h3>\\n                    <p style=\\\"margin-bottom: 20px;\\\">\\u041C\\u044B \\u0441\\u0432\\u044F\\u0436\\u0435\\u043C\\u0441\\u044F \\u0441 \\u0432\\u0430\\u043C\\u0438 \\u0432 \\u0431\\u043B\\u0438\\u0436\\u0430\\u0439\\u0448\\u0435\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F.</p>\\n                    <button onclick=\\\"location.reload()\\\" class=\\\"blue-button\\\" style=\\\"padding: 10px 20px;\\\">\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C\\u0441\\u044F \\u043A \\u043D\\u0430\\u0447\\u0430\\u043B\\u0443</button>\\n                </div>\\n            \";\n              _context2.next = 29;\n              break;\n            case 16:\n              _context2.prev = 16;\n              _context2.t0 = _context2[\"catch\"](3);\n              console.error('Ошибка при отправке формы:', _context2.t0);\n\n              // Показываем сообщение об ошибке\n              errorMessage = document.createElement('div');\n              errorMessage.className = 'error-message';\n              errorMessage.style.color = '#f44336';\n              errorMessage.style.padding = '10px';\n              errorMessage.style.marginTop = '10px';\n              errorMessage.style.borderRadius = '4px';\n              errorMessage.style.backgroundColor = '#ffebee';\n              errorMessage.textContent = _context2.t0.message;\n\n              // Вставляем сообщение об ошибке после кнопки отправки\n              submitButton.parentNode.insertBefore(errorMessage, submitButton.nextSibling);\n\n              // Удаляем сообщение об ошибке через 5 секунд\n              setTimeout(function () {\n                errorMessage.remove();\n              }, 5000);\n            case 29:\n              _context2.prev = 29;\n              submitButton.disabled = false;\n              submitButton.textContent = 'Отправить';\n              return _context2.finish(29);\n            case 33:\n            case \"end\":\n              return _context2.stop();\n          }\n        }, _callee2, this, [[3, 16, 29, 33]]);\n      }));\n      function submitForm(_x3) {\n        return _submitForm.apply(this, arguments);\n      }\n      return submitForm;\n    }()\n  }, {\n    key: \"resetForm\",\n    value: function resetForm() {\n      // Сбрасываем данные\n      this.formData = {};\n\n      // Очищаем все radio buttons\n      var radioButtons = document.querySelectorAll('input[type=\"radio\"]');\n      radioButtons.forEach(function (radio) {\n        radio.checked = false;\n      });\n\n      // Сбрасываем форму\n      var form = document.querySelector('.quiz-form');\n      if (form) {\n        form.reset();\n      }\n\n      // Возвращаемся к первому шагу\n      this.currentStep = 1;\n      this.showSlide(1);\n      this.updateProgress();\n    }\n  }]);\n}(); // Инициализация формы при загрузке страницы\ndocument.addEventListener('DOMContentLoaded', function () {\n  new StepForm();\n});\n\n//# sourceURL=webpack://wi-fi-radars/./js/form-steps.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/form-steps.js");
/******/ 	
/******/ })()
;