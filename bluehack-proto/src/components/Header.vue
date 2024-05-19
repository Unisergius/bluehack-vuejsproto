<template>
    <header class="shadow-md z-50">
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="navbar-start">
                    <a class="btn btn-ghost text-xl h-10" >
                        <RouterLink to="/about"><img id="logo" class="h-6" src="@/assets/images/logo.png" /></RouterLink>
                        </a>
                </div>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-2 rounded-box">
                    <li v-for="link in links" :key="link.text">
                        <RouterLink :to="link.to">{{ link.text }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="navbar-end">
                <ThemeToggle></ThemeToggle>
            </div>
        </div>
    </header>
</template>

<script>
    import ThemeToggle from '@/components/buttons/ThemeToggle.vue';
    export default {
        name: 'Header',
        components: {
            ThemeToggle
        },
        data() {
            return {
                links: [
                    { to: '/', text: 'Home' },
                    // { to: '/about', text: 'About Us' },
                    { to: '/eventInfo', text: 'Event Info' },
                    { to: '/contact', text: 'Contact' },
                    { to: '/partners', text: 'Partners' }
                ]
            };
        }
    }
</script>

<style scoped>
    /* Add any custom styles here */
</style>