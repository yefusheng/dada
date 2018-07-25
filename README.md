# workreport with NestJS

# Server

Server is written using NestJS. The following technologies are included in the demo:
1. Typescript
2. Swagger/OpenAPI
3. JWT/Passport
4. `config` package for Configuration
5. `lodash`
6. Mongoose with `@nestjs/mongoose`
7. Socket.IO with `@nestjs/websockets`
8. AutoMapper with `automapper-ts`


# Client

This is just a simple Angular frontend application to connect to the NestJS backend.

# Steps to run
1. For **Server**:
- Run `mongod` to start a local Mongo service.
- Make a `default.ts` and put it in your `config` directory under `root`
- Mimic the format in `default-example.ts`
- `cd ./NestDemo.Server` and run `npm install`
- `npm start` will start up the server given you've done everything right
- Go to `http://localhost:8080/api/docs` for the `SwaggerUI`

2. For **Client**:
- Run normal like an Angular application with `ng serve`.