<template>
    <p>Votre score est de {{  score }} / {{ max }}</p>
    <div v-if="score >= minimumScore">
        <p>{{successMessage}} !</p>
    </div>
    <div v-else>
        <p>{{failureMessage}}</p>
    </div>
</template>

<script setup>
defineProps({
    score : Number,
    max : Number,
    minimumScore : Number,
    successMessage : String,
    failureMessage : String
})
</script>