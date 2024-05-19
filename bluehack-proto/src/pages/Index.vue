<template>
<div class="hero h-svh" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div class="hero-overlay bg-opacity-60">
    </div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <!-- The title is not entirely settled -->
            <!-- <h1 class="mb-10 text-5xl font-bold">Biotech Hackathon</h1> -->
            <h1 class="mb-10 text-5xl font-bold">Blue Biotech Hackathon</h1>
            <p class="mb-0 font-bold">Join us for an inspiring 48-hour hackathon 
                to innovate and develop solutions for biotechnology, science, 
                and business case ideas.
            </p>
            <Countdown class="p-20 justify-center" />
            <div class="flex flex-row gap-2 justify-center">
                <button class="btn  text-neutral-content btn-primary">Tickets coming soon</button>
                <EventInfoButton />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Countdown from '@/components/Countdown.vue';
import EventInfoButton from '@/components/buttons/EventInfoButton.vue';
import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
export default {
    name: 'Index',
    components: {
        Countdown,
        EventInfoButton,
    },
    data() {
        return {
            backgroundUrl,
        };
    },
};

</script>