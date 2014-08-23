'use strict';

(function() {
    var app = angular.module('gemstoreAppDirectives', []);

    // Here camelCase..in HTML with dash like product-title
    app.directive('productTitle', function() {
        return { // returns a directive definition object
            restrict: 'E', // type of directive, E for element, A for attribute
            templateUrl: 'app/partials/product-title.html'
        };
    });

    app.directive('productDescription', function() {
        return {
            restrict: 'E',
            templateUrl: 'app/partials/product-description.html'
        };
    });

    app.directive("productReviews", function() {
        return {
            restrict: 'E',
            templateUrl: "app/partials/product-reviews.html"
        };
    });

    app.directive("productSpecs", function() {
        return {
            restrict: 'A',
            templateUrl: 'app/partials/product-specs.html'
        };
    });

    app.directive("productGallery", function() {
        return {
            restrict: "E",
            templateUrl: "app/partials/product-gallery.html",
            controller: function() {
                this.current = 0;
                this.setCurrent = function(newGallery) {
                    this.current = newGallery || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });

    app.directive("productTabs", function() {
        return {
            restrict: 'E',
            templateUrl: 'app/partials/product-tabs.html',
            controller: function() {
                this.tab = 1; // Removed ng-init="tab = 1" 

                this.setTab = function(setTab) {
                    this.tab = setTab; // Modified ng-click="tab = 1"
                };

                this.isSet = function(checkTab) {
                    return this.tab === checkTab; // Modified ng-class="{active:tab === 1}"
                };
            },
            controllerAs: 'tab'
        };
    });

})();