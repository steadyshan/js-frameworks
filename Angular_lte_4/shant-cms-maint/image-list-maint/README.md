# ImageListMaint

### (Document Created and application status June-July 2023)

A locally (to the host machine) application to update the content of my art gallery website https://art-is-worship.web.app/ which houses soft copies of my sketches
##### Background and objectives 
- The art gallery, is essentially, a content management system whose content is fed by image files which are sourced through JSON objects also containing details: description, date, canvass size, uniqueness, etc
- The gallery is an Angular SPA hosted on Google Firebase.. At this point there is no data base and programing and data (images + JSONs) are all included in the same hierarchy

About the content and upload/hosting:
- Each sketch may be represented by one or more sequential iterations.
- Stepwise included which step is in the process of being done through the UI (at this point)
1. Each version is downloaded into the 'Downloads' folder 
2. These versions are remamed appropriately. (Naming, due to no specific reason, doesn't follow a 'best practices' standard format/convention )
3. The image files are moved inside an image folder hierarchy under 'assets' of the Gallery application to the contextual location ** to execute through the UI **
4. The JSON list of image files under that sub-folder (that particular theme) is updated; a new element with the image location, description, date, paper size, etc
   is updates  ** to execute through the UI **
5. An index file which maintains the list of themes (the menus are generated from this) is updated with the upload date for the newly added image, under the right theme 
** to execute through the UI **
6. The changes in the Gallery are published to Firebase
7. These changes are pushed to the Git repository

This is the front end, basically an Angular app (as of July 2023 - 11.2.8). It is


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
