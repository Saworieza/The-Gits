PLOVR_MODULE_INFO={"misc-screens":["common-async"],"stats":["common-async"],"base":[],"common-async":["base"],"notes":["common-async"],"posters":["common-async"],"notes-mobile":["common-async"]};
PLOVR_MODULE_URIS={"misc-screens":"fingerprint:misc-screens","stats":"fingerprint:stats","base":"fingerprint:base","common-async":"fingerprint:common-async","notes":"fingerprint:notes","posters":"fingerprint:posters","notes-mobile":"fingerprint:notes-mobile"};
PLOVR_MODULE_USE_DEBUG_MODE=false;
_mdm={};(function(z){
var ua;
var ta;
z.n = function(a) {
  return function() {
    return z.ba[a].apply(this, arguments);
  };
};
var ca = function(a, b) {
  for (var c = a.split("."), d = b || z.da, e;e = c.shift();) {
    if (null != d[e]) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
};
z.ea = function() {
};
var fa = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
};
z.ga = function(a) {
  return void 0 !== a;
};
z.ma = function(a) {
  return "array" == fa(a);
};
z.na = function(a) {
  var b = fa(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
z.oa = function(a) {
  return "string" == typeof a;
};
z.pa = function(a) {
  return "number" == typeof a;
};
z.qa = function(a) {
  return "function" == fa(a);
};
z.ra = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
z.sa = function(a) {
  return a[ta] || (a[ta] = ++ua);
};
var va = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
var xa = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
z.ya = function(a, b, c) {
  z.ya = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? va : xa;
  return z.ya.apply(null, arguments);
};
z.Ba = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
};
z.p = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.w = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.MP = function(a, c, f) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
};
z.Ca = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, z.Ca);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
z.Da = function(a, b) {
  return 0 == a.lastIndexOf(b, 0);
};
z.Ea = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c;
};
z.Fa = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
z.Ga = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
z.Ha = function(a) {
  if (!Ja.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(Ka, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(Ma, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(Na, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Oa, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(Pa, "\x26#39;"));
  return a;
};
var Qa = function(a) {
  100 < a.length && (a = a.substring(0, 97) + "...");
  return a;
};
z.Ra = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
var Sa = function(a, b) {
  for (var c = 0, d = (0,z.Ga)(String(a)).split("."), e = (0,z.Ga)(String(b)).split("."), f = Math.max(d.length, e.length), h = 0;0 == c && h < f;h++) {
    var k = d[h] || "", l = e[h] || "", m = RegExp("(\\d*)(\\D*)", "g"), s = RegExp("(\\d*)(\\D*)", "g");
    do {
      var x = m.exec(k) || ["", "", ""], L = s.exec(l) || ["", "", ""];
      if (0 == x[0].length && 0 == L[0].length) {
        break;
      }
      c = Ua(0 == x[1].length ? 0 : (0,window.parseInt)(x[1], 10), 0 == L[1].length ? 0 : (0,window.parseInt)(L[1], 10)) || Ua(0 == x[2].length, 0 == L[2].length) || Ua(x[2], L[2]);
    } while (0 == c);
  }
  return c;
};
var Ua = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
z.Va = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
};
z.Xa = function(a) {
  var b = (0,z.oa)(void 0) ? (0,z.Ra)(void 0) : "\\s";
  return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
    return b + e.toUpperCase();
  });
};
z.Ya = function(a) {
  return a[a.length - 1];
};
z.Za = function(a, b, c) {
  a: {
    for (var d = a.length, e = (0,z.oa)(a) ? a.split("") : a, f = 0;f < d;f++) {
      if (f in e && b.call(c, e[f], f, a)) {
        b = f;
        break a;
      }
    }
    b = -1;
  }
  return 0 > b ? null : (0,z.oa)(a) ? a.charAt(b) : a[b];
};
var $a = function(a, b) {
  for (var c = a.length, d = (0,z.oa)(a) ? a.split("") : a, c = c - 1;0 <= c;c--) {
    if (c in d && b.call(void 0, d[c], c, a)) {
      return c;
    }
  }
  return-1;
};
z.ab = function(a, b) {
  return 0 <= (0,z.bb)(a, b);
};
z.cb = function(a, b) {
  var c = (0,z.bb)(a, b), d;
  (d = 0 <= c) && db.splice.call(a, c, 1);
  return d;
};
var eb = function(a) {
  return db.concat.apply(db, arguments);
};
z.fb = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
};
z.gb = function(a, b) {
  for (var c = 1;c < arguments.length;c++) {
    var d = arguments[c], e;
    if ((0,z.ma)(d) || (e = (0,z.na)(d)) && Object.prototype.hasOwnProperty.call(d, "callee")) {
      a.push.apply(a, d);
    } else {
      if (e) {
        for (var f = a.length, h = d.length, k = 0;k < h;k++) {
          a[f + k] = d[k];
        }
      } else {
        a.push(d);
      }
    }
  }
};
var kb = function(a, b, c, d) {
  db.splice.apply(a, (0,z.lb)(arguments, 1));
};
z.lb = function(a, b, c) {
  return 2 >= arguments.length ? db.slice.call(a, b) : db.slice.call(a, b, c);
};
z.mb = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
var pb = function(a) {
  var b = qb, c = {};
  (0,z.rb)(a, function(d, e) {
    c[b.call(void 0, d, e, a)] = d;
  });
  return c;
};
z.sb = function(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
};
var tb = function(a, b) {
  var c = {}, d;
  for (d in a) {
    b.call(void 0, a[d], d, a) && (c[d] = a[d]);
  }
  return c;
};
var wb = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
};
var xb = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
};
z.yb = function(a, b) {
  for (var c in a) {
    if (a[c] == b) {
      return!0;
    }
  }
  return!1;
};
z.zb = function(a) {
  for (var b in a) {
    return!1;
  }
  return!0;
};
z.Ab = function(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
};
z.Bb = function(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
};
z.Cb = function(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0;f < Db.length;f++) {
      c = Db[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
var Fb = function(a) {
  var b = arguments.length;
  if (1 == b && (0,z.ma)(arguments[0])) {
    return Fb.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0;d < b;d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
};
z.Gb = function(a) {
  var b = arguments.length;
  if (1 == b && (0,z.ma)(arguments[0])) {
    return z.Gb.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0;d < b;d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
var Hb = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.ya.apply(null, b);
};
var Ib = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.bb.apply(null, b);
};
var Jb = function(a) {
  var b = Array.prototype.slice.call(arguments);
  b.unshift(this);
  return z.Kb.apply(null, b);
};
var Lb = function(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_Thenable = !0;
};
var Mb = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_Thenable;
  } catch (b) {
    return!1;
  }
};
var Nb = function(a) {
  Ob[Ob.length] = a;
  if (Pb) {
    for (var b = 0;b < Qb.length;b++) {
      a((0,z.ya)(Qb[b].Yj, Qb[b]));
    }
  }
};
var Rb = function() {
  var a = Sb;
  Pb = !0;
  for (var b = (0,z.ya)(a.Yj, a), c = 0;c < Ob.length;c++) {
    Ob[c](b);
  }
  Qb.push(a);
};
z.Tb = function(a) {
  return function() {
    return a;
  };
};
z.Ub = function(a) {
  var b = arguments, c = b.length;
  return function() {
    for (var a, e = 0;e < c;e++) {
      a = b[e].apply(this, arguments);
    }
    return a;
  };
};
var Vb = function(a, b) {
  function c() {
  }
  c.prototype = a.prototype;
  var d = new c;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
z.Wb = function(a) {
  a = Xb(a);
  (0,z.qa)(z.da.setImmediate) ? z.da.setImmediate(a) : (Yb || (Yb = Zb()), Yb(a));
};
var Zb = function() {
  var a = z.da.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = window.document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    window.document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = (0,z.ya)(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.Dn;
      c.Dn = null;
      a();
    };
    return function(a) {
      d.next = {Dn:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("script") ? function(a) {
    var b = window.document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    window.document.documentElement.appendChild(b);
  } : function(a) {
    z.da.setTimeout(a, 0);
  };
};
var Xb = function(a) {
  return a;
};
var bc = function(a) {
  (0,z.Wb)(function() {
    throw a;
  });
};
var cc = function(a, b) {
  dc || ((0,z.Wb)(ec), dc = !0);
  fc.push(new gc(a, b));
};
var ec = function() {
  for (;fc.length;) {
    var a = fc;
    fc = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.hl.call(c.scope);
      } catch (d) {
        bc(d);
      }
    }
  }
  dc = !1;
};
var gc = function(a, b) {
  this.hl = a;
  this.scope = b;
};
var hc = function(a, b) {
  this.$e = ic;
  this.Xg = void 0;
  this.Re = this.Sb = null;
  this.Or = this.kw = !1;
  try {
    var c = this;
    a.call(b, function(a) {
      jc(c, kc, a);
    }, function(a) {
      jc(c, lc, a);
    });
  } catch (d) {
    jc(this, lc, d);
  }
};
var mc = function(a, b) {
  if (a.$e == ic) {
    if (a.Sb) {
      var c = a.Sb;
      if (c.Re) {
        for (var d = 0, e = -1, f = 0, h;h = c.Re[f];f++) {
          if (h = h.ur) {
            if (d++, h == a && (e = f), 0 <= e && 1 < d) {
              break;
            }
          }
        }
        0 <= e && (c.$e == ic && 1 == d ? mc(c, b) : (d = c.Re.splice(e, 1)[0], nc(c, d, lc, b)));
      }
    } else {
      jc(a, lc, b);
    }
  }
};
var pc = function(a, b) {
  a.Re && a.Re.length || a.$e != kc && a.$e != lc || qc(a);
  a.Re || (a.Re = []);
  a.Re.push(b);
};
var rc = function(a, b, c, d) {
  var e = {ur:null, eD:null, gD:null};
  e.ur = new hc(function(a, h) {
    e.eD = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (m) {
        h(m);
      }
    } : a;
    e.gD = c ? function(b) {
      try {
        var e = c.call(d, b);
        !(0,z.ga)(e) && b instanceof sc ? h(b) : a(e);
      } catch (m) {
        h(m);
      }
    } : h;
  });
  e.ur.Sb = a;
  pc(a, e);
  return e.ur;
};
var jc = function(a, b, c) {
  if (a.$e == ic) {
    if (a == c) {
      b = lc, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (Mb(c)) {
        a.$e = 1;
        c.then(a.fE, a.gE, a);
        return;
      }
      if ((0,z.ra)(c)) {
        try {
          var d = c.then;
          if ((0,z.qa)(d)) {
            tc(a, c, d);
            return;
          }
        } catch (e) {
          b = lc, c = e;
        }
      }
    }
    a.Xg = c;
    a.$e = b;
    qc(a);
    b != lc || c instanceof sc || uc(a, c);
  }
};
var tc = function(a, b, c) {
  function d(b) {
    f || (f = !0, a.gE(b));
  }
  function e(b) {
    f || (f = !0, a.fE(b));
  }
  a.$e = 1;
  var f = !1;
  try {
    c.call(b, e, d);
  } catch (h) {
    d(h);
  }
};
var qc = function(a) {
  a.kw || (a.kw = !0, cc(a.hL, a));
};
var nc = function(a, b, c, d) {
  if (c == kc) {
    b.eD(d);
  } else {
    for (;a && a.Or;a = a.Sb) {
      a.Or = !1;
    }
    b.gD(d);
  }
};
var uc = function(a, b) {
  a.Or = !0;
  cc(function() {
    a.Or && vc.call(null, b);
  });
};
var sc = function(a) {
  z.Ca.call(this, a);
};
z.wc = function(a, b) {
  this.ls = [];
  this.cD = a;
  this.MB = b || null;
  this.Tn = this.Nc = !1;
  this.Xg = void 0;
  this.Cx = this.NK = this.Kv = !1;
  this.ws = 0;
  this.Sb = null;
  this.qr = 0;
};
var xc = function(a, b, c) {
  a.Nc = !0;
  a.Xg = c;
  a.Tn = !b;
  yc(a);
};
var zc = function(a) {
  if (a.Nc) {
    if (!a.Cx) {
      throw new Ac(a);
    }
    a.Cx = !1;
  }
};
z.q = function(a, b, c) {
  return Bc(a, b, null, c);
};
z.r = function(a, b, c) {
  return Bc(a, null, b, c);
};
z.Cc = function(a, b, c) {
  return Bc(a, b, b, c);
};
var Bc = function(a, b, c, d) {
  a.ls.push([b, c, d]);
  a.Nc && yc(a);
  return a;
};
z.Dc = function(a, b) {
  return(0,z.q)(a, (0,z.ya)(b.zb, b));
};
var Ec = function(a) {
  return(0,z.Fc)(a.ls, function(a) {
    return(0,z.qa)(a[1]);
  });
};
var yc = function(a) {
  if (a.ws && a.Nc && Ec(a)) {
    var b = a.ws, c = Gc[b];
    c && (Hc.call(z.da, c.Od), delete Gc[b]);
    a.ws = 0;
  }
  a.Sb && (a.Sb.qr--, delete a.Sb);
  for (var b = a.Xg, d = c = !1;a.ls.length && !a.Kv;) {
    var e = a.ls.shift(), f = e[0], h = e[1], e = e[2];
    if (f = a.Tn ? h : f) {
      try {
        var k = f.call(e || a.MB, b);
        (0,z.ga)(k) && (a.Tn = a.Tn && (k == b || k instanceof Error), a.Xg = b = k);
        Mb(b) && (d = !0, a.Kv = !0);
      } catch (l) {
        b = l, a.Tn = !0, Ec(a) || (c = !0);
      }
    }
  }
  a.Xg = b;
  d && (k = (0,z.ya)(a.GB, a, !0), d = (0,z.ya)(a.GB, a, !1), b instanceof z.wc ? (Bc(b, k, d), b.NK = !0) : b.then(k, d));
  c && (b = new Ic(b), Gc[b.Od] = b, a.ws = b.Od);
};
z.Jc = function(a) {
  var b = new z.wc;
  b.Ea(a);
  return b;
};
z.Lc = function(a) {
  var b = new z.wc;
  b.$d(a);
  return b;
};
var Mc = function() {
  var a = new z.wc;
  a.cancel();
  return a;
};
var Ac = function(a) {
  z.Ca.call(this);
  this.Ac = a;
};
z.Nc = function(a) {
  z.Ca.call(this);
  this.Ac = a;
};
var Ic = function(a) {
  this.Od = Oc.call(z.da, (0,z.ya)(this.jN, this), 0);
  this.fL = a;
};
z.Pc = function(a) {
  if (a.classList) {
    return a.classList;
  }
  a = a.className;
  return(0,z.oa)(a) && a.match(/\S+/g) || [];
};
z.Qc = function(a, b) {
  return a.classList ? a.classList.contains(b) : (0,z.ab)((0,z.Pc)(a), b);
};
z.t = function(a, b) {
  a.classList ? a.classList.add(b) : (0,z.Qc)(a, b) || (a.className += 0 < a.className.length ? " " + b : b);
};
z.Rc = function(a, b) {
  if (a.classList) {
    (0,z.rb)(b, function(b) {
      (0,z.t)(a, b);
    });
  } else {
    var c = {};
    (0,z.rb)((0,z.Pc)(a), function(a) {
      c[a] = !0;
    });
    (0,z.rb)(b, function(a) {
      c[a] = !0;
    });
    a.className = "";
    for (var d in c) {
      a.className += 0 < a.className.length ? " " + d : d;
    }
  }
};
z.u = function(a, b) {
  a.classList ? a.classList.remove(b) : (0,z.Qc)(a, b) && (a.className = (0,z.Sc)((0,z.Pc)(a), function(a) {
    return a != b;
  }).join(" "));
};
z.Tc = function(a, b) {
  a.classList ? (0,z.rb)(b, function(b) {
    (0,z.u)(a, b);
  }) : a.className = (0,z.Sc)((0,z.Pc)(a), function(a) {
    return!(0,z.ab)(b, a);
  }).join(" ");
};
z.Uc = function(a, b, c) {
  c ? (0,z.t)(a, b) : (0,z.u)(a, b);
};
z.Vc = function(a, b) {
  var c = !(0,z.Qc)(a, b);
  (0,z.Uc)(a, b, c);
};
z.Wc = function(a, b, c) {
  (0,z.u)(a, b);
  (0,z.t)(a, c);
};
z.Xc = function(a) {
  this.Yc = a;
};
var Yc = function(a) {
  a = (a.Yc.cookie || "").split(Zc);
  for (var b = [], c = [], d, e, f = 0;e = a[f];f++) {
    d = e.indexOf("\x3d"), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
  }
  return{keys:b, Oo:c};
};
z.v = function() {
  0 != $c && (ad[(0,z.sa)(this)] = this);
};
z.bd = function(a) {
  a && "function" == typeof a.Xb && a.Xb();
};
z.dd = function(a) {
  for (var b = 0, c = arguments.length;b < c;++b) {
    var d = arguments[b];
    (0,z.na)(d) ? z.dd.apply(null, d) : (0,z.bd)(d);
  }
};
var ed = function(a) {
  return-1 != fd.indexOf(a);
};
var gd = function() {
  return z.da.navigator || null;
};
var hd = function() {
  var a = z.da.document;
  return a ? a.documentMode : void 0;
};
z.id = function(a) {
  return jd[a] || (jd[a] = 0 <= Sa(kd, a));
};
var ld = function(a) {
  return z.w && md >= a;
};
var nd = function(a) {
  a = a.className;
  return(0,z.oa)(a) && a.match(/\S+/g) || [];
};
var od = function(a, b) {
  for (var c = nd(a), d = (0,z.lb)(arguments, 1), e = c.length + d.length, f = c, h = 0;h < d.length;h++) {
    (0,z.ab)(f, d[h]) || f.push(d[h]);
  }
  a.className = c.join(" ");
  return c.length == e;
};
var pd = function(a, b) {
  var c = nd(a), c = qd(c, (0,z.lb)(arguments, 1));
  a.className = c.join(" ");
};
var qd = function(a, b) {
  return(0,z.Sc)(a, function(a) {
    return!(0,z.ab)(b, a);
  });
};
z.rd = function(a, b) {
  this.x = (0,z.ga)(a) ? a : 0;
  this.y = (0,z.ga)(b) ? b : 0;
};
var sd = function(a, b) {
  this.width = a;
  this.height = b;
};
z.td = function(a) {
  return a ? new ud((0,z.wd)(a)) : xd || (xd = new ud);
};
z.yd = function(a, b) {
  (0,z.sb)(b, function(b, d) {
    "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in zd ? a.setAttribute(zd[d], b) : (0,z.Da)(d, "aria-") || (0,z.Da)(d, "data-") ? a.setAttribute(d, b) : a[d] = b;
  });
};
z.Ad = function(a) {
  a = a.document;
  a = (0,z.Bd)(a) ? a.documentElement : a.body;
  return new sd(a.clientWidth, a.clientHeight);
};
z.Cd = function(a) {
  return a ? a.parentWindow || a.defaultView : window;
};
z.Dd = function(a, b) {
  var c = b[0], d = b[1];
  if (!Ed && d && (d.name || d.type)) {
    c = ["\x3c", c];
    d.name && c.push(' name\x3d"', (0,z.Ha)(d.name), '"');
    if (d.type) {
      c.push(' type\x3d"', (0,z.Ha)(d.type), '"');
      var e = {};
      (0,z.Cb)(e, d);
      delete e.type;
      d = e;
    }
    c.push("\x3e");
    c = c.join("");
  }
  c = a.createElement(c);
  d && ((0,z.oa)(d) ? c.className = d : (0,z.ma)(d) ? od.apply(null, [c].concat(d)) : (0,z.yd)(c, d));
  2 < b.length && Fd(a, c, b, 2);
  return c;
};
var Fd = function(a, b, c, d) {
  function e(c) {
    c && b.appendChild((0,z.oa)(c) ? a.createTextNode(c) : c);
  }
  for (;d < c.length;d++) {
    var f = c[d];
    !(0,z.na)(f) || (0,z.ra)(f) && 0 < f.nodeType ? e(f) : (0,z.rb)(Gd(f) ? (0,z.fb)(f) : f, e);
  }
};
z.Hd = function(a) {
  return(0,z.Id)(a);
};
z.Id = function(a) {
  var b = window.document, c = b.createElement("div");
  z.w ? (c.innerHTML = "\x3cbr\x3e" + a, c.removeChild(c.firstChild)) : c.innerHTML = a;
  if (1 == c.childNodes.length) {
    return c.removeChild(c.firstChild);
  }
  for (a = b.createDocumentFragment();c.firstChild;) {
    a.appendChild(c.firstChild);
  }
  return a;
};
z.Bd = function(a) {
  return "CSS1Compat" == a.compatMode;
};
z.Jd = function(a) {
  if (1 != a.nodeType) {
    return!1;
  }
  switch(a.tagName) {
    case "APPLET":
    ;
    case "AREA":
    ;
    case "BASE":
    ;
    case "BR":
    ;
    case "COL":
    ;
    case "COMMAND":
    ;
    case "EMBED":
    ;
    case "FRAME":
    ;
    case "HR":
    ;
    case "IMG":
    ;
    case "INPUT":
    ;
    case "IFRAME":
    ;
    case "ISINDEX":
    ;
    case "KEYGEN":
    ;
    case "LINK":
    ;
    case "NOFRAMES":
    ;
    case "NOSCRIPT":
    ;
    case "META":
    ;
    case "OBJECT":
    ;
    case "PARAM":
    ;
    case "SCRIPT":
    ;
    case "SOURCE":
    ;
    case "STYLE":
    ;
    case "TRACK":
    ;
    case "WBR":
      return!1;
  }
  return!0;
};
z.Kd = function(a, b) {
  Fd((0,z.wd)(a), a, arguments, 1);
};
z.Ld = function(a, b) {
  b.parentNode && b.parentNode.insertBefore(a, b.nextSibling);
};
z.Md = function(a, b, c) {
  a.insertBefore(b, a.childNodes[c] || null);
};
z.Nd = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
z.Od = function(a) {
  var b, c = a.parentNode;
  if (c && 11 != c.nodeType) {
    if (a.removeNode) {
      return a.removeNode(!1);
    }
    for (;b = a.firstChild;) {
      c.insertBefore(b, a);
    }
    return(0,z.Nd)(a);
  }
};
z.Pd = function(a, b) {
  for (;a && 1 != a.nodeType;) {
    a = b ? a.nextSibling : a.previousSibling;
  }
  return a;
};
z.Qd = function(a) {
  return(0,z.ra)(a) && 1 == a.nodeType;
};
var Rd = function(a) {
  if (Sd && !(z.w && (0,z.id)("9") && !(0,z.id)("10") && z.da.SVGElement && a instanceof z.da.SVGElement)) {
    return a.parentElement;
  }
  a = a.parentNode;
  return(0,z.Qd)(a) ? a : null;
};
z.Td = function(a, b) {
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16);
  }
  for (;b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
};
var Ud = function(a, b) {
  if (a == b) {
    return 0;
  }
  if (a.compareDocumentPosition) {
    return a.compareDocumentPosition(b) & 2 ? 1 : -1;
  }
  if (z.w && !ld(9)) {
    if (9 == a.nodeType) {
      return-1;
    }
    if (9 == b.nodeType) {
      return 1;
    }
  }
  if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
    var c = 1 == a.nodeType, d = 1 == b.nodeType;
    if (c && d) {
      return a.sourceIndex - b.sourceIndex;
    }
    var e = a.parentNode, f = b.parentNode;
    return e == f ? Vd(a, b) : !c && (0,z.Td)(e, b) ? -1 * Wd(a, b) : !d && (0,z.Td)(f, a) ? Wd(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : f.sourceIndex);
  }
  d = (0,z.wd)(a);
  c = d.createRange();
  c.selectNode(a);
  c.collapse(!0);
  d = d.createRange();
  d.selectNode(b);
  d.collapse(!0);
  return c.compareBoundaryPoints(z.da.Range.START_TO_END, d);
};
var Wd = function(a, b) {
  var c = a.parentNode;
  if (c == b) {
    return-1;
  }
  for (var d = b;d.parentNode != c;) {
    d = d.parentNode;
  }
  return Vd(d, a);
};
var Vd = function(a, b) {
  for (var c = b;c = c.previousSibling;) {
    if (c == a) {
      return-1;
    }
  }
  return 1;
};
z.Xd = function(a) {
  var b, c = arguments.length;
  if (!c) {
    return null;
  }
  if (1 == c) {
    return arguments[0];
  }
  var d = [], e = window.Infinity;
  for (b = 0;b < c;b++) {
    for (var f = [], h = arguments[b];h;) {
      f.unshift(h), h = h.parentNode;
    }
    d.push(f);
    e = Math.min(e, f.length);
  }
  f = null;
  for (b = 0;b < e;b++) {
    for (var h = d[0][b], k = 1;k < c;k++) {
      if (h != d[k][b]) {
        return f;
      }
    }
    f = h;
  }
  return f;
};
z.wd = function(a) {
  return 9 == a.nodeType ? a : a.ownerDocument || a.document;
};
var Gd = function(a) {
  if (a && "number" == typeof a.length) {
    if ((0,z.ra)(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if ((0,z.qa)(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
};
z.Yd = function(a, b, c) {
  if (!b && !c) {
    return null;
  }
  var d = b ? b.toUpperCase() : null;
  return(0,z.Zd)(a, function(a) {
    var b;
    if (b = !d || a.nodeName == d) {
      (b = !c) || (b = (0,z.ab)(nd(a), c));
    }
    return b;
  });
};
z.Zd = function(a, b) {
  for (var c = 0;a;) {
    if (b(a)) {
      return a;
    }
    a = a.parentNode;
    c++;
  }
  return null;
};
var ud = function(a) {
  this.Yc = a || z.da.document || window.document;
};
var $d = function(a, b) {
  var c;
  c = a.Yc;
  var d = b && "*" != b ? b.toUpperCase() : "";
  c = c.querySelectorAll && c.querySelector && d ? c.querySelectorAll(d + "") : c.getElementsByTagName(d || "*");
  return c;
};
z.be = function(a) {
  var b = a.Yc;
  a = !z.ce && (0,z.Bd)(b) ? b.documentElement : b.body || b.documentElement;
  b = b.parentWindow || b.defaultView;
  return z.w && (0,z.id)("10") && b.pageYOffset != a.scrollTop ? new z.rd(a.scrollLeft, a.scrollTop) : new z.rd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
};
z.de = function() {
};
z.ee = function(a) {
  if (a instanceof z.de) {
    return a;
  }
  if ("function" == typeof a.xi) {
    return a.xi(!1);
  }
  if ((0,z.na)(a)) {
    var b = 0, c = new z.de;
    c.next = function() {
      for (;;) {
        if (b >= a.length) {
          throw z.fe;
        }
        if (b in a) {
          return a[b++];
        }
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
};
z.ge = function(a) {
  try {
    return(0,z.ee)(a).next();
  } catch (b) {
    if (b != z.fe) {
      throw b;
    }
    return null;
  }
};
z.he = function(a, b, c, d, e) {
  this.Rd = !!b;
  a && ie(this, a, d);
  this.depth = void 0 != e ? e : this.Sc || 0;
  this.Rd && (this.depth *= -1);
  this.yr = !c;
};
var ie = function(a, b, c, d) {
  if (a.S = b) {
    a.Sc = (0,z.pa)(c) ? c : 1 != a.S.nodeType ? 0 : a.Rd ? -1 : 1;
  }
  (0,z.pa)(d) && (a.depth = d);
};
var je = function(a) {
  if ("function" == typeof a.wf) {
    return a.wf();
  }
  if ((0,z.oa)(a)) {
    return a.split("");
  }
  if ((0,z.na)(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return wb(a);
};
var ke = function(a) {
  if ("function" == typeof a.ue) {
    return a.ue();
  }
  if ("function" != typeof a.wf) {
    if ((0,z.na)(a) || (0,z.oa)(a)) {
      var b = [];
      a = a.length;
      for (var c = 0;c < a;c++) {
        b.push(c);
      }
      return b;
    }
    return xb(a);
  }
};
var le = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if ((0,z.na)(a) || (0,z.oa)(a)) {
      (0,z.rb)(a, b, c);
    } else {
      for (var d = ke(a), e = je(a), f = e.length, h = 0;h < f;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
};
z.me = function(a, b) {
  this.ze = {};
  this.xb = [];
  this.Po = this.Ib = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.Pf(a);
  }
};
var ne = function(a, b) {
  return a === b;
};
var oe = function(a) {
  if (a.Ib != a.xb.length) {
    for (var b = 0, c = 0;b < a.xb.length;) {
      var d = a.xb[b];
      pe(a.ze, d) && (a.xb[c++] = d);
      b++;
    }
    a.xb.length = c;
  }
  if (a.Ib != a.xb.length) {
    for (var e = {}, c = b = 0;b < a.xb.length;) {
      d = a.xb[b], pe(e, d) || (a.xb[c++] = d, e[d] = 1), b++;
    }
    a.xb.length = c;
  }
};
var pe = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
z.qe = function() {
  z.v.call(this);
};
z.re = function() {
};
z.se = function(a) {
  if (a.getSelection) {
    return a.getSelection();
  }
  a = a.document;
  var b = a.selection;
  if (b) {
    try {
      var c = b.createRange();
      if (c.parentElement) {
        if (c.parentElement().document != a) {
          return null;
        }
      } else {
        if (!c.length || c.item(0).document != a) {
          return null;
        }
      }
    } catch (d) {
      return null;
    }
    return b;
  }
  return null;
};
z.te = function(a) {
  for (var b = [], c = 0, d = a.rl();c < d;c++) {
    b.push(a.Sh(c));
  }
  return b;
};
z.ue = function(a) {
  return a.xe() ? a.pb() : a.Ma();
};
z.ve = function(a) {
  return a.xe() ? a.Ec() : a.Qb();
};
z.we = function(a) {
  return a.xe() ? a.Ma() : a.pb();
};
z.xe = function(a) {
  return a.xe() ? a.Qb() : a.Ec();
};
var ye = function(a, b) {
  z.he.call(this, a, b, !0);
};
z.ze = function() {
};
z.Ae = function(a, b, c, d, e) {
  var f;
  a && (this.Na = a, this.jb = b, this.La = c, this.gb = d, 1 == a.nodeType && "BR" != a.tagName && (a = a.childNodes, (b = a[b]) ? (this.Na = b, this.jb = 0) : (a.length && (this.Na = (0,z.Ya)(a)), f = !0)), 1 == c.nodeType && ((this.La = c.childNodes[d]) ? this.gb = 0 : this.La = c));
  z.he.call(this, e ? this.La : this.Na, e, !0);
  if (f) {
    try {
      this.next();
    } catch (h) {
      if (h != z.fe) {
        throw h;
      }
    }
  }
};
z.Be = function() {
};
z.Ce = function(a) {
  this.ra = a;
};
var De = function(a) {
  var b = (0,z.wd)(a).createRange();
  if (3 == a.nodeType) {
    b.setStart(a, 0), b.setEnd(a, a.length);
  } else {
    if (Ee(a)) {
      for (var c, d = a;(c = d.firstChild) && Ee(c);) {
        d = c;
      }
      b.setStart(d, 0);
      for (d = a;(c = d.lastChild) && Ee(c);) {
        d = c;
      }
      b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length);
    } else {
      c = a.parentNode, a = (0,z.bb)(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
    }
  }
  return b;
};
var Fe = function(a, b, c, d) {
  var e = (0,z.wd)(a).createRange();
  e.setStart(a, b);
  e.setEnd(c, d);
  return e;
};
var Ge = function(a) {
  this.ra = a;
};
z.He = function(a, b) {
  this.ra = a;
  this.bL = b;
};
var Ie = function(a) {
  var b = (0,z.wd)(a).body.createTextRange();
  if (1 == a.nodeType) {
    b.moveToElementText(a), Ee(a) && !a.childNodes.length && b.collapse(!1);
  } else {
    for (var c = 0, d = a;d = d.previousSibling;) {
      var e = d.nodeType;
      if (3 == e) {
        c += d.length;
      } else {
        if (1 == e) {
          b.moveToElementText(d);
          break;
        }
      }
    }
    d || b.moveToElementText(a.parentNode);
    b.collapse(!d);
    c && b.move("character", c);
    b.moveEnd("character", a.length);
  }
  return b;
};
var Je = function(a, b) {
  for (var c = b.childNodes, d = 0, e = c.length;d < e;d++) {
    var f = c[d];
    if (Ee(f)) {
      var h = Ie(f), k = h.htmlText != f.outerHTML;
      if (a.isCollapsed() && k ? 0 <= a.Te(h, 1, 1) && 0 >= a.Te(h, 1, 0) : a.ra.inRange(h)) {
        return Je(a, f);
      }
    }
  }
  return b;
};
var Ke = function(a, b, c) {
  c = c || a.te();
  if (!c || !c.firstChild) {
    return c;
  }
  for (var d = 1 == b, e = 0, f = c.childNodes.length;e < f;e++) {
    var h = d ? e : f - e - 1, k = c.childNodes[h], l;
    try {
      l = (0,z.Le)(k);
    } catch (m) {
      continue;
    }
    var s = l.ra;
    if (a.isCollapsed()) {
      if (!Ee(k)) {
        if (0 == a.Te(s, 1, 1)) {
          a.jb = a.gb = h;
          break;
        }
      } else {
        if (l.Kh(a)) {
          return Ke(a, b, k);
        }
      }
    } else {
      if (a.Kh(l)) {
        if (!Ee(k)) {
          d ? a.jb = h : a.gb = h + 1;
          break;
        }
        return Ke(a, b, k);
      }
      if (0 > a.Te(s, 1, 0) && 0 < a.Te(s, 0, 1)) {
        return Ke(a, b, k);
      }
    }
  }
  return c;
};
var Me = function(a, b) {
  var c = 1 == b, d = c ? a.Ma() : a.pb();
  if (1 == d.nodeType) {
    for (var d = d.childNodes, e = d.length, f = c ? 1 : -1, h = c ? 0 : e - 1;0 <= h && h < e;h += f) {
      var k = d[h];
      if (!Ee(k) && 0 == a.ra.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), (0,z.Le)(k).ra)) {
        return c ? h : h + 1;
      }
    }
    return-1 == h ? 0 : h;
  }
  e = a.ra.duplicate();
  f = Ie(d);
  e.setEndPoint(c ? "EndToEnd" : "StartToStart", f);
  e = e.text.length;
  return c ? d.length - e : e;
};
var Ne = function(a) {
  return 3 == a.nodeType ? a.nodeValue : a.innerText;
};
var Oe = function(a) {
  this.ra = a;
};
var Pe = function(a) {
  this.ra = a;
};
z.Le = function(a) {
  if (z.w && !ld(9)) {
    var b = new z.He(Ie(a), (0,z.wd)(a));
    if (Ee(a)) {
      for (var c, d = a;(c = d.firstChild) && Ee(c);) {
        d = c;
      }
      b.Na = d;
      b.jb = 0;
      for (d = a;(c = d.lastChild) && Ee(c);) {
        d = c;
      }
      b.La = d;
      b.gb = 1 == d.nodeType ? d.childNodes.length : d.length;
      b.ag = a;
    } else {
      b.Na = b.La = b.ag = a.parentNode, b.jb = (0,z.bb)(b.ag.childNodes, a), b.gb = b.jb + 1;
    }
    a = b;
  } else {
    a = z.ce ? new Pe(De(a)) : z.Qe ? new Ge(De(a)) : z.Re ? new Oe(De(a)) : new z.Ce(De(a));
  }
  return a;
};
var Ee = function(a) {
  return(0,z.Jd)(a) || 3 == a.nodeType;
};
z.Se = function() {
};
z.Te = function(a, b) {
  var c;
  c = z.w && !ld(9) ? new z.He(a, (0,z.wd)(a.parentElement())) : z.ce ? new Pe(a) : z.Qe ? new Ge(a) : z.Re ? new Oe(a) : new z.Ce(a);
  return(0,z.Ue)(c, b);
};
z.Ue = function(a, b) {
  var c = new z.Se;
  c.Hh = a;
  c.zf = !!b;
  return c;
};
z.Ye = function(a, b, c, d) {
  var e = new z.Se;
  e.zf = (0,z.Ze)(a, b, c, d);
  if ((0,z.Qd)(a) && !(0,z.Jd)(a)) {
    var f = a.parentNode;
    b = (0,z.bb)(f.childNodes, a);
    a = f;
  }
  (0,z.Qd)(c) && !(0,z.Jd)(c) && (f = c.parentNode, d = (0,z.bb)(f.childNodes, c), c = f);
  e.zf ? (e.Na = c, e.jb = d, e.La = a, e.gb = b) : (e.Na = a, e.jb = b, e.La = c, e.gb = d);
  return e;
};
z.$e = function(a) {
  var b;
  if (!(b = a.Hh)) {
    b = a.Ma();
    var c = a.Qb(), d = a.pb(), e = a.Ec();
    if (z.w && !ld(9)) {
      var f = b, h = c, k = d, l = e, m = !1;
      1 == f.nodeType && (h = f.childNodes[h], m = !h, f = h || f.lastChild || f, h = 0);
      var s = Ie(f);
      h && s.move("character", h);
      f == k && h == l ? s.collapse(!0) : (m && s.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), f = Ie(k), f.collapse(!m), l && f.moveEnd("character", l), s.setEndPoint("EndToEnd", f));
      l = new z.He(s, (0,z.wd)(b));
      l.Na = b;
      l.jb = c;
      l.La = d;
      l.gb = e;
      b = l;
    } else {
      b = z.ce ? new Pe(Fe(b, c, d, e)) : z.Qe ? new Ge(Fe(b, c, d, e)) : z.Re ? new Oe(Fe(b, c, d, e)) : new z.Ce(Fe(b, c, d, e));
    }
    b = a.Hh = b;
  }
  return b;
};
var af = function(a) {
  this.uB = (0,z.ue)(a);
  this.JK = (0,z.ve)(a);
  this.cC = (0,z.we)(a);
  this.oL = (0,z.xe)(a);
};
z.bf = function() {
};
z.cf = function(a) {
  var b = new z.bf;
  b.ra = a;
  return b;
};
var df = function(a) {
  for (var b = (0,z.wd)(arguments[0]).body.createControlRange(), c = 0, d = arguments.length;c < d;c++) {
    b.addElement(arguments[c]);
  }
  return(0,z.cf)(b);
};
var ef = function(a) {
  if (!a.Cc && (a.Cc = [], a.ra)) {
    for (var b = 0;b < a.ra.length;b++) {
      a.Cc.push(a.ra.item(b));
    }
  }
  return a.Cc;
};
z.ff = function(a) {
  a.Io || (a.Io = ef(a).concat(), a.Io.sort(function(a, c) {
    return a.sourceIndex - c.sourceIndex;
  }));
  return a.Io;
};
var gf = function(a) {
  this.Cc = ef(a);
};
z.hf = function(a) {
  a && (this.Cc = (0,z.ff)(a), this.Na = this.Cc.shift(), this.La = (0,z.Ya)(this.Cc) || this.Na);
  z.he.call(this, this.Na, !1, !0);
};
z.jf = function() {
  this.Qf = [];
  this.Ol = [];
  this.zr = this.cm = null;
};
var kf = function(a) {
  var b = new z.jf;
  b.Ol = a;
  b.Qf = (0,z.Kb)(a, function(a) {
    return a.uj();
  });
  return b;
};
var lf = function(a) {
  a.cm || (a.cm = (0,z.te)(a), a.cm.sort(function(a, c) {
    var d = a.Ma(), e = a.Qb(), f = c.Ma(), h = c.Qb();
    return d == f && e == h ? 0 : (0,z.Ze)(d, e, f, h) ? 1 : -1;
  }));
  return a.cm;
};
var mf = function(a) {
  this.tx = (0,z.Kb)((0,z.te)(a), function(a) {
    return a.sx();
  });
};
z.nf = function(a) {
  a && (this.Zf = (0,z.Kb)(lf(a), function(a) {
    return(0,z.ee)(a);
  }));
  ye.call(this, a ? this.Ma() : null, !1);
};
z.Ze = function(a, b, c, d) {
  if (a == c) {
    return d < b;
  }
  var e;
  if (1 == a.nodeType && b) {
    if (e = a.childNodes[b]) {
      a = e, b = 0;
    } else {
      if ((0,z.Td)(a, c)) {
        return!0;
      }
    }
  }
  if (1 == c.nodeType && d) {
    if (e = c.childNodes[d]) {
      c = e, d = 0;
    } else {
      if ((0,z.Td)(c, a)) {
        return!1;
      }
    }
  }
  return 0 < (Ud(a, c) || b - d);
};
var of = function(a) {
  return(a = a.exec(fd)) ? a[1] : "";
};
z.pf = function() {
  return z.ce ? "Webkit" : z.Qe ? "Moz" : z.w ? "ms" : z.Re ? "O" : null;
};
z.qf = function() {
  return z.ce ? "-webkit" : z.Qe ? "-moz" : z.w ? "-ms" : z.Re ? "-o" : null;
};
z.rf = function(a, b, c, d) {
  this.top = a;
  this.right = b;
  this.bottom = c;
  this.left = d;
};
z.sf = function(a, b, c, d) {
  this.left = a;
  this.top = b;
  this.width = c;
  this.height = d;
};
z.tf = function(a) {
  return new z.rf(a.top, a.left + a.width, a.top + a.height, a.left);
};
z.uf = function(a, b, c) {
  (0,z.oa)(b) ? vf(a, c, b) : (0,z.sb)(b, (0,z.Ba)(vf, a));
};
var vf = function(a, b, c) {
  (c = wf(a, c)) && (a.style[c] = b);
};
var wf = function(a, b) {
  var c = (0,z.Va)(b);
  if (void 0 === a.style[c]) {
    var d = (0,z.pf)() + (0,z.Xa)(b);
    if (void 0 !== a.style[d]) {
      return d;
    }
  }
  return c;
};
z.xf = function(a, b) {
  var c = a.style[(0,z.Va)(b)];
  return "undefined" !== typeof c ? c : a.style[wf(a, b)] || "";
};
z.yf = function(a, b) {
  var c = (0,z.wd)(a);
  return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : "";
};
z.zf = function(a, b) {
  return(0,z.yf)(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
};
z.Af = function(a) {
  var b;
  try {
    b = a.getBoundingClientRect();
  } catch (c) {
    return{left:0, top:0, right:0, bottom:0};
  }
  z.w && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
  return b;
};
var Bf = function(a) {
  if (z.w && !ld(8)) {
    return a.offsetParent;
  }
  var b = (0,z.wd)(a), c = (0,z.zf)(a, "position"), d = "fixed" == c || "absolute" == c;
  for (a = a.parentNode;a && a != b;a = a.parentNode) {
    if (c = (0,z.zf)(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) {
      return a;
    }
  }
  return null;
};
z.Cf = function(a) {
  var b, c = (0,z.wd)(a), d = (0,z.zf)(a, "position"), e = z.Qe && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY), f = new z.rd(0, 0), h;
  b = c ? (0,z.wd)(c) : window.document;
  (h = !z.w) || (h = ld(9)) || (h = (0,z.td)(b), h = (0,z.Bd)(h.Yc));
  h = h ? b.documentElement : b.body;
  if (a == h) {
    return f;
  }
  if (a.getBoundingClientRect) {
    b = (0,z.Af)(a), a = (0,z.be)((0,z.td)(c)), f.x = b.left + a.x, f.y = b.top + a.y;
  } else {
    if (c.getBoxObjectFor && !e) {
      b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(h), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    } else {
      e = a;
      do {
        f.x += e.offsetLeft;
        f.y += e.offsetTop;
        e != a && (f.x += e.clientLeft || 0, f.y += e.clientTop || 0);
        if (z.ce && "fixed" == (0,z.zf)(e, "position")) {
          f.x += c.body.scrollLeft;
          f.y += c.body.scrollTop;
          break;
        }
        e = e.offsetParent;
      } while (e && e != a);
      if (z.Re || z.ce && "absolute" == d) {
        f.y -= c.body.offsetTop;
      }
      for (e = a;(e = Bf(e)) && e != c.body && e != h;) {
        f.x -= e.scrollLeft, z.Re && "TR" == e.tagName || (f.y -= e.scrollTop);
      }
    }
  }
  return f;
};
var Df = function(a, b) {
  "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
  return a;
};
z.Ef = function(a, b) {
  var c = (0,z.td)(b), d = null, e = c.Jg();
  z.w && e.createStyleSheet ? (d = e.createStyleSheet(), Ff(d, a)) : (e = $d(c, "head")[0], e || (d = $d(c, "body")[0], e = c.zc("head"), d.parentNode.insertBefore(e, d)), d = c.zc("style"), Ff(d, a), c.appendChild(e, d));
  return d;
};
z.Gf = function(a) {
  (0,z.Nd)(a.ownerNode || a.owningElement || a);
};
var Ff = function(a, b) {
  z.w && (0,z.ga)(a.cssText) ? a.cssText = b : a.innerHTML = b;
};
var Hf = function(a) {
  Hf[" "](a);
  return a;
};
z.If = function(a) {
  if (Jf) {
    Jf = !1;
    var b = z.da.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = (0,z.If)(c)[3] || null) && (0,window.decodeURIComponent)(c)) && c != b.hostname) {
        throw Jf = !0, Error();
      }
    }
  }
  return a.match(Kf);
};
var Lf = function(a, b) {
  var c;
  if (a instanceof Lf) {
    this.Xe = (0,z.ga)(b) ? b : a.Xe, Mf(this, a.Be), c = a.As, Nf(this), this.As = c, this.Vl(a.Nh()), Of(this, a.ki), Pf(this, a.ol()), Qf(this, a.Af.ja()), Rf(this, a.ow);
  } else {
    if (a && (c = (0,z.If)(String(a)))) {
      this.Xe = !!b;
      Mf(this, c[1] || "", !0);
      var d = c[2] || "";
      Nf(this);
      this.As = d ? (0,window.decodeURIComponent)(d) : "";
      this.Vl(c[3] || "", !0);
      Of(this, c[4]);
      Pf(this, c[5] || "", !0);
      Qf(this, c[6] || "", !0);
      Rf(this, c[7] || "", !0);
    } else {
      this.Xe = !!b, this.Af = new Sf(null, 0, this.Xe);
    }
  }
};
var Mf = function(a, b, c) {
  Nf(a);
  a.Be = c ? b ? (0,window.decodeURIComponent)(b) : "" : b;
  a.Be && (a.Be = a.Be.replace(/:$/, ""));
};
var Of = function(a, b) {
  Nf(a);
  if (b) {
    b = Number(b);
    if ((0,window.isNaN)(b) || 0 > b) {
      throw Error("Bad port number " + b);
    }
    a.ki = b;
  } else {
    a.ki = null;
  }
};
var Pf = function(a, b, c) {
  Nf(a);
  a.oD = c ? b ? (0,window.decodeURIComponent)(b) : "" : b;
};
var Qf = function(a, b, c) {
  Nf(a);
  b instanceof Sf ? (a.Af = b, a.Af.yx(a.Xe)) : (c || (b = Tf(b, Uf)), a.Af = new Sf(b, 0, a.Xe));
};
var Rf = function(a, b, c) {
  Nf(a);
  a.ow = c ? b ? (0,window.decodeURIComponent)(b) : "" : b;
};
var Vf = function(a, b) {
  return(!a.dl && !b.dl || a.Nh() == b.Nh()) && (null == a.ki && null == b.ki || a.ki == b.ki);
};
var Nf = function(a) {
  if (a.YL) {
    throw Error("Tried to modify a read-only Uri");
  }
};
var Wf = function(a, b, c, d, e, f) {
  var h = new Lf(null, void 0);
  a && Mf(h, a);
  b && h.Vl(b);
  c && Of(h, c);
  d && Pf(h, d);
  e && Qf(h, e);
  f && Rf(h, f);
  return h;
};
var Tf = function(a, b) {
  return(0,z.oa)(a) ? (0,window.encodeURI)(a).replace(b, Xf) : null;
};
var Xf = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
};
var Sf = function(a, b, c) {
  this.se = a || null;
  this.Xe = !!c;
};
var Yf = function(a) {
  if (!a.$b && (a.$b = new z.me, a.Ib = 0, a.se)) {
    for (var b = a.se.split("\x26"), c = 0;c < b.length;c++) {
      var d = b[c].indexOf("\x3d"), e = null, f = null;
      0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
      e = (0,window.decodeURIComponent)(e.replace(/\+/g, " "));
      e = Zf(a, e);
      a.add(e, f ? (0,window.decodeURIComponent)(f.replace(/\+/g, " ")) : "");
    }
  }
};
var $f = function(a) {
  var b = ke(a);
  if ("undefined" == typeof b) {
    throw Error("Keys are undefined");
  }
  var c = new Sf(null, 0, void 0);
  a = je(a);
  for (var d = 0;d < b.length;d++) {
    var e = b[d], f = a[d];
    (0,z.ma)(f) ? ag(c, e, f) : c.add(e, f);
  }
  return c;
};
var ag = function(a, b, c) {
  a.remove(b);
  0 < c.length && (a.se = null, a.$b.set(Zf(a, b), (0,z.fb)(c)), a.Ib += c.length);
};
var Zf = function(a, b) {
  var c = String(b);
  a.Xe && (c = c.toLowerCase());
  return c;
};
var bg = function() {
};
var cg = function() {
};
var dg = function(a, b, c, d) {
  b = b.g();
  if (b == String || b == Number || b == Boolean || b == Object || b.$isProtoEnum) {
    return c;
  }
  if (b.prototype.hm) {
    if (null == c) {
      return null;
    }
    if (c instanceof Object) {
      return a.Cb(b, c, d);
    }
    throw Error("Bad field value " + c);
  }
  throw Error('Unknown schema type "' + b + '"');
};
var eg = function(a, b, c) {
  b = b.g();
  if (b == String || b == Number || b == Boolean || b == Object || b.$isProtoEnum) {
    return c;
  }
  if (b.prototype.hm) {
    if (null == c) {
      return null;
    }
    if (c.hm) {
      return a.$c(c);
    }
    throw Error("Bad field value " + c);
  }
  throw Error('Unknown schema type "' + b + '"');
};
z.y = function() {
  this.data = {};
  this.Eg = {};
  this.bB = !1;
  Object.preventExtensions && Object.preventExtensions(this);
};
z.fg = function(a, b) {
  a.bB = b;
  return a;
};
z.gg = function(a, b) {
  var c = a.ad().fields[b];
  if (!c && !a.Vr(b)) {
    throw Error("Unrecognized field " + b);
  }
  return c;
};
z.hg = function(a, b) {
  if (b in a.Eg) {
    return a.Eg[b];
  }
  (0,z.gg)(a, b);
  return(0,z.A)(a, b);
};
z.A = function(a, b) {
  return b in a.data ? a.data[b] : (0,z.ig)(a, b);
};
z.jg = function(a, b) {
  if (b in a.Eg) {
    return!0;
  }
  (0,z.gg)(a, b);
  return b in a.data;
};
z.F = function(a, b, c) {
  var d = a.ad().fields[b];
  if (!a.Vr(b)) {
    if (!d) {
      return a.Eg[b] = c, delete a.data[b], a;
    }
    var e = d.g();
    if (e.$isProtoEnum && !d.h() && "number" == typeof c && !(0,z.yb)(e, c)) {
      return a.Eg[b] = c, delete a.data[b], a;
    }
  }
  if (a.bB && d) {
    if (d.h()) {
      if (!Array.isArray(c)) {
        throw Error("Type mismatch. Expected Array. Actual: " + c);
      }
      for (e = 0;e < c.length;e++) {
        kg(b, d, c[e]);
      }
    } else {
      kg(b, d, c);
    }
  }
  a.data[b] = c;
  delete a.Eg[b];
  return a;
};
var lg = function(a, b, c) {
  var d = {};
  (0,z.Cb)(d, a.Eg);
  a = a.ad().fields;
  for (var e in a) {
    delete d[e], b.call(c, e, a[e]);
  }
  for (e in d) {
    b.call(c, e, null);
  }
};
var kg = function(a, b, c) {
  b = b.g();
  var d = b.name || b, e = !1;
  if (b == Number || b.$isProtoEnum) {
    e = "number" == typeof c;
  } else {
    if (b == String) {
      e = "string" == typeof c;
    } else {
      if (b == Boolean) {
        e = "boolean" == typeof c;
      } else {
        if (b == Object) {
          e = c && "object" == typeof c && !(c instanceof z.y);
        } else {
          if (b.prototype instanceof z.y) {
            e = c instanceof b;
          } else {
            throw Error("I don't know how to type-check " + d + " on field " + a);
          }
        }
      }
    }
  }
  if (!e) {
    throw Error("Type mismatch. Expected: " + d + " on field " + a + ", Value " + c);
  }
};
z.ig = function(a, b) {
  var c = (0,z.gg)(a, b);
  if (!c || c.h()) {
    return null;
  }
  var d = c.defaultValue();
  if (void 0 !== d) {
    return d;
  }
  c = c.g();
  switch(c) {
    case Number:
      return 0;
    case String:
      return "";
    case Boolean:
      return!1;
    case Object:
      return null;
    default:
      if (c.$isProtoEnum) {
        for (var e in c) {
          if (c.hasOwnProperty(e) && "number" == typeof c[e]) {
            return c[e];
          }
        }
      }
      return null;
  }
};
var H = function(a, b) {
  a.FO = b.name;
  a.SN = b.fields;
  a.prototype.ad = function() {
    return b;
  };
  var c = a.prototype, d = {}, e;
  for (e in b.fields) {
    b.fields[e] ? (d[b.fields[e].l()] = e, mg(c, e)) : delete b.fields[e];
  }
  b.lU = d;
};
var ng = function(a, b, c, d) {
  b = b.g();
  if (b == String || b == Boolean || b == Number || b.$isProtoEnum) {
    return c === d;
  }
  if (b.prototype instanceof z.y) {
    return c === d || c && d && c.Ob(d);
  }
  if (b == Object) {
    return og(a, c, d);
  }
  throw Error("no equality metric");
};
var og = function(a, b, c) {
  if (!b || !c || "object" != typeof b || "object" != typeof c) {
    return!1;
  }
  for (var d in b) {
    if (null !== b[d] && "object" == typeof b[d]) {
      if (!og(a, b[d], c[d])) {
        return!1;
      }
    } else {
      if (b[d] != c[d]) {
        return!1;
      }
    }
  }
  return!0;
};
var mg = function(a, b) {
  if (b in a) {
    throw Error('Can not define setters/getters for "' + b + '", property name already exists.');
  }
  Object.defineProperty(a, b, {get:function() {
    return(0,z.hg)(this, b);
  }, set:function(a) {
    (0,z.F)(this, b, a);
  }});
};
var I = function() {
  this._isPopulated = !1;
  z.y.call(this);
};
z.pg = function() {
  I.call(this);
};
var qg = function() {
  I.call(this);
};
var rg = function() {
  I.call(this);
};
z.sg = function(a, b) {
  this.start = a < b ? a : b;
  this.end = a < b ? b : a;
};
var tg = function(a, b, c, d) {
  a = (d ? Math.ceil : Math.floor)(a / c) * c;
  return Math.max(Math.min(a, b.end), b.start);
};
z.J = function(a) {
  a = a.split(".");
  var b;
  b = a.shift();
  b = ug[b] || b;
  for (var c = z.vg[b];c && (b = a.shift());) {
    c = c[b];
  }
  return c;
};
var wg = function() {
  var a = (0,z.J)("embedded");
  if ("undefined" != typeof a) {
    a: {
      var b = ["embedded"], c;
      c = b.shift();
      c = ug[c] || c;
      for (var d = z.vg;null != d[c];) {
        if (0 === b.length) {
          d[c] = null;
          break a;
        }
        d = d[c];
        c = b.shift();
      }
    }
  }
  return a;
};
z.K = function(a, b) {
  return a(b || {}, null, z.vg);
};
z.xg = function(a, b) {
  return(0,z.Hd)((0,z.K)(a, b));
};
var yg = function() {
  var a = window.GLOBALS;
  z.vg = {};
  for (var b in ug) {
    z.vg[ug[b]] = a[b];
  }
  z.vg.deviceWidth = zg(function() {
    return window.document.body.clientWidth;
  });
  z.vg.deviceWidthImageBucket = zg(function() {
    return tg(window.document.body.clientWidth || 1200, Ag, 200, !0);
  });
  z.vg.$K = zg(function() {
    return window.document.body.clientHeight;
  });
  z.vg.aL = zg(function() {
    return tg(window.document.body.clientHeight || 1200, Ag, 200, !0);
  });
};
var zg = function(a) {
  return{valueOf:a, toString:function() {
    return String(Number(this));
  }};
};
z.Bg = function() {
  I.call(this);
};
z.Cg = function(a, b) {
  return(0,z.F)(a, "paragraphs", b);
};
z.Dg = function(a, b) {
  return(0,z.F)(a, "sections", b);
};
var Eg = function() {
  I.call(this);
};
var Fg = function(a) {
  return(0,z.A)(a, "layout");
};
var Gg = function(a, b) {
  return(0,z.F)(a, "layout", b);
};
z.Hg = function() {
  I.call(this);
};
z.Ig = function() {
  I.call(this);
};
z.Jg = function() {
  I.call(this);
};
z.Kg = function(a) {
  return(0,z.A)(a, "start");
};
z.Lg = function(a) {
  return(0,z.A)(a, "end");
};
z.Ng = function() {
  I.call(this);
};
z.Og = function(a) {
  return(0,z.A)(a, "backgroundImage");
};
z.Pg = function(a, b) {
  return(0,z.F)(a, "backgroundImage", b);
};
z.Qg = function(a, b) {
  return(0,z.F)(a, "textLayout", b);
};
z.Rg = function(a) {
  return(0,z.A)(a, "imageLayout");
};
z.Sg = function(a, b) {
  return(0,z.F)(a, "imageLayout", b);
};
z.Tg = function(a) {
  return(0,z.A)(a, "backgroundColor");
};
z.Ug = function() {
  I.call(this);
};
var Vg = function(a) {
  if (!a.length) {
    return!0;
  }
  for (var b = -1, c = 0;c < a.length;c++) {
    if (a[c]) {
      if (a[c].ta() <= b) {
        return!1;
      }
      b = a[c].ta();
    }
  }
  return!0;
};
var Wg = function(a, b) {
  for (var c = -1, d = 0;d < a.length;d++) {
    if (b >= a[d].ta()) {
      c = d;
    } else {
      break;
    }
  }
  return c;
};
z.Xg = function(a, b) {
  var c = Wg(a, b);
  return-1 == c ? null : a[c];
};
z.Yg = function(a, b, c) {
  var d = a[b].ta();
  return b + 1 >= a.length ? c - d : a[b + 1].ta() - d;
};
z.Zg = function() {
  this.De = {};
};
var $g = function(a, b) {
  var c = new z.ah(a);
  c.di = !1;
  b ? a.De[b] = c : a.dw = c;
};
z.bh = function(a) {
  var b = new z.ah(a);
  b.ye = !1;
  b.di = !0;
  a.dw = b;
};
z.ch = function(a, b, c, d) {
  var e = new z.ah(a);
  e.ye = !0;
  c && ((0,z.ma)(c) ? e.attributes = (0,z.Gb)(c) : e.attributes = c);
  if (d) {
    for (e.ye = b, c = 0;c < d.length;c++) {
      a.De[d[c].toUpperCase()] = e;
    }
  }
  return a.De[b] = e;
};
z.ah = function(a) {
  this.attributes = {};
  this.td = a;
  this.ye = !1;
  this.di = !0;
};
var dh = function() {
  var a = new z.Zg;
  $g(a, "SCRIPT");
  $g(a, "STYLE");
  $g(a, "HEAD");
  (0,z.bh)(a);
  return a;
};
var eh = function() {
  var a = dh();
  (0,z.ch)(a, "P", {name:!0, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}, ["DIV"]).td = fh;
  (0,z.ch)(a, "FIGURE", {name:!0, "class":["image-inset-left", "image-outset-left", "image-outset-center"]}).td = gh;
  (0,z.ch)(a, "UL").td = hh;
  (0,z.ch)(a, "OL").td = hh;
  (0,z.ch)(a, "HR", ["name"]).td = ih;
  (0,z.ch)(a, "H2", ["name"]).td = jh;
  (0,z.ch)(a, "H3", ["name"]).td = jh;
  (0,z.ch)(a, "BLOCKQUOTE", {name:!0, "class":["pullquote"]}).td = jh;
  (0,z.ch)(a, "PRE", ["name"]).td = jh;
  return a;
};
var kh = function(a) {
  try {
    return new Lf(a);
  } catch (b) {
    return window.console.warn("Malformed URI: ", a, b.stack), null;
  }
};
var lh = function(a) {
  if ("string" == typeof a && (a = kh(a), !a)) {
    return!1;
  }
  a = a.Nh();
  return!a || mh[a] || "localhost" == a;
};
z.M = function(a, b) {
  function c() {
  }
  c.prototype = a;
  var d = new c, e;
  for (e in b) {
    d[e] = b[e];
  }
  return d;
};
var nh = function(a) {
  var b = [], c;
  for (c in a) {
    b.push(c);
  }
  return b;
};
var N = function(a, b, c) {
  var d = "key_" + a + ":" + b, e = oh[d];
  if (void 0 === e || 0 > e) {
    oh[d] = 0, ph[d] = c;
  } else {
    if (0 == e) {
      throw Error('Encountered two active delegates with the same priority ("' + a + ":" + b + '").');
    }
  }
};
var qh = function(a, b) {
  var c = ph["key_" + a + ":" + b];
  c || "" == b || (c = ph["key_" + a + ":"]);
  return c ? c : rh;
  throw Error('Found no active impl for delegate call to "' + a + ":" + b + '" (and not allowemptydefault\x3d"true").');
};
var rh = function() {
  return "";
};
z.O = function(a) {
  return a && a.Ig && a.Ig === sh ? a.content : String(a).replace(th, uh);
};
z.vh = function(a) {
  return a && a.Ig && a.Ig === sh ? String(a.content).replace(wh, uh) : String(a).replace(th, uh);
};
z.P = function(a) {
  a && a.Ig && a.Ig === sh ? (a = String(a.content).replace(xh, "").replace(yh, "\x26lt;"), a = String(a).replace(wh, uh)) : a = String(a).replace(th, uh);
  return a;
};
var zh = function(a) {
  return "%" + a.charCodeAt(0).toString(16);
};
var Ah = function(a) {
  if (a && a.Ig === Bh) {
    return String(a).replace(Ch, Dh);
  }
  a = (0,window.encodeURIComponent)(String(String(a)));
  Eh.lastIndex = 0;
  return Eh.test(a) ? a.replace(Eh, zh) : a;
};
z.Q = function(a) {
  return a && a.Ig == Bh ? String(a).replace(Ch, Dh) : Fh(a);
};
var Gh = function(a) {
  a && a.Ig === Hh ? a = a.content : null == a ? a = "" : (a = String(a), a = Ih.test(a) ? a : "zSoyz");
  return a;
};
z.Jh = function(a) {
  return a && a.Ig === Kh ? "zSoyz" : String(a);
};
var uh = function(a) {
  return Rh[a];
};
var Dh = function(a) {
  return Sh[a];
};
var Fh = function(a) {
  a = String(a);
  return Th.test(a) ? a.replace(Ch, Dh) : "#zSoyz";
};
var Uh = function() {
  return Vh.test("iframe") ? "iframe" : "zSoyz";
};
z.Wh = function(a, b) {
  var c = kh(a);
  if (!c) {
    return "";
  }
  if ("javascript" == c.Be) {
    return window.console.warn("Attempted to pass JavaScript URI"), "";
  }
  var d = lh(c), e = d && "/r/" == c.ol();
  return!b && e ? String(c.Af.get("url")) : !b || d || e ? a : "/r/?url\x3d" + (0,window.encodeURIComponent)(a);
};
z.Xh = function(a) {
  return 2 == a ? Math.round(350) : 4 == a ? Math.round(525) : 3 == a ? 900 : 5 == a ? 2400 : 700;
};
var Yh = function(a, b) {
  if (!(0,z.Da)(b, a)) {
    return "";
  }
  var c = /\/([^\/]*)$/.exec(b);
  return c && (0,window.decodeURIComponent)(c[1]) || "";
};
var Zh = function(a, b, c) {
  var d = (0,z.R)(a, b, function() {
    (0,z.$h)(d);
    c.apply(this, arguments);
  }, void 0, void 0);
};
z.R = function(a, b, c, d, e) {
  if (!a) {
    throw Error("Can not add listener, element is not defined");
  }
  return ai(a, b, c, d, e);
};
var ai = function(a, b, c, d, e) {
  function f(b) {
    b = bi(b);
    c.call(d || a, b);
  }
  if (!a) {
    return null;
  }
  b = ci ? b : "on" + b;
  e = e || !1;
  a[di](b, f, e);
  return{N:a, type:b, ul:f, Xk:e};
};
z.$h = function(a) {
  if (a) {
    if ((0,z.ma)(a)) {
      for (var b = 0;b < a.length;b++) {
        (0,z.$h)(a[b]);
      }
    } else {
      a.N[ei](a.type, a.ul, a.Xk);
    }
  }
};
var bi = function(a) {
  var b = a || window.event;
  b.preventDefault || (b.preventDefault = function() {
    b.returnValue = !1;
  });
  b.stopPropagation || (b.stopPropagation = function() {
    b.cancelBubble = !0;
  });
  "mouseover" != b.type || b.relatedTarget || (b.relatedTarget = b.fromElement);
  "mouseout" != b.type || b.relatedTarget || (b.relatedTarget = b.toElement);
  return b;
};
z.fi = function(a) {
  return(0,z.Qc)(a, "section-divider");
};
z.gi = function(a) {
  return "DIV" === a.tagName && ((0,z.Qc)(a, "aspect-ratio-placeholder") || (0,z.Qc)(a, "aspect-ratio-fill"));
};
z.hi = function(a, b, c, d) {
  for (var e = c || window.document.body;a && a != e && !b(a);) {
    a = a.parentNode;
  }
  return c && !d && e == a || a && e != a && !(0,z.Td)(e, a) ? null : a;
};
z.ii = function(a, b, c) {
  a != window.document.body || ji || (a = window.document.documentElement);
  "function" == typeof a.scrollTo ? a.scrollTo(b, c) : (a.scrollTop = c, a.scrollLeft = b);
};
z.ki = function(a, b) {
  for (var c = {x:0, y:0}, d = b || window.document.body;a && a != d;) {
    c.y += a.offsetTop, c.x += a.offsetLeft, a = a.offsetParent;
  }
  return c;
};
z.li = function(a) {
  return(0,z.ki)(a, (0,z.mi)(a)).y;
};
z.mi = function(a) {
  for (a = a.parentNode;(0,z.Qd)(a) && "auto" != (0,z.zf)(a, "overflowY");a = a.parentNode) {
  }
  return(0,z.Qd)(a) ? a : window.document.body;
};
z.ni = function(a) {
  return a == window.document.body || a == window.document.documentElement ? (0,z.oi)() : new z.sf(a.scrollLeft, a.scrollTop, a.scrollWidth, a.scrollHeight);
};
z.oi = function() {
  return new z.sf(window.document.documentElement.scrollLeft || window.document.body.scrollLeft || 0, window.document.documentElement.scrollTop || window.document.body.scrollTop || 0, window.document.documentElement.scrollWidth || window.document.body.scrollWidth || 0, window.document.documentElement.scrollHeight || window.document.body.scrollHeight || 0);
};
z.pi = function(a) {
  return new z.sf(a.left, a.top, a.width, a.height);
};
z.qi = function(a) {
  a = 3 == a.nodeType || "BR" == a.tagName ? a.parentNode : a;
  var b = (0,z.pi)(a.getBoundingClientRect());
  if ("BODY" == a.tagName || "HTML" == a.tagName) {
    b.top = 0, b.bottom = (0,z.Ad)(window).height;
  }
  return b;
};
z.ri = function(a) {
  Hf(a.offsetHeight);
};
z.si = function(a) {
  a = a.tagName;
  return "OL" == a || "UL" == a;
};
z.ti = function(a) {
  return "true" == a.contentEditable || "INPUT" == a.tagName && "text" == a.type || "TEXTAREA" == a.tagName;
};
var ui = function(a, b) {
  (0,z.Qd)(b) ? a.appendChild(b) : (0,z.ma)(b) ? b.forEach(function(b) {
    ui(a, b);
  }) : a.appendChild(window.document.createTextNode(String(b)));
};
var vi = function(a) {
  this.id = a;
  this.Cg = {};
};
var wi = function(a, b) {
  return "undefined" == typeof b ? !(0,z.zb)(a.Cg) : !!a.Cg[b];
};
z.yi = function(a, b, c) {
  zi();
  Ai.D(a, b, c);
  return Ai;
};
z.Bi = function(a) {
  Ci && Ai.clear(a);
};
z.Di = function(a) {
  zi();
  var b;
  "string" == typeof a ? b = a : (b = a.getAttribute("data-action-scope"), b || (b = "_actionscope_" + Ei++, a.setAttribute("data-action-scope", b)));
  Fi[b] || (Fi[b] = new vi(b));
  return Fi[b];
};
z.Gi = function(a) {
  a = "string" == typeof a ? a : a instanceof vi ? a.id : a.getAttribute("data-action-scope");
  Fi[a] && (Fi[a].clear(), delete Fi[a]);
};
var zi = function() {
  Ci || (Ci = !0, (0,z.R)(window.document.body, "click", Hi), (0,z.R)(window.document.body, "mousedown", Ii), (0,z.R)(window.document, "keydown", Ji), Ai = (0,z.Di)(window.document.body));
};
var Ki = function(a) {
  return z.w && !(0,z.id)(9) ? 1 == a.button : z.ce && z.Li ? !a.button && !a.ctrlKey : !a.button;
};
var Ii = function(a) {
  if (Ki(a)) {
    var b = Mi(a), c = a.target;
    b && !(0,z.Zd)(c, z.ti) && a.preventDefault();
  }
};
var Hi = function(a) {
  !Ki(a) || (0,z.Zd)(a.target, z.ti) || !Ni(a) || a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || (a.preventDefault(), a.stopPropagation());
};
var Ji = function(a) {
  13 == a.keyCode && Ni(a) && a.preventDefault();
};
var Mi = function(a) {
  for (var b = a.target;b && b != window.document;) {
    var c = b.getAttribute("data-action");
    if (c) {
      return{he:c, target:b, value:b.getAttribute("data-action-value"), event:a, Wn:a.metaKey || a.shiftKey || a.altKey || a.ctrlKey};
    }
    b = b.parentNode;
  }
  return null;
};
var Ni = function(a) {
  return Ci ? (a = Mi(a)) ? Oi(a) : !1 : !1;
};
var Oi = function(a) {
  if (a.target.disabled) {
    return!1;
  }
  for (var b = a.target, c = !1;b && b != window.document;) {
    var d = Fi[b.getAttribute("data-action-scope")];
    if (d) {
      if (d = d.Zc(a)) {
        return!0;
      }
      c = c || !1 === d;
    }
    b = b.parentNode;
  }
  return c;
};
var Pi = function() {
  "animation-name" in Qi || (Qi["animation-name"] = {});
  if (!("a" in Qi["animation-name"])) {
    var a = Qi["animation-name"], b;
    "CSS" in window && "supports" in window.CSS ? b = window.CSS.supports("animation-name", "a") ? "native" : window.CSS.supports((0,z.qf)() + "-animation-name", "a") ? "prefixed" : "unsupported" : (b = window.document.createElement("div"), b = (0,z.Va)("animation-name") in b.style ? "native" : (0,z.pf)() + (0,z.Xa)("animation-name") in b.style ? "prefixed" : "unsupported");
    a.a = b;
  }
  return Qi["animation-name"].a;
};
z.Ri = function(a, b) {
  z.wc.call(this);
  this.pa = a;
  this.wq = (0,z.ma)(b) ? b : [b];
  this.dp = {};
  this.Ns = null;
  (0,z.r)(this, this.pause, this);
  (0,z.Cc)(this, this.CF, this);
};
var Si = function(a) {
  return "prefixed" == Pi() ? (0,z.pf)().toLowerCase() + "Animation" + a.charAt(0).toUpperCase() + a.substr(1) : "animation" + a;
};
z.Ti = function(a, b, c, d) {
  var e = c ? (0,z.Gb)(c) : null;
  a.wq.forEach(function(a) {
    e && !(a.name in e) || d && !d.call(this, a.name) || (a.paused = b);
  }, a);
  Ui(a);
  return a;
};
var Ui = function(a) {
  var b = (0,z.Kb)(a.wq, function(a) {
    a.paused || (this.dp[a.name] = !1);
    return a.paused ? "paused" : "running";
  }, a);
  (0,z.uf)(a.pa, "animationPlayState", b.join(","));
};
var Vi = function() {
  z.v.call(this);
  this.Ce = [];
  this.Df = {};
};
var Wi = function(a) {
  delete a.Ce;
  delete a.Df;
  delete a.qo;
};
var Xi = function(a) {
  this.uq = a;
  this.xm = {};
};
var Yi = function(a) {
  if (Zi) {
    for (var b = {}, c = a.ue(), d = 0;d < c.length;d++) {
      b[c[d]] = a.get(c[d]);
    }
    return b;
  }
  return a.xm;
};
var $i = function(a, b) {
  this.Gz = a;
  this.nK = b;
  this.tm = (0,z.aj)() + ":" + String(Math.random()).substr(2);
  this.sb = new Xi("MUTEX_" + a);
};
var bj = function(a) {
  var b = String(a.sb.get("Y") || "");
  return "" === b || Number(b.split("|")[1]) < (0,z.aj)() - a.nK;
};
var cj = function(a, b, c) {
  var d;
  try {
    d = b.call(c);
  } finally {
    d instanceof z.wc ? (0,z.Cc)(d, a.ty, a) : a.ty();
  }
};
var dj = function(a, b, c, d) {
  this.ea = a.get("request");
  this.Vc = b;
  this.hp = this.bK = c;
  this.fH = d;
  this.mH = new $i(b, 3E4);
  this.sb = new Xi(b);
  this.Tq = null;
  this.Lq = !1;
  this.hF = String(Math.random()).substr(2);
  this.dt = 0;
  (0,z.R)(window, "beforeunload", this.Gt, this);
  ej(this);
};
var fj = function(a, b) {
  if (!b) {
    throw Error("Client reports a null stat");
  }
  a.dt = (a.dt + 1) % a.fH;
  a.sb.put(a.hF + "|" + a.dt, b);
  ej(a);
};
var gj = function(a, b) {
  var c = [], d = !1, e;
  for (e in b) {
    b[e] || (d = !0, a.sb.remove(e), delete b[e], /^\d+\|\d+$/.test(e) || c.push(e));
  }
  d && (0 < c.length && (d = Error("Reported stats are null from " + (Zi ? "LocalStorage" : "InMemoryStorage")), hj(d, "unrecognizedKeys", c), (0,z.ij)(d)), Zi = !1);
};
var ej = function(a) {
  a.Lq || null != a.Tq || (a.Tq = window.setTimeout(a.AA.bind(a), a.hp));
};
var jj = function() {
};
var kj = function() {
};
var lj = function() {
  var a = mj(nj);
  return a ? new window.ActiveXObject(a) : new window.XMLHttpRequest;
};
var mj = function(a) {
  if (!a.xC && "undefined" == typeof window.XMLHttpRequest && "undefined" != typeof window.ActiveXObject) {
    for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new window.ActiveXObject(d), a.xC = d;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.xC;
};
var oj = function(a, b, c, d) {
  var e = !1, f = new z.wc(function() {
    e = !0;
    h.abort();
    h.onreadystatechange = z.ea;
  }), h = pj(a, b, c, d, function(a) {
    e || (e = !0, f.Ea(a));
  }, function(a) {
    e || (e = !0, f.$d(a));
  });
  return f;
};
var pj = function(a, b, c, d, e, f) {
  d = d || {};
  var h = e || z.ea, k = f || z.ea, l, m = lj();
  try {
    m.open(a, b, !0);
  } catch (s) {
    return k(new qj("Error opening XHR: " + s.message, b, m)), m;
  }
  m.onreadystatechange = function() {
    if (4 == m.readyState) {
      window.clearTimeout(l);
      var a;
      a: {
        switch(m.status) {
          case 200:
          ;
          case 201:
          ;
          case 202:
          ;
          case 204:
          ;
          case 206:
          ;
          case 304:
          ;
          case 1223:
            a = !0;
            break a;
          default:
            a = !1;
        }
      }
      !a && (a = 0 === m.status) && (a = (0,z.If)(b)[1] || null, !a && window.self.location && (a = window.self.location.protocol, a = a.substr(0, a.length - 1)), a = a ? a.toLowerCase() : "", a = !("http" == a || "https" == a || "" == a));
      a ? h(m) : k(new rj(m.status, b, m));
    }
  };
  e = !1;
  if (d.headers) {
    for (var x in d.headers) {
      m.setRequestHeader(x, d.headers[x]);
    }
    e = "Content-Type" in d.headers;
  }
  "POST" != a || e || m.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  d.withCredentials && (m.withCredentials = d.withCredentials);
  d.Tw && m.overrideMimeType(d.Tw);
  0 < d.Jx && (l = window.setTimeout(function() {
    m.onreadystatechange = z.ea;
    m.abort();
    k(new sj(b, m));
  }, d.Jx));
  try {
    m.send(c);
  } catch (L) {
    k(new qj("Error sending XHR: " + L.message, b, m));
  }
  return m;
};
var qj = function(a, b, c) {
  z.Ca.call(this, a + ", url\x3d" + b);
  this.url = b;
  this.gm = c;
};
var rj = function(a, b, c) {
  qj.call(this, "Request Failed, status\x3d" + a, b, c);
  this.status = a;
};
var sj = function(a, b) {
  qj.call(this, "Request timed out", a, b);
};
var tj = function(a, b) {
  uj[a] = b;
};
var hj = function(a, b, c) {
  a.km || (a.km = {});
  a.km[b] = c;
};
var vj = function(a) {
  if (wj) {
    throw Error("Guard reporter already configured");
  }
  wj = a;
};
var xj = function() {
  var a = window || window, b = a.onerror;
  a.onerror = function(a, d, e) {
    b && b(a, d, e);
    d = String(d).split(/[\/\\]/).pop();
    (0,z.ij)({message:a, fileName:d, NC:e});
    return!0;
  };
};
var yj = function() {
  var a = pj;
  pj = function(b, c, d, e, f, h) {
    f = f ? Sb.Yj(f) : null;
    h = h ? Sb.Yj(h) : null;
    return a(b, c, d, e, f, h);
  };
  pj.__originalFn = a;
};
var zj = function() {
  var a = z.R;
  z.R = function(b, c, d, e, f) {
    return a(b, c, Sb.Yj(d), e, f);
  };
  z.R.__originalFn = a;
};
var Aj = function() {
  var a = window.setTimeout;
  window.setTimeout = function(b, c) {
    b = Sb.Yj(b);
    return a.call ? a.call(this, b, c) : a(b, c);
  };
  window.setTimeout.__originalFn = a;
};
var Bj = function() {
  var a = window.setInterval;
  window.setInterval = function(b, c) {
    b = Sb.Yj(b);
    return a.call ? a.call(this, b, c) : a(b, c);
  };
  window.setInterval.__originalFn = a;
};
z.Cj = function(a) {
  "string" == typeof a && (a = Error(a));
  Dj(a) || (0,z.ij)(a);
};
var Dj = function(a) {
  for (var b = a.message + a.stack, c = 0;c < Ej.length;c++) {
    var d = Ej[c];
    if ("string" == typeof d) {
      if (-1 != b.indexOf(d)) {
        return!0;
      }
    } else {
      if (a instanceof d) {
        return!0;
      }
    }
  }
  return!1;
};
z.ij = function(a) {
  if (!(Dj(a) || 50 < Fj)) {
    Fj++;
    var b = {}, c;
    for (c in uj) {
      b[c] = String(uj[c]);
    }
    if (a.km) {
      for (c in a.km) {
        b[c] = String(a.km[c]);
      }
    }
    a = {message:a.message, name:a.name, lineNumber:a.lineNumber || a.line || "Not available", fileName:a.fileName || a.filename || a.sourceURL || window.location.href, stack:a.stack || "Not available", timestamp:(new Date).getTime(), extra:b};
    wj ? fj(wj, a) : Gj.push(a);
  }
};
var Hj = function() {
};
z.Ij = function() {
  Vi.call(this);
  this.gn = [];
};
var Jj = function(a, b) {
  for (var c = 0;c < a.gn.length;c++) {
    if (a.gn[c][0] == b) {
      return a.gn[c][1];
    }
  }
  return null;
};
z.Kj = function() {
  z.Ij.call(this);
  this.wg = !1;
  this.ya = [];
  this.xq = [];
};
z.Lj = function(a, b, c, d, e) {
  c = b.F(c, d, e || a);
  a.xq.push([b, c]);
};
var Mj = function(a, b) {
  z.Kj.call(this);
  b && this.H();
};
var Nj = function() {
  for (var a = '\x3cul class\x3d"image-washes"\x3e', b = "grey blue yellow teal purple red ".split(" "), c = b.length, d = 0;d < c;d++) {
    a += '\x3cli class\x3d"image-washes-item"\x3e\x3cbutton class\x3d"btn-image-wash" data-action\x3d"wash" data-action-value\x3d"' + (0,z.P)(b[d]) + '"\x3e\x3c/button\x3e\x3c/li\x3e';
  }
  return a + "\x3c/ul\x3e";
};
z.Oj = function() {
  var a;
  a = {};
  return'\x3cdiv class\x3d"upload-feedback" data-action\x3d"dummy"\x3e\x3cdiv class\x3d"upload-feedback-preview"\x3e\x3c/div\x3e\x3cdiv class\x3d"upload-feedback-inner"\x3e\x3cdiv class\x3d"progress-bar-wrap"\x3e\x3cdiv class\x3d"progress-bar"\x3e\x3c/div\x3e\x3c/div\x3e' + (a.TT ? "" : '\x3cbutton data-action\x3d"cancel-upload" class\x3d"btn btn-chromeless btn-light btn-cancel"\x3e\x26#215;\x3c/button\x3e') + "\x3c/div\x3e\x3c/div\x3e";
};
z.Pj = function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-chromeless btn-replace-image ' + (a.ab ? "btn-light" : "") + ' image-controls distraction-free-component" data-action\x3d"pick-image"' + (a.aE ? 'data-tooltip\x3d"' + (0,z.P)(a.aE) + '"' : "") + '\x3e\x3cspan class\x3d"icons icons-replace-image"\x3e\x3c/span\x3e\x3cspan class\x3d"screen-reader-text"\x3eUpload an optional image.\x3c/span\x3e\x3c/button\x3e';
};
z.Qj = function(a, b, c) {
  b = "";
  if (a.imageId) {
    var d = c.useragent && c.useragent.isMobile && a.qM ? a.qM : a.width ? a.width : c.deviceWidthImageBucket ? c.deviceWidthImageBucket : c.deviceWidth, e = c.useragent && c.useragent.isMobile && a.pM ? a.pM : a.height ? a.height : Math.round(0.8 * d), f = a.cropType ? a.cropType : "c", d = c.variants.use_retina_images ? Math.round(d * c.devicePixelRatio) : Math.round(d), e = c.variants.use_retina_images ? Math.round(e * c.devicePixelRatio) : Math.round(e);
    b += (0,z.O)(c.miroUrl) + "/";
    switch(a.strategy) {
      case "resample":
        b += "max/" + (0,z.O)(d);
        break;
      case "crop-fixed":
        b += "fit/" + (0,z.O)(f) + "/" + (0,z.O)(d) + "/" + (0,z.O)(e);
        break;
      case "crop-preserve":
        b += "fit/" + (0,z.O)(f) + "/" + (0,z.O)(d) + "/" + (0,z.O)(a.height * d);
        break;
      default:
        b += "proxy";
    }
    b += (a.filter ? "/desat/multiply/" + (0,z.O)(a.filter) + "/overlay/" + (0,z.O)(a.filter) : "") + (a.verticalGradient ? "/gradv/" + (0,z.O)(a.verticalGradient) : "") + (a.darken ? "/darken/" + (0,z.O)(a.darken) : "") + (a.blur ? "/blur/" + (0,z.O)(a.blur) : "") + "/" + (0,z.O)(a.imageId);
  }
  return b;
};
z.Rj = function(a, b) {
  var c = "", d = a.Pw ? (0,z.Sj)(a, 0, b) : (0,z.Tj)(a, 0, b), e = a.Pw ? (0,z.Sj)((0,z.M)(a, {Th:!0}), 0, b) : (0,z.Tj)((0,z.M)(a, {Th:!0}), 0, b);
  return c += '\x3ccanvas class\x3d"canvas-renderer"\x3e\x3c/canvas\x3e\x3cdiv class\x3d"image-' + (0,z.P)(a.size) + '-bleed"' + (d && e ? 'data-scroll\x3d"blur-cover" data-image-url\x3d"' + (0,z.P)((0,z.Q)(d)) + '" data-image-blur-url\x3d"' + (0,z.P)((0,z.Q)(e)) + '"' : "") + '\x3e\x3cdiv class\x3d"image-src picker-target"' + (d ? "style\x3d\"background-image: url('" + (0,z.P)((0,z.Q)(d)) + "')\"" : "") + "\x3e\x3c/div\x3e\x3c/div\x3e";
};
z.Sj = function(a, b, c) {
  return(0,z.Qj)((0,z.M)(a.image, {strategy:"crop-fixed", darken:a.Th ? 50 : 25, verticalGradient:a.Th ? "29/81/40" : "29/81/60", blur:a.Th ? 50 : null}), 0, c);
};
z.Tj = function(a, b, c) {
  return(0,z.Qj)((0,z.M)(a.image, {strategy:"crop-fixed", darken:a.Th ? 25 : 0, verticalGradient:a.Th ? "29/81/40" : "29/81/30", blur:a.Th ? 50 : null}), 0, c);
};
var ck = function(a, b) {
  return dk(a) + (!a.post.latestPublishedVersion && a.post.creatorId == b.currentUser.userId && b.supportsEdit ? "/edit" : "");
};
var dk = function(a) {
  var b = a.post.id || a.post.postId;
  return a = "" + ("/" + (a.yc ? (0,z.O)(a.yc) : a.collection ? (0,z.O)(a.collection.slug) : a.post.homeCollection ? (0,z.O)(a.post.homeCollection.slug) : "p") + "/" + (0,z.O)(b));
};
z.ek = function(a) {
  return a.user.userId ? "/@" + (0,z.O)(a.user.username) : "/m/errors/404";
};
var fk = function(a, b, c) {
  b = "";
  var d = a.imageId ? (0,z.Qj)({imageId:a.imageId, strategy:"crop-fixed", width:"150", height:"150", cropType:"t"}, 0, c) : "https:" + (0,z.O)(c.defaultPreviewImage);
  return b += "https://www.facebook.com/dialog/feed? app_id\x3d" + Ah(c.facebookKey) + "\x26 link\x3d" + Ah(a.url) + "\x26 name\x3d" + Ah(a.title) + "\x26 display\x3dpopup\x26 picture\x3d" + Ah(d) + "\x26 caption\x3d" + Ah(a.caption) + "\x26 description\x3d" + Ah(a.description) + "\x26 redirect_uri\x3d" + Ah(a.JM);
};
var gk = function(a) {
  this.ca = a;
  this.ha = a.get("app");
  this.W = a.get("dialog");
  this.tp = a.get("gestures");
  this.la = a.get("datastore").Db[hk];
  this.Z = "";
  this.pz = (0,z.R)(window.document.body, "keyup", this.pu, this);
  this.tp.F("flickleft", this.Tz, this);
  this.tp.F("flickright", this.Uz, this);
  (0,window.setTimeout)(this.tA.bind(this), 3E3);
};
var ik = function(a) {
  (0,z.q)(a.vf(), function(a) {
    a ? (this.Z = a.get("id"), a = (0,z.K)(dk, {post:a.cb()}), (0,z.q)(this.ha.navigate(a, {Mo:this.tK.bind(this)}), this.tA, this)) : this.W.open({title:"No more posts", bodyHtml:"You have come to the end of your PRL", type:z.jk});
  }, a);
};
z.kk = function(a) {
  z.Ij.call(this);
  this.sb = a || {};
  this.ot = {};
};
z.lk = function(a, b) {
  var c = a.get(b);
  return null != c ? String(c) : "";
};
z.mk = function(a, b) {
  var c = a.get(b);
  return null != c ? Number(c) : 0;
};
z.nk = function(a) {
  a.X("remove", a);
};
z.ok = function(a) {
  z.Ij.call(this);
  this.Qa = a || [];
  this.TC = {};
};
z.pk = function(a, b) {
  return a.Qa[b] || null;
};
z.qk = function(a, b, c) {
  return a.find(function(a) {
    return a.get(b) === c;
  });
};
var rk = function(a, b) {
  for (var c = 0;c < a.Qa.length;c++) {
    if (a.Qa[c].get("id") === b) {
      return c;
    }
  }
  return-1;
};
var sk = function(a, b) {
  b.F("change", a.$z, a);
  b.F("remove", a.bA, a);
};
var tk = function(a, b) {
  b.Ba("change", a.$z, a);
  b.Ba("remove", a.bA, a);
};
var uk = function(a) {
  z.ok.call(this);
  this.js = a.get("request");
  this.Ac = (0,z.r)(new z.wc, z.ij);
  this.np = 0;
};
var vk = function(a, b) {
  var c = a.Ug(b);
  if (null != c && !Array.isArray(c)) {
    throw Error("Malformed processed response");
  }
  return c;
};
var wk = function(a) {
  return a.wl && !a.Ac.Nc;
};
z.xk = function(a) {
  if (!a.wl) {
    var b = (0,z.Cc)((0,z.r)((0,z.q)(a.js.send(a.yp, yk(a, a.Nt), a.Nt, {na:!0, background:!0}), a.xM, a), a.dD, a), a.yD, a);
    a.Ac = a.kj(b);
    a.wl = !0;
  }
  return zk(a, a.Ac);
};
var Ak = function(a, b, c) {
  if (!a.Di) {
    return zk(a, a.Ac);
  }
  a.np = Math.max(a.np, b + a.count());
  wk(a) ? (0,z.Cc)(a.Ac, a.My, a) : a.My(!!c);
  return zk(a, a.Ac);
};
var zk = function(a, b) {
  return(0,z.q)(b.zb(), function() {
    return this;
  }, a);
};
z.Bk = function(a, b) {
  uk.call(this, a);
  this.Vc = b;
  this.Nt = null;
  this.Ny = Ck;
};
var Ck = function(a) {
  return{count:a, ignore:(0,z.Kb)(this.Qa, function(a) {
    return a.get("id");
  })};
};
var yk = function(a, b) {
  var c = a.Vc;
  "GET" == a.yp && b && (c += -1 == c.indexOf("?") ? "?" : "\x26", c += $f(b));
  return c;
};
z.Dk = function(a, b) {
  var c = a.name;
  Ek(["_trackEvent", "Event", c]);
  Fk(["record", c, (0,z.Ab)(b)]);
  Gk(a, b);
};
var Hk = function(a, b) {
  Ik[a] = b;
};
var Gk = function(a, b) {
  var c = a.name, d;
  for (d in Ik) {
    var e = Ik[d];
    b[d] = "function" == typeof e ? e() : e;
  }
  Jk({type:"e", key:c, data:b});
};
z.Kk = function(a) {
  Jk({type:"i", key:"string" === typeof a ? a : a.name});
};
z.Lk = function(a, b) {
  b = Math.max(0, b);
  3E4 < b || Jk({type:"t", key:a, value:b});
};
var Jk = function(a) {
  a.timestamp = Date.now();
  a.eventId = Date.now().toString(36) + Math.round(1E16 * Math.random()).toString(36);
  fj(Mk, a);
};
var Nk = function(a) {
  Mk = a;
};
var Ek = function(a) {
  (0,z.J)("variants.dont_track_user") || window._gaq && window._gaq.push(a);
};
var Fk = function(a) {
  if (!(0,z.J)("variants.dont_track_user") && window._kmq) {
    var b = Ik.userId;
    if (!(0,z.J)("variants.dont_track_user")) {
      var c = window.KM, d = window._kmq;
      c && d && (d = c.i(), b && d && d !== b && c.alias(d, b));
    }
    window._kmq.push(a);
  }
};
z.Ok = function(a, b, c) {
  var d;
  a: {
    switch(a) {
      case 1:
        d = "page-type";
        break a;
      case 2:
        d = "user";
        break a;
    }
    d = "unknown";
  }
  Ek(["_setCustomVar", a, d, b, c || 3]);
};
var Pk = function(a) {
  this.ca = a;
  this.Dd = a.get("request");
  this.Fk = {};
  this.mg = {};
  this.Db = {};
  this.Zs = {};
  this.it = null;
};
z.Qk = function(a, b) {
  if (!Rk(b)) {
    var c = Error("An unpopulated object was sent in to upsertPostMeta");
    hj(c, "post", b);
    (0,z.ij)(c);
  }
  c = b.id;
  if (!c) {
    throw Error("Upserted data without id");
  }
  var d = a.Fk[c];
  d ? d.ni(b) : (d = new z.kk(b), a.Fk[c] = d);
  return d;
};
var Sk = function(a, b, c) {
  if (a.Zs[b]) {
    throw Error("Collection list already exists with id\x3d" + b);
  }
  c = new Tk(a.ca, c);
  c.Ug = Uk;
  return a.Zs[b] = c;
};
z.Vk = function(a, b, c, d) {
  if (a.Db[b]) {
    throw Error("Post list already exists with id\x3d" + b);
  }
  c = new Wk(a.ca, c);
  c.yp = d.toUpperCase();
  c.qs("id", b);
  c.Ug = Uk;
  return a.Db[b] = c;
};
var Xk = function(a, b, c) {
  c = c || "recommended";
  var d = b + ":" + c + ":" + (0,z.Yk)();
  a = (0,z.Vk)(a, d, "/" + b + "/load-more?sortBy\x3d" + c, "POST");
  a.qs("preferredCollection", b);
  return a;
};
z.Zk = function(a, b) {
  if (!Rk(b)) {
    var c = Error("An unpopulated object was sent in to upsertCollectionMeta");
    hj(c, "collection", b);
    (0,z.ij)(c);
  }
  var c = b.slug, d = a.mg[c];
  d ? d.ni(b) : (d = new z.kk(b), a.mg[c] = d);
  return d;
};
z.Yk = function() {
  var a = Math.round(1E3 * Math.random());
  return(0,z.aj)() - $k + "." + a;
};
var Uk = function(a) {
  var b = a;
  a.value && (b = (0,z.al)(a.value, a.references));
  if (Array.isArray(b) || null == b) {
    return b;
  }
  (0,z.Cj)("Malformed server response " + JSON.stringify(b));
  return null;
};
var Wk = function(a, b) {
  z.Bk.call(this, a, b);
  this.aa = a.get("datastore");
};
var Tk = function(a, b) {
  z.Bk.call(this, a, b);
  this.aa = a.get("datastore");
};
z.bl = function(a) {
  this.xh = a;
};
z.cl = function(a, b) {
  for (var c = (0,z.Xg)(a.mk(), b), c = c ? c.ta() : 0;b >= c && 7 == a.Vf(b);) {
    b--;
  }
  return b;
};
z.dl = function(a, b) {
  var c = Wg(a.mk(), b), d = a.Ci().length;
  if (-1 == c) {
    c = d;
  } else {
    var e = a.mk(), c = e[c].ta() + (0,z.Yg)(e, c, d)
  }
  for (d = b + 1;d <= c && 7 == a.Vf(d);) {
    d++;
  }
  return d;
};
var el = function(a) {
  for (var b = a.Ci(), c = {}, d = 0;d < b.length;d++) {
    d in c || (0,z.fl)(a, d, c);
  }
  return c;
};
z.fl = function(a, b, c) {
  var d = (0,z.cl)(a, b);
  b = (0,z.dl)(a, b);
  a = a.Ci();
  if (a[d]) {
    if (6 != Fg(a[d])) {
      for (a = d;a < b;a++) {
        c[a] = null;
      }
    } else {
      b = a.slice(d, b).map(function(a) {
        var b = a.getMetadata();
        a = b && b.Ph() || 0;
        b = b && b.nl() || 0;
        return gl(a, b);
      });
      var e = b.reduce(function(a, b) {
        return a + b;
      }, 0);
      for (a = 0;a < b.length;a++) {
        c[d + a] = gl(100 * b[a], e);
      }
    }
  }
};
var hl = function() {
  I.call(this);
};
var il = function() {
  I.call(this);
};
var jl = function() {
  I.call(this);
};
var kl = function() {
  I.call(this);
};
var ll = function() {
  I.call(this);
};
var ml = function() {
  I.call(this);
};
var nl = function() {
  I.call(this);
};
var ol = function() {
  I.call(this);
};
var pl = function() {
  I.call(this);
};
var ql = function() {
  I.call(this);
};
z.rl = function() {
  I.call(this);
};
var sl = function() {
  I.call(this);
};
var tl = function() {
  I.call(this);
};
var ul = function(a) {
  this.delta = a;
  this.Ik = this.selection = this.fj = null;
  this.IC = !1;
};
var vl = function(a, b, c) {
  z.wl[a] = b;
  xl[a] = c;
};
z.yl = function(a) {
  return(new z.wl[a]).Hb(a);
};
z.zl = function(a) {
  return new (xl[a.g()])(a);
};
var Al = function(a) {
  var b = a.il();
  if (b) {
    return b;
  }
  b = new z.Bg;
  a.Tl(b);
  return b;
};
var Bl = function(a) {
  a = Al(a);
  var b = a.qc();
  if (b) {
    return b;
  }
  b = [];
  (0,z.Cg)(a, b);
  return b;
};
var Cl = function(a) {
  a = Al(a);
  var b = a.gc();
  if (b) {
    return b;
  }
  b = [];
  (0,z.Dg)(a, b);
  return b;
};
z.Dl = function(a, b) {
  var c = a.Qe(b);
  a.Ik || (a.Ik = c);
};
var El = function(a) {
  return this.delta.g() == a.delta.g() ? Fl(this, a) : null;
};
var Gl = function(a) {
  return this.delta.g() == a.delta.g() && this.delta.Fb() == a.delta.Fb() ? Fl(this, a) : null;
};
var Fl = function(a, b) {
  var c = (0,z.zl)(z.Hl.ja(b.delta));
  c.Ik = a.Ik && z.Hl.ja(a.Ik);
  c.selection = b.selection;
  return c;
};
var Il = function() {
  throw Error("Playback of this revision invalid");
};
z.Jl = function() {
  I.call(this);
};
z.Kl = function() {
  I.call(this);
};
z.Ll = function() {
  I.call(this);
};
z.Ml = function() {
  I.call(this);
};
z.Nl = function() {
  I.call(this);
};
z.Ol = function(a, b) {
  z.Hl.ja(a);
  this.mc = [];
  this.vk = b ? a : z.Hl.ja(a);
  this.Tu = [];
  this.Ai = null;
  this.iu = -1;
};
z.Pl = function(a) {
  return a.vk.il();
};
z.Ql = function(a, b) {
  var c = (0,z.zl)(z.Hl.ja(b)), d = (0,z.Ya)(a.mc);
  d && !d.selection && (d = d.Qg(c)) && (a.mc.pop(), c = d);
  (0,z.Dl)(c, a.vk);
  c.fj = (0,z.aj)();
  a.mc.push(c);
  a.Tu.length = 0;
  a.Ai && a.Ai.call(null, z.Hl.ja(c.delta));
};
var Rl = function(a) {
  ul.call(this, a);
};
var Sl = function(a) {
  ul.call(this, a);
};
var Tl = function(a) {
  ul.call(this, a);
};
var Ul = function(a) {
  ul.call(this, a);
};
var Vl = function(a) {
  ul.call(this, a);
};
var Wl = function(a) {
  ul.call(this, a);
};
var Xl = function(a) {
  ul.call(this, a);
};
var Yl = function(a) {
  ul.call(this, a);
};
var Zl = function(a) {
  ul.call(this, a);
};
var $l = function(a) {
  ul.call(this, a);
};
var am = function(a) {
  ul.call(this, a);
};
var bm = function(a) {
  ul.call(this, a);
};
var cm = function(a, b, c) {
  b.g();
  var d = (0,z.hg)(a, c);
  (0,z.F)(a, c, b.rc());
  return(0,z.yl)(b.g()).ri(d);
};
z.dm = function(a) {
  return a.content ? a.content.bodyModel ? z.Hl.Cb(z.Bg, a.content.bodyModel) : null : null;
};
z.em = function(a) {
  return(new z.Ug).Tl(a);
};
z.fm = function(a, b) {
  var c = (0,z.em)(a), c = new z.Ol(c, !0), d = null, e = a.gc() || [], f = a.qc() || [];
  b.dC && (d = {}, e.concat(f).forEach(function(a) {
    d[a.getName()] = !0;
  }));
  gm(c, d);
  hm(c, d, !!b.VK);
  im(c);
  (0,z.jm)(c);
  b.jE || km(c);
  return c.Ir(0);
};
z.jm = function(a, b) {
  for (var c = !1, d = (0,z.Pl)(a).qc() || [], e = b && b.start || 0, f = Math.min(b && (0,z.pa)(b.end) ? b.end : window.Infinity, d.length);e < f;e++) {
    var h = d[e], k = d[e + 1], l = Fg(h);
    7 == l ? c || (k = (c = k && 7 == Fg(k)) ? 6 : 1, (0,z.Ql)(a, (0,z.yl)(3).nb(e).gg(Gg(h.ja(), k)))) : 6 == l ? (c = !0, k && 7 == Fg(k) || (0,z.Ql)(a, (0,z.yl)(3).nb(e).gg(Gg(h.ja(), 1)))) : c = !1;
  }
};
var im = function(a) {
  var b = (0,z.Pl)(a);
  b.gc();
  for (var b = b.qc() || [], c = 0, d = null, e = !1, f = null;d = b[c];) {
    if (5 == d.g()) {
      e = !0, f = d.getName(), (0,z.Ql)(a, (0,z.yl)(2).nb(c));
    } else {
      if (e) {
        var d = a, e = c, h = (0,z.Pl)(d).gc() || [], k = e, l = (0,z.Xg)(h, k);
        l && l.ta() == k || (h = Wg(h, e), e = (new z.Ng).Sd(e), f && e.Xa(f), (0,z.Ql)(d, (0,z.yl)(8).nb(h + 1).hg(e)));
      }
      e = !1;
      f = null;
      c++;
    }
  }
};
var km = function(a) {
  for (var b = (0,z.Pl)(a).gc() || [], c = 0;c < b.length;c++) {
    var d = b[c];
    if (2 == (0,z.Rg)(d)) {
      var e = d.ta(), f = (0,z.Og)(d), d = (new z.Ng).Sd(e).Xa(d.getName()), f = Gg((new Eg).Hb(4), 1).Gc(f), f = (0,z.F)(f, "markups", []);
      (0,z.Ql)(a, (0,z.yl)(1).nb(e).gg(f));
      (0,z.Ql)(a, (0,z.yl)(10).nb(c).hg(d));
    }
  }
};
var hm = function(a, b, c) {
  ((0,z.Pl)(a).qc() || []).length || (c = new z.lm("", c ? 2 : 1, ""), b && (0,z.mm)(c, b), (0,z.Ql)(a, (0,z.yl)(1).nb(0).gg(c.Cb())));
};
var gm = function(a, b) {
  var c = (0,z.Pl)(a), d = c.gc() || [];
  d.length || (d = (new z.Ng).Sd(0), b && (0,z.nm)(d, b), (0,z.Ql)(a, (0,z.yl)(8).nb(0).hg(d)), d = c.gc());
  0 != d[0].ta() && ((0,z.Ql)(a, (0,z.yl)(10).nb(0).hg(d[0].ja().Sd(0))), d = c.gc());
  for (var e = 1;e < d.length;e++) {
    var f = d[e - 1];
    d[e].ta() == f.ta() && ((0,z.Ql)(a, (0,z.yl)(9).nb(e)), d = c.gc(), e--);
  }
};
z.nm = function(a, b) {
  a.getName() ? b[a.getName()] = !0 : a.Xa(om(b));
};
var om = function(a) {
  var b;
  do {
    b = Math.round(65535 * Math.random()).toString(16), b = Array(4 - b.length + 1).join("0") + b;
  } while (a[b]);
  a[b] = !0;
  return b;
};
z.lm = function(a, b, c) {
  this.name = a || "";
  this.type = b;
  this.text = c;
  this.hasDropCap = !1;
  this.yb = [];
};
z.mm = function(a, b) {
  a.name ? b[a.name] = !0 : a.name = om(b);
};
z.pm = function(a) {
  var b = null, b = 4 == a.g() ? new z.qm(a.getName(), a.rc(), Fg(a), a.getMetadata()) : 11 == a.g() ? new rm(a.getName(), a.rc(), (0,z.A)(a, "iframe"), Fg(a)) : new z.lm(a.getName(), a.g(), a.rc());
  b.hasDropCap = (0,z.A)(a, "hasDropCap");
  if (a = (0,z.A)(a, "markups")) {
    for (var c = 0;c < a.length;c++) {
      (0,z.sm)(b, a[c]);
    }
  }
  return b;
};
z.tm = function(a, b) {
  a.yb = (0,z.Sc)(a.yb, function(a) {
    return a.g() != b;
  });
};
z.um = function(a, b) {
  for (var c = 0;c < a.yb.length;c++) {
    var d = a.yb[c];
    3 == d.g() && b(d);
  }
};
z.sm = function(a, b) {
  for (var c = a.yb, d = 0;d < c.length;d++) {
    var e = c[d], f, h = e;
    f = b;
    if (h.g() != f.g()) {
      f = null;
    } else {
      if (h.Ob(f)) {
        f = h;
      } else {
        if (3 == h.g()) {
          var k = h.uf() == f.uf() && h.qb() == f.qb() && (0,z.A)(h, "rel") == (0,z.A)(f, "rel");
          f = (0,z.vm)(h, (0,z.Kg)(f), k) || (0,z.vm)(h, k ? (0,z.Lg)(f) : (0,z.Lg)(f) - 1, k) || (0,z.vm)(f, (0,z.Kg)(h), k) ? k ? (0,z.wm)(Math.min((0,z.Kg)(h), (0,z.Kg)(f)), Math.max((0,z.Lg)(h), (0,z.Lg)(f)), h.uf(), h.qb(), (0,z.A)(h, "rel")) : f : null;
        } else {
          f = 4 == h.g() ? h.getName() == f.getName() ? (0,z.xm)(Math.min((0,z.Kg)(h), (0,z.Kg)(f)), Math.max((0,z.Lg)(h), (0,z.Lg)(f)), h.getName()) : null : (0,z.vm)(h, (0,z.Kg)(f), !0) || (0,z.vm)(h, (0,z.Lg)(f), !0) || (0,z.vm)(f, (0,z.Kg)(h), !0) ? (0,z.ym)(h.g(), Math.min((0,z.Kg)(h), (0,z.Kg)(f)), Math.max((0,z.Lg)(h), (0,z.Lg)(f))) : null;
        }
      }
    }
    if (f) {
      if (f == e || f.Ob(e)) {
        return!1;
      }
      db.splice.call(c, d, 1);
      b = f;
      d = -1;
    }
  }
  var c = a.yb, d = b, l, e = zm || z.mb;
  f = 0;
  for (h = c.length;f < h;) {
    var k = f + h >> 1, m;
    m = e(d, c[k]);
    0 < m ? f = k + 1 : (h = k, l = !m);
  }
  l = l ? f : ~f;
  0 > l && kb(c, -(l + 1), 0, d);
  return!0;
};
z.Am = function(a, b, c) {
  b = Math.min(b, a.text.length);
  c = Math.min(c, a.text.length);
  var d = c - b;
  a.text = a.text.substring(0, b) + a.text.substring(c);
  c = a.yb;
  for (var e = 0;e < c.length;e++) {
    var f = c[e];
    (0,z.Kg)(f) >= b && f.setStart(Math.max((0,z.Kg)(f) - d, b));
    (0,z.Lg)(f) >= b && f.setEnd(Math.max((0,z.Lg)(f) - d, b));
  }
  (0,z.Bm)(a);
};
z.Bm = function(a) {
  a.yb = (0,z.Sc)(a.yb, function(a) {
    return(0,z.Lg)(a) > (0,z.Kg)(a);
  });
};
var Cm = function(a) {
  var b = {0:!0};
  b[a.text.length] = !0;
  a = a.yb;
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    b[(0,z.Kg)(d)] = !0;
    b[(0,z.Lg)(d)] = !0;
  }
  b = xb(b);
  b = (0,z.Kb)(b, Number);
  b.sort(z.mb);
  return b;
};
var Dm = function(a, b) {
  for (var c = a.yb, d = [], e = 0;e < b.length;e++) {
    var f = b[e], h = [];
    d.push(h);
    for (var k = 0;k < c.length;k++) {
      var l = c[k];
      (0,z.vm)(l, f, !1) && h.push(l);
    }
  }
  return d;
};
z.qm = function(a, b, c, d) {
  z.lm.call(this, a, 4, b);
  this.layout = c;
  this.metadata = d || new z.Hg;
};
var rm = function(a, b, c, d) {
  z.lm.call(this, a, 11, b);
  this.layout = d;
  this.metadata = c;
};
z.ym = function(a, b, c) {
  return(new z.Jg).Hb(a).setStart(b).setEnd(c);
};
z.vm = function(a, b, c) {
  return b >= (0,z.Kg)(a) && (c ? b <= (0,z.Lg)(a) : b < (0,z.Lg)(a));
};
var zm = function(a, b) {
  var c = Em[a.g()] - Em[b.g()];
  if (0 !== c) {
    return c;
  }
  c = (0,z.Kg)(a) - (0,z.Kg)(b);
  if (0 !== c) {
    return c;
  }
  c = (0,z.Lg)(a) - (0,z.Lg)(b);
  return 0 !== c ? c : (0,z.mb)(JSON.stringify(z.Hl.$c(a)), JSON.stringify(z.Hl.$c(b)));
};
z.wm = function(a, b, c, d, e) {
  a = (0,z.ym)(3, a, b).Wl(c).bc(d);
  return(0,z.F)(a, "rel", e);
};
z.xm = function(a, b, c) {
  return(0,z.ym)(4, a, b).Xa(c);
};
z.Fm = function(a) {
  this.xh = a;
};
z.Gm = function(a, b) {
  var c = a.Ci();
  if (0 > b || b >= c.length) {
    return!1;
  }
  if ((0,z.Xg)(a.mk(), b).ta() === b) {
    return!0;
  }
  var c = a.Vf(b - 1), d = a.Vf(b);
  return c != d;
};
z.Hm = function() {
  return "Type caption for image (optional)";
};
z.Im = function() {
  return "Type caption for embed (optional)";
};
var Jm = function(a, b) {
  var c = '\x3cdiv class\x3d"section-background' + (a.hasFocus ? " media-has-focus" : "") + '"' + ("section-image-full" == a.imageLayout ? ' data-scroll\x3d"post-section"' : ""), d = a.backgroundImage, e = d.id || d.imageId, d = "" + ((e ? ' data-image-id\x3d"' + (0,z.P)(e) + '"' : "") + (d.originalWidth ? ' data-width\x3d"' + (0,z.P)(d.originalWidth) + '"' : "") + (d.originalHeight ? ' data-height\x3d"' + (0,z.P)(d.originalHeight) + '"' : "") + (d.filter ? ' data-filter\x3d"' + (0,z.P)(d.filter) + 
  '"' : "") + (d.backgroundSize ? ' data-image-style\x3d"' + (0,z.P)(d.backgroundSize) + '"' : "")), c = c + d + "\x3e", c = "section-image-full" == a.imageLayout ? c + ('\x3cdiv class\x3d"section-background-image" style\x3d"background-image: url(' + (0,z.P)((0,z.Q)(b.miroUrl)) + "/max/" + (0,z.P)("700".replace(Ch, Dh)) + "/gradv/29/81/40/" + (0,z.P)(String(a.backgroundImage.id).replace(Ch, Dh)) + ');"\x3e\x3c/div\x3e\x3cbr\x3e') : "section-image-left" == a.imageLayout || "section-image-right" == 
  a.imageLayout ? c + ('\x3cimg src\x3d"' + (0,z.P)((0,z.Q)(b.miroUrl)) + "/max/" + (0,z.P)(b.postColumnWidth) + "/multiply/grey/" + (0,z.P)(a.backgroundImage.id) + '"\x3e') : c + "\x3cbr\x3e";
  return c + "\x3c/div\x3e";
};
var Km = function(a, b) {
  for (var c = 0;c < a.length;c++) {
    (0,z.um)(a[c], function(a) {
      a.uf() && a.Wl((0,z.Wh)(a.uf(), b));
    });
  }
};
z.Lm = function(a, b) {
  var c = z.vg, d = (0,z.dm)(a);
  return d ? (0,z.Mm)(d, c, {rf:!0, isPublished:a.isPublished, media:a.media, sections:!0, hi:b, Ih:!0}) : "";
};
z.Mm = function(a, b, c) {
  c.Ih || (a = a.ja());
  (0,z.fm)(a, {jE:!!b.useragent.supportsFullImageSections, dC:!1});
  for (var d = c.isPublished, e = a.qc() || [], f = [], h = 0;h < e.length;h++) {
    f[h] = (0,z.pm)(e[h]);
    var k = f[h];
    (0,z.tm)(k, 4);
    (0,z.tm)(k, 5);
  }
  Km(f, !d);
  d = new z.bl(a);
  e = [];
  h = c.sections ? a.gc() : [(new z.Ng).Sd(0)];
  for (k = 0;k < h.length;k++) {
    e.push(Nm(k, a, f, el(d), b, c));
  }
  return e.join("");
};
var Nm = function(a, b, c, d, e, f) {
  var h = new z.Fm(b), k = b.gc();
  b = k[a];
  var l = c.length;
  a = k[a].ta() + (0,z.Yg)(k, a, l);
  if (b.ta() >= a) {
    return "";
  }
  k = [];
  f.sections && k.push((0,z.Om)(b, e));
  for (var l = null, m = b.ta();m < a;m++) {
    var s = c[m];
    f.sections && (0,z.Gm)(h, m) && (l && k.push("\x3c/div\x3e"), k.push((0,z.Pm)(h.Vf(m))));
    l && l.type == s.type || (l && k.push(Qm(l)), k.push(Rm(s)));
    k.push((0,z.Sm)(s, e, f, {Fv:!0, ks:d[m]}));
    l = s;
  }
  l && k.push(Qm(l));
  l && f.sections && k.push("\x3c/div\x3e");
  f.sections && k.push((0,z.Tm)(b, e));
  return k.join("");
};
z.Sm = function(a, b, c, d) {
  var e = d || Um, f = a.type, h = [];
  7 == f && h.push("pullquote");
  if (a.layout) {
    var k = Vm(a.layout);
    k && h.push(k);
  }
  null != e.ks && h.push("is-partialWidth");
  k = "";
  c.rf || (4 == f || 11 == f ? k += Wm("tabindex", "0") + Wm("contenteditable", "false") : 5 == f && (k += Wm("contenteditable", "false")));
  a.name && (k += Wm("name", a.name));
  h.length && (k += Wm("class", h.join(" ")));
  a.hasDropCap && (k += Wm("data-has-drop-cap"));
  null != e.ks && (k += Wm("style", "width: " + e.ks + "%;"));
  f = Xm(a);
  return(e.Fv ? "" : Rm(a)) + "\x3c" + f + k + "\x3e" + (0,z.Ym)(a, b, c) + (5 == a.type ? "" : "\x3c/" + Xm(a) + "\x3e" + ((d || Um).Fv ? "" : Qm(a)));
};
z.Ym = function(a, b, c) {
  var d = c.rf, e = Cm(a), f = Dm(a, e), h = 4 == a.type, k = 11 == a.type, l = "";
  if (h) {
    if (l = Zm(a, b, c) + $m(a, d), !an(a, d)) {
      return l;
    }
  } else {
    if (k) {
      if (l = on(a, b) + $m(a, d), !an(a, d)) {
        return l;
      }
    } else {
      if (5 == a.type) {
        return "";
      }
    }
  }
  b = a.text.replace(/ — /g, " — ");
  for (var m = [], s = 0;s < e.length;s++) {
    for (var x = 0 === s, L = s == e.length - 2, G = e[s], za = f[s], Eb = 0;Eb < za.length;Eb++) {
      var jb = za[Eb];
      if (m[Eb] != jb) {
        for (;m.length > Eb;) {
          l += pn(m.pop());
        }
        var Mg = qn(jb, a, c);
        Mg && (l += Mg, m.push(jb));
      }
    }
    for (;m.length > Eb;) {
      l += pn(m.pop());
    }
    za = b.substring(G, e[s + 1] || b.length);
    a.hasDropCap && za && 0 === G && (l += rn(za[0], d), za = za.slice(1));
    var xi = za.split("\n"), l = l + (0,z.Kb)(xi, function(b, c) {
      var d = (0,z.Ha)(b);
      8 != a.type && (sn(d.charAt(0)) && (x || 0 !== c) && (d = " " + d.substring(1)), sn(d.charAt(d.length - 1)) && (L || c != xi.length - 1) && (d = d.substring(0, d.length - 1) + " "));
      return d;
    }).join("\x3cbr\x3e"), G = L && 1 < xi.length && "" === (0,z.Ya)(xi), za = !b;
    5 != a.type && (G || za) && (l += "\x3cbr\x3e");
  }
  if (h || k) {
    l += "\x3c/figcaption\x3e";
  }
  return l;
};
var sn = function(a) {
  return " " === a || " " === a;
};
var Zm = function(a, b, c) {
  var d = a.metadata, e = a.layout, f = d && d.originalWidth || 0, h = d && d.originalHeight || 0;
  a = tn(b, f, h, a);
  f = gl(h, f);
  if (h = d) {
    if (h = d.id) {
      var h = d.id, k = (0,z.Xh)(e);
      b.variants.use_retina_images && (k *= b.devicePixelRatio);
      k = tg(k || 1200, Ag, 200, !0);
      h = b.miroUrl + "/max/" + k + "/" + h;
    }
  }
  b = h;
  c = !c.rf || 5 == e || a && d.originalWidth <= a.width;
  d = d ? z.Hl.$c(d) : {};
  a = '\x3cdiv class\x3d"aspect-ratio-placeholder' + (f ? " aspect-ratio-locked" : "") + '"' + (f && a ? ' style\x3d"max-width: ' + (0,z.P)(Gh(a.width)) + "px; max-height: " + (0,z.P)(Gh(a.height)) + 'px;"' : "") + "\x3e" + (f ? '\x3cdiv class\x3d"aspect-ratio-fill" style\x3d"padding-bottom: ' + (0,z.P)(Gh(100 * f)) + '%;"\x3e\x3c/div\x3e' : "") + "\x3cimg";
  e = d.id || d.imageId;
  e = "" + ((e ? ' data-image-id\x3d"' + (0,z.P)(e) + '"' : "") + (d.originalWidth ? ' data-width\x3d"' + (0,z.P)(d.originalWidth) + '"' : "") + (d.originalHeight ? ' data-height\x3d"' + (0,z.P)(d.originalHeight) + '"' : "") + (d.filter ? ' data-filter\x3d"' + (0,z.P)(d.filter) + '"' : "") + (d.backgroundSize ? ' data-image-style\x3d"' + (0,z.P)(d.backgroundSize) + '"' : ""));
  return a + e + (c ? "" : ' data-action\x3d"zoom" data-action-value\x3d"' + (0,z.P)(d.id) + '"') + (b ? ' src\x3d"' + (0,z.P)((0,z.Q)(b)) + '"' : "") + "\x3e\x3c/div\x3e";
};
var $m = function(a, b) {
  if (!an(a, b)) {
    return "";
  }
  var c = '\x3cfigcaption class\x3d"image-caption"';
  if (!b) {
    var d = 4 == a.type ? (0,z.Hm)() : 11 == a.type ? (0,z.Im)() : "", c = c + (Wm("contenteditable", "true") + Wm("data-default-value", d))
  }
  return c + "\x3e";
};
var on = function(a, b) {
  var c = a.metadata;
  if (!c || !c.Qn()) {
    return "";
  }
  var d = c.Jr() || un.width, e = c.sw() || un.height, d = tn(b, d, e, a), c = z.Hl.$c(c);
  return'\x3cdiv class\x3d"iframe-container"\x3e\x3c' + Uh() + (c.iframeWidth ? ' data-width\x3d"' + (0,z.P)(c.iframeWidth) + '"' : "") + (c.iframeHeight ? ' data-height\x3d"' + (0,z.P)(c.iframeHeight) + '"' : "") + (d && d.width && d.height ? ' width\x3d"' + (0,z.P)(d.width) + '" height\x3d"' + (0,z.P)(d.height) + '"' : "") + ' src\x3d"/media/' + (0,z.P)(c.mediaResourceId) + (d && d.width ? "?maxWidth\x3d" + Ah(d.width) : "") + '" data-media-id\x3d"' + (0,z.P)(c.mediaResourceId) + '" frameborder\x3d"0"\x3e\x3c/' + 
  Uh() + "\x3e\x3c/div\x3e";
};
var rn = function(a, b) {
  return b ? '\x3cspan class\x3d"drop-cap"\x3e' + (0,z.Ha)(a) + "\x3c/span\x3e" : '\x3cspan class\x3d"drop-cap drop-cap-editable"\x3e\x3cbr\x3e\x3c/span\x3e\x3cspan class\x3d"drop-cap" contenteditable\x3d"false"\x3e' + (0,z.Ha)(a) + "\x3c/span\x3e";
};
var tn = function(a, b, c, d) {
  if (5 == d.layout || 6 == d.layout || 7 == d.layout) {
    return null;
  }
  var e = (0,z.Xh)(d.layout);
  11 === d.type && a.isAuthenticated && Number(a.deviceWidth) && (e = Math.min(e, Number(a.deviceWidth) - 65), e = tg(e, vn, 100, !1));
  b = new sd(b, c);
  return b.width > e ? new sd(e, Math.round(e * b.height / b.width)) : b;
};
var gl = function(a, b) {
  return b && a ? Math.round(a / b * 1E3) / 1E3 : 0;
};
var wn = function(a) {
  var b = a.contentWindow || (0,z.Cd)(a.contentDocument || a.contentWindow.document);
  if (b && b.document && b.document.body && "about:blank" !== b.location.toString()) {
    a = a.style;
    var c = (0,z.td)(b).Md(), b = c.document, d = 0;
    if (b) {
      var c = (0,z.Ad)(c).height, d = b.body, e = b.documentElement;
      if ((0,z.Bd)(b) && e.scrollHeight) {
        d = e.scrollHeight != c ? e.scrollHeight : e.offsetHeight;
      } else {
        var b = e.scrollHeight, f = e.offsetHeight;
        e.clientHeight != f && (b = d.scrollHeight, f = d.offsetHeight);
        d = b > c ? b > f ? b : f : b < f ? b : f;
      }
    }
    a.height = d + "px";
  }
};
var an = function(a, b) {
  return b && (0,z.Fa)(a.text) || 6 == a.layout || 7 == a.layout ? !1 : !0;
};
var Vm = function(a) {
  return 2 == a ? "image-inset-left" : 4 == a ? "image-outset-left" : 3 == a ? "image-outset-center" : 5 == a ? "image-fill-width" : 6 == a ? "blockLayout--outsetRow" : 7 == a ? "blockLayout--outsetRowContinue" : "";
};
z.xn = function(a) {
  a = a.match(/\S+/g) || [];
  for (var b in z.yn) {
    var c = z.yn[b], d = Vm(c);
    if (d && (0,z.ab)(a, d)) {
      return c;
    }
  }
  return 1;
};
var Xm = function(a) {
  a = a.type;
  return 5 == a ? "hr" : 4 == a || 11 == a ? "figure" : 6 == a || 7 == a ? "blockquote" : 9 == a || 10 == a ? "li" : 12 == a ? "h1" : 2 == a ? "h2" : 3 == a ? "h3" : 1 == a ? "p" : 8 == a ? "pre" : "p";
};
var Wm = function(a, b) {
  var c = " " + (0,z.Ha)(a);
  null != b && (c += '\x3d"' + (0,z.Ha)(b) + '"');
  return c;
};
var Rm = function(a) {
  a = a.type;
  var b = "";
  if (9 == a) {
    b = "ul";
  } else {
    if (10 == a) {
      b = "ol";
    } else {
      return "";
    }
  }
  return "\x3c" + b + Wm("class", "post-list") + "\x3e";
};
var Qm = function(a) {
  a = a.type;
  return 9 == a ? "\x3c/ul\x3e" : 10 == a ? "\x3c/ol\x3e" : "";
};
z.Om = function(a, b) {
  var c = zn(a), d = c.backgroundImage && c.backgroundImage.id;
  return c = "" + ("\x3csection" + (c.name ? ' name\x3d"' + (0,z.P)(c.name) + '"' : "") + (c.textLayout || c.imageLayout || c.Pd ? ' class\x3d"' + (c.Pd ? "active-section" : "") + (c.textLayout ? " " + (0,z.P)(c.textLayout) : "") + (c.imageLayout ? " " + (0,z.P)(c.imageLayout) : "") + '"' : "") + (c.backgroundColor && "default" != c.backgroundColor ? ' data-background-color\x3d"' + (0,z.P)(c.backgroundColor) + '"' : "") + "\x3e" + (d && "section-image-right" != c.imageLayout ? Jm(c, b) : "") + (d || 
  c.backgroundColor && "default" != c.backgroundColor || c.UT ? "" : '\x3cdiv class\x3d"section-divider layout-single-column"\x3e\x3chr class\x3d"section-divider"\x3e\x3c/div\x3e'));
};
z.Tm = function(a, b) {
  var c = zn(a);
  return(c.backgroundImage && c.backgroundImage.id && "section-image-right" == c.imageLayout ? Jm(c, b) : "") + "\x3c/section\x3e";
};
var zn = function(a) {
  return{name:a.getName(), textLayout:An[(0,z.A)(a, "textLayout")], imageLayout:Bn[(0,z.Rg)(a)], backgroundColor:z.Cn[(0,z.Tg)(a)], backgroundImage:(0,z.Og)(a) && z.Hl.$c((0,z.Og)(a))};
};
z.Pm = function(a) {
  return'\x3cdiv class\x3d"section-inner ' + (0,z.P)(a) + '"\x3e';
};
var qn = function(a, b, c) {
  var d = a.g();
  if (1 == d) {
    return "\x3cstrong\x3e";
  }
  if (2 == d) {
    return "\x3cem\x3e";
  }
  if (4 == d) {
    return'\x3cspan class\x3d"notes-highlight" ' + (a.getName() ? ' name\x3d"' + (0,z.Ha)(a.getName()) + '"' : "") + "\x3e";
  }
  if (5 == d) {
    return'\x3cspan class\x3d"warning"\x3e';
  }
  if (3 == d) {
    var d = a.uf(), e;
    try {
      e = "#zSoyz" !== Fh(d);
    } catch (f) {
      e = !1;
    }
    if (!e) {
      return "";
    }
    e = {};
    var h = (0,z.Ga)((0,z.A)(a, "rel"));
    h && (e[h] = !0);
    c.hi && (lh(d) || (e.nofollow = !0));
    var h = a.qb(), k = Object.keys(e).join(" "), l = lh(d);
    a = !e.token && !c.rf && d && d != b.text.substring((0,z.Kg)(a), (0,z.Lg)(a));
    return "\x3ca" + (l ? "" : ' target\x3d"_blank"') + ' href\x3d"' + (0,z.P)((0,z.Q)(d)) + '"' + (h ? ' title\x3d"' + (0,z.P)(h) + '"' : "") + (k ? ' rel\x3d"' + (0,z.P)(k) + '"' : "") + (a ? ' data-tooltip\x3d"' + (0,z.P)(d) + '" data-tooltip-position\x3d"bottom" data-tooltip-type\x3d"link"' : "") + "\x3e";
  }
  return "";
};
var pn = function(a) {
  a = a.g();
  return 1 == a ? "\x3c/strong\x3e" : 2 == a ? "\x3c/em\x3e" : 3 == a ? "\x3c/a\x3e" : 4 == a || 5 == a ? "\x3c/span\x3e" : "";
};
z.Dn = function(a, b, c) {
  function d() {
    var d = arguments, h = c || this;
    (0,window.clearTimeout)(e);
    e = (0,window.setTimeout)(function() {
      e = null;
      h instanceof z.v && h.mf || b.apply(h, d);
    }, a);
  }
  var e;
  d.cancel = function() {
    (0,window.clearTimeout)(e);
    e = null;
  };
  return d;
};
z.En = function(a, b, c) {
  var d = -window.Infinity;
  return function() {
    var e = c || this;
    if (!(e instanceof z.v && e.mf)) {
      var f = (0,z.aj)();
      f - d >= a && (b.apply(e, arguments), d = f);
    }
  };
};
z.Fn = function(a, b) {
  (0,window.setTimeout)(function() {
    a.call(b);
  }, 0);
};
var Gn = function(a) {
  var b = new z.wc;
  (0,window.setTimeout)(b.Ea.bind(b, !0), a);
  return b;
};
var Hn = function(a) {
  z.Ij.call(this);
  this.mB = window.innerWidth;
  this.lB = window.innerHeight;
  this.ha = a.get("app");
  this.mn = this.Za = null;
  this.xd = this.Lp = !1;
  this.Ey = (0,z.Dn)(z.In, this.BA, this);
  this.mt = (0,z.Dn)(z.In, this.ev, this);
  this.lK = (0,z.En)(z.In, this.mK, this);
  this.DJ = (0,z.R)(window, "resize", this.eA, this);
  window._onWebfontLoad = (0,z.ya)(this.iq, this);
  window._onWebfontError = (0,z.ya)(this.$I, this);
  window._resizeIframe = (0,z.ya)(this.oG, this);
  this.ha.F(Jn, this.Oi, this);
};
var Kn = function(a) {
  var b = a.ha.tb && (0,z.Ln)();
  b && a.Za != b && (a.xd && (a.mt.cancel(), a.ev()), (0,z.$h)(a.DA), a.Za = b, a.DA = (0,z.R)(b === window.document.body ? window : b, "scroll", a.Me, a));
};
var S = function(a) {
  this.name = a;
};
var T = function(a) {
  this.name = a;
};
var V = function(a, b) {
  this.name = a;
  this.cL = b;
};
var Mn = function(a, b) {
  for (var c = {}, d = 0;d < b.length;d++) {
    for (var e = b[d].cL, f = 0;f < e.length;f++) {
      c[e[f]] = !0;
    }
  }
  V.call(this, a, Object.keys(c));
};
var Nn = function(a) {
  z.Kj.call(this);
  this.Ca = a.get("dom-monitor");
  this.Kc = a.get("screen");
  this.Ud = a.get("element-tracker");
  this.uA = {};
};
var On = function(a) {
  var b = a.Ud.Wd.Kd();
  return(0,z.fb)(a.Kc.N.getElementsByClassName("post-item")).filter(function(a) {
    a = this.Ud.Aa(a).Kd();
    return b.contains(a);
  }, a).map(function(a) {
    return a.getAttribute("data-post-id");
  }, a).filter(function(a) {
    return this.uA[a] ? !1 : this.uA[a] = !0;
  }, a);
};
z.Pn = function(a) {
  this.du = a;
  this.$i = {};
};
var Qn = function(a) {
  z.Pn.call(this, a);
};
var Rn = function(a) {
  this.zm = a;
  this.om = !1;
};
z.Sn = function() {
};
var Tn = function() {
};
z.Un = function(a, b, c) {
  this.title = a;
  this.image = null;
  this.description = b;
  this.type = c;
  this.name = this.username = this.kx = this.lx = this.author = null;
};
z.Vn = function(a) {
  for (var b = window.document.getElementsByTagName("meta"), c = {}, d = {}, e = 0;e < b.length;e++) {
    c[b[e].getAttribute("property")] = b[e], d[b[e].getAttribute("name")] = b[e];
  }
  Wn(c, "og:url", window.location.href, "property");
  a.title ? (window.document.title = a.title, Wn(d, "title", a.title, "name"), Wn(c, "og:title", a.title, "property")) : window.document.title = (0,z.J)("productName");
  a.image && Wn(c, "og:image", a.image, "property");
  a.description && Wn(c, "og:description", a.description, "property");
  Wn(c, "og:type", a.type, "property");
  "article" == a.type && (a.author && Wn(c, "article:author", a.author, "property"), a.lx && Wn(c, "article:publisher", a.lx, "property"), a.kx && Wn(c, "article:published_time", a.kx, "property"));
  "profile" == a.type && (a.username && Wn(c, "profile:username", a.username, "property"), a.name && (b = a.name.split(" "), 1 == b.length ? Wn(c, "profile:first_name", a.name, "property") : (d = b.slice(-1).join(" "), Wn(c, "profile:first_name", b.slice(0, -1).join(" "), "property"), Wn(c, "profile:last_name", d, "property"))));
  a = a.type;
  var f;
  if ("article" != a) {
    for (f in c) {
      f && "article" === f.split(":")[0] && c[f].parentNode.removeChild(c[f]);
    }
  }
  if ("profile" != a) {
    for (f in c) {
      f && "profile" === f.split(":")[0] && c[f].parentNode.removeChild(c[f]);
    }
  }
};
var Wn = function(a, b, c, d) {
  a[b] ? a[b].content = c : (a = window.document.createElement("meta"), a.setAttribute(d, b), a.content = c, window.document.getElementsByTagName("head")[0].appendChild(a));
};
z.Xn = function() {
  z.Kj.call(this);
  this.Is = [];
};
var Yn = function(a, b) {
  a.Is.forEach(function(a) {
    try {
      b.call(this, a);
    } catch (d) {
      (0,z.Cj)(d);
    }
  });
};
var Zn = function() {
  z.v.call(this);
};
var $n = function(a) {
  z.v.call(this);
  this.Bp = a;
  this.wu = 1;
};
var ao = function(a, b) {
  a.wu = b;
  return a;
};
var bo = function() {
  z.v.call(this);
  this.sn = {};
};
z.co = function(a, b, c, d, e, f) {
  if (6 == arguments.length) {
    this.setTransform(a, b, c, d, e, f);
  } else {
    if (0 != arguments.length) {
      throw Error("Insufficient matrix parameters");
    }
    this.ic = this.jc = 1;
    this.uc = this.tc = this.Rb = this.mb = 0;
  }
};
var eo = function(a, b) {
  var c = a.ic, d = a.tc;
  a.ic = b.ic * c + b.uc * d;
  a.tc = b.tc * c + b.jc * d;
  a.Rb += b.Rb * c + b.mb * d;
  c = a.uc;
  d = a.jc;
  a.uc = b.ic * c + b.uc * d;
  a.jc = b.tc * c + b.jc * d;
  a.mb += b.Rb * c + b.mb * d;
  return a;
};
var fo = function(a) {
  z.v.call(this);
  this.Nk = a;
};
var go = function(a, b) {
  z.v.call(this);
  this.Of = a || 0;
  this.wd = b || 0;
  this.St = !0;
  this.Fd = new z.co;
  this.yz = new Zn;
};
var ho = function(a, b) {
  a.Fd.translate(b - a.Fd.Rb, 0);
  return a;
};
var io = function(a, b) {
  a.Fd.translate(0, b - a.Fd.mb);
  return a;
};
var jo = function(a, b) {
  io(a, b.top);
  ho(a, b.left);
  a.Tj(b.width);
  a.Qj(b.height);
  return a;
};
z.ko = function(a, b, c, d, e, f) {
  z.wc.call(this, e, f);
  this.Sw = a;
  this.ew = [];
  this.$B = !!b;
  this.mL = !!c;
  this.TK = !!d;
  for (b = this.bD = 0;b < a.length;b++) {
    Bc(a[b], (0,z.ya)(this.lC, this, b, !0), (0,z.ya)(this.lC, this, b, !1));
  }
  0 != a.length || this.$B || this.Ea(this.ew);
};
var lo = function(a, b, c) {
  z.v.call(this);
  this.KL = a.get("image");
  this.nj = b;
  this.el = c;
  this.qA = 0;
};
var mo = function(a, b, c, d, e) {
  d -= a.Ve();
  b = a.Fd.mb - b;
  c *= d - b;
  e && (0,z.uf)(e, "transform", "translate3d(0, " + c + "px, 0)");
  io(a, b + c);
  return c;
};
var no = function(a, b, c) {
  lo.call(this, a, b, c);
};
var oo = function(a, b, c, d) {
  lo.call(this, a, b, c);
  this.Ws = "";
  this.rk = d;
  this.Yf = this.pr = this.xr = this.Cp = null;
};
var po = function(a) {
  a.Cp.cancel();
  a.Cp = null;
  if (a.Yf) {
    var b = a.rk, c = (0,z.sa)(a.Yf);
    delete b.sn[c];
  }
  (0,z.bd)(a.Yf);
  a.Yf = null;
};
var qo = function(a, b, c, d) {
  oo.call(this, a, b, c, d);
  this.Mt = null;
  this.vt = this.Au = 0;
};
var ro = function(a) {
  z.Kj.call(this);
  this.ca = a;
  this.Ca = a.get("dom-monitor");
  this.Kc = a.get("screen");
  this.Kc.Aa(this);
  this.Wi = null;
  this.Iy = new bo;
  this.rk = new bo;
  a = new go;
  a.St = !1;
  this.Wd = a;
  this.Hy = new z.co;
  this.oB = new z.co;
  this.If = {};
  this.yh = {};
  this.Kp = this.Jp = !1;
  this.Vi = null;
};
var so = function(a, b, c) {
  return Math.min(Math.max((a - b) / c, 0), 1);
};
var to = function(a) {
  eo(a.oB.lf(a.Hy), a.Wd.Fd.ja());
};
var uo = function(a, b) {
  var c = b.getAttribute("data-scroll"), d = (0,z.sa)(b);
  if (!a.If[d]) {
    a.If[d] = new go;
    var e = a.Iy, f = a.If[d], h = (0,z.sa)(f);
    e.sn[h] = f;
  }
  e = a.If[d];
  f = vo(a.oB, (0,z.qi)(b));
  jo(e, f);
  (f = a.yh[d]) && f.g() != c && ((0,z.bd)(f), f = null);
  f || ("blur-cover" == c ? (f = new oo(a.ca, a, e, a.rk), f.cd(b)) : "post-cover" == c ? f = new no(a.ca, a, e) : "post-section" == c && (f = new qo(a.ca, a, e, a.rk), f.cd(b)), f ? a.yh[d] = f : delete a.yh[d]);
};
var wo = function(a, b) {
  for (var c = null, d = {}, e = 0;e < b.length;e++) {
    d[(0,z.sa)(b[e])] = !0;
  }
  for (c in a.yh) {
    d[c] || ((0,z.bd)(a.yh[c]), delete a.yh[c]);
  }
  for (c in a.If) {
    if (!d[c]) {
      var e = a.Iy, f = (0,z.sa)(a.If[c]);
      delete e.sn[f];
      (0,z.bd)(a.If[c]);
      delete a.If[c];
    }
  }
};
var xo = function(a) {
  return(0,z.fb)(a.Kc.N.querySelectorAll("[data-scroll]:not([data-scroll-disabled])"));
};
z.yo = function(a) {
  z.Xn.call(this);
  this.ca = a;
  (0,z.zo)(this.ca, "screen", this);
  this.ca.cd();
};
z.Ao = function(a, b) {
  return a.ca.get(b);
};
z.Ln = function() {
  return window.document.body;
};
z.Bo = function(a, b) {
  var c = (0,z.Ln)();
  c === window.document.body && a.N && (c = a.N);
  c.appendChild(b);
};
z.Co = function(a) {
  z.yo.call(this, a);
};
z.Do = function(a, b) {
  z.yo.call(this, a);
  var c = b.path;
  if (0 === c.indexOf("http")) {
    throw Error("You cannot construct an html screen with an absolute path. Try removing the host.");
  }
  this.Vc = c;
};
var Eo = function(a, b) {
  z.Kj.call(this);
  this.Ca = a.get("dom-monitor");
  this.U = b;
  this.Cv = null;
  this.Vt = 0;
  this.Kc = a.get("screen");
};
var Fo = function(a, b) {
  z.Do.call(this, a, b);
  this.ha = a.get("app");
  this.aa = a.get("datastore");
  this.la = this.aa.Db[hk];
  this.Ti = null;
};
var Go = function(a) {
  var b = a.L(".welcome-wrapper");
  b && (0,window.setTimeout)(function() {
    (0,z.t)(b, "hiding");
    Zh(b, z.Ho, function() {
      (0,z.t)(b, "hidden");
    });
  }.bind(a), 3E3);
};
var Io = function(a) {
  return 1E6 <= a.de ? (1E7 <= a.de ? (0,z.O)(Math.floor(a.de / 1E6)) : (0,z.O)(Math.floor(a.de / 1E5) / 10)) + "M" : 1E3 <= a.de ? (1E4 <= a.de ? (0,z.O)(Math.floor(a.de / 1E3)) : (0,z.O)(Math.floor(a.de / 100) / 10)) + "K" : (0,z.O)(a.de);
};
z.Jo = function(a) {
  return'data-action\x3d"sign-in-prompt"' + (a.xo ? 'data-requires-token\x3d"true"' : "") + 'data-popover-type\x3d"sign-in"' + (a.cg ? 'data-redirect\x3d"' + (0,z.O)(a.cg) + '"' : "") + 'data-popover\x3d"' + (0,z.O)(a.prompt) + '" data-popover-position\x3d"bottom" data-popover-signin-type\x3d"' + (a.Ho ? (0,z.O)(a.Ho) : "") + '"';
};
var Ko = function(a, b, c) {
  return'\x3cbutton class\x3d"btn ' + (a.El ? "btn-small" : "btn-large") + " btn-follow btn-toggle btn-suffix " + (a.ab ? "btn-light" : "btn-primary") + " no-user-select " + (a.collection.virtuals.isSubscribed ? "active" : "") + '"' + (c.isAuthenticated ? 'data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.P)(a.collection.slug) + '" data-collection-id\x3d"' + (0,z.P)(a.collection.id) + '"' : (0,z.Jo)({cg:"/_/subscribe/collection/" + (0,z.O)(a.collection.slug), prompt:"Sign in to follow this collection", 
  xo:!0})) + '\x3e\x3cspan class\x3d"btn-label follow-label" data-suffix\x3d"ing"\x3eFollow\x3c/span\x3e' + (!a.vC && a.collection.metadata.followerCount ? '\x3cspan class\x3d"btn-label btn-count"\x3e' + Io({de:a.collection.metadata.followerCount}) + "\x3c/span\x3e" : "") + "\x3c/button\x3e";
};
var Lo = function(a, b) {
  return "\x3cdiv class\x3d'align-block'\x3e\x3cdiv class\x3d\"collection-item-title\"\x3e" + (0,z.O)(a.collection.name) + "\x3c/div\x3e" + (a.MT ? '\x3cdiv class\x3d"collection-item-meta"\x3e' + (0,z.O)(a.collection.shortDescription) + "\x3c/div\x3e" : "") + (a.us ? '\x3cdiv class\x3d"follow-wrapper"\x3e' + Ko({collection:a.collection, El:!0, ab:!0}, 0, b) + "\x3c/div\x3e" : "") + "\x3c/div\x3e";
};
var Mo = function() {
  return "We’ll email you when the collection editor has reviewed your submission";
};
var No = function(a) {
  return "Submissions are typically reviewed " + (0,z.O)(a.responseTimeFuzzy);
};
var Oo = function(a) {
  return a.user && a.user.userId ? '\x3ca href\x3d"' + (0,z.ek)(a) + '" data-id\x3d"' + (0,z.P)(a.user.userId) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.user.name) + '"' + (a.rel ? ' rel\x3d"' + (0,z.P)(a.rel) + '"' : "") + Po(a) + "\x3e" + (0,z.O)(a.user.name) + "\x3c/a\x3e" : "Unknown User";
};
var Qo = function(a) {
  var b = "", c = (a.baseUrl ? (0,z.O)(a.baseUrl) : "") + "/" + (0,z.O)(a.collection.slug);
  return b += '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c)) + '" title\x3d"Go to ' + (0,z.P)(a.collection.name) + '" data-collection-slug\x3d"' + (0,z.P)(a.collection.slug) + '" data-id\x3d"' + (0,z.P)(a.collection.id) + '"' + (a.$L ? 'target\x3d"_blank"' : "") + Po(a) + "\x3e" + (0,z.O)(a.collection.name) + "\x3c/a\x3e";
};
var Po = function(a) {
  a = a || {};
  return(a.hc ? ' class\x3d"' + (0,z.P)(a.hc) + '"' : "") + (a.cj ? ' data-action\x3d"' + (0,z.P)(a.cj) + '"' : "") + (a.dj ? ' data-action-value\x3d"' + (0,z.P)(a.dj) + '"' : "");
};
z.Ro = function(a, b) {
  return So((0,z.M)(a, {width:64, height:64}), b);
};
var To = function(a, b) {
  return So((0,z.M)(a, {width:64, height:64, LL:!0}), b);
};
var Uo = function(a, b) {
  return So((0,z.M)(a, {width:100, height:100}), b);
};
z.Vo = function(a, b) {
  return So((0,z.M)(a, {width:190, height:190}), b);
};
var So = function(a, b) {
  var c = "", d = a.miroUrl ? a.miroUrl : b.miroUrl, e = !a.Dr && a.user && a.user.name;
  if (e) {
    var f = "Go to the profile of " + a.user.name, c = c + ('\x3ca href\x3d"' + (0,z.ek)(a) + '"' + (a.hc ? ' class\x3d"' + (0,z.P)(a.hc) + '"' : "") + (a.cj ? ' data-action\x3d"' + (0,z.P)(a.cj) + '"' : "") + (a.tabIndex ? '  tabindex\x3d"' + (0,z.P)(a.tabIndex) + '"' : "") + (a.dj ? ' data-action-value\x3d"' + (0,z.P)(a.dj) + '"' : "") + ' title\x3d"' + (0,z.P)(a.Wj ? a.Wj : f) + '" \x3e')
  } else {
    c += "\x3cspan" + (a.hc ? ' class\x3d"' + (0,z.P)(a.hc) + '"' : "") + "\x3e";
  }
  return c += '\x3cimg src\x3d"' + (a.user && (a.user.imageId || a.user.image) ? (0,z.P)((0,z.Q)(d)) + "/fit/c/" + (0,z.P)(a.width) + "/" + (0,z.P)(a.height) + "/" + (0,z.P)(a.user.imageId || a.user.image.imageId) : b.defaultUserImage ? (0,z.P)((0,z.Q)(b.defaultUserImage)) : "") + '"' + (a.Pc ? ' class\x3d"' + (0,z.P)(a.Pc) + '"' : "") + (a.Wj ? ' data-tooltip\x3d"' + (0,z.P)(a.Wj) + '"' : "") + (a.Wj || a.user ? ' title\x3d"' + (0,z.P)(a.Wj ? a.Wj : a.user.name) + '"' : "") + (e ? "" : (a.cj ? ' data-action\x3d"' + 
  (0,z.P)(a.cj) + '"' : "") + (a.dj ? ' data-action-value\x3d"' + (0,z.P)(a.dj) + '"' : "")) + "\x3e" + (a.user && a.user.name && a.LL ? "\x3cspan " + (a.VC ? 'class\x3d"' + (0,z.P)(a.VC) + '"' : "") + "\x3e" + (0,z.O)(a.user.name) + "\x3c/span\x3e" : "") + (e ? "\x3c/a\x3e" : "\x3c/span\x3e");
};
var Wo = function(a) {
  return'\x3cspan class\x3d"reading-time"\x3e' + (0,z.O)(Math.ceil(a.readingTime)) + " min read\x3c/span\x3e";
};
var Xo = function(a, b, c) {
  b = "";
  c.isAuthenticated ? a.isOnReadingList ? (b += '\x3cspan class\x3d"reading-list-status on-reading-list" data-post-id\x3d"' + (0,z.P)(a.postId) + '" data-reading-time\x3d"' + (0,z.P)(a.readingTime) + '" data-action\x3d"remove-from-reading-list" data-action-value\x3d"' + (0,z.P)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e', c = a.dM && 1E3 > c.deviceWidth, b += '\x3cspan class\x3d"reading-list-status-' + (0,z.P)(c ? "display" : "message") + '"\x3eBookmarked\x3c/span\x3e' + 
  (c ? "" : Wo(a)) + "\x3c/span\x3e") : b += '\x3cspan class\x3d"reading-list-status" data-post-id\x3d"' + (0,z.P)(a.postId) + '" data-reading-time\x3d"' + (0,z.P)(a.readingTime) + '" data-action\x3d"add-to-reading-list" data-action-value\x3d"' + (0,z.P)(a.postId) + '"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e\x3cspan class\x3d"reading-list-status-message"\x3eBookmark\x3c/span\x3e' + Wo(a) + "\x3c/span\x3e" : b += Wo(a);
  return b;
};
var Yo = function(a, b) {
  var c, d = a.contextCollection ? a.contextCollection : a.post.homeCollection;
  c = "";
  var e = a.si ? "" : Zo(a, b), d = !a.Cj || a.post.displayAuthor || d && !a.Ew ? '\x3cli class\x3d"post-item-meta-item"\x3e' + (!a.Cj || a.post.displayAuthor ? a.post.displayAuthor ? (0,z.O)(a.post.displayAuthor) + " " : a.si ? To({user:a.post.creator, Pc:"avatar-icon post-item-meta-avatar", hc:"post-item-author link link-secondary"}, b) : Oo({user:a.post.creator, hc:"post-item-author link link-secondary"}) : "") + (!d || a.Ew || "collectionSubscriptionsByUserId" == a.post.providerName && a.bm ? 
  "" : (a.Cj ? "" : " ") + "in " + Qo({collection:d, hc:"post-item-collection link link-secondary"})) + "\x3c/li\x3e" : "";
  c += e + d + (a.si ? Zo(a, b) : "");
  return'\x3cul class\x3d"post-item-meta"\x3e' + c + (b.variants.enable_debug && !a.wC ? '\x3cli class\x3d"post-item-meta-item" data-tooltip\x3d"Detected language (debug only)"\x3e' + (a.post.detectedLanguage ? (0,z.O)(a.post.detectedLanguage) : "n/a") + "\x3c/li\x3e" : "") + (a.FL ? "" : '\x3cli class\x3d"post-item-meta-item"\x3e' + Xo({postId:a.post.id, isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, b) + "\x3c/li\x3e") + (a.ZM && b.variants.can_resume_from_last_read_location && 
  (null == a.post.virtuals.userPostRelation ? 0 : a.post.virtuals.userPostRelation.lastReadParagraphName) ? '\x3cli class\x3d"post-item-meta-item" data-tooltip\x3d"Resume reading"\x3e\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"resume" data-action-value\x3d"' + (0,z.P)(a.post.virtuals.userPostRelation.lastReadParagraphName) + '"\x3eResume\x3c/button\x3e\x3c/li\x3e' : "") + "\x3c/ul\x3e";
};
var Zo = function(a, b) {
  return a.bm && a.post.providerName ? '\x3cli class\x3d"post-item-meta-item"\x3e' + qh("a", a.post.providerName)((0,z.M)(a, {reason:a.post.reasons[a.post.providerName], eh:!0}), null, b) + "\x3c/li\x3e" : "";
};
var $o = function(a, b, c) {
  return'\x3cdiv class\x3d"email-share-form"\x3e\x3cdiv class\x3d"email-address-container"\x3e\x3cinput type\x3d"text" class\x3d"input-text share-email-address" placeholder\x3d"name@example.com, name@example.com"\x3e\x3c/div\x3e\x3cdiv class\x3d"email-address-error-message"\x3e\x3c/div\x3e\x3cdiv class\x3d"share-comment"\x3e\x3ctextarea class\x3d"textarea-seamless sender-comment overlay-form-text-input" placeholder\x3d"Write something..."\x3e\x3c/textarea\x3e\x3cdiv class\x3d"share-post-data"\x3e\x3cdiv class\x3d"post-author-image-container"\x3e' + 
  So((0,z.M)({user:a.post.creator, hc:"post-author-image", cj:"stat-link", dj:"post-discovery.author.image"}, {width:40, height:40}), c) + '\x3c/div\x3e\x3cdiv class\x3d"share-post-text-container"\x3e\x3cdiv class\x3d"share-post-text"\x3e\x3cdiv class\x3d"share-post-title"\x3e' + (0,z.O)(a.post.title) + '\x3c/div\x3e\x3cdiv class\x3d"share-post-subtitle"\x3e' + (0,z.O)(a.post.virtuals.draftSnippet) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e";
};
var ap = function(a, b) {
  var c;
  if (a.post.providerName && b.variants.can_view_prl_homepage && b.variants.can_view_prl_debug) {
    c = (0,z.M)(a, {className:"post-meta post-meta-prl-debug"});
    for (var d = '\x3cul class\x3d"prl-debug ' + (c.className ? (0,z.P)(c.className) : "") + '"\x3e\x3cli class\x3d"prl-debug-item"\x3e\x3cspan class\x3d"prl-debug-weight"\x3e' + (0,z.O)(c.post.weight) + "\x3c/span\x3epost " + (0,z.O)(c.post.id) + "\x3c/li\x3e" + (c.post.magnitude ? '\x3cli class\x3d"prl-debug-item"\x3emagnitude: ' + (0,z.O)(c.post.magnitude) + "\x3c/li\x3e" : ""), e = nh(c.post.reasons), f = e.length, h = 0;h < f;h++) {
      for (var k = e[h], l = c.post.reasons[k], d = d + ('\x3cli class\x3d"prl-debug-item-provider"\x3e' + (0,z.O)(k) + ": " + (0,z.O)(l.weight) + "\x3cul\x3e"), k = nh(l.suggestionData), m = k.length, s = 0;s < m;s++) {
        var x = k[s], d = d + ('\x3cli class\x3d"prl-debug-item"\x3e' + (0,z.O)(x) + ": " + (0,z.O)(l.suggestionData[x]) + "\x3c/li\x3e")
      }
      d += "\x3c/ul\x3e\x3c/li\x3e";
    }
    c = d + "\x3c/ul\x3e";
  } else {
    c = "";
  }
  return c;
};
var bp = function(a, b) {
  var c;
  c = "" + (a.post.displayAuthor ? '\x3cspan class\x3d"' + (0,z.P)("post-meta post-meta-author link link-secondary") + '"\x3e' + (0,z.O)(a.post.displayAuthor) + "\x3c/span\x3e" : a.si ? To({user:a.post.creator, Pc:"avatar-icon post-meta-avatar post-meta-avatar-author", hc:"post-meta post-meta-author link link-secondary"}, b) : Oo({user:a.post.creator, hc:"post-meta post-meta-author link link-secondary"}));
  c = '\x3cspan class\x3d"post-meta post-meta-author-collection"\x3e' + c;
  var d = (0,z.M)(a, {separator:" in "}), e = d.contextCollection ? d.contextCollection : d.post.homeCollection, d = "" + (!e || "collectionSubscriptionsByUserId" == d.post.providerName && d.bm ? "" : '\x3cspan class\x3d"post-meta post-meta-collection"\x3e' + (d.separator ? (0,z.O)(d.separator) : "") + Qo({collection:e, hc:"link link-secondary"}) + "\x3c/span\x3e");
  return c + d + "\x3c/span\x3e";
};
var cp = function(a, b) {
  var c;
  if (a.ID || b.variants.can_blacklist) {
    c = '\x3cdiv class\x3d"post-meta post-meta-actions btn-set"\x3e' + (a.ID ? '\x3cbutton class\x3d"btn btn-small' + (a.ab ? " btn-light" : "") + '" title\x3d"Accept this story into this collection" data-action\x3d"accept-story" data-action-value\x3d"' + (0,z.P)(a.post.id) + '"\x3eAccept\x3c/button\x3e\x3cbutton class\x3d"btn btn-small' + (a.ab ? " btn-light" : "") + '" title\x3d"Don\'t accept this story into this collection" data-action\x3d"reject-story" data-action-value\x3d"' + (0,z.P)(a.post.id) + 
    "\"\x3eDon't Accept\x3c/button\x3e" : "");
    var d;
    d = b.variants.can_blacklist ? '\x3cbutton class\x3d"btn btn-small' + (a.ab ? " btn-light" : "") + '" title\x3d"Blacklist this post" data-action\x3d"update-blacklist" data-action-type\x3d"post" data-action-name\x3d"' + (0,z.P)(a.post.title) + '" data-action-id\x3d"' + (0,z.P)(a.post.id) + '"\x3eBlacklist Post\x3c/button\x3e\x3cbutton class\x3d"btn btn-small' + (a.ab ? " btn-light" : "") + '" title\x3d"Blacklist this user" data-action\x3d"update-blacklist" data-action-type\x3d"user" data-action-name\x3d"' + 
    (0,z.P)(a.post.creator.name) + '" data-action-id\x3d"' + (0,z.P)(a.post.creator.username) + '"\x3eBlacklist Author\x3c/button\x3e' : "";
    c = c + d + "\x3c/div\x3e";
  } else {
    c = "";
  }
  return c;
};
var dp = function(a) {
  return'\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.url)) + '" title\x3d"' + (0,z.P)(a.name) + '" data-action\x3d"open-social-activity-item" data-action-value\x3d"' + (0,z.P)(a.VD) + '" data-target-entity-type\x3d"' + (0,z.P)(a.WD) + '"\x3e' + (0,z.O)(a.name) + "\x3c/a\x3e\x3c/h3\x3e";
};
var ep = function(a, b) {
  for (var c = '\x3cdiv class\x3d"social-items' + (a.className ? " " + (0,z.P)(a.className) : "") + '"\x3e' + (a.Bn ? (0,z.Jh)(a.Bn) : ""), d = a.uo, e = d.length, f = 0;f < e;f++) {
    var h = d[f], c = c + fp((0,z.M)(a, {qB:a.zn ? (0,z.O)(a.zn) + " " + (0,z.O)(h.user.name) : "", user:h.user}), b)
  }
  return c + "\x3c/div\x3e";
};
var fp = function(a, b) {
  return Uo((0,z.M)(a, {user:a.user, Pc:"activity-item-avatar" + (a.zC ? " " + (0,z.O)(a.zC) : "")}), b) + (a.qB ? '\x3cspan class\x3d"social-activity-text"\x3e' + (0,z.O)(a.qB) + "\x3c/span\x3e" : "");
};
var gp = function(a, b) {
  return hp((0,z.M)(a, {zB:"\x3cul " + (a.Qw ? 'class\x3d"' + (0,z.P)(a.Qw) + '"' : "") + "\x3e" + qh("c", a.ci)(a, null, b) + "\x3c/ul\x3e"}));
};
var ip = function(a, b) {
  for (var c = "", d = a.items, e = d.length, f = 0;f < e;f++) {
    var h = d[f], c = c + (!a.ed || f < a.ed ? '\x3cli class\x3d"bucket-item"\x3e' + qh("d", a.ci)((0,z.M)(a, {item:h}), null, b) + "\x3c/li\x3e" : "")
  }
  return c;
};
var jp = function(a, b, c) {
  return qh("c", "post")(a, null, c);
};
z.kp = function(a, b) {
  return gp((0,z.M)(a, {items:a.posts, Wr:a.posts.length, ci:"post", Qw:"bucket-posts"}), b);
};
z.lp = function(a, b, c) {
  return gp((0,z.M)(a, {items:a.collections, Wr:a.collectionCount, ci:"collection", Qw:"collection-bucket u-clearfix"}), c);
};
z.mp = function(a) {
  return hp((0,z.M)(a, {zB:np(a)}));
};
var np = function(a) {
  return'\x3cdiv class\x3d"bucket-empty ' + (a.ab ? "bucket-empty-light" : "") + " " + (a.$n ? "bucket-empty-hidden" : "") + '"\x3e\x3cp class\x3d"bucket-empty-message"\x3e' + (0,z.Jh)(a.fi) + "\x3c/p\x3e" + (a.Tk ? '\x3cp class\x3d"bucket-empty-action"\x3e' + (0,z.Jh)(a.Tk) + "\x3c/p\x3e" : "") + "\x3c/div\x3e";
};
var hp = function(a) {
  return'\x3cdiv class\x3d"bucket layout-single-column ' + (a.jD ? "ordered-posts" : "") + '"\x3e' + (a.label ? '\x3ch2 class\x3d"bucket-label"\x3e' + (a.gi ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.gi)) + '"\x3e' : "") + (0,z.O)(a.label) + (a.gi ? "\x3c/a\x3e" : "") + "\x3c/h2\x3e" : "") + (0,z.Jh)(a.zB) + (a.gi && a.ed && a.Wr && a.ed < a.Wr ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.gi)) + '" class\x3d"btn btn-small"\x3eMore\x3cspan class\x3d"icons icons-arrow-right icons-pull-right"\x3e\x3c/span\x3e\x3c/a\x3e' : 
  "") + (a.rB ? np(a) : "") + "\x3c/div\x3e";
};
var op = function(a, b, c) {
  return(0,z.O)(c.productName);
};
var pp = function(a, b, c) {
  return "Sign into " + (0,z.O)(c.productName) + " or create an account";
};
var qp = function() {
  return "Almost there";
};
var rp = function(a) {
  return'Story added to \x3ca class\x3d"link-butter" href\x3d"/' + (0,z.P)(a.yc) + '"\x3e' + (0,z.O)(a.Yk) + "\x3c/a\x3e";
};
var sp = function(a) {
  return'Post removed from \x3ca class\x3d"link-butter" href\x3d"/' + (0,z.P)(a.yc) + '"\x3e' + (0,z.O)(a.Yk) + "\x3c/a\x3e";
};
var tp = function(a) {
  return'Post was not accepted to \x3ca class\x3d"link-butter" href\x3d"/' + (0,z.P)(a.yc) + '"\x3e' + (0,z.O)(a.Yk) + "\x3c/a\x3e";
};
var up = function(a) {
  return(0,z.O)(a.name) + " was successfully blacklisted";
};
var vp = function(a) {
  return(0,z.O)(a.name) + " could not be blacklisted";
};
var wp = function(a) {
  return "Verification email sent to " + (0,z.O)(a.email) + '. \x3cbutton class\x3d"btn btn-chromeless link-butter" title\x3d"Change email" data-action\x3d"butter-bar-action"\x3eChange email\x3c/button\x3e';
};
var xp = function() {
  return "Sorry, adding the story to the collection failed.";
};
var yp = function() {
  return "Sorry, removing the story from the collection failed.";
};
var zp = function(a) {
  a = a || {};
  return a.ST ? "Oops! Please check the email address to make sure it’s formatted correctly." : "Oops! Please check the email addresses to make sure they’re formatted correctly.";
};
z.Ap = function() {
  return "Please enter a valid email address";
};
var Bp = function() {
  return "An error occurred, and we were unable to send your verification email.";
};
z.Cp = function() {
  return "We sent you a verification email. Please check your inbox.";
};
var Dp = function(a, b, c) {
  return'\x3cdiv class\x3d"overlay"\x3e' + Ep(a, 0, c) + "\x3c/div\x3e";
};
var Ep = function(a, b, c) {
  b = '\x3cbutton class\x3d"overlay-close" data-action\x3d"overlay-close"\x3e\x26times;\x3c/button\x3e\x3cdiv class\x3d"overlay-dialog ' + (a.update ? "overlay-dialog-update" : "") + " " + (a.type ? "overlay-dialog-" + (0,z.P)(a.type) : "") + '" tabindex\x3d"-1"\x3e' + (a.title ? '\x3ch3 class\x3d"overlay-title"\x3e' + (0,z.O)(a.title) + "\x3c/h3\x3e" : "") + '\x3cdiv class\x3d"overlay-content"\x3e' + (0,z.Jh)(a.bodyHtml) + "\x3c/div\x3e";
  a = a.type ? qh("f", a.type)(a, null, c) : "";
  return b += (a ? '\x3cdiv class\x3d"overlay-actions"\x3e' + (0,z.Jh)(a) + "\x3c/div\x3e" : "") + "\x3c/div\x3e";
};
var Fp = function(a) {
  return'\x3cdiv class\x3d"popover-inner ' + (a.Uw ? (0,z.P)(a.Uw) : "") + '"\x3e' + (0,z.Jh)(a.EB) + '\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e';
};
var Gp = function(a, b, c) {
  b = '\x3cdiv class\x3d"overlay-registration"\x3e\x3cp class\x3d"overlay-registration-description"\x3e' + ("Finish creating your " + (0,z.O)(c.productName) + " account") + "\x3c/p\x3e\x3cform\x3e" + (c.variants.can_change_username ? '\x3cinput type\x3d"hidden" name\x3d"source" value\x3d"' + (0,z.P)(a.source) + '"\x3e\x3cinput type\x3d"hidden" name\x3d"accessToken" value\x3d"' + (0,z.P)(a.accessToken) + '"\x3e\x3cinput type\x3d"hidden" name\x3d"accessTokenSecret" value\x3d"' + (0,z.P)(a.accessTokenSecret) + 
  '"\x3e\x3cinput type\x3d"hidden" name\x3d"accountName" value\x3d"' + (0,z.P)(a.accountName) + '"\x3e\x3cdiv class\x3d"input-group input-group-text"\x3e\x3cspan class\x3d"input-group-title"\x3eFull name\x3c/span\x3e\x3cinput type\x3d"text" name\x3d"name" class\x3d"input-text enter-name" placeholder\x3d"Full name" value\x3d"' + (0,z.P)(a.name) + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"input-group input-group-text"\x3e\x3cspan class\x3d"input-group-title"\x3eProfile Address\x3c/span\x3e\x3cinput type\x3d"text" name\x3d"username" class\x3d"input-text enter-username" placeholder\x3d"profile address" value\x3d"' + 
  (0,z.P)(a.username) + '"\x3e\x3c/div\x3e' : '\x3cinput type\x3d"hidden" name\x3d"twitterAccessToken" value\x3d"' + (0,z.P)(a.accessToken) + '"\x3e\x3cinput type\x3d"hidden" name\x3d"twitterAccessTokenSecret" value\x3d"' + (0,z.P)(a.accessTokenSecret) + '"\x3e') + '\x3cdiv class\x3d"input-group input-group-text input-group-email"\x3e\x3cspan class\x3d"input-group-title"\x3eEmail address\x3c/span\x3e\x3cinput type\x3d"email" name\x3d"email" class\x3d"input-text enter-email" placeholder\x3d"yourname@example.com" value\x3d"' + 
  (0,z.P)(a.email ? a.email : "") + '"\x3e\x3c/div\x3e\x3cp class\x3d"overlay-registration-terms"\x3e';
  var d;
  d = "By creating an account, I accept " + (0,z.O)(c.productName) + '’s \x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.termsUrl)) + '" target\x3d"_blank"\x3eTerms of Service\x3c/a\x3e';
  return b + d + "\x3c/p\x3e" + qh("g", a.source)(a, null, c) + "\x3c/form\x3e\x3c/div\x3e";
};
var Hp = function() {
  return'\x3cdiv class\x3d"overlay-signin-waiting"\x3eYou should have been prompted to log in within a popup window.\x3c/div\x3e';
};
var Ip = function() {
  return'\x3cdiv class\x3d"overlay-signin-loading"\x3eLoading…\x3c/div\x3e';
};
var Jp = function(a) {
  return'\x3cbutton class\x3d"btn btn-' + (0,z.P)(a.Bo) + '" data-action\x3d"' + (0,z.P)(a.Bo) + '-auth" title\x3d"Connect with ' + (0,z.P)(a.wx) + '"' + (a.Mj ? 'data-redirect-url\x3d"' + (0,z.P)((0,z.Q)(a.Mj)) + '"' : "") + '\x3e\x3cspan class\x3d"icons icons-' + (0,z.P)(a.Bo) + '"\x3e\x3c/span\x3e\x3cspan class\x3d"btn-' + (0,z.P)(a.Bo) + '-label"\x3eSign in with ' + (0,z.O)(a.wx) + "\x3c/span\x3e\x3c/button\x3e";
};
var Kp = function(a, b, c) {
  return'\x3cul\x3e\x3cli\x3e\x3ca class\x3d"btn btn-chromeless share-by-email" title\x3d"Share this post by email" data-action\x3d"share-by-email" data-action-value\x3d"' + (0,z.P)(a.postId) + '" \x3e\x3ci class\x3d"icons icons-email"\x3e\x3c/i\x3eShare via email\x3c/a\x3e\x3c/li\x3e' + (c.variants.can_report_bad_posts ? '\x3cli\x3e\x3ca class\x3d"btn btn-chromeless" title\x3d"Report this post as spam" data-action\x3d"report-spam" data-action-value\x3d"' + (0,z.P)(a.postId) + '" \x3e\x3ci class\x3d"icons icons-flag"\x3e\x3c/i\x3eReport as spam\x3c/a\x3e\x3c/li\x3e' : 
  "") + (c.variants.enable_embed_ui ? '\x3cli class\x3d"btn-embed"\x3e\x3ca class\x3d"btn btn-chromeless" title\x3d"Embed this story" data-action\x3d"embed-story" data-action-value\x3d"' + (0,z.P)(a.postId) + '" \x3e\x3ci class\x3d"icons icons-embed"\x3e\x3c/i\x3eEmbed story\x3c/a\x3e\x3c/li\x3e' : "") + "\x3c/ul\x3e";
};
var Lp = function() {
  return'\x3ch2\x3eStory submitted\x3c/h2\x3e\x3cdiv class\x3d"subtitle"\x3e' + Mo() + "\x3c/div\x3e";
};
z.Mp = function(a, b) {
  return'\x3cbutton class\x3d"btn ' + (a.El ? "btn-small" : "btn-large") + " btn-follow btn-toggle btn-suffix " + (a.ab ? "btn-light" : "btn-primary") + " no-user-select " + (a.user.social && a.user.social.isFollowing ? "active" : "") + '"' + (b.isAuthenticated ? 'data-action\x3d"toggle-subscribe-user" data-action-value\x3d"' + (0,z.P)(a.user.userId) + '"' : (0,z.Jo)({cg:"/_/subscribe/user/" + (0,z.O)(a.user.userId), prompt:"Sign in to follow this user", xo:!0})) + '\x3e\x3cspan class\x3d"btn-label follow-label" data-suffix\x3d"ing"\x3eFollow\x3c/span\x3e\x3c/button\x3e';
};
z.Np = function(a) {
  return'\x3cheader class\x3d"hero hero-standalone layout-single-column ' + (a.AU ? "hero-standalone-underline" : "") + '"\x3e\x3ch1 class\x3d"hero-title"\x3e' + (0,z.O)(a.title) + "\x3c/h1\x3e" + (a.description ? '\x3cp class\x3d"hero-description"\x3e' + (0,z.O)(a.description) + "\x3c/p\x3e" : "") + (a.Tk ? '\x3cdiv class\x3d"hero-actions btn-set"\x3e' + (0,z.Jh)(a.Tk) + "\x3c/div\x3e" : "") + "\x3c/header\x3e";
};
z.Op = function(a, b) {
  for (var c = '\x3cnav class\x3d"nav-tabs ' + (a.ab ? "nav-tabs-light" : "") + " " + (a.$n ? "nav-tabs-hidden" : "") + ' layout-single-column"\x3e\x3cul class\x3d"nav-tabs-list"\x3e', d = a.Ko, e = d.length, f = 0;f < e;f++) {
    var h = d[f], c = c + ('\x3cli class\x3d"nav-tabs-item ' + (h.Vb ? "active" : "") + " " + (a.Gx ? (0,z.P)(a.Gx) : "") + '"\x3e' + (h.wo && !b.isAuthenticated ? '\x3cbutton class\x3d"btn btn-chromeless nav-tabs-anchor"' + (0,z.Jo)({cg:h.href, prompt:"Sign in to continue"}) + "\x3e" + (0,z.O)(h.name) + "\x3c/button\x3e" : '\x3ca class\x3d"nav-tabs-anchor" href\x3d"' + (0,z.P)((0,z.Q)(h.href)) + '"\x3e' + (0,z.O)(h.name) + "\x3c/a\x3e") + "\x3c/a\x3e\x3c/li\x3e")
  }
  return c + "\x3c/ul\x3e\x3c/nav\x3e";
};
var Pp = function(a) {
  a = a || {};
  return'\x3cdiv class\x3d"metabar u-clearfix ' + (a.ab ? "metabar-light" : "") + " " + (a.aM ? "metabar-top" : "") + " " + (a.cx ? (0,z.P)(a.cx) : "") + '"\x3e' + (a.Ar ? '\x3cdiv class\x3d"metabar-block align-left"\x3e' + (0,z.Jh)(a.Ar) + "\x3c/div\x3e" : "") + (a.DB ? '\x3cdiv class\x3d"metabar-block metabar-center"\x3e' + (0,z.Jh)(a.DB) + "\x3c/div\x3e" : "") + (a.Lh ? '\x3cdiv class\x3d"metabar-block align-right"\x3e' + (0,z.Jh)(a.Lh) + "\x3c/div\x3e" : "") + "\x3c/div\x3e";
};
z.Qp = function(a) {
  return Pp((0,z.M)(a, {aM:!0}));
};
var Rp = function(a, b, c) {
  return(0,z.Qp)({Lh:c.isAuthenticated && c.useragent.supportsDesktopEdit ? '\x3cdiv class\x3d"btn-set"\x3e\x3ca href\x3d"/new-collection" class\x3d"btn btn-primary"\x3eNew collection\x3c/a\x3e\x3c/div\x3e' : ""}) + (0,z.Np)({title:"Collections", description:"Stories grouped by theme or topic", Tk:'\x3cdiv class\x3d"input-group"\x3e\x3cspan class\x3d"icons icons-search"\x3e\x3c/span\x3e\x3cinput id\x3d"collection-search-input" type\x3d"search" class\x3d"input-text input-text-rounded" placeholder\x3d"Search"\x3e\x3c/div\x3e'}) + 
  (0,z.lp)((0,z.M)(a, {collections:c.variants.enable_see_subscribed_collections ? a.collections : [], us:!0, label:0 < a.collections.length ? "Collections you follow" : ""}), 0, c);
};
var Sp = function(a, b) {
  z.Do.call(this, a, b);
  this.ha = a.get("app");
  this.ea = a.get("request");
  this.aa = a.get("datastore");
  this.od = this.Da = this.Qs = null;
  this.hv = 0;
  this.Ja = "";
  this.Ss = {};
  this.Dm = [];
};
var Tp = function(a) {
  for (var b = a.N.querySelectorAll(".follow-wrapper"), c = 0;c < b.length;c++) {
    var d = b[c].querySelector(".btn-follow").getAttribute("data-action-value"), e = a.aa.mg[d] || null;
    if (!e) {
      (0,z.Cj)(Error("CollectionsScreen: Trouble getting collectionMeta for " + d));
      break;
    }
    d = (0,z.Up)(new z.Vp(b[c], e, Ko), {El:!0, ab:!0}, "collection").H();
    a.Dm.push(d);
  }
};
var Wp = function(a) {
  this.ia = a;
  this.qq = this.en = null;
};
var Xp = function(a, b) {
  if (a.en) {
    throw Error("Called populate() before the previous populate() was complete");
  }
  a.en = b;
  return a;
};
var Yp = function(a, b) {
  if (!a.en) {
    throw Error("Cannot call as() before populate()");
  }
  if (a.qq) {
    throw Error("Cannot call as() twice");
  }
  a.qq = b;
  return a;
};
var Zp = function(a, b) {
  var c = a.ia, d;
  b = b || {};
  var e = a.en.split(".");
  if (c) {
    for (var f = Array.isArray(c) ? c : [c];e.length && f.length;) {
      for (var h = e.shift(), k = 0 < e.length, l = [], c = 0;c < f.length;c++) {
        var m = f[c];
        if (k) {
          if (m = m[h], Array.isArray(m)) {
            for (d = 0;d < m.length;d++) {
              l.push(m[d]);
            }
          } else {
            "object" === typeof m && m && l.push(m);
          }
        } else {
          var s = a.qq || h;
          if (Array.isArray(m[h])) {
            for (d = 0;d < m[h].length;d++) {
              b[m[h][d]] && (m[s][d] = b[m[h][d]]);
            }
          } else {
            "string" === typeof m[h] && b[m[h]] && (m[s] = b[m[h]]);
          }
        }
      }
      f = l;
    }
  }
  a.en = a.qq = null;
};
z.al = function(a, b) {
  if (!b || "object" !== typeof b) {
    throw Error("References are now a required argument for autoPopulate()");
  }
  if (!a) {
    return a;
  }
  var c = Array.isArray(a);
  if (c && 0 === a.length) {
    return a;
  }
  var d;
  d = new Wp(a);
  var e = c ? a[0].type : a.type, c = c ? a : [a];
  if (c[0] instanceof I) {
    var f = c[0];
    f.Tf && (e = f.Tf());
  }
  if ("Collection" == e) {
    Zp(Yp(Xp(d, "creatorId"), "user"), b.User);
  } else {
    if ("Post" == e) {
      for (Zp(Yp(Xp(d, "creatorId"), "creator"), b.User), Zp(Yp(Xp(d, "homeCollectionId"), "homeCollection"), b.Collection), Zp(Yp(Xp(d, "virtuals.postedIn.collectionId"), "collection"), b.Collection), d = 0;d < c.length;d++) {
        var e = new Wp(c[d]), h = ca("virtuals.notesBySocialRecommends", c[d]), f = ca("virtuals.usersBySocialRecommends", c[d]);
        if (h && h.length && f && f.length) {
          e = Yp(Xp(e, "virtuals.notesBySocialRecommends.author"), "authorUser");
          h = {};
          if (Array.isArray(f)) {
            for (var k = 0;k < f.length;k += 1) {
              $p(h, f[k]);
            }
          } else {
            $p(h, f);
          }
          Zp(e, h);
        }
      }
    } else {
      if ("User" == e) {
        Zp(Yp(Xp(d, "userId"), "socialStats"), b.SocialStats), Zp(Yp(Xp(d, "userId"), "social"), b.Social);
      } else {
        if ("RecommendedPost" == e) {
          for (d = c.length - 1;0 <= d;d--) {
            (e = c[d].post) && "object" == typeof e ? (0,z.al)(e, b) : (window.console.warn("Missing post data in RecommendedPost for post ID: " + e), c.splice(d, 1));
          }
        } else {
          if ("RelatedCollectionReference" == e) {
            for (Zp(Yp(Xp(d, "collectionId"), "collection"), b.Collection), d = 0;d < c.length;d++) {
              (0,z.al)(c[d].collection, b);
            }
          } else {
            "FollowUp" == e ? (Zp(Yp(Xp(d, "mediaResourceId"), "mediaResource"), b.MediaResource), Zp(Yp(Xp(d, "creatorId"), "creator"), b.User), (0,z.al)(a.mediaResource, b)) : "MediaResource" == e && "MediaResourceMediumPost" == a.mediaResourceType && (Zp(Yp(Xp(d, "mediumPost.postId"), "post"), b.Post), (0,z.al)(a.mediumPost.post, b));
          }
        }
      }
    }
  }
  for (d = 0;d < c.length;d++) {
    c[d]._isPopulated = !0;
  }
  return a;
};
var Rk = function(a) {
  a = Array.isArray(a) ? a : [a];
  for (var b = 0;b < a.length;b++) {
    if (!a[b]._isPopulated) {
      return!1;
    }
  }
  return!0;
};
var $p = function(a, b) {
  if ("object" === typeof b && b.userId) {
    a[b.userId] = b;
  } else {
    throw window.console.error("Unable to convert data to map", b), Error("Unable to convert data to map " + b);
  }
};
var aq = function(a) {
  return'\x3ch4 class\x3d"cards-heading"\x3e' + (0,z.O)(a.heading) + '\x3c/h4\x3e\x3cul class\x3d"cards"\x3e' + (0,z.Jh)(a.sr) + "\x3c/ul\x3e";
};
var bq = function(a, b) {
  var c;
  c = b.isAuthenticated && b.currentUser.userId == a.user.userId;
  return c = "" + ('\x3cli class\x3d"card card-user"\x3e\x3cdiv class\x3d"card-image"\x3e' + (0,z.Vo)({user:a.user, Pc:"card-avatar"}, b) + '\x3c/div\x3e\x3cdiv class\x3d"card-content"\x3e\x3ch3 class\x3d"card-name"\x3e' + Oo({user:a.user, hc:"link link-primary", rel:"author"}) + "\x3c/h3\x3e" + (a.user.virtuals.bioHTML && "null" != a.user.virtuals.bioHTML ? '\x3cp class\x3d"card-description"\x3e' + (0,z.Jh)(a.user.virtuals.bioHTML) + "\x3c/p\x3e" : "") + (!c && b.variants.can_follow_users ? '\x3cdiv class\x3d"btn-set"\x3e' + 
  (0,z.Mp)((0,z.M)(a, {El:!0}), b) + "\x3c/div\x3e" : "") + (a.sB ? '\x3cdiv class\x3d"card-additional"\x3e' + (0,z.Jh)(a.sB) + "\x3c/div\x3e" : "") + "\x3c/div\x3e\x3c/li\x3e");
};
var cq = function(a, b) {
  var c = '\x3cli class\x3d"card card-collection"\x3e\x3cdiv class\x3d"card-image"\x3e', d = (0,z.Qj)((0,z.M)(a.collection.image, {strategy:"crop-fixed", width:"160", height:"160"}), 0, b), c = c + ('\x3ca href\x3d"/' + (0,z.P)(a.collection.slug) + '" title\x3d"Go to ' + (0,z.P)(a.collection.name) + '"\x3e\x3cimg class\x3d"card-collection-image" alt\x3d"Go to ' + (0,z.P)(a.collection.name) + '" src\x3d"' + (0,z.P)((0,z.Q)(d)) + '" /\x3e\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"card-content"\x3e\x3ch3 class\x3d"card-name"\x3e' + 
  Qo({collection:a.collection, rel:"collection", hc:"link link-primary"}) + "\x3c/h3\x3e" + (a.collection.description ? '\x3cp class\x3d"card-description"\x3e' + (0,z.O)(a.collection.description) + "\x3c/p\x3e" : "") + '\x3cdiv class\x3d"btn-set"\x3e' + (a.yB ? (0,z.Jh)(a.yB) : Ko({collection:a.collection, El:!0, vC:!0}, 0, b)));
  a.post && (d = a.post.virtuals.publishedInCount - 1, c += 0 < d ? '\x3cbutton class\x3d"btn btn-small btn-link" data-action\x3d"show-other-collections"\x3eAlso in ' + (0,z.O)(d) + " collection" + (1 != d ? "s" : "") + "\x3c/button\x3e" : "");
  return c + "\x3c/div\x3e\x3c/div\x3e\x3c/li\x3e";
};
var dq = function(a, b, c) {
  if (a.users.length || a.collections.length || a.posts.length) {
    if (a.users.length || a.collections.length) {
      if (a.users.length) {
        b = (0,z.M)(a, {ed:3});
        for (var d = "", e = b.users, f = e.length, h = 0;h < f;h++) {
          var k = e[h], d = d + (!b.ed || h < b.ed ? bq({user:k}, c) : "")
        }
        b = aq({heading:"People", sr:d}) + (a.posts.length ? "" : '\x3c/div\x3e\x3cdiv class\x3d"layout-multi-column-secondary"\x3e');
      } else {
        b = "";
      }
      b = '\x3cdiv class\x3d"layout-multi-column-secondary"\x3e' + b;
      if (a.collections.length) {
        d = (0,z.M)(a, {ed:3});
        e = "";
        f = d.collections;
        h = f.length;
        for (k = 0;k < h;k++) {
          var l = f[k], e = e + (!d.ed || k < d.ed ? cq({collection:l}, c) : "")
        }
        d = aq({heading:"Collections", sr:e});
      } else {
        d = "";
      }
      b = b + d + "\x3c/div\x3e";
    } else {
      b = "";
    }
    a = b + (a.posts.length ? '\x3cdiv class\x3d"layout-multi-column-primary"\x3e\x3ch3 class\x3d"cards-heading"\x3eStories\x3c/h3\x3e' + (0,z.kp)(a, c) + "\x3c/div\x3e" : "");
  } else {
    a = np({fi:"We couldn't find anything."});
  }
  return a;
};
var eq = function(a) {
  return a.L ? np({fi:"We couldn't find any collections about \x3cb\x3e" + (0,z.O)(a.L) + "\x3c/b\x3e"}) : "";
};
var fq = function(a, b, c) {
  z.Kj.call(this);
  this.ha = a.get("app");
  this.ea = a.get("request");
  this.Zu = 0;
  this.Dq = {};
  this.Xi = null;
  this.Da = b;
  this.Ja = "";
  this.wy = c;
  this.Sq = dq;
};
var gq = function(a, b) {
  a.ha.update(a.ha.ie.replace(/\?.*/, "") + "?q\x3d" + (0,window.encodeURIComponent)(b));
};
var hq = function(a, b, c) {
  z.Do.call(this, a, b);
  this.gz = c.q;
};
z.iq = function(a) {
  return!!a.trim().match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
};
var jq = function(a) {
  for (var b = 0;b < a.length;b++) {
    if (!(0,z.iq)(a[b])) {
      return!1;
    }
  }
  return!0;
};
var kq = function(a) {
  z.v.call(this);
  this.ca = a;
  this.ha = a.get("app");
  this.ha.F(lq, this.Ys, this);
  this.ea = a.get("request");
  this.aa = a.get("datastore");
  this.Ra = a.get("butter-bar");
  this.W = a.get("dialog");
  this.Nm = null;
};
var mq = function(a, b, c) {
  c && b && (0,z.r)((0,z.q)(nq(a, b, c, "PENDING"), function(a) {
    a = (0,z.al)(a.value, a.references);
    (0,z.Qk)(this.aa, a);
    this.W.open({title:"Story submitted", bodyHtml:Mo(), type:z.jk});
  }, a), (0,z.oq)(a.W, "An error occurred. Please try submitting again."));
};
var pq = function(a, b, c, d, e) {
  return c && b ? (0,z.r)((0,z.q)(nq(a, b, c, "APPROVED"), function(a) {
    a = (0,z.al)(a.value, a.references);
    (0,z.Qk)(this.aa, a);
    e && e.Fh(a, 0);
    (0,z.Dk)(qq, {collectionSlug:c, postIds:[b]});
    this.Ra.H(rp({Yk:d, yc:c}), z.rq);
  }, a), (0,z.oq)(a.W, xp())) : null;
};
var sq = function(a, b, c) {
  var d = (0,z.lk)(c, "name"), e = (0,z.lk)(c, "slug");
  (0,z.q)(nq(a, b, e, "REJECTED"), function(a) {
    tq(this, b, a);
    (0,z.Dk)(uq, {collectionSlug:e, postIds:[b]});
    this.Ra.H(sp({Yk:d, yc:e}), z.rq);
  }, a);
};
var vq = function(a, b, c, d) {
  var e = (0,z.lk)(c, "name"), f = (0,z.lk)(c, "slug");
  c = c.get("virtuals.canAdminister") ? "NOT_FOUND" : "REMOVED";
  (0,z.r)((0,z.q)(nq(a, b, f, c), function(a) {
    tq(this, b, a, d);
    (0,z.Dk)(uq, {collectionSlug:f, postIds:[b]});
    this.Ra.H(sp({Yk:e, yc:f}), z.rq);
  }, a), (0,z.oq)(a.W, yp()));
};
var wq = function(a, b, c, d) {
  var e = a.W.open({title:"Decline this story", bodyHtml:(0,z.K)(xq, {ND:a.aa.Bb(b).get("creator").name}), Jh:"OK", type:yq}), f = new z.wc;
  e.F(zq, function(a, b, c) {
    var e = b.L(".story-rejection-note"), e = e ? e.value : null, e = e.trim();
    Aq(this, a, c, e, d);
    b.close();
    f.Ea();
  }.bind(a, b, e, c));
  return f;
};
var Bq = function(a, b, c) {
  a.Ys();
  b.dg(c || (0,z.Ln)());
  a.Nm = b;
  return(0,z.Cc)(b.open(), function() {
    this.Nm.close();
    this.Nm = null;
  }, a);
};
var Aq = function(a, b, c, d, e) {
  var f = (0,z.lk)(c, "name"), h = (0,z.lk)(c, "slug");
  (0,z.q)(nq(a, b, h, "REJECTED", d), function(a) {
    tq(this, b, a, e);
    (0,z.Dk)(Cq, {postId:b, collectionId:c.get("id")});
    this.Ra.H(tp({Yk:f, yc:h}), z.rq);
  }, a);
};
var nq = function(a, b, c, d, e) {
  b = z.Dq.R({postId:b, collectionSlug:c});
  return a.ea.put(b, {postStatus:d, editorComment:e}, {na:!0});
};
var tq = function(a, b, c, d) {
  c = (0,z.al)(c.value, c.references);
  (0,z.Qk)(a.aa, c);
  d && d.Pl(b);
};
var Eq = function(a) {
  z.Kj.call(this);
  this.ca = a;
  this.Z = null;
  this.Ts = {};
  this.Da = null;
  this.Ja = "";
  this.Dd = a.get("request");
  this.od = null;
  this.gv = 0;
  this.Kq = {};
  this.aa = a.get("datastore");
  this.Ap = {};
};
z.Fq = function(a) {
  z.ok.call(this);
  this.yd = a;
  this.yd.F("add", this.Zz, this);
  this.yd.F("remove", this.cA, this);
  this.yd.F("change", this.aA, this);
  (0,z.Gq)(this);
};
z.Gq = function(a) {
  a.Qa = (a.yt ? a.yd.filter(a.yt, a.Oy) : a.yd.Qa).slice(a.kt, a.kt + a.zz);
};
var Hq = function(a) {
  var b = a.Qa;
  (0,z.Gq)(a);
  for (var c = 0;c < b.length;c++) {
    Iq(b[c], a.Qa) || a.X("remove", b[c], a);
  }
  for (var c = [], d = 0;d < a.Qa.length;d++) {
    Iq(a.Qa[d], b) || c.push(a.Qa[d]);
  }
  c.length && a.X("add", c, a);
};
var Iq = function(a, b) {
  return!!(0,z.Za)(b, function(b) {
    return b === a;
  });
};
z.Vp = function(a, b, c) {
  z.Kj.call(this);
  if (!a) {
    throw Error("Missing element for TemplateView");
  }
  this.N = a;
  this.ia = b;
  this.Sq = c;
};
z.Up = function(a, b, c) {
  a.xn = b;
  a.lt = c;
  a.Pd() && a.Zr();
  return a;
};
z.Jq = function(a, b) {
  b instanceof z.kk && (b = a.rh.call(null, b));
  if (a.xn) {
    a.xn[a.lt] = b;
    var c = (0,z.K)(a.Sq, a.xn);
    delete a.xn[a.lt];
    return c;
  }
  return(0,z.K)(a.Sq, b);
};
z.Kq = function(a, b, c) {
  return'\x3cdiv class\x3d"list-choice-hero"\x3e\x3ch2\x3e' + (0,z.O)(a.title) + "\x3c/h2\x3e" + (a.description ? "\x3cp\x3e" + (0,z.O)(a.description) + "\x3c/p\x3e" : "") + (a.PC && a.OC ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.OC)) + '" class\x3d"btn btn-primary btn-small"\x3e' + (0,z.O)(a.PC) + "\x3c/a\x3e" : "") + (a.EL ? '\x3cdiv class\x3d"input-group"\x3e\x3cspan class\x3d"icons icons-search"\x3e\x3c/span\x3e\x3cinput type\x3d"search" class\x3d"input-text input-text-rounded input-text-collection-search" placeholder\x3d"Search"\x3e\x3c/div\x3e' : 
  "") + '\x3c/div\x3e\x3cul class\x3d"list-choice-items"\x3e' + Lq(a, 0, c) + (a.dL && 0 == a.items.length ? '\x3cli class\x3d"list-choice-empty"\x3e' + (0,z.O)(a.dL) + "\x3c/li\x3e" : "") + "\x3c/ul\x3e";
};
var Lq = function(a, b, c) {
  b = "";
  for (var d = a.items, e = d.length, f = 0;f < e;f++) {
    var h = d[f];
    b += '\x3cli class\x3d"list-choice-item ' + (a.mo ? "list-choice-item-no-image" : "") + '"\x3e' + ("Remove" == h.status ? '\x3cspan class\x3d"btn btn-link list-choice-item-with-status"\x3e' : '\x3cbutton class\x3d"btn btn-link ' + (h.status ? "list-choice-item-with-status" : "") + '"' + (h.disabled ? 'disabled\x3d"disabled"' : 'data-action\x3d"pick" data-action-value\x3d"' + (0,z.P)(h.id) + '"') + "\x3e");
    if (!a.mo && h.imageId) {
      var k = (0,z.Qj)({imageId:h.imageId, strategy:"crop-fixed", width:"190", height:"190", cropType:"c"}, 0, c);
      b += '\x3cdiv class\x3d"list-choice-image" style\x3d"background-image: url(\'' + (0,z.P)((0,z.Q)(k)) + "')\"\x3e\x3c/div\x3e";
    }
    b += (h.eE ? '\x3cdiv class\x3d"list-choice-text-left"\x3e' + (0,z.O)(h.hM) + '\x3c/div\x3e\x3cdiv class\x3d"list-choice-text-right"\x3e' + (0,z.O)(h.QM) + "\x3c/div\x3e" : '\x3cdiv class\x3d"list-choice-text align-middle-table' + (a.mo ? "" : " list-choice-text-with-image") + (h.AR ? " list-choice-text-with-icon" : "") + '"\x3e\x3cdiv class\x3d"align-block"\x3e\x3ch5 class\x3d"list-choice-item-title"\x3e' + (0,z.O)(h.name) + (h.description ? "\x3csmall\x3e" + (0,z.O)(h.description) + "\x3c/small\x3e" : 
    "") + "\x3c/h5\x3e\x3c/div\x3e\x3c/div\x3e") + (h.eE || "Remove" != h.status ? "" : '\x3cspan class\x3d"actions action-remove" data-action\x3d"pick" data-action-value\x3d"' + (0,z.P)(h.id) + '"\x3eRemove\x3c/span\x3e') + ("Remove" == h.status ? "\x3c/span\x3e" : "\x3c/button\x3e") + "\x3c/li\x3e";
  }
  return b;
};
var Mq = function(a) {
  return'\x3cdiv class\x3d"list-choice-empty"\x3e\x3cp\x3eWe couldn\'t find any ' + (0,z.O)(a.ci) + " about \x3cstrong\x3e" + (0,z.O)(a.L) + "\x3c/strong\x3e\x3c/p\x3e\x3c/div\x3e";
};
var Nq = function(a, b) {
  z.Xn.call(this);
  this.ca = a;
  this.Sa = a.get("popover");
  this.ha = a.get("app");
  this.ia = b;
};
var Oq = function(a) {
  a.Bm = !0;
  return a;
};
var Pq = function(a) {
  if (z.Qq) {
    throw Error("Tried to make two module managers. Whooops!");
  }
  z.Qq = this;
  this.wc = a;
  this.Dz = {};
  this.Ez = {};
  this.Gp = {};
  this.Ua = {};
  this.rt = {};
};
var Rq = function(a, b) {
  var c = a.Dz[b], d = a.Ez[b];
  if (!c || !d) {
    return(0,z.Lc)(Error("Module " + b + " cannot be found"));
  }
  if (a.Gp[b]) {
    return(0,z.Jc)(!0);
  }
  if (a.Ua[b]) {
    return a.Ua[b].zb();
  }
  for (var e = (0,z.Jc)(!0), f = 0;f < c.length;f++) {
    a.Gp[c[f]] || (0,z.Dc)(e, Rq(a, c[f]));
  }
  c = new z.wc;
  a.Ua[b] = c;
  (0,z.r)((0,z.q)(e, function() {
    if ((0,z.ma)(d)) {
      for (var a = (0,z.Jc)(!0), c = 0;c < d.length;c++) {
        (0,z.q)(a, this.xz.bind(this, d[c]));
      }
      this.rt[b] = a;
    } else {
      this.xz(d);
    }
  }, a), c.$d, c);
  return c.zb();
};
var Sq = function(a, b) {
  this.wc = a;
  this.Eb = b;
};
var Tq = function() {
  z.Ij.call(this);
  this.nn = {};
  this.fJ = !1;
  this.ck = function() {
    return this.fJ;
  }.bind(this);
};
var Uq = function(a, b) {
  a.nn[b] || (a.nn[b] = new Vq(b, a.ck));
  return a.nn[b];
};
var Vq = function(a, b) {
  this.hf = a;
  this.ck = b;
  this.Qm = this.hn = this.Eb = null;
  this.Ip = !1;
};
var Wq = function(a, b) {
  if (!a.ck() && a.Eb) {
    throw Error('Cannot assign multiple scopes to service "' + a.hf + '"');
  }
  a.Eb = b;
};
var Xq = function(a, b) {
  this.wc = a;
  this.Eb = b;
  this.Nf = {};
  this.cn = null;
  this.tg = !1;
  this.wc.F("add-provider", this.tH, this);
};
var Yq = function(a) {
  var b = new Xq(a.wc, "screen");
  b.cn = a;
  return b;
};
z.zo = function(a, b, c) {
  if (a.wc.Mg(a.Eb, b) && a.wc.$h(b)) {
    a.Nf[b] = c, Zq(a, b);
  } else {
    throw Error('The service "' + b + '" was not declared as a manual servicefor scope "' + a.Eb + '"');
  }
};
var $q = function(a, b) {
  a.Nf[b] = a.wc.create(a.Eb, b, a);
  Zq(a, b);
};
var Zq = function(a, b) {
  var c = a.Nf[b];
  a.tg && c && "function" == typeof c.cd && c.cd();
};
var ar = function() {
  this.nm = !1;
};
var br = function(a, b, c, d, e) {
  z.Kj.call(this);
  this.ca = a;
  this.pa = b;
  this.aa = a.get("datastore");
  this.kd = new kq(a);
  this.ih = c;
  this.xa = d;
  this.Z = (0,z.lk)(this.xa, "id");
  this.ha = a.get("app");
  this.Ui = a.get("publish-state");
  this.Mp = e;
  this.zg = {};
  this.Nu = [];
  this.vm = null;
};
var cr = function(a) {
  var b = (0,z.J)("currentUser.userId"), c = a.aa.Bb(a.Z).get("virtuals.postedIn");
  a.zg = {};
  a.Nu = [];
  for (var d = 0;d < c.length;d++) {
    a.zg[c[d].collection.slug] = c[d], "APPROVED" == c[d].status && c[d].collection.creatorId !== b && a.Nu.push(new z.kk(c[d].collection));
  }
};
var dr = function(a, b) {
  for (var c = 0, d = a.aa.Bb(a.Z).get("virtuals.postedIn"), e = 0;e < b.length;e++) {
    for (var f = 0;f < d.length;f++) {
      d[f].collectionId == b[e].get("id") && "APPROVED" == d[f].status && c++;
    }
  }
  return c;
};
z.er = function(a, b, c, d, e) {
  z.wc.call(this);
  this.pa = a;
  this.wh = b;
  this.tv = Math.round(d);
  this.Dt = Math.round(e) || (/scroll/.test(this.wh) ? this.pa !== window.document.body || ji ? this.pa[this.wh] : window.document.documentElement[this.wh] : this.pa.style[this.wh]);
  this.FF = c;
  this.EF = this.tv - this.Dt;
  this.Zi = (0,z.aj)();
  this.kK = this.Dt < this.tv ? "min" : "max";
  window.requestAnimationFrame(this.aB.bind(this));
};
var fr = function() {
  z.v.call(this);
};
var vo = function(a, b) {
  return b.ja().scale(a.ic, a.jc).translate(a.Rb, a.mb);
};
var Kr = function(a, b) {
  var c = new z.co, d = 1, e = 0, f = 0;
  a.width / a.height > b.width / b.height ? (d = b.height / a.height, e = d * a.width, e = Math.min(Math.max(b.width / 2 - 0.5 * e, b.width - e), 0)) : (d = b.width / a.width, f = d * a.height, f = Math.min(Math.max(b.height / 2 - 0.5 * f, b.height - f), 0));
  var h = d;
  c.ic *= h;
  c.tc *= h;
  c.Rb *= h;
  c.uc *= d;
  c.jc *= d;
  c.mb *= d;
  d = f + b.top - a.top;
  c.Rb += e + b.left - a.left;
  c.mb += d;
  return c;
};
var Lr = function(a, b) {
  var c = {imageId:a.$a()}, d = a.Jd(), e = a.ll();
  if (d) {
    d = z.Mr.image.strategy[d];
    c.strategy = d.type;
    for (var f in d) {
      c[f] = d[f];
    }
  }
  e && (c.filter = e);
  b && (0,z.Cb)(c, b);
  return(0,z.K)(z.Qj, c);
};
var Nr = function(a) {
  z.v.call(this);
  this.ek = a;
  this.ik = this.ek.getContext("2d");
  this.Bq = [];
};
var Or = function(a, b) {
  z.v.call(this);
  this.zk = a;
  this.Cd = b;
};
z.Pr = function() {
  z.v.call(this);
  this.Ua = {};
};
var Qr = function(a, b, c) {
  this.ca = a;
  this.aa = a.get("datastore");
  this.ha = a.get("app");
  this.Z = b;
  this.Jl = c;
  this.Ua = new z.Pr;
};
var Rr = function(a) {
  var b = hk;
  a.Jl = new Or(a.Jl.zk, b);
  return b;
};
var Sr = function(a) {
  var b = a.vf();
  return b ? (0,z.K)(dk, {post:b.cb(), yc:a.la.Rn("preferredCollection")}) : null;
};
var Tr = function(a) {
  return ".surfaces-transitioning {height: " + (0,z.O)(a.DD.height) + "px; width: " + (0,z.O)(a.DD.width) + "px;}.surfaces-transitioning .surface-container {min-height: " + (0,z.O)(a.QD.height) + "px; min-width: " + (0,z.O)(a.QD.width) + "px; top: " + (0,z.O)(a.Gr.top) + "px; left: " + (0,z.O)(a.Gr.left) + "px;}.surfaces-transitioning .surface-transitioning-in .surface-content, .surfaces-transitioning .surface-transitioning-out .surface-content {height: " + (0,z.O)(a.RD.height) + "px; width: " + 
  (0,z.O)(a.RD.width) + "px; position: relative;}.surfaces-transitioning .surface-transitioning-in .surface-content {margin-top: " + (0,z.O)(-1 * a.$D.top) + "px; margin-left: " + (0,z.O)(-1 * a.$D.left) + "px;}.surfaces-transitioning .surface-transitioning-out .surface-content {margin-top: " + (0,z.O)(-1 * a.Gr.top) + "px; margin-left: " + (0,z.O)(-1 * a.Gr.left) + "px;}";
};
var Ur = function(a, b) {
  this.U = a;
  (0,z.t)(this.U, "surface-container");
  this.by = null;
  this.Za = b ? (0,z.mi)(a) : null;
  if (this.Za) {
    var c = window.document.createElement("div");
    c.className = "surface-scroll-overlay";
    this.Za.appendChild(c);
  }
  this.pv = null;
  this.Jq = {};
};
var Vr = function(a) {
  a.style.display = "block";
  a.style.visibility = "visible";
};
var Wr = function(a) {
  a.style.visibility = "hidden";
  a.style.display = "none";
};
var Xr = function(a, b) {
  b && Vr(b);
  a && Wr(a);
  return null;
};
var Yr = function(a, b, c) {
  var d = new z.wc, e = Zr(a, c), f = b ? Zr(a, b) : {top:0, left:0};
  (0,z.t)(c, "surface-transitioning-in");
  b && (0,z.t)(b, "surface-transitioning-out");
  c = a.Za == window.document.body ? new sd(window.innerWidth, window.innerHeight) : new sd(0, 0);
  b = new sd(a.Za.offsetWidth, a.Za.offsetHeight);
  c = new sd(Math.max(c.width, b.width), Math.max(c.height, b.height));
  var h = c.ja();
  h.width += Math.max(e.left, f.left);
  h.height += Math.max(e.top, f.top);
  e = (0,z.K)(Tr, {$D:e, Gr:f, QD:c, DD:h, RD:b});
  a.pv ? Ff(a.pv, e) : a.pv = (0,z.Ef)(e);
  (0,z.t)(a.Za, "surfaces-transitioning");
  $r(function() {
    (0,z.t)(this.U, "surface-container-fixed");
    (0,z.Fn)(d.Ea, d);
  }, a);
  return d;
};
var Zr = function(a, b) {
  var c = b.id;
  a.Jq[c] || (a.Jq[c] = {top:0, left:0});
  return a.Jq[c];
};
var as = function(a, b) {
  var c = Zr(a, b), d = (0,z.ni)(a.Za);
  c.top = d.top;
  c.left = d.left;
};
var $r = function(a, b) {
  (0,z.Fn)(a, b);
};
var bs = function(a) {
  return "Story “" + (0,z.O)(a.title) + "” successfully reported as spam.";
};
var cs = function(a) {
  return "There was a problem reporting “" + (0,z.O)(a.title) + "” as spam.";
};
var ds = function(a) {
  return'\x3cp class\x3d"butter-bar-message"\x3e' + (0,z.Jh)(a.UC) + (a.bM ? '\x3cspan class\x3d"butter-bar-actions"\x3e・\x3cbutton class\x3d"btn btn-chromeless butter-bar-action link link-butter" data-action\x3d"undo"\x3eUndo\x3c/button\x3e\x3c/span\x3e' : "") + (a.px ? ' \x3cbutton data-action\x3d"butter-bar-reload" class\x3d"butter-bar-action btn btn-chromeless link link-underline"\x3eSync editors.\x3c/button\x3e' : "") + (a.Jw ? '\x3cbutton data-action\x3d"butter-bar-dismiss" class\x3d"butter-bar-dismiss btn-chromeless icons icons-remove link link-accent"\x3e\x3c/button\x3e' : 
  "") + "\x3c/p\x3e";
};
z.es = function(a, b, c) {
  var d = a.post.content.image, e = "full" == d.backgroundSize;
  b = "";
  var f = (c.useragent.supportsFullImageSections ? '\x3ccanvas class\x3d"canvas-renderer"\x3e\x3c/canvas\x3e' : "") + ("revert" == a.mode ? '\x3cdiv class\x3d"butter-bar active butter-bar-center"\x3e' + ds({UC:'Viewing read-only revision ・\x3cbutton data-action\x3d"butter-bar-revert-cancel" class\x3d"butter-bar-action btn btn-chromeless link"\x3eCancel\x3c/button\x3e・\x3cbutton data-action\x3d"butter-bar-revert" class\x3d"butter-bar-action btn btn-chromeless link"\x3eRestore this revision\x3c/button\x3e'}) + 
  "\x3c/div\x3e" : "") + '\x3carticle class\x3d"post-article ' + ("edit" == a.mode ? " grid-breaking" : "") + (0 < a.post.vote ? " has-vote" : "") + (a.post.virtuals.languageTier ? " lang-tier-" + (0,z.P)(a.post.virtuals.languageTier) : "") + (c.useragent.supportsFullImageSections ? " supports-full-image-sections" : "") + (a.post.coverless ? " is-postCoverless" : "") + '" data-allow-notes\x3d"' + (0,z.P)(a.post.virtuals.allowNotes) + '"\x3e', h = "", k = a.post.content.image, l = a.contextCollection && 
  a.contextCollection.user && c.currentUser && a.contextCollection.virtuals.canAdminister && "PENDING" == a.postStatus, m;
  m = "revert" == a.mode ? "History" : "owner" != a.mode || c.variants.can_edit_post ? "edit" == a.mode || a.post.latestPublishedVersion ? "" : "Draft" : "Editing is currently unavailable.";
  m = "" + ("edit" == a.mode || m ? '\x3cdiv class\x3d"metabar-status"\x3e\x3cspan class\x3d"metabar-message' + (m ? " active" : "") + '"\x3e' + (0,z.Jh)(m) + "\x3c/span\x3e\x3c/div\x3e" : "");
  var s = "\x3cdiv\x3e" + ("edit" != a.mode ? '\x3cdiv class\x3d"metabar-text"\x3e' + (0,z.O)(Math.ceil(a.post.virtuals.readingTime)) + " min read\x3c/div\x3e" : "") + '\x3cdiv class\x3d"btn-set ' + ("edit" == a.mode ? "distraction-free-component" : "") + '"\x3e' + (!l && c.isAuthenticated && "edit" != a.mode && "owner" != a.mode && "revert" != a.mode && a.post.latestPublishedVersion ? '\x3cbutton class\x3d"btn btn-circle btn-toggle btn-bookmark ' + (a.post.virtuals.isOnReadingList ? "active" : "") + 
  '" data-post-id\x3d"' + (0,z.P)(a.post.id) + '" data-action\x3d"' + (a.post.virtuals.isOnReadingList ? "remove-from" : "add-to") + '-reading-list" data-action-value\x3d"' + (0,z.P)(a.post.id) + '" alt\x3d"Add to bookmarks"\x3e\x3cspan class\x3d"icons icons-reading-list no-user-select"\x3e\x3c/span\x3e\x3c/button\x3e' + (c.variants.show_open_in_app && "ios" == c.useragent.os && !c.useragent.isTablet ? '\x3ca href\x3d"medium:/p/' + (0,z.P)(a.post.id) + '" class\x3d"btn btn-circle" alt\x3d"Open in app"\x3e\x3cspan class\x3d"icons icons-share no-user-select"\x3e\x3c/span\x3e\x3c/a\x3e' : 
  "") : "") + (!l && "edit" != a.mode && "revert" != a.mode && c.isAuthenticated && c.useragent.supportsDesktopEdit && a.post.latestPublishedVersion ? '\x3cbutton data-action\x3d"show-cross-poster" class\x3d"btn hide show-cross-poster crosspost-to-collection"\x3eAdd/Remove from collections\x3c/button\x3e' : "");
  switch(a.mode) {
    case "owner":
      var x = "", L = dk({collection:a.contextCollection, post:a.post}), x = x + (c.variants.can_edit_post && c.supportsEdit ? "owner" == a.mode && a.post.isPublished && a.post.hasUnpublishedEdits ? '\x3ca class\x3d"btn" data-action\x3d"post-edit" data-tooltip\x3d"This post has unpublished edits" href\x3d"' + (0,z.P)((0,z.Q)(L)) + '/edit"\x3e\x3cspan class\x3d"icons icons-info"\x3e\x3c/span\x3eEdit\x3c/a\x3e' : '\x3ca class\x3d"btn" data-action\x3d"post-edit" href\x3d"' + (0,z.P)((0,z.Q)(L)) + '/edit"\x3eEdit\x3c/a\x3e' : 
      c.supportsEdit && !c.variants.can_edit_post ? '\x3cbutton class\x3d"btn" disabled\x3d"disabled" title\x3d"Edit mode not supported"\x3eEdit\x3c/button\x3e' : ""), s = s + x;
      break;
    case "edit":
      s += '\x3cbutton class\x3d"btn btn-delete" title\x3d"Delete" data-action\x3d"delete-post" disabled\x3d"disabled"\x3eDelete\x3c/button\x3e' + (c.variants.revision_history ? '\x3cbutton class\x3d"btn js-btn-history" title\x3d"Choose an older version to revert to" data-action\x3d"history" disabled\x3d"disabled"\x3eHistory\x3c/button\x3e' : "") + (a.post.latestPublishedVersion ? '\x3cbutton class\x3d"btn" title\x3d"Exit edit mode, discarding changes" data-action\x3d"cancel"\x3eCancel\x3c/button\x3e' + 
      (c.variants.disable_publish ? '\x3cbutton class\x3d"btn btn-primary btn-publish" title\x3d"Publishing is currently disabled" disabled\x3d"disabled"\x3ePublish changes\x3c/button\x3e' : '\x3cbutton class\x3d"btn btn-primary btn-publish" title\x3d"Publish" data-action\x3d"publish"\x3ePublish changes\x3c/button\x3e') : '\x3cbutton class\x3d"btn btn-share-draft" title\x3d"Share draft" data-action\x3d"share-draft" disabled\x3d"disabled"\x3eShare draft\x3c/button\x3e\x3cbutton class\x3d"btn btn-primary btn-publish" disabled\x3d"disabled"' + 
      (c.variants.disable_publish ? 'title\x3d"Publishing is currently disabled"' : (a.post.intendedCollectionId ? 'title\x3d"Publish and submit to collection"' : 'title\x3d"Publish"') + 'data-action\x3d"publish"') + "\x3e" + (a.post.intendedCollectionId ? "Submit to Collection" : "Publish") + "\x3c/button\x3e");
  }
  s += "\x3c/div\x3e\x3c/div\x3e";
  h += (0,z.Qp)((0,z.M)(a, {ab:(null == a.post.content.bodyModel ? null : null == a.post.content.bodyModel.sections ? null : null == a.post.content.bodyModel.sections[0] ? null : a.post.content.bodyModel.sections[0].backgroundColor) && 1 != (null == a.post.content.bodyModel.sections ? null : a.post.content.bodyModel.sections[0].backgroundColor) || k.imageId && ("contain" != k.backgroundSize || c.useragent.isMobile), cx:l ? "metabar-submission" : "", Ar:m, DB:l ? '\x3cdiv class\x3d"metabar-text"\x3eStory submitted to \x3ca class\x3d"metabar-link" href\x3d"/' + 
  (0,z.P)(a.contextCollection.slug) + '"\x3e' + (0,z.O)(a.contextCollection.name) + '\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"btn-set"\x3e\x3cbutton class\x3d"btn" title\x3d"Accept story" data-action\x3d"approve-crosspost"\x3eAccept\x3c/button\x3e\x3cbutton class\x3d"btn" title\x3d"Don’t accept story" data-action\x3d"reject-crosspost" data-action-value\x3d"decline"\x3eDon’t accept\x3c/button\x3e\x3c/div\x3e' : "", Lh:s}));
  d = f + h + (!a.post.coverless && e ? fs((0,z.M)(a, {image:d}), c) : "") + '\x3csection class\x3d"post-page-wrapper ' + (d.backgroundSize ? "post-page-wrapper-" + (0,z.P)(d.backgroundSize) : "") + '"\x3e\x3cdiv class\x3d"post-page-wrapper-inner"\x3e';
  e = a.post.coverless || e ? "" : ("edit" == a.mode || a.post.content.image.imageId ? fs((0,z.M)(a, {image:a.post.content.image}), c) : "") + '\x3cdiv class\x3d"layout-single-column"\x3e' + gs(a, c) + "\x3c/div\x3e";
  e = d + e;
  d = '\x3cdiv class\x3d"post-content' + (c.variants.hyphenate_body_text ? " post-content-hyphenate" : "") + '"\x3e\x3cdiv class\x3d"post-content-inner"\x3e\x3cdiv class\x3d"notes-source"\x3e\x3cdiv class\x3d"post-field body"' + (a.VM ? 'data-sections\x3d"' + (0,z.P)(a.VM) + '"' : "") + "\x3e" + (0,z.Jh)(a.qD) + "\x3c/div\x3e\x3c/div\x3e";
  "edit" != a.mode && "revert" != a.mode ? (f = "", a.post.latestPublishedVersion && (f += '\x3cbutton class\x3d"btn btn-large btn-toggle btn-primary btn-suffix recommend-button no-user-select ' + (0 < a.post.vote ? "active" : "") + '"', c.isAuthenticated ? (h = c.useragent.supportsInteract && c.variants.can_vote ? 0 < a.post.vote ? "unvote" : "upvote" : "disabled", f += 'data-action\x3d"' + (0,z.P)(h) + '" data-action-value\x3d"' + (0,z.P)(a.post.id) + '"' + ("disabled" == h ? 'disabled\x3d"disabled"' : 
  "")) : f += (0,z.Jo)({cg:"/_/vote/" + (a.post.homeCollection ? (0,z.O)(a.post.homeCollection.slug) : "p") + "/" + (0,z.O)(a.post.id), prompt:"Sign in to recommend", Ho:"recommend", xo:!0}), f += 'title\x3d"Recommend this post"\x3e\x3cspan class\x3d"icons icons-heart"\x3e\x3c/span\x3e\x3cspan class\x3d"btn-label recommend-button-label" data-suffix\x3d"ed"\x3eRecommend\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"vote-widget"\x3e\x3c/div\x3e'), f = '\x3cdiv class\x3d"post-footer-actions post-supplemental layout-single-column"\x3e\x3cdiv class\x3d"btn-set"\x3e' + 
  f + '\x3cdiv class\x3d"post-footer-secondary-actions"\x3e' + (a.post.latestPublishedVersion ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Twitter" data-action\x3d"share-on-twitter" data-action-value\x3d"' + (0,z.P)(a.post.id) + '"\x3e\x3ci class\x3d"icons icons-twitter"\x3e\x3c/i\x3e\x3c/a\x3e' + (c.variants.can_share_to_facebook ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"Share this post on Facebook" data-action\x3d"share-on-facebook" data-action-value\x3d"' + (0,z.P)(a.post.id) + 
  '"\x3e\x3ci class\x3d"icons icons-facebook"\x3e\x3c/i\x3e\x3c/a\x3e' : "") + (c.isAuthenticated ? '\x3ca class\x3d"btn btn-chromeless" title\x3d"More actions" data-action\x3d"more-actions" \x3e\x3ci class\x3d"icons icons-more"\x3e\x3c/i\x3e\x3c/a\x3e' : "") : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e") : f = "";
  d = d + f + '\x3cdiv class\x3d"post-follow-ups post-supplemental layout-single-column"\x3e\x3c/div\x3e';
  if ("edit" != a.mode && "revert" != a.mode) {
    f = a.contextCollection ? a.contextCollection : a.post.homeCollection;
    h = a.contextCollection && a.contextCollection.user && c.currentUser && a.contextCollection.virtuals.canAdminister && "PENDING" == a.postStatus;
    k = "";
    l = '\x3cdiv class\x3d"post-footer-cards post-supplemental layout-single-column"\x3e\x3cdiv ' + (f ? 'class\x3d"layout-multi-column-half"' : "") + "\x3e";
    m = a.post.displayAuthor ? "Published by" : "Written by";
    s = a.post.creator;
    x = '\x3cdiv class\x3d"card-description-additional card-published"\x3e' + ((a.post.latestPublishedAt ? a.post.latestPublishedAt > a.post.firstPublishedAt && a.post.virtuals.latestPublishedAtEnglish != a.post.virtuals.firstPublishedAtEnglish ? '\x3cspan data-tooltip\x3d"Originally published ' + (0,z.P)(a.post.virtuals.firstPublishedAtEnglish) + '"\x3eUpdated\x3c/span\x3e' : "\x3cspan\x3ePublished\x3c/span\x3e" : "\x3cspan\x3eDraft\x3c/span\x3e") + ' \x3cspan\x3e\x3ctime class\x3d"post-date"\x3e' + 
    (a.post.latestPublishedAt > a.post.firstPublishedAt && a.post.latestPublishedAt ? (0,z.O)(a.post.virtuals.latestPublishedAtEnglish) : a.post.firstPublishedAt ? (0,z.O)(a.post.virtuals.firstPublishedAtEnglish) : a.post.createdAt ? (0,z.O)(a.post.virtuals.createdAtEnglish) : "") + "\x3c/time\x3e\x3c/span\x3e") + "\x3c/div\x3e";
    L = "";
    if (a.collaborators && a.collaborators.length) {
      for (var L = L + ('\x3cdiv class\x3d"post-collaborators"\x3e\x3cspan class\x3d"post-collaborators-heading" data-tooltip\x3d"The following people helped ' + (0,z.P)(a.post.creator.name) + ' with this post by adding notes to provide feedback before the post was published."\x3eThanks to:\x3c/span\x3e '), G = a.collaborators, za = G.length, Eb = 0;Eb < za;Eb++) {
        var jb = G[Eb], L = L + ('\x3cspan class\x3d"post-collaborator-item post-collaborator-' + (0,z.P)(jb.state) + '"\x3e\x3ca class\x3d"post-collaborator-link link ' + ("dnf" == jb.user.username ? "post-collaborator-throb" : "") + '" href\x3d"/@' + (0,z.P)(jb.user.username) + '"\x3e' + (0,z.O)(jb.user.name) + "\x3c/a\x3e" + (a.post.creator.userId == c.currentUser.userId ? "hidden-author" == jb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + 
        (0,z.P)(jb.user.userId) + '"\x3e(show)\x3c/button\x3e' : "visible" == jb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.P)(jb.user.userId) + '"\x3e(hide)\x3c/button\x3e' : '\x3cspan class\x3d"post-collaborator-decline"\x3e(declined)\x3c/span\x3e' : jb.user.userId == c.currentUser.userId ? "hidden-collab" == jb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"show-collaborator" data-action-value\x3d"' + (0,z.P)(jb.user.userId) + 
        '"\x3e(show)\x3c/button\x3e' : "visible" == jb.state ? '\x3cbutton class\x3d"btn btn-chromeless" data-action\x3d"hide-collaborator" data-action-value\x3d"' + (0,z.P)(jb.user.userId) + '"\x3e(hide)\x3c/button\x3e' : "" : "") + "\x3c/span\x3e")
      }
      L += "\x3c/div\x3e";
    }
    c = k + (l + aq({heading:m, sr:bq({user:s, sB:x + L + (a.post.content && a.post.content.caption ? '\x3cdiv class\x3d"post-footer-cover-caption"\x3e\x3cspan class\x3d"post-footer-cover-caption-heading"\x3eCover photo:\x3c/span\x3e ' + (0,z.O)(a.post.content.caption) + "\x3c/div\x3e" : "")}, c)}) + "\x3c/div\x3e" + (f ? '\x3cdiv class\x3d"layout-multi-column-half"\x3e' + aq({heading:h ? "Submitted to" : "Published in", sr:cq({collection:f, post:a.post, yB:h ? '\x3cbutton class\x3d"btn btn-small" title\x3d"Accept story" data-action\x3d"approve-crosspost"\x3eAccept\x3c/button\x3e\x3cbutton class\x3d"btn btn-small" title\x3d"Don’t accept story" data-action\x3d"reject-crosspost" data-action-value\x3d"decline"\x3eDon’t accept\x3c/button\x3e' : 
    Ko({collection:f, El:!0, vC:!0}, 0, c)}, c)}) + "\x3c/div\x3e" : "") + "\x3c/div\x3e");
  } else {
    c = "";
  }
  return a = b + (e + (d + c + "\x3c/div\x3e\x3c/div\x3e") + "\x3c/div\x3e\x3c/section\x3e" + ("edit" == a.mode ? '\x3cfooter class\x3d"post-footer-editor"\x3e\x3cbutton class\x3d"btn btn-chromeless btn-new-section"\x3e\x3cspan data-tooltip\x3d"Add new section" class\x3d"icons icons-add-circled"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/footer\x3e' : "edit" != a.mode ? '\x3cfooter class\x3d"post-footer post-supplemental"\x3e\x3c/footer\x3e' : "") + "\x3c/article\x3e");
};
var hs = function(a, b) {
  var c;
  c = null == a.post.virtuals.notesBySocialRecommends ? null : a.post.virtuals.notesBySocialRecommends[0];
  return c = "" + (b.variants.enable_recommend_notes && c ? '\x3cdiv class\x3d"notes-recommendations layout-single-column"\x3e\x3cspan class\x3d"icons icons-heart align-left"\x3e\x3c/span\x3e\x3cspan class\x3d"link link-secondary align-left link-avatar"\x3e' + (0,z.Ro)({user:c.authorUser, Pc:"avatar-icon post-item-meta-avatar"}, b) + '\x3c/span\x3e\x3cblockquote class\x3d"notes-recommendation"\x3e\x3ccite class\x3d"notes-recommendation-cite"\x3e\x3ca class\x3d"link" href\x3d"/@' + (0,z.P)(c.authorUser.username) + 
  '"\x3e' + (0,z.O)(c.authorUser.name) + "\x3c/a\x3e\x3c/cite\x3e“" + (0,z.O)(c.content) + "”\x3c/blockquote\x3e\x3c/div\x3e" : "");
};
var gs = function(a, b) {
  var c = '\x3cheader class\x3d"post-header notes-header-source"\x3e\x3ch1 itemprop\x3d"name" name\x3d"title" class\x3d"post-title"\x3e' + (0,z.O)(a.post.title) + "\x3c/h1\x3e", d = a.post.content && a.post.content.subtitle;
  return c += ("edit" == a.mode || d ? '\x3ch2 name\x3d"subtitle" class\x3d"post-field subtitle post-subtitle"\x3e' + (0,z.O)(d) + "\x3c/h2\x3e" : "") + ("edit" != a.mode && "revert" != a.mode ? Yo((0,z.M)(a, {si:!0, wC:!0, FL:!0, ZM:!a.imageUrl}), b) : "") + "\x3c/header\x3e";
};
var fs = function(a, b) {
  var c = "", d = "full" == a.image.backgroundSize, e = (0,z.Qj)((0,z.M)(a.image, {cropType:"t", verticalGradient:d ? "29/81/55" : null}), 0, b), f = a.contextCollection && a.contextCollection.user && b.currentUser && a.contextCollection.virtuals.canAdminister && "PENDING" == a.postStatus, h = '\x3cdiv class\x3d"post-field image image-picker-wrap' + (a.image.backgroundSize ? " background-size-" + (0,z.P)(a.image.backgroundSize) : "") + (d ? e ? " picker-layout-fill" : " picker-layout-inline" : "") + 
  ("contain" == a.image.backgroundSize ? " layout-single-column" : "") + '" data-url\x3d"' + (0,z.P)((0,z.Q)(e)) + '"', k = a.image, l = k.id || k.imageId, k = "" + ((l ? ' data-image-id\x3d"' + (0,z.O)(l) + '"' : "") + (k.originalWidth ? ' data-width\x3d"' + (0,z.O)(k.originalWidth) + '"' : "") + (k.originalHeight ? ' data-height\x3d"' + (0,z.O)(k.originalHeight) + '"' : "") + (k.filter ? ' data-filter\x3d"' + (0,z.O)(k.filter) + '"' : "") + (k.backgroundSize ? ' data-image-style\x3d"' + (0,z.O)(k.backgroundSize) + 
  '"' : "")), h = h + k + "\x3e";
  d ? (e = (0,z.M)(a, {imageUrl:e}), d = e.contextCollection && e.contextCollection.user && b.currentUser && e.contextCollection.virtuals.canAdminister && "PENDING" == e.postStatus, e = "" + (("edit" == e.mode ? Nj() + '\x3cbutton class\x3d"remove-header-image btn-chromeless icons icons-remove distraction-free-component" data-action\x3d"remove-image" data-tooltip\x3d"Remove the cover photo."\x3e\x3c/button\x3e' : "") + is(e) + '\x3cdiv class\x3d"story-cover" data-load-img\x3d".post-header-image-cover"\x3e\x3cdiv class\x3d"picker-target-clone"\x3e\x3c/div\x3e\x3cdiv class\x3d"picker-target story-cover-image"' + 
  (e.imageUrl ? ' style\x3d"background-image: url(' + (0,z.P)((0,z.Q)(e.imageUrl)) + ');"' : "") + "\x3e\x3c/div\x3e" + js(e, b) + ("edit" != e.mode && b.variants.enable_recommend_notes && (null == e.post.virtuals.notesBySocialRecommends ? 0 : e.post.virtuals.notesBySocialRecommends[0]) && !d ? '\x3cdiv class\x3d"layout-table-row layout-fill-width"\x3e' + hs(e, b) + "\x3c/div\x3e" : "") + '\x3cdiv class\x3d"layout-table-row layout-fill"\x3e\x3cdiv class\x3d"picker-content story-cover-content"\x3e\x3cdiv data-scroll\x3d"post-cover" ' + 
  (e.imageUrl ? "" : ' data-scroll-disabled\x3d"true"') + '\x3e\x3cdiv class\x3d"post-content layout-single-column"\x3e' + ("edit" == e.mode ? (0,z.Pj)(null) + (0,z.Oj)() : "") + gs(e, b) + "\x3c/div\x3e" + (e.imageUrl ? b.variants.can_resume_from_last_read_location && (null == e.post.virtuals.userPostRelation ? 0 : e.post.virtuals.userPostRelation.lastReadParagraphName) ? '\x3cspan class\x3d"story-cover-arrow" data-action\x3d"resume" data-action-value\x3d"' + (0,z.P)(e.post.virtuals.userPostRelation.lastReadParagraphName) + 
  '" data-tooltip\x3d"Resume reading"\x3e\x3c/span\x3e' : '\x3cspan class\x3d"story-cover-arrow" data-action\x3d"scroll-to-post-start"\x3e\x3c/span\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e")) : (d = "edit" == a.mode || f ? "" : '\x3cdiv class\x3d"notes-recommendations-wrapper"\x3e' + hs(a, b) + "\x3c/div\x3e", e = (0,z.M)(a, {imageUrl:e}), f = '\x3cdiv class\x3d"post-header-image-wrap" data-load-img\x3d".post-header-image-cover"\x3e', "edit" == e.mode ? f += '\x3cdiv class\x3d"cover-edit"\x3e' + 
  ks() + '\x3cimg class\x3d"picker-target post-header-image-cover" src\x3d"' + (0,z.P)((0,z.Q)(e.imageUrl)) + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"contain-edit"\x3e\x3cimg class\x3d"picker-target post-header-image-contain" src\x3d"' + (0,z.P)((0,z.Q)(e.imageUrl)) + '" width\x3d"' + (0,z.P)(b.postColumnWidth) + '" ' + (e.image.imageId ? "" : 'style\x3d"display: none"') + "\x3e\x3c/div\x3e" : (f += js(e, b), "cover" == e.image.backgroundSize ? f += ks() + '\x3cimg class\x3d"post-header-image-cover" src\x3d"' + 
  (0,z.P)((0,z.Q)(e.imageUrl)) + '"\x3e' : (f += '\x3cimg class\x3d"post-header-image-contain" src\x3d"' + (0,z.P)((0,z.Q)(e.imageUrl)) + '" alt\x3d"' + (e.post.content ? (0,z.P)(e.post.content.caption) : "") + '"  ', e.image.originalWidth && "contain" == e.image.backgroundSize && (k = b.postColumnWidth * e.image.originalHeight / e.image.originalWidth, f += 'width\x3d"' + (0,z.P)(b.postColumnWidth) + '" height\x3d"' + (0,z.P)(k) + '"'), f += "\x3e")), f += "\x3c/div\x3e" + is(e) + ("edit" == e.mode ? 
  (0,z.Pj)({aE:"Add optional feature image"}) + '\x3cdiv class\x3d"replace-image-message distraction-free-component" data-action\x3d"pick-image"\x3e\x3cspan class\x3d"icons icons-replace-image"\x3e\x3c/span\x3e\x3cspan class\x3d"message"\x3eDrag ‘n’ drop or click to replace image\x3c/span\x3e\x3c/div\x3e\x3cbutton class\x3d"remove-header-image btn-chromeless icons icons-remove distraction-free-component" data-action\x3d"remove-image"\x3e\x3c/button\x3e\x3cbutton class\x3d"resize-header-image btn-chromeless distraction-free-component" data-action\x3d"toggle-background-size"\x3e\x3cspan class\x3d"icons icons-enlarge enlarge-btn"\x3e\x3c/span\x3e\x3cspan class\x3d"icons icons-shrink shrink-btn"\x3e\x3c/span\x3e\x3c/button\x3e' + 
  Nj() + (0,z.Oj)() : ""), e = d + f);
  return c + (h + e + "\x3c/div\x3e");
};
var is = function(a) {
  return "edit" == a.mode ? '\x3cdiv class\x3d"post-field caption" data-action\x3d"dummy"\x3e' + (0,z.O)(a.post.content.caption) + "\x3c/div\x3e" : a.post.content && a.post.content.caption ? '\x3cdiv class\x3d"post-field caption caption-truncated" title\x3d"' + (0,z.P)(a.post.content.caption) + '"\x3e' + (0,z.O)(a.post.content.caption) + "\x3c/div\x3e" : "";
};
var ls = function(a, b, c) {
  b = "" + ('\x3cul class\x3d"upvoters ' + (a.users.length ? "fade" : "") + '"\x3e');
  for (var d = Math.min(a.users.length, 3), e = 0;e < d;e++) {
    b += '\x3cli class\x3d"upvoters-item ' + (c.currentUser.userId == a.users[e].userId ? "js-upvoters-item-current-user" : "") + '"' + (a.ZC[e] ? 'data-tooltip\x3d"' + (0,z.P)(a.ZC[e].content) + '" data-tooltip-type\x3d"cite" data-tooltip-cite\x3d"' + (0,z.P)(a.users[e].name) + '"' : "") + "\x3e" + (0,z.Ro)({user:a.users[e], hc:"avatar-chromeless avatar-icon"}, c) + "\x3c/li\x3e";
  }
  return b + "\x3c/ul\x3e";
};
var js = function(a, b) {
  return "revert" != a.mode ? '\x3cdiv class\x3d"post-preview layout-foreground' + (a.image && a.image.imageId ? " post-preview-with-image" : "") + (a.image && a.image.filter ? " post-preview-filtered" : " post-preview-unfiltered") + '"\x3e\x3cdiv class\x3d"post-preview-content layout-single-column align-middle layout-fill-height"\x3e\x3cdiv class\x3d"align-block layout-fill-width"\x3e\x3cdiv class\x3d"post-preview-description"\x3e' + (b.isAuthenticated ? "Next in your reading list" : "Next in trending") + 
  '\x3c/div\x3e\x3ch3 class\x3d"post-preview-title"\x3e' + (0,z.O)(a.post.title) + '\x3c/h3\x3e\x3ch4 class\x3d"post-preview-subtitle"\x3e' + (0,z.O)(a.post.virtuals.draftSnippet) + "\x3c/h4\x3e" + Yo((0,z.M)(a, {si:!0, bm:!0, wC:!0}), b) + "\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e" : "";
};
var ks = function() {
  return'\x3cimg class\x3d"post-header-image-aspect-ratio" src\x3d"data:image/gif;base64,R0lGODlhMgAVAPAAAP///wAAACH5BAEAAAAALAAAAAAyABUAAAIfhI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8dTAQA7"\x3e';
};
var ms = function(a) {
  var b = "";
  a = dk(a);
  return b += '\x3ca class\x3d"footer-post-preview post-preview-enabled" href\x3d"' + (0,z.P)((0,z.Q)(a)) + '" data-action\x3d"next-post"\x3e\x3c/a\x3e';
};
var ns = function(a, b, c) {
  return a.YM ? fs((0,z.M)(a, {image:a.post.virtuals.previewImage}), c) : js(a, c);
};
var os = function(a, b, c, d, e) {
  Qr.call(this, a, c, d);
  this.Ca = a.get("dom-monitor");
  this.Ek = b;
  this.Ud = e;
  this.ov = null;
  this.Vw = ps;
  this.source = "read-next";
};
var qs = function(a) {
  a = a.vf();
  if (!a) {
    return!1;
  }
  a = a.get("virtuals.previewImage");
  return a.imageId && "contain" != a.backgroundSize;
};
var rs = function(a, b, c) {
  var d = new z.Ri(b, {name:"fade-back-out", duration:400});
  (0,z.q)(d, function() {
    b.style.visibility = "hidden";
    b.style.display = "none";
    (0,z.ri)(b);
    (0,z.Tc)(c, ["post-preview-enabled", "transition-from-post-footer"]);
    (0,z.uf)(c, "transform", "");
  });
  a = (0,z.qi)(a.ef);
  c.style.display = "block";
  c.style.visibility = "visible";
  (0,z.uf)(c, "transform", "translateY(" + a.top + "px)");
  (0,z.Rc)(c, ["post-preview-enabled", "pre-transition-from-post-footer"]);
  (0,z.ri)(c);
  (0,z.Wc)(c, "pre-transition-from-post-footer", "transition-from-post-footer");
  (0,z.uf)(c, "transform", "translateY(0)");
  (a = c.querySelector(".picker-content.story-cover-content")) && (new z.Ri(a, {name:"fade-up-in", duration:600})).start();
  d.start();
  return d;
};
var ss = function(a, b) {
  var c = new z.Ri(a, {name:"fade-back-out", duration:500}), d = new z.Ri(b, {name:"slide-up-in", duration:500});
  (0,z.q)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.ri)(a);
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.ri)(b);
  d.start();
  c.start();
  return d;
};
var ts = function(a, b) {
  z.v.call(this);
  this.wg = !1;
  this.Eb = (0,z.Di)(a);
  this.YA = (0,z.ma)(b) ? b : [b];
};
var us = function(a) {
  this.hf = a;
};
var vs = function(a) {
  this.LJ = a;
};
var ws = function(a, b, c) {
  z.Ij.call(this);
  this.Ps = b;
  this.ca = a;
  this.wF = c || window.document.title;
  this.Gq = this.mq = this.$j = this.ie = this.tb = null;
  this.ec = {};
  this.qv = new Ur(window.document.getElementById("container"), !0);
  this.EA = {};
  this.Ou = [];
  this.Ms = [];
  this.ya = [];
  this.uy = !0;
  this.Iq = {};
  window.setInterval(this.IJ.bind(this), xs);
};
var ys = function(a, b) {
  a.Gq = b;
  return a;
};
var zs = function(a, b) {
  a.Ou.push(b);
  return a;
};
var As = function(a, b) {
  a.Ms.push(b);
  return a;
};
z.Bs = function(a) {
  return a.tb;
};
z.Cs = function(a, b, c) {
  c = c || {};
  return!!a.ec[b] && a.ec[b].Xd.bi(b, c, a.ec[b]);
};
z.Ds = function(a, b) {
  a.$j.hash != b && (a.$j.hash = b, Es(a, a.tb.qb(), a.ie, a.$j, !0));
};
var Fs = function(a, b) {
  return(0,z.r)(Mc(), a.yq.bind(a, Jn, b, !1));
};
var Gs = function(a, b, c, d, e) {
  var f = b.path, h = a.Gq.Lr(f, z.vg);
  if (h) {
    return Gs(a, {path:h, hash:b.hash}, c, d, e);
  }
  a.X(lq, f, c);
  var k = c || {};
  k.hash = b.hash || k.hash || "";
  k.lo = k.lo || a.ie;
  k.Mo = k.Mo || null;
  if (!e && f == a.ie) {
    return b.hash ? ((0,z.Ds)(a, k.hash), a.eB(k, a.tb), a.X("historyUpdate"), (0,z.Cc)((0,z.Jc)(a.tb), a.yq.bind(a, Jn, f, !0))) : Fs(a, f);
  }
  b = a.tb && a.tb.or();
  "string" == typeof b && (b = !(0,window.confirm)(b));
  if (b) {
    return Fs(a, f);
  }
  b = Hs(a, f, k);
  (0,z.r)(b, function(a) {
    this.X(Jn, f, !1, a);
  }, a);
  a.mq && (a.mq.cancel(), a.mq = null);
  a.tb && Is(a, a.By);
  var l = new z.wc;
  (0,z.q)(b, function(a) {
    var b = a.nr(), c = !k.Al;
    b ? ((0,z.q)(b, this.fB.bind(this, a, k.Mo, c)), (0,z.r)(b, this.AG.bind(this, f, a))) : b = this.fB(a, k.Mo, c);
    this.mq = b;
    (0,z.q)(b, function() {
      Es(this, a.qb(), f, k, !!d);
      a.getMetadata() && (0,z.Vn)(a.getMetadata());
    }, this);
    (0,z.q)(b, this.eB.bind(this, k, a));
    (0,z.q)(b, this.VF.bind(this, f, k, a));
    (0,z.q)(b, this.yq.bind(this, Jn, f, !0));
    (0,z.r)(b, this.yq.bind(this, Jn, f, !1));
    b.kj(l);
  }, a);
  (0,z.r)(b, l.$d, l);
  return l;
};
var Is = function(a, b) {
  if (b) {
    var c = (0,z.Ln)();
    c && (c = (0,z.ni)(c), a.EA[b] = {scrollX:c.left, scrollY:c.top});
  }
};
var Es = function(a, b, c, d, e) {
  b = b || a.wF;
  d.yl || (d.yl = "h" + (0,z.aj)());
  var f = {path:c, isNavigate:!0, data:window.JSON.stringify(d)};
  c = (a.Ps + c).replace("//", "/");
  var h;
  if (h = window.location.search) {
    "?" == h.charAt(0) && (h = h.substr(1));
    h = new Sf(h);
    for (var k = h.ue(), l = 0;l < k.length;l++) {
      for (var m = 0;m < a.Ou.length;m++) {
        var s = k[l], x = a.Ou[m];
        if ("string" == typeof x && s == x || x.test && x.test(s)) {
          h.remove(s);
          break;
        }
      }
    }
    h = h.Zh() ? "" : "?" + h.toString();
  } else {
    h = "";
  }
  c += h;
  d.hash && (c += "#" + d.hash);
  if (Js) {
    try {
      e ? window.history.replaceState(f, b, c) : window.history.pushState(f, b, c);
    } catch (L) {
      (0,z.Cj)(L);
    }
  }
  window.document.title = b;
  a.By = d.yl;
};
var Ks = function(a, b, c) {
  try {
    c.Xb.call(c);
  } catch (d) {
    (0,z.Cj)(d);
  }
  delete a.ec[b];
  a.qv.remove(c.SD);
};
var Ls = function(a) {
  a = a.split("#");
  return{path:a[0], hash:a[1] || ""};
};
var Ms = function(a, b) {
  var c;
  c = a.Gq;
  var d = b.split("?")[0];
  (c = (d = Ns(c.Cu, d)) && d.object) && c.screen ? (d = d.matches, d.path = b, c = {screen:c.screen, ex:d}) : c = null;
  if (!c) {
    return null;
  }
  d = c.screen;
  return{ex:c.ex, kL:"string" === typeof d ? new us(d) : new vs(d)};
};
var Os = function(a, b, c) {
  var d = null;
  (0,z.Cs)(a, b, c) ? d = a.ec[b] : a.ec[b] && (c = a.ec[b], c !== a.tb && Ks(a, b, c));
  return d;
};
var Hs = function(a, b, c, d) {
  if (a.Iq[b]) {
    return a.Iq[b].zb();
  }
  var e = wg(), f = Os(a, b, c);
  if (f) {
    return(0,z.Jc)(f);
  }
  var h = Ms(a, b);
  if (!h) {
    return(0,z.Lc)(new Ps(b));
  }
  var f = h.kL, h = h.ex, k = Yq(a.ca), f = f.create(k, h, c), f = f instanceof z.wc ? f.zb() : (0,z.Jc)(f);
  a.Iq[b] = f;
  (0,z.Cc)(f, function() {
    delete this.Iq[b];
  }, a);
  (0,z.q)(f, function(a) {
    this.ec[b] = a;
    var f = !this.tb;
    a.AC(e);
    f && c.yl && Is(this, c.yl);
    var h = this.qv, k = a.N, L = k.parentNode && k.parentNode.parentNode == h.U, G = L ? k.parentNode : window.document.createElement("div"), za = "_obv.shell._surface_" + Qs++;
    G.id = za;
    (0,z.t)(G, "surface");
    f ? (Vr(G), L && h.Za && as(h, G)) : Wr(G);
    ui(G, k);
    (0,z.t)(void 0 != G.firstElementChild ? G.firstElementChild : (0,z.Pd)(G.firstChild, !0), "surface-content");
    L || ui(h.U, G);
    a.SD = za;
    d && (a.Xd = new Rn(a.Xd));
  }, a);
  return f.zb();
};
var Rs = function(a, b, c) {
  var d = a.Gq.Lr(b, z.vg);
  if (d) {
    return Rs(a, d, c);
  }
  b = Ls(b).path;
  return b == a.ie ? (0,z.Jc)(a.tb) : Hs(a, b, c || {}, !0);
};
var Ps = function(a) {
  z.Ca.call(this, "No screen or factory for " + a);
  this.path = a;
};
var Ss = function(a) {
  this.ca = a;
  this.af = null;
};
z.oq = function(a, b, c) {
  return function(a) {
    a && a instanceof z.Nc || (c || (0,z.Cj)(a), this.open({title:"Uh oh!", bodyHtml:b, type:z.jk}));
  }.bind(a);
};
var Ts = function(a, b, c, d) {
  z.Ij.call(this);
  this.ca = a;
  this.Bm = !!c;
  this.QF = !!d;
  a = window.document.createElement("div");
  a.innerHTML = (0,z.K)(Dp, b);
  this.nc = b.type || "";
  this.xy = [];
  this.U = a.children[0];
  this.W = this.U.getElementsByClassName("overlay-dialog")[0];
  this.QF || (0,z.R)(this.U, "click", function(a) {
    a.target === this.U && this.close();
  }, this);
  this.ca.get("app").F(Jn, this.close, this);
  (0,z.Di)(this.U).D("overlay-close", this.close, this).D("overlay-confirm", this.pF, this).D("overlay-cancel", this.dk, this).D("overlay-refresh", this.zq, this).D("overlay-submit", this.gK, this).D("overlay-next", this.Um, this);
};
var Us = function(a) {
  this.Ra = a.get("butter-bar");
  this.W = a.get("dialog");
  this.ea = a.get("request");
};
var Vs = function(a, b, c) {
  ts.call(this, a, "share-by-email");
  this.JF = b.get("email");
  this.xa = c;
};
var W = function(a) {
  this.Du = a;
  this.nz = !1;
};
var Ws = function(a) {
  if (!a.nz) {
    for (var b = a.Du.split("/"), c = {}, d = 0;d < b.length;d++) {
      if (":" == b[d].charAt(0)) {
        var e = Xs.exec(b[d]);
        if (!e) {
          throw Error("Parse error " + a.Du);
        }
        c[e[1]] = new Ys(d, null == e[2] ? null : Number(e[2]));
        b[d] = ":" + e[1];
      }
    }
    a.Eu = c;
    a.lq = b;
    a.nz = !0;
  }
};
var Ys = function(a, b) {
  this.index = a;
  this.padding = b;
};
var X = function() {
  z.y.call(this);
};
var Y = function(a, b, c) {
  H(a, c);
  c.table = c.table;
  c.da = c.da;
  c.za = void 0 === c.za || c.za;
  c.Fl = void 0 === c.Fl ? !1 : c.Fl;
  a.qE = c;
  a.hP = c.table;
  a.fO = c.da;
  a.QO = c.fa.toString();
  a.pO = c.za;
  a.qO = c.Fl;
  a.hT = function(a) {
    return c.fa.parse(a);
  };
  a.qR = function(a, b) {
    var f;
    if (a === c.da) {
      f = c.fields[b].j();
    } else {
      for (var h = 0;h < c.ga.length;h++) {
        var k = c.ga[h];
        k.Sn === a && k.yw === b && (f = "gsi-" + a + (b ? "-" + b : "") + "-index");
      }
    }
    if (void 0 === f) {
      throw Error("Index does not exist on hash key " + a + " and range key " + b);
    }
    return f;
  };
  a = a.prototype;
  b && a && (Object.defineProperty(a, "id", {get:X.prototype.hC, set:function() {
  }}), mg(a, "column"), Object.defineProperty(a, "hashKey", {get:X.prototype.hC}), Object.defineProperty(a, "rangeKey", {get:X.prototype.tL}));
};
var Zs = function() {
  z.y.call(this);
};
var $s = function() {
  z.y.call(this);
};
var at = function() {
  z.y.call(this);
};
var bt = function() {
  z.y.call(this);
};
var ct = function() {
  z.y.call(this);
};
var dt = function() {
  z.y.call(this);
};
var et = function() {
  z.y.call(this);
};
var ft = function() {
  z.y.call(this);
};
var gt = function() {
  z.y.call(this);
};
var ht = function() {
  z.y.call(this);
};
var it = function() {
  z.y.call(this);
};
var jt = function() {
  z.y.call(this);
};
var kt = function() {
  z.y.call(this);
};
var lt = function() {
  z.y.call(this);
};
var mt = function() {
  z.y.call(this);
};
var nt = function() {
  z.y.call(this);
};
var ot = function() {
  z.y.call(this);
};
var pt = function() {
  z.y.call(this);
};
z.qt = function() {
  z.y.call(this);
};
z.rt = function() {
  z.y.call(this);
};
var st = function() {
  z.y.call(this);
};
var tt = function() {
  z.y.call(this);
};
z.ut = function() {
  z.y.call(this);
};
z.vt = function() {
  z.y.call(this);
};
z.wt = function() {
  z.y.call(this);
};
z.xt = function() {
  z.y.call(this);
};
z.yt = function() {
  z.y.call(this);
};
var zt = function() {
  z.y.call(this);
};
var At = function() {
  z.y.call(this);
};
var Bt = function() {
  z.y.call(this);
};
z.Ct = function() {
  z.y.call(this);
};
z.Dt = function() {
  z.y.call(this);
};
var Et = function() {
  z.y.call(this);
};
var Ft = function() {
  z.y.call(this);
};
z.Gt = function() {
  z.y.call(this);
};
z.Ht = function() {
  z.y.call(this);
};
z.It = function() {
  z.y.call(this);
};
z.Jt = function() {
  z.y.call(this);
};
var Kt = function() {
  z.y.call(this);
};
var Lt = function() {
  z.y.call(this);
};
z.Mt = function() {
  z.y.call(this);
};
var Nt = function() {
  z.y.call(this);
};
z.Ot = function() {
  z.y.call(this);
};
z.Pt = function() {
  z.y.call(this);
};
z.Qt = function() {
  z.y.call(this);
};
z.Rt = function() {
  z.y.call(this);
};
z.St = function() {
  z.y.call(this);
};
z.Tt = function() {
  z.y.call(this);
};
z.Ut = function() {
  z.y.call(this);
};
z.Vt = function() {
  z.y.call(this);
};
z.Wt = function() {
  z.y.call(this);
};
var Xt = function() {
  z.y.call(this);
};
var Yt = function() {
  z.y.call(this);
};
z.Zt = function() {
  z.y.call(this);
};
z.$t = function() {
  z.y.call(this);
};
z.au = function() {
  z.y.call(this);
};
z.bu = function() {
  z.y.call(this);
};
z.cu = function() {
  z.y.call(this);
};
var du = function() {
  z.y.call(this);
};
var eu = function() {
  z.y.call(this);
};
var fu = function() {
  z.y.call(this);
};
z.gu = function() {
  z.y.call(this);
};
z.hu = function() {
  z.y.call(this);
};
z.iu = function() {
  z.y.call(this);
};
var ju = function() {
  z.y.call(this);
};
var ku = function() {
  z.y.call(this);
};
var lu = function() {
  z.y.call(this);
};
z.mu = function() {
  z.y.call(this);
};
var nu = function() {
  z.y.call(this);
};
var ou = function() {
  z.y.call(this);
};
z.pu = function() {
  z.y.call(this);
};
var qu = function() {
  z.y.call(this);
};
var ru = function() {
  z.y.call(this);
};
var su = function() {
  z.y.call(this);
};
z.tu = function() {
  z.y.call(this);
};
z.uu = function() {
  z.y.call(this);
};
z.vu = function() {
  z.y.call(this);
};
var wu = function() {
  z.y.call(this);
};
var xu = function() {
  I.call(this);
};
var yu = function() {
  I.call(this);
};
var zu = function() {
  I.call(this);
};
var Au = function() {
  I.call(this);
};
z.Bu = function() {
  I.call(this);
};
z.Cu = function() {
  I.call(this);
};
var Du = function() {
  I.call(this);
};
var Eu = function() {
  I.call(this);
};
z.Fu = function() {
  I.call(this);
};
z.Gu = function() {
  I.call(this);
};
var Hu = function() {
  I.call(this);
};
var Iu = function() {
  I.call(this);
};
var Ju = function() {
  I.call(this);
};
var Ku = function() {
  I.call(this);
};
var Lu = function() {
  I.call(this);
};
z.Mu = function() {
  I.call(this);
};
var Nu = function() {
  I.call(this);
};
var Ou = function() {
  I.call(this);
};
var Pu = function() {
  I.call(this);
};
var Qu = function() {
  I.call(this);
};
var Ru = function() {
  I.call(this);
};
var Su = function() {
  I.call(this);
};
var Tu = function() {
  I.call(this);
};
var Uu = function() {
  I.call(this);
};
var Vu = function() {
  I.call(this);
};
var Wu = function() {
  I.call(this);
};
z.Xu = function() {
  I.call(this);
};
var Yu = function() {
  I.call(this);
};
z.Zu = function() {
  I.call(this);
};
z.$u = function() {
  I.call(this);
};
var av = function() {
  I.call(this);
};
z.bv = function() {
  I.call(this);
};
var cv = function() {
  I.call(this);
};
var dv = function() {
  I.call(this);
};
z.ev = function() {
  I.call(this);
};
var fv = function() {
  I.call(this);
};
var gv = function() {
  I.call(this);
};
z.hv = function() {
  I.call(this);
};
z.iv = function() {
  I.call(this);
};
z.jv = function() {
  I.call(this);
};
z.kv = function() {
  I.call(this);
};
z.lv = function() {
  I.call(this);
};
z.mv = function() {
  I.call(this);
};
var nv = function() {
  I.call(this);
};
z.ov = function() {
  I.call(this);
};
z.pv = function() {
  I.call(this);
};
z.qv = function() {
  I.call(this);
};
z.rv = function() {
  I.call(this);
};
z.sv = function() {
  I.call(this);
};
var tv = function() {
  I.call(this);
};
var uv = function() {
  I.call(this);
};
z.vv = function() {
  I.call(this);
};
z.wv = function() {
  I.call(this);
};
var xv = function() {
  I.call(this);
};
var yv = function() {
  I.call(this);
};
z.zv = function() {
  I.call(this);
};
z.Av = function() {
  I.call(this);
};
z.Bv = function() {
  I.call(this);
};
var Cv = function() {
  I.call(this);
};
var Dv = function() {
  I.call(this);
};
var Ev = function() {
  I.call(this);
};
var Fv = function() {
  I.call(this);
};
var Gv = function() {
  I.call(this);
};
z.Hv = function() {
  I.call(this);
};
z.Iv = function() {
  I.call(this);
};
var Jv = function() {
  I.call(this);
};
var Kv = function() {
  I.call(this);
};
z.Lv = function() {
  I.call(this);
};
var Mv = function() {
  I.call(this);
};
var Nv = function() {
  I.call(this);
};
var Ov = function() {
  I.call(this);
};
var Pv = function() {
  I.call(this);
};
z.Qv = function() {
  I.call(this);
};
var Rv = function() {
  I.call(this);
};
var Sv = function() {
  z.y.call(this);
};
var Tv = function(a, b) {
  H(a, b);
  b.path = b.path;
  a.qE = b;
};
var Uv = function() {
  z.y.call(this);
};
var Vv = function() {
  z.y.call(this);
};
var Wv = function() {
  z.y.call(this);
};
var Xv = function() {
  z.y.call(this);
};
var Yv = function() {
  z.y.call(this);
};
var Zv = function() {
  z.y.call(this);
};
var $v = function() {
  z.y.call(this);
};
var aw = function() {
  z.y.call(this);
};
var bw = function() {
  z.y.call(this);
};
var cw = function() {
  z.y.call(this);
};
var dw = function() {
  this.cE = {};
};
var Ns = function(a, b) {
  return ew(a, b.replace(/(^\/|\/$)/g, "").split("/"), 0, a.cE, [], null);
};
var ew = function(a, b, c, d, e, f) {
  if (c >= b.length) {
    if (d && d.object) {
      a = {};
      f && (a["*"] = f);
      for (b = 0;b < d.matches.length;b++) {
        a[d.matches[b]] = e[b];
      }
      return{object:d.object, matches:a};
    }
    return null;
  }
  f = b[c];
  var h = null;
  if (d[f] && (h = ew(a, b, c + 1, d[f], e, null))) {
    return h;
  }
  for (var k in d["@"]) {
    if ("parent" != k) {
      var h = d["@"][k], l = {};
      h.Pu in l || (l[h.Pu] = h.IM.test(f));
      if (l[h.Pu]) {
        e.push(f);
        if (h = ew(a, b, c + 1, h, e, null)) {
          return h;
        }
        e.pop();
      }
    }
  }
  if (d[":"]) {
    e.push(f);
    if (h = ew(a, b, c + 1, d[":"], e, null)) {
      return h;
    }
    e.pop();
  }
  return d["*"] ? ew(a, b, b.length, d["*"], e, b.slice(c)) : null;
};
var fw = function() {
  this.eH = {};
  this.HJ = {};
  this.Cu = new dw;
};
var Z = function(a) {
  this.path = a;
  this.nM = null;
  this.R = gw(this);
  this.screen = null;
  this.LM = [];
};
var gw = function(a) {
  for (var b = a.path.replace(/(^\/|\/$)/g, "").split("/"), c = [], d = 0;d < b.length;d++) {
    c.push(hw(a, b[d], d == b.length - 1));
  }
  return function(a, d) {
    for (var h = a || {}, k = [], l, m = 0;m < c.length;m++) {
      l = c[m], "function" === typeof l && (l = l(h)), "@" == b[m][0] && (l = "@" + l), k.push(l);
    }
    h = "/" + k.join("/");
    d && (k = Object.keys(d).map(function(a) {
      return a + "\x3d" + (0,window.encodeURIComponent)(d[a]);
    }).join("\x26"), h = h + "?" + k);
    return h;
  };
};
var hw = function(a, b, c) {
  var d;
  if ("*" == b) {
    if (c) {
      return function(a) {
        return(a["*"] || []).join("/");
      };
    }
    throw Error("Invalid path [" + a.path + "], * must only be at the end.");
  }
  return ":" == b[0] ? (d = b.substr(1, b.length - 1), function(a) {
    return a[d];
  }) : "@" == b[0] ? (a = b.indexOf(":"), d = b.substr(1, a - 1), function(a) {
    return a[d];
  }) : b;
};
var iw = function(a, b) {
  a.screen = b;
  return a;
};
var jw = function(a, b, c) {
  z.Kj.call(this);
  this.ca = a;
  this.Kc = a.get("screen");
  this.ea = a.get("request");
  this.W = a.get("dialog");
  this.up = c;
  this.xa = b;
  this.im = this.Fg = null;
  this.Tt = !1;
  this.ku = null;
  this.Ua = new z.Pr;
};
z.kw = function(a) {
  return a.im ? a.im.zb() : (0,z.Lc)("No activate in progress");
};
var qb = function(a) {
  return a.userId;
};
var lw = function(a) {
  var b = a.Fg.get("notesBySocialRecommends") || [];
  a.ku && (0,z.gb)(b, a.ku.iC().cb());
  var c = {};
  b.forEach(function(a) {
    var b = (0,z.ra)(a.author) ? a.author.userId : a.author;
    (0,z.oa)(b) && (c[b] = a);
  });
  return c;
};
var mw = function(a, b) {
  function c(a) {
    a = a.userId;
    return 4 * (a == f.userId) + 2 * !!h[a] + 1 * !!b[a];
  }
  var d = a.Fg.get("users"), e = a.Fg.get("usersBySocialRecommends") || [], f = (0,z.J)("currentUser"), d = e.concat(d);
  a.xa.get("vote") && d.push(f);
  var d = wb(pb(d)), h = pb(e);
  d.sort(function(a, b) {
    var d = c(a), e = c(b);
    return d != e ? e - d : (0,z.mb)(a.userId, b.userId);
  });
  return d;
};
z.nw = function(a) {
  return!!ow[a.tagName] && !(0,z.pw)(a) && !(0,z.qw)(a) && !(0,z.rw)(a) && !(0,z.Qc)(a, "iframe-container") && !(0,z.gi)(a) && !(0,z.fi)(a);
};
z.sw = function(a) {
  return "LI" == a.tagName ? !0 : (0,z.si)(a) ? !1 : (0,z.nw)(a);
};
z.pw = function(a) {
  return "DIV" === a.tagName && (0,z.Qc)(a, "section-inner");
};
z.qw = function(a) {
  return "DIV" === a.tagName && (0,z.Qc)(a, "section-background");
};
z.rw = function(a) {
  return!!a.parentNode && (0,z.qw)(a.parentNode);
};
var tw = function(a) {
  return "SECTION" === a.tagName;
};
z.uw = function(a, b) {
  return(0,z.hi)(a, z.sw, b);
};
z.vw = function(a, b) {
  return(0,z.hi)(a, tw, b);
};
z.ww = function(a, b, c) {
  (0,z.xw)(a, z.sw, (0,z.Ub)(b, (0,z.Tb)(!0)), c);
};
z.yw = function(a) {
  var b = [];
  (0,z.ww)(a, b.push, b);
  return b;
};
z.zw = function(a) {
  var b = [];
  a = (0,z.fb)(a.childNodes);
  for (var c = 0;c < a.length;c++) {
    var d = a[c];
    "SECTION" === d.tagName && b.push(d);
  }
  return b;
};
z.Aw = function(a) {
  return(0,z.fb)(a.getElementsByClassName("section-inner"));
};
z.xw = function(a, b, c, d) {
  var e, f;
  if ("SECTION" === a.tagName && (f = (0,z.Aw)(a), f.length)) {
    for (e = 0;e < f.length;e++) {
      if (!(0,z.xw)(f[e], b, c, d)) {
        return!1;
      }
    }
    return!0;
  }
  e = 0;
  for (f = a.children.length;e < f;e++) {
    var h = a.children[e], k = h.tagName, l = "SECTION" == k;
    if ("OL" == k || "UL" == k || l) {
      if ((0,z.xw)(h, b, c, d)) {
        continue;
      } else {
        return!1;
      }
    }
    if (b(h) && !c.call(d, h)) {
      return!1;
    }
  }
  return!0;
};
z.Bw = function(a) {
  var b = a.tagName;
  if ("BLOCKQUOTE" == b) {
    return(0,z.Qc)(a, "pullquote") ? 7 : 6;
  }
  if ("LI" == b) {
    var c = a.parentNode && a.parentNode.tagName;
    if ("UL" == c) {
      return 9;
    }
    if ("OL" == c) {
      return 10;
    }
  }
  if ("H1" == b) {
    return 12;
  }
  if ("H2" == b) {
    return 2;
  }
  if ("H3" == b) {
    return 3;
  }
  if ("PRE" == b) {
    return 8;
  }
  if ("HR" == b) {
    return 5;
  }
  if ("P" == b || "DIV" == b || "FIGURE" == b) {
    return 0 !== a.getElementsByTagName("IMG").length ? 4 : 0 !== a.getElementsByTagName("iframe").length ? 11 : 1;
  }
  throw Error("invalid node " + b);
};
var Cw = function(a) {
  var b = a.tagName;
  if ("STRONG" == b || "B" == b) {
    return 1;
  }
  if ("EM" == b || "I" == b) {
    return 2;
  }
  if ("A" == b) {
    return 3;
  }
  if ("SPAN" == b) {
    if (a.getAttribute("name") && (0,z.Qc)(a, "notes-highlight")) {
      return 4;
    }
    if ((0,z.Qc)(a, "warning")) {
      return 5;
    }
  }
  return null;
};
z.Dw = function(a) {
  return a.hasAttribute("data-has-drop-cap");
};
z.Ew = function(a) {
  for (var b = [], c = 0, d = 0;d < a.length;d++) {
    var e = a[d];
    b.push((0,z.Fw)(e, c));
    c += (0,z.yw)(e).length;
  }
  return b;
};
z.Fw = function(a, b) {
  for (var c = (new z.Ng).Xa(a.getAttribute("name") || "").Sd(b), d = (0,z.Pc)(a), e = 0;e < d.length;e++) {
    var f = Gw[d[e]];
    f && (0,z.Qg)(c, Number(f));
    (f = Hw[d[e]]) && (0,z.Sg)(c, Number(f));
  }
  (d = (d = a.getAttribute("data-background-color")) && z.Iw[d]) && (0,z.F)(c, "backgroundColor", Number(d));
  if (d = (0,z.Za)(a.childNodes, z.qw)) {
    d = (0,z.Jw)(d), d.$a() && (0,z.Pg)(c, d);
  }
  return c;
};
z.Kw = function(a, b) {
  var c = (0,z.Bw)(a), d = a.getAttribute("name");
  if (4 == c) {
    var e = a.getElementsByTagName("IMG")[0], f = (0,z.xn)(a.className), c = a.querySelector("figcaption"), e = (0,z.Jw)(e), d = new z.qm(d, "", f, e);
    return c ? Lw(d, c) : d;
  }
  if (11 == c) {
    return e = a.getElementsByTagName("iframe")[0], f = (0,z.xn)(a.className), c = a.querySelector("figcaption"), e = (new z.Ig).Rj(e.getAttribute("data-media-id") || "").ps(Number(e.getAttribute("data-width") || e.width) || 0).ns(Number(e.getAttribute("data-height") || e.height) || 0), d = new rm(d, "", e, f), c ? Lw(d, c) : d;
  }
  d = new z.lm(d, c, "");
  return 5 == c ? d : Lw(d, a, b);
};
z.Jw = function(a) {
  var b = new z.Hg, c = Mw(a);
  c && b.lc(c);
  (c = Number(a.getAttribute("data-width"))) && b.$l(c);
  (c = Number(a.getAttribute("data-height"))) && b.Zl(c);
  (c = a.getAttribute("data-image-style")) && b.oi(c);
  (a = a.getAttribute("data-filter")) && b.Cf(a);
  return b;
};
var Mw = function(a) {
  var b = String((0,z.J)("miroUrl")), c = a.getAttribute("data-image-id");
  return c ? c : a.src && (c = Yh(b, a.src)) || a.style.backgroundImage && (c = /^url\((.*)\)$/.exec(a.style.backgroundImage)) && (c = Yh(b, c[1])) ? c : a.getAttribute("data-delayed-src") && (c = Yh(b, a.getAttribute("data-delayed-src"))) ? c : "";
};
var Nw = function(a, b) {
  this.Ad = a;
  this.gB = b;
  this.XA = [];
  this.Tp = [];
  this.re = 0;
};
var Ow = function(a, b, c) {
  a.XA.push(b);
  b = b.length;
  if (a.gB) {
    c = (0,z.Qd)(c) ? c : c.parentNode;
    var d = (0,z.yf)(c, "fontWeight");
    (-1 != d.indexOf("bold") || Number(d) && 600 < Number(d)) && (0,z.sm)(a.Ad, (0,z.ym)(1, a.re, a.re + b));
    "italic" === (0,z.yf)(c, "fontStyle") && (0,z.sm)(a.Ad, (0,z.ym)(2, a.re, a.re + b));
  }
  a.re += b;
};
var Lw = function(a, b, c) {
  var d = new z.he(b), e = null;
  c = new Nw(a, !!c);
  for (var f = !1;e = (0,z.ge)(d);) {
    if (e != b) {
      if (3 == e.nodeType) {
        if (!f) {
          var h = e.nodeValue, h = 8 == a.type ? h.replace(/\xA0/g, " ") : h.replace(/[\s\xA0]/g, " ");
          Ow(c, h, e);
        }
      } else {
        if (1 == e.nodeType) {
          if ((0,z.Qc)(e, "drop-cap-editable") || (0,z.Qc)(e, "default-value")) {
            f = !f;
          } else {
            if (!f) {
              var k;
              if (-1 == d.Sc) {
                k = Cw(e);
                if (null != k) {
                  var h = c, l = h.Tp.pop();
                  l.end = h.re;
                  (!h.gB || 1 !== k && 2 !== k) && (0,z.sm)(h.Ad, l);
                }
                "BR" == e.tagName && Ow(c, "\n", e);
              } else {
                1 == d.Sc && (k = Cw(e), 3 == k ? (h = (0,z.Wh)(e.href, !1), e = (0,z.wm)(c.re, c.re, h, e.title, e.rel), c.Tp.push(e)) : 4 == k ? (e = (0,z.xm)(c.re, c.re, e.getAttribute("name")), c.Tp.push(e)) : k && (e = (0,z.ym)(k, c.re, c.re), c.Tp.push(e)));
              }
            }
          }
        }
      }
    }
  }
  a.hasDropCap = (0,z.Dw)(b);
  return c.R(b.getAttribute("data-default-value"));
};
z.Pw = function(a) {
  var b = a.querySelectorAll("iframe");
  (0,z.rb)(b, function(b) {
    var d = (0,z.uw)(b, a);
    if (d = (0,z.Kw)(d)) {
      d = on(d, z.vg), d = (0,z.Id)(d).querySelector("iframe"), d.getAttribute("src") != b.getAttribute("src") && (b.setAttribute("width", d.getAttribute("width")), b.setAttribute("height", d.getAttribute("height")), b.setAttribute("src", d.getAttribute("src")));
    }
  });
};
z.Qw = function(a) {
  a = (0,z.zw)(a);
  for (var b = (0,z.Ew)(a), c = 0;c < a.length;c++) {
    var d = a[c];
    2 == (0,z.Rg)(b[c]) && (0,z.ri)(d);
  }
};
var Rw = function(a, b, c) {
  z.Kj.call(this);
  this.ea = a.get("request");
  this.Ca = a.get("dom-monitor");
  this.Gf = b;
  this.zu = (0,z.yw)(b.querySelector(".body"));
  this.xa = c;
  this.Op = this.sz = 0;
  this.nq = null;
  this.Dy = (0,z.Dn)(Sw, this.zA, this);
};
var Tw = function(a) {
  return "\x3cdiv class\x3d'highlight-menu-inner'\x3e\x3cul class\x3d\"highlight-menu-buttons\"\x3e" + (a.zx ? '\x3cli class\x3d"highlight-menu-button highlight-menu-notes"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"highlight"\x3e\x3cspan class\x3d"icons icons-notes"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : "") + (a.$M ? '\x3cli class\x3d"highlight-menu-button highlight-menu-twitter"\x3e\x3cbutton class\x3d"btn-highlight-menu" data-action\x3d"twitter"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3e\x3c/button\x3e\x3c/li\x3e' : 
  "") + "\x3c/ul\x3e\x3c/div\x3e\x3cdiv class\x3d'highlight-menu-arrow-clip'\x3e\x3cspan class\x3d'highlight-menu-arrow'\x3e\x3c/span\x3e\x3c/div\x3e";
};
z.Uw = function() {
  z.Kj.call(this);
  this.cF = !!(0,z.J)("variants.can_see_drop_caps");
  this.xs = (0,z.Dn)(Vw, this.yK, this);
};
var Ww = function(a, b, c) {
  a.Yo = b;
  a.QA = c;
  a.U = window.document.createElement("div");
  a.U.className = "highlight-menu";
  a.U.innerHTML = (0,z.K)(Tw, {$M:a.QA, zx:a.Yo});
  (0,z.Xw)(a);
};
z.Xw = function(a) {
  (0,z.Di)(a.U).D("*", function(a) {
    this.X(a.he, a);
  }, a);
  (0,z.R)(a.U, "mousedown", a.mI, a);
};
z.Yw = function(a, b) {
  for (var c = (a.label ? '\x3ch3 class\x3d"m-bucket-label"\x3e' + (0,z.O)(a.label) + "\x3c/h3\x3e" : "") + '\x3cul class\x3d"m-bucket-list' + (a.ab ? " m-bucket-list-light" : "") + (a.$n ? " m-hide" : "") + '"\x3e', d = a.posts, e = d.length, f = 0;f < e;f++) {
    var h = (0,z.M)(a, {post:d[f]}), k = b, l = "", m = h.post.creator ? h.post.creator.name : "Deleted User", s = dk(h), l = l + ('\x3ca href\x3d"' + (0,z.P)((0,z.Q)(k.baseUrl)) + (0,z.P)(s) + '" title\x3d"' + (0,z.P)(h.post.title) + " by " + (0,z.P)(m) + '" target\x3d"_blank"\x3e\x3ch3 class\x3d"m-bucket-list-item-post-title"\x3e' + (h.post.title ? (0,z.O)(h.post.title) : "Untitled") + '\x3c/h3\x3e\x3cp class\x3d"m-bucket-list-item-post-snippet"\x3e' + (0,z.O)(h.post.virtuals.draftSnippet ? h.post.virtuals.draftSnippet : 
    h.post.virtuals.snippet) + "\x3c/p\x3e\x3c/a\x3e"), c = c + ("\x3cli class\x3d'm-bucket-list-item m-bucket-list-item-post'\x3e" + l + "\x3c/li\x3e")
  }
  return c + "\x3c/ul\x3e";
};
z.Zw = function(a) {
  return'\x3ca class\x3d"m-logo" href\x3d"' + (0,z.P)((0,z.Q)(a.baseUrl)) + '" target\x3d"_blank"\x3e\x3cspan class\x3d"icons icons-logo-m"\x3e\x3cspan class\x3d"m-screen-reader-text"\x3eMedium site navigation\x3c/span\x3e\x3c/span\x3e\x3c/a\x3e';
};
var $w = function(a, b, c) {
  b = "";
  var d = dk(a), d = '\x3ca class\x3d"m-story" data-collapsed\x3d"true" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + (0,z.P)(d) + '"\x3e' + (0,z.O)(a.post.title) + "\x3c/a\x3e", e = "", f = a.post.image ? (0,z.Qj)((0,z.M)(a.post.image, {cropType:"t", verticalGradient:"29/81/55"}), 0, c) : "", h = a.collection || a.post.collection, e = e + ('\x3cdiv class\x3d"m-hero m-hero-story' + (f ? " m-image-cover m-hero-light" : "") + '" ' + (f ? 'style\x3d"background-image: url(' + (0,z.P)((0,z.Q)(f)) + ')"' : 
  "") + "\x3e" + (0,z.Zw)(c) + '\x3ch1 class\x3d"m-hero-title m-hero-title-large"\x3e'), f = dk({post:a.post, collection:h}), e = e + ('\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + (0,z.P)(f) + '" target\x3d"_blank"\x3e' + (0,z.O)(a.post.title) + "\x3c/a\x3e\x3c/h1\x3e" + (a.post.subtitle ? '\x3cp class\x3d"m-hero-subtitle"\x3e' + (0,z.O)(a.post.subtitle) + "\x3c/p\x3e" : "") + '\x3cdiv class\x3d"m-hero-meta-info"\x3e\x3ca class\x3d"m-avatar m-avatar-micro m-avatar-borderless" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + 
  "/@" + (0,z.P)(a.post.creator.username) + '" target\x3d"_blank"\x3e'), f = (0,z.Qj)({imageId:a.post.creator.imageId || a.post.creator.image.imageId, width:"64", height:"64", strategy:"crop-fixed"}, 0, c), e = e + ('\x3cimg src\x3d"' + (0,z.P)((0,z.Q)(f)) + '" alt\x3d"@' + (0,z.P)(a.post.creator.username) + '\'s avatar"\x3e\x3c/a\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/@" + (0,z.P)(a.post.creator.username) + '" target\x3d"_blank"\x3e' + (0,z.O)(a.post.creator.name) + "\x3c/a\x3e" + 
  (h ? " in " + Qo({collection:h, $L:!0, baseUrl:c.baseUrl}) : "") + "\x3c/div\x3e\x3c/div\x3e");
  return b += (0,z.ax)({code:d, ix:e}, c);
};
var bx = function(a, b, c) {
  b = '\x3ca class\x3d"m-collection" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/" + (0,z.P)(a.collection.slug) + '"\x3e' + (0,z.O)(a.collection.name) + "\x3c/a\x3e";
  var d = "", e = (0,z.Qj)((0,z.M)(a.collection.image, {strategy:"resample", verticalGradient:"29/81/60", darken:"25"}), 0, c), e = '\x3cdiv class\x3d"m-image-cover" style\x3d"background-image:url(' + (0,z.P)((0,z.Q)(e)) + ')"\x3e', f = '\x3cdiv class\x3d"m-hero m-hero-light m-hero-collection"\x3e' + (0,z.Zw)(c) + '\x3ch1 class\x3d"m-hero-title m-hero-title-large"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/" + (0,z.P)(a.collection.slug) + '" target\x3d"_blank"\x3e' + (0,z.O)(a.collection.name) + 
  '\x3c/a\x3e\x3c/h1\x3e\x3cp class\x3d"m-hero-description"\x3e' + (0,z.O)(a.collection.shortDescription) + "\x3c/p\x3e", h;
  h = '\x3ca class\x3d"m-btn m-btn-rounded m-btn-light" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/" + (0,z.P)(a.collection.slug) + '" target\x3d"_blank"\x3eFollow' + (a.collection.metadata.followerCount ? '\x3cspan class\x3d"m-btn-count"\x3e' + Io({de:a.collection.metadata.followerCount}) + "\x3c/span\x3e" : "") + "\x3c/a\x3e";
  e += f + h + "\x3c/div\x3e";
  if (a.recommendedPosts && a.recommendedPosts.length && a.latestPosts && a.latestPosts.length) {
    f = '\x3cul class\x3d"m-bucket-nav"\x3e';
    h = ["Latest", "Trending"];
    for (var k = h.length, l = 0;l < k;l++) {
      var m = h[l], f = f + ('\x3cli class\x3d\'m-bucket-nav-item\'\x3e\x3cbutton data-action\x3d"toggle-bucket" data-action-value\x3d"' + (0,z.P)(l) + '" class\x3d"m-btn m-btn-chromeless' + (0 == l ? " m-btn-active" : "") + '"\x3e' + (0,z.O)(m) + "\x3c/button\x3e\x3c/li\x3e")
    }
    a = '\x3cdiv class\x3d"m-bucket"\x3e' + (f + "\x3c/ul\x3e") + '\x3cdiv class\x3d"m-bucket-group"\x3e' + (0,z.Yw)((0,z.M)(a, {label:!1, posts:a.latestPosts, ab:!0}), c) + (0,z.Yw)((0,z.M)(a, {label:!1, $n:!0, ab:!0, posts:a.recommendedPosts}), c) + "\x3c/div\x3e\x3c/div\x3e";
  } else {
    a = "";
  }
  return(0,z.ax)({code:b, ix:d + (e + a + "\x3c/div\x3e")}, c);
};
z.ax = function(a, b) {
  return'\x3cp\x3eYou can add this embed to your website by copying and pasting the HTML code below. \x3ca class\x3d"link link-underline" href\x3d"' + (0,z.P)((0,z.Q)(b.embedSupportUrl)) + '"\x3eLearn more\x3c/a\x3e.\x3c/p\x3e\x3ctextarea class\x3d"input-text input-textarea" wrap\x3d"off" data-action\x3d"select-target"\x3e\x3cscript async src\x3d"https://static.medium.com/embed.js"\x3e\x3c/script\x3e' + (0,z.vh)(a.code) + '\x3c/textarea\x3e\x3ch3 class\x3d"bucket-label"\x3ePreview\x3c/h3\x3e\x3cdiv class\x3d"embed"\x3e' + 
  (0,z.Jh)(a.ix) + "\x3c/div\x3e";
};
var cx = function(a, b) {
  a = a || {};
  return'\x3cfooter class\x3d"footer ' + (a.hR ? "footer-fixed" : "") + ' footer-promotional btn-set layout-single-column"\x3e\x3ca class\x3d"btn btn-link" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/" title\x3d"Sign in to ' + (0,z.P)(b.productName) + '"\x3eSign in\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"Learn about writing on ' + (0,z.P)(b.productName) + '" href\x3d"' + (0,z.P)((0,z.Q)(b.howToPostUrl)) + '"\x3eHow do I write?\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"About ' + 
  (0,z.P)(b.productName) + '" href\x3d"' + (0,z.P)((0,z.Q)(b.welcomeUrl)) + '"\x3eAbout ' + (0,z.O)(b.productName) + '\x3c/a\x3e\x3ca class\x3d"btn btn-link" title\x3d"Visit the top stories on ' + (0,z.P)(b.productName) + '" href\x3d"/top-100/' + (0,z.P)(b.bestOfLatestSlug) + '"\x3eFind something to read\x3c/a\x3e' + (a.ML ? '\x3ca class\x3d"btn btn-small btn-primary btn-light no-user-select" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/"\x3eJoin ' + (0,z.O)(b.productName) + "\x3c/a\x3e" : 
  "") + "\x3c/footer\x3e";
};
var dx = function(a, b, c) {
  return qh("j", a.pL)(null, null, c);
};
var ex = function(a, b, c) {
  z.yo.call(this, a);
  this.Z = b.postId;
  this.Ha = b.collectionSlug;
  this.ha = a.get("app");
  this.aa = a.get("datastore");
  this.ea = a.get("request");
  this.W = a.get("dialog");
  this.Ca = a.get("dom-monitor");
  this.Ud = a.get("element-tracker");
  this.Yq = a.get("twitter");
  this.SF = a.get("facebook");
  this.Sa = a.get("popover");
  this.NJ = a.get("scroll-tracker");
  this.Ua = this.cr = null;
  this.Ra = (0,z.Ao)(this, "butter-bar");
  this.eJ = c;
  this.la = this.zy(c.hd);
  this.Iz = new Or(c.lo || this.Ha || "", this.la ? String(this.la.Rn("id")) : "");
  this.Mp = !!c.eM;
  this.Gi = c.intendedCollection;
  this.kd = this.fp = null;
  fx++;
};
var gx = function(a) {
  return a.xa.get("creator.userId") == (0,z.J)("currentUser.userId");
};
var hx = function(a) {
  (0,z.t)(a.Gf, "grid-breaking");
  var b = a.N.getElementsByClassName("post-author-side")[0] && a.N.getElementsByClassName("post-author-card")[0];
  if (b) {
    var c = (0,z.li)(b) + b.offsetHeight;
    (0,z.ww)(a.lm, function(a) {
      var b = (0,z.li)(a) < c;
      (0,z.Uc)(a, "grid-breaking-override", b);
    }, a);
  }
};
var ix = function(a) {
  return!0 === (0,z.J)("variants.enable_notes") && "false" != a.Gf.getAttribute("data-allow-notes");
};
var jx = function(a) {
  var b = 500 >= window.innerWidth ? "notes-mobile" : "notes";
  ix(a) ? (0,z.r)((0,z.q)((0,z.q)(a.Ua.Aa(Gn(250)), function() {
    return this.ca.load(b);
  }, a), function(a) {
    this.Vd = a.Zk(this, this.xa, this.Gf, gx(this), this.eb, !1);
  }, a), z.Cj) : (0,z.Jc)(!0);
};
var kx = function(a) {
  if (!a.ph() || a.L(".post-footer").firstChild) {
    return(0,z.Jc)(!0);
  }
  var b = String((0,z.J)("variants.logged_out_footer"));
  if ("landscape" == b || "covers" == b) {
    return a.yA(b);
  }
  var c;
  a.hu = new os(a.Oa(), a.L(".post-footer"), a.Z, a.Iz, a.Ud);
  a.hu.cd();
  c = (0,z.Jc)(!0);
  "toolbar" == b && (0,z.q)(c, a.yA.bind(a, b));
  return c;
};
var lx = function(a, b) {
  (0,z.Cj)(b);
  a.W.error(b);
};
var mx = function(a) {
  return a.Ha ? z.Dq.R({postId:a.Z, collectionSlug:a.Ha}) : z.nx.R({postId:a.Z});
};
var ox = function(a) {
  this.du = a;
  this.ec = {};
};
var px = function(a, b, c, d, e, f) {
  z.Kj.call(this);
  this.ca = a;
  this.pa = b;
  this.aa = a.get("datastore");
  this.kd = new kq(a);
  this.ih = c;
  this.cc = d;
  this.um = (0,z.lk)(d, "id");
  this.la = e;
  this.SJ = f;
};
var qx = function(a, b) {
  return b.filter(function(a) {
    a = a.get("virtuals").postedIn;
    for (var b = 0;b < a.length;b++) {
      if (a[b].collectionId == this.um && "APPROVED" == a[b].status) {
        return!0;
      }
    }
    return!1;
  }, a);
};
var rx = function(a, b) {
  for (var c in a.get("virtuals.postedIn")) {
    var d = a.get("virtuals.postedIn")[c];
    if (d.collectionId == b) {
      return d.status || "NOT_FOUND";
    }
  }
  return "NOT_FOUND";
};
var sx = function(a, b, c) {
  var d = (0,z.Rj)({size:"full", Pw:!0, image:a.collection.image}, c);
  b = [{name:"Latest", href:"/" + a.collection.slug, Vb:"latest" == a.filterBy}, {name:"Trending", href:"/" + a.collection.slug + "/trending", Vb:"recommended" == a.filterBy}];
  var e = [{name:"Latest", href:"/" + a.collection.slug, Vb:"latest" == a.filterBy}, {name:"Trending", href:"/" + a.collection.slug + "/trending", Vb:"recommended" == a.filterBy}, {name:"Submissions", href:"/" + a.collection.slug + "/submissions", Vb:"submissions" == a.filterBy}], f = '\x3cdiv class\x3d"layout-fill-height"\x3e' + (0,z.Qp)((0,z.M)(a, {ab:!0, Ar:'\x3cdiv class\x3d"metabar-text collection-editor" data-shorthand\x3d"Edited"\x3e' + (a.collection.user ? '\x3cspan class\x3d"collection-editor-label"\x3eCollection edited\x3c/span\x3e by ' + 
  Oo({user:a.collection.user}) : "") + "\x3c/div\x3e", Lh:'\x3cdiv class\x3d"btn-set"\x3e' + (c.isAuthenticated && c.useragent.supportsDesktopEdit ? '\x3cbutton data-action\x3d"show-cross-poster" class\x3d"btn btn-light hide-on-mobile hide show-cross-poster"\x3e' + (c.isAuthenticated && a.collection.user && a.collection.virtuals.canAdminister ? "Add/Remove your story" : "Submit/Remove your story") + "\x3c/button\x3e" : "") + (c.isAuthenticated && a.collection.user && c.currentUser.userId == a.collection.user.userId ? 
  '\x3ca href\x3d"/' + (0,z.P)(a.collection.slug) + '/settings" title\x3d"Edit collection" class\x3d"btn btn-light hide-on-mobile"\x3eEdit\x3c/a\x3e' : "") + (c.variants.enable_embed_ui ? '\x3cbutton class\x3d"btn btn-circle btn-embed" title\x3d"Embed this collection" data-action\x3d"embed-collection"\x3e\x3cspan class\x3d"icons icons-embed"\x3e\x3c/span\x3e\x3c/button\x3e' : "") + "\x3c/div\x3e"})), h = '\x3cheader class\x3d"hero hero-collection"\x3e\x3cdiv class\x3d"align-middle layout-single-column layout-foreground layout-fill-height"\x3e\x3cdiv class\x3d"align-block"\x3e\x3ch1 class\x3d"hero-title"\x3e' + 
  (0,z.O)(a.collection.name) + '\x3c/h1\x3e\x3cp class\x3d"hero-description"\x3e' + (0,z.O)(a.collection.description) + '\x3c/p\x3e\x3cdiv class\x3d"hero-actions btn-set"\x3e' + Ko({collection:a.collection, ab:!0}, 0, c) + "\x3c/div\x3e", k;
  if (c.variants.show_collection_tags) {
    k = k = {tags:a.collection.tags, UD:"/search?q\x3d", className:"hero-collection-tags"};
    var l = '\x3cdiv class\x3d"tags' + (k.className ? " " + (0,z.P)(k.className) : "") + '"\x3e';
    if (k.tags) {
      for (var m = k.tags, s = m.length, x = 0;x < s;x++) {
        var L = (k.hN ? k.hN : "") + m[x], l = l + ('\x3ca href\x3d"' + (0,z.P)((0,z.Q)(k.UD ? k.UD + L : "#")) + '" rel\x3d"token" data-action\x3d"focus-token" data-value\x3d"' + (0,z.P)(L) + '"\x3e' + (0,z.O)(L) + "\x3c/a\x3e")
      }
    }
    k = l += (k.cR ? '\x3cdiv class\x3d"tags-input"\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e";
  } else {
    k = "";
  }
  return d += f + (h + k + "\x3c/div\x3e\x3c/div\x3e\x3c/header\x3e") + '\x3cdiv class\x3d"layout-foreground ' + (c.useragent.isMobile || c.useragent.isTablet ? "background-gradient" : "") + '"\x3e' + (0,z.Op)((0,z.M)(a, {ab:!0, Ko:a.collection.virtuals.canAdminister ? e : b, $n:!(a.posts.length || a.collection.metadata.postCount && "recommended" == a.filterBy || a.collection.virtuals.canAdminister)}), c) + (a.posts.length ? (0,z.kp)((0,z.M)(a, {Ew:!0, ab:!0, rB:!0, fi:(0,z.O)(a.collection.name) + 
  " has no stories yet", $n:!0, ID:a.collection.virtuals.canAdminister && "submissions" == a.filterBy}), c) : a.collection.metadata.postCount && "recommended" == a.filterBy ? (0,z.mp)({fi:"This collection is new, so there are no trending stories yet.\x3cbr\x3eWidely read and recommended stories will appear here.", ab:!0}) : "submissions" == a.filterBy ? (0,z.mp)({fi:"When a story is submitted to your collection, it will appear here for your review", ab:!0}) : (0,z.kp)((0,z.M)(a, {ab:!0, rB:!0, fi:(0,z.O)(a.collection.name) + 
  " has no stories yet"}), c)) + "\x3c/div\x3e\x3c/div\x3e";
};
var xq = function(a) {
  return'\x3cdiv class\x3d"overlay-form-container story-rejection-form"\x3e\x3cdiv class\x3d"story-rejection-caption"\x3eWe won\'t email ' + (0,z.O)(a.ND) + ' that their story hasn\'t been accepted unless you write an optional note.\x3c/div\x3e\x3ctextarea class\x3d"overlay-form-text-input textarea-seamless text-input-border story-rejection-note" placeholder\x3d"Add an optional note for ' + (0,z.P)(a.ND) + '..."\x3e\x3c/textarea\x3e\x3c/div\x3e';
};
var tx = function(a, b) {
  z.yo.call(this, a);
  this.yc = b.collectionSlug;
  this.path = b.path;
  this.filterBy = this.Bu(b.path);
  this.Wk = a.get("app");
  this.Kn = a.get("datastore");
  this.js = a.get("request");
  this.Ra = (0,z.Ao)(this, "butter-bar");
  this.Hn = this.In = null;
};
var ux = function(a, b, c) {
  (0,z.Di)(a).D("open-post", vx.bind(null, b, String(c.Rn("id"))));
};
var vx = function(a, b, c) {
  if (!c.Wn) {
    var d = c.value;
    0 === c.value.indexOf("/") && (d = d.substr(1));
    b = {hd:b};
    if (c = c.target.getAttribute("data-source")) {
      b.source = c;
    }
    a.navigate(d, b);
  }
  return!1;
};
z.qy = function(a, b, c) {
  z.Kj.call(this);
  this.Ca = a.get("dom-monitor");
  this.fv = !1;
  this.yd = b;
  this.gF = c;
};
var ry = function(a) {
  wk(a.yd) || (0,z.r)((0,z.Cc)(Ak(a.yd, a.gF), function() {
    this.fv && this.Ml();
  }, a), z.Cj);
};
z.sy = function(a) {
  z.Ij.call(this);
  this.ca = a;
  this.ha = a.get("app");
  this.aa = a.get("datastore");
};
z.ty = function(a, b) {
  if (a.kh) {
    throw Error("The container element should not be set twice.");
  }
  a.kh = b;
  return a;
};
z.uy = function(a, b) {
  a.Yu = b;
  return a;
};
var vy = function(a, b, c) {
  tx.call(this, a, b);
  this.hd = c.hd || "";
  this.Ui = a.get("publish-state");
  this.W = a.get("dialog");
};
var wy = function(a, b) {
  ts.call(this, a, "disabled");
  this.W = b.get("dialog");
};
var xy = function(a, b) {
  ts.call(this, a, "dismiss-interstitial");
  this.ha = b.get("app");
  this.ha.F(lq, this.hq, this);
};
var yy = function() {
  (0,z.Nd)(window.document.querySelector(".overlay-interstitial"));
};
var zy = function(a) {
  ts.call(this, a, "select-target");
};
var Ay = function(a, b) {
  ts.call(this, a, "send-verify-email");
  this.ca = b;
};
z.By = function(a, b) {
  var c = b ? {redirect:b} : {}, d = a.get("request"), e = a.get("dialog"), f = a.get("app");
  (0,z.r)((0,z.q)(d.post(Cy.R(), c, {na:!0}), function() {
    e.open({title:"Thanks", bodyHtml:(0,z.Cp)(), type:z.jk});
  }), function(a) {
    (0,z.Cj)(a);
    401 === a.status ? (a = e.error("We were unable to send your verification email because you are no longer signed in."), a.F("close", function() {
      window.location.reload();
    })) : 400 === a.status ? (a = e.open({title:"Thanks, but…", bodyHtml:"It looks like your account is already verified.", type:z.jk}), b && a.F("close", function() {
      f.navigate(b);
    })) : a = e.error(Bp());
  });
};
var Dy = function(a) {
  a = (0,z.oa)(a) ? new Lf(a) : a;
  if (!a.Be || "http" === a.Be || "https" === a.Be) {
    if (!a.dl || Vf((0,z.Ey)(), a)) {
      Fy.location = a.toString();
    }
  }
};
z.Ey = function() {
  return new Lf(Fy.location.href);
};
var Gy = function() {
  var a = Fy.location;
  return a.origin ? new Lf(a.origin) : Wf(a.protocol, a.hostname, a.port);
};
z.Hy = function() {
  var a = Fy.location;
  return Wf(null, null, null, a.pathname, a.search, a.hash);
};
var Iy = function(a, b) {
  ts.call(this, a, ["sign-in-with-twitter", "twitter-auth", "sign-in-prompt"]);
  this.rA = b.get("popup-manager");
  this.ea = b.get("request");
  this.W = b.get("dialog");
  this.Sa = b.get("popover");
};
var Jy = function(a) {
  var b = {location:(0,z.Ey)().toString()};
  a && (b.source = a);
  (0,z.Dk)(Ky, b);
};
var Ly = function(a, b, c) {
  if (b.target.getAttribute("data-requires-token") && !c) {
    My(a, b);
  } else {
    var d = c || b.target.getAttribute("data-redirect");
    (0,z.J)("variants.can_view_unified_authentication_overlay") ? Ny(a, {title:(0,z.K)(op), bodyHtml:(0,z.K)(pp), type:"signin", Mj:d}) : (c && b.target.setAttribute("data-redirect", c), b = b.target, (0,z.Oy)(a.Sa, b, b.getAttribute("data-popover")));
  }
};
var My = function(a, b) {
  var c = b.target;
  c.getAttribute("data-requires-token") ? (0,z.r)((0,z.q)(a.ea.get(Py.R(), {qe:!0, background:!0}), function(a) {
    var e = new Lf(c.getAttribute("data-redirect")) || (0,z.Hy)();
    Qf(e, $f({token:a.value}));
    c.removeAttribute("data-requires-token");
    Ly(this, b, e.toString());
  }, a), function(a) {
    (0,z.Cj)(a);
    c.removeAttribute("data-requires-token");
    Ly(this, b);
  }, a) : Ly(a, b);
};
var Qy = function(a, b) {
  Jy(b.target.getAttribute("data-login-source"));
  var c = Gy();
  Pf(c, Ry.R());
  Qf(c, $f({refresh:1, cg:Sy.R()}));
  Ny(a, {bodyHtml:(0,z.K)(Hp), type:z.jk});
  var d = Ty(a.rA, c, "login", {}, function(a) {
    Ny(this, {bodyHtml:(0,z.K)(Ip), type:z.jk});
    d.close();
    var c = Gy();
    Pf(c, Uy.R());
    if (a.oauth_token && a.oauth_verifier) {
      a = {source:"twitter", oauthRequestToken:a.oauth_token, oauthRequestTokenVerifier:a.oauth_verifier};
      var h = b.target.getAttribute("data-redirect-url");
      (0,z.r)((0,z.q)(this.ea.post(c, a, {na:!0, ce:0}), function() {
        h ? Dy(h) : Fy.location.reload(!0);
      }, this), function(a) {
        401 == a.status ? (a = a.errorInfo, a.source = "twitter", Ny(this, {title:(0,z.K)(qp), bodyHtml:(0,z.K)(Gp, a), Jh:"Create account", GL:!0, type:yq}).F(zq, this.rF.bind(this, h))) : ((0,z.Cj)("requestAuthCredentials errored: " + a.status), this.W.af.update({title:"Something bad happened", bodyHtml:"Sorry, we couldn't finish the sign-in process. Please try again.", type:z.jk}));
      }, this);
    } else {
      a.denied || (0,z.Cj)("SignIn handler received an unexpected response: " + JSON.stringify(a)), this.W.af.close();
    }
  }.bind(a));
};
var Ny = function(a, b) {
  var c = a.W.af;
  return c ? c.update(b) : a.W.open(b, !0);
};
var Vy = function(a, b) {
  ts.call(this, a, "stat-link");
  this.ha = b.get("app");
};
var Wy = function(a, b, c, d) {
  ts.call(this, a, d);
  this.aa = c.get("datastore");
  this.ea = c.get("request");
  this.Qu = {};
  this.Ra = c.get("butter-bar");
  this.WG = b;
};
var Xy = function(a, b, c) {
  (a = a.aa.Bb(b)) && a.set("virtuals.isOnReadingList", c);
  a = window.document.body.querySelectorAll('.btn-bookmark[data-post-id\x3d"' + b + '"]');
  for (var d = (c ? "remove-from" : "add-to") + "-reading-list", e = 0;e < a.length;e++) {
    var f = a[e];
    c ? od(f, "active") : pd(f, "active");
    a[e].setAttribute("data-action", d);
  }
  a = window.document.body.querySelectorAll('.reading-list-status[data-post-id\x3d"' + b + '"]');
  if (a.length) {
    for (d = a[0].getAttribute("data-reading-time"), b = (0,z.K)(Xo, {postId:b, isOnReadingList:c, readingTime:d, dM:!0}), c = 0;c < a.length;c++) {
      a[c] && (a[c].outerHTML = b);
    }
  }
};
var Yy = function(a, b) {
  Wy.call(this, a, !0, b, "add-to-reading-list");
};
var Zy = function(a, b) {
  Wy.call(this, a, !1, b, "remove-from-reading-list");
};
var $y = function(a, b) {
  ts.call(this, a, "update-blacklist");
  this.ea = b.get("request");
  this.Ra = b.get("butter-bar");
};
var az = function(a, b) {
  ts.call(this, a, "toggle-subscribe-collection");
  this.ea = b.get("request");
  this.aa = b.get("datastore");
  this.Ra = b.get("butter-bar");
};
var bz = function(a, b) {
  ts.call(this, a, "toggle-subscribe-user");
  this.ea = b.get("request");
  this.Ra = b.get("butter-bar");
};
var cz = function() {
  (0,z.J)("currentUser") && Fk(["identify", (0,z.J)("currentUser.userId")]);
  var a = (0,z.J)("variants.is_super_user") ? "superuser" : (0,z.J)("variants.can_create_post") ? "creator" : (0,z.J)("isAuthenticated") ? "loggedin" : "anonymous";
  (0,z.Ok)(2, a, 1);
  Fk(["set", {userType:a}]);
  a = {};
  a.NH = !!(0,z.J)("variants.can_use_new_homepage");
  a.WF = !!(0,z.J)("variants.can_see_post_welcome_footer");
  var b = (0,z.J)("variants.logged_out_footer");
  a.O2L = "landscape" == b;
  a.O2C = "covers" == b;
  a.O2T = "toolbar" == b;
  a.O2N = "landscape" != b && "covers" != b && "toolbar" != b;
  a.YPH = !!(0,z.J)("variants.show_promotional_homepage");
  a.NPH = !(0,z.J)("variants.show_promotional_homepage");
  for (var c in a) {
    var b = "testBucket-" + c, d;
    d = a[c];
    d = "string" == typeof d ? d : "number" == typeof d ? String(d) : d ? "true" : "false";
    Fk(["set", Fb(b, d)]);
    Gk(dz, {testName:b, testBucket:d});
  }
};
var ez = function(a) {
  this.ea = a.get("request");
  this.ha = a.get("app");
  this.Vc = fz.R();
  this.Xo = new z.kk({newActivityCount:0});
  this.ha.F(Jn, this.qu, this);
};
var gz = function(a) {
  (0,z.J)("isAuthenticated") && (0,z.q)(a.ea.get(a.Vc, {na:!0, background:!0}), function(a) {
    a.value.hasOwnProperty("newActivityCount") && this.Xo.set("newActivityCount", a.value.newActivityCount);
  }, a);
};
var hz = function(a) {
  this.ha = a.get("app");
  this.Ie = {};
  this.ya = {};
  this.Ni = {};
  this.Yi = {};
  this.ha.F(Jn, this.Oi, this);
};
var iz = function(a, b) {
  a.Ie[b] || (a.Ie[b] = new z.wc, a.Yi[b] = new z.wc, a.Ni[b] = 0, jz(a, b));
};
var kz = function(a, b) {
  b = lz(b);
  if (a.Ye(b)) {
    return(0,z.Jc)(a.Yi[b]);
  }
  iz(a, b);
  return a.Yi[b].zb();
};
var mz = function(a, b) {
  var c = b.map(function(a) {
    return kz(this, a);
  }, a);
  return new z.ko(c, !1, !0);
};
var lz = function(a) {
  return 0 === a.indexOf("//") ? window.location.protocol + a : a;
};
var jz = function(a, b) {
  var c = new window.Image, d = [];
  d.push((0,z.R)(c, "load", a.Zm, a));
  d.push((0,z.R)(c, "abort", a.Le, a));
  d.push((0,z.R)(c, "error", a.Le, a));
  a.ya[b] = d;
  c.src = b;
};
var nz = function(a, b) {
  a.ya[b] && ((0,z.$h)(a.ya[b]), delete a.ya[b]);
};
z.oz = function(a, b, c) {
  z.Vp.call(this, a, b, c);
  this.zp = "_obv.data._list_" + pz++;
  this.Ut = "";
};
var qz = function(a, b, c) {
  var d = window.document.createElement("div");
  d.className = a.Ut;
  d.id = a.zp + (0,z.sa)(b);
  d.innerHTML = (0,z.Jq)(a, b);
  (0,z.Md)(a.N, d, "undefined" != typeof c ? c : a.N.children.length);
  return d;
};
var rz = function(a, b) {
  this.Ra = b;
  this.ha = a.get("app");
  this.Pa = new z.Ij;
  this.F = this.Pa.F.bind(this.Pa);
  (0,z.Di)(b).D("butter-bar-action", this.sJ, this).D("butter-bar-dismiss", this.BF, this).D("butter-bar-reload", this.vJ, this).D("undo", this.RI, this);
};
var sz = function(a, b, c) {
  function d() {
    e.call(this);
    b.apply(c || this);
  }
  function e() {
    this.Pa.Ba("action", d, this);
    this.Pa.Ba("deactivate", e, this);
  }
  a.Pa.F("action", d, a);
  a.Pa.F("deactivate", e, a);
};
var tz = function(a) {
  return'\x3ch4 class\x3d"cards-heading follow-ups-title"\x3eFurther reading\x3c/h4\x3e\x3cdiv class\x3d"follow-ups-list"\x3e\x3c/div\x3e\x3cdiv class\x3d"follow-up-new"\x3e\x3cbutton class\x3d"btn btn-chromeless follow-up-start follow-up-link-prompt"' + (a.QK ? 'data-action\x3d"start-new-follow-up"' : (0,z.Jo)({cg:dk(a) + '#follow-up-editor"', prompt:"Sign in to suggest further reading", Ho:"followUp", xo:!0})) + '\x3e\x3cspan class\x3d"icons icons-add-further-reading"\x3e\x3c/span\x3e\x3cspan class\x3d"follow-ups-prompt"\x3eSuggest a link\x3c/span\x3e\x3cspan class\x3d"follow-ups-empty-prompt"\x3eSuggest a link for further reading\x3c/span\x3e\x3c/button\x3e\x3cdiv class\x3d"follow-up follow-up-new-editor"\x3e\x3c/div\x3e\x3c/div\x3e';
};
var uz = function(a, b, c) {
  return(a.canAdminister ? '\x3cul class\x3d"follow-up-visibility follow-up-visibility-dropdown" data-follow-up-id\x3d"' + (0,z.P)(a.followUp.followUpId) + '"\x3e' + (a.followUp.visibility == a.visibility.Uo ? '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + 
  (0,z.P)(a.visibility.Yx) + '"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e' : '\x3cli class\x3d"follow-up-visibility-item"\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3cspan class\x3d"icons follow-up-visibility-down-icon"\x3e\x3c/span\x3e\x3c/li\x3e\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.P)(a.visibility.Uo) + '"\x3e\x3cspan class\x3d"icons icons-group"\x3e\x3c/span\x3ePublic\x3c/li\x3e') + 
  (a.followUp.creatorId != a.ds ? '\x3cli class\x3d"follow-up-visibility-item" data-action\x3d"set-follow-up-visibility" data-action-value\x3d"' + (0,z.P)(a.visibility.Qx) + '"\x3e\x3cspan class\x3d"icons icons-remove"\x3e\x3c/span\x3eDismiss\x3c/li\x3e' : "") + "\x3c/ul\x3e" : a.followUp.visibility != a.visibility.Uo ? '\x3cul class\x3d"follow-up-visibility" data-follow-up-id\x3d"' + (0,z.P)(a.followUp.followUpId) + '"\x3e\x3cli class\x3d"follow-up-visibility-item" data-tooltip\x3d"This link is only visible to you and the author, unless the author chooses to make it public."\x3e\x3cspan class\x3d"icons icons-invisible"\x3e\x3c/span\x3ePrivate\x3c/li\x3e\x3c/ul\x3e' : 
  "") + (0,z.vz)(a, c);
};
z.vz = function(a, b) {
  return qh("k", a.followUp.mediaResource.mediaResourceType)(a, null, b);
};
z.wz = function(a, b) {
  if (a.length < b) {
    return a;
  }
  var c = a.substr(0, b), d;
  d = /\s/.test(c[c.length - 1]) ? 1 : (d = c.match(/\w+$/)) ? d.pop().length + 1 : 1;
  c = c.substr(0, c.length - d);
  !/[^a-zA-Z0-9]/.test(c[c.length - 1]) || (c = c.substr(0, c.length - 1));
  return c + "…";
};
var xz = function(a, b, c) {
  z.Ij.call(this);
  this.ca = a;
  this.ea = a.get("request");
  this.wk = a.get("media-resource");
  this.Z = b;
  this.Ri = c;
  this.ym = !1;
  this.Uc = new z.ok;
  a = new z.Fq(this.Uc);
  a.Cf(this.XG, this);
  this.UF = a;
  this.Sk = {};
};
var yz = function(a, b) {
  var c = new z.Gt;
  c.bc(b.title);
  c.Bf(b.description);
  c.Rj(b.mediaResourceId);
  var d = z.Hl.$c(c);
  d.creator = (0,z.J)("currentUser");
  d.creatorId = d.creator.userId;
  d.visibility = a.Ri == d.creator.userId ? 2 : 1;
  d.mediaResource = a.wk.Mi[d.mediaResourceId].cb();
  var e = new z.kk(d);
  a.Uc.add(e);
  return(0,z.r)((0,z.q)(a.ea.post(zz.R({postId:a.Z}), c, {na:!0, co:!0}), function(a) {
    Az(this, a.value, a.references, e);
  }, a), z.Cj);
};
var Bz = function(a, b) {
  var c = a.yj(b), d = a.Uc.indexOf(c);
  a.Uc.remove(c);
  return(0,z.r)((0,z.q)(a.ea.Hd(Cz.R({postId:a.Z, followUpId:b})), function() {
    (0,z.nk)(c);
  }), function(a) {
    (0,z.Cj)(a);
    this.Uc.Fh(c, d);
  }, a);
};
var Dz = function(a, b, c) {
  a.Sk[b] && a.Sk[b].cancel();
  var d = a.yj(b), e = d.get("visibility");
  d.set("visibility", c);
  return a.Sk[b] = (0,z.r)((0,z.Cc)(a.ea.put("/p/" + a.Z + "/follow-ups/" + b + "/visibility", {visibility:c}, {na:!0}), function() {
    delete this.Sk[b];
  }, a), function(a) {
    a instanceof z.Nc || ((0,z.Cj)(a), d.set("visibility", e));
  });
};
var Az = function(a, b, c, d) {
  b = (0,z.al)(b, c);
  b.mediaResource ? (c = (0,z.Ez)(a.wk, b.mediaResource), b.mediaResource = c.cb()) : (0,z.Cj)("Missing mediaResource in FU " + b.followUpId + " at id " + b.mediaResourceId);
  (d = d || (0,z.qk)(a.Uc, "followUpId", b.followUpId)) ? d.ni(b) : a.Uc.add(b);
};
var Fz = function(a, b, c) {
  z.v.call(this);
  this.ca = a;
  this.ha = a.get("app");
  this.W = a.get("dialog");
  this.jj = a.get("butter-bar");
  this.xa = b;
  this.Z = (0,z.lk)(b, "id");
  this.Ri = (0,z.lk)(b, "creatorId");
  this.qy = !!(0,z.J)("isAuthenticated");
  this.iF = c;
  this.Fa = this.wm();
  this.ia = new xz(a, this.Z, this.Ri);
  this.Ua = new z.Pr;
  (0,z.Di)(this.Fa).D("start-new-follow-up", this.jA, this).D("delete-follow-up", this.MH, this).D("set-follow-up-visibility", this.EI, this);
  (0,z.R)(this.Fa, "click", this.FH, this);
};
z.Gz = function(a) {
  if (0 !== window.document.location.hash.indexOf("#fr-")) {
    return "";
  }
  var b = window.document.location.hash.substr(4);
  (0,z.Ds)(a.ha, "");
  return b;
};
z.Hz = function(a, b) {
  var c = a.Fa.querySelector('[data-follow-up-id\x3d"' + b + '"]');
  c && c.scrollIntoView(!0);
};
var Iz = function(a, b, c) {
  c = c || {};
  c.postId = a.Z;
  (0,z.Dk)(b, c);
};
var Jz = function(a, b, c) {
  var d = a.ia.yj(b).get("visibility");
  (0,z.r)((0,z.q)(a.Ua.Aa(Dz(a.ia, b, c)), a.YF.bind(a, b, d)), a.ZF, a);
};
var Kz = function(a) {
  z.v.call(this);
  this.ca = a;
};
var Lz = function() {
  z.Ij.call(this);
  window.performance.now();
};
var Mz = function(a, b) {
  this.ca = a;
  this.aG = b;
  this.ea = a.get("request");
  this.Mi = {};
  this.Pm = {};
  this.Xp = {};
};
z.Ez = function(a, b) {
  var c = b.mediaResourceId;
  c in a.Mi ? a.Mi[c].ni(b) : (a.Mi[c] = new z.kk(b), a.Pm[b.href] = c);
  return a.Mi[c];
};
var Nz = function(a) {
  this.Gu = a.get("popup-manager");
};
var Oz = function(a, b, c) {
  c = (b = a.username == (c.currentUser && c.currentUser.username)) ? "I just published " : "by " + (a.twitterScreenName ? "@" + a.twitterScreenName : a.name) + " ";
  var d = "";
  if (b && a.collaborators && a.collaborators.length) {
    for (var d = d + " Thanks to ", e = a.collaborators, f = e.length, h = 0;h < f;h++) {
      d += "@" + e[h].user.username + (h != f - 1 ? " " : "");
    }
  }
  return a = "" + ((b ? c : "") + "“" + a.content + "” " + (b ? "" : c) + a.url + d);
};
var Pz = function(a) {
  this.Gu = a.get("popup-manager");
};
z.Qz = function(a, b) {
  var c = (0,z.K)(a, b), d = c.length - 140;
  b.url && -1 != c.indexOf(b.url) && (d += 25 - b.url.length);
  0 < d && (b.content = (0,z.wz)(b.content, b.content.length - d), c = (0,z.K)(a, b));
  return c;
};
var Rz = function() {
  z.Ij.call(this);
  this.kb = Sz;
  this.fI = (0,z.Dn)(Tz, this.Xz, this);
  this.ya = [];
  this.ya.push((0,z.R)(window.document, "mousedown", this.sh, this), (0,z.R)(window.document, "mouseup", this.sh, this), (0,z.R)(window.document, "mouseover", this.sh, this), (0,z.R)(window.document, "click", this.sh, this), (0,z.R)(window.document, "dblclick", this.sh, this), (0,z.R)(window.document, "keydown", this.sh, this), (0,z.R)(window.document, "keyup", this.sh, this), (0,z.R)(window, "focus", this.sh, this), (0,z.R)(window, "blur", this.Xz, this));
};
var Uz = function(a, b) {
  a.kb != b && (a.kb = b, a.X("statechange", a.kb));
};
var Vz = function(a, b, c) {
  this.iB = b;
  this.Rs = c;
  this.Pa = new z.Ij;
  this.kb = Wz;
  this.oq = [];
  this.F = this.Pa.F.bind(this.Pa);
};
var Xz = function(a) {
  "])}while(1);\x3c/x\x3e" == a.substr(0, 16) && (a = a.substring(16));
  return a;
};
var Yz = function(a) {
  for (var b = Wz, c = 0;c < a.oq.length;c++) {
    b = Math.max(b, a.oq[c].state);
  }
  a.kb != b && (a.kb = b, a.Pa.X("statechange", b));
};
var Zz = function(a) {
  var b = [], c;
  for (c in a) {
    b.push((0,window.encodeURIComponent)(c) + "\x3d" + (0,window.encodeURIComponent)(a[c]));
  }
  return b.join("\x26");
};
var $z = function(a, b, c) {
  return c.isAuthenticated ? "\x3cp\x3eYou are logged out.\x3c/p\x3e" : "\x3cp\x3eYou need to be logged in to continue.\x3c/p\x3e";
};
z.aA = function(a, b) {
  z.v.call(this);
  this.ca = a;
  this.Rs = b;
  a.get("app").F(lq, this.hq, this);
  a.get("app").F(Jn, this.ZH, this);
  a.get("request").F("send", this.DI, this);
  a.get("request").F("httperror", this.ru, this);
  a.get("request").F("successresponse", this.wI, this);
  a.get("dom-monitor").F("webfont-load", this.Az, this);
  this.W = a.get("dialog");
  a.get("fps");
  this.Cy = [];
  bA(this);
  window.OB_loadErrors && (window.OB_loadErrors.forEach(this.Le, this), window.OB_loadErrors.length = 0, window.OB_loadErrors.push = this.Le.bind(this));
};
var bA = function(a) {
  var b = (0,z.aj)();
  window.OB_startTime && window.setTimeout(function() {
    var a = b - window.OB_startTime;
    (0,z.Kk)("pageload");
    (0,z.Lk)("client.loadtime", a);
    3E4 < a && (0,z.Kk)("slowload");
  }.bind(a), 0);
  window.performance && window.performance.timing && window.addEventListener("load", function() {
    window.setTimeout(function() {
      var c = window.performance.timing, d = c.navigationStart;
      (0,z.Lk)("client.perf.dns", c.domainLookupEnd - c.domainLookupStart);
      (0,z.Lk)("client.perf.firstByte", c.responseStart - d);
      (0,z.Lk)("client.perf.lastByte", c.responseEnd - d);
      (0,z.Lk)("client.perf.appstart", b - d);
      (0,z.Lk)("client.perf.domComplete", c.domComplete - d);
      (0,z.Lk)("client.perf.loadEnd", c.loadEventEnd - d);
      a.Az();
    }, 500);
  }, !0);
};
var cA = function(a) {
  this.ca = a;
  this.Uu = dA;
  this.Bh = [];
  this.uz = null;
  a.get("app").F(lq, this.cK, this);
  a.get("app").F(Jn, this.OF, this);
};
var eA = function(a) {
  this.ha = a.get("app");
  this.ea = a.get("request");
  this.Hp = 0;
  this.ha.F(lq, this.pn, this);
  this.ha.F(Jn, this.NF, this);
  this.ea.F("statechange", this.refresh, this);
};
z.fA = function(a, b) {
  z.Kj.call(this);
  this.aF = a;
  this.uF = "mouseover" === a ? "mouseout" : gA;
  this.ma = null;
  this.CA = (0,z.Dn)(hA, this.EJ, this);
  this.IF = b;
};
z.iA = function() {
  this.oj = !1;
  this.ui = this.N = null;
  this.et = "";
  this.Ef = this.st = this.tt = null;
  this.wr = "tooltip";
  this.Uk = "fade";
  this.wB = "tooltip-arrow";
  this.vB = 20;
  this.enable();
};
var jA = function(a, b, c) {
  a = Math.min(Math.abs(c), b - a.vB);
  return 0 < c ? -a : a;
};
var kA = function(a) {
  return "bottom" == a ? "top" : "top" == a ? "bottom" : "left" == a ? "right" : "left";
};
z.lA = function(a, b, c) {
  var d = (0,z.qi)(c), e = d.width, f = d.height;
  a.N.style.display = "";
  (0,z.ri)(a.N);
  a.N.style.visibility = "hidden";
  (0,z.Rc)(a.N, [a.wr, a.Uk]);
  var h = d.top, k = d.left, l = k + e / 2, m = h + f / 2, s, x, L, G;
  if ("top" == b || "bottom" == b) {
    c = a.N.offsetWidth;
    s = a.N.offsetHeight;
    L = f / 2;
    G = s / 2;
    G = "bottom" == b ? window.innerHeight - h - L - G : h + L - G;
    L = f / 2 + s / 2;
    f = L > G ? -1 * L : L;
    "top" == b && (f *= -1);
    if ("top" == b && 0 < f || "bottom" == b && 0 > f) {
      b = kA(b);
    }
    G = -1 * (k + e / 2);
    h = window.innerWidth - k - e / 2;
    L = c / 2;
    e = L > h ? h - L : -L < G ? L + G : 0;
    L = jA(a, c / 2, e);
  } else {
    c = a.N.offsetWidth;
    s = a.N.offsetHeight;
    x = e / 2;
    G = c / 2;
    G = "right" == b ? window.innerWidth - k - x - G : k + x - G;
    x = e / 2 + c / 2;
    e = x > G ? -1 * x : x;
    "left" == b && (e *= -1);
    if ("left" == b && 0 < e || "right" == b && 0 > e) {
      b = kA(b);
    }
    G = -1 * (h + f / 2);
    h = window.innerHeight - h - f / 2;
    x = s / 2;
    f = x > h ? h - x : -x < G ? x + G : 0;
    x = jA(a, s / 2, f);
  }
  m = Math.ceil(m + f - s / 2);
  l = Math.ceil(l + e - c / 2);
  e = (0,z.Cf)(a.ui).y - d.top;
  d = a.N;
  m += e;
  e = (0,z.Cf)(d);
  l instanceof z.rd && (m = l.y, l = l.x);
  l = d.offsetLeft + (l - e.x);
  f = d.offsetTop + (m - e.y);
  e = z.Qe && (z.Li || mA) && (0,z.id)("1.9");
  l instanceof z.rd ? (m = l.x, l = l.y) : (m = l, l = f);
  d.style.left = Df(m, e);
  d.style.top = Df(l, e);
  d = a.N.getElementsByClassName(a.wB)[0];
  d.style.left = L ? L + Math.ceil(c / 2) + "px" : "";
  d.style.top = x ? x + Math.ceil(s / 2) + "px" : "";
  a.N.className = a.N.className.replace(new RegExp(a.wr + "-[^\\s]+"), "");
  (0,z.t)(a.N, a.wr + "-" + b);
  a.N.style.visibility = "";
};
z.nA = function(a) {
  z.iA.call(this);
  this.Fa = this.pp = this.op = this.ma = null;
  this.wr = "popover";
  this.Uk = "fade";
  this.wB = "popover-arrow";
  this.vB = 30;
  this.Ca = a.get("dom-monitor");
};
z.Oy = function(a, b, c, d, e, f) {
  if (!b || !c) {
    return(0,z.Lc)(Error("Missing content"));
  }
  a.remove();
  f = f || b.getAttribute("data-popover-position") || "top";
  var h = b.getAttribute("data-popover-type") || "html-content";
  a.N || (a.N = window.document.createElement("div"));
  a.ui = b;
  e = e || (0,z.mi)(b);
  e != a.Fa && (a.Fa && a.Fa.removeChild(a.N), a.Fa = e, a.Fa.appendChild(a.N));
  "html-content" == h ? a.N.innerHTML = Fp({EB:c, Uw:d || ""}) : "sign-in" == h && (d = a.N, e = b.getAttribute("data-redirect"), h = b.getAttribute("data-popover-signin-type"), c = '\x3cdiv class\x3d"popover-inner"\x3e\x3ch2\x3e' + (0,z.O)(c) + '\x3c/h2\x3e\x3cdiv class\x3d"subtitle"\x3e' + qh("h", h)(null, null, void 0) + '\x3c/div\x3e\x3ca class\x3d"btn btn-primary" title\x3d"Sign in with Twitter" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"' + (0,z.P)(e) + '" tabindex\x3d"-1"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3c/div\x3e\x3cdiv class\x3d"popover-arrow"\x3e\x3c/div\x3e', 
  d.innerHTML = c);
  (0,z.lA)(a, f, b);
  (0,z.$h)(a.Ef);
  a.op || (a.op = (0,z.R)(window.document, "click", a.fG, a, !0));
  a.pp || (a.pp = (0,z.R)(window.document, "touchend", a.PG, a, !0));
  a.Ca.F("resize-end", a.Zy, a);
  a.ma = new z.wc;
  return a.ma;
};
z.oA = function(a, b) {
  var c = a.ba(), d = (0,z.tf)((0,z.qi)(c)), e = (0,z.Ad)(window), f = 0;
  20 > d.top ? (f = d.top - 20, c.style.top = c.offsetTop - f + "px") : 20 > e.height - d.bottom && (f = e.height - d.bottom - 20);
  f && b && (b.style.height = b.offsetHeight + f + "px");
};
z.pA = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.Kj = !1;
  this.AD = !0;
};
z.qA = function(a, b) {
  z.pA.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.qf = this.state = null;
  a && this.init(a, b);
};
z.rA = function(a) {
  try {
    return!(!a || !a[z.sA]);
  } catch (b) {
    return!1;
  }
};
var tA = function(a, b, c, d, e) {
  this.Hj = a;
  this.fs = null;
  this.src = b;
  this.type = c;
  this.Xk = !!d;
  this.ul = e;
  this.key = ++uA;
  this.Ql = this.rr = !1;
};
z.vA = function(a) {
  a.Ql = !0;
  a.Hj = null;
  a.fs = null;
  a.src = null;
  a.ul = null;
};
z.wA = function(a) {
  this.src = a;
  this.rb = {};
  this.No = 0;
};
z.xA = function(a, b) {
  var c = b.type;
  if (!(c in a.rb)) {
    return!1;
  }
  var d = (0,z.cb)(a.rb[c], b);
  d && ((0,z.vA)(b), 0 == a.rb[c].length && (delete a.rb[c], a.No--));
  return d;
};
z.yA = function(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var f = a[e];
    if (!f.Ql && f.Hj == b && f.Xk == !!c && f.ul == d) {
      return e;
    }
  }
  return-1;
};
z.zA = function(a) {
  if ((0,z.pa)(a) || !a || a.Ql) {
    return!1;
  }
  var b = a.src;
  if ((0,z.rA)(b)) {
    return b.hE(a);
  }
  var c = a.type, d = a.fs;
  b.removeEventListener ? b.removeEventListener(c, d, a.Xk) : b.detachEvent && b.detachEvent((0,z.AA)(c), d);
  z.BA--;
  (c = (0,z.CA)(b)) ? ((0,z.xA)(c, a), 0 == c.No && (c.src = null, b[z.DA] = null)) : (0,z.vA)(a);
  return!0;
};
z.AA = function(a) {
  return a in EA ? EA[a] : EA[a] = "on" + a;
};
var FA = function(a, b, c, d) {
  var e = 1;
  if (a = (0,z.CA)(a)) {
    if (b = a.rb[b.toString()]) {
      for (b = (0,z.fb)(b), a = 0;a < b.length;a++) {
        var f = b[a];
        f && f.Xk == c && !f.Ql && (e &= !1 !== GA(f, d));
      }
    }
  }
  return Boolean(e);
};
var GA = function(a, b) {
  var c = a.Hj, d = a.ul || a.src;
  a.rr && (0,z.zA)(a);
  return c.call(d, b);
};
z.HA = function(a, b) {
  if (a.Ql) {
    return!0;
  }
  if (!z.IA) {
    var c = b || ca("window.event"), d = new z.qA(c, this), e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      a: {
        var f = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break a;
          } catch (h) {
            f = !0;
          }
        }
        if (f || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (f = d.currentTarget;f;f = f.parentNode) {
        c.push(f);
      }
      for (var f = a.type, k = c.length - 1;!d.Kj && 0 <= k;k--) {
        d.currentTarget = c[k], e &= FA(c[k], f, !0, d);
      }
      for (k = 0;!d.Kj && k < c.length;k++) {
        d.currentTarget = c[k], e &= FA(c[k], f, !1, d);
      }
    }
    return e;
  }
  return GA(a, new z.qA(b, this));
};
z.CA = function(a) {
  a = a[z.DA];
  return a instanceof z.wA ? a : null;
};
var JA = function(a, b, c) {
  b = "";
  if (0 < a.aD.length) {
    b += '\x3cul class\x3d"notifications-list"\x3e\x3cli class\x3d"notifications-list-heading"\x3eNotifications\x3c/li\x3e';
    a = a.aD;
    for (var d = a.length, e = 0;e < d;e++) {
      b += KA({Ga:a[e]}, 0, c);
    }
    b += '\x3cli class\x3d"navigable-list-item notifications-show-more"\x3e\x3cbutton title\x3d"See older notifications" class\x3d"btn btn-chromeless notifications-more" data-action\x3d"notifications-more"\x3eSee older notifications\x26hellip;\x3c/button\x3e\x3c/li\x3e\x3c/ul\x3e';
  }
  return b;
};
var KA = function(a, b, c) {
  b = "";
  var d;
  if (a.Ga.post) {
    if (d = "", a.Ga.post) {
      var e = ck({post:a.Ga.post, collection:a.Ga.collection}, c), f = "";
      switch(a.Ga.activityType) {
        case "follow_up_published":
        ;
        case "follow_up_created":
        ;
        case "post_added_as_follow_up":
          f += "#fr-" + (0,z.O)(a.Ga.followUp.followUpId);
          break;
        case "post_noted":
        ;
        case "note_replied":
        ;
        case "post_note_replied":
        ;
        case "note_published":
        ;
        case "mention_in_note":
        ;
        case "mention_in_note_reply":
          f += "#" + (0,z.O)(a.Ga.note.anchor) + "-" + (0,z.O)(a.Ga.note.noteId);
      }
      d += (0,z.O)(e) + (0,z.O)(f);
    }
  } else {
    d = a.Ga.collection ? "/" + (0,z.O)(a.Ga.collection.slug) : "";
  }
  e = d;
  d = "post_recommended_milestone" != a.Ga.activityType && "collection_followed_milestone" != a.Ga.activityType;
  var f = '\x3cli class\x3d"notifications-list-item ' + (a.Ga.isUnread ? " notifications-list-item-new" : "") + " " + (1 < a.Ga.actors.length ? "extra-notification-avatars" : "") + ' navigable-list-item"\x3e', h;
  h = "post_recommended_milestone" == a.Ga.activityType || "collection_followed_milestone" == a.Ga.activityType ? '\x3cspan class\x3d"icons icons-milestone"\x3e\x3c/span\x3e' : 1 == a.Ga.actors.length ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.Ro)({user:a.Ga.actors[0], Wj:a.Ga.actors[0].name, Pc:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/div\x3e" : "post_recommended" == a.Ga.activityType ? '\x3cspan class\x3d"icons icons-circle-check notifications-icons-recommendation"\x3e\x3c/span\x3e' : 
  "";
  e = f + h + '\x3ca class\x3d"notifications-list-item-btn" tabindex\x3d"-1" href\x3d"' + (0,z.P)((0,z.Q)(e)) + '"\x3e';
  if (d) {
    switch(f = "", h = a.Ga.actors.length, h) {
      case 0:
        break;
      case 1:
        f += (0,z.O)(a.Ga.actors[0].name) + " ";
        break;
      case 2:
        f += (0,z.O)(a.Ga.actors[0].name) + " and " + (0,z.O)(a.Ga.actors[1].name) + " ";
        break;
      case 3:
        f += (0,z.O)(a.Ga.actors[0].name) + ", " + (0,z.O)(a.Ga.actors[1].name) + ", and " + (0,z.O)(a.Ga.actors[2].name) + " ";
        break;
      default:
        f += (0,z.O)(a.Ga.actors[0].name) + ", " + (0,z.O)(a.Ga.actors[1].name) + ", " + (0,z.O)(a.Ga.actors[2].name) + ", and " + (0,z.O)(h - 3) + " other" + (4 < h ? "s" : "") + " ";
    }
  } else {
    f = "";
  }
  e = e + f + qh("m", a.Ga.activityType)({post:a.Ga.post, followUp:a.Ga.followUp, collection:a.Ga.collection, milestoneArg:a.Ga.milestoneArg}, null, c) + "\x3c/a\x3e";
  if (1 < a.Ga.actors.length && d) {
    d = '\x3cdiv class\x3d"notification-user-avatar-icon-wrapper"\x3e';
    f = a.Ga.actors;
    h = f.length;
    for (var k = 0;k < h;k++) {
      var l = f[k];
      d += 3 > k ? '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon"\x3e' + (0,z.Ro)({user:l, vU:l ? l.name : "", Pc:"icons-avatar-user-img", tabIndex:-1}, c) + "\x3c/div\x3e" : "";
    }
    3 < a.Ga.actors.length && (c = "post_recommended" == a.Ga.activityType ? "Recommended " + (0,z.O)(a.Ga.post.title) : "", d += '\x3cdiv class\x3d"avatar-icon notification-user-avatar-icon icons-extra"\x3e\x3cbutton class\x3d"notification-item-more" data-action\x3d"view-actors" data-action-value\x3d"' + (0,z.P)(a.Ga.rollupRangeKey) + '" dialog-title\x3d"' + (0,z.P)(c) + '"\x3e\x26hellip;\x3c/button\x3e\x3c/div\x3e');
    a = d + "\x3c/div\x3e";
  } else {
    a = "";
  }
  return b + (e + a + "\x3c/li\x3e");
};
var LA = function(a, b) {
  this.ca = b;
  this.fK = b.get("activity").Xo;
  this.ea = b.get("request");
  this.U = a;
  this.Rp = null;
  this.Ra = b.get("butter-bar");
  this.W = b.get("dialog");
  this.Qz = null;
  this.cy = {};
  MA(this);
  this.bk();
};
var MA = function(a) {
  (0,z.r)((0,z.q)((0,z.q)(a.ea.get(NA.R({}, {minCount:100}), {na:!0, background:!0}), a.IA, a), a.xc, a), z.Cj);
};
var OA = function(a, b, c) {
  b = '\x3cul class\x3d"notification-actors-list"\x3e';
  for (var d = a.actors, e = d.length, f = 0;f < e;f++) {
    b += '\x3cli class\x3d"notification-actors-list-item"\x3e' + To((0,z.M)(a, {user:d[f], Pc:"avatar-icon notification-actors-list-icon", hc:"notification-actors-list-link", VC:"notification-actors-list-name"}), c) + "\x3c/li\x3e";
  }
  return b + "\x3c/ul\x3e";
};
var PA = function(a, b) {
  this.ca = a;
  this.ha = a.get("app");
  this.Xo = a.get("activity").Xo;
  this.Dd = a.get("request");
  this.Ra = a.get("butter-bar");
  this.Ca = a.get("dom-monitor");
  this.Ah = b;
  this.RA = window.document.body.getElementsByClassName("site-nav-overlay")[0];
  this.uk = !1;
  this.kg = 0;
  (0,z.J)("isAuthenticated") && new LA(b.getElementsByClassName("site-nav-scrollable-container")[0], a);
  this.bk();
};
var QA = function(a) {
  var b = window.document.getElementsByClassName("site-nav-list-item-active")[0];
  b && (0,z.u)(b, "site-nav-list-item-active");
  a && ((0,z.t)(a, "site-nav-list-item-active"), a.querySelector("*:not(.avatar-icon) \x3e a, input, button").focus());
};
var RA = function(a) {
  this.ca = a;
  this.Ku = this.Ju = this.ZA = this.hz = this.Pt = this.jm = null;
  this.ya = [];
  a.get("app").F(Jn, this.nH, this);
  (0,z.yi)("zoom", this.GK, this);
};
var SA = function(a, b) {
  a.jm && (a.jm.close(!!b), (0,z.$h)(a.ya), a.jm = null);
};
var TA = function(a, b) {
  this.oe = this.an = null;
  this.Za = (0,z.Ln)((0,z.Bs)(b.get("app")));
  this.Ub = a;
  this.Sy = Number(a.getAttribute("data-width") || 0);
  a.getAttribute("data-height");
  this.$t = this.ma = this.Ry = null;
  z.v.call(this);
};
var WA = function(a) {
  var b = {imageId:a.getAttribute("data-action-value")};
  if (a.getAttribute("data-width")) {
    b.width = a.getAttribute("data-width");
    b.height = a.getAttribute("data-height");
    var c = b.width, d = b.height, e = (0,z.Ad)(window), f = tg(e.width, new z.sg(200, 2560), 200, !0), e = tg(e.height, new z.sg(200, 4096), 200, !0), f = Math.min(f / c, e / d);
    a.width && (f = Math.max(f, Number(a.width) / c));
    f = Math.min(f, 1);
    b.height = Math.round(d * f);
    b.width = Math.round(c * f);
  }
  b.strategy = b.width && b.width == b.height ? "crop-fixed" : "resample";
  return(0,z.K)(z.Qj, b);
};
var XA = function(a) {
  var b = window.document.createElement("img");
  b.src = WA(a.Ub);
  (0,z.t)(b, "zoom-img");
  a.ma = new z.wc;
  a.$t = (0,z.R)(b, "load", a.ma.Ea, a.ma);
  (0,z.Dk)(YA, {imageId:a.Ub.getAttribute("data-action-value"), source:window.location.pathname});
  a.Ry = b;
  a.Sy ? ZA(a) : (0,z.q)(a.ma, function() {
    this.Sy = Number(b.width);
    ZA(this);
  }, a);
};
var ZA = function(a) {
  a.oe = window.document.createElement("div");
  (0,z.t)(a.oe, "zoom-img-wrap");
  "absolute" == (0,z.yf)(a.Ub, "position") && (0,z.t)(a.oe, "zoom-img-wrap-absolute");
  a.Ub.parentNode.insertBefore(a.oe, a.Ub);
  a.oe.appendChild(a.Ub);
  (0,z.t)(a.Ub, "zoom-img");
  a.an = window.document.createElement("div");
  (0,z.t)(a.an, "zoom-overlay");
  window.document.body.appendChild(a.an);
  (0,z.ri)(a.Ub);
  var b = a.Ub.getAttribute("data-width"), c = a.Ub.getAttribute("data-height"), d = b / a.Ub.width, e = window.innerHeight - $A, f = window.innerWidth - $A;
  a.UG = b < f && c < e ? d : b / c < f / e ? e / c * d : f / b * d;
  aB(a);
};
var aB = function(a) {
  (0,z.ri)(a.Ub);
  var b = (0,z.ki)(a.Ub), c = ((0,z.Td)(a.Za, a.Ub) ? (0,z.ni)(a.Za).top : 0) + window.innerHeight / 2, d = window.innerWidth / 2, e = b.x + a.Ub.width / 2;
  a.wK = c - (b.y + a.Ub.height / 2);
  a.vK = d - e;
  a.Xq = (0,z.R)(a.oe, z.Ho, function() {
    (0,z.q)(this.ma, function() {
      this.Ub.src = this.Ry.src;
    }, this);
    (0,z.$h)(this.Xq);
  }, a);
  (0,z.uf)(a.Ub, "transform", "scale(" + a.UG + ")");
  (0,z.uf)(a.oe, "transform", "translate(" + a.vK + "px, " + a.wK + "px) translateZ(0)");
  (0,z.t)(window.document.body, "zoom-overlay-open");
};
var bB = function(a, b, c) {
  for (var d = [], e = 0;e < c;e++) {
    d.push(a[b + e]);
  }
  return d;
};
var cB = function(a, b) {
  return bB(a, b, 2).map(function(a) {
    return a.toString(16);
  }).join("");
};
var dB = function(a, b, c) {
  return(a[b + (c ? 1 : 0)] << 8) + a[b + (c ? 0 : 1)];
};
var eB = function(a, b, c) {
  a = (((a[b + (c ? 3 : 0)] << 8) + a[b + (c ? 2 : 1)] << 8) + a[b + (c ? 1 : 2)] << 8) + a[b + (c ? 0 : 3)];
  0 > a && (a += 4294967296);
  return a;
};
var fB = function(a) {
  var b = new z.wc, c = new window.FileReader;
  c.onload = function(c) {
    var e = gB(new window.Uint8Array(c.target.result)), f = window.URL.createObjectURL(a);
    if (1 == e) {
      b.Ea(f);
    } else {
      var h = new window.Image;
      h.onload = function() {
        var a, c;
        1E3 < h.width ? (a = 1E3, c = 1E3 * h.height / h.width) : (a = h.width, c = h.height);
        var d = window.document.createElement("canvas"), s = d.getContext("2d");
        6 == e || 8 == e ? (d.width = c, d.height = a) : (d.width = a, d.height = c);
        var x = Math.max(a, c);
        s.translate(x / 2, x / 2);
        switch(e) {
          case 3:
            s.rotate(Math.PI);
            break;
          case 6:
            s.rotate(Math.PI / 2);
            break;
          case 8:
            s.rotate(1.5 * Math.PI);
        }
        var L = -a / 2, G = -c / 2;
        x == a ? G -= (c - x) / 2 : L -= (a - x) / 2;
        s.drawImage(h, L, G, a, c);
        a = d.toDataURL();
        b.Ea(a);
        window.URL.revokeObjectURL(f);
      };
      h.src = f;
    }
  };
  c.readAsArrayBuffer(a);
  return b;
};
var gB = function(a) {
  var b;
  b: {
    b = [];
    for (var c = 0;6 > c;c++) {
      b.push("Exif\x00\x00".charCodeAt(c));
    }
    for (var d = c = 0;c < a.length && 2E4 > c;) {
      if (d == b.length) {
        b = c - d;
        break b;
      }
      a[c] == b[d] ? d++ : d = 0;
      c++;
    }
    b = -1;
  }
  if (0 > b) {
    a = {};
  } else {
    b += 6;
    c = "4949" == cB(a, b);
    b = b + 2 + 2;
    b += eB(a, b, c) - 4;
    d = dB(a, b, c);
    b += 2;
    for (var e = {}, f = 0;f < d;f++) {
      var h = dB(a, b, c);
      e[h] = {tag:h, type:dB(a, b + 2, c), count:eB(a, b + 4, c), data:bB(a, b + 8, 4)};
      b += 12;
    }
    e.eL = c;
    a = e;
  }
  return a[274] ? dB(a[274].data, 0, a.eL) : 1;
};
z.hB = function(a) {
  z.Ij.call(this);
  this.ff = a.get("image");
  this.Kf = new z.Hg;
  this.Dk = null;
  this.cz = !1;
  this.Mk = this.Ag = null;
  this.Zq = iB;
  this.vq = null;
};
var iB = function(a) {
  return(0,z.K)(z.Qj, {imageId:a, strategy:"resample"});
};
z.jB = function(a) {
  var b = a.getFile();
  if (!b) {
    throw Error("Could not find file to preview.");
  }
  a.Ag || (a.Ag = fB(b), a.Mk = (0,z.q)(a.Ag.zb(), a.aH, a));
};
z.kB = function(a, b) {
  z.hB.call(this, a);
  this.rp = b;
  this.ma = new z.wc;
};
z.lB = function(a) {
  z.v.call(this);
  this.ca = a;
};
var mB = function(a) {
  z.Ij.call(this);
  this.Vm = this.Dh = this.kB = this.Za = null;
  this.Ca = a.get("dom-monitor");
  this.Ca.F("scroll", this.Me, this);
  this.ha = a.get("app");
  this.ha.F(Jn, this.Oi, this);
  nB(this);
};
var oB = function(a) {
  if (a.Za) {
    var b = (0,z.ni)(a.Za).top, c = (0,z.qi)(a.Za).height, c = b + c, d = a.Za.scrollHeight, e = (0,z.aj)(), f = Math.abs(a.rz - e);
    500 < f && 1E4 < f && (a.X(pB, {viewStartedAt:a.kB, scrollTop:b, scrollBottom:c, scrollableHeight:d, loggedAt:e}), a.rz = e);
  }
};
var nB = function(a, b) {
  a.Vm = !a.Vm || b ? 2E3 : 2 * a.Vm;
  18E5 >= a.Vm && (a.Dh = (0,window.setTimeout)(a.KI.bind(a), a.Vm));
};
var qB = function() {
  this.wn = window;
  this.bj = {};
  this.Fp = null;
  rB && (0,z.R)(this.wn, "message", this.iH, this);
};
var Ty = function(a, b, c, d, e) {
  (a = a.open(b, c, d, e)) && a.focus();
  return a;
};
var sB = function(a, b) {
  var c = a.wn, d = [], e = {scrollbars:!0, NM:!0, toolbar:!1, location:!0, width:670, height:690};
  (0,z.Cb)(e, b);
  e.left || e.top || (e.width = (0,window.parseInt)(e.width, 10), e.height = (0,window.parseInt)(e.height, 10), e.left = Math.max(c.screenX + Math.round(c.outerWidth / 2 - e.width / 2), 0), e.top = Math.max(c.screenY + Math.round(c.outerHeight / 2 - e.height / 2), 0));
  (0,z.sb)(e, function(a, b) {
    tB[b] && ("boolean" == typeof a && (a = a ? "yes" : "no"), d.push(tB[b] + "\x3d" + a));
  });
  return d.join(",");
};
var uB = function() {
  var a = new Tq, b = String((0,z.J)("buildLabel"));
  a.scope("app").add("activity-monitor", Rz).add("request", Vz, 3, b).add("datastore", Pk).add("fps", Lz).add("app", ws, "/", String((0,z.J)("productName"))).add("image", hz).add("dom-monitor", Hn).add("butter-bar", rz, window.document.querySelector(".butter-bar")).add("twitter", Pz).add("facebook", Nz).add("tooltip", z.iA).add("popover", z.nA).add("dialog", Ss).add("email", Us).add("zoom", RA).add("activity", ez).add("sitenav", PA, window.document.querySelector(".site-nav")).add("referrer-tracker", 
  cA).add("scroll-tracker", mB).add("loading-indicator", eA).add("gestures", Mj, !0).add("publish-state", ar).add("popup-manager", qB).add("upload", z.lB).add("media-resource", Mz, !1).add("media-resource-frames", Mz, !0).add("follow-ups", Kz).add("diagnostics", z.aA, b).pc("notes", "notes").pc("notes-mobile", "notes-mobile").pc("CollectionSettingsScreen", "posters").pc("DraftsScreen", "posters").pc("PostEditScreen", "posters").pc("RevertCandidateScreen", "posters").pc("StatsScreen", "stats").pc("ReferrersScreen", 
  "stats").pc("BestOfScreen", "misc-screens").pc("EspnScreen", "misc-screens").pc("StartWritingScreen", "misc-screens").pc("ExportScreen", "misc-screens").pc("FollowUpEditor", "misc-screens").pc("ProfileScreen", "misc-screens").pc("ReadingListScreen", "misc-screens").pc("SettingsScreen", "misc-screens").pc("SocialActivityScreen", "misc-screens").pc("VerificationScreen", "misc-screens");
  a.scope("screen").ir("screen").add("element-tracker", ro).ir("vote-widget");
  return a;
};
var vB = function(a) {
  a.get("app").F(Jn, this.Oi, this);
};
var wB = function(a, b) {
  var c = window.document.createElement("img");
  Zh(c, "load", function() {
    (0,z.t)(b, "img-loaded");
  });
  c.src = a;
};
z.ba = [];
z.da = this;
ta = "closure_uid_" + (1E9 * Math.random() >>> 0);
ua = 0;
z.aj = Date.now || function() {
  return+new Date;
};
(0,z.p)(z.Ca, Error);
z.Ca.prototype.name = "CustomError";
var xd;
var Ja;
var Pa;
var Oa;
var Na;
var Ma;
var Ka;
Ka = /&/g;
Ma = /</g;
Na = />/g;
Oa = /"/g;
Pa = /'/g;
Ja = /[&<>"']/;
z.xB = 2147483648 * Math.random() | 0;
var yB;
var db;
db = Array.prototype;
z.bb = db.indexOf ? function(a, b, c) {
  return db.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if ((0,z.oa)(a)) {
    return(0,z.oa)(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
};
z.rb = db.forEach ? function(a, b, c) {
  db.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = (0,z.oa)(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
};
z.Sc = db.filter ? function(a, b, c) {
  return db.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, h = (0,z.oa)(a) ? a.split("") : a, k = 0;k < d;k++) {
    if (k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l);
    }
  }
  return e;
};
z.Kb = db.map ? function(a, b, c) {
  return db.map.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = Array(d), f = (0,z.oa)(a) ? a.split("") : a, h = 0;h < d;h++) {
    h in f && (e[h] = b.call(c, f[h], h, a));
  }
  return e;
};
yB = db.reduce ? function(a, b, c, d) {
  d && (b = (0,z.ya)(b, d));
  return db.reduce.call(a, b, c);
} : function(a, b, c, d) {
  var e = c;
  (0,z.rb)(a, function(c, h) {
    e = b.call(d, e, c, h, a);
  });
  return e;
};
z.Fc = db.some ? function(a, b, c) {
  return db.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = (0,z.oa)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
};
z.zB = db.every ? function(a, b, c) {
  return db.every.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = (0,z.oa)(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && !b.call(c, e[f], f, a)) {
      return!1;
    }
  }
  return!0;
};
var Db = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
Function.prototype.bind || (Function.prototype.bind = Hb);
Array.prototype.indexOf || (Array.prototype.indexOf = Ib);
Array.prototype.map || (Array.prototype.map = Jb);
Date.now || (Date.now = z.aj);
Array.isArray || (Array.isArray = z.ma);
Object.keys || (Object.keys = xb);
(function() {
  for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0;c < b.length && !window.requestAnimationFrame;++c) {
    window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
  }
  window.requestAnimationFrame || (window.requestAnimationFrame = function(b) {
    var c = (new Date).getTime(), f = Math.max(0, 16 - (c - a)), h = window.setTimeout(function() {
      b(window.NaN);
    }, f);
    a = c + f;
    return h;
  });
  window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    (0,window.clearTimeout)(a);
  });
})();
(function() {
  "undefined" === typeof window.performance && (window.performance = {});
  if (!window.performance.now) {
    var a = Date.now();
    window.performance.timing && window.performance.timing.navigationStart && (a = window.performance.timing.navigationStart);
    window.performance.now = function() {
      return Date.now() - a;
    };
  }
})();
window.URL = window.URL || window.webkitURL || window;
var Ob = [], Qb = [], Pb = !1;
var CB;
z.AB = (0,z.Tb)(!1);
z.BB = (0,z.Tb)(!0);
CB = (0,z.Tb)(null);
var Yb;
Nb(function(a) {
  Xb = a;
});
var dc = !1, fc = [];
var ic = 0, kc = 2, lc = 3;
hc.prototype.then = function(a, b, c) {
  return rc(this, (0,z.qa)(a) ? a : null, (0,z.qa)(b) ? b : null, c);
};
Lb(hc);
hc.prototype.cancel = function(a) {
  this.$e == ic && cc(function() {
    var b = new sc(a);
    mc(this, b);
  }, this);
};
hc.prototype.fE = function(a) {
  this.$e = ic;
  jc(this, kc, a);
};
hc.prototype.gE = function(a) {
  this.$e = ic;
  jc(this, lc, a);
};
hc.prototype.hL = function() {
  for (;this.Re && this.Re.length;) {
    var a = this.Re;
    this.Re = [];
    for (var b = 0;b < a.length;b++) {
      nc(this, a[b], this.$e, this.Xg);
    }
  }
  this.kw = !1;
};
var vc = bc;
(0,z.p)(sc, z.Ca);
sc.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Oc = z.da.setTimeout, Hc = z.da.clearTimeout;
z.g = z.wc.prototype;
z.g.cancel = function(a) {
  if (this.Nc) {
    this.Xg instanceof z.wc && this.Xg.cancel();
  } else {
    if (this.Sb) {
      var b = this.Sb;
      delete this.Sb;
      a ? b.cancel(a) : (b.qr--, 0 >= b.qr && b.cancel());
    }
    this.cD ? this.cD.call(this.MB, this) : this.Cx = !0;
    this.Nc || this.$d(new z.Nc(this));
  }
};
z.g.GB = function(a, b) {
  this.Kv = !1;
  xc(this, a, b);
};
z.g.Ea = function(a) {
  zc(this);
  xc(this, !0, a);
};
z.g.$d = function(a) {
  zc(this);
  xc(this, !1, a);
};
z.g.then = function(a, b, c) {
  var d, e, f = new hc(function(a, b) {
    d = a;
    e = b;
  });
  Bc(this, d, function(a) {
    a instanceof z.Nc ? f.cancel() : e(a);
  });
  return f.then(a, b, c);
};
Lb(z.wc);
z.wc.prototype.kj = function(a) {
  Bc(this, a.Ea, a.$d, a);
  return this;
};
z.wc.prototype.zb = function(a) {
  var b = new z.wc;
  this.kj(b);
  a && (b.Sb = this, this.qr++);
  return b;
};
(0,z.p)(Ac, z.Ca);
Ac.prototype.message = "Deferred has already fired";
Ac.prototype.name = "AlreadyCalledError";
(0,z.p)(z.Nc, z.Ca);
z.Nc.prototype.message = "Deferred was canceled";
z.Nc.prototype.name = "CanceledError";
Ic.prototype.jN = function() {
  delete Gc[this.Od];
  throw this.fL;
};
var Gc = {};
var Zc = /\s*;\s*/;
z.g = z.Xc.prototype;
z.g.isEnabled = (0,z.n)(0);
z.g.set = function(a, b, c, d, e, f) {
  if (/[;=\s]/.test(a)) {
    throw Error('Invalid cookie name "' + a + '"');
  }
  if (/[;\r\n]/.test(b)) {
    throw Error('Invalid cookie value "' + b + '"');
  }
  (0,z.ga)(c) || (c = -1);
  e = e ? ";domain\x3d" + e : "";
  d = d ? ";path\x3d" + d : "";
  f = f ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires\x3d" + (new Date(1970, 1, 1)).toUTCString() : ";expires\x3d" + (new Date((0,z.aj)() + 1E3 * c)).toUTCString();
  this.Yc.cookie = a + "\x3d" + b + e + d + c + f;
};
z.g.get = function(a, b) {
  for (var c = a + "\x3d", d = (this.Yc.cookie || "").split(Zc), e = 0, f;f = d[e];e++) {
    if (0 == f.lastIndexOf(c, 0)) {
      return f.substr(c.length);
    }
    if (f == a) {
      return "";
    }
  }
  return b;
};
z.g.remove = function(a, b, c) {
  var d = this.mj(a);
  this.set(a, "", 0, b, c);
  return d;
};
z.g.ue = function() {
  return Yc(this).keys;
};
z.g.wf = function() {
  return Yc(this).Oo;
};
z.g.Zh = function() {
  return!this.Yc.cookie;
};
z.g.Kb = function() {
  return this.Yc.cookie ? (this.Yc.cookie || "").split(Zc).length : 0;
};
z.g.mj = function(a) {
  return(0,z.ga)(this.get(a));
};
z.g.clear = function() {
  for (var a = Yc(this).keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b]);
  }
};
var DB = new z.Xc(window.document);
DB.zO = 3950;
var $c = 0, ad = {};
z.v.prototype.mf = !1;
z.v.prototype.Xb = function() {
  if (!this.mf && (this.mf = !0, this.C(), 0 != $c)) {
    var a = (0,z.sa)(this);
    delete ad[a];
  }
};
z.v.prototype.C = function() {
  if (this.oo) {
    for (;this.oo.length;) {
      this.oo.shift()();
    }
  }
};
var fd;
a: {
  var EB = z.da.navigator;
  if (EB) {
    var GB = EB.userAgent;
    if (GB) {
      fd = GB;
      break a;
    }
  }
  fd = "";
}
;var JB;
var IB;
var mA;
z.Re = ed("Opera") || ed("OPR");
z.w = ed("Trident") || ed("MSIE");
z.Qe = ed("Gecko") && !ed("WebKit") && !(ed("Trident") || ed("MSIE"));
z.ce = ed("WebKit");
z.ce && ed("Mobile");
var KB, LB = gd();
KB = LB && LB.platform || "";
z.Li = -1 != KB.indexOf("Mac");
z.HB = -1 != KB.indexOf("Win");
KB.indexOf("Linux");
mA = !!gd() && -1 != (gd().appVersion || "").indexOf("X11");
var MB = fd;
MB && MB.indexOf("Android");
IB = !!MB && -1 != MB.indexOf("iPhone");
JB = !!MB && -1 != MB.indexOf("iPad");
var kd = function() {
  var a = "", b;
  if (z.Re && z.da.opera) {
    return a = z.da.opera.version, (0,z.qa)(a) ? a() : a;
  }
  z.Qe ? b = /rv\:([^\);]+)(\)|;)/ : z.w ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : z.ce && (b = /WebKit\/(\S+)/);
  b && (a = (a = b.exec(fd)) ? a[1] : "");
  return z.w && (b = hd(), b > (0,window.parseFloat)(a)) ? String(b) : a;
}(), jd = {}, NB = z.da.document, md = NB && z.w ? hd() || ("CSS1Compat" == NB.compatMode ? (0,window.parseInt)(kd, 10) : 5) : void 0;
var Sd;
var Ed = !z.w || ld(9);
!z.Qe && !z.w || z.w && ld(9) || z.Qe && (0,z.id)("1.9.1");
z.OB = z.w && !(0,z.id)("9");
Sd = z.w || z.Re || z.ce;
z.g = z.rd.prototype;
z.g.ja = function() {
  return new z.rd(this.x, this.y);
};
z.g.ceil = function() {
  this.x = Math.ceil(this.x);
  this.y = Math.ceil(this.y);
  return this;
};
z.g.floor = function() {
  this.x = Math.floor(this.x);
  this.y = Math.floor(this.y);
  return this;
};
z.g.round = function() {
  this.x = Math.round(this.x);
  this.y = Math.round(this.y);
  return this;
};
z.g.translate = function(a, b) {
  a instanceof z.rd ? (this.x += a.x, this.y += a.y) : (this.x += a, (0,z.pa)(b) && (this.y += b));
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.pa)(b) ? b : a;
  this.x *= a;
  this.y *= c;
  return this;
};
z.g = sd.prototype;
z.g.ja = function() {
  return new sd(this.width, this.height);
};
z.g.ob = function() {
  return this.width * this.height;
};
z.g.Zh = function() {
  return!this.ob();
};
z.g.ceil = function() {
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
z.g.floor = function() {
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
z.g.round = function() {
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.pa)(b) ? b : a;
  this.width *= a;
  this.height *= c;
  return this;
};
var zd = {cellpadding:"cellPadding", cellspacing:"cellSpacing", colspan:"colSpan", frameborder:"frameBorder", height:"height", maxlength:"maxLength", role:"role", rowspan:"rowSpan", type:"type", usemap:"useMap", valign:"vAlign", width:"width"};
z.g = ud.prototype;
z.g.Jg = function() {
  return this.Yc;
};
z.g.ba = function(a) {
  return(0,z.oa)(a) ? this.Yc.getElementById(a) : a;
};
z.g.Nx = ud.prototype.ba;
z.g.zc = function(a, b, c) {
  return(0,z.Dd)(this.Yc, arguments);
};
z.g.createElement = function(a) {
  return this.Yc.createElement(a);
};
z.g.createTextNode = function(a) {
  return this.Yc.createTextNode(String(a));
};
z.g.Md = function() {
  var a = this.Yc;
  return a.parentWindow || a.defaultView;
};
z.g.appendChild = function(a, b) {
  a.appendChild(b);
};
z.g.append = z.Kd;
z.g.removeNode = z.Nd;
z.g.nL = z.Od;
z.g.contains = z.Td;
z.fe = "StopIteration" in z.da ? z.da.StopIteration : Error("StopIteration");
z.de.prototype.next = function() {
  throw z.fe;
};
z.de.prototype.xi = function() {
  return this;
};
(0,z.p)(z.he, z.de);
z.g = z.he.prototype;
z.g.S = null;
z.g.Sc = 0;
z.g.Fx = !1;
z.g.lf = function(a) {
  this.S = a.S;
  this.Sc = a.Sc;
  this.depth = a.depth;
  this.Rd = a.Rd;
  this.yr = a.yr;
};
z.g.ja = function() {
  return new z.he(this.S, this.Rd, !this.yr, this.Sc, this.depth);
};
z.g.next = function() {
  var a;
  if (this.Fx) {
    if (!this.S || this.yr && 0 == this.depth) {
      throw z.fe;
    }
    a = this.S;
    var b = this.Rd ? -1 : 1;
    if (this.Sc == b) {
      var c = this.Rd ? a.lastChild : a.firstChild;
      c ? ie(this, c) : ie(this, a, -1 * b);
    } else {
      (c = this.Rd ? a.previousSibling : a.nextSibling) ? ie(this, c) : ie(this, a.parentNode, -1 * b);
    }
    this.depth += this.Sc * (this.Rd ? -1 : 1);
  } else {
    this.Fx = !0;
  }
  a = this.S;
  if (!this.S) {
    throw z.fe;
  }
  return a;
};
z.g.Ob = function(a) {
  return a.S == this.S && (!this.S || a.Sc == this.Sc);
};
z.g.splice = function(a) {
  var b = this.S, c = this.Rd ? 1 : -1;
  this.Sc == c && (this.Sc = -1 * c, this.depth += this.Sc * (this.Rd ? -1 : 1));
  this.Rd = !this.Rd;
  z.he.prototype.next.call(this);
  this.Rd = !this.Rd;
  for (var c = (0,z.na)(arguments[0]) ? arguments[0] : arguments, d = c.length - 1;0 <= d;d--) {
    (0,z.Ld)(c[d], b);
  }
  (0,z.Nd)(b);
};
z.g = z.me.prototype;
z.g.Kb = function() {
  return this.Ib;
};
z.g.wf = function() {
  oe(this);
  for (var a = [], b = 0;b < this.xb.length;b++) {
    a.push(this.ze[this.xb[b]]);
  }
  return a;
};
z.g.ue = function() {
  oe(this);
  return this.xb.concat();
};
z.g.mj = function(a) {
  return pe(this.ze, a);
};
z.g.Ob = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.Ib != a.Kb()) {
    return!1;
  }
  var c = b || ne;
  oe(this);
  for (var d, e = 0;d = this.xb[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
z.g.Zh = function() {
  return 0 == this.Ib;
};
z.g.clear = function() {
  this.ze = {};
  this.Po = this.Ib = this.xb.length = 0;
};
z.g.remove = function(a) {
  return pe(this.ze, a) ? (delete this.ze[a], this.Ib--, this.Po++, this.xb.length > 2 * this.Ib && oe(this), !0) : !1;
};
z.g.get = function(a, b) {
  return pe(this.ze, a) ? this.ze[a] : b;
};
z.g.set = function(a, b) {
  pe(this.ze, a) || (this.Ib++, this.xb.push(a), this.Po++);
  this.ze[a] = b;
};
z.g.Pf = function(a) {
  var b;
  a instanceof z.me ? (b = a.ue(), a = a.wf()) : (b = xb(a), a = wb(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
z.g.forEach = function(a, b) {
  for (var c = this.ue(), d = 0;d < c.length;d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
  }
};
z.g.ja = function() {
  return new z.me(this);
};
z.g.bE = (0,z.n)(1);
z.g.vs = function() {
  oe(this);
  for (var a = {}, b = 0;b < this.xb.length;b++) {
    var c = this.xb[b];
    a[c] = this.ze[c];
  }
  return a;
};
z.g.xi = function(a) {
  oe(this);
  var b = 0, c = this.xb, d = this.ze, e = this.Po, f = this, h = new z.de;
  h.next = function() {
    for (;;) {
      if (e != f.Po) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw z.fe;
      }
      var h = c[b++];
      return a ? h : d[h];
    }
  };
  return h;
};
(0,z.p)(z.qe, z.v);
z.qe.prototype.restore = function(a) {
  var b = this.yo();
  a || this.Xb();
  return b;
};
z.re.prototype.xe = function() {
  return!1;
};
z.re.prototype.Jg = function() {
  return(0,z.wd)(z.w ? this.te() : this.Ma());
};
z.re.prototype.Md = function() {
  return(0,z.Cd)(this.Jg());
};
z.re.prototype.containsNode = function(a, b) {
  return this.Kh((0,z.Ue)((0,z.Le)(a), void 0), b);
};
(0,z.p)(ye, z.he);
(0,z.p)(z.ze, z.re);
z.ze.prototype.Kh = function(a, b) {
  var c = (0,z.te)(this), d = (0,z.te)(a);
  return(b ? z.Fc : z.zB)(d, function(a) {
    return(0,z.Fc)(c, function(c) {
      return c.Kh(a, b);
    });
  });
};
z.ze.prototype.insertNode = (0,z.n)(5);
z.ze.prototype.dh = (0,z.n)(9);
(0,z.p)(z.Ae, ye);
z.g = z.Ae.prototype;
z.g.Na = null;
z.g.La = null;
z.g.jb = 0;
z.g.gb = 0;
z.g.zj = (0,z.n)(12);
z.g.xj = (0,z.n)(15);
z.g.Ma = function() {
  return this.Na;
};
z.g.pb = function() {
  return this.La;
};
z.g.ao = function() {
  return this.Fx && this.S == this.La && (!this.gb || 1 != this.Sc);
};
z.g.next = function() {
  if (this.ao()) {
    throw z.fe;
  }
  return z.Ae.w.next.call(this);
};
z.g.lf = function(a) {
  this.Na = a.Na;
  this.La = a.La;
  this.jb = a.jb;
  this.gb = a.gb;
  this.zf = a.zf;
  z.Ae.w.lf.call(this, a);
};
z.g.ja = function() {
  var a = new z.Ae(this.Na, this.jb, this.La, this.gb, this.zf);
  a.lf(this);
  return a;
};
z.g = z.Be.prototype;
z.g.Rh = (0,z.n)(17);
z.g.Pn = (0,z.n)(19);
z.g.Kh = function(a, b) {
  var c = b && !a.isCollapsed(), d = a.ra;
  try {
    return c ? 0 <= this.Te(d, 0, 1) && 0 >= this.Te(d, 1, 0) : 0 <= this.Te(d, 0, 0) && 0 >= this.Te(d, 1, 1);
  } catch (e) {
    if (!z.w) {
      throw e;
    }
    return!1;
  }
};
z.g.containsNode = function(a, b) {
  return this.Kh((0,z.Le)(a), b);
};
z.g.Kg = (0,z.n)(23);
z.g.xi = function() {
  return new z.Ae(this.Ma(), this.Qb(), this.pb(), this.Ec());
};
(0,z.p)(z.Ce, z.Be);
z.g = z.Ce.prototype;
z.g.ja = function() {
  return new this.constructor(this.ra.cloneRange());
};
z.g.te = function() {
  return this.ra.commonAncestorContainer;
};
z.g.Ma = function() {
  return this.ra.startContainer;
};
z.g.Qb = function() {
  return this.ra.startOffset;
};
z.g.pb = function() {
  return this.ra.endContainer;
};
z.g.Ec = function() {
  return this.ra.endOffset;
};
z.g.Te = function(a, b, c) {
  return this.ra.compareBoundaryPoints(1 == c ? 1 == b ? z.da.Range.START_TO_START : z.da.Range.START_TO_END : 1 == b ? z.da.Range.END_TO_START : z.da.Range.END_TO_END, a);
};
z.g.isCollapsed = function() {
  return this.ra.collapsed;
};
z.g.rc = function() {
  return this.ra.toString();
};
z.g.ve = (0,z.n)(28);
z.g.select = function(a) {
  var b = (0,z.Cd)((0,z.wd)(this.Ma()));
  this.Ao(b.getSelection(), a);
};
z.g.Ao = function(a) {
  a.removeAllRanges();
  a.addRange(this.ra);
};
z.g.insertNode = (0,z.n)(4);
z.g.dh = (0,z.n)(8);
z.g.collapse = function(a) {
  this.ra.collapse(a);
};
(0,z.p)(Ge, z.Ce);
Ge.prototype.Ao = function(a, b) {
  !b || this.isCollapsed() ? Ge.w.Ao.call(this, a, b) : (a.collapse(this.pb(), this.Ec()), a.extend(this.Ma(), this.Qb()));
};
(0,z.p)(z.He, z.Be);
z.g = z.He.prototype;
z.g.ag = null;
z.g.Na = null;
z.g.La = null;
z.g.jb = -1;
z.g.gb = -1;
z.g.ja = function() {
  var a = new z.He(this.ra.duplicate(), this.bL);
  a.ag = this.ag;
  a.Na = this.Na;
  a.La = this.La;
  return a;
};
z.g.Hg = function() {
  this.ag = this.Na = this.La = null;
  this.jb = this.gb = -1;
};
z.g.te = function() {
  if (!this.ag) {
    var a = this.ra.text, b = this.ra.duplicate(), c = a.replace(/ +$/, "");
    (c = a.length - c.length) && b.moveEnd("character", -c);
    c = b.parentElement();
    b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
    if (this.isCollapsed() && 0 < b) {
      return this.ag = c;
    }
    for (;b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) {
      c = c.parentNode;
    }
    for (;1 == c.childNodes.length && c.innerText == Ne(c.firstChild) && Ee(c.firstChild);) {
      c = c.firstChild;
    }
    0 == a.length && (c = Je(this, c));
    this.ag = c;
  }
  return this.ag;
};
z.g.Ma = function() {
  this.Na || (this.Na = Ke(this, 1), this.isCollapsed() && (this.La = this.Na));
  return this.Na;
};
z.g.Qb = function() {
  0 > this.jb && (this.jb = Me(this, 1), this.isCollapsed() && (this.gb = this.jb));
  return this.jb;
};
z.g.pb = function() {
  if (this.isCollapsed()) {
    return this.Ma();
  }
  this.La || (this.La = Ke(this, 0));
  return this.La;
};
z.g.Ec = function() {
  if (this.isCollapsed()) {
    return this.Qb();
  }
  0 > this.gb && (this.gb = Me(this, 0), this.isCollapsed() && (this.jb = this.gb));
  return this.gb;
};
z.g.Te = function(a, b, c) {
  return this.ra.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a);
};
z.g.isCollapsed = function() {
  return 0 == this.ra.compareEndPoints("StartToEnd", this.ra);
};
z.g.rc = function() {
  return this.ra.text;
};
z.g.ve = (0,z.n)(27);
z.g.select = function() {
  this.ra.select();
};
z.g.insertNode = (0,z.n)(3);
z.g.dh = (0,z.n)(7);
z.g.collapse = function(a) {
  this.ra.collapse(a);
  a ? (this.La = this.Na, this.gb = this.jb) : (this.Na = this.La, this.jb = this.gb);
};
(0,z.p)(Oe, z.Ce);
Oe.prototype.Ao = function(a) {
  a.collapse(this.Ma(), this.Qb());
  this.pb() == this.Ma() && this.Ec() == this.Qb() || a.extend(this.pb(), this.Ec());
  0 == a.rangeCount && a.addRange(this.ra);
};
(0,z.p)(Pe, z.Ce);
Pe.prototype.Te = function(a, b, c) {
  return(0,z.id)("528") ? Pe.w.Te.call(this, a, b, c) : this.ra.compareBoundaryPoints(1 == c ? 1 == b ? z.da.Range.START_TO_START : z.da.Range.END_TO_START : 1 == b ? z.da.Range.START_TO_END : z.da.Range.END_TO_END, a);
};
Pe.prototype.Ao = function(a, b) {
  a.removeAllRanges();
  b ? a.setBaseAndExtent(this.pb(), this.Ec(), this.Ma(), this.Qb()) : a.setBaseAndExtent(this.Ma(), this.Qb(), this.pb(), this.Ec());
};
(0,z.p)(z.Se, z.re);
z.g = z.Se.prototype;
z.g.Hh = null;
z.g.Na = null;
z.g.jb = null;
z.g.La = null;
z.g.gb = null;
z.g.zf = !1;
z.g.ja = function() {
  var a = new z.Se;
  a.Hh = this.Hh && this.Hh.ja();
  a.Na = this.Na;
  a.jb = this.jb;
  a.La = this.La;
  a.gb = this.gb;
  a.zf = this.zf;
  return a;
};
z.g.g = function() {
  return "text";
};
z.g.uj = function() {
  return(0,z.$e)(this).ra;
};
z.g.Hg = function() {
  this.Na = this.jb = this.La = this.gb = null;
};
z.g.rl = function() {
  return 1;
};
z.g.Sh = function() {
  return this;
};
z.g.te = function() {
  return(0,z.$e)(this).te();
};
z.g.Ma = function() {
  return this.Na || (this.Na = (0,z.$e)(this).Ma());
};
z.g.Qb = function() {
  return null != this.jb ? this.jb : this.jb = (0,z.$e)(this).Qb();
};
z.g.Rh = (0,z.n)(16);
z.g.pb = function() {
  return this.La || (this.La = (0,z.$e)(this).pb());
};
z.g.Ec = function() {
  return null != this.gb ? this.gb : this.gb = (0,z.$e)(this).Ec();
};
z.g.Pn = (0,z.n)(18);
z.g.xe = function() {
  return this.zf;
};
z.g.Kh = function(a, b) {
  var c = a.g();
  return "text" == c ? (0,z.$e)(this).Kh((0,z.$e)(a), b) : "control" == c ? (c = ef(a), (b ? z.Fc : z.zB)(c, function(a) {
    return this.containsNode(a, b);
  }, this)) : !1;
};
z.g.isCollapsed = function() {
  return(0,z.$e)(this).isCollapsed();
};
z.g.rc = function() {
  return(0,z.$e)(this).rc();
};
z.g.Kg = (0,z.n)(22);
z.g.ve = (0,z.n)(26);
z.g.xi = function() {
  return new z.Ae(this.Ma(), this.Qb(), this.pb(), this.Ec());
};
z.g.select = function() {
  (0,z.$e)(this).select(this.zf);
};
z.g.insertNode = (0,z.n)(2);
z.g.dh = (0,z.n)(6);
z.g.sx = function() {
  return new af(this);
};
z.g.collapse = function(a) {
  a = this.xe() ? !a : a;
  this.Hh && this.Hh.collapse(a);
  a ? (this.La = this.Na, this.gb = this.jb) : (this.Na = this.La, this.jb = this.gb);
  this.zf = !1;
};
(0,z.p)(af, z.qe);
af.prototype.yo = function() {
  return(0,z.Ye)(this.uB, this.JK, this.cC, this.oL);
};
af.prototype.C = function() {
  af.w.C.call(this);
  this.cC = this.uB = null;
};
(0,z.p)(z.bf, z.ze);
z.g = z.bf.prototype;
z.g.ra = null;
z.g.Cc = null;
z.g.Io = null;
z.g.Hg = function() {
  this.Io = this.Cc = null;
};
z.g.ja = function() {
  return df.apply(this, ef(this));
};
z.g.g = function() {
  return "control";
};
z.g.uj = function() {
  return this.ra || window.document.body.createControlRange();
};
z.g.rl = function() {
  return this.ra ? this.ra.length : 0;
};
z.g.Sh = function(a) {
  a = this.ra.item(a);
  return(0,z.Ue)((0,z.Le)(a), void 0);
};
z.g.te = function() {
  return z.Xd.apply(null, ef(this));
};
z.g.Ma = function() {
  return(0,z.ff)(this)[0];
};
z.g.Qb = function() {
  return 0;
};
z.g.pb = function() {
  var a = (0,z.ff)(this), b = (0,z.Ya)(a);
  return(0,z.Za)(a, function(a) {
    return(0,z.Td)(a, b);
  });
};
z.g.Ec = function() {
  return this.pb().childNodes.length;
};
z.g.isCollapsed = function() {
  return!this.ra || !this.ra.length;
};
z.g.rc = function() {
  return "";
};
z.g.Kg = (0,z.n)(21);
z.g.ve = (0,z.n)(25);
z.g.xi = function() {
  return new z.hf(this);
};
z.g.select = function() {
  this.ra && this.ra.select();
};
z.g.sx = function() {
  return new gf(this);
};
z.g.collapse = function() {
  this.ra = null;
  this.Hg();
};
(0,z.p)(gf, z.qe);
gf.prototype.yo = function() {
  for (var a = (this.Cc.length ? (0,z.wd)(this.Cc[0]) : window.document).body.createControlRange(), b = 0, c = this.Cc.length;b < c;b++) {
    a.addElement(this.Cc[b]);
  }
  return(0,z.cf)(a);
};
gf.prototype.C = function() {
  gf.w.C.call(this);
  delete this.Cc;
};
(0,z.p)(z.hf, ye);
z.g = z.hf.prototype;
z.g.Na = null;
z.g.La = null;
z.g.Cc = null;
z.g.zj = (0,z.n)(11);
z.g.xj = (0,z.n)(14);
z.g.Ma = function() {
  return this.Na;
};
z.g.pb = function() {
  return this.La;
};
z.g.ao = function() {
  return!this.depth && !this.Cc.length;
};
z.g.next = function() {
  if (this.ao()) {
    throw z.fe;
  }
  if (!this.depth) {
    var a = this.Cc.shift();
    ie(this, a, 1, 1);
    return a;
  }
  return z.hf.w.next.call(this);
};
z.g.lf = function(a) {
  this.Cc = a.Cc;
  this.Na = a.Na;
  this.La = a.La;
  z.hf.w.lf.call(this, a);
};
z.g.ja = function() {
  var a = new z.hf(null);
  a.lf(this);
  return a;
};
(0,z.p)(z.jf, z.ze);
z.g = z.jf.prototype;
z.g.Hg = function() {
  this.Ol = [];
  this.zr = this.cm = null;
};
z.g.ja = function() {
  var a = new z.jf;
  a.Qf = (0,z.fb)(this.Qf);
  return a;
};
z.g.g = function() {
  return "mutli";
};
z.g.uj = function() {
  return this.Qf[0];
};
z.g.rl = function() {
  return this.Qf.length;
};
z.g.Sh = function(a) {
  this.Ol[a] || (this.Ol[a] = (0,z.Te)(this.Qf[a]));
  return this.Ol[a];
};
z.g.te = function() {
  if (!this.zr) {
    for (var a = [], b = 0, c = this.rl();b < c;b++) {
      a.push(this.Sh(b).te());
    }
    this.zr = z.Xd.apply(null, a);
  }
  return this.zr;
};
z.g.Ma = function() {
  return lf(this)[0].Ma();
};
z.g.Qb = function() {
  return lf(this)[0].Qb();
};
z.g.pb = function() {
  return(0,z.Ya)(lf(this)).pb();
};
z.g.Ec = function() {
  return(0,z.Ya)(lf(this)).Ec();
};
z.g.isCollapsed = function() {
  return 0 == this.Qf.length || 1 == this.Qf.length && this.Sh(0).isCollapsed();
};
z.g.rc = function() {
  return(0,z.Kb)((0,z.te)(this), function(a) {
    return a.rc();
  }).join("");
};
z.g.Kg = (0,z.n)(20);
z.g.ve = (0,z.n)(24);
z.g.xi = function() {
  return new z.nf(this);
};
z.g.select = function() {
  var a = (0,z.se)(this.Md());
  a.removeAllRanges();
  for (var b = 0, c = this.rl();b < c;b++) {
    a.addRange(this.Sh(b).uj());
  }
};
z.g.sx = function() {
  return new mf(this);
};
z.g.collapse = function(a) {
  if (!this.isCollapsed()) {
    var b = a ? this.Sh(0) : this.Sh(this.rl() - 1);
    this.Hg();
    b.collapse(a);
    this.Ol = [b];
    this.cm = [b];
    this.Qf = [b.uj()];
  }
};
(0,z.p)(mf, z.qe);
mf.prototype.yo = function() {
  var a = (0,z.Kb)(this.tx, function(a) {
    return a.restore();
  });
  return kf(a);
};
mf.prototype.C = function() {
  mf.w.C.call(this);
  (0,z.rb)(this.tx, function(a) {
    a.Xb();
  });
  delete this.tx;
};
(0,z.p)(z.nf, ye);
z.g = z.nf.prototype;
z.g.Zf = null;
z.g.$k = 0;
z.g.zj = (0,z.n)(10);
z.g.xj = (0,z.n)(13);
z.g.Ma = function() {
  return this.Zf[0].Ma();
};
z.g.pb = function() {
  return(0,z.Ya)(this.Zf).pb();
};
z.g.ao = function() {
  return this.Zf[this.$k].ao();
};
z.g.next = function() {
  try {
    var a = this.Zf[this.$k], b = a.next();
    ie(this, a.S, a.Sc, a.depth);
    return b;
  } catch (c) {
    if (c !== z.fe || this.Zf.length - 1 == this.$k) {
      throw c;
    }
    this.$k++;
    return this.next();
  }
};
z.g.lf = function(a) {
  this.Zf = (0,z.fb)(a.Zf);
  z.nf.w.lf.call(this, a);
};
z.g.ja = function() {
  var a = new z.nf(null);
  a.lf(this);
  return a;
};
(0,z.Gb)("ADDRESS", "ARTICLE", "ASIDE", "BLOCKQUOTE", "BODY", "CAPTION", "CENTER", "COL", "COLGROUP", "DETAILS", "DIR", "DIV", "DL", "DD", "DT", "FIELDSET", "FIGCAPTION", "FIGURE", "FOOTER", "FORM", "H1", "H2", "H3", "H4", "H5", "H6", "HEADER", "HGROUP", "HR", "ISINDEX", "OL", "LI", "MAP", "MENU", "NAV", "OPTGROUP", "OPTION", "P", "PRE", "SECTION", "SUMMARY", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL");
(0,z.Gb)("IMG", "IFRAME", "EMBED");
var cC;
var bC;
var aC;
var YB;
var XB;
var PB, QB, RB, SB, TB, UB, VB;
VB = UB = TB = SB = RB = QB = PB = !1;
var WB = fd;
WB && (-1 != WB.indexOf("Firefox") ? PB = !0 : -1 != WB.indexOf("Camino") ? QB = !0 : -1 != WB.indexOf("iPhone") || -1 != WB.indexOf("iPod") ? RB = !0 : -1 != WB.indexOf("iPad") ? SB = !0 : -1 != WB.indexOf("Chrome") ? UB = !0 : -1 != WB.indexOf("Android") ? TB = !0 : -1 != WB.indexOf("Safari") && (VB = !0));
XB = PB;
YB = QB;
z.ZB = RB;
z.$B = SB;
aC = TB;
bC = UB;
cC = VB;
var dC = function() {
  if (XB) {
    return of(/Firefox\/([0-9.]+)/);
  }
  if (z.w || z.Re) {
    return kd;
  }
  if (bC) {
    return of(/Chrome\/([0-9.]+)/);
  }
  if (cC) {
    return of(/Version\/([0-9.]+)/);
  }
  if (z.ZB || z.$B) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(fd)) {
      return a[1] + "." + a[2];
    }
  } else {
    if (aC) {
      return(a = of(/Android\s+([0-9.]+)/)) ? a : of(/Version\/([0-9.]+)/);
    }
    if (YB) {
      return of(/Camino\/([0-9.]+)/);
    }
  }
  return "";
}();
z.eC = z.w || z.ce || z.Re || !1;
z.fC = z.ce || !1;
z.gC = z.w || z.ce || z.Re;
z.ce && (0,z.id)("534.16");
z.hC = z.Qe && !0;
z.w && (0,z.id)("7.0");
z.iC = z.Qe && (0,z.id)("1.8") || z.ce || z.Re;
z.jC = z.ce || z.w && (0,z.id)("9");
z.w || z.Re || z.Qe && (0,z.id)("1.9");
z.Qe || z.ce && (0,z.id)("527");
z.kC = z.w || z.Re;
z.lC = z.w || z.ce && (0,z.id)("525");
z.ce && (0,z.id)("531");
z.mC = z.ce && !(0,z.id)("528");
z.Qe && (0,z.id)("1.9") || z.w || z.Re || z.ce && (0,z.id)("531");
z.Qe || z.ce && (0,z.id)("526");
bC && 0 <= Sa(dC, "4") || cC && (0,z.id)("533") || z.Qe && (0,z.id)("2.0") || z.w && (0,z.id)("10");
z.Re && (0,z.id)("11.10");
bC && Sa(dC, "12");
var gA;
z.nC = z.w ? "focusin" : "DOMFocusIn";
gA = z.w ? "focusout" : "DOMFocusOut";
z.Ho = z.ce ? "webkitTransitionEnd" : z.Re ? "otransitionend" : "transitionend";
z.g = z.rf.prototype;
z.g.ja = function() {
  return new z.rf(this.top, this.right, this.bottom, this.left);
};
z.g.contains = function(a) {
  return this && a ? a instanceof z.rf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1;
};
z.g.expand = (0,z.n)(29);
z.g.ceil = function() {
  this.top = Math.ceil(this.top);
  this.right = Math.ceil(this.right);
  this.bottom = Math.ceil(this.bottom);
  this.left = Math.ceil(this.left);
  return this;
};
z.g.floor = function() {
  this.top = Math.floor(this.top);
  this.right = Math.floor(this.right);
  this.bottom = Math.floor(this.bottom);
  this.left = Math.floor(this.left);
  return this;
};
z.g.round = function() {
  this.top = Math.round(this.top);
  this.right = Math.round(this.right);
  this.bottom = Math.round(this.bottom);
  this.left = Math.round(this.left);
  return this;
};
z.g.translate = function(a, b) {
  a instanceof z.rd ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, (0,z.pa)(b) && (this.top += b, this.bottom += b));
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.pa)(b) ? b : a;
  this.left *= a;
  this.right *= a;
  this.top *= c;
  this.bottom *= c;
  return this;
};
z.g = z.sf.prototype;
z.g.ja = function() {
  return new z.sf(this.left, this.top, this.width, this.height);
};
z.g.Ur = function(a) {
  var b = Math.max(this.left, a.left), c = Math.min(this.left + this.width, a.left + a.width);
  if (b <= c) {
    var d = Math.max(this.top, a.top);
    a = Math.min(this.top + this.height, a.top + a.height);
    if (d <= a) {
      return this.left = b, this.top = d, this.width = c - b, this.height = a - d, !0;
    }
  }
  return!1;
};
z.g.contains = function(a) {
  return a instanceof z.sf ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height;
};
z.g.Zd = (0,z.n)(30);
z.g.ceil = function() {
  this.left = Math.ceil(this.left);
  this.top = Math.ceil(this.top);
  this.width = Math.ceil(this.width);
  this.height = Math.ceil(this.height);
  return this;
};
z.g.floor = function() {
  this.left = Math.floor(this.left);
  this.top = Math.floor(this.top);
  this.width = Math.floor(this.width);
  this.height = Math.floor(this.height);
  return this;
};
z.g.round = function() {
  this.left = Math.round(this.left);
  this.top = Math.round(this.top);
  this.width = Math.round(this.width);
  this.height = Math.round(this.height);
  return this;
};
z.g.translate = function(a, b) {
  a instanceof z.rd ? (this.left += a.x, this.top += a.y) : (this.left += a, (0,z.pa)(b) && (this.top += b));
  return this;
};
z.g.scale = function(a, b) {
  var c = (0,z.pa)(b) ? b : a;
  this.left *= a;
  this.width *= a;
  this.top *= c;
  this.height *= c;
  return this;
};
(0,z.Gb)("text", "file", "url");
Hf[" "] = z.ea;
var Kf = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), Jf = z.ce;
z.g = Lf.prototype;
z.g.Be = "";
z.g.As = "";
z.g.dl = "";
z.g.ki = null;
z.g.oD = "";
z.g.ow = "";
z.g.YL = !1;
z.g.Xe = !1;
z.g.toString = function() {
  var a = [], b = this.Be;
  b && a.push(Tf(b, oC), ":");
  if (b = this.Nh()) {
    a.push("//");
    var c = this.As;
    c && a.push(Tf(c, oC), "@");
    a.push((0,window.encodeURIComponent)(String(b)));
    b = this.ki;
    null != b && a.push(":", String(b));
  }
  if (b = this.ol()) {
    this.dl && "/" != b.charAt(0) && a.push("/"), a.push(Tf(b, "/" == b.charAt(0) ? pC : qC));
  }
  (b = this.Af.toString()) && a.push("?", b);
  (b = this.ow) && a.push("#", Tf(b, rC));
  return a.join("");
};
z.g.ja = function() {
  return new Lf(this);
};
z.g.Nh = function() {
  return this.dl;
};
z.g.Vl = function(a, b) {
  Nf(this);
  this.dl = b ? a ? (0,window.decodeURIComponent)(a) : "" : a;
  return this;
};
z.g.ol = function() {
  return this.oD;
};
z.g.yx = function(a) {
  this.Xe = a;
  this.Af && this.Af.yx(a);
  return this;
};
var oC = /[#\/\?@]/g, qC = /[\#\?:]/g, pC = /[\#\?]/g, Uf = /[\#\?@]/g, rC = /#/g;
z.g = Sf.prototype;
z.g.$b = null;
z.g.Ib = null;
z.g.Kb = function() {
  Yf(this);
  return this.Ib;
};
z.g.add = function(a, b) {
  Yf(this);
  this.se = null;
  a = Zf(this, a);
  var c = this.$b.get(a);
  c || this.$b.set(a, c = []);
  c.push(b);
  this.Ib++;
  return this;
};
z.g.remove = function(a) {
  Yf(this);
  a = Zf(this, a);
  return this.$b.mj(a) ? (this.se = null, this.Ib -= this.$b.get(a).length, this.$b.remove(a)) : !1;
};
z.g.clear = function() {
  this.$b = this.se = null;
  this.Ib = 0;
};
z.g.Zh = function() {
  Yf(this);
  return 0 == this.Ib;
};
z.g.mj = function(a) {
  Yf(this);
  a = Zf(this, a);
  return this.$b.mj(a);
};
z.g.ue = function() {
  Yf(this);
  for (var a = this.$b.wf(), b = this.$b.ue(), c = [], d = 0;d < b.length;d++) {
    for (var e = a[d], f = 0;f < e.length;f++) {
      c.push(b[d]);
    }
  }
  return c;
};
z.g.wf = function(a) {
  Yf(this);
  var b = [];
  if ((0,z.oa)(a)) {
    this.mj(a) && (b = eb(b, this.$b.get(Zf(this, a))));
  } else {
    a = this.$b.wf();
    for (var c = 0;c < a.length;c++) {
      b = eb(b, a[c]);
    }
  }
  return b;
};
z.g.set = function(a, b) {
  Yf(this);
  this.se = null;
  a = Zf(this, a);
  this.mj(a) && (this.Ib -= this.$b.get(a).length);
  this.$b.set(a, [b]);
  this.Ib++;
  return this;
};
z.g.get = function(a, b) {
  var c = a ? this.wf(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
z.g.toString = function() {
  if (this.se) {
    return this.se;
  }
  if (!this.$b) {
    return "";
  }
  for (var a = [], b = this.$b.ue(), c = 0;c < b.length;c++) {
    for (var d = b[c], e = (0,window.encodeURIComponent)(String(d)), d = this.wf(d), f = 0;f < d.length;f++) {
      var h = e;
      "" !== d[f] && (h += "\x3d" + (0,window.encodeURIComponent)(String(d[f])));
      a.push(h);
    }
  }
  return this.se = a.join("\x26");
};
z.g.ja = function() {
  var a = new Sf;
  a.se = this.se;
  this.$b && (a.$b = this.$b.ja(), a.Ib = this.Ib);
  return a;
};
z.g.yx = function(a) {
  a && !this.Xe && (Yf(this), this.se = null, this.$b.forEach(function(a, c) {
    var d = c.toLowerCase();
    c != d && (this.remove(c), ag(this, d, a));
  }, this));
  this.Xe = a;
};
z.g.extend = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    le(arguments[b], function(a, b) {
      this.add(b, a);
    }, this);
  }
};
bg.prototype.$c = function() {
  throw Error();
};
bg.prototype.Cb = function() {
  throw Error();
};
bg.prototype.ja = function(a) {
  return this.Cb(a.constructor, this.$c(a));
};
(0,z.p)(cg, bg);
z.Hl = new cg;
cg.prototype.$c = function(a) {
  var b = {};
  lg(a, function(c, d) {
    var e = (0,z.hg)(a, c);
    if ((0,z.jg)(a, c)) {
      if (d) {
        if (d.h()) {
          if (null == e) {
            e = null;
          } else {
            if (!Array.isArray(e)) {
              throw Error("malformed message " + e);
            }
            for (var f = [], h = 0;h < e.length;h++) {
              f[h] = eg(this, d, e[h]);
            }
            e = f;
          }
        } else {
          e = eg(this, d, e);
        }
      }
      b[c] = e;
    }
  }, this);
  return b;
};
cg.prototype.Cb = function(a, b, c) {
  if (b.hm) {
    throw Error("Already a PB message");
  }
  c = !!c;
  a = new a;
  (0,z.fg)(a, c);
  for (var d in b) {
    var e = a.ad().fields[d], f = a, h = d, k;
    k = e;
    var l = b[d], m = c;
    if (k) {
      if (k.h()) {
        if (null == l) {
          k = null;
        } else {
          if (!Array.isArray(l)) {
            throw Error("Expected array, found " + l);
          }
          for (var s = [], x = 0;x < l.length;x++) {
            s[x] = dg(this, k, l[x], m);
          }
          k = s;
        }
      } else {
        k = dg(this, k, l, m);
      }
    } else {
      k = l;
    }
    (0,z.F)(f, h, k);
    if (!e && !a.Vr(d)) {
      e = 'Trying to set field "' + d + '" not in schema "' + a.ad().name + '"';
      if (c) {
        throw Error(e);
      }
      z.da.console && z.da.console.warn && window.console.warn(e);
    }
  }
  return a;
};
z.g = z.y.prototype;
z.g.hm = !0;
z.g.Vr = z.AB;
z.g.ni = function(a) {
  for (var b in a) {
    b in this.ad().fields ? (0,z.F)(this, b, a[b]) : (z.da.console && window.console.warn("Trying to set field not in ProtoModel:", b, this.ad().name), this.data[b] = a[b], delete this.Eg[b]);
  }
  return this;
};
z.g.cb = function() {
  return z.Hl.$c(this);
};
z.g.ja = function() {
  return z.Hl.ja(this);
};
z.g.Ob = function(a) {
  if (this.constructor != a.constructor) {
    return!1;
  }
  var b = this.ad().fields, c;
  for (c in b) {
    var d = b[c], e = this.data[c], f = a.data[c], h = !1, h = d.h() ? e && f ? e.length == f.length && e.every(function(a, b) {
      return ng(this, d, a, f[b]);
    }, this) : e === f : ng(this, d, e, f);
    if (!h) {
      return!1;
    }
  }
  return!0;
};
(0,z.p)(I, z.y);
I.prototype.ti = function() {
  return this.ad().ti;
};
var sC = {EE:1, Ox:2, HE:3, JE:4, oE:5, zE:6, $isProtoEnum:!0}, tC = {PE:1, tE:2, vE:3, yE:4, $isProtoEnum:!0}, uC = {AE:1, LE:2, ME:3, DE:4, rE:5, BE:6, $isProtoEnum:!0};
(0,z.p)(z.pg, I);
H(z.pg, {name:"InternalReferrer", fields:{type:{g:function() {
  return sC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, profileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.pg.prototype.g = function() {
  return(0,z.A)(this, "type");
};
z.pg.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.pg.prototype.J = (0,z.n)(83);
z.pg.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(qg, I);
H(qg, {name:"SearchReferrer", fields:{domain:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, keywords:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
qg.prototype.Nh = function() {
  return(0,z.A)(this, "domain");
};
qg.prototype.Vl = function(a) {
  return(0,z.F)(this, "domain", a);
};
(0,z.p)(rg, I);
H(rg, {name:"SiteReferrer", fields:{href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
rg.prototype.uf = function() {
  return(0,z.A)(this, "href");
};
rg.prototype.Wl = function(a) {
  return(0,z.F)(this, "href", a);
};
rg.prototype.qb = function() {
  return(0,z.A)(this, "title");
};
rg.prototype.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
var un = new sd(500, 250), ug = (0,z.Bb)({addImageAnimationImg:"addImageAnimationImg", baseUrl:"baseUrl", bestOfFirstSlug:"bestOfFirstSlug", bestOfLatestSlug:"bestOfLatestSlug", buildLabel:"buildLabel", contributeSoonUrl:"contributeSoonUrl", currentUser:"currentUser", promoStartWritingBackgroundImage:"promoStartWritingBackgroundImage", promoStartWritingHomeImage:"promoStartWritingHomeImage", defaultPreviewImage:"defaultPreviewImage", defaultUserImage:"defaultUserImage", $K:"deviceHeight", aL:"deviceHeightImageBucket", 
deviceWidth:"deviceWidth", deviceWidthImageBucket:"deviceWidthImageBucket", devicePixelRatio:"devicePixelRatio", embedded:"embedded", embedSupportUrl:"embedSupportUrl", facebookKey:"facebookKey", helpUrl:"helpUrl", homeImageId:"homeImageId", howToPostUrl:"howToPostUrl", isAuthenticated:"isAuthenticated", isCurrentUserVerified:"isCurrentUserVerified", currentUserHasUnverifiedEmail:"currentUserHasUnverifiedEmail", jobsUrl:"jobsUrl", termsUrl:"termsUrl", language:"language", miroUrl:"miroUrl", moduleUrls:"moduleUrls", 
policyUrl:"policyUrl", postColumnWidth:"postColumnWidth", privacyUrl:"privacyUrl", productName:"productName", supportsEdit:"supportsEdit", useragent:"useragent", variants:"variants", toolbarAnimationImg:"toolbarAnimationImg", welcomeUrl:"welcomeUrl", onboardingLandscapeFooterImage:"onboardingLandscapeFooterImage", mediumTwitterScreenName:"mediumTwitterScreenName"});
Object.keys(ug);
z.vC = RegExp("(^|[^a-z0-9_!#$%^\x26*@＠/])(?:[@＠])([a-z0-9_]{1,15})", "gi");
z.sg.prototype.ja = function() {
  return new z.sg(this.start, this.end);
};
var Ag = new z.sg(600, 2E3), vn = new z.sg(200, 2E3);
z.vg = {};
var zC;
var yC;
var xC;
var wC;
wC = {CE:1, HO:10, jO:11, eO:12, wE:2, xE:3, lO:4, iO:5, pE:6, FE:7, GE:8, oP:9, $isProtoEnum:!0};
z.yn = {Rx:1, Sx:2, Wx:3, Xx:4, Es:5, LO:6, MO:7, $isProtoEnum:!0};
xC = {Px:1, AO:10, EN:102, ON:103, ZN:104, aO:105, dO:106, tO:107, vO:108, yO:109, DO:11, BO:110, EO:111, $O:112, BP:113, ZO:12, AP:13, DN:2, NN:3, YN:4, $N:5, cO:6, sO:7, uO:8, xO:9, $isProtoEnum:!0};
yC = {NE:1, sE:2, A:3, hO:4, CP:5, $isProtoEnum:!0};
zC = {UN:1, CN:2, CO:3, kP:4, $isProtoEnum:!0};
z.AC = {NONE:1, uE:2, rO:3, YO:4, $isProtoEnum:!0};
(0,z.p)(z.Bg, I);
H(z.Bg, {name:"RichTextModel", fields:{paragraphs:{g:function() {
  return Eg;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sections:{g:function() {
  return z.Ng;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Bg.prototype.qc = function() {
  return(0,z.A)(this, "paragraphs");
};
z.Bg.prototype.gc = function() {
  return(0,z.A)(this, "sections");
};
(0,z.p)(Eg, I);
H(Eg, {name:"ParagraphPb", fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, type:{g:function() {
  return wC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, markups:{g:function() {
  return z.Jg;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, dataId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, layout:{g:function() {
  return z.yn;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return z.Hg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframe:{g:function() {
  return z.Ig;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, hasDropCap:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = Eg.prototype;
z.g.getName = function() {
  return(0,z.A)(this, "name");
};
z.g.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
z.g.g = function() {
  return(0,z.A)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.g.rc = function() {
  return(0,z.A)(this, "text");
};
z.g.ri = function(a) {
  return(0,z.F)(this, "text", a);
};
z.g.getMetadata = function() {
  return(0,z.A)(this, "metadata");
};
z.g.Gc = function(a) {
  return(0,z.F)(this, "metadata", a);
};
(0,z.p)(z.Hg, I);
H(z.Hg, {name:"ImageMetadata", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundSize:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return "contain";
}, j:function() {
}, o:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Hg.prototype;
z.g.$a = function() {
  return(0,z.A)(this, "id");
};
z.g.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
z.g.Ph = function() {
  return(0,z.A)(this, "originalWidth");
};
z.g.$l = function(a) {
  return(0,z.F)(this, "originalWidth", a);
};
z.g.nl = function() {
  return(0,z.A)(this, "originalHeight");
};
z.g.Zl = function(a) {
  return(0,z.F)(this, "originalHeight", a);
};
z.g.Jd = function() {
  return(0,z.A)(this, "backgroundSize");
};
z.g.oi = function(a) {
  return(0,z.F)(this, "backgroundSize", a);
};
z.g.ll = function() {
  return(0,z.A)(this, "filter");
};
z.g.Cf = function(a) {
  return(0,z.F)(this, "filter", a);
};
(0,z.p)(z.Ig, I);
H(z.Ig, {name:"IframeMetadata", fields:{mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeSrc:null}});
z.g = z.Ig.prototype;
z.g.Qn = function() {
  return(0,z.A)(this, "mediaResourceId");
};
z.g.Rj = function(a) {
  return(0,z.F)(this, "mediaResourceId", a);
};
z.g.Jr = function() {
  return(0,z.A)(this, "iframeWidth");
};
z.g.ps = function(a) {
  return(0,z.F)(this, "iframeWidth", a);
};
z.g.sw = function() {
  return(0,z.A)(this, "iframeHeight");
};
z.g.ns = function(a) {
  return(0,z.F)(this, "iframeHeight", a);
};
(0,z.p)(z.Jg, I);
H(z.Jg, {name:"MarkupModel", fields:{type:{g:function() {
  return yC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, start:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, end:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rel:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Jg.prototype;
z.g.g = function() {
  return(0,z.A)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.g.setStart = function(a) {
  return(0,z.F)(this, "start", a);
};
z.g.setEnd = function(a) {
  return(0,z.F)(this, "end", a);
};
z.g.uf = function() {
  return(0,z.A)(this, "href");
};
z.g.Wl = function(a) {
  return(0,z.F)(this, "href", a);
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.getName = function() {
  return(0,z.A)(this, "name");
};
z.g.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
(0,z.p)(z.Ng, I);
H(z.Ng, {name:"SectionModel", fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, startIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundImage:{g:function() {
  return z.Hg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, textLayout:{g:function() {
  return zC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return "1";
}, j:function() {
}, o:function() {
}}, imageLayout:{g:function() {
  return z.AC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
  return "1";
}, j:function() {
}, o:function() {
}}, backgroundColor:{g:function() {
  return xC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Ng.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
z.Ng.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
z.Ng.prototype.ta = function() {
  return(0,z.A)(this, "startIndex");
};
z.Ng.prototype.Sd = function(a) {
  return(0,z.F)(this, "startIndex", a);
};
(0,z.p)(z.Ug, I);
H(z.Ug, {name:"PlaybackModel", fields:{title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, caption:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Hg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bodyModel:{g:function() {
  return z.Bg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Ug.prototype;
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.Ld = (0,z.n)(90);
z.g.ge = (0,z.n)(97);
z.g.vj = (0,z.n)(100);
z.g.Ul = (0,z.n)(103);
z.g.bd = function() {
  return(0,z.A)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
z.g.il = function() {
  return(0,z.A)(this, "bodyModel");
};
z.g.Tl = function(a) {
  return(0,z.F)(this, "bodyModel", a);
};
z.BC = RegExp("([\\S\\s]*?)(\\b(?:mailto:)?([\\w.+-]+@[A-Za-z0-9.-]+\\.(?:com|org|net|edu|gov|aero|biz|cat|coop|info|int|jobs|mobi|museum|name|pro|travel|arpa|asia|xxx|[a-z][a-z])\\b)|\\b(?:(https?|ftp)://|www\\.)\\w[\\w~#-@!\\[\\]]*|$)", "g");
var EC;
var ih = new z.Zg;
$g(ih, null);
z.CC = dh();
z.DC = dh();
(0,z.ch)(z.DC, "BR");
var jh = dh();
(0,z.ch)(jh, "A", ["href", "title", "rel"]);
(0,z.ch)(jh, "BR");
(0,z.ch)(jh, "STRONG", ["id"], ["B"]);
(0,z.ch)(jh, "EM", [], ["I"]);
var fh = dh();
fh.De = (0,z.Ab)(jh.De);
(0,z.ch)(fh, "IMG", ["data-image-id", "src", "width", "height"]).td = ih;
var gh = dh();
(0,z.ch)(gh, "IMG", ["data-image-id", "src", "width", "height"]).td = ih;
(0,z.ch)(gh, "FIGCAPTION", {"class":["content-caption", "image-caption"], "data-image-id":!0}).td = jh;
var hh = dh();
(0,z.ch)(hh, "LI", ["name"]).td = jh;
EC = eh();
z.FC = eh();
(0,z.ch)(z.FC, "SECTION", {name:!0, "class":!0}).td = EC;
var mh = (0,z.Gb)(["cupstep.com", "hatch.dm", "medium.com", "localhost"]);
z.GC = {"":1, n:Math.pow(1024, -3), u:Math.pow(1024, -2), m:1 / 1024, k:1024, K:1024, M:Math.pow(1024, 2), G:Math.pow(1024, 3), T:Math.pow(1024, 4), P:Math.pow(1024, 5)};
z.w && (0,z.id)(8);
var sh = {}, Bh = {}, Hh = {}, Kh = {};
var oh = {}, ph = {}, Eh = /['()]/g, Rh = {"\x00":"\x26#0;", '"':"\x26quot;", "\x26":"\x26amp;", "'":"\x26#39;", "\x3c":"\x26lt;", "\x3e":"\x26gt;", "\t":"\x26#9;", "\n":"\x26#10;", "\x0B":"\x26#11;", "\f":"\x26#12;", "\r":"\x26#13;", " ":"\x26#32;", "-":"\x26#45;", "/":"\x26#47;", "\x3d":"\x26#61;", "`":"\x26#96;", "":"\x26#133;", " ":"\x26#160;", "\u2028":"\x26#8232;", "\u2029":"\x26#8233;"}, Sh = {"\x00":"%00", "":"%01", "":"%02", "":"%03", "":"%04", "":"%05", "":"%06", "":"%07", "\b":"%08", 
"\t":"%09", "\n":"%0A", "\x0B":"%0B", "\f":"%0C", "\r":"%0D", "":"%0E", "":"%0F", "":"%10", "":"%11", "":"%12", "":"%13", "":"%14", "":"%15", "":"%16", "":"%17", "":"%18", "":"%19", "":"%1A", "":"%1B", "":"%1C", "":"%1D", "":"%1E", "":"%1F", " ":"%20", '"':"%22", "'":"%27", "(":"%28", ")":"%29", "\x3c":"%3C", "\x3e":"%3E", "\\":"%5C", "{":"%7B", "}":"%7D", "":"%7F", "":"%C2%85", " ":"%C2%A0", "\u2028":"%E2%80%A8", "\u2029":"%E2%80%A9", "！":"%EF%BC%81", "＃":"%EF%BC%83", "＄":"%EF%BC%84", 
"＆":"%EF%BC%86", "＇":"%EF%BC%87", "（":"%EF%BC%88", "）":"%EF%BC%89", "＊":"%EF%BC%8A", "＋":"%EF%BC%8B", "，":"%EF%BC%8C", "／":"%EF%BC%8F", "：":"%EF%BC%9A", "；":"%EF%BC%9B", "＝":"%EF%BC%9D", "？":"%EF%BC%9F", "＠":"%EF%BC%A0", "［":"%EF%BC%BB", "］":"%EF%BC%BD"}, th = /[\x00\x22\x26\x27\x3c\x3e]/g, wh = /[\x00\x22\x27\x3c\x3e]/g, Ch = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g, Ih = /^(?!-*(?:expression|(?:moz-)?binding))(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|-?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:[a-z]{1,2}|%)?|!important|)$/i, 
Th = /^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i, Vh = /^(?!script|style|title|textarea|xmp|no)[a-z0-9_$:-]*$/i, xh = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g, yh = /</g;
z.Mr = {image:{type:"image", defaultValue:null, englishName:"image", HC:!0, BT:["caption"], strategy:{cover:{type:"crop-preserve", height:0.42}, contain:{type:"resample", width:700}, full:{type:"crop-fixed"}}}, caption:{type:"oneliner", defaultValue:"Add a photo credit", englishName:"image caption", HC:!0, kM:!0}, body:{type:"html", defaultValue:"Write your story", englishName:"article text", eR:!0}, subtitle:{type:"oneliner", defaultValue:"Subtitle", englishName:"subtitle", HC:!0}};
var ji;
var rB;
var Js;
var IC;
z.HC = "ontouchstart" in window.document.documentElement;
IC = window.navigator.pointerEnabled || window.navigator.msPointerEnabled;
Js = "pushState" in window.history && "replaceState" in window.history;
z.JC = "FileReader" in window;
rB = "postMessage" in window && (!z.w || (0,z.id)(11));
ji = !z.Qe && !z.w;
var ci = !!window.addEventListener, di = ci ? "addEventListener" : "attachEvent", ei = ci ? "removeEventListener" : "detachEvent";
vi.prototype.D = function(a, b, c) {
  this.Cg[a] || (this.Cg[a] = []);
  this.Cg[a].push({hl:b, Cr:c});
  return this;
};
vi.prototype.clear = function(a) {
  return "undefined" == typeof a ? (this.Cg = {}, !0) : wi(this, a) ? (delete this.Cg[a], !0) : !1;
};
vi.prototype.Zc = function(a) {
  var b, c = [];
  wi(this, a.he || "") && (0,z.gb)(c, this.Cg[a.he]);
  wi(this, "*") && (0,z.gb)(c, this.Cg["*"]);
  for (var d = 0;d < c.length;d++) {
    b = b || !!c[d].hl.call(c[d].Cr, a);
  }
  return b;
};
var Ai = null, Ci = !1, Fi = {}, Ei = 0;
var Qi = {};
(0,z.p)(z.Ri, z.wc);
Si("start");
Si("iteration");
var KC = Si("end");
z.g = z.Ri.prototype;
z.g.CF = function() {
  (0,z.$h)(this.Ns);
  this.Ns = null;
  (0,z.uf)(this.pa, "animation", "");
};
z.g.start = function() {
  if ("unsupported" == Pi()) {
    return this.Ea(), this;
  }
  (0,z.xf)(this.pa, "animation");
  var a = (0,z.Kb)(this.wq, function(a) {
    var c = [a.name, a.duration + "ms"];
    a.timing && c.push(a.timing);
    a.sd && c.push(a.sd + "ms");
    a.fill && c.push(a.fill);
    a.direction && c.push(a.direction);
    a.cM && c.push(a.cM);
    return c.join(" ");
  });
  this.Ns = (0,z.R)(this.pa, KC, this.xH, this);
  (0,z.uf)(this.pa, "animation", a.join(","));
  Ui(this);
  return this;
};
z.g.pause = function(a) {
  return(0,z.Ti)(this, !0, a);
};
z.g.zo = (0,z.n)(104);
z.g.xH = function(a) {
  var b = this.dp[a.animationName] = !0;
  this.wq.forEach(function(c) {
    b = b && !!this.dp[c.name];
    c.name == a.animationName && (c.paused = !0);
  }, this);
  b && this.Ea();
};
(0,z.p)(Vi, z.v);
z.g = Vi.prototype;
z.g.JC = 1;
z.g.so = 0;
z.g.F = function(a, b, c) {
  var d = this.Df[a];
  d || (d = this.Df[a] = []);
  var e = this.JC;
  this.Ce[e] = a;
  this.Ce[e + 1] = b;
  this.Ce[e + 2] = c;
  this.JC = e + 3;
  d.push(e);
  return e;
};
z.g.Ba = function(a, b, c) {
  if (a = this.Df[a]) {
    var d = this.Ce;
    if (a = (0,z.Za)(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c;
    })) {
      return this.em(a);
    }
  }
  return!1;
};
z.g.em = function(a) {
  if (0 != this.so) {
    return this.qo || (this.qo = []), this.qo.push(a), !1;
  }
  var b = this.Ce[a];
  if (b) {
    var c = this.Df[b];
    c && (0,z.cb)(c, a);
    delete this.Ce[a];
    delete this.Ce[a + 1];
    delete this.Ce[a + 2];
  }
  return!!b;
};
z.g.X = function(a, b) {
  var c = this.Df[a];
  if (c) {
    this.so++;
    for (var d = (0,z.lb)(arguments, 1), e = 0, f = c.length;e < f;e++) {
      var h = c[e];
      this.Ce[h + 1].apply(this.Ce[h + 2], d);
    }
    this.so--;
    if (this.qo && 0 == this.so) {
      for (;c = this.qo.pop();) {
        this.em(c);
      }
      this.mf && Wi(this);
    }
    return 0 != e;
  }
  return!1;
};
z.g.clear = function(a) {
  if (a) {
    var b = this.Df[a];
    b && ((0,z.rb)(b, this.em, this), delete this.Df[a]);
  } else {
    this.Ce.length = 0, this.Df = {};
  }
};
z.g.Kb = function(a) {
  if (a) {
    var b = this.Df[a];
    return b ? b.length : 0;
  }
  a = 0;
  for (b in this.Df) {
    a += this.Kb(b);
  }
  return a;
};
z.g.C = function() {
  Vi.w.C.call(this);
  if (0 != this.so) {
    for (var a = 1;a < this.Ce.length;a += 3) {
      this.em(a);
    }
  } else {
    Wi(this);
  }
};
var Zi = function() {
  try {
    if (!window.localStorage) {
      return!1;
    }
    window.localStorage.setItem("storage-test", "1");
    return!!window.localStorage.getItem("storage-test");
  } catch (a) {
    return!1;
  }
}();
z.g = Xi.prototype;
z.g.put = function(a, b) {
  var c = this.uq + "|" + a;
  Zi ? window.localStorage.setItem(c, JSON.stringify(b)) : this.xm[c] = b;
};
z.g.get = function(a) {
  a = this.uq + "|" + a;
  if (Zi) {
    if (a = window.localStorage.getItem(a)) {
      try {
        return JSON.parse(a);
      } catch (b) {
      }
    }
  } else {
    return this.xm[a];
  }
};
z.g.remove = function(a) {
  a = this.uq + "|" + a;
  Zi ? window.localStorage.removeItem(a) : delete this.xm[a];
};
z.g.ue = function() {
  if (Zi) {
    var a = [], b = this.uq + "|", c;
    for (c in window.localStorage) {
      (0,z.Da)(c, b) && a.push(c.substr(b.length));
    }
    a.sort();
    return a;
  }
  return xb(this.xm);
};
z.g.wf = function() {
  return wb(Yi(this));
};
z.g.Kb = function() {
  return this.ue().length;
};
$i.prototype.rx = function(a, b) {
  this.sb.put("X", this.tm);
  bj(this) ? (this.sb.put("Y", this.tm + "|" + (0,z.aj)()), String(this.sb.get("X") || "") != this.tm ? window.setTimeout(function() {
    String(this.sb.get("Y") || "").split("|")[0] == this.tm ? cj(this, a, b) : window.setTimeout(this.rx.bind(this, a, b), 500);
  }.bind(this), Math.round(100 * Math.random())) : cj(this, a, b)) : window.setTimeout(this.rx.bind(this, a, b), 500);
};
$i.prototype.ty = function() {
  String(this.sb.get("Y") || "").split("|")[0] == this.tm && this.sb.remove("Y");
};
dj.prototype.AA = function() {
  this.Lq || this.mH.rx(function() {
    var a = Yi(this.sb);
    gj(this, a);
    var b = wb(a);
    if (0 === b.length) {
      return null;
    }
    this.Lq = !0;
    window.clearTimeout(this.Tq);
    this.Tq = null;
    return(0,z.Cc)((0,z.q)(this.ea.post(this.Vc, b, {na:!0, ce:3, background:!0}), function() {
      for (var b in a) {
        this.sb.remove(b);
      }
    }, this), function() {
      this.Lq = !1;
      this.sb.Kb() ? (this.hp = Math.min(3E5, 2 * this.hp), ej(this)) : this.hp = this.bK;
    }, this);
  }, this);
};
dj.prototype.Gt = function() {
  this.AA();
};
jj.prototype.AB = null;
jj.prototype.jC = function() {
  var a;
  (a = this.AB) || (a = {}, mj(this) && (a[0] = !0, a[1] = !0), a = this.AB = a);
  return a;
};
var nj;
(0,z.p)(kj, jj);
nj = new kj;
(0,z.p)(qj, z.Ca);
qj.prototype.name = "XhrError";
(0,z.p)(rj, qj);
rj.prototype.name = "XhrHttpError";
(0,z.p)(sj, qj);
sj.prototype.name = "XhrTimeoutError";
var wj, Fj = 0, Sb = null, Gj = [], uj = {}, Ej = [];
Hj.prototype.Yj = function(a) {
  if (!a || !(0,z.qa)(a)) {
    return a;
  }
  a.__guard_originalFn = a;
  return function() {
    try {
      a.apply(this, arguments);
    } catch (b) {
      var c;
      c = b;
      c.stack ? (c = c.stack.split("\n"), c = /[^@]+@.*\/_\/fp\/js\//.test(c[0]) || /\/_\/fp\/js\//.test(c[1])) : c = c.fileName ? /\/_\/fp\/js\//.test(c.fileName) : !0;
      c && (0,z.ij)(b);
      throw b;
    }
  };
};
(0,z.p)(z.Ij, Vi);
z.Ij.prototype.X = function(a, b) {
  return this.mf ? !1 : Vi.prototype.X.apply(this, arguments);
};
z.Ij.prototype.F = function(a, b, c) {
  var d = Jj(this, b);
  d || (d = function() {
    try {
      b.apply(this, arguments);
    } catch (a) {
      (0,z.Cj)(a);
    }
  }, this.gn.push([b, d]));
  return z.Ij.w.F.call(this, a, d, c);
};
z.Ij.prototype.Ba = function(a, b, c) {
  return(b = Jj(this, b)) ? z.Ij.w.Ba.call(this, a, b, c) : !1;
};
z.Ij.prototype.C = function() {
  this.gn.length = 0;
  z.Ij.w.C.call(this);
};
(0,z.p)(z.Kj, z.Ij);
z.g = z.Kj.prototype;
z.g.H = function() {
  this.wg = !0;
};
z.g.ka = function() {
  this.wg = !1;
  for (var a = 0;a < this.xq.length;a++) {
    var b = this.xq[a];
    b[0].mf || b[0].em(b[1]);
  }
  this.xq.length = 0;
  (0,z.$h)(this.ya);
  this.ya.length = 0;
};
z.g.Pd = function() {
  return this.wg;
};
z.g.qa = function(a, b, c, d, e) {
  this.ya.push((0,z.R)(a, b, c, d || this, e));
  return this;
};
z.g.C = function() {
  this.wg && this.ka();
  z.Kj.w.C.call(this);
};
(0,z.p)(Mj, z.Kj);
var LC = Math.PI / 12;
z.g = Mj.prototype;
z.g.qn = null;
z.g.Pp = 0;
z.g.Qp = 0;
z.g.H = function() {
  Mj.w.H.call(this);
  IC ? (this.qa(window.document, "pointerdown", this.iA.bind(this, "pointer")), this.qa(window.document, "pointerup", this.dq.bind(this, "pointer")), this.qa(window.document, "pointercancel", this.dq.bind(this, "pointer"))) : (this.qa(window.document, "touchstart", this.iA.bind(this, "touch")), this.qa(window.document, "touchmove", this.uu), this.qa(window.document, "touchend", this.dq.bind(this, "touch")), this.qa(window.document, "touchcancel", this.dq.bind(this, "touch")));
};
z.g.F = function(a, b, c) {
  if (0 !== this.Kb(a)) {
    throw Error('GestureHandler already has a subscriber for "' + a + '"');
  }
  return Mj.w.F.call(this, a, b, c);
};
z.g.iA = function(a, b) {
  b.touches && 1 != b.touches.length || (this.qn = {type:a, left:b.touches ? b.touches[0].clientX : b.clientX, top:b.touches ? b.touches[0].clientY : b.clientY, timestamp:(0,z.aj)()}, "touch" == a && (this.Pp = b.touches[0].clientX, this.Qp = b.touches[0].clientY));
};
z.g.uu = function(a) {
  a.touches && 1 != a.touches.length || (this.Pp = a.touches[0].clientX, this.Qp = a.touches[0].clientY);
};
z.g.dq = function(a, b) {
  if (this.qn && a == this.qn.type) {
    var c = this.qn, d = "touch" == a ? this.Pp : b.clientX, e = "touch" == a ? this.Qp : b.clientY, f = (0,z.aj)() - c.timestamp, h = Math.abs(d - c.left), e = Math.abs(e - c.top), k = Math.atan(e / h), c = d < c.left;
    this.qn = null;
    this.Qp = this.Pp = 0;
    15 > f || 450 < f || 10 > h || k > LC || window.getSelection().isCollapsed && this.X(c ? "flickleft" : "flickright", {UQ:f, VQ:h, WQ:e, YQ:k});
  }
};
(0,z.p)(gk, z.v);
z.g = gk.prototype;
z.g.C = function() {
  (0,z.$h)(this.pz);
  delete this.pz;
  this.tp.Ba("flickleft", this.Tz, this);
  this.tp.Ba("flickright", this.Uz, this);
  gk.w.C.call(this);
};
z.g.vf = function() {
  var a = this.Z ? rk(this.la, this.Z) + 1 : 0, b = (0,z.pk)(this.la, a);
  return b ? (0,z.Jc)(b) : (0,z.q)(Ak(this.la, 5), function() {
    return(0,z.pk)(this.la, a);
  }, this);
};
z.g.pu = function(a) {
  (0,z.Zd)(a.target, z.ti) || "INPUT" == a.target.tagName || (39 == a.keyCode ? ik(this) : 37 == a.keyCode && window.history.back());
};
z.g.Tz = function() {
  ik(this);
};
z.g.Uz = function() {
  window.history.back();
};
z.g.tA = function() {
  (0,z.q)(this.vf(), function(a) {
    a && (a = (0,z.K)(dk, {post:a.cb()}), Rs(this.ha, a));
  }, this);
};
z.g.tK = function(a, b) {
  var c = new z.Ri(a, {name:"fade-back-out", duration:500}), d = new z.Ri(b, {name:"slide-left-in", duration:500});
  (0,z.q)(c, function() {
    a.style.visibility = "hidden";
    a.style.display = "none";
    (0,z.ri)(a);
  });
  b.style.display = "block";
  b.style.visibility = "visible";
  (0,z.ri)(b);
  d.start();
  c.start();
  return d;
};
(0,z.p)(z.kk, z.Ij);
z.g = z.kk.prototype;
z.g.ni = function(a) {
  for (var b in a) {
    this.set(b, a[b]);
  }
  return this;
};
z.g.set = function(a, b) {
  for (var c = a.split("."), d = c[0], e = this.sb;1 < c.length;) {
    if (e = this.sb[c.shift()], !e || "object" != typeof e) {
      throw Error("Unable to call set() on non-object for key\x3d" + a);
    }
  }
  c = c[0];
  e[c] != b && (e[c] = b, this.ot[d] = 1, this.X(d, this.sb[d], this), this.X("change", d, this));
  return this;
};
z.g.add = function(a, b, c) {
  if (!this.sb[a]) {
    this.sb[a] = [];
  } else {
    if (!(0,z.ma)(this.sb[a])) {
      throw Error("add() called on non array, key\x3d" + a);
    }
  }
  "undefined" == typeof c ? this.sb[a].push(b) : this.sb[a][c] = b;
  this.ot[a] = 1;
  this.X(a, b, this);
  this.X("change", a, this);
  return this;
};
z.g.removeItem = function(a, b) {
  if (!(0,z.ma)(this.sb[a])) {
    throw Error("removeItem() called on non array, key\x3d" + a);
  }
  this.sb[a].splice(b, 1);
  this.ot[a] = 1;
  this.X(a, this.sb[a], this);
  this.X("change", a, this);
  return this;
};
z.g.get = function(a) {
  a = a.split(".");
  for (var b, c = this.sb;(b = a.shift()) && (c = c[b]);) {
  }
  return c;
};
z.g.cb = function() {
  return this.sb;
};
(0,z.p)(z.ok, z.Ij);
z.g = z.ok.prototype;
z.g.add = function(a) {
  this.Fh(a, this.Qa.length);
};
z.g.Fh = function(a, b) {
  a && (a = a instanceof z.kk ? a : this.Gn(a), sk(this, a), kb(this.Qa, b, 0, a), this.X("add", [a], this));
};
z.g.Pf = function(a) {
  for (var b = [], c = 0;c < a.length;c++) {
    var d;
    d = a[c];
    d = d instanceof z.kk ? d : this.Gn(d);
    sk(this, d);
    this.Qa.push(d);
    b.push(d);
  }
  this.X("add", b, this);
};
z.g.remove = function(a) {
  var b = (0,z.cb)(this.Qa, a);
  b && (tk(this, a), this.X("remove", a, this));
  return b;
};
z.g.Pl = function(a) {
  return(a = (0,z.qk)(this, "id", a)) ? this.remove(a) : !1;
};
z.g.update = function(a) {
  if (0 === this.count()) {
    this.Pf(a);
  } else {
    for (var b = {}, c = {}, d = 0;d < this.Qa.length;d++) {
      var e = this.Qa[d].get("id");
      b[e] = this.Qa[d];
      c[e] = d;
    }
    d = [];
    for (e = this.Qa.length = 0;e < a.length;e++) {
      var f = a[e].get("id"), h = b[f];
      h ? (c[f] != e && (this.X("remove", h, this), d.push(h)), this.Qa.push(h), h !== a[e] && h.ni(a[e].cb())) : (d.push(a[e]), this.Qa.push(a[e]), sk(this, a[e]));
      delete b[f];
    }
    for (var k in b) {
      tk(this, b[k]), this.X("remove", b[k], this);
    }
    this.X("add", d, this);
  }
  return this;
};
z.g.Kb = function() {
  return this.Qa.length;
};
z.g.count = function() {
  return this.Kb();
};
z.g.Bc = (0,z.n)(105);
z.g.filter = function(a, b) {
  return(0,z.Sc)(this.Qa, a, b);
};
z.g.find = function(a, b) {
  return(0,z.Za)(this.Qa, a, b);
};
z.g.indexOf = function(a) {
  for (var b = 0;b < this.Qa.length;b++) {
    if (this.Qa[b] === a) {
      return b;
    }
  }
  return-1;
};
z.g.cb = function(a, b) {
  var c = a ? this.filter(a, b) : this.Qa;
  return(0,z.Kb)(c, function(a) {
    return a.cb();
  });
};
z.g.qs = function(a, b) {
  this.TC[a] = String(b);
  return this;
};
z.g.Rn = function(a) {
  return this.TC[a] || null;
};
z.g.Gn = function(a) {
  return new z.kk(a);
};
z.g.$z = function(a, b) {
  this.X("change", [{jo:b, hQ:[a]}]);
};
z.g.bA = function(a) {
  this.remove(a);
};
(0,z.p)(uk, z.ok);
z.g = uk.prototype;
z.g.wl = !1;
z.g.Di = !0;
z.g.My = function(a) {
  var b = this.count();
  if (b >= this.np || !this.Di) {
    return(0,z.Jc)(this);
  }
  b = this.Ny(this.np - b);
  a = this.Di ? this.js.send(this.yp, yk(this, b), b, {na:!0, background:!!a}) : (0,z.Jc)({});
  this.wl || a.kj(this.Ac);
  this.wl = !0;
  this.Ac = a;
  (0,z.r)((0,z.q)((0,z.Cc)(a, this.yD, this), this.oJ, this), this.dD, this);
  return zk(this, this.Ac);
};
z.g.oJ = function(a) {
  a = vk(this, a);
  (this.Di = 0 !== a.length) && a && this.Pf(a);
};
z.g.kj = function(a) {
  this.wl || this.Ac.Nc ? wk(this) && (0,z.Dc)(a, this.Ac) : a.kj(this.Ac);
  return a;
};
z.g.dD = function(a) {
  a instanceof qj || (0,z.Cj)(a);
};
z.g.yD = function() {
  this.Ac = (0,z.Jc)(this);
};
(0,z.p)(z.Bk, uk);
z.Bk.prototype.yp = "GET";
z.Bk.prototype.Ug = function(a) {
  return a;
};
z.Bk.prototype.xM = function(a) {
  a = vk(this, a);
  a = (0,z.Kb)(a, this.Gn, this);
  this.update(a);
  return this;
};
var Mk = null, Ik = {};
var $k = (0,z.aj)(), hk = "home";
Pk.prototype.cd = function() {
  var a = (0,z.Vk)(this, "myposts", "/me/posts", "GET");
  (0,z.Vk)(this, hk, "/home/load-more", "POST");
  var b = Sk(this, "my-collections", "/me/collections"), c = Sk(this, "recommended", "/collections/recommended"), d = Sk(this, "recently-viewed", "/me/collections/viewed");
  (0,z.J)("isAuthenticated") && window.setTimeout(function() {
    (0,z.xk)(a);
    (0,z.xk)(b);
    (0,z.xk)(c);
    (0,z.xk)(d);
  }.bind(this), 5E3);
};
Pk.prototype.Bb = function(a) {
  if (!a) {
    throw Error("Missing id");
  }
  return this.Fk[a];
};
Pk.prototype.jl = function() {
  return this.Zs["my-collections"];
};
Pk.prototype.Kr = function() {
  return this.Db.myposts;
};
(0,z.p)(Wk, z.Bk);
Wk.prototype.Gn = function(a) {
  return(0,z.Qk)(this.aa, a);
};
(0,z.p)(Tk, z.Bk);
Tk.prototype.Gn = function(a) {
  return(0,z.Zk)(this.aa, a);
};
z.bl.prototype.Ci = function() {
  return this.xh.qc() || [];
};
z.bl.prototype.mk = function() {
  return this.xh.gc() || [];
};
z.bl.prototype.Vf = function(a) {
  return(a = this.Ci()[a]) && Fg(a);
};
var MC = {mO:1, vP:10, KE:11, IE:12, VO:2, uP:3, xP:4, wP:5, tP:6, sP:7, nO:8, WO:9, RN:99, $isProtoEnum:!0};
(0,z.p)(hl, I);
H(hl, {name:"InsertParagraphAt", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, paragraph:{g:function() {
  return Eg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = hl.prototype;
z.g.g = function() {
  return(0,z.A)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.g.Fb = function() {
  return(0,z.A)(this, "index");
};
z.g.nb = function(a) {
  return(0,z.F)(this, "index", a);
};
z.g.Lg = function() {
  return(0,z.A)(this, "paragraph");
};
z.g.gg = function(a) {
  return(0,z.F)(this, "paragraph", a);
};
(0,z.p)(il, I);
H(il, {name:"RemoveParagraphAt", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
il.prototype.g = function() {
  return(0,z.A)(this, "type");
};
il.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
il.prototype.Fb = function() {
  return(0,z.A)(this, "index");
};
il.prototype.nb = function(a) {
  return(0,z.F)(this, "index", a);
};
(0,z.p)(jl, I);
H(jl, {name:"UpdateParagraphAt", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, paragraph:{g:function() {
  return Eg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = jl.prototype;
z.g.g = function() {
  return(0,z.A)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.g.Fb = function() {
  return(0,z.A)(this, "index");
};
z.g.nb = function(a) {
  return(0,z.F)(this, "index", a);
};
z.g.Lg = function() {
  return(0,z.A)(this, "paragraph");
};
z.g.gg = function(a) {
  return(0,z.F)(this, "paragraph", a);
};
(0,z.p)(kl, I);
H(kl, {name:"UpdateTitle", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
kl.prototype.g = function() {
  return(0,z.A)(this, "type");
};
kl.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
kl.prototype.rc = function() {
  return(0,z.A)(this, "text");
};
kl.prototype.ri = function(a) {
  return(0,z.F)(this, "text", a);
};
(0,z.p)(ll, I);
H(ll, {name:"UpdateSubtitle", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
ll.prototype.g = function() {
  return(0,z.A)(this, "type");
};
ll.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
ll.prototype.rc = function() {
  return(0,z.A)(this, "text");
};
ll.prototype.ri = function(a) {
  return(0,z.F)(this, "text", a);
};
(0,z.p)(ml, I);
H(ml, {name:"UpdateCaption", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, text:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
ml.prototype.g = function() {
  return(0,z.A)(this, "type");
};
ml.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
ml.prototype.rc = function() {
  return(0,z.A)(this, "text");
};
ml.prototype.ri = function(a) {
  return(0,z.F)(this, "text", a);
};
(0,z.p)(nl, I);
H(nl, {name:"UpdateImage", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Hg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
nl.prototype.g = function() {
  return(0,z.A)(this, "type");
};
nl.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
nl.prototype.bd = function() {
  return(0,z.A)(this, "image");
};
nl.prototype.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
(0,z.p)(ol, I);
H(ol, {name:"InsertSectionAt", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, section:{g:function() {
  return z.Ng;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = ol.prototype;
z.g.g = function() {
  return(0,z.A)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.g.Fb = function() {
  return(0,z.A)(this, "index");
};
z.g.nb = function(a) {
  return(0,z.F)(this, "index", a);
};
z.g.Wf = function() {
  return(0,z.A)(this, "section");
};
z.g.hg = function(a) {
  return(0,z.F)(this, "section", a);
};
(0,z.p)(pl, I);
H(pl, {name:"RemoveSectionAt", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
pl.prototype.g = function() {
  return(0,z.A)(this, "type");
};
pl.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
pl.prototype.Fb = function() {
  return(0,z.A)(this, "index");
};
pl.prototype.nb = function(a) {
  return(0,z.F)(this, "index", a);
};
(0,z.p)(ql, I);
H(ql, {name:"UpdateSectionAt", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, index:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, section:{g:function() {
  return z.Ng;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = ql.prototype;
z.g.g = function() {
  return(0,z.A)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.g.Fb = function() {
  return(0,z.A)(this, "index");
};
z.g.nb = function(a) {
  return(0,z.F)(this, "index", a);
};
z.g.Wf = function() {
  return(0,z.A)(this, "section");
};
z.g.hg = function(a) {
  return(0,z.F)(this, "section", a);
};
(0,z.p)(z.rl, I);
H(z.rl, {name:"Revert", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rev:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.rl.prototype.g = function() {
  return(0,z.A)(this, "type");
};
z.rl.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.rl.prototype.We = (0,z.n)(109);
z.rl.prototype.pi = (0,z.n)(113);
(0,z.p)(sl, I);
H(sl, {name:"Publish", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
sl.prototype.g = function() {
  return(0,z.A)(this, "type");
};
sl.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
(0,z.p)(tl, I);
H(tl, {name:"Failure", fields:{type:{g:function() {
  return MC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
tl.prototype.g = function() {
  return(0,z.A)(this, "type");
};
tl.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
var xl;
xl = {};
z.wl = {};
ul.prototype.Qg = CB;
(0,z.p)(z.Jl, I);
H(z.Jl, {name:"PostPayload", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return z.Kl;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postTypeName:null, collectionSlug:null, intendedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deltas:{g:function() {
  return Object;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, baseRev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
  return-1;
}, j:function() {
}, o:function() {
}}, baseVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverless:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Jl.prototype;
z.g.$a = function() {
  return(0,z.A)(this, "id");
};
z.g.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.ua = (0,z.n)(123);
z.g.Gb = (0,z.n)(133);
z.g.Xl = (0,z.n)(136);
z.g.tj = (0,z.n)(139);
z.g.Pj = (0,z.n)(142);
z.g.fg = (0,z.n)(145);
(0,z.p)(z.Kl, I);
H(z.Kl, {name:"PostContent", fields:{body:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, caption:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Hg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bodyModel:{g:function() {
  return z.Bg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Kl.prototype;
z.g.Ld = (0,z.n)(89);
z.g.ge = (0,z.n)(96);
z.g.vj = (0,z.n)(99);
z.g.Ul = (0,z.n)(102);
z.g.bd = function() {
  return(0,z.A)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
z.g.il = function() {
  return(0,z.A)(this, "bodyModel");
};
z.g.Tl = function(a) {
  return(0,z.F)(this, "bodyModel", a);
};
(0,z.p)(z.Ll, I);
H(z.Ll, {name:"PostView", fields:{createdAtRelative:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAtRelative:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAtRelative:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, allowNotes:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, previewImage:{g:function() {
  return z.Nl;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, snippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, wordCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readingTime:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionStatusInfo:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, currentCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isOnReadingList:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, cleanContent:{g:function() {
  return z.Ml;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metaDescription:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bodyHtml:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userPostRelation:{g:function() {
  return z.tu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, languageTier:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersBySocialRecommends:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesBySocialRecommends:{g:function() {
  return z.Ot;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Ll.prototype.Ld = (0,z.n)(88);
z.Ll.prototype.ge = (0,z.n)(95);
(0,z.p)(z.Ml, I);
H(z.Ml, {name:"PostViewContent", fields:{body:null, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, caption:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Nl;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bodyModel:{g:function() {
  return z.Bg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Ml.prototype;
z.g.Ld = (0,z.n)(87);
z.g.ge = (0,z.n)(94);
z.g.vj = (0,z.n)(98);
z.g.Ul = (0,z.n)(101);
z.g.bd = function() {
  return(0,z.A)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
z.g.il = function() {
  return(0,z.A)(this, "bodyModel");
};
z.g.Tl = function(a) {
  return(0,z.F)(this, "bodyModel", a);
};
(0,z.p)(z.Nl, I);
H(z.Nl, {name:"PostViewImage", fields:{type:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundSize:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, attribution:null, attributionUrl:null, strategy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, width:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, height:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Nl.prototype;
z.g.g = function() {
  return(0,z.A)(this, "type");
};
z.g.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.g.Uf = (0,z.n)(150);
z.g.fe = (0,z.n)(155);
z.g.Jd = function() {
  return(0,z.A)(this, "backgroundSize");
};
z.g.oi = function(a) {
  return(0,z.F)(this, "backgroundSize", a);
};
z.g.Ph = function() {
  return(0,z.A)(this, "originalWidth");
};
z.g.$l = function(a) {
  return(0,z.F)(this, "originalWidth", a);
};
z.g.nl = function() {
  return(0,z.A)(this, "originalHeight");
};
z.g.Zl = function(a) {
  return(0,z.F)(this, "originalHeight", a);
};
z.g.qi = (0,z.n)(159);
z.g.sl = function() {
  return(0,z.A)(this, "width");
};
z.g.Tj = function(a) {
  return(0,z.F)(this, "width", a);
};
z.g.Ve = function() {
  return(0,z.A)(this, "height");
};
z.g.Qj = function(a) {
  return(0,z.F)(this, "height", a);
};
z.g.$a = function() {
  return(0,z.A)(this, "id");
};
z.g.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
z.g.ll = function() {
  return(0,z.A)(this, "filter");
};
z.g.Cf = function(a) {
  return(0,z.F)(this, "filter", a);
};
z.g = z.Ol.prototype;
z.g.Ir = function(a) {
  for (var b = [];a < this.mc.length;a++) {
    b.push(z.Hl.ja(this.mc[a].delta));
  }
  return b;
};
z.g.vl = (0,z.n)(161);
z.g.ej = (0,z.n)(162);
z.g.fl = (0,z.n)(164);
z.g.dm = function() {
  if (!this.mc.length) {
    return null;
  }
  for (var a = [], b = [], c = (0,z.Ya)(this.mc).fj, d = 0, e = Math.max(0, this.iu), f = this.mc.length - 1;f >= e;f--) {
    var h = this.mc[f];
    h.selection && a.length && (b[a.length - 1] = h.selection);
    if (h.IC) {
      if (a.length) {
        break;
      }
      d++;
    } else {
      if (d) {
        d--;
        if (0 === f) {
          return null;
        }
        c = this.mc[f - 1].fj;
      } else {
        if (1E3 <= c - h.fj && h.selection) {
          break;
        }
        a.push(h);
      }
    }
  }
  if (!a.length) {
    return null;
  }
  c = [];
  for (f = 0;f < a.length;f++) {
    d = a[f], e = (0,z.zl)(d.Ik), (0,z.Dl)(e, this.vk), e.IC = !0, e.fj = (0,z.aj)(), e.selection = b[f] || null, this.mc.push(e), c.push(d), this.Ai && this.Ai.call(null, z.Hl.ja(e.delta));
  }
  this.Tu.push(c);
  return(0,z.Ya)(this.mc).selection;
};
z.g.hs = (0,z.n)(165);
(0,z.p)(Rl, ul);
vl(1, hl, Rl);
Rl.prototype.Qe = function(a) {
  var b = Bl(a), c = this.delta.Fb();
  if (b.length < c) {
    throw Error("Paragraph cannot be inserted at invalid index " + c);
  }
  a = Cl(a);
  b.splice(c, 0, z.Hl.ja(this.delta.Lg()));
  for (b = 0;b < a.length;b++) {
    var d = a[b];
    d.ta() && d.ta() >= c && d.Sd(d.ta() + 1);
  }
  return(0,z.yl)(2).nb(c);
};
(0,z.p)(Sl, ul);
vl(2, il, Sl);
Sl.prototype.Qe = function(a) {
  var b = Bl(a), c = this.delta.Fb();
  if (b.length <= c) {
    throw Error("Paragraph does not exist at index " + c);
  }
  a = Cl(a);
  var d = b.splice(c, 1), b = b.length, e = (0,z.Xg)(a, c);
  if (e) {
    for (var e = (0,z.bb)(a, e), f = 0;f < a.length;f++) {
      var h = a[f];
      h.ta() > c && h.Sd(h.ta() - 1);
    }
    !(0,z.Yg)(a, e, b) && 1 < a.length && (a.splice(e, 1), a[0].Sd(0));
  }
  return(0,z.yl)(1).nb(c).gg(d[0]);
};
(0,z.p)(Tl, ul);
vl(3, jl, Tl);
Tl.prototype.Qe = function(a) {
  var b = this.delta.Fb();
  a = Bl(a);
  if (a.length <= b) {
    throw Error("Paragraph does not exist at index " + b);
  }
  var c = a[b];
  a[b] = z.Hl.ja(this.delta.Lg());
  return(0,z.yl)(3).nb(b).gg(c);
};
Tl.prototype.Qg = Gl;
(0,z.p)(Ul, ul);
vl(4, kl, Ul);
Ul.prototype.Qe = function(a) {
  return cm(a, this.delta, "title");
};
Ul.prototype.Qg = El;
(0,z.p)(Vl, ul);
vl(5, ll, Vl);
Vl.prototype.Qe = function(a) {
  return cm(a, this.delta, "subtitle");
};
Vl.prototype.Qg = El;
(0,z.p)(Wl, ul);
vl(6, nl, Wl);
Wl.prototype.Qe = function(a) {
  var b = a.bd();
  a.jd(this.delta.bd());
  a = (0,z.yl)(6);
  b && a.jd(b);
  return a;
};
Wl.prototype.Qg = El;
(0,z.p)(Xl, ul);
vl(7, ml, Xl);
Xl.prototype.Qe = function(a) {
  return cm(a, this.delta, "caption");
};
Xl.prototype.Qg = El;
(0,z.p)(Yl, ul);
vl(8, ol, Yl);
Yl.prototype.Qe = function(a) {
  var b = this.delta.Fb(), c = z.Hl.ja(this.delta.Wf()), d = Cl(a);
  if (d.length < b) {
    throw Error("Section cannot be inserted at invalid index " + b);
  }
  var e = c.ta();
  if (0 === b && 0 !== e || Bl(a).length <= e && 0 !== e || !Vg([d[b - 1], c, d[b]])) {
    throw Error("Section has invalid start index " + c.ta());
  }
  d.splice(b, 0, c);
  return(0,z.yl)(9).nb(b);
};
(0,z.p)(Zl, ul);
vl(9, pl, Zl);
Zl.prototype.Qe = function(a) {
  a = Cl(a);
  var b = this.delta.Fb();
  if (a.length <= b) {
    throw Error("Section does not exist at index " + b);
  }
  if (0 === b && 1 == a.length) {
    throw Error("The only section cannot be removed");
  }
  var c = a.splice(b, 1);
  a[0].Sd(0);
  return(0,z.yl)(8).nb(b).hg(c[0]);
};
(0,z.p)($l, ul);
vl(10, ql, $l);
$l.prototype.Qe = function(a) {
  var b = this.delta.Fb(), c = z.Hl.ja(this.delta.Wf()), d = Cl(a);
  if (d.length <= b) {
    throw Error("Section does not exist at index " + b);
  }
  var e = c.ta();
  if (0 === b && 0 !== e || Bl(a).length <= e || !Vg([d[b - 1], c, d[b + 1]])) {
    throw Error("Section has invalid start index " + c.ta());
  }
  a = d[b];
  d[b] = c;
  return(0,z.yl)(10).nb(b).hg(a);
};
$l.prototype.Qg = Gl;
(0,z.p)(am, ul);
vl(11, z.rl, am);
am.prototype.Qe = Il;
(0,z.p)(bm, ul);
vl(12, sl, bm);
bm.prototype.Qe = Il;
z.g = z.lm.prototype;
z.g.ja = function() {
  return(0,z.pm)(this.Cb());
};
z.g.Cb = function() {
  var a;
  a = (0,z.fg)(new Eg, !0).Hb(this.type).ri(this.text);
  a = (0,z.F)(a, "markups", this.yb);
  this.hasDropCap && (0,z.F)(a, "hasDropCap", this.hasDropCap);
  4 == this.type && (this.layout && Gg(a, this.layout), this.metadata && a.Gc(this.metadata));
  11 == this.type && (this.layout && Gg(a, this.layout), this.metadata && (0,z.F)(a, "iframe", this.metadata));
  this.name && a.Xa(this.name);
  return z.Hl.ja(a);
};
z.g.ai = (0,z.n)(166);
z.g.append = function(a) {
  var b = this.text.length;
  this.text += a.text;
  for (var c = 0;c < a.yb.length;c++) {
    var d = z.Hl.Cb(z.Jg, z.Hl.$c(a.yb[c]));
    d.setStart((0,z.Kg)(d) + b);
    d.setEnd((0,z.Lg)(d) + b);
    (0,z.sm)(this, d);
  }
};
z.g.split = function(a) {
  for (var b = new z.lm(null, this.type, this.text.substring(a)), c = 0;c < this.yb.length;c++) {
    var d = this.yb[c];
    if ((0,z.Lg)(d) > a) {
      var e = z.Hl.Cb(z.Jg, z.Hl.$c(d));
      e.setStart(Math.max(0, (0,z.Kg)(d) - a));
      e.setEnd((0,z.Lg)(d) - a);
      (0,z.sm)(b, e);
    }
  }
  (0,z.Am)(this, a, this.text.length);
  return b;
};
z.g.Ob = function(a) {
  if (this.name != a.name || this.type != a.type || this.text != a.text || this.yb.length != a.yb.length) {
    return!1;
  }
  for (var b = 0;b < this.yb.length;b++) {
    if (!this.yb[b].Ob(a.yb[b])) {
      return!1;
    }
  }
  return!0;
};
(0,z.p)(z.qm, z.lm);
z.qm.prototype.Ob = function(a) {
  return z.qm.w.Ob.call(this, a) && this.layout == a.layout && (this.metadata && a.metadata ? this.metadata.Ob(a.metadata) : this.metadata == a.metadata);
};
(0,z.p)(rm, z.lm);
rm.prototype.Ob = function(a) {
  return rm.w.Ob.call(this, a) && (this.metadata && a.metadata ? this.metadata.Ob(a.metadata) : this.metadata == a.metadata);
};
var Em = {4:1, 3:2, 1:3, 2:4, 5:5};
z.Fm.prototype.Ci = function() {
  return this.xh.qc() || [];
};
z.Fm.prototype.mk = function() {
  return this.xh.gc() || [];
};
z.Fm.prototype.Vf = function(a) {
  a = (a = this.Ci()[a]) && Fg(a);
  return 5 == a ? "layout-fill-width" : 6 == a || 7 == a ? "sectionLayout--outsetGrid" : "layout-single-column";
};
var Bn;
var Hw;
var An;
var Gw;
var Um = {Fv:!1, ks:null};
z.da.window && (z.da.window._resizeIframe = wn);
Gw = {"section-bottom-center":2, "section-middle-center":3, "section-top-center":4};
An = (0,z.Bb)(Gw);
Hw = {"section-image-full":2, "section-image-left":3, "section-image-right":4};
Bn = (0,z.Bb)(Hw);
z.Iw = {brook:2, crush:3, fresh:4, gray:5, grimace:6, lime:7, lipstick:8, magic:9, midday:10, midnight:11, seaweed:12, warm:13, brookLight:102, crushLight:103, freshLight:104, grayLight:105, grimaceLight:106, limeLight:107, lipstickLight:108, magicLight:109, middayLight:110, midnightLight:111, seaweedLight:112, warmLight:113};
z.Cn = (0,z.Bb)(z.Iw);
(0,z.p)(Hn, z.Ij);
z.In = 200;
z.g = Hn.prototype;
z.g.C = function() {
  this.Lp && (this.Ey.cancel(), this.BA());
  this.xd && (this.mt.cancel(), this.ev());
  (0,z.$h)(this.DJ);
  (0,z.$h)(this.DA);
  window._resizeIframe = wn;
  Hn.w.C.call(this);
};
z.g.Oi = function() {
  Kn(this);
};
z.g.Me = function() {
  this.mn = (0,z.ni)(this.Za);
  this.xd || (this.xd = !0, this.X("scroll-start", this.Za, this.mn));
  this.X("scroll", this.Za, this.mn);
  this.lK();
  this.mt();
};
z.g.ev = function() {
  this.xd = !1;
  this.X("scroll-end", this.Za, this.mn);
};
z.g.mK = function() {
  this.X("scroll-throttled", this.Za, this.mn);
};
z.g.eA = function() {
  if (JB || IB) {
    var a = window.innerWidth, b = window.innerHeight;
    if (a === this.mB && 2 > Math.abs(b - this.lB)) {
      return;
    }
    this.mB = a;
    this.lB = b;
  }
  this.Lp || (this.Lp = !0, (0,z.t)(window.document.body, "resizing"), this.X("resize-start"));
  this.X("resize");
  this.Ey();
};
z.g.BA = function() {
  this.Lp = !1;
  Kn(this);
  this.X("resize-end");
  (0,z.u)(window.document.body, "resizing");
};
z.g.oG = function(a) {
  wn(a);
  this.eA();
};
z.g.iq = function() {
  this.X("webfont-load");
};
z.g.$I = function() {
  this.X("webfont-error");
};
var MD;
var LD;
var Cq;
var KD;
var xD;
var YA;
var vD;
var uD;
var tD;
var sD;
var rD;
var ps;
var dD;
var cD;
var bD;
var $C;
var ZC;
var YC;
var uq;
var qq;
(0,z.p)(T, S);
(0,z.p)(V, S);
(0,z.p)(Mn, V);
var NC = new S("homepage.viewed"), OC = new S("homepage.prlPostClicked"), PC = new S("collection.loaded"), QC = new S("collection.followed"), RC = new S("collection.unfollowed"), SC = new S("user.followed"), TC = new S("user.unfollowed"), UC = new S("post.started"), VC = new S("post.recommendClicked");
new S("post.crosspostClicked");
qq = new S("post.crosspostSuccess");
uq = new S("post.crosspostRemoved");
z.WC = new S("post.shareDraftClicked");
z.XC = new S("post.postEditorLocked");
YC = new S("post.clientUpvote");
ZC = new S("post.clientUnvote");
$C = new V("post.clientRead", "?postId ?postIds ?collectionSlug userId createdAt isAuthenticated referrer".split(" "));
z.aD = new S("post.share");
bD = new S("post.shareOpen");
cD = new S("post.addedBookmark");
dD = new S("post.removedBookmark");
new S("post.readNext");
new S("post.skipPost");
ps = new S("post.nextPost");
z.eD = new S("profile.viewed");
z.fD = new S("profile.enterEdit");
z.gD = new S("profile.cancelEdit");
z.hD = new S("profile.saved");
new S("notes.ui.showToolbar");
z.iD = new S("notes.ui.showNotes");
z.jD = new S("notes.ui.noteCreated");
z.kD = new S("notes.ui.noteEdited");
z.lD = new S("notes.ui.noteDeleted");
z.mD = new S("notes.ui.noteStateChanged");
z.nD = new S("notes.ui.replyCreated");
z.oD = new S("notes.ui.replyEdited");
z.pD = new S("notes.ui.replyDeleted");
z.qD = new S("notes.ui.replyHidden");
rD = new S("followUp.ui.started");
sD = new S("followUp.ui.created");
tD = new S("followUp.ui.deleted");
uD = new S("followUp.ui.visibilityChanged");
vD = new S("followUp.ui.clicked");
new S("activity.viewed");
YA = new S("ui.imageZoom");
z.wD = new S("ui.imageInsert");
xD = new S("post.scrolled");
new S("search.opened");
var yD = new S("search.queried"), zD = new S("search.returnedResults");
new S("search.resultClicked");
var Ky = new S("site.loginClicked"), AD = new T("client.error.imageLoad"), BD = new T("client.error.requestHttpError"), CD = new T("client.error.requestError"), DD = new T("client.error.requestTimeout"), dz = new S("user.testBucketSet");
new S("user.testBucketSet");
var ED = new S("user.sendVerificationEmailButterShown"), FD = new S("user.sendVerificationEmailButterClicked");
new S("user.writeAccessPromptShown");
new S("user.writeAccessPromptDismissed");
new S("user.writeAccessPromptClicked");
var GD = new V("collection.viewed", ["collectionId", "createdAt", "isAuthenticated"]);
new V("post.viewed", ["postId", "userId", "createdAt", "isAuthenticated", "referrer"]);
var HD = new V("post.clientViewed", ["postId", "userId", "createdAt", "isAuthenticated", "referrer"]), ID = new S("post.draftViewed"), JD = new V("posts.presented", ["postIds", "userId", "createdAt", "isAuthenticated", "weight"]);
new V("posts.prlFiltered", ["postIds", "userId", "createdAt", "isAuthenticated"]);
KD = new S("collection.ui.postApproved");
Cq = new S("collection.ui.postRejected");
LD = new S("post.embedClicked");
MD = new S("collection.embedClicked");
z.ND = new S("profile.embedClicked");
new S("embed.viewed");
z.OD = new S("socialFeed.postClicked");
z.PD = new S("socialFeed.collectionClicked");
new S("server.prl.displayed");
new S("server.prl.lowVolume");
new V("post.read.unique", ["postId", "userId", "createdAt", "isAuthenticated"]);
new V("post.read.total", ["postId", "userId", "createdAt", "isAuthenticated"]);
var QD = new V("post.detectLanguage", ["postId"]), RD = new V("post.upvote.statUpdate", ["postId", "userId"]), SD = new V("post.unvote.statUpdate", ["postId", "userId"]);
new S("email.queued");
new S("email.send");
new S("email.send.success");
new S("email.send.failure");
new V("email.send.regular", ["userId", "email", "emailType"]);
new V("email.send.required", ["userId", "email", "emailType"]);
new V("email.sendVerify", ["userId"]);
new S("embedly.success");
new S("embedly.failure");
new S("post.saved");
var TD = new V("post.notifyCollaboratorsByActivity", ["postId", "occurredAt"]), UD = new V("pubsubhubbub.notifyPost", ["postId", "userId"]), VD = new V("facebook.postChanged", ["postId"]);
new V("post.flaggedSpam", ["postId", "userId"]);
new V("post.unflaggedSpam", ["postId", "userId"]);
new S("collaborator.added");
new S("user.writeAccessGranted");
var WD = new V("user.createdAddIndex", ["userId", "createdAt"]), XD = new V("user.createdSubscribeDefaultCollections", ["userId"]);
new V("user.storeSocialData", ["userId"]);
new V("user.importTwitterGraph", ["userId"]);
var YD = new V("user.importFacebookGraph", ["userId"]), ZD = new V("user.reactivatedImportGraph", ["userId", "source"]);
new S("user.timezoneChanged");
var $D = new V("pubsubhubbub.notifyCollection", ["collectionId"]), aE = new V("stat.collection.subscribed", ["collectionId", "createdAt"]), bE = new V("stat.collection.unsubscribed", ["collectionId", "createdAt"]), cE = new V("collection.responseTimeRecalculation", ["collectionId"]);
new V("post.checkAndSchedule", ["timestampMs", "collectionId"]);
var dE = new V("notes.createdIncrementStat", ["postId", "noteId"]), eE = new V("notes.notifyMentionsUsersActivity", ["postId", "noteId"]), fE = new V("notes.replyNotifyMentionedUsersActivity", ["postId", "noteId", "replyId"]), gE = new V("post.publishedNotifyFollowersActivity", ["userId", "postId", "wordCount"]), hE = new V("post.recommendedNotifyFollowersActivity", ["userId", "postId"]);
new S("notes.db.noteRemoved");
new S("notes.db.noteUpdateWhitelist");
new S("notes.db.noteHidden");
new S("notes.db.noteUnapproved");
new S("notes.db.replyRemoved");
new S("notes.db.replyHidden");
new T("server.requests.count");
new V("followUps.db.followUpCreated", ["postId", "userId", "createdAt"]);
new S("followUps.db.followUpDismissed");
new S("followUps.db.followUpApproved");
new S("followUps.db.followUpUnapproved");
new S("followUps.db.followUpRemoved");
new S("followUps.db.followUpUpdated");
new S("highlight.created");
new T("feed.cacheMiss");
new T("feed.cacheHit");
new T("feed.cacheByPass");
new T("zcache.connected");
new T("zcache.disconnected");
new T("zcache.hit");
new T("zcache.miss");
new T("zcache.put");
new T("sharedCache.hitRatio");
new T("sharedCache.access");
new T("sharedCache.get.time");
new T("sharedCache.mget.time");
new T("sharedCache.set.time");
new T("sharedCache.mset.time");
new T("sharedCache.del.time");
new T("sharedCache.pendingRequestCount");
new T("inMemoryCache.keys");
new T("sharedCache.get.time.99p");
new T("sharedCache.mget.time.99p");
new T("sharedCache.set.time.99p");
new T("sharedCache.mset.time.99p");
new T("sharedCache.del.time.99p");
new T("sharedCache.get.count");
new T("sharedCache.mget.count");
new T("sharedCache.set.count");
new T("sharedCache.mset.count");
new T("sharedCache.del.count");
new T("sharedCache.get.timeout.count");
new T("sharedCache.mget.timeout.count");
new T("sharedCache.set.timeout.count");
new T("sharedCache.mset.timeout.count");
new T("sharedCache.del.timeout.count");
new T("sharedCache.mget.partial.result.count");
new T("sharedCache.mset.partial.result.count");
new S("upload.stored");
new S("upload.failed");
new S("upload.reused");
new T("bloomd.connected");
new T("bloomd.disconnected");
new T("bloomd.unavailable");
new T("bloomd.check");
new T("bloomd.multiCheck");
new T("bloomd.set");
new T("bloomd.bulkSet");
new T("bloomd.create");
new T("bloomd.timeout");
new T("bloomd.error");
new V("user.readPostFilterBackfill", ["userId"]);
new V("post.magnitudeForTimespan", ["postId", "startIndex", "timespan", "overrideTimestamp"]);
new V("post.magnitudeForTimespanPostMetrics", ["postId", "startIndex", "overrideTimestamp"]);
new V("homepage.generateFromTimespanMagnitude", ["timespan", "count"]);
new V("collection.recommendedPostAggregation", ["collectionId"]);
var iE = new V("user.recommendedPostAggregation", ["postId"]);
new V("post.fixCollectionsPostCounts", ["postId"]);
var jE = new V("collection.fixPostCount", ["collectionId"]);
new V("collection.badCollectionFound", ["collectionId"]);
var kE = new V("user.generateCollectionSubPostSuggestions", ["userId"]);
new T("jubilee.messageWaitTime");
new V("collection.fixSubscriberCounts", ["collectionId"]);
new V("post.fixPostFirstPublishedTime", ["postId"]);
new V("post.fillPostPublishedAt", ["postId"]);
new V("collection.addAcceptedAtToAll", ["collectionId"]);
new V("user.fixUsernameEntry", ["userId"]);
new V("post.addAcceptedAt", ["postId", "collectionId", "acceptedAt"]);
var lE;
lE = new V("activity.postRecommended", ["userId", "postId", "collectionId", "occurredAt"]);
var mE = new V("activity.postRecommendedMilestone", ["userId", "postId", "collectionId", "occurredAt"]), nE = new V("activity.collectionFollowedMilestone", ["userId", "collectionId"]), oE = new V("activity.postCrossPosted", ["crossPosterId", "postId", "collectionId", "occurredAt"]), pE = new V("activity.collectionPostApproved", ["postId", "collectionId", "occurredAt"]), qE = new V("activity.collectionPostRejected", ["userId", "postId", "collectionId", "editorComment", "occurredAt"]), rE = new V("activity.collectionPostSubmitted", 
["userId", "postId", "collectionId", "occurredAt"]), sE = new V("activity.collectionPostRemoved", ["postId", "collectionId", "occurredAt"]), tE = new V("activity.collectionEditorAdded", ["userId", "collectionId", "fromUserId", "occurredAt"]);
new V("activity.postCollaboratedPublished", ["postId", "occurredAt", "collaboratorId"]);
new V("activity.followedPostPublished", ["userId", "postId", "followerId"]);
new V("activity.followedPostRecommended", ["userId", "postId", "followerId"]);
new V("activity.followUpCreated", ["postId", "followUpId"]);
new V("activity.followUpPublished", ["postId", "followUpId"]);
new V("activity.postAddedAsFollowUp", ["postId", "followUpId"]);
var uE = new V("activity.note", ["postId", "noteId"]), vE = new V("activity.reply", ["postId", "noteId", "replyId"]), wE = new V("activity.notePublished", ["postId", "noteId"]);
new V("activity.mentionInNote", ["noteId", "postId", "mentionedUserId"]);
new V("activity.mentionInNoteUpdate", ["noteId", "postId", "mentionedUserId"]);
new V("activity.mentionInNoteReply", ["postId", "noteId", "replyId", "mentionedUserId"]);
new V("activity.mentionInNoteReplyUpdate", ["postId", "noteId", "replyId", "mentionedUserId"]);
new V("collection.fixUserCollectionLinks", ["collectionId"]);
new V("user.fixUserCollectionLinks", ["userId"]);
new V("posts.forEachInMedium", ["emitEvent", "data", "?lastKey"]);
new V("collections.forEachInMedium", ["emitEvent", "data", "?lastKey"]);
new V("users.forEachInMedium", ["emitEvent", "data", "?lastKey"]);
new V("posts.forEachByUser", ["userId", "emitEvent", "data"]);
new V("votes.forEachByUser", ["userId", "emitEvent", "data"]);
new V("countHealing.userReadCounts", ["userId"]);
new V("countHealing.userStats", ["userId", "?startTime", "?endTime"]);
new V("countHealing.userTotals", ["userId"]);
new V("countHealing.zeroPostTimeSeries", ["postId", "collectedAt", "statAttributes", "?referrer"]);
new V("user.fillUserCreatedAt", ["userId"]);
new V("countHealing.postTotals", ["postId"]);
new V("collection.backfillCollectionAdmin", ["collectionId"]);
new V("user.subscribeToCollection", ["userId", "collectionId"]);
new V("collection.fillCollectionActiveAt", ["collectionId"]);
new V("bestOf.postsForMonth", ["month", "year", "postIds"]);
var xE = new V("collections.updateCrossPostedCollection", ["postId", "collectionId"]);
new V("collections.backPopulateCrossPostsList", ["collectionId"]);
var yE = new V("search.postIndexRequest", ["postId"]), zE = new V("search.userIndexRequest", ["userId"]), AE = new V("search.collectionIndexRequest", ["collectionId"]);
new V("switchboard.activityCreated", ["userId", "activityItemRangeKey"]);
new V("switchboard.sendNewsletter", ["toUserId"]);
new V("switchboard.sendAllNewslettersForTimeOffset", ["timeOffsetMin", "?lastKey"]);
var BE = new V("switchboard.updateUserNewsletterTime", ["userId"]);
new V("social.userFollowedUsers", ["userId", "followedUserIds"]);
new V("social.userUnfollowedUsers", ["userId", "unfollowedUserIds"]);
var CE = new V("social.userCreatedPost", ["userId", "postId"]), DE = new V("social.userPublishedPost", ["userId", "postId"]), EE = new V("social.userCreatedRecommendNote", ["postId", "noteId"]), FE = new V("social.userRecommendedPost", ["userId", "postId"]), GE = new V("social.userUnvotedPost", ["userId", "postId"]), HE = new V("social.userFollowedUser", ["userId", "targetUserId"]), IE = new V("social.userUnfollowedUser", ["userId", "targetUserId"]), JE = new V("social.userFollowedCollection", ["userId", 
"collectionId"]), KE = new V("social.userUnfollowedCollection", ["userId", "collectionId"]), LE = new V("social.userCreatedCollection", ["userId", "collectionId"]), ME = new V("social.userEditedCollection", ["userId", "collectionId"]), NE = new V("social.userRemovedAsEditorOfCollection", ["userId", "collectionId"]), OE = new V("social.collectionAcceptedPost", ["collectionId", "postId"]), PE = new V("social.collectionRemovedPost", ["collectionId", "postId"]);
new T("gosocial.getNamedQueryByQueryParams.request");
new T("gosocial.getNamedQueryByUserId.error");
new T("gosocial.getPostsPublishedByFriendsForUser.request");
new T("gosocial.getPostsPublishedByFriendsForUser.error");
new T("gosocial.getPostsRecommendedByFriendsForUser.request");
new T("gosocial.getPostsRecommendedByFriendsForUser.error");
new T("gosocial.getFriendsWhoRecommendedPostsForUser.request");
new T("gosocial.getFriendsWhoRecommendedPostsForUser.error");
new T("gosocial.userModifyRelationship.request");
new T("gosocial.userModifyRelationship.error");
new T("gosocial.getRelationships.request");
new T("gosocial.getRelationships.error");
new T("gosocial.request.error");
z.QE = new S("espn.landingPageViewed");
new S("espn.welcomeEmailSent");
z.RE = new S("promo.startWritingPageViewed");
new V("spam.users.upload", ["userIds", "type"]);
new V("post.backfillCreatorPostRelation", ["postId"]);
new V("post.fixCreatorPostIndex", ["postId"]);
new S("ios.app.launch");
new S("ios.app.start");
new S("ios.app.login");
new S("ios.app.logout");
new S("ios.app.error");
new S("ios.app.crash");
new S("ios.app.memoryWarning");
new Mn("post.published", [TD, gE, UD, VD, QD, yE, DE]);
new Mn("post.created", [CE]);
new Mn("post.republished", [UD, VD]);
new Mn("post.upvoted", [RD, FE, iE, lE, mE, hE]);
new Mn("post.revoted", [FE, iE, RD]);
new Mn("post.unvoted", [GE, SD]);
new Mn("user.subscribed", [HE]);
new Mn("user.unsubscribed", [IE]);
new Mn("user.created", [WD, zE, XD]);
new Mn("user.usernameUpdated", [zE]);
new Mn("user.deactivated", []);
new Mn("user.reactivated", [ZD]);
new Mn("notes.db.noteCreated", [dE, eE, uE, EE]);
new Mn("notes.db.noteUpdated", [eE, EE]);
new Mn("notes.db.noteApproved", [wE]);
new Mn("notes.db.replyCreated", [fE, vE]);
new Mn("notes.db.replyUpdated", [fE]);
new Mn("collection.postSubmitted", [rE, jE]);
new Mn("collection.postApproved", [AE, $D, cE, pE, jE, OE]);
new Mn("collection.postCrossPosted", [xE, AE, $D, oE, jE, OE]);
new Mn("collection.postRejected", [qE, cE, jE, PE]);
new Mn("collection.postRemoved", [sE, jE, PE]);
new Mn("collection.subscribed", [aE, nE, kE, JE]);
new Mn("collection.unsubscribed", [bE, kE, KE]);
new Mn("collection.editorAdded", [tE, ME]);
new Mn("collection.editorRemoved", [NE]);
new Mn("collection.created", [AE, LE]);
new Mn("collection.updated", [AE]);
new Mn("collection.deleted", []);
new Mn("facebook.connected", [YD]);
new Mn("facebook.disconnected", []);
new Mn("user.login", [BE]);
new Mn("user.settingsChanged", [BE]);
(0,z.p)(Nn, z.Kj);
Nn.prototype.H = function() {
  Nn.w.H.call(this);
  (0,z.Lj)(this, this.Ca, "scroll-end", this.dB, this);
  this.dB();
};
Nn.prototype.dB = function() {
  var a = On(this);
  a.length && (0,z.Dk)(JD, {postIds:a, weight:1});
};
z.g = z.Pn.prototype;
z.g.za = function() {
  return!0;
};
z.g.Dl = function(a, b) {
  var c = this.Fj(b);
  c && delete this.$i[(0,z.sa)(b)];
  return c;
};
z.g.bi = function(a, b, c) {
  (a = !this.Fj(c)) || delete this.$i[(0,z.sa)(c)];
  return a;
};
z.g.fm = function(a) {
  a = (0,z.sa)(a);
  this.$i[a] || (this.$i[a] = this.now());
};
z.g.Fj = function(a) {
  a = (0,z.sa)(a);
  return!(a in this.$i) || this.now() - this.$i[a] >= this.du;
};
z.g.now = function() {
  return(new Date).getTime();
};
(0,z.p)(Qn, z.Pn);
Qn.prototype.bi = function(a, b, c) {
  return b.Al ? Qn.w.bi.call(this, a, b, c) : (delete this.$i[(0,z.sa)(c)], !1);
};
z.g = Rn.prototype;
z.g.za = function(a, b) {
  return this.om ? this.zm.za(a, b) : !0;
};
z.g.Dl = function(a, b) {
  return this.om ? this.zm.Dl(a, b) : !1;
};
z.g.bi = function(a, b, c) {
  return this.om ? this.zm.bi(a, b, c) : !0;
};
z.g.fm = function(a) {
  this.zm.fm(a);
  this.om = !0;
};
z.g.Fj = function(a) {
  return this.om ? this.zm.Fj(a) : !1;
};
z.Sn.prototype.za = function() {
  return!1;
};
z.Sn.prototype.Dl = function() {
  return!1;
};
z.Sn.prototype.bi = function() {
  return!1;
};
z.Sn.prototype.fm = z.ea;
z.SE = new z.Sn;
Tn.prototype.za = function() {
  return!0;
};
Tn.prototype.Dl = function() {
  return!1;
};
Tn.prototype.bi = function() {
  return!0;
};
Tn.prototype.fm = z.ea;
z.TE = new Tn;
(0,z.p)(z.Xn, z.Kj);
z.Xn.prototype.Aa = function(a) {
  this.Is.push(a);
  if (this.Pd()) {
    try {
      a.H();
    } catch (b) {
      (0,z.Cj)(b);
    }
  }
  return this;
};
z.Xn.prototype.H = function() {
  z.Xn.w.H.call(this);
  Yn(this, function(a) {
    a.H();
  });
};
z.Xn.prototype.ka = function() {
  Yn(this, function(a) {
    a.ka();
  });
  z.Xn.w.ka.call(this);
};
z.Xn.prototype.C = function() {
  Yn(this, function(a) {
    (0,z.bd)(a);
  });
  this.Is.length = 0;
  z.Xn.w.C.call(this);
};
(0,z.p)(Zn, z.v);
Zn.prototype.Gj = function() {
  return!0;
};
Zn.prototype.tw = function() {
  return this.Gj() ? [this] : [];
};
(0,z.p)($n, Zn);
$n.prototype.C = function() {
  this.Bp = null;
  $n.w.C.call(this);
};
$n.prototype.Gj = function() {
  return!!this.wu;
};
$n.prototype.Kd = function() {
  return new z.sf(0, 0, this.Bp.width, this.Bp.height);
};
(0,z.p)(bo, z.v);
bo.prototype.C = function() {
  bo.w.C.call(this);
};
z.g = z.co.prototype;
z.g.ja = function() {
  return new z.co(this.ic, this.uc, this.tc, this.jc, this.Rb, this.mb);
};
z.g.setTransform = function(a, b, c, d, e, f) {
  if (!((0,z.pa)(a) && (0,z.pa)(b) && (0,z.pa)(c) && (0,z.pa)(d) && (0,z.pa)(e) && (0,z.pa)(f))) {
    throw Error("Invalid transform parameters");
  }
  this.ic = a;
  this.uc = b;
  this.tc = c;
  this.jc = d;
  this.Rb = e;
  this.mb = f;
  return this;
};
z.g.lf = function(a) {
  this.ic = a.ic;
  this.uc = a.uc;
  this.tc = a.tc;
  this.jc = a.jc;
  this.Rb = a.Rb;
  this.mb = a.mb;
  return this;
};
z.g.scale = function(a, b) {
  this.ic *= a;
  this.uc *= a;
  this.tc *= b;
  this.jc *= b;
  return this;
};
z.g.translate = function(a, b) {
  this.Rb += a * this.ic + b * this.tc;
  this.mb += a * this.uc + b * this.jc;
  return this;
};
z.g.rotate = function(a, b, c) {
  var d = new z.co, e = Math.cos(a);
  a = Math.sin(a);
  b = d.setTransform(e, a, -a, e, b - b * e + c * a, c - b * a - c * e);
  return eo(this, b);
};
z.g.toString = function() {
  return "matrix(" + [this.ic, this.uc, this.tc, this.jc, this.Rb, this.mb].join() + ")";
};
z.g.transform = (0,z.n)(167);
z.g.Ob = function(a) {
  return this == a ? !0 : a ? this.ic == a.ic && this.tc == a.tc && this.Rb == a.Rb && this.uc == a.uc && this.jc == a.jc && this.mb == a.mb : !1;
};
(0,z.p)(fo, Zn);
fo.prototype.C = function() {
  (0,z.dd)(this.Nk);
  this.Nk.length = 0;
  fo.w.C.call(this);
};
fo.prototype.Gj = function() {
  for (var a = 0;a < this.Nk.length;a++) {
    if (this.Nk[a].Gj()) {
      return!0;
    }
  }
  return!1;
};
fo.prototype.tw = function() {
  if (!this.Gj()) {
    return[];
  }
  for (var a = [], b = 0;b < this.Nk.length;b++) {
    var c = this.Nk[b];
    c.Gj() && (a = a.concat(c.tw()));
  }
  return a;
};
(0,z.p)(go, z.v);
z.g = go.prototype;
z.g.C = function() {
  this.St = !1;
  go.w.C.call(this);
};
z.g.sl = function() {
  return this.Of;
};
z.g.Ve = function() {
  return this.wd;
};
z.g.Kd = function() {
  return new z.sf(this.Fd.Rb, this.Fd.mb, this.sl(), this.Ve());
};
z.g.Tj = function(a) {
  this.Of = a;
  return this;
};
z.g.Qj = function(a) {
  this.wd = a;
  return this;
};
(0,z.p)(z.ko, z.wc);
z.ko.prototype.lC = function(a, b, c) {
  this.bD++;
  this.ew[a] = [b, c];
  this.Nc || (this.$B && b ? this.Ea([a, c]) : this.mL && !b ? this.$d(c) : this.bD == this.Sw.length && this.Ea(this.ew));
  this.TK && !b && (c = null);
  return c;
};
z.ko.prototype.$d = function(a) {
  z.ko.w.$d.call(this, a);
  for (a = 0;a < this.Sw.length;a++) {
    this.Sw[a].cancel();
  }
};
(0,z.p)(lo, z.v);
lo.prototype.C = function() {
  this.el = null;
  lo.w.C.call(this);
};
lo.prototype.g = function() {
  return "native";
};
lo.prototype.refresh = function() {
};
(0,z.p)(no, lo);
no.prototype.g = function() {
  return "post-cover";
};
no.prototype.refresh = function(a) {
  if (!(0,z.J)("useragent.isMobile") && !(0,z.J)("useragent.isTablet")) {
    var b = Rd(a), c;
    c = this.nj;
    var d = c.Aa(b);
    c = so(c.Wd.Fd.mb, d.Fd.mb, d.Ve());
    1 <= c || (b = this.nj.Aa(b), b = b.Fd.mb + b.Ve(), this.qA = mo(this.el, this.qA, c, b, a), (0,z.uf)(a, "opacity", 1 - c));
  }
};
(0,z.p)(oo, lo);
z.g = oo.prototype;
z.g.cd = function(a) {
  this.Ws = this.qw(a);
  var b = this.eC(a);
  this.Cp = mz(this.KL, [this.Ws, b]);
  (0,z.q)(this.Cp, function(b) {
    var d = b[1][1];
    this.xr = new $n(b[0][1]);
    this.pr = ao(new $n(d), 0);
    b = ho(jo(new go, this.el.Kd()), 0);
    b.yz = new fo([this.xr, this.pr]);
    this.Yf = b;
    b = this.rk;
    var d = this.Yf, e = (0,z.sa)(d);
    b.sn[e] = d;
    (0,z.q)(this.nj.refresh(), this.SC.bind(this, a));
  }, this);
};
z.g.g = function() {
  return "blur-cover";
};
z.g.refresh = function(a) {
  this.Yf && this.iE(a);
};
z.g.C = function() {
  po(this);
  oo.w.C.call(this);
};
z.g.iE = function(a) {
  this.qw(a) != this.Ws && (po(this), this.cd(a));
  a = this.nj.Wd.Kd();
  var b = this.el.Kd();
  io(this.Yf.Tj(b.width).Qj(b.height), a.top);
  a = so(a.top, 0, 0.4 * b.height);
  a = 1 - Math.pow(1 - a, 2);
  ao(this.xr, 1 === a ? 0 : 1);
  ao(this.pr, a);
};
z.g.SC = function(a) {
  (0,z.t)(a, "is-usingCanvas");
};
z.g.qw = function(a) {
  return a.getAttribute("data-image-url");
};
z.g.eC = function(a) {
  return a.getAttribute("data-image-blur-url");
};
(0,z.p)(qo, oo);
z.g = qo.prototype;
z.g.g = function() {
  return "post-section";
};
z.g.SC = function(a) {
  (0,z.t)(Rd(a), "section-using-canvas");
};
z.g.cd = function(a) {
  this.Mt = (0,z.Jw)(a);
  this.vt = this.el.sl();
  qo.w.cd.call(this, a);
};
z.g.qw = function() {
  return Lr(this.Mt, {width:this.vt});
};
z.g.eC = function() {
  return Lr(this.Mt, {width:this.vt, blur:20, darken:45, verticalGradient:"29/81/40"});
};
z.g.iE = function(a) {
  var b = this.el.Kd();
  io(this.Yf.Tj(b.width).Qj(b.height), b.top + this.Au);
  b = Rd(a);
  a = this.nj;
  var c = a.Aa(b), d = c.Ve() - a.Wd.Ve();
  a = 0 >= d ? 0 : so(a.Wd.Fd.mb, c.Fd.mb, d);
  c = this.nj.Aa(b);
  b = c.Fd.mb;
  c = b + c.Ve();
  d = this.nj.Wd.Kd();
  b = so(d.top, b + 0.15 * d.height, 0.4 * d.height);
  b = 1 - Math.pow(1 - b, 2);
  this.Au = mo(this.Yf, this.Au, a, c);
  ao(this.xr, 1 === b ? 0 : 1);
  ao(this.pr, b);
};
(0,z.p)(ro, z.Kj);
z.g = ro.prototype;
z.g.C = function() {
  wo(this, []);
  ro.w.C.call(this);
};
z.g.H = function() {
  ro.w.H.call(this);
  var a = this.Kc.N.querySelector(".canvas-renderer");
  a && (this.Wi = new Nr(a));
  this.Ca.F("scroll", this.Me, this);
  this.Ca.F("resize-end", this.Pg, this);
  this.Ca.F("webfont-load", this.iq, this);
  this.Pg();
};
z.g.ka = function() {
  this.Ca.Ba("scroll", this.Me, this);
  this.Ca.Ba("resize-end", this.Pg, this);
  this.Ca.Ba("webfont-load", this.iq, this);
  (0,z.bd)(this.Wi);
  this.Wi = null;
  ro.w.ka.call(this);
};
z.g.Aa = function(a, b) {
  var c = b || !((0,z.sa)(a) in this.If);
  b || a.hasAttribute("data-scroll") || (b = "native");
  b && a.setAttribute("data-scroll", b);
  c && (to(this), uo(this, a));
  c = (0,z.sa)(a);
  return this.If[c];
};
z.g.Pg = function() {
  if (this.Jp) {
    return this.Vi;
  }
  this.Jp = !0;
  return this.refresh();
};
z.g.refresh = function() {
  if (this.Kp) {
    return this.Vi;
  }
  this.Kp = !0;
  this.Vi = new z.wc;
  window.requestAnimationFrame(this.zq.bind(this));
  return this.Vi;
};
z.g.zq = function() {
  var a;
  if (this.Jp) {
    if (this.Jp = !1, this.Pd()) {
      a = (0,z.Ln)();
      var b = this.Kc.N, c = b.offsetHeight, d = (0,z.ni)(a);
      ho(io(this.Wd.Tj(b.offsetWidth).Qj(c), d.top), d.left);
      this.Wi && (b = this.Wi, c = this.Wd.sl(), d = this.Wd.Ve(), b.ek.width = c, b.ek.height = d);
      a = (0,z.ki)(a);
      this.Hy.setTransform(1, 0, 0, 1, -a.x, -a.y);
      to(this);
      a = xo(this);
      for (b = 0;b < a.length;b++) {
        uo(this, a[b]);
      }
      wo(this, a);
    } else {
      a = [];
    }
  } else {
    a = null;
  }
  this.Kp = !1;
  if (this.Pd()) {
    a || (a = xo(this));
    for (b = 0;b < a.length;b++) {
      c = a[b], d = (0,z.sa)(c), d in this.yh && this.yh[d].refresh(c);
    }
    this.Wi && this.Wi.dg(this.rk, this.Wd);
    this.Vi && (this.Vi.Ea(), this.Vi = null);
  }
};
z.g.Me = function(a, b) {
  (0,z.Ln)() == a && (ho(io(this.Wd, b.top), b.left), this.Kp = !0, this.zq());
};
z.g.iq = function() {
  this.Pg();
  (0,window.setTimeout)(this.Pg.bind(this), 2E3);
};
(0,z.p)(z.yo, z.Xn);
z.g = z.yo.prototype;
z.g.N = null;
z.g.Xd = new Qn(3E5);
z.g.Uq = null;
z.g.Kf = null;
z.g.L = function(a) {
  return this.N ? this.N.querySelector(a) : null;
};
z.g.gs = function(a) {
  return this.N ? (0,z.fb)(this.N.querySelectorAll(a)) : [];
};
z.g.find = function(a) {
  return this.L(a);
};
z.g.Oa = function() {
  return this.ca;
};
z.g.qb = function() {
  return this.Uq;
};
z.g.Gc = function(a) {
  this.Kf = a;
};
z.g.getMetadata = function() {
  return this.Kf;
};
z.g.AC = z.ea;
z.g.nr = function() {
  return null;
};
z.g.or = function() {
};
z.g.C = function() {
  this.N && (0,z.Gi)(this.N);
  z.yo.w.C.call(this);
};
(0,z.p)(z.Co, z.yo);
z.g = z.Co.prototype;
z.g.lh = null;
z.g.zc = function() {
};
z.g.Ab = function() {
};
z.g.bg = function() {
};
z.g.AC = function(a) {
  if (this.N) {
    throw Error("already initialized");
  }
  a && this.bg(a);
  (a = window.document.getElementById("prerendered")) ? (a.removeAttribute("id"), this.N = a, this.Ab()) : (this.N = window.document.createElement("div"), (this.lh = this.zc()) ? (0,z.q)(this.lh, this.Ab, this) : this.Ab());
  (0,z.t)(this.N, "screen-content");
};
z.g.nr = function() {
  return this.lh;
};
z.g.C = function() {
  this.lh && !this.lh.Nc && this.lh.cancel();
  this.lh = null;
  z.Co.w.C.call(this);
};
(0,z.p)(z.Do, z.Co);
z.Do.prototype.ma = null;
z.Do.prototype.ol = function() {
  return this.Vc;
};
z.Do.prototype.zc = function() {
  var a = this.Vc + (-1 == this.Vc.indexOf("?") ? "?" : "\x26") + "format\x3dfragment";
  return(0,z.q)((0,z.Ao)(this, "request").get(a, {headers:{"X-Response-Type":"html-body"}}), this.xc, this);
};
z.Do.prototype.xc = function(a) {
  this.N.innerHTML = a;
};
(0,z.p)(Eo, z.Kj);
Eo.prototype.H = function() {
  Eo.w.H.call(this);
  var a = (0,z.J)("useragent");
  "chrome" === a.family && "android" === a.os && ((0,z.Lj)(this, this.Ca, "resize-end", this.Ck), this.Cv = (0,z.Ad)(window), a = this.U.offsetHeight, this.U.style.height = a + "px", this.Vt = a);
};
Eo.prototype.Ck = function() {
  var a = (0,z.Ad)(window), b = this.Cv;
  if (!(a.width === b.width && 80 > Math.abs(a.height - b.height))) {
    this.Cv = a;
    var a = (0,z.Ln)(), b = (0,z.ni)(a).top, c = this.Vt;
    this.U.style.height = "";
    var d = this.U.offsetHeight;
    this.U.style.height = d + "px";
    this.Vt = d;
    b >= c && (0,z.ii)(a, 0, b + (d - c));
  }
};
(0,z.p)(Fo, z.Do);
z.g = Fo.prototype;
z.g.Xd = new z.Pn(36E5);
z.g.C = function() {
  this.Ti && (0,z.Di)(this.Ti).clear("open-post");
  this.Ti = null;
  Fo.w.C.call(this);
};
z.g.bg = function(a) {
  a.posts && this.la.update(a.posts);
};
z.g.Ab = function() {
  var a = (0,z.J)("productName");
  this.Gc(new z.Un(a, a, "website"));
  this.Ti = this.L(".bucket-posts");
  (a = this.L(".layout-fill-height")) && this.Aa(new Eo(this.Oa(), a));
  this.Ti && (ux(this.Ti, this.ha, this.la), (0,z.J)("isAuthenticated") && (0,z.J)("variants.can_view_prl_homepage") && ((0,z.Di)(this.Ti).D("open-post", this.tI, this), this.Aa(new Nn(this.Oa()))));
};
z.g.H = function() {
  Fo.w.H.call(this);
  var a = {};
  (0,z.J)("variants.can_view_prl_homepage") && (a.count = this.la.count());
  (0,z.Dk)(NC, a);
  (0,z.Ok)(1, "home");
  Go(this);
};
z.g.zy = function() {
  var a = hk;
  if (this.aa.Db[a]) {
    return this.aa.Db[a];
  }
  var b = UE.R();
  return(0,z.Vk)(this.aa, a, b, "POST");
};
z.g.tI = function(a) {
  var b = (a = (a = (0,z.Yd)(a.target, null, "post-item")) && a.getAttribute("data-post-id")) && this.aa.Bb(a), c = b && b.get("providerName");
  if (c) {
    var d = b.get("reasons"), e = {};
    if (d) {
      for (var f in d) {
        var h = d[f];
        e[f] = {weight:h.weight, suggestionData:h.suggestionData};
      }
    }
    (0,z.Dk)(OC, {postId:a, providerName:c, ranking:b.get("ranking"), reasons:e});
  }
};
N("a", "", function() {
  return "";
});
N("a", "recommendedAuthorRecommendations", function(a) {
  return "Recommended by " + (a.eh ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "socialRecommendations", function(a) {
  return "Recommended by " + (a.eh ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "socialPublishedPosts", function(a) {
  return "Written by " + (a.eh ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "collectionSubscriptionsByUserId", function(a) {
  return "Best of " + (a.eh ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "collectionLatest", function(a) {
  return "Latest from " + (a.eh ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "followUpsByUserId", function(a) {
  return "Further reading to " + (a.eh ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to ' + (0,z.P)(a.reason.templateData.name) + '"\x3e' + (0,z.O)(a.reason.templateData.name) + "\x3c/a\x3e" : (0,z.O)(a.reason.templateData.name));
});
N("a", "mostPopular", function() {
  return "Trending";
});
N("a", "bestOf", function(a) {
  return a.eh ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.reason.templateData.href)) + '" title\x3d"Go to Top 100"\x3eTop 100\x3c/a\x3e' : "Top 100";
});
N("a", "readLater", function() {
  return "Bookmarked";
});
N("a", "latest", function() {
  return "Recent";
});
N("b", "post", function(a, b, c) {
  b = "";
  var d = dk({post:a.item.post});
  return b += dp({VD:a.item.post.postId, WD:"post", name:a.item.post.title, url:d}) + (a.item.post.subtitle ? '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" data-action\x3d"open-social-activity-item" data-action-value\x3d"' + (0,z.P)(a.item.post.postId) + '" data-target-entity-type\x3d"post"\x3e\x3cp\x3e' + (0,z.O)(a.item.post.subtitle) + "\x3c/p\x3e\x3c/a\x3e" : "") + bp({post:a.item.post, si:!1}, c) + '\x3cspan class\x3d"post-meta post-meta-bookmark"\x3e' + Xo({postId:a.item.post.postId, 
  isOnReadingList:!1, readingTime:a.item.post.readingTime}, 0, c) + "\x3c/span\x3e";
});
N("b", "collection", function(a) {
  var b = "", c;
  c = "/" + (0,z.O)(a.item.collection.slug);
  return b += dp({VD:a.item.collection.collectionId, WD:"collection", name:a.item.collection.name, url:c});
});
N("c", "", function(a, b, c) {
  return ip(a, c);
});
N("c", "post", function(a, b, c) {
  a = a || {};
  if (a.bm && c.variants.can_view_prl_homepage && c.variants.can_view_prl_debug) {
    b = a;
    for (var d = '\x3cdiv class\x3d"prl-debug-providers"\x3e\x3cspan class\x3d"prl-debug-provider-header"\x3eProviders\x3c/span\x3e\x3cul\x3e', e = nh(b.providerPerformance), f = e.length, h = 0;h < f;h++) {
      for (var k = e[h], d = d + ('\x3cli\x3e\x3cspan class\x3d"prl-debug-provider-name"\x3e' + (0,z.O)(k) + "\x3c/span\x3e"), l = nh(b.providerPerformance[k]), m = l.length, s = 0;s < m;s++) {
        var x = l[s], d = d + ('\x3cspan class\x3d"prl-debug-dimension"\x3e\x3cstrong\x3e' + (0,z.O)(x) + "\x3c/strong\x3e: " + (0,z.O)(b.providerPerformance[k][x]) + "\x3c/span\x3e")
      }
      d += "\x3c/li\x3e";
    }
    b = '\x3cli class\x3d"bucket-item post-meta"\x3e' + (d + "\x3c/ul\x3e\x3c/div\x3e") + "\x3c/li\x3e";
  } else {
    b = "";
  }
  return b + ip(a, c);
});
N("d", "post", function(a, b, c) {
  return qh("e", a.rD)((0,z.M)(a, {post:a.item}), null, c);
});
N("d", "collection", function(a, b, c) {
  a = (0,z.M)(a, {collection:a.item});
  b = "";
  var d = (0,z.Qj)((0,z.M)(a.collection.image, {strategy:"resample", width:"450", verticalGradient:"29/81/60"}), 0, c);
  return b += a.Dr ? '\x3cdiv class\x3d"collection-item align-bottom ' + (a.collection.virtuals.isSubscribed ? "active" : "") + '" style\x3d"background-image:url(' + (0,z.P)((0,z.Q)(d)) + ')" data-action\x3d"toggle-subscribe-collection" data-action-value\x3d"' + (0,z.P)(a.collection.slug) + '" data-collection-id\x3d"' + (0,z.P)(a.collection.id) + '" \x3e' + Lo(a, c) + "\x3c/div\x3e" : '\x3ca class\x3d"collection-item align-bottom" href\x3d"/' + (0,z.P)(a.collection.slug) + '" style\x3d"background-image:url(' + 
  (0,z.P)((0,z.Q)(d)) + ')"\x3e' + Lo(a, c) + "\x3c/a\x3e";
});
N("d", "socialRollup", function(a, b, c) {
  a = (0,z.M)(a, {SM:a.item.postId ? "post" : "collection"});
  b = qh("b", a.SM)(a, null, c) + ((null == a.item.recommendedItems ? 0 : a.item.recommendedItems.length) ? ep((0,z.M)(a, {Bn:'\x3cspan class\x3d"icons icons-heart icons-heart-social-item"\x3e\x3c/span\x3e', uo:a.item.recommendedItems, className:"social-items-recommended", zC:"recommend-avatar"}), c) : "");
  if (null == a.item.recommendNoteItems ? 0 : a.item.recommendNoteItems.length) {
    b += '\x3cdiv class\x3d"social-items social-items-recommend-note"\x3e';
    for (var d = a.item.recommendNoteItems, e = d.length, f = 0;f < e;f++) {
      var h = d[f];
      b += '\x3cdiv class\x3d"notes-post-meta notes-recommendations"\x3e\x3cblockquote class\x3d"notes-recommendation"\x3e\x3cspan class\x3d"icons icons-heart align-left"\x3e\x3c/span\x3e' + fp({user:h.user}, c) + "“" + (0,z.O)(h.note.content) + '”\x26#8202;—\x26#8202;\x3ccite class\x3d"notes-recommendation-cite"\x3e\x3ca class\x3d"link" href\x3d"/@' + (0,z.P)(h.note.creator.username) + '"\x3e' + (0,z.O)(h.note.creator.name) + "\x3c/a\x3e\x3c/cite\x3e\x3c/blockquote\x3e\x3c/div\x3e";
    }
    b += "\x3c/div\x3e";
  }
  return b += ((null == a.item.publishedItems ? 0 : a.item.publishedItems.length) ? ep((0,z.M)(a, {uo:a.item.publishedItems, zn:"Published by", className:"social-items-published"}), c) : "") + ((null == a.item.followedItems ? 0 : a.item.followedItems.length) ? ep((0,z.M)(a, {uo:a.item.followedItems, zn:"Followed by", className:"social-items-followed"}), c) : "") + ((null == a.item.editedItems ? 0 : a.item.editedItems.length) ? ep((0,z.M)(a, {uo:a.item.editedItems, zn:"Edited by", className:"social-items-edited"}), 
  c) : "") + ((null == a.item.createdItems ? 0 : a.item.createdItems.length) ? ep((0,z.M)(a, {uo:a.item.createdItems, zn:"Created by", className:"social-items-created"}), c) : "");
});
N("f", "confirm", function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-primary btn-overlay-confirm" data-action\x3d"overlay-confirm"\x3e' + (a.Jh ? (0,z.O)(a.Jh) : "Confirm") + '\x3c/button\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-cancel"\x3eCancel\x3c/button\x3e';
});
N("f", "alert", function() {
  return'\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-close"\x3eClose\x3c/button\x3e';
});
N("f", "refresh", function() {
  return'\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-refresh"\x3eRefresh\x3c/button\x3e';
});
N("f", "next", function() {
  return'\x3cbutton class\x3d"btn btn-primary" data-action\x3d"overlay-next"\x3eNext\x3c/button\x3e';
});
N("f", "signin", function(a, b, c) {
  return c.variants.can_view_unified_authentication_overlay ? '\x3cdiv class\x3d"btn-set-vertical signin-auth-choices"\x3e' + Jp({Mj:a.Mj, Bo:"twitter", wx:"Twitter"}) + (c.variants.can_login_with_facebook ? Jp({Mj:a.Mj, Bo:"facebook", wx:"Facebook"}) : "") + "\x3c/div\x3e" : '\x3ca href\x3d"/m/account/authenticate-twitter?redirect\x3d' + Ah(a.Mj) + '" class\x3d"btn btn-primary"\x3e\x3cspan class\x3d"icons icons-twitter"\x3e\x3c/span\x3eSign in with Twitter\x3c/a\x3e\x3cbutton class\x3d"btn" data-action\x3d"overlay-close"\x3eClose\x3c/button\x3e';
});
N("f", "form", function(a) {
  a = a || {};
  return'\x3cbutton class\x3d"btn btn-primary btn-overlay-confirm" data-action\x3d"overlay-submit"\x3e' + (a.Jh ? (0,z.O)(a.Jh) : "Submit") + "\x3c/button\x3e" + (a.GL ? "" : '\x3cbutton class\x3d"btn" data-action\x3d"overlay-cancel"\x3eCancel\x3c/button\x3e');
});
N("g", "twitter", function(a, b, c) {
  return'\x3cp class\x3d"overlay-registration-follow-twitter"\x3e\x3clabel\x3e\x3cinput class\x3d"overlay-registration-checkbox" type\x3d"checkbox" name\x3d"follow" checked\x3d"checked"\x3eFollow @' + (0,z.O)(c.mediumTwitterScreenName) + " on Twitter\x3c/label\x3e\x3c/p\x3e";
});
N("g", "facebook", function(a, b, c) {
  return'\x3cp class\x3d"overlay-registration-like-facebook"\x3e\x3clabel\x3e\x3cinput class\x3d"overlay-registration-checkbox" type\x3d"checkbox" name\x3d"like" checked\x3d"checked"\x3eLike ' + (0,z.O)(c.productName) + " on Facebook\x3c/label\x3e\x3c/p\x3e";
});
N("h", "recommend", function() {
  return "Give this writer the props they deserve.";
});
N("h", "followUp", function() {
  return "Continue the conversation with related\x26nbsp;links.";
});
N("h", "noteAdd", function() {
  return "Speak up, spark a conversation.";
});
N("h", "noteReply", function() {
  return "The strong, silent type is overrated—keep the conversation going.";
});
N("h", "readingList", function() {
  return "Don’t let great posts slip into the Internet ether.";
});
N("h", "espn", function() {
  return "Share your story.";
});
N("i", "", function() {
  return'\x3cmeta name\x3d"twitter:card" content\x3d"summary"\x3e';
});
N("i", "article", function(a, b, c) {
  return(a.googleProfileId ? '\x3clink rel\x3d"author" href\x3d"https://plus.google.com/' + (0,z.P)(a.googleProfileId) + '"\x3e' : "") + '\x3clink rel\x3d"author" href\x3d"' + (0,z.P)((0,z.Q)(c.baseUrl)) + "/@" + (0,z.P)(a.username) + '"\x3e\x3cmeta property\x3d"og:type" content\x3d"article"\x3e\x3cmeta name\x3d"twitter:card" content\x3d"summary_large_image"\x3e\x3cmeta property\x3d"article:publisher" content\x3d"https://www.facebook.com/medium"\x3e\x3cmeta property\x3d"article:author" content\x3d"' + 
  (0,z.P)(c.baseUrl) + "/@" + (0,z.P)(a.username) + '"\x3e' + (a.FM ? '\x3cmeta property\x3d"article:published_time" content\x3d"' + (0,z.P)(a.FM) + '"\x3e' : "") + '\x3cmeta name\x3d"twitter:creator" content\x3d"@' + (0,z.P)(a.username) + '"\x3e';
});
N("i", "profile", function(a) {
  return(a.googleProfileId ? '\x3clink rel\x3d"me" href\x3d"https://plus.google.com/' + (0,z.P)(a.googleProfileId) + '"\x3e' : "") + '\x3clink rel\x3d"me" href\x3d"http://twitter.com/' + (0,z.P)(a.username) + '"\x3e\x3cmeta property\x3d"og:type" content\x3d"profile"\x3e\x3cmeta name\x3d"twitter:card" content\x3d"summary"\x3e\x3cmeta property\x3d"profile:first_name" content\x3d"' + (0,z.P)(a.firstName) + '"\x3e\x3cmeta property\x3d"profile:last_name" content\x3d"' + (0,z.P)(a.lastName) + '"\x3e\x3cmeta property\x3d"profile:username" content\x3d"' + 
  (0,z.P)(a.username) + '"\x3e';
});
N("i", "collection", function(a) {
  return'\x3cmeta property\x3d"og:type" content\x3d"medium:collection"\x3e\x3cmeta name\x3d"twitter:card" content\x3d"summary_large_image"\x3e' + (a.username ? '\x3cmeta name\x3d"twitter:creator" content\x3d"@' + (0,z.P)(a.username) + '"\x3e' : "");
});
(0,z.p)(Sp, z.Do);
z.g = Sp.prototype;
z.g.C = function() {
  (0,z.dd)(this.Dm);
  this.Dm = [];
  Sp.w.C.call(this);
};
z.g.bg = function(a) {
  this.ld(a);
};
z.g.zc = function() {
  return(0,z.q)((0,z.q)(this.ea.get(VE.R(), {na:!0, ce:0}), this.ld, this), function(a) {
    this.N.innerHTML = (0,z.K)(Rp, {collections:a});
  }, this);
};
z.g.ka = function() {
  this.od && (this.od.cancel(), this.od = null);
  (0,window.clearTimeout)(this.hv);
  Sp.w.ka.call(this);
};
z.g.Ab = function() {
  Sp.w.Ab.call(this);
  this.Da = this.L("#collection-search-input");
  this.Qs = this.L(".bucket");
  Tp(this);
};
z.g.H = function() {
  Sp.w.H.call(this);
  this.Da.focus();
  this.qa(this.Da, "keyup", this.hG, this);
};
z.g.ld = function(a) {
  a = (0,z.al)(a.value, a.references);
  for (var b = 0;b < a.length;b++) {
    (0,z.Zk)(this.aa, a[b]);
  }
  return a;
};
z.g.hG = function(a) {
  a.preventDefault();
  this.Ja != this.Da.value && (this.Ja = this.Da.value, (0,window.clearTimeout)(this.hv), this.od && (this.od.cancel(), this.od = null), this.Da.value ? this.Ss[this.Ja] ? this.Wu(this.Ss[this.Ja]) : this.hv = (0,window.setTimeout)(function() {
    var a = WE.R({}, {q:this.Ja});
    this.od = (0,z.r)((0,z.q)((0,z.q)((0,z.q)(this.ea.get(a, {na:!0, ce:0}), this.ld, this), function(a) {
      this.Ss[this.Ja] = a;
    }, this), this.Wu, this), z.Cj);
  }.bind(this), 200) : this.od = (0,z.q)((0,z.q)(this.ea.get(VE.R(), {na:!0, ce:0}), this.ld, this), function(a) {
    this.Wu(a, "Collections you follow");
  }, this));
};
z.g.Wu = function(a, b) {
  if (a && a.length) {
    var c = {collections:a, us:!0};
    b && (c.label = b);
    this.Qs.innerHTML = (0,z.K)(z.lp, c);
  } else {
    this.Qs.innerHTML = (0,z.K)(eq, {L:this.Ja});
  }
  (0,z.J)("isAuthenticated") && ((0,z.dd)(this.Dm), this.Dm = [], Tp(this));
};
(0,z.p)(fq, z.Kj);
z.g = fq.prototype;
z.g.H = function() {
  fq.w.H.call(this);
  this.qa(this.Da, "keyup", this.lI, this);
};
z.g.ka = function() {
  this.Xi && (this.Xi.cancel(), this.Xi = null);
  this.Dq = null;
  this.Zu = 0;
  this.Ja = "";
  fq.w.ka.call(this);
};
z.g.lI = function(a) {
  27 == a.keyCode && (this.Da.value = "");
  if ((0,z.J)("useragent.isMobile")) {
    if (13 != a.keyCode) {
      return;
    }
    this.Da.blur();
    return this.search(this.Da.value);
  }
  this.search(this.Da.value, 200);
};
z.g.search = function(a, b) {
  if (this.Ja != a) {
    (0,window.clearTimeout)(this.Zu);
    if (!a) {
      return this.Ja = this.wy.innerHTML = "";
    }
    this.Xi && this.Xi.cancel();
    this.Ja = this.Da.value = a;
    if (this.Dq[a]) {
      return gq(this, a), this.xc(this.Dq[a]);
    }
    this.Zu = (0,window.setTimeout)(function() {
      (0,z.Dk)(yD, {query:a});
      this.Xi = (0,z.Cc)((0,z.r)((0,z.q)(this.ea.get(XE.R({}, {q:a}), {na:!0}), function(b) {
        this.Dq[a] = b;
        this.xc(b);
      }, this), z.Cj), function() {
        gq(this, a);
        this.Xi = null;
      }, this);
    }.bind(this), b || 0);
  }
};
z.g.xc = function(a) {
  this.wy.innerHTML = (0,z.K)(this.Sq, {users:a.value.users, collections:a.value.collections, posts:a.value.posts && (0,z.al)(a.value.posts, a.references)});
  (0,z.Dk)(zD, {query:this.Da.value, numResults:a.value.posts.length + a.value.users.length + a.value.collections.length});
};
(0,z.p)(hq, z.Do);
hq.prototype.Xd = z.SE;
hq.prototype.H = function() {
  hq.w.H.call(this);
  var a = this.L(".js-search-input"), b = this.L(".js-search-results"), b = new fq(this.Oa(), a, b);
  this.Aa(b);
  this.gz && b.search(this.gz);
  a.focus();
};
var YE = ["PENDING", "APPROVED", "NOT_FOUND", "REMOVED", "REJECTED"];
(0,z.p)(kq, z.v);
kq.prototype.C = function() {
  kq.w.C.call(this);
  this.ha.Ba(lq, this.Ys, this);
};
kq.prototype.Ys = function() {
  this.Nm && this.Nm.close();
};
(0,z.p)(Eq, z.Kj);
z.g = Eq.prototype;
z.g.va = function(a) {
  this.Z = a;
  this.Ap = {};
  if (this.Z) {
    a = this.aa.Bb(this.Z).get("virtuals.postedIn");
    for (var b = 0;b < a.length;b++) {
      if ("APPROVED" == a[b].status || "REJECTED" == a[b].status || "PENDING" == a[b].status) {
        this.Ap[a[b].collection.slug] = !0;
      }
    }
    a = this.aa.jl();
    for (b = 0;b < a.Kb();b++) {
      this.Ap[(0,z.lk)((0,z.pk)(a, b), "slug")] = !0;
    }
  }
};
z.g.H = function() {
  Eq.w.H.call(this);
  this.qa(this.Da, "keyup", this.uG, this);
};
z.g.ka = function() {
  this.od && (this.od.cancel(), this.od = null);
  this.Kq = null;
  this.gv = 0;
  this.Ja = "";
  Eq.w.ka.call(this);
};
z.g.wj = function(a) {
  return this.Ts[a];
};
z.g.uG = function(a) {
  a.preventDefault();
  this.Ja != this.Da.value && (this.Ja = this.Da.value, (0,window.clearTimeout)(this.gv), this.od && (this.od.cancel(), this.od = null), this.Da.value ? this.Kq[this.Ja] ? this.xc(this.Kq[this.Ja]) : this.gv = (0,window.setTimeout)(function() {
    this.od = (0,z.r)((0,z.q)(this.Dd.get(WE.R({}, {q:this.Ja}), {na:!0, ce:0}), function(a) {
      this.Kq[this.Ja] = a;
      this.xc(a);
    }, this), z.Cj);
  }.bind(this), 200) : this.xc({value:[]}));
};
z.g.xc = function(a) {
  a.value = a.value.filter(function(a) {
    this.Ts[a.slug] || (this.Ts[a.slug] = a);
    return this.Ap[a.slug] ? !1 : !0;
  }, this);
  a.value = a.value.map(function(a) {
    a.imageId = a.image.imageId;
    a.id = a.slug;
    return a;
  });
  var b = this.Ja || "", b = b.trim();
  a.ci = "collections";
  a.L = b;
  this.X("onSearch", a);
};
(0,z.p)(z.Fq, z.ok);
z.g = z.Fq.prototype;
z.g.yt = null;
z.g.Oy = null;
z.g.kt = 0;
z.g.zz = window.Infinity;
z.g.Cf = function(a, b) {
  this.yt = a;
  this.Oy = b || null;
  (0,z.Gq)(this);
  return this;
};
z.g.$g = (0,z.n)(168);
z.g.add = function() {
  throw Error("Not implemented");
};
z.g.Fh = function() {
  throw Error("Not implemented");
};
z.g.Pf = function() {
  throw Error("Not implemented");
};
z.g.remove = function() {
  throw Error("Not implemented");
};
z.g.Pl = function() {
  throw Error("Not implemented");
};
z.g.update = function() {
  throw Error("Not implemented");
};
z.g.C = function() {
  this.yd.Ba("add", this.Zz, this);
  this.yd.Ba("remove", this.cA, this);
  this.yd.Ba("change", this.aA, this);
  this.Qa = this.yd = null;
  z.Fq.w.C.call(this);
};
z.g.qs = function(a, b) {
  this.yd.qs(a, b);
  return this;
};
z.g.Rn = function(a) {
  return this.yd.Rn(a);
};
z.g.Zz = function() {
  Hq(this);
};
z.g.cA = function() {
  Hq(this);
};
z.g.aA = function(a) {
  var b = this.Qa;
  Hq(this);
  for (var c = [], d = 0;d < a.length;d++) {
    var e = a[d].jo;
    Iq(e, this.Qa) && Iq(e, b) && c.push(a[d]);
  }
  c.length && this.X("change", c);
};
(0,z.p)(z.Vp, z.Kj);
z.g = z.Vp.prototype;
z.g.zz = window.Infinity;
z.g.rh = function(a) {
  return a.cb();
};
z.g.xn = null;
z.g.lt = null;
z.g.qz = null;
z.g.ba = function() {
  return this.N;
};
z.g.H = function() {
  z.Vp.w.H.call(this);
  this.ia.F("change", this.Ll, this);
  this.ia instanceof z.ok && (this.ia.F("add", this.Yw, this), this.ia.F("remove", this.Zw, this));
  this.Zr(!0);
};
z.g.ka = function() {
  this.ia.Ba("change", this.Ll, this);
  this.ia instanceof z.ok && (this.ia.Ba("add", this.Yw, this), this.ia.Ba("remove", this.Zw, this));
  this.N.innerHTML = "";
  delete this.N;
  z.Vp.w.ka.call(this);
};
z.g.getData = (0,z.n)(170);
z.g.Yl = function(a, b) {
  this.rh = a.bind(b);
  this.Zr();
  return this;
};
z.g.Zr = function() {
  this.Ll(null);
};
z.g.Yw = function() {
  this.Ll(null);
};
z.g.Zw = function() {
  this.Ll(null);
};
z.g.Ll = function() {
  if (this.Pd()) {
    var a;
    a = this.ia instanceof z.ok ? (0,z.Kb)(this.ia.Qa.concat(), this.rh) : this.rh.call(null, this.ia);
    a = (0,z.Jq)(this, a);
    a != this.qz && (this.qz = this.N.innerHTML = a);
  }
};
(0,z.p)(Nq, z.Xn);
z.g = Nq.prototype;
z.g.Bm = !1;
z.g.gh = null;
z.g.vh = null;
z.g.U = null;
z.g.ar = null;
z.g.Lk = null;
z.g.Uq = "";
z.g.Fy = "";
z.g.$G = "";
z.g.ZG = "";
z.g.PA = !1;
z.g.rh = null;
z.g.Kz = !1;
z.g.bc = function(a) {
  this.Uq = a;
  return this;
};
z.g.Bf = function(a) {
  this.Fy = a;
  return this;
};
z.g.Yl = function(a) {
  this.rh = a;
  return this;
};
z.g.dg = function(a) {
  this.U = window.document.createElement("div");
  this.U.className = "list-choice";
  var b = {title:this.Uq, description:this.Fy, PC:this.$G, OC:this.ZG, NT:this.PA, EL:!!this.Lk, mo:this.Kz};
  this.ar = (0,z.Up)(new z.Vp(this.U, this.ia, z.Kq), b, "items");
  this.rh && this.ar.Yl(this.rh);
  this.ar.H();
  a = a || this.gh.parentNode;
  b = "uid" + (0,z.sa)(this.gh);
  (0,z.Cc)((0,z.Oy)(this.Sa, this.gh, '\x3cdiv id\x3d"' + b + '"\x3e\x3c/div\x3e', "list-choice-popover", a), this.close, this);
  window.document.getElementById(b).appendChild(this.U);
  a = (0,z.Ad)(window).height / 2 < (0,z.qi)(this.gh).top ? "bottom" : "top";
  (0,z.lA)(this.Sa, a, this.gh);
  a = this.U.querySelector(".list-choice-items");
  (0,z.oA)(this.Sa, a);
  this.Lk && (a = this.U.querySelector(".input-text-collection-search"), this.Lk.Da = a, this.Lk.F("onSearch", this.yJ, this), this.Aa(this.Lk));
  (0,z.Di)(this.U).D("pick", this.iJ, this);
  (0,z.t)((0,z.Ln)(), "list-choice-open");
  this.H();
};
z.g.open = function() {
  var a = this.U;
  window.setTimeout(function() {
    var b = a.querySelector(".list-choice-items");
    b && b.focus();
  }.bind(this), 10);
  return this.vh = new z.wc;
};
z.g.close = function() {
  (0,z.u)((0,z.Ln)(), "list-choice-open");
  this.Sa.remove();
  this.vh && !this.vh.Nc && this.vh.cancel();
  this.vh = null;
  this.Bm && window.setTimeout(this.Xb.bind(this), 1E3);
};
z.g.C = function() {
  this.vh && this.close();
  (0,z.bd)(this.ar);
  (0,z.bd)(this.ia);
  (0,z.Gi)(this.U);
  (0,z.Nd)(this.U);
  Nq.w.C.call(this);
};
z.g.iJ = function(a) {
  this.vh.Ea(a.value);
};
z.g.yJ = function(a) {
  this.U.querySelector(".list-choice-items").innerHTML = a.value.length || "" === a.L ? (0,z.K)(Lq, {items:a.value, mo:!1}) : (0,z.K)(Mq, {ci:a.ci, L:a.L});
  a = this.Sa.ba().querySelector(".list-choice-items");
  a.style.height = "auto";
  (0,z.oA)(this.Sa, a);
};
Pq.prototype.Oa = function() {
  return this.wc;
};
Pq.prototype.xz = function(a) {
  var b = new z.wc, c = window.document.createElement("script");
  c.setAttribute("charset", "UTF-8");
  c.onload = function() {
    b.Ea(!0);
  };
  c.src = a;
  window.document.body.appendChild(c);
  return b;
};
Sq.prototype.add = function(a, b, c) {
  var d = Array.prototype.slice.call(arguments, 2);
  return this.jr(a, function(a) {
    return Vb.apply(null, [b, a].concat(d));
  });
};
Sq.prototype.jr = function(a, b) {
  this.wc.jr(this.Eb, a, b);
  return this;
};
Sq.prototype.pc = function(a, b) {
  this.wc.pc(this.Eb, a, b);
  return this;
};
Sq.prototype.ir = function(a) {
  this.wc.ir(this.Eb, a);
  return this;
};
(0,z.p)(Tq, z.Ij);
z.g = Tq.prototype;
z.g.scope = function(a) {
  return new Sq(this, a);
};
z.g.jw = function(a, b) {
  return Uq(this, b).jw(a);
};
z.g.create = function(a, b, c) {
  return Uq(this, b).create(a, c);
};
z.g.Xf = function(a) {
  return Uq(this, a).Xf();
};
z.g.xl = function(a) {
  return Uq(this, a).xl();
};
z.g.$h = function(a) {
  return Uq(this, a).$h();
};
z.g.Mg = function(a, b) {
  return Uq(this, b).Mg(a);
};
z.g.jr = function(a, b, c) {
  var d = Uq(this, b);
  d.GD(c);
  d.Mg(a) || Wq(d, a);
  this.X("add-provider", a, b);
  return this;
};
z.g.pc = function(a, b, c) {
  b = Uq(this, b);
  if (!b.ck() && (b.Xf() || b.xl() || b.$h())) {
    throw Error('Service already registered with id "' + b.hf + '"');
  }
  b.hn = null;
  b.Qm = c;
  b.Ip = !1;
  Wq(b, a);
  return this;
};
z.g.ir = function(a, b) {
  var c = Uq(this, b);
  if (!c.ck() && (c.Xf() || c.xl() || c.$h())) {
    throw Error('Service already registered with id "' + c.hf + '"');
  }
  c.hn = null;
  c.Qm = null;
  c.Ip = !0;
  Wq(c, a);
  return this;
};
z.g = Vq.prototype;
z.g.Xf = function() {
  return!!this.hn;
};
z.g.xl = function() {
  return!!this.Qm;
};
z.g.$h = function() {
  return this.Ip;
};
z.g.Mg = function(a) {
  return this.Eb == a;
};
z.g.GD = function(a) {
  if (!this.ck()) {
    if (this.Xf()) {
      throw Error('Cannot add multiple providers to service "' + this.hf + '"');
    }
    if (this.$h()) {
      throw Error('Cannot add a provider to manual service "' + this.hf + '"');
    }
  }
  this.hn = a;
  this.Qm = null;
  this.Ip = !1;
  return this;
};
z.g.create = function(a, b) {
  if (!this.Xf()) {
    throw Error('Expected a provider to be registered for "' + this.hf + '"');
  }
  if (!this.Mg(a)) {
    throw Error('Expected service "' + this.hf + '" to be assigned scope "' + a + '"');
  }
  return this.hn.call(null, b);
};
z.g.jw = function(a) {
  if (this.Mg(a)) {
    if (this.Xf()) {
      return(0,z.Jc)();
    }
    if (this.xl()) {
      var b = this.Qm;
      return(0,z.q)(Rq(z.Qq, b), function() {
        if (!this.Xf()) {
          throw Error('Expected module "' + b + '" to register provider for service "' + this.hf + '".');
        }
      }, this);
    }
  }
  return(0,z.Lc)(Error('Expected a provider or module to be registered for "' + this.hf + '" in scope "' + a + '".'));
};
Xq.prototype.cd = function() {
  var a = this.wc, b = this.Eb, c = [], d;
  for (d in a.nn) {
    var e = a.nn[d];
    e.Mg(b) && e.Xf() && c.push(d);
  }
  for (a = 0;a < c.length;a++) {
    b = c[a], this.Nf[b] || $q(this, b);
  }
  this.tg = !0;
  for (var f in this.Nf) {
    Zq(this, f);
  }
};
Xq.prototype.get = function(a) {
  if (a in this.Nf) {
    return this.Nf[a];
  }
  if (this.wc.Mg(this.Eb, a)) {
    if (this.wc.Xf(a)) {
      return $q(this, a), this.Nf[a];
    }
    if (this.wc.xl(a)) {
      throw Error('Cannot synchronously load "' + a + '" for scope "' + this.Eb + '"');
    }
    if (this.wc.$h(a)) {
      throw Error('Cannot locate manually defined service "' + a + '" for scope "' + this.Eb + '"');
    }
    throw Error('Cannot load "' + a + '" for scope "' + this.Eb + '"');
  }
  if (this.cn) {
    return this.cn.get(a);
  }
  throw Error('No service found for "' + a + '"');
};
Xq.prototype.load = function(a) {
  if (this.Nf[a]) {
    return(0,z.Jc)(this.get(a));
  }
  if (this.wc.Mg(this.Eb, a)) {
    if (this.wc.$h(a)) {
      throw Error('Cannot locate manually defined service "' + a + '" for scope "' + this.Eb + '"');
    }
    return(0,z.q)(this.wc.jw(this.Eb, a), function() {
      this.Nf[a] || $q(this, a);
      return this.get(a);
    }, this);
  }
  return this.cn ? this.cn.load(a) : (0,z.Lc)(Error('No service found for "' + a + '"'));
};
Xq.prototype.tH = function(a, b) {
  this.tg && a === this.Eb && $q(this, b);
};
(0,z.p)(br, z.Kj);
z.g = br.prototype;
z.g.sg = null;
z.g.H = function() {
  br.w.H.call(this);
  var a = this.aa.jl();
  this.sg = (0,z.q)((0,z.xk)(a), function() {
    if (0 < a.Kb() || this.xa.get("creator.userId") == (0,z.J)("currentUser.userId")) {
      dr(this, a.Qa.concat()) ? this.ih.innerHTML = "Add/Remove from collections" : this.ih.innerHTML = "Add to collections", (0,z.u)(this.ih, "hide");
    }
  }, this);
  (0,z.yi)("show-cross-poster", this.lv, this);
};
z.g.ka = function() {
  br.w.ka.call(this);
  (0,z.Bi)("show-cross-poster");
  this.sg && (this.sg.cancel(), this.sg = null);
};
z.g.lv = function(a) {
  this.Go(a.target);
};
z.g.Go = function(a) {
  var b = String((0,z.J)("currentUser.userId")), c = this.aa.Bb(this.Z).get("creatorId") == b;
  cr(this);
  var d = this.aa.jl();
  return(0,z.q)((0,z.q)((0,z.xk)(d), function() {
    var b, f = d.Qa.concat().sort(this.Wv.bind(this));
    b = c ? eb(this.Nu, f) : f;
    f = new z.Fq(new z.ok(b));
    b = this.Et(c, dr(this, b));
    f = Oq((new Nq(this.ca, f)).bc(b)).Yl(this.Vv.bind(this));
    f.PA = !1;
    c && (this.vm = new Eq(this.ca), this.vm.va(this.Z), f.Bf("Increase your story’s exposure by submitting it to relevant collections").Lk = this.vm);
    a && (f.gh = a);
    return Bq(this.kd, f, this.pa);
  }, this), function(a) {
    if (this.vm && this.vm.wj(a)) {
      this.Ui.nm = !0, this.ha.navigate(a);
    } else {
      var b, d = this.zg[a], k = this.aa.mg[a] || null;
      d && (k = new z.kk(d.collection));
      b = (0,z.lk)(k, "name");
      d && d.status && "APPROVED" === d.status ? c ? vq(this.kd, this.Z, k, null) : sq(this.kd, this.Z, k) : pq(this.kd, this.Z, a, b, null);
      return k;
    }
  }, this);
};
z.g.Wv = function(a, b) {
  var c = "NOT_FOUND", d = "NOT_FOUND";
  this.zg[a.get("slug")] && (c = this.zg[a.get("slug")].status);
  this.zg[b.get("slug")] && (d = this.zg[b.get("slug")].status);
  return YE.indexOf(c) - YE.indexOf(d);
};
z.g.Vv = function(a) {
  var b = {id:a.get("slug"), name:a.get("name"), imageId:a.get("image.imageId")};
  if (this.zg[a.get("slug")]) {
    switch(this.zg[a.get("slug")].status) {
      case "APPROVED":
        b.description = "Already in this collection";
        b.status = "Remove";
        b.hasIcon = !0;
        break;
      case "REMOVED":
        b.description = "Removed by author", b.disabled = !0;
    }
  }
  return b;
};
z.g.Et = function(a, b) {
  return a ? this.Mp ? "Story published!" : "Submit your story to a collection" : b ? "Add or remove this story from your collections" : "Add this story to your collections";
};
(0,z.p)(z.er, z.wc);
z.er.prototype.aB = function() {
  if (!this.Nc) {
    var a = ((0,z.aj)() - this.Zi) / this.FF, b = this.Dt + (3 * a * a - 2 * a * a * a) * this.EF, b = Math[this.kK](b, this.tv);
    /scroll/.test(this.wh) ? this.pa !== window.document.body || ji ? this.pa[this.wh] = b : window.document.documentElement[this.wh] = b : this.pa.style[this.wh] = b;
    1 <= a ? this.Ea() : window.requestAnimationFrame(this.aB.bind(this));
  }
};
(0,z.p)(fr, z.v);
(0,z.p)(Nr, fr);
Nr.prototype.C = function() {
  this.clear();
  this.ik = this.ek = null;
  Nr.w.C.call(this);
};
Nr.prototype.dg = function(a, b) {
  for (var c = b.Kd(), d = this.Kd(), d = Kr(c, d), e = wb(a.sn), f = [], h = 0;h < e.length;h++) {
    var k = e[h];
    if (k.St) {
      var l = k.Kd(), m;
      a: {
        var s = c, x = l;
        m = Math.max(s.left, x.left);
        var L = Math.min(s.left + s.width, x.left + x.width);
        if (m <= L) {
          var G = Math.max(s.top, x.top), s = Math.min(s.top + s.height, x.top + x.height);
          if (G <= s) {
            m = new z.sf(m, G, L - m, s - G);
            break a;
          }
        }
        m = null;
      }
      m && f.push({fN:k, gN:l, Ur:m});
    }
  }
  this.clear();
  for (c = 0;c < f.length;c++) {
    e = f[c];
    k = e.fN;
    h = vo(d, e.Ur).round();
    k = k.yz.tw();
    for (l = 0;l < k.length;l++) {
      if (m = k[l], m instanceof $n) {
        var L = h, x = e.gN, s = e.Ur, G = m.Kd(), x = Kr(G, x), za = x.ic * x.jc - x.tc * x.uc, x = new z.co(x.jc / za, -x.uc / za, -x.tc / za, x.ic / za, (x.tc * x.mb - x.jc * x.Rb) / za, (x.uc * x.Rb - x.ic * x.mb) / za), s = vo(x, s).ceil();
        s.Ur(G) && (G = m.Bp, m = m.wu, m = "number" == typeof m ? m : 1, !L.width || !L.height || 0 > s.left || 0 > s.top || 0 >= s.width || 0 >= s.height || s.width > G.width || s.height > G.height || (this.ik.save(), this.ik.globalAlpha = m, this.ik.drawImage(G, s.left, s.top, s.width, s.height, L.left, L.top, L.width, L.height), this.ik.restore()));
      }
    }
    k.length && this.Bq.push(h);
  }
};
Nr.prototype.Kd = function() {
  return new z.sf(0, 0, this.ek.width, this.ek.height);
};
Nr.prototype.clear = function() {
  for (var a = 0;a < this.Bq.length;a++) {
    var b = this.Bq[a];
    this.ik.clearRect(b.left - 1, b.top - 1, b.width + 2, b.height + 2);
  }
  this.Bq.length = 0;
};
(0,z.p)(Or, z.v);
Or.prototype.C = function() {
  Or.w.C.call(this);
};
Or.prototype.vs = function(a) {
  var b = {lo:this.zk, hd:this.Cd};
  a && (0,z.Cb)(b, a);
  return b;
};
(0,z.p)(z.Pr, z.v);
z.Pr.prototype.C = function() {
  for (var a in this.Ua) {
    this.Ua[a].cancel();
  }
  z.Pr.w.C.call(this);
};
z.Pr.prototype.Aa = function(a) {
  var b = (0,z.sa)(a);
  b in this.Ua || (this.Ua[b] = a, (0,z.Cc)(a, function() {
    delete this.Ua[b];
  }, this));
  return a;
};
(0,z.p)(Qr, z.v);
z.g = Qr.prototype;
z.g.source = null;
z.g.Vw = null;
z.g.la = null;
z.g.Lu = null;
z.g.fu = null;
z.g.C = function() {
  this.fu = this.Lu = this.la = null;
  (0,z.bd)(this.Ua);
  Qr.w.C.call(this);
};
z.g.cd = function() {
  var a;
  (0,z.J)("variants.use_prl_for_post_to_post_navigation") || (a = this.Jl.Cd);
  a && this.aa.Db[a] || (a = Rr(this));
  this.la = this.aa.Db[a];
  (0,z.J)("variants.enable_post_to_post_navigation") && (this.vf() ? this.xc() : (0,z.q)(this.Ua.Aa(Ak(this.la, 5, !0)), this.xc, this));
};
z.g.xc = function() {
  this.vf() ? this.dg() : this.Jl.Cd != hk && (Rr(this), this.cd());
};
z.g.vf = function() {
  return(0,z.pk)(this.la, rk(this.la, this.Z) + 1);
};
z.g.EM = function() {
  if (!this.Lu) {
    var a = Sr(this);
    a && (this.Lu = this.Ua.Aa(Rs(this.ha, a, this.Jl.vs())));
  }
};
var Qs = Date.now();
Ur.prototype.show = function(a, b, c) {
  var d = this.by, e = window.document.getElementById(a), f = b || Xr;
  a = f != Xr;
  b = (0,z.Jc)();
  this.Za && (d && as(this, d), c && (c = Zr(this, e), c.top = 0, c.left = 0), a && (0,z.q)(b, function() {
    return Yr(this, d, e);
  }, this));
  (0,z.q)(b, function() {
    var a = f(d, e);
    if (this.Za) {
      var b = Zr(this, e), c = d && Zr(this, d);
      c && b.top == c.top && b.left == c.left || (0,z.ii)(this.Za, b.left, b.top);
    }
    return a;
  }, this);
  a && this.Za && (0,z.Cc)(b, function() {
    (0,z.u)(this.Za, "surfaces-transitioning");
    (0,z.u)(this.U, "surface-container-fixed");
    (0,z.u)(e, "surface-transitioning-in");
    d && (0,z.u)(d, "surface-transitioning-out");
  }, this);
  this.by = e;
  return b;
};
Ur.prototype.remove = function(a) {
  (0,z.Nd)(window.document.getElementById(a));
  delete this.Jq[a];
};
(0,z.p)(os, Qr);
z.g = os.prototype;
z.g.ef = null;
z.g.C = function() {
  this.Ca.Ba("resize-end", this.bv, this);
  this.ef && ((0,z.Gi)(this.ef), (0,z.Nd)(this.ef));
  this.ef = null;
  os.w.C.call(this);
};
z.g.dg = function() {
  this.ef = (0,z.xg)(ms, {post:this.vf().cb()});
  this.ef.appendChild((0,z.xg)(ns, {post:this.vf().cb(), YM:qs(this)}));
  if (this.ov = this.ef.querySelector(".picker-target.story-cover-image")) {
    this.Ca.F("resize-end", this.bv, this), (0,z.q)(this.Ud.Pg(), this.bv, this);
  }
  (0,z.Di)(this.ef).D("next-post", function(a) {
    if (!a.Wn) {
      a = Sr(this);
      var b = this.vf();
      a && !this.fu && (this.Vw && (0,z.Dk)(this.Vw, {toPostId:b.get("id"), fromPostId:this.Z}), b = this.Jl.vs({Mo:this.tM.bind(this)}), this.source && (b.source = this.source), this.fu = this.ha.navigate(a, b));
    }
  }, this);
  z.HC || (0,z.R)(this.ef, "mouseover", this.EM, this);
  this.Ek.appendChild(this.ef);
};
z.g.tM = function(a, b) {
  return this.vf() ? qs(this) ? rs(this, a, b) : ss(a, b) : Xr(a, b);
};
z.g.bv = function() {
  this.ov.style.height = this.Ud.Wd.Kd().height + "px";
};
(0,z.p)(ts, z.v);
ts.prototype.H = function() {
  this.wg = !0;
  (0,z.rb)(this.YA, function(a) {
    this.Eb.D(a, this.Zc, this);
  }, this);
};
ts.prototype.ka = function() {
  this.wg = !1;
  (0,z.rb)(this.YA, function(a) {
    this.Eb.clear(a);
  }, this);
};
ts.prototype.Pd = function() {
  return this.wg;
};
ts.prototype.C = function() {
  this.wg && this.ka();
  wi(this.Eb) || (0,z.Gi)(this.Eb);
  ts.w.C.call(this);
};
us.prototype.create = function(a, b, c) {
  return(0,z.q)(a.load(this.hf), function(d) {
    return new d(a, b, c);
  }, this);
};
vs.prototype.create = function(a, b, c) {
  return new this.LJ(a, b, c);
};
(0,z.p)(ws, z.Ij);
var lq = "startNav", Jn = "endNav", xs = 6E4, ZE = !1;
z.g = ws.prototype;
z.g.By = "";
z.g.init = function(a, b) {
  var c = this.ya;
  c.push((0,z.R)(window.document, "click", this.mG, this));
  c.push((0,z.R)(window, "popstate", this.DG, this));
  window.onbeforeunload = this.Gt.bind(this);
  c = {yl:"h" + (0,z.aj)(), Al:!0};
  b && (0,z.Cb)(c, b);
  return this.replace(a, c);
};
z.g.navigate = function(a, b) {
  if (!(0,z.oa)(a)) {
    return(0,z.Cj)("Bad path " + a), Mc();
  }
  a = (0,z.Ga)(a);
  "/" !== a[0] && (a = "/" + a);
  if (Js && this.uy) {
    return Gs(this, Ls(a), b, !1);
  }
  window.location = a;
  return Mc();
};
z.g.reload = function(a) {
  if (null != this.ie) {
    var b = Ls(this.ie);
    Gs(this, b, a, !0, !0);
  } else {
    throw Error("Invalid use of reload. No active path.");
  }
};
z.g.replace = function(a, b) {
  return Gs(this, Ls(a), b, !0);
};
z.g.update = function(a, b) {
  var c = Ls(a), d = b || this.$j;
  d.hash = c.hash;
  delete this.ec[this.ie];
  this.ec[c.path] = this.tb;
  Es(this, this.tb.qb(), c.path, d, !0);
  this.ie = c.path;
  this.$j = d;
};
z.g.fB = function(a, b, c) {
  return(0,z.q)(this.qv.show(a.SD, b, c), function() {
    this.tb && this.tb.ka();
    return a;
  }, this);
};
z.g.eB = function(a, b) {
  var c = (0,z.Ln)();
  c.focus();
  var d = (0,z.Jc)(b), e = window.document.getElementById("#" + a.hash);
  !e || a.Al && this.tb ? a.Al ? (e = this.EA[a.yl] || {scrollX:0, scrollY:0}, (0,z.Dc)(d, this.Kk(c, e.scrollX, e.scrollY))) : (0,z.Dc)(d, this.Kk(c, 0, 0)) : (0,z.Dc)(d, this.Kk(c, 0, e.offsetTop));
  return d;
};
z.g.Kk = function(a, b, c) {
  var d = new z.wc;
  cC ? (0,z.Fn)(function() {
    (0,z.ii)(a, b, c);
    d.Ea(null);
  }) : ((0,z.ii)(a, b, c), d.Ea(null));
  return d;
};
z.g.VF = function(a, b, c) {
  try {
    c.H.call(c);
  } catch (d) {
    (0,z.Cj)(d);
  }
  c.Xd.fm(c);
  null == this.ie || this.tb.Xd.za(this.ie, this.tb) || Ks(this, this.ie, this.tb);
  this.tb = c;
  this.ie = a;
  this.$j = b;
  return c;
};
z.g.AG = function(a, b, c) {
  b !== this.tb && Ks(this, a, b);
  return c;
};
z.g.DG = function(a) {
  if (a.state && a.state.isNavigate) {
    var b = a.state.path, c = {};
    if (a.state.data) {
      try {
        c = window.JSON.parse(a.state.data);
      } catch (d) {
      }
    }
    c.Al = !0;
    this.replace(b, c);
    a.preventDefault();
  }
};
z.g.Gt = function(a) {
  if (!ZE) {
    ZE = !0;
    (0,window.setTimeout)(function() {
      ZE = !1;
    }, 500);
    var b = this.tb && this.tb.or();
    if ("string" == typeof b) {
      return z.w && (a.returnValue = b), b;
    }
    if (b) {
      return z.w && (a.returnValue = "Are you sure you want to leave?  Unsaved changes may be lost."), "Are you sure you want to leave?  Unsaved changes may be lost.";
    }
    z.w && (a.returnValue = void 0);
  }
};
z.g.mG = function(a) {
  if (!(a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || z.w && 1 != a.button || !z.w && a.button)) {
    for (var b = a.target;"A" != b.tagName;) {
      if (b = b.parentNode, !b) {
        return;
      }
    }
    if (b.hostname == window.location.hostname) {
      var c = b.pathname;
      if ((0,z.Da)(c, this.Ps) && !c.match(/\.\w+$/)) {
        for (var d = 0;d < this.Ms.length;d++) {
          if (c.match(this.Ms[d])) {
            return;
          }
        }
        var c = c.substr(this.Ps.length), c = c + (b.search + b.hash), e = !1, d = {};
        if (b = b.getAttribute("data-source")) {
          d.source = b;
        }
        (0,z.r)(this.navigate(c, d), function(a) {
          e = !(a instanceof z.Nc);
        });
        e || a.preventDefault();
      }
    }
  }
};
z.g.yq = function(a, b) {
  this.X.apply(this, arguments);
};
z.g.IJ = function() {
  for (var a in this.ec) {
    var b = this.ec[a];
    b.Xd.Dl(a, b) && b !== this.tb && Ks(this, a, b);
  }
};
z.g.C = function() {
  (0,z.$h)(this.ya);
  ws.w.C.call(this);
};
(0,z.p)(Ps, z.Ca);
var yq;
var zq;
var $E;
Ss.prototype.QH = function() {
  this.af = null;
};
Ss.prototype.open = function(a, b) {
  if (this.af) {
    return null;
  }
  this.af = (new Ts(this.ca, a, !0, b)).open();
  this.af.F($E, this.QH, this);
  return this.af;
};
Ss.prototype.error = function(a) {
  return this.open({title:"Uh oh!", bodyHtml:a, type:z.jk});
};
Ss.prototype.confirm = function(a, b, c, d) {
  return this.open({title:b || "Confirm", bodyHtml:a, type:z.aF, Jh:c}, d);
};
(0,z.p)(Ts, z.Ij);
z.bF = "confirm";
z.cF = "cancel";
$E = "dispose";
zq = "submit";
z.jk = "alert";
z.aF = "confirm";
yq = "form";
z.g = Ts.prototype;
z.g.Lm = !1;
z.g.open = function() {
  this.Ky = (0,z.R)(window, "keydown", this.PF, this);
  window.document.body.appendChild(this.U);
  (0,z.t)(window.document.body, "overlay-dialog-open");
  this.W.focus();
  this.Lm = !0;
  (0,z.ii)(this.U, 0, 0);
  this.X("open", this);
  return this;
};
z.g.close = function() {
  if (this.Lm) {
    if ("next" == this.nc) {
      return this.Um();
    }
    this.Ky && (0,z.$h)(this.Ky);
    this.U.parentNode && (0,z.Nd)(this.U);
    this.Lm = !1;
    (0,z.u)(window.document.body, "overlay-dialog-open");
    this.X("close", this);
    this.Bm && this.C();
    return this;
  }
};
z.g.next = function(a) {
  this.xy.push(a);
  return this;
};
z.g.update = function(a) {
  this.Lm && (a.update = !0, this.U.innerHTML = (0,z.K)(Ep, a), this.nc = a.type || "");
  return this;
};
z.g.L = function(a) {
  return this.U ? this.U.querySelector(a) : null;
};
z.g.pF = function() {
  this.X(z.bF, this);
  this.close();
};
z.g.Um = function() {
  this.X("next", this);
  var a = this.xy.shift();
  a ? this.update(a) : this.close();
};
z.g.dk = function() {
  this.X(z.cF, this);
  this.close();
};
z.g.zq = function() {
  this.ca.get("app").reload();
};
z.g.gK = function() {
  this.X(zq, this);
};
z.g.PF = function(a) {
  27 === a.keyCode && this.close();
};
z.g.C = function() {
  (0,z.Gi)(this.U);
  this.Lm && (this.Bm = !1, this.close());
  this.ca.get("app").Ba(Jn, this.close, this);
  this.X($E, this);
  Ts.w.C.call(this);
};
Us.prototype.Fo = function(a, b) {
  (0,z.Dk)(bD, {postId:a.id, type:b, dest:"email"});
  this.W.open({title:"Share via email", bodyHtml:(0,z.K)($o, {post:a}), Jh:"Send", type:yq}).F(zq, this.CK.bind(this, a.id));
};
Us.prototype.CK = function(a) {
  var b = this.W.af, c = b.L(".share-email-address"), d = c.value.split(",").map(function(a) {
    return a.trim();
  }), e = b.L(".sender-comment"), e = e ? e.value : null, c = new z.Ri(c, {name:"shimmy-shake", duration:400}), f = b.L(".email-address-error-message");
  10 < d.length ? (f.innerHTML = "Oops! You can only email 10 people at a time.", od(f, "visible"), c.start()) : jq(d) ? (d = {postId:a, recipients:d, comment:e}, (0,z.r)((0,z.q)(this.ea.post(dF.R(), d, {na:!0}), this.YH.bind(this, a)), this.XH, this), b.close()) : (f.innerHTML = zp({single:1 == d.length}), od(f, "visible"), c.start());
};
Us.prototype.YH = function(a) {
  this.Ra.H("Your email was successfully sent.", "success");
  (0,z.Dk)(z.aD, {postId:a, type:"post", dest:"email"});
};
Us.prototype.XH = function(a) {
  this.Ra.H("Sorry, we couldn’t send your email. Please try again later.", "failure");
  (0,z.Cj)(a);
};
(0,z.p)(Vs, ts);
Vs.prototype.Zc = function(a) {
  this.JF.Fo(this.xa.cb(), a.target.getAttribute("data-action-type") || "post");
};
z.g = W.prototype;
z.g.lq = null;
z.g.Eu = null;
z.g.toString = function() {
  return this.Du;
};
z.g.R = function(a) {
  Ws(this);
  var b = this.lq.concat(), c;
  for (c in this.Eu) {
    var d = this.Eu[c];
    b[d.index] = d.format(a[c]);
  }
  return b.join("/");
};
z.g.parse = function(a) {
  Ws(this);
  a = a.split("/").map(window.decodeURIComponent);
  for (var b = {}, c = 0;c < a.length;c++) {
    ":" == this.lq[c].charAt(0) && (b[this.lq[c].substr(1)] = a[c]);
  }
  return b;
};
var Xs = /^:([^\[]*)(?:\[pad=([0-9]+)\])?$/;
Ys.prototype.format = function(a) {
  a = String(a);
  if (null != this.padding) {
    var b = Math.max(0, this.padding - a.length);
    a = Array(b + 1).join("0") + a;
  } else {
    if ("number" === typeof a) {
      throw Error("All numeric range keys must be padded: " + a);
    }
  }
  return(0,window.encodeURIComponent)(a);
};
(0,z.p)(X, z.y);
var eF = {id:!0, column:!0, hashKey:!0, rangeKey:!0};
X.prototype.Vr = function(a) {
  return!!eF[a];
};
X.prototype.hC = function() {
  return(0,z.hg)(this, this.ad().da);
};
X.prototype.tL = function() {
  return this.data.column || this.ad().fa.R(this.data);
};
X.prototype.za = function() {
  var a = this.ad();
  return void 0 === a.za || a.za;
};
(0,z.p)(Zs, X);
Y(Zs, !0, {name:"CrossPostedCollection", table:"crossPostedCollection", da:"collectionId", fa:new W(":crossPostedCollectionId"), za:!1, ga:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, crossPostedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Zs.prototype.Kb = function() {
  return(0,z.A)(this, "count");
};
var fF = {ONE:1, mP:2, iP:3, $isProtoEnum:!0};
(0,z.p)($s, X);
Y($s, !1, {name:"TestMessage", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"", fa:new W("undefined"), ga:[], fields:{stringField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, numberField:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, booleanField:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, innerMessageField:{g:function() {
  return at;
}, h:function() {
  return!1;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, repeatedMessageField:{g:function() {
  return at;
}, h:function() {
  return!0;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, repeatedStringField:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, otherFileField:{g:function() {
  return ot;
}, h:function() {
  return!1;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, innerEnum:{g:function() {
  return gF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, numberSet:{g:function() {
  return Number;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!0;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stringSet:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!0;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
var gF = {XN:4, TN:5, cP:6, $isProtoEnum:!0};
(0,z.p)(at, X);
Y(at, !1, {name:"TestInnerMessage", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"", fa:new W("undefined"), ga:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, num:{g:function() {
  return fF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
at.prototype.$a = function() {
  return(0,z.A)(this, "id");
};
at.prototype.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
(0,z.p)(bt, X);
Y(bt, !0, {name:"TestSchema", table:"justTesting", da:"thisId", fa:new W("/path/:rkField/:timestampMs[pad\x3d13]"), Ka:864E5, ga:[], fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rkField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, otherString:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, oneMoreString:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, someFlag:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return!0;
}, j:function() {
}, o:function() {
}}, countDown:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
  return 100;
}, j:function() {
}, o:function() {
}}, fakeObjectField:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, someStringSet:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!0;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, someNumberSet:{g:function() {
  return Number;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!0;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(ct, X);
Y(ct, !0, {name:"TestSchemaWithCache", table:"justTesting", da:"thisId", fa:new W("@"), Ka:864E5, ga:[], fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
ct.prototype.Kb = function() {
  return(0,z.A)(this, "count");
};
(0,z.p)(dt, X);
Y(dt, !0, {name:"TestSchemaWithoutCache", table:"justTesting", da:"thisId", fa:new W("@"), za:!1, ga:[], fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
dt.prototype.Kb = function() {
  return(0,z.A)(this, "count");
};
(0,z.p)(et, X);
Y(et, !0, {name:"TestSchemaWriteOnly", table:"justTesting", da:"thisId", fa:new W("@"), ga:[], Fl:!0, fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
et.prototype.Kb = function() {
  return(0,z.A)(this, "count");
};
(0,z.p)(ft, X);
Y(ft, !0, {name:"RootSchema", table:"justTesting", da:"thisId", fa:new W("@"), Ka:864E5, ga:[], fields:{thisId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(gt, X);
Y(gt, !1, {name:"PolymorphicTypeASchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"", fa:new W("undefined"), ga:[], fields:{someField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, otherField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(ht, X);
Y(ht, !1, {name:"PolymorphicTypeCSchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"", fa:new W("undefined"), ga:[], fields:{deep:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(it, X);
Y(it, !1, {name:"PolymorphicTypeBSchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"", fa:new W("undefined"), ga:[], fields:{anotherField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subSubField:{g:function() {
  return ht;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(jt, X);
Y(jt, !0, {name:"PolymorphicSchema", table:"justTesting", da:"rowId", fa:new W("@"), Ka:864E5, ga:[], fields:{rowId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, typeA:{g:function() {
  return gt;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, typeB:{g:function() {
  return it;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(kt, X);
Y(kt, !1, {name:"MalformedSchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"", fa:new W("undefined"), ga:[], fields:{removedId:null, unknownId:{g:function() {
  return lt;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(lt, X);
Y(lt, !1, {name:"UnknownTypeForTesting", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"", fa:new W("undefined"), ga:[], fields:{}});
(0,z.p)(mt, X);
Y(mt, !1, {name:"TestLSISchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"id", fa:new W(":stringField"), Ka:864E5, ga:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stringField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, numberField:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lsiIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "lsiIndex-index";
}, o:function() {
}}, noLsiIndex:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
mt.prototype.$a = function() {
  return(0,z.A)(this, "id");
};
mt.prototype.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
(0,z.p)(nt, X);
Y(nt, !1, {name:"TestGSISchema", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"id", fa:new W(":stringField"), Ka:864E5, ga:[{Sn:"stringField", yw:"numberField"}, {Sn:"boolField"}], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stringField:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, numberField:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, boolField:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
nt.prototype.$a = function() {
  return(0,z.A)(this, "id");
};
nt.prototype.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
(0,z.p)(ot, X);
Y(ot, !1, {name:"TestOtherFileMessage", table:"MISSING_TABLE_IN_PROTO_DEFINITION", da:"", fa:new W("undefined"), ga:[], fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
ot.prototype.$a = function() {
  return(0,z.A)(this, "id");
};
ot.prototype.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
(0,z.p)(pt, X);
Y(pt, !0, {name:"AccountChangeRequest", table:"userToken", da:"token", fa:new W("@"), za:!1, ga:[], fields:{token:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, action:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tsms:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
var hF = {READ:0, rP:1, gO:2, $isProtoEnum:!0};
(0,z.p)(z.qt, X);
Y(z.qt, !0, {name:"ActivityItem", table:"activityItem", da:"userId", fa:new W("/:occurredAt[pad\x3d13]/:activityType/:actorId"), Ka:864E5, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, occurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, milestoneArg:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionAndTime:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
  return "collectionAndTime-index";
}, o:function() {
}}, postAndTime:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
  return "postAndTime-index";
}, o:function() {
}}, rollupRangeKey:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
  return "rollupRangeKey-index";
}, o:function() {
}}, additionalMessage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.qt.prototype.J = (0,z.n)(82);
z.qt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.qt.prototype.Ta = (0,z.n)(182);
(0,z.p)(z.rt, X);
Y(z.rt, !0, {name:"ActivityRollup", table:"activityRollup", da:"userId", fa:new W("/:activityType/:bucket/:firstOccurredAt[pad\x3d13]"), Ka:864E5, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bucket:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstOccurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastOccurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "lastOccurredAt-index";
}, o:function() {
}}, isUnread:{g:function() {
  return hF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
  return "isUnread-index";
}, o:function() {
}}, isSealed:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, milestoneArg:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionAndTime:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
  return "collectionAndTime-index";
}, o:function() {
}}, postAndTime:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
  return "postAndTime-index";
}, o:function() {
}}}});
z.rt.prototype.J = (0,z.n)(81);
z.rt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.rt.prototype.Ta = (0,z.n)(181);
(0,z.p)(st, X);
Y(st, !0, {name:"ActivityEmail", table:"activityEmail", da:"userId", fa:new W("/:activityType/:bucket/:sentAt[pad\x3d13]"), Ka:864E5, ga:[{Sn:"", yw:""}], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bucket:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sentAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "sentAt-index";
}, o:function() {
}}, activityRangeKeys:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readyToSendAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(tt, X);
Y(tt, !0, {name:"RecurringEmail", table:"recurringEmail", da:"userId", fa:new W("/:type"), Ka:864E5, ga:[{Sn:"timeOffsetMin"}], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, type:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timeOffsetMin:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
tt.prototype.g = function() {
  return(0,z.A)(this, "type");
};
tt.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
(0,z.p)(z.ut, X);
Y(z.ut, !0, {name:"BestOf", table:"bestOf", da:"year", fa:new W("/:month"), Ka:6048E5, ga:[], fields:{month:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, year:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.ut.prototype.getMonth = (0,z.n)(184);
z.ut.prototype.setMonth = function(a) {
  return(0,z.F)(this, "month", a);
};
(0,z.p)(z.vt, X);
Y(z.vt, !0, {name:"PostCollaboratorNew", table:"postCollaborator", da:"postId", fa:new W(":collaboratorId"), Ka:864E5, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collaboratorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.vt.prototype.J = (0,z.n)(80);
z.vt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.vt.prototype.pl = function() {
  return(0,z.A)(this, "state");
};
(0,z.p)(z.wt, X);
Y(z.wt, !0, {name:"PostByCollaboratorNew", table:"postByCollaborator", da:"userId", fa:new W(":postId"), za:!1, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.wt.prototype.J = (0,z.n)(79);
z.wt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.xt, X);
Y(z.xt, !0, {name:"PostByCollaborator", table:"user", da:"userId", fa:new W("/collaborator/:postId"), za:!1, ga:[], Fl:!0, fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.xt.prototype.J = (0,z.n)(78);
z.xt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
var iF = {sN:1, MN:2, fP:3, NO:4, gP:5, $isProtoEnum:!0};
(0,z.p)(z.yt, X);
Y(z.yt, !0, {name:"Collection", table:"collection", da:"collectionId", fa:new W("@"), Ka:864E5, ga:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
  return "";
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, activeAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscribes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unsubscribes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPaywalled:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscriberCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, blacklistedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklisterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverImage:{g:function() {
  return z.Hg;
}, h:function() {
  return!1;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tags:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.yt.prototype;
z.g.getName = function() {
  return(0,z.A)(this, "name");
};
z.g.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
z.g.getMetadata = function() {
  return(0,z.A)(this, "metadata");
};
z.g.Gc = function(a) {
  return(0,z.F)(this, "metadata", a);
};
z.g.ql = (0,z.n)(186);
(0,z.p)(zt, X);
Y(zt, !0, {name:"CollectionIndexEntry", table:"collection", da:"collectionId", fa:new W("/collection/:indexedCollectionId"), za:!1, ga:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, indexedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
zt.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
zt.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
zt.prototype.getMetadata = function() {
  return(0,z.A)(this, "metadata");
};
zt.prototype.Gc = function(a) {
  return(0,z.F)(this, "metadata", a);
};
(0,z.p)(At, X);
Y(At, !0, {name:"CollectionSlug", table:"collectionSlug", da:"slug", fa:new W("@"), Ka:864E5, ga:[], fields:{slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Bt, X);
Y(Bt, !0, {name:"CollectionActiveAt", table:"collectionActiveAt", da:"global", fa:new W("/:activeAt[pad\x3d13]/:collectionId"), za:!1, ga:[], fields:{global:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activeAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Ct, X);
Y(z.Ct, !0, {name:"CollectionPostRelation", table:"collectionPostRelation", da:"collectionId", fa:new W(":postId"), Ka:864E5, za:!0, ga:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, proposedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, posterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, status:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, listedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rejectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Ct.prototype.J = (0,z.n)(77);
z.Ct.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.Dt, X);
Y(z.Dt, !0, {name:"PostCollectionRelation", table:"postCollectionRelation", da:"postId", fa:new W(":collectionId"), Ka:864E5, za:!0, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, posterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, status:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "status-index";
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, proposedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rejectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Dt.prototype.J = (0,z.n)(76);
z.Dt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(Et, X);
Y(Et, !0, {name:"Configuration", table:"configuration", da:"name", fa:new W("@"), Ka:864E5, ga:[], fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, value:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Et.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Et.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
(0,z.p)(Ft, X);
Y(Ft, !0, {name:"Device", table:"device", da:"userId", fa:new W("/:deviceType/:appId/:env/:deviceToken"), Ka:864E5, ga:[{Sn:"deviceToken", yw:"deviceType"}], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deviceType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deviceToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, registeredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deactivatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, appId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, env:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Gt, X);
Y(z.Gt, !0, {name:"FollowUp", table:"followUp", da:"postId", fa:new W("/item/:followUpId"), Ka:864E5, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, addedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "creatorId-index";
}, o:function() {
}}, visibility:{g:function() {
  return jF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, visibilityUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
  return "mediaResourceId-index";
}, o:function() {
}}, creatorNote:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Gt.prototype;
z.g.J = (0,z.n)(75);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.Qn = function() {
  return(0,z.A)(this, "mediaResourceId");
};
z.g.Rj = function(a) {
  return(0,z.F)(this, "mediaResourceId", a);
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.Bf = function(a) {
  return(0,z.F)(this, "description", a);
};
(0,z.p)(z.Ht, X);
Y(z.Ht, !0, {name:"FollowUpOrder", table:"followUpOrder", da:"postId", fa:new W("/order"), Ka:864E5, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUps:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, version:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Ht.prototype.J = (0,z.n)(74);
z.Ht.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.Ht.prototype.gC = function() {
  return(0,z.A)(this, "followUps");
};
(0,z.p)(z.It, X);
Y(z.It, !0, {name:"HighlightList", table:"post", da:"postId", fa:new W("/highlights"), Ka:864E5, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, length:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, version:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, highlights:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.It.prototype.J = (0,z.n)(73);
z.It.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.Jt, X);
Y(z.Jt, !0, {name:"MagnitudePost", table:"homepage", da:"versionId", fa:new W("/postByMagnitude/:timespan/:timestampMs[pad\x3d13]/:postId"), Ka:72E5, ga:[], fields:{versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timespan:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Jt.prototype.J = (0,z.n)(72);
z.Jt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(Kt, X);
Y(Kt, !0, {name:"HomepageGenerated", table:"homepage", da:"versionId", fa:new W("/homepageGenerated/:timespan/:timestampMs[pad\x3d13]/"), Ka:72E5, ga:[], fields:{versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timespan:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postList:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Kt.prototype.Do = function(a) {
  return(0,z.F)(this, "postList", a);
};
(0,z.p)(Lt, X);
Y(Lt, !0, {name:"HomepageLastGenerated", table:"homepage", da:"versionId", fa:new W("/lastGeneratedTimestampMs"), Ka:864E5, ga:[], fields:{versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Mt, X);
Y(z.Mt, !0, {name:"LatestPost", table:"recommendations", da:"userId", fa:new W("/postByTimestamp/:timestamp[pad\x3d13]/:postId"), za:!1, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestamp:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Mt.prototype.J = (0,z.n)(71);
z.Mt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
var kF = {Px:1, bO:2, $isProtoEnum:!0};
(0,z.p)(Nt, X);
Y(Nt, !0, {name:"MediaResource", table:"mediaResource", da:"mediaResourceId", fa:new W("@"), Ka:864E5, ga:[], fields:{mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, addedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "addedAt-index";
}, o:function() {
}}, lastScrapedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "lastScrapedAt-index";
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeSrc:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeType:{g:function() {
  return kF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediumPost:{g:function() {
  return z.ev;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, externalLink:{g:function() {
  return fv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tweet:{g:function() {
  return gv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = Nt.prototype;
z.g.Qn = function() {
  return(0,z.A)(this, "mediaResourceId");
};
z.g.Rj = function(a) {
  return(0,z.F)(this, "mediaResourceId", a);
};
z.g.uf = function() {
  return(0,z.A)(this, "href");
};
z.g.Wl = function(a) {
  return(0,z.F)(this, "href", a);
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.Bf = function(a) {
  return(0,z.F)(this, "description", a);
};
z.g.Jr = function() {
  return(0,z.A)(this, "iframeWidth");
};
z.g.ps = function(a) {
  return(0,z.F)(this, "iframeWidth", a);
};
z.g.sw = function() {
  return(0,z.A)(this, "iframeHeight");
};
z.g.ns = function(a) {
  return(0,z.F)(this, "iframeHeight", a);
};
(0,z.p)(z.Ot, X);
Y(z.Ot, !0, {name:"NoteNew", table:"note", da:"postId", fa:new W("/note/:noteId"), za:!1, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, author:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchorContent:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, highlightId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isRemoved:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stateUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, newHighlight:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, whitelistIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Ot.prototype;
z.g.J = (0,z.n)(70);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.Ta = (0,z.n)(180);
z.g.ua = (0,z.n)(122);
z.g.Gb = (0,z.n)(132);
z.g.pl = function() {
  return(0,z.A)(this, "state");
};
z.g.Dc = (0,z.n)(190);
(0,z.p)(z.Pt, X);
Y(z.Pt, !0, {name:"NoteReplyNew", table:"note", da:"postId", fa:new W("/reply/:noteId/:replyId"), za:!1, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, author:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isRemoved:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stateUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Pt.prototype;
z.g.J = (0,z.n)(69);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.Ta = (0,z.n)(179);
z.g.ua = (0,z.n)(121);
z.g.Gb = (0,z.n)(131);
z.g.pl = function() {
  return(0,z.A)(this, "state");
};
(0,z.p)(z.Qt, X);
Y(z.Qt, !0, {name:"OneTimeToken", table:"oneTimeToken", da:"token", fa:new W("@"), za:!1, ga:[], fields:{token:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tsms:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Qt.prototype.J = (0,z.n)(68);
z.Qt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.Qt.prototype.Ta = (0,z.n)(178);
var lF = {GO:1, LN:2, KE:3, IE:4, $isProtoEnum:!0};
(0,z.p)(z.Rt, X);
Y(z.Rt, !0, {name:"Post", table:"post", da:"postId", fa:new W("@"), Ka:864E5, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
  return "";
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collection:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, status:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, contentParts:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, media:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedTitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedContent:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedContentParts:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, reads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 26;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postView:{g:function() {
  return z.Ll;
}, h:function() {
  return!1;
}, s:function() {
  return!0;
}, t:function() {
  return!1;
}, l:function() {
  return 27;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstPublishedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 28;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 29;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 31;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 32;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 33;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, detectedLanguage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 34;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isBlacklisted:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 35;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklistedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 36;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklisterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 37;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, experimentalCss:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 38;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deletedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 39;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, displayAuthor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 40;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 41;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 42;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, intendedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 43;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestRev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 44;
}, defaultValue:function() {
  return-1;
}, j:function() {
}, o:function() {
}}, views:null, vote:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 46;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 47;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isLatestVersion:null, hasUnpublishedEdits:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 49;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverless:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 50;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Rt.prototype;
z.g.J = (0,z.n)(67);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.wj = function() {
  return(0,z.A)(this, "collection");
};
z.g.ua = (0,z.n)(120);
z.g.Gb = (0,z.n)(130);
z.g.Oh = (0,z.n)(192);
z.g.Xl = (0,z.n)(135);
z.g.fg = (0,z.n)(144);
(0,z.p)(z.St, X);
Y(z.St, !0, {name:"PostEntryIndex", table:"postEntryIndex", da:"postId", fa:new W("@"), za:!1, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.St.prototype.J = (0,z.n)(66);
z.St.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.Tt, X);
Y(z.Tt, !0, {name:"CreatorPostRelation", table:"creatorPostRelation", da:"creator", fa:new W(":postId"), za:!1, ga:[], fields:{creator:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deletedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Tt.prototype.J = (0,z.n)(65);
z.Tt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.Ut, X);
Y(z.Ut, !0, {name:"PostVersion", table:"postVersion", da:"versionId", fa:new W("@"), Ka:36E5, ga:[], fields:{versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, post:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, titleDiff:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, contentParts:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, FORBIDDENContentDiffs:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, FORBIDDENContentDiffParts:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, editor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
  return!1;
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, media:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
  return-1;
}, j:function() {
}, o:function() {
}}, collapse:{g:function() {
  return lF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Ut.prototype;
z.g.J = (0,z.n)(64);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.ua = (0,z.n)(119);
z.g.Gb = (0,z.n)(129);
z.g.We = (0,z.n)(108);
z.g.pi = (0,z.n)(112);
(0,z.p)(z.Vt, X);
Y(z.Vt, !0, {name:"PostChunkNew", table:"postChunk", da:"postId", fa:new W("/:versionId/:idx[pad\x3d5]"), za:!1, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, idx:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, chunk:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Vt.prototype.J = (0,z.n)(63);
z.Vt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.Wt, X);
Y(z.Wt, !0, {name:"PostDelta", table:"postDelta", da:"postId", fa:new W("/:rev[pad\x3d11]"), Ka:864E5, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, savedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, delta:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, baseVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Wt.prototype;
z.g.J = (0,z.n)(62);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.We = (0,z.n)(107);
z.g.pi = (0,z.n)(111);
z.g.Qh = (0,z.n)(194);
z.g.ts = (0,z.n)(196);
z.g.kl = (0,z.n)(198);
z.g.ms = (0,z.n)(200);
z.g.tj = (0,z.n)(138);
z.g.Pj = (0,z.n)(141);
(0,z.p)(Xt, X);
Y(Xt, !0, {name:"PostAggregation", table:"postAggregation", da:"viewName", fa:new W("/:createdAt[pad\x3d13]"), za:!1, ga:[], fields:{viewName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Yt, X);
Y(Yt, !0, {name:"LatestPostAggregation", table:"postAggregation", da:"viewName", fa:new W("/latest"), Ka:864E5, ga:[], fields:{viewName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Zt, X);
Y(z.Zt, !0, {name:"PostPublishedAt", table:"postPublishedAt", da:"publishedAt", fa:new W("/:yyyy/:mm/:dd/:hh/:mi/:ss/:postId"), za:!1, ga:[], fields:{publishedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, yyyy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mm:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, dd:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, hh:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mi:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, ss:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Zt.prototype.J = (0,z.n)(61);
z.Zt.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.$t, X);
Y(z.$t, !0, {name:"ScheduledPost", table:"postQueue", da:"collectionId", fa:new W("/queuedPost/:timestampMs[pad\x3d13]"), Ka:864E5, ga:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.$t.prototype.J = (0,z.n)(60);
z.$t.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.au, X);
Y(z.au, !0, {name:"PostMetrics", table:"postMetrics", da:"postId", fa:new W("/:collectedAt[pad\x3d13]"), za:!1, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.au.prototype.J = (0,z.n)(59);
z.au.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.bu, X);
Y(z.bu, !0, {name:"PostStats", table:"postStats", da:"postId", fa:new W("@"), za:!1, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, reads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.bu.prototype.J = (0,z.n)(58);
z.bu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.cu, X);
Y(z.cu, !0, {name:"LatestPostMagnitude", table:"postMetrics", da:"postId", fa:new W("/latest"), Ka:864E5, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, score:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return-0.5;
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}}});
z.cu.prototype.J = (0,z.n)(57);
z.cu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(du, X);
Y(du, !0, {name:"CollectionStatNew", table:"collectionStat", da:"collectionId", fa:new W("/byHour/:timestampMs[pad\x3d13]"), za:!1, ga:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscribes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, unsubscribes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(eu, X);
Y(eu, !0, {name:"UserStatNew", table:"userStat", da:"userId", fa:new W("/byHour/:collectedAt[pad\x3d13]"), za:!1, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(fu, X);
Y(fu, !0, {name:"UserStat", table:"user", da:"userId", fa:new W("/stats/byHour/:timestampMs[pad\x3d13]"), za:!1, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.gu, X);
Y(z.gu, !0, {name:"PostReferrerTimeseries", table:"postReferrerTimeseries", da:"postId", fa:new W("/:sourceIdentifier/:year/:month/:day/:hour"), za:!1, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sourceIdentifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, year:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, month:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, day:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, hour:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.gu.prototype;
z.g.J = (0,z.n)(56);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.getMonth = (0,z.n)(183);
z.g.setMonth = function(a) {
  return(0,z.F)(this, "month", a);
};
z.g.getDay = (0,z.n)(201);
z.g.Kb = function() {
  return(0,z.A)(this, "count");
};
(0,z.p)(z.hu, X);
Y(z.hu, !0, {name:"PostReferrer", table:"postReferrerCounts", da:"postId", fa:new W("/:sourceIdentifier"), za:!1, ga:[], fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sourceIdentifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, totalCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, type:{g:function() {
  return uC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, internal:{g:function() {
  return z.pg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, search:{g:function() {
  return qg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, site:{g:function() {
  return rg;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, platform:{g:function() {
  return tC;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.hu.prototype.J = (0,z.n)(55);
z.hu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.hu.prototype.g = function() {
  return(0,z.A)(this, "type");
};
z.hu.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
var mF = {pP:0, oO:1, yP:2, HN:3, IO:4, JO:5, tN:6, Ox:7, XO:8, $isProtoEnum:!0};
(0,z.p)(z.iu, X);
Y(z.iu, !0, {name:"User", table:"user", da:"userId", fa:new W("@"), Ka:864E5, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isAuthenticated:null, isBlocked:null, flags:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unverifiedEmail:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bio:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, salt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundImageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterAccessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterAccessTokenSecret:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterScreenName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterAvatar:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deactivatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastPostCreatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastViewedActivityAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInRereads:null, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 27;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 28;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 29;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 30;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 31;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 32;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklistedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 34;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blacklistedBy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 35;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, writeAccessGrantedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 36;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, writeAccessMethod:{g:function() {
  return mF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 37;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postsRead:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 40;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 41;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 42;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastTimezoneOffsetMin:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 43;
}, defaultValue:function() {
  return 9999;
}, j:function() {
}, o:function() {
}}, allowEmails:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 50;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, allowNotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 51;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, googleProfileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 52;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, allowSocialEmails:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 53;
}, defaultValue:function() {
  return 1;
}, j:function() {
}, o:function() {
}}, flagInterstitialCollab:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 100;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flagSeenPrlWelcome:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 101;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flagInterstitialStories:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 102;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flagSeenWritePrompt:null, flagSeenCollectionFollowOnboarding:null, flagSentEspnWelcomeEmail:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 105;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flagSeenEditor:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 106;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterLastImportedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 107;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, socialDataLastCalculatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 108;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebookAccountId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 109;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebookUsername:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 110;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebookDisplayName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 111;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebookAccessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 112;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isVerified:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 113;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, signupMethod:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 114;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, signupIdentifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 115;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.iu.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
z.iu.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
z.iu.prototype.Uf = (0,z.n)(149);
z.iu.prototype.fe = (0,z.n)(154);
(0,z.p)(ju, X);
Y(ju, !0, {name:"UserIndexEntry", table:"userIndexEntry", da:"userId", fa:new W("@"), za:!1, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(ku, X);
Y(ku, !0, {name:"UserName", table:"username", da:"username", fa:new W("@"), Ka:864E5, ga:[], fields:{username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, deactivatedAt:null}});
(0,z.p)(lu, X);
Y(lu, !0, {name:"UserRecentlyViewedCollectionsNew", table:"userViewedCollections", da:"userId", fa:new W("@"), Ka:864E5, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionIds:{g:function() {
  return Object;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.mu, X);
Y(z.mu, !0, {name:"ReadStateNew", table:"readState", da:"userId", fa:new W(":postId"), za:!1, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tsms:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.mu.prototype.J = (0,z.n)(54);
z.mu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(nu, X);
Y(nu, !0, {name:"FacebookIdIndex", table:"userFacebookId", da:"facebookId", fa:new W("@"), Ka:864E5, ga:[], fields:{facebookId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(ou, X);
Y(ou, !0, {name:"UsernameIndex", table:"userUsername", da:"username", fa:new W("@"), Ka:864E5, ga:[], fields:{username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.pu, X);
Y(z.pu, !0, {name:"ReadState", table:"user", da:"userId", fa:new W("/userReadState/:postId"), za:!1, ga:[], Fl:!0, fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tsms:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.pu.prototype.J = (0,z.n)(53);
z.pu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(qu, X);
Y(qu, !0, {name:"UserCollectionRelation", table:"userCollectionRelation", da:"userId", fa:new W(":collectionId"), Ka:864E5, za:!1, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isAdmin:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "isAdmin-index";
}, o:function() {
}}, isContributor:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "isContributor-index";
}, o:function() {
}}, isSubscribed:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "isSubscribed-index";
}, o:function() {
}}, postCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
  return 0;
}, j:function() {
}, o:function() {
}}, isPaidUser:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
  return "isPaidUser-index";
}, o:function() {
}}, isSupporter:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(ru, X);
Y(ru, !0, {name:"CollectionUserRelation", table:"collectionUserRelation", da:"collectionId", fa:new W("/:relationType[pad\x3d0]/:userId"), Ka:864E5, ga:[], fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationType:{g:function() {
  return iF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(su, X);
Y(su, !0, {name:"UserCreatedAt", table:"userCreatedAt", da:"global", fa:new W("/:createdAt[pad\x3d13]/:userId"), za:!1, ga:[], fields:{global:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.tu, X);
Y(z.tu, !0, {name:"UserPostRelation", table:"userPostRelation", da:"userId", fa:new W(":postId"), Ka:864E5, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "readAt-index";
}, o:function() {
}}, readLaterAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
  return "readLaterAddedAt-index";
}, o:function() {
}}, votedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "votedAt-index";
}, o:function() {
}}, collaboratorAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
  return "collaboratorAddedAt-index";
}, o:function() {
}}, notesAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
  return "notesAddedAt-index";
}, o:function() {
}}, subscribedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadSectionName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadVersionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadParagraphName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpamAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, voteNoteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.tu.prototype.J = (0,z.n)(52);
z.tu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.uu, X);
Y(z.uu, !0, {name:"PostUserRelation", table:"postUserRelation", da:"postId", fa:new W(":userId"), za:!1, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "readAt-index";
}, o:function() {
}}, readLaterAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, votedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
  return "votedAt-index";
}, o:function() {
}}, collaboratorAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
  return "collaboratorAddedAt-index";
}, o:function() {
}}, notesAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscribedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
  return "subscribedAt-index";
}, o:function() {
}}, lastReadSectionName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadVersionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadParagraphName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpamAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, voteNoteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.uu.prototype.J = (0,z.n)(51);
z.uu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.vu, X);
Y(z.vu, !0, {name:"UserPostSocialRecommendation", table:"userPostSocialRecommendation", da:"userId", fa:new W(":postId"), Ka:864E5, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, weight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.vu.prototype.J = (0,z.n)(50);
z.vu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(wu, X);
Y(wu, !0, {name:"UserSocial", table:"userSocial", da:"userId", fa:new W(":followedUserId"), za:!1, ga:[], fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followedUserId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterFollowedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
  return "twitterFollowedAt-index";
}, o:function() {
}}}});
var jF = {Yx:1, Uo:2, Qx:3, $isProtoEnum:!0};
(0,z.p)(xu, I);
H(xu, {name:"TestModel1", fields:{modelId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
xu.prototype.Tf = function() {
  return "Model";
};
(0,z.p)(yu, I);
H(yu, {name:"TransitionalActivity", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, occurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, uniqueId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, links:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relativeAge:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
yu.prototype.Tf = function() {
  return "UserActivity";
};
yu.prototype.getMetadata = function() {
  return(0,z.A)(this, "metadata");
};
yu.prototype.Gc = function(a) {
  return(0,z.F)(this, "metadata", a);
};
(0,z.p)(zu, I);
H(zu, {name:"TransitionalActivityLinks", fields:{loadMore:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Au, I);
H(Au, {name:"TransitionalActivityStatus", fields:{newActivityCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Bu, I);
H(z.Bu, {name:"ActivityItem", fields:{activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, occurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, milestoneArg:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, additionalMessage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actor:{g:function() {
  return Mv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "actorId";
}}, collection:{g:function() {
  return Ou;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "collectionId";
}}, post:{g:function() {
  return z.sv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}, note:{g:function() {
  return z.jv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "noteId";
}}, noteReply:{g:function() {
  return z.kv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "replyId";
}}, followUp:{g:function() {
  return Yu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "followUpId";
}}}});
z.g = z.Bu.prototype;
z.g.J = (0,z.n)(49);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.Ta = (0,z.n)(177);
z.g.wj = function() {
  return(0,z.A)(this, "collection");
};
z.g.Pb = (0,z.n)(205);
z.g.yj = function() {
  return(0,z.A)(this, "followUp");
};
(0,z.p)(z.Cu, I);
H(z.Cu, {name:"ActivityRollupItem", fields:{activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actors:{g:function() {
  return Mv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "actorIds";
}}, collection:{g:function() {
  return Ou;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "collectionId";
}}, post:{g:function() {
  return z.sv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}, note:{g:function() {
  return z.jv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "noteId";
}}, noteReply:{g:function() {
  return z.kv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "replyId";
}}, followUp:{g:function() {
  return Yu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "followUpId";
}}, milestoneArg:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastOccurredAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rollupRangeKey:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isUnread:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Cu.prototype;
z.g.wj = function() {
  return(0,z.A)(this, "collection");
};
z.g.Pb = (0,z.n)(204);
z.g.yj = function() {
  return(0,z.A)(this, "followUp");
};
z.g.J = (0,z.n)(48);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.Ta = (0,z.n)(176);
(0,z.p)(Du, I);
H(Du, {name:"ActivityRollupItemList", ti:!0, fields:{activityRollupItems:{g:function() {
  return z.Cu;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastViewedActivityAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Eu, I);
H(Eu, {name:"ActivityEmail", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sentAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return Nv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "userId";
}}, activityItems:{g:function() {
  return z.Bu;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Fu, I);
H(z.Fu, {name:"NewsletterEntry", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, activityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return Nv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "userId";
}}, post:{g:function() {
  return z.sv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}, note:{g:function() {
  return z.jv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "noteId";
}}, actorIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actors:{g:function() {
  return Mv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "actorIds";
}}, message:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, actorCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Fu.prototype.J = (0,z.n)(47);
z.Fu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.Fu.prototype.Ta = (0,z.n)(175);
z.Fu.prototype.Pb = (0,z.n)(203);
(0,z.p)(z.Gu, I);
H(z.Gu, {name:"HandPickedNewsletterItem", fields:{message:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, post:{g:function() {
  return z.sv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}}});
z.Gu.prototype.J = (0,z.n)(46);
z.Gu.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(Hu, I);
H(Hu, {name:"HandPickedNewsletterItems", fields:{override:{g:function() {
  return z.Gu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, overrideSlot:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supplemental:{g:function() {
  return z.Gu;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Iu, I);
H(Iu, {name:"TransitionalAuthInfo", fields:{uid:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, authIssued:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, authSign:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Ju, I);
H(Ju, {name:"RegistrationData", fields:{accessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accessTokenSecret:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accountName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Ju.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Ju.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
(0,z.p)(Ku, I);
H(Ku, {name:"TransitionalAuthResult", fields:{credentials:{g:function() {
  return Iu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, registrationData:{g:function() {
  return Ju;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Lu, I);
H(Lu, {name:"TransitionalCollaborator", fields:{user:{g:function() {
  return z.Lv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Lu.prototype.pl = function() {
  return(0,z.A)(this, "state");
};
var nF = {OO:1, vN:2, TO:3, UO:4, $isProtoEnum:!0};
(0,z.p)(z.Mu, I);
H(z.Mu, {name:"TransitionalCollection", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tags:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, responseTimeFuzzy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, shortDescription:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, metadata:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, virtuals:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return z.Lv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 123;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Mu.prototype;
z.g.Tf = function() {
  return "Collection";
};
z.g.$a = function() {
  return(0,z.A)(this, "id");
};
z.g.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
z.g.getName = function() {
  return(0,z.A)(this, "name");
};
z.g.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
z.g.ql = (0,z.n)(185);
z.g.Bf = function(a) {
  return(0,z.F)(this, "description", a);
};
z.g.bd = function() {
  return(0,z.A)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
z.g.getMetadata = function() {
  return(0,z.A)(this, "metadata");
};
z.g.Gc = function(a) {
  return(0,z.F)(this, "metadata", a);
};
(0,z.p)(Nu, I);
H(Nu, {name:"CollectionItem", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Nu.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Nu.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
Nu.prototype.bd = function() {
  return(0,z.A)(this, "image");
};
Nu.prototype.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
(0,z.p)(Ou, I);
H(Ou, {name:"CollectionWithOwner", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Mv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "creatorId";
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscriberCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = Ou.prototype;
z.g.getName = function() {
  return(0,z.A)(this, "name");
};
z.g.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
z.g.bd = function() {
  return(0,z.A)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
z.g.Bf = function(a) {
  return(0,z.F)(this, "description", a);
};
(0,z.p)(Pu, I);
H(Pu, {name:"CollectionPostManagementItem", fields:{status:{g:function() {
  return nF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, item:{g:function() {
  return Nu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Pu.prototype.getItem = function() {
  return(0,z.A)(this, "item");
};
Pu.prototype.setItem = function(a) {
  return(0,z.F)(this, "item", a);
};
(0,z.p)(Qu, I);
H(Qu, {name:"CollectionPostManagementItemList", ti:!0, fields:{collectionPostManagementItems:{g:function() {
  return Pu;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Ru, I);
H(Ru, {name:"TransitionalRelatedCollectionReference", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, source:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Su, I);
H(Su, {name:"TransitionalCollectionNameVerification", fields:{isAllowed:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, reason:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Tu, I);
H(Tu, {name:"TransitionalPostedIn", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collection:{g:function() {
  return z.Mu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, status:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, posterId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Tu.prototype.wj = function() {
  return(0,z.A)(this, "collection");
};
(0,z.p)(Uu, I);
H(Uu, {name:"TransitionalSiteConfig", fields:{coverMessage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverImgUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Vu, I);
H(Vu, {name:"TransitionalUserAgentCapabilities", fields:{browser:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, family:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, os:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, version:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsDesktopEdit:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsMobileEdit:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsInteract:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsView:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isMobile:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isTablet:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isNative:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsFileAPI:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, supportsFullImageSections:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isTier1:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Wu, I);
H(Wu, {name:"FacebookAccountItem", ti:!0, fields:{name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Wu.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Wu.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
Wu.prototype.bd = function() {
  return(0,z.A)(this, "image");
};
Wu.prototype.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
(0,z.p)(z.Xu, I);
H(z.Xu, {name:"TransitionalFollowUp", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, addedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, visibility:{g:function() {
  return oF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, visibilityUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorNote:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Xu.prototype;
z.g.Tf = function() {
  return "FollowUp";
};
z.g.J = (0,z.n)(45);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.Qn = function() {
  return(0,z.A)(this, "mediaResourceId");
};
z.g.Rj = function(a) {
  return(0,z.F)(this, "mediaResourceId", a);
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.Bf = function(a) {
  return(0,z.F)(this, "description", a);
};
(0,z.p)(Yu, I);
H(Yu, {name:"FollowUpItem", fields:{followUpId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Yu.prototype.qb = function() {
  return(0,z.A)(this, "title");
};
Yu.prototype.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
Yu.prototype.Bf = function(a) {
  return(0,z.F)(this, "description", a);
};
(0,z.p)(z.Zu, I);
H(z.Zu, {name:"Image", fields:{imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, height:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, width:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, strategy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, verticalGradient:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, cropType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, darken:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, blur:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, url:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Zu.prototype;
z.g.Uf = (0,z.n)(148);
z.g.fe = (0,z.n)(153);
z.g.Ve = function() {
  return(0,z.A)(this, "height");
};
z.g.Qj = function(a) {
  return(0,z.F)(this, "height", a);
};
z.g.sl = function() {
  return(0,z.A)(this, "width");
};
z.g.Tj = function(a) {
  return(0,z.F)(this, "width", a);
};
z.g.qi = (0,z.n)(158);
z.g.ll = function() {
  return(0,z.A)(this, "filter");
};
z.g.Cf = function(a) {
  return(0,z.F)(this, "filter", a);
};
z.g.Aj = (0,z.n)(206);
(0,z.p)(z.$u, I);
H(z.$u, {name:"TransitionalImageInfo", fields:{imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, filter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundSize:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, originalHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, strategy:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, height:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, width:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.$u.prototype;
z.g.Uf = (0,z.n)(147);
z.g.fe = (0,z.n)(152);
z.g.ll = function() {
  return(0,z.A)(this, "filter");
};
z.g.Cf = function(a) {
  return(0,z.F)(this, "filter", a);
};
z.g.Jd = function() {
  return(0,z.A)(this, "backgroundSize");
};
z.g.oi = function(a) {
  return(0,z.F)(this, "backgroundSize", a);
};
z.g.Ph = function() {
  return(0,z.A)(this, "originalWidth");
};
z.g.$l = function(a) {
  return(0,z.F)(this, "originalWidth", a);
};
z.g.nl = function() {
  return(0,z.A)(this, "originalHeight");
};
z.g.Zl = function(a) {
  return(0,z.F)(this, "originalHeight", a);
};
z.g.qi = (0,z.n)(157);
z.g.Ve = function() {
  return(0,z.A)(this, "height");
};
z.g.Qj = function(a) {
  return(0,z.F)(this, "height", a);
};
z.g.sl = function() {
  return(0,z.A)(this, "width");
};
z.g.Tj = function(a) {
  return(0,z.F)(this, "width", a);
};
var pF = {Px:1, jP:2, PN:3, $isProtoEnum:!0};
(0,z.p)(av, I);
H(av, {name:"TransitionalMediaResource", fields:{mediaResourceId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediaResourceType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, domain:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, iframeSrc:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, mediumPost:{g:function() {
  return z.bv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, externalLink:{g:function() {
  return cv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tweet:{g:function() {
  return dv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailWidth:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thumbnailHeight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, display:{g:function() {
  return pF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 26;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = av.prototype;
z.g.Tf = function() {
  return "MediaResource";
};
z.g.Qn = function() {
  return(0,z.A)(this, "mediaResourceId");
};
z.g.Rj = function(a) {
  return(0,z.F)(this, "mediaResourceId", a);
};
z.g.uf = function() {
  return(0,z.A)(this, "href");
};
z.g.Wl = function(a) {
  return(0,z.F)(this, "href", a);
};
z.g.Nh = function() {
  return(0,z.A)(this, "domain");
};
z.g.Vl = function(a) {
  return(0,z.F)(this, "domain", a);
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.Bf = function(a) {
  return(0,z.F)(this, "description", a);
};
z.g.Jr = function() {
  return(0,z.A)(this, "iframeWidth");
};
z.g.ps = function(a) {
  return(0,z.F)(this, "iframeWidth", a);
};
z.g.sw = function() {
  return(0,z.A)(this, "iframeHeight");
};
z.g.ns = function(a) {
  return(0,z.F)(this, "iframeHeight", a);
};
(0,z.p)(z.bv, I);
H(z.bv, {name:"TransitionalMediaResourceMediumPost", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.bv.prototype.J = (0,z.n)(44);
z.bv.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(cv, I);
H(cv, {name:"TransitionalMediaResourceExternalLink", fields:{quotes:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(dv, I);
H(dv, {name:"TransitionalMediaResourceTweet", fields:{tweetId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tweet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterScreenName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.ev, I);
H(z.ev, {name:"MediaResourceMediumPost", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.ev.prototype.J = (0,z.n)(43);
z.ev.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(fv, I);
H(fv, {name:"MediaResourceExternalLink", fields:{quotes:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(gv, I);
H(gv, {name:"MediaResourceTweet", fields:{tweetId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, tweet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterScreenName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.hv, I);
H(z.hv, {name:"TransitionalNote", ti:!0, fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, state:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, author:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchorContent:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, highlightId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isRemoved:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, stateUpdatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, removedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, whitelistIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replies:{g:function() {
  return z.hv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, authorUser:{g:function() {
  return z.Lv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.hv.prototype;
z.g.J = (0,z.n)(42);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.Ta = (0,z.n)(174);
z.g.ua = (0,z.n)(118);
z.g.Gb = (0,z.n)(128);
z.g.pl = function() {
  return(0,z.A)(this, "state");
};
z.g.Dc = (0,z.n)(189);
(0,z.p)(z.iv, I);
H(z.iv, {name:"TransitionalHighlight", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, startIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, endIndex:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.iv.prototype;
z.g.$a = function() {
  return(0,z.A)(this, "id");
};
z.g.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
z.g.Dc = (0,z.n)(188);
z.g.ta = function() {
  return(0,z.A)(this, "startIndex");
};
z.g.Sd = function(a) {
  return(0,z.F)(this, "startIndex", a);
};
z.g.ua = (0,z.n)(117);
z.g.Gb = (0,z.n)(127);
(0,z.p)(z.jv, I);
H(z.jv, {name:"NoteItem", fields:{noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, anchor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Mv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "creatorId";
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.jv.prototype.Ta = (0,z.n)(173);
z.jv.prototype.Dc = (0,z.n)(187);
z.jv.prototype.ua = (0,z.n)(116);
z.jv.prototype.Gb = (0,z.n)(126);
(0,z.p)(z.kv, I);
H(z.kv, {name:"NoteReplyItem", fields:{noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, replyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Mv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "creatorId";
}}, content:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.kv.prototype.Ta = (0,z.n)(172);
z.kv.prototype.ua = (0,z.n)(115);
z.kv.prototype.Gb = (0,z.n)(125);
(0,z.p)(z.lv, I);
H(z.lv, {name:"TransitionalPost", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, versionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return z.Lv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, homeCollection:{g:function() {
  return z.Mu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, homeCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, intendedCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, detectedLanguage:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isPublished:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, hasUnpublishedEdits:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestRev:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstPublishedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedAt:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isRead:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, vote:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, experimentalCss:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, displayAuthor:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, content:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, media:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, virtuals:{g:function() {
  return z.mv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 26;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, providerName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 27;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, reasons:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 28;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, ranking:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 29;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, weight:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 30;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 31;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, coverless:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 32;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.lv.prototype;
z.g.Tf = function() {
  return "Post";
};
z.g.$a = function() {
  return(0,z.A)(this, "id");
};
z.g.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
z.g.Xl = (0,z.n)(134);
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.Oh = (0,z.n)(191);
z.g.ua = (0,z.n)(114);
z.g.Gb = (0,z.n)(124);
z.g.fg = (0,z.n)(143);
(0,z.p)(z.mv, I);
H(z.mv, {name:"TransitionalPostVirtuals", fields:{currentCollectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, statusForCollection:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAtRelative:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAtRelative:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAtRelative:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, updatedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedAtEnglish:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, allowNotes:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, languageTier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, snippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, previewImage:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, wordCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 16;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readingTime:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 17;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, draftSnippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 18;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 19;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, userPostRelation:{g:function() {
  return z.Qv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 20;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isOnReadingList:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 21;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postedIn:{g:function() {
  return Tu;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 22;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, publishedInCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 23;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersBySocialRecommends:{g:function() {
  return z.Lv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 24;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesBySocialRecommends:{g:function() {
  return z.hv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 25;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.mv.prototype.Ld = (0,z.n)(86);
z.mv.prototype.ge = (0,z.n)(93);
(0,z.p)(nv, I);
H(nv, {name:"TransitionalRecommendedPost", fields:{post:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, source:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.ov, I);
H(z.ov, {name:"PostEmbeddable", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Mv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collection:{g:function() {
  return Nu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, miroUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, baseUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.ov.prototype;
z.g.J = (0,z.n)(41);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.wj = function() {
  return(0,z.A)(this, "collection");
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.Ld = (0,z.n)(85);
z.g.ge = (0,z.n)(92);
z.g.bd = function() {
  return(0,z.A)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
(0,z.p)(z.pv, I);
H(z.pv, {name:"PostDelta", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, rev:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, savedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, delta:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, baseVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.pv.prototype;
z.g.J = (0,z.n)(40);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.We = (0,z.n)(106);
z.g.pi = (0,z.n)(110);
z.g.Qh = (0,z.n)(193);
z.g.ts = (0,z.n)(195);
z.g.kl = (0,z.n)(197);
z.g.ms = (0,z.n)(199);
z.g.tj = (0,z.n)(137);
z.g.Pj = (0,z.n)(140);
(0,z.p)(z.qv, I);
H(z.qv, {name:"PostDeltaList", ti:!0, fields:{postDeltas:{g:function() {
  return z.pv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.rv, I);
H(z.rv, {name:"PostItem", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.rv.prototype.J = (0,z.n)(39);
z.rv.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.rv.prototype.qb = function() {
  return(0,z.A)(this, "title");
};
z.rv.prototype.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
(0,z.p)(z.sv, I);
H(z.sv, {name:"PostWithAuthor", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creatorId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, creator:{g:function() {
  return Mv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "creatorId";
}}, subtitle:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, latestPublishedVersion:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readingTime:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, snippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, emailSnippet:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.sv.prototype;
z.g.J = (0,z.n)(38);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.qb = function() {
  return(0,z.A)(this, "title");
};
z.g.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
z.g.Ld = (0,z.n)(84);
z.g.ge = (0,z.n)(91);
z.g.bd = function() {
  return(0,z.A)(this, "image");
};
z.g.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
(0,z.p)(tv, I);
H(tv, {name:"SocialUserUserRelationshipItem", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetUserId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isFollowing:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isTwitterFollowing:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isFacebookFollowing:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, isMediumFollowing:{g:function() {
  return Boolean;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
tv.prototype.Tf = function() {
  return "Social";
};
(0,z.p)(uv, I);
H(uv, {name:"SocialUserStatsItem", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersFollowedCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersFollowedByCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
uv.prototype.Tf = function() {
  return "SocialStats";
};
(0,z.p)(z.vv, I);
H(z.vv, {name:"SocialActivityRelationship", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, noteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, user:{g:function() {
  return Mv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "userId";
}}, note:{g:function() {
  return z.jv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "noteId";
}}}});
z.vv.prototype.Ta = (0,z.n)(171);
z.vv.prototype.Pb = (0,z.n)(202);
(0,z.p)(z.wv, I);
H(z.wv, {name:"SocialActivityRollup", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, recommendedItems:{g:function() {
  return z.vv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, recommendNoteItems:{g:function() {
  return z.vv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, publishedItems:{g:function() {
  return z.vv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdItems:{g:function() {
  return z.vv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followedItems:{g:function() {
  return z.vv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, editedItems:{g:function() {
  return z.vv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collection:{g:function() {
  return Ou;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "collectionId";
}}, post:{g:function() {
  return z.sv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
  return "postId";
}}}});
z.wv.prototype.J = (0,z.n)(37);
z.wv.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.wv.prototype.wj = function() {
  return(0,z.A)(this, "collection");
};
(0,z.p)(xv, I);
H(xv, {name:"SocialActivityRollupList", fields:{socialActivityRollups:{g:function() {
  return z.wv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
var qF = {AE:1, LE:2, ME:3, DE:4, rE:5, BE:6, $isProtoEnum:!0}, rF = {EE:1, Ox:2, HE:3, JE:4, oE:5, zE:6, $isProtoEnum:!0}, sF = {PE:1, tE:2, vE:3, yE:4, $isProtoEnum:!0};
(0,z.p)(yv, I);
H(yv, {name:"TransitionalHourlyUserStat", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, timestampMs:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.zv, I);
H(z.zv, {name:"TransitionalHourlyPostStat", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, acceptedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, flaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, followUpsCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInReadsUnique:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedInViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutReads:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, loggedOutViews:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, magnitude:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesCreated:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unflaggedSpam:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 13;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, unvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 14;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, upvotes:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 15;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.zv.prototype.J = (0,z.n)(36);
z.zv.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(z.Av, I);
H(z.Av, {name:"TransitionalReferrer", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sourceIdentifier:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, totalCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, type:{g:function() {
  return qF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, internal:{g:function() {
  return z.Bv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, search:{g:function() {
  return Cv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, site:{g:function() {
  return Dv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, platform:{g:function() {
  return sF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Av.prototype.J = (0,z.n)(35);
z.Av.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.Av.prototype.g = function() {
  return(0,z.A)(this, "type");
};
z.Av.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
(0,z.p)(z.Bv, I);
H(z.Bv, {name:"TransitionalInternalReferrer", fields:{type:{g:function() {
  return rF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, profileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Bv.prototype.g = function() {
  return(0,z.A)(this, "type");
};
z.Bv.prototype.Hb = function(a) {
  return(0,z.F)(this, "type", a);
};
z.Bv.prototype.J = (0,z.n)(34);
z.Bv.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
(0,z.p)(Cv, I);
H(Cv, {name:"TransitionalSearchReferrer", fields:{domain:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, keywords:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Cv.prototype.Nh = function() {
  return(0,z.A)(this, "domain");
};
Cv.prototype.Vl = function(a) {
  return(0,z.F)(this, "domain", a);
};
(0,z.p)(Dv, I);
H(Dv, {name:"TransitionalSiteReferrer", fields:{href:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, title:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Dv.prototype.uf = function() {
  return(0,z.A)(this, "href");
};
Dv.prototype.Wl = function(a) {
  return(0,z.F)(this, "href", a);
};
Dv.prototype.qb = function() {
  return(0,z.A)(this, "title");
};
Dv.prototype.bc = function(a) {
  return(0,z.F)(this, "title", a);
};
var tF = {IN:1, zN:10, WN:2, RO:3, BN:4, lP:5, SO:6, eP:7, dP:8, JN:9, $isProtoEnum:!0};
(0,z.p)(Ev, I);
H(Ev, {name:"TransitionalPostIdSuggestions", fields:{postIds:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Fv, I);
H(Fv, {name:"SuggestionReasonUser", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Fv.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Fv.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
Fv.prototype.bd = function() {
  return(0,z.A)(this, "image");
};
Fv.prototype.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
(0,z.p)(Gv, I);
H(Gv, {name:"SuggestionReasonCollection", fields:{collectionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, slug:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Gv.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Gv.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
Gv.prototype.bd = function() {
  return(0,z.A)(this, "image");
};
Gv.prototype.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
(0,z.p)(z.Hv, I);
H(z.Hv, {name:"SuggestionReasonPost", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Hv.prototype.J = (0,z.n)(33);
z.Hv.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.Hv.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
z.Hv.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
(0,z.p)(z.Iv, I);
H(z.Iv, {name:"PostIdSuggestion", fields:{postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, provider:{g:function() {
  return tF;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collections:{g:function() {
  return Gv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, posts:{g:function() {
  return z.Hv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, users:{g:function() {
  return Fv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Iv.prototype;
z.g.J = (0,z.n)(32);
z.g.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
z.g.GD = function(a) {
  return(0,z.F)(this, "provider", a);
};
z.g.jl = function() {
  return(0,z.A)(this, "collections");
};
z.g.Kr = function() {
  return(0,z.A)(this, "posts");
};
(0,z.p)(Jv, I);
H(Jv, {name:"PostIdSuggestionList", ti:!0, fields:{suggestions:{g:function() {
  return z.Iv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Kv, I);
H(Kv, {name:"TransitionalUploadInfo", fields:{fileId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Lv, I);
H(z.Lv, {name:"TransitionalUser", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastPostCreatedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, imageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, backgroundImageId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, bio:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, virtuals:{g:function() {
  return Object;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitterScreenName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, socialStats:{g:function() {
  return uv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, social:{g:function() {
  return tv;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = z.Lv.prototype;
z.g.Tf = function() {
  return "User";
};
z.g.getName = function() {
  return(0,z.A)(this, "name");
};
z.g.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
z.g.Uf = (0,z.n)(146);
z.g.fe = (0,z.n)(151);
(0,z.p)(Mv, I);
H(Mv, {name:"UserItem", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Mv.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Mv.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
Mv.prototype.bd = function() {
  return(0,z.A)(this, "image");
};
Mv.prototype.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
(0,z.p)(Nv, I);
H(Nv, {name:"UserWithEmail", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, image:{g:function() {
  return z.Zu;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Nv.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Nv.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
Nv.prototype.bd = function() {
  return(0,z.A)(this, "image");
};
Nv.prototype.jd = function(a) {
  return(0,z.F)(this, "image", a);
};
(0,z.p)(Ov, I);
H(Ov, {name:"UserItemList", ti:!0, fields:{userItems:{g:function() {
  return Mv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Pv, I);
H(Pv, {name:"UsernameList", fields:{usernames:{g:function() {
  return String;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(z.Qv, I);
H(z.Qv, {name:"TransitionalUserPostRelation", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, postId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, readLaterAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, votedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, collaboratorAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesAddedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, subscribedAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadSectionName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadVersionId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastReadParagraphName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 12;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.Qv.prototype.J = (0,z.n)(31);
z.Qv.prototype.va = function(a) {
  return(0,z.F)(this, "postId", a);
};
var oF = {Yx:1, Uo:2, Qx:3, $isProtoEnum:!0};
(0,z.p)(Rv, I);
H(Rv, {name:"TransitionalUpvotes", fields:{users:{g:function() {
  return z.Lv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, count:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersBySocialRecommends:{g:function() {
  return z.Lv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, notesBySocialRecommends:{g:function() {
  return z.hv;
}, h:function() {
  return!0;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Rv.prototype.Kb = function() {
  return(0,z.A)(this, "count");
};
(0,z.p)(Sv, z.y);
Sv.prototype.ol = function() {
  return this.ad().path;
};
Sv.prototype.ni = function(a) {
  for (var b in a) {
    b in this.ad().fields && (0,z.F)(this, b, a[b]);
  }
  return this;
};
Sv.prototype.za = function() {
  var a = this.ad();
  return void 0 === a.za || a.za;
};
(0,z.p)(Uv, Sv);
Tv(Uv, {name:"FacebookTokenData", path:"/oauth/access_token", fields:{accessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, expires:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Vv, Sv);
Tv(Vv, {name:"FacebookAccount", path:"/me", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, firstName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, lastName:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, gender:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, email:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 8;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, verified:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 9;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, locale:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 10;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, thirdPartyId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 11;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Vv.prototype.$a = function() {
  return(0,z.A)(this, "id");
};
Vv.prototype.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
Vv.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Vv.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
(0,z.p)(Wv, Sv);
Tv(Wv, {name:"FacebookFriend", path:"/me/friends", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
Wv.prototype.$a = function() {
  return(0,z.A)(this, "id");
};
Wv.prototype.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
Wv.prototype.getName = function() {
  return(0,z.A)(this, "name");
};
Wv.prototype.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
(0,z.p)(Xv, Sv);
Tv(Xv, {name:"UserUserRelationship", path:"/users/users", ho:"UserUserRelationshipItemList", fo:"userUserRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, facebook:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, twitter:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, medium:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Yv, Sv);
Tv(Yv, {name:"UserPostRelationship", path:"/users/posts", ho:"UserPostRelationshipItemList", fo:"userPostRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, recommendedNoteId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(Zv, Sv);
Tv(Zv, {name:"UserCollectionRelationship", path:"/users/collections", ho:"UserCollectionRelationshipItemList", fo:"userCollectionRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)($v, Sv);
Tv($v, {name:"CollectionPostRelationship", path:"/collections/posts", ho:"CollectionPostRelationshipItemList", fo:"collectionPostRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(aw, Sv);
Tv(aw, {name:"SocialRelationship", path:"queries?", ho:"SocialRelationshipItemList", fo:"sociaRelationshipItems", fields:{sourceEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, sourceEntityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, targetEntityType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, relationshipType:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, createdAt:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(bw, Sv);
Tv(bw, {name:"User", path:"/users", ho:"UserItemList", fo:"userItems", fields:{userId:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersFollowedCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, usersFollowedByCount:{g:function() {
  return Number;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
(0,z.p)(cw, Sv);
Tv(cw, {name:"TwitterAccount", path:"users/lookup.json", fields:{id:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 1;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, name:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 2;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, username:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 3;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, description:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 4;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, avatarUrl:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 5;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accessToken:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 6;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}, accessTokenSecret:{g:function() {
  return String;
}, h:function() {
  return!1;
}, s:function() {
  return!1;
}, t:function() {
  return!1;
}, l:function() {
  return 7;
}, defaultValue:function() {
}, j:function() {
}, o:function() {
}}}});
z.g = cw.prototype;
z.g.$a = function() {
  return(0,z.A)(this, "id");
};
z.g.lc = function(a) {
  return(0,z.F)(this, "id", a);
};
z.g.getName = function() {
  return(0,z.A)(this, "name");
};
z.g.Xa = function(a) {
  return(0,z.F)(this, "name", a);
};
z.g.Bf = function(a) {
  return(0,z.F)(this, "description", a);
};
dw.prototype.add = function(a, b) {
  for (var c = a.replace(/(^\/|\/$)/g, "").split("/"), d = [], e = this.cE, f = [], h = 0;h < c.length;h++) {
    var k, l;
    k = l = c[h];
    if ("*" == l && h != c.length - 1) {
      throw Error("Invalid path [" + a + "], * must only be at the end.");
    }
    if (":" == l[0]) {
      k = ":", d.push(l.substr(1)), f.push(null);
    } else {
      if ("@" == l[0]) {
        k = l.indexOf(":");
        var m = l.substr(1, k - 1);
        l = l.substr(k + 1);
        k = "@";
        e["@"] || (e["@"] = {parent:e});
        e["@"][m] || (e["@"][m] = {IM:new RegExp(l), parent:e["@"], Pu:l});
        d.push(m);
        e = e["@"][m];
        f.push(null);
        continue;
      } else {
        f.push(k);
      }
    }
    e[k] || (e[k] = {parent:e});
    e = e[k];
  }
  if (e.object) {
    throw Error("Can not register [" + a + "], path is ambiguous. [" + e.fullPath + "] previously registered.");
  }
  e.matches = d;
  e.fullPath = a;
  e.object = b;
  return function(a) {
    for (var b = [], c = 0, d = 0;d < f.length;d++) {
      null == f[d] ? b.push(arguments[c++]) : "*" == f[d] ? b.push(Array.prototype.slice.call(arguments, c).join("/")) : b.push(f[d]);
    }
    return "/" + b.join("/");
  };
};
fw.prototype.add = function(a) {
  var b = a.path;
  this.Cu.add(b, a);
  this.HJ[b] = a;
  this.eH[b] = a.nM;
  return this;
};
fw.prototype.Lr = function(a, b) {
  var c = Ns(this.Cu, a);
  return(c = c && c.object) && c.Lr(a, b);
};
Z.prototype.Lr = function(a, b) {
  var c = this.LM;
  if (!c) {
    return null;
  }
  for (var d = 0;d < c.length;d++) {
    var e = (0,c[d])(a, b);
    if (e) {
      return e;
    }
  }
  return null;
};
var WE;
var bH;
var aH;
var ZG;
var UG;
var Cy;
var NA;
var Py;
var HG;
var Ry;
var xG;
var qG;
var dF;
var hG;
var gG;
var cG;
var bG;
var $F;
var XF;
var WF;
var VF;
var VE;
var SF;
var RF;
var PF;
var OF;
var MF;
var LF;
var KF;
var JF;
var IF;
var HF;
var GF;
var FF;
var Uy;
var DF;
var yF;
var xF;
var wF;
var UE;
var vF;
z.uF = new Z("/");
vF = new Z("/reading-list");
UE = new Z("/home/load-more");
wF = new Z("/latest");
xF = new Z("/m/trending");
new Z("/me/suggestions/post-ids");
new Z("/top-100");
yF = new Z("/top-100/:monthYearSlug");
z.zF = new Z("/p/new-post");
z.nx = new Z("/p/:postId");
z.AF = new Z("/p/:postId/edit");
z.BF = new Z("/_/p/blank");
z.CF = new Z("/p/:postId/deltas");
DF = new Z("/m/tos");
Uy = new Z("/m/signin");
z.EF = new Z("/@username:@.*");
FF = new Z("/@username:@.*/latest");
GF = new Z("/@username:@.*/recommended");
HF = new Z("/@username:@.*/has-recommended");
IF = new Z("/@username:@.*/collections");
JF = new Z("/me/drafts");
KF = new Z("/@username:@.*/drafts");
LF = new Z("/me/drafts/shared");
MF = new Z("/@username:@.*/drafts/shared");
z.NF = new Z("/me/export");
OF = new Z("/me/bookmarks");
new Z("/me/reading-list");
PF = new Z("/me/discovery-stream");
z.QF = new Z("/me/settings");
RF = new Z("/me/stats");
SF = new Z("/@username:@.*/stats");
VE = new Z("/collections");
z.TF = new Z("/new-collection");
z.UF = new Z("/:collectionSlug");
VF = new Z("/:collectionSlug/settings");
new Z("/:collectionSlug/latest");
WF = new Z("/:collectionSlug/trending");
XF = new Z("/:collectionSlug/submissions");
z.YF = new Z("/:collectionSlug/new-post");
z.Dq = new Z("/:collectionSlug/:postId");
z.ZF = new Z("/:collectionSlug/:postId/edit");
$F = new Z("/m/espn");
z.aG = new Z("/m/espn/welcome");
bG = new Z("/m/start-writing");
cG = new Z("/m/jobs");
new Z("/_/ios/:appVersion/app");
new Z("/_/ios/latest/app");
new Z("/_/ios/user-config");
new Z("/_/ios/appInfo");
new Z("/_/ios/:appVersion/manifest");
new Z("/_/ios/ipa/:ipaMD5");
new Z("/_/ios/logs");
new Z("/_/ios/device/:deviceToken");
new Z("/_/ios/test/post-ids");
var dG = new Z("/m/app");
new Z("/recommended");
new Z("/collections/recommended");
new Z("/r");
new Z("/help");
new Z("/js/plovr/proxy/*");
new Z("/js/main-base.bundle.js");
new Z("/_/status");
new Z("/_/oh-noes");
new Z("/_/stat");
new Z("/_/debug/user-agent");
var fz = new Z("/_/activity-status");
new Z("/_/upload/");
new Z("/_/iframe-upload/");
z.eG = new Z("/_/c/verify-name");
z.fG = new Z("/_/c/verify-count");
gG = new Z("/_/vote/p/:postId");
hG = new Z("/_/vote/:collectionSlug/:postId");
dF = new Z("/_/share/email");
new Z("/_/make-public/:collectionSlugOrP/:postId/:noteId");
new Z("/_/variants");
new Z("/_/homepage/generateHomepageMagnitudes");
new Z("/_/homepage/generateHomepage");
new Z("/_/generate/postMetricsMagnitudes");
new Z("/_/generate/collectionPostAggregations");
new Z("/_/admin");
new Z("/_/admin/users");
new Z("/_/admin/users/:username");
new Z("/_/admin/users/:username/email");
new Z("/_/admin/users/:username/refresh-avatar");
new Z("/_/admin/users/:username/email/verified");
new Z("/_/admin/users/:twitterId/import-twitter-graph");
new Z("/_/admin/users/:username/errors");
new Z("/_/admin/errors");
new Z("/_/admin/events");
new Z("/_/admin/post/change-author");
new Z("/_/admin/collection/change-owner");
new Z("/_/admin/collection/add-admin");
new Z("/_/admin/collection/change-slug");
new Z("/_/admin/postDebugger");
new Z("/_/admin/post/undelete/:postId");
new Z("/_/admin/collectionDebugger");
new Z("/_/admin/scheduled-posts");
new Z("/_/admin/scheduled-posts/:collectionId/:timestampMs");
new Z("/_/admin/scheduled-posts/process-now");
new Z("/_/admin/scheduled-posts/edit/:collectionId/:timestampMs/:editedTimestampMs");
new Z("/_/admin/routes");
new Z("/_/admin/configs");
new Z("/_/admin/push-notifications");
new Z("/_/admin/prl/clearSubBuilders");
new Z("/_/admin/payments/transaction/test");
new Z("/_/admin/payments/subscription/create-test");
new Z("/_/admin/payments/subscription/cancel-test");
new Z("/_/admin/cacheDebugger");
new Z("/_/admin/cacheDebugger/:cacheKey/delete");
new Z("/_/admin/images");
new Z("/_/admin/images/:appImageId");
new Z("/_/admin/images/:appImageKey/:appImageId");
new Z("/_/email/preview");
new Z("/_/email/preview/:template");
new Z("/_/admin/checkAndSchedulePost");
new Z("/_/admin/reserved-twitter-usernames");
new Z("/_/admin/disallowed-usernames");
new Z("/_/admin/tags");
new Z("/_/admin/tags/repopulated");
var iG = new Z("/_/admin/blacklist");
new Z("/_/admin/blacklist/clear-data");
new Z("/_/admin/newsletter/manage");
new Z("/_/admin/newsletter/send-now");
new Z("/_/admin/newsletter/send-at/:timeOffsetMin");
new Z("/_/admin/newsletter/send-using-form");
new Z("/_/admin/switchboard-rules");
new Z("/_/api/site-config");
new Z("/_/perf/routes");
new Z("/_/perf/route");
new Z("/_/perf/graph");
new Z("/_/perf/graphNodes");
new Z("/_/intents/further-reading/make-public/:postId/:followUpId/:token");
z.jG = new Z("/_/copyedits/:postId");
z.kG = new Z("/_/media-resources/*");
new Z("/media/:mediaResourceId");
new Z("/_/api/users/:userId");
z.lG = new Z("/_/api/users/available-usernames");
new Z("/_/api/posts/:postId/collection-management");
new Z("/_/api/posts/:postId/recommenders");
var Sy = new Z("/m/popup/nextstep");
new Z("/m/facebook/close");
z.mG = new Z("/_/api/facebook/connect");
z.nG = new Z("/top-100/:monthYearSlug/load-more");
new Z("/p/:postId/version");
z.oG = new Z("/p/:postId/publish");
new Z("/p/:postId/revert");
z.pG = new Z("/p/:postId/revert/:versionId/:baseRev");
qG = new Z("/p/:postId/state/read");
new Z("/p/:postId/state/viewed");
var rG = new Z("/p/:postId/state/location");
new Z("/p/:postId/state");
new Z("/p/:postId/meta");
var sG = new Z("/p/:postId/vote"), tG = new Z("/p/:postId/spam");
new Z("/p/:postId/bookmarks");
var uG = new Z("/p/:postId/upvotes"), vG = new Z("/p/:postId/referrers"), zz = new Z("/p/:postId/follow-ups/new");
new Z("/p/:postId/follow-ups/order");
var wG = new Z("/p/:postId/follow-ups"), Cz = new Z("/p/:postId/follow-ups/:followUpId");
new Z("/p/:postId/follow-ups/:followUpId/visibility");
new Z("/p/:postId/collaborators");
xG = new Z("/p/:postId/collaborators/:collaboratorId");
z.yG = new Z("/p/:postId/notes/new");
z.zG = new Z("/p/:postId/notes");
z.AG = new Z("/p/:postId/notes/:noteId");
z.BG = new Z("/p/:postId/notes/:noteId/state");
z.CG = new Z("/p/:postId/notes/:noteId/new-reply");
z.DG = new Z("/p/:postId/notes/:noteId/:replyId");
z.EG = new Z("/p/:postId/notes/:noteId/:replyId/state");
z.FG = new Z("/p/:postId/updateCss");
z.GG = new Z("/p/:postId/display-author");
Ry = new Z("/m/account/authenticate-twitter");
new Z("/m/account/verify-twitter");
new Z("/m/account/confirm/:key");
HG = new Z("/m/account/create");
z.IG = new Z("/m/account/deactivate");
Py = new Z("/m/token");
z.JG = new Z("/m/goodbye");
new Z("/m/signin/refresh");
new Z("/m/signout/:xsrf");
NA = new Z("/me/activity");
z.KG = new Z("/@username:@.*/latest/load-more");
z.LG = new Z("/@username:@.*/recommended/load-more");
z.MG = new Z("/@username:@.*/has-recommended/load-more");
new Z("/me/collections");
new Z("/me/collections/viewed");
new Z("/me/posts");
z.NG = new Z("/me/drafts/shared/load-more");
z.OG = new Z("/@username:@.*/drafts/shared/load-more");
z.PG = new Z("/me/drafts/load-more");
z.QG = new Z("/@username:@.*/drafts/load-more");
new Z("/me/export/:exportId");
new Z("/me/subscriptions/user/:userId");
new Z("/me/subscriptions/collection/:collectionSlug");
new Z("/_/subscribe/collection/:collectionSlug");
new Z("/_/subscribe/user/:userId");
new Z("/me/unsubscribe/:userId/:hash");
new Z("/me/unsubscribe/:emailSettingKey/:userId/:hash");
z.RG = new Z("/me/settings/:setting");
z.SG = new Z("/me/username");
z.TG = new Z("/me/update-email");
Cy = new Z("/me/send-verify");
UG = new Z("/me/activity/last-viewed");
z.VG = new Z("/me/stats/total/:startTimeMs/:endTimeMs");
z.WG = new Z("/me/stats/:postId/:startTimeMs/:endTimeMs");
z.XG = new Z("/@username:@.*/stats/total/:startTimeMs/:endTimeMs");
z.YG = new Z("/@username:@.*/stats/:postId/:startTimeMs/:endTimeMs");
new Z("/feed/recent");
new Z("/feed/newest");
new Z("/feed/latest");
ZG = new Z("/feed/:collectionSlug");
z.$G = new Z("/feed/@username:@.*");
new Z("/embed");
new Z("/_/embed/@username:@.*");
new Z("/_/embed/:collectionSlug");
new Z("/_/embed/p/:postId");
new Z("/_/embed/:collectionSlug/:postId");
new Z("/c/:collectionId");
new Z("/:collectionSlug/load-more");
new Z("/:collectionSlug/subscribers");
new Z("/:collectionSlug/related");
new Z("/:collectionSlug/paywall");
aH = new Z("/:collectionSlug/:postId/vote");
bH = new Z("/search");
z.cH = new Z("/search/users");
WE = new Z("/search/collections");
z.dH = new Z("/search/tags");
new Z("/search/posts");
var XE = new Z("/search/all");
new Z("/_/webhooks/braintree");
new Z("/*");
(0,z.p)(jw, z.Kj);
z.g = jw.prototype;
z.g.ph = function() {
  return!!this.xa.get("latestPublishedVersion");
};
z.g.L = function(a) {
  return this.Kc.L(a);
};
z.g.H = function() {
  jw.w.H.call(this);
  this.ph() ? this.im = (0,z.r)((0,z.q)((0,z.q)(Gn(500), function() {
    var a = uG.R({postId:(0,z.lk)(this.xa, "id")});
    return this.ea.get(a, {na:!0, background:!0});
  }, this), this.rJ, this), z.Cj) : this.im = (0,z.Jc)(!0);
  this.Ua.Aa(this.im);
  (0,z.Di)(this.Kc.N).D("upvote", this.nB, this).D("unvote", this.nB, this);
};
z.g.yv = function() {
  this.Fg && (this.Fg.set("count", (0,z.mk)(this.Fg, "count") + (this.xa.get("vote") ? 1 : -1)), this.Mq());
};
z.g.rJ = function(a) {
  this.Fg = new z.kk(a.value);
  this.Mq();
};
z.g.Mq = function() {
  if (this.Fg) {
    var a = this.L(".vote-widget"), b = lw(this), c = mw(this, b), d = c.map(function(a) {
      return b[a.userId];
    });
    a.innerHTML = (0,z.K)(ls, {users:c, ZC:d});
  }
};
z.g.nB = function(a) {
  if (!this.Tt) {
    this.Tt = !0;
    var b = "unvote" == a.he, c = a.target, d = this.up() ? aH.R({postId:a.value, collectionSlug:this.up()}) : sG.R({postId:a.value});
    this.xa.set("vote", !b);
    this.yv();
    b ? ((0,z.Dk)(ZC, {collectionSlug:this.up(), postIds:[(0,z.lk)(this.xa, "id")]}), (0,z.u)(this.L(".post-article"), "has-vote"), (0,z.u)(c, "active"), c.setAttribute("data-action", "upvote"), d = this.ea.Hd(d, {qe:!0})) : ((0,z.Dk)(YC, {collectionSlug:this.up(), postIds:[(0,z.lk)(this.xa, "id")]}), (0,z.u)(this.L(".post-article"), "has-vote"), (0,z.t)(c, "active"), c.setAttribute("data-action", "unvote"), d = this.ea.put(d, null, {qe:!0}));
    (0,z.Cc)(d, function() {
      this.Tt = !1;
    }, this);
    (0,z.r)(d, function() {
      (0,z.Vc)(c, "active");
      (0,z.Vc)(this.L(".post-article"), "has-vote");
      c.setAttribute("data-action", a.he);
      this.xa.set("vote", b);
      this.yv();
    }, this);
    (0,z.r)(d, (0,z.oq)(this.W, "We were unable to save your recommendation. Please try again later."));
  }
};
z.g.ka = function() {
  (0,z.bd)(this.Ua);
  jw.w.ka.call(this);
};
z.g.C = function() {
  (0,z.bd)(this.Fg);
  jw.w.C.call(this);
};
var ow = {BLOCKQUOTE:!0, PRE:!0, P:!0, H1:!0, H2:!0, H3:!0, HR:!0, DIV:!0, FIGURE:!0, UL:!0, OL:!0};
Nw.prototype.R = function(a) {
  this.Ad.text = this.XA.join("");
  (0,z.Ea)(this.Ad.text, "\n") && (0,z.Am)(this.Ad, this.Ad.text.length - 1, this.Ad.text.length);
  a && this.Ad.text.toLowerCase() == a.toLowerCase() && (0,z.Am)(this.Ad, 0, this.Ad.text.length);
  return this.Ad;
};
(0,z.p)(Rw, z.Kj);
var Sw = 2E3;
Rw.prototype.H = function() {
  Rw.w.H.call(this);
  this.Ca.F("scroll-throttled", this.Me, this);
};
Rw.prototype.ka = function() {
  this.Ca.Ba("scroll-throttled", this.Me, this);
  this.Dy.cancel();
  this.zA();
  Rw.w.ka.call(this);
};
Rw.prototype.Me = function(a, b) {
  for (var c = b.top > this.sz, d = this.Op, e = d;0 <= e && e < this.zu.length;e += c ? 1 : -1) {
    var f = (0,z.ki)(this.zu[e], a).y;
    if (c) {
      if (f < b.top) {
        d = e;
      } else {
        break;
      }
    } else {
      if (f < b.top) {
        d = e;
        break;
      }
    }
  }
  this.sz = b.top;
  this.Op != d && (this.Op = d, this.Dy());
};
Rw.prototype.zA = function() {
  this.nq && this.nq.cancel();
  var a = this.zu[this.Op], b = (0,z.vw)(a, this.Gf), a = a.getAttribute("name"), c = b.getAttribute("name");
  a && c && (b = rG.R({postId:this.xa.get("id")}), a = {versionId:this.xa.get("latestVersion"), sectionName:c, paragraphName:a}, this.nq = (0,z.r)((0,z.Cc)((0,z.q)(this.ea.put(b, a, {na:!0, background:!0}), function(a) {
    this.xa.set("userPostRelation", a.value);
  }, this), function() {
    this.nq = null;
  }, this), z.Cj));
};
(0,z.p)(z.Uw, z.Kj);
var Vw = 20;
z.g = z.Uw.prototype;
z.g.br = !1;
z.g.U = null;
z.g.Yo = !0;
z.g.QA = !1;
z.g.Gj = function() {
  return this.br;
};
z.g.H = function() {
  z.Uw.w.H.call(this);
  this.qa(window.document.body, "keyup", this.Rz);
  this.qa(window.document.body, "mouseup", this.Rz);
};
z.g.ba = function() {
  return this.U;
};
z.g.C = function() {
  (0,z.Gi)(this.U);
  (0,z.Nd)(this.U);
  z.Uw.w.C.call(this);
};
z.g.mI = function(a) {
  "INPUT" != a.target.tagName && (a.preventDefault(), a.stopPropagation());
};
z.g.Rz = function(a) {
  (0,z.Td)(this.U, a.target) || this.xs();
};
z.g.yK = function() {
  this.X("update");
};
N("j", "landscape", function(a, b, c) {
  return'\x3cdiv class\x3d"logged-out-post-footer" style\x3d"background-image: url(\'' + (0,z.P)((0,z.Q)(c.onboardingLandscapeFooterImage)) + '\')"\x3e\x3cdiv class\x3d"layout-single-column"\x3e\x3cdiv class\x3d"logged-out-branding"\x3e\x3ch2 class\x3d"logged-out-branding-title"\x3e\x3cspan class\x3d"logged-out-branding-name"\x3e' + (0,z.O)(c.productName) + '\x3c/span\x3e\x3c/h2\x3e\x3cp class\x3d"logged-out-tagline"\x3eThe stories that matter to you, written and recommended by the people you know.\x3c/p\x3e\x3cdiv class\x3d"btn-set"\x3e\x3ca class\x3d"btn btn-large btn-primary btn-light" title\x3d"Create an account" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/" tabindex\x3d"-1"\x3eJoin Medium\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e' + 
  cx(null, c) + "\x3c/div\x3e\x3c/div\x3e";
});
N("j", "covers", function(a, b, c) {
  return'\x3cdiv class\x3d"logged-out-post-footer logged-out-post-footer-cover" style\x3d"background-image: url(\'' + (0,z.P)((0,z.Q)(c.promoStartWritingBackgroundImage)) + '\')"\x3e\x3cdiv class\x3d"layout-single-column"\x3e\x3cdiv class\x3d"logged-out-branding"\x3e\x3ch1 class\x3d"promo-title"\x3e' + (c.supportsEdit ? "Your audience awaits. Tell a story on " + (0,z.O)(c.productName) + " today." : "The stories that matter to you, written and recommended by the people you know.") + '\x3c/h1\x3e\x3cdiv class\x3d"promo-actions btn-set"\x3e' + 
  (c.supportsEdit ? '\x3ca class\x3d"btn btn-large btn-primary btn-light no-user-select" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/p/new-post"\x3eStart writing\x3c/a\x3e' : '\x3ca class\x3d"btn btn-large btn-primary btn-light no-user-select" data-action\x3d"sign-in-with-twitter" data-action-value\x3d"/"\x3eJoin ' + (0,z.O)(c.productName) + "\x3c/a\x3e") + "\x3c/div\x3e" + (c.supportsEdit ? '\x3cdiv class\x3d"align-center"\x3e\x3cimg class\x3d"promo-image" src\x3d"' + (0,z.P)((0,z.Q)(c.promoStartWritingHomeImage)) + 
  '"\x3e\x3c/div\x3e' : "") + "\x3c/div\x3e" + cx(null, c) + "\x3c/div\x3e\x3c/div\x3e";
});
N("j", "toolbar", function(a, b, c) {
  a = {cx:"onboarding-toolbar", Ar:'\x3cspan class\x3d"btn-set onboarding-toolbar-branding"\x3e\x3cspan class\x3d"logged-out-toolbar-icon icons icons-logo-m"\x3e\x3c/span\x3e\x3cspan class\x3d"logged-out-toolbar-title"\x3ePublished on ' + (0,z.O)(c.productName) + '\x3c/span\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(c.welcomeUrl)) + '" class\x3d"logged-out-toolbar-about" title\x3d"' + (0,z.P)(c.productName) + ' — The stories that matter to you, written and recommended by the people you know."\x3eAbout ' + 
  (0,z.O)(c.productName) + "\x3c/span\x3e\x3c/span\x3e", Lh:cx({ML:!0}, c)};
  return Pp(a);
});
(0,z.p)(ex, z.Co);
var fx = 0;
z.g = ex.prototype;
z.g.Gf = null;
z.g.Si = null;
z.g.lm = null;
z.g.$m = null;
z.g.ke = null;
z.g.Np = null;
z.g.xa = null;
z.g.cc = null;
z.g.wz = null;
z.g.Tc = null;
z.g.hu = null;
z.g.eb = null;
z.g.Bi = null;
z.g.fC = function() {
  return this.Ha;
};
z.g.qb = function() {
  var a = [this.xa.get("title")];
  this.cc && a.push(this.cc.get("name"));
  a.push((0,z.J)("productName"));
  return a.join(" — ");
};
z.g.bg = function(a) {
  if (!a.value || !a.references) {
    var b = Error("trying to process bad embedded data in post/ShowScreen");
    a = JSON.stringify(a);
    hj(b, "badData", Qa(a));
    throw b;
  }
  b = (0,z.al)(a.value, a.references);
  b = this.xa = (0,z.Qk)(this.aa, b);
  this.la && -1 == this.la.indexOf(b) && this.la.add(b);
  if (a.contextCollection) {
    var c = (0,z.al)(a.contextCollection, a.references);
    this.cc = (0,z.Zk)(this.aa, c);
  }
  this.nF = a.collaborators;
  if ((0,z.J)("supportsEdit") && !this.ph() && b.get("creator.userId") == (0,z.J)("currentUser.userId")) {
    throw a = this.Ha ? z.ZF.R({postId:this.Z, collectionSlug:this.Ha}) : z.AF.R({postId:this.Z}), this.ha.navigate(a, this.eJ), new z.Nc(this.wz);
  }
};
z.g.zc = function() {
  return this.wz = (0,z.q)((0,z.q)(this.ea.get(mx(this), {na:!0}), this.bg, this), this.Bg, this);
};
z.g.Ab = function() {
  var a = new z.Un(this.qb(), (0,z.lk)(this.xa, "virtuals.snippet"), "article");
  a.author = (0,z.lk)(this.xa, "creator.name");
  a.lx = "https://www.facebook.com/medium";
  a.kx = (0,z.lk)(this.xa, "firstPublishedAt");
  this.Gc(a);
  this.Gf = this.L(".post-article");
  this.lm = this.Gf.getElementsByClassName("body")[0];
  this.L(".background-size-cover") && this.L(".post-header-image-cover");
  (a = this.L(".background-size-full")) && this.Aa(new Eo(this.Oa(), a));
  (0,z.Di)(this.N).D("sign-in", this.$J, this).D("approve-crosspost", this.dG, this).D("reject-crosspost", this.HG, this).D("post-edit", this.GF, this).D("show-collaborator", this.cB, this).D("hide-collaborator", this.cB, this).D("share-on-twitter", this.RJ, this).D("share-on-facebook", this.QJ, this).D("more-actions", this.kH, this).D("report-spam", this.zJ, this).D("embed-story", this.MF, this).D("scroll-to-post-start", this.FA, this).D("resume", this.FJ, this).D("show-other-collections", this.WJ, 
  this);
  this.cr = new jw(this.Oa(), this.xa, this.fC.bind(this));
  (0,z.zo)(this.Oa(), "vote-widget", this.cr);
  this.Aa(this.cr);
  this.Aa(new Vs(this.N, this.Oa(), this.xa));
  (0,z.J)("isAuthenticated") && this.Aa(new Rw(this.Oa(), this.Gf, this.xa));
  if (a = this.L(".show-cross-poster")) {
    this.fp = new br(this.Oa(), (0,z.Ln)(), a, this.xa, this.Mp), this.Aa(this.fp);
  }
  this.kd = new kq(this.Oa());
  this.Ua = new z.Pr;
};
z.g.H = function() {
  ex.w.H.call(this);
  (0,z.Ok)(1, "post");
  this.L(".picker-layout-fill");
  !gx(this) && this.xa && this.ph() && (0,z.Dk)(HD, {postId:this.Z, collectionSlug:this.Ha});
  this.ph() || (0,z.Dk)(ID, {postId:this.Z});
  (0,z.t)(window.document.body, "template-flex-article");
  500 >= window.innerWidth || (this.eb = new z.Uw, Ww(this.eb, ix(this), this.ph()), (0,z.Bo)(this, this.eb.ba()), this.Aa(this.eb));
  jx(this);
  var a = this.Xu(), b = (0,z.kw)(this.cr), c = kx(this);
  (0,z.Cc)((0,z.Cc)((0,z.Cc)(a, function() {
    return c;
  }), function() {
    return b;
  }), function() {
    (0,z.t)(this.N, "post-supplemental-loaded");
  }, this);
  (0,z.Lj)(this, this.Ca, "scroll-end", this.tu, this);
  (0,z.Lj)(this, this.Ca, "resize-end", this.Hm, this);
  this.tu();
  this.Hm();
  if ((0,z.J)("variants.use_experimental_css")) {
    if (a = (0,z.lk)(this.xa, "experimentalCss")) {
      this.Si = (0,z.Ef)(a);
    }
    this.jn();
  }
  (0,z.Lj)(this, this.NJ, pB, this.kJ, this);
  if (this.Mp) {
    var d = this.aa.jl();
    this.Np = (0,z.q)((0,z.xk)(d), function() {
      var a = this.L(".show-cross-poster");
      if (0 < d.Kb() || gx(this)) {
        if (this.Gi) {
          return(0,z.Oy)(this.Sa, a, (0,z.K)(Lp)), !1;
        }
        this.fp && (0,z.q)(this.fp.Go(a), function(a) {
          this.cc = a;
          this.Ha = a.get("slug");
          this.ha.update(mx(this));
        }, this);
      }
    }, this);
  }
};
z.g.ka = function() {
  this.Si && (0,z.Gf)(this.Si);
  this.jn();
  this.ke && (this.ke.cancel(), this.ke = null);
  this.Np && (this.Np.cancel(), this.Np = null);
  this.$m && ((0,z.Nd)(this.$m), this.$m = null);
  (0,z.u)(this.N, "post-supplemental-loaded");
  (0,z.u)(window.document.body, "template-flex-article");
  (0,z.bd)(this.Ua);
  (0,z.bd)(this.Vd);
  (0,z.bd)(this.Tc);
  (0,z.bd)(this.hu);
  ex.w.ka.call(this);
};
z.g.zy = function(a) {
  return a && this.aa.Db[a] ? this.aa.Db[a] : this.Ha ? Xk(this.aa, this.Ha) : null;
};
z.g.ph = function() {
  return!!this.xa.get("latestPublishedVersion");
};
z.g.RJ = function(a) {
  this.Yq.Fo((0,z.lk)(this.xa, "title"), (0,z.lk)(this.xa, "creator.userId"), (0,z.lk)(this.xa, "creator.username"), (0,z.lk)(this.xa, "creator.name"), (0,z.lk)(this.xa, "creator.twitterScreenName") || "", this.Z, a.target.getAttribute("data-action-type") || "post", this.nF);
};
z.g.zJ = function() {
  this.W.confirm("Are you sure you want to report this post as spam?").F(z.bF, this.AJ, this);
};
z.g.MF = function() {
  (0,z.Dk)(LD, {collectionSlug:this.Ha, postId:this.Z});
  this.W.open({title:"Embed this story", bodyHtml:(0,z.K)($w, {post:this.xa.cb(), collection:this.cc ? this.cc.cb() : void 0}), type:z.jk}).L("textarea").select();
};
z.g.AJ = function() {
  var a = (0,z.lk)(this.xa, "title"), b = tG.R({postId:this.Z});
  (0,z.Cc)(this.ea.put(b, {na:!0, background:!0}), function(b) {
    b instanceof Error || !1 === b ? this.Ra.H(cs({title:a}), "error") : this.Ra.H(bs({title:a}), "success");
  }, this);
};
z.g.kH = function(a) {
  (0,z.Oy)(this.Sa, a.target, (0,z.K)(Kp, {postId:this.Z}), "post-more-actions-popover", this.N);
};
z.g.FJ = function(a) {
  (a = this.L('[name\x3d"' + a.value + '"]')) ? this.Kk(a) : this.FA();
};
z.g.FA = function() {
  var a = this.N.querySelector(".post-page-wrapper-inner");
  this.Kk(a);
};
z.g.Kk = function(a) {
  a = (0,z.li)(a);
  this.ke && this.ke.cancel();
  this.ke = new z.er((0,z.Ln)(), "scrollTop", 600, Math.max(a, 0));
};
z.g.kJ = function(a) {
  a = (0,z.Ab)(a);
  a.postId = this.Z;
  Gk(xD, a);
};
z.g.QJ = function(a) {
  this.SF.Fo((0,z.lk)(this.xa, "title"), (0,z.lk)(this.xa, "creator.userId"), (0,z.lk)(this.xa, "creator.name"), (0,z.lk)(this.xa, "virtuals.snippet"), (0,z.lk)(this.xa, "content.image.imageId"), this.Z, a.target.getAttribute("data-action-type") || "post");
};
z.g.Hm = function() {
  (0,z.Qw)(this.lm);
  (0,z.Pw)(this.lm);
  hx(this);
};
z.g.C = function() {
  (0,z.bd)(this.Bi);
  this.la = this.Bi = null;
  ex.w.C.call(this);
};
z.g.Bg = function(a) {
  var b = this.xa.cb(), c = this.cc ? this.cc.cb() : void 0, d = a.postStatus;
  if (!d && c) {
    for (var e = this.cc.get("slug"), f = this.xa.get("virtuals.postedIn"), h = 0;h < f.length;h++) {
      if (f[h].collection.slug == e) {
        d = f[h].status;
        break;
      }
    }
  }
  this.N.innerHTML = (0,z.K)(z.es, {post:b, contextCollection:c, mode:a.mode, collaborators:a.collaborators, postStatus:d, isCrossPoster:a.isCrossPoster, qD:(0,z.Lm)(b, !0)});
};
z.g.Xu = function() {
  return(0,z.r)((0,z.q)(this.Ua.Aa(Gn(500)), function() {
    this.Tc = (0,z.Ao)(this, "follow-ups").Zk(this.xa, gx(this));
    return(0,z.q)((0,z.q)(this.Tc.cd(this.L(".post-follow-ups")), this.Tc.mM, this.Tc), function() {
      var a = (0,z.Gz)(this.Tc);
      a && (0,z.Hz)(this.Tc, a);
    }, this);
  }, this), z.Cj);
};
z.g.yA = function(a) {
  return(0,z.q)(this.Ua.Aa(Gn(500)), function() {
    this.$m = (0,z.xg)(dx, {pL:a});
    (0,z.Ld)(this.$m, this.L(".post-footer"));
  }, this);
};
z.g.$J = function(a) {
  var b = Uy.R();
  (0,z.Qc)(a.target, "recommend-button") ? ((0,z.Dk)(VC, {collectionSlug:this.Ha, postIds:[this.Z]}), a = this.Ha ? hG.R({postId:this.Z, collectionSlug:this.Ha}) : gG.R({postId:this.Z}), b += "?addToken\x3dtrue\x26redirect\x3d" + (0,window.encodeURIComponent)(a)) : b += "?redirect\x3d" + (0,window.encodeURIComponent)(mx(this));
  window.location = b;
};
z.g.tu = function() {
  if (this.xa && this.ph()) {
    var a = this.Ud.Aa(this.lm), a = a.Fd.mb + a.Ve(), b = this.Ud.Wd.Kd();
    b.top + b.height >= a - 100 && (a = qG.R({postId:this.Z}), (0,z.r)(this.ea.put(a, null, {background:!0, qe:!0}), z.Cj), (0,z.Dk)($C, {collectionSlug:this.Ha, postIds:[this.Z], postId:this.Z}), this.Ca.Ba("scroll-end", this.tu, this));
  }
};
z.g.HG = function() {
  this.Z && this.kd ? (0,z.q)(wq(this.kd, this.Z, this.cc), function() {
    var a = XF.R({collectionSlug:this.Ha});
    this.ha.navigate(a);
  }, this) : lx(this, yp());
};
z.g.dG = function() {
  this.Z && this.Ha && this.kd ? (0,z.q)(pq(this.kd, this.Z, this.Ha, (0,z.lk)(this.cc, "name"), this.la), function() {
    var a = XF.R({collectionSlug:this.Ha});
    this.ha.navigate(a);
  }, this) : lx(this, xp());
};
z.g.GF = function(a) {
  this.ha.navigate(a.target.pathname.substr(1), this.Iz.vs({scrollTop:(0,z.ni)((0,z.Ln)()).top}));
};
z.g.cB = function(a) {
  function b(b) {
    (0,z.Uc)(c, "post-collaborator-visible", !b);
    a.target.setAttribute("data-action", b ? "show-collaborator" : "hide-collaborator");
    a.target.innerHTML = b ? "(show)" : "(hide)";
  }
  var c = (0,z.Yd)(a.target, "SPAN"), d = "hide-collaborator" == a.he, e = {state:d ? "hidden" : "visible"};
  b(d);
  var f = xG.R({postId:this.Z, collaboratorId:a.value});
  (0,z.Cc)(this.ea.post(f, e, {na:!0}), function(a) {
    a instanceof Error || !1 === a ? (this.Ra.H("Failed to " + (d ? "hide" : "show") + " collaborator.", "error"), b(!d)) : this.Ra.H("Collaborator " + (d ? "hidden" : "shown") + ".", "success");
  }, this);
};
z.g.jn = function() {
  var a = window.document.getElementById("temp-experimental-css");
  a && (0,z.Nd)(a);
};
z.g.WJ = function(a) {
  var b = this.cc ? this.cc.get("id") : this.xa.get("homeCollection").id, c = this.xa.get("virtuals.postedIn");
  a = a.target;
  for (var d = [], e = 0;e < c.length;e++) {
    var f = c[e];
    f.collectionId != b && "APPROVED" === f.status && d.push(new z.kk(f.collection));
  }
  b = new z.Fq(new z.ok(d));
  b = Oq((new Nq(this.Oa(), b)).bc("Also in these collections")).Yl(function(a) {
    return{id:a.get("slug"), name:a.get("name"), imageId:a.get("image.imageId")};
  });
  a && (b.gh = a);
  return(0,z.q)(Bq(this.kd, b), function(a) {
    this.ha.navigate(z.UF.R({collectionSlug:a}));
  }, this);
};
z.g = ox.prototype;
z.g.za = function(a, b) {
  var c = (0,z.sa)(b);
  this.ec[c] || (this.ec[c] = {time:this.now(), hd:b.hd});
  return!0;
};
z.g.Dl = function(a, b) {
  var c = this.Fj(b);
  c && delete this.ec[(0,z.sa)(b)];
  return c;
};
z.g.bi = function(a, b, c) {
  a = (0,z.sa)(c);
  return this.ec[a] ? ((b = !this.Fj(c) && (!!b.Al || b.hd == this.ec[a].hd)) || delete this.ec[a], b) : !1;
};
z.g.fm = z.ea;
z.g.now = function() {
  return(new Date).getTime();
};
z.g.Fj = function(a) {
  a = (0,z.sa)(a);
  return!(a in this.ec) || this.now() - this.ec[a].time >= this.du;
};
(0,z.p)(px, z.Kj);
z.g = px.prototype;
z.g.sg = null;
z.g.H = function() {
  px.w.H.call(this);
  var a = this.aa.Kr();
  this.sg = (0,z.q)((0,z.xk)(a), function() {
    var b = qx(this, a).length;
    0 < a.Kb() && (this.cc.get("virtuals.canAdminister") ? this.ih.innerHTML = b ? "Add/Remove your story" : "Add your story" : this.ih.innerHTML = b ? "Submit/Remove your story" : "Submit your story", (0,z.u)(this.ih, "hide"), this.SJ && this.Go(this.ih));
  }, this);
  (0,z.yi)("show-cross-poster", this.lv, this);
};
z.g.ka = function() {
  px.w.ka.call(this);
  (0,z.Bi)("show-cross-poster");
  this.sg && (this.sg.cancel(), this.sg = null);
};
z.g.lv = function(a) {
  this.Go(a.target);
};
z.g.Go = function(a) {
  var b = (0,z.lk)(this.cc, "slug"), c = (0,z.lk)(this.cc, "name"), d = !!this.cc.get("virtuals.canAdminister"), e = this.aa.Kr();
  return(0,z.q)((0,z.q)((0,z.xk)(e), function() {
    var b = qx(this, e).length, c = new z.Fq(new z.ok(e.Qa.concat().sort(this.Wv.bind(this)))), b = this.Et(d, !!b), k;
    k = d ? "" : (k = (0,z.lk)(this.cc, "responseTimeFuzzy")) ? No({responseTimeFuzzy:k}) : No({responseTimeFuzzy:"within a day"});
    c = Oq((new Nq(this.ca, c)).bc(b).Bf(k)).Yl(this.Vv.bind(this));
    c.Kz = !0;
    a && (c.gh = a);
    return Bq(this.kd, c);
  }, this), function(a) {
    a && ("APPROVED" == rx(this.aa.Bb(a), this.um) ? vq(this.kd, a, this.cc, this.la) : d ? pq(this.kd, a, b, c, this.la) : mq(this.kd, a, b));
  }, this);
};
z.g.Wv = function(a, b) {
  var c = rx(a, this.um).toUpperCase(), d = rx(b, this.um).toUpperCase();
  return(c = YE.indexOf(c) - YE.indexOf(d)) ? c : (0,z.mk)(b, "latestPublishedAt") - (0,z.mk)(a, "latestPublishedAt");
};
z.g.Vv = function(a) {
  var b = !!this.cc.get("virtuals.canAdminister"), c = {id:a.get("id"), name:a.get("title"), description:""};
  switch(rx(a, this.um)) {
    case "PENDING":
      c.description = "Pending";
      c.disabled = !0;
      break;
    case "APPROVED":
      c.status = "Remove";
      c.description = "Already in this collection";
      c.hasIcon = !0;
      break;
    case "REJECTED":
      if (b) {
        c.status = "Add";
        break;
      }
      c.description = "Not Accepted";
      c.disabled = !0;
      break;
    default:
      c.status = b ? "Add" : "Submit";
  }
  return c;
};
z.g.Et = function(a, b) {
  return a ? b ? "Add or remove your story" : "Add your story" : b ? "Submit or remove your story" : "Submit your story";
};
(0,z.p)(tx, z.Co);
z.g = tx.prototype;
z.g.Xd = new ox(3E5);
z.g.qd = null;
z.g.rq = null;
z.g.Ya = null;
z.g.Ab = function() {
  var a = this.qd.get("name") + " — " + (0,z.J)("productName"), b = (0,z.lk)(this.qd, "description");
  this.Gc(new z.Un(a, b, "website"));
  this.rq && (this.Ya = new z.sy(this.Oa()), (0,z.uy)((0,z.ty)(this.Ya.Do(this.rq), this.N).Sj((0,z.Ln)()), {collection:this.qd.cb(), Ew:!0, ab:!0}), this.Ya.F(eH, this.eq, this), this.Ya.F(fH, this.fq, this));
  (a = this.L(".layout-fill-height")) && this.Aa(new Eo(this.Oa(), a));
  this.$A();
  this.Hn = new kq(this.Oa());
};
z.g.$A = function() {
  var a = this.L(".show-cross-poster");
  a && (this.In = new px(this.Oa(), this.N, a, this.qd, this.rq, !1), this.Aa(this.In));
};
z.g.H = function() {
  tx.w.H.call(this);
  (0,z.Dk)(GD, {collectionId:this.qd.get("id"), collectionSlug:this.yc});
  (0,z.Ok)(1, "collection");
  this.Ya && this.Ya.H();
  (0,z.Di)(this.N).D("new-post", this.gu, this).D("embed-collection", this.KF, this);
};
z.g.C = function() {
  this.Ya && ((0,z.bd)(this.Ya), this.Ya = null);
  tx.w.C.call(this);
};
z.g.ka = function() {
  this.Ya && this.Ya.ka();
  tx.w.ka.call(this);
};
z.g.gu = function() {
  (0,z.Dk)(UC, {source:"collection"});
  var a = z.YF.R({collectionSlug:this.yc});
  this.Wk.navigate(a);
  return!1;
};
z.g.KF = function() {
  (0,z.Dk)(MD, {collectionSlug:this.yc});
  this.W.open({title:"Embed this collection", bodyHtml:(0,z.K)(bx, {collection:this.qd.cb(), recommendedPosts:this.la.cb().slice(0, 3), latestPosts:this.la.cb().slice(0, 3)}), type:z.jk}).L("textarea").select();
};
z.g.Bu = function(a) {
  a = a.split("/");
  return "trending" == a[2] ? "recommended" : "submissions" == a[2] ? "submissions" : "latest";
};
z.g.eq = function(a) {
  a = (0,z.Kb)(a, function(a) {
    return a.get("id");
  });
  (0,z.Dk)(PC, {collectionSlug:this.yc, postIds:a});
  a = this.N.querySelector(".bucket-empty");
  var b = this.N.querySelector(".nav-tabs");
  b && a && ((0,z.ab)(nd(b), "nav-tabs-hidden") && pd(b, "nav-tabs-hidden"), (0,z.ab)(nd(a), "bucket-empty-hidden") || od(a, "bucket-empty-hidden"));
};
z.g.fq = function() {
  var a = this.N.querySelector(".bucket-empty"), b = this.N.querySelector(".bucket-posts"), c = this.N.querySelector(".nav-tabs");
  c && a && b && 0 === b.childElementCount && (this.qd.get("virtuals.canAdminister") || od(c, "nav-tabs-hidden"), pd(a, "bucket-empty-hidden"));
};
(0,z.p)(z.qy, z.Kj);
z.qy.prototype.Sj = function(a) {
  this.Jk = a;
};
z.qy.prototype.Ml = function() {
  if (wk(this.yd)) {
    this.fv = !0;
  } else {
    this.fv = !1;
    var a = (0,z.ni)(this.Jk).top, b = this.Jk.scrollHeight, c = Math.min(this.Jk.offsetHeight, (0,z.Ad)(window).height);
    a + 3 * c > b && ry(this);
  }
};
N("e", "", function(a, b, c) {
  return c.variants.can_see_connections ? qh("e", "connections")(a, null, c) : qh("e", "standard")(a, null, c);
});
N("e", "standard", function(a, b, c) {
  b = "";
  var d = dk(a);
  b += '\x3cdiv data-post-id\x3d"' + (0,z.P)(a.post.id) + '" class\x3d"post-item' + (a.ab ? " post-item-light" : "") + (a.Tg ? " post-item-small" : "") + (a.post.isRead ? " post-read-" + (0,z.P)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.P)(a.post.status) : "" : "draft") + '" \x3e';
  var e = a.post.creator ? a.post.creator.name : "Deleted User";
  return b += (!a.Uh && a.post.creator ? '\x3ca href\x3d"/@' + (0,z.P)(a.post.creator.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.post.creator.name) + '"\x3e' + Uo((0,z.M)(a, {user:a.post.creator, Pc:"post-item-avatar"}), c) + "\x3c/a\x3e" : "") + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" title\x3d"' + (0,z.P)(a.post.title) + " by " + (0,z.P)(e) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + 
  (0,z.P)(a.source) + '"' : "") + "\x3e" + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (a.Tg ? "" : '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '" ' : "") + "\x3e\x3cp\x3e" + (0,z.O)(a.post.virtuals.draftSnippet ? a.post.virtuals.draftSnippet : a.post.virtuals.snippet) + "\x3c/p\x3e\x3c/a\x3e") + Yo(a, c) + 
  cp(a, c) + ap(a, c) + "\x3c/div\x3e";
});
N("e", "drafts", function(a, b, c) {
  b = "";
  var d = ck(a, c), e = a.post.creator ? a.post.creator.name : "Deleted User";
  return b += '\x3carticle data-post-id\x3d"' + (0,z.P)(a.post.id) + '" class\x3d"post-item post-status-draft"\x3e' + (!a.Uh && a.post.creator ? '\x3ca href\x3d"/@' + (0,z.P)(a.post.creator.username) + '" title\x3d"Go to the profile of ' + (0,z.P)(a.post.creator.name) + '"\x3e' + Uo((0,z.M)(a, {user:a.post.creator, Pc:"post-item-avatar"}), c) + "\x3c/a\x3e" : "") + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" title\x3d"' + (0,z.P)(a.post.title) + " by " + (0,z.P)(e) + 
  '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"\x3e' + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + '\x3c/a\x3e\x3c/h3\x3e\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" title\x3d"' + (0,z.P)(a.post.title) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"\x3e\x3cp\x3e' + (0,z.O)(a.post.virtuals.draftSnippet) + "\x3c/p\x3e\x3c/a\x3e\x3c/article\x3e";
});
N("e", "rich", function(a, b, c) {
  b = "";
  var d = dk(a);
  b += '\x3cdiv data-post-id\x3d"' + (0,z.P)(a.post.id) + '" class\x3d"post-item post-item-rich' + (a.ab ? " post-item-light" : "") + (a.Tg ? " post-item-small" : "") + (a.post.isRead ? " post-read-" + (0,z.P)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.P)(a.post.status) : "" : "draft") + '" \x3e';
  var e = a.post.creator ? a.post.creator.name : "Deleted User", f = (0,z.Qj)((0,z.M)(a.post.virtuals.previewImage, {height:200, width:640, strategy:"crop-fixed"}), 0, c);
  return b += (f ? '\x3ca class\x3d"post-item-image-wrapper" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '" ' : "") + '\x3e\x3cimg class\x3d"post-item-image" src\x3d"' + (0,z.P)((0,z.Q)(f)) + '" height\x3d"200" width\x3d"640"\x3e\x3c/a\x3e' : "") + '\x3cspan class\x3d"post-item-meta-rich-reason"\x3e' + (a.post.providerName ? 
  qh("a", a.post.providerName)((0,z.M)(a, {reason:a.post.reasons[a.post.providerName], eh:!0}), null, c) : "") + '\x3c/span\x3e\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" title\x3d"' + (0,z.P)(a.post.title) + " by " + (0,z.P)(e) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '"' : "") + "\x3e" + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (a.Tg ? 
  "" : '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.P)((0,z.Q)(d)) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(d) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '" ' : "") + "\x3e\x3cp\x3e" + (0,z.O)(a.post.virtuals.draftSnippet ? a.post.virtuals.draftSnippet : a.post.virtuals.snippet) + "\x3c/p\x3e\x3c/a\x3e") + Yo((0,z.M)(a, {si:!0, bm:!1}), c) + cp(a, c) + "\x3c/div\x3e";
});
N("e", "connections", function(a, b, c) {
  var d = "";
  b = dk(a);
  var e = c.variants.enable_recommend_notes && (null == a.post.virtuals.notesBySocialRecommends ? null : a.post.virtuals.notesBySocialRecommends.length), d = d + ('\x3cdiv data-post-id\x3d"' + (0,z.P)(a.post.id) + '" class\x3d"post-item post-item-connections' + (a.ab ? " post-item-light" : "") + (a.Tg ? " post-item-small" : "") + (a.post.isRead ? " post-read-" + (0,z.P)(a.post.isRead) : "") + " post-status-" + (a.post.isPublished ? a.post.status ? (0,z.P)(a.post.status) : "" : "draft") + '"\x3e'), 
  f = a.post.creator ? a.post.creator.name : "Deleted User", h = a.post.virtuals.notesBySocialRecommends;
  if (e && h && h.length) {
    var e = h[0], k = h[0].authorUser.name, h = h[0].authorUser.username, h = c.variants.enable_recommend_notes && e ? '\x3cdiv class\x3d"notes-post-meta notes-recommendations"\x3e\x3cspan class\x3d"icons icons-heart align-left"\x3e\x3c/span\x3e\x3cblockquote class\x3d"notes-recommendation"\x3e“' + (0,z.O)(e.content) + '”\x26#8202;—\x26#8202;\x3ccite class\x3d"notes-recommendation-cite"\x3e\x3ca class\x3d"link" href\x3d"/@' + (0,z.P)(h) + '"\x3e' + (0,z.O)(k) + "\x3c/a\x3e\x3c/cite\x3e\x3c/blockquote\x3e\x3c/div\x3e" : 
    ""
  } else {
    e = a.post.virtuals.usersBySocialRecommends;
    h = "";
    if (e && e.length) {
      var e = (0,z.M)(a, {Bn:'\x3cspan class\x3d"icons icons-heart post-meta-recommends-icon"\x3e\x3cspan class\x3d"screen-reader-text"\x3ePeople who recommended “' + (0,z.O)(a.post.title) + "”\x3c/span\x3e\x3c/span\x3e", users:e, QC:"post-meta post-meta-recommends clear-fix", Pc:"avatar-icon post-meta-avatar post-meta-avatar-recommend", ed:a.ed || 3}), k = "", l = e.ed ? Math.min(e.users.length, e.ed) : e.users.length;
      if (l) {
        for (var k = k + ('\x3cul class\x3d"avatar-list' + (e.QC ? " " + (0,z.P)(e.QC) : "") + '"\x3e' + (e.Bn ? '\x3cli class\x3d"avatar-list-item"\x3e' + (0,z.Jh)(e.Bn) + "\x3c/li\x3e" : "")), m = 0;m < l;m++) {
          k += '\x3cli class\x3d"avatar-list-item"\x3e' + (0,z.Ro)((0,z.M)(e, {user:e.users[m]}), c) + "\x3c/li\x3e";
        }
        k += "\x3c/ul\x3e";
      }
      e = k;
    } else {
      e = "";
    }
    h += "\x3cdiv\x3e" + e;
    a.Tg || (e = a.post.providerName ? "" + qh("a", a.post.providerName)((0,z.M)(a, {reason:a.post.reasons[a.post.providerName], eh:!0}), null, c) : "", h += a.bm && e ? '\x3cspan class\x3d"post-meta"\x3e' + (0,z.Jh)(e) + "\x3c/span\x3e" : "");
    h += "\x3c/div\x3e";
  }
  return d += h + '\x3ch3 class\x3d"post-item-title"\x3e\x3ca href\x3d"' + (0,z.P)((0,z.Q)(b)) + '" title\x3d"' + (0,z.P)(a.post.title) + " by " + (0,z.P)(f) + '" data-action\x3d"open-post" data-action-value\x3d"' + (0,z.P)(b) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '"' : "") + "\x3e" + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + "\x3c/a\x3e\x3c/h3\x3e" + (a.Tg ? "" : '\x3ca class\x3d"post-item-snippet" href\x3d"' + (0,z.P)((0,z.Q)(b)) + '" data-action\x3d"open-post" data-action-value\x3d"' + 
  (0,z.P)(b) + '"' + (a.source ? ' data-source\x3d"' + (0,z.P)(a.source) + '" ' : "") + "\x3e\x3cp\x3e" + (0,z.O)(a.post.virtuals.draftSnippet ? a.post.virtuals.draftSnippet : a.post.virtuals.snippet) + "\x3c/p\x3e\x3c/a\x3e") + bp((0,z.M)(a, {si:!a.Uh}), c) + ('\x3cspan class\x3d"post-meta post-meta-bookmark"\x3e' + Xo({postId:a.post.id, isOnReadingList:a.post.virtuals.isOnReadingList, readingTime:a.post.virtuals.readingTime}, 0, c) + "\x3c/span\x3e") + cp(a, c) + ap(a, c) + "\x3c/div\x3e";
});
(0,z.p)(z.sy, z.Ij);
z.sy.prototype.la = null;
z.sy.prototype.kh = null;
z.sy.prototype.Jk = null;
z.sy.prototype.Yu = null;
var eH = "add", fH = "remove";
z.g = z.sy.prototype;
z.g.Do = function(a) {
  if (this.la) {
    throw Error("The post list should not be set twice.");
  }
  a && (this.la = a, this.la.F("add", this.eq, this), this.la.F("remove", this.fq, this));
  return this;
};
z.g.Sj = function(a) {
  this.Jk = a;
  return this;
};
z.g.H = function() {
  this.kh && ux(this.kh, this.ha, this.la);
  this.Je = new z.qy(this.ca, this.la, 10);
  this.Je.Sj(this.Jk);
  (0,window.setTimeout)(function() {
    if (this.Je) {
      var a = this.Je;
      a.H();
      (0,z.Lj)(a, a.Ca, "scroll-throttled", a.Ml, a);
      a.Ml();
    }
  }.bind(this), 250);
};
z.g.ka = function() {
  (0,z.bd)(this.Je);
  this.Je = null;
  this.kh && (0,z.Di)(this.kh).clear("open-post");
};
z.g.C = function() {
  this.la && (this.la.Ba("add", this.eq, this), this.la.Ba("remove", this.fq, this), this.la = null);
};
z.g.eq = function(a) {
  var b = this.kh.querySelector(".bucket-posts");
  if (b) {
    for (var c = 0;c < a.length;c++) {
      var d = a[c], e = {items:[d.cb()], ci:"post", Wr:1}, f;
      for (f in this.Yu) {
        e[f] = this.Yu[f];
      }
      d = this.la.indexOf(d);
      e = (0,z.Hd)((0,z.K)(jp, e));
      (0,z.Md)(b, e, d);
    }
  } else {
    (0,z.Cj)(Error("PostListHandler could not find a bucket element"));
  }
  this.Je && this.Je.Ml();
  this.X(eH, a, this);
};
z.g.fq = function(a) {
  var b = this.kh.querySelector('.post-item[data-post-id\x3d"' + a.get("id") + '"]');
  b && b.parentNode && (0,z.Nd)(b.parentNode);
  this.X(fH, a, this);
};
(0,z.p)(vy, tx);
z.g = vy.prototype;
z.g.Bi = null;
z.g.la = null;
z.g.zc = function() {
  var a = this.Kn.mg[this.yc] || null, b = this.hd && !!this.Kn.Db[this.hd];
  return a && b ? (this.qd = a, this.la = this.Kn.Db[this.hd], this.Ay(), null) : (0,z.q)((0,z.q)(this.js.get(this.path + "?posts\x3dtrue", {na:!0}), this.ld, this), this.Ay, this);
};
z.g.Ab = function() {
  var a = this.N.querySelector(".hero-actions");
  a && (this.Bi = (0,z.Up)(new z.Vp(a, this.qd, Ko), {ab:!0}, "collection"), this.Bi.H());
  vy.w.Ab.call(this);
};
z.g.bg = function(a) {
  this.ld({value:a.collection, posts:a.posts, references:{User:{}}});
};
z.g.H = function() {
  vy.w.H.call(this);
  var a = {collectionSlug:this.yc, postIds:this.la.Qa.concat().map(function(a) {
    return a.get("id");
  })};
  (0,z.Dk)(PC, a);
  (0,z.Di)(this.N).D("accept-story", this.bG, this).D("reject-story", this.IG, this);
};
z.g.ka = function() {
  (0,z.Gi)(this.N);
  vy.w.ka.call(this);
};
z.g.$A = function() {
  var a = this.L(".show-cross-poster");
  a && (this.In = new px(this.Oa(), this.N, a, this.qd, this.la, this.Ui.nm), this.Ui.nm ? (this.Ui.nm = !1, (0,z.Fn)(function() {
    this.Aa(this.In);
  }, this)) : this.Aa(this.In));
};
z.g.C = function() {
  (0,z.bd)(this.Bi);
  this.Bi = null;
  vy.w.C.call(this);
};
z.g.ld = function(a) {
  var b = (0,z.al)(a.value, a.references);
  this.qd = (0,z.Zk)(this.Kn, b);
  a = (0,z.al)(a.posts, a.references);
  this.la = Xk(this.Kn, this.yc, this.filterBy);
  this.la.Pf(a);
  this.rq = this.la;
};
z.g.Ay = function() {
  var a = ZG.R({collectionSlug:this.yc}), a = {title:this.qd.get("name"), collection:this.qd.cb(), feedPath:a, posts:this.la.cb(), filterBy:this.filterBy};
  this.N.innerHTML = (0,z.K)(sx, a);
};
z.g.bG = function(a) {
  var b = a.value;
  b && this.Hn ? (0,z.q)(pq(this.Hn, b, this.yc, (0,z.lk)(this.qd, "name"), null), function() {
    (0,z.Dk)(KD, {postId:b, collectionId:this.qd.get("id")});
    this.la.Pl(b);
  }, this) : (a = xp(), (0,z.Cj)(a), this.W.error(a));
};
z.g.IG = function(a) {
  (a = a.value) && this.Hn ? wq(this.Hn, a, this.qd, this.la) : (a = yp(), (0,z.Cj)(a), this.W.error(a));
};
(0,z.p)(wy, ts);
wy.prototype.Zc = function() {
  this.W.error("This feature is currently disabled.");
};
(0,z.p)(xy, ts);
xy.prototype.Zc = function() {
  yy();
};
xy.prototype.C = function() {
  this.ha.Ba(lq, this.hq, this);
  xy.w.C.call(this);
};
xy.prototype.hq = function() {
  this.Ht && yy();
  this.Ht = !0;
};
(0,z.p)(zy, ts);
zy.prototype.Zc = function(a) {
  a.target.select();
};
(0,z.p)(Ay, ts);
Ay.prototype.Zc = function(a) {
  (0,z.By)(this.ca, a.value || "");
};
var Fy = window;
(0,z.p)(Iy, ts);
Iy.prototype.Zc = function(a) {
  switch(a.he) {
    case "sign-in-prompt":
      Ly(this, a);
      break;
    case "twitter-auth":
      Qy(this, a);
      break;
    case "sign-in-with-twitter":
      if ((0,z.J)("variants.can_view_unified_authentication_overlay")) {
        Ly(this, a);
      } else {
        Jy(a.target.getAttribute("data-login-source"));
        a = a.value || (0,z.Hy)();
        var b = Gy();
        Pf(b, "/m/account/authenticate-twitter");
        Qf(b, $f({refresh:1, redirect:a}));
        Ty(this.rA, b, "login") || (Qf(b, $f({redirect:a})), Dy(b.toString()));
      }
      break;
    default:
      (0,z.Cj)("SignIn handler received an unexpected topic: " + a.he);
  }
};
Iy.prototype.rF = function(a) {
  var b = this.W.af, c = b.L(".input-group-email"), d = c.querySelector(".input-group-title"), e = c.querySelector(".enter-email"), b = b.L(".btn-overlay-confirm");
  if (!b.getAttribute("disabled")) {
    var f = new z.Ri(e, {name:"shimmy-shake", duration:400});
    (0,z.u)(c, "input-group-error");
    d.innerHTML = "Email address";
    var h = [].slice.call(window.document.querySelectorAll(".overlay-registration input"), 0), h = yB(h, function(a, b) {
      0 <= ["hidden", "email", "text", "checkbox"].indexOf(b.type) && (a[b.name] = b.value);
      return a;
    }, {});
    (0,z.iq)(h.email) ? (b.setAttribute("disabled", "true"), e.setAttribute("disabled", "true"), b.innerHTML = "Creating account…", (0,z.q)(this.ea.post(HG.R(), h, {na:!0}), function(b) {
      b.value.uid && (a ? Dy(a) : Fy.location.reload(!0));
    }, this)) : (f.start(), (0,z.t)(c, "input-group-error"), d.innerHTML = (0,z.Ap)());
  }
};
(0,z.p)(Vy, ts);
Vy.prototype.Zc = function(a) {
  a.value && (0,z.Kk)(a.value);
  if (!a.Wn) {
    var b = a.target;
    if (b.href) {
      var c = b.href, d = (0,z.Ey)(), c = c instanceof Lf ? c.ja() : new Lf(c, void 0);
      if (Vf(d, c)) {
        d = b.pathname;
        "/" === b.pathname.charAt(0) && (d = d.substr(1));
        b = {};
        if (a = a.target.getAttribute("data-source")) {
          b.source = a;
        }
        this.ha.navigate(d, b);
      } else {
        a = b.href, b = (0,z.oa)(a) ? new Lf(a) : a, b.Be && "http" !== b.Be && "https" !== b.Be || (Fy.location = a);
      }
    }
  }
};
(0,z.p)(Wy, ts);
Wy.prototype.Zc = function(a) {
  var b = a.value;
  if (!this.Qu[b]) {
    var c = this.WG;
    a = "/p/" + a.value + "/bookmarks";
    Xy(this, b, c);
    a = c ? this.ea.put(a, null, {qe:!0}) : this.ea.Hd(a, {qe:!0});
    this.Qu[b] = a;
    (0,z.Cc)(a, function() {
      delete this.Qu[b];
    }, this);
    (0,z.q)(a, function() {
      var a = c ? cD : dD, e = this.aa.Bb(b), f = {postId:b};
      e && (f.readingTime = e.get("virtuals.readingTime"));
      (0,z.Dk)(a, f);
    }, this);
    (0,z.r)(a, function() {
      this.Ra.H("Sorry, we’re having trouble updating your bookmarks. Please try again.", "error");
      Xy(this, b, !c);
    }, this);
  }
};
(0,z.p)(Yy, Wy);
(0,z.p)(Zy, Wy);
(0,z.p)($y, ts);
$y.prototype.Zc = function(a) {
  var b = a.target.getAttribute("data-action-type"), c = a.target.getAttribute("data-action-id"), d = a.target.getAttribute("data-action-name");
  (0,z.r)((0,z.q)(this.ea.post(iG.R(), {isBlacklisted:"true", type:b, id:c}, {na:!0, ce:0}), function() {
    this.Ra.H(up({name:d}), "success");
  }, this), function() {
    this.Ra.H(vp({name:d}), "error");
  });
};
(0,z.p)(az, ts);
az.prototype.Zc = function(a) {
  var b = a.value, c = a.target.getAttribute("data-collection-id"), d = this.aa.mg[b] || null, b = "/me/subscriptions/collection/" + b, e, f, h, k = (0,z.Qc)(a.target, "active");
  k ? (f = "delete", h = RC, e = "An error occurred. Please try unfollowing the collection again.") : (f = "put", h = QC, e = "An error occurred. Please try following the collection again.");
  if (d) {
    d.set("virtuals.isSubscribed", !k);
    var l = d.get("metadata.followerCount");
    d.set("metadata.followerCount", l + (k ? -1 : 1));
  }
  (0,z.Uc)(a.target, "active", !k);
  (0,z.r)((0,z.q)(this.ea.send(f, b, {}, {na:!0}), function() {
    (0,z.Dk)(h, {collectionId:c});
  }, this), function(b) {
    d && d.set("virtuals.isSubscribed", k);
    (0,z.Uc)(a.target, "active", k);
    this.Ra.H(e, "error");
    (0,z.Cj)(b);
  }, this);
};
(0,z.p)(bz, ts);
bz.prototype.Zc = function(a) {
  var b = a.value, c = "/me/subscriptions/user/" + b, d, e, f, h = (0,z.Qc)(a.target, "active");
  h ? (e = "delete", f = TC, d = "An error occurred. Please try unfollowing the user again.") : (e = "put", f = SC, d = "An error occurred. Please try following the user again.");
  (0,z.Uc)(a.target, "active", !h);
  (0,z.r)((0,z.q)(this.ea.send(e, c, {}, {na:!0}), function() {
    (0,z.Dk)(f, {targetUserId:b});
  }, this), function(a) {
    this.Ra.H(d, "error");
    (0,z.Cj)(a);
  }, this);
};
ez.prototype.qu = function() {
  gz(this);
};
z.g = hz.prototype;
z.g.load = function(a) {
  a = lz(a);
  if (this.Ye(a)) {
    return(0,z.Jc)(this.Ie[a]);
  }
  iz(this, a);
  return this.Ie[a].zb();
};
z.g.Ye = function(a) {
  a = lz(a);
  a = this.Ie[a];
  return!!a && !!a.url;
};
z.g.bo = function(a) {
  a = lz(a);
  a = this.Ie[a];
  return!!a && !a.url;
};
z.g.Zm = function(a) {
  a = a.target || a.currentTarget;
  var b = a.src;
  nz(this, b);
  if (this.bo(b)) {
    var c = this.Ie[b], d = this.Yi[b], e = {url:b, width:a.width, height:a.height};
    this.Ie[b] = e;
    this.Yi[b] = a;
    delete this.Ni[b];
    c.Ea(e);
    d.Ea(a);
  } else {
    (0,z.Cj)("Finished loading image but could not find the deferred for: " + b);
  }
};
z.g.Le = function(a) {
  a = (a.target || a.currentTarget).src;
  nz(this, a);
  if (2 > this.Ni[a]) {
    (0,z.Cj)("Failed loading image " + a + ", retrying."), this.Ni[a] += 1, jz(this, a);
  } else {
    if (this.bo(a)) {
      var b = this.Ie[a];
      delete this.Ie[a];
      delete this.Yi[a];
      delete this.Ni[a];
      b.$d(Error("Error loading " + a));
    } else {
      (0,z.Cj)("Error encountered while loading image and could not findthe deferred for: " + a);
    }
  }
};
z.g.Oi = function(a, b) {
  b && 10 < Object.keys(this.Ie).length && (this.Yi = {}, this.Ie = {}, this.Ni = {});
};
(0,z.p)(z.oz, z.Vp);
var pz = (0,z.aj)();
z.g = z.oz.prototype;
z.g.getData = (0,z.n)(169);
z.g.Zr = function(a) {
  if (this.Pd() && a) {
    a = this.ia.Qa.concat();
    for (var b = 0;b < a.length;b++) {
      var c = qz(this, a[b]);
      this.X("after-draw", a[b], c);
    }
  }
};
z.g.Yw = function(a, b) {
  for (var c = 0;c < a.length;c++) {
    var d = b.indexOf(a[c]), d = qz(this, a[c], d);
    this.X("after-draw", a[c], d);
  }
};
z.g.Zw = function(a) {
  var b = window.document.getElementById(this.zp + (0,z.sa)(a));
  this.X("before-clear", a, b);
  this.X("destroy", a, b);
  (0,z.Nd)(b);
};
z.g.Ll = function(a) {
  for (var b = 0;b < a.length;b++) {
    var c = a[b].jo, d = window.document.getElementById(this.zp + (0,z.sa)(c));
    this.X("before-clear", c, d);
    d.innerHTML = (0,z.Jq)(this, c);
    this.X("after-draw", c, d);
  }
};
rz.prototype.Dh = null;
z.rq = "success";
z.g = rz.prototype;
z.g.H = function(a, b) {
  var c = "string" == typeof b ? {type:b} : b || {}, d = this.ha.tb.L(".cover"), e = "butter-bar active ";
  c.type && (e += c.type + " ");
  d || (e += "butter-bar-center ");
  this.Ra.className = e;
  this.Ra.innerHTML = ds({UC:a, bM:c.dm, Jw:c.Jw, px:!!c.px});
  this.Dh && (0,window.clearTimeout)(this.Dh);
  c.Jw ? this.ha.F(Jn, this.ka, this) : -1 != c.Ix && (this.Dh = (0,window.setTimeout)(this.ka.bind(this), c.Ix || 5E3));
  this.Pa.X("activate", this);
  return this.hJ = new z.wc;
};
z.g.ka = function() {
  (0,z.u)(this.Ra, "active");
  this.ha.Ba(Jn, this.ka, this);
  this.Pa.X("deactivate", this);
  this.Pa.clear();
  this.Dh = null;
};
z.g.BF = function() {
  this.Pa.X("dismiss", this);
  this.ka();
};
z.g.vJ = function() {
  this.ha.reload();
  this.ka();
};
z.g.RI = function() {
  this.hJ.Ea(null);
};
z.g.sJ = function() {
  this.Pa.X("action", this);
};
N("k", "", function(a, b, c) {
  b = a.followUp.creatorId == c.currentUser.userId && !a.zl;
  c = "";
  var d = '\x3cdiv class\x3d"follow-up-content"\x3e' + (a.zl ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.P)((0,z.Q)(a.followUp.mediaResource.href)) + '" rel\x3d"nofollow"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.O)(a.followUp.title) : (0,z.O)(a.followUp.mediaResource.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e', e;
  if (a.followUp && a.followUp.description) {
    e = (0,z.O)(a.followUp.description);
  } else {
    e = a.followUp.mediaResource.description;
    var f = 140, h = !0;
    e = String(e);
    if (!(e.length <= f)) {
      h && (3 < f ? f -= 3 : h = !1);
      var k = e.charAt(f - 1);
      if (k = 55296 <= k && 56319 >= k) {
        k = e.charAt(f), k = 56320 <= k && 57343 >= k;
      }
      k && (f -= 1);
      e = e.substring(0, f);
      h && (e += "...");
    }
    e = (0,z.O)(e);
  }
  return a = c + (d + e + "\x3c/p\x3e" + (a.zl ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e\x3cspan class\x3d"follow-up-footer-item"\x3e' + (a.followUp.creatorId != a.ds ? "via " + Oo({user:a.followUp.creator, hc:"follow-up-footer-link"}) + " " : "") + 'on \x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.followUp.mediaResource.href)) + '" class\x3d"follow-up-footer-link" rel\x3d"nofollow"\x3e' + (0,z.O)(a.followUp.mediaResource.domain) + (b ? "" : " \x26rarr;") + "\x3c/a\x3e\x3c/span\x3e" + 
  (b ? '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link follow-up-delete" data-action\x3d"delete-follow-up" data-action-value\x3d"' + (0,z.P)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e");
});
N("k", "MediaResourceMediumPost", function(a, b, c) {
  b = a.followUp.mediaResource.mediumPost.post;
  return a = "" + ('\x3cdiv class\x3d"follow-up-content follow-up-type-medium-post"\x3e' + (a.zl ? '\x3cdiv class\x3d"follow-up-link"\x3e' : '\x3ca class\x3d"follow-up-link" href\x3d"' + (0,z.P)((0,z.Q)(a.followUp.mediaResource.href)) + '"\x3e') + '\x3ch3 class\x3d"follow-up-title"\x3e' + (a.followUp && a.followUp.title ? (0,z.O)(a.followUp.title) : (0,z.O)(b.title)) + '\x3c/h3\x3e\x26thinsp;\x26mdash;\x26thinsp;\x3cp class\x3d"follow-up-description"\x3e' + (a.followUp && a.followUp.description ? 
  (0,z.O)(a.followUp.description) : (0,z.O)(b.virtuals.draftSnippet)) + "\x3c/p\x3e" + (a.zl ? "\x3c/div\x3e" : "\x3c/a\x3e") + '\x3cdiv class\x3d"follow-up-footer"\x3e' + (a.followUp.creatorId != a.ds ? '\x3cspan class\x3d"follow-up-footer-item follow-up-author"\x3evia ' + Oo({user:a.followUp.creator, hc:"follow-up-footer-link"}) + "\x3c/span\x3e" : "") + (a.followUp.creatorId != c.currentUser.userId || a.zl ? "" : '\x3cbutton class\x3d"btn btn-chromeless follow-up-footer-item follow-up-footer-link" data-action\x3d"delete-follow-up" data-action-value\x3d"' + 
  (0,z.P)(a.followUp.followUpId) + '"\x3eDelete\x3c/button\x3e') + "\x3c/div\x3e\x3c/div\x3e");
});
(0,z.p)(xz, z.Ij);
z.g = xz.prototype;
z.g.C = function() {
  for (var a in this.Sk) {
    this.Sk[a].cancel();
  }
  xz.w.C.call(this);
};
z.g.load = function() {
  return(0,z.r)((0,z.q)((0,z.q)(this.ea.get(wG.R({postId:this.Z}), {na:!0, background:!0}), this.pJ, this), function() {
    this.ym = !0;
  }, this), z.Cj);
};
z.g.Ye = function() {
  return this.ym;
};
z.g.yj = function(a) {
  return(0,z.qk)(this.Uc, "followUpId", a);
};
z.g.gC = function() {
  return this.UF;
};
z.g.XG = function(a) {
  return 3 !== a.get("visibility");
};
z.g.pJ = function(a) {
  for (var b = a.value, c = 0;c < b.length;c++) {
    Az(this, b[c], a.references);
  }
};
(0,z.p)(Fz, z.v);
z.g = Fz.prototype;
z.g.Ek = null;
z.g.Cm = null;
z.g.Uc = null;
z.g.Fm = null;
z.g.tg = !1;
z.g.C = function() {
  this.qy && this.tg && this.qt();
  this.Uc && (this.Uc.Ba("add", this.sm, this), this.Uc.Ba("remove", this.sm, this));
  (0,z.bd)(this.Ua);
  (0,z.Gi)(this.Fa);
  (0,z.Nd)(this.Fa);
  this.Fa = null;
  (0,z.bd)(this.Fm);
  this.Fm = null;
  Fz.w.C.call(this);
};
z.g.cd = function(a) {
  this.Ek = a;
  return(0,z.q)(this.Ua.Aa(this.ia.load()), this.VG, this);
};
z.g.wm = function() {
  var a = window.document.createElement("div");
  a.className = "follow-ups-container";
  return a;
};
z.g.mM = function() {
  "#follow-up-editor" == window.document.location.hash && (this.jA(), (0,z.Ds)(this.ha, ""), this.Ja(".follow-up-new").scrollIntoView(!0));
};
z.g.VG = function() {
  this.Fa.innerHTML = (0,z.K)(tz, {QK:this.qy, post:this.xa.cb()});
  this.Uc = this.ia.gC();
  this.Uc.F("add", this.sm, this);
  this.Uc.F("remove", this.sm, this);
  this.sm();
  var a = this.Ja(".follow-ups-list"), a = new z.oz(a, this.Uc, uz);
  a.Ut = "follow-up";
  this.Fm = (0,z.Up)(a, {canAdminister:this.iF, ds:this.Ri, visibility:jF}, "followUp");
  this.Fm.F("after-draw", this.uH, this);
  this.Fm.H();
  this.Ek.appendChild(this.Fa);
  this.tg = !0;
};
z.g.uH = function(a, b) {
  b.setAttribute("data-follow-up-id", (0,z.lk)(a, "followUpId"));
};
z.g.sm = function() {
  (0,z.Uc)(this.Fa, "follow-ups-empty", !this.Uc.count());
};
z.g.Ja = function(a) {
  return this.Fa.querySelector(a);
};
z.g.FH = function(a) {
  if ((a = (0,z.Yd)(a.target, null, "follow-up-link")) && a.href) {
    a = (0,z.Yd)(a, null, "follow-up").getAttribute("data-follow-up-id");
    var b = this.ia.yj(a);
    Iz(this, vD, {followUpId:a, visibility:b.get("visibility"), mediaResourceType:b.get("mediaResource").mediaResourceType});
  }
};
z.g.jA = function() {
  (0,z.q)(this.Ua.Aa(this.ca.load("FollowUpEditor")), function(a) {
    (0,z.t)(this.Fa, "follow-ups-container-active");
    (0,z.t)(this.Ja(".follow-up-new"), "follow-up-editor-active");
    var b = this.Ja(".follow-up-new-editor");
    this.Cm = (new a(this.ca, this.Ri, b)).dg();
    this.Cm.F("save", this.tF, this);
    this.Cm.F("cancel", this.qt, this);
    Iz(this, rD);
  }, this);
};
z.g.MH = function(a) {
  this.W.confirm("Are you sure you want to delete this link?").F(z.bF, this.yF.bind(this, a.value));
};
z.g.yF = function(a) {
  (0,z.r)((0,z.q)(this.Ua.Aa(Bz(this.ia, a)), function() {
    Iz(this, tD, {followUpId:a});
  }, this), (0,z.oq)(this.W, "An error occurred, and we were unable to delete your link.", !0));
};
z.g.EI = function(a) {
  var b = a.target.parentNode.getAttribute("data-follow-up-id");
  a = (0,window.parseInt)(a.value, 10);
  var c = null, d;
  for (d in jF) {
    if (a == jF[d]) {
      c = jF[d];
      break;
    }
  }
  Jz(this, b, c);
};
z.g.YF = function(a, b) {
  var c = this.ia.yj(a).get("visibility"), d = null;
  2 == c ? d = "The link is now public" : 1 == c ? d = "The link is now private" : 3 == c && (d = "The link is dismissed");
  (0,z.q)(this.jj.H(d, {type:z.rq, dm:!0}), function() {
    Jz(this, a, b);
  }, this);
  Iz(this, uD, {followUpId:a, visibility:c});
};
z.g.ZF = function(a) {
  a instanceof z.Nc || this.jj.H("An error occurred, and we could not change the link’s visibility.", "error");
};
z.g.tF = function(a, b, c) {
  this.qt();
  (0,z.r)((0,z.q)(this.Ua.Aa(yz(this.ia, {title:a, description:b, mediaResourceId:c})), function(a) {
    Iz(this, sD, {followUpId:a.value.followUpId});
  }, this), (0,z.oq)(this.W, "An error occurred, and we were unable to create your link.", !0));
};
z.g.qt = function() {
  (0,z.bd)(this.Cm);
  this.Cm = null;
  (0,z.u)(this.Fa, "follow-ups-container-active");
  (0,z.u)(this.Ja(".follow-up-new"), "follow-up-editor-active");
};
(0,z.p)(Kz, z.v);
Kz.prototype.Zk = function(a, b) {
  return new Fz(this.ca, a, b);
};
(0,z.p)(Lz, z.Ij);
var gH = "https://" + window.document.location.hostname + "/m/facebook/close";
Nz.prototype.Fo = function(a, b, c, d, e, f, h) {
  if ((0,z.J)("variants.can_share_to_facebook")) {
    a = (0,z.Ha)(a);
    d = (0,z.Ha)(d);
    var k = (0,z.Ey)();
    b = "fb-" + b + "-" + Date.now();
    Nf(k);
    k.Af.set("source", b);
    a = (0,z.K)(fk, {url:k.toString(), title:a, caption:"by " + c, description:d, imageId:e, JM:gH});
    this.jq(a);
    (0,z.Dk)(z.aD, {postId:f, type:h, dest:"facebook"});
  }
};
Nz.prototype.jq = function(a) {
  Ty(this.Gu, new Lf(a), "intent", {width:550, height:320});
};
Pz.prototype.Fo = function(a, b, c, d, e, f, h, k) {
  k = k || [];
  var l = (0,z.Ey)();
  b = "tw-" + b + "-" + Date.now();
  Nf(l);
  l.Af.set("source", b);
  a = {content:a, name:d, username:c, twitterScreenName:e, url:l.toString(), collaborators:k};
  a = k.length ? (0,z.K)(Oz, a) : (0,z.Qz)(Oz, a);
  this.jq(a);
  (0,z.Dk)(z.aD, {postId:f, type:h, dest:"twitter"});
};
Pz.prototype.jq = function(a) {
  var b = new Lf("https://twitter.com/intent/tweet");
  Nf(b);
  b.Af.set("text", a);
  Ty(this.Gu, b, "intent", {width:550, height:420});
};
(0,z.p)(Rz, z.Ij);
var Tz = 6E4, Sz = "active";
Rz.prototype.C = function() {
  (0,z.$h)(this.ya);
  this.ya.length = 0;
  Rz.w.C.call(this);
};
Rz.prototype.sh = function() {
  Uz(this, Sz);
  this.fI();
};
Rz.prototype.Xz = function() {
  Uz(this, "idle");
};
var Wz = 0, hH = {};
z.g = Vz.prototype;
z.g.get = function(a, b) {
  return this.send("get", a, null, b);
};
z.g.Hd = function(a, b) {
  return this.send("delete", a, null, b);
};
z.g.put = function(a, b, c) {
  return this.send("put", a, b, c);
};
z.g.post = function(a, b, c) {
  return this.send("post", a, b, c);
};
z.g.send = function(a, b, c, d) {
  function e() {
    m && (m.state = 2, Yz(this));
    this.Pa.X("send", !!m);
    return(0,z.q)((0,z.r)(oj(a, f, String(l), h), function(a) {
      if (k < h.ce && a instanceof qj && a.status && 500 <= a.status) {
        return k++, hH;
      }
    }, this), function(a) {
      if (a === hH) {
        a = k;
        a = 1 == a ? 200 * Math.round(Math.random()) : 2 == a ? 200 * Math.round(3 * Math.random()) : Math.round(Math.random() * (Math.pow(2, a) - 1) * 200);
        m && (m.state = 1, m.time = a, Yz(this));
        var b = (0,z.Jc)(null), c = new z.wc;
        window.setTimeout(c.Ea.bind(c), a);
        return(0,z.q)((0,z.Dc)(b, c), e, this);
      }
    }, this);
  }
  a = a.toUpperCase();
  var f = String(b), h = this.jC(d || null), k = 0, l = c;
  l && "object" == typeof l && (h.co && (l = z.Hl.$c(l)), l = h.Nw ? window.JSON.stringify(l) : Zz(l));
  b = e.call(this);
  if (!h.background) {
    var m = {Ac:b, state:2, time:0};
    this.oq.push(m);
    Yz(this);
    (0,z.Cc)(b, function() {
      (0,z.cb)(this.oq, m);
      Yz(this);
    }, this);
  }
  (0,z.Cc)(b, function(a) {
    if (a instanceof Error) {
      this.Pa.X("httperror", a.status || 0, h, a);
    } else {
      if (a) {
        var b = a.getResponseHeader("X-Obvious-DbInfo") || "";
        this.Pa.X("successresponse", a.responseText, h, b);
      } else {
        throw a = Error("Unexpected error : 511"), this.Pa.X("httperror", 511, h, a), a;
      }
    }
  }, this);
  h.qe ? ((0,z.r)(b, this.sG.bind(this, f)), (0,z.q)(b, this.Xy.bind(this, f))) : h.wD || (0,z.q)(b, function(a) {
    return a.responseText;
  });
  return(0,z.r)(b, function(a) {
    (0,z.ra)(a) && hj(a, "requestUrl", f);
    throw a;
  });
};
z.g.pl = function() {
  return this.kb;
};
z.g.jC = function(a) {
  a = a || {};
  var b = a.headers || {};
  b["X-Obvious-CID"] = "web";
  b["X-XSRF-Token"] = "1";
  if (a.Nw || a.na) {
    b["Content-Type"] = "application/json";
  }
  if (a.qe || a.na) {
    b.Accept = "application/json";
  }
  return{headers:b, Jx:a.Jx || 3E4, Tw:a.Tw, co:a.co, Nw:a.Nw || a.na, qe:a.qe || a.na, wD:!!a.wD, ce:"undefined" == typeof a.ce ? 10 : a.ce, background:!!a.background};
};
z.g.Xy = function(a, b) {
  var c = Xz(b.responseText), d;
  try {
    d = window.JSON.parse(c);
  } catch (e) {
    throw d = Error("Invalid JSON response from " + a + ' : "' + e.message + '"'), hj(d, "responseText", Qa(c)), d;
  }
  if ("success" in d && ("payload" in d || "error" in d)) {
    var f = d.v, c = d.b, f = !!(this.iB && f && f > this.iB), c = !(!this.Rs || !c || this.Rs == c);
    if (f || c) {
      c && this.Pa.X("buildchange"), f && this.Pa.X("versionupdate");
    }
    if (d.success && d.payload) {
      return d.payload;
    }
    if (!d.success && d.error) {
      throw c = new rj(b.status, a, b), (0,z.ra)(d.error) ? (0,z.Cb)(c, d.error) : c.message += ": " + d.error, d.errorInfo && (c.errorInfo = d.errorInfo), c;
    }
  }
  return d;
};
z.g.sG = function(a, b) {
  b instanceof rj && b.gm && b.gm.responseText && this.Xy(a, b.gm);
  throw b;
};
N("l", "", function(a) {
  a = a || {};
  var b = '\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons ' + (a.QS ? "icons-logo" : "icons-error") + '"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3e';
  if (a.message) {
    b += (0,z.Jh)(a.message);
  } else {
    switch(a.errorCode) {
      case 400:
        b += "We didn’t understand your request.";
        break;
      case 401:
        b += "This page requires authentication.";
        break;
      case 403:
        b += "You do not have access to this page.";
        break;
      case 404:
        b += "Sorry, but nothing exists here.";
        break;
      case 410:
        b += "Sorry, this item has been removed.";
        break;
      case 503:
        b += "Yikes! Medium is temporarily unavailable. We’ll fix it as soon as we can.";
        break;
      default:
        b += "Yikes! Something happened. We’ll fix it as soon as we can.";
    }
  }
  return b += "\x3c/p\x3e" + (503 != a.errorCode ? '\x3cspan class\x3d"error-message-wrap-small"\x3eFind something \x3ca href\x3d"/"\x3einteresting to read\x3c/a\x3e.\x3c/span\x3e' : "") + "\x3c/div\x3e\x3c/div\x3e";
});
N("l", "Blacklisted", function() {
  return'\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons icons-error"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3eThis page was in violation of the  \x3ca href\x3d"https://medium.com/help-center/30e5502c4eb4"\x3eMedium Rules\x3c/a\x3e\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3eBrowse for great reads on \x3ca href\x3d"/"\x3eMedium.com\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
});
N("l", "RemovedByUser", function() {
  return'\x3cdiv class\x3d"error-message"\x3e\x3ci class\x3d"icons icons-error"\x3e\x3c/i\x3e\x3cdiv class\x3d"error-message-wrap"\x3e\x3cp\x3eThe author deleted this Medium post\x3c/p\x3e\x3cspan class\x3d"error-message-wrap-small"\x3eBrowse for great reads on \x3ca href\x3d"/"\x3eMedium.com\x3c/a\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e';
});
(0,z.p)(z.aA, z.v);
z.g = z.aA.prototype;
z.g.Ht = !1;
z.g.Zi = window.performance && window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : window.OB_startTime || (0,z.aj)();
z.g.U = null;
z.g.Py = !1;
z.g.hq = function() {
  this.Cy.length = 0;
  this.Zi = (0,z.aj)();
};
z.g.ZH = function(a, b, c) {
  var d = (0,z.aj)() - this.Zi;
  c instanceof z.Nc || c instanceof Ps || ((0,z.Kk)("nav." + (b ? "success" : "failure")), (0,z.Lk)("client.nav.duration", d), b || (c ? ((0,z.ij)(c), 401 == c.status ? this.W.open({title:"Uh oh!", bodyHtml:(0,z.K)($z), type:"signin", redirectUrl:a}) : 404 == c.status ? this.W.error("Ooops, that page does not exist anymore.  Sorry.") : this.W.error("Something went wrong. Try refreshing the page and trying again.")) : (this.W.error("Something went wrong. Try refreshing the page and trying again."), 
  (0,z.ij)(Error("Unknown navigation error")))), this.Ht = !0);
};
z.g.Le = function(a) {
  if ("IMG" == a.target.tagName) {
    var b = a.target.KK || 0;
    (0,z.Dk)(AD, {src:a.target.src, className:a.target.className, attempts:b});
    3 > b && (a.target.src = a.target.src, a.target.KK = b + 1);
  }
};
z.g.Az = function() {
  !this.Py && window.OB_fontLoaded && window.performance && window.performance.timing && ((0,z.Lk)("client.perf.fontLoaded", window.OB_fontLoaded - window.performance.timing.navigationStart), this.Py = !0);
};
z.g.DI = function() {
};
z.g.wI = function(a, b, c) {
  this.Cy.push(c);
};
z.g.ru = function(a, b, c) {
  c instanceof sj ? (0,z.Kk)(DD) : c instanceof rj ? (0,z.Kk)(BD) : (0,z.Kk)(CD);
};
z.g.Pk = (0,z.n)(207);
z.g.C = function() {
  (0,z.Nd)(this.U);
  z.aA.w.C.call(this);
};
var dA = window.document.referrer;
cA.prototype.jp = null;
cA.prototype.Rt = !1;
cA.prototype.cK = function(a, b) {
  this.Rt = !0;
  var c = "";
  b && b.source && (c = b.source);
  this.Bh.push(Fb(a, c));
};
cA.prototype.OF = function(a, b) {
  this.Rt = !1;
  var c = $a(this.Bh, function(b) {
    return a in b;
  }), c = this.Bh.splice(c, 1)[0];
  if (b) {
    var d = this.Bh.indexOf(this.uz);
    -1 !== d && this.Bh.splice(d, 1);
    this.uz = c;
    this.Bh.push(c);
    this.jp && (this.Uu = this.jp);
    this.jp = a;
  }
};
z.g = eA.prototype;
z.g.refresh = function() {
  var a = this.Hp || 2 == this.ea.pl();
  (0,z.Uc)(window.document.body, "app-loading", !!a);
};
z.g.Aa = function(a) {
  this.pn();
  (0,z.Cc)(a, this.xt, this);
};
z.g.pn = function() {
  this.Hp++;
  this.refresh();
};
z.g.xt = function() {
  this.Hp--;
  this.refresh();
};
z.g.NF = function() {
  this.Hp = 0;
  this.refresh();
};
(0,z.p)(z.fA, z.Kj);
var hA = 1E3;
z.fA.prototype.H = function() {
  z.fA.w.H.call(this);
  this.ma = new z.wc;
  (0,z.q)(this.ma, this.Xb, this);
  this.IF.forEach(function(a) {
    this.qa(a, this.uF, this.iG);
    this.qa(a, this.aF, this.cG);
  }, this);
};
z.fA.prototype.cG = function() {
  this.CA.cancel();
};
z.fA.prototype.EJ = function() {
  this.ma.Ea(!0);
};
z.fA.prototype.iG = function(a) {
  var b = a.currentTarget;
  (a = a.relatedTarget) && (0,z.Td)(b, a) || this.CA();
};
z.g = z.iA.prototype;
z.g.enable = function() {
  this.oj || z.HC || (this.tt = (0,z.R)(window.document, "mouseover", this.Uy, this), this.st = (0,z.R)(window.document, z.nC, this.Uy, this), this.N = window.document.createElement("div"), window.document.body.appendChild(this.N), this.oj = !0);
};
z.g.disable = (0,z.n)(209);
z.g.L = function(a) {
  return this.N.querySelector(a);
};
z.g.gs = function(a) {
  return this.N ? (0,z.fb)(this.N.querySelectorAll(a)) : [];
};
z.g.dg = function(a) {
  return'\x3cdiv class\x3d"tooltip-inner"\x3e' + ("type" == a.type ? '\x3ca href\x3d"' + (0,z.P)((0,z.Q)(a.Br)) + '" target\x3d"_blank"\x3e' + (0,z.O)(a.Br) + "\x3c/a\x3e" : "cite" == a.type && a.cite ? '\x3ccite class\x3d"tooltip-cite"\x3e' + (0,z.O)(a.cite) + "\x3c/cite\x3e“" + (0,z.O)(a.Br) + "”" : (0,z.O)(a.Br)) + '\x3c/div\x3e\x3cdiv class\x3d"tooltip-arrow"\x3e\x3c/div\x3e';
};
z.g.Uy = function(a) {
  var b;
  a: {
    for (b = a.target;b && b !== this.ui;b = b.parentNode) {
      if (b.getAttribute && b.getAttribute("data-tooltip")) {
        break a;
      }
    }
    b = null;
  }
  if (b) {
    a.preventDefault();
    var c = b.getAttribute("data-tooltip-position") || "top", d = b.getAttribute("data-tooltip"), e = b.getAttribute("data-tooltip-type"), f = b.getAttribute("data-tooltip-cite"), h = "link" == e;
    d != this.et && (this.N.innerHTML = this.dg({Br:d, type:e, cite:f}), this.et = d);
    this.ui = b;
    (0,z.lA)(this, c, b);
    (0,z.Uc)(this.N, "tooltip-link", h);
    (0,z.$h)(this.Ef);
    (0,z.bd)(this.bf);
    this.bf = new z.fA(a.type, [this.N, this.ui]);
    this.bf.H();
    (0,z.q)(this.bf.ma.zb(), this.remove, this);
  }
};
z.g.remove = function() {
  var a = this.N;
  (0,z.Qc)(a, this.Uk) && ((0,z.bd)(this.bf), this.bf = null, (0,z.u)(a, this.Uk), (0,z.$h)(this.Ef), this.Ef = (0,z.R)(a, z.Ho, function() {
    a.style.display = "none";
    (0,z.$h)(this.Ef);
  }, this), this.ui = null);
};
(0,z.p)(z.nA, z.iA);
z.g = z.nA.prototype;
z.g.ba = function() {
  return this.N;
};
z.g.enable = function() {
  this.oj || (this.oj = !0);
};
z.g.disable = (0,z.n)(208);
z.g.fG = function(a) {
  (0,z.Td)(this.N, a.target) || this.remove();
};
z.g.PG = function(a) {
  (0,z.Td)(this.N, a.target) || this.remove();
};
z.g.Zy = function() {
  var a = this.ui;
  this.remove();
  (0,z.Oy)(this, a, a.getAttribute("data-popover"));
};
z.g.remove = function() {
  var a = this.N;
  a && (0,z.Qc)(a, this.Uk) && ((0,z.u)(a, this.Uk), (0,z.$h)(this.Ef), this.Ef = (0,z.R)(a, z.Ho, function() {
    a.style.visibility = "hidden";
    (0,z.$h)(this.Ef);
  }, this), (0,z.$h)(this.op), (0,z.$h)(this.pp), this.pp = this.op = this.ui = null, this.Ca.Ba("resize-end", this.Zy, this), this.ma.Ea(!0), this.ma = null);
};
z.g.createElement = function(a, b, c) {
  var d = window.document.createElement("div");
  d.className = "popover popover-" + a;
  d.innerHTML = Fp({EB:b, Uw:c || ""});
  return d;
};
var iH;
z.IA = !z.w || ld(9);
iH = z.w && !(0,z.id)("9");
!z.ce || (0,z.id)("528");
z.Qe && (0,z.id)("1.9b") || z.w && (0,z.id)("8") || z.Re && (0,z.id)("9.5") || z.ce && (0,z.id)("528");
z.Qe && !(0,z.id)("8") || z.w && (0,z.id)("9");
z.pA.prototype.C = function() {
};
z.pA.prototype.Xb = function() {
};
z.pA.prototype.stopPropagation = function() {
  this.Kj = !0;
};
z.pA.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.AD = !1;
};
(0,z.p)(z.qA, z.pA);
z.g = z.qA.prototype;
z.g.init = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (z.Qe) {
      var e;
      a: {
        try {
          Hf(d.nodeName);
          e = !0;
          break a;
        } catch (f) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = z.ce || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = z.ce || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.qf = a;
  a.defaultPrevented && this.preventDefault();
};
z.g.stopPropagation = function() {
  z.qA.w.stopPropagation.call(this);
  this.qf.stopPropagation ? this.qf.stopPropagation() : this.qf.cancelBubble = !0;
};
z.g.preventDefault = function() {
  z.qA.w.preventDefault.call(this);
  var a = this.qf;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, iH) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
z.g.pw = (0,z.n)(210);
z.g.C = function() {
};
var uA;
z.sA = "closure_listenable_" + (1E6 * Math.random() | 0);
uA = 0;
z.wA.prototype.add = function(a, b, c, d, e) {
  var f = a.toString();
  a = this.rb[f];
  a || (a = this.rb[f] = [], this.No++);
  var h = (0,z.yA)(a, b, d, e);
  -1 < h ? (b = a[h], c || (b.rr = !1)) : (b = new tA(b, this.src, f, !!d, e), b.rr = c, a.push(b));
  return b;
};
z.wA.prototype.remove = function(a, b, c, d) {
  a = a.toString();
  if (!(a in this.rb)) {
    return!1;
  }
  var e = this.rb[a];
  b = (0,z.yA)(e, b, c, d);
  return-1 < b ? ((0,z.vA)(e[b]), db.splice.call(e, b, 1), 0 == e.length && (delete this.rb[a], this.No--), !0) : !1;
};
z.wA.prototype.Nj = (0,z.n)(211);
z.wA.prototype.ml = (0,z.n)(212);
var EA;
z.DA = "closure_lm_" + (1E6 * Math.random() | 0);
EA = {};
z.BA = 0;
z.jH = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
Nb(function(a) {
  z.HA = a(z.HA);
});
N("m", "post_recommended", function(a) {
  return "recommended " + (0,z.O)(a.post.title);
});
N("m", "post_cross_posted", function(a) {
  return "added " + (0,z.O)(a.post.title) + " to " + (0,z.O)(a.collection.name);
});
N("m", "collection_cross_posted", function(a) {
  return "added " + (0,z.O)(a.post.title) + " to " + (0,z.O)(a.collection.name);
});
N("m", "collection_post_submitted", function(a) {
  return "submitted " + (0,z.O)(a.post.title) + " to " + (0,z.O)(a.collection.name);
});
N("m", "collection_post_approved", function(a) {
  return "approved " + (0,z.O)(a.post.title) + " to be added to " + (0,z.O)(a.collection.name);
});
N("m", "collection_editor_added", function(a) {
  return "added you as an editor to the collection " + (0,z.O)(a.collection.name);
});
N("m", "post_collaborated_published", function(a) {
  return "published " + (0,z.O)(a.post.title) + ", which you collaborated on";
});
N("m", "follow_up_created", function(a) {
  return "suggested further reading for " + (0,z.O)(a.post.title);
});
N("m", "follow_up_published", function(a) {
  return "published your suggested further reading for " + (0,z.O)(a.post.title);
});
N("m", "post_added_as_follow_up", function(a) {
  return "added " + (a.followUp.title ? (0,z.O)(a.followUp.title) : "Untitled") + " as further reading for " + (0,z.O)(a.post.title);
});
N("m", "post_noted", function(a) {
  return "left a new note on " + (0,z.O)(a.post.title);
});
N("m", "note_replied", function(a) {
  return "replied to your note on " + (0,z.O)(a.post.title);
});
N("m", "post_note_replied", function(a) {
  return "replied to a note on " + (0,z.O)(a.post.title);
});
N("m", "note_published", function(a) {
  return "published your note on " + (0,z.O)(a.post.title);
});
N("m", "mention_in_note", function(a) {
  return "mentioned you in a note on " + (0,z.O)(a.post.title);
});
N("m", "mention_in_note_update", function(a) {
  return "updated a note mentioning you on " + (0,z.O)(a.post.title);
});
N("m", "mention_in_note_reply", function(a) {
  return "mentioned you in a note on " + (0,z.O)(a.post.title);
});
N("m", "mention_in_note_reply_update", function(a) {
  return "updated a reply mentioning you on " + (0,z.O)(a.post.title);
});
N("m", "collection_followed_milestone", function(a) {
  return "Your collection " + (0,z.O)(a.collection.name) + " has reached " + (0,z.O)(a.milestoneArg) + " followers";
});
N("m", "post_recommended_milestone", function(a) {
  return "Your story " + (0,z.O)(a.post.title) + " has reached " + (0,z.O)(a.milestoneArg) + " recommends";
});
N("m", "post_published_by_someone_you_follow", function(a) {
  return "published a new story " + (0,z.O)(a.post.title);
});
z.g = LA.prototype;
z.g.bk = function() {
  this.fK.F("change", this.II, this);
  (0,z.Di)(this.U).D("view-actors", this.jB, this);
  (0,z.yi)("notifications-more", this.VJ, this).D("view-actors", this.jB, this);
};
z.g.xc = function(a) {
  a = (0,z.xg)(JA, {aD:a.activityRollupItems});
  this.U.appendChild(a);
  this.Rp = this.U.getElementsByClassName("notifications-list")[0];
};
z.g.VJ = function() {
  (0,z.r)((0,z.q)(this.ea.get(NA.R() + "?olderThan\x3d" + this.Qz + "\x26minCount\x3d100", {na:!0, background:!0}), function(a) {
    this.IA(a);
    a = a.activityRollupItems;
    for (var b = "", c = 0;c < a.length;c++) {
      b += (0,z.K)(KA, {Ga:a[c]});
    }
    b = (0,z.Id)(b);
    c = this.U.querySelector(".notifications-show-more");
    this.Rp.insertBefore(b, c);
    0 == a.length && c.parentNode.removeChild(c);
  }, this), z.Cj);
};
z.g.IA = function(a) {
  a = a.activityRollupItems;
  0 < a.length && (this.Qz = a[a.length - 1].lastOccurredAt);
  for (var b = 0;b < a.length;b++) {
    this.cy[a[b].rollupRangeKey] = a[b].actors;
  }
};
z.g.jB = function(a) {
  var b = this.cy[a.value];
  this.W.open({title:a.target.getAttribute("dialog-title"), bodyHtml:(0,z.K)(OA, {actors:b}), type:"scroller"});
};
z.g.II = function(a, b) {
  var c = (0,z.mk)(b, "newActivityCount");
  this.Rp && ((0,z.Nd)(this.Rp), MA(this));
  (0,z.Uc)(window.document.body, "site-nav-new-activity", 0 < c);
};
N("n", "post_recommended", function(a) {
  return "recommended " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "post_cross_posted", function(a) {
  return "added " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + " to " + (0,z.O)(a.collection.name);
});
N("n", "collection_cross_posted", function(a) {
  return "added " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + " to " + (0,z.O)(a.collection.name);
});
N("n", "post_collaborated_published", function(a) {
  return "published " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled") + ", which you collaborated on";
});
N("n", "follow_up_created", function(a) {
  return "suggested further reading for " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "follow_up_published", function(a) {
  return "published your suggested further reading for " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "post_added_as_follow_up", function(a) {
  return "added " + (a.followUp.title ? (0,z.O)(a.followUp.title) : "Untitled") + " as further reading for " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "post_noted", function(a) {
  return "left a new note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "note_replied", function(a) {
  return "replied to your note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "post_note_replied", function(a) {
  return "replied to a note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "note_published", function(a) {
  return "published your note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "mention_in_note", function(a) {
  return "mentioned you in a note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "mention_in_note_update", function(a) {
  return "updated a note mentioning you on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "mention_in_note_reply", function(a) {
  return "mentioned you in a note on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
N("n", "mention_in_note_reply_update", function(a) {
  return "updated a reply mentioning you on " + (a.post.title ? (0,z.O)(a.post.title) : "Untitled");
});
z.g = PA.prototype;
z.g.Zp = !1;
z.g.bk = function() {
  var a = z.HC ? "touchend" : "click", a = IC ? "MSPointerDown" : a;
  (0,z.R)(this.Ah, "keydown", this.tG, this);
  (0,z.R)(this.Ah, a, this.gG, this);
  (0,z.R)(this.Ah, "mouseover", this.Eq, this);
  (0,z.R)(this.RA, a, this.Xs, this);
  this.ha.F(Jn, this.qu, this);
  this.Dd.F("httperror", this.ru, this);
  (0,z.yi)("open-new-post", this.gu, this).D("open-nav", this.bJ, this);
};
z.g.gG = function(a) {
  a.metaKey || a.shiftKey || a.altKey || a.ctrlKey || (this.uk = !!(0,z.Yd)(a.target, null, "site-nav-list-item-btn"));
};
z.g.gu = function(a) {
  (0,z.Dk)(UC, {source:(0,z.Yd)(a.target, null, "site-nav") ? "site-nav" : (0,z.Yd)(a.target, null, "cover-home") ? "home-cover" : null});
  this.ha.navigate("p/new-post");
};
z.g.tG = function(a) {
  var b = this.Ah.getElementsByClassName("navigable-list-item");
  40 == a.keyCode ? (this.kg = Math.min(++this.kg, b.length - 1), QA(b[this.kg])) : 38 == a.keyCode ? (this.kg = Math.max(--this.kg, 0), QA(b[this.kg])) : this.kg && 13 == a.keyCode ? (b = b[this.kg].querySelector("[data-action]")) ? (a = b.getAttribute("data-action"), this.uk = !0, Ci && Oi({he:a, value:void 0, target:window.document.body, event:{}, Wn:!1})) : (a = a.target.querySelector("[href]")) && this.ha.navigate(a.pathname.substr(1)) : 9 == a.keyCode ? (this.Eq(), this.uk = !1) : 27 == a.keyCode && 
  (this.Eq(), this.uk = !1, this.Xs());
};
z.g.Eq = function() {
  this.Ah.blur();
  this.kg = 0;
};
z.g.bJ = function(a) {
  a.preventDefault && (a.preventDefault(), a.stopPropagation());
  this.Eq();
  this.Zp = !0;
  (0,z.t)(window.document.body, "site-nav-transition");
  (0,z.u)(window.document.body, "site-nav-new-activity");
  if (a = this.ha.tb.L(".canvas-renderer")) {
    a.style.top = (0,z.ni)(window.document.body).top + "px";
  }
  (0,z.J)("isAuthenticated") && this.Dd.post(UG.R(), null, {background:!0});
  (0,z.t)(window.document.body, "site-nav-drawer-open");
  this.Ah.focus();
};
z.g.Xs = function(a) {
  function b(a) {
    if (!a || a.target === c) {
      e && (0,window.clearTimeout)(e);
      (0,z.$h)(d);
      !this.Zp && ((0,z.u)(window.document.body, "site-nav-transition"), a = this.ha.tb.L(".canvas-renderer")) && (a.style.top = "");
      a = (0,z.fb)(window.document.getElementsByClassName("notifications-list-item-new"));
      for (var b = 0;b < a.length;b++) {
        a[b].className = "notifications-list-item";
      }
    }
  }
  if (!this.uk && this.Zp) {
    var c = window.document.getElementById("container"), d = (0,z.R)(c, z.Ho, b, this), e = (0,window.setTimeout)(b.bind(this), 500);
    (0,z.u)(window.document.body, "site-nav-drawer-open");
    this.Zp = !1;
    a && a.preventDefault();
  }
};
z.g.qu = function() {
  this.uk = !1;
  this.Xs();
  window.document.body.removeChild(this.Ah);
  window.document.body.insertBefore(this.Ah, this.RA);
};
z.g.ru = function(a, b) {
  b.background && 401 == a && this.Ra.H("You’ve been logged out. Please log in.", "error");
};
z.g = RA.prototype;
z.g.GK = function(a) {
  !(a = a.event.target) || "IMG" != a.tagName || a.width >= window.innerWidth - $A || (SA(this, !0), this.jm = new TA(a, this.ca), XA(this.jm), this.Za = (0,z.Ln)((0,z.Bs)(this.ca.get("app"))), this.ya.push((0,z.R)(window, "scroll", (0,z.En)(100, this.MJ, this), this)), this.ya.push((0,z.R)(window.document, "click", this.lF, this, !0)), this.ya.push((0,z.R)(window.document, "keyup", this.YG, this)), this.ya.push((0,z.R)(window.document, "touchstart", this.rK, this)));
};
z.g.nH = function(a, b) {
  function c(a) {
    var b = window.document.createElement("img");
    b.src = WA(a);
    this.Ku = (0,z.R)(b, "load", function() {
      if (a.width === a.height && !a.getAttribute("data-width")) {
        var c = Math.min(b.width, b.height);
        a.setAttribute("data-width", c);
        a.setAttribute("data-height", c);
        return b.src = WA(a);
      }
      a.src = b.src;
      a.getAttribute("data-width") || (a.setAttribute("data-width", b.width), a.setAttribute("data-height", b.height));
      d.call(this);
    }, this);
  }
  function d() {
    if (this.Ju.length) {
      var a = this.Ju.shift();
      c.call(this, a);
    }
  }
  b && (SA(this, !0), this.Ku && (0,z.$h)(this.Ku), this.Ju = Array.prototype.slice.call((0,z.Bs)(this.ca.get("app")).gs('[data-action\x3d"zoom"]')), d.call(this));
};
z.g.MJ = function() {
  var a = (0,z.ni)(this.Za).top;
  null === this.Pt && (this.Pt = a);
  40 <= Math.abs(this.Pt - a) && SA(this);
};
z.g.YG = function(a) {
  27 == a.keyCode && SA(this);
};
z.g.lF = function(a) {
  a.stopPropagation();
  a.preventDefault();
  SA(this);
};
z.g.rK = function(a) {
  this.hz = a.touches[0].pageY;
  this.ZA = (0,z.R)(a.target, "touchmove", this.qK, this);
};
z.g.qK = function(a) {
  10 < Math.abs(a.touches[0].pageY - this.hz) && (SA(this), (0,z.$h)(this.ZA));
};
(0,z.p)(TA, z.v);
var $A = 80;
TA.prototype.close = function(a) {
  (0,z.u)(window.document.body, "zoom-overlay-open");
  (0,z.t)(window.document.body, "zoom-overlay-transitioning");
  (0,z.uf)(this.Ub, "transform", "");
  this.oe && (0,z.uf)(this.oe, "transform", "");
  z.w && !(0,z.id)(10) || a ? this.Xb() : this.Xq = (0,z.R)(this.Ub, z.Ho, this.Xb, this);
};
TA.prototype.C = function() {
  this.ma.Nc || this.ma.cancel();
  this.$t && (0,z.$h)(this.$t);
  this.Xq && (0,z.$h)(this.Xq);
  this.oe && this.oe.parentNode && ((0,z.u)(this.Ub, "zoom-img"), this.oe.parentNode.replaceChild(this.Ub, this.oe), this.an.parentNode.removeChild(this.an), (0,z.u)(window.document.body, "zoom-overlay-transitioning"));
  TA.w.C.call(this);
};
(0,z.p)(z.hB, z.Ij);
z.g = z.hB.prototype;
z.g.C = function() {
  this.sy();
  z.hB.w.C.call(this);
};
z.g.getMetadata = function() {
  return this.Kf.ja();
};
z.g.start = function() {
  if (this.cz) {
    throw Error("An upload can only be started once.");
  }
  this.cz = !0;
  this.getFile() && (0,z.jB)(this);
  return(0,z.Cc)((0,z.q)(this.LD(), this.YI, this), this.sy, this);
};
z.g.getFile = function() {
  return null;
};
z.g.aH = function(a) {
  return(0,z.q)(kz(this.ff, a), function(a) {
    this.Kf.$l(a.width);
    this.Kf.Zl(a.height);
    return this.Kf;
  }, this);
};
z.g.YI = function(a) {
  this.Kf.lc(a);
  var b = 0.8;
  this.vq = window.setInterval(function() {
    this.X("progress", b);
    b = Math.pow(b, 0.9);
  }.bind(this), 100);
  a = this.Zq(a);
  a = this.ff.load(a);
  this.Mk && (0,z.Dc)(a, this.Mk);
  return(0,z.q)(a, function() {
    return this.getMetadata();
  }, this);
};
z.g.sy = function() {
  this.vq && ((0,window.clearInterval)(this.vq), this.vq = null);
  if (this.Ag) {
    var a = this.Mk.zb();
    (0,z.q)(this.Ag.zb(), function(b) {
      return(0,z.Cc)(a, function() {
        (0,z.Fn)(function() {
          window.URL.revokeObjectURL(b);
        });
      }, this);
    }, this);
    this.Ag.Nc || this.Ag.cancel();
  }
  this.Mk = this.Ag = null;
};
(0,z.p)(z.kB, z.hB);
z.g = z.kB.prototype;
z.g.Wc = null;
z.g.C = function() {
  this.Wc && this.Wc.abort();
  this.ma.Nc || this.ma.cancel();
  this.rp = this.ma = null;
  z.kB.w.C.call(this);
};
z.g.getFile = function() {
  return this.rp;
};
z.g.LD = function() {
  if (this.rp.size > 1048576 * Number((0,z.J)("variants.max_upload_size_mb"))) {
    var a = Error("File is too big");
    a.Hw = 413;
    this.ma.$d(a);
    return this.ma.zb();
  }
  a = new window.FormData;
  a.append("uploadedFile", this.rp);
  this.Wc = lj();
  (0,z.R)(this.Wc.upload, "progress", this.gq, this);
  (0,z.R)(this.Wc, "load", this.Zm, this);
  (0,z.R)(this.Wc, "error", this.Le, this);
  (0,z.R)(this.Wc, "timeout", this.Le, this);
  (0,z.R)(this.Wc, "abort", this.sH, this);
  this.Wc.open("POST", "/_/upload");
  this.Wc.setRequestHeader("X-Obvious-CID", "web");
  this.Wc.setRequestHeader("X-XSRF-Token", "1");
  this.Wc.send(a);
  (0,z.Cc)(this.ma, function() {
    this.Wc = null;
  }, this);
  return this.ma.zb();
};
z.g.gq = function(a) {
  var b = a.lengthComputable ? a.total : 0;
  this.X("progress", 0.8 * (b ? a.loaded / b : 0), this);
};
z.g.Zm = function() {
  if (4 == this.Wc.readyState) {
    if (200 == this.Wc.status) {
      var a = Xz(this.Wc.responseText);
      try {
        var b = window.JSON.parse(a);
        this.ma.Ea(b.payload.value.fileId);
      } catch (c) {
        this.ma.$d(c);
      }
    } else {
      a = Error("Upload error"), a.Hw = this.Wc.status, this.ma.$d(a);
    }
  }
};
z.g.Le = function(a) {
  this.ma.$d(a || Error("Unknown upload error"));
};
z.g.sH = function() {
  this.ma.Nc || this.ma.cancel();
};
(0,z.p)(z.lB, z.v);
z.lB.prototype.C = function() {
  z.lB.w.C.call(this);
};
z.lB.prototype.ro = (0,z.n)(218);
z.lB.prototype.Sg = (0,z.n)(213);
z.lB.prototype.upload = function(a) {
  if (!z.JC) {
    throw Error("Direct file uploads are not supported");
  }
  a = null == a.length ? [a] : (0,z.fb)(a);
  !(0,z.J)("variants.upload_multiple_files") && a.length && (a.length = 1);
  return a.map(function(a) {
    return new z.kB(this.ca, a);
  }, this);
};
(0,z.p)(mB, z.Ij);
var pB = "track";
z.g = mB.prototype;
z.g.rz = null;
z.g.C = function() {
  (0,window.clearTimeout)(this.Dh);
  this.Ca.Ba("scroll", this.Me, this);
  mB.w.C.call(this);
};
z.g.Oi = function() {
  if (this.Za = this.ha.tb && (0,z.Ln)()) {
    this.kB = (0,z.aj)();
  }
};
z.g.Me = function() {
  (0,window.clearTimeout)(this.Dh);
  oB(this);
  nB(this, !0);
};
z.g.KI = function() {
  oB(this);
  nB(this);
};
var tB = {scrollbars:"scrollbars", NM:"resizable", toolbar:"toolbar", location:"location", width:"width", height:"height", left:"left", top:"top"};
qB.prototype.open = function(a, b, c, d) {
  c = sB(this, c || {});
  (a = this.wn.open(a.toString(), b, c)) && d && (this.bj[b] = {is:a, Dn:d}, rB || (this.bj[b].MC = b, this.Fp || (this.Fp = this.wn.setInterval(this.jJ.bind(this), 500))));
  return a;
};
qB.prototype.jJ = function() {
  this.bj = tb(this.bj, function(a) {
    return!a.is.closed;
  });
  (0,z.zb)(this.bj) && (this.wn.clearInterval(this.Fp), this.Fp = null);
  (0,z.sb)(this.bj, function(a, b) {
    var c = a.is.name;
    if (a.MC !== c) {
      if (b !== c.substr(0, b.length)) {
        (0,z.Cj)("Window " + b + " sent an invalid message via window.name");
      } else {
        var d = {};
        try {
          d = JSON.parse(c.substr(b.length + 1));
        } catch (e) {
          (0,z.Cj)(e);
          return;
        }
        a.MC = a.is.name;
        a.Dn(d);
      }
    }
  });
};
qB.prototype.iH = function(a) {
  if (a.origin === Gy().toString()) {
    var b = this.bj[a.source.name];
    if (b && b.is === a.source) {
      var c = {};
      try {
        c = JSON.parse(a.data);
      } catch (d) {
        (0,z.Cj)(d);
        return;
      }
      b.Dn(c);
    }
  }
};
vB.prototype.Oi = function(a, b, c) {
  if (b) {
    for (a = c.gs("[data-load-img]"), b = 0;b < a.length;b++) {
      (c = a[b].getAttribute("data-load-img")) && (c = a[b].querySelector(c)) && (c = "IMG" != c.tagName ? c.style.backgroundImage && c.style.backgroundImage.match(/url\(['"]?([^\)'"]*)/)[1] : c.src) && wB(c, a[b]);
    }
  }
};
(function() {
  function a() {
    var a = ys(As(As(zs(zs(zs(zs(zs(zs(zs(zs(zs(l.get("app"), /^utm_/), /^km_/), "q"), "kme"), "kmi"), "source"), "interstitial"), /^fb_/), /^action_/), /^\/r\/?$/), /^\/feed\/.*/), c());
    a.F(Jn, function(a, b) {
      e && (0,z.Wc)(window.document.body, "js-loading", "js-loaded");
      b && (e || Ek(["_trackPageview", a]), Fk(["record", "pageview", {path:a}]));
    });
    new vB(l);
    (0,z.J)("variants.enable_cover_flow") && new gk(l);
    var d = window.location.pathname + window.location.hash, e = !0, h = b();
    (0,z.r)((0,z.q)((0,z.Cc)(a.init(d, h), function() {
      e = !1;
    }), function() {
      f();
    }), function() {
    });
  }
  function b() {
    var a = window.location.search;
    if (!a) {
      return{};
    }
    "?" == a.charAt(0) && (a = a.substr(1));
    for (var a = new Sf(a), b = a.ue(), c = {}, d = 0;d < b.length;d++) {
      c[b[d]] = a.get(b[d]);
    }
    return c;
  }
  function c() {
    var a = [iw(wF, Fo), iw(xF, Fo), iw(VE, Sp), iw(yF, "BestOfScreen"), iw(bH, hq), iw(DF, z.Do), iw(Uy, z.Do), iw(z.EF, "ProfileScreen"), iw(FF, "ProfileScreen"), iw(GF, "ProfileScreen"), iw(HF, "ProfileScreen"), iw(IF, "ProfileScreen"), iw(JF, "DraftsScreen"), iw(LF, "DraftsScreen"), iw(KF, "DraftsScreen"), iw(MF, "DraftsScreen"), iw(z.NF, "ExportScreen"), iw(OF, "ReadingListScreen"), iw(z.QF, "SettingsScreen"), iw(RF, "StatsScreen"), iw(SF, "StatsScreen"), iw($F, "EspnScreen"), iw(bG, "StartWritingScreen"), 
    iw(Cy, "VerificationScreen"), iw(z.pG, "RevertCandidateScreen"), iw(dG, z.Do), iw(cG, z.Do)];
    a.push(iw(vG, "ReferrersScreen"));
    (0,z.J)("variants.enable_discovery_homepage") ? (a.push(iw(z.uF, "SocialActivityScreen")), a.push(iw(vF, Fo)), a.push(iw(PF, "SocialActivityScreen"))) : ((0,z.J)("variants.enable_social_activity_feed") && a.push(iw(PF, "SocialActivityScreen")), a.push(iw(z.uF, Fo)));
    a.push(iw(z.TF, "CollectionSettingsScreen"));
    a.push(iw(VF, "CollectionSettingsScreen"));
    a.push(iw(z.UF, vy));
    a.push(iw(WF, vy));
    a.push(iw(XF, vy));
    a.push(iw(z.nx, ex), iw(z.Dq, ex));
    a.push(iw(z.zF, "PostEditScreen"), iw(z.AF, "PostEditScreen"), iw(z.YF, "PostEditScreen"), iw(z.ZF, "PostEditScreen"));
    var b = new fw;
    a.forEach(function(a) {
      b.add(a);
    });
    return b;
  }
  function d(a) {
    l.get("app").navigate(a.value);
  }
  function e() {
    var a = Math.round(window.document.body.clientWidth), b = window.devicePixelRatio || 1;
    DB.set("sz", String(a), 604800, "/");
    DB.set("pr", String(b), 604800, "/");
  }
  function f() {
    var a = window.location.pathname;
    if ((0,z.J)("isAuthenticated") && !(0,z.J)("useragent.isMobile") && !(0,z.J)("isCurrentUserVerified") && (0,z.J)("currentUserHasUnverifiedEmail") && a != Cy.path && a != $F.path && a != z.aG.path && a != bG.path && a != cG.path) {
      (0,z.Dk)(ED, {});
      var b = l.get("butter-bar");
      b.H('Complete your account registration. \x3cbutton class\x3d"btn btn-chromeless link link-butter" title\x3d"Send verification email" data-action\x3d"butter-bar-action"\x3eSend verification email.\x3c/button\x3e', {type:"success", Ix:-1});
      sz(b, function() {
        (0,z.Dk)(FD, {});
        (0,z.r)((0,z.q)(l.get("request").post(Cy.R(), {}, {na:!0}), function(a) {
          b.ka();
          b.H(wp({email:a.value}), "success");
          sz(b, function() {
            l.get("app").navigate("me/settings");
          });
        }), (0,z.oq)(l.get("dialog"), Bp()));
      }, this);
    }
  }
  yg();
  var h = String((0,z.J)("buildLabel"));
  (function() {
    z.w ? xj() : (Sb = new Hj, yj(), zj(), Aj(), Bj(), Rb());
    Ej.push(z.Nc);
    Ej.push(qj);
    Ej.push("domIsDirty");
    tj("user", (0,z.J)("currentUser.userId"));
    uj.build = h;
    uj.userAgent = window.navigator.userAgent;
    tj("location", {toString:function() {
      return window.document.location.href;
    }});
  })();
  var k = uB(), l = new Xq(k, "app");
  window.__obv = l;
  for (vj(new dj(l, "/_/oh-noes", 5E3, 10));Gj.length;) {
    fj(wj, Gj.shift());
  }
  Nk(new dj(l, "/_/stat", 5E3, window.Infinity));
  cz();
  (function(a) {
    var b = a.get("request");
    b.F("versionupdate", function() {
      window.location.reload(!0);
    });
    b.F("buildchange", function() {
      a.get("app").uy = !1;
    });
    return b;
  })(l);
  (function(a) {
    a = new Pq(a);
    var b = window.PLOVR_MODULE_URIS, c = window.PLOVR_MODULE_INFO;
    a.Dz = c;
    for (var d in c) {
      0 === c[d].length && (a.Gp[d] = !0);
    }
    0 === b.base.indexOf("fingerprint:") && (b = (0,z.J)("moduleUrls"));
    a.Ez = b;
  })(k);
  (function() {
    Hk("userId", (0,z.J)("currentUser.userId"));
    Hk("referrer", function() {
      var a = l.get("referrer-tracker"), b = a.Uu;
      a.Rt && (b = a.jp || a.Uu);
      0 !== a.Bh.length && (a = a.Bh.slice(-1)[0], a = a[Object.keys(a)[0]], b = 0 === a.length ? b : b + (-1 == b.indexOf("?") ? "?" : "\x26") + "source\x3d" + a);
      return b;
    });
    Hk("location", function() {
      return window.document.location.href;
    });
  })();
  l.cd();
  z.da._PLOVR_TEST || (a(), (new Iy(window.document.body, l)).H(), (new wy(window.document.body, l)).H(), (new xy(window.document.body, l)).H(), (new az(window.document.body, l)).H(), (new bz(window.document.body, l)).H(), (new Yy(window.document.body, l)).H(), (new Zy(window.document.body, l)).H(), (new zy(window.document.body)).H(), (new Ay(window.document.body, l)).H(), (new Vy(window.document.body, l)).H(), (new $y(window.document.body, l)).H(), (0,z.yi)("navigate", d), e(), l.get("dom-monitor").F("resize-end", 
  e), DB.set("tz", String((new Date).getTimezoneOffset()), 604800, "/"));
})();
})(_mdm);
