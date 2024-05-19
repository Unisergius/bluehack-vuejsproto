<template>
    <div class="hero " :style="{ backgroundImage: `url(${backgroundUrl})` }">
        <div class="hero-overlay bg-opacity-60">
        </div>
        <div class="hero-content text-left">
            <div class="container mx-auto p-6">
            <!-- Philosophy -->
            <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                <h2 class="text-3xl font-bold mb-4">Our philosophy</h2>
                <p class="mb-4">
                    <em>Code Blue</em> takes prides in tackling multifacet and complicated challenges
                    of the current world, which need contributions from as many angles as possible.
                    We believe everyone knows something we could use towards humanity progress. We focus on science, knowledge transfer,
                    sustainability, and innovation.
                </p>
            </section>

            <!-- Our Team -->
            <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                <h2 class="text-3xl font-bold mb-4">Our Team</h2>
                <p class="mb-4">
                    Teresa Correia
                </p>
                <p class="mb-4">
                    Lenz Gschwendtner
                </p>
                <p class="mb-4">
                    Sergio Henriques
                </p>
                <p class="mb-4">
                    David Paleček
                </p>
            </section>
            </div>
        </div>
    </div>
</template>

<script>
    import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
    export default {
        name: 'AboutUs',
        data() {
            return {
                backgroundUrl,
            };
        },
    }
</script>

<style scoped>
/* Your component's styles here */
</style>