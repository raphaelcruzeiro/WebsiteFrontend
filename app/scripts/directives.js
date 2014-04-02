"use strict";

(function(w, d, n) {
    var module = angular.module('websiteFrontendApp'),
        jq = angular.element,
        $body = jq('body'),
        $w = jq(w);

    module.directive('headline', function() {
        return {
            restrict: 'C',
            link: function(scope, elem) {
                $w.scroll(function() {
                    var pos = $w.scrollTop();
                    if (pos < $w.height()) {
                        var blur = Math.abs(pos) / 20,
                            blurStr = ['blur(', blur, 'px)'].join('')
                        elem.css({
                            '-webkit-filter' : blurStr,
                            '-moz-filter' : blurStr,
                            '-o-filter' : blurStr,
                            '-ms-filter' : blurStr,
                            'filter' : blurStr
                        });
                    }
                });
            }
        };
    });

})(window, document, navigator);
