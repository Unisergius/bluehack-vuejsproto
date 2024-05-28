<template>
    <tr>
        <td>
            <div class="flex items-center gap-3">
            <div class="avatar">
              <div class="mask mask-squircle w-16">
                <img :src="member.img" :alt="member.img"/>
              </div>
            </div>
            <div>
              <div class="font-bold">{{ member.name }}</div>
              <div class="text-sm opacity-50">{{ member.description }}</div>
            </div>
            </div>
        </td>
    </tr>
</template>
  
<script>

export default {
    name: 'MemberCard',
    props: {
        member: {
            type: Object,
            required: true
        }
    },
};
</script>

<style scoped>
/* Add any custom styles here */
</style>