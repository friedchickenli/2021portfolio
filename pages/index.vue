<template>
    <div id="homePageTitle" v-if="homePageContent">
      <div>
        <span class="titleWithOutline" :data-text="homePageContent.intro_text">
          {{homePageContent.intro_text}}
        </span>
        <div id="indexParagraph">
        <prismic-rich-text class="pText" :field="homePageContent.intro_subtext" />
        </div>
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
  padding-left:2rem;
}

.titleWithOutline::after{
  color:#f4d9d4;
  }

#indexParagraph .pText{
  padding-left: 45px;
  }

#homePageImage {
  width: 100%;
  height: 550px;
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
