<template>
  <div class="v-dialog send-request-dialog">
    <div class="decoration-column">
      <div class="decoration-label heading">Механика v1.1</div>
    </div>
    <button class="close-button" @click="dialogStore.close"><CloseIcon/></button>
    <form v-if="mode === 'form'" class="content" @submit="apply">
      <h2>Оставьте заявку<br/>на получение демо</h2>
      <VInput v-bind="register('name')" placeholder="Имя"/>
      <VInput v-bind="register('email')" placeholder="Почта"/>
      <VInput v-bind="register('telegram')" placeholder="Телеграм"/>
      <VInput v-bind="register('comment')" placeholder="Комментарий" multiline/>
      <VButton :disabled="!requiredFilled || !values.agreement || pending">
        Отправить форму
        <ArrowRightIcon style="margin-bottom: -3px; margin-right: -2px"/>
      </VButton>
      <VCheckbox v-bind="register('agreement')">
        <template #label>
          Нажимая кнопку “Отправить” Вы соглашаетесь<br/>с условиями <a>Обработки персональных данных.</a>
        </template>
      </VCheckbox>
    </form>
    <div v-else class="content justify-center">
      <img height="34" src="../../assets/mail.svg" alt="Mail"/>
      <h2>Заявка успешно<br/>отправлена</h2>
      <div>
        Команда Механики свяжется с Вами<br/>
        в ближайшее время,и вы получите доступ
        к демо-версии продукта
      </div>
      <VButton @click="dialogStore.close">
        Вернуться на главную
        <ArrowRightIcon style="margin-bottom: -3px; margin-right: -2px"/>
      </VButton>
      <div class="send-request-dialog__subtitle">
        Остались вопросы? <a href="mailto:hi@curves.digital.ru">Свяжитесь</a> с нами по почте.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from 'vuesix';
import ArrowRightIcon from '../icons/ArrowRightIcon.vue';
import VButton from '../VButton.vue';
import VCheckbox from '../VCheckbox.vue';
import VInput from '../VInput.vue';
import CloseIcon from '../icons/CloseIcon.vue';
import { useDialogStore } from '../../stores/dialogStore';
import { useRequests } from '../../collections/requests';
import { ref } from 'vue';

const dialogStore = useDialogStore()
const mode = ref("form")
const { register, handleSubmit, values, requiredFilled, pending } = useForm({
  name: "",
  email: "",
  telegram: "",
  comment: "",
  agreement: false
}, { required: [ "name", "email" ]})

const requests = useRequests()

const apply = handleSubmit(async (values) => {
  if (!values.agreement) return
  await requests.send(values)
  mode.value = "complete"
})

</script>

<style lang="sass">
.send-request-dialog
  background-color: var(--background-color)
  width: 972px
  display: flex
  border-radius: 4px
  overflow: hidden
  max-width: 94vw
  max-height: 96vh
  overflow: auto
  position: relative

  .decoration-column
    width: 580px
    height: 580px
    background-image: url(../../assets/m-landing.webp)
    background-size: cover
    background-position: center
    position: relative
    flex-shrink: 0

    @media(max-width: 1050px)
      display: none

  .close-button
    position: absolute
    top: 16px
    right: 16px
    width: 32px
    height: 32px
    display: flex
    align-items: center
    justify-content: center
    padding: 0
    border: 1px solid #EDEDED
    border-radius: 6px
    background: none
    color: var(--text-secondary-color)
    z-index: 1

  .content
    padding: 24px 22px
    display: flex
    flex-direction: column
    gap: 16px
    flex: 1 1 auto
    position: relative

  h2
    font-size: 28px
    letter-spacing: -0.06em
    margin: 0

  .v-button
    align-self: flex-start
    margin-top: 8px

  .decoration-label
    position: absolute
    bottom: 12px
    left: 0
    right: 0
    text-align: center
    color: #B7B7B7

  .content.justify-center
    justify-content: center
    align-items: center
    text-align: center
    padding-bottom: 60px

    .v-button
      align-self: center
  
.send-request-dialog__subtitle
  position: absolute
  bottom: 24px
  right: 12px
  left: 12px
  color: var(--text-secondary-color)
  a
    color: var(--text-secondary-color)

</style>