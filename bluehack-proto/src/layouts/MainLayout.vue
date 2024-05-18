<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Index from '@/pages/Index.vue'
export default {
    name: 'MainLayout',
    // Your component logic goes here
    components: {
        Header,
        Footer,
        Index
    }
}
</script>


<template>
    <div class="flex flex-col min-h-screen">
        <Header/>
        <main class="flex-grow">
            <Index/>
        </main>
        <Footer/>
    </div>
</template>


<style scoped>
/* Your component's styles here */
</style> 