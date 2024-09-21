<template>
    <label>{{ question.question }}</label>
    <div v-for="choice in question.choices">
      <input type="radio" v-model="selectedResponse" :value="choice">{{ choice }}
    </div>

    <div>
      <button @click="Submit()" class="btn btn-primary">Question suivante</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
    question : {}
}
)

let selectedResponse = ref("")

function Submit(){
    emits('submit', selectedResponse.value)
    selectedResponse = ref("")
}

const emits = defineEmits(['submit'])

</script>