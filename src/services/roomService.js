import Api from '@/services/api'

export default {
  fetchRooms () {
    return Api().get('rooms')
  },

  addRoom (params) {
    return Api().post('rooms', params)
  }
}
