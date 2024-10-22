import { defineSettings } from "@curves_digital/builder";

const [ settingsPlugin, useSettings ] = defineSettings({
  page: {
    header: {
      links: {
        type: "array",
        items: {
          title: { type: "string" },
          to: { type: "string" }
        }
      }
    }
  },
  site: {
    name: "string"
  }
})

export { settingsPlugin, useSettings }