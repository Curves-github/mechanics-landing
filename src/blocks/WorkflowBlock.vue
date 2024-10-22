<template>
  <DecorationContainer class="workflow-block" solid>
    <img src="../assets/workflow.png" alt="Workflow" width="1124"/>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

defineBlock({
  id: "workflowBlock",
  props: {}
})

</script>

<style lang="sass">
.workflow-block 
  .decoration-container__inner
    img
      margin-left: -4px
      margin-top: -56px
      margin-bottom: -6px
      max-width: 90vw
  .decoration-container__solid-frame
    display: none
</style>