# oee-ng

[![Angular](https://img.shields.io/badge/Angular-5.2.0-red.svg)](https://angular.io//)
[![Node](https://img.shields.io/badge/Node.js-8.7.0-brightgreen.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React.js-16.4.0-blue.svg)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.16.3-blue.svg)](https://expressjs.com)
[![Babel](https://img.shields.io/badge/Babel.js-ES2015-yellow.svg)](https://babeljs.io)
[![webpack](https://img.shields.io/badge/webpack.js-4.12.0-blue.svg)](https://webpack.js.org/)
[![License](http://img.shields.io/:license-mit-blue.svg)](http://opensource.org/licenses/MIT)

## Description

A template for building Overall Equipment Effectiveness application (AngularJS version)

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
oee-ng/
│  angular.json
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│  tsconfig.json
└─src
    │  index.html
    │  main.ts
    │  MESM_FloorMaps.xml
    │  polyfills.ts
    │  styles.scss
    │  tsconfig.app.json
    │  typings.d.ts
    │
    ├─app
    │  │  app-routing.module.ts
    │  │  app.component.html
    │  │  app.component.ts
    │  │  app.module.ts
    │  │  helpers.ts
    │  │
    │  ├─theme
    │  │  │  theme-routing.module.ts
    │  │  │  theme.component.html
    │  │  │  theme.component.ts
    │  │  │
    │  │  ├─layouts
    │  │  │  │  layout.module.ts
    │  │  │  │
    │  │  │  ├─aside-nav
    │  │  │  │      aside-nav.component.html
    │  │  │  │      aside-nav.component.ts
    │  │  │  │
    │  │  │  ├─footer
    │  │  │  │      footer.component.html
    │  │  │  │      footer.component.ts
    │  │  │  │
    │  │  │  ├─header-nav
    │  │  │  │      header-nav.component.html
    │  │  │  │      header-nav.component.ts
    │  │  │  │
    │  │  │  └─quick-sidebar
    │  │  │          quick-sidebar.component.html
    │  │  │          quick-sidebar.component.ts
    │  │  │
    │  │  └─pages
    │  │      └─default
    │  │          │  default.component.html
    │  │          │  default.component.ts
    │  │          │
    │  │          ├─index
    │  │          │      index.component.html
    │  │          │      index.component.ts
    │  │          │      index.module.ts
    │  │          │
    │  │          └─not-found
    │  │                  not-found.component.html
    │  │                  not-found.component.ts
    │  │                  not-found.module.ts
    │  │
    │  ├─_directives
    │  │      href-prevent-default.directive.ts
    │  │      unwrap-tag.directive.ts
    │  │
    │  └─_services
    │          error-handler.service.ts
    │          script-loader.service.ts
    │
    ├─assets
    │  │  .gitkeep
    │  │
    │  ├─app
    │  │  ├─js
    │  │  │      oee.js
    │  │  │
    │  │  └─media
    │  │
    │  ├─default
    │  │  ├─base
    │  │  │      scripts.bundle.js
    │  │  │      style.bundle.css
    │  │  │      style.bundle.rtl.css
    │  │  │
    │  │  └─media
    │  │      └─img
    │  │
    │  └─vendors
    │      ├─base
    │      │  │
    │      │  ├─fonts
    │      │  │
    │      │  └─images
    │      │
    │      └─custom
    │          ├─datatables
    │          │      datatables.bundle.css
    │          │      datatables.bundle.js
    │          │      datatables.bundle.rtl.css
    │          │
    │          ├─flot
    │          │      flot.bundle.js
    │          │
    │          ├─fullcalendar
    │          │      fullcalendar.bundle.css
    │          │      fullcalendar.bundle.js
    │          │      fullcalendar.bundle.rtl.css
    │          │
    │          ├─jquery-ui
    │          │  │  jquery-ui.bundle.css
    │          │  │  jquery-ui.bundle.js
    │          │  │  jquery-ui.bundle.rtl.css
    │          │  │
    │          │  └─images
    │          │
    │          └─jqvmap
    │                  jqvmap.bundle.css
    │                  jqvmap.bundle.js
    │                  jqvmap.bundle.rtl.css
    │
    └─environments
            environment.prod.ts
            environment.ts
```

## Multiple versions
There are three different versions in the OEE Template
- [jQuery version](https://github.com/seanwu99/oee-jq)
- [React version](https://github.com/seanwu99/oee-react)
- [Angular version](https://github.com/seanwu99/oee-ng)

Angular version
--------
    -- Running documentation locally
    1. Fork & clone this repository
    2. Run npm install: 'npm install'
    3. Serve the application: 'ng serve --open'

    -- Publish documentation to GitHub pages
    4. Start with the development build: 'ng build --base-href https://<your-name>.github.io/oee-ng/'
    5. Install the angular-cli-ghpages globally: 'npm install -g angular-cli-ghpages'
    6. Run angular-cli-ghpages: 'angular-cli-ghpages' or short 'ngh'
    7. You will find that the dist's content has been published to your Github branch 'gh-pages'
    8. Run documentation on Github: open your browser on https://<your-name>.github.io/oee-ng/

