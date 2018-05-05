(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{14:function(t,e,n){"use strict";n.r(e);var r,o=n(0),i=n(13),s=n(12),a=n.n(s),u=n(11),c=n.n(u),p=function(){function t(){this._stack=[]}return Object.defineProperty(t.prototype,"top",{get:function(){return this._stack[this._stack.length-1]},enumerable:!0,configurable:!0}),t.prototype.isEmpty=function(){return 0==this._stack.length},t.prototype.push=function(t){this._stack.push(t)},t.prototype.pop=function(){return this._stack.pop()},t}();!function(t){t[t.ELEMENT=1]="ELEMENT",t[t.TEXT=3]="TEXT",t[t.COMMENT=8]="COMMENT"}(r||(r={}));var f,h=function(){function t(t){this._nodeType=t,this._parent=null,this._pre=null,this._next=null,this._meta={}}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return this._nodeType},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pre",{get:function(){return this._pre},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"next",{get:function(){return this._next},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"meta",{get:function(){return this._meta},enumerable:!0,configurable:!0}),t.setPre=function(t,e){t._pre=e},t.setNext=function(t,e){t._next=e},t.setParent=function(t,e){t._parent=e},t}(),l=(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}f(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});function d(t){return t&&t.nodeType===r.COMMENT}var g=function(t){function e(e){void 0===e&&(e="");var n=t.call(this,r.COMMENT)||this;return n.content=e,n}return l(e,t),e.prototype.cloneNode=function(){return new e(this.content)},e.prototype.toJson=function(){return{nodeType:r.COMMENT,content:this.content}},e.prototype.toString=function(){return"\x3c!--"+this.content+"--\x3e"},e.isTinyHtmlCommentNode=d,e}(h),m=function(){function t(t){t&&(this._message=t)}return Object.defineProperty(t.prototype,"message",{get:function(){var t=this.messagePositon;t||(t=this.errorEnd);var e=t&&t.line,n=t&&t.col;return"["+("number"==typeof e?e+1:"??")+":"+("number"==typeof n?n+1:"??")+"]: "+(this._message||"Unkown error")},set:function(t){this._message=t},enumerable:!0,configurable:!0}),t}();function y(t){var e=t.content,n=t.pos;return"<"===e[n]&&"!"===e[n+1]&&"-"===e[n+2]&&"-"===e[n+3]}function _(t){var e=t.content,n=t.pos;return"-"===e[n]&&"-"===e[n+1]&&">"===e[n+2]}function b(t){var e=new m(""),n="";for(e.errorStart=t.getPositionDetail(),t.skip(4);;){if(_(t)){t.skip(3);break}if(t.done)throw e.errorEnd=t.getPositionDetail(),e.message="Comment tag has unexpected end",e;n+=t.current,t.next()}var r=new g(n);return r.meta.position=e.errorStart,r}var v=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),E=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t};function P(t){return t&&t.nodeType===r.ELEMENT}var w=function(t){function e(e){var n=t.call(this,r.ELEMENT)||this;return n._tagName=e,n._attributes={},n._children=[],n}return v(e,t),Object.defineProperty(e.prototype,"tagName",{get:function(){return this._tagName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"children",{get:function(){return this._children.slice()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"attributes",{get:function(){return this._attributes},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text||""},set:function(t){this._text=t},enumerable:!0,configurable:!0}),e.prototype.appendChild=function(t){var e=this._children,n=e[e.length-1];t.parent&&t.parent.removeChild(t),n&&(h.setNext(n,t),h.setPre(t,n)),h.setParent(t,this),this._children.push(t)},e.prototype.removeChild=function(t){var e=this._children,n=e.indexOf(t);if(-1!==n){var r=e[n-1],o=e[n+1];r&&h.setNext(r,o||null),o&&h.setPre(o,r||null),h.setParent(t,null),h.setNext(t,null),h.setPre(t,null),e.splice(n,1)}},e.prototype.cloneNode=function(){var t=new e(this._tagName);t._attributes=E({},this._attributes);for(var n=0,r=this._children;n<r.length;n++){var o=r[n];t.appendChild(o.cloneNode())}return t},e.prototype.toJson=function(){for(var t={nodeType:r.ELEMENT,tagName:this.tagName,attributes:E({},this._attributes),children:[]},e=0,n=this._children;e<n.length;e++){var o=n[e].toJson(),i=t.children[t.children.length-1];o.parent=t,i&&(o.pre=i,i.next=o),t.children.push(o)}return t},e.prototype.getAttributeString=function(){var t=this,e=Object.keys(this.attributes);return e.length?" "+e.reduce(function(e,n){var r=t._attributes[n],o=r.indexOf('"')>=0?"'":'"';return e.concat([n+"="+o+r+o])},[]).join(" "):""},e.prototype.toString=function(){for(var t="<"+this.tagName+this.getAttributeString()+">",e=0,n=this.children;e<n.length;e++){t=""+t+n[e].toString()}return t+"</"+this.tagName+">"},e.isTinyHtmlElementNode=P,e}(h);function O(t,e){for(var n="";!t.done;){if(L(t))try{var r=t.clone();if(D(r)===e.tagName)return t.skip(r.pos-t.pos),e.text=n,e}catch(t){}n+=t.current,t.next()}var o=new m;throw o.errorStart=e.meta.position,o.errorEnd=t.getPositionDetail(),o.message="Tag <"+e.tagName+"> unexpected end",o}function N(t){return"\\"===t}function T(t){return/\s/.test(t)}function k(t){return"'"===t||'"'===t}var x=/[a-zA-Z_]/,j=/[0-9a-zA-Z_-]/;function S(t){var e=t.content,n=t.pos;return"<"===t.current&&void 0!==e[n+1]&&x.test(e[n+1])}function C(t){var e=t.getPositionDetail(),n=new w(function(t){return t.skip(),M(t)}(t)),r=new m;if(n.meta.position=e,r.errorStart=e,function(t,e){var n=new m;for(;;){if(t.done)throw n.errorStart=e.meta.position,n.errorEnd=t.getPositionDetail(),n.message="Tag '<"+e.tagName+" ...' unexpected end",n;if(t.skipWhitespace(),A(t)||W(t))break;var r=t.getPositionDetail(),o=t.readIgnoreEscaped(function(t,e){return T(t)||"="===t||"<"===t||">"===t||A(e)});if(n.errorStart=r,!T(t.content[r.pos-1]))throw n.messagePositon=r,n.errorEnd=t.getPositionDetail(),n.message="Tag "+e.tagName+" attribute '"+o+"' must after a whitespace token",n;if(0===o.length)throw n.errorEnd=n.errorStart,n.message="Tag <"+e.tagName+" ...> attribute name has unexpected token '"+t.current+"'",n;if(t.skipWhitespace(),"="===t.current){t.skip(),t.skipWhitespace();var i=t.current;if(!k(i))throw n.messagePositon=n.errorStart,n.errorEnd=t.getPositionDetail(),n.message="Tag "+e.tagName+" attribute '"+o+"' required a start quotes",n;if(t.skip(),e.attributes[o]=t.readEscaped(i),!k(t.current))throw n.messagePositon=n.errorStart,n.errorEnd=t.getPositionDetail(),n.message="Tag "+e.tagName+" attribute '"+o+"' required a end quotes",n;t.skip()}else e.attributes[o]=""}}(t,n),A(t))return t.skip(2),{close:!0,node:n};switch(t.skip(),n.tagName.toLowerCase()){case"script":case"style":return O(t,n),{close:!0,node:n}}return{close:!1,node:n}}function D(t){var e,n=new m;if(n.errorStart=t.getPositionDetail(),t.skip(2),(e=M(t)).length<=0)throw n.errorEnd=t.getPositionDetail(),n.message="End tag name can't be empty",n;if(t.skipWhitespace(),">"!==t.current)throw n.errorEnd=t.getPositionDetail(),n.message="End tag '</"+e+" ...' expect token '>'",n;return t.skip(),e}function M(t){for(var e="",n=t.getPositionDetail();!t.done;){var r=t.current;if(!x.test(r))break;e+=r,t.next()}for(;!t.done;){r=t.current;if(!j.test(r))break;e+=r,t.next()}if(!t.done&&" "!==t.current&&!W(t)&&!A(t)){var o=new m;throw o.errorStart=n,o.messagePositon=t.getPositionDetail(),o.errorEnd=o.messagePositon,o.message="Token '"+t.current+"' can't be tag name",o}return e}function L(t){var e=t.content,n=t.pos;return"<"===e[n]&&"/"===e[n+1]}function A(t){var e=t.content,n=t.pos;return"/"===e[n]&&">"===e[n+1]}function W(t){return">"===t.current}var J=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();function q(t){return t&&t.nodeType===r.TEXT}var X=function(t){function e(e){void 0===e&&(e="");var n=t.call(this,r.TEXT)||this;return n.text=e,n}return J(e,t),e.prototype.cloneNode=function(){return new e(this.text)},e.prototype.toJson=function(){return{nodeType:r.TEXT,text:this.text}},e.prototype.toString=function(){return this.text},e.isTinyHtmlTextNode=q,e}(h);function H(t){return!(S(t)||y(t)||L(t))}function I(t){for(var e,n=t.getPositionDetail(),r="";!t.done&&("<"!==t.current||H(t));)r+=t.current,t.next();return(e=new X(r)).meta.position=n,e}var z=function(){function t(t){this._content=t,this._line=0,this._col=0,this._pos=0}return Object.defineProperty(t.prototype,"content",{get:function(){return this._content},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"line",{get:function(){return this._line},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"col",{get:function(){return this._col},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"pos",{get:function(){return this._pos},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"current",{get:function(){return this._content[this._pos]},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"done",{get:function(){return this._pos>=this._content.length},enumerable:!0,configurable:!0}),t.prototype.clone=function(){var e=new t(this.content);return e._col=this._col,e._pos=this._pos,e._line=this._line,e},t.prototype.next=function(){var t=this._content[this._pos++];return!function(t){return"\n"===t}(t)?this._col++:(this._line++,this._col=0),t},t.prototype.skip=function(t){for(void 0===t&&(t=1);t>0;)t--,this.next();return this},t.prototype.getPositionDetail=function(){return{pos:this._pos,col:this._col,line:this._line}},t.prototype.skipWhitespace=function(){for(;!this.done&&T(this.current);)this.next();return this},t.prototype.readIgnoreEscaped=function(t){for(var e="string"==typeof t?function(e,n){return e===t}:t,n="";!this.done;){var r=this.current;if(e(r,this))break;n+=r,this.next()}return n},t.prototype.readEscaped=function(t){for(var e="string"==typeof t?function(e,n){return e===t}:t,n="",r=!1;!this.done;){var o=this.current;if(r)r=!1,n+=o;else{if(e(o,this))break;N(o)?r=!0:n+=o}this.next()}return n},t}();var U=function(t,e){return function(t,e){void 0===e&&(e={});for(var n=e.skipWhitespace,r=[],o=new p,i=new m;n&&t.skipWhitespace(),!t.done;)if(H(t))o.isEmpty()?r.push(I(t)):o.top.appendChild(I(t));else if(y(t))o.isEmpty()?r.push(b(t)):o.top.appendChild(b(t));else if(S(t)){var s=C(t),a=s.close,u=s.node;o.isEmpty()?a?r.push(u):o.push(u):(o.top.appendChild(u),a||o.push(u))}else if(L(t)){var c=t.getPositionDetail(),f=D(t),u=o.top;if(o.isEmpty())throw i.errorStart=c,i.messagePositon=c,i.errorEnd=t.getPositionDetail(),i.message="Unexpected close tag '</"+f+">'",i;if(f!==u.tagName)throw i.errorStart=u.meta.position,i.errorEnd=t.getPositionDetail(),i.message="Tag name mismatch '<"+u.tagName+u.getAttributeString()+">...</"+f+">'",i;o.pop(),o.isEmpty()&&r.push(u)}if(!o.isEmpty()){var u=o.top;throw i.messagePositon=u.meta.position,i.errorStart=u.meta.position,i.errorEnd=t.getPositionDetail(),i.message="Tag <"+u.tagName+u.getAttributeString()+"> not close",i}return r}(new z(t),e)},Z=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Z(e,t),e.prototype.render=function(){var t=!!this.props.error,e="error-message"+(t?" show":" hide");return o.createElement("div",{className:e},t?"tiny-html-parse error: "+this.props.error.message:"")},e}(o.Component),F=(n(44),n(39),function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}()),G={url:"./vs/loader.js",paths:{vs:"./vs"}},K='<div id="main">it\'s tiny html parse</div>',Q=function(t){function e(e){var n=t.call(this,e)||this;return n.state={nodes:U(K),content:K,editorLoaded:!1},n.onChange=n.onChange.bind(n),n.onEditorLoaded=n.onEditorLoaded.bind(n),n}return F(e,t),e.prototype.onChange=function(t){this.setState({content:t});try{var e=U(t,{skipWhitespace:!0});this.setState({nodes:e,error:void 0})}catch(t){this.setState({error:t,nodes:[]})}},e.prototype.onEditorLoaded=function(){this.setState({editorLoaded:!0})},e.prototype.render=function(){var t=this.state.editorLoaded?null:o.createElement("div",{className:"editor-load-tips"}," loading editor ");return o.createElement("div",{className:"tiny-html-parse"},o.createElement("div",{className:"editor-wrapper"},t,o.createElement(c.a,{language:"html",theme:"vs-light",width:"100%",height:"100%",value:this.state.content,requireConfig:G,options:{minimap:{enabled:!1},automaticLayout:!0},onChange:this.onChange,editorDidMount:this.onEditorLoaded})),o.createElement("div",{className:"inspector-wrapper"},o.createElement(a.a,{data:this.state.nodes,search:!1})),o.createElement(B,{error:this.state.error}))},e}(o.Component);i.render(o.createElement(Q,null),document.getElementById("root"))},39:function(t,e){},44:function(t,e){}},[[14,0,1]]]);