/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-undef */
// set env vars

const mockGeolocation = {
  getCurrentPosition: (successCallback) => {
    successCallback({ coords: { latitude: 10, longitude: 20 } })
  },
  watchPosition: jest.fn(),
}

global.navigator.geolocation = mockGeolocation
