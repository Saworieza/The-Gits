var gfc_Go=osapi,gfc_Ho="ceil";gfc_1[gfc_].oi=gfc_pd(21,function(a,b,c){return a?c<b?[]:a[gfc_xc](gfc_d.min(b,a[gfc_B]),gfc_d.min(c,a[gfc_B])):[]});gfc_1[gfc_].share=gfc_pd(19,function(){gfc_4n();return!1});gfc_1[gfc_].vf=gfc_pd(17,function(){return this.Fb.pop()});gfc_1[gfc_].Ii=gfc_pd(16,function(){var a=this.wd;a.valid?(this.d=this.Bg(this.wd),this.Ph(a[gfc_8c])):(this.wd=null,this.render(a.actions,a[gfc_8c],a.params));this.Ag()});
gfc_oa(gfc_N[gfc_],gfc_pd(3,function(){this.x=gfc_d[gfc_Ho](this.x);this.y=gfc_d[gfc_Ho](this.y);return this}));gfc_oa(gfc_nf[gfc_],gfc_pd(2,function(){gfc_ma(this,gfc_d[gfc_Ho](this[gfc_i]));gfc_Fa(this,gfc_d[gfc_Ho](this[gfc_u]));return this}));gfc_oa(gfc_ch[gfc_],gfc_pd(1,function(){this.top=gfc_d[gfc_Ho](this.top);gfc_Ga(this,gfc_d[gfc_Ho](this[gfc_nc]));gfc_Ca(this,gfc_d[gfc_Ho](this[gfc_9b]));gfc_La(this,gfc_d[gfc_Ho](this[gfc_z]));return this}));
gfc_oa(gfc_eh[gfc_],gfc_pd(0,function(){gfc_La(this,gfc_d[gfc_Ho](this[gfc_z]));this.top=gfc_d[gfc_Ho](this.top);gfc_ma(this,gfc_d[gfc_Ho](this[gfc_i]));gfc_Fa(this,gfc_d[gfc_Ho](this[gfc_u]));return this}));
var gfc_Io=function(a){return a=gfc_b.friendconnect_serverBase+"/friendconnect/favicon?url="+escape(a)},gfc_7=function(a,b,c){this.Ga();this.lr();var d=new gfc_R;d.set("members",{action:this.uu,callback:this.rt});d.set("member-page",{action:this.tu,callback:this.qt});d.set("blocked-member-page",{action:this.nu,callback:this.mt});d.set("profile-friends-page",{action:this.zu,callback:this.vt});d.set("sitesData",{action:this.Hu,callback:this.zt});d.set("viewerFriends",{action:this.Mu,callback:this.Bt});
d.set("profileData",{action:this.yu,callback:this.ut});d.set("blockUser",{action:this.mu,callback:this.lt});d.set("unblockUser",{action:this.Ku,callback:this.At});d.set("profileFriends",{action:this.Au,callback:this.wt});d.set("activityData",{action:this.Ff,callback:this.gd});d.set("sendFriendRequest",{action:this.Gu,callback:this.yt});d.set("sendFriendRequestResponse",{action:this.qu,callback:this.bm});d.set("deleteActivity",{action:this.Gf,callback:this.gd});d.set("requestAndProcessViewerNumWaitingMessages",
{action:this.Nu,callback:this.Dt});d.set("requestPromo",{action:this.Bu,callback:this.xt});this.lb=null;this.jx=new gfc_bo("fc-members-options-menu",gfc_K(this.Os,this),gfc_K(this.Ns,this),gfc_K(this.Ps,this),0,gfc_b.friendconnect_serverBase,this.f("ENDCAP_LINK_COLOR")||"0000cc",this.f("CONTENT_TEXT_COLOR")||"000000");this.Uv=!1;this.Ba=10;this.of=15;this.ln=10;var e=gfc_Lh(gfc_ph()),f=gfc_Jo;this.Sb=3;this.nc=8;this.Cm=null;this.la=this.nc*this.Sb;this.slimTopCapHeight=19;this.tinyTopCapHeight=8;
this.isMessagingEnabled=a;this.isPromosEnabled=b;this.isSocialShareEnabled=c;this.numWaitingMessages=0;this.promoCode=-1;this.promoHtml=null;this.Mb=new gfc_8n;this.Jh()&&(a=(a=this.f(f.FACE_SIZE))?gfc_ga(a):32,a+=6,this.Sb=gfc_d[gfc_3a]((e[gfc_i]-10)/a),e=340,e=this.f(f.HEIGHT),b=this.f(f.NUMBER_ROWS),f=27,b?(this.nc=gfc_ga(b),e=this.nc*a,this.Cm=e+f):e&&(e=gfc_ga(e)-96,this.nc=gfc_d.max(2,gfc_d[gfc_3a](e/a)),this.Cm=this.nc*a+f),this.la=this.nc*this.Sb);gfc_1[gfc_G](this,d)};gfc_7.inherits(gfc_1);
gfc_Aa(gfc_7[gfc_],function(){gfc_7.i[gfc_t][gfc_G](this);gfc_Gn("start");var a=gfc_a[gfc_r][gfc_Hc](),b=gfc_ca();(a=b.profileId||a.profileId)?(b={},b[gfc_e[gfc_x][gfc_q].ID]=a,a=new gfc_e[gfc_x](b),this.render(["profileData","profileFriends","activityData"],"profile",{person:a})):(a=["members","viewerFriends"],this.isMessagingEnabled&&a[gfc_v]("requestAndProcessViewerNumWaitingMessages"),this.isPromosEnabled&&!this.Ib()&&a[gfc_v]("requestPromo"),this.render(a,"faces"))});gfc_7[gfc_].e={};
gfc_7[gfc_].Ga=function(){this.e.MSG_SITE_MEMBERS="Members";this.e.MSG_BE_THE_FIRST="Be the first!";this.e.MSG_NO_SITE_MEMBERS="There are no members yet.";this.e.MSG_ALL_SITE_MEMBERS="All Members";this.e.MSG_ALL_BLOCKED_MEMBERS="All Blocked Members";this.e.MSG_NO_BLOCKED_MEMBERS="You have not blocked any members";this.e.MSG_YOUR_FRIENDS="Your Friends";this.e.MSG_ALL_YOUR_FRIENDS="All Your Friends";this.e.MSG_JFJ="Join and connect with others!";this.e.MSG_MANAGE="Manage members";this.e.MSG_SETTINGS=
"Settings";this.e.MSG_OPTIONS="Options";this.e.MSG_MEMBERS_SHARE="Share this page";this.e.MSG_BACK="Back";this.e.MSG_BACK_TO_TOP="Home";this.e.MSG_VIEW_MY_PROFILE="View my profile";this.e.MSG_ABOUT_ME="About me";this.e.MSG_MORE="More \u00bb";this.e.MSG_SHOW_BLOCKED="Show blocked members \u00bb";this.e.MSG_SHOW_ALL="\u00ab Show all members";this.e.MSG_LINK_IN_NETWORKS="Link in your social networks";this.e.MSG_ACTIVITIES="Activities";this.e.MSG_ALL_ACTIVITIES="More activities";this.e.MSG_DELETE_THIS=
"Delete";this.e.MSG_SITES="Sites I've joined";this.e.MSG_ALL_SITES="More sites I've joined";this.e.MSG_LINKS="Links";this.e.MSG_ALL_LINKS="More links";this.e.MSG_NO_ACTIVITIES="No activities to show";this.e.MSG_ADD_AS_FRIEND="Add as friend";this.e.MSG_SEND_MESSAGE="Send a message";this.e.MSG_BLOCK_USER="Block this user";this.e.MSG_UNBLOCK_USER="Unblock this user";this.e.MSG_USER_IS_ADMIN="Administrator";this.e.MSG_JOIN="Join this site";this.e.MSG_OR="or";this.e.MSG_SIGN_IN="Sign in";this.e.MSG_SIGN_OUT=
"Sign out";this.e.MSG_PREVIOUS="\u00ab Previous";this.e.MSG_NEXT="Next \u00bb";this.e.MSG_NEWER="\u00ab Newer";this.e.MSG_OLDER="Older \u00bb";this.e.MSG_ACCEPT_ALL_FRIEND_REQUESTS="Accept all";this.e.MSG_HELP_FRIENDREQUEST="You and your friends will see each other across all Friend Connect sites.";this.e.MSG_HELP_FRIENDINVITE="Once you are friends, you will see each other across all Friend Connect sites.";this.e.MSG_HELP_BLOCKMEMBER="Blocking a visitor removes them from the members list and prevents them from interacting with other visitors on your site";
this.e.MSG_INVITATION="Invitation:";this.e.MSG_SEND="Send";this.e.MSG_BLOCK="Block";this.e.MSG_IGNORE="Ignore";this.e.MSG_CANCEL="Cancel";this.e.MSG_SITE_SETTINGS="Site settings";this.e.MSG_ABOUT_FC="About Friend Connect";this.e.MSG_ALREADY_MEMBER="Already a member?";this.e.MSG_EDIT_PROFILE="Edit profile"};gfc_7[gfc_].na={};
gfc_7[gfc_].lr=function(){this.na.MSG_SITE_MEMBERS="Followers";this.na.MSG_NO_SITE_MEMBERS="There are no followers yet.";this.na.MSG_SHOW_BLOCKED="Show blocked followers \u00bb";this.na.MSG_SHOW_ALL="\u00ab Show all followers";this.na.MSG_ALL_SITE_MEMBERS="All Followers";this.na.MSG_ALL_BLOCKED_MEMBERS="All Blocked Followers";this.na.MSG_NO_BLOCKED_MEMBERS="You have not blocked any followers";this.na.MSG_LIKE_THIS_SITE="Like this blog?";this.na.MSG_JOIN="Follow";this.na.MSG_BACK_TO_TOP="Members";
this.na.MSG_JFJ="Follow and connect with your friends!";this.na.MSG_HELP_FRIENDREQUEST="You and your friends will see each other across all Following blogs and Friend Connect sites.";this.na.MSG_HELP_FRIENDINVITE="Once you are friends, you will see each other across all Following blogs and Friend Connect sites."};
gfc_7[gfc_].K=function(a,b){var c=!0;if(b[gfc_o]&&b[gfc_o].person){var d={},e=b[gfc_o].person[gfc_Zb]()+" is your friend";d.MSG_IS_FRIEND=e;e="You have invited "+(b[gfc_o].person[gfc_Zb]()+" to be your friend");d.MSG_IS_INVITED=e;e=b[gfc_o].person[gfc_Zb]()+"'s friends";d.MSG_PROFILE_FRIENDS=e;e="All "+(b[gfc_o].person[gfc_Zb]()+"'s friends");d.MSG_ALL_PROFILE_FRIENDS=e;for(var f in d)this.g(a,f,d[f])}b.invitedBy&&b.invitedBy[gfc_Zb]()&&(d=gfc_c[gfc_i]?gfc_c[gfc_i]:gfc_c[gfc_C][gfc_Yc]+2,c=(d-135)/
8,d=(d-175)/8,c="View "+(gfc_un(b.invitedBy[gfc_Zb](),c)+"'s profile"),d=gfc_un(b.invitedBy[gfc_Zb](),d)+" invited you to this site",this.g(a,"MSG_VIEW_INVITER_PROFILE",c),this.g(a,"MSG_INVITED_YOU",d),this.Uv=!0,c=!1);d=this.numWaitingMessages+" messages waiting for you.";this.isMessagingEnabled&&0<this.numWaitingMessages&&(c=!1,this.g(a,"showWaitingMessages",!0),this.isMessagingEnabled&&(this.g(a,"MSG_NUM_WAITING_MESSAGES",d),this.g(a,"MSG_VIEW_AND_CONFIGURE_MESSAGING","View messages")));b.friendRequests&&
(0<b.friendRequests[gfc_Mb]()&&(c=!1),d=1==b.friendRequests[gfc_Mb]()?"New friend request \u00bb":"New friend requests ("+(b.friendRequests[gfc_Mb]()+") \u00bb"),this.g(a,"MSG_NEW_FRIEND_REQUESTS",d));if(this.lb){if(this.dl(this.lb.themeId))for(f in this.na)this.g(a,f,this.na[f]);this.lb.signInPrompt&&this.g(a,"MSG_JOIN",this.lb.signInPrompt);this.lb.signOutPrompt&&this.g(a,"MSG_SIGN_OUT",this.lb.signOutPrompt)}this.g(a,"isViewerAdmin",b.isViewerAdmin);this.g(a,"isMessagingEnabled",this.isMessagingEnabled);
this.g(a,"acceptMessages",this.Pn);this.g(a,"isViewingSelf",b.viewer&&b[gfc_o]&&b[gfc_o].person&&b.viewer[gfc_E]()==b[gfc_o].person[gfc_E]());d=!1;if(b.owner&&(e=b.owner[gfc_I]("profileExtensions")))for(f in e)d=!0;this.g(a,"communityHasProfile",d);this.g(a,"promoHtml",c?this.promoHtml:null);this.g(a,"insertHtml",function(a,b){gfc_Ia(a,b)})};gfc_7[gfc_].dl=function(a){return"blogger"==a};gfc_7[gfc_].Rg=function(a,b,c,d){gfc_2n({id:a,text:b,version:this.dl(this.lb.themeId)?1:null,style:c},d)};
gfc_7[gfc_].P=function(a){function b(b,c){d.g(a,b,gfc_K(c,d))}this.g(a,"facesPerRow",this.Sb);for(var c in this.e)this.g(a,c,this.e[c]);var d=this;b("getThumbnail",this.uc);b("map",this.map);b("elide",gfc_un);b("safeSlice",this.oi);b("showAllActivities",this.Fv);b("transformActivity",this.cc);b("nextActivities",this.ps);b("previousActivities",this.Xs);b("showAllLinks",this.Hv);b("transformLink",this.rw);b("nextLinks",this.ts);b("previousLinks",this.Zs);b("showAllSites",this.Kv);b("transformSite",
this.sw);b("nextSites",this.As);b("previousSites",this.ft);b("showAllMembers",this.Iv);b("showBlockedMembers",this.Mv);b("showUnblockedMembers",this.cw);b("nextMembers",this.us);b("nextBlockedMembers",this.qs);b("previousMembers",this.$s);b("previousBlockedMembers",this.Ys);b("showAllProfileFriends",this.Jv);b("nextProfileFriends",this.zs);b("previousProfileFriends",this.et);b("showAllViewerFriends",this.Lv);b("nextViewerFriends",this.Bs);b("previousViewerFriends",this.gt);b("isHome",this.Gh);b("goBack",
this.ih);b("goBackToHome",this.Wv);b("editSettings",this.Bb);b("signout",this.signout);b("signin",this.signin);b("viewProfile",this.Fn);b("blockUser",this.hj);b("unblockUser",this.vw);b("goToInviteFriend",this.tq);b("sendMessageDialog",this.dv);b("goToBlockMember",this.sq);b("goToEditProfile",this.Bb);b("goToViewerProfile",this.uq);b("sendInvite",this.cv);b("blockMember",this.io);b("acceptFriendRequest",this.On);b("ignoreFriendRequest",this.jr);b("viewFriendRequests",this.Dw);b("acceptAllFriendRequests",
this.Nn);b("numPreviewFriends",this.aq);b("numPreviewMembers",this.bq);b("showInvitedBy",this.hq)};
gfc_7[gfc_].wk=function(a){a=gfc_d.max(1,a?this.nc-1:this.nc);var b=this.d[gfc_k].members?this.d[gfc_k].members[gfc_Mb]():0,c=this.d[gfc_k].friends?this.d[gfc_k].friends[gfc_Mb]():0,b=gfc_d[gfc_Ho](b/this.Sb),c=gfc_d[gfc_Ho](c/this.Sb);b>gfc_d[gfc_Ho](a/2)?c>gfc_d[gfc_3a](a/2)?(b=gfc_d[gfc_Ho](a/2),c=gfc_d[gfc_3a](a/2)):b=gfc_d.max(0,a-c):c>gfc_d[gfc_3a](a/2)&&(c=gfc_d.max(0,a-b));b*=this.Sb;c*=this.Sb;return a={numMembers:b,numFriends:c}};gfc_7[gfc_].bq=function(a){return this.wk(a).numMembers};
gfc_7[gfc_].aq=function(a){return this.wk(a).numFriends};gfc_7[gfc_].tu=function(a,b){var c=gfc_e[gfc_H](),d={},e=gfc_e[gfc_D][gfc_Mc];d[e.FILTER]="PUBLICLY_VISIBLE";d[e.FIRST]=b[gfc_t];d[e.MAX]=b.pageSize?b.pageSize:this.la;var f=[gfc_e[gfc_x][gfc_q].ID,gfc_e[gfc_x][gfc_q][gfc_Za],gfc_e[gfc_x][gfc_q][gfc_Cb]];d[e[gfc_cc]]=f;d[gfc_e[gfc_D].DataRequestFields.ESCAPE_TYPE]=gfc_e.EscapeType[gfc__c];c.add(c[gfc_3b](gfc_qe(),d),"ownerFriends");c[gfc_n](a)};
gfc_7[gfc_].qt=function(a){this.d[gfc_k].members=a.get("ownerFriends")[gfc_l]()};gfc_7[gfc_].nu=function(a,b){var c=gfc_e[gfc_H](),d={},e=gfc_e[gfc_D][gfc_Mc];d[e.FIRST]=b[gfc_t];d[e.MAX]=b.pageSize?b.pageSize:this.la;d[gfc_e[gfc_D].DataRequestFields.ESCAPE_TYPE]=gfc_e.EscapeType[gfc__c];e={};e[gfc_e[gfc_Ib][gfc_q][gfc_Yb]]=gfc_e[gfc_Ib].PersonId.OWNER;e[gfc_e[gfc_Ib][gfc_q][gfc_Sb]]="BLOCKED";e[gfc_e[gfc_Ib][gfc_q][gfc_qc]]=1;e=gfc_e[gfc_mc](e);c.add(c[gfc_3b](e,d),"blockedMembers");c[gfc_n](a)};
gfc_7[gfc_].mt=function(a){this.d[gfc_k].blockedMembers=a.get("blockedMembers")[gfc_l]()};gfc_7[gfc_].zu=function(a,b){var c=gfc_e[gfc_H](),d=b&&b.person&&b.person[gfc_E]()||this.v[gfc_o].person[gfc_E](),e={},f=gfc_e[gfc_D][gfc_Mc];e[f.FIRST]=b[gfc_t];e[f.MAX]=b.pageSize?b.pageSize:this.la;d=this.Jl(d);e[gfc_e[gfc_D].DataRequestFields.ESCAPE_TYPE]=gfc_e.EscapeType[gfc__c];c.add(c[gfc_3b](d,e),"profileFriends");c[gfc_n](a)};
gfc_7[gfc_].Jl=function(a){var b={};b[gfc_e[gfc_Ib][gfc_q][gfc_Yb]]=a;b[gfc_e[gfc_Ib][gfc_q][gfc_Sb]]="FRIENDS";b[gfc_e[gfc_Ib][gfc_q][gfc_qc]]=1;return gfc_e[gfc_mc](b)};gfc_7[gfc_].vt=function(a){this.d[gfc_k][gfc_o].friends=a.get("profileFriends")[gfc_l]()};gfc_7[gfc_].$i=function(a){for(var b=gfc_e[gfc_k].getDataContext(),c=0;c<a[gfc_B];c++){var d=a[c],d=b.getDataSet(d);if(!d||d.code)return!1}return!0};
gfc_7[gfc_].uu=function(a){var b=this.la,c=!b||24==b;c&&gfc_e[gfc_k]&&this.$i(["ownerFriends","viewer","siteSettings","friendRequests"])?a(gfc_e[gfc_k].getDataContext()[gfc_l]()):(c=gfc_Go.newBatch(),b={userId:"@owner",groupId:"@friends",count:b,filterBy:"PUBLICLY_VISIBLE"},c.add("ownerFriends",gfc_Go.people.get(b)),c.add("viewer",gfc_Go.people.getViewer()),c.add("siteSettings",gfc_Go.extensions.get({command:"GetSiteSettings"})),c.add("friendRequests",gfc_Go.extensions.get({command:"GetFriendRequests",
params:'{"idSpec" : "VIEWER"}'})),(b=gfc_ca().psinvite)&&c.add("invitedBy",gfc_Go.extensions.get({command:"DecodeInvitation",params:{token:b}})),c.execute(a))};gfc_7[gfc_].rt=function(a,b){this.d[gfc_k].members=gfc_ie(a.ownerFriends,gfc_de);this.d[gfc_k].viewer=gfc_de(a.viewer);this.bm(a,b,!0);this.lb=a[gfc_Nc];var c=gfc_ca();!c.psinvite||null!=this.d[gfc_k].viewer&&""!=this.d[gfc_k].viewer||(a.invitedBy&&(a.invitedBy.nickname=a.invitedBy.displayName),this.d[gfc_k].invitedBy=new gfc_e[gfc_x](a.invitedBy))};
gfc_7[gfc_].Mu=function(a,b){b=b||{};var c=b.pageSize||this.maxFacesPerPage,d=!b[gfc_t]||0==b[gfc_t],e=!c||20==c;d&&e&&gfc_e[gfc_k]&&this.$i(["friends","isViewerAdmin"])?a(gfc_e[gfc_k].getDataContext()[gfc_l]()):(d=gfc_Go.newBatch(),c={userId:"@viewer",groupId:"@friends",count:c},b[gfc_t]&&(c.startIndex=b[gfc_t]),d.add("friends",gfc_Go.people.get(c)),d.add("isViewerAdmin",gfc_Go.people.get({userId:"@viewer",groupId:"ADMINS"})),d.execute(a))};
gfc_7[gfc_].Bt=function(a){var b=a.friends;b&&!b[gfc_oc]&&(this.d[gfc_k].friends=gfc_ie(b,gfc_de));this.Gm(a)};gfc_7[gfc_].Nu=function(a){var b=gfc_e[gfc_H]();b.add(gfc_ge("VIEWER"),"numWaitingMessages");b[gfc_n](a)};gfc_7[gfc_].Dt=function(a){this.numWaitingMessages=a.get("numWaitingMessages")[gfc_l]().numberOfWaitingMessages};
gfc_7[gfc_].Bu=function(a){this.log("requesting promo");var b=new gfc_a[gfc_Bc],b=b.getLang()+(b[gfc_ed]()?"_"+b[gfc_ed]():""),c=gfc_e[gfc_H]();c.add(gfc_6d("GetPromo",{hl:b}),"promo");c[gfc_n](a)};gfc_7[gfc_].xt=function(a){this.log("processing promo");(a=a.get("promo")[gfc_l]())&&-1!=a.promoCode&&(this.promoCode=a.promoCode,this.promoHtml=a.promoHtml)};
gfc_7[gfc_].Wn=function(){for(var a=function(){this.promoHtml=null;for(var a=gfc_1f("div","fc-promo-main",gfc_P("peg")),b=0;b<a[gfc_B];b++)gfc_Oh(a[b],!1);this.Y();this.log("Dismissing promo "+this.promoCode);a=gfc_e[gfc_H]();a.add(gfc_6d("DismissPromo",{promoCode:this.promoCode}));a[gfc_n](gfc_K(function(){this.log("The promo has been dismissed");this.promoCode=-1},this))},b=gfc_1f("a","fc-promo-dismiss-link",gfc_P("peg")),c=0;c<b[gfc_B];c++){var d=b[c],e="click";gfc_0i(d,e);gfc_Ri(d,e,gfc_K(a,this))}};
gfc_7[gfc_].Gm=function(a){var b=a.isViewerAdmin;b&&!b[gfc_oc]?this.d[gfc_k].isViewerAdmin=b.list[gfc_B]:a.get&&a.get("isViewerAdmin")&&(a=a.get("isViewerAdmin"))&&!a[gfc_Ac]()&&(this.d[gfc_k].isViewerAdmin=a[gfc_l]()[gfc_Mb]())};gfc_7[gfc_].Nn=function(a){var b=[];a.each(function(a){a={user:a[gfc_I](goog.opensocial.peoplesense.Invite[gfc_q].INVITER)[gfc_E](),action:"ACCEPT"};b[gfc_v](a)});this.render(["sendFriendRequestResponse","members","viewerFriends"],gfc_K(this.yg,this),{friendRequestResponses:b})};
gfc_7[gfc_].Wv=function(){this.ea();this.render(["members","viewerFriends"],"faces")};gfc_7[gfc_].On=function(a){a={user:a[gfc_E](),action:"ACCEPT"};this.render(["sendFriendRequestResponse","members","viewerFriends"],gfc_K(this.yg,this),{friendRequestResponses:[a]})};gfc_7[gfc_].Dw=function(){this.ea();this.B("friend-requests")};gfc_7[gfc_].Fn=function(a){this.Ib()?(this.ea(),this.Fw(a)):gfc_3d(a[gfc_E]())};
gfc_7[gfc_].Fw=function(a){this.render(["profileData","profileFriends","activityData"],"profile",{person:a})};gfc_7[gfc_].Hu=function(a,b){var c=gfc_e[gfc_H](),d=gfc_e[gfc_D][gfc_Mc],e={};e[d.FIRST]=b&&b[gfc_t]?b[gfc_t]:0;var f=this.d[gfc_k][gfc_o].person[gfc_E]();e[d.MAX]=this.ln;c.add(gfc_ne(gfc_e[gfc_mc]({userId:f}),e),"profileSites");c[gfc_n](a)};gfc_7[gfc_].zt=function(a){this.d[gfc_k][gfc_o].sites=a.get("profileSites")[gfc_l]()};
gfc_7[gfc_].yu=function(a,b){this.d[gfc_k].profile={};b=b||{};var c=b.person,d={},c=c[gfc_E](),e=gfc_e[gfc_H](),f=[gfc_e[gfc_x][gfc_q].ID,gfc_e[gfc_x][gfc_q][gfc_Za],gfc_e[gfc_x][gfc_q][gfc_Cb],gfc_e[gfc_x][gfc_q].ABOUT_ME,gfc_e[gfc_x][gfc_q].URLS,"profileExtensions"],g=gfc_e[gfc_D][gfc_Mc];d[g[gfc_cc]]=f;d[gfc_e[gfc_D].DataRequestFields.ESCAPE_TYPE]=gfc_e.EscapeType[gfc__c];e.add(e.newFetchPersonRequest(c,d),"profile");e.add(e.newFetchPersonRequest("VIEWER",d),"viewer");e.add(gfc_le("VIEWER","ADMINS"),
"isViewerAdmin");e.add(e.newFetchPersonRequest("OWNER",d),"owner");this.lb||e.add(gfc_fe(),"siteSettings");e.add(gfc_le(c,"ADMINS"),"isAdmin");e.add(gfc_le(c,"BLOCKED"),"isBlocked");this.isMessagingEnabled&&e.add(gfc_ge(c),"canMessage");e[gfc_n](a)};
gfc_7[gfc_].Ff=function(a,b){var c=b.person[gfc_E](),d=gfc_e[gfc_mc]({userId:c}),e=gfc_e[gfc_H]();(this.d[gfc_k].viewer&&c!=this.d[gfc_k].viewer[gfc_E]()||this.Ib())&&e.add(gfc_ke(b.person[gfc_E](),"VIEWER"),"isProfileFriend");e.add(e[gfc_3c](d,{}),"activities");e[gfc_n](a)};
gfc_7[gfc_].gd=function(a,b){null!=a.get("activities")[gfc_l]()&&(this.d[gfc_k][gfc_o].activities=a.get("activities")[gfc_l]());var c=a.get("isProfileFriend");c&&b&&null!=this.d[gfc_k].viewer&&this.d[gfc_k].viewer[gfc_E]()!=b.person[gfc_E]()&&(this.d[gfc_k][gfc_o].isFriend=c[gfc_l]()[gfc_w])};
gfc_7[gfc_].ut=function(a,b){var c=a.get("profile")[gfc_l]();this.d[gfc_k][gfc_o].person=c;this.d[gfc_k][gfc_o].person.externalProfileUrl=null;var d=c[gfc_I](gfc_e[gfc_x][gfc_q].URLS),e=[];if(d)for(var f=0;f<d[gfc_B];f++){var g=d[f];"profile"!=g[gfc_I](gfc_e.Url[gfc_q].TYPE)&&"externalProfile"!=g[gfc_I](gfc_e.Url[gfc_q].TYPE)&&e[gfc_v](g);"externalProfile"==g[gfc_I](gfc_e.Url[gfc_q].TYPE)&&(this.d[gfc_k][gfc_o].person.externalProfileUrl=g[gfc_I](gfc_e.Url[gfc_q].ADDRESS))}this.d[gfc_k][gfc_o].links=
new gfc_Ko(e,this.of,0);this.d[gfc_k].owner=a.get("owner")[gfc_l]();this.d[gfc_k].viewer=a.get("viewer")[gfc_l]();(d=this.d[gfc_k].viewer)&&b.person[gfc_E]()!=this.d[gfc_k].viewer[gfc_E]()&&(this.d[gfc_k][gfc_o].isAdmin=a.get("isAdmin")[gfc_l](),this.d[gfc_k][gfc_o].isAdmin&&(this.d[gfc_k][gfc_o].isAdmin=this.d[gfc_k][gfc_o].isAdmin[gfc_Mb]()),this.d[gfc_k][gfc_o].isBlocked=a.get("isBlocked")[gfc_l](),this.d[gfc_k][gfc_o].isBlocked&&(this.d[gfc_k][gfc_o].isBlocked=this.d[gfc_k][gfc_o].isBlocked[gfc_Mb]()));
c=c[gfc_I]("profileExtensions");c=this.Mb.ef(c,this.Mb.zi);d=[];for(f in c){e=c[f];g={};g.title=e.title;var h=!1;if("SHORT_TEXT"==e[gfc_Wc]||"LONG_TEXT"==e[gfc_Wc])e[gfc_w]&&e[gfc_w][gfc_vc]&&(g.body=[],g[gfc_C][gfc_v](e[gfc_w][gfc_vc]),h=!0);else if(e[gfc_w]&&e[gfc_w].choice&&0<e[gfc_w].choice[gfc_B]){g.body=[];for(h=0;h<e[gfc_w].choice[gfc_B];++h)g[gfc_C][gfc_v](e[gfc_w].choice[h][gfc_gc]);h=!0}h&&d[gfc_v](g)}this.d[gfc_k][gfc_o].profileExtensions=d;this.lb||(this.lb=a.get("siteSettings")[gfc_l]());
this.isMessagingEnabled&&(f=(f=a.get("canMessage"))&&f[gfc_l]().canSendMessage,this.d[gfc_k][gfc_o].canSendMessage=f);this.Gm(a)};gfc_7[gfc_].hj=function(a){this.render(["blockUser"],"profile",{person:a})};gfc_7[gfc_].vw=function(a){this.render(["unblockUser"],"profile",{person:a})};gfc_7[gfc_].map=function(a,b){var c=[],d=gfc_K(function(a,b,c){a[gfc_v](b(c))},this,c,b);a.each(d);return c};gfc_7[gfc_].Iv=function(){this.ea();this.B("members-page")};
gfc_7[gfc_].Mv=function(){this.ea();this.render(["blocked-member-page"],"blocked-members-page",{start:0})};gfc_7[gfc_].cw=function(){this.Ii()};gfc_7[gfc_].us=function(a){this.render(["member-page"],"members-page",{start:this.la+a.getOffset()})};gfc_7[gfc_].$s=function(a){this.render(["member-page"],"members-page",{start:a.getOffset()-this.la})};gfc_7[gfc_].qs=function(a){this.render(["blocked-member-page"],"blocked-members-page",{start:this.la+a.getOffset()})};
gfc_7[gfc_].Ys=function(a){this.render(["blocked-member-page"],"blocked-members-page",{start:a.getOffset()-this.la})};gfc_7[gfc_].Lv=function(){this.ea();this.B("viewer-friends-page")};gfc_7[gfc_].Bs=function(a){this.render(["viewerFriends"],"viewer-friends-page",{start:this.la+a.getOffset()})};gfc_7[gfc_].gt=function(a){this.render(["viewerFriends"],"viewer-friends-page",{start:a.getOffset()-this.la})};gfc_7[gfc_].Jv=function(){this.ea();this.B("profile-friends-page")};
gfc_7[gfc_].zs=function(a){this.render(["profile-friends-page"],"profile-friends-page",{start:this.la+a.getOffset(),person:this.d[gfc_k][gfc_o].person})};gfc_7[gfc_].et=function(a){this.render(["profile-friends-page"],"profile-friends-page",{start:a.getOffset()-this.la,person:this.d[gfc_k][gfc_o].person})};gfc_7[gfc_].Hv=function(){this.ea();this.B("links")};gfc_7[gfc_].ts=function(a){var b=this.of+a.getOffset();this.d[gfc_k][gfc_o].links=new gfc_Ko(a.all(),this.of,b);this.B("links")};
gfc_7[gfc_].Zs=function(a){var b=a.getOffset()-this.of;this.d[gfc_k][gfc_o].links=new gfc_Ko(a.all(),this.of,b);this.B("links")};gfc_7[gfc_].Kv=function(){this.ea();this.B("sites")};gfc_7[gfc_].As=function(a){this.render(["sitesData"],"sites",{start:this.ln+a.getOffset()})};gfc_7[gfc_].ft=function(a){this.render(["sitesData"],"sites",{start:a.getOffset()-this.ln})};gfc_7[gfc_].Fv=function(){this.ea();this.B("activities")};
gfc_7[gfc_].ps=function(a){this.render(["activityData"],"activities",{start:this.Ba+a.getOffset()})};gfc_7[gfc_].Xs=function(a){this.render(["activityData"],"activities",{start:a.getOffset()-this.Ba})};gfc_7[gfc_].Ve=function(a){this.render(["deleteActivity"],this.d[gfc_8c],{activity:a})};gfc_7[gfc_].mu=function(a,b){var c=gfc_e[gfc_H]();c.add(gfc_me(b.person[gfc_E](),["BLOCKED"],[]),"block");this.ad();c[gfc_n](a)};
gfc_7[gfc_].lt=function(a){if(a=!a.get("block")[gfc_Ac]())this.d[gfc_k][gfc_o].isBlocked=!0};gfc_7[gfc_].Ku=function(a,b){var c=gfc_e[gfc_H]();c.add(gfc_me(b.person[gfc_E](),[],["BLOCKED"]),"unblock");this.ad();c[gfc_n](a)};gfc_7[gfc_].At=function(a){if(a=!a.get("unblock")[gfc_Ac]())this.d[gfc_k][gfc_o].isBlocked=!1};
gfc_7[gfc_].Gf=function(a,b){var c=b.activity,d=c[gfc_I](gfc_e[gfc_5b][gfc_q].ID),c=gfc_e[gfc_mc]({userId:c[gfc_I](gfc_e[gfc_5b][gfc_q][gfc_Yb])}),e=gfc_e[gfc_H]();e.add(gfc_7d(d),"delete");e.add(e[gfc_3c](c,{}),"activities");e[gfc_n](a)};
gfc_7[gfc_].cc=function(a){var b=gfc_ao,c=function(a){return a=a[gfc_j](/<a/g,"<a target='_top'")},d=null,e=this.d[gfc_k].viewer;null!=e&&a[gfc_I](gfc_e[gfc_5b][gfc_q][gfc_Yb])==this.d[gfc_k].viewer[gfc_E]()&&(d=gfc_K(this.Ve,this,a));(e=a[gfc_I](gfc_e[gfc_5b][gfc_q].STREAM_FAVICON_URL,{escapeType:"none"}))||(e=gfc_b.friendconnect_imageUrl+"/favicons.gif");return{icon:e,time:b(gfc_ga(a[gfc_I](gfc_e[gfc_5b][gfc_q].POSTED_TIME))),link:a[gfc_I](gfc_e[gfc_5b][gfc_q].STREAM_URL,{escapeType:"none"}),siteTitle:a[gfc_I](gfc_e[gfc_5b][gfc_q].STREAM_TITLE,
{escapeType:"none"}),innerHTML:c(a[gfc_I](gfc_e[gfc_5b][gfc_q].TITLE,{escapeType:"none"})),body:c(a[gfc_I](gfc_e[gfc_5b][gfc_q].BODY,{escapeType:"none"})),deleteHandler:d}};gfc_7[gfc_].sw=function(a){var b=gfc_a[gfc_$b].unescapeString,c=gfc_Io;return{icon:c(a[gfc_I](gfc_e[gfc_x][gfc_q][gfc_Jc])),link:a[gfc_I](gfc_e[gfc_x][gfc_q][gfc_Jc]),title:b(a[gfc_Zb]())}};
gfc_7[gfc_].rw=function(a){var b=gfc_a[gfc_$b].unescapeString,c=gfc_Io,d=a[gfc_I](gfc_e.Url[gfc_q].ADDRESS);return{icon:c(d),link:d,title:b(a[gfc_I](gfc_e.Url[gfc_q].LINK_TEXT))||d}};gfc_7[gfc_].Au=function(a,b){var c=gfc_e[gfc_H](),d=b.person[gfc_E](),e=gfc_e[gfc_D][gfc_Mc],f=this.Jl(d),g={};g[gfc_e[gfc_D].DataRequestFields.ESCAPE_TYPE]=gfc_e.EscapeType[gfc__c];c.add(c[gfc_3b](f,g),"friends");f={};f[e.FIRST]=this.Ox;f[e.MAX]=this.Nx;c.add(gfc_ne(gfc_e[gfc_mc]({userId:d}),f),"profileSites");c[gfc_n](a)};
gfc_7[gfc_].jr=function(a){a={user:a[gfc_E](),action:"DENY"};this.render(["sendFriendRequestResponse","members","viewerFriends"],gfc_K(this.yg,this),{friendRequestResponses:[a]})};gfc_7[gfc_].yg=function(a){return a&&a["next-view"]?a["next-view"]:["friend-requests"]};gfc_7[gfc_].Gu=function(a,b){var c=b[gfc_o],d=gfc_e[gfc_H]();d.add(gfc_8d(c[gfc_E](),b.message),"friendRequest");this.ad();d[gfc_n](a)};gfc_7[gfc_].yt=function(a){a.get("friendRequest")[gfc_Ac]()||(this.d[gfc_k][gfc_o].isInvited=!0)};
gfc_7[gfc_].qu=function(a,b){var c=gfc_Go.newBatch(),d=b.friendRequestResponses;c.add("updateFriendRequest",gfc_Go.extensions.get({command:"ProcessFriendRequests",params:'{"requests":'+gfc_a[gfc_7b].stringify(d)+"}"}));c.add("friendRequests",gfc_Go.extensions.get({command:"GetFriendRequests",params:'{"idSpec" : "VIEWER"}'}));this.ad();c.execute(a)};gfc_7[gfc_].tq=function(){this.ea();this.B("invite-friend")};gfc_7[gfc_].dv=function(a){this.isMessagingEnabled&&(a=a[gfc_I](gfc_e[gfc_x][gfc_q].ID),this.ev(a))};
gfc_7[gfc_].ev=function(a){if(this.isMessagingEnabled){a="/friendconnect/messaging/compose?recipientId="+a;var b=570,c=395;gfc_Vn(a,gfc_g(b),gfc_g(c))}};gfc_1[gfc_].Pn=function(){var a="/friendconnect/messaging/accept",b=570,c=375;gfc_Vn(a,gfc_g(b),gfc_g(c));return!1};gfc_7[gfc_].sq=function(){this.ea();this.B("block-member")};gfc_7[gfc_].uq=function(){this.Fn(this.d[gfc_k].viewer)};
gfc_7[gfc_].cv=function(a){this.vf();a={profile:a};var b=gfc_P("inviteMessage");b&&(a.message=gfc_6g(b));this.render(["sendFriendRequest"],"profile",a)};gfc_7[gfc_].io=function(a){this.vf();this.hj(a)};gfc_7[gfc_].bm=function(a,b,c){c=c||!1;this.d[gfc_k].friendRequests=gfc_ie(a.friendRequests,gfc_$d);0<this.d[gfc_k].friendRequests[gfc_Mb]()?b["next-view"]="friend-requests":b["next-view"]="faces";c||gfc_Gn("friend")};
gfc_7[gfc_].wt=function(a){this.d[gfc_k][gfc_o].sites=a.get("profileSites")[gfc_l]();this.d[gfc_k][gfc_o].friends=a.get("friends")[gfc_l]()};gfc_7[gfc_].hq=function(){return this.Uv};gfc_7[gfc_].Y=function(){this.jx.rebuild();this.Wn();gfc_a[gfc_Vc].adjustHeight()};gfc_7[gfc_].Os=function(a){return a=gfc_Q("span",{"class":"fc-cap-link-big"},gfc_Q("a",{"class":"fc-cap-link-big"},this.e.MSG_OPTIONS),a.Cg())};
gfc_7[gfc_].Ns=function(){var a=[];a[a[gfc_B]]=gfc_Q("div",{"class":"goog-menuitem menuaction-settings"},this.e.MSG_SITE_SETTINGS);this.isSocialShareEnabled&&(a[a[gfc_B]]=gfc_Q("div",{"class":"goog-menuitem menuaction-share"},this.e.MSG_MEMBERS_SHARE));this.d[gfc_k].isViewerAdmin&&!this.Ib()&&(a[a[gfc_B]]=gfc_Q("div",{"class":"goog-menuitem menuaction-manage"},this.e.MSG_MANAGE));a[a[gfc_B]]=gfc_Q("div",{"class":"goog-menuitem menuaction-signout"},this.lb.signOutPrompt||this.e.MSG_SIGN_OUT);a[a[gfc_B]]=
gfc_Q("div",{"class":"goog-menuseparator fc-menuseparator-line"});a[a[gfc_B]]=gfc_Q("div",{"class":"goog-menuitem menuaction-aboutfc"},gfc_Q("span",{"class":"fc-small-menu-link"},this.e.MSG_ABOUT_FC));return a};
gfc_7[gfc_].Ps=function(a){a[gfc_Vb]();a=a[gfc_F].h()[gfc_Xc];a[gfc_eb]("menuaction-settings")?this.Bb():a[gfc_eb]("menuaction-share")?this.share():a[gfc_eb]("menuaction-signout")?this.signout():a[gfc_eb]("menuaction-manage")?this.yq():a[gfc_eb]("menuaction-aboutfc")&&(a=gfc_b[gfc_sc](gfc_Nn()+"/friendconnect/home/overview"),a[gfc_kb]())};gfc_7[gfc_].yq=function(){var a={},b=gfc_a[gfc_r][gfc_4a]()[gfc_ic];gfc_Gn("lightbox");gfc_a[gfc_r].requestNavigateTo(b,a);return!1};
var gfc_Jo=function(a){for(var b={},c=0;c<a[gfc_B];++c)b[a[c]]=a[c];return b}("HEIGHT BORDER_COLOR CONTENT_BG_COLOR CONTENT_HEADLINE_COLOR CONTENT_LINK_COLOR CONTENT_SECONDARY_TEXT_COLOR CONTENT_SECONDARY_LINK_COLOR CONTENT_TEXT_COLOR ENDCAP_BG_COLOR ENDCAP_LINK_COLOR ENDCAP_TEXT_COLOR FACE_SIZE NUMBER_ROWS".split(" "));
gfc_7[gfc_].s=function(){var a=gfc_Jo,b=[],c=0;this.f(a.HEIGHT);this.Jh()&&(b[c++]=this.j(".fc-thumbnail img {height:%spx;width:%spx}",this.f(a.FACE_SIZE)));b[c++]=this.j(".fc-scroll-botnav, .fc-scroll, .fc-noscroll-botnav {height: %spx;}\n",this.Cm);b[c++]=this.j(".fc-members,.fc-members-canvas {border-color: %s;}\n.fc-userpage-itemlist,.fc-userpage-itemlist-canvas,.fc-botcap-short { border-top-color: %s; }\n.fc-topcap,.fc-topverb,.fc-friendreq,.fc-friendreqs,.fc-timeframe { border-bottom-color: %s; }\n",
this.f(a.BORDER_COLOR));this.cf()&&(this.Rk("profile")?b[c++]=".fc-topcap {height: "+this.slimTopCapHeight+"px;}\n":this.Mh()?b[c++]=".fc-topcap {height: 0px;}\n":b[c++]=".fc-topcap {height: "+this.tinyTopCapHeight+"px;}\n");this.Ib()?b[c++]=".fc-userpic-caption {margin-left: 59px;}\n":b[c++]=".fc-userpic-caption {margin-left: 40px;}\n";this.Mh()?b[c++]=".fc-topcap-color {background-color: white;}\n":b[c++]=this.j(".fc-topcap-color {background-color: %s;}\n",this.f(a.ENDCAP_BG_COLOR));this.el()?b[c++]=
".fc-botcap-short {background-color: white;}\n":b[c++]=this.j(".fc-botcap-short {background-color: %s;}\n",this.f(a.ENDCAP_BG_COLOR));b[c++]=this.j(".fc-botverb, .fc-topverb, .fc-members-header {background-color: %s;}\n",this.f(a.ENDCAP_BG_COLOR));b[c++]=this.j(".fc-botverb, .fc-topverb, .fc-members-header {background-color: %s;}\n",this.f(a.ENDCAP_BG_COLOR));b[c++]=this.j(".fc-topcap, .fc-botverb, .fc-topverb, .fc-botcap-short, .fc-header-sectitle, .fc-members-header {color: %s;}\n",this.f(a.ENDCAP_TEXT_COLOR));
b[c++]=this.j(".fc-botverb,.fc-topcap .fc-menutriangle-down, .fc-topcap .fc-menutriangle-up,.fc-topcap a, .fc-topcap a:active, .fc-topcap a:visited,.fc-topcap-link a, .fc-topcap-link a:active, .fc-topcap-link a:visited,.fc-cap-link-big a, .fc-cap-link-big a:active,.fc-left-verb a, .fc-left-verb a:active, .fc-left-verb a:visited,.fc-right-verb a, .fc-right-verb a:active, .fc-right-verb a:visited,.fc-subtle-botcap a, .fc-subtle-botcap a:active, .fc-subtle-botcap a:visited.fc-left-verb-canvas a, .fc-left-verb-canvas a:active, .fc-left-verb-canvas a:visited,.fc-right-verb-canvas a, .fc-right-verb-canvas a:active, .fc-right-verb-canvas a:visited {color: %s;}\n",
this.f(a.ENDCAP_LINK_COLOR));b[c++]=this.j(".fc-content-bg, .fc-subtle-botcap {background-color:%s;}\n",this.f(a.CONTENT_BG_COLOR));b[c++]=this.j(".fc-content a, .fc-content a:active, .fc-content a:visited,\n.fc-item-body a, .fc-item-body a:active, .fc-item-body a:visited,\n.fc-see-all a, .fc-see-all a:active, .fc-see-all a:visited,\n.fc-content-link a, .fc-content-link a:active, .fc-content-link a:visited,\n.fc-content-canvas a, .fc-content-canvas a:active, .fc-content-canvas a:visited {color: %s;}\n",
this.f(a.CONTENT_LINK_COLOR));b[c++]=this.j(".fc-members,.fc-members-canvas {color:%s;}\n",this.f(a.CONTENT_TEXT_COLOR));b[c++]=this.j(".fc-helpful,.fc-on-other-site,.fc-no-elements, .ot-activity-metadata {color:%s;}\n",this.f(a.CONTENT_SECONDARY_TEXT_COLOR));b[c++]=this.j(".fc-faded-link a, .fc-faded-link a:active, .fc-faded-link a:visited, .fc-faded-link-small a, .fc-faded-link-small a:active, .fc-faded-link-small a:visited {color: %s;}\n",this.f(a.CONTENT_SECONDARY_LINK_COLOR));b[c++]=this.j(".fc-sectitle {color: %s;}\n",
this.f(a.CONTENT_HEADLINE_COLOR));return gfc_7.i.s[gfc_G](this)+b[gfc_J]("\n")};gfc_L("goog.peoplesense.gadget.Members",gfc_7);gfc_L("goog.peoplesense.gadget.Members.start",gfc_7[gfc_t]);var gfc_Ko=function(a,b,c){gfc_e.Collection[gfc_G](this,a[gfc_xc](c,c+b),c,a[gfc_B]);this.Ow=a;this.da=b};gfc_Ko.inherits(gfc_e.Collection);gfc_Ko[gfc_].all=function(){return this.Ow};gfc_Ko[gfc_].qb=function(){return this.da};gfc_L("goog.peoplesense.gadget.Members.PagedCollection.prototype.all",gfc_Ko[gfc_].all);
gfc_L("goog.peoplesense.gadget.Members.PagedCollection.prototype.getPageSize",gfc_Ko[gfc_].qb);
