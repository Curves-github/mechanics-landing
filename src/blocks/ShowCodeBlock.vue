<template>
	<DecorationContainer solid class="show-code-block">
		<div class="content">
			<div class="heading">Этот сайт тоже [собран] <br />на Механике</div>
			<VButton
				component="a"
				target="_blank"
				href="https://github.com/Curves-github/mechanics-landing">
				<CodeIcon /> Посмотреть код
			</VButton>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import CodeIcon from '../components/icons/CodeIcon.vue';
import VButton from '../components/VButton.vue';

defineBlock({
	id: 'showCodeBlock',
});
</script>

<style lang="css">
.show-code-block .decoration-container__inner {
	height: 280px;
}

.show-code-block .decoration-container__solid-frame {
	background-color: white;
}

.show-code-block .content {
	position: relative;
	z-index: 3;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 32px;
}

.show-code-block .content .v-button {
	align-self: flex-start;
	margin-top: auto;
}

.show-code-block .heading {
	font-size: 36px;
}
</style>
