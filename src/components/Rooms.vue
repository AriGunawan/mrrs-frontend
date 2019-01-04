<template>
  <div class="rooms container">
    <h1>Rooms</h1>
    <button type="button" class="btn btn-primary mb-2 float-right" @click="goToAddNewPage">Add New Room</button>
    <table class="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Room Name</th>
          <th scope="col">Description</th>
          <th scope="col">Location</th>
          <th scope="col">Capacity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="room in rooms" v-bind:key="room.title">
          <th scope="row">{{ room.title }}</th>
          <td>{{ room.description }}</td>
          <td>{{ room.location }}</td>
          <td>{{ room.capacity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import RoomService from '@/services/roomService'
export default {
  name: 'rooms',
  data () {
    return {
      rooms: []
    }
  },
  mounted () {
    this.getRooms()
  },
  methods: {
    async getRooms () {
      const response = await RoomService.fetchRooms()
      this.rooms = response.data
    },
    goToAddNewPage () {
      this.$router.push({ name: 'NewRoom' })
    }
  }
}
</script>
