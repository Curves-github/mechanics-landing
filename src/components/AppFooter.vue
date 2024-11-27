<template>
	<footer class="app-footer">
		<RouterLink to="/">
			<img src="../assets/footer-logo.svg" alt="Mechanics" />
		</RouterLink>
		<div class="app-footer__links">
			<a class="app-link" v-for="item in settings.page.header?.links" :href="item.to">{{
				item.title
			}}</a>
			<a class="app-link flex-link" target="_blank" href="https://curvesdigital.ru">
				О Кёрвс
				<ExternalLinkIcon />
			</a>
		</div>
		<div class="policy-info">
			<RouterLink class="app-link" to="/privacy-policy">Политика конфиденциальности</RouterLink>
			<a class="app-link" href="#">Условия и положения</a>
		</div>
	</footer>
</template>

<script lang="ts" setup>
import { RouterLink } from '@curves_digital/builder';
import { useSettings } from '../pageSettings';
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue';

const settings = useSettings();
</script>

<style lang="css">
.app-footer {
	box-sizing: border-box;
	display: flex;
	gap: 40px;
	align-items: center;
	height: 80px;
	padding: 0 16px;
	margin: 12px;
	background-color: white;
	border-radius: 4px;
}

@media (width <= 1260px) {
	.app-footer {
		flex-direction: column;
		align-items: flex-start;
		height: auto;
		padding: 16px;
	}
}

.app-footer__links {
	display: flex;
	gap: 32px;
}

.app-footer__links a {
	color: var(--text-color);
}

@media (width <= 1260px) {
	.app-footer__links {
		flex-wrap: wrap;
	}
}

.policy-info {
	display: flex;
	gap: 20px;
	margin-left: auto;
}

@media (width <= 1260px) {
	.policy-info {
		margin: 0;
	}
}
</style>
