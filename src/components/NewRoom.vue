<template>
  <div class="rooms container">
    <h1>Add Room</h1>
    <form>
      <div class="form-group row">
        <label for="title" class="col-sm-2 col-form-label">Title</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="title" placeholder="Title" v-model="title">
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-10">
          <textarea id="description" class="form-control" rows="6" placeholder="Description" v-model="description"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="location" class="col-sm-2 col-form-label">location</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="location" placeholder="location" v-model="location">
        </div>
      </div>
      <div class="form-group row">
        <label for="capacity" class="col-sm-2 col-form-label">Capacity</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="capacity" placeholder="Capacity" v-model="capacity">
        </div>
      </div>
      <div class="form-group row">
        <div class="offset-sm-2 col-sm-10">
          <button type="button" class="btn btn-primary" @click="addRoom">Save</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import RoomService from '@/services/roomService'
export default {
  name: 'NewRoom',
  data () {
    return {
      title: '',
      description: '',
      location: '',
      capacity: ''
    }
  },
  methods: {
    async addRoom () {
      await RoomService.addRoom({
        title: this.title,
        description: this.description,
        location: this.location,
        capacity: this.capacity
      })
      this.$router.push({ name: 'Rooms' })
    }
  }
}
</script>
