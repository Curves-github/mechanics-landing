<template>
  <DecorationContainer class="heading-block" markers>
    <div class="heading-block__column">
      <CurvesLabel />
      <div class="heading-block__content">
        <h1>{{ props.heading }}</h1>
        <div class="subheading">{{ props.subheading }}</div>
        <VButton @click="openForm">Запросить демо</VButton>
      </div>
    </div>
    <div class="heading-block__column heading-block__video-column">
      <video src="../assets/headingVideo.webm" muted autoplay loop playsinline></video>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import CurvesLabel from '../components/CurvesLabel.vue';
import DecorationContainer from '../components/DecorationContainer.vue'
import SendRequestDialog from '../components/dialogs/SendRequestDialog.vue';
import VButton from '../components/VButton.vue';
import { useDialogStore } from '../stores/dialogStore';

const props = defineBlock({
  id: "headingBlock",
  props: {
    heading: { type: "string", multiline: true },
    subheading: { type: "string", multiline: true },

  }
})

const dialogStore = useDialogStore()
const openForm = () => {
  dialogStore.open(SendRequestDialog)
}


</script>

<style lang="sass">
.heading-block
  height: 580px

  .decoration-container__inner
    display: flex

  @media(max-width: 1250px)
    height: 45vw

  @media(max-width: 870px)
    height: auto
    text-align: center
    .decoration-container__inner
      flex-direction: column

.heading-block__column
  border-left: 1px solid var(--frame-color)
  flex: 1 1 50%
  padding: 32px
  padding-top: 24px
  display: flex
  flex-direction: column
  align-items: flex-start
  box-sizing: border-box

  .curves-label
    color: var(--text-tertiary-color)
    margin-bottom: 12px

  &:first-child
    border: none

  @media(max-width: 870px)
    align-items: center

.heading-block__content
  margin: auto 0
  padding-bottom: 40px

  @media(max-width: 1250px)
    padding-bottom: 0
  
  h1
    white-space: pre-wrap
    font-size: 50px
    margin: 0
    line-height: 1.1em
    letter-spacing: -0.06em

    @media(max-width: 1250px)
      font-size: 36px
      line-height: 1.1em
      letter-spacing: -0.06em

  .subheading
    white-space: pre-wrap
    font-size: 18px
    letter-spacing: -0.04em
    font-weight: 500
    margin-top: 20px

    @media(max-width: 1250px)
      font-size: 16px
      letter-spacing: -0.06em
      margin-top: 16px

  .v-button
    margin-top: 32px

.heading-block__video-column
  padding: 0
  video
    width: 100%
    height: 100%
    object-fit: cover

    @media(max-width: 870px)
      max-width: 450px
      max-height: 450px
      margin: auto

</style>