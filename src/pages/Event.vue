<template>
    <div class="hero " :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="hero-overlay bg-opacity-60">
        </div>
        <div class="hero-content text-left">
            <div class="container mx-auto">
                <!-- Event Info Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Event Info</h2>
                    <p class="mb-4">
                    Code Blue Hackathon invites you to learn, code and create solutions for emerging biotechnology, 
                    science, and business case ideas.
                    </p>
                </section>
            
                <!-- Special Pitch Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Special Pitch to You</h2>
                    <!-- create bullet point list -->
                        <ul class="list-disc list-inside">
                            <li><b>Mentoring</b> on marine science, data, software tools and ideation.</li>
                            <li>We will provide you with curated <b>repository of resources</b>. </li>
                            <li>The comprehensive program will foster social and <b>community engagement</b> while introducing you 
                                to local stakeholders and their challenges. </li>
                            <li>... More to come</li>
                        </ul>
                </section>
            
                <!-- Reserve the Date Section -->
                
                <!-- subsection for each day -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Reserve the Date: June 28-30</h2>
                    <h3 class="text-2xl font-semibold mb-2">Preliminary Program:</h3>
                    
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
                    <h2 class="text-3xl font-bold mb-4">Prizes</h2>
                    <ul class="list-disc list-inside">
                    <li>2 year incubation support from CRIA.</li>
                    <li>... More to come</li>
                    </ul>
                </section>

                <!-- Registration Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Registration</h2>
                    <p class="mb-4">
                    Coming soon.
                    </p>
                </section>

                <!-- rules section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Rules</h2>
                    <p class="mb-4">
                    Coming soon.
                    </p>
                </section>
            
                <!-- Jury Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Jury</h2>
                    <p class="mb-4">
                    Coming soon.
                    </p>
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
                    name: 'Day 1, Friday 28/6',
                    description: 'Get to know people, tools and mentors. Brainstorm and form teams.',
                    image: onboardImage,
                    program: [
                        {
                            icon: arriveIcon,
                            time: '14:00',
                            event: 'Registration',
                            location: 'Gambelas',
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
                                'TBA: "Technology transfer"'
                            ],
                            location: 'Gambelas',
                        },
                        {
                            icon: brainstormIcon,
                            time: '17:00',
                            event: 'Brainstorming',
                            location: 'Gambelas',
                        },
                        {
                            icon: teamsIcon,
                            time: '18:00',
                            event: 'Team formation',
                            location: 'Gambelas',
                        },
                        {   
                            icon: startIcon,
                            time: '19:00',
                            event: 'Competition start',
                            location: '',
                        }
                    ]
                },
                {
                    name: 'Day 2, Saturday 29/6',
                    description: 'Hard coding day with help of mentors and food breaks.',
                    image: compImage,
                    program: [
                        {
                            icon: foodIcon,
                            time: '08:00',
                            event: 'Venue opens, breakfast',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: judgesIcon,
                            time: '09:00',
                            event: 'Final team assignments',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: codingIcon,
                            time: '09:00',
                            event: 'Product work',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: foodIcon,
                            time: '13:00',
                            event: 'Lunch',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: codingIcon,
                            time: '14:00',
                            event: 'Product work',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: foodIcon,
                            time: '18:00',
                            event: 'Dinner',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: codingIcon,
                            time: '19:00',
                            event: 'Product work',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: nightIcon,
                            time: '22:00',
                            event: 'Good night',
                            location: 'Algarve Tech Hub',
                        }
                    ]
                },
                {
                    name: 'Day 3, Sunday 30/6',
                    description: 'Finalize your product for submission. Move to the afterparty where demos will be presente, winners announced decompression offered.',
                    image: finalImage,
                    program:
                    [
                        {
                            icon: foodIcon,
                            time: '08:00',
                            event: 'Venue opens, breakfast',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: codingIcon,
                            time: '08:30',
                            event: 'Product work',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: compEndIcon,
                            time: '12:30',
                            event: 'Submission and lunch',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: partyIcon,
                            time: '14:00',
                            event: 'Party opens',
                            location: 'TBA',
                        },
                        {
                            icon: winnerIcon,
                            time: '14:30',
                            event: 'Demo presentations, Winner announcements',
                            location: 'TBA',
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
  