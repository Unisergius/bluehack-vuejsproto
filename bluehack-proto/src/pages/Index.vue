<template>
<div class="hero h-svh" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div class="hero-overlay bg-opacity-60">
    </div>
    <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">Welcome to BlueHack</h1>
            <p class="mb-5">29th 30th June 2024</p>
            <button class="btn btn-primary">Don't miss out</button>
        </div>
    </div>
</div>
</template>

<script>
import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
export default {
  data() {
    return {
      backgroundUrl,
    };
  },
};

</script>