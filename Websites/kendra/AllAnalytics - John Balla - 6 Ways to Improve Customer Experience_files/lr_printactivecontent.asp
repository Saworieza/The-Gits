

// determine browser support
active_pop_ns4 = (document.layers)?true:false
active_pop_dom = (document.all)?true:false

var active_pop_collection="";
var active_pop_styleObj="";
if (active_pop_dom) {
	active_pop_collection="all.";
	active_pop_styleObj=".style";
	//document.write("dom is true<br>");
}

function GetActiveObject(objname) {
	var theObj;
	if (active_pop_ns4 || active_pop_dom) {
		theObj= eval("document." + active_pop_collection + objname);
	} else {
		if (document.getElementById(objname)) {
			theObj = document.getElementById(objname);
		}
		
	}
	return theObj;
}

function PrintActiveContent(objname, inHTML){
	// THIS FUNCTION ASSUMES THE GetActiveObject FUNCTION IS AVAILABLE
	var myActiveObj = GetActiveObject(objname);
	if (typeof myActiveObj != 'undefined') {
		myActiveObj.innerHTML = inHTML;
	}
}
