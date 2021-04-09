# AngularTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.14.

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
# Description

In this task, I'm using Angular with HTML, CSS, and bootstrap.

it contains an authentication module with two components to sign up and sign in related to auth service to allow only valid users access to the system and auth guard to prevent unauthenticated or unauthorized users from accessing restricted routes;

and contains a movies module with a header component to navigate between pages and log out button;
and movies home components to toggle between (top movies - upcoming movies - now playing movies) each tab contain a card component as a child, this child card contains like and favorite buttons to add/remove to likes and favorites pages;

each card can navigate to view movie component that contains details about the movie and write a comment.
