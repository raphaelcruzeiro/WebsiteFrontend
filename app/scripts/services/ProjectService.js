'use strict';

(function() {
    var module = angular.module('services.Projects', []);
    module.factory('ProjectService', function($q, $http) {
        return {
            getProjects: function() {
                var deffered = $q.defer(),
                    promises = [],
                    projects = [
                        {
                            title: 'jQuery Notebook',
                            description: '<p>A simple, clean and elegant Medium-like WYSIWYG text editor for web applications on the form of a jQuery plugin.</p><p>Check out the demo <a href="http://raphaelcruzeiro.github.io/jquery-notebook/" target="_blank">here</a>.',
                            url: 'https://github.com/raphaelcruzeiro/jquery-notebook',
                            github: {
                                id: 'jquery-notebook',
                                user: 'raphaelcruzeiro'
                            }
                        },
                        {
                            title: 'Webimage',
                            description: '<p>A simple command line program that uses webkit to render a preview image from a web page. A live demo that has been wrapped with a web interface can be found <a href="http://previewtool.raphaelcruzeiro.com/" target="_blank">here.</a></p>',
                            url: 'https://github.com/raphaelcruzeiro/webimage',
                            github: {
                                id: 'webimage',
                                user: 'raphaelcruzeiro'
                            }
                        },
                        {
                            title: 'Cachola',
                            description: '<p>A virtual blackboard and social tool where you can place and annotate content from all over the web and share it amongst your peers.</p><p>This app relies heavily on modern Javascript and it\'s built with the new AngularJS framework.</p><p><a href="https://vimeo.com/79506448" class="video">See a demo video here</a></p>',
                            url: 'http://cacho.la/'
                        },
                        {
                            title: 'iPad PDF Annotator',
                            description: '<p>A proof of concept for an iOS PDF annotation tool developed for the first iPad back in 2011.</p><p>This was a pet project that I used to get up to speed with iOS development and explore some of Apple\'s low level APIs like CoreGraphics.</p>',
                            url: 'https://github.com/raphaelcruzeiro/PdfAnnotator-for-iPad',
                            github: {
                                id: 'PdfAnnotator-for-iPad',
                                user: 'raphaelcruzeiro'
                            }
                        },
                        {
                            title: 'Lisbon Startups',
                            description: '<p>An interactive map of the Lisbon startup scene.</p>',
                            url: 'http://lisbonstartups.org/',
                            github: {
                                id: 'lisbonstartups',
                                user: 'raphaelcruzeiro'
                            }
                        },
                        {
                            title: 'Face Detector',
                            description: '<p>A Python C extesion that uses OpenCV to search for human faces in images.</p><p>I also built a small Django project that uses this module to tag faces on images. The demo can be found <a href="http://facedetector.raphaelcruzeiro.com/" target="_blank">here</a>.</p>',
                            url: 'https://github.com/raphaelcruzeiro/Face-Detector',
                            github: {
                                id: 'Face-Detector',
                                user: 'raphaelcruzeiro'
                            }
                        }
                    ];
                _.filter(projects, function(project) {
                    return project.github != undefined;
                }).forEach(function(project) {
                    var deffered = $q.defer();
                    promises.push(deffered.promise);
                    var url = ['https://api.github.com/repos', project.github.user, project.github.id].join('/');
                    $http.jsonp(url + '?callback=JSON_CALLBACK').success(function(d) {
                        project.github.forks_count = d.data.forks_count;
                        project.github.watchers = d.data.watchers;
                        project.github.url = d.data.html_url;
                        deffered.resolve();
                    });
                });
                $q.all(promises).then(function() {
                    deffered.resolve(projects);
                });
                return deffered.promise;
            }
        };
    });
})();
