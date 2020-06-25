<template>
  <div class="favourites">
    <div class="favourites__title">
      Избранное
    </div>
    <div class="favourites__list">
      <div
        v-for="item in favourites"
        :key="item.id">
        <item-favourit :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ItemFavourit from "@/components/ItemFavourit";
export default {
  name: "Favourites",
  components: {
    ItemFavourit,
  },
  computed: {
    ...mapState("favourites", [
      "favourites",
    ]),
  },
  created() {
    this.GET_FAVOURITES();
  },
  methods: {
    ...mapActions("favourites", [
      "GET_FAVOURITES",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.favourites {
  &__title {
    font-size: 28px;
    margin-top: 30px;
  }
}
</style>
