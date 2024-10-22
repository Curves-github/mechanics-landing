<template>
  <DecorationContainer class="request-demo-block">
    <img src="../assets/decoration-final.png" alt="Decoration" height="102"/>
    <div class="heading">Оставь запрос на полное демо</div>
    <div class="text">Конструктор создан разработчиками, которые понимают<br/>специфику создания маркентинговых сайтов</div>
    <VButton @click="openForm">Запросить демо</VButton>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import SendRequestDialog from '../components/dialogs/SendRequestDialog.vue';
import VButton from '../components/VButton.vue';
import { useDialogStore } from '../stores/dialogStore';


defineBlock({
  id: "requestDemoBlock",
  props: {

  }
})

const dialogStore = useDialogStore()
const openForm = () => {
  dialogStore.open(SendRequestDialog)
}

</script>

<style lang="sass">
.request-demo-block
  height: 630px
  background-image: url(../assets/final-background.png)
  background-size: cover
  background-position: center

  .decoration-container__inner
    border: none
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 32px
    text-align: center

  .heading
    font-size: 50px
    letter-spacing: -0.06em

    @media(max-width: 870px)
      font-size: 32px
      letter-spacing: -0.06em

  .text
    font-weight: 500
    font-size: 18px
    letter-spacing: -0.04em
    margin-top: -16px

    @media(max-width: 870px)
      font-size: 16px
      letter-spacing: -0.04em

</style>