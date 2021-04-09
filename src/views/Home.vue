<template>
  <Layout>
    <div class="home__container">
      <div class="home__container--title">{{ $t('pageLanguage.title') }}</div>
      <div class="home__container--parag">
        {{ $t('pageLanguage.paragraph') }}
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../Layouts/Layout';
export default {
  name: 'Home',
  components: {
    Layout,
  },
  computed: {
    vuexGetLang() {
      return this.$store.getters['lang/getLang'];
    },
  },
  watch: {
    vuexGetLang() {
      console.log('Dil değişti->', this.vuexGetLang);
    },
  },
};
</script>

<style></style>
