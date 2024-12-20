# Пример проекта на Механике

<!-- Теги: licence: mit, curves -->

Механика — это vite-плагин, который добавляет CMS к страницам вашего vuejs проекта. Мы позаботились, чтобы механика не добавляла разработчикам рутины, поэтому в ней есть всё для современного vue-проекта:

- Статическая генерация и серверный рендеринг страниц
- Работа с коллекциями (статьями и другими повторяющимися элементами)
- Работа с формами
- Эффективная загрузка картинок и видео (<Image />)
- Удобная работа с custom properties из CMS
- Высокие показатели web-vitals из коробки
- …и многое другое

## Как работать с демо-проектом

1.  Клонируем репозиторий и устанавливаем зависимости

    ```jsx

    git clone git@github.com/curves-github/mechanics-landing
    cd mechanigcs-landing
    npm ci
    ```

2.  Запускаем проект в режиме разработки

    ```bash
    npm run dev
    ```

## Как устроена механика

> Подробную информацию можно найти в документации

### Структура проекта

```bash
src
├── App.vue
├── blocks/ # Настраиваемые через CMS блоки
│   ├── AboutCurvesBlock.vue
├── ├── ...
├── components # Ваши компоненты
│   ├── VButton.vue
├── ├── ...
├── entry.ts # Entry для SSG и SSR
```

### Как добавить блок

Создаём в папке `src/blocks` .vue файл с содержимым ниже. Блок будет доступен в CMS после вызова команды `npm deploy`.

```html
<template>
  <h1>{{ props.title }}</h1>
</template>

<script lang="ts" setup>
  const props = defineBlock({
    id: 'H1',
    props: {
      title: {
        type: 'string',
        default: 'Заголовок',
      },
    },
  });
</script>
```
