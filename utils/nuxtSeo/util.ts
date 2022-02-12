// TODO test
export const generateProfileTags = (profiles: Array<String>): String => {
	profiles.forEach(profile => {
		return `<meta property="article:author" 
		ontent="${profile}" />`
	})
	return '';
}