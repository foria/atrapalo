function _extends(){return _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},_extends.apply(this,arguments)}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}var Util=function(e){function t(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function i(){return{bindType:a.end,delegateType:a.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function n(){return("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"}}function s(t){var i=this,n=!1;return e(this).one(o.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||o.triggerTransitionEnd(i)},t),this}function r(t){return t="function"==typeof e.escapeSelector?e.escapeSelector(t).substr(1):t.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}var a=!1,o={TRANSITION_END:"bsTransitionEnd",getUID:function(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function(t){var i=t.getAttribute("data-target");i&&"#"!==i||(i=t.getAttribute("href")||""),"#"===i.charAt(0)&&(i=r(i));try{return e(document).find(i).length>0?i:null}catch(e){return null}},reflow:function(e){return e.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(a.end)},supportsTransitionEnd:function(){return Boolean(a)},isElement:function(e){return(e[0]||e).nodeType},typeCheckConfig:function(e,i,n){for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){var r=n[s],a=i[s],l=a&&o.isElement(a)?"element":t(a);if(!new RegExp(r).test(l))throw new Error(e.toUpperCase()+': Option "'+s+'" provided type "'+l+'" but expected type "'+r+'".')}}};return function(){a=n(),e.fn.emulateTransitionEnd=s,o.supportsTransitionEnd()&&(e.event.special[o.TRANSITION_END]=i())}(),o}($),Carousel=function(e){var t="carousel",i="bs.carousel",n="."+i,s=e.fn[t],r={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},a={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},o={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},l={SLIDE:"slide"+n,SLID:"slid"+n,KEYDOWN:"keydown"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n,TOUCHEND:"touchend"+n,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},u={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},c={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},d=function(){function s(t,i){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(i),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(c.INDICATORS)[0],this._addEventListeners()}var d=s.prototype;return d.next=function(){this._isSliding||this._slide(o.NEXT)},d.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},d.prev=function(){this._isSliding||this._slide(o.PREV)},d.pause=function(t){t||(this._isPaused=!0),e(this._element).find(c.NEXT_PREV)[0]&&Util.supportsTransitionEnd()&&(Util.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},d.cycle=function(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},d.to=function(t){var i=this;this._activeElement=e(this._element).find(c.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0)){if(this._isSliding)return void e(this._element).one(l.SLID,function(){return i.to(t)});if(n===t)return this.pause(),void this.cycle();var s=t>n?o.NEXT:o.PREV;this._slide(s,this._items[t])}},d.dispose=function(){e(this._element).off(n),e.removeData(this._element,i),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},d._getConfig=function(e){return e=_extends({},r,e),Util.typeCheckConfig(t,e,a),e},d._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(l.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(l.MOUSEENTER,function(e){return t.pause(e)}).on(l.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(l.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},d._keydown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.which){case 37:e.preventDefault(),this.prev();break;case 39:e.preventDefault(),this.next()}},d._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(c.ITEM)),this._items.indexOf(t)},d._getItemByDirection=function(e,t){var i=e===o.NEXT,n=e===o.PREV,s=this._getItemIndex(t),r=this._items.length-1;if((n&&0===s||i&&s===r)&&!this._config.wrap)return t;var a=e===o.PREV?-1:1,l=(s+a)%this._items.length;return-1===l?this._items[this._items.length-1]:this._items[l]},d._triggerSlideEvent=function(t,i){var n=this._getItemIndex(t),s=this._getItemIndex(e(this._element).find(c.ACTIVE_ITEM)[0]),r=e.Event(l.SLIDE,{relatedTarget:t,direction:i,from:s,to:n});return e(this._element).trigger(r),r},d._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(c.ACTIVE).removeClass(u.ACTIVE);var i=this._indicatorsElement.children[this._getItemIndex(t)];i&&e(i).addClass(u.ACTIVE)}},d._slide=function(t,i){var n,s,r,a=this,d=e(this._element).find(c.ACTIVE_ITEM)[0],h=this._getItemIndex(d),f=i||d&&this._getItemByDirection(t,d),_=this._getItemIndex(f),E=Boolean(this._interval);if(t===o.NEXT?(n=u.LEFT,s=u.NEXT,r=o.LEFT):(n=u.RIGHT,s=u.PREV,r=o.RIGHT),f&&e(f).hasClass(u.ACTIVE))return void(this._isSliding=!1);if(!this._triggerSlideEvent(f,r).isDefaultPrevented()&&d&&f){this._isSliding=!0,E&&this.pause(),this._setActiveIndicatorElement(f);var m=e.Event(l.SLID,{relatedTarget:f,direction:r,from:h,to:_});Util.supportsTransitionEnd()&&e(this._element).hasClass(u.SLIDE)?(e(f).addClass(s),Util.reflow(f),e(d).addClass(n),e(f).addClass(n),e(d).one(Util.TRANSITION_END,function(){e(f).removeClass(n+" "+s).addClass(u.ACTIVE),e(d).removeClass(u.ACTIVE+" "+s+" "+n),a._isSliding=!1,setTimeout(function(){return e(a._element).trigger(m)},0)}).emulateTransitionEnd(600)):(e(d).removeClass(u.ACTIVE),e(f).addClass(u.ACTIVE),this._isSliding=!1,e(this._element).trigger(m)),E&&this.cycle()}},s._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(i),a=_extends({},r,e(this).data());"object"==typeof t&&(a=_extends({},a,t));var o="string"==typeof t?t:a.slide;if(n||(n=new s(this,a),e(this).data(i,n)),"number"==typeof t)n.to(t);else if("string"==typeof o){if(void 0===n[o])throw new TypeError('No method named "'+o+'"');n[o]()}else a.interval&&(n.pause(),n.cycle())})},s._dataApiClickHandler=function(t){var n=Util.getSelectorFromElement(this);if(n){var r=e(n)[0];if(r&&e(r).hasClass(u.CAROUSEL)){var a=_extends({},e(r).data(),e(this).data()),o=this.getAttribute("data-slide-to");o&&(a.interval=!1),s._jQueryInterface.call(e(r),a),o&&e(r).data(i).to(o),t.preventDefault()}}},_createClass(s,null,[{key:"VERSION",get:function(){return"4.0.0"}},{key:"Default",get:function(){return r}}]),s}();return e(document).on(l.CLICK_DATA_API,c.DATA_SLIDE,d._dataApiClickHandler),e(window).on(l.LOAD_DATA_API,function(){e(c.DATA_RIDE).each(function(){var t=e(this);d._jQueryInterface.call(t,t.data())})}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=s,d._jQueryInterface},d}($);