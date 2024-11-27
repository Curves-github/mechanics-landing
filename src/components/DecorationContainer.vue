<template>
	<div class="decoration-container" :class="{ solid: props.solid }">
		<div class="decoration-container__side-border"></div>
		<div class="decoration-container__inner" :class="{ solid: props.solid }">
			<slot></slot>
			<template v-if="props.markers">
				<div class="decoration-container__marker top-left"></div>
				<div class="decoration-container__marker top-right"></div>
				<div class="decoration-container__marker bottom-left"></div>
				<div class="decoration-container__marker bottom-right"></div>
			</template>
			<template v-else>
				<div class="decoration-container__marker-alt top-left"></div>
				<div class="decoration-container__marker-alt top-right"></div>
				<div class="decoration-container__marker-alt bottom-left"></div>
				<div class="decoration-container__marker-alt bottom-right"></div>
			</template>
			<div v-if="props.solid" class="decoration-container__solid-frame"></div>
			<div v-if="props.blinds" class="decoration-container__blinds">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
		<div class="decoration-container__side-border"></div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps<{ markers?: boolean; solid?: boolean; blinds?: boolean }>();
</script>

<style lang="css">
.decoration-container {
	display: flex;
	scroll-margin-top: 80px;
}

.decoration-container__side-border {
	box-sizing: border-box;
	flex: 1 1 50px;
	border-top: 1px solid var(--frame-color);
	border-bottom: 1px solid var(--frame-color);
	border-bottom: none;
}

.decoration-container__marker-alt.top-right {
	top: -20px;
	right: -20px;
}

.decoration-container__marker-alt.top-left {
	top: -20px;
	left: -20px;
}

.decoration-container + .decoration-container .decoration-container__marker-alt.top-left,
.decoration-container + .decoration-container .decoration-container__marker-alt.top-right {
	display: none;
}

.decoration-container__inner {
	position: relative;
	top: initial;
	right: initial;
	bottom: initial;
	box-sizing: border-box;
	width: 1120px;
	max-width: 90vw;
	height: 100%;
	margin: 0 auto;
	border: 1px solid var(--frame-color);
	border-bottom: none;
}

.decoration-container__inner.solid {
	border: none;
}

.header__blob + .decoration-container .decoration-container__inner {
	border-top: none;
}

.decoration-container.solid + .decoration-container .decoration-container__inner {
	border-top: none;
}

.header__blob + .decoration-container .decoration-container__marker-alt.top-right {
	display: none;
}

.header__blob + .decoration-container .decoration-container__marker-alt.top-left {
	display: none;
}

.header__blob + .decoration-container .decoration-container__side-border {
	border-top: none;
}

.decoration-container__marker.top-right {
	top: -20px;
	right: -20px;
}

.decoration-container__marker.top-left {
	top: -20px;
	left: -20px;
}

.decoration-container__marker.bottom-left {
	bottom: -20px;
	left: -20px;
}

.decoration-container__marker-alt.bottom-left {
	bottom: -20px;
	left: -20px;
}

.decoration-container__marker.bottom-right {
	right: -20px;
	bottom: -20px;
}

.decoration-container__marker-alt.bottom-right {
	right: -20px;
	bottom: -20px;
}

.decoration-container__marker::after {
	position: absolute;
	top: 15px;
	left: 15px;
	box-sizing: border-box;
	width: 10px;
	height: 10px;
	content: '';
	border: 1px solid var(--frame-color);
}

.decoration-container__solid-frame {
	position: absolute;
	inset: 0;
	bottom: -1px;
	z-index: 2;
	pointer-events: none;
	border: 1px solid var(--frame-color);
}

.decoration-container__blinds {
	position: absolute;
	inset: 20px 0;
	z-index: -1;
	display: flex;
	justify-content: space-evenly;
}

.decoration-container__blinds div {
	border-right: 1px solid var(--frame-color);
}
</style>
