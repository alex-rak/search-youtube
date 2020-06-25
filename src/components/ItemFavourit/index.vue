<template>
  <div class="item-favourit">
    <div class="item-favourit__title">
      {{ item.name }}
    </div>
    <div class="item-favourit__buttons">
      <a
        @click="search(item)">
        Выполнить
      </a>
      <a
        @click="edit">
        Изменить
      </a>
      <a
        class="button__remove"
        @click="REMOVE_FAVOURITES(item.id)">
        Удалить
      </a>
    </div>
    <favourites-modal
      v-if="visible"
      type="edit"
      :request="item"
      @close="closeModal" />
  </div>
</template>

<script>
import FavouritesModal from "@/components/FavouritesModal";
import { mapActions } from "vuex";
export default {
  name: "ItemFavourit",
  components: {
    FavouritesModal,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    ...mapActions("favourites", [
      "REMOVE_FAVOURITES",
    ]),
    search(item) {
      this.$router.push({ name: "MainPage", query: { ...item } });
    },
    edit() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.item-favourit {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  background: #ffffff;
  border-bottom: 1px solid #F1F1F1;
  &__title {
    font-weight: 500;
    font-size: 16px;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    a {
      margin: 0 5px;
      }
    .button__remove {
      color: red;
    }
  }
}
</style>
