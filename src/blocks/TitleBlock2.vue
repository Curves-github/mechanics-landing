<template>
	<DecorationContainer class="title-block-2" :blinds="props.blinds">
		<div class="content">
			<h2 class="title" :class="cn({ align: props.align })">
				<img v-if="props.icon" :src="icons[props.icon]" :alt="props.icon" class="icon" />{{
					props.title
				}}
			</h2>
			<div v-if="props.text" class="text">
				{{ props.text }}
			</div>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

const props = defineBlock({
	id: 'titleBlock2',
	name: 'Заголовок секции',
	props: {
		icon: { type: 'string??', enum: Object.keys(icons) },
		title: { type: 'string', multiline: true },
		text: { type: 'string', multiline: true },
		align: { type: 'string', enum: ['left', 'center', 'right'], default: 'left' },
		blinds: { type: 'boolean', default: false, title: 'Вертикальные линии' },
	},
});
</script>

<script lang="ts">
import objectIcon from '../assets/3d-object.svg';
import rotateIcon from '../assets/rotate.svg';
import { cn } from '../utils/propsToClass';

const icons: Record<string, string> = {
	object: objectIcon,
	rotate: rotateIcon,
};
</script>

<style lang="css">
.title-block-2 .content {
	position: relative;
	z-index: 3;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	min-height: 230px;
	padding: 44px;
}

.title-block-2 .icon {
	position: absolute;
	top: 0;
	top: 8px;
	left: -66px;
}

.title-block-2 .title {
	position: relative;
	margin: 0;
	font-size: 46px;
	letter-spacing: -0.06em;
	white-space: pre-wrap;
}

.title-block-2 .title.align-center {
	text-align: center;
}

.title-block-2 .title.align-right {
	text-align: end;
}

@media (width <= 1250px) {
	.title-block-2 .title {
		font-size: 40px;
		letter-spacing: -0.06em;
	}
}

@media (width <= 600px) {
	.title-block-2 .title {
		font-size: 32px;
		letter-spacing: -0.06em;
	}
}

.title-block-2 .text {
	max-width: 700px;
	margin-top: 16px;
	font-size: 18px;
	font-weight: 500;
	letter-spacing: -0.04em;
	white-space: pre-wrap;
}
</style>
