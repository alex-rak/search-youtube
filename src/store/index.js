import Vue from "vue";
import Vuex from "vuex";
import search from "@/store/search";
import auth from "@/store/auth";

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
  },
});
