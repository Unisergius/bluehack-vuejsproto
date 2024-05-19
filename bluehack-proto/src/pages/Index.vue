<template>
<div class="hero h-svh" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div class="hero-overlay bg-opacity-60">
    </div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Code Blue Hackathon</h1>
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