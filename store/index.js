export const state = () => ({
  workItems: [],
  work: {},
  about: {},
  home: {}
})

export const mutations = {
  SET_WORK(state, data) {
    state.work = data;
  },
  SET_WORK_ITEMS(state, data) {
    state.workItems = data;
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
      app.$prismic.predicates.at('document.type', 'work')
    );
    const homeData = await app.$prismic.api.getSingle('home_page');
    const workData = await app.$prismic.api.getSingle('work_page');
    const aboutData = await app.$prismic.api.getSingle('about_page');

    commit('SET_WORK_ITEMS', workItems.results.map(item => item.data));
    commit('SET_WORK', workData.data);
    commit('SET_ABOUT', aboutData.data);
    commit('SET_HOME', homeData.data);
  }
}