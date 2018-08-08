<template>
  <div id="top-social">
    <ul id="home">
      <li><i class="fab fa-facebook-f"></i></li>
      <li><i class="fab fa-instagram"></i></li>
      <li><i class="fab fa-twitter"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TopSocial",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  ul {
    background-color: #11152F;
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }

  li i {
    color: #007BFF;
    font-size: 20px;
  }

  li:hover i {
    color: rgb(0, 70, 145);
  }


</style>


