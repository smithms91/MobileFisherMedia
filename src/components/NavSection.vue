<template>
  <div id="nav-section">
    <div class="top-nav">
      <div class="logo">
        <img src="./../assets/logo.png" alt="">
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
      <img src="./../assets/bottom-curve.png" alt="">
    </div>
    <transition name="slide-fade">
      <div class="nav-popup" v-if="open">
        <div class="close" @click="open = !open"><i class="fas fa-times"></i></div>
        <ul>
          <li v-scroll-to="'#home'" @click="open = !open">01 Home</li>
          <li v-scroll-to="'#about'" @click="open = !open">02 About</li>
          <li v-scroll-to="'#process'" @click="open = !open">03 Process</li>
          <li v-scroll-to="'#customers'" @click="open = !open">04 Customers</li>
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
    background-image: url('./../assets/banner.png');
    height: 500px;
    background-size: cover;
    background-position: center;
    position: relative;
  }

  .top-nav {
    display: flex;
    justify-content: space-between;
    padding: 40px 10px; 
  }

  .logo {
    width: 150px;
  }

  .logo img {
    width: 100%;
  }

  .sandwich {
    width: 50px;
    height: 50px;
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
    color: #63B6FF;
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
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
  }

  .close {
    position: absolute;
    top: 20px;
    right: 40px;
    font-size:  40px;
    color: #eee;
  }

  .nav-popup ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #eee;
    font-size: 35px;
  }

  .nav-popup ul li {
    margin-bottom: 20px;
  }

  .nav-popup ul li a {
    text-decoration: none;
    color: #eee;
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


</style>


