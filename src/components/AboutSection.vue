<template>
  <div id="about-section">
    <div class="left-sidebar">
      <p>Fisher Media</p>
    </div>
    <div class="content">
      <h1 id="about">Small Company Big Solutions</h1>
      <p><span class="first-letter">F</span>isher Media is a small web development company in Detroit, but we feel much bigger than that. We hold ourselves to a very high standard when it comes to the work we provide so you should feel safe choosing Fisher Media as your Web Development partner. </p>
      <button>More About Us</button>
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
    top: 250px;
    text-transform: uppercase;
    left: -200px;
    transform: rotate(-90deg);
    font-size: 20px;
    letter-spacing: 25px;
    color: #C20114;
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

  .content button {
    padding: 20px 30px;
    text-align: center;
    display: block;
    border: none;
    background-color: #C20114;
    border: 2px solid transparent;
    font-size: 16px;
    color: #ECEBF3;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin: 20px auto -40px auto;
    transition: all .3s;
    cursor: pointer;
  }

  .content button:hover {
    padding: 20px 30px;
    text-align: center;
    display: block;
    border: 2px solid #C20114;
    background-color: transparent;
    font-size: 16px;
    color: #C20114;
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin: 20px auto -40px auto;
  }

  .first-letter {
    color: #6D7275;
    position: relative;
    top: 10px;
    margin: 0 7px 7px 5px;
    font-family: 'Georgia', sans-serif;
    font-size: 60px;
  }

  #about {
    color: rgb(53, 45, 45);
  }

</style>


