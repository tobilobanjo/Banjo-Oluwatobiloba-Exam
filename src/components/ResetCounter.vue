<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:click="resetCounter()">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store"
import * as types from "../store/types";

export default {
  methods: {
    resetCounter() {
      store.dispatch({
        type: types.Reset
      })
    }
  }
}
</script>

<style scoped>
button {
  background: #ffffff;
  height: 50px;
  min-width: 150px;
  color: #172977;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
}
</style>
