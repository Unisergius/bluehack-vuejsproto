<template>
    <div>
      <button @click="changeLanguage('en')">English</button>
      <button @click="changeLanguage('pt')">Português</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      changeLanguage(lang) {
        this.$i18n.locale = lang;
      }
    }
  }
  </script>