<template>
	<TextView :model-value="props.content" class="text-view-block" />
</template>

<script lang="ts" setup>
import TextView from '../components/TextView.vue';

const props = defineBlock({
	id: 'newsContent',
	props: {
		content: { type: 'array', format: 'richtext' },
	},
});
</script>

<style lang="css">
.text-view-block {
	width: 1120px;
	max-width: 90vw;
	margin: 0 auto;
}
</style>
