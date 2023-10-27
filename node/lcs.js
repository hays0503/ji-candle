/*!
 * @license
 * TradingView Lightweight Charts v3.0.0
 * Copyright (c) 2019 TradingView, Inc.
 * Licensed under Apache License 2.0 https://www.apache.org/licenses/LICENSE-2.0
 */
!(function () {
	"use strict";
	var t, i;
	function n(t, i) {
		var n,
			s = (((n = {})[0] = []),
			(n[1] = [t.lineWidth, t.lineWidth]),
			(n[2] = [2 * t.lineWidth, 2 * t.lineWidth]),
			(n[3] = [6 * t.lineWidth, 6 * t.lineWidth]),
			(n[4] = [t.lineWidth, 4 * t.lineWidth]),
			n)[i];
		t.setLineDash(s);
	}
	function s(t, i, n, s) {
		t.beginPath();
		var h = t.lineWidth % 2 ? 0.5 : 0;
		t.moveTo(n, i + h), t.lineTo(s, i + h), t.stroke();
	}
	!(function (t) {
		(t[(t.Simple = 0)] = "Simple"), (t[(t.WithSteps = 1)] = "WithSteps");
	})(t || (t = {})),
		(function (t) {
			(t[(t.Solid = 0)] = "Solid"),
				(t[(t.Dotted = 1)] = "Dotted"),
				(t[(t.Dashed = 2)] = "Dashed"),
				(t[(t.LargeDashed = 3)] = "LargeDashed"),
				(t[(t.SparseDotted = 4)] = "SparseDotted");
		})(i || (i = {}));
	var h = function (t, i) {
		return (h =
			Object.setPrototypeOf ||
			({ __proto__: [] } instanceof Array &&
				function (t, i) {
					t.__proto__ = i;
				}) ||
			function (t, i) {
				for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
			})(t, i);
	};
	function r(t, i) {
		function n() {
			this.constructor = t;
		}
		h(t, i),
			(t.prototype =
				null === i ? Object.create(i) : ((n.prototype = i.prototype), new n()));
	}
	var e = function () {
		return (e =
			Object.assign ||
			function (t) {
				for (var i, n = 1, s = arguments.length; n < s; n++)
					for (var h in (i = arguments[n]))
						Object.prototype.hasOwnProperty.call(i, h) && (t[h] = i[h]);
				return t;
			}).apply(this, arguments);
	};
	function u() {
		for (var t = 0, i = 0, n = arguments.length; i < n; i++)
			t += arguments[i].length;
		var s = Array(t),
			h = 0;
		for (i = 0; i < n; i++)
			for (var r = arguments[i], e = 0, u = r.length; e < u; e++, h++)
				s[h] = r[e];
		return s;
	}
	function o(t, i) {
		if (!t) throw new Error("Assertion failed" + (i ? ": " + i : ""));
	}
	function a(t) {
		if (void 0 === t) throw new Error("Value is undefined");
		return t;
	}
	function l(t) {
		if (null === t) throw new Error("Value is null");
		return t;
	}
	function f(t) {
		return l(a(t));
	}
	function c(t) {
		for (var i = [], n = 1; n < arguments.length; n++) i[n - 1] = arguments[n];
		for (var s = 0, h = i; s < h.length; s++) {
			var r = h[s];
			for (var e in r)
				void 0 !== r[e] &&
					("object" != typeof r[e] || void 0 === t[e]
						? (t[e] = r[e])
						: c(t[e], r[e]));
		}
		return t;
	}
	function v(t) {
		return "number" == typeof t && isFinite(t);
	}
	function _(t) {
		return "number" == typeof t && t % 1 == 0;
	}
	function d(t) {
		return "string" == typeof t;
	}
	function w(t) {
		return !(t <= 0 || t > 0);
	}
	function M(t) {
		return "boolean" == typeof t;
	}
	function b(t) {
		var i,
			n,
			s,
			h = t;
		if (!h || "object" != typeof h) return h;
		for (n in ((i = Array.isArray(h) ? [] : {}), h))
			h.hasOwnProperty(n) &&
				((s = h[n]), (i[n] = s && "object" == typeof s ? b(s) : s));
		return i;
	}
	function m(t) {
		return null !== t;
	}
	function p(t) {
		return null === t ? void 0 : t;
	}
	var g = (function () {
			function t() {
				this.t = [];
			}
			return (
				(t.prototype.i = function (t) {
					this.t = t;
				}),
				(t.prototype.s = function (t, i, n, s) {
					this.t.forEach(function (h) {
						t.save(), h.s(t, i, n, s), t.restore();
					});
				}),
				t
			);
		})(),
		y = (function () {
			function t() {}
			return (
				(t.prototype.s = function (t, i, n, s) {
					t.save(), t.scale(i, i), this.h(t, n, s), t.restore();
				}),
				(t.prototype.u = function (t, i, n, s) {
					t.save(), t.scale(i, i), this.o(t, n, s), t.restore();
				}),
				(t.prototype.o = function (t, i, n) {}),
				t
			);
		})(),
		k = (function (t) {
			function i() {
				var i = (null !== t && t.apply(this, arguments)) || this;
				return (i.l = null), i;
			}
			return (
				r(i, t),
				(i.prototype.v = function (t) {
					this.l = t;
				}),
				(i.prototype.h = function (t) {
					if (null !== this.l && null !== this.l._) {
						var i = this.l._,
							n = this.l,
							s = function (s) {
								t.beginPath();
								for (var h = i.to - 1; h >= i.from; --h) {
									var r = n.M[h];
									t.moveTo(r.m, r.p), t.arc(r.m, r.p, s, 0, 2 * Math.PI);
								}
								t.fill();
							};
						(t.fillStyle = n.g), s(n.k + 2), (t.fillStyle = n.N), s(n.k);
					}
				}),
				i
			);
		})(y);
	var x,
		N,
		S,
		D,
		T = { from: 0, to: 1 },
		C = (function () {
			function t(t, i) {
				(this.S = new g()),
					(this.D = []),
					(this.T = []),
					(this.C = !0),
					(this.A = t),
					(this.L = i),
					this.S.i(this.D);
			}
			return (
				(t.prototype.B = function (t) {
					var i = this,
						n = this.A.V();
					n.length !== this.D.length &&
						((this.T = n.map(function () {
							return {
								M: [{ m: 0, p: 0, P: 0, F: 0 }],
								N: "",
								g: i.A.O().layout.backgroundColor,
								k: 0,
								_: null,
							};
						})),
						(this.D = this.T.map(function (t) {
							var i = new k();
							return i.v(t), i;
						})),
						this.S.i(this.D)),
						(this.C = !0);
				}),
				(t.prototype.I = function (t, i, n) {
					return this.C && (this.R(), (this.C = !1)), this.S;
				}),
				(t.prototype.R = function () {
					var t = this,
						i = this.A.V(),
						n = this.L.W(),
						s = this.A.j();
					i.forEach(function (i, h) {
						var r = t.T[h],
							e = i.U(n);
						if (null !== e) {
							var u = l(i.q());
							(r.N = i.K().Y(n).H),
								(r.g = t.A.O().layout.backgroundColor),
								(r.k = e.k),
								(r.M[0].F = e.F),
								(r.M[0].p = i.X().$(e.F, u.Z)),
								(r.M[0].P = n),
								(r.M[0].m = s.J(n)),
								(r._ = T);
						} else r._ = null;
					});
				}),
				t
			);
		})(),
		E = (function () {
			function t(t) {
				this.G = t;
			}
			return (
				(t.prototype.s = function (t, i, h, r) {
					if (null !== this.G) {
						var e = this.G.it.tt,
							u = this.G.nt.tt;
						if (e || u) {
							t.save();
							var o = Math.round(this.G.m * i),
								a = Math.round(this.G.p * i),
								l = Math.ceil(this.G.st * i),
								f = Math.ceil(this.G.ht * i);
							(t.lineCap = "butt"),
								e &&
									o >= 0 &&
									((t.lineWidth = Math.floor(this.G.it.rt * i)),
									(t.strokeStyle = this.G.it.et),
									(t.fillStyle = this.G.it.et),
									n(t, this.G.it.ut),
									(function (t, i, n, s) {
										t.beginPath();
										var h = t.lineWidth % 2 ? 0.5 : 0;
										t.moveTo(i + h, n), t.lineTo(i + h, s), t.stroke();
									})(t, o, 0, f)),
								u &&
									a >= 0 &&
									((t.lineWidth = Math.floor(this.G.nt.rt * i)),
									(t.strokeStyle = this.G.nt.et),
									(t.fillStyle = this.G.nt.et),
									n(t, this.G.nt.ut),
									s(t, a, 0, l)),
								t.restore();
						}
					}
				}),
				t
			);
		})(),
		A = (function () {
			function t(t) {
				(this.C = !0),
					(this.ot = {
						it: { rt: 1, ut: 0, et: "", tt: !1 },
						nt: { rt: 1, ut: 0, et: "", tt: !1 },
						st: 0,
						ht: 0,
						m: 0,
						p: 0,
					}),
					(this.at = new E(this.ot)),
					(this.lt = t);
			}
			return (
				(t.prototype.B = function () {
					this.C = !0;
				}),
				(t.prototype.I = function (t, i) {
					return this.C && this.R(), this.at;
				}),
				(t.prototype.R = function () {
					var t = this.lt.tt(),
						i = l(this.lt.ft()),
						n = i.ct().O().crosshair,
						s = this.ot;
					(s.nt.tt = t && this.lt.vt(i)),
						(s.it.tt = t && this.lt._t()),
						(s.nt.rt = n.horzLine.width),
						(s.nt.ut = n.horzLine.style),
						(s.nt.et = n.horzLine.color),
						(s.it.rt = n.vertLine.width),
						(s.it.ut = n.vertLine.style),
						(s.it.et = n.vertLine.color),
						(s.st = i.dt()),
						(s.ht = i.wt()),
						(s.m = this.lt.Mt()),
						(s.p = this.lt.bt());
				}),
				t
			);
		})(),
		L = {
			aliceblue: "#f0f8ff",
			antiquewhite: "#faebd7",
			aqua: "#00ffff",
			aquamarine: "#7fffd4",
			azure: "#f0ffff",
			beige: "#f5f5dc",
			bisque: "#ffe4c4",
			black: "#000000",
			blanchedalmond: "#ffebcd",
			blue: "#0000ff",
			blueviolet: "#8a2be2",
			brown: "#a52a2a",
			burlywood: "#deb887",
			cadetblue: "#5f9ea0",
			chartreuse: "#7fff00",
			chocolate: "#d2691e",
			coral: "#ff7f50",
			cornflowerblue: "#6495ed",
			cornsilk: "#fff8dc",
			crimson: "#dc143c",
			cyan: "#00ffff",
			darkblue: "#00008b",
			darkcyan: "#008b8b",
			darkgoldenrod: "#b8860b",
			darkgray: "#a9a9a9",
			darkgreen: "#006400",
			darkkhaki: "#bdb76b",
			darkmagenta: "#8b008b",
			darkolivegreen: "#556b2f",
			darkorange: "#ff8c00",
			darkorchid: "#9932cc",
			darkred: "#8b0000",
			darksalmon: "#e9967a",
			darkseagreen: "#8fbc8f",
			darkslateblue: "#483d8b",
			darkslategray: "#2f4f4f",
			darkturquoise: "#00ced1",
			darkviolet: "#9400d3",
			deeppink: "#ff1493",
			deepskyblue: "#00bfff",
			dimgray: "#696969",
			dodgerblue: "#1e90ff",
			feldspar: "#d19275",
			firebrick: "#b22222",
			floralwhite: "#fffaf0",
			forestgreen: "#228b22",
			fuchsia: "#ff00ff",
			gainsboro: "#dcdcdc",
			ghostwhite: "#f8f8ff",
			gold: "#ffd700",
			goldenrod: "#daa520",
			gray: "#808080",
			green: "#008000",
			greenyellow: "#adff2f",
			honeydew: "#f0fff0",
			hotpink: "#ff69b4",
			indianred: "#cd5c5c",
			indigo: "#4b0082",
			ivory: "#fffff0",
			khaki: "#f0e68c",
			lavender: "#e6e6fa",
			lavenderblush: "#fff0f5",
			lawngreen: "#7cfc00",
			lemonchiffon: "#fffacd",
			lightblue: "#add8e6",
			lightcoral: "#f08080",
			lightcyan: "#e0ffff",
			lightgoldenrodyellow: "#fafad2",
			lightgreen: "#90ee90",
			lightgrey: "#d3d3d3",
			lightpink: "#ffb6c1",
			lightsalmon: "#ffa07a",
			lightseagreen: "#20b2aa",
			lightskyblue: "#87cefa",
			lightslateblue: "#8470ff",
			lightslategray: "#778899",
			lightsteelblue: "#b0c4de",
			lightyellow: "#ffffe0",
			lime: "#00ff00",
			limegreen: "#32cd32",
			linen: "#faf0e6",
			magenta: "#ff00ff",
			maroon: "#800000",
			mediumaquamarine: "#66cdaa",
			mediumblue: "#0000cd",
			mediumorchid: "#ba55d3",
			mediumpurple: "#9370d8",
			mediumseagreen: "#3cb371",
			mediumslateblue: "#7b68ee",
			mediumspringgreen: "#00fa9a",
			mediumturquoise: "#48d1cc",
			mediumvioletred: "#c71585",
			midnightblue: "#191970",
			mintcream: "#f5fffa",
			mistyrose: "#ffe4e1",
			moccasin: "#ffe4b5",
			navajowhite: "#ffdead",
			navy: "#000080",
			oldlace: "#fdf5e6",
			olive: "#808000",
			olivedrab: "#6b8e23",
			orange: "#ffa500",
			orangered: "#ff4500",
			orchid: "#da70d6",
			palegoldenrod: "#eee8aa",
			palegreen: "#98fb98",
			paleturquoise: "#afeeee",
			palevioletred: "#d87093",
			papayawhip: "#ffefd5",
			peachpuff: "#ffdab9",
			peru: "#cd853f",
			pink: "#ffc0cb",
			plum: "#dda0dd",
			powderblue: "#b0e0e6",
			purple: "#800080",
			red: "#ff0000",
			rosybrown: "#bc8f8f",
			royalblue: "#4169e1",
			saddlebrown: "#8b4513",
			salmon: "#fa8072",
			sandybrown: "#f4a460",
			seagreen: "#2e8b57",
			seashell: "#fff5ee",
			sienna: "#a0522d",
			silver: "#c0c0c0",
			skyblue: "#87ceeb",
			slateblue: "#6a5acd",
			slategray: "#708090",
			snow: "#fffafa",
			springgreen: "#00ff7f",
			steelblue: "#4682b4",
			tan: "#d2b48c",
			teal: "#008080",
			thistle: "#d8bfd8",
			tomato: "#ff6347",
			turquoise: "#40e0d0",
			violet: "#ee82ee",
			violetred: "#d02090",
			wheat: "#f5deb3",
			white: "#ffffff",
			whitesmoke: "#f5f5f5",
			yellow: "#ffff00",
			yellowgreen: "#9acd32",
		};
	function B(t) {
		return (function (t, i, n) {
			return w(i) || i < t ? t : i > n ? n : Math.round(i);
		})(0, t, 255);
	}
	function V(t) {
		return (function (t, i, n) {
			return w(i) || i < t ? t : i > n ? n : Math.round(1e4 * i) / 1e4;
		})(0, t, 1);
	}
	function z(t) {
		(t = t.toLowerCase()) in L && (t = L[t]);
		var i,
			n,
			s = ((i = t), null !== (n = S.re.exec(i)) ? S.parse(n) : null);
		if (null !== s) return s;
		var h = (function (t) {
			var i = N.re.exec(t);
			return null !== i ? N.parse(i) : null;
		})(t);
		if (null !== h) return h;
		var r = (function (t) {
			var i = x.re.exec(t);
			return null !== i ? x.parse(i) : null;
		})(t);
		if (null !== r) return r;
		var e = (function (t) {
			var i = D.re.exec(t);
			return null !== i ? D.parse(i) : null;
		})(t);
		return null !== e ? [e[0], e[1], e[2]] : null;
	}
	function P(t) {
		var i = z(t);
		if (null !== i) return i;
		throw new Error(
			"Passed color string " +
				t +
				" does not match any of the known color representations"
		);
	}
	function F(t, i) {
		if (i < 0 || i > 255)
			throw new Error("invalid threshold value, valid values are [0, 255]");
		return (function (t) {
			return 0.199 * t[0] + 0.687 * t[1] + 0.114 * t[2];
		})(t) >= i
			? "white"
			: "black";
	}
	function O(t) {
		return (function (t) {
			return 0 === t.indexOf("#");
		})(t)
			? t
			: ((n = P(t)),
			  (s = 1),
			  "rgba(" +
					(i = [n[0], n[1], n[2], V(s)])[0] +
					", " +
					i[1] +
					", " +
					i[2] +
					", " +
					i[3] +
					")");
		var i, n, s;
	}
	function I(t) {
		return "black" === F(P(t), 160) ? "white" : "black";
	}
	function R(t, i, n, s, h, r) {
		t.fillRect(i, n, r, h),
			t.fillRect(i + r, n, s - 2 * r, r),
			t.fillRect(i + r, n + h - r, s - 2 * r, r),
			t.fillRect(i + s - r, n, r, h);
	}
	function W(t, i, n) {
		t.save(), t.scale(i, i), n(), t.restore();
	}
	function j(t, i, n, s, h, r) {
		t.save(),
			(t.globalCompositeOperation = "copy"),
			(t.fillStyle = r),
			t.fillRect(i, n, s, h),
			t.restore();
	}
	!(function (t) {
		(t.re = /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/),
			(t.parse = function (t) {
				return [
					B(parseInt(t[1] + t[1], 16)),
					B(parseInt(t[2] + t[2], 16)),
					B(parseInt(t[3] + t[3], 16)),
				];
			});
	})(x || (x = {})),
		(function (t) {
			(t.re = /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/),
				(t.parse = function (t) {
					return [
						B(parseInt(t[1], 16)),
						B(parseInt(t[2], 16)),
						B(parseInt(t[3], 16)),
					];
				});
		})(N || (N = {})),
		(function (t) {
			(t.re =
				/^rgb\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*\)$/),
				(t.parse = function (t) {
					return [
						B(parseInt(t[1], 10)),
						B(parseInt(t[2], 10)),
						B(parseInt(t[3], 10)),
					];
				});
		})(S || (S = {})),
		(function (t) {
			(t.re =
				/^rgba\(\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?\d{1,10})\s*,\s*(-?[\d]{0,10}(?:\.\d+)?)\s*\)$/),
				(t.parse = function (t) {
					return [
						B(parseInt(t[1], 10)),
						B(parseInt(t[2], 10)),
						B(parseInt(t[3], 10)),
						V(parseFloat(t[4])),
					];
				});
		})(D || (D = {}));
	var U,
		q = (function () {
			function t(t, i) {
				this.v(t, i);
			}
			return (
				(t.prototype.v = function (t, i) {
					(this.G = t), (this.pt = i);
				}),
				(t.prototype.s = function (t, i, n, s, h, r) {
					if (this.G.tt) {
						t.font = i.gt;
						var e = this.G.yt || !this.G.kt ? i.xt : 0,
							u = i.Nt,
							o = i.St,
							a = i.Dt,
							l = i.Tt,
							f = i.Ct,
							c = this.G.Et,
							v = Math.ceil(n.At(t, c)),
							_ = i.Lt,
							d = i.Bt + o + a,
							w = Math.ceil(0.5 * d),
							M = u + v + l + f + e,
							b = this.pt.Vt;
						this.pt.zt && (b = this.pt.zt);
						var m,
							p,
							g = (b = Math.round(b)) - w,
							y = g + d,
							k = "right" === h,
							x = k ? s : 0,
							N = Math.ceil(s * r),
							S = x;
						if (
							((t.fillStyle = O(this.pt.Pt)),
							(t.lineWidth = 1),
							(t.lineCap = "butt"),
							c)
						) {
							k
								? ((m = x - e), (p = (S = x - M) + f))
								: ((S = x + M), (m = x + e), (p = x + u + e + l));
							var D = Math.max(1, Math.floor(r)),
								T = Math.max(1, Math.floor(u * r)),
								C = k ? N : 0,
								E = Math.round(g * r),
								A = Math.round(S * r),
								L = Math.round(b * r) - Math.floor(0.5 * r),
								B = L + D + (L - E),
								V = Math.round(m * r);
							t.save(),
								t.beginPath(),
								t.moveTo(C, E),
								t.lineTo(A, E),
								t.lineTo(A, B),
								t.lineTo(C, B),
								t.fill(),
								(t.fillStyle = this.G.Ft),
								t.fillRect(k ? N - T : 0, E, T, B - E),
								this.G.yt &&
									((t.fillStyle = this.pt.et), t.fillRect(C, L, V - C, D)),
								(t.textAlign = "left"),
								(t.fillStyle = this.pt.et),
								W(t, r, function () {
									t.fillText(c, p, y - a - _);
								}),
								t.restore();
						}
					}
				}),
				(t.prototype.wt = function (t, i) {
					return this.G.tt ? t.Bt + t.St + t.Dt : 0;
				}),
				t
			);
		})(),
		H = (function () {
			function t(t) {
				(this.Ot = { Vt: 0, et: "#FFF", Pt: "#000" }),
					(this.It = { Et: "", tt: !1, yt: !0, kt: !1, Ft: "" }),
					(this.Rt = { Et: "", tt: !1, yt: !1, kt: !0, Ft: "" }),
					(this.C = !0),
					(this.Wt = new (t || q)(this.It, this.Ot)),
					(this.jt = new (t || q)(this.Rt, this.Ot));
			}
			return (
				(t.prototype.Et = function () {
					return this.It.Et;
				}),
				(t.prototype.Pt = function () {
					return this.Ot.Pt;
				}),
				(t.prototype.et = function () {
					return I(this.Pt());
				}),
				(t.prototype.Vt = function () {
					return this.Ut(), this.Ot.Vt;
				}),
				(t.prototype.B = function () {
					this.C = !0;
				}),
				(t.prototype.wt = function (t, i) {
					return (
						void 0 === i && (i = !1),
						Math.max(this.Wt.wt(t, i), this.jt.wt(t, i))
					);
				}),
				(t.prototype.qt = function () {
					return this.Ot.zt || 0;
				}),
				(t.prototype.Ht = function (t) {
					this.Ot.zt = t;
				}),
				(t.prototype.Yt = function () {
					return this.Ut(), this.It.tt || this.Rt.tt;
				}),
				(t.prototype.Kt = function () {
					return this.Ut(), this.It.tt;
				}),
				(t.prototype.I = function (t) {
					return (
						this.Ut(),
						(this.It.yt = this.It.yt && t.O().drawTicks),
						(this.Rt.yt = this.Rt.yt && t.O().drawTicks),
						this.Wt.v(this.It, this.Ot),
						this.jt.v(this.Rt, this.Ot),
						this.Wt
					);
				}),
				(t.prototype.$t = function () {
					return (
						this.Ut(),
						this.Wt.v(this.It, this.Ot),
						this.jt.v(this.Rt, this.Ot),
						this.jt
					);
				}),
				(t.prototype.Ut = function () {
					this.C &&
						((this.It.yt = !0),
						(this.Rt.yt = !1),
						this.Xt(this.It, this.Rt, this.Ot));
				}),
				t
			);
		})(),
		Y = (function (t) {
			function i(i, n, s) {
				var h = t.call(this) || this;
				return (h.lt = i), (h.Zt = n), (h.Jt = s), h;
			}
			return (
				r(i, t),
				(i.prototype.Xt = function (t, i, n) {
					t.tt = !1;
					var s = this.lt.O().horzLine;
					if (s.labelVisible) {
						var h = this.Zt.q();
						if (this.lt.tt() && !this.Zt.Gt() && null !== h) {
							(n.Pt = s.labelBackgroundColor),
								(n.et = I(s.labelBackgroundColor));
							var r = this.Jt(this.Zt);
							(n.Vt = r.Vt), (t.Et = this.Zt.Qt(r.F, h)), (t.tt = !0);
						}
					}
				}),
				i
			);
		})(H),
		K = /[1-9]/g,
		$ = (function () {
			function t() {
				this.G = null;
			}
			return (
				(t.prototype.v = function (t) {
					this.G = t;
				}),
				(t.prototype.s = function (t, i, n) {
					var s = this;
					if (null !== this.G && !1 !== this.G.tt && 0 !== this.G.Et.length) {
						t.font = i.gt;
						var h = Math.round(i.ti.At(t, this.G.Et, K));
						if (!(h <= 0)) {
							t.save();
							var r = i.ii,
								e = h + 2 * r,
								u = e / 2,
								o = this.G.dt,
								a = this.G.Vt,
								f = Math.floor(a - u) + 0.5;
							f < 0
								? ((a += Math.abs(0 - f)), (f = Math.floor(a - u) + 0.5))
								: f + e > o &&
								  ((a -= Math.abs(o - (f + e))), (f = Math.floor(a - u) + 0.5));
							var c = f + e,
								v = 0 + i.Nt + i.St + i.Bt + i.Dt;
							t.fillStyle = this.G.Pt;
							var _ = Math.round(f * n),
								d = Math.round(0 * n),
								w = Math.round(c * n),
								M = Math.round(v * n);
							t.fillRect(_, d, w - _, M - d);
							var b = Math.round(this.G.Vt * n),
								m = d,
								p = Math.round((m + i.Nt + i.xt) * n);
							t.fillStyle = this.G.et;
							var g = Math.max(1, Math.floor(n)),
								y = Math.floor(0.5 * n);
							t.fillRect(b - y, m, g, p - m);
							var k = v - i.Lt - i.Dt;
							(t.textAlign = "left"),
								(t.fillStyle = this.G.et),
								W(t, n, function () {
									t.fillText(l(s.G).Et, f + r, k);
								}),
								t.restore();
						}
					}
				}),
				t
			);
		})(),
		X = (function (t) {
			function i(i, n, s) {
				var h = t.call(this) || this;
				return (
					(h.C = !0),
					(h.at = new $()),
					(h.ot = {
						tt: !1,
						Pt: "#4c525e",
						et: "white",
						Et: "",
						dt: 0,
						Vt: NaN,
					}),
					(h.L = i),
					(h.ni = n),
					(h.Jt = s),
					h
				);
			}
			return (
				r(i, t),
				(i.prototype.B = function () {
					this.C = !0;
				}),
				(i.prototype.I = function () {
					return (
						this.C && (this.R(), (this.C = !1)), this.at.v(this.ot), this.at
					);
				}),
				(i.prototype.R = function () {
					var t = this.ot;
					t.tt = !1;
					var i = this.L.O().vertLine;
					if (i.labelVisible) {
						var n = this.ni.j();
						if (!n.Gt()) {
							var s = n.si(this.L.W());
							t.dt = n.dt();
							var h = this.Jt();
							h.P &&
								((t.Vt = h.Vt),
								(t.Et = n.hi(l(s))),
								(t.tt = !0),
								(t.Pt = i.labelBackgroundColor),
								(t.et = I(i.labelBackgroundColor)));
						}
					}
				}),
				i
			);
		})(
			(function () {
				function t() {
					(this.ri = ""), (this.ei = "#585858"), (this.ui = 0);
				}
				return (
					(t.prototype.Et = function () {
						return this.ri;
					}),
					(t.prototype.Pt = function () {
						return this.ei;
					}),
					(t.prototype.et = function () {
						return "black" === F(P(this.ei), 150) ? "white" : "black";
					}),
					(t.prototype.Vt = function () {
						return this.ui;
					}),
					t
				);
			})()
		),
		Z = (function () {
			function t() {
				(this.oi = null), (this.ai = 0);
			}
			return (
				(t.prototype.li = function () {
					return this.ai;
				}),
				(t.prototype.fi = function (t) {
					this.ai = t;
				}),
				(t.prototype.X = function () {
					return this.oi;
				}),
				(t.prototype.ci = function (t) {
					this.oi = t;
				}),
				(t.prototype.vi = function (t, i) {
					return [];
				}),
				(t.prototype._i = function (t) {
					return [];
				}),
				(t.prototype.di = function () {
					return [];
				}),
				t
			);
		})();
	!(function (t) {
		(t[(t.Normal = 0)] = "Normal"), (t[(t.Magnet = 1)] = "Magnet");
	})(U || (U = {}));
	var J = (function (t) {
			function i(i, n) {
				var s = t.call(this) || this;
				(s.wi = null),
					(s.Mi = NaN),
					(s.bi = 0),
					(s.mi = !0),
					(s.pi = new Map()),
					(s.gi = !1),
					(s.yi = NaN),
					(s.ki = NaN),
					(s.xi = NaN),
					(s.Ni = NaN),
					(s.ni = i),
					(s.Si = n),
					(s.Di = new C(i, s));
				var h, r;
				s.Ti =
					((h = function () {
						return s.Mi;
					}),
					(r = function () {
						return s.ki;
					}),
					function (t) {
						var i = r(),
							n = h();
						if (t === l(s.wi).Ci()) return { F: n, Vt: i };
						var e = l(t.q());
						return { F: t.Ei(i, e), Vt: i };
					});
				var e = (function (t, i) {
					return function () {
						return { P: s.ni.j().si(t()), Vt: i() };
					};
				})(
					function () {
						return s.bi;
					},
					function () {
						return s.Mt();
					}
				);
				return (s.Ai = new X(s, i, e)), (s.Li = new A(s)), s;
			}
			return (
				r(i, t),
				(i.prototype.Bi = function () {
					return this.bi;
				}),
				(i.prototype.O = function () {
					return this.Si;
				}),
				(i.prototype.Vi = function (t, i) {
					(this.xi = t), (this.Ni = i);
				}),
				(i.prototype.zi = function () {
					(this.xi = NaN), (this.Ni = NaN);
				}),
				(i.prototype.Pi = function () {
					return this.xi;
				}),
				(i.prototype.Fi = function () {
					return this.Ni;
				}),
				(i.prototype.Oi = function (t, i, n) {
					this.gi || (this.gi = !0), (this.mi = !0), this.Ii(t, i, n);
				}),
				(i.prototype.W = function () {
					return this.bi;
				}),
				(i.prototype.Mt = function () {
					return this.yi;
				}),
				(i.prototype.bt = function () {
					return this.ki;
				}),
				(i.prototype.tt = function () {
					return this.mi;
				}),
				(i.prototype.Ri = function () {
					(this.mi = !1),
						this.Wi(),
						(this.Mi = NaN),
						(this.yi = NaN),
						(this.ki = NaN),
						(this.wi = null),
						this.zi();
				}),
				(i.prototype._i = function (t) {
					return null !== this.wi ? [this.Li, this.Di] : [];
				}),
				(i.prototype.vt = function (t) {
					return t === this.wi && this.Si.horzLine.visible;
				}),
				(i.prototype._t = function () {
					return this.Si.vertLine.visible;
				}),
				(i.prototype.vi = function (t, i) {
					(this.mi && this.wi === t) || this.pi.clear();
					var n = [];
					return this.wi === t && n.push(this.ji(this.pi, i, this.Ti)), n;
				}),
				(i.prototype.di = function () {
					return this.mi ? [this.Ai] : [];
				}),
				(i.prototype.ft = function () {
					return this.wi;
				}),
				(i.prototype.Ui = function () {
					this.pi.forEach(function (t) {
						return t.B();
					}),
						this.Ai.B(),
						this.Di.B();
				}),
				(i.prototype.qi = function (t) {
					return t && !t.Ci().Gt() ? t.Ci() : null;
				}),
				(i.prototype.Ii = function (t, i, n) {
					this.Hi(t, i, n) && this.Ui();
				}),
				(i.prototype.Hi = function (t, i, n) {
					var s = this.yi,
						h = this.ki,
						r = this.Mi,
						e = this.bi,
						u = this.wi,
						o = this.qi(n);
					(this.bi = t),
						(this.yi = isNaN(t) ? NaN : this.ni.j().J(t)),
						(this.wi = n);
					var a = null !== o ? o.q() : null;
					return (
						null !== o && null !== a
							? ((this.Mi = i), (this.ki = o.$(i, a)))
							: ((this.Mi = NaN), (this.ki = NaN)),
						s !== this.yi ||
							h !== this.ki ||
							e !== this.bi ||
							r !== this.Mi ||
							u !== this.wi
					);
				}),
				(i.prototype.Wi = function () {
					var t = this.ni
							.V()
							.map(function (t) {
								return t.Ki().Yi();
							})
							.filter(m),
						i = 0 === t.length ? null : Math.max.apply(Math, t);
					this.bi = null !== i ? i : NaN;
				}),
				(i.prototype.ji = function (t, i, n) {
					var s = t.get(i);
					return void 0 === s && ((s = new Y(this, i, n)), t.set(i, s)), s;
				}),
				i
			);
		})(Z),
		G = ".",
		Q = "'";
	function tt(t, i) {
		if (!v(t)) return "n/a";
		if (!_(i)) throw new TypeError("invalid length");
		if (i < 0 || i > 16) throw new TypeError("invalid length");
		if (0 === i) return t.toString();
		return ("0000000000000000" + t.toString()).slice(-i);
	}
	var it = (function () {
			function t(t, i, n, s) {
				if ((i || (i = 1), (v(t) && _(t)) || (t = 100), t < 0))
					throw new TypeError("invalid base");
				(this.Zt = t),
					(this.$i = i),
					(this.Xi = s),
					(n && void 0 !== s && s > 0 && 2 !== s && 4 !== s && 8 !== s) ||
						((this.Zi = n), this.Ji());
			}
			return (
				(t.prototype.Gi = function (t) {
					var i = t < 0 ? "−" : "";
					return (t = Math.abs(t)), this.Zi ? i + this.Qi(t) : i + this.tn(t);
				}),
				(t.prototype.Ji = function () {
					if (((this.in = 0), this.Zt > 0 && this.$i > 0)) {
						var t = this.Zt;
						for (this.Zi && this.Xi && (t /= this.Xi); t > 1; )
							(t /= 10), this.in++;
					}
				}),
				(t.prototype.tn = function (t) {
					var i;
					i = this.Zi ? Math.pow(10, this.in || 0) : this.Zt / this.$i;
					var n = Math.floor(t),
						s = "",
						h = void 0 !== this.in ? this.in : NaN;
					if (i > 1) {
						var r = +(Math.round(t * i) - n * i).toFixed(this.in);
						r >= i && ((r -= i), (n += 1)),
							(s = G + tt(+r.toFixed(this.in) * this.$i, h));
					} else (n = Math.round(n * i) / i), h > 0 && (s = G + tt(0, h));
					return n.toFixed(0) + s;
				}),
				(t.prototype.Qi = function (t) {
					var i = this.Zt / this.$i,
						n = Math.floor(t),
						s = Math.round(t * i) - n * i;
					if ((s === i && ((s = 0), (n += 1)), !this.in))
						throw new Error("_fractionalLength is not calculated");
					var h = "";
					if (this.Xi) {
						var r = s % this.Xi,
							e = tt((s = (s - r) / this.Xi), this.in),
							u =
								2 === this.Xi
									? ["0", "5"][r]
									: 8 === this.Xi
									? ["0", "1", "2", "3", "4", "5", "6", "7"][r]
									: ["0", "2", "5", "7"][r];
						h = e + Q + u;
					} else h = tt(s * this.$i, this.in);
					return n.toString() + Q + h;
				}),
				t
			);
		})(),
		nt = (function (t) {
			function i(i) {
				return void 0 === i && (i = 100), t.call(this, i) || this;
			}
			return (
				r(i, t),
				(i.prototype.Gi = function (i) {
					return t.prototype.Gi.call(this, i) + "%";
				}),
				i
			);
		})(it),
		st = (function () {
			function t() {
				this.nn = [];
			}
			return (
				(t.prototype.sn = function (t, i, n) {
					var s = { hn: t, rn: i, en: !0 === n };
					this.nn.push(s);
				}),
				(t.prototype.un = function (t) {
					var i = this.nn.findIndex(function (i) {
						return t === i.hn;
					});
					i > -1 && this.nn.splice(i, 1);
				}),
				(t.prototype.on = function (t) {
					this.nn = this.nn.filter(function (i) {
						return i.rn === t;
					});
				}),
				(t.prototype.an = function (t, i) {
					var n = u(this.nn);
					(this.nn = this.nn.filter(function (t) {
						return !t.en;
					})),
						n.forEach(function (n) {
							return n.hn(t, i);
						});
				}),
				(t.prototype.ln = function () {
					return this.nn.length > 0;
				}),
				(t.prototype.fn = function () {
					this.nn = [];
				}),
				t
			);
		})(),
		ht = (function () {
			function t(t, i) {
				(this.cn = t), (this.vn = i);
			}
			return (
				(t.prototype._n = function (t) {
					return null !== t && this.cn === t.cn && this.vn === t.vn;
				}),
				(t.prototype.dn = function () {
					return new t(this.cn, this.vn);
				}),
				(t.prototype.wn = function () {
					return this.cn;
				}),
				(t.prototype.Mn = function (t) {
					this.cn = t;
				}),
				(t.prototype.bn = function () {
					return this.vn;
				}),
				(t.prototype.mn = function (t) {
					this.vn = t;
				}),
				(t.prototype.pn = function () {
					return this.vn - this.cn;
				}),
				(t.prototype.Gt = function () {
					return (
						this.vn === this.cn ||
						Number.isNaN(this.vn) ||
						Number.isNaN(this.cn)
					);
				}),
				(t.prototype.gn = function (i) {
					return null === i
						? this
						: new t(Math.min(this.wn(), i.wn()), Math.max(this.bn(), i.bn()));
				}),
				(t.prototype.yn = function (t, i) {
					(this.cn = Math.min(this.cn, t)), (this.vn = Math.max(this.vn, i));
				}),
				(t.prototype.kn = function (t, i) {
					(this.cn = t), (this.vn = i);
				}),
				(t.prototype.xn = function (t) {
					if (v(t) && 0 !== this.vn - this.cn) {
						var i = 0.5 * (this.vn + this.cn),
							n = this.vn - i,
							s = this.cn - i;
						(n *= t), (s *= t), (this.vn = i + n), (this.cn = i + s);
					}
				}),
				(t.prototype.Nn = function (t) {
					v(t) && ((this.vn += t), (this.cn += t));
				}),
				(t.prototype.Sn = function (t) {
					return t.wn() > this.cn && t.bn() < this.vn;
				}),
				(t.prototype.Dn = function () {
					return { minValue: this.cn, maxValue: this.vn };
				}),
				(t.Tn = function (i) {
					return null === i ? null : new t(i.minValue, i.maxValue);
				}),
				t
			);
		})();
	function rt(t, i, n) {
		return Math.min(Math.max(t, i), n);
	}
	function et(t, i, n) {
		return i - t <= n;
	}
	function ut(t) {
		return t <= 0 ? NaN : Math.log(t) / Math.log(10);
	}
	function ot(t) {
		var i = Math.ceil(t);
		return i % 2 != 0 ? i - 1 : i;
	}
	function at(t) {
		var i = Math.ceil(t);
		return i % 2 == 0 ? i - 1 : i;
	}
	function lt(t, i) {
		var n = (100 * (t - i)) / i;
		return i < 0 ? -n : n;
	}
	function ft(t, i) {
		var n = lt(t.wn(), i),
			s = lt(t.bn(), i);
		return new ht(n, s);
	}
	function ct(t, i) {
		var n = (100 * (t - i)) / i + 100;
		return i < 0 ? -n : n;
	}
	function vt(t, i) {
		var n = ct(t.wn(), i),
			s = ct(t.bn(), i);
		return new ht(n, s);
	}
	function _t(t) {
		var i = Math.abs(t);
		if (i < 1e-8) return 0;
		var n = ut(i + 1e-4) + 4;
		return t < 0 ? -n : n;
	}
	function dt(t) {
		var i = Math.abs(t);
		if (i < 1e-8) return 0;
		var n = Math.pow(10, i - 4) - 1e-4;
		return t < 0 ? -n : n;
	}
	function wt(t) {
		if (null === t) return null;
		var i = _t(t.wn()),
			n = _t(t.bn());
		return new ht(i, n);
	}
	var Mt,
		bt = (function () {
			function t(t, i) {
				if (
					((this.Cn = t),
					(this.En = i),
					(function (t) {
						if (t < 0) return !1;
						for (var i = t; i > 1; i /= 10) if (i % 10 != 0) return !1;
						return !0;
					})(this.Cn))
				)
					this.An = [2, 2.5, 2];
				else {
					this.An = [];
					for (var n = this.Cn; 1 !== n; ) {
						if (n % 2 == 0) this.An.push(2), (n /= 2);
						else {
							if (n % 5 != 0) throw new Error("unexpected base");
							this.An.push(2), this.An.push(2.5), (n /= 5);
						}
						if (this.An.length > 100)
							throw new Error("something wrong with base");
					}
				}
			}
			return (
				(t.prototype.Ln = function (t, i, n) {
					for (
						var s,
							h,
							r,
							e = 0 === this.Cn ? 0 : 1 / this.Cn,
							u = Math.pow(10, Math.max(0, Math.ceil(ut(t - i)))),
							o = 0,
							a = this.En[0];
						;

					) {
						var l = et(u, e, 1e-9) && u > e + 1e-9,
							f = et(u, n * a, 1e-9),
							c = et(u, 1, 1e-9);
						if (!(l && f && c)) break;
						(u /= a), (a = this.En[++o % this.En.length]);
					}
					if (
						(u <= e + 1e-9 && (u = e),
						(u = Math.max(1, u)),
						this.An.length > 0 &&
							((s = u), (h = 1), (r = 1e-9), Math.abs(s - h) < r))
					)
						for (o = 0, a = this.An[0]; et(u, n * a, 1e-9) && u > e + 1e-9; )
							(u /= a), (a = this.An[++o % this.An.length]);
					return u;
				}),
				t
			);
		})(),
		mt = (function () {
			function t(t, i, n, s) {
				(this.Bn = []),
					(this.Zt = t),
					(this.Cn = i),
					(this.Vn = n),
					(this.zn = s);
			}
			return (
				(t.prototype.Pn = function (t) {
					if (t < 0) throw new Error("base < 0");
					this.Cn = t;
				}),
				(t.prototype.Ln = function (t, i) {
					if (t < i) throw new Error("high < low");
					var n = this.Zt.wt(),
						s = ((t - i) * this.Fn()) / n,
						h = new bt(this.Cn, [2, 2.5, 2]),
						r = new bt(this.Cn, [2, 2, 2.5]),
						e = new bt(this.Cn, [2.5, 2, 2]),
						u = [];
					return (
						u.push(h.Ln(t, i, s)),
						u.push(r.Ln(t, i, s)),
						u.push(e.Ln(t, i, s)),
						(function (t) {
							if (t.length < 1) throw Error("array is empty");
							for (var i = t[0], n = 1; n < t.length; ++n)
								t[n] < i && (i = t[n]);
							return i;
						})(u)
					);
				}),
				(t.prototype.On = function () {
					var t = this.Zt,
						i = t.q();
					if (null !== i) {
						var n = t.wt(),
							s = this.Vn(n - 1, i),
							h = this.Vn(0, i),
							r = this.Zt.O().entireTextOnly ? this.In() / 2 : 0,
							e = r,
							u = n - 1 - r,
							o = Math.max(s, h),
							a = Math.min(s, h);
						if (o !== a) {
							for (
								var l = this.Ln(o, a),
									f = o % l,
									c = o >= a ? 1 : -1,
									v = null,
									_ = 0,
									d = o - (f += f < 0 ? l : 0);
								d > a;
								d -= l
							) {
								var w = this.zn(d, i, !0);
								(null !== v && Math.abs(w - v) < this.Fn()) ||
									w < e ||
									w > u ||
									(_ < this.Bn.length
										? ((this.Bn[_].Rn = w), (this.Bn[_].Wn = t.jn(d)))
										: this.Bn.push({ Rn: w, Wn: t.jn(d) }),
									_++,
									(v = w),
									t.Un() && (l = this.Ln(d * c, a)));
							}
							this.Bn.length = _;
						} else this.Bn = [];
					} else this.Bn = [];
				}),
				(t.prototype.qn = function () {
					return this.Bn;
				}),
				(t.prototype.In = function () {
					return this.Zt.Bt();
				}),
				(t.prototype.Fn = function () {
					return Math.ceil(2.5 * this.In());
				}),
				t
			);
		})();
	function pt(t) {
		return t.slice().sort(function (t, i) {
			return l(t.li()) - l(i.li());
		});
	}
	!(function (t) {
		(t[(t.Normal = 0)] = "Normal"),
			(t[(t.Logarithmic = 1)] = "Logarithmic"),
			(t[(t.Percentage = 2)] = "Percentage"),
			(t[(t.IndexedTo100 = 3)] = "IndexedTo100");
	})(Mt || (Mt = {}));
	var gt,
		yt = new nt(),
		kt = new it(100, 1),
		xt = (function () {
			function t(t, i, n, s) {
				(this.Hn = 0),
					(this.Yn = null),
					(this.Kn = new st()),
					(this.$n = null),
					(this.Xn = null),
					(this.Zn = new st()),
					(this.Jn = { Gn: !1, Qn: null }),
					(this.ts = 0),
					(this.ns = 0),
					(this.ss = new st()),
					(this.hs = new st()),
					(this.rs = []),
					(this.es = null),
					(this.us = null),
					(this.os = null),
					(this.as = null),
					(this.ls = kt),
					(this.fs = new st()),
					(this.cs = t),
					(this.Si = i),
					(this.vs = n),
					(this._s = s),
					(this.ds = new mt(this, 100, this.ws.bind(this), this.Ms.bind(this)));
			}
			return (
				(t.prototype.bs = function () {
					return this.cs;
				}),
				(t.prototype.O = function () {
					return this.Si;
				}),
				(t.prototype.ms = function (t) {
					if (
						(c(this.Si, t),
						this.ps(),
						void 0 !== t.mode && this.gs({ ys: t.mode }),
						this.fs.an(),
						void 0 !== t.scaleMargins)
					) {
						var i = a(t.scaleMargins.top),
							n = a(t.scaleMargins.bottom);
						if (i < 0 || i > 1)
							throw new Error(
								"Invalid top margin - expect value between 0 and 1, given=" + i
							);
						if (n < 0 || n > 1 || i + n > 1)
							throw new Error(
								"Invalid bottom margin - expect value between 0 and 1, given=" +
									n
							);
						if (i + n > 1)
							throw new Error(
								"Invalid margins - sum of margins must be less than 1, given=" +
									(i + n)
							);
						this.ks(), (this.us = null);
					}
				}),
				(t.prototype.xs = function () {
					return this.fs;
				}),
				(t.prototype.Ns = function () {
					return this.Si.autoScale;
				}),
				(t.prototype.Un = function () {
					return 1 === this.Si.mode;
				}),
				(t.prototype.Ss = function () {
					return 2 === this.Si.mode;
				}),
				(t.prototype.Ds = function () {
					return 3 === this.Si.mode;
				}),
				(t.prototype.ys = function () {
					return {
						Ts: this.Si.autoScale,
						Cs: this.Si.invertScale,
						ys: this.Si.mode,
					};
				}),
				(t.prototype.gs = function (t) {
					var i = this.ys(),
						n = null;
					void 0 !== t.Ts && (this.Si.autoScale = t.Ts),
						void 0 !== t.ys &&
							((this.Si.mode = t.ys),
							(2 !== t.ys && 3 !== t.ys) || (this.Si.autoScale = !0),
							(this.Jn.Gn = !1)),
						1 === i.ys &&
							t.ys !== i.ys &&
							(!(function (t) {
								if (null === t) return !1;
								var i = dt(t.wn()),
									n = dt(t.bn());
								return isFinite(i) && isFinite(n);
							})(this.$n)
								? (this.Si.autoScale = !0)
								: null !==
										(n = (function (t) {
											if (null === t) return null;
											var i = dt(t.wn()),
												n = dt(t.bn());
											return new ht(i, n);
										})(this.$n)) && this.Es(n)),
						1 === t.ys &&
							t.ys !== i.ys &&
							null !== (n = wt(this.$n)) &&
							this.Es(n);
					var s = i.ys !== this.Si.mode;
					s && (2 === i.ys || this.Ss()) && this.ps(),
						s && (3 === i.ys || this.Ds()) && this.ps(),
						void 0 !== t.Cs &&
							i.Cs !== t.Cs &&
							((this.Si.invertScale = t.Cs), this.As()),
						this.hs.an(i, this.ys());
				}),
				(t.prototype.Ls = function () {
					return this.hs;
				}),
				(t.prototype.Bt = function () {
					return this.vs.fontSize;
				}),
				(t.prototype.wt = function () {
					return this.Hn;
				}),
				(t.prototype.Bs = function (t) {
					this.Hn !== t && ((this.Hn = t), this.ks(), (this.us = null));
				}),
				(t.prototype.Vs = function () {
					if (this.Yn) return this.Yn;
					var t = this.wt() - this.zs() - this.Ps();
					return (this.Yn = t), t;
				}),
				(t.prototype.Fs = function () {
					return this.Kn;
				}),
				(t.prototype.Os = function () {
					return this.Is(), this.$n;
				}),
				(t.prototype.Rs = function () {
					return this.Zn;
				}),
				(t.prototype.Es = function (t, i, n) {
					var s = this.$n;
					(i || (null === s && null !== t) || (null !== s && !s._n(t))) &&
						((this.us = null), (this.$n = t), n || this.Zn.an(s, t));
				}),
				(t.prototype.Gt = function () {
					return this.Is(), 0 === this.Hn || !this.$n || this.$n.Gt();
				}),
				(t.prototype.Ws = function (t) {
					return this.Cs() ? t : this.wt() - 1 - t;
				}),
				(t.prototype.$ = function (t, i) {
					return (
						this.Ss() ? (t = lt(t, i)) : this.Ds() && (t = ct(t, i)),
						this.Ms(t, i)
					);
				}),
				(t.prototype.js = function (t, i, n) {
					this.Is();
					for (
						var s = this.Ps(),
							h = l(this.Os()),
							r = h.wn(),
							e = h.bn(),
							u = this.Vs() - 1,
							o = this.Cs(),
							a = u / (e - r),
							f = void 0 === n ? 0 : n.from,
							c = void 0 === n ? t.length : n.to,
							v = this.Us(),
							_ = f;
						_ < c;
						_++
					) {
						var d = t[_],
							w = d.F;
						if (!isNaN(w)) {
							var M = w;
							null !== v && (M = v(d.F, i));
							var b = s + a * (M - r),
								m = o ? b : this.Hn - 1 - b;
							d.p = m;
						}
					}
				}),
				(t.prototype.qs = function (t, i, n) {
					this.Is();
					for (
						var s = this.Ps(),
							h = l(this.Os()),
							r = h.wn(),
							e = h.bn(),
							u = this.Vs() - 1,
							o = this.Cs(),
							a = u / (e - r),
							f = void 0 === n ? 0 : n.from,
							c = void 0 === n ? t.length : n.to,
							v = this.Us(),
							_ = f;
						_ < c;
						_++
					) {
						var d = t[_],
							w = d.open,
							M = d.high,
							b = d.low,
							m = d.close;
						null !== v &&
							((w = v(d.open, i)),
							(M = v(d.high, i)),
							(b = v(d.low, i)),
							(m = v(d.close, i)));
						var p = s + a * (w - r),
							g = o ? p : this.Hn - 1 - p;
						(d.Hs = g),
							(p = s + a * (M - r)),
							(g = o ? p : this.Hn - 1 - p),
							(d.Ys = g),
							(p = s + a * (b - r)),
							(g = o ? p : this.Hn - 1 - p),
							(d.Ks = g),
							(p = s + a * (m - r)),
							(g = o ? p : this.Hn - 1 - p),
							(d.$s = g);
					}
				}),
				(t.prototype.Ei = function (t, i) {
					var n = this.ws(t, i);
					return this.Xs(n, i);
				}),
				(t.prototype.Xs = function (t, i) {
					var n = t;
					return (
						this.Ss()
							? (n = (function (t, i) {
									return i < 0 && (t = -t), (t / 100) * i + i;
							  })(n, i))
							: this.Ds() &&
							  (n = (function (t, i) {
									return (t -= 100), i < 0 && (t = -t), (t / 100) * i + i;
							  })(n, i)),
						n
					);
				}),
				(t.prototype.Zs = function () {
					return this.rs;
				}),
				(t.prototype.Js = function () {
					if (this.es) return this.es;
					for (var t = [], i = 0; i < this.rs.length; i++) {
						var n = this.rs[i];
						null === n.li() && n.fi(i + 1), t.push(n);
					}
					return (t = pt(t)), (this.es = t), this.es;
				}),
				(t.prototype.Gs = function (t) {
					-1 === this.rs.indexOf(t) && (this.rs.push(t), this.ps(), this.Qs());
				}),
				(t.prototype.th = function (t) {
					var i = this.rs.indexOf(t);
					if (-1 === i) throw new Error("source is not attached to scale");
					this.rs.splice(i, 1),
						this.Gt() && this.gs({ Ts: !0 }),
						this.ps(),
						this.Qs();
				}),
				(t.prototype.q = function () {
					for (var t = null, i = 0, n = this.rs; i < n.length; i++) {
						var s = n[i].q();
						null !== s && (null === t || s.ih < t.ih) && (t = s);
					}
					return null === t ? null : t.Z;
				}),
				(t.prototype.Cs = function () {
					return this.Si.invertScale;
				}),
				(t.prototype.qn = function () {
					return (
						this.us || (this.ds.On(), (this.us = this.ds.qn()), this.ss.an()),
						this.us
					);
				}),
				(t.prototype.nh = function () {
					return this.ss;
				}),
				(t.prototype.sh = function (t) {
					this.Ss() ||
						this.Ds() ||
						(null === this.os &&
							null === this.Xn &&
							(this.Gt() ||
								((this.os = this.Hn - t), (this.Xn = l(this.Os()).dn()))));
				}),
				(t.prototype.hh = function (t) {
					if (!this.Ss() && !this.Ds() && null !== this.os) {
						this.gs({ Ts: !1 }), (t = this.Hn - t) < 0 && (t = 0);
						var i = (this.os + 0.2 * (this.Hn - 1)) / (t + 0.2 * (this.Hn - 1)),
							n = l(this.Xn).dn();
						(i = Math.max(i, 0.1)), n.xn(i), this.Es(n);
					}
				}),
				(t.prototype.rh = function () {
					this.Ss() || this.Ds() || ((this.os = null), (this.Xn = null));
				}),
				(t.prototype.eh = function (t) {
					this.Ns() ||
						(null === this.as &&
							null === this.Xn &&
							(this.Gt() || ((this.as = t), (this.Xn = l(this.Os()).dn()))));
				}),
				(t.prototype.uh = function (t) {
					if (!this.Ns() && null !== this.as) {
						var i = l(this.Os()).pn() / (this.Vs() - 1),
							n = t - this.as;
						this.Cs() && (n *= -1);
						var s = n * i,
							h = l(this.Xn).dn();
						h.Nn(s), this.Es(h, !0), (this.us = null);
					}
				}),
				(t.prototype.oh = function () {
					this.Ns() ||
						(null !== this.as && ((this.as = null), (this.Xn = null)));
				}),
				(t.prototype.ah = function () {
					return this.ls || this.ps(), this.ls;
				}),
				(t.prototype.Qt = function (t, i) {
					switch (this.Si.mode) {
						case 2:
							return this.ah().Gi(lt(t, i));
						case 3:
							return this.ah().Gi(ct(t, i));
						default:
							return this.lh(t);
					}
				}),
				(t.prototype.jn = function (t) {
					switch (this.Si.mode) {
						case 2:
						case 3:
							return this.ah().Gi(t);
						default:
							return this.lh(t);
					}
				}),
				(t.prototype.fh = function (t) {
					return this.lh(t, l(this.vh()).ah());
				}),
				(t.prototype._h = function (t, i) {
					return (t = lt(t, i)), yt.Gi(t);
				}),
				(t.prototype.dh = function () {
					return this.rs;
				}),
				(t.prototype.wh = function (t) {
					this.Jn = { Qn: t, Gn: !1 };
				}),
				(t.prototype.Ui = function () {
					this.rs.forEach(function (t) {
						return t.Ui();
					});
				}),
				(t.prototype.ps = function () {
					this.us = null;
					var t = this.vh(),
						i = 100;
					null !== t && (i = Math.round(1 / t.Mh())),
						(this.ls = kt),
						this.Ss()
							? ((this.ls = yt), (i = 100))
							: this.Ds()
							? ((this.ls = new it(100, 1)), (i = 100))
							: null !== t && (this.ls = t.ah()),
						(this.ds = new mt(this, i, this.ws.bind(this), this.Ms.bind(this))),
						this.ds.On();
				}),
				(t.prototype.Qs = function () {
					this.es = null;
				}),
				(t.prototype.vh = function () {
					return this.rs[0] || null;
				}),
				(t.prototype.zs = function () {
					return this.Cs()
						? this.Si.scaleMargins.bottom * this.wt() + this.ns
						: this.Si.scaleMargins.top * this.wt() + this.ts;
				}),
				(t.prototype.Ps = function () {
					return this.Cs()
						? this.Si.scaleMargins.top * this.wt() + this.ts
						: this.Si.scaleMargins.bottom * this.wt() + this.ns;
				}),
				(t.prototype.Is = function () {
					this.Jn.Gn || ((this.Jn.Gn = !0), this.bh());
				}),
				(t.prototype.ks = function () {
					(this.Yn = null), this.Kn.an();
				}),
				(t.prototype.Ms = function (t, i) {
					if ((this.Is(), this.Gt())) return 0;
					t = this.Un() && t ? _t(t) : t;
					var n = l(this.Os()),
						s = this.Ps() + ((this.Vs() - 1) * (t - n.wn())) / n.pn();
					return this.Ws(s);
				}),
				(t.prototype.ws = function (t, i) {
					if ((this.Is(), this.Gt())) return 0;
					var n = this.Ws(t),
						s = l(this.Os()),
						h = s.wn() + s.pn() * ((n - this.Ps()) / (this.Vs() - 1));
					return this.Un() ? dt(h) : h;
				}),
				(t.prototype.As = function () {
					(this.us = null), this.ds.On();
				}),
				(t.prototype.bh = function () {
					var t = this.Jn.Qn;
					if (null !== t) {
						for (
							var i = null, n = 0, s = 0, h = 0, r = this.dh();
							h < r.length;
							h++
						) {
							var e = r[h],
								u = e.q();
							if (null !== u) {
								var o = e.mh(t.ph(), t.gh()),
									a = o && o.Os();
								if (null !== a) {
									switch (this.Si.mode) {
										case 1:
											a = wt(a);
											break;
										case 2:
											a = ft(a, u.Z);
											break;
										case 3:
											a = vt(a, u.Z);
									}
									if (((i = null === i ? a : i.gn(l(a))), null !== o)) {
										var f = o.yh();
										null !== f &&
											((n = Math.max(n, f.above)), (s = Math.max(n, f.below)));
									}
								}
							}
						}
						if (
							((n === this.ts && s === this.ns) ||
								((this.ts = n), (this.ns = s), (this.us = null), this.ks()),
							null !== i)
						) {
							if (i.wn() === i.bn()) {
								var c = this.vh(),
									v = 5 * (null === c || this.Ss() || this.Ds() ? 1 : c.Mh());
								i = new ht(i.wn() - v, i.bn() + v);
							}
							this.Es(i);
						} else null === this.$n && this.Es(new ht(-0.5, 0.5));
						this.Jn.Gn = !0;
					}
				}),
				(t.prototype.Us = function () {
					return this.Ss() ? lt : this.Ds() ? ct : this.Un() ? _t : null;
				}),
				(t.prototype.lh = function (t, i) {
					return void 0 === this._s.priceFormatter
						? (void 0 === i && (i = this.ah()), i.Gi(t))
						: this._s.priceFormatter(t);
				}),
				t
			);
		})();
	function Nt(t) {
		void 0 !== t.borderColor &&
			((t.borderUpColor = t.borderColor), (t.borderDownColor = t.borderColor)),
			void 0 !== t.wickColor &&
				((t.wickUpColor = t.wickColor), (t.wickDownColor = t.wickColor));
	}
	!(function (t) {
		(t[(t.LastBar = 0)] = "LastBar"), (t[(t.LastVisible = 1)] = "LastVisible");
	})(gt || (gt = {}));
	var St = function (t) {
		return t.getUTCFullYear();
	};
	function Dt(t, i, n) {
		return i
			.replace(
				/yyyy/g,
				(function (t) {
					return tt(St(t), 4);
				})(t)
			)
			.replace(
				/yy/g,
				(function (t) {
					return tt(St(t) % 100, 2);
				})(t)
			)
			.replace(
				/MMMM/g,
				(function (t, i) {
					return new Date(
						t.getUTCFullYear(),
						t.getUTCMonth(),
						1
					).toLocaleString(i, { month: "long" });
				})(t, n)
			)
			.replace(
				/MMM/g,
				(function (t, i) {
					return new Date(
						t.getUTCFullYear(),
						t.getUTCMonth(),
						1
					).toLocaleString(i, { month: "short" });
				})(t, n)
			)
			.replace(
				/MM/g,
				(function (t) {
					return tt(
						(function (t) {
							return t.getUTCMonth() + 1;
						})(t),
						2
					);
				})(t)
			)
			.replace(
				/dd/g,
				(function (t) {
					return tt(
						(function (t) {
							return t.getUTCDate();
						})(t),
						2
					);
				})(t)
			);
	}
	var Tt = (function () {
			function t(t, i) {
				void 0 === t && (t = "yyyy-MM-dd"),
					void 0 === i && (i = "default"),
					(this.kh = t),
					(this.xh = i);
			}
			return (
				(t.prototype.Gi = function (t) {
					return Dt(t, this.kh, this.xh);
				}),
				t
			);
		})(),
		Ct = (function () {
			function t(t) {
				this.Nh = t || "%h:%m:%s";
			}
			return (
				(t.prototype.Gi = function (t) {
					return this.Nh.replace("%h", tt(t.getUTCHours(), 2))
						.replace("%m", tt(t.getUTCMinutes(), 2))
						.replace("%s", tt(t.getUTCSeconds(), 2));
				}),
				t
			);
		})(),
		Et = { Sh: "yyyy-MM-dd", Dh: "%h:%m:%s", Th: " ", Ch: "default" },
		At = (function () {
			function t(t) {
				void 0 === t && (t = {});
				var i = e(e({}, Et), t);
				(this.Eh = new Tt(i.Sh, i.Ch)),
					(this.Ah = new Ct(i.Dh)),
					(this.Lh = i.Th);
			}
			return (
				(t.prototype.Gi = function (t) {
					return "" + this.Eh.Gi(t) + this.Lh + this.Ah.Gi(t);
				}),
				t
			);
		})();
	var Lt = (function () {
			function t(t, i) {
				void 0 === i && (i = 50),
					(this.Bh = 0),
					(this.Vh = 1),
					(this.zh = 1),
					(this.Ph = new Map()),
					(this.Fh = new Map()),
					(this.Oh = t),
					(this.Ih = i);
			}
			return (
				(t.prototype.Gi = function (t) {
					var i =
							void 0 === t.Rh
								? new Date(1e3 * t.Wh).getTime()
								: new Date(
										Date.UTC(t.Rh.year, t.Rh.month - 1, t.Rh.day)
								  ).getTime(),
						n = this.Ph.get(i);
					if (void 0 !== n) return n.jh;
					if (this.Bh === this.Ih) {
						var s = this.Fh.get(this.zh);
						this.Fh.delete(this.zh), this.Ph.delete(a(s)), this.zh++, this.Bh--;
					}
					var h = this.Oh(t);
					return (
						this.Ph.set(i, { jh: h, Uh: this.Vh }),
						this.Fh.set(this.Vh, i),
						this.Bh++,
						this.Vh++,
						h
					);
				}),
				t
			);
		})(),
		Bt = (function () {
			function t(t, i) {
				o(t <= i, "right should be >= left"), (this.qh = t), (this.Hh = i);
			}
			return (
				(t.prototype.ph = function () {
					return this.qh;
				}),
				(t.prototype.gh = function () {
					return this.Hh;
				}),
				(t.prototype.Yh = function () {
					return this.Hh - this.qh + 1;
				}),
				(t.prototype.Kh = function (t) {
					return this.qh <= t && t <= this.Hh;
				}),
				(t.prototype._n = function (t) {
					return this.qh === t.ph() && this.Hh === t.gh();
				}),
				t
			);
		})();
	function Vt(t, i) {
		return null === t || null === i ? t === i : t._n(i);
	}
	function zt(t, i) {
		return t.Bi - i.Bi;
	}
	var Pt,
		Ft = (function () {
			function t() {
				(this.$h = 1 / 0),
					(this.Xh = -1 / 0),
					(this.Zh = new Map()),
					(this.Jh = []),
					(this.Gh = new st()),
					(this.Ph = null),
					(this.Qh = NaN);
			}
			return (
				(t.prototype.tr = function () {
					this.Zh.clear(),
						(this.Jh = []),
						(this.$h = 1 / 0),
						(this.Xh = -1 / 0),
						(this.Ph = null),
						this.Gh.an();
				}),
				(t.prototype.gn = function (t) {
					for (var i = this.Jh, n = {}, s = 0, h = t; s < h.length; s++) {
						var r = h[s],
							e = r.Bi,
							u = r.ir,
							o = this.Zh.get(r.Bi);
						if (o) {
							if (o.Bi === r.Bi && o.ir === r.ir) {
								o.P = r.P;
								continue;
							}
							this.nr(o);
						}
						this.Zh.set(e, r),
							this.$h > e && (this.$h = e),
							this.Xh < e && (this.Xh = e),
							void 0 === (a = i[u]) && ((a = []), (i[u] = a)),
							a.push(r),
							(n[u] = !0);
					}
					for (u = i.length; u--; ) {
						var a;
						void 0 !== (a = i[u]) &&
							(0 === a.length && delete i[u], n[u] && a.sort(zt));
					}
					(this.Ph = null), this.Gh.an();
				}),
				(t.prototype.sr = function (t) {
					var i = this.Zh.get(t);
					return void 0 === i ? null : i.P;
				}),
				(t.prototype.hr = function (t) {
					for (var i = this.$h, n = this.Xh; n - i > 2; ) {
						if (1e3 * a(this.Zh.get(i)).P.Wh === t) return i;
						if (1e3 * a(this.Zh.get(n)).P.Wh === t) return n;
						var s = Math.round((i + n) / 2);
						1e3 * a(this.Zh.get(s)).P.Wh > t ? (n = s) : (i = s);
					}
					return i;
				}),
				(t.prototype.rr = function (t, i) {
					var n = Math.ceil(i / t);
					if (this.Qh === n && this.Ph) return this.Ph;
					this.Qh = n;
					for (var s = [], h = this.Jh.length; h--; )
						if (this.Jh[h]) {
							var r = s;
							s = [];
							for (
								var e = r.length,
									u = 0,
									o = a(this.Jh[h]),
									l = o.length,
									f = 1 / 0,
									c = -1 / 0,
									v = 0;
								v < l;
								v++
							) {
								for (var _ = o[v], d = _.Bi; u < e; ) {
									var w = r[u],
										M = w.Bi;
									if (!(M < d)) {
										f = M;
										break;
									}
									u++, s.push(w), (c = M), (f = 1 / 0);
								}
								f - d >= n && d - c >= n && (s.push(_), (c = d));
							}
							for (; u < e; u++) s.push(r[u]);
						}
					return (this.Ph = s), this.Ph;
				}),
				(t.prototype.nr = function (t) {
					var i = t.Bi;
					if (this.Zh.get(i) === t) {
						this.Zh.delete(i),
							i <= this.$h && this.$h++,
							i >= this.Xh && this.Xh--,
							this.Xh < this.$h && ((this.$h = 1 / 0), (this.Xh = -1 / 0));
						var n = a(this.Jh[t.ir]),
							s = n.indexOf(t);
						-1 !== s && n.splice(s, 1);
					}
				}),
				t
			);
		})(),
		Ot = (function () {
			function t() {
				this.er = [];
			}
			return (
				(t.prototype.ur = function () {
					this.er = [];
				}),
				(t.prototype.or = function () {
					return this.er.length;
				}),
				(t.prototype.ar = function () {
					return this.lr(0);
				}),
				(t.prototype.Yi = function () {
					return this.lr(this.er.length - 1);
				}),
				(t.prototype.gn = function (t, i) {
					if (0 !== i.length)
						if (0 !== this.er.length) {
							var n = t;
							if (n < 0) {
								var s = Math.abs(n);
								if (i.length < s) return;
								this.er = new Array(s).concat(this.er);
								for (var h = 0; h < i.length; ++h) this.er[t + h] = i[h];
							} else {
								for (var r = n; r < this.er.length && r - n < i.length; ++r)
									this.er[r] = i[r - n];
								var e = n + i.length;
								if (e > this.er.length) {
									s = e - this.er.length;
									for (var u = r; u < r + s; ++u) this.er.push(i[u - n]);
								}
							}
						} else this.er = i;
				}),
				(t.prototype.cr = function (t) {
					var i = this.vr(t);
					return null !== i ? this.er[i] : null;
				}),
				(t.prototype._r = function (t, i) {
					if (this.er.length < 1) return null;
					if (t > this.er[this.er.length - 1].Wh)
						return i ? this.er.length - 1 : null;
					for (var n = 0; n < this.er.length; ++n) {
						if (t === this.er[n].Wh) return n;
						if (t < this.er[n].Wh) return i ? n : null;
					}
					return null;
				}),
				(t.prototype.dr = function (t) {
					var i = this.er;
					if (!i.length) return null;
					if (Number.isNaN(t.Wh)) return null;
					var n = i.length - 1;
					if (t >= i[n]) return n;
					var s = 0,
						h = i[s];
					if (t < h) return null;
					if (t === h) return s;
					for (; n > s + 1; ) {
						var r = (s + n) >> 1,
							e = i[r];
						if (e.Wh > t.Wh) n = r;
						else {
							if (!(e.Wh < t.Wh)) return e.Wh === t.Wh ? r : null;
							s = r;
						}
					}
					return s;
				}),
				(t.prototype.lr = function (t) {
					return 0 <= t && t < this.or() ? t : null;
				}),
				(t.prototype.vr = function (t) {
					return 0 <= t && t < this.or() ? t : null;
				}),
				t
			);
		})(),
		It = (function () {
			function t(t) {
				this.wr = t;
			}
			return (
				(t.prototype.Mr = function () {
					return null === this.wr
						? null
						: new Bt(Math.floor(this.wr.ph()), Math.ceil(this.wr.gh()));
				}),
				(t.prototype.br = function () {
					return this.wr;
				}),
				(t.prototype.Gn = function () {
					return null !== this.wr;
				}),
				(t.mr = function () {
					return new t(null);
				}),
				t
			);
		})();
	!(function (t) {
		(t[(t.Year = 0)] = "Year"),
			(t[(t.Month = 1)] = "Month"),
			(t[(t.DayOfMonth = 2)] = "DayOfMonth"),
			(t[(t.Time = 3)] = "Time"),
			(t[(t.TimeWithSeconds = 4)] = "TimeWithSeconds");
	})(Pt || (Pt = {}));
	var Rt = (function () {
		function t(t, i, n) {
			(this.pr = 0),
				(this.gr = null),
				(this.yr = new Ot()),
				(this.as = null),
				(this.os = null),
				(this.kr = new Ft()),
				(this.xr = new Map()),
				(this.Nr = It.mr()),
				(this.Sr = !0),
				(this.Dr = new st()),
				(this.Tr = new st()),
				(this.Cr = new st()),
				(this.Er = null),
				(this.Ar = null),
				(this.Lr = null),
				(this.Br = []),
				(this.Si = i),
				(this._s = n),
				(this.Vr = i.rightOffset),
				(this.zr = i.barSpacing),
				(this.ni = t),
				this.Pr();
		}
		return (
			(t.prototype.O = function () {
				return this.Si;
			}),
			(t.prototype.Fr = function (t) {
				c(this._s, t), this.Or(), this.Pr();
			}),
			(t.prototype.ms = function (t, i) {
				c(this.Si, t),
					this.Si.fixLeftEdge ? this.Ir() : (this.Er = null),
					void 0 !== t.barSpacing && this.Rr(t.barSpacing),
					void 0 !== t.rightOffset && this.Wr(t.rightOffset),
					this.Or(),
					this.Pr(),
					this.Cr.an();
			}),
			(t.prototype.Gt = function () {
				return 0 === this.pr || 0 === this.yr.or();
			}),
			(t.prototype.jr = function () {
				return this.Ur(), this.Nr.Mr();
			}),
			(t.prototype.qr = function () {
				return this.Ur(), this.Nr.br();
			}),
			(t.prototype.Hr = function () {
				var t = this.jr();
				if (null === t) return null;
				var i = { from: t.ph(), to: t.gh() };
				return this.Yr(i);
			}),
			(t.prototype.Yr = function (t) {
				var i = Math.round(t.from),
					n = Math.round(t.to),
					s = this.ni.j().Kr(),
					h = l(s.ar()),
					r = l(s.Yi());
				return { from: l(s.cr(Math.max(h, i))), to: l(s.cr(Math.min(r, n))) };
			}),
			(t.prototype.$r = function (t) {
				var i = this.ni.j().Kr();
				return { from: l(i._r(t.from.Wh, !0)), to: l(i._r(t.to.Wh, !0)) };
			}),
			(t.prototype.Xr = function () {
				return this.kr;
			}),
			(t.prototype.Kr = function () {
				return this.yr;
			}),
			(t.prototype.dt = function () {
				return this.pr;
			}),
			(t.prototype.Zr = function (t) {
				if (isFinite(t) && !(t <= 0) && this.pr !== t) {
					if (this.Si.lockVisibleTimeRangeOnResize && this.pr) {
						var i = (this.zr * t) / this.pr;
						this.Jr(i);
					}
					if (null !== this.Er)
						if (l(this.jr()).ph() <= this.Er) {
							var n = this.pr - t;
							this.Vr -= Math.round(n / this.zr) + 1;
						}
					(this.pr = t), (this.Sr = !0), this.Gr(), this.Qr();
				}
			}),
			(t.prototype.J = function (t) {
				if (this.Gt() || !_(t)) return 0;
				var i = this.te() + this.Vr - t;
				return this.pr - (i + 0.5) * this.zr;
			}),
			(t.prototype.ie = function (t, i) {
				for (
					var n = this.te(),
						s = void 0 === i ? 0 : i.from,
						h = void 0 === i ? t.length : i.to,
						r = s;
					r < h;
					r++
				) {
					var e = t[r].P,
						u = n + this.Vr - e,
						o = this.pr - (u + 0.5) * this.zr;
					t[r].m = o;
				}
			}),
			(t.prototype.si = function (t) {
				return this.kr.sr(t);
			}),
			(t.prototype.ne = function (t) {
				return Math.ceil(this.se(t));
			}),
			(t.prototype.Wr = function (t) {
				(this.Sr = !0), (this.Vr = t), this.Qr(), this.ni.he(), this.ni.ee();
			}),
			(t.prototype.ue = function () {
				return this.zr;
			}),
			(t.prototype.Rr = function (t) {
				this.Jr(t), this.Qr(), this.ni.he(), this.ni.ee();
			}),
			(t.prototype.oe = function () {
				return this.Vr;
			}),
			(t.prototype.qn = function () {
				if (this.Gt()) return null;
				if (null !== this.Lr) return this.Lr;
				for (
					var t = this.zr,
						i = 5 * (this.ni.O().layout.fontSize + 4),
						n = Math.round(i / t),
						s = l(this.jr()),
						h = Math.max(s.ph(), s.ph() - n),
						r = Math.max(s.gh(), s.gh() - n),
						e = 0,
						u = 0,
						o = this.kr.rr(t, i);
					u < o.length;
					u++
				) {
					var a = o[u];
					if (h <= a.Bi && a.Bi <= r) {
						var f = this.kr.sr(a.Bi);
						if (null !== f) {
							if (e < this.Br.length) {
								var c = this.Br[e];
								(c.Rn = this.J(a.Bi)),
									(c.Wn = this.ae(f, a.ir)),
									(c.ir = a.ir),
									(c.le = !1);
							} else
								this.Br.push({
									Rn: this.J(a.Bi),
									Wn: this.ae(f, a.ir),
									ir: a.ir,
									le: !1,
								});
							e++;
						}
					}
				}
				return (this.Br.length = e), (this.Lr = this.Br), this.Br;
			}),
			(t.prototype.tr = function () {
				(this.Sr = !0),
					(this.yr = new Ot()),
					(this.as = null),
					(this.os = null),
					this.fe(),
					this.kr.tr(),
					(this.Er = null);
			}),
			(t.prototype.ce = function () {
				(this.Sr = !0),
					this.Rr(this.Si.barSpacing),
					this.Wr(this.Si.rightOffset);
			}),
			(t.prototype.ve = function () {
				return this.Si.fixLeftEdge;
			}),
			(t.prototype._e = function (t) {
				(this.Sr = !0), (this.gr = t), this.Qr(), this.Ir();
			}),
			(t.prototype.de = function (t, i) {
				var n = this.se(t),
					s = this.ue(),
					h = s + i * (s / 10);
				this.Rr(h),
					this.Si.rightBarStaysOnScroll ||
						this.Wr(this.oe() + (n - this.se(t)));
			}),
			(t.prototype.sh = function (t) {
				this.as && this.oh(),
					null === this.os &&
						null === this.Ar &&
						(this.Gt() || ((this.os = t), this.we()));
			}),
			(t.prototype.hh = function (t) {
				if (null !== this.Ar) {
					var i = rt(this.pr - t, 0, this.pr),
						n = rt(this.pr - l(this.os), 0, this.pr);
					0 !== i && 0 !== n && this.Rr((this.Ar.ue * i) / n);
				}
			}),
			(t.prototype.rh = function () {
				null !== this.os && ((this.os = null), this.fe());
			}),
			(t.prototype.eh = function (t) {
				null === this.as &&
					null === this.Ar &&
					(this.Gt() || ((this.as = t), this.we()));
			}),
			(t.prototype.uh = function (t) {
				if (null !== this.as) {
					var i = (this.as - t) / this.ue();
					(this.Vr = l(this.Ar).oe + i), (this.Sr = !0), this.Qr();
				}
			}),
			(t.prototype.oh = function () {
				null !== this.as && ((this.as = null), this.fe());
			}),
			(t.prototype.Me = function () {
				this.be(this.Si.rightOffset);
			}),
			(t.prototype.be = function (t, i) {
				var n = this;
				if ((void 0 === i && (i = 400), !isFinite(t)))
					throw new RangeError("offset is required and must be finite number");
				if (!isFinite(i) || i <= 0)
					throw new RangeError(
						"animationDuration (optional) must be finite positive number"
					);
				var s = this.Vr,
					h = new Date().getTime(),
					r = function () {
						var e = (new Date().getTime() - h) / i,
							u = e >= 1,
							o = u ? t : s + (t - s) * e;
						n.Wr(o), u || setTimeout(r, 20);
					};
				r();
			}),
			(t.prototype.B = function (t, i, n) {
				if (((this.Sr = !0), i.length > 0)) {
					var s = this.yr.or();
					this.yr.gn(t, i),
						this.Vr < 0 && this.yr.or() === s + 1 && (this.Vr -= 1);
				}
				this.kr.gn(n), this.Qr();
			}),
			(t.prototype.me = function () {
				return this.Dr;
			}),
			(t.prototype.pe = function () {
				return this.Tr;
			}),
			(t.prototype.ge = function () {
				return this.Cr;
			}),
			(t.prototype.te = function () {
				return this.gr || 0;
			}),
			(t.prototype.ye = function (t) {
				var i = t.Yh();
				this.Jr(this.pr / i),
					(this.Vr = t.gh() - this.te()),
					this.Qr(),
					(this.Sr = !0),
					this.ni.he(),
					this.ni.ee();
			}),
			(t.prototype.ke = function () {
				var t = this.yr.ar(),
					i = this.yr.Yi();
				null !== t && null !== i && this.ye(new Bt(t, i + this.Si.rightOffset));
			}),
			(t.prototype.xe = function (t) {
				var i = new Bt(t.from, t.to);
				this.ye(i);
			}),
			(t.prototype.hi = function (t) {
				return void 0 !== this._s.timeFormatter
					? this._s.timeFormatter(t.Rh || t.Wh)
					: this.Ne.Gi(new Date(1e3 * t.Wh));
			}),
			(t.prototype.Se = function (t) {
				return (this.pr + 1 - t) / this.zr;
			}),
			(t.prototype.se = function (t) {
				var i = this.Se(t),
					n = this.te() + this.Vr - i;
				return Math.round(1e6 * n) / 1e6;
			}),
			(t.prototype.Jr = function (t) {
				var i = this.zr;
				(this.zr = t), this.Gr(), i !== this.zr && ((this.Sr = !0), this.De());
			}),
			(t.prototype.Ur = function () {
				if (this.Sr)
					if (((this.Sr = !1), this.Gt())) this.Te(It.mr());
					else {
						var t = this.te(),
							i = this.pr / this.zr,
							n = this.Vr + t,
							s = new Bt(n - i + 1, n);
						this.Te(new It(s));
					}
			}),
			(t.prototype.Gr = function () {
				if (
					(this.zr < 0.5 && ((this.zr = 0.5), (this.Sr = !0)), 0 !== this.pr)
				) {
					var t = 0.5 * this.pr;
					this.zr > t && ((this.zr = t), (this.Sr = !0));
				}
			}),
			(t.prototype.Qr = function () {
				var t = this.Ce();
				this.Vr > t && ((this.Vr = t), (this.Sr = !0));
				var i = this.Ee();
				null !== i && this.Vr < i && ((this.Vr = i), (this.Sr = !0));
			}),
			(t.prototype.Ee = function () {
				var t = this.yr.ar(),
					i = this.gr;
				if (null === t || null === i) return null;
				if (null !== this.Er) {
					var n = this.pr / this.zr;
					return this.Er - i + n - 1;
				}
				return t - i - 1 + Math.min(2, this.yr.or());
			}),
			(t.prototype.Ce = function () {
				return this.pr / this.zr - Math.min(2, this.yr.or());
			}),
			(t.prototype.we = function () {
				this.Ar = { ue: this.ue(), oe: this.oe() };
			}),
			(t.prototype.fe = function () {
				this.Ar = null;
			}),
			(t.prototype.ae = function (t, i) {
				var n = this,
					s = this.xr.get(i);
				return (
					void 0 === s &&
						((s = new Lt(function (t) {
							return n.Ae(t, i);
						})),
						this.xr.set(i, s)),
					s.Gi(t)
				);
			}),
			(t.prototype.Ae = function (t, i) {
				var n,
					s,
					h = this.Si.timeVisible;
				return (
					(s =
						i < 20 && h
							? this.Si.secondsVisible
								? 4
								: 3
							: i < 40 && h
							? 3
							: i < 50 || i < 60
							? 2
							: i < 70
							? 1
							: 0),
					void 0 !== this.Si.tickMarkFormatter
						? this.Si.tickMarkFormatter(
								null !== (n = t.Rh) && void 0 !== n ? n : t.Wh,
								s,
								this._s.locale
						  )
						: (function (t, i, n) {
								var s = {};
								switch (i) {
									case 0:
										s.year = "numeric";
										break;
									case 1:
										s.month = "short";
										break;
									case 2:
										s.day = "numeric";
										break;
									case 3:
										(s.hour12 = !1),
											(s.hour = "2-digit"),
											(s.minute = "2-digit");
										break;
									case 4:
										(s.hour12 = !1),
											(s.hour = "2-digit"),
											(s.minute = "2-digit"),
											(s.second = "2-digit");
								}
								var h =
									void 0 === t.Rh
										? new Date(1e3 * t.Wh)
										: new Date(Date.UTC(t.Rh.year, t.Rh.month - 1, t.Rh.day));
								return new Date(
									h.getUTCFullYear(),
									h.getUTCMonth(),
									h.getUTCDate(),
									h.getUTCHours(),
									h.getUTCMinutes(),
									h.getUTCSeconds(),
									h.getUTCMilliseconds()
								).toLocaleString(n, s);
						  })(t, s, this._s.locale)
				);
			}),
			(t.prototype.Te = function (t) {
				var i = this.Nr;
				(this.Nr = t),
					Vt(i.Mr(), this.Nr.Mr()) || this.Dr.an(),
					Vt(i.br(), this.Nr.br()) || this.Tr.an(),
					this.De();
			}),
			(t.prototype.De = function () {
				this.Lr = null;
			}),
			(t.prototype.Or = function () {
				this.De(), this.xr.clear();
			}),
			(t.prototype.Pr = function () {
				var t = this._s.dateFormat;
				this.Si.timeVisible
					? (this.Ne = new At({
							Sh: t,
							Dh: this.Si.secondsVisible ? "%h:%m:%s" : "%h:%m",
							Th: "   ",
							Ch: this._s.locale,
					  }))
					: (this.Ne = new Tt(t, this._s.locale));
			}),
			(t.prototype.Ir = function () {
				if (this.Si.fixLeftEdge) {
					var t = this.yr.ar();
					if (null !== t && this.Er !== t) {
						this.Er = t;
						var i = l(this.jr()).ph() - t;
						if (i < 0) {
							var n = this.Vr - i - 1;
							this.Wr(n);
						}
					}
				}
			}),
			t
		);
	})();
	function Wt(t) {
		return !v(t) && !d(t);
	}
	function jt(t) {
		return v(t);
	}
	function Ut(t, i, n) {
		return (
			void 0 !== n ? (n += " ") : (n = ""),
			void 0 === i && (i = "'Trebuchet MS', Roboto, Ubuntu, sans-serif"),
			"" + n + t + "px " + i
		);
	}
	var qt = (function () {
		function t(t) {
			(this.Le = {
				Nt: 1,
				xt: 4,
				Bt: NaN,
				gt: "",
				Be: "",
				et: "",
				Dt: 0,
				Tt: 0,
				Ct: 0,
				St: 0,
				Lt: 0,
			}),
				(this.A = t);
		}
		return (
			(t.prototype.O = function () {
				var t = this.Le,
					i = this.Ve(),
					n = this.ze();
				return (
					(t.Bt === i && t.Be === n) ||
						((t.Bt = i),
						(t.Be = n),
						(t.gt = Ut(i, n)),
						(t.St = Math.floor(i / 3.5)),
						(t.Dt = t.St),
						(t.Tt = Math.max(Math.ceil(i / 2 - t.xt / 2), 0)),
						(t.Ct = Math.ceil(i / 2 + t.xt / 2)),
						(t.Lt = Math.round(i / 10))),
					(t.et = this.Pe()),
					this.Le
				);
			}),
			(t.prototype.Pe = function () {
				return this.A.O().layout.textColor;
			}),
			(t.prototype.Ve = function () {
				return this.A.O().layout.fontSize;
			}),
			(t.prototype.ze = function () {
				return this.A.O().layout.fontFamily;
			}),
			t
		);
	})();
	function Ht(t) {
		return "left" === t || "right" === t;
	}
	var Yt = (function () {
			function t() {
				this.G = null;
			}
			return (
				(t.prototype.v = function (t) {
					this.G = t;
				}),
				(t.prototype.s = function (t, i, s, h) {
					var r = this;
					if (null !== this.G) {
						var e = Math.floor(i);
						t.lineWidth = e;
						var u = Math.ceil(this.G.ht * i),
							o = Math.ceil(this.G.st * i);
						!(function (t, i) {
							t.save(),
								t.lineWidth % 2 && t.translate(0.5, 0.5),
								i(),
								t.restore();
						})(t, function () {
							var s = l(r.G);
							if (s.Fe) {
								(t.strokeStyle = s.Oe), n(t, s.Ie), t.beginPath();
								for (var h = 0, a = s.Re; h < a.length; h++) {
									var f = a[h],
										c = Math.round(f.Rn * i);
									t.moveTo(c, -e), t.lineTo(c, u + e);
								}
								t.stroke();
							}
							if (s.We) {
								(t.strokeStyle = s.je), n(t, s.Ue), t.beginPath();
								for (var v = 0, _ = s.qe; v < _.length; v++) {
									var d = _[v],
										w = Math.round(d.Rn * i);
									t.moveTo(-e, w), t.lineTo(o + e, w);
								}
								t.stroke();
							}
						});
					}
				}),
				t
			);
		})(),
		Kt = (function () {
			function t(t) {
				(this.at = new Yt()), (this.C = !0), (this.wi = t);
			}
			return (
				(t.prototype.B = function () {
					this.C = !0;
				}),
				(t.prototype.I = function (t, i) {
					if (this.C) {
						var n = this.wi.ct().O().grid,
							s = {
								ht: t,
								st: i,
								We: n.horzLines.visible,
								Fe: n.vertLines.visible,
								je: n.horzLines.color,
								Oe: n.vertLines.color,
								Ue: n.horzLines.style,
								Ie: n.vertLines.style,
								qe: this.wi.Ci().qn(),
								Re: this.wi.ct().j().qn() || [],
							};
						this.at.v(s), (this.C = !1);
					}
					return this.at;
				}),
				t
			);
		})(),
		$t = (function () {
			function t() {
				(this.He = new WeakMap()), (this.C = !0);
			}
			return (
				(t.prototype._i = function (t) {
					var i = this.He.get(t);
					return (
						void 0 === i && ((i = [new Kt(t)]), this.He.set(t, i)),
						this.C &&
							(i.forEach(function (t) {
								return t.B();
							}),
							(this.C = !1)),
						i
					);
				}),
				(t.prototype.Ye = function () {
					this.C = !0;
				}),
				t
			);
		})();
	var Xt = (function () {
			function t(t) {
				(this.Ke = new Map()),
					(this.$e = !1),
					(this.Xe = !1),
					(this.wr = null),
					(this.Ze = t);
			}
			return (
				(t.prototype.Je = function (t, i) {
					var n = (function (t, i) {
						return void 0 === t
							? i
							: { Ge: Math.max(t.Ge, i.Ge), Ts: t.Ts || i.Ts };
					})(this.Ke.get(t), i);
					this.Ke.set(t, n);
				}),
				(t.prototype.Qe = function (t) {
					this.Ze = Math.max(this.Ze, t);
				}),
				(t.prototype.tu = function () {
					return this.Ze;
				}),
				(t.prototype.iu = function (t) {
					var i = this.Ke.get(t);
					return void 0 === i
						? { Ge: this.Ze }
						: { Ge: Math.max(this.Ze, i.Ge), Ts: i.Ts };
				}),
				(t.prototype.nu = function () {
					(this.Xe = !0), (this.wr = null);
				}),
				(t.prototype.su = function () {
					return this.Xe;
				}),
				(t.prototype.xe = function (t) {
					(this.wr = t), (this.Xe = !1);
				}),
				(t.prototype.hu = function () {
					return this.wr;
				}),
				(t.prototype.gn = function (t) {
					var i = this;
					(this.$e = this.$e || t.$e),
						t.Xe && this.nu(),
						t.wr && this.xe(t.wr),
						(this.Ze = Math.max(this.Ze, t.Ze)),
						t.Ke.forEach(function (t, n) {
							i.Je(n, t);
						});
				}),
				t
			);
		})(),
		Zt = (function () {
			function t(t) {
				this.ru = t;
			}
			return (
				(t.prototype.Gi = function (t) {
					var i = "";
					return (
						t < 0 && ((i = "-"), (t = -t)),
						t < 995
							? i + this.eu(t)
							: t < 999995
							? i + this.eu(t / 1e3) + "K"
							: t < 999999995
							? ((t = 1e3 * Math.round(t / 1e3)), i + this.eu(t / 1e6) + "M")
							: ((t = 1e6 * Math.round(t / 1e6)), i + this.eu(t / 1e9) + "B")
					);
				}),
				(t.prototype.eu = function (t) {
					var i = Math.pow(10, this.ru);
					return (
						(t = Math.round(t * i) / i) >= 1e-15 && t < 1
							? t.toFixed(this.ru).replace(/\.?0+$/, "")
							: String(t)
					).replace(/(\.[1-9]*)0+$/, function (t, i) {
						return i;
					});
				}),
				t
			);
		})();
	function Jt(t, i, n, s) {
		if (0 !== i.length) {
			var h = i[s.from].m,
				r = i[s.from].p;
			t.moveTo(h, r);
			for (var e = s.from + 1; e < s.to; ++e) {
				var u = i[e];
				if (1 === n) {
					var o = i[e - 1].p,
						a = u.m;
					t.lineTo(a, o);
				}
				t.lineTo(u.m, u.p);
			}
		}
	}
	var Gt = (function (t) {
			function i() {
				var i = (null !== t && t.apply(this, arguments)) || this;
				return (i.l = null), i;
			}
			return (
				r(i, t),
				(i.prototype.v = function (t) {
					this.l = t;
				}),
				(i.prototype.h = function (t) {
					if (null !== this.l && 0 !== this.l.M.length && null !== this.l._) {
						(t.lineCap = "butt"),
							(t.strokeStyle = this.l.N),
							(t.lineWidth = this.l.rt),
							n(t, this.l.ut),
							(t.lineWidth = 1),
							t.beginPath(),
							t.moveTo(this.l.M[this.l._.from].m, this.l.uu),
							t.lineTo(this.l.M[this.l._.from].m, this.l.M[this.l._.from].p),
							Jt(t, this.l.M, this.l.ou, this.l._),
							this.l._.to > this.l._.from &&
								(t.lineTo(this.l.M[this.l._.to - 1].m, this.l.uu),
								t.lineTo(this.l.M[this.l._.from].m, this.l.uu)),
							t.closePath();
						var i = t.createLinearGradient(0, 0, 0, this.l.uu);
						i.addColorStop(0, this.l.au),
							i.addColorStop(1, this.l.lu),
							(t.fillStyle = i),
							t.fill();
					}
				}),
				i
			);
		})(y),
		Qt = (function (t) {
			function i() {
				var i = (null !== t && t.apply(this, arguments)) || this;
				return (i.l = null), i;
			}
			return (
				r(i, t),
				(i.prototype.v = function (t) {
					this.l = t;
				}),
				(i.prototype.h = function (t) {
					null !== this.l &&
						0 !== this.l.M.length &&
						null !== this.l._ &&
						((t.lineCap = "square"),
						(t.lineWidth = this.l.rt),
						n(t, this.l.ut),
						(t.strokeStyle = this.l.N),
						(t.lineJoin = "miter"),
						t.beginPath(),
						Jt(t, this.l.M, this.l.ou, this.l._),
						t.stroke());
				}),
				i
			);
		})(y);
	function ti(t, i, n, s, h) {
		void 0 === s && (s = 0), void 0 === h && (h = t.length);
		for (var r = h - s; 0 < r; ) {
			var e = r >> 1,
				u = s + e;
			n(t[u], i) ? ((s = u + 1), (r -= e + 1)) : (r = e);
		}
		return s;
	}
	function ii(t, i, n, s, h) {
		void 0 === s && (s = 0), void 0 === h && (h = t.length);
		for (var r = h - s; 0 < r; ) {
			var e = r >> 1,
				u = s + e;
			n(i, t[u]) ? (r = e) : ((s = u + 1), (r -= e + 1));
		}
		return s;
	}
	function ni(t, i) {
		return t.P < i;
	}
	function si(t, i) {
		return t < i.P;
	}
	function hi(t, i, n) {
		var s = i.ph(),
			h = i.gh(),
			r = ti(t, s, ni),
			e = ii(t, h, si);
		if (!n) return { from: r, to: e };
		var u = r,
			o = e;
		return (
			r > 0 && r < t.length && t[r].P >= s && (u = r - 1),
			e > 0 && e < t.length && t[e - 1].P <= h && (o = e + 1),
			{ from: u, to: o }
		);
	}
	var ri = (function () {
			function t(t, i, n) {
				(this.fu = !0),
					(this.cu = !0),
					(this.vu = []),
					(this._u = null),
					(this.du = t),
					(this.wu = i),
					(this.Mu = n);
			}
			return (
				(t.prototype.B = function (t) {
					(this.fu = !0), "data" === t && (this.cu = !0);
				}),
				(t.prototype.bu = function () {
					this.cu && (this.mu(), (this.cu = !1)),
						this.fu && (this.pu(), (this.fu = !1));
				}),
				(t.prototype.gu = function () {
					this._u = null;
				}),
				(t.prototype.pu = function () {
					var t = this.du.X(),
						i = this.wu.j();
					if ((this.gu(), !i.Gt() && !t.Gt())) {
						var n = i.jr();
						if (null !== n && 0 !== this.du.Ki().or()) {
							var s = this.du.q();
							null !== s &&
								((this._u = hi(this.vu, n, this.Mu)), this.yu(t, i, s.Z));
						}
					}
				}),
				t
			);
		})(),
		ei = (function (t) {
			function i(i, n) {
				return t.call(this, i, n, !0) || this;
			}
			return (
				r(i, t),
				(i.prototype.yu = function (t, i, n) {
					i.ie(this.vu, p(this._u)), t.js(this.vu, n, p(this._u));
				}),
				(i.prototype.ku = function (t, i) {
					return { P: t, F: i, m: NaN, p: NaN };
				}),
				(i.prototype.mu = function () {
					var t = this,
						i = this.du.xu(),
						n = [],
						s = this.du.K();
					this.du.Ki().Nu(function (h, r) {
						var e = i(r.Z),
							u = t.Su(h, e, s);
						return n.push(u), !1;
					}),
						(this.vu = n);
				}),
				i
			);
		})(ri),
		ui = (function (t) {
			function i(i, n) {
				var s = t.call(this, i, n) || this;
				return (
					(s.at = new g()),
					(s.Du = new Gt()),
					(s.Tu = new Qt()),
					s.at.i([s.Du, s.Tu]),
					s
				);
			}
			return (
				r(i, t),
				(i.prototype.I = function (t, i) {
					this.bu();
					var n = this.du.O(),
						s = {
							ou: n.lineType,
							M: this.vu,
							N: n.lineColor,
							ut: n.lineStyle,
							rt: n.lineWidth,
							au: n.topColor,
							lu: n.bottomColor,
							uu: t,
							_: this._u,
						};
					return this.Du.v(s), this.Tu.v(s), this.at;
				}),
				(i.prototype.Su = function (t, i) {
					return this.ku(t, i);
				}),
				i
			);
		})(ei);
	var oi = (function () {
			function t() {
				(this.G = null), (this.Cu = 0), (this.Eu = 0);
			}
			return (
				(t.prototype.v = function (t) {
					this.G = t;
				}),
				(t.prototype.s = function (t, i, n, s) {
					if (null !== this.G && 0 !== this.G.Ki.length && null !== this.G._) {
						if (
							((this.Cu = Math.max(
								1,
								Math.floor(
									(function (t, i) {
										return Math.floor(0.3 * t * i);
									})(this.G.ue, i)
								)
							)),
							this.Cu >= 2)
						)
							Math.floor(i) % 2 != this.Cu % 2 && this.Cu--;
						this.Eu = this.G.Au ? Math.min(this.Cu, Math.floor(i)) : this.Cu;
						for (var h = null, r = this.G._.from; r < this.G._.to; ++r) {
							var e = this.G.Ki[r];
							h !== e.et && ((t.fillStyle = e.et), (h = e.et));
							var u = Math.floor(0.5 * this.Eu),
								o = Math.round(e.m * i),
								a = o - u,
								l = this.Eu,
								f = a + l - 1,
								c = Math.round(e.Ys * i) - u,
								v = Math.round(e.Ks * i) + u,
								_ = Math.max(v - c, this.Eu);
							t.fillRect(a, c, l, _);
							var d = Math.ceil(1.5 * this.Cu);
							if (this.Eu <= this.Cu) {
								if (this.G.Lu) {
									var w = o - d,
										M = Math.max(c, Math.round(e.Hs * i) - u),
										b = M + l - 1;
									b > c + _ - 1 && (M = (b = c + _ - 1) - l + 1),
										t.fillRect(w, M, a - w, b - M + 1);
								}
								var m = o + d,
									p = Math.max(c, Math.round(e.$s * i) - u),
									g = p + l - 1;
								g > c + _ - 1 && (p = (g = c + _ - 1) - l + 1),
									t.fillRect(f + 1, p, m - f, g - p + 1);
							}
						}
					}
				}),
				t
			);
		})(),
		ai = (function (t) {
			function i(i, n) {
				return t.call(this, i, n, !1) || this;
			}
			return (
				r(i, t),
				(i.prototype.yu = function (t, i, n) {
					i.ie(this.vu, p(this._u)), t.qs(this.vu, n, p(this._u));
				}),
				(i.prototype.Bu = function (t, i, n) {
					return {
						P: t,
						open: i.Z[0],
						high: i.Z[1],
						low: i.Z[2],
						close: i.Z[3],
						m: NaN,
						Hs: NaN,
						Ys: NaN,
						Ks: NaN,
						$s: NaN,
					};
				}),
				(i.prototype.mu = function () {
					var t = this,
						i = [],
						n = this.du.K();
					this.du.Ki().Nu(function (s, h) {
						var r = t.Su(s, h, n);
						return i.push(r), !1;
					}),
						(this.vu = i);
				}),
				i
			);
		})(ri),
		li = (function (t) {
			function i(i, n) {
				var s = t.call(this, i, n) || this;
				return (s.at = new oi()), s;
			}
			return (
				r(i, t),
				(i.prototype.I = function (t, i) {
					this.bu();
					var n = this.du.O(),
						s = {
							Ki: this.vu,
							ue: this.wu.j().ue(),
							Lu: n.openVisible,
							Au: n.thinBars,
							_: this._u,
						};
					return this.at.v(s), this.at;
				}),
				(i.prototype.Su = function (t, i, n) {
					return e(e({}, this.Bu(t, i, n)), { et: n.Y(t).H });
				}),
				i
			);
		})(ai),
		fi = (function () {
			function t() {
				(this.G = null), (this.Cu = 0);
			}
			return (
				(t.prototype.v = function (t) {
					this.G = t;
				}),
				(t.prototype.s = function (t, i, n, s) {
					if (null !== this.G && 0 !== this.G.Ki.length && null !== this.G._) {
						if (
							((this.Cu = (function (t, i) {
								var n = Math.floor(0.8 * t * i),
									s = Math.floor(t * i),
									h = Math.min(n, s - 1);
								return Math.max(1, h);
							})(this.G.ue, i)),
							this.Cu >= 2)
						)
							Math.floor(i) % 2 != this.Cu % 2 && this.Cu--;
						var h = this.G.Ki;
						this.G.Vu && this.zu(t, h, this.G._, i),
							this.G.Pu && this.Fu(t, h, this.G._, this.G.ue, i);
						var r = this.Ou(i);
						(!this.G.Pu || this.Cu > 2 * r) && this.Iu(t, h, this.G._, i);
					}
				}),
				(t.prototype.zu = function (t, i, n, s) {
					if (null !== this.G) {
						var h = "",
							r = Math.min(Math.floor(s), Math.floor(this.G.ue * s));
						r = Math.min(r, this.Cu);
						for (var e = Math.floor(0.5 * r), u = n.from; u < n.to; u++) {
							var o = i[u];
							o.Ru !== h && ((t.fillStyle = o.Ru), (h = o.Ru));
							var a = Math.round(Math.min(o.Hs, o.$s) * s),
								l = Math.round(Math.max(o.Hs, o.$s) * s),
								f = Math.round(o.Ys * s),
								c = Math.round(o.Ks * s),
								v = Math.round(s * o.m);
							t.fillRect(v - e, f, r, a - f),
								t.fillRect(v - e, l + 1, r, c - l);
						}
					}
				}),
				(t.prototype.Ou = function (t) {
					var i = Math.floor(1 * t);
					this.Cu <= 2 * i && (i = Math.floor(0.5 * (this.Cu - 1)));
					var n = Math.max(1, i);
					return this.Cu <= 2 * n ? Math.floor(1 * t) : n;
				}),
				(t.prototype.Fu = function (t, i, n, s, h) {
					for (var r = "", e = this.Ou(h), u = n.from; u < n.to; u++) {
						var o = i[u];
						o.Ft !== r && ((t.fillStyle = o.Ft), (r = o.Ft));
						var a = Math.round(o.m * h) - Math.floor(0.5 * this.Cu),
							l = a + this.Cu - 1,
							f = Math.round(Math.min(o.Hs, o.$s) * h),
							c = Math.round(Math.max(o.Hs, o.$s) * h);
						s > 2 * e
							? R(t, a, f, l - a + 1, c - f + 1, e)
							: t.fillRect(a, f, l - a + 1, c - f + 1);
					}
				}),
				(t.prototype.Iu = function (t, i, n, s) {
					if (null !== this.G)
						for (var h = "", r = this.Ou(s), e = n.from; e < n.to; e++) {
							var u = i[e],
								o = Math.round(Math.min(u.Hs, u.$s) * s),
								a = Math.round(Math.max(u.Hs, u.$s) * s),
								l = Math.round(u.m * s) - Math.floor(0.5 * this.Cu),
								f = l + this.Cu - 1;
							if (
								(this.G.Pu && ((l += r), (o += r), (f -= r), (a -= r)),
								!(o > a))
							) {
								if (u.et !== h) {
									var c = u.et;
									(t.fillStyle = c), (h = c);
								}
								t.fillRect(l, o, f - l + 1, a - o + 1);
							}
						}
				}),
				t
			);
		})(),
		ci = (function (t) {
			function i(i, n) {
				var s = t.call(this, i, n) || this;
				return (s.at = new fi()), s;
			}
			return (
				r(i, t),
				(i.prototype.I = function (t, i) {
					this.bu();
					var n = this.du.O(),
						s = {
							Ki: this.vu,
							ue: this.wu.j().ue(),
							Vu: n.wickVisible,
							Pu: n.borderVisible,
							_: this._u,
						};
					return this.at.v(s), this.at;
				}),
				(i.prototype.Su = function (t, i, n) {
					var s = n.Y(t);
					return e(e({}, this.Bu(t, i, n)), { et: s.H, Ru: s.Wu, Ft: s.ju });
				}),
				i
			);
		})(ai),
		vi = (function () {
			function t() {
				(this.G = null), (this.Uu = []);
			}
			return (
				(t.prototype.v = function (t) {
					(this.G = t), (this.Uu = []);
				}),
				(t.prototype.s = function (t, i, n, s) {
					if (null !== this.G && 0 !== this.G.M.length && null !== this.G._) {
						this.Uu.length || this.qu(i);
						for (
							var h = Math.round(this.G.Hu * i),
								r = Math.max(1, Math.floor(i)),
								e = this.G._.from;
							e < this.G._.to;
							e++
						) {
							var u = this.G.M[e],
								o = this.Uu[e - this.G._.from],
								a = Math.round(u.p * i);
							(t.fillStyle = u.et),
								t.fillRect(o.ph, a, o.gh - o.ph + 1, h - a + r);
						}
					}
				}),
				(t.prototype.qu = function (t) {
					if (null !== this.G && 0 !== this.G.M.length && null !== this.G._) {
						var i =
								Math.ceil(this.G.ue * t) <= 3 ? 0 : Math.max(1, Math.floor(t)),
							n = Math.round(this.G.ue * t) - i;
						this.Uu = new Array(this.G._.to - this.G._.from);
						for (var s = this.G._.from; s < this.G._.to; s++) {
							var h,
								r = this.G.M[s],
								e = Math.round(r.m * t),
								u = void 0,
								o = void 0;
							if (n % 2) (u = e - (h = (n - 1) / 2)), (o = e + h);
							else (u = e - (h = n / 2)), (o = e + h - 1);
							this.Uu[s - this.G._.from] = {
								ph: u,
								gh: o,
								Yu: e,
								Ku: r.m * t,
								P: r.P,
							};
						}
						for (s = this.G._.from + 1; s < this.G._.to; s++) {
							var a = this.Uu[s - this.G._.from],
								l = this.Uu[s - this.G._.from - 1];
							a.P === l.P + 1 &&
								a.ph - l.gh !== i + 1 &&
								(l.Yu > l.Ku ? (l.gh = a.ph - i - 1) : (a.ph = l.gh + i + 1));
						}
						var f = Math.ceil(this.G.ue * t);
						for (s = this.G._.from; s < this.G._.to; s++) {
							(a = this.Uu[s - this.G._.from]).gh < a.ph && (a.gh = a.ph);
							var c = a.gh - a.ph + 1;
							f = Math.min(c, f);
						}
						if (i > 0 && f < 4)
							for (s = this.G._.from; s < this.G._.to; s++) {
								(c = (a = this.Uu[s - this.G._.from]).gh - a.ph + 1) > f &&
									(a.Yu > a.Ku ? (a.gh -= 1) : (a.ph += 1));
							}
					} else this.Uu = [];
				}),
				t
			);
		})();
	function _i(t) {
		return { M: [], ue: t, Hu: NaN, _: null };
	}
	var di = (function (t) {
			function i(i, n) {
				var s = t.call(this, i, n, !1) || this;
				return (
					(s.S = new g()),
					(s.$u = _i(0)),
					(s.Xu = new Int32Array(0)),
					(s.at = new vi()),
					s
				);
			}
			return (
				r(i, t),
				(i.prototype.I = function (t, i) {
					return this.bu(), this.S;
				}),
				(i.prototype.mu = function () {
					var t = this,
						i = this.wu.j().ue(),
						n = this.du.Zu();
					this.$u = _i(i);
					var s = this.du.xu();
					this.Xu = new Int32Array(this.du.Ki().or());
					var h = 0,
						r = 0,
						e = 0,
						u = this.du.O().color;
					this.du.Ki().Nu(function (i, o) {
						var a = s(o.Z),
							l = o.Z[4],
							f = (function (t, i, n) {
								return { P: t, F: i, m: NaN, p: NaN, et: n };
							})(i, a, null != l ? n.Ju(l) : u),
							c = null == l ? 0 : l + 1;
						return (
							++r < t.$u.M.length ? (t.$u.M[r] = f) : t.$u.M.push(f),
							(t.vu[e++] = { P: i, m: 0 }),
							(t.Xu[h++] = c),
							!1
						);
					}),
						this.at.v(this.$u),
						this.S.i([this.at]);
				}),
				(i.prototype.gu = function () {
					t.prototype.gu.call(this), (this.$u._ = null);
				}),
				(i.prototype.yu = function (t, i, n) {
					if (null !== this._u) {
						var s = i.ue(),
							h = l(i.jr()),
							r = t.$(this.du.O().base, n);
						i.ie(this.$u.M),
							t.js(this.$u.M, n),
							(this.$u.Hu = r),
							(this.$u._ = hi(this.$u.M, h, !1)),
							(this.$u.ue = s),
							this.at.v(this.$u);
					}
				}),
				i
			);
		})(ri),
		wi = (function (t) {
			function i(i, n) {
				var s = t.call(this, i, n) || this;
				return (s.Tu = new Qt()), s;
			}
			return (
				r(i, t),
				(i.prototype.I = function (t, i) {
					this.bu();
					var n = this.du.O(),
						s = {
							M: this.vu,
							N: n.color,
							ut: n.lineStyle,
							ou: n.lineType,
							rt: n.lineWidth,
							_: this._u,
						};
					return this.Tu.v(s), this.Tu;
				}),
				(i.prototype.Su = function (t, i) {
					return this.ku(t, i);
				}),
				i
			);
		})(ei),
		Mi = /[2-9]/g,
		bi = (function () {
			function t(t) {
				void 0 === t && (t = 50),
					(this.Bh = 0),
					(this.Vh = 1),
					(this.zh = 1),
					(this.Fh = {}),
					(this.Ph = {}),
					(this.Ih = t);
			}
			return (
				(t.prototype.tr = function () {
					(this.Bh = 0),
						(this.Ph = {}),
						(this.Vh = 1),
						(this.zh = 1),
						(this.Fh = {});
				}),
				(t.prototype.At = function (t, i, n) {
					var s = n || Mi,
						h = String(i).replace(s, "0");
					if (this.Ph[h]) return this.Ph[h].dt;
					if (this.Bh === this.Ih) {
						var r = this.Fh[this.zh];
						delete this.Fh[this.zh], delete this.Ph[r], this.zh++, this.Bh--;
					}
					var e = t.measureText(h).width;
					return 0 === e && i.length
						? 0
						: ((this.Ph[h] = { dt: e, Uh: this.Vh }),
						  (this.Fh[this.Vh] = h),
						  this.Bh++,
						  this.Vh++,
						  e);
				}),
				t
			);
		})(),
		mi = (function () {
			function t(t) {
				(this.Gu = null),
					(this.Le = null),
					(this.Qu = "right"),
					(this.pr = 0),
					(this.io = t);
			}
			return (
				(t.prototype.no = function (t, i, n, s) {
					(this.Gu = t), (this.Le = i), (this.pr = n), (this.Qu = s);
				}),
				(t.prototype.s = function (t, i) {
					null !== this.Le &&
						null !== this.Gu &&
						this.Gu.s(t, this.Le, this.io, this.pr, this.Qu, i);
				}),
				t
			);
		})(),
		pi = (function () {
			function t(t, i, n) {
				(this.so = t),
					(this.io = new bi(50)),
					(this.ho = i),
					(this.A = n),
					(this.Ve = -1),
					(this.at = new mi(this.io));
			}
			return (
				(t.prototype.B = function () {
					this.so.B();
				}),
				(t.prototype.I = function (t, i) {
					var n = this.A.ro(this.ho);
					if (null === n) return null;
					var s = n.eo(this.ho) ? n.Ci() : this.ho.X();
					if (null === s) return null;
					var h = n.uo(s);
					if ("overlay" === h) return null;
					var r = this.A.oo();
					return (
						r.Bt !== this.Ve && ((this.Ve = r.Bt), this.io.tr()),
						this.at.no(this.so.$t(), r, i, h),
						this.at
					);
				}),
				t
			);
		})(),
		gi = (function () {
			function t() {
				this.G = null;
			}
			return (
				(t.prototype.v = function (t) {
					this.G = t;
				}),
				(t.prototype.s = function (t, i, h, r) {
					if (null !== this.G && !1 !== this.G.tt) {
						var e = Math.round(this.G.p * i);
						if (!(e < 0 || e > Math.ceil(this.G.wt * i))) {
							var u = Math.ceil(this.G.dt * i);
							(t.lineCap = "butt"),
								(t.strokeStyle = this.G.et),
								(t.lineWidth = Math.floor(this.G.rt * i)),
								n(t, this.G.ut),
								s(t, e, 0, u);
						}
					}
				}),
				t
			);
		})(),
		yi = (function () {
			function t(t) {
				(this.ao = {
					dt: 0,
					wt: 0,
					p: 0,
					et: "rgba(0, 0, 0, 0)",
					rt: 1,
					ut: 0,
					tt: !1,
				}),
					(this.lo = new gi()),
					(this.C = !0),
					(this.du = t),
					(this.wu = t.ct()),
					this.lo.v(this.ao);
			}
			return (
				(t.prototype.B = function () {
					this.C = !0;
				}),
				(t.prototype.I = function (t, i) {
					return this.C && (this.fo(t, i), (this.C = !1)), this.lo;
				}),
				t
			);
		})(),
		ki = (function (t) {
			function i(i) {
				return t.call(this, i) || this;
			}
			return (
				r(i, t),
				(i.prototype.fo = function (t, i) {
					this.ao.tt = !1;
					var n = this.du.X(),
						s = n.ys().ys;
					if (2 === s || 3 === s) {
						var h = this.du.O();
						if (h.baseLineVisible) {
							var r = this.du.q();
							null !== r &&
								((this.ao.tt = !0),
								(this.ao.p = n.$(r.Z, r.Z)),
								(this.ao.dt = i),
								(this.ao.wt = t),
								(this.ao.et = h.baseLineColor),
								(this.ao.rt = h.baseLineWidth),
								(this.ao.ut = h.baseLineStyle));
						}
					}
				}),
				i
			);
		})(yi);
	function xi(t, i) {
		return at(Math.min(Math.max(t, 12), 30) * i);
	}
	function Ni(t, i) {
		switch (t) {
			case "arrowDown":
			case "arrowUp":
				return xi(i, 1);
			case "circle":
				return xi(i, 0.8);
			case "square":
				return xi(i, 0.7);
		}
	}
	function Si(t) {
		return ot(xi(t, 1));
	}
	function Di(t) {
		return Math.max(xi(t, 0.1), 3);
	}
	function Ti(t, i, n, s, h) {
		var r = Ni("square", n),
			e = (r - 1) / 2,
			u = t - e,
			o = i - e;
		return s >= u && s <= u + r && h >= o && h <= o + r;
	}
	function Ci(t, i, n, s, h) {
		var r = (Ni("arrowUp", h) - 1) / 2,
			e = (at(h / 2) - 1) / 2;
		i.beginPath(),
			t
				? (i.moveTo(n - r, s),
				  i.lineTo(n, s - r),
				  i.lineTo(n + r, s),
				  i.lineTo(n + e, s),
				  i.lineTo(n + e, s + r),
				  i.lineTo(n - e, s + r),
				  i.lineTo(n - e, s))
				: (i.moveTo(n - r, s),
				  i.lineTo(n, s + r),
				  i.lineTo(n + r, s),
				  i.lineTo(n + e, s),
				  i.lineTo(n + e, s - r),
				  i.lineTo(n - e, s - r),
				  i.lineTo(n - e, s)),
			i.fill();
	}
	function Ei(t, i, n, s, h, r) {
		return Ti(i, n, s, h, r);
	}
	var Ai = (function (t) {
		function i() {
			var i = (null !== t && t.apply(this, arguments)) || this;
			return (
				(i.G = null),
				(i.io = new bi()),
				(i.Ve = -1),
				(i.ze = ""),
				(i.co = ""),
				i
			);
		}
		return (
			r(i, t),
			(i.prototype.v = function (t) {
				this.G = t;
			}),
			(i.prototype.no = function (t, i) {
				(this.Ve === t && this.ze === i) ||
					((this.Ve = t), (this.ze = i), (this.co = Ut(t, i)), this.io.tr());
			}),
			(i.prototype.vo = function (t, i) {
				if (null === this.G || null === this.G._) return null;
				for (var n = this.G._.from; n < this.G._.to; n++) {
					var s = this.G.M[n];
					if (Bi(s, t, i)) return { _o: s.do, wo: s.wo };
				}
				return null;
			}),
			(i.prototype.h = function (t, i, n) {
				if (null !== this.G && null !== this.G._) {
					(t.textBaseline = "middle"), (t.font = this.co);
					for (var s = this.G._.from; s < this.G._.to; s++) {
						var h = this.G.M[s];
						void 0 !== h.Et &&
							((h.Et.dt = this.io.At(t, h.Et.Mo)), (h.Et.wt = this.Ve)),
							Li(h, t);
					}
				}
			}),
			i
		);
	})(y);
	function Li(t, i) {
		(i.fillStyle = t.et),
			void 0 !== t.Et &&
				(function (t, i, n, s) {
					t.fillText(i, n, s);
				})(i, t.Et.Mo, t.m - t.Et.dt / 2, t.Et.p),
			(function (t, i) {
				if (0 === t.or) return;
				switch (t.bo) {
					case "arrowDown":
						return void Ci(!1, i, t.m, t.p, t.or);
					case "arrowUp":
						return void Ci(!0, i, t.m, t.p, t.or);
					case "circle":
						return void (function (t, i, n, s) {
							var h = (Ni("circle", s) - 1) / 2;
							t.beginPath(), t.arc(i, n, h, 0, 2 * Math.PI, !1), t.fill();
						})(i, t.m, t.p, t.or);
					case "square":
						return void (function (t, i, n, s) {
							var h = Ni("square", s),
								r = (h - 1) / 2,
								e = i - r,
								u = n - r;
							t.fillRect(e, u, h, h);
						})(i, t.m, t.p, t.or);
				}
				t.bo;
			})(t, i);
	}
	function Bi(t, i, n) {
		return (
			!(
				void 0 === t.Et ||
				!(function (t, i, n, s, h, r) {
					var e = s / 2;
					return h >= t && h <= t + n && r >= i - e && r <= i + e;
				})(t.m, t.Et.p, t.Et.dt, t.Et.wt, i, n)
			) ||
			(function (t, i, n) {
				if (0 === t.or) return !1;
				switch (t.bo) {
					case "arrowDown":
					case "arrowUp":
						return Ei(0, t.m, t.p, t.or, i, n);
					case "circle":
						return (function (t, i, n, s, h) {
							var r = 2 + Ni("circle", n) / 2,
								e = t - s,
								u = i - h;
							return Math.sqrt(e * e + u * u) <= r;
						})(t.m, t.p, t.or, i, n);
					case "square":
						return Ti(t.m, t.p, t.or, i, n);
				}
				t.bo;
			})(t, i, n)
		);
	}
	function Vi(t, i, n, s, h, r, e, u, o) {
		var a = v(n) ? n : n.close,
			l = v(n) ? n : n.high,
			f = v(n) ? n : n.low,
			c = v(i.size) ? Math.max(i.size, 0) : 1,
			_ = Si(u.ue()) * c,
			d = _ / 2;
		switch (((t.or = _), i.position)) {
			case "inBar":
				return (
					(t.p = e.$(a, o)),
					void (void 0 !== t.Et && (t.Et.p = t.p + d + r + 0.6 * h))
				);
			case "aboveBar":
				return (
					(t.p = e.$(l, o) - d - s.mo),
					void 0 !== t.Et && ((t.Et.p = t.p - d - 0.6 * h), (s.mo += 1.2 * h)),
					void (s.mo += _ + r)
				);
			case "belowBar":
				return (
					(t.p = e.$(f, o) + d + s.po),
					void 0 !== t.Et &&
						((t.Et.p = t.p + d + r + 0.6 * h), (s.po += 1.2 * h)),
					void (s.po += _ + r)
				);
		}
		i.position;
	}
	var zi = (function () {
			function t(t, i) {
				(this.C = !0),
					(this.yo = !0),
					(this.ko = !0),
					(this.xo = null),
					(this.at = new Ai()),
					(this.No = t),
					(this.ni = i),
					(this.G = { M: [], _: null });
			}
			return (
				(t.prototype.B = function (t) {
					(this.C = !0), (this.ko = !0), "data" === t && (this.yo = !0);
				}),
				(t.prototype.I = function (t, i, n) {
					this.C && this.bu();
					var s = this.ni.O().layout;
					return (
						this.at.no(s.fontSize, s.fontFamily), this.at.v(this.G), this.at
					);
				}),
				(t.prototype.So = function () {
					if (this.ko) {
						if (this.No.Do().length > 0) {
							var t = this.ni.j().ue(),
								i = Di(t),
								n = 1.5 * Si(t) + 2 * i;
							this.xo = { above: n, below: n };
						} else this.xo = null;
						this.ko = !1;
					}
					return this.xo;
				}),
				(t.prototype.bu = function () {
					var t = this.No.X(),
						i = this.ni.j(),
						n = this.No.Do();
					this.yo &&
						((this.G.M = n.map(function (t) {
							return {
								P: t.time,
								m: 0,
								p: 0,
								or: 0,
								bo: t.shape,
								et: t.color,
								do: t.do,
								wo: t.id,
								Et: void 0,
							};
						})),
						(this.yo = !1));
					var s = this.ni.O().layout;
					this.G._ = null;
					var h = i.jr();
					if (null !== h) {
						var r = this.No.q();
						if (null !== r && 0 !== this.G.M.length) {
							var e = NaN,
								u = Di(i.ue()),
								o = { mo: u, po: u };
							this.G._ = hi(this.G.M, h, !0);
							for (var a = this.G._.from; a < this.G._.to; a++) {
								var l = n[a];
								l.time !== e && ((o.mo = u), (o.po = u), (e = l.time));
								var f = this.G.M[a];
								(f.m = i.J(l.time)),
									void 0 !== l.text &&
										l.text.length > 0 &&
										(f.Et = { Mo: l.text, p: 0, dt: 0, wt: 0 });
								var c = this.No.To(l.time);
								null !== c && Vi(f, l, c, o, s.fontSize, u, t, i, r.Z);
							}
							this.C = !1;
						}
					}
				}),
				t
			);
		})(),
		Pi = (function (t) {
			function i(i) {
				return t.call(this, i) || this;
			}
			return (
				r(i, t),
				(i.prototype.fo = function (t, i) {
					var n = this.ao;
					n.tt = !1;
					var s = this.du.O();
					if (s.priceLineVisible) {
						var h = this.du.Co(void 0, 0 === s.priceLineSource);
						h.Eo ||
							((n.tt = !0),
							(n.p = h.Vt),
							(n.et = this.du.Ao(h.et)),
							(n.dt = i),
							(n.wt = t),
							(n.rt = s.priceLineWidth),
							(n.ut = s.priceLineStyle));
					}
				}),
				i
			);
		})(yi),
		Fi = (function (t) {
			function i(i, n) {
				var s = t.call(this) || this;
				return (s.lt = i), (s.G = n), s;
			}
			return (
				r(i, t),
				(i.prototype.Lo = function () {
					return this.G;
				}),
				(i.prototype.Xt = function (t, i, n) {
					(t.tt = !1), (i.tt = !1);
					var s = this.lt.O(),
						h = s.lastValueVisible,
						r = "" !== this.lt.Bo(),
						e = 0 === s.seriesLastValueMode,
						u = this.lt.Co(void 0, !1);
					u.Eo ||
						(h && ((t.Et = this.Vo(u, h, e)), (t.tt = 0 !== t.Et.length)),
						(r || e) &&
							((i.Et = this.zo(u, h, r, e)), (i.tt = i.Et.length > 0)),
						(n.Pt = this.lt.Ao(u.et)),
						(n.et = I(n.Pt)),
						(n.Vt = u.Vt),
						(i.Ft = this.lt.ct().O().layout.backgroundColor),
						(t.Ft = n.Pt));
				}),
				(i.prototype.zo = function (t, i, n, s) {
					var h = "",
						r = this.lt.Bo();
					return (
						n && 0 !== r.length && (h += r + " "),
						i && s && (h += this.lt.X().Ss() ? t.Po : t.Fo),
						h.trim()
					);
				}),
				(i.prototype.Vo = function (t, i, n) {
					return i ? (n ? (this.lt.X().Ss() ? t.Fo : t.Po) : t.Et) : "";
				}),
				i
			);
		})(H),
		Oi = (function () {
			function t(t, i) {
				(this.$n = t), (this.Oo = i || null);
			}
			return (
				(t.prototype.Os = function () {
					return this.$n;
				}),
				(t.prototype.yh = function () {
					return this.Oo;
				}),
				(t.prototype.Dn = function () {
					return null === this.$n
						? null
						: { priceRange: this.$n.Dn(), margins: this.Oo || void 0 };
				}),
				(t.Tn = function (i) {
					return null === i ? null : new t(ht.Tn(i.priceRange), i.margins);
				}),
				t
			);
		})(),
		Ii = (function (t) {
			function i(i, n) {
				var s = t.call(this, i) || this;
				return (s.Io = n), s;
			}
			return (
				r(i, t),
				(i.prototype.fo = function (t, i) {
					var n = this.ao;
					n.tt = !1;
					var s = this.Io.Ro();
					if (null !== s) {
						var h = this.Io.O();
						(n.tt = !0),
							(n.p = s),
							(n.et = h.color),
							(n.dt = i),
							(n.wt = t),
							(n.rt = h.lineWidth),
							(n.ut = h.lineStyle);
					}
				}),
				i
			);
		})(yi),
		Ri = (function (t) {
			function i(i, n) {
				var s = t.call(this) || this;
				return (s.No = i), (s.Io = n), s;
			}
			return (
				r(i, t),
				(i.prototype.Xt = function (t, i, n) {
					(t.tt = !1), (i.tt = !1);
					var s = this.Io.O();
					if (s.axisLabelVisible) {
						var h = this.Io.Ro();
						null !== h &&
							((t.Et = this.No.X().fh(s.price)),
							(t.tt = !0),
							(n.Pt = s.color),
							(n.et = I(s.color)),
							(n.Vt = h));
					}
				}),
				i
			);
		})(H),
		Wi = (function () {
			function t(t, i) {
				(this.No = t),
					(this.Si = i),
					(this.Wo = new Ii(t, this)),
					(this.so = new Ri(t, this));
			}
			return (
				(t.prototype.ms = function (t) {
					c(this.Si, t), this.B(), this.No.ct().ee();
				}),
				(t.prototype.O = function () {
					return this.Si;
				}),
				(t.prototype.jo = function () {
					return this.Wo;
				}),
				(t.prototype.Uo = function () {
					return this.so;
				}),
				(t.prototype.B = function () {
					this.Wo.B(), this.so.B();
				}),
				(t.prototype.Ro = function () {
					var t = this.No,
						i = t.X();
					if (t.ct().j().Gt() || i.Gt()) return null;
					var n = t.q();
					return null === n ? null : i.$(this.Si.price, n.Z);
				}),
				t
			);
		})(),
		ji = (function () {
			function t() {
				(this.qo = 0), (this.Ho = new Map()), (this.Yo = new Map());
			}
			return (
				(t.prototype.Ju = function (t) {
					return a(this.Yo.get(t));
				}),
				(t.prototype.Ko = function (t) {
					var i = this.Ho.get(t);
					return (
						void 0 === i &&
							((i = this.qo++), this.Ho.set(t, i), this.Yo.set(i, t)),
						i
					);
				}),
				(t.prototype.ur = function () {
					(this.qo = 0), this.Ho.clear(), this.Yo.clear();
				}),
				(t.prototype.or = function () {
					return this.Yo.size;
				}),
				t
			);
		})(),
		Ui = (function (t) {
			function i(i) {
				var n = t.call(this) || this;
				return (n.ni = i), n;
			}
			return (
				r(i, t),
				(i.prototype.ct = function () {
					return this.ni;
				}),
				(i.prototype.Mh = function () {
					return 0;
				}),
				(i.prototype.mh = function (t, i) {
					return null;
				}),
				i
			);
		})(Z),
		qi = { H: "", ju: "", Wu: "" },
		Hi = (function () {
			function t(t) {
				this.No = t;
			}
			return (
				(t.prototype.Y = function (t, i) {
					var n = this.No.$o(),
						s = this.No.O();
					switch (n) {
						case "Line":
							return this.Xo(s);
						case "Area":
							return this.Zo(s);
						case "Bar":
							return this.Jo(s, t, i);
						case "Candlestick":
							return this.Go(s, t, i);
						case "Histogram":
							return this.Qo(s, t, i);
					}
					throw new Error("Unknown chart style");
				}),
				(t.prototype.Jo = function (t, i, n) {
					var s = e({}, qi),
						h = t.upColor,
						r = t.downColor,
						u = h,
						o = r,
						a = l(this.ta(i, n)),
						c = f(a.Z[0]) <= f(a.Z[3]);
					return (s.H = c ? h : r), (s.ju = c ? u : o), s;
				}),
				(t.prototype.Go = function (t, i, n) {
					var s = e({}, qi),
						h = t.upColor,
						r = t.downColor,
						u = t.borderUpColor,
						o = t.borderDownColor,
						a = t.wickUpColor,
						c = t.wickDownColor,
						v = l(this.ta(i, n)),
						_ = f(v.Z[0]) <= f(v.Z[3]);
					return (s.H = _ ? h : r), (s.ju = _ ? u : o), (s.Wu = _ ? a : c), s;
				}),
				(t.prototype.Zo = function (t) {
					return e(e({}, qi), { H: t.lineColor });
				}),
				(t.prototype.Xo = function (t) {
					return e(e({}, qi), { H: t.color });
				}),
				(t.prototype.Qo = function (t, i, n) {
					var s = e({}, qi),
						h = l(this.ta(i, n)).Z[4];
					if (null != h) {
						var r = l(this.No.Zu());
						s.H = r.Ju(h);
					} else s.H = t.color;
					return s;
				}),
				(t.prototype.ia = function () {
					return this.No.Ki();
				}),
				(t.prototype.ta = function (t, i) {
					return void 0 !== i ? i.Z : this.ia().cr(t);
				}),
				t
			);
		})(),
		Yi = (function () {
			function t(t, i) {
				void 0 === t && (t = null),
					void 0 === i && (i = null),
					(this.er = []),
					(this.na = 0),
					(this.sa = 0),
					(this.ha = !1),
					(this.ra = new Map()),
					(this.ea = new Map()),
					(this.ua = new Map()),
					(this.oa = t || new Map()),
					(this.aa = i);
			}
			return (
				(t.prototype.ur = function () {
					(this.er = []),
						(this.na = 0),
						(this.sa = 0),
						(this.ha = !1),
						this.ra.clear(),
						this.ea.clear(),
						this.ua.clear();
				}),
				(t.prototype.la = function () {
					return this.or() > 0 ? this.er[this.na] : null;
				}),
				(t.prototype.fa = function () {
					return this.or() > 0 ? this.er[this.sa - 1] : null;
				}),
				(t.prototype.ar = function () {
					return this.or() > 0 ? this.ca(this.na) : null;
				}),
				(t.prototype.Yi = function () {
					return this.or() > 0 ? this.ca(this.sa - 1) : null;
				}),
				(t.prototype.or = function () {
					return this.sa - this.na;
				}),
				(t.prototype.Gt = function () {
					return 0 === this.or();
				}),
				(t.prototype.Kh = function (t) {
					return null !== this.va(t, 0);
				}),
				(t.prototype.cr = function (t) {
					return this._a(t);
				}),
				(t.prototype.da = function (t, i, n) {
					if (this.ha) return !1;
					var s = { Bi: t, Z: n, P: i },
						h = this.va(t, 0);
					return (
						this.ea.clear(),
						this.ua.clear(),
						null === h
							? (this.er.splice(this.wa(t), 0, s),
							  (this.na = 0),
							  (this.sa = this.er.length),
							  !0)
							: ((this.er[h] = s), !1)
					);
				}),
				(t.prototype._a = function (t, i, n) {
					void 0 === i && (i = 0);
					var s = this.va(t, i, n);
					if (null === s) return null;
					var h = this.Ma(s);
					return { Bi: this.ca(s), P: h.P, Z: h.Z };
				}),
				(t.prototype.Nu = function (t) {
					for (var i = this.na; i < this.sa; ++i) {
						if (t(this.ca(i), this.Ma(i))) break;
					}
				}),
				(t.prototype.ba = function (i, n) {
					var s = new t(this.oa, this.aa);
					return (
						(s.er = this.er),
						(s.na = this.wa(i)),
						(s.sa = this.ma(n)),
						(s.ha = !0),
						s
					);
				}),
				(t.prototype.pa = function (t, i, n) {
					if (this.Gt()) return null;
					for (var s = null, h = 0, r = n; h < r.length; h++) {
						var e = r[h];
						s = Ki(s, this.ga(t, i, e));
					}
					return s;
				}),
				(t.prototype.gn = function (t) {
					return this.ha || 0 === t.length
						? null
						: this.Gt() || t[t.length - 1].Bi < this.er[0].Bi
						? this.ya(t)
						: t[0].Bi > this.er[this.er.length - 1].Bi
						? this.ka(t)
						: 1 === t.length && t[0].Bi === this.er[this.er.length - 1].Bi
						? (this.xa(t[0]), t[0])
						: this.Na(t);
				}),
				(t.prototype.Sa = function (t) {
					if (this.ha) return null;
					var i = this.va(t, 1);
					if (null === i) return null;
					var n = this.er.splice(i);
					return (
						(this.sa = this.er.length),
						this.ra.clear(),
						this.ea.clear(),
						this.ua.clear(),
						n.length > 0 ? n[0] : null
					);
				}),
				(t.prototype.ca = function (t) {
					return this.er[t].Bi;
				}),
				(t.prototype.Ma = function (t) {
					return this.er[t];
				}),
				(t.prototype.va = function (t, i, n) {
					var s = this.Da(t);
					if (null === s && 0 !== i)
						switch (i) {
							case -1:
								return this.Ta(t, n);
							case 1:
								return this.Ca(t, n);
							default:
								throw new TypeError("Unknown search mode");
						}
					if (!n || null === s || 0 === i) return s;
					switch (i) {
						case -1:
							return this.Ea(s);
						case 1:
							return this.Aa(s);
						default:
							throw new TypeError("Unknown search mode");
					}
				}),
				(t.prototype.Aa = function (t) {
					for (var i = l(this.aa); t < this.sa && i(this.Ma(t).Z); ) t += 1;
					return t === this.sa ? null : t;
				}),
				(t.prototype.Ea = function (t) {
					for (var i = l(this.aa); t >= this.na && i(this.Ma(t).Z); ) t -= 1;
					return t < this.na ? null : t;
				}),
				(t.prototype.Ta = function (t, i) {
					var n = this.wa(t);
					n > this.na && (n -= 1);
					var s = n !== this.sa && this.ca(n) < t ? n : null;
					return i && null !== s ? this.Ea(s) : s;
				}),
				(t.prototype.Ca = function (t, i) {
					var n = this.ma(t),
						s = n !== this.sa && t < this.ca(n) ? n : null;
					return i && null !== s ? this.Aa(s) : s;
				}),
				(t.prototype.Da = function (t) {
					var i = this.wa(t);
					return i === this.sa || t < this.er[i].Bi ? null : i;
				}),
				(t.prototype.wa = function (t) {
					return ti(
						this.er,
						t,
						function (t, i) {
							return t.Bi < i;
						},
						this.na,
						this.sa
					);
				}),
				(t.prototype.ma = function (t) {
					return ii(
						this.er,
						t,
						function (t, i) {
							return i.Bi > t;
						},
						this.na,
						this.sa
					);
				}),
				(t.prototype.La = function (t, i, n) {
					var s = null,
						h = this.oa.get(n.Ba);
					if (void 0 === h)
						throw new Error('Plot "' + n.Ba + '" is not registered');
					for (var r = t; r < i; r++) {
						var e = h(this.er[r].Z);
						null == e ||
							Number.isNaN(e) ||
							(null === s
								? (s = { Va: e, za: e })
								: (e < s.Va && (s.Va = e), e > s.za && (s.za = e)));
					}
					return s;
				}),
				(t.prototype.Pa = function (t) {
					var i = Math.floor(t.Bi / 30);
					this.ra.forEach(function (t) {
						return t.delete(i);
					});
				}),
				(t.prototype.ya = function (t) {
					return (
						o(!this.ha, "collection should not be readonly"),
						o(0 !== t.length, "plotRows should not be empty"),
						this.ea.clear(),
						this.ua.clear(),
						this.ra.clear(),
						(this.er = t.concat(this.er)),
						(this.na = 0),
						(this.sa = this.er.length),
						t[0]
					);
				}),
				(t.prototype.ka = function (t) {
					return (
						o(!this.ha, "collection should not be readonly"),
						o(0 !== t.length, "plotRows should not be empty"),
						this.ea.clear(),
						this.ua.clear(),
						this.ra.clear(),
						(this.er = this.er.concat(t)),
						(this.na = 0),
						(this.sa = this.er.length),
						t[0]
					);
				}),
				(t.prototype.xa = function (t) {
					o(!this.Gt(), "plot list should not be empty"),
						o(
							this.er[this.sa - 1].Bi === t.Bi,
							"last row index should match new row index"
						),
						this.Pa(t),
						this.ea.delete(t.Bi),
						this.ua.delete(t.Bi),
						(this.er[this.sa - 1] = t);
				}),
				(t.prototype.Na = function (t) {
					return (
						o(0 !== t.length, "plot rows should not be empty"),
						this.ea.clear(),
						this.ua.clear(),
						this.ra.clear(),
						(this.er = (function (t, i) {
							var n = (function (t, i) {
									var n = t.length,
										s = i.length,
										h = n + s,
										r = 0,
										e = 0;
									for (; r < n && e < s; )
										t[r].Bi < i[e].Bi
											? r++
											: t[r].Bi > i[e].Bi
											? e++
											: (r++, e++, h--);
									return h;
								})(t, i),
								s = new Array(n),
								h = 0,
								r = 0,
								e = t.length,
								u = i.length,
								o = 0;
							for (; h < e && r < u; )
								t[h].Bi < i[r].Bi
									? ((s[o] = t[h]), h++)
									: t[h].Bi > i[r].Bi
									? ((s[o] = i[r]), r++)
									: ((s[o] = i[r]), h++, r++),
									o++;
							for (; h < e; ) (s[o] = t[h]), h++, o++;
							for (; r < u; ) (s[o] = i[r]), r++, o++;
							return s;
						})(this.er, t)),
						(this.na = 0),
						(this.sa = this.er.length),
						t[0]
					);
				}),
				(t.prototype.ga = function (t, i, n) {
					if (this.Gt()) return null;
					var s = null,
						h = l(this.ar()),
						r = l(this.Yi()),
						e = t - n.Fa,
						u = i - n.Fa;
					(e = Math.max(e, h)), (u = Math.min(u, r));
					var o = 30 * Math.ceil(e / 30),
						a = Math.max(o, 30 * Math.floor(u / 30)),
						f = this.wa(e),
						c = this.ma(Math.min(u, o, i));
					s = Ki(s, this.La(f, c, n));
					var v = this.ra.get(n.Ba);
					void 0 === v && ((v = new Map()), this.ra.set(n.Ba, v));
					for (var _ = Math.max(o + 1, e); _ < a; _ += 30) {
						var d = Math.floor(_ / 30),
							w = v.get(d);
						if (void 0 === w) {
							var M = this.wa(30 * d),
								b = this.ma(30 * (d + 1) - 1);
							(w = this.La(M, b, n)), v.set(d, w);
						}
						s = Ki(s, w);
					}
					(f = this.wa(a)), (c = this.ma(u));
					return (s = Ki(s, this.La(f, c, n)));
				}),
				t
			);
		})();
	function Ki(t, i) {
		return null === t
			? i
			: null === i
			? t
			: { Va: Math.min(t.Va, i.Va), za: Math.max(t.za, i.za) };
	}
	var $i = {
			open: function (t) {
				return t[0];
			},
			high: function (t) {
				return t[1];
			},
			low: function (t) {
				return t[2];
			},
			close: function (t) {
				return t[3];
			},
			hl2: function (t) {
				return (t[1] + t[2]) / 2;
			},
			hlc3: function (t) {
				return (t[1] + t[2] + t[3]) / 3;
			},
			ohlc4: function (t) {
				return (t[0] + t[1] + t[2] + t[3]) / 4;
			},
		},
		Xi = ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"];
	function Zi(t) {
		return $i[t];
	}
	function Ji() {
		return new Yi(
			((t = new Map()),
			Xi.forEach(function (i, n) {
				t.set(i, Zi(i));
			}),
			t)
		);
		var t;
	}
	var Gi = (function (t) {
			function i(i, n, s) {
				var h = t.call(this, i) || this;
				(h.G = Ji()),
					(h.Wo = new Pi(h)),
					(h.Oa = []),
					(h.Ia = new ki(h)),
					(h.Ra = !1),
					(h.Wa = null),
					(h.ja = new ji()),
					(h.Ua = []),
					(h.qa = []),
					(h.Si = n),
					(h.Ha = s);
				var r = new Fi(h, { ct: i });
				return (
					(h.pi = [r]),
					(h.Ya = new pi(r, h, i)),
					h.Ka(),
					h.$a(),
					(h.Xa = h.xu()),
					h.Za(),
					h
				);
			}
			return (
				r(i, t),
				(i.prototype.fn = function () {}),
				(i.prototype.Ja = function () {
					return this.Ra;
				}),
				(i.prototype.Ao = function (t) {
					return this.Si.priceLineColor || t;
				}),
				(i.prototype.Co = function (t, i, n) {
					var s = { Eo: !0 },
						h = this.X();
					if (this.ct().j().Gt() || h.Gt() || this.G.Gt()) return s;
					var r,
						e,
						u = this.ct().j().jr(),
						o = this.q();
					if (null === u || null === o) return s;
					if (i) {
						var a = this.G.fa();
						if (null === a) return s;
						(r = a), (e = a.Bi);
					} else {
						var l = this.G._a(u.gh(), -1);
						if (null === l) return s;
						if (null === (r = this.G.cr(l.Bi))) return s;
						e = l.Bi;
					}
					var f = void 0 !== t ? r.Z[t] : this.Xa(r.Z),
						c = this.K().Y(e, { Z: r }),
						v = h.$(f, o.Z);
					return {
						Eo: !1,
						F: n ? f : void 0,
						Et: h.Qt(f, o.Z),
						Po: h.fh(f),
						Fo: h._h(f, o.Z),
						et: c.H,
						Vt: v,
						Bi: e,
					};
				}),
				(i.prototype.K = function () {
					return null !== this.Wa || (this.Wa = new Hi(this)), this.Wa;
				}),
				(i.prototype.O = function () {
					return this.Si;
				}),
				(i.prototype.ms = function (t) {
					var i = t.priceScaleId;
					void 0 !== i && i !== this.Si.priceScaleId && this.ct().Ga(this, i),
						c(this.Si, t),
						null !== this.oi &&
							void 0 !== t.scaleMargins &&
							this.oi.ms({ scaleMargins: t.scaleMargins }),
						void 0 !== t.priceFormat && this.Ka(),
						this.ct().Qa(this);
				}),
				(i.prototype.tl = function () {
					this.G.ur(), this.ja.ur(), this.Za();
				}),
				(i.prototype.il = function (t, i) {
					void 0 === i && (i = !1),
						i && this.G.ur(),
						this.G.gn(t),
						this.nl(),
						this.Li.B("data"),
						this.Di.B("data");
					var n = this.ct().ro(this);
					this.ct().sl(n), this.ct().Qa(this), this.ct().hl(), this.ct().ee();
				}),
				(i.prototype.rl = function (t) {
					(this.Ua = t.map(function (t) {
						return e({}, t);
					})),
						this.nl();
					var i = this.ct().ro(this);
					this.Di.B("data"),
						this.ct().sl(i),
						this.ct().Qa(this),
						this.ct().hl(),
						this.ct().ee();
				}),
				(i.prototype.el = function () {
					return this.Ua;
				}),
				(i.prototype.Do = function () {
					return this.qa;
				}),
				(i.prototype.ul = function (t) {
					var i = new Wi(this, t);
					return this.Oa.push(i), this.ct().Qa(this), i;
				}),
				(i.prototype.ol = function (t) {
					var i = this.Oa.indexOf(t);
					-1 !== i && this.Oa.splice(i, 1), this.ct().Qa(this);
				}),
				(i.prototype.Zu = function () {
					return this.ja;
				}),
				(i.prototype.$o = function () {
					return this.Ha;
				}),
				(i.prototype.q = function () {
					var t = this.al();
					return null === t ? null : { Z: this.Xa(t.Z), ih: t.P };
				}),
				(i.prototype.al = function () {
					var t = this.ct().j().jr();
					if (null === t) return null;
					var i = t.ph();
					return this.G._a(i, 1);
				}),
				(i.prototype.Ki = function () {
					return this.G;
				}),
				(i.prototype.hr = function (t, i) {
					var n = this.ll(t, i);
					return n ? n.Bi : null;
				}),
				(i.prototype.ll = function (t, i) {
					return _(t) ? this.G._a(t, i) : null;
				}),
				(i.prototype.To = function (t) {
					var i = this.G.cr(t);
					return null === i
						? null
						: "Bar" === this.Ha || "Candlestick" === this.Ha
						? { open: i.Z[0], high: i.Z[1], low: i.Z[2], close: i.Z[3] }
						: this.xu()(i.Z);
				}),
				(i.prototype._i = function () {
					var t = [];
					this.fl() || t.push(this.Ia);
					for (var i = 0, n = this.Oa; i < n.length; i++) {
						var s = n[i];
						t.push(s.jo());
					}
					return (
						t.push(this.Li),
						t.push(this.Wo),
						t.push(this.Ya),
						t.push(this.Di),
						t
					);
				}),
				(i.prototype.vi = function (t, i) {
					for (
						var n = i === this.oi || this.fl() ? u(this.pi) : [],
							s = 0,
							h = this.Oa;
						s < h.length;
						s++
					) {
						var r = h[s];
						n.push(r.Uo());
					}
					return n;
				}),
				(i.prototype.mh = function (t, i) {
					var n = this;
					if (void 0 !== this.Si.autoscaleInfoProvider) {
						var s = this.Si.autoscaleInfoProvider(function () {
							var s = n.cl(t, i);
							return null === s ? null : s.Dn();
						});
						return Oi.Tn(s);
					}
					return this.cl(t, i);
				}),
				(i.prototype.Mh = function () {
					return this.Si.priceFormat.minMove;
				}),
				(i.prototype.ah = function () {
					return this.ls;
				}),
				(i.prototype.xu = function () {
					return this.Xa;
				}),
				(i.prototype.Ui = function () {
					this.Li.B(), this.Di.B();
					for (var t = 0, i = this.pi; t < i.length; t++) {
						i[t].B();
					}
					for (var n = 0, s = this.Oa; n < s.length; n++) {
						s[n].B();
					}
					this.Wo.B(), this.Ia.B();
				}),
				(i.prototype.ci = function (t) {
					this.oi !== t && (this.oi = t);
				}),
				(i.prototype.X = function () {
					return l(this.oi);
				}),
				(i.prototype.U = function (t) {
					if (
						!(
							("Line" === this.Ha || "Area" === this.Ha) &&
							this.Si.crosshairMarkerVisible
						)
					)
						return null;
					var i = this.G.cr(t);
					return null === i ? null : { F: this.Xa(i.Z), k: this.vl() };
				}),
				(i.prototype.Bo = function () {
					return this.Si.title;
				}),
				(i.prototype.fl = function () {
					return !Ht(this.X().bs());
				}),
				(i.prototype.cl = function (t, i) {
					if (!_(t) || !_(i) || this.G.Gt()) return null;
					var n,
						s =
							"Line" === this.Ha ||
							"Area" === this.Ha ||
							"Histogram" === this.Ha
								? "close"
								: null,
						h =
							null !==
							(n =
								null !== s
									? this.G.pa(t, i, [{ Ba: s, Fa: 0 }])
									: this.G.pa(t, i, [
											{ Ba: "low", Fa: 0 },
											{ Ba: "high", Fa: 0 },
									  ]))
								? new ht(n.Va, n.za)
								: null;
					if ("Histogram" === this.$o()) {
						var r = this.Si.base,
							e = new ht(r, r);
						h = null !== h ? h.gn(e) : e;
					}
					return new Oi(h, this.Di.So());
				}),
				(i.prototype.vl = function () {
					switch (this.Ha) {
						case "Line":
						case "Area":
							return this.Si.crosshairMarkerRadius;
					}
					return 0;
				}),
				(i.prototype.Ka = function () {
					switch (this.Si.priceFormat.type) {
						case "custom":
							this.ls = { Gi: this.Si.priceFormat.formatter };
							break;
						case "volume":
							this.ls = new Zt(this.Si.priceFormat.precision);
							break;
						case "percent":
							this.ls = new nt(this.Si.priceFormat.precision);
							break;
						default:
							var t = Math.pow(10, this.Si.priceFormat.precision);
							this.ls = new it(t, this.Si.priceFormat.minMove * t, !1, void 0);
					}
					null !== this.oi && this.oi.ps();
				}),
				(i.prototype.$a = function () {
					this.Xa = Zi("close");
				}),
				(i.prototype.nl = function () {
					var t = this,
						i = this.ct().j().Kr();
					if (0 !== i.or() && 0 !== this.G.or()) {
						var n = l(this.G.ar());
						this.qa = this.Ua.map(function (s, h) {
							var r = l(i._r(s.time.Wh, !0)),
								e = r < n ? 1 : -1;
							return {
								time: l(t.G._a(r, e)).Bi,
								position: s.position,
								shape: s.shape,
								color: s.color,
								id: s.id,
								do: h,
								text: s.text,
								size: s.size,
							};
						});
					} else this.qa = [];
				}),
				(i.prototype.Za = function () {
					switch (((this.Di = new zi(this, this.ct())), this.Ha)) {
						case "Bar":
							this.Li = new li(this, this.ct());
							break;
						case "Candlestick":
							this.Li = new ci(this, this.ct());
							break;
						case "Line":
							this.Li = new wi(this, this.ct());
							break;
						case "Area":
							this.Li = new ui(this, this.ct());
							break;
						case "Histogram":
							this.Li = new di(this, this.ct());
							break;
						default:
							throw Error("Unknown chart style assigned: " + this.Ha);
					}
				}),
				i
			);
		})(Ui),
		Qi = (function () {
			function t(t) {
				this.Si = t;
			}
			return (
				(t.prototype._l = function (t, i, n) {
					var s = t;
					if (0 === this.Si.mode) return s;
					var h = n.Ci(),
						r = h.q();
					if (null === r) return s;
					var e = h.$(t, r),
						u = n
							.Zs()
							.filter(function (t) {
								return t instanceof Gi;
							})
							.reduce(function (t, s) {
								if (n.eo(s)) return t;
								var h = s.X(),
									r = s.Ki();
								if (h.Gt() || !r.Kh(i)) return t;
								var e = r.cr(i);
								if (null === e) return t;
								var u = [e.Z[3]],
									o = f(s.q());
								return t.concat(
									u.map(function (t) {
										return h.$(t, o.Z);
									})
								);
							}, []);
					if (0 === u.length) return s;
					u.sort(function (t, i) {
						return Math.abs(t - e) - Math.abs(i - e);
					});
					var o = u[0];
					return (s = h.Ei(o, r));
				}),
				t
			);
		})(),
		tn = (function () {
			function t(t, i) {
				(this.rs = []),
					(this.dl = new Map()),
					(this.Hn = 0),
					(this.pr = 0),
					(this.wl = 1e3),
					(this.es = null),
					(this.Ml = new st()),
					(this.bl = t),
					(this.ni = i);
				var n = i.O();
				(this.ml = this.pl("left", n.leftPriceScale)),
					(this.gl = this.pl("right", n.rightPriceScale)),
					this.ml.Ls().sn(this.yl.bind(this, this.ml), this),
					this.gl.Ls().sn(this.yl.bind(this, this.ml), this),
					this.kl(n);
			}
			return (
				(t.prototype.kl = function (t) {
					if (
						(t.leftPriceScale && this.ml.ms(t.leftPriceScale),
						t.rightPriceScale && this.gl.ms(t.rightPriceScale),
						t.localization && (this.ml.ps(), this.gl.ps()),
						t.overlayPriceScales)
					)
						for (
							var i = 0, n = Array.from(this.dl.values());
							i < n.length;
							i++
						) {
							var s = l(n[i][0].X());
							s.ms(t.overlayPriceScales), t.localization && s.ps();
						}
				}),
				(t.prototype.xl = function (t) {
					switch (t) {
						case "left":
							return this.ml;
						case "right":
							return this.gl;
					}
					return this.dl.has(t) ? a(this.dl.get(t))[0].X() : null;
				}),
				(t.prototype.fn = function () {
					this.ct().Nl().on(this),
						this.ml.Ls().on(this),
						this.gl.Ls().on(this),
						this.rs.forEach(function (t) {
							t.fn && t.fn();
						}),
						this.Ml.an();
				}),
				(t.prototype.Sl = function () {
					return this.wl;
				}),
				(t.prototype.Dl = function (t) {
					this.wl = t;
				}),
				(t.prototype.ct = function () {
					return this.ni;
				}),
				(t.prototype.dt = function () {
					return this.pr;
				}),
				(t.prototype.wt = function () {
					return this.Hn;
				}),
				(t.prototype.Zr = function (t) {
					(this.pr = t), this.Ui();
				}),
				(t.prototype.Bs = function (t) {
					var i = this;
					(this.Hn = t),
						this.ml.Bs(t),
						this.gl.Bs(t),
						this.rs.forEach(function (n) {
							if (i.eo(n)) {
								var s = n.X();
								null !== s && s.Bs(t);
							}
						}),
						this.Ui();
				}),
				(t.prototype.Zs = function () {
					return this.rs;
				}),
				(t.prototype.eo = function (t) {
					var i = t.X();
					return null === i || (this.ml !== i && this.gl !== i);
				}),
				(t.prototype.Gs = function (t, i, n) {
					var s = void 0 !== n ? n : this.Cl().Tl - 1;
					this.El(t, i, s);
				}),
				(t.prototype.th = function (t) {
					var i = this.rs.indexOf(t);
					o(-1 !== i, "removeDataSource: invalid data source"),
						this.rs.splice(i, 1);
					var n = l(t.X()).bs();
					if (this.dl.has(n)) {
						var s = a(this.dl.get(n)),
							h = s.indexOf(t);
						-1 !== h && (s.splice(h, 1), 0 === s.length && this.dl.delete(n));
					}
					var r = t.X();
					r && r.Zs().indexOf(t) >= 0 && r.th(t),
						null !== r && (r.Qs(), this.Al(r)),
						(this.es = null);
				}),
				(t.prototype.uo = function (t) {
					return t === this.ml ? "left" : t === this.gl ? "right" : "overlay";
				}),
				(t.prototype.Ll = function () {
					return this.ml;
				}),
				(t.prototype.Bl = function () {
					return this.gl;
				}),
				(t.prototype.Vl = function (t, i) {
					t.sh(i);
				}),
				(t.prototype.zl = function (t, i) {
					t.hh(i), this.Ui();
				}),
				(t.prototype.Pl = function (t) {
					t.rh();
				}),
				(t.prototype.Fl = function (t, i) {
					t.eh(i);
				}),
				(t.prototype.Ol = function (t, i) {
					t.uh(i), this.Ui();
				}),
				(t.prototype.Il = function (t) {
					t.oh();
				}),
				(t.prototype.Rl = function (t, i) {
					t.gs({ Ts: i }), this.bl.Gt() ? t.Es(null) : this.Al(t);
				}),
				(t.prototype.Ui = function () {
					this.rs.forEach(function (t) {
						t.Ui();
					});
				}),
				(t.prototype.Ci = function () {
					var t = null;
					return (
						this.ni.O().rightPriceScale.visible && 0 !== this.gl.Zs().length
							? (t = this.gl)
							: this.ni.O().leftPriceScale.visible && 0 !== this.ml.Zs().length
							? (t = this.ml)
							: 0 !== this.rs.length && (t = this.rs[0].X()),
						null === t && (t = this.gl),
						t
					);
				}),
				(t.prototype.Al = function (t) {
					null !== t && t.Ns() && this.Wl(t);
				}),
				(t.prototype.jl = function (t) {
					var i = this.bl.jr();
					t.gs({ Ts: !0 }), null !== i && t.wh(i), this.Ui();
				}),
				(t.prototype.Ul = function () {
					this.Wl(this.ml), this.Wl(this.gl);
				}),
				(t.prototype.ql = function () {
					var t = this;
					this.Al(this.ml),
						this.Al(this.gl),
						this.rs.forEach(function (i) {
							t.eo(i) && t.Al(i.X());
						}),
						this.Ui(),
						this.ni.ee();
				}),
				(t.prototype.Gt = function () {
					return 0 === this.rs.length;
				}),
				(t.prototype.Js = function () {
					return null === this.es && (this.es = pt(this.rs)), this.es;
				}),
				(t.prototype.Hl = function () {
					return this.Ml;
				}),
				(t.prototype.Wl = function (t) {
					var i = t.dh();
					if (i && i.length > 0 && !this.bl.Gt()) {
						var n = this.bl.jr();
						null !== n && t.wh(n);
					}
					t.Ui();
				}),
				(t.prototype.Cl = function () {
					var t = this.Js();
					if (0 === t.length) return { Tl: 0, Yl: 0 };
					for (var i = 0, n = 0, s = 0; s < t.length; s++) {
						var h = t[s].li();
						null !== h && (h < i && (i = h), h > n && (n = h));
					}
					return { Tl: i, Yl: n };
				}),
				(t.prototype.El = function (t, i, n) {
					var s = this.xl(i);
					if (
						(null === s && (s = this.pl(i, this.ni.O().overlayPriceScales)),
						this.rs.push(t),
						!Ht(i))
					) {
						var h = this.dl.get(i) || [];
						h.push(t), this.dl.set(i, h);
					}
					s.Gs(t), t.ci(s), t.fi(n), this.Al(s), (this.es = null);
				}),
				(t.prototype.yl = function (t, i, n) {
					i.ys !== n.ys && this.Wl(t);
				}),
				(t.prototype.pl = function (t, i) {
					var n = e({ tt: !0, Ts: !0 }, b(i)),
						s = new xt(t, n, this.ni.O().layout, this.ni.O().localization);
					return s.Bs(this.wt()), s;
				}),
				t
			);
		})(),
		nn = (function (t) {
			function i(i) {
				var n = t.call(this) || this;
				return (n.Kl = new Map()), (n.G = i), n;
			}
			return (
				r(i, t),
				(i.prototype.h = function (t) {}),
				(i.prototype.o = function (t) {
					if (this.G.tt) {
						t.save();
						for (var i = 0, n = 0, s = this.G.$l; n < s.length; n++) {
							if (0 !== (o = s[n]).Et.length) {
								t.font = o.gt;
								var h = this.Xl(t, o.Et);
								h > this.G.dt ? (o.de = this.G.dt / h) : (o.de = 1),
									(i += o.Zl * o.de);
							}
						}
						var r = 0;
						switch (this.G.Jl) {
							case "top":
								r = 0;
								break;
							case "center":
								r = Math.max((this.G.wt - i) / 2, 0);
								break;
							case "bottom":
								r = Math.max(this.G.wt - i, 0);
						}
						t.fillStyle = this.G.et;
						for (var e = 0, u = this.G.$l; e < u.length; e++) {
							var o = u[e];
							t.save();
							var a = 0;
							switch (this.G.Gl) {
								case "left":
									(t.textAlign = "left"), (a = o.Zl / 2);
									break;
								case "center":
									(t.textAlign = "center"), (a = this.G.dt / 2);
									break;
								case "right":
									(t.textAlign = "right"), (a = this.G.dt - 1 - o.Zl / 2);
							}
							t.translate(a, r),
								(t.textBaseline = "top"),
								(t.font = o.gt),
								t.scale(o.de, o.de),
								t.fillText(o.Et, 0, o.Ql),
								t.restore(),
								(r += o.Zl * o.de);
						}
						t.restore();
					}
				}),
				(i.prototype.Xl = function (t, i) {
					var n = this.tf(t.font),
						s = n.get(i);
					return void 0 === s && ((s = t.measureText(i).width), n.set(i, s)), s;
				}),
				(i.prototype.tf = function (t) {
					var i = this.Kl.get(t);
					return void 0 === i && ((i = new Map()), this.Kl.set(t, i)), i;
				}),
				i
			);
		})(y),
		sn = (function () {
			function t(t) {
				(this.C = !0),
					(this.ot = {
						tt: !1,
						et: "",
						wt: 0,
						dt: 0,
						$l: [],
						Jl: "center",
						Gl: "center",
					}),
					(this.at = new nn(this.ot)),
					(this.lt = t);
			}
			return (
				(t.prototype.B = function () {
					this.C = !0;
				}),
				(t.prototype.I = function (t, i) {
					return this.C && (this.R(t, i), (this.C = !1)), this.at;
				}),
				(t.prototype.R = function (t, i) {
					var n = this.lt.O(),
						s = this.ot;
					(s.tt = n.visible),
						s.tt &&
							((s.et = n.color),
							(s.dt = i),
							(s.wt = t),
							(s.Gl = n.horzAlign),
							(s.Jl = n.vertAlign),
							(s.$l = [
								{
									Et: n.text,
									gt: Ut(n.fontSize),
									Zl: 1.2 * n.fontSize,
									Ql: 0,
									de: 0,
								},
							]));
				}),
				t
			);
		})(),
		hn = (function (t) {
			function i(i, n) {
				var s = t.call(this) || this;
				return (s.Si = n), (s.Li = new sn(s)), s;
			}
			return (
				r(i, t),
				(i.prototype._i = function () {
					return [this.Li];
				}),
				(i.prototype.O = function () {
					return this.Si;
				}),
				(i.prototype.Ui = function () {
					this.Li.B();
				}),
				i
			);
		})(Z),
		rn = (function () {
			function t(t, i) {
				(this.if = []),
					(this.nf = []),
					(this.pr = 0),
					(this.sf = null),
					(this.hf = null),
					(this.rf = new st()),
					(this.ef = new st()),
					(this.uf = t),
					(this.Si = i),
					(this.af = new qt(this)),
					(this.bl = new Rt(this, i.timeScale, this.Si.localization)),
					(this.lf = new $t()),
					(this.L = new J(this, i.crosshair)),
					(this.ff = new Qi(i.crosshair)),
					(this.cf = new hn(this, i.watermark)),
					this.vf(),
					this.if[0].Dl(2e3);
			}
			return (
				(t.prototype._f = function () {
					this.df(new Xt(3));
				}),
				(t.prototype.ee = function () {
					this.df(new Xt(2));
				}),
				(t.prototype.Qa = function (t) {
					var i = this.wf(t);
					this.df(i);
				}),
				(t.prototype.Mf = function () {
					return this.hf;
				}),
				(t.prototype.bf = function (t) {
					var i = this.hf;
					(this.hf = t),
						null !== i && this.Qa(i.mf),
						null !== t && this.Qa(t.mf);
				}),
				(t.prototype.O = function () {
					return this.Si;
				}),
				(t.prototype.ms = function (t) {
					c(this.Si, t),
						this.if.forEach(function (i) {
							return i.kl(t);
						}),
						void 0 !== t.timeScale && this.bl.ms(t.timeScale),
						void 0 !== t.localization && this.bl.Fr(t.localization),
						(t.leftPriceScale || t.rightPriceScale) && this.rf.an(),
						this._f();
				}),
				(t.prototype.pf = function (t, i) {
					var n = this.gf(t);
					null !== n && (n.X.ms(i), this.rf.an());
				}),
				(t.prototype.gf = function (t) {
					for (var i = 0, n = this.if; i < n.length; i++) {
						var s = n[i],
							h = s.xl(t);
						if (null !== h) return { ft: s, X: h };
					}
					return null;
				}),
				(t.prototype.yf = function () {
					this.if.forEach(function (t) {
						return t.Ui();
					}),
						this.hl();
				}),
				(t.prototype.j = function () {
					return this.bl;
				}),
				(t.prototype.kf = function () {
					return this.if;
				}),
				(t.prototype.xf = function () {
					return this.lf;
				}),
				(t.prototype.Nf = function () {
					return this.cf;
				}),
				(t.prototype.Sf = function () {
					return this.L;
				}),
				(t.prototype.Df = function () {
					return this.ef;
				}),
				(t.prototype.dt = function () {
					return this.pr;
				}),
				(t.prototype.Tf = function (t, i) {
					t.Bs(i), this.he(), this.ee();
				}),
				(t.prototype.Zr = function (t) {
					(this.pr = t),
						this.bl.Zr(this.pr),
						this.if.forEach(function (i) {
							return i.Zr(t);
						}),
						this.he();
				}),
				(t.prototype.vf = function (t) {
					var i = new tn(this.bl, this);
					void 0 !== t ? this.if.splice(t, 0, i) : this.if.push(i);
					var n = void 0 === t ? this.if.length - 1 : t,
						s = new Xt(3);
					return s.Je(n, { Ge: 0, Ts: !0 }), this.Ye(s), i;
				}),
				(t.prototype.Vl = function (t, i, n) {
					t.Vl(i, n);
				}),
				(t.prototype.zl = function (t, i, n) {
					t.zl(i, n), this.hl(), this.df(this.Cf(t, 2));
				}),
				(t.prototype.Pl = function (t, i) {
					t.Pl(i), this.df(this.Cf(t, 2));
				}),
				(t.prototype.Fl = function (t, i, n) {
					i.Ns() || t.Fl(i, n);
				}),
				(t.prototype.Ol = function (t, i, n) {
					i.Ns() || (t.Ol(i, n), this.hl(), this.df(this.Cf(t, 2)));
				}),
				(t.prototype.Il = function (t, i) {
					i.Ns() || (t.Il(i), this.df(this.Cf(t, 2)));
				}),
				(t.prototype.Rl = function (t, i, n) {
					t.Rl(i, n), this.df(this.Cf(t, 2));
				}),
				(t.prototype.jl = function (t, i) {
					t.jl(i), this.df(this.Cf(t, 2));
				}),
				(t.prototype.Ef = function (t) {
					this.bl.sh(t);
				}),
				(t.prototype.Af = function (t, i) {
					var n = this.j();
					if (!n.Gt() && 0 !== i) {
						var s = n.dt();
						(t = Math.max(1, Math.min(t, s))),
							n.de(t, i),
							this.hl(),
							this.he(),
							this.ee();
					}
				}),
				(t.prototype.Lf = function (t) {
					this.Bf(0), this.Vf(t), this.zf();
				}),
				(t.prototype.Pf = function (t) {
					this.bl.hh(t), this.he(), this.hl(), this.ee();
				}),
				(t.prototype.Ff = function () {
					this.bl.rh(), this.ee();
				}),
				(t.prototype.Bf = function (t) {
					(this.sf = t), this.bl.eh(t);
				}),
				(t.prototype.Vf = function (t) {
					var i = !1;
					return (
						null !== this.sf &&
							Math.abs(t - this.sf) > 20 &&
							((this.sf = null), (i = !0)),
						this.bl.uh(t),
						this.he(),
						this.hl(),
						this.ee(),
						i
					);
				}),
				(t.prototype.zf = function () {
					this.bl.oh(), this.ee(), (this.sf = null);
				}),
				(t.prototype.Of = function () {
					this.bl.ce(), this.he(), this.hl(), this.ee();
				}),
				(t.prototype.Ye = function (t) {
					this.uf && this.uf(t), this.lf.Ye(), this.ee();
				}),
				(t.prototype.V = function () {
					return this.nf;
				}),
				(t.prototype.If = function (t, i, n) {
					this.L.Vi(t, i);
					var s = NaN,
						h = this.bl.ne(t),
						r = this.bl.jr();
					null !== r && (h = Math.min(Math.max(r.ph(), h), r.gh()));
					var e = n.Ci(),
						u = e.q();
					null !== u && (s = e.Ei(i, u)),
						(s = this.ff._l(s, h, n)),
						this.L.Oi(h, s, n),
						this.Rf(),
						this.ef.an(this.L.W(), { x: t, y: i });
				}),
				(t.prototype.Wf = function () {
					this.Sf().Ri(), this.Rf(), this.ef.an(null, null);
				}),
				(t.prototype.hl = function () {
					var t = this.L.ft();
					if (null !== t) {
						var i = this.L.Pi(),
							n = this.L.Fi();
						this.If(i, n, t);
					}
				}),
				(t.prototype.jf = function (t, i, n, s) {
					s && this.bl.tr(), this.bl.B(t, i, n);
				}),
				(t.prototype.Uf = function (t) {
					var i = this.nf.reduce(function (t, i) {
						var n = i.Ki();
						if (n.Gt()) return t;
						var s = l(n.Yi());
						return void 0 === t ? s : Math.max(s, t);
					}, void 0);
					if (void 0 !== i) {
						var n = this.bl,
							s = n.te(),
							h = n.jr();
						if (null !== h) {
							var r = h.Kh(s);
							if (void 0 !== t && t > 0 && !r) {
								var e = i - s;
								n.Wr(n.oe() - e);
							}
						}
						n._e(i);
					}
					this.hl(), this.he(), this.ee();
				}),
				(t.prototype.sl = function (t) {
					null !== t && t.ql();
				}),
				(t.prototype.ro = function (t) {
					var i = this.if.find(function (i) {
						return i.Js().includes(t);
					});
					return void 0 === i ? null : i;
				}),
				(t.prototype.he = function () {
					this.if.forEach(function (t) {
						return t.ql();
					}),
						this.yf();
				}),
				(t.prototype.fn = function () {
					this.if.forEach(function (t) {
						return t.fn();
					}),
						(this.if.length = 0),
						(this.Si.localization.priceFormatter = void 0),
						(this.Si.localization.timeFormatter = void 0);
				}),
				(t.prototype.qf = function () {
					return this.af;
				}),
				(t.prototype.oo = function () {
					return this.af.O();
				}),
				(t.prototype.Nl = function () {
					return this.rf;
				}),
				(t.prototype.Hf = function (t, i) {
					var n = this.if[0],
						s = this.Yf(i, t, n);
					return (
						this.nf.push(s), 1 === this.nf.length ? this._f() : this.ee(), s
					);
				}),
				(t.prototype.Kf = function (t) {
					var i = this.ro(t),
						n = this.nf.indexOf(t);
					o(-1 !== n, "Series not found"),
						this.nf.splice(n, 1),
						l(i).th(t),
						t.fn && t.fn();
				}),
				(t.prototype.Ga = function (t, i) {
					var n = l(this.ro(t));
					n.th(t);
					var s = this.gf(i);
					if (null === s) {
						var h = t.li();
						n.Gs(t, i, h);
					} else {
						h = s.ft === n ? t.li() : void 0;
						s.ft.Gs(t, i, h);
					}
				}),
				(t.prototype.ke = function () {
					var t = new Xt(2);
					t.nu(), this.df(t);
				}),
				(t.prototype.$f = function (t) {
					var i = new Xt(2);
					i.xe(t), this.df(i);
				}),
				(t.prototype.Xf = function () {
					return this.Si.rightPriceScale.visible ? "right" : "left";
				}),
				(t.prototype.Cf = function (t, i) {
					var n = new Xt(i);
					if (null !== t) {
						var s = this.if.indexOf(t);
						n.Je(s, { Ge: i });
					}
					return n;
				}),
				(t.prototype.wf = function (t, i) {
					return void 0 === i && (i = 2), this.Cf(this.ro(t), i);
				}),
				(t.prototype.df = function (t) {
					this.uf && this.uf(t), this.lf.Ye();
				}),
				(t.prototype.Rf = function () {
					this.df(new Xt(1));
				}),
				(t.prototype.Yf = function (t, i, n) {
					var s = new Gi(this, t, i),
						h = void 0 !== t.priceScaleId ? t.priceScaleId : this.Xf();
					return n.Gs(s, h), Ht(h) || s.ms(t), s;
				}),
				t
			);
		})(),
		en = { allowDownsampling: !0 };
	var un = (function () {
			function t(t, i) {
				var n = this;
				(this._resolutionMediaQueryList = null),
					(this._resolutionListener = function (t) {
						return n._onResolutionChanged();
					}),
					(this._canvasConfiguredListeners = []),
					(this.canvas = t),
					(this._canvasSize = {
						width: this.canvas.clientWidth,
						height: this.canvas.clientHeight,
					}),
					(this._options = i),
					this._configureCanvas(),
					this._installResolutionListener();
			}
			return (
				(t.prototype.destroy = function () {
					(this._canvasConfiguredListeners.length = 0),
						this._uninstallResolutionListener(),
						(this.canvas = null);
				}),
				Object.defineProperty(t.prototype, "canvasSize", {
					get: function () {
						return {
							width: this._canvasSize.width,
							height: this._canvasSize.height,
						};
					},
					enumerable: !0,
					configurable: !0,
				}),
				(t.prototype.resizeCanvas = function (t) {
					(this._canvasSize = { width: t.width, height: t.height }),
						this._configureCanvas();
				}),
				Object.defineProperty(t.prototype, "pixelRatio", {
					get: function () {
						var t = this.canvas.ownerDocument.defaultView;
						if (null == t)
							throw new Error("No window is associated with the canvas");
						return t.devicePixelRatio > 1 || this._options.allowDownsampling
							? t.devicePixelRatio
							: 1;
					},
					enumerable: !0,
					configurable: !0,
				}),
				(t.prototype.subscribeCanvasConfigured = function (t) {
					this._canvasConfiguredListeners.push(t);
				}),
				(t.prototype.unsubscribeCanvasConfigured = function (t) {
					this._canvasConfiguredListeners =
						this._canvasConfiguredListeners.filter(function (i) {
							return i != t;
						});
				}),
				(t.prototype._configureCanvas = function () {
					var t = this.pixelRatio;
					(this.canvas.style.width = this._canvasSize.width + "px"),
						(this.canvas.style.height = this._canvasSize.height + "px"),
						(this.canvas.width = this._canvasSize.width * t),
						(this.canvas.height = this._canvasSize.height * t),
						this._emitCanvasConfigured();
				}),
				(t.prototype._emitCanvasConfigured = function () {
					var t = this;
					this._canvasConfiguredListeners.forEach(function (i) {
						return i.call(t);
					});
				}),
				(t.prototype._installResolutionListener = function () {
					if (null !== this._resolutionMediaQueryList)
						throw new Error("Resolution listener is already installed");
					var t = this.canvas.ownerDocument.defaultView;
					if (null == t)
						throw new Error("No window is associated with the canvas");
					var i = t.devicePixelRatio;
					(this._resolutionMediaQueryList = t.matchMedia(
						"all and (resolution: " + i + "dppx)"
					)),
						this._resolutionMediaQueryList.addListener(
							this._resolutionListener
						);
				}),
				(t.prototype._uninstallResolutionListener = function () {
					null !== this._resolutionMediaQueryList &&
						(this._resolutionMediaQueryList.removeListener(
							this._resolutionListener
						),
						(this._resolutionMediaQueryList = null));
				}),
				(t.prototype._reinstallResolutionListener = function () {
					this._uninstallResolutionListener(),
						this._installResolutionListener();
				}),
				(t.prototype._onResolutionChanged = function () {
					this._configureCanvas(), this._reinstallResolutionListener();
				}),
				t
			);
		})(),
		on = (function () {
			function t(t, i) {
				(this.st = t), (this.ht = i);
			}
			return (
				(t.prototype._n = function (t) {
					return this.st === t.st && this.ht === t.ht;
				}),
				t
			);
		})();
	function an(t) {
		return (
			(t.ownerDocument &&
				t.ownerDocument.defaultView &&
				t.ownerDocument.defaultView.devicePixelRatio) ||
			1
		);
	}
	function ln(t) {
		var i = l(t.getContext("2d"));
		return i.setTransform(1, 0, 0, 1, 0, 0), i;
	}
	function fn(t) {
		var i = t.createElement("canvas");
		return (
			(function (t) {
				(t.style.userSelect = "none"),
					(t.style.webkitUserSelect = "none"),
					(t.style.msUserSelect = "none"),
					(t.style.MozUserSelect = "none"),
					(t.style.webkitTapHighlightColor = "transparent");
			})(i),
			i
		);
	}
	function cn(t, i) {
		var n = fn(t),
			s = an(n);
		return (
			(n.style.width = i.st + "px"),
			(n.style.height = i.ht + "px"),
			(n.width = i.st * s),
			(n.height = i.ht * s),
			n
		);
	}
	function vn(t, i) {
		var n = fn(l(t.ownerDocument));
		t.appendChild(n);
		var s = (function (t, i) {
			return void 0 === i && (i = en), new un(t, i);
		})(n);
		return s.resizeCanvas({ width: i.st, height: i.ht }), s;
	}
	var _n =
			!!navigator.maxTouchPoints ||
			!!navigator.msMaxTouchPoints ||
			"ontouchstart" in window ||
			Boolean(window.DocumentTouch && document instanceof window.DocumentTouch),
		dn = "onorientationchange" in window && _n,
		wn = /Android/i.test(navigator.userAgent),
		Mn = /iPhone|iPad|iPod|AppleWebKit.+Mobile/i.test(navigator.userAgent),
		bn = wn || Mn,
		mn = (function () {
			function t(t, i, n) {
				(this.Zf = 0),
					(this.Jf = null),
					(this.Gf = null),
					(this.Qf = !1),
					(this.tc = null),
					(this.ic = !1),
					(this.nc = !1),
					(this.sc = null),
					(this.hc = null),
					(this.rc = null),
					(this.ec = null),
					(this.uc = 0),
					(this.oc = !1),
					(this.ac = !1),
					(this.lc = !1),
					(this.fc = t),
					(this.cc = i),
					(this.Si = n),
					this.vc();
			}
			return (
				(t.prototype.fn = function () {
					null !== this.sc && (this.sc(), (this.sc = null)),
						null !== this.hc && (this.hc(), (this.hc = null)),
						null !== this.rc && (this.rc(), (this.rc = null)),
						this._c(),
						this.dc();
				}),
				(t.prototype.wc = function (t) {
					var i = this;
					this.hc && this.hc();
					var n = this.Mc.bind(this);
					(this.hc = function () {
						i.fc.removeEventListener("mousemove", n);
					}),
						this.fc.addEventListener("mousemove", n),
						yn(t) && this.Mc(t);
					var s = this.bc(t);
					this.mc(s, this.cc.pc);
				}),
				(t.prototype.dc = function () {
					null !== this.Jf && clearTimeout(this.Jf),
						(this.Zf = 0),
						(this.Jf = null);
				}),
				(t.prototype.Mc = function (t) {
					if (!this.lc || yn(t)) {
						var i = this.bc(t);
						this.mc(i, this.cc.gc);
					}
				}),
				(t.prototype.yc = function (t) {
					if ((!("button" in t) || 0 === t.button) && null === this.ec) {
						var i = yn(t);
						if (!this.ac || !i) {
							this.oc = !0;
							var n = this.bc(t),
								s = f(this.tc),
								h = Math.abs(s.m - n.kc),
								r = Math.abs(s.p - n.xc),
								e = h + r > 5;
							if (e || !i) {
								if (e && !this.ic && i) {
									var u = 0.5 * h,
										o = r >= u && !this.Si.Nc,
										a = u > r && !this.Si.Sc;
									o || a || (this.ac = !0);
								}
								e && ((this.ic = !0), (this.nc = !0), i && this._c()),
									this.ac || (this.mc(n, this.cc.Dc), i && kn(t));
							}
						}
					}
				}),
				(t.prototype.Tc = function (t) {
					if (!("button" in t) || 0 === t.button) {
						var i = this.bc(t);
						this._c(),
							(this.tc = null),
							(this.lc = !1),
							this.rc && (this.rc(), (this.rc = null)),
							yn(t) && this.Cc(t),
							this.mc(i, this.cc.Ec),
							++this.Zf,
							this.Jf && this.Zf > 1
								? (this.mc(i, this.cc.Ac), this.dc())
								: this.nc || this.mc(i, this.cc.Lc),
							yn(t) &&
								(kn(t), this.Cc(t), 0 === t.touches.length && (this.Qf = !1));
					}
				}),
				(t.prototype._c = function () {
					null !== this.Gf && (clearTimeout(this.Gf), (this.Gf = null));
				}),
				(t.prototype.Bc = function (t) {
					if (!("button" in t) || 0 === t.button) {
						var i = this.bc(t);
						(this.nc = !1),
							(this.ic = !1),
							(this.ac = !1),
							yn(t) && this.wc(t),
							(this.tc = { m: i.kc, p: i.xc }),
							this.rc && (this.rc(), (this.rc = null));
						var n = this.yc.bind(this),
							s = this.Tc.bind(this),
							h = this.fc.ownerDocument.documentElement;
						(this.rc = function () {
							h.removeEventListener("touchmove", n),
								h.removeEventListener("touchend", s),
								h.removeEventListener("mousemove", n),
								h.removeEventListener("mouseup", s);
						}),
							h.addEventListener("touchmove", n, { passive: !1 }),
							h.addEventListener("touchend", s, { passive: !1 }),
							this._c(),
							yn(t) && 1 === t.touches.length
								? (this.Gf = setTimeout(this.Vc.bind(this, t), 240))
								: (h.addEventListener("mousemove", n),
								  h.addEventListener("mouseup", s)),
							(this.lc = !0),
							this.mc(i, this.cc.zc),
							this.Jf ||
								((this.Zf = 0),
								(this.Jf = setTimeout(this.dc.bind(this), 500)));
					}
				}),
				(t.prototype.vc = function () {
					var t = this;
					this.fc.addEventListener("mouseenter", this.wc.bind(this)),
						this.fc.addEventListener("touchcancel", this._c.bind(this));
					var i = this.fc.ownerDocument,
						n = function (i) {
							t.cc.Pc && ((i.target && t.fc.contains(i.target)) || t.cc.Pc());
						};
					(this.sc = function () {
						i.removeEventListener("mousedown", n),
							i.removeEventListener("touchstart", n);
					}),
						i.addEventListener("mousedown", n),
						i.addEventListener("touchstart", n, { passive: !0 }),
						this.fc.addEventListener("mouseleave", this.Cc.bind(this)),
						this.fc.addEventListener("touchstart", this.Bc.bind(this), {
							passive: !0,
						}),
						dn || this.fc.addEventListener("mousedown", this.Bc.bind(this)),
						this.Fc(),
						this.fc.addEventListener("touchmove", function () {}, {
							passive: !1,
						});
				}),
				(t.prototype.Fc = function () {
					var t = this;
					(void 0 === this.cc.Oc &&
						void 0 === this.cc.Ic &&
						void 0 === this.cc.Rc) ||
						(this.fc.addEventListener(
							"touchstart",
							function (i) {
								return t.Wc(i.touches);
							},
							{ passive: !0 }
						),
						this.fc.addEventListener(
							"touchmove",
							function (i) {
								if (
									2 === i.touches.length &&
									null !== t.ec &&
									void 0 !== t.cc.Ic
								) {
									var n = gn(i.touches[0], i.touches[1]) / t.uc;
									t.cc.Ic(t.ec, n), kn(i);
								}
							},
							{ passive: !1 }
						),
						this.fc.addEventListener("touchend", function (i) {
							t.Wc(i.touches);
						}));
				}),
				(t.prototype.Wc = function (t) {
					1 === t.length && (this.oc = !1),
						2 !== t.length || this.oc || this.Qf ? this.jc() : this.Uc(t);
				}),
				(t.prototype.Uc = function (t) {
					var i = pn(this.fc);
					(this.ec = {
						m: (t[0].clientX - i.left + (t[1].clientX - i.left)) / 2,
						p: (t[0].clientY - i.top + (t[1].clientY - i.top)) / 2,
					}),
						(this.uc = gn(t[0], t[1])),
						void 0 !== this.cc.Oc && this.cc.Oc(),
						this._c();
				}),
				(t.prototype.jc = function () {
					null !== this.ec &&
						((this.ec = null), void 0 !== this.cc.Rc && this.cc.Rc());
				}),
				(t.prototype.Cc = function (t) {
					this.hc && this.hc();
					var i = this.bc(t);
					this.mc(i, this.cc.qc);
				}),
				(t.prototype.Vc = function (t) {
					var i = this.bc(t);
					this.mc(i, this.cc.Hc), (this.nc = !0), (this.Qf = !0);
				}),
				(t.prototype.mc = function (t, i) {
					i && i.call(this.cc, t);
				}),
				(t.prototype.bc = function (t) {
					var i;
					i =
						"touches" in t && t.touches.length
							? t.touches[0]
							: "changedTouches" in t && t.changedTouches.length
							? t.changedTouches[0]
							: t;
					var n = pn(this.fc);
					return {
						Yc: i.clientX,
						Kc: i.clientY,
						kc: i.pageX,
						xc: i.pageY,
						$c: i.screenX,
						Xc: i.screenY,
						Zc: i.clientX - n.left,
						Jc: i.clientY - n.top,
						Gc: t.ctrlKey,
						Qc: t.altKey,
						tv: t.shiftKey,
						iv: t.metaKey,
						nv: t.type.startsWith("mouse") ? "mouse" : "touch",
						sv: i.target,
						hv: t.view,
					};
				}),
				t
			);
		})();
	function pn(t) {
		return t.getBoundingClientRect() || { left: 0, top: 0 };
	}
	function gn(t, i) {
		var n = t.clientX - i.clientX,
			s = t.clientY - i.clientY;
		return Math.sqrt(n * n + s * s);
	}
	function yn(t) {
		return Boolean(t.touches);
	}
	function kn(t) {
		t.cancelable && t.preventDefault();
	}
	var xn = (function () {
			function t(t, i, n, s) {
				if (
					((this.rv = 0),
					(this.ev = 0),
					(this.uv = 0),
					(this.ov = 0),
					(this.av = 0),
					(this.lv = 0),
					(this.fv = 0),
					(this.cv = t),
					(this.vv = t._v()[i]),
					(this.dv = t._v()[n]),
					(this.wv = document.createElement("tr")),
					(this.wv.style.height = "1px"),
					(this.Mv = document.createElement("td")),
					(this.Mv.style.padding = "0"),
					this.Mv.setAttribute("colspan", "3"),
					this.bv(),
					this.wv.appendChild(this.Mv),
					s)
				)
					(this.mv = null), (this.pv = null);
				else {
					(this.mv = document.createElement("div")),
						(this.mv.style.position = "absolute"),
						(this.mv.style.zIndex = "50"),
						(this.mv.style.height = "5px"),
						(this.mv.style.width = "100%"),
						(this.mv.style.backgroundColor = "rgba(255, 255, 255, 0.02)"),
						(this.mv.style.cursor = "ns-resize"),
						this.Mv.appendChild(this.mv);
					var h = {
						zc: this.gv.bind(this),
						Dc: this.yv.bind(this),
						Ec: this.kv.bind(this),
					};
					this.pv = new mn(this.mv, h, { Nc: !1, Sc: !0 });
				}
			}
			return (
				(t.prototype.fn = function () {
					null !== this.pv && this.pv.fn();
				}),
				(t.prototype.xv = function () {
					return this.wv;
				}),
				(t.prototype.Nv = function () {
					return new on(this.vv.Nv().st, 1);
				}),
				(t.prototype.Sv = function () {
					var t = this.Nv(),
						i = cn(document, t),
						n = ln(i);
					return (
						(n.fillStyle = this.cv.O().timeScale.borderColor),
						n.fillRect(0, 0, t.st, t.ht),
						i
					);
				}),
				(t.prototype.B = function () {
					this.bv();
				}),
				(t.prototype.bv = function () {
					this.Mv.style.background = this.cv.O().timeScale.borderColor;
				}),
				(t.prototype.gv = function (t) {
					(this.rv = t.xc),
						(this.ev = 0),
						(this.uv = this.vv.Nv().ht + this.dv.Nv().ht),
						(this.ov = this.vv.Sl() + this.dv.Sl()),
						(this.av = 30),
						(this.lv = this.uv - this.av),
						(this.fv = this.ov / this.uv);
				}),
				(t.prototype.yv = function (t) {
					this.ev = t.xc - this.rv;
					var i = this.vv.Nv().ht,
						n = rt(i + this.ev, this.av, this.lv) * this.fv,
						s = this.ov - n;
					this.vv.Dl(n),
						this.dv.Dl(s),
						this.cv.ct()._f(),
						this.vv.Nv().ht !== i && (this.rv = t.xc);
				}),
				(t.prototype.kv = function (t) {
					(this.rv = 0),
						(this.ev = 0),
						(this.uv = 0),
						(this.ov = 0),
						(this.av = 0),
						(this.lv = 0),
						(this.fv = 0);
				}),
				t
			);
		})(),
		Nn = (function () {
			function t(t, i, n, s) {
				(this.io = new bi(200)),
					(this.Ve = 0),
					(this.Dv = ""),
					(this.co = ""),
					(this.Tv = []),
					(this.Cv = new Map()),
					(this.Ve = t),
					(this.Dv = i),
					(this.co = Ut(t, n, s));
			}
			return (
				(t.prototype.fn = function () {
					delete this.io, (this.Tv = []), this.Cv.clear();
				}),
				(t.prototype.Ev = function (t, i, n, s, h) {
					var r = this.Av(t, i);
					if ("left" !== h) {
						var e = an(t.canvas);
						n -= Math.floor(r.Lv * e);
					}
					(s -= Math.floor(r.wt / 2)), t.drawImage(r.Bv, n, s, r.dt, r.wt);
				}),
				(t.prototype.Av = function (t, i) {
					var n,
						s = this;
					if (this.Cv.has(i)) n = a(this.Cv.get(i));
					else {
						if (this.Tv.length >= 200) {
							var h = a(this.Tv.shift());
							this.Cv.delete(h);
						}
						var r = an(t.canvas),
							e = Math.ceil(this.Ve / 4.5),
							u = Math.round(this.Ve / 10),
							o = Math.ceil(this.io.At(t, i)),
							l = ot(Math.round(o + 2 * e)),
							f = ot(this.Ve + 2 * e),
							c = cn(document, new on(l, f));
						(n = {
							Et: i,
							Lv: Math.round(Math.max(1, o)),
							dt: Math.ceil(l * r),
							wt: Math.ceil(f * r),
							Bv: c,
						}),
							0 !== o && (this.Tv.push(n.Et), this.Cv.set(n.Et, n)),
							W((t = ln(n.Bv)), r, function () {
								(t.font = s.co),
									(t.fillStyle = s.Dv),
									t.fillText(i, 0, f - e - u);
							});
					}
					return n;
				}),
				t
			);
		})(),
		Sn = (function () {
			function t(t, i, n, s) {
				var h = this;
				(this.Zt = null),
					(this.Vv = null),
					(this.zv = null),
					(this.Pv = !1),
					(this.Fv = !0),
					(this.Ov = new bi(50)),
					(this.Iv = new Nn(11, "#000")),
					(this.Dv = null),
					(this.co = null),
					(this.Rv = 0),
					(this.Wv = function () {
						h.jv(h.af.O()), h.wi.Uv().ct().ee();
					}),
					(this.qv = function () {
						h.wi.Uv().ct().ee();
					}),
					(this.wi = t),
					(this.Si = i),
					(this.af = n),
					(this.Hv = "left" === s),
					(this.Mv = document.createElement("div")),
					(this.Mv.style.height = "100%"),
					(this.Mv.style.overflow = "hidden"),
					(this.Mv.style.width = "25px"),
					(this.Mv.style.left = "0"),
					(this.Mv.style.position = "relative"),
					(this.Yv = vn(this.Mv, new on(16, 16))),
					this.Yv.subscribeCanvasConfigured(this.Wv);
				var r = this.Yv.canvas;
				(r.style.position = "absolute"),
					(r.style.zIndex = "1"),
					(r.style.left = "0"),
					(r.style.top = "0"),
					(this.Kv = vn(this.Mv, new on(16, 16))),
					this.Kv.subscribeCanvasConfigured(this.qv);
				var e = this.Kv.canvas;
				(e.style.position = "absolute"),
					(e.style.zIndex = "2"),
					(e.style.left = "0"),
					(e.style.top = "0");
				var u = {
					zc: this.gv.bind(this),
					Dc: this.yv.bind(this),
					Pc: this.$v.bind(this),
					Ec: this.kv.bind(this),
					Ac: this.Xv.bind(this),
					pc: this.Zv.bind(this),
					qc: this.Jv.bind(this),
				};
				this.pv = new mn(this.Kv.canvas, u, { Nc: !1, Sc: !0 });
			}
			return (
				(t.prototype.fn = function () {
					this.pv.fn(),
						this.Kv.unsubscribeCanvasConfigured(this.qv),
						this.Kv.destroy(),
						this.Yv.unsubscribeCanvasConfigured(this.Wv),
						this.Yv.destroy(),
						null !== this.Zt && (this.Zt.nh().on(this), this.Zt.xs().on(this)),
						(this.Zt = null),
						null !== this.zv && (clearTimeout(this.zv), (this.zv = null)),
						this.Iv.fn();
				}),
				(t.prototype.xv = function () {
					return this.Mv;
				}),
				(t.prototype.Gv = function () {
					return this.Si.backgroundColor;
				}),
				(t.prototype.N = function () {
					return l(this.Zt).O().borderColor;
				}),
				(t.prototype.Qv = function () {
					return this.Si.textColor;
				}),
				(t.prototype.Bt = function () {
					return this.Si.fontSize;
				}),
				(t.prototype.t_ = function () {
					return Ut(this.Bt(), this.Si.fontFamily);
				}),
				(t.prototype.i_ = function () {
					var t = this.af.O(),
						i = this.Dv !== t.et,
						n = this.co !== t.gt;
					return (
						(i || n) && (this.jv(t), (this.Dv = t.et)),
						n && (this.Ov.tr(), (this.co = t.gt)),
						t
					);
				}),
				(t.prototype.n_ = function () {
					if (!this.Yt() || null === this.Zt) return 0;
					var t = 34,
						i = this.i_(),
						n = ln(this.Yv.canvas),
						s = this.Zt.qn();
					(n.font = this.t_()),
						s.length > 0 &&
							(t = Math.max(
								this.Ov.At(n, s[0].Wn),
								this.Ov.At(n, s[s.length - 1].Wn)
							));
					for (var h = this.s_(), r = h.length; r--; ) {
						var e = this.Ov.At(n, h[r].Et());
						e > t && (t = e);
					}
					var u = Math.ceil(i.Nt + i.xt + i.Tt + i.Ct + t);
					return (u += u % 2);
				}),
				(t.prototype.h_ = function (t) {
					if (t.st < 0 || t.ht < 0)
						throw new Error(
							"Try to set invalid size to PriceAxisWidget " + JSON.stringify(t)
						);
					(null !== this.Vv && this.Vv._n(t)) ||
						((this.Vv = t),
						this.Yv.resizeCanvas({ width: t.st, height: t.ht }),
						this.Kv.resizeCanvas({ width: t.st, height: t.ht }),
						(this.Mv.style.width = t.st + "px"),
						(this.Mv.style.height = t.ht + "px"),
						(this.Mv.style.minWidth = t.st + "px"));
				}),
				(t.prototype.r_ = function () {
					return l(this.Vv).st;
				}),
				(t.prototype.ci = function (t) {
					this.Zt !== t &&
						(null !== this.Zt && (this.Zt.nh().on(this), this.Zt.xs().on(this)),
						(this.Zt = t),
						t.nh().sn(this.ss.bind(this), this));
				}),
				(t.prototype.X = function () {
					return this.Zt;
				}),
				(t.prototype.Yt = function () {
					return this.Fv;
				}),
				(t.prototype.e_ = function (t) {
					t !== this.Fv &&
						((this.Mv.style.display = t ? "table-cell" : "none"),
						(this.Fv = t));
				}),
				(t.prototype.u_ = function (t) {
					var i = this.wi.o_();
					this.wi.Uv().ct().Rl(i, l(this.X()), t);
				}),
				(t.prototype.tr = function () {
					var t = this.wi.o_();
					this.wi.Uv().ct().jl(t, l(this.X()));
				}),
				(t.prototype.a_ = function (t) {
					if (this.Fv && null !== this.Vv) {
						if (1 !== t) {
							var i = ln(this.Yv.canvas);
							this.l_(),
								this.f_(i, this.Yv.pixelRatio),
								this.Fu(i, this.Yv.pixelRatio),
								this.c_(i, this.Yv.pixelRatio),
								this.v_(i, this.Yv.pixelRatio);
						}
						var n = ln(this.Kv.canvas),
							s = this.Vv.st,
							h = this.Vv.ht;
						W(n, this.Kv.pixelRatio, function () {
							n.clearRect(0, 0, s, h);
						}),
							this.__(n, this.Kv.pixelRatio);
					}
				}),
				(t.prototype.Sv = function () {
					return this.Yv.canvas;
				}),
				(t.prototype.d_ = function () {
					return this.Hv;
				}),
				(t.prototype.gv = function (t) {
					if (
						null !== this.Zt &&
						!this.Zt.Gt() &&
						this.wi.Uv().O().handleScale.axisPressedMouseMove.price
					) {
						var i = this.wi.Uv().ct(),
							n = this.wi.o_();
						(this.Pv = !0), i.Vl(n, this.Zt, t.Jc);
					}
				}),
				(t.prototype.yv = function (t) {
					if (
						null !== this.Zt &&
						this.wi.Uv().O().handleScale.axisPressedMouseMove.price
					) {
						var i = this.wi.Uv().ct(),
							n = this.wi.o_(),
							s = this.Zt;
						i.zl(n, s, t.Jc);
					}
				}),
				(t.prototype.$v = function () {
					if (
						null !== this.Zt &&
						this.wi.Uv().O().handleScale.axisPressedMouseMove.price
					) {
						var t = this.wi.Uv().ct(),
							i = this.wi.o_(),
							n = this.Zt;
						this.Pv && ((this.Pv = !1), t.Pl(i, n));
					}
				}),
				(t.prototype.kv = function (t) {
					if (
						null !== this.Zt &&
						this.wi.Uv().O().handleScale.axisPressedMouseMove.price
					) {
						var i = this.wi.Uv().ct(),
							n = this.wi.o_();
						(this.Pv = !1), i.Pl(n, this.Zt);
					}
				}),
				(t.prototype.Xv = function (t) {
					this.wi.Uv().O().handleScale.axisDoubleClickReset && this.tr();
				}),
				(t.prototype.Zv = function (t) {
					null !== this.Zt &&
						(!this.wi.Uv().ct().O().handleScale.axisPressedMouseMove.price ||
							this.Zt.Ss() ||
							this.Zt.Ds() ||
							this.w_(1));
				}),
				(t.prototype.Jv = function (t) {
					this.w_(0);
				}),
				(t.prototype.s_ = function () {
					var t = this,
						i = [],
						n = null === this.Zt ? void 0 : this.Zt;
					return (
						(function (s) {
							for (var h = 0; h < s.length; ++h)
								for (var r = s[h].vi(t.wi.o_(), n), e = 0; e < r.length; e++)
									i.push(r[e]);
						})(this.wi.o_().Js()),
						i
					);
				}),
				(t.prototype.f_ = function (t, i) {
					var n = this;
					if (null !== this.Vv) {
						var s = this.Vv.st,
							h = this.Vv.ht;
						W(t, i, function () {
							j(t, 0, 0, s, h, n.Gv());
						});
					}
				}),
				(t.prototype.Fu = function (t, i) {
					if (
						null !== this.Vv &&
						null !== this.Zt &&
						this.Zt.O().borderVisible
					) {
						t.save(), (t.fillStyle = this.N());
						var n,
							s = Math.max(1, Math.floor(this.i_().Nt * i));
						(n = this.Hv ? Math.floor(this.Vv.st * i) - s : 0),
							t.fillRect(n, 0, s, Math.ceil(this.Vv.ht * i)),
							t.restore();
					}
				}),
				(t.prototype.c_ = function (t, i) {
					if (null !== this.Vv && null !== this.Zt) {
						var n = this.Zt.qn();
						t.save(),
							(t.strokeStyle = this.N()),
							(t.font = this.t_()),
							(t.fillStyle = this.N());
						var s = this.i_(),
							h = this.Zt.O().borderVisible && this.Zt.O().drawTicks,
							r = this.Hv
								? Math.floor((this.Vv.st - s.xt) * i - s.Nt * i)
								: Math.floor(s.Nt * i),
							e = this.Hv
								? Math.round(r - s.Tt * i)
								: Math.round(r + s.xt * i + s.Tt * i),
							u = this.Hv ? "right" : "left",
							o = Math.max(1, Math.floor(i)),
							a = Math.floor(0.5 * i);
						if (h) {
							var l = Math.round(s.xt * i);
							t.beginPath();
							for (var f = 0, c = n; f < c.length; f++) {
								var v = c[f];
								t.rect(r, Math.round(v.Rn * i) - a, l, o);
							}
							t.fill();
						}
						t.fillStyle = this.Qv();
						for (var _ = 0, d = n; _ < d.length; _++) {
							v = d[_];
							this.Iv.Ev(t, v.Wn, e, Math.round(v.Rn * i), u);
						}
						t.restore();
					}
				}),
				(t.prototype.l_ = function () {
					if (null !== this.Vv && null !== this.Zt) {
						var t = this.Vv.ht / 2,
							i = [],
							n = this.Zt.Js().slice(),
							s = this.wi.o_(),
							h = this.i_();
						this.Zt === s.Ci() &&
							this.wi
								.o_()
								.Js()
								.forEach(function (t) {
									s.eo(t) && n.push(t);
								});
						var r = this.Zt.Zs()[0],
							e = this.Zt;
						n.forEach(function (n) {
							var h = n.vi(s, e);
							h.forEach(function (t) {
								t.Ht(null), t.Yt() && i.push(t);
							}),
								r === n && h.length > 0 && (t = h[0].Vt());
						});
						var u = i.filter(function (i) {
								return i.Vt() <= t;
							}),
							o = i.filter(function (i) {
								return i.Vt() > t;
							});
						if (
							(u.sort(function (t, i) {
								return i.Vt() - t.Vt();
							}),
							u.length && o.length && o.push(u[0]),
							o.sort(function (t, i) {
								return t.Vt() - i.Vt();
							}),
							i.forEach(function (t) {
								return t.Ht(t.Vt());
							}),
							this.Zt.O().alignLabels)
						) {
							for (var a = 1; a < u.length; a++) {
								var l = u[a],
									f = (v = u[a - 1]).wt(h, !1);
								l.Vt() > (_ = v.qt()) - f && l.Ht(_ - f);
							}
							for (var c = 1; c < o.length; c++) {
								var v, _;
								(l = o[c]), (f = (v = o[c - 1]).wt(h, !0));
								l.Vt() < (_ = v.qt()) + f && l.Ht(_ + f);
							}
						}
					}
				}),
				(t.prototype.v_ = function (t, i) {
					var n = this;
					if (null !== this.Vv) {
						t.save();
						var s = this.Vv,
							h = this.s_(),
							r = this.i_(),
							e = this.Hv ? "right" : "left";
						h.forEach(function (h) {
							if (h.Kt()) {
								var u = h.I(l(n.Zt));
								t.save(), u.s(t, r, n.Ov, s.st, e, i), t.restore();
							}
						}),
							t.restore();
					}
				}),
				(t.prototype.__ = function (t, i) {
					var n = this;
					if (null !== this.Vv && null !== this.Zt) {
						t.save();
						var s = this.Vv,
							h = this.wi.Uv().ct(),
							r = [],
							e = this.wi.o_(),
							u = h.Sf().vi(e, this.Zt);
						u.length && r.push(u);
						var o = this.i_(),
							a = this.Hv ? "right" : "left";
						r.forEach(function (h) {
							h.forEach(function (h) {
								t.save(), h.I(l(n.Zt)).s(t, o, n.Ov, s.st, a, i), t.restore();
							});
						}),
							t.restore();
					}
				}),
				(t.prototype.w_ = function (t) {
					this.Mv.style.cursor = 1 === t ? "ns-resize" : "default";
				}),
				(t.prototype.ss = function () {
					var t = this,
						i = this.n_();
					if (this.Rv < i) {
						var n = this.wi.Uv();
						null === this.zv &&
							(this.zv = setTimeout(function () {
								n && n.ct()._f(), (t.zv = null);
							}, 100));
					}
					this.Rv = i;
				}),
				(t.prototype.jv = function (t) {
					this.Iv.fn(), (this.Iv = new Nn(t.Bt, t.et, t.Be));
				}),
				t
			);
		})(),
		Dn = bn,
		Tn = (function () {
			function t(t, i) {
				var n = this;
				(this.Vv = new on(0, 0)),
					(this.M_ = null),
					(this.b_ = null),
					(this.m_ = null),
					(this.p_ = !1),
					(this.g_ = new st()),
					(this.y_ = 0),
					(this.k_ = !1),
					(this.x_ = null),
					(this.N_ = !1),
					(this.S_ = null),
					(this.Wv = function () {
						return n.D_ && n.ni().ee();
					}),
					(this.qv = function () {
						return n.D_ && n.ni().ee();
					}),
					(this.T_ = t),
					(this.D_ = i),
					this.D_.Hl().sn(this.C_.bind(this), this, !0),
					(this.E_ = document.createElement("td")),
					(this.E_.style.padding = "0"),
					(this.E_.style.position = "relative");
				var s = document.createElement("div");
				(s.style.width = "100%"),
					(s.style.height = "100%"),
					(s.style.position = "relative"),
					(s.style.overflow = "hidden"),
					(this.A_ = document.createElement("td")),
					(this.A_.style.padding = "0"),
					(this.L_ = document.createElement("td")),
					(this.L_.style.padding = "0"),
					this.E_.appendChild(s),
					(this.Yv = vn(s, new on(16, 16))),
					this.Yv.subscribeCanvasConfigured(this.Wv);
				var h = this.Yv.canvas;
				(h.style.position = "absolute"),
					(h.style.zIndex = "1"),
					(h.style.left = "0"),
					(h.style.top = "0"),
					(this.Kv = vn(s, new on(16, 16))),
					this.Kv.subscribeCanvasConfigured(this.qv);
				var r = this.Kv.canvas;
				(r.style.position = "absolute"),
					(r.style.zIndex = "2"),
					(r.style.left = "0"),
					(r.style.top = "0"),
					(this.wv = document.createElement("tr")),
					this.wv.appendChild(this.A_),
					this.wv.appendChild(this.E_),
					this.wv.appendChild(this.L_),
					this.B_();
				var e = this.Uv().O().handleScroll;
				this.pv = new mn(this.Kv.canvas, this, {
					Nc: !e.vertTouchDrag,
					Sc: !e.horzTouchDrag,
				});
			}
			return (
				(t.prototype.fn = function () {
					null !== this.M_ && this.M_.fn(),
						null !== this.b_ && this.b_.fn(),
						this.Kv.unsubscribeCanvasConfigured(this.qv),
						this.Kv.destroy(),
						this.Yv.unsubscribeCanvasConfigured(this.Wv),
						this.Yv.destroy(),
						null !== this.D_ && this.D_.Hl().on(this),
						this.pv.fn();
				}),
				(t.prototype.o_ = function () {
					return l(this.D_);
				}),
				(t.prototype.V_ = function () {
					return this.D_;
				}),
				(t.prototype.z_ = function (i) {
					null !== this.D_ && this.D_.Hl().on(this),
						(this.D_ = i),
						null !== this.D_ &&
							this.D_.Hl().sn(t.prototype.C_.bind(this), this, !0),
						this.B_();
				}),
				(t.prototype.Uv = function () {
					return this.T_;
				}),
				(t.prototype.xv = function () {
					return this.wv;
				}),
				(t.prototype.B_ = function () {
					if (null !== this.D_ && (this.P_(), 0 !== this.ni().V().length)) {
						if (null !== this.M_) {
							var t = this.D_.Ll();
							this.M_.ci(l(t));
						}
						if (null !== this.b_) {
							var i = this.D_.Bl();
							this.b_.ci(l(i));
						}
					}
				}),
				(t.prototype.Sl = function () {
					return null !== this.D_ ? this.D_.Sl() : 0;
				}),
				(t.prototype.Dl = function (t) {
					this.D_ && this.D_.Dl(t);
				}),
				(t.prototype.pc = function (t) {
					if (this.D_) {
						var i = t.Zc,
							n = t.Jc;
						dn || this.F_(i, n);
					}
				}),
				(t.prototype.zc = function (t) {
					if (((this.k_ = !1), (this.N_ = null !== this.x_), this.D_)) {
						if (
							document.activeElement !== document.body &&
							document.activeElement !== document.documentElement
						)
							l(document.activeElement).blur();
						else {
							var i = document.getSelection();
							null !== i && i.removeAllRanges();
						}
						var n = this.ni();
						if (!this.D_.Ci().Gt() && !n.j().Gt()) {
							if (null !== this.x_) {
								var s = n.Sf();
								(this.S_ = { x: s.Mt(), y: s.bt() }),
									(this.x_ = { x: t.Zc, y: t.Jc });
							}
							dn || this.F_(t.Zc, t.Jc);
						}
					}
				}),
				(t.prototype.gc = function (t) {
					if (this.D_) {
						var i = t.Zc,
							n = t.Jc;
						if ((this.O_() && this.I_(), !dn)) {
							this.F_(i, n);
							var s = this.vo(i, n);
							this.ni().bf(s && { mf: s.mf, R_: s.R_ }),
								null !== s && void 0 !== s.hv.W_ && s.hv.W_(i, n);
						}
					}
				}),
				(t.prototype.Lc = function (t) {
					if (null !== this.D_) {
						var i = t.Zc,
							n = t.Jc,
							s = this.vo(i, n);
						if (
							(null !== s && void 0 !== s.hv.j_ && s.hv.j_(i, n), this.g_.ln())
						) {
							var h = this.ni().Sf().W();
							this.g_.an(h, { x: i, y: n });
						}
						this.U_();
					}
				}),
				(t.prototype.Dc = function (t) {
					if (null !== this.D_) {
						var i = this.ni(),
							n = t.Zc,
							s = t.Jc;
						if (null !== this.x_) {
							this.N_ = !1;
							var h = l(this.S_),
								r = h.x + (n - this.x_.x),
								e = h.y + (s - this.x_.y);
							this.F_(r, e);
						} else this.O_() || this.F_(n, s);
						if (!i.j().Gt()) {
							var u = this.T_.O().handleScroll;
							if (
								(u.pressedMouseMove && "touch" !== t.nv) ||
								((u.horzTouchDrag || u.vertTouchDrag) && "mouse" !== t.nv)
							) {
								var o = this.D_.Ci();
								null !== this.m_ ||
									this.q_() ||
									(this.m_ = { x: t.Yc, y: t.Kc }),
									null === this.m_ ||
										(this.m_.x === t.Yc && this.m_.y === t.Kc) ||
										this.p_ ||
										(o.Gt() || i.Fl(this.D_, o, t.Jc),
										i.Bf(t.Zc),
										(this.p_ = !0)),
									this.p_ && (o.Gt() || i.Ol(this.D_, o, t.Jc), i.Vf(t.Zc));
							}
						}
					}
				}),
				(t.prototype.Ec = function (t) {
					if (null !== this.D_) {
						this.k_ = !1;
						var i = this.ni();
						if (this.p_) {
							var n = this.D_.Ci();
							i.Il(this.D_, n), i.zf(), (this.m_ = null), (this.p_ = !1);
						}
					}
				}),
				(t.prototype.Hc = function (t) {
					if (((this.k_ = !0), null === this.x_ && Dn)) {
						var i = { m: t.Zc, p: t.Jc };
						this.H_(i, i);
					}
				}),
				(t.prototype.qc = function (t) {
					null !== this.D_ && (this.D_.ct().bf(null), bn || this.I_());
				}),
				(t.prototype.Y_ = function () {
					return this.g_;
				}),
				(t.prototype.Oc = function () {
					this.y_ = 1;
				}),
				(t.prototype.Ic = function (t, i) {
					if (this.T_.O().handleScale.pinch) {
						var n = 5 * (i - this.y_);
						(this.y_ = i), this.ni().Af(t.m, n);
					}
				}),
				(t.prototype.vo = function (t, i) {
					var n = this.D_;
					if (null === n) return null;
					for (var s = 0, h = n.Js(); s < h.length; s++) {
						var r = h[s],
							e = this.K_(r._i(n), t, i);
						if (null !== e) return { mf: r, hv: e.hv, R_: e.R_ };
					}
					return null;
				}),
				(t.prototype.X_ = function (t, i) {
					l("left" === i ? this.M_ : this.b_).h_(new on(t, this.Vv.ht));
				}),
				(t.prototype.Nv = function () {
					return this.Vv;
				}),
				(t.prototype.h_ = function (t) {
					if (t.st < 0 || t.ht < 0)
						throw new Error(
							"Try to set invalid size to PaneWidget " + JSON.stringify(t)
						);
					this.Vv._n(t) ||
						((this.Vv = t),
						this.Yv.resizeCanvas({ width: t.st, height: t.ht }),
						this.Kv.resizeCanvas({ width: t.st, height: t.ht }),
						(this.E_.style.width = t.st + "px"),
						(this.E_.style.height = t.ht + "px"));
				}),
				(t.prototype.Z_ = function () {
					var t = l(this.D_);
					t.Al(t.Ll()), t.Al(t.Bl());
					for (var i = 0, n = t.Zs(); i < n.length; i++) {
						var s = n[i];
						if (t.eo(s)) {
							var h = s.X();
							null !== h && t.Al(h), s.Ui();
						}
					}
				}),
				(t.prototype.Sv = function () {
					return this.Yv.canvas;
				}),
				(t.prototype.a_ = function (t) {
					if (0 !== t && null !== this.D_) {
						if (
							(t > 1 && this.Z_(),
							null !== this.M_ && this.M_.a_(t),
							null !== this.b_ && this.b_.a_(t),
							1 !== t)
						) {
							var i = ln(this.Yv.canvas);
							i.save(),
								this.f_(i, this.J_(), this.Yv.pixelRatio),
								this.D_ &&
									(this.G_(i, this.Yv.pixelRatio),
									this.Q_(i, this.Yv.pixelRatio),
									this.td(i, this.Yv.pixelRatio)),
								i.restore();
						}
						var n = ln(this.Kv.canvas);
						n.clearRect(
							0,
							0,
							Math.ceil(this.Vv.st * this.Kv.pixelRatio),
							Math.ceil(this.Vv.ht * this.Kv.pixelRatio)
						),
							this.nd(n, this.Kv.pixelRatio);
					}
				}),
				(t.prototype.sd = function () {
					return this.M_;
				}),
				(t.prototype.hd = function () {
					return this.b_;
				}),
				(t.prototype.J_ = function () {
					return this.T_.O().layout.backgroundColor;
				}),
				(t.prototype.C_ = function () {
					null !== this.D_ && this.D_.Hl().on(this), (this.D_ = null);
				}),
				(t.prototype.f_ = function (t, i, n) {
					var s = this;
					W(t, n, function () {
						j(t, 0, 0, s.Vv.st, s.Vv.ht, i);
					});
				}),
				(t.prototype.G_ = function (t, i) {
					for (
						var n = l(this.D_),
							s = this.ni().xf()._i(n),
							h = n.wt(),
							r = n.dt(),
							e = 0,
							u = s;
						e < u.length;
						e++
					) {
						var o = u[e];
						t.save();
						var a = o.I(h, r);
						null !== a && a.s(t, i, !1), t.restore();
					}
				}),
				(t.prototype.Q_ = function (t, i) {
					var n = this.ni().Nf();
					null !== n && (this.rd(n, t, i), this.ed(n, t, i));
				}),
				(t.prototype.nd = function (t, i) {
					this.ed(this.ni().Sf(), t, i);
				}),
				(t.prototype.td = function (t, i) {
					for (var n = l(this.D_).Js(), s = 0, h = n; s < h.length; s++) {
						var r = h[s];
						this.rd(r, t, i);
					}
					for (var e = 0, u = n; e < u.length; e++) {
						r = u[e];
						this.ed(r, t, i);
					}
				}),
				(t.prototype.ed = function (t, i, n) {
					for (
						var s = l(this.D_),
							h = t._i(s),
							r = s.wt(),
							e = s.dt(),
							u = s.ct().Mf(),
							o = null !== u && u.mf === t,
							a = null !== u && o && void 0 !== u.R_ ? u.R_._o : void 0,
							f = 0,
							c = h;
						f < c.length;
						f++
					) {
						var v = c[f].I(r, e);
						null !== v && (i.save(), v.s(i, n, o, a), i.restore());
					}
				}),
				(t.prototype.rd = function (t, i, n) {
					for (
						var s = l(this.D_),
							h = t._i(s),
							r = s.wt(),
							e = s.dt(),
							u = s.ct().Mf(),
							o = null !== u && u.mf === t,
							a = null !== u && o && void 0 !== u.R_ ? u.R_._o : void 0,
							f = 0,
							c = h;
						f < c.length;
						f++
					) {
						var v = c[f].I(r, e);
						null !== v &&
							void 0 !== v.u &&
							(i.save(), v.u(i, n, o, a), i.restore());
					}
				}),
				(t.prototype.K_ = function (t, i, n) {
					for (var s = 0, h = t; s < h.length; s++) {
						var r = h[s],
							e = r.I(this.Vv.ht, this.Vv.st);
						if (null !== e && e.vo) {
							var u = e.vo(i, n);
							if (null !== u) return { hv: r, R_: u };
						}
					}
					return null;
				}),
				(t.prototype.P_ = function () {
					if (null !== this.D_) {
						var t = this.T_;
						t.O().leftPriceScale.visible ||
							null === this.M_ ||
							(this.A_.removeChild(this.M_.xv()),
							this.M_.fn(),
							(this.M_ = null)),
							t.O().rightPriceScale.visible ||
								null === this.b_ ||
								(this.L_.removeChild(this.b_.xv()),
								this.b_.fn(),
								(this.b_ = null));
						var i = t.ct().qf();
						t.O().leftPriceScale.visible &&
							null === this.M_ &&
							((this.M_ = new Sn(this, t.O().layout, i, "left")),
							this.A_.appendChild(this.M_.xv())),
							t.O().rightPriceScale.visible &&
								null === this.b_ &&
								((this.b_ = new Sn(this, t.O().layout, i, "right")),
								this.L_.appendChild(this.b_.xv()));
					}
				}),
				(t.prototype.O_ = function () {
					return Dn && null === this.x_;
				}),
				(t.prototype.q_ = function () {
					return (Dn && this.k_) || null !== this.x_;
				}),
				(t.prototype.ud = function (t) {
					return Math.max(0, Math.min(t, this.Vv.st - 1));
				}),
				(t.prototype.od = function (t) {
					return Math.max(0, Math.min(t, this.Vv.ht - 1));
				}),
				(t.prototype.F_ = function (t, i) {
					this.ni().If(this.ud(t), this.od(i), l(this.D_));
				}),
				(t.prototype.I_ = function () {
					this.ni().Wf();
				}),
				(t.prototype.U_ = function () {
					this.N_ && ((this.x_ = null), this.I_());
				}),
				(t.prototype.H_ = function (t, i) {
					(this.x_ = t), (this.N_ = !1), this.F_(i.x, i.y);
					var n = this.ni().Sf();
					this.S_ = { x: n.Mt(), y: n.bt() };
				}),
				(t.prototype.ni = function () {
					return this.T_.ct();
				}),
				t
			);
		})(),
		Cn = (function () {
			function t(t, i, n, s) {
				var h = this;
				(this.C = !0),
					(this.Vv = new on(0, 0)),
					(this.Wv = function () {
						return h.a_(3);
					}),
					(this.Hv = "left" === t),
					(this.af = n.qf),
					(this.Si = i),
					(this.ad = s),
					(this.Mv = document.createElement("div")),
					(this.Mv.style.width = "25px"),
					(this.Mv.style.height = "100%"),
					(this.Mv.style.overflow = "hidden"),
					(this.Yv = vn(this.Mv, new on(16, 16))),
					this.Yv.subscribeCanvasConfigured(this.Wv);
			}
			return (
				(t.prototype.fn = function () {
					this.Yv.unsubscribeCanvasConfigured(this.Wv), this.Yv.destroy();
				}),
				(t.prototype.B = function () {
					this.C = !0;
				}),
				(t.prototype.xv = function () {
					return this.Mv;
				}),
				(t.prototype.Nv = function () {
					return this.Vv;
				}),
				(t.prototype.h_ = function (t) {
					if (t.st < 0 || t.ht < 0)
						throw new Error(
							"Try to set invalid size to PriceAxisStub " + JSON.stringify(t)
						);
					this.Vv._n(t) ||
						((this.Vv = t),
						this.Yv.resizeCanvas({ width: t.st, height: t.ht }),
						(this.Mv.style.width = t.st + "px"),
						(this.Mv.style.minWidth = t.st + "px"),
						(this.Mv.style.height = t.ht + "px"),
						(this.C = !0));
				}),
				(t.prototype.a_ = function (t) {
					if ((!(t < 3) || this.C) && 0 !== this.Vv.st && 0 !== this.Vv.ht) {
						this.C = !1;
						var i = ln(this.Yv.canvas);
						this.f_(i, this.Yv.pixelRatio), this.Fu(i, this.Yv.pixelRatio);
					}
				}),
				(t.prototype.Sv = function () {
					return this.Yv.canvas;
				}),
				(t.prototype.d_ = function () {
					return this.Hv;
				}),
				(t.prototype.Fu = function (t, i) {
					if (this.ad()) {
						var n = this.Vv.st;
						t.save(), (t.fillStyle = this.Si.timeScale.borderColor);
						var s = Math.floor(this.af.O().Nt * i),
							h = this.Hv ? Math.round(n * i) - s : 0;
						t.fillRect(h, 0, s, s), t.restore();
					}
				}),
				(t.prototype.f_ = function (t, i) {
					var n = this;
					W(t, i, function () {
						j(t, 0, 0, n.Vv.st, n.Vv.ht, n.Si.layout.backgroundColor);
					});
				}),
				t
			);
		})();
	function En(t, i) {
		return t.ir > i.ir ? t : i;
	}
	var An = (function () {
			function t(t) {
				var i = this;
				(this.ld = null),
					(this.fd = null),
					(this.Le = null),
					(this.vd = !1),
					(this.Vv = new on(0, 0)),
					(this.Wv = function () {
						return i.T_.ct().ee();
					}),
					(this.qv = function () {
						return i.T_.ct().ee();
					}),
					(this.T_ = t),
					(this.Si = t.O().layout),
					(this._d = document.createElement("tr")),
					(this.dd = document.createElement("td")),
					(this.dd.style.padding = "0"),
					(this.wd = document.createElement("td")),
					(this.wd.style.padding = "0"),
					(this.Mv = document.createElement("td")),
					(this.Mv.style.height = "25px"),
					(this.Mv.style.padding = "0"),
					(this.Md = document.createElement("div")),
					(this.Md.style.width = "100%"),
					(this.Md.style.height = "100%"),
					(this.Md.style.position = "relative"),
					(this.Md.style.overflow = "hidden"),
					this.Mv.appendChild(this.Md),
					(this.Yv = vn(this.Md, new on(16, 16))),
					this.Yv.subscribeCanvasConfigured(this.Wv);
				var n = this.Yv.canvas;
				(n.style.position = "absolute"),
					(n.style.zIndex = "1"),
					(n.style.left = "0"),
					(n.style.top = "0"),
					(this.Kv = vn(this.Md, new on(16, 16))),
					this.Kv.subscribeCanvasConfigured(this.qv);
				var s = this.Kv.canvas;
				(s.style.position = "absolute"),
					(s.style.zIndex = "2"),
					(s.style.left = "0"),
					(s.style.top = "0"),
					this._d.appendChild(this.dd),
					this._d.appendChild(this.Mv),
					this._d.appendChild(this.wd),
					this.bd(),
					this.T_.ct().Nl().sn(this.bd.bind(this), this),
					(this.pv = new mn(this.Kv.canvas, this, { Nc: !0, Sc: !1 }));
			}
			return (
				(t.prototype.fn = function () {
					this.pv.fn(),
						null !== this.ld && this.ld.fn(),
						null !== this.fd && this.fd.fn(),
						this.Kv.unsubscribeCanvasConfigured(this.qv),
						this.Kv.destroy(),
						this.Yv.unsubscribeCanvasConfigured(this.Wv),
						this.Yv.destroy();
				}),
				(t.prototype.xv = function () {
					return this._d;
				}),
				(t.prototype.md = function () {
					return this.ld;
				}),
				(t.prototype.pd = function () {
					return this.fd;
				}),
				(t.prototype.zc = function (t) {
					if (!this.vd) {
						this.vd = !0;
						var i = this.T_.ct();
						!i.j().Gt() &&
							this.T_.O().handleScale.axisPressedMouseMove.time &&
							i.Ef(t.Zc);
					}
				}),
				(t.prototype.Pc = function () {
					var t = this.T_.ct();
					!t.j().Gt() &&
						this.vd &&
						((this.vd = !1),
						this.T_.O().handleScale.axisPressedMouseMove.time && t.Ff());
				}),
				(t.prototype.Dc = function (t) {
					var i = this.T_.ct();
					!i.j().Gt() &&
						this.T_.O().handleScale.axisPressedMouseMove.time &&
						i.Pf(t.Zc);
				}),
				(t.prototype.Ec = function (t) {
					this.vd = !1;
					var i = this.T_.ct();
					(i.j().Gt() && !this.T_.O().handleScale.axisPressedMouseMove.time) ||
						i.Ff();
				}),
				(t.prototype.Ac = function () {
					this.T_.O().handleScale.axisDoubleClickReset && this.T_.ct().Of();
				}),
				(t.prototype.pc = function (t) {
					this.T_.ct().O().handleScale.axisPressedMouseMove.time && this.w_(1);
				}),
				(t.prototype.qc = function (t) {
					this.w_(0);
				}),
				(t.prototype.Nv = function () {
					return this.Vv;
				}),
				(t.prototype.gd = function (t, i, n) {
					(this.Vv && this.Vv._n(t)) ||
						((this.Vv = t),
						this.Yv.resizeCanvas({ width: t.st, height: t.ht }),
						this.Kv.resizeCanvas({ width: t.st, height: t.ht }),
						(this.Mv.style.width = t.st + "px"),
						(this.Mv.style.height = t.ht + "px")),
						null !== this.ld && this.ld.h_(new on(i, t.ht)),
						null !== this.fd && this.fd.h_(new on(n, t.ht));
				}),
				(t.prototype.dt = function () {
					return this.Vv.st;
				}),
				(t.prototype.wt = function () {
					return this.Vv.ht;
				}),
				(t.prototype.yd = function () {
					var t = this.kd();
					return Math.ceil(t.Nt + t.xt + t.Bt + t.St + t.Dt);
				}),
				(t.prototype.B = function () {
					this.T_.ct().j().qn();
				}),
				(t.prototype.Sv = function () {
					return this.Yv.canvas;
				}),
				(t.prototype.a_ = function (t) {
					if (0 !== t) {
						if (1 !== t) {
							var i = ln(this.Yv.canvas);
							this.f_(i, this.Yv.pixelRatio),
								this.Fu(i, this.Yv.pixelRatio),
								this.c_(i, this.Yv.pixelRatio),
								null !== this.ld && this.ld.a_(t),
								null !== this.fd && this.fd.a_(t);
						}
						var n = ln(this.Kv.canvas),
							s = this.Kv.pixelRatio;
						n.clearRect(
							0,
							0,
							Math.ceil(this.Vv.st * s),
							Math.ceil(this.Vv.ht * s)
						),
							this.xd([this.T_.ct().Sf()], n, s);
					}
				}),
				(t.prototype.f_ = function (t, i) {
					var n = this;
					W(t, i, function () {
						j(t, 0, 0, n.Vv.st, n.Vv.ht, n.J_());
					});
				}),
				(t.prototype.Fu = function (t, i) {
					if (this.T_.O().timeScale.borderVisible) {
						t.save(), (t.fillStyle = this.Nd());
						var n = Math.max(1, Math.floor(this.kd().Nt * i));
						t.fillRect(0, 0, Math.ceil(this.Vv.st * i), n), t.restore();
					}
				}),
				(t.prototype.c_ = function (t, i) {
					var n = this,
						s = this.T_.ct().j().qn();
					if (s && 0 !== s.length) {
						var h = s.reduce(En, s[0]).ir;
						h > 30 && h < 40 && (h = 30), t.save(), (t.strokeStyle = this.Nd());
						var r = this.kd(),
							e = r.Nt + r.xt + r.St + r.Bt - r.Lt;
						(t.textAlign = "center"), (t.fillStyle = this.Nd());
						var u = Math.floor(this.kd().Nt * i),
							o = Math.max(1, Math.floor(i)),
							a = Math.floor(0.5 * i);
						if (this.T_.ct().j().O().borderVisible) {
							t.beginPath();
							for (var l = Math.round(r.xt * i), f = s.length; f--; ) {
								var c = Math.round(s[f].Rn * i);
								t.rect(c - a, u, o, l);
							}
							t.fill();
						}
						(t.fillStyle = this.Pe()),
							W(t, i, function () {
								t.font = n.Sd();
								for (var i = 0, r = s; i < r.length; i++) {
									(a = r[i]).ir < h && t.fillText(a.Wn, a.Rn, e);
								}
								t.font = n.Dd();
								for (var u = 0, o = s; u < o.length; u++) {
									var a;
									(a = o[u]).ir >= h && t.fillText(a.Wn, a.Rn, e);
								}
							});
					}
				}),
				(t.prototype.xd = function (t, i, n) {
					for (var s = this.kd(), h = 0, r = t; h < r.length; h++)
						for (var e = 0, u = r[h].di(); e < u.length; e++) {
							var o = u[e];
							i.save(), o.I().s(i, s, n), i.restore();
						}
				}),
				(t.prototype.J_ = function () {
					return this.Si.backgroundColor;
				}),
				(t.prototype.Nd = function () {
					return this.T_.O().timeScale.borderColor;
				}),
				(t.prototype.Pe = function () {
					return this.Si.textColor;
				}),
				(t.prototype.Ve = function () {
					return this.Si.fontSize;
				}),
				(t.prototype.Sd = function () {
					return Ut(this.Ve(), this.Si.fontFamily);
				}),
				(t.prototype.Dd = function () {
					return Ut(this.Ve(), this.Si.fontFamily, "bold");
				}),
				(t.prototype.kd = function () {
					null === this.Le &&
						(this.Le = {
							Nt: 1,
							Lt: NaN,
							St: NaN,
							Dt: NaN,
							ii: NaN,
							xt: 3,
							Bt: NaN,
							gt: "",
							ti: new bi(),
						});
					var t = this.Le,
						i = this.Sd();
					if (t.gt !== i) {
						var n = this.Ve();
						(t.Bt = n),
							(t.gt = i),
							(t.St = Math.ceil(n / 2.5)),
							(t.Dt = t.St),
							(t.ii = Math.ceil(n / 2)),
							(t.Lt = Math.round(this.Ve() / 5)),
							t.ti.tr();
					}
					return this.Le;
				}),
				(t.prototype.w_ = function (t) {
					this.Mv.style.cursor = 1 === t ? "ew-resize" : "default";
				}),
				(t.prototype.bd = function () {
					var t = this.T_.ct(),
						i = t.O();
					i.leftPriceScale.visible ||
						null === this.ld ||
						(this.dd.removeChild(this.ld.xv()), this.ld.fn(), (this.ld = null)),
						i.rightPriceScale.visible ||
							null === this.fd ||
							(this.wd.removeChild(this.fd.xv()),
							this.fd.fn(),
							(this.fd = null));
					var n = { qf: this.T_.ct().qf() };
					if (i.leftPriceScale.visible && null === this.ld) {
						var s = function () {
							return i.leftPriceScale.borderVisible && t.j().O().borderVisible;
						};
						(this.ld = new Cn("left", this.T_.O(), n, s)),
							this.dd.appendChild(this.ld.xv());
					}
					if (i.rightPriceScale.visible && null === this.fd) {
						s = function () {
							return i.rightPriceScale.borderVisible && t.j().O().borderVisible;
						};
						(this.fd = new Cn("right", this.T_.O(), n, s)),
							this.wd.appendChild(this.fd.xv());
					}
				}),
				t
			);
		})(),
		Ln = (function () {
			function t(t, i) {
				(this.Td = []),
					(this.Cd = []),
					(this.Ed = 0),
					(this.Hn = 0),
					(this.pr = 0),
					(this.Ad = 0),
					(this.Ld = 0),
					(this.Bd = null),
					(this.Vd = !1),
					(this.g_ = new st()),
					(this.ef = new st()),
					(this.Si = i),
					(this._d = document.createElement("div")),
					this._d.classList.add("tv-lightweight-charts"),
					(this._d.style.overflow = "hidden"),
					(this._d.style.width = "100%"),
					(this._d.style.height = "100%"),
					(this.zd = document.createElement("table")),
					this.zd.setAttribute("cellspacing", "0"),
					this._d.appendChild(this.zd),
					(this.Pd = this.Fd.bind(this)),
					this._d.addEventListener("wheel", this.Pd, { passive: !1 }),
					(this.ni = new rn(this.uf.bind(this), this.Si)),
					this.ct().Df().sn(this.Od.bind(this), this),
					(this.Id = new An(this)),
					this.zd.appendChild(this.Id.xv());
				var n = this.Si.width,
					s = this.Si.height;
				if (0 === n || 0 === s) {
					var h = t.getBoundingClientRect();
					0 === n && ((n = Math.floor(h.width)), (n -= n % 2)),
						0 === s && ((s = Math.floor(h.height)), (s -= s % 2));
				}
				(n = Math.max(70, n)),
					(s = Math.max(50, s)),
					this.Rd(n, s),
					this.Wd(),
					t.appendChild(this._d),
					this.jd(),
					this.ni.j().ge().sn(this.ni._f.bind(this.ni), this),
					this.ni.Nl().sn(this.ni._f.bind(this.ni), this);
			}
			return (
				(t.prototype.ct = function () {
					return this.ni;
				}),
				(t.prototype.O = function () {
					return this.Si;
				}),
				(t.prototype._v = function () {
					return this.Td;
				}),
				(t.prototype.fn = function () {
					this._d.removeEventListener("wheel", this.Pd),
						0 !== this.Ed && window.cancelAnimationFrame(this.Ed),
						this.ni.Df().on(this),
						this.ni.j().ge().on(this),
						this.ni.Nl().on(this),
						this.ni.fn();
					for (var t = 0, i = this.Td; t < i.length; t++) {
						var n = i[t];
						this.zd.removeChild(n.xv()), n.Y_().on(this), n.fn();
					}
					this.Td = [];
					for (var s = 0, h = this.Cd; s < h.length; s++) {
						var r = h[s];
						this.Ud(r);
					}
					(this.Cd = []),
						l(this.Id).fn(),
						null !== this._d.parentElement &&
							this._d.parentElement.removeChild(this._d),
						this.ef.fn(),
						this.g_.fn(),
						delete this._d;
				}),
				(t.prototype.Rd = function (t, i, n) {
					if ((void 0 === n && (n = !1), this.Hn !== i || this.pr !== t)) {
						(this.Hn = i), (this.pr = t);
						var s = i + "px",
							h = t + "px";
						(l(this._d).style.height = s),
							(l(this._d).style.width = h),
							(this.zd.style.height = s),
							(this.zd.style.width = h),
							n ? this.qd(new Xt(3)) : this.ni._f();
					}
				}),
				(t.prototype.a_ = function (t) {
					void 0 === t && (t = new Xt(3));
					for (var i = 0; i < this.Td.length; i++) this.Td[i].a_(t.iu(i).Ge);
					this.Id.a_(t.tu());
				}),
				(t.prototype.ms = function (t) {
					this.ni.ms(t), this.jd();
					var i = t.width || this.pr,
						n = t.height || this.Hn;
					this.Rd(i, n);
				}),
				(t.prototype.Y_ = function () {
					return this.g_;
				}),
				(t.prototype.Df = function () {
					return this.ef;
				}),
				(t.prototype.Hd = function () {
					var t = this;
					null !== this.Bd && (this.qd(this.Bd), (this.Bd = null));
					var i = this.Td[0],
						n = cn(document, new on(this.pr, this.Hn)),
						s = ln(n),
						h = an(n);
					return (
						W(s, h, function () {
							var n = 0,
								h = 0,
								r = function (i) {
									for (var r = 0; r < t.Td.length; r++) {
										var e = t.Td[r],
											u = e.Nv().ht,
											o = l("left" === i ? e.sd() : e.hd()),
											a = o.Sv();
										if (
											(s.drawImage(a, n, h, o.r_(), u),
											(h += u),
											r < t.Td.length - 1)
										) {
											var f = t.Cd[r],
												c = f.Nv(),
												v = f.Sv();
											s.drawImage(v, n, h, c.st, c.ht), (h += c.ht);
										}
									}
								};
							t.Yd() && (r("left"), (n = l(i.sd()).r_())), (h = 0);
							for (var e = 0; e < t.Td.length; e++) {
								var u = t.Td[e],
									o = u.Nv(),
									a = u.Sv();
								if (
									(s.drawImage(a, n, h, o.st, o.ht),
									(h += o.ht),
									e < t.Td.length - 1)
								) {
									var f = t.Cd[e],
										c = f.Nv(),
										v = f.Sv();
									s.drawImage(v, n, h, c.st, c.ht), (h += c.ht);
								}
							}
							(n += i.Nv().st), t.Kd() && ((h = 0), r("right"));
							var _ = function (i) {
								var r = l("left" === i ? t.Id.md() : t.Id.pd()),
									e = r.Nv(),
									u = r.Sv();
								s.drawImage(u, n, h, e.st, e.ht);
							};
							if (t.Si.timeScale.visible) {
								(n = 0), t.Yd() && (_("left"), (n = l(i.sd()).r_()));
								var d = t.Id.Nv();
								a = t.Id.Sv();
								s.drawImage(a, n, h, d.st, d.ht),
									t.Kd() && ((n = i.Nv().st), _("right"), s.restore());
							}
						}),
						n
					);
				}),
				(t.prototype.$d = function (t) {
					return "none" === t
						? 0
						: ("left" !== t || this.Yd()) && ("right" !== t || this.Kd())
						? 0 === this.Td.length
							? 0
							: l("left" === t ? this.Td[0].sd() : this.Td[0].hd()).r_()
						: 0;
				}),
				(t.prototype.Xd = function () {
					for (var t = 0, i = 0, n = 0, s = 0, h = this.Td; s < h.length; s++) {
						var r = h[s];
						this.Yd() && (i = Math.max(i, l(r.sd()).n_())),
							this.Kd() && (n = Math.max(n, l(r.hd()).n_())),
							(t += r.Sl());
					}
					var e = this.pr,
						u = this.Hn,
						o = Math.max(e - i - n, 0),
						a = 1 * this.Cd.length,
						f = this.Si.timeScale.visible ? this.Id.yd() : 0;
					f % 2 && (f += 1);
					for (
						var c = a + f, v = u < c ? 0 : u - c, _ = v / t, d = 0, w = 0;
						w < this.Td.length;
						++w
					) {
						(r = this.Td[w]).z_(this.ni.kf()[w]);
						var M,
							b = 0;
						(b = w === this.Td.length - 1 ? v - d : Math.round(r.Sl() * _)),
							(d += M = Math.max(b, 2)),
							r.h_(new on(o, M)),
							this.Yd() && r.X_(i, "left"),
							this.Kd() && r.X_(n, "right"),
							r.o_() && this.ni.Tf(r.o_(), M);
					}
					this.Id.gd(new on(o, f), i, n),
						this.ni.Zr(o),
						this.Ad !== i && (this.Ad = i),
						this.Ld !== n && (this.Ld = n);
				}),
				(t.prototype.Fd = function (t) {
					var i = t.deltaX / 100,
						n = -t.deltaY / 100;
					if (
						(0 !== i && this.Si.handleScroll.mouseWheel) ||
						(0 !== n && this.Si.handleScale.mouseWheel)
					) {
						switch ((t.cancelable && t.preventDefault(), t.deltaMode)) {
							case t.DOM_DELTA_PAGE:
								(i *= 120), (n *= 120);
								break;
							case t.DOM_DELTA_LINE:
								(i *= 32), (n *= 32);
						}
						if (0 !== n && this.Si.handleScale.mouseWheel) {
							var s = Math.sign(n) * Math.min(1, Math.abs(n)),
								h = t.clientX - this._d.getBoundingClientRect().left;
							this.ct().Af(h, s);
						}
						0 !== i && this.Si.handleScroll.mouseWheel && this.ct().Lf(-80 * i);
					}
				}),
				(t.prototype.qd = function (t) {
					var i = t.tu();
					if ((3 === i && this.Zd(), 3 === i || 2 === i)) {
						for (var n = this.ni.kf(), s = 0; s < n.length; s++)
							t.iu(s).Ts && n[s].Ul();
						t.su() && this.ni.j().ke();
						var h = t.hu();
						null !== h && this.ni.j().xe(h), this.Id.B();
					}
					this.a_(t);
				}),
				(t.prototype.uf = function (t) {
					var i = this;
					null !== this.Bd ? this.Bd.gn(t) : (this.Bd = t),
						this.Vd ||
							((this.Vd = !0),
							(this.Ed = window.requestAnimationFrame(function () {
								(i.Vd = !1),
									(i.Ed = 0),
									null !== i.Bd && (i.qd(i.Bd), (i.Bd = null));
							})));
				}),
				(t.prototype.Zd = function () {
					this.Wd();
				}),
				(t.prototype.Ud = function (t) {
					this.zd.removeChild(t.xv()), t.fn();
				}),
				(t.prototype.Wd = function () {
					for (
						var t = this.ni.kf(), i = t.length, n = this.Td.length, s = i;
						s < n;
						s++
					) {
						var h = a(this.Td.pop());
						this.zd.removeChild(h.xv()),
							h.Y_().on(this),
							h.fn(),
							void 0 !== (r = this.Cd.pop()) && this.Ud(r);
					}
					for (s = n; s < i; s++) {
						if (
							((h = new Tn(this, t[s])).Y_().sn(this.Jd.bind(this), this),
							this.Td.push(h),
							s > 1)
						) {
							var r = new xn(this, s - 1, s, !0);
							this.Cd.push(r), this.zd.insertBefore(r.xv(), this.Id.xv());
						}
						this.zd.insertBefore(h.xv(), this.Id.xv());
					}
					for (s = 0; s < i; s++) {
						var e = t[s];
						(h = this.Td[s]).o_() !== e ? h.z_(e) : h.B_();
					}
					this.jd(), this.Xd();
				}),
				(t.prototype.Gd = function (t, i) {
					var n,
						s = new Map();
					null !== t &&
						this.ni.V().forEach(function (i) {
							var n = i.To(t);
							null !== n && s.set(i, n);
						});
					if (null !== t) {
						var h = this.ni.j().si(t);
						null !== h && (n = h);
					}
					var r = this.ct().Mf(),
						e = null !== r && r.mf instanceof Gi ? r.mf : void 0,
						u = null !== r && void 0 !== r.R_ ? r.R_.wo : void 0;
					return { P: n, Qd: i || void 0, tw: e, iw: s, nw: u };
				}),
				(t.prototype.Jd = function (t, i) {
					var n = this;
					this.g_.an(function () {
						return n.Gd(t, i);
					});
				}),
				(t.prototype.Od = function (t, i) {
					var n = this;
					this.ef.an(function () {
						return n.Gd(t, i);
					});
				}),
				(t.prototype.jd = function () {
					var t = this.Si.timeScale.visible ? "" : "none";
					this.Id.xv().style.display = t;
				}),
				(t.prototype.Yd = function () {
					return this.Si.leftPriceScale.visible;
				}),
				(t.prototype.Kd = function () {
					return this.Si.rightPriceScale.visible;
				}),
				t
			);
		})();
	function Bn(t) {
		if (!Wt(t)) throw new Error("time must be of type BusinessDay");
		var i = new Date(Date.UTC(t.year, t.month - 1, t.day, 0, 0, 0, 0));
		return { Wh: Math.round(i.getTime() / 1e3), Rh: t };
	}
	function Vn(t) {
		if (!jt(t)) throw new Error("time must be of type isUTCTimestamp");
		return { Wh: t };
	}
	function zn(t) {
		return 0 === t.length ? null : Wt(t[0].time) ? Bn : Vn;
	}
	function Pn(t) {
		return jt(t) ? Vn(t) : Wt(t) ? Bn(t) : Bn(Kn(t));
	}
	function Fn(t, i) {
		var n = t.value,
			s = null;
		return (
			"color" in t && void 0 !== t.color && (s = i.Ko(t.color)), [n, n, n, n, s]
		);
	}
	function On(t, i) {
		return [t.open, t.high, t.low, t.close, null];
	}
	var In = { Candlestick: On, Bar: On, Area: Fn, Histogram: Fn, Line: Fn };
	function Rn(t) {
		return In[t];
	}
	function Wn(t) {
		return 60 * t * 60 * 1e3;
	}
	function jn(t) {
		return 60 * t * 1e3;
	}
	var Un,
		qn = [
			{ sw: 1, ir: 20 },
			{ sw: ((Un = 1), 1e3 * Un), ir: 19 },
			{ sw: jn(1), ir: 20 },
			{ sw: jn(5), ir: 21 },
			{ sw: jn(30), ir: 22 },
			{ sw: Wn(1), ir: 30 },
			{ sw: Wn(3), ir: 31 },
			{ sw: Wn(6), ir: 32 },
			{ sw: Wn(12), ir: 33 },
		];
	function Hn(t, i) {
		if (null !== i) {
			var n = new Date(1e3 * i),
				s = new Date(1e3 * t);
			if (s.getUTCFullYear() !== n.getUTCFullYear()) return 70;
			if (s.getUTCMonth() !== n.getUTCMonth()) return 60;
			if (s.getUTCDate() !== n.getUTCDate()) return 50;
			for (var h = qn.length - 1; h >= 0; --h)
				if (
					Math.floor(n.getTime() / qn[h].sw) !==
					Math.floor(s.getTime() / qn[h].sw)
				)
					return qn[h].ir;
		}
		return 20;
	}
	function Yn(t, i) {
		return t.Wh < i.Wh;
	}
	function Kn(t) {
		var i = new Date(t);
		if (isNaN(i.getTime()))
			throw new Error(
				"Invalid date string=" + t + ", expected format=yyyy-mm-dd"
			);
		return {
			day: i.getUTCDate(),
			month: i.getUTCMonth() + 1,
			year: i.getUTCFullYear(),
		};
	}
	function $n(t) {
		d(t.time) && (t.time = Kn(t.time));
	}
	var Xn = (function () {
			function t() {
				(this.hw = new Map()), (this.rw = new Map()), (this.ew = []);
			}
			return (
				(t.prototype.fn = function () {
					this.hw.clear(), this.rw.clear(), (this.ew = []);
				}),
				(t.prototype.uw = function (t, i) {
					var n = this;
					t.tl(),
						(function (t) {
							t.forEach($n);
						})(i),
						this.hw.forEach(function (i) {
							return i.ow.delete(t);
						});
					var s = zn(i);
					null !== s &&
						i.forEach(function (i) {
							var h = s(i.time),
								r = n.hw.get(h.Wh) || { Bi: 0, ow: new Map(), ih: h };
							r.ow.set(t, i), n.hw.set(h.Wh, r);
						});
					var h = new Map();
					return (
						this.hw.forEach(function (t, i) {
							t.ow.size > 0 && h.set(i, t);
						}),
						this.aw(h)
					);
				}),
				(t.prototype.Kf = function (t) {
					return this.uw(t, []);
				}),
				(t.prototype.lw = function (t, i) {
					$n(i);
					var n = t.Ki();
					if (n.or() > 0)
						if (void 0 !== l(n.fa()).P.Rh) {
							if (!Wt(i.time))
								throw new Error("time must be of type BusinessDay");
						} else if (!jt(i.time))
							throw new Error("time must be of type isUTCTimestamp");
					var s = l(zn([i]))(i.time),
						h = this.hw.get(s.Wh) || { Bi: 0, ow: new Map(), ih: s },
						r = 0 === h.ow.size;
					h.ow.set(t, i);
					var e = !1;
					if (r) {
						var u = this.hw.size;
						this.ew.length > 0 && this.ew[this.ew.length - 1].Wh > s.Wh
							? ((u = ii(this.ew, s, Yn)),
							  this.ew.splice(u, 0, s),
							  this.fw(u),
							  (e = !0))
							: this.ew.push(s),
							(h.Bi = u),
							this.rw.set(h.Bi, s);
					}
					this.hw.set(s.Wh, h);
					var o = new Map(),
						f = function (i) {
							var n = a(c.rw.get(i));
							a(c.hw.get(n.Wh)).ow.forEach(function (s, h) {
								if (e || h === t) {
									var r = Rn(h.$o()),
										u = o.get(h) || { B: [] },
										a = { Bi: i, P: n, Z: r(s, h.Zu()) };
									u.B.push(a), o.set(h, u);
								}
							});
						},
						c = this;
					for (u = h.Bi; u < this.hw.size; ++u) f(u);
					var v = r ? this.cw(h.Bi) : [],
						_ = r ? this.ew.slice(h.Bi) : [];
					return { vw: { _w: o, dw: _, Bi: h.Bi, qn: v } };
				}),
				(t.prototype.aw = function (t) {
					var i = this;
					(this.hw = t),
						(this.ew = Array.from(this.hw.values()).map(function (t) {
							return t.ih;
						})),
						this.ew.sort(function (t, i) {
							return t.Wh - i.Wh;
						});
					var n = new Map();
					this.ew.forEach(function (t, s) {
						var h = a(i.hw.get(t.Wh));
						(h.Bi = s),
							h.ow.forEach(function (i, h) {
								var r = Rn(h.$o()),
									e = n.get(h) || { B: [] },
									u = { Bi: s, P: t, Z: r(i, h.Zu()) };
								e.B.push(u), n.set(h, e);
							});
					});
					var s = null,
						h = 0,
						r = this.ew.map(function (t, i) {
							h += t.Wh - (s || t.Wh);
							var n = Hn(t.Wh, s);
							return (s = t.Wh), { ir: n, P: t, Bi: i };
						});
					if (r.length > 1) {
						var e = Math.ceil(h / (r.length - 1)),
							u = r[0].P.Wh - e;
						r[0].ir = Hn(r[0].P.Wh, u);
					}
					var o = { _w: n, dw: this.ew.slice(), Bi: 0, qn: r };
					return this.ww(), { vw: o };
				}),
				(t.prototype.fw = function (t) {
					for (var i = this.rw.size - 1; i >= t; --i) {
						var n = a(this.rw.get(i)),
							s = i + 1;
						(a(this.hw.get(n.Wh)).Bi = s), this.rw.delete(i), this.rw.set(s, n);
					}
				}),
				(t.prototype.ww = function () {
					var t = this;
					this.rw.clear(),
						this.hw.forEach(function (i, n) {
							t.rw.set(i.Bi, i.ih);
						});
				}),
				(t.prototype.cw = function (t) {
					for (
						var i,
							n = [],
							s =
								(null === (i = this.rw.get(t - 1)) || void 0 === i
									? void 0
									: i.Wh) || null,
							h = t;
						h < this.rw.size;
						++h
					) {
						var r = a(this.rw.get(h)),
							e = Hn(r.Wh, s);
						(s = r.Wh), n.push({ ir: e, P: r, Bi: h });
					}
					return n;
				}),
				t
			);
		})(),
		Zn = {
			color: "#FF0000",
			price: 0,
			lineStyle: 2,
			lineWidth: 1,
			axisLabelVisible: !0,
		},
		Jn = (function () {
			function t(t) {
				this.Io = t;
			}
			return (
				(t.prototype.applyOptions = function (t) {
					this.Io.ms(t);
				}),
				(t.prototype.options = function () {
					return this.Io.O();
				}),
				(t.prototype.Mw = function () {
					return this.Io;
				}),
				t
			);
		})();
	function Gn(t) {
		var i = t.overlay,
			n = (function (t, i) {
				var n = {};
				for (var s in t)
					Object.prototype.hasOwnProperty.call(t, s) &&
						i.indexOf(s) < 0 &&
						(n[s] = t[s]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var h = 0;
					for (s = Object.getOwnPropertySymbols(t); h < s.length; h++)
						i.indexOf(s[h]) < 0 &&
							Object.prototype.propertyIsEnumerable.call(t, s[h]) &&
							(n[s[h]] = t[s[h]]);
				}
				return n;
			})(t, ["overlay"]);
		return i && (n.priceScaleId = ""), n;
	}
	var Qn = (function () {
			function t(t, i, n) {
				(this.du = t), (this.bw = i), (this.mw = n);
			}
			return (
				(t.prototype.fn = function () {
					delete this.du, delete this.bw;
				}),
				(t.prototype.priceFormatter = function () {
					return this.du.ah();
				}),
				(t.prototype.pw = function () {
					return this.du;
				}),
				(t.prototype.priceToCoordinate = function (t) {
					var i = this.du.q();
					return null === i ? null : this.du.X().$(t, i.Z);
				}),
				(t.prototype.coordinateToPrice = function (t) {
					var i = this.du.q();
					return null === i ? null : this.du.X().Ei(t, i.Z);
				}),
				(t.prototype.barsInLogicalRange = function (t) {
					if (null === t) return null;
					var i = new It(new Bt(t.from, t.to)).Mr(),
						n = this.du.Ki();
					if (n.Gt()) return null;
					var s = n._a(i.ph(), 1),
						h = n._a(i.gh(), -1),
						r = l(n.ar()),
						e = l(n.Yi());
					if (null !== s && null !== h && s.Bi > h.Bi)
						return { barsBefore: t.from - r, barsAfter: e - t.to };
					var u = {
						barsBefore: null === s || s.Bi === r ? t.from - r : s.Bi - r,
						barsAfter: null === h || h.Bi === e ? e - t.to : e - h.Bi,
					};
					return (
						null !== s &&
							null !== h &&
							((u.from = s.P.Rh || s.P.Wh), (u.to = h.P.Rh || h.P.Wh)),
						u
					);
				}),
				(t.prototype.setData = function (t) {
					this.bw.gw(this.du, t);
				}),
				(t.prototype.update = function (t) {
					this.bw.il(this.du, t);
				}),
				(t.prototype.setMarkers = function (t) {
					var i = t.map(function (t) {
						return e(e({}, t), { time: Pn(t.time) });
					});
					this.du.rl(i);
				}),
				(t.prototype.applyOptions = function (t) {
					var i = Gn(t);
					this.du.ms(i);
				}),
				(t.prototype.options = function () {
					return b(this.du.O());
				}),
				(t.prototype.priceScale = function () {
					return this.mw.X(this.du.X().bs());
				}),
				(t.prototype.createPriceLine = function (t) {
					var i = c(b(Zn), t),
						n = this.du.ul(i);
					return new Jn(n);
				}),
				(t.prototype.removePriceLine = function (t) {
					this.du.ol(t.Mw());
				}),
				t
			);
		})(),
		ts = (function (t) {
			function i() {
				return (null !== t && t.apply(this, arguments)) || this;
			}
			return (
				r(i, t),
				(i.prototype.applyOptions = function (i) {
					Nt(i), t.prototype.applyOptions.call(this, i);
				}),
				i
			);
		})(Qn),
		is = {
			autoScale: !0,
			mode: 0,
			invertScale: !1,
			alignLabels: !0,
			borderVisible: !0,
			borderColor: "#2B2B43",
			entireTextOnly: !1,
			visible: !1,
			drawTicks: !0,
			scaleMargins: { bottom: 0.1, top: 0.2 },
		},
		ns = {
			width: 0,
			height: 0,
			layout: {
				backgroundColor: "#FFFFFF",
				textColor: "#191919",
				fontSize: 11,
				fontFamily: "'Trebuchet MS', Roboto, Ubuntu, sans-serif",
			},
			crosshair: {
				vertLine: {
					color: "#758696",
					width: 1,
					style: 3,
					visible: !0,
					labelVisible: !0,
					labelBackgroundColor: "#4c525e",
				},
				horzLine: {
					color: "#758696",
					width: 1,
					style: 3,
					visible: !0,
					labelVisible: !0,
					labelBackgroundColor: "#4c525e",
				},
				mode: 1,
			},
			grid: {
				vertLines: { color: "#D6DCDE", style: 0, visible: !0 },
				horzLines: { color: "#D6DCDE", style: 0, visible: !0 },
			},
			overlayPriceScales: e({}, is),
			leftPriceScale: e(e({}, is), { visible: !1 }),
			rightPriceScale: e(e({}, is), { visible: !0 }),
			timeScale: {
				rightOffset: 0,
				barSpacing: 6,
				fixLeftEdge: !1,
				lockVisibleTimeRangeOnResize: !1,
				rightBarStaysOnScroll: !1,
				borderVisible: !0,
				borderColor: "#2B2B43",
				visible: !0,
				timeVisible: !1,
				secondsVisible: !0,
			},
			watermark: {
				color: "rgba(0, 0, 0, 0)",
				visible: !1,
				fontSize: 48,
				text: "",
				horzAlign: "center",
				vertAlign: "center",
			},
			localization: { locale: navigator.language, dateFormat: "dd MMM 'yy" },
			handleScroll: {
				mouseWheel: !0,
				pressedMouseMove: !0,
				horzTouchDrag: !0,
				vertTouchDrag: !0,
			},
			handleScale: {
				axisPressedMouseMove: { time: !0, price: !0 },
				axisDoubleClickReset: !0,
				mouseWheel: !0,
				pinch: !0,
			},
		},
		ss = {
			upColor: "#26a69a",
			downColor: "#ef5350",
			wickVisible: !0,
			borderVisible: !0,
			borderColor: "#378658",
			borderUpColor: "#26a69a",
			borderDownColor: "#ef5350",
			wickColor: "#737375",
			wickUpColor: "#26a69a",
			wickDownColor: "#ef5350",
		},
		hs = {
			upColor: "#26a69a",
			downColor: "#ef5350",
			openVisible: !0,
			thinBars: !0,
		},
		rs = {
			color: "#2196f3",
			lineStyle: 0,
			lineWidth: 3,
			lineType: 0,
			crosshairMarkerVisible: !0,
			crosshairMarkerRadius: 4,
		},
		es = {
			topColor: "rgba( 46, 220, 135, 0.4)",
			bottomColor: "rgba( 40, 221, 100, 0)",
			lineColor: "#33D778",
			lineStyle: 0,
			lineWidth: 3,
			lineType: 0,
			crosshairMarkerVisible: !0,
			crosshairMarkerRadius: 4,
		},
		us = { color: "#26a69a", base: 0 },
		os = {
			title: "",
			lastValueVisible: !0,
			priceLineVisible: !0,
			priceLineSource: 0,
			priceLineWidth: 1,
			priceLineColor: "",
			priceLineStyle: 2,
			baseLineVisible: !0,
			baseLineWidth: 1,
			baseLineColor: "#B2B5BE",
			baseLineStyle: 0,
			priceFormat: { type: "price", precision: 2, minMove: 0.01 },
		},
		as = (function () {
			function t(t, i) {
				(this.cv = t), (this.yw = i);
			}
			return (
				(t.prototype.fn = function () {
					delete this.cv;
				}),
				(t.prototype.bs = function () {
					return this.Zt().bs();
				}),
				(t.prototype.applyOptions = function (t) {
					this.cv.ct().pf(this.yw, t);
				}),
				(t.prototype.options = function () {
					return this.Zt().O();
				}),
				(t.prototype.width = function () {
					return Ht(this.yw)
						? this.cv.$d("left" === this.yw ? "left" : "right")
						: 0;
				}),
				(t.prototype.Zt = function () {
					return l(this.cv.ct().gf(this.yw)).X;
				}),
				t
			);
		})(),
		ls = (function () {
			function t(t) {
				(this.kw = new st()),
					(this.Tr = new st()),
					(this.ni = t),
					this.bl().me().sn(this.xw.bind(this)),
					this.bl().pe().sn(this.Nw.bind(this));
			}
			return (
				(t.prototype.fn = function () {
					this.bl().me().on(this),
						this.bl().pe().on(this),
						this.kw.fn(),
						delete this.ni;
				}),
				(t.prototype.scrollPosition = function () {
					return this.bl().oe();
				}),
				(t.prototype.scrollToPosition = function (t, i) {
					i ? this.bl().be(t, 1e3) : this.bl().Wr(t);
				}),
				(t.prototype.scrollToRealTime = function () {
					this.bl().Me();
				}),
				(t.prototype.getVisibleRange = function () {
					var t,
						i,
						n = this.bl().Hr();
					return null === n
						? null
						: {
								from: null !== (t = n.from.Rh) && void 0 !== t ? t : n.from.Wh,
								to: null !== (i = n.to.Rh) && void 0 !== i ? i : n.to.Wh,
						  };
				}),
				(t.prototype.setVisibleRange = function (t) {
					var i = { from: Pn(t.from), to: Pn(t.to) },
						n = this.bl().$r(i);
					this.ni.$f(n);
				}),
				(t.prototype.getVisibleLogicalRange = function () {
					var t = this.bl().qr();
					return null === t ? null : { from: t.ph(), to: t.gh() };
				}),
				(t.prototype.setVisibleLogicalRange = function (t) {
					o(t.from <= t.to, "The from index cannot be after the to index."),
						this.ni.$f(t);
				}),
				(t.prototype.resetTimeScale = function () {
					this.ni.Of();
				}),
				(t.prototype.fitContent = function () {
					this.ni.ke();
				}),
				(t.prototype.timeToCoordinate = function (t) {
					var i = Pn(t),
						n = this.ni.j(),
						s = n.Kr()._r(i.Wh, !1);
					return null === s ? null : n.J(s);
				}),
				(t.prototype.coordinateToTime = function (t) {
					var i,
						n = this.ni.j(),
						s = n.ne(t),
						h = n.Kr().cr(s);
					return null === h
						? null
						: null !== (i = h.Rh) && void 0 !== i
						? i
						: h.Wh;
				}),
				(t.prototype.subscribeVisibleTimeRangeChange = function (t) {
					this.kw.sn(t);
				}),
				(t.prototype.unsubscribeVisibleTimeRangeChange = function (t) {
					this.kw.un(t);
				}),
				(t.prototype.subscribeVisibleLogicalRangeChange = function (t) {
					this.Tr.sn(t);
				}),
				(t.prototype.unsubscribeVisibleLogicalRangeChange = function (t) {
					this.Tr.un(t);
				}),
				(t.prototype.applyOptions = function (t) {
					this.bl().ms(t);
				}),
				(t.prototype.options = function () {
					return b(this.bl().O());
				}),
				(t.prototype.bl = function () {
					return this.ni.j();
				}),
				(t.prototype.xw = function () {
					this.kw.ln() && this.kw.an(this.getVisibleRange());
				}),
				(t.prototype.Nw = function () {
					this.Tr.ln() && this.Tr.an(this.getVisibleLogicalRange());
				}),
				t
			);
		})();
	function fs(t) {
		if (void 0 !== t && "custom" !== t.type) {
			var i = t;
			void 0 !== i.minMove &&
				void 0 === i.precision &&
				(i.precision = (function (t) {
					if (t >= 1) return 0;
					for (var i = 0; i < 8; i++) {
						var n = Math.round(t);
						if (Math.abs(n - t) < 1e-8) return i;
						t *= 10;
					}
					return i;
				})(i.minMove));
		}
	}
	function cs(t) {
		return (
			(function (t) {
				if (M(t.handleScale)) {
					var i = t.handleScale;
					t.handleScale = {
						axisDoubleClickReset: i,
						axisPressedMouseMove: { time: i, price: i },
						mouseWheel: i,
						pinch: i,
					};
				} else if (
					void 0 !== t.handleScale &&
					M(t.handleScale.axisPressedMouseMove)
				) {
					var n = t.handleScale.axisPressedMouseMove;
					t.handleScale.axisPressedMouseMove = { time: n, price: n };
				}
				var s = t.handleScroll;
				M(s) &&
					(t.handleScroll = {
						horzTouchDrag: s,
						vertTouchDrag: s,
						mouseWheel: s,
						pressedMouseMove: s,
					});
			})(t),
			(function (t) {
				if (t.priceScale) {
					(t.leftPriceScale = t.leftPriceScale || {}),
						(t.rightPriceScale = t.rightPriceScale || {});
					var i = t.priceScale.position;
					delete t.priceScale.position,
						(t.leftPriceScale = c(t.leftPriceScale, t.priceScale)),
						(t.rightPriceScale = c(t.rightPriceScale, t.priceScale)),
						"left" === i &&
							((t.leftPriceScale.visible = !0),
							(t.rightPriceScale.visible = !1)),
						"right" === i &&
							((t.leftPriceScale.visible = !1),
							(t.rightPriceScale.visible = !0)),
						"none" === i &&
							((t.leftPriceScale.visible = !1),
							(t.rightPriceScale.visible = !1)),
						(t.overlayPriceScales = t.overlayPriceScales || {}),
						void 0 !== t.priceScale.invertScale &&
							(t.overlayPriceScales.invertScale = t.priceScale.invertScale),
						void 0 !== t.priceScale.scaleMargins &&
							(t.overlayPriceScales.scaleMargins = t.priceScale.scaleMargins);
				}
			})(t),
			t
		);
	}
	var vs = (function () {
		function t(t, i) {
			var n = this;
			(this.Sw = new Xn()),
				(this.Dw = new Map()),
				(this.Tw = new Map()),
				(this.Cw = new st()),
				(this.Ew = new st());
			var s = void 0 === i ? b(ns) : c(b(ns), cs(i));
			(this.cv = new Ln(t, s)),
				this.cv.Y_().sn(function (t) {
					n.Cw.ln() && n.Cw.an(n.Aw(t()));
				}, this),
				this.cv.Df().sn(function (t) {
					n.Ew.ln() && n.Ew.an(n.Aw(t()));
				}, this);
			var h = this.cv.ct();
			this.Lw = new ls(h);
		}
		return (
			(t.prototype.remove = function () {
				this.cv.Y_().on(this),
					this.cv.Df().on(this),
					this.Lw.fn(),
					this.cv.fn(),
					delete this.cv,
					this.Dw.forEach(function (t, i) {
						i.fn();
					}),
					this.Dw.clear(),
					this.Tw.clear(),
					this.Cw.fn(),
					this.Ew.fn(),
					this.Sw.fn(),
					delete this.Sw;
			}),
			(t.prototype.resize = function (t, i, n) {
				this.cv.Rd(t, i, n);
			}),
			(t.prototype.addAreaSeries = function (t) {
				void 0 === t && (t = {}), fs(t.priceFormat);
				var i = c(b(os), es, t),
					n = this.cv.ct().Hf("Area", i),
					s = new Qn(n, this, this);
				return this.Dw.set(s, n), this.Tw.set(n, s), s;
			}),
			(t.prototype.addBarSeries = function (t) {
				void 0 === t && (t = {}), fs(t.priceFormat);
				var i = c(b(os), hs, t),
					n = this.cv.ct().Hf("Bar", i),
					s = new Qn(n, this, this);
				return this.Dw.set(s, n), this.Tw.set(n, s), s;
			}),
			(t.prototype.addCandlestickSeries = function (t) {
				void 0 === t && (t = {}), Nt(t), fs(t.priceFormat);
				var i = c(b(os), ss, t),
					n = this.cv.ct().Hf("Candlestick", i),
					s = new ts(n, this, this);
				return this.Dw.set(s, n), this.Tw.set(n, s), s;
			}),
			(t.prototype.addHistogramSeries = function (t) {
				void 0 === t && (t = {}), fs(t.priceFormat);
				var i = c(b(os), us, t),
					n = this.cv.ct().Hf("Histogram", i),
					s = new Qn(n, this, this);
				return this.Dw.set(s, n), this.Tw.set(n, s), s;
			}),
			(t.prototype.addLineSeries = function (t) {
				void 0 === t && (t = {}), fs(t.priceFormat);
				var i = c(b(os), rs, t),
					n = this.cv.ct().Hf("Line", i),
					s = new Qn(n, this, this);
				return this.Dw.set(s, n), this.Tw.set(n, s), s;
			}),
			(t.prototype.removeSeries = function (t) {
				var i = t,
					n = a(this.Dw.get(i)),
					s = this.Sw.Kf(n),
					h = this.cv.ct();
				h.Kf(n);
				var r = s.vw;
				h.jf(r.Bi, r.dw, r.qn, !0),
					r._w.forEach(function (t, i) {
						i.il(t.B);
					}),
					h.Uf(0),
					this.Dw.delete(i),
					this.Tw.delete(n);
			}),
			(t.prototype.gw = function (t, i) {
				var n = this.Sw.uw(t, i),
					s = this.cv.ct(),
					h = n.vw;
				s.jf(h.Bi, h.dw, h.qn, !0),
					h._w.forEach(function (t, i) {
						i.il(t.B, !0);
					}),
					s.Uf(0);
			}),
			(t.prototype.il = function (t, i) {
				var n = this.Sw.lw(t, i),
					s = this.cv.ct(),
					h = n.vw;
				s.jf(h.Bi, h.dw, h.qn, !1),
					h._w.forEach(function (t, i) {
						i.il(t.B);
					}),
					s.Uf(0);
			}),
			(t.prototype.subscribeClick = function (t) {
				this.Cw.sn(t);
			}),
			(t.prototype.unsubscribeClick = function (t) {
				this.Cw.un(t);
			}),
			(t.prototype.subscribeCrosshairMove = function (t) {
				this.Ew.sn(t);
			}),
			(t.prototype.unsubscribeCrosshairMove = function (t) {
				this.Ew.un(t);
			}),
			(t.prototype.priceScale = function (t) {
				return (t = t || this.cv.ct().Xf()), new as(this.cv, t);
			}),
			(t.prototype.timeScale = function () {
				return this.Lw;
			}),
			(t.prototype.applyOptions = function (t) {
				this.cv.ms(cs(t));
			}),
			(t.prototype.options = function () {
				return this.cv.O();
			}),
			(t.prototype.takeScreenshot = function () {
				return this.cv.Hd();
			}),
			(t.prototype.Bw = function (t) {
				return a(this.Tw.get(t));
			}),
			(t.prototype.Aw = function (t) {
				var i = this,
					n = new Map();
				t.iw.forEach(function (t, s) {
					n.set(i.Bw(s), t);
				});
				var s = void 0 === t.tw ? void 0 : this.Bw(t.tw);
				return {
					time: t.P && (t.P.Rh || t.P.Wh),
					point: t.Qd,
					hoveredSeries: s,
					hoveredMarkerId: t.nw,
					seriesPrices: n,
				};
			}),
			t
		);
	})();
	var _s = Object.freeze({
		__proto__: null,
		version: function () {
			return "3.0.0";
		},
		get LineStyle() {
			return i;
		},
		get LineType() {
			return t;
		},
		get CrosshairMode() {
			return U;
		},
		get PriceScaleMode() {
			return Mt;
		},
		get PriceLineSource() {
			return gt;
		},
		get TickMarkType() {
			return Pt;
		},
		isBusinessDay: Wt,
		isUTCTimestamp: jt,
		createChart: function (t, i) {
			var n = l(d(t) ? document.getElementById(t) : t);
			return new vs(n, i);
		},
	});
	window.LightweightCharts = _s;
})();
