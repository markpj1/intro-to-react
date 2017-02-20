# A Complete Intro to React

Welcome to a complete intro to React! The site actual workshop material for this repo can be found [here][gh-page]. On the master branch you will find the completed project. On the start branch you will find the barebones boilerplater of the project designed to help you get started.

## Contributing

Please contribute, file issues, and make PRs. More than anything I'm sure there are typos abounding.

## License

MIT

[gh-page]: http://btholt.github.io/complete-intro-to-react/

## Some webpack commands
webpack js/ClientApp.js public/bundle.js

## For production
NODE_ENV=production webpack -p js/CLientApp.js public/bundle.js

## Add babel
webpack --module-bind='js=babel' js/ClientApp.js public/bundle.js

## Run es-lint/standard
npm run lint -s

### fix simple errors
npm run lint -- --fix
