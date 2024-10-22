<template>
  <div class="v-input">
    <textarea ref="inputRef" v-if="props.multiline" v-model="model" :placeholder="placeholder" :name="name"/>
    <input ref="inputRef" v-else v-model="model" :placeholder="placeholder" :name="name"/>
  </div>
</template>

<script lang="ts" setup>
import { useTextareaAutosize, useVModel } from '@vueuse/core';
import { Ref, ref } from 'vue';

const props = defineProps<{
  modelValue?: string,
  placeholder?: string,
  multiline?: boolean,
  name?: string,
  required?: boolean
}>()
const emit = defineEmits([ "update:modelValue" ])
const model = useVModel(props, "modelValue", emit, { passive: true, defaultValue: "" })

const inputRef = ref<HTMLInputElement | HTMLTextAreaElement>()

if (props.multiline) {
  useTextareaAutosize({
    element: inputRef as Ref<HTMLTextAreaElement>,
    input: model
  })
}

</script>

<style lang="sass">
.v-input
  border: 1px solid var(--frame-color)
  border-radius: 8px
  
  input, textarea
    min-width: 50px
    width: 100%
    background: none
    border: none
    height: 44px
    padding: 0 16px
    box-sizing: border-box
    outline: none
    border-radius: 8px

    &::placeholder
      color: #969696

  textarea
    resize: none
    height: unset
    padding: 12px 16px
    line-height: 1.4em
    min-height: 110px
    max-height: 160px

</style>