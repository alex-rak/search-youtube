<template>
  <div class="main-layout">
    <div class="main-layout__header">
      <div class="header__body">
        <div class="header__logo">
          <img src="@/assets/icons/logo.svg">
        </div>
        <div class="header__tabs">
          <router-link
            class="header__tabs-item"
            :class="{'active-tab': currentPath}"
            :to="{name: 'MainPage'}">
            Поиск
          </router-link>
          <router-link
            class="header__tabs-item"
            exact-active-class="active-tab"
            :to="{name: 'Favourites'}">
            Избранное
          </router-link>
        </div>
        <a-button
          type="link"
          class="header__button"
          @click="logOut">
          Выйти
        </a-button>
      </div>
    </div>
    <a-layout-content class="main-layout__content">
      <router-view />
    </a-layout-content>
  </div>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
    };
  },
  computed: {
    currentPath() {
      return this.$route.path === "/";
    },
  },
  methods: {
    logOut() {
      this.$router.push({ name: "Auth" });
    },
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background: #FAFAFA;
  &__header {
    background: #ffffff;
    display: flex;
    justify-content: center;
    max-height: 80px;
    width: 100%;
    border-bottom: 1px solid #F1F1F1;
    .header {
      &__logo {
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &__body {
        max-width: 1040px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      &__tabs {
        flex-grow: 1;
        display: flex;
        height: 100%;
        .fill {
          transition: 3s;
        }
        &-item {
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 20px;
          font-size: 18px;
          position: relative;
          transition: all 3s;
          &::after{
            transition: all .3s;
            position: absolute;
            content: "";
            width: 100%;
            border: 2px solid transparent;
            bottom: 0;
            left: 0;
          }
          &.active-tab {
            &::after{
              border: 2px solid #1390E5;
            }
          }
        }
      }
      &__button {
        font-size: 18px;
        color: #1390E5;
      }
    }
  }
  &__content {
    max-width: 1040px;
    width: 100%;
    background: #FAFAFA;
    margin: 0 auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
