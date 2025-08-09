// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import eslintPrettier from 'eslint-config-prettier';

export default tseslint.config(
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		plugins: {
			'@stylistic': stylistic,
		},
	},
	eslintPrettier,
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: ['*.{js,cjs,mjs,ts,cts,mts}'],
				},
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
);
