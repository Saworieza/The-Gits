!function(wndw){var jadify=function(jade,_t,_h){var yudify=function template(locals){var buf=[],jade_mixins={},jade_interp,locals_for_with=locals||{};return function(_t,institutionNames,model,expSubheadField,urlPrefix,instructorHeading,expSpecializationsLandingSwap,config,universityLogos,distinctionRequired,symBefore,_localize,faqQuestions){var MAX_SHOW=4;if(buf.push('<div class="coursera-specialization-top coursera-white-background"><div class="container"><h3 class="institutions">'+(null==(jade_interp=_t(institutionNames))?"":jade_interp)+'</h3><h1 class="title">'+jade.escape(null==(jade_interp=_t(model.get("name")))?"":jade_interp)+"</h1>"),"learn-capstone"===expSubheadField)buf.push('<h4 class="byline">'+jade.escape(null==(jade_interp=_t("A Sequence of Courses: Learn #{model.get('subhead')} and Apply Your Skills in a Capstone Project",{"model.get('subhead')":model.get("subhead")}))?"":jade_interp)+"</h4>");else buf.push('<h4 class="byline">'+jade.escape(null==(jade_interp=_t("A Specialization on Coursera: Your Pathway to Expertise"))?"":jade_interp)+"</h4>");if(buf.push('</div></div><div data-affix="data-affix" class="coursera-specialization-navigation"><div class="container"><div class="nav-item"><a'+jade.attr("href",urlPrefix+"overview",!0,!1)+' class="internal-page">'+jade.escape(null==(jade_interp=_t("Overview"))?"":jade_interp)+'</a></div><div class="nav-item"><a'+jade.attr("href",urlPrefix+"certificate",!0,!1)+' class="internal-page">'+jade.escape(null==(jade_interp=_t("Certificate"))?"":jade_interp)+'</a></div><div class="nav-item"><a'+jade.attr("href",urlPrefix+"courses",!0,!1)+' class="internal-page">'+jade.escape(null==(jade_interp=_t("Courses"))?"":jade_interp)+'</a></div><div class="nav-item"><a'+jade.attr("href",urlPrefix+"instructors",!0,!1)+' class="internal-page">'+jade.escape(null==(jade_interp=_t(instructorHeading))?"":jade_interp)+'</a></div><div class="nav-item"><a'+jade.attr("href",urlPrefix+"faqs",!0,!1)+' class="internal-page">'+jade.escape(null==(jade_interp=_t("FAQs"))?"":jade_interp)+'</a></div><div style="display:none" class="btn btn-flat get-started-btn">'+jade.escape(null==(jade_interp=_t("Start Specialization"))?"":jade_interp)+"</div></div></div>"),jade_mixins.values=function(){var block=this&&this.block,attributes=this&&this.attributes||{},colorClass="base"===expSpecializationsLandingSwap?"coursera-gray-background":"coursera-white-background";if(buf.push('<div data-section="overview"'+jade.cls(["coursera-specialization-section coursera-specialization-values "+colorClass],[!0])+'><div class="container"><div class="what-youll-learn-row"><div style="margin-left: 0px" class="span5"><h2 class="what-youll-learn-header">'+jade.escape(null==(jade_interp=_t("What You'll"))?"":jade_interp)+"<br/>"+jade.escape(null==(jade_interp=_t("Learn"))?"":jade_interp)+"</h2>"),model.get("video"))buf.push('<div class="video-placeholder span4"><img'+jade.attr("src",model.get("video_keyframe")||model.get("logo"),!0,!1)+' class="img-logo"/><img'+jade.attr("src",config.url.assets+"/images/specialization/play.png",!0,!1)+' class="img-play"/></div>');buf.push('</div><div class="span6 what-youll-learn-content">');var whatYouLearn=model.get("what_youll_learn")||[];if(function(){var $$obj=whatYouLearn.slice(0,MAX_SHOW);if("number"==typeof $$obj.length)for(var $index=0,$$l=$$obj.length;$$l>$index;$index++){var val=$$obj[$index];buf.push('<div class="what-youll-learn-item"><div class="list-bullet"></div><div class="list-value large-text">'+jade.escape(null==(jade_interp=_t(val.what_youll_learn||val))?"":jade_interp)+"</div></div>")}else{var $$l=0;for(var $index in $$obj){$$l++;var val=$$obj[$index];buf.push('<div class="what-youll-learn-item"><div class="list-bullet"></div><div class="list-value large-text">'+jade.escape(null==(jade_interp=_t(val.what_youll_learn||val))?"":jade_interp)+"</div></div>")}}}.call(this),function(){var $$obj=whatYouLearn.slice(MAX_SHOW);if("number"==typeof $$obj.length)for(var $index=0,$$l=$$obj.length;$$l>$index;$index++){var val=$$obj[$index];buf.push('<div class="what-youll-learn-item hide"><div class="list-bullet"></div><div class="list-value large-text">'+jade.escape(null==(jade_interp=_t(val.what_youll_learn||val))?"":jade_interp)+"</div></div>")}else{var $$l=0;for(var $index in $$obj){$$l++;var val=$$obj[$index];buf.push('<div class="what-youll-learn-item hide"><div class="list-bullet"></div><div class="list-value large-text">'+jade.escape(null==(jade_interp=_t(val.what_youll_learn||val))?"":jade_interp)+"</div></div>")}}}.call(this),whatYouLearn.length>MAX_SHOW)buf.push('<a href="javascript:void(0)" data-class-to-show="what-youll-learn-item" class="show-all-link">'+(null==(jade_interp=_t("Show All &raquo;"))?"":jade_interp)+"</a>");buf.push('</div></div><div class="video-row hide"><iframe width="900" height="540" frameborder="0" allowfullscreen="allowfullscreen" wmode="opaque" class="coursera-specialization-video"></iframe><div class="close-video-btn"><img'+jade.attr("src",config.url.assets+"images/specialization/close.png",!0,!1)+"/></div></div></div></div>")},jade_mixins.cert=function(){var block=this&&this.block,attributes=this&&this.attributes||{},colorClass="base"===expSpecializationsLandingSwap?"coursera-white-background":"coursera-gray-background",certTextClass=0===universityLogos.length?"certificate-text-higher":"";if(buf.push('<div data-section="certificate"'+jade.cls(["coursera-specialization-section coursera-specialization-cert "+colorClass],[!0])+'><div style="width: 1020px; padding: 0px;" class="container"><div style="margin-left: 0px" class="span7"><div style="position: relative"><img'+jade.attr("src",config.url.assets+"/images/specialization/empty_specialization_cert.png",!0,!1)+' class="certificate-base-img"/><div class="certificate-university-logo-container">'),function(){var $$obj=universityLogos;if("number"==typeof $$obj.length)for(var $index=0,$$l=$$obj.length;$$l>$index;$index++){var logo=$$obj[$index];buf.push("<img"+jade.attr("src",logo,!0,!1)+' class="certificate-university-logo"/>')}else{var $$l=0;for(var $index in $$obj){$$l++;var logo=$$obj[$index];buf.push("<img"+jade.attr("src",logo,!0,!1)+' class="certificate-university-logo"/>')}}}.call(this),buf.push("</div><div"+jade.cls(["certificate-text",certTextClass],[null,!0])+'><span class="certificate-text-large">'+jade.escape(null==(jade_interp=_t("Specialization Certificate"))?"":jade_interp)+'</span><br/><span class="certificate-text-small">'+jade.escape(null==(jade_interp=_t("has been presented to"))?"":jade_interp)+'</span><br/><span class="certificate-text-large">'+jade.escape(null==(jade_interp=_t("Jane Learner"))?"":jade_interp)+'</span><br/><span class="certificate-text-small">'+jade.escape(null==(jade_interp=_t("for successfully completing"))?"":jade_interp)+'</span><br/><span class="certificate-text-large">'+jade.escape(null==(jade_interp=_t(model.get("name")))?"":jade_interp)+'</span><br/><span class="certificate-text-small">'+jade.escape(null==(jade_interp=_t("a non-credit series authorized by the associated #{institutionNames} through Coursera",{institutionNames:institutionNames}))?"":jade_interp)+'</span></div></div></div><div style="padding-left: 10px" class="span5"><h2>'+jade.escape(null==(jade_interp=_t("Earn a"))?"":jade_interp)+"<br/>"+jade.escape(null==(jade_interp=_t("Specialization"))?"":jade_interp)+"<br/>"+jade.escape(null==(jade_interp=_t("Certificate"))?"":jade_interp)+'</h2><p class="certificate-mini-descrip large-text">'+(null==(jade_interp=_t("To earn the Specialization Certificate, complete&nbsp;"))?"":jade_interp)+"<em>"+jade.escape(null==(jade_interp=_t("Signature Track"))?"":jade_interp)+"</em>"),distinctionRequired)buf.push(" "+jade.escape(null==(jade_interp=_t("and earn Distinction for all #{model.get('topics').length - 1} courses, and complete the Capstone project.",{"model.get('topics').length - 1":model.get("topics").length-1}))?"":jade_interp));else buf.push(" "+jade.escape(null==(jade_interp=_t("for all #{model.get('topics').length - 1} courses and the Capstone project.",{"model.get('topics').length - 1":model.get("topics").length-1}))?"":jade_interp));if(buf.push('<br/><br/><a data-mouseover-event="what-is-sigtrack" href="javascript:void(0)" data-tooltip-animate-in-to="{&quot;opacity&quot;:1}" data-tooltip-position="left" data-tooltip-style="coursera-popover" class="coursera-sigtrack-tooltip what-is-sigtrack-tooltip">'+jade.escape(null==(jade_interp=_t("What is Signature Track?"))?"":jade_interp)+'</a></p><div style="display: none"><div class="coursera-sigtrack-tooltip-display"><p>'+jade.escape(null==(jade_interp=_t("Signature Track connects your coursework to your identity. It shows that you - and only you - did the work. When you complete a course's Signature Track, you will receive a Verified Certificate."))?"":jade_interp)+'</p></div></div></div><div style="clear: both"></div></div>'),model.get("incentives").length)buf.push('<div class="container specialization-incentives-list"><h2>'+(null==(jade_interp=_t("Incentives &amp; Benefits"))?"":jade_interp)+'</h2><p class="large-text">'+jade.escape(null==(jade_interp=_t(model.get("incentives")))?"":jade_interp)+'</p><div style="clear: both"></div></div>');buf.push("</div>")},"base"===expSpecializationsLandingSwap)jade_mixins.values(),jade_mixins.cert();else jade_mixins.cert(),jade_mixins.values();buf.push('<div data-section="courses" class="coursera-specialization-section coursera-specialization-courses coursera-gray-background"><div class="container"><h2>'+jade.escape(null==(jade_interp=_t("Courses"))?"":jade_interp)+"</h2>");var shortDescription=_t(model.get("byline"))+_t(" The Specialization concludes with a Capstone project that allows you to apply the skills you've learned throughout the courses."),indexToCutoff=shortDescription.indexOf(" ",215);if(buf.push('<p class="large-text byline">'+jade.escape(null==(jade_interp=_t(shortDescription.substring(0,indexToCutoff)))?"":jade_interp)),shortDescription.substring(indexToCutoff).length)buf.push('<span class="short-description-ellipsis">&nbsp;&#8230;&nbsp;</span><span class="short-description-more hide">'+jade.escape(null==(jade_interp=_t(shortDescription.substring(indexToCutoff)))?"":jade_interp)+'</span><a style="float: inherit; margin-left: 2px;" href="javascript:void(0)" data-class-to-show="short-description-more" data-class-to-hide="short-description-ellipsis" class="show-all-link">'+(null==(jade_interp=_t("Show more &raquo;"))?"":jade_interp)+"</a>");buf.push('</p><div style="margin-left: 0px" class="topics-side-list span4"></div><div style="margin-left: 0px" class="topics-list span8"></div><div style="clear: both"></div></div></div><div class="coursera-specialization-section coursera-specialization-prereqs coursera-white-background"><div class="container"><div style="margin-left: -20px" class="span5"><h2>'+jade.escape(null==(jade_interp=_t("Recommended"))?"":jade_interp)+"<br/>"+jade.escape(null==(jade_interp=_t("Background"))?"":jade_interp)+'</h2></div><div class="span1"></div><div class="span6">');var prereqs=model.get("recommended_background")||[];if(function(){var $$obj=prereqs.slice(0,MAX_SHOW);if("number"==typeof $$obj.length)for(var $index=0,$$l=$$obj.length;$$l>$index;$index++){var val=$$obj[$index];buf.push('<div class="prereq-item"><div class="list-bullet"></div><div class="list-value large-text">'+jade.escape(null==(jade_interp=_t(val.recommended_background||val))?"":jade_interp)+"</div></div>")}else{var $$l=0;for(var $index in $$obj){$$l++;var val=$$obj[$index];buf.push('<div class="prereq-item"><div class="list-bullet"></div><div class="list-value large-text">'+jade.escape(null==(jade_interp=_t(val.recommended_background||val))?"":jade_interp)+"</div></div>")}}}.call(this),function(){var $$obj=prereqs.slice(MAX_SHOW);if("number"==typeof $$obj.length)for(var $index=0,$$l=$$obj.length;$$l>$index;$index++){var val=$$obj[$index];buf.push('<div class="prereq-item hide"><div class="list-bullet"></div><div class="list-value large-text">'+jade.escape(null==(jade_interp=_t(val.recommended_background||val))?"":jade_interp)+"</div></div>")}else{var $$l=0;for(var $index in $$obj){$$l++;var val=$$obj[$index];buf.push('<div class="prereq-item hide"><div class="list-bullet"></div><div class="list-value large-text">'+jade.escape(null==(jade_interp=_t(val.recommended_background||val))?"":jade_interp)+"</div></div>")}}}.call(this),prereqs.length>MAX_SHOW)buf.push('<a href="javascript:void(0)" data-class-to-show="prereq-item" class="show-all-link">'+(null==(jade_interp=_t("Show All &raquo;"))?"":jade_interp)+"</a>");if(buf.push('</div><div style="clear: both"></div></div></div>'),jade_mixins.addPaymentEqn=function(){var block=this&&this.block,attributes=this&&this.attributes||{};if(buf.push('<div class="span6 total-price-explanation"><div class="eqn-component"><div class="top-component">'),symBefore)buf.push("<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>"+jade.escape(null==(jade_interp=_t(model.get("courseCost")))?"":jade_interp));else buf.push(""+jade.escape(null==(jade_interp=_t(model.get("courseCost")))?"":jade_interp)+"<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>");if(buf.push('</div><div class="price-footnote">'+jade.escape(null==(jade_interp=_t("each"))?"":jade_interp)+'</div></div><div class="eqn-component"><div class="top-component">&times;</div></div><div class="eqn-component"><div class="top-component">'+jade.escape(null==(jade_interp=_t(model.get("topics").length-1))?"":jade_interp)+'</div><div class="price-footnote">'+jade.escape(null==(jade_interp=_t("courses"))?"":jade_interp)+'</div></div><div class="eqn-component"><div class="top-component">+</div></div><div class="eqn-component"><div class="top-component">'),symBefore)buf.push("<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>"+jade.escape(null==(jade_interp=_t(model.get("capstoneCost")))?"":jade_interp));else buf.push(""+jade.escape(null==(jade_interp=_t(model.get("capstoneCost")))?"":jade_interp)+"<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>");if(buf.push('</div><div class="price-footnote">'+jade.escape(null==(jade_interp=_t("Capstone"))?"":jade_interp)+"<br/>"+jade.escape(null==(jade_interp=_t("project"))?"":jade_interp)+'</div></div><div class="eqn-component"><div class="top-component">=</div></div><div style="margin-top: -6px" class="eqn-component"><div class="top-component"><span class="total-price">'),symBefore)buf.push("<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>"+jade.escape(null==(jade_interp=_t(model.getTotalCost()))?"":jade_interp));else buf.push(""+jade.escape(null==(jade_interp=_t(model.getTotalCost()))?"":jade_interp)+"<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>");buf.push('</span></div><div class="price-footnote">'+jade.escape(null==(jade_interp=_t("Specialization"))?"":jade_interp)+"<br/>"+jade.escape(null==(jade_interp=_t("Certificate"))?"":jade_interp)+"</div></div></div>")},buf.push('<div data-section="payment" class="coursera-specialization-section coursera-specialization-additional-notes coursera-gray-background"><div class="container"><div data-bulk-option-available=\'1\' style="display: none"><h2>'+jade.escape(null==(jade_interp=_t("Payment Options"))?"":jade_interp)+'</h2><div class="row"><div style="padding-right: 40px" class="span6 note-paragraph"><h3>'+jade.escape(null==(jade_interp=_t("Pay for Full Access"))?"":jade_interp)+"</h3><p>"+jade.escape(null==(jade_interp=_t("Commit today and pay for the whole Specialization. Get unlimited retries for all courses in this Specialization for two years."))?"":jade_interp)+"</p></div>"),jade_mixins.addPaymentEqn(),buf.push('</div><hr/><div class="row"><div style="padding-right: 40px" class="span6 note-paragraph"><h3>'+jade.escape(null==(jade_interp=_t("Pay as you go"))?"":jade_interp)+"</h3><p>"+jade.escape(null==(jade_interp=_t("Pay for each course when you start it. If you don't pass a course, you'll get a second chance free."))?"":jade_interp)+'</p></div><div class="span6 total-price-explanation"><div class="eqn-component"><div class="top-component">'),symBefore)buf.push("<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>"+jade.escape(null==(jade_interp=_t(model.get("courseCost")))?"":jade_interp));else buf.push(""+jade.escape(null==(jade_interp=_t(model.get("courseCost")))?"":jade_interp)+"<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>");if(buf.push('<span style="font-size: 23px; margin-right: 5px"> '+jade.escape(null==(jade_interp=_t("for each course and"))?"":jade_interp)+"</span>"),model.get("capstoneCost")!=model.get("courseCost")){if(buf.push("<br/><br/>"),symBefore)buf.push("<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>"+jade.escape(null==(jade_interp=_t(model.get("capstoneCost")))?"":jade_interp));else buf.push(""+jade.escape(null==(jade_interp=_t(model.get("capstoneCost")))?"":jade_interp)+"<sup>"+jade.escape(null==(jade_interp=_t(_localize("$")))?"":jade_interp)+"</sup>");buf.push('<span style="font-size: 23px; margin-right: 5px"> '+jade.escape(null==(jade_interp=_t("for"))?"":jade_interp)+"</span>")}buf.push('<span style="font-size: 23px; margin-right: 0px">'+jade.escape(null==(jade_interp=_t("the Capstone"))?"":jade_interp)+'</span></div></div></div></div></div><div data-bulk-option-available=\'0\' style="display: none" class="row"><div style="padding-right: 40px" class="span6 note-paragraph"><h3>'+jade.escape(null==(jade_interp=_t("Pay as you go"))?"":jade_interp)+"</h3><p>"+jade.escape(null==(jade_interp=_t("You're in control. Pay for each course when you start it. If you don't pass a course, you'll get a second chance free."))?"":jade_interp)+"</p></div>"),jade_mixins.addPaymentEqn(),buf.push('</div></div></div><div data-section="instructors" class="coursera-specialization-section coursera-specialization-instructors coursera-white-background"><div class="container"><h2>'+jade.escape(null==(jade_interp=_t(instructorHeading))?"":jade_interp)+'</h2><div class="instructors-list"></div><div style="clear:both"></div><div class="institutes-list"></div></div></div><div data-section="faqs" class="coursera-specialization-section coursera-specialization-faq coursera-gray-background"><div class="container"><h2><span class="bold-font">'+jade.escape(null==(jade_interp=_t("FAQs"))?"":jade_interp)+'</span></h2><div style="margin-left: 0px" class="faq-column1 span6">'),function(){var $$obj=faqQuestions;if("number"==typeof $$obj.length)for(var $index=0,$$l=$$obj.length;$$l>$index;$index++){var val=$$obj[$index];buf.push('<div class="span6 faq-item"><div class="question-bullet">'+jade.escape(null==(jade_interp=_t("Q:"))?"":jade_interp)+'</div><div class="faq-question"><div class="question-value">'+jade.escape(null==(jade_interp=_t(val.question))?"":jade_interp)+'</div><div class="answer-value">'+jade.escape(null==(jade_interp=_t(val.answer))?"":jade_interp)+"</div></div></div>")}else{var $$l=0;for(var $index in $$obj){$$l++;var val=$$obj[$index];buf.push('<div class="span6 faq-item"><div class="question-bullet">'+jade.escape(null==(jade_interp=_t("Q:"))?"":jade_interp)+'</div><div class="faq-question"><div class="question-value">'+jade.escape(null==(jade_interp=_t(val.question))?"":jade_interp)+'</div><div class="answer-value">'+jade.escape(null==(jade_interp=_t(val.answer))?"":jade_interp)+"</div></div></div>")}}}.call(this),buf.push('</div><div style="margin-left: 0px" class="faq-column2 span6"></div><div style="clear: both"></div><div class="more-questions">'+(null==(jade_interp=_t("More questions? Visit the&nbsp;"))?"":jade_interp)+"<a"+jade.attr("href",config.url.base+"signature/guidebook/specializations",!0,!1)+' data-click-event="guidebook">'+jade.escape(null==(jade_interp=_t("Guidebook"))?"":jade_interp)+"</a> "+(null==(jade_interp=_t("or&nbsp;"))?"":jade_interp)+'<a href="http://help.coursera.org/customer/widget/emails/new" data-click-event="contact-us">'+jade.escape(null==(jade_interp=_t("contact us"))?"":jade_interp)+'</a>.</div></div></div><div data-modal-overlay-class="coursera-overlay-dark" style="display:none;" class="modal coursera-specialization-signature-modal coursera-specialization-modal-payment-options"><div class="modal-header"><img'+jade.attr("src",config.url.assets+"pages/signature/views/ribbon_stripes.png",!0,!1)+' class="coursera-signature-modal-ribbon"/><h3 class="coursera-specialization-signature-modal-title">'+jade.escape(null==(jade_interp=_t("Payment Options"))?"":jade_interp)+'</h3><img data-modal-close="data-modal-close"'+jade.attr("src",config.url.assets+"images/specialization/close.png",!0,!1)+' class="modal-close-img-cross"/></div><div class="modal-body"><div class="modal-body-top-paragraph"></div><div class="coursera-specialization-modal-body-payment-option pay-as-you-go"><h3 style="text-align: center">'+jade.escape(null==(jade_interp=_t("Pay as You Go"))?"":jade_interp)+'</h3><h4 style="font-size: 17px; text-align: center; color: #777">'+jade.escape(null==(jade_interp=_localize(_t("$#{courseCost} for each course",{courseCost:model.get("courseCost")})))?"":jade_interp)+'</h4><div data-select-topic="data-select-topic"><div style="margin-bottom: 5px">'+jade.escape(null==(jade_interp=_t("Courses"))?"":jade_interp)+'</div><div style="width: 100%; text-align: center"><select style="width: 90%">'),function(){var $$obj=model.get("topics").models;if("number"==typeof $$obj.length)for(var $index=0,$$l=$$obj.length;$$l>$index;$index++){var topic=$$obj[$index];if(!topic.get("is_capstone"))buf.push("<option"+jade.attr("value",topic.get("short_name"),!0,!1)+">"+jade.escape(null==(jade_interp=_t(topic.get("name")))?"":jade_interp)+"</option>")}else{var $$l=0;for(var $index in $$obj){$$l++;var topic=$$obj[$index];if(!topic.get("is_capstone"))buf.push("<option"+jade.attr("value",topic.get("short_name"),!0,!1)+">"+jade.escape(null==(jade_interp=_t(topic.get("name")))?"":jade_interp)+"</option>")}}}.call(this),buf.push('</select></div></div><div data-select-course="data-select-course" style="margin-bottom: 12px"><div style="margin-bottom: 5px">'+jade.escape(null==(jade_interp=_t("Sessions"))?"":jade_interp)+'</div><div style="width: 100%; text-align: center"><select style="width: 90%"></select><div style="color: #444; font-size: 13px; line-height: 19px;" data-num-sessions=\'0\' class="hide">'+jade.escape(null==(jade_interp=_t("No sessions available."))?"":jade_interp)+"<br/>"+jade.escape(null==(jade_interp=_t("Pick a different course!"))?"":jade_interp)+'</div></div></div><div style="width: 100%; text-align: center;"><a class="coursera-specialization-modal-btn-link"><button style="padding: 8px 18px; font-size: 15px;" class="btn btn-flat btn-inverse"><span style="color: #fff">'+jade.escape(null==(jade_interp=_t("Pay Now"))?"":jade_interp)+'</span></button></a></div></div><div style="position: relative; margin-right: 0px" class="coursera-specialization-modal-body-payment-option pay-in-bulk"><img style="position: absolute; height: 55px; left: 6px; top: -5px"'+jade.attr("src",config.url.assets+"pages/signature/views/ribbon_stripes.png",!0,!1)+' class="coursera-signature-modal-ribbon"/><h3 style="text-align: center">'+jade.escape(null==(jade_interp=_t("Full Access"))?"":jade_interp)+'</h3><h4 style="font-size: 17px; text-align: center; margin-bottom: 20px; color: #777">'+jade.escape(null==(jade_interp=_localize(_t("$#{totalCost} for all courses + Capstone",{totalCost:model.getTotalCost()})))?"":jade_interp)+'</h4><div style="margin: 5px 0px"><i style="color: green" class="icon-ok"></i> '+jade.escape(null==(jade_interp=_t("Unlimited retries to complete all #{model.get('topics').models.length - 1} courses for two years",{"model.get('topics').models.length - 1":model.get("topics").models.length-1}))?"":jade_interp)+'</div><div style="margin: 5px 0px"><i style="color: green" class="icon-ok"></i> '+jade.escape(null==(jade_interp=_t("Commit to completing"))?"":jade_interp)+'</div><div style="color: #777; margin-top: 20px" class="footnote">'+jade.escape(null==(jade_interp=_t("* Paid for some courses already? We'll deduct what you have paid already."))?"":jade_interp)+'</div><div style="width: 100%; text-align: center; margin-top: 15px">');var paymentLink=model.get("display")?config.url.base+"specialization/payment/"+model.get("short_name")+"/"+model.get("id"):"#";buf.push("<a"+jade.attr("href",paymentLink,!0,!1)+'><button style="padding: 8px 18px; font-size: 15px;" class="btn signature-track-button"><span>'+jade.escape(null==(jade_interp=_t("Pay Now"))?"":jade_interp)+"</span></button></a></div></div></div></div>")}("_t"in locals_for_with?locals_for_with._t:"undefined"!=typeof _t?_t:void 0,"institutionNames"in locals_for_with?locals_for_with.institutionNames:"undefined"!=typeof institutionNames?institutionNames:void 0,"model"in locals_for_with?locals_for_with.model:"undefined"!=typeof model?model:void 0,"expSubheadField"in locals_for_with?locals_for_with.expSubheadField:"undefined"!=typeof expSubheadField?expSubheadField:void 0,"urlPrefix"in locals_for_with?locals_for_with.urlPrefix:"undefined"!=typeof urlPrefix?urlPrefix:void 0,"instructorHeading"in locals_for_with?locals_for_with.instructorHeading:"undefined"!=typeof instructorHeading?instructorHeading:void 0,"expSpecializationsLandingSwap"in locals_for_with?locals_for_with.expSpecializationsLandingSwap:"undefined"!=typeof expSpecializationsLandingSwap?expSpecializationsLandingSwap:void 0,"config"in locals_for_with?locals_for_with.config:"undefined"!=typeof config?config:void 0,"universityLogos"in locals_for_with?locals_for_with.universityLogos:"undefined"!=typeof universityLogos?universityLogos:void 0,"distinctionRequired"in locals_for_with?locals_for_with.distinctionRequired:"undefined"!=typeof distinctionRequired?distinctionRequired:void 0,"symBefore"in locals_for_with?locals_for_with.symBefore:"undefined"!=typeof symBefore?symBefore:void 0,"_localize"in locals_for_with?locals_for_with._localize:"undefined"!=typeof _localize?_localize:void 0,"faqQuestions"in locals_for_with?locals_for_with.faqQuestions:"undefined"!=typeof faqQuestions?faqQuestions:void 0),buf.join("")};return function(locals){if(locals)if(locals._t)_t=locals._t.merge(_t);return yudify(locals)}};if("function"==typeof define&&define.amd)define(["js/lib/jade","i18n!pages/specialization/views/nls/landingPage"],function(jade,_t){var _h;return jadify(jade,_t,_h)});else wndw.jade.templates["pages.specialization.views.landingPage"]=jadify(wndw.jade.helpers)}(window);