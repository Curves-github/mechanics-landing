<template>
	<DecorationContainer class="motivation-block" solid>
		<div class="content">
			<div class="title heading">
				<component :is="parsedContent" />
			</div>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import { h } from 'vue';
import DecorationContainer from '../components/DecorationContainer.vue';
import { parseText } from '../utils/parser';

const props = defineBlock({
	id: 'motivationBlock',
	props: {
		text: { type: 'string', multiline: true },
	},
});

const parsedContent = () =>
	parseText(props.text, {
		format: {
			'**': (str) => h('span', {}, str),
		},
	});
</script>

<style lang="css">
.motivation-block {
	height: 468px;
}

@media (width <= 1250px) {
	.motivation-block {
		height: 38vw;
	}
}

@media (width <= 720px) {
	.motivation-block {
		height: auto;
	}
}

.motivation-block .decoration-container__solid-frame {
	background-image: url('../assets/grid.svg');
	background-repeat: no-repeat;
	background-size: contain;
	border: none;
}

@media (width <= 720px) {
	.motivation-block .decoration-container__solid-frame {
		background-position: center;
		background-size: cover;
		border: 1px solid var(--frame-color);
	}
}

.motivation-block .content {
	position: relative;
	z-index: 5;
	display: flex;
	flex-direction: column;
	gap: 48px;
	justify-content: center;
	height: 100%;
	padding: 20px 12px;
}

.motivation-block .title {
	font-size: 36px;
	color: var(--text-tertiary-color);
	text-align: center;
	letter-spacing: -0.06em;
}

.motivation-block .title span {
	color: var(--text-color);
}

@media (width <= 720px) {
	.motivation-block .title {
		font-size: 24px;
		letter-spacing: -0.06em;
	}
}
</style>
