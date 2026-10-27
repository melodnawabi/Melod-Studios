/* @ds-bundle: {"format":4,"namespace":"MelodStudioDesignSystem_9dfadf","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Cover","sourcePath":"components/brand/Cover.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"StatTile","sourcePath":"components/content/StatTile.jsx"},{"name":"TrustRow","sourcePath":"components/content/TrustRow.jsx"},{"name":"FormField","sourcePath":"components/forms/FormField.jsx"},{"name":"Badge","sourcePath":"components/labels/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"TabStrip","sourcePath":"components/navigation/TabStrip.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"bba23eb80314","components/brand/Cover.jsx":"b54045897ea4","components/content/Card.jsx":"6999aa0d4429","components/content/StatTile.jsx":"edba10c871c7","components/content/TrustRow.jsx":"57153d78c54e","components/forms/FormField.jsx":"a79a1727f684","components/labels/Badge.jsx":"f990c1eee999","components/labels/Eyebrow.jsx":"9199ab4bf7ce","components/navigation/TabStrip.jsx":"51e0c78d861a","ui_kits/remix-lab/Hero.jsx":"e13e76ed7e51","ui_kits/remix-lab/QuoteQuiz.jsx":"82507eefe7f6","ui_kits/remix-lab/Sections.jsx":"79d55c4aaf8e","ui_kits/remix-lab/Shell.jsx":"b20fecb25c1a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MelodStudioDesignSystem_9dfadf = window.MelodStudioDesignSystem_9dfadf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  variant = 'primary',
  href,
  children,
  icon,
  disabled,
  onClick,
  type = 'button',
  style,
  ...rest
}) {
  const cls = 'ms-btn ms-btn--' + variant;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, icon, children);
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    className: cls,
    href: href,
    onClick: onClick,
    style: style
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: style
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Cover.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Cover({
  title = ['Melod', 'Studio'],
  tagline = 'Bold layouts for Waterloo Region businesses.',
  style
}) {
  const card = {
      rx: 12
    },
    bar = {
      rx: 4
    };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 960,
      height: 340,
      overflow: 'hidden',
      background: 'var(--ground)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "960",
    height: "340",
    viewBox: "0 0 960 340",
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      left: 0,
      top: 0
    }
  }, /*#__PURE__*/React.createElement("rect", {
    fill: "var(--violet)",
    x: "792",
    y: "0",
    width: "168",
    height: "340"
  }), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--magenta)"
  }, card, {
    x: "704",
    y: "24",
    width: "120",
    height: "96"
  })), /*#__PURE__*/React.createElement("rect", {
    fill: "var(--ink)",
    x: "744",
    y: "272",
    width: "48",
    height: "48"
  }), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--surface)"
  }, card, {
    x: "512",
    y: "40",
    width: "264",
    height: "72"
  })), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--magenta)"
  }, bar, {
    x: "536",
    y: "60",
    width: "96",
    height: "8"
  })), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--line)"
  }, bar, {
    x: "536",
    y: "80",
    width: "176",
    height: "8"
  })), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--surface-raised)"
  }, card, {
    x: "560",
    y: "136",
    width: "264",
    height: "72"
  })), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--magenta)"
  }, bar, {
    x: "584",
    y: "156",
    width: "96",
    height: "8"
  })), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--line)"
  }, bar, {
    x: "584",
    y: "176",
    width: "140",
    height: "8"
  })), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--surface)"
  }, card, {
    x: "608",
    y: "232",
    width: "264",
    height: "72"
  })), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--magenta)"
  }, bar, {
    x: "632",
    y: "252",
    width: "96",
    height: "8"
  })), /*#__PURE__*/React.createElement("rect", _extends({
    fill: "var(--line)"
  }, bar, {
    x: "632",
    y: "272",
    width: "188",
    height: "8"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 48,
      bottom: 40,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 120,
      lineHeight: .95,
      letterSpacing: '-.02em',
      color: 'var(--ink)',
      margin: 0
    }
  }, title[0], /*#__PURE__*/React.createElement("br", null), title[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      font: '500 14px/20px var(--font-sans)',
      color: 'var(--ink-muted)',
      margin: '16px 0 0'
    }
  }, tagline)));
}
Object.assign(__ds_scope, { Cover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Cover.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function Card({
  title,
  children,
  bar = true,
  lines,
  style
}) {
  const sk = lines || (!title && !children ? ['80%', '55%'] : null);
  return /*#__PURE__*/React.createElement("div", {
    className: "ms-card",
    style: style
  }, bar && /*#__PURE__*/React.createElement("div", {
    className: "ms-card__bar"
  }), title && /*#__PURE__*/React.createElement("h3", null, title), typeof children === 'string' ? /*#__PURE__*/React.createElement("p", null, children) : children, sk && sk.map((w, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "ms-card__line",
    style: {
      width: w
    }
  })));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/StatTile.jsx
try { (() => {
function StatTile({
  value,
  label,
  delta,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "ms-stat",
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-stat__v"
  }, value), /*#__PURE__*/React.createElement("div", {
    className: "ms-stat__l"
  }, label), delta && /*#__PURE__*/React.createElement("div", {
    className: "ms-stat__d"
  }, delta));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatTile.jsx", error: String((e && e.message) || e) }); }

// components/content/TrustRow.jsx
try { (() => {
function TrustRow({
  facts = [],
  avatars,
  count,
  countLabel,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      ...style
    }
  }, facts.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "ms-trust"
  }, facts.slice(0, 3).map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i
  }, f))), avatars && /*#__PURE__*/React.createElement("div", {
    className: "ms-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ms-avatars"
  }, avatars.map((a, i) => /*#__PURE__*/React.createElement("i", {
    key: i,
    style: a.startsWith('url') || a.startsWith('http') ? {
      backgroundImage: a.startsWith('url') ? a : 'url(' + a + ')'
    } : {
      background: a
    }
  }))), (count || countLabel) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/22px var(--font-sans)',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("b", null, count), " ", countLabel)));
}
Object.assign(__ds_scope, { TrustRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TrustRow.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormField.jsx
try { (() => {
function FormField({
  label,
  helper,
  id,
  type = 'text',
  value,
  defaultValue,
  placeholder,
  onChange,
  style
}) {
  const fid = id || 'f-' + String(label || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return /*#__PURE__*/React.createElement("div", {
    className: "ms-field",
    style: style
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: fid
  }, label), /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: type,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    onChange: onChange
  }), helper && /*#__PURE__*/React.createElement("small", null, helper));
}
Object.assign(__ds_scope, { FormField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormField.jsx", error: String((e && e.message) || e) }); }

// components/labels/Badge.jsx
try { (() => {
function Badge({
  variant = 'pill',
  dot = true,
  children,
  style
}) {
  if (variant === 'tag') return /*#__PURE__*/React.createElement("span", {
    className: "ms-badge",
    style: style
  }, children);
  return /*#__PURE__*/React.createElement("span", {
    className: "ms-pill",
    style: style
  }, dot && /*#__PURE__*/React.createElement("span", {
    className: "ms-pill__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Badge.jsx", error: String((e && e.message) || e) }); }

// components/labels/Eyebrow.jsx
try { (() => {
function Eyebrow({
  parts,
  children,
  as: Tag = 'p',
  style
}) {
  const text = parts ? parts.join(' \u2022 ') : children;
  return /*#__PURE__*/React.createElement(Tag, {
    className: "ms-eyebrow",
    style: style
  }, text);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabStrip.jsx
try { (() => {
function TabStrip({
  items = [],
  current = 0,
  onSelect,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "ms-tabs",
    style: {
      '--ms-tab-count': items.length,
      ...style
    }
  }, items.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    className: "ms-tab",
    "aria-current": i === current ? 'true' : undefined,
    onClick: () => onSelect && onSelect(i)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ms-tab__n"
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    className: "ms-tab__t"
  }, t))));
}
Object.assign(__ds_scope, { TabStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/remix-lab/Hero.jsx
try { (() => {
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Home cleaning \u2022 Waterloo Region"), /*#__PURE__*/React.createElement("h1", {
    className: "d1"
  }, "Your price in 30 seconds. Your home clean by Friday."), /*#__PURE__*/React.createElement("p", {
    className: "lead"
  }, "Answer three quick questions and see an instant, flat-rate quote. No phone tag, no surprise add-ons."), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-a",
    href: "#quote",
    onClick: onCta
  }, "Get my price"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-o",
    href: "#"
  }, "See what's included")), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Bonded + insured"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Same cleaner every visit"), /*#__PURE__*/React.createElement("span", {
    className: "chip"
  }, "Eco products"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-media"
  }, /*#__PURE__*/React.createElement("div", {
    className: "m-mock"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      fontSize: 11
    }
  }, "Step 2 of 3"), /*#__PURE__*/React.createElement("div", {
    className: "bar",
    style: {
      width: '66%',
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("b", null, "How often?"), /*#__PURE__*/React.createElement("div", {
    className: "tile"
  }, /*#__PURE__*/React.createElement("b", null, "Biweekly"), /*#__PURE__*/React.createElement("span", {
    className: "small muted"
  }, "Save 15%")), /*#__PURE__*/React.createElement("div", {
    className: "tile"
  }, /*#__PURE__*/React.createElement("b", null, "Monthly"), /*#__PURE__*/React.createElement("span", {
    className: "small muted"
  }, "Save 10%")), /*#__PURE__*/React.createElement("div", {
    className: "mbtn"
  }, "Next")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/remix-lab/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/remix-lab/QuoteQuiz.jsx
try { (() => {
const QUIZ_SIZES = [["condo", "Condo or apartment", "from $120", 120], ["town", "Townhouse", "from $150", 150], ["det", "Detached home", "from $190", 190], ["large", "Large home (3,000+ sq ft)", "from $240", 240]];
const QUIZ_FREQS = [["once", "One-time", "Full price", 1], ["month", "Monthly", "Save 10%", 0.9], ["biweek", "Every 2 weeks", "Save 15%", 0.85], ["week", "Weekly", "Save 20%", 0.8]];
const QUIZ_EXTRAS = [["oven", "Inside the oven", "+ $30", 30], ["fridge", "Inside the fridge", "+ $30", 30], ["windows", "Interior windows", "+ $45", 45], ["pets", "Pet hair deep clean", "+ $25", 25]];
function QuizOpts({
  list,
  isOn,
  pick
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "t8-opts"
  }, list.map(o => /*#__PURE__*/React.createElement("button", {
    key: o[0],
    type: "button",
    className: 't8-opt' + (isOn(o[0]) ? ' on' : ''),
    onClick: () => pick(o[0])
  }, o[1], /*#__PURE__*/React.createElement("span", null, o[2]))));
}
function QuoteQuiz() {
  const [s, set] = React.useState({
    step: 0,
    size: null,
    freq: null,
    extras: []
  });
  const sz = QUIZ_SIZES.find(x => x[0] === s.size),
    fq = QUIZ_FREQS.find(x => x[0] === s.freq);
  const add = QUIZ_EXTRAS.filter(x => s.extras.includes(x[0])).reduce((a, x) => a + x[3], 0);
  const price = sz && fq ? Math.round(sz[3] * fq[3] + add) : 0;
  const label = ["Step 1 of 3", "Step 2 of 3", "Step 3 of 3", "Your quote"][s.step];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec",
    id: "quote",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "t8-quiz"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono small muted"
  }, label), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-o",
    type: "button",
    style: {
      minHeight: 44,
      padding: '0 16px'
    },
    onClick: () => set({
      ...s,
      step: Math.max(0, s.step - 1)
    })
  }, "Back")), /*#__PURE__*/React.createElement("div", {
    className: "t8-prog",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      width: (s.step + 1) / 4 * 100 + '%'
    }
  })), s.step === 0 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "d3",
    style: {
      marginBottom: 16
    }
  }, "What kind of home?"), /*#__PURE__*/React.createElement(QuizOpts, {
    list: QUIZ_SIZES,
    isOn: id => id === s.size,
    pick: id => set({
      ...s,
      size: id,
      step: 1
    })
  })), s.step === 1 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "d3",
    style: {
      marginBottom: 16
    }
  }, "How often should we come?"), /*#__PURE__*/React.createElement(QuizOpts, {
    list: QUIZ_FREQS,
    isOn: id => id === s.freq,
    pick: id => set({
      ...s,
      freq: id,
      step: 2
    })
  })), s.step === 2 && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "d3",
    style: {
      marginBottom: 16
    }
  }, "Any extras? Pick as many as you like."), /*#__PURE__*/React.createElement(QuizOpts, {
    list: QUIZ_EXTRAS,
    isOn: id => s.extras.includes(id),
    pick: id => set({
      ...s,
      extras: s.extras.includes(id) ? s.extras.filter(e => e !== id) : [...s.extras, id]
    })
  }), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-a",
    type: "button",
    style: {
      marginTop: 18
    },
    onClick: () => set({
      ...s,
      step: 3
    })
  }, "See my price")), s.step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow"
  }, "Your flat-rate quote"), /*#__PURE__*/React.createElement("div", {
    className: "t8-price"
  }, "$", price), /*#__PURE__*/React.createElement("p", {
    className: "muted",
    style: {
      margin: 0
    }
  }, "per visit \xB7 ", sz ? sz[1] : '', fq ? ' · ' + fq[1] : '', " \xB7 before HST"), /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, /*#__PURE__*/React.createElement("a", {
    className: "btn btn-a",
    href: "#"
  }, "Book this clean"), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-o",
    type: "button",
    onClick: () => set({
      step: 0,
      size: null,
      freq: null,
      extras: []
    })
  }, "Start over")), /*#__PURE__*/React.createElement("p", {
    className: "small muted",
    style: {
      margin: 0
    }
  }, "We'll confirm by text. Cancel or reschedule free up to 24 hours before.")))));
}
Object.assign(window, {
  QuoteQuiz
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/remix-lab/QuoteQuiz.jsx", error: String((e && e.message) || e) }); }

// ui_kits/remix-lab/Sections.jsx
try { (() => {
function HowBand() {
  const steps = [["01", "Get your price", "Three taps, instant flat rate."], ["02", "Pick a time", "Mornings, afternoons or Saturdays."], ["03", "Come home to clean", "Same vetted cleaner every visit."]];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec band"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap g c3"
  }, steps.map(([n, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mono small"
  }, n), /*#__PURE__*/React.createElement("b", {
    className: "d3"
  }, t), /*#__PURE__*/React.createElement("span", {
    className: "small"
  }, d)))));
}
function Reviews() {
  const r = [["Booked in two minutes, and the baseboards have never looked better.", "Biweekly"], ["The quote was exactly what I paid. Rare these days.", "Move-out"], ["Two dogs, one cat, zero fur left behind.", "Monthly"]];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap g c3"
  }, r.map(([q, k]) => /*#__PURE__*/React.createElement("figure", {
    key: k,
    className: "card",
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "stars",
    "aria-label": "5 stars"
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0
    }
  }, "\"", q, "\""), /*#__PURE__*/React.createElement("figcaption", {
    className: "small muted"
  }, "[Client first name] \xB7 ", k)))));
}
Object.assign(window, {
  HowBand,
  Reviews
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/remix-lab/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/remix-lab/Shell.jsx
try { (() => {
function MenuIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "ico",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 7h16M4 12h16M4 17h16"
  }));
}
function Nav({
  brand,
  links,
  cta,
  onCta
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "wrap nav"
  }, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "#"
  }, brand), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    "aria-label": "Main"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#"
  }, l))), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-a nav-cta",
    href: "#quote",
    onClick: onCta
  }, cta), /*#__PURE__*/React.createElement("button", {
    className: "menu-btn",
    type: "button",
    "aria-label": "Open menu"
  }, /*#__PURE__*/React.createElement(MenuIcon, null)));
}
function Footer({
  brand,
  contact,
  legal
}) {
  return /*#__PURE__*/React.createElement("footer", {
    className: "wrap foot",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "#"
  }, brand), /*#__PURE__*/React.createElement("span", {
    className: "small"
  }, contact), /*#__PURE__*/React.createElement("span", {
    className: "legal"
  }, legal));
}
Object.assign(window, {
  Nav,
  Footer,
  MenuIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/remix-lab/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Cover = __ds_scope.Cover;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatTile = __ds_scope.StatTile;

__ds_ns.TrustRow = __ds_scope.TrustRow;

__ds_ns.FormField = __ds_scope.FormField;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.TabStrip = __ds_scope.TabStrip;

})();
