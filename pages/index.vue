<template>
    <div id="homePageTitle" v-if="homePageContent">
      <div>
        <span class="titleWithOutline" :data-text="homePageContent.intro_text">
          {{homePageContent.intro_text}}
        </span>
        <prismic-rich-text id="homePageText" :field="homePageContent.intro_subtext" />
      </div>
      <div>
        <img id="homePageImage" src="/images/bearPlanet.png" />
      </div>
    </div>
</template>
<style>
#homePageTitle {
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  column-gap: 2.5rem;
  width: 100%;
}
.titleWithOutline {
  font-family: "Rubik", sans-serif;
  font-size: 5rem;
  font-weight: bold;
  letter-spacing: 0.8rem;
  color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #404040;
  position: relative;
  z-index: 1;
}

.titleWithOutline::after {
  content: attr(data-text);
  color: #f4d9d4;
  -webkit-text-stroke-color: transparent;
  position: absolute;
  right: -10px;
  bottom: -9px;
  z-index: -1;
}

#homePageText {
  font-family: "Montserrat", "sans-serif";
  font-weight: medium;
  font-size: 1rem;
  color: #404040;
  letter-spacing: 3.5px;
  position: relative;
  padding-left: 45px;
}

#homePageImage {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
}
</style>
<script>
export default {
  data() {
    return{
      homePageContent: this.$store.state.home,
    }
  }
}
</script>
