<template>
  <div class="auth">
    <form
      class="form">
      <img
        class="form__logo"
        src="@/assets/icons/logo.svg">
      <div class="form__title">
        Вход
      </div>
      <label class="form__input">
        Логин
        <a-input
          v-model="login"
          placeholder="Login" />
      </label>
      <label class="form__input">
        Пароль
        <a-input-password
          v-model="password"
          placeholder="Password" />
      </label>
      <a-button
        class="form__button"
        type="primary"
        @click="auth">
        Войти
      </a-button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Auth",
  data() {
    return {
      login: null,
      password: null,
    };
  },
  methods: {
    ...mapActions("auth", [
      "AUTH",
    ]),
    async auth() {
      if (this.login && this.password) {
        this.AUTH({
          login: this.login,
          password: this.password,
        }).then(() => {
          this.$router.push({ name: "MainPage" });
        }).catch(() => { console.error("Ошибка авторизации"); });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    border: 1px solid #2727271a;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 520px;
    max-width: 510px;
    justify-content: space-around;
    &__logo {
      margin-top: 45px;
    }
    &__title {
      font-weight: 500;
      font-size: 18px;
    }
    &__button {
      margin-bottom: 60px;
      margin-top: 20px;
      height: 50px;
      width: 100%;
      max-width: 175px;
      font-size: 20px;
    }
    &__input {
      width: 100%;
      margin: 0 auto;
      max-width: 340px;
      height: 50px;
      font-size: 16px;
      line-height: 20px;
      margin-bottom: 20px;
      /deep/.ant-input {
        height: 100%;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        padding: 12px 15px;
        }
      /deep/.anticon {
        svg {
          color: #D1D1D1;
          height: 24px;
          width: 24px;
          transform: scale(1, -1);
          // transform: rotate(180deg);
        }
      }
      /deep/:focus {
        +* {
          svg {
            color: #1390E5;
          }
        }
      }
    }
  }
}
</style>
