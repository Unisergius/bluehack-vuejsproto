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
                <svg xmlns="http://www.w3.org/2000/svg" height="16px" fill="currentColor"  viewBox="0 -960 960 960" width="16px">
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                </svg>
            </a>
            <a v-if="partner.linkedin" :href="partner.linkedin" target="_blank" class="text text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              <!-- <path d="M4.98 3.5C4.98 2.12 6.11 1 7.5 1S10 2.12 10 3.5 8.87 6 7.5 6 4.98 4.88 4.98 3.5zM3 8.5h9v12h-9zM22 13.72V20.5h-4v-5.68c0-3.11-4-2.87-4 0v5.68h-4v-12h4v1.79c1.76-2.97 8-3.22 8 2.86z"/> -->
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
  