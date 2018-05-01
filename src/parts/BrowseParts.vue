<template>
  <div>
    <h1>Browse Parts</h1>
    <ul class="menu">
      <li><router-link :to="{name: 'BrowseHeads'}">Heads</router-link></li>
      <li><router-link :to="{name: 'BrowseArms'}">Arms</router-link></li>
      <li><router-link :to="{name: 'BrowseTorsos'}">Torsos</router-link></li>
      <li><router-link :to="{name: 'BrowseBases'}">Bases</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'BrowseParts',
};
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .menu {
    display: flex;
    justify-content: space-around;
    margin: 0 100px;
    font-size: 20px;
  }
  a {
    color: darkorange;
  }
</style>
