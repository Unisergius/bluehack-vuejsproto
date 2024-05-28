<template>
    <router-link class="btn text-neutral-content btn-primary" :to="{ name: 'DownloadDocument', params: { fileName: file } }">
      Sponsor Us
    </router-link>
</template>
  
<script>
  export default {
    name: 'SponsorButton',
    data() {
      return {
          file: 'brochure_code_blue2024.pdf',
      };
    },
    }
</script>

<style scoped>
/* Add any custom styles here */
</style>
  