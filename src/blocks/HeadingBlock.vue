<template>
	<DecorationContainer class="heading-block" markers>
		<div class="heading-block__column">
			<CurvesLabel />
			<div class="heading-block__content">
				<h1>{{ props.heading }}</h1>
				<div class="subheading">{{ props.subheading }}</div>
				<VButton @click="openForm">Запросить демо</VButton>
			</div>
		</div>
		<div class="heading-block__column heading-block__video-column">
			<video src="../assets/headingVideo.mp4" muted autoplay loop playsinline></video>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import CurvesLabel from '../components/CurvesLabel.vue';
import DecorationContainer from '../components/DecorationContainer.vue';
import SendRequestDialog from '../components/dialogs/SendRequestDialog.vue';
import VButton from '../components/VButton.vue';
import { useDialogStore } from '../stores/dialogStore';

const props = defineBlock({
	id: 'headingBlock',
	props: {
		heading: { type: 'string', multiline: true },
		subheading: { type: 'string', multiline: true },
	},
});

const dialogStore = useDialogStore();
const openForm = () => {
	dialogStore.open(SendRequestDialog);
};
</script>

<style lang="css">
.heading-block {
	height: 580px;
}

.heading-block .decoration-container__inner {
	display: flex;
}

@media (width <= 1250px) {
	.heading-block {
		height: 45vw;
	}
}

@media (width <= 870px) {
	.heading-block {
		height: auto;
		text-align: center;
	}

	.heading-block .decoration-container__inner {
		flex-direction: column;
	}
}

.heading-block__column {
	box-sizing: border-box;
	display: flex;
	flex: 1 1 50%;
	flex-direction: column;
	align-items: flex-start;
	padding: 32px;
	padding-top: 24px;
	border-left: 1px solid var(--frame-color);
}

.heading-block__column .curves-label {
	margin-bottom: 12px;
	color: var(--text-tertiary-color);
}

.heading-block__column:first-child {
	border: none;
}

@media (width <= 870px) {
	.heading-block__column {
		align-items: center;
		border: none;
	}
}

.heading-block__content {
	padding-bottom: 40px;
	margin: auto 0;
}

@media (width <= 1250px) {
	.heading-block__content {
		padding-bottom: 0;
	}
}

.heading-block__content h1 {
	margin: 0;
	font-size: 50px;
	line-height: 1.1em;
	letter-spacing: -0.06em;
	white-space: pre-wrap;
}

@media (width <= 1250px) {
	.heading-block__content h1 {
		font-size: 36px;
		line-height: 1.1em;
		letter-spacing: -0.06em;
	}
}

.heading-block__content .subheading {
	margin-top: 20px;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: -0.04em;
	white-space: pre-wrap;
}

@media (width <= 1250px) {
	.heading-block__content .subheading {
		margin-top: 16px;
		font-size: 16px;
		letter-spacing: -0.06em;
	}
}

.heading-block__content .v-button {
	margin-top: 32px;
}

.heading-block__video-column {
	padding: 0;
}

.heading-block__video-column video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

@media (width <= 870px) {
	.heading-block__video-column video {
		max-width: 450px;
		max-height: 450px;
		margin: auto;
	}
}
</style>
