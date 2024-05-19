<template>
    <div class="carousel w-full">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :id="'slide' + (index + 1)"
        class="carousel-item relative w-full"
      >
        <div
          class="hero "
          :style="{ backgroundImage: `url(${slide.backgroundImage})` }"
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">{{ slide.title }}</h1>
              <p class="mb-5">{{ slide.description }}</p>
              <button v-if="slide.buttonEnabled" class="btn btn-primary">{{ slide.buttonText }}</button>
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a :href="'#slide' + (index === 0 ? slides.length : index)" class="btn btn-circle">❮</a>
          <a :href="'#slide' + (index === slides.length - 1 ? 1 : index + 2)" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        slides: [
          {
            title: 'Event Info',
            description: 'Code Blue Hackathon invites you to learn, code and create solutions for emerging biotechnology, science, applications and business case ideas.',
            buttonText: 'Get Started',
            backgroundImage: 'https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg',
            buttonEnabled: false
          },
          {
            title: 'Special Pitch to You',
            description: 'We provide mentoring on marine science, data, software tools and ideation.',
            buttonText: 'Read More',
            backgroundImage: 'https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg',
            buttonEnabled: false
          },
          {
            title: 'Join Our Community',
            description: 'Become a part of our vibrant community and share your experiences.',
            buttonText: 'Sign Up',
            backgroundImage: 'https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg',
            buttonEnabled: false
          },
          {
            title: 'Contact Us',
            description: 'We would love to hear from you. Get in touch with us today.',
            buttonText: 'Contact',
            backgroundImage: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg',
            buttonEnabled: false
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  .hero {
    height: 400px;
  }
  </style>
  