<template>
  <div
    class="search"
    :class="{'empty': !query.search}">
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
        v-if="query.search"
        slot="suffix"
        v-model="popOverVisible"
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
      </a-popover>
      <a-icon
        v-if="query.search"
        slot="suffix"
        type="heart"
        style="color: #1390E5"
        @click="openModal" />
      <a-button
        slot="enterButton"
        class="search__button"
        type="primary">
        Поиск
      </a-button>
    </a-input-search>
    <favourites-modal
      v-if="visible"
      :request="request"
      @close="closeModal" />
    <div
      v-if="query.search"
      class="search__results">
      <div class="text">
        <span class="text__static">
          Видео по запросу
        </span>
        <span class="text__request">
          &#171;{{ query.search }}&#187;
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
import FavouritesModal from "@/components/FavouritesModal";
import { mapActions, mapState } from "vuex";
export default {
  name: "Search",
  components: {
    FavouritesModal,
  },
  data() {
    return {
      searchField: null,
      counter: null,
      visible: false,
      popOverVisible: false,
    };
  },
  computed: {
    ...mapState("search", [
      "typeGrid",
    ]),
    query() {
      return this.$route.query;
    },
    request() {
      return {
        search: this.searchField,
      };
    },
  },
  created() {
    if (this.query.search) {
      this.searchField = this.query.search;
      this.setResults(this.query);
    }
  },
  methods: {
    ...mapActions("search", [
      "SEARCH", "SET_TYPE_GRID", "ADD_FAVOURITES",
    ]),
    ...mapActions("favourites", [
      "SAVE_FAVOURITES",
    ]),
    onSearch() {
      if (this.searchField && this.searchField !== this.query.search) {
        this.$router.push({ name: "MainPage", query: { search: this.searchField } });
        this.setResults({ search: this.searchField });
      }
    },
    async setResults(data) {
      const res = await this.SEARCH(data);
      this.counter = res.data.pageInfo.totalResults;
    },
    openModal() {
      if (this.searchField) {
        this.visible = true;
      }
    },
    closeModal(wasSave) {
      if (wasSave) {
        this.popOverVisible = true;
      }
      this.visible = false;
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
