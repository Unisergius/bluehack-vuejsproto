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

import albufeiraImage from '@/assets/images/logo_albufeira.png';
import apaImage from '@/assets/images/logo_apa.png';
import algarveEvoImage from '@/assets/images/Algarve-evolution.png';
import algarveStpImage from '@/assets/images/algarve-stp-logo.png';
import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
import ccmarImage from '@/assets/images/ccmar.png';
import criaImage from '@/assets/images/cria.jpeg';
import feImage from '@/assets/images/logo_ualg_fe.jpg';
import gdgImage from '@/assets/images/Gdg.jpg';
import geekSessionsImage from '@/assets/images/GS_CORES_FUNDO squared.png';
import greenColabImage from '@/assets/images/green-colab-cores.png';
import inductivaImage from '@/assets/images/inductiva_ai_logo.jpg';
import ipmaImage from '@/assets/images/logo_ipma_pt.jpg';
import localFoundationImage from '@/assets/images/local_foundation_logo.jpeg';
import nectonImage from '@/assets/images/logo_necton02.png';
import ualgTecCampusImage from '@/assets/images/ualg_tec_campus_logo.jpeg';


export default {
    components: {
        PartnerCard
    },
    data() {
        return {
            backgroundUrl,
            partners: [
                {
                    name: 'Necton',
                    description: 'Necton’s mission is to bring to market innovative products and services resulting from scientific and technological marine knowledge. ',
                    image: nectonImage,
                    website: 'https://necton.pt/',
                    linkedin: 'https://www.linkedin.com/company/salt-by-necton/'
                },
                {
                    name: 'Inductiva.AI',
                    description: 'Inductiva API helps you take physical simulations to the next level. Use Python to easily run the open‑source simulators you love, on the cloud, at scale.',
                    image: inductivaImage,
                    website: 'https://inductiva.ai/',
                    linkedin: 'https://www.linkedin.com/company/inductiva-ai/'
                },
                {
                    name: 'APA',
                    description: 'Agência Portuguesa do Ambiente is responsible for implementing environmental policies in Portugal. APA aims to contribute to a high level of protection and enhancement of the environment through the provision of quality services to citizens"',
                    // description: 'Agência Portuguesa do Ambiente e responsável pela implementação das políticas de ambiente em Portugal. A APA tem como objetivo contribuir para um elevado nível de proteção e valorização do ambiente através da prestação de serviços de qualidade aos cidadãos.',
                    image: apaImage,
                    website: 'https://apambiente.pt/',
                    linkedin: 'https://www.linkedin.com/company/agencia-portuguesa-ambiente/'
                },
                {
                    name: 'IPMA',
                    description: 'The Instituto Português do Mar e da Atmosfera is the national meteorological, seismic, sea and atmospheric organization of Portugal.',
                    image: ipmaImage,
                    website: 'https://www.ipma.pt/pt/index.html',
                    linkedin: 'https://www.linkedin.com/company/ipma-pt/'
                },
                {
                    name: 'Albufeira',
                    description: 'Albufeira provides precious access to the Sala Azul as our hackathon venue.',
                    image: albufeiraImage,
                    website: 'https://www.cm-albufeira.pt/',
                },
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
                    description: 'Joining the Pieces in Algal Biotechnology. A collaborative platform to bridge the transfer of knowledge from academia, industry, stakeholders, and consumers.',
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
                    linkedin: 'https://www.linkedin.com/company/geek-sessions-faro/',
                    website: 'https://geeksessions.io/',
                },
                {
                    name: 'Algarve Evolution',
                    description: 'A community of entrepreneurs, investors, and professionals who are passionate about the Algarve and its potential.',
                    image: algarveEvoImage,
                    linkedin: 'https://www.linkedin.com/company/algarve-evolution/',
                    website: 'https://algarveevolution.pt/'
                },
                {
                    name: 'GDG Faro',
                    description: 'Google Developer Group Faro is a community of developers, which organizes events for developers.',
                    image: gdgImage,
                    linkedin: 'https://www.linkedin.com/company/gdg-faro/',
                    website: 'https://www.meetup.com/GDG-Faro/'
                },
                {
                    name: 'Algarve STP',
                    description: 'The Algarve Systems and Technology Partnership Association (Algarve STP) is a non-profit private association that aims to empower the technological ecosystem in the Algarve region to transform it into one of the most competitive in southern Europe.',
                    image: algarveStpImage,
                    linkedin: 'https://www.linkedin.com/company/algarvestp/',
                    website: 'https://www.algarvestp.pt/'
                },
                {
                    name: 'Economics Faculty',
                    description: "FEUALG's accumulated knowledge of socio-economic reality, coupled with the strong links it holds with the business community and public administration, ensure that the Faculty of Economics seeks to adapt university education to the labour market, and its research to the technical-scientific needs of today's society.",
                    image: feImage,
                    website: 'https://fe.ualg.pt/en'
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
  