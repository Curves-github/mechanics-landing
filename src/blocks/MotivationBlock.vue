<template>
  <DecorationContainer class="motivation-block" solid>
    <div class="content">
      <div class="title heading">
        <component :is="parsedContent" />
      </div>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import DecorationContainer from '../components/DecorationContainer.vue';
import { parseText } from '../utils/parser';

const props = defineBlock({
  id: "motivationBlock",
  props: {
    text: { type: "string", multiline: true }
  }
})

const parsedContent = () => parseText(props.text, {
  format: {
    "**": (str) => h("span", {}, str)
  }
})

</script>

<style lang="sass">
.motivation-block 
  height: 468px
  @media(max-width: 1250px)
    height: 38vw

  @media(max-width: 720px)
    height: auto

  .decoration-container__solid-frame
    background-image: url(../assets/grid.svg)
    border: none
    background-repeat: no-repeat
    background-size: contain

    @media(max-width: 720px)
      background-size: cover
      background-position: center
      border: 1px solid var(--frame-color)

  .content
    display: flex
    flex-direction: column
    position: relative
    z-index: 5
    gap: 48px
    justify-content: center
    height: 100%
    padding: 20px 12px

  .title
    font-size: 36px
    text-align: center
    color: var(--text-tertiary-color)
    letter-spacing: -0.06em

    span
      color: var(--text-color)

    @media(max-width: 720px)
      font-size: 24px
      letter-spacing: -0.06em

</style>