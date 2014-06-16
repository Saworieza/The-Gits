


function blend(theObj) {
	//if(document.all &&! window.opera) {
	//	theObj.filters.revealTrans.apply(); 
	//	theObj.filters.revealTrans.play(); 
	//} 
} 

function returnPosYofObj(obj) {
	var objtop = 0;
	// check to see if obj has a container
	if(obj.offsetParent)
	while(1) {
		objtop += obj.offsetTop;
		// if there is no further container, get out of while
		if(!obj.offsetParent)
			break;
		obj = obj.offsetParent;
	}
	else if(obj.y)
		objtop += obj.y;
	return objtop;
}

function returnPosXofObj(obj) {
	var objleft = 0;
	// check to see if obj has a container
	if(obj.offsetParent)
	while(1) {
		objleft += obj.offsetLeft;
		// if there is no further container, get out of while
		if(!obj.offsetParent)
			break;
		obj = obj.offsetParent;
	}
	else if(obj.x)
		objleft += obj.x;
	return objleft;
}

function returnCurrentWindowYOffset() {
	if (document.all) {
		// if it's IE...
		return document.body.scrollTop;
	} else {
		return window.pageYOffset;
	}
}

function returnCurrentWindowXOffset() {
	if (document.all) {
		// if it's IE...
		return document.body.scrollLeft;
	} else {
		return window.pageXOffset;
	}
}

var menuMoverTimeouts = new Array();

var menuMoverTimeouts = new Array();
var menuMoverTimeoutCounter = 1;

var menuMaxOpacity = 90;

function ShowMenu(objname,xVal,yVal) {
	// function gets the object name, then conditionally grabs the object and moves its x,y coords to where we want them
	
	var theObj = GetObject(objname);
	if (returnPosXofObj(theObj) == xVal && returnPosYofObj(theObj) == yVal){
		// clear our timeout arrays
		ClearTimeoutArray(closeMenuTimeouts, objname);
		ClearTimeoutArray(menuMoverTimeouts, objname);
		ClearTimeoutArray(opacitySliderTimeouts,objname);
		ChangeObjOpacity(objname, menuMaxOpacity);
	}
	else {
		// if the object is already visible, slide it to the new position... else, fade out/in as normal
		if ((xVal > 0 && yVal > 0) && (returnPosXofObj(theObj) > 0 && returnPosYofObj(theObj) > 0)) {
			
			// clear any other timeouts
			ClearTimeoutArray(menuMoverTimeouts, objname);
			
			// handle slow catchup to scrolling windows
			
			var proximityCheckVal = 100;
			if ((returnPosXofObj(theObj) - xVal) > proximityCheckVal){
				// we're moving to the left
				ChangeObjectLeft(objname, xVal + proximityCheckVal);
			}
			else if ((returnPosXofObj(theObj) - xVal) < -proximityCheckVal) {
				// we're moving to the right
				ChangeObjectLeft(objname, xVal - proximityCheckVal);
			}
			if ((returnPosYofObj(theObj) - yVal) > proximityCheckVal){
				// we're moving up
				ChangeObjectTop(objname, yVal + proximityCheckVal);
			}
			else if ((returnPosYofObj(theObj) - yVal) < -proximityCheckVal) {
				// we're moving down
				ChangeObjectTop(objname, yVal - proximityCheckVal);
			}
			
			// move the menu the rest of the way
			
			if (returnPosXofObj(theObj) > xVal) {
				for (var incr = 1; incr <=  NumStepsToMove(returnPosXofObj(theObj),xVal); incr++) {
					menuMoverTimeouts['menu_move_' + objname + '_left_'+ menuMoverTimeoutCounter + '_' + incr] = setTimeout('ChangeObjectLeft(\'' + objname  + '\', '+ (returnPosXofObj(theObj) - incr) + ');',(incr * 2));
					menuMoverTimeoutCounter++;
				}
			}
			else {
				for (var incr = 1; incr <=  NumStepsToMove(returnPosXofObj(theObj),xVal); incr++) {
					menuMoverTimeouts['menu_move_' + objname + '_left_'+ menuMoverTimeoutCounter + '_'+ incr] = setTimeout('ChangeObjectLeft(\'' + objname + '\', '+ (returnPosXofObj(theObj) + incr) + ');',(incr * 2));
					menuMoverTimeoutCounter++;
				}
			}
			if (returnPosYofObj(theObj) > yVal) {
				for (var incr = 1; incr <=  NumStepsToMove(returnPosYofObj(theObj),yVal); incr++) {
					menuMoverTimeouts['menu_move_' + objname + '_top_'+ menuMoverTimeoutCounter + '_'+ incr] = setTimeout('ChangeObjectTop(\'' + objname + '\', '+ (returnPosYofObj(theObj) - incr) + ');',(incr * 2));
					menuMoverTimeoutCounter++;
				}
			}
			else {
				for (var incr = 1; incr <=  NumStepsToMove(returnPosYofObj(theObj),yVal); incr++) {
					menuMoverTimeouts['menu_move_' + objname + '_top_'+ menuMoverTimeoutCounter + '_'+ incr] = setTimeout('ChangeObjectTop(\'' + objname + '\', '+ (returnPosYofObj(theObj) + incr) + ');',(incr * 2));
					menuMoverTimeoutCounter++;
				}
			}

			if (returnPosXofObj(theObj) != xVal) {
				if (returnPosXofObj(theObj) > xVal) {
					ChangeObjectLeft(objname, returnPosXofObj(theObj) - 1);
				}
				else {
					ChangeObjectLeft(objname, returnPosXofObj(theObj) + 1);
				}
			}
			if (returnPosYofObj(theObj) != yVal) {
				if (returnPosYofObj(theObj) > yVal) {
					ChangeObjectTop(objname, returnPosYofObj(theObj) - 1);
				}
				else {
					ChangeObjectTop(objname, returnPosYofObj(theObj) + 1);
				}
			}
			
		}
		else {
			
			// change opacity to 0
			ChangeObjOpacity(objname, 0);
			// move it
			ChangeObjectLeft(objname, xVal);
			ChangeObjectTop(objname, yVal);
			// slide opacity from 0 to 100
			SlideObjOpacity(objname, 0, menuMaxOpacity, 2);
		}
	}
}

function ChangeObjectLeft(objname, xVal) {
	// function gets the object name, then conditionally grabs the object and moves its x,y coords to where we want them
	var theObj = GetObject(objname);
	if (document.all) {
		// if it's IE...
		theObj.style.pixelLeft = xVal;
	} else {
		// for not IE, check to see if old NS
		if (document.layers) {
			// this is old NS
			theObj.left = xVal;
		} else {
			// check to see if uses new DOM, like new Mozillas (Firefox, NS, and Mozilla)
			// note: this check assumes that objname refers to a valid id in the document
			if (document.getElementById(objname)) {
				// it does
				theObj.style.left = xVal + 'px';
			}
		}
	}
}

function ChangeObjectTop(objname, yVal) {
	// function gets the object name, then conditionally grabs the object and moves its x,y coords to where we want them
	var theObj = GetObject(objname);
	if (document.all) {
		// if it's IE...
		theObj.style.pixelTop = yVal;
	} else {
		// for not IE, check to see if old NS
		if (document.layers) {
			// this is old NS
			theObj.top = yVal;
		} else {
			// check to see if uses new DOM, like new Mozillas (Firefox, NS, and Mozilla)
			// note: this check assumes that objname refers to a valid id in the document
			if (document.getElementById(objname)) {
				// it does
				theObj.style.top = yVal + 'px';
			}
		}
	}
}

function NumStepsToMove(startVal,endVal) {
	var stepsToMove = Math.abs((startVal - endVal));
	return stepsToMove;
}

function AddPopMenuEventListener(targetObjName, menuObjName, xOffset, yOffset) {
	var theXOffset = 0;
	var theYOffset = 0;
	if (typeof xOffset == 'number') {
		theXOffset = xOffset;
	}
	if (typeof yOffset == 'number') {
		theYOffset = yOffset;
	}
	
	if (typeof GetObject(targetObjName) != 'undefined') {
		AddEventListenerToObj(GetObject(targetObjName),'mouseover', function() { PopMenu(menuObjName,(returnPosXofObj(GetObject(targetObjName)) + theXOffset),(returnPosYofObj(GetObject(targetObjName)) + theYOffset)); }, false);
		AddEventListenerToObj(GetObject(targetObjName),'mouseout', function() { PopMenuOff(menuObjName, -500, 38); }, false);
		AddEventListenerToObj(GetObject(menuObjName),'mouseout', function() { PopMenuOff(menuObjName, -500, 38);}, false);
	}
}

var lockPoppedMenu = false;
var lockedPoppedMenuObjName = '';

function PopMenu(menuObjName,xVal,yVal) {
	var thePoppedMenu = GetObject(menuObjName);
	var doMenuAdd = true;
	
	if (!lockPoppedMenu || (lockPoppedMenu && lockedPoppedMenuObjName == lockedPoppedMenuObjName)) {

		ShowMenu(menuObjName,xVal,yVal);

		AddEventListenerToObj(thePoppedMenu, 'mouseover', function() { ShowMenu(menuObjName,xVal,yVal); }, false);

		//thePoppedMenu.onmouseover = function() {
		//	ShowMenu(menuObjName,xVal,yVal);
		//};
	}
}

var closeMenuTimeouts = new Array();
var closeMenuTimeoutCounter = 1;

function PopMenuOff(menuObjName, xVal, yVal) {
	
	closeMenuTimeouts['close_menu_' + menuObjName + '_' + closeMenuTimeoutCounter] = setTimeout('ShowMenu(\''+ menuObjName +'\','+ xVal +','+ yVal +'); ClearTimeoutArray(closeMenuTimeouts, \''+ menuObjName +'\');',100);
	closeMenuTimeoutCounter++;
	
	//ShowMenu(menuObjName, xVal, yVal);
}

var globalPopXDiff = 10;
var globalPopYDiff = 0;

function createSubmenu(subMenuName, linkArr, attachTo, inPopMenuClass, inPopMenuSubItemWrapperClass, inPopMenuLastSubItemWrapperClass, inPopMenuSubItemClass, inPopLeft, inPopTop, inXDiff, inYDiff) {
	var attachToName;
	var attachMenu;
	var myFunction = new Array();
	var subMenuObj;
	var inPopMenuClass;
	var inPopMenuSubItemWrapperClass;
	var inPopMenuLastSubItemWrapperClass;
	var inPopMenuSubItemClass;
	var inPopLeft;
	var inPopTop;
	var inXDiff;
	var inYDiff;
	var popMenuClass = 'popmenu';
	var popMenuSubItemWrapperClass = 'popmenusubitemwrapper';
	var popMenuLastSubItemWrapperClass = 'popmenulastsubitemwrapper';
	var popMenuSubItemClass = 'popmenusubitem';
	var popLeft = false;
	var popTop = false;
	// assumes that the global diff will be added to the width or height of the element to which the menu is attached
	// NOTE:  this applies to non-popTop and non-popLeft as well
	var popXDiff = globalPopXDiff;
	var popYDiff = globalPopYDiff;
	
	if (subMenuName.indexOf('{') >= 0 || subMenuName.indexOf('}') >= 0) {
		subMenuObj = eval('(' + subMenuName + ')');
		theSubMenuName = subMenuObj.theSubMenuName;
		inPopMenuClass = subMenuObj.menuClass;
		inPopMenuSubItemWrapperClass = subMenuObj.menuSubItemWrapperClass;
		inPopMenuLastSubItemWrapperClass = subMenuObj.menuLastSubItemWrapperClass;
		inPopMenuSubItemClass = subMenuObj.menuSubItemClass;
		inPopLeft = subMenuObj.menuPopLeft;
		inPopTop = subMenuObj.menuPopTop;
		inXDiff = subMenuObj.menuXDiff;
		inYDiff = subMenuObj.menuYDiff;
	} else {
		theSubMenuName = subMenuName;
	}
	
	if (typeof inPopMenuClass == 'string') {
		popMenuClass = inPopMenuClass;
	}
	if (typeof inPopMenuSubItemWrapperClass == 'string') {
		popMenuSubItemWrapperClass = inPopMenuSubItemWrapperClass;
	}
	if (typeof inPopMenuLastSubItemWrapperClass == 'string') {
		popMenuLastSubItemWrapperClass = inPopMenuLastSubItemWrapperClass;
	}
	if (typeof inPopMenuSubItemClass == 'string') {
		popMenuSubItemClass = inPopMenuSubItemClass;
	}
	
	if (typeof inPopLeft == 'boolean') {
		popLeft = inPopLeft;
	}
	if (typeof inPopTop == 'boolean') {
		popTop = inPopTop;
	}
	
	var newSubmenu = document.createElement('div');
	newSubmenu.setAttribute('id', theSubMenuName);
	newSubmenu.setAttribute('name', theSubMenuName);
	newSubmenu.setAttribute('class', popMenuClass);
	newSubmenu.setAttribute('className', popMenuClass);
	for (var i=0; i < linkArr.length; i++) {
		var newDiv = document.createElement('div');
		newDiv.setAttribute('id', theSubMenuName + "_submenuwrapper" + i);
		newDiv.setAttribute('name', theSubMenuName +"_submenuwrapper" + i);
		// don't do this if this is the last item in the menu
		if (i != (linkArr.length - 1)) {
			newDiv.setAttribute('class', popMenuSubItemWrapperClass);
			newDiv.setAttribute('className', popMenuSubItemWrapperClass);
		} else {
			newDiv.setAttribute('class', popMenuLastSubItemWrapperClass);
			newDiv.setAttribute('className', popMenuLastSubItemWrapperClass);
		}
		newSubmenu.appendChild(newDiv);
		var newSubDiv = document.createElement('div');
		newSubDiv.setAttribute('id', theSubMenuName + '_submenu' + i);
		newSubDiv.setAttribute('name', theSubMenuName + '_submenu' + i);
		newSubDiv.setAttribute('class', popMenuSubItemClass);
		newSubDiv.setAttribute('className', popMenuSubItemClass);
		if (linkArr[i][1] + '' != '') {
			newSubDiv.innerHTML = '<a href=\''+ linkArr[i][1] +'\'>' + linkArr[i][0] +'</a>';
		} else {
			newSubDiv.innerHTML = linkArr[i][0];
		}
		newDiv.appendChild(newSubDiv);
	}
	document.body.appendChild(newSubmenu);
	// grab pop width using submenu
	// inXDiff overrides global
	if (typeof inXDiff == 'number') {
		if (popLeft) {
			popXDiff = inXDiff - GetObject(theSubMenuName).offsetWidth;
		} else {
			popXDiff = inXDiff;
		}
	} else {
		if (popLeft) {
			popXDiff = -1 * (GetObject(theSubMenuName).offsetWidth + popXDiff);
		} else {
			// stays the same
			popXDiff = popXDiff;
		}
	}
	if (attachTo instanceof Array) {
		for (var j=0; j < attachTo.length; j++ ) {
			attachMenuNodes = document.getElementsByName(attachTo[j]);
			if ( attachMenuNodes.length > 0 ) {
				var attachMenu = attachMenuNodes[0];
			}
			attachToName = attachTo[j];
			// inYDiff overrides global
			if (typeof inYDiff == 'number') {
				if (popTop) {
					popYDiff = -1 * (GetObject(theSubMenuName).offsetHeight + inYDiff);
				} else {
					popYDiff = inYDiff;
				}
			} else {
				if (popTop) {
					popYDiff = -1 * (GetObject(theSubMenuName).offsetHeight + popYDiff);
				} else {
					popYDiff = GetObject(theSubMenuName).offsetHeight + popYDiff;
				}
			}
			AddPopMenuEventListener(attachToName, theSubMenuName, popXDiff, popYDiff);
		}
	}
	else {
		attachMenuNodes = document.getElementsByName(attachTo);
		// inYDiff overrides global
		if (typeof inYDiff == 'number') {
			if (popTop) {
				popYDiff = -1 * GetObject(theSubMenuName).offsetHeight + inYDiff;
			} else {
				popYDiff = inYDiff;
			}
		} else {
			if (popTop) {
				popYDiff = -1 * (GetObject(theSubMenuName).offsetHeight + popYDiff);
			} else {
				popYDiff = GetObject(attachTo).offsetHeight + popYDiff;
			}
		}
		AddPopMenuEventListener(attachTo, theSubMenuName, popXDiff, popYDiff);
	}
}

// since there will potentially be many of these on a page, instantiate with a unique name
function LRSliderHandler() {

	this.thisSliderElementName = '';
	this.sliderElementCount = 0;
	this.sliderElementSize = 0;
	this.sliderObjectViewsize = 0;
	this.sliderRightLimit = this.sliderElementSize * ((this.sliderElementCount - this.sliderObjectViewsize) * -1) + 1;
	this.currentSliderElement = 1;
	this.sliderObjectId = '';
	this.sliderDoSlide = true;
	
	var myself = this;
	
	// by default, these don't do anything... replace them contextually with functions that does what you need
	this.LRSliderNavGraphicsHandlerSlideLeft = function() {
		
	}
	
	this.LRSliderNavGraphicsHandlerSlideRight = function() {
		
	}

	this.LRSliderSlide = function(newElement) {
		var newPosition = newElement - this.currentSliderElement;
		if (newElement >= 1 && newElement <= this.sliderElementCount) {
			if (newPosition < 0) {
				// we need to slide left
				this.LRSliderSlideLeft(Math.abs(newPosition));
			} else if (newPosition > 0) {
				// we need to slide right
				this.LRSliderSlideRight(newPosition);
			}
		}
	}

	this.LRSliderSlideLeft = function(count){
		if (this.sliderDoSlide) {
			for (i = 1; i <= (count * this.sliderElementSize);i++){
				setTimeout(this.thisSliderElementName + '.LRSliderScroll(' + 1 + ');', (i * 2));
			}
		} else {
			setTimeout(this.thisSliderElementName + '.LRSliderJump(' + 1 * count * this.sliderElementSize + ');', (2));
		}
		for (i = 0; i < count; i++){
			if(this.currentSliderElement > 1){
				this.currentSliderElement = this.currentSliderElement - 1;
				this.LRSliderNavGraphicsHandlerSlideLeft();
			}
		}
	}

	this.LRSliderSlideRight = function(count) {
		if (this.sliderDoSlide) {
			for (i = 1; i <= (count * this.sliderElementSize); i++){
				setTimeout(this.thisSliderElementName + '.LRSliderScroll(' + (-1) + ');', (i * 2));
			}
		} else {
			setTimeout(this.thisSliderElementName + '.LRSliderJump(' + (-1) * count * this.sliderElementSize + ');', (2));
		}
		for (i = 0; i < count; i++){
			if(this.currentSliderElement <= this.sliderElementCount - this.sliderObjectViewsize){
				this.currentSliderElement = this.currentSliderElement + 1;
				this.LRSliderNavGraphicsHandlerSlideRight();
			}
		}
	}

	this.LRSliderScroll = function(j) {
		var viewOutside = GetObject(this.sliderObjectId);
		if (parseInt(viewOutside.style.left) == 1 && j == 1){
			//do nothing
		} else if (parseInt(viewOutside.style.left) == this.sliderRightLimit && j == -1) {

		} else {
			viewOutside.style.left = parseInt(viewOutside.style.left) + j +'px';
		}
	}

	this.LRSliderJump = function(j) {
		var viewOutside = GetObject(this.sliderObjectId);
		if (parseInt(viewOutside.style.left) == 1 && j > 1){
			//do nothing
		} else if (parseInt(viewOutside.style.left) == this.sliderRightLimit && j < 1) {
			//do nothing
		} else {
			viewOutside.style.left = parseInt(viewOutside.style.left) + j +'px';
		}
	}
}
