<template>
  <div id="our-process">
    <h1 id="process">Our Process</h1>
    <div class="block-container">
      <div class="blocks">
        <i class="fas fa-chart-pie"></i>
        <p>Research</p>
      </div>
      <div class="blocks" @mouseenter="flip[2] = !flip[2]" @mouseleave="flip[2] = !flip[2]">
        <transition name="fade">
          <div class="front" v-if="flip[2]">
            <div class="stuff">
              <i class="far fa-comment"></i>
              <p>Plan</p>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div class="back" v-if="!flip[2]">
            <div class="stuff">
              <p>Deploy</p>
              <p>Lets Do It</p>
            </div>
          </div>
        </transition>
      </div>
      <div class="blocks">
        <i class="far fa-edit"></i>
        <p>Create</p>
        
      </div>
      <div class="blocks" @mouseenter="flip[3] = !flip[3]" @mouseleave="flip[3] = !flip[3]">
        <transition name="fade">
          <div class="front" v-if="flip[3]">
            <div class="stuff">
              <i class="fab fa-vuejs"></i>
              <p>Deploy</p>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div class="back" v-if="!flip[3]">
            <div class="stuff">
              <p>Deploy</p>
              <p>Lets Do It</p>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurProcess",
  data() {
    return {
      flip: [true, true, true, true]
    }
  }
}
</script>

<style scoped>
  #our-process {
    background-image: url('../assets/our-process.png');
    background-size: cover;
    background-position: center;
    padding: 10px;
    text-transform: uppercase;
    color: #eee;
    padding: 60px 10px;
  }

  #our-process h1 {
    font-size: 75px;
    font-weight: 700;
    text-align: left;
    line-height: 80px;
    margin-bottom: 40px;
  }

  .block-container {
    width: 100%;
  }

  .blocks {
    width: 100%;
    height: 190px;
    border: 1px solid grey;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .blocks i {
    font-size: 60px;
    margin-bottom: 20px;
    color: #C7D6D5;
    text-shadow: 0px 0px 3px rgba(0,0,0,0.5);
  }

  .blocks p {
    font-size: 20px;
    font-weight: 700;
  }

  .stuff {
    position: absolute;
    /* top: 10%; */
    bottom: -50px;
    /* left: 50%; */
    /* transform: translateX(50%); */
    transform: translate(-50%);
  }

  .front {
    position: relative;
  }

  .back {
    position: relative;
  }


  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

</style>


