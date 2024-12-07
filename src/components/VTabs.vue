<template>
	<VScrollable ref="tabsRef" class="v-tabs">
		<TransitionGroup>
			<button
				v-for="(item, index) in props.items"
				:key="index"
				class="v-tabs__tab"
				:class="{ active: model === index }"
				@click="model = index">
				<slot name="item" :item="item">
					{{ item }}
				</slot>
			</button>
		</TransitionGroup>
		<div class="v-tabs__marker" :style="markerStyle"></div>
	</VScrollable>
</template>

<script lang="ts" setup generic="T">
import { useVModel } from '@vueuse/core';
import { CSSProperties, Ref, onMounted, ref, watch } from 'vue';
import type { VScrollableRef } from './VScrollable.vue';
import VScrollable from './VScrollable.vue';

const props = defineProps<{ items: T[]; modelValue?: number }>();
const emit = defineEmits(['update:modelValue']);

const model = useVModel(props, 'modelValue', emit, { passive: true }) as Ref<number>;

watch(
	() => props.items,
	(items) => {
		if ((model.value === undefined || model.value === null) && items.length > 0) {
			model.value = 0;
		}
	},
	{ immediate: true },
);

const tabsRef = ref<VScrollableRef>();
const markerStyle = ref<CSSProperties>({});

const placeMarker = () => {
	const index = model.value;
	if (!tabsRef.value) return;
	const child = tabsRef.value.contentRef.children[index] as HTMLElement;

	const p = 0;
	markerStyle.value = {
		left: child.offsetLeft + p + 'px',
		width: child.clientWidth - p * 2 + 'px',
	};

	for (let child of tabsRef.value.contentRef.children) {
		const item = child as HTMLElement;
		item.style.left = item.offsetLeft + 'px';
	}

	setTimeout(() => {
		tabsRef.value!.scrollTo(child.offsetLeft, child.offsetLeft + child.clientWidth + 60);
	}, 0);
};

onMounted(() => {
	placeMarker();
});
watch(
	() => props.items,
	() => {
		placeMarker();
	},
	{ deep: true, flush: 'post' },
);
// useResizeObserver(tabsRef, () => {
//   placeMarker()
// })

watch(model, placeMarker, { flush: 'post' });
</script>

<style lang="css">
.v-tabs {
	overflow: hidden;
	white-space: nowrap;
	border-bottom: 1px solid rgb(255 255 255 / 10%);
}

.v-tabs .v-scrollable__content {
	position: relative;
	display: flex;
	gap: 20px;
}

.v-tabs__tab {
	display: flex;
	gap: 8px;
	align-items: center;
	height: 44px;
	padding: 0;
	font-size: 16px;
	font-weight: 500;
	color: var(--text-tertiary-color);
	letter-spacing: -0.04em;
	cursor: pointer;
	background: none;
	border: none;
	transition: color 0.2s;
}

.v-tabs__tab.v-enter-active,
.v-tabs__tab.v-leave-active {
	transition:
		transform 0.225s cubic-bezier(0, 0, 0.2, 1),
		opacity 0.225s;
}

.v-tabs__tab.v-enter-from,
.v-tabs__tab.v-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}

.v-tabs__tab.v-leave-active {
	position: absolute;
}

.v-tabs__tab.active {
	color: var(--text-color);
}

.v-tabs__tab svg {
	flex-shrink: 0;
}

.v-tabs__marker {
	position: absolute;
	bottom: 0;
	height: 1px;
	background-color: var(--text-color);
	border-radius: 1px;
	transition:
		left 0.225s cubic-bezier(0.4, 0, 0.2, 1),
		width 0.225s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
