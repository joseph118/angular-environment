# A Typical Angular Environment

An angular environment configured with webpack.

- Serves dev environment with HMR, PostCSS, BrowserSync, and Bundle Analyzer.
- Builds production environment with a custom configuration for PostCSS.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `npm start` for a dev server. 

- Navigate to `http://localhost:4100/` for Bundle Analyzer.
- Navigate to `http://localhost:4200/` for Development Server.
- Navigate to `http://localhost:3000/` for BrowserSync.
- Navigate to `http://localhost:3001/` for BrowserSync UI.

The app will automatically reload if you change any of the source files.
The app will hot reload when you change the global styles.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

For production build use `npm run build:production`.
