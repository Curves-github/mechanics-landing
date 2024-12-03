<template>
	<DecorationContainer class="features-block" solid>
		<div v-for="featureGroup in props.features" class="features-block__item">
			<img
				v-if="featureGroup.icon"
				:src="icons[featureGroup.icon]"
				:alt="featureGroup.icon"
				height="56"
				class="icon" />
			<div class="title">
				{{ featureGroup.title }}
			</div>
			<div class="features-block__subitem-list">
				<div v-for="item in featureGroup.subitems" class="features-block__subitem">
					<img src="../assets/check.svg" alt="Check" width="20" />
					{{ item }}
				</div>
			</div>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import { icons } from '../utils/icons';

const props = defineBlock({
	id: 'featuresBlock',
	group: 'Features',
	props: {
		features: {
			type: 'array',
			items: {
				icon: { type: 'string?', enum: Object.keys(icons) },
				title: { type: 'string' },
				subitems: { type: 'array', items: 'string' },
			},
		},
	},
});
</script>

<style lang="css">
.features-block .decoration-container__inner {
	display: flex;
}

@media (width <= 870px) {
	.features-block .decoration-container__inner {
		flex-direction: column;
	}
}

.features-block__item {
	flex: 1 1 50px;
	padding: 32px;
	border-left: 1px solid #d8d8d8;
}

@media (width <= 870px) {
	.features-block__item {
		border-top: 1px solid #d8d8d8;
	}
}

.features-block__item:first-child {
	border-left: none;
}

.features-block__item .title {
	font-family: 'RF Dewi', sans-serif;
	font-size: 26px;
	font-weight: 500;
	letter-spacing: -0.06em;
}

.features-block__item > .icon {
	margin-bottom: 64px;
}

.features-block__subitem-list {
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-top: 30px;
}

.features-block__subitem {
	display: flex;
	gap: 6px;
	align-items: flex-start;
	font-size: 15px;
	font-weight: 500;
	letter-spacing: -0.04em;
}
</style>
