# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.14.

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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



FLOW:::


1. Recipe-Item

## recipe - item pe click hoga to onSelected() call hoga.
## onSelected() se(recipeSelected) event emit hoga jo control recipe - list ko de dega


2. Recipe-List

## (recipeSelected) iske emit hone ki wajah se onRecipeSelected() call hoga
## onRecipeSelected() call hone se(theRecipe) event emit hoga  jo control recipe.component ko de dega


3. Recipe.component

## ye seedhe seedhe jo $event aaya hai jisme basically clicked recipe ka data hai uske is component ke variable mein assign kr dega





