import Api from '@/services/api'

export default {
  fetchRooms () {
    const query = {
      query: `{
        rooms {
          code,
          name,
          description,
          capacity,
          floor
        }
      }`
    }
    return Api().post('graphql', query)
  },

  addRoom (params) {
    const query = `mutation AddRoom($room: RoomInput){
        addRoom(room: $room) { name }
    }`
    return Api().post('graphql', {
      query,
      variables: {
        room: {
          name: params.name,
          description: params.description,
          capacity: params.capacity,
          floor: params.floor
        }
      }
    })
  }
}
