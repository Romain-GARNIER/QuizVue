<template>
    <div class="d-flex p-2">
        Question {{ step + 1 }} / {{ max }}
        <progress :max="max" :value=step></progress><span class="progress-value"></span>
    </div>
</template>

<script setup>
import { computed } from 'vue'

defineProps({
    step: Number,
    max : Number
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