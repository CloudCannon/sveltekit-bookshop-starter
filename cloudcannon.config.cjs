module.exports = {
	paths: {
		collections: 'content',
		data: 'content/data',
		static: 'static',
		uploads: 'static/uploads'
	},

	'collections-config': {
		pages: {
			path: 'content/pages',
			url: '/[slug]',
			output: true,
			_icon: 'wysiwyg',
			_enabled_editors: ['visual', 'data']
		}
	}
};
