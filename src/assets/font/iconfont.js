!(function (e) {
  var t,
    n,
    o,
    i,
    c,
    d,
    a =
      '<svg><symbol id="icon-xingmingyonghumingnicheng" viewBox="0 0 1027 1024"><path d="M608.176278 506.350592a195.445801 195.445801 0 1 0-189.106372 0C292.560414 546.44715 200.911139 664.730002 200.911139 804.436671h39.086502c0-151.096377 122.522429-273.618806 273.618806-273.618806S787.235253 653.340294 787.235253 804.436671h39.086502c0-139.706668-91.649276-257.989521-218.145477-298.086079z m-250.91913-170.978528A156.359299 156.359299 0 1 1 513.616447 491.731363a156.385879 156.385879 0 0 1-156.359299-156.359299z" fill="#bfbfbf" ></path><path d="M983.850592 313.390059A511.938819 511.938819 0 1 0 1023.96044 512.052091a508.616266 508.616266 0 0 0-40.109848-198.662032zM513.616447 969.235252C261.527778 969.235252 56.433286 764.140759 56.433286 512.052091S261.527778 54.86893 513.616447 54.86893s457.183161 205.094492 457.183161 457.183161-205.094492 457.183161-457.183161 457.183161z" fill="#bfbfbf" ></path></symbol></svg>',
    l = (l = document.getElementsByTagName('script'))[
      l.length - 1
    ].getAttribute('data-injectcss');
  if (l && !e.__iconfont__svg__cssinject__) {
    e.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  function s() {
    c || ((c = !0), o());
  }
  (t = function () {
    var e, t, n;
    ((n = document.createElement('div')).innerHTML = a),
      (a = null),
      (t = n.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (e = t),
        (n = document.body).firstChild
          ? (t = n.firstChild).parentNode.insertBefore(e, t)
          : n.appendChild(e));
  }),
    document.addEventListener
      ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
        ? setTimeout(t, 0)
        : ((n = function () {
            document.removeEventListener('DOMContentLoaded', n, !1), t();
          }),
          document.addEventListener('DOMContentLoaded', n, !1))
      : document.attachEvent &&
        ((o = t),
        (i = e.document),
        (c = !1),
        (d = function () {
          try {
            i.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(d, 50);
          }
          s();
        })(),
        (i.onreadystatechange = function () {
          'complete' == i.readyState && ((i.onreadystatechange = null), s());
        }));
})(window);
