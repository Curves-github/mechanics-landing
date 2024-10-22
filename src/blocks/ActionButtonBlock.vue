<template>
  <DecorationContainer class="action-button-block">
    <VButton @click="openForm">Запросить демо</VButton>
  </DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import SendRequestDialog from '../components/dialogs/SendRequestDialog.vue';
import VButton from '../components/VButton.vue';
import { useDialogStore } from '../stores/dialogStore';

defineBlock({
  id: "actionButtonBlock",
  props: {}
})

const dialogStore = useDialogStore()
const openForm = () => {
  dialogStore.open(SendRequestDialog)
}

</script>

<style lang="sass">
.action-button-block
  height: 160px

  .decoration-container__inner
    padding-top: 40px
    display: flex
    flex-direction: column
    align-items: center

</style>