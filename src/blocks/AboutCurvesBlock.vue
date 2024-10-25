<template>
  <DecorationContainer class="about-curves-block" solid>
    <div class="about-curves-block__content">
      <CurvesLabel/>
      <div class="title">
        {{ props.text }}
      </div>
      <VButton component="a" :href="props.buttonHref" target="_blank">
        {{ props.buttonText }}<ArrowIcon/>
      </VButton>
      <img src="../assets/curves-frame.svg" alt="Curves-Frame" class="curves-frame"/>
      <img src="../assets/tripleten-preview.png" alt="Tripleten" class="tripleten-preview"/>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import CurvesLabel from '../components/CurvesLabel.vue';
import DecorationContainer from '../components/DecorationContainer.vue';
import ArrowIcon from '../components/icons/ArrowIcon.vue';
import VButton from '../components/VButton.vue';


const props = defineBlock({
  id: "aboutCurves",
  props: {
    text: { type: "string", multiline: true, default: "Мы разрабатываем и собираем лендинги на разных конструкторах сайтов много лет подряд" },
    buttonText: { type: "string", default: "Посмотреть кейсы" },
    buttonHref: { type: "string", default: "https://curvesdigital.ru/" }
  }
})

</script>

<style lang="sass">
.about-curves-block
  .decoration-container__inner
    border: none
    color: white
    height: 390px

    @media(max-width: 870px)
      height: auto

  .decoration-container__solid-frame
    border: none
    background-color: #171717
    top: 0

.about-curves-block__content
  display: flex
  position: relative
  z-index: 3
  height: 100%
  flex-direction: column
  padding: 32px
  gap: 12px
  box-sizing: border-box

  @media(max-width: 870px)
    padding-top: 400px
    text-align: center

  .curves-label
    opacity: 0.6
    @media(max-width: 870px)
      justify-content: center

  .title
    max-width: 60%
    font-size: 36px
    font-weight: 500
    font-family: "RF Dewi"
    letter-spacing: -0.06em
    white-space: pre-wrap

    @media(max-width: 870px)
      max-width: 100%

  .curves-frame
    position: absolute
    right: 0
    top: 0

    @media(max-width: 870px)
      left: 0
      right: auto

  .tripleten-preview
    position: absolute
    height: 240px
    right: 35px
    top: 75px

  @media(max-width: 870px)
    .curves-frame
      left: calc(50vw - 264px)
      right: auto
    .tripleten-preview
      left: calc(50vw - 230px)
      right: auto

  @media(max-width: 560px)
    .curves-frame
      top: 0
      left: 0
      width: 100%
      object-fit: contain

    .tripleten-preview
      top: calc(40vw - 135px)
      left: 7%
      width: 84%
      object-fit: contain

  .v-button
    align-self: flex-start
    background-color: white
    margin-top: auto
    color: var(--text-color)

    svg
      margin-right: -6px

    @media(max-width: 870px)
      margin-top: 24px
      align-self: center


</style>