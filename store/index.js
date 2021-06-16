export const state = () => ({
  work: [],
  about: {},
  home: {}
})

export const mutations = {
  SET_WORK(state, data) {
    state.work = data;
  },
  SET_ABOUT(state, data) {
    state.about = data;
  },
  SET_HOME(state, data){
    state.home = data
  }
}
export const actions = {
  async nuxtServerInit({
    commit
  }, app) {
    const workItems = await app.$prismic.api.query(
      app.$prismic.predicates.at('document.type', 'work_item'), {
        orderings: '[my.project.order_id]'
      }
    );
    const homeData = await app.$prismic.api.getSingle('home_page');
    const aboutData = await app.$prismic.api.getSingle('about_page');

    commit('SET_WORK', workItems.results.map(item => item.data));
    commit('SET_ABOUT', aboutData.data);
    commit('SET_HOME', homeData.data);
  }
}