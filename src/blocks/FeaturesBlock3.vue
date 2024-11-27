<template>
	<DecorationContainer class="features-block-3" solid>
		<div class="content">
			<div v-for="item in props.features" class="features-block-3__item">
				<div class="title">
					<img v-if="item.icon" :src="icons[item.icon]" width="24" :alt="item.icon" />
					{{ item.title }}
				</div>
				<div class="text">{{ item.text }}</div>
			</div>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

const props = defineBlock({
	id: 'featuresBlock3',
	group: 'Features',
	props: {
		features: {
			type: 'array',
			items: {
				icon: { type: 'string?', enum: Object.keys(icons) },
				title: { type: 'string' },
				text: { type: 'string', multiline: true },
			},
		},
	},
});
</script>

<script lang="ts">
const _icons = import.meta.glob('../assets/features-2/*.svg', {
	eager: true,
	import: 'default',
	exhaustive: true,
});

const icons = Object.fromEntries(
	Object.entries(_icons).map(([key, value]) => [
		key.slice(key.lastIndexOf('/') + 1, -4),
		value as string,
	]),
);
</script>

<style lang="css">
.features-block-3 .content {
	position: relative;
	z-index: 3;
	display: flex;
	flex-wrap: wrap;
	height: 100%;
}

@media (width <= 870px) {
	.features-block-3 .content {
		flex-direction: column;
	}
}

.features-block-3__item {
	box-sizing: border-box;
	display: flex;
	flex: 1 1 30%;
	flex-direction: column;
	justify-content: center;
	height: 232px;
	padding: 0 30px;
	font-size: 16px;
	color: #666;
	letter-spacing: -0.04em;
	white-space: pre-wrap;
	border-top: 1px solid var(--frame-color);
	border-left: 1px solid var(--frame-color);
}

.features-block-3__item .title {
	margin-bottom: 12px;
	font-size: 17px;
	font-weight: 500;
	color: var(--text-color);
	letter-spacing: -0.04em;
}

.features-block-3__item .title img {
	margin-bottom: -2px;
	vertical-align: bottom;
}

@media (width <= 870px) {
	.features-block-3__item {
		height: auto;
		padding: 24px 16px;
		padding-top: 60px;
	}
}
</style>
