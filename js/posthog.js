window.self === window.top &&
    (!(function (t, e) {
        var o, r, s, a;
        e.__SV ||
            ((window.posthog = e),
            (e._i = []),
            (e.init = function (p, n, i) {
                function c(t, e) {
                    var o = e.split(".");
                    2 == o.length && ((t = t[o[0]]), (e = o[1])),
                        (t[e] = function () {
                            t.push([e].concat(Array.prototype.slice.call(arguments, 0)));
                        });
                }
                ((s = t.createElement("script")).type = "text/javascript"), (s.async = !0), (s.src = n.api_host + "/static/array.js"), (a = t.getElementsByTagName("script")[0]).parentNode.insertBefore(s, a);
                var u = e;
                for (
                    void 0 !== i ? (u = e[i] = []) : (i = "posthog"),
                        u.people = u.people || [],
                        u.toString = function (t) {
                            var e = "posthog";
                            return "posthog" !== i && (e += "." + i), t || (e += " (stub)"), e;
                        },
                        u.people.toString = function () {
                            return u.toString(1) + ".people (stub)";
                        },
                        o = "capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys onSessionId".split(
                            " "
                        ),
                        r = 0;
                    r < o.length;
                    r++
                )
                    c(u, o[r]);
                e._i.push([p, n, i]);
            }),
            (e.__SV = 1));
    })(document, window.posthog || []),
    posthog.init("phc_hVOrSUy8hzjrqbcAPo17E7EwdAwkutiFHo1roNQudYw", { api_host: "https://app.posthog.com" }));

      // Retrieve or generate a unique visitor ID
      var visitorId = getCookie('visitor_id');
      if (!visitorId) {
        visitorId = generateFingerprint();
        setCookie('visitor_id', visitorId, 365);
      }
  
      console.log("Visitor ID: " + visitorId);
    posthog.identify(visitorId);
