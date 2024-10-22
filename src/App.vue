<template>
  <div class="app">
    <AppHeader/>
    <RouterContent :state="props.state"/>
    <AppFooter/>
    <AppDialogBase/>
  </div>
</template>

<script lang="ts" setup>
import { RouterContent } from '@curves_digital/builder'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppDialogBase from './components/AppDialogBase.vue';

const props = defineProps<{ state?: any }>()

</script>

<style lang="sass">

    
</style>