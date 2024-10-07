<template>
    <div class="hero h-96 bg-base-200">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <h1 class="text-5xl font-bold">{{ $t('partners.title') }}</h1>
                <p class="py-6">{{ $t('partners.subtitle') }}</p>
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
import bluecloudImage from '@/assets/images/logo_blue-cloud.png';
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
import alTechHubImage from '@/assets/images/al_tech_hub.jpg';


export default {
    components: {
        PartnerCard
    },
    data() {
        return {
            backgroundUrl: '',
            images: {
                albufeiraImage,
                apaImage,
                algarveEvoImage,
                algarveStpImage,
                bluecloudImage,
                ccmarImage,
                criaImage,
                feImage,
                gdgImage,
                geekSessionsImage,
                greenColabImage,
                inductivaImage,
                ipmaImage,
                localFoundationImage,
                nectonImage,
                alTechHubImage
            }
        };
    },
    computed: {
        partners() {
            return [
                {
                    name: this.$t('partners.necton.name'),
                    description: this.$t('partners.necton.description'),
                    image: nectonImage,
                    website: 'https://necton.pt/',
                    linkedin: 'https://www.linkedin.com/company/salt-by-necton/'
                },
                {
                    name: this.$t('partners.inductiva.name'),
                    description: this.$t('partners.inductiva.description'),
                    image: inductivaImage,
                    website: 'https://inductiva.ai/',
                    linkedin: 'https://www.linkedin.com/company/inductiva-ai/'
                },
                {
                    name: this.$t('partners.apa.name'),
                    description: this.$t('partners.apa.description'),
                    // description: 'Agência Portuguesa do Ambiente e responsável pela implementação das políticas de ambiente em Portugal. A APA tem como objetivo contribuir para um elevado nível de proteção e valorização do ambiente através da prestação de serviços de qualidade aos cidadãos.',
                    image: apaImage,
                    website: 'https://apambiente.pt/',
                    linkedin: 'https://www.linkedin.com/company/agencia-portuguesa-ambiente/'
                },
                {
                    name: this.$t('partners.ipma.name'),
                    description: this.$t('partners.ipma.description'),
                    image: ipmaImage,
                    website: 'https://www.ipma.pt/pt/index.html',
                    linkedin: 'https://www.linkedin.com/company/ipma-pt/'
                },
                {
                    name: this.$t('partners.albufeira.name'),
                    description: this.$t('partners.albufeira.description'),
                    image: albufeiraImage,
                    website: 'https://www.cm-albufeira.pt/',
                },
                {
                    name: this.$t('partners.ccmar.name'),
                    description: this.$t('partners.ccmar.description'),
                    image: ccmarImage,
                    website: 'https://ccmar.ualg.pt/',
                    linkedin: 'https://www.linkedin.com/company/ccmar/mycompany/'
                },
                {
                    name: this.$t('partners.blue-cloud.name'),
                    description: this.$t('partners.blue-cloud.description'),
                    image: bluecloudImage,
                    website: 'https://www.blue-cloud.org/',
                    linkedin: 'https://www.linkedin.com/company/blue-cloud-org/'
                },
                {
                    name: this.$t('partners.cria.name'),
                    description: this.$t('partners.cria.description'),
                    image: criaImage,
                    website: 'https://www.cria.pt/cria/presentation',
                },
                {
                    name: this.$t('partners.green-colab.name'),
                    description: this.$t('partners.green-colab.description'),
                    image: greenColabImage,
                    website: 'https://www.greencolab.com/',
                    linkedin: 'https://www.linkedin.com/company/greencolab/'
                },
                {
                    name: this.$t('partners.tech-hub.name'),
                    description: this.$t('partners.tech-hub.description'),
                    image: alTechHubImage,
                    website: 'https://algarvetechhub.com/',
                    linkedin: 'https://www.linkedin.com/company/algarve-tech-hub/'
                },
                {
                    name: this.$t('partners.local-foundation.name'),
                    description: this.$t('partners.local-foundation.description'),
                    image: localFoundationImage,
                    linkedin: 'https://www.linkedin.com/company/local-foundation/'
                },
                {
                    name: this.$t('partners.geeksessions.name'),
                    description: this.$t('partners.geeksessions.description'),
                    image: geekSessionsImage,
                    linkedin: 'https://www.linkedin.com/company/geek-sessions-faro/',
                    website: 'https://geeksessions.io/',
                },
                // {
                //     name: 'Algarve Evolution',
                //     description: 'A community of entrepreneurs, investors, and professionals who are passionate about the Algarve and its potential.',
                //     image: algarveEvoImage,
                //     linkedin: 'https://www.linkedin.com/company/algarve-evolution/',
                //     website: 'https://algarveevolution.pt/'
                // },
                {
                    name: this.$t('partners.gdg.name'),
                    description: this.$t('partners.gdg.description'),
                    image: gdgImage,
                    linkedin: 'https://www.linkedin.com/company/gdg-faro/',
                    website: 'https://www.meetup.com/GDG-Faro/'
                },
                // {
                //     name: 'Algarve STP',
                //     description: 'The Algarve Systems and Technology Partnership Association (Algarve STP) is a non-profit private association that aims to empower the technological ecosystem in the Algarve region to transform it into one of the most competitive in southern Europe.',
                //     image: algarveStpImage,
                //     linkedin: 'https://www.linkedin.com/company/algarvestp/',
                //     website: 'https://www.algarvestp.pt/'
                // },
                {
                    name: this.$t('partners.econ.name'),
                    description: this.$t('partners.econ.description'),
                    image: feImage,
                    website: 'https://fe.ualg.pt/en'
                },

            // Add more partner objects as needed
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
  