<template>
	<DecorationContainer class="features-block-2" markers>
		<div class="features-block-2__column">
			<h2>{{ props.title }}</h2>
		</div>
		<div class="features-block-2__column">
			<div v-for="item in props.features" class="features-block-2__item">
				<img v-if="item.icon" :src="icons[item.icon]" :alt="item.icon" height="56" class="icon" />
				<div class="title">{{ item.title }}</div>
				<div class="text">{{ item.text }}</div>
			</div>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import { icons } from '../utils/icons';

const props = defineBlock({
	id: 'featuresBlock2',
	group: 'Features',
	props: {
		title: { type: 'string', multiline: true },
		features: {
			type: 'array',
			items: {
				icon: { type: 'string', enum: Object.keys(icons) },
				title: { type: 'string', multiline: true },
				text: { type: 'string', multiline: true },
			},
		},
	},
});
</script>

<style lang="css">
.features-block-2 .decoration-container__inner {
	display: flex;
}

@media (width <= 870px) {
	.features-block-2 .decoration-container__inner {
		flex-direction: column;
	}
}

.features-block-2__column {
	flex: 1 1 50px;
	border-left: 1px solid var(--frame-color);
}

.features-block-2__column:first-child {
	border-left: none;
}

.features-block-2__column h2 {
	margin: 32px;
	font-size: 46px;
	letter-spacing: -0.06em;
}

@media (width <= 950px) {
	.features-block-2__column h2 {
		font-size: 40px;
	}
}

@media (width <= 870px) {
	.features-block-2__column h2 {
		margin: 20px;
		font-size: 32px;
		letter-spacing: -0.06em;
	}
}

@media (width <= 870px) {
	.features-block-2__column {
		border: none;
	}
}

.features-block-2__item {
	padding: 32px;
	border-top: 1px solid var(--frame-color);
}

@media (width <= 870px) {
	.features-block-2__item {
		padding: 20px;
	}
}

.features-block-2__item:first-child {
	border-top: none;
}

.features-block-2__item .icon {
	margin-bottom: 38px;
}

.features-block-2__item .title {
	margin-bottom: 16px;
	font-family: 'RF Dewi', sans-serif;
	font-size: 26px;
	font-weight: 500;
	letter-spacing: -0.06em;
	white-space: pre-wrap;
}

.features-block-2__item .text {
	font-size: 16px;
	font-weight: 500;
	line-height: 1.1em;
	letter-spacing: -0.04em;
}
</style>
