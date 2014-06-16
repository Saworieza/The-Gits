

// this variable should be populated conditionally in the site template
var theSiteDomain = 'www.lightreading.com';

// this variable should be populated before including msgchatqueue js file
var theMsgChatQueueInclude = '';

// this variable should be populated before including chatstatus js file
var theChatStatusInclude = '';

// this variable should be changed if you don't want switching divs to opacity fade in and out
var doHideShowDivOpacityFade = true;

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v3.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

function MM_openBrWindow(theURL,winName,features) {
  window.open(theURL,winName,features);
}

function SwitchColor(objname,thiscolor){
	var theObj;
	if (document.all) {
		// if it's IE...
		// get object
		theObj = eval('document.all.' + objname + '.style');
		// change color
		theObj.backgroundColor = thiscolor;
	} else {
		// for not IE, check to see if old NS
		if (document.layers) {
			// this is old NS
			// get object
			theObj = eval('document.' + objname);
			// change color
			theObj.backgroundColor = thiscolor;
		} else {
			// check to see if uses new DOM, like new Mozillas (Firefox, NS, and Mozilla)
			// note: this check assumes that objname refers to a valid id in the document
			if (document.getElementById(objname)) {
				// it does
				// get object
				theObj = document.getElementById(objname);
				// change color
				theObj.style.backgroundColor = thiscolor;
			}
		}
	}
}

function MakeDark(objname,thecolor){
	//var thecolor = "#ffffff";
	SwitchColor(objname,thecolor);
}

function MakeLight(objname,thecolor){
	//var thecolor = "#e6e6e6";
	SwitchColor(objname,thecolor);
}

// determine browser support
pop_ns4 = (document.layers)?true:false
pop_dom = (document.all)?true:false

var pop_collection="";
var pop_styleObj="";
if (pop_dom) {
	pop_collection="all.";
	pop_styleObj=".style";
	//document.write("dom is true<br>");
}

if (pop_ns4) {
	//document.write("ns4 is true<br>");
}

function GetObject(objname) {
	var theObj;
	if (pop_ns4 || pop_dom) {
		theObj= eval("document." + pop_collection + objname);
	} else {
		if (document.getElementById(objname)) {
			theObj = document.getElementById(objname);
		}
		
	}
	return theObj;
}

function SwitchHTML(thisguy,newhtml){
	thisobj = GetObject(thisguy);
	// this revealTrans crap is unreliable... kill it
	/*if(document.all &&! window.opera) {
		thisobj.filters.revealTrans.apply();
	}*/
	thisobj.innerHTML = newhtml;
	/*if(document.all &&! window.opera) {
		thisobj.filters.revealTrans.play();
	}*/
}

function SwitchDivs(objnameone,objnametwo) {
	HideDiv(objnameone); 
	ShowDiv(objnametwo); 
}

function HideDiv(objname) {
	var divHide = GetObject(objname); 
	if (doHideShowDivOpacityFade) {
		SlideObjOpacity(objname, 100, 0, 3);
	}
	divHide.style.display = 'none';
	if (doHideShowDivOpacityFade) {
		ChangeObjOpacity(objname, 100);
	}
}

function ShowDiv(objname) {
	var divShow = GetObject(objname); 
	if (doHideShowDivOpacityFade) {
		ChangeObjOpacity(objname, 0);
	}
	divShow.style.display = 'block';
	if (doHideShowDivOpacityFade) {
		SlideObjOpacity(objname, 0, 100, 3);
	}
}

function URLEncodeString(inString) { 
	var outString = escape(inString); 
	outString = outString.replace('+', '%2B'); 
	outString = outString.replace('/', '%2F');  
	return outString; 
}

var opacitySliderTimeouts = new Array();

function SlideObjOpacity(inObjName, inStartOpacity, inEndOpacity, inSlideFrameTime) {
	// initialize frame count
	var thisFrame = 0;
	
	// figure out if we're going up or down
	if (inStartOpacity < inEndOpacity) {
		for (var s = inStartOpacity; s <= inEndOpacity; s++) {
			opacitySliderTimeouts['opacity_slider_' + inObjName + '_'+ thisFrame] = setTimeout('ChangeObjOpacity(\'' + inObjName +'\', ' + s + ');', (thisFrame * inSlideFrameTime));
			thisFrame++;
		}
	}
	else if (inStartOpacity > inEndOpacity) {
		for (var s = inStartOpacity; s >= inEndOpacity; s--) {
			opacitySliderTimeouts['opacity_slider_' + inObjName + '_'+ thisFrame] = setTimeout('ChangeObjOpacity(\'' + inObjName +'\', ' + s + ');', (thisFrame * inSlideFrameTime));
			thisFrame++;
		}
	}
	else {
		// do nothing
	}
}

function ChangeObjOpacity(inObjName, inOpacity) {
	var theObj = GetObject(inObjName);
	theObj.style.filter = 'alpha(opacity=' + inOpacity +')';
	theObj.style.MozOpacity = (inOpacity / 100);
	theObj.style.KhtmlOpacity = (inOpacity / 100);
	theObj.style.opacity = (inOpacity / 100);
}

var heightSliderTimeouts = new Array();

function SlideObjHeight(inObjName, inStartHeight, inEndHeight, inSlideFrameTime) {
	// initialize frame count
	var thisFrame = 0;
	
	// figure out if we're going up or down
	if (inStartHeight < inEndHeight) {
		for (var s = inStartHeight; s <= inEndHeight; s++) {
			heightSliderTimeouts['height_slider_' + inObjName + '_'+ thisFrame] = setTimeout('ChangeObjHeight(\'' + inObjName +'\', ' + s + ');', (thisFrame * inSlideFrameTime));
			thisFrame++;
		}
	}
	else if (inStartHeight > inEndHeight) {
		for (var s = inStartHeight; s >= inEndHeight; s--) {
			heightSliderTimeouts['height_slider_' + inObjName + '_'+ thisFrame] = setTimeout('ChangeObjHeight(\'' + inObjName +'\', ' + s + ');', (thisFrame * inSlideFrameTime));
			thisFrame++;
		}
	}
	else {
		// do nothing
	}
}

function ChangeObjHeight(inObjName, inHeight) {
	var theObj = GetObject(inObjName);
	theObj.style.overflow = 'hidden';
	if (inHeight == null || inHeight <= 0) {
		theObj.style.display = 'none';
	} 
	else {
		theObj.style.height = inHeight;
		if (theObj.style.display == 'none') {
			theObj.style.display = 'block';
		}
	}
}

function ClearTimeoutArray(inArray,objname) {
	// when setting keys in the array, the name of the object being moved should be included somewhere in the key
	thisArray = inArray;
	for(key in thisArray){
		if (objname) {
			if (key.indexOf(objname) >= 0) {
				clearTimeout(thisArray[key]);
			}
		}
		else {
			clearTimeout(thisArray[key]);
		}
	}
}

function AttachEventFunctionToObject(inObjectName, inEventName, inFunctionName) {
	// make sure to pass inEventName without "on" at the beginning... we'll add that automatically below
	// remember that you can't pass variables to function you will call when the event happens
	var theObject = GetObject(inObjectName);
	if (theObject.addEventListener){
		theObject.addEventListener(inEventName, inFunctionName, false);
	} 
	else if (theObject.attachEvent) {
		theObject.attachEvent('on' + inEventName, inFunctionName);
	}
}

function RemoveEventFunctionFromObject(inObjectName, inEventName, inFunctionName) {
	// make sure to pass inEventName without "on" at the beginning... we'll add that automatically below
	// remember that you can't pass variables to function you will call when the event happens
	var theObject = GetObject(inObjectName);
	if (theObject.addEventListener){
		theObject.removeEventListener(inEventName, inFunctionName, false);
	} 
	else if (theObject.attachEvent) {
		theObject.detachEvent('on' + inEventName, inFunctionName);
	}
}
function SetCookie(cookieName, cookieValue, daysTilExpires) {
	var expDate = new Date();
	expDate.setDate(expDate.getDate() + daysTilExpires);
	document.cookie = cookieName + '=' + escape(cookieValue) + 
	( (daysTilExpires==null) ? '' : ';expires=' + expDate.toGMTString() );
}

function GetCookie(cookieName) {
	var theCookie = unescape(document.cookie);
	if (theCookie.length > 0) {
		var cookieValStart = theCookie.indexOf(cookieName + '=');
		if (cookieValStart != -1) { 
			cookieValStart = cookieValStart + cookieName.length + 1; 
			cookieValEnd = theCookie.indexOf(';',cookieValStart);
    			if (cookieValEnd == -1) {
    				cookieValEnd = theCookie.length;
    			}
			return theCookie.substring(cookieValStart,cookieValEnd);
		} 
		else {
		}
	}
	else {
	}
return '';
}

function AlignObject(objName, leftAlignObjName, topAlignObjName) {
	var leftAlignObj = GetObject(leftAlignObjName);
	var leftVal = returnPosXofObj(leftAlignObj); 
	var topAlignObj = GetObject(topAlignObjName);
	var topVal = returnPosYofObj(topAlignObj);
	MoveObject(objName, leftVal, topVal);
}

function MoveObject(objName, theLeftVal, theTopVal) {
	var theObj = GetObject(objName);
	theObj.style.position = 'absolute';
	ShowMenu(objName,theLeftVal,theTopVal);
}

function MoveDivToColTop(inDivToMoveName, inColumnName, inColTopDivName) {
	// get column parent element and the element at the top of that column
	var theColumn = GetObject(inColumnName);
	var divTopOfColumn = GetObject(inColTopDivName);
	// grab the element to move by removing it to variable
	var divToMove = GetObject(inDivToMoveName);
	// insert that element before the top of column element
	theColumn.insertBefore(divToMove,divTopOfColumn);
	// remove the top of column element
	theColumn.removeChild(divTopOfColumn);
	// insert the top of column element before the element we just moved to the top
	theColumn.insertBefore(divTopOfColumn,divToMove);
}

function AddEventListenerToObj(targetObj, eventType, functionRef, atCapture) {
	if (typeof targetObj.addEventListener != 'undefined') {
		targetObj.addEventListener(eventType, functionRef, atCapture);
	}
	else if (typeof targetObj.attachEvent != 'undefined') {
		targetObj.attachEvent("on" + eventType, functionRef);
	}
	else {
		eventType = "on" + eventType;

		if (typeof targetObj[eventType] == 'function') {
			var existingListener = targetObj[eventType];

			targetObj[eventType] = function() {
				oldListener();
				
				return functionRef();
			}
		}
		else {
			targetObj[eventType] = functionRef;
		}
	}
	
	return true; 
}

function ContentNotifyPrefsShortSubmit(inFormName, inFormMessageDiv) { 
	var theForm = GetObject(inFormName); 
	var theContentNotifyPrefsSubmitURL = 'http://'+ theSiteDomain +'/register_action.asp?p_outmsgname='+ inFormMessageDiv +'&'; 
	for (var felt = 0; felt <  theForm.elements.length; felt++) {
		var thisElt = theForm.elements[felt]; 
		if (thisElt.type == 'checkbox' || thisElt.type == 'radio') { 
			if (thisElt.checked) { 
				if (thisElt.name == 'pcep_cdids') {
					theContentNotifyPrefsSubmitURL = theContentNotifyPrefsSubmitURL + 'pcep_cdids' + '=' + URLEncodeString(thisElt.value) + '&'; 
				}
				if (thisElt.name == 'pcep_exc_cdids') {
					theContentNotifyPrefsSubmitURL = theContentNotifyPrefsSubmitURL + 'pcep_exc_cdids' + '=' + URLEncodeString(thisElt.value) + '&'; 
				}
				if (thisElt.name == 'pcep_fdids') {
					theContentNotifyPrefsSubmitURL = theContentNotifyPrefsSubmitURL + 'pcep_fdids' + '=' + URLEncodeString(thisElt.value) + '&'; 
				}
				if (thisElt.name == 'pcep_exc_fdids') {
					theContentNotifyPrefsSubmitURL = theContentNotifyPrefsSubmitURL + 'pcep_exc_fdids' + '=' + URLEncodeString(thisElt.value) + '&'; 
				}
			} 
		} 
		else { 
			theContentNotifyPrefsSubmitURL = theContentNotifyPrefsSubmitURL + thisElt.name + '=' + URLEncodeString(thisElt.value) + '&'; 
		} 
	} 
	//alert(theContentNotifyPrefsSubmitURL); 
	LoadScript(theContentNotifyPrefsSubmitURL); 
	return false; 
} 

function ContentNotifyPrefsShortGenerateAndDisplayRSSFeed(inFormName, inFormMessageDiv, inMessageStart, inMessageEnd) { 
	var theForm = GetObject(inFormName); 
	var theRSSURL = 'http://www.internetevolution.com/rss_simple.asp?videoblogs=yes&'; 
	for (var felt = 0; felt <  theForm.elements.length; felt++) {
		var thisElt = theForm.elements[felt]; 
		if (thisElt.type == 'checkbox' || thisElt.type == 'radio') { 
			if (thisElt.checked) { 
				if (thisElt.name == 'pcep_cdids') {
					theRSSURL = theRSSURL + 'f_s' + '=' + URLEncodeString(thisElt.value) + '&'; 
				}
				if (thisElt.name == 'pcep_exc_cdids') {
					theRSSURL = theRSSURL + 'f_exs' + '=' + URLEncodeString(thisElt.value) + '&'; 
				}
				if (thisElt.name == 'pcep_fdids') {
					theRSSURL = theRSSURL + 'f_n' + '=' + URLEncodeString(thisElt.value) + '&'; 
				}
				if (thisElt.name == 'pcep_exc_fdids') {
					theRSSURL = theRSSURL + 'f_exn' + '=' + URLEncodeString(thisElt.value) + '&'; 
				}
				if (thisElt.name == 'pcep_exc_cdstr') {
					if (thisElt.value == 'Video Blog') {
						theRSSURL = 'http://www.internetevolution.com/rss_simple.asp?videoblogs=yes';
						break;
					}
				}
			} 
		} 
	} 
	//alert(theRSSURL); 
	GetObject(inFormMessageDiv).innerHTML = inMessageStart + '<a href=\"' + theRSSURL + '\" target=\"new\"><u>Click here for your RSS feed.</u></a><br \/><br \/>' + inMessageEnd;
	return false; 
} 

function RedirectConfirm(inConfirmPrompt,inRedirectUrl) {
	var answer = confirm(inConfirmPrompt);
	if (answer){
		window.location = inRedirectUrl;
	}
	return false;
}

