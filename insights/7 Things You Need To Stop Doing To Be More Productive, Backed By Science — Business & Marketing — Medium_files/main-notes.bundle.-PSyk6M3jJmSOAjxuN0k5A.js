(function(z){
var fU = function(a) {
  return a.Nb.querySelector(".notes-container-scroller");
};
var gU = function(a, b, c) {
  return a.Dd.put(z.EG.R({postId:a.Z, noteId:c, replyId:b}), {state:"HIDDEN"}, {na:!0});
};
var hU = function(a) {
  return "“" + (0,z.O)(a.content) + "” —@" + (0,z.O)(a.username) + " " + (0,z.O)(a.url);
};
var iU = function(a, b, c, d, e, f) {
  z.XP.call(this, a, b, c, d);
  this.Jm = f;
  this.Yq = a.get("twitter");
  this.Ca = a.get("dom-monitor");
  this.Ca.F("resize-end", this.Ck, this);
  this.Ca.F("inner-resize-end", this.Ck, this);
  b.get("isPublished");
  this.Sa = a.get("popover");
  this.lu = this.Hk = this.Mz = null;
  (0,z.Di)(this.Nb).D("hide-reply", this.cI, this).D("start-note", this.GI, this).D("show-note-permalink", this.FI, this);
  e.F("update", this.kA, this);
  e.F("highlight", this.Wz, this);
  e.F("twitter", this.Vz, this);
  this.eb = e;
  (0,z.uO)(this.anchors).forEach(function(a) {
    this.rb.push((0,z.R)(a, "click", this.CI, this));
  }, this);
  this.rb.push((0,z.R)(window.document.body, "click", this.EH, this, !0));
};
var jU = function(a, b) {
  for (var c = b ? 1 : -1, d = a.parentNode.childNodes, e = d.length, f = (0,z.bb)(d, a), h = (0,z.EI)((0,z.Fw)(a, 0)), f = f + c;0 <= f && f < e;f += c) {
    var k = d[f];
    if ("SECTION" === k.tagName) {
      var l = (0,z.EI)((0,z.Fw)(k, 0));
      if (h || l) {
        return k;
      }
    }
  }
  return null;
};
var kU = function(a) {
  var b = a.data.wa;
  if (b = b ? a.anchors.get(b) : null) {
    var c = (0,z.vw)(b, (0,z.tO)(a.anchors, b)), d = null, e = null, b = (0,z.qi)(a.gj).top - (0,z.qi)(a.gx).top, f = c && (0,z.EI)((0,z.Fw)(c, 0));
    c && (f ? (d = b + c.offsetTop - 40, e = c.offsetHeight + 80) : (d = b + -40 - 20, (f = jU(c, !1)) && (d = b + f.offsetTop + f.offsetHeight), f = b + c.offsetParent.offsetTop + c.offsetParent.offsetHeight + 40, (c = jU(c, !0)) && (f = b + c.offsetTop), e = f - d));
    a.Nb.style.top = d + "px";
    a.Nb.style.height = e + "px";
    (0,z.ww)(a.gj, function(a) {
      var b = (0,z.wO)(a, this.gx), c = b + a.offsetHeight;
      (0,z.Uc)(a, "grid-breaking-slide", b < d + e && c > d);
    }, a);
  }
};
var lU = function(a, b) {
  (0,z.lQ)(a, b.Nd);
  mU(a, {scroll:!0, jg:!0});
  (0,z.qQ)(a, b);
  a.bb && a.bb.focus();
};
var nU = function(a, b) {
  (0,z.q)((0,z.mQ)(a, b), function() {
    (0,z.jQ)(this) || ((0,z.qQ)(this, b), this.bb && this.bb.focus());
    oU(this, {scroll:!0, jg:!0});
    (0,z.ii)(this.eg, 0, (0,z.li)(this.Fc.md[b]) - 100);
  }, a);
};
var pU = function(a, b, c) {
  var d = a.anchors.get(a.data.wa);
  if (!a.isAuthenticated) {
    var e = a.data.wa;
    a.pe && (e += "--highlight-" + a.pe.startIndex + "-" + a.pe.endIndex);
    a.ub.querySelector(".notes-add").setAttribute("data-redirect", (0,z.Hy)() + "#" + e);
  }
  if (d) {
    e = d.querySelector(".notes-highlight");
    d = c.jg && e ? e : d;
    if (a.data.wa) {
      var f = (0,z.qi)(d).top, e = fU(a), h = (0,z.qi)(e).top, f = Math.round(f - h - 20);
      b && (f -= b.offsetTop - ((0,window.parseInt)(a.ub.style.marginTop, 10) || 0));
      40 > f ? (a.ub.style.top = "40px", a.$C.style.height = Math.round(Math.max(a.ub.offsetHeight, fU(a).offsetHeight) + 80 - f) + "px", (0,z.ii)(e, 0, Math.round(-f + 40))) : (a.ub.style.top = Math.round(f) + "px", a.$C.style.height = Math.round(f + a.ub.offsetHeight + 40) + "px", (0,z.ii)(e, 0, 0));
    }
    c.scroll && (500 >= window.innerWidth ? b.scrollIntoView(!0) : (0,z.vJ)(d));
  }
};
var mU = function(a, b) {
  var c = a.ub.querySelector(".notes-new-note, .notes-add-sign-in");
  c && pU(a, c, b);
};
var qU = function(a, b, c) {
  b = a.ub.querySelector('[data-note-id\x3d"' + b + '"]');
  pU(a, b, c);
};
var oU = function(a, b) {
  if (a.data.wa) {
    var c = (0,z.KP)(a.data, a.data.wa), d = c.count();
    (c = d ? (0,z.lk)((0,z.pk)(c, 0), "id") : null) ? (1 == d && (0,z.oQ)(a, c), b.jg = !1, qU(a, c, b)) : mU(a, b);
  }
};
var rU = function(a, b) {
  return b == a.data.wa ? (0,z.q)((0,z.mQ)(a, null), z.AB) : (0,z.q)((0,z.mQ)(a, b), (0,z.Tb)(!!b));
};
var sU = function(a, b, c) {
  var d = (0,z.Yd)(b.target, null, "notes-note");
  !d || b.relatedTarget && (0,z.Td)(d, b.relatedTarget) || !(b = a.data.Pb(d.getAttribute("data-note-id"), a.data.wa)) || (d = null, c ? d = (0,z.lk)(b, "highlightId") : a.Pe && (d = (0,z.lk)(a.data.Pb(a.Pe, a.data.wa), "highlightId")), (0,z.lQ)(a, d ? a.data.xp[d] || null : null, a.Kw));
};
var tU = function(a) {
  z.v.call(this);
  this.ca = a;
};
(0,z.p)(iU, z.XP);
z.g = iU.prototype;
z.g.ei = 3;
z.g.tg = !1;
z.g.eb = null;
z.g.Xw = function() {
  var a = (0,z.aj)();
  this.Jn = null;
  this.tg = !0;
  var b = (0,z.pQ)();
  this.Xj();
  this.isAuthenticated && (0,z.Uc)(this.ub, "notes-is-creator", this.data.yg.userId === this.currentUser.userId);
  (0,z.zL)(this.L(".notes-post-creator"), this.data.yg.name);
  this.mr(b);
  this.rb.push((0,z.R)(this.Nb, "mouseover", this.JH, this));
  this.rb.push((0,z.R)(this.Nb, "mouseout", this.IH, this));
  this.rb.push((0,z.R)(this.ub, "click", this.GH, this));
  this.rb.push((0,z.R)(this.gj, z.Ho, this.vu, this));
  (0,z.Lk)("notes.renderMarkers", (0,z.aj)() - a);
};
z.g.mr = function(a) {
  if (a.anchor && this.Fc.md[a.anchor]) {
    if (nU(this, a.anchor), a.Nd) {
      (0,z.oQ)(this, a.Nd.id, !0), qU(this, a.Nd.id, {scroll:!0, jg:!0}), "reply" == a.CB && (0,z.kQ)(this);
    } else {
      if ("highlight" == a.CB) {
        var b = this.anchors.get(a.anchor), c = a.Nd.startIndex, d = a.Nd.endIndex, e = (0,z.uN)(b, c, b, d);
        e && (a = new z.QP(e, b, new z.pO({anchor:a.anchor, startIndex:c, endIndex:d, content:e.rc()})), lU(this, a));
      }
    }
  }
};
z.g.no = function(a) {
  iU.w.no.call(this, a);
  this.bb.clear();
  (0,z.oQ)(this, a.id);
  (0,z.t)(this.ub, "notes-hide-editor");
};
z.g.bx = function() {
  var a = this.screen.N;
  (0,z.Fn)(function() {
    var b = a.querySelector(".js-upvoters-item-current-user");
    if (b) {
      var c = b.offsetParent, d = this.Sa.createElement("top", (0,z.K)(z.FP), "popover-notes-vote");
      c.appendChild(d);
      var e = a.querySelector(".notes-vote-editor"), f = (0,z.ZP)(this, e);
      f.F("change", function() {
        var b = d.querySelector('button[data-action\x3d"cancel-notes-vote"]');
        if (b) {
          var c = this.Ze.Zh();
          this.Hk = this.Hk || a.querySelector(".recommend-button");
          this.Hk.setAttribute("data-action", c ? "unvote" : "save-notes-vote");
          b.innerHTML = c ? "No thanks" : "Cancel";
        }
      }, this);
      c = c.getBoundingClientRect();
      e = b.getBoundingClientRect();
      d.style.left = -(d.offsetWidth / 2) + b.offsetLeft + e.width / 2 + "px";
      d.style.bottom = c.height - b.offsetTop + "px";
      (0,z.ri)(d);
      (0,z.t)(d, "fade");
      this.Mz = d;
      this.lu = (0,z.R)(window.document.body, "click", function(a) {
        (0,z.Td)(d, a.target) || f.Zh() && this.Dj();
      }, this);
    }
  }, this);
};
z.g.Dj = function() {
  this.Hk && "save-notes-vote" == this.Hk.getAttribute("data-action") && this.Hk.setAttribute("data-action", "unvote");
  (0,z.Nd)(this.Mz);
  this.lu && (0,z.$h)(this.lu);
  this.Ze && this.Ze.Xb();
};
z.g.bC = function() {
  var a = {scroll:!0, jg:!0};
  if (this.bb) {
    mU(this, a), this.bb.focus();
  } else {
    var b;
    a: {
      b = this.Wb;
      for (var c in b) {
        b = b[c];
        break a;
      }
      b = void 0;
    }
    if (c = b && b.Ta()) {
      (0,z.oQ)(this, c), qU(this, c, a), b.focus();
    }
  }
};
z.g.yn = function() {
  kU(this);
  (0,z.xO)(this.anchors, this.Nb, this.anchors.get(this.data.wa));
  iU.w.yn.call(this);
  kU(this);
};
z.g.Mh = function() {
  kU(this);
};
z.g.ax = function(a) {
  (0,z.q)(rU(this, a.value), function(a) {
    a && ((0,z.jQ)(this) || ((a = this.getSelection()) && a.Nd.anchor == this.data.wa ? ((0,z.lQ)(this, a.Nd), (0,z.qQ)(this, a)) : (0,z.qQ)(this, this.data.wa), this.bb && this.bb.focus()), oU(this, {scroll:!0, jg:!0}));
  }, this);
};
z.g.$w = function(a) {
  (0,z.LP)(this.Fc, (0,z.lk)(a, "anchor"));
  (0,z.lk)(a, "id") == this.Pe && (0,z.lQ)(this, null);
};
z.g.Ax = function(a) {
  (0,z.u)((0,z.Yd)(a.target, null, "notes-replies"), "notes-replies-hidden");
  this.Mh();
};
z.g.CI = function(a) {
  if (!this.Jm && "A" != a.target.tagName && (z.HC || this.data.wa)) {
    var b = this.getSelection();
    if (!b || b.lr != this.data.wa) {
      if (this.data.wa && 1E3 >= window.innerWidth) {
        return(0,z.mQ)(this, null);
      }
      a = (0,z.vO)(this.anchors, a.target);
      (0,z.q)(rU(this, a), function(a) {
        a && ((0,z.jQ)(this) || ((0,z.qQ)(this, this.data.wa), this.bb && this.bb.focus()), oU(this, {scroll:!0, jg:!0}));
      }, this);
    }
  }
};
z.g.Ck = function() {
  this.Xj();
};
z.g.EH = function(a) {
  if (this.data.wa) {
    var b = a.target;
    (0,z.Zd)(b, z.ti) || (b = (0,z.hi)(b, function(a) {
      return a == this.ub || a == this.Fc.Li || a == this.eb.ba() || a.getAttribute("data-action") && "zoom" != a.getAttribute("data-action");
    }.bind(this)), window.document.body === b && (1400 >= window.innerWidth && (a.stopPropagation(), a.preventDefault()), (0,z.mQ)(this, null)));
  }
};
z.g.FI = function(a) {
  (0,z.Ds)(this.Wk, a.value);
};
z.g.JH = function(a) {
  sU(this, a, !0);
};
z.g.IH = function(a) {
  sU(this, a, !1);
};
z.g.kA = function() {
  if (!this.Jm) {
    var a = (0,z.wH)();
    if (!a || a.isCollapsed()) {
      (0,z.HH)(this.eb);
    } else {
      var b = (0,z.tO)(this.anchors, (0,z.YH)(a)), c;
      if (c = b) {
        c = (0,z.YH)(a), c = (0,z.hi)(c, z.RI, b);
      }
      c ? (0,z.GH)(this.eb, (0,z.wJ)(a)) : (0,z.HH)(this.eb);
    }
  }
};
z.g.Wz = function() {
  (0,z.HH)(this.eb);
  var a = this.getSelection();
  a && lU(this, a);
  return!1;
};
z.g.Vz = function() {
  (0,z.HH)(this.eb);
  var a = (0,z.wH)();
  if (!a || a.isCollapsed()) {
    return!1;
  }
  var b = this.Yq, c = a.rc(), a = this.postId, c = {content:c, username:this.data.yg.username, url:(0,z.Ey)().toString()}, c = (0,z.Qz)(hU, c);
  b.jq(c);
  (0,z.Dk)(z.aD, {postId:a, type:"highlight", dest:"twitter"});
  return!1;
};
z.g.cI = function(a) {
  a = a.value.split(",");
  var b = a[0], c = a[1];
  (0,z.r)((0,z.q)(gU(this.data, c, b), function() {
    for (var a = this.data.Pb(b, this.data.wa), e = a.get("replies"), f = 0;f < e.length;f++) {
      if (e[f].replyId == c) {
        a.removeItem("replies", f);
        break;
      }
    }
    (0,z.bQ)(this, z.qD, this.data.Pb(b, this.data.wa), {replyId:c});
    this.jj.H("The reply has been dismissed", "success");
  }, this), (0,z.oq)(this.al, "Sorry, we couldn’t hide the reply. Please try again later and make sure you are logged in."));
};
z.g.GH = function(a) {
  a = a.target;
  var b = (0,z.Yd)(a, null, "notes-note");
  if (b) {
    var c = b.getAttribute("data-note-id");
    c == this.Pe ? (0,z.hi)(a, function(a) {
      return!!a.getAttribute("data-action") || (0,z.Qc)(a, "editable");
    }, b, !0) == b && (0,z.oQ)(this, null) : ((0,z.oQ)(this, c), qU(this, c, {scroll:!0, jg:!0}));
  }
};
z.g.GI = function() {
  var a = this.getSelection();
  (0,z.oQ)(this, null);
  a && (0,z.lQ)(this, a.Nd);
  (0,z.qQ)(this, a || this.data.wa);
  this.bb && (a && mU(this, {scroll:!0, jg:!0}), this.bb.focus());
};
z.g.vu = function(a) {
  (a = a.target.getAttribute("name")) && (0,z.rO)(this.anchors, a) && (0,z.HP)(this.Fc, a, a == this.data.wa);
};
z.g.Xj = function() {
  if (this.tg) {
    if (this.mf) {
      return(0,z.ij)(Error("UpdatePositions called after dispose"));
    }
    iU.w.Xj.call(this);
    this.Mh();
    var a = {scroll:!1, jg:!0};
    this.Pe ? qU(this, this.Pe, a) : oU(this, a);
  }
};
z.g.lM = function() {
  if (this.data.wa) {
    var a = this.anchors.get(this.data.wa);
    if (!a) {
      (0,z.mQ)(this, null);
    } else {
      if (!this.Jm) {
        var b = (0,z.wH)();
        b && (b = (0,z.YH)(b), (0,z.Td)(a, b) || (0,z.mQ)(this, null));
      }
    }
  }
};
z.g.C = function() {
  this.Ca.Ba("resize-end", this.Ck, this);
  this.Ca.Ba("inner-resize-end", this.Ck, this);
  this.eb.Ba("update", this.kA, this);
  this.eb.Ba("highlight", this.Wz, this);
  this.eb.Ba("twitter", this.Vz, this);
  iU.w.C.call(this);
};
(0,z.p)(tU, z.v);
tU.prototype.Zk = function(a, b, c, d, e, f) {
  return new iU(a.Oa(), b, c, d, e, f);
};
var uU = z.Qq;
uU.Oa().scope("app").add("notes", tU);
(0,z.JH)(uU, "notes");
})(_mdm);
