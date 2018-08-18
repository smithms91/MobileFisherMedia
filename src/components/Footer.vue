<template>
  <div id="footer-section" v-scroll-to="'#home'">
    <img src="../assets/logo.png" alt="">
    <h2>Hours</h2>
    <p>Sun-Mon: 11AM - 11PM</p>
    <p>(586) 888 - 9127</p>
    <div class="bottomfooter">
      Copyright &copy; 2018 <a href="#">Fisher Media</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  img {
    width: 70px;
  }

  .bottomfooter {
    background-color: #333;
    padding: 20px;
    color: #eee;
    margin-top: 25px;
  }

</style>


