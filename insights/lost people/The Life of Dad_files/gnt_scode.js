/* Version 2.1.1 */

var t1= new Date(); 
var gciDocURL=document.location;
gciDocURL=gciDocURL.toString().toLowerCase();
var s_account = '';
var gci_mn = '';
var gci_st = '';
var marketType = '';
var gci_aff=gnt_SstatId;

if (typeof gnt_PageVars != 'undefined') {
  gci_pc=gnt_PageVars.pc;
  if(gci_pc=='moms.minn@moms'){gci_mn='Minneapolis, MN:kare';gci_st='MN';marketType='broadcast';}
  else if(gci_pc=='moms.appleton@moms'){gci_mn='Appleton:postcrescent';gci_st='WI';marketType='newspaper';}
  else if(gci_pc=='moms.alexandria@moms'){gci_mn='Alexandria:thetowntalk';gci_st='LA';marketType='newspaper';}
  else if(gci_pc=='moms.asbury@moms'){gci_mn='Monmouth and Ocean counties:app';gci_st='NJ';marketType='newspaper';}
  else if(gci_pc=='moms.atlanta@moms'){gci_mn='Atlanta, GA:wxia';gci_st='GA';marketType='broadcast';}
  else if(gci_pc=='moms.binghamton@moms'){gci_mn='Binghamton:pressconnects';gci_st='NY';marketType='newspaper';}
  else if(gci_pc=='moms.brevard@moms'){gci_mn='Melbourne:floridatoday';gci_st='FL';marketType='newspaper';}
  else if(gci_pc=='moms.buffalo@moms'){gci_mn='Buffalo, NY:wgrz';gci_st='NY';marketType='broadcast';}
  else if(gci_pc=='moms.burlington@moms'){gci_mn='Burlington:burlingtonfreepress';gci_st='NY';marketType='newspaper';}
  else if(gci_pc=='moms.cherryhill@moms'){gci_mn='Burlington, Camden and Gloucester Counties:courierpostonline';gci_st='NJ';marketType='newspaper';}
  else if(gci_pc=='moms.cincy@moms'){gci_mn='Cincinnati:cincinnati';gci_st='OH';marketType='newspaper';}
  else if(gci_pc=='moms.cleveland@moms'){gci_mn='Cleveland, OH:wkyc';gci_st='OH';marketType='broadcast';}
  else if(gci_pc=='moms.columbiasc@moms'){gci_mn='Columbia,SC:wltx';gci_st='SC';marketType='broadcast';}
  else if(gci_pc=='moms.dc@moms'){gci_mn='Washington, DC:wusa';gci_st='DC';marketType='broadcast'}
  else if(gci_pc=='moms.denver@moms'){gci_mn='Denver, CO:kusa';gci_st='CO';marketType='broadcast'}
  else if(gci_pc=='moms.desmoines@moms'){gci_mn='Des Moines:desmoinesregister';gci_st='IA';marketType='newspaper';}
  else if(gci_pc=='moms.detroit@moms'){gci_mn='Detroit:freep';gci_st='MI';marketType='newspaper';}
  else if(gci_pc=='moms.eastbrunswick@moms'){gci_mn='Central New Jersey:mycentraljersey';gci_st='NJ';marketType='newspaper';}
  else if(gci_pc=='moms.elmira@moms'){gci_mn='Elmira:stargazette';gci_st='NY';marketType='newspaper';}
  else if(gci_pc=='moms.ftcollins@moms'){gci_mn='Fort Collins:coloradoan';gci_st='CO';marketType='newspaper';}
  else if(gci_pc=='moms.ftmyers@moms'){gci_mn='Southwest Florida:news-press';gci_st='FL';marketType='newspaper';}
  else if(gci_pc=='moms.grandrapids@moms'){gci_mn='Grand Rapids,MI:wzzm';gci_st='MI';marketType='broadcast';}
  else if(gci_pc=='moms.greatfalls@moms'){gci_mn='Great Falls:greatfallstribune';gci_st='MO';marketType='newspaper';}
  else if(gci_pc=='moms.greenbay@moms'){gci_mn='Appleton:postcrescent';gci_st='WI';marketType='newspaper';}
  else if(gci_pc=='moms.greensboro@moms'){gci_mn='Greensboro, NC:wfmy';gci_st='NC';marketType='broadcast';}
  else if(gci_pc=='moms.greenville@moms'){gci_mn='Greenville:greenvilleonline';gci_st='SC';marketType='newspaper';}
  else if(gci_pc=='moms.hattiesburg@moms'){gci_mn='Hattiesburg:hattiesburgamerican';gci_st='MS';marketType='newspaper';}
  else if(gci_pc=='moms.honolulu@moms'){gci_mn='Honolulu:HonoluluAdvertiser';gci_st='HI';marketType='newspaper';}
  else if(gci_pc=='moms.indy@moms'){gci_mn='Indianapolis:indystar';gci_st='IN';marketType='newspaper';}
  else if(gci_pc=='moms.ithaca@moms'){gci_mn='Ithaca:theithacajournal';gci_st='NY';marketType='newspaper';}
  else if(gci_pc=='moms.jacksonms@moms'){gci_mn='Jackson, MS:clarionledger';gci_st='MS';marketType='newspaper';}
  else if(gci_pc=='moms.jacksontn@moms'){gci_mn='Jackson:jacksonsun';gci_st='TN';marketType='newspaper';}
  else if(gci_pc=='moms.jacksonville@moms'){gci_mn='Jacksonville, FL:wtlv';gci_st='FL';marketType='broadcast';}
  else if(gci_pc=='moms.lafayettein@moms'){gci_mn='Lafayette:jconline';gci_st='IN';marketType='newspaper';}
  else if(gci_pc=='moms.lafayettela@moms'){gci_mn='Lafayette:theadvertiser';gci_st='LA';marketType='newspaper';}
  else if(gci_pc=='moms.lansing@moms'){gci_mn='Lansing:lansingstatejournal';gci_st='MI';marketType='newspaper';}
  else if(gci_pc=='moms.louisville@moms'){gci_mn='Louisville:courier-journal';gci_st='KY';marketType='newspaper';}
  else if(gci_pc=='moms.littlerock@moms'){gci_mn='Little Rock, AR:kthv';gci_st='AR';marketType='broadcast';}
  else if(gci_pc=='moms.macon@moms'){gci_mn='Macon:13wmaz';gci_st='GA';marketType='broadcast';}
  else if(gci_pc=='moms.maine@moms'){gci_mn='Portland,ME:wcsh';gci_st='ME';marketType='broadcast';}
  else if(gci_pc=='moms.monroe@moms'){gci_mn='Monroe:thenewsstar';gci_st='LA';marketType='newspaper';}
  else if(gci_pc=='moms.montgomery@moms'){gci_mn='Montgomery:montgomeryadvertiser';gci_st='AL';marketType='newspaper';}
  else if(gci_pc=='moms.muncie@moms'){gci_mn='Muncie:thestarpress';gci_st='IN';marketType='newspaper';}
  else if(gci_pc=='moms.nashville@moms'){gci_mn='Nashville:tennessean';gci_st='TN';marketType='newspaper';}
  else if(gci_pc=='moms.newarkoh@moms'){gci_mn=':centralohio';gci_st='OH';marketType='newspaper';}
  else if(gci_pc=='moms.orlando@moms'){gci_mn='Melbourne:floridatoday';gci_st='FL';marketType='newspaper';}
  else if(gci_pc=='moms.pensacola@moms'){gci_mn='Pensacola:pnj';gci_st='FL';marketType='newspaper';}
  else if(gci_pc=='moms.phoenix@moms'){gci_mn='Phoenix:azcentral';gci_st='AZ';marketType='newspaper';}
  else if(gci_pc=='moms.rochester@moms'){gci_mn='Rochester:democratandchronicle';gci_st='NY';marketType='newspaper';}
  else if(gci_pc=='moms.reno@moms'){gci_mn='Reno:rgj';gci_st='NV';marketType='newspaper';}
  else if(gci_pc=='moms.sacramento@moms'){gci_mn='Sacramento, CA:kxtv';gci_st='CA';marketType='broadcast';}
  else if(gci_pc=='moms.salisbury@moms'){gci_mn='moms.salisbury';gci_st='MD';marketType='newspaper';}
  else if(gci_pc=='moms.salem@moms'){gci_mn='Salem:statesmanjournal';gci_st='OR';marketType='newspaper';}
  else if(gci_pc=='moms.shreveport@moms'){gci_mn='Shreveport:shreveporttimes';gci_st='LA';marketType='newspaper';}
  else if(gci_pc=='moms.springfield@moms'){gci_mn='Springfield:news-leader';gci_st='MO';marketType='newspaper';}
  else if(gci_pc=='moms.siouxfalls@moms'){gci_mn='Sioux Falls:argusleader';gci_st='SD';marketType='newspaper';}
  else if(gci_pc=='moms.stcloud@moms'){gci_mn='St. Cloud:sctimes';gci_st='MN';marketType='newspaper';}
  else if(gci_pc=='moms.stgeorge@moms'){gci_mn='St. George:thespectrum';gci_st='UT';marketType='newspaper';}
  else if(gci_pc=='moms.stlouis@moms'){gci_mn='St. Louis, MO:ksdk';gci_st='MO';marketType='broadcast';}
  else if(gci_pc=='moms.tallahassee@moms'){gci_mn='Tallahassee:tallahassee';gci_st='FL';marketType='newspaper';}
  else if(gci_pc=='moms.tampa@moms'){gci_mn='Tampa Bay, FL:wtsp';gci_st='FL';marketType='broadcast';}
  else if(gci_pc=='moms.westchester@moms'){gci_mn='Westchester, Rockland and Putnam Counties:lohud';gci_st='NY';marketType='newspaper';}
  else if(gci_pc=='moms.wilmington@moms'){gci_mn='Wilmington:delawareonline';gci_st='DE';marketType='newspaper';}
}

if (typeof gci_aff !='undefined'){
  if(gci_aff=='gntbcstdev' || gci_aff=='') {
    s_account = gci_aff;
  } else {
    s_account = gci_aff+',gntbcstglobal';
  }
}

if(s_account == ''||typeof s_account=='undefined' || marketType=='Broadcast'){s_account='gntbcstglobal';}

//debugger;
var s_gnt=s_gi(s_account);
/*
s_gnt.t= function(){ 
	var s_gnt.oldst= s_gnt.t; 
	return function(){ 
		s_gnt.oldst(); 
	}
}();
*/

s_gnt.pageName = '';
  gnt_groupType = '';
  gnt_groupName = '';
  if (typeof gnt_PageVars != 'undefined') {
    if (gnt_PageVars.pg !=''){
      s_gnt.pageName = "Moms: " + gnt_PageVars.pg;
      s_gnt.pageName = s_gnt.pageName.replace("Settings","Index");
    }
    if(typeof gnt_PageVars.gtype != 'undefined') {
      gnt_groupType = gnt_PageVars.gtype;
    }
    if(typeof gnt_PageVars.gn != 'undefined') {
      gnt_groupName = gnt_PageVars.gn;
    }
  } else if(gciDocURL.indexOf('coupons')!=-1) {
      s_gnt.pageName = "Moms: Coupons";
  }  
  s_gnt.prop6='moms'
  s_gnt.prop7=''
  s_gnt.prop8='ripple6'

  if(s_gnt.pageName.indexOf('Home Page')!=-1){s_gnt.prop7='moms:home';s_gnt.prop16='moms:frontpage'}
  else if(s_gnt.pageName.indexOf('Mom to Mom: Index')!=-1){s_gnt.prop7='moms:forums';s_gnt.prop16='forum'}
  else if(gnt_groupType.indexOf('grouptypecategorized')!=-1){s_gnt.prop7='moms:forums';s_gnt.prop16='forum'}
  else if(s_gnt.pageName.indexOf('Groups: Index')!=-1){s_gnt.prop7='moms:groups';s_gnt.prop16='usergroup'}
  else if(gnt_groupType.indexOf('grouptypeuser')!=-1){s_gnt.prop7='moms:groups';s_gnt.prop16='usergroup'}
  else if(s_gnt.pageName.indexOf('Photos: Index')!=-1){s_gnt.prop7='moms:photo';s_gnt.prop16='gallery'}
  else if(gnt_groupType.indexOf('grouptypephotogallery')!=-1){s_gnt.prop7='moms:photo';s_gnt.prop16='gallery'}
  else if(gnt_groupName.indexOf('MyStuff')!=-1){s_gnt.prop7='moms:profile';s_gnt.prop16='usergenerated'}        
  else if(gciDocURL.indexOf('/sitesearch')!=-1){s_gnt.prop7='moms:site_search';s_gnt.prop16='search'}
  else if(gciDocURL.indexOf('coupons')!=-1){s_gnt.prop7='moms:coupons';s_gnt.prop16='misc'}
  else if(gciDocURL.indexOf('videosearch')!=-1){s_gnt.prop7='moms:video';s_gnt.prop16='video'}
  else if(s_gnt.pageName.indexOf('Sign Up: Register')!=-1){s_gnt.prop7='moms:registration';s_gnt.prop16='registration'}

  s_gnt.prop23=gciDocURL;
  s_gnt.prop25=gci_mn;

/* Gannett Division prop */
s_gnt.prop50 = marketType

/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/* E-commerce Config */
s_gnt.currencyCode="USD"
/* Link Tracking Config */
s_gnt.trackDownloadLinks=false
s_gnt.trackExternalLinks=false
s_gnt.trackInlineStats=true
s_gnt.linkDownloadFileTypes="exe,zip,wav,mp3,mp4,m4v,mov,mpg,avi,wmv,doc,pdf,xls"
s_gnt.linkInternalFilters="javascript:apartments,careerbuilder,cars,customcoupon,customwire.ap.org,eharmony,gannett,gbahn,highschoolsports,homefinder,homescape,infi,job,network,newsbank,newslibrary,pictopia,salary,topix,ur.gcion.com,usatoday,traffic,planetdiscover,metromix,mom,momslikeme"
if(typeof affil_domain!='undefined'){s_gnt.linkInternalFilters=s_gnt.linkInternalFilters+","+affil_domain}
s_gnt.linkLeaveQueryString=false
s_gnt.linkTrackVars="None"
s_gnt.linkTrackEvents="None"
s_gnt.prop29="1";
s_gnt.prop38="false";
  
if(typeof s_products !='undefined'){s_gnt.products=s_products;}

if(typeof GDN != 'undefined' && typeof gdn_version != 'undefined' && gdn_version > 2) {
  if (typeof GDN.Cookies.GCION != 'undefined') {
    if(GDN.Cookie.Exists(GDN.Cookies.GCION.Name)) {
      var ckie = GDN.Cookies.GCION.Get();
      if(ckie.GcionId()){s_gnt.prop27=ckie.GcionId();}
      if(GDN.Cookies.GCION.GetValue("Version")){s_gnt.prop28=GDN.Cookies.GCION.GetValue("Version");}
      if(ckie.Status()){s_gnt.prop29=ckie.Status();}
      if(ckie.Zip()){s_gnt.prop30=ckie.Zip();}
      if(ckie.Yob()){s_gnt.prop31=ckie.Yob();}
      if(ckie.Gender()){(ckie.Gender()==1)?(s_gnt.prop32='female'):(s_gnt.prop32='male');}
      if(ckie.Occupation()){s_gnt.prop33=ckie.Occupation();}
      if(ckie.Industry()){s_gnt.prop34=ckie.Industry();}
      if(ckie.Country()){s_gnt.prop35=ckie.Country();}
      if(ckie.Site()){s_gnt.prop36=ckie.Site();}
      if(GDN.Cookies.GCION.GetValue("DateCreated")){s_gnt.prop37=GDN.Cookies.GCION.GetValue("DateCreated");}
      if(ckie.Status() > 1){s_gnt.prop38="true";s_gnt.eVar5='';}else{s_gnt.prop38="false";}
      (GDN.UR.Intercept.IsException(location.href, gdn_local_ex)) ? (s_gnt.prop39="false"):(s_gnt.prop39="true");
    }
  }
}
/* Plugin Config */
s_gnt.usePlugins=true
function s_gnt_doPlugins(s_gnt) {
  /* Add calls to plugins here */
  if (window.s_prePlugins) { s_prePlugins(s_gnt) }
  
  if (window.s_postPlugins) { s_postPlugins(s_gnt) }
  
//  if(location.href.indexOf("register_zago")!= -1){s.setupFormAnalysis();}

s_gnt.campaign=s_gnt.getQueryParam('source') // Campaign tracking:added by Omniture on 10/5/07
     
/* Campaign Pathing : check for Campaign and populate prop26 with path */
var tc = s_gnt.campaign;
var pn = s_gnt.pageName;
var isCurrent = s_gnt.c_r('tc');
if(tc) {s_gnt.prop26 = tc +": "+pn;s_gnt.c_w('tc',tc,0)}
if(isCurrent && !tc){s_gnt.prop26=isCurrent + ':' + pn}
if(tc && isCurrent!=tc){s_gnt.prop26 = tc +" : "+pn;s_gnt.c_w('tc',tc,0)}

/* Set event 3 (page view) on every page: added by Omniture on 11/27/07 */
s_gnt.events=s_gnt.events?s_gnt.events+',event3':'event3';

}
s_gnt.doPlugins=s_gnt_doPlugins
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

/*
 * Plugin: getQueryParam 2.1 - return query string parameter(s)
 */
s_gnt.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
+"tring(i==p.length?i:i+1)}return v");
s_gnt.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s_gnt.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");
/*
 * Plugin: linkHandler 0.5 - identify and report custom links
 */
s_gnt.linkHandler=new Function("p","t",""
+"var s=this,h=s.p_gh(),i,l;t=t?t:'o';if(!h||(s.linkType&&(h||s.linkN"
+"ame)))return '';i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h."
+"substring(0,i);l=s.pt(p,'|','p_gn',h.toLowerCase());if(l){s.linkNam"
+"e=l=='[['?'':l;s.linkType=t;return h;}return '';");
s_gnt.p_gn=new Function("t","h",""
+"var i=t?t.indexOf('~'):-1,n,x;if(t&&h){n=i<0?'':t.substring(0,i);x="
+"t.substring(i+1);if(h.indexOf(x.toLowerCase())>-1)return n?n:'[[';}"
+"return 0;");
s_gnt.p_gh=new Function(""
+"var s=this;if(!s.eo&&!s.lnk)return '';var o=s.eo?s.eo:s.lnk,y=s.ot("
+"o),n=s.oid(o),x=o.s_oidt;if(s.eo&&o==s.eo){while(o&&!n&&y!='BODY'){"
+"o=o.parentElement?o.parentElement:o.parentNode;if(!o)return '';y=s."
+"ot(o);n=s.oid(o);x=o.s_oidt}}return o.href?o.href:'';");
/*
 * Plugin: getValOnce 0.2 - get a value once per session or number of days
 */
s_gnt.getValOnce=new Function("v","c","e",""
+"var s=this,k=s.c_r(c),a=new Date;e=e?e:0;if(v){a.setTime(a.getTime("
+")+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v");
/*
 * Plugin: Form Analysis 2.0 (Success, Error, Abandonment)
 */
s_gnt.setupFormAnalysis=new Function(""
+"var s=this;if(!s.fa){s.fa=new Object;var f=s.fa;f.ol=s.wd.onload;s."
+"wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even"
+"tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''"
+",'','')}");
s_gnt.sendFormEvent=new Function("t","pn","fn","en",""
+"var s=this,f=s.fa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='"
+"s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
s_gnt.faol=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd."
+"event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng"
+"th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name"
+";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);"
+"if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='"
+"No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"
+"s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();var md=el.on"
+"mousedown,kd=el.onkeydown,omd=md?md.toString():'',okd=kd?kd.toStrin"
+"g():'';if(omd.indexOf('.fam(')<0&&okd.indexOf('.fam(')<0){el.s_famd"
+"=md;el.s_fakd=kd;el.onmousedown=s.fam;el.onkeydown=s.fam}}}}}f.ul=s"
+".wd.onunload;s.wd.onunload=s.fasl;}return r;");
s_gnt.faos=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v"
+"u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"
+"e;");
s_gnt.fasl=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa,a=f.va,l=s.wd.location,ip=s.trackPag"
+"eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"
+"name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="
+"'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]"
+"='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]"
+"!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV"
+"ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars="
+"ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt"
+"e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'"
+",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s"
+".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f."
+"vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;s.tl(true,'o','Form A"
+"nalysis');s[f.vu]='';s.usePlugins=up}return f.ul&&e!='e'&&e!='s'?f."
+"ul(e):true;");
s_gnt.fam=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.fa;if(!e) e=s.wd.event;var o=s.trackLas"
+"tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."
+"form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."
+"which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"
+"N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"
+"AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"
+"n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"
+"){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["
+"1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s"
+"_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"
+"d(e);");
s_gnt.ee=new Function("e","n",""
+"return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s_gnt.fage=new Function("e","a",""
+"var s=this,f=s.fa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");
/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_objectID;function s_c2fe(f){var x='',s=0,e,a,b,c;while(1){e=
f.indexOf('"',s);b=f.indexOf('\\',s);c=f.indexOf("\n",s);if(e<0||(b>=
0&&b<e))e=b;if(e<0||(c>=0&&c<e))e=c;if(e>=0){x+=(e>s?f.substring(s,e):
'')+(e==c?'\\n':'\\'+f.substring(e,e+1));s=e+1}else return x
+f.substring(s)}return f}function s_c2fa(f){var s=f.indexOf('(')+1,e=
f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')
a+='","';else if(("\n\r\t ").indexOf(c)<0)a+=c;s++}return a?'"'+a+'"':
a}function s_c2f(cc){cc=''+cc;var fc='var f=new Function(',s=
cc.indexOf(';',cc.indexOf('{')),e=cc.lastIndexOf('}'),o,a,d,q,c,f,h,x
fc+=s_c2fa(cc)+',"var s=new Object;';c=cc.substring(s+1,e);s=
c.indexOf('function');while(s>=0){d=1;q='';x=0;f=c.substring(s);a=
s_c2fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(
q){if(h==q&&!x)q='';if(h=='\\')x=x?0:1;else x=0}else{if(h=='"'||h=="'"
)q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)
+'new Function('+(a?a+',':'')+'"'+s_c2fe(c.substring(o+1,e))+'")'
+c.substring(e+1);s=c.indexOf('function')}fc+=s_c2fe(c)+';return s");'
eval(fc);return f}function s_gi(un,pg,ss){var c="function s_c(un,pg,s"
+"s){var s=this;s.wd=window;if(!s.wd.s_c_in){s.wd.s_c_il=new Array;s."
+"wd.s_c_in=0;}s._il=s.wd.s_c_il;s._in=s.wd.s_c_in;s._il[s._in]=s;s.w"
+"d.s_c_in++;s.m=function(m){return (''+m).indexOf('{')<0};s.fl=funct"
+"ion(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){if(!o)r"
+"eturn o;var n=new Object,x;for(x in o)if(x.indexOf('select')<0&&x.i"
+"ndexOf('filter')<0)n[x]=o[x];return n};s.num=function(x){x=''+x;for"
+"(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1"
+"))<0)return 0;return 1};s.rep=function(x,o,n){var i=x.indexOf(o),l="
+"n.length>0?n.length:1;while(x&&i>=0){x=x.substring(0,i)+n+x.substri"
+"ng(i+o.length);i=x.indexOf(o,i+l)}return x};s.ape=function(x){var s"
+"=this,i;x=x?s.rep(escape(''+x),'+','%2B'):x;if(x&&s.charSet&&s.em=="
+"1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>="
+"0){i++;if(('89ABCDEFabcdef').indexOf(x.substring(i,i+1))>=0)return "
+"x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}return x}"
+";s.epa=function(x){var s=this;return x?unescape(s.rep(''+x,'+',' ')"
+"):x};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.ind"
+"exOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s.m(f)?s[f](t,a):f(t,"
+"a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.leng"
+"th?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0"
+")a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);retu"
+"rn (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf"
+"',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s"
+"=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.c_d='';s.c_gdf=f"
+"unction(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=func"
+"tion(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriod"
+"s,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n"
+"=n>2?n:2;p=d.lastIndexOf('.');while(p>=0&&n>1){p=d.lastIndexOf('.',"
+"p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):''}return "
+"s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie"
+",i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.s"
+"ubstring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_"
+"w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v"
+";l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!='"
+"'?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*10"
+"00))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; p"
+"ath=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' d"
+"omain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,"
+"f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Arr"
+"ay;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i"
+"}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){"
+"x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=f"
+"unction(f,a,t,o,b){var s=this,r;if(s.apv>=5&&(!s.isopera||s.apv>=7)"
+")eval('try{r=s.m(f)?s[f](a):f(a)}catch(e){r=s.m(t)?s[t](e):t(e)}');"
+"else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s.m(b)?s[b](a):b(a);els"
+"e{s.eh(s.wd,'onerror',0,o);r=s.m(f)?s[f](a):f(a);s.eh(s.wd,'onerror"
+"',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtf"
+"soe=new Function('e','var s=s_c_il['+s._in+'];s.eh(window,\"onerror"
+"\",1);s.etfs=1;var c=s.t();if(c)s.d.write(c);s.etfs=0;return true')"
+";s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this"
+",p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.ho"
+"st==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=func"
+"tion(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtf"
+"sf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.ca=function()"
+"{var s=this,imn='s_i_'+s.fun;if(s.d.images&&s.apv>=3&&(!s.isopera||"
+"s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){s.ios=1;if(!s.d.images[imn]&&(!s."
+"isns||(s.apv<4||s.apv>=5))){s.d.write('<im'+'g name=\"'+imn+'\" hei"
+"ght=1 width=1 border=0 alt=\"\">');if(!s.d.images[imn])s.ios=0}}};s"
+".mr=function(sess,q,ta){var s=this,ns=s.visitorNamespace,unc=s.rep("
+"s.fun,'_','-'),imn='s_i_'+s.fun,im,b,e,rs='http'+(s.ssl?'s':'')+':/"
+"/'+(ns?ns:(s.ssl?'102':unc))+'.112.2O7.net/b/ss/'+s.un+'/1/H.3-pdv-"
+"2/'+sess+'?[AQB]&ndh=1'+(q?q:'')+(s.q?s.q:'')+'&[AQE]';if(s.isie&&!"
+"s.ismac){if(s.apv>5.5)rs=s.fl(rs,4095);else rs=s.fl(rs,2047)}if(s.i"
+"os){if (!s.ss)s.ca();im=s.wd[imn]?s.wd[imn]:s.d.images[imn];if(!im)"
+"im=s.wd[imn]=new Image;im.src=rs;if(rs.indexOf('&pe=')>=0&&(!ta||ta"
+"=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;wh"
+"ile(e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'"
+"g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=func"
+"tion(v){var s=this;return s.wd['s_'+v]};s.glf=function(t,a){if(t.su"
+"bstring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]="
+"v};s.gl=function(v){var s=this;s.pt(v,',','glf',0)};s.gv=function(v"
+"){var s=this;return s['vpm_'+v]?s['vpv_'+v]:(s[v]?s[v]:'')};s.havf="
+"function(t,a){var s=this,b=t.substring(0,4),x=t.substring(4),n=pars"
+"eInt(x),k='g_'+t,m='vpm_'+t,q=t,v=s.linkTrackVars,e=s.linkTrackEven"
+"ts;s[k]=s.gv(t);if(s.lnk||s.eo){v=v?v+','+s.vl_l:'';if(v&&!s.pt(v,'"
+",','isf',t))s[k]='';if(t=='events'&&e)s[k]=s.fs(s[k],e)}s[m]=0;if(t"
+"=='pageURL')q='g';else if(t=='referrer')q='r';else if(t=='vmk')q='v"
+"mt';else if(t=='charSet'){q='ce';if(s[k]&&s.em==2)s[k]='UTF-8'}else"
+" if(t=='visitorNamespace')q='ns';else if(t=='cookieDomainPeriods')q"
+"='cdp';else if(t=='cookieLifetime')q='cl';else if(t=='visitVariable"
+"Provider')q='vvp';else if(t=='currencyCode')q='cc';else if(t=='chan"
+"nel')q='ch';else if(t=='campaign')q='v0';else if(s.num(x)) {if(b=='"
+"prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='hier'){q='h'+n;"
+"s[k]=s.fl(s[k],255)}}if(s[k]&&t!='linkName'&&t!='linkType')s.qav+='"
+"&'+q+'='+s.ape(s[k]);return ''};s.hav=function(){var s=this;s.qav='"
+"';s.pt(s.vl_t,',','havf',0);return s.qav};s.lnf=function(t,h){t=t?t"
+".toLowerCase():'';h=h?h.toLowerCase():'';var te=t.indexOf('=');if(t"
+"&&te>0&&h.indexOf(t.substring(te+1))>=0)return t.substring(0,te);re"
+"turn ''};s.ln=function(h){var s=this,n=s.linkNames;if(n)return s.pt"
+"(n,',','lnf',h);return ''};s.ltdf=function(t,h){t=t?t.toLowerCase()"
+":'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substrin"
+"g(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;"
+"return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLower"
+"Case():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h)"
+"{var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,l"
+"if=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toL"
+"owerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))ret"
+"urn 'd';if(s.trackExternalLinks&&(lef||lif)&&(!lef||s.pt(lef,',','l"
+"tef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.l"
+"c=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\""
+");s.lnk=s.co(this);s.t();s.lnk=0;if(b)return this[b](e);return true"
+"');s.bc=new Function('e','var s=s_c_il['+s._in+'];if(s.d&&s.d.all&&"
+"s.d.all.cppXYctnr)return;s.eo=e.srcElement?e.srcElement:e.target;s."
+"t();s.eo=0');s.ot=function(o){var a=o.type,b=o.tagName;return (a&&a"
+".toUpperCase?a:b&&b.toUpperCase?b:o.href?'A':'').toUpperCase()};s.o"
+"id=function(o){var s=this,t=s.ot(o),p=o.protocol,c=o.onclick,n='',x"
+"=0;if(!o.s_oid){if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerC"
+"ase().indexOf('javascript')<0))n=o.href;else if(c){n=s.rep(s.rep(s."
+"rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else"
+" if(o.value&&(t=='INPUT'||t=='SUBMIT')){n=o.value;x=3}else if(o.src"
+"&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o"
+".s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?','"
+"+t.substring(0,e)+',':'';return u&&u.indexOf(','+un+',')>=0?s.epa(t"
+".substring(e+1)):''};s.rq=function(un){var s=this,c=un.indexOf(',')"
+",v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.p"
+"t(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q"
+"=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substrin"
+"g(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ"
+"[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,"
+"c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',"
+"0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)s.sqq[s.squ[x]]+=(s.s"
+"qq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&s.sqq[x]&&(x==q||c<2)){"
+"v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl="
+"new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onlo"
+"ad\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s."
+"d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs("
+"\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\""
+"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>"
+"3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attac"
+"hEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener)s.b.addEve"
+"ntListener('click',s.bc,false);else s.eh(s.wd,'onload',0,s.wdl)}};s"
+".vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingG"
+"roup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear"
+"();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,"
+"x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function"
+"(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function("
+"t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.subst"
+"ring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}ret"
+"urn 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s."
+"dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un.toLowerCase();i"
+"f(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toL"
+"owerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i="
+"s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.t=function("
+"){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Mat"
+"h.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getT"
+"ime()/10800000)%10+sed,yr=tm.getYear(),vt=tm.getDate()+'/'+tm.getMo"
+"nth()+'/'+(yr<1900?yr+1900:yr)+' '+tm.getHours()+':'+tm.getMinutes("
+")+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tf"
+"s=s.gtfs(),ta='',q='',qs='';s.uns();if(!s.q){var tl=tfs.location,x="
+"'',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':"
+"'N',hp='',ct='',pn=0,ps;if(s.apv>=4)x=screen.width+'x'+screen.heigh"
+"t;if(s.isns||s.isopera){if(s.apv>=3){j='1.1';v=s.n.javaEnabled()?'Y"
+"':'N';if(s.apv>=4){j='1.2';c=screen.pixelDepth;bw=s.wd.innerWidth;b"
+"h=s.wd.innerHeight;if(s.apv>=4.06)j='1.3'}}s.pl=s.n.plugins}else if"
+"(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';j='1.2';c=screen."
+"colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.d"
+"ocumentElement.offsetHeight;j='1.3';if(!s.ismac&&s.b){s.b.addBehavi"
+"or('#default#homePage');hp=s.b.isHomePage(tl)?\"Y\":\"N\";s.b.addBe"
+"havior('#default#clientCaps');ct=s.b.connectionType}}}else r=''}if("
+"s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if"
+"(p.indexOf(ps)<0)p+=ps;pn++}s.q=(x?'&s='+s.ape(x):'')+(c?'&c='+s.ap"
+"e(c):'')+(j?'&j='+j:'')+(v?'&v='+v:'')+(k?'&k='+k:'')+(bw?'&bw='+bw"
+":'')+(bh?'&bh='+bh:'')+(ct?'&ct='+s.ape(ct):'')+(hp?'&hp='+hp:'')+("
+"p?'&p='+s.ape(p):'')}if(s.usePlugins)s.doPlugins(s);var l=s.wd.loca"
+"tion,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=s.fl(l?l:'',25"
+"5);if(!s.referrer)s.referrer=s.fl(r?r:'',255);if(s.lnk||s.eo){var o"
+"=s.eo?s.eo:s.lnk;if(!o)return '';var p=s.gv('pageName'),w=1,t=s.ot("
+"o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!"
+"='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(!o)retur"
+"n '';t=s.ot(o);n=s.oid(o);x=o.s_oidt}oc=o.onclick?''+o.onclick:'';i"
+"f((oc.indexOf(\"s_gs(\")>=0&&oc.indexOf(\".s_oc(\")<0)||oc.indexOf("
+"\".tl(\")>=0)return ''}ta=o.target;h=o.href?o.href:'';i=h.indexOf('"
+"?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName?s"
+".linkName:s.ln(h);t=s.linkType?s.linkType.toLowerCase():s.lt(h);if("
+"t&&(h||l))q+='&pe=lnk_'+(t=='d'||t=='e'?s.ape(t):'o')+(h?'&pev1='+s"
+".ape(h):'')+(l?'&pev2='+s.ape(l):'');else trk=0;if(s.trackInlineSta"
+"ts){if(!p){p=s.gv('pageURL');w=0}t=s.ot(o);i=o.sourceIndex;if(s.gg("
+"'objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape"
+"(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oid"
+"t='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}if(!trk&&!qs)return '';v"
+"ar code='';if(trk&&s.vs(sed))code=s.mr(sess,(vt?'&t='+s.ape(vt):'')"
+"+s.hav()+q+(qs?qs:s.rq(s.un)),ta);s.sq(trk?'':qs);s.lnk=s.eo=s.link"
+"Name=s.linkType=s.wd.s_objectID='';return code};s.tl=function(o,t,n"
+"){var s=this;s.lnk=s.co(o);s.linkType=t;s.linkName=n;s.t()};s.ssl=("
+"s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=docum"
+"ent;s.b=s.d.body;s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf("
+"'Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MS"
+"IE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='"
+"Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Ne"
+"tscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);i"
+"f(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=pars"
+"eInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s."
+"ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFlo"
+"at(v);s.em=0;if(String.fromCharCode){i=escape(String.fromCharCode(2"
+"56)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}s.un=un;s"
+".uns();s.vl_l='vmk,charSet,visitorNamespace,cookieDomainPeriods,coo"
+"kieLifetime,visitVariableProvider,pageName,pageURL,referrer,currenc"
+"yCode,purchaseID';s.vl_t=s.vl_l+',channel,server,pageType,campaign,"
+"state,zip,events,products,linkName,linkType';for(var n=1;n<51;n++)s"
+".vl_t+=',prop'+n+',eVar'+n+',hier'+n;s.vl_g=s.vl_t+',trackDownloadL"
+"inks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkD"
+"ownloadFileTypes,linkExternalFilters,linkInternalFilters,linkNames'"
+";if(pg)s.gl(s.vl_g);s.ss=ss;if(!ss){s.wds();s.ca()}}",
l=window.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf(
'MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(l)for(i=0;i<l.length;i++){
s=l[i];s.uns();if(s.un==un)return s;else if(s.pt(s.un,',','isf',un)){
s=s.co(s);s.un=un;s.uns();return s}}if(e>0){a=parseInt(i=v.substring(e
+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10)
);else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf(
'Opera')<0){eval(c);return new s_c(un,pg,ss)}else s=s_c2f(c);return s(
un,pg,ss)}

var t2= new Date(); 
(function(){ 
var img= new Image(); 
img.src= "http://www.usatoday.com/_common/_images/clear.gif?done&cb=" + parseInt(Math.random() * 1000); 
var mT= t4.getTime() - t3.getTime(), 
   gT= t2.getTime() - t1.getTime();
//alert("Moms Scode: " + mT + " ms\nGnt SCode: " + gT); 
var el= document.createElement('div'); 
el.style.display = 'none';  
el.style.color= 'white';el.style.position= 'absolute'; 
el.style.left= el.style.top= '0px' ;
el.innerHTML =  "Moms Scode: " + mT + " ms\nGnt SCode: " + gT; 
/*setTimeout(
	(function(){ 
		var e=el; 
		return function(){ document.body.appendChild(e); e.style.display= 'inline';} 
	})(), 1500);  
*/
})(); 






