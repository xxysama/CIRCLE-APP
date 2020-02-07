<template>
  <div id="app">
    <transition name="fade-rv" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  .fade-rv-enter-active, .fade-rv-leave-active {
  transition: opacity .5s;
}
  .fade-rv-enter, .fade-rv-leave-to  {
  opacity: 0;
}
</style>
