<template>
  <div id="top-social">
    <ul id="home">
      <a href="#"><li><i class="fab fa-facebook-f"></i></li></a>
      <a href="https://www.linkedin.com/in/michael-smith586/"><li><i class="fab fa-linkedin"></i></li></a>
      <a href="https://www.github.com/smithms91"><li><i class="fab fa-github"></i></li></a>
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
    background-color: rgb(26, 26, 26);
    padding: 10px;
    display: flex;
    justify-content: space-around;
  }

  li i {
    color: #C7D6D5;
    font-size: 20px;
  }

  li:hover i {
    color: #6D7275;
  }


</style>


