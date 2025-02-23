!(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = e(require("@popperjs/core")))
      : "function" == typeof define && define.amd
      ? define(["@popperjs/core"], e)
      : ((t =
          "undefined" != typeof globalThis
            ? globalThis
            : t || self).bootstrap = e(t.Popper));
  })(this, function (t) {
    "use strict";
    function e(t) {
      if (t && t.__esModule) return t;
      var e = Object.create(null);
      return (
        t &&
          Object.keys(t).forEach(function (n) {
            if ("default" !== n) {
              var i = Object.getOwnPropertyDescriptor(t, n);
              Object.defineProperty(
                e,
                n,
                i.get
                  ? i
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      }
                    }
              );
            }
          }),
        (e.default = t),
        Object.freeze(e)
      );
    }
    var n = e(t);
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    function o(t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    }
    function s() {
      return (s =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }).apply(this, arguments);
    }
    function r(t, e) {
      (t.prototype = Object.create(e.prototype)),
        (t.prototype.constructor = t),
        (t.__proto__ = e);
    }
    var a,
      l,
      c = function (t) {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      },
      u = function (t) {
        var e = t.getAttribute("data-bs-target");
        if (!e || "#" === e) {
          var n = t.getAttribute("href");
          e = n && "#" !== n ? n.trim() : null;
        }
        return e;
      },
      d = function (t) {
        var e = u(t);
        return e && document.querySelector(e) ? e : null;
      },
      f = function (t) {
        var e = u(t);
        return e ? document.querySelector(e) : null;
      },
      h = function (t) {
        if (!t) return 0;
        var e = window.getComputedStyle(t),
          n = e.transitionDuration,
          i = e.transitionDelay,
          o = Number.parseFloat(n),
          s = Number.parseFloat(i);
        return o || s
          ? ((n = n.split(",")[0]),
            (i = i.split(",")[0]),
            1e3 * (Number.parseFloat(n) + Number.parseFloat(i)))
          : 0;
      },
      p = function (t) {
        t.dispatchEvent(new Event("transitionend"));
      },
      g = function (t) {
        return (t[0] || t).nodeType;
      },
      m = function (t, e) {
        var n = !1,
          i = e + 5;
        t.addEventListener("transitionend", function e() {
          (n = !0), t.removeEventListener("transitionend", e);
        }),
          setTimeout(function () {
            n || p(t);
          }, i);
      },
      _ = function (t, e, n) {
        Object.keys(n).forEach(function (i) {
          var o,
            s = n[i],
            r = e[i],
            a =
              r && g(r)
                ? "element"
                : null == (o = r)
                ? "" + o
                : {}.toString
                    .call(o)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(s).test(a))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                a +
                '" but expected type "' +
                s +
                '".'
            );
        });
      },
      v = function (t) {
        if (!t) return !1;
        if (t.style && t.parentNode && t.parentNode.style) {
          var e = getComputedStyle(t),
            n = getComputedStyle(t.parentNode);
          return (
            "none" !== e.display &&
            "none" !== n.display &&
            "hidden" !== e.visibility
          );
        }
        return !1;
      },
      b = function () {
        return function () {};
      },
      y = function (t) {
        return t.offsetHeight;
      },
      w = function () {
        var t = window.jQuery;
        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
      },
      E = function (t) {
        "loading" === document.readyState
          ? document.addEventListener("DOMContentLoaded", t)
          : t();
      },
      T = "rtl" === document.documentElement.dir,
      k =
        ((a = {}),
        (l = 1),
        {
          set: function (t, e, n) {
            void 0 === t.bsKey && ((t.bsKey = { key: e, id: l }), l++),
              (a[t.bsKey.id] = n);
          },
          get: function (t, e) {
            if (!t || void 0 === t.bsKey) return null;
            var n = t.bsKey;
            return n.key === e ? a[n.id] : null;
          },
          delete: function (t, e) {
            if (void 0 !== t.bsKey) {
              var n = t.bsKey;
              n.key === e && (delete a[n.id], delete t.bsKey);
            }
          }
        }),
      A = function (t, e, n) {
        k.set(t, e, n);
      },
      L = function (t, e) {
        return k.get(t, e);
      },
      C = function (t, e) {
        k.delete(t, e);
      },
      D = /[^.]*(?=\..*)\.|.*/,
      S = /\..*/,
      N = /::\d+$/,
      O = {},
      I = 1,
      j = { mouseenter: "mouseover", mouseleave: "mouseout" },
      P = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll"
      ]);
    function x(t, e) {
      return (e && e + "::" + I++) || t.uidEvent || I++;
    }
    function H(t) {
      var e = x(t);
      return (t.uidEvent = e), (O[e] = O[e] || {}), O[e];
    }
    function B(t, e, n) {
      void 0 === n && (n = null);
      for (var i = Object.keys(t), o = 0, s = i.length; o < s; o++) {
        var r = t[i[o]];
        if (r.originalHandler === e && r.delegationSelector === n) return r;
      }
      return null;
    }
    function M(t, e, n) {
      var i = "string" == typeof e,
        o = i ? n : e,
        s = t.replace(S, ""),
        r = j[s];
      return r && (s = r), P.has(s) || (s = t), [i, o, s];
    }
    function R(t, e, n, i, o) {
      if ("string" == typeof e && t) {
        n || ((n = i), (i = null));
        var s = M(e, n, i),
          r = s[0],
          a = s[1],
          l = s[2],
          c = H(t),
          u = c[l] || (c[l] = {}),
          d = B(u, a, r ? n : null);
        if (d) d.oneOff = d.oneOff && o;
        else {
          var f = x(a, e.replace(D, "")),
            h = r
              ? (function (t, e, n) {
                  return function i(o) {
                    for (
                      var s = t.querySelectorAll(e), r = o.target;
                      r && r !== this;
                      r = r.parentNode
                    )
                      for (var a = s.length; a--; )
                        if (s[a] === r)
                          return (
                            (o.delegateTarget = r),
                            i.oneOff && Q.off(t, o.type, n),
                            n.apply(r, [o])
                          );
                    return null;
                  };
                })(t, n, i)
              : (function (t, e) {
                  return function n(i) {
                    return (
                      (i.delegateTarget = t),
                      n.oneOff && Q.off(t, i.type, e),
                      e.apply(t, [i])
                    );
                  };
                })(t, n);
          (h.delegationSelector = r ? n : null),
            (h.originalHandler = a),
            (h.oneOff = o),
            (h.uidEvent = f),
            (u[f] = h),
            t.addEventListener(l, h, r);
        }
      }
    }
    function K(t, e, n, i, o) {
      var s = B(e[n], i, o);
      s && (t.removeEventListener(n, s, Boolean(o)), delete e[n][s.uidEvent]);
    }
    var Q = {
        on: function (t, e, n, i) {
          R(t, e, n, i, !1);
        },
        one: function (t, e, n, i) {
          R(t, e, n, i, !0);
        },
        off: function (t, e, n, i) {
          if ("string" == typeof e && t) {
            var o = M(e, n, i),
              s = o[0],
              r = o[1],
              a = o[2],
              l = a !== e,
              c = H(t),
              u = e.startsWith(".");
            if (void 0 === r) {
              u &&
                Object.keys(c).forEach(function (n) {
                  !(function (t, e, n, i) {
                    var o = e[n] || {};
                    Object.keys(o).forEach(function (s) {
                      if (s.includes(i)) {
                        var r = o[s];
                        K(t, e, n, r.originalHandler, r.delegationSelector);
                      }
                    });
                  })(t, c, n, e.slice(1));
                });
              var d = c[a] || {};
              Object.keys(d).forEach(function (n) {
                var i = n.replace(N, "");
                if (!l || e.includes(i)) {
                  var o = d[n];
                  K(t, c, a, o.originalHandler, o.delegationSelector);
                }
              });
            } else {
              if (!c || !c[a]) return;
              K(t, c, a, r, s ? n : null);
            }
          }
        },
        trigger: function (t, e, n) {
          if ("string" != typeof e || !t) return null;
          var i,
            o = w(),
            s = e.replace(S, ""),
            r = e !== s,
            a = P.has(s),
            l = !0,
            c = !0,
            u = !1,
            d = null;
          return (
            r &&
              o &&
              ((i = o.Event(e, n)),
              o(t).trigger(i),
              (l = !i.isPropagationStopped()),
              (c = !i.isImmediatePropagationStopped()),
              (u = i.isDefaultPrevented())),
            a
              ? (d = document.createEvent("HTMLEvents")).initEvent(s, l, !0)
              : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
            void 0 !== n &&
              Object.keys(n).forEach(function (t) {
                Object.defineProperty(d, t, {
                  get: function () {
                    return n[t];
                  }
                });
              }),
            u && d.preventDefault(),
            c && t.dispatchEvent(d),
            d.defaultPrevented && void 0 !== i && i.preventDefault(),
            d
          );
        }
      },
      U = (function () {
        function t(t) {
          t && ((this._element = t), A(t, this.constructor.DATA_KEY, this));
        }
        return (
          (t.prototype.dispose = function () {
            C(this._element, this.constructor.DATA_KEY), (this._element = null);
          }),
          (t.getInstance = function (t) {
            return L(t, this.DATA_KEY);
          }),
          o(t, null, [
            {
              key: "VERSION",
              get: function () {
                return "5.0.0-beta1";
              }
            }
          ]),
          t
        );
      })(),
      W = "alert",
      F = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        r(e, t);
        var n = e.prototype;
        return (
          (n.close = function (t) {
            var e = t ? this._getRootElement(t) : this._element,
              n = this._triggerCloseEvent(e);
            null === n || n.defaultPrevented || this._removeElement(e);
          }),
          (n._getRootElement = function (t) {
            return f(t) || t.closest(".alert");
          }),
          (n._triggerCloseEvent = function (t) {
            return Q.trigger(t, "close.bs.alert");
          }),
          (n._removeElement = function (t) {
            var e = this;
            if ((t.classList.remove("show"), t.classList.contains("fade"))) {
              var n = h(t);
              Q.one(t, "transitionend", function () {
                return e._destroyElement(t);
              }),
                m(t, n);
            } else this._destroyElement(t);
          }),
          (n._destroyElement = function (t) {
            t.parentNode && t.parentNode.removeChild(t),
              Q.trigger(t, "closed.bs.alert");
          }),
          (e.jQueryInterface = function (t) {
            return this.each(function () {
              var n = L(this, "bs.alert");
              n || (n = new e(this)), "close" === t && n[t](this);
            });
          }),
          (e.handleDismiss = function (t) {
            return function (e) {
              e && e.preventDefault(), t.close(this);
            };
          }),
          o(e, null, [
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.alert";
              }
            }
          ]),
          e
        );
      })(U);
    Q.on(
      document,
      "click.bs.alert.data-api",
      '[data-bs-dismiss="alert"]',
      F.handleDismiss(new F())
    ),
      E(function () {
        var t = w();
        if (t) {
          var e = t.fn[W];
          (t.fn[W] = F.jQueryInterface),
            (t.fn[W].Constructor = F),
            (t.fn[W].noConflict = function () {
              return (t.fn[W] = e), F.jQueryInterface;
            });
        }
      });
    var Y = (function (t) {
      function e() {
        return t.apply(this, arguments) || this;
      }
      return (
        r(e, t),
        (e.prototype.toggle = function () {
          this._element.setAttribute(
            "aria-pressed",
            this._element.classList.toggle("active")
          );
        }),
        (e.jQueryInterface = function (t) {
          return this.each(function () {
            var n = L(this, "bs.button");
            n || (n = new e(this)), "toggle" === t && n[t]();
          });
        }),
        o(e, null, [
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.button";
            }
          }
        ]),
        e
      );
    })(U);
    function z(t) {
      return (
        "true" === t ||
        ("false" !== t &&
          (t === Number(t).toString()
            ? Number(t)
            : "" === t || "null" === t
            ? null
            : t))
      );
    }
    function X(t) {
      return t.replace(/[A-Z]/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    Q.on(
      document,
      "click.bs.button.data-api",
      '[data-bs-toggle="button"]',
      function (t) {
        t.preventDefault();
        var e = t.target.closest('[data-bs-toggle="button"]'),
          n = L(e, "bs.button");
        n || (n = new Y(e)), n.toggle();
      }
    ),
      E(function () {
        var t = w();
        if (t) {
          var e = t.fn.button;
          (t.fn.button = Y.jQueryInterface),
            (t.fn.button.Constructor = Y),
            (t.fn.button.noConflict = function () {
              return (t.fn.button = e), Y.jQueryInterface;
            });
        }
      });
    var q = {
        setDataAttribute: function (t, e, n) {
          t.setAttribute("data-bs-" + X(e), n);
        },
        removeDataAttribute: function (t, e) {
          t.removeAttribute("data-bs-" + X(e));
        },
        getDataAttributes: function (t) {
          if (!t) return {};
          var e = {};
          return (
            Object.keys(t.dataset)
              .filter(function (t) {
                return t.startsWith("bs");
              })
              .forEach(function (n) {
                var i = n.replace(/^bs/, "");
                (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
                  (e[i] = z(t.dataset[n]));
              }),
            e
          );
        },
        getDataAttribute: function (t, e) {
          return z(t.getAttribute("data-bs-" + X(e)));
        },
        offset: function (t) {
          var e = t.getBoundingClientRect();
          return {
            top: e.top + document.body.scrollTop,
            left: e.left + document.body.scrollLeft
          };
        },
        position: function (t) {
          return { top: t.offsetTop, left: t.offsetLeft };
        }
      },
      V = {
        matches: function (t, e) {
          return t.matches(e);
        },
        find: function (t, e) {
          var n;
          return (
            void 0 === e && (e = document.documentElement),
            (n = []).concat.apply(
              n,
              Element.prototype.querySelectorAll.call(e, t)
            )
          );
        },
        findOne: function (t, e) {
          return (
            void 0 === e && (e = document.documentElement),
            Element.prototype.querySelector.call(e, t)
          );
        },
        children: function (t, e) {
          var n,
            i = (n = []).concat.apply(n, t.children);
          return i.filter(function (t) {
            return t.matches(e);
          });
        },
        parents: function (t, e) {
          for (
            var n = [], i = t.parentNode;
            i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;
  
          )
            this.matches(i, e) && n.push(i), (i = i.parentNode);
          return n;
        },
        prev: function (t, e) {
          for (var n = t.previousElementSibling; n; ) {
            if (n.matches(e)) return [n];
            n = n.previousElementSibling;
          }
          return [];
        },
        next: function (t, e) {
          for (var n = t.nextElementSibling; n; ) {
            if (this.matches(n, e)) return [n];
            n = n.nextElementSibling;
          }
          return [];
        }
      },
      $ = "carousel",
      G = ".bs.carousel",
      Z = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: "hover",
        wrap: !0,
        touch: !0
      },
      J = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        slide: "(boolean|string)",
        pause: "(string|boolean)",
        wrap: "boolean",
        touch: "boolean"
      },
      tt = { TOUCH: "touch", PEN: "pen" },
      et = (function (t) {
        function e(e, n) {
          var i;
          return (
            ((i = t.call(this, e) || this)._items = null),
            (i._interval = null),
            (i._activeElement = null),
            (i._isPaused = !1),
            (i._isSliding = !1),
            (i.touchTimeout = null),
            (i.touchStartX = 0),
            (i.touchDeltaX = 0),
            (i._config = i._getConfig(n)),
            (i._indicatorsElement = V.findOne(
              ".carousel-indicators",
              i._element
            )),
            (i._touchSupported =
              "ontouchstart" in document.documentElement ||
              navigator.maxTouchPoints > 0),
            (i._pointerEvent = Boolean(window.PointerEvent)),
            i._addEventListeners(),
            i
          );
        }
        r(e, t);
        var n = e.prototype;
        return (
          (n.next = function () {
            this._isSliding || this._slide("next");
          }),
          (n.nextWhenVisible = function () {
            !document.hidden && v(this._element) && this.next();
          }),
          (n.prev = function () {
            this._isSliding || this._slide("prev");
          }),
          (n.pause = function (t) {
            t || (this._isPaused = !0),
              V.findOne(
                ".carousel-item-next, .carousel-item-prev",
                this._element
              ) && (p(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null);
          }),
          (n.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config &&
                this._config.interval &&
                !this._isPaused &&
                (this._updateInterval(),
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                )));
          }),
          (n.to = function (t) {
            var e = this;
            this._activeElement = V.findOne(
              ".active.carousel-item",
              this._element
            );
            var n = this._getItemIndex(this._activeElement);
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                Q.one(this._element, "slid.bs.carousel", function () {
                  return e.to(t);
                });
              else {
                if (n === t) return this.pause(), void this.cycle();
                var i = t > n ? "next" : "prev";
                this._slide(i, this._items[t]);
              }
          }),
          (n.dispose = function () {
            t.prototype.dispose.call(this),
              Q.off(this._element, G),
              (this._items = null),
              (this._config = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null);
          }),
          (n._getConfig = function (t) {
            return (t = s({}, Z, t)), _($, t, J), t;
          }),
          (n._handleSwipe = function () {
            var t = Math.abs(this.touchDeltaX);
            if (!(t <= 40)) {
              var e = t / this.touchDeltaX;
              (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
            }
          }),
          (n._addEventListeners = function () {
            var t = this;
            this._config.keyboard &&
              Q.on(this._element, "keydown.bs.carousel", function (e) {
                return t._keydown(e);
              }),
              "hover" === this._config.pause &&
                (Q.on(this._element, "mouseenter.bs.carousel", function (e) {
                  return t.pause(e);
                }),
                Q.on(this._element, "mouseleave.bs.carousel", function (e) {
                  return t.cycle(e);
                })),
              this._config.touch &&
                this._touchSupported &&
                this._addTouchEventListeners();
          }),
          (n._addTouchEventListeners = function () {
            var t = this,
              e = function (e) {
                t._pointerEvent && tt[e.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.clientX)
                  : t._pointerEvent || (t.touchStartX = e.touches[0].clientX);
              },
              n = function (e) {
                t._pointerEvent &&
                  tt[e.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.clientX - t.touchStartX),
                  t._handleSwipe(),
                  "hover" === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            V.find(".carousel-item img", this._element).forEach(function (t) {
              Q.on(t, "dragstart.bs.carousel", function (t) {
                return t.preventDefault();
              });
            }),
              this._pointerEvent
                ? (Q.on(this._element, "pointerdown.bs.carousel", function (t) {
                    return e(t);
                  }),
                  Q.on(this._element, "pointerup.bs.carousel", function (t) {
                    return n(t);
                  }),
                  this._element.classList.add("pointer-event"))
                : (Q.on(this._element, "touchstart.bs.carousel", function (t) {
                    return e(t);
                  }),
                  Q.on(this._element, "touchmove.bs.carousel", function (e) {
                    return (function (e) {
                      e.touches && e.touches.length > 1
                        ? (t.touchDeltaX = 0)
                        : (t.touchDeltaX = e.touches[0].clientX - t.touchStartX);
                    })(e);
                  }),
                  Q.on(this._element, "touchend.bs.carousel", function (t) {
                    return n(t);
                  }));
          }),
          (n._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.key) {
                case "ArrowLeft":
                  t.preventDefault(), this.prev();
                  break;
                case "ArrowRight":
                  t.preventDefault(), this.next();
              }
          }),
          (n._getItemIndex = function (t) {
            return (
              (this._items =
                t && t.parentNode ? V.find(".carousel-item", t.parentNode) : []),
              this._items.indexOf(t)
            );
          }),
          (n._getItemByDirection = function (t, e) {
            var n = "next" === t,
              i = "prev" === t,
              o = this._getItemIndex(e),
              s = this._items.length - 1;
            if (((i && 0 === o) || (n && o === s)) && !this._config.wrap)
              return e;
            var r = (o + ("prev" === t ? -1 : 1)) % this._items.length;
            return -1 === r
              ? this._items[this._items.length - 1]
              : this._items[r];
          }),
          (n._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(
                V.findOne(".active.carousel-item", this._element)
              );
            return Q.trigger(this._element, "slide.bs.carousel", {
              relatedTarget: t,
              direction: e,
              from: i,
              to: n
            });
          }),
          (n._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              for (
                var e = V.find(".active", this._indicatorsElement), n = 0;
                n < e.length;
                n++
              )
                e[n].classList.remove("active");
              var i = this._indicatorsElement.children[this._getItemIndex(t)];
              i && i.classList.add("active");
            }
          }),
          (n._updateInterval = function () {
            var t =
              this._activeElement ||
              V.findOne(".active.carousel-item", this._element);
            if (t) {
              var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
              e
                ? ((this._config.defaultInterval =
                    this._config.defaultInterval || this._config.interval),
                  (this._config.interval = e))
                : (this._config.interval =
                    this._config.defaultInterval || this._config.interval);
            }
          }),
          (n._slide = function (t, e) {
            var n,
              i,
              o,
              s = this,
              r = V.findOne(".active.carousel-item", this._element),
              a = this._getItemIndex(r),
              l = e || (r && this._getItemByDirection(t, r)),
              c = this._getItemIndex(l),
              u = Boolean(this._interval);
            if (
              ("next" === t
                ? ((n = "carousel-item-start"),
                  (i = "carousel-item-next"),
                  (o = "left"))
                : ((n = "carousel-item-end"),
                  (i = "carousel-item-prev"),
                  (o = "right")),
              l && l.classList.contains("active"))
            )
              this._isSliding = !1;
            else if (!this._triggerSlideEvent(l, o).defaultPrevented && r && l) {
              if (
                ((this._isSliding = !0),
                u && this.pause(),
                this._setActiveIndicatorElement(l),
                (this._activeElement = l),
                this._element.classList.contains("slide"))
              ) {
                l.classList.add(i), y(l), r.classList.add(n), l.classList.add(n);
                var d = h(r);
                Q.one(r, "transitionend", function () {
                  l.classList.remove(n, i),
                    l.classList.add("active"),
                    r.classList.remove("active", i, n),
                    (s._isSliding = !1),
                    setTimeout(function () {
                      Q.trigger(s._element, "slid.bs.carousel", {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                      });
                    }, 0);
                }),
                  m(r, d);
              } else
                r.classList.remove("active"),
                  l.classList.add("active"),
                  (this._isSliding = !1),
                  Q.trigger(this._element, "slid.bs.carousel", {
                    relatedTarget: l,
                    direction: o,
                    from: a,
                    to: c
                  });
              u && this.cycle();
            }
          }),
          (e.carouselInterface = function (t, n) {
            var i = L(t, "bs.carousel"),
              o = s({}, Z, q.getDataAttributes(t));
            "object" == typeof n && (o = s({}, o, n));
            var r = "string" == typeof n ? n : o.slide;
            if ((i || (i = new e(t, o)), "number" == typeof n)) i.to(n);
            else if ("string" == typeof r) {
              if (void 0 === i[r])
                throw new TypeError('No method named "' + r + '"');
              i[r]();
            } else o.interval && o.ride && (i.pause(), i.cycle());
          }),
          (e.jQueryInterface = function (t) {
            return this.each(function () {
              e.carouselInterface(this, t);
            });
          }),
          (e.dataApiClickHandler = function (t) {
            var n = f(this);
            if (n && n.classList.contains("carousel")) {
              var i = s({}, q.getDataAttributes(n), q.getDataAttributes(this)),
                o = this.getAttribute("data-bs-slide-to");
              o && (i.interval = !1),
                e.carouselInterface(n, i),
                o && L(n, "bs.carousel").to(o),
                t.preventDefault();
            }
          }),
          o(e, null, [
            {
              key: "Default",
              get: function () {
                return Z;
              }
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.carousel";
              }
            }
          ]),
          e
        );
      })(U);
    Q.on(
      document,
      "click.bs.carousel.data-api",
      "[data-bs-slide], [data-bs-slide-to]",
      et.dataApiClickHandler
    ),
      Q.on(window, "load.bs.carousel.data-api", function () {
        for (
          var t = V.find('[data-bs-ride="carousel"]'), e = 0, n = t.length;
          e < n;
          e++
        )
          et.carouselInterface(t[e], L(t[e], "bs.carousel"));
      }),
      E(function () {
        var t = w();
        if (t) {
          var e = t.fn[$];
          (t.fn[$] = et.jQueryInterface),
            (t.fn[$].Constructor = et),
            (t.fn[$].noConflict = function () {
              return (t.fn[$] = e), et.jQueryInterface;
            });
        }
      });
    var nt = "collapse",
      it = { toggle: !0, parent: "" },
      ot = { toggle: "boolean", parent: "(string|element)" },
      st = (function (t) {
        function e(e, n) {
          var i;
          ((i = t.call(this, e) || this)._isTransitioning = !1),
            (i._config = i._getConfig(n)),
            (i._triggerArray = V.find(
              '[data-bs-toggle="collapse"][href="#' +
                e.id +
                '"],[data-bs-toggle="collapse"][data-bs-target="#' +
                e.id +
                '"]'
            ));
          for (
            var o = V.find('[data-bs-toggle="collapse"]'), s = 0, r = o.length;
            s < r;
            s++
          ) {
            var a = o[s],
              l = d(a),
              c = V.find(l).filter(function (t) {
                return t === e;
              });
            null !== l &&
              c.length &&
              ((i._selector = l), i._triggerArray.push(a));
          }
          return (
            (i._parent = i._config.parent ? i._getParent() : null),
            i._config.parent ||
              i._addAriaAndCollapsedClass(i._element, i._triggerArray),
            i._config.toggle && i.toggle(),
            i
          );
        }
        r(e, t);
        var n = e.prototype;
        return (
          (n.toggle = function () {
            this._element.classList.contains("show") ? this.hide() : this.show();
          }),
          (n.show = function () {
            var t = this;
            if (
              !this._isTransitioning &&
              !this._element.classList.contains("show")
            ) {
              var n, i;
              this._parent &&
                0 ===
                  (n = V.find(".show, .collapsing", this._parent).filter(
                    function (e) {
                      return "string" == typeof t._config.parent
                        ? e.getAttribute("data-bs-parent") === t._config.parent
                        : e.classList.contains("collapse");
                    }
                  )).length &&
                (n = null);
              var o = V.findOne(this._selector);
              if (n) {
                var s = n.find(function (t) {
                  return o !== t;
                });
                if ((i = s ? L(s, "bs.collapse") : null) && i._isTransitioning)
                  return;
              }
              if (
                !Q.trigger(this._element, "show.bs.collapse").defaultPrevented
              ) {
                n &&
                  n.forEach(function (t) {
                    o !== t && e.collapseInterface(t, "hide"),
                      i || A(t, "bs.collapse", null);
                  });
                var r = this._getDimension();
                this._element.classList.remove("collapse"),
                  this._element.classList.add("collapsing"),
                  (this._element.style[r] = 0),
                  this._triggerArray.length &&
                    this._triggerArray.forEach(function (t) {
                      t.classList.remove("collapsed"),
                        t.setAttribute("aria-expanded", !0);
                    }),
                  this.setTransitioning(!0);
                var a = "scroll" + (r[0].toUpperCase() + r.slice(1)),
                  l = h(this._element);
                Q.one(this._element, "transitionend", function () {
                  t._element.classList.remove("collapsing"),
                    t._element.classList.add("collapse", "show"),
                    (t._element.style[r] = ""),
                    t.setTransitioning(!1),
                    Q.trigger(t._element, "shown.bs.collapse");
                }),
                  m(this._element, l),
                  (this._element.style[r] = this._element[a] + "px");
              }
            }
          }),
          (n.hide = function () {
            var t = this;
            if (
              !this._isTransitioning &&
              this._element.classList.contains("show") &&
              !Q.trigger(this._element, "hide.bs.collapse").defaultPrevented
            ) {
              var e = this._getDimension();
              (this._element.style[e] =
                this._element.getBoundingClientRect()[e] + "px"),
                y(this._element),
                this._element.classList.add("collapsing"),
                this._element.classList.remove("collapse", "show");
              var n = this._triggerArray.length;
              if (n > 0)
                for (var i = 0; i < n; i++) {
                  var o = this._triggerArray[i],
                    s = f(o);
                  s &&
                    !s.classList.contains("show") &&
                    (o.classList.add("collapsed"),
                    o.setAttribute("aria-expanded", !1));
                }
              this.setTransitioning(!0);
              this._element.style[e] = "";
              var r = h(this._element);
              Q.one(this._element, "transitionend", function () {
                t.setTransitioning(!1),
                  t._element.classList.remove("collapsing"),
                  t._element.classList.add("collapse"),
                  Q.trigger(t._element, "hidden.bs.collapse");
              }),
                m(this._element, r);
            }
          }),
          (n.setTransitioning = function (t) {
            this._isTransitioning = t;
          }),
          (n.dispose = function () {
            t.prototype.dispose.call(this),
              (this._config = null),
              (this._parent = null),
              (this._triggerArray = null),
              (this._isTransitioning = null);
          }),
          (n._getConfig = function (t) {
            return (
              ((t = s({}, it, t)).toggle = Boolean(t.toggle)), _(nt, t, ot), t
            );
          }),
          (n._getDimension = function () {
            return this._element.classList.contains("width") ? "width" : "height";
          }),
          (n._getParent = function () {
            var t = this,
              e = this._config.parent;
            g(e)
              ? (void 0 === e.jquery && void 0 === e[0]) || (e = e[0])
              : (e = V.findOne(e));
            var n = '[data-bs-toggle="collapse"][data-bs-parent="' + e + '"]';
            return (
              V.find(n, e).forEach(function (e) {
                var n = f(e);
                t._addAriaAndCollapsedClass(n, [e]);
              }),
              e
            );
          }),
          (n._addAriaAndCollapsedClass = function (t, e) {
            if (t && e.length) {
              var n = t.classList.contains("show");
              e.forEach(function (t) {
                n
                  ? t.classList.remove("collapsed")
                  : t.classList.add("collapsed"),
                  t.setAttribute("aria-expanded", n);
              });
            }
          }),
          (e.collapseInterface = function (t, n) {
            var i = L(t, "bs.collapse"),
              o = s(
                {},
                it,
                q.getDataAttributes(t),
                "object" == typeof n && n ? n : {}
              );
            if (
              (!i &&
                o.toggle &&
                "string" == typeof n &&
                /show|hide/.test(n) &&
                (o.toggle = !1),
              i || (i = new e(t, o)),
              "string" == typeof n)
            ) {
              if (void 0 === i[n])
                throw new TypeError('No method named "' + n + '"');
              i[n]();
            }
          }),
          (e.jQueryInterface = function (t) {
            return this.each(function () {
              e.collapseInterface(this, t);
            });
          }),
          o(e, null, [
            {
              key: "Default",
              get: function () {
                return it;
              }
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.collapse";
              }
            }
          ]),
          e
        );
      })(U);
    Q.on(
      document,
      "click.bs.collapse.data-api",
      '[data-bs-toggle="collapse"]',
      function (t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = q.getDataAttributes(this),
          n = d(this);
        V.find(n).forEach(function (t) {
          var n,
            i = L(t, "bs.collapse");
          i
            ? (null === i._parent &&
                "string" == typeof e.parent &&
                ((i._config.parent = e.parent), (i._parent = i._getParent())),
              (n = "toggle"))
            : (n = e),
            st.collapseInterface(t, n);
        });
      }
    ),
      E(function () {
        var t = w();
        if (t) {
          var e = t.fn[nt];
          (t.fn[nt] = st.jQueryInterface),
            (t.fn[nt].Constructor = st),
            (t.fn[nt].noConflict = function () {
              return (t.fn[nt] = e), st.jQueryInterface;
            });
        }
      });
    var rt = "dropdown",
      at = new RegExp("ArrowUp|ArrowDown|Escape"),
      lt = T ? "top-end" : "top-start",
      ct = T ? "top-start" : "top-end",
      ut = T ? "bottom-end" : "bottom-start",
      dt = T ? "bottom-start" : "bottom-end",
      ft = T ? "left-start" : "right-start",
      ht = T ? "right-start" : "left-start",
      pt = {
        offset: 0,
        flip: !0,
        boundary: "clippingParents",
        reference: "toggle",
        display: "dynamic",
        popperConfig: null
      },
      gt = {
        offset: "(number|string|function)",
        flip: "boolean",
        boundary: "(string|element)",
        reference: "(string|element)",
        display: "string",
        popperConfig: "(null|object)"
      },
      mt = (function (e) {
        function i(t, n) {
          var i;
          return (
            ((i = e.call(this, t) || this)._popper = null),
            (i._config = i._getConfig(n)),
            (i._menu = i._getMenuElement()),
            (i._inNavbar = i._detectNavbar()),
            i._addEventListeners(),
            i
          );
        }
        r(i, e);
        var a = i.prototype;
        return (
          (a.toggle = function () {
            if (
              !this._element.disabled &&
              !this._element.classList.contains("disabled")
            ) {
              var t = this._element.classList.contains("show");
              i.clearMenus(), t || this.show();
            }
          }),
          (a.show = function () {
            if (
              !(
                this._element.disabled ||
                this._element.classList.contains("disabled") ||
                this._menu.classList.contains("show")
              )
            ) {
              var e = i.getParentFromElement(this._element),
                o = { relatedTarget: this._element };
              if (
                !Q.trigger(this._element, "show.bs.dropdown", o).defaultPrevented
              ) {
                if (!this._inNavbar) {
                  if (void 0 === n)
                    throw new TypeError(
                      "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                    );
                  var s = this._element;
                  "parent" === this._config.reference
                    ? (s = e)
                    : g(this._config.reference) &&
                      ((s = this._config.reference),
                      void 0 !== this._config.reference.jquery &&
                        (s = this._config.reference[0])),
                    (this._popper = t.createPopper(
                      s,
                      this._menu,
                      this._getPopperConfig()
                    ));
                }
                var r;
                if (
                  "ontouchstart" in document.documentElement &&
                  !e.closest(".navbar-nav")
                )
                  (r = []).concat
                    .apply(r, document.body.children)
                    .forEach(function (t) {
                      return Q.on(t, "mouseover", null, function () {});
                    });
                this._element.focus(),
                  this._element.setAttribute("aria-expanded", !0),
                  this._menu.classList.toggle("show"),
                  this._element.classList.toggle("show"),
                  Q.trigger(e, "shown.bs.dropdown", o);
              }
            }
          }),
          (a.hide = function () {
            if (
              !this._element.disabled &&
              !this._element.classList.contains("disabled") &&
              this._menu.classList.contains("show")
            ) {
              var t = i.getParentFromElement(this._element),
                e = { relatedTarget: this._element };
              Q.trigger(t, "hide.bs.dropdown", e).defaultPrevented ||
                (this._popper && this._popper.destroy(),
                this._menu.classList.toggle("show"),
                this._element.classList.toggle("show"),
                Q.trigger(t, "hidden.bs.dropdown", e));
            }
          }),
          (a.dispose = function () {
            e.prototype.dispose.call(this),
              Q.off(this._element, ".bs.dropdown"),
              (this._menu = null),
              this._popper && (this._popper.destroy(), (this._popper = null));
          }),
          (a.update = function () {
            (this._inNavbar = this._detectNavbar()),
              this._popper && this._popper.update();
          }),
          (a._addEventListeners = function () {
            var t = this;
            Q.on(this._element, "click.bs.dropdown", function (e) {
              e.preventDefault(), e.stopPropagation(), t.toggle();
            });
          }),
          (a._getConfig = function (t) {
            return (
              (t = s(
                {},
                this.constructor.Default,
                q.getDataAttributes(this._element),
                t
              )),
              _(rt, t, this.constructor.DefaultType),
              t
            );
          }),
          (a._getMenuElement = function () {
            return V.next(this._element, ".dropdown-menu")[0];
          }),
          (a._getPlacement = function () {
            var t = this._element.parentNode;
            if (t.classList.contains("dropend")) return ft;
            if (t.classList.contains("dropstart")) return ht;
            var e =
              "end" ===
              getComputedStyle(this._menu)
                .getPropertyValue("--bs-position")
                .trim();
            return t.classList.contains("dropup") ? (e ? ct : lt) : e ? dt : ut;
          }),
          (a._detectNavbar = function () {
            return null !== this._element.closest(".navbar");
          }),
          (a._getPopperConfig = function () {
            var t = {
              placement: this._getPlacement(),
              modifiers: [
                {
                  name: "preventOverflow",
                  options: {
                    altBoundary: this._config.flip,
                    rootBoundary: this._config.boundary
                  }
                }
              ]
            };
            return (
              "static" === this._config.display &&
                (t.modifiers = [{ name: "applyStyles", enabled: !1 }]),
              s({}, t, this._config.popperConfig)
            );
          }),
          (i.dropdownInterface = function (t, e) {
            var n = L(t, "bs.dropdown");
            if (
              (n || (n = new i(t, "object" == typeof e ? e : null)),
              "string" == typeof e)
            ) {
              if (void 0 === n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          }),
          (i.jQueryInterface = function (t) {
            return this.each(function () {
              i.dropdownInterface(this, t);
            });
          }),
          (i.clearMenus = function (t) {
            if (!t || (2 !== t.button && ("keyup" !== t.type || "Tab" === t.key)))
              for (
                var e = V.find('[data-bs-toggle="dropdown"]'),
                  n = 0,
                  o = e.length;
                n < o;
                n++
              ) {
                var s = i.getParentFromElement(e[n]),
                  r = L(e[n], "bs.dropdown"),
                  a = { relatedTarget: e[n] };
                if ((t && "click" === t.type && (a.clickEvent = t), r)) {
                  var l = r._menu;
                  if (e[n].classList.contains("show"))
                    if (
                      !(
                        t &&
                        (("click" === t.type &&
                          /input|textarea/i.test(t.target.tagName)) ||
                          ("keyup" === t.type && "Tab" === t.key)) &&
                        l.contains(t.target)
                      )
                    )
                      if (!Q.trigger(s, "hide.bs.dropdown", a).defaultPrevented) {
                        var c;
                        if ("ontouchstart" in document.documentElement)
                          (c = []).concat
                            .apply(c, document.body.children)
                            .forEach(function (t) {
                              return Q.off(t, "mouseover", null, function () {});
                            });
                        e[n].setAttribute("aria-expanded", "false"),
                          r._popper && r._popper.destroy(),
                          l.classList.remove("show"),
                          e[n].classList.remove("show"),
                          Q.trigger(s, "hidden.bs.dropdown", a);
                      }
                }
              }
          }),
          (i.getParentFromElement = function (t) {
            return f(t) || t.parentNode;
          }),
          (i.dataApiKeydownHandler = function (t) {
            if (
              !(/input|textarea/i.test(t.target.tagName)
                ? "Space" === t.key ||
                  ("Escape" !== t.key &&
                    (("ArrowDown" !== t.key && "ArrowUp" !== t.key) ||
                      t.target.closest(".dropdown-menu")))
                : !at.test(t.key)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !this.classList.contains("disabled"))
            ) {
              var e = i.getParentFromElement(this),
                n = this.classList.contains("show");
              if ("Escape" === t.key)
                return (
                  (this.matches('[data-bs-toggle="dropdown"]')
                    ? this
                    : V.prev(this, '[data-bs-toggle="dropdown"]')[0]
                  ).focus(),
                  void i.clearMenus()
                );
              if (n && "Space" !== t.key) {
                var o = V.find(
                  ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                  e
                ).filter(v);
                if (o.length) {
                  var s = o.indexOf(t.target);
                  "ArrowUp" === t.key && s > 0 && s--,
                    "ArrowDown" === t.key && s < o.length - 1 && s++,
                    o[(s = -1 === s ? 0 : s)].focus();
                }
              } else i.clearMenus();
            }
          }),
          o(i, null, [
            {
              key: "Default",
              get: function () {
                return pt;
              }
            },
            {
              key: "DefaultType",
              get: function () {
                return gt;
              }
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.dropdown";
              }
            }
          ]),
          i
        );
      })(U);
    Q.on(
      document,
      "keydown.bs.dropdown.data-api",
      '[data-bs-toggle="dropdown"]',
      mt.dataApiKeydownHandler
    ),
      Q.on(
        document,
        "keydown.bs.dropdown.data-api",
        ".dropdown-menu",
        mt.dataApiKeydownHandler
      ),
      Q.on(document, "click.bs.dropdown.data-api", mt.clearMenus),
      Q.on(document, "keyup.bs.dropdown.data-api", mt.clearMenus),
      Q.on(
        document,
        "click.bs.dropdown.data-api",
        '[data-bs-toggle="dropdown"]',
        function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            mt.dropdownInterface(this, "toggle");
        }
      ),
      Q.on(document, "click.bs.dropdown.data-api", ".dropdown form", function (
        t
      ) {
        return t.stopPropagation();
      }),
      E(function () {
        var t = w();
        if (t) {
          var e = t.fn[rt];
          (t.fn[rt] = mt.jQueryInterface),
            (t.fn[rt].Constructor = mt),
            (t.fn[rt].noConflict = function () {
              return (t.fn[rt] = e), mt.jQueryInterface;
            });
        }
      });
    var _t = { backdrop: !0, keyboard: !0, focus: !0 },
      vt = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        focus: "boolean"
      },
      bt = (function (t) {
        function e(e, n) {
          var i;
          return (
            ((i = t.call(this, e) || this)._config = i._getConfig(n)),
            (i._dialog = V.findOne(".modal-dialog", e)),
            (i._backdrop = null),
            (i._isShown = !1),
            (i._isBodyOverflowing = !1),
            (i._ignoreBackdropClick = !1),
            (i._isTransitioning = !1),
            (i._scrollbarWidth = 0),
            i
          );
        }
        r(e, t);
        var n = e.prototype;
        return (
          (n.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t);
          }),
          (n.show = function (t) {
            var e = this;
            if (!this._isShown && !this._isTransitioning) {
              this._element.classList.contains("fade") &&
                (this._isTransitioning = !0);
              var n = Q.trigger(this._element, "show.bs.modal", {
                relatedTarget: t
              });
              this._isShown ||
                n.defaultPrevented ||
                ((this._isShown = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                Q.on(
                  this._element,
                  "click.dismiss.bs.modal",
                  '[data-bs-dismiss="modal"]',
                  function (t) {
                    return e.hide(t);
                  }
                ),
                Q.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
                  Q.one(e._element, "mouseup.dismiss.bs.modal", function (t) {
                    t.target === e._element && (e._ignoreBackdropClick = !0);
                  });
                }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
            }
          }),
          (n.hide = function (t) {
            var e = this;
            if (
              (t && t.preventDefault(),
              this._isShown && !this._isTransitioning) &&
              !Q.trigger(this._element, "hide.bs.modal").defaultPrevented
            ) {
              this._isShown = !1;
              var n = this._element.classList.contains("fade");
              if (
                (n && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                Q.off(document, "focusin.bs.modal"),
                this._element.classList.remove("show"),
                Q.off(this._element, "click.dismiss.bs.modal"),
                Q.off(this._dialog, "mousedown.dismiss.bs.modal"),
                n)
              ) {
                var i = h(this._element);
                Q.one(this._element, "transitionend", function (t) {
                  return e._hideModal(t);
                }),
                  m(this._element, i);
              } else this._hideModal();
            }
          }),
          (n.dispose = function () {
            [window, this._element, this._dialog].forEach(function (t) {
              return Q.off(t, ".bs.modal");
            }),
              t.prototype.dispose.call(this),
              Q.off(document, "focusin.bs.modal"),
              (this._config = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._isTransitioning = null),
              (this._scrollbarWidth = null);
          }),
          (n.handleUpdate = function () {
            this._adjustDialog();
          }),
          (n._getConfig = function (t) {
            return (t = s({}, _t, t)), _("modal", t, vt), t;
          }),
          (n._showElement = function (t) {
            var e = this,
              n = this._element.classList.contains("fade"),
              i = V.findOne(".modal-body", this._dialog);
            (this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = "block"),
              this._element.removeAttribute("aria-hidden"),
              this._element.setAttribute("aria-modal", !0),
              this._element.setAttribute("role", "dialog"),
              (this._element.scrollTop = 0),
              i && (i.scrollTop = 0),
              n && y(this._element),
              this._element.classList.add("show"),
              this._config.focus && this._enforceFocus();
            var o = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                Q.trigger(e._element, "shown.bs.modal", { relatedTarget: t });
            };
            if (n) {
              var s = h(this._dialog);
              Q.one(this._dialog, "transitionend", o), m(this._dialog, s);
            } else o();
          }),
          (n._enforceFocus = function () {
            var t = this;
            Q.off(document, "focusin.bs.modal"),
              Q.on(document, "focusin.bs.modal", function (e) {
                document === e.target ||
                  t._element === e.target ||
                  t._element.contains(e.target) ||
                  t._element.focus();
              });
          }),
          (n._setEscapeEvent = function () {
            var t = this;
            this._isShown
              ? Q.on(this._element, "keydown.dismiss.bs.modal", function (e) {
                  t._config.keyboard && "Escape" === e.key
                    ? (e.preventDefault(), t.hide())
                    : t._config.keyboard ||
                      "Escape" !== e.key ||
                      t._triggerBackdropTransition();
                })
              : Q.off(this._element, "keydown.dismiss.bs.modal");
          }),
          (n._setResizeEvent = function () {
            var t = this;
            this._isShown
              ? Q.on(window, "resize.bs.modal", function () {
                  return t._adjustDialog();
                })
              : Q.off(window, "resize.bs.modal");
          }),
          (n._hideModal = function () {
            var t = this;
            (this._element.style.display = "none"),
              this._element.setAttribute("aria-hidden", !0),
              this._element.removeAttribute("aria-modal"),
              this._element.removeAttribute("role"),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                document.body.classList.remove("modal-open"),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  Q.trigger(t._element, "hidden.bs.modal");
              });
          }),
          (n._removeBackdrop = function () {
            this._backdrop.parentNode.removeChild(this._backdrop),
              (this._backdrop = null);
          }),
          (n._showBackdrop = function (t) {
            var e = this,
              n = this._element.classList.contains("fade") ? "fade" : "";
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement("div")),
                (this._backdrop.className = "modal-backdrop"),
                n && this._backdrop.classList.add(n),
                document.body.appendChild(this._backdrop),
                Q.on(this._element, "click.dismiss.bs.modal", function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ("static" === e._config.backdrop
                        ? e._triggerBackdropTransition()
                        : e.hide());
                }),
                n && y(this._backdrop),
                this._backdrop.classList.add("show"),
                !n)
              )
                return void t();
              var i = h(this._backdrop);
              Q.one(this._backdrop, "transitionend", t), m(this._backdrop, i);
            } else if (!this._isShown && this._backdrop) {
              this._backdrop.classList.remove("show");
              var o = function () {
                e._removeBackdrop(), t();
              };
              if (this._element.classList.contains("fade")) {
                var s = h(this._backdrop);
                Q.one(this._backdrop, "transitionend", o), m(this._backdrop, s);
              } else o();
            } else t();
          }),
          (n._triggerBackdropTransition = function () {
            var t = this;
            if (
              !Q.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented
            ) {
              var e =
                this._element.scrollHeight >
                document.documentElement.clientHeight;
              e || (this._element.style.overflowY = "hidden"),
                this._element.classList.add("modal-static");
              var n = h(this._dialog);
              Q.off(this._element, "transitionend"),
                Q.one(this._element, "transitionend", function () {
                  t._element.classList.remove("modal-static"),
                    e ||
                      (Q.one(t._element, "transitionend", function () {
                        t._element.style.overflowY = "";
                      }),
                      m(t._element, n));
                }),
                m(this._element, n),
                this._element.focus();
            }
          }),
          (n._adjustDialog = function () {
            var t =
              this._element.scrollHeight > document.documentElement.clientHeight;
            ((!this._isBodyOverflowing && t && !T) ||
              (this._isBodyOverflowing && !t && T)) &&
              (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
              ((this._isBodyOverflowing && !t && !T) ||
                (!this._isBodyOverflowing && t && T)) &&
                (this._element.style.paddingRight = this._scrollbarWidth + "px");
          }),
          (n._resetAdjustments = function () {
            (this._element.style.paddingLeft = ""),
              (this._element.style.paddingRight = "");
          }),
          (n._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect();
            (this._isBodyOverflowing =
              Math.round(t.left + t.right) < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth());
          }),
          (n._setScrollbar = function () {
            var t = this;
            if (this._isBodyOverflowing) {
              V.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach(
                function (e) {
                  var n = e.style.paddingRight,
                    i = window.getComputedStyle(e)["padding-right"];
                  q.setDataAttribute(e, "padding-right", n),
                    (e.style.paddingRight =
                      Number.parseFloat(i) + t._scrollbarWidth + "px");
                }
              ),
                V.find(".sticky-top").forEach(function (e) {
                  var n = e.style.marginRight,
                    i = window.getComputedStyle(e)["margin-right"];
                  q.setDataAttribute(e, "margin-right", n),
                    (e.style.marginRight =
                      Number.parseFloat(i) - t._scrollbarWidth + "px");
                });
              var e = document.body.style.paddingRight,
                n = window.getComputedStyle(document.body)["padding-right"];
              q.setDataAttribute(document.body, "padding-right", e),
                (document.body.style.paddingRight =
                  Number.parseFloat(n) + this._scrollbarWidth + "px");
            }
            document.body.classList.add("modal-open");
          }),
          (n._resetScrollbar = function () {
            V.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach(
              function (t) {
                var e = q.getDataAttribute(t, "padding-right");
                void 0 !== e &&
                  (q.removeDataAttribute(t, "padding-right"),
                  (t.style.paddingRight = e));
              }
            ),
              V.find(".sticky-top").forEach(function (t) {
                var e = q.getDataAttribute(t, "margin-right");
                void 0 !== e &&
                  (q.removeDataAttribute(t, "margin-right"),
                  (t.style.marginRight = e));
              });
            var t = q.getDataAttribute(document.body, "padding-right");
            void 0 === t
              ? (document.body.style.paddingRight = "")
              : (q.removeDataAttribute(document.body, "padding-right"),
                (document.body.style.paddingRight = t));
          }),
          (n._getScrollbarWidth = function () {
            var t = document.createElement("div");
            (t.className = "modal-scrollbar-measure"),
              document.body.appendChild(t);
            var e = t.getBoundingClientRect().width - t.clientWidth;
            return document.body.removeChild(t), e;
          }),
          (e.jQueryInterface = function (t, n) {
            return this.each(function () {
              var i = L(this, "bs.modal"),
                o = s(
                  {},
                  _t,
                  q.getDataAttributes(this),
                  "object" == typeof t && t ? t : {}
                );
              if ((i || (i = new e(this, o)), "string" == typeof t)) {
                if (void 0 === i[t])
                  throw new TypeError('No method named "' + t + '"');
                i[t](n);
              }
            });
          }),
          o(e, null, [
            {
              key: "Default",
              get: function () {
                return _t;
              }
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.modal";
              }
            }
          ]),
          e
        );
      })(U);
    Q.on(
      document,
      "click.bs.modal.data-api",
      '[data-bs-toggle="modal"]',
      function (t) {
        var e = this,
          n = f(this);
        ("A" !== this.tagName && "AREA" !== this.tagName) || t.preventDefault(),
          Q.one(n, "show.bs.modal", function (t) {
            t.defaultPrevented ||
              Q.one(n, "hidden.bs.modal", function () {
                v(e) && e.focus();
              });
          });
        var i = L(n, "bs.modal");
        if (!i) {
          var o = s({}, q.getDataAttributes(n), q.getDataAttributes(this));
          i = new bt(n, o);
        }
        i.show(this);
      }
    ),
      E(function () {
        var t = w();
        if (t) {
          var e = t.fn.modal;
          (t.fn.modal = bt.jQueryInterface),
            (t.fn.modal.Constructor = bt),
            (t.fn.modal.noConflict = function () {
              return (t.fn.modal = e), bt.jQueryInterface;
            });
        }
      });
    var yt = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href"
      ]),
      wt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
      Et = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Tt = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: []
      };
    function kt(t, e, n) {
      var i;
      if (!t.length) return t;
      if (n && "function" == typeof n) return n(t);
      for (
        var o = new window.DOMParser().parseFromString(t, "text/html"),
          s = Object.keys(e),
          r = (i = []).concat.apply(i, o.body.querySelectorAll("*")),
          a = function (t, n) {
            var i,
              o = r[t],
              a = o.nodeName.toLowerCase();
            if (!s.includes(a)) return o.parentNode.removeChild(o), "continue";
            var l = (i = []).concat.apply(i, o.attributes),
              c = [].concat(e["*"] || [], e[a] || []);
            l.forEach(function (t) {
              (function (t, e) {
                var n = t.nodeName.toLowerCase();
                if (e.includes(n))
                  return (
                    !yt.has(n) ||
                    Boolean(t.nodeValue.match(wt) || t.nodeValue.match(Et))
                  );
                for (
                  var i = e.filter(function (t) {
                      return t instanceof RegExp;
                    }),
                    o = 0,
                    s = i.length;
                  o < s;
                  o++
                )
                  if (n.match(i[o])) return !0;
                return !1;
              })(t, c) || o.removeAttribute(t.nodeName);
            });
          },
          l = 0,
          c = r.length;
        l < c;
        l++
      )
        a(l);
      return o.body.innerHTML;
    }
    var At = "tooltip",
      Lt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      Ct = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Dt = {
        animation: "boolean",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
        delay: "(number|object)",
        html: "boolean",
        selector: "(string|boolean)",
        placement: "(string|function)",
        container: "(string|element|boolean)",
        fallbackPlacements: "(null|array)",
        boundary: "(string|element)",
        customClass: "(string|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        allowList: "object",
        popperConfig: "(null|object)"
      },
      St = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: T ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: T ? "right" : "left"
      },
      Nt = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        selector: !1,
        placement: "top",
        container: !1,
        fallbackPlacements: null,
        boundary: "clippingParents",
        customClass: "",
        sanitize: !0,
        sanitizeFn: null,
        allowList: Tt,
        popperConfig: null
      },
      Ot = {
        HIDE: "hide.bs.tooltip",
        HIDDEN: "hidden.bs.tooltip",
        SHOW: "show.bs.tooltip",
        SHOWN: "shown.bs.tooltip",
        INSERTED: "inserted.bs.tooltip",
        CLICK: "click.bs.tooltip",
        FOCUSIN: "focusin.bs.tooltip",
        FOCUSOUT: "focusout.bs.tooltip",
        MOUSEENTER: "mouseenter.bs.tooltip",
        MOUSELEAVE: "mouseleave.bs.tooltip"
      },
      It = (function (e) {
        function i(t, i) {
          var o;
          if (void 0 === n)
            throw new TypeError(
              "Bootstrap's tooltips require Popper (https://popper.js.org)"
            );
          return (
            ((o = e.call(this, t) || this)._isEnabled = !0),
            (o._timeout = 0),
            (o._hoverState = ""),
            (o._activeTrigger = {}),
            (o._popper = null),
            (o.config = o._getConfig(i)),
            (o.tip = null),
            o._setListeners(),
            o
          );
        }
        r(i, e);
        var a = i.prototype;
        return (
          (a.enable = function () {
            this._isEnabled = !0;
          }),
          (a.disable = function () {
            this._isEnabled = !1;
          }),
          (a.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled;
          }),
          (a.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = L(t.delegateTarget, e);
                n ||
                  ((n = new this.constructor(
                    t.delegateTarget,
                    this._getDelegateConfig()
                  )),
                  A(t.delegateTarget, e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n);
              } else {
                if (this.getTipElement().classList.contains("show"))
                  return void this._leave(null, this);
                this._enter(null, this);
              }
          }),
          (a.dispose = function () {
            clearTimeout(this._timeout),
              Q.off(this._element, this.constructor.EVENT_KEY),
              Q.off(
                this._element.closest(".modal"),
                "hide.bs.modal",
                this._hideModalHandler
              ),
              this.tip && this.tip.parentNode.removeChild(this.tip),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null),
              this._popper && this._popper.destroy(),
              (this._popper = null),
              (this.config = null),
              (this.tip = null),
              e.prototype.dispose.call(this);
          }),
          (a.show = function () {
            var e = this;
            if ("none" === this._element.style.display)
              throw new Error("Please use show on visible elements");
            if (this.isWithContent() && this._isEnabled) {
              var n = Q.trigger(this._element, this.constructor.Event.SHOW),
                i = (function t(e) {
                  if (!document.documentElement.attachShadow) return null;
                  if ("function" == typeof e.getRootNode) {
                    var n = e.getRootNode();
                    return n instanceof ShadowRoot ? n : null;
                  }
                  return e instanceof ShadowRoot
                    ? e
                    : e.parentNode
                    ? t(e.parentNode)
                    : null;
                })(this._element),
                o =
                  null === i
                    ? this._element.ownerDocument.documentElement.contains(
                        this._element
                      )
                    : i.contains(this._element);
              if (n.defaultPrevented || !o) return;
              var s = this.getTipElement(),
                r = c(this.constructor.NAME);
              s.setAttribute("id", r),
                this._element.setAttribute("aria-describedby", r),
                this.setContent(),
                this.config.animation && s.classList.add("fade");
              var a =
                  "function" == typeof this.config.placement
                    ? this.config.placement.call(this, s, this._element)
                    : this.config.placement,
                l = this._getAttachment(a);
              this._addAttachmentClass(l);
              var u = this._getContainer();
              A(s, this.constructor.DATA_KEY, this),
                this._element.ownerDocument.documentElement.contains(this.tip) ||
                  u.appendChild(s),
                Q.trigger(this._element, this.constructor.Event.INSERTED),
                (this._popper = t.createPopper(
                  this._element,
                  s,
                  this._getPopperConfig(l)
                )),
                s.classList.add("show");
              var d,
                f,
                p =
                  "function" == typeof this.config.customClass
                    ? this.config.customClass()
                    : this.config.customClass;
              if (p) (d = s.classList).add.apply(d, p.split(" "));
              if ("ontouchstart" in document.documentElement)
                (f = []).concat
                  .apply(f, document.body.children)
                  .forEach(function (t) {
                    Q.on(t, "mouseover", function () {});
                  });
              var g = function () {
                var t = e._hoverState;
                (e._hoverState = null),
                  Q.trigger(e._element, e.constructor.Event.SHOWN),
                  "out" === t && e._leave(null, e);
              };
              if (this.tip.classList.contains("fade")) {
                var _ = h(this.tip);
                Q.one(this.tip, "transitionend", g), m(this.tip, _);
              } else g();
            }
          }),
          (a.hide = function () {
            var t = this;
            if (this._popper) {
              var e = this.getTipElement(),
                n = function () {
                  "show" !== t._hoverState &&
                    e.parentNode &&
                    e.parentNode.removeChild(e),
                    t._cleanTipClass(),
                    t._element.removeAttribute("aria-describedby"),
                    Q.trigger(t._element, t.constructor.Event.HIDDEN),
                    t._popper && (t._popper.destroy(), (t._popper = null));
                };
              if (
                !Q.trigger(this._element, this.constructor.Event.HIDE)
                  .defaultPrevented
              ) {
                var i;
                if (
                  (e.classList.remove("show"),
                  "ontouchstart" in document.documentElement)
                )
                  (i = []).concat
                    .apply(i, document.body.children)
                    .forEach(function (t) {
                      return Q.off(t, "mouseover", b);
                    });
                if (
                  ((this._activeTrigger.click = !1),
                  (this._activeTrigger.focus = !1),
                  (this._activeTrigger.hover = !1),
                  this.tip.classList.contains("fade"))
                ) {
                  var o = h(e);
                  Q.one(e, "transitionend", n), m(e, o);
                } else n();
                this._hoverState = "";
              }
            }
          }),
          (a.update = function () {
            null !== this._popper && this._popper.update();
          }),
          (a.isWithContent = function () {
            return Boolean(this.getTitle());
          }),
          (a.getTipElement = function () {
            if (this.tip) return this.tip;
            var t = document.createElement("div");
            return (
              (t.innerHTML = this.config.template),
              (this.tip = t.children[0]),
              this.tip
            );
          }),
          (a.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(
              V.findOne(".tooltip-inner", t),
              this.getTitle()
            ),
              t.classList.remove("fade", "show");
          }),
          (a.setElementContent = function (t, e) {
            if (null !== t)
              return "object" == typeof e && g(e)
                ? (e.jquery && (e = e[0]),
                  void (this.config.html
                    ? e.parentNode !== t && ((t.innerHTML = ""), t.appendChild(e))
                    : (t.textContent = e.textContent)))
                : void (this.config.html
                    ? (this.config.sanitize &&
                        (e = kt(
                          e,
                          this.config.allowList,
                          this.config.sanitizeFn
                        )),
                      (t.innerHTML = e))
                    : (t.textContent = e));
          }),
          (a.getTitle = function () {
            var t = this._element.getAttribute("data-bs-original-title");
            return (
              t ||
                (t =
                  "function" == typeof this.config.title
                    ? this.config.title.call(this._element)
                    : this.config.title),
              t
            );
          }),
          (a.updateAttachment = function (t) {
            return "right" === t ? "end" : "left" === t ? "start" : t;
          }),
          (a._getPopperConfig = function (t) {
            var e = this,
              n = { name: "flip", options: { altBoundary: !0 } };
            return (
              this.config.fallbackPlacements &&
                (n.options.fallbackPlacements = this.config.fallbackPlacements),
              s(
                {},
                {
                  placement: t,
                  modifiers: [
                    n,
                    {
                      name: "preventOverflow",
                      options: { rootBoundary: this.config.boundary }
                    },
                    {
                      name: "arrow",
                      options: { element: "." + this.constructor.NAME + "-arrow" }
                    },
                    {
                      name: "onChange",
                      enabled: !0,
                      phase: "afterWrite",
                      fn: function (t) {
                        return e._handlePopperPlacementChange(t);
                      }
                    }
                  ],
                  onFirstUpdate: function (t) {
                    t.options.placement !== t.placement &&
                      e._handlePopperPlacementChange(t);
                  }
                },
                this.config.popperConfig
              )
            );
          }),
          (a._addAttachmentClass = function (t) {
            this.getTipElement().classList.add(
              "bs-tooltip-" + this.updateAttachment(t)
            );
          }),
          (a._getContainer = function () {
            return !1 === this.config.container
              ? document.body
              : g(this.config.container)
              ? this.config.container
              : V.findOne(this.config.container);
          }),
          (a._getAttachment = function (t) {
            return St[t.toUpperCase()];
          }),
          (a._setListeners = function () {
            var t = this;
            this.config.trigger.split(" ").forEach(function (e) {
              if ("click" === e)
                Q.on(
                  t._element,
                  t.constructor.Event.CLICK,
                  t.config.selector,
                  function (e) {
                    return t.toggle(e);
                  }
                );
              else if ("manual" !== e) {
                var n =
                    "hover" === e
                      ? t.constructor.Event.MOUSEENTER
                      : t.constructor.Event.FOCUSIN,
                  i =
                    "hover" === e
                      ? t.constructor.Event.MOUSELEAVE
                      : t.constructor.Event.FOCUSOUT;
                Q.on(t._element, n, t.config.selector, function (e) {
                  return t._enter(e);
                }),
                  Q.on(t._element, i, t.config.selector, function (e) {
                    return t._leave(e);
                  });
              }
            }),
              (this._hideModalHandler = function () {
                t._element && t.hide();
              }),
              Q.on(
                this._element.closest(".modal"),
                "hide.bs.modal",
                this._hideModalHandler
              ),
              this.config.selector
                ? (this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                  }))
                : this._fixTitle();
          }),
          (a._fixTitle = function () {
            var t = this._element.getAttribute("title"),
              e = typeof this._element.getAttribute("data-bs-original-title");
            (t || "string" !== e) &&
              (this._element.setAttribute("data-bs-original-title", t || ""),
              !t ||
                this._element.getAttribute("aria-label") ||
                this._element.textContent ||
                this._element.setAttribute("aria-label", t),
              this._element.setAttribute("title", ""));
          }),
          (a._enter = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || L(t.delegateTarget, n)) ||
              ((e = new this.constructor(
                t.delegateTarget,
                this._getDelegateConfig()
              )),
              A(t.delegateTarget, n, e)),
              t &&
                (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0),
              e.getTipElement().classList.contains("show") ||
              "show" === e._hoverState
                ? (e._hoverState = "show")
                : (clearTimeout(e._timeout),
                  (e._hoverState = "show"),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        "show" === e._hoverState && e.show();
                      }, e.config.delay.show))
                    : e.show());
          }),
          (a._leave = function (t, e) {
            var n = this.constructor.DATA_KEY;
            (e = e || L(t.delegateTarget, n)) ||
              ((e = new this.constructor(
                t.delegateTarget,
                this._getDelegateConfig()
              )),
              A(t.delegateTarget, n, e)),
              t &&
                (e._activeTrigger[
                  "focusout" === t.type ? "focus" : "hover"
                ] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = "out"),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      "out" === e._hoverState && e.hide();
                    }, e.config.delay.hide))
                  : e.hide());
          }),
          (a._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0;
            return !1;
          }),
          (a._getConfig = function (t) {
            var e = q.getDataAttributes(this._element);
            return (
              Object.keys(e).forEach(function (t) {
                Ct.has(t) && delete e[t];
              }),
              t &&
                "object" == typeof t.container &&
                t.container.jquery &&
                (t.container = t.container[0]),
              "number" ==
                typeof (t = s(
                  {},
                  this.constructor.Default,
                  e,
                  "object" == typeof t && t ? t : {}
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              "number" == typeof t.title && (t.title = t.title.toString()),
              "number" == typeof t.content && (t.content = t.content.toString()),
              _(At, t, this.constructor.DefaultType),
              t.sanitize &&
                (t.template = kt(t.template, t.allowList, t.sanitizeFn)),
              t
            );
          }),
          (a._getDelegateConfig = function () {
            var t = {};
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e]);
            return t;
          }),
          (a._cleanTipClass = function () {
            var t = this.getTipElement(),
              e = t.getAttribute("class").match(Lt);
            null !== e &&
              e.length > 0 &&
              e
                .map(function (t) {
                  return t.trim();
                })
                .forEach(function (e) {
                  return t.classList.remove(e);
                });
          }),
          (a._handlePopperPlacementChange = function (t) {
            var e = t.state;
            e &&
              ((this.tip = e.elements.popper),
              this._cleanTipClass(),
              this._addAttachmentClass(this._getAttachment(e.placement)));
          }),
          (i.jQueryInterface = function (t) {
            return this.each(function () {
              var e = L(this, "bs.tooltip"),
                n = "object" == typeof t && t;
              if (
                (e || !/dispose|hide/.test(t)) &&
                (e || (e = new i(this, n)), "string" == typeof t)
              ) {
                if (void 0 === e[t])
                  throw new TypeError('No method named "' + t + '"');
                e[t]();
              }
            });
          }),
          o(i, null, [
            {
              key: "Default",
              get: function () {
                return Nt;
              }
            },
            {
              key: "NAME",
              get: function () {
                return At;
              }
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.tooltip";
              }
            },
            {
              key: "Event",
              get: function () {
                return Ot;
              }
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.tooltip";
              }
            },
            {
              key: "DefaultType",
              get: function () {
                return Dt;
              }
            }
          ]),
          i
        );
      })(U);
    E(function () {
      var t = w();
      if (t) {
        var e = t.fn[At];
        (t.fn[At] = It.jQueryInterface),
          (t.fn[At].Constructor = It),
          (t.fn[At].noConflict = function () {
            return (t.fn[At] = e), It.jQueryInterface;
          });
      }
    });
    var jt = "popover",
      Pt = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      xt = s({}, It.Default, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
      }),
      Ht = s({}, It.DefaultType, { content: "(string|element|function)" }),
      Bt = {
        HIDE: "hide.bs.popover",
        HIDDEN: "hidden.bs.popover",
        SHOW: "show.bs.popover",
        SHOWN: "shown.bs.popover",
        INSERTED: "inserted.bs.popover",
        CLICK: "click.bs.popover",
        FOCUSIN: "focusin.bs.popover",
        FOCUSOUT: "focusout.bs.popover",
        MOUSEENTER: "mouseenter.bs.popover",
        MOUSELEAVE: "mouseleave.bs.popover"
      },
      Mt = (function (t) {
        function e() {
          return t.apply(this, arguments) || this;
        }
        r(e, t);
        var n = e.prototype;
        return (
          (n.isWithContent = function () {
            return this.getTitle() || this._getContent();
          }),
          (n.setContent = function () {
            var t = this.getTipElement();
            this.setElementContent(
              V.findOne(".popover-header", t),
              this.getTitle()
            );
            var e = this._getContent();
            "function" == typeof e && (e = e.call(this._element)),
              this.setElementContent(V.findOne(".popover-body", t), e),
              t.classList.remove("fade", "show");
          }),
          (n._addAttachmentClass = function (t) {
            this.getTipElement().classList.add(
              "bs-popover-" + this.updateAttachment(t)
            );
          }),
          (n._getContent = function () {
            return (
              this._element.getAttribute("data-bs-content") || this.config.content
            );
          }),
          (n._cleanTipClass = function () {
            var t = this.getTipElement(),
              e = t.getAttribute("class").match(Pt);
            null !== e &&
              e.length > 0 &&
              e
                .map(function (t) {
                  return t.trim();
                })
                .forEach(function (e) {
                  return t.classList.remove(e);
                });
          }),
          (e.jQueryInterface = function (t) {
            return this.each(function () {
              var n = L(this, "bs.popover"),
                i = "object" == typeof t ? t : null;
              if (
                (n || !/dispose|hide/.test(t)) &&
                (n || ((n = new e(this, i)), A(this, "bs.popover", n)),
                "string" == typeof t)
              ) {
                if (void 0 === n[t])
                  throw new TypeError('No method named "' + t + '"');
                n[t]();
              }
            });
          }),
          o(e, null, [
            {
              key: "Default",
              get: function () {
                return xt;
              }
            },
            {
              key: "NAME",
              get: function () {
                return jt;
              }
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.popover";
              }
            },
            {
              key: "Event",
              get: function () {
                return Bt;
              }
            },
            {
              key: "EVENT_KEY",
              get: function () {
                return ".bs.popover";
              }
            },
            {
              key: "DefaultType",
              get: function () {
                return Ht;
              }
            }
          ]),
          e
        );
      })(It);
    E(function () {
      var t = w();
      if (t) {
        var e = t.fn[jt];
        (t.fn[jt] = Mt.jQueryInterface),
          (t.fn[jt].Constructor = Mt),
          (t.fn[jt].noConflict = function () {
            return (t.fn[jt] = e), Mt.jQueryInterface;
          });
      }
    });
    var Rt = "scrollspy",
      Kt = { offset: 10, method: "auto", target: "" },
      Qt = { offset: "number", method: "string", target: "(string|element)" },
      Ut = (function (t) {
        function e(e, n) {
          var i;
          return (
            ((i = t.call(this, e) || this)._scrollElement =
              "BODY" === e.tagName ? window : e),
            (i._config = i._getConfig(n)),
            (i._selector =
              i._config.target +
              " .nav-link, " +
              i._config.target +
              " .list-group-item, " +
              i._config.target +
              " .dropdown-item"),
            (i._offsets = []),
            (i._targets = []),
            (i._activeTarget = null),
            (i._scrollHeight = 0),
            Q.on(i._scrollElement, "scroll.bs.scrollspy", function (t) {
              return i._process(t);
            }),
            i.refresh(),
            i._process(),
            i
          );
        }
        r(e, t);
        var n = e.prototype;
        return (
          (n.refresh = function () {
            var t = this,
              e =
                this._scrollElement === this._scrollElement.window
                  ? "offset"
                  : "position",
              n = "auto" === this._config.method ? e : this._config.method,
              i = "position" === n ? this._getScrollTop() : 0;
            (this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              V.find(this._selector)
                .map(function (t) {
                  var e = d(t),
                    o = e ? V.findOne(e) : null;
                  if (o) {
                    var s = o.getBoundingClientRect();
                    if (s.width || s.height) return [q[n](o).top + i, e];
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .sort(function (t, e) {
                  return t[0] - e[0];
                })
                .forEach(function (e) {
                  t._offsets.push(e[0]), t._targets.push(e[1]);
                });
          }),
          (n.dispose = function () {
            t.prototype.dispose.call(this),
              Q.off(this._scrollElement, ".bs.scrollspy"),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null);
          }),
          (n._getConfig = function (t) {
            if (
              "string" !=
                typeof (t = s({}, Kt, "object" == typeof t && t ? t : {}))
                  .target &&
              g(t.target)
            ) {
              var e = t.target.id;
              e || ((e = c(Rt)), (t.target.id = e)), (t.target = "#" + e);
            }
            return _(Rt, t, Qt), t;
          }),
          (n._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop;
          }),
          (n._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            );
          }),
          (n._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height;
          }),
          (n._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight();
            if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
              var i = this._targets[this._targets.length - 1];
              this._activeTarget !== i && this._activate(i);
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                this._offsets[0] > 0
              )
                return (this._activeTarget = null), void this._clear();
              for (var o = this._offsets.length; o--; ) {
                this._activeTarget !== this._targets[o] &&
                  t >= this._offsets[o] &&
                  (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) &&
                  this._activate(this._targets[o]);
              }
            }
          }),
          (n._activate = function (t) {
            (this._activeTarget = t), this._clear();
            var e = this._selector.split(",").map(function (e) {
                return (
                  e + '[data-bs-target="' + t + '"],' + e + '[href="' + t + '"]'
                );
              }),
              n = V.findOne(e.join(","));
            n.classList.contains("dropdown-item")
              ? (V.findOne(
                  ".dropdown-toggle",
                  n.closest(".dropdown")
                ).classList.add("active"),
                n.classList.add("active"))
              : (n.classList.add("active"),
                V.parents(n, ".nav, .list-group").forEach(function (t) {
                  V.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
                    return t.classList.add("active");
                  }),
                    V.prev(t, ".nav-item").forEach(function (t) {
                      V.children(t, ".nav-link").forEach(function (t) {
                        return t.classList.add("active");
                      });
                    });
                })),
              Q.trigger(this._scrollElement, "activate.bs.scrollspy", {
                relatedTarget: t
              });
          }),
          (n._clear = function () {
            V.find(this._selector)
              .filter(function (t) {
                return t.classList.contains("active");
              })
              .forEach(function (t) {
                return t.classList.remove("active");
              });
          }),
          (e.jQueryInterface = function (t) {
            return this.each(function () {
              var n = L(this, "bs.scrollspy");
              if (
                (n || (n = new e(this, "object" == typeof t && t)),
                "string" == typeof t)
              ) {
                if (void 0 === n[t])
                  throw new TypeError('No method named "' + t + '"');
                n[t]();
              }
            });
          }),
          o(e, null, [
            {
              key: "Default",
              get: function () {
                return Kt;
              }
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.scrollspy";
              }
            }
          ]),
          e
        );
      })(U);
    Q.on(window, "load.bs.scrollspy.data-api", function () {
      V.find('[data-bs-spy="scroll"]').forEach(function (t) {
        return new Ut(t, q.getDataAttributes(t));
      });
    }),
      E(function () {
        var t = w();
        if (t) {
          var e = t.fn[Rt];
          (t.fn[Rt] = Ut.jQueryInterface),
            (t.fn[Rt].Constructor = Ut),
            (t.fn[Rt].noConflict = function () {
              return (t.fn[Rt] = e), Ut.jQueryInterface;
            });
        }
      });
    var Wt = (function (t) {
      function e() {
        return t.apply(this, arguments) || this;
      }
      r(e, t);
      var n = e.prototype;
      return (
        (n.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                this._element.classList.contains("active")) ||
              this._element.classList.contains("disabled")
            )
          ) {
            var e,
              n = f(this._element),
              i = this._element.closest(".nav, .list-group");
            if (i) {
              var o =
                "UL" === i.nodeName || "OL" === i.nodeName
                  ? ":scope > li > .active"
                  : ".active";
              e = (e = V.find(o, i))[e.length - 1];
            }
            var s = null;
            if (
              (e &&
                (s = Q.trigger(e, "hide.bs.tab", {
                  relatedTarget: this._element
                })),
              !(
                Q.trigger(this._element, "show.bs.tab", { relatedTarget: e })
                  .defaultPrevented ||
                (null !== s && s.defaultPrevented)
              ))
            ) {
              this._activate(this._element, i);
              var r = function () {
                Q.trigger(e, "hidden.bs.tab", { relatedTarget: t._element }),
                  Q.trigger(t._element, "shown.bs.tab", { relatedTarget: e });
              };
              n ? this._activate(n, n.parentNode, r) : r();
            }
          }
        }),
        (n._activate = function (t, e, n) {
          var i = this,
            o = (!e || ("UL" !== e.nodeName && "OL" !== e.nodeName)
              ? V.children(e, ".active")
              : V.find(":scope > li > .active", e))[0],
            s = n && o && o.classList.contains("fade"),
            r = function () {
              return i._transitionComplete(t, o, n);
            };
          if (o && s) {
            var a = h(o);
            o.classList.remove("show"), Q.one(o, "transitionend", r), m(o, a);
          } else r();
        }),
        (n._transitionComplete = function (t, e, n) {
          if (e) {
            e.classList.remove("active");
            var i = V.findOne(":scope > .dropdown-menu .active", e.parentNode);
            i && i.classList.remove("active"),
              "tab" === e.getAttribute("role") &&
                e.setAttribute("aria-selected", !1);
          }
          (t.classList.add("active"),
          "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0),
          y(t),
          t.classList.contains("fade") && t.classList.add("show"),
          t.parentNode && t.parentNode.classList.contains("dropdown-menu")) &&
            (t.closest(".dropdown") &&
              V.find(".dropdown-toggle").forEach(function (t) {
                return t.classList.add("active");
              }),
            t.setAttribute("aria-expanded", !0));
          n && n();
        }),
        (e.jQueryInterface = function (t) {
          return this.each(function () {
            var n = L(this, "bs.tab") || new e(this);
            if ("string" == typeof t) {
              if (void 0 === n[t])
                throw new TypeError('No method named "' + t + '"');
              n[t]();
            }
          });
        }),
        o(e, null, [
          {
            key: "DATA_KEY",
            get: function () {
              return "bs.tab";
            }
          }
        ]),
        e
      );
    })(U);
    Q.on(
      document,
      "click.bs.tab.data-api",
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      function (t) {
        t.preventDefault(), (L(this, "bs.tab") || new Wt(this)).show();
      }
    ),
      E(function () {
        var t = w();
        if (t) {
          var e = t.fn.tab;
          (t.fn.tab = Wt.jQueryInterface),
            (t.fn.tab.Constructor = Wt),
            (t.fn.tab.noConflict = function () {
              return (t.fn.tab = e), Wt.jQueryInterface;
            });
        }
      });
    var Ft = { animation: "boolean", autohide: "boolean", delay: "number" },
      Yt = { animation: !0, autohide: !0, delay: 5e3 },
      zt = (function (t) {
        function e(e, n) {
          var i;
          return (
            ((i = t.call(this, e) || this)._config = i._getConfig(n)),
            (i._timeout = null),
            i._setListeners(),
            i
          );
        }
        r(e, t);
        var n = e.prototype;
        return (
          (n.show = function () {
            var t = this;
            if (!Q.trigger(this._element, "show.bs.toast").defaultPrevented) {
              this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
              var e = function () {
                t._element.classList.remove("showing"),
                  t._element.classList.add("show"),
                  Q.trigger(t._element, "shown.bs.toast"),
                  t._config.autohide &&
                    (t._timeout = setTimeout(function () {
                      t.hide();
                    }, t._config.delay));
              };
              if (
                (this._element.classList.remove("hide"),
                y(this._element),
                this._element.classList.add("showing"),
                this._config.animation)
              ) {
                var n = h(this._element);
                Q.one(this._element, "transitionend", e), m(this._element, n);
              } else e();
            }
          }),
          (n.hide = function () {
            var t = this;
            if (
              this._element.classList.contains("show") &&
              !Q.trigger(this._element, "hide.bs.toast").defaultPrevented
            ) {
              var e = function () {
                t._element.classList.add("hide"),
                  Q.trigger(t._element, "hidden.bs.toast");
              };
              if (
                (this._element.classList.remove("show"), this._config.animation)
              ) {
                var n = h(this._element);
                Q.one(this._element, "transitionend", e), m(this._element, n);
              } else e();
            }
          }),
          (n.dispose = function () {
            this._clearTimeout(),
              this._element.classList.contains("show") &&
                this._element.classList.remove("show"),
              Q.off(this._element, "click.dismiss.bs.toast"),
              t.prototype.dispose.call(this),
              (this._config = null);
          }),
          (n._getConfig = function (t) {
            return (
              (t = s(
                {},
                Yt,
                q.getDataAttributes(this._element),
                "object" == typeof t && t ? t : {}
              )),
              _("toast", t, this.constructor.DefaultType),
              t
            );
          }),
          (n._setListeners = function () {
            var t = this;
            Q.on(
              this._element,
              "click.dismiss.bs.toast",
              '[data-bs-dismiss="toast"]',
              function () {
                return t.hide();
              }
            );
          }),
          (n._clearTimeout = function () {
            clearTimeout(this._timeout), (this._timeout = null);
          }),
          (e.jQueryInterface = function (t) {
            return this.each(function () {
              var n = L(this, "bs.toast");
              if (
                (n || (n = new e(this, "object" == typeof t && t)),
                "string" == typeof t)
              ) {
                if (void 0 === n[t])
                  throw new TypeError('No method named "' + t + '"');
                n[t](this);
              }
            });
          }),
          o(e, null, [
            {
              key: "DefaultType",
              get: function () {
                return Ft;
              }
            },
            {
              key: "Default",
              get: function () {
                return Yt;
              }
            },
            {
              key: "DATA_KEY",
              get: function () {
                return "bs.toast";
              }
            }
          ]),
          e
        );
      })(U);
    return (
      E(function () {
        var t = w();
        if (t) {
          var e = t.fn.toast;
          (t.fn.toast = zt.jQueryInterface),
            (t.fn.toast.Constructor = zt),
            (t.fn.toast.noConflict = function () {
              return (t.fn.toast = e), zt.jQueryInterface;
            });
        }
      }),
      {
        Alert: F,
        Button: Y,
        Carousel: et,
        Collapse: st,
        Dropdown: mt,
        Modal: bt,
        Popover: Mt,
        ScrollSpy: Ut,
        Tab: Wt,
        Toast: zt,
        Tooltip: It
      }
    );
  });
  