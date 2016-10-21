# Angular 2 Starter

A simple Angular 2 starter project based on NPM, TypeScript, and Webpack.
Used to show how to set up a project build workflow from scratch.

This `master` branch contains the simplest configuration. Other branches show some additional features:

* [webpack2-aot](https://github.com/mirkonasato/angular2-course-webpack-starter/tree/webpack2-aot): Ahead-of-Time template compilation, using Webpack 2 and the [@ngtools/webpack](https://github.com/angular/angular-cli/tree/master/packages/webpack) plugin.
* [bootstrap](https://github.com/mirkonasato/angular2-course-webpack-starter/tree/bootstrap): includes the Bootstrap CSS framework.

To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).
* Run `npm run build` to bundle everything into the `dist` folder for deployment.
* Run `npm run build:prod` to do the same as above but enabling optimisations for production.

This example is part of the [Angular 2 From The Ground Up](http://www.encodedknowledge.com/coupons/angular2/github) course.
