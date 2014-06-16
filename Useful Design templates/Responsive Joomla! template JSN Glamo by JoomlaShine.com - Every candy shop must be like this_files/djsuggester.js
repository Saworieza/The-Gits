/**
 * @version $Id: djsuggester.js 30 2014-04-14 14:28:37Z szymon $
 * @package DJ-Suggerster
 * @copyright Copyright (C) 2012 DJ-Extensions.com, All rights reserved.
 * @license DJ-Extensions.com Proprietary Use License
 * @author url: http://dj-extensions.com
 * @author email contact@dj-extensions.com
 * @developer Szymon Woronowski - szymon.woronowski@design-joomla.eu
 */
!function($){var g={options:{animIn:'showBox',animOut:'hideBox',animSpeed:'normal'},init:function(a){g.box=a;g.anim=g.hasAnim();g.offset=a.retrieve('offset');g.delay=a.retrieve('delay');g.hideInTop=a.retrieve('hideInTop');if(g.anim){g.options.animIn=a.retrieve('animIn');g.options.animOut=a.retrieve('animOut');g.options.animSpeed=a.retrieve('animSpeed')}a.addClass('hideBox animated '+g.options.animSpeed);g.hideBox();g.closedByUser=false;var b=null;window.addEvent('scroll',function(){clearTimeout(b);b=setTimeout(function(){g.scroll()},50)});g.closeBtn=a.getElement('.dj-close');if(g.closeBtn){g.closeBtn.addEvent('click',function(){g.closedByUser=true;g.hideBox()})}setTimeout(function(){if(g.anim)g.box.removeClass('hideBox')},750);if(window.getScrollSize().y<=window.getSize().y){setTimeout(function(){g.showBox()},g.delay*1000)}},scroll:function(){var a=window.getScrollSize().y-window.getScroll().y-window.getSize().y;if(g.hideInTop&&window.getScroll().y==0){g.hideBox()}else if(a<g.offset||a==0){if(a==0)g.closedByUser=false;if(!g.closedByUser)g.showBox()}else{if(g.hideInTop)g.hideBox();g.closedByUser=false}},showBox:function(){g.box.removeClass(g.options.animOut);g.box.addClass(g.options.animIn)},hideBox:function(){g.box.removeClass(g.options.animIn);g.box.addClass(g.options.animOut)},hasAnim:function(){var b=document.body||document.documentElement;var s=b.style;if(typeof s=='undefined')return false;if(typeof s['animation']=='string')return true;v=['Moz','Webkit','Khtml','O','ms','Icab'];for(var i=0;i<v.length;i++){if(typeof s[v[i]+'Animation']=='string')return true}return false}};window.addEvent('domready',function(){var c=$$('div.dj-suggester');if(!c.length)return;var d=new Element('div#dj-suggester');var e=new Element('div#dj-suggester-in');var f=new Element('span.dj-close');e.inject(d);f.inject(e);d.inject(document.id(document.body));if(c.length)c.each(function(a,b){if(b==0){d.store('offset',a.get('data-offset'));d.store('delay',a.get('data-delay'));d.store('hideInTop',a.get('data-hideintop'));d.store('animIn',a.get('data-anim-in'));d.store('animOut',a.get('data-anim-out'));d.store('animSpeed',a.get('data-anim-speed'))}a.removeProperty('data-offset');a.removeProperty('data-delay');a.removeProperty('data-hideintop');a.removeProperty('data-anim-in');a.removeProperty('data-anim-out');a.removeProperty('data-anim-speed')});c=$$('div.dj-suggester.first');if(c.length)c.each(function(a){a.inject(e);a.setStyle('display','block')});c=$$('div.dj-suggester.replace');if(c.length){c.each(function(a){a.inject(e);a.setStyle('display','block')})}else{c=$$('div.dj-suggester.component');if(c.length)c.each(function(a){if(a.hasClass('content'))d.addClass('suggest-content');if(a.hasClass('djcatalog'))d.addClass('suggest-djcatalog');a.inject(e);a.setStyle('display','block')})}c=$$('div.dj-suggester.last');if(c.length)c.each(function(a){a.inject(e);a.setStyle('display','block')});g.init(d)})}(document.id);