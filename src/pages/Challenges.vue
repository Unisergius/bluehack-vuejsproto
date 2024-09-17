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
import waterChallImage from '@/assets/images/challenges/chall_aquifer.jpg';
import algaeChallImage from '@/assets/images/challenges/chall_algae.png';
// import fishChallImage from '@/assets/images/challenges/chall_fisheries.jpg';
import fishChallImage from '@/assets/images/challenges/Fisheriesexploited.jpg';
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
                    name: 'Water Challenge by Luis Costa (APA)',
                    description: "Algarve region in south Portugal is experiencing a multi-year drought of 10 years. Agência Portuguesa do \
                    Ambiente (APA) in Faro is responsible for monitoring groundwater level (quantity status) and quality \
                    (Chemical status) in its 25 separate groundwater bodies, which correspond to 17 main aquifers. The monitoring \
                    of the groundwater levels is usually performed with a monthly frequency in around 150 observation points \
                    (wells) spread around the groundwater bodies. THe figure shows that during the \
                    month of September 2023, groundwater levels reached negative values compared to mean-sea-level, thus, \
                    increasing the risk of sea water intrusion, which could have unprecedented consequences for the citizens, \
                    businesses and the region as a whole.",
                    image: waterChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/Ground_water',
                },
                {
                    name: 'Algae Challenge by CCMAR/GreenColab/Necton',
                    description: "Algae are responsible for around 50% of earth's photosynthetic output, mostly occurring \
                    underwater. There are estimated 72 000 algal species. They can be unicellular but also 50 m in \
                    length (kelps). The light-harvesting makes them 'power plants' and 'production plants' at the same time. \
                    It is used for treating waste water, producing energy, food, fertilizers, pharmaceutical and cosmetic \
                    high-value compounds etc. \
                    Representing academia, tech transfer platform and industry, you can explore the ocean of microalgae \
                    tech with Biomartech group at CCMAR, GreenColab and Necton. Suggested challenges tackle the vast databases \
                    and methods for algal genomics. You can integrate data source, identify new genes with deep-learning models\
                    and drive new discoveries and innovations in compound production. Follow up the link below for more details.",
                    image: algaeChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/Algae_genes',
                },
                {
                    name: 'Fisheries Challenge by Rui Coelho (IPMA)',
                    description: "This challenge provides and opportunity to work in fisheries, especially related with large migratory \
                    species that Rui Coelho is an expert. The main objectives would be to collate various datasets on \
                    catch-and-effort, that could then be used to track species abundance and status of the fishing stocks. \
                    A final objective would be to develop a visualization tool that is informative not only for scientists,\
                     but also managers and the general public.",
                    image: fishChallImage,
                    website: 'https://github.com/Py-ualg/2024-code-blue/tree/main/challenges/Fisheries_PT',
                },
                {
                    name: 'Fruity AI Challenge by Dário Passos (CEOT)',
                    description: "Traditionally,  thousands of fruits are manually sampled and analyzed post-harvest to provide \
                    insight into the fruit maturation and quality. These analytical laboratory destructive tests aim at \
                    quantifying internal quality parameters such as sugar content, dry matter content, etc. Alternatively, \
                    near-infrared spectroscopy provides a non-destructive way of getting the same information by analysing the \
                    interaction of light with the fruit. The chemical composition of the fruit translates into specific light \
                    patterns (spectra) that, with the help of chemometrics models, can be mapped back to internal quality \
                    parameters. Nowadays machine-learning/deep-learning models are being explored as tools to create these \
                    chemometric models promising new avenues of applications. Dário Passos is an expert in designing such models. \
                    These models for spectral data analysis, are also applicable in medicine, biotechnology and other areas. \
                    This is a perfect opportunity to explore machine learning techniques (e.g. DL) aimed at this new data modality \
                    (1d spectra). Come and participate into this challenge to find good methodologies to use this type of data for \
                    predictions of fruit quality.",
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
  