<template>
    <div class="hero " :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="hero-overlay bg-opacity-60">
        </div>
        <div class="hero-content text-left">
            <div class="container mx-auto p-6">
                <!-- Philosophy -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">{{ $t('about.title') }}</h2>
                    <p class="mb-4">
                        <b>{{ $t('about.subtitle_bold') }} </b>{{ $t('about.subtitle') }}
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
    components: {
        MemberCard
    },
    data() {
        return {
            backgroundUrl: '',
            images: {
                tc,
                pg,
                lg,
                sh,
                vn,
                dp
            }
        };
    },
    computed: {
        members() {
            return [
                {
                    img: tc,
                    name: this.$t('members.tc.name'),
                    description: this.$t('members.tc.position'),
                },
                {
                    img: pg,
                    name: this.$t('members.pg.name'),
                    description: this.$t('members.pg.position'),
                },
                {
                    img: lg,
                    name: this.$t('members.lg.name'),
                    description: this.$t('members.lg.position'),
                },
                {
                    img: sh,
                    name: this.$t('members.sh.name'),
                    description: this.$t('members.sh.position'),
                },
                {
                    img: vn,
                    name: this.$t('members.vn.name'),
                    description: this.$t('members.vn.position'),
                },
                {
                    img: dp,
                    name: this.$t('members.dp.name'),
                    description: this.$t('members.dp.position'),
                },
            ];
        },
    },
    watch: {
    '$i18n.locale'() {
      // This will trigger the computed property to re-evaluate
    }
  }
};
</script>

<style scoped>
/* Your component's styles here */
</style>