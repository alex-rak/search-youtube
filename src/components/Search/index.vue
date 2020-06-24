<template>
  <div
    class="search"
    :class="{'empty': !query}">
    <div class="search__title">
      Поиск видео
    </div>
    <a-input-search
      v-model="searchField"
      class="search__input"
      placeholder="input search text"
      size="large"
      @search="onSearch">
      <a-popover
        v-if="query"
        slot="suffix"
        v-model="visible"
        placement="bottom"
        trigger="click">
        <template slot="title">
          Поиск сохранен в разделе &#171;Избранное&#187;
        </template>
        <template slot="content">
          <router-link to="/favourites">
            Перейти в избранное
          </router-link>
        </template>
        <a-icon
          type="heart"
          style="color: #1390E5"
          @click="addFavourites" />
      </a-popover>
      <a-button
        slot="enterButton"
        class="search__button"
        type="primary">
        Поиск
      </a-button>
    </a-input-search>
    <div
      v-if="query"
      class="search__results">
      <div class="text">
        <span class="text__static">
          Видео по запросу
        </span>
        <span class="text__request">
          &#171;{{ query }}&#187;
        </span>
        <span class="text__counter">
          {{ counter ? counter : "0 результатов" }}
        </span>
      </div>
      <div class="icons">
        <img
          class="icon"
          :class="{'active': typeGrid === 'list'}"
          src="@/assets/icons/list.svg"
          @click="SET_TYPE_GRID('list')">
        <img
          class="icon"
          :class="{'active': typeGrid === 'grid'}"
          src="@/assets/icons/grid.svg"
          @click="SET_TYPE_GRID('grid')">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      searchField: null,
      counter: null,
      visible: false,
    };
  },
  computed: {
    ...mapState("search", [
      "typeGrid",
    ]),
    query() {
      return this.$route.query.search;
    },
  },
  created() {
    if (this.query) {
      this.searchField = this.query;
      this.setResults(this.query);
    }
  },
  methods: {
    ...mapActions("search", [
      "SEARCH", "SET_TYPE_GRID", "ADD_FAVOURITES",
    ]),
    onSearch() {
      console.log(this.searchField, this.query);
      if (this.searchField && this.searchField !== this.query) {
        this.$router.push({ name: "MainPage", query: { search: this.searchField } });
        this.setResults(this.searchField);
      }
    },
    async setResults(text) {
      const res = await this.SEARCH(text);
      this.counter = res.data.pageInfo.totalResults;
    },
    addFavourites() {
      this.ADD_FAVOURITES();
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  height: auto;
  width: 100%;
  margin-top: 40px;
  &__title {
    margin-bottom: 15px;
    font-size: 28px;
    text-align: start;
  }
  &__input {
    /deep/input {
      font-style: normal;
      font-size: 20px;
    }
    /deep/svg {
      height: 20px;
      width: 20px;
    }
  }
  &__results {
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    .text {
      font-size: 16px;
      &__request {
        font-weight: 500;
      }
      &__counter {
        margin-left: 5px;
        opacity: 0.4;
      }
    }
    .icons {
      .icon {
        margin-left: 20px;
        opacity: 0.5;
        &:first-child {
          margin-left: 0;
        }
      }
      .active {
        opacity: 1;
      }
    }
  }
  &.empty {
    height: 100%;
    width: 70%;
    margin-top: 20%;
    .search__title {
      text-align: center;
      font-weight: normal;
      font-size: 36px;
      margin-bottom: 40px;
    }
  }
}
</style>

<style lang="scss">
.ant-popover-title {
  border-bottom: 1px solid transparent;
  font-weight: normal;
  font-size: 16px;
  max-width: 220px;
}
</style>
