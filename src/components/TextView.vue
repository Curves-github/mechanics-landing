<template>
	<TextEditorView :model-value="props.modelValue" :decorator="decorator" class="text-view">
		<template #h1="{ content, props }">
			<h1 v-bind="props"><component :is="content" /></h1>
		</template>
		<template #h2="{ content, props }">
			<h2 v-bind="props"><component :is="content" /></h2>
		</template>
		<template #h3="{ content, props }">
			<h3 v-bind="props"><component :is="content" /></h3>
		</template>
		<template #li="{ content, props }">
			<li v-bind="props"><component :is="content" /></li>
		</template>
		<template #callout="{ props, content }">
			<div v-bind="props" class="callout"><component :is="content" /></div>
		</template>
		<template #code="{ props, block }">
			<TextViewCode :model-value="block.text" v-bind="props" />
		</template>
		<template #default="{ props, content }">
			<p v-bind="props"><component :is="content" /></p>
		</template>
		<template #placeholder>
			<div class="rich-text-editor__placeholder" :contenteditable="false">Введите текст...</div>
		</template>
	</TextEditorView>
</template>

<script lang="ts" setup>
import { Style, TextEditorView } from 'vuewrite';
import TextViewCode from '../components/TextViewCode.vue';

const props = defineProps<{
	modelValue?: any;
}>();

const decorator = (style: Style) => {
	if (style.style === 'color') {
		return { style: `color: ${style.meta!.color};` };
	}
	if (style.style === 'bold') {
		return { tag: 'b', class: 'bold' };
	}
	if (style.style === 'underline' || style.style === 'italic' || style.style === 'code') {
		return { class: style.style };
	}
	if (style.style === 'link') {
		return { tag: 'a', href: style.meta.url, target: style.meta.blank ? '_blank' : undefined };
	}
};
</script>

<style lang="sass">
.text-view
  outline: none
  position: relative
  white-space: pre-wrap
  overflow-y: hidden
  font-size: 15px

  h1
    font-size: 32px
    letter-spacing: -0.06em

  h2
    font-size: 24px
    letter-spacing: -0.06em
    margin: 48px 0px
    margin-bottom: 16px

  &>p
    margin: 12px 0
    line-height: 1.5em

  &>li
    margin: 12px 0
    line-height: 1.5em

  .callout
    background-color: var(--callout-background-color)
    border: 1px solid var(--primary-color)
    border-radius: 8px
    padding: 20px
    color: var(--primary-color)
    line-height: 1.5em

  .bold
    font-weight: 700

  .italic
    font-style: italic

  .underline
    text-decoration: underline

  .code
    background-color: var(--blocks-color)
    padding: 2px 4px
    border-radius: 4px
    color: var(--primary-color)

  a
    color: var(--primary-color)
    font-weight: 500
    text-decoration: underline
    text-underline-offset: 2px
</style>
