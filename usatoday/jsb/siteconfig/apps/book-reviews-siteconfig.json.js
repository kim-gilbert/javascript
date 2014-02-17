
define('libs/require/text!siteconfig/apps/book-reviews-siteconfig.json',[],function () { return '{\n    "version": 2,\n    "pages": [\n        {\n            "name": "Best Selling Book List",\n            "appName": "Cards",\n            "css": ["book-reviews"],\n            "urls": ["^(life/books/best-selling/.*)$"]\n        },\n        {\n            "name": "Book Review Detail Page",\n            "appName": "Overlay-with-arrows",\n            "path": "apps/overlay/pages/story-overlay",\n            "css": ["book-reviews"],\n            "urls": ["^(story/life/books/.*)$"],\n            "init_modules": [\n                {\n                    "name": "booksAssetView"\n                },\n                {\n                    "name": "taboola-outbrain-recommendations"\n                },\n                {\n                    "name": "form-dropdown"\n                }\n            ]\n        }\n    ],\n    "siteModules": {\n        "booklist": {\n            "path": "modules/book-reviews/booklist",\n            "selector": ".front-booklist-page-container"\n        },\n        "booksthreeup": {\n            "path": "modules/book-reviews/books-three-up",\n            "selector": ".module-books-three-up"\n        },\n        "booksAssetView": {\n            "path": "apps/overlay/pages/book-reviews-overlay",\n            "selector": ".books-meta-comp"\n        }\n    }\n}';});
