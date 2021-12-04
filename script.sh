npm install babel-core babel-cli babel-preset-env dotenv --save-dev
printf '{ "presets": ["env"] }' > .babelrc
printf 'MONGODB_USERNAME=<username>\nMONGODB_PASSWORD=<password>\nMONGODB_CLUSTER=<cluster-name>\nMONGODB_DATABASE_NAME=<database-name>' > .env

# A script for configuring the use of the javascript es6 module.
