<template>
  <div class="docs-layout">
    <aside class="docs-layout__sidebar">
      <RouterLink v-for="item in docsList" :to="item.url" class="app-link" :class="{ active: docsCollection.currentItem?.id === item.id }">
        {{ item.name }}
      </RouterLink>
    </aside>
    <div>
      <TextView :model-value="props.content" class="docs-layout__content"/>
      <div class="docs-layout__next-page-links">
        <RouterLink v-if="nextAndLastPages.last" :to="nextAndLastPages.last.url" class="docs-layout__next-page">
          <div class="subtitle">Предыдущая страница</div>
          <div class="title">{{ nextAndLastPages.last.name }}</div>
        </RouterLink>
        <div v-else class="docs-layout__next-page hidden"></div>

        <RouterLink v-if="nextAndLastPages.next" :to="nextAndLastPages.next.url" class="docs-layout__next-page">
          <div class="subtitle">Следующая страница</div>
          <div class="title">{{ nextAndLastPages.next.name }}</div>
        </RouterLink>
        <div v-else class="docs-layout__next-page hidden"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { RouterLink } from '@curves_digital/builder';
import { useDocs } from '../collections/docs';
import TextView from '../components/TextView.vue';
import { computed } from 'vue';

const docsCollection = useDocs()
const docsList = docsCollection.getAll()

const props = defineBlock({
  id: "docsLayout",
  props: {
    content: { type: "array", format: "richtext" },
  }
})

const nextAndLastPages = computed(() => {
  const currentItem = docsCollection.currentItem
  if (!currentItem) return { last: null, next: null }
  let index = docsList.findIndex(item => item.id === currentItem.id)
  return { last: docsList[index-1] ?? null, next: docsList[index+1] ?? null }
})

</script>

<style lang="sass">
.docs-layout
  display: flex
  min-height: calc(100vh - 174px)

.docs-layout__sidebar
  width: calc(50vw - 480px)
  background-color: var(--blocks-color)
  display: flex
  flex-direction: column
  padding: 24px 0
  padding-left: max(24px, calc(50vw - 700px))
  box-sizing: border-box
  gap: 16px
  min-width: 240px

  a
    width: fit-content
    font-size: 15px
    
    &.active
      color: var(--text-color)

.docs-layout__content
  width: 960px
  padding: 0 80px
  box-sizing: border-box

.docs-layout__next-page-links
  display: flex
  border-top: 1px solid var(--frame-color)
  margin: 0 80px
  gap: 20px
  padding-top: 24px
  padding-bottom: 60px

.docs-layout__next-page
  display: flex
  flex-direction: column
  flex: 1 1 50px
  text-decoration: none
  border: 1px solid var(--frame-color)
  border-radius: 8px
  padding: 12px 20px
  gap: 4px
  
  &:last-child
    text-align: right

  &:hover
    border-color: var(--text-tertiary-color)
  
  .subtitle
    color: var(--text-tertiary-color)
    font-size: 13px

  .title
    font-size: 14px
    color: var(--text-color)
    font-weight: 500

  &.hidden
    visibility: hidden


</style>