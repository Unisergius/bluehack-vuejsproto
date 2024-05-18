<!-- src/components/PartnerCard.vue -->
<template>
    <div class="card w-96 p-4  shadow-xl">
        <figure class="bg-base-600">
            <img :src="partner.image" :alt="partner.name" class="h-48 object-contain" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ partner.name }}</h2>
            <p>{{ partner.description }}</p>
            <div class="card-actions justify-end">
            <a v-if="partner.website" :href="partner.website" class="text text-primary" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" fill="currentColor"  viewBox="0 -960 960 960" width="24px">
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                </svg>
            </a>
            <a v-if="partner.linkedin" :href="partner.linkedin" target="_blank" class="text text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 2.12 6.11 1 7.5 1S10 2.12 10 3.5 8.87 6 7.5 6 4.98 4.88 4.98 3.5zM3 8.5h9v12h-9zM22 13.72V20.5h-4v-5.68c0-3.11-4-2.87-4 0v5.68h-4v-12h4v1.79c1.76-2.97 8-3.22 8 2.86z"/>
                </svg>
            </a>
            <!-- Add more social media icons as needed -->
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'PartnerCard',
    props: {
        partner: {
            type: Object,
            required: true
        }
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>
  