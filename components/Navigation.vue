<template>
  <div class="navigation">
    <span class="button" id="homeB">
      <nuxt-link to="/">Home</nuxt-link>
    </span>
    <span class="button" id="aboutMeB">
      <nuxt-link to="/about">About</nuxt-link>
    </span>
    <span class="button" id="workB">
      <nuxt-link to="/work">Work</nuxt-link>
    </span>
  </div>
</template>

<style>
.navigation{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 16vh;
  width: 50%;
  margin: auto;
}
.button{
  font-family: "Rubik", sans-serif;
  font-style: italic;
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.5rem 1.5rem;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #404040;
  border: 3px solid #404040;
  border-radius: 20px;
  text-align: center;
  color: #f9f9f9;
  margin: 0 0.5rem;
}

#homeB{
  background: #8fc6f0;
}

#aboutMeB{
  background: #f4d9d4;
}

#workB{
  background: #F4DBF1;
}

a:link,a:visited,a:active{
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #404040;
  color:#f9f9f9;
  text-decoration: none !important;
}

a:hover{
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: #404040;
  color:linear-gradient(135deg, #f4d9d4 0%, #8fc6f0 100%);
}
</style>