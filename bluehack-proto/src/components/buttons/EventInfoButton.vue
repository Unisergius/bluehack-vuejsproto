<template>
    <div>
      <button @click="goToEventInfo" class="btn text-neutral-content btn-primary">
        More event information
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventButton',
    methods: {
      goToEventInfo() {
        this.$router.push('/eventInfo');
      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  