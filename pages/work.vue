<template>
  <div id="work">
    <div id="workContentContainer">
      <div id=workTitle>
      <span class="titleWithOutline" :data-text="workContent.work_intro_text">
        {{workContent.work_intro_text}}
      </span>
      </div>
      <div id="workDescription">
      <prismic-rich-text class="pText" :field="workContent.work_intro_description" />
      </div>
    </div>
    <div id="workItemsContainer">
      <!-- Create a new reusable component that display each individual work item -->
      <!-- <WorkItem v-for="workItem in this.workItems" v-bind="workItem"/> -->
    </div>
  </div>
</template>

<style scoped>
#workTitle .titleWithOutline::after {
  color: #8fc6f0;
}

#workDescription .pText{
  font-weight: bold;
  -webkit-text-stroke-color:#f9f9f9;
  background-color: #F4DBF1;
}

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