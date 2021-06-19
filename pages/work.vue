<template>
  <div id="work">
    <div id="workContentContainer">
      <span class="titleWithOutline" :data-text="workContent.work_intro_text">
        {{workContent.intro_text}}
      </span>
      <prismic-rich-text class="pText" :field="workContent.work_intro_description" />
    </div>
    <div id="workItemsContainer">
      <!-- Create a new reusable component that display each individual work item -->
      <!-- <WorkItem v-for="workItem in this.workItems" v-bind="workItem"/> -->
    </div>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return{
      workContent: this.$store.state.work,
      workItems: this.$store.state.workItems
    }
  }
}
</script>