<template>
	<DecorationContainer class="our-stack-block" solid>
		<div class="content">
			<div class="block-title heading">Стек, который любит Механика</div>
			<div class="out-stack-block__items">
				<div v-for="item in props.items" class="block">
					<img v-if="item.icon" :src="logos[item.icon]" :alt="item.icon" height="72" />
					<div class="title">{{ item.title }}</div>
				</div>
			</div>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

const props = defineBlock({
	id: 'ourStackBlock',
	props: {
		title: { type: 'string' },
		items: {
			type: 'array',
			items: {
				icon: { type: 'string', enum: Object.keys(logos) },
				title: 'string',
			},
		},
	},
});
</script>

<script lang="ts">
import typescriptSrc from '../assets/stack-logo/ts.png';
import viteSrc from '../assets/stack-logo/vite.png';
import vueSrc from '../assets/stack-logo/vue.png';

const logos: Record<string, string> = {
	ts: typescriptSrc,
	vue: vueSrc,
	vite: viteSrc,
};
</script>

<style lang="css">
.our-stack-block .decoration-container__inner {
	height: 220px;
}

@media (width <= 870px) {
	.our-stack-block .decoration-container__inner {
		height: auto;
	}
}

.our-stack-block .block-title {
	box-sizing: border-box;
	flex: 1 1 50px;
	padding: 32px;
	font-size: 32px;
}

.our-stack-block .content {
	display: flex;
	height: 100%;
}

@media (width <= 870px) {
	.our-stack-block .content {
		flex-direction: column;
	}
}

.out-stack-block__items {
	display: flex;
	flex: 2.25 50px;
}

.out-stack-block__items .block {
	box-sizing: border-box;
	display: flex;
	flex: 1 1 50px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 220px;
	color: var(--text-tertiary-color);
	letter-spacing: -0.04em;
	border-left: 1px solid var(--frame-color);
}

.out-stack-block__items .block img {
	margin-top: 32px;
	margin-bottom: 50px;
}

@media (width <= 870px) {
	.out-stack-block__items .block {
		height: 25vw;
		min-height: 120px;
		border-top: 1px solid var(--frame-color);
	}

	.out-stack-block__items .block img {
		max-height: 50px;
		margin-top: 0;
		margin-bottom: 20px;
	}
}
</style>
