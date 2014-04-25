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
                var speedFactor = 0.4,
                    shift = 0,
                    firstTop = elem.offset().top;
                $w.scroll(function() {
                    var pos = $w.scrollTop();
                    if (pos < $w.height()) {
                        var blur = Math.abs(pos) / 20,
                            blurStr = ['blur(', blur, 'px)'].join('');
                        elem.css({
                            '-webkit-filter': blurStr,
                            '-moz-filter': blurStr,
                            '-o-filter': blurStr,
                            '-ms-filter': blurStr,
                            'filter': blurStr
                        });
                    }
                });
            }
        };
    });

    module.directive('parallax', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var speedFactor = 0.4,
                    shift = 0,
                    firstTop = elem.offset().top;

                function update() {
                    var top = elem.offset().top,
                        height = elem.height(),
                        pos = $w.scrollTop(),
                        windowHeight = $w.height();
                    if (top + height < pos || top > pos + windowHeight) return;
                    var ypos = (Math.round((firstTop - pos) * speedFactor) + shift);
                    elem.css({
                        'background-position': ['50% ', ypos, 'px'].join('')
                    });
                }
                $w.scroll(update).resize(update);
            }
        }
    });

    module.directive('loader', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var $curtain = elem.closest('.curtain');
                scope.$on('show-loader', function(e, sel) {
                    $curtain.children().hide();
                    elem.show();
                    $curtain.show();
                    setTimeout(function() {
                        $curtain.addClass('active');
                    }, 40);
                });
            }
        };
    });

    module.directive('successMsg', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var $curtain = elem.closest('.curtain');
                scope.$on('show-success', function(e, sel) {
                    $curtain.children().hide();
                    elem.show();
                    $curtain.show();
                    setTimeout(function() {
                        $curtain.addClass('active');
                    }, 40);
                });
            }
        };
    });

    module.directive('successMsg', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {
                var $curtain = elem.closest('.curtain');
                elem.click(function(e) {
                    e.preventDefault();
                    $curtain.removeClass('active');
                    setTimeout(function() {
                        $curtain.children().hide();
                        $curtain.hide();
                    }, 510);
                });
            }
        };
    });

})(window, document, navigator);
