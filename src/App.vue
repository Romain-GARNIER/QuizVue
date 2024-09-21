<script setup lang="ts">
import Quiz from './components/Quiz.vue'
import { onMounted, ref } from 'vue';
import { GetSettings } from './services/settingsService'

const quiz = ref(null)
const state = ref('loading')

onMounted(() => {
  GetSettings()
    .then(data => {
      quiz.value = data
      state.value = 'idle'
    }).catch(e => {
      state.value = 'error'
      console.log(e)
    })
})

</script>

<template>
  <div class="container">
    <div v-if="state === 'error'">
      <p>
        Impossible de charger le quiz
      </p>
    </div>
    <div :aria-busy="state === 'loading'">
      <Quiz :settings="quiz" v-if="quiz" />
    </div>
  </div>
</template>

<style>

.container{
  margin: 2rem;
}

</style>
