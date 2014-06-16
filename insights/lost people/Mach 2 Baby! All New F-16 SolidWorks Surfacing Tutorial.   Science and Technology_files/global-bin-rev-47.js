_sf_startpt=(new Date()).getTime();
function hasCookie(name) {
    return (document.cookie.indexOf(name + '=') != -1);
}
function isAdmin() {
    return hasCookie('b4in_new_admin');
}
function isEditor() {
    return hasCookie('b4in_new_editor');
}
function isLoggedIn() {
	return hasCookie('b4in_new_user_id');
}
function add_commas(nStr) {
    var x, x1, x2, rgx;
    if (nStr < 1000) {
        return nStr;
    }
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function showDate() {
    d = new Date();
    $("#date").html(d.toLocaleString().replace(/:\d\d[^:].*/, ''));
    $("#date").fadeIn('slow');
}
function localizedDate(datestring) {
    var year, month, day, hour, minute, second, d;
    year = datestring.slice(0, 4);
    month = datestring.slice(5, 7);
    day = datestring.slice(8, 10);
    hour = datestring.slice(11, 13);
    minute = datestring.slice(14, 16);
    second = datestring.slice(17, 19);
    d = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
    return d.toLocaleString().replace(/:\d\d[^:].*/, '');
}
function setCookie(name, value, expires, path, domain, secure) {
    var today, expires_date;
    today = new Date();
    today.setTime(today.getTime());
    if (expires) {
        expires = expires * 1000 * 60 * 60 * 24;
    }
    expires_date = new Date(today.getTime() + (expires));
    document.cookie = name + "=" + encodeURIComponent(value) + ((expires) ? ";expires=" + expires_date.toGMTString() : "") + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ((secure) ? ";secure" : "");
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
        document.cookie = name + "=" + ((path) ? ";path=" + path : "") + ((domain) ? ";domain=" + domain : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
    }
}
function showLogin() {
	if(document.cookie.indexOf('b4in_new_user_id=')!=-1) {
		var email, is_editor, html, is_admin;
		email = getCookie('b4in_new_email');
		pen_name = getCookie('b4in_new_pen_name').replace(/\+/gi," ");
		is_editor = getCookie('b4in_new_editor');
		is_admin = getCookie('b4in_new_admin');
		html = '<div id="status">Welcome back '+pen_name+'<br/>' + email;
		if (is_editor == 1 || is_admin == 1) {} 
		html += ' | <a href=/dashboard/ >Dashboard</a> | <a href="/logout/index.php" >Logout</a><br/>';
		html += '</div>';
		$("#user_status").html(html);
		$("#user_status").fadeIn('slow');
		
	} else {
		$("#user_status").html('<div id="login"><form id="loginform" name="loginform" method="post" action="/login/index.php"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td align="right"><p id="joinnowtext"><a href="/login/new/">Not a Member Yet? Join Now!</a></p></td></tr><tr><td align="right" width="256"><label>Email: <input name="log" id="user_login" size="16" type="text" style="width:130px;"></label><br><label>Password: <input name="pwd" id="user_pass" size="16" type="password" style="width:130px;"></label></td></tr><tr><td align="right"><input name="submit" id="submit" value="LOGIN" class="grayButton1" type="submit"></td></tr></tbody></table></form></div>');
		$("#user_status").fadeIn('slow');
	}
}
function uploadNewsClick() {
	if (document.cookie.indexOf('b4in_new_user_id=') != -1) {
		$('#submitnews').click(function() {
			location = '/dashboard/?page=postnews';
		});
	} else {
		$('#submitnews').click(function() {
			$('#lightbox').click();
		});
	}
}

function doAJAX(remoteURL, callbackFunction, id) {
	$.ajax({
		url : remoteURL,
		dataType : 'jsonp',
		jsonp : false,
		jsonpCallback : callbackFunction,
		error : function(data, textStatus, errorThrown) {
			var message;
			if (textStatus == 'parsererror') {
				message = 'Sorry, these headlines seems to be missing.';
			} else {
				message = 'These headlines could not be loaded because of ' + textStatus;
			}
			$(id).html(message);
		}
	});
}

function updateVisitorsNow() { 
	$.get('/static/data/home-stat.html', {
    }, function (data) {
       if(data) {
		  var list=data.split('|');

		     $('#story_count').html(add_commas(list[0]));
		     $('#visit_count').html(add_commas(list[1]));
			 $('#chartbeat_site').html(add_commas(list[2]));

		  }
    } );
}
var arr_text1=new Array();
var arr_text2=new Array();
function cut_text2( noteId, maxLines){
	if(maxLines==1)
		arr_text1.push(noteId);
	else
		arr_text2.push(noteId);
}
var arr_text=new Array();
function cut_text( noteId, maxLines){
	arr_text.push({'id': noteId, 'line': maxLines});
}
function runTrimTextScript(){
	var i, element;
	for (i = 0; i < 80 && arr_text.length > 0; i++) {
		element = arr_text.shift();
		trimText(element.id, element.line);
	}
	if (arr_text.length > 0)
		setTimeout("runTrimTextScript()",1000);
}
function trimText( noteId, maxLines) {
	"use strict";
	var lineHeight = 18;
	var padding  = 1;
	var wrapperNodeMaxHeight = Math.floor(lineHeight * (maxLines + 0.5)) + padding;
	var  wrapperNode=document.getElementById(noteId);
	if(!wrapperNode) return false;
	var text=wrapperNode.innerHTML;
	wrapperNode.style.visibility = 'hidden';
	var delimiter = /\s+/g;
	text = text.split(delimiter);
	if (text[0] === '') {
		text.shift();
	}
	if (text[text.length - 1] === '') {
		text.pop();
	}
	var i, needEllipsis = false, finalText = '';
	for (i = 0; i < text.length; i++) {
		if (text[i].length > 20) continue;
		finalText += ' ' + text[i];
		wrapperNode.innerHTML =   finalText ;
		if (wrapperNode.scrollHeight > wrapperNodeMaxHeight) {
			needEllipsis = true;
			break;
		}
	}
	if (needEllipsis) {
		var lastWord = /\s+\S+$/;
		while (i >= 0) {
			if (i == 0)
				finalText = finalText.replace(lastWord, '');
			else
				finalText = finalText.replace(lastWord, '...');

			wrapperNode.innerHTML =   finalText ;

			if (wrapperNode.scrollHeight < wrapperNodeMaxHeight)
				break;
			else
				i--;
		}
	}
	wrapperNode.style.visibility = 'visible';
	return true;
}
function runTrimTextScript2(){
	var len1=arr_text1.length;
	var len2=arr_text2.length;
	if(len1>0){
		for(i=0;i<80;i++) {
			trimText(arr_text1[i],1);
		}
		arr_text1.splice(0,80);
		if(arr_text1.length>0){
			setTimeout("runTrimTextScript()",1000);
			return ;
		}else{
			if(  len2>0){
				for(i=0;i<len2;i++)
					trimText(arr_text2[i],2);
				arr_text2.splice(0,1200);
			}
		}
	}else  if(  len2>0){
		for(i=0;i<len2;i++)
			trimText(arr_text2[i],2);
		arr_text2.splice(0,1200);
	}
}
function loadJsDynamic(filename){
	var fileref=document.createElement('script');
	fileref.setAttribute("type","text/javascript");
	fileref.setAttribute("src", filename);
	if (typeof fileref!="undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}
function loadCssDynamic(filename){
	var fileref=document.createElement("link");
	fileref.setAttribute("rel", "stylesheet");
	fileref.setAttribute("type", "text/css");
	fileref.setAttribute("href", filename);
	if (typeof fileref!="undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}
function removeJsCssDynamic(filename, filetype){
	var targetelement=(filetype=="js")? "script" : (filetype=="css")? "link" : "none";
	var targetattr=(filetype=="js")? "src" : (filetype=="css")? "href" : "none";
	var allsuspects=document.getElementsByTagName(targetelement);
	for (var i=allsuspects.length; i>=0; i--){
		if (allsuspects[i] && allsuspects[i].getAttribute(targetattr)!=null && allsuspects[i].getAttribute(targetattr).indexOf(filename)!=-1)
			allsuspects[i].parentNode.removeChild(allsuspects[i]);
	}
}

$(document).ready(function () {
	if (document.location.href.indexOf('/admin/') == -1) {
		$('#lightbox').fancybox({'titleShow':false,'transitionIn':'none','transitionOut':'none'});
		uploadNewsClick();
	}
	updateVisitorsNow();
	loadJsDynamic("/static/js/signup_gaTrack.js");

	// Load js for bio page
	var bio_pattern = /contributor\/pages\/\d+\/[0-9]{3}\/bio\.html/;
	var stories_pattern = /contributor\/pages\/\d+\/[0-9]{3}\/stories\.html/;
	if (bio_pattern.test(window.location.pathname)) {
		loadJsDynamic("/static/js/bio.js");
	} else if (stories_pattern.test(window.location.pathname)) {
		loadJsDynamic("/static/js/contributor_stories.js");
	}
	
    // Load center float ads
    setTimeout("$('#bottom_center_float_ads').show()",10000);
    
	/* Ads fix align */
//	$('iframe').attr('style', 'margin-top:-8px; margin-left:-8px;');
//	$('iframe').attr('width',function(index, value){return parseInt(value) + 16});
//	$('iframe').attr('height',function(index, value){return parseInt(value) + 8});
});

