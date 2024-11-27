<template>
	<DecorationContainer markers class="qa-block">
		<div class="qa-block__column qa-block__title-block">
			<h3>{{ props.heading }}</h3>
			<div class="qa-block__more-info">
				<div>{{ props.moreText }}</div>
				<VButton
					v-if="props.link"
					:href="props.link"
					component="a"
					aria-label="Contact with developer">
					<ArrowIcon />
				</VButton>
			</div>
		</div>
		<div class="qa-block__column">
			<VCollapse class="qa-block__item" v-for="item in props.items">
				<template #activator="{ props, open }">
					<button v-bind="props" class="qa-block__activator heading" :class="{ open }">
						{{ item.question }}
						<CollapseIcon />
					</button>
				</template>
				<div>{{ item.answer }}</div>
			</VCollapse>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import VButton from '../components/VButton.vue';
import VCollapse from '../components/VCollapse.vue';
import ArrowIcon from '../components/icons/ArrowIcon.vue';
import CollapseIcon from '../components/icons/CollapseIcon.vue';

const props = defineBlock({
	id: 'faqBlock',
	name: 'FAQ',
	order: 110,
	props: {
		heading: { type: 'string', default: 'Вопросы и ответы' },
		moreText: { type: 'string', multiline: true },
		link: { type: 'string?' },
		items: {
			type: 'array',
			items: {
				question: { type: 'string' },
				answer: { type: 'string', multiline: true },
			},
		},
	},
});
</script>

<style lang="css">
.qa-block .decoration-container__inner {
	display: flex;
}

@media (width <= 870px) {
	.qa-block .decoration-container__inner {
		flex-direction: column;
	}
}

.qa-block__column {
	box-sizing: border-box;
	flex: 1 1 50px;
	border-left: 1px solid var(--frame-color);
}

.qa-block__column:first-child {
	border-left: none;
}

@media (width <= 870px) {
	.qa-block__column {
		border: none;
	}
}

.qa-block__title-block {
	display: flex;
	flex-direction: column;
}

.qa-block__title-block h3 {
	margin: 32px;
	font-size: 46px;
	letter-spacing: -0.06em;
}

@media (width <= 870px) {
	.qa-block__title-block h3 {
		font-size: 32px;
		letter-spacing: -0.06em;
	}
}

.qa-block__more-info {
	display: flex;
	align-items: center;
	height: 98px;
	padding: 0 32px;
	margin-top: auto;
	font-size: 16px;
	white-space: pre-wrap;
	border-top: 1px solid var(--frame-color);
}

.qa-block__more-info .v-button {
	width: 40px;
	height: 40px;
	padding: 0;
	margin-left: auto;
	color: var(--text-color);
	background: white;
	border: 1px solid var(--frame-color);
}

.qa-block__item {
	max-width: 100%;
	white-space: pre-wrap;
	border-top: 1px solid var(--frame-color);
}

.qa-block__item .v-collapse__content-inner {
	padding: 24px 32px;
	font-size: 16px;
	color: #666;
	letter-spacing: -0.04em;
}

.qa-block__item:first-child {
	border-top: none;
}

.qa-block__activator {
	display: flex;
	gap: 10px;
	align-items: center;
	width: 100%;
	height: 98px;
	padding: 0 32px;
	font-size: 20px;
	text-align: start;
	background: none;
	border: none;
	transition: background-color 0.2s;
}

.qa-block__activator svg {
	flex-shrink: 0;
	margin-left: auto;
	transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

.qa-block__activator.open {
	background-color: white;
}

.qa-block__activator.open svg {
	transform: rotate(45deg);
}
</style>
