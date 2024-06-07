<template>
  <!-- This works only with < 100 days left -->
  <!-- <div class="flex gap-5">
    <div>
      <span class="countdown font-mono text-1xl">
        <span :style="{ '--value': days }"></span>
      </span>
      days
    </div>
    <div>
      <span class="countdown font-mono text-1xl">
        <span :style="{ '--value': hours }"></span>
      </span>
      hours
    </div>
    <div>
      <span class="countdown font-mono text-1xl">
        <span :style="{ '--value': minutes }"></span>
      </span>
      min
    </div>
    <div>
      <span class="countdown font-mono text-1xl">
        <span :style="{ '--value': seconds }"></span>
      </span>
      sec
    </div>
  </div> -->

  <!-- div with element id countdown to display the second implementation of countdown -->
  <div class="flex gap-5 justify-center">
    <div>
      <span class="font-mono text-3xl">
        <span id="countdown"></span>
      </span>
    </div>
  </div>


</template>
  
<script>
// export default {
//   name: 'Countdown',
//   data() {
//     return {
//       days: 0,
//       hours: 0,
//       minutes: 0,
//       seconds: 0,
//       targetDate: new Date('2024-09-17T00:00:00'),
//     };
//   },
//   mounted() {
//     this.updateCountdown();
//     setInterval(this.updateCountdown, 1000);
//   },
//   methods: {
//     updateCountdown() {
//       const now = new Date();
//       const diff = this.targetDate - now;

//       this.days = Math.floor(diff / 1000 / 60 / 60 / 24);
//       this.hours = Math.floor((diff / 1000 / 60 / 60) % 24);
//       this.minutes = Math.floor((diff / 1000 / 60) % 60);
//       this.seconds = Math.floor((diff / 1000) % 60);
//     },
//   },
// };


var countDownDate = new Date("Oct 22, 2024 00:0:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("countdown").innerHTML = days + " days " + hours + "h "
+ minutes + "m " + seconds + "s ";

// If the count down is finished, write some text
if (distance < 0) {
  clearInterval(x);
  document.getElementById("countdown").innerHTML = "Let's get started!";
}
}, 1000);
</script>
  
<style scoped>
/* Add any custom styles here */
</style>
  