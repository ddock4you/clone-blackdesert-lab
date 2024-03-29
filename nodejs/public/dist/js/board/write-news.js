"use strict";

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _getIterator = require("@babel/runtime-corejs3/core-js/get-iterator");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _entries = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/entries"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof _Symbol === "undefined" || _getIteratorMethod(o) == null) { if (_Array$isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = _getIterator(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { var _context; if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = _sliceInstanceProperty(_context = Object.prototype.toString.call(o)).call(_context, 8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return _Array$from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var form = document.querySelector("[name=news-write]");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  var _e$target = e.target,
      title = _e$target.title,
      subtitle = _e$target.subtitle,
      category = _e$target.category,
      thumnail = _e$target.thumnail,
      content = _e$target.content;
  var editorData = editor.getData();
  console.log(editorData);

  if (!title.value) {
    alert("제목을 입력해주세요.");
    title.focus();
    return;
  }

  if (!subtitle.value) {
    alert("설명을 입력해주세요.");
    subtitle.focus();
    return;
  }

  if (!category.value) {
    alert("카테고리를 선택해주세요.");
    category.focus();
    return;
  }

  if (!editorData) {
    alert("내용을 입력해주세요.");
    content.focus();
    return;
  }

  var formData = new FormData(form);

  var _iterator = _createForOfIteratorHelper((0, _entries.default)(formData).call(formData)),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var pair = _step.value;
      console.log(pair[1]);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  axios.post("/board/news-write", formData).then(function (res) {
    console.log(res);

    var alertCallback = function alertCallback(callback) {
      alert("작성완료 되었습니다.");
      callback();
    };

    if (res.data.newsWrite) {
      alertCallback(function () {
        location.href = "/board/list";
      });
    }
  }).catch(function (err) {
    console.error(err);
  });
});