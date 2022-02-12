interface baseSeo {
	seoTitle: string;
	seoType: string;
	seoDescription: string;
	seoImage: string;
	seoUrl: string;
	seoSiteName: string;

	// Social
	// need some extra logic
	seoTwitterCardStyle: string; 
	seoTwitterHandle: string;
}

export const createSEOMeta = (data:baseSeo) => [
	{
	  hid: 'og:title',
	  property: 'og:title',
	  content: data.seoTitle
	},
	//{ hid: 'og:publish_date', property: 'og:publish_date', content: data.publish_date || Date.now() },
	{ hid: 'og:type', property: 'og:type', content: data.seoType || "website" },
	{ hid: 'og:site_name', property: 'og:site_name', content: data.seoSiteName },
	{ hid: 'description', name: 'description', content: data.seoDescription },
	{
	  hid: 'og:description',
	  property: 'og:description',
	  content: data.seoDescription,
	},
	{ hid: 'og:image', property: 'og:image', content: data.seoImage },
	{
	  hid: 'og:url',
	  property: 'og:url',
	  content: data.seoUrl,
	},
	{
	  hid: 'twitter:card',
	  name: 'twitter:card',
	  content: data.seoTwitterCardStyle ? 'summary_large_image' : 'summary',
	},
	{
	  hid: 'twitter:creator',
	  name: 'twitter:creator',
	  content: data.seoTwitterHandle,
	},
  ]