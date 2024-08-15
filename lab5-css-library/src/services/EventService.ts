import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/jirehmuyana/331-vite-lab2-mock-server',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: Number, page: Number, pageSize: number) {
    return apiClient.get('/events/', {
      params: {
        _limit: perPage,
        _page: page,
        _pageSize: pageSize
      }
    })
  },
  getEvent(id: number) {
    return apiClient.get('/events/' + id)
  }
}
