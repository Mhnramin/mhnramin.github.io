(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        9875: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return l
                }
            });
            var i = n(5893),
                r = n(7294),
                a = n(1664),
                s = n(9530),
                c = n(6869);

            function l() {
                return (0, r.useEffect)((function() {
                    s.p8.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: ".content-wrapper"
                        }
                    }).staggerFrom([".text-anim-one,.text-anim-two"], 1, {
                        y: 150,
                        ease: c.Aq.easeOut,
                        delay: .8
                    }, .15)
                }), []), (0, i.jsx)("div", {
                    className: "contact-container",
                    children: (0, i.jsx)("div", {
                        className: "contact-wrapper",
                        children: (0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("div", {
                                className: "shift-line",
                                children: (0, i.jsx)("h2", {
                                    className: "text-anim-one",
                                    children: "Let's talk more seriously."
                                })
                            }), (0, i.jsx)("div", {
                                className: "shift-line",
                                children: (0, i.jsx)(a.default, {
                                    href: "mailto:zenhocker@gmail.com",
                                    children: (0, i.jsx)("h1", {
                                        className: "text-anim-two",
                                        children: "zenhocker@gmail.com"
                                    })
                                })
                            }), (0, i.jsxs)("nav", {
                                children: [(0, i.jsx)("li", {
                                    children: (0, i.jsx)(a.default, {
                                        href: "https://www.linkedin.com/in/mhnramin/",
                                        children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            children: "LinkedIn"
                                        })
                                    })
                                }), (0, i.jsx)("li", {
                                    children: (0, i.jsx)(a.default, {
                                        href: "https://github.com/mhnramin",
                                        children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            children: "Github"
                                        })
                                    })
                                }), (0, i.jsx)("li", {
                                    children: (0, i.jsx)(a.default, {
                                        href: "https://medium.com/@mhnramin",
                                        children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            children: "Medium"
                                        })
                                    })
                                }), (0, i.jsx)("li", {
                                    children: (0, i.jsx)(a.default, {
                                        href: "https://www.behance.net/chetanverma",
                                        children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            children: "Behance"
                                        })
                                    })
                                })]
                            })]
                        })
                    })
                })
            }
        },
        9917: function(e, t, n) {
            "use strict";
            var i = n(3038),
                r = n(319);
            t.default = function(e) {
                var t = e.src,
                    n = e.sizes,
                    r = e.unoptimized,
                    l = void 0 !== r && r,
                    d = e.priority,
                    u = void 0 !== d && d,
                    m = e.loading,
                    g = e.lazyBoundary,
                    v = void 0 === g ? "200px" : g,
                    x = e.className,
                    j = e.quality,
                    b = e.width,
                    w = e.height,
                    _ = e.objectFit,
                    A = e.objectPosition,
                    E = e.onLoadingComplete,
                    S = e.loader,
                    z = void 0 === S ? N : S,
                    I = e.placeholder,
                    O = void 0 === I ? "empty" : I,
                    L = e.blurDataURL,
                    D = function(e, t) {
                        if (null == e) return {};
                        var n, i, r = function(e, t) {
                            if (null == e) return {};
                            var n, i, r = {},
                                a = Object.keys(e);
                            for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                            return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
                        }
                        return r
                    }(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]),
                    C = n ? "responsive" : "intrinsic";
                "layout" in D && (D.layout && (C = D.layout), delete D.layout);
                var R = "";
                if (function(e) {
                        return "object" === typeof e && (p(e) || function(e) {
                            return void 0 !== e.src
                        }(e))
                    }(t)) {
                    var P = p(t) ? t.default : t;
                    if (!P.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(P)));
                    if (L = L || P.blurDataURL, R = P.src, (!C || "fill" !== C) && (w = w || P.height, b = b || P.width, !P.height || !P.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(P)))
                }
                t = "string" === typeof t ? t : R;
                var M = k(b),
                    q = k(w),
                    B = k(j),
                    T = !u && ("lazy" === m || "undefined" === typeof m);
                t.startsWith("data:") && (l = !0, T = !1);
                f.has(t) && (T = !1);
                0;
                var U, V, W, H = o.useIntersection({
                        rootMargin: v,
                        disabled: !T
                    }),
                    F = i(H, 2),
                    G = F[0],
                    K = F[1],
                    J = !T || K,
                    X = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: _,
                        objectPosition: A
                    },
                    Z = "blur" === O ? {
                        filter: "blur(20px)",
                        backgroundSize: _ || "cover",
                        backgroundImage: 'url("'.concat(L, '")'),
                        backgroundPosition: A || "0% 0%"
                    } : {};
                if ("fill" === C) U = {
                    display: "block",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    boxSizing: "border-box",
                    margin: 0
                };
                else if ("undefined" !== typeof M && "undefined" !== typeof q) {
                    var Q = q / M,
                        Y = isNaN(Q) ? "100%" : "".concat(100 * Q, "%");
                    "responsive" === C ? (U = {
                        display: "block",
                        overflow: "hidden",
                        position: "relative",
                        boxSizing: "border-box",
                        margin: 0
                    }, V = {
                        display: "block",
                        boxSizing: "border-box",
                        paddingTop: Y
                    }) : "intrinsic" === C ? (U = {
                        display: "inline-block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        position: "relative",
                        boxSizing: "border-box",
                        margin: 0
                    }, V = {
                        boxSizing: "border-box",
                        display: "block",
                        maxWidth: "100%"
                    }, W = '<svg width="'.concat(M, '" height="').concat(q, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')) : "fixed" === C && (U = {
                        overflow: "hidden",
                        boxSizing: "border-box",
                        display: "inline-block",
                        position: "relative",
                        width: M,
                        height: q
                    })
                } else 0;
                var $ = {
                    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    srcSet: void 0,
                    sizes: void 0
                };
                J && ($ = y({
                    src: t,
                    unoptimized: l,
                    layout: C,
                    width: M,
                    quality: B,
                    sizes: n,
                    loader: z
                }));
                var ee = t;
                return a.default.createElement("div", {
                    style: U
                }, V ? a.default.createElement("div", {
                    style: V
                }, W ? a.default.createElement("img", {
                    style: {
                        maxWidth: "100%",
                        display: "block",
                        margin: 0,
                        border: "none",
                        padding: 0
                    },
                    alt: "",
                    "aria-hidden": !0,
                    src: "data:image/svg+xml;base64,".concat(c.toBase64(W))
                }) : null) : null, !J && a.default.createElement("noscript", null, a.default.createElement("img", Object.assign({}, D, y({
                    src: t,
                    unoptimized: l,
                    layout: C,
                    width: M,
                    quality: B,
                    sizes: n,
                    loader: z
                }), {
                    decoding: "async",
                    "data-nimg": !0,
                    style: X,
                    className: x
                }))), a.default.createElement("img", Object.assign({}, D, $, {
                    decoding: "async",
                    "data-nimg": !0,
                    className: x,
                    ref: function(e) {
                        G(e),
                            function(e, t, n, i) {
                                if (!e) return;
                                var r = function() {
                                    e.src.startsWith("data:") || ("decode" in e ? e.decode() : Promise.resolve()).catch((function() {})).then((function() {
                                        if ("blur" === n && (e.style.filter = "none", e.style.backgroundSize = "none", e.style.backgroundImage = "none"), f.add(t), i) {
                                            var r = e.naturalWidth,
                                                a = e.naturalHeight;
                                            i({
                                                naturalWidth: r,
                                                naturalHeight: a
                                            })
                                        }
                                    }))
                                };
                                e.complete ? r() : e.onload = r
                            }(e, ee, O, E)
                    },
                    style: h({}, X, Z)
                })), u ? a.default.createElement(s.default, null, a.default.createElement("link", {
                    key: "__nimg-" + $.src + $.srcSet + $.sizes,
                    rel: "preload",
                    as: "image",
                    href: $.srcSet ? void 0 : $.src,
                    imagesrcset: $.srcSet,
                    imagesizes: $.sizes
                })) : null)
            };
            var a = u(n(7294)),
                s = u(n(639)),
                c = n(8997),
                l = n(5809),
                o = n(7426);

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), i.forEach((function(t) {
                        d(e, t, n[t])
                    }))
                }
                return e
            }
            var f = new Set;
            var m = new Map([
                ["default", function(e) {
                    var t = e.root,
                        n = e.src,
                        i = e.width,
                        r = e.quality;
                    0;
                    return "".concat(t, "?url=").concat(encodeURIComponent(n), "&w=").concat(i, "&q=").concat(r || 75)
                }],
                ["imgix", function(e) {
                    var t = e.root,
                        n = e.src,
                        i = e.width,
                        r = e.quality,
                        a = new URL("".concat(t).concat(_(n))),
                        s = a.searchParams;
                    s.set("auto", s.get("auto") || "format"), s.set("fit", s.get("fit") || "max"), s.set("w", s.get("w") || i.toString()), r && s.set("q", r.toString());
                    return a.href
                }],
                ["cloudinary", function(e) {
                    var t = e.root,
                        n = e.src,
                        i = e.width,
                        r = e.quality,
                        a = ["f_auto", "c_limit", "w_" + i, "q_" + (r || "auto")].join(",") + "/";
                    return "".concat(t).concat(a).concat(_(n))
                }],
                ["akamai", function(e) {
                    var t = e.root,
                        n = e.src,
                        i = e.width;
                    return "".concat(t).concat(_(n), "?imwidth=").concat(i)
                }],
                ["custom", function(e) {
                    var t = e.src;
                    throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                }]
            ]);

            function p(e) {
                return void 0 !== e.default
            }
            var g = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    /*path: "/image",*/
                    loader: "default"
                } || l.imageConfigDefault,
                v = g.deviceSizes,
                x = g.imageSizes,
                j = g.loader,
                b = g.path,
                w = (g.domains, [].concat(r(v), r(x))); 

            function y(e) {
                var t = e.src,
                    n = e.unoptimized,
                    i = e.layout,
                    a = e.width,
                    s = e.quality,
                    c = e.sizes,
                    l = e.loader;
                if (n) return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
                var o = function(e, t, n) {
                        if (n && ("fill" === t || "responsive" === t)) {
                            for (var i, a = /(^|\s)(1?\d?\d)vw/g, s = []; i = a.exec(n); i) s.push(parseInt(i[2]));
                            if (s.length) {
                                var c = .01 * Math.min.apply(Math, s);
                                return {
                                    widths: w.filter((function(e) {
                                        return e >= v[0] * c
                                    })),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: w,
                                kind: "w"
                            }
                        }
                        return "number" !== typeof e || "fill" === t || "responsive" === t ? {
                            widths: v,
                            kind: "w"
                        } : {
                            widths: r(new Set([e, 2 * e].map((function(e) {
                                return w.find((function(t) {
                                    return t >= e
                                })) || w[w.length - 1]
                            })))),
                            kind: "x"
                        }
                    }(a, i, c),
                    d = o.widths,
                    u = o.kind,
                    h = d.length - 1;
                return {
                    sizes: c || "w" !== u ? c : "100vw",
                    srcSet: d.map((function(e, n) {
                        return "".concat(l({
                            src: t,
                            quality: s,
                            width: e
                        }), " ").concat("w" === u ? e : n + 1).concat(u)
                    })).join(", "),
                    src: l({
                        src: t,
                        quality: s,
                        width: d[h]
                    })
                }
            }

            function k(e) {
                return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
            }

            function N(e) {
                var t = m.get(j);
                if (t) return t(h({
                    root: b
                }, e));
                throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "), ". Received: ").concat(j))
            }

            function _(e) {
                return "/" === e[0] ? e.slice(1) : e
            }
            v.sort((function(e, t) {
                return e - t
            })), w.sort((function(e, t) {
                return e - t
            }))
        },
        2167: function(e, t, n) {
            "use strict";
            var i = n(3038);
            t.default = void 0;
            var r, a = (r = n(7294)) && r.__esModule ? r : {
                    default: r
                },
                s = n(1063),
                c = n(4651),
                l = n(7426);
            var o = {};

            function d(e, t, n, i) {
                if (e && s.isLocalURL(t)) {
                    e.prefetch(t, n, i).catch((function(e) {
                        0
                    }));
                    var r = i && "undefined" !== typeof i.locale ? i.locale : e && e.locale;
                    o[t + "%" + n + (r ? "%" + r : "")] = !0
                }
            }
            var u = function(e) {
                var t, n = !1 !== e.prefetch,
                    r = c.useRouter(),
                    u = a.default.useMemo((function() {
                        var t = s.resolveHref(r, e.href, !0),
                            n = i(t, 2),
                            a = n[0],
                            c = n[1];
                        return {
                            href: a,
                            as: e.as ? s.resolveHref(r, e.as) : c || a
                        }
                    }), [r, e.href, e.as]),
                    h = u.href,
                    f = u.as,
                    m = e.children,
                    p = e.replace,
                    g = e.shallow,
                    v = e.scroll,
                    x = e.locale;
                "string" === typeof m && (m = a.default.createElement("a", null, m));
                var j = (t = a.default.Children.only(m)) && "object" === typeof t && t.ref,
                    b = l.useIntersection({
                        rootMargin: "200px"
                    }),
                    w = i(b, 2),
                    y = w[0],
                    k = w[1],
                    N = a.default.useCallback((function(e) {
                        y(e), j && ("function" === typeof j ? j(e) : "object" === typeof j && (j.current = e))
                    }), [j, y]);
                a.default.useEffect((function() {
                    var e = k && n && s.isLocalURL(h),
                        t = "undefined" !== typeof x ? x : r && r.locale,
                        i = o[h + "%" + f + (t ? "%" + t : "")];
                    e && !i && d(r, h, f, {
                        locale: t
                    })
                }), [f, h, k, x, n, r]);
                var _ = {
                    ref: N,
                    onClick: function(e) {
                        t.props && "function" === typeof t.props.onClick && t.props.onClick(e), e.defaultPrevented || function(e, t, n, i, r, a, c, l) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && s.isLocalURL(n)) && (e.preventDefault(), null == c && i.indexOf("#") >= 0 && (c = !1), t[r ? "replace" : "push"](n, i, {
                                shallow: a,
                                locale: l,
                                scroll: c
                            }))
                        }(e, r, h, f, p, g, v, x)
                    },
                    onMouseEnter: function(e) {
                        s.isLocalURL(h) && (t.props && "function" === typeof t.props.onMouseEnter && t.props.onMouseEnter(e), d(r, h, f, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === t.type && !("href" in t.props)) {
                    var A = "undefined" !== typeof x ? x : r && r.locale,
                        E = r && r.isLocaleDomain && s.getDomainLocale(f, A, r && r.locales, r && r.domainLocales);
                    _.href = E || s.addBasePath(s.addLocale(f, A, r && r.defaultLocale))
                }
                return a.default.cloneElement(t, _)
            };
            t.default = u
        },
        7426: function(e, t, n) {
            "use strict";
            var i = n(3038);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !s,
                    l = r.useRef(),
                    o = r.useState(!1),
                    d = i(o, 2),
                    u = d[0],
                    h = d[1],
                    f = r.useCallback((function(e) {
                        l.current && (l.current(), l.current = void 0), n || u || e && e.tagName && (l.current = function(e, t, n) {
                            var i = function(e) {
                                    var t = e.rootMargin || "",
                                        n = c.get(t);
                                    if (n) return n;
                                    var i = new Map,
                                        r = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = i.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return c.set(t, n = {
                                        id: t,
                                        observer: r,
                                        elements: i
                                    }), n
                                }(n),
                                r = i.id,
                                a = i.observer,
                                s = i.elements;
                            return s.set(e, t), a.observe(e),
                                function() {
                                    s.delete(e), a.unobserve(e), 0 === s.size && (a.disconnect(), c.delete(r))
                                }
                        }(e, (function(e) {
                            return e && h(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [n, t, u]);
                return r.useEffect((function() {
                    if (!s && !u) {
                        var e = a.requestIdleCallback((function() {
                            return h(!0)
                        }));
                        return function() {
                            return a.cancelIdleCallback(e)
                        }
                    }
                }), [u]), [f, u]
            };
            var r = n(7294),
                a = n(3447),
                s = "undefined" !== typeof IntersectionObserver;
            var c = new Map
        },
        8997: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toBase64 = function(e) {
                return window.btoa(e)
            }
        },
        5426: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return p
                },
                default: function() {
                    return g
                }
            });
            var i = n(5893),
                r = n(7294),
                a = n(9530),
                s = n(6869),
                c = n(1664);

            function l() {
                var e = (0, r.useRef)(null);
                return (0, r.useEffect)((function() {
                    var t = e.children[0].children[0],
                        n = e.children[1].children[0];
                    a.p8.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: t
                        }
                    }).staggerFrom([t, n], 1, {
                        y: 150,
                        ease: s.Aq.easeOut,
                        delay: .8
                    }, .15)
                }), []), (0, i.jsx)("div", {
                    className: "header-container",
                    children: (0, i.jsxs)("div", {
                        className: "header-wrapper",
                        children: [(0, i.jsxs)("div", {
                            className: "header-title",
                            ref: function(t) {
                                return e = t
                            },
                            children: [(0, i.jsxs)("div", {
                                className: "shift-line",
                                children: [" ", (0, i.jsx)("h1", {
                                    className: "title",
                                    children: "Muhammad"
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "shift-line",
                                children: [" ", (0, i.jsx)("h1", {
                                    className: "title",
                                    children: "Nur Amin"
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "header-info-wrapper",
                            children: [(0, i.jsxs)("div", {
                                className: "navigation-wrapper",
                                children: [(0, i.jsxs)("nav", {
                                    children: [(0, i.jsx)("li", {
                                        children: (0, i.jsx)(c.default, {
                                            href: "/about",
                                            children: (0, i.jsx)("a", {
                                                children: "About"
                                            })
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)(c.default, {
                                            href: "https://blog.chetanverma.com/",
                                            children: (0, i.jsx)("a", {
                                                children: "Blog"
                                            })
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)(c.default, {
                                            href: "https://chetanvermaa.notion.site/Chetan-Verma-ae429939ecb24b10b76abe5d5207d135",
                                            children: (0, i.jsx)("a", {
                                                children: "Resume"
                                            })
                                        })
                                    })]
                                }), (0, i.jsx)("div", {
                                    className: "navigation-email",
                                    children: (0, i.jsx)(c.default, {
                                        href: "mailto:zenhocker@gmail.com",
                                        children: (0, i.jsx)("a", {
                                            children: "zehocker@gmail.com"
                                        })
                                    })
                                }), (0, i.jsxs)("div", {
                                    className: "navigation-content",
                                    children: [(0, i.jsx)("h1", {
                                        children: "/Data Scientist"
                                    }), (0, i.jsx)("h1", {
                                        children: "/Data Analysist"
                                    })]
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "content-wrapper",
                                children: [(0, i.jsxs)("p", {
                                    children: ["I\u2019m a data scientist specializing in analyzing data ", (0, i.jsx)("br", {}), "with exceptional visualization."]
                                }), (0, i.jsxs)("nav", {
                                    children: [(0, i.jsx)("li", {
                                        children: (0, i.jsx)(c.default, {
                                            href: "https://www.linkedin.com/in/mhnramin/",
                                            children: (0, i.jsx)("a", {
                                                target: "_blank",
                                                children: "LinkedIn"
                                            })
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)(c.default, {
                                            href: "https://github.com/mhnramin",
                                            children: (0, i.jsx)("a", {
                                                target: "_blank",
                                                children: "Github"
                                            })
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)(c.default, {
                                            href: "https://medium.com/@mhnramin",
                                            children: (0, i.jsx)("a", {
                                                target: "_blank",
                                                children: "Medium"
                                            })
                                        })
                                    }), (0, i.jsx)("li", {
                                        children: (0, i.jsx)(c.default, {
                                            href: "https://dribbble.com/chetanverma",
                                            children: (0, i.jsx)("a", {
                                                target: "_blank",
                                                children: "Dribbble"
                                            })
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            }
            var o = n(5675);

            function d(e) {
                var t = e.projectName,
                    n = e.projectDesc,
                    l = e.projectLink,
                    d = (0, r.useRef)(null);
                return (0, r.useEffect)((function() {
                    a.p8.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: d
                        }
                    }).to(d.children[0], {
                        opacity: 1,
                        duration: 1,
                        ease: s.Aq.easeOut,
                        delay: Math.random(0, .5)
                    })
                })), (0, i.jsx)(c.default, {
                    href: l,
                    children: (0, i.jsxs)("div", {
                        className: "content-wrapper",
                        ref: function(e) {
                            return d = e
                        },
                        children: [(0, i.jsxs)("div", {
                            className: "content",
                            children: [(0, i.jsx)("h1", {
                                className: "project-item-heading",
                                children: t
                            }), (0, i.jsx)("span", {
                                className: "project-item-subheading",
                                children: n
                            })]
                        }), (0, i.jsx)("div", {
                            className: "icon",
                            children: (0, i.jsx)(o.default, { 
                                src: "/link.svg",
                                alt: "link",
                                width: "64px",
                                height: "64px" 
                            }) 
                        })] 
                    }) 
                })
            }

            function u(e) {
                var t = e.data;
                return t ? (0, i.jsxs)("div", {
                    className: "work-container",
                    children: [(0, i.jsx)("div", {
                        className: "work-wrapper",
                        children: (0, i.jsx)("h1", {
                            children: "Internet Work"
                        })
                    }), (0, i.jsx)("div", {
                        className: "grid-wrapper",
                        children: t && t.map((function(e) {
                            return (0, i.jsx)(d, {
                                projectName: e.title,
                                projectDesc: e.type,
                                projectLink: e.link
                            }, e.id)
                        }))
                    })]
                }) : (0, i.jsx)("div", {
                    className: "loading",
                    children: "Loading..."
                })
            }

            function h() {
                return (0, r.useEffect)((function() {
                    a.p8.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: ".tagline-container"
                        }
                    }).staggerFrom([".tagline-elem"], 1, {
                        y: 150,
                        ease: s.Aq.easeOut
                    }, .15)
                }), []), (0, i.jsx)("div", {
                    className: "tagline-container",
                    children: (0, i.jsxs)("div", {
                        className: "tagline-wrapper",
                        children: [(0, i.jsx)("div", {
                            className: "shift-line",
                            children: (0, i.jsx)("h1", {
                                className: "tagline-elem",
                                children: "Design, strategy, management,"
                            })
                        }), (0, i.jsx)("div", {
                            className: "shift-line",
                            children: (0, i.jsx)("h1", {
                                className: "tagline-elem",
                                children: "creative direction, & development are"
                            })
                        }), (0, i.jsx)("div", {
                            className: "shift-line",
                            children: (0, i.jsx)("h1", {
                                className: "tagline-elem",
                                children: "my specialities, and I have had nearly a"
                            })
                        }), (0, i.jsx)("div", {
                            className: "shift-line",
                            children: (0, i.jsx)("h1", {
                                className: "tagline-elem",
                                children: "decade honing in my skills. In all my"
                            })
                        }), (0, i.jsx)("div", {
                            className: "shift-line",
                            children: (0, i.jsx)("h1", {
                                className: "tagline-elem",
                                children: "projects, I find that efficient work-"
                            })
                        }), (0, i.jsx)("div", {
                            className: "shift-line",
                            children: (0, i.jsx)("h1", {
                                className: "tagline-elem",
                                children: "flows, excellent communication skills"
                            })
                        }), (0, i.jsx)("div", {
                            className: "shift-line",
                            children: (0, i.jsx)("h1", {
                                className: "tagline-elem",
                                children: "and a dose of self-discipline are key -"
                            })
                        }), (0, i.jsx)("div", {
                            className: "shift-line",
                            children: (0, i.jsx)("h1", {
                                className: "tagline-elem",
                                children: "a strong work ethic has driven my"
                            })
                        }), (0, i.jsx)("div", {
                            className: "shift-line",
                            children: (0, i.jsx)("h1", {
                                className: "tagline-elem",
                                children: "success in a myriad of specialties."
                            })
                        })]
                    })
                })
            }
            var f = n(9875),
                m = n(9008),
                p = !0;

            function g(e) {
                var t = e.allProjects;
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)(m.default, {
                        children: [(0, i.jsx)("title", {
                            children: "Muhammad Nur Amin"
                        }), (0, i.jsx)("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width"
                        }), (0, i.jsx)("meta", {
                            name: "og:title",
                            property: "og:title",
                            content: "Muhammad Nur Amin"
                        }), (0, i.jsx)("meta", {
                            name: "og:description",
                            property: "og:description",
                            content: "I'm Muhammad Nur Amin, a Data Scientist\n& ui designer working in New Delhi, India.\nI create websites, brand identities,\npackaging, and everything in-between."
                        }), (0, i.jsx)("meta", {
                            property: "og:site_name",
                            content: "Muhammad Nur Amin"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "I'm Muhammad Nur Amin, a Data Scientist\n& ui designer working in New Delhi, India.\nI create websites, brand identities,\npackaging, and everything in-between.\n"
                        })]
                    }), (0, i.jsx)(l, {}), (0, i.jsx)(u, {
                        data: t
                    }), (0, i.jsx)(h, {}), (0, i.jsx)(f.Z, {})]
                })
            }
        },
        8581: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(5426)
            }])
        },
        5809: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.imageConfigDefault = t.VALID_LOADERS = void 0;
            t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"];
            /* t.imageConfigDefault = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/image",
                loader: "default",
                domains: [],
                disableStaticImages: !1,
                minimumCacheTTL: 60
            } */
        },
        9008: function(e, t, n) {
            e.exports = n(639)
        },
        5675: function(e, t, n) {
            e.exports = n(9917)
        },
        1664: function(e, t, n) {
            e.exports = n(2167)
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() {
            return t = 8581, e(e.s = t);
            var t
        }));
        var t = e.O();
        _N_E = t
    }
]);