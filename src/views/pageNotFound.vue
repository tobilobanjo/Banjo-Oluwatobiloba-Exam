<template>
  <div class="wrapper">
    <h6>🎭</h6>
    <h3>404 - Page Not Found</h3>
    <p>This page no longer exists or was moved to another location.</p>
    <router-link to="/">
      <div class="homeButton">
        <p>Go Home</p>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
name: "error-boundary"
}
</script>

<style scoped>
.wrapper {
  flex-direction: column;
  color: #000000;
  border-radius: 20px;
  margin: 0 20px;
  background-color: #00000000;
}

 h6 {
   font-size: 50px;
 }
 h3 {
   font-size: 40px;
 }
</style>
