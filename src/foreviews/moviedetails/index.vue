<template>
 <div>
     moviedetails{{mid}}
 </div>
</template>

<script>
export default {
  data () {
    return {
      mid: ''
    }
  },
  components: {
  },

  methods: {

  },

  mounted () {
    this.mid = this.$route.params.mid
    console.log('当前电影' + this.mid)
  }
}
</script>

<style>

</style>
