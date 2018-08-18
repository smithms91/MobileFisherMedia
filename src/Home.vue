<template>
  <transition>
    <div class="to-top" v-if="scrolled" @click="top">
      <p>^</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      scrolled: false,
    }
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 800;
    },
    top() {
      document.documentElement.scrollTop = 0;
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style scoped>
  p {
    padding: 10px 20px;
    background-color: #C20114;
    color: #eee;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 15;
    box-shadow: -1px 1px 3px 0px rgba(0,0,0,0.5);
  }

  .to-top {
    transition: all .3s;
  }

  /* Set Duration etc. */
  .v-enter-active, .v-leave-active {
    transition: all .3s;
  }

  /* What happens */
  .v-enter, .v-leave-to {
    opacity: 0;
  }
</style>


