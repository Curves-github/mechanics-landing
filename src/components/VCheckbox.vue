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

<style lang="sass">

.v-checkbox
  display: flex
  align-items: flex-start
  cursor: pointer
  gap: 10px

  .v-checkbox__label
    color: #969696
    font-size: 13px

    a
      color: #969696
      text-decoration: underline

    &.left
      margin-left: 0

  &.active
    .v-checkbox__icon
      color: white
      background-color: var(--button-color)
      border-color: var(--button-color)

      svg
        opacity: 1

      &:hover
        background-color: var(--button-hover-color)

      &:active
        background-color: var(--button-pressed-color)

.v-checkbox__icon
  width: 16px
  height: 16px
  border: 1px solid #CCCCCC
  border-radius: 4px
  display: flex
  align-items: center
  justify-content: center
  transition: background-color 0.1s

  &:hover
    border-color: #999999

  &:active
    border-color: #777777

  @media(max-width: 800px)
    margin-top: 0

  svg
    width: 18px
    height: 18px
    opacity: 0
</style>
