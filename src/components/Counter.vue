<template>
  <div class="container">
    <div class="notification">
      <h1 class="counter">
        {{ count }}
      </h1>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "counter-vue",
  computed: mapState({
    count: state => state.count
  })
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}
  .counter{
    color: #fff;
    font-size: 10rem;
  }
</style>
