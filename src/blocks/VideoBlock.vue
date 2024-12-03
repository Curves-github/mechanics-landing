<template>
	<DecorationContainer class="video-block" solid>
		<div class="content">
			<img src="../assets/play.png" alt="Play" height="56" />
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';

defineBlock({
	id: 'videoBlock',
	props: {},
});
</script>

<style lang="css">
.video-block {
	height: 560px;
}

.video-block .content {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	background-color: white;
}
</style>
