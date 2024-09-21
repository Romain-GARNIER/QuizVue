<script setup>
import { ref, computed } from 'vue'
import Progress from './Progress.vue';
import Question from './Question.vue';
import EndQuiz from './EndQuiz.vue';

const props = defineProps({
  settings : Object
})

let currentQuestionIndex = ref(0)

const currentQuestion = computed(() => {
  return props.settings.questions[currentQuestionIndex.value];
});

const correctAnswerCount = ref(0);

function validAnswer(selectedResponse) {
  if (selectedResponse === currentQuestion.value.correct_answer) {
    correctAnswerCount.value++;
  }
  currentQuestionIndex.value++;
}
</script>

<template>
    <div>
      <h1>{{ settings.title }}</h1>
    </div>

    <div v-if="currentQuestionIndex < settings.questions.length">
      <Progress :step="currentQuestionIndex" :max="settings.questions.length"></Progress>
      <Question :key="currentQuestion.question" :question="currentQuestion" @submit="validAnswer" />
    </div>
    <div v-else>
      <EndQuiz 
        :score="correctAnswerCount"
        :max="settings.questions.length"
        :minimumScore="settings.minimum_score"
        :successMessage="settings.success_message"
        :failureMessage="settings.failure_message"
       ></EndQuiz>
    </div>
</template>

<style scoped></style>
