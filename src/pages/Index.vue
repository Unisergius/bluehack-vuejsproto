<template>
<div class="hero h-svh" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div class="hero-overlay bg-opacity-60">
    </div>
    <div class="hero-content p-0 text-center text-neutral-content">
        <div class="max-w-md">
            <!-- <h1 class="mb-13 text-4xl font-bold"> {{ $t('index.date') }}</h1> -->
            <h1 class="mb-0 text-4xl font-bold">{{ $t('index.title') }}</h1>
            <p class="mb-0 p-2 font-bold">{{ $t('index.subtitle') }}
            </p>
            <!-- <Countdown class="p-10 pb-20 mb-0 justify-center" /> -->

            
            <!-- 
            <div class="flex flex-row flex-wrap gap-2 justify-center p-2">
                <RegisterButton class="w-full sm:w-auto"/>
                <EventInfoButton class="w-full sm:w-auto"/>
                 
            </div>
            <div class="p-2 flex flex-row gap-2 justify-center">
                <SponsorButton class="w-full sm:w-auto" />
            </div>
            -->
        </div>
        
    </div>
</div>
</template>

<!-- <div class="flex justify-center mb-4 ">
    <img src="@/assets/images/group.jpg" alt="Group photo" />
</div>
<div class="flex justify-center">
    <img src="@/assets/images/winners.jpg" alt="winners photo" class="w-full max-w-xs"/>
</div> -->

<script>
import Countdown from '@/components/Countdown.vue';
import EventInfoButton from '@/components/buttons/EventInfoButton.vue';
import SponsorButton from '@/components/buttons/SponsorshipButton.vue';
// import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
import backgroundUrl from '@/assets/images/group.jpg';

import RegisterButton from '@/components/buttons/RegisterButton.vue';
export default {
    name: 'Index',
    components: {
        Countdown,
        EventInfoButton,
        RegisterButton,
        SponsorButton,
    },
    data() {
        return {
            backgroundUrl,
        };
    },
};

</script>