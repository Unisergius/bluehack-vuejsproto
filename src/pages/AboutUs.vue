<template>
    <div class="hero " :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="hero-overlay bg-opacity-60">
        </div>
        <div class="hero-content text-left">
            <div class="container mx-auto p-6">
                <!-- Philosophy -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Our philosophy</h2>
                    <p class="mb-4">
                        <b>Code Blue</b> takes prides in tackling multifaceted and complex challenges of today's world, 
                        recognizing that solutions require diverse perspectives and collaborative efforts. We believe 
                        that everyone has valuable insights that can contribute to the advancement of humanity. 
                        Our focus is on science, knowledge transfer, software development, sustainability, and innovation.
                    </p>
                </section>

                <!-- Our Team -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Our Team</h2>
                    
                    <div class="container mx-auto p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <MemberCard
                                v-for="(member, index) in members"
                                :key="index"
                                :member="member"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import MemberCard from '@/components/MemberCard.vue';

import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
import tc from '@/assets/images/faces/teresacorreia.png';
import pg from '@/assets/images/faces/penelope.jpg';
import lg from '@/assets/images/faces/pers2.jpeg';
import sh from '@/assets/images/faces/pers1.jpeg';
import vn from '@/assets/images/faces/vanessa.jpg';
import dp from '@/assets/images/faces/pers0.jpeg';

    export default {
        name: 'AboutUs',
        components: {
            MemberCard
        },
        data() {
            return {
                backgroundUrl,
                members: [
                    {
                        img: tc,
                        name: 'Teresa Correia',
                        description: 'Scientist at CCMAR, medical imaging and AI'},
                    {
                        img: pg,
                        name: 'Penélope Gonçalves',
                        description: 'Technical & Team Lead, Contentserv'},
                    {
                        img: lg,
                        name: 'Lenz Gschwendtner',
                        description: 'Co-founder, community builder, startup punk'},
                    {
                        img: sh,
                        name: 'Sérgio Henriques',
                        description: 'Software Developer, Axians Portugal'},
                    {
                        img: vn,
                        name: 'Vanessa V. Nascimento',
                        description: 'Cunsultant, Agile Coach'},
                    {
                        img: dp,
                        name: 'David Paleček',
                        description: 'Scientist at CCMAR, pythonista'},
                ],
            };
        },
    }
</script>

<style scoped>
/* Your component's styles here */
</style>