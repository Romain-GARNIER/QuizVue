<template>
  <div class="question">
    <h3>{{ question.question }}</h3>
      <label v-for="choice in randomChoices">
        <Choice
         :disabled="hasAnswer" 
         :value="choice"
         v-model="selectedResponse"
         :correctAnswer="question.correct_answer"
        />
      </label>
    <!--button :disabled="!hasAnswer" @click="Submit()">Question suivante</button-->
  </div>
</template>

<script setup>
import { ref, computed, watch, onUnmounted, onMounted } from 'vue'
import { shuffleArray } from '../functions/array'
import Choice from './Choice.vue'

const props = defineProps({
  question: {}
})

let selectedResponse = ref(null)
const hasAnswer = computed(() => selectedResponse.value !== null)
const randomChoices = computed(() => shuffleArray(props.question.choices))

const emits = defineEmits(['submit'])

watch(selectedResponse, () => {
  setTimeout(() => {
    emits('submit', selectedResponse.value)
  }, 2000)
})

let timer

onMounted(() => {
  timer = setTimeout(() => {
    selectedResponse.value = ''
  }, 5000)
})

onUnmounted(() => {
  clearTimeout(timer)
})


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