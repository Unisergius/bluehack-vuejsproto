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
                    <b>Code Blue</b> takes prides in tackling multifaceted and complex challenges of today's world, 
                    recognizing that solutions require diverse perspectives and collaborative efforts. We believe 
                    that everyone has valuable insights that can contribute to the advancement of humanity. 
                    Our focus is on science, knowledge transfer, software development, sustainability, and innovation.
                </p>
            </section>

            <!-- Our Team -->
            <section class="bg-base-200 p-6 rounded-lg shadow-lg mb-6">
                <h2 class="text-3xl font-bold mb-4">Our Team</h2>
                <p class="mb-4">
                    Teresa Correia
                </p>
                <p class="mb-4">
                    Penélope Gonçalves
                </p>
                <p class="mb-4">
                    Lenz Gschwendtner
                </p>
                <p class="mb-4">
                    Sérgio Henriques
                </p>
                <p class="mb-4">
                    Vanessa v. Nascimento
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