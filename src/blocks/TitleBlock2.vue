<template>
  <DecorationContainer class="title-block-2" :blinds="props.blinds">
    <div class="content">
      <h2 class="title" :class="cn({ align: props.align })">
        <img v-if="props.icon" :src="icons[props.icon]" :alt="props.icon" class="icon"/>
        {{ props.title }}
      </h2>
      <div v-if="props.text" class="text">
        {{ props.text }}
      </div>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

const props = defineBlock({
  id: "titleBlock2",
  name: "Заголовок секции",
  props: {
    icon: { type: "string??", enum: Object.keys(icons) },
    title: { type: "string", multiline: true },
    text: { type: "string", multiline: true },
    align: { type: "string", enum: [ "left", "center", "right" ], default: "left" },
    blinds: { type: "boolean", default: false, title: "Вертикальные линии" }
  }
})

</script>

<script lang="ts">
import objectIcon from '../assets/3d-object.svg'
import rotateIcon from '../assets/rotate.svg'
import { cn } from '../utils/propsToClass';

const icons: Record<string, string> = {
  "object": objectIcon,
  "rotate": rotateIcon,
}

</script>

<style lang="sass">
.title-block-2
  .content
    min-height: 230px
    position: relative
    height: 100%
    z-index: 3
    padding: 44px
    box-sizing: border-box
    display: flex
    flex-direction: column
    box-sizing: border-box
    justify-content: center

  .icon
    position: absolute
    left: -66px
    top: 0
    top: 8px

  .title
    font-size: 46px
    letter-spacing: -0.06em
    white-space: pre-wrap
    position: relative
    margin: 0

    &.align-center
      text-align: center

    &.align-right
      text-align: end

    @media(max-width: 1250px)
      font-size: 40px
      letter-spacing: -0.06em

    @media(max-width: 600px)
      font-size: 32px
      letter-spacing: -0.06em

  .text
    font-weight: 500
    font-size: 18px
    letter-spacing: -0.04em
    margin-top: 16px
    white-space: pre-wrap
    max-width: 700px
</style>