/*
 *
 * classie - class helper functions - https://github.com/ded/bonzo
 *
 */

;(function(e){"use strict";function t(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function s(e,t){var s=n(e,t)?i:r;s(e,t)}var n,r,i;if("classList"in document.documentElement){n=function(e,t){return e.classList.contains(t)};r=function(e,t){e.classList.add(t)};i=function(e,t){e.classList.remove(t)}}else{n=function(e,n){return t(n).test(e.className)};r=function(e,t){if(!n(e,t)){e.className=e.className+" "+t}};i=function(e,n){e.className=e.className.replace(t(n)," ")}}var o={hasClass:n,addClass:r,removeClass:i,toggleClass:s,has:n,add:r,remove:i,toggle:s};if(typeof define==="function"&&define.amd){define(o)}else{e.classie=o}})(window);

/*
 *
 * validator - v1.11.1 - https://github.com/jzaefferer/jquery-validation
 *
 */

;(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."),void 0;var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){if(t(this[0]).is("form"))return this.validate().form();var e=!0,i=t(this[0].form).validate();return this.each(function(){e=e&&i.element(this)}),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s=this[0];if(e){var r=t.data(s.form,"validator").settings,n=r.rules,a=t.validator.staticRules(s);switch(e){case"add":t.extend(a,t.validator.normalizeRule(i)),delete a.messages,n[s.name]=a,i.messages&&(r.messages[s.name]=t.extend(r.messages[s.name],i.messages));break;case"remove":if(!i)return delete n[s.name],a;var u={};return t.each(i.split(/\s/),function(t,e){u[e]=a[e],delete a[e]}),u}}var o=t.validator.normalizeRules(t.extend({},t.validator.classRules(s),t.validator.attributeRules(s),t.validator.dataRules(s),t.validator.staticRules(s)),s);if(o.required){var l=o.required;delete o.required,o=t.extend({required:l},o)}return o}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(t)).hide())},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,"");i.settings[s]&&i.settings[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i=this.groups={};t.each(this.settings.groups,function(e,s){"string"==typeof s&&(s=s.split(/\s/)),t.each(s,function(t,s){i[s]=e})});var s=this.settings.rules;t.each(s,function(e,i){s[e]=t.validator.normalizeRule(i)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",e).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){e=this.validationTargetFor(this.clean(e)),this.lastElement=e,this.prepareElement(e),this.currentElements=t(e);var i=this.check(e)!==!1;return i?delete this.invalid[e.name]:this.invalid[e.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),i},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e=0;for(var i in t)e++;return e},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.replace(" ",".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i=t(e).attr("type"),s=t(e).val();return"radio"===i||"checkbox"===i?t("input[name='"+t(e).attr("name")+"']:checked").val():"string"==typeof s?s.replace(/\r/g,""):s},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s=t(e).rules(),r=!1,n=this.elementValue(e);for(var a in s){var u={method:a,parameters:s[a]};try{if(i=t.validator.methods[a].call(this,n,e,u.parameters),"dependency-mismatch"===i){r=!0;continue}if(r=!1,"pending"===i)return this.toHide=this.toHide.not(this.errorsFor(e)),void 0;if(!i)return this.formatAndAdd(e,u),!1}catch(o){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+u.method+"' method.",o),o}}return r?void 0:(this.objectLength(s)&&this.successList.push(e),!0)},customDataMessage:function(e,i){return t(e).data("msg-"+i.toLowerCase())||e.attributes&&t(e).attr("data-msg-"+i.toLowerCase())},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;arguments.length>t;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e;for(t=0;this.errorList[t];t++){var i=this.errorList[t];this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s=this.errorsFor(e);s.length?(s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),s.html(i)):(s=t("<"+this.settings.errorElement+">").attr("for",this.idOrName(e)).addClass(this.settings.errorClass).html(i||""),this.settings.wrapper&&(s=s.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(s).length||(this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e))),!i&&this.settings.success&&(s.text(""),"string"==typeof this.settings.success?s.addClass(this.settings.success):this.settings.success(s,e)),this.toShow=this.toShow.add(s)},errorsFor:function(e){var i=this.idOrName(e);return this.errors().filter(function(){return t(this).attr("for")===i})},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(t){return this.checkable(t)&&(t=this.findByName(t.name).not(this.settings.ignore)[0]),t},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,0>this.pendingRequest&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i={},s=t(e),r=s[0].getAttribute("type");for(var n in t.validator.methods){var a;"required"===n?(a=s.get(0).getAttribute(n),""===a&&(a=!0),a=!!a):a=s.attr(n),/min|max/.test(n)&&(null===r||/number|range|text/.test(r))&&(a=Number(a)),a?i[n]=a:r===n&&"range"!==r&&(i[n]=!0)}return i.maxlength&&/-1|2147483647|524288/.test(i.maxlength)&&delete i.maxlength,i},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule-"+i.toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return delete e[s],void 0;if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(e.min&&e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),e.minlength&&e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],3>i.length&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(""+new Date(t))},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i=0,s=0,r=!1;t=t.replace(/\D/g,"");for(var n=t.length-1;n>=0;n--){var a=t.charAt(n);s=parseInt(a,10),r&&(s*=2)>9&&(s-=9),i+=s,r=!r}return 0===i%10},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(t.trim(e),i);return this.optional(i)||r>=s[0]&&s[1]>=r},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&i[1]>=t},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r=this.previousValue(i);if(this.settings.messages[i.name]||(this.settings.messages[i.name]={}),r.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=r.message,s="string"==typeof s&&{url:s}||s,r.old===e)return r.valid;r.old=e;var n=this;this.startRequest(i);var a={};return a[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:a,success:function(s){n.settings.messages[i.name].remote=r.originalMessage;var a=s===!0||"true"===s;if(a){var u=n.formSubmitted;n.prepareElement(i),n.formSubmitted=u,n.successList.push(i),delete n.invalid[i.name],n.showErrors()}else{var o={},l=s||n.defaultMessage(i,"remote");o[i.name]=r.message=t.isFunction(l)?l(e):l,n.invalid[i.name]=!0,n.showErrors(o)}r.valid=a,n.stopRequest(i,a)}},s)),"pending"}}}),t.format=t.validator.format})(jQuery),function(t){var e={};if(t.ajaxPrefilter)t.ajaxPrefilter(function(t,i,s){var r=t.port;"abort"===t.mode&&(e[r]&&e[r].abort(),e[r]=s)});else{var i=t.ajax;t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(e[n]&&e[n].abort(),e[n]=i.apply(this,arguments),e[n]):i.apply(this,arguments)}}}(jQuery),function(t){t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}(jQuery);

/*
 *
 * jquery form plugin - 3.20 - http://malsup.com/jquery/form
 *
 */

;(function(e){"use strict";function n(t){var n=t.data;if(!t.isDefaultPrevented()){t.preventDefault();e(this).ajaxSubmit(n)}}function r(t){var n=t.target;var r=e(n);if(!r.is("[type=submit],[type=image]")){var i=r.closest("[type=submit]");if(i.length===0){return}n=i[0]}var s=this;s.clk=n;if(n.type=="image"){if(t.offsetX!==undefined){s.clk_x=t.offsetX;s.clk_y=t.offsetY}else if(typeof e.fn.offset=="function"){var o=r.offset();s.clk_x=t.pageX-o.left;s.clk_y=t.pageY-o.top}else{s.clk_x=t.pageX-n.offsetLeft;s.clk_y=t.pageY-n.offsetTop}}setTimeout(function(){s.clk=s.clk_x=s.clk_y=null},100)}function i(){if(!e.fn.ajaxSubmit.debug)return;var t="[jquery.form] "+Array.prototype.join.call(arguments,"");if(window.console&&window.console.log){window.console.log(t)}else if(window.opera&&window.opera.postError){window.opera.postError(t)}}var t={};t.fileapi=e("<input type='file'/>").get(0).files!==undefined;t.formdata=window.FormData!==undefined;e.fn.ajaxSubmit=function(n){function T(t){var n=e.param(t).split("&");var r=n.length;var i={};var s,o;for(s=0;s<r;s++){o=n[s].split("=");i[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return i}function N(t){var i=new FormData;for(var s=0;s<t.length;s++){i.append(t[s].name,t[s].value)}if(n.extraData){var o=T(n.extraData);for(var u in o)if(o.hasOwnProperty(u))i.append(u,o[u])}n.data=null;var a=e.extend(true,{},e.ajaxSettings,n,{contentType:false,processData:false,cache:false,type:r||"POST"});if(n.uploadProgress){a.xhr=function(){var e=jQuery.ajaxSettings.xhr();if(e.upload){e.upload.onprogress=function(e){var t=0;var r=e.loaded||e.position;var i=e.total;if(e.lengthComputable){t=Math.ceil(r/i*100)}n.uploadProgress(e,r,i,t)}}return e}}a.data=null;var f=a.beforeSend;a.beforeSend=function(e,t){t.data=i;if(f)f.call(this,e,t)};return e.ajax(a)}function C(t){function T(e){var t=e.contentWindow?e.contentWindow.document:e.contentDocument?e.contentDocument:e.document;return t}function k(){function o(){try{var e=T(d).readyState;i("state = "+e);if(e&&e.toLowerCase()=="uninitialized")setTimeout(o,50)}catch(t){i("Server abort: ",t," (",t.name,")");_(x);if(b)clearTimeout(b);b=undefined}}var t=u.attr("target"),n=u.attr("action");s.setAttribute("target",h);if(!r){s.setAttribute("method","POST")}if(n!=f.url){s.setAttribute("action",f.url)}if(!f.skipEncodingOverride&&(!r||/post/i.test(r))){u.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"})}if(f.timeout){b=setTimeout(function(){y=true;_(S)},f.timeout)}var a=[];try{if(f.extraData){for(var l in f.extraData){if(f.extraData.hasOwnProperty(l)){if(e.isPlainObject(f.extraData[l])&&f.extraData[l].hasOwnProperty("name")&&f.extraData[l].hasOwnProperty("value")){a.push(e('<input type="hidden" name="'+f.extraData[l].name+'">').attr("value",f.extraData[l].value).appendTo(s)[0])}else{a.push(e('<input type="hidden" name="'+l+'">').attr("value",f.extraData[l]).appendTo(s)[0])}}}}if(!f.iframeTarget){p.appendTo("body");if(d.attachEvent)d.attachEvent("onload",_);else d.addEventListener("load",_,false)}setTimeout(o,15);s.submit()}finally{s.setAttribute("action",n);if(t){s.setAttribute("target",t)}else{u.removeAttr("target")}e(a).remove()}}function _(t){if(v.aborted||M){return}try{A=T(d)}catch(n){i("cannot access response document: ",n);t=x}if(t===S&&v){v.abort("timeout");E.reject(v,"timeout");return}else if(t==x&&v){v.abort("server abort");E.reject(v,"error","server abort");return}if(!A||A.location.href==f.iframeSrc){if(!y)return}if(d.detachEvent)d.detachEvent("onload",_);else d.removeEventListener("load",_,false);var r="success",s;try{if(y){throw"timeout"}var o=f.dataType=="xml"||A.XMLDocument||e.isXMLDoc(A);i("isXml="+o);if(!o&&window.opera&&(A.body===null||!A.body.innerHTML)){if(--O){i("requeing onLoad callback, DOM not available");setTimeout(_,250);return}}var u=A.body?A.body:A.documentElement;v.responseText=u?u.innerHTML:null;v.responseXML=A.XMLDocument?A.XMLDocument:A;if(o)f.dataType="xml";v.getResponseHeader=function(e){var t={"content-type":f.dataType};return t[e]};if(u){v.status=Number(u.getAttribute("status"))||v.status;v.statusText=u.getAttribute("statusText")||v.statusText}var a=(f.dataType||"").toLowerCase();var l=/(json|script|text)/.test(a);if(l||f.textarea){var h=A.getElementsByTagName("textarea")[0];if(h){v.responseText=h.value;v.status=Number(h.getAttribute("status"))||v.status;v.statusText=h.getAttribute("statusText")||v.statusText}else if(l){var m=A.getElementsByTagName("pre")[0];var g=A.getElementsByTagName("body")[0];if(m){v.responseText=m.textContent?m.textContent:m.innerText}else if(g){v.responseText=g.textContent?g.textContent:g.innerText}}}else if(a=="xml"&&!v.responseXML&&v.responseText){v.responseXML=D(v.responseText)}try{L=H(v,a,f)}catch(t){r="parsererror";v.error=s=t||r}}catch(t){i("error caught: ",t);r="error";v.error=s=t||r}if(v.aborted){i("upload aborted");r=null}if(v.status){r=v.status>=200&&v.status<300||v.status===304?"success":"error"}if(r==="success"){if(f.success)f.success.call(f.context,L,"success",v);E.resolve(v.responseText,"success",v);if(c)e.event.trigger("ajaxSuccess",[v,f])}else if(r){if(s===undefined)s=v.statusText;if(f.error)f.error.call(f.context,v,r,s);E.reject(v,"error",s);if(c)e.event.trigger("ajaxError",[v,f,s])}if(c)e.event.trigger("ajaxComplete",[v,f]);if(c&&!--e.active){e.event.trigger("ajaxStop")}if(f.complete)f.complete.call(f.context,v,r);M=true;if(f.timeout)clearTimeout(b);setTimeout(function(){if(!f.iframeTarget)p.remove();v.responseXML=null},100)}var s=u[0],o,a,f,c,h,p,d,v,m,g,y,b;var w=!!e.fn.prop;var E=e.Deferred();if(e("[name=submit],[id=submit]",s).length){alert('Error: Form elements must not have name or id of "submit".');E.reject();return E}if(t){for(a=0;a<l.length;a++){o=e(l[a]);if(w)o.prop("disabled",false);else o.removeAttr("disabled")}}f=e.extend(true,{},e.ajaxSettings,n);f.context=f.context||f;h="jqFormIO"+(new Date).getTime();if(f.iframeTarget){p=e(f.iframeTarget);g=p.attr("name");if(!g)p.attr("name",h);else h=g}else{p=e('<iframe name="'+h+'" src="'+f.iframeSrc+'" />');p.css({position:"absolute",top:"-1000px",left:"-1000px"})}d=p[0];v={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var n=t==="timeout"?"timeout":"aborted";i("aborting upload... "+n);this.aborted=1;if(d.contentWindow.document.execCommand){try{d.contentWindow.document.execCommand("Stop")}catch(r){}}p.attr("src",f.iframeSrc);v.error=n;if(f.error)f.error.call(f.context,v,n,t);if(c)e.event.trigger("ajaxError",[v,f,n]);if(f.complete)f.complete.call(f.context,v,n)}};c=f.global;if(c&&0===e.active++){e.event.trigger("ajaxStart")}if(c){e.event.trigger("ajaxSend",[v,f])}if(f.beforeSend&&f.beforeSend.call(f.context,v,f)===false){if(f.global){e.active--}E.reject();return E}if(v.aborted){E.reject();return E}m=s.clk;if(m){g=m.name;if(g&&!m.disabled){f.extraData=f.extraData||{};f.extraData[g]=m.value;if(m.type=="image"){f.extraData[g+".x"]=s.clk_x;f.extraData[g+".y"]=s.clk_y}}}var S=1;var x=2;var N=e("meta[name=csrf-token]").attr("content");var C=e("meta[name=csrf-param]").attr("content");if(C&&N){f.extraData=f.extraData||{};f.extraData[C]=N}if(f.forceSync){k()}else{setTimeout(k,10)}var L,A,O=50,M;var D=e.parseXML||function(e,t){if(window.ActiveXObject){t=new ActiveXObject("Microsoft.XMLDOM");t.async="false";t.loadXML(e)}else{t=(new DOMParser).parseFromString(e,"text/xml")}return t&&t.documentElement&&t.documentElement.nodeName!="parsererror"?t:null};var P=e.parseJSON||function(e){return window["eval"]("("+e+")")};var H=function(t,n,r){var i=t.getResponseHeader("content-type")||"",s=n==="xml"||!n&&i.indexOf("xml")>=0,o=s?t.responseXML:t.responseText;if(s&&o.documentElement.nodeName==="parsererror"){if(e.error)e.error("parsererror")}if(r&&r.dataFilter){o=r.dataFilter(o,n)}if(typeof o==="string"){if(n==="json"||!n&&i.indexOf("json")>=0){o=P(o)}else if(n==="script"||!n&&i.indexOf("javascript")>=0){e.globalEval(o)}}return o};return E}if(!this.length){i("ajaxSubmit: skipping submit process - no element selected");return this}var r,s,o,u=this;if(typeof n=="function"){n={success:n}}r=this.attr("method");s=this.attr("action");o=typeof s==="string"?e.trim(s):"";o=o||window.location.href||"";if(o){o=(o.match(/^([^#]+)/)||[])[1]}n=e.extend(true,{url:o,success:e.ajaxSettings.success,type:r||"GET",iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},n);var a={};this.trigger("form-pre-serialize",[this,n,a]);if(a.veto){i("ajaxSubmit: submit vetoed via form-pre-serialize trigger");return this}if(n.beforeSerialize&&n.beforeSerialize(this,n)===false){i("ajaxSubmit: submit aborted via beforeSerialize callback");return this}var f=n.traditional;if(f===undefined){f=e.ajaxSettings.traditional}var l=[];var c,h=this.formToArray(n.semantic,l);if(n.data){n.extraData=n.data;c=e.param(n.data,f)}if(n.beforeSubmit&&n.beforeSubmit(h,this,n)===false){i("ajaxSubmit: submit aborted via beforeSubmit callback");return this}this.trigger("form-submit-validate",[h,this,n,a]);if(a.veto){i("ajaxSubmit: submit vetoed via form-submit-validate trigger");return this}var p=e.param(h,f);if(c){p=p?p+"&"+c:c}if(n.type.toUpperCase()=="GET"){n.url+=(n.url.indexOf("?")>=0?"&":"?")+p;n.data=null}else{n.data=p}var d=[];if(n.resetForm){d.push(function(){u.resetForm()})}if(n.clearForm){d.push(function(){u.clearForm(n.includeHidden)})}if(!n.dataType&&n.target){var v=n.success||function(){};d.push(function(t){var r=n.replaceTarget?"replaceWith":"html";e(n.target)[r](t).each(v,arguments)})}else if(n.success){d.push(n.success)}n.success=function(e,t,r){var i=n.context||this;for(var s=0,o=d.length;s<o;s++){d[s].apply(i,[e,t,r||u,u])}};var m=e('input[type=file]:enabled[value!=""]',this);var g=m.length>0;var y="multipart/form-data";var b=u.attr("enctype")==y||u.attr("encoding")==y;var w=t.fileapi&&t.formdata;i("fileAPI :"+w);var E=(g||b)&&!w;var S;if(n.iframe!==false&&(n.iframe||E)){if(n.closeKeepAlive){e.get(n.closeKeepAlive,function(){S=C(h)})}else{S=C(h)}}else if((g||b)&&w){S=N(h)}else{S=e.ajax(n)}u.removeData("jqxhr").data("jqxhr",S);for(var x=0;x<l.length;x++)l[x]=null;this.trigger("form-submit-notify",[this,n]);return this};e.fn.ajaxForm=function(t){t=t||{};t.delegation=t.delegation&&e.isFunction(e.fn.on);if(!t.delegation&&this.length===0){var s={s:this.selector,c:this.context};if(!e.isReady&&s.s){i("DOM not ready, queuing ajaxForm");e(function(){e(s.s,s.c).ajaxForm(t)});return this}i("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)"));return this}if(t.delegation){e(document).off("submit.form-plugin",this.selector,n).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,t,n).on("click.form-plugin",this.selector,t,r);return this}return this.ajaxFormUnbind().bind("submit.form-plugin",t,n).bind("click.form-plugin",t,r)};e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};e.fn.formToArray=function(n,r){var i=[];if(this.length===0){return i}var s=this[0];var o=n?s.getElementsByTagName("*"):s.elements;if(!o){return i}var u,a,f,l,c,h,p;for(u=0,h=o.length;u<h;u++){c=o[u];f=c.name;if(!f){continue}if(n&&s.clk&&c.type=="image"){if(!c.disabled&&s.clk==c){i.push({name:f,value:e(c).val(),type:c.type});i.push({name:f+".x",value:s.clk_x},{name:f+".y",value:s.clk_y})}continue}l=e.fieldValue(c,true);if(l&&l.constructor==Array){if(r)r.push(c);for(a=0,p=l.length;a<p;a++){i.push({name:f,value:l[a]})}}else if(t.fileapi&&c.type=="file"&&!c.disabled){if(r)r.push(c);var d=c.files;if(d.length){for(a=0;a<d.length;a++){i.push({name:f,value:d[a],type:c.type})}}else{i.push({name:f,value:"",type:c.type})}}else if(l!==null&&typeof l!="undefined"){if(r)r.push(c);i.push({name:f,value:l,type:c.type,required:c.required})}}if(!n&&s.clk){var v=e(s.clk),m=v[0];f=m.name;if(f&&!m.disabled&&m.type=="image"){i.push({name:f,value:v.val()});i.push({name:f+".x",value:s.clk_x},{name:f+".y",value:s.clk_y})}}return i};e.fn.formSerialize=function(t){return e.param(this.formToArray(t))};e.fn.fieldSerialize=function(t){var n=[];this.each(function(){var r=this.name;if(!r){return}var i=e.fieldValue(this,t);if(i&&i.constructor==Array){for(var s=0,o=i.length;s<o;s++){n.push({name:r,value:i[s]})}}else if(i!==null&&typeof i!="undefined"){n.push({name:this.name,value:i})}});return e.param(n)};e.fn.fieldValue=function(t){for(var n=[],r=0,i=this.length;r<i;r++){var s=this[r];var o=e.fieldValue(s,t);if(o===null||typeof o=="undefined"||o.constructor==Array&&!o.length){continue}if(o.constructor==Array)e.merge(n,o);else n.push(o)}return n};e.fieldValue=function(t,n){var r=t.name,i=t.type,s=t.tagName.toLowerCase();if(n===undefined){n=true}if(n&&(!r||t.disabled||i=="reset"||i=="button"||(i=="checkbox"||i=="radio")&&!t.checked||(i=="submit"||i=="image")&&t.form&&t.form.clk!=t||s=="select"&&t.selectedIndex==-1)){return null}if(s=="select"){var o=t.selectedIndex;if(o<0){return null}var u=[],a=t.options;var f=i=="select-one";var l=f?o+1:a.length;for(var c=f?o:0;c<l;c++){var h=a[c];if(h.selected){var p=h.value;if(!p){p=h.attributes&&h.attributes["value"]&&!h.attributes["value"].specified?h.text:h.value}if(f){return p}u.push(p)}}return u}return e(t).val()};e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})};e.fn.clearFields=e.fn.clearInputs=function(t){var n=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var r=this.type,i=this.tagName.toLowerCase();if(n.test(r)||i=="textarea"){this.value=""}else if(r=="checkbox"||r=="radio"){this.checked=false}else if(i=="select"){this.selectedIndex=-1}else if(t){if(t===true&&/hidden/.test(r)||typeof t=="string"&&e(this).is(t))this.value=""}})};e.fn.resetForm=function(){return this.each(function(){if(typeof this.reset=="function"||typeof this.reset=="object"&&!this.reset.nodeType){this.reset()}})};e.fn.enable=function(e){if(e===undefined){e=true}return this.each(function(){this.disabled=!e})};e.fn.selected=function(t){if(t===undefined){t=true}return this.each(function(){var n=this.type;if(n=="checkbox"||n=="radio"){this.checked=t}else if(this.tagName.toLowerCase()=="option"){var r=e(this).parent("select");if(t&&r[0]&&r[0].type=="select-one"){r.find("option").selected(false)}this.selected=t}})};e.fn.ajaxSubmit.debug=false})(jQuery);

/*
 *
 * social
 *
 */

(function(a){a.fn.extend({socialShare:function(e){var h={social:"",title:document.title,shareUrl:window.location.href,description:a('meta[name="description"]').attr("content"),animation:"launchpad",chainAnimationSpeed:100,whenSelect:false,selectContainer:"body",blur:false};var e=a.extend(true,h,e);var d='<div class="arthref arthrefSocialShare"><div class="overlay '+e.animation+'"><div class="icon-container"><div class="centered"><ul>';var g="</ul></div></div></div></div>";return this.each(function(){var j=e;var i=a(this);if(j.whenSelect){a(j.selectContainer).mouseup(function(l){var k=b();if(k&&(k=new String(k).replace(/^\s+|\s+$/g,""))){e.title=k}})}i.click(function(){f();if(j.blur){a(".arthrefSocialShare").find(".overlay").addClass("opaque");a("body").children().not(".arthref, script").addClass("blurred")}a(".arthrefSocialShare").find(".overlay").css("display","block");setTimeout(function(){a(".arthrefSocialShare").find(".overlay").addClass("active");a(".arthrefSocialShare").find("ul").addClass("active");if(j.animation=="chain"){c(a(".arthrefSocialShare").find("li"),j.chainAnimationSpeed,"1")}},0)});a(document).on("click",".arthrefSocialShare .overlay",function(k){if(j.blur){a("body").children().removeClass("blurred")}a(".arthrefSocialShare").find(".overlay").removeClass("active");a(".arthrefSocialShare").find("ul").removeClass("active");setTimeout(function(){a(".arthrefSocialShare").find(".overlay").css("display","none");a(".arthrefSocialShare").remove()},300)});a(".arthrefSocialShare").find("li").click(function(k){k.stopPropagation()})});function b(){if(window.getSelection){return window.getSelection()}else{if(document.getSelection){return document.getSelection()}else{var i=document.selection&&document.selection.createRange();if(i.text){return i.text}return false}}return false}function c(k,j,l){var i=a(k);i.each(function(m){a(this).delay(m*j).fadeTo(j,l)})}function f(){var m={blogger:{text:"Blogger",className:"aBlogger",url:"http://www.blogger.com/blog_this.pyra?t=&amp;u={u}&amp;n={t}"},delicious:{text:"Delicious",className:"aDelicious",url:"http://del.icio.us/post?url={u}&amp;title={t}"},digg:{text:"Digg",className:"aDigg",url:"http://digg.com/submit?phase=2&amp;url={u}&amp;title={t}"},facebook:{text:"Facebook",className:"aFacebook",url:"http://www.facebook.com/sharer.php?u={u}&amp;t={t}"},friendfeed:{text:"FriendFeed",className:"aFriendFeed",url:"http://friendfeed.com/share?url={u}&amp;title={t}"},google:{text:"Google+",className:"aGooglePlus",url:"https://plus.google.com/share?url={u}"},linkedin:{text:"LinkedIn",className:"aLinkedIn",url:"http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary={d}&amp;source="},myspace:{text:"MySpace",className:"aMySpace",url:"http://www.myspace.com/Modules/PostTo/Pages/?u={u}&amp;t={t}"},pinterest:{text:"Pinterest",className:"aPinterest",url:"http://pinterest.com/pin/create/button/?url={u}&amp;description={d}"},reddit:{text:"Reddit",className:"aReddit",url:"http://reddit.com/submit?url={u}&amp;title={t}"},stumbleupon:{text:"StumbleUpon",className:"aStumbleUpon",url:"http://www.stumbleupon.com/submit?url={u}&amp;title={t}"},tumblr:{text:"Tumblr",className:"aTumblr",url:"http://www.tumblr.com/share/link?url={u}&name={t}&description={d}"},twitter:{text:"Twitter",className:"aTwitter",url:"http://twitter.com/home?status={t}%20{u}"},windows:{text:"Windows",className:"aWindows",url:"http://profile.live.com/badge?url={u}"},yahoo:{text:"Yahoo",className:"aYahoo",url:"http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&amp;u={u}&amp;t={t}"}};var l=e.social.split(",");var k="";for(var j=0;j<=l.length-1;j++){m[l[j]]["url"]=m[l[j]]["url"].replace("{t}",encodeURI(e.title)).replace("{u}",encodeURI(e.shareUrl)).replace("{d}",encodeURI(e.description));k+='<li><a href="'+m[l[j]]["url"]+'" target="_blank" rel="nofollow" class="'+m[l[j]]["className"]+'"><span></span></a><span>'+m[l[j]]["text"]+"</span></li>"}a("body").append(d+k+g)}}})})(jQuery);

/*
 *
 * scrollReveal.js (c) 2014 Julian Lloyd
 *
 */

;window.scrollReveal = (function (window) {

  'use strict';

  function scrollReveal(options) {

      this.docElem = window.document.documentElement;
      this.options = this.extend(this.defaults, options);

      if (this.options.init == true) this.init();
  }

  scrollReveal.prototype = {
    defaults: {
      after:  '0s',
      enter:  'bottom',
      move:   '24px',
      over:   '0.66s',
      easing: 'ease-in-out',
      viewportFactor: 0.33,
      reset: false,
      init: true
    },
    init: function () {
      this.scrolled = false;
      var self = this;
      this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll('[data-scrollReveal]'));
      this.elems.forEach(function (el, i) {
        self.update(el);
      });
      var scrollHandler = function () {
        if (!self.scrolled) {
          self.scrolled = true;
          setTimeout(function () {
            self._scrollPage();
          }, 60);
        }
      };
      var resizeHandler = function () {
        if (self.resizeTimeout) {
          clearTimeout(self.resizeTimeout);
        }
        function delayed() {
          self._scrollPage();
          self.resizeTimeout = null;
        }
        self.resizeTimeout = setTimeout(delayed, 200);
      };
      window.addEventListener('scroll', scrollHandler, false);
      window.addEventListener('resize', resizeHandler, false);
    },
    _scrollPage: function () {
        var self = this;
        this.elems.forEach(function (el, i) {
          self.update(el);
        });
        this.scrolled = false;
    },
    parseLanguage: function (el) {
      var words = el.getAttribute('data-scrollreveal').split(/[, ]+/),
          parsed = {};
      function filter (words) {
        var ret = [],

            blacklist = [
              "from",
              "the",
              "and",
              "then",
              "but",
              "with"
            ];
        words.forEach(function (word, i) {
          if (blacklist.indexOf(word) > -1) {
            return;
          }
          ret.push(word);
        });
        return ret;
      }
      words = filter(words);
      words.forEach(function (word, i) {
        switch (word) {
          case "enter":
            parsed.enter = words[i + 1];
            return;
          case "after":
            parsed.after = words[i + 1];
            return;
          case "wait":
            parsed.after = words[i + 1];
            return;
          case "move":
            parsed.move = words[i + 1];
            return;
          case "ease":
            parsed.move = words[i + 1];
            parsed.ease = "ease";
            return;
          case "ease-in":
            parsed.move = words[i + 1];
            parsed.easing = "ease-in";
            return;
          case "ease-in-out":
            parsed.move = words[i + 1];
            parsed.easing = "ease-in-out";
            return;
          case "ease-out":
            parsed.move = words[i + 1];
            parsed.easing = "ease-out";
            return;
          case "over":
            parsed.over = words[i + 1];
            return;
          default:
            return;
        }
      });
      return parsed;
    },
    update: function (el) {
      var css  = this.genCSS(el);
      if (!el.getAttribute('data-scrollReveal-initialized')) {
        el.setAttribute('style', css.initial);
        el.setAttribute('data-scrollReveal-initialized', true);
      }
      if (!this.isElementInViewport(el, this.options.viewportFactor)) {
        if (this.options.reset) {
          el.setAttribute('style', css.initial + css.reset);
        }
        return;
      }
      if (el.getAttribute('data-scrollReveal-complete')) return;
      if (this.isElementInViewport(el, this.options.viewportFactor)) {
        el.setAttribute('style', css.target + css.transition);
        if (!this.options.reset) {
          setTimeout(function () {
            el.removeAttribute('style');
            el.setAttribute('data-scrollReveal-complete',true);
          }, css.totalDuration);
        }
      return;
      }
    },
    genCSS: function (el) {
      var parsed = this.parseLanguage(el),
          enter,
          axis;
      if (parsed.enter) {
        if (parsed.enter == "top" || parsed.enter == "bottom") {
          enter = parsed.enter;
          axis = "y";
        }
        if (parsed.enter == "left" || parsed.enter == "right") {
          enter = parsed.enter;
          axis = "x";
        }
      } else {
        if (this.options.enter == "top" || this.options.enter == "bottom") {
          enter = this.options.enter
          axis = "y";
        }
        if (this.options.enter == "left" || this.options.enter == "right") {
          enter = this.options.enter
          axis = "x";
        }
      }
      if (enter == "top" || enter == "left") {
        if (!typeof parsed.move == "undefined") {
          parsed.move = "-" + parsed.move;
        }
        else {
          parsed.move = "-" + this.options.move;
        }
      }
      var dist   = parsed.move    || this.options.move,
          dur    = parsed.over    || this.options.over,
          delay  = parsed.after   || this.options.after,
          easing = parsed.easing  || this.options.easing;
      var transition = "-webkit-transition: all " + dur + " " + easing + " " + delay + ";" +
                          "-moz-transition: all " + dur + " " + easing + " " + delay + ";" +
                            "-o-transition: all " + dur + " " + easing + " " + delay + ";" +
                               "transition: all " + dur + " " + easing + " " + delay + ";" +
                      "-webkit-perspective: 1000;" +
              "-webkit-backface-visibility: hidden;";
      var reset = "-webkit-transition: all " + dur + " " + easing + " 0s;" +
                     "-moz-transition: all " + dur + " " + easing + " 0s;" +
                       "-o-transition: all " + dur + " " + easing + " 0s;" +
                          "transition: all " + dur + " " + easing + " 0s;" +
                 "-webkit-perspective: 1000;" +
         "-webkit-backface-visibility: hidden;";
      var initial = "-webkit-transform: translate" + axis + "(" + dist + ");" +
                       "-moz-transform: translate" + axis + "(" + dist + ");" +
                            "transform: translate" + axis + "(" + dist + ");" +
                              "opacity: 0;";
      var target = "-webkit-transform: translate" + axis + "(0);" +
                      "-moz-transform: translate" + axis + "(0);" +
                           "transform: translate" + axis + "(0);" +
                             "opacity: 1;";
      return {
        transition: transition,
        initial: initial,
        target: target,
        reset: reset,
        totalDuration: ((parseFloat(dur) + parseFloat(delay)) * 1000)
      };
    },
    getViewportH : function () {
      var client = this.docElem['clientHeight'],
        inner = window['innerHeight'];
      return (client < inner) ? inner : client;
    },
    getOffset : function(el) {
      var offsetTop = 0,
          offsetLeft = 0;
      do {
        if (!isNaN(el.offsetTop)) {
          offsetTop += el.offsetTop;
        }
        if (!isNaN(el.offsetLeft)) {
          offsetLeft += el.offsetLeft;
        }
      } while (el = el.offsetParent)
      return {
        top: offsetTop,
        left: offsetLeft
      }
    },
    isElementInViewport : function(el, h) {
      var scrolled = window.pageYOffset,
          viewed = scrolled + this.getViewportH(),
          elH = el.offsetHeight,
          elTop = this.getOffset(el).top,
          elBottom = elTop + elH,
          h = h || 0;
      return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
    },
    extend: function (a, b){
      for (var key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    }
  };
  return scrollReveal;
})(window);

/*
 * menu.js - superhacked, from http://www.codrops.com
 */

(function() {
	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}
	var docElem = window.document.documentElement,
		support = Modernizr.csstransitions,
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
		docscroll = 0,
		clickevent = mobilecheck() ? 'touchstart' : 'click';

	function init() {
		var showMenu = document.getElementById( 'trigger-menu' ),
			perspectiveWrapper = document.getElementById( 'perspectivizr' ),
			container = perspectiveWrapper.querySelector( '.container' ),
			contentWrapper = container.querySelector( '.wrapper' );

		showMenu.addEventListener( clickevent, function( ev ) {
			ev.stopPropagation();
			ev.preventDefault();
			docscroll = scrollY();
			contentWrapper.style.top = docscroll * -1 + 'px';
			document.body.scrollTop = document.documentElement.scrollTop = 0;
			classie.add( perspectiveWrapper, 'modalview' );
			classie.add( showMenu, 'clicked' );
			setTimeout( function() { classie.add( perspectiveWrapper, 'animate' ); }, 25 );
		});

		container.addEventListener( clickevent, function( ev ) {
			classie.add( showMenu, 'ready' );
			if ( classie.has( perspectiveWrapper, 'animate' ) ) {
				var onEndTransFn = function( ev ) {
					if ( support && ( ( ev.target.className !== 'container cover' && ev.target.className !== 'container' ) || ev.propertyName.indexOf( 'transform' ) == -1 ) ) return;
					this.removeEventListener( transEndEventName, onEndTransFn );
					classie.remove( perspectiveWrapper, 'modalview' );
					document.body.scrollTop = document.documentElement.scrollTop = docscroll;
					contentWrapper.style.top = '0px';
				};
				if( support ) {
					perspectiveWrapper.addEventListener( transEndEventName, onEndTransFn );
				}
				else {
					onEndTransFn.call();
				}
				classie.remove( perspectiveWrapper, 'animate' );
			}
		});
		perspectiveWrapper.addEventListener( clickevent, function( ev ) { return false; } );
	}
	init();
})();
