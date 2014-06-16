


// NOTE: this requires that a variable called theSiteDomain be set... should be like www.thesite.com

function LoadScript(theSource,theChildName) {
	// function takes the input src url and creats a new script element that loads it
	var scriptChild = document.createElement('script');
	scriptChild.src = theSource;
	scriptChild.type='text/javascript';
	if (typeof theChildName != 'undefined') {
		scriptChild.name = theChildName;
		scriptChild.id = theChildName;
	}
	document.getElementsByTagName('head')[0].appendChild(scriptChild);
}

function RemoveScript(theChildName) {
	var scriptChild = GetObject(theChildName);
	if (typeof scriptChild != 'undefined') {
		document.getElementsByTagName('head')[0].removeChild(scriptChild);
	}
}

var theRateLink = '';

function ShowRateMenu(thePageObj,theContentID,theIconsString) {
	// set values
	ChangeRateMenuFormParam('piddl_pageobj',thePageObj);
	ChangeRateMenuFormParam('piddl_contentid',theContentID);
	ChangeRateMenuFormParam('piddl_rate','rate');
	ChangeRateMenuFormParam('piddl_icons',theIconsString);
	// show menu
	ShowMenu('menu_box_rate',(returnPosXofObj(GetObject(thePageObj)) + 25),(returnPosYofObj(GetObject(thePageObj)) + 5));
}

function ShowSaveInfo(thePageObj) {
	// show menu
	ShowMenu('menu_box_save',(returnPosXofObj(GetObject(thePageObj)) + 120),(returnPosYofObj(GetObject(thePageObj)) + 10));
}

function HideSaveInfo() {
	// hide menu
	ShowMenu('menu_box_save',-500,38);
}

function HideRateMenu() {
	// clear the form 
	ClearRateMenuForm();
	// close the menu
	ShowMenu('menu_box_rate',-500,38);
}

function RateThis(theRatingValue) {
	// adds rating value to form (rest of form populated when the window is popped-in
	ChangeRateMenuFormParam('piddl_rating',theRatingValue); 
	// process form and create link that will be loaded
	BuildAndLoadRateMenuScript(); 
	// clear the form and close the menu
	HideRateMenu();
}

function ChangeRateMenuFormParam(theParam,theValue) {
	// function grabs the ratemenu form and changes the value for the parameter specified to the specified value
	var theForm = GetObject('rate_menu');
	theForm.elements[theParam].value = theValue;
}

function BuildAndLoadRateMenuScript(){
	//function simply reads the rate_menu form and builds an url using it 
	var thisSiteDomain = theSiteDomain;
	var theForm = GetObject('rate_menu');
	for (var thisFieldKey = 0; thisFieldKey < theForm.length; thisFieldKey++) {
		var theField = theForm.elements[thisFieldKey];
		var theLinkKey = theField.name
		var theLinkValue = theField.value
		theRateLink = theRateLink + '&' + theLinkKey + '=' + theLinkValue
	}
	// kill the extra &
	theRateLink = theRateLink.substring(1);
	theRateLink = 'http://' + thisSiteDomain + '/rate.asp?' + theRateLink;
	// load the script
	//alert(theRateLink);
	LoadScript(theRateLink);
	// clear the link variable
	ClearRateLink();
}

function ClearRateMenuForm(){
	// just call ChangeRateMenuFormParam to clear each value
	ChangeRateMenuFormParam('piddl_pageobj','');
	ChangeRateMenuFormParam('piddl_contentid','');
	ChangeRateMenuFormParam('piddl_rate','');
	ChangeRateMenuFormParam('piddl_rating','');
}

function ClearRateLink(){
	//
	theRateLink = '';
}

// placeholder function to use with calls to log content consumption... should be superceded at the local level by an inline function... it's here so we can call it from the 
//	top level without worrying about whether or not it exists
function ContentConsumptionLoggedSuccess(inContentIDStr){
	// do nothing
}

// placeholder function to use with calls to log content sign-up... should be superceded at the local level by an inline function... it's here so we can call it from the 
//	top level without worrying about whether or not it exists
function ContentSignUpLoggedSuccess(inContentIDStr){
	// do nothing
}

