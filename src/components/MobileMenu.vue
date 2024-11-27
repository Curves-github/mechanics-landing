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

<style lang="sass">
.app-mobile-menu__overlay
  position: fixed
  top: 0
  bottom: 0
  width: 100vw
  z-index: 99
  background-color: rgba(0, 0, 0, 0.5)

.app-mobile-menu
  width: 100%
  min-height: 100%
  background-color: var(--background-color)
  display: flex
  flex-direction: column
  padding: 0 12px
  padding-top: 80px
  padding-bottom: 40px
  box-sizing: border-box

  .cta-button
    margin-top: auto

.app-mobile-menu__link
  height: 70px
  display: flex
  align-items: center
  font-weight: 600
  font-size: 18px
  text-decoration: none
  color: var(--text-color)
  letter-spacing: -0.04em
  border-bottom: 1px solid var(--frame-color)

.app-mobile-menu__overlay
  &.v-enter-active, &.v-leave-active
    transition: background-color 0.225s
    .app-mobile-menu
      transition: transform 0.225s cubic-bezier(0.4, 0, 0.2, 1)

  &.v-enter-from, &.v-leave-to
    background-color: transparent
    .app-mobile-menu
      transform: translate(100%, 0)
</style>
