<template>
	<DecorationContainer class="spacing-block" :class="cn({ size: props.size })">
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import { cn } from '../utils/propsToClass';

const props = defineBlock({
	id: 'spacingBlock',
	props: {
		size: { type: 'string', enum: ['small', 'default'], default: 'default' },
	},
});
</script>

<style lang="sass">
.spacing-block
  height: 100px

  &.size-small
    height: 64px

  &.size-large
    height: 128px
</style>
