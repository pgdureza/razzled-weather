# Razzled Weather

weather app using `create-razzle-app` with typescript template

Storybook can be found here:
https://605600202ec3050021d8e5bd-agniztymam.chromatic.com/

Live App can be found here:
using `city=<name1>,<name2>` to determine which cities to show

[https://razzled-weather.vercel.app/?city=manila,hawaii,canada,tokyo,singapore](https://razzled-weather.vercel.app/?city=manila,hawaii,canada,tokyo,singapore)

using no query string will ask permision to use your geolocation.

[https://razzled-weather.vercel.app/](https://razzled-weather.vercel.app/)

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
