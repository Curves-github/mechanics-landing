<template>
  <div class="decoration-container" :class="{ solid: props.solid }">
    <div class="decoration-container__side-border"></div>
    <div class="decoration-container__inner" :class="{ solid: props.solid }">
      <slot></slot>
      <template v-if="props.markers">
        <div class="decoration-container__marker top-left"></div>
        <div class="decoration-container__marker top-right"></div>
        <div class="decoration-container__marker bottom-left"></div>
        <div class="decoration-container__marker bottom-right"></div>
      </template>
      <template v-else>
        <div class="decoration-container__marker-alt top-left"></div>
        <div class="decoration-container__marker-alt top-right"></div>
        <div class="decoration-container__marker-alt bottom-left"></div>
        <div class="decoration-container__marker-alt bottom-right"></div>
      </template>
      <div v-if="props.solid" class="decoration-container__solid-frame"></div>
      <div v-if="props.blinds" class="decoration-container__blinds">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="decoration-container__side-border"></div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps<{ markers?: boolean, solid?: boolean, blinds?: boolean }>()

</script>

<style lang="sass">

.decoration-container
  display: flex
  scroll-margin-top: 80px

.decoration-container__side-border
  flex: 1 1 50px
  border-top: 1px solid var(--frame-color)
  border-bottom: 1px solid var(--frame-color)
  box-sizing: border-box
  border-bottom: none

// Remove markers between two containers
.decoration-container + .decoration-container
  .decoration-container__marker-alt.top-left, .decoration-container__marker-alt.top-right
    display: none

.decoration-container.solid + .decoration-container
  .decoration-container__inner
    border-top: none

// Remove markers after header
.header__blob + .decoration-container
  .decoration-container__inner, .decoration-container__side-border
    border-top: none
  .decoration-container__marker-alt.top-left, .decoration-container__marker-alt.top-right
    display: none

.decoration-container__inner
  width: 1120px
  max-width: 90vw
  border: 1px solid var(--frame-color)
  margin: 0 auto
  height: 100%
  position: relative
  border-bottom: none
  box-sizing: border-box

  &.solid
    border: none

.decoration-container__marker, .decoration-container__marker-alt
  position: absolute
  width: 40px
  height: 40px
  background-color: var(--background-color)
  z-index: 1

  &.top-left
    top: -20px
    left: -20px

  &.top-right
    top: -20px
    right: -20px

  &.bottom-left
    bottom: -20px
    left: -20px

  &.bottom-right
    bottom: -20px
    right: -20px

.decoration-container__marker::after
  content: ""
  position: absolute
  top: 15px
  left: 15px
  border: 1px solid var(--frame-color)
  width: 10px
  height: 10px 
  box-sizing: border-box

.decoration-container__solid-frame
  z-index: 2
  border: 1px solid var(--frame-color)
  inset: 0
  bottom: -1px
  position: absolute
  pointer-events: none

.decoration-container__blinds
  display: flex
  position: absolute
  left: 0
  right: 0
  top: 20px
  bottom: 20px
  justify-content: space-evenly
  z-index: -1
  div
    border-right: 1px solid var(--frame-color)

</style>