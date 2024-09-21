<template>
    <div class="d-flex p-2">
        <progress max="100" :value=progressValue></progress><span class="progress-value">{{ progressValue }}%</span>
    </div>
</template>

<script setup>

defineProps({
    progressValue: Number
})

</script>

<style scoped>
.progress-value {
    padding-left: 1em;
}

body {
    margin-top: 1%;
}
</style>