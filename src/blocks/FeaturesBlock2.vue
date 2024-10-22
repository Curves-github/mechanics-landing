<template>
  <DecorationContainer class="features-block-2" markers>
    <div class="features-block-2__column">
      <h2>{{ props.title }}</h2>
    </div>
    <div class="features-block-2__column">
      <div v-for="item in props.features" class="features-block-2__item">
        <img v-if="item.icon" :src="icons[item.icon]" :alt="item.icon" height="56" class="icon"/>
        <div class="title">{{ item.title }}</div>
        <div class="text">{{ item.text }}</div>
      </div>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import { icons } from '../utils/icons';

const props = defineBlock({
  id: "featuresBlock2",
  group: "Features",
  props: {
    title: { type: "string", multiline: true },
    features: {
      type: "array",
      items: {
        icon: { type: "string", enum: Object.keys(icons) },
        title: { type: "string", multiline: true },
        text: { type: "string", multiline: true }
      }
    }
  }
})

</script>

<style lang="sass">
.features-block-2 .decoration-container__inner
  display: flex

  @media(max-width: 870px)
    flex-direction: column

.features-block-2__column
  flex: 1 1 50px
  border-left: 1px solid var(--frame-color)

  &:first-child
    border-left: none

  h2
    font-size: 46px
    margin: 32px
    letter-spacing: -0.06em

    @media(max-width: 950px)
      font-size: 40px

    @media(max-width: 870px)
      font-size: 32px
      letter-spacing: -0.06em
      margin: 20px

.features-block-2__item
  padding: 32px
  border-top: 1px solid var(--frame-color)

  @media(max-width: 870px)
    padding: 20px

  &:first-child
    border-top: none

  .icon
    margin-bottom: 38px

  .title
    font-size: 26px
    font-weight: 600
    font-family: "RF Dewi"
    letter-spacing: -0.06em
    white-space: pre-wrap
    margin-bottom: 16px

  .text
    font-weight: 500
    font-size: 16px
    letter-spacing: -0.04em
    line-height: 1.1em

</style>