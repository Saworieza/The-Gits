/* PLUGIN */
;(function(a){function b(b,d,e){var f=this;return this.on("click.pjax",b,function(b){var g=a.extend({},m(d,e));g.container||(g.container=a(this).attr("data-pjax")||f),c(b,g)})}function c(b,c,d){d=m(c,d);var f=b.currentTarget;if("A"!==f.tagName.toUpperCase())throw"$.fn.pjax or $.pjax.click requires an anchor element";if(!(b.which>1||b.metaKey||b.ctrlKey||b.shiftKey||b.altKey||location.protocol!==f.protocol||location.host!==f.host||f.hash&&f.href.replace(f.hash,"")===location.href.replace(location.hash,"")||f.href===location.href+"#")){var g={url:f.href,container:a(f).attr("data-pjax"),target:f,fragment:null};e(a.extend({},g,d)),b.preventDefault()}}function d(b,c,d){d=m(c,d);var f=b.currentTarget;if("FORM"!==f.tagName.toUpperCase())throw"$.pjax.submit requires a form element";var g={type:f.method,url:f.action,data:a(f).serializeArray(),container:a(f).attr("data-pjax"),target:f,fragment:null};e(a.extend({},g,d)),b.preventDefault()}function e(b){function h(b,d){var e=a.Event(b,{relatedTarget:c});return f.trigger(e,d),!e.isDefaultPrevented()}b=a.extend(!0,{},a.ajaxSettings,e.defaults,b),a.isFunction(b.url)&&(b.url=b.url());var c=b.target,d=l(b.url).hash,f=b.context=n(b.container);b.data||(b.data={}),b.data._pjax=f.selector;var i;b.beforeSend=function(a,c){return"GET"!==c.type&&(c.timeout=0),a.setRequestHeader("X-PJAX","true"),a.setRequestHeader("X-PJAX-Container",f.selector),h("pjax:beforeSend",[a,c])?(c.timeout>0&&(i=setTimeout(function(){h("pjax:timeout",[a,b])&&a.abort("timeout")},c.timeout),c.timeout=0),b.requestUrl=l(c.url).href,void 0):!1},b.complete=function(a,c){i&&clearTimeout(i),h("pjax:complete",[a,c,b]),h("pjax:end",[a,b])},b.error=function(a,c,d){var e=p("",a,b),f=h("pjax:error",[a,c,d,b]);"GET"==b.type&&"abort"!==c&&f&&g(e.url)},b.success=function(c,i,k){var m=p(c,k,b);if(!m.contents)return g(m.url),void 0;if(e.state={id:b.id||j(),url:m.url,title:m.title,container:f.selector,fragment:b.fragment,timeout:b.timeout},(b.push||b.replace)&&window.history.replaceState(e.state,m.title,m.url),m.title&&(document.title=m.title),f.html(m.contents),"number"==typeof b.scrollTo&&a(window).scrollTop(b.scrollTo),(b.replace||b.push)&&window._gaq&&_gaq.push(["_trackPageview"]),""!==d){var n=l(m.url);n.hash=d,e.state.url=n.href,window.history.replaceState(e.state,m.title,n.href);var o=a(n.hash);o.length&&a(window).scrollTop(o.offset().top)}h("pjax:success",[c,i,k,b])},e.state||(e.state={id:j(),url:window.location.href,title:document.title,container:f.selector,fragment:b.fragment,timeout:b.timeout},window.history.replaceState(e.state,document.title));var m=e.xhr;m&&4>m.readyState&&(m.onreadystatechange=a.noop,m.abort()),e.options=b;var m=e.xhr=a.ajax(b);return m.readyState>0&&(b.push&&!b.replace&&(t(e.state.id,f.clone().contents()),window.history.pushState(null,"",k(b.requestUrl))),h("pjax:start",[m,b]),h("pjax:send",[m,b])),e.xhr}function f(b,c){var d={url:window.location.href,push:!1,replace:!0,scrollTo:!1};return e(a.extend(d,m(b,c)))}function g(a){window.history.replaceState(null,"","#"),window.location.replace(a)}function h(b){var c=b.state;if(c&&c.container){var d=a(c.container);if(d.length){var f=q[c.id];if(!e.state)return e.state=c,void 0;var h=e.state.id<c.id?"forward":"back";u(h,e.state.id,d.clone().contents());var i=a.Event("pjax:popstate",{state:c,direction:h});d.trigger(i);var j={id:c.id,url:c.url,container:d,push:!1,fragment:c.fragment,timeout:c.timeout,scrollTo:!1};f?(d.trigger("pjax:start",[null,j]),c.title&&(document.title=c.title),d.html(f),e.state=c,d.trigger("pjax:end",[null,j])):e(j),d[0].offsetHeight}else g(location.href)}}function i(b){var c=a.isFunction(b.url)?b.url():b.url,d=b.type?b.type.toUpperCase():"GET",e=a("<form>",{method:"GET"===d?"GET":"POST",action:c,style:"display:none"});"GET"!==d&&"POST"!==d&&e.append(a("<input>",{type:"hidden",name:"_method",value:d.toLowerCase()}));var f=b.data;if("string"==typeof f)a.each(f.split("&"),function(b,c){var d=c.split("=");e.append(a("<input>",{type:"hidden",name:d[0],value:d[1]}))});else if("object"==typeof f)for(key in f)e.append(a("<input>",{type:"hidden",name:key,value:f[key]}));a(document.body).append(e),e.submit()}function j(){return(new Date).getTime()}function k(a){return a.replace(/\?_pjax=[^&]+&?/,"?").replace(/_pjax=[^&]+&?/,"").replace(/[\?&]$/,"")}function l(a){var b=document.createElement("a");return b.href=a,b}function m(b,c){return b&&c?c.container=b:c=a.isPlainObject(b)?b:{container:b},c.container&&(c.container=n(c.container)),c}function n(b){if(b=a(b),b.length){if(""!==b.selector&&b.context===document)return b;if(b.attr("id"))return a("#"+b.attr("id"));throw"cant get selector for pjax container!"}throw"no pjax container for "+b.selector}function o(a,b){return a.filter(b).add(a.find(b))}function p(b,c,d){var e={};if(e.url=k(c.getResponseHeader("X-PJAX-URL")||d.requestUrl),/<html/i.test(b))var f=a(b.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]),g=a(b.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]);else var f=g=a(b);if(0===g.length)return e;if(e.title=o(f,"title").last().text(),d.fragment){if("body"===d.fragment)var h=g;else var h=o(g,d.fragment).first();h.length&&(e.contents=h.contents(),e.title||(e.title=h.attr("title")||h.data("title")))}else/<html/i.test(b)||(e.contents=g);return e.contents&&(e.contents=e.contents.not("title"),e.contents.find("title").remove()),e.title&&(e.title=a.trim(e.title)),e}function t(a,b){for(q[a]=b,s.push(a);r.length;)delete q[r.shift()];for(;s.length>e.defaults.maxCacheLength;)delete q[s.shift()]}function u(a,b,c){var d,e;q[b]=c,"forward"===a?(d=s,e=r):(d=r,e=s),d.push(b),(b=e.pop())&&delete q[b]}function v(){a.fn.pjax=b,a.pjax=e,a.pjax.enable=a.noop,a.pjax.disable=w,a.pjax.click=c,a.pjax.submit=d,a.pjax.reload=f,a.pjax.defaults={timeout:650,push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,maxCacheLength:20},a(window).bind("popstate.pjax",h)}function w(){a.fn.pjax=function(){return this},a.pjax=i,a.pjax.enable=v,a.pjax.disable=a.noop,a.pjax.click=a.noop,a.pjax.submit=a.noop,a.pjax.reload=function(){window.location.reload()},a(window).unbind("popstate.pjax",h)}var q={},r=[],s=[];0>a.inArray("state",a.event.props)&&a.event.props.push("state"),a.support.pjax=window.history&&window.history.pushState&&window.history.replaceState&&!navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/),a.support.pjax?v():w()})(jQuery);
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):a(jQuery)}(function(a){"use strict";function b(b,e){function f(){return m.update(),h(),m}function g(){r.css(x,m.contentPosition/m.trackRatio),o.css(x,-m.contentPosition),p.css(w,m.trackSize),q.css(w,m.trackSize),r.css(w,m.thumbSize)}function h(){u?n[0].ontouchstart=function(a){1===a.touches.length&&(a.stopPropagation(),i(a.touches[0]))}:(r.bind("mousedown",i),q.bind("mousedown",k)),a(window).resize(function(){m.update("relative")}),m.options.wheel&&window.addEventListener?b[0].addEventListener(v,j,!1):m.options.wheel&&(b[0].onmousewheel=j)}function i(b){a("body").addClass("noSelect"),s=t?b.pageX:b.pageY,m.thumbPosition=parseInt(r.css(x),10)||0,u?(document.ontouchmove=function(a){a.preventDefault(),k(a.touches[0])},document.ontouchend=l):(a(document).bind("mousemove",k),a(document).bind("mouseup",l),r.bind("mouseup",l))}function j(c){if(m.contentRatio<1){var d=c||window.event,e="delta"+m.options.axis.toUpperCase(),f=-(d[e]||d.detail||-1/3*d.wheelDelta)/40;m.contentPosition-=f*m.options.wheelSpeed,m.contentPosition=Math.min(m.contentSize-m.viewportSize,Math.max(0,m.contentPosition)),b.trigger("move"),r.css(x,m.contentPosition/m.trackRatio),o.css(x,-m.contentPosition),(m.options.wheelLock||m.contentPosition!==m.contentSize-m.viewportSize&&0!==m.contentPosition)&&(d=a.event.fix(d),d.preventDefault())}}function k(a){if(m.contentRatio<1){var c=t?a.pageX:a.pageY,d=c-s;m.options.scrollInvert&&u&&(d=s-c);var e=Math.min(m.trackSize-m.thumbSize,Math.max(0,m.thumbPosition+d));m.contentPosition=e*m.trackRatio,b.trigger("move"),r.css(x,e),o.css(x,-m.contentPosition)}}function l(){a("body").removeClass("noSelect"),a(document).unbind("mousemove",k),a(document).unbind("mouseup",l),r.unbind("mouseup",l),document.ontouchmove=document.ontouchend=null}this.options=a.extend({},d,e),this._defaults=d,this._name=c;var m=this,n=b.find(".viewport"),o=b.find(".overview"),p=b.find(".scrollbar"),q=p.find(".track"),r=p.find(".thumb"),s=0,t="x"===this.options.axis,u="ontouchstart"in document.documentElement,v="onwheel"in document||document.documentMode>=9?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",w=t?"width":"height",x=t?"left":"top";return this.contentPosition=0,this.viewportSize=0,this.contentSize=0,this.contentRatio=0,this.trackSize=0,this.trackRatio=0,this.thumbSize=0,this.thumbPosition=0,this.update=function(a){var b=w.charAt(0).toUpperCase()+w.slice(1).toLowerCase();switch(this.viewportSize=n[0]["offset"+b],this.contentSize=o[0]["scroll"+b],this.contentRatio=this.viewportSize/this.contentSize,this.trackSize=this.options.trackSize||this.viewportSize,this.thumbSize=Math.min(this.trackSize,Math.max(0,this.options.thumbSize||this.trackSize*this.contentRatio)),this.trackRatio=this.options.thumbSize?(this.contentSize-this.viewportSize)/(this.trackSize-this.thumbSize):this.contentSize/this.trackSize,p.toggleClass("disable",this.contentRatio>=1),a){case"bottom":this.contentPosition=this.contentSize-this.viewportSize;break;case"relative":this.contentPosition=Math.min(this.contentSize-this.viewportSize,Math.max(0,this.contentPosition));break;default:this.contentPosition=parseInt(a,10)||0}return g(),m},f()}var c="tinyscrollbar",d={axis:"y",wheel:!0,wheelSpeed:40,wheelLock:!0,scrollInvert:!1,trackSize:!1,thumbSize:!1};a.fn[c]=function(d){return this.each(function(){a.data(this,"plugin_"+c)||a.data(this,"plugin_"+c,new b(a(this),d))})}});
;(function(e,t,r){"use strict";function n(r){if(o=t.documentElement,a=t.body,K(),it=this,r=r||{},ut=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];yt=r.edgeStrategy||"set",ct={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},ft=r.forceHeight!==!1,ft&&(zt=r.scale||1),mt=r.mobileDeceleration||E,gt=r.smoothScrolling!==!1,dt=r.smoothScrollingDuration||x,vt={targetTop:it.getScrollTop()},Gt=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),Gt?(st=t.getElementById("skrollr-body"),st&&at(),X(),Dt(o,[y,S],[T])):Dt(o,[y,b],[T]),it.refresh(),St(e,"resize orientationchange",function(){var e=o.clientWidth,t=o.clientHeight;(t!==$t||e!==Mt)&&($t=t,Mt=e,_t=!0)});var i=Y();return function l(){Z(),bt=i(l)}(),it}var o,a,i={get:function(){return it},init:function(e){return it||new n(e)},VERSION:"0.6.22"},l=Object.prototype.hasOwnProperty,s=e.Math,c=e.getComputedStyle,f="touchstart",u="touchmove",m="touchcancel",p="touchend",g="skrollable",d=g+"-before",v=g+"-between",h=g+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,E=.004,x=200,F="start",A="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,V=/\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,z=/^([a-z\-]+)\[(\w+)\]$/,O=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(c){var t=c(a,null);for(var n in t)if(B=n.match(e)||+n==n&&t[n].match(e))break;if(!B)return B=G="",r;B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=Pt();return(Gt||!t)&&(t=function(t){var n=Pt()-r,o=s.max(0,1e3/60-n);return e.setTimeout(function(){r=Pt(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(Gt||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-s.cos(e*s.PI)/2+.5},sqrt:function(e){return s.sqrt(e)},outCubic:function(e){return s.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-s.abs(3*s.cos(1.028*e*t)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,lt=[],Bt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=gt,f=yt,u=!1;if(a&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var d=i.attributes[m];if("data-anchor-target"!==d.name)if("data-smooth-scrolling"!==d.name)if("data-edge-strategy"!==d.name)if("data-emit-events"!==d.name){var v=d.name.match(N);if(null!==v){var h={props:d.value,element:i,eventType:d.name.replace(O,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==F&&b!==A?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===A?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*zt))}}else u=!0;else f=d.value;else c="off"!==d.value;else if(l=t.querySelector(d.value),null===l)throw'Unable to find anchor target "'+d.value+'"'}if(s.length){var k,w,E;!a&&H in i?(E=i[H],k=lt[E].styleAttr,w=lt[E].classAttr):(E=i[H]=Bt++,k=i.style.cssText,w=Ct(i)),lt[E]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},Dt(i,[g],[])}}}for(xt(),n=0,o=e.length;o>n;n++){var x=lt[e[n][H]];x!==r&&(J(x),et(x))}return it},n.prototype.relativeToAbsolute=function(e,t,r){var n=o.clientHeight,a=e.getBoundingClientRect(),i=a.top,l=a.bottom-a.top;return t===D?i-=n:t===C&&(i-=n/2),r===D?i+=l:r===C&&(i+=l/2),i+=it.getScrollTop(),0|i+.5},n.prototype.animateTo=function(e,t){t=t||{};var n=Pt(),o=it.getScrollTop();return pt={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},pt.topDiff||(pt.done&&pt.done.call(it,!1),pt=r),it},n.prototype.stopAnimateTo=function(){pt&&pt.done&&pt.done.call(it,!0),pt=r},n.prototype.isAnimatingTo=function(){return!!pt},n.prototype.isMobile=function(){return Gt},n.prototype.setScrollTop=function(t,r){return ht=r===!0,Gt?Kt=s.min(s.max(t,0),Vt):e.scrollTo(0,t),it},n.prototype.getScrollTop=function(){return Gt?Kt:e.pageYOffset||o.scrollTop||a.scrollTop||0},n.prototype.getMaxScrollTop=function(){return Vt},n.prototype.on=function(e,t){return ct[e]=t,it},n.prototype.off=function(e){return delete ct[e],it},n.prototype.destroy=function(){var e=R();e(bt),wt(),Dt(o,[T],[y,b,S]);for(var t=0,n=lt.length;n>t;t++)ot(lt[t].element);o.style.overflow=a.style.overflow="auto",o.style.height=a.style.height="auto",st&&i.setStyle(st,"transform","none"),it=r,st=r,ct=r,ft=r,Vt=0,zt=1,ut=r,mt=r,Ot="down",qt=-1,Mt=0,$t=0,_t=!1,pt=r,gt=r,dt=r,vt=r,ht=r,Bt=0,yt=r,Gt=!1,Kt=0,Tt=r};var X=function(){var n,i,l,c,g,d,v,h,y,T,b,S;St(o,[f,u,m,p].join(" "),function(e){var o=e.changedTouches[0];for(c=e.target;3===c.nodeType;)c=c.parentNode;switch(g=o.clientY,d=o.clientX,T=e.timeStamp,I.test(c.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),it.stopAnimateTo(),n=c,i=v=g,l=d,y=T;break;case u:I.test(c.tagName)&&t.activeElement!==c&&e.preventDefault(),h=g-v,S=T-b,it.setScrollTop(Kt-h,!0),v=g,b=T;break;default:case m:case p:var a=i-g,k=l-d,w=k*k+a*a;if(49>w){if(!I.test(n.tagName)){n.focus();var E=t.createEvent("MouseEvents");E.initMouseEvent("click",!0,!0,e.view,1,o.screenX,o.screenY,o.clientX,o.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(E)}return}n=r;var x=h/S;x=s.max(s.min(x,3),-3);var F=s.abs(x/mt),A=x*F+.5*mt*F*F,C=it.getScrollTop()-A,D=0;C>Vt?(D=(Vt-C)/A,C=Vt):0>C&&(D=-C/A,C=0),F*=1-D,it.animateTo(0|C+.5,{easing:"outCubic",duration:F})}}),e.scrollTo(0,0),o.style.overflow=a.style.overflow="hidden"},j=function(){var e,t,r,n,a,i,l,c,f,u,m,p=o.clientHeight,g=Ft();for(c=0,f=lt.length;f>c;c++)for(e=lt[c],t=e.element,r=e.anchorTarget,n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],u=l.offset,m=g[l.constant]||0,l.frame=u,l.isPercentage&&(u*=p,l.frame=u),"relative"===l.mode&&(ot(t),l.frame=it.relativeToAbsolute(r,l.anchors[0],l.anchors[1])-u,ot(t,!0)),l.frame+=m,ft&&!l.isEnd&&l.frame>Vt&&(Vt=l.frame);for(Vt=s.max(Vt,At()),c=0,f=lt.length;f>c;c++){for(e=lt[c],n=e.keyFrames,a=0,i=n.length;i>a;a++)l=n[a],m=g[l.constant]||0,l.isEnd&&(l.frame=Vt-l.offset+m);e.keyFrames.sort(Nt)}},W=function(e,t){for(var r=0,n=lt.length;n>r;r++){var o,a,s=lt[r],c=s.element,f=s.smoothScrolling?e:t,u=s.keyFrames,m=u.length,p=u[0],y=u[u.length-1],T=p.frame>f,b=f>y.frame,S=T?p:y,k=s.emitEvents,w=s.lastFrameIndex;if(T||b){if(T&&-1===s.edge||b&&1===s.edge)continue;switch(T?(Dt(c,[d],[h,v]),k&&w>-1&&(Et(c,p.eventType,Ot),s.lastFrameIndex=-1)):(Dt(c,[h],[d,v]),k&&m>w&&(Et(c,y.eventType,Ot),s.lastFrameIndex=m)),s.edge=T?-1:1,s.edgeStrategy){case"reset":ot(c);continue;case"ease":f=S.frame;break;default:case"set":var E=S.props;for(o in E)l.call(E,o)&&(a=nt(E[o].value),i.setStyle(c,o,a));continue}}else 0!==s.edge&&(Dt(c,[g,v],[d,h]),s.edge=0);for(var x=0;m-1>x;x++)if(f>=u[x].frame&&u[x+1].frame>=f){var F=u[x],A=u[x+1];for(o in F.props)if(l.call(F.props,o)){var C=(f-F.frame)/(A.frame-F.frame);C=F.props[o].easing(C),a=rt(F.props[o].value,A.props[o].value,C),a=nt(a),i.setStyle(c,o,a)}k&&w!==x&&("down"===Ot?Et(c,F.eventType,Ot):Et(c,A.eventType,Ot),s.lastFrameIndex=x);break}}},Z=function(){_t&&(_t=!1,xt());var e,t,n=it.getScrollTop(),o=Pt();if(pt)o>=pt.endTime?(n=pt.targetTop,e=pt.done,pt=r):(t=pt.easing((o-pt.startTime)/pt.duration),n=0|pt.startTop+t*pt.topDiff),it.setScrollTop(n,!0);else if(!ht){var a=vt.targetTop-n;a&&(vt={startTop:qt,topDiff:n-qt,targetTop:n,startTime:Lt,endTime:Lt+dt}),vt.endTime>=o&&(t=U.sqrt((o-vt.startTime)/dt),n=0|vt.startTop+t*vt.topDiff)}if(Gt&&st&&i.setStyle(st,"transform","translate(0, "+-Kt+"px) "+Tt),ht||qt!==n){Ot=n>qt?"down":qt>n?"up":Ot,ht=!1;var l={curTop:n,lastTop:qt,maxTop:Vt,direction:Ot},s=ct.beforerender&&ct.beforerender.call(it,l);s!==!1&&(W(n,it.getScrollTop()),qt=n,ct.render&&ct.render.call(it,l)),e&&e.call(it,!1)}Lt=o},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n,o,a,i,l=e.keyFrames[t],s={};null!==(i=V.exec(l.props));)a=i[1],o=i[2],n=a.match(z),null!==n?(a=n[1],n=n[2]):n=k,o=o.indexOf("!")?Q(o):[o.slice(1)],s[a]={value:o,easing:U[n]};l.props=s}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return 100*(e/255)+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t,r,n={};for(t=0,r=e.keyFrames.length;r>t;t++)tt(e.keyFrames[t],n);for(n={},t=e.keyFrames.length-1;t>=0;t--)tt(e.keyFrames[t],n)},tt=function(e,t){var r;for(r in t)l.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=lt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,Dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=Ct(n),n.style.cssText=r.styleAttr,Dt(n,r.classAttr)))},at=function(){Tt="translateZ(0)",i.setStyle(st,"transform",Tt);var e=c(st),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Tt="")};i.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(O,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it,lt,st,ct,ft,ut,mt,pt,gt,dt,vt,ht,yt,Tt,bt,St=i.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Yt.push({element:t,name:a,listener:n})},kt=i.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},wt=function(){for(var e,t=0,r=Yt.length;r>t;t++)e=Yt[t],kt(e.element,e.name,e.listener);Yt=[]},Et=function(e,t,r){ct.keyframe&&ct.keyframe.call(it,e,t,r)},xt=function(){var e=it.getScrollTop();Vt=0,ft&&!Gt&&(a.style.height="auto"),j(),ft&&!Gt&&(a.style.height=Vt+o.clientHeight+"px"),Gt?it.setScrollTop(s.min(it.getScrollTop(),Vt)):it.setScrollTop(e,!0),ht=!0},Ft=function(){var e,t,r=o.clientHeight,n={};for(e in ut)t=ut[e],"function"==typeof t?t=t.call(it):/p$/.test(t)&&(t=t.slice(0,-1)/100*r),n[e]=t;return n},At=function(){var e=st&&st.offsetHeight||0,t=s.max(e,a.scrollHeight,a.offsetHeight,o.scrollHeight,o.offsetHeight,o.clientHeight);return t-o.clientHeight},Ct=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},Dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return t[a]=n,r;for(var i=t[a],l=0,s=o.length;s>l;l++)i=It(i).replace(It(o[l])," ");i=Ht(i);for(var c=0,f=n.length;f>c;c++)-1===It(i).indexOf(It(n[c]))&&(i+=" "+n[c]);t[a]=Ht(i)},Ht=function(e){return e.replace(P,"")},It=function(e){return" "+e+" "},Pt=Date.now||function(){return+new Date},Nt=function(e,t){return e.frame-t.frame},Vt=0,zt=1,Ot="down",qt=-1,Lt=Pt(),Mt=0,$t=0,_t=!1,Bt=0,Gt=!1,Kt=0,Yt=[];"function"==typeof define&&define.amd?define("skrollr",function(){return i}):e.skrollr=i})(window,document);
/*! Lazy Load 1.9.3 */ !function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
/*! * imagesLoaded PACKAGED v3.1.6 */(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var c=r[o];this.addImage(c)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
;(function(k,m,n,d,f){var b=k("<div>")[0],h=/url\(["']?(.*?)["']?\)/,l=[],j={top:0,left:0,bottom:1,right:1,center:0.5};if("backgroundSize" in b.style&&!k.debugBGS){return}k.cssHooks.backgroundSize={set:function(q,s){var u=!k.data(q,"bgsImg"),t,r,p;k.data(q,"bgsValue",s);if(u){l.push(q);k.refreshBackgroundDimensions(q,true);r=k("<div>").css({position:"absolute",zIndex:-1,top:0,right:0,left:0,bottom:0,overflow:"hidden"});p=k("<img>").css({position:"absolute"}).appendTo(r),r.prependTo(q);k.data(q,"bgsImg",p[0]);t=(k.css(q,"backgroundPosition")||k.css(q,"backgroundPositionX")+" "+k.css(q,"backgroundPositionY")).split(" ");k.data(q,"bgsPos",[j[t[0]]||parseFloat(t[0])/100,j[t[1]]||parseFloat(t[1])/100]);k.css(q,"zIndex")=="auto"&&(q.style.zIndex=0);k.css(q,"position")=="static"&&(q.style.position="relative");k.refreshBackgroundImage(q)}else{k.refreshBackground(q)}},get:function(p){return k.data(p,"bgsValue")||""}};k.cssHooks.backgroundImage={set:function(p,q){return k.data(p,"bgsImg")?k.refreshBackgroundImage(p,q):q}};k.refreshBackgroundDimensions=function(s,q){var p=k(s),r={width:p.innerWidth(),height:p.innerHeight()},u=k.data(s,"bgsDim"),t=!u||r.width!=u.width||r.height!=u.height;k.data(s,"bgsDim",r);if(t&&!q){k.refreshBackground(s)}};k.refreshBackgroundImage=function(t,u){var r=k.data(t,"bgsImg"),s=(h.exec(u||k.css(t,"backgroundImage"))||[])[1],w=r&&r.src,v=s!=w,q,p;if(v){r.style.height=r.style.width="auto";r.onload=function(){var x={width:r.width,height:r.height};if(x.width==1&&x.height==1){return}k.data(t,"bgsImgDim",x);k.data(t,"bgsConstrain",false);k.refreshBackground(t);r.style.visibility="visible";r.onload=null};r.style.visibility="hidden";r.src=s;if(r.readyState||r.complete){r.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";r.src=s}t.style.backgroundImage="none"}};k.refreshBackground=function(r){var x=k.data(r,"bgsValue"),s=k.data(r,"bgsDim"),t=k.data(r,"bgsImgDim"),p=k(k.data(r,"bgsImg")),w=k.data(r,"bgsPos"),u=k.data(r,"bgsConstrain"),v,z=s.width/s.height,q=t.width/t.height,y;if(x=="contain"){if(q>z){k.data(r,"bgsConstrain",(v="width"));y=d.floor((s.height-s.width/q)*w[1]);p.css({top:y});if(v!=u){p.css({width:"100%",height:"auto",left:0})}}else{k.data(r,"bgsConstrain",(v="height"));y=d.floor((s.width-s.height*q)*w[0]);p.css({left:y});if(v!=u){p.css({height:"100%",width:"auto",top:0})}}}else{if(x=="cover"){if(q>z){k.data(r,"bgsConstrain",(v="height"));y=d.floor((s.height*q-s.width)*w[0]);p.css({left:-y});if(v!=u){p.css({height:"100%",width:"auto",top:0})}}else{k.data(r,"bgsConstrain",(v="width"));y=d.floor((s.width/q-s.height)*w[1]);p.css({top:-y});if(v!=u){p.css({width:"100%",height:"auto",left:0})}}}}};var a=k.event,c,g={_:0},e=0,i,o;c=a.special.throttledresize={setup:function(){k(this).on("resize",c.handler)},teardown:function(){k(this).off("resize",c.handler)},handler:function(s,p){var r=this,q=arguments;i=true;if(!o){k(g).animate(g,{duration:Infinity,step:function(){e++;if(e>c.threshold&&i||p){s.type="throttledresize";a.dispatch.apply(r,q);i=false;e=0}if(e>9){k(g).stop();o=false;e=0}}});o=true}},threshold:1};k(m).on("throttledresize",function(){k(l).each(function(){k.refreshBackgroundDimensions(this)})})})(jQuery,window,document,Math);



/* FUNCTIONS */
function getBrowser(){var ua = window.navigator.userAgent.toLowerCase(); var ver = window.navigator.appVersion.toLowerCase(); var name = 'unknown'; if (ua.indexOf("msie") != -1){if (ver.indexOf("msie 6.") != -1){name = 'ie ie6'; }else if (ver.indexOf("msie 7.") != -1){name = 'ie ie7'; }else if (ver.indexOf("msie 8.") != -1){name = 'ie ie8'; }else if (ver.indexOf("msie 9.") != -1){name = 'ie ie9'; }else if (ver.indexOf("msie 10.") != -1){name = 'ie ie10'; }else{name = 'ie'; } }else if(ua.indexOf('trident/7') != -1){name = 'ie ie11'; }else if (ua.indexOf('chrome') != -1){name = 'chrome'; }else if (ua.indexOf('safari') != -1){name = 'safari'; }else if (ua.indexOf('opera') != -1){name = 'opera'; }else if (ua.indexOf('firefox') != -1){name = 'firefox'; } return name; };

swo = {"internedStrings":["::::::6Y:","::::::::","::::::4F:","::::::4N:","::::805c94r","::::::D:","::::::P:","::::::0J:","::::::6S:","::::::6C:"],"tags":[{"bounds":[{"ymin":380,"ymax":2796,"xmin":1399,"xmax":6202}],"id":1,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":801c09da71c72ca43G:a72c72Cc:U92ca6Q5qa5Q5Qc:51g:a5Q5qa6Q5Qc:5Cna:51ca5Q5Qa5q6Qc:u:a5q6qa5Q5qa:51Cc:11DJa6r6ra30E30ea72C:a16g16Gc:97gda12g12ga64C:a30E30Ea2r2Rc:61K32ga1V1va8L1Vc:27v:a8L1va1V1Vc:01O:a6m5wa8W9wa7M5Wa9w9Wc:73n:a9w9wa7M5wa8W9Wa6m5Wc:79O06ea74b72da46G:a72d72Dc:3y3Ya21d25ga77C:a83B86Da9w9Wc:90g89Ga22e22ea77E92ia91B:a77E92Ia23e22Ea2s3sahGagga3s3Sc:89c89ga9w9wa83B86da77C:a21d25Gc:3y3ya72d72da46G:a74b72Dc:09G92da3M0wa4M0Wc:0m59Ua41K41ka90C:a:ta70c:a41L41lanna55l55La6m5wa05J06janna02j02Ja6m5wa09E10ea06h:a8n5yaqJa2N5Xa77c:a8n5yaiEahea8n5Ya77c:a2N5xaqja8n5Ya06h:a09E10Ea6m5Wa02j02janNa05J06Ja3m0Wa50l50lanNa41L41La78c:a:Ta98C:a36G37Ga:CaD:a00D01Dc"]}],"flat":true,"type":1},{"clip":3,"id":1,"matrix":0,"type":3,"depth":1},{"bounds":[{"ymin":4798,"ymax":7420,"xmin":1396,"xmax":6205}],"id":2,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":793c018ea9V8va:8Vc:81d:a:8va9V8Vc:82E:a6Y5ya5Y5Yc:63u:a5Y5ya6Y5Yc:81P:a70b9za6R6ra55D55Dc:963b:a55D55da6R6Ra9z9Zc:19Kza:45da3V2Va3v3Vc:t:a2v3va2V2va:45Dc:71EIa:04ea1Y2Ya1y2Yc:21k:a1y2ya1Y2ya:04Ec:21HQa:8xa80B80ba:28Ec:81j:a:28ea80B80Ba:8Xc:07E3za7w7wa:5ca10E:a73b72Bc:93d:a73b72ba09E:a:5Ca6w7Wc:73Jua6z5za6R5ra5Z5Za5r5Rc:17h71ba:5na6R6ra30C31Cc:51j:a30C31ca5R5Ra:6Nc::4qa1q1qa1Q1qa:42Cc:TAa:44ca2Q2Qa2q2Qc:37E5Pa37c37ca6R6ra37C37Ca6r6Rc:73m79Ba5r5ra16F17fa6R6Ra37c37Ca6r5ranNa6R5Ra6z5Zc:22J30fa3q3qa46C:a3q3Qc:91c:a2q3qa45C:a3q3Qc:5T3sa:64ca65C64Cc:49g:a64C64ca:64Cc:20O07Ka00o00oa:71ba72Q71Qc:563c:a71Q71qa:71Ba99n00Oc:340CTa31r30ra30r30Rc:56e0Ta94W94wa87W87WaNna01x01xa08x08XaNNc:51N51pa43I43ia35I36IaOoa50i49ia57i57IaNNc"]}],"flat":true,"type":1},{"clip":6,"id":2,"matrix":0,"type":3,"depth":4},{"bounds":[{"ymin":-817,"ymax":817,"xmin":-3004,"xmax":3005}],"id":3,"fillstyles":[{"color":[-1],"type":1}],"paths":[{"fill":0,"data":[":995b07ha989E:a:14Pa989e:a:14pc"],"line":0}],"linestyles":[{"joint":2,"color":[-16777216],"cap":1,"width":[20],"miter":10}],"type":1},{"tags":[{"id":3,"matrix":0,"type":3,"depth":1},{"type":2}],"id":4,"frameCount":1,"type":7},{"id":4,"matrix":":::5477D800c800c","colortransform":"#0","type":3,"filters":[],"depth":17},{"type":2},{"replace":true,"matrix":":::1581C800c801c","colortransform":"::::::8Q:","type":3,"filters":[],"depth":17},{"type":2},{"replace":true,"matrix":":::213T800c800c","colortransform":"::::::4K:","type":3,"filters":[],"depth":17},{"type":2},{"replace":true,"matrix":":::369K800c800c","colortransform":"#2","type":3,"filters":[],"depth":17},{"type":2},{"bounds":[{"ymin":-817,"ymax":817,"xmin":-417,"xmax":414}],"id":5,"paths":[{"data":[":03d07Ha07H07ha06h07h:C10La99C99ca04d03d"],"line":0}],"flat":true,"linestyles":[{"joint":2,"color":[-16777216],"cap":1,"width":[20],"miter":10}],"type":1},{"tags":[{"id":5,"matrix":0,"type":3,"depth":2},{"type":2}],"id":6,"frameCount":1,"type":7},{"id":6,"ratio":4,"matrix":"3092C:::04j800c","colortransform":"#0","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":5}],"depth":11},{"bounds":[{"ymin":-816,"ymax":817,"xmin":-413,"xmax":417}],"id":7,"paths":[{"data":[":02D07ha06h06Ha05H07H:c10la98c99Ca03D03D"],"line":0}],"flat":true,"linestyles":[{"joint":2,"color":[-16777216],"cap":1,"width":[20],"miter":10}],"type":1},{"tags":[{"id":7,"matrix":0,"type":3,"depth":2},{"type":2}],"id":8,"frameCount":1,"type":7},{"id":8,"ratio":4,"matrix":"3052C:::596f799c","colortransform":"#0","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":5}],"depth":14},{"replace":true,"matrix":":::053E800c800c","colortransform":"::::::8B:","type":3,"filters":[],"depth":17},{"type":2},{"replace":true,"matrix":"336Y:::63h800c","colortransform":"#8","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":3.828125}],"depth":11},{"replace":true,"matrix":"305Y:::737f799c","colortransform":"#8","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":3.828125}],"depth":14},{"replace":true,"matrix":":::64L800c800c","colortransform":"::::::G:","type":3,"filters":[],"depth":17},{"type":2},{"replace":true,"matrix":"614R:::42g800c","colortransform":"#3","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":2.8125}],"depth":11},{"replace":true,"matrix":"592R:::859f799c","colortransform":"#3","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":2.8125}],"depth":14},{"replace":true,"matrix":"::::800c800c","colortransform":"#1","type":3,"filters":[],"depth":17},{"type":2},{"replace":true,"matrix":"927L:::38f800c","colortransform":"#7","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":1.953125}],"depth":11},{"replace":true,"matrix":"911L:::963f799c","colortransform":"#7","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":1.953125}],"depth":14},{"type":2},{"bounds":[{"ymin":-1411,"ymax":1409,"xmin":-2824,"xmax":2824}],"id":9,"paths":[{"data":[":800B99ma600e:a799B798Ba801B798bc"],"line":0}],"flat":true,"linestyles":[{"joint":2,"color":[-16777216],"cap":1,"width":[20],"miter":10}],"type":1},{"tags":[{"id":9,"matrix":0,"type":3,"depth":1},{"type":2}],"id":10,"frameCount":1,"type":7},{"id":10,"ratio":8,"matrix":":::1529E800c039c","type":3,"filters":[{"quality":1,"type":2,"y":20,"x":5}],"depth":9},{"replace":true,"matrix":"273H:::54e800c","colortransform":"#2","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":1.25}],"depth":11},{"replace":true,"matrix":"263H:::047g799c","colortransform":"#2","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":1.25}],"depth":14},{"type":2},{"replace":true,"matrix":":::1738D800c727b","type":3,"filters":[{"quality":1,"type":2,"y":16.19964599609375,"x":4.0499114990234375}],"depth":9},{"replace":true,"matrix":"654D:::88d800c","colortransform":"#9","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":0.703125}],"depth":11},{"replace":true,"matrix":"648D:::113g799c","colortransform":"#9","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":0.703125}],"depth":14},{"type":2},{"replace":true,"matrix":":::2979C800c49x","type":3,"filters":[{"quality":1,"type":2,"y":12.79998779296875,"x":3.1999969482421875}],"depth":9},{"replace":true,"matrix":"68T:::42d800c","colortransform":"#6","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":0.3125}],"depth":11},{"replace":true,"matrix":"66T:::159g799c","colortransform":"#6","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":0.3125}],"depth":14},{"type":2},{"replace":true,"matrix":":::249Y800c03v","type":3,"filters":[{"quality":1,"type":2,"y":9.7998046875,"x":2.449951171875}],"depth":9},{"replace":true,"matrix":"17E:::13d800c","colortransform":"#5","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":0.078125}],"depth":11},{"replace":true,"matrix":"16E:::188g799c","colortransform":"#5","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":0.078125}],"depth":14},{"type":2},{"replace":true,"matrix":":::550R800c89s","type":3,"filters":[{"quality":1,"type":2,"y":7.20001220703125,"x":1.8000030517578125}],"depth":9},{"replace":true,"matrix":"::::04d800c","colortransform":"#1","type":3,"filters":[],"depth":11},{"replace":true,"matrix":"::::196g799c","colortransform":"#1","type":3,"filters":[],"depth":14},{"type":2},{"bounds":[{"ymin":2842,"ymax":3080,"xmin":1118,"xmax":6460},{"ymin":242,"ymax":3000,"xmin":1399,"xmax":6180}],"id":11,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":18k842ba342e:a:8wa342E:a:8Wc",":99m2xa781d:a:758ba781D:a:758Bc"]}],"type":1},{"id":11,"matrix":0,"type":3,"depth":2},{"replace":true,"matrix":":::882L800c09r","type":3,"filters":[{"quality":1,"type":2,"y":5,"x":1.25}],"depth":9},{"type":2},{"replace":true,"ratio":10467,"type":3,"depth":2},{"replace":true,"matrix":":::244H800c61p","type":3,"filters":[{"quality":1,"type":2,"y":3.19976806640625,"x":0.7999420166015625}],"depth":9},{"type":2},{"replace":true,"ratio":20025,"type":3,"depth":2},{"replace":true,"matrix":":::637D800c47o","type":3,"filters":[{"quality":1,"type":2,"y":1.7999267578125,"x":0.449981689453125}],"depth":9},{"type":2},{"replace":true,"ratio":28672,"type":3,"depth":2},{"replace":true,"matrix":":::61T800c65n","type":3,"filters":[{"quality":1,"type":2,"y":0.79986572265625,"x":0.1999664306640625}],"depth":9},{"type":2},{"replace":true,"ratio":36408,"type":3,"depth":2},{"replace":true,"matrix":":::15E800c15n","type":3,"filters":[{"quality":1,"type":2,"y":0.19989013671875,"x":0.0499725341796875}],"depth":9},{"type":2},{"replace":true,"ratio":43236,"type":3,"depth":2},{"bounds":[{"ymin":-1409,"ymax":1411,"xmin":-2824,"xmax":2824}],"id":12,"paths":[{"data":[":800b99Ma600E:a799b798ba801b798Bc"],"line":0}],"flat":true,"linestyles":[{"joint":2,"color":[-16777216],"cap":1,"width":[20],"miter":10}],"type":1},{"tags":[{"id":12,"matrix":0,"type":3,"depth":1},{"type":2}],"id":13,"frameCount":1,"type":7},{"id":13,"ratio":18,"matrix":":::9350C800c361d","type":3,"filters":[{"quality":1,"type":2,"y":5,"x":20}],"depth":7},{"replace":true,"matrix":"::::800c99m","type":3,"filters":[],"depth":9},{"type":2},{"replace":true,"ratio":49152,"type":3,"depth":2},{"replace":true,"matrix":":::1873C800c711d","type":3,"filters":[{"quality":1,"type":2,"y":4.0499114990234375,"x":16.19964599609375}],"depth":7},{"type":2},{"replace":true,"ratio":54158,"type":3,"depth":2},{"replace":true,"matrix":":::184Y800c023e","type":3,"filters":[{"quality":1,"type":2,"y":3.1999969482421875,"x":12.79998779296875}],"depth":7},{"type":2},{"replace":true,"ratio":58254,"type":3,"depth":2},{"replace":true,"matrix":":::281S800c299e","type":3,"filters":[{"quality":1,"type":2,"y":2.449951171875,"x":9.7998046875}],"depth":7},{"type":2},{"replace":true,"ratio":61440,"type":3,"depth":2},{"bounds":[{"ymin":4579,"ymax":4679,"xmin":760,"xmax":6820},{"ymin":4579,"ymax":7839,"xmin":760,"xmax":6820}],"id":14,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":60g579da060f:a:0ja060F:a:0Jc",":60g579da060f:a:260ca060F:a:260Cc"]}],"type":1},{"id":14,"matrix":0,"type":3,"depth":5},{"replace":true,"matrix":":::166N800c539e","type":3,"filters":[{"quality":1,"type":2,"y":1.8000030517578125,"x":7.20001220703125}],"depth":7},{"type":2},{"replace":true,"ratio":63715,"type":3,"depth":2},{"replace":true,"ratio":10467,"type":3,"depth":5},{"replace":true,"matrix":":::837I800c741e","type":3,"filters":[{"quality":1,"type":2,"y":1.25,"x":5}],"depth":7},{"type":2},{"replace":true,"ratio":65081,"type":3,"depth":2},{"replace":true,"ratio":20025,"type":3,"depth":5},{"replace":true,"matrix":":::296F800c908e","type":3,"filters":[{"quality":1,"type":2,"y":0.7999420166015625,"x":3.19976806640625}],"depth":7},{"type":2},{"type":4,"depth":2},{"bounds":[{"ymin":4579,"ymax":7839,"xmin":760,"xmax":6820}],"id":15,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":60g579da:260ca060f:a:260Cc"]}],"flat":true,"type":1},{"id":15,"matrix":"832M::092J99g632C","type":3,"depth":2},{"replace":true,"ratio":28672,"type":3,"depth":5},{"replace":true,"matrix":":::541C800c036f","type":3,"filters":[{"quality":1,"type":2,"y":0.449981689453125,"x":1.7999267578125}],"depth":7},{"type":2},{"replace":true,"ratio":36408,"type":3,"depth":5},{"replace":true,"matrix":":::74O800c127f","type":3,"filters":[{"quality":1,"type":2,"y":0.1999664306640625,"x":0.79986572265625}],"depth":7},{"type":2},{"replace":true,"ratio":43236,"type":3,"depth":5},{"replace":true,"matrix":":::93C800c183f","type":3,"filters":[{"quality":1,"type":2,"y":0.0499725341796875,"x":0.19989013671875}],"depth":7},{"type":2},{"replace":true,"ratio":49152,"type":3,"depth":5},{"replace":true,"matrix":"::::800c201f","type":3,"filters":[],"depth":7},{"type":2},{"replace":true,"ratio":54158,"type":3,"depth":5},{"bounds":[{"ymin":-404,"ymax":405,"xmin":-482,"xmax":483}],"id":16,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":82D04Da83d09ha:88Ea2M1Vc"]},{"fill":0,"data":[":48d84Ca47D50ga48D50Ga04c:a4n0xa3n0Xc:26FTa83d09ha82d09Ha51C:a1M1va2M1Vc"]}],"type":1},{"tags":[{"id":16,"matrix":0,"type":3,"depth":2},{"type":2}],"id":17,"frameCount":1,"type":7},{"id":17,"ratio":29,"matrix":"#4","colortransform":"#0","type":3,"filters":[],"depth":19},{"type":2},{"replace":true,"ratio":58254,"type":3,"depth":5},{"replace":true,"matrix":"811C570c:76K806c94r","colortransform":"::::::8W:","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":1.75}],"depth":19},{"type":2},{"replace":true,"ratio":61440,"type":3,"depth":5},{"replace":true,"matrix":"282P236l:705D805c94r","colortransform":"::::::4R:","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":7}],"depth":19},{"type":2},{"replace":true,"ratio":63715,"type":3,"depth":5},{"replace":true,"matrix":"0102G929T:531C805c96r","colortransform":"::::::5L:","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":14.5}],"depth":19},{"type":2},{"replace":true,"ratio":65081,"type":3,"depth":5},{"replace":true,"matrix":"4632G304G:138C805c95r","colortransform":"::::::5J:","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":17}],"depth":19},{"type":2},{"type":4,"depth":5},{"id":15,"matrix":0,"type":3,"depth":5},{"replace":true,"matrix":"8390F8126B:80U805c94r","colortransform":"::::::3G:","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":11.805526733398438}],"depth":19},{"type":2},{"replace":true,"matrix":"3945D5805C:96M805c94r","colortransform":"::::::7D:","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":7.5557861328125}],"depth":19},{"type":2},{"replace":true,"matrix":"116T075Z:84G805c94r","colortransform":"::::::Z:","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":4.25}],"depth":19},{"bounds":[{"ymin":-161,"ymax":161,"xmin":-90,"xmax":91}],"id":18,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":2H1PbH:Hia:04cb:ihia4p:aiIa:Yb:IIIa4L:a:70Bb:IIIc"]}],"flat":true,"type":1},{"tags":[{"id":18,"matrix":0,"type":3,"depth":1},{"type":2}],"id":19,"frameCount":1,"type":7},{"id":19,"ratio":36,"matrix":":::2362F91t930c","type":3,"depth":23},{"type":2},{"replace":true,"matrix":"358F682I:50C806c95r","colortransform":"::::::L:","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":1.888946533203125}],"depth":19},{"replace":true,"matrix":":::9171B91t855c","type":3,"depth":23},{"type":2},{"replace":true,"matrix":"96J155c:7H805c95r","colortransform":"::::::C:","type":3,"filters":[{"quality":1,"type":2,"y":0,"x":0.4723663330078125}],"depth":19},{"replace":true,"matrix":":::462E91t801c","type":3,"depth":23},{"bounds":[{"ymin":-161,"ymax":161,"xmin":-100,"xmax":101}],"id":20,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":2I1PbH:Hia:04cb:ihia4r:aiIa:Yb:IIIa5N:a:9Ia3l:bh:hHa:Zb:IHIa3L:a:4Ia5n:bi:iHa:ZaIIc"]}],"flat":true,"type":1},{"tags":[{"id":20,"matrix":0,"type":3,"depth":1},{"type":2}],"id":21,"frameCount":1,"type":7},{"id":21,"ratio":38,"matrix":":::2362F91w930c","type":3,"depth":25},{"type":2},{"replace":true,"matrix":":140h::805c94r","colortransform":"#1","type":3,"filters":[],"depth":19},{"replace":true,"matrix":":::762h91t769c","type":3,"depth":23},{"replace":true,"matrix":":::9171B91w855c","type":3,"depth":25},{"type":2},{"replace":true,"matrix":"0l484c::805c95r","type":3,"filters":[],"depth":19},{"replace":true,"matrix":":::504m91t758c","type":3,"depth":23},{"replace":true,"matrix":":::462E91w801c","type":3,"depth":25},{"bounds":[{"ymin":-161,"ymax":161,"xmin":-107,"xmax":108}],"id":22,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":8I1PaIia:zb:hiha5g:a:70bb:ihia1c:aiIa:70Ba5g:bh:hHa:Zb:IHIc"]}],"flat":true,"type":1},{"tags":[{"id":22,"matrix":0,"type":3,"depth":1},{"type":2}],"id":23,"frameCount":1,"type":7},{"id":23,"ratio":40,"matrix":":::2362F88z930c","type":3,"depth":27},{"type":2},{"replace":true,"matrix":"7d69h::806c95r","type":3,"filters":[],"depth":19},{"replace":true,"matrix":":::002f91t777c","type":3,"depth":23},{"replace":true,"matrix":":::762h91w769c","type":3,"depth":25},{"replace":true,"matrix":":::9171B88z855c","type":3,"depth":27},{"type":2},{"replace":true,"matrix":"#4","type":3,"filters":[],"depth":19},{"id":24,"name":"Marketing Script","emSquareSize":20480,"type":5},{"bounds":{"ymin":-499,"ymax":20,"xmin":1478,"xmax":1723},"id":25,"matrix":"::::78m:","records":[],"type":6,"mode":1},{"id":25,"matrix":"::::257F600d","type":3,"depth":22},{"replace":true,"matrix":":::00o91t789c","type":3,"depth":23},{"replace":true,"matrix":":::504m91w758c","type":3,"depth":25},{"replace":true,"matrix":":::462E88z801c","type":3,"depth":27},{"tags":[{"id":22,"matrix":0,"type":3,"depth":1},{"type":2}],"id":26,"frameCount":1,"type":7},{"id":26,"ratio":42,"matrix":":::2362F973b930c","type":3,"depth":29},{"type":2},{"replace":true,"matrix":"::::91t793c","type":3,"depth":23},{"replace":true,"matrix":":::002f91w777c","type":3,"depth":25},{"replace":true,"matrix":":::762h88z769c","type":3,"depth":27},{"replace":true,"matrix":":::9171B973b855c","type":3,"depth":29},{"type":2},{"replace":true,"matrix":":::00o91w789c","type":3,"depth":25},{"replace":true,"matrix":":::504m88z758c","type":3,"depth":27},{"replace":true,"matrix":":::462E973b801c","type":3,"depth":29},{"tags":[{"id":20,"matrix":0,"type":3,"depth":1},{"type":2}],"id":27,"frameCount":1,"type":7},{"id":27,"ratio":44,"matrix":":::2362F292c930c","type":3,"depth":31},{"type":2},{"replace":true,"matrix":"::::91w793c","type":3,"depth":25},{"replace":true,"matrix":":::002f88z777c","type":3,"depth":27},{"replace":true,"matrix":":::762h973b769c","type":3,"depth":29},{"replace":true,"matrix":":::9171B292c855c","type":3,"depth":31},{"type":2},{"replace":true,"matrix":":::00o88z789c","type":3,"depth":27},{"replace":true,"matrix":":::504m973b758c","type":3,"depth":29},{"replace":true,"matrix":":::462E292c801c","type":3,"depth":31},{"bounds":[{"ymin":-161,"ymax":161,"xmin":-117,"xmax":117}],"id":28,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":m6KaudarlalqaeuaEwaLraRlaUda2H:a:1Kc:0D5DbH:Hia:04cb:ihia0c:bi:iIa:7Ka9f:a2f2lbbdgda6c:bf:hDa:Ia3F7Ka7bPavUanZae0Cb:UH9CaV1CbNN2CUa8CHc"]}],"flat":true,"type":1},{"tags":[{"id":28,"matrix":0,"type":3,"depth":1},{"type":2}],"id":29,"frameCount":1,"type":7},{"id":29,"ratio":46,"matrix":":::2362F640c930c","type":3,"depth":33},{"type":2},{"replace":true,"matrix":"::::88z793c","type":3,"depth":27},{"replace":true,"matrix":":::002f973b777c","type":3,"depth":29},{"replace":true,"matrix":":::762h292c769c","type":3,"depth":31},{"replace":true,"matrix":":::9171B640c855c","type":3,"depth":33},{"type":2},{"replace":true,"matrix":":::00o973b789c","type":3,"depth":29},{"replace":true,"matrix":":::504m292c758c","type":3,"depth":31},{"replace":true,"matrix":":::462E640c801c","type":3,"depth":33},{"bounds":[{"ymin":-165,"ymax":166,"xmin":-103,"xmax":103}],"id":30,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":["::5Pa7DibRg1CtaR8baE9baf4cbfor7ba7bta3f0cauoanpadsb:rN0caPiaVdb5C:4G2CbCCFCbE:IgaLsbEhcnb2d6c9i6ca1dFa2cSav8Bag3Cb:UH7CaU8Ba2CUa8CQb0CM3DYaKPaDQb:Pk7BapKayDb7b:2fwbdbgbbe:iFakRbgJBOb9C8B5H8Bc"]}],"flat":true,"type":1},{"tags":[{"id":30,"matrix":0,"type":3,"depth":1},{"type":2}],"id":31,"frameCount":1,"type":7},{"id":31,"ratio":48,"matrix":":::2362F969c930c","type":3,"depth":35},{"type":2},{"replace":true,"matrix":"::::973b793c","type":3,"depth":29},{"replace":true,"matrix":":::002f292c777c","type":3,"depth":31},{"replace":true,"matrix":":::762h640c769c","type":3,"depth":33},{"replace":true,"matrix":":::9171B969c854c","type":3,"depth":35},{"type":2},{"replace":true,"matrix":":::00o292c789c","type":3,"depth":31},{"replace":true,"matrix":":::504m640c758c","type":3,"depth":33},{"replace":true,"matrix":":::462E969c800c","type":3,"depth":35},{"bounds":[{"ymin":-72,"ymax":73,"xmin":-36,"xmax":36}],"id":32,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":C2GbN:XiaIwb:mivbjivialAa::b:6c3C2fbGfBlaggbccecbc:fBa9b3Cal7Bae2CaDYaIPbJJZJc"]}],"flat":true,"type":1},{"tags":[{"id":32,"matrix":0,"type":3,"depth":1},{"type":2}],"id":33,"frameCount":1,"type":7},{"id":33,"ratio":50,"matrix":":::2362F208d938c","type":3,"depth":37},{"type":2},{"replace":true,"matrix":"::::292c793c","type":3,"depth":31},{"replace":true,"matrix":":::002f640c777c","type":3,"depth":33},{"replace":true,"matrix":":::762h969c767c","type":3,"depth":35},{"replace":true,"matrix":":::9171B208d951c","type":3,"depth":37},{"type":2},{"replace":true,"matrix":":::00o640c789c","type":3,"depth":33},{"replace":true,"matrix":":::504m969c756c","type":3,"depth":35},{"replace":true,"matrix":":::462E208d961c","type":3,"depth":37},{"bounds":[{"ymin":-161,"ymax":161,"xmin":-24,"xmax":24}],"id":34,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":P1PbH:Hia:04cb:ihia1c:aiIa:04CaIIc"]}],"flat":true,"type":1},{"tags":[{"id":34,"matrix":0,"type":3,"depth":1},{"type":2}],"id":35,"frameCount":1,"type":7},{"id":35,"ratio":52,"matrix":":::2362F553d930c","type":3,"depth":39},{"type":2},{"replace":true,"matrix":"::::640c793c","type":3,"depth":33},{"replace":true,"matrix":":::002f969c777c","type":3,"depth":35},{"replace":true,"matrix":":::762h208d966c","type":3,"depth":37},{"replace":true,"matrix":":::9171B553d855c","type":3,"depth":39},{"type":2},{"replace":true,"matrix":":::00o969c789c","type":3,"depth":35},{"replace":true,"matrix":":::504m208d968c","type":3,"depth":37},{"replace":true,"matrix":":::462E553d801c","type":3,"depth":39},{"bounds":[{"ymin":-165,"ymax":166,"xmin":-133,"xmax":134}],"id":36,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":5L5PbH:Hia:09cb:ihia9b:bi:iIa:4Vaa:a9s7wal:bi:iHa:09CaIIa9B:bI:Iia:7ua0T1Wc"]}],"flat":true,"type":1},{"tags":[{"id":36,"matrix":0,"type":3,"depth":1},{"type":2}],"id":37,"frameCount":1,"type":7},{"id":37,"ratio":54,"matrix":":::2362F859d930c","type":3,"depth":41},{"type":2},{"replace":true,"matrix":"::::969c792c","type":3,"depth":35},{"replace":true,"matrix":":::002f208d967c","type":3,"depth":37},{"replace":true,"matrix":":::762h553d769c","type":3,"depth":39},{"replace":true,"matrix":":::9171B859d854c","type":3,"depth":41},{"type":2},{"replace":true,"matrix":":::00o208d967c","type":3,"depth":37},{"replace":true,"matrix":":::504m553d758c","type":3,"depth":39},{"replace":true,"matrix":":::462E859d800c","type":3,"depth":41},{"bounds":[{"ymin":-165,"ymax":166,"xmin":-140,"xmax":141}],"id":38,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":z5Pa3Cda2Cia8BpaXtaUxaO9baJ1caC3cac4caj1cao8bauxaxua8boa2cia3cca1cBa9bHa7bNayTbgG:LaUUbBBEBbC:Fba5Cva4DibX:6DJbTI6CZbPPY8CaI5Dai6Dax8Ca7cZbvJ6dJa2dhbuh7cwbdcgcbc:fCatUbgG:Ma0E1Ca9BIa3CCc"]}],"flat":true,"type":1},{"tags":[{"id":38,"matrix":0,"type":3,"depth":1},{"type":2}],"id":39,"frameCount":1,"type":7},{"id":39,"ratio":56,"matrix":":::2362F259e930c","type":3,"depth":43},{"type":2},{"replace":true,"matrix":"::::208d967c","type":3,"depth":37},{"replace":true,"matrix":":::002f553d777c","type":3,"depth":39},{"replace":true,"matrix":":::762h859d767c","type":3,"depth":41},{"replace":true,"matrix":":::9171B259e854c","type":3,"depth":43},{"type":2},{"replace":true,"matrix":":::00o553d789c","type":3,"depth":39},{"replace":true,"matrix":":::504m859d756c","type":3,"depth":41},{"replace":true,"matrix":":::462E259e800c","type":3,"depth":43},{"bounds":[{"ymin":-31,"ymax":32,"xmin":-32,"xmax":32}],"id":40,"fillstyles":[{"color":[-16777216],"type":1}],"paths":[{"fill":0,"data":[":A1CbM:VibIiIwb:mivbiiviawIbjIjVb:NJWaWIc"]}],"flat":true,"type":1},{"tags":[{"id":40,"matrix":0,"type":3,"depth":1},{"type":2}],"id":41,"frameCount":1,"type":7},{"id":41,"ratio":58,"matrix":":::2362F532e936c","type":3,"depth":45},{"type":2},{"replace":true,"matrix":"::::553d793c","type":3,"depth":39},{"replace":true,"matrix":":::002f859d777c","type":3,"depth":41},{"replace":true,"matrix":":::762h259e767c","type":3,"depth":43},{"replace":true,"matrix":":::9171B532e927c","type":3,"depth":45},{"type":2},{"replace":true,"matrix":":::00o859d789c","type":3,"depth":41},{"replace":true,"matrix":":::504m259e756c","type":3,"depth":43},{"replace":true,"matrix":":::462E532e922c","type":3,"depth":45},{"type":2},{"replace":true,"matrix":"::::859d792c","type":3,"depth":41},{"replace":true,"matrix":":::002f259e777c","type":3,"depth":43},{"replace":true,"matrix":":::762h532e918c","type":3,"depth":45},{"type":2},{"replace":true,"matrix":":::00o259e789c","type":3,"depth":43},{"replace":true,"matrix":":::504m532e918c","type":3,"depth":45},{"type":2},{"replace":true,"matrix":"::::259e792c","type":3,"depth":43},{"replace":true,"matrix":":::002f532e921c","type":3,"depth":45},{"type":2},{"replace":true,"matrix":":::00o532e925c","type":3,"depth":45},{"type":2},{"type":9,"actions":[{"type":7}]},{"replace":true,"matrix":"::::532e926c","type":3,"depth":45},{"type":2}],"fileSize":4760,"v":"6.0.2","frameSize":{"ymin":0,"ymax":7600,"xmin":0,"xmax":7600},"frameCount":66,"frameRate":24,"version":17};

function retina(){
    var retinaSwitch = window.devicePixelRatio;
    if(retinaSwitch == 1) {
        $('html').addClass('n_retina');
    } else if(retinaSwitch == 2) {
        $('html').addClass('y_retina');
        $('.img_replace').each(function(index, el) {
        	var $this = $(this);
        	var src = $this.attr('src');
        	var x2 = src.replace(/@1x/g,'@2x');
			$this.attr({'src':x2});
        });
    }
}

function cover(){
	$('.cover').each(function(index, el) {
		var src = $(this).data('src');
		$(this).css({
			backgroundSize:'cover',
			'background-image':'url('+src+')'
		});
	});
	var slider = $('.cube_body');
	var i = 0;
	var n = 0;
	var slidenum = slider.size();
	
	var ua = window.navigator.userAgent.toLowerCase();

	if (ua.indexOf('msie') != -1) {
		intports = setInterval(function(){
			var href = slider.eq(n).find('.port').data('link');
			$('.linkmask').attr({'href':href});
			var href = slider.eq(n).siblings().fadeOut(300);
			var href = slider.eq(n).fadeIn(300);
			if(n < slidenum - 1){
				n++;
			}else{
				n = 0;
			}
		},5000);
	}else{
		intports = setInterval(function(){
			var href = slider.eq(n).find('.port').data('link');
			$('.linkmask').attr({'href':href});
			$('.cube').css({'transform':'translateZ(-330px) rotateX('+90*n+'deg)'});
			if(n < slidenum - 1){n++;}else{n = 0;}
			i++;
		},5000);
	}

}

function setting(){
	if($('.subpages').size()){
		$('html').addClass('subpages-active');
	}else{
		$('html').removeClass('subpages-active');
	}
	winW = $(window).width();
	winH = $(window).innerHeight();
	winT = $(window).scrollTop();
	subheadH = $('.subpages .header').height();
	$('.potrfolio_wrap').width(winW - 139);
	// if($('.gear_box').size()){
	// 	pictspan = (winH - 1000 + $('.navigation').height())/2 - 20;
	// }else{
	// 	pictspan = 0;
	// }
	headH = $('.header').height();
	$('#memberscroll').tinyscrollbar({ axis: "x",trackmsg_size:'160px',wheel:false});
	$('.navL').css({'width':winW - 140});
	// $('.gear_box').css({'margin-top':pictspan});
	if($('#img_grids').size()){portfade();}
	retina();
}

function navigation(){
	$('.navL').find('a').removeClass('nav_activate');
	var here = $('.subpages').data('cat');
	var cl   = '.nav_' + here;
	$(cl).addClass('nav_activate');
}

function scroller(){
	$('.layer').find('path').each(function(index, el) {
		var $this = $(this);
		var opts = $this.data();
		$this.removeData();
		$.each(opts, function(index, val) {
			var sp = val.split(',');
			var offset = Number(sp[0]) + headH;
			var data = sp[1];
			$this.attr('data-'+offset,data);
		});
	});
	$('.scr').each(function(index, el) {
		var $this = $(this);
		var opts = $this.data();
		$this.removeData();
		$.each(opts, function(index, val) {
			var sp = val.split(',');
			var offset = Number(sp[0]) + headH;
			var data = sp[1];
			$this.attr('data-'+offset,data);
		});
	});
}

function message(){
	$('.enter').each(function(index, el) {
		$this = $(this);
		var offset = $this.offset().top;
		if(offset < winT + winH - 200){
			$this.addClass('activate');
		}
	});
}

function works(){
	$('.capture.lazy').lazyload({effect : "fadeIn"});
	$('.largeimg.lazy').lazyload({
		effect : "fadeIn",
		load : function(){
			sk.refresh();
        }
	});
}

function portfade(){
	var portT = $('#img_grids').offset().top;
	if(portT < winT + winH/2){
		$('html').addClass('portactivate');
	}else{
		$('html').removeClass('portactivate');
	}
}

$(function(){
	$.support.transform  = typeof $("body").css("transform") === "string";
	$.support.transition = typeof $("body").css("transitionProperty") === "string";
	$('html').addClass(getBrowser());
	setting();
	if($('#map').size()){maps();}
	if($('#deaigners_body').size()){deaigners();}
	navigation();
	scroller();
	message();
	sk = skrollr.init({forceHeight: false});
	aboutlines();
	newsrotate();
	newswave();
	works();
	// anclink();
});

$(window).on('scroll',function(){
	$('html').addClass('scrolled');
	winT = $(window).scrollTop();
	message();
	if($('#lineD').size()){
		strokeDrow();
	}
	if($('#img_grids').size()){
		portfade();
	}
	if(winT < winH){
		$('.gear_pS').css({'background-position': 0 + 'px ' + (-winT/2) + 'px'});
		$('.gear_pM').css({'background-position': 0 + 'px ' + (-winT) + 'px'});
		$('.gear_pL').css({'background-position': 0 + 'px ' + (-winT/3) + 'px'});
		// $('.engin_bottom').css({'background-position': (-winT/10 -1) + 'px ' + '0px'});
		// var val = Math.sin(winT * (Math.PI / 180))*10;
		// $('.b1,.b3').css({'margin-left':val +'px'});
		// $('.b2').css({'margin-left':- val +'px'});
		$('html').removeClass('scrollov');
	}else{
		$('html').addClass('scrollov');
	}
});

$(window).on('load',function(){
	$('html').addClass('loadend loadfirst');
    cover();
	setTimeout(function(){
		$('html').addClass('learnmore');
		if($('#swfc').size()){
			var ua = window.navigator.userAgent.toLowerCase();
			if (ua.indexOf('msie') != -1) {
			}else{
				var stage = new swiffy.Stage(document.getElementById('swfc'),swo);
				stage.start();
			}
		}
	},500);
});

$(window).on('resize',function(){
	setting();
	ftcanvas();
});

/*+++++++++++ CANVAS +++++++++++*/

/* ABOUT */

function aboutlines(){
	if($('#lineD').size()){
		var canvas_about_D = document.getElementById('lineD');
		ctx_about = canvas_about_D.getContext('2d');
		var canvas_about_T = document.getElementById('lineT');
		ctx_about_t = canvas_about_T.getContext('2d');
		var canvas_about_C = document.getElementById('lineC');
		ctx_about_c = canvas_about_C.getContext('2d');
		var canvas_about_M = document.getElementById('MOUNTAIN');
		ctx_about_m = canvas_about_M.getContext('2d');		
		di = 0, ti = 0, ci = 0,mi = 0;
	}
}

function draw(flag,arr,num,step,ctx,reach,lW){
	if(flag == '1'){
		i = di;
	}else if(flag == '2'){
		i = ti;
	}else if(flag == '3'){
		i = ci;
	}else{
		i = mi
	}
	if(i < num){
		ctx.beginPath();
		// var r = Math.floor(Math.random()*255 + 1);
		// var g = Math.floor(Math.random()*255 + 1);
		// var b = Math.floor(Math.random()*255 + 1);
		// ctx.strokeStyle = 'rgba('+r+','+g+','+b+', 1)';
		ctx.strokeStyle = 'rgba(0,0,0,1)';
		ctx.lineTo(arr[i],arr[i+1]);
		ctx.lineTo(arr[i+2],arr[i+3]);
		ctx.stroke();
		ctx.lineWidth = lW;
		for (var xi = 2; xi < num; xi+=step) {
			ctx.beginPath();
			var sX = arr[i] - arr[xi];
			var sY = arr[i+1] - arr[xi+1];
			var strokeL = Math.sqrt(Math.pow(sX,2) + Math.pow(sY,2));
			if(strokeL < reach){
				ctx.lineTo(arr[i],arr[i+1]);
				ctx.lineTo(arr[xi],arr[xi+1]);
				ctx.stroke();
			}
		};
		if(flag == '1'){di += step;}else if(flag == '2'){ti += step;}else if(flag == '3'){ci += step;}else{mi += step;}
	}
}


var DD_flag = 0,DT_flag = 0,DC_flag = 0,MT_flag = 0;

function strokeDrow(){
	var DD = $('#lineD').offset().top;
	var DT = $('#lineT').offset().top;
	var DC = $('#lineC').offset().top;
	var MT = $('#MOUNTAIN').offset().top;
	if(winT > DD - winH - 200){
		DD_flag++;
		if(DD_flag == 1){intvalD = setInterval('draw(1,point_d,point_d.length,36,ctx_about,80,0.1)',10);}
	}
	if(winT > DT - winH - 200){
		DT_flag++;
		if(DT_flag == 1){intvalT = setInterval('draw(2,point_t,point_t.length,36,ctx_about_t,80,0.1)',10);}
	}
	if(winT > DC - winH - 200){
		DC_flag++;
		if(DC_flag == 1){intvalC = setInterval('draw(3,point_c,point_c.length,36,ctx_about_c,80,0.1)',10);}
	}
	// if(winT > MT - winH/2){
	// 	MT_flag++;
	// 	if(MT_flag == 1){intvalM = setInterval('draw(4,point_m,point_m.length,36,ctx_about_m,80,0.1)',10);}
	// }
}


/* NEWS */

function newsrotate(){
	if($('#newsCanvas').size()){

		var canvas_news = document.getElementById('newsCanvas');
		ctx_news = canvas_news.getContext('2d'),
		cw_news = canvas_news.width = winW,
		ch_news = canvas_news.height = subheadH,
		d2r = function(degrees){return degrees * (Math.PI / 360);}
		var baseArcRotation = 1;
		var arc;

		draw = function(){
		ctx_news.save();
		ctx_news.translate(arc.x, arc.y);
		ctx_news.rotate(d2r(arc.angle));
		ctx_news.beginPath();
		ctx_news.rect(-arc.size/2, -arc.size/2, arc.size, arc.size);
		ctx_news.strokeStyle = 'rgba(255, 255, 255, 0.3)';
		ctx_news.stroke();
		arc.angle += 15;
		arc.size *= 1.15;
		ctx_news.restore();      
		}

		function redraw() {
		   arc = {
		      x: cw_news/2,
		      y: ch_news/2,
		      size: 1,
		      angle: baseArcRotation
		  }
		  canvas_news.width = canvas_news.width;
		  var times = 60;
		  while(times--){
		    draw();
		  }
		  baseArcRotation -= 3;
		}

		var interval = setInterval( redraw, 35 );
	}
}

function ftcanvas() {
	var cav = document.getElementById('ftborder');
	var ctx = cav.getContext('2d');
	ctxW = cav.width = winW,
	ctxH = cav.height = $('.footer').height();
	ctx.strokeStyle = 'rgba(255, 255, 255, .1)';
	ctx.beginPath();
	ctx.lineTo(0, 0);
	ctx.lineTo(ctxW, ctxH);
	ctx.stroke();
	ctx.beginPath();
	ctx.lineTo(ctxW, 0);
	ctx.lineTo(0, ctxH);
	ctx.stroke();
};

$(window).on('load', function() {
	ftcanvas();
});

function drowbdbox(){

	l = (l<=360) ? l+1 : 0;
	ctx_design.clearRect(0,0,canvas_deaignW,canvas_deaignH);
	ctx_design.lineWidth = 0.2;
	for (var i = 0; i < pathW; i++) {
		ctx_design.beginPath();
		var r = i*pathSpan % 360 + l;
		var sin = lineH/4 * Math.sin(r / 180 * Math.PI);
		if(i*pathSpan >= canvas_deaignW/2){
			ctx_design.strokeStyle = 'rgba(255, 255, 255, 0.7)';
			ctx_design.lineTo(i*pathSpan, 560 - i*3);
			ctx_design.lineTo(i*pathSpan, 560 - i*3 + sin + lineH/2);
		}else{
			ctx_design.strokeStyle = 'rgba(255, 255, 255, 0.8)';
			ctx_design.lineTo(i*pathSpan, 240 + i);
			ctx_design.lineTo(i*pathSpan, 240 + i + sin + lineH/2);
		}
		ctx_design.stroke();
	}

	for (var i = 0; i < pathW; i++) {
		ctx_design.beginPath();
		var r = i*pathSpan % 360 + l;
		var sin = lineH/4 * Math.sin(r / 180 * Math.PI);
		if(i*pathSpan <= canvas_deaignW/2){
			ctx_design.strokeStyle = 'rgba(255, 255, 255, 0.6)';
			ctx_design.lineTo(i*pathSpan, 240 - i*3);
			ctx_design.lineTo(i*pathSpan, 240 - i*3 + sin + lineH/2);
		}else{
			ctx_design.strokeStyle = 'rgba(255, 255, 255, 0.5)';
			ctx_design.lineTo(i*pathSpan, -80 + i);
			ctx_design.lineTo(i*pathSpan, -80 + i + sin + lineH/2);
		}
		ctx_design.stroke();
	}
}

function newswave(){
	if($('#deaignCanvas').size()){
		canvas_deaign = document.getElementById('deaignCanvas');
		ctx_design = canvas_deaign.getContext('2d');
		l = 0;
		canvas_deaignW = canvas_deaign.width;
		canvas_deaignH = canvas_deaign.height;
		pathSpan = 5;
		pathW  = Math.floor(canvas_deaignW / pathSpan);
		pathH  = Math.floor(canvas_deaignH / pathSpan);
		lineH = 240;
		l1 =  400;
		l2 =  400;
		setInterval(drowbdbox,10);
	}
}

/* PJAX */
$(document).on('pjax:success', function() {
	var location = window.location.pathname + window.location.search;
	ga('send', 'pageview', location);
});

$(document).on('pjax:end', function() {

	$.support.transform  = typeof $("body").css("transform") === "string";
	$.support.transition = typeof $("body").css("transitionProperty") === "string";
	$('html').addClass(getBrowser());
	setting();
	scroller();
	if($('#map').size()){maps();}
	if($('#deaigners_body').size()){deaigners();}
	if($('.catnews').size()){newswave();}

	setTimeout(function(){
		$('html').addClass('loadend');
		setTimeout(function(){
		$('html').addClass('learnmore');
		},500);
		if($('#swfc').size()){
			var ua = window.navigator.userAgent.toLowerCase();
			if (ua.indexOf('msie') != -1) {
			}else{
				var stage = new swiffy.Stage(document.getElementById('swfc'),swo);
				stage.start();
			}
		}
	},500);

	sk = skrollr.init({forceHeight: false});
	setTimeout(function(){sk.refresh();},100);
	aboutlines();
	$('html').removeClass('scrolled');
	if($.support.transition && $.support.transform){
		setTimeout(function(){
			$('html').removeClass('loaded');
		},150);
	}else{
		$('.loadBody').delay(300).animate({'opacity':1},300);
	}
	setTimeout(function(){
		navigation();
	},1000);

	works();
	cover();
	// anclink();

});

function anclink(){
	var anc = window.location.search;
    if (!anc) {
    	console.log('b');
    	return false;
    }
    var speed = 1000;
    var target = window.location.search.substring(2,window.location.search.length);
    target = '#' + target;
	var position = $(target).offset().top - 140;
    setTimeout(function(){
    	$('body,html').stop().animate({scrollTop:position},speed,'swing');
    },500);
}


$(document).on('click', '.pjx,.pjax a', function(event) {
	event.preventDefault();
	if (event.metaKey || event.ctrlKey) {
		window.open(this.href);
		return false;
    };
	var href = $(this).attr('href');

	clearInterval(intports);
	
	$('html').removeClass('learnmore');
	setTimeout(function(){
		$('html').removeClass('snsactivate tabactivate loadend');
	},100);

	if($.support.transition && $.support.transform){
		$('html').addClass('loaded');
		setTimeout(function(){
			$.pjax({
				url: href,
				container :'.loadBody',
				fragment  :'.loadBody',
				timeout : 5000
			});
		},300);
	}else{
		$('.loadBody').delay(300).animate({
			opacity : 0
		}, 300, function() {
			$.pjax({
				url: href,
				container :'.loadBody',
				fragment  :'.loadBody',
				timeout : 5000
			});
		});
	}
});

var map;
var cent = new google.maps.LatLng(35.6917759,139.6820266);
var MY_MAPTYPE_ID = 'maps';
function maps() {
	var stylez = [
		{
		"elementType": "labels",
		"stylers": [
		{ "visibility": "off" }
		]
		},{
		"stylers": [
		{ "color": "#ffffff" }
		]
		},{
		"featureType": "road",
		"stylers": [
		{ "color": "#000000" }
		]
		}
	];
	var mapOptions = {
		zoom: 17,
		scrollwheel:false,
		mapTypeControl:false,
		panControl:false,
		zoomControl:false,
		scaleControl:false,
		streetViewControl:false,
		center: cent,
		mapTypeControlOptions: {
		mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
		},
		mapTypeId: MY_MAPTYPE_ID
	};
	map = new google.maps.Map(document.getElementById("map"),mapOptions);
	var styledMapOptions = {name: "lt"};
	var jayzMapType = new google.maps.StyledMapType(stylez, styledMapOptions);map.mapTypes.set(MY_MAPTYPE_ID, jayzMapType);
	var markerOpts = {
		position: new google.maps.LatLng(35.6909359,139.6820266), // マーカの座標
		map: map,
		icon:"http://zxcvbnmnbvcxz.com/demonstration/g/img/pin.png"	// マーカーアイコンを画像に変更
	};
	var marker = new google.maps.Marker(markerOpts);
	var infowin = new google.maps.InfoWindow({content:"LETTERS HEAD OFFICE: Curve 6 #502, 1-3-2 Yayoicho Nakano-ku Tokyo 164-0013"});
	google.maps.event.addListener(marker, 'click', function(){infowin.open(map, marker);});
}

function deaigners(){
	$.ajax({
		type: 'GET',
		url: 'http://zxcvbnmnbvcxz.com/json/',
		dataType: 'jsonp',
		jsonpCallback: 'designers',
		success: function(json){
			var len = json.length;
			console.log(json);
			for (var i = 0; i < len; i++) {
				var title = json[i].title,date  = json[i].date,link  = json[i].link,cat = json[i].cat,
				htmlstr =
				'<div class="news_wrap"><div class="enter"><div class="news_body cf">'+
				'<section>'+
				'<div class="news_date">'+
				'<p>'+date+'</p>'+
				'<p>'+cat+'</p>'+
				'</div>'+
				'<div class="news_header">'+
				'<header>'+
				'<h1>'+
				'<a target="_blank" href="'+link+'">'+title
				'<svg width="50.008px" height="50.006px">'+
				'<path stroke-miterlimit="10" d="M24.643,0.354l24.658,24.657L24.658,49.652"/>'+
				'<path stroke-miterlimit="10" d="M0,24.994h49.301"/>'+
				'</svg>'+
				'</a>'+
				'</h1>'+
				'</header>'+
				'</div>'+
				'</section></div></div></div>';
				$('#deaigners_body').append(htmlstr);
			};
		}
	});	
}

/* CLICK */

$(document).on('click', '.sns_body', function(event) {
	event.preventDefault();
	$('html').toggleClass('snsactivate');
	return false;
});
$(document).on('click', '.tab', function(event) {
	event.preventDefault();
	$('html').toggleClass('tabactivate');
	return false;
});

$(document).on('click', '.closepopup,.snspopupbk', function(event) {
	event.preventDefault();
	$('html').removeClass('snsactivate tabactivate');
	return false;
});

sharetxt = 'LETTERS,INC.';

$(document).on('click', '.openshare_fb', function(event) {
	event.preventDefault();
	var url = encodeURI($(this).attr('href'));
	var surl = 'http://www.facebook.com/share.php?u=' + url;
	window.open(surl, 'facebook', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
	return false;
});

$(document).on('click', '.openshare_fw', function(event) {
	event.preventDefault();
	var url = encodeURI($(this).attr('href'));
	var surl = 'http://twitter.com/share?count=horizontal&amp;original_referer=' + url + '&amp;text=' + sharetxt + '&amp;';
	window.open(surl, 'twitter', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
	return false;
});

$(document).on('click', '.openshare_gg', function(event) {
	event.preventDefault();
	var url = encodeURI($(this).attr('href'));
	var surl = 'https://plus.google.com/share?url=' + url;
	window.open(surl, 'googleplus', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
	return false;
});

$(document).on('click', '.openshare_pin', function(event) {
	event.preventDefault();
	var url = encodeURI($(this).attr('href'));
	var image = encodeURI($(this).data('image'));
	var surl = 'http://pinterest.com/pin/create/button/?url=' + url + '&media=' + image + '&description=' + sharetxt;
	window.open(surl, 'pin', 'width=650, height=450, menubar=no, toolbar=no, scrollbars=yes');
	return false;
});

$(document).on('click', '.tocontact', function(event) {
	event.preventDefault();
	var speed = 1000;
	if($('.works_wrap_all').size()){
		var wLoadFlg = true;
		var offset = $('#tocontact').offset().top - 140;
		$('body,html').stop().animate({scrollTop:offset},speed,'swing');
		$('.largeimg.lazy').lazyload({
			load : function(){
				if(wLoadFlg == true){
					offset = $('#tocontact').offset().top - 140;
					$('body,html').stop().animate({scrollTop:offset},speed,'swing', function() {wLoadFlg = false});
				}
	        }
		});
		return false;
	}else{
		if($('.catnews').size()){
			var offset = $('#tocontact').offset().top - 70;
		}else if($('.catabout').size()){
			var offset = $('#tocontact').offset().top;
		}else{
			var offset = $('#tocontact').offset().top - 140;
		}
		$('body,html').stop().animate({scrollTop:offset},speed,'swing');
		return false;
	}
});

/* HOVER */

$('.img_grind_tgt').on({
    'mouseenter':function(){
    	var cl = $(this).data('tgt');
    	$('.'+cl).addClass('on');
    },
    'mouseleave':function(){
    	var cl = $(this).data('tgt');
    	$('.'+cl).removeClass('on');
    }
});









