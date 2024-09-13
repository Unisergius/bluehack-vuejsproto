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
                    name: 'Water Challenge by Luis Costa (APA)',
                    description: 'Algarve and most of the Portugal is experiencing 10 years of droughts. Agência Portuguesa \
                    do Ambiente (APA) in Faro is responsible for monitoring the ground water levels in 7 separate aquifers \
                    which have around 150 probe stations. At some point, water levels of in Algarve west-coast aquifer, \
                    was 40cm from being contaminated by the sea water, which could have unprecedented consequences for the \
                    citizens, businesses and the region as a whole. Find ways to make the data accessible at ease for \
                    monitoring, public discussion and outreach purposes. Follow up below for more.',
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
                    name: 'Fruity AI Challenge by Dario Passos (CEOT)',
                    description: "Traditionally, 1000s of fruits are sampled and manually analyzed pre-harvest to provide insight into the \
                    fruit maturation and quality. Internal defects, sugar content, dry matter content, are some of the \
                    parameters deciding optimal harvest time, resulting profits and customer content. The chemical \
                    composition translates into optical signal in a non-trivial way and chemometrics models try to do that \
                    quantitatively. Analytical methods are accurate (Ground truth) but slow and expensive. With advent of AI,\
                    machine-learning/deep-learning models can do that at scale, non-invasively. Dario Passos is expert in \
                    designing such models. They are applicable in agriculture, but also in medicine, biotechnology etc. \
                    This is a perfect opportunity to dive into DL, convolutional neural networks and other machine learning \
                    techniques, because no unified architecture for chemometrics exists as of today. Moreover the collected \
                    data are 1D spectra, much easier to work with compared to large 2D images.",
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
  