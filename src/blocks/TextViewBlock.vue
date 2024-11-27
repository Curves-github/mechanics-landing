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

<style lang="sass">
.text-view-block
  width: 1120px
  margin: 0 auto
  max-width: 90vw
</style>
