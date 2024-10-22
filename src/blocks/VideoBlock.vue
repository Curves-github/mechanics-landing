<template>
  <DecorationContainer class="video-block" solid>
    <div class="content">
      <img src="../assets/play.png" alt="Play" height="56"/>
    </div>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

defineBlock({
  id: "videoBlock",
  props: {}
})

</script>

<style lang="sass">
.video-block
  height: 560px
  
  .content
    background-color: white
    height: 100%
    display: flex
    align-items: center
    justify-content: center

</style>