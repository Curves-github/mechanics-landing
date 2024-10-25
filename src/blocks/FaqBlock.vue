<template>
  <DecorationContainer markers class="qa-block">
    <div class="qa-block__column qa-block__title-block">
      <h3>{{ props.heading }}</h3>
      <div class="qa-block__more-info">
        <div>{{ props.moreText }}</div>
        <VButton v-if="props.link" :href="props.link" component="a" aria-label="Contact with developer">
          <ArrowIcon/>
        </VButton>
      </div>
    </div>
    <div class="qa-block__column">
      <VCollapse class="qa-block__item" v-for="item in props.items">
        <template #activator="{ props, open }">
          <button v-bind="props" class="qa-block__activator heading" :class="{ open }">
            {{ item.question }}
            <CollapseIcon />
          </button>
        </template>
        <div>{{ item.answer }}</div>
      </VCollapse>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import VButton from '../components/VButton.vue';
import VCollapse from '../components/VCollapse.vue'
import ArrowIcon from '../components/icons/ArrowIcon.vue';
import CollapseIcon from '../components/icons/CollapseIcon.vue';

const props = defineBlock({
  id: "faqBlock",
  name: "FAQ",
  order: 110,
  props: {
    heading: { type: "string", default: "Вопросы и ответы" },
    moreText: { type: "string", multiline: true },
    link: { type: "string?" },
    items: {
      type: "array",
      items: {
        question: { type: "string" },
        answer: { type: "string", multiline: true }
      }
    }
  }
})

</script>

<style lang="sass">

.qa-block
  .decoration-container__inner
    display: flex

    @media(max-width: 870px)
      flex-direction: column

.qa-block__column
  flex: 1 1 50px
  border-left: 1px solid var(--frame-color)
  box-sizing: border-box

  &:first-child
    border-left: none
  @media (max-width: 870px)
    border: none
.qa-block__title-block
  display: flex
  flex-direction: column
  h3
    font-size: 46px
    margin: 32px
    letter-spacing: -0.06em

    @media(max-width: 870px)
      font-size: 32px
      letter-spacing: -0.06em

.qa-block__more-info
  border-top: 1px solid var(--frame-color)
  height: 98px
  margin-top: auto
  display: flex
  align-items: center
  padding: 0 32px
  white-space: pre-wrap
  font-size: 16px

  .v-button
    background: white
    border: 1px solid var(--frame-color)
    color: var(--text-color)
    padding: 0
    width: 40px
    height: 40px
    margin-left: auto

.qa-block__item
  max-width: 100%
  white-space: pre-wrap
  border-top: 1px solid var(--frame-color)

  .v-collapse__content-inner
    font-size: 16px
    padding: 24px 32px
    color: #666666
    letter-spacing: -0.04em

  &:first-child
    border-top: none
    // border-bottom: 1px solid var(--text-secondary-color)
  
.qa-block__activator
  display: flex
  align-items: center
  font-size: 20px
  width: 100%
  text-align: start
  height: 98px
  background: none
  border: none
  padding: 0 32px
  transition: background-color 0.2s
  gap: 10px
  svg
    margin-left: auto
    transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)
    flex-shrink: 0

  &.open 
    background-color: white
    svg
      transform: rotate(45deg)

</style>