(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [521], {
        9875: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return c
                }
            });
            var i = t(5893),
                a = t(7294),
                r = t(1664),
                s = t(9530),
                l = t(6869);

            function c() {
                return (0, a.useEffect)((function() {
                    s.p8.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: ".content-wrapper"
                        }
                    }).staggerFrom([".text-anim-one,.text-anim-two"], 1, {
                        y: 150,
                        ease: l.Aq.easeOut,
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
                                    children: "Let's talk about your project."
                                })
                            }), (0, i.jsx)("div", {
                                className: "shift-line",
                                children: (0, i.jsx)(r.default, {
                                    href: "mailto:hello@chetanverma.com",
                                    children: (0, i.jsx)("h1", {
                                        className: "text-anim-two",
                                        children: "hello@chetanverma.com "
                                    })
                                })
                            }), (0, i.jsxs)("nav", {
                                children: [(0, i.jsx)("li", {
                                    children: (0, i.jsx)(r.default, {
                                        href: "https://www.linkedin.com/in/chetanverma7/",
                                        children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            children: "LinkedIn"
                                        })
                                    })
                                }), (0, i.jsx)("li", {
                                    children: (0, i.jsx)(r.default, {
                                        href: "https://github.com/chetanverma16",
                                        children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            children: "Github"
                                        })
                                    })
                                }), (0, i.jsx)("li", {
                                    children: (0, i.jsx)(r.default, {
                                        href: "https://dribbble.com/chetanverma",
                                        children: (0, i.jsx)("a", {
                                            target: "_blank",
                                            children: "Dribbble"
                                        })
                                    })
                                }), (0, i.jsx)("li", {
                                    children: (0, i.jsx)(r.default, {
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
        2167: function(e, n, t) {
            "use strict";
            var i = t(3038);
            n.default = void 0;
            var a, r = (a = t(7294)) && a.__esModule ? a : {
                    default: a
                },
                s = t(1063),
                l = t(4651),
                c = t(7426);
            var o = {};

            function d(e, n, t, i) {
                if (e && s.isLocalURL(n)) {
                    e.prefetch(n, t, i).catch((function(e) {
                        0
                    }));
                    var a = i && "undefined" !== typeof i.locale ? i.locale : e && e.locale;
                    o[n + "%" + t + (a ? "%" + a : "")] = !0
                }
            }
            var u = function(e) {
                var n, t = !1 !== e.prefetch,
                    a = l.useRouter(),
                    u = r.default.useMemo((function() {
                        var n = s.resolveHref(a, e.href, !0),
                            t = i(n, 2),
                            r = t[0],
                            l = t[1];
                        return {
                            href: r,
                            as: e.as ? s.resolveHref(a, e.as) : l || r
                        }
                    }), [a, e.href, e.as]),
                    h = u.href,
                    f = u.as,
                    m = e.children,
                    p = e.replace,
                    v = e.shallow,
                    x = e.scroll,
                    g = e.locale;
                "string" === typeof m && (m = r.default.createElement("a", null, m));
                var j = (n = r.default.Children.only(m)) && "object" === typeof n && n.ref,
                    b = c.useIntersection({
                        rootMargin: "200px"
                    }),
                    w = i(b, 2),
                    N = w[0],
                    y = w[1],
                    k = r.default.useCallback((function(e) {
                        N(e), j && ("function" === typeof j ? j(e) : "object" === typeof j && (j.current = e))
                    }), [j, N]);
                r.default.useEffect((function() {
                    var e = y && t && s.isLocalURL(h),
                        n = "undefined" !== typeof g ? g : a && a.locale,
                        i = o[h + "%" + f + (n ? "%" + n : "")];
                    e && !i && d(a, h, f, {
                        locale: n
                    })
                }), [f, h, y, g, t, a]);
                var _ = {
                    ref: k,
                    onClick: function(e) {
                        n.props && "function" === typeof n.props.onClick && n.props.onClick(e), e.defaultPrevented || function(e, n, t, i, a, r, l, c) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var n = e.currentTarget.target;
                                return n && "_self" !== n || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && s.isLocalURL(t)) && (e.preventDefault(), null == l && i.indexOf("#") >= 0 && (l = !1), n[a ? "replace" : "push"](t, i, {
                                shallow: r,
                                locale: c,
                                scroll: l
                            }))
                        }(e, a, h, f, p, v, x, g)
                    },
                    onMouseEnter: function(e) {
                        s.isLocalURL(h) && (n.props && "function" === typeof n.props.onMouseEnter && n.props.onMouseEnter(e), d(a, h, f, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === n.type && !("href" in n.props)) {
                    var I = "undefined" !== typeof g ? g : a && a.locale,
                        E = a && a.isLocaleDomain && s.getDomainLocale(f, I, a && a.locales, a && a.domainLocales);
                    _.href = E || s.addBasePath(s.addLocale(f, I, a && a.defaultLocale))
                }
                return r.default.cloneElement(n, _)
            };
            n.default = u
        },
        7426: function(e, n, t) {
            "use strict";
            var i = t(3038);
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.useIntersection = function(e) {
                var n = e.rootMargin,
                    t = e.disabled || !s,
                    c = a.useRef(),
                    o = a.useState(!1),
                    d = i(o, 2),
                    u = d[0],
                    h = d[1],
                    f = a.useCallback((function(e) {
                        c.current && (c.current(), c.current = void 0), t || u || e && e.tagName && (c.current = function(e, n, t) {
                            var i = function(e) {
                                    var n = e.rootMargin || "",
                                        t = l.get(n);
                                    if (t) return t;
                                    var i = new Map,
                                        a = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var n = i.get(e.target),
                                                    t = e.isIntersecting || e.intersectionRatio > 0;
                                                n && t && n(t)
                                            }))
                                        }), e);
                                    return l.set(n, t = {
                                        id: n,
                                        observer: a,
                                        elements: i
                                    }), t
                                }(t),
                                a = i.id,
                                r = i.observer,
                                s = i.elements;
                            return s.set(e, n), r.observe(e),
                                function() {
                                    s.delete(e), r.unobserve(e), 0 === s.size && (r.disconnect(), l.delete(a))
                                }
                        }(e, (function(e) {
                            return e && h(e)
                        }), {
                            rootMargin: n
                        }))
                    }), [t, n, u]);
                return a.useEffect((function() {
                    if (!s && !u) {
                        var e = r.requestIdleCallback((function() {
                            return h(!0)
                        }));
                        return function() {
                            return r.cancelIdleCallback(e)
                        }
                    }
                }), [u]), [f, u]
            };
            var a = t(7294),
                r = t(3447),
                s = "undefined" !== typeof IntersectionObserver;
            var l = new Map
        },
        5288: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return o
                }
            });
            var i = t(5893),
                a = t(9875),
                r = t(9530),
                s = t(6869),
                l = t(7294),
                c = t(9008);

            function o() {
                return (0, l.useEffect)((function() {
                    r.p8.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: ".title-wrapper"
                        }
                    }).staggerFrom([".title-one,.title-two"], 1, {
                        y: 150,
                        ease: s.Aq.easeOut
                    }, .15), r.p8.timeline({
                        paused: !0,
                        scrollTrigger: {
                            trigger: ".content-wrapper"
                        }
                    }).staggerFrom([".content-elem"], 1, {
                        y: 150,
                        ease: s.Aq.easeOut,
                        delay: .5
                    }, .15)
                }), []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(c.default, {
                        children: [(0, i.jsx)("title", {
                            children: "About"
                        }), (0, i.jsx)("meta", {
                            name: "viewport",
                            content: "initial-scale=1.0, width=device-width"
                        }), (0, i.jsx)("meta", {
                            name: "og:title",
                            property: "og:title",
                            content: "Chetan Verma"
                        }), (0, i.jsx)("meta", {
                            name: "og:description",
                            property: "og:description",
                            content: "I'm Chetan Verma, a full-stack web developer\n& ui designer working in New Delhi, India.\nI create websites, brand identities,\npackaging, and everything in-between."
                        }), (0, i.jsx)("meta", {
                            property: "og:site_name",
                            content: "Chetan Verma"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "I'm Chetan Verma, a full-stack web developer\n& ui designer working in New Delhi, India.\nI create websites, brand identities,\npackaging, and everything in-between.\n"
                        })]
                    }), (0, i.jsx)("div", {
                        className: "about-container",
                        children: (0, i.jsxs)("div", {
                            className: "about-wrapper",
                            children: [(0, i.jsxs)("div", {
                                className: "title-wrapper",
                                children: [(0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("div", {
                                        className: "title title-one",
                                        children: "Hi, hello and"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("div", {
                                        className: "title title-two",
                                        children: "welcome stranger"
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "content-wrapper",
                                children: [(0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "I'm Chetan Verma, a full-stack web developer"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "& ui designer working in New Delhi, India."
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "I create websites, brand identities,"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "packaging, and everything in-between."
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "I'm passionate about building & designing"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "delightful experiences with the combination"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "of business, marketing and UI/UX"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "design to make customers and users"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "satisfied when theyre using products"
                                    })
                                }), (0, i.jsx)("div", {
                                    className: "shift-line",
                                    children: (0, i.jsx)("h1", {
                                        className: "content-elem",
                                        children: "and services online."
                                    })
                                })]
                            })]
                        })
                    }), (0, i.jsx)(a.Z, {})]
                })
            }
        },
        8961: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
                return t(5288)
            }])
        },
        9008: function(e, n, t) {
            e.exports = t(639)
        },
        1664: function(e, n, t) {
            e.exports = t(2167)
        }
    },
    function(e) {
        e.O(0, [774, 888, 179], (function() {
            return n = 8961, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);