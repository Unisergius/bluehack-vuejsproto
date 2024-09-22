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
                        <li><b>{{ $t('event-info.li1_bold') }}</b> {{ $t('event-info.li1') }}</li>
                        <li><b>{{ $t('event-info.li2_bold') }}</b> {{ $t('event-info.li2') }}</li>
                        <li><b>{{ $t('event-info.li3_bold') }}</b> {{ $t('event-info.li3') }}</li>
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
                    <li>{{ $t('event-info.p1') }}</li>
                    <li>{{ $t('event-info.p2') }}</li>
                    <li>{{ $t('event-info.p3') }}</li>
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
                    <h2 class="text-3xl font-bold mb-4">Rules</h2>
                    <h3 class="text-2xl font-bold mb-4">Creating or joining teams</h3>
                    <!-- create bullet point list -->
                    <ul class="list-disc list-inside mb-4">
                        <li v-for="(rule, index) in $t('event.rules', { returnObjects: true })" :key="index" v-html="rule"></li>
                    </ul>
                    <ul class="list-disc list-inside mb-4">
                        <li>Teams have a minimum of 2 and maximum of 4 members. Every team can have 1 external member participating remotely.</li>
                        <li>Teams will be formed (mostly) on <em>Day 1</em> after the brainstorming session.</li>
                        <li>Team members can not participate on different teams. </li>
                        <li>Teams should start the event without having any previous development work done. 
                            They can and should discuss/agree on ideas and recruit team members to help the 
                            development during the hackathon event (especially on <em>Day 1</em>).</li>
                        <li>Even though the competition officially starts on <em>Day 1</em>, <b>final deadline</b> 
                            to join/form/register a team and its name is <b>9 a.m. <em>Day 2</em></b>, delivered <b>on paper</b>.</li>
                    </ul>

                    <h3 class="text-2xl font-bold mb-4">Selecting an idea</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li>Any idea you might choose to explore during the hackathon is valid if that idea, 
                            prototype (functional or not), project is within the scope of <b>Blue Economy</b> 
                            and/or <b>Biotechnology</b>.</li>
                        <li>Teams should start the event without having any previous development work done. 
                            They can and should discuss/agree on ideas and recruit team members to help the 
                            development (especially on <em>Day 1</em>).</li>
                        <li>A set of challenges by sponsors and CCMAR will be compiled and presented publicly before the <em>Day 1</em>. </li>
                    </ul>
                    
                    <h3 class="text-2xl font-bold mb-4">Working the idea</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li>Mentors with different expertise will be available for the teams to request help and consultation.</li>
                        <li>3 debugging sessions will be scheduled, where the teams can share their issues and get input from other teams.</li>
                        <li>Delivery deadline is expected around 12:00 a.m., <em>Day 3</em>.</li>
                    </ul>

                    <!-- Judging -->
                    <h3 class="text-2xl font-bold mb-4">Judging</h3>
                    <p class="mb-4">
                    Scores on scale from 0 to 10, with 10 being the highest score. 
                    Projects will be judged by a panel of experts on the following criteria:
                    </p>
                    <ul class="list-disc list-inside mb-4">
                        <li><b>Impact:</b> Determine the practical applicability of the project and its 
                            potential impact on society, and the environment.</li>
                        <li><b>Feasibility:</b> Consider the project's execution and whether it can 
                            realistically be brought to market or implemented in a real-world setting.</li>
                        <li><b>Originality:</b> Assess the originality of the idea and the creativity in its application. 
                            Consider how the project stands out from existing solutions and its potential 
                            to introduce new paradigms.</li>
                        <li><b>Rigor:</b> Evaluate the scientific basis of the project, including the accuracy of the data, 
                            the soundness of the methodology, and the validity of the conclusions.</li>
                    </ul>

                    <!-- Code of coduct -->
                    <h3 class="text-2xl font-bold mb-4">Code of Conduct</h3>
                    <p class="mb-4">
                    Code Blue Hackathon is dedicated to providing a safe and comfortable environment 
                    for all participants. Please find and refer to the Code of Conduct 
                    <!-- link to the webpage -->
                    <a href="https://github.com/Py-ualg/2024-code-blue/blob/main/CODE_OF_CONDUCT.md" class="text-primary" target="_blank">here</a>.
                    </p>

                    <p class="mb-4">
                    <i>last updated: 2024-09-05</i>
                    </p>
                </section>
            
                <!-- Jury Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Jury</h2>
                    <!-- bullet point list -->
                    <ul class="list-disc list-inside">
                        <li><b>Deborah Power</b>: Professor at CCMAR, leader of Comparative Endocrynology group</li>
                        <li><b>João Varela</b>: Professor at CCMAR, leader of Marine Biotechnology group</li>
                        <li><b>Lenz Gschwendtner</b>: Coder, community builder, punk developer</li>
                        <li><b>TBA</b>:</li>
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
            backgroundUrl,
            days: [
                {
                    name: 'Oct 18',
                    description: 'Get to know people, tools and mentors. Brainstorm and form teams.',
                    image: onboardImage,
                    program: [
                        {
                            icon: arriveIcon,
                            time: '14:00',
                            event: 'Registration',
                            location: 'Gambelas Campus',
                        },
                        {
                            icon: presentIcon,
                            time: '14:30',
                            event: 'Seminar series',
                            items: [
                                'Deborah Power: "Marine Biotechnology"',
                                'Dario Passos: "Data Science and Machine Learning"',
                                'João Varela: "TBA"',
                                'TBA: "Business Case Ideation"',
                                'Lenz Gschwendtner: "Low Code Software Tools and Integration"',
                                'Luis Costa: "Ground water in Algarve"'
                            ],
                            location: 'Gambelas Campus',
                        },
                        {
                            icon: brainstormIcon,
                            time: '17:00',
                            event: 'Brainstorming',
                            location: 'Gambelas Campus',
                        },
                        {
                            icon: teamsIcon,
                            time: '18:00',
                            event: 'Team formation',
                            location: 'Gambelas Campus',
                        },
                        {   
                            icon: startIcon,
                            time: '19:00',
                            event: 'Competition start',
                            // location: '',
                        }
                    ]
                },
                {
                    name: 'Oct 19',
                    description: 'Hard coding day with help of mentors and food breaks.',
                    image: compImage,
                    program: [
                        {
                            icon: foodIcon,
                            time: '08:00',
                            event: 'Venue opens, breakfast',
                            location: 'Sala Azul',
                        },
                        {
                            icon: judgesIcon,
                            time: '09:00',
                            event: 'Final team assignments',
                            location: 'Sala Azul',
                        },
                        {
                            icon: codingIcon,
                            time: '09:00',
                            event: 'Product work',
                            location: 'Sala Azul',
                        },
                        {
                            icon: foodIcon,
                            time: '13:00',
                            event: 'Lunch',
                            location: 'TBA',
                        },
                        {
                            icon: codingIcon,
                            time: '14:00',
                            event: 'Product work',
                            location: 'Sala Azul',
                        },
                        {
                            icon: foodIcon,
                            time: '18:00',
                            event: 'Dinner',
                            location: 'TBA',
                        },
                        {
                            icon: codingIcon,
                            time: '19:00',
                            event: 'Product work',
                            location: 'Sala Azul',
                        },
                        {
                            icon: nightIcon,
                            time: '22:00',
                            event: 'Good night',
                        }
                    ]
                },
                {
                    name: 'Oct 20',
                    description: 'Finalize your product for submission. Move to the after party where demos will be presented, winners announced, decompression offered.',
                    image: finalImage,
                    program:
                    [
                        {
                            icon: foodIcon,
                            time: '08:00',
                            event: 'Venue opens, breakfast',
                            location: 'Sala Azul',
                        },
                        {
                            icon: codingIcon,
                            time: '08:30',
                            event: 'Product work',
                            location: 'Sala Azul',
                        },
                        {
                            icon: compEndIcon,
                            time: '13:00',
                            event: 'Final submissions',
                            location: 'Sala Azul',
                        },
                        {
                            icon: partyIcon,
                            time: '14:00',
                            event: 'Party starts',
                            location: 'Albufeira Beach',
                        },
                        {
                            icon: winnerIcon,
                            time: '14:30',
                            event: 'Results, Demo presentations',
                            location: 'Albufeira Beach',
                        }
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
  