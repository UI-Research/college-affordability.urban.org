'use strict';

import React, { Component } from 'react';
import _ from 'lodash';

import HTML from '10-html/html.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { StickyContainer } from 'react-sticky';

import util from 'util.jsx';

if (util.canUseDOM()) {
  require('./default.scss');
}

export default class TemplateDefault extends Component {
  componentDidMount() {
    // Set the src to the preview image, keep track of the original src.
    let images = document.getElementsByTagName('img');
    _.forEach(images, function (image) {
      image.setAttribute('data-src', image.getAttribute('src'));
      image.setAttribute('src', image.getAttribute('src').replace('img/', 'img/preview/'));
    });
    
    let componentForceUpdate = () => {
      this.forceUpdate();
    };
    // Force an update to reload the original src.
    setTimeout(componentForceUpdate, 100);
  }
  componentDidUpdate() {
    // Set back to the original src.
    let images = document.querySelectorAll('img[data-src]');
    _.forEach(images, function (image) {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.removeAttribute('data-src');
    });
  }
  render() {
    return (
      <HTML title={this.props.title} machineName={this.props.machineName} includeHTML={this.props.includeHTML}>
        <StickyContainer>
           <div className="header-container">
             <Header machineName={this.props.machineName} />
           </div>
           <div className="main">
             {this.props.children}
           </div>
           <Footer />
        </StickyContainer>
      </HTML>
    );
  }
}

TemplateDefault.propTypes = {
  includeHTML: React.PropTypes.bool,
  title: React.PropTypes.string
};
TemplateDefault.defaultProps = {
  includeHTML: false,
  title: ''
};

//IE 9 fixes/shims.
if (util.canUseDOM()) {
  if (document.documentMode && document.documentMode <= 9) {
    // Fix for no RequestAnimationFrame.
    (function() {
      var lastTime = 0;
      var vendors = ['webkit', 'moz'];
      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
           window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
      }
  
      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
      }

      if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
          clearTimeout(id);
        };
      }
    }());
  
    //Fix for no classList.
    if ('document' in self) {
      //Full polyfill for browsers with no classList support
      if (!('classList' in document.createElement('_'))) {
        (function (view) {
          'use strict';

          if (!('Element' in view)) return;

          let classListProp = 'classList'
           , protoProp = 'prototype'
           , elemCtrProto = view.Element[protoProp]
           , objCtr = Object
           , strTrim = String[protoProp].trim || function () {
             return this.replace(/^\s+|\s+$/g, '');
           }
           , arrIndexOf = Array[protoProp].indexOf || function (item) {
             let i = 0,
                 len = this.length;
             for (; i < len; i++) {
               if (i in this && this[i] === item) {
                 return i;
               }
             }
             return -1;
           }
           // Vendors: please allow content code to instantiate DOMExceptions
           , DOMEx = function (type, message) {
             this.name = type;
             this.code = DOMException[type];
             this.message = message;
           }
           , checkTokenAndGetIndex = function (classList, token) {
             if (token === '') {
               throw new DOMEx(
                    'SYNTAX_ERR'
                 , 'An invalid or illegal string was specified'
               );
             }
             if (/\s/.test(token)) {
               throw new DOMEx(
                    'INVALID_CHARACTER_ERR'
                 , 'String contains an invalid character'
               );
             }
             return arrIndexOf.call(classList, token);
           }
           , ClassList = function (elem) {
             let trimmedClasses = strTrim.call(elem.getAttribute('class') || ''),
                 classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
                 i = 0,
                 len = classes.length;
                 
             for (; i < len; i++) {
               this.push(classes[i]);
             }
             this._updateClassName = function () {
               elem.setAttribute('class', this.toString());
             };
           }
           , classListProto = ClassList[protoProp] = []
           , classListGetter = function () {
             return new ClassList(this);
           };

          //Most DOMException implementations don't allow calling DOMException's toString()
          //on non-DOMExceptions. Error's toString() is sufficient here.
          DOMEx[protoProp] = Error[protoProp];
          classListProto.item = function (i) {
            return this[i] || null;
          };
          classListProto.contains = function (token) {
            token += '';
            return checkTokenAndGetIndex(this, token) !== -1;
          };
          classListProto.add = function () {
            let tokens = arguments,
                i = 0,
                l = tokens.length,
                token,
                updated = false;
            do {
              token = tokens[i] + '';
              if (checkTokenAndGetIndex(this, token) === -1) {
                this.push(token);
                updated = true;
              }
            }
            while (++i < l);
          
            if (updated) {
              this._updateClassName();
            }
          };
          classListProto.remove = function () {
            let tokens = arguments,
                i = 0,
                l = tokens.length,
                token,
                updated = false,
                index;

            do {
              token = tokens[i] + '';
              index = checkTokenAndGetIndex(this, token);
              while (index !== -1) {
                this.splice(index, 1);
                updated = true;
                index = checkTokenAndGetIndex(this, token);
              }
            }
            while (++i < l);
          
            if (updated) {
              this._updateClassName();
            }
          };
          classListProto.toggle = function (token, force) {
            token += '';
          
            let result = this.contains(token),
                method = result ? force !== true && 'remove' : force !== false && 'add';
          
            if (method) {
              this[method](token);
            }
          
            if (force === true || force === false) {
              return force;
            }
            else {
              return !result;
            }
          };
          classListProto.toString = function () {
            return this.join(' ');
          };
          
          if (objCtr.defineProperty) {
            let classListPropDesc = {
              get: classListGetter,
              enumerable: true,
              configurable: true
            };
            try {
              objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            }
            catch (ex) { // IE 8 doesn't support enumerable:true
              if (ex.number === -0x7FF5EC54) {
                classListPropDesc.enumerable = false;
                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
              }
            }
          }
          else if (objCtr[protoProp].__defineGetter__) {
            elemCtrProto.__defineGetter__(classListProp, classListGetter);
          }
        }(self));
      }
      else {
        //There is full or partial native classList support, so just check if we need
        //to normalize the add/remove and toggle APIs.
       
        (function () {
          'use strict';
       
          let testElement = document.createElement('_');
       
          testElement.classList.add('c1', 'c2');
         
          // Polyfill for IE 10/11 and Firefox <26, where classList.add and
          // classList.remove exist but support only one argument at a time.
          if (!testElement.classList.contains('c2')) {
            let createMethod = function(method) {
              let original = DOMTokenList.prototype[method];
     
              DOMTokenList.prototype[method] = function(token) {
                let i, len = arguments.length;
     
                for (i = 0; i < len; i++) {
                  token = arguments[i];
                  original.call(this, token);
                }
              };
            };
            createMethod('add');
            createMethod('remove');
          }

          testElement.classList.toggle('c3', false);
         
          // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
          // support the second argument.
          if (testElement.classList.contains('c3')) {
            let _toggle = DOMTokenList.prototype.toggle;
       
            DOMTokenList.prototype.toggle = function(token, force) {
              if (1 in arguments && !this.contains(token) === !force) {
                return force;
              }
              else {
                return _toggle.call(this, token);
              }
            };
          }
         
          testElement = null;
        }());
      }
    }
  }
}
