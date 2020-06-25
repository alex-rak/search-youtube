import Vue from "vue";
import Vuex from "vuex";
import search from "@/store/modules/search";
import auth from "@/store/modules/auth";
import favourites from "@/store/modules/favourites";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    search,
    auth,
    favourites,
  },
});
