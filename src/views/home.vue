<template>
  <div class="wrapper">
    <h2>Tobiloba Banjo Examination</h2>
    <Counter/>
    <SetValueCounter/>
    <br/>
    <div class="buttons">
      <AddCounter/>
      <ResetCounter/>
      <RemoveCounter/>
    </div>
  </div>
</template>

<script>
import Counter from '../components/Counter.vue'
import AddCounter from '../components/AddCounter.vue'
import ResetCounter from '../components/ResetCounter.vue'
import RemoveCounter from '../components/RemoveCounter.vue'
import SetValueCounter from '../components/SetValueCounter.vue'
import ErrorView from './pageNotFound'

export default {
  name: "home-page",
  data () {
    return {
      errorView: ErrorView
    }
  },
  components: {
    Counter,
    AddCounter,
    RemoveCounter,
    ResetCounter,
    SetValueCounter,
  }
}
</script>

<style>
.wrapper {
  flex-direction: column;
  color: #ffffff;
  border-radius: 20px;
  box-shadow: black;
  margin: 0 20px;
  background-color: #000000;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 60px;
}

@media screen and (max-width: 650px) {
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 30px;
  }
}

h2 {
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
}
</style>
