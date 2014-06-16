(function(z){
var $I;
var SI;
var kH = function(a) {
  a.Jf && (0,z.Nd)(a.Jf);
  a.Jf = null;
  a.Ic && a.Ic.close();
  a.Ic = null;
};
var lH = function() {
  var a = window.document.createElement("input");
  a.type = "file";
  a.name = "uploadedFile";
  a.value = "";
  a.style.position = "absolute";
  a.style.left = "-9999px";
  a.style.top = "-9999px";
  return a;
};
z.mH = function(a) {
  return a.innerText || a.textContent;
};
var nH = function(a) {
  var b, c = !1;
  if (a.createRange) {
    try {
      b = a.createRange();
    } catch (d) {
      return null;
    }
  } else {
    if (a.rangeCount) {
      if (1 < a.rangeCount) {
        c = new z.jf;
        b = 0;
        for (var e = a.rangeCount;b < e;b++) {
          c.Qf.push(a.getRangeAt(b));
        }
        return c;
      }
      b = a.getRangeAt(0);
      c = (0,z.Ze)(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset);
    } else {
      return null;
    }
  }
  return(a = b) && a.addElement ? (0,z.cf)(a) : (0,z.Te)(a, c);
};
var oH = function(a) {
  z.v.call(this);
  this.ca = a;
  this.W = a.get("dialog");
  this.ma = (0,z.Cc)(new z.wc, function() {
    this.ma = null;
  }, this);
  this.Im = !1;
  this.lk = "";
};
var pH = function(a, b, c) {
  z.hB.call(this, a);
  this.lk = b;
  this.Ic = c;
  this.ma = new z.wc;
};
var qH = function(a) {
  z.v.call(this);
  this.ca = a;
  this.ma = (0,z.Cc)(new z.wc, function() {
    (0,z.bd)(this);
  }, this);
  this.Da = lH();
  this.Im = !1;
};
z.rH = function(a, b) {
  return a.Mi[a.Pm[b]];
};
z.sH = function(a, b) {
  return b in a.Pm && a.Pm[b] in a.Mi;
};
var tH = function(a) {
  return 5 == a || 4 == a || 11 == a;
};
var uH = function(a) {
  return'\x3cdiv class\x3d"ie9-dialog"\x3e\x3cform action\x3d"/_/iframe-upload" method\x3d"post" accept-charset\x3d"utf-8" enctype\x3d"multipart/form-data" target\x3d"' + (0,z.P)(a.rL) + '"\x3e\x3cp\x3e\x3cinput type\x3d"file" name\x3d"uploadedFile"\x3e\x3c/p\x3e\x3c/form\x3e\x3cdiv class\x3d"spinner-overlay"\x3e\x3c/div\x3e\x3c/div\x3e';
};
var vH = function(a, b, c) {
  var d = (0,z.sa)(c);
  if (!b[d]) {
    b[d] = !0;
    for (var e in c.De) {
      var d = c.De[e], f = a.De[e];
      f || (f = a.De[e] = new z.ah(a), f.di = !1, f.ye = !1);
      f.di = f.di || d.di;
      f.ye = f.ye || d.ye;
      for (var h in d.attributes) {
        var k = d.attributes[h];
        if (!0 === k || !0 === f.attributes[h]) {
          f.attributes[h] = !0;
        } else {
          if ((0,z.ma)(k)) {
            var l = f.attributes[h];
            (0,z.ma)(l) || (l = f.attributes[h] = []);
            (0,z.gb)(l, k);
          }
        }
      }
      vH(a, b, d.td);
    }
  }
};
z.wH = function(a) {
  return(a = (0,z.se)(a || window)) && nH(a);
};
var xH = function(a, b, c) {
  var d;
  d = d || (0,z.td)(a.parentElement());
  var e;
  1 != b.nodeType && (e = !0, b = d.zc("DIV", null, b));
  a.collapse(c);
  c = d || (0,z.td)(a.parentElement());
  var f, h = f = b.id;
  f || (f = b.id = "goog_" + z.xB++);
  a.pasteHTML(b.outerHTML);
  (b = c.ba(f)) && (h || b.removeAttribute("id"));
  e && (a = b.firstChild, d.nL(b), b = a);
  return b;
};
z.yH = function(a, b, c) {
  if ((0,z.na)(a)) {
    try {
      (0,z.rb)(a, b, c);
    } catch (d) {
      if (d !== z.fe) {
        throw d;
      }
    }
  } else {
    a = (0,z.ee)(a);
    try {
      for (;;) {
        b.call(c, a.next(), void 0, a);
      }
    } catch (e) {
      if (e !== z.fe) {
        throw e;
      }
    }
  }
};
z.zH = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b);
};
var AH = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return "\x26";
      case "lt":
        return "\x3c";
      case "gt":
        return "\x3e";
      case "quot":
        return'"';
      default:
        if ("#" == c.charAt(0)) {
          var d = Number("0" + c.substr(1));
          if (!(0,window.isNaN)(d)) {
            return String.fromCharCode(d);
          }
        }
        return a;
    }
  });
};
var BH = function(a) {
  var b = {"\x26amp;":"\x26", "\x26lt;":"\x3c", "\x26gt;":"\x3e", "\x26quot;":'"'}, c;
  c = window.document.createElement("div");
  return a.replace(CH, function(a, e) {
    var f = b[a];
    if (f) {
      return f;
    }
    if ("#" == e.charAt(0)) {
      var h = Number("0" + e.substr(1));
      (0,window.isNaN)(h) || (f = String.fromCharCode(h));
    }
    f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
    return b[a] = f;
  });
};
z.$ = function(a, b) {
  return z.ba[a] = b;
};
z.DH = function(a) {
  (0,z.jB)(a);
  return a.Ag.zb();
};
z.EH = function(a, b) {
  if ((0,z.sH)(a, b)) {
    return(0,z.Jc)((0,z.rH)(a, b));
  }
  if (!a.Xp[b]) {
    var c = z.kG.R({"*":[(0,window.encodeURIComponent)(b)]}, a.aG ? {frame:"true"} : void 0);
    a.Xp[b] = (0,z.q)((0,z.Cc)(a.ea.get(c, {na:!0}), function() {
      delete this.Xp[b];
    }, a), function(a) {
      a = (0,z.al)(a.value, a.references);
      a = (0,z.Ez)(this, a);
      this.Pm[b] = (0,z.lk)(a, "mediaResourceId");
      return a;
    }, a);
  }
  return a.Xp[b].zb();
};
var FH = function(a, b) {
  var c = window.document.getElementById(a.zp + (0,z.sa)(b));
  a.X("before-clear", b, c);
  c.innerHTML = (0,z.Jq)(a, b);
  a.X("after-draw", b, c);
};
z.GH = function(a, b) {
  a.xs.cancel();
  var c = a.U;
  (0,z.t)(c, "highlight-menu-measure");
  var d = c.offsetWidth, e = b.left + b.width / 2 - d / 2, f = b.top + -6 - c.offsetHeight;
  e + d > window.document.body.clientWidth ? (e -= d / 2, (0,z.Wc)(c, "far-left", "far-right")) : 0 >= e ? (e += d / 2, (0,z.Wc)(c, "far-right", "far-left")) : (0,z.Tc)(c, ["far-left", "far-right"]);
  var d = 0, h = (0,z.mi)(c);
  h && (d = (0,z.ni)(h).top);
  c.style.left = Math.round(e) + "px";
  c.style.top = Math.round(f + d) + "px";
  (0,z.ri)(c);
  (0,z.Wc)(c, "highlight-menu-measure", "highlight-menu-active");
  a.br = !0;
  a.X("show");
};
z.HH = function(a) {
  a.br && ((0,z.Tc)(a.U, ["highlight-menu-active", "highlight-menu-linkmode"]), a.br = !1, a.X("hide"));
};
z.IH = function(a, b, c) {
  return a.jr(b, function() {
    return c;
  });
};
z.JH = function(a, b) {
  var c = a.Ua[b];
  if (!c) {
    throw Error('Called finishLoading on "' + b + '", which looks like it was not in the process of loading.');
  }
  (0,z.q)(a.rt[b] || (0,z.Jc)(!0), function() {
    delete this.Ua[b];
    delete this.rt[b];
    this.Gp[b] = !0;
    c.Ea(!0);
  }, a);
};
z.KH = function(a, b, c) {
  c = Math.min(c, a.text.length);
  a.text = a.text.substring(0, c) + b + a.text.substring(c);
  a = a.yb;
  for (var d = 0;d < a.length;d++) {
    var e = a[d];
    (3 != e.g() ? (0,z.Lg)(e) >= c : (0,z.Lg)(e) > c) && e.setEnd((0,z.Lg)(e) + b.length);
    0 !== (0,z.Kg)(e) && (0,z.Kg)(e) >= c && e.setStart((0,z.Kg)(e) + b.length);
  }
};
z.LH = function(a, b) {
  for (var c = a.yb, d = 0;d < c.length;d++) {
    var e = c[d];
    if (e.g() == b.g() && ((0,z.vm)(b, (0,z.Kg)(e), !1) && e.setStart((0,z.Lg)(b)), (0,z.vm)(b, (0,z.Lg)(e), !0) && e.setEnd((0,z.Kg)(b)), (0,z.vm)(e, (0,z.Kg)(b), !1) && (0,z.vm)(e, (0,z.Lg)(b), !0))) {
      c = z.Hl.Cb(z.Jg, z.Hl.$c(e));
      c.setStart((0,z.Lg)(b));
      e.setEnd((0,z.Kg)(b));
      (0,z.sm)(a, c);
      break;
    }
  }
  (0,z.Bm)(a);
};
var MH = function(a, b, c, d) {
  a = a.yb;
  for (var e = 0;e < a.length;e++) {
    var f = a[e];
    if (f.g() == b && (0,z.Kg)(f) < d && (0,z.Lg)(f) > c) {
      return!0;
    }
  }
  return!1;
};
z.NH = function(a) {
  return tH(a.type);
};
z.OH = function(a) {
  var b = a.metadata && a.metadata.$a();
  return 4 == a.type && !b;
};
var PH = function(a, b) {
  return 5 != a && 4 != a && 11 != a && (0,z.Fa)(b);
};
var QH = function(a, b) {
  a.Ai = b;
};
var RH = function(a, b) {
  var c = (0,z.cl)(a, b);
  return a.Vf(c);
};
var SH = function(a, b) {
  return new z.sg((0,z.cl)(a, b), (0,z.dl)(a, b));
};
z.TH = function(a) {
  a.it || (a.it = new z.kk((0,z.J)("currentUser")));
  return a.it;
};
var UH = function(a, b, c) {
  a = a.attributes[b];
  if (!0 === a) {
    return c;
  }
  if ((0,z.ma)(a)) {
    return "class" == b ? (c.match(/\S+/g) || []).filter((0,z.Ba)(z.ab, a)).join(" ") : (0,z.ab)(a, c) ? c : null;
  }
  if (a instanceof RegExp) {
    for (var d = "";b = a.exec(c);) {
      d += b[0];
    }
    return d || null;
  }
  return null;
};
var VH = function() {
  var a = z.WH, b = new z.Zg;
  (0,z.bh)(b);
  vH(b, {}, a);
  return b;
};
var XH = function(a, b, c, d) {
  return(0,z.Ye)(a, b, c, d);
};
z.YH = function(a) {
  a = a.te();
  return 1 == a.nodeType ? a : a.parentNode;
};
var ZH = function(a) {
  return-1 != a.indexOf("\x26") ? "document" in z.da ? BH(a) : AH(a) : a;
};
var $H = function(a) {
  return 1 == a.nodeType && !(0,z.Jd)(a);
};
var aI = function(a, b) {
  this.S = a;
  this.offset = b;
};
var bI = function(a) {
  var b = a.S.parentNode;
  return new aI(b, (0,z.bb)(b.childNodes, a.S));
};
var cI = function(a) {
  return a.length || a.childNodes.length;
};
var dI = function(a, b, c, d) {
  for (;1 == a.nodeType;) {
    var e = a.childNodes[b];
    if (e || a.lastChild) {
      if (e) {
        var f = e.previousSibling;
        if (c && f) {
          if (d && $H(f)) {
            break;
          }
          a = f;
          b = cI(a);
        } else {
          if (d && $H(e)) {
            break;
          }
          a = e;
          b = 0;
        }
      } else {
        if (d && $H(a.lastChild)) {
          break;
        }
        a = a.lastChild;
        b = cI(a);
      }
    } else {
      break;
    }
  }
  return new aI(a, b);
};
var eI = function(a, b) {
  for (var c = null, d;a != b && (d = a.parentNode);) {
    for (var e = a, f = d.cloneNode(!1);e.nextSibling;) {
      f.appendChild(e.nextSibling);
    }
    c && f.insertBefore(c, f.firstChild);
    c = f;
    a = d;
  }
  return c;
};
var fI = function(a) {
  for (;a.firstChild;) {
    (0,z.zH)(a.firstChild, a);
  }
  (0,z.Nd)(a);
};
var gI = function(a, b) {
  function c(a) {
    return 3 == a.nodeType ? b ? (0,z.Fa)(a.nodeValue) : 0 === a.nodeValue.length : (0,z.fi)(a) ? !0 : "HR" == a.tagName || "IMG" == a.tagName || "IFRAME" == a.tagName || "PHANTOM-IFRAME" == a.tagName ? !1 : (0,z.zB)(a.childNodes, c);
  }
  return c(a);
};
var hI = function(a) {
  var b;
  if (3 == a.S.nodeType) {
    for (b = a.S.previousSibling;b && 3 == b.nodeType;b = b.previousSibling) {
      a.offset += cI(b);
    }
  } else {
    b = a.S.previousSibling;
  }
  var c = a.S.parentNode;
  a.S = b ? b.nextSibling : c.firstChild;
  return a;
};
var iI = function(a, b) {
  return b ? dI(a.Ma(), a.Qb()) : dI(a.pb(), a.Ec());
};
var jI = function(a) {
  for (var b = null, c = a.firstChild;c;) {
    var d = c.nextSibling;
    3 == c.nodeType ? "" == c.nodeValue ? a.removeChild(c) : b ? (b.nodeValue += c.nodeValue, a.removeChild(c)) : b = c : (jI(c), b = null);
    c = d;
  }
};
var kI = function(a) {
  var b = a && a.nodeName.toLowerCase();
  return!(!a || "block" != (1 != a.nodeType ? null : z.w ? a.currentStyle ? a.currentStyle.display : null : (0,z.yf)(a, "display")) && "td" != b && "table" != b && "li" != b);
};
var lI = function(a, b, c) {
  this.XC = a;
  this.PM = !!c;
  a && !b && this.next();
};
var mI = function(a, b, c, d) {
  if (null != a) {
    for (a = a.firstChild;a;) {
      if (b(a) && (c.push(a), d) || mI(a, b, c, d)) {
        return!0;
      }
      a = a.nextSibling;
    }
  }
  return!1;
};
var nI = function(a, b) {
  var c = eI(b, a);
  (0,z.Ld)(c, a);
  for (var c = null, d = b;d != a && !c;d = d.parentNode) {
    c = d.previousSibling;
  }
  c = c ? eI(c, a) : a;
  d = c == a && (0,z.nw)(a) && !b.nextSibling && b.parentNode == a;
  fI(b);
  if (!d || "P" == a.tagName && "P" != b.tagName) {
    (0,z.Ld)(b, a), b.appendChild(c);
  }
};
var oI = function(a) {
  for (a = a.firstChild;a;a = a.nextSibling) {
    if ("FIGCAPTION" != a.tagName && (3 == a.nodeType && 0 !== a.nodeValue.length || 1 == a.nodeType && !oI(a))) {
      return!1;
    }
  }
  return!0;
};
var pI = function(a) {
  var b = a.xe(), c = hI(iI(a, !b)), d = bI(c), e = c.S.previousSibling;
  3 == c.S.nodeType && (c.S = null);
  var f = hI(iI(a, b)), h = bI(f), k = f.S.previousSibling;
  3 == f.S.nodeType && (f.S = null);
  return function() {
    !c.S && e && (c.S = e.nextSibling, c.S || (c = new aI(e, cI(e))));
    !f.S && k && (f.S = k.nextSibling, f.S || (f = new aI(k, cI(k))));
    return(0,z.Ye)(c.S || d.S.firstChild || d.S, c.offset, f.S || h.S.firstChild || h.S, f.offset);
  };
};
var qI = function(a) {
  return 1 == a.nodeType || 3 == a.nodeType && !!/[^\t\n\r ]/.test(a.nodeValue);
};
var rI = function(a) {
  try {
    return a.next();
  } catch (b) {
    return null;
  }
};
var sI = function(a, b, c) {
  (0,z.ga)(c) || (c = b && a.childNodes.length ? a.childNodes.length - 1 : 0);
  lI.call(this, a.childNodes[c], !0, b);
};
var tI = function(a) {
  var b = (0,z.ee)(a);
  a = new z.de;
  a.next = function() {
    for (;;) {
      var a = b.next();
      if (qI.call(void 0, a)) {
        return a;
      }
    }
  };
  return a;
};
var uI = function(a, b) {
  var c = b.parentNode;
  c && c.replaceChild(a, b);
};
var vI = function(a, b) {
  if (b) {
    var c = pI(b), d;
    d = (0,z.YH)(b);
    d = (0,z.Zd)(d, kI);
  }
  d ? (d = (0,z.Xd)(d, a), z.w ? jI(d) : d.normalize()) : a && (z.w ? jI(a) : a.normalize());
  return c ? c() : null;
};
var wI = function(a) {
  return(0,z.Qd)(a) && ("IMG" == a.tagName || 0 !== a.getElementsByTagName("IMG").length);
};
var xI = function(a) {
  this.cv = a;
  (0,z.Sc)(this.cv.getElementsByTagName("*"), z.nw);
};
var yI = function(a) {
  gI(a, !1) && 0 === a.getElementsByTagName("BR").length && a.appendChild(window.document.createElement("br"));
};
var zI = function(a) {
  z.v.call(this);
  this.KD = "goog_" + z.xB++;
  this.WB = "goog_" + z.xB++;
  this.Yg = a.xe();
  this.Rf = (0,z.td)(a.Jg());
  a.dh(this.Rf.zc("SPAN", {id:this.KD}), this.Rf.zc("SPAN", {id:this.WB}));
};
var AI = function(a, b) {
  return a.Rf.ba(b ? a.KD : a.WB);
};
var BI = function(a) {
  var b = !1, c = 1E4;
  do {
    for (var b = !1, d = a.firstChild;d;d = d.nextSibling) {
      var e;
      e = d;
      var f;
      f = [];
      if (f = mI(e, z.nw, f, !0) ? f[0] : void 0) {
        gI(f, !1) ? (0,z.Nd)(f) : nI(e, f), e = !0;
      } else {
        if (f = 1 == e.nodeType && e.querySelectorAll("img"), !f || !f.length || 1 === f.length && oI(e)) {
          e = !1;
        } else {
          f = f[0];
          var h = window.document.createElement("FIGURE");
          uI(h, f);
          h.appendChild(f);
          nI(e, h);
          e = !0;
        }
      }
      if (e) {
        b = !0;
        c--;
        break;
      }
    }
    if (0 > c) {
      throw Error("infinite loop");
    }
  } while (b);
  b = [];
  f = !1;
  c = (0,z.fb)(a.childNodes);
  for (d = 0;d < c.length;d++) {
    e = c[d], (0,z.nw)(e) ? (b.push(new xI(e)), f = !1) : f && !wI(e) || b.length && "SPAN" == e.tagName && !e.childNodes.length && e.id && (0,z.Da)(e.id, "goog_") ? (h = (0,z.Ya)(b), h.cv.appendChild(e), (0,z.Sc)(h.cv.getElementsByTagName("*"), z.nw)) : (f = window.document.createElement("p"), f.appendChild(e), b.push(new xI(f)), c[d + 1] ? a.insertBefore(f, c[d + 1]) : a.appendChild(f), f = !wI(e));
  }
};
var CI = function(a) {
  a = (0,z.fb)(a.childNodes);
  (0,z.rb)(a, function(a) {
    (0,z.nw)(a) && "FIGURE" != a.tagName || !gI(a, !0) || (0,z.Nd)(a);
  });
};
var DI = function(a) {
  for (a = a.lastChild;a;a = a.previousSibling) {
    var b = a.nextSibling, c = a.tagName;
    !b || c != b.tagName || "UL" != c && "OL" != c || ((0,z.Kd)(a, b.childNodes), (0,z.Nd)(b));
  }
};
z.EI = function(a) {
  return 2 === (0,z.Rg)(a) || 3 === (0,z.Rg)(a) || 4 === (0,z.Rg)(a);
};
var FI = function(a) {
  zI.call(this, a);
};
z.GI = function(a) {
  for (var b;b = a && 1 == a.nodeType ? rI(tI(new sI(a, !1))) : null;) {
    a = b;
  }
  return a;
};
var HI = function(a) {
  for (var b;b = a && 1 == a.nodeType ? rI(tI(new sI(a, !0))) : null;) {
    a = b;
  }
  return a;
};
var II = function() {
  var a = z.HA, b = z.IA ? function(c) {
    return a.call(b.src, b.Hj, c);
  } : function(c) {
    c = a.call(b.src, b.Hj, c);
    if (!c) {
      return c;
    }
  };
  return b;
};
var JI = function(a) {
  a = (0,z.Pm)(a) + "\x3c/div\x3e";
  return(0,z.Id)(a);
};
var KI = function(a, b) {
  for (var c, d = [], e = a.text;c = b.exec(e);) {
    var f = c.index;
    d.push([f, f + c[0].length]);
  }
  for (c = d.length - 1;0 <= c;c--) {
    (0,z.Am)(a, d[c][0], d[c][1]);
  }
  b.lastIndex = 0;
};
var LI = function(a, b) {
  var c = a.Ma(), d = a.pb();
  if (c && d) {
    var e = function(a) {
      return a == b;
    }, c = (0,z.Zd)(c, e), d = (0,z.Zd)(d, e);
    if (c && d) {
      return a.ja();
    }
    if (c) {
      return d = HI(b), XH(a.Ma(), a.Qb(), d, cI(d));
    }
    if (d) {
      return XH((0,z.GI)(b), 0, a.pb(), a.Ec());
    }
  }
  return null;
};
var MI = function(a, b) {
  var c = a.currentStyle ? a.currentStyle[b] : null, d;
  if (c) {
    if (/^\d+px?$/.test(c)) {
      d = (0,window.parseInt)(c, 10);
    } else {
      d = a.style.left;
      var e = a.runtimeStyle.left;
      a.runtimeStyle.left = a.currentStyle.left;
      a.style.left = c;
      c = a.style.pixelLeft;
      a.style.left = d;
      a.runtimeStyle.left = e;
      d = c;
    }
  } else {
    d = 0;
  }
  return d;
};
var NI = function(a, b, c, d) {
  z.he.call(this, a, b, c, null, d);
};
var OI = function(a, b, c) {
  return(0,z.Dd)(window.document, arguments);
};
var PI = function(a) {
  return(0,z.qa)(a) ? a : a[z.jH] || (a[z.jH] = function(b) {
    return a.handleEvent(b);
  });
};
z.QI = function(a, b) {
  var c, d = (c = (c = (0,z.wH)(window)) && LI(c, a)) && new FI(c), e = (0,z.fb)(a.childNodes), f = b.sections;
  if (!f) {
    for (c = 0;c < e.length;c++) {
      if ("SECTION" === e[c].tagName) {
        f = !0;
        break;
      }
    }
  }
  if (f) {
    var h = f = null;
    for (c = 0;c < e.length;c++) {
      h = e[c], "SECTION" === h.tagName ? f = null : (f || (f = OI("section"), (0,z.Ld)(f, h)), f.appendChild(h));
    }
    e = (0,z.fb)(a.childNodes);
    for (c = 0;c < e.length;c++) {
      for (var h = e[c], k = (0,z.fb)(h.childNodes), l = null, f = 0;f < k.length;f++) {
        var m = k[f];
        (0,z.pw)(m) || (0,z.qw)(m) || (0,z.fi)(m) ? l = null : (l || (l = JI("layout-single-column"), (0,z.Ld)(l, m)), l.appendChild(m));
      }
      h = (0,z.Aw)(h);
      for (f = 0;f < h.length;f++) {
        k = h[f], BI(k), CI(k), (0,z.ww)(k, yI), DI(k);
      }
    }
  } else {
    BI(a), CI(a), (0,z.ww)(a, yI), DI(a);
  }
  d && d.restore();
};
z.RI = function(a) {
  var b = (0,z.xn)(a.className);
  return!!SI[a.tagName] && !!a.getAttribute("name") && 5 != b && 6 != b && 7 != b;
};
var TI = function(a) {
  for (var b = {}, c = 0, c = 0;c < a.length;c++) {
    var d = a[c].getName();
    d in b ? a[c].Xa("") : b[d] = !0;
  }
  for (c = 0;c < a.length;c++) {
    (0,z.nm)(a[c], b);
  }
};
var UI = function(a, b) {
  a.S.firstChild && (a = dI(a.S, a.offset));
  for (var c = new NI(b), d, e = 0;d = (0,z.ge)(c);) {
    if (a.S == d) {
      return e + a.offset;
    }
    3 == d.nodeType ? e += d.nodeValue.length : "BR" == d.tagName && (e += 1);
  }
  return-1;
};
z.VI = function(a, b) {
  return a.querySelector('[name\x3d"' + b + '"]');
};
z.WI = function(a, b) {
  var c = (0,z.tf)((0,z.qi)(a)), d = (0,z.Ad)(window), d = new z.rf(Math.max(0, c.top), Math.min(d.width, c.right), Math.min(d.height, c.bottom), Math.max(0, c.left));
  if (!(b.top <= d.top && b.bottom >= d.bottom || b.top >= d.top && b.bottom <= d.bottom)) {
    var c = Math.round(b.top - d.top), d = Math.round(b.bottom - d.bottom), e = (0,z.ni)(a);
    (0,z.ii)(a, e.left, e.top + (1 === (0 == c ? 0 : 0 > c ? -1 : 1) ? Math.min(c, d) : Math.max(c, d)));
  }
};
var XI = function(a) {
  a = a.replace(/&nbsp;/g, " ");
  return a = a.replace(/ +/g, " ");
};
var YI = function(a) {
  a = a.replace(/<div>\s*(<br>)*\s*<\/div>/ig, "\x3cp\x3e");
  a = a.replace(/\s*(<br>)+\s*<\/p>/ig, "\x3c/p\x3e");
  return a = a.replace(/<(\/?)p>\s*<\1p>/ig, "\x3c$1p\x3e");
};
var ZI = function(a, b) {
  if (-1 == a.indexOf("@") && -1 == a.indexOf("://") && -1 == a.indexOf("www.")) {
    return(0,z.Ha)(a);
  }
  var c = b || {};
  "rel" in c || (c.rel = "nofollow");
  "target" in c || (c.target = "_blank");
  var d = [], e;
  for (e in c) {
    c.hasOwnProperty(e) && c[e] && d.push((0,z.Ha)(e), '\x3d"', (0,z.Ha)(c[e]), '" ');
  }
  var f = d.join("");
  return a.replace(z.BC, function(a, b, c, d, e) {
    a = [(0,z.Ha)(b)];
    if (!c) {
      return a[0];
    }
    a.push("\x3ca ", f, 'href\x3d"');
    d ? (a.push("mailto:"), c = d, d = "") : (e || a.push("http://"), (d = c.match($I)) ? (c = d[1], d = d[2]) : d = "");
    c = (0,z.Ha)(c);
    d = (0,z.Ha)(d);
    a.push(c, '"\x3e', c, "\x3c/a\x3e", d);
    return a.join("");
  });
};
var aJ = function(a, b) {
  if (z.w) {
    var c = MI(a, b + "Left"), d = MI(a, b + "Right"), e = MI(a, b + "Top"), f = MI(a, b + "Bottom");
    return new z.rf(e, d, f, c);
  }
  c = (0,z.yf)(a, b + "Left");
  d = (0,z.yf)(a, b + "Right");
  e = (0,z.yf)(a, b + "Top");
  f = (0,z.yf)(a, b + "Bottom");
  return new z.rf((0,window.parseFloat)(e), (0,window.parseFloat)(d), (0,window.parseFloat)(f), (0,window.parseFloat)(c));
};
var bJ = function(a) {
  if (1 == a.nodeType) {
    var b;
    if (a.getBoundingClientRect) {
      b = (0,z.Af)(a), b = new z.rd(b.left, b.top);
    } else {
      b = (0,z.be)((0,z.td)(a));
      var c = (0,z.Cf)(a);
      b = new z.rd(c.x - b.x, c.y - b.y);
    }
    if (z.Qe && !(0,z.id)(12)) {
      b: {
        c = (0,z.Va)("transform");
        if (void 0 === a.style[c] && (c = (0,z.pf)() + (0,z.Xa)("transform"), void 0 !== a.style[c])) {
          c = (0,z.qf)() + "-transform";
          break b;
        }
        c = "transform";
      }
      a = (a = (0,z.zf)(a, c) || (0,z.zf)(a, "transform")) ? (a = a.match(cJ)) ? new z.rd((0,window.parseFloat)(a[1]), (0,window.parseFloat)(a[2])) : new z.rd(0, 0) : new z.rd(0, 0);
      a = new z.rd(b.x + a.x, b.y + a.y);
    } else {
      a = b;
    }
    return a;
  }
  b = (0,z.qa)(a.pw);
  c = a;
  a.targetTouches ? c = a.targetTouches[0] : b && a.qf.targetTouches && (c = a.qf.targetTouches[0]);
  return new z.rd(c.clientX, c.clientY);
};
var dJ = function(a, b) {
  return(0,z.Ye)(a, b, a, b);
};
var eJ = function(a, b, c) {
  if (!(a.nodeName in fJ)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in gJ) {
        b.push(gJ[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          eJ(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
};
z.hJ = function(a) {
  for (var b;b = a.firstChild;) {
    a.removeChild(b);
  }
};
z.iJ = function() {
  return "The file you tried to upload is a type we don’t understand. Supported formats are JPEG, PNG, and GIF.";
};
z.jJ = function() {
  var a = (0,z.J)("variants.max_upload_size_mb");
  return "The image you are trying to upload is too big. Please resize it so that it is under " + (0,z.O)(a) + "MB.";
};
z.kJ = function(a, b, c, d, e) {
  if ((0,z.ma)(b)) {
    for (var f = 0;f < b.length;f++) {
      (0,z.kJ)(a, b[f], c, d, e);
    }
  } else {
    c = PI(c), (0,z.rA)(a) ? a.Ee(b, c, d, e) : a && (a = (0,z.CA)(a)) && (b = a.ml(b, c, !!d, e)) && (0,z.zA)(b);
  }
};
z.lJ = function(a, b, c, d, e) {
  if ((0,z.ma)(b)) {
    for (var f = 0;f < b.length;f++) {
      (0,z.lJ)(a, b[f], c, d, e);
    }
    return null;
  }
  c = PI(c);
  if ((0,z.rA)(a)) {
    a = a.qa(b, c, d, e);
  } else {
    if (!b) {
      throw Error("Invalid event type");
    }
    var f = !!d, h = (0,z.CA)(a);
    h || (a[z.DA] = h = new z.wA(a));
    c = h.add(b, c, !1, d, e);
    c.fs || (d = II(), c.fs = d, d.src = a, d.Hj = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent((0,z.AA)(b.toString()), d), z.BA++);
    a = c;
  }
  return a;
};
var mJ = function(a) {
  var b = z.vg;
  return(0,z.Hd)((0,z.Om)(a, b) + (0,z.Tm)(a, b));
};
var nJ = function(a, b) {
  a = a.cloneNode(!0);
  (0,z.QI)(a, {rf:!1, isPublished:!1, media:null, sections:b, hi:!1, Ih:!0});
  var c = (0,z.yw)(a).map(function(a) {
    return(0,z.Kw)(a);
  }), d = (0,z.zw)(a), d = b ? (0,z.Ew)(d) : [], c = c.map(function(a) {
    return a.Cb();
  }), c = (0,z.Cg)(new z.Bg, c);
  b && (0,z.Dg)(c, d);
  return c;
};
var oJ = function(a) {
  return OI("span", {className:"default-value"}, a);
};
var pJ = function(a, b) {
  var c = (0,z.VI)(a, "title");
  c && b.call(void 0, c);
  (c = (0,z.VI)(a, "subtitle")) && b.call(void 0, c);
  a.querySelector(".body") && (0,z.xw)(a.querySelector(".body"), z.RI, (0,z.Ub)(b, (0,z.Tb)(!0)), void 0);
};
z.qJ = function(a, b, c) {
  b = '\x3cdiv class\x3d"popover-inner"\x3e\x3cul\x3e';
  a = a.items;
  for (var d = a.length, e = 0;e < d;e++) {
    var f = a[e];
    b += '\x3cli class\x3d"typeahead-item" data-action-value\x3d"@' + (0,z.P)(f.username) + '" data-action\x3d"typeahead-populate"\x3e' + (0,z.Ro)({user:f, Pc:"avatar-micro", Dr:!0}, c) + '\x3cstrong class\x3d"typeahead-name"\x3e' + (0,z.O)(f.name) + '\x3c/strong\x3e \x3cem class\x3d"typeahead-username"\x3e@' + (0,z.O)(f.username) + "\x3c/em\x3e\x3c/li\x3e";
  }
  return b + '\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e';
};
var rJ = function(a) {
  var b = void 0 != a.previousElementSibling ? a.previousElementSibling : (0,z.Pd)(a.previousSibling, !1), c = void 0 != a.nextElementSibling ? a.nextElementSibling : (0,z.Pd)(a.nextSibling, !0);
  if (b && b.tagName === a.tagName) {
    for (;a.firstChild;) {
      b.appendChild(a.firstChild);
    }
    (0,z.Nd)(a);
    a = b;
  }
  if (c && c.tagName === a.tagName) {
    for (;c.firstChild;) {
      a.appendChild(c.firstChild);
    }
    (0,z.Nd)(c);
  }
};
var sJ = function(a, b) {
  var c = window.document.createElement(a.tagName);
  c.className = "post-list";
  for ((0,z.Ld)(c, a);a.lastChild != b;) {
    (0,z.Md)(c, a.lastChild, 0);
  }
  return c;
};
var tJ = function(a, b) {
  if (0 > a) {
    return null;
  }
  for (var c = new NI(b), d;d = (0,z.ge)(c);) {
    var e = 0;
    3 == d.nodeType ? e = d.nodeValue.length : "BR" == d.tagName && (e = 1);
    a -= e;
    if (0 > a) {
      return new aI(d, e + a);
    }
  }
  return 0 === a ? (c = dI(b, b.childNodes.length, !0)) && "IMG" == c.S.tagName && (d = c.S, d.parentNode && (0,z.gi)(d.parentNode) && (d = d.parentNode), d.previousSibling && !(0,z.gi)(d.previousSibling)) ? (c = d.previousSibling, dI(c, c.childNodes.length, !0)) : c : null;
};
z.uJ = function(a, b, c) {
  return UI(iI(a, c), b);
};
z.vJ = function(a) {
  var b = a instanceof z.re, c = b ? a.pb() : a, c = (0,z.mi)(3 == c.nodeType || "BR" == c.tagName ? c.parentNode : c);
  b ? (a = a.ja(), a.collapse(!1), (a = (a = a.uj()) && a.getClientRects && a.getClientRects()[0]) ? (a = (0,z.pi)(a), "mobile safari" == (0,z.J)("useragent.browser") && (b = (0,z.oi)(), a.top -= b.top, a.left -= b.left)) : a = null) : a = (0,z.qi)(a);
  a && (0,z.WI)(c, (0,z.tf)(a));
};
z.wJ = function(a) {
  a = a.uj().getBoundingClientRect();
  a = (0,z.pi)(a);
  if ("mobile safari" == (0,z.J)("useragent.browser")) {
    var b = (0,z.oi)();
    a.top -= b.top;
    a.left -= b.left;
  }
  return a;
};
var iL = function(a) {
  var b = a.nodeType;
  3 == b ? iL(a.parentNode) : 1 == b && a.focus();
};
var jL = function(a, b) {
  for (var c = null, d = a.firstChild;d;d = c) {
    c = d.nextSibling, jL(d, b);
  }
  b(a) && fI(a);
};
z.kL = function(a) {
  return function(b) {
    b.stopPropagation();
    b.preventDefault();
    return a ? a.call(this, b) : !1;
  };
};
var lL = function(a) {
  var b = mL;
  if (!b) {
    b = mL = VH();
    (0,z.ch)(b, "SPAN");
    for (var c in b.De) {
      var d = b.De[c];
      d.di || nL.push(new RegExp("\x3c" + c + "[^\x3e]*\x3e[\\s\\S]*?\x3c\\/" + c + "\x3e", "gi"));
      d.attributes.style = /(font-weight|font-style) *: *[\w]*;/g;
    }
  }
  a = a.replace(/\x3c!--[\s\S]*?--\x3e/g, "");
  nL.forEach(function(b) {
    a = a.replace(b, "");
  });
  a = a.replace(oL, function(a, c, d) {
    a = b.De[d.toUpperCase()] || b.dw;
    if (!a.ye) {
      return "";
    }
    (0,z.oa)(a.ye) && (d = a.ye);
    if (pL.test(c)) {
      c = "\x3c/" + d.toLowerCase() + "\x3e";
    } else {
      d = "\x3c" + d.toLowerCase();
      for (var k in a.attributes) {
        var l = c.match(new RegExp(k + "\\s*\x3d\\s*(['\"])(.+?)\\1"));
        if (l = l && l[2] && UH(a, k, l[2])) {
          "href" == k && (l = (0,z.Ha)((0,z.Wh)(ZH(l), !0))), d += " " + k + '\x3d"' + l + '"';
        }
      }
      c = d + "\x3e";
    }
    return c;
  });
  a = YI(a);
  return a = XI(a);
};
z.qL = function(a) {
  a = a.replace(/<\/h\d\b[^>]*>/gi, " ").replace(/<\/p\b[^>]*>/gi, "\n\n").replace(/<\/pre\b[^>]*>/gi, "\n\n").replace(/<\/div\b[^>]*>/gi, "\n\n").replace(/<\/li\b[^>]*>/gi, "\n").replace(/<\/ul\b[^>]*>/gi, "\n").replace(/<\/ol\b[^>]*>/gi, "\n").replace(/<br\b[^>]*>/gi, "\n").replace(/<\/blockquote\b[^>]*>/gi, "\n\n").replace(/<[^>]*>/gim, "");
  return ZH(a.replace(/&nbsp;/g, " ").replace(/&ldquo;/g, "“").replace(/&rdquo;/g, "”").replace(/&quot;/g, '"').replace(/&lsquo;/g, "‘").replace(/&rsquo;/g, "’").replace(/&apos;/g, "'")).trim();
};
var rL = function(a) {
  return a.replace(z.vC, '$1\x3ca href\x3d"/@$2" title\x3d"Medium profile for @$2"\x3e@$2\x3c/a\x3e');
};
z.sL = function(a, b) {
  a || (a = "");
  a = a.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  b && !1 === b.kM ? a = (0,z.Ha)(a) : (a = ZI(a), a = a.replace(/((?:^|[^a-zA-Z0-9_!#$%&*@＠/]|RT:?))([@＠])([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_-]{0,24})?/g, '$1\x3ca href\x3d"http://twitter.com/$3$4" target\x3d"_blank" title\x3d"Twitter profile for @$3$4"\x3e@$3$4\x3c/a\x3e'));
  b && !1 === b.pQ || (a = a.replace(/\n/g, "\x3cbr\x3e"));
  b && !1 === b.UK || (a = "\x3cp\x3e" + a.replace(/<br><br>/g, "\x3c/p\x3e\x3cp\x3e").replace(/\n\n/g, "\x3c/p\x3e\x3cp\x3e") + "\x3c/p\x3e");
  return a;
};
var tL = function(a) {
  a = a.match("(?:(https?|ftp)://|www\\.)\\w[\\w~#-@!\\[\\]]*");
  return null != a ? a[0] : "";
};
var uL = function(a, b) {
  var c = a.parentNode, d = (0,z.bb)(c.childNodes, a) + (b ? 0 : 1), c = dI(c, d, b, !0);
  dJ(c.S, c.offset).select();
};
z.vL = function(a, b) {
  var c = bJ(a), d = bJ(b);
  return new z.rd(c.x - d.x, c.y - d.y);
};
z.wL = function(a) {
  if (a = (0,z.se)(a || window)) {
    if (a.empty) {
      try {
        a.empty();
      } catch (b) {
      }
    } else {
      try {
        a.removeAllRanges();
      } catch (c) {
      }
    }
  }
};
z.xL = function(a) {
  var b = [];
  eJ(a, b, !1);
  return b.join("");
};
z.yL = function(a) {
  if (z.OB && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    eJ(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  z.OB || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
};
z.zL = function(a, b) {
  if ("textContent" in a) {
    a.textContent = b;
  } else {
    if (3 == a.nodeType) {
      a.data = b;
    } else {
      if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (;a.lastChild != a.firstChild;) {
          a.removeChild(a.lastChild);
        }
        a.firstChild.data = b;
      } else {
        (0,z.hJ)(a), a.appendChild((0,z.wd)(a).createTextNode(String(b)));
      }
    }
  }
};
var AL = function(a) {
  if (a.altKey && !a.ctrlKey || a.metaKey || 112 <= a.keyCode && 123 >= a.keyCode) {
    return!1;
  }
  switch(a.keyCode) {
    case 18:
    ;
    case 20:
    ;
    case 93:
    ;
    case 17:
    ;
    case 40:
    ;
    case 35:
    ;
    case 27:
    ;
    case 36:
    ;
    case 45:
    ;
    case 37:
    ;
    case 224:
    ;
    case 91:
    ;
    case 144:
    ;
    case 12:
    ;
    case 34:
    ;
    case 33:
    ;
    case 19:
    ;
    case 255:
    ;
    case 44:
    ;
    case 39:
    ;
    case 145:
    ;
    case 16:
    ;
    case 38:
    ;
    case 224:
    ;
    case 92:
      return!1;
    case 0:
      return!z.Qe;
    default:
      return 166 > a.keyCode || 183 < a.keyCode;
  }
};
var BL = function(a) {
  var b;
  b = b || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
  };
};
var CL = function(a, b) {
  this.U = a;
  this.Mf = b;
};
var DL = function(a) {
  for (var b = (0,z.Aw)(a.U), c = (0,z.yw)(a.U), d = null, e = 0;e < b.length;e++) {
    var f = b[e], h = (0,z.yw)(f);
    if (h.length) {
      var h = h[0], k = c.indexOf(h);
      if ((0,z.Gm)(a.Mf, k)) {
        d = f;
      } else {
        for (;f.firstChild;) {
          d.appendChild(f.firstChild);
        }
        (0,z.Nd)(f);
        "LI" == h.tagName && rJ(h.parentNode);
      }
    } else {
      (0,z.Nd)(f);
    }
  }
};
var EL = function(a, b) {
  return(0,z.zw)(a.U)[b];
};
var FL = function(a, b) {
  var c = a.fc(b);
  return c ? (0,z.hi)(c, z.pw, a.U) : null;
};
var GL = function(a, b) {
  if (-1 != b) {
    var c = a.fc(b), d = FL(a, b), e = (0,z.yw)(d);
    if (c != e[e.length - 1]) {
      c = "LI" == c.tagName ? c.parentNode : c;
      e = JI(a.Mf.Vf(b));
      (0,z.Ld)(e, d);
      if (-1 != b) {
        var f = a.fc(b);
        if ("LI" == f.tagName) {
          var h = f.parentNode, k = null;
          f.nextSibling && (k = sJ(h, f), (0,z.Ld)(k, h));
        }
      }
      for (;d.lastChild != c;) {
        (0,z.Md)(e, d.lastChild, 0);
      }
    }
  }
};
var HL = function(a, b) {
  GL(a, b - 1);
  var c = JI(a.Mf.Vf(b)), d = a.Mf, e;
  for (e = b;e && !(0,z.Gm)(d, e);) {
    e--;
  }
  (0,z.Xg)(d.mk(), e).ta() === e ? (d = (d = a.fc(b)) ? (0,z.vw)(d, a.U) : EL(a, 0), e = (0,z.Aw)(d), d.insertBefore(c, e[0])) : (0,z.Ld)(c, FL(a, b - 1));
  return c;
};
z.IL = function(a, b, c) {
  this.start = a;
  this.end = b;
  this.Fq = c;
  this.jz = !1;
};
var JL = function() {
  var a = (0,z.KL)(0, 0);
  a.jz = !0;
  return a;
};
z.KL = function(a, b) {
  return new z.IL(LL(a, b), LL(a, b), !1);
};
z.ML = function(a) {
  return a.Fq ? a.start : a.end;
};
var NL = function(a) {
  return a.start.nc === OL && a.end.nc === OL;
};
z.PL = function(a) {
  return a.isCollapsed() && a.start.nc === QL;
};
var RL = function(a, b, c) {
  this.nc = a;
  this.V = b;
  this.offset = c;
};
var LL = function(a, b) {
  return new RL(OL, a, b);
};
var SL = function(a) {
  return new RL(QL, a, 0);
};
z.TL = function(a, b, c) {
  this.$q = c.zs;
  this.hB = c.ys;
  this.U = a;
  this.Bd = (0,z.yw)(this.U);
  this.Mb = this.ib() ? (0,z.zw)(a) : null;
  this.Lb = UL(this);
  this.cf = [];
  this.cf.length = this.Bd.length;
  this.jh = null;
  this.yu = !1;
  this.pd = VL(this, b);
  a = this.Bd;
  this.Mb && (a = a.concat(this.Mb));
  b = {};
  for (c = 0;c < a.length;c++) {
    var d = a[c].getAttribute("name");
    d && (b[d] = !0);
  }
  this.je = b;
  this.mv = !1;
  this.zh = this.ib() ? new CL(this.U, new z.Fm((0,z.Pl)(this.Lb))) : null;
  this.nk = new z.bl((0,z.Pl)(this.Lb));
};
var UL = function(a) {
  var b = new z.Bg;
  (0,z.Cg)(b, a.Bd.map(function(a) {
    return(0,z.Kw)(a).Cb();
  }));
  a.ib() && (0,z.Dg)(b, (0,z.Ew)(a.Mb));
  b = new z.Ol((new z.Ug).Tl(b));
  QH(b, a.lG.bind(a));
  return b;
};
var WL = function(a, b) {
  (0,z.XL)(a);
  a.ej();
  var c = b ? a.Lb.dm() : a.Lb.hs();
  c && (0,z.YL)(a, c);
};
z.XL = function(a) {
  if (!a.yu) {
    var b = a.Bd.map(function(a) {
      return(0,z.Kw)(a).Cb();
    });
    if ((0,z.Pl)(a.Lb).qc().length != b.length) {
      throw new ZL("paragraph count mismatch");
    }
    for (var c = 0;c < b.length;c++) {
      $L(a, b[c], c, !0);
    }
    a.yu = !0;
  }
};
var $L = function(a, b, c, d) {
  var e = (0,z.Pl)(a.Lb).qc()[c];
  if (d && b.getName() != e.getName()) {
    throw new ZL("unexpected name change");
  }
  if (!b.Ob(e)) {
    try {
      a.mv = d, (0,z.Ql)(a.Lb, (0,z.yl)(3).nb(c).gg(b));
    } finally {
      a.mv = !1;
    }
    return!0;
  }
  return!1;
};
var aM = function(a, b) {
  (0,z.QI)(a, {rf:!1, isPublished:!1, media:null, sections:b.zs, hi:!1, Ih:!0});
  var c = b.ys && !(0,z.Td)(window.document.body, a), d = a.style.visibility;
  c && (a.style.visibility = "hidden", window.document.body.appendChild(a));
  var e = new z.TL(a, null, b);
  bM(e);
  c && (window.document.body.removeChild(a), a.style.visibility = d);
  return e;
};
var bM = function(a) {
  cM(a);
  for (var b = [], c = 0, d = (0,z.dM)(a), c = 0;c < d;c++) {
    b.push((0,z.eM)(a, c).Cb());
  }
  c = b;
  a.ib() && (c = c.concat((0,z.fM)(a)));
  TI(c);
  for (c = 0;c < d;c++) {
    (0,z.eM)(a, c).name = b[c].getName(), (0,z.gM)(a, c);
  }
  if (a.ib()) {
    b = (0,z.fM)(a);
    for (c = 0;c < a.Mb.length;c++) {
      (0,z.hM)(a, b[c].ta());
    }
    DL(a.zh);
  }
  b = a.Lb;
  a = a.getSelection();
  b.iu = b.mc.length;
  b.ej(a);
};
var cM = function(a) {
  var b = (0,z.dM)(a), c = a.fc(0), b = a.fc(b - 1);
  c && !tH((0,z.Bw)(c)) || (0,z.iM)(a, 0, new z.lm("", 1, ""));
  b && tH((0,z.Bw)(b)) && (0,z.iM)(a, (0,z.dM)(a), new z.lm("", 1, ""));
};
z.jM = function(a) {
  var b = (0,z.Pl)(a.Lb).qc(), c = (0,z.yw)(a.U), d = (0,z.dM)(a);
  if (d != c.length || d != b.length) {
    throw new ZL("paragraph count");
  }
  var e;
  for (e = 0;e < d;e++) {
    var f = c[e], h = a.fc(e);
    if (f != h) {
      throw new ZL("paragraph element");
    }
    f = (0,z.Kw)(f).Cb();
    if (!b[e].Ob(f)) {
      throw new ZL("paragraph model");
    }
  }
  if (a.ib()) {
    e = a.Mb.length;
    b = (0,z.zw)(a.U);
    c = (0,z.Ew)(b);
    d = (0,z.Pl)(a.Lb).gc();
    if (e != c.length || e != d.length) {
      throw new ZL("section count");
    }
    for (e = 0;e < c.length;e++) {
      if (b[e] != a.Mb[e]) {
        throw new ZL("section element");
      }
      if (!d[e].Ob(c[e])) {
        throw new ZL("section model");
      }
    }
  }
};
z.YL = function(a, b) {
  a.pd = b;
  (0,z.kM)(a);
};
var lM = function(a, b, c, d, e, f) {
  (0,z.YL)(a, new z.IL(LL(b, c), LL(d, e), f));
};
z.mM = function(a, b) {
  a.pd = new z.IL(new RL(nM, b, 0), new RL(nM, b, 0), !1);
  (0,z.kM)(a);
};
z.oM = function(a, b) {
  var c = (0,z.pM)(a, b).ta();
  a.pd = new z.IL(SL(c), SL(c), !1);
  (0,z.kM)(a);
};
z.qM = function(a, b) {
  var c = a.pd.start, d = a.pd.end;
  if (!a.pd.isCollapsed()) {
    var e = (0,z.eM)(a, c.V), f = (0,z.eM)(a, d.V);
    rM(a, function(a, b, c) {
      b < c && (0,z.Am)(a, b, c);
    }, a, !1);
    if (e != f) {
      b && e.append(f);
      var h = d.V - c.V - 1;
      b && h++;
      for (var k = 0;k < h;k++) {
        (0,z.sM)(a, c.V + 1);
      }
    }
    (0,z.gM)(a, c.V);
    e == f || b || (0,z.gM)(a, c.V + 1);
    d.V = c.V;
    d.offset = c.offset;
  }
};
var rM = function(a, b, c, d) {
  var e = a.pd.ja(), f = e.end, h = e.start;
  0 === f.offset && f.V > h.V && (f.V--, f.offset = (0,z.eM)(a, f.V).text.length);
  for (var f = e.start.V, h = e.end.V, k = f;k <= h;k++) {
    var l = (0,z.eM)(a, k);
    b.call(c, l, k == f ? e.start.offset : 0, k == h ? e.end.offset : l.text.length);
    d && (0,z.gM)(a, k);
  }
};
z.tM = function(a, b) {
  return(0,z.bb)(a.Bd, b);
};
z.eM = function(a, b) {
  var c = a.cf[b];
  if (!c) {
    var d = a.fc(b);
    d && (c = a.cf[b] = (0,z.Kw)(d, a.hB), $L(a, c.Cb(), b, !0));
  }
  return c;
};
z.dM = function(a) {
  return a.Bd.length;
};
z.uM = function(a, b) {
  var c = (0,z.uw)(b, a.U);
  return c ? (0,z.tM)(a, c) : -1;
};
var VL = function(a, b) {
  if (!b) {
    return JL();
  }
  var c = vM(a, iI(b, !0)), d = vM(a, iI(b, !1));
  return c && d ? new z.IL(c, d, b.xe()) : JL();
};
var vM = function(a, b) {
  var c = (0,z.uM)(a, b.S);
  if (-1 == c) {
    return c = null, a.ib() && ((0,z.qw)(b.S) ? c = b.S : (0,z.rw)(b.S) && (c = b.S.parentNode), c) ? (c = (0,z.pM)(a, (0,z.bb)(a.Mb, c.parentNode)), SL(c.ta())) : null;
  }
  var d = b.S.tagName;
  return "IMG" === d || "IFRAME" === d ? new RL(nM, c, 0) : LL(c, UI(b, a.Bd[c]));
};
z.wM = function(a, b) {
  var c = xM(a, b.Dc()), d = xM(a, (0,z.ML)(b));
  return c && d ? (0,z.Ye)(c.S, c.offset, d.S, d.offset) : null;
};
var xM = function(a, b) {
  var c = a.fc(b.V);
  if (!c) {
    return null;
  }
  if (b.g() === QL) {
    var d = (0,z.yM)(a, b.V);
    if (d && 2 == (0,z.Rg)(d) && (d = (0,z.zM)(a, d), d = a.Mb[d] && (0,z.Za)(a.Mb[d].childNodes, z.qw))) {
      return new aI(d, 0);
    }
  }
  return b.g() === nM && (d = c.querySelector("phantom-iframe, iframe, img")) ? new aI(d, 0) : tJ(b.offset, c);
};
z.gM = function(a, b, c) {
  c = c || (0,z.eM)(a, b);
  (0,z.mm)(c, a.je);
  $L(a, c.Cb(), b, !1) || a.$y((0,z.yl)(3).nb(b).gg(c.Cb()));
};
z.kM = function(a) {
  var b = (0,z.wM)(a, a.pd);
  b && (NL(a.pd) && iL(b.pb()), b.select(), (0,z.vJ)(b));
};
z.sM = function(a, b) {
  (0,z.XL)(a);
  var c = null;
  6 == RH(a.nk, b) && (c = SH(a.nk, b));
  (0,z.Ql)(a.Lb, (0,z.yl)(2).nb(b));
  null != c && (0,z.jm)(a.Lb, c);
};
z.iM = function(a, b, c, d) {
  (0,z.XL)(a);
  var e = null;
  6 == RH(a.nk, b) && (e = SH(a.nk, b), e.end++);
  (0,z.mm)(c, a.je);
  (0,z.Ql)(a.Lb, (0,z.yl)(1).nb(b).gg(c.Cb()));
  d && a.ib() && 0 < b && (c = (0,z.yM)(a, b + 1), c.ta() === b + 1 && ((0,z.AM)(a, b + 1), (0,z.BM)(a, b, c)));
  null != e && (0,z.jm)(a.Lb, e);
};
var CM = function(a, b) {
  if (6 == RH(a.nk, b)) {
    var c = {};
    (0,z.fl)(a.nk, b, c);
    for (var d in c) {
      var e = a.fc(Number(d)), f = c[d];
      "FIGURE" == e.tagName && ((0,z.Uc)(e, "is-partialWidth", null != f), e.style.width = null == f ? "" : f + "%");
    }
  }
};
var DM = function(a, b, c, d) {
  var e = !1;
  if (1 === b.type && a.ib()) {
    d = (0,z.yM)(a, d), (0,z.EI)(d) && (0,z.EM)(a, d) === d.ta() + 1 && (d = "Continue writing", c.setAttribute("data-default-value", d), b.text || ((0,z.Md)(c, oJ(d), 0), e = !0));
  } else {
    if ((0,z.NH)(b)) {
      c.contentEditable = !1;
      var f = c.querySelector("figcaption");
      if (!f) {
        return;
      }
      d = 4 == b.type ? (0,z.Hm)() : 11 == b.type ? (0,z.Im)() : "";
      if (!d) {
        return;
      }
      f.contentEditable = !0;
      f.setAttribute("data-default-value", d);
      b.text || ((0,z.Md)(f, oJ(d), 0), e = !0);
    }
  }
  d = a.U.getAttribute("data-default-value");
  1 != (0,z.dM)(a) || !d || b.text || 1 != b.type || e || (0,z.Md)(c, oJ(d), 0);
};
z.EM = function(a, b) {
  var c = (0,z.fM)(a), d = c.indexOf(b);
  return b.ta() + (0,z.Yg)(c, d, (0,z.dM)(a));
};
z.BM = function(a, b, c) {
  (0,z.nm)(c, a.je);
  var d = (0,z.yM)(a, b);
  if (d && d.ta() === b) {
    throw Error("Tried to overwrite a section");
  }
  c.Sd(b);
  b = (0,z.fM)(a);
  d = d ? (0,z.bb)(b, d) : -1;
  (0,z.Ql)(a.Lb, (0,z.yl)(8).nb(d + 1).hg(c));
};
z.AM = function(a, b) {
  var c = (0,z.fM)(a), d = (0,z.yM)(a, b);
  if (1 === c.length) {
    throw Error("Cannot remove last section");
  }
  if (d.ta() !== b) {
    throw Error("Section not found at " + b);
  }
  c = (0,z.bb)(c, d);
  (0,z.Ql)(a.Lb, (0,z.yl)(9).nb(c));
};
z.hM = function(a, b, c) {
  var d = (0,z.fM)(a), e = (0,z.yM)(a, b), d = d.indexOf(e);
  if (e.ta() !== b) {
    throw Error("Section not found at " + b);
  }
  c && (c.Sd(e.ta()), e = c);
  (0,z.nm)(e, a.je);
  b = (0,z.Pl)(a.Lb).gc()[d];
  !c && b && b.Ob(e) ? a.az((0,z.yl)(10).nb(d).hg(e)) : (0,z.Ql)(a.Lb, (0,z.yl)(10).nb(d).hg(e));
};
z.yM = function(a, b) {
  return(0,z.Xg)((0,z.fM)(a), b);
};
z.pM = function(a, b) {
  return(0,z.fM)(a)[b];
};
z.zM = function(a, b) {
  var c = (0,z.fM)(a);
  return(0,z.bb)(c, b);
};
z.fM = function(a) {
  a.jh || (a.jh = (0,z.Ew)(a.Mb));
  return a.jh;
};
var ZL = function(a) {
  z.Ca.call(this, "Inconsistent model: " + a);
};
z.FM = function() {
};
z.GM = function(a, b) {
  var c = window.iosDispatchEvent;
  c && (0,z.J)("variants.can_use_mobile_editors") ? c("mutate", function() {
    HM(this, b);
    c("mutated");
  }.bind(a)) : HM(a, b);
};
var HM = function(a, b) {
  b.Mn();
  var c = (0,z.IM)(b), d = a.lH.bind(a, b, c);
  JM(b, !0);
  try {
    d.call(void 0);
  } finally {
    b.Ye() && b.bl();
  }
  c.ej();
  (0,z.LM)(b);
  b.dispatchEvent("measure");
};
z.MM = function(a, b) {
  this.og = a;
  this.nc = b;
};
var NM = function(a) {
  var b = a.getSelection();
  if (NL(b) && b.isCollapsed()) {
    var b = b.start.V, c = (0,z.eM)(a, b);
    c && c.ai() && (0,z.mM)(a, b);
  }
};
var OM = function(a, b, c) {
  var d = a.og ? 1 : -1, e = a.og ? b.length : -1;
  c = a.og ? c : c - 1;
  if (1 == a.nc) {
    return d;
  }
  var f = -1;
  if (3 == a.nc) {
    f = a.og ? b.indexOf("\n", c) : b.lastIndexOf("\n", c);
  } else {
    a = !1;
    for (var h = c;0 <= h && h < b.length && -1 == f;h += d) {
      var k = b.charAt(h);
      " " == k || "\n" == k ? a && (f = h) : a = !0;
    }
  }
  return-1 == f ? e - c : f == c ? d : f - c;
};
var PM = function(a, b, c) {
  var d = a.og ? 1 : -1, e = c + d, f = (0,z.eM)(b, c), h = (0,z.eM)(b, e);
  if (h) {
    var k = b.ib(), l = k ? (0,z.yM)(b, c) : null, k = k ? (0,z.yM)(b, e) : null, m = l == k;
    if (!m) {
      var s = (0,z.EI)(l);
      if (!s && !(0,z.EI)(k)) {
        (0,z.AM)(b, (a.og ? k : l).ta());
        return;
      }
      if (s && (0,z.EM)(b, l) == c + 1) {
        a.og || (0,z.oM)(b, (0,z.zM)(b, l));
        return;
      }
    }
    m && (5 == h.type || PH(h.type, h.text)) ? (0,z.sM)(b, e) : PH(f.type, f.text) ? (b.$g(e, a.og ? 0 : h.text.length), (0,z.sM)(b, c)) : m && !(0,z.NH)(f) && (a = b.getSelection(), 0 < d ? (a.start.offset = a.end.offset = f.text.length, f.append(h), (0,z.sM)(b, e), (0,z.gM)(b, c)) : (a.start.offset = a.end.offset = h.text.length, h.append(f), (0,z.sM)(b, c), (0,z.gM)(b, e)));
  }
};
var QM = function(a) {
  this.TG = a;
};
var RM = function(a, b) {
  if (a in b) {
    return "";
  }
  b[a] = !0;
  return a;
};
z.SM = function() {
  z.v.call(this);
  this.qj = new z.wA(this);
  this.HK = this;
};
var TM = function(a, b, c, d) {
  b = a.qj.rb[String(b)];
  if (!b) {
    return!0;
  }
  b = (0,z.fb)(b);
  for (var e = !0, f = 0;f < b.length;++f) {
    var h = b[f];
    if (h && !h.Ql && h.Xk == c) {
      var k = h.Hj, l = h.ul || h.src;
      h.rr && a.hE(h);
      e = !1 !== k.call(l, d) && e;
    }
  }
  return e && !1 != d.AD;
};
var UM = function() {
  z.SM.call(this);
  this.hw = this.hr();
};
z.VM = function() {
  UM.call(this);
  this.sc == z.AB && delete this.nC;
  this.Rr == z.AB && delete this.oC;
  this.Un == z.AB && delete this.rC;
};
var WM = function() {
};
z.XM = function(a, b) {
  var c = new z.FM;
  c.gd = function(c) {
    var e = (0,z.tM)(c, a);
    -1 != e && (b((0,z.eM)(c, e)), (0,z.gM)(c, e), (0,z.kM)(c));
  };
  return c;
};
var YM = function(a) {
  var b = new WM;
  (0,z.qa)(a) ? b.CC = a : b.CC = function(b, d) {
    for (var e = 0, f = 0;f < a.length;f++) {
      e += a[f](b, d), d += e;
    }
    return e;
  };
  return b;
};
var ZM = function(a, b) {
  if (".." == a.text.substring(Math.max(0, b - 2), b)) {
    return(0,z.KH)(a, "…", b), (0,z.Am)(a, b - 2, b), -1;
  }
  (0,z.KH)(a, ".", b);
  return 1;
};
var $M = function(a, b) {
  return aN("-", a, b);
};
var bN = function(a, b) {
  return aN("–", a, b);
};
var aN = function(a, b, c) {
  var d = b.text.charAt(c - 1), e = b.text, e = e.substring(e.lastIndexOf(" ", c) + 1, c);
  (d = d != a) || (d = tL(e) === e);
  if (d) {
    return(0,z.KH)(b, a, c), 1;
  }
  d = b.text.charAt(c - 2);
  if ("\x3c" == d) {
    return(0,z.KH)(b, "←", c), (0,z.Am)(b, c - 2, c), -1;
  }
  (0,z.KH)(b, "—", c);
  (0,z.Am)(b, c - 1, c);
  return 0;
};
var cN = function(a, b) {
  if ("—" == a.text.charAt(b - 1)) {
    return(0,z.KH)(a, "→", b), (0,z.Am)(a, b - 1, b), 0;
  }
  (0,z.KH)(a, "\x3e", b);
  return 1;
};
var dN = function(a, b) {
  if (":" == a.text.charAt(b - 1)) {
    return(0,z.KH)(a, "☺", b), (0,z.Am)(a, b - 1, b), 0;
  }
  (0,z.KH)(a, ")", b);
  return 1;
};
var eN = function(a, b) {
  if (":" == a.text.charAt(b - 1)) {
    return(0,z.KH)(a, "☹", b), (0,z.Am)(a, b - 1, b), 0;
  }
  (0,z.KH)(a, "(", b);
  return 1;
};
var fN = function(a, b) {
  if ("\x3c" == a.text.charAt(b - 1)) {
    return(0,z.KH)(a, "❤", b), (0,z.Am)(a, b - 1, b), 0;
  }
  (0,z.KH)(a, "3", b);
  return 1;
};
z.gN = function(a, b) {
  var c = a.text, d = c.lastIndexOf(" ", b - 1);
  (c = c.substring(d + 1, b)) && tL(c) == c && !MH(a, 3, d + 1, b) && (iN.test(c) || (c = "http://" + c), (0,z.sm)(a, (0,z.wm)(d + 1, b, c, "", "")));
  return 0;
};
var jN = function(a, b) {
  for (var c = a.text, d = b;" " == c[d];) {
    d--;
  }
  var d = c.lastIndexOf(" ", d) + 1, e = c.indexOf(" ", d);
  -1 == e && (e = c.length);
  return{start:d, end:e, text:c.substring(d, e)};
};
var kN = function(a, b) {
  var c = jN(a, b);
  (0,z.um)(a, function(b) {
    (0,z.Kg)(b) <= c.start && (0,z.Lg)(b) >= c.end && "token" == (0,z.A)(b, "rel") && (0,z.LH)(a, (0,z.ym)(3, c.start, c.end));
  });
  c.text && lN.test(c.text) && (0,z.sm)(a, (0,z.wm)(c.start, c.end, "/" + c.text, "", "token"));
  return 0;
};
var mN = function(a) {
  return function(b, c) {
    var d = jN(b, c);
    return d.text && lN.test(d.text) ? ((0,z.Am)(b, d.start, d.end), (0,z.KH)(b, a, d.start), d.start + a.length - c) : 0;
  };
};
var nN = function(a, b) {
  var c = a.text, d = c.charAt(b - 1);
  if (" " == d || " " == d) {
    if ((0,z.J)("useragent.isMobile") && !/[\.!?]/.test(c.charAt(b - 2))) {
      return(0,z.KH)(a, ". ", b), (0,z.Am)(a, b - 1, b), 1;
    }
    if (8 != a.type) {
      return 0;
    }
  }
  if ("-" == d || "–" == d) {
    if (c = c.charAt(b - 2), " " == c || " " == c) {
      (0,z.KH)(a, "—", b), (0,z.Am)(a, b - 1, b);
    }
  }
  (0,z.KH)(a, " ", b);
  return 1;
};
var oN = function(a, b) {
  return pN(!1, a, b);
};
var qN = function(a, b) {
  return pN(!0, a, b);
};
var pN = function(a, b, c) {
  var d = b.text.charAt(c - 1);
  (0,z.KH)(b, rN[d] ? a ? "“" : "‘" : (0,window.isNaN)(d) ? a ? "”" : "’" : a ? '"' : "'", c);
  return 1;
};
var sN = function() {
};
var tN = function(a) {
  this.jo = a;
  this.WC = -1;
};
z.uN = function(a, b, c, d) {
  a = tJ(b, a);
  c = tJ(d, c);
  return a && c && (0,z.Ye)(a.S, a.offset, c.S, c.offset);
};
z.vN = function(a) {
  z.VM.call(this);
  this.Js = a;
  this.zv = !1;
  this.Jc = window.document.createElement("div");
  this.Jc.setAttribute("contenteditable", "true");
  this.Jc.style.position = "absolute";
  this.Jc.style.top = "0px";
  this.Jc.style.left = "-9999px";
  this.Jc.style.width = "100px";
  this.Jc.style.height = "100px";
  this.Jc.tabIndex = -1;
  this.Jc.style.overflow = "hidden";
  window.document.body.appendChild(this.Jc);
  this.ya = [];
};
var wN = function(a, b) {
  a.Js && (b = lL(b));
  (0,z.GM)(new QM(b), a.O);
  (0,z.GM)(new sN, a.O);
  var c = (0,z.wH)();
  c && (c.collapse(!1), c.select());
};
var xN = function(a, b) {
  var c = b.clipboardData;
  if (!c || !c.types || !(0,z.na)(c.types)) {
    return null;
  }
  if (a.Js && !a.zv) {
    if (-1 !== (0,z.bb)(c.types, "text/html")) {
      return c.getData("text/html");
    }
    if (!(0,z.zB)(c.types, function(a) {
      return-1 !== a.indexOf("plain");
    })) {
      return null;
    }
  }
  return-1 !== (0,z.bb)(c.types, "text/plain") ? (c = b.clipboardData.getData("text/plain"), a.O.Cl() && (c = c.replace(/\n/g, " ")), (0,z.sL)(c)) : null;
};
var yN = function(a, b) {
  this.aJ = a;
  this.mF = b;
};
var zN = function(a) {
  var b = (0,z.wH)();
  return!b.isCollapsed() && !!(0,z.uw)(b.te(), a.ba());
};
z.AN = function(a) {
  z.VM.call(this);
  this.fF = a;
};
var BN = function(a, b) {
  var c = 34 == b, d = 39 == b, e = 45 == b, f = 8211 == b, h = 46 == b, k = 62 == b, l = 40 == b, m = 41 == b, s = 51 == b, x = a.O, L = (0,z.IM)(x), G = L.getSelection().start.V;
  if (8 == (0,z.eM)(L, G).type) {
    if (zN(x)) {
      if (d) {
        return(0,z.GM)(new yN("'", "'"), x), !0;
      }
      if (c) {
        return(0,z.GM)(new yN('"', '"'), x), !0;
      }
      if (l) {
        return(0,z.GM)(new yN("(", ")"), x), !0;
      }
    }
    return!1;
  }
  return c ? (zN(x) ? (0,z.GM)(new yN("“", "”"), x) : (0,z.GM)(YM(qN), x), !0) : d ? (zN(x) ? (0,z.GM)(new yN("‘", "’"), x) : (0,z.GM)(YM(oN), x), !0) : e ? ((0,z.GM)(YM($M), x), !0) : f ? ((0,z.GM)(YM(bN), x), !0) : k ? ((0,z.GM)(YM(cN), x), !0) : h ? ((0,z.GM)(YM(ZM), x), !0) : l && zN(x) ? ((0,z.GM)(new yN("(", ")"), x), !0) : l ? ((0,z.GM)(YM(eN), x), !0) : m ? ((0,z.GM)(YM(dN), x), !0) : s ? ((0,z.GM)(YM(fN), x), !0) : !1;
};
z.CN = function(a, b) {
  if (!(0,z.qa)(a)) {
    if (a && "function" == typeof a.handleEvent) {
      a = (0,z.ya)(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : z.da.setTimeout(a, b || 0);
};
var DN = function(a, b, c) {
  z.v.call(this);
  this.io = a;
  this.Iw = b || 0;
  this.xf = c;
  this.Ov = (0,z.ya)(this.cl, this);
};
var EN = function(a) {
  a.Pd() && a.Zc();
};
var FN = function(a, b, c) {
  this.ZB = a;
  this.Ex = b;
  this.aC = this.Jv = !1;
  this.mw = c || {};
};
var GN = function(a) {
  this.JB = a;
};
z.HN = function(a) {
  z.v.call(this);
  this.xf = a;
  this.xb = {};
};
var IN = function(a, b, c, d, e, f) {
  (0,z.ma)(c) || (c && (JN[0] = c.toString()), c = JN);
  for (var h = 0;h < c.length;h++) {
    var k = (0,z.lJ)(b, c[h], d || a.handleEvent, e || !1, f || a.xf || a);
    if (!k) {
      break;
    }
    a.xb[k.key] = k;
  }
  return a;
};
var KN = function(a, b) {
  z.SM.call(this);
  this.id = a;
  this.Id = null;
  this.ji = {};
  this.Ej = {};
  for (var c in LN) {
    this.Ej[c] = [];
  }
  this.Xv = "";
  this.bh = {};
  this.bh[MN] = 1;
  this.bh[z.NN] = 1;
  this.Lw = this.Bl = !1;
  this.Ln = new DN(this.SB, ON, this);
  this.cw = {};
  for (var d in PN) {
    this.cw[PN[d]] = 0;
  }
  z.Qe && (this.Yd = new DN(this.zw, QN, this));
  this.pf = new z.HN(this);
  this.pN = [];
  this.Ij = RN;
  this.Nl = (0,z.td)(b || window.document);
  this.kc = this.Nl.ba(this.id);
  this.Iv = this.Nl.Md();
};
var SN = function(a) {
  var b = !(a.ctrlKey || a.metaKey) && a.keyCode in TN;
  return(a.ctrlKey || a.metaKey) && a.keyCode in UN || b;
};
var VN = function(a, b) {
  a.Ij = 2;
  a.oa = b;
  a.Id = (0,z.td)(b);
  a.Bl = !1;
  a.Lw = !1;
  b.setAttribute("g_editable", "true");
  b.setAttribute("role", "textbox");
};
var WN = function(a) {
  a.Ij = RN;
  for (var b in a.ji) {
    var c = a.ji[b];
    c.hr() || c.disable(a);
  }
  a.oa = null;
  a.Id = null;
};
var XN = function(a) {
  a.pf && a.pf.Nj();
  if ((z.ZB || z.$B) && a.Fe() && a.HD()) {
    try {
      var b = a.Id.Md();
      b.removeEventListener("keydown", a.Cn, !1);
      b.removeEventListener("touchend", a.Cn, !1);
    } catch (c) {
    }
    delete a.Cn;
  }
  if (z.Re && a.Fe()) {
    try {
      b = a.Id.Md(), b.removeEventListener("focus", a.Mv, !1), b.removeEventListener("blur", a.Lv, !1);
    } catch (d) {
    }
    delete a.Mv;
    delete a.Lv;
  }
  a.Yd && a.Yd.stop();
  a.Ln.stop();
};
var YN = function(a, b) {
  if (9 == b.keyCode && !a.dispatchEvent({type:"beforetab", shiftKey:b.shiftKey, altKey:b.altKey, ctrlKey:b.ctrlKey}) || z.Qe && b.metaKey && (37 == b.keyCode || 39 == b.keyCode)) {
    return b.preventDefault(), !1;
  }
  var c;
  (c = b.charCode) || (c = SN(b) ? !0 : !(!z.Qe || b.ctrlKey || b.metaKey || z.Qe && !b.charCode));
  a.xw = c;
  a.xw && a.Mn();
  return!0;
};
var ZN = function(a, b, c) {
  var d = {};
  a = a.ox(8, b || "", d);
  (0,z.uf)(c, d);
  z.w && (0,z.hJ)(c);
  c.innerHTML = a;
};
var $N = function(a, b) {
  if (!b.altKey) {
    var c = z.Li ? b.metaKey : b.ctrlKey;
    if (c || aO[b.keyCode]) {
      var d = b.charCode || b.keyCode;
      17 != d && a.Zn(5, b, String.fromCharCode(d).toLowerCase(), c) && b.preventDefault();
    }
  }
};
var bO = function(a, b, c) {
  for (var d = a.Ej[7], e = 0;e < d.length;++e) {
    var f = d[e];
    if (f.isEnabled(a) && f.Ng(b) && (c || f.hr())) {
      return f.queryCommandValue(b);
    }
  }
  return c ? null : !1;
};
z.cO = function(a) {
  return(a = a.Id && a.Id.Md()) && (0,z.wH)(a);
};
z.LM = function(a, b, c) {
  if (!dO(a, "selectionchange")) {
    var d = (0,z.cO)(a), d = d && (0,z.YH)(d);
    a.Ow = !!d && (0,z.Td)(a.ba(), d);
    a.dispatchEvent("cvc");
    a.dispatchEvent({type:"selectionchange", $S:b && b.type});
    a.Zn(4, b, c);
  }
};
var JM = function(a, b) {
  b && (a.Yd && EN(a.Yd), a.bh[MN] = 1);
  a.Yd && EN(a.Yd);
  EN(a.Ln);
  a.bh[z.NN] = 1;
};
var eO = function(a, b, c) {
  !b && a.Yd && EN(a.Yd);
  a.bh[MN] = 0;
  a.bh[z.NN] = 0;
  b && a.zw();
  c && a.SB();
};
var dO = function(a, b) {
  return!!a.bh[b] || a.cw[b] && 500 >= (0,z.aj)() - a.cw[b];
};
var fO = function(a) {
  (0,z.Yd)(a.target, "A") && a.preventDefault();
};
z.gO = function(a) {
  if (a.queryCommandValue("usinglorem")) {
    return " ";
  }
  if (!a.Ye()) {
    return a.kc.innerHTML;
  }
  var b = a.ba(), c = b.cloneNode(!1), b = b.innerHTML;
  z.w && b.match(/^\s*<script/i) && (b = " " + b);
  c.innerHTML = b;
  a.VL(11, c);
  return a.ox(10, c.innerHTML);
};
var hO = function(a) {
  z.w && (0,z.wL)(a.Id.Md());
  iO != a.id && a.execCommand("updatelorem");
  if ((z.ZB || z.$B) && a.Fe() && a.HD()) {
    var b = a.Id.Md();
    a.Cn = (0,z.ya)(b.focus, b);
    b.addEventListener("keydown", a.Cn, !1);
    b.addEventListener("touchend", a.Cn, !1);
  }
  z.Re && a.Fe() ? (a.Mv = (0,z.ya)(a.gw, a), a.Lv = (0,z.ya)(a.RB, a), b = a.Id.Md(), b.addEventListener("focus", a.Mv, !1), b.addEventListener("blur", a.Lv, !1)) : (z.kC ? (a.addListener("focus", a.TB), a.addListener(z.nC, a.QB)) : a.addListener("focus", a.gw), a.addListener("blur", a.RB, z.Qe));
  z.Qe ? z.fC || !a.Fe() ? a.pf.qa(a.ba(), "DOMSubtreeModified", a.Cw) : (b = a.Id.Jg(), a.pf.qa(b, jO, a.Cw, !0), a.pf.qa(b, "DOMAttrModified", (0,z.ya)(a.yL, a, a.Cw), !0)) : (a.addListener(["beforecut", "beforepaste", "drop", "dragend"], a.Mn), a.addListener(["cut", "paste"], BL(a.bl)), a.addListener("drop", a.mC));
  a.addListener(z.ce ? "dragend" : "dragdrop", a.mC);
  a.addListener("keydown", a.Qr);
  a.addListener("keypress", a.pC);
  a.addListener("keyup", a.qC);
  a.vx = new DN(a.CL, 250, a);
  z.jC && a.addListener("click", fO);
  a.addListener("mousedown", a.BL);
  a.Lx ? (a.pf.qa(a.Id.Jg(), "mouseup", a.sC), a.addListener("dragstart", a.zL)) : a.addListener("mouseup", a.sC);
  a.EC();
  eO(a);
  a.dispatchEvent("load");
  for (var c in a.ji) {
    a.ji[c].enable(a);
  }
};
var kO = function(a) {
  if (!(0,z.ga)(a.Mw) && (a.Mw = !1, z.w && a.Fe())) {
    for (var b = a.Nl.Md();b != b.parent;) {
      try {
        b = b.parent;
      } catch (c) {
        break;
      }
    }
    b = b.location;
    a.Mw = "https:" == b.protocol && -1 == b.search.indexOf("nocheckhttps");
  }
  return a.Mw;
};
var lO = function(a) {
  a.nw && ((0,z.zA)(a.nw), a.nw = null);
};
var mO = function(a) {
  a = "padding:0;" + a.kc.style.cssText;
  (0,z.Ea)(a, ";") || (a += ";");
  a += "background-color:white;";
  z.w && (a += "overflow:visible;");
  return{frameBorder:0, style:a};
};
z.nO = function(a) {
  z.VM.call(this);
  this.Ke = a;
};
var oO = function(a) {
  var b = a.O.ba(), c = a.Ke - (0,z.mH)(b).length;
  b.setAttribute("data-chars-remaining", String(c));
  (0,z.Uc)(b, "display-char-count", c <= 0.25 * a.Ke);
};
z.pO = function(a) {
  this.id = a.id;
  this.anchor = a.anchor;
  this.startIndex = Number(a.startIndex);
  this.endIndex = Number(a.endIndex);
  this.content = a.content;
};
var qO = function(a, b) {
  this.Xm = a;
  this.rg = b;
};
z.rO = function(a, b) {
  return b ? a.rg && (0,z.VI)(a.rg, b) || (0,z.VI)(a.Xm, b) : null;
};
var sO = function(a, b, c) {
  function d(a) {
    var d = a.getAttribute("name");
    d && b.call(c, a, d);
  }
  a.rg && pJ(a.rg, d);
  pJ(a.Xm, d);
};
z.tO = function(a, b) {
  return a.rg && (0,z.Td)(a.rg, b) ? a.rg : (0,z.Td)(a.Xm, b) ? a.Xm : null;
};
z.uO = function(a) {
  var b = [];
  a.rg && b.push(a.rg);
  b.push(a.Xm);
  return b;
};
z.vO = function(a, b) {
  var c;
  c = (0,z.tO)(a, b);
  return(c = (0,z.hi)(b, z.RI, c)) && c.getAttribute("name") || null;
};
z.wO = function(a, b) {
  return(0,z.vL)(a, b).y + aJ(a, "padding").top;
};
z.xO = function(a, b, c) {
  if (c = (0,z.vw)(c, (0,z.tO)(a, c))) {
    var d = null;
    a = {};
    var e = (0,z.Pc)(b), f;
    for (f = 0;f < e.length;f++) {
      d = e[f], (0,z.Da)(d, "section-") && (a[d] = !1);
    }
    e = (0,z.Pc)(c);
    for (f = 0;f < e.length;f++) {
      d = e[f], (0,z.Da)(d, "section-") && (a[d + "-notes"] = !0);
    }
    (c = c.getAttribute("data-background-color")) && !(0,z.Ea)(c, "Light") && (a["section-image-full-notes"] = !0);
    for (var h in a) {
      (0,z.Uc)(b, h, a[h]);
    }
  }
};
z.yO = function(a, b) {
  z.VM.call(this);
  this.Ke = a;
  this.dy = b;
};
var zO = function(a) {
  a = (0,z.IM)(a.O);
  for (var b = 0, c = 0;c < (0,z.dM)(a);c++) {
    b += (0,z.eM)(a, c).text.length;
  }
  return b;
};
z.AO = function() {
  z.VM.call(this);
};
z.BO = function(a) {
  z.VM.call(this);
  this.vF = a;
};
var CO = function(a, b) {
  return(0,z.hi)(b, function(a) {
    return a.getAttribute && a.getAttribute("data-default-value");
  }, a.O.ba(), !0);
};
var DO = function(a, b) {
  var c = EO(a, b);
  c && uL(c, !0);
  return!!c;
};
var EO = function(a, b) {
  var c = b.getElementsByClassName("default-value")[0];
  return c && CO(a, c) == b ? c : null;
};
var FO = function() {
  z.VM.call(this);
};
var GO = function(a, b) {
  KN.call(this, a, b);
};
var HO = function(a) {
  KN.call(this, a, void 0);
  this.ep = this.mA = this.$q = !1;
  this.Rm = null;
};
z.IM = function(a) {
  if (a.Rm) {
    var b = a.Rm, c = (0,z.cO)(a);
    b.cf = [];
    b.cf.length = b.Bd.length;
    b.jh = null;
    b.pd = VL(b, c);
    b.yu = !1;
  } else {
    for (var b = a.ba(), c = (0,z.yw)(b), d = 0;d < c.length;d++) {
      (0,z.Sc)(c[d].getElementsByTagName("*"), z.sw);
    }
    a.Rm = new z.TL(b, (0,z.cO)(a), {zs:a.ib(), ys:!1});
  }
  a = a.Rm;
  a.fc(0) || ((0,z.iM)(a, 0, new z.lm("", 1, "")), a.$g(0, 0));
  return a;
};
var IO = function(a) {
  this.Hv = a;
  this.YB = [];
};
z.JO = function(a) {
  if (!a.Yv) {
    var b = a.Dc(), b = (0,z.GI)(b);
    a.Yv = b.tagName && "IMG" == b.tagName ? b.getAttribute("alt") : (0,z.xL)(a.Dc());
  }
  return a.Yv;
};
z.KO = function(a) {
  a = a.Dc();
  if (z.mC) {
    var b;
    b = a.nextSibling;
    b && 3 == b.nodeType && ((0,z.Da)(b.data, " ") || (0,z.Da)(b.data, " ")) || (b = (0,z.td)(a).createTextNode(" "), (0,z.Ld)(b, a));
    dJ(b, 1).select();
  } else {
    uL(a, !1);
  }
};
var LO = function(a) {
  a = new IO(a);
  a.Dc().href = "/";
  return a;
};
var MO = function(a) {
  if (/\s/.test(a) || NO.test(a)) {
    return!1;
  }
  var b = !1;
  /^[^:\/?#.]+:/.test(a) || (a = "http://" + a, b = !0);
  a = (0,z.If)(a);
  if (-1 != (0,z.bb)(["mailto", "aim"], a[1])) {
    return!0;
  }
  var c = a[3];
  if (!c || b && -1 == c.indexOf(".") || /[^\w\d\-\u0100-\uffff.%]/.test(c)) {
    return!1;
  }
  b = a[5];
  return!b || 0 == b.indexOf("/");
};
var OO = function(a) {
  this.RG = a;
};
var PO = function(a, b) {
  this.nc = a;
  this.Vq = b;
};
var QO = function(a, b) {
  this.nc = a;
  this.Vq = b;
};
z.RO = function() {
  z.VM.call(this);
  this.qh = {};
  this.vz = null;
  this.Ru = !1;
};
var SO = function(a) {
  for (var b in a.qh) {
    delete a.qh[b];
  }
};
var TO = function(a) {
  if (!a.Ru) {
    return!0;
  }
  var b = a.vz, c = (0,z.cO)(a.O);
  if (!c || !c.isCollapsed()) {
    return!0;
  }
  c = UO(a, c);
  if (!b || !c) {
    return!0;
  }
  var d;
  d = b.S;
  var e = c.S;
  if ((d = d == e || d.getAttribute("name") && d.getAttribute("name") == e.getAttribute("name")) && c.offset === b.offset) {
    return!1;
  }
  if (!(d && c.offset > b.offset)) {
    return!0;
  }
  b = (0,z.uN)(c.S, b.offset, c.S, c.offset);
  if (!b) {
    return!0;
  }
  b.select();
  for (var f in a.qh) {
    a.qh[f] && a.execCommand(f);
  }
  a = (0,z.wH)();
  if (!a) {
    return!0;
  }
  a.collapse(!1);
  a.select();
  return!0;
};
var UO = function(a, b) {
  var c = a.O.ba(), d = iI(b, !1);
  return(c = (0,z.uw)(d.S, c)) ? new aI(c, UI(d, c)) : null;
};
var VO = function(a) {
  var b = a.O;
  if (a.queryCommandValue("M_3")) {
    (0,z.GM)(new QO(3, !1), b);
  } else {
    var c = String((0,z.sa)({}));
    a = new z.FM;
    var d = !1;
    a.ko = function(a, b, h) {
      h === b || d || ((0,z.sm)(a, (0,z.wm)(b, h, "/", c, "")), d = !0);
    };
    (0,z.GM)(a, b);
    a = b.ba().querySelector('a[title\x3d"' + c + '"]');
    a.removeAttribute("title");
    a = LO(a);
    b.execCommand("link", a);
  }
};
var WO = function() {
  z.VM.call(this);
};
var XO = function(a) {
  z.SM.call(this);
  this.VB = a;
  this.Rw = new z.HN(this);
  this.xf = new z.HN(this);
  YO && this.xf.qa(a, "compositionstart", this.xL).qa(a, "compositionend", this.wL).qa(a, "compositionupdate", this.tC);
  this.xf.qa(a, "textInput", this.DL).qa(a, "text", this.tC).qa(a, "keydown", this.Qr);
};
var ZO = function(a, b) {
  z.pA.call(this, a);
  this.reason = b;
};
var $O = function(a, b) {
  a.Vh || (z.ce && !YO && a.Rw.qa(a.VB, "keyup", a.AL), a.Vh = !0, a.dispatchEvent(new ZO("startIme", b)));
};
var aP = function(a, b) {
  a.Vh = !1;
  a.Rw.Nj();
  a.dispatchEvent(new ZO("endIme", b));
};
var bP = function(a) {
  switch(a.keyCode) {
    case 16:
    ;
    case 17:
      return!1;
    default:
      return!0;
  }
};
var cP = function() {
  z.VM.call(this);
  this.Dp = null;
};
var dP = function() {
  z.VM.call(this);
  this.jv = {};
  this.wp = {};
};
var eP = function() {
  z.VM.call(this);
  this.ya = [];
};
var fP = function(a) {
  return 3 == a.nodeType ? !1 : (0,z.Qc)(a, "drop-cap");
};
var gP = function(a) {
  var b = a.target;
  return z.ce && "LI" == b.tagName && a.clientX < (0,z.qi)(b).left;
};
var hP = function(a, b, c, d) {
  var e = (0,z.cO)(a.O);
  if (d && !e.Rh() && "LI" === e.Ma().tagName) {
    return!0;
  }
  var f = iI(e, d), e = f.S, h = b.getSelection();
  d = d ? h.start : h.end;
  return null == vM(b, f) ? (f = iP(a, e, c), f || (c = !c, f = iP(a, e, c)), f && (a = (0,z.tM)(b, f), -1 != a && (d.V = a, d.offset = c ? 0 : (0,z.eM)(b, a).text.length)), !0) : (b = (0,z.uw)(e, a.O.ba())) && 1 === d.offset && (0,z.Dw)(b) && (0,z.hi)(e, fP, b) ? (d.offset = c ? 2 : 0, !0) : !1;
};
var iP = function(a, b, c) {
  var d = a.O.ba(), e = null;
  (0,z.yH)(new z.he(b, !c, !0), function(a) {
    if (a === d) {
      throw z.fe;
    }
    if ((0,z.sw)(a)) {
      throw e = a, z.fe;
    }
  }, a);
  return e;
};
var jP = function() {
  z.VM.call(this);
};
var kP = function() {
  z.VM.call(this);
};
z.lP = function(a) {
  z.Kj.call(this);
  var b = a.id;
  b || (b = a.id = "editor_" + (0,z.sa)(a));
  this.fz = b;
  this.dn = [];
  this.LA = new dP;
  this.sa(new WO);
  this.sa(new FO);
  this.sa(new cP);
  this.sa(new eP);
  this.bz = new z.HN(this);
  a = (0,z.Ba)(z.bd, this.bz);
  this.oo || (this.oo = []);
  this.oo.push((0,z.ya)(a, void 0));
  this.ep = this.Qi = !1;
};
var mP = function(a) {
  return{rf:!0, isPublished:!0, media:null, sections:a.ib(), hi:!1, Ih:!1};
};
z.nP = function() {
  z.VM.call(this);
};
var oP = function(a, b) {
  for (var c = null, d = a.firstChild;d;d = c) {
    if (c = d.nextSibling, 3 != d.nodeType) {
      if (1 != d.nodeType) {
        (0,z.Nd)(d);
      } else {
        var e = b.De[d.tagName] || b.dw;
        if (!e) {
          throw Error("Missing default tag policy");
        }
        if (e.di) {
          if (e.ye) {
            for (var f = (0,z.oa)(e.ye) ? e.ye : "", f = f && f != d.tagName ? window.document.createElement(f) : null, h = d.attributes.length - 1;0 <= h;h--) {
              var k = d.attributes[h].nodeName, l = d.getAttribute(k);
              (l = UH(e, k, l)) ? (f || d).setAttribute(k, l) : f || d.removeAttribute(k);
            }
            f && ((0,z.Kd)(f, d.childNodes), (0,z.Ld)(f, d), (0,z.Nd)(d), d = f);
            oP(d, e.td);
          } else {
            for (;d.lastChild;) {
              (0,z.Ld)(d.lastChild, d);
            }
            c = d.nextSibling;
            (0,z.Nd)(d);
          }
        } else {
          (0,z.Nd)(d);
        }
      }
    }
  }
};
z.pP = function(a) {
  z.VM.call(this);
  this.Fu = a;
};
z.qP = function(a, b) {
  z.VM.call(this);
  this.UA = this.jf = this.eu = this.zt = !1;
  this.ya = [];
  this.Bz = [];
  this.L = "";
  this.Xr = kN;
  this.Kx = mN;
  this.view = z.qJ;
  this.ea = b;
  this.Lj = null;
  this.ux = a;
  this.Pa = new z.Ij;
  this.F = this.Pa.F.bind(this.Pa);
  this.Ba = this.Pa.Ba.bind(this.Pa);
  this.$u = this.ac = null;
};
var rP = function(a) {
  var b = a.ac.querySelector(".active");
  b && (a.$u && a.$u.cancel(), b = b.getAttribute("data-action-value"), (0,z.GM)(YM([a.Kx(b), a.Xr]), a.O), a.Pa.X("select"));
  sP(a);
};
var tP = function(a, b) {
  if (a.jf) {
    switch(b.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        b.preventDefault();
        break;
      case 38:
        b.preventDefault();
        var c = a.ac.querySelector(".active");
        c && (0,z.u)(c, "active");
        (c = c && c.previousSibling) || (c = a.ac.querySelector(".typeahead-item:last-child"));
        (0,z.t)(c, "active");
        break;
      case 40:
        b.preventDefault(), uP(a);
    }
    b.stopPropagation();
  }
};
var uP = function(a) {
  var b = a.ac.querySelector(".active");
  b && (0,z.u)(b, "active");
  (b = b && b.nextSibling) || (b = a.ac.querySelector(".typeahead-item"));
  (0,z.t)(b, "active");
};
var sP = function(a) {
  a.jf && (0,z.Nd)(a.ac);
  a.jf = !1;
};
var vP = function(a, b, c, d, e) {
  z.lP.call(this, b);
  this.ca = a;
  this.sa(new z.BO(c));
  this.sa(new z.vN(!1));
  this.sa(new z.pP(z.DC));
  1E3 <= window.innerWidth && (this.un = new z.qP((0,z.Ln)((0,z.Bs)(a.get("app"))), a.get("request")), this.sa(this.un));
  this.sa(new z.nP);
  this.sa(new z.AN(!1));
  this.sa(new z.yO(d, !0));
  this.Qi = !0;
  this.Ke = d;
  this.Dd = a.get("request");
  this.W = a.get("dialog");
  this.pH = e;
  this.H();
};
var wP = function(a) {
  a.Gb(a.Ei);
  a.X("cancel");
};
var xP = function(a, b, c, d) {
  vP.call(this, a, b, "Leave a note", 400, d || null);
  this.Z = c;
};
var yP = function(a, b, c) {
  a.Ls = b;
  a.ey = c;
};
z.zP = function(a, b, c, d) {
  a.Lt = b;
  a.Kt = c;
  a.dz = d;
};
var AP = function(a) {
  return'\x3cdiv class\x3d"notes-marker no-user-select" data-action\x3d"select-anchor" data-action-value\x3d"' + (0,z.P)(a.lr) + '"\x3e' + BP(a) + "\x3c/div\x3e";
};
var BP = function(a) {
  return'\x3cspan class\x3d"notes-marker-icon icons icons-notes"\x3e\x3c/span\x3e' + ("remove" == a.count ? '\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e' : 0 == a.count ? '\x3cspan class\x3d"notes-marker-nocount"\x3e+\x3c/span\x3e' : '\x3cspan class\x3d"notes-marker-count"\x3e' + (0,z.O)(a.count) + "\x3c/span\x3e");
};
var CP = function(a, b, c) {
  return'\x3cdiv class\x3d"notes-list-fade"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-list-fade-bottom"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-container-scroller"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-dismiss" data-action\x3d"dismiss-note"\x3e' + BP({count:"remove"}) + '\x3c/button\x3e\x3cdiv class\x3d"notes-list"\x3e\x3cdiv class\x3d"notes-items"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-new-note" tabIndex\x3d"-1"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-add"' + (c.isAuthenticated ? 
  'data-action\x3d"start-note"' : (0,z.Jo)({prompt:"Sign in to leave a note"})) + 'title\x3d"Leave a note"\x3e\x3cspan class\x3d"notes-add-icon icons icons-add-circled"\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-text"\x3eLeave a note for \x3cspan class\x3d"notes-post-creator"\x3e\x3c/span\x3e\x3c/span\x3e\x3cspan class\x3d"notes-add-creator-text"\x3eLeave a note\x3c/span\x3e\x3c/button\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-edit notes-edit-mode"\x3e' + (0,z.Ro)({Dr:!0, Pc:"notes-avatar notes-author-icon", 
  user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (0,z.O)(c.currentUser.name) + '\x3c/div\x3e\x3cdiv class\x3d"notes-note-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-disclaimer"\x3eThis note is only visible to you and the author, unless the author chooses to make it public.\x3c/div\x3e\x3c/div\x3e' : 
  "") + '\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-spacer"\x3e\x26nbsp;\x3c/div\x3e\x3c/div\x3e';
};
var DP = function(a, b, c) {
  var d = a.note.author ? a.note.author.userId : null;
  b = '\x3cdiv class\x3d"notes-note-inner"\x3e\x3cdiv class\x3d"notes-note-main"\x3e' + ('\x3cspan class\x3d"notes-state-border"\x3e\x3c/span\x3e\x3cdiv class\x3d"notes-controls"\x3e' + (a.canAdminister ? '\x3cul class\x3d"notes-state notes-state-dropdown" data-action\x3d"toggle-note-dropdown"\x3e' + ("NEW" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"approve-note" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e' : "PUBLIC" == a.note.state ? '\x3cli\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons notes-state-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli data-action\x3d"unapprove-note" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : "") + (a.hx.userId != d ? '\x3cli data-action\x3d"hide-note" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : "PUBLIC" != a.note.state ? '\x3cul class\x3d"notes-state"\x3e\x3cli data-tooltip\x3d"This note is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : "") + ("PUBLIC" == a.note.state ? '\x3cbutton data-action\x3d"show-note-permalink" data-action-value\x3d"' + 
  (0,z.P)(a.note.anchor) + "-" + (0,z.P)(a.note.noteId) + '" class\x3d"notes-link icons icons-link" data-tooltip\x3d"Click to update the address bar with this note’s shareable URL"\x3e' : "") + "\x3c/div\x3e" + (0,z.Ro)({hc:"notes-avatar", Pc:"notes-author-icon", user:a.note.author}, c) + '\x3cdiv class\x3d"notes-author"\x3e' + (d ? '\x3ca href\x3d"/@' + (0,z.P)(a.note.author.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.note.author.name) + '"\x3e' + (0,z.O)(a.note.author.name) + "\x3c/a\x3e" : 
  "\x3ci\x3eA Deleted User\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.Jh)(String(a.note.rj).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e' + (d == c.currentUser.userId ? '\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-note" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-note" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-note" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-note" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  var e = a.note.replies.length, f = Math.max(a.note.replies.length - a.ei, 0);
  if (e) {
    b += '\x3cdiv class\x3d"notes-replies ' + (0 < f ? "notes-replies-hidden" : "") + '"\x3e\x3cdiv class\x3d"notes-replies-inner"\x3e';
    if (0 < f) {
      b += '\x3cbutton data-action\x3d"show-hidden-note-replies" class\x3d"btn btn-chromeless notes-replies-hidden-btn"\x3eView ' + (0,z.O)(f) + " " + (a.ei ? "more" : "") + " " + (1 < f ? "replies" : "reply") + '\x3c/button\x3e\x3cdiv class\x3d"notes-replies-hidden-container"\x3e';
      for (var h = a.note.replies, k = h.length, l = 0;l < k;l++) {
        var m = h[l];
        b += l < f ? EP((0,z.M)(a, {Qd:m}), c) : "";
      }
      b += "\x3c/div\x3e";
    }
    h = a.note.replies;
    k = h.length;
    for (l = 0;l < k;l++) {
      m = h[l], b += l >= f ? EP((0,z.M)(a, {Qd:m}), c) : "";
    }
    b += "\x3c/div\x3e\x3c/div\x3e";
  }
  return b += '\x3cdiv class\x3d"notes-replies-footer"\x3e' + (c.isAuthenticated ? '\x3cdiv class\x3d"notes-reply notes-reply-edit notes-edit-mode"\x3e' + (0,z.Ro)({hc:"notes-avatar", Pc:"notes-author-icon", user:c.currentUser}, c) + '\x3cdiv class\x3d"notes-author"\x3e\x3ca href\x3d"/@' + (0,z.P)(c.currentUser.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(c.currentUser.name) + '"\x3e' + (0,z.O)(c.currentUser.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-reply-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"\x3eCancel\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e' : "") + '\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-link-reply"' + (c.isAuthenticated ? 'data-action\x3d"start-reply" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + '"' : (0,z.Jo)({prompt:"Sign in reply"})) + 'title\x3d"Leave a reply"\x3e' + 
  (e || !a.note.author ? "Reply to conversation" : d == c.currentUser.userId ? "Leave a reply" : "Reply to " + (0,z.O)(a.note.author.name)) + "\x3c/button\x3e\x3c/div\x3e\x3c/div\x3e";
};
var EP = function(a, b) {
  return'\x3cdiv class\x3d"notes-reply"\x3e' + (a.canAdminister && a.Qd.author.userId != b.currentUser.userId ? '\x3cdiv class\x3d"notes-hide-reply" data-action\x3d"hide-reply" data-action-value\x3d"' + (0,z.P)(a.note.noteId) + "," + (0,z.P)(a.Qd.replyId) + '" data-tooltip\x3d"Dismiss this reply"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3e\x3c/div\x3e' : "") + (0,z.Ro)({hc:"notes-avatar", Pc:"notes-author-icon", user:a.Qd.author}, b) + '\x3cdiv class\x3d"notes-author"\x3e' + (a.Qd.author ? 
  '\x3ca href\x3d"/@' + (0,z.P)(a.Qd.author.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.Qd.author.name) + '"\x3e' + (0,z.O)(a.Qd.author.name) + "\x3c/a\x3e" : "\x3ci\x3eA Deleted User\x3c/i\x3e") + '\x3c/div\x3e\x3cdiv class\x3d"notes-content"\x3e' + (0,z.Jh)(String(a.Qd.rj).replace(/(\r\n|\r|\n)/g, "\x3cbr\x3e")) + "\x3c/div\x3e" + (b.isAuthenticated ? a.Qd.author && a.Qd.author.userId == b.currentUser.userId ? '\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless notes-text-action" data-action\x3d"edit-reply" data-action-value\x3d"' + 
  (0,z.P)(a.note.noteId) + "," + (0,z.P)(a.Qd.replyId) + '"\x3eEdit\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator notes-edit-action" data-action\x3d"save-reply" data-action-value\x3d"' + (0,z.P)(a.Qd.replyId) + '"\x3eSave\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"cancel-reply" data-action-value\x3d"' + (0,z.P)(a.Qd.replyId) + '"\x3eCancel\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless notes-edit-action" data-action\x3d"delete-reply" data-action-value\x3d"' + 
  (0,z.P)(a.Qd.replyId) + '"\x3eDelete\x3c/button\x3e\x3c/div\x3e' : "" : "") + "\x3c/div\x3e";
};
z.FP = function() {
  return'\x3cdiv class\x3d"notes-vote-editor notes-editor"\x3e\x3c/div\x3e\x3cdiv class\x3d"notes-foot no-user-select"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-primary notes-no-separator" data-action\x3d"save-notes-vote"\x3eShare\x3c/button\x3e\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"cancel-notes-vote"\x3eNo thanks\x3c/button\x3e\x3c/div\x3e';
};
var GP = function(a, b, c) {
  z.Kj.call(this);
  this.ZJ = a;
  this.ia = b;
  this.je = c;
  a = window.document.createElement("div");
  a.className = "notes-markers";
  (0,z.Ld)(a, this.ZJ);
  this.Li = a;
  this.md = {};
  this.bf = this.qk = null;
};
z.HP = function(a, b, c) {
  var d = a.je.get(b);
  if (d) {
    (0,z.Uc)(d, "notes-source-active", c);
    var e = a.md[b];
    e && ((0,z.Uc)(e, "notes-active", c), c = (0,z.yf)(d, "float"), e.style.left = "left" == c ? "0" : -1 * aJ(d, "margin").right + "px", a = (0,z.rO)(a.je, b)) && (a = (0,z.xn)(a.className), (0,z.Uc)(e, "notes-source-floated", 2 == a || 4 == a));
  }
};
var IP = function(a) {
  var b = {};
  sO(a.je, function(a, d) {
    d in b || (b[d] = (0,z.wO)(a, this.Li));
  }, a);
  return b;
};
var JP = function(a) {
  var b = IP(a), c = {};
  sO(a.je, function(a, d) {
    if (!c[d]) {
      var h;
      if (this.md[d]) {
        h = this.md[d];
      } else {
        h = (h = (0,z.KP)(this.ia, d)) ? h.count() : 0;
        var k = (0,z.Hd)((0,z.K)(AP, {count:h, lr:d}));
        this.Li.appendChild(k);
        0 < h && ((0,z.t)(a, "notes-source-hasnotes"), (0,z.t)(k, "notes-hasnotes"));
        h = this.md[d] = k;
      }
      h.style.top = b[d] + "px";
      (0,z.HP)(this, d, d == this.ia.wa);
      c[d] = !0;
      (0,z.xO)(this.je, h, a);
    }
  }, a);
  for (var d in a.md) {
    c[d] || ((0,z.Nd)(a.md[d]), delete a.md[d]);
  }
};
z.LP = function(a, b) {
  if (a.ia.Ye()) {
    var c = b || a.ia.wa, d = a.md[c];
    d && (c = (0,z.KP)(a.ia, c).Kb(), d.innerHTML = (0,z.K)(BP, {count:c}), (0,z.Uc)(d, "notes-hasnotes", 0 < c));
  }
};
var MP = function(a, b, c) {
  z.Ij.call(this);
  this.Nz = {};
  this.xp = {};
  this.pA = {};
  this.yg = null;
  this.ca = a;
  this.Dd = a.get("request");
  this.Z = b;
  this.Jm = c;
  this.ym = !1;
  this.me = null;
  this.wa = "";
  this.YC = null;
};
z.KP = function(a, b) {
  var c = a.Nz[b];
  c || (c = a.Nz[b] = new z.ok, a.X("new_note_list", c, a));
  return c;
};
var NP = function(a) {
  var b = (0,z.J)("currentUser.userId");
  return a.iC().find(function(a) {
    a = a.get("author");
    return a == b || (0,z.ra)(a) && a.userId == b ? !0 : !1;
  });
};
var OP = function(a, b) {
  if (!b) {
    return!1;
  }
  var c = b.text;
  if (a.content == c.substring(a.startIndex, a.endIndex)) {
    return!0;
  }
  var d = new RegExp((0,z.Ra)(a.content), "gi"), e = d.exec(c), c = e && d.exec(c);
  return e && !c ? (c = a.endIndex - a.startIndex, a.startIndex = e.index, a.endIndex = e.index + c, a.content = e[0], !0) : !1;
};
var PP = function(a, b, c) {
  var d = (0,z.lk)(b, "id"), e = (0,z.KP)(a, (0,z.lk)(b, "anchor")), f = e ? e.indexOf(b) : -1;
  b.set("state", c);
  "HIDDEN" == c && (0,z.nk)(b);
  var h = e ? e.indexOf(b) : -1;
  return{Ac:a.Dd.put(z.BG.R({postId:a.Z, noteId:d}), {state:c}, {na:!0}), BD:function() {
    -1 == h && (-1 == f ? e.add(b) : e.Fh(b, f));
  }};
};
z.QP = function(a, b, c) {
  this.range = a;
  this.anchor = b;
  this.lr = b.getAttribute("name");
  this.Nd = c;
};
var RP = function(a, b, c, d, e) {
  vP.call(this, a, b, "Leave a reply", 200, d);
  this.Z = c;
  this.Cq = e || null;
};
var SP = function(a) {
  z.v.call(this);
  var b = (0,z.wH)();
  this.pn = b && new TP(iI(b, !0), a);
  this.xt = b && new TP(iI(b, !1), a);
};
var TP = function(a, b) {
  this.Ad = a;
  this.TF = b;
  var c = (0,z.uw)(a.S, b);
  this.gy = (this.Ks = c) && c.getAttribute("name");
  this.Pz = c ? UI(a, c) : -1;
};
var UP = function(a) {
  var b = window.document.body;
  return(0,z.Td)(b, a.Ad.S) ? a.Ad : a.Ks && (0,z.Td)(b, a.Ks) ? tJ(a.Pz, a.Ks) : a.gy && (b = (0,z.VI)(a.TF, a.gy)) ? tJ(a.Pz, b) : null;
};
var VP = function() {
  return "Are you sure you want to delete this note?";
};
var WP = function() {
  return "Your note is too long, do you want to abandon your changes?";
};
z.XP = function(a, b, c, d) {
  z.v.call(this);
  this.Co = a;
  this.screen = a.get("screen");
  this.Wk = a.get("app");
  this.es = b;
  this.es.F("change", this.Yy, this);
  this.Wb = {};
  this.rb = [];
  this.jj = a.get("butter-bar");
  this.al = a.get("dialog");
  this.Gf = c;
  this.Ze = null;
  var e = c.querySelector(".notes-source");
  this.anchors = new qO(e, null);
  var f = OI("div", "layout-single-column notes-position-container");
  (0,z.Md)(this.Gf, f, 0);
  this.gx = f;
  this.Nb = this.wm();
  this.gj = c.querySelector(".body");
  this.ub = this.Nb.querySelector(".notes-list");
  this.$C = this.Nb.querySelector(".notes-spacer");
  this.eg = (0,z.mi)(e);
  this.isAuthenticated = !!(0,z.J)("isAuthenticated");
  this.currentUser = (0,z.J)("currentUser");
  this.postId = (0,z.lk)(b, "id");
  this.canAdminister = d;
  this.Kw = "true" == this.gj.contentEditable;
  this.data = new MP(a, this.postId, this.Kw);
  this.data.F("new_note_list", this.nI, this);
  if (a = a.get("vote-widget")) {
    b = this.data, a.ku = b, a.Pd() && (b = b.load(), (0,z.q)((0,z.Dc)((0,z.kw)(a), b), a.yv, a));
  }
  this.Fc = new GP(this.Nb, this.data, this.anchors);
  this.Fc.H();
  this.Jn = (0,z.q)(this.data.load(), this.Xw, this);
  (0,z.Di)(this.Fc.Li).D("select-anchor", this.ax, this);
  (0,z.Di)(this.Nb).D("show-hidden-note-replies", this.hD, this).D("start-reply", this.HI, this).D("save-reply", this.BI, this).D("edit-reply", this.WH, this).D("cancel-reply", this.DH, this).D("delete-reply", this.PH, this).D("approve-note", this.yH, this).D("unapprove-note", this.QI, this).D("edit-note", this.VH, this).D("save-note", this.AI, this).D("cancel-note", this.CH, this).D("delete-note", this.OH, this).D("hide-note", this.bI, this);
  (0,z.yi)("cancel-notes-vote", this.dA, this).D("save-notes-vote", this.sI, this);
  this.Wk.F("historyUpdate", this.eI, this);
};
var YP = function(a) {
  a.Dj();
  a.jj.H("Recommendation saved.", {type:z.rq});
};
z.ZP = function(a, b) {
  var c = NP(a.data), d = c ? (0,z.lk)(c, "noteId") : void 0, e = c && (0,z.lk)(c, "content") || a.data.YC || "";
  (0,z.zL)(b, e);
  a.Ze = new $P(a.Co, b, a.postId, d);
  a.Ze.F("save", c ? a.rI : a.qI, a);
  a.Ze.F("cancel", a.dA, a);
  return a.Ze;
};
var aQ = function(a, b) {
  var c = (0,z.KP)(a.data, b.anchor);
  b.newHighlight && (a.data.xp[b.highlightId] = new z.pO(new z.pO(b.newHighlight)), delete b.newHighlight);
  c.add(b);
  (0,z.bQ)(a, z.jD, (0,z.qk)(c, "id", b.id));
};
var cQ = function(a, b) {
  var c = a.data.Pb(b.noteId, b.anchor);
  b.replies = c.get("replies");
  c.ni(b);
  (0,z.bQ)(a, z.kD, c);
};
var dQ = function(a) {
  if (a.bb && a.bb.Dw()) {
    return!0;
  }
  for (var b in a.Wb) {
    if (a.Wb[b].Dw()) {
      return!0;
    }
  }
  return!1;
};
var eQ = function(a) {
  var b = new z.wc, c = a.al.open({title:"Uh oh!", bodyHtml:"You have unsaved notes. Are you sure you want to abandon them?", type:z.aF});
  c ? (c.F(z.bF, b.Ea.bind(b, !0)), c.F(z.cF, function() {
    this.bC();
    b.cancel();
  }, a)) : b.cancel();
  return b;
};
var fQ = function(a) {
  (0,z.bd)(a.bb);
  a.bb = null;
  for (var b in a.Wb) {
    (0,z.bd)(a.Wb[b]), delete a.Wb[b];
  }
};
var gQ = function(a, b, c) {
  var d = b.get("state"), e = "PUBLIC" == c ? "Note was made public" : "HIDDEN" == c ? "Note was dismissed" : "NEW" == c ? "Note was made private" : "", f = PP(a.data, b, c);
  (0,z.r)((0,z.q)(f.Ac, function() {
    (0,z.q)(this.jj.H(e, {type:z.rq, dm:!0}), function() {
      f.BD();
      gQ(this, b, d);
    }, this);
    (0,z.bQ)(this, z.mD, b, {noteState:c, previousNoteState:d});
  }, a), function() {
    this.jj.H("Could not change note state", "error");
    f.BD();
    gQ(this, b, d);
  }, a);
  return f.Ac;
};
var hQ = function(a, b) {
  var c = b.value;
  return c ? a.Wb[c] : a.bb;
};
var iQ = function(a, b) {
  var c = a.data.Lg(a.anchors.get(b));
  return c ? c.text : "";
};
z.jQ = function(a) {
  return a.data.wa ? !!(0,z.KP)(a.data, a.data.wa).count() : !1;
};
z.kQ = function(a, b) {
  var c = b || a.Pe, d = a.data.Pb(c, a.data.wa), e = a.ub.querySelector('[data-note-id\x3d"' + c + '"]');
  (0,z.t)(e, "notes-show-reply-editor");
  var f = a.Wb["reply_" + c];
  f || (e = e.querySelector(".notes-reply-editor"), f = new RP(a.Co, e, a.postId, c), f.F("change", a.Mh, a), f.F("cancel", function() {
    f.clear();
  }, a), f.F("save", function(a) {
    f.clear();
    d.add("replies", a);
    (0,z.bQ)(this, z.nD, d, {replyId:a.id});
  }, a), a.Wb["reply_" + c] = f);
  f.focus();
};
z.bQ = function(a, b, c, d) {
  d = d || {};
  d.postId = a.postId;
  d.noteId = (0,z.lk)(c, "id");
  d.noteType = c.get("highlightId") ? "highlight" : "paragraph";
  (0,z.Dk)(b, d);
};
z.lQ = function(a, b, c) {
  var d = (0,z.wH)(), d = d && (0,z.tO)(a.anchors, (0,z.YH)(d)), e = c && d && new SP(d);
  (0,z.q)((0,z.mQ)(a, b && b.anchor || a.data.wa), function() {
    if (b != this.pe) {
      var a = this.pe;
      a && (0,z.nQ)(this, a, !1);
      b && (0,z.nQ)(this, b, !0);
      this.pe = b;
    }
    (a = e && e.restore()) && a.select();
  }, a);
};
z.nQ = function(a, b, c) {
  var d = b.anchor, e = (0,z.rO)(a.anchors, d);
  if (e = a.data.Lg(e)) {
    (0,z.tm)(e, 4);
    if (c) {
      if (!OP(b, e)) {
        return;
      }
      (0,z.sm)(e, (0,z.xm)(b.startIndex, b.endIndex, b.id));
    }
    a.anchors.get(d).innerHTML = (0,z.Ym)(e, z.vg, {rf:!a.Kw, isPublished:!a.es.get("latestPublishedVersion"), media:null, sections:!0, hi:!1, Ih:!1});
  }
};
z.oQ = function(a, b, c) {
  if (b != a.Pe) {
    c || (0,z.Ds)(a.Wk, "");
    (c = a.ub.querySelector(".notes-active-note")) && (0,z.u)(c, "notes-active-note");
    c = a.Pe = null;
    if (b && a.data.wa) {
      var d = a.data.Pb(b, a.data.wa);
      d && (c = a.ub.querySelector('[data-note-id\x3d"' + b + '"]')) && ((0,z.t)(c, "notes-active-note"), a.Pe = b, b = (0,z.lk)(d, "highlightId"), (0,z.lQ)(a, (b ? a.data.xp[b] || null : null) || null));
    }
    (0,z.Uc)(a.ub, "notes-note-selected", !!c);
  }
};
z.mQ = function(a, b) {
  var c = b != a.data.wa;
  if (c && dQ(a)) {
    return(0,z.q)(eQ(a), function() {
      fQ(this);
      return(0,z.mQ)(this, b);
    }, a);
  }
  a.pe && ((0,z.nQ)(a, a.pe, !1), a.pe = null);
  if (!c) {
    return(0,z.Jc)();
  }
  (0,z.oQ)(a, null);
  a.data.wa && (0,z.HP)(a.Fc, a.data.wa, !1);
  fQ(a);
  (0,z.bd)(a.$f);
  a.$f = null;
  (0,z.t)(a.ub, "notes-hide-editor");
  a.data.wa = b && a.Fc.md[b] ? b : "";
  a.data.wa ? a.yn() : a.bw();
  a.Mh();
  return(0,z.Jc)();
};
z.pQ = function() {
  var a = (window.document.location.hash ? window.document.location.hash.substr(1) : "").split("-"), b = a[1] || null;
  return{CB:a[2] || null, anchor:a[0], Nd:b && {startIndex:Number(a[3]), endIndex:Number(a[4]), id:b}};
};
z.qQ = function(a, b) {
  if (a.isAuthenticated) {
    (0,z.bd)(a.bb);
    var c = a.L(".notes-note-editor"), d = null, e = null;
    if ("string" == typeof b) {
      d = b;
    } else {
      if (b instanceof z.QP) {
        e = b.Nd, d = e.anchor;
      } else {
        throw Error("Missing assoc for note editor");
      }
    }
    c.innerHTML = "";
    a.bb = new xP(a.Co, c, a.postId);
    yP(a.bb, d, iQ(a, d));
    e && (0,z.zP)(a.bb, e.startIndex, e.endIndex, e.content);
    a.bb.F("change", a.Mh, a);
    a.bb.F("save", a.no, a);
    a.bb.F("cancel", function() {
      (0,z.KP)(this.data, d).count() ? (0,z.t)(this.ub, "notes-hide-editor") : (0,z.mQ)(this, null);
      (0,z.oQ)(this, null);
    }, a);
    (0,z.u)(a.ub, "notes-hide-editor");
  }
};
var $P = function(a, b, c, d) {
  vP.call(this, a, b, "Tell others why you’re recommending this story", 100, d || null);
  this.Z = c;
};
z.rQ = function(a, b) {
  z.lP.call(this, a);
  this.sa(new z.nP);
  this.sa(new z.BO(b));
  this.sa(new z.vN(!1));
  this.sa(new z.pP(z.CC));
  this.sa(new z.AN(!1));
  this.Qi = !0;
};
z.sQ = function(a, b) {
  this.ht = b;
  this.yf = a;
  this.dJ = z.Hl.ja(this.yf);
  this.strategy = "resample";
};
var tQ = function(a, b) {
  var c = {imageId:b.$a()}, d = b.Jd(), e = b.ll();
  if ("object" == typeof a.strategy) {
    d = a.strategy["*"] || a.strategy[d];
    c.strategy = d.type;
    for (var f in d) {
      c[f] = d[f];
    }
  } else {
    c.strategy = a.strategy;
  }
  e && (c.filter = e);
  return c;
};
var uQ = function(a, b, c) {
  a.yf.$l(b).Zl(c);
};
z.vQ = function(a, b, c, d, e) {
  this.Ud = a.get("element-tracker");
  this.ff = a.get("image");
  this.bH = a.get("loading-indicator");
  this.Pa = b;
  this.element = c;
  this.ia = d;
  this.kb = e;
  this.kp = this.element.querySelector("[data-scroll]");
};
var wQ = function(a) {
  for (var b = "full" == a.ia.Jd() ? ["full"] : ["contain", "cover"], c = 0;c < b.length;c++) {
    var d = a.ia.Nr(a.ia.ua().oi(b[c]));
    a.ff.load(d);
  }
};
var xQ = function(a) {
  var b = a.ia.dJ;
  b.$a() ? (a.fe(b.$a()), yQ(a, b.Jd()), uQ(a.ia, b.Ph(), b.nl()), zQ(a, a.ia.Aj())) : a.fe("");
};
var yQ = function(a, b) {
  if (a.ia.$a()) {
    var c = a.ia.Jd();
    a.ia.oi(b);
    var d = a.ia.Aj();
    (0,z.Cc)(a.ff.load(d), function() {
      this.ia.Jd() == b && ((0,z.Uc)(this.element, "layout-single-column", "contain" == b), (0,z.u)(this.element, "background-size-" + c), (0,z.t)(this.element, "background-size-" + b), zQ(this, d));
    }, a);
  }
};
var AQ = function(a) {
  if (a.ia.$a()) {
    var b = a.ia.Aj();
    a.bH.Aa((0,z.Cc)(a.ff.load(b), function() {
      zQ(this, b);
    }, a));
  }
};
var zQ = function(a, b) {
  if (b != a.ia.ht) {
    var c = a.kC();
    a.ia.ht = b || "";
    b ? (a.Bx(c, b), (c = c.parentNode) && "blur-cover" == c.getAttribute("data-scroll") && (c.setAttribute("data-image-url", b), c.setAttribute("data-image-blur-url", a.ia.Aj(!0)))) : (a.Fw(c), uQ(a.ia, 0, 0));
    a.Ud.Pg();
    a.Pa.X(z.BQ);
  }
};
var CQ = function(a, b) {
  z.Kj.call(this);
  this.pa = a;
  this.Mc = b;
};
var DQ = function(a, b) {
  z.v.call(this);
  this.gk = a;
  this.Wq = b;
  this.rv = a;
  this.tq = "";
  this.wv = this.Dg = null;
};
var EQ = function(a, b) {
  a.rv = b;
  return a;
};
var FQ = function(a) {
  a.tq = "pre-transition-picker-image";
  return a;
};
var GQ = function(a, b) {
  z.Ij.call(this);
  this.pa = b;
  this.ia = a;
  this.kb = HQ;
  this.Vs = (0,z.Jc)();
};
var IQ = function(a, b, c, d, e) {
  z.Kj.call(this);
  this.Pa = a;
  this.pa = b;
  this.ia = c;
  this.kb = d;
  this.Hc = e;
};
var JQ = function(a, b) {
  var c = a.pa.querySelector(".picker-content").offsetHeight, d = new DQ(a.pa, "transition-picker-layout");
  a.pa.style.height = a.pa.offsetHeight;
  (0,z.ri)(a.pa);
  d = d.start();
  a.pa.style.height = c + "px";
  (0,z.Wc)(a.pa, "picker-layout-fill", "picker-layout-inline");
  (0,z.Cc)(d, function() {
    this.pa.style.height = "";
  }, a);
  (0,z.Dc)(b, d);
};
var KQ = function(a, b) {
  var c = a.pa.querySelector(".picker-content").offsetHeight, d = new DQ(a.pa, "transition-picker-layout");
  (0,z.Wc)(a.pa, "picker-layout-inline", "picker-layout-fill");
  var e = (0,z.yf)(a.pa, "height");
  (0,z.Wc)(a.pa, "picker-layout-fill", "picker-layout-inline");
  a.pa.style.height = c + "px";
  (0,z.ri)(a.pa);
  c = d.start();
  (0,z.Wc)(a.pa, "picker-layout-inline", "picker-layout-fill");
  a.pa.style.height = e;
  (0,z.Cc)(c, function() {
    this.pa.style.height = "";
  }, a);
  (0,z.Dc)(b, c);
};
var LQ = function(a) {
  this.pa = a;
};
var MQ = function(a, b, c) {
  z.Ij.call(this);
  this.vn = a.get("upload");
  this.Zq = b;
  this.hK = !!c;
  this.Qk = [];
};
var NQ = function(a, b, c, d, e, f) {
  this.ff = a.get("image");
  this.W = a.get("dialog");
  this.Pa = b;
  this.Gk = c.querySelector(".progress-bar");
  this.fn = new LQ(c.querySelector(".upload-feedback-preview"));
  this.ia = d;
  this.Hc = f;
  this.kb = e;
  this.Mc = new MQ(a, function(a) {
    return this.ia.Nr(z.Hl.ja(this.ia.yf).lc(a));
  }.bind(this));
  this.Mc.F("start", this.XI, this);
  this.Mc.F("progress", this.WI, this);
  this.Mc.F("success", this.TI, this);
  this.Mc.F("error", this.UI, this);
  this.Mc.F("abort", this.SI, this);
  this.Mc.F("preview", this.VI, this);
};
var OQ = function(a, b, c, d) {
  z.Kj.call(this);
  this.ca = a;
  this.ia = c;
  this.Hc = d;
  this.pa = b;
};
z.PQ = function(a, b) {
  z.Xn.call(this);
  this.pa = b;
  var c = (0,z.Jw)(b);
  this.ia = this.HB(c || new z.Hg, b.getAttribute("data-url"));
  this.kb = new GQ(this.ia, b);
  this.Hc = this.IB(a, this, b, this.ia, this.kb);
  this.Mc = new NQ(a, this, b, this.ia, this.kb, this.Hc);
  this.Aa(new CQ(b, this.Mc));
  this.Aa(new OQ(a, b, this.ia, this.Hc));
  ((0,z.Qc)(b, "picker-layout-fill") || (0,z.Qc)(b, "picker-layout-inline")) && this.Aa(new IQ(this, b, this.ia, this.kb, this.Hc));
  this.kb.reset();
};
z.QQ = function(a, b, c) {
  this.sv = !!c;
  z.PQ.call(this, a, b);
};
var RQ = function(a, b, c) {
  z.sQ.call(this, a, b);
  this.sv = c;
};
var SQ = function(a, b, c, d, e) {
  z.vQ.call(this, a, b, c, d, e);
};
var CH = /&([^;\s<&]+);?/g;
(0,z.p)(oH, z.v);
oH.prototype.Ic = null;
oH.prototype.C = function() {
  this.Ic && this.Ic.close();
  this.Ic = null;
  this.ma && this.ma.cancel();
  this.ma = null;
  oH.w.C.call(this);
};
oH.prototype.Sg = (0,z.n)(214);
oH.prototype.cq = (0,z.n)(217);
(0,z.p)(pH, z.hB);
z.g = pH.prototype;
z.g.Jf = null;
z.g.C = function() {
  this.ma.Nc || this.ma.cancel();
  kH(this);
  this.ma = null;
  pH.w.C.call(this);
};
z.g.LD = function() {
  this.Ic.F("close", this.HH, this);
  this.Jf = window.document.createElement("iframe");
  this.Jf.setAttribute("style", "position:absolute;top:-9999px;left:-9999px;");
  this.Jf.setAttribute("id", this.lk);
  this.Jf.setAttribute("name", this.lk);
  window.document.body.appendChild(this.Jf);
  (0,z.R)(this.Jf, "load", this.Zm, this);
  this.Ic && (this.Ic.L("form").submit(), (0,z.t)(this.Ic.L(".overlay-dialog"), "uploading-image"));
  return this.ma.zb();
};
z.g.HH = function() {
  this.ma.Nc || this.ma.cancel();
  kH(this);
};
z.g.Zm = function() {
  var a = (0,z.mH)(this.Jf.contentWindow.document.body);
  a && (this.ma.Ea(a), kH(this));
};
(0,z.p)(qH, z.v);
qH.prototype.C = function() {
  this.ma && this.ma.cancel();
  this.ma = null;
  this.Da && (window.document.body.removeChild(this.Da), this.Da = null);
  qH.w.C.call(this);
};
qH.prototype.Sg = (0,z.n)(215);
qH.prototype.Yz = (0,z.n)(216);
z.WH = z.FC;
z.lB.prototype.ro = (0,z.$)(218, function() {
  return(0,z.q)(this.Sg(!0), function(a) {
    return a[0];
  });
});
oH.prototype.cq = (0,z.$)(217, function(a) {
  a.preventDefault();
  a = [new pH(this.ca, this.lk, this.Ic)];
  this.ma.Ea(a);
});
qH.prototype.Yz = (0,z.$)(216, function() {
  if (this.Da && this.Da.files && this.Da.files.length) {
    var a = ((0,z.J)("variants.upload_multiple_files") ? (0,z.fb)(this.Da.files) : [this.Da.files[0]]).map(function(a) {
      return new z.kB(this.ca, a);
    }, this);
    this.ma.Ea(a);
  } else {
    this.ma.cancel();
  }
});
qH.prototype.Sg = (0,z.$)(215, function(a) {
  if (this.Im) {
    throw Error("A picker cannot be used more than once.");
  }
  this.Im = !0;
  (0,z.J)("variants.upload_multiple_files") && !a && (this.Da.multiple = !0);
  window.document.body.appendChild(this.Da);
  (0,z.R)(this.Da, "change", this.Yz, this);
  this.Da.click();
  return this.ma;
});
oH.prototype.Sg = (0,z.$)(214, function() {
  if (this.Im) {
    throw Error("A picker cannot be used more than once.");
  }
  this.Im = !0;
  this.lk = "ie9_upload_frame_" + Math.floor(1E3 * Math.random());
  if (this.Ic = this.W.open({title:"Please choose an image", bodyHtml:uH({rL:this.lk})})) {
    var a = this.Ic.L('input[type\x3d"file"]');
    (0,z.R)(a, "change", this.cq, this);
  } else {
    this.ma.cancel();
  }
  return(0,z.r)(this.ma, function() {
    this.Ic && this.Ic.close();
    this.Ic = null;
  });
});
z.lB.prototype.Sg = (0,z.$)(213, function(a) {
  return(z.JC ? new qH(this.ca) : new oH(this.ca)).Sg(a || !(0,z.J)("variants.upload_multiple_files"));
});
z.wA.prototype.ml = (0,z.$)(212, function(a, b, c, d) {
  a = this.rb[a.toString()];
  var e = -1;
  a && (e = (0,z.yA)(a, b, c, d));
  return-1 < e ? a[e] : null;
});
z.wA.prototype.Nj = (0,z.$)(211, function(a) {
  a = a && a.toString();
  var b = 0, c;
  for (c in this.rb) {
    if (!a || c == a) {
      for (var d = this.rb[c], e = 0;e < d.length;e++) {
        ++b, (0,z.vA)(d[e]);
      }
      delete this.rb[c];
      this.No--;
    }
  }
  return b;
});
z.qA.prototype.pw = (0,z.$)(210, function() {
  return this.qf;
});
z.iA.prototype.disable = (0,z.$)(209, function() {
  this.oj && (this.tt && (0,z.$h)(this.tt), this.st && (0,z.$h)(this.st), this.Ef && (0,z.$h)(this.Ef), this.remove(), window.document.body.removeChild(this.N), this.et = "", this.oj = !1);
});
z.nA.prototype.disable = (0,z.$)(208, function() {
  this.oj && (this.remove(), this.Fa.removeChild(this.N), this.Fa = this.N = null, (0,z.$h)(this.Ef));
});
z.Zu.prototype.Aj = (0,z.$)(206, function() {
  return(0,z.A)(this, "url");
});
z.Bu.prototype.Pb = (0,z.$)(205, function() {
  return(0,z.A)(this, "note");
});
z.Cu.prototype.Pb = (0,z.$)(204, function() {
  return(0,z.A)(this, "note");
});
z.Fu.prototype.Pb = (0,z.$)(203, function() {
  return(0,z.A)(this, "note");
});
z.vv.prototype.Pb = (0,z.$)(202, function() {
  return(0,z.A)(this, "note");
});
z.Ot.prototype.Dc = (0,z.$)(190, function() {
  return(0,z.A)(this, "anchor");
});
z.hv.prototype.Dc = (0,z.$)(189, function() {
  return(0,z.A)(this, "anchor");
});
z.iv.prototype.Dc = (0,z.$)(188, function() {
  return(0,z.A)(this, "anchor");
});
z.jv.prototype.Dc = (0,z.$)(187, function() {
  return(0,z.A)(this, "anchor");
});
z.qt.prototype.Ta = (0,z.$)(182, function() {
  return(0,z.A)(this, "noteId");
});
z.rt.prototype.Ta = (0,z.$)(181, function() {
  return(0,z.A)(this, "noteId");
});
z.Ot.prototype.Ta = (0,z.$)(180, function() {
  return(0,z.A)(this, "noteId");
});
z.Pt.prototype.Ta = (0,z.$)(179, function() {
  return(0,z.A)(this, "noteId");
});
z.Qt.prototype.Ta = (0,z.$)(178, function() {
  return(0,z.A)(this, "noteId");
});
z.Bu.prototype.Ta = (0,z.$)(177, function() {
  return(0,z.A)(this, "noteId");
});
z.Cu.prototype.Ta = (0,z.$)(176, function() {
  return(0,z.A)(this, "noteId");
});
z.Fu.prototype.Ta = (0,z.$)(175, function() {
  return(0,z.A)(this, "noteId");
});
z.hv.prototype.Ta = (0,z.$)(174, function() {
  return(0,z.A)(this, "noteId");
});
z.jv.prototype.Ta = (0,z.$)(173, function() {
  return(0,z.A)(this, "noteId");
});
z.kv.prototype.Ta = (0,z.$)(172, function() {
  return(0,z.A)(this, "noteId");
});
z.vv.prototype.Ta = (0,z.$)(171, function() {
  return(0,z.A)(this, "noteId");
});
z.Vp.prototype.getData = (0,z.$)(170, function() {
  return this.ia;
});
z.oz.prototype.getData = (0,z.$)(169, function() {
  return z.oz.w.getData.call(this);
});
z.Fq.prototype.$g = (0,z.$)(168, function(a) {
  this.kt = a;
  (0,z.Gq)(this);
  return this;
});
z.lm.prototype.ai = (0,z.$)(166, function() {
  return 4 == this.type || 11 == this.type;
});
z.Ol.prototype.hs = (0,z.$)(165, function() {
  var a = this.Tu.pop();
  if (!a) {
    return null;
  }
  for (var b = null;a.length;) {
    var c = a.pop(), d = (0,z.zl)(c.delta);
    (0,z.Dl)(d, this.vk);
    d.fj = c.fj;
    d.selection = c.selection;
    d.selection && (b = d.selection);
    this.mc.push(d);
    this.Ai && this.Ai.call(null, z.Hl.ja(d.delta));
  }
  return b;
});
z.Ol.prototype.ej = (0,z.$)(162, function(a) {
  var b = (0,z.Ya)(this.mc);
  b && (b.selection = a.ja());
});
z.Nl.prototype.fe = (0,z.$)(155, function(a) {
  return(0,z.F)(this, "imageId", a);
});
z.iu.prototype.fe = (0,z.$)(154, function(a) {
  return(0,z.F)(this, "imageId", a);
});
z.Zu.prototype.fe = (0,z.$)(153, function(a) {
  return(0,z.F)(this, "imageId", a);
});
z.$u.prototype.fe = (0,z.$)(152, function(a) {
  return(0,z.F)(this, "imageId", a);
});
z.Lv.prototype.fe = (0,z.$)(151, function(a) {
  return(0,z.F)(this, "imageId", a);
});
z.Jl.prototype.fg = (0,z.$)(145, function(a) {
  return(0,z.F)(this, "coverless", a);
});
z.Rt.prototype.fg = (0,z.$)(144, function(a) {
  return(0,z.F)(this, "coverless", a);
});
z.lv.prototype.fg = (0,z.$)(143, function(a) {
  return(0,z.F)(this, "coverless", a);
});
z.Jl.prototype.Gb = (0,z.$)(133, function(a) {
  return(0,z.F)(this, "content", a);
});
z.Ot.prototype.Gb = (0,z.$)(132, function(a) {
  return(0,z.F)(this, "content", a);
});
z.Pt.prototype.Gb = (0,z.$)(131, function(a) {
  return(0,z.F)(this, "content", a);
});
z.Rt.prototype.Gb = (0,z.$)(130, function(a) {
  return(0,z.F)(this, "content", a);
});
z.Ut.prototype.Gb = (0,z.$)(129, function(a) {
  return(0,z.F)(this, "content", a);
});
z.hv.prototype.Gb = (0,z.$)(128, function(a) {
  return(0,z.F)(this, "content", a);
});
z.iv.prototype.Gb = (0,z.$)(127, function(a) {
  return(0,z.F)(this, "content", a);
});
z.jv.prototype.Gb = (0,z.$)(126, function(a) {
  return(0,z.F)(this, "content", a);
});
z.kv.prototype.Gb = (0,z.$)(125, function(a) {
  return(0,z.F)(this, "content", a);
});
z.lv.prototype.Gb = (0,z.$)(124, function(a) {
  return(0,z.F)(this, "content", a);
});
z.Jl.prototype.ua = (0,z.$)(123, function() {
  return(0,z.A)(this, "content");
});
z.Ot.prototype.ua = (0,z.$)(122, function() {
  return(0,z.A)(this, "content");
});
z.Pt.prototype.ua = (0,z.$)(121, function() {
  return(0,z.A)(this, "content");
});
z.Rt.prototype.ua = (0,z.$)(120, function() {
  return(0,z.A)(this, "content");
});
z.Ut.prototype.ua = (0,z.$)(119, function() {
  return(0,z.A)(this, "content");
});
z.hv.prototype.ua = (0,z.$)(118, function() {
  return(0,z.A)(this, "content");
});
z.iv.prototype.ua = (0,z.$)(117, function() {
  return(0,z.A)(this, "content");
});
z.jv.prototype.ua = (0,z.$)(116, function() {
  return(0,z.A)(this, "content");
});
z.kv.prototype.ua = (0,z.$)(115, function() {
  return(0,z.A)(this, "content");
});
z.lv.prototype.ua = (0,z.$)(114, function() {
  return(0,z.A)(this, "content");
});
z.Be.prototype.Pn = (0,z.$)(19, function() {
  var a = this.ra.getClientRects();
  return a.length ? (a = (0,z.Ya)(a), new z.rd(a.right, a.bottom)) : null;
});
z.Se.prototype.Pn = (0,z.$)(18, function() {
  return this.xe() ? (0,z.$e)(this).Rh() : (0,z.$e)(this).Pn();
});
z.Be.prototype.Rh = (0,z.$)(17, function() {
  var a = this.ra.getClientRects();
  return a.length ? new z.rd(a[0].left, a[0].top) : null;
});
z.Se.prototype.Rh = (0,z.$)(16, function() {
  return this.xe() ? (0,z.$e)(this).Pn() : (0,z.$e)(this).Rh();
});
z.ze.prototype.dh = (0,z.$)(9, function(a, b) {
  this.insertNode(a, !0);
  this.insertNode(b, !1);
});
z.Ce.prototype.dh = (0,z.$)(8, function(a, b) {
  var c = (0,z.Cd)((0,z.wd)(this.Ma()));
  if (c = (0,z.wH)(c)) {
    var d = c.Ma(), e = c.pb(), f = c.Qb(), h = c.Ec()
  }
  var k = this.ra.cloneRange(), l = this.ra.cloneRange();
  k.collapse(!1);
  l.collapse(!0);
  k.insertNode(b);
  l.insertNode(a);
  k.detach();
  l.detach();
  if (c) {
    if (3 == d.nodeType) {
      for (;f > d.length;) {
        f -= d.length;
        do {
          d = d.nextSibling;
        } while (d == a || d == b);
      }
    }
    if (3 == e.nodeType) {
      for (;h > e.length;) {
        h -= e.length;
        do {
          e = e.nextSibling;
        } while (e == a || e == b);
      }
    }
    (0,z.Ye)(d, f, e, h).select();
  }
});
z.He.prototype.dh = (0,z.$)(7, function(a, b) {
  var c = this.ra.duplicate(), d = this.ra.duplicate();
  xH(c, a, !0);
  xH(d, b, !1);
  this.Hg();
});
z.Se.prototype.dh = (0,z.$)(6, function(a, b) {
  (0,z.$e)(this).dh(a, b);
  this.Hg();
});
z.ze.prototype.insertNode = (0,z.$)(5, function(a, b) {
  b ? (0,z.zH)(a, this.Ma()) : (0,z.Ld)(a, this.pb());
  return a;
});
z.Ce.prototype.insertNode = (0,z.$)(4, function(a, b) {
  var c = this.ra.cloneRange();
  c.collapse(b);
  c.insertNode(a);
  c.detach();
  return a;
});
z.He.prototype.insertNode = (0,z.$)(3, function(a, b) {
  var c = xH(this.ra.duplicate(), a, b);
  this.Hg();
  return c;
});
z.Se.prototype.insertNode = (0,z.$)(2, function(a, b) {
  var c = (0,z.$e)(this).insertNode(a, b);
  this.Hg();
  return c;
});
z.Xc.prototype.isEnabled = (0,z.$)(0, function() {
  return window.navigator.cookieEnabled;
});
(0,z.p)(lI, z.de);
lI.prototype.next = function() {
  var a = this.XC;
  if (!a) {
    throw z.fe;
  }
  this.XC = this.PM ? a.previousSibling : a.nextSibling;
  return a;
};
(0,z.p)(sI, lI);
var cJ = /matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;
(0,z.p)(zI, z.qe);
zI.prototype.vo = function(a) {
  (0,z.Nd)(AI(this, !0));
  (0,z.Nd)(AI(this, !1));
  return a;
};
zI.prototype.yo = function() {
  var a = null, b = AI(this, !this.Yg), c = AI(this, this.Yg);
  if (b && c) {
    var a = b.parentNode, b = (0,z.bb)(a.childNodes, b), d = c.parentNode, c = (0,z.bb)(d.childNodes, c);
    d == a && (this.Yg ? b-- : c--);
    a = (0,z.Ye)(a, b, d, c);
    a = this.vo(a);
    a.select();
  } else {
    this.vo();
  }
  return a;
};
zI.prototype.C = function() {
  this.vo();
  this.Rf = null;
};
(0,z.p)(FI, zI);
FI.prototype.vo = function(a) {
  var b = AI(this, !0), c = AI(this, !1), b = b && c ? (0,z.Xd)(b, c) : b || c;
  FI.w.vo.call(this);
  if (a) {
    return vI(b, a);
  }
  b && (a = (0,z.wH)((0,z.Cd)((0,z.wd)(b))), (a = vI(b, a)) && a.select());
};
SI = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, FIGURE:!0, LI:!0};
z.TQ = /\s+(?=\s)/g;
z.UQ = /^\s|\s$/g;
$I = /^(.*?)([:;,\.?>\]\)!]+)$/;
(0,z.p)(NI, z.he);
NI.prototype.next = function() {
  do {
    NI.w.next.call(this);
  } while (-1 == this.Sc);
  return this.S;
};
var gJ = {IMG:" ", BR:"\n"}, fJ = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, VQ = {bP:"layout-single-column", Es:"layout-fill-width", KO:"sectionLayout--outsetGrid"}, nL = [], mL = null, pL = /^<\//, oL = /(<\/?(\w*)([^>]*)>)/gi, WQ = {rf:!1, isPublished:!1, media:null, sections:!0, hi:!1, Ih:!1}, lN = /^[@＠][a-z0-9_]{1,15}$/i;
(0,z.JH)(z.Qq, "common-async");
CL.prototype.fc = function(a) {
  return(0,z.yw)(this.U)[a];
};
z.g = z.IL.prototype;
z.g.Dc = function() {
  return this.Fq ? this.end : this.start;
};
z.g.xe = function() {
  return this.Fq;
};
z.g.collapse = function(a) {
  var b = a ? this.start : this.end;
  a = a ? this.end : this.start;
  a.V = b.V;
  a.offset = b.offset;
};
z.g.isCollapsed = function() {
  return this.start.V == this.end.V && this.start.offset == this.end.offset;
};
z.g.ai = function() {
  return this.isCollapsed() && this.start.nc === nM;
};
z.g.ja = function() {
  return new z.IL(this.start.ja(), this.end.ja(), this.Fq);
};
var OL = 1, nM = 2, QL = 3;
RL.prototype.g = function() {
  return this.nc;
};
RL.prototype.ja = function() {
  return new RL(this.nc, this.V, this.offset);
};
z.g = z.TL.prototype;
z.g.ej = function() {
  this.Lb.ej(this.getSelection());
};
z.g.fl = (0,z.n)(163);
z.g.vl = (0,z.n)(160);
z.g.Ir = function(a) {
  return this.Lb.Ir(a);
};
z.g.dm = function() {
  WL(this, !0);
};
z.g.hs = function() {
  WL(this, !1);
};
z.g.ba = function() {
  return this.U;
};
z.g.getSelection = function() {
  return this.pd;
};
z.g.$g = function(a, b) {
  lM(this, a, b, a, b, !1);
};
z.g.fc = function(a) {
  return this.Bd[a];
};
z.g.$y = function(a) {
  var b = a.Fb(), c = (0,z.pm)(a.Lg()), d = this.cf[b];
  d && d.Ob(c) ? c = d : this.cf[b] = c;
  var d = this.fc(b), e;
  e = (0,z.Hd)((0,z.Sm)(c, z.vg, WQ, void 0));
  (0,z.sw)(e) || (e = void 0 != e.firstElementChild ? e.firstElementChild : (0,z.Pd)(e.firstChild, !0));
  DM(this, c, e, b);
  var f;
  a: {
    f = c;
    if ((4 == f.type || 11 == f.type) && (0,z.Bw)(d) == f.type && d.outerHTML.replace(XQ, "") === e.outerHTML.replace(XQ, "")) {
      f = d.querySelector("figcaption");
      var h = e.querySelector("figcaption");
      if (f && h) {
        uI(h, f);
        f = !0;
        break a;
      }
    }
    f = !1;
  }
  if (!f) {
    if (4 == c.type && 4 == (0,z.Kw)(d, this.hB).type) {
      f = d.getElementsByTagName("img")[0].src;
      var h = e.getElementsByTagName("img")[0], k = h.src;
      f && k != f && (k && h.setAttribute("data-delayed-src", k), h.src = f);
    }
    e.tagName == d.tagName || "LI" != e.tagName && "LI" != d.tagName ? uI(e, d) : "LI" == e.tagName ? (c = window.document.createElement(10 == c.type ? "OL" : "UL"), c.appendChild(e), uI(c, d), rJ(c)) : (c = d.parentNode, f = sJ(c, d), (0,z.Ld)(e, c), (0,z.Nd)(d), c.childNodes.length || (0,z.Nd)(c), f.childNodes.length || (0,z.Nd)(f));
    "LI" === e.tagName && (e.parentNode.className = "post-list");
    this.Bd[b] = e;
    if (this.ib()) {
      d = this.zh;
      a = a.Fb();
      c = FL(d, a);
      e = (0,z.yw)(c);
      var l;
      a: {
        for (l in VQ) {
          if (f = VQ[l], (0,z.Qc)(c, f)) {
            l = f;
            break a;
          }
        }
        l = null;
      }
      e = e[0] == d.fc(a);
      if (d.Mf.Vf(a) != l || (0,z.Gm)(d.Mf, a) != e) {
        l = FL(d, a), e = FL(d, a + 1), c = d.fc(a), c = "LI" === c.tagName ? c.parentNode : c, (0,z.Gm)(d.Mf, a) ? e && !(0,z.Gm)(d.Mf, a + 1) ? (0,z.Md)(e, c, 0) : (0,z.Md)(HL(d, a), c, 0) : FL(d, a - 1).appendChild(c), (0,z.yw)(l).length || DL(d);
      }
    }
    CM(this, b);
  }
};
z.g.lG = function(a) {
  var b = YQ[a.g()];
  this.mv || b.call(this, a);
};
z.g.JG = function(a) {
  var b = a.Fb(), c = this.Bd[b];
  if (this.ib()) {
    var d = (0,z.vw)(c, this.U);
    d && 1 === (0,z.yw)(d).length && 1 < this.Mb.length ? ((0,z.Nd)(d), a = this.Mb.indexOf(d), this.Mb.splice(a, 1)) : (d = this.zh, a = a.Fb(), (a = FL(d, a)) && 1 === (0,z.yw)(a).length && (0,z.Nd)(a));
    this.jh = null;
  }
  "LI" == c.tagName && c.parentNode && 1 == (0,z.yw)(c.parentNode).length ? (0,z.Nd)(c.parentNode) : (0,z.Nd)(c);
  this.Bd.splice(b, 1);
  this.cf.splice(b, 1);
  (c = this.Bd[b]) && "LI" === c.tagName && rJ(c.parentNode);
  this.ib() && DL(this.zh);
  c = this.pd.start;
  c.V >= b && (c.V = Math.max(c.V - 1, 0));
  c = this.pd.end;
  c.V >= b && (c.V = Math.max(c.V - 1, 0));
  CM(this, b);
};
z.g.qG = function(a) {
  var b = a.Fb(), c = (0,z.pm)(a.Lg());
  this.cf.splice(b, 0, c);
  var d = 0 === b ? null : this.Bd[b - 1];
  d && "LI" == d.tagName && (null != (void 0 != d.nextElementSibling ? d.nextElementSibling : (0,z.Pd)(d.nextSibling, !0)) && sJ(d.parentNode, d), d = d.parentNode);
  var e = (0,z.Hd)((0,z.Sm)(c, z.vg, WQ, void 0)), f = null;
  if (this.ib()) {
    0 === (0,z.fM)(this).length && (0,z.BM)(this, 0, new z.Ng);
    f = this.zh;
    a = a.Fb();
    if ((0,z.Gm)(f.Mf, a)) {
      var h = FL(f, a), f = !h || (0,z.Gm)(f.Mf, a + 1) ? HL(f, a) : h
    } else {
      f = null;
    }
    f && (d = null);
  }
  if (d) {
    (0,z.Ld)(e, d);
  } else {
    if (this.ib()) {
      if (!f) {
        throw Error("Cannot insert paragraph into a malformed section.");
      }
      (0,z.Md)(f, e, 0);
    } else {
      (0,z.Md)(this.U, e, 0);
    }
  }
  d = e;
  (0,z.si)(e) && (d = e.firstChild, rJ(e));
  this.Bd.splice(b, 0, d);
  DM(this, c, e, b);
  c = this.pd.start;
  c.V >= b && c.V++;
  c = this.pd.end;
  c.V >= b && c.V++;
  this.jh = null;
  CM(this, b);
};
var XQ = /<figcaption.*?<\/figcaption>/;
z.TL.prototype.ib = function() {
  return this.$q;
};
z.TL.prototype.rG = function(a) {
  var b = a.Fb(), c = a.Wf();
  this.jh = null;
  c = mJ(c);
  this.Mb.splice(b, 0, c);
  b = this.Mb[b - 1];
  this.U.insertBefore(c, b && b.nextSibling);
  var b = this.zh, d = a.Fb(), e = a.Wf().ta(), c = EL(b, d - 1);
  a = EL(b, d);
  c && (GL(b, e - 1), b = FL(b, e), c = (0,z.Aw)(c), b = c.slice(c.indexOf(b)), (0,z.Kd)(a, b));
};
z.TL.prototype.KG = function(a) {
  var b = a.Fb(), c = this.zh;
  a = a.Fb();
  var d = EL(c, a), e = 0 === a ? EL(c, 1) : EL(c, a - 1), d = (0,z.Aw)(d), f = (0,z.Aw)(e);
  if (0 === a && f.length) {
    for (;d.length;) {
      (0,z.zH)(d.shift(), f[0]);
    }
  } else {
    (0,z.Kd)(e, d);
  }
  DL(c);
  this.jh = null;
  c = this.Mb[b];
  this.Mb.splice(b, 1);
  (0,z.Nd)(c);
};
z.TL.prototype.az = function(a) {
  var b = a.Fb(), c = a.Wf(), d = (0,z.fM)(this), e = d[b];
  e && e.Ob(c) ? c = e : d[b] = c;
  c = mJ(c);
  d = this.Mb[b];
  e = this.zh;
  a = a.Fb();
  a = EL(e, a);
  a = (0,z.Aw)(a);
  (0,z.Kd)(c, a);
  uI(c, d);
  this.Mb[b] = c;
};
var YQ = {1:z.TL.prototype.qG, 2:z.TL.prototype.JG, 3:z.TL.prototype.$y, 8:z.TL.prototype.rG, 9:z.TL.prototype.KG, 10:z.TL.prototype.az};
(0,z.p)(ZL, z.Ca);
z.FM.prototype.lH = function(a, b) {
  this.gd(b);
  cM(b);
};
z.FM.prototype.ko = z.ea;
z.FM.prototype.gd = function(a) {
  rM(a, function(a, c, d) {
    this.ko(a, c, d);
  }, this, !0);
  (0,z.kM)(a);
};
(0,z.p)(z.MM, z.FM);
z.MM.prototype.gd = function(a) {
  var b = a.getSelection();
  if ((0,z.PL)(b)) {
    var c = (0,z.yM)(a, b.start.V);
    (0,z.hM)(a, b.start.V, (new z.Ng).Xa(c.getName()));
  } else {
    if (b.ai()) {
      (0,z.sM)(a, b.start.V);
    } else {
      if (b.isCollapsed()) {
        var d = b.start, c = d.offset, d = d.V, e = (0,z.eM)(a, d);
        if (this.og) {
          c < e.text.length ? ((0,z.Am)(e, c, c + OM(this, e.text, c)), (0,z.gM)(a, d)) : (PM(this, a, d), NM(a));
        } else {
          if (0 < c) {
            var f = OM(this, e.text, c);
            (0,z.Am)(e, c + f, c);
            b.start.offset = b.end.offset = c + f;
            (0,z.gM)(a, d);
          } else {
            10 == e.type || 9 == e.type ? (e.type = 1, (0,z.gM)(a, d)) : (PM(this, a, d), NM(a));
          }
        }
      } else {
        (0,z.qM)(a, !0);
      }
    }
  }
  c = a.getSelection();
  NL(c) && c.isCollapsed() && (b = c.start.V, c = c.start.offset, d = (0,z.eM)(a, b)) && (e = d.text.charAt(c - 1), e == d.text.charAt(c) && " " == e && ((0,z.Am)(d, c, c + 1), (0,z.gM)(a, b)));
  (0,z.kM)(a);
};
(0,z.p)(QM, z.FM);
QM.prototype.WL = function(a) {
  return a.id ? (0,z.Da)(a.id, "internal-source-marker_") || (0,z.Da)(a.id, "docs-internal-guid") : !1;
};
QM.prototype.gd = function(a) {
  var b = a.ib(), c = window.document.createElement("div");
  c.innerHTML = this.TG;
  jL(c, this.WL.bind(this));
  var d = aM(c, {zs:b, ys:!0});
  if ((0,z.dM)(d)) {
    c = (0,z.eM)(a, a.getSelection().end.V).name;
    (0,z.qM)(a, !0);
    for (var e = a.getSelection().start, f = (0,z.eM)(a, e.V), h = f.split(e.offset), k = d.ib(), l = 0, m = null, s = !1;m = (0,z.eM)(d, l);) {
      var x = 5 == m.type;
      (0,z.OH)(m) && (m.type = 1, (0,z.gM)(d, l));
      PH(m.type, m.text) || k && x ? ((0,z.sM)(d, l), s = s || x) : (k && s && (m = (0,z.yM)(d, l), l != m.ta() && (0,z.BM)(d, l, new z.Ng)), s = !1, l++);
    }
    k = a.ib();
    l = {};
    m = 0;
    s = (0,z.dM)(a);
    for (m = 0;m < s;m++) {
      l[(0,z.eM)(a, m).name] = !0, k && (l[(0,z.yM)(a, m).getName()] = !0);
    }
    s = (0,z.dM)(d);
    for (m = 0;m < s;m++) {
      x = (0,z.eM)(d, m), x.name = RM(x.name, l), k && (x = (0,z.yM)(d, m), x.ta() == m && x.Xa(RM(x.getName(), l)));
    }
    for (m = 0;m < s;m++) {
      (0,z.mm)((0,z.eM)(d, m), l), (0,z.gM)(d, m), k && (x = (0,z.yM)(d, m), x.ta() == m && ((0,z.nm)(x, l), (0,z.hM)(d, m)));
    }
    l = (0,z.NH)((0,z.eM)(d, 0)) ? null : (0,z.eM)(d, 0);
    k = b && (0,z.yM)(d, 0).getName();
    l && (f.append(l.ja()), (0,z.sM)(d, 0));
    (0,z.gM)(a, e.V);
    l = (0,z.dM)(d);
    for (m = 0;m < l;m++) {
      s = e.V + m + 1, (0,z.iM)(a, s, (0,z.eM)(d, m).ja()), b && (x = (0,z.yM)(d, m), m == x.ta() && s != (0,z.yM)(a, s).ta() && x.getName() != k && (0,z.BM)(a, s, z.Hl.ja(x)));
    }
    b = e.V + l;
    d = (0,z.eM)(a, e.V + l);
    d.append(h);
    f != d && c != f.name && (d.name = c);
    (0,z.gM)(a, b);
    lM(a, e.V, e.offset, b, d.text.length - h.text.length, !1);
  }
};
(0,z.p)(z.SM, z.v);
z.SM.prototype[z.sA] = !0;
z.g = z.SM.prototype;
z.g.bs = null;
z.g.rs = (0,z.n)(219);
z.g.addEventListener = function(a, b, c, d) {
  (0,z.lJ)(this, a, b, c, d);
};
z.g.removeEventListener = function(a, b, c, d) {
  (0,z.kJ)(this, a, b, c, d);
};
z.g.dispatchEvent = function(a) {
  var b, c = this.bs;
  if (c) {
    for (b = [];c;c = c.bs) {
      b.push(c);
    }
  }
  var c = this.HK, d = a.type || a;
  if ((0,z.oa)(a)) {
    a = new z.pA(a, c);
  } else {
    if (a instanceof z.pA) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new z.pA(d, c);
      (0,z.Cb)(a, e);
    }
  }
  var e = !0, f;
  if (b) {
    for (var h = b.length - 1;!a.Kj && 0 <= h;h--) {
      f = a.currentTarget = b[h], e = TM(f, d, !0, a) && e;
    }
  }
  a.Kj || (f = a.currentTarget = c, e = TM(f, d, !0, a) && e, a.Kj || (e = TM(f, d, !1, a) && e));
  if (b) {
    for (h = 0;!a.Kj && h < b.length;h++) {
      f = a.currentTarget = b[h], e = TM(f, d, !1, a) && e;
    }
  }
  return e;
};
z.g.C = function() {
  z.SM.w.C.call(this);
  this.qj && this.qj.Nj(void 0);
  this.bs = null;
};
z.g.qa = function(a, b, c, d) {
  return this.qj.add(String(a), b, !1, c, d);
};
z.g.Ee = function(a, b, c, d) {
  return this.qj.remove(String(a), b, c, d);
};
z.g.hE = function(a) {
  return(0,z.xA)(this.qj, a);
};
z.g.ml = function(a, b, c, d) {
  return this.qj.ml(String(a), b, c, d);
};
(0,z.p)(UM, z.SM);
z.g = UM.prototype;
z.g.O = null;
z.g.LK = !0;
z.g.enable = function(a) {
  this.O == a && (this.hw = !0);
};
z.g.disable = function(a) {
  this.O == a && (this.hw = !1);
};
z.g.isEnabled = function(a) {
  return this.O == a ? this.hw : !1;
};
z.g.hr = z.AB;
z.g.ZL = z.AB;
z.g.C = function() {
  this.O && this.O && (this.disable(this.O), this.O = null);
  UM.w.C.call(this);
};
var LN = (0,z.Bb)({nC:1, oC:2, Bw:3, tl:4, rC:5, execCommand:6, queryCommandValue:7, sD:8, mQ:10, Uv:11}), ZQ = (0,z.Gb)(8, 10, 11);
UM.prototype.execCommand = function(a, b) {
  var c = this.ZL(a);
  c || (z.Qe && JM(this.O, !0), this.O.Mn());
  try {
    var d = this.gL.apply(this, arguments);
  } finally {
    c || (this.O.bl(), (0,z.LM)(this.O));
  }
  return d;
};
UM.prototype.Ng = function() {
  return!1;
};
(0,z.p)(z.VM, UM);
z.g = z.VM.prototype;
z.g.nC = function(a) {
  try {
    return this.sc(a);
  } catch (b) {
    throw a.preventDefault(), b.message = (b.message || "") + " keyCode " + a.keyCode, b;
  }
};
z.g.sc = z.AB;
z.g.oC = function(a) {
  try {
    return this.Rr(a);
  } catch (b) {
    throw a.preventDefault(), b.message = (b.message || "") + " keyCode " + a.keyCode, b;
  }
};
z.g.Rr = z.AB;
z.g.rC = function(a, b, c) {
  try {
    return this.Un(a, b, c);
  } catch (d) {
    throw a.preventDefault(), d.message = (d.message || "") + " key " + b, d;
  }
};
z.g.Un = z.AB;
(0,z.p)(WM, z.FM);
WM.prototype.gd = function(a) {
  (0,z.qM)(a, !0);
  var b = a.getSelection(), c = this.CC((0,z.eM)(a, b.start.V), b.start.offset);
  b.start.offset += c;
  b.end.offset += c;
  (0,z.gM)(a, b.start.V);
  (0,z.kM)(a);
};
var iN = /^(https?|ftp):\/\//, rN = (0,z.Gb)("", "(", "[", "{", " ", " ", "\n");
(0,z.p)(sN, z.FM);
sN.prototype.gd = function(a) {
  var b = a.getSelection(), c = b.start.V, d = b.end.V;
  if (8 != (0,z.eM)(a, c).type) {
    var e = b.start.offset, f = (0,z.dM)(a) - b.end.V, b = (0,z.eM)(a, d).text.length - b.end.offset;
    rM(a, this.sM, this, !0);
    d = (0,z.dM)(a) - f;
    lM(a, c, e, d, (0,z.eM)(a, d).text.length - b, !1);
    for (var d = a.getSelection(), h = d.start.V, k = d.end.V, l = d.end.offset, m = (0,z.dM)(a) - k, s = (0,z.eM)(a, k).text.length - l, x = h;x <= k;x++) {
      for (var L = (0,z.eM)(a, x), G = x == k ? l : L.text.length, za = x == h ? d.start.offset : 0;za < G;za++) {
        "\n" == L.text.charAt(za) && "\n" == L.text.charAt(za + 1) && ((0,z.Am)(L, za, za + 2), (0,z.gM)(a, x), (new z.$Q(!1)).DC(a, (0,z.KL)(x, za)), L = (0,z.eM)(a, x), k = (0,z.dM)(a) - m, l = (0,z.eM)(a, k).text.length - s, G = x == k ? l : L.text.length, za--);
      }
    }
    d = (0,z.dM)(a) - f;
    lM(a, c, e, d, (0,z.eM)(a, d).text.length - b, !1);
  }
};
tN.prototype.search = function(a, b) {
  var c = this.jo.text.substring(a, b), d = tL(c);
  this.WC = d ? a + c.indexOf(d) : -1;
};
sN.prototype.sM = function(a, b, c) {
  var d = new tN(a);
  d.search(b, c);
  for (var e = b;e < c;e++) {
    var f = a.text.charAt(e), h = 0;
    if (e == d.WC) {
      for (;e < c && " " != a.text.charAt(e) && "\n" != a.text.charAt(e);) {
        e++;
      }
      (0,z.gN)(a, e);
      d.search(e, c);
    } else {
      " " == f ? ((0,z.Am)(a, e, e + 1), h = nN(a, e) - 1) : "-" == f && 1 <= e - b ? ((0,z.Am)(a, e, e + 1), h = $M(a, e) - 1) : "–" == f && 1 <= e - b ? ((0,z.Am)(a, e, e + 1), h = bN(a, e) - 1) : "\x3e" == f && 1 <= e - b ? ((0,z.Am)(a, e, e + 1), h = cN(a, e) - 1) : "." == f && 2 <= e - b ? ((0,z.Am)(a, e, e + 1), h = ZM(a, e) - 1) : "'" == f ? ((0,z.Am)(a, e, e + 1), h = oN(a, e) - 1) : '"' == f ? ((0,z.Am)(a, e, e + 1), h = qN(a, e) - 1) : "(" == f && 1 <= e - b ? ((0,z.Am)(a, e, e + 1), h = 
      eN(a, e) - 1) : ")" == f && 1 <= e - b ? ((0,z.Am)(a, e, e + 1), h = dN(a, e) - 1) : "3" == f && 1 <= e - b && ((0,z.Am)(a, e, e + 1), h = fN(a, e) - 1), e += h, c += h;
    }
  }
  (0,z.gN)(a, c);
};
(0,z.p)(z.vN, z.VM);
z.g = z.vN.prototype;
z.g.hb = (0,z.Tb)("PastePlugin");
z.g.enable = function(a) {
  z.vN.w.enable.call(this, a);
  a = a.ba();
  this.ya.push((0,z.R)(a, "paste", this.CG, this), (0,z.R)(a, "copy", this.Wy, this), (0,z.R)(a, "cut", this.Wy, this));
};
z.g.disable = function(a) {
  z.vN.w.disable.call(this, a);
  (0,z.$h)(this.ya);
  this.ya.length = 0;
};
z.g.C = function() {
  window.document.body.removeChild(this.Jc);
  this.Jc = null;
  z.vN.w.C.call(this);
};
z.g.sc = function(a) {
  if (86 == a.keyCode && a.shiftKey && (a.metaKey || a.ctrlKey)) {
    this.zv = !0;
    var b = this;
    (0,window.setTimeout)(function() {
      b.zv = !1;
    }, 0);
  }
  return!1;
};
z.g.Wy = function(a) {
  var b = this.O;
  if ((0,z.cO)(b) && a.clipboardData && a.clipboardData.setData) {
    var c;
    a: {
      c = (0,z.IM)(b);
      var d = c.pd, e = null;
      if ((0,z.PL)(d)) {
        c = "";
      } else {
        if (d.ai()) {
          e = [(0,z.eM)(c, d.start.V).Cb()], e = (0,z.Dg)((0,z.Cg)(new z.Bg, e), []);
        } else {
          if (d.isCollapsed()) {
            c = "";
            break a;
          }
          for (var e = (0,z.Dg)((0,z.Cg)(new z.Bg, []), []), f = d.start.V;f <= d.end.V;f++) {
            var h = (0,z.eM)(c, f).ja();
            f === d.end.V && d.end.offset < h.text.length && h.split(d.end.offset);
            f === d.start.V && 0 < d.start.offset && (h = h.split(d.start.offset));
            (0,z.NH)(h) && (h.type = 1);
            e.qc().push(h.Cb());
            c.ib() && (h = (0,z.yM)(c, f), h.ta() === f && f !== d.start.V && (h = (new z.Ng).Xa(h.getName()), e.gc().push((new z.Ng).Xa(h.getName()).Sd(e.qc().length - 1))));
          }
        }
        d = !1;
        c.ib() && 0 < e.gc().length && (d = !0);
        c = (0,z.Mm)(e, z.vg, {rf:!0, isPublished:!0, media:{}, sections:d, hi:!1, Ih:!0});
      }
    }
    c && (a.clipboardData.setData("text/html", c), (c = (0,z.qL)(c)) && a.clipboardData.setData("text/plain", c), "cut" === a.type && (0,z.GM)(new z.MM(!0, 1), b), a.preventDefault());
  }
};
z.g.CG = function(a) {
  var b = xN(this, a);
  if (null !== b) {
    a.preventDefault(), wN(this, b);
  } else {
    var c = (0,z.IM)(this.O), d = c.getSelection();
    this.Jc.style.top = (0,z.oi)().top + 50 + "px";
    this.Jc.style.display = "block";
    this.Jc.innerHTML = "";
    this.Jc.focus();
    (0,window.setTimeout)(function() {
      var a = this.Js ? this.Jc.innerHTML : (0,z.Ha)(this.Jc.textContent);
      this.Jc.style.display = "none";
      this.O.ba().focus();
      (0,z.YL)(c, d);
      wN(this, a);
    }.bind(this), 0);
  }
};
(0,z.p)(yN, z.FM);
yN.prototype.gd = function(a) {
  var b = a.getSelection(), c = b.start.offset, d = b.end.offset, e = (0,z.eM)(a, b.start.V);
  (0,z.KH)(e, this.mF, d);
  (0,z.KH)(e, this.aJ, c);
  b.start.offset++;
  b.end.offset++;
  (0,z.gM)(a, b.start.V);
  (0,z.kM)(a);
};
(0,z.p)(z.AN, z.VM);
z.AN.prototype.hb = (0,z.Tb)("SmartTextPlugin");
z.AN.prototype.sc = function(a) {
  return 32 == a.keyCode ? ((0,z.GM)(YM(this.fF ? [z.gN, nN] : nN), this.O), a.preventDefault(), !0) : !1;
};
z.AN.prototype.Rr = function(a) {
  return BN(this, a.qf.charCode) ? (a.preventDefault(), !0) : !1;
};
(0,z.p)(DN, z.v);
z.g = DN.prototype;
z.g.Od = 0;
z.g.C = function() {
  DN.w.C.call(this);
  this.stop();
  delete this.io;
  delete this.xf;
};
z.g.start = function(a) {
  this.stop();
  this.Od = (0,z.CN)(this.Ov, (0,z.ga)(a) ? a : this.Iw);
};
z.g.stop = function() {
  this.Pd() && z.da.clearTimeout(this.Od);
  this.Od = 0;
};
z.g.Zc = function() {
  this.stop();
  this.cl();
};
z.g.Pd = function() {
  return 0 != this.Od;
};
z.g.cl = function() {
  this.Od = 0;
  this.io && this.io.call(this.xf);
};
(0,z.p)(z.HN, z.v);
var JN = [];
z.g = z.HN.prototype;
z.g.qa = function(a, b, c, d) {
  return IN(this, a, b, c, d);
};
z.g.Ee = function(a, b, c, d, e) {
  if ((0,z.ma)(b)) {
    for (var f = 0;f < b.length;f++) {
      this.Ee(a, b[f], c, d, e);
    }
  } else {
    c = c || this.handleEvent, e = e || this.xf || this, c = PI(c), d = !!d, b = (0,z.rA)(a) ? a.ml(b, c, d, e) : a ? (a = (0,z.CA)(a)) ? a.ml(b, c, d, e) : null : null, b && ((0,z.zA)(b), delete this.xb[b.key]);
  }
  return this;
};
z.g.Nj = function() {
  (0,z.sb)(this.xb, z.zA);
  this.xb = {};
};
z.g.C = function() {
  z.HN.w.C.call(this);
  this.Nj();
};
z.g.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
var iO;
var RN;
var PN;
var MN;
(0,z.p)(KN, z.SM);
KN.prototype.oa = null;
KN.prototype.kc = null;
MN = "change";
z.NN = "delayedchange";
PN = {KN:"cvc", wO:"load", qP:"unload", wN:"beforechange", GN:MN, QN:z.NN, xN:"beforefocus", VN:"focus", AN:"blur", yN:"beforetab", kO:"ifrsz", aP:"selectionchange"};
RN = 0;
iO = null;
z.g = KN.prototype;
z.g.Lx = !1;
z.g.Cs = !1;
z.g.ba = function() {
  return this.oa;
};
z.g.addListener = function(a, b, c, d) {
  var e = this.ba();
  z.hC && e && this.Fe() && (e = e.ownerDocument);
  d ? IN(this.pf, e, a, b, c, d) : this.pf.qa(e, a, b, c);
};
z.g.sa = function(a) {
  var b = a.hb();
  this.ji[b] = a;
  for (var c in LN) {
    a[LN[c]] && this.Ej[c].push(a);
  }
  a.O = this;
  this.Ye() && a.enable(this);
};
var QN = 15, ON = 250;
KN.prototype.Fe = z.BB;
KN.prototype.HD = z.AB;
var TN = {46:!0, 8:!0};
z.w || (TN[9] = !0);
var UN = {86:!0, 88:!0};
z.HB && !z.Qe && (TN[229] = !0);
KN.prototype.C = function() {
  this.bo() || this.Ye();
  this.kc && this.execCommand("clearlorem");
  WN(this);
  XN(this);
  lO(this);
  this.Nl = null;
  this.pf && (this.pf.Xb(), this.pf = null);
  for (var a;a = this.pN.pop();) {
    a.Xb();
  }
  iO == this.id && (iO = null);
  for (var b in this.ji) {
    a = this.ji[b], a.LK && a.Xb();
  }
  delete this.ji;
  KN.w.C.call(this);
};
var jO = ["DOMNodeInserted", "DOMNodeRemoved", "DOMNodeRemovedFromDocument", "DOMNodeInsertedIntoDocument", "DOMCharacterDataModified"], aR = {8:1, 9:1, 13:1, 33:1, 34:1, 35:1, 36:1, 37:1, 38:1, 39:1, 40:1, 46:1}, bR = {65:!0, 86:!0, 88:!0}, aO = {8:1, 9:1, 13:1, 27:1, 33:1, 34:1, 37:1, 38:1, 39:1, 40:1};
z.g = KN.prototype;
z.g.Zn = function(a, b) {
  for (var c = this.Ej[a], d = (0,z.lb)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    if ((f.isEnabled(this) || ZQ[a]) && f[LN[a]].apply(f, d)) {
      return!0;
    }
  }
  return!1;
};
z.g.VL = function(a, b) {
  for (var c = this.Ej[a], d = (0,z.lb)(arguments, 1), e = 0;e < c.length;++e) {
    var f = c[e];
    (f.isEnabled(this) || ZQ[a]) && f[LN[a]].apply(f, d);
  }
};
z.g.ox = function(a, b, c) {
  for (var d = this.Ej[a], e = (0,z.lb)(arguments, 1), f = 0;f < d.length;++f) {
    var h = d[f];
    if (h.isEnabled(this) || ZQ[a]) {
      e[0] = h[LN[a]].apply(h, e);
    }
  }
  return e[0];
};
z.g.Qr = function(a) {
  (z.Qe || YN(this, a)) && !this.Zn(1, a) && z.lC && $N(this, a);
};
z.g.pC = function(a) {
  if (z.Qe) {
    if (!YN(this, a)) {
      return;
    }
  } else {
    this.xw = !0, this.Mn();
  }
  this.Zn(2, a) || z.lC || $N(this, a);
};
z.g.qC = function(a) {
  z.Qe || !this.xw && !SN(a) || this.zw();
  this.Zn(3, a);
  dO(this, "selectionchange") || (aR[a.keyCode] || (a.ctrlKey || a.metaKey) && bR[a.keyCode]) && this.vx.start();
};
z.g.execCommand = function(a, b) {
  for (var c = arguments, d, e = this.Ej[6], f = 0;f < e.length;++f) {
    var h = e[f];
    if (h.isEnabled(this) && h.Ng(a)) {
      d = h.execCommand.apply(h, c);
      break;
    }
  }
  return d;
};
z.g.queryCommandValue = function(a) {
  var b = this.Ye() && this.Ow;
  if ((0,z.oa)(a)) {
    return bO(this, a, b);
  }
  for (var c = {}, d = 0;d < a.length;d++) {
    c[a[d]] = bO(this, a[d], b);
  }
  return c;
};
z.g.yL = function(a, b) {
  if (!dO(this, MN)) {
    var c = b.qf;
    try {
      if (c.originalTarget.prefix || "scrollbar" == c.originalTarget.nodeName) {
        return;
      }
    } catch (d) {
      return;
    }
    c.prevValue != c.newValue && a.call(this, c);
  }
};
z.g.Cw = function(a) {
  dO(this, MN) || (a = a.pw ? a.qf : a, a.target.firebugIgnore || (this.Lw = this.Bl = !0, this.Yd.start()));
};
z.g.mC = function() {
  z.w && this.execCommand("clearlorem", !0);
  z.Qe && this.gw();
  this.bl();
};
z.g.CL = function() {
  var a = this.ED;
  this.ED = null;
  (0,z.LM)(this, void 0, a);
};
z.g.Mn = function() {
  dO(this, "beforechange") || this.dispatchEvent("beforechange");
};
z.g.bl = function(a) {
  eO(this, !0, a);
};
z.g.zw = function() {
  dO(this, MN) || (this.Yd && this.Yd.stop(), this.Lw = this.Bl = !0, dO(this, z.NN) || this.Ln.start());
};
z.g.SB = function() {
  dO(this, z.NN) || (this.Ln.stop(), this.Bl = !1, this.dispatchEvent(z.NN));
};
z.g.gw = function() {
  this.QB();
  this.TB();
};
z.g.QB = function() {
  dO(this, "beforefocus") || (this.execCommand("clearlorem", !0), this.dispatchEvent("beforefocus"));
};
z.g.TB = function() {
  if (!dO(this, "focus")) {
    iO = this.id;
    this.Ow = !0;
    this.dispatchEvent("focus");
    if (z.Qe) {
      var a = this.ba(), b = (0,z.cO)(this);
      if (b) {
        var c = (0,z.we)(b);
        0 != (0,z.xe)(b) || c && c != a && "BODY" != c.tagName || dJ((0,z.GI)(a), 0).select();
      }
    }
    !z.gC && this.Fe() && this.Id.Md().parent.getSelection().removeAllRanges();
  }
};
z.g.RB = function() {
  dO(this, "blur") || (iO == this.id && (iO = null), this.Ow = !1, this.dispatchEvent("blur"));
};
z.g.BL = function(a) {
  iO = this.id;
  if (z.w) {
    var b = a.target;
    b && "A" == b.tagName && a.ctrlKey && this.Nl.Md().open(b.href);
  }
  this.Cs = !0;
};
z.g.zL = function() {
  this.Cs = !1;
};
z.g.sC = function(a) {
  if (!this.Lx || this.Cs) {
    this.Cs = !1, (0,z.LM)(this, a), z.w && (this.ED = a.target, this.vx.start());
  }
};
z.g.xx = function(a, b, c, d) {
  if (!this.bo()) {
    d && this.execCommand("clearlorem");
    b && a && (b = "\x3cp\x3e" + b + "\x3c/p\x3e");
    c && JM(this, !1);
    a = b;
    if (b = this.ba()) {
      if (this.Fe() && z.ce) {
        for (var e = b.ownerDocument.getElementsByTagName("HEAD"), f = e.length - 1;1 <= f;--f) {
          e[f].parentNode.removeChild(e[f]);
        }
      }
    } else {
      b = this.kc;
    }
    b && ZN(this, a, b);
    d && this.execCommand("updatelorem");
    this.Ye() && (c ? (z.Qe && EN(this.Yd), eO(this)) : this.bl());
  }
};
z.g.dE = function() {
  var a = this.Id.Jg();
  a.designMode = "on";
  z.iC && a.execCommand("styleWithCSS", !1, !1);
};
z.g.EC = function() {
  this.Xv && kO(this) && (0,z.Ef)(this.Xv, this.ba());
};
z.g.Ye = function() {
  return 2 == this.Ij;
};
z.g.bo = function() {
  return 1 == this.Ij;
};
z.g.focus = function() {
  if (!z.eC && this.Fe()) {
    this.Id.Md().focus();
  } else {
    if (z.Re) {
      var a = this.Iv.pageXOffset, b = this.Iv.pageYOffset
    }
    this.ba().focus();
    z.Re && this.Iv.scrollTo(a, b);
  }
};
z.g.RC = function(a) {
  var b = this.kc;
  if (b) {
    var b = b.innerHTML, c = {}, b = this.ox(8, b, c), d = this.Nl.zc("IFRAME", mO(this));
    if (kO(this)) {
      var e = (0,z.ya)(this.yC, this, d, b, c);
      this.nw = (0,z.lJ)(d, "load", e, !0);
      a && (d.src = a);
    }
    a = this.kc;
    d.className = a.className;
    d.id = a.id;
    uI(d, a);
    kO(this) || this.yC(d, b, c);
  }
};
z.g.zD = function() {
  var a = this.kc;
  if (a) {
    var b;
    b = this.Fe() && (b = this.Id) ? (b = b.Md()) && b.frameElement : null;
    b && uI(a, b);
  }
};
z.g.yC = function(a, b, c) {
  lO(this);
  a.allowTransparency = "true";
  var d = (0,z.td)(this.kc);
  c = new FN(this.id, (0,z.Bd)(d.Yc), c);
  if (kO(this)) {
    var e = (a.contentDocument || a.contentWindow.document).body;
    z.eC && (e.contentEditable = !0);
    e.className = "editable";
    e.setAttribute("g_editable", !0);
    e.hideFocus = !0;
    e.id = c.ZB;
    (0,z.uf)(e, c.mw);
    e.innerHTML = b;
  } else {
    var d = new GN(this.Xv), f = [];
    c.Jv && c.Ex && f.push("\x3c!DOCTYPE HTML\x3e");
    f.push('\x3chtml style\x3d"background:none transparent;min-width:0;');
    c.Jv && f.push("height:", c.aC ? "100%" : "auto");
    f.push('"\x3e');
    f.push("\x3chead\x3e\x3cstyle\x3e");
    d && d.JB && f.push(d.JB);
    z.Qe && c.Ex && f.push(" img {-moz-force-broken-image-icon: 1;}");
    f.push("\x3c/style\x3e\x3c/head\x3e");
    f.push('\x3cbody g_editable\x3d"true" hidefocus\x3d"true" ');
    z.eC && f.push("contentEditable ");
    f.push('class\x3d"editable ');
    f.push('" id\x3d"', c.ZB, '" style\x3d"min-width:0;');
    z.Qe && c.Jv && (f.push(";width:100%;border:0;margin:0;background:none transparent;", ";height:", c.Ex ? "100%" : "auto"), c.aC ? f.push(";overflow:auto") : f.push(";overflow-y:hidden;overflow-x:auto"));
    z.Re && f.push(";outline:hidden");
    for (e in c.mw) {
      f.push(";" + e + ":" + c.mw[e]);
    }
    f.push('"\x3e', b, "\x3c/body\x3e\x3c/html\x3e");
    b = f.join("");
    e = a.contentDocument || a.contentWindow.document;
    e.open();
    e.write(b);
    e.close();
  }
  VN(this, (a.contentDocument || a.contentWindow.document).body);
  !z.eC && this.Fe() && this.dE();
  hO(this);
};
(0,z.p)(z.nO, z.VM);
z.g = z.nO.prototype;
z.g.hb = (0,z.Tb)("CharCounterPlugin");
z.g.enable = function(a) {
  z.nO.w.enable.call(this, a);
  a.qa(z.NN, this.qg, !1, this);
};
z.g.disable = function(a) {
  z.nO.w.disable.call(this, a);
  a.Ee(z.NN, this.qg, !1, this);
};
z.g.sc = function(a) {
  AL(a) && window.getSelection().isCollapsed && oO(this);
  return!1;
};
z.g.qg = function() {
  oO(this);
};
qO.prototype.get = function(a) {
  return(0,z.rO)(this, a);
};
(0,z.p)(z.yO, z.VM);
z.g = z.yO.prototype;
z.g.hb = (0,z.Tb)("MaxLengthPlugin");
z.g.enable = function(a) {
  z.yO.w.enable.call(this, a);
  a.qa(z.NN, this.qg, !1, this);
  a = a.kc;
  a.setAttribute("data-length", zO(this));
  a.setAttribute("data-max-length", this.Ke);
};
z.g.disable = function(a) {
  a.Ee(z.NN, this.qg, !1, this);
  (0,z.Tc)(a.kc, ["max-length", "close-to-max-length"]);
  z.yO.w.disable.call(this, a);
};
z.g.sc = function(a) {
  return!this.dy && AL(a) && 8 != a.keyCode && this.O.ba().textContent.length >= this.Ke && window.getSelection().isCollapsed ? (a.preventDefault(), !0) : !1;
};
z.g.Bw = function() {
  this.O.ba().setAttribute("data-length", zO(this));
  return!1;
};
z.g.qg = function() {
  var a = this.O, b = a.ba(), c = zO(this);
  b.setAttribute("data-length", c);
  (0,z.Uc)(b, "max-length", c > this.Ke);
  (0,z.Uc)(b, "close-to-max-length", c > 0.66 * this.Ke);
  !this.dy && c > this.Ke && (b = (0,z.IM)(a), (0,z.GM)((0,z.XM)(b.fc(0), function(a) {
    (0,z.Am)(a, this.Ke, a.text.length);
  }.bind(this)), a));
};
(0,z.p)(z.AO, z.VM);
z.g = z.AO.prototype;
z.g.hb = (0,z.Tb)("FocusHandlingPlugin");
z.g.enable = function(a) {
  z.AO.w.enable.call(this, a);
  a.qa("focus", this.Aw, !1, this);
  a.qa("blur", this.Pr, !1, this);
};
z.g.disable = function(a) {
  z.AO.w.disable.call(this, a);
  a.Ee("focus", this.Aw, !1, this);
  a.Ee("blur", this.Pr, !1, this);
};
z.g.Aw = function() {
};
z.g.Pr = function() {
};
(0,z.p)(z.BO, z.VM);
z.g = z.BO.prototype;
z.g.hb = (0,z.Tb)("DefaultTextPlugin");
z.g.enable = function(a) {
  z.BO.w.enable.call(this, a);
  a.kc.removeAttribute("data-default-value");
  a.ba().setAttribute("data-default-value", this.vF);
  (0,z.lJ)(a.ba(), "mousedown", this.pk, !1, this);
  (0,z.lJ)(a, "beforechange", this.ok, !1, this);
};
z.g.disable = function(a) {
  (0,z.kJ)(a, "beforechange", this.ok, !1, this);
  (0,z.kJ)(a.kc, "mousedown", this.pk, !1, this);
  z.BO.w.disable.call(this, a);
};
z.g.Uv = function(a) {
  a = (0,z.fb)(a.getElementsByClassName("default-value"));
  for (var b = a.length, c = 0;c < b;c++) {
    (0,z.Nd)(a[c]);
  }
};
z.g.sc = function(a) {
  if (9 == a.keyCode) {
    return!1;
  }
  var b = (0,z.cO)(this.O);
  if ((b = b && CO(this, b.Ma())) && DO(this, b)) {
    if (AL(a) || 86 == a.keyCode) {
      this.ok();
    } else {
      return a.preventDefault(), !0;
    }
  }
  return!1;
};
z.g.pk = function(a) {
  var b = CO(this, a.target);
  b && DO(this, b) && (b.focus(), a.preventDefault());
};
z.g.ok = function() {
  var a = this.O, b = (0,z.cO)(a);
  (a = (a = b && CO(this, b.Ma()) || a.ba()) && EO(this, a)) && (0,z.Nd)(a);
};
(0,z.p)(FO, z.VM);
FO.prototype.hb = (0,z.Tb)("DeletePlugin");
FO.prototype.sc = function(a) {
  var b = 46 === a.keyCode || 68 === a.keyCode && a.ctrlKey, c = 8 === a.keyCode;
  return b || c ? (c = 1, a.altKey && !a.metaKey ? c = 2 : a.metaKey && !a.altKey && (c = 3), (0,z.GM)(new z.MM(b, c), this.O), a.preventDefault(), !0) : !1;
};
(0,z.p)(GO, KN);
z.g = GO.prototype;
z.g.Fe = function() {
  return!1;
};
z.g.dE = z.ea;
z.g.EC = function() {
};
z.g.RC = function() {
  var a = this.kc;
  a && (VN(this, a), a.contentEditable = !0, ZN(this, a.innerHTML, a), hO(this));
};
z.g.zD = z.ea;
(0,z.p)(HO, GO);
HO.prototype.ib = function() {
  return this.$q;
};
HO.prototype.fg = function(a) {
  this.ep = a;
};
HO.prototype.Cl = function() {
  return this.mA;
};
HO.prototype.xx = function(a, b) {
  this.bh.selectionchange = 1;
  this.execCommand("clearlorem");
  this.Rm = null;
  HO.w.xx.call(this, !1, b, !1, !1);
  bM((0,z.IM)(this));
  (0,z.kM)((0,z.IM)(this));
  this.execCommand("updatelorem");
  this.bh.selectionchange = 0;
};
IO.prototype.Dc = function() {
  return this.Hv;
};
var NO = /^[\w-]+(\.[\w-]+)*\@([\w-]+\.)+(\d+|\w\w+)$/i;
(0,z.p)(OO, z.FM);
OO.prototype.ko = function(a) {
  (0,z.NH)(a) || (a.hasDropCap = this.RG);
};
(0,z.p)(PO, z.FM);
PO.prototype.ko = function(a) {
  (0,z.NH)(a) || (this.Vq && a.type != this.nc && (a.type = this.nc), this.Vq || a.type != this.nc || (a.type = 1));
};
(0,z.p)(QO, z.FM);
QO.prototype.ko = function(a, b, c) {
  a.text && (b = (0,z.ym)(this.nc, b, c), this.Vq ? (0,z.sm)(a, b) : (0,z.LH)(a, b));
};
(0,z.p)(z.RO, z.VM);
z.RO.prototype.hb = (0,z.Tb)("FormattingPlugin");
var cR = (0,z.Bb)({CE:"P_1", wE:"P_2", xE:"P_3", pE:"P_6", FE:"P_7", GE:"P_8", NE:"M_1", sE:"M_2", uN:"M_3", FN:"SET_HAS_DROP_CAP", PO:"CYCLE_BLOCKQUOTE"});
z.g = z.RO.prototype;
z.g.Ng = function(a) {
  return a in cR;
};
z.g.sc = function(a) {
  AL(a) ? (this.Ru = !0, (0,window.setTimeout)(function() {
    (0,z.yb)(this.qh, !0) && TO(this) && SO(this);
    this.Ru = !1;
  }.bind(this), 0)) : 40 != a.keyCode && 38 != a.keyCode && 37 != a.keyCode && 39 != a.keyCode || SO(this);
  return!1;
};
z.g.tl = function() {
  (0,window.setTimeout)(function() {
    (0,z.yb)(this.qh, !0) && TO(this) && SO(this);
  }.bind(this), 0);
  return!1;
};
z.g.execCommand = function(a) {
  var b = this.O;
  if ("M_3" == a) {
    VO(this);
  } else {
    if ("SET_HAS_DROP_CAP" == a) {
      (0,z.GM)(new OO(!this.queryCommandValue(a)), b);
    } else {
      if ("CYCLE_BLOCKQUOTE" == a) {
        a = this.O, b = a.queryCommandValue("CYCLE_BLOCKQUOTE"), 6 == b ? a.execCommand("P_7") : 7 == b ? a.execCommand("P_7") : a.execCommand("P_6");
      } else {
        if (0 === a.indexOf("P_")) {
          (0,z.GM)(new PO(Number(a.substring(2)), !this.queryCommandValue(a)), b);
        } else {
          if (0 === a.indexOf("M_")) {
            var c = Number(a.substring(2)), d = (0,z.cO)(b);
            if (d && d.isCollapsed()) {
              if (this.qh[a] = !this.qh[a], a = UO(this, d)) {
                this.vz = a;
              }
            } else {
              (0,z.GM)(new QO(c, !this.queryCommandValue(a)), b);
            }
          }
        }
      }
    }
  }
};
z.g.queryCommandValue = function(a) {
  var b = this.O, c = this.O.ba(), d = (0,z.cO)(this.O), e;
  if ("SET_HAS_DROP_CAP" == a) {
    return(a = d && (0,z.uw)(d.Ma(), c)) && (0,z.Dw)(a);
  }
  if ("CYCLE_BLOCKQUOTE" == a) {
    return a = b.queryCommandValue(["P_6", "P_7"]), a.P_6 ? 6 : a.P_7 ? 7 : null;
  }
  if (0 === a.indexOf("P_")) {
    var f = Number(a.substring(2)), b = (0,z.IM)(b);
    e = !0;
    rM(b, function(a) {
      e && a.type != f && (e = !1);
    }, this, !1);
    return e;
  }
  if (0 === a.indexOf("M_")) {
    var h = Number(a.substring(2)), b = (0,z.IM)(b);
    if ("M_3" === a) {
      var k = !1;
      rM(b, function(a, b, c) {
        k = k || MH(a, h, b, c);
      }, this, !1);
      return k;
    }
    e = !0;
    rM(b, function(a, b, c) {
      e && (0,z.sm)(a.ja(), (0,z.ym)(h, b, c)) && (e = !1);
    }, this, !1);
    return e;
  }
  throw Error("No handler for command " + a);
};
(0,z.p)(WO, z.VM);
WO.prototype.hb = (0,z.Tb)("FormattingShortcutsPlugin");
var dR = {u:"DO NOTHING", k:"M_3", b:"M_1", i:"M_2", 0:"P_1", 1:"P_2", 2:"P_3", 5:"CYCLE_BLOCKQUOTE", 6:"P_8", 7:"P_7"};
WO.prototype.sc = function(a) {
  return 73 == a.keyCode && a.ctrlKey && z.Li ? (a.preventDefault(), !0) : !1;
};
WO.prototype.Un = function(a, b, c) {
  if (!c) {
    return!1;
  }
  if ("k" == b && !a.shiftKey) {
    if (a = this.O.execCommand("M_3")) {
      b = this.O, c = (0,z.JO)(a), (c = MO(c) ? 0 > c.search(/:/) ? "http://" + c.replace(/^[\s\xa0]+/, "") : c : NO.test(c) ? "mailto:" + c : null) ? (a.Dc().href = c, (0,z.KO)(a), b.execCommand("updateLinkBubble")) : b.execCommand("link", a);
    }
    return!0;
  }
  return(b = dR[b]) ? (this.O.execCommand(b), z.Qe && a.stopPropagation(), !0) : !1;
};
(0,z.p)(XO, z.SM);
(0,z.p)(ZO, z.pA);
var YO = z.Qe || z.ce && (0,z.id)(532);
z.g = XO.prototype;
z.g.Vh = !1;
z.g.LC = 0;
z.g.xL = function(a) {
  $O(this, a);
};
z.g.wL = function(a) {
  aP(this, a);
};
z.g.tC = function(a) {
  this.Vh && this.dispatchEvent(new ZO("updateIme", a));
};
z.g.Qr = function(a) {
  if (!YO) {
    var b = this.Vh;
    b || 229 != a.keyCode ? b && 229 != a.keyCode ? bP(a) && aP(this, a) : b && this.dispatchEvent(new ZO("updateIme", a)) : $O(this, a);
  }
  bP(a) && (this.LC = a.keyCode);
};
z.g.DL = function(a) {
  !YO && z.ce && 229 == this.LC && this.Vh && aP(this, a);
};
z.g.AL = function(a) {
  if (this.Vh) {
    switch(a.keyCode) {
      case 13:
      ;
      case 9:
      ;
      case 27:
        aP(this, a);
    }
  }
};
z.g.C = function() {
  this.xf.Xb();
  this.Rw.Xb();
  this.VB = null;
  XO.w.C.call(this);
};
(0,z.p)(cP, z.VM);
z.g = cP.prototype;
z.g.hb = (0,z.Tb)("ImePlugin");
z.g.Ng = function(a) {
  return "active-ime" === a;
};
z.g.enable = function(a) {
  cP.w.enable.call(this, a);
  this.Dp = new XO(a.ba());
  this.Dp.qa("endIme", this.pG, !1, this);
};
z.g.disable = function(a) {
  (0,z.bd)(this.Dp);
  cP.w.disable.call(this, a);
};
z.g.queryCommandValue = function() {
  return this.Dp.Vh;
};
z.g.pG = function() {
  this.O.bl();
};
(0,z.p)(dP, z.VM);
dP.prototype.hb = (0,z.Tb)("KeyboardShortcutPlugin");
dP.prototype.Un = function(a, b, c) {
  return c && b in this.jv ? (this.jv[b].hl.call(this.jv[b].Cr), !0) : !1;
};
dP.prototype.Vk = function(a, b, c) {
  this.wp[a] = {hl:b, Cr:c};
};
dP.prototype.sc = function(a) {
  return a.keyCode in this.wp ? !!this.wp[a.keyCode].hl.call(this.wp[a.keyCode].Cr, a) : !1;
};
(0,z.p)(eP, z.VM);
z.g = eP.prototype;
z.g.hb = (0,z.Tb)("SelectionNormalizingPlugin");
z.g.enable = function(a) {
  eP.w.enable.call(this, a);
  var b = a.ba();
  this.ya.push((0,z.R)(b, "mouseup", this.zG, this));
  this.ya.push((0,z.R)(b, "mousedown", this.pk, this));
  (0,z.J)("variants.can_see_drop_caps") && a.qa("beforechange", this.ok, !1, this);
};
z.g.disable = function(a) {
  eP.w.disable.call(this, a);
  (0,z.$h)(this.ya);
  this.ya.length = 0;
  a.Ee("beforechange", this.ok, !1, this);
};
z.g.zG = function(a) {
  if (gP(a)) {
    var b = tJ(0, a.target), c = (0,z.wH)(window);
    c && (XH((0,z.ue)(c), (0,z.ve)(c), b.S, b.offset).select(), a.preventDefault());
  } else {
    (0,z.Wb)(this.Lz.bind(this, 40));
  }
};
z.g.pk = function(a) {
  if (gP(a)) {
    var b = tJ(0, a.target);
    (0,z.Fn)(function() {
      dJ(b.S, b.offset).select();
    });
  }
};
z.g.sc = function(a) {
  var b;
  switch(a.keyCode) {
    case 39:
    ;
    case 37:
    ;
    case 40:
    ;
    case 38:
      (0,z.Wb)(this.Lz.bind(this, a.keyCode));
      break;
    case 65:
      if (z.Li ? a.metaKey : a.ctrlKey) {
        a.preventDefault();
        var c = this.O;
        a = (0,z.IM)(c);
        b = a.getSelection();
        if (b.start.V == b.end.V && NL(b)) {
          b = b.start.V;
          var d = (0,z.eM)(a, b);
          if ((0,z.NH)(d)) {
            return lM(a, b, 0, b, d.text.length, !1), (0,z.LM)(c), !0;
          }
        }
        b = (0,z.dM)(a) - 1;
        lM(a, 0, 0, b, (0,z.eM)(a, b).text.length, !1);
        (0,z.LM)(c);
        return!0;
      }
    ;
  }
  AL(a) && (a = (0,z.IM)(this.O), b = a.getSelection(), NL(b) || lM(a, b.start.V, b.start.offset, b.end.V, b.end.offset, b.xe()));
  return!1;
};
z.g.Lz = function(a) {
  var b = this.O;
  if ((0,z.cO)(b)) {
    var b = (0,z.IM)(b), c = 39 === a || 40 === a;
    a = hP(this, b, c, !0);
    c = hP(this, b, c, !1);
    (a || c) && (0,z.kM)(b);
  }
};
z.g.ok = function() {
  var a = this.O, b = (0,z.cO)(a);
  if (b) {
    var c = (0,z.uw)(b.te(), a.ba()), d;
    if (d = c) {
      d = b.Ma(), d = (0,z.Dw)(c) ? (0,z.hi)(d, fP, c) : null;
    }
    d && b.isCollapsed() && (a = (0,z.tM)((0,z.IM)(a), c), -1 != a && (0,z.Wb)(this.xK.bind(this, a)));
  }
};
z.g.xK = function(a) {
  var b = (0,z.IM)(this.O), c = b.fc(a), c = (c = c && c.querySelector(".drop-cap-editable")) ? (0,z.mH)(c) : "";
  if (!(0,z.Fa)(c)) {
    var d = (0,z.eM)(b, a);
    d.text = c + d.text;
    (0,z.gM)(b, a);
    (0,z.kM)(b);
  }
};
(0,z.p)(jP, z.VM);
jP.prototype.hb = (0,z.Tb)("TypeOverPlugin");
jP.prototype.sc = function(a) {
  var b = this.O, c = (0,z.cO)(b);
  AL(a) && !a.ctrlKey && c && !c.isCollapsed() && (a = (0,z.IM)(b).getSelection(), NL(a) && a.start.V === a.end.V || (0,z.GM)(new z.MM(!0, 1), b));
  return!1;
};
(0,z.p)(kP, z.VM);
kP.prototype.hb = (0,z.Tb)("UndoRedoPlugin");
kP.prototype.Ng = function(a) {
  return "+undo" == a || "+redo" == a;
};
kP.prototype.execCommand = function(a) {
  "+undo" == a ? (0,z.IM)(this.O).dm() : "+redo" == a && (0,z.IM)(this.O).hs();
  return!0;
};
kP.prototype.Un = function(a, b, c) {
  if (!c) {
    return!1;
  }
  c = this.O;
  var d = null;
  "y" == b || "z" == b && a.shiftKey ? d = "+redo" : "z" == b && (d = "+undo");
  return d ? (c.execCommand(d), a.preventDefault(), !0) : !1;
};
(0,z.p)(z.lP, z.Kj);
z.g = z.lP.prototype;
z.g.oa = null;
z.g.pm = null;
z.g.qm = null;
z.g.oz = !0;
z.g.Hi = !0;
z.g.fg = function(a) {
  this.ep = a;
};
z.g.isEnabled = function() {
  return this.Hi;
};
z.g.FD = function(a) {
  a != this.Hi && this.oa && (this.oa.kc.contentEditable = a);
  this.Hi = a;
};
z.g.Vk = function(a, b, c) {
  this.LA.Vk(a, b, c);
};
z.g.sa = function(a, b) {
  if (this.oa) {
    if (b) {
      throw Error("Can only prepend plugins before editor is activated");
    }
    this.oa.sa(a);
  } else {
    b ? this.dn.unshift(a) : this.dn.push(a);
  }
};
z.g.select = function() {
  (0,z.Ue)((0,z.Le)(this.oa.ba()), void 0).select();
};
z.g.execCommand = function(a, b) {
  this.oa.execCommand.apply(this.oa, arguments);
};
z.g.queryCommandValue = function(a, b) {
  return this.oa.queryCommandValue.apply(this.oa, arguments);
};
z.g.ua = function() {
  if (!this.pm || this.oa.Bl) {
    var a;
    if (!this.qm || this.oa.Bl) {
      var b = this.oa.ba();
      a = (0,z.IM)(this.oa);
      (0,z.XL)(a);
      (0,z.jM)(a);
      a = z.Hl.ja((0,z.Pl)(a.Lb));
      b = nJ(b, mP(this).sections);
      if (!a.Ob(b)) {
        throw new ZL("richText model");
      }
      for (var b = a.qc(), c = 0;c < b.length;c++) {
        var d = (0,z.pm)(b[c]), e = d;
        8 != e.type && (KI(e, z.TQ), KI(e, z.UQ));
        e = d;
        (0,z.tm)(e, 4);
        (0,z.tm)(e, 5);
        b[c] = d.Cb();
      }
      TI(b.concat(a.gc() || []));
      b = a.qc() || [];
      c = (0,z.em)(a);
      for (d = 0;d < b.length;d++) {
        var f = b[d], e = f.g(), f = f.getMetadata() && f.getMetadata().$a();
        if (!(e = 4 == e && !f)) {
          var f = d, h = a, e = h.qc(), k = h.qc()[f];
          e = PH(k.g(), k.rc()) ? (h = h.gc()) ? (f = (0,z.Xg)(h, f)) && (0,z.EI)(f) ? 1 < (0,z.Yg)(h, h.indexOf(f), e.length) : !0 : !0 : !1;
        }
        e && (e = c, f = (0,z.yl)(2).nb(d), (0,z.Dl)((0,z.zl)(f), e), d--);
      }
      for (;b.length && 5 == (0,z.Ya)(b).g();) {
        d = c, e = (0,z.yl)(2).nb(b.length - 1), (0,z.Dl)((0,z.zl)(e), d);
      }
      this.qm = a;
    }
    a = this.qm;
    if (this.Qi) {
      a = (0,z.gO)(this.oa).replace(/<br>/g, "\n");
      if (-1 != a.indexOf("\x3c")) {
        throw Error("Sanitization plugin failure");
      }
      a = ZH(a);
    } else {
      a = (0,z.Mm)(a, z.vg, mP(this));
    }
    this.pm = a;
  }
  return this.pm;
};
z.g.C = function() {
  if (this.oa) {
    if (this.oa.Ij != RN) {
      var a = this.oa;
      if (a.Ij == RN) {
        throw Error("makeUneditable: Field is already uneditable");
      }
      a.Yd && EN(a.Yd);
      EN(a.Ln);
      EN(a.vx);
      a.execCommand("clearlorem");
      lO(a);
      var b = a.kc;
      iO == b.id && (iO = null);
      XN(a);
      if ((0,z.oa)(null)) {
        z.w && (0,z.hJ)(b);
        b.innerHTML = null;
        var c = a.kc;
        c.removeAttribute("contentEditable");
        c.removeAttribute("g_editable");
        c.removeAttribute("role");
        a.id ? c.id = a.id : c.removeAttribute("id");
        c.className = a.TM || "";
        var d = a.cssText;
        d ? (0,z.yd)(c, {style:d}) : c.removeAttribute("style");
        (0,z.oa)(a.lD) && ((0,z.uf)(c, "lineHeight", a.lD), a.lD = null);
      }
      a.zD();
      WN(a);
      z.ce && b.blur();
      a.execCommand("updatelorem");
      a.dispatchEvent("unload");
      this.oa.kc.contentEditable = !1;
    }
    this.oa.Xb();
    this.oa = null;
  }
  z.lP.w.C.call(this);
};
z.g.be = function() {
  return!1;
};
z.g.focus = function(a) {
  if (a) {
    try {
      uL(this.oa.ba().lastChild, !1);
    } catch (b) {
      this.oa.focus();
    }
  } else {
    this.oa.focus();
  }
};
z.g.Eo = function(a) {
  this.oa && this.oa.ba() && (this.oa.ba().style.visibility = a ? "" : "hidden");
  this.oz = a;
};
z.g.ib = z.AB;
z.g.Cl = z.AB;
z.g.H = function() {
  z.lP.w.H.call(this);
  if (!this.oa) {
    if (!window.document.getElementById(this.fz)) {
      throw Error("Element must be in DOM before editor is activated");
    }
    this.oa = new HO(this.fz);
    this.oa.fg(this.ep);
    var a = this.ib();
    this.oa.$q = a;
    a = this.Cl();
    this.oa.mA = a;
    this.oa.Lx = !0;
    this.oa.sa(new kP);
    this.oa.sa(this.LA);
    for (a = 0;a < this.dn.length;a++) {
      this.oa.sa(this.dn[a]);
    }
    this.oa.sa(new jP);
    this.oa.qa(z.NN, this.cq, !1, this);
    if (this.Hi) {
      a = this.oa;
      a.Ij = 1;
      var b = a.kc;
      a.nodeName = b.nodeName;
      a.TM = b.className;
      a.cssText = b.style.cssText;
      b.className += " editable";
      a.RC(void 0);
      bM((0,z.IM)(this.oa));
    }
    this.dn.length = 0;
    a = (0,z.mi)(this.oa.ba());
    a != window.document.body && z.ce && this.bz.qa(a, ["keydown", "keypress", "keyup"], this.GJ);
  }
  this.Eo(this.oz);
};
z.g.GJ = function(a) {
  if (a.target === a.currentTarget) {
    var b = (0,z.cO)(this.oa);
    (b = b && (0,z.YH)(b)) && (0,z.Td)(this.oa.ba(), b) && ("keydown" === a.type ? this.oa.Qr(a) : "keypress" === a.type ? this.oa.pC(a) : "keyup" === a.type && this.oa.qC(a));
  }
};
z.g.Gb = function(a) {
  this.Qi && (a = (0,z.Ha)(a).replace(/\n/g, "\x3cbr\x3e"));
  this.oa.xx(!1, a, !1, !1);
  this.qm = this.pm = null;
};
z.g.cq = function() {
  this.qm = this.pm = null;
  this.X("change");
};
z.g.Ev = z.BB;
z.g.Yr = (0,z.n)(220);
(0,z.p)(z.nP, z.VM);
z.nP.prototype.hb = (0,z.Tb)("CancelEnterPlugin");
z.nP.prototype.sc = function(a) {
  return 13 === a.keyCode || 77 === a.keyCode && a.ctrlKey ? (a.preventDefault(), !0) : !1;
};
(0,z.p)(z.pP, z.VM);
z.pP.prototype.hb = (0,z.Tb)("SanitizationPlugin");
z.pP.prototype.sD = function(a) {
  if (this.Fu == z.CC) {
    var b = window.document.createElement("div");
    b.innerHTML = a;
    oP(b, this.Fu);
    a = b.innerHTML;
  }
  var b = {zs:this.O.ib(), ys:!1}, c = window.document.createElement("div");
  c.innerHTML = a;
  return aM(c, b).ba().innerHTML;
};
z.pP.prototype.Uv = function(a) {
  oP(a, this.Fu);
};
(0,z.p)(z.qP, z.AO);
z.g = z.qP.prototype;
z.g.hb = (0,z.Tb)("TypeaheadPlugin");
z.g.enable = function(a) {
  z.qP.w.enable.call(this, a);
  this.ya = [(0,z.R)(a.ba(), "click", this.vp, this)];
  this.ac = window.document.createElement("div");
  this.ac.className = "typeahead popover popover-bottom";
  this.Bz = [(0,z.R)(this.ac, "click", this.vG, this), (0,z.R)(this.ac, "mouseover", this.xG, this), (0,z.R)(this.ac, "mouseout", this.wG, this)];
};
z.g.disable = function(a) {
  (0,z.Nd)(this.ac);
  (0,z.$h)(this.ya);
  (0,z.$h)(this.Bz);
  this.ac = null;
  this.L = "";
  this.Lj = null;
  z.qP.w.disable.call(this, a);
};
z.g.sc = function(a) {
  if (this.O.queryCommandValue("active-ime")) {
    return!1;
  }
  this.UA = !!~[40, 38, 9, 13, 27].indexOf(a.keyCode);
  tP(this, a);
  return!1;
};
z.g.Rr = function(a) {
  if (this.UA || this.O.queryCommandValue("active-ime")) {
    return!1;
  }
  tP(this, a);
  return!1;
};
z.g.Bw = function(a) {
  if (this.O.queryCommandValue("active-ime")) {
    return!1;
  }
  switch(a.keyCode) {
    case 40:
    ;
    case 38:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
      break;
    case 9:
    ;
    case 13:
      if (!this.jf) {
        break;
      }
      rP(this);
      break;
    case 27:
      if (!this.jf) {
        break;
      }
      sP(this);
      break;
    default:
      a = this.O, (0,z.cO)(a).isCollapsed() && (0,z.GM)(YM(this.Xr), a), a = (0,z.YH)((0,z.cO)(a)), "token" != a.getAttribute("rel") ? sP(this) : this.Lj != a && (this.Lj = a, this.L = (0,z.yL)(a), !this.L || 2 > this.L.length ? sP(this) : this.$u = (0,z.q)(this.qx(), this.mJ, this));
  }
  return!1;
};
z.g.Aw = function() {
  this.zt = !0;
};
z.g.Pr = function() {
  this.zt = !1;
  !this.eu && this.jf && sP(this);
};
z.g.fx = "left";
z.g.qx = function() {
  return this.ea.get(z.cH.R({}, {q:this.L.substring(1)}), {na:!0});
};
z.g.vp = function(a) {
  "A" == a.target.tagName && (a.preventDefault(), a.stopPropagation());
};
z.g.vG = function(a) {
  a.stopPropagation();
  a.preventDefault();
  rP(this);
  return!1;
};
z.g.xG = function(a) {
  this.eu = !0;
  var b = this.ac.querySelector(".active");
  b && (0,z.u)(b, "active");
  a.target != this.ac && (a = (0,z.Yd)(a.target, null, "typeahead-item")) && (0,z.t)(a, "active");
};
z.g.wG = function(a) {
  (0,z.Td)(this.ac, a.relatedTarget) || (this.eu = !1, !this.zt && this.jf && sP(this));
};
z.g.mJ = function(a) {
  a = a.value;
  if (!a.length) {
    return sP(this);
  }
  this.xc(a.slice(0, 8));
};
z.g.xc = function(a) {
  this.ac.innerHTML = (0,z.K)(this.view, {items:a});
  this.Mq();
};
z.g.Mq = function() {
  if (this.Lj && (0,z.Td)(this.O.ba(), this.Lj)) {
    this.ac.parentNode || this.ux.appendChild(this.ac);
    var a = (0,z.qi)(this.Lj), b = "left" == this.fx ? 6 : this.Lj.offsetWidth / 2;
    this.ac.style.top = a.top + (0,z.ni)(this.ux).top + a.height - 5 + "px";
    this.ac.style.left = a.left - this.ac.offsetWidth / 2 + b - (0,z.qi)(this.ux).left + "px";
    uP(this);
    this.jf = !0;
  } else {
    sP(this);
  }
};
(0,z.p)(vP, z.lP);
z.g = vP.prototype;
z.g.dv = !1;
z.g.Ei = "";
z.g.ln = 0;
z.g.Cl = z.BB;
z.g.Dw = function() {
  return this.Ei.trim() != this.ua().trim();
};
z.g.Ta = function() {
  return this.pH;
};
z.g.clear = function() {
  this.Gb("");
};
z.g.save = function() {
  this.ua().length <= this.Ke && this.Lf();
};
z.g.fw = function() {
  this.Sv() && (0,window.confirm)(this.rw()) ? ((0,z.r)(this.Dd.Hd(this.Mr()), (0,z.oq)(this.W, "Sorry, your attempt to delete failed. Please try again.")), this.X("delete")) : wP(this);
};
z.g.C = function() {
  (0,window.clearTimeout)(this.ln);
  vP.w.C.call(this);
};
z.g.H = function() {
  function a(a) {
    a.stopPropagation();
  }
  vP.w.H.call(this);
  this.Ei = this.ua();
  this.Gb(this.Ei);
  this.Vk(13, this.nu, this);
  this.Vk(27, this.ou, this);
  this.oa.qa("blur", this.mu, !1, this);
  var b = this.oa.ba();
  (0,z.R)(b, "keydown", a);
  (0,z.R)(b, "keyup", a);
  (0,z.R)(b, "keypress", a);
};
z.g.Ug = function(a) {
  return a;
};
z.g.Lf = function() {
  if (this.isEnabled()) {
    var a = this.ua().trim();
    if (a) {
      this.FD(!1);
      var b = this.Mr(), c = this.uw();
      (0,z.Cc)((0,z.r)((0,z.q)(this.Dd.send(c, b, this.vw(a), {na:!0}), this.pI, this), (0,z.oq)(this.W, "Saving failed. You may be having connectivity issues or notes might be disabled on this post. Please try again.")), this.FD.bind(this, !0));
    } else {
      (0,z.Fn)(this.fw, this);
    }
  }
};
z.g.pI = function(a) {
  a = (0,z.al)(a.value, a.references);
  this.X("save", this.Ug(a));
};
z.g.nu = function(a) {
  if (this.un && this.un.jf) {
    return!1;
  }
  a.shiftKey || (a.preventDefault(), this.save());
  return!0;
};
z.g.ou = function(a) {
  if (this.un && this.un.jf) {
    return!1;
  }
  a.preventDefault();
  wP(this);
  return!1;
};
z.g.mu = function() {
  this.dv && (this.ua().length >= this.Ke ? (0,window.confirm)(this.ww()) ? wP(this) : this.focus() : this.ln = (0,window.setTimeout)(this.Lf.bind(this), 100));
};
(0,z.p)(xP, vP);
z.g = xP.prototype;
z.g.Ls = null;
z.g.ey = null;
z.g.Lt = null;
z.g.Kt = null;
z.g.dz = null;
z.g.rw = function() {
  return VP();
};
z.g.ww = function() {
  return WP();
};
z.g.Sv = function() {
  return!!this.Ta();
};
z.g.Ug = function(a) {
  return{id:a.noteId, author:(0,z.J)("currentUser"), postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, replies:[], tB:"just now", newHighlight:a.newHighlight || null, highlightId:a.highlightId || null};
};
z.g.uw = function() {
  return this.Ta() ? "put" : "post";
};
z.g.Mr = function() {
  return this.Ta() ? z.AG.R({postId:this.Z, noteId:this.Ta()}) : z.yG.R({postId:this.Z});
};
z.g.vw = function(a) {
  a = {content:a};
  this.Ls && (a.anchor = this.Ls, a.anchorContent = this.ey);
  null != this.Lt && null != this.Kt && (a.highlightStart = this.Lt, a.highlightEnd = this.Kt, a.highlightContent = this.dz);
  return a;
};
(0,z.p)(GP, z.Kj);
GP.prototype.wH = function(a) {
  if (a = (0,z.vO)(this.je, a.target)) {
    var b = (0,z.rO)(this.je, a), c = this.md[a];
    c && c !== this.qk && b && !gI(b, !1) && (this.qk && (0,z.u)(this.qk, "notes-marker-highlighted"), (0,z.t)(c, "notes-marker-highlighted"), this.qk = c, (0,z.bd)(this.bf), this.bf = new z.fA("mouseover", [b, c]), this.bf.H(), (0,z.Cc)(this.bf.ma.zb(), function() {
      (0,z.u)(c, "notes-marker-highlighted");
      this.qk === c && (this.qk = null);
    }, this));
  }
};
GP.prototype.H = function() {
  GP.w.H.call(this);
  z.HC || (0,z.uO)(this.je).forEach(function(a) {
    this.qa(a, "mouseover", this.wH);
  }, this);
};
GP.prototype.C = function() {
  (0,z.bd)(this.bf);
  (0,z.Nd)(this.Li);
  this.md = this.Li = null;
  GP.w.C.call(this);
};
(0,z.p)(MP, z.Ij);
z.g = MP.prototype;
z.g.load = function() {
  this.me || (this.me = (0,z.r)((0,z.q)(this.Dd.get(z.zG.R({postId:this.Z}), {na:!0, background:!0}), this.nJ, this), z.Cj));
  return this.me.zb();
};
z.g.Ye = function() {
  return this.ym;
};
z.g.Lg = function(a) {
  var b = a && a.getAttribute("name");
  if (!b || !a) {
    return null;
  }
  var c = this.pA[b];
  return c && !this.Jm ? c : this.pA[b] = (0,z.Kw)(a);
};
z.g.Pb = function(a, b) {
  var c = (0,z.KP)(this, b);
  return(0,z.qk)(c, "id", a);
};
z.g.iC = function() {
  return(0,z.KP)(this, "vote");
};
z.g.nJ = function(a) {
  var b = a.references.User;
  this.yg = b[a.post.creatorId];
  var c = a.value;
  if (c) {
    for (var d = 0;d < c.length;d++) {
      var e = c[d];
      if ("HIDDEN" != e.state) {
        var f = e.replies, h = b;
        if (f) {
          for (var k = 0;k < f.length;k++) {
            var l = f[k];
            l.author = h[l.author];
          }
        }
        f = e;
        h = b;
        (0,z.KP)(this, e.anchor).add({id:f.noteId, author:h[f.author], postId:this.Z, highlightId:f.highlightId, anchor:f.anchor, noteId:f.noteId, content:f.content, state:f.state, createdAt:f.createdAt, replies:f.replies || []});
      }
    }
  }
  if (a = a.highlights) {
    for (b = 0;b < a.length;b++) {
      this.xp[a[b].id] = new z.pO(new z.pO(a[b]));
    }
  }
  this.ym = !0;
};
z.g.C = function() {
  this.me.cancel();
  MP.w.C.call(this);
};
(0,z.p)(RP, vP);
z.g = RP.prototype;
z.g.rw = function() {
  return "Are you sure you want to delete this reply?";
};
z.g.ww = function() {
  return "Your reply is too long, do you want to abandon your changes?";
};
z.g.Sv = function() {
  return!!this.Cq;
};
z.g.Ug = function(a) {
  return{id:a.replyId, author:(0,z.J)("currentUser"), postId:a.postId, noteId:a.noteId, replyId:a.replyId, content:a.content, createdAt:a.createdAt, tB:"just now"};
};
z.g.uw = function() {
  return this.Cq ? "put" : "post";
};
z.g.Mr = function() {
  return this.Cq ? z.DG.R({postId:this.Z, noteId:this.Ta(), replyId:this.Cq}) : z.CG.R({postId:this.Z, noteId:this.Ta()});
};
z.g.vw = function(a) {
  return{content:a};
};
(0,z.p)(SP, z.qe);
SP.prototype.yo = function() {
  if (!this.pn) {
    return null;
  }
  var a = UP(this.pn);
  if (!a) {
    return null;
  }
  var b = UP(this.xt);
  return b ? (0,z.Ye)(a.S, a.offset, b.S, b.offset) : null;
};
(0,z.p)(z.XP, z.v);
z.g = z.XP.prototype;
z.g.bb = null;
z.g.Pe = null;
z.g.pe = null;
z.g.$f = null;
z.g.ei = 0;
z.g.C = function() {
  fQ(this);
  (0,z.mQ)(this, null);
  this.es.Ba("change", this.Yy, this);
  this.Jz && (0,z.$h)(this.Jz);
  (0,z.$h)(this.rb);
  this.rb.length = 0;
  (0,z.Gi)(this.Fc.Li);
  (0,z.Gi)(this.Nb);
  (0,z.Bi)("cancel-notes-vote");
  (0,z.Bi)("save-notes-vote");
  (0,z.Nd)(this.Nb);
  this.data.Xb();
  this.Jn && this.Jn.cancel();
  (0,z.bd)(this.Fc);
  this.Jz = this.Jn = this.data = this.Nb = this.anchors = this.Fc = null;
  (0,z.t)(window.document.documentElement, "mobile-notes-variant");
  z.XP.w.C.call(this);
};
z.g.Yy = function(a) {
  if ("vote" == a && (0,z.J)("variants.enable_recommend_notes")) {
    if (this.es.get("vote")) {
      this.bx();
    } else {
      if (a = NP(this.data)) {
        (0,z.bQ)(this, z.lD, a), (0,z.nk)(a);
      }
      this.Dj();
    }
  }
};
z.g.qI = function(a) {
  this.data.YC = a.content;
  aQ(this, a);
  YP(this);
};
z.g.rI = function(a) {
  cQ(this, a);
  YP(this);
};
z.g.dA = function() {
  if (this.Ze.Zh()) {
    return this.Dj();
  }
  this.al.confirm("Are you sure you want to abandon this note?").F(z.bF, this.Dj, this);
};
z.g.sI = function() {
  this.Ze && this.Ze.save();
};
z.g.Dj = function() {
};
z.g.bx = function() {
};
z.g.Xw = function() {
};
z.g.$w = function() {
};
z.g.no = function(a) {
  aQ(this, a);
};
z.g.ax = function() {
};
z.g.fD = function() {
};
z.g.Mh = function() {
};
z.g.bC = function() {
};
z.g.$F = function(a) {
  a = a.cb();
  a.rj = ZI(a.content, {rel:"nofollow", target:""});
  a.rj = rL(a.rj);
  for (var b = 0;b < a.replies.length;++b) {
    a.replies[b].rj = ZI(a.replies[b].content, {rel:"nofollow", target:""}), a.replies[b].rj = rL(a.replies[b].rj);
  }
  return a;
};
z.g.HI = function(a) {
  (0,z.kQ)(this, a.value);
};
z.g.BI = function(a) {
  (a = this.Wb["reply_" + a.value]) && a.save();
};
z.g.DH = function(a) {
  var b = this.Wb["reply_" + a.value];
  b && wP(b);
  (a = (0,z.Yd)(a.target, null, "notes-note")) && (0,z.u)(a, "notes-show-reply-editor");
};
z.g.WH = function(a) {
  function b() {
    (0,z.u)(h, "notes-edit-mode");
    (0,z.u)(f, "notes-reply-edit-mode");
    (0,z.bd)(k);
    delete this.Wb["reply_" + e];
  }
  var c = a.value.split(","), d = c[0], e = c[1], f = (0,z.Yd)(a.target, null, "notes-note"), h = (0,z.Yd)(a.target, null, "notes-reply");
  (0,z.t)(h, "notes-edit-mode");
  (0,z.u)(f, "notes-show-reply-editor");
  (0,z.t)(f, "notes-reply-edit-mode");
  a = h.querySelector(".notes-content");
  var k = new RP(this.Co, a, this.postId, d, e);
  k.F("save", function(a) {
    for (var c = this.data.Pb(d, this.data.wa), f = c.get("replies"), h = 0;h < f.length;h++) {
      if (f[h].replyId == e) {
        c.add("replies", a, h);
        break;
      }
    }
    (0,z.bQ)(this, z.oD, c, {replyId:e});
    b.call(this);
  }, this);
  k.F("delete", function() {
    for (var a = this.data.Pb(d, this.data.wa), c = a.get("replies"), f = 0;f < c.length;f++) {
      if (c[f].replyId == e) {
        a.removeItem("replies", f);
        break;
      }
    }
    (0,z.bQ)(this, z.pD, a, {replyId:e});
    b.call(this);
  }, this);
  k.F("cancel", function() {
    var a = this.data.Pb(d, this.data.wa);
    FH(this.$f, a);
    b.call(this);
  }, this);
  k.F("change", this.Mh, this);
  k.focus(!0);
  this.Wb["reply_" + e] = k;
};
z.g.PH = function(a) {
  (a = this.Wb["reply_" + a.value]) && a.fw();
};
z.g.zH = function(a) {
  a = a.get("id");
  this.Wb[a] && ((0,z.bd)(this.Wb[a]), delete this.Wb[a]);
  this.Wb["reply_" + a] && ((0,z.bd)(this.Wb["reply_" + a]), delete this.Wb["reply_" + a]);
};
z.g.vH = function(a, b) {
  (0,z.u)(b, "notes-show-reply-editor");
  b.setAttribute("data-note-id", (0,z.lk)(a, "id"));
};
z.g.yH = function(a) {
  (0,z.r)(gQ(this, this.data.Pb(a.value, this.data.wa), "PUBLIC"), (0,z.oq)(this.al, "Sorry, we couldn’t approve the note. Please try again later and make sure you are logged in."));
};
z.g.QI = function(a) {
  (0,z.r)(gQ(this, this.data.Pb(a.value, this.data.wa), "NEW"), (0,z.oq)(this.al, "Sorry, we couldn’t unapprove the note. Please try again later and make sure you are logged in."));
};
z.g.VH = function(a) {
  function b() {
    (0,z.u)(d, "notes-edit-mode");
    (0,z.bd)(f);
    delete this.Wb[c];
  }
  var c = a.value, d = (0,z.Yd)(a.target, null, "notes-note");
  (0,z.t)(d, "notes-edit-mode");
  (0,z.u)(d, "notes-show-reply-editor");
  var e = d.querySelector(".notes-content"), f = new xP(this.Co, e, this.postId, a.value);
  f.F("save", function(a) {
    cQ(this, a);
    b.call(this);
  }, this);
  f.F("delete", function() {
    var a = this.data.Pb(c, this.data.wa);
    (0,z.bQ)(this, z.lD, a);
    (0,z.nk)(a);
    b.call(this);
  }, this);
  f.F("cancel", function() {
    var a = this.data.Pb(c, this.data.wa);
    FH(this.$f, a);
    b.call(this);
  }, this);
  f.F("change", this.Mh, this);
  f.focus(!0);
  this.Wb[c] = f;
};
z.g.AI = function(a) {
  (a = hQ(this, a)) && a.save();
};
z.g.CH = function(a) {
  (a = hQ(this, a)) && wP(a);
};
z.g.OH = function(a) {
  (a = hQ(this, a)) && a.fw();
};
z.g.oI = function(a) {
  for (var b = 0;b < a.length;b++) {
    (0,z.LP)(this.Fc, (0,z.lk)(a[b], "anchor"));
  }
};
z.g.bI = function(a) {
  a = a.value;
  this.Pe == a && (this.Pe = null);
  (0,z.r)(gQ(this, this.data.Pb(a, this.data.wa), "HIDDEN"), (0,z.oq)(this.al, "Sorry, we couldn’t hide the note. Please try again later and make sure you are logged in."));
};
z.g.nI = function(a) {
  a.F("add", this.oI, this);
  a.F("change", this.fD, this);
  a.F("remove", this.$w, this);
};
z.g.wm = function() {
  var a = window.document.createElement("div");
  a.className = "notes-container";
  a.innerHTML = (0,z.K)(CP);
  this.gx.appendChild(a);
  return a;
};
z.g.L = function(a) {
  return this.Nb.querySelector(a);
};
z.g.Xj = function() {
  JP(this.Fc);
  this.Fc.md[this.data.wa] || (0,z.mQ)(this, null);
};
z.g.hD = function(a) {
  this.Ax(a);
};
z.g.Ax = function(a) {
  (a = (0,z.Yd)(a.target, null, "notes-replies")) && (0,z.u)(a, "notes-replies-hidden");
};
z.g.yn = function() {
  var a = this.data.wa, b = this.L(".notes-items"), a = (0,z.KP)(this.data, a), b = new z.oz(b, a, DP);
  b.Ut = "notes-note";
  this.$f = (0,z.Up)(b.Yl(this.$F), {canAdminister:this.canAdminister, hx:this.data.yg, ei:this.ei}, "note");
  this.$f.F("before-clear", this.zH, this);
  this.$f.F("after-draw", this.vH, this);
  this.$f.H();
  (0,z.HP)(this.Fc, this.data.wa, !0);
  (0,z.t)(this.screen.N, "notes-list-visible");
  (0,z.Kk)(z.iD);
};
z.g.bw = function() {
  (0,z.Ds)(this.Wk, "");
  (0,z.u)(this.screen.N, "notes-list-visible");
  (0,z.ww)(this.gj, function(a) {
    (0,z.u)(a, "grid-breaking-slide");
  });
};
z.g.getSelection = function() {
  var a = (0,z.wH)();
  if (!a || a.isCollapsed()) {
    return null;
  }
  var b = (0,z.YH)(a), c = (0,z.tO)(this.anchors, b);
  if (!c) {
    return null;
  }
  c = (b = (0,z.hi)(b, z.RI, c)) && this.data.Lg(b);
  if (!b) {
    return null;
  }
  var d = (0,z.uJ)(a, b, !0), e = (0,z.uJ)(a, b, !1);
  return-1 == d || -1 == e ? null : new z.QP(a, b, new z.pO({anchor:b.getAttribute("name"), startIndex:d, endIndex:e, content:c.text.substring(d, e)}));
};
z.g.eI = function() {
  this.mr((0,z.pQ)());
};
(0,z.p)($P, vP);
z.g = $P.prototype;
z.g.rw = function() {
  return VP();
};
z.g.ww = function() {
  return WP();
};
z.g.Sv = function() {
  return!!this.Ta();
};
z.g.Ug = function(a) {
  return{id:a.noteId, author:(0,z.J)("currentUser"), postId:a.postId, anchor:a.anchor, noteId:a.noteId, content:a.content, state:a.state, createdAt:a.createdAt, tB:"just now"};
};
z.g.uw = function() {
  return this.Ta() ? "put" : "post";
};
z.g.Mr = function() {
  return this.Ta() ? z.AG.R({postId:this.Z, noteId:this.Ta()}) : z.yG.R({postId:this.Z});
};
z.g.vw = function(a) {
  return{content:a, anchor:"vote"};
};
z.g.Zh = function() {
  return!this.ua().trim();
};
(0,z.p)(z.rQ, z.lP);
z.rQ.prototype.Cl = z.BB;
z.g = z.sQ.prototype;
z.g.ua = function() {
  return this.$a() ? z.Hl.ja(this.yf) : null;
};
z.g.$a = function() {
  return this.yf.$a();
};
z.g.Jd = function() {
  return this.yf.Jd();
};
z.g.Nr = function(a) {
  return(0,z.K)(z.Qj, tQ(this, a));
};
z.g.Aj = function(a) {
  return this.Nr(this.yf, a);
};
z.g.lc = function(a) {
  this.yf.lc(a);
};
z.g.oi = function(a) {
  this.yf.oi(a);
};
z.g.Cf = function(a) {
  this.yf.Cf(a);
};
z.g.qi = (0,z.n)(156);
z.g = z.vQ.prototype;
z.g.fe = function(a) {
  a = a || "";
  this.ia.lc(a);
  a ? (wQ(this), this.element.setAttribute("data-image-id", a), this.kp && this.kp.removeAttribute("data-scroll-disabled")) : (this.element.removeAttribute("data-image-id"), this.kp && this.kp.setAttribute("data-scroll-disabled", !0));
  var b = this.ia.Aj();
  return(0,z.q)(this.kb.reset(), function() {
    zQ(this, b);
  }, this);
};
z.g.Eo = function(a) {
  this.element.style.display = a ? "" : "none";
};
z.g.kN = function() {
  yQ(this, "cover" == this.ia.Jd() ? "contain" : "cover");
};
z.g.kC = function() {
  var a = "." + this.ia.Jd() + "-edit .picker-target";
  return this.element.querySelector(a);
};
z.g.Bx = function(a, b) {
  a.src = b;
  a.style.display = "";
};
z.g.Fw = function(a) {
  a.style.display = "none";
};
(0,z.p)(CQ, z.Kj);
z.g = CQ.prototype;
z.g.H = function() {
  CQ.w.H.call(this);
  this.qa(this.pa, "dragstart", (0,z.kL)(this.TH));
  this.qa(this.pa, "dragenter", (0,z.kL)(this.RH));
  this.qa(this.pa, "dragleave", (0,z.kL)(this.SH));
  this.qa(this.pa, "dragexit", (0,z.kL)(z.ea));
  this.qa(this.pa, "dragover", (0,z.kL)(z.ea));
  this.qa(this.pa, "drop", (0,z.kL)(this.UH));
};
z.g.TH = function(a) {
  a.FP = "copy";
};
z.g.RH = function(a) {
  (0,z.t)(a.currentTarget, "image-picker-dragover");
};
z.g.SH = function(a) {
  var b = (0,z.tf)((0,z.qi)(a.currentTarget));
  (a.x < b.left || a.clientX > b.right || a.y > b.bottom || a.clientY < b.top) && (0,z.u)(a.currentTarget, "image-picker-dragover");
};
z.g.UH = function(a) {
  (0,z.u)(a.currentTarget, "image-picker-dragover");
  a.dataTransfer && a.dataTransfer.files && a.dataTransfer.files[0] && this.Mc.start(a.dataTransfer.files[0]);
};
var eR = function(a) {
  var b = !1, c;
  return function() {
    b || (c = a(), b = !0);
    return c;
  };
}(function() {
  if (z.w) {
    return(0,z.id)("10.0");
  }
  var a = window.document.createElement("div"), b = (0,z.qf)();
  a.innerHTML = '\x3cdiv style\x3d"' + (b ? b + "-transition:opacity 1s linear;" : "") + 'transition:opacity 1s linear;"\x3e';
  return "" != (0,z.xf)(a.firstChild, "transition");
});
(0,z.p)(DQ, z.v);
DQ.prototype.C = function() {
  this.Dg && (this.Dg.cancel(), (0,z.u)(this.gk, this.Wq));
  this.Dg = null;
};
DQ.prototype.DF = function() {
  (0,z.$h)(this.wv);
  this.Dg = this.wv = null;
};
DQ.prototype.start = function() {
  this.Dg = (0,z.Cc)(new z.wc, this.DF, this);
  if (!eR()) {
    return this.Dg.Ea(), this.Dg;
  }
  this.wv = (0,z.R)(this.rv, z.Ho, this.vu, this);
  this.tq ? ((0,z.t)(this.gk, this.tq), (0,z.ri)(this.gk), (0,z.Wc)(this.gk, this.tq, this.Wq)) : (0,z.t)(this.gk, this.Wq);
  return this.Dg;
};
DQ.prototype.vu = function(a) {
  a.target == this.rv && ((0,z.u)(this.gk, this.Wq), this.Dg.Ea());
};
(0,z.p)(GQ, z.Ij);
var HQ = "pending-image";
GQ.prototype.reset = function() {
  return this.ia.$a() ? this.set("has-image") : this.set("no-image", !0);
};
GQ.prototype.set = function(a, b) {
  (0,z.Cc)(this.Vs, function() {
    if (this.kb != a) {
      var b = (0,z.Jc)();
      this.X("change", a, this.kb, b);
      return b;
    }
  }, this);
  b ? ((0,z.Wc)(this.pa, this.kb, a), this.kb = a) : (0,z.q)(this.Vs, function() {
    (0,z.Wc)(this.pa, this.kb, a);
    this.kb = a;
  }, this);
  return this.Vs.zb();
};
GQ.prototype.get = function() {
  return this.kb;
};
GQ.prototype.be = function() {
  return this.kb === HQ || "uploading-image" === this.kb;
};
(0,z.p)(IQ, z.Kj);
IQ.prototype.H = function() {
  IQ.w.H.call(this);
  this.kb.F("change", this.TA, this);
  this.Pa.F(z.fR, this.vy, this);
};
IQ.prototype.ka = function() {
  IQ.w.ka.call(this);
  this.kb.Ba("change", this.TA, this);
  this.Pa.Ba(z.fR, this.vy, this);
};
IQ.prototype.TA = function(a, b, c) {
  var d = z.Hl.ja(this.ia.yf);
  d && "full" == d.Jd() && ("no-image" == a ? JQ(this, c) : "no-image" == b ? KQ(this, c) : "has-image" == b && "uploading-image" == a && (a = this.pa.querySelector(".picker-target-clone")) && this.Hc.Bx(a, this.ia.ht));
};
IQ.prototype.vy = function() {
  (0,z.Cc)(EQ(FQ(new DQ(this.pa, "transition-picker-image")), this.pa.querySelector(".picker-target")).start(), function() {
    var a = this.pa.querySelector(".picker-target-clone");
    a && this.Hc.Fw(a);
  }, this);
};
LQ.prototype.reset = function() {
  this.pa && (this.pa.style.backgroundImage = "");
};
LQ.prototype.show = function(a) {
  this.pa && (this.pa.style.backgroundImage = 'url("' + a + '")', this.pa.style.display = "block");
};
(0,z.p)(MQ, z.Ij);
z.g = MQ.prototype;
z.g.ma = null;
z.g.ro = function() {
  this.abort();
  this.ma = this.vn.Sg(!this.hK);
  (0,z.r)((0,z.q)(this.ma, this.lA, this), this.Le, this);
};
z.g.start = function(a) {
  this.abort();
  a = this.vn.upload(a);
  this.ma = (0,z.Jc)(a);
  (0,z.r)((0,z.q)(this.ma, this.lA, this), this.Le, this);
};
z.g.abort = function() {
  for (var a = 0;a < this.Qk.length;a++) {
    (0,z.bd)(this.Qk[a]);
  }
  this.Qk.length = 0;
  this.ma && this.ma.cancel();
  this.ma = null;
};
z.g.C = function() {
  this.abort();
  MQ.w.C.call(this);
};
z.g.next = function() {
  this.Um();
};
z.g.Um = function() {
  if (!this.Qk.length) {
    return null;
  }
  var a = this.Qk.shift();
  a.Zq = this.Zq;
  a.F("progress", this.gq, this);
  var b = a.start();
  this.X("start");
  a.getFile() && (0,z.q)((0,z.DH)(a), function(a) {
    this.X("preview", a);
  }, this);
  (0,z.Cc)((0,z.r)((0,z.q)(b, function(a) {
    this.X("success", a);
  }, this), this.Le, this), function() {
    a.Ba("progress", this.gq, this);
  }, this);
  return b;
};
z.g.lA = function(a) {
  this.Qk = a;
  return this.Um();
};
z.g.gq = function(a) {
  this.X("progress", a);
};
z.g.Le = function(a) {
  a && a instanceof z.Nc ? this.X("abort", "This operation was canceled by the user.") : this.X("error", a || Error("Unknown upload error"));
};
z.g = NQ.prototype;
z.g.ro = function() {
  this.Mc.ro();
};
z.g.start = function(a) {
  this.Mc.start(a);
};
z.g.abort = function() {
  this.Mc.abort();
};
z.g.XI = function() {
  this.kb.set("uploading-image");
  this.Gk && (this.Gk.style.width = "0");
  this.fn.reset();
  this.Pa.X(z.gR);
};
z.g.WI = function(a) {
  this.Gk && (this.Gk.style.width = Math.floor(100 * a) + "%");
};
z.g.TI = function(a) {
  this.ia.Cf("");
  uQ(this.ia, a.Ph(), a.nl());
  var b = a.$a();
  this.Gk && (this.Gk.style.width = "100%");
  (0,z.q)(this.Hc.fe(b), function() {
    this.Pa.X(z.fR, b);
  }, this);
};
z.g.UI = function(a) {
  var b = a.Hw;
  this.W.error(413 == b ? (0,z.jJ)() : 415 == b ? (0,z.iJ)() : "An error occured while uploading an image. Please try again, if the problem persists, try converting to a different image format (for example JPEG).");
  this.fn.reset();
  xQ(this.Hc);
  this.Pa.X(z.hR, a);
};
z.g.SI = function(a) {
  this.fn.reset();
  xQ(this.Hc);
  this.Pa.X(z.iR, a);
};
z.g.VI = function(a) {
  this.fn.show(a);
};
(0,z.p)(OQ, z.Kj);
OQ.prototype.H = function() {
  OQ.w.H.call(this);
  (0,z.Di)(this.pa).D("wash", this.QG, this);
};
OQ.prototype.ka = function() {
  OQ.w.ka.call(this);
  (0,z.Di)(this.pa).clear("wash");
};
OQ.prototype.QG = function(a) {
  this.Ds(a.value);
};
OQ.prototype.Ds = function(a) {
  this.ia.Cf(a);
  AQ(this.Hc);
};
z.gR = "start";
z.fR = "complete";
z.hR = "error";
z.iR = "abort";
z.BQ = "change";
(0,z.p)(z.PQ, z.Xn);
z.g = z.PQ.prototype;
z.g.focus = function() {
};
z.g.Eo = function(a) {
  this.Hc.Eo(a);
};
z.g.ua = function() {
  return this.ia.ua();
};
z.g.be = function() {
  return this.kb.be();
};
z.g.H = function() {
  z.PQ.w.H.call(this);
  (0,z.Di)(this.pa).D("pick-image", this.Mc.ro, this.Mc).D("cancel-upload", this.abort, this).D("remove-image", function() {
    this.Hc.fe("");
  }, this).D("toggle-background-size", this.Hc.kN, this.Hc);
  this.ia.$a() && wQ(this.Hc);
};
z.g.ka = function() {
  (0,z.Gi)(this.pa);
  this.abort();
  z.PQ.w.ka.call(this);
};
z.g.reset = function() {
  return(0,z.q)(this.abort(), function() {
    xQ(this.Hc);
    this.Mc.fn.reset();
  }, this);
};
z.g.abort = function() {
  this.Mc && this.Mc.abort();
  return this.kb.reset();
};
z.g.HB = function(a, b) {
  return new z.sQ(a, b);
};
z.g.Ev = z.BB;
z.g.Yr = z.ea;
(0,z.p)(z.QQ, z.PQ);
z.QQ.prototype.IB = function(a, b, c, d, e) {
  return new SQ(a, b, c, d, e);
};
z.QQ.prototype.HB = function(a, b) {
  return new RQ(a, b, this.sv);
};
(0,z.p)(RQ, z.sQ);
RQ.prototype.Nr = function(a, b) {
  return(0,z.K)(this.sv ? z.Sj : z.Tj, {image:tQ(this, a), Th:b});
};
(0,z.p)(SQ, z.vQ);
SQ.prototype.kC = function() {
  return this.element.querySelector(".picker-target") || this.element;
};
SQ.prototype.Bx = function(a, b) {
  a.style.backgroundImage = "url(" + b + ")";
};
SQ.prototype.Fw = function(a) {
  a.style.backgroundImage = "";
};
})(_mdm);
