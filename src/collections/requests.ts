import { defineForm } from "@curves_digital/builder/form";

const [ requestsPlugin, useRequests ] = defineForm({
  id: "requests",
  title: "Заявки формы",
  fields: {
    name: { type: "string", name: "Имя" },
    email: { type: "string", name: "E-mail" },
    telegram: { type: "string", name: "Телеграм" },
    comment: { type: "string", name: "Комментарий" },
  }
})

export { requestsPlugin, useRequests }