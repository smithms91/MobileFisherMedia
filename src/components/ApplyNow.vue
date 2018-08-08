<template>
  <div id="apply-now">
    <p><em>Create something great</em></p>
    <h1>Let's Get Started</h1>
    <p>We provide extra attention to our customers and because of this we only take on a select number of custom pieces at once. Apply now to see if you're a good fit.</p>
    <button>Apply Now</button>
    <img src="../assets/bottom-curve.png" alt="">
  </div>
</template>

<script>
export default {
  name: "ApplyNow",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  #apply-now {
    background-image: linear-gradient(rgba(53, 87, 225, 0.9), rgba(93, 149, 246, 0.75)), url('../assets/apply-now.png');
    background-size: cover;
    background-position: center;
    color: #eee;
    padding: 100px 20px;
    font-size: 24px;
    position: relative;
  }

  h1 {
    /* font-family: 'Poppins', sans-serif; */
    text-transform: uppercase;
    font-weight: 700;
    font-size: 72px;
    line-height: 90px;
    margin: 30px 0;
  }

  p {
    font-family: 'PT Serif', serif;
  }

  button {
    padding: 20px 60px;
    text-transform: uppercase;
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: #4F84EA;
    background-color: #eee;
    border: none;
    margin: 50px 0;
    border: 1px solid #eee;
    transition: all .3s;
  }

  button:hover {
    background-color: transparent;
    border: 1px solid #eee;
    color: #eee;
  }

  img {
    width: 100%;
    height: 80px;
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
  }

</style>


