<template>
	<footer class="app-footer">
		<RouterLink to="/">
			<img src="../assets/footer-logo.svg" alt="Mechanics" />
		</RouterLink>
		<div class="app-footer__links">
			<a class="app-link" v-for="item in settings.page.header?.links" :href="item.to">{{
				item.title
			}}</a>
			<a class="app-link flex-link" target="_blank" href="https://curvesdigital.ru">
				О Кёрвс
				<ExternalLinkIcon />
			</a>
		</div>
		<div class="policy-info">
			<RouterLink class="app-link" to="/privacy-policy">Политика конфиденциальности</RouterLink>
			<a class="app-link" href="#">Условия и положения</a>
		</div>
	</footer>
</template>

<script lang="ts" setup>
import { RouterLink } from '@curves_digital/builder';
import { useSettings } from '../pageSettings';
import ExternalLinkIcon from './icons/ExternalLinkIcon.vue';

const settings = useSettings();
</script>

<style lang="sass">
.app-footer
  height: 80px
  background-color: white
  display: flex
  align-items: center
  padding: 0 16px
  margin: 12px
  box-sizing: border-box
  gap: 40px
  border-radius: 4px

  @media(max-width: 1260px)
    flex-direction: column
    align-items: flex-start
    height: auto
    padding: 16px

.app-footer__links
  display: flex
  gap: 32px
  a
    color: var(--text-color)

  @media(max-width: 1260px)
    flex-wrap: wrap

.policy-info
  margin-left: auto
  display: flex
  gap: 20px

  @media(max-width: 1260px)
    margin: 0
</style>
