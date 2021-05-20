# VMuseum

## About the app
(this is the intended design and layout of the app on May 20 2021)
This application is essentially a tree structured image viewer. Set out initially to showcase expertise and get into developing in the Angular framework, this is intended to find its use for displaying my sketches

## Authentication and Authorization
Basic user login/password authentication. 
Roles will be (1)
- Admin - maintenance of users and content
- Viewer roles - between seeing all categories to selected sets of categories

## Page layout and navigation
### Viewer pages - content
- All content related pages will have a header, main content and right nav sections
- If not logged in, the landing page will have 
  * Main content will give a description
  * Right Nav will have user name/password with login button and a register button 
  * Admins will have one or two extra buttons for redirecting to admin related tasks like user and content maintenance
- After logging in or, as a returning user, the landing page is a tabbed interface with each tab leading to a category which the user is 'authorized' to see
 * which 'landing' category is to be decided. right now the 1st viewable category (as per the order of how the category names is stored)


## Notes
1 This is a 'no backend' app. User info will be stored in the browser cache (localstorage)


## Development server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.10.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
