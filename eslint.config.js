import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config({
	extends: [
	  'eslint:recommended',
	  'plugin:prettier/recommended',
	  ...svelte.configs['flat/recommended'],
	  prettier,
	  ...svelte.configs['flat/prettier'],
	],
	parserOptions: {
	  ecmaVersion: 12,
	  sourceType: 'module',
	},
	rules: {
	  quotes: ['error', 'single'],
	  semi: ['error', 'always'],
	},
	languageOptions: {
	  globals: {
		...globals.browser,
		...globals.node,
	  },
	},
	overrides: [
	  {
		files: ['**/*.svelte'],
		parserOptions: {
		  parser: ts.parser,
		},
	  },
	],
	ignorePatterns: ['build/', '.svelte-kit/', 'dist/'],
  });
