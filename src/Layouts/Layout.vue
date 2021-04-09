<template>
  <div id="app">
    <Header />
    <slot />
    <LoginModal />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginModal from '../components/LoginModal';
export default {
  name: 'Layout',
  components:{
    Header,
    Footer,
    LoginModal
  }
}
</script>