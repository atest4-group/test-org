module.exports = {
	hooks: {
		'pre-commit': 'lint-staged && yarn lint && yarn build && yarn test',
		'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
	},
}
