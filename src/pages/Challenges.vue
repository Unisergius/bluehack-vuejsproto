<template>
    <div class="hero h-96 bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Challenges</h1>
                <p class="py-6">
                    Our challenges are suggestions from our partners, which can also help mentoring you.
                    Feel free to propose your own challenges or spin out of our samples.
                    They are designed to address real-world problems in marine science and technology.
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
import waterChallImage from '@/assets/images/challenges/chall_aquifer.png';
import algaeChallImage from '@/assets/images/challenges/chall_algae.png';
import fishChallImage from '@/assets/images/challenges/chall_fisheries.jpg';
import fruitChallImage from '@/assets/images/challenges/chall_fruits_DLC2024.png';

export default {
    components: {
        ChallengeCard
    },
    data() {
        return {
            backgroundUrl,
            challenges: [
                {
                    name: 'Water Challenge by APA',
                    description: 'Algarve and most of the Portugal is experiencing 10 years of droughts. Agência Portuguesa \
                    do Ambiente (APA) in Faro is responsible for monitoring the ground water levels in 7 separate aquifers \
                    which have around 150 probe stations. At some point, water levels of in Algarve west-coast aquifer, \
                    was 40cm from being contaminated by the sea water, which could have unprecedented consequences for the \
                    citizens, businesses and the region as a whole. Find ways to make the data accessible at ease for \
                    monitoring, public discussion and outreach purposes. Follow up here for more.',
                    image: waterChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/Ground_water',
                },
                {
                    name: 'Algae Challenge by CCMAR/GreenColab/Necton',
                    description: "Algae are responsible for around 50% of earth's photosynthetic output, mostly occurring \
                    underwater. Estimate points to 72 000 different species. They can be unicellular but also 50 m in \
                    length (kelps). The light-harvesting makes them 'power plants' and 'production plants' at the same time. \
                    It is used for treating waste water, producing energy, food, fertilizers, high-value compounds etc. \
                    With hackathon partners Biomartech group at CCMAR, GreenColab and Necton, representing academia, tech \
                    transfer platform and industry, you can explore the ocean of microalgae opportunities. One suggested \
                    challenge is to identify new genes with deep-learning models within algal species, which can drive new \
                    discoveries and innovations in compound production. Follow up here for more.",
                    image: algaeChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/Algae_genes',
                },
                {
                    name: 'Fisheries Challenge by IPMA',
                    description: 'The correct species identification before sale at auction and registration sheets on every \
                    sale are very important to the quality of the statistical series on landings, used by IPMA in assessing \
                    the abundance and status of exploitation of fish stocks. Some species are very similar, making it difficult \
                    to separate and distinguish them correctly. Examples are Pollack (Pollachius pollachius) and Whiting \
                    (Merlangius merlangus), Plaice (Pleuronectes platessa) and Flounder (Platichthys flesus) and the various \
                    species of rays.',
                    image: fishChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/Fisheries_PT',
                },
                {
                    name: 'Fruity AI Challenge by Dario Passos',
                    description: 'Fruits offer an abundance of proteins, vitamins, and minerals and are essential for a healthy \
                    diet (Rizzo et al., 2023). Customers are demanding higher quality and safety in fruits for a \
                    quality-conscious lifestyle. Fruit quality is influenced by both external appearance and internal \
                    nutritional factors, such as sweetness, firmness, and acidity levels. Accurately evaluating the internal \
                    quality of fruits is vital as it helps prevent economic losses at various stages of the fruit supply chain \
                    (Ali et al., 2023). Therefore, developing contactless and non-destructive technologies for rapid assessment \
                     of internal fruit quality is of great importance (Palumbo et al., 2023).',
                    image: fruitChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/AI_fruit_QA',
                },
            // Add more partner objects as needed
            ]
        };
    }
};
</script>
  
<style scoped>
/* Add any custom styles here */
</style>
  