<template>

<div class="hero min-h-screen bg-base-200" :style="{ backgroundImage: `url(${backgroundUrl})` }">
    <div class="hero-overlay bg-opacity-90">
    </div>
    <div class="hero-content flex-col lg:flex-row-reverse text-neutral-content">
        <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Contact Us</h1>
            <p class="py-6">Sponsors can present their problems, mentor teams, and advertise. Please contact <a class="text text-primary" href="mailto:dpalecek@ualg.pt">dpalecek@ualg.pt</a> to join us in delivering the best possible hackathon which drives sustainable blue economy development and technology.</p>
        </div>
        <div v-if="formEnabled" class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 d-none">
            <form class="card-body" @submit.prevent="sendEmail">
                <div class="form-control">
                    <label class="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" class="grow" id="name" v-model="name" required placeholder="First and Last Name" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" class="grow" id="email" v-model="email" placeholder="youremail@example.com" />
                    </label>
                </div>
                <div class="form-control">
                    <label class="input input-bordered flex items-center gap-2">
                        <input type="text" class="grow"  id="company" v-model="company"  placeholder="Search" />
                        <span class="badge badge-info">Optional</span>
                    </label>
                </div>
                <div class="form-control">
                    <label for="message">
                        <textarea id="message" v-model="message" required class="textarea textarea-bordered" placeholder="Message"></textarea>
                    </label>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary" type="submit">Send</button>
                </div>
            </form>
        </div>
        <img v-if="!formEnabled" :src="codeBlueHackatonImg" class="max-w-sm rounded-lg shadow-2xl bg-current" />
    </div>
</div>

</template>

<script>
import backgroundUrl from '@/assets/images/maksym-kaharlytskyi-QQcLNBQ6i_A-unsplash.jpg';
import codeBlueHackatonImg from '@/assets/images/CODE_BLUE_Hackaton-01.png';
export default {
    data() {
        return {
            name: '',
            email: '',
            company: '',
            message: '',
            formEnabled: false,
            backgroundUrl,
            codeBlueHackatonImg
        };
    },
    methods: {
        sendEmail() {
            // Implement your email sending logic here
            // You can use a library like Nodemailer or an API to send the email
            // Example: axios.post('/api/send-email', { name: this.name, email: this.email, message: this.message })
            // Remember to handle success and error cases
        }
    }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>