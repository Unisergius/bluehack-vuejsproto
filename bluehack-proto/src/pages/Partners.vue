<template>
    <div class="flex flex-wrap justify-center">
      <PartnerCard
        v-for="(partner, index) in partners"
        :key="index"
        :partner="partner"
      />
    </div>
  </template>
  
  <script>
  import PartnerCard from '@/components/PartnerCard.vue';
  
  export default {
    components: {
      PartnerCard
    },
    data() {
      return {
        partners: [
          {
            name: 'Life hack',
            description: 'How to park your car at your garage?',
            image: 'https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg',
            website: 'https://example.com',
            linkedin: 'https://linkedin.com/in/example'
          },
          {
            name: 'Another Partner',
            description: 'Description for another partner.',
            image: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
            website: 'https://anotherexample.com',
            linkedin: 'https://linkedin.com/in/anotherexample'
          }
          // Add more partner objects as needed
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  