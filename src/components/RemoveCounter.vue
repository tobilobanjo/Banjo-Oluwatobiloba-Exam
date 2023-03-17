<template>
  <div class="container">
    <div class="field is-grouped">
      <div class="control">
        <button class="button is-primary" v-on:click="removeCounter()">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store"
import * as types from "../store/types";

export default {
  methods: {
    removeCounter() {
      store.dispatch({
        type: types.Decrement,
        amount: 1
      })
    }
  }
}
</script>

<style scoped>
button {
  background: #c71948;
  height: 50px;
  min-width: 150px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  border-radius: 5px;
}
</style>
