import { defineCollection } from "@curves_digital/builder/collection";

const [ docsPlugin, useDocs ] = defineCollection({
  id: "docs",
  title: "Документация",
  itemTitleProp: "title",
  props: {
    title: { type: "string" },
    text: { type: "array", format: "richtext" }
  },
})

export { docsPlugin, useDocs }