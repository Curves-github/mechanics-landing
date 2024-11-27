<template>
	<div class="curves-label">
		<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
			<g clip-path="url(#clip0_525_5562)">
				<path
					d="M1.66663 10.0001C1.66663 10.0001 3.75416 10.3776 4.99996 10.0001C8.35439 8.98359 9.58329 1.66675 9.58329 1.66675L9.99996 18.3334C9.99996 18.3334 11.6455 11.0166 15 10.0001C16.2458 9.62257 18.3333 10.0001 18.3333 10.0001"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round" />
			</g>
			<defs>
				<clipPath id="clip0_525_5562">
					<rect width="20" height="20" rx="4" fill="currentColor" />
				</clipPath>
			</defs>
		</svg>
		проект студии Кёрвс
	</div>
</template>

<script lang="ts" setup></script>

<style lang="css">
.curves-label {
	display: flex;
	gap: 8px;
	align-items: center;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: -0.04em;
}

@media (width <= 870px) {
	.curves-label {
		font-size: 14px;
	}
}
</style>
