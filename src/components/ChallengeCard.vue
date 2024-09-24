<template>
    <div class="card w-360 p-0  shadow-xl">
        <figure class="bg-base-600">
            <img :src="challenge.image" :alt="challenge.name" class="h-72 object-contain" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ challenge.name }}</h2> <!-- challenge.name -->
                <div class="card-actions justify-end">
                    <a v-if="challenge.website" :href="challenge.website" class="text text-primary" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32px" fill="currentColor"  viewBox="0 -960 960 960" width="128px">
                            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                        </svg>
                    </a>
                    <!-- Add more social media icons as needed -->
                </div>
            <p>{{ challenge.description }}</p>
        </div>
    </div>
</template>
  
<script>

export default {
    name: 'ChallengeCard',
    props: {
        challenge: {
            type: Object,
            required: true
        }
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>