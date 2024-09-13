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
                            <RouterLink :to="link.to"> <b>{{ link.text }}</b></RouterLink>
                        </li>
                    </ul>
                </div>  
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-2 rounded-box">
                    <li v-for="link in links" :key="link.text">
                        <RouterLink :to="link.to"><b>{{ link.text }}</b></RouterLink>
                    </li>
                </ul>
            </div>
            <div class="navbar-center flex lg:hidden">
                <a class="btn btn-ghost text-xl h-10" >
                    <RouterLink to="/about"><img id="logo" class="h-10" src="@/assets/images/logo.png" /></RouterLink>
                </a>
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
                    { to: '/challenges', text: 'Challenges' },
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