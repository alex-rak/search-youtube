<template>
  <div
    class="results"
    :class="{'list' : typeGrid === 'list'}">
    <item-result
      v-for="item in results"
      :key="item.id.videoId"
      :item="item"
      :type="typeGrid" />
  </div>
</template>

<script>
import ItemResult from "@/components/ItemResult";
import { mapState } from "vuex";
export default {
  name: "Results",
  components: {
    ItemResult,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState("search", [
      "results", "typeGrid",
    ]),
  },
};
</script>

<style lang="scss" scoped>
.results {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  &.list {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 0;
  }
}
</style>
