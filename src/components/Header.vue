<template>
    <header class="shadow-md z-50">
        <div class="navbar bg-base-100">
            <div class="navbar-start hidden lg:flex">
                <a class="btn btn-ghost text-xl h-10" >
                    <RouterLink to="/about"><img id="logo" class="h-10" src="@/assets/images/CODE_BLUE_Hackaton-02.png" /></RouterLink>
                </a>
            </div>
            <div class="navbar-start flex lg:hidden">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li v-for="link in links" :key="link.text">
                            <RouterLink v-if="link.to" :to="link.to"> <b>{{ link.text}}</b></RouterLink>
                            <a v-else :href="link.href" target="_blank" rel="noopener noreferrer"><b>{{ link.text }}</b></a>
                        </li>
                    </ul>
                </div>  
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-2 rounded-box">
                    <li v-for="link in links" :key="link.text">
                        <RouterLink v-if="link.to" :to="link.to"><b>{{ link.text }}</b></RouterLink>
                        <a v-else :href="link.href" target="_blank" rel="noopener noreferrer"><b>{{ link.text }}</b></a>
                    </li>
                </ul>
            </div>
            <div class="navbar-center flex lg:hidden">
                <a class="btn btn-ghost text-xl h-10" >
                    <RouterLink to="/about"><img id="logo" class="h-10" src="@/assets/images/logo.png" /></RouterLink>
                </a>
            </div>
            <div class="navbar-end">
                <SelectLang></SelectLang>
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    </header>
</template>

<script>
    import ThemeToggle from '@/components/buttons/ThemeToggle.vue';
    import SelectLang from '@/components/buttons/LanguageSwitcher.vue';
    export default {
        name: 'Header',
        components: {
            ThemeToggle,
            SelectLang
        },
        computed: {
            links() {
                return [
                    { to: '/', text: this.$t('links.home') },
                    { to: '/eventInfo', text: this.$t('links.event-info') },
                    { to: '/challenges', text: this.$t('links.challenges') },
                    { to: '/projects2024', text: this.$t('links.projects2024') },
                    // { href: 'https://ti.to/algarve-evolution/blue-biotech-hackathon-2024', text: this.$t('links.register') },
                    { to: '/contact', text: this.$t('links.contact') },
                    { to: '/partners', text: this.$t('links.partners')}
                ]

            }
        },
        watch: {
            '$i18n.locale'() {
            // This will trigger the computed property to re-evaluate
            }
        }
    };
</script>

<style scoped>
    /* Add any custom styles here */
</style>