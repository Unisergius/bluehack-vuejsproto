<template>
  <!-- This works only with < 100 days left -->
  <div class="flex gap-5">
    <div>
      <span class="countdown font-mono text-4xl">
        <span :style="{ '--value': days }"></span>
      </span>
      {{ $t('countdown.days') }}
    </div>
    <div>
      <span class="countdown font-mono text-4xl">
        <span :style="{ '--value': hours }"></span>
      </span>
      {{ $t('countdown.hours') }}
    </div>
    <div>
      <span class="countdown font-mono text-4xl">
        <span :style="{ '--value': minutes }"></span>
      </span>
      {{ $t('countdown.minutes') }}
    </div>
    <div>
      <span class="countdown font-mono text-4xl">
        <span :style="{ '--value': seconds }"></span>
      </span>
      {{ $t('countdown.seconds') }}
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
      targetDate: new Date('2024-10-18T00:00:00'),
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
  