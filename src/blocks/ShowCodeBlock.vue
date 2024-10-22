<template>
  <DecorationContainer solid class="show-code-block">
    <div class="content">
      <div class="heading">
        Этот сайт тоже [собран] <br/>на Механике
      </div>
      <VButton component="a" target="_blank" href="https://github.com/Curves-github/mechanics-landing">
        <CodeIcon/> Посмотреть код
      </VButton>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import CodeIcon from '../components/icons/CodeIcon.vue';
import VButton from '../components/VButton.vue';

defineBlock({
  id: "showCodeBlock"
})

</script>

<style lang="sass">
.show-code-block 
  .decoration-container__inner
    height: 280px

  .decoration-container__solid-frame
    background-color: white

  .content
    position: relative
    z-index: 3
    padding: 32px
    display: flex
    flex-direction: column
    height: 100%
    box-sizing: border-box

    .v-button
      margin-top: auto
      align-self: flex-start

  .heading
    font-size: 36px

</style>