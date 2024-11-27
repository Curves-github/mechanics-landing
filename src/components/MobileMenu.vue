<template>
	<Transition>
		<div v-if="props.open" class="app-mobile-menu__overlay">
			<div class="app-mobile-menu" @click="mobileMenuClick">
				<a
					class="app-mobile-menu__link"
					v-for="item in settings.page.header?.links"
					:href="item.to">
					{{ item.title }}
				</a>
				<VButton class="cta-button" @click="openForm">Запросить демо</VButton>
			</div>
		</div>
	</Transition>
</template>

<script lang="ts" setup>
import { useSettings } from '../pageSettings';
import { useDialogStore } from '../stores/dialogStore';
import SendRequestDialog from './dialogs/SendRequestDialog.vue';
import VButton from './VButton.vue';

const props = defineProps<{ open?: boolean }>();
const emit = defineEmits(['update:open']);

const settings = useSettings();

const mobileMenuClick = (e: MouseEvent) => {
	if ((e.target as HTMLElement).tagName === 'BUTTON' || (e.target as HTMLElement).tagName === 'A') {
		emit('update:open', false);
	}
};

const dialogStore = useDialogStore();
const openForm = () => {
	dialogStore.open(SendRequestDialog);
};
</script>

<style lang="css">
.app-mobile-menu__overlay {
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 99;
	width: 100vw;
	background-color: rgb(0 0 0 / 50%);
}

.app-mobile-menu {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	width: 100%;
	min-height: 100%;
	padding: 0 12px;
	padding-top: 80px;
	padding-bottom: 40px;
	background-color: var(--background-color);
}

.app-mobile-menu .cta-button {
	margin-top: auto;
}

.app-mobile-menu__link {
	display: flex;
	align-items: center;
	height: 70px;
	font-size: 18px;
	font-weight: 600;
	color: var(--text-color);
	text-decoration: none;
	letter-spacing: -0.04em;
	border-bottom: 1px solid var(--frame-color);
}

.app-mobile-menu__overlay.v-enter-active,
.app-mobile-menu__overlay.v-leave-active {
	transition: background-color 0.225s;
}

.app-mobile-menu__overlay.v-enter-active .app-mobile-menu,
.app-mobile-menu__overlay.v-leave-active .app-mobile-menu {
	transition: transform 0.225s cubic-bezier(0.4, 0, 0.2, 1);
}

.app-mobile-menu__overlay.v-enter-from,
.app-mobile-menu__overlay.v-leave-to {
	background-color: transparent;
}

.app-mobile-menu__overlay.v-enter-from .app-mobile-menu,
.app-mobile-menu__overlay.v-leave-to .app-mobile-menu {
	transform: translate(100%, 0);
}
</style>
