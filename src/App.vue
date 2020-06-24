<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
#app {
  height: 100vh;
}
* {
  padding: 0 0;
  margin: 0 0;
  box-sizing: border-box;
  font-family: "Roboto" sans-serif;
}
</style>
