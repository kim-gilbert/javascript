
define('libs/require/text!siteconfig/pages/stories-page-siteconfig.json',[],function () { return '{\n    "version": 2,\n    "pages": [\n        {\n            "name": "Story",\n            "path": "apps/overlay/pages/story-overlay",\n            "appName": "Overlay-with-arrows",\n            "urls": [\n                "^((story|article)/.*/)$"\n            ],\n            "init_modules": [\n                {\n                    "name": "iframe-auto-height"\n                },\n                {\n                    "name": "taboola-outbrain-recommendations"\n                }\n            ]\n        }\n    ]\n}';});
