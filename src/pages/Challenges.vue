<template>
    <div class="hero h-96 bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">{{ $t('challenges.title') }}</h1>
                <p class="py-6">
                    {{ $t('challenges.subtitle') }}
                </p>
            </div>
        </div>
    </div>
    <div class="container mx-auto p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ChallengeCard
                v-for="(challenge, index) in challenges"
                :key="index"
                :challenge="challenge"
            />
        </div>
    </div>
  </template>
  
<script>
import ChallengeCard from '@/components/ChallengeCard.vue';

import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
import waterChallImage from '@/assets/images/challenges/chall_aquifer.jpg';
import algaeChallImage from '@/assets/images/challenges/chall_algae.png';
import inductivaChallImage from '@/assets/images/challenges/chall_inductiva.jpg';
import fishChallImage from '@/assets/images/challenges/Fisheriesexploited.jpg';
import fruitChallImage from '@/assets/images/challenges/chall_fruits_DLC2024.png';

export default {
    components: {
        ChallengeCard
    },
    data() {
        return {
            backgroundUrl: '',
            images: {
                waterChallImage,
                algaeChallImage,
                fishChallImage,
                fruitChallImage,
                inductivaChallImage
            }
        };
    },
    computed: {
        challenges() {
            return [
                {
                    name: this.$t('challenges.challenge1.title'),
                    description: this.$t('challenges.challenge1.description'),
                    image: waterChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/Ground_water',
                },
                {
                    name: this.$t('challenges.challenge2.title'),
                    description: this.$t('challenges.challenge2.description'),
                    image: algaeChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/Algae_genes',
                },
                {
                    name: this.$t('challenges.challenge4.title'),
                    description: this.$t('challenges.challenge4.description'),
                    image: fruitChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/AI_fruit_QA',
                },
                {
                    name: this.$t('challenges.challenge3.title'),
                    description: this.$t('challenges.challenge3.description'),
                    image: fishChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/Fisheries_PT',
                },
                {
                    name: this.$t('challenges.challenge5.title'),
                    description: this.$t('challenges.challenge5.description'),
                    image: inductivaChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/inductivaAI',
                },
            ]
        
        }
    },
watch: {
    '$i18n.locale'() {
      // This will trigger the computed property to re-evaluate
    }
  }
};
</script>
  
<style scoped>
/* Add any custom styles here */
</style>
  