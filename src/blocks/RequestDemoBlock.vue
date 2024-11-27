<template>
	<DecorationContainer class="request-demo-block">
		<img src="../assets/decoration-final.png" alt="Decoration" height="102" />
		<div class="heading">Оставь запрос на полное демо</div>
		<div class="text">
			Конструктор создан разработчиками, которые понимают<br />специфику создания маркентинговых
			сайтов
		</div>
		<VButton @click="openForm">Запросить демо</VButton>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import SendRequestDialog from '../components/dialogs/SendRequestDialog.vue';
import VButton from '../components/VButton.vue';
import { useDialogStore } from '../stores/dialogStore';

defineBlock({
	id: 'requestDemoBlock',
	props: {},
});

const dialogStore = useDialogStore();
const openForm = () => {
	dialogStore.open(SendRequestDialog);
};
</script>

<style lang="css">
.request-demo-block {
	height: 630px;
	background-image: url('../assets/final-background.png');
	background-position: center;
	background-size: cover;
}

.request-demo-block .decoration-container__inner {
	display: flex;
	flex-direction: column;
	gap: 32px;
	align-items: center;
	justify-content: center;
	text-align: center;
	border: none;
}

.request-demo-block .heading {
	font-size: 50px;
	letter-spacing: -0.06em;
}

@media (width <= 870px) {
	.request-demo-block .heading {
		font-size: 32px;
		letter-spacing: -0.06em;
	}
}

.request-demo-block .text {
	margin-top: -16px;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: -0.04em;
}

@media (width <= 870px) {
	.request-demo-block .text {
		font-size: 16px;
		letter-spacing: -0.04em;
	}
}
</style>
