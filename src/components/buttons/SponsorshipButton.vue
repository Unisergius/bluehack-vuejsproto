<template>
    <router-link class="btn text-neutral-content btn-primary" :to="{ name: 'DownloadDocument', params: { fileName: file } }">
      {{ $t('button.sponsor') }}
    </router-link>
</template>
  
<script>
  export default {
    name: 'SponsorButton',
    data() {
      return {
          file: 'brochure_code_blue.pdf',
      };
    },
    }
</script>

<style scoped>
/* Add any custom styles here */
</style>
  