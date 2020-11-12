module.exports = {
	'*.{js,ts}': 'prettier --write --use-tabs',
	'*.{json,yml}': 'prettier --write',
	'!(*.api).md': 'prettier --write',
}
