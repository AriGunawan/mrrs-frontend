<template>
  <div class="rooms container">
    <h1>Add Room</h1>
    <form>
      <div class="form-group row">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="name" placeholder="Name" v-model="name">
        </div>
      </div>
      <div class="form-group row">
        <label for="description" class="col-sm-2 col-form-label">Description</label>
        <div class="col-sm-10">
          <textarea id="description" class="form-control" rows="6" placeholder="Description" v-model="description"></textarea>
        </div>
      </div>
      <div class="form-group row">
        <label for="floor" class="col-sm-2 col-form-label">Floor</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="floor" placeholder="Floor" v-model="floor">
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
      name: '',
      description: '',
      floor: '',
      capacity: ''
    }
  },
  methods: {
    async addRoom () {
      await RoomService.addRoom({
        name: this.name,
        description: this.description,
        floor: this.floor,
        capacity: Number(this.capacity)
      })
      this.$router.push({ name: 'Rooms' })
    }
  }
}
</script>
