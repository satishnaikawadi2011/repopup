import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import json from '@rollup/plugin-json';
import url from 'rollup-plugin-url';

const packageJson = require('./package.json');

export default {
	input   : 'src/index.ts',
	output  : [
		{
			file      : packageJson.main,
			format    : 'cjs',
			sourcemap : true
		},
		{
			file      : packageJson.module,
			format    : 'esm',
			sourcemap : true
		}
	],
	plugins : [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		postcss(),
		json(),
		url({
			// by default, rollup-plugin-url will not handle font files
			include : [
				'**/*.woff',
				'**/*.woff2',
				'**/*.ttf'
			],
			// setting infinite limit will ensure that the files
			// are always bundled with the code, not copied to /dist
			limit   : Infinity
		})
	]
};
