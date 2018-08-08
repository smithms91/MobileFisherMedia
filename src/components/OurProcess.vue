<template>
  <div id="our-process">
    <h1 id="process">Our Process</h1>
    <div class="block-container">
      <div class="blocks">
        <i class="fas fa-chart-pie"></i>
        <p>Research</p>
      </div>
      <div class="blocks">
        <i class="far fa-comment"></i>
        <p>Plan</p>
      </div>
      <div class="blocks">
        <i class="far fa-edit"></i>
        <p>Create</p>
      </div>
      <div class="blocks">
        <i class="fab fa-vuejs"></i>
        <p>Deploy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurProcess",
  data() {
    return {

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
  }

  .blocks i {
    font-size: 60px;
    margin-bottom: 20px;
    color: #63b6ff;
  }

  .blocks p {
    font-size: 20px;
    font-weight: 700;
  }

</style>


