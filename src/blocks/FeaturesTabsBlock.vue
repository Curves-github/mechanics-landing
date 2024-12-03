<template>
	<DecorationContainer class="features-tabs-block" solid>
		<div class="features-tabs__tabs-wrapper">
			<div ref="tabsRef" class="features-tabs-block__tabs">
				<VTabs v-model="currentTab" :items="props.tabs">
					<template #item="{ item }">
						<component v-if="item.icon" :is="featuresIcons[item.icon]" /> {{ item.name }}
					</template>
				</VTabs>
			</div>
		</div>
		<div class="features-tabs__column">
			<div class="title heading">{{ currentSlide.title }}</div>
			<div class="text">{{ currentSlide.text }}</div>
			<VButton @click="openForm">Запросить демо</VButton>
		</div>
		<div
			class="features-tabs__column image-column"
			:class="cn({ align: currentSlide.imageAlignment })">
			<Image
				v-if="currentSlide.image"
				:key="currentTab"
				:image="currentSlide.image"
				alt="Image Preview" />
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import { cn, Image } from '@curves_digital/builder';
import { useResizeObserver } from '@vueuse/core';
import { computed, CSSProperties, ref, watch } from 'vue';
import DecorationContainer from '../components/DecorationContainer.vue';
import SendRequestDialog from '../components/dialogs/SendRequestDialog.vue';
import VButton from '../components/VButton.vue';
import VTabs from '../components/VTabs.vue';
import { useDialogStore } from '../stores/dialogStore';
import { featuresIcons } from '../utils/icons';

const props = defineBlock({
	id: 'featuresTabs',
	group: 'Features',
	props: {
		tabs: {
			type: 'array',
			items: {
				icon: { type: 'string', enum: Object.keys(featuresIcons) },
				name: { type: 'string' },
				title: { type: 'string' },
				text: { type: 'string', multiline: true },
				image: { type: 'object', props: { previewSrc: 'string', src: 'string' }, format: 'image' },
				imageAlignment: { type: 'string?', enum: ['left', 'center'], default: 'center' },
			},
		},
	},
});

const currentTab = ref(0);
const tabsRef = ref<HTMLDivElement>();
const markerStyle = ref<CSSProperties>({ left: '0px', width: '100px', display: 'none' });

const currentSlide = computed(() => {
	return props.tabs[currentTab.value];
});

const updateMarkerStyle = () => {
	const activeTab = tabsRef.value?.querySelector<HTMLElement>('.active');
	if (!activeTab) return;
	markerStyle.value = { left: activeTab.offsetLeft + 'px', width: activeTab.offsetWidth + 'px' };
};

watch(currentTab, updateMarkerStyle, { flush: 'post' });

useResizeObserver(tabsRef, updateMarkerStyle);

const dialogStore = useDialogStore();
const openForm = () => {
	dialogStore.open(SendRequestDialog);
};
</script>

<style lang="css">
.features-tabs-block {
	height: 500px;
}

@media (width <= 870px) {
	.features-tabs-block {
		height: auto;
	}
}

.features-tabs-block .decoration-container__inner {
	display: flex;
}

@media (width <= 870px) {
	.features-tabs-block .decoration-container__inner {
		flex-direction: column-reverse;
	}
}

.features-tabs__column {
	box-sizing: border-box;
	display: flex;
	flex: 1 1 50%;
	flex-direction: column;
	gap: 20px;
	padding: 32px;
	border-left: 1px solid var(--frame-color);
}

@media (width <= 870px) {
	.features-tabs__column {
		padding: 20px;
	}
}

.features-tabs__column:first-child {
	border-left: none;
}

.features-tabs__column .title {
	font-size: 36px;
	white-space: pre-wrap;
}

.features-tabs__column .text {
	font-size: 16px;
	font-weight: 500;
	line-height: 1.4em;
	color: var(--text-secondary-color);
	letter-spacing: -0.04em;
	white-space: pre-wrap;
}

.features-tabs__column .v-button {
	align-self: flex-start;
}

.features-tabs__column.image-column {
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding: 0;
	background-image: url('../assets/grid-light.svg');
	background-position: center;
}

@media (width <= 870px) {
	.features-tabs__column.image-column {
		min-height: 80vw;
	}
}

.features-tabs__column.image-column img {
	z-index: 5;
	box-sizing: border-box;
	display: block;
	width: 100%;
	height: calc(100% + 1px);
	object-fit: cover;
	border: 1px solid var(--frame-color);
	border-left: none;
}

.features-tabs__column.image-column.align-left {
	justify-content: flex-start;
}

.features-tabs__tabs-wrapper {
	position: absolute;
	top: -90px;
	right: 0;
	left: 0;
	z-index: 5;
	display: flex;
	justify-content: center;
}

.features-tabs__tabs-wrapper .features-tabs-block__tabs {
	max-width: 100%;
}
</style>
