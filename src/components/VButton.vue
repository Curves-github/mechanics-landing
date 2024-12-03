<template>
	<component
		:is="component ?? 'button'"
		class="v-button"
		:class="{ disabled, flat, outline, large }">
		<slot></slot>
	</component>
</template>

<script lang="ts" setup>
defineProps<{
	component?: string;
	disabled?: boolean;
	flat?: boolean;
	outline?: boolean;
	large?: boolean;
}>();
</script>

<style lang="css">
.v-button {
	display: flex;
	display: inline-flex;
	flex-shrink: 0;
	gap: 6px;
	align-items: center;
	justify-content: center;
	height: 44px;
	padding: 0 28px;
	padding-bottom: 2px;
	font-family: 'RF Dewi', sans-serif;
	font-size: 16px;
	font-weight: 600;
	color: white;
	text-decoration: none;
	letter-spacing: -0.04em;
	background-color: var(--button-color);
	border: none;
	border-radius: 22px;
}

.v-button:hover {
	background-color: var(--button-hover-color);
}

.v-button:active {
	background-color: var(--button-pressed-color);
}

.v-button.disabled {
	pointer-events: none;
	opacity: 0.5;
}

.v-button:focus-visible {
	box-shadow: 0 0 0 4px rgb(13 110 253 / 25%);
}

.v-button.color-red.outline {
	color: var(--error-color);
	border-color: var(--error-color);
}

a.v-button {
	text-decoration: none;
}
</style>
