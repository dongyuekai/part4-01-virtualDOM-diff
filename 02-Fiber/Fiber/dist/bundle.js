/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./react */ "./src/react/index.js");
// 利用Fiber算法实现将jsx对象 转换成真实dom 显示在页面中

var root = document.getElementById("root"); // jsx对象
// const jsx = (
//   <div>
//     <p>Hello React</p>
//     <p>Hi React</p>
//   </div>
// )
// render(jsx, root)
// 类组件
// class Greating extends Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         {this.props.name}
//         123344443
//       </div>
//     )
//   }
// }
// render(<Greating name='dyk'/>, root)
// 函数组件
// function FnComponent(props) {
//   return (
//     <div>
//       {props.title}
//       FnComponent
//     </div>
//   )
// }
// render(<FnComponent title="hello" />, root)
// 实现更新节点

var jsx = /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Hello React"), /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Hi Fiber"));
Object(_react__WEBPACK_IMPORTED_MODULE_0__["render"])(jsx, root);
setTimeout(function () {
  var jsx = /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("div", null, "Hello React -- \u5965\u5229\u7ED9"), /*#__PURE__*/_react__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", null, "Hi Fiber"));
  Object(_react__WEBPACK_IMPORTED_MODULE_0__["render"])(jsx, root);
}, 2000);

/***/ }),

/***/ "./src/react/Arrified/index.js":
/*!*************************************!*\
  !*** ./src/react/Arrified/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var arrified = function arrified(arg) {
  return Array.isArray(arg) ? arg : [arg];
};

/* harmony default export */ __webpack_exports__["default"] = (arrified);

/***/ }),

/***/ "./src/react/Component/index.js":
/*!**************************************!*\
  !*** ./src/react/Component/index.js ***!
  \**************************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function Component(props) {
  _classCallCheck(this, Component);

  this.props = props;
};

/***/ }),

/***/ "./src/react/CreateElement/index.js":
/*!******************************************!*\
  !*** ./src/react/CreateElement/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createElement; });
// createElement方法将当前jsx对象返回virtualDOM对象
function createElement(type, props) {
  var _ref;

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  var childElements = (_ref = []).concat.apply(_ref, children).reduce(function (result, child) {
    if (child !== false && child !== true && child !== null) {
      if (child instanceof Object) {
        result.push(child);
      } else {
        result.push(createElement("text", {
          textContent: child
        }));
      }
    }

    return result;
  }, []);

  return {
    type: type,
    props: Object.assign({
      children: childElements
    }, props)
  };
}

/***/ }),

/***/ "./src/react/DOM/createDOMElement.js":
/*!*******************************************!*\
  !*** ./src/react/DOM/createDOMElement.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createDOMElement; });
/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateNodeElement */ "./src/react/DOM/updateNodeElement.js");
// 创建DOM元素

function createDOMElement(virtualDOM) {
  var newElement = null;

  if (virtualDOM.type === "text") {
    // 文本节点
    newElement = document.createTextNode(virtualDOM.props.textContent);
  } else {
    // 元素节点
    newElement = document.createElement(virtualDOM.type);
    Object(_updateNodeElement__WEBPACK_IMPORTED_MODULE_0__["default"])(newElement, virtualDOM);
  }

  return newElement;
}

/***/ }),

/***/ "./src/react/DOM/index.js":
/*!********************************!*\
  !*** ./src/react/DOM/index.js ***!
  \********************************/
/*! exports provided: createDOMElement, updateNodeElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createDOMElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDOMElement */ "./src/react/DOM/createDOMElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createDOMElement", function() { return _createDOMElement__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _updateNodeElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateNodeElement */ "./src/react/DOM/updateNodeElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateNodeElement", function() { return _updateNodeElement__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./src/react/DOM/updateNodeElement.js":
/*!********************************************!*\
  !*** ./src/react/DOM/updateNodeElement.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updateNodeElement; });
// 给元素添加属性
// 设置属性 更新属性
// 真实DOM元素
function updateNodeElement(newElement, virtualDOM) // 设置属性的时候本参数不存在 更新属性才传这个参数
{
  var oldVirtualDOM = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  // 获取节点对应的属性对象
  var newProps = virtualDOM.props;
  var oldProps = oldVirtualDOM.props || {};

  if (virtualDOM.type === 'text') {
    if (newProps.textContent !== oldProps.textContent) {
      if (virtualDOM.parent.type !== oldVirtualDOM.parent.type) {
        // 如果父级节点类型不同
        virtualDOM.parent.stateNode.appendChild(document.createTextNode(newProps.textContent));
      } else {
        // 如果父级节点类型相同
        virtualDOM.parent.stateNode.replaceChild(document.createTextNode(newProps.textContent), oldVirtualDOM.stateNode);
      }
    }

    return;
  } // 属性设置或更新操作


  Object.keys(newProps).forEach(function (propName) {
    // 获取属性值
    var newPropsValue = newProps[propName];
    var oldPropsValue = oldProps[propName];

    if (newPropsValue !== oldPropsValue) {
      // 判断属性是否是事件属性 onClick 等等
      if (propName.slice(0, 2) === 'on') {
        // 事件名称
        var eventName = propName.toLowerCase().slice(2); // 为元素添加事件

        newElement.addEventListener(eventName, newPropsValue); // 删除原有的事件处理函数

        if (oldPropsValue) {
          newElement.removeEventListener(eventName, oldPropsValue);
        }
      } else if (propName === 'value' || propName === 'checked') {
        newElement[propName] = newPropsValue;
      } else if (propName !== 'children') {
        if (propName === 'className') {
          newElement.setAttribute('class', newPropsValue);
        } else {
          newElement.setAttribute(propName, newPropsValue);
        }
      }
    }
  }); // 判断属性被删除的情况

  Object.keys(oldProps).forEach(function (propName) {
    var newPropsValue = newProps[propName];
    var oldPropsValue = oldProps[propName];

    if (!newPropsValue) {
      // 如果属性被删除了
      if (propName.slice(0, 2) === 'on') {
        var eventName = propName.toLowerCase().slice(2);
        newElement.removeEventListener(eventName, oldPropsValue);
      } else if (propName !== 'children') {
        newElement.removeAttribute(propName);
      }
    }
  });
}

/***/ }),

/***/ "./src/react/Misc/CreateTaskQueue/index.js":
/*!*************************************************!*\
  !*** ./src/react/Misc/CreateTaskQueue/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var createTeskQueue = function createTeskQueue() {
  var taskQueue = [];
  return {
    // 先进先出
    push: function push(item) {
      return taskQueue.push(item);
    },
    pop: function pop() {
      return taskQueue.shift();
    },
    // 判断任务队列中是否还有任务
    isEmpty: function isEmpty() {
      return taskQueue.length === 0;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (createTeskQueue);

/***/ }),

/***/ "./src/react/Misc/createReactInstance/index.js":
/*!*****************************************************!*\
  !*** ./src/react/Misc/createReactInstance/index.js ***!
  \*****************************************************/
/*! exports provided: createReactInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactInstance", function() { return createReactInstance; });
var createReactInstance = function createReactInstance(fiber) {
  var instance = null;

  if (fiber.tag == 'class_component') {
    // 如果是类组件 那么fiber.type就是组件的构造函数
    instance = new fiber.type(fiber.props);
  } else {
    instance = fiber.type;
  }

  return instance;
};

/***/ }),

/***/ "./src/react/Misc/createStateNode.js/index.js":
/*!****************************************************!*\
  !*** ./src/react/Misc/createStateNode.js/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM */ "./src/react/DOM/index.js");
/* harmony import */ var _createReactInstance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createReactInstance */ "./src/react/Misc/createReactInstance/index.js");



var createStateNode = function createStateNode(fiber) {
  if (fiber.tag === 'host_component') {
    return Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["createDOMElement"])(fiber);
  } else {
    return Object(_createReactInstance__WEBPACK_IMPORTED_MODULE_1__["createReactInstance"])(fiber);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (createStateNode);

/***/ }),

/***/ "./src/react/Misc/getTag/index.js":
/*!****************************************!*\
  !*** ./src/react/Misc/getTag/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Component */ "./src/react/Component/index.js");


var getTag = function getTag(vdom) {
  if (typeof vdom.type === 'string') {
    // 普通jsx
    return 'host_component';
  } else if (Object.getPrototypeOf(vdom.type) === _Component__WEBPACK_IMPORTED_MODULE_0__["Component"]) {
    // 类组件
    return 'class_component';
  } else {
    // 函数组件
    return 'function_component';
  }
};

/* harmony default export */ __webpack_exports__["default"] = (getTag);

/***/ }),

/***/ "./src/react/Misc/index.js":
/*!*********************************!*\
  !*** ./src/react/Misc/index.js ***!
  \*********************************/
/*! exports provided: createTaskQueue, arrified, createStateNode, getTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateTaskQueue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateTaskQueue */ "./src/react/Misc/CreateTaskQueue/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTaskQueue", function() { return _CreateTaskQueue__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Arrified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Arrified */ "./src/react/Arrified/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "arrified", function() { return _Arrified__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createStateNode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStateNode.js */ "./src/react/Misc/createStateNode.js/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStateNode", function() { return _createStateNode_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _getTag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getTag */ "./src/react/Misc/getTag/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTag", function() { return _getTag__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./src/react/index.js":
/*!****************************!*\
  !*** ./src/react/index.js ***!
  \****************************/
/*! exports provided: render, Component, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateElement */ "./src/react/CreateElement/index.js");
/* harmony import */ var _reconciliation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reconciliation */ "./src/react/reconciliation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _reconciliation__WEBPACK_IMPORTED_MODULE_1__["render"]; });

/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component */ "./src/react/Component/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _Component__WEBPACK_IMPORTED_MODULE_2__["Component"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  createElement: _CreateElement__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/react/reconciliation/index.js":
/*!*******************************************!*\
  !*** ./src/react/reconciliation/index.js ***!
  \*******************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM */ "./src/react/DOM/index.js");
/* harmony import */ var _Misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Misc */ "./src/react/Misc/index.js");

 // 任务队列

var taskQueue = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["createTaskQueue"])(); // 要执行的子任务

var subTask = null; // 等待提交

var pendingCommit = null; // 参数fiber就是最终的
// commitAllWork实现dom操作

var commitAllWork = function commitAllWork(fiber) {
  // console.log(fiber)
  fiber.effects.forEach(function (item) {
    // 追加操作
    if (item.effectTag === 'placement') {
      var _fiber = item;
      var parentFiber = item.parent; // 如果是类组件或者函数组件 就把 parentFiber 赋值为 parentFiber.parent

      while (parentFiber.tag === 'class_component' || parentFiber.tag === 'function_component') {
        parentFiber = parentFiber.parent;
      } // 最终要进行普通节点渲染


      if (_fiber.tag === 'host_component') {
        parentFiber.stateNode.appendChild(_fiber.stateNode);
      }
    } // 跟新操作


    if (item.effectTag === 'update') {
      if (item.type === item.alternate.type) {
        // 节点类型相同
        Object(_DOM__WEBPACK_IMPORTED_MODULE_0__["updateNodeElement"])(item.stateNode, item, item.alternate);
      } else {
        // 节点类型不同 直接替换
        item.parent.stateNode.replaceChild(item.stateNode, item.alternate.stateNode);
      }
    }
  }); // 备份旧的fiber节点对象

  fiber.stateNode.__rootFiberContainer = fiber;
}; // 构建根节点的Fiber对象


var getFirstTask = function getFirstTask() {
  // 从任务队列中获取第一个子任务
  var task = taskQueue.pop(); // console.log('firstTask---', task)
  // 返回最外层节点的fiber对象

  return {
    props: task.props,
    stateNode: task.dom,
    tag: 'host_root',
    effects: [],
    child: null,
    alternate: task.dom.__rootFiberContainer
  };
}; // 构建子节点


var reconcileChildren = function reconcileChildren(fiber, children) {
  // children可能是对象 也可能是数组
  // 需要将children转换成数组
  // console.log('before--', children)
  var arrifiedChildren = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["arrified"])(children); // console.log('after---', arrifiedChildren)

  var index = 0;
  var numberOfElements = arrifiedChildren.length;
  var element = null;
  var newFiber = null; // 上一个兄弟fiber对象

  var prevFiber = null;
  var alternate = null;

  if (fiber.alternate && fiber.alternate.child) {
    alternate = fiber.alternate.child;
  }

  while (index < numberOfElements) {
    // 子级 virtualDOM 对象
    element = arrifiedChildren[index];

    if (element && alternate) {
      // 更新操作
      newFiber = {
        type: element.type,
        props: element.props,
        tag: Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["getTag"])(element),
        // 普通节点
        effects: [],
        effectTag: 'update',
        parent: fiber,
        alternate: alternate
      };

      if (element.type === alternate.type) {
        // 类型相同
        newFiber.stateNode = alternate.stateNode;
      } else {
        // 类型不同
        // 为fiber节点添加DOM对象或组件实例对象
        newFiber.stateNode = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["createStateNode"])(newFiber);
      }
    } else if (element && !alternate) {
      // 初始渲染
      // 子级fiber对象
      newFiber = {
        type: element.type,
        props: element.props,
        tag: Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["getTag"])(element),
        // 普通节点
        effects: [],
        effectTag: 'placement',
        parent: fiber
      }; // 为fiber节点添加DOM对象或组件实例对象

      newFiber.stateNode = Object(_Misc__WEBPACK_IMPORTED_MODULE_1__["createStateNode"])(newFiber);
      console.log('newFiber-----', newFiber);
    } // fiber遍历的规则 如果是第一个节点 就是子节点 不是第一个子节点就是下一个兄弟节点


    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevFiber.sibling = newFiber;
    }

    if (alternate && alternate.sibling) {
      alternate = alternate.sibling;
    } else {
      alternate = null;
    } // 保存上一个Fiber节点


    prevFiber = newFiber;
    index++;
  }
}; // fiber参数就是根节点fiber对象
// 构建fiber


var executeTask = function executeTask(fiber) {
  // 第一个参数为根节点的fiber 第二个参数为子节点的virtualDOM对象
  if (fiber.tag === 'class_component') {
    // 如果是类组件 fiber.stateNode.render() 返回子元素
    reconcileChildren(fiber, fiber.stateNode.render());
  } else if (fiber.tag === 'function_component') {
    reconcileChildren(fiber, fiber.stateNode(fiber.props));
  } else {
    reconcileChildren(fiber, fiber.props.children);
  } // console.log('构建子节点后fiber---', fiber)


  if (fiber.child) {
    return fiber.child;
  }

  var currentExecutelyFiber = fiber;

  while (currentExecutelyFiber.parent) {
    // 将构建好的所有fiber在每一级别effects数组收集 最终合并到最顶层的fiber对象的effects数组中
    currentExecutelyFiber.parent.effects = currentExecutelyFiber.parent.effects.concat(currentExecutelyFiber.effects.concat([currentExecutelyFiber]));

    if (currentExecutelyFiber.sibling) {
      return currentExecutelyFiber.sibling;
    }

    currentExecutelyFiber = currentExecutelyFiber.parent;
  }

  pendingCommit = currentExecutelyFiber;
};

var workLoop = function workLoop(deadline) {
  // 如果子任务不存在 就去获取子任务
  if (!subTask) {
    // subTask是根节点的Fiber对象
    subTask = getFirstTask();
  } // 如果任务存在 并且浏览器空闲 就调用executeTask 方法执行任务 并接受任务 返回新任务


  while (subTask && deadline.timeRemaining() > 1) {
    // 如果任务存在 并且浏览器空闲
    subTask = executeTask(subTask);
  }

  if (pendingCommit) {
    commitAllWork(pendingCommit);
  }
}; // requestIdleCallback API操作 空闲执行操作


var performTask = function performTask(deadline) {
  // 执行任务
  workLoop(deadline); // 当任务终止后 如果任务还没执行完
  // 需要再次调用 告诉浏览器 等到空闲的时候需要再次执行任务

  if (subTask || !taskQueue.isEmpty()) {
    requestIdleCallback(performTask);
  }
}; // element为babel通过createElement转移后的virtualDOM对象 dom为root节点


var render = function render(element, dom) {
  // console.log('element----', element)
  // console.log('dom----', dom) // root

  /**
   * 1、向任务队列中添加任务
   * 2、指定在浏览器空闲时执行任务
   */

  /**
   * 任务就是通过 vdom 对象 构建 fiber对象
   */
  taskQueue.push({
    dom: dom,
    props: {
      children: element
    }
  }); // console.log(taskQueue.pop())
  // 调用 requestIdleCallback api
  // 在浏览器有空余时间就执行performTask

  requestIdleCallback(performTask);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map