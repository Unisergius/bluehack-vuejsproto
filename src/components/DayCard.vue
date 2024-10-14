<template>
    <div class="card w-120 p-0  shadow-xl">
        <figure class="bg-base-600">
            <img :src="day.image" :alt="day.name" class="h-32 object-contain" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">{{ day.name }}</h2>
            <div>{{ day.description }}</div>
            <div class="divider divider-primary my-4">{{ $t('daycard.times') }}</div>
            <!-- display all fields of day.program -->
            <div class="overflow-x-auto">
            <table class="table table-sm">
                <thead>
                    <tr>
                    <th></th>
                    <th>{{ $t('daycard.time') }}</th>
                    <th>{{ $t('daycard.program') }}</th>
                    <th>{{ $t('daycard.location') }}</th>
                    </tr>
                </thead>
                <tbody>
                <template v-for="(event, index) in day.program" :key="index">
                    <tr>
                        <td>
                            <div class="w-6 h-6">
                                <img :src="event.icon" :alt="event.icon"/>
                            </div>
                        </td>
                        <td>{{ event.time }}</td>
                        <td>{{ event.event }}</td>
                        <td>{{ event.location }}</td>
                    </tr>
                    <!-- if event has items array print them -->
                    <tr v-if="event.items">
                        <!-- <td></td> -->
                        <!-- <td></td> -->
                        <td colspan="4">
                            <ul class="list-disc list-inside space-y-1">
                                <li v-for="(item, index) in event.items"  :key="index"><b>{{ item.time }}</b> <br>&nbsp;&nbsp;&nbsp;&nbsp;{{ item.event }} </li>
                            </ul>
                        </td>
                    </tr>
                </template>
                </tbody>
                
                </table>
            </div>
        </div>
    </div>

</template>
  
<script>

export default {
    name: 'DayCard',
    props: {
        day: {
            type: Object,
            required: true
        }
    },
};
</script>

<style scoped>
/* Add any custom styles here */
.non-stretch-div {
  display: inline-block; /* Prevents the div from stretching */
  width: auto; /* Adjust width as needed */
  height: auto; /* Adjust height as needed */
  /* Add any other styles you need */
}
</style>