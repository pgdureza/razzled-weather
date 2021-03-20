/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
// set env vars

process.env.RAZZLE_RUNTIME_OPEN_WEATHER_KEY = 'XXXXXXXXXX'

const mockGeolocation = {
  getCurrentPosition: (successCallback) => {
    successCallback({ coords: { latitude: 10, longitude: 20 } })
  },
  watchPosition: jest.fn(),
}

global.navigator.geolocation = mockGeolocation
