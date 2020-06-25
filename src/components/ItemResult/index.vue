<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="item"
    :class="{'list' : type === 'list'}">
    <a
      :href="'https://www.youtube.com/watch?v=' + id"
      target="_blank">
      <img
        class="item__image"
        :src="image">
    </a>
    <div class="text">
      <a
        :href="'https://www.youtube.com/watch?v=' + id"
        target="_blank"
        class="text__title"
        v-html="title" />
      <div class="text__info">
        <a
          :href="'https://www.youtube.com/channel/'+ channelId"
          target="_blank"
          class="text__info__channel"
          v-html="channelTitle" />
        <div class="text__info__views">
          {{ views }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemResult",
  props: {
    item: {
      type: Object,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    id() {
      return this.item.id.videoId;
    },
    image() {
      return this.item.snippet.thumbnails.medium.url;
    },
    title() {
      const title = this.item.snippet.title;
      if (this.type === "grid") {
        return title.length > 50 ? title.slice(0, 50) + "..." : title;
      }
      return title;
    },
    channelTitle() {
      const channelTitle = this.item.snippet.channelTitle;
      if (this.type === "grid") {
        return channelTitle.length > 30 ? channelTitle.slice(0, 30) + "..." : channelTitle;
      }
      return channelTitle;
    },
    channelId() {
      return this.item.snippet.channelId;
    },
    views() {
      let views = +this.item.snippet.views;
      let text;
      if (views > 1000000000) {
        views = views / 1000000000;
        text = " млрд. просмоторов";
      } else if (views > 1000000) {
        views = views / 1000000;
        text = " млн. просмоторов";
      } else if (views > 10000) {
        views = views / 1000;
        text = " тыс. просмоторов";
      }
      return views.toFixed(1) + text;
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  width: calc(25% - 20px);
  margin: 0 10px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__image {
    width: 100%;
    object-fit: cover;
  }
  .text {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &__title {
      margin-top: 5px;
      font-weight: 500;
      font-size: 14px;
      color: #000000;
      &:hover {
        text-decoration: underline;
      }
    }
  &__info {
    margin-top: 10px;
    &__channel {
      font-size: 14px;
      color:  #1717194d;
      &:hover {
        text-decoration: underline;
      }
    }
    &__views {
      font-size: 14px;
      color:  #1717194d;;
    }
  }
  }
  &.list {
    margin: 0 0;
    margin-bottom: 32px;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90px;
    min-height: fit-content;
    .item__image {
      width: 160px;
    }
    .text {
      margin-left: 20px;
      &__title {
        margin: 0 0;
        font-size: 16px;
      }
      &__info {
        &__channel {
          font-size: 16px;
        }
        &__views {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
