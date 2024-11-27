<template>
	<div class="v-checkbox" :class="{ active: model }" role="checkbox" @click="onClick">
		<div v-if="labelPosition === 'left'" class="v-checkbox__label left">
			<slot name="label">{{ props.label }}</slot>
		</div>
		<div class="v-checkbox__icon">
			<CheckIcon />
		</div>
		<div v-if="labelPosition === 'right'" class="v-checkbox__label">
			<slot name="label">{{ props.label }}</slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useVModel } from '@vueuse/core';
import { computed, useSlots } from 'vue';
import CheckIcon from './icons/CheckIcon.vue';

const props = defineProps<{
	modelValue?: boolean;
	label?: string;
	labelPosition?: 'left' | 'right';
}>();
const emit = defineEmits(['update:modelValue']);

const model = useVModel(props, 'modelValue', emit, { passive: true });

const onClick = (e: MouseEvent) => {
	if ((e.target as HTMLElement).tagName === 'A') return;
	model.value = !model.value;
};

const slots = useSlots();
const labelPosition = computed(() => {
	if (!props.label && !slots.label) return 'none';
	if (props.labelPosition === 'left') return 'left';
	return 'right';
});
</script>

<style lang="css">
.v-checkbox {
	display: flex;
	gap: 10px;
	align-items: flex-start;
	cursor: pointer;
}

.v-checkbox__icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 16px;
	height: 16px;
	border: 1px solid #ccc;
	border-radius: 4px;
	transition: background-color 0.1s;
}

.v-checkbox__icon svg {
	width: 18px;
	height: 18px;
	opacity: 0;
}

.v-checkbox__icon:hover {
	border-color: #999;
}

.v-checkbox__icon:active {
	border-color: #777;
}

.v-checkbox .v-checkbox__label {
	font-size: 13px;
	color: #969696;
}

.v-checkbox .v-checkbox__label a {
	color: #969696;
	text-decoration: underline;
}

.v-checkbox .v-checkbox__label.left {
	margin-left: 0;
}

.v-checkbox.active .v-checkbox__icon {
	color: white;
	background-color: var(--button-color);
	border-color: var(--button-color);
}

.v-checkbox.active .v-checkbox__icon svg {
	opacity: 1;
}

.v-checkbox.active .v-checkbox__icon:hover {
	background-color: var(--button-hover-color);
}

.v-checkbox.active .v-checkbox__icon:active {
	background-color: var(--button-pressed-color);
}

@media (width <= 800px) {
	.v-checkbox__icon {
		margin-top: 0;
	}
}
</style>
