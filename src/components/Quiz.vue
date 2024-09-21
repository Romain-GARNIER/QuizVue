<script setup lang="ts">
import { ref, computed } from 'vue'
import { GetSettings } from '../services/settingsService';
import ProgressBar from './ProgressBar.vue';
import Question from './Question.vue';
import EndQuiz from './EndQuiz.vue';

const settings = GetSettings()

const title = ref(settings.title);

let currentQuestionIndex = ref(0)

const progressValue = computed(() => {
  return currentQuestionIndex.value / settings.questions.length * 100
});

const currentQuestion = computed(() => {
  return settings.questions[currentQuestionIndex.value];
});

const correctAnswerCount = ref(0);

function validAnswer(selectedResponse: string) {
  if (selectedResponse === currentQuestion.value.correct_answer) {
    correctAnswerCount.value++;
  }
  currentQuestionIndex.value++;
}
</script>

<template>
  <div class="">
    <div>
      <h1>{{ title }}</h1>
    </div>

    <div v-if="currentQuestionIndex < settings.questions.length">
      <ProgressBar :progress-value="progressValue"></ProgressBar>
      <div>
        <Question :question="currentQuestion" @submit="validAnswer" />
      </div>
    </div>
    <div v-else>
      <EndQuiz :correctAnswerCount="correctAnswerCount" :countQuestion="settings.questions.length"></EndQuiz>
    </div>
  </div>
</template>

<style scoped></style>
