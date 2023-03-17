<template>
  <div class="container">
    <div class="field is-grouped">
      <div className="counterInput">
        <label>Set value for count:</label>
        <input name="setCount" type="number" @keydown="debug" v-on:input="e => {
          setValue(parseInt(e.target.value))}" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store"
import * as types from "../store/types";

export default {
  methods: {
    setValue(amount) {
      store.dispatch({
        type: types.SetValue,
        amount
      })
    },
    debug (event) {
      console.log(event.target.value)
    }
  }
}
</script>

<style scoped>
label {
  color: white;
}

input {
  width: 40px;
  margin-left: 10px;
}
</style>
