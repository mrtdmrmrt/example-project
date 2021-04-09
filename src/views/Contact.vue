<template>
  <Layout>
    <div class="contact__container">
      <div class="contact__container--title">Contact Us</div>
      <dp-input
        id="contactName"
        class="mt-1"
        v-model="contactInfo.name"
        placeholder="Please enter your name"
      ></dp-input>
      <dp-input
        id="contactEmail"
        v-model="contactInfo.email"
        class="mt-1"
        :class="{
          'contact__container--validations': !$v.contactInfo.email.email,
        }"
        placeholder="Please enter your email"
      ></dp-input>
      <dp-input
        id="contactPhoneNumber"
        v-model="contactInfo.phoneNumber"
        class="mt-1"
        :class="{
          'contact__container--validations':
            !$v.contactInfo.phoneNumber.numeric ||
            !$v.contactInfo.phoneNumber.minLength ||
            !$v.contactInfo.phoneNumber.maxLength,
        }"
        placeholder="Please enter your phone number"
      ></dp-input>
      <dp-select
        id="contactCountry"
        class="mt-1"
        v-model="contactInfo.country_code"
        searchable
        placeholder="Select a Country"
      >
        <dp-select-option
          v-for="item in countryList"
          :key="item.id"
          :value="item.id"
        >
          {{ item.name }}
        </dp-select-option>
      </dp-select>
      <textarea
        id="contactText"
        class="contact__container--textarea mt-1"
        placeholder="Text field"
        v-model="contactInfo.text"
      ></textarea>
      <dp-button @click="sendInfo" type="primary" class="mt-2" id="contactSend"
        >Send</dp-button
      >
    </div>
  </Layout>
</template>

<script>
import Layout from '../Layouts/Layout';
import {
  required,
  numeric,
  minLength,
  maxLength,
  email,
} from 'vuelidate/lib/validators';
export default {
  name: 'Contact',
  data() {
    return {
      countryList: [
        { id: 'TR', name: 'Turkey' },
        { id: 'US', name: 'United States of America' },
        { id: 'GB', name: 'United Kingdom' },
        { id: 'DE', name: 'Germany' },
        { id: 'SE', name: 'Sweden' },
        { id: 'KE', name: 'Kenya' },
        { id: 'BR', name: 'Brazil' },
        { id: 'ZW', name: 'Zimbabwe' },
      ],
      contactInfo: {
        name: '',
        email: '',
        phoneNumber: '',
        country_code: '',
        text: '',
      },
    };
  },
  components: {
    Layout,
  },
  computed: {
    vuexGetLogin() {
      return this.$store.getters['user/getLogin'];
    },
  },
  watch: {
    vuexGetLogin() {
      this.userLoginInformation();
    },
  },
  validations: {
    contactInfo: {
      name: {
        required,
      },
      email: {
        required,
        email,
      },
      phoneNumber: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11),
      },
      country_code: {
        required,
      },
      text: {
        required,
      },
    },
  },
  methods: {
    sendInfo() {
      this.$v.contactInfo.$touch();
      if (this.$v.contactInfo.$error) {
        this.$Notify.error({
          title: 'Error',
          message: 'Please fill in all fields!',
          duration: 3000,
          closable: true,
        });
      } else {
        this.$Notify.success({
          title: 'Success',
          message: 'The transaction is successful!',
          duration: 3000,
          closable: true,
        });
        console.log('contact info=>', this.contactInfo);
      }
    },
    userLoginInformation(){
      if (this.vuexGetLogin) {
        this.contactInfo.name = this.vuexGetLogin.name;
        this.contactInfo.email = this.vuexGetLogin.email;
      }else{
        this.contactInfo.name = '';
        this.contactInfo.email = '';
      }
    }
  },
  mounted() {
    this.userLoginInformation();
  },
};
</script>

<style></style>
