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
  &__title {
    font-weight: 500;
    font-size: 16px;
  }
  &__buttons {
    display: flex;
    justify-content: space-between;
    width: 150px;
  }
}
</style>
