<template>
  <div class="question">
    <h3>{{ question.question }}</h3>
      <label v-for="choice in question.choices">
        <input type="radio" v-model="selectedResponse" :value="choice" nmae="answer">
        {{ choice }}
      </label>
    <button :disabled="!hasAnswer" @click="Submit()">Question suivante</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

defineProps({
  question: {}
})

let selectedResponse = ref(null)
const hasAnswer = computed(() => selectedResponse.value !== null)

const emits = defineEmits(['submit'])

function Submit() {
  emits('submit', selectedResponse.value)
}

</script>

<style scoped>
.question {
  padding-top: 2rem;
}

.question button {
  margin-left: auto;
  display: block;
}
</style>