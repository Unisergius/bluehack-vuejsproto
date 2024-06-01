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
                    Assemble a team, develop a prototype for an innovative biotechnology, scientific, 
                    or business solution within the scope of the blue economy, and accomplish it all in just 40 hours. 
                    Collaborate, learn, and create impactful solutions together.
                    </p>
                    <h3 class="text-2xl font-bold mb-4">Scope</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li><b>Biotechnology:</b> Innovations in marine biology, sustainable aquaculture, 
                            bioprospecting, or marine conservation.</li>
                        <li><b>Science:</b> Data-driven solutions for marine science, environmental monitoring, 
                            ecosystem restoration, or marine industry.</li>
                        <li><b>Business:</b> Novel business models that support sustainable use of ocean resources, 
                            eco-friendly maritime industries, or blue economy startups.</li>
                    </ul>

                    <h3 class="text-2xl font-bold mb-4">Special Pitch to You</h3>
                    <!-- create bullet point list -->
                    <ul class="list-disc list-inside mb-4">
                        <li>We provide <b>Mentoring</b> on marine science, data, software tools and ideation.</li>
                        <li>We will provide you with curated <b>repository of resources</b>, including challenges you can tackle. </li>
                        <li>Program which foster social and <b>community engagement</b> while introducing you 
                            to local stakeholders and their challenges. </li>
                    </ul>
                </section>
                
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
                    <li>2-year incubation support from CRIA.</li>
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
                    <h3 class="text-2xl font-bold mb-4">Creating or joining teams</h3>
                    <!-- create bullet point list -->
                    <ul class="list-disc list-inside mb-4">
                        <li>Teams have a minimum of 2 and maximum of 4 members.</li>
                        <li>Teams will be formed (mostly) on Friday 28/6 after the brainstorming session.</li>
                        <li>Team members can not participate on different teams. </li>
                        <li>Teams should start the event without having any previous development work done. 
                            They can and should discuss/agree on ideas and recruit team members to help the 
                            development during the hackathon event (especially Friday 28/6).</li>
                        <li>Even though the competition officially starts on 28/6, <b>final deadline</b> 
                            to join/form/register a team and its name is <b>9 a.m. 29/6</b>, delivered <b>on paper</b>.</li>
                    </ul>

                    <h3 class="text-2xl font-bold mb-4">Selecting an idea</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li>Any idea you might choose to explore during the hackathon is valid if that idea, 
                            prototype (functional or not), project is within the scope of <b>Blue Economy</b> 
                            and/or <b>Biotechnology</b>.</li>
                        <li>Teams should start the event without having any previous development work done. 
                            They can and should discuss/agree on ideas and recruit team members to help the 
                            development (especially on Friday 28/6).</li>
                        <li>A set of challenges by sponsors and CCMAR will be compiled and presented publicly before the Friday 28/6. </li>
                    </ul>
                    
                    <h3 class="text-2xl font-bold mb-4">Working the idea</h3>
                    <ul class="list-disc list-inside mb-4">
                        <li>Mentors with different expertise will be available for the teams to request help and consultation.</li>
                        <li>3 debugging sessions will be scheduled, where the teams can share their issues and get input from other teams.</li>
                        <li>Delivery deadline is expected around 12:00 a.m.,  Sunday 30/6.</li>
                    </ul>

                    <!-- Judging -->
                    <h3 class="text-2xl font-bold mb-4">Judging</h3>
                    <p class="mb-4">
                    Scores on scale from 1 to 10, with 10 being the highest score. 
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
                    <i>last updated: 2024-06-01</i>
                    </p>
                </section>
            
                <!-- Jury Section -->
                <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                    <h2 class="text-3xl font-bold mb-4">Jury</h2>
                    <!-- bullet point list -->
                    <ul class="list-disc list-inside">
                        <li><b>Deborah Power</b>: Professor at CCMAR, leader of Comparative Endocrynology group</li>
                        <li><b>João Varela</b>: Professor at CCMAR, leader of Marine Biotechnology group</li>
                        <li><b>Lenz Gschwendtner</b>: Coder, community builder, punk sailor</li>
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
  