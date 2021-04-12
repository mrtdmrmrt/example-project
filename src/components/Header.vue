<template>
  <div class="header__container" id="myTopnav">
    <div class="header__container--left">
      <i class="dp-icon-benefit header__container--left--icon"></i>
      <div
        class="header__container--left--site-name"
        @click="$router.push('/')"
      >
        MERT.JS
      </div>
    </div>
    <div class="header__container--right">
      <div class="header__container--right--contact mr-1">
        <router-link :to="{ name: 'contact' }" id="contactBtn"
          >Contact Us</router-link
        >
      </div>
      <div class="header__container--right--lang mr-1">
        <dp-select v-model="lang" class="navbar-lang">
          <dp-select-option v-for="item in locales" :key="item" :value="item"
            >{{ item | toUppercase }}
          </dp-select-option>
        </dp-select>
      </div>
      <div v-if="!vuexGetLogin" class="header__container--right--login">
        <dp-button id="headerLogin" type="neumorphic" @click="showLoginModal"
          >Login</dp-button
        >
      </div>
      <div v-if="vuexGetLogin" class="header__container--right--user-info">
        <dp-dropdown @dropdown-item-click="handleClickInfo" id="logoutDD">
          <span class="header__container--right--user-info-dropdown">
            {{ vuexGetLogin.name }} <i class="dp-icon-down"> </i>
          </span>
          <dp-dropdown-menu slot="menu">
            <dp-dropdown-item icon="user" name="email">
              {{ vuexGetLogin.email }}
            </dp-dropdown-item>
            <dp-dropdown-item icon="log-out" name="logout" id="logout">
              Logout
            </dp-dropdown-item>
          </dp-dropdown-menu>
        </dp-dropdown>
      </div>
    </div>
    <div @click="toggleHeader" class="responsiveBtn">
      <i class="dp-icon-list"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      locales: ['tr', 'en'],
      lang: 'tr',
    };
  },
  filters: {
    toUppercase(value) {
      return value.toUpperCase();
    },
  },
  computed: {
    vuexGetLogin() {
      return this.$store.getters['user/getLogin'];
    },
  },
  watch: {
    lang() {
      this.$i18n.locale = this.lang;
      this.$store.dispatch('lang/setLang', this.lang);
    },
    vuexGetLogin(){
      if(this.vuexGetLogin.locale) this.lang = this.vuexGetLogin.locale.toLowerCase();
    }
  },
  methods: {
    showLoginModal() {
      this.$store.dispatch('user/setIsLoginBTN', true);
    },
    handleClickInfo(val) {
      if (val == 'logout')
        this.$store.dispatch('user/setLogin', this.userLogin);
    },
    toggleHeader() {
      var x = document.getElementById('myTopnav');
      if (x.className === 'header__container') {
        x.className += ' responsive';
      } else {
        x.className = 'header__container';
      }
    },
  },
  mounted() {
    this.$i18n.locale = this.lang;
    this.$store.dispatch('lang/setLang', this.lang);
  },
};
</script>

<style></style>
