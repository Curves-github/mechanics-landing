import { defineCollection } from '@curves_digital/builder';

const [articlesPlugin, useArticles] = defineCollection({
	id: 'articles',
	title: 'Статьи',
	itemTitleProp: 'title',
	props: {
		title: { type: 'string' },
		text: { type: 'array', format: 'richtext' },
	},
});

export { articlesPlugin, useArticles };
