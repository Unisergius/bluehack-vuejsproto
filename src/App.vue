<script setup>
  import MainLayout from '@/layouts/MainLayout.vue';
  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <MainLayout>
  </MainLayout>
</template>

<style scoped>
  button {
    font-weight: bold;
  }
</style>