<template>
    <div :class="classes" >
        <input :disabled="disabled" type="radio" :value="value" nmae="answer" v-model="model">
        {{ value }}
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    disabled: Boolean,
    value: String,
    correctAnswer: String
})

const model = defineModel()
const classes = computed(() => ({
    disabled: props.disabled,
    right: props.disabled && props.value === props.correctAnswer,
    wrong: props.disabled && props.value !== props.correctAnswer && model.value === props.value
}))
</script>

<style>
.disabled{
    opacity: 0.5;
}
.right{
    color:green;
    opacity:1
}

.wrong{
    color:red
}
</style>