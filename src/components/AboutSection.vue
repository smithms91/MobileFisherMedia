<template>
  <div id="about-section">
    <div class="left-sidebar">
      <p>Pixel8: Wood Art</p>
    </div>
    <div class="content">
      <h1 id="about">Small Company Big Solutions</h1>
      <p><span class="first-letter">P</span>ixel8 is a small company located in Michigan that focuses on creating high quality art using painted wood blocks. We do custom work as well as offer premade designs you can choose from.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  #about-section {
    position: relative;
    padding: 10px 0 40px 0;
  }

  .left-sidebar {
    position: absolute;
    top: 150px;
    text-transform: uppercase;
    left: -100px;
    transform: rotate(-90deg);
    font-size: 20px;
    letter-spacing: 3px;
    color: #aaa;
    font-weight: 700;
  }

  .content {
    padding: 0 20px 40px 40px;
    font-size: 28px;
    text-align: left;
    text-transform: uppercase;
  }

  .content h1 {
    font-weight: 700;
    line-height: 60px;
    color: #383c5d;
  }

  .content p {
    font-size: 20px;
    text-transform: none;
    color: #52545f;
  }

  .first-letter {
    color: #383c5d;
    position: relative;
    top: 10px;
    margin: 0 7px 7px 5px;
    font-family: 'Georgia', sans-serif;
    font-size: 60px;
  }



</style>


