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
	id: 'actionButtonBlock',
	props: {},
});

const dialogStore = useDialogStore();

const openForm = () => {
	dialogStore.open(SendRequestDialog);
};
</script>

<style lang="css">
.action-button-block {
	height: 160px;
}

.action-button-block .decoration-container__inner {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 40px;
}
</style>
