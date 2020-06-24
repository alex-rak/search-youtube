<template>
  <div class="main">
    <search />
    <results v-if="query" />
  </div>
</template>

<script>
import Search from "@/components/Search";
import Results from "@/components/Results";
export default {
  name: "Main",
  components: {
    Search,
    Results,
  },
  computed: {
    query() {
      return this.$route.query.search;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

}
</style>
