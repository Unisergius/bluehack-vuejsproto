<template>
    <div class="hero " :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="hero-overlay bg-opacity-60">
        </div>
        <div class="hero-content text-left">
            <div class="container mx-auto p-6">
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
                
                <div class="container mx-auto p-3">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <DayCard
                            v-for="(day, index) in days"
                            :key="index"
                            :day="day"
                        />
                    </div>
                </div>
            </section>

            <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                <h2 class="text-3xl font-bold mb-4">Reserve the Date: June 28-30</h2>
                <h3 class="text-2xl font-semibold mb-2">Preliminary Program:</h3>
                <ul class="list-disc list-inside">
                <li>28/6, Afternoon at Campus Gambelas: Seminars, brainstorming, excursions, team formation</li>
                <li>Competition hosted at Algarve Tech Hub from evening 28/6 to lunch time 30/6</li>
                <li>30/6 afternoon: Pitch presentation, winner announcements, decompression party</li>
                </ul>
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
import arriveIcon from '@/assets/icons/registration.png';

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
                    description: 'Seminars, brainstorming, excursions, team formation',
                    image: onboardImage,
                    program: [
                        {
                            icon: arriveIcon,
                            time: '14:00',
                            event: 'Registration',
                            location: 'Campus Gambelas',
                        },
                        {
                            icon: arriveIcon,
                            time: '15:00',
                            event: 'Welcome and Introduction',
                            location: 'Campus Gambelas',
                        },
                        {
                            icon: arriveIcon,
                            time: '16:00',
                            event: 'Seminars',
                            location: 'Campus Gambelas',
                        },
                        {
                            icon: arriveIcon,
                            time: '18:00',
                            event: 'Brainstorming',
                            location: 'Campus Gambelas',
                        },
                        {   
                            icon: arriveIcon,
                            time: '20:00',
                            event: 'Team Formation',
                            location: 'Campus Gambelas',
                        },
                    ]
                },
                {
                    name: 'Day 2, Saturday 29/6',
                    description: 'Competition hosted at Algarve Tech Hub',
                    image: onboardImage,
                    program: [
                        {
                            icon: arriveIcon,
                            time: '08:00',
                            event: 'Registration',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: arriveIcon,
                            time: '09:00',
                            event: 'Welcome and Introduction',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: arriveIcon,
                            time: '10:00',
                            event: 'Coding',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: arriveIcon,
                            time: '12:00',
                            event: 'Lunch',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: arriveIcon,
                            time: '13:00',
                            event: 'Coding',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: arriveIcon,
                            time: '18:00',
                            event: 'Dinner',
                            location: 'Algarve Tech Hub',
                        },
                    ]
                },
                {
                    name: 'Day 3, Sunday 30/6',
                    description: 'Pitch presentation, winner announcements, decompression party',
                    image: onboardImage,
                    program:
                    [
                        {
                            icon: arriveIcon,
                            time: '08:00',
                            event: 'Breakfast',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: arriveIcon,
                            time: '09:00',
                            event: 'Pitch Presentation',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: arriveIcon,
                            time: '12:00',
                            event: 'Lunch',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: arriveIcon,
                            time: '13:00',
                            event: 'Winner Announcements',
                            location: 'Algarve Tech Hub',
                        },
                        {
                            icon: arriveIcon,
                            time: '14:00',
                            event: 'Decompression Party',
                            location: 'Algarve Tech Hub',
                        },
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
  