#

# ArtMusuem

1. At component level, create functionality to display only text
2. Stand alone utility to upload content
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.8.
> It's (intended to be) a generic simple image display single page app, started around 1st week of June 2021 to showcase my sketches, and to be able to deploy to Google's Firebase Hosting  
Started originally on Angular 2 (4), I ran in

MISC Adding a theme folder taking exanple of mumbai-meri-jaan

1. under assets/all-images create your folder
../src/assets/all-images/mumbai-meri-jaan
copy or move theme images there
2. create the list file 
../src/assets/data-and-config/data/mumbai-meri-jaan.list.ts
3. Import in list-funnel.service.ts
import {MumbaiMeriJaanList} from '../../assets/data-and-config/data/mumbai-meri-jaan.list';
4. Add it like the other ImageList classes

    sketchStats.themBasedCounts.push(this.getThemeCounts(new MumbaiMeriJaanList()));
    .. 
    this.loadTopUploads(new MumbaiMeriJaanList()) ;
    ..
    this.loadLatestUploads(new MumbaiMeriJaanList());
    ..
    case 'mumbai-meri-jaan': this.genImageList = new MumbaiMeriJaanList();
                         this.allImageList = this.genImageList.allImageList ;
                         break;
      
5. Add it in menu-tree.ts

        { label: 'Mumbai Meri Jaan', uniqueKey:'', parentKey:'art', key:'mumbai-meri-jaan', roles:['nonLiving','all'], dateUploaded: '12-08-2021'},
[The website in current state ('open in new tab')](https://art-is-worship.web.app/)

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
