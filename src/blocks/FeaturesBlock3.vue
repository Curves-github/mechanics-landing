<template>
  <DecorationContainer class="features-block-3" solid>
    <div class="content">
      <div v-for="item in props.features" class="features-block-3__item">
        <div class="title">
          <img v-if="item.icon" :src="icons[item.icon]" width="24" :alt="item.icon"/>
          {{ item.title }}
        </div>
        <div class="text">{{ item.text }}</div>
      </div>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

const props = defineBlock({
  id: "featuresBlock3",
  group: "Features",
  props: {
    features: {
      type: "array",
      items: {
        icon: { type: "string?", enum: Object.keys(icons) },
        title: { type: "string" },
        text: { type: "string", multiline: true }
      }
    }
  }
})

</script>

<script lang="ts">

const _icons = import.meta.glob("../assets/features-2/*.svg", { eager: true, import: 'default', exhaustive: true })

const icons = Object.fromEntries(Object.entries(_icons).map(([ key, value ]) => [ key.slice(key.lastIndexOf("/")+1, -4), value as string ]))

</script>

<style lang="sass">
.features-block-3
  .content
    height: 100%
    position: relative
    z-index: 3
    display: flex
    flex-wrap: wrap

    @media(max-width: 870px)
      flex-direction: column

.features-block-3__item
  flex: 1 1 30%
  border-left: 1px solid var(--frame-color)
  border-top: 1px solid var(--frame-color)
  padding: 0 30px
  height: 232px
  display: flex
  flex-direction: column
  justify-content: center
  box-sizing: border-box
  font-size: 16px
  letter-spacing: -0.04em
  color: #666666
  white-space: pre-wrap

  .title
    font-weight: 500
    font-size: 17px
    letter-spacing: -0.04em
    color: var(--text-color)
    margin-bottom: 12px

    img
      vertical-align: bottom
      margin-bottom: -2px

  @media(max-width: 870px)
    padding: 24px 16px 
    height: auto
    padding-top: 60px

</style>