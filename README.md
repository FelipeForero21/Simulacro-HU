
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).










# HU-SIMULACRUM

HU-SIMULACRUM es un sistema de gestión de biblioteca digital desarrollado con NestJS. Este proyecto incluye módulos para gestionar libros, autores y ventas.

## Requisitos

- Node.js (v14 o superior)
- PostgreSQL

## Instalación

1. Clona este repositorio en tu máquina local.

   ```bash
   git clone https://github.com/FelipeForero21/Simulacro-HU.git
   cd Simulacro-HU
Instala las dependencias del proyecto.

   ```bash
npm install
Configura las variables de entorno. Crea un archivo .env en la raíz del proyecto con el siguiente contenido:


DB_HOST=<TU_HOST_DE_BASE_DE_DATOS>
DB_PORT=<TU_PUERTO_DE_BASE_DE_DATOS>
DB_USER=<TU_USUARIO_DE_BASE_DE_DATOS>
DB_PASS=<TU_CONTRASEÑA_DE_BASE_DE_DATOS>
DB_NAME=<TU_NOMBRE_DE_BASE_DE_DATOS>

Ó
Utilizar las de env.example

Inicia el servidor.

npm run start
Abre tu navegador y navega a http://localhost:3000/api para ver la documentación generada por Swagger.

Uso de Swagger
Swagger se ha integrado en este proyecto para documentar la API. Puedes acceder a la documentación interactiva de la API en la siguiente URL:

http://localhost:3000/api
Estructura del Proyecto
El proyecto está estructurado de la siguiente manera:

src/
main.ts: Punto de entrada de la aplicación.
app.module.ts: Módulo raíz de la aplicación.
books/: Módulo para gestionar libros.
books.controller.ts
books.service.ts
entities/
book.entity.ts
dto/
create-book.dto.ts
update-book.dto.ts
authors/: Módulo para gestionar autores.
authors.controller.ts
authors.service.ts
entities/
author.entity.ts
dto/
create-author.dto.ts
update-author.dto.ts
sells/: Módulo para gestionar ventas.
sells.controller.ts
sells.service.ts
entities/
sell.entity.ts
dto/
create-sell.dto.ts
update-sell.dto.ts


Ejemplos de Uso de la API
tanto en Swagger como en Postman
Crear un Autor

POST /authors/createAuthor
Content-Type: application/json

{
  "author": "Nombre del Autor"
}


Obtener Todos los Autores

GET /authors/all


Actualizar un Autor
PUT /authors/update/:id
Content-Type: application/json

{
  "author": "Nombre del Autor Actualizado"
}
Eliminar un Autor
bash
Copiar código
DELETE /authors/softDelete/:id
Contribuciones
Si deseas contribuir a este proyecto, por favor, abre un issue o envía un pull request.


### Descripción del Contenido del README.md

- **Requisitos**: Lista las dependencias necesarias para ejecutar el proyecto.
- **Instalación**: Instrucciones para clonar el repositorio, instalar las dependencias y configurar las variables de entorno.
- **Ejecución**: Pasos para compilar y ejecutar el servidor.
- **Uso de Swagger**: Indica cómo acceder a la documentación de la API generada por Swagger.
- **Estructura del Proyecto**: Describe la estructura del proyecto y los archivos principales.
- **Ejemplos de Uso de la API**: Proporciona ejemplos de cómo usar algunos endpoints de la API.
- **Contribuciones**: Instrucciones sobre cómo contribuir al proyecto.
- **Licencia**: Información sobre la licencia del proyecto.

