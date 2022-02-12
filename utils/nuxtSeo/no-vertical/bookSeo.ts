interface IbookSEO {
	author: string[];
	isbn: string;
	releaseDate: string;
	tags: string[];
  }
  
  export const bookSEO = (data:IbookSEO) => [
	// TODO needs to use a util function
	{hid: 'book:author', property: 'book:author', content: data.author},
	{hid:'isbn', property: 'isbn', content: data.isbn},
	{hid:'book:release_date', property: 'book:release_date', content: data.releaseDate},
	{hid:'book:tag', property: 'book:tag', content: data.tags},
  ]
  