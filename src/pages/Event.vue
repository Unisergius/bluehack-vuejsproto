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
            <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                <h2 class="text-3xl font-bold mb-4">Reserve the Date: June 28-30</h2>
                <!-- <p class="mb-4">
                June 28-30.
                </p> -->
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
    import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
    export default {
        name: 'EventInfoPage',
        data() {
            return {
                backgroundUrl,
            };
        },
    }
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
  