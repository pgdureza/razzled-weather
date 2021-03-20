# Razzled Weather

weather app using `create-razzle-app` with typescript template

## Features

- Weather app shows temperature, humidity and wind speeds for cities indicated in the search params `<url>?city=hawaii,tokyo,canada`
- Background color of card changes depending on the temperature. (low temperatures are more blue, higher temps are more red)
- Uses localstorage to cache previously fetched values.
- Does a check every minute if it needs to do a fresh fetch

## For the Actual weather app

`yarn start` to start development server
`yarn build` to create production build

open localhost:3000

## For the components

`yarn storybook`

open localhost:6006
