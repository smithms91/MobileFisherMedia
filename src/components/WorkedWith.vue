<template>
  <div id="worked-with">
    <p class="clients">&ndash; Clients</p>
    <h1 id="customers">We've Worked With The Best</h1>
    <p class="description">Pixel 8 has worked with companies large and small. We often offer products for raffle prizes and corporate events as they are fun to have in the office.</p>
    <div class="worked-with-image">
      <img src="../assets/workedwith.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkedWith",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
  #worked-with {
    margin-top: 50px;
    text-align: left;
    padding: 20px;
  }

  .clients {
    text-transform: uppercase;
    font-size: 20px;
  }

  #worked-with h1 {
    font-weight: 700;
    font-size: 50px;
    width: 300px;
    text-transform: uppercase;
    line-height: 60px;
  }

  .description {
    font-size: 20px;
    font-family: 'PT Serif', serif;
    color: #62646F;
    margin-top: 10px;
  }

  .worked-with-image {
    margin: 20px 0;
  }

  .worked-with-image img {
    width: 100%;
  }
</style>


