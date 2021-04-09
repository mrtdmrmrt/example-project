<template>
  <div>
    <dp-modal v-if="vuexGetIsLoginBTN" icon="x" @close="closeLoginModal" width="500">
      <p slot="header">LOGIN</p>
      <template slot="body">
        <dp-input
          id="name"
          v-model="userLogin.name"
          placeholder="Name"
        ></dp-input>
        <dp-input
          id="email"
          class="mt-1"
          v-model="userLogin.email"
          placeholder="Email"
        ></dp-input>
        <dp-input
          id="password"
          class="mt-1"
          v-model="userLogin.password"
          placeholder="Password"
          type="password"
          password
        ></dp-input>
      </template>
      <template slot="footer">
        <div class="modal-footer-button">
          <dp-button @click="login" id="login" type="primary">Login</dp-button>
        </div>
      </template>
    </dp-modal>
  </div>
</template>

<script>
export default {
  name: 'LoginModal',
  data() {
    return {
      userLogin: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  computed: {
    vuexGetIsLoginBTN() {
      return this.$store.getters['user/getIsLoginBTN'];
    },
  },
  methods: {
    closeLoginModal() {
      this.$store.dispatch('user/setIsLoginBTN', false);
    },
    login() {
      this.$store.dispatch('user/setLogin', this.userLogin);
      this.closeLoginModal();
    },
  },
};
</script>

<style></style>
