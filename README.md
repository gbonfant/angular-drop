Simple client to Farmdrop's API

## Dependencies
- Ruby 1.9+
- Bundler
- NodeJS
- NPM

The client code is served by a thin sinatra server, and unit tests are run via karma.

## Bootstrapping
```bash
$ bundle install
$ npm install
```

## Starting the server
Run ``$ rackup `` and visit [http://localhost:9292/](http://localhost:9292/)

## Running the tests
``$ karma start``

## Folder structure
The angular code lives under ``app/assets/javascripts``
