/* Version: 2.1.0 */

var Gannett = {};

Gannett.Benchmark = {
	Timer: [],
	GetTimestamp: function(){
		return (new Date).getTime();
	},
	Start: function(eventName){
		this.Timer[eventName] = {
			"Started": this.GetTimestamp()
		};
	},
	Stop: function(eventName){
		this.Timer[eventName].Stopped = this.GetTimestamp();		
	},
	Dump: function(){
		var delay = 10;
		var message = "GMTI Benchmarking Data";
		for (var eventName in this.Timer) {
			var elapsedTime = this.Timer[eventName].Stopped - this.Timer[eventName].Started;
			message += " | " + eventName + ": " + elapsedTime + " ms";
		}
		setTimeout(function(){
			var results = document.createElement("div");
			results.style.cssText = "clear:both; font:10px monospace;";
			results.appendChild(document.createTextNode(message));
			document.body.appendChild(results);
		}, delay * 1000);
	}
};

/* Page */
Gannett.Page = function(){
	this.SitePage;
	this.GCIONID;
	/* Ad */
	this.AdEnable = false;
	this.AdServer = "";
	this.AdNetworkId = 0;
	this.AdDefaultId = 0;
	this.AdKeyValues = new Array();
	this.AdKeyWords = new Array();
	this.AdThrottle = 4;
	this.AdLazyLoad = true;
	this.Ad;
	/* Video */
	this.AdSystem = "";
	this.MavenURL = ""; 
	this.AdPositionId = "";
	this.AdPosition = "";
	this.AdSiteId = "";
	this.Revsci_segment = ""; 
	this.Vzip = ""; 
	this.Vyear = ""; 
	this.Vgend = ""; 
	this.CheckSystemId = ""; 
	this.ReferralPlaylistId = ""; 
	this.ReferralObject = ""; 
	this.ReferralLinkBackURL = ""; 
	this.ReferralLinkBackDesc = ""; 
	this.DeepLinkUrl = ""; 
	this.PageContentSubcategory = ""; 
	this.PageContentCategory = "";
	this.GpaperCode = "";
	this.Gnt_AdDomain = "";
	this.Division = "";
	this.FlashParentHTML = "";
	this.VideoEnable = false;
	this.Video;
	/* Behavioral Targeting */
	this.BehavioralTargetingEnable = false;
	this.ZipCode = "";
	this.Age = "";
	this.YearOfBirth = new Date();
	this.Gender = "";
	this.GenderCode = 0;
	this.SSTS = ""
	this.BehavioralTargetingScripts = new Array();
	this.BehavioralTargeting;
	/* Network */
	this.GDNEnable = false;
	this.GDNScripts = new Array();
	this.GDN;
	/* Util */
	this.Util = new Gannett.Util();
	/* Post Process Events */
	this.PostProcessFunctions = new Array();
  
	this.Initialize = function(){
		/* Ad Object, create and initialize */
		if(this.AdEnable){
			this.Ad = new Gannett.Ad();
			this.Ad.Enable = this.AdEnable;
			this.Ad.Server = this.AdServer;
			this.Ad.NetworkId = this.AdNetworkId;
			this.Ad.AdDefaultId = this.AdDefaultId;
			this.Ad.KeyValues = this.AdKeyValues;
			this.Ad.KeyWords = this.AdKeyWords;
			this.Ad.Throttle = this.AdThrottle;
			this.Ad.SitePage = this.SitePage;
			this.Ad.AdLazyLoad = this.AdLazyLoad;
			this.Ad.Initialize();
		}
		/* Video */
		if(this.VideoEnable){
			this.Video = new Gannett.Video();
			this.Video.AdServer = this.AdServer;
			this.Video.AdNetworkId = this.AdNetworkId;
			this.Video.AdGroupId = this.Ad.AdGroupId;
			this.Video.SSTS_Val = this.SSTS;
			this.Video.AdDefaultId = this.AdDefaultId;
			this.Video.AdSystem = this.AdSystem;
			this.Video.MavenURL = this.MavenURL; 
			this.Video.AdPositionId = this.AdPositionId;
			this.Video.AdPosition = this.AdPosition;
			this.Video.AdSiteId = this.AdSiteId;
			this.Video.AdServerBasePath = 'http://' + this.Video.AdServer + '/adrawdata/.0/' + this.Video.AdNetworkId + '/' + this.Video.AdDefaultId + '/0/0/header=yes;cc=2;alias=';
			this.Video.Revsci_segment = this.Revsci_segment; 
			this.Video.Vzip = this.Vzip; 
			this.Video.Vyear = this.Vyear; 
			this.Video.Vgend = this.Vgend; 
			this.Video.CheckSystemId = this.CheckSystemId; 
			this.Video.ReferralPlaylistId = this.ReferralPlaylistId; 
			this.Video.ReferralObject = this.ReferralObject; 
			this.Video.ReferralLinkBackURL = this.ReferralLinkBackURL; 
			this.Video.ReferralLinkBackDesc = this.ReferralLinkBackDesc; 
			this.Video.DeepLinkUrl = this.DeepLinkUrl; 
			this.Video.PageContentSubcategory = this.PageContentSubcategory; 
			this.Video.PageContentCategory = this.PageContentCategory;
			this.Video.GpaperCode = this.GpaperCode;
			this.Video.Gnt_AdDomain = this.Gnt_AdDomain;
			this.Video.Division = this.Division;
			this.Video.FlashParentHTML = this.FlashParentHTML;
		}
		/* Behavioral Targeting */
		if(this.BehavioralTargetingEnable){
			this.BehavioralTargeting = new Gannett.BehavioralTargeting();
			this.BehavioralTargeting.Enable = true;
			this.BehavioralTargeting.ZipCode = this.ZipCode;
			this.BehavioralTargeting.Age = this.Age;
			this.BehavioralTargeting.Gender = this.Gender;
			this.BehavioralTargeting.SSTS = this.SSTS;
			for(i=0; i < this.BehavioralTargetingScripts.length; i++){
				this.BehavioralTargeting.RegisterScriptFile(this.BehavioralTargetingScripts[i]);
			}
			this.RegisterFunctionPostProcess("this.BehavioralTargeting.Initialize()"); 
		}
		/* Network */
		if(this.GDNEnable){
			this.GDNEnable = true;
			this.GDN = new Gannett.GDN();
			this.GDN.ZipCode = this.ZipCode;
			this.GDN.YearOfBirth = this.YearOfBirth;
			this.GDN.GenderCode = this.GenderCode;
			this.GDN.GCIONID =  this.GCIONID;
			for(i=0; i < this.GDNScripts.length; i++){
				this.GDN.RegisterScriptFile(this.GDNScripts[i]);
			} 
			this.GDN.Initialize();	  	  
		}
	}
	this.AddEvent = function (obj, evType, fn){ 
		try {
			if (obj.addEventListener){ 
				obj.addEventListener(evType, fn, false); 
				return true; 
			} else if (obj.attachEvent){
				var r = obj.attachEvent("on"+evType, fn); 
				return r; 
			} else { 
				return false; 
			}
		} catch(e){} 
	}
	this.PostProcessExecute = function(){
		for(i = 0; i < this.PostProcessFunctions.length; i++){
			eval(this.PostProcessFunctions[i]);
		}
	}  
	this.PostProcess = function(){
		//this.AddEvent(window, 'load', this.PostProcessExecute())
		if (this.AdLazyLoad) {
		// This is to safeguard against anything that might slip past us
			document.writeln= document.write= (function() { 
				return function(str){} 
			})(); 
			Page.Ad.LoadAds();
		}
		this.BehavioralTargeting.Initialize(); 
		GDN.util.owloader.load();
	}
	this.RegisterFunctionPostProcess = function(functionName){
		this.PostProcessFunctions.push(functionName);
	}
	this.BehavioralTargetingRegisterScript = function(scriptFile){
		this.BehavioralTargetingScripts.push(scriptFile);
	}
	this.GDNRegisterScript = function(scriptFile){
		this.GDNScripts.push(scriptFile);
	}  
}
/* Ad Object*/
Gannett.Ad = function(){
	this.Initialized = false;
	this.Enable = true;  
	/* Ad System Variables */
	this.Server = "";
	this.NetworkId = 0;
	this.AdDefaultId = 0;
	this.KeyValues = new Array();
	this.KeyWords = new Array();
	this.Throttle = 0;
	this.KeyWordsCounter = 0;
	this.KeyValuesPair = "";
	this.KeyValuesPairCounter = 0;
	this.SitePage = "";
	this.AdGroupId;
	this.AdLazyLoad = false;
	this.QueuedScripts = new Array(); 
	this.PagePositions = new Array(); 
	/* Initialize the objects' values */
	this.Initialize = function(){
		if(this.Enable){
			this.SitePage = this.SitePage.replace(/\/$/,'');  
			var RandomNumber = Math.round(Math.random() * 3 + 1);
			if(RandomNumber > (4 - this.Throttle)){
				// Add the query parameter to key value pair
				this.AddKeyValue(location.search.substring(1));
				if(this.AdGroupId == undefined){
					this.AdGroupId = Math.round(Math.random() * 1000000);
				}
				this.Initialized = true;
			}
		}
	}
  this.AdScript = function(position) { 
		var PosRegExp = RegExp(/(\d+)x(\d+)_(.*)/);
		var SizePosition = "";
		var CreativeSize = "";
		var KeyWordTag = ""
		var KeyValuesTag = "";
		var AdPosition = "";

		if(position.match(PosRegExp)){
			CreativeSize = "-1";
			SizePosition = position.replace(/_\w$/, '');
		} else {
			// for dynamic ads using words.
			CreativeSize = "0";
			SizePosition = "";
		}
		if (this.KeyWords.length > 0) KeyWordTag = "key=" + this.KeyWords.join("+") + ";";
		if (this.KeyValues.length > 0) KeyValuesTag = this.KeyValues.join(";") + ";";
		var url = 'http://' + this.Server + '/addyn/3.0/' + this.NetworkId + '/' + this.AdDefaultId + '/0/' + CreativeSize + '/ADTECH;size=' + SizePosition + ';alias=' + this.SitePage +'_'+ position + ';cookie=info;loc=100;target=_blank;' + KeyWordTag + KeyValuesTag + 'grp=' + this.AdGroupId + ';misc=' + new Date().getTime();
		return url;
  }
  this.LoadAds = function() {  
  	for (var i=this.PagePositions.length-1;i>=0;i--) { 
		var position = this.PagePositions[i]; 
		var id = 'adctr_' + position; 
		var el = document.getElementById(id); 
		if ( el == null ) return;  
		var scriptObj = { src: this.AdScript(position) }; 
		GDN.util.owloader.stackScript( scriptObj,  el); 
	}
  }
  this.PositionSize = function(position) {
	var PosRegExp = RegExp(/(\d+)x(\d+)_(.*)/);		
	if (!position.match(PosRegExp)) return;
	var positionSplit = position.split("x");
	var positionSize = {
	    width: positionSplit[0],
	    height: positionSplit[1].split("_")[0] + "px"
	};
	return positionSize;
  }
  
  
	/* Displays the Ad */  
	this.Display = function(position){
		if (this.AdLazyLoad) {
		    var myUrl = this.AdScript(position); 
      		    this.PagePositions.push(position);
      		    var divHtml = "<div class=\"adctr\" id=\"adctr_" + position + "\"";
      		    var dims = this.PositionSize(position);
		 /*
      		    if (dims) 
      		        divHtml += " style=\"width:" + dims.width + ";height:" + dims.height + ";\" ";
		*/
		    divHtml += "><\/di" + "v>";
      	      	    document.write(divHtml);
		} else {
		    if (this.Initialized){
				var PosRegExp = RegExp(/(\d+)x(\d+)_(.*)/);		
				var SizePosition = "";
				var CreativeSize = "";
				var KeyWordTag = ""
				var KeyValuePairTag = "";
				var AdPosition = "";

				if(position.match(PosRegExp)){
				CreativeSize = "-1";
				SizePosition = position.replace(/_\w$/, '');
				} else {
				// for dynamic ads using words.
				CreativeSize = "0";
				SizePosition = "";
				}
				if (this.KeyWords.length > 0) KeyWordTag = "key=" + this.KeyWords.join("+") + ";";
				if (this.KeyValues.length > 0) KeyValuesTag = this.KeyValues.join(";") + ";";
				document.write('<scr' + 'ipt language="javascript1.1" src="http://' + this.Server + '/addyn/3.0/' + this.NetworkId + '/' + this.AdDefaultId + '/0/' + CreativeSize + '/ADTECH;size=' + SizePosition + ';alias=' + this.SitePage +'_'+ position + ';cookie=info;loc=100;target=_blank;' + KeyWordTag + KeyValuesTag + 'grp=' + this.AdGroupId + ';misc=' + new Date().getTime()+ '"></scr' + 'ipt>');
			}
		}
	}
	
	/* Supporting Function */  
	this.AddKeyValue = function (queryString){
		var QuerySplit = queryString.split("&");
		var KeywordFound = 0;
		for(i = 0; i < QuerySplit.length ; i++){
			//Check whether the key is in key-value pair 
			var KeyValuePairSplit = QuerySplit[i].split("=");			
			if (KeyValuePairSplit != "" && this.KeyValuesPairCounter < 8){
				for (var j = 0; j < this.KeyValues.length; j++){
					if(this.KeyValues[j].toLowerCase() == KeyValuePairSplit[0].toLowerCase()){
						KeywordFound = 1;
						break;
					}
				} 
				//if found add the keyvalue pair to a string 
				if(KeywordFound == 1){
					if (this.KeyValuesPair == ""){
						this.KeyValuesPair = "kv" + QuerySplit[i];
					}else{
						this.KeyValuesPair = this.KeyValuesPair + ";" + "kv" + QuerySplit[i];
					}
					this.KeyValuesPairCounter++;
				}
				KeywordFound=0;
			}
		}
	}
}
/* Video Object */
Gannett.Video = function() {
	this.Enable = true;
	this.Player="";
	this.MavenAccount="";
	this.MavenURL = "";
	this.AdPositionId ="";
	this.AdPosition = "";
	this.AdServer = "";
	this.Key = "";
	this.AdGroupID = 0;
	this.AdServerBasePath = "";
	this.AdSystem = "";
	this.AdSiteId = "";
	this.Alias = "";
	this.AdDefaultId = "";
	this.AdNetworkId = "";
	this.SSTS_Val = "";
	this.GpaperCode = "";
	this.Gnt_AdDomain = "";
	this.Revsci_segment=""; 
	this.Vzip = ""; 
	this.Vyear = ""; 
	this.Vgend = ""; 
	this.CheckSystemId = ""; 
	this.ReferralPlaylistId = ""; 
	this.ReferralObject = ""; 
	this.ReferralLinkBackURL = ""; 
	this.ReferralLinkBackDesc = ""; 
	this.DeepLinkUrl = ""; 
	this.PageContentSubcategory = ""; 
	this.PageContentCategory = "";
	this.Division = "";
	this.FlashParentHTML ="";
};
/* BehavioralTargeting Object*/
Gannett.BehavioralTargeting = function(){
	this.Initialized = false;
	this.Enable = true;  
	this.ZipCode = "";
	this.Age = 0;
	this.Gender = "";
	this.SSTS = "";
	this.ScriptFiles = new Array();
	/* Initialize the objects' values */
	this.Initialize = function(){
		var Util = new Gannett.Util();
		if(!this.Initialized){
			for(i=0; i < this.ScriptFiles.length; i++){
				var s= GDN.util.owloader.queueScript( 
					{ src: this.ScriptFiles[i] }
				); 
				s.subscribe("onComplete", 
					this.getProcess()
				); 
			}
		}
		Util = null;
		this.Initialized = true;
	}
	this.RegisterScriptFile = function (scriptFile){
		this.ScriptFiles.push(scriptFile);
	}
	this.getProcess= function() { 
		var bh = this; 
		return function() { bh.Process(); }
	};
	this.Process = function (){
		
		if(this.Initialized && this.Enable){
			/* assign the data */
			if(this.ZipCode != undefined){    
				DM_addToLoc("zipcode", this.ZipCode);
				DM_addToLoc("age", this.Age);
				DM_addToLoc("gender", this.Gender);
				DM_cat(this.SSTS);
				DM_tag();
			}
		}
	}
}
/* GDN Object*/
Gannett.GDN = function(){
	this.Initialized = false;
	this.Enable = true;
	this.GCIONID;
	this.ZipCode;
	this.YearOfBirth;
	this.GenderCode;
	this.ScriptFiles = new Array();
	/* Initialize the objects' values */
	this.Initialize = function(){
		if(!this.Initialized){
			var Util = new Gannett.Util();
			for(i =0; i < this.ScriptFiles.length; i++){
				Util.LoadJS(this.ScriptFiles[i]);
			}
			Util = null;
		}
		this.Initialized = true;
	}
	this.UpdateGCIONIDCallback = function(){
		// get user from response
		var user = new GDN.UR.User(GDN.UR.UserData);
		// set values for COPPA
		if (user.Status() == GDN.UR.UserStatus.UnderAge){
			user.GcionId("0");
			user.Yob(new Date().getFullYear());
		}
		// set local cookie
		GDN.Cookies.GCION.Set(user, user.Status());
	}  
	this.UpdateRSISEGCookie = function (){
		/* do value checks before calling */
		if(this.Initialized && this.Enable){
			if (GDN.Cookie.Exists(GDN.Cookies.Session.Name)){
				var updateBtCookie = (!GDN.IsNullOrEmpty(GDN.Cookies.Session.GetValue("ubt"))) ? GDN.Cookies.Session.GetValue("ubt") : "1";
				if (updateBtCookie == "1" && !GDN.IsNullOrEmpty(rsinetsegs)){
					GDN.Rpc.Send(GDN.RegUrl("q=5&Segment=" + escape(rsinetsegs.join('|'))));
					GDN.Cookies.Session.SetValue("ubt", "0");
				}
			}
		}
	}
	this.ZagUserInfo = function(){
		if(this.Initialized){
			if(this.GCIONID && this.ZipCode && this.YearOfBirth && this.GenderCode){
				// initialize User object
				var User = new GDN.UR.User();
				// set property values
				User.Country("us");
				User.GcionId(this.GCIONID);
				User.Zip(this.ZipCode);
				User.Yob(this.YearOfBirth);
				User.Gender(this.GenderCode);
				// add callback handler
				GDN.Callback.Add(this.UpdateGCIONIDCallback);
				// ZAG user
				GDN.UR.UserProvider.Zag(User);
			}
		} 
	}
	this.RegisterScriptFile = function (scriptFile){
		this.ScriptFiles.push(scriptFile);
	}  
    
	this.UpdateZagUserInfo = function(user){
		var querystring = "q=4&c=1&NoCookie=1&";
		var cookie = GDN.Cookies.GCION.Get();
		if (user.Country() != "us")
			user.Zip("00000");
		// append required parameters
		querystring = GDN.AppendParam(querystring, "Country", user.Country());
		querystring = GDN.AppendParam(querystring, "GCIONID", GDN.Cookies.GCION.GetValue("GcionId"));
		querystring = GDN.AppendParam(querystring, "Gender", this.GenderCode);
		querystring = GDN.AppendParam(querystring, "OriginatingSite", escape(gdn_reg_site_code));
		querystring = GDN.AppendParam(querystring, "YOB", this.YearOfBirth);
		querystring = GDN.AppendParam(querystring, "Zip", this.ZipCode);
		// append optional parameters
		if (gdn_occupation_required){
			if (user.Occupation()){
				querystring = GDN.AppendParam(querystring, "Occupation", user.Occupation());
				if (occupation != "Student/Intern" && occupation != "Retired" && occupation != "Not Employed"){
					querystring = GDN.AppendParam(querystring, "Industry", user.Industry());
					querystring = GDN.AppendParam(querystring, "CompanySize", user.CompanySize());
				}
			}	
		}
		// Add Callback Handler
		GDN.Callback.Add(this.UpdateGCIONIDCallback);
		// update ZAG data
		GDN.Rpc.Send(GDN.RegUrl(querystring));
	} 
}
/* Util */
Gannett.Util = function(){
	this.LoadJS = function(url){
		var BrowserAgent=navigator.userAgent.toLowerCase();
		var IsFF = false;
		if(BrowserAgent.indexOf('firefox')!=-1) {
			IsFF = true;
		}
		if(IsFF){
			var ScriptElement = document.createElement("script");
			ScriptElement.setAttribute("src", url)
			ScriptElement.setAttribute("type","text/javascript")
			document.getElementsByTagName("head")[0].appendChild(ScriptElement);
		} else {
			document.writeln("<script type='text/javascript' src='"+ url +"'><" + "/script>");
		}
	};
}

if (typeof GDN == 'undefined' || !GDN){
	var GDN= {  
		util: { } 
	};
}else if (typeof GDN.util == 'undefined' || !GDN.util) 
	GDN.util= new Object(); 
else if (typeof GDN.util.DOMUtil == 'undefined' || !GDN.util.DOMUtil) 
	GDN.util.DOMUtil= new Object(); 

GDN.log= function(msg) { 
		if(typeof YAHOO == 'object' && typeof YAHOO.log == 'function') YAHOO.log(msg); 
		else if (typeof console == 'object' && typeof console.log != 'undefined') console.log(msg);
		else return; 
}

GDN.namespace = function() {
    var a=arguments, o=null, i, j, d;
    for (i=0; i<a.length; i=i+1) {
        d=a[i].split(".");
        o=GDN;
        for (j=(d[0] == "GDN") ? 1 : 0; j<d.length; j=j+1) {
            o[d[j]]=o[d[j]] || {};
            o=o[d[j]];
        }
    }
    return o;
}
GDN.extend= function(subc, superc, overrides) {
        if (!superc||!subc) {
            throw new Error("extend failed, please check that " +
                            "all dependencies are included.");
        }
        var F = function() {};
        F.prototype=superc.prototype;
        subc.prototype=new F();
        subc.prototype.constructor=subc;
        subc.superclass=superc.prototype;
        if (superc.prototype.constructor == Object.prototype.constructor) {
            superc.prototype.constructor=superc;
        }
    
        if (overrides) 
            for (var i in overrides) 
                  subc.prototype[i]=overrides[i];
};
(function() { 
	GDN.namespace('util.Publisher'); 
	//TODO:Fix this so we can contstruct properly 
	GDN.util.Publisher.prototype= function() { }
	GDN.util.Publisher.prototype.subscribe= function(evt, fn) { 
		if(!this._subscribers) this._subscribers=new Object(); 
		if(!(evt in this._subscribers)) 
			this._subscribers[evt]= new Array(); 
		this._subscribers[evt].push(fn); 
	}
	GDN.util.Publisher.prototype.fire= function(evt,tgt) {
		if(!this._subscribers) this._subscribers=new Object(); 
		if (!(evt in this._subscribers)) return null;
		var _fns= this._subscribers[evt];
		for(var i=0;i<_fns.length;i++){
			if(tgt)
				_fns[i].call(tgt, evt);
			else
				_fns[i](evt); 
		}
		return true;
	}
})();
GDN.namespace("env"); 
GDN.env.ua= function() {
	var o={ 
        	ie:0,
		opera:0,
        	gecko:0,
		webkit:0,
		mobile:null, 
		air:0
	}; 
	var ua= navigator.userAgent,m; 
    if ((/KHTML/).test(ua)) {
        o.webkit=1;
    }
    // Modern WebKit browsers are at least X-Grade
    m=ua.match(/AppleWebKit\/([^\s]*)/);
    if (m&&m[1]) {
        o.webkit=parseFloat(m[1]);

        // Mobile browser check
        if (/ Mobile\//.test(ua)) {
            o.mobile = "Apple"; // iPhone or iPod Touch
        } else {
            m=ua.match(/NokiaN[^\/]*/);
            if (m) {
                o.mobile = m[0]; // Nokia N-series, ex: NokiaN95
            }
        }

        m=ua.match(/AdobeAIR\/([^\s]*)/);
        if (m) {
            o.air = m[0]; // Adobe AIR 1.0 or better
        }

    }

    if (!o.webkit) { // not webkit
        // @todo check Opera/8.01 (J2ME/MIDP; Opera Mini/2.0.4509/1316; fi; U; ssr)
        m=ua.match(/Opera[\s\/]([^\s]*)/);
        if (m&&m[1]) {
            o.opera=parseFloat(m[1]);
            m=ua.match(/Opera Mini[^;]*/);
            if (m) {
                o.mobile = m[0]; // ex: Opera Mini/2.0.4509/1316
            }
        } else { // not opera or webkit
            m=ua.match(/MSIE\s([^;]*)/);
            if (m&&m[1]) {
                o.ie=parseFloat(m[1]);
            } else { // not opera, webkit, or ie
                m=ua.match(/Gecko\/([^\s]*)/);
                if (m) {
                    o.gecko=1; // Gecko detected, look for revision
                    m=ua.match(/rv:([^\s\)]*)/);
                    if (m&&m[1]) {
                        o.gecko=parseFloat(m[1]);
                    }
                }
            }
        }
    }
    return o;
}();

(function(){ 
GDN.util.owloader= {
	_runningScript: null, 
	_queue: new Array(), 
	_firstrun: true, 
	getCallback: function() {
		var loader = this; 
		return function() { 
			document.getElementById= document._getElById;
			loader.updateContent(); 
			loader._runningScript= null; 
			return loader.load(); 
		}
	},
	QueueLength: function() { return this._queue.length; },
	queueScript: function(scriptObj,container) { 
		var lazyScript = makeOverwriter.call(this, scriptObj, container); 
		this._queue.push(lazyScript); 
		return lazyScript; 
	},
	Queue: this.queueScript,
	stackScript: function(scriptObj,container) { 
		var lazyScript = makeOverwriter.call(this, scriptObj, container); 
		this._queue.unshift(lazyScript); 
		return lazyScript;
	},
	Stack: this.stackScript,
	load: function() {
		if (this._runningScript)
			return null; 
		this._runningScript= this._queue.shift(); 
		if(!this._runningScript) {
			this.fire('onEmpty'); 
			return; 
		}
		// TODO: We are done, fire our onEmpty event ??
		var _l= this; 
		document._getElById= document.getElementById;
		document.getElementById= (function(){
			var _loader= _l; 
			return function(id,noflush){
				var ret= document._getElById(id),
					_ls= _loader._runningScript; 
				if(typeof id=='undefined' || ret || noflush)return ret; 
				_loader.updateContent(); 
				return document._getElById(id); 
		}
		})();
		this._runningScript.load();  
		return this._runningScript; 
	},
	updateContent: (function(){ 
		function movestyles(el){
			var _cMap= el.getElementsByTagName('style'),
				_head= document.getElementsByTagName('head')[0]; 
			while(_cMap.length > 0) 
				_head.appendChild(_cMap[0]); 
		}
				
	return function(){ 
		if(!this._runningScript || 
			!this._runningScript.updatedom) return null; 
		var _domow= this._runningScript,
			_domel,v,t,
			_head= document.getElementsByTagName('head')[0]; 
		_domel= _domow.contentEl ? 
			_domow.contentEl : 
			_domow.attachEl.appendChild(document.createElement('div')); 
		_domow.contentEl = _domel; 
		if(!_domow.domupdated) 
			_domow.contentEl.appendChild(_domow.getplaceholder()); 
		_domow.insertcontent(_domow.contentEl); 
		_domow.domupdated= true; 
		if(_domow.isComplete())
			movestyles(_domel); 
		return; 
	}})(),
	subscribe: GDN.util.Publisher.prototype.subscribe,
	fire: GDN.util.Publisher.prototype.fire,
	unsubscribe: GDN.util.Publisher.prototype.unsubscribe
}
var nextId= 1; 
function domoverwriter(param,el,parent){ 
	var _obj= 
		isLocal(param) ? 
			new LazyChildlocal(param, el) : 
			new LazyChildremote(param,el), 
		_runningScript= null,
		_parent = (typeof parent == 'undefined' 
			|| !parent) ? null : parent; 
		_flushedtodom= false;
	if (typeof el == "undefined" || !el) {
		el= document.getElementsByTagName('head')[0]; 
		_obj.updatedom= false; 
	}else _obj.updatedom= true; 
	_obj.parent= _parent; 
	
	_obj.domupdated= false; 
	_obj.queue= new Array(); 
	_obj.childscripts= new Array(); 
	_obj.markedscripts= new Array(); 
	_obj.tbmarked= new Array(); 
	_obj.attachEl= el;
	_obj.id= nextId++; 
	_obj.subscribe('onScriptFound', childScriptFoundHandler); 
	_obj.subscribe('onFinish', scriptFinishHandler); 
	_obj.subscribe('onError', remoteChildErrorHandler); 
	_obj._load= _obj.load;
	_obj._loaded= false;
	_obj.load= function(){
		_runningScript= _obj;
		return _obj._load(arguments);
	}
	_obj.isComplete= function(){ 
		for(var i=0;i<_obj.childscripts.length;i++) 
			if(!_obj.childscripts[i].isComplete()) 
				return false; 
		return _obj._loaded;
	}
	_obj.addChild= function(param){
		return _obj.addchild(param,_obj.attachEl); 
	}
	_obj.getplaceholder= function(){
		var holder= document.createElement("owmarker"); 
		if(this._script.src)holder.setAttribute("scriptSrc", this._script.src); 
		if(this.id)holder.setAttribute("lzyid", this.id); 
		return holder; 
	}
	return _obj;
	function unload(){
		_obj.close();
		_obj.fire("onComplete",_obj); 
	}
	function loadNext(){
		var chld= _obj.queue.shift(); 
		if(!chld) return null; 
		chld.subscribe('onComplete', childFinishHandler); 
		chld.subscribe('onError', remoteChildErrorHandler); 
		chld.load(); 
		return chld;
	}
	function childScriptFoundHandler(){ 
		var a= this,
			_lChild,
			param; 
		while( (param=a.shift()) ){
			var chld= _obj.addChild(param); 
			if(!chld) continue;
			if(chld._local){
				chld.subscribe('onComplete', childFinishHandler); 
				chld.subscribe('onError', remoteChildErrorHandler); 
				chld.load();
			}
		}
	}
	function scriptFinishHandler(){ 
		if(!this._script) 
			throw new Error("Error: returning object has no _script attribute"); 
		this._loaded= true; 
		var c= loadNext(); 
		if(!c && _obj.isComplete()){
			unload(); 
		}
	}
	// Errord scripts still Finish, so all we need to do here is log it
	function remoteChildErrorHandler(){
		GDN.log("Warning: Unable to retrieve script " + this._script.src); 
		childFinishHandler.apply(this); 
	}

	function childFinishHandler(){ // this == child
		if(_obj._loaded){
			var c= loadNext(); 
			if( !c && _obj.isComplete() ) {
				unload();
			}
		}
	}

}
function isLocal(param){
	if(param.src == undefined || param.src == '')
		return true; 
	else if (param.src == '//:')
		return true; 
	else 
		return false; 
}

// This is the abstract super-class for lazy scripts
// 	Concrete classes are LazyChildlocal and LazyChildremote
function LazyChild(param,attachEl){
	this._script= createScriptEl(param); 
	var _ow= new overwriter(), 
		_el= attachEl,
		_ls= this, 
		txt= this._script.src ? 
			this._script.src : this._script.text;
	this._identifier= this._local ? this._script.text : this._script.src; 
	this.outputqueue= new Array(); 
	this._ow= _ow;
	_el= (typeof _el == 'undefined' || !_el) ? 
		document.getElementsByTagName('head')[0] : _el; 
	_ow.subscribe('onScriptFound', onScriptFound); 
	this.load= function(){ 
		_ow.start(); 
		this.runscript(); 
	} 
	this.close=function(){ _ow.finish(); } 
	this.finish= function(){ 
		this.fire("onFinish", this); 
	}
	this.flush= function(){ 
		return _ow.flush(); 
	}
	this.getOutput= function(){ 
		return _ow.read(); 
	}
	this.attach= function(){ 
		this.fire("preExec", this); 
		_el.appendChild(this._script); 
	}
	this.addchild= function(){ 
		throw new Error ("addchild() is abstract"); 
	}
	this.insertcontent= function(el){ 
		var _f= this.getContentFragment(); 
		var _m= this.findMarker(el); 
		if(_m){
			if(_m.parentNode) 
				_m.parentNode.insertBefore(_f,_m);
			else 	
				el.insertBefore(_f,_m);
		}else{
			el.appendChild(_f); 
		}
		for (var i=0;i<this.markedscripts.length;i++) {
			var c= this.markedscripts[i]; 
			c.insertcontent(el); 
		}
	}
	this.findMarker= function(element){
		var id= '',  
			_map= element.getElementsByTagName('owmarker'); 
		for (var i=0;i<_map.length;i++){
			var m= _map[i]; 
			var id= m.getAttribute('lzyid');
			if(id==this.id) return m; 
		}
		return null; 
	}

	this.getContentFragment= function(){ 
		var _h,
			_e= document.createElement('div'),
			_f= document.createDocumentFragment(),
			__iescripthack= '<span style="display:none">p</span>';
		_h= this.flush(); 
		if(GDN.env.ua.ie) _h= __iescripthack + _h; 
		_e.innerHTML= _h; 
		if(GDN.env.ua.ie) _e.removeChild(_e.firstChild); 
		var _sMap= _e.getElementsByTagName('script'), 
		    _mMap= _e.getElementsByTagName('owmarker'),
		    s, domscript, holder; 
		if(this.tbmarked.length != _sMap.length) debugger; 
		while( (s=this.tbmarked.shift()) ){
			var domscript= _sMap[0], 
				_holder= s.getplaceholder(); 
			if(!domscript) debugger;
			if(domscript.parentNode) 
				domscript.parentNode.replaceChild(_holder,domscript);
			else 	
				_e.replaceChild(_holder,domscript);
			this.markedscripts.push(s); 
		}
		while(_e.childNodes.length>0)
			_f.appendChild(_e.childNodes[0]);
		return _f; 
	}
	function onScriptFound(){ 
		_ls.fire("onScriptFound", this); 	
	}
}
function makeOverwriter(p,el){
	var lazyScript = new domoverwriter(p, el); 
	lazyScript.subscribe("onComplete", this.getCallback());
	return lazyScript;
}

function LazyChildlocal(){ 
	this._local= true; 
	LazyChild.apply(this,arguments); 
	this.runscript= function(){ 
	// Why do we need to fork for gecko? 
	//	FireFox will execute scripts in the order they are attached to the DOM, 
	///	giving no precedence to scripts that do not have a src= attribute.  
	//	Since FF gives us no onload event for local scripts, we have no idea if this 
	//	actually finishes before we return.  
	//	No other browser exhibits this behavior. 
		if(GDN.env.ua.gecko) { 
			try { window.eval(this._script.text);	} 
			catch (ignore) { }
		}else 
			this.attach(); 
		this.finish();
	}
	this.addchild= function(param,el){ 
		var chld= new domoverwriter(param,el,this);
		this.childscripts.push(chld); 
		this.tbmarked.push(chld); 
		if(this.parent) 
			this.parent.queueChild(chld);
		else
			this.queueChild(chld); 
		return chld; 
	}
	this.queueChild= function(chld){
		if(chld._local) return; 
		if(this.parent) 
			this.parent.queueChild(chld); 
		else 
			this.queue.push(chld); 
	}
}
function LazyChildremote (){ 
	this._local= false; 
	LazyChild.apply(this,arguments); 
	this.runscript= function(){ 
		var _onload= _loadHandler.apply(this); 
		/*
		if(GDN.env.ua.opera)
			this._script.onload= _onload; 
		else 
			this._script.onload= 
				this._script.onreadystatechange= 
					_onload;
		*/
	//TODO: Add error and timeout handlers 
		if(this._script.addEventListener) {
			this._script.addEventListener('load', _onload, false); 
			this._script.addEventListener('error', _errorHandler.apply(this),false); 
		}else if(this._script.attachEvent){
			this._script.attachEvent('onreadystatechange', _onload); 
			this._script.attachEvent('onerror', _errorHandler.apply(this)); 
		}else{
			this._script.onload= _onload; 
			this._script.onerrror= _errorHandler.apply(this); 
		}

		//this._script.onerror= _errorHandler.apply(this); 
		this.attach(); 
	}
	this.addchild= function(param,el){
		var chld= new domoverwriter(param,el,this); 
		this.childscripts.push(chld); 
		this.tbmarked.push(chld); 
		this.outputqueue.push(chld); 
		this.queueChild(chld); 
		return chld; 
	}
	this.queueChild= function(chld){ 
		if(chld._local) return; 
		this.queue.push(chld); 
	}

	function _errorHandler(){ 
		var _ls= this; 
		return function(e){ 
			_ls.fire('onError', _ls); 
			_ls.finish(); 
		}
	}
	function _loadHandler(){ 	
		var _ls= this;
		return function(e){  // this == scriptEl
			if(!e) var e= window.event; 
			var tgt; 
			if(e.target) tgt= e.target
			else if(e.srcElement) tgt= e.srcElement; 
			if(tgt.nodeType == 3 && tgt.parentNode) tgt= tgt.parentNode; 
			if (    
				tgt.readyState && 
				tgt.readyState != "loaded" && 
				tgt.readyState != "complete"
			){ 
				if(tgt.src.indexOf('adperf') >=0) 
					return _ls.finish();
				return false;
			}
			_ls.finish();
		}
	}
}
function overwriter(el){ 
var _outputbuffer= '',
	_dw= document.write,
	_dwl= document.writeln,
	_el= el, 
	_frag= document.createDocumentFragment(), 
	_scriptParser= new scriptParser(),
	_ow= this;
this.read= function(){ return _outputbuffer; }
this.flush= function(){
	var ret= _outputbuffer;
	_outputbuffer= ''; 
	return ret;
}
this.finish= function(){
	document.write= _dw; 
	document.writeln= _dwl; 
}
this.start= function(){ 
	document.write= (function(){
		var _sp= _scriptParser;
		return function(str){ 
			_outputbuffer+= str; 
			_sp.findscripts(str); 
			if(_sp.scripts.length>0)
				_ow.fire('onScriptFound', _sp.scripts); 
		}
	})(); 
	document.writeln= (function(){ 
		return function(str){ return document.write(str + "\n"); } 
	})(); 
}
}

function createScriptEl(param) { 

	var scriptEl = document.createElement('script'); 
	for (attr in param) { 
		if (attr == 'text') 
			scriptEl.text = param[attr]; 
		else if (attr == 'for')
			scriptEl.htmlFor = param[attr]; 
		else if ( attr == 'onload' ) 
			scriptEl.onload = param[attr]; 
		else if ( attr == 'onreadystatechange' ) 
			scriptEl.onreadystatechange = param[attr];
		else if ( attr == 'onerror' ) 
			scriptEl.onerror= param[attr]; 
		else  { 
			try { scriptEl.setAttribute(attr, param[attr]); }
			catch(ignore) { }
		}
	}
	return scriptEl; 
}
GDN.extend(LazyChild, GDN.util.Publisher); 
GDN.extend(LazyChildlocal, GDN.util.Publisher); 
GDN.extend(LazyChildremote, GDN.util.Publisher); 
GDN.extend(overwriter, GDN.util.Publisher); 
function scriptParser(){ 
	this.scripttag = ''; 
	this.scriptbody = ''; 
	this.inscripttag = false; 
	this.inscriptbody = false; 
	this.currscriptbody = ''; 
	this.currframebody = ''; 
	this.localscripts = new Array(); 
	this.remotescripts = new Array(); 
	this.scripts = new Array(); 
	this.iniframetag = false; 
	this.findscripts = function(pString) { 
		if (this.iniframetag) {
			this.currframebody += pString;
			this.checkFrameClose(); 
			return; 
		}
		this.currscriptbody += pString; 

		if ( this.scripttag == '' ) {  
			if ( this.getScriptTag(pString) == false )  { 
				if (!this.iniframetag) return false; 
				else if ( this.checkFrameClose() == false )  
					return false; 
			}

		}
		if ( this.checkClose() == false ) 
			return false; 
		this.createScriptParams(); 
		if (this.remainder != '')  { 
			this.findscripts(this.remainder); 
		}
		return true; 
	}
	this.checkFrameClose = function() { 
		var closeTagRe = /<\s*\/iframe\s*>/im; 
		if ( (matches=closeTagRe.exec(this.currframebody)) ) { 
			var idx = this.currframebody.indexOf(matches[0]); 
			var removeStart = idx + matches[0].length; 
			var remainder = this.currframebody.substr( 
				removeStart, this.currframebody.length - removeStart 
			); 
			this.currframebody = ''; 
			this.iniframetag = false; 
			this.findscripts(remainder); 
			return true; 
		}else 
			return false; 
	}
	this.checkClose = function () { 
		var closeTagRe = /(<\s*\/script\s*>)[\s\S]*/im; 
		if ( (matches = closeTagRe.exec(this.currscriptbody)) ) {  
			var tmpBody = 	
				this.currscriptbody.replace (
					closeTagRe, '' 
			); 
			var tagMatch = matches[1];  
			var index = this.currscriptbody.indexOf(tagMatch); 
			var restofStrLen = this.currscriptbody.length - index
			var restOfString = 
				this.currscriptbody.substr (
					index + tagMatch.length,
					restofStrLen
				); 
			this.currscriptbody = tmpBody; 
			this.remainder = restOfString; 
			return true; 
		}else
			return false; 
	}

	this.getScriptTag = function (pString) { 
		// If we have not foundEnd and scriptbody is empty, 
		// we do not have a script tag
		// If we have not foundEnd and scriptbody has data, 
		// then we are still looking for the rest of the opening tag
		var foundEnd = this.checkForScriptTag(); 
		if ( foundEnd ) 
			return true; 
		else 
			return false; 
	}
	this.checkForScriptTag = function() { 
		var index = this.currscriptbody.indexOf('<'); 
		if ( index <= -1 ) {  
			this.currscriptbody = ''; 
			return false; 
		}
		var tmp = this.currscriptbody.substr (
			index + 1, 
			this.currscriptbody.length - index + 1
		);
		tmp = tmp.replace(/<\s*/g, '<'); 
		var mytokens = tmp.split (''); 
		// To add the < we removed w/ our substr(index+1)
		// this is done so we can check for more < chars
		// if we dont have a script tag here
		mytokens.unshift('<'); 
		var iFrameTagMatch = [ '<', 'i', 'f', 'r', 'a', 'm', 'e' ]; 
		var scriptTagMatch = [ '<', 's', 'c', 'r', 'i', 'p', 't' ]; 
		var foundiframe = true; 
		for (var p=0;p<iFrameTagMatch.length;p++) { 
			var token = mytokens[p].toLowerCase(); 
			var iframeToken = iFrameTagMatch[p]; 
			if ( token != iframeToken ) { foundiframe = false; break; } 
		}
		if ( foundiframe ) { 
			this.iniframetag= true; 
			this.currframebody = tmp; 
			this.currscriptbody = '';
			return false; 
		}
		for (var p=0;p<scriptTagMatch.length;p++) { 
			var token = mytokens[p].toLowerCase(); 
			if (token != scriptTagMatch[p]) { 
				this.currscriptbody = ''; 
				break; 
			}
		}
		if ( this.currscriptbody == '' ) { // We did not match on the first index, 
			this.currscriptbody = tmp; 
			return this.checkForScriptTag(); 
		}
		var endoftag = -1; 
		endoftag = tmp.indexOf('>'); 
		if ( endoftag > -1 ) {
			this.scripttag = tmp.substr(0,endoftag+1); 
			this.currscriptbody =  tmp.substr(endoftag+1,tmp.length);
			return true; 
		}
	}
	this.createScriptParams = function () { 
		var tagRegex = /([A-Za-z]+)=["']?([^'"\s>]+)["']?\s*/igm; 
		var param = new Object(); 
		while ( (matches = tagRegex.exec(this.scripttag)) ) {
			param[matches[1].toLowerCase()] = matches[2]; 
		}	
		param.text = this.currscriptbody; 
		if ( param.src == undefined ) 
			this.localscripts.push(param);  
		else { 
			this.remotescripts.push(param); 
		}
		this.scripts.push(param); 
		this.currscriptbody = ''; 
		this.scripttag = ''; 
	}
}



})(); 

