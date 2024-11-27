<template>
	<DecorationContainer class="workflow-block" solid>
		<img src="../assets/workflow.png" alt="Workflow" width="1124" />
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

defineBlock({
	id: 'workflowBlock',
	props: {},
});
</script>

<style lang="css">
.workflow-block .decoration-container__inner img {
	position: relative;
	z-index: 2;
	max-width: 90vw;
	margin-top: -56px;
	margin-bottom: -6px;
	margin-left: -4px;
}

.workflow-block .decoration-container__solid-frame {
	display: none;
}
</style>
