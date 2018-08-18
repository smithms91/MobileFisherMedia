<template>
  <div id="worked-with">
    <p class="clients">&ndash; Clients</p>
    <h1 id="customers">We've Worked With The Best</h1>
    <p class="description">Although we are a small company we have had the opportunity of working with some great clients! Here is some of our past work.</p>
    <div class="companies">
      <div class="company">
        <h1>Fisher Media</h1>
        <p>Website</p>
      </div>
      <div class="company">
        <h1>Fisher Media</h1>
        <p>Website</p>
      </div>
      <div class="company">
        <h1>Fisher Media</h1>
        <p>Website</p>
      </div>
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
    color: #0C120C;
  }

  .clients {
    text-transform: uppercase;
    font-size: 20px;
  }

  #customers {
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

  .companies {
    margin-top: 20px;
  }

  .company {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: #333;
    color: #eee;
  }

  .company h1 {
    font-size: 20px;

  }
  
</style>


