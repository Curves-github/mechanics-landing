<template>
	<DecorationContainer class="about-curves-block" solid>
		<div class="about-curves-block__content">
			<CurvesLabel />
			<div class="title">
				{{ props.text }}
			</div>
			<VButton component="a" :href="props.buttonHref" target="_blank">
				{{ props.buttonText }}<ArrowIcon />
			</VButton>
			<img src="../assets/curves-frame.svg" alt="Curves-Frame" class="curves-frame" />
			<img src="../assets/tripleten-preview.png" alt="Tripleten" class="tripleten-preview" />
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import CurvesLabel from '../components/CurvesLabel.vue';
import DecorationContainer from '../components/DecorationContainer.vue';
import ArrowIcon from '../components/icons/ArrowIcon.vue';
import VButton from '../components/VButton.vue';

const props = defineBlock({
	id: 'aboutCurves',
	props: {
		text: {
			type: 'string',
			multiline: true,
			default:
				'Мы разрабатываем и собираем лендинги на разных конструкторах сайтов много лет подряд',
		},
		buttonText: { type: 'string', default: 'Посмотреть кейсы' },
		buttonHref: { type: 'string', default: 'https://curvesdigital.ru/' },
	},
});
</script>

<style lang="css">
.about-curves-block .decoration-container__inner {
	height: 390px;
	color: white;
	border: none;
}

@media (width <= 870px) {
	.about-curves-block .decoration-container__inner {
		height: auto;
	}
}

.about-curves-block .decoration-container__solid-frame {
	top: 0;
	background-color: #171717;
	border: none;
}

.about-curves-block__content {
	position: relative;
	z-index: 3;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 12px;
	height: 100%;
	padding: 32px;
}

@media (width <= 870px) {
	.about-curves-block__content {
		padding-top: 400px;
		text-align: center;
	}
}

.about-curves-block__content .curves-label {
	opacity: 0.6;
}

@media (width <= 870px) {
	.about-curves-block__content .curves-label {
		justify-content: center;
	}
}

.about-curves-block__content .title {
	max-width: 60%;
	font-family: 'RF Dewi', sans-serif;
	font-size: 36px;
	font-weight: 500;
	letter-spacing: -0.06em;
	white-space: pre-wrap;
}

@media (width <= 870px) {
	.about-curves-block__content .title {
		max-width: 100%;
	}
}

.about-curves-block__content .curves-frame {
	position: absolute;
	top: 0;
	right: 0;
}

@media (width <= 870px) {
	.about-curves-block__content .curves-frame {
		right: auto;
		left: 0;
	}
}

.about-curves-block__content .tripleten-preview {
	position: absolute;
	top: 75px;
	right: 35px;
	height: 240px;
}

@media (width <= 870px) {
	.about-curves-block__content .curves-frame {
		right: auto;
		left: calc(50vw - 264px);
	}

	.about-curves-block__content .tripleten-preview {
		right: auto;
		left: calc(50vw - 230px);
	}
}

@media (width <= 560px) {
	.about-curves-block__content .curves-frame {
		top: 0;
		left: 0;
		width: 100%;
		object-fit: contain;
	}

	.about-curves-block__content .tripleten-preview {
		top: calc(40vw - 135px);
		left: 7%;
		width: 84%;
		object-fit: contain;
	}
}

.about-curves-block__content .v-button {
	align-self: flex-start;
	margin-top: auto;
	color: var(--text-color);
	background-color: white;
}

.about-curves-block__content .v-button svg {
	margin-right: -6px;
}

@media (width <= 870px) {
	.about-curves-block__content .v-button {
		align-self: center;
		margin-top: 24px;
	}
}
</style>
