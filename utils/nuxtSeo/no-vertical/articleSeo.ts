// TODO refactor to destructuring
// If a tag can have multiple values, just put multiple versions of the same <meta> tag on your page.
/*
	<meta property="article:author" content="name" />
	<meta property="article:author" content="name" />
*/

import { generateProfileTags } from '../util';

interface IarticleSEOMeta {
	publishedTime: Date;
	modifiedTime: Date;
	expirationTime: Date;
	authors: string[];
	category: string;
	tags: string[];
}


export const articleSEO = (article: IarticleSEOMeta) => [
	{
		hid: 'article:published_time',
		property: 'article:published_time',
		content: article.publishedTime
	},
	{
		hid: 'article:modified_time',
		property: 'article:modified_time',
		content: article.modifiedTime
	},
	{
		hid: 'article:expiration_time',
		property: 'article:expiration_time',
		content: article.expirationTime
	},

	generateProfileTags(article.authors),

	{
		hid: 'article:section',
		property: 'article:section',
		content: article.category
	},
	{
		hid: 'article:tag',
		property: 'article:tag',
		content: article.tags
	}
]