<template>
	<div class="docs-layout">
		<aside class="docs-layout__sidebar">
			<RouterLink
				v-for="item in docsList"
				:to="item.url"
				class="app-link"
				:class="{ active: docsCollection.currentItem?.id === item.id }">
				{{ item.name }}
			</RouterLink>
		</aside>
		<div>
			<TextView :model-value="props.content" class="docs-layout__content" />
			<div class="docs-layout__next-page-links">
				<RouterLink
					v-if="nextAndLastPages.last"
					:to="nextAndLastPages.last.url"
					class="docs-layout__next-page">
					<div class="subtitle">Предыдущая страница</div>
					<div class="title">{{ nextAndLastPages.last.name }}</div>
				</RouterLink>
				<div v-else class="docs-layout__next-page hidden"></div>

				<RouterLink
					v-if="nextAndLastPages.next"
					:to="nextAndLastPages.next.url"
					class="docs-layout__next-page">
					<div class="subtitle">Следующая страница</div>
					<div class="title">{{ nextAndLastPages.next.name }}</div>
				</RouterLink>
				<div v-else class="docs-layout__next-page hidden"></div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { RouterLink } from '@curves_digital/builder';
import { computed } from 'vue';
import { useDocs } from '../collections/docs';
import TextView from '../components/TextView.vue';

const docsCollection = useDocs();
const docsList = docsCollection.getAll();

const props = defineBlock({
	id: 'docsLayout',
	props: {
		content: { type: 'array', format: 'richtext' },
	},
});

const nextAndLastPages = computed(() => {
	const currentItem = docsCollection.currentItem;
	if (!currentItem) return { last: null, next: null };
	let index = docsList.findIndex((item) => item.id === currentItem.id);
	return { last: docsList[index - 1] ?? null, next: docsList[index + 1] ?? null };
});
</script>

<style lang="css">
.docs-layout {
	display: flex;
	min-height: calc(100vh - 174px);
}

.docs-layout__sidebar {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	gap: 16px;
	width: calc(50vw - 480px);
	min-width: 240px;
	padding: 24px 0;
	padding-left: max(24px, calc(50vw - 700px));
	background-color: var(--blocks-color);
}

.docs-layout__sidebar a {
	width: fit-content;
	font-size: 15px;
}

.docs-layout__sidebar a.active {
	color: var(--text-color);
}

.docs-layout__content {
	box-sizing: border-box;
	width: 960px;
	padding: 0 80px;
}

.docs-layout__next-page-links {
	display: flex;
	gap: 20px;
	padding-top: 24px;
	padding-bottom: 60px;
	margin: 0 80px;
	border-top: 1px solid var(--frame-color);
}

.docs-layout__next-page {
	display: flex;
	flex: 1 1 50px;
	flex-direction: column;
	gap: 4px;
	padding: 12px 20px;
	text-decoration: none;
	border: 1px solid var(--frame-color);
	border-radius: 8px;
}

.docs-layout__next-page:last-child {
	text-align: right;
}

.docs-layout__next-page:hover {
	border-color: var(--text-tertiary-color);
}

.docs-layout__next-page .subtitle {
	font-size: 13px;
	color: var(--text-tertiary-color);
}

.docs-layout__next-page .title {
	font-size: 14px;
	font-weight: 500;
	color: var(--text-color);
}

.docs-layout__next-page.hidden {
	visibility: hidden;
}
</style>
