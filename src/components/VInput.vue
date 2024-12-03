<template>
	<div class="v-input">
		<textarea
			ref="inputRef"
			v-if="props.multiline"
			v-model="model"
			:placeholder="placeholder"
			:name="name" />
		<input ref="inputRef" v-else v-model="model" :placeholder="placeholder" :name="name" />
	</div>
</template>

<script lang="ts" setup>
import { useTextareaAutosize, useVModel } from '@vueuse/core';
import { Ref, ref } from 'vue';

const props = defineProps<{
	modelValue?: string;
	placeholder?: string;
	multiline?: boolean;
	name?: string;
	required?: boolean;
}>();
const emit = defineEmits(['update:modelValue']);
const model = useVModel(props, 'modelValue', emit, { passive: true, defaultValue: '' });

const inputRef = ref<HTMLInputElement | HTMLTextAreaElement>();

if (props.multiline) {
	useTextareaAutosize({
		element: inputRef as Ref<HTMLTextAreaElement>,
		input: model,
	});
}
</script>

<style lang="css">
.v-input {
	border: 1px solid var(--frame-color);
	border-radius: 8px;
}

.v-input input,
.v-input textarea {
	box-sizing: border-box;
	width: 100%;
	min-width: 50px;
	height: 44px;
	padding: 0 16px;
	background: none;
	border: none;
	border-radius: 8px;
	outline: none;
}

.v-input input::placeholder,
.v-input textarea::placeholder {
	color: #969696;
}

.v-input textarea {
	height: unset;
	min-height: 110px;
	max-height: 160px;
	padding: 12px 16px;
	line-height: 1.4em;
	resize: none;
}
</style>
