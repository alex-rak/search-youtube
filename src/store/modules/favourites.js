const state = {
  favourites: [],
};

const getters = {

};

const actions = {
  /**
   * Изменение сохраненного запроса
   * @param {Object} data избранное, кторое отредактировали
   */
  UPDATE_FAVOURITES({ state, dispatch, commit }, data) {
    const index = state.favourites.findIndex(el => el.id === data.id);
    if (index !== -1) {
      const items = [...state.favourites];
      items[index] = data;
      commit("setFavourites", items);
      dispatch("SAVE_INTO_LOCALSTORAGE");
    }
  },
  SAVE_FAVOURITES({ state, commit, dispatch }, data) {
    commit("setFavourites", [...state.favourites, data]);
    dispatch("SAVE_INTO_LOCALSTORAGE");
  },
  /**
   * Получение избранного из локалсторадже по login
   */
  GET_FAVOURITES({ commit, rootState }) {
    const allFavourites = JSON.parse(window.localStorage.getItem("youtube-favourites")) || [];
    const favorites = allFavourites.find(el => el.user === rootState.auth.user)?.favourites || [];
    commit("setFavourites", favorites);
  },
  /**
   * Сохранение в localStorage из state, если уже есть избранное юзера,
   * то сохраянем туда, иначе создаем новый объект
   */
  SAVE_INTO_LOCALSTORAGE({ rootState, state }) {
    const items = JSON.parse(window.localStorage.getItem("youtube-favourites")) || [];
    let item = items.find(el => el.user === rootState.auth.user);
    if (!item) {
      item = {
        user: rootState.auth.user,
      };
      items.push(item);
    }
    item.favourites = state.favourites;
    window.localStorage.setItem("youtube-favourites", JSON.stringify(items));
  },
  REMOVE_FAVOURITES({ commit, dispatch }, id) {
    commit("removeFavourites", id);
    dispatch("SAVE_INTO_LOCALSTORAGE");
  },
};

const mutations = {
  setFavourites(state, data) {
    state.favourites = data;
  },
  updateFavourites(state, index, data) {
    state.favourites.splice(index, 0, data);
  },
  removeFavourites(state, id) {
    const index = state.favourites.findIndex(el => el.id === id);
    state.favourites.splice(index, 1);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
