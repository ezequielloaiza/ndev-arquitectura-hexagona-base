# Seed-angular

1. [Instalación](#instalación)
1. [Testing](#testing)
1. [Mas info](#mas-info)

## Instalación

__1. Clonar repositorio__

```bash
## clone with https
git clone https://github.com/scasado93/arch-hex-angular.git <nombre-del-proyecto>

## or clone with ssh
git clone git@github.com:scasado93/arch-hex-angular.git <nombre-del-proyecto>
```

```bash
cd <nombre-del-proyecto>
```

__2. Instalar proyecto__
```bash
npm install
```

__3. Arrancar proyecto__
```bash
npm start
```

En el navegador dirigete a [http://localhost:4200](http://localhost:4200) para ver la aplicación en funcionamiento.

## Testing
Unit testing via [Jest](https://jestjs.io):
```bash
npm run test
```

e2e testing  via [Cypress](https://www.cypress.io/):
```bash
npm run e2e
```

Cobertura de código:
```bash
npm run coverage
```

La ruta del informe generado de la cobertura de código se localiza en _coverage/lcov-report/index.html_

## Mas info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.2.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
