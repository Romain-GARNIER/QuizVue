<template>
    <div v-if="correctAnswerCount >= countQuestion">
        <p>Bravo !</p>
    </div>
    <div v-else>
        <p>Dommage</p>
    </div>
    <p>Votre score est de {{  correctAnswerCount }} / {{ countQuestion }}</p>
</template>

<script setup>
defineProps({
    correctAnswerCount : Number,
    countQuestion : Number
})
</script>