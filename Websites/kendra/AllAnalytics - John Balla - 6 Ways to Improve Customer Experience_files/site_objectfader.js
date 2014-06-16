
// *** This object depends on having SlideObjOpacity and GetObject functions available

function ObjectFader(objName, inArray, inSize, inFadeInterval) {
	
	var myself = this;
	this.objName = objName;
	this.pObject = GetObject(objName);
	this.pictures = inArray;
	this.size = inSize;
	this.fadeInterval = inFadeInterval;
	this.clicked = false;
	
	if (this.pObject.attachEvent) {
		this.pObject.attachEvent("onmouseover", function() {
			clearInterval(myself.interval);
			ChangeObjOpacity(myself.objName, 100);
		});

		this.pObject.attachEvent("onclick", function() {
			clearInterval(myself.interval);
			myself.clicked = true;
		});

		this.pObject.attachEvent("onmouseout", function() {
			if (!myself.clicked)
				myself.interval = setInterval(callFade, myself.fadeInterval);
		});
	
	} else {
		this.pObject.addEventListener("mouseover", function() {
			clearInterval(myself.interval);
		}, false);

		this.pObject.addEventListener("click", function() {
			clearInterval(myself.interval);
			myself.clicked = true;
		}, false);

		this.pObject.addEventListener("mouseout", function() {
			if (!myself.clicked)
				myself.interval = setInterval(callFade, myself.fadeInterval);
		}, false);
	}
	
	this.Populate = function() {
		var myHTML ='';
		if (!this.pObject.currentLoc) this.pObject.currentLoc=0;

		var position = this.pObject.currentLoc

		for(i=0; i<this.size; i++) {
			myHTML += this.pictures[(position+i)%this.pictures.length]
		}
		this.pObject.innerHTML = myHTML;
		position = (position + this.size) % this.pictures.length;
		this.pObject.currentLoc = position;
	}

	function callPopulate() {
		myself.Populate();
	}
	
	this.Fade = function() {
		SlideObjOpacity(this.objName,100,0,5);
		setTimeout(callPopulate, 750);
		var callFunc = 'SlideObjOpacity(\''+this.objName+'\',0,100,5);'
		setTimeout(callFunc, 1750);
	}

	function callFade() {
		myself.Fade();
	}
	
	this.Start = function() {
		callPopulate();
		this.interval = setInterval(callFade, this.fadeInterval);
	}
}
