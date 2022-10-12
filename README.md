# Ng Lazy Load Module Without Router

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

The aim of this project is to test lazy-load behavior of 3rd party libraries.
I've tested 2 libs:
- angularx-qrcode integrated as directive
- filestack-js instegrated on ng service

I've observed, w/ webpack-bundle-analyzer, both are lazy-loaded (not part of main.js) when imported on lazy-loaded modules (items/item-detail).

```sh
% ng build --configuration production // Initial commit

Initial Chunk Files           | Names         |  Raw Size | Estimated Transfer Size
main.ecbfc9ddd614e39a.js      | main          | 195.07 kB |                53.26 kB
polyfills.df38fed47f368ecd.js | polyfills     |  33.14 kB |                10.64 kB
runtime.7055d615bf120558.js   | runtime       |   1.11 kB |               615 bytes
styles.ef46db3751d8e999.css   | styles        |   0 bytes |                       -

                              | Initial Total | 229.32 kB |                64.50 kB

% ng build --configuration production // filestack-js and angularx-qrcode imported on ItemsModule

Initial Chunk Files           | Names              |  Raw Size | Estimated Transfer Size
main.e4663fb07118c600.js      | main               | 216.32 kB |                60.11 kB
polyfills.64b2365f70c87ac9.js | polyfills          |  33.15 kB |                10.71 kB
runtime.25e85349dbef0ad0.js   | runtime            |   2.80 kB |                 1.30 kB
styles.ef46db3751d8e999.css   | styles             |   0 bytes |                       -

                              | Initial Total      | 252.27 kB |                72.12 kB

Lazy Chunk Files              | Names              |  Raw Size | Estimated Transfer Size
137.c6662d10be7c4b4c.js       | items-items-module | 283.63 kB |                72.12 kB 
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
