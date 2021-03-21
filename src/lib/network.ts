import axios from 'axios'
import Cookies from 'js-cookie'

const getRequest = async (url: string) => {
  const dataFromCache = Cookies.getJSON(url)

  if (dataFromCache) {
    return dataFromCache
  }

  const { data } = await axios.get(url)
  Cookies.set(url, data, { expires: 1 / 288 })
  return data
}

export { getRequest }
