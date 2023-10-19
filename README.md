# Description

This is an API that connects to a postgres database more [here](https://github.com/humbertn/datalayer)

# Pre-requisites

Please follow the instructions on the [datalayer repo](https://github.com/humbertn/datalayer) to run the database locally.

This api runs on port `3000`

# To Run

To run this project it is required to have Docker installed.

Run the following command on the root folder

```
docker compose up -d
```

API should be accesible via localhost:3000

# Endpoints

## GET /state
Returns all States for USA.

## GET /state/{stateName}
Returns one specific state filtered by `stateName`.

## GET /state/{stateName}/county
Returns all counties for an specific state filtered by `stateName`.

## GET /state/{stateName}/county/{countyName}
Returns one specific county filtered by `countyName` and `stateName`.
