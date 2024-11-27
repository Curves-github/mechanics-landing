<template>
	<div class="app">
		<AppHeader />
		<RouterContent :state="props.state" />
		<AppFooter />
		<AppDialogBase />
	</div>
</template>

<script lang="ts" setup>
import { RouterContent } from '@curves_digital/builder';
import AppDialogBase from './components/AppDialogBase.vue';
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

const props = defineProps<{ state?: any }>();
</script>

<style lang="sass"></style>
