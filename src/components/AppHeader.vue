<template>
	<div class="header__blob full-width">
		<header class="header">
			<RouterLink class="header__main-logo" to="/">
				<img src="../assets/main-logo.webp" alt="Механика" width="35" />
				<img src="../assets//main-logo-text.svg" alt="Механика" srcset="" />
			</RouterLink>
			<div class="header__links">
				<a class="app-link" v-for="item in settings.page.header?.links" :href="item.to">{{
					item.title
				}}</a>
			</div>
			<VButton class="header__action-button" @click="openForm">Запросить демо</VButton>
			<BurgerButton :open="menuOpen" @click="menuOpen = !menuOpen" />
		</header>
		<MobileMenu v-model:open="menuOpen" />
	</div>
</template>

<script lang="ts" setup>
import { RouterLink } from '@curves_digital/builder';
import { ref, watch } from 'vue';
import { useSettings } from '../pageSettings';
import { useDialogStore } from '../stores/dialogStore';
import BurgerButton from './BurgerButton.vue';
import SendRequestDialog from './dialogs/SendRequestDialog.vue';
import MobileMenu from './MobileMenu.vue';
import VButton from './VButton.vue';

const settings = useSettings();

const dialogStore = useDialogStore();
const openForm = () => {
	dialogStore.open(SendRequestDialog);
};

const menuOpen = ref(false);
watch(menuOpen, () => {
	if (menuOpen.value) {
		document.body.classList.add('menu-opened');
		return;
	}
	document.body.classList.remove('menu-opened');
});
</script>

<style lang="css">
.header__blob {
	height: 70px;
}

.header {
	position: fixed;
	top: 0;
	z-index: 100;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	width: 100vw;
	height: 70px;
	padding: 0 60px;
	background-color: var(--background-color);
	border-radius: 0 0 8px 8px;
}

@media (width <= 1080px) {
	.header {
		padding: 0 24px;
	}
}

@media (width <= 870px) {
	.header {
		padding: 0 12px;
	}
}

.header .burger-button {
	display: none;
	margin-left: auto;
}

@media (width <= 870px) {
	.header .burger-button {
		display: block;
	}
}

.header__main-logo {
	display: flex;
	gap: 10px;
}

.header__main-logo img {
	display: block;
}

.header__title {
	position: absolute;
	font-weight: 700;
}

.header__links {
	display: flex;
	gap: 32px;
	align-items: center;
	margin-left: 74px;
}

@media (width <= 1080px) {
	.header__links {
		gap: 24px;
		margin-left: 24px;
	}
}

@media (width <= 910px) {
	.header__links {
		gap: 16px;
	}
}

@media (width <= 870px) {
	.header__links {
		display: none;
	}
}

.header__action-button {
	height: 40px;
	padding: 0 20px;
	margin-left: auto;
	font-size: 14px;
}

@media (width <= 870px) {
	.header__action-button {
		display: none;
	}
}
</style>
