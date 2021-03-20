import axios from 'axios'

import { getWithExpiry, setWithExpiry } from './cache'

const getRequest = async (url: string) => {
  const dataFromCache = getWithExpiry(url)

  if (dataFromCache) {
    return dataFromCache
  }

  const { data } = await axios.get(url)
  setWithExpiry(url, data, 300000)

  return data
}

export { getRequest }
