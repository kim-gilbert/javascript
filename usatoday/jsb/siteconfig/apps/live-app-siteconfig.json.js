
define('libs/require/text!siteconfig/apps/live-app-siteconfig.json',[],function () { return '{\n    "version": 2,\n    "apps": {\n        "LiveApp": {\n            "path": "apps/live_app/live-app-app",\n            "selector": ".live-app-view-content-wrapper"\n        }\n    },\n    "pages": [\n        {\n            "css": ["live-app"],\n            "name": "Right Now",\n            "appName": "LiveApp",\n            "path": "apps/live_app/live-app",\n            "urls": ["^(rightnow/.*)$"]\n        }\n    ]\n}';});