<template>
    <div class="hero " :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="hero-overlay bg-opacity-60">
        </div>
        <div class="hero-content text-left">
            <div class="container mx-auto">
                <!-- Event Info Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                     <!-- <h2 class="text-3xl font-bold mb-4">&#x1F3C1 {{ $t('projects2024.title') }}</h2> -->
                    <b>&#x1F3C1 {{ $t('projects2024.subtitle') }}</b>
                    <h3 class="text-2xl font-bold mb-4">{{ $t('projects2024.winners') }}</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li v-for="(item, index) in $tm('projects2024.podium_list', { returnObjects: true })" :key="index" v-html="item"></li>
                    </ul>

                    <div class="flex justify-center">
                        <img src="@/assets/images/winners.jpg" alt="winners photo" class="w-full max-w-lg"/>
                    </div>

                    <h3 class="text-2xl font-bold mb-4">{{ $t('projects2024.honorary') }}</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li v-for="(item, index) in $tm('projects2024.honorary_list', { returnObjects: true })" :key="index" v-html="item"></li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';

export default {
    name: 'Projects2024Page',
    data() {
        return {
            backgroundUrl: '',
        };
    },
    watch: {
        '$i18n.locale'() {
            // This will trigger the computed property to re-evaluate
        }

    }
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
  