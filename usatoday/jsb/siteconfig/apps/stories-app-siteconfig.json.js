
define('libs/require/text!siteconfig/apps/stories-app-siteconfig.json',[],function () { return '{\n    "version": 2,\n    "apps": {\n        "Overlay-with-arrows": {\n            "path": "apps/overlay/overlay",\n            "overlay": true,\n            "init_modules": [\n                {\n                    "name": "utility-bar"\n                },\n                {\n                    "name": "recommended-flyout"\n                }\n            ]\n        },\n        "Overlay-with-utility-bar": {\n            "path": "apps/simple-overlay",\n            "overlay": true,\n            "css": ["utility-bar"],\n            "init_modules": [\n                {\n                    "name": "utility-bar"\n                }\n            ]\n        },\n        "Overlay-with-footer": {\n            "path": "apps/simple-overlay",\n            "overlay": true,\n            "init_modules": [\n                {\n                    "name": "footer"\n                }\n            ]\n        },\n        "Overlay": {\n            "path": "apps/simple-overlay",\n            "css": ["story-article", "story-grid", "story-navbar", "stories/sponsored-series", "stories/story-right-rail"],\n            "overlay": true\n        }\n    }\n}';});
