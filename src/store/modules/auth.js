import { USERS } from "@/assets/users";
import Axios from "axios";

const state = {
  user: window.localStorage.getItem("youtube-user") || null,
  token: window.localStorage.getItem("youtube-token") || null,
};

const getters = {
};

const actions = {
  /**
   * Логиним пользователя, генерируем случайный токен
   * @param {Object} data данные пользователя
   */
  AUTH({ commit }, data) {
    const user = USERS.find(el => el.login === data.login);
    if (!user) {
      console.error("Пользователь не найден");
      return new Promise((resolve, reject) => reject(Error("Пользователь не найден 2")));
    }
    if (user.password !== data.password) {
      console.error("Не верный логин или пароль");
      return new Promise((resolve, reject) => reject(Error("Не верный логин или пароль 2")));
    }
    return Axios.get("https://helloacm.com/api/random/?n = 128")
      .then(res => {
        commit("setToken", res.data);
        commit("setUser", data.login);
        return res;
      })
      .catch(err => err);
  },
};

const mutations = {
  setUser(state, login) {
    state.user = login;
    window.localStorage.setItem("youtube-user", login);
  },
  setToken(state, token) {
    state.token = token;
    window.localStorage.setItem("youtube-token", token);
  },
  removeToken(state) {
    state.token = undefined;
    state.user = undefined;
    window.localStorage.removeItem("youtube-user");
    window.localStorage.removeItem("youtube-token");
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
