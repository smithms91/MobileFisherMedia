<template>
  <div id="nav-section">
    <div class="top-nav">
      <div class="logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="sandwich" @click="open = !open">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
    </div>

    <div class="content">
      <h4>We Design &amp; Develop</h4>
      <h1>Powerful Digital Experiences</h1>
    </div>

    <div class="bottom-curve">
      <img src="../assets/bottom-curve3.png" alt="">
    </div>
    <transition name="slide-fade">
      <div class="nav-popup" v-if="open">
        <div class="close" @click="open = !open">
          <div class="cross left"></div>
          <div class="cross right"></div>
        </div>
        <img src="../assets/logo.png" alt="">
        <ul class="navlist">
          <li v-scroll-to="'#home'" @click="open = !open">01 Home</li>
          <li v-scroll-to="'#about'" @click="open = !open">02 About</li>
          <li v-scroll-to="'#process'" @click="open = !open">03 Process</li>
          <li v-scroll-to="'#customers'" @click="open = !open">04 Customers</li>
        </ul>
        <ul class="icons">
          <li><i class="fab fa-facebook-f"></i></li>
          <li><i class="fab fa-linkedin"></i></li>
          <li><i class="fab fa-github"></i></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "NavSection",
  data() {
    return {
      open: false
    }
  },
  methods: {
    // openNav() {
    //   this.open = true;
    //   let navSlide = document.querySelector(".nav-popup");
    //   navSlide.style.width = "100vw";
    // },
    // closeNav() {
    //   this.open = false;
    //   let navSlide = document.querySelector(".nav-popup");
    //   navSlide.style.width = "0";
    // }
  }
}
</script>

<style scoped>
  #nav-section {
    background-image: url('../assets/banner.png');
    height: 500px;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .top-nav {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 40px 20px; 
    align-items: center;
  }

  .logo {
    width: 75px;
  }

  .logo img {
    width: 100%;
  }

  .sandwich {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .line {
    background-color: white;
    height: 3px;
    margin: 8px;
  }

  .content {
    font-size: 26px;
    text-align: left;
    text-transform: uppercase;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    padding: 10px;
  }

  .content h4 {
    color: rgb(236, 195, 195);
  }

  .content h1 {
    line-height: 60px;
    font-weight: 700;
    color: #eee;
  }

  .bottom-curve {
    width: 100%;
    position: absolute;
    bottom: -10px;
  }

  .bottom-curve img {
    width: 100%;
    height: 80px;
  }

  /* Popup */
  .nav-popup {
    height: 100vh;
    background-color: rgba(0,0,0,0.95);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .nav-popup img {
    width: 75px;
    position: absolute;
    top: 100px;
    cursor: pointer;
    transform: translateX(-50%);
  }

  .close {
    position: absolute;
    top: 30px;
    right: 60px;
    color: #eee;
    cursor: pointer;
  }

  .cross {
    height: 3px;
    width: 30px;
    background-color: #fff;
    margin-top: 10px;
  }

  .left {
    position: absolute;
    transform: rotate(45deg);
    
  }

  .right {
    position: absolute;
    transform: rotate(-45deg);
  }

  .navlist {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #eee;
    font-size: 35px;
  }

  .navlist li {
    margin-bottom: 20px;
    cursor: pointer;
  }

  .navlist li a {
    text-decoration: none;
    color: #eee;
    cursor: pointer;
  }


  /* Set Duration etc. */
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: all .75s;
  }

  /* What happens */
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  .icons {
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    bottom: 100px;
    right: 0;
    left: 0;
  }

  .icons i {
    color: #6D7275;
    font-size: 30px;
    cursor: pointer;
  }


</style>


