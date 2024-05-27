<template>
<div class="hero h-svh" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div class="hero-overlay bg-opacity-60">
    </div>
    <div class="hero-content p-0 text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-13 text-5xl font-bold">June 28-30, 2024</h1>
            <h1 class="mb-10 text-4xl font-bold">Blue Biotech Hackathon</h1>
            <p class="mb-0 p-2 font-bold">Join us in our 48-hour hackathon 
                to innovate and develop cutting-edge solutions in biotechnology, 
                science, and business.
            </p>
            <Countdown class="p-20 justify-center" />
            <div class="flex flex-row gap-2 justify-center">
                <button class="btn text-neutral-content btn-secondary">Tickets coming soon</button>
                <EventInfoButton />
                <!-- <SponsorButton /> -->
            </div>
            <div class="p-4 flex flex-row gap-2 justify-center">
                <SponsorButton />
            </div>  
        </div>
    </div>
</div>
</template>

<script>
import Countdown from '@/components/Countdown.vue';
import EventInfoButton from '@/components/buttons/EventInfoButton.vue';
import SponsorButton from '@/components/buttons/SponsorshipButton.vue';
import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
export default {
    name: 'Index',
    components: {
        Countdown,
        EventInfoButton,
        SponsorButton,
    },
    data() {
        return {
            backgroundUrl,
        };
    },
};

</script>