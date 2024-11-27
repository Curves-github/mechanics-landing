<template>
	<div class="v-dialog send-request-dialog">
		<div class="decoration-column">
			<div class="decoration-label heading">Механика v1.1</div>
		</div>
		<button class="close-button" @click="dialogStore.close"><CloseIcon /></button>
		<form v-if="mode === 'form'" class="content" @submit="apply">
			<h2>Оставьте заявку<br />на получение демо</h2>
			<VInput v-bind="register('name')" placeholder="Имя" />
			<VInput v-bind="register('email')" placeholder="Почта" />
			<VInput v-bind="register('telegram')" placeholder="Телеграм" />
			<VInput v-bind="register('comment')" placeholder="Комментарий" multiline />
			<VButton :disabled="!requiredFilled || !values.agreement || pending">
				Отправить форму
				<ArrowRightIcon style="margin-right: -2px; margin-bottom: -3px" />
			</VButton>
			<VCheckbox v-bind="register('agreement')">
				<template #label>
					Нажимая кнопку “Отправить” Вы соглашаетесь<br />с условиями
					<a href="https://m.curvesdigital.ru/privacy-policy" target="_blank"
						>Обработки персональных данных.</a
					>
				</template>
			</VCheckbox>
		</form>
		<div v-else class="content justify-center">
			<img height="34" src="../../assets/mail.svg" alt="Mail" />
			<h2>Заявка успешно<br />отправлена</h2>
			<div>
				Команда Механики свяжется с Вами<br />
				в ближайшее время,и вы получите доступ к демо-версии продукта
			</div>
			<VButton @click="dialogStore.close">
				Вернуться на главную
				<ArrowRightIcon style="margin-right: -2px; margin-bottom: -3px" />
			</VButton>
			<div class="send-request-dialog__subtitle">
				Остались вопросы? <a href="mailto:hi@curves.digital.ru">Свяжитесь</a> с нами по почте.
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useForm } from 'vuesix';
import { useRequests } from '../../collections/requests';
import { useDialogStore } from '../../stores/dialogStore';
import ArrowRightIcon from '../icons/ArrowRightIcon.vue';
import CloseIcon from '../icons/CloseIcon.vue';
import VButton from '../VButton.vue';
import VCheckbox from '../VCheckbox.vue';
import VInput from '../VInput.vue';

const dialogStore = useDialogStore();
const mode = ref('form');
const { register, handleSubmit, values, requiredFilled, pending } = useForm(
	{
		name: '',
		email: '',
		telegram: '',
		comment: '',
		agreement: false,
	},
	{ required: ['name', 'email'] },
);

const requests = useRequests();

const apply = handleSubmit(async (values) => {
	if (!values.agreement) return;
	await requests.send(values);
	mode.value = 'complete';
});
</script>

<style lang="css">
.send-request-dialog {
	position: relative;
	display: flex;
	width: 972px;
	max-width: 94vw;
	max-height: 96vh;
	overflow: hidden;
	overflow: auto;
	background-color: var(--background-color);
	border-radius: 4px;
}

.send-request-dialog .decoration-column {
	position: relative;
	flex-shrink: 0;
	width: 580px;
	height: 580px;
	background-image: url('../../assets/m-landing.webp');
	background-position: center;
	background-size: cover;
}

@media (width <= 1050px) {
	.send-request-dialog .decoration-column {
		display: none;
	}
}

.send-request-dialog .close-button {
	position: absolute;
	top: 16px;
	right: 16px;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 32px;
	height: 32px;
	padding: 0;
	color: var(--text-secondary-color);
	background: none;
	border: 1px solid #ededed;
	border-radius: 6px;
}

.send-request-dialog .content {
	position: relative;
	display: flex;
	flex: 1 1 auto;
	flex-direction: column;
	gap: 16px;
	padding: 24px 22px;
}

.send-request-dialog h2 {
	margin: 0;
	font-size: 28px;
	letter-spacing: -0.06em;
}

.send-request-dialog .v-button {
	align-self: flex-start;
	margin-top: 8px;
}

.send-request-dialog .decoration-label {
	position: absolute;
	right: 0;
	bottom: 12px;
	left: 0;
	color: #b7b7b7;
	text-align: center;
}

.send-request-dialog .content.justify-center {
	align-items: center;
	justify-content: center;
	padding-bottom: 60px;
	text-align: center;
}

.send-request-dialog .content.justify-center .v-button {
	align-self: center;
}

.send-request-dialog__subtitle {
	position: absolute;
	right: 12px;
	bottom: 24px;
	left: 12px;
	color: var(--text-secondary-color);
}

.send-request-dialog__subtitle a {
	color: var(--text-secondary-color);
}
</style>
