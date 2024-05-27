<template>
    <div>
      <button @click="openBrochure" class="btn text-neutral-content btn-primary">
        Sponsor Us
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SponsorButton',
    methods: {
      openBrochure() {
        // window.open('./../assets/brochure_code_blue2024.pdf', '_blank');
        window.open(this.file, '_blank');
        // this.$router.push('@/assets/brochure_code_blue2024.pdf');
        

        } 
      },
    data() {
      return {
          file: './../assets/brochure_code_blue2024.pdf',
      };
    },
    }
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  