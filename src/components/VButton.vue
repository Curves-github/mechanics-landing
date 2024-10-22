<template>
  <component :is="component ?? 'button'" class="v-button" :class="{ disabled, flat, outline, large }">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>

defineProps<{ 
  component?: string,
  disabled?: boolean, 
  flat?: boolean, 
  outline?: boolean, 
  large?: boolean
}>()

</script>

<style lang="sass">

.v-button
  background-color: var(--button-color)
  height: 44px
  color: white
  font-weight: 600
  font-family: "RF Dewi"
  border-radius: 22px
  font-size: 16px
  padding: 0 28px
  text-decoration: none
  display: flex
  justify-content: center
  align-items: center
  border: none
  gap: 6px
  display: inline-flex
  letter-spacing: -0.04em
  padding-bottom: 2px
  flex-shrink: 0

  &:hover
    background-color: var(--button-hover-color)
    
  &:active 
    background-color: var(--button-pressed-color)

  &.disabled
    opacity: 0.5
    pointer-events: none

  &:focus-visible
    box-shadow: 0 0 0 4px #0D6EFD40
  
  &.color-red.outline
    border-color: var(--error-color)
    color: var(--error-color)

a.v-button
  text-decoration: none

</style>