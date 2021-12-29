# Cafeteria Enduser

## Development server

Run `npm run start-cs` or `npm run start-en` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Run application locally

Dockerfile is provided to build and run application locally.
Run `docker build -t cafeteria-enduser .` to build the application and `docker run -p 8000:8000 cafeteria-enduser` to run the application.
