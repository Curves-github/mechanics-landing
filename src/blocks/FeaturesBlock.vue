<template>
	<DecorationContainer class="features-block" solid>
		<div v-for="featureGroup in props.features" class="features-block__item">
			<img
				v-if="featureGroup.icon"
				:src="icons[featureGroup.icon]"
				:alt="featureGroup.icon"
				height="56"
				class="icon" />
			<div class="title">
				{{ featureGroup.title }}
			</div>
			<div class="features-block__subitem-list">
				<div v-for="item in featureGroup.subitems" class="features-block__subitem">
					<img src="../assets/check.svg" alt="Check" width="20" />
					{{ item }}
				</div>
			</div>
		</div>
	</DecorationContainer>
</template>

<script lang="ts" setup>
import DecorationContainer from '../components/DecorationContainer.vue';
import { icons } from '../utils/icons';

const props = defineBlock({
	id: 'featuresBlock',
	group: 'Features',
	props: {
		features: {
			type: 'array',
			items: {
				icon: { type: 'string?', enum: Object.keys(icons) },
				title: { type: 'string' },
				subitems: { type: 'array', items: 'string' },
			},
		},
	},
});
</script>

<style lang="sass">
.features-block .decoration-container__inner
  display: flex

  @media(max-width: 870px)
    flex-direction: column

.features-block__item
  flex: 1 1 50px
  padding: 32px
  border-left: 1px solid #D8D8D8

  @media(max-width: 870px)
    border-top: 1px solid #D8D8D8

  &:first-child
    border-left: none

  .title
    font-size: 26px
    font-weight: 500
    font-family: "RF Dewi"
    letter-spacing: -0.06em

  &>.icon
    margin-bottom: 64px

.features-block__subitem-list
  display: flex
  flex-direction: column
  gap: 24px
  margin-top: 30px

.features-block__subitem
  font-weight: 500
  font-size: 15px
  letter-spacing: -0.04em
  display: flex
  align-items: flex-start
  gap: 6px
</style>
