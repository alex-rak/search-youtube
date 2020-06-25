<template>
  <a-modal
    v-model="visible"
    :after-close="close"
    centered
    :dialog-class="$s['modal']"
    :footer="null"
    :closable="false">
    <span
      :class="$s.title">
      {{ type === "save" ? "Сохранить" : "Изменить" }} запрос
    </span>
    <label :class="$s.label">
      Запрос
      <a-input
        v-model="result.search"
        :disabled="type === 'save'"
        :class="$s.input" />
    </label>
    <label :class="$s.label">
      *Название
      <a-input
        v-model="result.name"
        placeholder="Укажите название"
        :class="$s.input" />
    </label>
    <label :class="$s.label">
      Сортировать по
      <a-select
        :class="$s.select"
        placeholder="Без сортировки"
        @change="changeOrder">
        <a-select-option
          v-for="(item, i) in orders"
          :key="i"
          :class="$s['select-item']"
          :value="item">
          {{ item }}
        </a-select-option>
      </a-select>
    </label>
    <label :class="$s.label">
      Максимальное количество
      <a-row :class="$s.slider">
        <a-slider
          v-model="result.maxResults"
          :class="$s.range"
          :min="1"
          :max="50" />
        <a-input-number
          v-model="result.maxResults"
          :class="$s.input"
          :min="1"
          :max="50" />
      </a-row>
    </label>
    <div :class="$s.buttons">
      <a-button
        :class="$s.button"
        @click="close">
        {{ type === "save" ? "Не сохранять" : "Не изменять" }}
      </a-button>
      <a-button
        type="primary"
        class="success"
        :class="[$s.button, $s.success]"
        @click="saveFavourites">
        {{ type === "save" ? "Сохранить" : "Изменить" }}
      </a-button>
    </div>
  </a-modal>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FavouritesModal",
  props: {
    request: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      default: "save",
    },
  },
  data() {
    return {
      orders: ["relevance", "rating", "title", "data", "viewCount"],
      visible: true,
      result: {
        search: null,
        name: null,
        order: null,
        maxResults: 12,
      },
    };
  },
  created() {
    this.result = { ...this.result, ...this.request };
  },
  methods: {
    ...mapActions("favourites", [
      "SAVE_FAVOURITES", "GET_FAVOURITES", "UPDATE_FAVOURITES",
    ]),
    changeOrder(order) {
      this.result.order = order;
    },
    saveFavourites() {
      if (this.result.name) {
        this.GET_FAVOURITES();
        if (this.type === "save") {
          this.SAVE_FAVOURITES({ ...this.result, id: Date.now() });
        } else {
          this.UPDATE_FAVOURITES(this.result);
        }
        this.close(true);
      }
    },
    close(wasSave = false) {
      this.$emit("close", wasSave);
    },
  },
};
</script>

<style lang="scss" module="$s">
.label {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  font-size: 16px;
  margin-top: 25px;
  .input {
    height: 48px;
    font-weight: normal;
    font-size: 20px;
    padding: 12px 15px;
  }
  .select {
    height: 100%;
    font-size: 20px;
  }
  .slider {
    display: flex;
    justify-content: space-between;
    height: 48px;
    align-items: center;
    .range {
      width: 100%;
      margin-right: 15px;
    }
    .input {
      padding: 0 0;
      display: flex;
      align-items: center;
    }
    input {
      height: 100%;
      font-size: 20px;
      line-height: 24px;
    }
  }
}
.select-item {
  line-height: 30px;
}
.title {
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: center;
}
.buttons {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 35px;
  .button {
    width: 49%;
    min-width: fit-content;
    font-size: 20px;
    height: 52px;
    color: #1390E5;
    &.success {
      color: #ffffff;
    }
  }
}
</style>
<style lang="scss">
.ant-select-selection--single {
  height: 48px;
  font-size: 20px;
  .ant-select-selection__rendered {
    height: 100%;
    .ant-select-selection__placeholder {
      line-height: 48px;
      height: 100%;
      margin-top: 0;
      top: 0;
    }
    .ant-select-selection-selected-value {
      height: 100%;
      line-height: 48px;
    }
  }
}
</style>
