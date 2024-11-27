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

<style lang="css">
.spacing-block {
	height: 100px;
}

.spacing-block.size-small {
	height: 64px;
}

.spacing-block.size-large {
	height: 128px;
}
</style>
