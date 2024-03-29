"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function () {
  var t = {
    553: function _(t) {
      var e = function (t) {
        "use strict";

        var e,
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";

        function u(t, e, r) {
          return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }), t[e];
        }

        try {
          u({}, "");
        } catch (t) {
          u = function u(t, e, r) {
            return t[e] = r;
          };
        }

        function s(t, e, r, n) {
          var o = e && e.prototype instanceof d ? e : d,
              i = Object.create(o.prototype),
              a = new k(n || []);
          return i._invoke = function (t, e, r) {
            var n = f;
            return function (o, i) {
              if (n === p) throw new Error("Generator is already running");

              if (n === y) {
                if ("throw" === o) throw i;
                return N();
              }

              for (r.method = o, r.arg = i;;) {
                var a = r.delegate;

                if (a) {
                  var c = _(a, r);

                  if (c) {
                    if (c === v) continue;
                    return c;
                  }
                }

                if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
                  if (n === f) throw n = y, r.arg;
                  r.dispatchException(r.arg);
                } else "return" === r.method && r.abrupt("return", r.arg);
                n = p;
                var u = l(t, e, r);

                if ("normal" === u.type) {
                  if (n = r.done ? y : h, u.arg === v) continue;
                  return {
                    value: u.arg,
                    done: r.done
                  };
                }

                "throw" === u.type && (n = y, r.method = "throw", r.arg = u.arg);
              }
            };
          }(t, r, a), i;
        }

        function l(t, e, r) {
          try {
            return {
              type: "normal",
              arg: t.call(e, r)
            };
          } catch (t) {
            return {
              type: "throw",
              arg: t
            };
          }
        }

        t.wrap = s;
        var f = "suspendedStart",
            h = "suspendedYield",
            p = "executing",
            y = "completed",
            v = {};

        function d() {}

        function g() {}

        function m() {}

        var w = {};
        u(w, i, function () {
          return this;
        });
        var x = Object.getPrototypeOf,
            L = x && x(x(S([])));
        L && L !== r && n.call(L, i) && (w = L);
        var b = m.prototype = d.prototype = Object.create(w);

        function E(t) {
          ["next", "throw", "return"].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }

        function P(t, e) {
          function r(o, i, a, c) {
            var u = l(t[o], t, i);

            if ("throw" !== u.type) {
              var s = u.arg,
                  f = s.value;
              return f && "object" == _typeof(f) && n.call(f, "__await") ? e.resolve(f.__await).then(function (t) {
                r("next", t, a, c);
              }, function (t) {
                r("throw", t, a, c);
              }) : e.resolve(f).then(function (t) {
                s.value = t, a(s);
              }, function (t) {
                return r("throw", t, a, c);
              });
            }

            c(u.arg);
          }

          var o;

          this._invoke = function (t, n) {
            function i() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }

            return o = o ? o.then(i, i) : i();
          };
        }

        function _(t, r) {
          var n = t.iterator[r.method];

          if (n === e) {
            if (r.delegate = null, "throw" === r.method) {
              if (t.iterator["return"] && (r.method = "return", r.arg = e, _(t, r), "throw" === r.method)) return v;
              r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return v;
          }

          var o = l(n, t.iterator, r.arg);
          if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, v;
          var i = o.arg;
          return i ? i.done ? (r[t.resultName] = i.value, r.next = t.nextLoc, "return" !== r.method && (r.method = "next", r.arg = e), r.delegate = null, v) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v);
        }

        function O(t) {
          var e = {
            tryLoc: t[0]
          };
          1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
        }

        function j(t) {
          var e = t.completion || {};
          e.type = "normal", delete e.arg, t.completion = e;
        }

        function k(t) {
          this.tryEntries = [{
            tryLoc: "root"
          }], t.forEach(O, this), this.reset(!0);
        }

        function S(t) {
          if (t) {
            var r = t[i];
            if (r) return r.call(t);
            if ("function" == typeof t.next) return t;

            if (!isNaN(t.length)) {
              var o = -1,
                  a = function r() {
                for (; ++o < t.length;) {
                  if (n.call(t, o)) return r.value = t[o], r.done = !1, r;
                }

                return r.value = e, r.done = !0, r;
              };

              return a.next = a;
            }
          }

          return {
            next: N
          };
        }

        function N() {
          return {
            value: e,
            done: !0
          };
        }

        return g.prototype = m, u(b, "constructor", m), u(m, "constructor", g), g.displayName = u(m, c, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
          var e = "function" == typeof t && t.constructor;
          return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name));
        }, t.mark = function (t) {
          return Object.setPrototypeOf ? Object.setPrototypeOf(t, m) : (t.__proto__ = m, u(t, c, "GeneratorFunction")), t.prototype = Object.create(b), t;
        }, t.awrap = function (t) {
          return {
            __await: t
          };
        }, E(P.prototype), u(P.prototype, a, function () {
          return this;
        }), t.AsyncIterator = P, t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new P(s(e, r, n, o), i);
          return t.isGeneratorFunction(r) ? a : a.next().then(function (t) {
            return t.done ? t.value : a.next();
          });
        }, E(b), u(b, c, "Generator"), u(b, i, function () {
          return this;
        }), u(b, "toString", function () {
          return "[object Generator]";
        }), t.keys = function (t) {
          var e = [];

          for (var r in t) {
            e.push(r);
          }

          return e.reverse(), function r() {
            for (; e.length;) {
              var n = e.pop();
              if (n in t) return r.value = n, r.done = !1, r;
            }

            return r.done = !0, r;
          };
        }, t.values = S, k.prototype = {
          constructor: k,
          reset: function reset(t) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(j), !t) for (var r in this) {
              "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = e);
            }
          },
          stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function dispatchException(t) {
            if (this.done) throw t;
            var r = this;

            function o(n, o) {
              return c.type = "throw", c.arg = t, r.next = n, o && (r.method = "next", r.arg = e), !!o;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                  c = a.completion;
              if ("root" === a.tryLoc) return o("end");

              if (a.tryLoc <= this.prev) {
                var u = n.call(a, "catchLoc"),
                    s = n.call(a, "finallyLoc");

                if (u && s) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (u) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!s) throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function abrupt(t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];

              if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                var i = o;
                break;
              }
            }

            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a);
          },
          complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v;
          },
          finish: function finish(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v;
            }
          },
          "catch": function _catch(t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];

              if (r.tryLoc === t) {
                var n = r.completion;

                if ("throw" === n.type) {
                  var o = n.arg;
                  j(r);
                }

                return o;
              }
            }

            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(t, r, n) {
            return this.delegate = {
              iterator: S(t),
              resultName: r,
              nextLoc: n
            }, "next" === this.method && (this.arg = e), v;
          }
        }, t;
      }(t.exports);

      try {
        regeneratorRuntime = e;
      } catch (t) {
        "object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e);
      }
    },
    757: function _(t, e, r) {
      t.exports = r(553);
    }
  },
      e = {};

  function r(n) {
    var o = e[n];
    if (void 0 !== o) return o.exports;
    var i = e[n] = {
      exports: {}
    };
    return t[n](i, i.exports, r), i.exports;
  }

  r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"];
    } : function () {
      return t;
    };
    return r.d(e, {
      a: e
    }), e;
  }, r.d = function (t, e) {
    for (var n in e) {
      r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
        enumerable: !0,
        get: e[n]
      });
    }
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  };
  var n = {};

  (function () {
    "use strict";

    function t(t, e, r, n, o, i, a) {
      try {
        var c = t[i](a),
            u = c.value;
      } catch (t) {
        return void r(t);
      }

      c.done ? e(u) : Promise.resolve(u).then(n, o);
    }

    function e(e) {
      return function () {
        var r = this,
            n = arguments;
        return new Promise(function (o, i) {
          var a = e.apply(r, n);

          function c(e) {
            t(a, o, i, c, u, "next", e);
          }

          function u(e) {
            t(a, o, i, c, u, "throw", e);
          }

          c(void 0);
        });
      };
    }

    r.d(n, {
      t5: function t5() {
        return f;
      },
      gC: function gC() {
        return s;
      },
      Ul: function Ul() {
        return l;
      }
    });
    var o = r(757),
        i = r.n(o);

    function a(t, e) {
      var r = t.split(" "),
          n = r.length;
      e.totalPages = Math.ceil(n / e.limit);
      var o = (e.currentPage - 1) * e.limit,
          i = o + e.limit;
      return r.slice(o, i).join(" ");
    }

    function c(t, e) {
      s.textContent = "", u(a(t.content, e), e, t), l.textContent = t.title;
    }

    function u(t, e, r) {
      var n;
      1 == e.currentPage ? l.classList.remove("display_none") : l.classList.add("display_none"), e.currentPage == e.totalPages ? (n = r.choices, f.innerHTML = "", n.forEach(function (t) {
        var e = document.createElement("button");
        e.textContent = t.name, e.name = t.path, f.appendChild(e);
      })) : f.innerHTML = "", s.textContent = t;
    }

    var s = document.querySelector(".texto"),
        l = document.querySelector("h1"),
        f = document.querySelector("#escolhas"),
        h = document.querySelector(".next"),
        p = document.querySelector(".prev"),
        y = "https://druiddd-test.herokuapp.com/esqueleto/";

    function v(t) {
      return d.apply(this, arguments);
    }

    function d() {
      return (d = e(i().mark(function t(e) {
        return i().wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                return t.abrupt("return", fetch("".concat(y).concat(e)).then(function (t) {
                  return t.text().then(function (t) {
                    return t;
                  });
                }));

              case 1:
              case "end":
                return t.stop();
            }
          }
        }, t);
      }))).apply(this, arguments);
    }

    function g(t) {
      return m.apply(this, arguments);
    }

    function m() {
      return (m = e(i().mark(function t(e) {
        var r, n, o;
        return i().wrap(function (t) {
          for (;;) {
            switch (t.prev = t.next) {
              case 0:
                return r = {
                  limit: 180,
                  currentPage: 1
                }, t.next = 3, v(e);

              case 3:
                n = t.sent, c(o = JSON.parse(n), r), w(), x(o, r);

              case 8:
              case "end":
                return t.stop();
            }
          }
        }, t);
      }))).apply(this, arguments);
    }

    function w() {
      document.querySelector("#escolhas").addEventListener("click", function (t) {
        g(t.target.name);
      });
    }

    g("c1cp1");

    function x(t, e) {
      p.addEventListener("click", function () {
        (function (t) {
          t.currentPage--, t.currentPage < 1 && t.currentPage++;
        })(e), u(a(t.content, e), e, t);
      }), h.addEventListener("click", function () {
        (function (t) {
          t.currentPage++, t.currentPage > t.totalPages && t.currentPage--;
        })(e), u(a(t.content, e), e, t);
      });
    }
  })();
})();