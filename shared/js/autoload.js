/**
 * ScriptName: autoload.js
 * Version: 3.2
 *
 * FoodConnection
 * http://foodconnection.jp/
 * http://foodconnection.vn/
 *
 */

function ___query(variable) {
	var query = window.location.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		if (decodeURIComponent(pair[0]) == variable) return decodeURIComponent(pair[1]);
	}
}

/*!
 * modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles
 */

!(function(e, t, n) {
	function r(e, t) {
		return typeof e === t;
	}
	function o() {
		var e, t, n, o, i, s, a;
		for (var l in b)
			if (b.hasOwnProperty(l)) {
				if (
					((e = []),
					(t = b[l]),
					t.name &&
						(e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
				)
					for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
				for (o = r(t.fn, 'function') ? t.fn() : t.fn, i = 0; i < e.length; i++)
					(s = e[i]),
						(a = s.split('.')),
						1 === a.length
							? (Modernizr[a[0]] = o)
							: (!Modernizr[a[0]] ||
									Modernizr[a[0]] instanceof Boolean ||
									(Modernizr[a[0]] = new Boolean(Modernizr[a[0]])),
								(Modernizr[a[0]][a[1]] = o)),
						C.push((o ? '' : 'no-') + a.join('-'));
			}
	}
	function i(e) {
		var t = x.className,
			n = Modernizr._config.classPrefix || '';
		if ((_ && (t = t.baseVal), Modernizr._config.enableJSClass)) {
			var r = new RegExp('(^|\\s)' + n + 'no-js(\\s|$)');
			t = t.replace(r, '$1' + n + 'js$2');
		}
		Modernizr._config.enableClasses &&
			((t += ' ' + n + e.join(' ' + n)), _ ? (x.className.baseVal = t) : (x.className = t));
	}
	function s(e, t) {
		if ('object' == typeof e) for (var n in e) P(e, n) && s(n, e[n]);
		else {
			e = e.toLowerCase();
			var r = e.split('.'),
				o = Modernizr[r[0]];
			if ((2 == r.length && (o = o[r[1]]), 'undefined' != typeof o)) return Modernizr;
			(t = 'function' == typeof t ? t() : t),
				1 == r.length
					? (Modernizr[r[0]] = t)
					: (!Modernizr[r[0]] ||
							Modernizr[r[0]] instanceof Boolean ||
							(Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
						(Modernizr[r[0]][r[1]] = t)),
				i([ (t && 0 != t ? '' : 'no-') + r.join('-') ]),
				Modernizr._trigger(e, t);
		}
		return Modernizr;
	}
	function a() {
		return 'function' != typeof t.createElement
			? t.createElement(arguments[0])
			: _
				? t.createElementNS.call(t, 'http://www.w3.org/2000/svg', arguments[0])
				: t.createElement.apply(t, arguments);
	}
	function l() {
		var e = t.body;
		return e || ((e = a(_ ? 'svg' : 'body')), (e.fake = !0)), e;
	}
	function u(e, n, r, o) {
		var i,
			s,
			u,
			f,
			d = 'modernizr',
			c = a('div'),
			p = l();
		if (parseInt(r, 10)) for (; r--; ) (u = a('div')), (u.id = o ? o[r] : d + (r + 1)), c.appendChild(u);
		return (
			(i = a('style')),
			(i.type = 'text/css'),
			(i.id = 's' + d),
			(p.fake ? p : c).appendChild(i),
			p.appendChild(c),
			i.styleSheet ? (i.styleSheet.cssText = e) : i.appendChild(t.createTextNode(e)),
			(c.id = d),
			p.fake &&
				((p.style.background = ''),
				(p.style.overflow = 'hidden'),
				(f = x.style.overflow),
				(x.style.overflow = 'hidden'),
				x.appendChild(p)),
			(s = n(c, e)),
			p.fake
				? (p.parentNode.removeChild(p), (x.style.overflow = f), x.offsetHeight)
				: c.parentNode.removeChild(c),
			!!s
		);
	}
	function f(e, t) {
		return !!~('' + e).indexOf(t);
	}
	function d(e) {
		return e
			.replace(/([a-z])-([a-z])/g, function(e, t, n) {
				return t + n.toUpperCase();
			})
			.replace(/^-/, '');
	}
	function c(e, t) {
		return function() {
			return e.apply(t, arguments);
		};
	}
	function p(e, t, n) {
		var o;
		for (var i in e) if (e[i] in t) return n === !1 ? e[i] : ((o = t[e[i]]), r(o, 'function') ? c(o, n || t) : o);
		return !1;
	}
	function m(t, n, r) {
		var o;
		if ('getComputedStyle' in e) {
			o = getComputedStyle.call(e, t, n);
			var i = e.console;
			if (null !== o) r && (o = o.getPropertyValue(r));
			else if (i) {
				var s = i.error ? 'error' : 'log';
				i[s].call(i, 'getComputedStyle returning null, its possible modernizr test results are inaccurate');
			}
		} else o = !n && t.currentStyle && t.currentStyle[r];
		return o;
	}
	function h(e) {
		return e
			.replace(/([A-Z])/g, function(e, t) {
				return '-' + t.toLowerCase();
			})
			.replace(/^ms-/, '-ms-');
	}
	function v(t, r) {
		var o = t.length;
		if ('CSS' in e && 'supports' in e.CSS) {
			for (; o--; ) if (e.CSS.supports(h(t[o]), r)) return !0;
			return !1;
		}
		if ('CSSSupportsRule' in e) {
			for (var i = []; o--; ) i.push('(' + h(t[o]) + ':' + r + ')');
			return (
				(i = i.join(' or ')),
				u('@supports (' + i + ') { #modernizr { position: absolute; } }', function(e) {
					return 'absolute' == m(e, null, 'position');
				})
			);
		}
		return n;
	}
	function A(e, t, o, i) {
		function s() {
			u && (delete N.style, delete N.modElem);
		}
		if (((i = r(i, 'undefined') ? !1 : i), !r(o, 'undefined'))) {
			var l = v(e, o);
			if (!r(l, 'undefined')) return l;
		}
		for (var u, c, p, m, h, A = [ 'modernizr', 'tspan', 'samp' ]; !N.style && A.length; )
			(u = !0), (N.modElem = a(A.shift())), (N.style = N.modElem.style);
		for (p = e.length, c = 0; p > c; c++)
			if (((m = e[c]), (h = N.style[m]), f(m, '-') && (m = d(m)), N.style[m] !== n)) {
				if (i || r(o, 'undefined')) return s(), 'pfx' == t ? m : !0;
				try {
					N.style[m] = o;
				} catch (g) {}
				if (N.style[m] != h) return s(), 'pfx' == t ? m : !0;
			}
		return s(), !1;
	}
	function g(e, t, n, o, i) {
		var s = e.charAt(0).toUpperCase() + e.slice(1),
			a = (e + ' ' + O.join(s + ' ') + s).split(' ');
		return r(t, 'string') || r(t, 'undefined')
			? A(a, t, o, i)
			: ((a = (e + ' ' + E.join(s + ' ') + s).split(' ')), p(a, t, n));
	}
	function y(e, t, r) {
		return g(e, n, n, t, r);
	}
	var C = [],
		b = [],
		w = {
			_version: '3.6.0',
			_config: { classPrefix: '', enableClasses: !0, enableJSClass: !0, usePrefixes: !0 },
			_q: [],
			on: function(e, t) {
				var n = this;
				setTimeout(function() {
					t(n[e]);
				}, 0);
			},
			addTest: function(e, t, n) {
				b.push({ name: e, fn: t, options: n });
			},
			addAsyncTest: function(e) {
				b.push({ name: null, fn: e });
			}
		},
		Modernizr = function() {};
	(Modernizr.prototype = w), (Modernizr = new Modernizr()), Modernizr.addTest('webworkers', 'Worker' in e);
	var S = w._config.usePrefixes ? ' -webkit- -moz- -o- -ms- '.split(' ') : [ '', '' ];
	w._prefixes = S;
	var x = t.documentElement,
		_ = 'svg' === x.nodeName.toLowerCase(),
		T = 'Moz O ms Webkit',
		E = w._config.usePrefixes ? T.toLowerCase().split(' ') : [];
	w._domPrefixes = E;
	var P;
	!(function() {
		var e = {}.hasOwnProperty;
		P =
			r(e, 'undefined') || r(e.call, 'undefined')
				? function(e, t) {
						return t in e && r(e.constructor.prototype[t], 'undefined');
					}
				: function(t, n) {
						return e.call(t, n);
					};
	})(),
		(w._l = {}),
		(w.on = function(e, t) {
			this._l[e] || (this._l[e] = []),
				this._l[e].push(t),
				Modernizr.hasOwnProperty(e) &&
					setTimeout(function() {
						Modernizr._trigger(e, Modernizr[e]);
					}, 0);
		}),
		(w._trigger = function(e, t) {
			if (this._l[e]) {
				var n = this._l[e];
				setTimeout(function() {
					var e, r;
					for (e = 0; e < n.length; e++) (r = n[e])(t);
				}, 0),
					delete this._l[e];
			}
		}),
		Modernizr._q.push(function() {
			w.addTest = s;
		});
	var k = (function() {
		function e(e, t) {
			var o;
			return e
				? ((t && 'string' != typeof t) || (t = a(t || 'div')),
					(e = 'on' + e),
					(o = e in t),
					!o &&
						r &&
						(t.setAttribute || (t = a('div')),
						t.setAttribute(e, ''),
						(o = 'function' == typeof t[e]),
						t[e] !== n && (t[e] = n),
						t.removeAttribute(e)),
					o)
				: !1;
		}
		var r = !('onblur' in t.documentElement);
		return e;
	})();
	w.hasEvent = k;
	var z = function(e, t) {
		var n = !1,
			r = a('div'),
			o = r.style;
		if (e in o) {
			var i = E.length;
			for (o[e] = t, n = o[e]; i-- && !n; ) (o[e] = '-' + E[i] + '-' + t), (n = o[e]);
		}
		return '' === n && (n = !1), n;
	};
	w.prefixedCSSValue = z;
	var B = (function() {
		var t = e.matchMedia || e.msMatchMedia;
		return t
			? function(e) {
					var n = t(e);
					return (n && n.matches) || !1;
				}
			: function(t) {
					var n = !1;
					return (
						u('@media ' + t + ' { #modernizr { position: absolute; } }', function(t) {
							n =
								'absolute' ==
								(e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position;
						}),
						n
					);
				};
	})();
	w.mq = B;
	var O = ((w.testStyles = u), w._config.usePrefixes ? T.split(' ') : []);
	w._cssomPrefixes = O;
	var L = { elem: a('modernizr') };
	Modernizr._q.push(function() {
		delete L.elem;
	});
	var N = { style: L.elem.style };
	Modernizr._q.unshift(function() {
		delete N.style;
	});
	w.testProp = function(e, t, r) {
		return A([ e ], n, t, r);
	};
	(w.testAllProps = g),
		(w.testAllProps = y),
		Modernizr.addTest('customelements', 'customElements' in e),
		Modernizr.addTest('history', function() {
			var t = navigator.userAgent;
			return (-1 === t.indexOf('Android 2.') && -1 === t.indexOf('Android 4.0')) ||
			-1 === t.indexOf('Mobile Safari') ||
			-1 !== t.indexOf('Chrome') ||
			-1 !== t.indexOf('Windows Phone') ||
			'file:' === location.protocol
				? e.history && 'pushState' in e.history
				: !1;
		}),
		Modernizr.addTest('pointerevents', function() {
			var e = !1,
				t = E.length;
			for (e = Modernizr.hasEvent('pointerdown'); t-- && !e; ) k(E[t] + 'pointerdown') && (e = !0);
			return e;
		}),
		Modernizr.addTest('postmessage', 'postMessage' in e);
	var R = !1;
	try {
		R = 'WebSocket' in e && 2 === e.WebSocket.CLOSING;
	} catch (j) {}
	Modernizr.addTest('websockets', R),
		Modernizr.addTest('webgl', function() {
			var t = a('canvas'),
				n = 'probablySupportsContext' in t ? 'probablySupportsContext' : 'supportsContext';
			return n in t ? t[n]('webgl') || t[n]('experimental-webgl') : 'WebGLRenderingContext' in e;
		}),
		Modernizr.addTest('cssanimations', y('animationName', 'a', !0)),
		(function() {
			Modernizr.addTest('csscolumns', function() {
				var e = !1,
					t = y('columnCount');
				try {
					(e = !!t), e && (e = new Boolean(e));
				} catch (n) {}
				return e;
			});
			for (
				var e,
					t,
					n = [
						'Width',
						'Span',
						'Fill',
						'Gap',
						'Rule',
						'RuleColor',
						'RuleStyle',
						'RuleWidth',
						'BreakBefore',
						'BreakAfter',
						'BreakInside'
					],
					r = 0;
				r < n.length;
				r++
			)
				(e = n[r].toLowerCase()),
					(t = y('column' + n[r])),
					('breakbefore' === e || 'breakafter' === e || 'breakinside' == e) && (t = t || y(n[r])),
					Modernizr.addTest('csscolumns.' + e, t);
		})(),
		Modernizr.addTest('flexbox', y('flexBasis', '1px', !0)),
		Modernizr.addAsyncTest(function() {
			var e,
				t,
				n,
				r = a('img'),
				o = 'sizes' in r;
			!o && 'srcset' in r
				? ((t = 'data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw=='),
					(e = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=='),
					(n = function() {
						s('sizes', 2 == r.width);
					}),
					(r.onload = n),
					(r.onerror = n),
					r.setAttribute('sizes', '9px'),
					(r.srcset = e + ' 1w,' + t + ' 8w'),
					(r.src = e))
				: s('sizes', o);
		}),
		Modernizr.addTest('picture', 'HTMLPictureElement' in e),
		Modernizr.addTest('srcset', 'srcset' in a('img')),
		o(),
		i(C),
		delete w.addTest,
		delete w.addAsyncTest;
	for (var M = 0; M < Modernizr._q.length; M++) Modernizr._q[M]();
	e.Modernizr = Modernizr;
})(window, document);

/*!
 * @license Copyright 2013, Heinrich Goebl, License: MIT, see https://github.com/hgoebl/mobile-detect.js
 * @version: 1.4.2
 */

!(function(a, b) {
	a(function() {
		'use strict';
		function a(a, b) {
			return null != a && null != b && a.toLowerCase() === b.toLowerCase();
		}
		function c(a, b) {
			var c,
				d,
				e = a.length;
			if (!e || !b) return !1;
			for (c = b.toLowerCase(), d = 0; d < e; ++d) if (c === a[d].toLowerCase()) return !0;
			return !1;
		}
		function d(a) {
			for (var b in a) i.call(a, b) && (a[b] = new RegExp(a[b], 'i'));
		}
		function e(a) {
			return (a || '').substr(0, 500);
		}
		function f(a, b) {
			(this.ua = e(a)), (this._cache = {}), (this.maxPhoneWidth = b || 600);
		}
		var g = {};
		(g.mobileDetectRules = {
			phones: {
				iPhone: '\\biPhone\\b|\\biPod\\b',
				BlackBerry: 'BlackBerry|\\bBB10\\b|rim[0-9]+',
				HTC:
					'HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m|Android [0-9.]+; Pixel',
				Nexus: 'Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6',
				Dell:
					'Dell[;]? (Streak|Aero|Venue|Venue Pro|Flash|Smoke|Mini 3iX)|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b',
				Motorola:
					'Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b|XT1068|XT1092|XT1052',
				Samsung:
					'\\bSamsung\\b|SM-G950F|SM-G955F|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350|SM-J120F|SM-G920F|SM-G920V|SM-G930F|SM-N910C|SM-A310F|GT-I9190|SM-J500FN|SM-G903F|SM-J330F',
				LG:
					'\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323|M257)',
				Sony:
					'SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533',
				Asus: 'Asus.*Galaxy|PadFone.*Mobile',
				NokiaLumia: 'Lumia [0-9]{3,4}',
				Micromax:
					'Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b',
				Palm: 'PalmSource|Palm',
				Vertu:
					'Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature',
				Pantech:
					'PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790',
				Fly:
					'IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250',
				Wiko:
					'KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA(?!nna)|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM',
				iMobile: 'i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)',
				SimValley:
					'\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b',
				Wolfgang: 'AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q',
				Alcatel: 'Alcatel',
				Nintendo: 'Nintendo (3DS|Switch)',
				Amoi: 'Amoi',
				INQ: 'INQ',
				GenericPhone:
					'Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser'
			},
			tablets: {
				iPad: 'iPad|iPad.*Mobile',
				NexusTablet: 'Android.*Nexus[\\s]+(7|9|10)',
				GoogleTablet: 'Android.*Pixel C',
				SamsungTablet:
					'SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708',
				Kindle:
					'Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)',
				SurfaceTablet: 'Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)',
				HPTablet: 'HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10',
				AsusTablet:
					'^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b',
				BlackBerryTablet: 'PlayBook|RIM Tablet',
				HTCtablet: 'HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410',
				MotorolaTablet:
					'xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617',
				NookTablet:
					'Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2',
				AcerTablet:
					'Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30',
				ToshibaTablet:
					'Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO',
				LGTablet: '\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b',
				FujitsuTablet: 'Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b',
				PrestigioTablet:
					'PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002',
				LenovoTablet:
					'Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304F|TB-X304L|TB-8703F|Tab2A7-10F',
				DellTablet: 'Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7',
				YarvikTablet:
					'Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b',
				MedionTablet: 'Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB',
				ArnovaTablet:
					'97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2',
				IntensoTablet: 'INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004',
				IRUTablet: 'M702pro',
				MegafonTablet: 'MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b',
				EbodaTablet: 'E-Boda (Supreme|Impresspeed|Izzycomm|Essential)',
				AllViewTablet: 'Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)',
				ArchosTablet:
					'\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b',
				AinolTablet: 'NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark',
				NokiaLumiaTablet: 'Lumia 2520',
				SonyTablet:
					'Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31',
				PhilipsTablet: '\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b',
				CubeTablet: 'Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT',
				CobyTablet:
					'MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010',
				MIDTablet:
					'M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10',
				MSITablet:
					'MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b',
				SMiTTablet: 'Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)',
				RockChipTablet: 'Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A',
				FlyTablet: 'IQ310|Fly Vision',
				bqTablet:
					'Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))|Maxwell.*Lite|Maxwell.*Plus',
				HuaweiTablet:
					'MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09',
				NecTablet: '\\bN-06D|\\bN-08D',
				PantechTablet: 'Pantech.*P4100',
				BronchoTablet: 'Broncho.*(N701|N708|N802|a710)',
				VersusTablet: 'TOUCHPAD.*[78910]|\\bTOUCHTAB\\b',
				ZyncTablet: 'z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900',
				PositivoTablet: 'TB07STA|TB10STA|TB07FTA|TB10FTA',
				NabiTablet: 'Android.*\\bNabi',
				KoboTablet: 'Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build',
				DanewTablet: 'DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b',
				TexetTablet:
					'NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE',
				PlaystationTablet: 'Playstation.*(Portable|Vita)',
				TrekstorTablet:
					'ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab',
				PyleAudioTablet:
					'\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b',
				AdvanTablet:
					'Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ',
				DanyTechTablet:
					'Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1',
				GalapadTablet: 'Android.*\\bG1\\b',
				MicromaxTablet: 'Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b',
				KarbonnTablet: 'Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b',
				AllFineTablet: 'Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide',
				PROSCANTablet:
					'\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b',
				YONESTablet:
					'BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026',
				ChangJiaTablet:
					'TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503',
				GUTablet: 'TX-A1301|TX-M9002|Q702|kf026',
				PointOfViewTablet:
					'TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10',
				OvermaxTablet:
					'OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027',
				HCLTablet:
					'HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync',
				DPSTablet: 'DPS Dream 9|DPS Dual 7',
				VistureTablet: 'V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10',
				CrestaTablet:
					'CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989',
				MediatekTablet: '\\bMT8125|MT8389|MT8135|MT8377\\b',
				ConcordeTablet: 'Concorde([ ]+)?Tab|ConCorde ReadMan',
				GoCleverTablet:
					'GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042',
				ModecomTablet:
					'FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003',
				VoninoTablet:
					'\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b',
				ECSTablet: 'V07OT2|TM105A|S10OT1|TR10CS1',
				StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
				VodafoneTablet: 'SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497',
				EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
				RossMoorTablet: 'RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711',
				iMobileTablet: 'i-mobile i-note',
				TolinoTablet: 'tolino tab [0-9.]+|tolino shine',
				AudioSonicTablet: '\\bC-22Q|T7-QC|T-17B|T-17P\\b',
				AMPETablet: 'Android.* A78 ',
				SkkTablet: 'Android.* (SKYPAD|PHOENIX|CYCLOPS)',
				TecnoTablet: 'TECNO P9|TECNO DP8D',
				JXDTablet:
					'Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b',
				iJoyTablet:
					'Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)',
				FX2Tablet: 'FX2 PAD7|FX2 PAD10',
				XoroTablet:
					'KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151',
				ViewsonicTablet:
					'ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a',
				VerizonTablet: 'QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1',
				OdysTablet:
					'LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10',
				CaptivaTablet: 'CAPTIVA PAD',
				IconbitTablet:
					'NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S',
				TeclastTablet:
					'T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi',
				OndaTablet:
					'\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+',
				JaytechTablet: 'TPC-PA762',
				BlaupunktTablet: 'Endeavour 800NG|Endeavour 1010',
				DigmaTablet:
					'\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b',
				EvolioTablet: 'ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b',
				LavaTablet: 'QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b',
				AocTablet: 'MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712',
				MpmanTablet:
					'MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010',
				CelkonTablet: 'CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b',
				WolderTablet:
					'miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b',
				MediacomTablet: 'M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA',
				MiTablet: '\\bMI PAD\\b|\\bHM NOTE 1W\\b',
				NibiruTablet: 'Nibiru M1|Nibiru Jupiter One',
				NexoTablet:
					'NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI',
				LeaderTablet:
					'TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100',
				UbislateTablet: 'UbiSlate[\\s]?7C',
				PocketBookTablet: 'Pocketbook',
				KocasoTablet: '\\b(TB-1207)\\b',
				HisenseTablet: '\\b(F5281|E2371)\\b',
				Hudl: 'Hudl HT7S3|Hudl 2',
				TelstraTablet: 'T-Hub2',
				GenericTablet:
					'Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107'
			},
			oss: {
				AndroidOS: 'Android',
				BlackBerryOS: 'blackberry|\\bBB10\\b|rim tablet os',
				PalmOS: 'PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino',
				SymbianOS: 'Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b',
				WindowsMobileOS:
					'Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;',
				WindowsPhoneOS:
					'Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;',
				iOS: '\\biPhone.*Mobile|\\biPod|\\biPad|AppleCoreMedia',
				MeeGoOS: 'MeeGo',
				MaemoOS: 'Maemo',
				JavaOS: 'J2ME/|\\bMIDP\\b|\\bCLDC\\b',
				webOS: 'webOS|hpwOS',
				badaOS: '\\bBada\\b',
				BREWOS: 'BREW'
			},
			uas: {
				Chrome: '\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?',
				Dolfin: '\\bDolfin\\b',
				Opera: 'Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+',
				Skyfire: 'Skyfire',
				Edge: 'Mobile Safari/[.0-9]* Edge',
				IE: 'IEMobile|MSIEMobile',
				Firefox: 'fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile|FxiOS',
				Bolt: 'bolt',
				TeaShark: 'teashark',
				Blazer: 'Blazer',
				Safari: 'Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari',
				UCBrowser: 'UC.*Browser|UCWEB',
				baiduboxapp: 'baiduboxapp',
				baidubrowser: 'baidubrowser',
				DiigoBrowser: 'DiigoBrowser',
				Puffin: 'Puffin',
				Mercury: '\\bMercury\\b',
				ObigoBrowser: 'Obigo',
				NetFront: 'NF-Browser',
				GenericBrowser:
					'NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger',
				PaleMoon: 'Android.*PaleMoon|Mobile.*PaleMoon'
			},
			props: {
				Mobile: 'Mobile/[VER]',
				Build: 'Build/[VER]',
				Version: 'Version/[VER]',
				VendorID: 'VendorID/[VER]',
				iPad: 'iPad.*CPU[a-z ]+[VER]',
				iPhone: 'iPhone.*CPU[a-z ]+[VER]',
				iPod: 'iPod.*CPU[a-z ]+[VER]',
				Kindle: 'Kindle/[VER]',
				Chrome: [ 'Chrome/[VER]', 'CriOS/[VER]', 'CrMo/[VER]' ],
				Coast: [ 'Coast/[VER]' ],
				Dolfin: 'Dolfin/[VER]',
				Firefox: [ 'Firefox/[VER]', 'FxiOS/[VER]' ],
				Fennec: 'Fennec/[VER]',
				Edge: 'Edge/[VER]',
				IE: [ 'IEMobile/[VER];', 'IEMobile [VER]', 'MSIE [VER];', 'Trident/[0-9.]+;.*rv:[VER]' ],
				NetFront: 'NetFront/[VER]',
				NokiaBrowser: 'NokiaBrowser/[VER]',
				Opera: [ ' OPR/[VER]', 'Opera Mini/[VER]', 'Version/[VER]' ],
				'Opera Mini': 'Opera Mini/[VER]',
				'Opera Mobi': 'Version/[VER]',
				UCBrowser: [ 'UCWEB[VER]', 'UC.*Browser/[VER]' ],
				MQQBrowser: 'MQQBrowser/[VER]',
				MicroMessenger: 'MicroMessenger/[VER]',
				baiduboxapp: 'baiduboxapp/[VER]',
				baidubrowser: 'baidubrowser/[VER]',
				SamsungBrowser: 'SamsungBrowser/[VER]',
				Iron: 'Iron/[VER]',
				Safari: [ 'Version/[VER]', 'Safari/[VER]' ],
				Skyfire: 'Skyfire/[VER]',
				Tizen: 'Tizen/[VER]',
				Webkit: 'webkit[ /][VER]',
				PaleMoon: 'PaleMoon/[VER]',
				Gecko: 'Gecko/[VER]',
				Trident: 'Trident/[VER]',
				Presto: 'Presto/[VER]',
				Goanna: 'Goanna/[VER]',
				iOS: ' \\bi?OS\\b [VER][ ;]{1}',
				Android: 'Android [VER]',
				BlackBerry: [ 'BlackBerry[\\w]+/[VER]', 'BlackBerry.*Version/[VER]', 'Version/[VER]' ],
				BREW: 'BREW [VER]',
				Java: 'Java/[VER]',
				'Windows Phone OS': [ 'Windows Phone OS [VER]', 'Windows Phone [VER]' ],
				'Windows Phone': 'Windows Phone [VER]',
				'Windows CE': 'Windows CE/[VER]',
				'Windows NT': 'Windows NT [VER]',
				Symbian: [ 'SymbianOS/[VER]', 'Symbian/[VER]' ],
				webOS: [ 'webOS/[VER]', 'hpwOS/[VER];' ]
			},
			utils: {
				Bot:
					'Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|YandexMobileBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom',
				MobileBot: 'Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2',
				DesktopMode: 'WPDesktop',
				TV: 'SonyDTV|HbbTV',
				WebKit: '(webkit)[ /]([\\w.]+)',
				Console: '\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|Nintendo Switch|PLAYSTATION|Xbox)\\b',
				Watch: 'SM-V700'
			}
		}),
			(g.detectMobileBrowsers = {
				fullPattern: /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
				shortPattern: /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
				tabletPattern: /android|ipad|playbook|silk/i
			});
		var h,
			i = Object.prototype.hasOwnProperty;
		return (
			(g.FALLBACK_PHONE = 'UnknownPhone'),
			(g.FALLBACK_TABLET = 'UnknownTablet'),
			(g.FALLBACK_MOBILE = 'UnknownMobile'),
			(h =
				'isArray' in Array
					? Array.isArray
					: function(a) {
							return '[object Array]' === Object.prototype.toString.call(a);
						}),
			(function() {
				var a,
					b,
					c,
					e,
					f,
					j,
					k = g.mobileDetectRules;
				for (a in k.props)
					if (i.call(k.props, a)) {
						for (b = k.props[a], h(b) || (b = [ b ]), f = b.length, e = 0; e < f; ++e)
							(c = b[e]),
								(j = c.indexOf('[VER]')),
								j >= 0 && (c = c.substring(0, j) + '([\\w._\\+]+)' + c.substring(j + 5)),
								(b[e] = new RegExp(c, 'i'));
						k.props[a] = b;
					}
				d(k.oss),
					d(k.phones),
					d(k.tablets),
					d(k.uas),
					d(k.utils),
					(k.oss0 = { WindowsPhoneOS: k.oss.WindowsPhoneOS, WindowsMobileOS: k.oss.WindowsMobileOS });
			})(),
			(g.findMatch = function(a, b) {
				for (var c in a) if (i.call(a, c) && a[c].test(b)) return c;
				return null;
			}),
			(g.findMatches = function(a, b) {
				var c = [];
				for (var d in a) i.call(a, d) && a[d].test(b) && c.push(d);
				return c;
			}),
			(g.getVersionStr = function(a, b) {
				var c,
					d,
					e,
					f,
					h = g.mobileDetectRules.props;
				if (i.call(h, a))
					for (c = h[a], e = c.length, d = 0; d < e; ++d) if (((f = c[d].exec(b)), null !== f)) return f[1];
				return null;
			}),
			(g.getVersion = function(a, b) {
				var c = g.getVersionStr(a, b);
				return c ? g.prepareVersionNo(c) : NaN;
			}),
			(g.prepareVersionNo = function(a) {
				var b;
				return (
					(b = a.split(/[a-z._ \/\-]/i)),
					1 === b.length && (a = b[0]),
					b.length > 1 && ((a = b[0] + '.'), b.shift(), (a += b.join(''))),
					Number(a)
				);
			}),
			(g.isMobileFallback = function(a) {
				return (
					g.detectMobileBrowsers.fullPattern.test(a) ||
					g.detectMobileBrowsers.shortPattern.test(a.substr(0, 4))
				);
			}),
			(g.isTabletFallback = function(a) {
				return g.detectMobileBrowsers.tabletPattern.test(a);
			}),
			(g.prepareDetectionCache = function(a, c, d) {
				if (a.mobile === b) {
					var e, h, i;
					return (h = g.findMatch(g.mobileDetectRules.tablets, c))
						? ((a.mobile = a.tablet = h), void (a.phone = null))
						: (e = g.findMatch(g.mobileDetectRules.phones, c))
							? ((a.mobile = a.phone = e), void (a.tablet = null))
							: void (g.isMobileFallback(c)
									? ((i = f.isPhoneSized(d)),
										i === b
											? ((a.mobile = g.FALLBACK_MOBILE), (a.tablet = a.phone = null))
											: i
												? ((a.mobile = a.phone = g.FALLBACK_PHONE), (a.tablet = null))
												: ((a.mobile = a.tablet = g.FALLBACK_TABLET), (a.phone = null)))
									: g.isTabletFallback(c)
										? ((a.mobile = a.tablet = g.FALLBACK_TABLET), (a.phone = null))
										: (a.mobile = a.tablet = a.phone = null));
				}
			}),
			(g.mobileGrade = function(a) {
				var b = null !== a.mobile();
				return (a.os('iOS') && a.version('iPad') >= 4.3) ||
				(a.os('iOS') && a.version('iPhone') >= 3.1) ||
				(a.os('iOS') && a.version('iPod') >= 3.1) ||
				(a.version('Android') > 2.1 && a.is('Webkit')) ||
				a.version('Windows Phone OS') >= 7 ||
				(a.is('BlackBerry') && a.version('BlackBerry') >= 6) ||
				a.match('Playbook.*Tablet') ||
				(a.version('webOS') >= 1.4 && a.match('Palm|Pre|Pixi')) ||
				a.match('hp.*TouchPad') ||
				(a.is('Firefox') && a.version('Firefox') >= 12) ||
				(a.is('Chrome') && a.is('AndroidOS') && a.version('Android') >= 4) ||
				(a.is('Skyfire') && a.version('Skyfire') >= 4.1 && a.is('AndroidOS') && a.version('Android') >= 2.3) ||
				(a.is('Opera') && a.version('Opera Mobi') > 11 && a.is('AndroidOS')) ||
				a.is('MeeGoOS') ||
				a.is('Tizen') ||
				(a.is('Dolfin') && a.version('Bada') >= 2) ||
				((a.is('UC Browser') || a.is('Dolfin')) && a.version('Android') >= 2.3) ||
				a.match('Kindle Fire') ||
				(a.is('Kindle') && a.version('Kindle') >= 3) ||
				(a.is('AndroidOS') && a.is('NookTablet')) ||
				(a.version('Chrome') >= 11 && !b) ||
				(a.version('Safari') >= 5 && !b) ||
				(a.version('Firefox') >= 4 && !b) ||
				(a.version('MSIE') >= 7 && !b) ||
				(a.version('Opera') >= 10 && !b)
					? 'A'
					: (a.os('iOS') && a.version('iPad') < 4.3) ||
						(a.os('iOS') && a.version('iPhone') < 3.1) ||
						(a.os('iOS') && a.version('iPod') < 3.1) ||
						(a.is('Blackberry') && a.version('BlackBerry') >= 5 && a.version('BlackBerry') < 6) ||
						(a.version('Opera Mini') >= 5 &&
							a.version('Opera Mini') <= 6.5 &&
							(a.version('Android') >= 2.3 || a.is('iOS'))) ||
						a.match('NokiaN8|NokiaC7|N97.*Series60|Symbian/3') ||
						(a.version('Opera Mobi') >= 11 && a.is('SymbianOS'))
						? 'B'
						: (a.version('BlackBerry') < 5 ||
								a.match('MSIEMobile|Windows CE.*Mobile') ||
								a.version('Windows Mobile') <= 5.2,
							'C');
			}),
			(g.detectOS = function(a) {
				return g.findMatch(g.mobileDetectRules.oss0, a) || g.findMatch(g.mobileDetectRules.oss, a);
			}),
			(g.getDeviceSmallerSide = function() {
				return window.screen.width < window.screen.height ? window.screen.width : window.screen.height;
			}),
			(f.prototype = {
				constructor: f,
				mobile: function() {
					return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.mobile;
				},
				phone: function() {
					return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.phone;
				},
				tablet: function() {
					return g.prepareDetectionCache(this._cache, this.ua, this.maxPhoneWidth), this._cache.tablet;
				},
				userAgent: function() {
					return (
						this._cache.userAgent === b &&
							(this._cache.userAgent = g.findMatch(g.mobileDetectRules.uas, this.ua)),
						this._cache.userAgent
					);
				},
				userAgents: function() {
					return (
						this._cache.userAgents === b &&
							(this._cache.userAgents = g.findMatches(g.mobileDetectRules.uas, this.ua)),
						this._cache.userAgents
					);
				},
				os: function() {
					return this._cache.os === b && (this._cache.os = g.detectOS(this.ua)), this._cache.os;
				},
				version: function(a) {
					return g.getVersion(a, this.ua);
				},
				versionStr: function(a) {
					return g.getVersionStr(a, this.ua);
				},
				is: function(b) {
					return (
						c(this.userAgents(), b) ||
						a(b, this.os()) ||
						a(b, this.phone()) ||
						a(b, this.tablet()) ||
						c(g.findMatches(g.mobileDetectRules.utils, this.ua), b)
					);
				},
				match: function(a) {
					return a instanceof RegExp || (a = new RegExp(a, 'i')), a.test(this.ua);
				},
				isPhoneSized: function(a) {
					return f.isPhoneSized(a || this.maxPhoneWidth);
				},
				mobileGrade: function() {
					return this._cache.grade === b && (this._cache.grade = g.mobileGrade(this)), this._cache.grade;
				}
			}),
			'undefined' != typeof window && window.screen
				? (f.isPhoneSized = function(a) {
						return a < 0 ? b : g.getDeviceSmallerSide() <= a;
					})
				: (f.isPhoneSized = function() {}),
			(f._impl = g),
			(f.version = '1.4.2 2018-06-10'),
			f
		);
	});
})(
	(function(a) {
		if ('undefined' != typeof module && module.exports)
			return function(a) {
				module.exports = a();
			};
		if ('function' == typeof define && define.amd) return define;
		if ('undefined' != typeof window)
			return function(a) {
				window.MobileDetect = a();
			};
		throw new Error('unknown environment');
	})()
);

/*!
 * global Modernizr MobileDetect
 */

!(function(e, t) {
	'use strict';
	var o = new MobileDetect(navigator.userAgent),
		i = o.mobileGrade();
	t.addTest({ mobile: !!o.mobile(), phone: !!o.phone(), tablet: !!o.tablet(), mobilegradea: 'A' === i }),
		(e.mobileDetect = o);
})(window, Modernizr);

/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */

if (___query('mode') && ___query('mode').toLowerCase() == 'local') {
	var linkTag = document.getElementsByTagName('link'),
		styleTag = document.getElementsByTagName('style');

	if (linkTag.length > 0) {
		Array.prototype.forEach.call(linkTag, function(elm, idx) {
			var _tag_ = linkTag[idx];
			if (_tag_.rel && _tag_.rel.toLowerCase() == 'stylesheet') _tag_.setAttribute('data-noprefix', '');
		});
	}

	if (styleTag.length > 0) {
		Array.prototype.forEach.call(styleTag, function(elm, idx) {
			styleTag[idx].setAttribute('data-noprefix', '');
		});
	}
}

/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */

!(function() {
	'use strict';
	function t(t) {
		if (t)
			(d[0] = d[16] = d[1] = d[2] = d[3] = d[4] = d[5] = d[6] = d[7] = d[8] = d[9] = d[10] = d[11] = d[12] = d[13] = d[14] = d[15] = 0),
				(this.blocks = d),
				(this.buffer8 = l);
		else if (a) {
			var r = new ArrayBuffer(68);
			(this.buffer8 = new Uint8Array(r)), (this.blocks = new Uint32Array(r));
		} else this.blocks = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
		(this.h0 = this.h1 = this.h2 = this.h3 = this.start = this.bytes = this.hBytes = 0),
			(this.finalized = this.hashed = !1),
			(this.first = !0);
	}
	var r = 'input is invalid type',
		e = 'object' == typeof window,
		i = e ? window : {};
	i.JS_MD5_NO_WINDOW && (e = !1);
	var s = !e && 'object' == typeof self,
		h = !i.JS_MD5_NO_NODE_JS && 'object' == typeof process && process.versions && process.versions.node;
	h ? (i = global) : s && (i = self);
	var f = !i.JS_MD5_NO_COMMON_JS && 'object' == typeof module && module.exports,
		o = 'function' == typeof define && define.amd,
		a = !i.JS_MD5_NO_ARRAY_BUFFER && 'undefined' != typeof ArrayBuffer,
		n = '0123456789abcdef'.split(''),
		u = [ 128, 32768, 8388608, -2147483648 ],
		y = [ 0, 8, 16, 24 ],
		c = [ 'hex', 'array', 'digest', 'buffer', 'arrayBuffer', 'base64' ],
		p = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(''),
		d = [],
		l;
	if (a) {
		var A = new ArrayBuffer(68);
		(l = new Uint8Array(A)), (d = new Uint32Array(A));
	}
	(!i.JS_MD5_NO_NODE_JS && Array.isArray) ||
		(Array.isArray = function(t) {
			return '[object Array]' === Object.prototype.toString.call(t);
		}),
		!a ||
			(!i.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
			(ArrayBuffer.isView = function(t) {
				return 'object' == typeof t && t.buffer && t.buffer.constructor === ArrayBuffer;
			});
	var b = function(r) {
			return function(e) {
				return new t(!0).update(e)[r]();
			};
		},
		v = function() {
			var r = b('hex');
			h && (r = w(r)),
				(r.create = function() {
					return new t();
				}),
				(r.update = function(t) {
					return r.create().update(t);
				});
			for (var e = 0; e < c.length; ++e) {
				var i = c[e];
				r[i] = b(i);
			}
			return r;
		},
		w = function(t) {
			var e = eval("require('crypto')"),
				i = eval("require('buffer').Buffer"),
				s = function(s) {
					if ('string' == typeof s) return e.createHash('md5').update(s, 'utf8').digest('hex');
					if (null === s || void 0 === s) throw r;
					return (
						s.constructor === ArrayBuffer && (s = new Uint8Array(s)),
						Array.isArray(s) || ArrayBuffer.isView(s) || s.constructor === i
							? e.createHash('md5').update(new i(s)).digest('hex')
							: t(s)
					);
				};
			return s;
		};
	(t.prototype.update = function(t) {
		if (!this.finalized) {
			var e,
				i = typeof t;
			if ('string' !== i) {
				if ('object' !== i) throw r;
				if (null === t) throw r;
				if (a && t.constructor === ArrayBuffer) t = new Uint8Array(t);
				else if (!(Array.isArray(t) || (a && ArrayBuffer.isView(t)))) throw r;
				e = !0;
			}
			for (var s, h, f = 0, o = t.length, n = this.blocks, u = this.buffer8; f < o; ) {
				if (
					(this.hashed &&
						((this.hashed = !1),
						(n[0] = n[16]),
						(n[16] = n[1] = n[2] = n[3] = n[4] = n[5] = n[6] = n[7] = n[8] = n[9] = n[10] = n[11] = n[12] = n[13] = n[14] = n[15] = 0)),
					e)
				)
					if (a) for (h = this.start; f < o && h < 64; ++f) u[h++] = t[f];
					else for (h = this.start; f < o && h < 64; ++f) n[h >> 2] |= t[f] << y[3 & h++];
				else if (a)
					for (h = this.start; f < o && h < 64; ++f)
						(s = t.charCodeAt(f)) < 128
							? (u[h++] = s)
							: s < 2048
								? ((u[h++] = 192 | (s >> 6)), (u[h++] = 128 | (63 & s)))
								: s < 55296 || s >= 57344
									? ((u[h++] = 224 | (s >> 12)),
										(u[h++] = 128 | ((s >> 6) & 63)),
										(u[h++] = 128 | (63 & s)))
									: ((s = 65536 + (((1023 & s) << 10) | (1023 & t.charCodeAt(++f)))),
										(u[h++] = 240 | (s >> 18)),
										(u[h++] = 128 | ((s >> 12) & 63)),
										(u[h++] = 128 | ((s >> 6) & 63)),
										(u[h++] = 128 | (63 & s)));
				else
					for (h = this.start; f < o && h < 64; ++f)
						(s = t.charCodeAt(f)) < 128
							? (n[h >> 2] |= s << y[3 & h++])
							: s < 2048
								? ((n[h >> 2] |= (192 | (s >> 6)) << y[3 & h++]),
									(n[h >> 2] |= (128 | (63 & s)) << y[3 & h++]))
								: s < 55296 || s >= 57344
									? ((n[h >> 2] |= (224 | (s >> 12)) << y[3 & h++]),
										(n[h >> 2] |= (128 | ((s >> 6) & 63)) << y[3 & h++]),
										(n[h >> 2] |= (128 | (63 & s)) << y[3 & h++]))
									: ((s = 65536 + (((1023 & s) << 10) | (1023 & t.charCodeAt(++f)))),
										(n[h >> 2] |= (240 | (s >> 18)) << y[3 & h++]),
										(n[h >> 2] |= (128 | ((s >> 12) & 63)) << y[3 & h++]),
										(n[h >> 2] |= (128 | ((s >> 6) & 63)) << y[3 & h++]),
										(n[h >> 2] |= (128 | (63 & s)) << y[3 & h++]));
				(this.lastByteIndex = h),
					(this.bytes += h - this.start),
					h >= 64 ? ((this.start = h - 64), this.hash(), (this.hashed = !0)) : (this.start = h);
			}
			return (
				this.bytes > 4294967295 &&
					((this.hBytes += (this.bytes / 4294967296) << 0), (this.bytes = this.bytes % 4294967296)),
				this
			);
		}
	}),
		(t.prototype.finalize = function() {
			if (!this.finalized) {
				this.finalized = !0;
				var t = this.blocks,
					r = this.lastByteIndex;
				(t[r >> 2] |= u[3 & r]),
					r >= 56 &&
						(this.hashed || this.hash(),
						(t[0] = t[16]),
						(t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0)),
					(t[14] = this.bytes << 3),
					(t[15] = (this.hBytes << 3) | (this.bytes >>> 29)),
					this.hash();
			}
		}),
		(t.prototype.hash = function() {
			var t,
				r,
				e,
				i,
				s,
				h,
				f = this.blocks;
			this.first
				? (r =
						((((r =
							((t = ((((t = f[0] - 680876937) << 7) | (t >>> 25)) - 271733879) << 0) ^
								((e =
									((((e =
										(-271733879 ^
											((i =
												((((i = (-1732584194 ^ (2004318071 & t)) + f[1] - 117830708) << 12) |
													(i >>> 20)) +
													t) <<
												0) &
												(-271733879 ^ t))) +
										f[2] -
										1126478375) <<
										17) |
										(e >>> 15)) +
										i) <<
									0) &
									(i ^ t))) +
							f[3] -
							1316259209) <<
							22) |
							(r >>> 10)) +
							e) <<
						0)
				: ((t = this.h0),
					(r = this.h1),
					(e = this.h2),
					(r =
						((((r +=
							((t =
								((((t += ((i = this.h3) ^ (r & (e ^ i))) + f[0] - 680876936) << 7) | (t >>> 25)) + r) <<
								0) ^
								((e =
									((((e +=
										(r ^
											((i =
												((((i += (e ^ (t & (r ^ e))) + f[1] - 389564586) << 12) | (i >>> 20)) +
													t) <<
												0) &
												(t ^ r))) +
										f[2] +
										606105819) <<
										17) |
										(e >>> 15)) +
										i) <<
									0) &
									(i ^ t))) +
							f[3] -
							1044525330) <<
							22) |
							(r >>> 10)) +
							e) <<
						0)),
				(r =
					((((r +=
						((t = ((((t += (i ^ (r & (e ^ i))) + f[4] - 176418897) << 7) | (t >>> 25)) + r) << 0) ^
							((e =
								((((e +=
									(r ^
										((i =
											((((i += (e ^ (t & (r ^ e))) + f[5] + 1200080426) << 12) | (i >>> 20)) +
												t) <<
											0) &
											(t ^ r))) +
									f[6] -
									1473231341) <<
									17) |
									(e >>> 15)) +
									i) <<
								0) &
								(i ^ t))) +
						f[7] -
						45705983) <<
						22) |
						(r >>> 10)) +
						e) <<
					0),
				(r =
					((((r +=
						((t = ((((t += (i ^ (r & (e ^ i))) + f[8] + 1770035416) << 7) | (t >>> 25)) + r) << 0) ^
							((e =
								((((e +=
									(r ^
										((i =
											((((i += (e ^ (t & (r ^ e))) + f[9] - 1958414417) << 12) | (i >>> 20)) +
												t) <<
											0) &
											(t ^ r))) +
									f[10] -
									42063) <<
									17) |
									(e >>> 15)) +
									i) <<
								0) &
								(i ^ t))) +
						f[11] -
						1990404162) <<
						22) |
						(r >>> 10)) +
						e) <<
					0),
				(r =
					((((r +=
						((t = ((((t += (i ^ (r & (e ^ i))) + f[12] + 1804603682) << 7) | (t >>> 25)) + r) << 0) ^
							((e =
								((((e +=
									(r ^
										((i =
											((((i += (e ^ (t & (r ^ e))) + f[13] - 40341101) << 12) | (i >>> 20)) +
												t) <<
											0) &
											(t ^ r))) +
									f[14] -
									1502002290) <<
									17) |
									(e >>> 15)) +
									i) <<
								0) &
								(i ^ t))) +
						f[15] +
						1236535329) <<
						22) |
						(r >>> 10)) +
						e) <<
					0),
				(r =
					((((r +=
						((i =
							((((i +=
								(r ^
									(e &
										((t =
											((((t += (e ^ (i & (r ^ e))) + f[1] - 165796510) << 5) | (t >>> 27)) + r) <<
											0) ^
											r))) +
								f[6] -
								1069501632) <<
								9) |
								(i >>> 23)) +
								t) <<
							0) ^
							(t &
								((e =
									((((e += (t ^ (r & (i ^ t))) + f[11] + 643717713) << 14) | (e >>> 18)) + i) << 0) ^
									i))) +
						f[0] -
						373897302) <<
						20) |
						(r >>> 12)) +
						e) <<
					0),
				(r =
					((((r +=
						((i =
							((((i +=
								(r ^
									(e &
										((t =
											((((t += (e ^ (i & (r ^ e))) + f[5] - 701558691) << 5) | (t >>> 27)) + r) <<
											0) ^
											r))) +
								f[10] +
								38016083) <<
								9) |
								(i >>> 23)) +
								t) <<
							0) ^
							(t &
								((e =
									((((e += (t ^ (r & (i ^ t))) + f[15] - 660478335) << 14) | (e >>> 18)) + i) << 0) ^
									i))) +
						f[4] -
						405537848) <<
						20) |
						(r >>> 12)) +
						e) <<
					0),
				(r =
					((((r +=
						((i =
							((((i +=
								(r ^
									(e &
										((t =
											((((t += (e ^ (i & (r ^ e))) + f[9] + 568446438) << 5) | (t >>> 27)) + r) <<
											0) ^
											r))) +
								f[14] -
								1019803690) <<
								9) |
								(i >>> 23)) +
								t) <<
							0) ^
							(t &
								((e = ((((e += (t ^ (r & (i ^ t))) + f[3] - 187363961) << 14) | (e >>> 18)) + i) << 0) ^
									i))) +
						f[8] +
						1163531501) <<
						20) |
						(r >>> 12)) +
						e) <<
					0),
				(r =
					((((r +=
						((i =
							((((i +=
								(r ^
									(e &
										((t =
											((((t += (e ^ (i & (r ^ e))) + f[13] - 1444681467) << 5) | (t >>> 27)) +
												r) <<
											0) ^
											r))) +
								f[2] -
								51403784) <<
								9) |
								(i >>> 23)) +
								t) <<
							0) ^
							(t &
								((e =
									((((e += (t ^ (r & (i ^ t))) + f[7] + 1735328473) << 14) | (e >>> 18)) + i) << 0) ^
									i))) +
						f[12] -
						1926607734) <<
						20) |
						(r >>> 12)) +
						e) <<
					0),
				(r =
					((((r +=
						((h =
							(i =
								((((i +=
									((s = r ^ e) ^
										(t = ((((t += (s ^ i) + f[5] - 378558) << 4) | (t >>> 28)) + r) << 0)) +
									f[8] -
									2022574463) <<
									11) |
									(i >>> 21)) +
									t) <<
								0) ^ t) ^
							(e = ((((e += (h ^ r) + f[11] + 1839030562) << 16) | (e >>> 16)) + i) << 0)) +
						f[14] -
						35309556) <<
						23) |
						(r >>> 9)) +
						e) <<
					0),
				(r =
					((((r +=
						((h =
							(i =
								((((i +=
									((s = r ^ e) ^
										(t = ((((t += (s ^ i) + f[1] - 1530992060) << 4) | (t >>> 28)) + r) << 0)) +
									f[4] +
									1272893353) <<
									11) |
									(i >>> 21)) +
									t) <<
								0) ^ t) ^
							(e = ((((e += (h ^ r) + f[7] - 155497632) << 16) | (e >>> 16)) + i) << 0)) +
						f[10] -
						1094730640) <<
						23) |
						(r >>> 9)) +
						e) <<
					0),
				(r =
					((((r +=
						((h =
							(i =
								((((i +=
									((s = r ^ e) ^
										(t = ((((t += (s ^ i) + f[13] + 681279174) << 4) | (t >>> 28)) + r) << 0)) +
									f[0] -
									358537222) <<
									11) |
									(i >>> 21)) +
									t) <<
								0) ^ t) ^
							(e = ((((e += (h ^ r) + f[3] - 722521979) << 16) | (e >>> 16)) + i) << 0)) +
						f[6] +
						76029189) <<
						23) |
						(r >>> 9)) +
						e) <<
					0),
				(r =
					((((r +=
						((h =
							(i =
								((((i +=
									((s = r ^ e) ^
										(t = ((((t += (s ^ i) + f[9] - 640364487) << 4) | (t >>> 28)) + r) << 0)) +
									f[12] -
									421815835) <<
									11) |
									(i >>> 21)) +
									t) <<
								0) ^ t) ^
							(e = ((((e += (h ^ r) + f[15] + 530742520) << 16) | (e >>> 16)) + i) << 0)) +
						f[2] -
						995338651) <<
						23) |
						(r >>> 9)) +
						e) <<
					0),
				(r =
					((((r +=
						((i =
							((((i +=
								(r ^
									((t = ((((t += (e ^ (r | ~i)) + f[0] - 198630844) << 6) | (t >>> 26)) + r) << 0) |
										~e)) +
								f[7] +
								1126891415) <<
								10) |
								(i >>> 22)) +
								t) <<
							0) ^
							((e = ((((e += (t ^ (i | ~r)) + f[14] - 1416354905) << 15) | (e >>> 17)) + i) << 0) | ~t)) +
						f[5] -
						57434055) <<
						21) |
						(r >>> 11)) +
						e) <<
					0),
				(r =
					((((r +=
						((i =
							((((i +=
								(r ^
									((t = ((((t += (e ^ (r | ~i)) + f[12] + 1700485571) << 6) | (t >>> 26)) + r) << 0) |
										~e)) +
								f[3] -
								1894986606) <<
								10) |
								(i >>> 22)) +
								t) <<
							0) ^
							((e = ((((e += (t ^ (i | ~r)) + f[10] - 1051523) << 15) | (e >>> 17)) + i) << 0) | ~t)) +
						f[1] -
						2054922799) <<
						21) |
						(r >>> 11)) +
						e) <<
					0),
				(r =
					((((r +=
						((i =
							((((i +=
								(r ^
									((t = ((((t += (e ^ (r | ~i)) + f[8] + 1873313359) << 6) | (t >>> 26)) + r) << 0) |
										~e)) +
								f[15] -
								30611744) <<
								10) |
								(i >>> 22)) +
								t) <<
							0) ^
							((e = ((((e += (t ^ (i | ~r)) + f[6] - 1560198380) << 15) | (e >>> 17)) + i) << 0) | ~t)) +
						f[13] +
						1309151649) <<
						21) |
						(r >>> 11)) +
						e) <<
					0),
				(r =
					((((r +=
						((i =
							((((i +=
								(r ^
									((t = ((((t += (e ^ (r | ~i)) + f[4] - 145523070) << 6) | (t >>> 26)) + r) << 0) |
										~e)) +
								f[11] -
								1120210379) <<
								10) |
								(i >>> 22)) +
								t) <<
							0) ^
							((e = ((((e += (t ^ (i | ~r)) + f[2] + 718787259) << 15) | (e >>> 17)) + i) << 0) | ~t)) +
						f[9] -
						343485551) <<
						21) |
						(r >>> 11)) +
						e) <<
					0),
				this.first
					? ((this.h0 = (t + 1732584193) << 0),
						(this.h1 = (r - 271733879) << 0),
						(this.h2 = (e - 1732584194) << 0),
						(this.h3 = (i + 271733878) << 0),
						(this.first = !1))
					: ((this.h0 = (this.h0 + t) << 0),
						(this.h1 = (this.h1 + r) << 0),
						(this.h2 = (this.h2 + e) << 0),
						(this.h3 = (this.h3 + i) << 0));
		}),
		(t.prototype.hex = function() {
			this.finalize();
			var t = this.h0,
				r = this.h1,
				e = this.h2,
				i = this.h3;
			return (
				n[(t >> 4) & 15] +
				n[15 & t] +
				n[(t >> 12) & 15] +
				n[(t >> 8) & 15] +
				n[(t >> 20) & 15] +
				n[(t >> 16) & 15] +
				n[(t >> 28) & 15] +
				n[(t >> 24) & 15] +
				n[(r >> 4) & 15] +
				n[15 & r] +
				n[(r >> 12) & 15] +
				n[(r >> 8) & 15] +
				n[(r >> 20) & 15] +
				n[(r >> 16) & 15] +
				n[(r >> 28) & 15] +
				n[(r >> 24) & 15] +
				n[(e >> 4) & 15] +
				n[15 & e] +
				n[(e >> 12) & 15] +
				n[(e >> 8) & 15] +
				n[(e >> 20) & 15] +
				n[(e >> 16) & 15] +
				n[(e >> 28) & 15] +
				n[(e >> 24) & 15] +
				n[(i >> 4) & 15] +
				n[15 & i] +
				n[(i >> 12) & 15] +
				n[(i >> 8) & 15] +
				n[(i >> 20) & 15] +
				n[(i >> 16) & 15] +
				n[(i >> 28) & 15] +
				n[(i >> 24) & 15]
			);
		}),
		(t.prototype.toString = t.prototype.hex),
		(t.prototype.digest = function() {
			this.finalize();
			var t = this.h0,
				r = this.h1,
				e = this.h2,
				i = this.h3;
			return [
				255 & t,
				(t >> 8) & 255,
				(t >> 16) & 255,
				(t >> 24) & 255,
				255 & r,
				(r >> 8) & 255,
				(r >> 16) & 255,
				(r >> 24) & 255,
				255 & e,
				(e >> 8) & 255,
				(e >> 16) & 255,
				(e >> 24) & 255,
				255 & i,
				(i >> 8) & 255,
				(i >> 16) & 255,
				(i >> 24) & 255
			];
		}),
		(t.prototype.array = t.prototype.digest),
		(t.prototype.arrayBuffer = function() {
			this.finalize();
			var t = new ArrayBuffer(16),
				r = new Uint32Array(t);
			return (r[0] = this.h0), (r[1] = this.h1), (r[2] = this.h2), (r[3] = this.h3), t;
		}),
		(t.prototype.buffer = t.prototype.arrayBuffer),
		(t.prototype.base64 = function() {
			for (var t, r, e, i = '', s = this.array(), h = 0; h < 15; )
				(t = s[h++]),
					(r = s[h++]),
					(e = s[h++]),
					(i += p[t >>> 2] + p[63 & ((t << 4) | (r >>> 4))] + p[63 & ((r << 2) | (e >>> 6))] + p[63 & e]);
			return (t = s[h]), (i += p[t >>> 2] + p[(t << 4) & 63] + '==');
		});
	var _ = v();
	f
		? (module.exports = _)
		: ((i.md5 = _),
			o &&
				define(function() {
					return _;
				}));
})();

/*!
 * WOW wow.js - v1.3.0 - 2016-10-04
 * https://wowjs.uk
 * Copyright (c) 2016 Thomas Grainger; Licensed MIT
 */

!(function(a, b) {
	if ('function' == typeof define && define.amd) define([ 'module', 'exports' ], b);
	else if ('undefined' != typeof exports) b(module, exports);
	else {
		var c = { exports: {} };
		b(c, c.exports), (a.WOW = c.exports);
	}
})(this, function(a, b) {
	'use strict';
	function c(a, b) {
		if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
	}
	function d(a, b) {
		return b.indexOf(a) >= 0;
	}
	function e(a, b) {
		for (var c in b)
			if (null == a[c]) {
				var d = b[c];
				a[c] = d;
			}
		return a;
	}
	function f(a) {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
	}
	function g(a) {
		var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
			c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
			d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
			e = void 0;
		return (
			null != document.createEvent
				? ((e = document.createEvent('CustomEvent')), e.initCustomEvent(a, b, c, d))
				: null != document.createEventObject
					? ((e = document.createEventObject()), (e.eventType = a))
					: (e.eventName = a),
			e
		);
	}
	function h(a, b) {
		null != a.dispatchEvent
			? a.dispatchEvent(b)
			: b in (null != a) ? a[b]() : 'on' + b in (null != a) && a['on' + b]();
	}
	function i(a, b, c) {
		null != a.addEventListener
			? a.addEventListener(b, c, !1)
			: null != a.attachEvent ? a.attachEvent('on' + b, c) : (a[b] = c);
	}
	function j(a, b, c) {
		null != a.removeEventListener
			? a.removeEventListener(b, c, !1)
			: null != a.detachEvent ? a.detachEvent('on' + b, c) : delete a[b];
	}
	function k() {
		return 'innerHeight' in window ? window.innerHeight : document.documentElement.clientHeight;
	}
	Object.defineProperty(b, '__esModule', { value: !0 });
	var l,
		m,
		n = (function() {
			function a(a, b) {
				for (var c = 0; c < b.length; c++) {
					var d = b[c];
					(d.enumerable = d.enumerable || !1),
						(d.configurable = !0),
						'value' in d && (d.writable = !0),
						Object.defineProperty(a, d.key, d);
				}
			}
			return function(b, c, d) {
				return c && a(b.prototype, c), d && a(b, d), b;
			};
		})(),
		o =
			window.WeakMap ||
			window.MozWeakMap ||
			(function() {
				function a() {
					c(this, a), (this.keys = []), (this.values = []);
				}
				return (
					n(a, [
						{
							key: 'get',
							value: function(a) {
								for (var b = 0; b < this.keys.length; b++) {
									var c = this.keys[b];
									if (c === a) return this.values[b];
								}
							}
						},
						{
							key: 'set',
							value: function(a, b) {
								for (var c = 0; c < this.keys.length; c++) {
									var d = this.keys[c];
									if (d === a) return (this.values[c] = b), this;
								}
								return this.keys.push(a), this.values.push(b), this;
							}
						}
					]),
					a
				);
			})(),
		p =
			window.MutationObserver ||
			window.WebkitMutationObserver ||
			window.MozMutationObserver ||
			((m = l = (function() {
				function a() {
					c(this, a),
						'undefined' != typeof console &&
							null !== console &&
							(console.warn('MutationObserver is not supported by your browser.'),
							console.warn(
								'WOW.js cannot detect dom mutations, please call .sync() after loading new content.'
							));
				}
				return n(a, [ { key: 'observe', value: function() {} } ]), a;
			})()),
			(l.notSupported = !0),
			m),
		q =
			window.getComputedStyle ||
			function(a) {
				var b = /(\-([a-z]){1})/g;
				return {
					getPropertyValue: function(c) {
						'float' === c && (c = 'styleFloat'),
							b.test(c) &&
								c.replace(b, function(a, b) {
									return b.toUpperCase();
								});
						var d = a.currentStyle;
						return (null != d ? d[c] : void 0) || null;
					}
				};
			},
		r = (function() {
			function a() {
				var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
				c(this, a),
					(this.defaults = {
						boxClass: 'wow',
						animateClass: 'animated',
						offset: 0,
						mobile: !0,
						live: !0,
						callback: null,
						scrollContainer: null,
						resetAnimation: !0
					}),
					(this.animate = (function() {
						return 'requestAnimationFrame' in window
							? function(a) {
									return window.requestAnimationFrame(a);
								}
							: function(a) {
									return a();
								};
					})()),
					(this.vendors = [ 'moz', 'webkit' ]),
					(this.start = this.start.bind(this)),
					(this.resetAnimation = this.resetAnimation.bind(this)),
					(this.scrollHandler = this.scrollHandler.bind(this)),
					(this.scrollCallback = this.scrollCallback.bind(this)),
					(this.scrolled = !0),
					(this.config = e(b, this.defaults)),
					null != b.scrollContainer &&
						(this.config.scrollContainer = document.querySelector(b.scrollContainer)),
					(this.animationNameCache = new o()),
					(this.wowEvent = g(this.config.boxClass));
			}
			return (
				n(a, [
					{
						key: 'init',
						value: function() {
							(this.element = window.document.documentElement),
								d(document.readyState, [ 'interactive', 'complete' ])
									? this.start()
									: i(document, 'DOMContentLoaded', this.start),
								(this.finished = []);
						}
					},
					{
						key: 'start',
						value: function() {
							var a = this;
							if (
								((this.stopped = !1),
								(this.boxes = [].slice.call(this.element.querySelectorAll('.' + this.config.boxClass))),
								(this.all = this.boxes.slice(0)),
								this.boxes.length)
							)
								if (this.disabled()) this.resetStyle();
								else
									for (var b = 0; b < this.boxes.length; b++) {
										var c = this.boxes[b];
										this.applyStyle(c, !0);
									}
							if (
								(this.disabled() ||
									(i(this.config.scrollContainer || window, 'scroll', this.scrollHandler),
									i(window, 'resize', this.scrollHandler),
									(this.interval = setInterval(this.scrollCallback, 50))),
								this.config.live)
							) {
								var d = new p(function(b) {
									for (var c = 0; c < b.length; c++)
										for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
											var f = d.addedNodes[e];
											a.doSync(f);
										}
								});
								d.observe(document.body, { childList: !0, subtree: !0 });
							}
						}
					},
					{
						key: 'stop',
						value: function() {
							(this.stopped = !0),
								j(this.config.scrollContainer || window, 'scroll', this.scrollHandler),
								j(window, 'resize', this.scrollHandler),
								null != this.interval && clearInterval(this.interval);
						}
					},
					{
						key: 'sync',
						value: function() {
							p.notSupported && this.doSync(this.element);
						}
					},
					{
						key: 'doSync',
						value: function(a) {
							if ((('undefined' != typeof a && null !== a) || (a = this.element), 1 === a.nodeType)) {
								a = a.parentNode || a;
								for (var b = a.querySelectorAll('.' + this.config.boxClass), c = 0; c < b.length; c++) {
									var e = b[c];
									d(e, this.all) ||
										(this.boxes.push(e),
										this.all.push(e),
										this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
										(this.scrolled = !0));
								}
							}
						}
					},
					{
						key: 'show',
						value: function(a) {
							return (
								this.applyStyle(a),
								(a.className = a.className + ' ' + this.config.animateClass),
								null != this.config.callback && this.config.callback(a),
								h(a, this.wowEvent),
								this.config.resetAnimation &&
									(i(a, 'animationend', this.resetAnimation),
									i(a, 'oanimationend', this.resetAnimation),
									i(a, 'webkitAnimationEnd', this.resetAnimation),
									i(a, 'MSAnimationEnd', this.resetAnimation)),
								a
							);
						}
					},
					{
						key: 'applyStyle',
						value: function(a, b) {
							var c = this,
								d = a.getAttribute('data-wow-duration'),
								e = a.getAttribute('data-wow-delay'),
								f = a.getAttribute('data-wow-iteration');
							return this.animate(function() {
								return c.customStyle(a, b, d, e, f);
							});
						}
					},
					{
						key: 'resetStyle',
						value: function() {
							for (var a = 0; a < this.boxes.length; a++) {
								var b = this.boxes[a];
								b.style.visibility = 'visible';
							}
						}
					},
					{
						key: 'resetAnimation',
						value: function(a) {
							if (a.type.toLowerCase().indexOf('animationend') >= 0) {
								var b = a.target || a.srcElement;
								b.className = b.className.replace(this.config.animateClass, '').trim();
							}
						}
					},
					{
						key: 'customStyle',
						value: function(a, b, c, d, e) {
							return (
								b && this.cacheAnimationName(a),
								(a.style.visibility = b ? 'hidden' : 'visible'),
								c && this.vendorSet(a.style, { animationDuration: c }),
								d && this.vendorSet(a.style, { animationDelay: d }),
								e && this.vendorSet(a.style, { animationIterationCount: e }),
								this.vendorSet(a.style, { animationName: b ? 'none' : this.cachedAnimationName(a) }),
								a
							);
						}
					},
					{
						key: 'vendorSet',
						value: function(a, b) {
							for (var c in b)
								if (b.hasOwnProperty(c)) {
									var d = b[c];
									a['' + c] = d;
									for (var e = 0; e < this.vendors.length; e++) {
										var f = this.vendors[e];
										a['' + f + c.charAt(0).toUpperCase() + c.substr(1)] = d;
									}
								}
						}
					},
					{
						key: 'vendorCSS',
						value: function(a, b) {
							for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
								var f = this.vendors[e];
								d = d || c.getPropertyCSSValue('-' + f + '-' + b);
							}
							return d;
						}
					},
					{
						key: 'animationName',
						value: function(a) {
							var b = void 0;
							try {
								b = this.vendorCSS(a, 'animation-name').cssText;
							} catch (c) {
								b = q(a).getPropertyValue('animation-name');
							}
							return 'none' === b ? '' : b;
						}
					},
					{
						key: 'cacheAnimationName',
						value: function(a) {
							return this.animationNameCache.set(a, this.animationName(a));
						}
					},
					{
						key: 'cachedAnimationName',
						value: function(a) {
							return this.animationNameCache.get(a);
						}
					},
					{
						key: 'scrollHandler',
						value: function() {
							this.scrolled = !0;
						}
					},
					{
						key: 'scrollCallback',
						value: function() {
							if (this.scrolled) {
								this.scrolled = !1;
								for (var a = [], b = 0; b < this.boxes.length; b++) {
									var c = this.boxes[b];
									if (c) {
										if (this.isVisible(c)) {
											this.show(c);
											continue;
										}
										a.push(c);
									}
								}
								(this.boxes = a), this.boxes.length || this.config.live || this.stop();
							}
						}
					},
					{
						key: 'offsetTop',
						value: function(a) {
							for (; void 0 === a.offsetTop; ) a = a.parentNode;
							for (var b = a.offsetTop; a.offsetParent; ) (a = a.offsetParent), (b += a.offsetTop);
							return b;
						}
					},
					{
						key: 'isVisible',
						value: function(a) {
							var b = a.getAttribute('data-wow-offset') || this.config.offset,
								c =
									(this.config.scrollContainer && this.config.scrollContainer.scrollTop) ||
									window.pageYOffset,
								d = c + Math.min(this.element.clientHeight, k()) - b,
								e = this.offsetTop(a),
								f = e + a.clientHeight;
							return d >= e && f >= c;
						}
					},
					{
						key: 'disabled',
						value: function() {
							return !this.config.mobile && f(navigator.userAgent);
						}
					}
				]),
				a
			);
		})();
	(b['default'] = r), (a.exports = b['default']);
});

/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

!(function(e) {
	var n = !1;
	if (
		('function' == typeof define && define.amd && (define(e), (n = !0)),
		'object' == typeof exports && ((module.exports = e()), (n = !0)),
		!n)
	) {
		var o = window.Cookies,
			t = (window.Cookies = e());
		t.noConflict = function() {
			return (window.Cookies = o), t;
		};
	}
})(function() {
	function e() {
		for (var e = 0, n = {}; e < arguments.length; e++) {
			var o = arguments[e];
			for (var t in o) n[t] = o[t];
		}
		return n;
	}
	return (function n(o) {
		function t(n, r, i) {
			var c;
			if ('undefined' != typeof document) {
				if (arguments.length > 1) {
					if ('number' == typeof (i = e({ path: '/' }, t.defaults, i)).expires) {
						var a = new Date();
						a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), (i.expires = a);
					}
					i.expires = i.expires ? i.expires.toUTCString() : '';
					try {
						(c = JSON.stringify(r)), /^[\{\[]/.test(c) && (r = c);
					} catch (e) {}
					(r = o.write
						? o.write(r, n)
						: encodeURIComponent(String(r)).replace(
								/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
								decodeURIComponent
							)),
						(n = (n = (n = encodeURIComponent(String(n))).replace(
							/%(23|24|26|2B|5E|60|7C)/g,
							decodeURIComponent
						)).replace(/[\(\)]/g, escape));
					var s = '';
					for (var f in i) i[f] && ((s += '; ' + f), !0 !== i[f] && (s += '=' + i[f]));
					return (document.cookie = n + '=' + r + s);
				}
				n || (c = {});
				for (
					var p = document.cookie ? document.cookie.split('; ') : [], d = /(%[0-9A-Z]{2})+/g, u = 0;
					u < p.length;
					u++
				) {
					var l = p[u].split('='),
						C = l.slice(1).join('=');
					this.json || '"' !== C.charAt(0) || (C = C.slice(1, -1));
					try {
						var g = l[0].replace(d, decodeURIComponent);
						if (((C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent)), this.json))
							try {
								C = JSON.parse(C);
							} catch (e) {}
						if (n === g) {
							c = C;
							break;
						}
						n || (c[g] = C);
					} catch (e) {}
				}
				return c;
			}
		}
		return (
			(t.set = t),
			(t.get = function(e) {
				return t.call(t, e);
			}),
			(t.getJSON = function() {
				return t.apply({ json: !0 }, [].slice.call(arguments));
			}),
			(t.defaults = {}),
			(t.remove = function(n, o) {
				t(n, '', e(o, { expires: -1 }));
			}),
			(t.withConverter = n),
			t
		);
	})(function() {});
});

/*!
 * clipboard.js v2.0.0
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */

!(function(t, e) {
	'object' == typeof exports && 'object' == typeof module
		? (module.exports = e())
		: 'function' == typeof define && define.amd
			? define([], e)
			: 'object' == typeof exports ? (exports.ClipboardJS = e()) : (t.ClipboardJS = e());
})(this, function() {
	return (function(t) {
		function e(o) {
			if (n[o]) return n[o].exports;
			var r = (n[o] = { i: o, l: !1, exports: {} });
			return t[o].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
		}
		var n = {};
		return (
			(e.m = t),
			(e.c = n),
			(e.i = function(t) {
				return t;
			}),
			(e.d = function(t, n, o) {
				e.o(t, n) || Object.defineProperty(t, n, { configurable: !1, enumerable: !0, get: o });
			}),
			(e.n = function(t) {
				var n =
					t && t.__esModule
						? function() {
								return t.default;
							}
						: function() {
								return t;
							};
				return e.d(n, 'a', n), n;
			}),
			(e.o = function(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e);
			}),
			(e.p = ''),
			e((e.s = 3))
		);
	})([
		function(t, e, n) {
			var o, r, i;
			!(function(a, c) {
				(r = [ t, n(7) ]),
					(o = c),
					void 0 !== (i = 'function' == typeof o ? o.apply(e, r) : o) && (t.exports = i);
			})(0, function(t, e) {
				'use strict';
				function n(t, e) {
					if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
				}
				var o = (function(t) {
						return t && t.__esModule ? t : { default: t };
					})(e),
					r =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function(t) {
									return typeof t;
								}
							: function(t) {
									return t &&
									'function' == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								},
					i = (function() {
						function t(t, e) {
							for (var n = 0; n < e.length; n++) {
								var o = e[n];
								(o.enumerable = o.enumerable || !1),
									(o.configurable = !0),
									'value' in o && (o.writable = !0),
									Object.defineProperty(t, o.key, o);
							}
						}
						return function(e, n, o) {
							return n && t(e.prototype, n), o && t(e, o), e;
						};
					})(),
					a = (function() {
						function t(e) {
							n(this, t), this.resolveOptions(e), this.initSelection();
						}
						return (
							i(t, [
								{
									key: 'resolveOptions',
									value: function() {
										var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
										(this.action = t.action),
											(this.container = t.container),
											(this.emitter = t.emitter),
											(this.target = t.target),
											(this.text = t.text),
											(this.trigger = t.trigger),
											(this.selectedText = '');
									}
								},
								{
									key: 'initSelection',
									value: function() {
										this.text ? this.selectFake() : this.target && this.selectTarget();
									}
								},
								{
									key: 'selectFake',
									value: function() {
										var t = this,
											e = 'rtl' == document.documentElement.getAttribute('dir');
										this.removeFake(),
											(this.fakeHandlerCallback = function() {
												return t.removeFake();
											}),
											(this.fakeHandler =
												this.container.addEventListener('click', this.fakeHandlerCallback) ||
												!0),
											(this.fakeElem = document.createElement('textarea')),
											(this.fakeElem.style.fontSize = '12pt'),
											(this.fakeElem.style.border = '0'),
											(this.fakeElem.style.padding = '0'),
											(this.fakeElem.style.margin = '0'),
											(this.fakeElem.style.position = 'absolute'),
											(this.fakeElem.style[e ? 'right' : 'left'] = '-9999px');
										var n = window.pageYOffset || document.documentElement.scrollTop;
										(this.fakeElem.style.top = n + 'px'),
											this.fakeElem.setAttribute('readonly', ''),
											(this.fakeElem.value = this.text),
											this.container.appendChild(this.fakeElem),
											(this.selectedText = (0, o.default)(this.fakeElem)),
											this.copyText();
									}
								},
								{
									key: 'removeFake',
									value: function() {
										this.fakeHandler &&
											(this.container.removeEventListener('click', this.fakeHandlerCallback),
											(this.fakeHandler = null),
											(this.fakeHandlerCallback = null)),
											this.fakeElem &&
												(this.container.removeChild(this.fakeElem), (this.fakeElem = null));
									}
								},
								{
									key: 'selectTarget',
									value: function() {
										(this.selectedText = (0, o.default)(this.target)), this.copyText();
									}
								},
								{
									key: 'copyText',
									value: function() {
										var t = void 0;
										try {
											t = document.execCommand(this.action);
										} catch (e) {
											t = !1;
										}
										this.handleResult(t);
									}
								},
								{
									key: 'handleResult',
									value: function(t) {
										this.emitter.emit(t ? 'success' : 'error', {
											action: this.action,
											text: this.selectedText,
											trigger: this.trigger,
											clearSelection: this.clearSelection.bind(this)
										});
									}
								},
								{
									key: 'clearSelection',
									value: function() {
										this.trigger && this.trigger.focus(), window.getSelection().removeAllRanges();
									}
								},
								{
									key: 'destroy',
									value: function() {
										this.removeFake();
									}
								},
								{
									key: 'action',
									set: function() {
										var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'copy';
										if (((this._action = t), 'copy' !== this._action && 'cut' !== this._action))
											throw new Error('Invalid "action" value, use either "copy" or "cut"');
									},
									get: function() {
										return this._action;
									}
								},
								{
									key: 'target',
									set: function(t) {
										if (void 0 !== t) {
											if (
												!t ||
												'object' !== (void 0 === t ? 'undefined' : r(t)) ||
												1 !== t.nodeType
											)
												throw new Error('Invalid "target" value, use a valid Element');
											if ('copy' === this.action && t.hasAttribute('disabled'))
												throw new Error(
													'Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute'
												);
											if (
												'cut' === this.action &&
												(t.hasAttribute('readonly') || t.hasAttribute('disabled'))
											)
												throw new Error(
													'Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes'
												);
											this._target = t;
										}
									},
									get: function() {
										return this._target;
									}
								}
							]),
							t
						);
					})();
				t.exports = a;
			});
		},
		function(t, e, n) {
			function o(t, e, n) {
				if (!t && !e && !n) throw new Error('Missing required arguments');
				if (!c.string(e)) throw new TypeError('Second argument must be a String');
				if (!c.fn(n)) throw new TypeError('Third argument must be a Function');
				if (c.node(t)) return r(t, e, n);
				if (c.nodeList(t)) return i(t, e, n);
				if (c.string(t)) return a(t, e, n);
				throw new TypeError('First argument must be a String, HTMLElement, HTMLCollection, or NodeList');
			}
			function r(t, e, n) {
				return (
					t.addEventListener(e, n),
					{
						destroy: function() {
							t.removeEventListener(e, n);
						}
					}
				);
			}
			function i(t, e, n) {
				return (
					Array.prototype.forEach.call(t, function(t) {
						t.addEventListener(e, n);
					}),
					{
						destroy: function() {
							Array.prototype.forEach.call(t, function(t) {
								t.removeEventListener(e, n);
							});
						}
					}
				);
			}
			function a(t, e, n) {
				return u(document.body, t, e, n);
			}
			var c = n(6),
				u = n(5);
			t.exports = o;
		},
		function(t, e) {
			function n() {}
			(n.prototype = {
				on: function(t, e, n) {
					var o = this.e || (this.e = {});
					return (o[t] || (o[t] = [])).push({ fn: e, ctx: n }), this;
				},
				once: function(t, e, n) {
					function o() {
						r.off(t, o), e.apply(n, arguments);
					}
					var r = this;
					return (o._ = e), this.on(t, o, n);
				},
				emit: function(t) {
					var e = [].slice.call(arguments, 1),
						n = ((this.e || (this.e = {}))[t] || []).slice(),
						o = 0,
						r = n.length;
					for (o; o < r; o++) n[o].fn.apply(n[o].ctx, e);
					return this;
				},
				off: function(t, e) {
					var n = this.e || (this.e = {}),
						o = n[t],
						r = [];
					if (o && e)
						for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
					return r.length ? (n[t] = r) : delete n[t], this;
				}
			}),
				(t.exports = n);
		},
		function(t, e, n) {
			var o, r, i;
			!(function(a, c) {
				(r = [ t, n(0), n(2), n(1) ]),
					(o = c),
					void 0 !== (i = 'function' == typeof o ? o.apply(e, r) : o) && (t.exports = i);
			})(0, function(t, e, n, o) {
				'use strict';
				function r(t) {
					return t && t.__esModule ? t : { default: t };
				}
				function i(t, e) {
					if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
				}
				function a(t, e) {
					if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
					return !e || ('object' != typeof e && 'function' != typeof e) ? t : e;
				}
				function c(t, e) {
					if ('function' != typeof e && null !== e)
						throw new TypeError('Super expression must either be null or a function, not ' + typeof e);
					(t.prototype = Object.create(e && e.prototype, {
						constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 }
					})),
						e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : (t.__proto__ = e));
				}
				function u(t, e) {
					var n = 'data-clipboard-' + t;
					if (e.hasAttribute(n)) return e.getAttribute(n);
				}
				var l = r(e),
					s = r(n),
					f = r(o),
					d =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function(t) {
									return typeof t;
								}
							: function(t) {
									return t &&
									'function' == typeof Symbol &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
										? 'symbol'
										: typeof t;
								},
					h = (function() {
						function t(t, e) {
							for (var n = 0; n < e.length; n++) {
								var o = e[n];
								(o.enumerable = o.enumerable || !1),
									(o.configurable = !0),
									'value' in o && (o.writable = !0),
									Object.defineProperty(t, o.key, o);
							}
						}
						return function(e, n, o) {
							return n && t(e.prototype, n), o && t(e, o), e;
						};
					})(),
					p = (function(t) {
						function e(t, n) {
							i(this, e);
							var o = a(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
							return o.resolveOptions(n), o.listenClick(t), o;
						}
						return (
							c(e, t),
							h(
								e,
								[
									{
										key: 'resolveOptions',
										value: function() {
											var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
											(this.action =
												'function' == typeof t.action ? t.action : this.defaultAction),
												(this.target =
													'function' == typeof t.target ? t.target : this.defaultTarget),
												(this.text = 'function' == typeof t.text ? t.text : this.defaultText),
												(this.container =
													'object' === d(t.container) ? t.container : document.body);
										}
									},
									{
										key: 'listenClick',
										value: function(t) {
											var e = this;
											this.listener = (0, f.default)(t, 'click', function(t) {
												return e.onClick(t);
											});
										}
									},
									{
										key: 'onClick',
										value: function(t) {
											var e = t.delegateTarget || t.currentTarget;
											this.clipboardAction && (this.clipboardAction = null),
												(this.clipboardAction = new l.default({
													action: this.action(e),
													target: this.target(e),
													text: this.text(e),
													container: this.container,
													trigger: e,
													emitter: this
												}));
										}
									},
									{
										key: 'defaultAction',
										value: function(t) {
											return u('action', t);
										}
									},
									{
										key: 'defaultTarget',
										value: function(t) {
											var e = u('target', t);
											if (e) return document.querySelector(e);
										}
									},
									{
										key: 'defaultText',
										value: function(t) {
											return u('text', t);
										}
									},
									{
										key: 'destroy',
										value: function() {
											this.listener.destroy(),
												this.clipboardAction &&
													(this.clipboardAction.destroy(), (this.clipboardAction = null));
										}
									}
								],
								[
									{
										key: 'isSupported',
										value: function() {
											var t =
													arguments.length > 0 && void 0 !== arguments[0]
														? arguments[0]
														: [ 'copy', 'cut' ],
												e = 'string' == typeof t ? [ t ] : t,
												n = !!document.queryCommandSupported;
											return (
												e.forEach(function(t) {
													n = n && !!document.queryCommandSupported(t);
												}),
												n
											);
										}
									}
								]
							),
							e
						);
					})(s.default);
				t.exports = p;
			});
		},
		function(t, e) {
			function n(t, e) {
				for (; t && t.nodeType !== o; ) {
					if ('function' == typeof t.matches && t.matches(e)) return t;
					t = t.parentNode;
				}
			}
			var o = 9;
			if ('undefined' != typeof Element && !Element.prototype.matches) {
				var r = Element.prototype;
				r.matches =
					r.matchesSelector ||
					r.mozMatchesSelector ||
					r.msMatchesSelector ||
					r.oMatchesSelector ||
					r.webkitMatchesSelector;
			}
			t.exports = n;
		},
		function(t, e, n) {
			function o(t, e, n, o, r) {
				var a = i.apply(this, arguments);
				return (
					t.addEventListener(n, a, r),
					{
						destroy: function() {
							t.removeEventListener(n, a, r);
						}
					}
				);
			}
			function r(t, e, n, r, i) {
				return 'function' == typeof t.addEventListener
					? o.apply(null, arguments)
					: 'function' == typeof n
						? o.bind(null, document).apply(null, arguments)
						: ('string' == typeof t && (t = document.querySelectorAll(t)),
							Array.prototype.map.call(t, function(t) {
								return o(t, e, n, r, i);
							}));
			}
			function i(t, e, n, o) {
				return function(n) {
					(n.delegateTarget = a(n.target, e)), n.delegateTarget && o.call(t, n);
				};
			}
			var a = n(4);
			t.exports = r;
		},
		function(t, e) {
			(e.node = function(t) {
				return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
			}),
				(e.nodeList = function(t) {
					var n = Object.prototype.toString.call(t);
					return (
						void 0 !== t &&
						('[object NodeList]' === n || '[object HTMLCollection]' === n) &&
						'length' in t &&
						(0 === t.length || e.node(t[0]))
					);
				}),
				(e.string = function(t) {
					return 'string' == typeof t || t instanceof String;
				}),
				(e.fn = function(t) {
					return '[object Function]' === Object.prototype.toString.call(t);
				});
		},
		function(t, e) {
			function n(t) {
				var e;
				if ('SELECT' === t.nodeName) t.focus(), (e = t.value);
				else if ('INPUT' === t.nodeName || 'TEXTAREA' === t.nodeName) {
					var n = t.hasAttribute('readonly');
					n || t.setAttribute('readonly', ''),
						t.select(),
						t.setSelectionRange(0, t.value.length),
						n || t.removeAttribute('readonly'),
						(e = t.value);
				} else {
					t.hasAttribute('contenteditable') && t.focus();
					var o = window.getSelection(),
						r = document.createRange();
					r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), (e = o.toString());
				}
				return e;
			}
			t.exports = n;
		}
	]);
});

/*!
 * Picturefill - v2.3.1 - 2015-04-09
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */

window.matchMedia ||
	(window.matchMedia = (function() {
		'use strict';
		var a = window.styleMedia || window.media;
		if (!a) {
			var b = document.createElement('style'),
				c = document.getElementsByTagName('script')[0],
				d = null;
			(b.type = 'text/css'),
				(b.id = 'matchmediajs-test'),
				c.parentNode.insertBefore(b, c),
				(d = ('getComputedStyle' in window && window.getComputedStyle(b, null)) || b.currentStyle),
				(a = {
					matchMedium: function(a) {
						var c = '@media ' + a + '{ #matchmediajs-test { width: 1px; } }';
						return b.styleSheet ? (b.styleSheet.cssText = c) : (b.textContent = c), '1px' === d.width;
					}
				});
		}
		return function(b) {
			return { matches: a.matchMedium(b || 'all'), media: b || 'all' };
		};
	})()),
	(function(a, b, c) {
		'use strict';
		function d(b) {
			'object' == typeof module && 'object' == typeof module.exports
				? (module.exports = b)
				: 'function' == typeof define &&
					define.amd &&
					define('picturefill', function() {
						return b;
					}),
				'object' == typeof a && (a.picturefill = b);
		}
		function e(a) {
			var b,
				c,
				d,
				e,
				f,
				i = a || {};
			b = i.elements || g.getAllElements();
			for (var j = 0, k = b.length; k > j; j++)
				if (
					((c = b[j]),
					(d = c.parentNode),
					(e = void 0),
					(f = void 0),
					'IMG' === c.nodeName.toUpperCase() &&
						(c[g.ns] || (c[g.ns] = {}), i.reevaluate || !c[g.ns].evaluated))
				) {
					if (d && 'PICTURE' === d.nodeName.toUpperCase()) {
						if ((g.removeVideoShim(d), (e = g.getMatch(c, d)), e === !1)) continue;
					} else e = void 0;
					((d && 'PICTURE' === d.nodeName.toUpperCase()) ||
						(!g.sizesSupported && c.srcset && h.test(c.srcset))) &&
						g.dodgeSrcset(c),
						e
							? ((f = g.processSourceSet(e)), g.applyBestCandidate(f, c))
							: ((f = g.processSourceSet(c)),
								(void 0 === c.srcset || c[g.ns].srcset) && g.applyBestCandidate(f, c)),
						(c[g.ns].evaluated = !0);
				}
		}
		function f() {
			function c() {
				clearTimeout(d), (d = setTimeout(h, 60));
			}
			g.initTypeDetects(), e();
			var d,
				f = setInterval(function() {
					return e(), /^loaded|^i|^c/.test(b.readyState) ? void clearInterval(f) : void 0;
				}, 250),
				h = function() {
					e({ reevaluate: !0 });
				};
			a.addEventListener ? a.addEventListener('resize', c, !1) : a.attachEvent && a.attachEvent('onresize', c);
		}
		if (a.HTMLPictureElement) return void d(function() {});
		b.createElement('picture');
		var g = a.picturefill || {},
			h = /\s+\+?\d+(e\d+)?w/;
		(g.ns = 'picturefill'),
			(function() {
				(g.srcsetSupported = 'srcset' in c),
					(g.sizesSupported = 'sizes' in c),
					(g.curSrcSupported = 'currentSrc' in c);
			})(),
			(g.trim = function(a) {
				return a.trim ? a.trim() : a.replace(/^\s+|\s+$/g, '');
			}),
			(g.makeUrl = (function() {
				var a = b.createElement('a');
				return function(b) {
					return (a.href = b), a.href;
				};
			})()),
			(g.restrictsMixedContent = function() {
				return 'https:' === a.location.protocol;
			}),
			(g.matchesMedia = function(b) {
				return a.matchMedia && a.matchMedia(b).matches;
			}),
			(g.getDpr = function() {
				return a.devicePixelRatio || 1;
			}),
			(g.getWidthFromLength = function(a) {
				var c;
				if (!a || a.indexOf('%') > -1 != !1 || !(parseFloat(a) > 0 || a.indexOf('calc(') > -1)) return !1;
				(a = a.replace('vw', '%')),
					g.lengthEl ||
						((g.lengthEl = b.createElement('div')),
						(g.lengthEl.style.cssText =
							'border:0;display:block;font-size:1em;left:0;margin:0;padding:0;position:absolute;visibility:hidden'),
						(g.lengthEl.className = 'helper-from-picturefill-js')),
					(g.lengthEl.style.width = '0px');
				try {
					g.lengthEl.style.width = a;
				} catch (d) {}
				return (
					b.body.appendChild(g.lengthEl),
					(c = g.lengthEl.offsetWidth),
					0 >= c && (c = !1),
					b.body.removeChild(g.lengthEl),
					c
				);
			}),
			(g.detectTypeSupport = function(b, c) {
				var d = new a.Image();
				return (
					(d.onerror = function() {
						(g.types[b] = !1), e();
					}),
					(d.onload = function() {
						(g.types[b] = 1 === d.width), e();
					}),
					(d.src = c),
					'pending'
				);
			}),
			(g.types = g.types || {}),
			(g.initTypeDetects = function() {
				(g.types['image/jpeg'] = !0),
					(g.types['image/gif'] = !0),
					(g.types['image/png'] = !0),
					(g.types['image/svg+xml'] = b.implementation.hasFeature(
						'http://www.w3.org/TR/SVG11/feature#Image',
						'1.1'
					)),
					(g.types['image/webp'] = g.detectTypeSupport(
						'image/webp',
						'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA='
					));
			}),
			(g.verifyTypeSupport = function(a) {
				var b = a.getAttribute('type');
				if (null === b || '' === b) return !0;
				var c = g.types[b];
				return 'string' == typeof c && 'pending' !== c
					? ((g.types[b] = g.detectTypeSupport(b, c)), 'pending')
					: 'function' == typeof c ? (c(), 'pending') : c;
			}),
			(g.parseSize = function(a) {
				var b = /(\([^)]+\))?\s*(.+)/g.exec(a);
				return { media: b && b[1], length: b && b[2] };
			}),
			(g.findWidthFromSourceSize = function(c) {
				for (var d, e = g.trim(c).split(/\s*,\s*/), f = 0, h = e.length; h > f; f++) {
					var i = e[f],
						j = g.parseSize(i),
						k = j.length,
						l = j.media;
					if (k && (!l || g.matchesMedia(l)) && (d = g.getWidthFromLength(k))) break;
				}
				return d || Math.max(a.innerWidth || 0, b.documentElement.clientWidth);
			}),
			(g.parseSrcset = function(a) {
				for (var b = []; '' !== a; ) {
					a = a.replace(/^\s+/g, '');
					var c,
						d = a.search(/\s/g),
						e = null;
					if (-1 !== d) {
						c = a.slice(0, d);
						var f = c.slice(-1);
						if (
							((',' === f || '' === c) && ((c = c.replace(/,+$/, '')), (e = '')),
							(a = a.slice(d + 1)),
							null === e)
						) {
							var g = a.indexOf(',');
							-1 !== g ? ((e = a.slice(0, g)), (a = a.slice(g + 1))) : ((e = a), (a = ''));
						}
					} else (c = a), (a = '');
					(c || e) && b.push({ url: c, descriptor: e });
				}
				return b;
			}),
			(g.parseDescriptor = function(a, b) {
				var c,
					d = b || '100vw',
					e = a && a.replace(/(^\s+|\s+$)/g, ''),
					f = g.findWidthFromSourceSize(d);
				if (e)
					for (var h = e.split(' '), i = h.length - 1; i >= 0; i--) {
						var j = h[i],
							k = j && j.slice(j.length - 1);
						if (('h' !== k && 'w' !== k) || g.sizesSupported) {
							if ('x' === k) {
								var l = j && parseFloat(j, 10);
								c = l && !isNaN(l) ? l : 1;
							}
						} else c = parseFloat(parseInt(j, 10) / f);
					}
				return c || 1;
			}),
			(g.getCandidatesFromSourceSet = function(a, b) {
				for (var c = g.parseSrcset(a), d = [], e = 0, f = c.length; f > e; e++) {
					var h = c[e];
					d.push({ url: h.url, resolution: g.parseDescriptor(h.descriptor, b) });
				}
				return d;
			}),
			(g.dodgeSrcset = function(a) {
				a.srcset &&
					((a[g.ns].srcset = a.srcset), (a.srcset = ''), a.setAttribute('data-pfsrcset', a[g.ns].srcset));
			}),
			(g.processSourceSet = function(a) {
				var b = a.getAttribute('srcset'),
					c = a.getAttribute('sizes'),
					d = [];
				return (
					'IMG' === a.nodeName.toUpperCase() && a[g.ns] && a[g.ns].srcset && (b = a[g.ns].srcset),
					b && (d = g.getCandidatesFromSourceSet(b, c)),
					d
				);
			}),
			(g.backfaceVisibilityFix = function(a) {
				var b = a.style || {},
					c = 'webkitBackfaceVisibility' in b,
					d = b.zoom;
				c && ((b.zoom = '.999'), (c = a.offsetWidth), (b.zoom = d));
			}),
			(g.setIntrinsicSize = (function() {
				var c = {},
					d = function(a, b, c) {
						b && a.setAttribute('width', parseInt(b / c, 10));
					};
				return function(e, f) {
					var h;
					e[g.ns] &&
						!a.pfStopIntrinsicSize &&
						(void 0 === e[g.ns].dims &&
							(e[g.ns].dims = e.getAttribute('width') || e.getAttribute('height')),
						e[g.ns].dims ||
							(f.url in c
								? d(e, c[f.url], f.resolution)
								: ((h = b.createElement('img')),
									(h.onload = function() {
										if (((c[f.url] = h.width), !c[f.url]))
											try {
												b.body.appendChild(h),
													(c[f.url] = h.width || h.offsetWidth),
													b.body.removeChild(h);
											} catch (a) {}
										e.src === f.url && d(e, c[f.url], f.resolution),
											(e = null),
											(h.onload = null),
											(h = null);
									}),
									(h.src = f.url))));
				};
			})()),
			(g.applyBestCandidate = function(a, b) {
				var c, d, e;
				a.sort(g.ascendingSort), (d = a.length), (e = a[d - 1]);
				for (var f = 0; d > f; f++)
					if (((c = a[f]), c.resolution >= g.getDpr())) {
						e = c;
						break;
					}
				e &&
					((e.url = g.makeUrl(e.url)),
					b.src !== e.url &&
						(g.restrictsMixedContent() && 'http:' === e.url.substr(0, 'http:'.length).toLowerCase()
							? void 0 !== window.console && console.warn('Blocked mixed content image ' + e.url)
							: ((b.src = e.url),
								g.curSrcSupported || (b.currentSrc = b.src),
								g.backfaceVisibilityFix(b))),
					g.setIntrinsicSize(b, e));
			}),
			(g.ascendingSort = function(a, b) {
				return a.resolution - b.resolution;
			}),
			(g.removeVideoShim = function(a) {
				var b = a.getElementsByTagName('video');
				if (b.length) {
					for (var c = b[0], d = c.getElementsByTagName('source'); d.length; ) a.insertBefore(d[0], c);
					c.parentNode.removeChild(c);
				}
			}),
			(g.getAllElements = function() {
				for (var a = [], c = b.getElementsByTagName('img'), d = 0, e = c.length; e > d; d++) {
					var f = c[d];
					('PICTURE' === f.parentNode.nodeName.toUpperCase() ||
						null !== f.getAttribute('srcset') ||
						(f[g.ns] && null !== f[g.ns].srcset)) &&
						a.push(f);
				}
				return a;
			}),
			(g.getMatch = function(a, b) {
				for (var c, d = b.childNodes, e = 0, f = d.length; f > e; e++) {
					var h = d[e];
					if (1 === h.nodeType) {
						if (h === a) return c;
						if ('SOURCE' === h.nodeName.toUpperCase()) {
							null !== h.getAttribute('src') &&
								void 0 !== typeof console &&
								console.warn(
									'The `src` attribute is invalid on `picture` `source` element; instead, use `srcset`.'
								);
							var i = h.getAttribute('media');
							if (h.getAttribute('srcset') && (!i || g.matchesMedia(i))) {
								var j = g.verifyTypeSupport(h);
								if (j === !0) {
									c = h;
									break;
								}
								if ('pending' === j) return !1;
							}
						}
					}
				}
				return c;
			}),
			f(),
			(e._ = g),
			d(e);
	})(window, window.document, new window.Image());

/*!
 * retina.js - v2.1.2
 * https://imulus.github.io/retinajs/
 * Copyright (c) 2017 Axial <developer@axial.agency>
 */

(function(a, b) {
	'object' == typeof exports && 'undefined' != typeof module
		? (module.exports = b())
		: 'function' == typeof define && define.amd ? define(b) : (a.retinajs = b());
})(this, function() {
	'use strict';
	function a(a) {
		return Array.prototype.slice.call(a);
	}
	function b(a) {
		var b = parseInt(a, 10);
		return k < b ? k : b;
	}
	function c(a) {
		return (
			a.hasAttribute('data-no-resize') ||
				(0 === a.offsetWidth && 0 === a.offsetHeight
					? (a.setAttribute('width', a.naturalWidth), a.setAttribute('height', a.naturalHeight))
					: (a.setAttribute('width', a.offsetWidth), a.setAttribute('height', a.offsetHeight))),
			a
		);
	}
	function d(a, b) {
		var d = a.nodeName.toLowerCase(),
			e = document.createElement('img');
		e.addEventListener('load', function() {
			'img' === d ? c(a).setAttribute('src', b) : (a.style.backgroundImage = 'url(' + b + ')');
		}),
			e.setAttribute('src', b),
			a.setAttribute(o, !0);
	}
	function e(a, c) {
		var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
			f = b(e);
		if (c && 1 < f) {
			var g = c.replace(l, '@' + f + 'x$1');
			d(a, g);
		}
	}
	function f(a, b, c) {
		1 < k && d(a, c);
	}
	function g(b) {
		return b
			? 'function' == typeof b.forEach ? b : a(b)
			: 'undefined' == typeof document ? [] : a(document.querySelectorAll(n));
	}
	function h(a) {
		return a.style.backgroundImage.replace(m, '$2');
	}
	function i(a) {
		g(a).forEach(function(a) {
			if (!a.getAttribute(o)) {
				var b = 'img' === a.nodeName.toLowerCase(),
					c = b ? a.getAttribute('src') : h(a),
					d = a.getAttribute('data-rjs'),
					g = !isNaN(parseInt(d, 10));
				if (null === d) return;
				g ? e(a, c, d) : f(a, c, d);
			}
		});
	}
	var j = 'undefined' != typeof window,
		k = Math.round(j ? window.devicePixelRatio || 1 : 1),
		l = /(\.[A-z]{3,4}\/?(\?.*)?)$/,
		m = /url\(('|")?([^)'"]+)('|")?\)/i,
		n = '[data-rjs]',
		o = 'data-rjs-processed';
	return (
		j &&
			(window.addEventListener('load', function() {
				i();
			}),
			(window.retinajs = i)),
		i
	);
});

/*!
 * LazyLoad - v12.0.0
 * https://github.com/verlok/lazyload
 * Copyright (c) 2017 Axial <developer@axial.agency>
 */

function _extends() {
	return (_extends =
		Object.assign ||
		function(t) {
			for (var e = 1; e < arguments.length; e++) {
				var n = arguments[e];
				for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
			}
			return t;
		}).apply(this, arguments);
}
var LazyLoad = (function() {
	'use strict';
	var t = 'undefined' != typeof window,
		e =
			(t && !('onscroll' in window)) ||
			('undefined' != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
		n = t && 'IntersectionObserver' in window,
		a = t && 'classList' in document.createElement('p'),
		r = {
			elements_selector: 'img',
			container: e || t ? document : null,
			threshold: 300,
			thresholds: null,
			data_src: 'src',
			data_srcset: 'srcset',
			data_sizes: 'sizes',
			data_bg: 'bg',
			class_loading: 'loading',
			class_loaded: 'loaded',
			class_error: 'error',
			load_delay: 0,
			auto_unobserve: !0,
			callback_enter: null,
			callback_exit: null,
			callback_reveal: null,
			callback_loaded: null,
			callback_error: null,
			callback_finish: null,
			use_native: !1
		},
		o = function(t, e) {
			var n,
				a = new t(e);
			try {
				n = new CustomEvent('LazyLoad::Initialized', { detail: { instance: a } });
			} catch (t) {
				(n = document.createEvent('CustomEvent')).initCustomEvent('LazyLoad::Initialized', !1, !1, {
					instance: a
				});
			}
			window.dispatchEvent(n);
		};
	var s = function(t, e) {
			return t.getAttribute('data-' + e);
		},
		i = function(t, e, n) {
			var a = 'data-' + e;
			null !== n ? t.setAttribute(a, n) : t.removeAttribute(a);
		},
		c = function(t) {
			return 'true' === s(t, 'was-processed');
		},
		l = function(t, e) {
			return i(t, 'll-timeout', e);
		},
		u = function(t) {
			return s(t, 'll-timeout');
		},
		d = function(t, e) {
			t && t(e);
		},
		f = function(t, e) {
			(t._loadingCount += e), 0 === t._elements.length && 0 === t._loadingCount && d(t._settings.callback_finish);
		},
		_ = function(t) {
			for (var e, n = [], a = 0; (e = t.children[a]); a += 1) 'SOURCE' === e.tagName && n.push(e);
			return n;
		},
		v = function(t, e, n) {
			n && t.setAttribute(e, n);
		},
		g = function(t, e) {
			v(t, 'sizes', s(t, e.data_sizes)), v(t, 'srcset', s(t, e.data_srcset)), v(t, 'src', s(t, e.data_src));
		},
		h = {
			IMG: function(t, e) {
				var n = t.parentNode;
				n &&
					'PICTURE' === n.tagName &&
					_(n).forEach(function(t) {
						g(t, e);
					});
				g(t, e);
			},
			IFRAME: function(t, e) {
				v(t, 'src', s(t, e.data_src));
			},
			VIDEO: function(t, e) {
				_(t).forEach(function(t) {
					v(t, 'src', s(t, e.data_src));
				}),
					v(t, 'src', s(t, e.data_src)),
					t.load();
			}
		},
		m = function(t, e) {
			var n,
				a,
				r = e._settings,
				o = t.tagName,
				i = h[o];
			if (i)
				return (
					i(t, r),
					f(e, 1),
					void (e._elements = ((n = e._elements),
					(a = t),
					n.filter(function(t) {
						return t !== a;
					})))
				);
			!(function(t, e) {
				var n = s(t, e.data_src),
					a = s(t, e.data_bg);
				n && (t.style.backgroundImage = 'url("'.concat(n, '")')), a && (t.style.backgroundImage = a);
			})(t, r);
		},
		b = function(t, e) {
			a ? t.classList.add(e) : (t.className += (t.className ? ' ' : '') + e);
		},
		p = function(t, e, n) {
			t.addEventListener(e, n);
		},
		E = function(t, e, n) {
			t.removeEventListener(e, n);
		},
		y = function(t, e, n) {
			E(t, 'load', e), E(t, 'loadeddata', e), E(t, 'error', n);
		},
		w = function(t, e, n) {
			var r = n._settings,
				o = e ? r.class_loaded : r.class_error,
				s = e ? r.callback_loaded : r.callback_error,
				i = t.target;
			!(function(t, e) {
				a
					? t.classList.remove(e)
					: (t.className = t.className
							.replace(new RegExp('(^|\\s+)' + e + '(\\s+|$)'), ' ')
							.replace(/^\s+/, '')
							.replace(/\s+$/, ''));
			})(i, r.class_loading),
				b(i, o),
				d(s, i),
				f(n, -1);
		},
		I = function(t, e) {
			var n = function n(r) {
					w(r, !0, e), y(t, n, a);
				},
				a = function a(r) {
					w(r, !1, e), y(t, n, a);
				};
			!(function(t, e, n) {
				p(t, 'load', e), p(t, 'loadeddata', e), p(t, 'error', n);
			})(t, n, a);
		},
		k = [ 'IMG', 'IFRAME', 'VIDEO' ],
		A = function(t, e) {
			var n = e._observer;
			O(t, e), n && e._settings.auto_unobserve && n.unobserve(t);
		},
		L = function(t) {
			var e = u(t);
			e && (clearTimeout(e), l(t, null));
		},
		z = function(t, e) {
			var n = e._settings.load_delay,
				a = u(t);
			a ||
				((a = setTimeout(function() {
					A(t, e), L(t);
				}, n)),
				l(t, a));
		},
		O = function(t, e, n) {
			var a = e._settings;
			(!n && c(t)) ||
				(k.indexOf(t.tagName) > -1 && (I(t, e), b(t, a.class_loading)),
				m(t, e),
				(function(t) {
					i(t, 'was-processed', 'true');
				})(t),
				d(a.callback_reveal, t),
				d(a.callback_set, t));
		},
		N = function(t) {
			return (
				!!n &&
				((t._observer = new IntersectionObserver(
					function(e) {
						e.forEach(function(e) {
							return (function(t) {
								return t.isIntersecting || t.intersectionRatio > 0;
							})(e)
								? (function(t, e) {
										var n = e._settings;
										d(n.callback_enter, t), n.load_delay ? z(t, e) : A(t, e);
									})(e.target, t)
								: (function(t, e) {
										var n = e._settings;
										d(n.callback_exit, t), n.load_delay && L(t);
									})(e.target, t);
						});
					},
					{
						root: (e = t._settings).container === document ? null : e.container,
						rootMargin: e.thresholds || e.threshold + 'px'
					}
				)),
				!0)
			);
			var e;
		},
		x = [ 'IMG', 'IFRAME' ],
		C = function(t, e) {
			return (function(t) {
				return t.filter(function(t) {
					return !c(t);
				});
			})(
				((n =
					t ||
					(function(t) {
						return t.container.querySelectorAll(t.elements_selector);
					})(e)),
				Array.prototype.slice.call(n))
			);
			var n;
		},
		M = function(t, e) {
			(this._settings = (function(t) {
				return _extends({}, r, t);
			})(t)),
				(this._loadingCount = 0),
				N(this),
				this.update(e);
		};
	return (
		(M.prototype = {
			update: function(t) {
				var n,
					a = this,
					r = this._settings;
				((this._elements = C(t, r)), !e && this._observer)
					? ((function(t) {
							return t.use_native && 'loading' in HTMLImageElement.prototype;
						})(r) &&
							((n = this)._elements.forEach(function(t) {
								-1 !== x.indexOf(t.tagName) && (t.setAttribute('loading', 'lazy'), O(t, n));
							}),
							(this._elements = C(t, r))),
						this._elements.forEach(function(t) {
							a._observer.observe(t);
						}))
					: this.loadAll();
			},
			destroy: function() {
				var t = this;
				this._observer &&
					(this._elements.forEach(function(e) {
						t._observer.unobserve(e);
					}),
					(this._observer = null)),
					(this._elements = null),
					(this._settings = null);
			},
			load: function(t, e) {
				O(t, this, e);
			},
			loadAll: function() {
				var t = this;
				this._elements.forEach(function(e) {
					A(e, t);
				});
			}
		}),
		t &&
			(function(t, e) {
				if (e)
					if (e.length) for (var n, a = 0; (n = e[a]); a += 1) o(t, n);
					else o(t, e);
			})(M, window.lazyLoadOptions),
		M
	);
})();
