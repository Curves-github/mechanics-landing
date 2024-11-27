<template>
	<button class="burger-button" :class="{ open: props.open }">
		<svg width="34" height="34">
			<line
				x1="8"
				x2="26"
				y1="17"
				y2="17"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round" />
			<line
				x1="8"
				x2="26"
				y1="17"
				y2="17"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round" />
		</svg>
	</button>
</template>

<script lang="ts" setup>
const props = defineProps<{ open?: boolean }>();
</script>

<style lang="sass">
.burger-button
  width: 36px
  height: 36px
  padding: 0
  border: 1px solid var(--frame-color)
  border-radius: 9999px
  background: none
  box-sizing: border-box
  color: var(--text-color)

  svg
    display: block
    line
      transition: transform 0.2s
      transform-origin: 50% 50%

  svg>line:nth-child(1)
    transform: translate(0, -4px)
  svg>line:nth-child(2)
    transform: translate(0, 4px)

  &.open
    svg>line:nth-child(1)
      transform:  rotate(-45deg) scale(0.9, 1)
    svg>line:nth-child(2)
      transform:  rotate(225deg) scale(0.9, 1)
</style>
