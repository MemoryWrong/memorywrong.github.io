module.exports = function (plop) {
	// controller generator
	plop.setGenerator('post', {
		description: 'page template `post` logic',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'post file html name please'
			},
			{
				type: 'input',
				name: 'date',
				message: 'date please (April 25, 2017)'
			},
			{
				type: 'input',
				name: 'title',
				message: 'specify blog title'
			},
			{
				type: 'input',
				name: 'des',
				message: 'des please'
			},
		],
		actions: [{
			type: 'add',
			path: 'post/{{name}}.html',
			templateFile: 'plop-templates/post.hbs'
		}]
	});
};

