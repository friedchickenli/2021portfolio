<template>
  <div id="workContainer">
        <!-- <span class="titleWithOutline" :data-text="workContent.work_intro_text">
          {{workContent.intro_text}}
        </span>
        <prismic-rich-text class="pText" :field="workContent.work_intro_description" /> -->
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return{
      workContent: this.$store.state.work,
    }
  }
}
</script>