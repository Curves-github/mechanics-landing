<template>
  <DecorationContainer class="our-stack-block" solid>
    <div class="content">
      <div class="block-title heading">
        Стек, который любит Механика
      </div>
      <div class="out-stack-block__items">
        <div v-for="item in props.items" class="block">
          <img v-if="item.icon" :src="logos[item.icon]" :alt="item.icon" height="72"/>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

const props = defineBlock({
  id: "ourStackBlock",
  props: {
    title: { type: "string" },
    items: {
      type: "array",
      items: {
        icon: { type: "string", enum: Object.keys(logos) },
        title: "string"
      }
    }
  }
})

</script>

<script lang="ts">
import typescriptSrc from '../assets/stack-logo/ts.png'
import vueSrc from '../assets/stack-logo/vue.png'
import viteSrc from '../assets/stack-logo/vite.png'

const logos: Record<string, string> = {
  ts: typescriptSrc,
  vue: vueSrc,
  vite: viteSrc
}

</script>

<style lang="sass">
.our-stack-block
  .decoration-container__inner
    height: 220px

    @media(max-width: 870px)
      height: auto

  .block-title
    font-size: 32px
    flex: 1 1 50px
    padding: 32px
    box-sizing: border-box

  .content
    display: flex
    height: 100%

    @media(max-width: 870px)
      flex-direction: column

.out-stack-block__items
  flex: 2.25 50px
  display: flex

  .block
    flex: 1 1 50px
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    border-left: 1px solid var(--frame-color)
    box-sizing: border-box
    color: var(--text-tertiary-color)
    letter-spacing: -0.04em
    height: 220px

    img
      margin-top: 32px
      margin-bottom: 50px

    @media(max-width: 870px)
      border-top: 1px solid var(--frame-color)
      height: 25vw
      min-height: 120px
      
      img
        max-height: 50px
        margin-top: 0
        margin-bottom: 20px


</style>