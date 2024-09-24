<template>
    <div class="hero " :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="hero-overlay bg-opacity-60">
        </div>
        <div class="hero-content text-left">
            <div class="container mx-auto">
                <!-- Event Info Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">{{ $t('event-info.title') }}</h2>
                    <p class="mb-4">
                        &#x1F6A9 <b>{{ $t('event-info.location-bold') }}</b> {{ $t('event-info.location') }}, 
                        <a href="https://maps.app.goo.gl/N9UTBxEqDbeHoQsE9" class="text-primary" target="_blank">{{ $t('event-info.maps') }}</a>.

                        <br>
                        &#x1F51C <b>{{ $t('event-info.date-bold') }}</b> {{ $t('event-info.date') }}

                        <br>
                        <!-- here needs to go link to challenges -->
                        &#x1F50D <b>{{ $t('event-info.teams_bold') }}</b> {{ $t('event-info.teams') }} <a href="/challenges" class="text-primary">{{ $t('event-info.teams_link') }}</a> {{ $t('event-info.teams_end') }}
                        
                        <br>
                        &#x1F3C1 <b>{{ $t('event-info.time_limit_bold') }}</b> {{ $t('event-info.time_limit') }}

                        <br>
                        &#x1F9EE <b>{{ $t('event-info.why_bold') }}</b> {{ $t('event-info.why') }}
                    </p>
                    <h3 class="text-2xl font-bold mb-4">{{ $t('event-info.scope') }}</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li v-for="(item, index) in $tm('event-info.scope_list', { returnObjects: true })" :key="index" v-html="item"></li>
                    </ul>

                    <h3 class="text-2xl font-bold mb-4">{{ $t('event-info.pitch') }}</h3>
                    <!-- create bullet point list -->
                    <ul class="list-disc list-inside mb-4">
                        <li>{{ $t('event-info.p1p1') }}<b>{{ $t('event-info.p1p2') }}</b> {{ $t('event-info.p1p3') }}</li>
                        <li>{{ $t('event-info.p2p1') }}<b><a href="https://github.com/Py-ualg/2024-code-blue/tree/main" class="text-primary" target="_blank">{{ $t('event-info.p2p2') }}</a></b>{{ $t('event-info.p2p3') }} </li>
                        <li>{{ $t('event-info.p3p1') }}<b>{{ $t('event-info.p3p2') }}</b> {{ $t('event-info.p3p3') }} </li>
                    </ul>
                </section>
                
                <!-- subsection for each day -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">{{ $t('event-info.reserve-date') }}</h2>
                    <h3 class="text-2xl font-semibold mb-2">{{ $t('daycard.program') }}:</h3>
                    
                    <div class="container mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <DayCard
                                v-for="(day, index) in days"
                                :key="index"
                                :day="day"
                            />
                        </div>
                    </div>
                </section>
                
                <!-- Prizes Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">{{ $t('event-info.prizes') }}</h2>
                    <ul class="list-disc list-inside">
                        <li v-for="(prize, index) in $tm('event-info.prize_list', { returnObjects: true })" :key="index" v-html="prize"></li>
                    </ul>
                </section>

                <!-- Registration Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">{{ $t('event-info.register') }}</h2>
                    <p class="mb-4">
                        {{ $t('event-info.register_link') }}
                    </p>
                </section>

                <!-- rules section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">{{ $t('event-info.rules') }}</h2>
                    <h3 class="text-2xl font-bold mb-4">{{ $t('event-info.title2') }}</h3>
                    <!-- create bullet point list -->
                    <ul class="list-disc list-inside mb-4">
                        <li v-for="(rule, index) in $tm('event.rules', { returnObjects: true })" :key="index" v-html="rule"></li>
                    </ul>

                    <h3 class="text-2xl font-bold mb-4">{{ $t('event.ideas.title') }}</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li v-for="(idea, index) in $tm('event.ideas.list', { returnObjects: true })" :key="index" v-html="idea"></li>
                    </ul>
                    
                    <h3 class="text-2xl font-bold mb-4">{{ $t('event.ideas.title2') }}</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li v-for="(idea, index) in $tm('event.ideas.list2', { returnObjects: true })" :key="index" v-html="idea"></li>
                    </ul>

                    <!-- Judging -->
                    <h3 class="text-2xl font-bold mb-4">{{ $t('event.jury.title') }}</h3>
                    <p class="mb-4">
                        {{ $t('event.jury.subtitle') }}
                    </p>
                    <ul class="list-disc list-inside mb-4">
                        <li v-for="(idea, index) in $tm('event.jury.list', { returnObjects: true })" :key="index" v-html="idea"></li>
                    </ul>

                    <!-- Code of coduct -->
                    <h3 class="text-2xl font-bold mb-4">{{ $t('event.jury.title2') }}</h3>
                    <p class="mb-4">
                        {{ $t('event.jury.subtitle2') }} <a href='https://github.com/Py-ualg/2024-code-blue/blob/main/CODE_OF_CONDUCT.md' class='text-primary' target='_blank'>{{ $t('event.jury.link') }}</a>.
                    </p>

                    <p class="mb-4">
                    <i>{{ $t('event.jury.text') }}</i>
                    </p>
                </section>
            
                <!-- Jury Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">{{ $t('event.jury.title3') }}</h2>
                    <!-- bullet point list -->
                    <ul class="list-disc list-inside">
                        <li v-for="(idea, index) in $tm('event.jury.jurylist', { returnObjects: true })" :key="index" v-html="idea"></li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
import DayCard from '@/components/DayCard.vue';

import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
import onboardImage from '@/assets/images/onboard.png';
import compImage from '@/assets/images/comp.png';
import finalImage from '@/assets/images/finalize.png';

import arriveIcon from '@/assets/icons/registration.png';
import presentIcon from '@/assets/icons/presentation.png';
import brainstormIcon from '@/assets/icons/brainstorming.png';
import teamsIcon from '@/assets/icons/teams.png';
import startIcon from '@/assets/icons/compstart.png';
import foodIcon from '@/assets/icons/food.png';
import judgesIcon from '@/assets/icons/judges.png';
import winnerIcon from '@/assets/icons/winner.png';
import codingIcon from '@/assets/icons/coding.png';
import nightIcon from '@/assets/icons/night.png';
import compEndIcon from '@/assets/icons/compend.png';
import partyIcon from '@/assets/icons/party.png';

export default {
    name: 'EventInfoPage',
    components: {
        DayCard
    },
    data() {
        return {
            backgroundUrl: '',
            images: {
                onboardImage,
                compImage,
                finalImage,
                arriveIcon,
                presentIcon,
                brainstormIcon,
                teamsIcon,
                startIcon,
                foodIcon,
                judgesIcon,
                winnerIcon,
                codingIcon,
                nightIcon,
                compEndIcon,
                partyIcon
            }
        };
    },
    computed: {
        days() {
            return [
                {
                    name: this.$t('days.day1.name'),
                    description: this.$t('days.day1.description'),
                    image: onboardImage,
                    program: [
                        {
                            icon: arriveIcon,
                            time: this.$t('days.day1.program.item1.time'),
                            event: this.$t('days.day1.program.item1.event'),
                            location: this.$t('days.day1.program.item1.location'),
                        },
                        {
                            icon: presentIcon,
                            time: this.$t('days.day1.program.item2.time'),
                            event: this.$t('days.day1.program.item2.event'),
                            items: this.$tm('days.day1.program.item2.items'),
                            location: this.$t('days.day1.program.item2.location'),
                        },
                        {
                            icon: brainstormIcon,
                            time: this.$t('days.day1.program.item3.time'),
                            event: this.$t('days.day1.program.item3.event'),
                            location: this.$t('days.day1.program.item3.location'),
                        },
                        {
                            icon: teamsIcon,
                            time: this.$t('days.day1.program.item4.time'),
                            event: this.$t('days.day1.program.item4.event'),
                            location: this.$t('days.day1.program.item4.location'),
                        },
                        {   
                            icon: startIcon,
                            time: this.$t('days.day1.program.item5.time'),
                            event: this.$t('days.day1.program.item5.event'),
                        }
                    ]
                },
                {
                    name: this.$t('days.day2.name'),
                    description: this.$t('days.day2.description'),
                    image: compImage,
                    program: [
                        {
                            icon: foodIcon,
                            time: this.$t('days.day2.program.item1.time'),
                            event: this.$t('days.day2.program.item1.event'),
                            location: this.$t('days.day2.program.item1.location'),
                        },
                        {
                            icon: judgesIcon,
                            time: this.$t('days.day2.program.item2.time'),
                            event: this.$t('days.day2.program.item2.event'),
                            location: this.$t('days.day2.program.item2.location'),
                        },
                        {
                            icon: codingIcon,
                            time: this.$t('days.day2.program.item3.time'),
                            event: this.$t('days.day2.program.item3.event'),
                            location: this.$t('days.day2.program.item3.location'),
                        },
                        {
                            icon: foodIcon,
                            time: this.$t('days.day2.program.item4.time'),
                            event: this.$t('days.day2.program.item4.event'),
                            location: this.$t('days.day2.program.item4.location'),
                        },
                        {
                            icon: codingIcon,
                            time: this.$t('days.day2.program.item5.time'),
                            event: this.$t('days.day2.program.item5.event'),
                            location: this.$t('days.day2.program.item5.location'),
                        },
                        {
                            icon: foodIcon,
                            time: this.$t('days.day2.program.item6.time'),
                            event: this.$t('days.day2.program.item6.event'),
                            location: this.$t('days.day2.program.item6.location'),
                        },
                        {
                            icon: codingIcon,
                            time: this.$t('days.day2.program.item7.time'),
                            event: this.$t('days.day2.program.item7.event'),
                            location: this.$t('days.day2.program.item7.location'),
                        },
                        {
                            icon: nightIcon,
                            time: this.$t('days.day2.program.item8.time'),
                            event: this.$t('days.day2.program.item8.event'),
                        }
                    ]
                },
                {
                    name: this.$t('days.day3.name'),
                    description: this.$t('days.day3.description'),
                    image: finalImage,
                    program:
                    [
                        {
                            icon: foodIcon,
                            time: this.$t('days.day3.program.item1.time'),
                            event: this.$t('days.day3.program.item1.event'),
                            location: this.$t('days.day3.program.item1.location'),
                        },
                        {
                            icon: codingIcon,
                            time: this.$t('days.day3.program.item2.time'),
                            event: this.$t('days.day3.program.item2.event'),
                            location: this.$t('days.day3.program.item2.location'),
                        },
                        {
                            icon: compEndIcon,
                            time: this.$t('days.day3.program.item3.time'),
                            event: this.$t('days.day3.program.item3.event'),
                            location: this.$t('days.day3.program.item3.location'),
                        },
                        {
                            icon: partyIcon,
                            time: this.$t('days.day3.program.item4.time'),
                            event: this.$t('days.day3.program.item4.event'),
                            location: this.$t('days.day3.program.item4.location'),
                        },
                        {
                            icon: winnerIcon,
                            time: this.$t('days.day3.program.item5.time'),
                            event: this.$t('days.day3.program.item5.event'),
                            location: this.$t('days.day3.program.item5.location'),
                        }
                    ]
                }
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
/* Add any custom styles here if needed */
</style>
  