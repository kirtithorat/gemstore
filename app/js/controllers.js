'use strict';

angular.module('gemstoreAppControllers', [])
    .controller("StoreController", function($http) {
        // Fetch data from API instead
        // var store = this;
        // store.products = [];
        // $http.get('/products.json').success(function (data) {
        //   store.products = data;
        // });
        this.products = [{
            name: 'Ruby',
            description: 'A ruby is a pink to blood-red colored gemstone, a variety of the mineral corundum (aluminium oxide). The red color is caused mainly by the presence of the element chromium. Its name comes from ruber, Latin for red. Prices of rubies are primarily determined by color. The brightest and most valuable "red" called blood-red, commands a large premium over other rubies of similar quality. ',
            canPurchase: true,
            soldOut: false,
            shine: 8,
            price: 5500.50,
            rarity: 7,
            color: '#E0115F',
            faces: 14,
            images: [{
                full: 'ruby1-full.png',
                thumb: 'ruby1-thumb.png'
            }, {
                full: 'ruby2-full.jpg',
                thumb: 'ruby2-thumb.jpg'
            }, {
                full: 'ruby3-full.jpg',
                thumb: 'ruby3-thumb.jpg'
            }],
            reviews: [{
                stars: 5,
                body: "I love this gem!",
                author: "johndoe@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "This gem is GORGEOUS.",
                author: "jim@example.org",
                createdOn: 1397490980837
            }]
        }, {
            name: 'Sapphire',
            description: 'The sapphire is one of the three gem-varieties of corundum, the other two being ruby – defined as corundum in a shade of red—and padparadscha—a pinkish orange variety. The cost of natural sapphires varies depending on their color, clarity, size, cut, and overall quality – as well as their geographic origin.',
            canPurchase: false,
            soldOut: false,
            shine: 9,
            price: 2000.95,
            rarity: 6,
            color: '#333399',
            faces: 12,
            images: [{
                full: 'sapphire1-full.jpg',
                thumb: 'sapphire1-thumb.jpg'
            }, {
                full: 'sapphire2-full.jpg',
                thumb: 'sapphire2-thumb.jpg'
            }],
            reviews: [{
                stars: 3,
                body: "I think this gem was just OK, could honestly use more shine, IMO.",
                author: "tia@example.org",
                createdOn: 1397490980837
            }, {
                stars: 4,
                body: "Any gem with 12 faces is for me!",
                author: "awesome@example.org",
                createdOn: 1397490980837
            }]
        }, {
            name: 'Amethyst',
            description: "Amethyst is a violet variety of quartz often used in jewelry. The Greeks believed amethyst gems could prevent intoxication, while medieval European soldiers wore amethyst amulets as protection in battle in the belief that amethysts heal people and keep them cool-headed. Up until the 18th century, amethyst was included in the cardinal, or most valuable, gemstones (along with diamond, sapphire, ruby, and emerald). However, since the discovery of extensive deposits in locations such as Brazil, it has lost most of its value.",
            shine: 70,
            price: 500,
            rarity: 2,
            color: '#9C8AA5',
            faces: 6,
            images: [{
                full: 'amethyst1-full.jpg',
                thumb: 'amethyst1-thumb.jpg'
            }, {
                full: 'amethyst2-full.jpg',
                thumb: 'amethyst2-thumb.jpg'
            }],
            reviews: [{
                stars: 1,
                body: "This gem is WAY too expensive for its rarity value.",
                author: "lee@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "BBW: High Shine != High Quality.",
                author: "zee@example.org",
                createdOn: 1397490980837
            }, {
                stars: 1,
                body: "Don't waste your rubles!",
                author: "vee@example.org",
                createdOn: 1397490980837
            }]
        }];
    }).controller('ReviewController', function() {
        this.review = {};
        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });