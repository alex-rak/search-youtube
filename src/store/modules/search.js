import Axios from "axios";

const state = {
  results: [],
  typeGrid: "grid",
};

const getters = {
};

const actions = {
  SEARCH(context, request) {
    return Axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: "snippet",
        maxResults: request.maxResults || 12,
        type: "video",
        q: request.search,
        order: request.order || "relevance",
        key: process.env.VUE_APP_API_KEY2,
      },
    })
      .then(async (res) => {
        const ids = [];
        const data = [];
        for (let i = 0; i < res.data.items.length; i++) {
          ids.push(res.data.items[i].id.videoId);
        }
        const resView = await context.dispatch("GET_VIDEO_STATISTICS", ids);
        for (let i = 0; i < resView.data.items.length; i++) {
          const item = res.data.items.find(el => el.id.videoId === resView.data.items[i].id);
          item.snippet.views = resView.data.items[i].statistics.viewCount;
          data.push(item);
        }
        context.commit("setResults", data);
        return res;
      }).catch(err => {
        console.log("err search", err);
        return err.response;
      });
  },
  GET_VIDEO_STATISTICS(context, id) {
    return Axios.get("https://www.googleapis.com/youtube/v3/videos", {
      params: {
        part: "statistics",
        id: id.join(","),
        key: process.env.VUE_APP_API_KEY2,
      },
    })
      .then(res => {
        return res;
      }).catch(err => {
        console.log("err view", err);
        return err.response;
      });
  },
  SET_TYPE_GRID({ commit }, name) {
    commit("setTypeGrid", name);
  },
};

const mutations = {
  setResults(state, data) {
    state.results = data;
  },
  setTypeGrid(state, name) {
    if (state.typeGrid !== name) {
      state.typeGrid = name;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
