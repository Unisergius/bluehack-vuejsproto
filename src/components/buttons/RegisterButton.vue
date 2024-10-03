<template>
    <button @click="goToRegister" class="btn text-neutral-content btn-primary bg-red-700">
      {{ $t('button.tickets') }}
    </button>
  </template>
  
  <script>
  export default {
    name: 'RegisterButton',
    methods: {
      goToRegister() {
        window.open('https://ti.to/algarve-evolution/blue-biotech-hackathon-2024', '_blank');

      }
    }
  }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  