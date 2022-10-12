% npm i @angular/cli@latest -g
% npm ls @angular/cli -g
/Users/vdias38/.nvm/versions/node/v16.14.2/lib
└── @angular/cli@14.2.5
% ng new mmb-demos.ng-lazy-load-modules-without-router
% cd mmb-demos.ng-lazy-load-modules-without-router/
% ng g module items --routing
% ng g c home --type page -t -s -c OnPush --skip-tests
% ng g c items/item-detail --type page -t -s -c OnPush --skip-tests

- -t w/ inline template
- -s w/ inline style

% ng g service items/filestack --skip-tests
% npm i filestack-js