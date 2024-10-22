<template>
  <div class="header__blob full-width">
    <header class="header">
      <RouterLink class="header__main-logo" to="/">
        <img src="../assets/main-logo.png" alt="Механика" width="141" />
      </RouterLink>
      <div class="header__links">
        <a class="app-link" v-for="item in settings.page.header?.links" :href="item.to">{{ item.title }}</a>
      </div>
      <VButton class="header__action-button" @click="openForm">Запросить демо</VButton>
    </header>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from '@curves_digital/builder';
import { useSettings } from '../pageSettings';
import VButton from './VButton.vue';
import { useDialogStore } from '../stores/dialogStore';
import SendRequestDialog from './dialogs/SendRequestDialog.vue';

const settings = useSettings()

const dialogStore = useDialogStore()
const openForm = () => {
  dialogStore.open(SendRequestDialog)
}

</script>

<style lang="sass">
.header__blob
  height: 70px

.header
  height: 70px
  position: fixed
  top: 0
  width: 100vw
  display: flex
  align-items: center
  padding: 0 60px
  border-radius: 0 0 8px 8px
  z-index: 100
  background-color: var(--background-color)
  box-sizing: border-box

  @media(max-width: 1080px)
    padding: 0 24px

.header__main-logo
  display: block
  img
    display: block

.header__title
  font-weight: 700
  position: absolute

.header__links
  display: flex
  align-items: center
  gap: 32px
  margin-left: 74px

  @media(max-width: 1080px)
    margin-left: 24px
    gap: 24px

  @media(max-width: 910px)
    gap: 16px

  @media(max-width: 870px)
    display: none
  
.header__action-button
  margin-left: auto
  font-size: 14px
  height: 40px
  padding: 0 20px

</style>