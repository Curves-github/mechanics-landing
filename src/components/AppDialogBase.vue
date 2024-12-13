<template>
	<Transition>
		<Teleport v-if="dialogStore.length > 0" to="body">
			<div class="v-dialog-backdrop" @mousedown="onMouseDown" @mouseup="onMouseUp">
				<component
					v-for="(dialog, index) in dialogStore.dialogHistory"
					v-show="index === dialogStore.length - 1"
					:is="dialog.dialog"
					v-bind="dialog.props">
				</component>
			</div>
		</Teleport>
	</Transition>
</template>

<script lang="ts" setup>
import { watch } from 'vue';
import { useKeyDownLayer } from 'vuesix';
import { useDialogStore } from '../stores/dialogStore';

const dialogStore = useDialogStore();

let mouseDown = false;
const onMouseDown = (e: MouseEvent) => {
	mouseDown = e.target === e.currentTarget;
};
const onMouseUp = (e: MouseEvent) => {
	if (!mouseDown || e.target !== e.currentTarget) {
		mouseDown = false;
		return;
	}
	dialogStore.back();
};

if (!import.meta.env.SSR) {
	useKeyDownLayer(
		'Escape',
		() => dialogStore.length > 0,
		() => {
			dialogStore.back();
		},
	);
}

watch(
	() => dialogStore.length > 0,
	(value) => {
		if (value) {
			const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
			document.body.style.overflowY = 'hidden';
			document.body.style.paddingRight = scrollbarWidth + 'px';
			document.getElementById('app')?.setAttribute('inert', '');
		} else {
			document.body.style.paddingRight = '';
			document.body.style.overflowY = 'auto';
			document.getElementById('app')?.removeAttribute('inert');
		}
	},
);
</script>

<style lang="css">
.v-dialog-backdrop {
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: 900;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	background-color: rgb(0 0 0 / 75%);
}

.v-dialog-backdrop.v-enter-active,
.v-dialog-backdrop.v-leave-active {
	transition: opacity 0.22s ease;
}

.v-dialog-backdrop.v-enter-active .v-dialog,
.v-dialog-backdrop.v-leave-active .v-dialog {
	transition: transform 0.2s cubic-bezier(0, 0, 0.2, 1);
}

.v-dialog-backdrop.v-enter-from,
.v-dialog-backdrop.v-leave-to {
	opacity: 0;
}

.v-dialog-backdrop.v-enter-from .v-dialog,
.v-dialog-backdrop.v-leave-to .v-dialog {
	transform: scale(0.8);
}
</style>
