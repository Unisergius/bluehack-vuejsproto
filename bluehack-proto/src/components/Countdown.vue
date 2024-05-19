<template>
    <div class="flex gap-5">
      <div>
        <span class="countdown font-mono text-4xl">
          <span :style="{ '--value': days }"></span>
        </span>
        days
      </div>
      <div>
        <span class="countdown font-mono text-4xl">
          <span :style="{ '--value': hours }"></span>
        </span>
        hours
      </div>
      <div>
        <span class="countdown font-mono text-4xl">
          <span :style="{ '--value': minutes }"></span>
        </span>
        min
      </div>
      <div>
        <span class="countdown font-mono text-4xl">
          <span :style="{ '--value': seconds }"></span>
        </span>
        sec
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Countdown',
    data() {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        targetDate: new Date('2024-06-28T00:00:00'),
      };
    },
    mounted() {
      this.updateCountdown();
      setInterval(this.updateCountdown, 1000);
    },
    methods: {
      updateCountdown() {
        const now = new Date();
        const diff = this.targetDate - now;
  
        this.days = Math.floor(diff / 1000 / 60 / 60 / 24);
        this.hours = Math.floor((diff / 1000 / 60 / 60) % 24);
        this.minutes = Math.floor((diff / 1000 / 60) % 60);
        this.seconds = Math.floor((diff / 1000) % 60);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  