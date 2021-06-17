<template>

  <div id= "about">
    <div id="aboutStructure">
      <div id= "aboutTitle">
        <span class="titleWithOutline" :data-text="aboutMeContent.intro_text">
          {{aboutMeContent.intro_text}}
        </span>
      </div>
      <div id="aboutParagraph">
        <prismic-rich-text class="pText" :field="aboutMeContent.about_description" />
      </div>

      <div id="contacts">
        <span class="titleWithOutline" :data-text="aboutMeContent.contact_title">
          {{aboutMeContent.contact_title}}
        </span>
        <div class="contactItemContainer">
          <div class="contactItem" v-for="item in aboutMeContent.contact_info" :key="item.name">
          <prismic-link :field="item.contact_link">
            <prismic-image :field="item.contact_icon" />
          </prismic-link>
        </div>
        </div>
      </div>

    </div>  
    <div id="aboutImageContainer">
      <prismic-image :field="aboutMeContent.about_image" />
    </div>
      
  </div>

</template>

<style>
#about{
  display:grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}
#aboutTitle .titleWithOutline::after {
  color: #8fc6f0;
}

#aboutParagraph{
  text-align: left;
  line-height:1.5;
  padding-left:-45px;
  padding-top:1rem;
}
.pText strong{
  color:#494949;
  background-color:#F4DBF1;
}
#aboutImageContainer {
  height: 80%;
  width:100%;
}
#aboutImageContainer img {
  width:100%;
  height:100%;
  object-fit: contain;
}
#contacts .titleWithOutline {
font-size:4rem;
letter-spacing: 0.5rem;
}

#contacts .titleWithOutline::after {
  color: #f4d9d4;
  width:100%;
}
.contactItemContainer{
  display: flex;
  flex-direction: row;  
  padding-left: 3rem;
}

.contactItem img {
    width:100px;
    height:100px;
    object-fit: contain;
}

</style>

<script>
export default {
  data() {
    return{
      aboutMeContent: this.$store.state.about,
    }
  }
}
</script>