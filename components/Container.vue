<template>
  <div class="container">
    <img class="star" id="star1" src="/images/star.png">
    <img class="star" id="star2" src="/images/star.png">
    <slot />
  </div>
</template>
<style scoped>
  .container {
    width: 75%;
    max-width: 1920px;
    height: 76vh;
    margin: 8vh auto 0vh auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 4rem 2rem;
    border: 5px solid #404040;
    border-radius: 50px;
    background: #f9f9f9;
  }
  .star {
    width: 80px;
    position: absolute;
    z-index: 1;
  }
  #star1 {
  left: -42px;
  top: -45px;
  }
  #star2 {
    right: -42px;
    bottom: -45px;
  }
</style>