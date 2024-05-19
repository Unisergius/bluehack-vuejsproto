<template>
    <div class="hero h-96 bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">Partners</h1>
                <p class="py-6">Our partners drive innovation and excellence, providing vital support and resources to advance marine science and technology solutions.</p>
            </div>
        </div>
    </div>
    <div class="container mx-auto p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PartnerCard
                v-for="(partner, index) in partners"
                :key="index"
                :partner="partner"
            />
        </div>
    </div>
  </template>
  
<script>
import PartnerCard from '@/components/PartnerCard.vue';

import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
import ccmarImage from '@/assets/images/ccmar.png';
import criaImage from '@/assets/images/cria.jpeg';
import greenColabImage from '@/assets/images/green-colab-cores.png';
import ualgTecCampusImage from '@/assets/images/ualg_tec_campus_logo.jpeg';
import localFoundationImage from '@/assets/images/local_foundation_logo.jpeg';
import geekSessionsImage from '@/assets/images/GS_CORES_FUNDO squared.png';

export default {
    components: {
        PartnerCard
    },
    data() {
        return {
            backgroundUrl,
            partners: [
                {
                    name: 'CCMAR Algarve',
                    description: 'Non-profit organization located on the Gambelas campus of the University of Algarve and dedicated to R&D in the Marine Sciences. ',
                    image: ccmarImage,
                    website: 'https://ccmar.ualg.pt/',
                    linkedin: 'https://www.linkedin.com/company/ccmar/mycompany/'
                },
                {
                    name: 'CRIA',
                    description: 'Division of Entrepreneurship and Technology Transfer of the University of Algarve.',
                    image: criaImage,
                    website: 'https://www.cria.pt/cria/presentation',
                },
                {
                    name: 'GreenColab',
                    description: 'Joining the Pieces in Algal Biotechnology<br>A collaborative platform to bridge the transfer of knowledge from academia, industry, stakeholders, and consumers.',
                    image: greenColabImage,
                    website: 'https://www.greencolab.com/',
                    linkedin: 'https://www.linkedin.com/company/greencolab/'
                },
                {
                    name: 'Algarve Tech Hub',
                    description: 'Developing a robust ecosystem in the area of new technologies, attracting international stakeholders, technological talent, investors and digital nomads to the Algarve.',
                    image: ualgTecCampusImage,
                    website: 'https://algarvetechhub.com/',
                    linkedin: 'https://www.linkedin.com/company/ualg-tec-campus/'
                },
                {
                    name: 'local.foundation',
                    description: 'Providing right tools and mindset to work together on building better communities.  ',
                    image: localFoundationImage,
                    linkedin: 'https://www.linkedin.com/company/local-foundation/'
                },
                {
                    name: 'GeekSessions',
                    description: 'Fostering knowledge exchange and collaboration within the Digital Product community of the Algarve (and beyond!).',
                    image: geekSessionsImage,
                    website: 'https://geeksessions.io/',
                }
            // Add more partner objects as needed
            ]
        };
    }
};
</script>
  
<style scoped>
/* Add any custom styles here */
</style>
  